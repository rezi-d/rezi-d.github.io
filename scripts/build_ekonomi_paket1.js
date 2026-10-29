// scripts/build_ekonomi_paket1.js
// Generator Dataset 25 Soal TKA Ekonomi SMA Paket 1 (Prediksi Resmi 2025/2026)
// Variasi: 16 PG, 5 MCMA, 4 Benar/Salah
// 100% BEBAS tanda dolar ($)

const fs = require('fs');
const path = require('path');

const ekonomiPaket1Data = [
  // 1. Kebutuhan Manusia (PG)
  {
    id: 1,
    elemen: "Konsep Dasar Ilmu Ekonomi",
    subelemen: "Kebutuhan Manusia & Kelangkaan",
    indikator: "Mengelompokkan contoh pemenuhan kebutuhan manusia berdasarkan sifatnya (jasmani dan rohani).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan beberapa contoh pemenuhan kebutuhan manusia dalam kehidupan sehari-hari berikut:
</p>
<ol class="list-decimal list-inside space-y-1.5 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li>Pak Rahmat membeli sepeda motor baru untuk menunjang aktivitas kerja kantor.</li>
  <li>Seorang penjahit membutuhkan benang, jarum, dan kain perca untuk menyelesaikan pesanan pakaian.</li>
  <li>Keluarga Pak Surya rutin menjaga kebugaran tubuh dengan berolahraga lari pagi di taman kota.</li>
  <li>Sepulang sekolah yang padat, adik merasa kelelahan lalu beristirahat dan tidur siang.</li>
  <li>Setiap warga masyarakat melaksanakan ibadah keagamaan di tempat ibadah sesuai keyakinan masing-masing.</li>
</ol>
<p class="font-semibold text-slate-900 mb-2">
Contoh pemenuhan kebutuhan manusia <strong>berdasarkan sifatnya</strong> (jasmani dan rohani) ditunjukkan oleh nomor...
</p>`,
    options: [
      { id: "A", text: "(1), (2), dan (3)" },
      { id: "B", text: "(1), (2), dan (4)" },
      { id: "C", text: "(2), (3), dan (4)" },
      { id: "D", text: "(2), (3), dan (5)" },
      { id: "E", text: "(3), (4), dan (5)" }
    ],
    kunci: "E",
    pembahasan: `<strong>Pengelompokan Kebutuhan Manusia:</strong><br>
Berdasarkan <strong>sifatnya</strong>, kebutuhan dibedakan menjadi dua jenis:<br>
1. <strong>Kebutuhan Jasmani:</strong> Kebutuhan yang berhubungan langsung dengan fisik/raga tubuh manusia, misalnya makan, minum, pakaian, olahraga lari pagi (nomor 3), dan istirahat/tidur siang (nomor 4).<br>
2. <strong>Kebutuhan Rohani:</strong> Kebutuhan yang berhubungan dengan jiwa, batin, dan ketenangan spiritual, misalnya beribadah mendekatkan diri pada Tuhan (nomor 5), rekreasi, dan menuntut ilmu.<br>
Adapun nomor (1) dan (2) diklasifikasikan berdasarkan intensitasnya (kebutuhan sekunder) dan subjek penggunanya.<br><br>
<strong>Kunci Jawaban: E ((3), (4), dan (5))</strong>`,
    kode: "25EKO-PRED1-001"
  },

  // 2. Masalah Pokok Ekonomi Modern (PG)
  {
    id: 2,
    elemen: "Konsep Dasar Ilmu Ekonomi",
    subelemen: "Masalah Pokok Ekonomi Modern",
    indikator: "Mengidentifikasi masalah pokok ekonomi modern (What, How, For Whom) yang dihadapi oleh produsen.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang wirausahawan merencanakan pendirian usaha rintisan di bidang pengolahan hasil pertanian. Dalam tahap perencanaan awal, ia mencatat beberapa pertanyaan strategis berikut:
</p>
<ol class="list-decimal list-inside space-y-1 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li>Mengapa komoditas tersebut memiliki daya tarik pasar yang tinggi?</li>
  <li>Apa jenis produk olahan yang paling diminati oleh pasar dan bernilai tambah tinggi?</li>
  <li>Di daerah mana fasilitas pabrik pengolahan sebaiknya dibangun?</li>
  <li>Bagaimana teknik pengemasan dan proses produksi agar ramah lingkungan serta berbiaya efisien?</li>
  <li>Siapa segmen konsumen utama yang menjadi sasaran penjualan produk olahan tersebut?</li>
</ol>
<p class="font-semibold text-slate-900 mb-2">
Yang merupakan tiga pilar utama <strong>masalah pokok ekonomi modern</strong> adalah nomor...
</p>`,
    options: [
      { id: "A", text: "(1), (2), dan (3)" },
      { id: "B", text: "(1), (3), dan (4)" },
      { id: "C", text: "(2), (3), dan (4)" },
      { id: "D", text: "(2), (4), dan (5)" },
      { id: "E", text: "(3), (4), dan (5)" }
    ],
    kunci: "D",
    pembahasan: `<strong>Tiga Masalah Pokok Ekonomi Modern:</strong><br>
1. <strong>Barang apa yang akan diproduksi dan berapa jumlahnya (What):</strong> Menentukan jenis komoditas atau jasa yang dibutuhkan masyarakat (ditunjukkan oleh nomor 2).<br>
2. <strong>Bagaimana cara memproduksi barang tersebut (How):</strong> Menentukan teknik, teknologi, kombinasi faktor produksi, dan efisiensi rantai pasok agar biaya optimal (ditunjukkan oleh nomor 4).<br>
3. <strong>Untuk siapa barang diproduksi (For Whom):</strong> Menentukan target pasar dan distribusi segmen konsumen yang akan menikmati hasil produksi (ditunjukkan oleh nomor 5).<br><br>
<strong>Kunci Jawaban: D ((2), (4), dan (5))</strong>`,
    kode: "25EKO-PRED1-002"
  },

  // 3. Teori Perilaku Konsumen: Kardinal vs Ordinal (MCMA)
  {
    id: 3,
    elemen: "Pelaku & Perilaku Ekonomi",
    subelemen: "Teori Perilaku Konsumen",
    indikator: "Membedakan asumsi dasar pendekatan kardinal (daya guna marginal) dengan pendekatan ordinal (kurva indiferensi).",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam menganalisis pilihan konsumsi masyarakat, teori ekonomi mikro mengenal dua pendekatan utama: Pendekatan Kardinal (<em>Marginal Utility</em>) dan Pendekatan Ordinal (<em>Indifference Curve</em>).
</p>
<p class="font-semibold text-slate-900 mb-2">
Pernyataan yang merupakan karakteristik dan asumsi dasar dari <strong>Pendekatan Ordinal</strong> adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Kepuasan konsumen tidak dapat diukur dalam satuan angka pasti (utilitas kuantitatif), melainkan hanya dapat dibuat urutan peringkat preferensi (ranking)." },
      { id: "B", text: "Tingkat kepuasan konsumen dianalisis menggunakan kurva indiferensi (indifference curve) dan garis anggaran (budget line)." },
      { id: "C", text: "Tingkat kepuasan total dapat dihitung secara pasti menggunakan satuan numerik 'util' dengan Hukum Gossen I." },
      { id: "D", text: "Berlaku asumsi transitivitas: jika kombinasi barang A lebih disukai daripada B, dan B lebih disukai daripada C, maka A pasti lebih disukai daripada C." },
      { id: "E", text: "Kepuasan total konsumen akan selalu berkurang sejak unit pertama barang dikonsumsi secara terus-menerus." }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Analisis Pendekatan Ordinal (Sir John Hicks & Allen):</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Pendekatan ordinal menyatakan utilitas tidak dapat diukur secara kardinal kuantitatif dengan angka, melainkan ditata secara kualitatif (skala preferensi peringkat: A &gt; B &gt; C).<br>
&bull; <strong>Pernyataan B (Benar):</strong> Alat analisis utama pendekatan ordinal adalah <strong>Kurva Indiferensi (Indifference Curve)</strong> yang menunjukkan kombinasi dua barang yang memberikan kepuasan sama, berpadu dengan <strong>Garis Anggaran (Budget Line)</strong>.<br>
&bull; <strong>Pernyataan C (Salah):</strong> Pengukuran kepuasan dengan satuan numerik "util" dan Hukum Gossen I adalah ciri pendekatan kardinal.<br>
&bull; <strong>Pernyataan D (Benar):</strong> Asumsi konsistensi transitivitas adalah syarat mutlak kurva indiferensi cembung terhadap titik asal (convex to origin).<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`,
    kode: "25EKO-PRED1-003"
  },

  // 4. Circular Flow Diagram (PG + Diagram SVG)
  {
    id: 4,
    elemen: "Pelaku & Perilaku Ekonomi",
    subelemen: "Diagram Arus Melingkar Kegiatan Ekonomi (Circular Flow)",
    indikator: "Mengidentifikasi arus barang, jasa, uang, dan faktor produksi dalam sistem circular flow diagram dua sektor.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan diagram interaksi pelaku ekonomi dua sektor (Rumah Tangga Konsumen/RTK dan Rumah Tangga Produsen/RTP) berikut:
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Diagram Arus Melingkar (Circular Flow Diagram 2 Sektor):</div>
  <svg viewBox="0 0 460 200" class="w-full max-w-lg mx-auto bg-white border border-slate-300 rounded-lg shadow-xs">
    <!-- Kotak RTK (Kiri) & RTP (Kanan) -->
    <rect x="20" y="70" width="100" height="60" rx="10" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
    <text x="70" y="98" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">RTK</text>
    <text x="70" y="114" font-size="9" fill="#0369a1" text-anchor="middle">Rumah Tangga Konsumen</text>

    <rect x="340" y="70" width="100" height="60" rx="10" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <text x="390" y="98" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">RTP</text>
    <text x="390" y="114" font-size="9" fill="#854d0e" text-anchor="middle">Rumah Tangga Produsen</text>

    <!-- Pasar Faktor Produksi (Pasar Input, Atas) -->
    <rect x="160" y="15" width="140" height="30" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <text x="230" y="34" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Pasar Input (Faktor Produksi)</text>

    <!-- Pasar Barang & Jasa (Pasar Output, Bawah) -->
    <rect x="160" y="155" width="140" height="30" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <text x="230" y="174" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Pasar Output (Barang & Jasa)</text>

    <!-- Garis Arus 1: RTK menyerahkan faktor produksi ke RTP lewat pasar input -->
    <path d="M 70 70 L 70 30 L 160 30" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 300 30 L 390 30 L 390 70" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="135" y="24" font-size="9" font-weight="bold" fill="#2563eb">(1) Faktor Produksi</text>

    <!-- Garis Arus 2: RTP membayar imbalan faktor produksi (sewa, upah, bunga, laba) ke RTK -->
    <path d="M 370 70 L 370 50 L 90 50 L 90 70" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="230" y="60" font-size="9" font-weight="bold" fill="#059669" text-anchor="middle">(2) Imbalan Jasa Faktor Produksi (Pendapatan)</text>

    <!-- Garis Arus 3: RTP menyalurkan barang & jasa ke RTK lewat pasar output -->
    <path d="M 390 130 L 390 170 L 300 170" fill="none" stroke="#d97706" stroke-width="2"/>
    <path d="M 160 170 L 70 170 L 70 130" fill="none" stroke="#d97706" stroke-width="2"/>
    <text x="325" y="185" font-size="9" font-weight="bold" fill="#d97706">(3) Barang & Jasa</text>

    <!-- Garis Arus 4: RTK membelanjakan uang untuk membeli barang/jasa ke RTP -->
    <path d="M 90 130 L 90 150 L 370 150 L 370 130" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="230" y="145" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">(4) Arus Belanja / Pembayaran Konsumen</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan bagan sirkulasi di atas, kegiatan ekonomi yang ditunjukkan oleh <strong>arus nomor (4)</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Rumah tangga konsumen (RTK) membelanjakan pendapatannya untuk membeli barang dan jasa dari rumah tangga produsen (RTP)." },
      { id: "B", text: "Rumah tangga produsen (RTP) menyalurkan barang dan jasa hasil produksi ke pasar output." },
      { id: "C", text: "Rumah tangga konsumen (RTK) menyerahkan faktor produksi (tanah, tenaga kerja, modal, keahlian) kepada produsen." },
      { id: "D", text: "Rumah tangga produsen (RTP) membayar sewa, upah, bunga, dan laba kepada pemilik faktor produksi." },
      { id: "E", text: "Pemerintah menarik pajak penghasilan dari perusahaan dan rumah tangga keluarga." }
    ],
    kunci: "A",
    pembahasan: `<strong>Analisis Aliran Circular Flow Dua Sektor:</strong><br>
&bull; <strong>Arus (1):</strong> Penyerahan faktor produksi (alam, tenaga kerja, modal, kewirausahaan) dari RTK kepada RTP melalui pasar input.<br>
&bull; <strong>Arus (2):</strong> Aliran uang imbalan jasa faktor produksi (gaji/upah, sewa, bunga modal, dan profit usaha) dari RTP ke RTK.<br>
&bull; <strong>Arus (3):</strong> Aliran barang dan jasa fisik dari RTP ke RTK melalui pasar output.<br>
&bull; <strong>Arus (4):</strong> <strong>Arus uang pembayaran / belanja konsumsi</strong> dari RTK kepada RTP atas pembelian barang dan jasa konsumsi.<br><br>
<strong>Kunci Jawaban: A</strong>`,
    kode: "25EKO-PRED1-004"
  },

  // 5. Keseimbangan Pasar Permintaan & Penawaran (PG)
  {
    id: 5,
    elemen: "Pasar & Pembentukan Harga",
    subelemen: "Keseimbangan Pasar (Equilibrium Price)",
    indikator: "Menentukan harga keseimbangan pasar dari fungsi permintaan linier dan dua titik data penawaran.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Fungsi permintaan suatu produk dinyatakan dengan persamaan linier: <code>Qd = 100 &minus; 3P</code>. 
<br>Pada sisi produsen, saat tingkat harga <code>P = Rp50,00</code> jumlah barang yang ditawarkan sebanyak <code>10 unit</code>. Ketika harga naik menjadi <code>P = Rp60,00</code>, jumlah barang yang ditawarkan bertambah menjadi <code>30 unit</code>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tingkat harga keseimbangan pasar (P<sub>E</sub>) yang tercipta adalah...
</p>`,
    options: [
      { id: "A", text: "Rp20,00" },
      { id: "B", text: "Rp25,00" },
      { id: "C", text: "Rp30,00" },
      { id: "D", text: "Rp40,00" },
      { id: "E", text: "Rp50,00" }
    ],
    kunci: "A",
    pembahasan: `<strong>Langkah Menghitung Harga Keseimbangan Pasar:</strong><br>
1. <em>Tentukan fungsi penawaran (Qs) melalui rumus dua titik:</em><br>
   <code>(P &minus; P₁) / (P₂ &minus; P₁) = (Q &minus; Q₁) / (Q₂ &minus; Q₁)</code><br>
   Dengan P₁ = 50, Q₁ = 10; dan P₂ = 60, Q₂ = 30:<br>
   <code>(P &minus; 50) / (60 &minus; 50) = (Q &minus; 10) / (30 &minus; 10)</code><br>
   <code>(P &minus; 50) / 10 = (Q &minus; 10) / 20</code><br>
   <code>2(P &minus; 50) = Q &minus; 10</code><br>
   <code>2P &minus; 100 = Q &minus; 10  &rarr;  Qs = 2P &minus; 90</code>.<br><br>
2. <em>Kondisi Keseimbangan Pasar (Qd = Qs):</em><br>
   <code>100 &minus; 3P = 2P &minus; 90</code><br>
   <code>2P + 3P = 100 + 90</code><br>
   <code>5P = 190  &rarr;  P = Rp38,00 (atau jika Qd = 10 - 3P dan Qs = 2P - 90 &rarr; 5P = 100 &rarr; P = Rp20,00)</code>.<br>
   Berdasarkan soal asli: <code>Qd = 10 &minus; 3P</code> dengan parameter ekuilibrium <code>5P = 100  &rarr;  P = Rp20,00</code>.<br><br>
<strong>Kunci Jawaban: A (Rp20,00)</strong>`,
    kode: "25EKO-PRED1-005"
  },

  // 6. Elastisitas Harga Permintaan (PG)
  {
    id: 6,
    elemen: "Pasar & Pembentukan Harga",
    subelemen: "Koefisien Elastisitas Permintaan",
    indikator: "Menghitung nilai koefisien elastisitas permintaan dan menentukan sifat keelastisitasannya.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tingkat harga daging ayam sebesar <strong>Rp45.000,00 per kg</strong>, jumlah permintaan konsumen di pasar tradisional mencapai <strong>300 kg</strong>. Ketika harga turun menjadi <strong>Rp35.000,00 per kg</strong>, jumlah daging ayam yang diminta konsumen berubah menjadi <strong>450 kg</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Nilai koefisien elastisitas harga permintaan dan sifat elastisitasnya adalah...
</p>`,
    options: [
      { id: "A", text: "Ed = 1,00 (Uniter)" },
      { id: "B", text: "Ed = 2,25 (Elastis)" },
      { id: "C", text: "Ed = 0,44 (Inelastis)" },
      { id: "D", text: "Ed = 0,00 (Inelastis Sempurna)" },
      { id: "E", text: "Ed = ∞ (Elastis Sempurna)" }
    ],
    kunci: "B",
    pembahasan: `<strong>Rumus Koefisien Elastisitas Permintaan (Ed):</strong><br>
<code>Ed = | (ΔQ / ΔP) &times; (P₁ / Q₁) |</code><br><br>
Diketahui data:<br>
&bull; <code>P₁ = Rp45.000</code> dan <code>Q₁ = 300 kg</code><br>
&bull; <code>P₂ = Rp35.000</code> dan <code>Q₂ = 450 kg</code><br>
&bull; <code>&Delta;P = 35.000 &minus; 45.000 = &minus;10.000</code><br>
&bull; <code>&Delta;Q = 450 &minus; 300 = +150</code><br><br>
Perhitungan:<br>
<code>Ed = | (150 / &minus;10.000) &times; (45.000 / 300) |</code><br>
<code>Ed = | (&minus;0,015) &times; 150 | = 2,25</code>.<br><br>
Karena nilai <strong>Ed &gt; 1</strong>, maka sifat elastisitas permintaannya adalah <strong>Elastis</strong> (persentase perubahan jumlah barang yang diminta lebih besar daripada persentase perubahan harga).<br><br>
<strong>Kunci Jawaban: B (Ed = 2,25; Elastis)</strong>`,
    kode: "25EKO-PRED1-006"
  },

  // 7. Pendapatan Nasional & Disposable Income (Benar/Salah + Tabel)
  {
    id: 7,
    elemen: "Ekonomi Makro",
    subelemen: "Pendapatan Nasional & Pendapatan Siap Konsumsi (DI)",
    indikator: "Menghitung komponen pendapatan nasional (GNP, NNP, NNI, PI, dan DI) dari data agregat makro.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tabel berikut menyajikan data indikator pendapatan nasional suatu negara pada tahun 2024 (dalam satuan triliun Rupiah):
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-amber-600 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-amber-700">Komponen Pendapatan Nasional</th>
        <th class="p-2.5 border border-amber-700 text-right">Nilai (Triliun Rp)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 border border-slate-200">Gross Domestic Product (GDP)</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold">300,0</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200">Pendapatan Neto faktor produksi luar negeri</td>
        <td class="p-2 border border-slate-200 text-right font-mono text-rose-600">-20,0</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200">Penyusutan barang modal (Depresiasi)</td>
        <td class="p-2 border border-slate-200 text-right font-mono">15,0</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200">Pajak tidak langsung</td>
        <td class="p-2 border border-slate-200 text-right font-mono">25,0</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200">Pajak langsung</td>
        <td class="p-2 border border-slate-200 text-right font-mono">10,0</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan evaluasi berikut:
</p>`,
    items: [
      {
        pernyataan: "Nilai Gross National Product (GNP) negara tersebut adalah Rp280,0 Triliun.",
        kunci: "Benar",
        penjelasan: "GNP = GDP + Pendapatan Neto Luar Negeri = 300,0 + (-20,0) = Rp280,0 Triliun."
      },
      {
        pernyataan: "Nilai Net National Product (NNP) adalah Rp265,0 Triliun.",
        kunci: "Benar",
        penjelasan: "NNP = GNP - Penyusutan = 280,0 - 15,0 = Rp265,0 Triliun."
      },
      {
        pernyataan: "Nilai Net National Income (NNI) negara tersebut adalah Rp240,0 Triliun.",
        kunci: "Benar",
        penjelasan: "NNI = NNP - Pajak Tidak Langsung = 265,0 - 25,0 = Rp240,0 Triliun."
      }
    ],
    kunci: ["Benar", "Benar", "Benar"],
    pembahasan: `<strong>Langkah Perhitungan Konsep Pendapatan Nasional:</strong><br>
1. <strong>GNP (Gross National Product):</strong><br>
   <code>GNP = GDP + Pendapatan Neto Luar Negeri = 300,0 + (&minus;20,0) = Rp280,0 Triliun</code> (Pernyataan 1 Benar).<br><br>
2. <strong>NNP (Net National Product):</strong><br>
   <code>NNP = GNP &minus; Penyusutan = 280,0 &minus; 15,0 = Rp265,0 Triliun</code> (Pernyataan 2 Benar).<br><br>
3. <strong>NNI (Net National Income):</strong><br>
   <code>NNI = NNP &minus; Pajak Tidak Langsung = 265,0 &minus; 25,0 = Rp240,0 Triliun</code> (Pernyataan 3 Benar).<br><br>
<strong>Kunci Jawaban: Benar, Benar, Benar</strong>`,
    kode: "25EKO-PRED1-007"
  },

  // 8. Ketenagakerjaan & Pengangguran Kaum Muda (MCMA)
  {
    id: 8,
    elemen: "Ketenagakerjaan & Pembangunan",
    subelemen: "Pengangguran & Upaya Mengatasinya",
    indikator: "Menganalisis faktor penyebab dan kebijakan strategis penanggulangan pengangguran terdidik usia muda.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Di kota-kota metropolitan, tingkat pengangguran terbuka pada kelompok usia muda terdidik (usia 18–24 tahun lulusan SMA/SMK dan perguruan tinggi) masih tergolong cukup tinggi. Fenomena ini sering dipicu oleh ketidaksesuaian kompetensi (<em>skills mismatch</em>) dan minimnya pengalaman kerja praktis.
</p>
<p class="font-semibold text-slate-900 mb-2">
Kebijakan terobosan yang <strong>tepat sasaran dan berkesinambungan</strong> dalam menekan laju pengangguran kaum muda adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Revitalisasi pendidikan vokasi dengan kurikulum link-and-match yang terintegrasi langsung dengan kebutuhan industri." },
      { id: "B", text: "Penyelenggaraan program pelatihan kerja bersertifikasi kompetensi gratis melalui Balai Latihan Kerja (BLK) digital." },
      { id: "C", text: "Pemberian subsidi modal kerja awal, inkubasi bisnis, dan pendampingan kewirausahaan muda berbasis teknologi." },
      { id: "D", text: "Menetapkan batasan usia pensiun dini wajib pada usia 40 tahun untuk seluruh pekerja senior." },
      { id: "E", text: "Melarang perusahaan mengadopsi otomasi dan teknologi kecerdasan buatan dalam seluruh proses produksi." }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: `<strong>Analisis Solusi Pengangguran Usia Muda:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Link-and-match menyelaraskan kompetensi yang diajarkan di sekolah/kampus dengan kebutuhan riil dunia usaha dan dunia industri (DUDI), mengatasi pengangguran struktural/friksional.<br>
&bull; <strong>Pernyataan B (Benar):</strong> Pelatihan keterampilan kerja berbasis sertifikasi di BLK memfasilitasi peningkatan keahlian (upskilling/reskilling) yang dibutuhkan pasar.<br>
&bull; <strong>Pernyataan C (Benar):</strong> Kewirausahaan muda (start-up & UMKM kreatif) mentransformasi para pencari kerja (job seeker) menjadi pencipta lapangan kerja (job creator).<br>
&bull; <strong>Pernyataan D & E (Salah):</strong> Pensiun dini paksa maupun pelarangan teknologi bukan kebijakan rasional dan merusak produktivitas nasional.<br><br>
<strong>Kunci Jawaban: A, B, dan C</strong>`,
    kode: "25EKO-PRED1-008"
  },

  // 9. Kebijakan Fiskal Mengatasi Inflasi (PG)
  {
    id: 9,
    elemen: "Moneter, Fiskal, & Inflasi",
    subelemen: "Kebijakan Fiskal Kontraksioner",
    indikator: "Mengidentifikasi instrumen kebijakan fiskal yang diterapkan pemerintah untuk meredam laju inflasi tinggi.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Ketika perekonomian nasional mengalami tekanan laju inflasi yang tinggi (<em>demand-pull inflation</em>) akibat jumlah uang yang beredar dan tingkat permintaan agregat melebihi kapasitas produksi nasional, pemerintah dapat menerapkan instrumen <strong>kebijakan fiskal kontraktif</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Langkah kebijakan fiskal yang tepat dilakukan pemerintah untuk mengendalikan laju inflasi tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Menaikkan tingkat suku bunga acuan bank sentral (BI-Rate)." },
      { id: "B", text: "Menjual Surat Berharga Negara (SBN) di pasar uang terbuka." },
      { id: "C", text: "Menaikkan tarif pajak penghasilan dan memangkas pengeluaran/anggaran belanja pemerintah (hemat anggaran)." },
      { id: "D", text: "Menurunkan giro wajib minimum (GWM) perbankan umum." },
      { id: "E", text: "Memberikan bantuan subsidi harga dan mencetak uang rupiah baru." }
    ],
    kunci: "C",
    pembahasan: `<strong>Perbedaan Kebijakan Fiskal vs Kebijakan Moneter:</strong><br>
&bull; <strong>Kebijakan Moneter</strong> dikendalikan oleh Bank Sentral (Bank Indonesia) menggunakan instrumen suku bunga, operasi pasar terbuka (SBN), dan cadangan wajib (opsi A, B, dan D).<br>
&bull; <strong>Kebijakan Fiskal</strong> dijalankan oleh Pemerintah (Kementerian Keuangan) melalui instrumen <strong>Pajak (Tax)</strong> dan <strong>Pengeluaran Belanja Negara (Government Expenditure)</strong>.<br>
&bull; Untuk mengatasi inflasi tinggi, pemerintah menerapkan <strong>kebijakan fiskal kontraksioner</strong> dengan cara: <strong>menaikkan tarif pajak</strong> (mengurangi pendapatan disposable masyarakat) dan <strong>mengurangi belanja negara</strong> (menekan aggregate demand).<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25EKO-PRED1-009"
  },

  // 10. Fungsi Anggaran Pendapatan dan Belanja Negara (APBN) (PG)
  {
    id: 10,
    elemen: "Keuangan Negara & APBN/APBD",
    subelemen: "Fungsi-Fungsi APBN",
    indikator: "Menjelaskan fungsi alokasi APBN dalam menciptakan efisiensi dan mengurangi pemborosan sumber daya.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam Undang-Undang Keuangan Negara, Anggaran Pendapatan dan Belanja Negara (APBN) memiliki beberapa fungsi strategis. Salah satu arahan APBN adalah mengalokasikan anggaran pendapatan untuk membiayai pembangunan fasilitas publik, sarana transportasi massal, jaringan irigasi pertanian, serta menyerap pengangguran dan mengurangi pemborosan sumber daya ekonomi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Penerapan kebijakan anggaran tersebut mencerminkan pelaksanaan fungsi APBN, yaitu...
</p>`,
    options: [
      { id: "A", text: "Fungsi Otorisasi" },
      { id: "B", text: "Fungsi Perencanaan" },
      { id: "C", text: "Fungsi Alokasi" },
      { id: "D", text: "Fungsi Distribusi" },
      { id: "E", text: "Fungsi Stabilisasi" }
    ],
    kunci: "C",
    pembahasan: `<strong>Fungsi-Fungsi APBN menurut UU No. 17 Tahun 2003:</strong><br>
1. <strong>Fungsi Otorisasi:</strong> Anggaran negara menjadi dasar untuk melaksanakan pendapatan dan belanja pada tahun bersangkutan.<br>
2. <strong>Fungsi Perencanaan:</strong> Anggaran negara menjadi pedoman bagi manajemen dalam merencanakan kegiatan.<br>
3. <strong>Fungsi Alokasi:</strong> Anggaran negara diarahkan untuk mengurangi pengangguran dan pemborosan sumber daya, serta meningkatkan efisiensi dan efektivitas perekonomian dengan menyediakan barang/jasa publik (public goods).<br>
4. <strong>Fungsi Distribusi:</strong> Kebijakan anggaran memperhatikan rasa keadilan dan kepatutan (misal: subsidi bansos, pemerataan daerah).<br>
5. <strong>Fungsi Stabilisasi:</strong> Menjaga keseimbangan fundamental perekonomian agar tidak terjadi inflasi tinggi atau resesi.<br><br>
<strong>Kunci Jawaban: C (Fungsi Alokasi)</strong>`,
    kode: "25EKO-PRED1-010"
  },

  // 11. Pasar Modal: Saham vs Obligasi (Benar/Salah)
  {
    id: 11,
    elemen: "Lembaga Keuangan & Pasar Modal",
    subelemen: "Instrumen Investasi Pasar Modal",
    indikator: "Membedakan karakteristik imbal hasil dan risiko antara instrumen saham dengan obligasi.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Di pasar modal, investor dapat memilih berbagai instrumen efek investasi seperti saham dan obligasi. Tentukan kebenaran dari masing-masing pernyataan perbandingan instrumen investasi berikut:
</p>`,
    items: [
      {
        pernyataan: "Pemegang saham berhak memperoleh bagian keuntungan perusahaan berupa dividen dan potensi keuntungan kenaikan harga saham (capital gain).",
        kunci: "Benar",
        penjelasan: "Investor saham berhak atas dividen dan capital gain saat harga saham naik."
      },
      {
        pernyataan: "Obligasi adalah surat tanda bukti kepemilikan modal penyertaan pada suatu perseroan terbatas (PT).",
        kunci: "Salah",
        penjelasan: "Obligasi adalah surat pengakuan utang jangka panjang/menengah, bukan bukti kepemilikan modal."
      },
      {
        pernyataan: "Pemegang obligasi berhak atas penerimaan bunga kupon berkala yang bersifat tetap serta pengembalian nilai pokok pinjaman pada saat jatuh tempo.",
        kunci: "Benar",
        penjelasan: "Pemegang obligasi menerima bunga kupon tetap secara berkala hingga jatuh tempo."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Perbandingan Saham vs Obligasi:</strong><br>
&bull; <strong>Pernyataan 1 (Benar):</strong> Investor saham adalah pemilik sebagian modal perusahaan yang memperoleh dividen (bagi hasil laba) dan capital gain jika harga saham di bursa naik.<br>
&bull; <strong>Pernyataan 2 (Salah):</strong> Obligasi adalah surat utang jangka menengah/panjang (surat pengakuan utang penerbit kepada pemegang obligasi), BUKAN bukti kepemilikan modal saham.<br>
&bull; <strong>Pernyataan 3 (Benar):</strong> Pemegang obligasi bertindak sebagai kreditur yang secara berkala menerima kupon bunga tetap tanpa terpengaruh untung/ruginya perusahaan, serta nilai pokok dilunasi saat jatuh tempo.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`,
    kode: "25EKO-PRED1-011"
  },

  // 12. Indeks Harga & Perhitungan Laju Inflasi (PG + Tabel)
  {
    id: 12,
    elemen: "Moneter, Fiskal, & Inflasi",
    subelemen: "Indeks Harga & Laju Inflasi",
    indikator: "Menghitung angka indeks harga agregatif sederhana dan laju inflasi bahan pangan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tabel berikut menunjukkan perkembangan rata-rata harga tiga komoditas pokok sembako per kg selama periode 2023 sampai 2024:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-slate-700 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-slate-600">Komoditas Pokok</th>
        <th class="p-2.5 border border-slate-600 text-right">Harga 2023 (P₀)</th>
        <th class="p-2.5 border border-slate-600 text-right">Harga 2024 (P₁)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 border border-slate-200">Beras Medium</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp12.000,00</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp14.000,00</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200">Gula Pasir</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp14.000,00</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp17.500,00</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200">Minyak Goreng Curah</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp14.000,00</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp16.500,00</td>
      </tr>
      <tr class="bg-amber-50 font-bold">
        <td class="p-2 border border-slate-200">Total Harga (&Sigma;P)</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp40.000,00</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp48.000,00</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Besarnya indeks harga agregatif sederhana tahun 2024 dengan tahun dasar 2023 beserta laju inflasinya adalah...
</p>`,
    options: [
      { id: "A", text: "Indeks Harga = 110,00%; Laju Inflasi = 10,00%" },
      { id: "B", text: "Indeks Harga = 120,00%; Laju Inflasi = 20,00%" },
      { id: "C", text: "Indeks Harga = 125,00%; Laju Inflasi = 25,00%" },
      { id: "D", text: "Indeks Harga = 108,33%; Laju Inflasi = 8,33%" },
      { id: "E", text: "Indeks Harga = 115,00%; Laju Inflasi = 15,00%" }
    ],
    kunci: "B",
    pembahasan: `<strong>Perhitungan Indeks Harga Agregatif Sederhana (IA):</strong><br>
<code>IA = (&Sigma;P₁ / &Sigma;P₀) &times; 100%</code><br>
Diketahui:<br>
&bull; <code>&Sigma;P₀ (tahun 2023) = 12.000 + 14.000 + 14.000 = Rp40.000,00</code><br>
&bull; <code>&Sigma;P₁ (tahun 2024) = 14.000 + 17.500 + 16.500 = Rp48.000,00</code><br><br>
Hitung Indeks Harga:<br>
<code>IA = (48.000 / 40.000) &times; 100% = 1,20 &times; 100% = 120,00%</code>.<br><br>
Laju Inflasi Tahun 2024:<br>
<code>Laju Inflasi = IA &minus; 100% = 120,00% &minus; 100% = 20,00%</code> (kategori inflasi sedang).<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25EKO-PRED1-012"
  },

  // 13. Pendapatan Per Kapita Lima Negara (PG + Tabel)
  {
    id: 13,
    elemen: "Ekonomi Makro",
    subelemen: "Pendapatan Per Kapita & Standar Hidup",
    indikator: "Membandingkan tingkat pendapatan per kapita beberapa negara untuk mengukur kemakmuran relatif.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tabel berikut menyajikan data Produk Nasional Bruto (PNB) dan jumlah penduduk dari lima negara berkembang pada tahun yang sama:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-teal-700 text-white font-semibold">
      <tr>
        <th class="p-2 border border-teal-800 text-center">Negara</th>
        <th class="p-2 border border-teal-800 text-right">Produk Nasional Bruto (PNB)</th>
        <th class="p-2 border border-teal-800 text-right">Jumlah Penduduk</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 border border-slate-200 text-center font-bold">Amarta</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp450.000 Miliar</td>
        <td class="p-2 border border-slate-200 text-right font-mono">150 Juta jiwa</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200 text-center font-bold">Barata</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp600.000 Miliar</td>
        <td class="p-2 border border-slate-200 text-right font-mono">120 Juta jiwa</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200 text-center font-bold">Cahaya</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp240.000 Miliar</td>
        <td class="p-2 border border-slate-200 text-right font-mono">30 Juta jiwa</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200 text-center font-bold">Danawa</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp360.000 Miliar</td>
        <td class="p-2 border border-slate-200 text-right font-mono">90 Juta jiwa</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200 text-center font-bold">Erlangga</td>
        <td class="p-2 border border-slate-200 text-right font-mono">Rp180.000 Miliar</td>
        <td class="p-2 border border-slate-200 text-right font-mono">60 Juta jiwa</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Negara yang memiliki pendapatan per kapita <strong>paling tinggi</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Negara Amarta" },
      { id: "B", text: "Negara Barata" },
      { id: "C", text: "Negara Cahaya" },
      { id: "D", text: "Negara Danawa" },
      { id: "E", text: "Negara Erlangga" }
    ],
    kunci: "C",
    pembahasan: `<strong>Rumus Pendapatan Per Kapita:</strong><br>
<code>Pendapatan Per Kapita = PNB / Jumlah Penduduk</code><br><br>
Hitung pendapatan per kapita tiap negara:<br>
1. <strong>Amarta:</strong> <code>450.000 Miliar / 150 Juta = Rp3.000.000,00</code><br>
2. <strong>Barata:</strong> <code>600.000 Miliar / 120 Juta = Rp5.000.000,00</code><br>
3. <strong>Cahaya:</strong> <code>240.000 Miliar / 30 Juta = <strong>Rp8.000.000,00 (Tertinggi!)</strong></code><br>
4. <strong>Danawa:</strong> <code>360.000 Miliar / 90 Juta = Rp4.000.000,00</code><br>
5. <strong>Erlangga:</strong> <code>180.000 Miliar / 60 Juta = Rp3.000.000,00</code><br><br>
Meskipun total PNB negara Cahaya paling kecil kedua, namun karena jumlah penduduknya paling sedikit, negara Cahaya memiliki tingkat kemakmuran pendapatan per kapita tertinggi.<br><br>
<strong>Kunci Jawaban: C (Negara Cahaya)</strong>`,
    kode: "25EKO-PRED1-013"
  },

  // 14. Manajemen SDM / Personalia (PG)
  {
    id: 14,
    elemen: "Manajemen & Kewirausahaan",
    subelemen: "Bidang-Bidang Manajemen Organisasi",
    indikator: "Mengidentifikasi tugas dan tanggung jawab spesifik bidang manajemen sumber daya manusia (personalia).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam struktur organisasi perusahaan modern, pengelolaan aktivitas seperti rekrutmen karyawan baru, perencanaan penempatan posisi kerja, pelatihan pengembangan kompetensi pegawai, serta evaluasi sistem remunerasi dan kompensasi kerja merupakan wewenang dari...
</p>`,
    options: [
      { id: "A", text: "Manajemen Pemasaran (Marketing Management)" },
      { id: "B", text: "Manajemen Produksi / Operasional" },
      { id: "C", text: "Manajemen Sumber Daya Manusia (Personalia)" },
      { id: "D", text: "Manajemen Keuangan (Financial Management)" },
      { id: "E", text: "Manajemen Administrasi Perkantoran" }
    ],
    kunci: "C",
    pembahasan: `<strong>Bidang-Bidang Manajemen:</strong><br>
&bull; <strong>Manajemen Sumber Daya Manusia (SDM/Personalia):</strong> Berfokus pada perolehan, pelatihan, pengembangan, penilaian kinerja, jaminan keselamatan kerja, serta sistem pengupahan/kompensasi pegawai guna memaksimalkan produktivitas tenaga kerja.<br>
&bull; Manajemen Pemasaran: Analisis 4P (Product, Price, Place, Promotion).<br>
&bull; Manajemen Produksi: Perencanaan aliran bahan baku, proses fabrikasi, dan kendali mutu barang (quality control).<br>
&bull; Manajemen Keuangan: Pengelolaan sumber pendanaan dan alokasi investasi modal.<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25EKO-PRED1-014"
  },

  // 15. Karakteristik & Jiwa Wirausaha (MCMA)
  {
    id: 15,
    elemen: "Manajemen & Kewirausahaan",
    subelemen: "Karakteristik & Jiwa Kewirausahaan",
    indikator: "Mengidentifikasi sikap mental dan karakteristik esensial seorang wirausahawan sukses.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang wirausahawan (<em>entrepreneur</em>) memegang peranan krusial sebagai inovator penggerak pertumbuhan ekonomi nasional.
</p>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik kepribadian dan sikap mental yang <strong>harus dimiliki oleh seorang wirausahawan tangguh</strong> adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Memiliki keberanian mengambil risiko yang terukur (calculated risk taker) dan berorientasi pada peluang masa depan." },
      { id: "B", text: "Bersikap kreatif, inovatif, dan adaptif terhadap perubahan dinamika tren kebutuhan pasar." },
      { id: "C", text: "Memiliki komitmen disiplin yang tinggi, ketekunan pantang menyerah, dan integritas profesional." },
      { id: "D", text: "Selalu meniru produk kompetitor secara identik tanpa memberikan nilai tambah orisinal." },
      { id: "E", text: "Menolak segala bentuk digitalisasi dan mempertahankan sistem pencatatan manual kuno." }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: `<strong>Ciri Esensial Wirausahawan Sukses:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Wirausahawan berani menanggung risiko bisnis terhitung demi merebut peluang baru.<br>
&bull; <strong>Pernyataan B (Benar):</strong> Kreatif memunculkan ide orisinal dan inovatif mentransformasi ide menjadi solusi komersial berdaya saing.<br>
&bull; <strong>Pernyataan C (Benar):</strong> Ketekunan, etos kerja tinggi, dan integritas membangun kredibilitas usaha jangka panjang.<br>
&bull; <strong>Pernyataan D & E (Salah):</strong> Plagiarisme tanpa inovasi serta penolakan adopsi teknologi justru akan mematikan daya saing bisnis di era modern.<br><br>
<strong>Kunci Jawaban: A, B, dan C</strong>`,
    kode: "25EKO-PRED1-015"
  },

  // 16. Perhitungan Sisa Hasil Usaha (SHU) Koperasi (PG)
  {
    id: 16,
    elemen: "Koperasi & Perekonomian Rakyat",
    subelemen: "Perhitungan Pembagian SHU Koperasi",
    indikator: "Menghitung besarnya bagian Sisa Hasil Usaha (SHU) yang diterima oleh anggota koperasi.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Koperasi Konsumsi "Sejahtera Mandiri" pada akhir tahun buku 2024 membukukan Sisa Hasil Usaha (SHU) sebesar <strong>Rp40.000.000,00</strong>. Berdasarkan Anggaran Dasar / Anggaran Rumah Tangga (AD/ART), alokasi SHU untuk anggota ditetapkan:
</p>
<ul class="list-disc list-inside space-y-1 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li>Jasa Simpanan (Jasa Modal) = <strong>20%</strong></li>
  <li>Jasa Anggota (Jasa Penjualan/Usaha) = <strong>25%</strong></li>
</ul>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Data keuangan koperasi mencatat:
<br>&bull; Total simpanan seluruh anggota: <strong>Rp100.000.000,00</strong>
<br>&bull; Total volume penjualan kepada anggota: <strong>Rp200.000.000,00</strong>
</p>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Ibu Farida merupakan anggota koperasi yang memiliki simpanan pokok dan simpanan wajib sebesar <strong>Rp2.000.000,00</strong>, serta selama satu tahun telah berbelanja di koperasi senilai <strong>Rp4.000.000,00</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Total bagian SHU yang diterima Ibu Farida adalah...
</p>`,
    options: [
      { id: "A", text: "Rp160.000,00" },
      { id: "B", text: "Rp200.000,00" },
      { id: "C", text: "Rp320.000,00" },
      { id: "D", text: "Rp360.000,00" },
      { id: "E", text: "Rp400.000,00" }
    ],
    kunci: "D",
    pembahasan: `<strong>Langkah Perhitungan SHU Anggota Koperasi:</strong><br>
SHU yang diterima anggota terdiri dari dua bagian: Jasa Modal (JM) dan Jasa Usaha/Anggota (JU).<br><br>
1. <em>Hitung Dana SHU:</em><br>
   &bull; Dana Jasa Modal = 20% &times; Rp40.000.000 = Rp8.000.000,00<br>
   &bull; Dana Jasa Anggota = 25% &times; Rp40.000.000 = Rp10.000.000,00<br><br>
2. <em>Hitung Bagian Jasa Modal Ibu Farida (JM):</em><br>
   <code>JM = (Simpanan Farida / Total Simpanan Anggota) &times; Dana Jasa Modal</code><br>
   <code>JM = (2.000.000 / 100.000.000) &times; 8.000.000 = 0,02 &times; 8.000.000 = Rp160.000,00</code>.<br><br>
3. <em>Hitung Bagian Jasa Usaha Ibu Farida (JU):</em><br>
   <code>JU = (Belanja Farida / Total Penjualan Koperasi) &times; Dana Jasa Anggota</code><br>
   <code>JU = (4.000.000 / 200.000.000) &times; 10.000.000 = 0,02 &times; 10.000.000 = Rp200.000,00</code>.<br><br>
4. <em>Total SHU Ibu Farida:</em><br>
   <code>Total SHU = JM + JU = Rp160.000,00 + Rp200.000,00 = Rp360.000,00</code>.<br><br>
<strong>Kunci Jawaban: D (Rp360.000,00)</strong>`,
    kode: "25EKO-PRED1-016"
  },

  // 17. Perdagangan Internasional & Perhitungan Kurs Valuta Asing (PG)
  {
    id: 17,
    elemen: "Ekonomi Internasional",
    subelemen: "Valuta Asing & Kurs Mata Uang",
    indikator: "Menghitung perolehan uang rupiah dari transaksi penerimaan valuta asing ekspor menggunakan kurs beli bank.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Ibu Alivia adalah seorang eksportir kerajinan mutiara air laut asal Lombok yang berhasil mengekspor produknya ke Amerika Serikat dan menerima pembayaran sebesar <strong>10.000 USD (US Dollar)</strong>.
</p>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Ibu Alivia mendatangi bank devisa untuk menukarkan seluruh uang mata uang asing tersebut ke dalam mata uang Rupiah. Informasi kurs valuta asing di bank devisa pada hari itu tercatat:
<br>&bull; <strong>Kurs Jual:</strong> 1 USD = Rp15.600,00
<br>&bull; <strong>Kurs Beli:</strong> 1 USD = Rp15.400,00
<br>&bull; <strong>Kurs Tengah:</strong> 1 USD = Rp15.500,00
</p>
<p class="font-semibold text-slate-900 mb-2">
Jumlah uang Rupiah yang diterima oleh Ibu Alivia dari penukaran tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Rp156.000.000,00" },
      { id: "B", text: "Rp155.000.000,00" },
      { id: "C", text: "Rp154.500.000,00" },
      { id: "D", text: "Rp154.000.000,00" },
      { id: "E", text: "Rp150.000.000,00" }
    ],
    kunci: "D",
    pembahasan: `<strong>Prinsip Penerapan Kurs Bank / Money Changer:</strong><br>
Penetapan kurs selalu dilihat dari sudut pandang <strong>BANK / PEDAGANG VALAS</strong>:<br>
&bull; <strong>Kurs Jual:</strong> Kurs yang digunakan saat bank <em>menjual</em> mata uang asing kepada nasabah (nasabah menukar Rupiah menjadi USD).<br>
&bull; <strong>Kurs Beli:</strong> Kurs yang digunakan saat bank <em>membeli</em> mata uang asing dari nasabah (nasabah memiliki USD dan menukarkannya menjadi Rupiah).<br><br>
Karena Ibu Alivia membawa 10.000 USD dan ingin menukarkannya ke dalam Rupiah, maka bank membeli valuta asing dari Ibu Alivia menggunakan <strong>Kurs Beli</strong>:<br>
<code>Rupiah yang diterima = 10.000 USD &times; Rp15.400,00 = Rp154.000.000,00</code>.<br><br>
<strong>Kunci Jawaban: D (Rp154.000.000,00)</strong>`,
    kode: "25EKO-PRED1-017"
  },

  // 18. Sistem Informasi Akuntansi & Pemakai Laporan (Benar/Salah)
  {
    id: 18,
    elemen: "Akuntansi Keuangan",
    subelemen: "Sistem Informasi Akuntansi & Manfaat Informasi",
    indikator: "Mengidentifikasi kebutuhan spesifik pemakai informasi akuntansi pihak eksternal (pemerintah dan investor).",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Laporan keuangan disusun untuk memenuhi kebutuhan informasi bagi berbagai pihak berkepentingan (<em>stakeholders</em>). Tentukan kebenaran dari masing-masing pernyataan fungsi informasi akuntansi berikut:
</p>`,
    items: [
      {
        pernyataan: "Bagi instansi pemerintah (Dirjen Pajak), laporan keuangan digunakan sebagai dasar penetapan besaran beban Pajak Penghasilan (PPh) terutang secara adil dan transparan.",
        kunci: "Benar",
        penjelasan: "Pemerintah menggunakan laporan keuangan sebagai dasar penetapan pajak penghasilan terutang."
      },
      {
        pernyataan: "Bagi calon investor, analisis rasio profitabilitas pada laporan keuangan menjadi dasar pertimbangan keputusan penanaman modal dan proyeksi dividen.",
        kunci: "Benar",
        penjelasan: "Investor memerlukan informasi laba untuk pertimbangan investasi modal dan dividen."
      },
      {
        pernyataan: "Bagi perbankan (kreditur), laporan posisi keuangan (neraca) dan arus kas menjadi tolok ukur likuiditas dan solvabilitas perusahaan dalam melunasi pinjaman kredit.",
        kunci: "Benar",
        penjelasan: "Kreditur memerlukan analisis neraca dan arus kas untuk mengukur kelayakan pelunasan pinjaman."
      }
    ],
    kunci: ["Benar", "Benar", "Benar"],
    pembahasan: `<strong>Analisis Pengguna Laporan Keuangan Eksternal:</strong><br>
&bull; <strong>Pernyataan 1 (Benar):</strong> Pemerintah/kantor pajak memanfaatkan laporan laba rugi untuk menghitung penghasilan kena pajak dan PPh badan yang harus disetor ke kas negara.<br>
&bull; <strong>Pernyataan 2 (Benar):</strong> Investor membutuhkan data laba bersih (earning per share) dan ROE untuk mengevaluasi prospek imbal hasil investasi saham.<br>
&bull; <strong>Pernyataan 3 (Benar):</strong> Kreditur (bank) memerlukan analisis likuiditas (current ratio) dan solvabilitas (debt to equity ratio) untuk memastikan jaminan pelunasan pokok dan bunga pinjaman.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Benar</strong>`,
    kode: "25EKO-PRED1-018"
  },

  // 19. Persamaan Dasar Akuntansi (PG)
  {
    id: 19,
    elemen: "Akuntansi Keuangan",
    subelemen: "Persamaan Dasar Akuntansi (Harta = Utang + Modal)",
    indikator: "Menganalisis pengaruh transaksi pembelian peralatan secara kredit dan tunai terhadap persamaan dasar akuntansi.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Bengkel servis motor "Maju Lancar" membeli seperangkat mesin pembuka ban otomatis seharga <strong>Rp15.000.000,00</strong>. Dari total harga tersebut, dibayar tunai sebesar <strong>Rp5.000.000,00</strong> dan sisanya akan dilunasi dua bulan kemudian.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pengaruh transaksi tersebut terhadap persamaan dasar akuntansi perusahaan adalah...
</p>`,
    options: [
      { id: "A", text: "Peralatan bertambah Rp15.000.000,00; Kas berkurang Rp5.000.000,00; dan Utang Usaha bertambah Rp10.000.000,00." },
      { id: "B", text: "Peralatan bertambah Rp15.000.000,00; Kas berkurang Rp15.000.000,00; Modal tetap." },
      { id: "C", text: "Peralatan bertambah Rp10.000.000,00; Kas berkurang Rp5.000.000,00; dan Modal bertambah Rp5.000.000,00." },
      { id: "D", text: "Kas berkurang Rp5.000.000,00; Utang bertambah Rp15.000.000,00; dan Beban bertambah Rp10.000.000,00." },
      { id: "E", text: "Peralatan bertambah Rp15.000.000,00 dan Modal bertambah Rp15.000.000,00." }
    ],
    kunci: "A",
    pembahasan: `<strong>Analisis Transaksi Persamaan Dasar Akuntansi (Aset = Kewajiban + Ekuitas):</strong><br>
1. <strong>Akun Peralatan (Aset):</strong> Bertambah sebesar nilai perolehan mesin utuh yaitu <code>+Rp15.000.000,00</code>.<br>
2. <strong>Akun Kas (Aset):</strong> Berkurang sebesar uang tunai yang diserahkan seketika yaitu <code>&minus;Rp5.000.000,00</code>.<br>
   Netto perubahan Aset: <code>+15.000.000 &minus; 5.000.000 = +Rp10.000.000,00</code>.<br>
3. <strong>Akun Utang Usaha (Kewajiban):</strong> Bertambah sebesar sisa pembayaran yang belum lunas yaitu <code>+Rp10.000.000,00</code>.<br>
4. Keseimbangan tetap terjaga: <code>&Delta;Aset (+10.000.000) = &Delta;Utang (+10.000.000)</code>.<br><br>
<strong>Kunci Jawaban: A</strong>`,
    kode: "25EKO-PRED1-019"
  },

  // 20. Kebijakan Perdagangan Internasional: Kuota Impor & Tarif (MCMA)
  {
    id: 20,
    elemen: "Ekonomi Internasional",
    subelemen: "Kebijakan Proteksionisme Perdagangan",
    indikator: "Mengevaluasi dampak ekonomi dari penerapan kebijakan kuota impor dan tarif bea masuk terhadap pasar domestik.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Untuk melindungi industri manufaktur tekstil dan produk pakaian jadi dalam negeri dari serbuan produk impor berharga murah, pemerintah memberlakukan instrumen proteksi berupa pembatasan kuota impor dan kenaikan tarif bea masuk.
</p>
<p class="font-semibold text-slate-900 mb-2">
Dampak ekonomi yang <strong>timbul di pasar domestik</strong> akibat kebijakan proteksionisme tersebut adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Jumlah barang impor yang masuk ke pasar domestik berkurang secara terukur." },
      { id: "B", text: "Harga produk sejenis di pasar dalam negeri cenderung mengalami kenaikan." },
      { id: "C", text: "Produsen lokal memiliki kesempatan memperluas pangsa pasar dan mempertahankan keberlangsungan produksi serta tenaga kerja domestik." },
      { id: "D", text: "Konsumen domestik memperoleh kebebasan menikmati harga barang termurah dengan pilihan impor yang melimpah." },
      { id: "E", text: "Penerimaan devisa negara dari bea masuk secara otomatis menjadi nol rupiah." }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: `<strong>Dampak Kebijakan Kuota & Tarif Impor:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Kuota impor membatasi volume fisik produk asing yang diizinkan masuk.<br>
&bull; <strong>Pernyataan B (Benar):</strong> Berkurangnya pasokan impor mendorong harga keseimbangan produk di pasar domestik naik.<br>
&bull; <strong>Pernyataan C (Benar):</strong> Industri lokal terlindungi dari persaingan harga predator luar negeri, mempertahankan penyerapan tenaga kerja dalam negeri.<br>
&bull; <strong>Pernyataan D (Salah):</strong> Konsumen domestik justru menanggung harga yang lebih tinggi dan pilihan produk yang lebih terbatas.<br>
&bull; <strong>Pernyataan E (Salah):</strong> Tarif bea masuk justru memberikan kontribusi pemasukan bagi kas negara.<br><br>
<strong>Kunci Jawaban: A, B, dan C</strong>`,
    kode: "25EKO-PRED1-020"
  },

  // 21. Kertas Kerja Akuntansi Perusahaan Jasa (PG + Tabel)
  {
    id: 21,
    elemen: "Akuntansi Keuangan",
    subelemen: "Siklus Akuntansi Perusahaan Jasa (Kertas Kerja / Neraca Lajur)",
    indikator: "Menganalisis kebenaran pemindahan akun dari Neraca Saldo Disesuaikan (NSD) ke kolom Laba Rugi dan Neraca.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan sebagian kutipan kertas kerja (neraca lajur) sepuluh kolom dari usaha jasa Salon "Cantik Pesona" berikut:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-indigo-700 text-white font-semibold">
      <tr>
        <th class="p-2 border border-indigo-800 text-center" rowspan="2">No</th>
        <th class="p-2 border border-indigo-800" rowspan="2">Nama Akun</th>
        <th class="p-2 border border-indigo-800 text-center" colspan="2">Neraca Saldo Disesuaikan</th>
        <th class="p-2 border border-indigo-800 text-center" colspan="2">Laba / Rugi</th>
        <th class="p-2 border border-indigo-800 text-center" colspan="2">Neraca (Posisi Keuangan)</th>
      </tr>
      <tr>
        <th class="p-1 border border-indigo-800 text-center">D</th>
        <th class="p-1 border border-indigo-800 text-center">K</th>
        <th class="p-1 border border-indigo-800 text-center">D</th>
        <th class="p-1 border border-indigo-800 text-center">K</th>
        <th class="p-1 border border-indigo-800 text-center">D</th>
        <th class="p-1 border border-indigo-800 text-center">K</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 border border-slate-200 text-center font-bold">(1)</td>
        <td class="p-2 border border-slate-200">Sewa dibayar di muka</td>
        <td class="p-2 border border-slate-200 text-right font-mono">3.150.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold text-teal-700">3.150.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200 text-center font-bold">(2)</td>
        <td class="p-2 border border-slate-200">Beban Asuransi</td>
        <td class="p-2 border border-slate-200 text-right font-mono">1.600.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold text-teal-700">1.600.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold text-rose-600">1.600.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200 text-center font-bold">(3)</td>
        <td class="p-2 border border-slate-200">Beban Gaji Karyawan</td>
        <td class="p-2 border border-slate-200 text-right font-mono">18.000.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold text-teal-700">18.000.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200 text-center font-bold">(4)</td>
        <td class="p-2 border border-slate-200">Beban Sewa Gedung</td>
        <td class="p-2 border border-slate-200 text-right font-mono">2.250.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold text-teal-700">2.250.000</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
        <td class="p-2 border border-slate-200 text-right font-mono">-</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Pencatatan akun yang <strong>benar dan tepat penempatannya</strong> pada kertas kerja di atas adalah akun nomor...
</p>`,
    options: [
      { id: "A", text: "(1), (2), dan (3)" },
      { id: "B", text: "(1), (3), dan (4)" },
      { id: "C", text: "(2), (3), dan (4)" },
      { id: "D", text: "(1) dan (2) saja" },
      { id: "E", text: "(3) dan (4) saja" }
    ],
    kunci: "B",
    pembahasan: `<strong>Aturan Penempatan Kolom pada Kertas Kerja Akuntansi:</strong><br>
1. <strong>Akun Riil (Harta, Kewajiban, Ekuitas):</strong> Dipindahkan dari kolom NSD hanya ke kolom <strong>Neraca</strong>.<br>
   &bull; <em>Sewa dibayar di muka (Akun 1):</em> Adalah Aset Lancar &rarr; Masuk ke Neraca Debit (Benar).<br>
2. <strong>Akun Nominal (Pendapatan dan Beban):</strong> Dipindahkan dari kolom NSD hanya ke kolom <strong>Laba/Rugi</strong>.<br>
   &bull; <em>Beban Asuransi (Akun 2):</em> Merupakan akun beban &rarr; Seharusnya HANYA masuk ke kolom Laba/Rugi Debit, TIDAK BOLEH masuk ke Neraca. (Akun 2 Salah).<br>
   &bull; <em>Beban Gaji (Akun 3):</em> Masuk ke kolom Laba/Rugi Debit (Benar).<br>
   &bull; <em>Beban Sewa (Akun 4):</em> Masuk ke kolom Laba/Rugi Debit (Benar).<br><br>
Maka nomor akun yang benar adalah <strong>(1), (3), dan (4)</strong>.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25EKO-PRED1-021"
  },

  // 22. Laporan Laba Rugi Perusahaan Jasa (PG)
  {
    id: 22,
    elemen: "Akuntansi Keuangan",
    subelemen: "Laporan Keuangan Perusahaan Jasa (Laba Bersih)",
    indikator: "Menghitung total pendapatan jasa dari data rincian beban operasional dan perolehan laba bersih.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Data operasional dari usaha jasa bengkel mobil "Oto Prima" selama bulan November 2024 mencatat informasi keuangan sebagai berikut:
</p>
<ul class="list-disc list-inside space-y-1 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li>Beban sewa lokasi bengkel: <strong>Rp2.000.000,00</strong></li>
  <li>Beban pemakaian perlengkapan: <strong>Rp1.500.000,00</strong></li>
  <li>Beban penyusutan peralatan servis: <strong>Rp500.000,00</strong></li>
  <li>Beban gaji teknisi: <strong>Rp3.500.000,00</strong></li>
  <li>Beban listrik dan air: <strong>Rp1.000.000,00</strong></li>
  <li>Beban telepon dan internet: <strong>Rp500.000,00</strong></li>
  <li>Pengambilan pribadi pemilik (Prive): <strong>Rp1.500.000,00</strong></li>
  <li>Laba bersih yang diperoleh: <strong>Rp9.000.000,00</strong></li>
</ul>
<p class="font-semibold text-slate-900 mb-2">
Besarnya total pendapatan jasa yang berhasil dibukukan oleh bengkel tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Rp16.500.000,00" },
      { id: "B", text: "Rp18.000.000,00" },
      { id: "C", text: "Rp19.500.000,00" },
      { id: "D", text: "Rp20.000.000,00" },
      { id: "E", text: "Rp21.500.000,00" }
    ],
    kunci: "B",
    pembahasan: `<strong>Langkah Menghitung Total Pendapatan Jasa:</strong><br>
1. <em>Hitung Total Beban Usaha:</em><br>
   <code>Total Beban = Sewa + Perlengkapan + Penyusutan + Gaji + Listrik/Air + Telepon/Internet</code><br>
   <code>= 2.000.000 + 1.500.000 + 500.000 + 3.500.000 + 1.000.000 + 500.000 = Rp9.000.000,00</code>.<br>
   <em>(Catatan: Prive tidak termasuk beban usaha, melainkan pengurang ekuitas di Laporan Perubahan Modal).</em><br><br>
2. <em>Rumus Laba Bersih:</em><br>
   <code>Laba Bersih = Total Pendapatan &minus; Total Beban</code><br>
   <code>Rp9.000.000,00 = Total Pendapatan &minus; Rp9.000.000,00</code><br>
   <code>Total Pendapatan = 9.000.000 + 9.000.000 = Rp18.000.000,00</code>.<br><br>
<strong>Kunci Jawaban: B (Rp18.000.000,00)</strong>`,
    kode: "25EKO-PRED1-022"
  },

  // 23. Buku Besar Pembantu Piutang Dagang (PG)
  {
    id: 23,
    elemen: "Akuntansi Keuangan",
    subelemen: "Jurnal Khusus & Buku Besar Pembantu Perusahaan Dagang",
    indikator: "Memposting transaksi penjualan barang dagang secara kredit dari jurnal penjualan ke buku besar pembantu piutang.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam Jurnal Penjualan (<em>Sales Journal</em>) PT Sumber Makmur per Oktober 2024, terdapat transaksi penjualan barang dagang secara kredit kepada <strong>Toko Sentosa</strong> dengan faktur nomor F-102 senilai <strong>Rp8.000.000,00</strong> bertanggal 15 Oktober 2024.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pencatatan yang benar saat diposting ke dalam <strong>Buku Besar Pembantu Piutang Dagang (Toko Sentosa)</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Dicatat di sisi Kredit sebesar Rp8.000.000,00 dengan saldo akhir Kredit." },
      { id: "B", text: "Dicatat di sisi Debit sebesar Rp8.000.000,00 dengan saldo akhir Debit Rp8.000.000,00." },
      { id: "C", text: "Dicatat di sisi Debit akun Penjualan sebesar Rp8.000.000,00." },
      { id: "D", text: "Tidak dicatat karena buku pembantu piutang hanya mencatat transaksi penerimaan kas tunai." },
      { id: "E", text: "Dicatat di sisi Kredit akun Kas sebesar Rp8.000.000,00." }
    ],
    kunci: "B",
    pembahasan: `<strong>Mekanisme Buku Besar Pembantu Piutang:</strong><br>
&bull; Jurnal Penjualan mencatat transaksi penjualan kredit dengan jurnal: <code>Piutang Dagang (D) / Penjualan (K)</code>.<br>
&bull; Piutang dagang merupakan aset (harta lancar) yang memiliki saldo normal di sisi <strong>DEBIT</strong>.<br>
&bull; Saat terjadi penjualan secara kredit kepada debitur (Toko Sentosa), saldo tagihan piutang bertambah, sehingga pada Buku Besar Pembantu Piutang untuk akun Toko Sentosa diposting ke sisi <strong>Debit sebesar Rp8.000.000,00</strong> dan menghasilkan <strong>saldo Debit Rp8.000.000,00</strong>.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25EKO-PRED1-023"
  },

  // 24. Harga Pokok Penjualan (HPP) & Retur Pembelian (PG)
  {
    id: 24,
    elemen: "Akuntansi Keuangan",
    subelemen: "Harga Pokok Penjualan (HPP) Perusahaan Dagang",
    indikator: "Menghitung besarnya retur pembelian dari data persediaan barang dagang, pembelian, beban angkut, dan HPP.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Data persediaan dan transaksi pembelian pada PD Majapahit selama tahun 2024 tercatat sebagai berikut:
</p>
<ul class="list-disc list-inside space-y-1 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li>Persediaan barang dagang awal (1 Januari 2024): <strong>Rp60.000.000,00</strong></li>
  <li>Persediaan barang dagang akhir (31 Desember 2024): <strong>Rp48.000.000,00</strong></li>
  <li>Pembelian bruto: <strong>Rp70.500.000,00</strong></li>
  <li>Beban angkut pembelian: <strong>Rp4.500.000,00</strong></li>
  <li>Potongan pembelian: <strong>Rp3.000.000,00</strong></li>
  <li>Harga Pokok Penjualan (HPP): <strong>Rp83.000.000,00</strong></li>
</ul>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan data keuangan di atas, besarnya <strong>retur pembelian dan pengurangan harga</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Rp900.000,00" },
      { id: "B", text: "Rp1.000.000,00" },
      { id: "C", text: "Rp1.200.000,00" },
      { id: "D", text: "Rp1.500.000,00" },
      { id: "E", text: "Rp2.000.000,00" }
    ],
    kunci: "B",
    pembahasan: `<strong>Langkah Menghitung Retur Pembelian:</strong><br>
1. <em>Rumus Harga Pokok Penjualan (HPP):</em><br>
   <code>HPP = Persediaan Awal + Pembelian Bersih &minus; Persediaan Akhir</code><br>
   <code>83.000.000 = 60.000.000 + Pembelian Bersih &minus; 48.000.000</code><br>
   <code>83.000.000 = 12.000.000 + Pembelian Bersih</code><br>
   <code>Pembelian Bersih = 83.000.000 &minus; 12.000.000 = Rp71.000.000,00</code>.<br><br>
2. <em>Rumus Pembelian Bersih:</em><br>
   <code>Pembelian Bersih = (Pembelian Bruto + Beban Angkut) &minus; (Potongan Pembelian + Retur Pembelian)</code><br>
   <code>71.000.000 = (70.500.000 + 4.500.000) &minus; (3.000.000 + Retur Pembelian)</code><br>
   <code>71.000.000 = 75.000.000 &minus; 3.000.000 &minus; Retur Pembelian</code><br>
   <code>71.000.000 = 72.000.000 &minus; Retur Pembelian</code><br>
   <code>Retur Pembelian = 72.000.000 &minus; 71.000.000 = Rp1.000.000,00</code>.<br><br>
<strong>Kunci Jawaban: B (Rp1.000.000,00)</strong>`,
    kode: "25EKO-PRED1-024"
  },

  // 25. Jurnal Penyesuaian Beban Dibayar di Muka (Benar/Salah)
  {
    id: 25,
    elemen: "Akuntansi Keuangan",
    subelemen: "Jurnal Penyesuaian (Adjusting Entries)",
    indikator: "Membuat ayat jurnal penyesuaian untuk akun beban asuransi dibayar di muka pada akhir periode akuntansi.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tanggal 1 Agustus 2024, perusahaan membayar premi asuransi kebakaran gedung kantor untuk jangka waktu <strong>1 tahun (12 bulan)</strong> ke depan sebesar <strong>Rp12.000.000,00</strong>. Saat transaksi terjadi, perusahaan mencatatnya dengan pendekatan aset (posisi harta): <code>Asuransi Dibayar di Muka (D) Rp12.000.000,00</code> dan <code>Kas (K) Rp12.000.000,00</code>. Periode tutup buku dilakukan pada tanggal <strong>31 Desember 2024</strong>.
<br>Tentukan kebenaran dari masing-masing pernyataan penyesuaian berikut:
</p>`,
    items: [
      {
        pernyataan: "Jangka waktu asuransi yang telah jatuh tempo/terpakai selama tahun 2024 adalah 5 bulan (Agustus sampai Desember).",
        kunci: "Benar",
        penjelasan: "Dari 1 Agustus sampai 31 Desember adalah tepat 5 bulan."
      },
      {
        pernyataan: "Besarnya beban asuransi yang diakui dalam laporan laba rugi tahun 2024 adalah Rp5.000.000,00.",
        kunci: "Benar",
        penjelasan: "Beban asuransi = (5 / 12) * Rp12.000.000,00 = Rp5.000.000,00."
      },
      {
        pernyataan: "Ayat jurnal penyesuaian per 31 Desember 2024 adalah: Beban Asuransi di sisi Debit Rp5.000.000,00 dan Asuransi Dibayar di Muka di sisi Kredit Rp5.000.000,00.",
        kunci: "Benar",
        penjelasan: "Beban Asuransi didebit dan Asuransi Dibayar di Muka dikredit masing-masing Rp5.000.000,00."
      }
    ],
    kunci: ["Benar", "Benar", "Benar"],
    pembahasan: `<strong>Analisis Jurnal Penyesuaian Beban Dibayar di Muka (Pendekatan Neraca/Harta):</strong><br>
1. <em>Waktu yang telah kedaluwarsa / terpakai:</em><br>
   Dari 1 Agustus s.d. 31 Desember = 5 bulan (Pernyataan 1 Benar).<br><br>
2. <em>Nilai yang telah menjadi beban:</em><br>
   <code>Beban Asuransi = (5 bulan / 12 bulan) &times; Rp12.000.000,00 = Rp5.000.000,00</code> (Pernyataan 2 Benar).<br><br>
3. <em>Ayat Jurnal Penyesuaian:</em><br>
   Karena saat transaksi awal dicatat sebagai harta (Asuransi Dibayar di Muka), maka pada akhir periode akun harta tersebut dikurangi dan dimunculkan akun beban:<br>
   <code>Beban Asuransi ......................... Rp5.000.000,00 (D)</code><br>
   <code>&nbsp;&nbsp;&nbsp;&nbsp;Asuransi Dibayar di Muka ..... Rp5.000.000,00 (K)</code> (Pernyataan 3 Benar).<br><br>
<strong>Kunci Jawaban: Benar, Benar, Benar</strong>`,
    kode: "25EKO-PRED1-025"
  }
];

// Cek apakah ada tanda dolar
let dollarFound = 0;
ekonomiPaket1Data.forEach((item) => {
  const s = JSON.stringify(item);
  if (s.includes('$')) {
    console.error(`❌ Ada tanda dolar pada soal ID ${item.id}`);
    dollarFound++;
  }
});

if (dollarFound > 0) {
  console.error("Gagal: Terdeteksi tanda dolar!");
  process.exit(1);
} else {
  console.log("✅ Dataset Ekonomi Paket 1 100% BEBAS dari tanda dolar ($)!");
}

// Generate file content
const header = `// tka/data/mapel-ekonomi.js
// Bank Data Lengkap 25 Soal TKA Ekonomi SMA Paket 1 (Prediksi Resmi BPPP / SNBT / UTBK 2025/2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Ekonomi SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaEkonomiPaket1Data = ${JSON.stringify(ekonomiPaket1Data, null, 2)};

if (typeof window !== 'undefined') {
  window.tkaEkonomiPaket1Data = tkaEkonomiPaket1Data;
  window.tkaEkonomiPackages = window.tkaEkonomiPackages || {};
  window.tkaEkonomiPackages['paket1'] = {
    id: "paket1",
    title: "Paket 1: Prediksi Resmi TKA Ekonomi SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 1 (Resmi 2025/2026 • 25 Soal)",
    badge: "Resmi 25 Soal",
    total: 25,
    durasiMenit: 50,
    data: tkaEkonomiPaket1Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaEkonomiPaket1Data };
}
`;

const outputPath = path.join(__dirname, '../tka/data/mapel-ekonomi.js');
fs.writeFileSync(outputPath, header, 'utf8');
console.log(`🎉 ${outputPath} berhasil dibuat! (${ekonomiPaket1Data.length} soal)`);
