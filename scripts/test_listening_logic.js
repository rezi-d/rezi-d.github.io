// Test Unit Logika IELTS Listening Engine & Keamanan Kunci Jawaban
const fs = require('fs');
const path = require('path');
const assert = require('assert');

// 1. Baca master test JSON
const masterPath = path.join(__dirname, '../worker/premium/listening/test1-master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

console.log('✓ Master file loaded successfully. Total sections:', masterData.sections.length);

// 2. Normalizer
function normalizeListeningAnswer(raw) {
    if (typeof raw !== 'string') return '';
    return raw
        .toLowerCase()
        .replace(/['"“”’‘]/g, '')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

assert.strictEqual(normalizeListeningAnswer('  Patterson  '), 'patterson');
assert.strictEqual(normalizeListeningAnswer('Bramble Way.'), 'bramble way');
assert.strictEqual(normalizeListeningAnswer('Town   Hall'), 'town hall');
assert.strictEqual(normalizeListeningAnswer('"Heavy metals"'), 'heavy metals');
assert.strictEqual(normalizeListeningAnswer('EH9 4TB'), 'eh9 4tb');
console.log('✓ Normalizer test PASSED.');

// 3. Band mapping
function calculateEstimatedBand(rawScore) {
    const score = Math.max(0, Math.min(40, parseInt(rawScore, 10) || 0));
    if (score >= 39) return 9.0;
    if (score >= 37) return 8.5;
    if (score >= 35) return 8.0;
    if (score >= 32) return 7.5;
    if (score >= 30) return 7.0;
    if (score >= 26) return 6.5;
    if (score >= 23) return 6.0;
    if (score >= 18) return 5.5;
    if (score >= 16) return 5.0;
    if (score >= 13) return 4.5;
    if (score >= 10) return 4.0;
    if (score >= 8)  return 3.5;
    if (score >= 6)  return 3.0;
    if (score >= 4)  return 2.5;
    return 2.0;
}

assert.strictEqual(calculateEstimatedBand(40), 9.0);
assert.strictEqual(calculateEstimatedBand(39), 9.0);
assert.strictEqual(calculateEstimatedBand(37), 8.5);
assert.strictEqual(calculateEstimatedBand(33), 7.5);
assert.strictEqual(calculateEstimatedBand(30), 7.0);
assert.strictEqual(calculateEstimatedBand(24), 6.0);
assert.strictEqual(calculateEstimatedBand(19), 5.5);
assert.strictEqual(calculateEstimatedBand(10), 4.0);
assert.strictEqual(calculateEstimatedBand(2), 2.0);
console.log('✓ Band score mapping test PASSED.');

// 4. Sanitize student payload (Answer key leakage protection)
function sanitizeTestForStudent(master) {
    const copy = JSON.parse(JSON.stringify(master));
    delete copy.transcripts;
    if (copy.sections && Array.isArray(copy.sections)) {
        copy.sections.forEach(sec => {
            if (sec.groups && Array.isArray(sec.groups)) {
                sec.groups.forEach(grp => {
                    if (grp.questions && Array.isArray(grp.questions)) {
                        grp.questions.forEach(q => {
                            delete q.answers;
                            delete q.hint;
                        });
                    }
                });
            }
        });
    }
    return copy;
}

const studentPayload = sanitizeTestForStudent(masterData);
assert.strictEqual(studentPayload.transcripts, undefined, 'Transcripts must be completely omitted in student payload');
const jsonStr = JSON.stringify(studentPayload);
assert.strictEqual(jsonStr.includes('"answers"'), false, 'Word "answers" must NOT appear in student payload');
assert.strictEqual(jsonStr.includes('"hint"'), false, 'Word "hint" must NOT appear in student payload');
console.log('✓ Security check: Answer keys and transcripts are 100% stripped from student payload!');

// 5. Grading simulation (40 questions)
const sampleStudentAnswers = {
    "1": "patterson",
    "2": "Bramble Way",
    "3": "EH9 4TB",
    "4": "student",
    "5": "24th November",
    "6": "30",
    "7": "48 hours",
    "8": "town hall",
    "9": "B",
    "10": "A",
    "11": "D",
    "12": "A",
    "13": "B",
    "14": "C",
    "15": "E",
    "16": "A",
    "17": "B",
    "18": "C",
    "19": "B",
    "20": "C",
    "21": "A",
    "22": "B",
    "23": "A",
    "24": "B",
    "25": "A",
    "26": "drainage outlets",
    "27": "heavy metals",
    "28": "air pump",
    "29": "spectroscopy",
    "30": "incineration",
    "31": "electricity",
    "32": "emissions",
    "33": "desert",
    "34": "food",
    "35": "chimney",
    "36": "air",
    "37": "cooling",
    "38": "concrete",
    "39": "night",
    "40": "energy"
};

let rawScore = 0;
const secScores = { s1: 0, s2: 0, s3: 0, s4: 0 };
(masterData.sections || []).forEach(sec => {
    const secKey = `s${sec.section_no}`;
    (sec.groups || []).forEach(grp => {
        (grp.questions || []).forEach(q => {
            const studentAns = String(sampleStudentAnswers[String(q.no)] || '').trim();
            const studentNorm = normalizeListeningAnswer(studentAns);
            const isCorrect = (q.answers || []).some(acc => normalizeListeningAnswer(acc) === studentNorm);
            if (isCorrect) {
                rawScore++;
                secScores[secKey]++;
            }
        });
    });
});

assert.strictEqual(rawScore, 40, `All 40 sample answers should be correct! Got: ${rawScore}`);
assert.strictEqual(calculateEstimatedBand(rawScore), 9.0);
console.log('✓ Full 40-question grading simulation PASSED: Raw Score 40/40, Band 9.0!');
console.log('\n🎉 ALL LOGIC AND SECURITY TESTS PASSED SUCCESSFULLY!');
