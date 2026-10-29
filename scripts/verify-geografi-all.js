// scripts/verify-geografi-all.js
const fs = require('fs');
const path = require('path');

global.window = global;

try {
  require('../tka/data/mapel-geografi.js');
  require('../tka/data/mapel-geografi-paket2.js');
} catch (err) {
  console.error("❌ Gagal me-load file geografi:", err.message);
  process.exit(1);
}

const packages = global.tkaGeografiPackages;
if (!packages) {
  console.error("❌ global.tkaGeografiPackages tidak ditemukan!");
  process.exit(1);
}

console.log(`\n======================================================`);
console.log(`🌍 AUDIT VERIFIKASI TKA GEOGRAFI SEMUA PAKET`);
console.log(`======================================================`);

const pkgKeys = Object.keys(packages).sort((a, b) => {
  const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
  const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
  return numA - numB;
});

let totalAllSoal = 0;
let totalErrors = 0;

pkgKeys.forEach(pkgKey => {
  const pkg = packages[pkgKey];
  const list = pkg.data;
  totalAllSoal += list.length;

  console.log(`\n📦 Memeriksa ${pkgKey.toUpperCase()}: ${pkg.title} (${list.length} Soal)`);

  let pgCount = 0;
  let mcmaCount = 0;
  let bsCount = 0;
  let dollarCount = 0;

  list.forEach((soal, idx) => {
    const expectedId = idx + 1;
    if (soal.id !== expectedId) {
      console.error(`❌ [${pkgKey}] Soal ID salah di index ${idx}: id=${soal.id}, target=${expectedId}`);
      totalErrors++;
    }

    // Check dollar signs
    const str = JSON.stringify(soal);
    const dollars = (str.match(/\$/g) || []).length;
    if (dollars > 0) {
      console.error(`❌ [${pkgKey}] Soal ID ${soal.id} mengandung ${dollars} tanda dolar ($)!`);
      dollarCount += dollars;
      totalErrors++;
    }

    if (soal.tipe === 'pg') {
      pgCount++;
      if (!soal.kunci || typeof soal.kunci !== 'string') {
        console.error(`❌ [${pkgKey}] Soal ID ${soal.id} PG kunci tidak valid`);
        totalErrors++;
      }
    } else if (soal.tipe === 'mcma') {
      mcmaCount++;
      if (!Array.isArray(soal.kunci) || soal.kunci.length === 0) {
        console.error(`❌ [${pkgKey}] Soal ID ${soal.id} MCMA kunci bukan array`);
        totalErrors++;
      }
    } else if (soal.tipe === 'kompleks_bs') {
      bsCount++;
      if (!Array.isArray(soal.items) || soal.items.length === 0) {
        console.error(`❌ [${pkgKey}] Soal ID ${soal.id} BS items kosong`);
        totalErrors++;
      }
    }

    if (!soal.pembahasan || soal.pembahasan.length < 20) {
      console.error(`❌ [${pkgKey}] Soal ID ${soal.id} pembahasan terlalu pendek`);
      totalErrors++;
    }
  });

  console.log(`- Distribusi: PG=${pgCount}, MCMA=${mcmaCount}, Benar/Salah=${bsCount}`);
  console.log(`- Tanda dolar ($): ${dollarCount === 0 ? '✅ 0 Dolar' : `❌ ${dollarCount} Dolar`}`);
});

console.log(`\n======================================================`);
console.log(`📊 TOTAL SOAL GEOGRAFI TERSEDIA: ${totalAllSoal} Butir`);
console.log(`📦 TOTAL PAKET: ${pkgKeys.length} Paket (${pkgKeys.join(', ')})`);
if (totalErrors === 0) {
  console.log(`🎉 SEMUA PAKET TKA GEOGRAFI LOLOS VERIFIKASI TANPA ERROR!`);
} else {
  console.error(`❌ Ditemukan ${totalErrors} error!`);
  process.exit(1);
}
