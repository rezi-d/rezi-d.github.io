import test from 'node:test';
import assert from 'node:assert/strict';

const ALLOWED_AUDIO_MIMES = ['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg'];

function parseAndValidateMime(rawMime) {
    if (!rawMime || typeof rawMime !== 'string') return { ok: false, error: 'MIME kosong' };
    const baseMime = rawMime.split(';')[0].trim().toLowerCase();
    if (!ALLOWED_AUDIO_MIMES.includes(baseMime)) {
        return { ok: false, status: 415, error: `Tipe tidak diizinkan: ${baseMime}` };
    }
    return { ok: true, baseMime };
}

function checkAudioPayloadSize(base64Str) {
    if (!base64Str || base64Str.length < 50) return { ok: false, status: 400, error: 'Data kosong' };
    // Max 1.2 MB binary = ~1,677,722 chars base64
    if (base64Str.length > 1677722) {
        return { ok: false, status: 413, error: 'Ukuran melebihi batas 1.2 MB' };
    }
    const byteLength = Math.round((base64Str.length * 3) / 4);
    return { ok: true, byteLength };
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

test('Batas Ukuran: tolak payload audio melebihi 1.2 MB (HTTP 413)', () => {
    const oversizedBase64 = 'A'.repeat(1677723);
    const res = checkAudioPayloadSize(oversizedBase64);
    assert.equal(res.ok, false);
    assert.equal(res.status, 413);
});

test('Batas Ukuran: terima payload audio valid di bawah 1.2 MB', () => {
    const validBase64 = 'A'.repeat(50000); // ~37.5 KB
    const res = checkAudioPayloadSize(validBase64);
    assert.equal(res.ok, true);
    assert.equal(res.byteLength, 37500);
});

test('HTTP Range Parser: mendukung request range Safari iOS (HTTP 206)', () => {
    const totalLen = 50000;
    const range = parseHttpRange('bytes=0-1023', totalLen);
    assert.equal(range.valid, true);
    assert.equal(range.status, 206);
    assert.equal(range.start, 0);
    assert.equal(range.end, 1023);
    assert.equal(range.chunkLength, 1024);
    assert.equal(range.contentRange, 'bytes 0-1023/50000');
});

test('HTTP Range Parser: tolak range invalid melebihi ukuran (HTTP 416)', () => {
    const totalLen = 1000;
    const range = parseHttpRange('bytes=5000-6000', totalLen);
    assert.equal(range.valid, false);
    assert.equal(range.status, 416);
});

test('Short-Lived Audio Token: tanda tangan valid dan verifikasi sukses', async () => {
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
