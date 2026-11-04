// =================================================================
// worker/src/index.js
// API Lisensi & Pengiriman Soal Premium SNBT (Cloudflare Worker + D1)
//
// Endpoint publik (siswa):
//   POST /activate        { token, deviceId }  -> aktivasi / cek lisensi
//   GET  /paket/:key      Authorization: Bearer <token>, X-Device-Id
//
// Endpoint admin (header X-Admin-Key):
//   POST /admin/token     { nama, wa, days?, maxDevices? }
//   GET  /admin/list
//   POST /admin/revoke    { id }
// =================================================================

import { RETENTION_CONFIG } from './retention-config.js';
import { PACKAGES_CONFIG, getPackageDetails } from './packages-config.js';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // tanpa 0/O/1/I
const DAY_MS = 24 * 60 * 60 * 1000;

// ---------- Utilitas ----------
function generateToken(prefix = 'SNBT') {
    const bytes = crypto.getRandomValues(new Uint8Array(12));
    const chars = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
    const pfx = String(prefix || 'SNBT').trim().toUpperCase().startsWith('IELT') ? 'IELT' : 'SNBT';
    return `${pfx}-${chars.slice(0, 4)}-${chars.slice(4, 8)}-${chars.slice(8, 12)}`;
}

async function sha256Hex(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function hmacSha256Hex(text, secret) {
    const enc = new TextEncoder();
    const keyData = enc.encode(String(secret || 'ajarkita-ip-pepper-secret-2026'));
    const key = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', key, enc.encode(String(text || '')));
    return Array.from(new Uint8Array(signature), (b) => b.toString(16).padStart(2, '0')).join('');
}

function getIpPepper(env) {
    return (env && env.IP_PEPPER) || 'ajarkita-ip-pepper-secret-2026';
}

async function getIpHash(ipRaw, env) {
    const pepper = getIpPepper(env);
    const fullHmac = await hmacSha256Hex(String(ipRaw || '0.0.0.0').trim(), pepper);
    return fullHmac.slice(0, 24);
}

function clientIp(request) {
    if (!request || !request.headers) return '0.0.0.0';
    const cfIp = request.headers.get('CF-Connecting-IP');
    if (cfIp) return cfIp.trim();
    const xForwarded = request.headers.get('X-Forwarded-For');
    if (xForwarded) return xForwarded.split(',')[0].trim();
    return '0.0.0.0';
}

function normalizeToken(raw) {
    return String(raw || '').trim().toUpperCase();
}

function timingSafeEqual(a, b) {
    const enc = new TextEncoder();
    const x = enc.encode(String(a));
    const y = enc.encode(String(b));
    if (x.length !== y.length) return false;
    let diff = 0;
    for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
    return diff === 0;
}

function allowedOrigin(request, env) {
    const origin = request.headers.get('Origin');
    if (!origin) return null;
    if (origin === 'null') return 'null';
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return origin;
    const list = String(env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
    return list.includes(origin) ? origin : null;
}

function corsHeaders(request, env) {
    const origin = allowedOrigin(request, env);
    const headers = {
        'Vary': 'Origin',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Device-Id, X-Admin-Key, X-Teacher-Key',
        'Access-Control-Max-Age': '86400'
    };
    if (origin) headers['Access-Control-Allow-Origin'] = origin;
    return headers;
}

function json(request, env, data, status = 200, extraHeaders = {}) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
            ...corsHeaders(request, env),
            ...extraHeaders
        }
    });
}

/**
 * Pengecekan otomatis ambang batas kapasitas sistem (Free Tier).
 * Ambang 80%: Masuk "Mode Hemat" (eco_mode).
 * Ambang 100%: Batas kuota tercapai (HTTP 429 quota_exceeded).
 */
async function checkCapacityState(env) {
    try {
        const now = Date.now();
        const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;
        const wibNow = new Date(now + WIB_OFFSET_MS);
        const startOfDayWib = new Date(Date.UTC(wibNow.getUTCFullYear(), wibNow.getUTCMonth(), wibNow.getUTCDate()) - WIB_OFFSET_MS);
        const startOfDayMs = startOfDayWib.getTime();

        const [storageStats, todayStats] = await Promise.all([
            env.DB.prepare(`
                SELECT COALESCE(SUM(file_size_bytes), 0) as total_bytes
                FROM speaking_recordings
                WHERE deleted_at IS NULL AND length(audio_data) > 0
            `).first().catch(() => ({ total_bytes: 0 })),
            env.DB.prepare(`
                SELECT 
                    (SELECT COUNT(*) FROM listening_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as lis_today,
                    (SELECT COUNT(*) FROM reading_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as read_today,
                    (SELECT COUNT(*) FROM writing_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as write_today,
                    (SELECT COUNT(*) FROM speaking_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as spk_today,
                    (SELECT COUNT(*) FROM speaking_recordings WHERE uploaded_at >= ?) as rec_today
            `).bind(startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs).first().catch(() => ({
                lis_today: 0, read_today: 0, write_today: 0, spk_today: 0, rec_today: 0
            }))
        ]);

        const totalBytes = Number(storageStats?.total_bytes || 0);
        const lisToday = Number(todayStats?.lis_today || 0);
        const readToday = Number(todayStats?.read_today || 0);
        const writeToday = Number(todayStats?.write_today || 0);
        const spkToday = Number(todayStats?.spk_today || 0);
        const recToday = Number(todayStats?.rec_today || 0);

        const estRows = (lisToday * 3) + (readToday * 3) + (writeToday * 15) + (spkToday * 5) + (recToday * 1) + 2;
        const estReqs = (lisToday * 15) + (readToday * 15) + (writeToday * 30) + (spkToday * 30) + (recToday * 3) + 25;

        // Ambang 80% (Mode Hemat): Storage >= 400 MB (419.430.400 B), Req >= 80.000, Rows >= 80.000
        const isEcoMode = (totalBytes >= 419430400) || (estReqs >= 80000) || (estRows >= 80000);

        // Batas 100% (Kuota Habis): Storage >= 500 MB (524.288.000 B), Req >= 100.000, Rows >= 100.000
        const isQuotaExceeded = (totalBytes >= 524288000) || (estReqs >= 100000) || (estRows >= 100000);

        return { isEcoMode, isQuotaExceeded, estReqs, estRows, totalBytes };
    } catch {
        return { isEcoMode: false, isQuotaExceeded: false, estReqs: 0, estRows: 0, totalBytes: 0 };
    }
}

async function readJson(request) {
    try {
        return await request.json();
    } catch (e) {
        return {};
    }
}

function validDeviceId(id) {
    return typeof id === 'string' && /^[A-Za-z0-9_-]{16,64}$/.test(id);
}

async function ensureLicensesSchema(env) {
    try {
        await env.DB.prepare("ALTER TABLE licenses ADD COLUMN package_type TEXT DEFAULT 'snbt'").run();
    } catch {}
    try {
        await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_licenses_pkg ON licenses(package_type)").run();
    } catch {}
}

// ---------- Logika lisensi ----------
// register=true  -> boleh mengaktifkan lisensi & mendaftarkan perangkat baru
// register=false -> perangkat harus sudah terdaftar (dipakai untuk ambil soal)
// requiredPackage -> 'ielts' atau 'snbt' (opsional)
async function authorize(env, token, deviceId, register, requiredPackage = null) {
    if (!token || !validDeviceId(deviceId)) {
        return { ok: false, status: 400, error: 'Token atau ID perangkat tidak valid.', reason: 'invalid_request' };
    }

    const hash = await sha256Hex(token);
    const lic = await env.DB.prepare('SELECT * FROM licenses WHERE token_hash = ?').bind(hash).first();
    if (!lic) return { ok: false, status: 401, error: 'Kode token tidak ditemukan.', reason: 'token_not_found' };
    if (lic.revoked) return { ok: false, status: 403, error: 'Lisensi ini telah dinonaktifkan (dicabut). Hubungi admin.', reason: 'token_revoked' };

    const packageType = String(lic.package_type || 'snbt').trim().toLowerCase();
    if (requiredPackage) {
        const req = String(requiredPackage).trim().toLowerCase();
        if (packageType !== req && packageType !== 'all') {
            return {
                ok: false,
                status: 403,
                error: `Lisensi ini khusus untuk paket ${packageType.toUpperCase()}, bukan untuk paket ${req.toUpperCase()}.`,
                reason: 'wrong_package'
            };
        }
    }

    const now = Date.now();
    let expiresAt = lic.expires_at;

    if (!lic.activated_at) {
        if (!register) return { ok: false, status: 403, error: 'Lisensi belum diaktifkan.', reason: 'not_activated' };
        expiresAt = now + lic.duration_days * DAY_MS;
        await env.DB.prepare('UPDATE licenses SET activated_at = ?, expires_at = ? WHERE id = ?')
            .bind(now, expiresAt, lic.id).run();
    }

    if (now > expiresAt) {
        return { ok: false, status: 403, error: 'Masa aktif lisensi sudah habis.', expiresAt, reason: 'token_expired' };
    }

    const device = await env.DB.prepare('SELECT 1 AS ok FROM devices WHERE license_id = ? AND device_id = ?')
        .bind(lic.id, deviceId).first();

    if (!device) {
        if (!register) return { ok: false, status: 403, error: 'Perangkat ini belum terdaftar untuk lisensi tersebut.', reason: 'unregistered_device' };
        
        // Poin 4: Perlindungan berbasis SQL Atomik mencegah race-condition melebihi max_devices
        // Menggunakan conditional INSERT yang memeriksa COUNT(*) di dalam transaksi database tunggal
        const insertRes = await env.DB.prepare(`
            INSERT INTO devices (license_id, device_id, first_seen)
            SELECT ?, ?, ?
            WHERE (SELECT COUNT(*) FROM devices WHERE license_id = ?) < ?
        `).bind(lic.id, deviceId, now, lic.id, lic.max_devices).run().catch(() => null);

        const inserted = insertRes && ((insertRes.meta && insertRes.meta.changes > 0) || insertRes.changes > 0);
        if (!inserted) {
            const checkAgain = await env.DB.prepare('SELECT 1 AS ok FROM devices WHERE license_id = ? AND device_id = ?')
                .bind(lic.id, deviceId).first().catch(() => null);
            if (!checkAgain) {
                return {
                    ok: false,
                    status: 403,
                    error: `Batas ${lic.max_devices} perangkat untuk lisensi ini sudah tercapai. Hubungi admin untuk reset.`,
                    reason: 'max_devices_exceeded'
                };
            }
        }
    }

    return {
        ok: true,
        licenseId: lic.id,
        nama: lic.nama || '',
        packageType,
        expiresAt,
        remainingDays: Math.max(0, Math.ceil((expiresAt - now) / DAY_MS)),
        reason: 'success'
    };
}

function bearerToken(request) {
    const h = request.headers.get('Authorization') || '';
    return h.toLowerCase().startsWith('bearer ') ? normalizeToken(h.slice(7)) : '';
}

function isAdmin(request, env) {
    const key = (request.headers.get('X-Admin-Key') || '').trim();
    if (!key || !env.ADMIN_KEY) return false;
    const adminSecret = typeof env.ADMIN_KEY === 'string' ? env.ADMIN_KEY.trim() : '';
    const teacherSecret = typeof env.TEACHER_KEY === 'string' ? env.TEACHER_KEY.trim() : '';
    // Mencegah guru menyamar sebagai admin jika TEACHER_KEY diserahkan di X-Admin-Key
    if (teacherSecret && timingSafeEqual(key, teacherSecret)) {
        return false;
    }
    return adminSecret.length > 0 && timingSafeEqual(key, adminSecret);
}

function isTeacherOrAdmin(request, env) {
    const key = (request.headers.get('X-Admin-Key') || request.headers.get('X-Teacher-Key') || '').trim();
    if (!key) return false;
    const teacherSecret = typeof env.TEACHER_KEY === 'string' ? env.TEACHER_KEY.trim() : '';
    // FAIL-CLOSED: jika TEACHER_KEY belum disetel di Worker Secret, akses guru ditolak
    if (teacherSecret && timingSafeEqual(key, teacherSecret)) {
        return true;
    }
    return isAdmin(request, env);
}

async function resolveAdminLicense(env, body) {
    if (!body || typeof body !== 'object') return null;
    let lic = null;
    const id = parseInt(body.id || body.licenseId, 10);
    if (id && id > 0) {
        lic = await env.DB.prepare('SELECT id, nama, wa, package_type, duration_days, max_devices, revoked, expires_at FROM licenses WHERE id = ?').bind(id).first();
    }
    if (!lic && typeof body.token === 'string' && body.token.trim()) {
        const norm = normalizeToken(body.token);
        const hash = await sha256Hex(norm);
        lic = await env.DB.prepare('SELECT id, nama, wa, package_type, duration_days, max_devices, revoked, expires_at FROM licenses WHERE token_hash = ?').bind(hash).first();
    }
    if (!lic && typeof body.wa === 'string' && body.wa.trim()) {
        const cleanWa = body.wa.trim().replace(/[^0-9]/g, '');
        if (cleanWa.length >= 8) {
            lic = await env.DB.prepare('SELECT id, nama, wa, package_type, duration_days, max_devices, revoked, expires_at FROM licenses WHERE wa LIKE ?').bind(`%${cleanWa}%`).first();
        }
    }
    return lic;
}

// ---------- Filter Kata Kasar & Spam Komentar Sains Populer ----------
const BLOCKED_WORDS_REGEX = /\b(anjing|anjir|anjay|babi|bangsat|bajingan|tolol|goblog|goblok|kontol|memek|ngentot|pepek|jembut|asu|kampret|keparat|tai|taik|brengsek|sialan|lonte|pelacur|perek|bokep|porno|judol|slot|gacor|maxwin|zeus|togel|pragmatic|sbobet|casino|poker)\b/i;
const URL_SPAM_REGEX = /(https?:\/\/|www\.|[a-z0-9-]+\.(com|net|org|xyz|vip|bet|io|me|link)\/)/i;

function containsProfanityOrSpam(text) {
    const clean = String(text || '').trim();
    if (!clean) return 'Isi komentar tidak boleh kosong.';
    if (clean.length < 3) return 'Komentar terlalu pendek (minimal 3 karakter).';
    if (clean.length > 1000) return 'Komentar terlalu panjang (maksimal 1.000 karakter).';
    if (BLOCKED_WORDS_REGEX.test(clean)) {
        return 'Komentar mengandung kata yang tidak pantas. Mari berdiskusi secara santun dan ilmiah.';
    }
    if (URL_SPAM_REGEX.test(clean)) {
        return 'Demi keamanan, tautan eksternal (URL/link) tidak diperbolehkan di kolom komentar.';
    }
    return null;
}

async function ensureCommentsSchema(env) {
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS article_comments (
            id           INTEGER PRIMARY KEY AUTOINCREMENT,
            article_slug TEXT    NOT NULL,
            parent_id    INTEGER DEFAULT NULL,
            nama         TEXT    NOT NULL,
            sekolah      TEXT    DEFAULT '',
            pesan        TEXT    NOT NULL,
            is_admin     INTEGER NOT NULL DEFAULT 0,
            likes        INTEGER NOT NULL DEFAULT 0,
            device_id    TEXT,
            ip_hash      TEXT,
            created_at   INTEGER NOT NULL
        )
    `).run();
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS article_comment_likes (
            comment_id INTEGER NOT NULL,
            device_id  TEXT    NOT NULL,
            created_at INTEGER NOT NULL,
            PRIMARY KEY (comment_id, device_id)
        )
    `).run();
}

async function ensureScholarshipSchema(env) {
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS scholarship_claims (
            id             INTEGER PRIMARY KEY AUTOINCREMENT,
            device_id      TEXT    NOT NULL UNIQUE,
            ip_hash        TEXT,
            wa             TEXT    NOT NULL UNIQUE,
            nama           TEXT    NOT NULL,
            license_id     INTEGER NOT NULL,
            total_rp       INTEGER NOT NULL,
            mastered_count INTEGER NOT NULL,
            claimed_at     INTEGER NOT NULL,
            FOREIGN KEY (license_id) REFERENCES licenses(id)
        )
    `).run();
    await env.DB.prepare(`
        CREATE INDEX IF NOT EXISTS idx_scholarship_claimed_at ON scholarship_claims(claimed_at)
    `).run();
}

// ---------- IELTS Listening Engine Helpers & Schema ----------
async function ensureListeningSchema(env) {
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS listening_sessions (
            id             TEXT    PRIMARY KEY,
            test_id        TEXT    NOT NULL,
            device_id      TEXT    NOT NULL,
            nama_peserta   TEXT    NOT NULL,
            kelas          TEXT    NOT NULL,
            started_at     INTEGER NOT NULL,
            submitted_at   INTEGER DEFAULT NULL,
            current_sec    INTEGER NOT NULL DEFAULT 1,
            answers_json   TEXT    DEFAULT '{}',
            raw_score      INTEGER DEFAULT NULL,
            band_score     REAL    DEFAULT NULL,
            section_scores TEXT    DEFAULT '{}',
            is_late        INTEGER DEFAULT 0,
            status         TEXT    NOT NULL DEFAULT 'in_progress'
        )
    `).run();
    try { await env.DB.prepare('ALTER TABLE listening_sessions ADD COLUMN is_late INTEGER DEFAULT 0').run(); } catch {}
    try { await env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_listening_status_submitted ON listening_sessions(status, submitted_at DESC)').run(); } catch {}
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS listening_admin_attempts (
            ip_hash         TEXT    PRIMARY KEY,
            failed_attempts INTEGER NOT NULL DEFAULT 0,
            locked_until    INTEGER NOT NULL DEFAULT 0,
            last_attempt    INTEGER NOT NULL
        )
    `).run();
}

function normalizeTextAnswer(raw) {
    if (typeof raw !== 'string') return '';
    return raw
        .toLowerCase()
        .replace(/['"“”’‘]/g, '')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
const normalizeListeningAnswer = normalizeTextAnswer;

function calculateEstimatedBand(rawScore) {
    const score = Math.max(0, Math.min(40, parseInt(rawScore, 10) || 0));
    if (score >= 39) return 9.0;
    if (score >= 37) return 8.5;
    if (score >= 35) return 8.0;
    if (score >= 32) return 7.5;
    if (score >= 30) return 7.0;
    if (score >= 26) return 6.5;
    if (score >= 23) return 6.0;
    if (score >= 18) return 5.5;
    if (score >= 16) return 5.0;
    if (score >= 13) return 4.5;
    if (score >= 10) return 4.0;
    if (score >= 8)  return 3.5;
    if (score >= 6)  return 3.0;
    if (score >= 4)  return 2.5;
    return 2.0;
}

function extractStudentAnswerArray(raw) {
    if (raw == null) return [];
    if (Array.isArray(raw)) {
        // Filter nilai kosong dulu, lalu potong max 5 opsi, dan dedup
        return Array.from(new Set(
            raw.map(item => String(item || '').trim().slice(0, 100))
               .filter(Boolean)
               .slice(0, 5)
        ));
    }
    const single = String(raw).trim().slice(0, 100);
    return single ? [single] : [];
}

function sanitizeTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
    delete copy.transcripts;
    if (copy.sections && Array.isArray(copy.sections)) {
        copy.sections.forEach(sec => {
            if (sec.groups && Array.isArray(sec.groups)) {
                sec.groups.forEach(grp => {
                    if (grp.questions && Array.isArray(grp.questions)) {
                        grp.questions.forEach(q => {
                            delete q.answers;
                            delete q.hint;
                        });
                    }
                });
            }
        });
    }
    return copy;
}

async function checkTeacherRateLimit(env, ipHash) {
    const now = Date.now();
    const row = await env.DB.prepare('SELECT failed_attempts, locked_until FROM listening_admin_attempts WHERE ip_hash = ?').bind(ipHash).first();
    if (row && row.locked_until && row.locked_until > now) {
        const remainingMinutes = Math.ceil((row.locked_until - now) / 60000);
        return { locked: true, remainingMinutes };
    }
    return { locked: false, failedAttempts: row ? row.failed_attempts : 0 };
}

async function recordTeacherAttemptResult(env, ipHash, success) {
    const now = Date.now();
    if (success) {
        await env.DB.prepare(`
            INSERT INTO listening_admin_attempts (ip_hash, failed_attempts, locked_until, last_attempt)
            VALUES (?, 0, 0, ?)
            ON CONFLICT(ip_hash) DO UPDATE SET failed_attempts = 0, locked_until = 0, last_attempt = excluded.last_attempt
        `).bind(ipHash, now).run();
    } else {
        const status = await checkTeacherRateLimit(env, ipHash);
        const newFails = (status.failedAttempts || 0) + 1;
        const lockUntil = newFails >= 5 ? now + (15 * 60 * 1000) : 0;
        await env.DB.prepare(`
            INSERT INTO listening_admin_attempts (ip_hash, failed_attempts, locked_until, last_attempt)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(ip_hash) DO UPDATE SET failed_attempts = excluded.failed_attempts, locked_until = excluded.locked_until, last_attempt = excluded.last_attempt
        `).bind(ipHash, newFails, lockUntil, now).run();
    }
}

// ---------- Rate Limiting & Audit Log Aktivasi Token (Tahap B1) ----------
async function ensureActivationSchema(env) {
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS activation_attempts (
            identifier     TEXT PRIMARY KEY,
            failed_count   INTEGER NOT NULL DEFAULT 0,
            locked_until   INTEGER NOT NULL DEFAULT 0,
            last_attempt   INTEGER NOT NULL
        )
    `).run();

    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS activation_logs (
            id             INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp      INTEGER NOT NULL,
            ip_hash        TEXT NOT NULL,
            token_prefix   TEXT NOT NULL,
            success        INTEGER NOT NULL,
            reason         TEXT DEFAULT ''
        )
    `).run();

    try {
        await env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_activation_logs_time ON activation_logs(timestamp DESC)').run();
    } catch {}

    // Poin 3: Pembersihan baris lama yang masih memuat awalan token asli (plaintext)
    try {
        await env.DB.prepare(`
            UPDATE activation_logs
            SET token_prefix = 'pfx_legacy_sanitized'
            WHERE token_prefix NOT LIKE 'pfx_%' AND token_prefix != 'UNKNOWN'
        `).run();
        await env.DB.prepare(`
            DELETE FROM activation_attempts
            WHERE identifier LIKE 'pfx:%' AND identifier NOT LIKE 'pfx:pfx_%'
        `).run();
    } catch {}
}

function getTokenPrefixPepper(env) {
    return (env && env.TOKEN_PREFIX_PEPPER) || 'ajarkita-token-prefix-pepper-2026';
}

async function hashTokenPrefix(rawPrefix, env) {
    if (!rawPrefix || rawPrefix === 'UNKNOWN') return 'UNKNOWN';
    const str = String(rawPrefix).trim().toUpperCase();
    if (str.startsWith('pfx_') && str.length >= 12) {
        return str;
    }
    const pepper = getTokenPrefixPepper(env);
    const hashHex = await hmacSha256Hex(str, pepper);
    return 'pfx_' + hashHex.slice(0, 12);
}

function extractTokenPrefix(rawToken) {
    const clean = String(rawToken || '').trim().toUpperCase();
    if (!clean) return 'UNKNOWN';
    const pfx = clean.slice(0, 9);
    return pfx.length >= 4 ? pfx : pfx.padEnd(4, '*');
}

async function checkActivationRateLimit(env, ipHash, rawTokenPrefix) {
    const now = Date.now();
    const blindedPrefix = await hashTokenPrefix(rawTokenPrefix, env);
    const ipKey = `ip:${ipHash}`;
    const pfxKey = `pfx:${blindedPrefix}`;

    const [ipRow, pfxRow] = await Promise.all([
        env.DB.prepare('SELECT failed_count, locked_until FROM activation_attempts WHERE identifier = ?').bind(ipKey).first().catch(() => null),
        env.DB.prepare('SELECT failed_count, locked_until FROM activation_attempts WHERE identifier = ?').bind(pfxKey).first().catch(() => null)
    ]);

    // 1. Cek lockout IP
    if (ipRow && ipRow.locked_until && ipRow.locked_until > now) {
        const remainingMinutes = Math.ceil((ipRow.locked_until - now) / 60000);
        return { locked: true, reason: 'ip_rate_limited', remainingMinutes, delayMs: 0 };
    }

    // 2. Cek lockout awalan token (prefix)
    if (pfxRow && pfxRow.locked_until && pfxRow.locked_until > now) {
        const remainingMinutes = Math.ceil((pfxRow.locked_until - now) / 60000);
        return { locked: true, reason: 'prefix_rate_limited', remainingMinutes, delayMs: 0 };
    }

    // 3. Penundaan bertahap setelah gagal (progressive slowdown)
    // Gagal 1-2 kali: delay 500 ms; gagal 3-4 kali: delay 1500 ms
    const ipFails = ipRow ? (ipRow.failed_count || 0) : 0;
    let delayMs = 0;
    if (ipFails >= 3) {
        delayMs = 1500;
    } else if (ipFails >= 1) {
        delayMs = 500;
    }

    return { locked: false, failedCount: ipFails, delayMs };
}

async function recordActivationAttemptResult(env, ipHash, rawTokenPrefix, success, reason = '') {
    const now = Date.now();
    const blindedPrefix = await hashTokenPrefix(rawTokenPrefix, env);
    const ipKey = `ip:${ipHash}`;
    const pfxKey = `pfx:${blindedPrefix}`;

    // Log tanpa data pribadi (hanya ipHash, blindedPrefix ter-HMAC, flag success, dan reason)
    try {
        await env.DB.prepare(`
            INSERT INTO activation_logs (timestamp, ip_hash, token_prefix, success, reason)
            VALUES (?, ?, ?, ?, ?)
        `).bind(now, ipHash, blindedPrefix, success ? 1 : 0, String(reason || '')).run();
    } catch {}

    if (success) {
        // Reset kegagalan IP jika aktivasi berhasil
        try {
            await env.DB.prepare(`
                INSERT INTO activation_attempts (identifier, failed_count, locked_until, last_attempt)
                VALUES (?, 0, 0, ?)
                ON CONFLICT(identifier) DO UPDATE SET failed_count = 0, locked_until = 0, last_attempt = excluded.last_attempt
            `).bind(ipKey, now).run();
        } catch {}
    } else {
        // Tambah hitungan gagal per IP (kunci 15 menit jika >= 5 gagal)
        try {
            const ipRow = await env.DB.prepare('SELECT failed_count FROM activation_attempts WHERE identifier = ?').bind(ipKey).first().catch(() => null);
            const newIpFails = ((ipRow && ipRow.failed_count) || 0) + 1;
            const ipLockUntil = newIpFails >= 5 ? now + (15 * 60 * 1000) : 0;

            await env.DB.prepare(`
                INSERT INTO activation_attempts (identifier, failed_count, locked_until, last_attempt)
                VALUES (?, ?, ?, ?)
                ON CONFLICT(identifier) DO UPDATE SET failed_count = excluded.failed_count, locked_until = excluded.locked_until, last_attempt = excluded.last_attempt
            `).bind(ipKey, newIpFails, ipLockUntil, now).run();
        } catch {}

        // Tambah hitungan gagal per prefix token (kunci 30 menit jika >= 10 gagal pada prefix yang sama)
        if (blindedPrefix && blindedPrefix !== 'UNKNOWN') {
            try {
                const pfxRow = await env.DB.prepare('SELECT failed_count FROM activation_attempts WHERE identifier = ?').bind(pfxKey).first().catch(() => null);
                const newPfxFails = ((pfxRow && pfxRow.failed_count) || 0) + 1;
                const pfxLockUntil = newPfxFails >= 10 ? now + (30 * 60 * 1000) : 0;

                await env.DB.prepare(`
                    INSERT INTO activation_attempts (identifier, failed_count, locked_until, last_attempt)
                    VALUES (?, ?, ?, ?)
                    ON CONFLICT(identifier) DO UPDATE SET failed_count = excluded.failed_count, locked_until = excluded.locked_until, last_attempt = excluded.last_attempt
                `).bind(pfxKey, newPfxFails, pfxLockUntil, now).run();
            } catch {}
        }
    }
}

// ---------- Rate Limiting Endpoint Admin (Tahap Pre-Release) ----------
async function checkAdminRateLimit(env, ipHash) {
    await ensureActivationSchema(env);
    const now = Date.now();
    const identifier = `admin_ip:${ipHash}`;
    const row = await env.DB.prepare('SELECT failed_count, locked_until FROM activation_attempts WHERE identifier = ?').bind(identifier).first().catch(() => null);
    if (row && row.locked_until && row.locked_until > now) {
        const remainingMinutes = Math.ceil((row.locked_until - now) / 60000);
        return { locked: true, remainingMinutes };
    }
    return { locked: false, failedCount: row ? row.failed_count : 0 };
}

async function recordAdminAttemptResult(env, ipHash, success) {
    try {
        await ensureActivationSchema(env);
        const now = Date.now();
        const identifier = `admin_ip:${ipHash}`;
        if (success) {
            await env.DB.prepare(`
                INSERT INTO activation_attempts (identifier, failed_count, locked_until, last_attempt)
                VALUES (?, 0, 0, ?)
                ON CONFLICT(identifier) DO UPDATE SET failed_count = 0, locked_until = 0, last_attempt = excluded.last_attempt
            `).bind(identifier, now).run();
        } else {
            const status = await checkAdminRateLimit(env, ipHash);
            const newFails = (status.failedCount || 0) + 1;
            const lockUntil = newFails >= 5 ? now + (30 * 60 * 1000) : 0; // 30 menit lockout setelah 5x gagal
            await env.DB.prepare(`
                INSERT INTO activation_attempts (identifier, failed_count, locked_until, last_attempt)
                VALUES (?, ?, ?, ?)
                ON CONFLICT(identifier) DO UPDATE SET failed_count = excluded.failed_count, locked_until = excluded.locked_until, last_attempt = excluded.last_attempt
            `).bind(identifier, newFails, lockUntil, now).run();
        }
    } catch {}
}

function verifyTeacherKey(submittedKey, env) {
    if (!submittedKey) return false;
    const key = String(submittedKey).trim();
    if (!key) return false;
    const teacherSecret = typeof env.TEACHER_KEY === 'string' ? env.TEACHER_KEY.trim() : '';
    // FAIL-CLOSED: jika TEACHER_KEY belum disetel di Worker Secret, akses guru ditolak
    if (teacherSecret && timingSafeEqual(key, teacherSecret)) {
        return true;
    }
    const adminSecret = typeof env.ADMIN_KEY === 'string' ? env.ADMIN_KEY.trim() : '';
    if (adminSecret && timingSafeEqual(key, adminSecret)) {
        return true;
    }
    return false;
}

// ---------- IELTS Academic Reading Helpers & Schema ----------
async function ensureReadingSchema(env) {
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS reading_sessions (
            id               TEXT    PRIMARY KEY,
            test_id          TEXT    NOT NULL,
            device_id        TEXT    NOT NULL,
            nama_peserta     TEXT    NOT NULL,
            kelas            TEXT    NOT NULL,
            started_at       INTEGER NOT NULL,
            duration_seconds INTEGER NOT NULL DEFAULT 3600,
            submitted_at     INTEGER DEFAULT NULL,
            current_passage  INTEGER NOT NULL DEFAULT 1,
            answers_json     TEXT    DEFAULT '{}',
            raw_score        INTEGER DEFAULT NULL,
            band_score       REAL    DEFAULT NULL,
            passage_scores   TEXT    DEFAULT '{}',
            type_scores      TEXT    DEFAULT '{}',
            is_late          INTEGER DEFAULT 0,
            status           TEXT    NOT NULL DEFAULT 'in_progress'
        )
    `).run();
    try { await env.DB.prepare('ALTER TABLE reading_sessions ADD COLUMN is_late INTEGER DEFAULT 0').run(); } catch {}
    try { await env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_reading_status_submitted ON reading_sessions(status, submitted_at DESC)').run(); } catch {}
}

function calculateReadingBand(rawScore) {
    const score = Math.max(0, Math.min(40, parseInt(rawScore, 10) || 0));
    if (score >= 39) return 9.0;
    if (score >= 37) return 8.5;
    if (score >= 35) return 8.0;
    if (score >= 33) return 7.5;
    if (score >= 30) return 7.0;
    if (score >= 27) return 6.5;
    if (score >= 23) return 6.0;
    if (score >= 19) return 5.5;
    if (score >= 15) return 5.0;
    if (score >= 13) return 4.5;
    if (score >= 10) return 4.0;
    if (score >= 8)  return 3.5;
    if (score >= 6)  return 3.0;
    if (score >= 4)  return 2.5;
    return 2.0;
}

function sanitizeReadingTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
    if (copy.passages && Array.isArray(copy.passages)) {
        copy.passages.forEach(p => {
            if (p.groups && Array.isArray(p.groups)) {
                p.groups.forEach(grp => {
                    if (grp.questions && Array.isArray(grp.questions)) {
                        grp.questions.forEach(q => {
                            delete q.answers;
                            delete q.evidence;
                        });
                    }
                });
            }
        });
    }
    return copy;
}

// ---------- IELTS Academic Writing Helpers & Schema ----------
function roundIeltsBand(val) {
    if (typeof val !== 'number' || isNaN(val)) return null;
    const base = Math.floor(val);
    const remainder = Math.round((val - base) * 1000) / 1000;
    if (remainder < 0.25) return base;
    if (remainder < 0.75) return base + 0.5;
    return base + 1.0;
}

async function ensureWritingSchema(env) {
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS writing_sessions (
            id                   TEXT    PRIMARY KEY,
            test_id              TEXT    NOT NULL,
            device_id            TEXT    NOT NULL,
            nama_peserta         TEXT    NOT NULL,
            kelas                TEXT    NOT NULL,
            started_at           INTEGER NOT NULL,
            duration_seconds     INTEGER NOT NULL DEFAULT 3600,
            submitted_at         INTEGER DEFAULT NULL,
            current_task         INTEGER NOT NULL DEFAULT 1,
            task1_text           TEXT    DEFAULT '',
            task2_text           TEXT    DEFAULT '',
            task1_word_count     INTEGER DEFAULT 0,
            task2_word_count     INTEGER DEFAULT 0,
            structural_check     TEXT    DEFAULT '{}',
            status               TEXT    NOT NULL DEFAULT 'in_progress',
            graded_at            INTEGER DEFAULT NULL,
            teacher_name         TEXT    DEFAULT NULL,
            task1_criteria       TEXT    DEFAULT '{}',
            task2_criteria       TEXT    DEFAULT '{}',
            task1_comment        TEXT    DEFAULT '',
            task2_comment        TEXT    DEFAULT '',
            is_late              INTEGER DEFAULT 0,
            writing_band         REAL    DEFAULT NULL
        )
    `).run();
    try { await env.DB.prepare('ALTER TABLE writing_sessions ADD COLUMN is_late INTEGER DEFAULT 0').run(); } catch {}
    try { await env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_writing_status_submitted ON writing_sessions(status, submitted_at DESC)').run(); } catch {}
}

function sanitizeWritingTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
    if (copy.tasks && Array.isArray(copy.tasks)) {
        copy.tasks.forEach(t => {
            delete t.sample_answer;
        });
    }
    return copy;
}

function isValidBandCriterion(val) {
    const n = Number(val);
    if (isNaN(n) || n < 0 || n > 9) return false;
    return (n * 2) % 1 === 0;
}

function analyzeWritingStructure(t1, t2) {
    const analyzeText = (txt, minWords) => {
        const clean = (txt || '').trim();
        const words = clean ? clean.split(/\s+/).filter(w => w.length > 0) : [];
        const wordCount = words.length;
        const paragraphs = clean ? clean.split(/\n\s*\n/).filter(p => p.trim().length > 0) : [];
        const paraCount = paragraphs.length;
        
        const cohesiveList = [
            'furthermore', 'moreover', 'in contrast', 'on the other hand', 'however',
            'consequently', 'therefore', 'as a result', 'in conclusion', 'firstly',
            'secondly', 'similarly', 'overall', 'in terms of', 'specifically',
            'for instance', 'for example', 'in particular', 'nevertheless', 'whereas'
        ];
        const lower = clean.toLowerCase();
        const detectedCohesives = cohesiveList.filter(c => lower.includes(c));

        const uniqueWords = new Set(words.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, '')).filter(Boolean));
        const varietyRatio = wordCount > 0 ? Math.round((uniqueWords.size / wordCount) * 100) : 0;

        return {
            wordCount,
            minWords,
            meetsMinWords: wordCount >= minWords,
            paraCount,
            detectedCohesives,
            uniqueWordsCount: uniqueWords.size,
            varietyRatio
        };
    };

    return {
        task1: analyzeText(t1, 150),
        task2: analyzeText(t2, 250),
        disclaimer: "Pengecekan di atas adalah audit kelayakan struktural teknis otomatis dan TIDAK menilai kualitas argumen, koherensi ide, maupun ketepatan tata bahasa. Penilaian komprehensif dilakukan oleh guru/evaluator."
    };
}

function timingSafeEqualHex(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') return false;
    if (a.length !== b.length) return false;
    let mismatch = 0;
    for (let i = 0; i < a.length; i++) {
        mismatch |= (a.charCodeAt(i) ^ b.charCodeAt(i));
    }
    return mismatch === 0;
}

function getAudioStreamSecret(env) {
    // Secret khusus untuk audio streaming: HANYA env.AUDIO_STREAM_SECRET
    // Hapus fallback ke TEACHER_KEY dan ADMIN_KEY. Jika tidak diatur, kembalikan null (fail-closed).
    if (!env || !env.AUDIO_STREAM_SECRET || typeof env.AUDIO_STREAM_SECRET !== 'string') {
        return null;
    }
    const trimmed = env.AUDIO_STREAM_SECRET.trim();
    return trimmed.length > 0 ? trimmed : null;
}

async function generateAudioToken(recordingId, secret, ttlSeconds = 300) {
    if (!secret || typeof secret !== 'string') {
        throw new Error('AUDIO_STREAM_SECRET tidak tersedia (fail-closed)');
    }
    // Batas TTL maksimal 300 detik (5 menit)
    const effectiveTtl = Math.min(Math.max(1, parseInt(ttlSeconds, 10) || 300), 300);
    const exp = Math.floor(Date.now() / 1000) + effectiveTtl;
    const payload = `${recordingId}:${exp}`;
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
        'raw',
        enc.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
    const sigHex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
    return `${exp}.${sigHex}`;
}

function base64ToUint8Array(base64) {
    if (!base64 || typeof base64 !== 'string') return new Uint8Array(0);
    const clean = base64.replace(/\s+/g, '');
    const binaryString = atob(clean);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

async function verifyAudioToken(arg1, arg2, arg3, arg4) {
    // Mendukung signature (recordingId, tokenStr, secret) dan backward-compatible (sessionId, questionId, tokenStr, secret)
    let recordingId, tokenStr, secret;
    if (arg4 !== undefined) {
        recordingId = `${arg1}_${arg2}`;
        tokenStr = arg3;
        secret = arg4;
    } else {
        recordingId = arg1;
        tokenStr = arg2;
        secret = arg3;
    }

    if (!recordingId || !tokenStr || !secret) return false;
    const parts = tokenStr.split('.');
    if (parts.length !== 2) return false;
    const exp = parseInt(parts[0], 10);
    const sigHex = parts[1];
    const now = Math.floor(Date.now() / 1000);
    if (isNaN(exp) || now > exp) return false;

    // Pastikan masa berlaku token saat diverifikasi tidak melampaui toleransi 300 detik
    const payload = `${recordingId}:${exp}`;
    const enc = new TextEncoder();
    try {
        const key = await crypto.subtle.importKey(
            'raw',
            enc.encode(secret),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['sign', 'verify']
        );
        // Verifikasi HMAC menggunakan Web Crypto API (konstan waktu)
        const match = sigHex.match(/.{1,2}/g);
        if (!match) return false;
        const expectedSig = new Uint8Array(match.map(byte => parseInt(byte, 16)));
        const validCrypto = await crypto.subtle.verify('HMAC', key, expectedSig, enc.encode(payload));
        if (!validCrypto) return false;

        // Validasi ganda dengan perbandingan waktu-konstan string hex
        const computedSig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
        const computedHex = Array.from(new Uint8Array(computedSig)).map(b => b.toString(16).padStart(2, '0')).join('');
        return timingSafeEqualHex(sigHex, computedHex);
    } catch {
        return false;
    }
}

async function ensureSpeakingSchema(env) {
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS speaking_sessions (
            id                   TEXT    PRIMARY KEY,
            test_id              TEXT    NOT NULL,
            device_id            TEXT    NOT NULL,
            nama_peserta         TEXT    NOT NULL,
            kelas                TEXT    NOT NULL,
            started_at           INTEGER NOT NULL,
            submitted_at         INTEGER DEFAULT NULL,
            part2_notes          TEXT    DEFAULT '',
            status               TEXT    NOT NULL DEFAULT 'in_progress',
            package_type         TEXT    NOT NULL DEFAULT 'teacher',
            graded_at            INTEGER DEFAULT NULL,
            teacher_name         TEXT    DEFAULT NULL,
            criteria_scores      TEXT    DEFAULT '{}',
            teacher_comment      TEXT    DEFAULT '',
            is_late              INTEGER DEFAULT 0,
            speaking_band        REAL    DEFAULT NULL
        )
    `).run();
    try { await env.DB.prepare('ALTER TABLE speaking_sessions ADD COLUMN is_late INTEGER DEFAULT 0').run(); } catch {}
    try { await env.DB.prepare("ALTER TABLE speaking_sessions ADD COLUMN package_type TEXT NOT NULL DEFAULT 'teacher'").run(); } catch {}
    try { await env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_speaking_status_submitted ON speaking_sessions(status, submitted_at DESC)').run(); } catch {}
    try { await env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_speaking_package_status ON speaking_sessions(package_type, status)').run(); } catch {}

    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS speaking_recordings (
            id                   TEXT    PRIMARY KEY,
            session_id           TEXT    NOT NULL,
            question_id          TEXT    NOT NULL,
            mime_type            TEXT    NOT NULL,
            audio_data           BLOB    NOT NULL,
            transcript           TEXT    DEFAULT '',
            duration_seconds     REAL    DEFAULT 0,
            file_size_bytes      INTEGER DEFAULT 0,
            uploaded_at          INTEGER NOT NULL,
            deleted_at           INTEGER DEFAULT NULL,
            FOREIGN KEY (session_id) REFERENCES speaking_sessions(id) ON DELETE CASCADE
        )
    `).run();
    try { await env.DB.prepare('ALTER TABLE speaking_recordings ADD COLUMN deleted_at INTEGER DEFAULT NULL').run(); } catch {}

    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS cleanup_logs (
            id            INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp     INTEGER NOT NULL,
            trigger_type  TEXT    NOT NULL,
            cleanup_type  TEXT    NOT NULL,
            target_info   TEXT    DEFAULT '',
            deleted_count INTEGER NOT NULL DEFAULT 0,
            freed_bytes   INTEGER NOT NULL DEFAULT 0,
            notes         TEXT    DEFAULT ''
        )
    `).run();
    try { await env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_cleanup_logs_time ON cleanup_logs(timestamp DESC)').run(); } catch {}
}

/**
 * Membersihkan berkas audio biner & draf transkrip dari speaking_recordings.
 * Skor kriteria (FC, LR, GRA, PR), catatan guru, dan band score di speaking_sessions TETAP UTUH.
 */
async function cleanRecordingsForSessions(env, sessionIds, triggerType, cleanupType, targetInfo, notes = '') {
    if (!Array.isArray(sessionIds) || sessionIds.length === 0) {
        return { deletedCount: 0, freedBytes: 0 };
    }

    const placeholders = sessionIds.map(() => '?').join(',');

    // 1. Hitung jumlah rekaman aktif & total byte yang akan dibersihkan
    const activeStats = await env.DB.prepare(`
        SELECT COUNT(*) as cnt, COALESCE(SUM(file_size_bytes), 0) as total_bytes
        FROM speaking_recordings
        WHERE session_id IN (${placeholders}) 
          AND deleted_at IS NULL 
          AND length(audio_data) > 0
    `).bind(...sessionIds).first();

    const deletedCount = activeStats?.cnt || 0;
    const freedBytes = activeStats?.total_bytes || 0;

    if (deletedCount > 0) {
        const now = Date.now();
        // 2. Kosongkan audio_data (BLOB kosong X'') dan transkrip, tandai deleted_at & file_size_bytes = 0
        await env.DB.prepare(`
            UPDATE speaking_recordings
            SET audio_data = X'', transcript = '', file_size_bytes = 0, deleted_at = ?
            WHERE session_id IN (${placeholders}) AND deleted_at IS NULL
        `).bind(now, ...sessionIds).run();

        // 3. Catat ke tabel audit log
        await env.DB.prepare(`
            INSERT INTO cleanup_logs (timestamp, trigger_type, cleanup_type, target_info, deleted_count, freed_bytes, notes)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `).bind(now, triggerType, cleanupType, String(targetInfo || ''), deletedCount, freedBytes, String(notes || '')).run();
    }

    return { deletedCount, freedBytes };
}

/**
 * Eksekusi pembersihan retensi berkala otomatis (Cron Trigger harian)
 * Aturan per jenis bersumber dari RETENTION_CONFIG:
 * - Paket mandiri (self_study): 3 hari (pembersihan cepat kuota D1)
 * - Add-on guru (teacher):
 *   - Graded: 14 hari pasca dinilai
 *   - Ungraded: 60 hari sejak mulai
 */
async function runScheduledRetentionCleanup(env) {
    await ensureSpeakingSchema(env);
    const now = Date.now();
    const selfStudyDays = RETENTION_CONFIG.SELF_STUDY_RETENTION_DAYS || 3;
    const teacherGradedDays = RETENTION_CONFIG.TEACHER_GRADED_RETENTION_DAYS || RETENTION_CONFIG.GRADED_RETENTION_DAYS || 14;
    const teacherUngradedDays = RETENTION_CONFIG.TEACHER_UNGRADED_RETENTION_DAYS || RETENTION_CONFIG.UNGRADED_RETENTION_DAYS || 60;

    const selfStudyCutoff = now - (selfStudyDays * DAY_MS);
    const teacherGradedCutoff = now - (teacherGradedDays * DAY_MS);
    const teacherUngradedCutoff = now - (teacherUngradedDays * DAY_MS);

    // 1. Sesi Paket Mandiri (self_study / mandiri) > 3 hari
    const selfStudySessions = await env.DB.prepare(`
        SELECT id FROM speaking_sessions 
        WHERE (package_type = 'self_study' OR package_type = 'mandiri') AND started_at < ?
    `).bind(selfStudyCutoff).all();
    const selfStudyIds = (selfStudySessions.results || []).map(s => s.id);

    // 2. Sesi Add-on Guru yang sudah dinilai > 14 hari
    const teacherGradedSessions = await env.DB.prepare(`
        SELECT id FROM speaking_sessions 
        WHERE (package_type IS NULL OR (package_type != 'self_study' AND package_type != 'mandiri'))
          AND status = 'graded' AND graded_at IS NOT NULL AND graded_at < ?
    `).bind(teacherGradedCutoff).all();
    const teacherGradedIds = (teacherGradedSessions.results || []).map(s => s.id);

    // 3. Sesi Add-on Guru yang belum dinilai > 60 hari
    const teacherUngradedSessions = await env.DB.prepare(`
        SELECT id FROM speaking_sessions 
        WHERE (package_type IS NULL OR (package_type != 'self_study' AND package_type != 'mandiri'))
          AND status != 'graded' AND started_at < ?
    `).bind(teacherUngradedCutoff).all();
    const teacherUngradedIds = (teacherUngradedSessions.results || []).map(s => s.id);

    // 4. Sapu bersih universal: kumpulkan juga ID sesi yatim / data rekaman yang session_id-nya tidak ada di speaking_sessions
    const orphanedRecs = await env.DB.prepare(`
        SELECT DISTINCT session_id FROM speaking_recordings 
        WHERE deleted_at IS NULL AND (uploaded_at < ? OR session_id NOT IN (SELECT id FROM speaking_sessions))
    `).bind(teacherUngradedCutoff).all();
    const orphanedSessionIds = (orphanedRecs.results || []).map(s => s.session_id);

    const allSessionIds = [...new Set([...selfStudyIds, ...teacherGradedIds, ...teacherUngradedIds, ...orphanedSessionIds])];
    
    // Sapu bersih langsung baris apa pun di speaking_recordings yang melewati retensi maksimal (Universal Retention)
    let directFreedCount = 0;
    let directFreedBytes = 0;
    const expiredUniversal = await env.DB.prepare(`
        SELECT COUNT(*) as cnt, COALESCE(SUM(file_size_bytes), 0) as total_bytes
        FROM speaking_recordings
        WHERE deleted_at IS NULL AND uploaded_at < ?
    `).bind(teacherUngradedCutoff).first();
    
    if (expiredUniversal && expiredUniversal.cnt > 0) {
        await env.DB.prepare(`
            UPDATE speaking_recordings
            SET audio_data = X'', transcript = '', file_size_bytes = 0, deleted_at = ?
            WHERE deleted_at IS NULL AND uploaded_at < ?
        `).bind(now, teacherUngradedCutoff).run();
        directFreedCount = expiredUniversal.cnt;
        directFreedBytes = expiredUniversal.total_bytes;
        await env.DB.prepare(`
            INSERT INTO cleanup_logs (timestamp, trigger_type, cleanup_type, target_info, deleted_count, freed_bytes, notes)
            VALUES (?, 'cron', 'universal_sweep', 'Semua baris rekaman kedaluwarsa', ?, ?, 'Sapu bersih universal melewati 60 hari')
        `).bind(now, directFreedCount, directFreedBytes).run();
    }

    if (allSessionIds.length === 0) {
        return { deletedCount: directFreedCount, freedBytes: directFreedBytes };
    }

    const notes = `Cron Harian: ${selfStudyIds.length} sesi mandiri (>${selfStudyDays} hari), ${teacherGradedIds.length} sesi guru dinilai (>${teacherGradedDays} hari), ${teacherUngradedIds.length} sesi guru belum dinilai (>${teacherUngradedDays} hari)`;
    const sessionRes = await cleanRecordingsForSessions(env, allSessionIds, 'cron', 'retention', 'Jadwal Harian Otomatis', notes);
    return {
        deletedCount: directFreedCount + sessionRes.deletedCount,
        freedBytes: directFreedBytes + sessionRes.freedBytes
    };
}

function sanitizeSpeakingTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
    if (copy.part1 && Array.isArray(copy.part1.topics)) {
        copy.part1.topics.forEach(top => {
            if (Array.isArray(top.questions)) {
                top.questions.forEach(q => {
                    delete q.sample_answer;
                });
            }
        });
    }
    if (copy.part2) {
        delete copy.part2.sample_answer;
    }
    if (copy.part3 && Array.isArray(copy.part3.questions)) {
        copy.part3.questions.forEach(q => {
            delete q.sample_answer;
        });
    }
    return copy;
}

function filterSampleAnswers(masterData) {
    const result = {
        part1: [],
        part2: null,
        part3: []
    };
    if (masterData.part1 && Array.isArray(masterData.part1.topics)) {
        masterData.part1.topics.forEach(top => {
            if (Array.isArray(top.questions)) {
                top.questions.forEach(q => {
                    if (q.sample_answer && !q.sample_answer.includes('[Teks') && !q.sample_answer.includes('{...}')) {
                        result.part1.push({
                            id: q.id,
                            text: q.text,
                            sample_answer: q.sample_answer
                        });
                    }
                });
            }
        });
    }
    if (masterData.part2 && masterData.part2.sample_answer && masterData.part2.sample_answer.text && !masterData.part2.sample_answer.text.includes('[Teks')) {
        result.part2 = masterData.part2.sample_answer;
    }
    if (masterData.part3 && Array.isArray(masterData.part3.questions)) {
        masterData.part3.questions.forEach(q => {
            if (q.sample_answer && !q.sample_answer.includes('[Teks') && !q.sample_answer.includes('{...}')) {
                result.part3.push({
                    id: q.id,
                    text: q.text,
                    sample_answer: q.sample_answer
                });
            }
        });
    }
    return result;
}

// ---------- Handler ----------
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname.replace(/\/+$/, '') || '/';

        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: corsHeaders(request, env) });
        }

        try {
            if (path === '/' && request.method === 'GET') {
                return json(request, env, { service: 'kimia-snbt-api', status: 'ok' });
            }

            // Informasi Paket, Durasi, Harga & Fitur Terpusat (Tahap B3)
            if (path === '/packages' && request.method === 'GET') {
                return json(request, env, { ok: true, packages: PACKAGES_CONFIG });
            }

            // --- Siswa: aktivasi / cek lisensi (Tahap B1: Rate Limit Ganda, Penundaan Bertahap & Audit Log) ---
            if (path === '/activate' && request.method === 'POST') {
                await ensureLicensesSchema(env);
                await ensureActivationSchema(env);
                const ipRaw = clientIp(request);
                const ipHash = await getIpHash(ipRaw, env);

                const body = await readJson(request);
                const rawToken = String(body.token || '').trim();
                const normalizedTok = normalizeToken(rawToken);
                const tokenPrefix = extractTokenPrefix(normalizedTok);

                // 1. Cek rate limit percobaan aktivasi (per IP dan per awalan token)
                const rateCheck = await checkActivationRateLimit(env, ipHash, tokenPrefix);
                if (rateCheck.locked) {
                    await recordActivationAttemptResult(env, ipHash, tokenPrefix, false, rateCheck.reason);
                    return json(request, env, {
                        ok: false,
                        error: rateCheck.reason === 'prefix_rate_limited'
                            ? `Awalan token ini terkunci sementara karena terlalu banyak percobaan salah. Silakan coba lagi dalam ${rateCheck.remainingMinutes} menit.`
                            : `Terlalu banyak percobaan aktivasi salah dari perangkat Anda. Akses dikunci sementara selama ${rateCheck.remainingMinutes} menit demi keamanan.`
                    }, 429);
                }

                // 2. Penundaan bertahap setelah gagal (progressive delay: 500ms - 1500ms)
                if (rateCheck.delayMs > 0) {
                    await new Promise(r => setTimeout(r, rateCheck.delayMs));
                }

                // 3. Eksekusi otorisasi lisensi (Tahap B3: Pembedaan Jenis Paket)
                const requestedPackage = body.packageType ? String(body.packageType).trim().toLowerCase() : null;
                const res = await authorize(env, normalizedTok, body.deviceId, true, requestedPackage);

                // 4. Catat ke attempt tracker & audit log tanpa data pribadi
                await recordActivationAttemptResult(env, ipHash, tokenPrefix, res.ok, res.reason || (res.ok ? 'success' : 'activation_failed'));

                if (!res.ok) {
                    return json(request, env, { ok: false, error: res.error, reason: res.reason }, res.status);
                }

                const pkgDetails = getPackageDetails(res.packageType);

                return json(request, env, {
                    ok: true,
                    packageType: res.packageType,
                    packageName: pkgDetails.name,
                    expiresAt: res.expiresAt,
                    remainingDays: res.remainingDays,
                    features: pkgDetails.features,
                    excluded_features: pkgDetails.excluded_features
                });
            }

            // --- Siswa: klaim voucher beasiswa Mini-Game SNBT (Rp 35.000) ---
            if (path === '/claim-scholarship' && request.method === 'POST') {
                const body = await readJson(request);
                const deviceId = String(body.deviceId || '').trim();
                const nama = String(body.nama || '').trim().slice(0, 80);
                const wa = String(body.wa || '').replace(/\D/g, '').slice(0, 20);
                const rawState = body.gameState && typeof body.gameState === 'object' ? body.gameState : {};

                if (!validDeviceId(deviceId)) {
                    return json(request, env, { ok: false, error: 'ID perangkat tidak valid.' }, 400);
                }
                if (nama.length < 2 || wa.length < 9) {
                    return json(request, env, { ok: false, error: 'Nama lengkap dan nomor WhatsApp aktif wajib diisi.' }, 400);
                }

                // Verifikasi server-side atas progres 101 sub-materi
                const validKeyRegex = /^(pu|pbm|ppu|pk|lbi|lbe|pm)_\d+_\d+$/;
                const seenKeys = new Set();
                let verifiedRp = 0;
                let masteredCount = 0;
                let validTopicsCount = 0;
                let totalCumulativeDurationMs = 0;

                for (const [k, val] of Object.entries(rawState)) {
                    if (!validKeyRegex.test(k) || seenKeys.has(k) || seenKeys.size >= 101) continue;
                    if (!val || typeof val !== 'object') continue;
                    const score = parseInt(val.bestScore, 10) || 0;
                    const durationMs = parseInt(val.durationMs, 10) || 0;
                    if (score < 1 || score > 3) continue;
                    // Tolak jika durasi pengerjaan 1 sesi tidak wajar (< 3 detik untuk 3 soal)
                    if (durationMs > 0 && durationMs < 3000) continue;

                    seenKeys.add(k);
                    validTopicsCount++;
                    totalCumulativeDurationMs += durationMs;
                    const rp = score === 3 ? 400 : (score === 2 ? 250 : 100);
                    verifiedRp += rp;
                    if (score === 3) masteredCount++;
                }

                // Minimal 88 topik, saldo minimal Rp 35.000, dan akumulasi waktu belajar minimal 6 menit (360.000 ms)
                if (verifiedRp < 35000 || validTopicsCount < 88 || totalCumulativeDurationMs < 360000) {
                    return json(request, env, {
                        ok: false,
                        error: `Validasi progres belajar belum terpenuhi (Terverifikasi: Rp ${verifiedRp.toLocaleString('id-ID')} dari ${validTopicsCount} topik). Selesaikan minimal 88 sub-materi dengan jujur.`
                    }, 400);
                }

                // Pastikan tabel scholarship_claims tersedia di D1
                await ensureScholarshipSchema(env);

                // Cek apakah perangkat atau nomor WA sudah pernah klaim beasiswa
                const existing = await env.DB.prepare(
                    'SELECT id FROM scholarship_claims WHERE device_id = ? OR wa = ? LIMIT 1'
                ).bind(deviceId, wa).first();

                if (existing) {
                    return json(request, env, {
                        ok: false,
                        error: 'Perangkat atau nomor WhatsApp ini sudah pernah mengklaim Voucher Beasiswa SNBT sebelumnya.'
                    }, 403);
                }

                // Cek kuota mingguan (maksimal 25 voucher beasiswa per 7 hari)
                const now = Date.now();
                const weekAgo = now - (7 * DAY_MS);
                const weeklyCount = await env.DB.prepare(
                    'SELECT COUNT(*) AS n FROM scholarship_claims WHERE claimed_at >= ?'
                ).bind(weekAgo).first();

                const maxWeekly = parseInt(env.MAX_WEEKLY_SCHOLARSHIPS, 10) || 25;
                if (weeklyCount && weeklyCount.n >= maxWeekly) {
                    return json(request, env, {
                        ok: false,
                        error: 'Kuota Voucher Beasiswa minggu ini telah penuh (25 voucher/minggu). Silakan klaim kembali pada awal minggu depan.'
                    }, 429);
                }

                // Terbitkan token SNBT-XXXX-XXXX-XXXX (30 hari, khusus 1 perangkat)
                const token = generateToken();
                const tokenHash = await sha256Hex(token);
                const durationDays = 30;
                const expiresAt = now + durationDays * DAY_MS;
                const ipRaw = clientIp(request);
                const ipHash = await getIpHash(ipRaw, env);

                try {
                    const insertLic = await env.DB.prepare(
                        'INSERT INTO licenses (token_hash, nama, wa, created_at, activated_at, expires_at, duration_days, max_devices) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
                    ).bind(tokenHash, `[BEASISWA] ${nama}`, wa, now, now, expiresAt, durationDays, 1).run();

                    const licenseId = insertLic.meta && insertLic.meta.last_row_id ? insertLic.meta.last_row_id : 0;
                    if (!licenseId) {
                        throw new Error('Gagal mengalokasikan lisensi beasiswa.');
                    }

                    // Daftarkan perangkat & klaim beasiswa secara atomik via batch D1
                    await env.DB.batch([
                        env.DB.prepare('INSERT INTO devices (license_id, device_id, first_seen) VALUES (?, ?, ?)').bind(licenseId, deviceId, now),
                        env.DB.prepare('INSERT INTO scholarship_claims (device_id, ip_hash, wa, nama, license_id, total_rp, mastered_count, claimed_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(deviceId, ipHash, wa, nama, licenseId, verifiedRp, masteredCount, now)
                    ]);

                    return json(request, env, {
                        ok: true,
                        token,
                        expiresAt,
                        remainingDays: durationDays,
                        verifiedRp,
                        masteredCount
                    });
                } catch (dbErr) {
                    if (String(dbErr.message || '').includes('UNIQUE')) {
                        return json(request, env, {
                            ok: false,
                            error: 'Perangkat atau nomor WhatsApp ini sudah terdaftar dalam klaim beasiswa sebelumnya.'
                        }, 409);
                    }
                    throw dbErr;
                }
            }

            // =================================================================
            // --- IELTS-Style Listening Mock Test Endpoints ---
            // =================================================================

            // 1. Mulai tes / resume session
            if (path === '/listening/start' && request.method === 'POST') {
                await ensureListeningSchema(env);
                const body = await readJson(request);
                const testId = String(body.testId || 'test1').trim().toLowerCase();
                const nama = String(body.nama || '').trim().slice(0, 80);
                const kelas = String(body.kelas || '').trim().slice(0, 50);
                const deviceId = String(body.deviceId || '').trim().slice(0, 64) || ('dev_' + crypto.randomUUID().slice(0, 12));
                const requestedSessionId = String(body.sessionId || '').trim();

                if (nama.length < 2) {
                    return json(request, env, { ok: false, error: 'Nama lengkap wajib diisi minimal 2 karakter.' }, 400);
                }
                if (kelas.length < 1) {
                    return json(request, env, { ok: false, error: 'Kelas wajib diisi (misal: 12 MIPA 1).' }, 400);
                }

                // Ambil master data soal dari Assets
                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/listening/${testId}-master.json`, url.origin)));
                if (!assetRes.ok) {
                    return json(request, env, { ok: false, error: 'Paket tes listening tidak ditemukan.' }, 404);
                }
                const masterData = await assetRes.json();
                const studentTestData = sanitizeTestForStudent(masterData);

                const now = Date.now();
                let session = null;

                // Cek jika ada session yang diminta
                if (requestedSessionId) {
                    session = await env.DB.prepare('SELECT * FROM listening_sessions WHERE id = ?').bind(requestedSessionId).first();
                    if (session && session.device_id !== deviceId) {
                        session = null;
                    }
                }

                // Jika tidak ditemukan atau tidak diminta, cek apakah device memiliki sesi in_progress untuk test ini
                if (!session) {
                    session = await env.DB.prepare(
                        'SELECT * FROM listening_sessions WHERE test_id = ? AND device_id = ? AND status = "in_progress" ORDER BY started_at DESC LIMIT 1'
                    ).bind(testId, deviceId).first();
                }

                if (session) {
                    // Jika sesi sudah disubmit sebelumnya
                    if (session.status === 'submitted') {
                        return json(request, env, {
                            ok: true,
                            alreadySubmitted: true,
                            sessionId: session.id,
                            rawScore: session.raw_score,
                            bandScore: session.band_score,
                            sectionScores: JSON.parse(session.section_scores || '{}')
                        });
                    }

                    // Sesi sedang berjalan (resume)
                    return json(request, env, {
                        ok: true,
                        sessionId: session.id,
                        resumed: true,
                        startedAt: session.started_at,
                        serverTime: now,
                        currentSec: session.current_sec,
                        savedAnswers: JSON.parse(session.answers_json || '{}'),
                        testData: studentTestData
                    });
                }

                // Buat sesi baru
                const newSessionId = 'ls_' + crypto.randomUUID().replace(/-/g, '').slice(0, 16);
                await env.DB.prepare(`
                    INSERT INTO listening_sessions (id, test_id, device_id, nama_peserta, kelas, started_at, current_sec, answers_json, status)
                    VALUES (?, ?, ?, ?, ?, ?, 1, '{}', 'in_progress')
                `).bind(newSessionId, testId, deviceId, nama, kelas, now).run();

                return json(request, env, {
                    ok: true,
                    sessionId: newSessionId,
                    resumed: false,
                    startedAt: now,
                    serverTime: now,
                    currentSec: 1,
                    savedAnswers: {},
                    testData: studentTestData
                });
            }

            // 2. Autosave progres jawaban & section
            if (path === '/listening/save-progress' && request.method === 'POST') {
                await ensureListeningSchema(env);
                const cap = await checkCapacityState(env);
                if (cap.isQuotaExceeded) {
                    return json(request, env, {
                        ok: false,
                        quota_exceeded: true,
                        eco_mode: true,
                        error: 'Batas kuota harian sistem telah tercapai. Jawaban Anda tersimpan dengan aman di perangkat lokal (localStorage) dan dapat dikirim ulang.'
                    }, 429, { 'X-Eco-Mode': 'active' });
                }

                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();
                const currentSec = Math.max(1, Math.min(4, parseInt(body.currentSec, 10) || 1));
                const answers = body.answers && typeof body.answers === 'object' ? JSON.stringify(body.answers) : '{}';

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT id, device_id, status FROM listening_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }

                await env.DB.prepare(`
                    UPDATE listening_sessions
                    SET current_sec = ?, answers_json = ?
                    WHERE id = ? AND status = 'in_progress'
                `).bind(currentSec, answers, sessionId).run();

                return json(request, env, {
                    ok: true,
                    serverTime: Date.now(),
                    eco_mode: cap.isEcoMode
                }, 200, cap.isEcoMode ? { 'X-Eco-Mode': 'active' } : {});
            }

            // 3. Submit tes, penilaian server-side & hasil review
            if (path === '/listening/submit' && request.method === 'POST') {
                await ensureListeningSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();
                const submittedAnswers = body.answers && typeof body.answers === 'object' ? body.answers : {};

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM listening_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }
                if (session.status !== 'in_progress') {
                    return json(request, env, { ok: false, error: 'Sesi tes listening ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/listening/${session.test_id}-master.json`, url.origin)));
                if (!assetRes.ok) {
                    return json(request, env, { ok: false, error: 'Master soal tes tidak ditemukan.' }, 500);
                }
                const master = await assetRes.json();

                const now = Date.now();
                let rawScore = 0;
                const sectionScores = { s1: 0, s2: 0, s3: 0, s4: 0 };
                const questionReviews = [];

                // Grading 40 soal
                (master.sections || []).forEach(sec => {
                    const secKey = `s${sec.section_no}`;
                    (sec.groups || []).forEach(grp => {
                        (grp.questions || []).forEach(q => {
                            const qNo = q.no;
                            const rawStudentAns = submittedAnswers[String(qNo)] ?? submittedAnswers[qNo] ?? '';
                            const studentArr = extractStudentAnswerArray(rawStudentAns);
                            const studentAns = studentArr.join(', ');
                            
                            const isCorrect = (q.answers || []).some(acc => {
                                const accNorm = normalizeTextAnswer(acc);
                                return studentArr.some(ans => normalizeTextAnswer(ans) === accNorm);
                            });

                            if (isCorrect) {
                                rawScore++;
                                if (sectionScores[secKey] !== undefined) sectionScores[secKey]++;
                            }

                            questionReviews.push({
                                no: qNo,
                                section: sec.section_no,
                                studentAnswer: studentAns,
                                correctAnswers: q.answers || [],
                                isCorrect
                            });
                        });
                    });
                });

                const bandScore = calculateEstimatedBand(rawScore);
                const sectionScoresJson = JSON.stringify(sectionScores);
                const finalAnswersJson = JSON.stringify(submittedAnswers);

                // Toleransi keterlambatan 60 detik (tidak membuang jawaban, ditandai is_late)
                const durationSeconds = (master.duration_minutes || 40) * 60;
                const elapsedSeconds = Math.floor((now - session.started_at) / 1000);
                const isLate = elapsedSeconds > (durationSeconds + 60) ? 1 : 0;

                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE listening_sessions
                    SET submitted_at = ?, answers_json = ?, raw_score = ?, band_score = ?, section_scores = ?, is_late = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, finalAnswersJson, rawScore, bandScore, sectionScoresJson, isLate, sessionId).run();

                if (!updateRes.meta || updateRes.meta.changes === 0) {
                    return json(request, env, { ok: false, error: 'Sesi tes listening ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                return json(request, env, {
                    ok: true,
                    rawScore,
                    bandScore,
                    sectionScores,
                    questionReviews,
                    isLate: Boolean(isLate),
                    transcripts: master.transcripts || {},
                    submittedAt: now,
                    startedAt: session.started_at
                });
            }

            // =================================================================
            // --- IELTS-Style Academic Reading Mock Test Endpoints ---
            // =================================================================

            // 1. Mulai tes reading / resume session
            if (path === '/reading/start' && request.method === 'POST') {
                await ensureReadingSchema(env);
                const body = await readJson(request);
                const testId = String(body.testId || 'reading1').trim().toLowerCase();
                const nama = String(body.nama || '').trim().slice(0, 80);
                const kelas = String(body.kelas || '').trim().slice(0, 50);
                const deviceId = String(body.deviceId || '').trim().slice(0, 64) || ('dev_' + crypto.randomUUID().slice(0, 12));
                const requestedSessionId = String(body.sessionId || '').trim();

                if (nama.length < 2) {
                    return json(request, env, { ok: false, error: 'Nama lengkap wajib diisi minimal 2 karakter.' }, 400);
                }
                if (kelas.length < 1) {
                    return json(request, env, { ok: false, error: 'Kelas wajib diisi (misal: 12 MIPA 1).' }, 400);
                }

                // Ambil master data soal reading dari Assets
                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/reading/${testId}-master.json`, url.origin)));
                if (!assetRes.ok) {
                    return json(request, env, { ok: false, error: 'Paket tes reading tidak ditemukan.' }, 404);
                }
                const masterData = await assetRes.json();
                const studentTestData = sanitizeReadingTestForStudent(masterData);

                const now = Date.now();
                let session = null;

                // Cek jika ada session yang diminta
                if (requestedSessionId) {
                    session = await env.DB.prepare('SELECT * FROM reading_sessions WHERE id = ?').bind(requestedSessionId).first();
                    if (session && session.device_id !== deviceId) {
                        session = null;
                    }
                }

                // Jika tidak ditemukan atau tidak diminta, cek apakah device memiliki sesi in_progress untuk test ini
                if (!session) {
                    session = await env.DB.prepare(
                        'SELECT * FROM reading_sessions WHERE test_id = ? AND device_id = ? AND status = "in_progress" ORDER BY started_at DESC LIMIT 1'
                    ).bind(testId, deviceId).first();
                }

                const testDurationSeconds = (masterData.duration_minutes || 60) * 60;

                if (session) {
                    // Jika sesi sudah disubmit sebelumnya
                    if (session.status === 'submitted') {
                        return json(request, env, {
                            ok: true,
                            alreadySubmitted: true,
                            sessionId: session.id,
                            rawScore: session.raw_score,
                            bandScore: session.band_score,
                            passageScores: JSON.parse(session.passage_scores || '{}'),
                            typeScores: JSON.parse(session.type_scores || '{}')
                        });
                    }

                    // Hitung sisa waktu mundur server
                    const durationMs = (session.duration_seconds || testDurationSeconds) * 1000;
                    const elapsedMs = now - session.started_at;
                    const remainingSeconds = Math.max(0, Math.floor((durationMs - elapsedMs) / 1000));

                    return json(request, env, {
                        ok: true,
                        sessionId: session.id,
                        resumed: true,
                        startedAt: session.started_at,
                        serverTime: now,
                        remainingSeconds,
                        currentPassage: session.current_passage,
                        savedAnswers: JSON.parse(session.answers_json || '{}'),
                        testData: studentTestData
                    });
                }

                // Buat sesi baru
                const newSessionId = 'rs_' + crypto.randomUUID().replace(/-/g, '').slice(0, 16);
                await env.DB.prepare(`
                    INSERT INTO reading_sessions (id, test_id, device_id, nama_peserta, kelas, started_at, duration_seconds, current_passage, answers_json, status)
                    VALUES (?, ?, ?, ?, ?, ?, ?, 1, '{}', 'in_progress')
                `).bind(newSessionId, testId, deviceId, nama, kelas, now, testDurationSeconds).run();

                return json(request, env, {
                    ok: true,
                    sessionId: newSessionId,
                    resumed: false,
                    startedAt: now,
                    serverTime: now,
                    remainingSeconds: testDurationSeconds,
                    currentPassage: 1,
                    savedAnswers: {},
                    testData: studentTestData
                });
            }

            // 2. Autosave progres jawaban reading & passage aktif
            if (path === '/reading/save-progress' && request.method === 'POST') {
                await ensureReadingSchema(env);
                const cap = await checkCapacityState(env);
                if (cap.isQuotaExceeded) {
                    return json(request, env, {
                        ok: false,
                        quota_exceeded: true,
                        eco_mode: true,
                        error: 'Batas kuota harian sistem telah tercapai. Jawaban Anda tersimpan dengan aman di perangkat lokal (localStorage) dan dapat dikirim ulang.'
                    }, 429, { 'X-Eco-Mode': 'active' });
                }

                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();
                const currentPassage = Math.max(1, Math.min(3, parseInt(body.currentPassage, 10) || 1));
                const answers = body.answers && typeof body.answers === 'object' ? JSON.stringify(body.answers) : '{}';

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT id, device_id, status FROM reading_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes reading tidak ditemukan.' }, 404);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }

                await env.DB.prepare(`
                    UPDATE reading_sessions
                    SET current_passage = ?, answers_json = ?
                    WHERE id = ? AND status = 'in_progress'
                `).bind(currentPassage, answers, sessionId).run();

                return json(request, env, {
                    ok: true,
                    serverTime: Date.now(),
                    eco_mode: cap.isEcoMode
                }, 200, cap.isEcoMode ? { 'X-Eco-Mode': 'active' } : {});
            }

            // 3. Submit tes reading, penilaian server-side 40 soal & hasil review
            if (path === '/reading/submit' && request.method === 'POST') {
                await ensureReadingSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();
                const submittedAnswers = body.answers && typeof body.answers === 'object' ? body.answers : {};

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM reading_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes reading tidak ditemukan.' }, 404);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }
                if (session.status !== 'in_progress') {
                    return json(request, env, { ok: false, error: 'Sesi tes reading ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/reading/${session.test_id}-master.json`, url.origin)));
                if (!assetRes.ok) {
                    return json(request, env, { ok: false, error: 'Master soal tes reading tidak ditemukan.' }, 500);
                }
                const master = await assetRes.json();

                const now = Date.now();
                let rawScore = 0;
                const passageScores = { p1: 0, p2: 0, p3: 0 };
                const typeScores = {};
                const questionReviews = [];

                // Grading 40 soal
                (master.passages || []).forEach(p => {
                    const passKey = `p${p.passage_no}`;
                    (p.groups || []).forEach(grp => {
                        const grpType = grp.type;
                        if (!typeScores[grpType]) typeScores[grpType] = { correct: 0, total: 0 };

                        (grp.questions || []).forEach(q => {
                            typeScores[grpType].total++;
                            const qNo = q.no;
                            const rawStudentAns = submittedAnswers[String(qNo)] ?? submittedAnswers[qNo] ?? '';
                            const studentArr = extractStudentAnswerArray(rawStudentAns);
                            const studentAns = studentArr.join(', ');

                            const isCorrect = (q.answers || []).some(acc => {
                                const accNorm = normalizeTextAnswer(acc);
                                return studentArr.some(ans => normalizeTextAnswer(ans) === accNorm);
                            });

                            if (isCorrect) {
                                rawScore++;
                                if (passageScores[passKey] !== undefined) passageScores[passKey]++;
                                typeScores[grpType].correct++;
                            }

                            questionReviews.push({
                                no: qNo,
                                passage: p.passage_no,
                                type: grpType,
                                studentAnswer: studentAns,
                                correctAnswers: q.answers || [],
                                isCorrect,
                                evidence: q.evidence || ''
                            });
                        });
                    });
                });

                const bandScore = calculateReadingBand(rawScore);
                const passageScoresJson = JSON.stringify(passageScores);
                const typeScoresJson = JSON.stringify(typeScores);
                const finalAnswersJson = JSON.stringify(submittedAnswers);

                // Toleransi keterlambatan 60 detik (tidak membuang jawaban, ditandai is_late)
                const durationSeconds = (session.duration_seconds || (master.duration_minutes || 60) * 60);
                const elapsedSeconds = Math.floor((now - session.started_at) / 1000);
                const isLate = elapsedSeconds > (durationSeconds + 60) ? 1 : 0;

                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE reading_sessions
                    SET submitted_at = ?, answers_json = ?, raw_score = ?, band_score = ?, passage_scores = ?, type_scores = ?, is_late = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, finalAnswersJson, rawScore, bandScore, passageScoresJson, typeScoresJson, isLate, sessionId).run();

                if (!updateRes.meta || updateRes.meta.changes === 0) {
                    return json(request, env, { ok: false, error: 'Sesi tes reading ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                return json(request, env, {
                    ok: true,
                    rawScore,
                    bandScore,
                    passageScores,
                    typeScores,
                    questionReviews,
                    isLate: Boolean(isLate),
                    submittedAt: now,
                    startedAt: session.started_at
                });
            }

            // =================================================================
            // --- IELTS-Style Academic Writing Mock Test Endpoints ---
            // =================================================================

            // 1. Mulai tes writing / resume session
            if (path === '/writing/start' && request.method === 'POST') {
                await ensureWritingSchema(env);
                const body = await readJson(request);
                const testId = String(body.testId || 'writing1').trim().toLowerCase();
                const nama = String(body.nama || '').trim().slice(0, 80);
                const kelas = String(body.kelas || '').trim().slice(0, 50);
                const deviceId = String(body.deviceId || '').trim().slice(0, 64) || ('dev_' + crypto.randomUUID().slice(0, 12));
                const requestedSessionId = String(body.sessionId || '').trim();

                if (nama.length < 2) {
                    return json(request, env, { ok: false, error: 'Nama lengkap wajib diisi minimal 2 karakter.' }, 400);
                }
                if (kelas.length < 1) {
                    return json(request, env, { ok: false, error: 'Kelas wajib diisi (misal: 12 MIPA 1).' }, 400);
                }

                // Ambil master data soal writing dari Assets
                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/writing/${testId}-master.json`, url.origin)));
                if (!assetRes.ok) {
                    return json(request, env, { ok: false, error: 'Paket tes writing tidak ditemukan.' }, 404);
                }
                const masterData = await assetRes.json();
                const studentTestData = sanitizeWritingTestForStudent(masterData);

                const now = Date.now();
                let session = null;

                if (requestedSessionId) {
                    session = await env.DB.prepare('SELECT * FROM writing_sessions WHERE id = ?').bind(requestedSessionId).first();
                    if (session && session.device_id !== deviceId) {
                        session = null;
                    }
                }

                if (!session) {
                    session = await env.DB.prepare(
                        'SELECT * FROM writing_sessions WHERE test_id = ? AND device_id = ? AND status = "in_progress" ORDER BY started_at DESC LIMIT 1'
                    ).bind(testId, deviceId).first();
                }

                const testDurationSeconds = (masterData.duration_minutes || 60) * 60;

                if (session) {
                    if (session.status === 'submitted' || session.status === 'graded') {
                        return json(request, env, {
                            ok: true,
                            alreadySubmitted: true,
                            sessionId: session.id,
                            status: session.status,
                            task1Text: session.task1_text,
                            task2Text: session.task2_text,
                            task1WordCount: session.task1_word_count,
                            task2WordCount: session.task2_word_count,
                            structuralCheck: JSON.parse(session.structural_check || '{}'),
                            writingBand: session.writing_band,
                            task1Criteria: JSON.parse(session.task1_criteria || '{}'),
                            task2Criteria: JSON.parse(session.task2_criteria || '{}'),
                            task1Comment: session.task1_comment,
                            task2Comment: session.task2_comment,
                            sampleAnswers: masterData.tasks.map(t => ({
                                task_no: t.task_no,
                                sample_answer: t.sample_answer
                            }))
                        });
                    }

                    const durationMs = (session.duration_seconds || testDurationSeconds) * 1000;
                    const elapsedMs = now - session.started_at;
                    const remainingSeconds = Math.max(0, Math.floor((durationMs - elapsedMs) / 1000));

                    return json(request, env, {
                        ok: true,
                        sessionId: session.id,
                        resumed: true,
                        startedAt: session.started_at,
                        serverTime: now,
                        remainingSeconds,
                        currentTask: session.current_task,
                        task1Text: session.task1_text,
                        task2Text: session.task2_text,
                        testData: studentTestData
                    });
                }

                // Buat sesi baru
                const newSessionId = 'ws_' + crypto.randomUUID().replace(/-/g, '').slice(0, 16);
                await env.DB.prepare(`
                    INSERT INTO writing_sessions (id, test_id, device_id, nama_peserta, kelas, started_at, duration_seconds, current_task, task1_text, task2_text, status)
                    VALUES (?, ?, ?, ?, ?, ?, ?, 1, '', '', 'in_progress')
                `).bind(newSessionId, testId, deviceId, nama, kelas, now, testDurationSeconds).run();

                return json(request, env, {
                    ok: true,
                    sessionId: newSessionId,
                    resumed: false,
                    startedAt: now,
                    serverTime: now,
                    remainingSeconds: testDurationSeconds,
                    currentTask: 1,
                    task1Text: '',
                    task2Text: '',
                    testData: studentTestData
                });
            }

            // 2. Autosave progres tulisan writing (Task 1 & Task 2)
            if (path === '/writing/save-progress' && request.method === 'POST') {
                await ensureWritingSchema(env);
                const cap = await checkCapacityState(env);
                if (cap.isQuotaExceeded) {
                    return json(request, env, {
                        ok: false,
                        quota_exceeded: true,
                        eco_mode: true,
                        error: 'Batas kuota harian sistem telah tercapai. Jawaban Anda tersimpan dengan aman di perangkat lokal (localStorage) dan dapat dikirim ulang.'
                    }, 429, { 'X-Eco-Mode': 'active' });
                }

                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();
                const currentTask = Math.max(1, Math.min(2, parseInt(body.currentTask, 10) || 1));
                const task1Text = String(body.task1Text || '');
                const task2Text = String(body.task2Text || '');

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT id, device_id, status FROM writing_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes writing tidak ditemukan.' }, 404);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }

                const t1Words = task1Text.trim() ? task1Text.trim().split(/\s+/).filter(w => w.length > 0).length : 0;
                const t2Words = task2Text.trim() ? task2Text.trim().split(/\s+/).filter(w => w.length > 0).length : 0;

                await env.DB.prepare(`
                    UPDATE writing_sessions
                    SET current_task = ?, task1_text = ?, task2_text = ?, task1_word_count = ?, task2_word_count = ?
                    WHERE id = ? AND status = 'in_progress'
                `).bind(currentTask, task1Text, task2Text, t1Words, t2Words, sessionId).run();

                return json(request, env, {
                    ok: true,
                    serverTime: Date.now(),
                    task1WordCount: t1Words,
                    task2WordCount: t2Words,
                    eco_mode: cap.isEcoMode
                }, 200, cap.isEcoMode ? { 'X-Eco-Mode': 'active' } : {});
            }

            // 3. Submit tes writing (generate structural check, buka sample answer, status = submitted)
            if (path === '/writing/submit' && request.method === 'POST') {
                await ensureWritingSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();
                const task1Text = String(body.task1Text || '');
                const task2Text = String(body.task2Text || '');

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM writing_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes writing tidak ditemukan.' }, 404);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }
                if (session.status !== 'in_progress') {
                    return json(request, env, { ok: false, error: 'Sesi tes writing ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/writing/${session.test_id}-master.json`, url.origin)));
                if (!assetRes.ok) {
                    return json(request, env, { ok: false, error: 'Master paket writing tidak ditemukan.' }, 500);
                }
                const master = await assetRes.json();

                const now = Date.now();
                const t1Words = task1Text.trim() ? task1Text.trim().split(/\s+/).filter(w => w.length > 0).length : 0;
                const t2Words = task2Text.trim() ? task2Text.trim().split(/\s+/).filter(w => w.length > 0).length : 0;
                const structuralCheck = analyzeWritingStructure(task1Text, task2Text);

                // Toleransi keterlambatan 60 detik (tidak membuang jawaban, ditandai is_late)
                const durationSeconds = (session.duration_seconds || (master.duration_minutes || 60) * 60);
                const elapsedSeconds = Math.floor((now - session.started_at) / 1000);
                const isLate = elapsedSeconds > (durationSeconds + 60) ? 1 : 0;
                structuralCheck.is_late = Boolean(isLate);

                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE writing_sessions
                    SET submitted_at = ?, task1_text = ?, task2_text = ?, task1_word_count = ?, task2_word_count = ?, structural_check = ?, is_late = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, task1Text, task2Text, t1Words, t2Words, JSON.stringify(structuralCheck), isLate, sessionId).run();

                if (!updateRes.meta || updateRes.meta.changes === 0) {
                    return json(request, env, { ok: false, error: 'Sesi tes writing ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                return json(request, env, {
                    ok: true,
                    submittedAt: now,
                    startedAt: session.started_at,
                    task1WordCount: t1Words,
                    task2WordCount: t2Words,
                    isLate: Boolean(isLate),
                    structuralCheck,
                    sampleAnswers: master.tasks.map(t => ({
                        task_no: t.task_no,
                        sample_answer: t.sample_answer
                    }))
                });
            }

            // 4. Status tes writing (untuk polling hasil penilaian guru oleh siswa)
            if (path === '/writing/status' && request.method === 'GET') {
                await ensureWritingSchema(env);
                const sessionId = String(url.searchParams.get('sessionId') || '').trim();
                const authHeader = request.headers.get('Authorization') || '';
                let teacherKey = request.headers.get('X-Teacher-Key') || '';
                if (authHeader.startsWith('Bearer ')) teacherKey = authHeader.slice(7).trim();
                const deviceId = request.headers.get('X-Device-Id') || url.searchParams.get('deviceId') || '';

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak diberikan.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM writing_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
                }

                const isTeacher = verifyTeacherKey(teacherKey, env);
                const isOwner = deviceId && session.device_id === deviceId;
                if (!isTeacher && !isOwner) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Anda tidak memiliki izin melihat sesi ini.' }, 403);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/writing/${session.test_id}-master.json`, url.origin)));
                const master = assetRes.ok ? await assetRes.json() : null;

                const isSubmittedOrGraded = session.status === 'submitted' || session.status === 'graded';
                const sampleAnswers = (isSubmittedOrGraded && master) ? master.tasks.map(t => ({
                    task_no: t.task_no,
                    sample_answer: t.sample_answer
                })) : [];

                return json(request, env, {
                    ok: true,
                    sessionId: session.id,
                    status: session.status,
                    submittedAt: session.submitted_at,
                    gradedAt: session.graded_at,
                    task1WordCount: session.task1_word_count,
                    task2WordCount: session.task2_word_count,
                    structuralCheck: isSubmittedOrGraded ? JSON.parse(session.structural_check || '{}') : {},
                    writingBand: session.writing_band,
                    task1Criteria: JSON.parse(session.task1_criteria || '{}'),
                    task2Criteria: JSON.parse(session.task2_criteria || '{}'),
                    task1Comment: session.task1_comment || '',
                    task2Comment: session.task2_comment || '',
                    sampleAnswers
                });
            }

            // 5. Penilaian Writing oleh Guru (Protected by TEACHER_KEY)
            if (path === '/writing/admin/grade' && request.method === 'POST') {
                await ensureWritingSchema(env);
                const ipRaw = clientIp(request);
                const ipHash = await getIpHash(ipRaw, env);

                const rateStatus = await checkTeacherRateLimit(env, ipHash);
                if (rateStatus.locked) {
                    return json(request, env, {
                        ok: false,
                        error: `Terlalu banyak percobaan salah. Akses dikunci sementara selama ${rateStatus.remainingMinutes} menit.`
                    }, 429);
                }

                let submittedKey = request.headers.get('X-Teacher-Key') || request.headers.get('X-Admin-Key') || '';
                const body = await readJson(request);
                if (!submittedKey && body.teacherKey) submittedKey = String(body.teacherKey).trim();

                if (!verifyTeacherKey(submittedKey, env)) {
                    await recordTeacherAttemptResult(env, ipHash, false);
                    return json(request, env, { ok: false, error: 'Kunci Guru / Teacher Key tidak valid.' }, 401);
                }
                await recordTeacherAttemptResult(env, ipHash, true);

                const sessionId = String(body.sessionId || '').trim();
                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const t1c = body.task1Criteria || {};
                const t2c = body.task2Criteria || {};

                // Validasi tiap kriteria kelipatan 0.5 (0.0 - 9.0)
                const cKeys1 = ['ta', 'cc', 'lr', 'gra'];
                const cKeys2 = ['tr', 'cc', 'lr', 'gra'];
                for (const k of cKeys1) {
                    if (!isValidBandCriterion(t1c[k])) {
                        return json(request, env, { ok: false, error: `Kriteria Task 1 (${k.toUpperCase()}) tidak valid (harus 0.0 - 9.0 kelipatan 0.5).` }, 400);
                    }
                }
                for (const k of cKeys2) {
                    if (!isValidBandCriterion(t2c[k])) {
                        return json(request, env, { ok: false, error: `Kriteria Task 2 (${k.toUpperCase()}) tidak valid (harus 0.0 - 9.0 kelipatan 0.5).` }, 400);
                    }
                }

                const t1Ta = Number(t1c.ta), t1Cc = Number(t1c.cc), t1Lr = Number(t1c.lr), t1Gra = Number(t1c.gra);
                const t2Tr = Number(t2c.tr), t2Cc = Number(t2c.cc), t2Lr = Number(t2c.lr), t2Gra = Number(t2c.gra);

                const task1Band = roundIeltsBand((t1Ta + t1Cc + t1Lr + t1Gra) / 4);
                const task2Band = roundIeltsBand((t2Tr + t2Cc + t2Lr + t2Gra) / 4);
                const writingBand = roundIeltsBand((task1Band + 2 * task2Band) / 3);

                const task1CriteriaObj = { ta: t1Ta, cc: t1Cc, lr: t1Lr, gra: t1Gra, band: task1Band };
                const task2CriteriaObj = { tr: t2Tr, cc: t2Cc, lr: t2Lr, gra: t2Gra, band: task2Band };
                const task1Comment = String(body.task1Comment || '').trim().slice(0, 2000);
                const task2Comment = String(body.task2Comment || '').trim().slice(0, 2000);
                const teacherName = String(body.teacherName || '').trim().slice(0, 80);
                const now = Date.now();

                await env.DB.prepare(`
                    UPDATE writing_sessions
                    SET status = 'graded', graded_at = ?, teacher_name = ?, task1_criteria = ?, task2_criteria = ?, task1_comment = ?, task2_comment = ?, writing_band = ?
                    WHERE id = ?
                `).bind(now, teacherName, JSON.stringify(task1CriteriaObj), JSON.stringify(task2CriteriaObj), task1Comment, task2Comment, writingBand, sessionId).run();

                return json(request, env, {
                    ok: true,
                    sessionId,
                    task1Band,
                    task2Band,
                    writingBand,
                    gradedAt: now
                });
            }

            // =================================================================
            // --- IELTS-Style Speaking Mock Test Endpoints ---
            // =================================================================

            // 1. Mulai tes speaking / resume session
            if (path === '/speaking/start' && request.method === 'POST') {
                await ensureSpeakingSchema(env);
                const body = await readJson(request);
                const testId = String(body.testId || 'speaking1').trim().toLowerCase();
                const nama = String(body.nama || '').trim().slice(0, 80);
                const kelas = String(body.kelas || '').trim().slice(0, 50);
                const deviceId = String(body.deviceId || '').trim().slice(0, 64) || ('dev_' + crypto.randomUUID().slice(0, 12));
                const requestedSessionId = String(body.sessionId || '').trim();

                if (nama.length < 2) {
                    return json(request, env, { ok: false, error: 'Nama lengkap wajib diisi minimal 2 karakter.' }, 400);
                }
                if (kelas.length < 1) {
                    return json(request, env, { ok: false, error: 'Kelas wajib diisi (misal: 12 MIPA 1).' }, 400);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/speaking/${testId}-master.json`, url.origin)));
                if (!assetRes.ok) {
                    return json(request, env, { ok: false, error: 'Paket tes speaking tidak ditemukan.' }, 404);
                }
                const masterData = await assetRes.json();
                const studentTestData = sanitizeSpeakingTestForStudent(masterData);

                const now = Date.now();
                let session = null;

                if (requestedSessionId) {
                    session = await env.DB.prepare('SELECT * FROM speaking_sessions WHERE id = ?').bind(requestedSessionId).first();
                    if (session && session.device_id !== deviceId) {
                        session = null;
                    }
                }

                if (!session) {
                    session = await env.DB.prepare(
                        'SELECT * FROM speaking_sessions WHERE test_id = ? AND device_id = ? AND status = "in_progress" ORDER BY started_at DESC LIMIT 1'
                    ).bind(testId, deviceId).first();
                }

                if (session) {
                    if (session.status === 'submitted' || session.status === 'graded') {
                        return json(request, env, {
                            ok: true,
                            alreadySubmitted: true,
                            sessionId: session.id,
                            status: session.status,
                            part2Notes: session.part2_notes,
                            speakingBand: session.speaking_band,
                            criteriaScores: JSON.parse(session.criteria_scores || '{}'),
                            teacherComment: session.teacher_comment,
                            sampleAnswers: filterSampleAnswers(masterData)
                        });
                    }

                    const uploadedRows = await env.DB.prepare(
                        'SELECT question_id, duration_seconds FROM speaking_recordings WHERE session_id = ?'
                    ).bind(session.id).all();
                    const recordedQuestions = (uploadedRows.results || []).map(r => ({
                        question_id: r.question_id,
                        duration_seconds: r.duration_seconds
                    }));

                    return json(request, env, {
                        ok: true,
                        sessionId: session.id,
                        resumed: true,
                        startedAt: session.started_at,
                        serverTime: now,
                        part2Notes: session.part2_notes,
                        recordedQuestions,
                        testData: studentTestData
                    });
                }

                const newSessionId = 'spk_' + crypto.randomUUID().replace(/-/g, '').slice(0, 16);
                const rawPkg = String(body.packageType || (body.selfStudy ? 'self_study' : 'teacher')).trim().toLowerCase();
                const packageType = (rawPkg === 'mandiri' || rawPkg === 'self_study') ? 'self_study' : (rawPkg === 'addon' ? 'addon' : 'teacher');

                // Poin 5: Penegakan kuota mingguan Add-On Guru oleh sistem
                if (packageType === 'addon') {
                    const maxWeeklyQuota = parseInt(env.MAX_WEEKLY_ADDON_QUOTA, 10) || 20;
                    const d = new Date(now);
                    const day = d.getUTCDay();
                    const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
                    const startOfWeek = new Date(d.setDate(diff)).setUTCHours(0, 0, 0, 0);

                    const weeklyCount = await env.DB.prepare(`
                        SELECT COUNT(*) AS cnt FROM speaking_sessions
                        WHERE package_type = 'addon' AND started_at >= ?
                    `).bind(startOfWeek).first().catch(() => null);

                    if (weeklyCount && (weeklyCount.cnt || 0) >= maxWeeklyQuota) {
                        return json(request, env, {
                            ok: false,
                            error: `Kuota evaluasi guru untuk minggu ini telah penuh (maksimal ${maxWeeklyQuota} sesi/minggu). Kuota baru akan dibuka kembali pada hari Senin 00:00 UTC.`
                        }, 429);
                    }
                }

                await env.DB.prepare(`
                    INSERT INTO speaking_sessions (id, test_id, device_id, nama_peserta, kelas, started_at, status, package_type)
                    VALUES (?, ?, ?, ?, ?, ?, 'in_progress', ?)
                `).bind(newSessionId, testId, deviceId, nama, kelas, now, packageType).run();

                return json(request, env, {
                    ok: true,
                    sessionId: newSessionId,
                    resumed: false,
                    startedAt: now,
                    serverTime: now,
                    recordedQuestions: [],
                    testData: studentTestData
                });
            }

            // 2. Unggah rekaman per pertanyaan (Immediate Upload - D1 Hardened Storage)
            if ((path === '/speaking/upload-recording' || path === '/speaking/upload-audio') && request.method === 'POST') {
                await ensureSpeakingSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const questionId = String(body.questionId || '').trim();
                const audioData = String(body.audioData || ''); // Base64
                const rawMimeType = String(body.mimeType || 'audio/webm');
                const transcript = String(body.transcript || '').slice(0, 5000);
                const durationSeconds = Math.max(0, parseFloat(body.durationSeconds) || 0);
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();

                // Validasi format ID (huruf, angka, tanda hubung, garis bawah)
                if (!/^[a-zA-Z0-9_-]{8,64}$/.test(sessionId)) {
                    return json(request, env, { ok: false, error: 'Format sessionId tidak valid.' }, 400);
                }
                if (!/^[a-zA-Z0-9_-]{2,32}$/.test(questionId)) {
                    return json(request, env, { ok: false, error: 'Format questionId tidak valid.' }, 400);
                }

                // Whitelist tipe dasar MIME (abaikan parameter codec)
                const baseMime = rawMimeType.split(';')[0].trim().toLowerCase();
                const ALLOWED_AUDIO_MIMES = ['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg'];
                if (!ALLOWED_AUDIO_MIMES.includes(baseMime)) {
                    return json(request, env, {
                        ok: false,
                        error: `Tipe audio tidak diizinkan (${baseMime}). Hanya mendukung: ${ALLOWED_AUDIO_MIMES.join(', ')}`
                    }, 415);
                }

                if (!audioData || audioData.length < 50) {
                    return json(request, env, { ok: false, error: 'Data rekaman audio kosong atau tidak valid.' }, 400);
                }

                // Batas ukuran maksimal 1 MB binary (1.048.576 bytes / ~1.398.102 karakter Base64)
                if (audioData.length > 1398102) {
                    return json(request, env, { ok: false, error: 'Ukuran rekaman audio melebihi batas 1 MB.' }, 413);
                }

                let audioBytes;
                try {
                    audioBytes = base64ToUint8Array(audioData);
                } catch {
                    return json(request, env, { ok: false, error: 'Format data rekaman audio Base64 tidak valid.' }, 400);
                }

                if (audioBytes.byteLength > 1048576) {
                    return json(request, env, { ok: false, error: 'Ukuran rekaman audio melebihi batas 1 MB.' }, 413);
                }

                const session = await env.DB.prepare('SELECT id, device_id, status, package_type FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking tidak ditemukan.' }, 404);
                }
                if (session.status !== 'in_progress') {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking ini sudah diselesaikan.' }, 400);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }

                // 4. Proteksi Server: Tolak unggahan audio dari paket mandiri / self_study
                const pkgType = String(session.package_type || 'teacher').trim().toLowerCase();
                if (pkgType === 'mandiri' || pkgType === 'self_study') {
                    return json(request, env, {
                        ok: false,
                        error: 'Penyimpanan rekaman audio di server tidak tersedia untuk Paket Mandiri. Fitur unggah rekaman hanya diperuntukkan bagi Paket Guru atau Add-on Penilaian Speaking.'
                    }, 403);
                }

                // Batas kuota maksimal 15 rekaman unik per sesi
                const existingRec = await env.DB.prepare('SELECT id FROM speaking_recordings WHERE session_id = ? AND question_id = ?').bind(sessionId, questionId).first();
                if (!existingRec) {
                    const countRow = await env.DB.prepare('SELECT count(*) as cnt FROM speaking_recordings WHERE session_id = ?').bind(sessionId).first();
                    if ((countRow?.cnt || 0) >= 15) {
                        return json(request, env, { ok: false, error: 'Batas kuota maksimal 15 rekaman per sesi telah tercapai.' }, 400);
                    }
                }

                const recId = `${sessionId}_${questionId}`;
                const fileSizeBytes = audioBytes.byteLength;
                const now = Date.now();

                // Poin 5: Batas total ukuran rekaman audio per ujian (maksimal 4 MB)
                const currentSessionBytesRow = await env.DB.prepare(`
                    SELECT COALESCE(SUM(file_size_bytes), 0) AS total_bytes
                    FROM speaking_recordings
                    WHERE session_id = ? AND question_id != ?
                `).bind(sessionId, questionId).first().catch(() => null);

                const currentSessionBytes = (currentSessionBytesRow && currentSessionBytesRow.total_bytes) || 0;
                const MAX_TOTAL_SESSION_BYTES = 4 * 1024 * 1024; // 4 MB
                if (currentSessionBytes + fileSizeBytes > MAX_TOTAL_SESSION_BYTES) {
                    return json(request, env, {
                        ok: false,
                        error: 'Total akumulasi ukuran rekaman audio untuk sesi ujian ini telah melebihi batas maksimal 4 MB.'
                    }, 413);
                }

                await env.DB.prepare(`
                    INSERT INTO speaking_recordings (id, session_id, question_id, mime_type, audio_data, transcript, duration_seconds, file_size_bytes, uploaded_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ON CONFLICT(id) DO UPDATE SET
                        mime_type = excluded.mime_type,
                        audio_data = excluded.audio_data,
                        transcript = excluded.transcript,
                        duration_seconds = excluded.duration_seconds,
                        file_size_bytes = excluded.file_size_bytes,
                        uploaded_at = excluded.uploaded_at
                `).bind(recId, sessionId, questionId, baseMime, audioBytes.buffer, transcript, durationSeconds, fileSizeBytes, now).run();

                return json(request, env, {
                    ok: true,
                    questionId,
                    mimeType: baseMime,
                    fileSizeBytes,
                    uploadedAt: now
                });
            }

            // 3. Submit tes speaking & simpan notes Part 2
            if (path === '/speaking/submit' && request.method === 'POST') {
                await ensureSpeakingSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const requestDeviceId = (request.headers.get('X-Device-Id') || String(body.deviceId || '')).trim();
                const part2Notes = String(body.part2Notes || '').slice(0, 5000);

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking tidak ditemukan.' }, 404);
                }
                if (!requestDeviceId || session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
                }
                if (session.status !== 'in_progress') {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/speaking/${session.test_id}-master.json`, url.origin)));
                const master = assetRes.ok ? await assetRes.json() : null;

                const now = Date.now();
                // Toleransi keterlambatan 60 detik (durasi wajar speaking ~20 menit = 1200 detik)
                const durationSeconds = 1200;
                const elapsedSeconds = Math.floor((now - session.started_at) / 1000);
                const isLate = elapsedSeconds > (durationSeconds + 60) ? 1 : 0;

                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE speaking_sessions
                    SET submitted_at = ?, part2_notes = ?, is_late = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, part2Notes, isLate, sessionId).run();

                if (!updateRes.meta || updateRes.meta.changes === 0) {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                return json(request, env, {
                    ok: true,
                    submittedAt: now,
                    startedAt: session.started_at,
                    isLate: Boolean(isLate),
                    sampleAnswers: master ? filterSampleAnswers(master) : null
                });
            }

            // 4. Status tes speaking (untuk polling / pengecekan)
            if (path === '/speaking/status' && request.method === 'GET') {
                await ensureSpeakingSchema(env);
                const sessionId = String(url.searchParams.get('sessionId') || '').trim();
                const authHeader = request.headers.get('Authorization') || '';
                let teacherKey = request.headers.get('X-Teacher-Key') || '';
                if (authHeader.startsWith('Bearer ')) teacherKey = authHeader.slice(7).trim();
                const deviceId = request.headers.get('X-Device-Id') || url.searchParams.get('deviceId') || '';

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak diberikan.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
                }

                const isTeacher = verifyTeacherKey(teacherKey, env);
                const isOwner = deviceId && session.device_id === deviceId;
                if (!isTeacher && !isOwner) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Anda tidak memiliki izin melihat sesi ini.' }, 403);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/speaking/${session.test_id}-master.json`, url.origin)));
                const master = assetRes.ok ? await assetRes.json() : null;

                return json(request, env, {
                    ok: true,
                    sessionId: session.id,
                    status: session.status,
                    submittedAt: session.submitted_at,
                    gradedAt: session.graded_at,
                    part2Notes: session.part2_notes,
                    speakingBand: session.speaking_band,
                    criteriaScores: JSON.parse(session.criteria_scores || '{}'),
                    teacherComment: session.teacher_comment || '',
                    sampleAnswers: (session.status === 'submitted' || session.status === 'graded') && master ? filterSampleAnswers(master) : null
                });
            }

            // 5. Detail sesi speaking (rekaman, durasi, transkrip) untuk Guru & Siswa
            if (path === '/speaking/detail' && request.method === 'GET') {
                await ensureSpeakingSchema(env);
                const sessionId = String(url.searchParams.get('sessionId') || '').trim();
                const authHeader = request.headers.get('Authorization') || '';
                let teacherKey = request.headers.get('X-Teacher-Key') || '';
                if (authHeader.startsWith('Bearer ')) teacherKey = authHeader.slice(7).trim();
                const deviceId = request.headers.get('X-Device-Id') || url.searchParams.get('deviceId') || '';

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID wajib diberikan.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
                }

                const isTeacher = verifyTeacherKey(teacherKey, env);
                const isOwner = deviceId && session.device_id === deviceId;
                if (!isTeacher && !isOwner) {
                    return json(request, env, { ok: false, error: 'Tidak memiliki izin akses sesi ini.' }, 401);
                }

                const recRows = await env.DB.prepare(`
                    SELECT question_id, mime_type, transcript, duration_seconds, file_size_bytes, uploaded_at, deleted_at
                    FROM speaking_recordings
                    WHERE session_id = ?
                    ORDER BY question_id ASC
                `).bind(sessionId).all();

                const formattedRecordings = (recRows.results || []).map(r => ({
                    question_id: r.question_id,
                    mime_type: r.mime_type,
                    transcript: r.transcript || '',
                    duration_seconds: r.duration_seconds,
                    file_size_bytes: r.file_size_bytes,
                    uploaded_at: r.uploaded_at,
                    deleted_at: r.deleted_at,
                    audio_available: !r.deleted_at && Boolean(r.file_size_bytes > 0)
                }));

                return json(request, env, {
                    ok: true,
                    session: {
                        id: session.id,
                        test_id: session.test_id,
                        nama_peserta: session.nama_peserta,
                        kelas: session.kelas,
                        started_at: session.started_at,
                        submitted_at: session.submitted_at,
                        part2_notes: session.part2_notes,
                        status: session.status,
                        graded_at: session.graded_at,
                        teacher_name: session.teacher_name,
                        criteria_scores: JSON.parse(session.criteria_scores || '{}'),
                        teacher_comment: session.teacher_comment,
                        speaking_band: session.speaking_band
                    },
                    recordings: formattedRecordings
                });
            }

            // 6. Generate Short-Lived Audio Token (untuk tag audio browser tanpa mengekspos kunci di URL)
            if (path === '/speaking/audio-token' && request.method === 'POST') {
                const body = await readJson(request);
                const authHeader = request.headers.get('Authorization') || '';
                let submittedKey = request.headers.get('X-Teacher-Key') || request.headers.get('X-Admin-Key') || '';
                if (authHeader.startsWith('Bearer ')) submittedKey = authHeader.slice(7).trim();
                if (!submittedKey && body.teacherKey) submittedKey = String(body.teacherKey).trim();

                if (!verifyTeacherKey(submittedKey, env)) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Kunci guru tidak valid.' }, 401);
                }

                const sessionId = String(body.sessionId || '').trim();
                const questionId = String(body.questionId || '').trim();
                if (!sessionId || !questionId) {
                    return json(request, env, { ok: false, error: 'sessionId dan questionId wajib ada.' }, 400);
                }

                const secret = getAudioStreamSecret(env);
                if (!secret) {
                    return json(request, env, {
                        ok: false,
                        error: 'Layanan streaming audio belum dapat digunakan: AUDIO_STREAM_SECRET belum dikonfigurasi di server (fail-closed).'
                    }, 500);
                }
                const recordingId = `${sessionId}_${questionId}`;
                const token = await generateAudioToken(recordingId, secret, 300);
                return json(request, env, { ok: true, token, expiresIn: 300 });
            }

            // 7. Streaming Audio Privat (Hanya Guru via Auth Header / Token Singkat atau Siswa Pemilik)
            if (path === '/speaking/audio' && (request.method === 'GET' || request.method === 'HEAD')) {
                await ensureSpeakingSchema(env);
                const sessionId = String(url.searchParams.get('sessionId') || '').trim();
                const questionId = String(url.searchParams.get('questionId') || '').trim();
                const deviceId = request.headers.get('X-Device-Id') || url.searchParams.get('deviceId') || '';
                const authHeader = request.headers.get('Authorization') || '';
                let teacherKey = request.headers.get('X-Teacher-Key') || '';
                if (authHeader.startsWith('Bearer ')) teacherKey = authHeader.slice(7).trim();

                const audioToken = url.searchParams.get('token') || '';

                // Poin 1: Tolak jika kunci guru, admin, atau token lisensi diserahkan di query parameter
                if (audioToken) {
                    const isTeacherKey = env.TEACHER_KEY && timingSafeEqual(audioToken, env.TEACHER_KEY);
                    const isAdminKey = env.ADMIN_KEY && timingSafeEqual(audioToken, env.ADMIN_KEY);
                    const isLicenseFormat = /^(IELT|SNBT)-/i.test(audioToken);
                    if (isTeacherKey || isAdminKey || isLicenseFormat) {
                        return json(request, env, {
                            ok: false,
                            error: 'Akses ditolak: Kunci rahasia atau kode lisensi dilarang diserahkan melalui query parameter URL. Gunakan header X-Teacher-Key atau token pemutaran sesaat.'
                        }, 403);
                    }
                }

                let isTokenValid = false;
                const secret = getAudioStreamSecret(env);
                const recordingId = `${sessionId}_${questionId}`;
                if (audioToken && secret) {
                    isTokenValid = await verifyAudioToken(recordingId, audioToken, secret);
                }

                if (!sessionId || !questionId) {
                    return json(request, env, { ok: false, error: 'sessionId dan questionId wajib diberikan.' }, 400);
                }

                const session = await env.DB.prepare('SELECT device_id FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tidak ditemukan.' }, 404);
                }

                const isTeacher = isTokenValid || verifyTeacherKey(teacherKey, env);
                const isOwner = deviceId && session.device_id === deviceId;
                if (!isTeacher && !isOwner) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Kunci guru tidak valid atau token audio kedaluwarsa.' }, 401);
                }

                const rec = await env.DB.prepare(`
                    SELECT mime_type, audio_data, deleted_at FROM speaking_recordings
                    WHERE session_id = ? AND question_id = ?
                `).bind(sessionId, questionId).first();

                if (!rec || !rec.audio_data || rec.deleted_at) {
                    return json(request, env, {
                        ok: false,
                        error: rec?.deleted_at
                            ? 'Rekaman audio telah dihapus dari server sesuai kebijakan masa simpan privasi siswa.'
                            : 'Rekaman audio untuk pertanyaan ini tidak ditemukan.'
                    }, 404);
                }

                let bytes;
                if (rec.audio_data instanceof ArrayBuffer) {
                    bytes = new Uint8Array(rec.audio_data);
                } else if (ArrayBuffer.isView(rec.audio_data)) {
                    bytes = new Uint8Array(rec.audio_data.buffer, rec.audio_data.byteOffset, rec.audio_data.byteLength);
                } else if (typeof rec.audio_data === 'string' && rec.audio_data.length > 0) {
                    // Backward compatibility: dekode legacy Base64 string
                    try {
                        bytes = base64ToUint8Array(rec.audio_data);
                    } catch {
                        bytes = new Uint8Array(0);
                    }
                } else if (Array.isArray(rec.audio_data)) {
                    bytes = new Uint8Array(rec.audio_data);
                } else {
                    bytes = new Uint8Array(0);
                }

                const totalLen = bytes.byteLength;
                if (totalLen === 0) {
                    return json(request, env, {
                        ok: false,
                        error: rec?.deleted_at
                            ? 'Rekaman audio telah dihapus dari server sesuai kebijakan masa simpan privasi siswa.'
                            : 'Rekaman audio kosong atau telah dihapus.'
                    }, 404);
                }

                const mimeType = (rec.mime_type || 'audio/webm').split(';')[0].trim().toLowerCase();

                // Dukungan HTTP Range Request (Status 206) untuk Safari / iOS seeking
                const rangeHeader = request.headers.get('Range');
                if (rangeHeader && rangeHeader.startsWith('bytes=')) {
                    const rangeSpec = rangeHeader.replace('bytes=', '').trim();
                    const parts = rangeSpec.split('-');
                    let start = parseInt(parts[0], 10);
                    let end = parts[1] ? parseInt(parts[1], 10) : totalLen - 1;

                    if (isNaN(start)) {
                        start = totalLen - end;
                        end = totalLen - 1;
                    }
                    if (isNaN(end) || end >= totalLen) {
                        end = totalLen - 1;
                    }

                    if (start > end || start >= totalLen) {
                        return new Response(null, {
                            status: 416,
                            headers: {
                                'Content-Range': `bytes */${totalLen}`,
                                ...corsHeaders(request, env)
                            }
                        });
                    }

                    const chunk = bytes.subarray(start, end + 1);
                    return new Response(request.method === 'HEAD' ? null : chunk, {
                        status: 206,
                        headers: {
                            'Content-Type': mimeType,
                            'Content-Range': `bytes ${start}-${end}/${totalLen}`,
                            'Accept-Ranges': 'bytes',
                            'Content-Length': String(chunk.length),
                            'X-Content-Type-Options': 'nosniff',
                            'Cache-Control': 'private, no-store, no-cache, must-revalidate',
                            'Referrer-Policy': 'no-referrer',
                            ...corsHeaders(request, env)
                        }
                    });
                }

                return new Response(request.method === 'HEAD' ? null : bytes.buffer, {
                    status: 200,
                    headers: {
                        'Content-Type': mimeType,
                        'Content-Length': String(totalLen),
                        'Accept-Ranges': 'bytes',
                        'X-Content-Type-Options': 'nosniff',
                        'Cache-Control': 'private, no-store, no-cache, must-revalidate',
                        'Referrer-Policy': 'no-referrer',
                        ...corsHeaders(request, env)
                    }
                });
            }

            // 8. Pembersihan / Retensi Rekaman Audio (Protected by TEACHER_KEY)
            if (path === '/speaking/admin/cleanup' && request.method === 'POST') {
                await ensureSpeakingSchema(env);
                const authHeader = request.headers.get('Authorization') || '';
                let submittedKey = request.headers.get('X-Teacher-Key') || request.headers.get('X-Admin-Key') || '';
                if (authHeader.startsWith('Bearer ')) submittedKey = authHeader.slice(7).trim();
                const body = await readJson(request);
                if (!submittedKey && body.teacherKey) submittedKey = String(body.teacherKey).trim();

                if (!verifyTeacherKey(submittedKey, env)) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Kunci guru tidak valid.' }, 401);
                }

                const confirmText = String(body.confirm || '').trim();
                if (confirmText !== 'HAPUS') {
                    return json(request, env, {
                        ok: false,
                        error: 'Konfirmasi tidak valid. Harap ketik "HAPUS" untuk menyetujui pembersihan rekaman audio.'
                    }, 400);
                }

                const mode = String(body.mode || 'session');
                let cleanResult = { deletedCount: 0, freedBytes: 0 };

                if (mode === 'session') {
                    const sessionId = String(body.sessionId || '').trim();
                    if (!sessionId) return json(request, env, { ok: false, error: 'sessionId wajib ada.' }, 400);
                    cleanResult = await cleanRecordingsForSessions(env, [sessionId], 'manual', 'session', 'Sesi: ' + sessionId);
                } else if (mode === 'student') {
                    const nama = String(body.nama || '').trim();
                    const kelas = String(body.kelas || '').trim();
                    if (!nama || !kelas) return json(request, env, { ok: false, error: 'nama dan kelas wajib ada.' }, 400);
                    const sessions = await env.DB.prepare('SELECT id FROM speaking_sessions WHERE nama_peserta = ? AND kelas = ?').bind(nama, kelas).all();
                    const sessionIds = (sessions.results || []).map(s => s.id);
                    cleanResult = await cleanRecordingsForSessions(env, sessionIds, 'manual', 'student', `Siswa: ${nama} (${kelas})`);
                } else if (mode === 'class') {
                    const kelas = String(body.kelas || '').trim();
                    if (!kelas) return json(request, env, { ok: false, error: 'kelas wajib ada.' }, 400);
                    const sessions = await env.DB.prepare('SELECT id FROM speaking_sessions WHERE kelas = ?').bind(kelas).all();
                    const sessionIds = (sessions.results || []).map(s => s.id);
                    cleanResult = await cleanRecordingsForSessions(env, sessionIds, 'manual', 'class', `Kelas: ${kelas}`);
                } else if (mode === 'graded') {
                    // Hapus audio untuk SEMUA sesi speaking yang sudah dinilai guru ('graded')
                    const sessions = await env.DB.prepare('SELECT id FROM speaking_sessions WHERE status = "graded"').all();
                    const sessionIds = (sessions.results || []).map(s => s.id);
                    cleanResult = await cleanRecordingsForSessions(env, sessionIds, 'manual', 'graded', 'Semua Rekaman Yang Sudah Dinilai');
                } else if (mode === 'retention') {
                    // Jalankan aturan retensi manual
                    cleanResult = await runScheduledRetentionCleanup(env);
                } else {
                    return json(request, env, { ok: false, error: 'Mode pembersihan tidak valid. Pilihan: session, student, class, graded, retention.' }, 400);
                }

                return json(request, env, {
                    ok: true,
                    mode,
                    deletedCount: cleanResult.deletedCount,
                    freedBytes: cleanResult.freedBytes
                });
            }

            // 8b. Riwayat Audit Log Pembersihan Rekaman
            if (path === '/speaking/admin/cleanup-logs' && (request.method === 'GET' || request.method === 'POST')) {
                await ensureSpeakingSchema(env);
                const authHeader = request.headers.get('Authorization') || '';
                let submittedKey = request.headers.get('X-Teacher-Key') || request.headers.get('X-Admin-Key') || '';
                if (authHeader.startsWith('Bearer ')) submittedKey = authHeader.slice(7).trim();
                if (request.method === 'POST') {
                    const body = await readJson(request);
                    if (!submittedKey && body.teacherKey) submittedKey = String(body.teacherKey).trim();
                }

                if (!verifyTeacherKey(submittedKey, env)) {
                    return json(request, env, { ok: false, error: 'Kunci Guru tidak valid.' }, 401);
                }

                const logs = await env.DB.prepare(`
                    SELECT id, timestamp, trigger_type, cleanup_type, target_info, deleted_count, freed_bytes, notes
                    FROM cleanup_logs
                    ORDER BY timestamp DESC
                    LIMIT 30
                `).all();

                return json(request, env, { ok: true, logs: logs.results || [] });
            }

            // 7. Penilaian Speaking oleh Guru (4 Kriteria: FC, LR, GRA, PR)
            if (path === '/speaking/admin/grade' && request.method === 'POST') {
                await ensureSpeakingSchema(env);
                const teacherKey = request.headers.get('X-Teacher-Key') || '';
                const body = await readJson(request);
                const submittedKey = teacherKey || String(body.teacherKey || '').trim();

                if (!verifyTeacherKey(submittedKey, env)) {
                    return json(request, env, { ok: false, error: 'Kunci Guru / Teacher Key tidak valid.' }, 401);
                }

                const sessionId = String(body.sessionId || '').trim();
                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking tidak ditemukan.' }, 404);
                }

                const fc = Number(body.fc);
                const lr = Number(body.lr);
                const gra = Number(body.gra);
                const pr = Number(body.pr);

                if (!isValidBandCriterion(fc) || !isValidBandCriterion(lr) || !isValidBandCriterion(gra) || !isValidBandCriterion(pr)) {
                    return json(request, env, { ok: false, error: 'Nilai setiap kriteria harus angka 0.0 - 9.0 dengan kelipatan 0.5 (misal: 6.0, 6.5, 7.0).' }, 400);
                }

                const speakingBand = roundIeltsBand((fc + lr + gra + pr) / 4);
                const criteriaObj = { fc, lr, gra, pr, band: speakingBand };
                const teacherComment = String(body.teacherComment || '').trim().slice(0, 3000);
                const teacherName = String(body.teacherName || '').trim().slice(0, 80);
                const now = Date.now();

                await env.DB.prepare(`
                    UPDATE speaking_sessions
                    SET status = 'graded', graded_at = ?, teacher_name = ?, criteria_scores = ?, teacher_comment = ?, speaking_band = ?
                    WHERE id = ?
                `).bind(now, teacherName, JSON.stringify(criteriaObj), teacherComment, speakingBand, sessionId).run();

                return json(request, env, {
                    ok: true,
                    sessionId,
                    speakingBand,
                    criteriaScores: criteriaObj,
                    gradedAt: now
                });
            }

            // 8. Hapus Sesi & Rekaman Speaking (Kebijakan Privasi Data)
            if (path === '/speaking/admin/delete' && request.method === 'POST') {
                await ensureSpeakingSchema(env);
                const teacherKey = request.headers.get('X-Teacher-Key') || '';
                const body = await readJson(request);
                const submittedKey = teacherKey || String(body.teacherKey || '').trim();

                if (!verifyTeacherKey(submittedKey, env)) {
                    return json(request, env, { ok: false, error: 'Kunci Guru / Teacher Key tidak valid.' }, 401);
                }

                const sessionId = String(body.sessionId || '').trim();
                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                await env.DB.prepare('DELETE FROM speaking_recordings WHERE session_id = ?').bind(sessionId).run();
                await env.DB.prepare('DELETE FROM speaking_sessions WHERE id = ?').bind(sessionId).run();

                return json(request, env, { ok: true, deletedSessionId: sessionId });
            }

            // 9. Rekap Guru Terpadu IELTS (Listening, Reading, Writing, & Speaking)
            if ((path === '/listening/admin/results' || path === '/reading/admin/results' || path === '/writing/admin/results' || path === '/speaking/admin/results' || path === '/ielts/admin/results') && (request.method === 'GET' || request.method === 'POST')) {
                await ensureListeningSchema(env);
                await ensureReadingSchema(env);
                await ensureWritingSchema(env);
                await ensureSpeakingSchema(env);
                const ipRaw = clientIp(request);
                const ipHash = await getIpHash(ipRaw, env);

                // Cek Rate Limit
                const rateStatus = await checkTeacherRateLimit(env, ipHash);
                if (rateStatus.locked) {
                    return json(request, env, {
                        ok: false,
                        error: `Terlalu banyak percobaan salah. Akses dikunci sementara selama ${rateStatus.remainingMinutes} menit demi keamanan.`
                    }, 429);
                }

                // Ambil key dari header atau body POST (jangan URL query)
                let submittedKey = request.headers.get('X-Teacher-Key') || request.headers.get('X-Admin-Key') || '';
                let filterKelas = url.searchParams.get('kelas') || '';

                if (request.method === 'POST') {
                    const body = await readJson(request);
                    if (!submittedKey && body.teacherKey) submittedKey = String(body.teacherKey).trim();
                    if (!filterKelas && body.kelas) filterKelas = String(body.kelas).trim();
                }

                if (!verifyTeacherKey(submittedKey, env)) {
                    await recordTeacherAttemptResult(env, ipHash, false);
                    return json(request, env, { ok: false, error: 'Kunci Guru / Teacher Key tidak valid.' }, 401);
                }

                // Reset failed attempts jika valid
                await recordTeacherAttemptResult(env, ipHash, true);

                let lisQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, raw_score, band_score, section_scores, is_late FROM listening_sessions WHERE status = 'submitted'`;
                let readQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, raw_score, band_score, passage_scores, type_scores, is_late FROM reading_sessions WHERE status = 'submitted'`;
                let writeQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, current_task, task1_text, task2_text, task1_word_count, task2_word_count, status, graded_at, task1_criteria, task2_criteria, task1_comment, task2_comment, writing_band, is_late FROM writing_sessions WHERE status IN ('submitted', 'graded')`;
                let spkQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, part2_notes, status, graded_at, teacher_name, criteria_scores, teacher_comment, speaking_band, is_late FROM speaking_sessions WHERE status IN ('submitted', 'graded')`;
                const params = [];

                if (filterKelas) {
                    lisQuery += ` AND kelas = ?`;
                    readQuery += ` AND kelas = ?`;
                    writeQuery += ` AND kelas = ?`;
                    spkQuery += ` AND kelas = ?`;
                    params.push(filterKelas);
                }

                lisQuery += ` ORDER BY submitted_at DESC LIMIT 500`;
                readQuery += ` ORDER BY submitted_at DESC LIMIT 500`;
                writeQuery += ` ORDER BY submitted_at DESC LIMIT 500`;
                spkQuery += ` ORDER BY submitted_at DESC LIMIT 500`;

                const lisStmt = params.length > 0 ? env.DB.prepare(lisQuery).bind(...params) : env.DB.prepare(lisQuery);
                const readStmt = params.length > 0 ? env.DB.prepare(readQuery).bind(...params) : env.DB.prepare(readQuery);
                const writeStmt = params.length > 0 ? env.DB.prepare(writeQuery).bind(...params) : env.DB.prepare(writeQuery);
                const spkStmt = params.length > 0 ? env.DB.prepare(spkQuery).bind(...params) : env.DB.prepare(spkQuery);

                const now = Date.now();
                const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;
                const wibNow = new Date(now + WIB_OFFSET_MS);
                const startOfDayWib = new Date(Date.UTC(wibNow.getUTCFullYear(), wibNow.getUTCMonth(), wibNow.getUTCDate()) - WIB_OFFSET_MS);
                const startOfDayMs = startOfDayWib.getTime();

                const [lisRes, readRes, writeRes, spkRes, storageStats, activeSessionsWithRecordings, recordingStatusRows, licenseStats, todayActivityRow] = await Promise.all([
                    lisStmt.all(),
                    readStmt.all(),
                    writeStmt.all(),
                    spkStmt.all(),
                    env.DB.prepare(`
                        SELECT COUNT(*) as active_count, COALESCE(SUM(file_size_bytes), 0) as total_bytes
                        FROM speaking_recordings
                        WHERE deleted_at IS NULL AND length(audio_data) > 0
                    `).first(),
                    env.DB.prepare(`
                        SELECT r.session_id, s.nama_peserta, s.kelas, s.status, s.started_at, s.graded_at, s.package_type,
                               COUNT(r.id) as recording_count, COALESCE(SUM(r.file_size_bytes), 0) as session_bytes
                        FROM speaking_recordings r
                        JOIN speaking_sessions s ON r.session_id = s.id
                        WHERE r.deleted_at IS NULL AND length(r.audio_data) > 0
                        GROUP BY r.session_id
                    `).all(),
                    env.DB.prepare(`
                        SELECT session_id,
                               COUNT(*) as total_rec,
                               SUM(CASE WHEN deleted_at IS NULL AND length(audio_data) > 0 THEN 1 ELSE 0 END) as active_rec,
                               MAX(deleted_at) as deleted_at
                        FROM speaking_recordings
                        GROUP BY session_id
                    `).all(),
                    env.DB.prepare(`
                        SELECT COUNT(*) as cnt 
                        FROM licenses 
                        WHERE revoked = 0 AND (expires_at IS NULL OR expires_at > ?)
                    `).bind(now).first().catch(() => ({ cnt: 0 })),
                    env.DB.prepare(`
                        SELECT 
                            (SELECT COUNT(*) FROM listening_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as lis_today,
                            (SELECT COUNT(*) FROM reading_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as read_today,
                            (SELECT COUNT(*) FROM writing_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as write_today,
                            (SELECT COUNT(*) FROM speaking_sessions WHERE started_at >= ? OR (submitted_at IS NOT NULL AND submitted_at >= ?)) as spk_today,
                            (SELECT COUNT(*) FROM speaking_recordings WHERE uploaded_at >= ?) as rec_today
                    `).bind(startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs, startOfDayMs).first().catch(() => ({
                        lis_today: 0, read_today: 0, write_today: 0, spk_today: 0, rec_today: 0
                    }))
                ]);

                // Hitung estimasi kapasitas & rows written harian (Zero write load on D1)
                const activeLicensesCount = Number(licenseStats?.cnt || 0);
                const lisToday = Number(todayActivityRow?.lis_today || 0);
                const readToday = Number(todayActivityRow?.read_today || 0);
                const writeToday = Number(todayActivityRow?.write_today || 0);
                const spkToday = Number(todayActivityRow?.spk_today || 0);
                const recToday = Number(todayActivityRow?.rec_today || 0);

                const estimatedDailyRowsWritten = (lisToday * 3) + (readToday * 3) + (writeToday * 15) + (spkToday * 5) + (recToday * 1) + 2;
                const estimatedDailyRequests = (lisToday * 15) + (readToday * 15) + (writeToday * 30) + (spkToday * 30) + (recToday * 3) + 25;

                const FREE_LIMIT_REQUESTS = 100000;
                const FREE_LIMIT_ROWS_WRITTEN = 100000;
                const FREE_LIMIT_STORAGE_BYTES = 500 * 1024 * 1024;
                const FREE_LIMIT_STORAGE_MB = 500;

                const evaluateCapacityMetric = (used, limit, warnPct = 60, dangerPct = 80) => {
                    const percent = Math.min(100, Number(((used / limit) * 100).toFixed(1)));
                    let status = 'normal';
                    let label = 'Normal (<60%)';
                    let color = 'green';
                    if (percent >= dangerPct) {
                        status = 'danger';
                        label = `Kritis (≥${dangerPct}%)`;
                        color = 'red';
                    } else if (percent >= warnPct) {
                        status = 'warning';
                        label = `Peringatan (≥${warnPct}%)`;
                        color = 'yellow';
                    }
                    return { percent, status, label, color };
                };

                const totalStorageBytes = Number(storageStats?.total_bytes || 0);
                const totalStorageMb = Number((totalStorageBytes / (1024 * 1024)).toFixed(2));

                const storageEval = evaluateCapacityMetric(totalStorageBytes, FREE_LIMIT_STORAGE_BYTES);
                const requestsEval = evaluateCapacityMetric(estimatedDailyRequests, FREE_LIMIT_REQUESTS);
                const rowsWrittenEval = evaluateCapacityMetric(estimatedDailyRowsWritten, FREE_LIMIT_ROWS_WRITTEN);

                let overallCapacityStatus = 'normal';
                if (storageEval.status === 'danger' || requestsEval.status === 'danger' || rowsWrittenEval.status === 'danger') {
                    overallCapacityStatus = 'danger';
                } else if (storageEval.status === 'warning' || requestsEval.status === 'warning' || rowsWrittenEval.status === 'warning') {
                    overallCapacityStatus = 'warning';
                }

                // Hitung masa kedaluwarsa & peringatan retensi per sesi aktif sesuai jenis paket
                const sessionExpiryMap = new Map();
                let expiringSoonCount = 0;
                let expiringSoonRecordings = 0;
                let expiringUngradedCount = 0;
                const expiringSessions = [];

                for (const s of (activeSessionsWithRecordings.results || [])) {
                    const isSelfStudy = s.package_type === 'self_study';
                    const isGraded = s.status === 'graded';
                    let retentionDays = RETENTION_CONFIG.TEACHER_UNGRADED_RETENTION_DAYS || RETENTION_CONFIG.UNGRADED_RETENTION_DAYS || 60;
                    let baseTime = s.started_at;

                    if (isSelfStudy) {
                        retentionDays = RETENTION_CONFIG.SELF_STUDY_RETENTION_DAYS || 3;
                        baseTime = s.started_at;
                    } else if (isGraded) {
                        retentionDays = RETENTION_CONFIG.TEACHER_GRADED_RETENTION_DAYS || RETENTION_CONFIG.GRADED_RETENTION_DAYS || 14;
                        baseTime = s.graded_at || s.started_at;
                    }

                    const expiryTime = baseTime + (retentionDays * DAY_MS);
                    const msRemaining = expiryTime - now;
                    const daysRemaining = Math.ceil(msRemaining / DAY_MS);
                    const isExpiringSoon = daysRemaining <= RETENTION_CONFIG.EXPIRING_WARNING_DAYS;
                    const isExpiringUngraded = !isGraded && !isSelfStudy && isExpiringSoon;

                    const info = {
                        sessionId: s.session_id,
                        nama_peserta: s.nama_peserta,
                        kelas: s.kelas,
                        status: s.status,
                        package_type: s.package_type || 'teacher',
                        recording_count: s.recording_count,
                        session_bytes: s.session_bytes,
                        daysRemaining: Math.max(0, daysRemaining),
                        isExpiringSoon,
                        isExpiringUngraded,
                        expiryTime
                    };

                    sessionExpiryMap.set(s.session_id, info);

                    if (isExpiringSoon) {
                        expiringSoonCount++;
                        expiringSoonRecordings += s.recording_count;
                        if (isExpiringUngraded) {
                            expiringUngradedCount++;
                        }
                        expiringSessions.push(info);
                    }
                }

                const recStatusMap = new Map();
                (recordingStatusRows.results || []).forEach(row => {
                    recStatusMap.set(row.session_id, {
                        total_rec: row.total_rec,
                        active_rec: row.active_rec,
                        deleted_at: row.deleted_at
                    });
                });

                // Gabungkan per siswa: Map key = `nama_peserta.toLowerCase() + '|' + kelas.toLowerCase()`
                const studentMap = new Map();

                (lisRes.results || []).forEach(l => {
                    const key = `${(l.nama_peserta || '').trim().toLowerCase()}|${(l.kelas || '').trim().toLowerCase()}`;
                    if (!studentMap.has(key)) {
                        studentMap.set(key, {
                            nama_peserta: l.nama_peserta,
                            kelas: l.kelas,
                            listening: null,
                            reading: null,
                            writing: null,
                            speaking: null,
                            last_submitted_at: l.submitted_at || l.started_at
                        });
                    }
                    const entry = studentMap.get(key);
                    entry.listening = {
                        id: l.id,
                        test_id: l.test_id,
                        raw_score: l.raw_score,
                        band_score: l.band_score,
                        section_scores: l.section_scores,
                        is_late: Boolean(l.is_late),
                        submitted_at: l.submitted_at
                    };
                    entry.last_submitted_at = Math.max(entry.last_submitted_at, l.submitted_at || 0);
                });

                (readRes.results || []).forEach(r => {
                    const key = `${(r.nama_peserta || '').trim().toLowerCase()}|${(r.kelas || '').trim().toLowerCase()}`;
                    if (!studentMap.has(key)) {
                        studentMap.set(key, {
                            nama_peserta: r.nama_peserta,
                            kelas: r.kelas,
                            listening: null,
                            reading: null,
                            writing: null,
                            speaking: null,
                            last_submitted_at: r.submitted_at || r.started_at
                        });
                    }
                    const entry = studentMap.get(key);
                    entry.reading = {
                        id: r.id,
                        test_id: r.test_id,
                        raw_score: r.raw_score,
                        band_score: r.band_score,
                        passage_scores: r.passage_scores,
                        type_scores: r.type_scores,
                        is_late: Boolean(r.is_late),
                        submitted_at: r.submitted_at
                    };
                    entry.last_submitted_at = Math.max(entry.last_submitted_at, r.submitted_at || 0);
                });

                (writeRes.results || []).forEach(w => {
                    const key = `${(w.nama_peserta || '').trim().toLowerCase()}|${(w.kelas || '').trim().toLowerCase()}`;
                    if (!studentMap.has(key)) {
                        studentMap.set(key, {
                            nama_peserta: w.nama_peserta,
                            kelas: w.kelas,
                            listening: null,
                            reading: null,
                            writing: null,
                            speaking: null,
                            last_submitted_at: w.submitted_at || w.started_at
                        });
                    }
                    const entry = studentMap.get(key);
                    entry.writing = {
                        id: w.id,
                        test_id: w.test_id,
                        status: w.status,
                        task1_text: w.task1_text,
                        task2_text: w.task2_text,
                        task1_word_count: w.task1_word_count,
                        task2_word_count: w.task2_word_count,
                        task1_criteria: JSON.parse(w.task1_criteria || '{}'),
                        task2_criteria: JSON.parse(w.task2_criteria || '{}'),
                        task1_comment: w.task1_comment || '',
                        task2_comment: w.task2_comment || '',
                        writing_band: w.writing_band,
                        is_late: Boolean(w.is_late),
                        submitted_at: w.submitted_at,
                        graded_at: w.graded_at
                    };
                    entry.last_submitted_at = Math.max(entry.last_submitted_at, w.submitted_at || 0);
                });

                (spkRes.results || []).forEach(s => {
                    const key = `${(s.nama_peserta || '').trim().toLowerCase()}|${(s.kelas || '').trim().toLowerCase()}`;
                    if (!studentMap.has(key)) {
                        studentMap.set(key, {
                            nama_peserta: s.nama_peserta,
                            kelas: s.kelas,
                            listening: null,
                            reading: null,
                            writing: null,
                            speaking: null,
                            last_submitted_at: s.submitted_at || s.started_at
                        });
                    }
                    const entry = studentMap.get(key);
                    const recStat = recStatusMap.get(s.id);
                    const retentionInfo = sessionExpiryMap.get(s.id) || null;
                    entry.speaking = {
                        id: s.id,
                        test_id: s.test_id,
                        status: s.status,
                        part2_notes: s.part2_notes,
                        criteria_scores: JSON.parse(s.criteria_scores || '{}'),
                        teacher_name: s.teacher_name,
                        teacher_comment: s.teacher_comment || '',
                        speaking_band: s.speaking_band,
                        is_late: Boolean(s.is_late),
                        submitted_at: s.submitted_at,
                        graded_at: s.graded_at,
                        audio_available: Boolean(recStat && recStat.active_rec > 0),
                        deleted_at: recStat ? recStat.deleted_at : null,
                        retention_info: retentionInfo
                    };
                    entry.last_submitted_at = Math.max(entry.last_submitted_at, s.submitted_at || 0);
                });

                // Hitung Overall (L+R+W+S) per siswa:
                // HANYA dihitung jika keempat subtes sudah ada DAN Writing + Speaking sudah dinilai guru ('graded')
                const mergedStudents = Array.from(studentMap.values()).map(s => {
                    let overallBand = null;
                    const hasLis = s.listening && typeof s.listening.band_score === 'number';
                    const hasRead = s.reading && typeof s.reading.band_score === 'number';
                    const hasWrite = s.writing && s.writing.status === 'graded' && typeof s.writing.writing_band === 'number';
                    const hasSpk = s.speaking && s.speaking.status === 'graded' && typeof s.speaking.speaking_band === 'number';

                    if (hasLis && hasRead && hasWrite && hasSpk) {
                        const avg = (s.listening.band_score + s.reading.band_score + s.writing.writing_band + s.speaking.speaking_band) / 4;
                        overallBand = roundIeltsBand(avg);
                    }

                    return {
                        ...s,
                        overall_band: overallBand,
                        overall_lrw: overallBand
                    };
                });

                mergedStudents.sort((a, b) => (b.last_submitted_at || 0) - (a.last_submitted_at || 0));

                return json(request, env, {
                    ok: true,
                    total: mergedStudents.length,
                    results: mergedStudents,
                    storage_retention: {
                        active_recordings_count: storageStats?.active_count || 0,
                        total_file_size_bytes: totalStorageBytes,
                        total_file_size_mb: totalStorageMb,
                        d1_capacity_limit_mb: FREE_LIMIT_STORAGE_MB,
                        expiring_soon_count: expiringSoonCount,
                        expiring_soon_recordings_count: expiringSoonRecordings,
                        expiring_ungraded_count: expiringUngradedCount,
                        retention_days_graded: RETENTION_CONFIG.TEACHER_GRADED_RETENTION_DAYS || RETENTION_CONFIG.GRADED_RETENTION_DAYS || 14,
                        retention_days_ungraded: RETENTION_CONFIG.TEACHER_UNGRADED_RETENTION_DAYS || RETENTION_CONFIG.UNGRADED_RETENTION_DAYS || 60,
                        retention_days_self_study: RETENTION_CONFIG.SELF_STUDY_RETENTION_DAYS || 3,
                        warning_days: RETENTION_CONFIG.EXPIRING_WARNING_DAYS,
                        expiring_sessions: expiringSessions
                    },
                    capacity_monitoring: {
                        limits: {
                            daily_requests: FREE_LIMIT_REQUESTS,
                            daily_rows_written: FREE_LIMIT_ROWS_WRITTEN,
                            storage_mb: FREE_LIMIT_STORAGE_MB,
                            warning_threshold_pct: 60,
                            danger_threshold_pct: 80
                        },
                        metrics: {
                            storage: {
                                used_bytes: totalStorageBytes,
                                used_mb: totalStorageMb,
                                limit_mb: FREE_LIMIT_STORAGE_MB,
                                percent: storageEval.percent,
                                status: storageEval.status,
                                label: storageEval.label,
                                color: storageEval.color
                            },
                            daily_requests: {
                                estimated_count: estimatedDailyRequests,
                                limit: FREE_LIMIT_REQUESTS,
                                percent: requestsEval.percent,
                                status: requestsEval.status,
                                label: requestsEval.label,
                                color: requestsEval.color
                            },
                            daily_rows_written: {
                                estimated_count: estimatedDailyRowsWritten,
                                limit: FREE_LIMIT_ROWS_WRITTEN,
                                percent: rowsWrittenEval.percent,
                                status: rowsWrittenEval.status,
                                label: rowsWrittenEval.label,
                                color: rowsWrittenEval.color
                            },
                            active_recordings: {
                                count: storageStats?.active_count || 0
                            },
                            active_licenses: {
                                count: activeLicensesCount
                            }
                        },
                        overall_status: overallCapacityStatus
                    },
                    raw_listening: lisRes.results || [],
                    raw_reading: readRes.results || [],
                    raw_writing: writeRes.results || [],
                    raw_speaking: spkRes.results || []
                });
            }

            // --- Siswa: ambil soal premium ---
            const paketMatch = path.match(/^\/paket\/([a-z0-9_-]{1,60})$/);
            if (paketMatch && request.method === 'GET') {
                const res = await authorize(env, bearerToken(request), request.headers.get('X-Device-Id'), false, 'snbt');
                if (!res.ok) return json(request, env, { ok: false, error: res.error, reason: res.reason }, res.status);

                const asset = await env.ASSETS.fetch(new Request(new URL(`/${paketMatch[1]}.json`, url.origin)));
                if (!asset.ok) return json(request, env, { ok: false, error: 'Paket tidak ditemukan.' }, 404);

                return new Response(asset.body, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Cache-Control': 'no-store',
                        ...corsHeaders(request, env)
                    }
                });
            }

            // --- Sains Populer: Like komentar ---
            if (path === '/comments/like' && request.method === 'POST') {
                await ensureCommentsSchema(env);
                const body = await readJson(request);
                const commentId = parseInt(body.commentId, 10);
                const deviceId = String(body.deviceId || '').trim().slice(0, 64);

                if (!commentId || !deviceId) {
                    return json(request, env, { ok: false, error: 'Parameter tidak lengkap.' }, 400);
                }

                const existingLike = await env.DB.prepare(
                    'SELECT 1 AS ok FROM article_comment_likes WHERE comment_id = ? AND device_id = ?'
                ).bind(commentId, deviceId).first();

                if (existingLike) {
                    await env.DB.prepare(
                        'DELETE FROM article_comment_likes WHERE comment_id = ? AND device_id = ?'
                    ).bind(commentId, deviceId).run();
                    await env.DB.prepare(
                        'UPDATE article_comments SET likes = MAX(0, likes - 1) WHERE id = ?'
                    ).bind(commentId).run();
                } else {
                    await env.DB.prepare(
                        'INSERT INTO article_comment_likes (comment_id, device_id, created_at) VALUES (?, ?, ?)'
                    ).bind(commentId, deviceId, Date.now()).run();
                    await env.DB.prepare(
                        'UPDATE article_comments SET likes = likes + 1 WHERE id = ?'
                    ).bind(commentId).run();
                }

                const updated = await env.DB.prepare(
                    'SELECT likes FROM article_comments WHERE id = ?'
                ).bind(commentId).first();

                return json(request, env, {
                    ok: true,
                    liked: !existingLike,
                    likes: updated ? updated.likes : 0
                });
            }

            // --- Sains Populer: Ambil & Kirim Komentar per Artikel ---
            const commentMatch = path.match(/^\/comments\/([a-z0-9_-]{2,120})$/);
            if (commentMatch) {
                const slug = commentMatch[1];
                await ensureCommentsSchema(env);

                if (request.method === 'GET') {
                    const deviceId = String(url.searchParams.get('deviceId') || '').trim().slice(0, 64);
                    const rows = await env.DB.prepare(
                        `SELECT id, article_slug, parent_id,
                                nama AS author_name, sekolah AS school_name, pesan AS content,
                                nama, sekolah, pesan, is_admin, likes, created_at
                         FROM article_comments
                         WHERE article_slug = ?
                         ORDER BY created_at ASC
                         LIMIT 300`
                    ).bind(slug).all();

                    let likedIds = [];
                    if (deviceId) {
                        const likedRows = await env.DB.prepare(
                            `SELECT l.comment_id
                             FROM article_comment_likes l
                             JOIN article_comments c ON c.id = l.comment_id
                             WHERE c.article_slug = ? AND l.device_id = ?`
                        ).bind(slug, deviceId).all();
                        likedIds = (likedRows.results || []).map((r) => r.comment_id);
                    }

                    return json(request, env, { ok: true, comments: rows.results || [], likedIds });
                }

                if (request.method === 'POST') {
                    const body = await readJson(request);
                    const nama = String(body.authorName || body.nama || '').trim().slice(0, 60);
                    const sekolah = String(body.schoolName || body.sekolah || '').trim().slice(0, 80);
                    const pesan = String(body.content || body.pesan || '').trim();
                    const parentId = body.parentId ? parseInt(body.parentId, 10) : null;
                    const deviceId = String(body.deviceId || '').trim().slice(0, 64);
                    const adminFlag = isTeacherOrAdmin(request, env) ? 1 : 0;

                    if (nama.length < 2) {
                        return json(request, env, { ok: false, error: 'Nama harus diisi (minimal 2 huruf).' }, 400);
                    }

                    const errText = containsProfanityOrSpam(`${nama} ${sekolah} ${pesan}`) || containsProfanityOrSpam(pesan);
                    if (errText) {
                        return json(request, env, { ok: false, error: errText }, 400);
                    }

                    const now = Date.now();
                    const ipRaw = clientIp(request);
                    const ipHash = await getIpHash(ipRaw, env);

                    // Rate limit: maksimal 1 komentar per 15 detik dari perangkat/IP yang sama (kecuali Guru/Admin)
                    if (!adminFlag) {
                        const recent = await env.DB.prepare(
                            'SELECT created_at FROM article_comments WHERE (device_id = ? OR ip_hash = ?) AND created_at > ? LIMIT 1'
                        ).bind(deviceId || 'anon', ipHash, now - 15000).first();

                        if (recent) {
                            return json(request, env, {
                                ok: false,
                                error: 'Mohon tunggu 15 detik sebelum mengirim tanggapan berikutnya.'
                            }, 429);
                        }
                    }

                    const ins = await env.DB.prepare(
                        `INSERT INTO article_comments (article_slug, parent_id, nama, sekolah, pesan, is_admin, likes, device_id, ip_hash, created_at)
                         VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?, ?)`
                    ).bind(slug, parentId, nama, sekolah, pesan, adminFlag, deviceId, ipHash, now).run();

                    const newId = ins.meta && ins.meta.last_row_id ? ins.meta.last_row_id : Date.now();

                    return json(request, env, {
                        ok: true,
                        comment: {
                            id: newId,
                            article_slug: slug,
                            parent_id: parentId,
                            author_name: nama,
                            school_name: sekolah,
                            content: pesan,
                            nama,
                            sekolah,
                            pesan,
                            is_admin: adminFlag,
                            likes: 0,
                            created_at: now
                        }
                    });
                }
            }

            // --- Moderasi Komentar Sains Populer (Bisa diakses dengan Kode Guru atau Kunci Admin) ---
            if (path === '/admin/comments/delete' && request.method === 'POST') {
                if (!isTeacherOrAdmin(request, env)) {
                    return json(request, env, { ok: false, error: 'Kode Guru/Admin tidak valid.' }, 401);
                }
                await ensureCommentsSchema(env);
                const body = await readJson(request);
                const id = parseInt(body.commentId || body.id, 10);
                if (!id) return json(request, env, { ok: false, error: 'ID komentar tidak valid.' }, 400);
                await env.DB.prepare('DELETE FROM article_comments WHERE id = ? OR parent_id = ?').bind(id, id).run();
                await env.DB.prepare('DELETE FROM article_comment_likes WHERE comment_id = ?').bind(id).run();
                return json(request, env, { ok: true });
            }

            // --- Admin Lisensi & Operasional (HANYA ADMIN_KEY, BATASAN ORIGIN & RATE-LIMITED) ---
            if (path.startsWith('/admin')) {
                // 1. Batasan Origin Ketat
                const origin = request.headers.get('Origin');
                const referer = request.headers.get('Referer');
                if (origin || referer) {
                    const checkUrl = origin || referer;
                    try {
                        const u = new URL(checkUrl);
                        const allowedHosts = ['kimia.ajarkita.my.id', 'rezi-d.github.io', 'localhost', '127.0.0.1'];
                        if (!allowedHosts.includes(u.hostname)) {
                            return json(request, env, { ok: false, error: 'Akses origin tidak diizinkan (403 Forbidden).' }, 403);
                        }
                    } catch {
                        return json(request, env, { ok: false, error: 'Format Origin/Referer tidak valid.' }, 403);
                    }
                }

                // 2. Rate Limiting Brute-Force pada /admin/*
                const ipRaw = clientIp(request);
                const ipHash = await getIpHash(ipRaw, env);
                const rateStatus = await checkAdminRateLimit(env, ipHash);
                if (rateStatus.locked) {
                    return json(request, env, {
                        ok: false,
                        error: `Terlalu banyak percobaan autentikasi admin yang gagal. Akses dikunci sementara selama ${rateStatus.remainingMinutes} menit.`
                    }, 429);
                }

                // 3. Autentikasi Kunci Admin (Tolak Kunci Guru)
                if (!isAdmin(request, env)) {
                    await recordAdminAttemptResult(env, ipHash, false);
                    return json(request, env, { ok: false, error: 'Tidak berwenang (Kunci Admin salah atau tidak memiliki akses).' }, 401);
                }

                // Reset hitungan gagal jika autentikasi sukses
                await recordAdminAttemptResult(env, ipHash, true);

                if (path === '/admin/token' && request.method === 'POST') {
                    await ensureLicensesSchema(env);
                    const body = await readJson(request);
                    const wa = String(body.wa || '').replace(/\D/g, '');
                    const nama = String(body.nama || '').trim().slice(0, 80);
                    const days = Math.min(365, Math.max(1, parseInt(body.days, 10) || 30));
                    const maxDevices = Math.min(5, Math.max(1, parseInt(body.maxDevices, 10) || 2));
                    const packageType = String(body.packageType || 'snbt').trim().toLowerCase();

                    const token = generateToken(packageType);
                    await env.DB.prepare(
                        'INSERT INTO licenses (token_hash, nama, wa, package_type, created_at, duration_days, max_devices) VALUES (?, ?, ?, ?, ?, ?, ?)'
                    ).bind(await sha256Hex(token), nama, wa, packageType, Date.now(), days, maxDevices).run();

                    return json(request, env, { ok: true, token, packageType, days, maxDevices });
                }

                if (path === '/admin/list' && request.method === 'GET') {
                    await ensureLicensesSchema(env);
                    const rows = await env.DB.prepare(
                        `SELECT l.id, l.nama, l.wa, COALESCE(l.package_type, 'snbt') AS package_type,
                                l.created_at, l.activated_at, l.expires_at,
                                l.duration_days, l.max_devices, l.revoked,
                                (SELECT COUNT(*) FROM devices d WHERE d.license_id = l.id) AS devices
                         FROM licenses l ORDER BY l.id DESC LIMIT 500`
                    ).all();
                    return json(request, env, { ok: true, licenses: rows.results });
                }

                if ((path === '/admin/revoke' || path === '/admin/unrevoke') && request.method === 'POST') {
                    const body = await readJson(request);
                    const lic = await resolveAdminLicense(env, body);
                    if (!lic) return json(request, env, { ok: false, error: 'Lisensi tidak ditemukan (ID atau token tidak valid).' }, 404);

                    const isUnrevoke = path === '/admin/unrevoke' || body.unrevoke === true || body.action === 'unrevoke';
                    const targetRevoked = isUnrevoke ? 0 : 1;

                    await env.DB.prepare('UPDATE licenses SET revoked = ? WHERE id = ?').bind(targetRevoked, lic.id).run();

                    let devicesCleared = 0;
                    if (targetRevoked === 1) {
                        // Saat dicabut (mis. refund), bersihkan seluruh binding perangkat terdaftar
                        const delRes = await env.DB.prepare('DELETE FROM devices WHERE license_id = ?').bind(lic.id).run();
                        devicesCleared = delRes.changes || 0;
                    }

                    return json(request, env, {
                        ok: true,
                        licenseId: lic.id,
                        nama: lic.nama || '',
                        revoked: targetRevoked,
                        devicesCleared,
                        message: targetRevoked === 1
                            ? `Lisensi #${lic.id} berhasil dicabut (refund/dinonaktifkan). Akses server ditolak.`
                            : `Lisensi #${lic.id} berhasil diaktifkan kembali (unrevoked).`
                    });
                }

                if (path === '/admin/reset-devices' && request.method === 'POST') {
                    const body = await readJson(request);
                    const lic = await resolveAdminLicense(env, body);
                    if (!lic) return json(request, env, { ok: false, error: 'Lisensi tidak ditemukan (ID atau token tidak valid).' }, 404);

                    const delRes = await env.DB.prepare('DELETE FROM devices WHERE license_id = ?').bind(lic.id).run();
                    return json(request, env, {
                        ok: true,
                        licenseId: lic.id,
                        nama: lic.nama || '',
                        maxDevices: lic.max_devices || 2,
                        clearedDevices: delRes.changes || 0,
                        message: `Berhasil mereset binding perangkat untuk lisensi #${lic.id}. Siswa dapat mendaftarkan ulang hingga ${lic.max_devices || 2} perangkat.`
                    });
                }

                if (path === '/admin/delete-customer' && request.method === 'POST') {
                    await ensureLicensesSchema(env);
                    await ensureSpeakingSchema(env);
                    await ensureWritingSchema(env);
                    await ensureListeningSchema(env);
                    await ensureReadingSchema(env);

                    const body = await readJson(request);
                    const lic = await resolveAdminLicense(env, body);
                    if (!lic) {
                        return json(request, env, { ok: false, error: 'Lisensi pembeli tidak ditemukan (ID, WA, atau token tidak cocok).' }, 404);
                    }

                    // Ambil daftar device_id milik lisensi ini
                    const devRows = await env.DB.prepare('SELECT device_id FROM devices WHERE license_id = ?').bind(lic.id).all();
                    const deviceIds = (devRows.results || []).map(r => r.device_id).filter(Boolean);

                    // Hitung rekaman & sesi terkait untuk pratinjau dry-run
                    let spkCount = 0;
                    let recCount = 0;
                    let totalAudioBytes = 0;
                    let wrtCount = 0;
                    let lisCount = 0;
                    let rdCount = 0;
                    let claimCount = 0;

                    const claimRow = await env.DB.prepare('SELECT COUNT(*) as cnt FROM scholarship_claims WHERE license_id = ?').bind(lic.id).first().catch(() => null);
                    claimCount = claimRow?.cnt || 0;

                    for (const devId of deviceIds) {
                        const spk = await env.DB.prepare('SELECT COUNT(*) as cnt FROM speaking_sessions WHERE device_id = ?').bind(devId).first().catch(() => null);
                        spkCount += (spk?.cnt || 0);

                        const rec = await env.DB.prepare(`
                            SELECT COUNT(*) as cnt, COALESCE(SUM(file_size_bytes), 0) as total_bytes
                            FROM speaking_recordings
                            WHERE session_id IN (SELECT id FROM speaking_sessions WHERE device_id = ?)
                        `).bind(devId).first().catch(() => null);
                        recCount += (rec?.cnt || 0);
                        totalAudioBytes += (rec?.total_bytes || 0);

                        const wrt = await env.DB.prepare('SELECT COUNT(*) as cnt FROM writing_sessions WHERE device_id = ?').bind(devId).first().catch(() => null);
                        wrtCount += (wrt?.cnt || 0);

                        const lis = await env.DB.prepare('SELECT COUNT(*) as cnt FROM listening_sessions WHERE device_id = ?').bind(devId).first().catch(() => null);
                        lisCount += (lis?.cnt || 0);

                        const rd = await env.DB.prepare('SELECT COUNT(*) as cnt FROM reading_sessions WHERE device_id = ?').bind(devId).first().catch(() => null);
                        rdCount += (rd?.cnt || 0);
                    }

                    // Poin 2: dry_run sebagai DEFAULT kecuali confirm: true atau dry_run: false
                    const isDryRun = body.dry_run !== false && body.confirm !== true;
                    if (isDryRun) {
                        return json(request, env, {
                            ok: true,
                            dry_run: true,
                            message: 'Pratinjau data pembeli yang akan dihapus. Kirim ulang dengan "confirm": true atau "dry_run": false untuk mengeksekusi penghapusan permanen.',
                            target: {
                                license_id: lic.id,
                                nama_masked: lic.nama ? (lic.nama.slice(0, 2) + '***') : '',
                                package_type: lic.package_type,
                                devices_count: deviceIds.length,
                                speaking_sessions_count: spkCount,
                                recordings_count: recCount,
                                total_audio_bytes: totalAudioBytes,
                                writing_sessions_count: wrtCount,
                                listening_sessions_count: lisCount,
                                reading_sessions_count: rdCount,
                                scholarship_claims_count: claimCount
                            }
                        });
                    }

                    // Eksekusi atomik batch penghapusan kaskade
                    const statements = [];
                    for (const devId of deviceIds) {
                        statements.push(env.DB.prepare('DELETE FROM speaking_recordings WHERE session_id IN (SELECT id FROM speaking_sessions WHERE device_id = ?)').bind(devId));
                        statements.push(env.DB.prepare('DELETE FROM speaking_sessions WHERE device_id = ?').bind(devId));
                        statements.push(env.DB.prepare('DELETE FROM writing_sessions WHERE device_id = ?').bind(devId));
                        statements.push(env.DB.prepare('DELETE FROM listening_sessions WHERE device_id = ?').bind(devId));
                        statements.push(env.DB.prepare('DELETE FROM reading_sessions WHERE device_id = ?').bind(devId));
                    }
                    statements.push(env.DB.prepare('DELETE FROM scholarship_claims WHERE license_id = ?').bind(lic.id));
                    statements.push(env.DB.prepare('DELETE FROM devices WHERE license_id = ?').bind(lic.id));
                    statements.push(env.DB.prepare('DELETE FROM licenses WHERE id = ?').bind(lic.id));

                    if (typeof env.DB.batch === 'function') {
                        await env.DB.batch(statements);
                    } else {
                        for (const stmt of statements) {
                            await stmt.run();
                        }
                    }

                    // Catat ke cleanup_logs tanpa data pribadi mentah (PII)
                    const now = Date.now();
                    try {
                        await env.DB.prepare(`
                            INSERT INTO cleanup_logs (timestamp, trigger_type, cleanup_type, target_info, deleted_count, freed_bytes, notes)
                            VALUES (?, ?, ?, ?, ?, ?, ?)
                        `).bind(
                            now,
                            'admin_delete_customer',
                            'customer_gdpr_pdp',
                            `license_id:${lic.id}; devices:${deviceIds.length}; recordings:${recCount}`,
                            1 + deviceIds.length + recCount + spkCount + wrtCount + lisCount + rdCount + claimCount,
                            totalAudioBytes,
                            'D1 atomic batch cascade deletion per UU PDP right to erasure. Note: Cloudflare D1 Time Travel retention retains historical state up to 7 days before physical purge.'
                        ).run();
                    } catch {}

                    return json(request, env, {
                        ok: true,
                        deleted: true,
                        dry_run: false,
                        license_id: lic.id,
                        devices_purged: deviceIds.length,
                        recordings_purged: recCount,
                        freed_bytes: totalAudioBytes,
                        message: `Seluruh data pembeli terkait lisensi #${lic.id} berhasil dihapus secara permanen dari tabel aktif D1. Catatan: riwayat time-travel D1 dapat menyimpan jejak hingga 7 hari.`
                    });
                }

                if (path === '/admin/activation-logs' && request.method === 'GET') {
                    await ensureActivationSchema(env);
                    const rows = await env.DB.prepare(
                        'SELECT id, timestamp, ip_hash, token_prefix, success, reason FROM activation_logs ORDER BY id DESC LIMIT 200'
                    ).all();
                    return json(request, env, { ok: true, logs: rows.results || [] });
                }
            }

            return json(request, env, { ok: false, error: 'Endpoint tidak ditemukan.' }, 404);
        } catch (err) {
            return json(request, env, { ok: false, error: 'Terjadi kesalahan server.' }, 500);
        }
    },
    async scheduled(event, env, ctx) {
        if (ctx && typeof ctx.waitUntil === 'function') {
            ctx.waitUntil(runScheduledRetentionCleanup(env));
        } else {
            await runScheduledRetentionCleanup(env);
        }
    }
};

export {
    hmacSha256Hex,
    getIpPepper,
    getIpHash,
    clientIp,
    runScheduledRetentionCleanup,
    generateAudioToken,
    verifyAudioToken,
    getAudioStreamSecret,
    timingSafeEqualHex,
    getTokenPrefixPepper,
    hashTokenPrefix,
    resolveAdminLicense
};
