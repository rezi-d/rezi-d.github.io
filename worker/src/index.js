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
