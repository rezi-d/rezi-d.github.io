const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');

function read(relPath) {
    return fs.readFileSync(path.join(rootDir, relPath), 'utf8');
}

test('Tahap B6 - WhatsApp Buy & Add-on: Sinkronisasi Admin WA & Helper URL di packages-config', () => {
    const frontendConfig = require('../ielts/packages-config.js').PACKAGES_CONFIG;
    
    // Periksa Admin WA
    assert.equal(frontendConfig.admin_wa, '6285266601477');

    // 1. URL Beli Paket IELTS Mandiri 30 Hari (Rp 35.000)
    const buyUrl = frontendConfig.getBuyWhatsAppUrl('30_days');
    assert.ok(buyUrl.startsWith('https://wa.me/6285266601477?text='));
    const buyText = decodeURIComponent(buyUrl.split('text=')[1]);
    assert.match(buyText, /Halo Admin AjarKita/);
    assert.match(buyText, /sudah menyetujui syarat dan kebijakan privasi/i);
    assert.match(buyText, /Paket IELTS Mandiri 30 Hari/);
    assert.match(buyText, /Rp 35\.000/);

    // 2. URL Bantuan / Reset HP
    const helpUrl = frontendConfig.getHelpWhatsAppUrl();
    assert.ok(helpUrl.startsWith('https://wa.me/6285266601477?text='));
    const helpText = decodeURIComponent(helpUrl.split('text=')[1]);
    assert.match(helpText, /bantuan terkait Lisensi IELTS Mandiri/);
    assert.match(helpText, /reset perangkat \/ kendala aktivasi/);

    // 3. URL Add-on Koreksi 1 Esai (Rp 30.000)
    const singleUrl = frontendConfig.getAddonWhatsAppUrl('single_essay');
    assert.ok(singleUrl.startsWith('https://wa.me/6285266601477?text='));
    const singleText = decodeURIComponent(singleUrl.split('text=')[1]);
    assert.match(singleText, /Koreksi 1 Esai/);
    assert.match(singleText, /Rp 30\.000/);
    assert.match(singleText, /Add-on Penilaian Guru IELTS/);
    assert.match(singleText, /kuota minggu ini/);

    // 4. URL Add-on Koreksi Writing Lengkap (Rp 50.000)
    const writingUrl = frontendConfig.getAddonWhatsAppUrl('writing_full');
    assert.ok(writingUrl.startsWith('https://wa.me/6285266601477?text='));
    const writingText = decodeURIComponent(writingUrl.split('text=')[1]);
    assert.match(writingText, /Koreksi Writing Lengkap/);
    assert.match(writingText, /Rp 50\.000/);

    // 5. URL Add-on Review Speaking (Rp 50.000)
    const speakingUrl = frontendConfig.getAddonWhatsAppUrl('speaking_review');
    assert.ok(speakingUrl.startsWith('https://wa.me/6285266601477?text='));
    const speakingText = decodeURIComponent(speakingUrl.split('text=')[1]);
    assert.match(speakingText, /Review Speaking/);
    assert.match(speakingText, /Rp 50\.000/);
});

test('Tahap B6 - Portal Premium Saya: Memuat Tombol Beli, Bantuan, Add-on, dan Validasi Consent', () => {
    const portalHtml = read('ielts/premium-saya.html');

    // Memuat script konfigurasi terpusat
    assert.match(portalHtml, /<script src="\/ielts\/packages-config\.js"><\/script>/);

    // Memuat elemen tombol WhatsApp beli dan bantuan
    assert.match(portalHtml, /id="btn-buy-wa"/);
    assert.match(portalHtml, /id="btn-wa-help"/);

    // Memuat elemen tombol pesanan Add-on untuk masing-masing opsi
    assert.match(portalHtml, /id="btn-addon-single-essay"/);
    assert.match(portalHtml, /id="btn-addon-writing-full"/);
    assert.match(portalHtml, /id="btn-addon-speaking-review"/);

    // Memuat checkbox persetujuan syarat & ketentuan pembelian
    assert.match(portalHtml, /id="check-consent-buy"/);

    // Memuat logika validasi consent sebelum navigasi ke WA
    assert.match(portalHtml, /checkConsentBuy\.checked/);
    assert.match(portalHtml, /e\.preventDefault\(\)/);
    assert.match(portalHtml, /Harap centang persetujuan Syarat & Ketentuan serta Kebijakan Privasi/);

    // Memuat inisialisasi dinamis dari PACKAGES_CONFIG
    assert.match(portalHtml, /function initPackagesConfig\(\)/);
    assert.match(portalHtml, /initPackagesConfig\(\)/);
});

test('Tahap B6 - Keempat IELTS Mock Test Memiliki Link Navigasi ke Portal Lisensi', () => {
    const mockFiles = [
        'ielts/listening-mock-test.html',
        'ielts/reading-mock-test.html',
        'ielts/writing-mock-test.html',
        'ielts/speaking-mock-test.html'
    ];

    for (const file of mockFiles) {
        const content = read(file);
        assert.match(content, /href="\/ielts\/premium-saya\.html"/, `${file} harus memiliki link ke /ielts/premium-saya.html`);
        assert.match(content, /Beli Token \/ Status Lisensi/, `${file} harus memiliki teks Beli Token / Status Lisensi`);
    }
});
