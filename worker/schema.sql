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
