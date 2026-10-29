// scripts/verify-ekonomi-all.js
const fs = require('fs');
const path = require('path');

global.window = global;

try {
  require('../tka/data/mapel-ekonomi.js');
} catch (err) {
  console.error("❌ Gagal memuat tka/data/mapel-ekonomi.js:", err.message);
  process.exit(1);
}

const pkg = global.tkaEkonomiPackages && global.tkaEkonomiPackages['paket1'];
if (!pkg) {
  console.error("❌ global.tkaEkonomiPackages['paket1'] tidak ditemukan!");
  process.exit(1);
}

const list = pkg.data;
console.log(`\n======================================================`);
console.log(`📊 AUDIT VERIFIKASI TKA EKONOMI PAKET 1`);
console.log(`======================================================`);
console.log(`Judul Paket: ${pkg.title}`);
console.log(`Total Soal: ${list.length} butir (Target: 25 butir)`);

if (list.length !== 25) {
  console.error(`❌ Jumlah soal tidak 25 (ditemukan: ${list.length})`);
  process.exit(1);
}

let pgCount = 0;
let mcmaCount = 0;
let bsCount = 0;
let dollarCount = 0;
let errCount = 0;

list.forEach((soal, idx) => {
  const expectedId = idx + 1;
  if (soal.id !== expectedId) {
    console.error(`❌ ID soal salah di index ${idx}: id=${soal.id}, harusnya ${expectedId}`);
    errCount++;
  }

  // Check dollar signs
  const str = JSON.stringify(soal);
  const dollars = (str.match(/\$/g) || []).length;
  if (dollars > 0) {
    console.error(`❌ Soal ID ${soal.id} mengandung ${dollars} tanda dolar ($)!`);
    dollarCount += dollars;
    errCount++;
  }

  // Tipe & Validasi Kunci
  if (soal.tipe === 'pg') {
    pgCount++;
    if (!['A', 'B', 'C', 'D', 'E'].includes(soal.kunci)) {
      console.error(`❌ Soal ID ${soal.id} (PG) kunci invalid: ${soal.kunci}`);
      errCount++;
    }
    if (!Array.isArray(soal.options) || soal.options.length < 4) {
      console.error(`❌ Soal ID ${soal.id} (PG) options tidak lengkap`);
      errCount++;
    }
  } else if (soal.tipe === 'mcma') {
    mcmaCount++;
    if (!Array.isArray(soal.kunci) || soal.kunci.length === 0) {
      console.error(`❌ Soal ID ${soal.id} (MCMA) kunci bukan array:`, soal.kunci);
      errCount++;
    }
    if (!Array.isArray(soal.options) || soal.options.length < 3) {
      console.error(`❌ Soal ID ${soal.id} (MCMA) options kurang`);
      errCount++;
    }
  } else if (soal.tipe === 'kompleks_bs') {
    bsCount++;
    if (!Array.isArray(soal.items) || soal.items.length === 0) {
      console.error(`❌ Soal ID ${soal.id} (BS) items bukan array`);
      errCount++;
    }
    if (!Array.isArray(soal.kunci) || soal.kunci.length !== soal.items.length) {
      console.error(`❌ Soal ID ${soal.id} (BS) kunci bukan array sesuai panjang items`);
      errCount++;
    } else {
      soal.items.forEach((it, itemIdx) => {
        if (!it.pernyataan || it.pernyataan.trim() === '') {
          console.error(`❌ Soal ID ${soal.id} (BS) item index ${itemIdx} tidak ada pernyataan`);
          errCount++;
        }
        if (!['Benar', 'Salah'].includes(it.kunci)) {
          console.error(`❌ Soal ID ${soal.id} (BS) item index ${itemIdx} kunci invalid: ${it.kunci}`);
          errCount++;
        }
      });
    }
  } else {
    console.error(`❌ Soal ID ${soal.id} tipe tidak dikenal: ${soal.tipe}`);
    errCount++;
  }

  // Check Pembahasan
  if (!soal.pembahasan || soal.pembahasan.trim().length < 20) {
    console.error(`❌ Soal ID ${soal.id} pembahasan terlalu pendek atau kosong!`);
    errCount++;
  }
});

console.log(`\nDistribusi Variasi Soal:`);
console.log(`- Pilihan Ganda (PG)           : ${pgCount} butir`);
console.log(`- Pilihan Ganda Kompleks (MCMA): ${mcmaCount} butir`);
console.log(`- Benar / Salah (kompleks_bs)  : ${bsCount} butir`);
console.log(`Total Variasi: ${pgCount + mcmaCount + bsCount} butir`);

console.log(`\nCek Tanda Dolar ($): ${dollarCount === 0 ? '✅ 100% BEBAS DARI TANDA DOLAR!' : '❌ ADA TANDA DOLAR'}`);

if (errCount === 0) {
  console.log(`\n🎉 SEMUA 25 SOAL TKA EKONOMI PAKET 1 LOLOS VALIDASI & 100% SIAP DIGUNAKAN!`);
} else {
  console.error(`\n❌ Ditemukan ${errCount} kesalahan!`);
  process.exit(1);
}
