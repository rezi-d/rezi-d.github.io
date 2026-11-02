import test from 'node:test';
import assert from 'node:assert/strict';

function escapeCsvCell(str) {
    if (str === null || str === undefined) return '""';
    let val = String(str);
    const trimmed = val.trimStart();
    const formulaTriggers = ['=', '+', '-', '@', '\t', '\r'];
    if (trimmed.length > 0 && formulaTriggers.includes(trimmed[0])) {
        val = "'" + val;
    }
    return `"${val.replace(/"/g, '""')}"`;
}

test('CSV Sanitasi: netralkan formula diawali tanda sama dengan (=)', () => {
    const malicious = "=1+1";
    assert.equal(escapeCsvCell(malicious), `"\'=1+1"`);

    const dde = "=CMD|\' /C calc\'!A0";
    assert.equal(escapeCsvCell(dde), `"\'=CMD|\' /C calc\'!A0"`);
});

test('CSV Sanitasi: netralkan formula diawali tanda plus (+), minus (-), dan at (@)', () => {
    assert.equal(escapeCsvCell("+12345"), `"\' +12345"`.replace(' ', ''));
    assert.equal(escapeCsvCell("-5+5"), `"\' -5+5"`.replace(' ', ''));
    assert.equal(escapeCsvCell("@SUM(A1:A10)"), `"\'@SUM(A1:A10)"`);
});

test('CSV Sanitasi: netralkan formula dengan spasi di awal (leading spaces)', () => {
    const padded = "   =HYPERLINK(\"http://evil.com\")";
    assert.equal(escapeCsvCell(padded), `"\'   =HYPERLINK(\"\"http://evil.com\"\")"`);
});

test('CSV Sanitasi: netralkan formula diawali tab (\\t) atau carriage return (\\r)', () => {
    assert.equal(escapeCsvCell("\t=1+1"), `"\'\t=1+1"`);
    assert.equal(escapeCsvCell("\r=1+1"), `"\'\r=1+1"`);
});

test('CSV Sanitasi: teks biasa dan angka normal tidak dirusak', () => {
    assert.equal(escapeCsvCell("Budi Santoso"), `"Budi Santoso"`);
    assert.equal(escapeCsvCell("12 MIPA 1"), `"12 MIPA 1"`);
    assert.equal(escapeCsvCell("Good essay, well-structured!"), `"Good essay, well-structured!"`);
});

test('CSV Sanitasi: tanda petik ganda di-escape dengan benar', () => {
    assert.equal(escapeCsvCell('He said "Hello"'), '"He said ""Hello"""');
});

test('CSV Sanitasi: nilai null dan undefined menghasilkan string kosong', () => {
    assert.equal(escapeCsvCell(null), '""');
    assert.equal(escapeCsvCell(undefined), '""');
});
