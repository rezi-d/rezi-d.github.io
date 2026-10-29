const fs = require('fs');
const path = require('path');

function verifyAntropologi() {
  const pPath = path.join(__dirname, '../tka/data/mapel-antropologi.js');
  const content = fs.readFileSync(pPath, 'utf8');

  // Cek tanda dolar
  const dollarCount = (content.match(/\$/g) || []).length;
  console.log(`Dollar count: ${dollarCount}`);
  if (dollarCount > 0) {
    throw new Error(`Antropologi Paket 1 mengandung ${dollarCount} tanda dolar!`);
  }

  // Load objek window simulasi
  const window = {};
  eval(content);

  const packages = window.tkaAntropologiPackages;
  if (!packages) throw new Error("window.tkaAntropologiPackages tidak terdefinisi!");

  const p1 = packages['paket1'];
  if (!p1) throw new Error("paket1 tidak ditemukan!");

  console.log(`Title: ${p1.title}`);
  console.log(`Short Title: ${p1.shortTitle}`);
  console.log(`Jumlah Soal: ${p1.data.length}`);

  if (p1.data.length !== 25) {
    throw new Error(`Ekspektasi 25 soal, ditemukan: ${p1.data.length}`);
  }

  const types = {};
  p1.data.forEach((s, idx) => {
    types[s.tipe] = (types[s.tipe] || 0) + 1;
    const soalNum = s.nomor || s.id;
    if (soalNum !== idx + 1) {
      throw new Error(`Nomor/ID soal tidak urut di indeks ${idx}: ${soalNum}`);
    }
    const questionHtml = s.soalHtml || s.pertanyaan;
    if (!questionHtml || questionHtml.trim().length === 0) {
      throw new Error(`Soal no ${soalNum} tidak ada pertanyaan/soalHtml`);
    }
    if (!s.pembahasan || s.pembahasan.trim().length === 0) {
      throw new Error(`Soal no ${soalNum} tidak ada pembahasan`);
    }

    if (s.tipe === 'pg') {
      const opts = s.options || s.pilihan;
      if (!Array.isArray(opts) || opts.length < 4) {
        throw new Error(`Soal PG no ${soalNum} options kurang`);
      }
      if (typeof s.kunci !== 'string' && typeof s.kunci !== 'number') {
        throw new Error(`Soal PG no ${soalNum} kunci invalid: ${s.kunci}`);
      }
    } else if (s.tipe === 'mcma') {
      const opts = s.options || s.pilihan;
      if (!Array.isArray(opts) || opts.length < 4) {
        throw new Error(`Soal MCMA no ${soalNum} options kurang`);
      }
      if (!Array.isArray(s.kunci) || s.kunci.length === 0) {
        throw new Error(`Soal MCMA no ${soalNum} kunci invalid array`);
      }
    } else if (s.tipe === 'kompleks_bs') {
      const items = s.items || s.pernyataan;
      if (!Array.isArray(items) || items.length < 2) {
        throw new Error(`Soal Kompleks BS no ${soalNum} items kurang`);
      }
      if (!Array.isArray(s.kunci) || s.kunci.length !== items.length) {
        throw new Error(`Soal Kompleks BS no ${soalNum} panjang kunci tidak match`);
      }
    }
  });

  console.log(`Distribusi tipe soal:`, types);
  console.log(`✅ VERIFIKASI ANTROPOLOGI PAKET 1 SUKSES 100%!`);
}

verifyAntropologi();
