// scripts/verify-biologi-all.js
const fs = require('fs');
const path = require('path');

console.log("=== VERIFIKASI TKA BIOLOGI LENGKAP ===");

// 1. Cek file data
const p1Path = path.join(__dirname, '../tka/data/mapel-biologi.js');
const p2Path = path.join(__dirname, '../tka/data/mapel-biologi-paket2.js');
const p3Path = path.join(__dirname, '../tka/data/mapel-biologi-paket3.js');

if (!fs.existsSync(p1Path) || !fs.existsSync(p2Path) || !fs.existsSync(p3Path)) {
  console.error("❌ Salah satu file data Biologi tidak ditemukan!");
  process.exit(1);
}

const { tkaBiologiPaket1Data } = require(p1Path);
const { tkaBiologiPaket2Data } = require(p2Path);
const { tkaBiologiPaket3Data } = require(p3Path);

console.log(`✓ Paket 1: ${tkaBiologiPaket1Data.length} butir`);
console.log(`✓ Paket 2: ${tkaBiologiPaket2Data.length} butir`);
console.log(`✓ Paket 3: ${tkaBiologiPaket3Data.length} butir`);
const total = tkaBiologiPaket1Data.length + tkaBiologiPaket2Data.length + tkaBiologiPaket3Data.length;
console.log(`✓ Total butir soal Biologi: ${total} butir`);

if (tkaBiologiPaket3Data.length !== 25) {
  console.error(`❌ Paket 3 harus tepat 25 soal, sekarang: ${tkaBiologiPaket3Data.length}`);
  process.exit(1);
}

// 2. Audit Paket 3 Soal per Soal
let pgCount = 0;
let mcmaCount = 0;
let bsCount = 0;
let dollarCount = 0;

tkaBiologiPaket3Data.forEach((soal, idx) => {
  const expectedId = idx + 1;
  if (soal.id !== expectedId) {
    console.error(`❌ ID soal mismatch di index ${idx}: expected ${expectedId}, got ${soal.id}`);
    process.exit(1);
  }

  // Cek tipe
  if (soal.tipe === 'pg') {
    pgCount++;
    if (!['A','B','C','D','E'].includes(soal.kunci)) {
      console.error(`❌ Kunci PG salah di no ${soal.id}: ${soal.kunci}`);
      process.exit(1);
    }
    if (!Array.isArray(soal.options) || soal.options.length < 4) {
      console.error(`❌ Opsi PG kurang di no ${soal.id}`);
      process.exit(1);
    }
  } else if (soal.tipe === 'mcma') {
    mcmaCount++;
    if (!Array.isArray(soal.kunci) || soal.kunci.length < 2) {
      console.error(`❌ Kunci MCMA harus array minimal 2 elemen di no ${soal.id}: ${JSON.stringify(soal.kunci)}`);
      process.exit(1);
    }
    if (!Array.isArray(soal.options) || soal.options.length < 4) {
      console.error(`❌ Opsi MCMA kurang di no ${soal.id}`);
      process.exit(1);
    }
  } else if (soal.tipe === 'kompleks_bs') {
    bsCount++;
    if (!Array.isArray(soal.items) || soal.items.length < 2) {
      console.error(`❌ Items kompleks_bs kurang di no ${soal.id}`);
      process.exit(1);
    }
    if (!Array.isArray(soal.kunci) || soal.kunci.length !== soal.items.length) {
      console.error(`❌ Kunci kompleks_bs harus sama panjang dengan items di no ${soal.id}`);
      process.exit(1);
    }
  } else {
    console.error(`❌ Tipe tidak dikenali di no ${soal.id}: ${soal.tipe}`);
    process.exit(1);
  }

  // Cek dollar sign
  const rawStr = JSON.stringify(soal);
  if (rawStr.includes('$')) {
    console.error(`❌ Ditemukan tanda dolar '$' di soal no ${soal.id}!`);
    dollarCount++;
  }
});

console.log(`✓ Distribusi tipe Paket 3:`);
console.log(`   - Pilihan Ganda (PG)           : ${pgCount} butir`);
console.log(`   - Pilihan Ganda Kompleks (MCMA): ${mcmaCount} butir`);
console.log(`   - Benar / Salah (kompleks_bs)  : ${bsCount} butir`);
console.log(`✓ Tanda dolar ($) terdeteksi       : ${dollarCount} (WAJIB 0)`);

if (dollarCount > 0) {
  process.exit(1);
}

// 3. Cek tka-registry.js
const regPath = path.join(__dirname, '../tka/js/tka-registry.js');
const regContent = fs.readFileSync(regPath, 'utf8');
if (!regContent.includes('totalSoal: 77') || !regContent.includes('paketTersedia: 3')) {
  console.error("❌ tka-registry.js belum terupdate untuk Biologi (77 soal / 3 paket)!");
  process.exit(1);
}
console.log("✓ tka-registry.js sudah valid untuk Biologi (77 soal, 3 paket)");

// 4. Cek simulasi.html & pembahasan.html script loader
const simPath = path.join(__dirname, '../tka/simulasi.html');
const pemPath = path.join(__dirname, '../tka/pembahasan.html');
const simContent = fs.readFileSync(simPath, 'utf8');
const pemContent = fs.readFileSync(pemPath, 'utf8');

if (!simContent.includes('mapel-biologi-paket3.js')) {
  console.error("❌ simulasi.html belum memuat mapel-biologi-paket3.js!");
  process.exit(1);
}
console.log("✓ simulasi.html memuat mapel-biologi-paket3.js");

if (!pemContent.includes('mapel-biologi-paket3.js')) {
  console.error("❌ pembahasan.html belum memuat mapel-biologi-paket3.js!");
  process.exit(1);
}
console.log("✓ pembahasan.html memuat mapel-biologi-paket3.js");

// Cek urutan pemuatan: paket 1 sebelum paket 2, paket 2 sebelum paket 3
for (const [fname, content] of [['simulasi.html', simContent], ['pembahasan.html', pemContent]]) {
  const idx1 = content.indexOf('mapel-biologi.js');
  const idx2 = content.indexOf('mapel-biologi-paket2.js');
  const idx3 = content.indexOf('mapel-biologi-paket3.js');
  if (idx1 === -1 || idx2 === -1 || idx3 === -1 || !(idx1 < idx2 && idx2 < idx3)) {
    console.error(`❌ Urutan script Biologi di ${fname} belum teratur berurutan! (p1: ${idx1}, p2: ${idx2}, p3: ${idx3})`);
    process.exit(1);
  }
}
console.log("✓ Urutan pemuatan script Biologi teratur sempurna (1 ➔ 2 ➔ 3)");

console.log("\n🎉 SELURUH VERIFIKASI BIOLOGI BERHASIL DENGAN SEMPURNA! (100% READY)");
