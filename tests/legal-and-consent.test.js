import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// =====================================================================
// TEST SUITES TAHAP B4: PERSETUJUAN & DOKUMEN HUKUM
// =====================================================================

test('B4.1: Kebijakan Privasi - Memuat klausul rekaman suara lokal, bukti transfer WA, & batasan usia', () => {
    const filePath = path.resolve('kebijakan-privasi.html');
    assert.ok(fs.existsSync(filePath), 'File kebijakan-privasi.html harus ada');

    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Rekaman suara lokal
    assert.match(content, /Privasi Rekaman Suara pada Latihan Speaking/i, 'Memuat bab privasi rekaman suara');
    assert.match(content, /MediaRecorder/i, 'Menyebutkan API MediaRecorder');
    assert.match(content, /Blob URL/i, 'Menyebutkan Blob URL memori lokal');
    assert.match(content, /tidak pernah diunggah atau disimpan di server/i, 'Menegaskan rekaman tidak diunggah ke server');
    assert.match(content, /Web Speech API/i, 'Menyebutkan transkripsi Web Speech API opsional');

    // 2. Data pribadi pada bukti transfer WhatsApp
    assert.match(content, /Transaksi WhatsApp &amp; Bukti Pembayaran/i, 'Memuat bab transaksi WhatsApp');
    assert.match(content, /data pribadi/i, 'Menegaskan bukti transfer memuat data pribadi');
    assert.match(content, /nama pemilik rekening/i, 'Menyebutkan nama pemilik rekening');
    assert.match(content, /nomor rekening/i, 'Menyebutkan nomor rekening');

    // 3. Batasan usia & orang tua/wali
    assert.match(content, /Batasan Usia &amp; Persetujuan Orang Tua\/Wali/i, 'Memuat bab batasan usia');
    assert.match(content, /18 Tahun/i, 'Menyebutkan batas usia 18 tahun');
    assert.match(content, /izin dan persetujuan dari orang tua atau wali/i, 'Menyebutkan kewajiban izin orang tua/wali');
});

test('B4.2: Syarat & Ketentuan - File syarat-ketentuan.html memuat ketentuan lisensi, paket mandiri, non-afiliasi, & batasan usia', () => {
    const filePath = path.resolve('syarat-ketentuan.html');
    assert.ok(fs.existsSync(filePath), 'File syarat-ketentuan.html harus ada');

    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Ketentuan lisensi
    assert.match(content, /30 hari kalender/i, 'Menyebutkan masa berlaku 30 hari');
    assert.match(content, /2 \(dua\) perangkat pribadi/i, 'Menyebutkan batas maksimal 2 perangkat');
    assert.match(content, /pencabutan sepihak kode lisensi \(revocation\)/i, 'Menyebutkan hak pencabutan lisensi jika melanggar');

    // 2. Karakteristik paket mandiri
    assert.match(content, /Karakteristik Khusus Paket IELTS Mandiri/i, 'Memuat bab paket mandiri');
    assert.match(content, /Tanpa Penilaian Personal Guru/i, 'Menegaskan tidak termasuk penilaian guru');
    assert.match(content, /Sample Answer/i, 'Menyebutkan ketersediaan Sample Answer');

    // 3. Non-afiliasi
    assert.match(content, /Pernyataan Independensi &amp; Non-Afiliasi/i, 'Memuat bab pernyataan independensi');
    assert.match(content, /British Council/i, 'Menyebutkan British Council');
    assert.match(content, /IDP Education/i, 'Menyebutkan IDP');
    assert.match(content, /Estimasi Band/i, 'Menyebutkan istilah Estimasi Band');
    assert.match(content, /bukan merupakan sertifikat tes bahasa Inggris resmi/i, 'Menegaskan bukan sertifikat resmi');

    // 4. Batasan usia
    assert.match(content, /18.*tahun/i, 'Menyebutkan syarat usia di bawah 18 tahun');
    assert.match(content, /izin.*orang tua/i, 'Menyebutkan izin orang tua/wali');
});

test('B4.3: Kebijakan Refund - File kebijakan-refund.html memuat kriteria pengembalian dana, batas waktu, & pencabutan server', () => {
    const filePath = path.resolve('kebijakan-refund.html');
    assert.ok(fs.existsSync(filePath), 'File kebijakan-refund.html harus ada');

    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Syarat layak refund
    assert.match(content, /3x24 jam/i, 'Menyebutkan batas pengajuan 3x24 jam');
    assert.match(content, /Token Belum Pernah Diaktifkan/i, 'Kriteria token belum diaktifkan');
    assert.match(content, /Gangguan Server Berkepanjangan/i, 'Kriteria downtime server');

    // 2. Prosedur WhatsApp
    assert.match(content, /0852-6660-1477/i, 'Menyebutkan nomor WhatsApp admin');
    assert.match(content, /bukti transfer/i, 'Menyebutkan lampiran bukti transfer');

    // 3. Mekanisme pencabutan server
    assert.match(content, /Mekanisme Server-Side Revocation/i, 'Memuat penjelasan pencabutan server');
    assert.match(content, /revoked = 1/i, 'Menyebutkan flag revoked = 1');
    assert.match(content, /HTTP 403/i, 'Menyebutkan respons penolakan HTTP 403');

    // 4. Batasan usia
    assert.match(content, /18 tahun/i, 'Menyebutkan koordinasi orang tua/wali bagi usia < 18');
});

test('B4.4: Penautan Footer Global - partials/footer.html menautkan ketiga halaman hukum dan non-afiliasi', () => {
    const filePath = path.resolve('partials/footer.html');
    assert.ok(fs.existsSync(filePath), 'File partials/footer.html harus ada');

    const content = fs.readFileSync(filePath, 'utf8');
    assert.match(content, /href="\/kebijakan-privasi\.html"/i, 'Menautkan Kebijakan Privasi');
    assert.match(content, /href="\/syarat-ketentuan\.html"/i, 'Menautkan Syarat & Ketentuan');
    assert.match(content, /href="\/kebijakan-refund\.html"/i, 'Menautkan Kebijakan Refund');
    assert.match(content, /AjarKita beroperasi secara independen/i, 'Memuat pernyataan independen');
});

test('B4.5: Kotak Persetujuan - ielts/premium-saya.html memuat kotak persetujuan wajib sebelum aktivasi dan beli', () => {
    const filePath = path.resolve('ielts/premium-saya.html');
    assert.ok(fs.existsSync(filePath), 'File ielts/premium-saya.html harus ada');

    const content = fs.readFileSync(filePath, 'utf8');
    assert.match(content, /check-consent-activate/i, 'Memuat ID checkbox persetujuan aktivasi');
    assert.match(content, /check-consent-buy/i, 'Memuat ID checkbox persetujuan pembelian');
    assert.match(content, /jika berusia di bawah 18 tahun, saya sudah mendapat izin orang tua\/wali/i, 'Memuat teks klausul persetujuan orang tua/wali');
    assert.match(content, /href="\/kebijakan-privasi\.html"/i, 'Menautkan Kebijakan Privasi di footer');
    assert.match(content, /href="\/syarat-ketentuan\.html"/i, 'Menautkan Syarat & Ketentuan di footer');
    assert.match(content, /href="\/kebijakan-refund\.html"/i, 'Menautkan Kebijakan Refund di footer');
});

test('B4.6: Kotak Persetujuan SNBT - snbt/js/snbt-license.js memuat kotak persetujuan pada modal aktivasi & konfirmasi bayar', () => {
    const filePath = path.resolve('snbt/js/snbt-license.js');
    assert.ok(fs.existsSync(filePath), 'File snbt/js/snbt-license.js harus ada');

    const content = fs.readFileSync(filePath, 'utf8');
    assert.match(content, /check-snbt-consent-token/i, 'Memuat ID checkbox aktivasi token SNBT');
    assert.match(content, /check-snbt-consent-pay/i, 'Memuat ID checkbox konfirmasi bayar SNBT');
    assert.match(content, /jika berusia di bawah 18 tahun, saya sudah mendapat izin orang tua\/wali/i, 'Memuat klausul izin orang tua/wali');
});
