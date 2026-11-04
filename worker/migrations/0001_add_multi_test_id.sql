-- =================================================================
-- Migration 0001: Multi-Test Architecture (test_id support)
-- Tanggal: 4 November 2026
-- Menambahkan kolom test_id pada speaking_recordings, indeks test_id,
-- dan normalisasi baris data warisan sesi IELTS ke 'test1'.
-- =================================================================

-- 1. Tambahkan test_id pada speaking_recordings (default 'test1')
ALTER TABLE speaking_recordings ADD COLUMN test_id TEXT NOT NULL DEFAULT 'test1';

-- 2. Tambahkan indeks untuk query berkinerja tinggi per test_id
CREATE INDEX IF NOT EXISTS idx_listening_sessions_test_id ON listening_sessions(test_id);
CREATE INDEX IF NOT EXISTS idx_reading_sessions_test_id ON reading_sessions(test_id);
CREATE INDEX IF NOT EXISTS idx_writing_sessions_test_id ON writing_sessions(test_id);
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_test_id ON speaking_sessions(test_id);
CREATE INDEX IF NOT EXISTS idx_speaking_recordings_test_id ON speaking_recordings(test_id);

-- 3. Normalisasi data warisan (legacy rows) secara aman (Zero Data Loss)
UPDATE listening_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'listening1', '', 'test_1');
UPDATE reading_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'reading1', '', 'test_1');
UPDATE writing_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'writing1', '', 'test_1');
UPDATE speaking_sessions SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'speaking1', 'speaking_test1', '', 'test_1');
UPDATE speaking_recordings SET test_id = 'test1' WHERE test_id IS NULL OR test_id IN ('1', 'speaking1', 'speaking_test1', '', 'test_1');
