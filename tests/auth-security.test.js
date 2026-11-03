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

test('verifyTeacherKey: fail-closed jika env.TEACHER_KEY tidak ada (undefined)', () => {
    const env = {};
    assert.equal(verifyTeacherKey('GURU-KIMIA-2026', env), false);
    assert.equal(verifyTeacherKey('ANY_KEY', env), false);
});

test('verifyTeacherKey: fail-closed jika env.TEACHER_KEY string kosong', () => {
    const env = { TEACHER_KEY: '   ' };
    assert.equal(verifyTeacherKey('ANY_KEY', env), false);
});

test('verifyTeacherKey: tolak kunci yang salah', () => {
    const env = { TEACHER_KEY: 'TEACHER-SECURE-KEY-RANDOM-2026' };
    assert.equal(verifyTeacherKey('GURU-KIMIA-2026', env), false);
    assert.equal(verifyTeacherKey('wrong-key', env), false);
});

test('verifyTeacherKey: terima kunci yang cocok persis', () => {
    const env = { TEACHER_KEY: 'TEACHER-SECURE-KEY-RANDOM-2026' };
    assert.equal(verifyTeacherKey('TEACHER-SECURE-KEY-RANDOM-2026', env), true);
    assert.equal(verifyTeacherKey('  TEACHER-SECURE-KEY-RANDOM-2026  ', env), true);
});

test('verifyTeacherKey: fallback ke ADMIN_KEY jika ada', () => {
    const env = { TEACHER_KEY: 'TEACHER-SECURE-KEY', ADMIN_KEY: 'ADMIN-SUPER-SECRET' };
    assert.equal(verifyTeacherKey('ADMIN-SUPER-SECRET', env), true);
    assert.equal(verifyTeacherKey('TEACHER-SECURE-KEY', env), true);
    assert.equal(verifyTeacherKey('INVALID', env), false);
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
    try {
        const u = new URL(originOrReferer);
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
