// scripts/verify-kimia-all.js
// Script verifikasi komprehensif seluruh paket TKA Kimia (Paket 1, Paket 2, Paket 3)

const fs = require('fs');
const path = require('path');

console.log('🧪 Memulai Verifikasi Komprehensif Seluruh Paket TKA Kimia...');

// 1. Load data
const tkaDataMod = require('../tka/js/tka-data.js');
const tkaData = tkaDataMod.tkaData || tkaDataMod;
const tkaPackages = tkaDataMod.tkaPackages;

const tkaPaket2Mod = require('../tka/js/tka-paket2.js');
const tkaPaket2Data = Array.isArray(tkaPaket2Mod) ? tkaPaket2Mod : tkaPaket2Mod.tkaPaket2Data;

const tkaPaket3Mod = require('../tka/js/tka-paket3.js');
const tkaPaket3Data = Array.isArray(tkaPaket3Mod) ? tkaPaket3Mod : tkaPaket3Mod.tkaPaket3Data;

let errors = 0;
let warnings = 0;

function assert(condition, msg) {
  if (!condition) {
    console.error(`❌ ERROR: ${msg}`);
    errors++;
  }
}

function validateQuestion(q, paketLabel) {
  assert(typeof q.id === 'number', `${paketLabel} Soal id harus number`);
  assert(q.pembahasan && q.pembahasan.length > 20, `${paketLabel} Soal #${q.id} pembahasan terlalu pendek`);

  if (q.tipe === 'pg') {
    assert(Array.isArray(q.options) && q.options.length >= 4, `${paketLabel} PG Soal #${q.id} harus memiliki opsi`);
    assert(typeof q.kunci === 'string', `${paketLabel} PG Soal #${q.id} kunci harus string`);
  } else if (q.tipe === 'mcma') {
    assert(Array.isArray(q.options) && q.options.length >= 4, `${paketLabel} MCMA Soal #${q.id} harus memiliki opsi`);
    assert(Array.isArray(q.kunci) && q.kunci.length >= 1, `${paketLabel} MCMA Soal #${q.id} kunci harus array`);
  } else if (q.tipe === 'kompleks_bs') {
    assert(Array.isArray(q.items) && q.items.length >= 2, `${paketLabel} Benar/Salah Soal #${q.id} harus memiliki items`);
  }
}

// Periksa Paket 1
console.log('\n📦 Memeriksa Paket 1 (Resmi 2025)...');
assert(Array.isArray(tkaData), 'tkaData harus berupa array');
assert(tkaData.length === 23, `Paket 1 harus berisi 23 soal, ditemukan: ${tkaData.length}`);
tkaData.forEach((q, idx) => {
  assert(q.id === idx + 1, `Paket 1 Soal #${idx+1} id mismatch (${q.id})`);
  validateQuestion(q, 'Paket 1');
});
console.log(`✅ Paket 1 OK: ${tkaData.length} butir soal valid.`);

// Periksa Paket 2
console.log('\n📦 Memeriksa Paket 2 (Try Out HOTS)...');
assert(Array.isArray(tkaPaket2Data), 'tkaPaket2Data harus berupa array');
assert(tkaPaket2Data.length === 25, `Paket 2 harus berisi 25 soal, ditemukan: ${tkaPaket2Data.length}`);
tkaPaket2Data.forEach((q, idx) => {
  assert(q.id === idx + 1, `Paket 2 Soal #${idx+1} id mismatch (${q.id})`);
  validateQuestion(q, 'Paket 2');
});
console.log(`✅ Paket 2 OK: ${tkaPaket2Data.length} butir soal valid.`);

// Periksa Paket 3
console.log('\n📦 Memeriksa Paket 3 (Prediksi 2025/2026 - Variasi PG, MCMA, Benar/Salah)...');
assert(Array.isArray(tkaPaket3Data), 'tkaPaket3Data harus berupa array');
assert(tkaPaket3Data.length === 25, `Paket 3 harus berisi 25 soal, ditemukan: ${tkaPaket3Data.length}`);

// Validasi bebas dari tanda dolar ($)
const jsonPaket3 = JSON.stringify(tkaPaket3Data);
assert(!jsonPaket3.includes('$'), 'Paket 3 tidak boleh mengandung tanda dolar ($)');

const typeCounts = { pg: 0, mcma: 0, kompleks_bs: 0 };

tkaPaket3Data.forEach((q, idx) => {
  assert(q.id === idx + 1, `Paket 3 Soal #${idx+1} id mismatch (${q.id})`);
  assert(q.elemen && q.subelemen, `Paket 3 Soal #${q.id} harus memiliki elemen & subelemen`);
  assert(q.soalHtml && q.soalHtml.length > 10, `Paket 3 Soal #${q.id} soalHtml kosong/terlalu pendek`);
  assert(q.pembahasan && q.pembahasan.length > 20, `Paket 3 Soal #${q.id} pembahasan terlalu pendek`);
  
  if (q.tipe === 'pg') {
    typeCounts.pg++;
    assert(q.options && q.options.length === 5, `Paket 3 PG Soal #${q.id} harus memiliki 5 opsi A-E`);
    assert(typeof q.kunci === 'string' && ['A','B','C','D','E'].includes(q.kunci), `Paket 3 PG Soal #${q.id} kunci tidak valid (${q.kunci})`);
  } else if (q.tipe === 'mcma') {
    typeCounts.mcma++;
    assert(q.options && q.options.length === 5, `Paket 3 MCMA Soal #${q.id} harus memiliki 5 opsi A-E`);
    assert(Array.isArray(q.kunci) && q.kunci.length >= 2, `Paket 3 MCMA Soal #${q.id} kunci harus array >= 2 (${JSON.stringify(q.kunci)})`);
  } else if (q.tipe === 'kompleks_bs') {
    typeCounts.kompleks_bs++;
    assert(Array.isArray(q.items) && q.items.length >= 3, `Paket 3 Benar/Salah Soal #${q.id} harus memiliki items pernyataan >= 3`);
    assert(Array.isArray(q.kunci) && q.kunci.length === q.items.length, `Paket 3 Benar/Salah Soal #${q.id} kunci harus array sepanjang items (${JSON.stringify(q.kunci)})`);
  } else {
    assert(false, `Paket 3 Soal #${q.id} tipe tidak dikenal: ${q.tipe}`);
  }
});

console.log(`✅ Paket 3 OK: ${tkaPaket3Data.length} butir soal valid.`);
console.log(`   - Pilihan Ganda (PG)        : ${typeCounts.pg} butir`);
console.log(`   - Pilihan Ganda Kompleks    : ${typeCounts.mcma} butir`);
console.log(`   - Benar / Salah             : ${typeCounts.kompleks_bs} butir`);

// Periksa Registry & Packages
console.log('\n🔍 Memeriksa Registry & Integrasi...');
assert(tkaPackages.paket1 && tkaPackages.paket1.total === 23, 'tkaPackages.paket1 harus terdefinisi dengan total 23');
assert(tkaPackages.paket2 && tkaPackages.paket2.total === 25, 'tkaPackages.paket2 harus terdefinisi dengan total 25');
assert(tkaPackages.paket3 && tkaPackages.paket3.total === 25, 'tkaPackages.paket3 harus terdefinisi dengan total 25');

const regContent = fs.readFileSync(path.join(__dirname, '../tka/js/tka-registry.js'), 'utf-8');
assert(regContent.includes('totalSoal: 73'), 'tka-registry.js totalSoal harus 73');
assert(regContent.includes('paketTersedia: 3'), 'tka-registry.js paketTersedia harus 3');

const simContent = fs.readFileSync(path.join(__dirname, '../tka/simulasi.html'), 'utf-8');
assert(simContent.includes('src="/tka/js/tka-paket3.js"'), 'tka/simulasi.html harus memuat tka-paket3.js');

const pemContent = fs.readFileSync(path.join(__dirname, '../tka/pembahasan.html'), 'utf-8');
assert(pemContent.includes('src="/tka/js/tka-paket3.js"'), 'tka/pembahasan.html harus memuat tka-paket3.js');

console.log('\n=============================================');
console.log(`📊 Hasil Validasi: 3 Paket (Total 73 butir soal) diperiksa.`);
console.log(`   ❌ Error Kritis : ${errors}`);
console.log(`   ⚠️  Peringatan   : ${warnings}`);
if (errors === 0) {
  console.log(`🎉 SEMUA PAKET TKA KIMIA VALID 100%, TERINTEGRASI DAN SIAP DIGUNAKAN!`);
} else {
  console.log(`❌ Ditemukan ${errors} kesalahan yang harus diperbaiki.`);
}
console.log('=============================================\n');

process.exit(errors > 0 ? 1 : 0);
