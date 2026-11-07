// =================================================================
// worker/src/task-reporting/csv-neutralizer.js
// Netralisasi CSV Formula Injection (CWE-1236) untuk seluruh kolom teks (ESM)
// =================================================================

/**
 * Menetralkan sel CSV dari eksekusi formula di Excel / Google Sheets
 * Karakter pemicu formula: '=', '+', '-', '@', '\t', '\r'
 *
 * @param {any} val - Nilai mentah sel
 * @returns {string} String yang aman diformat dalam tanda kutip ganda CSV
 */
export function escapeCsvCell(val) {
    if (val === null || val === undefined) return '""';
    let str = String(val);

    // Hilangkan karakter null byte
    str = str.replace(/\0/g, '');

    // Cek pemicu formula injection pada awal string (termasuk setelah spasi putih pembuka)
    const trimmed = str.trimStart();
    const isFormulaTrigger = /^[=+\-@\t\r]/.test(trimmed);

    if (isFormulaTrigger) {
        // Netralkan dengan menambahkan tanda petik tunggal (') di awal
        str = "'" + str;
    }

    // Escape tanda kutip ganda internal dengan melipatgandakannya (" -> "")
    const escaped = str.replace(/"/g, '""');
    return `"${escaped}"`;
}

/**
 * Membangun satu baris CSV dari array sel
 * @param {Array<any>} rowArray
 * @returns {string}
 */
export function formatCsvRow(rowArray) {
    return rowArray.map(escapeCsvCell).join(',') + '\r\n';
}
