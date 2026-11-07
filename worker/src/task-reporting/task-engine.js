// =================================================================
// worker/src/task-reporting/task-engine.js
// Logika inti keamanan, token sesi sesaat, penegakan jendela waktu,
// saran judul aman, dan eksekusi batch deduplikasi atomik (ESM).
// =================================================================

import { normalizeStudentName, normalizeTaskTitle, sanitizeText, hasHtmlTags } from './normalizer.js';

// --- Helper Kriptografi ---
export async function hmacSha256Hex(str, secret) {
    const enc = new TextEncoder();
    const keyData = enc.encode(String(secret || 'default-secret'));
    const key = await crypto.subtle.importKey(
        'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(str));
    return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function sha256Hex(str) {
    const enc = new TextEncoder();
    const buf = await crypto.subtle.digest('SHA-256', enc.encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function timingSafeEqualHex(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') return false;
    if (a.length !== b.length) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return diff === 0;
}

// --- Secrets & Pepper Helpers ---
export function getTaskAccessPepper(env) {
    return (env && env.TASK_ACCESS_PEPPER) || 'ajarkita-task-access-pepper-2026';
}

export function getTaskSessionSecret(env) {
    return (env && env.TASK_SESSION_SECRET) || 'ajarkita-task-session-secret-2026';
}

export function getTaskRekapKey(env) {
    return (env && env.TASK_REKAP_KEY) || '';
}

export async function hashAccessCode(code, env) {
    const pepper = getTaskAccessPepper(env);
    const cleanCode = String(code || '').trim().toUpperCase();
    return await hmacSha256Hex(cleanCode, pepper);
}

// --- Token Sesi Sementara (HMAC, Max 30 Menit, Terikat 1 Periode) ---
export async function createSessionToken(periodId, env, now = Date.now()) {
    const secret = getTaskSessionSecret(env);
    const exp = now + (30 * 60 * 1000); // 30 menit
    const rndBytes = new Uint8Array(8);
    crypto.getRandomValues(rndBytes);
    const rnd = Array.from(rndBytes).map(b => b.toString(16).padStart(2, '0')).join('');
    
    const payload = JSON.stringify({ periodId, exp, rnd });
    const payloadB64 = Buffer.from(payload).toString('base64url');
    const sigHex = await hmacSha256Hex(payloadB64, secret);
    return `st_${payloadB64}.${sigHex}`;
}

export async function verifySessionToken(tokenString, expectedPeriodId, env, now = Date.now()) {
    if (typeof tokenString !== 'string' || !tokenString.startsWith('st_')) {
        return { ok: false, error: 'Format token sesi tidak valid.', reason: 'invalid_format' };
    }

    const dotIdx = tokenString.indexOf('.');
    if (dotIdx === -1) {
        return { ok: false, error: 'Token sesi rusak.', reason: 'malformed_token' };
    }

    const payloadB64 = tokenString.slice(3, dotIdx);
    const sigHex = tokenString.slice(dotIdx + 1);

    const secret = getTaskSessionSecret(env);
    const expectedSig = await hmacSha256Hex(payloadB64, secret);

    if (!timingSafeEqualHex(sigHex, expectedSig)) {
        return { ok: false, error: 'Tanda tangan token sesi tidak sah.', reason: 'invalid_signature' };
    }

    let payload;
    try {
        const jsonStr = Buffer.from(payloadB64, 'base64url').toString('utf8');
        payload = JSON.parse(jsonStr);
    } catch {
        return { ok: false, error: 'Isi token sesi tidak dapat diurai.', reason: 'parse_error' };
    }

    if (!payload.exp || now > payload.exp) {
        return { ok: false, error: 'Sesi pelaporan Anda telah kedaluwarsa (maks. 30 menit). Silakan masukkan kembali kode akses.', reason: 'token_expired' };
    }

    if (expectedPeriodId && payload.periodId !== expectedPeriodId) {
        return { ok: false, error: 'Token sesi tidak sesuai dengan periode pelaporan ini.', reason: 'wrong_period' };
    }

    return { ok: true, periodId: payload.periodId, exp: payload.exp };
}

// --- Penegakan Waktu & Status Periode di Server ---
export function checkPeriodWindow(period, now = Date.now()) {
    if (!period) {
        return { ok: false, error: 'Periode pelaporan tidak ditemukan.', reason: 'not_found' };
    }
    if (period.status !== 'open') {
        return { ok: false, error: 'Pelaporan sedang ditutup oleh admin guru.', reason: 'period_closed' };
    }
    if (now < period.starts_at) {
        return { ok: false, error: 'Periode pelaporan ini belum dimulai.', reason: 'not_started' };
    }
    if (now > period.ends_at) {
        return { ok: false, error: 'Batas waktu periode pelaporan telah berakhir.', reason: 'period_expired' };
    }
    return { ok: true };
}

// --- Turnstile Verification Helper ---
export async function verifyTurnstileToken(token, ip, env) {
    const secret = env && env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        if (env && (env.NODE_ENV === 'test' || env.TEST_MODE === '1')) return { success: true };
        return { success: false, error: 'Kunci Turnstile server belum dikonfigurasi.' };
    }

    try {
        const formData = new URLSearchParams();
        formData.append('secret', secret);
        formData.append('response', token);
        if (ip) formData.append('remoteip', ip);

        const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        const outcome = await res.json();
        return { success: !!outcome.success, errorCodes: outcome['error-codes'] };
    } catch (err) {
        return { success: false, error: 'Gagal memverifikasi Turnstile ke Cloudflare.' };
    }
}

// --- Saran Judul Aman (Ambang Muncul Minimal 2 Siswa Berbeda) ---
export async function getSafeTaskSuggestions(db, periodId, subjectName, query = '') {
    const normSubj = String(subjectName || '').trim();
    if (!normSubj) return [];

    const normQuery = normalizeTaskTitle(query);
    let sql = `
        SELECT task_title_norm, COUNT(DISTINCT student_name_norm) as student_count
        FROM task_items
        WHERE period_id = ? AND subject_name = ? AND is_latest = 1
    `;
    const params = [periodId, normSubj];

    if (normQuery.length >= 2) {
        sql += ` AND task_title_norm LIKE ?`;
        params.push(`%${normQuery}%`);
    }

    sql += `
        GROUP BY task_title_norm
        HAVING student_count >= 2
        ORDER BY student_count DESC, task_title_norm ASC
        LIMIT 10
    `;

    const res = await db.prepare(sql).bind(...params).all();
    return (res.results || []).map(r => r.task_title_norm);
}

// --- Pembuatan Nomor Resi Acak ---
export function generateRefCode() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    const bytes = new Uint8Array(6);
    crypto.getRandomValues(bytes);
    let str = '';
    for (let i = 0; i < 6; i++) {
        str += chars[bytes[i] % chars.length];
    }
    return `TSG-${str}`;
}

// --- Submit Batch Atomik & Penanganan Duplikat (is_latest) ---
export async function submitTaskBatch(db, { periodId, studentNameRaw, className, tasks, ipHmac, userAgentMasked, now = Date.now() }) {
    if (!studentNameRaw || typeof studentNameRaw !== 'string') {
        throw new Error('Nama siswa wajib diisi.');
    }
    if (hasHtmlTags(studentNameRaw)) {
        throw new Error('Nama siswa tidak boleh memuat tag HTML.');
    }
    const studentNameNorm = normalizeStudentName(studentNameRaw);
    if (!studentNameNorm || studentNameNorm.length < 2) {
        throw new Error('Nama siswa terlalu pendek atau tidak valid.');
    }
    if (studentNameRaw.length > 60) {
        throw new Error('Nama siswa maksimal 60 karakter.');
    }

    if (!className || typeof className !== 'string') {
        throw new Error('Kelas wajib dipilih.');
    }
    const cleanClass = sanitizeText(className, 30);

    if (!Array.isArray(tasks) || tasks.length === 0) {
        throw new Error('Minimal sertakan 1 butir tugas.');
    }
    if (tasks.length > 30) {
        throw new Error('Maksimal 30 butir tugas dalam sekali pengiriman.');
    }

    const submissionId = 'sub_' + crypto.randomUUID().replace(/-/g, '');
    const refCode = generateRefCode();

    const statements = [];

    // 1. INSERT induk pengiriman
    statements.push(
        db.prepare(`
            INSERT INTO task_submissions (
                id, period_id, ref_code, student_name_raw, student_name_norm,
                class_name, ip_hmac, user_agent_masked, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
            submissionId,
            periodId,
            refCode,
            studentNameRaw.trim().slice(0, 60),
            studentNameNorm,
            cleanClass,
            ipHmac || 'unknown',
            userAgentMasked || 'unknown',
            now
        )
    );

    // 2. Untuk tiap butir tugas: update duplikat lama -> is_latest = 0, lalu INSERT baru -> is_latest = 1
    for (let i = 0; i < tasks.length; i++) {
        const item = tasks[i] || {};
        const subject = sanitizeText(item.subject, 50);
        if (!subject) throw new Error(`Mata pelajaran pada baris ke-${i + 1} wajib diisi.`);

        const rawTitle = String(item.title || '').trim();
        if (!rawTitle) throw new Error(`Judul tugas pada baris ke-${i + 1} wajib diisi.`);
        if (hasHtmlTags(rawTitle)) throw new Error(`Judul tugas pada baris ke-${i + 1} tidak boleh memuat tag HTML.`);
        if (rawTitle.length > 100) throw new Error(`Judul tugas pada baris ke-${i + 1} maksimal 100 karakter.`);

        const normTitle = normalizeTaskTitle(rawTitle);
        if (!normTitle) throw new Error(`Judul tugas pada baris ke-${i + 1} tidak valid.`);

        const submittedDate = item.submittedDate ? sanitizeText(item.submittedDate, 10) : null;
        const notes = item.notes ? sanitizeText(item.notes, 200) : null;
        const itemId = 'item_' + crypto.randomUUID().replace(/-/g, '');

        statements.push(
            db.prepare(`
                UPDATE task_items
                SET is_latest = 0, updated_at = ?
                WHERE period_id = ? AND class_name = ? AND student_name_norm = ? AND subject_name = ? AND task_title_norm = ? AND is_latest = 1
            `).bind(now, periodId, cleanClass, studentNameNorm, subject, normTitle)
        );

        statements.push(
            db.prepare(`
                INSERT INTO task_items (
                    id, submission_id, period_id, student_name_norm, class_name,
                    subject_name, task_title_raw, task_title_norm, submitted_date,
                    notes, verification_status, is_latest, created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'dilaporkan', 1, ?, ?)
            `).bind(
                itemId,
                submissionId,
                periodId,
                studentNameNorm,
                cleanClass,
                subject,
                rawTitle.slice(0, 100),
                normTitle,
                submittedDate,
                notes,
                now,
                now
            )
        );
    }

    await db.batch(statements);

    return {
        ok: true,
        refCode,
        taskCount: tasks.length,
        studentName: studentNameRaw.trim().slice(0, 60),
        className: cleanClass,
        createdAt: now
    };
}
