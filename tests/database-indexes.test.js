import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const schemaContent = fs.readFileSync(path.resolve('worker/schema.sql'), 'utf-8');
const workerContent = fs.readFileSync(path.resolve('worker/src/index.js'), 'utf-8');

test('Database Indexes: schema.sql memuat indeks komposit status dan submitted_at DESC untuk 4 modul', () => {
    assert.match(
        schemaContent,
        /CREATE INDEX IF NOT EXISTS idx_listening_status_submitted ON listening_sessions\s*\(\s*status\s*,\s*submitted_at DESC\s*\);/i,
        'Listening session harus memiliki indeks komposit (status, submitted_at DESC)'
    );

    assert.match(
        schemaContent,
        /CREATE INDEX IF NOT EXISTS idx_reading_status_submitted ON reading_sessions\s*\(\s*status\s*,\s*submitted_at DESC\s*\);/i,
        'Reading session harus memiliki indeks komposit (status, submitted_at DESC)'
    );

    assert.match(
        schemaContent,
        /CREATE INDEX IF NOT EXISTS idx_writing_status_submitted ON writing_sessions\s*\(\s*status\s*,\s*submitted_at DESC\s*\);/i,
        'Writing session harus memiliki indeks komposit (status, submitted_at DESC)'
    );

    assert.match(
        schemaContent,
        /CREATE INDEX IF NOT EXISTS idx_speaking_status_submitted ON speaking_sessions\s*\(\s*status\s*,\s*submitted_at DESC\s*\);/i,
        'Speaking session harus memiliki indeks komposit (status, submitted_at DESC)'
    );
});

test('Database Indexes: worker/src/index.js mengeksekusi pembuatan indeks otomatis saat inisialisasi modul', () => {
    assert.match(
        workerContent,
        /CREATE INDEX IF NOT EXISTS idx_listening_status_submitted ON listening_sessions\(status, submitted_at DESC\)/,
        'ensureListeningSchema harus mengeksekusi pembuatan idx_listening_status_submitted'
    );

    assert.match(
        workerContent,
        /CREATE INDEX IF NOT EXISTS idx_reading_status_submitted ON reading_sessions\(status, submitted_at DESC\)/,
        'ensureReadingSchema harus mengeksekusi pembuatan idx_reading_status_submitted'
    );

    assert.match(
        workerContent,
        /CREATE INDEX IF NOT EXISTS idx_writing_status_submitted ON writing_sessions\(status, submitted_at DESC\)/,
        'ensureWritingSchema harus mengeksekusi pembuatan idx_writing_status_submitted'
    );

    assert.match(
        workerContent,
        /CREATE INDEX IF NOT EXISTS idx_speaking_status_submitted ON speaking_sessions\(status, submitted_at DESC\)/,
        'ensureSpeakingSchema harus mengeksekusi pembuatan idx_speaking_status_submitted'
    );
});
