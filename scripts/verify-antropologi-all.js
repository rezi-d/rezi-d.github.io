const fs = require('fs');
const path = require('path');

function verifyAntropologiAll() {
  const p1Path = path.join(__dirname, '../tka/data/mapel-antropologi.js');
  const p2Path = path.join(__dirname, '../tka/data/mapel-antropologi-paket2.js');

  const p1Content = fs.readFileSync(p1Path, 'utf8');
  const p2Content = fs.readFileSync(p2Path, 'utf8');

  // Cek tanda dolar
  const dollarP1 = (p1Content.match(/\$/g) || []).length;
  const dollarP2 = (p2Content.match(/\$/g) || []).length;

  console.log(`Paket 1 Dollar count: ${dollarP1}`);
  console.log(`Paket 2 Dollar count: ${dollarP2}`);
  if (dollarP1 > 0 || dollarP2 > 0) {
    throw new Error(`Ditemukan tanda dolar di dataset Antropologi!`);
  }

  // Load objek window simulasi
  const window = {};
  eval(p1Content);
  eval(p2Content);

  const packages = window.tkaAntropologiPackages;
  if (!packages) throw new Error("window.tkaAntropologiPackages tidak terdefinisi!");

  const paketKeys = Object.keys(packages);
  console.log(`Paket terdaftar: ${paketKeys.join(', ')}`);

  let totalQuestions = 0;
  for (const pKey of paketKeys) {
    const pkg = packages[pKey];
    console.log(`\n--- Verifikasi ${pKey} (${pkg.title}) ---`);
    console.log(`Short Title: ${pkg.shortTitle}`);
    const questions = pkg.data;
    console.log(`Jumlah Soal: ${questions.length}`);
    totalQuestions += questions.length;

    const types = {};
    questions.forEach((s, idx) => {
      types[s.tipe] = (types[s.tipe] || 0) + 1;
      const soalNum = s.nomor || s.id;
      if (soalNum !== idx + 1) {
        throw new Error(`[${pKey}] Nomor/ID soal tidak urut di indeks ${idx}: ${soalNum}`);
      }
      const questionHtml = s.soalHtml || s.pertanyaan;
      if (!questionHtml || questionHtml.trim().length === 0) {
        throw new Error(`[${pKey}] Soal no ${soalNum} tidak ada pertanyaan/soalHtml`);
      }
      if (!s.pembahasan || s.pembahasan.trim().length === 0) {
        throw new Error(`[${pKey}] Soal no ${soalNum} tidak ada pembahasan`);
      }

      if (s.tipe === 'pg') {
        const opts = s.options || s.pilihan;
        if (!Array.isArray(opts) || opts.length < 4) {
          throw new Error(`[${pKey}] Soal PG no ${soalNum} options kurang`);
        }
        if (typeof s.kunci !== 'string' && typeof s.kunci !== 'number') {
          throw new Error(`[${pKey}] Soal PG no ${soalNum} kunci invalid: ${s.kunci}`);
        }
      } else if (s.tipe === 'mcma') {
        const opts = s.options || s.pilihan;
        if (!Array.isArray(opts) || opts.length < 4) {
          throw new Error(`[${pKey}] Soal MCMA no ${soalNum} options kurang`);
        }
        if (!Array.isArray(s.kunci) || s.kunci.length === 0) {
          throw new Error(`[${pKey}] Soal MCMA no ${soalNum} kunci invalid array`);
        }
      } else if (s.tipe === 'kompleks_bs') {
        const items = s.items || s.pernyataan;
        if (!Array.isArray(items) || items.length < 2) {
          throw new Error(`[${pKey}] Soal Kompleks BS no ${soalNum} items kurang`);
        }
        if (!Array.isArray(s.kunci) || s.kunci.length !== items.length) {
          throw new Error(`[${pKey}] Soal Kompleks BS no ${soalNum} panjang kunci tidak match`);
        }
      }
    });
    console.log(`Distribusi tipe soal:`, types);
  }

  console.log(`\nTOTAL SOAL KESELURUHAN (Antropologi): ${totalQuestions}`);
  if (totalQuestions !== 50) {
    throw new Error(`Ekspektasi total 50 soal (25 paket 1 + 25 paket 2), ditemukan: ${totalQuestions}`);
  }
  console.log(`✅ SEMUA VERIFIKASI ANTROPOLOGI LOLOS DENGAN SEMPURNA!`);
}

verifyAntropologiAll();
