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

-- Tabel Rate-Limiting Percobaan TEACHER_KEY
CREATE TABLE IF NOT EXISTS listening_admin_attempts (
    ip_hash         TEXT    PRIMARY KEY,
    failed_attempts INTEGER NOT NULL DEFAULT 0,
    locked_until    INTEGER NOT NULL DEFAULT 0,
    last_attempt    INTEGER NOT NULL
);

