// =================================================================
// worker/src/task-reporting/admin-handlers.js
// Handler API Dashboard Guru & Admin untuk Pelaporan Tugas (ESM)
// Keamanan: X-Rekap-Key independen, time-constant check, CSV formula escape,
// penanganan dry-run & konfirmasi hapus periode atomik.
// =================================================================

import { hashAccessCode, timingSafeEqualHex, getTaskRekapKey } from './task-engine.js';
import { escapeCsvCell, formatCsvRow } from './csv-neutralizer.js';
import { sanitizeText } from './normalizer.js';

// --- Verifikasi Autentikasi Admin Rekap ---
export function verifyAdminRekapKey(request, env) {
    const rekapSecret = getTaskRekapKey(env);
    if (!rekapSecret || typeof rekapSecret !== 'string' || rekapSecret.trim().length === 0) {
        return false;
    }

    const providedKey = request.headers.get('X-Rekap-Key') || '';
    if (!providedKey) return false;

    // Pemisahan Kunci: Jangan terima jika user mengirim TEACHER_KEY atau ADMIN_KEY
    if (env.TEACHER_KEY && providedKey === env.TEACHER_KEY) return false;
    if (env.ADMIN_KEY && providedKey === env.ADMIN_KEY) return false;

    return timingSafeEqualHex(providedKey.trim(), rekapSecret.trim());
}

// --- Handler Buat Periode Baru ---
export async function handleCreatePeriod(db, body, env, now = Date.now()) {
    const name = sanitizeText(body.name, 100);
    if (!name) throw new Error('Nama periode wajib diisi.');

    const startsAt = parseInt(body.startsAt, 10);
    const endsAt = parseInt(body.endsAt, 10);
    if (isNaN(startsAt) || isNaN(endsAt) || endsAt <= startsAt) {
        throw new Error('Rentang waktu buka dan tutup periode tidak valid.');
    }

    const classes = Array.isArray(body.classes) ? body.classes.map(c => sanitizeText(c, 30)).filter(Boolean) : [];
    if (classes.length === 0) throw new Error('Minimal sertakan 1 kelas untuk periode ini.');

    const subjects = Array.isArray(body.subjects) ? body.subjects.map(s => sanitizeText(s, 50)).filter(Boolean) : [];
    if (subjects.length === 0) throw new Error('Minimal sertakan 1 mata pelajaran.');

    const retentionDays = Math.max(1, Math.min(365, parseInt(body.retentionDays, 10) || 30));

    let plainAccessCode = '';
    if (body.accessCode && typeof body.accessCode === 'string' && body.accessCode.trim().length >= 3) {
        let clean = body.accessCode.trim().toUpperCase();
        if (!clean.startsWith('TGS-')) clean = `TGS-${clean}`;
        plainAccessCode = clean;
    } else {
        const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
        const bytes = new Uint8Array(4);
        crypto.getRandomValues(bytes);
        let randPart = '';
        for (let i = 0; i < 4; i++) randPart += chars[bytes[i] % chars.length];
        plainAccessCode = `TGS-${randPart}`;
    }

    const accessCodeHash = await hashAccessCode(plainAccessCode, env);
    const periodId = 'tp_' + crypto.randomUUID().replace(/-/g, '').slice(0, 16);

    await db.prepare(`
        INSERT INTO task_periods (
            id, name, starts_at, ends_at, status, access_code_hash,
            classes_json, subjects_json, retention_days, created_at
        ) VALUES (?, ?, ?, ?, 'open', ?, ?, ?, ?, ?)
    `).bind(
        periodId,
        name,
        startsAt,
        endsAt,
        accessCodeHash,
        JSON.stringify(classes),
        JSON.stringify(subjects),
        retentionDays,
        now
    ).run();

    await db.prepare(`
        INSERT INTO task_audit_logs (period_id, event_type, metadata_json, created_at)
        VALUES (?, 'period_created', ?, ?)
    `).bind(periodId, JSON.stringify({ name, startsAt, endsAt, retentionDays }), now).run();

    return {
        ok: true,
        period: {
            id: periodId,
            name,
            startsAt,
            endsAt,
            status: 'open',
            classes,
            subjects,
            retentionDays,
            createdAt: now
        },
        accessCodePlain: plainAccessCode
    };
}

// --- Handler Ubah Status Periode (Buka / Tutup / Update) ---
export async function handleUpdatePeriod(db, periodId, body, now = Date.now()) {
    const period = await db.prepare('SELECT * FROM task_periods WHERE id = ?').bind(periodId).first();
    if (!period) throw new Error('Periode tidak ditemukan.');

    let newStatus = period.status;
    let closedAt = period.closed_at;

    if (body.status === 'open' || body.status === 'closed') {
        newStatus = body.status;
        if (newStatus === 'closed' && !closedAt) {
            closedAt = now;
        } else if (newStatus === 'open') {
            closedAt = null;
        }
    }

    const newEndsAt = body.endsAt ? parseInt(body.endsAt, 10) : period.ends_at;

    await db.prepare(`
        UPDATE task_periods
        SET status = ?, ends_at = ?, closed_at = ?
        WHERE id = ?
    `).bind(newStatus, newEndsAt, closedAt, periodId).run();

    return { ok: true, status: newStatus, endsAt: newEndsAt, closedAt };
}

// --- Handler Rekap Komprehensif ---
export async function handleGetRekap(db, periodId, filters = {}) {
    const period = await db.prepare('SELECT * FROM task_periods WHERE id = ?').bind(periodId).first();
    if (!period) throw new Error('Periode tidak ditemukan.');

    let query = `
        SELECT 
            ti.id, ti.submission_id, ti.student_name_norm, ti.class_name,
            ti.subject_name, ti.task_title_raw, ti.task_title_norm,
            ti.submitted_date, ti.notes, ti.verification_status, ti.is_latest,
            ti.created_at, ti.updated_at,
            ts.ref_code, ts.student_name_raw
        FROM task_items ti
        JOIN task_submissions ts ON ti.submission_id = ts.id
        WHERE ti.period_id = ?
    `;
    const params = [periodId];

    if (filters.onlyLatest !== false) {
        query += ` AND ti.is_latest = 1`;
    }
    if (filters.className) {
        query += ` AND ti.class_name = ?`;
        params.push(filters.className);
    }
    if (filters.subjectName) {
        query += ` AND ti.subject_name = ?`;
        params.push(filters.subjectName);
    }
    if (filters.verificationStatus) {
        query += ` AND ti.verification_status = ?`;
        params.push(filters.verificationStatus);
    }

    query += ` ORDER BY ti.class_name ASC, ti.student_name_norm ASC, ti.created_at DESC`;

    const res = await db.prepare(query).bind(...params).all();
    const rows = res.results || [];

    let verifiedCount = 0;
    let reportedCount = 0;
    let notFoundCount = 0;
    const uniqueStudentsSet = new Set();

    for (const r of rows) {
        uniqueStudentsSet.add(`${r.class_name}__${r.student_name_norm}`);
        if (r.verification_status === 'dikonfirmasi_guru_mapel') verifiedCount++;
        else if (r.verification_status === 'tidak_ditemukan') notFoundCount++;
        else reportedCount++;
    }

    return {
        ok: true,
        period: {
            id: period.id,
            name: period.name,
            startsAt: period.starts_at,
            endsAt: period.ends_at,
            status: period.status,
            classes: JSON.parse(period.classes_json || '[]'),
            subjects: JSON.parse(period.subjects_json || '[]')
        },
        stats: {
            totalItems: rows.length,
            uniqueStudents: uniqueStudentsSet.size,
            reportedCount,
            verifiedCount,
            notFoundCount
        },
        items: rows
    };
}

// --- Handler Update Status Verifikasi (Satuan / Massal) ---
export async function handleVerifyItems(db, body, now = Date.now()) {
    const validStatuses = ['dilaporkan', 'dikonfirmasi_guru_mapel', 'tidak_ditemukan'];
    let newStatus = body.newStatus || body.status;
    if (newStatus === 'dikonfirmasi') newStatus = 'dikonfirmasi_guru_mapel';
    if (!validStatuses.includes(newStatus)) {
        throw new Error('Status verifikasi tidak valid: ' + newStatus);
    }

    if (Array.isArray(body.itemIds) && body.itemIds.length > 0) {
        const itemIds = body.itemIds.map(id => String(id).trim()).filter(Boolean);
        const placeholders = itemIds.map(() => '?').join(',');
        await db.prepare(`
            UPDATE task_items
            SET verification_status = ?, updated_at = ?
            WHERE id IN (${placeholders})
        `).bind(newStatus, now, ...itemIds).run();

        return { ok: true, updatedCount: itemIds.length, newStatus };
    }

    if (body.periodId && body.subjectName) {
        let sql = `
            UPDATE task_items
            SET verification_status = ?, updated_at = ?
            WHERE period_id = ? AND subject_name = ? AND is_latest = 1
        `;
        const params = [newStatus, now, body.periodId, body.subjectName];
        if (body.className) {
            sql += ` AND class_name = ?`;
            params.push(body.className);
        }
        if (body.currentStatus) {
            sql += ` AND verification_status = ?`;
            params.push(body.currentStatus);
        }

        const res = await db.prepare(sql).bind(...params).run();
        return { ok: true, updatedCount: res.meta?.changes || 0, newStatus };
    }

    throw new Error('Parameter verifikasi tidak lengkap.');
}

// --- Handler Ekspor CSV dengan Netralisasi Formula Injection ---
export async function handleExportCsv(db, periodId) {
    const rekapData = await handleGetRekap(db, periodId, { onlyLatest: true });
    const items = rekapData.items || [];

    const headers = [
        'No. Resi',
        'Nama Siswa (Asli)',
        'Nama Siswa (Norm)',
        'Kelas',
        'Mata Pelajaran',
        'Judul Tugas (Asli)',
        'Judul Tugas (Norm)',
        'Tanggal Serah Fisik',
        'Catatan Siswa',
        'Status Verifikasi',
        'Versi Aktif (is_latest)',
        'Waktu Pelaporan (WIB)'
    ];

    let csvContent = '\uFEFF';
    csvContent += formatCsvRow(headers);

    for (const item of items) {
        const wibTime = new Date(item.created_at + (7 * 3600 * 1000))
            .toISOString()
            .replace('T', ' ')
            .slice(0, 19);

        const row = [
            item.ref_code,
            item.student_name_raw,
            item.student_name_norm,
            item.class_name,
            item.subject_name,
            item.task_title_raw,
            item.task_title_norm,
            item.submitted_date || '-',
            item.notes || '-',
            item.verification_status,
            item.is_latest === 1 ? 'Aktif' : 'Ditimpa',
            wibTime
        ];
        csvContent += formatCsvRow(row);
    }

    return csvContent;
}

// --- Handler Purge Periode (Dry-Run & Konfirmasi Atomik) ---
export async function handlePurgePeriod(db, periodId, body, now = Date.now()) {
    const period = await db.prepare('SELECT * FROM task_periods WHERE id = ?').bind(periodId).first();
    if (!period) throw new Error('Periode tidak ditemukan.');

    const subCountRow = await db.prepare('SELECT COUNT(*) as cnt FROM task_submissions WHERE period_id = ?').bind(periodId).first();
    const itemCountRow = await db.prepare('SELECT COUNT(*) as cnt FROM task_items WHERE period_id = ?').bind(periodId).first();

    const estimatedSubmissions = subCountRow ? subCountRow.cnt : 0;
    const estimatedItems = itemCountRow ? itemCountRow.cnt : 0;

    if (body.dry_run !== false || body.confirm !== true) {
        return {
            ok: true,
            dry_run: true,
            periodId,
            periodName: period.name,
            estimatedRowsToDelete: {
                task_items: estimatedItems,
                task_submissions: estimatedSubmissions,
                task_periods: 1
            },
            message: 'Mode simulasi (dry_run). Kirim { dry_run: false, confirm: true } untuk menghapus permanen.'
        };
    }

    await db.batch([
        db.prepare('DELETE FROM task_items WHERE period_id = ?').bind(periodId),
        db.prepare('DELETE FROM task_submissions WHERE period_id = ?').bind(periodId),
        db.prepare('DELETE FROM task_periods WHERE id = ?').bind(periodId),
        db.prepare(`
            INSERT INTO task_audit_logs (period_id, event_type, rows_affected, metadata_json, created_at)
            VALUES (?, ?, ?, ?, ?)
        `).bind(periodId, 'period_purged', estimatedItems + estimatedSubmissions + 1, JSON.stringify({ periodName: period.name, deletedItems: estimatedItems }), now)
    ]);

    return {
        ok: true,
        dry_run: false,
        purged: {
            task_items: estimatedItems,
            task_submissions: estimatedSubmissions,
            task_periods: 1
        },
        message: 'Periode dan seluruh data pelaporan tugas telah dihapus permanen.'
    };
}

// --- Rutinitas Cron Otomatis: Purge Periode Kadaluwarsa Berdasarkan Retention Days ---
export async function runTaskRetentionCleanup(db, now = Date.now()) {
    if (!db || typeof db.prepare !== 'function') return { ok: true, purgedCount: 0, purgedPeriods: [] };
    const stmt = db.prepare('SELECT id, name, ends_at, closed_at, retention_days FROM task_periods');
    let periodsRes;
    if (typeof stmt.all === 'function') {
        periodsRes = await stmt.all();
    } else if (typeof stmt.bind === 'function') {
        const bound = stmt.bind();
        periodsRes = (bound && typeof bound.all === 'function') ? await bound.all() : { results: [] };
    } else {
        periodsRes = { results: [] };
    }
    const periods = (periodsRes && periodsRes.results) || [];

    const purgedPeriods = [];
    for (const p of periods) {
        const referenceTime = p.closed_at || p.ends_at;
        const retentionMs = (p.retention_days || 30) * 24 * 60 * 60 * 1000;
        const purgeThreshold = referenceTime + retentionMs;

        if (now >= purgeThreshold) {
            await handlePurgePeriod(db, p.id, { dry_run: false, confirm: true }, now);
            purgedPeriods.push({ id: p.id, name: p.name });
        }
    }

    return {
        ok: true,
        purgedCount: purgedPeriods.length,
        purgedPeriods
    };
}
