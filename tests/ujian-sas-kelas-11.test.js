const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

test('Modul SAS Ganjil Kimia Kelas XI: Verifikasi Berkas & Integritas', (t) => {
    const htmlPath = path.join(ROOT, 'kelas-11', 'ujian-sas-ganjil.html');
    assert.ok(fs.existsSync(htmlPath), 'File kelas-11/ujian-sas-ganjil.html harus ada di workspace');
    
    const html = fs.readFileSync(htmlPath, 'utf8');
    assert.ok(html.length > 50000, 'Ukuran HTML harus komprehensif (> 50KB)');
    assert.ok(html.includes('data-kelas="11"'), 'Atribut data-kelas="11" wajib terpasang');
    assert.ok(html.includes('Persiapan SAS Ganjil 2026/2027'), 'Header SAS Ganjil harus ada');

    // Cek 3 Tab Navigasi
    assert.ok(html.includes('id="tab-btn-kisi-kisi"'), 'Tab 1 Matriks Kisi-Kisi harus ada');
    assert.ok(html.includes('id="tab-btn-bedah-soal"'), 'Tab 2 Bank Soal harus ada');
    assert.ok(html.includes('id="tab-btn-cbt"'), 'Tab 3 Simulasi CBT harus ada');

    // Cek 40 Butir PG
    for (let i = 1; i <= 40; i++) {
        assert.ok(html.includes(`id="pg-${i}"`), `Artikel soal PG #${i} (id="pg-${i}") wajib ada`);
        assert.ok(html.includes(`id="exp-pg-${i}"`), `Container pembahasan PG #${i} (id="exp-pg-${i}") wajib ada`);
    }

    // Cek 5 Butir Esai
    for (let e = 1; e <= 5; e++) {
        assert.ok(html.includes(`id="es-${e}"`), `Artikel soal Esai #${e} (id="es-${e}") wajib ada`);
        assert.ok(html.includes(`id="exp-es-${e}"`), `Container pembahasan Esai #${e} (id="exp-es-${e}") wajib ada`);
    }

    // Cek Kunci Jawaban PG
    const matchKeys = html.match(/const PG_KEYS_XI\s*=\s*(\{[\s\S]*?\});/);
    assert.ok(matchKeys, 'Objek PG_KEYS_XI wajib ada');
    const pgKeys = JSON.parse(matchKeys[1]);
    assert.equal(Object.keys(pgKeys).length, 40, 'Kunci PG harus memuat tepat 40 kunci jawaban');
    for (let i = 1; i <= 40; i++) {
        assert.ok(['A', 'B', 'C', 'D', 'E'].includes(pgKeys[i]), `Kunci soal PG #${i} harus berupa A/B/C/D/E`);
    }

    // Cek Objek Rubrik Esai
    const matchRubrik = html.match(/const ESAI_RUBRIK_XI\s*=\s*(\{[\s\S]*?\});/);
    assert.ok(matchRubrik, 'Objek ESAI_RUBRIK_XI wajib ada');
    const rubrik = JSON.parse(matchRubrik[1]);
    assert.equal(Object.keys(rubrik).length, 5, 'Rubrik Esai harus memuat tepat 5 nomor');
    for (let e = 1; e <= 5; e++) {
        assert.ok(rubrik[e].poin && rubrik[e].poin.length > 0, `Rubrik Esai #${e} harus memuat poin-poin checklist penilaian`);
    }

    // Cek Integrasi Index Kelas XI
    const indexHtml = fs.readFileSync(path.join(ROOT, 'kelas-11', 'index.html'), 'utf8');
    assert.ok(indexHtml.includes('/kelas-11/ujian-sas-ganjil.html'), 'Link ke ujian-sas-ganjil.html harus ada di kelas-11/index.html');

    // Cek Integrasi curriculum.js
    const currJs = fs.readFileSync(path.join(ROOT, 'js', 'curriculum.js'), 'utf8');
    assert.ok(currJs.includes('sas-xi'), 'Entry sas-xi harus terdaftar di modulLain pada js/curriculum.js');
    assert.ok(currJs.includes('/kelas-11/ujian-sas-ganjil.html'), 'Path /kelas-11/ujian-sas-ganjil.html harus ada di curriculum.js');

    // Cek Integrasi sitemap.xml
    const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
    assert.ok(sitemap.includes('https://kimia.ajarkita.my.id/kelas-11/ujian-sas-ganjil.html'), 'URL kelas-11/ujian-sas-ganjil.html wajib ada di sitemap.xml');
});
