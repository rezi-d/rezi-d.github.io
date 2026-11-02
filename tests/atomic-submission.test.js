import test from 'node:test';
import assert from 'node:assert/strict';

// Simulasi in-memory DB atomic state machine
class MockSessionTable {
    constructor() {
        this.sessions = new Map();
    }

    insert(session) {
        this.sessions.set(session.id, { ...session });
    }

    get(id) {
        const s = this.sessions.get(id);
        return s ? { ...s } : null;
    }

    updateAtomicSubmit(sessionId, updates) {
        const current = this.sessions.get(sessionId);
        if (!current) return { meta: { changes: 0 } };
        // WHERE id = ? AND status = 'in_progress'
        if (current.status !== 'in_progress') {
            return { meta: { changes: 0 } };
        }
        this.sessions.set(sessionId, {
            ...current,
            ...updates,
            status: 'submitted'
        });
        return { meta: { changes: 1 } };
    }
}

test('Submission: berhasil mengubah status dari in_progress ke submitted (1 row affected)', () => {
    const table = new MockSessionTable();
    table.insert({
        id: 'ws_test_1',
        nama: 'Ahmad',
        status: 'in_progress',
        task1_text: 'Draft 1'
    });

    const res = table.updateAtomicSubmit('ws_test_1', { task1_text: 'Final 1', submitted_at: Date.now() });
    assert.equal(res.meta.changes, 1);

    const updated = table.get('ws_test_1');
    assert.equal(updated.status, 'submitted');
    assert.equal(updated.task1_text, 'Final 1');
});

test('Submission: tolak submit ulang jika status sudah submitted (0 rows affected)', () => {
    const table = new MockSessionTable();
    table.insert({
        id: 'ws_test_2',
        nama: 'Budi',
        status: 'submitted',
        task1_text: 'Original Submitted Text',
        submitted_at: 1000
    });

    // Percobaan submit ulang kedua kalinya
    const res = table.updateAtomicSubmit('ws_test_2', { task1_text: 'Overwritten Text', submitted_at: 2000 });
    assert.equal(res.meta.changes, 0);

    const unchanged = table.get('ws_test_2');
    assert.equal(unchanged.task1_text, 'Original Submitted Text');
    assert.equal(unchanged.submitted_at, 1000);
});

test('Submission: lindungi nilai dan feedback guru dari penimpaan (status graded)', () => {
    const table = new MockSessionTable();
    table.insert({
        id: 'ws_test_3',
        nama: 'Citra',
        status: 'graded',
        task1_text: 'Original essay',
        writing_band: 7.5,
        task1_comment: 'Excellent coherence',
        graded_at: 5000
    });

    // Siswa mencoba submit ulang setelah dinilai guru
    const res = table.updateAtomicSubmit('ws_test_3', { task1_text: 'New malicious text' });
    assert.equal(res.meta.changes, 0);

    const preserved = table.get('ws_test_3');
    assert.equal(preserved.status, 'graded');
    assert.equal(preserved.writing_band, 7.5);
    assert.equal(preserved.task1_comment, 'Excellent coherence');
    assert.equal(preserved.task1_text, 'Original essay');
});
