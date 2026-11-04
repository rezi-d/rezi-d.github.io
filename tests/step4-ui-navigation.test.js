import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
    PACKAGES_CONFIG,
    normalizeTestId,
    getMockTestConfig,
    formatDraftTime
} from '../worker/src/packages-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// =====================================================================
// 1. UJI KONTROL STATUS MOCK 2 LEWAT PACKAGES_CONFIG (SINGLE SOURCE OF TRUTH)
// =====================================================================

test('Tahap 4: Status Mock 2 dikendalikan oleh single flag available di packages-config', () => {
    // Default konfigurasi: Mock 2 belum dirilis (available: false)
    const mock2Default = getMockTestConfig('test2');
    assert.strictEqual(mock2Default.id, 'test2');
    assert.strictEqual(mock2Default.is_free, false);
    assert.strictEqual(mock2Default.available, false, 'Default Mock 2 harus available: false');
    assert.strictEqual(mock2Default.label, 'Mock Test 2');

    // Mock 1 selalu gratis dan available
    const mock1 = getMockTestConfig('test1');
    assert.strictEqual(mock1.id, 'test1');
    assert.strictEqual(mock1.is_free, true);
    assert.strictEqual(mock1.available, true);
    assert.strictEqual(mock1.label, 'Mock Test 1');

    // Normalisasi alias test2
    assert.strictEqual(getMockTestConfig('2').id, 'test2');
    assert.strictEqual(getMockTestConfig('writing2').id, 'test2');
});

// =====================================================================
// 2. UJI FORMAT TAMPILAN WAKTU DRAF (WIB INDONESIA)
// =====================================================================

test('Tahap 4: formatDraftTime menampilkan format tanggal dan waktu WIB yang valid', () => {
    const fixedTs = new Date('2026-11-04T14:30:00+07:00').getTime();
    const formatted = formatDraftTime(fixedTs);
    assert.ok(formatted.includes('WIB'));
    assert.ok(formatted.includes('2026'));
    assert.ok(formatted.includes('Nov'));

    // Timestamp invalid atau kosong tidak crash
    assert.strictEqual(formatDraftTime(null), 'Sesi tersimpan');
    assert.strictEqual(formatDraftTime(undefined), 'Sesi tersimpan');
    assert.strictEqual(formatDraftTime('invalid'), 'Sesi tersimpan');
});

// =====================================================================
// 3. UJI INTEGRITAS TAUTAN (LINK INTEGRITY) PADA SELURUH HALAMAN IELTS
// =====================================================================

test('Tahap 4: Seluruh tautan internal pada halaman IELTS valid dan target berkas ada di disk', () => {
    const pagesToCheck = [
        'ielts/index.html',
        'ielts/listening-mock-test.html',
        'ielts/reading-mock-test.html',
        'ielts/writing-mock-test.html',
        'ielts/speaking-mock-test.html'
    ];

    const linkRegex = /href="(\/[^"#?]+)(?:\?[^"]*)?(?:#[^"]*)?"/g;

    for (const relPath of pagesToCheck) {
        const fullPath = path.join(ROOT_DIR, relPath);
        assert.ok(fs.existsSync(fullPath), `Berkas ${relPath} harus ada di disk`);
        const html = fs.readFileSync(fullPath, 'utf8');

        let match;
        while ((match = linkRegex.exec(html)) !== null) {
            const linkHref = match[1];

            // Abaikan link tel:, mailto:, atau external
            if (linkHref.startsWith('http') || linkHref.startsWith('mailto:') || linkHref.startsWith('tel:')) {
                continue;
            }

            // Normalisasi link path ke filesystem
            let targetDiskPath = path.join(ROOT_DIR, linkHref.replace(/^\//, ''));
            if (fs.existsSync(targetDiskPath) && fs.statSync(targetDiskPath).isDirectory()) {
                targetDiskPath = path.join(targetDiskPath, 'index.html');
            }

            // Izinkan jika target berkas ada, atau target + .html ada
            const exists = fs.existsSync(targetDiskPath) || fs.existsSync(targetDiskPath + '.html');
            assert.ok(exists, `Tautan rusak terdeteksi di ${relPath}: href="${linkHref}" (mencari ${targetDiskPath})`);
        }
    }
});

// =====================================================================
// 4. UJI RESPONSIF MOBILE & ELEMEN PEMILIH TES PADA ielts/index.html
// =====================================================================

test('Tahap 4: ielts/index.html memuat pemilih tes multi-tes dan struktur responsif mobile', () => {
    const indexPath = path.join(ROOT_DIR, 'ielts/index.html');
    const html = fs.readFileSync(indexPath, 'utf8');

    // 1. Memuat pemilih tes
    assert.ok(html.includes('id="tab-mock-1"'), 'Wajib memiliki tab Mock Test 1');
    assert.ok(html.includes('id="tab-mock-2"'), 'Wajib memiliki tab Mock Test 2');
    assert.ok(html.includes('id="panel-mock-1"'), 'Wajib memiliki panel konten Mock Test 1');
    assert.ok(html.includes('id="panel-mock-2"'), 'Wajib memiliki panel konten Mock Test 2');

    // 2. Memuat status Mock 1 Gratis & Mock 2 Segera Hadir / Premium
    assert.ok(html.includes('id="mock2-coming-soon"'), 'Wajib memiliki banner Segera Hadir untuk Mock 2');
    assert.ok(html.includes('id="mock2-available-banner"'), 'Wajib memiliki banner Premium untuk Mock 2');

    // 3. Responsif mobile (viewport meta dan grid)
    assert.ok(html.includes('name="viewport"'), 'Wajib memiliki meta viewport');
    assert.ok(html.includes('grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'), 'Wajib responsif 1 kolom di HP dan 4 kolom di desktop');

    // 4. Script selector terhubung dengan cache-buster terbaru
    assert.ok(html.includes('packages-config.js?v=20261104f'), 'Wajib memuat packages-config dengan versi cache-buster v=20261104f');
    assert.ok(html.includes('initMockTestSelector()'), 'Wajib memanggil initMockTestSelector()');
});

// =====================================================================
// 5. UJI ELEMEN DINAMIS (ANTI HARDCODE TEST 1) PADA ENGINE MOCK TEST
// =====================================================================

test('Tahap 4: Halaman simulasi memuat ID elemen dinamis untuk badge dan cache-buster v=20261104f', () => {
    const engineChecks = [
        { file: 'ielts/listening-mock-test.html', badgeId: 'listening-badge-label', engine: 'listening-engine.js?v=20261104f' },
        { file: 'reading-mock-test.html', badgeId: 'reading-badge-label', engine: 'reading-engine.js?v=20261104f' },
        { file: 'writing-mock-test.html', badgeId: 'writing-badge-label', engine: 'writing-engine.js?v=20261104f' },
        { file: 'speaking-mock-test.html', badgeId: 'speaking-badge-label', engine: 'speaking-engine.js?v=20261104f' }
    ];

    for (const item of engineChecks) {
        const filePath = path.join(ROOT_DIR, 'ielts', path.basename(item.file));
        const html = fs.readFileSync(filePath, 'utf8');

        assert.ok(html.includes(`id="${item.badgeId}"`), `${item.file} harus memuat elemen #${item.badgeId} untuk rendering dinamis`);
        assert.ok(html.includes(item.engine), `${item.file} harus menggunakan engine dengan cache-buster ${item.engine}`);
        assert.ok(html.includes('Mulai baru / hapus draf'), `${item.file} harus memiliki tombol jelas Mulai baru / hapus draf`);
    }
});
