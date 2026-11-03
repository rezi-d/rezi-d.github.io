const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');

function read(relPath) {
    return fs.readFileSync(path.join(rootDir, relPath), 'utf8');
}

test('Tahap B5 - Writing Masterclass: bebas klaim band dan terminologi resmi berlebihan', () => {
    const content = read('ielts/writing-masterclass.html');

    // Pastikan tidak ada klaim "Band 8.5" pada judul model answer
    assert.doesNotMatch(content, /Model Jawaban Band 8\.5/i, 'Tidak boleh ada Model Jawaban Band 8.5');
    assert.doesNotMatch(content, /Model Esai Band 8\.5/i, 'Tidak boleh ada Model Esai Band 8.5');
    assert.doesNotMatch(content, /Band 8\.5<\/span>/i, 'Badge Band 8.5 harus diganti');
    assert.doesNotMatch(content, /Masukkan Contoh Band 8\.5/i, 'Tombol contoh Band 8.5 harus diganti');

    // Pastikan terminologi pengganti hadir
    assert.match(content, /Sample Answer/i, 'Harus memuat istilah Sample Answer');
    assert.match(content, /rubrik 4 kriteria/i, 'Harus memuat istilah rubrik 4 kriteria');
    assert.doesNotMatch(content, /Official Rubric Standard/i, 'Tidak boleh ada Official Rubric Standard');
    assert.doesNotMatch(content, /Panduan masterclass resmi/i, 'Tidak boleh ada Panduan masterclass resmi');
});

test('Tahap B5 - Speaking Framework: transkrip dan studi kasus menggunakan Sample Answer', () => {
    const content = read('ielts/speaking-framework.html');

    // Pastikan tidak ada klaim Band 8 / 8.5 pada transkrip atau studi kasus
    assert.doesNotMatch(content, /Candidate \(Band 8\.5\)/i, 'Candidate (Band 8.5) harus diganti');
    assert.doesNotMatch(content, /Model Answer Band 8\.5/i, 'Model Answer Band 8.5 harus diganti');
    assert.doesNotMatch(content, />Band 8\.0<\/span>/i, 'Badge Band 8.0 harus diganti');
    assert.doesNotMatch(content, /4 Fitur Kunci Band 8\.0/i, 'Klinik pengucapan tidak boleh mengklaim Band 8.0');

    // Pastikan pengganti hadir
    assert.match(content, /Candidate \(Sample Answer\)/i, 'Harus menggunakan Candidate (Sample Answer)');
    assert.match(content, /Rubrik 4 Kriteria Penilaian/i, 'Harus menggunakan Rubrik 4 Kriteria Penilaian');
    assert.doesNotMatch(content, /Official Cambridge Assessment Matrix/i, 'Tidak boleh ada Official Cambridge Assessment Matrix');
});

test('Tahap B5 - Grammar Akademik: revisi dan kaidah tata bahasa bebas overklaim skor', () => {
    const content = read('ielts/grammar-akademik.html');

    assert.doesNotMatch(content, /Kriteria penilaian resmi/i, 'Kriteria penilaian resmi harus diganti');
    assert.doesNotMatch(content, /Band 8\.0 Distinguisher/i, 'Band 8.0 Distinguisher harus diganti');
    assert.doesNotMatch(content, /REVISI BAND 8\.0/i, 'REVISI BAND 8.0 harus diganti');
    assert.doesNotMatch(content, /Tanda Baca Penentu Skor Band 8\.0/i, 'Tanda baca Band 8.0 harus diganti');

    assert.match(content, /REVISI SAMPLE ANSWER/i, 'Harus memuat REVISI SAMPLE ANSWER');
    assert.match(content, /Rubrik 4 kriteria penilaian/i, 'Harus memuat Rubrik 4 kriteria penilaian');
});

test('Tahap B5 - Seni Parafrase: transformasi kalimat tidak mengklaim Band 8.0 otomatis', () => {
    const content = read('ielts/seni-parafrase-dan-kolokasi.html');

    assert.doesNotMatch(content, /Mekanisme Pengujian Resmi/i, 'Mekanisme Pengujian Resmi harus diganti');
    assert.doesNotMatch(content, /✅ Band 8\.0:/i, '✅ Band 8.0: harus diganti ke Sample Answer');
    assert.doesNotMatch(content, /Lihat Contoh Parafrase Band 8\.0/i, 'Tombol contoh Band 8.0 harus diganti');

    assert.match(content, /✅ Sample Answer:/i, 'Harus memuat ✅ Sample Answer:');
    assert.match(content, /Mekanisme Pengujian Bahasa/i, 'Harus memuat Mekanisme Pengujian Bahasa');
});

test('Tahap B5 - Kosakata Tematik: bebas klaim resmi berlebihan', () => {
    const content = read('ielts/kosakata-akademik-tematik.html');

    assert.doesNotMatch(content, /8 Unit resmi Cambridge/i, '8 Unit resmi Cambridge harus diganti');
    assert.doesNotMatch(content, /✨ 8 Tema Resmi Cambridge/i, '✨ 8 Tema Resmi Cambridge harus diganti');
    assert.doesNotMatch(content, /Kriteria Penilaian Resmi/i, 'Kriteria Penilaian Resmi harus diganti');
    assert.doesNotMatch(content, /contoh kalimat akademik resmi/i, 'contoh kalimat akademik resmi harus diganti');
    assert.doesNotMatch(content, /kolokasi resmi baku/i, 'kolokasi resmi baku harus diganti');

    assert.match(content, /Rubrik 4 Kriteria Penilaian/i, 'Harus menggunakan Rubrik 4 Kriteria Penilaian');
    assert.match(content, /8 Unit referensi Cambridge/i, 'Harus menggunakan referensi Cambridge');
});

test('Tahap B5 - Index & Kalkulator: menggunakan Estimasi Skor dan standar pembulatan', () => {
    const content = read('ielts/index.html');

    assert.doesNotMatch(content, /Alat Interaktif Resmi/i, 'Alat Interaktif Resmi harus diganti');
    assert.doesNotMatch(content, /Official Cambridge\/IDP Rounding Formula/i, 'Official Cambridge Rounding Formula harus diganti');
    assert.doesNotMatch(content, /Hasil Perhitungan Akumulasi Resmi/i, 'Hasil Akumulasi Resmi harus diganti');
    assert.doesNotMatch(content, /Pembulatan resmi:/i, 'Pembulatan resmi harus diganti');
    assert.doesNotMatch(content, /Aturan pembulatan resmi: <strong>Band/i, 'Aturan pembulatan resmi band harus diganti');

    assert.match(content, /Kalkulator Estimasi Skor/i, 'Harus memuat Kalkulator Estimasi Skor');
    assert.match(content, /Estimasi Band/i, 'Harus memuat Estimasi Band');
});

test('Tahap B5 - Keempat Mock Test & Rekap memiliki Laporan Hasil Latihan & Disclaimer Non-Afiliasi', () => {
    const mockFiles = [
        { file: 'ielts/listening-mock-test.html', expectedTitle: 'LAPORAN HASIL LATIHAN LISTENING' },
        { file: 'ielts/reading-mock-test.html', expectedTitle: 'LAPORAN HASIL LATIHAN READING' },
        { file: 'ielts/writing-mock-test.html', expectedTitle: 'Laporan Hasil Latihan Writing' },
        { file: 'ielts/speaking-mock-test.html', expectedTitle: 'Laporan Hasil Latihan Speaking' }
    ];

    for (const item of mockFiles) {
        const c = read(item.file);
        assert.match(c, new RegExp(item.expectedTitle, 'i'), `${item.file} harus memuat judul ${item.expectedTitle}`);
        assert.match(c, /Pernyataan Non-Afiliasi/i, `${item.file} harus memuat kartu Pernyataan Non-Afiliasi di layar hasil`);
        assert.match(c, /bukan merupakan sertifikat resmi/i, `${item.file} harus menegaskan bukan sertifikat resmi`);
        assert.match(c, /Estimasi Band/i, `${item.file} harus menegaskan skor adalah Estimasi Band`);
        assert.doesNotMatch(c, /HASIL SIMULASI RESMI/i, `${item.file} tidak boleh memuat HASIL SIMULASI RESMI`);
    }

    const rekap = read('ielts/rekap.html');
    assert.match(rekap, /Pemberitahuan Akademik &amp; Kepatuhan/i, 'rekap.html harus memuat pemberitahuan akademik');
    assert.match(rekap, /Laporan Hasil Latihan/i, 'rekap.html harus memuat Laporan Hasil Latihan');
    assert.match(rekap, /bukan sertifikat resmi/i, 'rekap.html harus menegaskan bukan sertifikat resmi');
    assert.doesNotMatch(rekap, /4 subtes resmi:/i, 'rekap.html tidak boleh menyatakan 4 subtes resmi');
});

test('Tahap B5 - Footer & Portal Lisensi menegaskan non-afiliasi dan non-sertifikat', () => {
    const footer = read('partials/footer.html');
    assert.match(footer, /Kalkulator Estimasi Skor/i, 'Footer harus memuat Kalkulator Estimasi Skor');
    assert.match(footer, /bukan merupakan sertifikat tes resmi/i, 'Footer harus menegaskan bukan sertifikat tes resmi');
    assert.match(footer, /AjarKita beroperasi secara independen/i, 'Footer harus menegaskan independen');
    assert.doesNotMatch(footer, /Kalkulator Skor Resmi/i, 'Footer tidak boleh memuat Kalkulator Skor Resmi');

    const portal = read('ielts/premium-saya.html');
    assert.match(portal, /panduan rubrik 4 kriteria standar/i, 'Portal harus memuat rubrik 4 kriteria standar');
    assert.match(portal, /bukan merupakan sertifikat tes resmi/i, 'Portal harus menegaskan bukan sertifikat resmi');
});

test('Tahap B5 - Engine & Worker backend disclaimer bebas kata penilaian resmi', () => {
    const engine = read('ielts/writing-engine.js');
    assert.doesNotMatch(engine, /Penilaian resmi dilakukan oleh guru/i, 'writing-engine tidak boleh memuat kata penilaian resmi');
    assert.match(engine, /Penilaian komprehensif dilakukan oleh guru\/evaluator/i, 'writing-engine memuat komprehensif');

    const worker = read('worker/src/index.js');
    assert.doesNotMatch(worker, /Penilaian resmi dilakukan oleh guru/i, 'worker/src/index.js tidak boleh memuat kata penilaian resmi');
    assert.match(worker, /Penilaian komprehensif dilakukan oleh guru\/evaluator/i, 'worker/src/index.js memuat komprehensif');
});
