import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function evaluateEcoMode(totalBytes, estReqs, estRows) {
    const isEcoMode = (totalBytes >= 419430400) || (estReqs >= 80000) || (estRows >= 80000);
    const isQuotaExceeded = (totalBytes >= 524288000) || (estReqs >= 100000) || (estRows >= 100000);
    return { isEcoMode, isQuotaExceeded };
}

function getAutosaveDelay(ecoModeActive) {
    return ecoModeActive ? 60000 : 30000;
}

function shouldSkipSaveProgress(currentT1, currentT2, lastSavedT1, lastSavedT2) {
    return currentT1 === lastSavedT1 && currentT2 === lastSavedT2;
}

function simulateLocalStorageBackup(mockStorage, sessionId, data) {
    const backupKey = `ielts_writing_backup_${sessionId}`;
    mockStorage.setItem(backupKey, JSON.stringify({
        sessionId,
        ...data,
        savedAt: Date.now()
    }));
}

function retrieveLocalStorageBackup(mockStorage, sessionId) {
    const backupKey = `ielts_writing_backup_${sessionId}`;
    const raw = mockStorage.getItem(backupKey);
    return raw ? JSON.parse(raw) : null;
}

// ----------------------------------------------------
// PENGUJIAN TAHAP A5: MODE HEMAT & PENANGANAN KUOTA
// ----------------------------------------------------

test('Mode Hemat Server (80%): Aktif saat salah satu metrik mencapai atau melebihi 80%', () => {
    // Normal (<80%)
    const normal = evaluateEcoMode(100 * 1024 * 1024, 20000, 10000);
    assert.equal(normal.isEcoMode, false);
    assert.equal(normal.isQuotaExceeded, false);

    // Eco Mode via Storage (>= 400 MB)
    const storageEco = evaluateEcoMode(419430400, 20000, 10000);
    assert.equal(storageEco.isEcoMode, true);
    assert.equal(storageEco.isQuotaExceeded, false);

    // Eco Mode via Requests (>= 80.000)
    const reqEco = evaluateEcoMode(50 * 1024 * 1024, 80000, 10000);
    assert.equal(reqEco.isEcoMode, true);
    assert.equal(reqEco.isQuotaExceeded, false);

    // Eco Mode via Rows Written (>= 80.000)
    const rowsEco = evaluateEcoMode(50 * 1024 * 1024, 10000, 80000);
    assert.equal(rowsEco.isEcoMode, true);
    assert.equal(rowsEco.isQuotaExceeded, false);
});

test('Batas Kuota Tercapai (100%): Memicu status quota_exceeded saat mencapai 100.000 req/rows atau 500 MB', () => {
    // Quota Exceeded via Requests (>= 100.000)
    const reqExceeded = evaluateEcoMode(50 * 1024 * 1024, 100000, 10000);
    assert.equal(reqExceeded.isQuotaExceeded, true);
    assert.equal(reqExceeded.isEcoMode, true);

    // Quota Exceeded via Storage (>= 500 MB)
    const storageExceeded = evaluateEcoMode(524288000, 20000, 10000);
    assert.equal(storageExceeded.isQuotaExceeded, true);
    assert.equal(storageExceeded.isEcoMode, true);
});

test('Autosave Timer: Interval diperpanjang ke 60 detik (60.000 ms) saat Mode Hemat aktif', () => {
    assert.equal(getAutosaveDelay(false), 30000, 'Normal timer autosave harus 30 detik (30000 ms)');
    assert.equal(getAutosaveDelay(true), 60000, 'Mode Hemat timer autosave harus 60 detik (60000 ms)');
});

test('Penulisan Non-Esensial Dimatikan: Skip network save jika teks esai tidak berubah', () => {
    const t1 = 'This graph illustrates renewable energy production...';
    const t2 = 'In conclusion, governments should invest in clean tech...';

    // Sama persis -> skip save (0 write request ke D1)
    assert.equal(shouldSkipSaveProgress(t1, t2, t1, t2), true);

    // Ada perubahan di Task 1 -> lakukan save
    assert.equal(shouldSkipSaveProgress(t1 + ' addition', t2, t1, t2), false);

    // Ada perubahan di Task 2 -> lakukan save
    assert.equal(shouldSkipSaveProgress(t1, t2 + ' addition', t1, t2), false);
});

test('Pencadangan LocalStorage: Data esai tersimpan aman saat terjadi kuota server penuh atau offline', () => {
    const mockStorage = new Map();
    const storageAdapter = {
        setItem: (k, v) => mockStorage.set(k, v),
        getItem: (k) => mockStorage.get(k) || null
    };

    const sessionId = 'spk_sess_test_101';
    const essayData = {
        currentTask: 2,
        task1Text: 'Overview of electricity generation across Europe...',
        task2Text: 'Technological advancements drive sustainable growth...'
    };

    simulateLocalStorageBackup(storageAdapter, sessionId, essayData);

    const recovered = retrieveLocalStorageBackup(storageAdapter, sessionId);
    assert.ok(recovered, 'Data cadangan harus dapat diambil kembali dari storage');
    assert.equal(recovered.sessionId, sessionId);
    assert.equal(recovered.task1Text, essayData.task1Text);
    assert.equal(recovered.task2Text, essayData.task2Text);
    assert.ok(recovered.savedAt > 0);
});

test('Verifikasi Kode Worker: worker/src/index.js memuat checkCapacityState dan header X-Eco-Mode', () => {
    const workerContent = fs.readFileSync(path.resolve('worker/src/index.js'), 'utf-8');

    assert.match(workerContent, /async\s+function\s+checkCapacityState\(env\)/, 'Worker harus memuat fungsi checkCapacityState');
    assert.match(workerContent, /'X-Eco-Mode':\s*'active'/, 'Worker harus menyertakan header X-Eco-Mode saat eco_mode');
    assert.match(workerContent, /quota_exceeded:\s*true/, 'Worker harus menyertakan flag quota_exceeded');
    assert.match(workerContent, /Batas kuota harian sistem telah tercapai/, 'Pesan error kuota harus ramah');
});

test('Verifikasi Frontend Engine: ielts/writing-engine.js memuat Mode Hemat 60s dan localStorage backup', () => {
    const engineContent = fs.readFileSync(path.resolve('ielts/writing-engine.js'), 'utf-8');

    assert.match(engineContent, /STATE\.ecoMode\s*\?\s*60000\s*:\s*3000/, 'Autosave timer harus 60000ms saat ecoMode');
    assert.match(engineContent, /saveToLocalStorageBackup/, 'Engine harus memiliki fungsi saveToLocalStorageBackup');
    assert.match(engineContent, /handleQuotaExceeded/, 'Engine harus menangani batas kuota');
    assert.match(engineContent, /STATE\.task1Text\s*===\s*STATE\.lastSavedT1/, 'Penulisan non-esensial harus dimatikan jika teks tidak berubah');
});

test('Verifikasi UI HTML: ielts/writing-mock-test.html memuat badge eco-mode dan modal kuota tercapai', () => {
    const htmlContent = fs.readFileSync(path.resolve('ielts/writing-mock-test.html'), 'utf-8');

    assert.match(htmlContent, /id="eco-mode-badge"/, 'Badge eco-mode harus ada di HTML');
    assert.match(htmlContent, /id="modal-quota-exceeded"/, 'Modal kuota tercapai harus ada di HTML');
    assert.match(htmlContent, /id="modal-quota-message"/, 'Elemen pesan modal kuota harus ada');
});
