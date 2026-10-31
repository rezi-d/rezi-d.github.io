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
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Device-Id, X-Admin-Key',
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
