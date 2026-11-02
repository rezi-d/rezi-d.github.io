import test from 'node:test';
import assert from 'node:assert/strict';

function normalizeTextAnswer(raw) {
    if (typeof raw !== 'string') return '';
    return raw
        .toLowerCase()
        .replace(/['"“”’‘]/g, '')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

const normalizeListeningAnswer = normalizeTextAnswer;

test('normalizeTextAnswer: case-insensitivity dan lowercase', () => {
    assert.strictEqual(normalizeTextAnswer('Renewable Energy'), 'renewable energy');
    assert.strictEqual(normalizeTextAnswer('PHOTOSYNTHESIS'), 'photosynthesis');
});

test('normalizeTextAnswer: pembersihan tanda kutip lurus dan kurung/kurva', () => {
    assert.strictEqual(normalizeTextAnswer('"solar panel"'), 'solar panel');
    assert.strictEqual(normalizeTextAnswer('“clean water”'), 'clean water');
    assert.strictEqual(normalizeTextAnswer("it's"), 'its');
});

test('normalizeTextAnswer: konversi tanda baca ke spasi dan normalisasi multi-spasi', () => {
    assert.strictEqual(normalizeTextAnswer('well-known (fact)'), 'well known fact');
    assert.strictEqual(normalizeTextAnswer('salt, sugar; and water.'), 'salt sugar and water');
    assert.strictEqual(normalizeTextAnswer('   leading and   trailing   '), 'leading and trailing');
});

test('normalizeTextAnswer: tangani input non-string secara aman', () => {
    assert.strictEqual(normalizeTextAnswer(null), '');
    assert.strictEqual(normalizeTextAnswer(undefined), '');
    assert.strictEqual(normalizeTextAnswer(123), '');
    assert.strictEqual(normalizeTextAnswer({}), '');
});

test('normalizeTextAnswer: alias backward-compatible normalizeListeningAnswer', () => {
    assert.strictEqual(normalizeListeningAnswer, normalizeTextAnswer);
    assert.strictEqual(normalizeListeningAnswer('Test A'), normalizeTextAnswer('Test A'));
});
