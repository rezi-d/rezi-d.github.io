import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function createMockLocalStorage(initialStore = {}) {
    const store = { ...initialStore };
    return {
        getItem(key) {
            return store[key] !== undefined ? store[key] : null;
        },
        setItem(key, val) {
            store[key] = String(val);
        },
        _store: store
    };
}

function getOrSetDeviceId(localStorage) {
    let dev = localStorage.getItem('ielts_shared_device_id');
    if (!dev) {
        dev = localStorage.getItem('ielts_listening_device_id') ||
              localStorage.getItem('ielts_reading_device_id') ||
              localStorage.getItem('ielts_writing_device_id') ||
              localStorage.getItem('ielts_speaking_device_id');
        if (!dev) {
            dev = 'dev_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
        }
        localStorage.setItem('ielts_shared_device_id', dev);
    }
    return dev;
}

test('Shared Device ID: gunakan ielts_shared_device_id jika sudah ada', () => {
    const storage = createMockLocalStorage({ 'ielts_shared_device_id': 'dev_existing_123' });
    const id = getOrSetDeviceId(storage);
    assert.strictEqual(id, 'dev_existing_123');
    assert.strictEqual(storage.getItem('ielts_shared_device_id'), 'dev_existing_123');
});

test('Shared Device ID: migrasi backward-compatible dari ielts_listening_device_id', () => {
    const storage = createMockLocalStorage({ 'ielts_listening_device_id': 'dev_legacy_listening' });
    const id = getOrSetDeviceId(storage);
    assert.strictEqual(id, 'dev_legacy_listening');
    assert.strictEqual(storage.getItem('ielts_shared_device_id'), 'dev_legacy_listening', 'Harus dimigrasikan ke ielts_shared_device_id');
});

test('Shared Device ID: migrasi backward-compatible dari ielts_writing_device_id jika listening kosong', () => {
    const storage = createMockLocalStorage({ 'ielts_writing_device_id': 'dev_legacy_writing' });
    const id = getOrSetDeviceId(storage);
    assert.strictEqual(id, 'dev_legacy_writing');
    assert.strictEqual(storage.getItem('ielts_shared_device_id'), 'dev_legacy_writing');
});

test('Shared Device ID: buat ID baru dengan prefix dev_ jika penyimpanan kosong', () => {
    const storage = createMockLocalStorage({});
    const id = getOrSetDeviceId(storage);
    assert.match(id, /^dev_[a-z0-9]+$/i);
    assert.strictEqual(storage.getItem('ielts_shared_device_id'), id);
});

test('Shared Device ID: keempat file engine frontend menggunakan ielts_shared_device_id', () => {
    const files = [
        'ielts/listening-engine.js',
        'ielts/reading-engine.js',
        'ielts/writing-engine.js',
        'ielts/speaking-engine.js'
    ];

    for (const f of files) {
        const content = fs.readFileSync(path.resolve(f), 'utf-8');
        assert.ok(
            content.includes('ielts_shared_device_id'),
            `File ${f} harus memuat referensi ielts_shared_device_id`
        );
    }
});
