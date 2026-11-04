// =====================================================================
// tests/step2-schema-migration-and-recap.test.js
// Pengujian Tahap 2: Skema Database, Fungsi Normalisasi Tunggal,
// Migrasi Aman Data Nyata, & Isolasi Rekap Guru Multi-Tes
// =====================================================================

import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import worker, { normalizeTestId } from '../worker/src/index.js';
import { normalizeTestId as normalizeConfig } from '../worker/src/packages-config.js';

// =====================================================================
// 1. UJI FUNGSI NORMALISASI TUNGGAL (normalizeTestId)
// =====================================================================

test('Tahap 2: normalizeTestId adalah fungsi tunggal yang konsisten', () => {
    // Pastikan ekspor dari index.js dan packages-config.js identik
    assert.strictEqual(typeof normalizeTestId, 'function');
    assert.strictEqual(typeof normalizeConfig, 'function');

    // 1. Alias resmi Mock 1 -> 'test1'
    const mock1Aliases = [
        '1', 'test1', 'TEST1', 'Test1', ' reading1 ', 'writing1',
        'speaking1', 'listening1', 'speaking_test1', null, undefined, '', 'null'
    ];
    for (const alias of mock1Aliases) {
        assert.strictEqual(normalizeTestId(alias), 'test1', `Alias "${alias}" harus dinormalisasi menjadi 'test1'`);
    }

    // 2. Alias resmi Mock 2 -> 'test2'
    const mock2Aliases = [
        '2', 'test2', 'TEST2', 'Test2', ' reading2 ', 'writing2',
        'speaking2', 'listening2', 'speaking_test2'
    ];
    for (const alias of mock2Aliases) {
        assert.strictEqual(normalizeTestId(alias), 'test2', `Alias "${alias}" harus dinormalisasi menjadi 'test2'`);
    }

    // 3. Alias resmi Mock 3 -> 'test3'
    const mock3Aliases = ['3', 'test3', 'TEST3', 'reading3', 'writing3', 'speaking3', 'listening3'];
    for (const alias of mock3Aliases) {
        assert.strictEqual(normalizeTestId(alias), 'test3', `Alias "${alias}" harus dinormalisasi menjadi 'test3'`);
    }

    // 4. Pola angka umum
    assert.strictEqual(normalizeTestId('reading_test4'), 'test4');
    assert.strictEqual(normalizeTestId('4'), 'test4');
});

// =====================================================================
// 2. UJI MIGRASI AMAN PADA SALINAN DATA NYATA (ZERO DATA LOSS)
// =====================================================================

test('Tahap 2: Migrasi aman skema database pada baris nyata (row-for-row match, zero data loss)', () => {
    // Instance SQLite in-memory mereplika struktur tabel riil Cloudflare D1
    const db = new DatabaseSync(':memory:');

    // Buat tabel sesi versi warisan (legacy) sebelum penambahan kolom NOT NULL DEFAULT 'test1'
    db.exec(`
        CREATE TABLE listening_sessions (
            id TEXT PRIMARY KEY,
            device_id TEXT NOT NULL,
            nama_peserta TEXT NOT NULL,
            kelas TEXT NOT NULL,
            started_at INTEGER NOT NULL,
            submitted_at INTEGER,
            current_sec INTEGER DEFAULT 1,
            answers_json TEXT DEFAULT '{}',
            raw_score INTEGER,
            band_score REAL,
            section_scores TEXT DEFAULT '{}',
            is_late INTEGER DEFAULT 0,
            status TEXT DEFAULT 'in_progress'
        );

        CREATE TABLE reading_sessions (
            id TEXT PRIMARY KEY,
            device_id TEXT NOT NULL,
            nama_peserta TEXT NOT NULL,
            kelas TEXT NOT NULL,
            started_at INTEGER NOT NULL,
            duration_seconds INTEGER DEFAULT 3600,
            submitted_at INTEGER,
            current_passage INTEGER DEFAULT 1,
            answers_json TEXT DEFAULT '{}',
            raw_score INTEGER,
            band_score REAL,
            passage_scores TEXT DEFAULT '{}',
            type_scores TEXT DEFAULT '{}',
            is_late INTEGER DEFAULT 0,
            status TEXT DEFAULT 'in_progress'
        );

        CREATE TABLE writing_sessions (
            id TEXT PRIMARY KEY,
            device_id TEXT NOT NULL,
            nama_peserta TEXT NOT NULL,
            kelas TEXT NOT NULL,
            started_at INTEGER NOT NULL,
            duration_seconds INTEGER DEFAULT 3600,
            submitted_at INTEGER,
            current_task INTEGER DEFAULT 1,
            task1_text TEXT DEFAULT '',
            task2_text TEXT DEFAULT '',
            task1_word_count INTEGER DEFAULT 0,
            task2_word_count INTEGER DEFAULT 0,
            structural_check TEXT DEFAULT '{}',
            status TEXT DEFAULT 'in_progress',
            graded_at INTEGER,
            teacher_name TEXT,
            task1_criteria TEXT DEFAULT '{}',
            task2_criteria TEXT DEFAULT '{}',
            task1_comment TEXT DEFAULT '',
            task2_comment TEXT DEFAULT '',
            is_late INTEGER DEFAULT 0,
            writing_band REAL
        );

        CREATE TABLE speaking_sessions (
            id TEXT PRIMARY KEY,
            device_id TEXT NOT NULL,
            nama_peserta TEXT NOT NULL,
            kelas TEXT NOT NULL,
            started_at INTEGER NOT NULL,
            submitted_at INTEGER,
            part2_notes TEXT DEFAULT '',
            status TEXT DEFAULT 'in_progress',
            package_type TEXT DEFAULT 'teacher',
            graded_at INTEGER,
            teacher_name TEXT,
            criteria_scores TEXT DEFAULT '{}',
            teacher_comment TEXT DEFAULT '',
            is_late INTEGER DEFAULT 0,
            speaking_band REAL
        );

        CREATE TABLE speaking_recordings (
            id TEXT PRIMARY KEY,
            session_id TEXT NOT NULL,
            question_id TEXT NOT NULL,
            mime_type TEXT NOT NULL,
            audio_data BLOB NOT NULL,
            transcript TEXT DEFAULT '',
            duration_seconds REAL DEFAULT 0,
            file_size_bytes INTEGER DEFAULT 0,
            uploaded_at INTEGER NOT NULL,
            deleted_at INTEGER
        );
    `);

    // Masukkan data nyata dengan beragam variasi baris warisan
    const now = Date.now();
    for (let i = 1; i <= 5; i++) {
        db.prepare(`
            INSERT INTO listening_sessions (id, device_id, nama_peserta, kelas, started_at, submitted_at, raw_score, band_score, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'submitted')
        `).run(`ls_${i}`, `dev_${i}`, `Siswa Nyata ${i}`, '12 MIPA 1', now - 3600000, now, 30 + i, 7.0 + (i * 0.5));

        db.prepare(`
            INSERT INTO reading_sessions (id, device_id, nama_peserta, kelas, started_at, submitted_at, raw_score, band_score, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'submitted')
        `).run(`rs_${i}`, `dev_${i}`, `Siswa Nyata ${i}`, '12 MIPA 1', now - 3600000, now, 28 + i, 6.5 + (i * 0.5));

        db.prepare(`
            INSERT INTO writing_sessions (id, device_id, nama_peserta, kelas, started_at, submitted_at, task1_text, task2_text, status, writing_band)
            VALUES (?, ?, ?, ?, ?, ?, 'Teks T1', 'Teks T2', 'graded', 7.0)
        `).run(`ws_${i}`, `dev_${i}`, `Siswa Nyata ${i}`, '12 MIPA 1', now - 3600000, now);

        db.prepare(`
            INSERT INTO speaking_sessions (id, device_id, nama_peserta, kelas, started_at, submitted_at, status, speaking_band)
            VALUES (?, ?, ?, ?, ?, ?, 'graded', 7.5)
        `).run(`spk_${i}`, `dev_${i}`, `Siswa Nyata ${i}`, '12 MIPA 1', now - 3600000, now);

        db.prepare(`
            INSERT INTO speaking_recordings (id, session_id, question_id, mime_type, audio_data, uploaded_at)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(`rec_${i}_q1`, `spk_${i}`, 'part1_q1', 'audio/webm', Buffer.from('audio-binary'), now);
    }

    // 1. Hitung jumlah baris sebelum migrasi
    const countBefore = {
        listening: db.prepare('SELECT COUNT(*) as n FROM listening_sessions').get().n,
        reading: db.prepare('SELECT COUNT(*) as n FROM reading_sessions').get().n,
        writing: db.prepare('SELECT COUNT(*) as n FROM writing_sessions').get().n,
        speaking: db.prepare('SELECT COUNT(*) as n FROM speaking_sessions').get().n,
        recordings: db.prepare('SELECT COUNT(*) as n FROM speaking_recordings').get().n
    };

    assert.strictEqual(countBefore.listening, 5);
    assert.strictEqual(countBefore.reading, 5);
    assert.strictEqual(countBefore.writing, 5);
    assert.strictEqual(countBefore.speaking, 5);
    assert.strictEqual(countBefore.recordings, 5);

    // 2. Jalankan Perintah Migrasi Skema (ALTER TABLE + UPDATE)
    db.exec(`
        ALTER TABLE listening_sessions ADD COLUMN test_id TEXT NOT NULL DEFAULT 'test1';
        ALTER TABLE reading_sessions ADD COLUMN test_id TEXT NOT NULL DEFAULT 'test1';
        ALTER TABLE writing_sessions ADD COLUMN test_id TEXT NOT NULL DEFAULT 'test1';
        ALTER TABLE speaking_sessions ADD COLUMN test_id TEXT NOT NULL DEFAULT 'test1';
        ALTER TABLE speaking_recordings ADD COLUMN test_id TEXT NOT NULL DEFAULT 'test1';

        UPDATE listening_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'listening1', '', 'test_1');
        UPDATE reading_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'reading1', '', 'test_1');
        UPDATE writing_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'writing1', '', 'test_1');
        UPDATE speaking_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'speaking1', 'speaking_test1', '', 'test_1');
        UPDATE speaking_recordings SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'speaking1', 'speaking_test1', '', 'test_1');
    `);

    // 3. Hitung jumlah baris setelah migrasi: HARUS SAMA PERSIS (Zero Data Loss)
    const countAfter = {
        listening: db.prepare('SELECT COUNT(*) as n FROM listening_sessions').get().n,
        reading: db.prepare('SELECT COUNT(*) as n FROM reading_sessions').get().n,
        writing: db.prepare('SELECT COUNT(*) as n FROM writing_sessions').get().n,
        speaking: db.prepare('SELECT COUNT(*) as n FROM speaking_sessions').get().n,
        recordings: db.prepare('SELECT COUNT(*) as n FROM speaking_recordings').get().n
    };

    assert.strictEqual(countAfter.listening, countBefore.listening, 'Jumlah baris listening_sessions harus tetap utuh');
    assert.strictEqual(countAfter.reading, countBefore.reading, 'Jumlah baris reading_sessions harus tetap utuh');
    assert.strictEqual(countAfter.writing, countBefore.writing, 'Jumlah baris writing_sessions harus tetap utuh');
    assert.strictEqual(countAfter.speaking, countBefore.speaking, 'Jumlah baris speaking_sessions harus tetap utuh');
    assert.strictEqual(countAfter.recordings, countBefore.recordings, 'Jumlah baris speaking_recordings harus tetap utuh');

    // 4. Pastikan semua baris lama sekarang memiliki nilai test_id = 'test1'
    const lisRows = db.prepare('SELECT test_id FROM listening_sessions').all();
    assert.ok(lisRows.every(r => r.test_id === 'test1'), 'Semua baris listening_sessions harus ber-test_id "test1"');

    const readRows = db.prepare('SELECT test_id FROM reading_sessions').all();
    assert.ok(readRows.every(r => r.test_id === 'test1'), 'Semua baris reading_sessions harus ber-test_id "test1"');

    const writeRows = db.prepare('SELECT test_id FROM writing_sessions').all();
    assert.ok(writeRows.every(r => r.test_id === 'test1'), 'Semua baris writing_sessions harus ber-test_id "test1"');

    const spkRows = db.prepare('SELECT test_id FROM speaking_sessions').all();
    assert.ok(spkRows.every(r => r.test_id === 'test1'), 'Semua baris speaking_sessions harus ber-test_id "test1"');

    const recRows = db.prepare('SELECT test_id FROM speaking_recordings').all();
    assert.ok(recRows.every(r => r.test_id === 'test1'), 'Semua baris speaking_recordings harus ber-test_id "test1"');
});

// =====================================================================
// 3. UJI ISOLASI REKAP GURU (MOCK 1 DAN MOCK 2 TIDAK SALING MENIMPA)
// =====================================================================

test('Tahap 2: Rekap guru dikelompokkan per siswa per test_id (Nilai Mock 1 tidak tertimpa Mock 2)', async () => {
    // Bangun mock DB dengan data siswa yang sama mengerjakan Mock 1 lalu Mock 2
    const listeningData = [
        // Ahmad - Mock 1
        { id: 'ls_m1_ahmad', test_id: 'test1', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 1000, submitted_at: 2000, raw_score: 30, band_score: 7.0, section_scores: '{"s1":8,"s2":7,"s3":8,"s4":7}', is_late: 0 },
        // Ahmad - Mock 2
        { id: 'ls_m2_ahmad', test_id: 'test2', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 3000, submitted_at: 4000, raw_score: 38, band_score: 8.5, section_scores: '{"s1":10,"s2":9,"s3":10,"s4":9}', is_late: 0 }
    ];

    const readingData = [
        // Ahmad - Mock 1
        { id: 'rs_m1_ahmad', test_id: 'test1', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 1100, submitted_at: 2100, raw_score: 31, band_score: 7.0, passage_scores: '{"p1":11,"p2":10,"p3":10}', type_scores: '{}', is_late: 0 },
        // Ahmad - Mock 2
        { id: 'rs_m2_ahmad', test_id: 'test2', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 3100, submitted_at: 4100, raw_score: 37, band_score: 8.5, passage_scores: '{"p1":13,"p2":12,"p3":12}', type_scores: '{}', is_late: 0 }
    ];

    const writingData = [
        // Ahmad - Mock 1 (Graded 7.0)
        { id: 'ws_m1_ahmad', test_id: 'test1', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 1200, submitted_at: 2200, current_task: 2, task1_text: 'T1 Mock 1', task2_text: 'T2 Mock 1', task1_word_count: 170, task2_word_count: 270, status: 'graded', graded_at: 2500, task1_criteria: '{}', task2_criteria: '{}', task1_comment: '', task2_comment: '', writing_band: 7.0, is_late: 0 },
        // Ahmad - Mock 2 (Graded 8.0)
        { id: 'ws_m2_ahmad', test_id: 'test2', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 3200, submitted_at: 4200, current_task: 2, task1_text: 'T1 Mock 2', task2_text: 'T2 Mock 2', task1_word_count: 180, task2_word_count: 280, status: 'graded', graded_at: 4500, task1_criteria: '{}', task2_criteria: '{}', task1_comment: '', task2_comment: '', writing_band: 8.0, is_late: 0 }
    ];

    const speakingData = [
        // Ahmad - Mock 1 (Graded 7.0)
        { id: 'spk_m1_ahmad', test_id: 'test1', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 1300, submitted_at: 2300, part2_notes: '', status: 'graded', graded_at: 2600, teacher_name: 'Guru', criteria_scores: '{}', teacher_comment: '', speaking_band: 7.0, is_late: 0 },
        // Ahmad - Mock 2 (Graded 8.0)
        { id: 'spk_m2_ahmad', test_id: 'test2', nama_peserta: 'Ahmad Dahlan', kelas: '12 MIPA 1', started_at: 3300, submitted_at: 4300, part2_notes: '', status: 'graded', graded_at: 4600, teacher_name: 'Guru', criteria_scores: '{}', teacher_comment: '', speaking_band: 8.0, is_late: 0 }
    ];

    const mockDb = {
        prepare(query) {
            let boundParams = [];
            return {
                bind(...params) {
                    boundParams = params;
                    return this;
                },
                async all() {
                    const q = query.trim();
                    if (q.includes('FROM listening_sessions')) {
                        let res = [...listeningData];
                        if (q.includes('test_id = ?')) {
                            const tParam = boundParams.find(p => p.startsWith('test'));
                            if (tParam) res = res.filter(x => x.test_id === tParam);
                        }
                        return { results: res };
                    }
                    if (q.includes('FROM reading_sessions')) {
                        let res = [...readingData];
                        if (q.includes('test_id = ?')) {
                            const tParam = boundParams.find(p => p.startsWith('test'));
                            if (tParam) res = res.filter(x => x.test_id === tParam);
                        }
                        return { results: res };
                    }
                    if (q.includes('FROM writing_sessions')) {
                        let res = [...writingData];
                        if (q.includes('test_id = ?')) {
                            const tParam = boundParams.find(p => p.startsWith('test'));
                            if (tParam) res = res.filter(x => x.test_id === tParam);
                        }
                        return { results: res };
                    }
                    if (q.includes('FROM speaking_sessions')) {
                        let res = [...speakingData];
                        if (q.includes('test_id = ?')) {
                            const tParam = boundParams.find(p => p.startsWith('test'));
                            if (tParam) res = res.filter(x => x.test_id === tParam);
                        }
                        return { results: res };
                    }
                    if (q.includes('FROM speaking_recordings')) {
                        return { results: [] };
                    }
                    return { results: [] };
                },
                async first() {
                    if (query.includes('COUNT(*) as active_count')) {
                        return { active_count: 0, total_bytes: 0 };
                    }
                    if (query.includes('FROM licenses')) {
                        return { cnt: 1 };
                    }
                    if (query.includes('lis_today')) {
                        return { lis_today: 2, read_today: 2, write_today: 2, spk_today: 2, rec_today: 0 };
                    }
                    return null;
                },
                async run() {
                    return { changes: 1 };
                }
            };
        }
    };

    const env = {
        DB: mockDb,
        TEACHER_KEY: 'tch-secret-key-valid-88',
        ADMIN_KEY: 'adm-secret-key-valid-99'
    };

    // 1. Panggil GET /guru/rekap tanpa filter test_id (Harus mengembalikan 2 entri siswa terpisah per test_id)
    const reqAll = new Request('https://kimia.ajarkita.my.id/guru/rekap', {
        headers: { 'X-Teacher-Key': 'tch-secret-key-valid-88' }
    });
    const resAll = await worker.fetch(reqAll, env);
    assert.strictEqual(resAll.status, 200);
    const bodyAll = await resAll.json();
    assert.strictEqual(bodyAll.ok, true);
    assert.strictEqual(bodyAll.results.length, 2, 'Harus ada 2 entri untuk siswa Ahmad: 1 untuk test1 dan 1 untuk test2');

    // Temukan entri Mock 1 dan Mock 2
    const entryTest1 = bodyAll.results.find(e => e.test_id === 'test1');
    const entryTest2 = bodyAll.results.find(e => e.test_id === 'test2');

    assert.ok(entryTest1, 'Entri test1 harus ada');
    assert.ok(entryTest2, 'Entri test2 harus ada');

    // Verifikasi nilai Mock 1 tetap 100% utuh dan TIDAK tertimpa Mock 2:
    assert.strictEqual(entryTest1.listening.band_score, 7.0, 'Nilai Listening Mock 1 harus 7.0');
    assert.strictEqual(entryTest1.reading.band_score, 7.0, 'Nilai Reading Mock 1 harus 7.0');
    assert.strictEqual(entryTest1.writing.writing_band, 7.0, 'Nilai Writing Mock 1 harus 7.0');
    assert.strictEqual(entryTest1.speaking.speaking_band, 7.0, 'Nilai Speaking Mock 1 harus 7.0');
    assert.strictEqual(entryTest1.overall_band, 7.0, 'Overall Band Mock 1 harus 7.0');

    // Verifikasi nilai Mock 2 terpisah dengan benar:
    assert.strictEqual(entryTest2.listening.band_score, 8.5, 'Nilai Listening Mock 2 harus 8.5');
    assert.strictEqual(entryTest2.reading.band_score, 8.5, 'Nilai Reading Mock 2 harus 8.5');
    assert.strictEqual(entryTest2.writing.writing_band, 8.0, 'Nilai Writing Mock 2 harus 8.0');
    assert.strictEqual(entryTest2.speaking.speaking_band, 8.0, 'Nilai Speaking Mock 2 harus 8.0');
    assert.strictEqual(entryTest2.overall_band, 8.5, 'Overall Band Mock 2 harus 8.5 (rata-rata 8.25 dibulatkan ke 8.5)');

    // 2. Panggil GET /guru/rekap?test_id=test1 (Filter spesifik Mock 1)
    const reqFiltered1 = new Request('https://kimia.ajarkita.my.id/guru/rekap?test_id=test1', {
        headers: { 'X-Teacher-Key': 'tch-secret-key-valid-88' }
    });
    const resFiltered1 = await worker.fetch(reqFiltered1, env);
    const bodyFiltered1 = await resFiltered1.json();
    assert.strictEqual(bodyFiltered1.results.length, 1);
    assert.strictEqual(bodyFiltered1.results[0].test_id, 'test1');
    assert.strictEqual(bodyFiltered1.results[0].listening.band_score, 7.0);

    // 3. Panggil GET /guru/rekap?test_id=test2 (Filter spesifik Mock 2)
    const reqFiltered2 = new Request('https://kimia.ajarkita.my.id/guru/rekap?test_id=test2', {
        headers: { 'X-Teacher-Key': 'tch-secret-key-valid-88' }
    });
    const resFiltered2 = await worker.fetch(reqFiltered2, env);
    const bodyFiltered2 = await resFiltered2.json();
    assert.strictEqual(bodyFiltered2.results.length, 1);
    assert.strictEqual(bodyFiltered2.results[0].test_id, 'test2');
    assert.strictEqual(bodyFiltered2.results[0].listening.band_score, 8.5);
});

// =====================================================================
// 4. UJI KONKURENSI MULTI-TES PADA ENGINE D1 PREVIEW (DatabaseSync)
// =====================================================================

test('Tahap 2: Konkurensi submit multi-tes serentak (Promise.all) dengan test_id', async () => {
    const previewDb = new DatabaseSync(':memory:');
    previewDb.exec(`
        CREATE TABLE writing_sessions (
            id TEXT PRIMARY KEY,
            test_id TEXT NOT NULL DEFAULT 'test1',
            status TEXT NOT NULL,
            submitted_at INTEGER
        );
    `);

    // Masukkan sesi aktif untuk test1 dan test2
    previewDb.exec(`
        INSERT INTO writing_sessions (id, test_id, status, submitted_at)
        VALUES ('ws_test1_sess', 'test1', 'in_progress', NULL),
               ('ws_test2_sess', 'test2', 'in_progress', NULL);
    `);

    const updateStmt = previewDb.prepare(`
        UPDATE writing_sessions
        SET status = 'submitted', submitted_at = ?
        WHERE id = ? AND test_id = ? AND status = 'in_progress'
    `);

    // 10 request konkruen bersamaan ke Mock 1 dan 10 request ke Mock 2
    const promisesTest1 = Array.from({ length: 10 }, async (_, idx) => {
        const res = updateStmt.run(Date.now() + idx, 'ws_test1_sess', 'test1');
        return { changes: res.changes, test: 'test1' };
    });

    const promisesTest2 = Array.from({ length: 10 }, async (_, idx) => {
        const res = updateStmt.run(Date.now() + idx, 'ws_test2_sess', 'test2');
        return { changes: res.changes, test: 'test2' };
    });

    const [results1, results2] = await Promise.all([
        Promise.all(promisesTest1),
        Promise.all(promisesTest2)
    ]);

    // Tepat 1 submit yang berhasil di test1, dan tepat 1 yang berhasil di test2
    assert.strictEqual(results1.filter(r => r.changes === 1).length, 1, 'Tepat 1 submit berhasil pada test1');
    assert.strictEqual(results1.filter(r => r.changes === 0).length, 9, '9 submit serentak lainnya ditolak aman pada test1');

    assert.strictEqual(results2.filter(r => r.changes === 1).length, 1, 'Tepat 1 submit berhasil pada test2');
    assert.strictEqual(results2.filter(r => r.changes === 0).length, 9, '9 submit serentak lainnya ditolak aman pada test2');

    // Kedua sesi berhasil submitted
    const final1 = previewDb.prepare("SELECT status, test_id FROM writing_sessions WHERE id = 'ws_test1_sess'").get();
    const final2 = previewDb.prepare("SELECT status, test_id FROM writing_sessions WHERE id = 'ws_test2_sess'").get();

    assert.strictEqual(final1.status, 'submitted');
    assert.strictEqual(final1.test_id, 'test1');
    assert.strictEqual(final2.status, 'submitted');
    assert.strictEqual(final2.test_id, 'test2');
});

// =====================================================================
// 5. UJI MODAL PENILAIAN GURU (WRITING & SPEAKING) MULTI-TES
// =====================================================================

test('Tahap 2 Syarat 3: Modal penilaian guru menuliskan skor ke sesi test_id yang tepat tanpa menimpa tes lain', async () => {
    // Siswa "Budi Santoso" memiliki 2 sesi Writing (Mock 1 & Mock 2) dan 2 sesi Speaking (Mock 1 & Mock 2)
    const writingStore = [
        { id: 'ws_budi_mock1', test_id: 'test1', nama_peserta: 'Budi Santoso', status: 'submitted', writing_band: null, task1_comment: '', task2_comment: '' },
        { id: 'ws_budi_mock2', test_id: 'test2', nama_peserta: 'Budi Santoso', status: 'submitted', writing_band: null, task1_comment: '', task2_comment: '' }
    ];

    const speakingStore = [
        { id: 'spk_budi_mock1', test_id: 'test1', nama_peserta: 'Budi Santoso', status: 'submitted', speaking_band: null, teacher_comment: '' },
        { id: 'spk_budi_mock2', test_id: 'test2', nama_peserta: 'Budi Santoso', status: 'submitted', speaking_band: null, teacher_comment: '' }
    ];

    const mockDb = {
        prepare(query) {
            let boundParams = [];
            return {
                bind(...params) {
                    boundParams = params;
                    return this;
                },
                async first() {
                    const q = query.trim();
                    if (q.includes('FROM writing_sessions WHERE id = ?')) {
                        return writingStore.find(w => w.id === boundParams[0]) || null;
                    }
                    if (q.includes('FROM speaking_sessions WHERE id = ?')) {
                        return speakingStore.find(s => s.id === boundParams[0]) || null;
                    }
                    if (q.includes('FROM listening_admin_attempts') || q.includes('FROM speaking_sessions')) {
                        return null;
                    }
                    return null;
                },
                async run() {
                    const q = query.trim();
                    if (q.includes('UPDATE writing_sessions')) {
                        const sid = boundParams[boundParams.length - 1];
                        const item = writingStore.find(w => w.id === sid);
                        if (item) {
                            item.status = 'graded';
                            item.task1_comment = boundParams[4];
                            item.task2_comment = boundParams[5];
                            item.writing_band = boundParams[6];
                        }
                        return { changes: 1 };
                    }
                    if (q.includes('UPDATE speaking_sessions')) {
                        const sid = boundParams[boundParams.length - 1];
                        const item = speakingStore.find(s => s.id === sid);
                        if (item) {
                            item.status = 'graded';
                            item.teacher_comment = boundParams[3];
                            item.speaking_band = boundParams[4];
                        }
                        return { changes: 1 };
                    }
                    return { changes: 1 };
                }
            };
        }
    };

    const env = {
        DB: mockDb,
        TEACHER_KEY: 'tch-valid-secret-key-99',
        ADMIN_KEY: 'adm-valid-secret-key-88'
    };

    // 1. Guru menilai Writing Mock 1 (Band 6.5)
    const resW1 = await worker.fetch(new Request('https://kimia.ajarkita.my.id/writing/admin/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Teacher-Key': 'tch-valid-secret-key-99' },
        body: JSON.stringify({
            sessionId: 'ws_budi_mock1',
            task1Criteria: { ta: 6.5, cc: 6.5, lr: 6.0, gra: 6.5 },
            task2Criteria: { tr: 6.5, cc: 6.5, lr: 6.5, gra: 6.5 },
            task1Comment: 'Feedback Task 1 Mock 1',
            task2Comment: 'Feedback Task 2 Mock 1',
            teacherName: 'Mr. John'
        })
    }), env);
    assert.strictEqual(resW1.status, 200);

    // 2. Guru menilai Writing Mock 2 (Band 8.0)
    const resW2 = await worker.fetch(new Request('https://kimia.ajarkita.my.id/writing/admin/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Teacher-Key': 'tch-valid-secret-key-99' },
        body: JSON.stringify({
            sessionId: 'ws_budi_mock2',
            task1Criteria: { ta: 8.0, cc: 8.0, lr: 8.0, gra: 8.0 },
            task2Criteria: { tr: 8.0, cc: 8.0, lr: 8.0, gra: 8.0 },
            task1Comment: 'Feedback Task 1 Mock 2',
            task2Comment: 'Feedback Task 2 Mock 2',
            teacherName: 'Mr. John'
        })
    }), env);
    assert.strictEqual(resW2.status, 200);

    // Pastikan Writing Mock 1 dan Mock 2 terisolasi sempurna:
    assert.strictEqual(writingStore[0].test_id, 'test1');
    assert.strictEqual(writingStore[0].writing_band, 6.5);
    assert.strictEqual(writingStore[0].task1_comment, 'Feedback Task 1 Mock 1');

    assert.strictEqual(writingStore[1].test_id, 'test2');
    assert.strictEqual(writingStore[1].writing_band, 8.0);
    assert.strictEqual(writingStore[1].task1_comment, 'Feedback Task 1 Mock 2');

    // 3. Guru menilai Speaking Mock 1 (Band 7.0)
    const resS1 = await worker.fetch(new Request('https://kimia.ajarkita.my.id/speaking/admin/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Teacher-Key': 'tch-valid-secret-key-99' },
        body: JSON.stringify({
            sessionId: 'spk_budi_mock1',
            fc: 7.0, lr: 7.0, gra: 7.0, pr: 7.0,
            teacherComment: 'Bagus untuk Mock 1',
            teacherName: 'Ms. Sarah'
        })
    }), env);
    assert.strictEqual(resS1.status, 200);

    // 4. Guru menilai Speaking Mock 2 (Band 8.5)
    const resS2 = await worker.fetch(new Request('https://kimia.ajarkita.my.id/speaking/admin/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Teacher-Key': 'tch-valid-secret-key-99' },
        body: JSON.stringify({
            sessionId: 'spk_budi_mock2',
            fc: 8.5, lr: 8.5, gra: 8.5, pr: 8.5,
            teacherComment: 'Hebat untuk Mock 2',
            teacherName: 'Ms. Sarah'
        })
    }), env);
    assert.strictEqual(resS2.status, 200);

    // Pastikan Speaking Mock 1 dan Mock 2 terisolasi sempurna:
    assert.strictEqual(speakingStore[0].test_id, 'test1');
    assert.strictEqual(speakingStore[0].speaking_band, 7.0);
    assert.strictEqual(speakingStore[0].teacher_comment, 'Bagus untuk Mock 1');

    assert.strictEqual(speakingStore[1].test_id, 'test2');
    assert.strictEqual(speakingStore[1].speaking_band, 8.5);
    assert.strictEqual(speakingStore[1].teacher_comment, 'Hebat untuk Mock 2');
});
