import test from 'node:test';
import assert from 'node:assert/strict';

function evaluateSubmissionTiming(startedAtMs, submittedAtMs, officialDurationSeconds, gracePeriodSeconds = 60) {
    const elapsedSeconds = Math.floor((submittedAtMs - startedAtMs) / 1000);
    const isLate = elapsedSeconds > (officialDurationSeconds + gracePeriodSeconds);
    return {
        accepted: true,
        elapsedSeconds,
        isLate,
        status: 'submitted'
    };
}

test('Timing: submit tepat waktu dalam durasi resmi (tidak late)', () => {
    const started = 1000000;
    // Tes 60 menit (3600 detik). Siswa submit di menit ke-55 (3300 detik)
    const submitted = started + (3300 * 1000);
    const res = evaluateSubmissionTiming(started, submitted, 3600, 60);

    assert.equal(res.accepted, true);
    assert.equal(res.isLate, false);
    assert.equal(res.status, 'submitted');
});

test('Timing: submit dalam rentang toleransi 60 detik (grace period) tetap dianggap on-time', () => {
    const started = 1000000;
    // Tes 60 menit (3600 detik). Siswa submit di menit ke-60 lewat 45 detik (3645 detik)
    const submitted = started + (3645 * 1000);
    const res = evaluateSubmissionTiming(started, submitted, 3600, 60);

    assert.equal(res.accepted, true);
    assert.equal(res.isLate, false);
});

test('Timing: submit melewati toleransi 60 detik TETAP DITERIMA dan ditandai late', () => {
    const started = 1000000;
    // Tes 60 menit (3600 detik). Siswa submit di menit ke-63 (3780 detik)
    const submitted = started + (3780 * 1000);
    const res = evaluateSubmissionTiming(started, submitted, 3600, 60);

    // Jawaban TIDAK dibuang (accepted: true), status submitted, namun isLate: true
    assert.equal(res.accepted, true);
    assert.equal(res.isLate, true);
    assert.equal(res.status, 'submitted');
});

test('Timing: durasi Listening 40 menit dengan toleransi 60 detik', () => {
    const started = 1000000;
    const duration = 40 * 60; // 2400 detik

    // Submit pada 2450 detik (dalam toleransi 2460 detik)
    const res1 = evaluateSubmissionTiming(started, started + (2450 * 1000), duration, 60);
    assert.equal(res1.isLate, false);

    // Submit pada 2500 detik (lewat toleransi)
    const res2 = evaluateSubmissionTiming(started, started + (2500 * 1000), duration, 60);
    assert.equal(res2.isLate, true);
    assert.equal(res2.accepted, true);
});
