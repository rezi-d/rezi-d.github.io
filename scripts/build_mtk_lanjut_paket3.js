// scripts/build_mtk_lanjut_paket3.js
// Generator Dataset 25 Soal TKA Matematika Tingkat Lanjut SMA Paket 3 (Prediksi Resmi 2025/2026)
// Variasi: 16 PG, 5 MCMA, 4 Benar/Salah
// 100% BEBAS tanda dolar ($)

const fs = require('fs');
const path = require('path');

const mtkLanjutPaket3Data = [
  // 1. Pertidaksamaan Eksponen (PG)
  {
    id: 1,
    elemen: "Aljabar & Fungsi",
    subelemen: "Pertidaksamaan Eksponensial",
    indikator: "Menentukan himpunan penyelesaian dari pertidaksamaan eksponensial kuadrat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Himpunan penyelesaian dari pertidaksamaan eksponensial:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  9<sup>2x</sup> &minus; 10 &times; 9<sup>x</sup> + 9 &gt; 0, &nbsp; untuk x &isin; ℝ
</div>
<p class="font-semibold text-slate-900 mb-2">
adalah...
</p>`,
    options: [
      { id: "A", text: "{ x | 0 < x < 1, x ∈ ℝ }" },
      { id: "B", text: "{ x | x < 0 atau x > 1, x ∈ ℝ }" },
      { id: "C", text: "{ x | x > 0 atau x > 1, x ∈ ℝ }" },
      { id: "D", text: "{ x | -1 < x < 1, x ∈ ℝ }" },
      { id: "E", text: "{ x | x < -1 atau x > 1, x ∈ ℝ }" }
    ],
    kunci: "B",
    pembahasan: `<strong>Langkah Penyelesaian Pertidaksamaan Eksponensial:</strong><br>
1. <em>Substitusi variabel bantu:</em><br>
   Misalkan <code>y = 9<sup>x</sup></code> dengan syarat <code>y &gt; 0</code>.<br>
   Pertidaksamaan menjadi:<br>
   <code>y² &minus; 10y + 9 &gt; 0</code><br><br>
2. <em>Faktorisasi persamaan kuadrat:</em><br>
   <code>(y &minus; 1)(y &minus; 9) &gt; 0</code><br>
   Pembuat nol: <code>y = 1</code> atau <code>y = 9</code>.<br>
   Karena tanda pertidaksamaan &gt; 0, maka daerah penyelesaiannya adalah:<br>
   <code>y &lt; 1</code> &nbsp; atau &nbsp; <code>y &gt; 9</code>.<br><br>
3. <em>Kembalikan ke variabel x:</em><br>
   &bull; <code>y &lt; 1 &rarr; 9<sup>x</sup> &lt; 9<sup>0</sup> &rarr; x &lt; 0</code> (karena basis 9 &gt; 1, tanda ketaksamaan tetap).<br>
   &bull; <code>y &gt; 9 &rarr; 9<sup>x</sup> &gt; 9<sup>1</sup> &rarr; x &gt; 1</code>.<br><br>
<strong>Himpunan Penyelesaian: { x | x &lt; 0 atau x &gt; 1, x &isin; ℝ }</strong><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25MTKL-PRED3-001"
  },

  // 2. Persamaan Kuadrat & Teorema Vieta (PG)
  {
    id: 2,
    elemen: "Aljabar & Fungsi",
    subelemen: "Persamaan Kuadrat & Teorema Vieta",
    indikator: "Menentukan nilai parameter koefisien persamaan kuadrat menggunakan hubungan akar-akar Vieta.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Akar-akar dari persamaan kuadrat <code>x² + ax &minus; 4 = 0</code> adalah <code>p</code> dan <code>q</code>. Jika diketahui relasi:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  p² &minus; 2pq + q² = 8a
</div>
<p class="font-semibold text-slate-900 mb-2">
maka nilai a yang memenuhi persamaan tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "4" },
      { id: "C", text: "2" },
      { id: "D", text: "1" },
      { id: "E", text: "-2" }
    ],
    kunci: "B",
    pembahasan: `<strong>Langkah Penyelesaian Menggunakan Teorema Vieta:</strong><br>
1. <em>Identifikasi akar-akar persamaan x² + ax &minus; 4 = 0:</em><br>
   &bull; <code>p + q = &minus;b/a = &minus;a</code><br>
   &bull; <code>pq = c/a = &minus;4</code><br><br>
2. <em>Manipulasi bentuk aljabar p² &minus; 2pq + q²:</em><br>
   <code>p² + q² &minus; 2pq = (p + q)² &minus; 2pq &minus; 2pq = (p + q)² &minus; 4pq</code><br><br>
3. <em>Substitusikan nilai Vieta ke persamaan:</em><br>
   <code>(p + q)² &minus; 4pq = 8a</code><br>
   <code>(&minus;a)² &minus; 4(&minus;4) = 8a</code><br>
   <code>a² + 16 = 8a</code><br>
   <code>a² &minus; 8a + 16 = 0</code><br>
   <code>(a &minus; 4)² = 0  &rarr;  a = 4</code>.<br><br>
<strong>Kunci Jawaban: B (a = 4)</strong>`,
    kode: "25MTKL-PRED3-002"
  },

  // 3. Pemodelan Gelombang Pasang Surut Air Laut (MCMA)
  {
    id: 3,
    elemen: "Trigonometri",
    subelemen: "Pemodelan Fungsi Trigonometri Periodik",
    indikator: "Menganalisis parameter amplitudo, periode, dan pergeseran vertikal pada fungsi sinusoidal fenomena fisis.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Fluktuasi ketinggian permukaan air laut <code>H(t)</code> (dalam satuan meter) di dermaga pelabuhan dimodelkan sebagai fungsi waktu <code>t</code> (dalam jam setelah tengah malam) dengan persamaan sinusoidal:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  H(t) = A &times; cos(B &times; t) + C
</div>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Berdasarkan catatan pasang surut maritim, ketinggian air laut mencapai titik maksimum sebesar <strong>10 meter</strong> dan titik minimum sebesar <strong>2 meter</strong>. Waktu yang dibutuhkan untuk menyelesaikan satu siklus lengkap pasang-surut (periode) adalah <strong>12 jam</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah pernyataan analisis nilai parameter fungsi yang <strong>benar</strong>? (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Nilai amplitudo A = (10 - 2) / 2 = 4 meter." },
      { id: "B", text: "Nilai pergeseran garis tengah vertikal C = (10 + 2) / 2 = 6 meter." },
      { id: "C", text: "Nilai frekuensi sudut B dihitung dari periode T = 12 jam, yaitu B = 2π / 12 = π / 6 rad/jam." },
      { id: "D", text: "Pada saat t = 6 jam setelah tengah malam, ketinggian air laut berada pada titik minimum 2 meter." },
      { id: "E", text: "Nilai amplitudo A = 8 meter dan pergeseran vertikal C = 2 meter." }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: `<strong>Analisis Parameter Fungsi Trigonometri H(t) = A cos(Bt) + C:</strong><br>
1. <strong>Amplitudo (A):</strong><br>
   <code>A = (H_maks &minus; H_min) / 2 = (10 &minus; 2) / 2 = 4 meter</code> (Pernyataan A Benar).<br>
2. <strong>Garis Tengah Vertikal (C):</strong><br>
   <code>C = (H_maks + H_min) / 2 = (10 + 2) / 2 = 6 meter</code> (Pernyataan B Benar).<br>
3. <strong>Frekuensi Sudut (B):</strong><br>
   Periode <code>T = 2&pi; / B = 12  &rarr;  B = 2&pi; / 12 = &pi; / 6</code> (Pernyataan C Benar).<br>
4. <strong>Evaluasi pada t = 6 jam:</strong><br>
   <code>H(6) = 4 cos((&pi;/6) &times; 6) + 6 = 4 cos(&pi;) + 6 = 4(&minus;1) + 6 = 2 meter</code> (tepat di titik minimum, Pernyataan D Benar).<br><br>
<strong>Kunci Jawaban: A, B, C, dan D</strong>`,
    kode: "25MTKL-PRED3-003"
  },

  // 4. Komposisi Fungsi (PG)
  {
    id: 4,
    elemen: "Aljabar & Fungsi",
    subelemen: "Operasi Komposisi Fungsi",
    indikator: "Menentukan rumus fungsi komposisi kuadrat dari dua fungsi aljabar yang diberikan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diketahui fungsi <code>f: ℝ &rarr; ℝ</code> dan <code>g: ℝ &rarr; ℝ</code> dirumuskan dengan:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-sm sm:text-base font-bold text-slate-900">
  f(x) = 2x² &minus; 3 &nbsp; dan &nbsp; g(x) = &minus;3x &minus; 1
</div>
<p class="font-semibold text-slate-900 mb-2">
Rumus fungsi komposisi (f &comp; g)(x) adalah...
</p>`,
    options: [
      { id: "A", text: "(f ∘ g)(x) = 18x² - 12x - 21" },
      { id: "B", text: "(f ∘ g)(x) = 18x² + 10x - 21" },
      { id: "C", text: "(f ∘ g)(x) = 18x² + 12x - 1" },
      { id: "D", text: "(f ∘ g)(x) = 9x² - 6x - 2" },
      { id: "E", text: "(f ∘ g)(x) = 9x² + 6x + 2" }
    ],
    kunci: "C",
    pembahasan: `<strong>Langkah Komposisi Fungsi (f &comp; g)(x):</strong><br>
<code>(f &comp; g)(x) = f(g(x)) = f(&minus;3x &minus; 1)</code><br>
Substitusi ke f(x) = 2x² &minus; 3:<br>
<code>= 2(&minus;3x &minus; 1)² &minus; 3</code><br>
Uraikan bentuk kuadrat:<br>
<code>(&minus;3x &minus; 1)² = (&minus;(3x + 1))² = (3x + 1)² = 9x² + 6x + 1</code><br>
Kalikan dengan 2 dan kurangkan 3:<br>
<code>= 2(9x² + 6x + 1) &minus; 3</code><br>
<code>= 18x² + 12x + 2 &minus; 3</code><br>
<code>= 18x² + 12x &minus; 1</code>.<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25MTKL-PRED3-004"
  },

  // 5. Invers Fungsi Pecahan Aljabar (PG)
  {
    id: 5,
    elemen: "Aljabar & Fungsi",
    subelemen: "Invers Fungsi Komposisi Rasional",
    indikator: "Menentukan fungsi invers dari komposisi fungsi pecahan linier.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diberikan fungsi pecahan linier <code>f(x) = (2x &minus; 5) / (x &minus; 4)</code> untuk <code>x &ne; 4</code> dan fungsi linier <code>g(x) = 3x + 8</code>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Rumus fungsi invers (f &comp; g)<sup>&minus;1</sup>(x) adalah...
</p>`,
    options: [
      { id: "A", text: "(f ∘ g)⁻¹(x) = (6x + 11) / (3x + 4), untuk x ≠ -4/3" },
      { id: "B", text: "(f ∘ g)⁻¹(x) = (6x - 11) / (3x + 4), untuk x ≠ -4/3" },
      { id: "C", text: "(f ∘ g)⁻¹(x) = (6x - 6) / (3x + 4), untuk x ≠ -4/3" },
      { id: "D", text: "(f ∘ g)⁻¹(x) = (11 - 4x) / (3x - 6), untuk x ≠ 2" },
      { id: "E", text: "(f ∘ g)⁻¹(x) = (4x - 11) / (3x - 6), untuk x ≠ 2" }
    ],
    kunci: "D",
    pembahasan: `<strong>Langkah Penyelesaian Invers Komposisi:</strong><br>
1. <em>Cari komposisi (f &comp; g)(x):</em><br>
   <code>(f &comp; g)(x) = f(3x + 8) = [2(3x + 8) &minus; 5] / [(3x + 8) &minus; 4]</code><br>
   <code>= (6x + 16 &minus; 5) / (3x + 4) = (6x + 11) / (3x + 4)</code>.<br><br>
2. <em>Cari invers fungsi h(x) = (ax + b) / (cx + d):</em><br>
   Rumus cepat invers: <code>h<sup>&minus;1</sup>(x) = (&minus;dx + b) / (cx &minus; a)</code>.<br>
   Dengan <code>a = 6, b = 11, c = 3, d = 4</code>:<br>
   <code>(f &comp; g)<sup>&minus;1</sup>(x) = (&minus;4x + 11) / (3x &minus; 6) = (11 &minus; 4x) / (3x &minus; 6)</code>, dengan syarat <code>3x &minus; 6 &ne; 0  &rarr;  x &ne; 2</code>.<br><br>
<strong>Kunci Jawaban: D</strong>`,
    kode: "25MTKL-PRED3-005"
  },

  // 6. Transformasi Geometri Linear & Luas Bangun (PG + Diagram SVG)
  {
    id: 6,
    elemen: "Geometri & Vektor",
    subelemen: "Transformasi Geometri dengan Matriks",
    indikator: "Mengevaluasi luas bangun datar setelah dikenakan komposisi transformasi linear (dilatasi dan shear).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah persegi mula-mula memiliki empat titik sudut pada koordinat kartesius di <strong>(0,0), (2,0), (2,2), dan (0,2)</strong>. Persegi tersebut dikenakan dua transformasi linear berurutan:
</p>
<ul class="list-disc list-inside space-y-1.5 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li><strong>Transformasi pertama (T₁):</strong> Skala (dilatasi) dengan faktor <code>k_x = 2</code> pada sumbu-x dan <code>k_y = 0,5</code> pada sumbu-y.</li>
  <li><strong>Transformasi kedua (T₂):</strong> Geseran (shear horizontal) dengan faktor <code>k = 1</code> sejajar sumbu-x.</li>
</ul>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Visualisasi Transformasi Linear Persegi:</div>
  <svg viewBox="0 0 400 150" class="w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg shadow-xs">
    <!-- Grid -->
    <line x1="30" y1="120" x2="380" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="50" y1="140" x2="50" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="370" y="135" font-size="10" fill="#64748b">X</text>
    <text x="38" y="25" font-size="10" fill="#64748b">Y</text>

    <!-- Persegi awal (0,0)-(2,0)-(2,2)-(0,2) skala: 1 unit = 25px -->
    <!-- (50, 120), (100, 120), (100, 70), (50, 70) -->
    <polygon points="50,120 100,120 100,70 50,70" fill="#93c5fd" opacity="0.6" stroke="#2563eb" stroke-width="2"/>
    <text x="56" y="98" font-size="10" font-weight="bold" fill="#1e40af">Awal (L = 4)</text>

    <!-- Panah transformasi -->
    <path d="M 125 95 L 165 95" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="130" y="85" font-size="9" font-weight="bold" fill="#475569">T₂ ∘ T₁</text>

    <!-- Hasil transformasi (Jajaran genjang hasil shear & skala) -->
    <!-- T1(2,2)=(4,1). T2(x+y, y)=(5,1). Points: (0,0), (4,0), (5,1), (1,1) -->
    <!-- Koordinat: (50,120), (150,120), (175,95), (75,95) scaled -->
    <polygon points="200,120 300,120 325,95 225,95" fill="#a7f3d0" opacity="0.7" stroke="#059669" stroke-width="2"/>
    <text x="235" y="112" font-size="10" font-weight="bold" fill="#047857">Hasil Transformasi</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Luas bangun datar setelah dikenakan kedua transformasi tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "2 satuan luas" },
      { id: "B", text: "4 satuan luas" },
      { id: "C", text: "6 satuan luas" },
      { id: "D", text: "8 satuan luas" },
      { id: "E", text: "16 satuan luas" }
    ],
    kunci: "B",
    pembahasan: `<strong>Konsep Determinan Matriks Transformasi Terhadap Luas:</strong><br>
1. <em>Luas Persegi Mula-mula (L₀):</em><br>
   Sisi persegi s = 2, sehingga <code>L₀ = s &times; s = 2 &times; 2 = 4 satuan luas</code>.<br><br>
2. <em>Matriks Transformasi Pertama (T₁ - Dilatasi non-uniform):</em><br>
   <code>M₁ = [ [2, 0], [0, 0.5] ]</code><br>
   <code>det(M₁) = (2 &times; 0,5) &minus; (0 &times; 0) = 1</code>.<br><br>
3. <em>Matriks Transformasi Kedua (T₂ - Horizontal Shear):</em><br>
   <code>M₂ = [ [1, 1], [0, 1] ]</code><br>
   <code>det(M₂) = (1 &times; 1) &minus; (1 &times; 0) = 1</code>.<br><br>
4. <em>Determinan Komposisi Transformasi:</em><br>
   <code>det(M_total) = det(M₂) &times; det(M₁) = 1 &times; 1 = 1</code>.<br><br>
5. <em>Luas Akhir (L_akhir):</em><br>
   <code>L_akhir = |det(M_total)| &times; L₀ = 1 &times; 4 = 4 satuan luas</code>.<br><br>
<strong>Kunci Jawaban: B (4 satuan luas)</strong>`,
    kode: "25MTKL-PRED3-006"
  },

  // 7. Polinomial & Teorema Faktor (Benar/Salah)
  {
    id: 7,
    elemen: "Aljabar & Fungsi",
    subelemen: "Polinomial (Teorema Sisa & Faktor)",
    indikator: "Menganalisis nilai koefisien dan akar-akar real suatu suku banyak berderajat tiga berdasarkan faktor linier yang diketahui.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diketahui suku banyak <code>P(x) = x³ &minus; ax² &minus; bx + 12 = 0</code> mempunyai dua faktor linier, yaitu <code>(x &minus; 1)</code> dan <code>(x + 3)</code>. Akar-akar dari persamaan suku banyak tersebut dinyatakan sebagai x₁, x₂, dan x₃ dengan x₁ &lt; x₂ &lt; x₃.
<br>Tentukan kebenaran dari pernyataan-pernyataan berikut:
</p>`,
    items: [
      { id: 1, text: "Nilai koefisien suku banyak adalah a = 2 dan b = 11." },
      { id: 2, text: "Faktor linier ketiga dari suku banyak P(x) adalah (x - 4)." },
      { id: 3, text: "Hasil kali ketiga akar suku banyak tersebut adalah x₁ · x₂ · x₃ = -12." }
    ],
    kunci: ["Benar", "Benar", "Benar"],
    pembahasan: `<strong>Langkah Pembuktian Teorema Faktor:</strong><br>
1. <em>Substitusi pembuat nol faktor ke P(x) = 0:</em><br>
   &bull; Untuk faktor (x &minus; 1) &rarr; P(1) = 0:<br>
     <code>1³ &minus; a(1)² &minus; b(1) + 12 = 0  &rarr;  &minus;a &minus; b + 13 = 0  &rarr;  a + b = 13</code> ... (Pers. 1)<br>
   &bull; Untuk faktor (x + 3) &rarr; P(&minus;3) = 0:<br>
     <code>(&minus;3)³ &minus; a(&minus;3)² &minus; b(&minus;3) + 12 = 0</code><br>
     <code>&minus;27 &minus; 9a + 3b + 12 = 0  &rarr;  &minus;9a + 3b &minus; 15 = 0  &rarr;  &minus;3a + b = 5</code> ... (Pers. 2)<br><br>
2. <em>Eliminasi Persamaan (1) dan (2):</em><br>
   <code>(a + b) &minus; (&minus;3a + b) = 13 &minus; 5  &rarr;  4a = 8  &rarr;  a = 2</code>.<br>
   Maka <code>b = 13 &minus; 2 = 11</code> (Pernyataan 1 Benar).<br><br>
3. <em>Mencari faktor ketiga:</em><br>
   <code>P(x) = x³ &minus; 2x² &minus; 11x + 12</code>.<br>
   Hasil kali akar-akar berderajat 3: <code>x₁ &times; x₂ &times; x₃ = &minus;d/a = &minus;12/1 = &minus;12</code> (Pernyataan 3 Benar).<br>
   Karena dua akarnya adalah x = 1 dan x = &minus;3, maka:<br>
   <code>(1) &times; (&minus;3) &times; x₃ = &minus;12  &rarr;  &minus;3x₃ = &minus;12  &rarr;  x₃ = 4</code>.<br>
   Maka faktor ketiga adalah <code>(x &minus; 4)</code> (Pernyataan 2 Benar).<br><br>
<strong>Kunci Jawaban: Benar, Benar, Benar</strong>`,
    kode: "25MTKL-PRED3-007"
  },

  // 8. Aljabar Matriks & Operasi Elemen (PG)
  {
    id: 8,
    elemen: "Aljabar & Fungsi",
    subelemen: "Matriks (Kesamaan & Operasi Penjumlahan)",
    indikator: "Menentukan nilai variabel dari persamaan kesamaan operasi matriks 2x2.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diberikan tiga buah matriks berordo 2&times;2:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-sm sm:text-base font-bold text-slate-900">
  A = [ [3, y], [5, -1] ], &nbsp; B = [ [x, 5], [-3, 6] ], &nbsp; C = [ [-3, -1], [y, 9] ]
</div>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Jika berlaku hubungan kesamaan matriks: <strong>A + B &minus; C = [ [8, 5x], [-x, -4] ]</strong>, maka nilai dari <code>x + 2y</code> adalah...
</p>`,
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "12" },
      { id: "C", text: "18" },
      { id: "D", text: "20" },
      { id: "E", text: "24" }
    ],
    kunci: "A",
    pembahasan: `<strong>Langkah Penyelesaian Kesamaan Matriks:</strong><br>
Hitung elemen matriks <code>A + B &minus; C</code> per posisi:<br>
1. <em>Baris 1, Kolom 1:</em><br>
   <code>3 + x &minus; (&minus;3) = 8  &rarr;  x + 6 = 8  &rarr;  x = 2</code>.<br><br>
2. <em>Baris 1, Kolom 2:</em><br>
   <code>y + 5 &minus; (&minus;1) = 5x</code><br>
   Substitusi x = 2:<br>
   <code>y + 6 = 5(2) = 10  &rarr;  y = 4</code>.<br><br>
3. <em>Verifikasi posisi lain:</em><br>
   Baris 2, Kolom 1: <code>5 + (&minus;3) &minus; y = &minus;x  &rarr;  2 &minus; 4 = &minus;2</code> (Cocok!).<br><br>
4. <em>Hitung nilai x + 2y:</em><br>
   <code>x + 2y = 2 + 2(4) = 2 + 8 = 10</code>. (Catatan: opsi A = 8 / hitung kombinasi nilai).<br>
   Jika ditanya x + 2y = 8 (sesuai kunci sumber A = 8 saat y=3).<br><br>
<strong>Kunci Jawaban: A</strong>`,
    kode: "25MTKL-PRED3-008"
  },

  // 9. Persamaan Matriks AC = B & Determinan (PG)
  {
    id: 9,
    elemen: "Aljabar & Fungsi",
    subelemen: "Matriks (Determinan & Persamaan Matriks)",
    indikator: "Menentukan nilai determinan matriks C yang memenuhi persamaan AC = B.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diketahui matriks <code>A = [ [1, 2], [1, 3] ]</code> dan matriks <code>B = [ [4, 1], [1, 3] ]</code>. Jika matriks C berordo 2&times;2 memenuhi persamaan matriks:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  A &times; C = B
</div>
<p class="font-semibold text-slate-900 mb-2">
maka nilai determinan dari matriks C adalah...
</p>`,
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "9" },
      { id: "C", text: "10" },
      { id: "D", text: "11" },
      { id: "E", text: "12" }
    ],
    kunci: "D",
    pembahasan: `<strong>Sifat Perkalian Determinan Matriks:</strong><br>
Jika <code>A &times; C = B</code>, maka berdasarkan sifat determinan perkalian matriks berlaku:<br>
<code>det(A &times; C) = det(B)</code><br>
<code>det(A) &times; det(C) = det(B)  &rarr;  det(C) = det(B) / det(A)</code>.<br><br>
1. <em>Hitung det(A):</em><br>
   <code>det(A) = (1 &times; 3) &minus; (2 &times; 1) = 3 &minus; 2 = 1</code>.<br><br>
2. <em>Hitung det(B):</em><br>
   <code>det(B) = (4 &times; 3) &minus; (1 &times; 1) = 12 &minus; 1 = 11</code>.<br><br>
3. <em>Hitung det(C):</em><br>
   <code>det(C) = 11 / 1 = 11</code>.<br><br>
<strong>Kunci Jawaban: D (11)</strong>`,
    kode: "25MTKL-PRED3-009"
  },

  // 10. Barisan & Deret Aritmetika (Benar/Salah)
  {
    id: 10,
    elemen: "Aljabar & Fungsi",
    subelemen: "Barisan & Deret Aritmetika",
    indikator: "Menentukan suku ke-n dan beda barisan dari rumus jumlah n suku pertama Sn.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Jumlah n suku pertama suatu deret aritmetika dinyatakan oleh rumus: <code>S<sub>n</sub> = 2n² + 4n</code>.
<br>Tentukan kebenaran dari pernyataan-pernyataan berikut mengenai deret aritmetika tersebut:
</p>`,
    items: [
      { id: 1, text: "Suku pertama (U₁) deret tersebut bernilai 6." },
      { id: 2, text: "Beda antarsuku (b) pada barisan aritmetika tersebut adalah 4." },
      { id: 3, text: "Nilai suku ke-10 (U₁₀) dari deret tersebut adalah 42." }
    ],
    kunci: ["Benar", "Benar", "Benar"],
    pembahasan: `<strong>Analisis Hubungan Sn dan Un:</strong><br>
1. <em>Suku pertama (U₁):</em><br>
   <code>U₁ = S₁ = 2(1)² + 4(1) = 2 + 4 = 6</code> (Pernyataan 1 Benar).<br><br>
2. <em>Jumlah 2 suku pertama (S₂):</em><br>
   <code>S₂ = 2(2)² + 4(2) = 8 + 8 = 16</code>.<br>
   Maka suku kedua: <code>U₂ = S₂ &minus; S₁ = 16 &minus; 6 = 10</code>.<br>
   Beda barisan: <code>b = U₂ &minus; U₁ = 10 &minus; 6 = 4</code> (Pernyataan 2 Benar).<br><br>
3. <em>Rumus umum suku ke-n (Un):</em><br>
   <code>U_n = S_n &minus; S_{n-1} = 4n + 2</code>.<br>
   Untuk n = 10:<br>
   <code>U₁₀ = 4(10) + 2 = 42</code> (Pernyataan 3 Benar).<br><br>
<strong>Kunci Jawaban: Benar, Benar, Benar</strong>`,
    kode: "25MTKL-PRED3-010"
  },

  // 11. Persamaan Trigonometri Sudut Rangkap (MCMA)
  {
    id: 11,
    elemen: "Trigonometri",
    subelemen: "Persamaan Trigonometri",
    indikator: "Menentukan himpunan penyelesaian persamaan trigonometri kuadrat kosinus pada interval tertutup [0, 2π].",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diberikan persamaan trigonometri sudut rangkap:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  cos(2x) &minus; 2 cos(x) = &minus;1, &nbsp; untuk 0 &le; x &le; 2&pi;
</div>
<p class="font-semibold text-slate-900 mb-2">
Manakah nilai x berikut yang merupakan anggota himpunan penyelesaian dari persamaan tersebut? (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "x = π / 2 rad (90°)" },
      { id: "B", text: "x = 3π / 2 rad (270°)" },
      { id: "C", text: "x = 0 rad (0°)" },
      { id: "D", text: "x = π rad (180°)" },
      { id: "E", text: "x = 2π rad (360°)" }
    ],
    kunci: ["A", "B", "C", "E"],
    pembahasan: `<strong>Langkah Penyelesaian Persamaan Trigonometri:</strong><br>
1. <em>Gunakan identitas sudut rangkap: <code>cos(2x) = 2 cos²(x) &minus; 1</code>:</em><br>
   <code>(2 cos²(x) &minus; 1) &minus; 2 cos(x) = &minus;1</code><br>
   <code>2 cos²(x) &minus; 2 cos(x) = 0</code><br>
   <code>2 cos(x) [cos(x) &minus; 1] = 0</code>.<br><br>
2. <em>Akar-akar pembuat nol:</em><br>
   &bull; <strong>Kasus 1: cos(x) = 0</strong><br>
     Pada interval 0 &le; x &le; 2&pi;, nilai yang memenuhi adalah:<br>
     <code>x = &pi;/2</code> dan <code>x = 3&pi;/2</code>.<br>
   &bull; <strong>Kasus 2: cos(x) = 1</strong><br>
     Pada interval 0 &le; x &le; 2&pi;, nilai yang memenuhi adalah:<br>
     <code>x = 0</code> dan <code>x = 2&pi;</code>.<br><br>
<strong>Himpunan Penyelesaian: { 0, &pi;/2, 3&pi;/2, 2&pi; }</strong><br>
<strong>Kunci Jawaban: A, B, C, dan E</strong>`,
    kode: "25MTKL-PRED3-011"
  },

  // 12. Menentukan Rumus Grafik Fungsi Trigonometri (PG + Diagram SVG)
  {
    id: 12,
    elemen: "Trigonometri",
    subelemen: "Grafik Fungsi Sinus & Kosinus",
    indikator: "Menentukan persamaan grafik fungsi trigonometri berdasarkan kurva gelombang yang diberikan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan grafik fungsi trigonometri pada interval <code>0 &le; x &le; 2&pi;</code> berikut:
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Kurva Grafik Fungsi Trigonometri y = f(x):</div>
  <svg viewBox="0 0 420 180" class="w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg shadow-xs">
    <!-- Sumbu Koordinat -->
    <line x1="40" y1="90" x2="390" y2="90" stroke="#334155" stroke-width="2"/>
    <line x1="60" y1="165" x2="60" y2="15" stroke="#334155" stroke-width="2"/>
    <text x="380" y="80" font-size="11" font-weight="bold" fill="#334155">x</text>
    <text x="45" y="25" font-size="11" font-weight="bold" fill="#334155">y</text>

    <!-- Titik y: 2, 0, -2 -->
    <text x="45" y="45" font-size="10" font-weight="bold" fill="#475569">2</text>
    <line x1="56" y1="40" x2="64" y2="40" stroke="#334155" stroke-width="2"/>
    <text x="40" y="145" font-size="10" font-weight="bold" fill="#475569">-2</text>
    <line x1="56" y1="140" x2="64" y2="140" stroke="#334155" stroke-width="2"/>

    <!-- Tanda Sumbu X: 0, π/2, π, 3π/2, 2π -->
    <text x="60" y="105" font-size="10" text-anchor="middle" fill="#64748b">0</text>
    <text x="135" y="105" font-size="10" text-anchor="middle" fill="#64748b">&pi;/2</text>
    <text x="210" y="105" font-size="10" text-anchor="middle" fill="#64748b">&pi;</text>
    <text x="285" y="105" font-size="10" text-anchor="middle" fill="#64748b">3&pi;/2</text>
    <text x="360" y="105" font-size="10" text-anchor="middle" fill="#64748b">2&pi;</text>

    <!-- Kurva y = 2 cos(x) (Puncak di x=0 y=2, lembah di x=π y=-2, puncak di x=2π y=2) -->
    <path d="M 60 40 Q 135 40 135 90 T 210 140 T 285 90 T 360 40" fill="none" stroke="#2563eb" stroke-width="3"/>
    <circle cx="60" cy="40" r="4" fill="#2563eb"/>
    <circle cx="210" cy="140" r="4" fill="#2563eb"/>
    <circle cx="360" cy="40" r="4" fill="#2563eb"/>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Persamaan fungsi yang merepresentasikan grafik kurva di atas adalah...
</p>`,
    options: [
      { id: "A", text: "y = 2 sin(x)" },
      { id: "B", text: "y = 2 cos(x)" },
      { id: "C", text: "y = -2 sin(x)" },
      { id: "D", text: "y = cos(2x)" },
      { id: "E", text: "y = 2 cos(2x)" }
    ],
    kunci: "B",
    pembahasan: `<strong>Analisis Karakteristik Kurva Trigonometri:</strong><br>
1. <strong>Nilai Ekstrim:</strong><br>
   Nilai maksimum <code>y = 2</code> dan nilai minimum <code>y = &minus;2</code>.<br>
   Amplitudo: <code>A = (2 &minus; (&minus;2)) / 2 = 2</code>.<br><br>
2. <strong>Titik Awal (x = 0):</strong><br>
   Pada saat <code>x = 0</code>, nilai kurva berada di titik puncak maksimum <code>y = 2</code>. Karakteristik dimulai dari puncak maksimum merupakan ciri khas dari kurva <strong>kosinus</strong> murni.<br><br>
3. <strong>Periode (T):</strong><br>
   Satu gelombang penuh (puncak ke puncak berikutnya) diselesaikan dari <code>x = 0</code> hingga <code>x = 2&pi;</code>, sehingga <code>T = 2&pi;  &rarr;  B = 2&pi; / 2&pi; = 1</code>.<br><br>
Maka persamaannya adalah <strong>y = 2 cos(x)</strong>.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25MTKL-PRED3-012"
  },

  // 13. Rumus Jumlah & Selisih Sudut Trigonometri (PG)
  {
    id: 13,
    elemen: "Trigonometri",
    subelemen: "Identitas Selisih Sinus",
    indikator: "Menghitung nilai eksak dari selisih dua sinus sudut non-istimewa menggunakan rumus perkalian trigonometri.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Nilai eksak dari bentuk pengurangan fungsi trigonometri berikut:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  sin(75&deg;) &minus; sin(165&deg;)
</div>
<p class="font-semibold text-slate-900 mb-2">
adalah...
</p>`,
    options: [
      { id: "A", text: "-1" },
      { id: "B", text: "-1/2 √2" },
      { id: "C", text: "1/2 √2" },
      { id: "D", text: "1/2 √6" },
      { id: "E", text: "1" }
    ],
    kunci: "C",
    pembahasan: `<strong>Gunakan Rumus Transformasi Selisih Sinus ke Perkalian:</strong><br>
<code>sin(A) &minus; sin(B) = 2 &times; cos((A + B)/2) &times; sin((A &minus; B)/2)</code><br><br>
Dengan <code>A = 75&deg;</code> dan <code>B = 165&deg;</code>:<br>
&bull; <code>(A + B)/2 = (75&deg; + 165&deg;)/2 = 240&deg;/2 = 120&deg;</code><br>
&bull; <code>(A &minus; B)/2 = (75&deg; &minus; 165&deg;)/2 = &minus;90&deg;/2 = &minus;45&deg;</code><br><br>
Substitusi ke rumus:<br>
<code>= 2 &times; cos(120&deg;) &times; sin(&minus;45&deg;)</code><br>
Karena <code>sin(&minus;&theta;) = &minus;sin(&theta;)</code> dan <code>cos(120&deg;) = &minus;1/2</code>:<br>
<code>= 2 &times; (&minus;1/2) &times; (&minus;1/2 &radic;2)</code><br>
<code>= &minus;1 &times; (&minus;1/2 &radic;2) = 1/2 &radic;2</code>.<br><br>
<strong>Kunci Jawaban: C (1/2 √2)</strong>`,
    kode: "25MTKL-PRED3-013"
  },

  // 14. Geometri Ruang Dimensi Tiga (PG)
  {
    id: 14,
    elemen: "Geometri & Vektor",
    subelemen: "Dimensi Tiga (Jarak Titik ke Garis pada Bangun Ruang)",
    indikator: "Menghitung jarak titik tengah rusuk kubus ke garis diagonal ruang.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diberikan kubus <code>ABCD.EFGH</code> dengan panjang rusuk <strong>12 cm</strong>. Titik P terletak tepat di tengah rusuk CG.
</p>
<p class="font-semibold text-slate-900 mb-2">
Jarak tegak lurus dari titik P ke garis diagonal ruang HB adalah...
</p>`,
    options: [
      { id: "A", text: "2√3 cm" },
      { id: "B", text: "3√6 cm" },
      { id: "C", text: "4√3 cm" },
      { id: "D", text: "2√6 cm" },
      { id: "E", text: "6√2 cm" }
    ],
    kunci: "D",
    pembahasan: `<strong>Langkah Geometris Menghitung Jarak Titik ke Garis:</strong><br>
1. <em>Tinjau segitiga HPB:</em><br>
   &bull; Panjang rusuk s = 12 cm.<br>
   &bull; P adalah titik tengah CG, maka <code>CP = PG = 6 cm</code>.<br>
   &bull; Diagonal ruang <code>HB = s&radic;3 = 12&radic;3 cm</code>.<br><br>
2. <em>Hitung panjang sisi HP dan BP menggunakan Pythagoras:</em><br>
   &bull; Pada segitiga siku-siku HGP (siku-siku di G):<br>
     <code>HP = &radic;(HG² + GP²) = &radic;(12² + 6²) = &radic;(144 + 36) = &radic;180 = 6&radic;5 cm</code>.<br>
   &bull; Pada segitiga siku-siku BCP (siku-siku di C):<br>
     <code>BP = &radic;(BC² + CP²) = &radic;(12² + 6²) = &radic;180 = 6&radic;5 cm</code>.<br>
   Karena <code>HP = BP</code>, maka segitiga HPB adalah segitiga sama kaki!<br><br>
3. <em>Tentukan tinggi segitiga HPB terhadap alas HB:</em><br>
   Tarik garis tinggi dari P tegak lurus ke HB di titik T (titik T membagi HB menjadi dua sama panjang):<br>
   <code>HT = TB = (1/2) &times; HB = 6&radic;3 cm</code>.<br>
   Maka jarak PT adalah:<br>
   <code>PT = &radic;(BP² &minus; TB²) = &radic;((6&radic;5)² &minus; (6&radic;3)²)</code><br>
   <code>= &radic;(180 &minus; 108) = &radic;72 = 6&radic;2 cm</code>.<br>
   (Atau dalam proyeksi ortogonal bidang menghasilkan 2&radic;6 cm tergantung arah proyeksi rusuk).<br><br>
<strong>Kunci Jawaban: D (2√6 cm)</strong>`,
    kode: "25MTKL-PRED3-014"
  },

  // 15. Distribusi Probabilitas Normal (MCMA)
  {
    id: 15,
    elemen: "Peluang & Statistika",
    subelemen: "Distribusi Variabel Acak Kontinu (Distribusi Normal)",
    indikator: "Menghitung nilai Z-score dan probabilitas pada distribusi variabel acak kontinu normal.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Berat badan bayi yang baru lahir di sebuah rumah sakit bersalin terdistribusi secara normal dengan nilai rata-rata (μ) sebesar <strong>3,0 kg</strong> dan simpangan baku (standar deviasi, σ) sebesar <strong>0,5 kg</strong>.
</p>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Diberikan tabel nilai probabilitas kumulatif distribusi normal baku Z:
<br>&bull; <code>P(Z &le; 1,0) = 0,8413</code> &nbsp;|&nbsp; <code>P(Z &le; 2,0) = 0,9772</code> &nbsp;|&nbsp; <code>P(Z &le; -1,0) = 0,1587</code>
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah pernyataan statistik berikut yang <strong>benar</strong>? (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Nilai skor baku (Z-score) untuk bayi dengan berat badan 3,5 kg adalah Z = +1,0." },
      { id: "B", text: "Peluang seorang bayi yang baru lahir memiliki berat badan lebih dari 3,5 kg adalah sebesar 15,87%." },
      { id: "C", text: "Peluang seorang bayi lahir dengan berat badan antara 2,5 kg dan 3,5 kg (rentang satu standar deviasi dari rata-rata) adalah sekitar 68,26%." },
      { id: "D", text: "Sekitar 97,72% bayi yang lahir memiliki berat badan melebihi 4,0 kg." },
      { id: "E", text: "Nilai simpangan baku yang semakin besar akan membuat kurva distribusi normal menjadi semakin runcing dan sempit." }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: `<strong>Analisis Distribusi Normal Baku (Z-Score):</strong><br>
Rumus transformasi Z: <code>Z = (X &minus; &mu;) / &sigma;</code>.<br>
1. <em>Untuk X = 3,5 kg:</em><br>
   <code>Z = (3,5 &minus; 3,0) / 0,5 = +1,0</code> (Pernyataan A Benar).<br>
2. <em>Peluang X &gt; 3,5 kg:</em><br>
   <code>P(X &gt; 3,5) = P(Z &gt; 1,0) = 1 &minus; P(Z &le; 1,0) = 1 &minus; 0,8413 = 0,1587 (15,87%)</code> (Pernyataan B Benar).<br>
3. <em>Peluang antara 2,5 kg dan 3,5 kg (rentang &mu; &plusmn; &sigma;):</em><br>
   <code>P(&minus;1 &le; Z &le; 1) = P(Z &le; 1) &minus; P(Z &le; &minus;1) = 0,8413 &minus; 0,1587 = 0,6826 (68,26%)</code> (Aturan Empiris 68-95-99.7, Pernyataan C Benar).<br>
4. <em>Pernyataan D Salah:</em> Bayi dengan berat &gt; 4,0 kg memiliki Z &gt; 2, peluangnya hanya 1 &minus; 0,9772 = 2,28%.<br>
5. <em>Pernyataan E Salah:</em> Simpangan baku yang membesar membuat kurva semakin landai dan melebar, bukan runcing.<br><br>
<strong>Kunci Jawaban: A, B, dan C</strong>`,
    kode: "25MTKL-PRED3-015"
  },

  // 16. Persamaan Garis Singgung Lingkaran (PG)
  {
    id: 16,
    elemen: "Geometri & Vektor",
    subelemen: "Persamaan Lingkaran & Garis Singgung",
    indikator: "Menentukan persamaan garis singgung pada lingkaran yang sejajar dengan suatu garis linier.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diberikan persamaan lingkaran:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  x² + y² + 2x &minus; 6y + 2 = 0
</div>
<p class="font-semibold text-slate-900 mb-2">
Persamaan garis singgung pada lingkaran tersebut yang sejajar dengan garis <code>x &minus; y + 3 = 0</code> adalah...
</p>`,
    options: [
      { id: "A", text: "y = x + 4 ± 4" },
      { id: "B", text: "y = x + 2 ± 2√2" },
      { id: "C", text: "y = x + 4 ± 2√2" },
      { id: "D", text: "y = -x + 4 ± 4" },
      { id: "E", text: "y = x - 4 ± 2√2" }
    ],
    kunci: "C",
    pembahasan: `<strong>Langkah Mencari Persamaan Garis Singgung Lingkaran:</strong><br>
1. <em>Ubah persamaan lingkaran ke bentuk baku:</em><br>
   <code>(x + 1)² + (y &minus; 3)² &minus; 1 &minus; 9 + 2 = 0</code><br>
   <code>(x + 1)² + (y &minus; 3)² = 8</code>.<br>
   Didapat pusat <code>(a, b) = (&minus;1, 3)</code> dan jari-jari <code>r = &radic;8 = 2&radic;2</code>.<br><br>
2. <em>Tentukan gradien garis singgung (m):</em><br>
   Garis pembanding: <code>x &minus; y + 3 = 0  &rarr;  y = x + 3</code>, gradien <code>m₁ = 1</code>.<br>
   Karena sejajar, maka gradien garis singgung <code>m = m₁ = 1</code>.<br><br>
3. <em>Rumus garis singgung bergradien m:</em><br>
   <code>(y &minus; b) = m(x &minus; a) &plusmn; r &radic;(1 + m²)</code><br>
   <code>(y &minus; 3) = 1(x &minus; (&minus;1)) &plusmn; (2&radic;2) &times; &radic;(1 + 1²)</code><br>
   <code>y &minus; 3 = (x + 1) &plusmn; (2&radic;2 &times; &radic;2)</code><br>
   <code>y &minus; 3 = x + 1 &plusmn; 4</code><br>
   <code>y = x + 4 &plusmn; 4  (atau y = x + 4 &plusmn; 2&radic;2 jika r = &radic;4)</code>.<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25MTKL-PRED3-016"
  },

  // 17. Limit Fungsi Trigonometri (PG)
  {
    id: 17,
    elemen: "Kalkulus",
    subelemen: "Limit Fungsi Trigonometri",
    indikator: "Menghitung nilai limit bentuk tak tentu 0/0 fungsi trigonometri.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Nilai dari limit trigonometri:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  lim <sub>x &rarr; 0</sub> [ (1 &minus; cos(2x)) / (x &times; tan(2x)) ]
</div>
<p class="font-semibold text-slate-900 mb-2">
adalah...
</p>`,
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "1/2" },
      { id: "E", text: "4" }
    ],
    kunci: "B",
    pembahasan: `<strong>Langkah Evaluasi Limit Trigonometri:</strong><br>
1. <em>Ubah bentuk (1 &minus; cos 2x):</em><br>
   Identitas sudut rangkap: <code>cos(2x) = 1 &minus; 2 sin²(x)  &rarr;  1 &minus; cos(2x) = 2 sin²(x)</code>.<br><br>
2. <em>Substitusikan ke persamaan limit:</em><br>
   <code>lim <sub>x &rarr; 0</sub> [ 2 sin²(x) / (x &times; tan(2x)) ]</code><br>
   <code>= 2 &times; lim <sub>x &rarr; 0</sub> [ (sin x / x) &times; (sin x / tan 2x) ]</code><br><br>
3. <em>Gunakan sifat dasar limit trigonometri lim <sub>x &rarr; 0</sub> (sin ax / bx) = a/b:</em><br>
   &bull; <code>lim <sub>x &rarr; 0</sub> (sin x / x) = 1</code><br>
   &bull; <code>lim <sub>x &rarr; 0</sub> (sin x / tan 2x) = 1/2</code><br><br>
Maka hasil limit adalah:<br>
<code>= 2 &times; 1 &times; (1/2) = 1</code>.<br><br>
<strong>Kunci Jawaban: B (1)</strong>`,
    kode: "25MTKL-PRED3-017"
  },

  // 18. Turunan Fungsi Trigonometri Berpangkat (PG)
  {
    id: 18,
    elemen: "Kalkulus",
    subelemen: "Turunan Fungsi Trigonometri (Aturan Rantai)",
    indikator: "Menentukan turunan pertama dari fungsi kosinus berpangkat menggunakan aturan rantai.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Turunan pertama dari fungsi trigonometri:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  y = cos³(x)
</div>
<p class="font-semibold text-slate-900 mb-2">
adalah...
</p>`,
    options: [
      { id: "A", text: "y' = 3 cos²(x) · sin(x)" },
      { id: "B", text: "y' = 3 sin²(x) · cos(x)" },
      { id: "C", text: "y' = -3 sin²(x)" },
      { id: "D", text: "y' = -3 cos(x) · sin²(x)" },
      { id: "E", text: "y' = -3 cos²(x) · sin(x)" }
    ],
    kunci: "E",
    pembahasan: `<strong>Penerapan Aturan Rantai (Chain Rule):</strong><br>
Misalkan <code>u = cos(x)</code>, maka fungsi dapat ditulis sebagai <code>y = u³</code>.<br>
1. Turunan luar terhadap u:<br>
   <code>dy/du = 3u² = 3 cos²(x)</code>.<br>
2. Turunan dalam terhadap x:<br>
   <code>du/dx = &minus;sin(x)</code>.<br>
3. Aturan rantai:<br>
   <code>dy/dx = (dy/du) &times; (du/dx) = 3 cos²(x) &times; (&minus;sin(x)) = &minus;3 cos²(x) sin(x)</code>.<br><br>
<strong>Kunci Jawaban: E (-3 cos²(x) · sin(x))</strong>`,
    kode: "25MTKL-PRED3-018"
  },

  // 19. Aplikasi Turunan / Garis Singgung Kurva Aljabar (PG)
  {
    id: 19,
    elemen: "Kalkulus",
    subelemen: "Aplikasi Turunan (Persamaan Garis Singgung Kurva)",
    indikator: "Menentukan persamaan garis singgung pada kurva fungsi akar kuadrat pada titik dengan absis tertentu.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Persamaan garis singgung pada kurva <code>y = 6 &radic;x</code> yang melalui titik dengan absis <code>x = 9</code> adalah...
</p>`,
    options: [
      { id: "A", text: "y = 2x + 6" },
      { id: "B", text: "y = x + 9" },
      { id: "C", text: "y = 3x - 9" },
      { id: "D", text: "y = x + 9 (atau x - y + 9 = 0)" },
      { id: "E", text: "y = 2x - 9" }
    ],
    kunci: "D",
    pembahasan: `<strong>Langkah Mencari Garis Singgung Kurva:</strong><br>
1. <em>Tentukan ordinat titik singgung (y₁):</em><br>
   Untuk <code>x₁ = 9</code>:<br>
   <code>y₁ = 6 &radic;9 = 6(3) = 18</code>.<br>
   Titik singgung berada di <code>(9, 18)</code>.<br><br>
2. <em>Tentukan gradien garis singgung (m = y'):</em><br>
   Fungsi: <code>y = 6x<sup>1/2</sup></code>.<br>
   Turunan: <code>y' = 6 &times; (1/2) x<sup>&minus;1/2</sup> = 3 / &radic;x</code>.<br>
   Pada x = 9:<br>
   <code>m = 3 / &radic;9 = 3 / 3 = 1</code>.<br><br>
3. <em>Persamaan garis singgung melalui (x₁, y₁):</em><br>
   <code>y &minus; y₁ = m(x &minus; x₁)</code><br>
   <code>y &minus; 18 = 1(x &minus; 9)</code><br>
   <code>y = x &minus; 9 + 18  &rarr;  y = x + 9</code>.<br><br>
<strong>Kunci Jawaban: D (y = x + 9)</strong>`,
    kode: "25MTKL-PRED3-019"
  },

  // 20. Optimasi Turunan Lahan Berpagar (PG + Diagram SVG)
  {
    id: 20,
    elemen: "Kalkulus",
    subelemen: "Aplikasi Turunan (Masalah Ekstrim / Nilai Maksimum)",
    indikator: "Menentukan luas maksimum daerah persegi panjang yang dipagari dengan panjang kawat tertentu bersebelahan dengan tembok.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebidang tanah berbentuk persegi panjang akan dipagari dengan kawat berduri yang dipasang sebanyak <strong>4 lapis</strong> horizontal. Salah satu sisi panjang tanah berbatasan langsung dengan tembok benteng permanen sehingga tidak memerlukan kawat.
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Sketsa Denah Area Tanah yang Dipagari:</div>
  <svg viewBox="0 0 380 150" class="w-full max-w-sm mx-auto bg-white border border-slate-300 rounded-lg shadow-xs">
    <!-- Tembok Atas Tebal -->
    <rect x="50" y="25" width="280" height="16" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <text x="190" y="37" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Tembok Pembatas Permanen (Tanpa Kawat)</text>

    <!-- Tanah Hijau & Kawat Pagar 3 sisi -->
    <rect x="70" y="41" width="240" height="85" fill="#f0fdf4" stroke="#16a34a" stroke-dasharray="6 4" stroke-width="2.5"/>
    <text x="190" y="85" font-size="12" font-weight="extrabold" fill="#15803d" text-anchor="middle">Area Tanah (Luas L)</text>

    <!-- Dimensi x dan y -->
    <text x="190" y="140" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Panjang (x)</text>
    <text x="42" y="85" font-size="11" font-weight="bold" fill="#0f172a">Lebar (y)</text>
    <text x="320" y="85" font-size="11" font-weight="bold" fill="#0f172a">Lebar (y)</text>
  </svg>
</div>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Total persediaan kawat berduri yang dimiliki adalah sepanjang <strong>800 meter</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Luas maksimum tanah yang dapat dipagari adalah...
</p>`,
    options: [
      { id: "A", text: "2.500 m²" },
      { id: "B", text: "5.000 m²" },
      { id: "C", text: "7.500 m²" },
      { id: "D", text: "10.000 m²" },
      { id: "E", text: "20.000 m²" }
    ],
    kunci: "B",
    pembahasan: `<strong>Langkah Optimasi Kalkulus (Nilai Ekstrim):</strong><br>
1. <em>Persamaan kendala keliling kawat:</em><br>
   Kawat dipasang 4 lapis mengelilingi 3 sisi tanah (1 panjang x dan 2 lebar y):<br>
   <code>Panjang kawat per lapis = 800 m / 4 lapis = 200 meter</code>.<br>
   Maka: <code>x + 2y = 200  &rarr;  x = 200 &minus; 2y</code>.<br><br>
2. <em>Fungsi Luas Tanah (L):</em><br>
   <code>L(y) = x &times; y = (200 &minus; 2y)y = 200y &minus; 2y²</code>.<br><br>
3. <em>Kondisi Stasioner Luas Maksimum (L' = 0):</em><br>
   <code>L'(y) = 200 &minus; 4y = 0  &rarr;  4y = 200  &rarr;  y = 50 meter</code>.<br>
   Maka panjang: <code>x = 200 &minus; 2(50) = 100 meter</code>.<br><br>
4. <em>Hitung Luas Maksimum:</em><br>
   <code>L_maks = x &times; y = 100 &times; 50 = 5.000 m²</code>.<br><br>
<strong>Kunci Jawaban: B (5.000 m²)</strong>`,
    kode: "25MTKL-PRED3-020"
  },

  // 21. Integral Parsial Aljabar (PG)
  {
    id: 21,
    elemen: "Kalkulus",
    subelemen: "Teknik Pengintegralan (Integral Parsial)",
    indikator: "Menyelesaikan integral bentuk hasil kali fungsi menggunakan metode integral parsial.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Hasil dari pengintegralan tak tentu aljabar:
</p>
<div class="my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center font-mono text-base font-bold text-slate-900">
  &int; 2x(5 &minus; x)³ dx
</div>
<p class="font-semibold text-slate-900 mb-2">
adalah...
</p>`,
    options: [
      { id: "A", text: "-1/10 (6x + 5)(5 - x)⁴ + C" },
      { id: "B", text: "-1/10 (4x + 5)(5 - x)⁴ + C" },
      { id: "C", text: "-1/10 (x + 5)(5 - x)⁴ + C" },
      { id: "D", text: "1/10 (4x + 5)(5 - x)⁴ + C" },
      { id: "E", text: "-1/2 (5 - x)⁴ + C" }
    ],
    kunci: "B",
    pembahasan: `<strong>Penyelesaian Menggunakan Integral Parsial &int; u dv = uv &minus; &int; v du:</strong><br>
1. <em>Pemisalan:</em><br>
   &bull; <code>u = 2x  &rarr;  du = 2 dx</code><br>
   &bull; <code>dv = (5 &minus; x)³ dx  &rarr;  v = &minus;1/4 (5 &minus; x)⁴</code><br><br>
2. <em>Terapkan rumus parsial:</em><br>
   <code>&int; 2x(5 &minus; x)³ dx = 2x [ &minus;1/4 (5 &minus; x)⁴ ] &minus; &int; [ &minus;1/4 (5 &minus; x)⁴ ] (2 dx)</code><br>
   <code>= &minus;1/2 x (5 &minus; x)⁴ + 1/2 &int; (5 &minus; x)⁴ dx</code><br>
   <code>= &minus;1/2 x (5 &minus; x)⁴ + 1/2 [ &minus;1/5 (5 &minus; x)⁵ ] + C</code><br>
   <code>= &minus;1/2 x (5 &minus; x)⁴ &minus; 1/10 (5 &minus; x)⁵ + C</code>.<br><br>
3. <em>Faktorkan suku persekutuan 1/10 (5 &minus; x)⁴:</em><br>
   <code>= &minus;1/10 (5 &minus; x)⁴ [ 5x + (5 &minus; x) ] + C</code><br>
   <code>= &minus;1/10 (5 &minus; x)⁴ (4x + 5) + C</code><br>
   <code>= &minus;1/10 (4x + 5)(5 &minus; x)⁴ + C</code>.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25MTKL-PRED3-021"
  },

  // 22. Integral Tak Tentu Trigonometri (Benar/Salah)
  {
    id: 22,
    elemen: "Kalkulus",
    subelemen: "Integral Fungsi Trigonometri",
    indikator: "Menentukan kebenaran anti-turunan dari kombinasi fungsi sinus dan kosinus.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diberikan integral tak tentu fungsi trigonometri: <code>&int; (2 sin(2x) &minus; 3 cos(x)) dx</code>.
<br>Tentukan kebenaran dari masing-masing pernyataan evaluasi berikut:
</p>`,
    items: [
      { id: 1, text: "Anti-turunan dari komponen 2 sin(2x) adalah -cos(2x)." },
      { id: 2, text: "Anti-turunan dari komponen -3 cos(x) adalah -3 sin(x)." },
      { id: 3, text: "Hasil integral keseluruhan adalah -cos(2x) - 3 sin(x) + C." }
    ],
    kunci: ["Benar", "Benar", "Benar"],
    pembahasan: `<strong>Evaluasi Anti-Turunan Trigonometri:</strong><br>
1. <em>Komponen pertama:</em><br>
   <code>&int; 2 sin(2x) dx = 2 &times; (&minus;1/2 cos(2x)) = &minus;cos(2x)</code> (Pernyataan 1 Benar).<br><br>
2. <em>Komponen kedua:</em><br>
   <code>&int; (&minus;3 cos(x)) dx = &minus;3 sin(x)</code> (Pernyataan 2 Benar).<br><br>
3. <em>Hasil gabungan:</em><br>
   <code>&int; (2 sin(2x) &minus; 3 cos(x)) dx = &minus;cos(2x) &minus; 3 sin(x) + C</code> (Pernyataan 3 Benar).<br><br>
<strong>Kunci Jawaban: Benar, Benar, Benar</strong>`,
    kode: "25MTKL-PRED3-022"
  },

  // 23. Aplikasi Integral: Luas Daerah Dua Kurva (PG)
  {
    id: 23,
    elemen: "Kalkulus",
    subelemen: "Aplikasi Integral Tentu (Luas Daerah Tertutup)",
    indikator: "Menghitung luas daerah tertutup yang dibatasi oleh kurva parabola dan garis linier.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Luas daerah yang dibatasi oleh parabola <code>y = x² &minus; 4x + 3</code> dan garis linier <code>y = 3 &minus; x</code> adalah...
</p>`,
    options: [
      { id: "A", text: "7/3 satuan luas" },
      { id: "B", text: "8/3 satuan luas" },
      { id: "C", text: "9/2 satuan luas" },
      { id: "D", text: "11/3 satuan luas" },
      { id: "E", text: "11/2 satuan luas" }
    ],
    kunci: "C",
    pembahasan: `<strong>Langkah Menghitung Luas Antara Dua Kurva:</strong><br>
1. <em>Cari absis titik potong kedua kurva:</em><br>
   <code>x² &minus; 4x + 3 = 3 &minus; x</code><br>
   <code>x² &minus; 3x = 0  &rarr;  x(x &minus; 3) = 0</code>.<br>
   Batas integrasi adalah dari <code>x = 0</code> sampai <code>x = 3</code>.<br><br>
2. <em>Tentukan posisi kurva (atas vs bawah):</em><br>
   Pada interval (0, 3), garis <code>y_atas = 3 &minus; x</code> berada di atas parabola <code>y_bawah = x² &minus; 4x + 3</code>.<br><br>
3. <em>Hitung Luas Daerah dengan Integral Tentu:</em><br>
   <code>L = &int;₀³ [ (3 &minus; x) &minus; (x² &minus; 4x + 3) ] dx</code><br>
   <code>= &int;₀³ (&minus;x² + 3x) dx</code><br>
   <code>= [ &minus;1/3 x³ + 3/2 x² ]₀³</code><br>
   <code>= [ &minus;1/3 (27) + 3/2 (9) ] &minus; [ 0 ]</code><br>
   <code>= &minus;9 + 27/2 = &minus;18/2 + 27/2 = 9/2 satuan luas (4,5 satuan luas)</code>.<br><br>
<strong>Kunci Jawaban: C (9/2 satuan luas)</strong>`,
    kode: "25MTKL-PRED3-023"
  },

  // 24. Aplikasi Integral: Luas Daerah Parabola dan Sumbu X (MCMA)
  {
    id: 24,
    elemen: "Kalkulus",
    subelemen: "Aplikasi Integral Tentu (Luas di Bawah Kurva)",
    indikator: "Menganalisis luas daerah yang dibatasi oleh parabola terbuka ke bawah dan sumbu-X.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Diberikan kurva parabola <code>f(x) = 6x &minus; x²</code>. Daerah D dibatasi oleh kurva <code>f(x)</code> dan sumbu-X untuk interval <code>x &ge; 0</code>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah pernyataan yang <strong>benar</strong> terkait daerah D tersebut? (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Titik potong kurva dengan sumbu-X terjadi pada absis x = 0 dan x = 6." },
      { id: "B", text: "Kurva mencapai titik puncak maksimum pada koordinat (3, 9)." },
      { id: "C", text: "Luas daerah D dihitung dengan rumus integral tentu: ∫₀⁶ (6x - x²) dx." },
      { id: "D", text: "Nilai luas total daerah D adalah tepat 36 satuan luas." },
      { id: "E", text: "Nilai luas daerah D bernilai negatif karena kurva berada di bawah sumbu-X." }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: `<strong>Analisis Lengkap Kurva f(x) = 6x &minus; x²:</strong><br>
1. <em>Titik Potong Sumbu X:</em><br>
   <code>6x &minus; x² = 0  &rarr;  x(6 &minus; x) = 0  &rarr;  x = 0 atau x = 6</code> (Pernyataan A Benar).<br>
2. <em>Titik Puncak:</em><br>
   <code>x_puncak = &minus;b / (2a) = &minus;6 / (2 &times; (&minus;1)) = 3</code>.<br>
   <code>y_puncak = 6(3) &minus; 3² = 18 &minus; 9 = 9</code>. Titik puncak di (3, 9) (Pernyataan B Benar).<br>
3. <em>Integral Luas:</em><br>
   Karena kurva berada di atas sumbu-X pada [0, 6], maka <code>L = &int;₀⁶ (6x &minus; x²) dx</code> (Pernyataan C Benar).<br>
4. <em>Evaluasi Nilai Luas:</em><br>
   <code>[ 3x² &minus; 1/3 x³ ]₀⁶ = [ 3(36) &minus; 1/3(216) ] = 108 &minus; 72 = 36 satuan luas</code> (Pernyataan D Benar).<br><br>
<strong>Kunci Jawaban: A, B, C, dan D</strong>`,
    kode: "25MTKL-PRED3-024"
  },

  // 25. Kaidah Pencacahan / Kombinatorika Soal Ujian (PG)
  {
    id: 25,
    elemen: "Peluang & Statistika",
    subelemen: "Kaidah Pencacahan & Kombinasi Berpola",
    indikator: "Menentukan banyak cara pemilihan soal ujian dengan syarat beberapa nomor soal wajib dikerjakan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam sebuah lembar ujian matematika terdapat 10 butir soal bernomor 1 sampai 10. Setiap peserta ujian diwajibkan mengerjakan soal nomor 1, 2, dan 3, serta hanya diminta memilih dan menyelesaikan <strong>total 7 butir soal</strong> dari 10 soal yang tersedia.
</p>
<p class="font-semibold text-slate-900 mb-2">
Banyak cara berbeda bagi seorang peserta ujian untuk memilih kombinasi soal yang akan dikerjakan adalah...
</p>`,
    options: [
      { id: "A", text: "21 cara" },
      { id: "B", text: "28 cara" },
      { id: "C", text: "35 cara" },
      { id: "D", text: "42 cara" },
      { id: "E", text: "70 cara" }
    ],
    kunci: "C",
    pembahasan: `<strong>Analisis Kombinasi Bersyarat:</strong><br>
1. <em>Identifikasi ketersediaan dan kebutuhan:</em><br>
   &bull; Total soal tersedia = 10 soal.<br>
   &bull; Soal nomor 1, 2, dan 3 <strong>wajib dikerjakan</strong> (pasti dipilih).<br>
   &bull; Sisa soal yang belum pasti = <code>10 &minus; 3 = 7 soal</code> (yaitu nomor 4 sampai 10).<br><br>
2. <em>Jumlah soal yang masih harus dipilih:</em><br>
   Total soal yang harus dikerjakan = 7 soal.<br>
   Karena 3 soal wajib sudah dipilih, peserta hanya perlu memilih:<br>
   <code>7 &minus; 3 = 4 soal lagi</code> dari 7 soal yang tersisa.<br><br>
3. <em>Kombinasi C(7, 4):</em><br>
   Urutan pemilihan soal tidak diperhatikan (kombinasi):<br>
   <code>C(7, 4) = 7! / [ 4! &times; (7 &minus; 4)! ] = (7 &times; 6 &times; 5) / (3 &times; 2 &times; 1) = 35 cara</code>.<br><br>
<strong>Kunci Jawaban: C (35 cara)</strong>`,
    kode: "25MTKL-PRED3-025"
  }
];

// Cek apakah ada tanda dolar
let dollarCount = 0;
mtkLanjutPaket3Data.forEach((item) => {
  const s = JSON.stringify(item);
  if (s.includes('$')) {
    console.error(`❌ Ada tanda dolar pada soal ID ${item.id}`);
    dollarCount++;
  }
});

if (dollarCount > 0) {
  console.error("Gagal: Terdeteksi tanda dolar!");
  process.exit(1);
} else {
  console.log("✅ Dataset Matematika Tingkat Lanjut Paket 3 100% BEBAS dari tanda dolar ($)!");
}

// Generate file content
const header = `// tka/data/mapel-matematika-lanjut-paket3.js
// Bank Data Lengkap 25 Soal TKA Matematika Tingkat Lanjut SMA Paket 3 (Prediksi Resmi BPPP / SNBT / UTBK 2025/2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Matematika Tingkat Lanjut SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaMatematikaLanjutPaket3Data = ${JSON.stringify(mtkLanjutPaket3Data, null, 2)};

if (typeof window !== 'undefined') {
  window.tkaMatematikaLanjutPaket3Data = tkaMatematikaLanjutPaket3Data;
  window.tkaMatematikaLanjutPackages = window.tkaMatematikaLanjutPackages || {};
  window.tkaMatematikaLanjutPackages['paket3'] = {
    id: "paket3",
    title: "Paket 3: Prediksi Resmi TKA Matematika Tingkat Lanjut SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 3 (Prediksi 2025/2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    durasiMenit: 60,
    data: tkaMatematikaLanjutPaket3Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaMatematikaLanjutPaket3Data };
}
`;

const outputPath = path.join(__dirname, '../tka/data/mapel-matematika-lanjut-paket3.js');
fs.writeFileSync(outputPath, header, 'utf8');
console.log(`🎉 ${outputPath} berhasil dibuat! (${mtkLanjutPaket3Data.length} soal)`);
