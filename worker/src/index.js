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

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // tanpa 0/O/1/I
const DAY_MS = 24 * 60 * 60 * 1000;

// ---------- Utilitas ----------
function generateToken() {
    const bytes = crypto.getRandomValues(new Uint8Array(12));
    const chars = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
    return `SNBT-${chars.slice(0, 4)}-${chars.slice(4, 8)}-${chars.slice(8, 12)}`;
}

async function sha256Hex(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
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

function json(request, env, data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
            ...corsHeaders(request, env)
        }
    });
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

// ---------- Logika lisensi ----------
// register=true  -> boleh mengaktifkan lisensi & mendaftarkan perangkat baru
// register=false -> perangkat harus sudah terdaftar (dipakai untuk ambil soal)
async function authorize(env, token, deviceId, register) {
    if (!token || !validDeviceId(deviceId)) {
        return { ok: false, status: 400, error: 'Token atau ID perangkat tidak valid.' };
    }

    const hash = await sha256Hex(token);
    const lic = await env.DB.prepare('SELECT * FROM licenses WHERE token_hash = ?').bind(hash).first();
    if (!lic) return { ok: false, status: 401, error: 'Kode token tidak ditemukan.' };
    if (lic.revoked) return { ok: false, status: 403, error: 'Lisensi ini telah dinonaktifkan. Hubungi admin.' };

    const now = Date.now();
    let expiresAt = lic.expires_at;

    if (!lic.activated_at) {
        if (!register) return { ok: false, status: 403, error: 'Lisensi belum diaktifkan.' };
        expiresAt = now + lic.duration_days * DAY_MS;
        await env.DB.prepare('UPDATE licenses SET activated_at = ?, expires_at = ? WHERE id = ?')
            .bind(now, expiresAt, lic.id).run();
    }

    if (now > expiresAt) {
        return { ok: false, status: 403, error: 'Masa aktif lisensi sudah habis.', expiresAt };
    }

    const device = await env.DB.prepare('SELECT 1 AS ok FROM devices WHERE license_id = ? AND device_id = ?')
        .bind(lic.id, deviceId).first();

    if (!device) {
        if (!register) return { ok: false, status: 403, error: 'Perangkat ini belum terdaftar untuk lisensi tersebut.' };
        const count = await env.DB.prepare('SELECT COUNT(*) AS n FROM devices WHERE license_id = ?').bind(lic.id).first();
        if (count.n >= lic.max_devices) {
            return {
                ok: false,
                status: 403,
                error: `Batas ${lic.max_devices} perangkat untuk lisensi ini sudah tercapai. Hubungi admin untuk reset.`
            };
        }
        await env.DB.prepare('INSERT INTO devices (license_id, device_id, first_seen) VALUES (?, ?, ?)')
            .bind(lic.id, deviceId, now).run();
    }

    return {
        ok: true,
        licenseId: lic.id,
        expiresAt,
        remainingDays: Math.max(0, Math.ceil((expiresAt - now) / DAY_MS))
    };
}

function bearerToken(request) {
    const h = request.headers.get('Authorization') || '';
    return h.toLowerCase().startsWith('bearer ') ? normalizeToken(h.slice(7)) : '';
}

function isAdmin(request, env) {
    const key = request.headers.get('X-Admin-Key') || '';
    return !!env.ADMIN_KEY && key.length > 0 && timingSafeEqual(key, env.ADMIN_KEY);
}

function isTeacherOrAdmin(request, env) {
    const key = (request.headers.get('X-Admin-Key') || '').trim();
    if (!key) return false;
    if (env.TEACHER_KEY && timingSafeEqual(key.toUpperCase(), String(env.TEACHER_KEY).trim().toUpperCase())) {
        return true;
    }
    return isAdmin(request, env);
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
            status         TEXT    NOT NULL DEFAULT 'in_progress'
        )
    `).run();
    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS listening_admin_attempts (
            ip_hash         TEXT    PRIMARY KEY,
            failed_attempts INTEGER NOT NULL DEFAULT 0,
            locked_until    INTEGER NOT NULL DEFAULT 0,
            last_attempt    INTEGER NOT NULL
        )
    `).run();
}

function normalizeListeningAnswer(raw) {
    if (typeof raw !== 'string') return '';
    return raw
        .toLowerCase()
        .replace(/['"“”’‘]/g, '')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

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

function verifyTeacherKey(submittedKey, env) {
    if (!submittedKey || !env.TEACHER_KEY) return false;
    return timingSafeEqual(submittedKey.toUpperCase(), String(env.TEACHER_KEY).trim().toUpperCase()) ||
           (env.ADMIN_KEY && timingSafeEqual(submittedKey, env.ADMIN_KEY));
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
            status           TEXT    NOT NULL DEFAULT 'in_progress'
        )
    `).run();
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

            // --- Siswa: aktivasi / cek lisensi ---
            if (path === '/activate' && request.method === 'POST') {
                const body = await readJson(request);
                const res = await authorize(env, normalizeToken(body.token), body.deviceId, true);
                if (!res.ok) return json(request, env, { ok: false, error: res.error }, res.status);
                return json(request, env, {
                    ok: true,
                    expiresAt: res.expiresAt,
                    remainingDays: res.remainingDays
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
                const ipRaw = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
                const ipHash = (await sha256Hex(ipRaw)).slice(0, 24);

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
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const currentSec = Math.max(1, Math.min(4, parseInt(body.currentSec, 10) || 1));
                const answers = body.answers && typeof body.answers === 'object' ? JSON.stringify(body.answers) : '{}';

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                await env.DB.prepare(`
                    UPDATE listening_sessions
                    SET current_sec = ?, answers_json = ?
                    WHERE id = ? AND status = 'in_progress'
                `).bind(currentSec, answers, sessionId).run();

                return json(request, env, { ok: true, serverTime: Date.now() });
            }

            // 3. Submit tes, penilaian server-side & hasil review
            if (path === '/listening/submit' && request.method === 'POST') {
                await ensureListeningSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const submittedAnswers = body.answers && typeof body.answers === 'object' ? body.answers : {};

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM listening_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
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
                            const studentAns = String(submittedAnswers[String(qNo)] || submittedAnswers[qNo] || '').trim();
                            const studentNorm = normalizeListeningAnswer(studentAns);
                            
                            const isCorrect = (q.answers || []).some(acc => {
                                return normalizeListeningAnswer(acc) === studentNorm;
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

                // Update database
                await env.DB.prepare(`
                    UPDATE listening_sessions
                    SET submitted_at = ?, answers_json = ?, raw_score = ?, band_score = ?, section_scores = ?, status = 'submitted'
                    WHERE id = ?
                `).bind(now, finalAnswersJson, rawScore, bandScore, sectionScoresJson, sessionId).run();

                return json(request, env, {
                    ok: true,
                    rawScore,
                    bandScore,
                    sectionScores,
                    questionReviews,
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
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const currentPassage = Math.max(1, Math.min(3, parseInt(body.currentPassage, 10) || 1));
                const answers = body.answers && typeof body.answers === 'object' ? JSON.stringify(body.answers) : '{}';

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                await env.DB.prepare(`
                    UPDATE reading_sessions
                    SET current_passage = ?, answers_json = ?
                    WHERE id = ? AND status = 'in_progress'
                `).bind(currentPassage, answers, sessionId).run();

                return json(request, env, { ok: true, serverTime: Date.now() });
            }

            // 3. Submit tes reading, penilaian server-side 40 soal & hasil review
            if (path === '/reading/submit' && request.method === 'POST') {
                await ensureReadingSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const submittedAnswers = body.answers && typeof body.answers === 'object' ? body.answers : {};

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM reading_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes reading tidak ditemukan.' }, 404);
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
                            const studentAns = String(submittedAnswers[String(qNo)] || submittedAnswers[qNo] || '').trim();
                            const studentNorm = normalizeListeningAnswer(studentAns);

                            const isCorrect = (q.answers || []).some(acc => {
                                return normalizeListeningAnswer(acc) === studentNorm;
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

                // Update database
                await env.DB.prepare(`
                    UPDATE reading_sessions
                    SET submitted_at = ?, answers_json = ?, raw_score = ?, band_score = ?, passage_scores = ?, type_scores = ?, status = 'submitted'
                    WHERE id = ?
                `).bind(now, finalAnswersJson, rawScore, bandScore, passageScoresJson, typeScoresJson, sessionId).run();

                return json(request, env, {
                    ok: true,
                    rawScore,
                    bandScore,
                    passageScores,
                    typeScores,
                    questionReviews,
                    submittedAt: now,
                    startedAt: session.started_at
                });
            }

            // 4. Rekap Guru Terpadu IELTS (Listening & Reading)
            if ((path === '/listening/admin/results' || path === '/reading/admin/results' || path === '/ielts/admin/results') && (request.method === 'GET' || request.method === 'POST')) {
                await ensureListeningSchema(env);
                await ensureReadingSchema(env);
                const ipRaw = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
                const ipHash = (await sha256Hex(ipRaw)).slice(0, 24);

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

                let lisQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, raw_score, band_score, section_scores FROM listening_sessions WHERE status = 'submitted'`;
                let readQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, raw_score, band_score, passage_scores, type_scores FROM reading_sessions WHERE status = 'submitted'`;
                const params = [];

                if (filterKelas) {
                    lisQuery += ` AND kelas = ?`;
                    readQuery += ` AND kelas = ?`;
                    params.push(filterKelas);
                }

                lisQuery += ` ORDER BY submitted_at DESC LIMIT 500`;
                readQuery += ` ORDER BY submitted_at DESC LIMIT 500`;

                const lisStmt = params.length > 0 ? env.DB.prepare(lisQuery).bind(...params) : env.DB.prepare(lisQuery);
                const readStmt = params.length > 0 ? env.DB.prepare(readQuery).bind(...params) : env.DB.prepare(readQuery);

                const [lisRes, readRes] = await Promise.all([lisStmt.all(), readStmt.all()]);

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
                        submitted_at: r.submitted_at
                    };
                    entry.last_submitted_at = Math.max(entry.last_submitted_at, r.submitted_at || 0);
                });

                // Hitung Overall Band per siswa (aturan IELTS: rata-rata sub-tes dibulatkan ke kelipatan 0.5 terdekat)
                const mergedStudents = Array.from(studentMap.values()).map(s => {
                    let overallBand = null;
                    if (s.listening && s.reading) {
                        const avg = (s.listening.band_score + s.reading.band_score) / 2;
                        // Pembulatan IELTS: fraksi .25 naik ke .5, fraksi .75 naik ke .0 berikutnya
                        overallBand = Math.round(avg * 2) / 2;
                    } else if (s.listening) {
                        overallBand = s.listening.band_score;
                    } else if (s.reading) {
                        overallBand = s.reading.band_score;
                    }
                    return {
                        ...s,
                        overall_band: overallBand
                    };
                });

                mergedStudents.sort((a, b) => (b.last_submitted_at || 0) - (a.last_submitted_at || 0));

                return json(request, env, {
                    ok: true,
                    total: mergedStudents.length,
                    results: mergedStudents,
                    raw_listening: lisRes.results || [],
                    raw_reading: readRes.results || []
                });
            }

            // --- Siswa: ambil soal premium ---
            const paketMatch = path.match(/^\/paket\/([a-z0-9_-]{1,60})$/);
            if (paketMatch && request.method === 'GET') {
                const res = await authorize(env, bearerToken(request), request.headers.get('X-Device-Id'), false);
                if (!res.ok) return json(request, env, { ok: false, error: res.error }, res.status);

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
                    const ipRaw = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
                    const ipHash = (await sha256Hex(ipRaw)).slice(0, 24);

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

            // --- Admin Lisensi SNBT (HANYA ADMIN_KEY UTAMA, TIDAK BISA DIAKSES KODE GURU) ---
            if (path.startsWith('/admin')) {
                if (!isAdmin(request, env)) return json(request, env, { ok: false, error: 'Tidak berwenang.' }, 401);

                if (path === '/admin/token' && request.method === 'POST') {
                    const body = await readJson(request);
                    const wa = String(body.wa || '').replace(/\D/g, '');
                    const nama = String(body.nama || '').trim().slice(0, 80);
                    const days = Math.min(365, Math.max(1, parseInt(body.days, 10) || 30));
                    const maxDevices = Math.min(5, Math.max(1, parseInt(body.maxDevices, 10) || 2));

                    const token = generateToken();
                    await env.DB.prepare(
                        'INSERT INTO licenses (token_hash, nama, wa, created_at, duration_days, max_devices) VALUES (?, ?, ?, ?, ?, ?)'
                    ).bind(await sha256Hex(token), nama, wa, Date.now(), days, maxDevices).run();

                    return json(request, env, { ok: true, token, days, maxDevices });
                }

                if (path === '/admin/list' && request.method === 'GET') {
                    const rows = await env.DB.prepare(
                        `SELECT l.id, l.nama, l.wa, l.created_at, l.activated_at, l.expires_at,
                                l.duration_days, l.max_devices, l.revoked,
                                (SELECT COUNT(*) FROM devices d WHERE d.license_id = l.id) AS devices
                         FROM licenses l ORDER BY l.id DESC LIMIT 500`
                    ).all();
                    return json(request, env, { ok: true, licenses: rows.results });
                }

                if (path === '/admin/revoke' && request.method === 'POST') {
                    const body = await readJson(request);
                    const id = parseInt(body.id, 10);
                    if (!id) return json(request, env, { ok: false, error: 'ID tidak valid.' }, 400);
                    await env.DB.prepare('UPDATE licenses SET revoked = 1 WHERE id = ?').bind(id).run();
                    return json(request, env, { ok: true });
                }

                if (path === '/admin/reset-devices' && request.method === 'POST') {
                    const body = await readJson(request);
                    const id = parseInt(body.id, 10);
                    if (!id) return json(request, env, { ok: false, error: 'ID tidak valid.' }, 400);
                    await env.DB.prepare('DELETE FROM devices WHERE license_id = ?').bind(id).run();
                    return json(request, env, { ok: true });
                }
            }

            return json(request, env, { ok: false, error: 'Endpoint tidak ditemukan.' }, 404);
        } catch (err) {
            return json(request, env, { ok: false, error: 'Terjadi kesalahan server.' }, 500);
        }
    }
};
