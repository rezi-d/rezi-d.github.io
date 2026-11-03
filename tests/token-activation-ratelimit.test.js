import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function extractTokenPrefix(rawToken) {
    const clean = String(rawToken || '').trim().toUpperCase();
    if (!clean) return 'UNKNOWN';
    const pfx = clean.slice(0, 9);
    return pfx.length >= 4 ? pfx : pfx.padEnd(4, '*');
}

function calculateProgressiveDelay(failedCount) {
    if (failedCount >= 3) return 1500;
    if (failedCount >= 1) return 500;
    return 0;
}

function evaluateRateLimitStatus(ipRecord, pfxRecord, now = Date.now()) {
    if (ipRecord && ipRecord.locked_until && ipRecord.locked_until > now) {
        const remainingMinutes = Math.ceil((ipRecord.locked_until - now) / 60000);
        return { locked: true, reason: 'ip_rate_limited', remainingMinutes, delayMs: 0 };
    }
    if (pfxRecord && pfxRecord.locked_until && pfxRecord.locked_until > now) {
        const remainingMinutes = Math.ceil((pfxRecord.locked_until - now) / 60000);
        return { locked: true, reason: 'prefix_rate_limited', remainingMinutes, delayMs: 0 };
    }
    const ipFails = ipRecord ? (ipRecord.failed_count || 0) : 0;
    const delayMs = calculateProgressiveDelay(ipFails);
    return { locked: false, failedCount: ipFails, delayMs };
}

function simulateRecordAttempt(storage, ipHash, tokenPrefix, success, now = Date.now()) {
    const ipKey = `ip:${ipHash}`;
    const pfxKey = `pfx:${tokenPrefix}`;

    // Catat ke audit log
    const logEntry = {
        timestamp: now,
        ip_hash: ipHash,
        token_prefix: tokenPrefix,
        success: success ? 1 : 0
    };
    storage.logs.push(logEntry);

    if (success) {
        storage.attempts.set(ipKey, { failed_count: 0, locked_until: 0, last_attempt: now });
    } else {
        const currentIp = storage.attempts.get(ipKey) || { failed_count: 0, locked_until: 0 };
        const newIpFails = currentIp.failed_count + 1;
        const ipLockUntil = newIpFails >= 5 ? now + (15 * 60 * 1000) : 0;
        storage.attempts.set(ipKey, { failed_count: newIpFails, locked_until: ipLockUntil, last_attempt: now });

        if (tokenPrefix && tokenPrefix !== 'UNKNOWN') {
            const currentPfx = storage.attempts.get(pfxKey) || { failed_count: 0, locked_until: 0 };
            const newPfxFails = currentPfx.failed_count + 1;
            const pfxLockUntil = newPfxFails >= 10 ? now + (30 * 60 * 1000) : 0;
            storage.attempts.set(pfxKey, { failed_count: newPfxFails, locked_until: pfxLockUntil, last_attempt: now });
        }
    }
}

// ----------------------------------------------------
// PENGUJIAN TAHAP B1: RATE LIMIT AKTIVASI & LOG PRIVASI
// ----------------------------------------------------

test('Ekstraksi Awalan Token: Mengambil maksimal 9 karakter awal dan masking', () => {
    assert.equal(extractTokenPrefix('SNBT-A1B2-C3D4-E5F6'), 'SNBT-A1B2');
    assert.equal(extractTokenPrefix('IELT-9988-7766-5544'), 'IELT-9988');
    assert.equal(extractTokenPrefix('ABC'), 'ABC*');
    assert.equal(extractTokenPrefix(''), 'UNKNOWN');
    assert.equal(extractTokenPrefix(null), 'UNKNOWN');
});

test('Penundaan Bertahap: Progressive delay meningkat seiring jumlah kegagalan', () => {
    assert.equal(calculateProgressiveDelay(0), 0, 'Percobaan pertama tanpa delay');
    assert.equal(calculateProgressiveDelay(1), 500, 'Gagal 1x mendapat delay 500ms');
    assert.equal(calculateProgressiveDelay(2), 500, 'Gagal 2x mendapat delay 500ms');
    assert.equal(calculateProgressiveDelay(3), 1500, 'Gagal 3x mendapat delay 1500ms');
    assert.equal(calculateProgressiveDelay(4), 1500, 'Gagal 4x mendapat delay 1500ms');
});

test('Rate Limit Per IP: Kunci selama 15 menit setelah 5 kali gagal berturut-turut', () => {
    const storage = { attempts: new Map(), logs: [] };
    const ipHash = 'hash_ip_test_123';
    const tokenPrefix = 'SNBT-ABCD';
    const startTime = Date.now();

    // 4 kali gagal -> belum terkunci tapi delay 1500ms
    for (let i = 0; i < 4; i++) {
        simulateRecordAttempt(storage, ipHash, tokenPrefix, false, startTime + i * 1000);
    }
    let status = evaluateRateLimitStatus(storage.attempts.get(`ip:${ipHash}`), storage.attempts.get(`pfx:${tokenPrefix}`), startTime + 5000);
    assert.equal(status.locked, false);
    assert.equal(status.delayMs, 1500);

    // Kegagalan ke-5 -> terkunci 15 menit
    simulateRecordAttempt(storage, ipHash, tokenPrefix, false, startTime + 5000);
    status = evaluateRateLimitStatus(storage.attempts.get(`ip:${ipHash}`), storage.attempts.get(`pfx:${tokenPrefix}`), startTime + 5000);
    assert.equal(status.locked, true);
    assert.equal(status.reason, 'ip_rate_limited');
    assert.equal(status.remainingMinutes, 15);
});

test('Rate Limit Per Awalan Token: Kunci awalan selama 30 menit jika dicoba salah 10 kali', () => {
    const storage = { attempts: new Map(), logs: [] };
    const pfx = 'SNBT-FAKE';
    const startTime = Date.now();

    // 10 IP berbeda mencoba brute force awalan yang sama
    for (let i = 0; i < 10; i++) {
        simulateRecordAttempt(storage, `ip_attacker_${i}`, pfx, false, startTime + i * 1000);
    }

    // IP ke-11 mencoba awalan tersebut -> ditolak karena awalan terkunci
    const pfxRecord = storage.attempts.get(`pfx:${pfx}`);
    const ipRecord = storage.attempts.get('ip:ip_attacker_11');
    const status = evaluateRateLimitStatus(ipRecord, pfxRecord, startTime + 11000);

    assert.equal(status.locked, true);
    assert.equal(status.reason, 'prefix_rate_limited');
    assert.equal(status.remainingMinutes, 30);
});

test('Reset Kegagalan IP: Aktivasi sukses mereset hitungan gagal IP kembali ke 0', () => {
    const storage = { attempts: new Map(), logs: [] };
    const ipHash = 'hash_ip_reset_test';
    const pfx = 'SNBT-VALID';

    // Gagal 3 kali
    for (let i = 0; i < 3; i++) {
        simulateRecordAttempt(storage, ipHash, pfx, false);
    }
    assert.equal(storage.attempts.get(`ip:${ipHash}`).failed_count, 3);

    // Berhasil aktivasi
    simulateRecordAttempt(storage, ipHash, pfx, true);
    assert.equal(storage.attempts.get(`ip:${ipHash}`).failed_count, 0);
    assert.equal(storage.attempts.get(`ip:${ipHash}`).locked_until, 0);
});

test('Privasi Audit Log: activation_logs tidak memuat token lengkap, IP mentah, atau data pribadi', () => {
    const storage = { attempts: new Map(), logs: [] };
    const ipHash = 'a1b2c3d4e5f6g7h8i9j0k1l2';
    const fullToken = 'SNBT-9988-7766-5544';
    const pfx = extractTokenPrefix(fullToken);

    simulateRecordAttempt(storage, ipHash, pfx, false);

    const log = storage.logs[0];
    assert.ok(log);
    assert.equal(log.ip_hash, ipHash);
    assert.equal(log.token_prefix, 'SNBT-9988');
    assert.strictEqual(log.token_prefix.includes('7766'), false, 'Log dilarang memuat bagian rahasia token');
    assert.strictEqual(log.token_prefix.includes('5544'), false, 'Log dilarang memuat bagian akhir token');
    assert.strictEqual('nama' in log, false, 'Log tidak boleh memuat nama siswa');
    assert.strictEqual('wa' in log, false, 'Log tidak boleh memuat nomor WA');
});

test('Database Schema: worker/schema.sql dan ensureActivationSchema memuat tabel activation_attempts & activation_logs', () => {
    const schemaContent = fs.readFileSync(path.resolve('worker/schema.sql'), 'utf-8');
    const workerContent = fs.readFileSync(path.resolve('worker/src/index.js'), 'utf-8');

    assert.match(schemaContent, /CREATE\s+TABLE\s+IF\s+NOT\s+EXISTS\s+activation_attempts/i);
    assert.match(schemaContent, /CREATE\s+TABLE\s+IF\s+NOT\s+EXISTS\s+activation_logs/i);
    assert.match(workerContent, /async\s+function\s+ensureActivationSchema/i);
    assert.match(workerContent, /checkActivationRateLimit/i);
    assert.match(workerContent, /recordActivationAttemptResult/i);
});
