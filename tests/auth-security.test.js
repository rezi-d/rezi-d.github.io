import test from 'node:test';
import assert from 'node:assert/strict';

function timingSafeEqual(a, b) {
    const enc = new TextEncoder();
    const x = enc.encode(String(a));
    const y = enc.encode(String(b));
    if (x.length !== y.length) return false;
    let diff = 0;
    for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
    return diff === 0;
}

async function sha256Hex(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function verifyTeacherKey(submittedKey, env) {
    if (!submittedKey) return false;
    const key = String(submittedKey).trim();
    if (!key) return false;
    const teacherSecret = typeof env.TEACHER_KEY === 'string' ? env.TEACHER_KEY.trim() : '';
    // FAIL-CLOSED: jika TEACHER_KEY disetel di Worker Secret dan cocok
    if (teacherSecret && timingSafeEqual(key, teacherSecret)) {
        return true;
    }
    const adminSecret = typeof env.ADMIN_KEY === 'string' ? env.ADMIN_KEY.trim() : '';
    if (adminSecret && timingSafeEqual(key, adminSecret)) {
        return true;
    }

    if (env && env.DB) {
        try {
            const normKey = String(key || '').trim().toUpperCase();
            const hash = await sha256Hex(normKey);
            const lic = await env.DB.prepare('SELECT * FROM licenses WHERE token_hash = ?').bind(hash).first();
            if (lic && !lic.revoked) {
                const pkg = String(lic.package_type || '').toLowerCase();
                const isGuru = pkg === 'teacher' || pkg === 'guru' || pkg === 'all' || normKey.startsWith('GURU-') || normKey.startsWith('TEACH-');
                if (isGuru) {
                    const now = Date.now();
                    if (!lic.activated_at) {
                        const durDays = lic.duration_days || 365;
                        const expiresAt = now + durDays * 86400000;
                        await env.DB.prepare('UPDATE licenses SET activated_at = ?, expires_at = ? WHERE id = ?')
                            .bind(now, expiresAt, lic.id).run();
                        return true;
                    }
                    if (lic.expires_at && now > lic.expires_at) {
                        return false;
                    }
                    return true;
                }
            }
        } catch (e) {}
    }
    return false;
}

test('verifyTeacherKey: fail-closed jika env.TEACHER_KEY tidak ada (undefined)', async () => {
    const env = {};
    assert.equal(await verifyTeacherKey('GURU-KIMIA-2026', env), false);
    assert.equal(await verifyTeacherKey('ANY_KEY', env), false);
});

test('verifyTeacherKey: fail-closed jika env.TEACHER_KEY string kosong', async () => {
    const env = { TEACHER_KEY: '   ' };
    assert.equal(await verifyTeacherKey('ANY_KEY', env), false);
});

test('verifyTeacherKey: tolak kunci yang salah', async () => {
    const env = { TEACHER_KEY: 'TEACHER-SECURE-KEY-RANDOM-2026' };
    assert.equal(await verifyTeacherKey('GURU-KIMIA-2026', env), false);
    assert.equal(await verifyTeacherKey('wrong-key', env), false);
});

test('verifyTeacherKey: terima kunci yang cocok persis', async () => {
    const env = { TEACHER_KEY: 'TEACHER-SECURE-KEY-RANDOM-2026' };
    assert.equal(await verifyTeacherKey('TEACHER-SECURE-KEY-RANDOM-2026', env), true);
    assert.equal(await verifyTeacherKey('  TEACHER-SECURE-KEY-RANDOM-2026  ', env), true);
});

test('verifyTeacherKey: fallback ke ADMIN_KEY jika ada', async () => {
    const env = { TEACHER_KEY: 'TEACHER-SECURE-KEY', ADMIN_KEY: 'ADMIN-SUPER-SECRET' };
    assert.equal(await verifyTeacherKey('ADMIN-SUPER-SECRET', env), true);
    assert.equal(await verifyTeacherKey('TEACHER-SECURE-KEY', env), true);
    assert.equal(await verifyTeacherKey('INVALID', env), false);
});

test('verifyTeacherKey: verifikasi token khusus guru dari database D1', async () => {
    const teacherToken = 'GURU-ABCD-EFGH-JKLM';
    const hash = await sha256Hex(teacherToken);

    const mockDb = {
        licenses: [
            { id: 10, token_hash: hash, package_type: 'teacher', revoked: 0, activated_at: null, duration_days: 365, expires_at: null }
        ],
        prepare(sql) {
            return {
                bind: (...params) => ({
                    first: async () => {
                        return mockDb.licenses.find(l => l.token_hash === params[0]) || null;
                    },
                    run: async () => {
                        if (sql.includes('UPDATE licenses SET activated_at')) {
                            const lic = mockDb.licenses.find(l => l.id === params[2]);
                            if (lic) {
                                lic.activated_at = params[0];
                                lic.expires_at = params[1];
                            }
                        }
                        return { changes: 1 };
                    }
                })
            };
        }
    };

    const env = { DB: mockDb };

    // 1. Token valid & auto-aktivasi
    assert.equal(await verifyTeacherKey(teacherToken, env), true);
    assert.ok(mockDb.licenses[0].activated_at, 'Lisensi guru otomatis teraktivasi');

    // 2. Token dicabut / revoked -> tolak
    mockDb.licenses[0].revoked = 1;
    assert.equal(await verifyTeacherKey(teacherToken, env), false);

    // 3. Token kedaluwarsa -> tolak
    mockDb.licenses[0].revoked = 0;
    mockDb.licenses[0].expires_at = Date.now() - 1000;
    assert.equal(await verifyTeacherKey(teacherToken, env), false);
});

// ---------- Pengujian Pemisahan Kunci & Proteksi Admin (Step 1) ----------
function isAdmin(submittedKey, env) {
    if (!submittedKey || !env.ADMIN_KEY) return false;
    const key = String(submittedKey).trim();
    const adminSecret = typeof env.ADMIN_KEY === 'string' ? env.ADMIN_KEY.trim() : '';
    const teacherSecret = typeof env.TEACHER_KEY === 'string' ? env.TEACHER_KEY.trim() : '';
    // Mencegah guru menyamar sebagai admin jika TEACHER_KEY diserahkan di X-Admin-Key
    if (teacherSecret && timingSafeEqual(key, teacherSecret)) {
        return false;
    }
    return adminSecret.length > 0 && timingSafeEqual(key, adminSecret);
}

test('isAdmin: terima kunci admin yang cocok persis', () => {
    const env = { ADMIN_KEY: 'ADMIN-SUPER-SECRET-2026', TEACHER_KEY: 'TEACHER-SECRET-KEY' };
    assert.equal(isAdmin('ADMIN-SUPER-SECRET-2026', env), true);
    assert.equal(isAdmin('  ADMIN-SUPER-SECRET-2026  ', env), true);
});

test('isAdmin: tolak kunci guru (TEACHER_KEY) jika diserahkan ke endpoint admin', () => {
    const env = { ADMIN_KEY: 'ADMIN-SUPER-SECRET-2026', TEACHER_KEY: 'TEACHER-SECRET-KEY' };
    assert.equal(isAdmin('TEACHER-SECRET-KEY', env), false, 'Kunci guru tidak boleh memiliki akses ke endpoint admin');
});

test('isAdmin: fail-closed jika env.ADMIN_KEY tidak ada atau kosong', () => {
    assert.equal(isAdmin('ADMIN-KEY', {}), false);
    assert.equal(isAdmin('ADMIN-KEY', { ADMIN_KEY: '   ' }), false);
    assert.equal(isAdmin('WRONG-ADMIN-KEY', { ADMIN_KEY: 'REAL-KEY' }), false);
});

function validateAdminOrigin(originOrReferer) {
    if (!originOrReferer) return true; // non-browser/direct API call diizinkan lewat X-Admin-Key
    const s = String(originOrReferer).trim();
    if (s === 'null' || s.startsWith('file:')) return true; // Diizinkan untuk file panel lokal (file:///.../admin-lisensi.html)
    try {
        const u = new URL(s);
        const allowedHosts = ['kimia.ajarkita.my.id', 'rezi-d.github.io', 'localhost', '127.0.0.1'];
        return allowedHosts.includes(u.hostname);
    } catch {
        return false;
    }
}

test('Origin Restriction Admin: tolak origin asing dan terima origin resmi', () => {
    assert.equal(validateAdminOrigin('https://kimia.ajarkita.my.id/admin/panel'), true);
    assert.equal(validateAdminOrigin('https://rezi-d.github.io/'), true);
    assert.equal(validateAdminOrigin('http://localhost:3000'), true);
    assert.equal(validateAdminOrigin('null'), true, 'Origin null dari file lokal (file://) harus diizinkan');
    assert.equal(validateAdminOrigin('file:///D:/Project/web-pembelajaran-kimia/worker/admin-lisensi.html'), true);
    assert.equal(validateAdminOrigin('https://evil-attacker.com/steal'), false);
    assert.equal(validateAdminOrigin('https://phishing-ajarkita.net'), false);
    assert.equal(validateAdminOrigin('not-a-valid-url'), false);
});

test('Rate Limit Admin: kunci IP selama 30 menit setelah 5 kali gagal berturut-turut', () => {
    function calculateAdminLockout(currentFails, now) {
        const newFails = currentFails + 1;
        const lockUntil = newFails >= 5 ? now + (30 * 60 * 1000) : 0;
        return { newFails, locked: lockUntil > now, lockedUntil: lockUntil };
    }

    const t0 = 1700000000000;
    assert.equal(calculateAdminLockout(0, t0).locked, false);
    assert.equal(calculateAdminLockout(3, t0).locked, false);
    const lockedRes = calculateAdminLockout(4, t0); // 5th failure
    assert.equal(lockedRes.locked, true);
    assert.equal(lockedRes.lockedUntil, t0 + 1800000);
});
