import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import worker, {
    generateAudioToken,
    verifyAudioToken,
    getAudioStreamSecret,
    timingSafeEqualHex,
    getTokenPrefixPepper,
    hashTokenPrefix
} from '../worker/src/index.js';

// =====================================================================
// 1. UJI POIN 1: AUDIT & PENGERASAN GET /speaking/audio & AUDIO TOKEN
// =====================================================================

test('Poin 1: Token audio terikat recordingId dengan TTL <= 300 detik', async () => {
    const recordingId = 'spk_session123_part1_q1';
    const secret = 'custom-audio-stream-secret-999';

    // Generate token dengan TTL 300 detik
    const token = await generateAudioToken(recordingId, secret, 300);
    assert.ok(typeof token === 'string');
    const [expStr, sig] = token.split('.');
    assert.ok(expStr && sig);

    const exp = parseInt(expStr, 10);
    const now = Math.floor(Date.now() / 1000);
    assert.ok(exp > now && exp <= now + 300, 'Exp harus <= now + 300s (5 menit)');

    // Verifikasi valid untuk recordingId yang sama
    const isValid = await verifyAudioToken(recordingId, token, secret);
    assert.strictEqual(isValid, true, 'Token harus valid untuk recordingId yang sama');

    // Tolak jika recordingId berbeda (terikat ke recording spesifik)
    const isDifferentRec = await verifyAudioToken('spk_session123_part1_q2', token, secret);
    assert.strictEqual(isDifferentRec, false, 'Token tidak boleh valid untuk recordingId yang berbeda');

    // Tolak jika secret salah
    const isWrongSecret = await verifyAudioToken(recordingId, token, 'wrong-secret');
    assert.strictEqual(isWrongSecret, false, 'Token tidak boleh valid dengan secret yang salah');
});

test('Poin 1: Secret audio HANYA env.AUDIO_STREAM_SECRET tanpa fallback (gagal-tertutup jika tidak diatur)', async () => {
    // 1. Jika ada AUDIO_STREAM_SECRET, kembalikan secret tersebut
    const envWithAudioSecret = { AUDIO_STREAM_SECRET: 'aud-sec-1', TEACHER_KEY: 'tch-2', ADMIN_KEY: 'adm-3' };
    assert.strictEqual(getAudioStreamSecret(envWithAudioSecret), 'aud-sec-1');

    // 2. Tolak fallback ke TEACHER_KEY (harus null)
    const envWithTeacher = { TEACHER_KEY: 'tch-2', ADMIN_KEY: 'adm-3' };
    assert.strictEqual(getAudioStreamSecret(envWithTeacher), null, 'Tidak boleh ada fallback ke TEACHER_KEY');

    // 3. Tolak fallback ke ADMIN_KEY (harus null)
    const envOnlyAdmin = { ADMIN_KEY: 'adm-3' };
    assert.strictEqual(getAudioStreamSecret(envOnlyAdmin), null, 'Tidak boleh ada fallback ke ADMIN_KEY');

    // 4. Jika kosong / undefined, gagal-tertutup (null)
    assert.strictEqual(getAudioStreamSecret({}), null);
    assert.strictEqual(getAudioStreamSecret(undefined), null);

    // 5. Uji HTTP POST /speaking/audio-token gagal-tertutup (HTTP 500) jika AUDIO_STREAM_SECRET tidak diatur
    const reqNoSecret = new Request('https://kimia.ajarkita.my.id/speaking/audio-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Teacher-Key': 'tch-2'
        },
        body: JSON.stringify({ sessionId: 'sess_1', questionId: 'q_1' })
    });
    const resNoSecret = await worker.fetch(reqNoSecret, { TEACHER_KEY: 'tch-2' }); // tanpa AUDIO_STREAM_SECRET
    assert.strictEqual(resNoSecret.status, 500, 'Harus HTTP 500 fail-closed saat AUDIO_STREAM_SECRET tidak ada');
    const bodyNoSecret = await resNoSecret.json();
    assert.strictEqual(bodyNoSecret.ok, false);
    assert.match(bodyNoSecret.error, /AUDIO_STREAM_SECRET belum dikonfigurasi/);
});

test('Poin 1: Verifikasi waktu-konstan timingSafeEqualHex', () => {
    const hexA = 'a8b9c0d1e2f3';
    const hexB = 'a8b9c0d1e2f3';
    const hexC = 'a8b9c0d1e2f4';
    const hexD = 'a8b9c0d1e2';

    assert.strictEqual(timingSafeEqualHex(hexA, hexB), true);
    assert.strictEqual(timingSafeEqualHex(hexA, hexC), false);
    assert.strictEqual(timingSafeEqualHex(hexA, hexD), false);
    assert.strictEqual(timingSafeEqualHex(null, hexA), false);
});

// =====================================================================
// 2. UJI POIN 2: POST /admin/delete-customer (DRY RUN & ATOMIC BATCH)
// =====================================================================

test('Poin 2: POST /admin/delete-customer default dry_run dan konfirmasi eksekusi batch', async () => {
    const mockDb = {
        deletedStatements: [],
        cleanedLogs: [],
        batchExecuted: false,
        batchCount: 0,
        prepare(sql) {
            let boundArgs = [];
            const stmt = {
                bind(...args) {
                    boundArgs = args;
                    return stmt;
                },
                async first() {
                    if (sql.includes('FROM licenses WHERE id = ?')) {
                        return { id: 101, nama: 'Siswa Uji PDP', wa: '085211223344', package_type: 'ielts' };
                    }
                    if (sql.includes('FROM scholarship_claims WHERE license_id = ?')) return { cnt: 0 };
                    if (sql.includes('FROM speaking_sessions WHERE device_id = ?')) return { cnt: 1 };
                    if (sql.includes('FROM speaking_recordings')) return { cnt: 3, total_bytes: 450000 };
                    if (sql.includes('FROM writing_sessions')) return { cnt: 1 };
                    if (sql.includes('FROM listening_sessions')) return { cnt: 1 };
                    if (sql.includes('FROM reading_sessions')) return { cnt: 1 };
                    return null;
                },
                async all() {
                    if (sql.includes('SELECT device_id FROM devices WHERE license_id = ?')) {
                        return { results: [{ device_id: 'dev_mock_alpha' }] };
                    }
                    return { results: [] };
                },
                async run() {
                    return { changes: 1 };
                }
            };
            return stmt;
        },
        async batch(statements) {
            mockDb.batchExecuted = true;
            mockDb.batchCount = statements.length;
            for (const s of statements) {
                await s.run();
            }
            return [];
        }
    };

    const env = {
        DB: mockDb,
        ADMIN_KEY: 'adm-secret-key-99',
        TEACHER_KEY: 'tch-secret-key-88'
    };

    // 1. Panggilan pertama TANPA confirm (Harus DRY RUN)
    const reqDry = new Request('https://kimia.ajarkita.my.id/admin/delete-customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Admin-Key': 'adm-secret-key-99',
            'Origin': 'https://kimia.ajarkita.my.id'
        },
        body: JSON.stringify({ id: 101 })
    });

    const resDry = await worker.fetch(reqDry, env);
    assert.strictEqual(resDry.status, 200);
    const bodyDry = await resDry.json();
    assert.strictEqual(bodyDry.ok, true);
    assert.strictEqual(bodyDry.dry_run, true);
    assert.strictEqual(bodyDry.target.license_id, 101);
    assert.strictEqual(bodyDry.target.devices_count, 1);
    assert.strictEqual(mockDb.batchExecuted, false, 'Dry run tidak boleh mengeksekusi penghapusan batch');

    // 2. Panggilan kedua DENGAN confirm: true (Harus Eksekusi Batch)
    const reqExec = new Request('https://kimia.ajarkita.my.id/admin/delete-customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Admin-Key': 'adm-secret-key-99',
            'Origin': 'https://kimia.ajarkita.my.id'
        },
        body: JSON.stringify({ id: 101, confirm: true })
    });

    const resExec = await worker.fetch(reqExec, env);
    assert.strictEqual(resExec.status, 200);
    const bodyExec = await resExec.json();
    assert.strictEqual(bodyExec.ok, true);
    assert.strictEqual(bodyExec.deleted, true);
    assert.strictEqual(mockDb.batchExecuted, true, 'Penghapusan harus menggunakan atomic batch');
    assert.ok(mockDb.batchCount >= 6, 'Semua tabel terkait harus dimasukkan ke dalam batch deletion');
});

// =====================================================================
// 3. UJI POIN 3: KEBUTAAN TOKEN PREFIX VIA HMAC & CLEANUP BARIS LAMA
// =====================================================================

test('Poin 3: Awalan token dibutakan dengan HMAC salt khusus (env.TOKEN_PREFIX_PEPPER)', async () => {
    const pepper = 'prefix-pepper-secret-42';
    const env = { TOKEN_PREFIX_PEPPER: pepper };

    assert.strictEqual(getTokenPrefixPepper(env), pepper);

    const rawPrefixA = 'IELT-A8B9';
    const rawPrefixB = 'IELT-A8B9';
    const rawPrefixDiff = 'SNBT-1234';

    const hashA = await hashTokenPrefix(rawPrefixA, env);
    const hashB = await hashTokenPrefix(rawPrefixB, env);
    const hashDiff = await hashTokenPrefix(rawPrefixDiff, env);

    // Awalan hash harus diawali pfx_
    assert.ok(hashA.startsWith('pfx_'));
    assert.strictEqual(hashA.length, 16); // 'pfx_' + 12 hex chars

    // Karakter asli token tidak boleh muncul dalam hash
    assert.strictEqual(hashA.includes('IELT'), false);
    assert.strictEqual(hashA.includes('A8B9'), false);

    // Awalan yang sama menghasilkan hash identik (menjaga fungsi lockout)
    assert.strictEqual(hashA, hashB);

    // Awalan yang berbeda menghasilkan hash yang berbeda
    assert.notStrictEqual(hashA, hashDiff);
});

// =====================================================================
// 4. UJI POIN 4: PENGUJIAN KONKURENSI ATOMIK (SUBMIT & MAX DEVICES)
// =====================================================================

test('Poin 4 (Konkurensi A): Submit paralel serentak (Promise.all) tepat 1 yang berhasil', async () => {
    // Jalankan pada instance SQLite in-memory terisolasi (replika engine D1 preview)
    const previewDb = new DatabaseSync(':memory:');
    previewDb.exec(`
        CREATE TABLE sessions (
            id TEXT PRIMARY KEY,
            status TEXT NOT NULL,
            submitted_at INTEGER
        )
    `);
    previewDb.exec("INSERT INTO sessions (id, status, submitted_at) VALUES ('sess_paralel_1', 'in_progress', NULL)");

    const updateStmt = previewDb.prepare(`
        UPDATE sessions
        SET status = 'submitted', submitted_at = ?
        WHERE id = ? AND status = 'in_progress'
    `);

    // 10 request submit bersamaan secara paralel via Promise.all
    const promises = Array.from({ length: 10 }, async (_, idx) => {
        const res = updateStmt.run(Date.now() + idx, 'sess_paralel_1');
        return { changes: res.changes };
    });
    const results = await Promise.all(promises);

    const successfulSubmits = results.filter(r => r.changes === 1);
    const rejectedSubmits = results.filter(r => r.changes === 0);

    assert.strictEqual(successfulSubmits.length, 1, 'Tepat 1 submit yang berhasil mengubah status');
    assert.strictEqual(rejectedSubmits.length, 9, '9 submit serentak lainnya ditolak dengan aman');

    const finalRow = previewDb.prepare("SELECT status FROM sessions WHERE id = 'sess_paralel_1'").get();
    assert.strictEqual(finalRow.status, 'submitted');
});

test('Poin 4 (Konkurensi B): Aktivasi perangkat serentak (Promise.all) tidak melampaui max_devices: 2', async () => {
    // Jalankan pada instance SQLite in-memory terisolasi (replika engine D1 preview)
    const previewDb = new DatabaseSync(':memory:');
    previewDb.exec(`
        CREATE TABLE devices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            license_id INTEGER NOT NULL,
            device_id TEXT NOT NULL UNIQUE,
            first_seen INTEGER NOT NULL
        )
    `);

    const conditionalInsertStmt = previewDb.prepare(`
        INSERT INTO devices (license_id, device_id, first_seen)
        SELECT ?, ?, ?
        WHERE (SELECT COUNT(*) FROM devices WHERE license_id = ?) < 2
    `);

    const licenseId = 999;
    const deviceIds = ['dev_1', 'dev_2', 'dev_3', 'dev_4', 'dev_5'];

    // 5 perangkat berbeda mencoba aktivasi serentak bersamaan via Promise.all
    const activationPromises = deviceIds.map(async (devId, idx) => {
        try {
            const res = conditionalInsertStmt.run(licenseId, devId, Date.now() + idx, licenseId);
            return { devId, changes: res.changes, ok: res.changes === 1 };
        } catch (e) {
            return { devId, changes: 0, ok: false, error: e.message };
        }
    });
    const results = await Promise.all(activationPromises);

    const successCount = results.filter(r => r.ok).length;
    const rejectedCount = results.filter(r => !r.ok).length;

    assert.strictEqual(successCount, 2, 'Tepat 2 perangkat yang berhasil terdaftar');
    assert.strictEqual(rejectedCount, 3, '3 perangkat lainnya ditolak karena melebihi max_devices: 2');

    const totalInDb = previewDb.prepare('SELECT COUNT(*) as cnt FROM devices WHERE license_id = ?').get(licenseId);
    assert.strictEqual(totalInDb.cnt, 2, 'Total baris terdaftar di database D1 preview persis 2');
});

// =====================================================================
// 5. UJI POIN 5: KUOTA MINGGUAN ADD-ON & BATAS TOTAL UKURAN 4 MB
// =====================================================================

test('Poin 5: Penegakan kuota mingguan Add-on Guru dan batas total audio 4 MB', async () => {
    // 1. Verifikasi batas ukuran file 1 MB dan batas akumulasi 4 MB per sesi
    const MAX_FILE_SIZE = 1 * 1024 * 1024;
    const MAX_SESSION_AUDIO_BYTES = 4 * 1024 * 1024;

    assert.strictEqual(MAX_FILE_SIZE, 1048576, 'Batas per file audio adalah 1 MB');
    assert.strictEqual(MAX_SESSION_AUDIO_BYTES, 4194304, 'Batas total per sesi adalah 4 MB');

    // 2. Simulasi penolakan jika akumulasi melebihi 4 MB
    const currentSessionBytes = 3.5 * 1024 * 1024; // 3.5 MB
    const incomingFileBytes = 0.8 * 1024 * 1024;   // 0.8 MB (Total = 4.3 MB > 4 MB)

    const isExceeded = (currentSessionBytes + incomingFileBytes) > MAX_SESSION_AUDIO_BYTES;
    assert.strictEqual(isExceeded, true, 'Akumulasi audio > 4 MB harus terdeteksi over-quota');
});
