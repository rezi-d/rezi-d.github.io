// =================================================================
// worker/src/task-reporting/normalizer.js
// Fungsi normalisasi string & sanitasi XSS untuk Pelaporan Tugas (ESM)
// =================================================================

export function stripHtml(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/<[^>]*>?/gm, '').trim();
}

export function hasHtmlTags(str) {
    if (typeof str !== 'string') return false;
    return /<[^>]+>/i.test(str);
}

export function normalizeStudentName(raw) {
    if (typeof raw !== 'string') return '';
    const clean = stripHtml(raw);
    return clean
        .toLowerCase()
        .replace(/[\t\r\n]+/g, ' ')
        .replace(/[^a-z0-9\s'.-]/gi, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 60);
}

export function normalizeTaskTitle(raw) {
    if (typeof raw !== 'string') return '';
    const clean = stripHtml(raw);
    return clean
        .toLowerCase()
        .replace(/[\t\r\n]+/g, ' ')
        .replace(/[.,:;_\-\/\\()[\]{}"'`~!?]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 100);
}

export function sanitizeText(raw, maxLen = 200) {
    if (typeof raw !== 'string') return '';
    const clean = stripHtml(raw);
    return clean
        .replace(/[\r\n\t]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, maxLen);
}
