import test from 'node:test';
import assert from 'node:assert/strict';

function sanitizeListeningTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
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

function sanitizeReadingTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
    if (copy.passages && Array.isArray(copy.passages)) {
        copy.passages.forEach(p => {
            if (p.groups && Array.isArray(p.groups)) {
                p.groups.forEach(grp => {
                    if (grp.questions && Array.isArray(grp.questions)) {
                        grp.questions.forEach(q => {
                            delete q.answers;
                            delete q.evidence;
                        });
                    }
                });
            }
        });
    }
    return copy;
}

function sanitizeWritingTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
    if (copy.tasks && Array.isArray(copy.tasks)) {
        copy.tasks.forEach(t => {
            delete t.sample_answer;
        });
    }
    return copy;
}

function sanitizeSpeakingTestForStudent(masterData) {
    const copy = JSON.parse(JSON.stringify(masterData));
    if (copy.part1 && Array.isArray(copy.part1.topics)) {
        copy.part1.topics.forEach(top => {
            if (Array.isArray(top.questions)) {
                top.questions.forEach(q => {
                    delete q.sample_answer;
                });
            }
        });
    }
    if (copy.part2) {
        delete copy.part2.sample_answer;
    }
    if (copy.part3 && Array.isArray(copy.part3.questions)) {
        copy.part3.questions.forEach(q => {
            delete q.sample_answer;
        });
    }
    return copy;
}

function buildWritingStatusPayload(session, master) {
    const isSubmittedOrGraded = session.status === 'submitted' || session.status === 'graded';
    const sampleAnswers = (isSubmittedOrGraded && master) ? master.tasks.map(t => ({
        task_no: t.task_no,
        sample_answer: t.sample_answer
    })) : [];

    return {
        ok: true,
        sessionId: session.id,
        status: session.status,
        structuralCheck: isSubmittedOrGraded ? (session.structural_check || {}) : {},
        sampleAnswers
    };
}

test('Listening: hapus answers, hint, dan transcripts sebelum submit', () => {
    const mockListening = {
        transcripts: { 1: "Raw transcript text..." },
        sections: [{
            groups: [{
                questions: [{ no: 1, answers: ["Patterson"], hint: "Listen carefully" }]
            }]
        }]
    };
    const sanitized = sanitizeListeningTestForStudent(mockListening);
    assert.equal(sanitized.transcripts, undefined);
    assert.equal(sanitized.sections[0].groups[0].questions[0].answers, undefined);
    assert.equal(sanitized.sections[0].groups[0].questions[0].hint, undefined);
});

test('Reading: hapus answers dan evidence sebelum submit', () => {
    const mockReading = {
        passages: [{
            groups: [{
                questions: [{ no: 1, answers: ["TRUE"], evidence: "Paragraph A line 3" }]
            }]
        }]
    };
    const sanitized = sanitizeReadingTestForStudent(mockReading);
    assert.equal(sanitized.passages[0].groups[0].questions[0].answers, undefined);
    assert.equal(sanitized.passages[0].groups[0].questions[0].evidence, undefined);
});

test('Writing: hapus sample_answer dari paket tes siswa', () => {
    const mockWriting = {
        tasks: [
            { task_no: 1, prompt: "Graph clean energy", sample_answer: { band: 8.0, text: "Sample text..." } },
            { task_no: 2, prompt: "AI in education", sample_answer: { band: 8.0, text: "Sample essay..." } }
        ]
    };
    const sanitized = sanitizeWritingTestForStudent(mockWriting);
    assert.equal(sanitized.tasks[0].sample_answer, undefined);
    assert.equal(sanitized.tasks[1].sample_answer, undefined);
});

test('Speaking: hapus sample_answer dari Part 1, 2, dan 3', () => {
    const mockSpeaking = {
        part1: { topics: [{ questions: [{ id: "q1", sample_answer: "I am from Bandung" }] }] },
        part2: { prompt: "Describe a book", sample_answer: { text: "I would like to talk about..." } },
        part3: { questions: [{ id: "q3", sample_answer: "In my opinion..." }] }
    };
    const sanitized = sanitizeSpeakingTestForStudent(mockSpeaking);
    assert.equal(sanitized.part1.topics[0].questions[0].sample_answer, undefined);
    assert.equal(sanitized.part2.sample_answer, undefined);
    assert.equal(sanitized.part3.questions[0].sample_answer, undefined);
});

test('Writing Status: sembunyikan sampleAnswers dan structuralCheck jika sesi masih in_progress', () => {
    const session = { id: 'ws_123', status: 'in_progress', structural_check: { task1: { valid: true } } };
    const master = { tasks: [{ task_no: 1, sample_answer: { band: 8.0 } }] };
    const payload = buildWritingStatusPayload(session, master);

    assert.deepEqual(payload.sampleAnswers, []);
    assert.deepEqual(payload.structuralCheck, {});
});

test('Writing Status: sertakan sampleAnswers dan structuralCheck jika sesi sudah submitted atau graded', () => {
    const session = { id: 'ws_123', status: 'submitted', structural_check: { task1: { valid: true } } };
    const master = { tasks: [{ task_no: 1, sample_answer: { band: 8.0 } }] };
    const payload = buildWritingStatusPayload(session, master);

    assert.equal(payload.sampleAnswers.length, 1);
    assert.equal(payload.sampleAnswers[0].sample_answer.band, 8.0);
    assert.deepEqual(payload.structuralCheck, { task1: { valid: true } });
});
