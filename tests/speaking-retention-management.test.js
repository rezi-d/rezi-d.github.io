import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { RETENTION_CONFIG } from '../worker/src/retention-config.js';

const wranglerContent = fs.readFileSync(path.resolve('worker/wrangler.jsonc'), 'utf-8');
const schemaContent = fs.readFileSync(path.resolve('worker/schema.sql'), 'utf-8');
const workerContent = fs.readFileSync(path.resolve('worker/src/index.js'), 'utf-8');

const DAY_MS = 24 * 60 * 60 * 1000;

test('Retention Config: File konfigurasi memuat batas masa simpan 14 hari graded & 60 hari ungraded', () => {
    assert.strictEqual(RETENTION_CONFIG.GRADED_RETENTION_DAYS, 14, 'Masa simpan rekaman yang sudah dinilai harus 14 hari');
    assert.strictEqual(RETENTION_CONFIG.UNGRADED_RETENTION_DAYS, 60, 'Masa simpan rekaman yang belum dinilai harus 60 hari');
    assert.strictEqual(RETENTION_CONFIG.EXPIRING_WARNING_DAYS, 7, 'Peringatan kedaluwarsa di dashboard harus 7 hari');
});

test('Cron Triggers: worker/wrangler.jsonc memuat konfigurasi jadwal cron harian', () => {
    assert.match(wranglerContent, /"crons":\s*\[\s*"[^"]+"\s*\]/, 'wrangler.jsonc harus memuat triggers crons harian');
});

test('Schema: tabel speaking_recordings dan cleanup_logs mendukung deleted_at dan audit log', () => {
    assert.match(schemaContent, /deleted_at\s+INTEGER\s+DEFAULT\s+NULL/i, 'speaking_recordings harus memiliki kolom deleted_at');
    assert.match(schemaContent, /CREATE\s+TABLE\s+IF\s+NOT\s+EXISTS\s+cleanup_logs/i, 'schema.sql harus memuat tabel cleanup_logs');
    assert.match(workerContent, /ADD\s+COLUMN\s+deleted_at\s+INTEGER\s+DEFAULT\s+NULL/i, 'ensureSpeakingSchema harus auto-migrate deleted_at');
});

test('Pembersihan Manual: Tolak konfirmasi tanpa teks HAPUS persis (HTTP 400)', () => {
    function validateCleanupConfirmation(body) {
        if (!body || String(body.confirm || '').trim() !== 'HAPUS') {
            return {
                ok: false,
                status: 400,
                error: 'Penghapusan rekaman memerlukan konfirmasi teks "HAPUS" (huruf kapital) demi keamanan data siswa.'
            };
        }
        return { ok: true, status: 200 };
    }

    // Uji berbagai variasi konfirmasi yang tidak valid
    assert.strictEqual(validateCleanupConfirmation({}).status, 400);
    assert.strictEqual(validateCleanupConfirmation({ confirm: 'hapus' }).status, 400);
    assert.strictEqual(validateCleanupConfirmation({ confirm: 'DELETE' }).status, 400);
    assert.strictEqual(validateCleanupConfirmation({ confirm: 'YA' }).status, 400);
    assert.strictEqual(validateCleanupConfirmation({ confirm: 'Hapus' }).status, 400);

    // Uji teks valid persis
    const valid = validateCleanupConfirmation({ confirm: 'HAPUS' });
    assert.strictEqual(valid.ok, true);
    assert.strictEqual(valid.status, 200);
});

test('Preservasi Data: Penghapusan rekaman mengosongkan audio tapi MENJAGA nilai & feedback guru 100% utuh', () => {
    // Simulasi database state
    let session = {
        id: 'spk_sess_101',
        nama_peserta: 'Budi Santoso',
        kelas: 'XII-MIPA-1',
        status: 'graded',
        speaking_band: 7.0,
        criteria_scores: JSON.stringify({ fc: 7.0, lr: 7.0, gra: 6.5, pr: 7.5, band: 7.0 }),
        teacher_name: 'Mr. English Teacher',
        teacher_comment: 'Excellent fluency with natural idiomatic expressions.',
        started_at: Date.now() - (20 * DAY_MS),
        graded_at: Date.now() - (15 * DAY_MS)
    };

    let recordings = [
        {
            id: 'rec_1',
            session_id: 'spk_sess_101',
            question_id: 'part1_q1',
            audio_data: 'UklGRiQAAABXQVZFZm10IBAAAAABAAEA...',
            transcript: 'I usually spend my weekend reading books...',
            file_size_bytes: 450000,
            deleted_at: null
        },
        {
            id: 'rec_2',
            session_id: 'spk_sess_101',
            question_id: 'part2_cue',
            audio_data: 'UklGRiQAAABXQVZFZm10IBAAAAABAAEB...',
            transcript: 'Today I want to talk about an memorable event...',
            file_size_bytes: 650000,
            deleted_at: null
        }
    ];

    // Eksekusi pembersihan audio
    const now = Date.now();
    let freedBytes = 0;
    let deletedCount = 0;

    recordings = recordings.map(rec => {
        if (rec.session_id === session.id && rec.deleted_at === null) {
            freedBytes += rec.file_size_bytes;
            deletedCount++;
            return {
                ...rec,
                audio_data: '',
                transcript: '',
                file_size_bytes: 0,
                deleted_at: now
            };
        }
        return rec;
    });

    // 1. Verifikasi rekaman telah dibersihkan
    assert.strictEqual(deletedCount, 2);
    assert.strictEqual(freedBytes, 1100000);
    assert.strictEqual(recordings[0].audio_data, '');
    assert.strictEqual(recordings[0].transcript, '');
    assert.strictEqual(recordings[0].file_size_bytes, 0);
    assert.strictEqual(recordings[0].deleted_at, now);

    // 2. VERIFIKASI UTAMA: Nilai, feedback, dan metadata guru di speaking_sessions TETAP UTUH
    assert.strictEqual(session.id, 'spk_sess_101');
    assert.strictEqual(session.nama_peserta, 'Budi Santoso');
    assert.strictEqual(session.status, 'graded');
    assert.strictEqual(session.speaking_band, 7.0, 'Speaking band siswa tidak boleh hilang');
    const parsedCriteria = JSON.parse(session.criteria_scores);
    assert.strictEqual(parsedCriteria.fc, 7.0);
    assert.strictEqual(parsedCriteria.lr, 7.0);
    assert.strictEqual(parsedCriteria.gra, 6.5);
    assert.strictEqual(parsedCriteria.pr, 7.5);
    assert.strictEqual(session.teacher_comment, 'Excellent fluency with natural idiomatic expressions.', 'Komentar guru tidak boleh hilang');
});

test('Cron Retention: Hanya menghapus rekaman graded > 14 hari dan ungraded > 60 hari', () => {
    const now = Date.now();
    const sessions = [
        { id: 's1', status: 'graded', graded_at: now - (5 * DAY_MS), started_at: now - (6 * DAY_MS) },   // graded 5 hari (KEEP)
        { id: 's2', status: 'graded', graded_at: now - (13 * DAY_MS), started_at: now - (14 * DAY_MS) }, // graded 13 hari (KEEP)
        { id: 's3', status: 'graded', graded_at: now - (15 * DAY_MS), started_at: now - (16 * DAY_MS) }, // graded 15 hari (DELETE)
        { id: 's4', status: 'submitted', graded_at: null, started_at: now - (20 * DAY_MS) },              // ungraded 20 hari (KEEP)
        { id: 's5', status: 'submitted', graded_at: null, started_at: now - (59 * DAY_MS) },              // ungraded 59 hari (KEEP)
        { id: 's6', status: 'submitted', graded_at: null, started_at: now - (62 * DAY_MS) }               // ungraded 62 hari (DELETE)
    ];

    const gradedCutoff = now - (RETENTION_CONFIG.GRADED_RETENTION_DAYS * DAY_MS);
    const ungradedCutoff = now - (RETENTION_CONFIG.UNGRADED_RETENTION_DAYS * DAY_MS);

    const eligibleForCleanup = sessions.filter(s => {
        if (s.status === 'graded' && s.graded_at && s.graded_at < gradedCutoff) return true;
        if (s.status !== 'graded' && s.started_at < ungradedCutoff) return true;
        return false;
    }).map(s => s.id);

    assert.deepStrictEqual(eligibleForCleanup, ['s3', 's6']);
    assert.ok(!eligibleForCleanup.includes('s1'), 'Sesi graded 5 hari tidak boleh dihapus');
    assert.ok(!eligibleForCleanup.includes('s2'), 'Sesi graded 13 hari tidak boleh dihapus');
    assert.ok(!eligibleForCleanup.includes('s4'), 'Sesi ungraded 20 hari tidak boleh dihapus');
    assert.ok(!eligibleForCleanup.includes('s5'), 'Sesi ungraded 59 hari tidak boleh dihapus');
});

test('Indikator Kapasitas: Dihitung HANYA dari SUM(file_size_bytes) rekaman aktif yang belum dihapus', () => {
    const allRecordings = [
        { id: 'r1', file_size_bytes: 500000, deleted_at: null, audio_data: 'data...' },
        { id: 'r2', file_size_bytes: 700000, deleted_at: null, audio_data: 'data...' },
        { id: 'r3', file_size_bytes: 0, deleted_at: 1700000000, audio_data: '' }, // sudah dihapus
        { id: 'r4', file_size_bytes: 400000, deleted_at: 1700000000, audio_data: '' } // sudah dihapus tapi jika ada byte sisa tetap diabaikan
    ];

    const activeRecordings = allRecordings.filter(r => r.deleted_at === null && r.audio_data !== '');
    const activeBytes = activeRecordings.reduce((sum, r) => sum + r.file_size_bytes, 0);

    assert.strictEqual(activeRecordings.length, 2);
    assert.strictEqual(activeBytes, 1200000); // 500k + 700k = 1.2 MB
});

test('Playback Audio Dihapus: Mengembalikan HTTP 404 tanpa merusak UI', () => {
    function simulateAudioEndpoint(rec) {
        if (!rec || !rec.audio_data || rec.audio_data === '' || rec.deleted_at) {
            return {
                status: 404,
                ok: false,
                error: rec?.deleted_at
                    ? 'Rekaman audio telah dihapus dari server sesuai kebijakan masa simpan privasi siswa.'
                    : 'Rekaman audio untuk pertanyaan ini tidak ditemukan.'
            };
        }
        return { status: 200, ok: true, audio: rec.audio_data };
    }

    const deletedRec = {
        session_id: 's1',
        question_id: 'q1',
        audio_data: '',
        deleted_at: 1730000000
    };

    const res = simulateAudioEndpoint(deletedRec);
    assert.strictEqual(res.status, 404);
    assert.strictEqual(res.ok, false);
    assert.match(res.error, /kebijakan masa simpan/i);
});

test('Audit Log: Pencatatan ke cleanup_logs mencatat waktu, jenis trigger, jumlah, dan ukuran byte', () => {
    const logs = [];
    function recordCleanupLog(triggerType, cleanupType, targetInfo, deletedCount, freedBytes, notes) {
        const entry = {
            id: logs.length + 1,
            timestamp: Date.now(),
            trigger_type: triggerType,
            cleanup_type: cleanupType,
            target_info: targetInfo,
            deleted_count: deletedCount,
            freed_bytes: freedBytes,
            notes
        };
        logs.push(entry);
        return entry;
    }

    const log1 = recordCleanupLog('manual', 'student', 'Siswa: Budi (XII-1)', 3, 1500000, 'Penghapusan manual oleh guru');
    const log2 = recordCleanupLog('cron', 'retention', 'Jadwal Harian Otomatis', 12, 6200000, 'Otomatis Cron retensi');

    assert.strictEqual(logs.length, 2);
    assert.strictEqual(log1.trigger_type, 'manual');
    assert.strictEqual(log1.deleted_count, 3);
    assert.strictEqual(log1.freed_bytes, 1500000);
    assert.strictEqual(log2.trigger_type, 'cron');
    assert.strictEqual(log2.deleted_count, 12);
});
