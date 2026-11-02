import test from 'node:test';
import assert from 'node:assert/strict';

function extractStudentAnswerArray(raw) {
    if (raw == null) return [];
    if (Array.isArray(raw)) {
        return Array.from(new Set(
            raw.map(item => String(item || '').trim().slice(0, 100))
               .filter(Boolean)
               .slice(0, 5)
        ));
    }
    const single = String(raw).trim().slice(0, 100);
    return single ? [single] : [];
}

test('extractStudentAnswerArray: dedup elemen kembar ["B", "B"] menjadi ["B"]', () => {
    const input = ["B", "B"];
    const result = extractStudentAnswerArray(input);
    assert.deepEqual(result, ["B"]);
});

test('extractStudentAnswerArray: dedup elemen dengan spasi berbeda', () => {
    const input = ["apple", "  apple  ", "banana"];
    const result = extractStudentAnswerArray(input);
    assert.deepEqual(result, ["apple", "banana"]);
});

test('extractStudentAnswerArray: batas panjang array maksimal 5 elemen', () => {
    const input = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const result = extractStudentAnswerArray(input);
    assert.equal(result.length, 5);
    assert.deepEqual(result, ["A", "B", "C", "D", "E"]);
});

test('extractStudentAnswerArray: potong panjang tiap opsi maksimal 100 karakter', () => {
    const longString = "A".repeat(250);
    const result = extractStudentAnswerArray([longString]);
    assert.equal(result[0].length, 100);
});

test('extractStudentAnswerArray: bersihkan elemen kosong atau falsy', () => {
    const input = ["", null, "TRUE", undefined, "   ", "FALSE"];
    const result = extractStudentAnswerArray(input);
    assert.deepEqual(result, ["TRUE", "FALSE"]);
});

test('extractStudentAnswerArray: input non-array (string atau null)', () => {
    assert.deepEqual(extractStudentAnswerArray(null), []);
    assert.deepEqual(extractStudentAnswerArray(undefined), []);
    assert.deepEqual(extractStudentAnswerArray(""), []);
    assert.deepEqual(extractStudentAnswerArray("  Patterson  "), ["Patterson"]);
});
