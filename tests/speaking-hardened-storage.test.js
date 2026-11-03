import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_AUDIO_MIMES = ['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg'];

function parseAndValidateMime(rawMime) {
    if (!rawMime || typeof rawMime !== 'string') return { ok: false, error: 'MIME kosong' };
    const baseMime = rawMime.split(';')[0].trim().toLowerCase();
    if (!ALLOWED_AUDIO_MIMES.includes(baseMime)) {
        return { ok: false, status: 415, error: `Tipe tidak diizinkan: ${baseMime}` };
    }
    return { ok: true, baseMime };
}

function base64ToUint8Array(base64) {
    if (!base64 || typeof base64 !== 'string') return new Uint8Array(0);
    const clean = base64.replace(/\s+/g, '');
    const binaryString = atob(clean);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

function checkAudioPayloadSize(base64Str) {
    if (!base64Str || base64Str.length < 50) return { ok: false, status: 400, error: 'Data kosong' };
    // Batas ketat 1 MB binary (1.048.576 bytes / ~1.398.102 karakter Base64)
    if (base64Str.length > 1398102) {
        return { ok: false, status: 413, error: 'Ukuran rekaman audio melebihi batas 1 MB.' };
    }
    let audioBytes;
    try {
        audioBytes = base64ToUint8Array(base64Str);
    } catch {
        return { ok: false, status: 400, error: 'Format data rekaman audio Base64 tidak valid.' };
    }
    if (audioBytes.byteLength > 1048576) {
        return { ok: false, status: 413, error: 'Ukuran rekaman audio melebihi batas 1 MB.' };
    }
    return { ok: true, byteLength: audioBytes.byteLength, buffer: audioBytes.buffer };
}

function extractAudioBytesFromStorage(record) {
    if (!record || !record.audio_data || record.deleted_at) {
        return null;
    }
    let bytes;
    if (record.audio_data instanceof ArrayBuffer) {
        bytes = new Uint8Array(record.audio_data);
    } else if (ArrayBuffer.isView(record.audio_data)) {
        bytes = new Uint8Array(record.audio_data.buffer, record.audio_data.byteOffset, record.audio_data.byteLength);
    } else if (typeof record.audio_data === 'string' && record.audio_data.length > 0) {
        try {
            bytes = base64ToUint8Array(record.audio_data);
        } catch {
            bytes = new Uint8Array(0);
        }
    } else if (Array.isArray(record.audio_data)) {
        bytes = new Uint8Array(record.audio_data);
    } else {
        bytes = new Uint8Array(0);
    }
    if (bytes.byteLength === 0) return null;
    return bytes;
}

function getAudioResponseHeaders(mimeType, chunkLength, start, end, totalLen, isRange) {
    const headers = {
        'Content-Type': mimeType,
        'Accept-Ranges': 'bytes',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'private, no-store'
    };
    if (isRange) {
        headers['Content-Range'] = `bytes ${start}-${end}/${totalLen}`;
        headers['Content-Length'] = String(chunkLength);
    } else {
        headers['Content-Length'] = String(totalLen);
    }
    return headers;
}

function parseHttpRange(rangeHeader, totalLen) {
    if (!rangeHeader || !rangeHeader.startsWith('bytes=')) return null;
    const parts = rangeHeader.replace('bytes=', '').trim().split('-');
    let start = parseInt(parts[0], 10);
    let end = parts[1] ? parseInt(parts[1], 10) : totalLen - 1;

    if (isNaN(start)) {
        start = totalLen - end;
        end = totalLen - 1;
    }
    if (isNaN(end) || end >= totalLen) {
        end = totalLen - 1;
    }

    if (start > end || start >= totalLen) {
        return { valid: false, status: 416, contentRange: `bytes */${totalLen}` };
    }

    const chunkLength = end - start + 1;
    return {
        valid: true,
        status: 206,
        start,
        end,
        chunkLength,
        contentRange: `bytes ${start}-${end}/${totalLen}`
    };
}

async function generateAudioToken(sessionId, questionId, secret, ttlSeconds = 600) {
    const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
    const payload = `${sessionId}:${questionId}:${exp}`;
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
        'raw',
        enc.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
    const sigHex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
    return `${exp}.${sigHex}`;
}

async function verifyAudioToken(sessionId, questionId, tokenStr, secret) {
    if (!tokenStr || !secret) return false;
    const parts = tokenStr.split('.');
    if (parts.length !== 2) return false;
    const exp = parseInt(parts[0], 10);
    const sigHex = parts[1];
    if (isNaN(exp) || Math.floor(Date.now() / 1000) > exp) return false;

    const payload = `${sessionId}:${questionId}:${exp}`;
    const enc = new TextEncoder();
    try {
        const key = await crypto.subtle.importKey(
            'raw',
            enc.encode(secret),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['verify']
        );
        const match = sigHex.match(/.{1,2}/g);
        if (!match) return false;
        const expectedSig = new Uint8Array(match.map(byte => parseInt(byte, 16)));
        return await crypto.subtle.verify('HMAC', key, expectedSig, enc.encode(payload));
    } catch {
        return false;
    }
}

// ----------------------------------------------------
// PENGUJIAN TAHAP A3: KAPASITAS & REKAMAN
// ----------------------------------------------------

test('MIME Whitelist: menerima audio/webm dengan parameter codecs=opus dan ekstrak base MIME', () => {
    const res = parseAndValidateMime('audio/webm;codecs=opus');
    assert.equal(res.ok, true);
    assert.equal(res.baseMime, 'audio/webm');
});

test('MIME Whitelist: menerima iOS audio/mp4 dengan codecs="mp4a.40.2"', () => {
    const res = parseAndValidateMime('audio/mp4; codecs="mp4a.40.2"');
    assert.equal(res.ok, true);
    assert.equal(res.baseMime, 'audio/mp4');
});

test('MIME Whitelist: tolak tipe file non-audio berbahaya (Stored XSS prevention, HTTP 415)', () => {
    assert.equal(parseAndValidateMime('text/html').ok, false);
    assert.equal(parseAndValidateMime('application/javascript').ok, false);
    assert.equal(parseAndValidateMime('image/svg+xml').ok, false);
    assert.equal(parseAndValidateMime('application/pdf').ok, false);
});

test('Batas Ukuran: tolak payload audio melebihi batas ketat 1 MB (HTTP 413)', () => {
    // 1 MB binary = 1,048,576 bytes -> ~1,398,102 chars Base64
    const oversizedBase64 = 'A'.repeat(1398103);
    const res = checkAudioPayloadSize(oversizedBase64);
    assert.equal(res.ok, false);
    assert.equal(res.status, 413);
    assert.match(res.error, /melebihi batas 1 MB/i);
});

test('Batas Ukuran: terima payload audio valid di bawah batas 1 MB', () => {
    const sampleBytes = new Uint8Array([0x52, 0x49, 0x46, 0x46, 0x24, 0x00, 0x00, 0x00, 0x57, 0x41, 0x56, 0x45]);
    const validBase64 = btoa(String.fromCharCode(...sampleBytes)) + 'A'.repeat(60);
    const res = checkAudioPayloadSize(validBase64);
    assert.equal(res.ok, true);
    assert.ok(res.byteLength <= 1048576);
    assert.ok(res.buffer instanceof ArrayBuffer);
});

test('Konversi BLOB: base64ToUint8Array mengubah string base64 menjadi Uint8Array byte akurat', () => {
    const original = new Uint8Array([1, 2, 3, 4, 5, 250, 251, 255]);
    const b64 = btoa(String.fromCharCode(...original));
    const decoded = base64ToUint8Array(b64);
    assert.deepEqual(Array.from(decoded), Array.from(original));
});

test('Backward Compatibility: extractAudioBytesFromStorage membaca BLOB ArrayBuffer dan legacy Base64 string', () => {
    const testBytes = new Uint8Array([10, 20, 30, 40]);

    // 1. BLOB mentah (ArrayBuffer)
    const blobRecord = { audio_data: testBytes.buffer, deleted_at: null };
    const blobResult = extractAudioBytesFromStorage(blobRecord);
    assert.ok(blobResult instanceof Uint8Array);
    assert.deepEqual(Array.from(blobResult), [10, 20, 30, 40]);

    // 2. Legacy Base64 string
    const legacyB64 = btoa(String.fromCharCode(...testBytes));
    const legacyRecord = { audio_data: legacyB64, deleted_at: null };
    const legacyResult = extractAudioBytesFromStorage(legacyRecord);
    assert.ok(legacyResult instanceof Uint8Array);
    assert.deepEqual(Array.from(legacyResult), [10, 20, 30, 40]);

    // 3. Rekaman yang sudah dihapus (deleted_at terisi atau audio_data kosong)
    const deletedRecord = { audio_data: testBytes.buffer, deleted_at: 1700000000 };
    assert.equal(extractAudioBytesFromStorage(deletedRecord), null);

    const emptyRecord = { audio_data: '', deleted_at: null };
    assert.equal(extractAudioBytesFromStorage(emptyRecord), null);
});

test('HTTP Range Parser & Security Headers: mendukung request range Safari iOS (HTTP 206) dan X-Content-Type-Options: nosniff', () => {
    const totalLen = 50000;
    const range = parseHttpRange('bytes=0-1023', totalLen);
    assert.equal(range.valid, true);
    assert.equal(range.status, 206);
    assert.equal(range.start, 0);
    assert.equal(range.end, 1023);
    assert.equal(range.chunkLength, 1024);
    assert.equal(range.contentRange, 'bytes 0-1023/50000');

    // Cek header keamanan
    const headers = getAudioResponseHeaders('audio/webm', range.chunkLength, range.start, range.end, totalLen, true);
    assert.equal(headers['Content-Type'], 'audio/webm');
    assert.equal(headers['Accept-Ranges'], 'bytes');
    assert.equal(headers['X-Content-Type-Options'], 'nosniff');
    assert.equal(headers['Cache-Control'], 'private, no-store');
    assert.equal(headers['Content-Range'], 'bytes 0-1023/50000');
    assert.equal(headers['Content-Length'], '1024');
});

test('HTTP Range Parser: tolak range invalid melebihi ukuran (HTTP 416)', () => {
    const totalLen = 1000;
    const range = parseHttpRange('bytes=5000-6000', totalLen);
    assert.equal(range.valid, false);
    assert.equal(range.status, 416);
});

test('Short-Lived Audio Token: tanda tangan HMAC valid dan verifikasi sukses untuk streaming guru', async () => {
    const secret = 'SECRET-SUPER-KEY-2026';
    const token = await generateAudioToken('sess_123', 'q_part1_1', secret, 600);
    assert.equal(typeof token, 'string');

    const valid = await verifyAudioToken('sess_123', 'q_part1_1', token, secret);
    assert.equal(valid, true);

    // Tolak jika questionId berbeda
    const tamperedQuestion = await verifyAudioToken('sess_123', 'q_part1_2', token, secret);
    assert.equal(tamperedQuestion, false);

    // Tolak jika secret salah
    const wrongSecret = await verifyAudioToken('sess_123', 'q_part1_1', token, 'WRONG_SECRET');
    assert.equal(wrongSecret, false);
});

test('Database Schema: worker/schema.sql dan ensureSpeakingSchema mendefinisikan audio_data sebagai BLOB NOT NULL', () => {
    const schemaContent = fs.readFileSync(path.resolve('worker/schema.sql'), 'utf-8');
    const workerContent = fs.readFileSync(path.resolve('worker/src/index.js'), 'utf-8');

    assert.match(schemaContent, /audio_data\s+BLOB\s+NOT\s+NULL/i, 'worker/schema.sql harus mendefinisikan audio_data BLOB NOT NULL');
    assert.match(workerContent, /audio_data\s+BLOB\s+NOT\s+NULL/i, 'ensureSpeakingSchema harus mendefinisikan audio_data BLOB NOT NULL');
});
