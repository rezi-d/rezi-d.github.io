import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker/src/index.js';
import { PACKAGES_CONFIG, isFreeMockTest } from '../worker/src/packages-config.js';

// Helper SHA-256
async function sha256Hex(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

// Mock Asset loader that provides mock JSON data
function createMockAssets() {
    return {
        async fetch(request) {
            const url = new URL(request.url);
            const p = url.pathname;
            if (p.includes('listening')) {
                return new Response(JSON.stringify({
                    test_id: 'test_mock',
                    duration_minutes: 40,
                    sections: [
                        { section_no: 1, groups: [{ questions: [{ no: 1, answers: ['answer1'] }] }] }
                    ],
                    transcripts: { s1: 'Transcript Section 1' }
                }), { status: 200, headers: { 'Content-Type': 'application/json' } });
            }
            if (p.includes('reading')) {
                return new Response(JSON.stringify({
                    test_id: 'reading_mock',
                    duration_minutes: 60,
                    passages: [
                        { passage_no: 1, groups: [{ type: 'multiple_choice', questions: [{ no: 1, answers: ['A'], evidence: 'Paragraph 1' }] }] }
                    ]
                }), { status: 200, headers: { 'Content-Type': 'application/json' } });
            }
            if (p.includes('writing')) {
                return new Response(JSON.stringify({
                    test_id: 'writing_mock',
                    duration_minutes: 60,
                    tasks: [
                        { task_no: 1, prompt: 'Task 1 Prompt', sample_answer: 'Sample Answer Task 1' },
                        { task_no: 2, prompt: 'Task 2 Prompt', sample_answer: 'Sample Answer Task 2' }
                    ]
                }), { status: 200, headers: { 'Content-Type': 'application/json' } });
            }
            if (p.includes('speaking')) {
                return new Response(JSON.stringify({
                    test_id: 'speaking_mock',
                    parts: [
                        { part_no: 1, questions: [{ id: 'p1_q1', question_text: 'Speaking Q1', sample_answer: 'Sample Ans' }] }
                    ]
                }), { status: 200, headers: { 'Content-Type': 'application/json' } });
            }
            return new Response('Not Found', { status: 404 });
        }
    };
}

// In-Memory Mock D1 Database
class MockD1Database {
    constructor() {
        this.licenses = [];
        this.devices = [];
        this.listeningSessions = [];
        this.readingSessions = [];
        this.writingSessions = [];
        this.speakingSessions = [];
    }

    prepare(query) {
        const q = query.trim().replace(/\s+/g, ' ');
        return {
            bind: (...params) => ({
                first: async () => {
                    if (q.startsWith('SELECT * FROM licenses WHERE token_hash = ?')) {
                        const hash = params[0];
                        return this.licenses.find(l => l.token_hash === hash) || null;
                    }
                    if (q.startsWith('SELECT 1 AS ok FROM devices WHERE license_id = ? AND device_id = ?')) {
                        const [licId, devId] = params;
                        const d = this.devices.find(x => x.license_id === licId && x.device_id === devId);
                        return d ? { ok: 1 } : null;
                    }
                    if (q.startsWith('SELECT COUNT(*) AS n FROM devices WHERE license_id = ?')) {
                        const licId = params[0];
                        const count = this.devices.filter(x => x.license_id === licId).length;
                        return { n: count };
                    }
                    if (q.includes('FROM listening_sessions WHERE id = ?')) {
                        return this.listeningSessions.find(s => s.id === params[0]) || null;
                    }
                    if (q.includes('FROM reading_sessions WHERE id = ?')) {
                        return this.readingSessions.find(s => s.id === params[0]) || null;
                    }
                    if (q.includes('FROM writing_sessions WHERE id = ?')) {
                        return this.writingSessions.find(s => s.id === params[0]) || null;
                    }
                    if (q.includes('FROM speaking_sessions WHERE id = ?')) {
                        return this.speakingSessions.find(s => s.id === params[0]) || null;
                    }
                    if (q.startsWith('SELECT test_id FROM speaking_sessions WHERE id = ?')) {
                        const s = this.speakingSessions.find(x => x.id === params[0]);
                        return s ? { test_id: s.test_id } : null;
                    }
                    if (q.includes('FROM listening_sessions WHERE test_id = ?')) {
                        const [tId, dId] = params;
                        return this.listeningSessions.find(s => s.test_id === tId && s.device_id === dId && s.status === 'in_progress') || null;
                    }
                    if (q.includes('FROM reading_sessions WHERE test_id = ?')) {
                        const [tId, dId] = params;
                        return this.readingSessions.find(s => s.test_id === tId && s.device_id === dId && s.status === 'in_progress') || null;
                    }
                    if (q.includes('FROM writing_sessions WHERE test_id = ?')) {
                        const [tId, dId] = params;
                        return this.writingSessions.find(s => s.test_id === tId && s.device_id === dId && s.status === 'in_progress') || null;
                    }
                    if (q.includes('FROM speaking_sessions WHERE test_id = ?')) {
                        const [tId, dId] = params;
                        return this.speakingSessions.find(s => s.test_id === tId && s.device_id === dId && s.status === 'in_progress') || null;
                    }
                    return null;
                },
                all: async () => ({ results: [] }),
                run: async () => {
                    if (q.startsWith('INSERT INTO devices')) {
                        const [licId, devId, seen] = params;
                        this.devices.push({ license_id: licId, device_id: devId, first_seen: seen });
                        return { changes: 1 };
                    }
                    if (q.startsWith('INSERT INTO listening_sessions')) {
                        const [id, test_id, device_id, nama_peserta, kelas, started_at] = params;
                        this.listeningSessions.push({ id, test_id, device_id, nama_peserta, kelas, started_at, status: 'in_progress' });
                        return { changes: 1 };
                    }
                    if (q.startsWith('INSERT INTO reading_sessions')) {
                        const [id, test_id, device_id, nama_peserta, kelas, started_at, duration_seconds] = params;
                        this.readingSessions.push({ id, test_id, device_id, nama_peserta, kelas, started_at, duration_seconds, status: 'in_progress' });
                        return { changes: 1 };
                    }
                    if (q.startsWith('INSERT INTO writing_sessions')) {
                        const [id, test_id, device_id, nama_peserta, kelas, started_at, duration_seconds] = params;
                        this.writingSessions.push({ id, test_id, device_id, nama_peserta, kelas, started_at, duration_seconds, status: 'in_progress' });
                        return { changes: 1 };
                    }
                    if (q.startsWith('INSERT INTO speaking_sessions')) {
                        const [id, test_id, device_id, nama_peserta, kelas, started_at] = params;
                        this.speakingSessions.push({ id, test_id, device_id, nama_peserta, kelas, started_at, status: 'in_progress' });
                        return { changes: 1 };
                    }
                    if (q.startsWith('UPDATE listening_sessions')) {
                        return { changes: 1, meta: { changes: 1 } };
                    }
                    if (q.startsWith('UPDATE reading_sessions')) {
                        return { changes: 1, meta: { changes: 1 } };
                    }
                    if (q.startsWith('UPDATE writing_sessions')) {
                        return { changes: 1, meta: { changes: 1 } };
                    }
                    if (q.startsWith('UPDATE speaking_sessions')) {
                        return { changes: 1, meta: { changes: 1 } };
                    }
                    return { changes: 1, meta: { changes: 1 } };
                }
            }),
            run: async () => ({ changes: 1, meta: { changes: 1 } })
        };
    }
}

// =====================================================================
// SUITE: MULTI-TEST ACCESS CONTROL (TAHAP 1)
// =====================================================================

test('Tahap 1: isFreeMockTest mengidentifikasi Mock 1 gratis dan Mock 2+ premium', () => {
    // Mock 1 aliases -> Harus GRATIS (true)
    assert.strictEqual(isFreeMockTest('test1'), true);
    assert.strictEqual(isFreeMockTest('1'), true);
    assert.strictEqual(isFreeMockTest('reading1'), true);
    assert.strictEqual(isFreeMockTest('writing1'), true);
    assert.strictEqual(isFreeMockTest('speaking1'), true);
    assert.strictEqual(isFreeMockTest('speaking_test1'), true);
    assert.strictEqual(isFreeMockTest(''), true);
    assert.strictEqual(isFreeMockTest(undefined), true);
    assert.strictEqual(isFreeMockTest(null), true);

    // Mock 2, Mock 3 dst. -> Harus PREMIUM (false)
    assert.strictEqual(isFreeMockTest('test2'), false);
    assert.strictEqual(isFreeMockTest('reading2'), false);
    assert.strictEqual(isFreeMockTest('writing2'), false);
    assert.strictEqual(isFreeMockTest('speaking2'), false);
    assert.strictEqual(isFreeMockTest('test3'), false);
    assert.strictEqual(isFreeMockTest('2'), false);
    assert.strictEqual(isFreeMockTest('unknown_premium'), false);
});

test('Tahap 1: Mock 1 (Gratis) tetap dapat diakses langsung tanpa token di ke-4 modul', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    // 1. Listening Mock 1
    const reqL = new Request('https://kimia.ajarkita.my.id/listening/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'test1', nama: 'Siswa Gratis', kelas: '12 MIPA 1', deviceId: 'dev_free_00000001' })
    });
    const resL = await worker.fetch(reqL, env);
    assert.strictEqual(resL.status, 200, 'Listening Mock 1 harus 200 OK');
    const jsonL = await resL.json();
    assert.strictEqual(jsonL.ok, true);
    assert.ok(jsonL.testData, 'Listening Mock 1 menyajikan testData');

    // 2. Reading Mock 1
    const reqR = new Request('https://kimia.ajarkita.my.id/reading/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'reading1', nama: 'Siswa Gratis', kelas: '12 MIPA 1', deviceId: 'dev_free_00000001' })
    });
    const resR = await worker.fetch(reqR, env);
    assert.strictEqual(resR.status, 200, 'Reading Mock 1 harus 200 OK');
    const jsonR = await resR.json();
    assert.strictEqual(jsonR.ok, true);
    assert.ok(jsonR.testData, 'Reading Mock 1 menyajikan testData');

    // 3. Writing Mock 1
    const reqW = new Request('https://kimia.ajarkita.my.id/writing/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'writing1', nama: 'Siswa Gratis', kelas: '12 MIPA 1', deviceId: 'dev_free_00000001' })
    });
    const resW = await worker.fetch(reqW, env);
    assert.strictEqual(resW.status, 200, 'Writing Mock 1 harus 200 OK');
    const jsonW = await resW.json();
    assert.strictEqual(jsonW.ok, true);
    assert.ok(jsonW.testData, 'Writing Mock 1 menyajikan testData');

    // 4. Speaking Mock 1
    const reqS = new Request('https://kimia.ajarkita.my.id/speaking/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'speaking1', nama: 'Siswa Gratis', kelas: '12 MIPA 1', deviceId: 'dev_free_00000001' })
    });
    const resS = await worker.fetch(reqS, env);
    assert.strictEqual(resS.status, 200, 'Speaking Mock 1 harus 200 OK');
    const jsonS = await resS.json();
    assert.strictEqual(jsonS.ok, true);
    assert.ok(jsonS.testData, 'Speaking Mock 1 menyajikan testData');
});

test('Tahap 1: Akses langsung Mock 2 tanpa token ditolak HTTP 401 dan tidak membocorkan soal/audio', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    // 1. Listening Mock 2 (tanpa token)
    const reqL = new Request('https://kimia.ajarkita.my.id/listening/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'test2', nama: 'Peserta Ilegal', kelas: '12 MIPA', deviceId: 'dev_unauth_000001' })
    });
    const resL = await worker.fetch(reqL, env);
    assert.strictEqual(resL.status, 401, 'Mock 2 Listening tanpa token harus HTTP 401');
    const jsonL = await resL.json();
    assert.strictEqual(jsonL.ok, false);
    assert.strictEqual(jsonL.reason, 'token_required');
    assert.strictEqual(jsonL.testData, undefined, 'Soal/audio tidak boleh dikirim tanpa token');

    // 2. Reading Mock 2 (tanpa token)
    const reqR = new Request('https://kimia.ajarkita.my.id/reading/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'reading2', nama: 'Peserta Ilegal', kelas: '12 MIPA', deviceId: 'dev_unauth_000001' })
    });
    const resR = await worker.fetch(reqR, env);
    assert.strictEqual(resR.status, 401, 'Mock 2 Reading tanpa token harus HTTP 401');
    const jsonR = await resR.json();
    assert.strictEqual(jsonR.ok, false);
    assert.strictEqual(jsonR.reason, 'token_required');
    assert.strictEqual(jsonR.testData, undefined, 'Passage/soal tidak boleh dikirim tanpa token');

    // 3. Writing Mock 2 (tanpa token)
    const reqW = new Request('https://kimia.ajarkita.my.id/writing/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'writing2', nama: 'Peserta Ilegal', kelas: '12 MIPA', deviceId: 'dev_unauth_000001' })
    });
    const resW = await worker.fetch(reqW, env);
    assert.strictEqual(resW.status, 401, 'Mock 2 Writing tanpa token harus HTTP 401');
    const jsonW = await resW.json();
    assert.strictEqual(jsonW.ok, false);
    assert.strictEqual(jsonW.reason, 'token_required');
    assert.strictEqual(jsonW.testData, undefined, 'Prompt writing/grafik tidak boleh dikirim tanpa token');

    // 4. Speaking Mock 2 (tanpa token)
    const reqS = new Request('https://kimia.ajarkita.my.id/speaking/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'speaking2', nama: 'Peserta Ilegal', kelas: '12 MIPA', deviceId: 'dev_unauth_000001' })
    });
    const resS = await worker.fetch(reqS, env);
    assert.strictEqual(resS.status, 401, 'Mock 2 Speaking tanpa token harus HTTP 401');
    const jsonS = await resS.json();
    assert.strictEqual(jsonS.ok, false);
    assert.strictEqual(jsonS.reason, 'token_required');
    assert.strictEqual(jsonS.testData, undefined, 'Pertanyaan speaking tidak boleh dikirim tanpa token');
});

test('Tahap 1: Submit kosong pada Mock 2 tanpa token ditolak (401/403) dan TIDAK mengembalikan kunci jawaban atau transkrip', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    // Sesi aktif Mock 2 di database
    db.listeningSessions.push({
        id: 'ls_mock2_sess_01',
        test_id: 'test2',
        device_id: 'dev_student_0001',
        status: 'in_progress',
        started_at: Date.now() - 5000
    });
    db.readingSessions.push({
        id: 'rs_mock2_sess_01',
        test_id: 'test2',
        device_id: 'dev_student_0001',
        status: 'in_progress',
        started_at: Date.now() - 5000
    });
    db.writingSessions.push({
        id: 'ws_mock2_sess_01',
        test_id: 'writing2',
        device_id: 'dev_student_0001',
        status: 'in_progress',
        started_at: Date.now() - 5000
    });
    db.speakingSessions.push({
        id: 'ss_mock2_sess_01',
        test_id: 'speaking2',
        device_id: 'dev_student_0001',
        status: 'in_progress',
        started_at: Date.now() - 5000
    });

    // 1. Submit kosong Listening Mock 2 tanpa token
    const reqL = new Request('https://kimia.ajarkita.my.id/listening/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id', 'X-Device-Id': 'dev_student_0001' },
        body: JSON.stringify({ sessionId: 'ls_mock2_sess_01', answers: {} })
    });
    const resL = await worker.fetch(reqL, env);
    assert.strictEqual(resL.status, 401, 'Submit Listening Mock 2 tanpa token harus 401');
    const jsonL = await resL.json();
    assert.strictEqual(jsonL.ok, false);
    assert.strictEqual(jsonL.correctAnswers, undefined, 'Kunci jawaban tidak boleh bocor!');
    assert.strictEqual(jsonL.questionReviews, undefined, 'Question reviews tidak boleh bocor!');
    assert.strictEqual(jsonL.transcripts, undefined, 'Transkrip audio tidak boleh bocor!');

    // 2. Submit kosong Reading Mock 2 tanpa token
    const reqR = new Request('https://kimia.ajarkita.my.id/reading/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id', 'X-Device-Id': 'dev_student_0001' },
        body: JSON.stringify({ sessionId: 'rs_mock2_sess_01', answers: {} })
    });
    const resR = await worker.fetch(reqR, env);
    assert.strictEqual(resR.status, 401, 'Submit Reading Mock 2 tanpa token harus 401');
    const jsonR = await resR.json();
    assert.strictEqual(jsonR.ok, false);
    assert.strictEqual(jsonR.questionReviews, undefined, 'Kunci jawaban/evidence Reading tidak boleh bocor!');

    // 3. Submit kosong Writing Mock 2 tanpa token
    const reqW = new Request('https://kimia.ajarkita.my.id/writing/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id', 'X-Device-Id': 'dev_student_0001' },
        body: JSON.stringify({ sessionId: 'ws_mock2_sess_01', task1Text: '', task2Text: '' })
    });
    const resW = await worker.fetch(reqW, env);
    assert.strictEqual(resW.status, 401, 'Submit Writing Mock 2 tanpa token harus 401');
    const jsonW = await resW.json();
    assert.strictEqual(jsonW.ok, false);
    assert.strictEqual(jsonW.sampleAnswers, undefined, 'Sample Answer Writing tidak boleh bocor!');

    // 4. Submit kosong Speaking Mock 2 tanpa token
    const reqS = new Request('https://kimia.ajarkita.my.id/speaking/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://kimia.ajarkita.my.id', 'X-Device-Id': 'dev_student_0001' },
        body: JSON.stringify({ sessionId: 'ss_mock2_sess_01', part2Notes: '' })
    });
    const resS = await worker.fetch(reqS, env);
    assert.strictEqual(resS.status, 401, 'Submit Speaking Mock 2 tanpa token harus 401');
    const jsonS = await resS.json();
    assert.strictEqual(jsonS.ok, false);
    assert.strictEqual(jsonS.sampleAnswers, undefined, 'Sample Answer Speaking tidak boleh bocor!');
});

test('Tahap 1: Mock 2 menolak token invalid, expired, revoked, atau paket yang salah (SNBT)', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    const tokenExpired = 'IELT-EXPD-0000-0001';
    const hashExpired = await sha256Hex(tokenExpired);
    db.licenses.push({
        id: 1,
        token_hash: hashExpired,
        package_type: 'ielts',
        revoked: 0,
        activated_at: Date.now() - 86400000 * 35,
        expires_at: Date.now() - 86400000 * 5 // expired 5 days ago
    });

    const tokenRevoked = 'IELT-REVK-0000-0002';
    const hashRevoked = await sha256Hex(tokenRevoked);
    db.licenses.push({
        id: 2,
        token_hash: hashRevoked,
        package_type: 'ielts',
        revoked: 1,
        activated_at: Date.now() - 86400000 * 5,
        expires_at: Date.now() + 86400000 * 25
    });

    const tokenSnbt = 'SNBT-ONLY-0000-0003';
    const hashSnbt = await sha256Hex(tokenSnbt);
    db.licenses.push({
        id: 3,
        token_hash: hashSnbt,
        package_type: 'snbt',
        revoked: 0,
        activated_at: Date.now() - 86400000 * 5,
        expires_at: Date.now() + 86400000 * 25
    });

    // 1. Token invalid (tidak terdaftar) -> HTTP 401
    const reqInvalid = new Request('https://kimia.ajarkita.my.id/listening/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer IELT-FAKE-0000-9999', 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'test2', nama: 'Test', kelas: '12', deviceId: 'dev_test_00000001' })
    });
    const resInvalid = await worker.fetch(reqInvalid, env);
    assert.strictEqual(resInvalid.status, 401);
    const jsonInvalid = await resInvalid.json();
    assert.strictEqual(jsonInvalid.reason, 'token_not_found');

    // 2. Token expired -> HTTP 403
    const reqExpired = new Request('https://kimia.ajarkita.my.id/reading/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokenExpired}`, 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'test2', nama: 'Test', kelas: '12', deviceId: 'dev_test_00000001' })
    });
    const resExpired = await worker.fetch(reqExpired, env);
    assert.strictEqual(resExpired.status, 403);
    const jsonExpired = await resExpired.json();
    assert.strictEqual(jsonExpired.reason, 'token_expired');

    // 3. Token revoked -> HTTP 403
    const reqRevoked = new Request('https://kimia.ajarkita.my.id/writing/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokenRevoked}`, 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'test2', nama: 'Test', kelas: '12', deviceId: 'dev_test_00000001' })
    });
    const resRevoked = await worker.fetch(reqRevoked, env);
    assert.strictEqual(resRevoked.status, 403);
    const jsonRevoked = await resRevoked.json();
    assert.strictEqual(jsonRevoked.reason, 'token_revoked');

    // 4. Token paket salah (SNBT) -> HTTP 403
    const reqSnbt = new Request('https://kimia.ajarkita.my.id/speaking/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokenSnbt}`, 'Origin': 'https://kimia.ajarkita.my.id' },
        body: JSON.stringify({ testId: 'test2', nama: 'Test', kelas: '12', deviceId: 'dev_test_00000001' })
    });
    const resSnbt = await worker.fetch(reqSnbt, env);
    assert.strictEqual(resSnbt.status, 403);
    const jsonSnbt = await resSnbt.json();
    assert.strictEqual(jsonSnbt.reason, 'wrong_package');
});

test('Tahap 1: Akses Mock 2 dengan token IELTS aktif dan valid berhasil (HTTP 200)', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    const validToken = 'IELT-VALD-1111-2222';
    const validHash = await sha256Hex(validToken);
    db.licenses.push({
        id: 10,
        token_hash: validHash,
        package_type: 'ielts',
        revoked: 0,
        activated_at: Date.now() - 86400000 * 2,
        expires_at: Date.now() + 86400000 * 28 // 28 hari lagi
    });

    const deviceId = 'dev_licensed_00001';

    // 1. Listening Mock 2 dengan token valid
    const reqL = new Request('https://kimia.ajarkita.my.id/listening/start', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${validToken}`,
            'Origin': 'https://kimia.ajarkita.my.id'
        },
        body: JSON.stringify({ testId: 'test2', nama: 'Siswa Berlisensi', kelas: '12 MIPA 1', deviceId })
    });
    const resL = await worker.fetch(reqL, env);
    assert.strictEqual(resL.status, 200, 'Mock 2 Listening dengan token valid harus 200 OK');
    const jsonL = await resL.json();
    assert.strictEqual(jsonL.ok, true);
    assert.ok(jsonL.testData, 'Menyajikan testData setelah verifikasi lisensi berhasil');

    // 2. Reading Mock 2 dengan token valid
    const reqR = new Request('https://kimia.ajarkita.my.id/reading/start', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${validToken}`,
            'Origin': 'https://kimia.ajarkita.my.id'
        },
        body: JSON.stringify({ testId: 'reading2', nama: 'Siswa Berlisensi', kelas: '12 MIPA 1', deviceId })
    });
    const resR = await worker.fetch(reqR, env);
    assert.strictEqual(resR.status, 200, 'Mock 2 Reading dengan token valid harus 200 OK');
    const jsonR = await resR.json();
    assert.strictEqual(jsonR.ok, true);

    // 3. Writing Mock 2 dengan token valid
    const reqW = new Request('https://kimia.ajarkita.my.id/writing/start', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${validToken}`,
            'Origin': 'https://kimia.ajarkita.my.id'
        },
        body: JSON.stringify({ testId: 'writing2', nama: 'Siswa Berlisensi', kelas: '12 MIPA 1', deviceId })
    });
    const resW = await worker.fetch(reqW, env);
    assert.strictEqual(resW.status, 200, 'Mock 2 Writing dengan token valid harus 200 OK');
    const jsonW = await resW.json();
    assert.strictEqual(jsonW.ok, true);

    // 4. Speaking Mock 2 dengan token valid
    const reqS = new Request('https://kimia.ajarkita.my.id/speaking/start', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${validToken}`,
            'Origin': 'https://kimia.ajarkita.my.id'
        },
        body: JSON.stringify({ testId: 'speaking2', nama: 'Siswa Berlisensi', kelas: '12 MIPA 1', deviceId })
    });
    const resS = await worker.fetch(reqS, env);
    assert.strictEqual(resS.status, 200, 'Mock 2 Speaking dengan token valid harus 200 OK');
    const jsonS = await resS.json();
    assert.strictEqual(jsonS.ok, true);
});

test('Tahap 1 Syarat 1: save-progress, status, detail, upload, dan audio pada Mock 2 tanpa token ditolak HTTP 401', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    const devId = 'dev_participant_01';

    // Buat sesi Mock 2 di tiap modul
    db.listeningSessions.push({ id: 'ls_m2_01', test_id: 'test2', device_id: devId, status: 'in_progress' });
    db.readingSessions.push({ id: 'rs_m2_01', test_id: 'test2', device_id: devId, status: 'in_progress' });
    db.writingSessions.push({ id: 'ws_m2_01', test_id: 'writing2', device_id: devId, status: 'in_progress' });
    db.speakingSessions.push({ id: 'spk_m2_01', test_id: 'speaking2', device_id: devId, status: 'in_progress', package_type: 'teacher' });

    // 1. Listening save-progress tanpa token -> 401
    const resL = await worker.fetch(new Request('https://kimia.ajarkita.my.id/listening/save-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Device-Id': devId },
        body: JSON.stringify({ sessionId: 'ls_m2_01', currentSec: 2, answers: { q1: 'A' } })
    }), env);
    assert.strictEqual(resL.status, 401, 'Listening save-progress Mock 2 tanpa token wajib 401');

    // 2. Reading save-progress tanpa token -> 401
    const resR = await worker.fetch(new Request('https://kimia.ajarkita.my.id/reading/save-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Device-Id': devId },
        body: JSON.stringify({ sessionId: 'rs_m2_01', currentPassage: 2, answers: { q1: 'TRUE' } })
    }), env);
    assert.strictEqual(resR.status, 401, 'Reading save-progress Mock 2 tanpa token wajib 401');

    // 3. Writing save-progress tanpa token -> 401
    const resW = await worker.fetch(new Request('https://kimia.ajarkita.my.id/writing/save-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Device-Id': devId },
        body: JSON.stringify({ sessionId: 'ws_m2_01', task1Text: 'Sample text...', currentTask: 1 })
    }), env);
    assert.strictEqual(resW.status, 401, 'Writing save-progress Mock 2 tanpa token wajib 401');

    // 4. Writing status polling oleh siswa tanpa token -> 401
    const resWStat = await worker.fetch(new Request('https://kimia.ajarkita.my.id/writing/status?sessionId=ws_m2_01&deviceId=dev_participant_01', {
        method: 'GET',
        headers: { 'X-Device-Id': devId }
    }), env);
    assert.strictEqual(resWStat.status, 401, 'Writing status Mock 2 tanpa token wajib 401');

    // 5. Speaking upload-recording tanpa token -> 401
    const dummyAudioBase64 = Buffer.from(new Uint8Array(200)).toString('base64');
    const resSUpload = await worker.fetch(new Request('https://kimia.ajarkita.my.id/speaking/upload-recording', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Device-Id': devId },
        body: JSON.stringify({ sessionId: 'spk_m2_01', questionId: 'q1', audioData: dummyAudioBase64, mimeType: 'audio/webm' })
    }), env);
    assert.strictEqual(resSUpload.status, 401, 'Speaking upload-recording Mock 2 tanpa token wajib 401');

    // 6. Speaking status tanpa token -> 401
    const resSStat = await worker.fetch(new Request('https://kimia.ajarkita.my.id/speaking/status?sessionId=spk_m2_01&deviceId=dev_participant_01', {
        method: 'GET',
        headers: { 'X-Device-Id': devId }
    }), env);
    assert.strictEqual(resSStat.status, 401, 'Speaking status Mock 2 tanpa token wajib 401');

    // 7. Speaking detail tanpa token -> 401
    const resSDetail = await worker.fetch(new Request('https://kimia.ajarkita.my.id/speaking/detail?sessionId=spk_m2_01&deviceId=dev_participant_01', {
        method: 'GET',
        headers: { 'X-Device-Id': devId }
    }), env);
    assert.strictEqual(resSDetail.status, 401, 'Speaking detail Mock 2 tanpa token wajib 401');

    // 8. Speaking audio streaming tanpa token -> 401
    const resSAudio = await worker.fetch(new Request('https://kimia.ajarkita.my.id/speaking/audio?sessionId=spk_m2_01&questionId=q1&deviceId=dev_participant_01', {
        method: 'GET',
        headers: { 'X-Device-Id': devId }
    }), env);
    assert.strictEqual(resSAudio.status, 401, 'Speaking audio Mock 2 tanpa token wajib 401');
});

test('Tahap 1 Syarat 2: Akses langsung via URL ke berkas aset internal/master/JSON/MP3 ditolak HTTP 403', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    // Uji percobaan akses langsung ke file master JSON
    const pathsToTest = [
        '/listening/test2-master.json',
        '/reading/reading2-master.json',
        '/writing/writing2-master.json',
        '/speaking/speaking2-master.json',
        '/premium/test2.json',
        '/premium/audio/sample.mp3'
    ];

    for (const p of pathsToTest) {
        const req = new Request(`https://kimia.ajarkita.my.id${p}`, {
            method: 'GET',
            headers: { 'Origin': 'https://kimia.ajarkita.my.id' }
        });
        const res = await worker.fetch(req, env);
        assert.strictEqual(res.status, 403, `Akses langsung ke ${p} harus ditolak HTTP 403`);
        const json = await res.json();
        assert.strictEqual(json.ok, false);
        assert.strictEqual(json.reason, 'direct_asset_access_forbidden');
    }
});

test('Tahap 1 Syarat 3: Lisensi non-IELTS (SNBT), expired, revoked, dan invalid ditolak spesifik saat akses Mock 2', async () => {
    const db = new MockD1Database();
    const assets = createMockAssets();
    const env = { DB: db, ASSETS: assets, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' };

    const devId = 'dev_tester_package_01';

    // 1. Lisensi Paket SNBT (Bukan IELTS)
    const snbtToken = 'SNBT-TRIAL-1234-5678';
    db.licenses.push({
        id: 101,
        token_hash: await sha256Hex(snbtToken),
        package_type: 'snbt',
        revoked: 0,
        activated_at: Date.now() - 1000,
        expires_at: Date.now() + 86400000 * 30
    });

    const resSnbt = await worker.fetch(new Request('https://kimia.ajarkita.my.id/reading/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${snbtToken}` },
        body: JSON.stringify({ testId: 'test2', nama: 'Siswa SNBT', kelas: '12', deviceId: devId })
    }), env);
    assert.strictEqual(resSnbt.status, 403, 'Lisensi SNBT harus ditolak HTTP 403 untuk tes IELTS Mock 2');
    const jsonSnbt = await resSnbt.json();
    assert.strictEqual(jsonSnbt.reason, 'wrong_package');

    // 2. Lisensi IELTS Kedaluwarsa
    const expToken = 'IELT-EXPD-9999-0000';
    db.licenses.push({
        id: 102,
        token_hash: await sha256Hex(expToken),
        package_type: 'ielts',
        revoked: 0,
        activated_at: Date.now() - 86400000 * 40,
        expires_at: Date.now() - 86400000 * 10 // sudah kedaluwarsa 10 hari lalu
    });

    const resExp = await worker.fetch(new Request('https://kimia.ajarkita.my.id/listening/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${expToken}` },
        body: JSON.stringify({ testId: 'test2', nama: 'Siswa Expired', kelas: '12', deviceId: devId })
    }), env);
    assert.strictEqual(resExp.status, 403, 'Lisensi IELTS kedaluwarsa harus ditolak HTTP 403');
    const jsonExp = await resExp.json();
    assert.strictEqual(jsonExp.reason, 'token_expired');

    // 3. Lisensi IELTS Dicabut (Revoked)
    const revToken = 'IELT-REVK-8888-7777';
    db.licenses.push({
        id: 103,
        token_hash: await sha256Hex(revToken),
        package_type: 'ielts',
        revoked: 1, // DICABUT
        activated_at: Date.now() - 86400000 * 5,
        expires_at: Date.now() + 86400000 * 25
    });

    const resRev = await worker.fetch(new Request('https://kimia.ajarkita.my.id/writing/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${revToken}` },
        body: JSON.stringify({ testId: 'writing2', nama: 'Siswa Revoked', kelas: '12', deviceId: devId })
    }), env);
    assert.strictEqual(resRev.status, 403, 'Lisensi IELTS dicabut harus ditolak HTTP 403');
    const jsonRev = await resRev.json();
    assert.strictEqual(jsonRev.reason, 'token_revoked');
});
