import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { RETENTION_CONFIG } from '../worker/src/retention-config.js';
import worker, {
    hmacSha256Hex,
    getIpPepper,
    getIpHash,
    clientIp
} from '../worker/src/index.js';

const wranglerRaw = fs.readFileSync(path.resolve('worker/wrangler.jsonc'), 'utf-8');

// 1. UJI PENJADWALAN CRON UTC & DOKUMENTASI
test('Cron UTC: wrangler.jsonc dijadwalkan pada 19:00 UTC (02:00 WIB)', () => {
    assert.match(
        wranglerRaw,
        /"crons":\s*\[\s*"0 19 \* \* \*"\s*\]/,
        'wrangler.jsonc harus memiliki cron "0 19 * * *" (19:00 UTC = 02:00 WIB)'
    );
    assert.strictEqual(
        RETENTION_CONFIG.CRON_SCHEDULE_UTC,
        '0 19 * * *',
        'RETENTION_CONFIG harus mendokumentasikan CRON_SCHEDULE_UTC = "0 19 * * *"'
    );
    assert.strictEqual(
        RETENTION_CONFIG.CRON_SCHEDULE_WIB,
        '02:00 WIB',
        'RETENTION_CONFIG harus mendokumentasikan CRON_SCHEDULE_WIB = "02:00 WIB"'
    );
});

// 2. UJI HMAC-SHA256 IP PEPPER & ANTI-RAINBOW TABLE
test('HMAC IP Pepper: Hash IP berbeda dari raw SHA-256 dan bervariasi dengan pepper', async () => {
    const rawIp = '103.28.12.45';

    // Hitung raw SHA-256
    const enc = new TextEncoder();
    const rawBuf = await crypto.subtle.digest('SHA-256', enc.encode(rawIp));
    const rawSha256 = Array.from(new Uint8Array(rawBuf), b => b.toString(16).padStart(2, '0')).join('');

    // Hitung dengan pepper A dan pepper B
    const envA = { IP_PEPPER: 'secret-pepper-alpha-99' };
    const envB = { IP_PEPPER: 'secret-pepper-beta-88' };
    const envFallback = { ADMIN_KEY: 'admin-secret-2026' };

    const hashA = await getIpHash(rawIp, envA);
    const hashB = await getIpHash(rawIp, envB);
    const hashFallback = await getIpHash(rawIp, envFallback);

    // Panjang harus 24 karakter hex
    assert.strictEqual(hashA.length, 24, 'Panjang ip_hash harus 24 karakter');
    assert.strictEqual(hashB.length, 24, 'Panjang ip_hash harus 24 karakter');
    assert.match(hashA, /^[0-9a-f]{24}$/, 'ip_hash harus berupa karakter heksadesimal');

    // Tidak boleh sama dengan raw SHA-256 (mencegah rainbow table attack)
    assert.notStrictEqual(hashA, rawSha256.slice(0, 24), 'ip_hash dengan pepper tidak boleh sama dengan raw SHA-256');

    // Pepper yang berbeda harus menghasilkan hash yang berbeda
    assert.notStrictEqual(hashA, hashB, 'Dua pepper berbeda harus menghasilkan hash yang berbeda');
    assert.notStrictEqual(hashA, hashFallback, 'Hash pepper khusus harus berbeda dari fallback ADMIN_KEY');
});

test('HMAC IP Pepper: Secret terpisah env.IP_PEPPER (tanpa fallback ke ADMIN_KEY)', () => {
    assert.strictEqual(getIpPepper({ IP_PEPPER: 'pep-1', ADMIN_KEY: 'adm-2' }), 'pep-1');
    // Jika IP_PEPPER tidak ada, TIDAK boleh jatuh ke ADMIN_KEY
    assert.notStrictEqual(getIpPepper({ ADMIN_KEY: 'adm-2' }), 'adm-2');
    assert.strictEqual(getIpPepper({ ADMIN_KEY: 'adm-2' }), 'ajarkita-ip-pepper-secret-2026');
    assert.strictEqual(typeof getIpPepper({}), 'string');
    assert.ok(getIpPepper({}).length >= 16);
});

test('clientIp utility: Mengekstrak IP dari CF-Connecting-IP atau X-Forwarded-For', () => {
    const req1 = new Request('http://localhost', {
        headers: { 'CF-Connecting-IP': '1.2.3.4' }
    });
    assert.strictEqual(clientIp(req1), '1.2.3.4');

    const req2 = new Request('http://localhost', {
        headers: { 'X-Forwarded-For': '5.6.7.8, 10.0.0.1' }
    });
    assert.strictEqual(clientIp(req2), '5.6.7.8');

    const req3 = new Request('http://localhost');
    assert.strictEqual(clientIp(req3), '0.0.0.0');
});

// 3. UJI PROTEKSI SERVER: PAKET MANDIRI DILARANG MENULIS KE speaking_recordings (HTTP 403)
test('Server Lockdown: Paket Mandiri ditolak HTTP 403 saat mengunggah rekaman audio', async () => {
    const mockSessions = new Map();
    mockSessions.set('spk_mandiri_01', {
        id: 'spk_mandiri_01',
        device_id: 'dev_mandiri_123',
        status: 'in_progress',
        package_type: 'mandiri'
    });
    mockSessions.set('spk_selfstudy_02', {
        id: 'spk_selfstudy_02',
        device_id: 'dev_mandiri_123',
        status: 'in_progress',
        package_type: 'self_study'
    });
    mockSessions.set('spk_teacher_03', {
        id: 'spk_teacher_03',
        device_id: 'dev_guru_456',
        status: 'in_progress',
        package_type: 'teacher'
    });
    mockSessions.set('spk_addon_04', {
        id: 'spk_addon_04',
        device_id: 'dev_addon_789',
        status: 'in_progress',
        package_type: 'addon'
    });

    const mockDB = {
        prepare(query) {
            return {
                bind(...args) {
                    return {
                        async first() {
                            if (query.includes('SELECT id, device_id, status, package_type FROM speaking_sessions')) {
                                const id = args[0];
                                return mockSessions.get(id) || null;
                            }
                            if (query.includes('SELECT id FROM speaking_recordings')) {
                                return null;
                            }
                            if (query.includes('SELECT count(*)')) {
                                return { cnt: 0 };
                            }
                            return null;
                        },
                        async run() {
                            return { changes: 1 };
                        },
                        async all() {
                            return { results: [] };
                        }
                    };
                },
                async run() {
                    return { changes: 1 };
                }
            };
        }
    };

    const dummyAudioBase64 = Buffer.alloc(300, 0x41).toString('base64');
    const validPayload = (sessionId, deviceId) => JSON.stringify({
        sessionId,
        questionId: 'part1_q1',
        mimeType: 'audio/webm',
        audioData: dummyAudioBase64, // Valid Base64 300 bytes
        durationSeconds: 15,
        deviceId
    });

    // 1. Tes upload paket 'mandiri' -> Harus HTTP 403
    const reqMandiri = new Request('https://kimia.ajarkita.my.id/speaking/upload-recording', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Device-Id': 'dev_mandiri_123'
        },
        body: validPayload('spk_mandiri_01', 'dev_mandiri_123')
    });
    const resMandiri = await worker.fetch(reqMandiri, { DB: mockDB, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' });
    assert.strictEqual(resMandiri.status, 403, 'Paket mandiri harus menghasilkan HTTP 403 Forbidden');
    const jsonMandiri = await resMandiri.json();
    assert.strictEqual(jsonMandiri.ok, false);
    assert.match(jsonMandiri.error, /tidak tersedia untuk Paket Mandiri/i);

    // 2. Tes upload paket 'self_study' -> Harus HTTP 403
    const reqSelfStudy = new Request('https://kimia.ajarkita.my.id/speaking/upload-recording', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Device-Id': 'dev_mandiri_123'
        },
        body: validPayload('spk_selfstudy_02', 'dev_mandiri_123')
    });
    const resSelfStudy = await worker.fetch(reqSelfStudy, { DB: mockDB, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' });
    assert.strictEqual(resSelfStudy.status, 403, 'Paket self_study harus menghasilkan HTTP 403 Forbidden');

    // 3. Tes upload paket 'teacher' -> Harus diizinkan (HTTP 200)
    const reqTeacher = new Request('https://kimia.ajarkita.my.id/speaking/upload-recording', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Device-Id': 'dev_guru_456'
        },
        body: validPayload('spk_teacher_03', 'dev_guru_456')
    });
    const resTeacher = await worker.fetch(reqTeacher, { DB: mockDB, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' });
    assert.strictEqual(resTeacher.status, 200, 'Paket guru/teacher harus diizinkan HTTP 200');
    const jsonTeacher = await resTeacher.json();
    assert.strictEqual(jsonTeacher.ok, true);

    // 4. Tes upload paket 'addon' (Add-on Review Speaking Siswa) -> Harus diizinkan (HTTP 200)
    const reqAddon = new Request('https://kimia.ajarkita.my.id/speaking/upload-recording', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Device-Id': 'dev_addon_789'
        },
        body: validPayload('spk_addon_04', 'dev_addon_789')
    });
    const resAddon = await worker.fetch(reqAddon, { DB: mockDB, ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id' });
    assert.strictEqual(resAddon.status, 200, 'Paket addon harus diizinkan HTTP 200');
    const jsonAddon = await resAddon.json();
    assert.strictEqual(jsonAddon.ok, true);
});

// 4. UJI UNIVERSAL RETENTION: SAPU BERSIH SEMUA BARIS speaking_recordings
test('Universal Retention: Sapu bersih menyentuh semua baris kedaluwarsa & alias mandiri', async () => {
    let queriesExecuted = [];
    const mockDB = {
        prepare(query) {
            queriesExecuted.push(query);
            return {
                bind(...args) {
                    return {
                        async first() {
                            if (query.includes('SELECT COUNT(*) as cnt')) {
                                return { cnt: 5, total_bytes: 5242880 };
                            }
                            return null;
                        },
                        async all() {
                            if (query.includes("package_type = 'self_study' OR package_type = 'mandiri'")) {
                                return { results: [{ id: 'spk_mandiri_old' }] };
                            }
                            if (query.includes("status = 'graded'")) {
                                return { results: [{ id: 'spk_graded_old' }] };
                            }
                            if (query.includes("status != 'graded'")) {
                                return { results: [{ id: 'spk_ungraded_old' }] };
                            }
                            if (query.includes('SELECT DISTINCT session_id FROM speaking_recordings')) {
                                return { results: [{ session_id: 'spk_orphaned_row' }] };
                            }
                            return { results: [] };
                        },
                        async run() {
                            return { changes: 1 };
                        }
                    };
                },
                async run() {
                    return { changes: 1 };
                }
            };
        }
    };

    // Eksekusi scheduled cron
    await worker.scheduled({}, { DB: mockDB }, {});

    // Verifikasi query memuat filter alias mandiri dan self_study
    const hasMandiriFilter = queriesExecuted.some(q => 
        q.includes('package_type =') && q.includes('mandiri') && q.includes('self_study')
    );
    assert.ok(hasMandiriFilter, 'Query cron retention harus memeriksa package_type mandiri dan self_study');

    // Verifikasi pembersihan universal menyentuh tabel cleanup_logs
    const hasCleanupLog = queriesExecuted.some(q => q.includes('INSERT INTO cleanup_logs'));
    assert.ok(hasCleanupLog, 'Pembersihan cron harus mencatat audit log ke cleanup_logs');
});
