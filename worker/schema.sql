-- Skema database lisensi SNBT Premium (Cloudflare D1)
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
CREATE TABLE IF NOT EXISTS scholarship_claims (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    device_id      TEXT    NOT NULL UNIQUE,
    ip_hash        TEXT,
    wa             TEXT    NOT NULL,
    nama           TEXT    NOT NULL,
    license_id     INTEGER NOT NULL,
    total_rp       INTEGER NOT NULL,
    mastered_count INTEGER NOT NULL,
    claimed_at     INTEGER NOT NULL,
    FOREIGN KEY (license_id) REFERENCES licenses(id)
);

CREATE INDEX IF NOT EXISTS idx_scholarship_wa ON scholarship_claims(wa);
CREATE INDEX IF NOT EXISTS idx_scholarship_claimed_at ON scholarship_claims(claimed_at);
