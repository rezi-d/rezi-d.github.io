import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const schemaContent = fs.readFileSync(path.resolve('worker/schema.sql'), 'utf-8');
const workerContent = fs.readFileSync(path.resolve('worker/src/index.js'), 'utf-8');

test('Schema Cascade: worker/schema.sql memuat constraint ON DELETE CASCADE', () => {
    assert.match(
        schemaContent,
        /FOREIGN KEY\s*\(\s*session_id\s*\)\s*REFERENCES\s+speaking_sessions\s*\(\s*id\s*\)\s+ON\s+DELETE\s+CASCADE/i,
        'speaking_recordings di worker/schema.sql harus memiliki FOREIGN KEY ON DELETE CASCADE'
    );
});

test('Schema Cascade: worker/src/index.js memuat constraint ON DELETE CASCADE dalam ensureSpeakingSchema', () => {
    assert.match(
        workerContent,
        /FOREIGN KEY\s*\(\s*session_id\s*\)\s*REFERENCES\s+speaking_sessions\s*\(\s*id\s*\)\s+ON\s+DELETE\s+CASCADE/i,
        'ensureSpeakingSchema di worker/src/index.js harus memiliki FOREIGN KEY ON DELETE CASCADE'
    );
});

test('Schema Cascade: Simulasi relasi CASCADE menghapus rekaman terkait ketika sesi dihapus', () => {
    // Model relasi
    let sessions = [
        { id: 'sess_1', nama: 'Siswa A' },
        { id: 'sess_2', nama: 'Siswa B' }
    ];

    let recordings = [
        { id: 'sess_1_p1t1q1', session_id: 'sess_1', q: 'p1t1q1' },
        { id: 'sess_1_p1t1q2', session_id: 'sess_1', q: 'p1t1q2' },
        { id: 'sess_2_p1t1q1', session_id: 'sess_2', q: 'p1t1q1' }
    ];

    function deleteSessionWithCascade(sessionId) {
        sessions = sessions.filter(s => s.id !== sessionId);
        recordings = recordings.filter(r => r.session_id !== sessionId);
    }

    deleteSessionWithCascade('sess_1');

    assert.strictEqual(sessions.length, 1);
    assert.strictEqual(sessions[0].id, 'sess_2');
    assert.strictEqual(recordings.length, 1);
    assert.strictEqual(recordings[0].id, 'sess_2_p1t1q1');
    assert.strictEqual(recordings.some(r => r.session_id === 'sess_1'), false, 'Semua rekaman sess_1 harus bersih tanpa orphan rows');
});
