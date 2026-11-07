-- =================================================================
-- Migration 0002: Periodic Task Reporting Schema (Pelaporan Tugas)
-- Tanggal: 7 November 2026
-- Tabel-tabel untuk fitur berkala Pelaporan Tugas Susulan Google Classroom
-- =================================================================

-- 1. Tabel Periode Pelaporan Tugas
CREATE TABLE IF NOT EXISTS task_periods (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    starts_at INTEGER NOT NULL,
    ends_at INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'open',
    access_code_hash TEXT NOT NULL,
    classes_json TEXT NOT NULL,
    subjects_json TEXT NOT NULL,
    retention_days INTEGER NOT NULL DEFAULT 30,
    created_at INTEGER NOT NULL,
    closed_at INTEGER DEFAULT NULL
);

-- 2. Tabel Induk Pengiriman Siswa (Submission Header)
CREATE TABLE IF NOT EXISTS task_submissions (
    id TEXT PRIMARY KEY,
    period_id TEXT NOT NULL,
    ref_code TEXT NOT NULL UNIQUE,
    student_name_raw TEXT NOT NULL,
    student_name_norm TEXT NOT NULL,
    class_name TEXT NOT NULL,
    ip_hmac TEXT NOT NULL,
    user_agent_masked TEXT,
    created_at INTEGER NOT NULL,
    FOREIGN KEY (period_id) REFERENCES task_periods(id) ON DELETE CASCADE
);

-- 3. Tabel Rincian Butir Tugas yang Diserahkan (Task Items)
CREATE TABLE IF NOT EXISTS task_items (
    id TEXT PRIMARY KEY,
    submission_id TEXT NOT NULL,
    period_id TEXT NOT NULL,
    student_name_norm TEXT NOT NULL,
    class_name TEXT NOT NULL,
    subject_name TEXT NOT NULL,
    task_title_raw TEXT NOT NULL,
    task_title_norm TEXT NOT NULL,
    submitted_date TEXT DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    verification_status TEXT NOT NULL DEFAULT 'dilaporkan',
    is_latest INTEGER NOT NULL DEFAULT 1,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    FOREIGN KEY (submission_id) REFERENCES task_submissions(id) ON DELETE CASCADE,
    FOREIGN KEY (period_id) REFERENCES task_periods(id) ON DELETE CASCADE
);

-- 4. Tabel Log Audit Tanpa PII
CREATE TABLE IF NOT EXISTS task_audit_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    period_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    rows_affected INTEGER DEFAULT 0,
    metadata_json TEXT DEFAULT NULL,
    created_at INTEGER NOT NULL
);

-- 5. Indeks Kinerja, Deduplikasi, dan Autocomplete Aman
CREATE INDEX IF NOT EXISTS idx_task_items_period_latest ON task_items(period_id, is_latest);
CREATE INDEX IF NOT EXISTS idx_task_items_dedup ON task_items(period_id, class_name, student_name_norm, subject_name, task_title_norm);
CREATE INDEX IF NOT EXISTS idx_task_items_suggestions ON task_items(period_id, subject_name, task_title_norm);
CREATE INDEX IF NOT EXISTS idx_task_submissions_period ON task_submissions(period_id);
CREATE INDEX IF NOT EXISTS idx_task_periods_status_window ON task_periods(status, starts_at, ends_at);
