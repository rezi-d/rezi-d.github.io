import test from 'node:test';
import assert from 'node:assert/strict';

// Helper SHA-256
async function sha256Hex(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

function normalizeToken(raw) {
    return String(raw || '').trim().toUpperCase();
}

function validDeviceId(id) {
    return typeof id === 'string' && /^[A-Za-z0-9_-]{16,64}$/.test(id);
}

function timingSafeEqual(a, b) {
    const enc = new TextEncoder();
    const x = enc.encode(String(a));
    const y = enc.encode(String(b));
    if (x.length !== y.length) return false;
    let diff = 0;
    for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
    return diff === 0;
}

function isAdmin(key, adminKeySecret) {
    return !!adminKeySecret && key.length > 0 && timingSafeEqual(key, adminKeySecret);
}

// In-Memory SQLite Mock for D1 Database
class MockD1 {
    constructor() {
        this.licenses = []; // { id, token_hash, nama, wa, created_at, activated_at, expires_at, duration_days, max_devices, revoked }
        this.devices = [];  // { license_id, device_id, first_seen }
        this.nextId = 1;
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
                    if (normalized.startsWith('SELECT id, nama, wa, duration_days, max_devices, revoked, expires_at FROM licenses WHERE id = ?')) {
                        const id = params[0];
                        const l = this.licenses.find(x => x.id === id);
                        return l ? { ...l } : null;
                    }
                    if (normalized.startsWith('SELECT id, nama, wa, duration_days, max_devices, revoked, expires_at FROM licenses WHERE token_hash = ?')) {
                        const hash = params[0];
                        const l = this.licenses.find(x => x.token_hash === hash);
                        return l ? { ...l } : null;
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
                    if (normalized.includes('FROM licenses l')) {
                        return {
                            results: this.licenses.map(l => ({
                                ...l,
                                devices: this.devices.filter(d => d.license_id === l.id).length
                            }))
                        };
                    }
                    return { results: [] };
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
                    if (normalized.startsWith('DELETE FROM devices WHERE license_id = ?')) {
                        const licId = params[0];
                        const prevLen = this.devices.length;
                        this.devices = this.devices.filter(d => d.license_id !== licId);
                        return { changes: prevLen - this.devices.length };
                    }
                    if (normalized.startsWith('UPDATE licenses SET revoked = ? WHERE id = ?')) {
                        const [rev, id] = params;
                        const lic = this.licenses.find(l => l.id === id);
                        if (lic) lic.revoked = rev;
                        return { changes: lic ? 1 : 0 };
                    }
                    return { changes: 0 };
                }
            })
        };
    }
}

const DAY_MS = 86400000;

// Logika authorize dari worker/src/index.js
async function authorize(env, token, deviceId, register) {
    if (!token || !validDeviceId(deviceId)) {
        return { ok: false, status: 400, error: 'Token atau ID perangkat tidak valid.', reason: 'invalid_request' };
    }

    const hash = await sha256Hex(token);
    const lic = await env.DB.prepare('SELECT * FROM licenses WHERE token_hash = ?').bind(hash).first();
    if (!lic) return { ok: false, status: 401, error: 'Kode token tidak ditemukan.', reason: 'token_not_found' };
    if (lic.revoked) return { ok: false, status: 403, error: 'Lisensi ini telah dinonaktifkan (dicabut). Hubungi admin.', reason: 'token_revoked' };

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
        expiresAt,
        remainingDays: Math.max(0, Math.ceil((expiresAt - now) / DAY_MS)),
        reason: 'success'
    };
}

// Logika resolveAdminLicense dari worker/src/index.js
async function resolveAdminLicense(env, body) {
    if (!body || typeof body !== 'object') return null;
    let lic = null;
    const id = parseInt(body.id, 10);
    if (id && id > 0) {
        lic = await env.DB.prepare('SELECT id, nama, wa, duration_days, max_devices, revoked, expires_at FROM licenses WHERE id = ?').bind(id).first();
    }
    if (!lic && typeof body.token === 'string' && body.token.trim()) {
        const norm = normalizeToken(body.token);
        const hash = await sha256Hex(norm);
        lic = await env.DB.prepare('SELECT id, nama, wa, duration_days, max_devices, revoked, expires_at FROM licenses WHERE token_hash = ?').bind(hash).first();
    }
    return lic;
}

// Handler admin reset-devices
async function handleAdminResetDevices(env, adminKey, body) {
    if (!isAdmin(adminKey, env.ADMIN_KEY)) {
        return { ok: false, status: 401, error: 'Tidak berwenang.' };
    }
    const lic = await resolveAdminLicense(env, body);
    if (!lic) return { ok: false, status: 404, error: 'Lisensi tidak ditemukan (ID atau token tidak valid).' };

    const delRes = await env.DB.prepare('DELETE FROM devices WHERE license_id = ?').bind(lic.id).run();
    return {
        ok: true,
        licenseId: lic.id,
        nama: lic.nama || '',
        maxDevices: lic.max_devices || 2,
        clearedDevices: delRes.changes || 0,
        message: `Berhasil mereset binding perangkat untuk lisensi #${lic.id}. Siswa dapat mendaftarkan ulang hingga ${lic.max_devices || 2} perangkat.`
    };
}

// Handler admin revoke / unrevoke
async function handleAdminRevoke(env, adminKey, body, action = 'revoke') {
    if (!isAdmin(adminKey, env.ADMIN_KEY)) {
        return { ok: false, status: 401, error: 'Tidak berwenang.' };
    }
    const lic = await resolveAdminLicense(env, body);
    if (!lic) return { ok: false, status: 404, error: 'Lisensi tidak ditemukan (ID atau token tidak valid).' };

    const isUnrevoke = action === 'unrevoke' || body.unrevoke === true || body.action === 'unrevoke';
    const targetRevoked = isUnrevoke ? 0 : 1;

    await env.DB.prepare('UPDATE licenses SET revoked = ? WHERE id = ?').bind(targetRevoked, lic.id).run();

    let devicesCleared = 0;
    if (targetRevoked === 1) {
        const delRes = await env.DB.prepare('DELETE FROM devices WHERE license_id = ?').bind(lic.id).run();
        devicesCleared = delRes.changes || 0;
    }

    return {
        ok: true,
        licenseId: lic.id,
        nama: lic.nama || '',
        revoked: targetRevoked,
        devicesCleared,
        message: targetRevoked === 1
            ? `Lisensi #${lic.id} berhasil dicabut (refund/dinonaktifkan). Akses server ditolak.`
            : `Lisensi #${lic.id} berhasil diaktifkan kembali (unrevoked).`
    };
}

// =====================================================================
// TEST SUITES TAHAP B2
// =====================================================================

test('B2.1: Batas 2 Perangkat - Siswa berhasil mendaftarkan perangkat 1 dan perangkat 2', async () => {
    const db = new MockD1();
    const token = 'SNBT-ABCD-EFGH-JKLM';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 1,
        token_hash: tokenHash,
        nama: 'Budi Santoso',
        wa: '081234567890',
        created_at: Date.now(),
        activated_at: null,
        expires_at: null,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    // Daftarkan Perangkat 1
    const res1 = await authorize(env, token, 'dev_laptop_budi_001', true);
    assert.equal(res1.ok, true);
    assert.equal(res1.reason, 'success');
    assert.equal(db.devices.length, 1);

    // Daftarkan Perangkat 2
    const res2 = await authorize(env, token, 'dev_smartphone_budi_002', true);
    assert.equal(res2.ok, true);
    assert.equal(res2.reason, 'success');
    assert.equal(db.devices.length, 2);
});

test('B2.2: Batas 2 Perangkat - Perangkat ke-3 ditolak secara server-side (max_devices_exceeded)', async () => {
    const db = new MockD1();
    const token = 'SNBT-ABCD-EFGH-JKLM';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 1,
        token_hash: tokenHash,
        nama: 'Budi Santoso',
        wa: '081234567890',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });
    db.devices.push({ license_id: 1, device_id: 'dev_laptop_budi_001', first_seen: Date.now() });
    db.devices.push({ license_id: 1, device_id: 'dev_smartphone_budi_002', first_seen: Date.now() });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    // Coba daftarkan perangkat ke-3 (misal tablet teman)
    const res3 = await authorize(env, token, 'dev_tablet_teman_003', true);
    assert.equal(res3.ok, false);
    assert.equal(res3.status, 403);
    assert.equal(res3.reason, 'max_devices_exceeded');
    assert.match(res3.error, /Batas 2 perangkat/i);
    assert.equal(db.devices.length, 2); // Jumlah perangkat tetap 2
});

test('B2.3: Admin Reset Perangkat via ID - Mengosongkan binding perangkat terdaftar', async () => {
    const db = new MockD1();
    const token = 'SNBT-RESET-ID11-TEST';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 42,
        token_hash: tokenHash,
        nama: 'Siti Aminah',
        wa: '085200001111',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });
    db.devices.push({ license_id: 42, device_id: 'dev_old_phone_001', first_seen: Date.now() });
    db.devices.push({ license_id: 42, device_id: 'dev_old_laptop_002', first_seen: Date.now() });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    // Reset via ID
    const resetRes = await handleAdminResetDevices(env, 'ADMIN-SECRET-2026', { id: 42 });
    assert.equal(resetRes.ok, true);
    assert.equal(resetRes.licenseId, 42);
    assert.equal(resetRes.clearedDevices, 2);
    assert.equal(db.devices.length, 0); // Perangkat kosong
});

test('B2.4: Admin Reset Perangkat via Token String - Mendukung pencarian instan tanpa ID', async () => {
    const db = new MockD1();
    const rawToken = 'SNBT-TOKN-FIND-8888';
    const tokenHash = await sha256Hex(rawToken);
    db.licenses.push({
        id: 77,
        token_hash: tokenHash,
        nama: 'Rizky Pratama',
        wa: '085277778888',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });
    db.devices.push({ license_id: 77, device_id: 'dev_broken_phone', first_seen: Date.now() });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    // Reset via Token string
    const resetRes = await handleAdminResetDevices(env, 'ADMIN-SECRET-2026', { token: rawToken });
    assert.equal(resetRes.ok, true);
    assert.equal(resetRes.licenseId, 77);
    assert.equal(resetRes.clearedDevices, 1);
    assert.equal(db.devices.length, 0);

    // Setelah di-reset, siswa dapat mendaftarkan perangkat barunya
    const rebindRes = await authorize(env, rawToken, 'dev_new_phone_replacement', true);
    assert.equal(rebindRes.ok, true);
    assert.equal(db.devices.length, 1);
});

test('B2.5: Admin Cabut Lisensi (Refund) - revoked=1 dan seluruh perangkat terikat dibersihkan', async () => {
    const db = new MockD1();
    const token = 'SNBT-RFND-0001-TEST';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 10,
        token_hash: tokenHash,
        nama: 'Doni Refund',
        wa: '081299990000',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });
    db.devices.push({ license_id: 10, device_id: 'dev_doni_device_1', first_seen: Date.now() });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    // Admin mencabut lisensi untuk refund
    const revokeRes = await handleAdminRevoke(env, 'ADMIN-SECRET-2026', { id: 10 }, 'revoke');
    assert.equal(revokeRes.ok, true);
    assert.equal(revokeRes.revoked, 1);
    assert.equal(revokeRes.devicesCleared, 1);
    assert.equal(db.licenses.find(l => l.id === 10).revoked, 1);
    assert.equal(db.devices.length, 0); // Perangkat dibersihkan saat refund
});

test('B2.6: Penegakan Akses Server-Side - Lisensi dicabut (revoked) DITOLAK seketika (HTTP 403 token_revoked)', async () => {
    const db = new MockD1();
    const token = 'SNBT-REVOKED-TEST-KEY';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 99,
        token_hash: tokenHash,
        nama: 'User Dicabut',
        wa: '0812345678',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 1 // Dicabut
    });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    // Request ambil konten (register=false)
    const accessRes = await authorize(env, token, 'dev_device_tester_revoked_01', false);
    assert.equal(accessRes.ok, false);
    assert.equal(accessRes.status, 403);
    assert.equal(accessRes.reason, 'token_revoked');
    assert.match(accessRes.error, /dinonaktifkan|dicabut/i);

    // Request aktivasi ulang (register=true) juga ditolak
    const activateRes = await authorize(env, token, 'dev_device_tester_revoked_02', true);
    assert.equal(activateRes.ok, false);
    assert.equal(activateRes.status, 403);
    assert.equal(activateRes.reason, 'token_revoked');
});

test('B2.7: Penegakan Akses Server-Side - Lisensi kedaluwarsa DITOLAK seketika (HTTP 403 token_expired)', async () => {
    const db = new MockD1();
    const token = 'SNBT-EXPIRED-TEST-KEY';
    const tokenHash = await sha256Hex(token);
    const pastTime = Date.now() - 10000; // 10 detik lalu sudah habis
    db.licenses.push({
        id: 55,
        token_hash: tokenHash,
        nama: 'User Expired',
        wa: '0812345678',
        created_at: pastTime - 30 * DAY_MS,
        activated_at: pastTime - 30 * DAY_MS,
        expires_at: pastTime,
        duration_days: 30,
        max_devices: 2,
        revoked: 0
    });
    db.devices.push({ license_id: 55, device_id: 'dev_user_phone_expired_01', first_seen: pastTime });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    const accessRes = await authorize(env, token, 'dev_user_phone_expired_01', false);
    assert.equal(accessRes.ok, false);
    assert.equal(accessRes.status, 403);
    assert.equal(accessRes.reason, 'token_expired');
    assert.match(accessRes.error, /Masa aktif lisensi sudah habis/i);
});

test('B2.8: Pemulihan Lisensi (Unrevoke) - Mengembalikan status revoked=0 dan mengizinkan akses kembali', async () => {
    const db = new MockD1();
    const token = 'SNBT-UNREVOKE-TEST-99';
    const tokenHash = await sha256Hex(token);
    db.licenses.push({
        id: 88,
        token_hash: tokenHash,
        nama: 'Clara Restore',
        wa: '0812345678',
        created_at: Date.now(),
        activated_at: Date.now(),
        expires_at: Date.now() + 30 * DAY_MS,
        duration_days: 30,
        max_devices: 2,
        revoked: 1 // Sempat dicabut
    });

    const env = { DB: db, ADMIN_KEY: 'ADMIN-SECRET-2026' };

    // Unrevoke via token
    const unrevRes = await handleAdminRevoke(env, 'ADMIN-SECRET-2026', { token }, 'unrevoke');
    assert.equal(unrevRes.ok, true);
    assert.equal(unrevRes.revoked, 0);
    assert.equal(db.licenses.find(l => l.id === 88).revoked, 0);

    // Sekarang dapat didaftarkan kembali
    const reAuth = await authorize(env, token, 'dev_clara_new_laptop', true);
    assert.equal(reAuth.ok, true);
    assert.equal(reAuth.reason, 'success');
});

test('B2.9: Keamanan Admin Endpoint - Tolak permintaan tanpa X-Admin-Key yang valid', async () => {
    const db = new MockD1();
    const env = { DB: db, ADMIN_KEY: 'ADMIN-SUPER-SECRET-999' };

    const resetNoKey = await handleAdminResetDevices(env, '', { id: 1 });
    assert.equal(resetNoKey.ok, false);
    assert.equal(resetNoKey.status, 401);

    const resetWrongKey = await handleAdminResetDevices(env, 'WRONG-SECRET', { id: 1 });
    assert.equal(resetWrongKey.ok, false);
    assert.equal(resetWrongKey.status, 401);

    const revokeWrongKey = await handleAdminRevoke(env, 'WRONG-SECRET', { id: 1 });
    assert.equal(revokeWrongKey.ok, false);
    assert.equal(revokeWrongKey.status, 401);
});
