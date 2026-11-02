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
    const key = (request.headers.get('X-Admin-Key') || request.headers.get('X-Teacher-Key') || '').trim();
    if (!key) return false;
    const teacherSecret = typeof env.TEACHER_KEY === 'string' ? env.TEACHER_KEY.trim() : '';
    // FAIL-CLOSED: jika TEACHER_KEY belum disetel di Worker Secret, akses guru ditolak
    if (teacherSecret && timingSafeEqual(key, teacherSecret)) {
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
            writing_band         REAL    DEFAULT NULL
        )
    `).run();
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
        disclaimer: "Pengecekan di atas adalah audit kelayakan struktural teknis otomatis dan TIDAK menilai kualitas argumen, koherensi ide, maupun ketepatan tata bahasa. Penilaian resmi dilakukan oleh guru."
    };
}

async function generateAudioToken(sessionId, questionId, secret, ttlSeconds = 600) {
    const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
    const payload = `${sessionId}:${questionId}:${exp}`;
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

async function verifyAudioToken(sessionId, questionId, tokenStr, secret) {
    if (!tokenStr || !secret) return false;
    const parts = tokenStr.split('.');
    if (parts.length !== 2) return false;
    const exp = parseInt(parts[0], 10);
    const sigHex = parts[1];
    if (isNaN(exp) || Math.floor(Date.now() / 1000) > exp) return false;

    const payload = `${sessionId}:${questionId}:${exp}`;
    const enc = new TextEncoder();
    try {
        const key = await crypto.subtle.importKey(
            'raw',
            enc.encode(secret),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['verify']
        );
        const match = sigHex.match(/.{1,2}/g);
        if (!match) return false;
        const expectedSig = new Uint8Array(match.map(byte => parseInt(byte, 16)));
        return await crypto.subtle.verify('HMAC', key, expectedSig, enc.encode(payload));
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
            graded_at            INTEGER DEFAULT NULL,
            teacher_name         TEXT    DEFAULT NULL,
            criteria_scores      TEXT    DEFAULT '{}',
            teacher_comment      TEXT    DEFAULT '',
            speaking_band        REAL    DEFAULT NULL
        )
    `).run();

    await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS speaking_recordings (
            id                   TEXT    PRIMARY KEY,
            session_id           TEXT    NOT NULL,
            question_id          TEXT    NOT NULL,
            mime_type            TEXT    NOT NULL,
            audio_data           TEXT    NOT NULL,
            transcript           TEXT    DEFAULT '',
            duration_seconds     REAL    DEFAULT 0,
            file_size_bytes      INTEGER DEFAULT 0,
            uploaded_at          INTEGER NOT NULL,
            FOREIGN KEY (session_id) REFERENCES speaking_sessions(id) ON DELETE CASCADE
        )
    `).run();
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
                                const accNorm = normalizeListeningAnswer(acc);
                                return studentArr.some(ans => normalizeListeningAnswer(ans) === accNorm);
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

                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE listening_sessions
                    SET submitted_at = ?, answers_json = ?, raw_score = ?, band_score = ?, section_scores = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, finalAnswersJson, rawScore, bandScore, sectionScoresJson, sessionId).run();

                if (!updateRes.meta || updateRes.meta.changes === 0) {
                    return json(request, env, { ok: false, error: 'Sesi tes listening ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

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
                                const accNorm = normalizeListeningAnswer(acc);
                                return studentArr.some(ans => normalizeListeningAnswer(ans) === accNorm);
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

                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE reading_sessions
                    SET submitted_at = ?, answers_json = ?, raw_score = ?, band_score = ?, passage_scores = ?, type_scores = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, finalAnswersJson, rawScore, bandScore, passageScoresJson, typeScoresJson, sessionId).run();

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
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const currentTask = Math.max(1, Math.min(2, parseInt(body.currentTask, 10) || 1));
                const task1Text = String(body.task1Text || '');
                const task2Text = String(body.task2Text || '');

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
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
                    task2WordCount: t2Words
                });
            }

            // 3. Submit tes writing (generate structural check, buka sample answer, status = submitted)
            if (path === '/writing/submit' && request.method === 'POST') {
                await ensureWritingSchema(env);
                const body = await readJson(request);
                const sessionId = String(body.sessionId || '').trim();
                const task1Text = String(body.task1Text || '');
                const task2Text = String(body.task2Text || '');

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM writing_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes writing tidak ditemukan.' }, 404);
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

                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE writing_sessions
                    SET submitted_at = ?, task1_text = ?, task2_text = ?, task1_word_count = ?, task2_word_count = ?, structural_check = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, task1Text, task2Text, t1Words, t2Words, JSON.stringify(structuralCheck), sessionId).run();

                if (!updateRes.meta || updateRes.meta.changes === 0) {
                    return json(request, env, { ok: false, error: 'Sesi tes writing ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                return json(request, env, {
                    ok: true,
                    submittedAt: now,
                    startedAt: session.started_at,
                    task1WordCount: t1Words,
                    task2WordCount: t2Words,
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
                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak diberikan.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM writing_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
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
                const ipRaw = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
                const ipHash = (await sha256Hex(ipRaw)).slice(0, 24);

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
                await env.DB.prepare(`
                    INSERT INTO speaking_sessions (id, test_id, device_id, nama_peserta, kelas, started_at, status)
                    VALUES (?, ?, ?, ?, ?, ?, 'in_progress')
                `).bind(newSessionId, testId, deviceId, nama, kelas, now).run();

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
            if (path === '/speaking/upload-recording' && request.method === 'POST') {
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

                // Batas ukuran maksimal 1,2 MB binary (~1.677.722 karakter base64)
                if (audioData.length > 1677722) {
                    return json(request, env, { ok: false, error: 'Ukuran rekaman audio melebihi batas 1,2 MB.' }, 413);
                }

                const session = await env.DB.prepare('SELECT id, device_id, status FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking tidak ditemukan.' }, 404);
                }
                if (session.status !== 'in_progress') {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking ini sudah diselesaikan.' }, 400);
                }
                if (requestDeviceId && session.device_id !== requestDeviceId) {
                    return json(request, env, { ok: false, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' }, 403);
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
                const fileSizeBytes = Math.round((audioData.length * 3) / 4);
                const now = Date.now();

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
                `).bind(recId, sessionId, questionId, baseMime, audioData, transcript, durationSeconds, fileSizeBytes, now).run();

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
                const part2Notes = String(body.part2Notes || '').slice(0, 5000);

                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak valid.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking tidak ditemukan.' }, 404);
                }
                if (session.status !== 'in_progress') {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                const assetRes = await env.ASSETS.fetch(new Request(new URL(`/speaking/${session.test_id}-master.json`, url.origin)));
                const master = assetRes.ok ? await assetRes.json() : null;

                const now = Date.now();
                // Update database atomik
                const updateRes = await env.DB.prepare(`
                    UPDATE speaking_sessions
                    SET submitted_at = ?, part2_notes = ?, status = 'submitted'
                    WHERE id = ? AND status = 'in_progress'
                `).bind(now, part2Notes, sessionId).run();

                if (!updateRes.meta || updateRes.meta.changes === 0) {
                    return json(request, env, { ok: false, error: 'Sesi tes speaking ini sudah pernah disubmit atau telah dinilai.' }, 409);
                }

                return json(request, env, {
                    ok: true,
                    submittedAt: now,
                    startedAt: session.started_at,
                    sampleAnswers: master ? filterSampleAnswers(master) : null
                });
            }

            // 4. Status tes speaking (untuk polling / pengecekan)
            if (path === '/speaking/status' && request.method === 'GET') {
                await ensureSpeakingSchema(env);
                const sessionId = String(url.searchParams.get('sessionId') || '').trim();
                if (!sessionId) {
                    return json(request, env, { ok: false, error: 'Session ID tidak diberikan.' }, 400);
                }

                const session = await env.DB.prepare('SELECT * FROM speaking_sessions WHERE id = ?').bind(sessionId).first();
                if (!session) {
                    return json(request, env, { ok: false, error: 'Sesi tes tidak ditemukan.' }, 404);
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
                    SELECT question_id, mime_type, transcript, duration_seconds, file_size_bytes, uploaded_at
                    FROM speaking_recordings
                    WHERE session_id = ?
                    ORDER BY question_id ASC
                `).bind(sessionId).all();

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
                    recordings: recRows.results || []
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

                const token = await generateAudioToken(sessionId, questionId, env.TEACHER_KEY || env.ADMIN_KEY || 'FALLBACK_KEY', 600);
                return json(request, env, { ok: true, token, expiresIn: 600 });
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
                let isTokenValid = false;
                const secret = env.TEACHER_KEY || env.ADMIN_KEY;
                if (audioToken && secret) {
                    isTokenValid = await verifyAudioToken(sessionId, questionId, audioToken, secret);
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
                    SELECT mime_type, audio_data FROM speaking_recordings
                    WHERE session_id = ? AND question_id = ?
                `).bind(sessionId, questionId).first();

                if (!rec || !rec.audio_data) {
                    return json(request, env, { ok: false, error: 'Rekaman audio untuk pertanyaan ini tidak ditemukan.' }, 404);
                }

                const binaryString = atob(rec.audio_data);
                const totalLen = binaryString.length;
                const bytes = new Uint8Array(totalLen);
                for (let i = 0; i < totalLen; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
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
                            'Cache-Control': 'private, no-store',
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
                        'Cache-Control': 'private, no-store',
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

                const mode = String(body.mode || 'session');
                let deletedCount = 0;

                if (mode === 'session') {
                    const sessionId = String(body.sessionId || '').trim();
                    if (!sessionId) return json(request, env, { ok: false, error: 'sessionId wajib ada.' }, 400);
                    await env.DB.prepare('DELETE FROM speaking_recordings WHERE session_id = ?').bind(sessionId).run();
                    const delSess = await env.DB.prepare('DELETE FROM speaking_sessions WHERE id = ?').bind(sessionId).run();
                    deletedCount = delSess.meta?.changes || 1;
                } else if (mode === 'student') {
                    const nama = String(body.nama || '').trim();
                    const kelas = String(body.kelas || '').trim();
                    if (!nama || !kelas) return json(request, env, { ok: false, error: 'nama dan kelas wajib ada.' }, 400);
                    const sessions = await env.DB.prepare('SELECT id FROM speaking_sessions WHERE nama_peserta = ? AND kelas = ?').bind(nama, kelas).all();
                    for (const s of (sessions.results || [])) {
                        await env.DB.prepare('DELETE FROM speaking_recordings WHERE session_id = ?').bind(s.id).run();
                        await env.DB.prepare('DELETE FROM speaking_sessions WHERE id = ?').bind(s.id).run();
                        deletedCount++;
                    }
                } else if (mode === 'retention') {
                    const retentionDays = Math.max(1, parseInt(body.days, 10) || 30);
                    const cutoffMs = Date.now() - (retentionDays * 24 * 60 * 60 * 1000);
                    const delRec = await env.DB.prepare('DELETE FROM speaking_recordings WHERE uploaded_at < ?').bind(cutoffMs).run();
                    deletedCount = delRec.meta?.changes || 0;
                } else {
                    return json(request, env, { ok: false, error: 'Mode pembersihan tidak valid. Pilihan: session, student, retention.' }, 400);
                }

                return json(request, env, { ok: true, mode, deletedCount });
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
                let writeQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, current_task, task1_text, task2_text, task1_word_count, task2_word_count, status, graded_at, task1_criteria, task2_criteria, task1_comment, task2_comment, writing_band FROM writing_sessions WHERE status IN ('submitted', 'graded')`;
                let spkQuery = `SELECT id, test_id, nama_peserta, kelas, started_at, submitted_at, part2_notes, status, graded_at, teacher_name, criteria_scores, teacher_comment, speaking_band FROM speaking_sessions WHERE status IN ('submitted', 'graded')`;
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

                const [lisRes, readRes, writeRes, spkRes] = await Promise.all([lisStmt.all(), readStmt.all(), writeStmt.all(), spkStmt.all()]);

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
                    entry.speaking = {
                        id: s.id,
                        test_id: s.test_id,
                        status: s.status,
                        part2_notes: s.part2_notes,
                        criteria_scores: JSON.parse(s.criteria_scores || '{}'),
                        teacher_name: s.teacher_name,
                        teacher_comment: s.teacher_comment || '',
                        speaking_band: s.speaking_band,
                        submitted_at: s.submitted_at,
                        graded_at: s.graded_at
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
                    raw_listening: lisRes.results || [],
                    raw_reading: readRes.results || [],
                    raw_writing: writeRes.results || [],
                    raw_speaking: spkRes.results || []
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
