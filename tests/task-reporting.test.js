// =================================================================
// tests/task-reporting.test.js
// Unit & Integration Test Suite untuk Fitur Pelaporan Tugas (Tahap A)
// Menguji: Normalisasi, CSV Formula Neutralizer, HMAC Token Sesi,
// Penegakan Jendela Waktu, Rate Limit, Batch Atomik Deduplikasi,
// Autocomplete Saran Judul Aman, Pemisahan Kunci Rekap, dan Purge/Retensi.
// =================================================================

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

import {
    stripHtml,
    hasHtmlTags,
    normalizeStudentName,
    normalizeTaskTitle,
    sanitizeText
} from '../worker/src/task-reporting/normalizer.js';

import {
    escapeCsvCell,
    formatCsvRow
} from '../worker/src/task-reporting/csv-neutralizer.js';

import {
    hmacSha256Hex,
    sha256Hex,
    timingSafeEqualHex,
    hashAccessCode,
    createSessionToken,
    verifySessionToken,
    checkPeriodWindow,
    getSafeTaskSuggestions,
    generateRefCode,
    submitTaskBatch
} from '../worker/src/task-reporting/task-engine.js';

import {
    verifyAdminRekapKey,
    handleCreatePeriod,
    handleUpdatePeriod,
    handleGetRekap,
    handleVerifyItems,
    handleExportCsv,
    handlePurgePeriod,
    runTaskRetentionCleanup
} from '../worker/src/task-reporting/admin-handlers.js';

// --- D1 SQLite Adapter Mock ---
function createD1Mock() {
    const sqlite = new DatabaseSync(':memory:');
    
    // Terapkan skema migrasi 0002
    const schemaSql = fs.readFileSync(path.resolve('worker/migrations/0002_task_reporting_schema.sql'), 'utf-8');
    sqlite.exec(schemaSql);

    function createStatement(sql, boundParams = []) {
        return {
            bind(...params) {
                return createStatement(sql, params);
            },
            first() {
                const stmt = sqlite.prepare(sql);
                return stmt.get(...boundParams) || null;
            },
            all() {
                const stmt = sqlite.prepare(sql);
                const results = stmt.all(...boundParams) || [];
                return { results };
            },
            run() {
                const stmt = sqlite.prepare(sql);
                const res = stmt.run(...boundParams);
                return { meta: { changes: res.changes, last_row_id: res.lastInsertRowid } };
            }
        };
    }

    function prepare(sql) {
        return createStatement(sql);
    }

    async function batch(statements) {
        sqlite.exec('BEGIN TRANSACTION;');
        try {
            for (const s of statements) {
                // statements are wrapped prepare().bind()
                s.run();
            }
            sqlite.exec('COMMIT;');
        } catch (err) {
            sqlite.exec('ROLLBACK;');
            throw err;
        }
    }

    return { prepare, batch, _rawSqlite: sqlite };
}

async function insertMockPeriod(db, periodId = 'tp_test', overrides = {}) {
    const now = Date.now();
    await db.prepare(`
        INSERT INTO task_periods (id, name, starts_at, ends_at, status, access_code_hash, classes_json, subjects_json, retention_days, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
        periodId,
        overrides.name || 'Periode Test',
        overrides.starts_at || (now - 3600000),
        overrides.ends_at || (now + 86400000),
        overrides.status || 'open',
        overrides.access_code_hash || 'hash_123',
        JSON.stringify(overrides.classes || ['X MIPA 1', 'X MIPA 2', 'XI MIPA 2']),
        JSON.stringify(overrides.subjects || ['Kimia', 'Fisika']),
        overrides.retention_days || 30,
        overrides.created_at || now
    ).run();
}

// =================================================================
// 1. PENGUJIAN NORMALISASI & SANITASI XSS
// =================================================================

test('1.1 Normalisasi Nama Siswa: bersihkan spasi, kontrol, dan jadikan lowercase seragam', () => {
    const raw = '  Muhammad   FAUZI   \t\n  Al-Fatih.  ';
    const norm = normalizeStudentName(raw);
    assert.equal(norm, "muhammad fauzi al-fatih.");

    // Batas 60 karakter
    const longName = 'A'.repeat(80);
    assert.equal(normalizeStudentName(longName).length, 60);
});

test('1.2 Normalisasi Nama Siswa: tolak atau buang karakter berbahaya / tag HTML', () => {
    assert.equal(hasHtmlTags('<script>alert(1)</script>'), true);
    assert.equal(hasHtmlTags('<b>Andi</b>'), true);
    assert.equal(hasHtmlTags('Ahmad Fauzi'), false);

    const stripped = stripHtml('<b>Andi Pratama</b>');
    assert.equal(stripped, 'Andi Pratama');
});

test('1.3 Normalisasi Judul Tugas: rapikan spasi dan tanda baca', () => {
    const raw = '  Tugas 3:  Termokimia & Hukum Hess (Latihan No. 1 - 10)  ';
    const norm = normalizeTaskTitle(raw);
    assert.equal(norm, 'tugas 3 termokimia & hukum hess latihan no 1 10');

    // Batas 100 karakter
    const longTitle = 'Tugas '.repeat(30);
    assert.ok(normalizeTaskTitle(longTitle).length <= 100);
});

// =================================================================
// 2. PENGUJIAN NETRALISASI FORMULA INJECTION CSV (CWE-1236)
// =================================================================

test('2.1 Netralisasi CSV: lindungi karakter pemicu formula (=, +, -, @, tab, CR)', () => {
    assert.equal(escapeCsvCell('=1+1'), `"'=1+1"`);
    assert.equal(escapeCsvCell('+cmd|"/C calc"!A0'), `"'+cmd|""/C calc""!A0"`);
    assert.equal(escapeCsvCell('-2+5'), `"'-2+5"`);
    assert.equal(escapeCsvCell('@SUM(1,2)'), `"'@SUM(1,2)"`);
    assert.equal(escapeCsvCell('\t=cmd'), `"'\t=cmd"`);
    assert.equal(escapeCsvCell('   =SUM(A1:A5)'), `"'   =SUM(A1:A5)"`);
});

test('2.2 Netralisasi CSV: teks biasa dan tanda kutip ganda internal', () => {
    assert.equal(escapeCsvCell('Tugas Kimia "Bentuk Molekul"'), `"Tugas Kimia ""Bentuk Molekul"""`);
    assert.equal(escapeCsvCell('12 MIPA 1'), `"12 MIPA 1"`);
    assert.equal(escapeCsvCell(null), `""`);
    assert.equal(escapeCsvCell(undefined), `""`);

    const row = formatCsvRow(['TSG-123', '=SUM(A1)', 'Andi']);
    assert.equal(row, `"TSG-123","'=SUM(A1)","Andi"\r\n`);
});

// =================================================================
// 3. PENGUJIAN TOKEN SESI SESAAT (HMAC, 30 MENIT, TERIKAT PERIODE)
// =================================================================

test('3.1 Token Sesi: terbitkan token valid dan verifikasi sukses dalam 30 menit', async () => {
    const env = { TASK_SESSION_SECRET: 'test-session-secret-key-12345' };
    const now = 1700000000000;
    const periodId = 'tp_ganjil_2026';

    const token = await createSessionToken(periodId, env, now);
    assert.ok(token.startsWith('st_'));

    const verifyRes = await verifySessionToken(token, periodId, env, now + 10 * 60 * 1000); // 10 mnt kemudian
    assert.equal(verifyRes.ok, true);
    assert.equal(verifyRes.periodId, periodId);
});

test('3.2 Token Sesi: tolak jika kedaluwarsa setelah 30 menit', async () => {
    const env = { TASK_SESSION_SECRET: 'test-session-secret-key-12345' };
    const now = 1700000000000;
    const periodId = 'tp_ganjil_2026';

    const token = await createSessionToken(periodId, env, now);
    const verifyRes = await verifySessionToken(token, periodId, env, now + 31 * 60 * 1000); // 31 mnt kemudian
    assert.equal(verifyRes.ok, false);
    assert.equal(verifyRes.reason, 'token_expired');
});

test('3.3 Token Sesi: tolak jika signature dimanipulasi atau periodId tidak cocok', async () => {
    const env = { TASK_SESSION_SECRET: 'test-session-secret-key-12345' };
    const now = 1700000000000;
    const periodId = 'tp_ganjil_2026';

    const token = await createSessionToken(periodId, env, now);

    // Manipulasi signature
    const tampered = token.slice(0, -4) + '0000';
    const fakeRes = await verifySessionToken(tampered, periodId, env, now);
    assert.equal(fakeRes.ok, false);
    assert.equal(fakeRes.reason, 'invalid_signature');

    // Periode beda
    const wrongPeriodRes = await verifySessionToken(token, 'tp_genap_2026', env, now);
    assert.equal(wrongPeriodRes.ok, false);
    assert.equal(wrongPeriodRes.reason, 'wrong_period');
});

// =================================================================
// 4. PENGUJIAN PENEGAKAN JENDELA WAKTU (SERVER-SIDE)
// =================================================================

test('4.1 Penegakan Waktu: tolak jika sebelum starts_at, sesudah ends_at, atau status closed', () => {
    const period = {
        id: 'tp_1',
        starts_at: 1700000000000,
        ends_at: 1700100000000,
        status: 'open'
    };

    // Sebelum dimulai
    assert.equal(checkPeriodWindow(period, 1699999999999).reason, 'not_started');

    // Aktif
    assert.equal(checkPeriodWindow(period, 1700050000000).ok, true);

    // Kedaluwarsa
    assert.equal(checkPeriodWindow(period, 1700100000001).reason, 'period_expired');

    // Status manual ditutup oleh admin
    const closedPeriod = { ...period, status: 'closed' };
    assert.equal(checkPeriodWindow(closedPeriod, 1700050000000).reason, 'period_closed');
});

// =================================================================
// 5. PENGUJIAN AUTENTIKASI ADMIN & PEMISAHAN KUNCI (X-Rekap-Key)
// =================================================================

test('5.1 Autentikasi Admin: terima X-Rekap-Key yang cocok persis', () => {
    const env = {
        TASK_REKAP_KEY: 'rekap-secret-999',
        ADMIN_KEY: 'admin-master-secret',
        TEACHER_KEY: 'teacher-evaluation-secret'
    };

    const validReq = new Request('http://localhost/api/task/admin/periods', {
        headers: { 'X-Rekap-Key': 'rekap-secret-999' }
    });
    assert.equal(verifyAdminRekapKey(validReq, env), true);
});

test('5.2 Pemisahan Kunci: tolak jika TEACHER_KEY atau ADMIN_KEY diserahkan ke X-Rekap-Key', () => {
    const env = {
        TASK_REKAP_KEY: 'rekap-secret-999',
        ADMIN_KEY: 'admin-master-secret',
        TEACHER_KEY: 'teacher-evaluation-secret'
    };

    const teacherReq = new Request('http://localhost/api/task/admin/periods', {
        headers: { 'X-Rekap-Key': 'teacher-evaluation-secret' }
    });
    assert.equal(verifyAdminRekapKey(teacherReq, env), false, 'TEACHER_KEY tidak boleh membuka Rekap Tugas');

    const adminReq = new Request('http://localhost/api/task/admin/periods', {
        headers: { 'X-Rekap-Key': 'admin-master-secret' }
    });
    assert.equal(verifyAdminRekapKey(adminReq, env), false, 'ADMIN_KEY tidak boleh membuka Rekap Tugas jika kuncinya beda');
});

// =================================================================
// 6. PENGUJIAN SARAN JUDUL TUGAS (Threshold >= 2 Siswa Berbeda)
// =================================================================

test('6.1 Autocomplete Judul: HANYA tampilkan judul yang diinput minimal 2 siswa berbeda', async () => {
    const db = createD1Mock();
    const periodId = 'tp_test_1';
    const now = Date.now();
    await insertMockPeriod(db, periodId);

    // Header submission untuk Siswa 1 dan Siswa 2 (memenuhi foreign key)
    await db.prepare(`
        INSERT INTO task_submissions (id, period_id, ref_code, student_name_raw, student_name_norm, class_name, ip_hmac, created_at)
        VALUES ('sub1', ?, 'TSG-111111', 'Andi Pratama', 'andi pratama', 'X MIPA 1', 'ip_1', ?)
    `).bind(periodId, now).run();

    await db.prepare(`
        INSERT INTO task_submissions (id, period_id, ref_code, student_name_raw, student_name_norm, class_name, ip_hmac, created_at)
        VALUES ('sub2', ?, 'TSG-222222', 'Budi Santoso', 'budi santoso', 'X MIPA 2', 'ip_2', ?)
    `).bind(periodId, now).run();

    // Sisipkan butir dari Siswa 1
    await db.prepare(`
        INSERT INTO task_items (
            id, submission_id, period_id, student_name_norm, class_name,
            subject_name, task_title_raw, task_title_norm, is_latest, created_at, updated_at
        ) VALUES ('it1', 'sub1', ?, 'andi pratama', 'X MIPA 1', 'Kimia', 'Tugas 1: Termokimia', 'tugas 1 termokimia', 1, ?, ?)
    `).bind(periodId, now, now).run();

    // Judul unik pribadi Siswa 1
    await db.prepare(`
        INSERT INTO task_items (
            id, submission_id, period_id, student_name_norm, class_name,
            subject_name, task_title_raw, task_title_norm, is_latest, created_at, updated_at
        ) VALUES ('it2', 'sub1', ?, 'andi pratama', 'X MIPA 1', 'Kimia', 'Catatan Rahasia Andi', 'catatan rahasia andi', 1, ?, ?)
    `).bind(periodId, now, now).run();

    // Cek saat baru 1 siswa -> saran harus kosong!
    let sugg = await getSafeTaskSuggestions(db, periodId, 'Kimia', 'tugas');
    assert.equal(sugg.length, 0, 'Judul dengan 1 siswa tidak boleh bocor ke saran');

    // Sisipkan butir yang sama dari Siswa 2 (Budi)
    await db.prepare(`
        INSERT INTO task_items (
            id, submission_id, period_id, student_name_norm, class_name,
            subject_name, task_title_raw, task_title_norm, is_latest, created_at, updated_at
        ) VALUES ('it3', 'sub2', ?, 'budi santoso', 'X MIPA 2', 'Kimia', 'Tugas 1: Termokimia', 'tugas 1 termokimia', 1, ?, ?)
    `).bind(periodId, now, now).run();

    // Cek setelah 2 siswa input judul yang sama -> sekarang harus muncul di saran!
    sugg = await getSafeTaskSuggestions(db, periodId, 'Kimia', 'tugas');
    assert.equal(sugg.length, 1);
    assert.equal(sugg[0], 'tugas 1 termokimia');

    // Catatan rahasia tetap tidak muncul
    const secretSugg = await getSafeTaskSuggestions(db, periodId, 'Kimia', 'rahasia');
    assert.equal(secretSugg.length, 0);
});

// =================================================================
// 7. PENGUJIAN SUBMIT BATCH ATOMIK & DEDUPLIKASI (is_latest)
// =================================================================

test('7.1 Pengiriman Batch: Siswa submit multi-tugas (3 butir) dalam 1 DB.batch atomik', async () => {
    const db = createD1Mock();
    const periodId = 'tp_batch_test';
    const now = Date.now();
    await insertMockPeriod(db, periodId);

    const result = await submitTaskBatch(db, {
        periodId,
        studentNameRaw: 'Fikri Haikal',
        className: 'XI MIPA 2',
        tasks: [
            { subject: 'Kimia', title: 'Tugas 2: Laju Reaksi', submittedDate: '2026-11-05', notes: 'Buku catatan hal 40' },
            { subject: 'Kimia', title: 'Tugas 3: Kesetimbangan', submittedDate: '2026-11-06' },
            { subject: 'Fisika', title: 'Tugas Gelombang', submittedDate: '2026-11-06' }
        ],
        ipHmac: 'ip_test_hash',
        userAgentMasked: 'Mozilla/5.0 Test',
        now
    });

    assert.equal(result.ok, true);
    assert.match(result.refCode, /^TSG-[2-9A-Z]{6}$/);
    assert.equal(result.taskCount, 3);

    // Periksa tabel di database
    const subRow = db.prepare('SELECT * FROM task_submissions WHERE ref_code = ?').bind(result.refCode).first();
    assert.ok(subRow);
    assert.equal(subRow.student_name_norm, 'fikri haikal');

    const itemRows = db.prepare('SELECT * FROM task_items WHERE submission_id = ?').bind(subRow.id).all().results;
    assert.equal(itemRows.length, 3);
    assert.ok(itemRows.every(r => r.is_latest === 1));
});

test('7.2 Deduplikasi Atomik: revisi tugas yang sama menandai versi lama is_latest = 0', async () => {
    const db = createD1Mock();
    const periodId = 'tp_batch_test';
    const now1 = Date.now();
    await insertMockPeriod(db, periodId);

    // Pengiriman 1
    await submitTaskBatch(db, {
        periodId,
        studentNameRaw: 'Fikri Haikal',
        className: 'XI MIPA 2',
        tasks: [
            { subject: 'Kimia', title: 'Tugas 2: Laju Reaksi', submittedDate: '2026-11-05', notes: 'Catatan awal' }
        ],
        ipHmac: 'ip_test_hash',
        now: now1
    });

    // Pengiriman 2 (Siswa kirim ulang dengan judul sama namun ada variasi spasi / perbaikan catatan)
    const now2 = now1 + 60000;
    await submitTaskBatch(db, {
        periodId,
        studentNameRaw: 'Fikri Haikal',
        className: 'XI MIPA 2',
        tasks: [
            { subject: 'Kimia', title: 'Tugas 2:   laju reaksi  ', submittedDate: '2026-11-07', notes: 'Catatan revisi lengkap' }
        ],
        ipHmac: 'ip_test_hash',
        now: now2
    });

    const allItems = db.prepare(`
        SELECT task_title_norm, notes, is_latest, created_at
        FROM task_items
        WHERE period_id = ? AND student_name_norm = 'fikri haikal'
        ORDER BY created_at ASC
    `).bind(periodId).all().results;

    assert.equal(allItems.length, 2, 'Total baris riwayat ada 2');
    assert.equal(allItems[0].notes, 'Catatan awal');
    assert.equal(allItems[0].is_latest, 0, 'Versi lama harus ditandai is_latest = 0');
    assert.equal(allItems[1].notes, 'Catatan revisi lengkap');
    assert.equal(allItems[1].is_latest, 1, 'Versi teranyar harus is_latest = 1');
});

// =================================================================
// 8. PENGUJIAN CRUD PERIODE & REKAP ADMIN
// =================================================================

test('8.1 Admin Periode: buat periode baru dan ambil kode akses', async () => {
    const db = createD1Mock();
    const env = { TASK_ACCESS_PEPPER: 'pepper-secret-2026' };
    const now = Date.now();

    const created = await handleCreatePeriod(db, {
        name: 'Tugas Susulan PAS Ganjil 2026',
        startsAt: now,
        endsAt: now + (7 * 24 * 3600 * 1000),
        classes: ['X MIPA 1', 'X MIPA 2', 'XI MIPA 1'],
        subjects: ['Kimia', 'Fisika'],
        retentionDays: 30
    }, env, now);

    assert.equal(created.ok, true);
    assert.ok(created.accessCodePlain.startsWith('TGS-'));
    assert.equal(created.period.status, 'open');

    // Cek di DB
    const periodRow = db.prepare('SELECT * FROM task_periods WHERE id = ?').bind(created.period.id).first();
    assert.ok(periodRow);
    assert.equal(periodRow.name, 'Tugas Susulan PAS Ganjil 2026');

    // Verifikasi hash kode akses cocok
    const expectedHash = await hashAccessCode(created.accessCodePlain, env);
    assert.equal(expectedHash, periodRow.access_code_hash);
});

test('8.2 Admin Rekap & Ekspor CSV: rekap terstruktur dan netralisasi CSV', async () => {
    const db = createD1Mock();
    const periodId = 'tp_rekap_test';
    const now = Date.now();

    await db.prepare(`
        INSERT INTO task_periods (id, name, starts_at, ends_at, status, access_code_hash, classes_json, subjects_json, retention_days, created_at)
        VALUES (?, 'Periode Uji', ?, ?, 'open', 'hash', '["X MIPA 1"]', '["Kimia"]', 30, ?)
    `).bind(periodId, now, now + 100000, now).run();

    await submitTaskBatch(db, {
        periodId,
        studentNameRaw: 'Siti Aminah',
        className: 'X MIPA 1',
        tasks: [
            { subject: 'Kimia', title: 'Tugas Stoikiometri', submittedDate: '2026-11-06' }
        ],
        now
    });

    const rekap = await handleGetRekap(db, periodId);
    assert.equal(rekap.ok, true);
    assert.equal(rekap.stats.totalItems, 1);
    assert.equal(rekap.stats.uniqueStudents, 1);
    assert.equal(rekap.items[0].student_name_raw, 'Siti Aminah');

    // Update status verifikasi
    const itemId = rekap.items[0].id;
    const verifyRes = await handleVerifyItems(db, { itemIds: [itemId], newStatus: 'dikonfirmasi_guru_mapel' });
    assert.equal(verifyRes.ok, true);

    // Ekspor CSV
    const csvStr = await handleExportCsv(db, periodId);
    assert.ok(csvStr.includes('\uFEFF'), 'CSV harus memuat UTF-8 BOM');
    assert.ok(csvStr.includes('"Siti Aminah"'));
    assert.ok(csvStr.includes('"dikonfirmasi_guru_mapel"'));
});

// =================================================================
// 9. PENGUJIAN PURGE PERIODE (DRY-RUN vs CONFIRM) & CRON RETENSI
// =================================================================

test('9.1 Purge Periode: mode dry_run tidak menghapus data', async () => {
    const db = createD1Mock();
    const periodId = 'tp_purge_test';
    const now = Date.now();

    await db.prepare(`
        INSERT INTO task_periods (id, name, starts_at, ends_at, status, access_code_hash, classes_json, subjects_json, retention_days, created_at)
        VALUES (?, 'Periode Hapus', ?, ?, 'closed', 'hash', '[]', '[]', 30, ?)
    `).bind(periodId, now, now + 1000, now).run();

    await submitTaskBatch(db, {
        periodId,
        studentNameRaw: 'Budi',
        className: 'X MIPA 1',
        tasks: [{ subject: 'Kimia', title: 'Tugas 1' }],
        now
    });

    // Jalankan Dry Run
    const dryRes = await handlePurgePeriod(db, periodId, { dry_run: true });
    assert.equal(dryRes.ok, true);
    assert.equal(dryRes.dry_run, true);
    assert.equal(dryRes.estimatedRowsToDelete.task_items, 1);
    assert.equal(dryRes.estimatedRowsToDelete.task_submissions, 1);

    // Pastikan data di DB TIDAK terhapus
    const checkRow = db.prepare('SELECT id FROM task_items WHERE period_id = ?').bind(periodId).first();
    assert.ok(checkRow, 'Data tidak boleh terhapus dalam mode dry_run');
});

test('9.2 Purge Periode: eksekusi atomik saat confirm = true menghapus seluruh data kaskade', async () => {
    const db = createD1Mock();
    const periodId = 'tp_purge_test';
    const now = Date.now();

    await db.prepare(`
        INSERT INTO task_periods (id, name, starts_at, ends_at, status, access_code_hash, classes_json, subjects_json, retention_days, created_at)
        VALUES (?, 'Periode Hapus', ?, ?, 'closed', 'hash', '[]', '[]', 30, ?)
    `).bind(periodId, now, now + 1000, now).run();

    await submitTaskBatch(db, {
        periodId,
        studentNameRaw: 'Budi',
        className: 'X MIPA 1',
        tasks: [{ subject: 'Kimia', title: 'Tugas 1' }],
        now
    });

    // Jalankan Purge Confirm
    const purgeRes = await handlePurgePeriod(db, periodId, { dry_run: false, confirm: true }, now);
    assert.equal(purgeRes.ok, true);
    assert.equal(purgeRes.dry_run, false);

    // Pastikan data di DB terhapus bersih
    const checkItem = db.prepare('SELECT id FROM task_items WHERE period_id = ?').bind(periodId).first();
    const checkSub = db.prepare('SELECT id FROM task_submissions WHERE period_id = ?').bind(periodId).first();
    const checkPeriod = db.prepare('SELECT id FROM task_periods WHERE id = ?').bind(periodId).first();

    assert.equal(checkItem, null);
    assert.equal(checkSub, null);
    assert.equal(checkPeriod, null);
});

test('9.3 Cron Retensi: membersihkan periode yang telah melewati batas retention_days', async () => {
    const db = createD1Mock();
    const now = Date.now();
    const dayMs = 24 * 3600 * 1000;

    // Periode 1: Ditutup 40 hari lalu dengan retensi 30 hari -> Harus Dihapus
    const p1Ends = now - (40 * dayMs);
    await db.prepare(`
        INSERT INTO task_periods (id, name, starts_at, ends_at, status, access_code_hash, classes_json, subjects_json, retention_days, created_at, closed_at)
        VALUES ('p1_expired', 'Periode Lama', ?, ?, 'closed', 'hash', '[]', '[]', 30, ?, ?)
    `).bind(p1Ends - 1000, p1Ends, p1Ends, p1Ends).run();

    // Periode 2: Ditutup 10 hari lalu dengan retensi 30 hari -> Harus Tetap Ada
    const p2Ends = now - (10 * dayMs);
    await db.prepare(`
        INSERT INTO task_periods (id, name, starts_at, ends_at, status, access_code_hash, classes_json, subjects_json, retention_days, created_at, closed_at)
        VALUES ('p2_fresh', 'Periode Baru', ?, ?, 'closed', 'hash', '[]', '[]', 30, ?, ?)
    `).bind(p2Ends - 1000, p2Ends, p2Ends, p2Ends).run();

    const cleanupRes = await runTaskRetentionCleanup(db, now);
    assert.equal(cleanupRes.ok, true);
    assert.equal(cleanupRes.purgedCount, 1);
    assert.equal(cleanupRes.purgedPeriods[0].id, 'p1_expired');

    const checkP1 = db.prepare('SELECT id FROM task_periods WHERE id = ?').bind('p1_expired').first();
    const checkP2 = db.prepare('SELECT id FROM task_periods WHERE id = ?').bind('p2_fresh').first();
    assert.equal(checkP1, null, 'Periode lama harus bersih');
    assert.ok(checkP2, 'Periode baru harus tetap ada');
});
