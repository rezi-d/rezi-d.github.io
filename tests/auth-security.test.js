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
