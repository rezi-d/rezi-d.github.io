-- Skema database Lisensi SNBT, Beasiswa, & Diskusi Sains Populer (Cloudflare D1)
-- Token asli tidak pernah disimpan; hanya hash SHA-256.

CREATE TABLE IF NOT EXISTS licenses (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    token_hash    TEXT    NOT NULL UNIQUE,
    nama          TEXT,
    wa            TEXT,
    created_at    INTEGER NOT NULL,
    activated_at  INTEGER,
    expires_at    INTEGER,
    duration_days INTEGER NOT NULL DEFAULT 30,
    max_devices   INTEGER NOT NULL DEFAULT 2,
    revoked       INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS devices (
    license_id INTEGER NOT NULL,
    device_id  TEXT    NOT NULL,
    first_seen INTEGER NOT NULL,
    PRIMARY KEY (license_id, device_id),
    FOREIGN KEY (license_id) REFERENCES licenses(id)
);

CREATE INDEX IF NOT EXISTS idx_licenses_wa ON licenses(wa);

-- Tabel klaim Voucher Beasiswa Mini-Game SNBT (Rp 35.000)
-- device_id dan wa KEDUANYA UNIQUE untuk mencegah klaim ganda per perangkat dan per nomor WA
CREATE TABLE IF NOT EXISTS scholarship_claims (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    device_id      TEXT    NOT NULL UNIQUE,
    ip_hash        TEXT,
    wa             TEXT    NOT NULL UNIQUE,
    nama           TEXT    NOT NULL,
    license_id     INTEGER NOT NULL,
    total_rp       INTEGER NOT NULL,
    mastered_count INTEGER NOT NULL,
    claimed_at     INTEGER NOT NULL,
    FOREIGN KEY (license_id) REFERENCES licenses(id)
);

CREATE INDEX IF NOT EXISTS idx_scholarship_claimed_at ON scholarship_claims(claimed_at);

-- Tabel Komentar & Diskusi Artikel Sains Populer
CREATE TABLE IF NOT EXISTS article_comments (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    article_slug TEXT    NOT NULL,
    parent_id    INTEGER DEFAULT NULL,
    nama         TEXT    NOT NULL,
    sekolah      TEXT    DEFAULT '',
    pesan        TEXT    NOT NULL,
    is_admin     INTEGER NOT NULL DEFAULT 0,
    likes        INTEGER NOT NULL DEFAULT 0,
    device_id    TEXT,
    ip_hash      TEXT,
    created_at   INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_comments_slug ON article_comments(article_slug, created_at);

CREATE TABLE IF NOT EXISTS article_comment_likes (
    comment_id INTEGER NOT NULL,
    device_id  TEXT    NOT NULL,
    created_at INTEGER NOT NULL,
    PRIMARY KEY (comment_id, device_id)
);

-- =================================================================
-- Tabel Simulasi IELTS-Style Listening Mock Test (Cloudflare D1)
-- =================================================================

CREATE TABLE IF NOT EXISTS listening_sessions (
    id             TEXT    PRIMARY KEY,         -- UUID attempt_id (misal 'ls_a8b9c0d1...')
    test_id        TEXT    NOT NULL,            -- 'test1'
    device_id      TEXT    NOT NULL,
    nama_peserta   TEXT    NOT NULL,
    kelas          TEXT    NOT NULL,            -- e.g. '12 MIPA 1'
    started_at     INTEGER NOT NULL,            -- server timestamp ms
    submitted_at   INTEGER DEFAULT NULL,        -- server timestamp ms
    current_sec    INTEGER NOT NULL DEFAULT 1,  -- Section aktif (1-4)
    answers_json   TEXT    DEFAULT '{}',        -- Jawaban tersimpan dari autosave
    raw_score      INTEGER DEFAULT NULL,        -- Skor mentah (0 - 40)
    band_score     REAL    DEFAULT NULL,        -- Estimated Band (e.g. 7.5)
    section_scores TEXT    DEFAULT '{}',        -- Breakdown skor per section: {"s1":9,"s2":8,"s3":8,"s4":8}
    status         TEXT    NOT NULL DEFAULT 'in_progress' -- 'in_progress', 'submitted'
);

CREATE INDEX IF NOT EXISTS idx_listening_sessions_test ON listening_sessions(test_id, started_at);
CREATE INDEX IF NOT EXISTS idx_listening_sessions_kelas ON listening_sessions(kelas, submitted_at);
CREATE INDEX IF NOT EXISTS idx_listening_sessions_device ON listening_sessions(device_id);
CREATE INDEX IF NOT EXISTS idx_listening_status_submitted ON listening_sessions(status, submitted_at DESC);

-- Tabel Rate-Limiting Percobaan TEACHER_KEY
CREATE TABLE IF NOT EXISTS listening_admin_attempts (
    ip_hash         TEXT    PRIMARY KEY,
    failed_attempts INTEGER NOT NULL DEFAULT 0,
    locked_until    INTEGER NOT NULL DEFAULT 0,
    last_attempt    INTEGER NOT NULL
);

-- =================================================================
-- Tabel Simulasi IELTS-Style Academic Reading Mock Test (Cloudflare D1)
-- =================================================================

CREATE TABLE IF NOT EXISTS reading_sessions (
    id               TEXT    PRIMARY KEY,         -- UUID attempt_id (misal 'rs_f1a2b3c4...')
    test_id          TEXT    NOT NULL,            -- 'reading1'
    device_id        TEXT    NOT NULL,
    nama_peserta     TEXT    NOT NULL,
    kelas            TEXT    NOT NULL,            -- e.g. '12 MIPA 1'
    started_at       INTEGER NOT NULL,            -- server timestamp ms
    duration_seconds INTEGER NOT NULL DEFAULT 3600,-- 60 menit (3.600 detik)
    submitted_at     INTEGER DEFAULT NULL,        -- server timestamp ms
    current_passage  INTEGER NOT NULL DEFAULT 1,  -- Passage aktif (1-3)
    answers_json     TEXT    DEFAULT '{}',        -- Jawaban tersimpan dari autosave
    raw_score        INTEGER DEFAULT NULL,        -- Skor mentah (0 - 40)
    band_score       REAL    DEFAULT NULL,        -- Estimated Band (e.g. 7.0)
    passage_scores   TEXT    DEFAULT '{}',        -- Breakdown per passage: {"p1":12,"p2":11,"p3":11}
    type_scores      TEXT    DEFAULT '{}',        -- Breakdown tipe soal: {"tfng":6,"headings":5,...}
    status           TEXT    NOT NULL DEFAULT 'in_progress' -- 'in_progress', 'submitted'
);

CREATE INDEX IF NOT EXISTS idx_reading_sessions_test ON reading_sessions(test_id, started_at);
CREATE INDEX IF NOT EXISTS idx_reading_sessions_kelas ON reading_sessions(kelas, submitted_at);
CREATE INDEX IF NOT EXISTS idx_reading_sessions_device ON reading_sessions(device_id);
CREATE INDEX IF NOT EXISTS idx_reading_status_submitted ON reading_sessions(status, submitted_at DESC);

-- =================================================================
-- Tabel Simulasi IELTS-Style Academic Writing Mock Test (Cloudflare D1)
-- =================================================================

CREATE TABLE IF NOT EXISTS writing_sessions (
    id                   TEXT    PRIMARY KEY,         -- UUID attempt_id ('ws_...')
    test_id              TEXT    NOT NULL,            -- 'writing1'
    device_id            TEXT    NOT NULL,
    nama_peserta         TEXT    NOT NULL,
    kelas                TEXT    NOT NULL,            -- '12 MIPA 1'
    started_at           INTEGER NOT NULL,            -- server timestamp ms
    duration_seconds     INTEGER NOT NULL DEFAULT 3600,-- 60 menit (3.600 detik)
    submitted_at         INTEGER DEFAULT NULL,        -- server timestamp ms
    current_task         INTEGER NOT NULL DEFAULT 1,  -- Task aktif (1 atau 2)
    task1_text           TEXT    DEFAULT '',          -- Teks ketikan Task 1
    task2_text           TEXT    DEFAULT '',          -- Teks ketikan Task 2
    task1_word_count     INTEGER DEFAULT 0,
    task2_word_count     INTEGER DEFAULT 0,
    structural_check     TEXT    DEFAULT '{}',        -- Hasil analisa kelayakan teknis otomatis (bukan skor)
    status               TEXT    NOT NULL DEFAULT 'in_progress', -- 'in_progress', 'submitted', 'graded'
    -- Evaluasi & Penilaian Guru (Hanya melalui TEACHER_KEY):
    graded_at            INTEGER DEFAULT NULL,        -- server timestamp ms
    teacher_name         TEXT    DEFAULT NULL,
    task1_criteria       TEXT    DEFAULT '{}',        -- {"ta": 7.0, "cc": 6.5, "lr": 7.0, "gra": 6.5, "band": 7.0}
    task2_criteria       TEXT    DEFAULT '{}',        -- {"tr": 7.5, "cc": 7.0, "lr": 7.0, "gra": 7.0, "band": 7.0}
    task1_comment        TEXT    DEFAULT '',          -- Catatan guru untuk Task 1
    task2_comment        TEXT    DEFAULT '',          -- Catatan guru untuk Task 2
    writing_band         REAL    DEFAULT NULL         -- Skor akhir Writing: (T1 + 2*T2)/3 dibulatkan
);

CREATE INDEX IF NOT EXISTS idx_writing_sessions_test ON writing_sessions(test_id, started_at);
CREATE INDEX IF NOT EXISTS idx_writing_sessions_kelas ON writing_sessions(kelas, submitted_at);
CREATE INDEX IF NOT EXISTS idx_writing_sessions_device ON writing_sessions(device_id);
CREATE INDEX IF NOT EXISTS idx_writing_status_submitted ON writing_sessions(status, submitted_at DESC);

-- =================================================================
-- Tabel Simulasi IELTS-Style Speaking Mock Test (Cloudflare D1)
-- =================================================================

CREATE TABLE IF NOT EXISTS speaking_sessions (
    id                   TEXT    PRIMARY KEY,         -- UUID attempt_id ('spk_...')
    test_id              TEXT    NOT NULL,            -- 'speaking1'
    device_id            TEXT    NOT NULL,
    nama_peserta         TEXT    NOT NULL,
    kelas                TEXT    NOT NULL,            -- '12 MIPA 1'
    started_at           INTEGER NOT NULL,            -- server timestamp ms
    submitted_at         INTEGER DEFAULT NULL,        -- server timestamp ms
    part2_notes          TEXT    DEFAULT '',          -- Coretan catatan persiapan siswa Part 2
    status               TEXT    NOT NULL DEFAULT 'in_progress', -- 'in_progress', 'submitted', 'graded'
    -- Evaluasi & Penilaian Guru (Hanya melalui TEACHER_KEY):
    graded_at            INTEGER DEFAULT NULL,        -- server timestamp ms
    teacher_name         TEXT    DEFAULT NULL,
    criteria_scores      TEXT    DEFAULT '{}',        -- {"fc": 7.0, "lr": 6.5, "gra": 6.5, "pr": 7.0}
    teacher_comment      TEXT    DEFAULT '',          -- Catatan kualitatif guru
    speaking_band        REAL    DEFAULT NULL         -- Rata-rata 4 kriteria dengan pembulatan IELTS
);

CREATE INDEX IF NOT EXISTS idx_speaking_sessions_test ON speaking_sessions(test_id, started_at);
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_kelas ON speaking_sessions(kelas, submitted_at);
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_device ON speaking_sessions(device_id);
CREATE INDEX IF NOT EXISTS idx_speaking_status_submitted ON speaking_sessions(status, submitted_at DESC);

CREATE TABLE IF NOT EXISTS speaking_recordings (
    id                   TEXT    PRIMARY KEY,         -- 'sessionId_questionId'
    session_id           TEXT    NOT NULL,
    question_id          TEXT    NOT NULL,
    mime_type            TEXT    NOT NULL,
    audio_data           TEXT    NOT NULL,            -- Base64 encoded audio
    transcript           TEXT    DEFAULT '',          -- Draf transkrip mesin opsional (bukan dasar penilaian)
    duration_seconds     REAL    DEFAULT 0,
    file_size_bytes      INTEGER DEFAULT 0,
    uploaded_at          INTEGER NOT NULL,
    FOREIGN KEY (session_id) REFERENCES speaking_sessions(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_speaking_recordings_sess ON speaking_recordings(session_id);




