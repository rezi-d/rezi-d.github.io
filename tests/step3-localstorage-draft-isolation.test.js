import { test } from 'node:test';
import assert from 'node:assert';
import {
    normalizeTestId,
    getDraftStorageKey,
    getSessionStorageKey,
    getLegacyDraftKeys,
    loadModuleDraft,
    saveModuleDraft,
    clearModuleDraft
} from '../worker/src/packages-config.js';

// Mock Web Storage (localStorage API)
function createMockStorage(initialData = {}) {
    const store = new Map(Object.entries(initialData));
    return {
        getItem(key) {
            return store.has(key) ? store.get(key) : null;
        },
        setItem(key, val) {
            store.set(key, String(val));
        },
        removeItem(key) {
            store.delete(key);
        },
        clear() {
            store.clear();
        },
        get length() {
            return store.size;
        },
        key(index) {
            const keys = Array.from(store.keys());
            return keys[index] || null;
        },
        _dump() {
            return Object.fromEntries(store.entries());
        }
    };
}

// =====================================================================
// 1. UJI FORMAT KUNCI STANDAR DRAF & AUTOSAVE (ajarkita:{test_id}:{modul}:draft)
// =====================================================================

test('Tahap 3: Format kunci standar draf adalah ajarkita:{test_id}:{modul}:draft dengan normalisasi test_id', () => {
    // 4 Modul IELTS
    const modules = ['listening', 'reading', 'writing', 'speaking'];

    for (const mod of modules) {
        // Mock 1 aliases
        assert.strictEqual(getDraftStorageKey('1', mod), `ajarkita:test1:${mod}:draft`);
        assert.strictEqual(getDraftStorageKey('test1', mod), `ajarkita:test1:${mod}:draft`);
        assert.strictEqual(getDraftStorageKey(`${mod}1`, mod), `ajarkita:test1:${mod}:draft`);
        assert.strictEqual(getDraftStorageKey(null, mod), `ajarkita:test1:${mod}:draft`);
        assert.strictEqual(getDraftStorageKey('', mod), `ajarkita:test1:${mod}:draft`);

        // Mock 2 aliases
        assert.strictEqual(getDraftStorageKey('2', mod), `ajarkita:test2:${mod}:draft`);
        assert.strictEqual(getDraftStorageKey('test2', mod), `ajarkita:test2:${mod}:draft`);
        assert.strictEqual(getDraftStorageKey(`${mod}2`, mod), `ajarkita:test2:${mod}:draft`);

        // Mock 3 aliases
        assert.strictEqual(getDraftStorageKey('3', mod), `ajarkita:test3:${mod}:draft`);
        assert.strictEqual(getDraftStorageKey('test3', mod), `ajarkita:test3:${mod}:draft`);

        // Session ID key format
        assert.strictEqual(getSessionStorageKey('1', mod), `ajarkita:test1:${mod}:session_id`);
        assert.strictEqual(getSessionStorageKey('test2', mod), `ajarkita:test2:${mod}:session_id`);
    }
});

// =====================================================================
// 2. UJI ISOLASI DRAF ANTARA MOCK 1 DAN MOCK 2 (Draf Test 1 tidak muncul di Test 2)
// =====================================================================

test('Tahap 3: Draf Test 1 tidak muncul di Test 2 dan tidak saling menimpa', () => {
    const storage = createMockStorage();

    // 1. Simpan draf Writing di Mock 1
    const t1Payload = {
        sessionId: 'ws_test1_session',
        deviceId: 'dev_user_1',
        nama: 'Ahmad Siswa',
        kelas: '12 IPA 1',
        task1Text: 'Laporan visual Task 1 Mock 1 yang panjang.',
        task2Text: 'Esai opini Task 2 Mock 1.',
        savedAt: 1730700000000
    };
    const savedT1 = saveModuleDraft('test1', 'writing', t1Payload, { storage });
    assert.strictEqual(savedT1, true);

    // Pastikan tersimpan di kunci spesifik test1
    assert.ok(storage.getItem('ajarkita:test1:writing:draft'));
    assert.strictEqual(storage.getItem('ajarkita:test2:writing:draft'), null);

    // 2. Buka Test 2: pastikan draf Test 1 TIDAK muncul di Test 2
    const t2DraftBefore = loadModuleDraft('test2', 'writing', { storage });
    assert.strictEqual(t2DraftBefore, null, 'Draf Test 1 tidak boleh muncul di Test 2!');

    // 3. Simpan draf Writing di Mock 2
    const t2Payload = {
        sessionId: 'ws_test2_session',
        deviceId: 'dev_user_1',
        nama: 'Ahmad Siswa',
        kelas: '12 IPA 1',
        task1Text: 'Grafik Task 1 Mock 2 yang berbeda.',
        task2Text: 'Argumen Task 2 Mock 2.',
        savedAt: 1730700050000
    };
    const savedT2 = saveModuleDraft('test2', 'writing', t2Payload, { storage });
    assert.strictEqual(savedT2, true);

    // 4. Verifikasi bahwa draf Mock 1 dan Mock 2 tersimpan terpisah
    const loadedT1 = loadModuleDraft('test1', 'writing', { storage });
    const loadedT2 = loadModuleDraft('test2', 'writing', { storage });

    assert.strictEqual(loadedT1.sessionId, 'ws_test1_session');
    assert.strictEqual(loadedT1.task1Text, 'Laporan visual Task 1 Mock 1 yang panjang.');
    assert.strictEqual(loadedT1.testId, 'test1');

    assert.strictEqual(loadedT2.sessionId, 'ws_test2_session');
    assert.strictEqual(loadedT2.task1Text, 'Grafik Task 1 Mock 2 yang berbeda.');
    assert.strictEqual(loadedT2.testId, 'test2');

    // 5. Submit Mock 1 (hapus draf Mock 1): Mock 2 tetap utuh
    clearModuleDraft('test1', 'writing', { storage, sessionId: 'ws_test1_session' });
    assert.strictEqual(loadModuleDraft('test1', 'writing', { storage }), null);
    assert.notStrictEqual(loadModuleDraft('test2', 'writing', { storage }), null);
    assert.strictEqual(loadModuleDraft('test2', 'writing', { storage }).task1Text, 'Grafik Task 1 Mock 2 yang berbeda.');
});

// =====================================================================
// 3. UJI MIGRASI DRAF LAMA KE TEST 1 TANPA ERROR & ZERO DATA LOSS
// =====================================================================

test('Tahap 3: Draf lama tanpa test_id dimigrasikan ke test1 secara transparan tanpa kehilangan data', () => {
    // Simulasi penyimpanan siswa lama sebelum migrasi Tahap 3:
    const storage = createMockStorage({
        'ielts_writing_session_id': 'ws_legacy_999',
        'ielts_writing_backup_ws_legacy_999': JSON.stringify({
            sessionId: 'ws_legacy_999',
            deviceId: 'dev_legacy_abc',
            task1Text: 'Tulisan lama Task 1 yang sedang dikerjakan siswa.',
            task2Text: 'Draft tulisan Task 2 lama.',
            savedAt: 1730600000000
        }),
        'ielts_reading_session_id': 'rd_legacy_888',
        'ielts_reading_backup_rd_legacy_888': JSON.stringify({
            sessionId: 'rd_legacy_888',
            answers: { 1: 'TRUE', 2: 'FALSE', 3: 'NOT GIVEN' },
            currentPassage: 2,
            savedAt: 1730600000000
        }),
        'ielts_listening_session_id': 'ls_legacy_777',
        'ielts_listening_backup_ls_legacy_777': JSON.stringify({
            sessionId: 'ls_legacy_777',
            answers: { 1: 'information', 2: 'A' },
            currentSec: 1,
            savedAt: 1730600000000
        })
    });

    // 1. Siswa membuka Writing Mock 1:
    const writingDraft = loadModuleDraft('test1', 'writing', { storage });
    assert.ok(writingDraft, 'Draf lama siswa harus berhasil dimuat');
    assert.strictEqual(writingDraft.task1Text, 'Tulisan lama Task 1 yang sedang dikerjakan siswa.');
    assert.strictEqual(writingDraft.testId, 'test1');

    // Pastikan otomatis tersimpan di kunci standar baru
    assert.ok(storage.getItem('ajarkita:test1:writing:draft'));
    assert.strictEqual(storage.getItem('ajarkita:test1:writing:session_id'), 'ws_legacy_999');

    // 2. Siswa membuka Reading Mock 1:
    const readingDraft = loadModuleDraft('test1', 'reading', { storage });
    assert.ok(readingDraft);
    assert.strictEqual(readingDraft.answers[1], 'TRUE');
    assert.ok(storage.getItem('ajarkita:test1:reading:draft'));

    // 3. Siswa membuka Listening Mock 1:
    const listeningDraft = loadModuleDraft('test1', 'listening', { storage });
    assert.ok(listeningDraft);
    assert.strictEqual(listeningDraft.answers[1], 'information');
    assert.ok(storage.getItem('ajarkita:test1:listening:draft'));

    // 4. Verifikasi bahwa draf legacy ini TIDAK termigrasi ke Mock 2 jika dibuka di Mock 2
    const storage2 = createMockStorage({
        'ielts_writing_session_id': 'ws_legacy_999',
        'ielts_writing_backup_ws_legacy_999': JSON.stringify({
            task1Text: 'Tulisan lama Test 1'
        })
    });
    const mock2Check = loadModuleDraft('test2', 'writing', { storage: storage2 });
    assert.strictEqual(mock2Check, null, 'Draf legacy Test 1 TIDAK boleh termigrasi atau muncul di Test 2');
    assert.strictEqual(storage2.getItem('ajarkita:test2:writing:draft'), null);
});

// =====================================================================
// 4. UJI DATA RUSAK / CORRUPT DIABAIKAN AMAN TANPA CRASH JAVASCRIPT
// =====================================================================

test('Tahap 3: Draf korup / bukan JSON valid diabaikan dengan aman tanpa memicu crash', () => {
    const storage = createMockStorage({
        'ajarkita:test1:writing:draft': 'CORRUPT_NOT_JSON_{{[}',
        'ielts_writing_backup_corrupt': 'MALFORMED_DATA_ABC'
    });

    // Harus menangani kesalahan parsing secara halus dan mengembalikan null tanpa melempar exception
    assert.doesNotThrow(() => {
        const res = loadModuleDraft('test1', 'writing', { storage });
        assert.strictEqual(res, null);
    });

    assert.doesNotThrow(() => {
        const saved = saveModuleDraft('test1', 'writing', null, { storage });
        assert.strictEqual(saved, false);
    });
});

// =====================================================================
// 5. UJI INTEGRITAS SPEAKING DRAFT DI LOCALSTORAGE
// =====================================================================

test('Tahap 3: Speaking notes dan sesi tersimpan di format ajarkita:{test_id}:speaking:draft', () => {
    const storage = createMockStorage();

    const speakingData = {
        sessionId: 'spk_sess_001',
        part2Notes: 'Catatan Part 2: 1. Main idea, 2. Supporting details',
        currentIndex: 4
    };

    saveModuleDraft('test1', 'speaking', speakingData, { storage });
    assert.ok(storage.getItem('ajarkita:test1:speaking:draft'));
    assert.strictEqual(storage.getItem('ajarkita:test1:speaking:session_id'), 'spk_sess_001');

    const loaded = loadModuleDraft('test1', 'speaking', { storage });
    assert.strictEqual(loaded.part2Notes, 'Catatan Part 2: 1. Main idea, 2. Supporting details');
    assert.strictEqual(loaded.currentIndex, 4);

    // Mock 2 tidak memiliki data ini
    assert.strictEqual(loadModuleDraft('test2', 'speaking', { storage }), null);
});
