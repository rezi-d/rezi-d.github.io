import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PACKAGES_CONFIG, getPackageDetails } from '../worker/src/packages-config.js';

// Helper SHA-256
async function sha256Hex(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function generateToken(prefix = 'SNBT') {
    const bytes = crypto.getRandomValues(new Uint8Array(12));
    const chars = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
    const pfx = String(prefix || 'SNBT').trim().toUpperCase().startsWith('IELT') ? 'IELT' : 'SNBT';
    return `${pfx}-${chars.slice(0, 4)}-${chars.slice(4, 8)}-${chars.slice(8, 12)}`;
}

function validDeviceId(id) {
    return typeof id === 'string' && /^[A-Za-z0-9_-]{16,64}$/.test(id);
}

const DAY_MS = 86400000;

class MockD1 {
    constructor() {
        this.licenses = [];
        this.devices = [];
    }

    prepare(query) {
        const normalized = query.trim().replace(/\s+/g, ' ');
        return {
            bind: (...params) => ({
                first: async () => {
                    if (normalized.startsWith('SELECT * FROM licenses WHERE token_hash = ?')) {
                        const hash = params[0];
                        return this.licenses.find(l => l.token_hash === hash) || null;
                    }
                    if (normalized.startsWith('SELECT 1 AS ok FROM devices WHERE license_id = ? AND device_id = ?')) {
                        const [licId, devId] = params;
                        const d = this.devices.find(x => x.license_id === licId && x.device_id === devId);
                        return d ? { ok: 1 } : null;
                    }
                    if (normalized.startsWith('SELECT COUNT(*) AS n FROM devices WHERE license_id = ?')) {
                        const licId = params[0];
                        const count = this.devices.filter(x => x.license_id === licId).length;
                        return { n: count };
                    }
                    return null;
                },
                all: async () => {
                    return { results: this.licenses };
                },
                run: async () => {
                    if (normalized.startsWith('UPDATE licenses SET activated_at = ?, expires_at = ? WHERE id = ?')) {
                        const [act, exp, id] = params;
                        const lic = this.licenses.find(l => l.id === id);
                        if (lic) {
                            lic.activated_at = act;
                            lic.expires_at = exp;
                        }
                        return { changes: lic ? 1 : 0 };
                    }
                    if (normalized.startsWith('INSERT INTO devices (license_id, device_id, first_seen) VALUES (?, ?, ?)')) {
                        const [licId, devId, seen] = params;
                        this.devices.push({ license_id: licId, device_id: devId, first_seen: seen });
                        return { changes: 1 };
                    }
                    return { changes: 0 };
                }
            })
        };
    }
}

// Logika authorize dengan validasi package_type
async function authorize(env, token, deviceId, register, requiredPackage = null) {
    if (!token || !validDeviceId(deviceId)) {
        return { ok: false, status: 400, error: 'Token atau ID perangkat tidak valid.', reason: 'invalid_request' };
    }

    const hash = await sha256Hex(token);
    const lic = await env.DB.prepare('SELECT * FROM licenses WHERE token_hash = ?').bind(hash).first();
    if (!lic) return { ok: false, status: 401, error: 'Kode token tidak ditemukan.', reason: 'token_not_found' };
    if (lic.revoked) return { ok: false, status: 403, error: 'Lisensi ini telah dinonaktifkan (dicabut). Hubungi admin.', reason: 'token_revoked' };

    const packageType = String(lic.package_type || 'snbt').trim().toLowerCase();
    if (requiredPackage) {
        const req = String(requiredPackage).trim().toLowerCase();
        if (packageType !== req && packageType !== 'all') {
            return {
                ok: false,
                status: 403,
                error: `Lisensi ini khusus untuk paket ${packageType.toUpperCase()}, bukan untuk paket ${req.toUpperCase()}.`,
                reason: 'wrong_package'
            };
        }
    }

    const now = Date.now();
    let expiresAt = lic.expires_at;

    if (!lic.activated_at) {
        if (!register) return { ok: false, status: 403, error: 'Lisensi belum diaktifkan.', reason: 'not_activated' };
        expiresAt = now + lic.duration_days * DAY_MS;
        await env.DB.prepare('UPDATE licenses SET activated_at = ?, expires_at = ? WHERE id = ?')
            .bind(now, expiresAt, lic.id).run();
    }

    if (now > expiresAt) {
        return { ok: false, status: 403, error: 'Masa aktif lisensi sudah habis.', expiresAt, reason: 'token_expired' };
    }

    const device = await env.DB.prepare('SELECT 1 AS ok FROM devices WHERE license_id = ? AND device_id = ?')
        .bind(lic.id, deviceId).first();

    if (!device) {
        if (!register) return { ok: false, status: 403, error: 'Perangkat ini belum terdaftar untuk lisensi tersebut.', reason: 'unregistered_device' };
        const count = await env.DB.prepare('SELECT COUNT(*) AS n FROM devices WHERE license_id = ?').bind(lic.id).first();
        if (count.n >= lic.max_devices) {
            return {
                ok: false,
                status: 403,
                error: `Batas ${lic.max_devices} perangkat untuk lisensi ini sudah tercapai. Hubungi admin untuk reset.`,
                reason: 'max_devices_exceeded'
            };
        }
        await env.DB.prepare('INSERT INTO devices (license_id, device_id, first_seen) VALUES (?, ?, ?)')
            .bind(lic.id, deviceId, now).run();
    }

    return {
        ok: true,
        licenseId: lic.id,
        nama: lic.nama || '',
        packageType,
        expiresAt,
        remainingDays: Math.max(0, Math.ceil((expiresAt - now) / DAY_MS)),
        reason: 'success'
    };
}

// =====================================================================
// TEST SUITES TAHAP B3
// =====================================================================

test('B3.1: Konfigurasi Terpusat - PACKAGES_CONFIG memuat durasi 30 hari & harga Rp 35.000', () => {
    assert.ok(PACKAGES_CONFIG.ielts, 'Paket IELTS terdefinisi');
    assert.ok(PACKAGES_CONFIG.snbt, 'Paket SNBT terdefinisi');
    assert.equal(PACKAGES_CONFIG.admin_wa, '6285266601477');

    const ieltsPlan = PACKAGES_CONFIG.ielts.plans['30_days'];
    assert.equal(ieltsPlan.duration_days, 30);
    assert.equal(ieltsPlan.price_idr, 35000);
    assert.equal(ieltsPlan.price_formatted, 'Rp 35.000');

    const details = getPackageDetails('ielts', '30_days');
    assert.equal(details.package_id, 'ielts');
    assert.equal(details.duration_days, 30);
    assert.equal(details.price_formatted, 'Rp 35.000');
    assert.ok(Array.isArray(details.features));
    assert.ok(details.features.length >= 4);
});

test('B3.2: Generator Token - Format prefix IELT untuk IELTS dan SNBT untuk SNBT', () => {
    const ieltsToken = generateToken('ielts');
    assert.match(ieltsToken, /^IELT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);

    const snbtToken = generateToken('snbt');
    assert.match(snbtToken, /^SNBT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);
});

test('B3.3: Kompatibilitas Lisensi Lama - Lisensi tanpa package_type otomatis default ke snbt', async () => {
    const db = new MockD1();
    const token = 'SNBT-LEGACY-0001-TEST';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 1,
        token_hash: tokenHash,
        nama: 'Siswa Lama',
        wa: '0812000000',
        // package_type tidak ada (undefined / null)
        created_at: Date.now(),
        activated_at: null,
        expires_at: null,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });

    const env = { DB: db };
    const authRes = await authorize(env, token, 'dev_device_test_12345678', true);
    assert.equal(authRes.ok, true);
    assert.equal(authRes.packageType, 'snbt'); // Aman, otomatis default ke snbt
});

test('B3.4: Isolasi Paket - Token SNBT ditolak saat mencoba mengakses materi IELTS (wrong_package)', async () => {
    const db = new MockD1();
    const token = 'SNBT-SISWA-UTBK-0001';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 2,
        token_hash: tokenHash,
        nama: 'Budi UTBK',
        wa: '0812000001',
        package_type: 'snbt',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });

    const env = { DB: db };
    const authRes = await authorize(env, token, 'dev_device_test_12345678', false, 'ielts');
    assert.equal(authRes.ok, false);
    assert.equal(authRes.status, 403);
    assert.equal(authRes.reason, 'wrong_package');
    assert.match(authRes.error, /SNBT.*IELTS/i);
});

test('B3.5: Isolasi Paket - Token IELTS berhasil mengakses materi IELTS tetapi ditolak di materi SNBT', async () => {
    const db = new MockD1();
    const token = 'IELT-MANDIRI-TEST-002';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 3,
        token_hash: tokenHash,
        nama: 'Sarah IELTS',
        wa: '0812000002',
        package_type: 'ielts',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });
    db.devices.push({ license_id: 3, device_id: 'dev_sarah_laptop_001', first_seen: Date.now() });

    const env = { DB: db };

    // Akses materi IELTS -> Lolos
    const authIelts = await authorize(env, token, 'dev_sarah_laptop_001', false, 'ielts');
    assert.equal(authIelts.ok, true);
    assert.equal(authIelts.packageType, 'ielts');

    // Akses materi SNBT -> Ditolak (wrong_package)
    const authSnbt = await authorize(env, token, 'dev_sarah_laptop_001', false, 'snbt');
    assert.equal(authSnbt.ok, false);
    assert.equal(authSnbt.status, 403);
    assert.equal(authSnbt.reason, 'wrong_package');
});

test('B3.6: Paket Universal (all) - Dapat mengakses materi IELTS dan SNBT sekaligus', async () => {
    const db = new MockD1();
    const token = 'ALL-VIP-STUDENT-9999';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 4,
        token_hash: tokenHash,
        nama: 'VIP Student',
        wa: '0812000003',
        package_type: 'all',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });
    db.devices.push({ license_id: 4, device_id: 'dev_vip_pc_1234567890', first_seen: Date.now() });

    const env = { DB: db };
    const authIelts = await authorize(env, token, 'dev_vip_pc_1234567890', false, 'ielts');
    assert.equal(authIelts.ok, true);

    const authSnbt = await authorize(env, token, 'dev_vip_pc_1234567890', false, 'snbt');
    assert.equal(authSnbt.ok, true);
});

test('B3.7: Halaman UI Premium Saya - File ielts/premium-saya.html memuat komponen utama', () => {
    const htmlPath = path.resolve('ielts/premium-saya.html');
    assert.ok(fs.existsSync(htmlPath), 'File ielts/premium-saya.html harus ada');

    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    assert.match(htmlContent, /card-status-badge/i, 'Memuat elemen badge status');
    assert.match(htmlContent, /form-activate/i, 'Memuat form aktivasi');
    assert.match(htmlContent, /info-remaining-days/i, 'Memuat info sisa hari');
    assert.match(htmlContent, /Maks\. 2 HP\/PC/i, 'Menampilkan info batas 2 perangkat');
    assert.match(htmlContent, /Tanpa Penilaian Personal Guru/i, 'Mencantumkan catatan transparan ketiadaan koreksi guru');
    assert.match(htmlContent, /btn-buy-wa/i, 'Memuat tombol WhatsApp pembelian');
});
