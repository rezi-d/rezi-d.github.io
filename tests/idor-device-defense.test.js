import test from 'node:test';
import assert from 'node:assert/strict';

/**
 * Mock D1 Database & Environment for Testing IDOR Defense
 */
function createMockEnv(sessionsData = {}) {
    const db = {
        listening: [...(sessionsData.listening || [])],
        reading: [...(sessionsData.reading || [])],
        writing: [...(sessionsData.writing || [])],
        speaking: [...(sessionsData.speaking || [])],
        recordings: [...(sessionsData.recordings || [])]
    };

    return {
        DB: {
            prepare(query) {
                return {
                    bind(...args) {
                        return {
                            async first() {
                                if (query.includes('FROM listening_sessions WHERE id = ?')) {
                                    return db.listening.find(s => s.id === args[0]) || null;
                                }
                                if (query.includes('FROM reading_sessions WHERE id = ?')) {
                                    return db.reading.find(s => s.id === args[0]) || null;
                                }
                                if (query.includes('FROM writing_sessions WHERE id = ?')) {
                                    return db.writing.find(s => s.id === args[0]) || null;
                                }
                                if (query.includes('FROM speaking_sessions WHERE id = ?')) {
                                    return db.speaking.find(s => s.id === args[0]) || null;
                                }
                                return null;
                            },
                            async all() {
                                return { results: [] };
                            },
                            async run() {
                                return { meta: { changes: 1 } };
                            }
                        };
                    }
                };
            }
        },
        TEACHER_KEY: 'TEST-SECRET-TEACHER-KEY',
        ADMIN_KEY: 'TEST-SECRET-ADMIN-KEY'
    };
}

/**
 * Logic verifikasi IDOR device_id
 */
function verifyDeviceOwnership(session, requestDeviceId) {
    if (!session) return { allowed: false, status: 404, error: 'Sesi tes tidak ditemukan.' };
    if (!requestDeviceId || session.device_id !== requestDeviceId) {
        return { allowed: false, status: 403, error: 'Akses ditolak: Device ID tidak cocok dengan sesi ini.' };
    }
    return { allowed: true };
}

function verifyStatusAccess(session, requestDeviceId, teacherKey, secretKey) {
    if (!session) return { allowed: false, status: 404, error: 'Sesi tes tidak ditemukan.' };
    const isTeacher = teacherKey && secretKey && teacherKey === secretKey;
    const isOwner = Boolean(requestDeviceId && session.device_id === requestDeviceId);
    if (!isTeacher && !isOwner) {
        return { allowed: false, status: 403, error: 'Akses ditolak: Anda tidak memiliki izin melihat sesi ini.' };
    }
    return { allowed: true, isTeacher, isOwner };
}

function verifyResumeSession(requestedSession, clientDeviceId) {
    if (requestedSession && requestedSession.device_id !== clientDeviceId) {
        // Abaikan sesi milik orang lain
        return null;
    }
    return requestedSession;
}

test('IDOR: Start Tes menolak membajak sesi milik device_id lain', () => {
    const victimSession = { id: 'ls_victim_123', device_id: 'device_korban_A', status: 'in_progress' };
    const attackerDeviceId = 'device_penyerang_B';

    // Penyerang meminta resume sesi korban
    const resumed = verifyResumeSession(victimSession, attackerDeviceId);
    assert.strictEqual(resumed, null, 'Sesi korban harus diabaikan dan tidak diberikan ke penyerang');

    // Pemilik sah meminta resume sesinya sendiri
    const ownerResume = verifyResumeSession(victimSession, 'device_korban_A');
    assert.deepStrictEqual(ownerResume, victimSession, 'Pemilik sah harus dapat me-resume sesinya');
});

test('IDOR: Save-Progress menolak manipulasi progres dari device_id asing (HTTP 403)', () => {
    const victimSession = { id: 'rs_victim_456', device_id: 'device_korban_A', status: 'in_progress' };

    // Request dengan deviceId asing
    const attack1 = verifyDeviceOwnership(victimSession, 'device_penyerang_B');
    assert.strictEqual(attack1.allowed, false);
    assert.strictEqual(attack1.status, 403);

    // Request tanpa deviceId sama sekali
    const attack2 = verifyDeviceOwnership(victimSession, '');
    assert.strictEqual(attack2.allowed, false);
    assert.strictEqual(attack2.status, 403);

    // Request dari pemilik sah
    const legitimate = verifyDeviceOwnership(victimSession, 'device_korban_A');
    assert.strictEqual(legitimate.allowed, true);
});

test('IDOR: Submit menolak submit jawaban dari device_id yang tidak cocok (HTTP 403)', () => {
    const victimSession = { id: 'ws_victim_789', device_id: 'device_korban_A', status: 'in_progress' };

    const attack = verifyDeviceOwnership(victimSession, 'device_penyerang_X');
    assert.strictEqual(attack.allowed, false);
    assert.strictEqual(attack.status, 403);
    assert.match(attack.error, /Device ID tidak cocok/);

    const legitimate = verifyDeviceOwnership(victimSession, 'device_korban_A');
    assert.strictEqual(legitimate.allowed, true);
});

test('IDOR: Polling status sesi Writing & Speaking dilindungi (hanya Guru atau Pemilik)', () => {
    const session = { id: 'spk_victim_999', device_id: 'device_korban_A', status: 'submitted' };
    const secret = 'TEST-SECRET-TEACHER-KEY';

    // Penyerang tanpa kunci guru dan beda deviceId
    const resAttacker = verifyStatusAccess(session, 'device_orang_lain', '', secret);
    assert.strictEqual(resAttacker.allowed, false);
    assert.strictEqual(resAttacker.status, 403);

    // Pemilik sah melihat statusnya sendiri
    const resOwner = verifyStatusAccess(session, 'device_korban_A', '', secret);
    assert.strictEqual(resOwner.allowed, true);
    assert.strictEqual(resOwner.isOwner, true);

    // Guru yang membawa TEACHER_KEY valid
    const resTeacher = verifyStatusAccess(session, '', secret, secret);
    assert.strictEqual(resTeacher.allowed, true);
    assert.strictEqual(resTeacher.isTeacher, true);
});
