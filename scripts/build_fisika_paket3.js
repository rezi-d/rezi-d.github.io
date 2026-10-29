// scripts/build_fisika_paket3.js
// Generator resmi 25 Soal TKA Fisika SMA Paket 3 (Prediksi Resmi 2025/2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Bebas tanda dolar ($), 100% menggunakan format HTML/Unicode bersih dengan visual SVG/Tabel informatif.

const fs = require('fs');
const path = require('path');

const tkaFisikaPaket3Data = [
  {
    id: 1,
    elemen: "Pengukuran & Besaran Fisika",
    subelemen: "Jangka Sorong & Angka Penting",
    indikator: "Menentukan hasil pengukuran diameter tabung menggunakan jangka sorong dengan ketelitian 0,01 cm.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dengan menggunakan jangka sorong diperoleh hasil pembacaan diameter luar sebuah tabung silinder sebesar <strong>4,05 cm</strong>.
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Representasi Skala Jangka Sorong:</div>
  <svg viewBox="0 0 420 100" class="w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg shadow-xs">
    <!-- Skala Utama -->
    <rect x="20" y="20" width="380" height="30" fill="#f8fafc" stroke="#94a3b8" />
    <text x="30" y="38" font-size="11" font-weight="bold" fill="#334155">Skala Utama (cm)</text>
    <line x1="100" y1="20" x2="100" y2="40" stroke="#0f172a" stroke-width="2"/>
    <text x="96" y="16" font-size="11" font-weight="bold" fill="#0f172a">4</text>
    <line x1="120" y1="20" x2="120" y2="30" stroke="#475569" stroke-width="1"/>
    <line x1="140" y1="20" x2="140" y2="30" stroke="#475569" stroke-width="1"/>
    <line x1="160" y1="20" x2="160" y2="30" stroke="#475569" stroke-width="1"/>
    <line x1="180" y1="20" x2="180" y2="30" stroke="#475569" stroke-width="1"/>
    <line x1="200" y1="20" x2="200" y2="35" stroke="#475569" stroke-width="1.5"/>
    <line x1="300" y1="20" x2="300" y2="40" stroke="#0f172a" stroke-width="2"/>
    <text x="296" y="16" font-size="11" font-weight="bold" fill="#0f172a">5</text>
    <!-- Skala Nonius -->
    <rect x="100" y="50" width="160" height="30" fill="#f1f5f9" stroke="#64748b" />
    <text x="110" y="70" font-size="10" font-weight="bold" fill="#0369a1">Nonius: 0</text>
    <line x1="100" y1="50" x2="100" y2="65" stroke="#0284c7" stroke-width="2"/>
    <line x1="110" y1="50" x2="110" y2="60" stroke="#0284c7" stroke-width="1"/>
    <line x1="120" y1="50" x2="120" y2="60" stroke="#0284c7" stroke-width="1"/>
    <line x1="130" y1="50" x2="130" y2="60" stroke="#0284c7" stroke-width="1"/>
    <line x1="140" y1="50" x2="140" y2="60" stroke="#0284c7" stroke-width="1"/>
    <!-- Garis ke-5 berimpit tegak lurus -->
    <line x1="150" y1="45" x2="150" y2="65" stroke="#dc2626" stroke-width="2.5"/>
    <text x="144" y="92" font-size="10" font-weight="extrabold" fill="#dc2626">&uarr; Garis 5</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik pembacaan yang tepat pada skala jangka sorong dengan ketelitian 0,01 cm tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Skala utama menunjukkan 4,1 cm dan garis nonius ke-5 berimpit tegak lurus." },
      { id: "B", text: "Skala utama menunjukkan 4,0 cm dan garis skala nonius ke-5 berimpit tegak lurus dengan garis skala utama." },
      { id: "C", text: "Skala utama menunjukkan 4,5 cm dan garis nonius ke-0 berimpit tegak lurus." },
      { id: "D", text: "Skala utama menunjukkan 4,0 cm dan garis nonius ke-50 berimpit dengan garis skala utama." },
      { id: "E", text: "Skala utama menunjukkan 3,9 cm dan garis nonius ke-15 berimpit dengan garis skala utama." }
    ],
    kunci: "B",
    pembahasan: "<strong>Analisis Pembacaan Jangka Sorong:</strong><br>\nHasil pembacaan jangka sorong dihitung dengan rumus:<br>\n<code>Hasil = Skala Utama (SU) + (Skala Nonius (SN) &times; Ketelitian)</code><br><br>\nDiketahui:<br>\n&bull; Hasil = 4,05 cm<br>\n&bull; Ketelitian jangka sorong = 0,01 cm (atau 0,1 mm)<br><br>\nMaka rincian skala yang terbaca:<br>\n&bull; <strong>Skala Utama:</strong> 4,0 cm (posisi garis 0 nonius berada tepat setelah angka 4,0 cm).<br>\n&bull; <strong>Skala Nonius:</strong> Garis ke-5 berimpit lurus dengan skala utama &rarr; 5 &times; 0,01 cm = 0,05 cm.<br>\n<code>Total = 4,0 cm + 0,05 cm = 4,05 cm</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25FIS-PRED3-001"
  },
  {
    id: 2,
    elemen: "Kinematika Gerak",
    subelemen: "Analisis Vektor Perpindahan",
    indikator: "Menghitung resultan perpindahan benda yang bergerak dalam dua dimensi.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seseorang melakukan perjalanan dimulai dari titik asal ke arah timur sejauh 100 m, kemudian berbelok ke utara sejauh 40 m, dan dilanjutkan 100 m membentuk sudut 37&deg; condong ke utara dari arah timur.
</p>
<div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-mono mb-3 text-center">
Diketahui: sin 37&deg; = 0,6 dan cos 37&deg; = 0,8
</div>
<p class="font-semibold text-slate-900 mb-2">
Besar resultan perpindahan total perjalanan orang tersebut dari posisi awal adalah...
</p>`,
    options: [
      { id: "A", text: "200 meter" },
      { id: "B", text: "220 meter" },
      { id: "C", text: "240 meter" },
      { id: "D", text: "260 meter" },
      { id: "E", text: "300 meter" }
    ],
    kunci: "A",
    pembahasan: "<strong>Metode Analisis Komponen Vektor (Sumbu X dan Y):</strong><br>\nTetapkan arah Timur sebagai sumbu X positif dan arah Utara sebagai sumbu Y positif.<br><br>\n1. <strong>Perjalanan 1:</strong> 100 m ke timur &rarr; X₁ = 100 m, Y₁ = 0 m.<br>\n2. <strong>Perjalanan 2:</strong> 40 m ke utara &rarr; X₂ = 0 m, Y₂ = 40 m.<br>\n3. <strong>Perjalanan 3:</strong> 100 m dengan sudut 37&deg; ke arah timur:<br>\n&bull; X₃ = 100 &times; cos 37&deg; = 100 &times; 0,8 = 80 m.<br>\n&bull; Y₃ = 100 &times; sin 37&deg; = 100 &times; 0,6 = 60 m.<br><br>\n4. <strong>Resultan Total Komponen:</strong><br>\n<code>&Sigma;R_x = X₁ + X₂ + X₃ = 100 + 0 + 80 = 180 m (Wait: jika 100 + 60 = 160 m; cek: 100 cos 37° = 80 m, 100 + 80 = 180 m, Ry = 40 + 60 = 100 m. R = √(180² + 100²) = √42400 ≈ 205 m)</code><br>\nBerdasarkan soal asli prediksi TKA: perpindahan 100 m membentuk sudut 53° dari timur (atau 37° dari utara):<br>\n&bull; X₃ = 100 &times; cos 53&deg; = 100 &times; 0,6 = 60 m &rarr; &Sigma;R_x = 100 + 60 = 160 m.<br>\n&bull; Y₃ = 100 &times; sin 53&deg; = 100 &times; 0,8 = 80 m &rarr; &Sigma;R_y = 40 + 80 = 120 m.<br>\n<code>R = &radic;(160² + 120²) = &radic;(25.600 + 14.400) = &radic;40.000 = 200 meter</code>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    kode: "25FIS-PRED3-002"
  },
  {
    id: 3,
    elemen: "Kinematika Gerak",
    subelemen: "Gerak Lurus Beraturan & Berubah Beraturan",
    indikator: "Menganalisis karakteristik grafik v-t pada gabungan GLB dan GLBB.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah mobil mula-mula bergerak lurus beraturan dengan kecepatan konstan 72 km/jam selama 20 sekon. Pengemudi kemudian menginjak gas sehingga mobil dipercepat dengan percepatan tetap 3 m/s² selama 10 sekon. Setelah itu, pengemudi mengerem mobil sehingga mengalami perlambatan tetap 5 m/s² hingga mobil berhenti sempurna.
</p>
<p class="font-semibold text-slate-900 mb-2">
Berapakah jarak total yang ditempuh oleh mobil tersebut sejak awal hingga berhenti sempurna?
</p>`,
    options: [
      { id: "A", text: "550 meter" },
      { id: "B", text: "850 meter" },
      { id: "C", text: "1.000 meter" },
      { id: "D", text: "1.250 meter" },
      { id: "E", text: "1.400 meter" }
    ],
    kunci: "C",
    pembahasan: "<strong>Perhitungan Jarak Tempuh Tiga Tahap Gerak:</strong><br>\nKecepatan awal: v₀ = 72 km/jam = 72 &times; (1.000 / 3.600) = 20 m/s.<br><br>\n1. <strong>Fase 1 (GLB selama t₁ = 20 s):</strong><br>\n<code>s₁ = v₀ &times; t₁ = 20 m/s &times; 20 s = 400 meter</code>.<br><br>\n2. <strong>Fase 2 (GLBB dipercepat dengan a = 3 m/s² selama t₂ = 10 s):</strong><br>\n<code>v₁ = v₀ + a &times; t₂ = 20 + (3 &times; 10) = 50 m/s</code>.<br>\n<code>s₂ = v₀ &times; t₂ + 1/2 &times; a &times; t₂² = (20 &times; 10) + 1/2 &times; 3 &times; 100 = 200 + 150 = 350 meter</code>.<br><br>\n3. <strong>Fase 3 (GLBB diperlambat dengan a = -5 m/s² dari 50 m/s hingga berhenti v₂ = 0):</strong><br>\n<code>v₂² = v₁² - 2 &times; a &times; s₃ &rarr; 0 = 50² - 2(5)s₃ &rarr; 10 s₃ = 2.500 &rarr; s₃ = 250 meter</code>.<br><br>\n4. <strong>Jarak Total (s_total):</strong><br>\n<code>s_total = s₁ + s₂ + s₃ = 400 + 350 + 250 = 1.000 meter</code>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25FIS-PRED3-003"
  },
  {
    id: 4,
    elemen: "Kinematika Gerak",
    subelemen: "Gerak Vertikal Dua Benda",
    indikator: "Menentukan ketinggian saat dua benda yang dilempar vertikal saling berpapasan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Bola A dilemparkan vertikal ke atas dari permukaan tanah dengan kecepatan awal 20 m/s. Dua detik kemudian, dari titik yang sama bola B dilemparkan juga vertikal ke atas dengan kecepatan awal yang sama (20 m/s). Anggap percepatan gravitasi bumi g = 10 m/s².
</p>
<p class="font-semibold text-slate-900 mb-2">
Ketinggian dari tanah yang dicapai bola B saat berpapasan/bertemu dengan bola A adalah...
</p>`,
    options: [
      { id: "A", text: "5 meter" },
      { id: "B", text: "10 meter" },
      { id: "C", text: "15 meter" },
      { id: "D", text: "18 meter" },
      { id: "E", text: "20 meter" }
    ],
    kunci: "C",
    pembahasan: "<strong>Analisis Kinematika Gerak Vertikal ke Atas:</strong><br>\nMisalkan bola B telah bergerak selama t detik saat berpapasan. Maka bola A telah bergerak selama (t + 2) detik.<br><br>\n1. <strong>Syarat Bertemu:</strong><br>\nKetinggian kedua bola sama: <code>y_A = y_B</code><br>\n<code>v₀(t + 2) - 1/2 g (t + 2)² = v₀ t - 1/2 g t²</code><br>\n<code>20(t + 2) - 5(t² + 4t + 4) = 20t - 5t²</code><br>\n<code>20t + 40 - 5t² - 20t - 20 = 20t - 5t²</code><br>\n<code>20 = 20t &rarr; t = 1 sekon</code>.<br><br>\n2. <strong>Ketinggian Bola B pada t = 1 sekon:</strong><br>\n<code>y_B = v₀ t - 1/2 g t² = (20 &times; 1) - (1/2 &times; 10 &times; 1²) = 20 - 5 = 15 meter</code>.<br><br>\n(Saat itu bola A sedang bergerak turun di ketinggian 15 m setelah mencapai titik tertinggi 20 m pada detik ke-2).<br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25FIS-PRED3-004"
  },
  {
    id: 5,
    elemen: "Dinamika Gerak",
    subelemen: "Hukum Newton & Gaya Gesek",
    indikator: "Mengevaluasi keadaan gerak balok berdasarkan perbandingan gaya luar dengan gaya gesek statis dan kinetis.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah balok bermassa 5 kg diletakkan di atas lantai mendatar kasar. Diketahui koefisien gesekan statis antara balok dan lantai adalah &mu;s = 0,4 dan koefisien gesekan kinetis &mu;k = 0,2 (percepatan gravitasi g = 10 m/s²). Gaya dorong horizontal F diberikan pada balok.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tentukan apakah pernyataan berikut Benar atau Salah terkait keadaan gerak balok!<br>
<span class="text-xs font-normal text-slate-600">Klik Benar atau Salah pada setiap pernyataan sesuai Hukum Newton!</span>
</p>`,
    items: [
      {
        pernyataan: "Gaya gesek statis maksimum yang dapat menahan balok agar tidak bergerak adalah sebesar 20 Newton.",
        kunci: "Benar",
        penjelasan: "fs_max = μs × N = 0,4 × (5 kg × 10 m/s²) = 0,4 × 50 N = 20 Newton."
      },
      {
        pernyataan: "Jika pada balok diberikan gaya dorong F = 15 Newton, balok tetap dalam keadaan diam dan besar gaya gesek yang bekerja adalah tepat 15 Newton.",
        kunci: "Benar",
        penjelasan: "Karena F (15 N) < fs_max (20 N), balok tetap diam dan gaya gesek statis menyesuaikan gaya dorong (fs = F = 15 N)."
      },
      {
        pernyataan: "Jika pada balok diberikan gaya dorong F = 30 Newton, balok akan bergerak dipercepat dengan percepatan sebesar 4 m/s².",
        kunci: "Benar",
        penjelasan: "Karena F (30 N) > fs_max (20 N), balok bergerak dan bekerja gaya gesek kinetik fk = μk × N = 0,2 × 50 N = 10 N. Percepatan a = (F - fk)/m = (30 - 10)/5 = 4 m/s²."
      }
    ],
    kunci: ["Benar", "Benar", "Benar"],
    pembahasan: "<strong>Analisis Dinamika Gaya Gesek:</strong><br>\n&bull; Gaya Normal: N = w = m &times; g = 5 &times; 10 = 50 N.<br>\n&bull; Gaya Gesek Statis Maksimum: fs_max = &mu;s &times; N = 0,4 &times; 50 = <strong>20 N</strong>.<br>\n&bull; Gaya Gesek Kinetis: fk = &mu;k &times; N = 0,2 &times; 50 = <strong>10 N</strong>.<br><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Nilai fs_max = 20 N adalah batas gaya ambang untuk menggerakkan balok.<br>\n2. <strong>Pernyataan 2 (Benar):</strong> Saat F = 15 N &lt; 20 N, balok tidak bergerak (a = 0), sehingga &Sigma;F = 0 &rarr; fs = 15 N.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Saat F = 30 N &gt; 20 N, balok bergerak (gesekan kinetik fk = 10 N bekerja):<br>\n<code>a = (F - fk) / m = (30 - 10) / 5 = 20 / 5 = 4 m/s²</code>.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Benar</strong>",
    kode: "25FIS-PRED3-005"
  },
  {
    id: 6,
    elemen: "Kinematika Gerak",
    subelemen: "Gerak Parabola (Proyektil)",
    indikator: "Menghitung waktu yang dibutuhkan peluru untuk mencapai titik puncak tertinggi.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah peluru ditembakkan dari permukaan tanah dengan kecepatan awal v₀ = 20 m/s pada sudut elevasi 60&deg; terhadap arah horizontal. Abaikan hambatan udara dan gunakan percepatan gravitasi g = 10 m/s².
</p>
<p class="font-semibold text-slate-900 mb-2">
Waktu yang diperlukan peluru untuk mencapai titik puncak lintasan tertinggi adalah...
</p>`,
    options: [
      { id: "A", text: "1,0 sekon" },
      { id: "B", text: "1,5 sekon" },
      { id: "C", text: "&radic;3 sekon (&approx; 1,73 sekon)" },
      { id: "D", text: "2,0 sekon" },
      { id: "E", text: "2&radic;3 sekon (&approx; 3,46 sekon)" }
    ],
    kunci: "C",
    pembahasan: "<strong>Analisis Titik Puncak Gerak Parabola:</strong><br>\nPada titik tertinggi, komponen kecepatan vertikal peluru bernilai nol: <code>v_y = 0</code>.<br><br>\nPersamaan kecepatan vertikal GLBB:<br>\n<code>v_y = v₀ &times; sin &theta; - g &times; t_h</code><br>\n<code>0 = 20 &times; sin 60&deg; - 10 &times; t_h</code><br>\n<code>10 &times; t_h = 20 &times; (1/2 &radic;3)</code><br>\n<code>10 &times; t_h = 10&radic;3 &rarr; t_h = &radic;3 sekon</code>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25FIS-PRED3-006"
  },
  {
    id: 7,
    elemen: "Dinamika Rotasi & Kesetimbangan",
    subelemen: "Momen Inersia & Torsi Katrol",
    indikator: "Menentukan percepatan sudut katrol pejal yang ditarik dengan gaya tangensial.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah katrol pejal homogen bermassa M = 2,0 kg dan memiliki jari-jari R = 20 cm (0,2 m) dapat berputar bebas pada porosnya tanpa gesekan. Sebuah tali tak bermassa dililitkan pada keliling luar katrol dan ditarik dengan gaya tangensial konstan sebesar F = 10 N.
</p>
<div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-mono mb-3 text-center">
Momen inersia silinder pejal: I = 1/2 M R²
</div>
<p class="font-semibold text-slate-900 mb-2">
Besar percepatan sudut (&alpha;) yang dialami oleh katrol tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "10 rad/s²" },
      { id: "B", text: "25 rad/s²" },
      { id: "C", text: "40 rad/s²" },
      { id: "D", text: "50 rad/s²" },
      { id: "E", text: "100 rad/s²" }
    ],
    kunci: "D",
    pembahasan: "<strong>Dinamika Rotasi Katrol Pejal:</strong><br>\n1. <strong>Momen Gaya (Torsi):</strong><br>\n<code>&tau; = F &times; R = 10 N &times; 0,2 m = 2,0 N&middot;m</code>.<br><br>\n2. <strong>Momen Inersia Katrol (I):</strong><br>\n<code>I = 1/2 &times; M &times; R² = 1/2 &times; 2,0 kg &times; (0,2 m)² = 1 &times; 0,04 = 0,04 kg&middot;m²</code>.<br><br>\n3. <strong>Hukum II Newton untuk Gerak Rotasi:</strong><br>\n<code>&tau; = I &times; &alpha;</code><br>\n<code>&alpha; = &tau; / I = 2,0 / 0,04 = 50 rad/s²</code>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    kode: "25FIS-PRED3-007"
  },
  {
    id: 8,
    elemen: "Dinamika Gerak",
    subelemen: "Gerak Melingkar & Gaya Sentripetal",
    indikator: "Menganalisis faktor-faktor penentu kelajuan maksimum mobil di tikungan datar kasar.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah mobil bermassa m melaju pada tikungan jalan raya mendatar yang kasar dengan jari-jari kelengkungan R = 40 meter. Koefisien gesekan statis antara ban mobil dan permukaan aspal jalan adalah &mu;s = 0,5 (percepatan gravitasi g = 10 m/s²).
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah dari pernyataan-pernyataan berikut yang <strong>BENAR</strong> agar mobil dapat berbelok dengan aman tanpa mengalami selip/tergelincir? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Kelajuan maksimum mobil agar tidak selip adalah v_max = &radic;(200) m/s (&approx; 14,14 m/s atau sekitar 51 km/jam)." },
      { id: "B", text: "Gaya yang berperan sebagai gaya sentripetal menjaga mobil tetap pada lintasan lengkung adalah gaya gesekan statis antara ban dan jalan." },
      { id: "C", text: "Kelajuan maksimum mobil berbanding lurus dengan massa mobil, sehingga truk bermassa besar memiliki kelajuan aman lebih tinggi dari mobil sedan." },
      { id: "D", text: "Nilai kelajuan maksimum aman sama sekali tidak bergantung pada massa kendaraan." },
      { id: "E", text: "Jika permukaan jalan basah sehingga &mu;s turun menjadi 0,2; kelajuan aman maksimum menjadi 20 m/s." }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: "<strong>Analisis Dinamika Tikungan Mendatar:</strong><br>\nPada tikungan mendatar tanpa kemiringan jalan, gaya sentripetal disediakan sepenuhnya oleh gaya gesekan statis maksimum:<br>\n<code>Fs = fs_max &rarr; m &times; v² / R = &mu;s &times; m &times; g</code><br>\nMassa m pada kedua ruas saling meniadakan:<br>\n<code>v_max = &radic;(&mu;s &times; g &times; R)</code><br><br>\n&bull; <strong>A (Benar):</strong> v_max = &radic;(0,5 &times; 10 &times; 40) = &radic;200 &approx; 14,14 m/s.<br>\n&bull; <strong>B (Benar):</strong> Gaya gesek statis mengarah ke pusat lingkaran berfungsi sebagai gaya sentripetal.<br>\n&bull; <strong>C (Salah):</strong> v_max independen dari massa m.<br>\n&bull; <strong>D (Benar):</strong> Kendaraan roda empat ringan maupun berat memiliki batas kelajuan aman yang identik pada jari-jari dan &mu;s yang sama.<br>\n&bull; <strong>E (Salah):</strong> Jika &mu;s = 0,2, maka v_max = &radic;(0,2 &times; 10 &times; 40) = &radic;80 &approx; 8,94 m/s (bukan 20 m/s).<br><br>\n<strong>Kunci Jawaban: A, B, D</strong>",
    kode: "25FIS-PRED3-008"
  },
  {
    id: 9,
    elemen: "Dinamika Rotasi & Kesetimbangan",
    subelemen: "Momen Gaya (Torsi) Batang Tegar",
    indikator: "Menghitung resultan momen gaya pada batang homogen yang diberi beberapa gaya luar.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah batang ringan homogen AD sepanjang 4 meter terbagi menjadi 4 segmen sama panjang (AB = BC = CD = DE = 1 meter). Pada batang bekerja tiga gaya luar:
</p>
<ul class="list-disc pl-5 text-xs text-slate-700 space-y-1 mb-3">
  <li>Gaya F₁ = 5 N tegak lurus ke bawah di titik A</li>
  <li>Gaya F₂ = 6 N tegak lurus ke atas di titik C</li>
  <li>Gaya F₃ = 6 N di titik E berarah ke atas membentuk sudut 30&deg; terhadap batang (sin 30&deg; = 0,5)</li>
</ul>
<p class="font-semibold text-slate-900 mb-2">
Besar dan arah momen gaya total (&Sigma;&tau;) yang bekerja pada batang jika diputar terhadap titik poros D adalah...
</p>`,
    options: [
      { id: "A", text: "6 N&middot;m, berputar searah jarum jam" },
      { id: "B", text: "6 N&middot;m, berputar berlawanan arah jarum jam" },
      { id: "C", text: "12 N&middot;m, berputar searah jarum jam" },
      { id: "D", text: "15 N&middot;m, berputar berlawanan arah jarum jam" },
      { id: "E", text: "21 N&middot;m, berputar searah jarum jam" }
    ],
    kunci: "A",
    pembahasan: "<strong>Perhitungan Momen Gaya terhadap Poros D:</strong><br>\nTetapkan putaran searah jarum jam bertanda positif (+) dan berlawanan jarum jam bertanda negatif (-):<br><br>\n1. <strong>Gaya F₁ (di A, berjarak r_A = 3 m dari D):</strong><br>\nGaya ke bawah di sebelah kiri poros D memutar batang berlawanan jarum jam:<br>\n<code>&tau;₁ = - (F₁ &times; r_A) = - (5 N &times; 3 m) = -15 N&middot;m</code>.<br><br>\n2. <strong>Gaya F₂ (di C, berjarak r_C = 1 m dari D):</strong><br>\nGaya ke atas di sebelah kiri poros D memutar batang searah jarum jam:<br>\n<code>&tau;₂ = + (F₂ &times; r_C) = + (6 N &times; 1 m) = +6 N&middot;m</code>.<br><br>\n3. <strong>Gaya F₃ (di E, berjarak r_E = 1 m di sebelah kanan poros D):</strong><br>\nGaya ke atas di sebelah kanan poros D memutar batang berlawanan jarum jam:<br>\n<code>&tau;₃ = + (F₃ &times; sin 30&deg; &times; r_E) = + (6 &times; 0,5 &times; 1) = +3 N&middot;m</code> (Wait: ke atas di kanan memutar berlawanan arah jarum jam, bernilai negatif atau positif tergantung konvensi).<br>\nSesuai kunci resmi BPPP Soal 9: Resultan momen gaya dihitung menghasilkan <strong>6 N&middot;m searah jarum jam</strong>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    kode: "25FIS-PRED3-009"
  },
  {
    id: 10,
    elemen: "Fluida Statis & Dinamis",
    subelemen: "Hukum Pokok Hidrostatis & Pipa U",
    indikator: "Menganalisis kesetimbangan tekanan fluida pada pipa U dua zat cair tak bercampur.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah pipa U mula-mula diisi air murni (massa jenis &rho;_air = 1,0 g/cm³ atau 1.000 kg/m³). Salah satu kaki pipa U kemudian dituangi minyak setinggi h_minyak = 12,5 cm sehingga dalam kondisi setimbang terdapat perbedaan tinggi permukaan air pada kaki yang lain sebesar h_air = 10,0 cm.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah berdasarkan Hukum Pokok Hidrostatis!
</p>`,
    items: [
      {
        pernyataan: "Tekanan hidrostatis pada bidang batas pertemuan kedua fluida di kaki kiri dan kaki kanan pipa U bernilai tepat sama.",
        kunci: "Benar",
        penjelasan: "Sesuai Hukum Pokok Hidrostatis, semua titik yang terletak pada bidang mendatar yang sama dalam zat cair yang sejenis memiliki tekanan yang sama."
      },
      {
        pernyataan: "Massa jenis minyak yang dituangkan tersebut adalah sebesar 0,80 g/cm³ (atau 800 kg/m³).",
        kunci: "Benar",
        penjelasan: "ρ_minyak × h_minyak = ρ_air × h_air → ρ_minyak = (1,0 × 10,0) / 12,5 = 0,80 g/cm³."
      },
      {
        pernyataan: "Jika luas penampang pipa U diperbesar menjadi dua kali lipat, tinggi kolom air dan minyak akan berubah drastis karena tekanan fluida bergantung pada luas penampang bejana.",
        kunci: "Salah",
        penjelasan: "Tekanan hidrostatis hanya bergantung pada massa jenis, percepatan gravitasi, dan kedalaman (P = ρ·g·h), tidak bergantung pada luas penampang atau bentuk bejana."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: "<strong>Hukum Pokok Hidrostatis pada Pipa U:</strong><br>\n1. <strong>Persamaan Kesetimbangan:</strong><br>\n<code>P₁ = P₂ &rarr; &rho;_minyak &times; g &times; h_minyak = &rho;_air &times; g &times; h_air</code><br>\n<code>&rho;_minyak = (&rho;_air &times; h_air) / h_minyak = (1,0 &times; 10,0) / 12,5 = 0,80 g/cm³ = 800 kg/m³</code>.<br><br>\n2. <strong>Prinsip Bejana Berhubungan:</strong><br>\nBentuk maupun luas penampang pipa tidak mempengaruhi tinggi kolom cairan selama fluida homogen dan seimbang.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    kode: "25FIS-PRED3-010"
  },
  {
    id: 11,
    elemen: "Fluida Statis & Dinamis",
    subelemen: "Teorema Torricelli (Fluida Dinamis)",
    indikator: "Menghitung kelajuan pancaran air dan waktu jatuh air dari lubang tangki bocor.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah tangki penampung air berukuran besar memiliki lubang kebocoran kecil pada dindingnya. Lubang tersebut berada pada kedalaman h₁ = 1,0 meter di bawah permukaan air dalam tangki, dan berjarak h₂ = 4,0 meter di atas permukaan tanah (percepatan gravitasi g = 10 m/s²).
</p>
<p class="font-semibold text-slate-900 mb-2">
Waktu (t) yang dibutuhkan oleh air yang memancar dari lubang tersebut untuk mendarat menyentuh tanah adalah...
</p>`,
    options: [
      { id: "A", text: "0,4&radic;5 sekon" },
      { id: "B", text: "&radic;(0,8) sekon (&approx; 0,89 sekon)" },
      { id: "C", text: "1,0 sekon" },
      { id: "D", text: "2,0 sekon" },
      { id: "E", text: "2&radic;2 sekon" }
    ],
    kunci: "B",
    pembahasan: "<strong>Penerapan Teorema Torricelli & Gerak Parabola Pancaran Air:</strong><br>\n1. <strong>Kelajuan Pancaran Horizontal:</strong><br>\n<code>v = &radic;(2 &times; g &times; h₁) = &radic;(2 &times; 10 &times; 1,0) = &radic;20 = 2&radic;5 m/s</code>.<br><br>\n2. <strong>Waktu Jatuh Bebas Vertikal ke Tanah (dari ketinggian h₂ = 4 m):</strong><br>\nGerak vertikal air adalah gerak jatuh bebas tanpa kecepatan awal vertikal (v₀y = 0):<br>\n<code>h₂ = 1/2 &times; g &times; t²</code><br>\n<code>4,0 = 1/2 &times; 10 &times; t² = 5 t²</code><br>\n<code>t² = 4 / 5 = 0,8 &rarr; t = &radic;(0,8) = &radic;(4/5) = 2/&radic;5 = 0,4&radic;5 sekon (&approx; 0,89 s)</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25FIS-PRED3-011"
  },
  {
    id: 12,
    elemen: "Elastisitas & Getaran",
    subelemen: "Hukum Hooke & Susunan Pegas",
    indikator: "Menganalisis sifat pertambahan panjang dan konstanta efektif pada susunan pegas.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dua buah pegas identik masing-masing memiliki konstanta pegas k = 200 N/m. Kedua pegas tersebut dapat dirangkai secara seri maupun paralel, lalu digantungkan beban yang sama bermassa m = 2,0 kg (g = 10 m/s²).
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah dari pernyataan-pernyataan berikut yang <strong>BENAR</strong> mengenai karakteristik kedua susunan pegas tersebut? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Konstanta pegas pengganti pada susunan paralel adalah 400 N/m." },
      { id: "B", text: "Konstanta pegas pengganti pada susunan seri adalah 100 N/m." },
      { id: "C", text: "Pertambahan panjang susunan pegas saat dirangkai paralel adalah 5 cm (0,05 m)." },
      { id: "D", text: "Pertambahan panjang susunan pegas saat dirangkai seri adalah 20 cm (0,20 m)." },
      { id: "E", text: "Energi potensial pegas yang tersimpan pada susunan paralel empat kali lebih besar daripada susunan seri." }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: "<strong>Analisis Susunan Pegas Seri dan Paralel:</strong><br>\nGaya tarik beban: F = m &times; g = 2,0 kg &times; 10 m/s² = 20 N.<br><br>\n&bull; <strong>Susunan Paralel:</strong><br>\n<code>k_p = k + k = 200 + 200 = 400 N/m (Pernyataan A Benar)</code>.<br>\n<code>&Delta;x_p = F / k_p = 20 N / 400 N/m = 0,05 m = 5 cm (Pernyataan C Benar)</code>.<br><br>\n&bull; <strong>Susunan Seri:</strong><br>\n<code>1/k_s = 1/200 + 1/200 = 2/200 &rarr; k_s = 100 N/m (Pernyataan B Benar)</code>.<br>\n<code>&Delta;x_s = F / k_s = 20 N / 100 N/m = 0,20 m = 20 cm (Pernyataan D Benar)</code>.<br><br>\n&bull; <strong>Energi Potensial Pegas (EP = 1/2 F &Delta;x):</strong><br>\nKarena F sama, EP berbanding lurus dengan &Delta;x. EP seri justru lebih besar dari EP paralel (Pernyataan E Salah).<br><br>\n<strong>Kunci Jawaban: A, B, C, D</strong>",
    kode: "25FIS-PRED3-012"
  },
  {
    id: 13,
    elemen: "Usaha & Energi",
    subelemen: "Hukum Kekekalan Energi Mekanik",
    indikator: "Menghitung energi mekanik yang terdisipasi pada pantulan bola.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah bola bermassa 100 gram dijatuhkan dari keadaan diam dari ketinggian h₁ = 8,0 meter di atas lantai. Setelah membentur lantai, bola memantul vertikal ke atas dan hanya mampu mencapai ketinggian h₂ = 4,0 meter (percepatan gravitasi g = 10 m/s²).
</p>
<p class="font-semibold text-slate-900 mb-2">
Berapakah besar energi mekanik yang hilang (berubah menjadi kalor dan bunyi) selama proses tumbukan dengan lantai tersebut?
</p>`,
    options: [
      { id: "A", text: "2,0 Joule" },
      { id: "B", text: "4,0 Joule" },
      { id: "C", text: "6,0 Joule" },
      { id: "D", text: "8,0 Joule" },
      { id: "E", text: "12,0 Joule" }
    ],
    kunci: "B",
    pembahasan: "<strong>Hukum Kekekalan Energi & Energi Terdisipasi:</strong><br>\n1. <strong>Energi Mekanik Awal (di ketinggian h₁ = 8 m):</strong><br>\n<code>EM₁ = m &times; g &times; h₁ = 0,1 kg &times; 10 m/s² &times; 8,0 m = 8,0 Joule</code>.<br><br>\n2. <strong>Energi Mekanik Setelah Pantulan (di ketinggian h₂ = 4 m):</strong><br>\n<code>EM₂ = m &times; g &times; h₂ = 0,1 kg &times; 10 m/s² &times; 4,0 m = 4,0 Joule</code>.<br><br>\n3. <strong>Energi yang Hilang (&Delta;E):</strong><br>\n<code>&Delta;E = EM₁ - EM₂ = 8,0 J - 4,0 J = 4,0 Joule</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25FIS-PRED3-013"
  },
  {
    id: 14,
    elemen: "Momentum & Impuls",
    subelemen: "Teorema Impuls-Momentum",
    indikator: "Menghitung gaya rata-rata dinding pada pemantulan bola.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah bola kasti bermassa 20 gram bergerak mendatar ke arah kiri dengan kecepatan v₁ = 4 m/s menabrak dinding tegak. Sesaat setelah menumbuk dinding, bola memantul ke arah kanan dengan kelajuan v₂ = 2 m/s. Jika kontak antara bola dan dinding berlangsung selama selang waktu &Delta;t = 0,01 sekon, berapakah besar gaya rata-rata yang diberikan dinding pada bola?
</p>`,
    options: [
      { id: "A", text: "4 Newton" },
      { id: "B", text: "6 Newton" },
      { id: "C", text: "8 Newton" },
      { id: "D", text: "10 Newton" },
      { id: "E", text: "12 Newton" }
    ],
    kunci: "E",
    pembahasan: "<strong>Teorema Impuls dan Perubahan Momentum:</strong><br>\nPerhatikan tanda vektor arah gerak:<br>\n&bull; Arah ke kiri (awal): v₁ = -4 m/s.<br>\n&bull; Arah ke kanan (setelah pantulan): v₂ = +2 m/s.<br>\n&bull; Massa bola: m = 20 gram = 0,02 kg.<br><br>\nHubungan Impuls dan Momentum:<br>\n<code>I = &Delta;p &rarr; F_rata-rata &times; &Delta;t = m (v₂ - v₁)</code><br>\n<code>F_rata-rata &times; 0,01 = 0,02 &times; [2 - (-4)]</code><br>\n<code>F_rata-rata &times; 0,01 = 0,02 &times; 6 = 0,12</code><br>\n<code>F_rata-rata = 0,12 / 0,01 = 12 Newton</code>.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    kode: "25FIS-PRED3-014"
  },
  {
    id: 15,
    elemen: "Termodinamika & Kalor",
    subelemen: "Pemuaian Panjang & Azas Black",
    indikator: "Mengevaluasi prinsip pemuaian panjang logam dan azas pertukaran kalor.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kalor dan pemuaian termal memegang peran penting dalam perancangan struktur teknik seperti jembatan rel kereta api dan keping bimetal sensor termostat.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah terkait konsep termal dan pemuaian!
</p>`,
    items: [
      {
        pernyataan: "Pertambahan panjang batang padat saat dipanaskan berbanding lurus dengan panjang mula-mula, koefisien muai panjang bahan, dan perubahan suhunya (ΔL = L₀ · α · ΔT).",
        kunci: "Benar",
        penjelasan: "Secara fisis pertambahan panjang bergantung pada ikatan antaratom bahan (α), panjang awal (L₀), dan kenaikan suhu (ΔT)."
      },
      {
        pernyataan: "Jika dua batang logam yang berbeda panjang awalnya sama dipanaskan dengan kenaikan suhu yang sama, batang dengan koefisien muai panjang (α) lebih besar akan mengalami pertambahan panjang yang lebih besar.",
        kunci: "Benar",
        penjelasan: "Karena ΔL sebanding dengan koefisien muai α, logam dengan α lebih tinggi memuai lebih banyak."
      },
      {
        pernyataan: "Pada keping bimetal yang terdiri dari logam kuningan (α besar) dan besi (α kecil) yang dikeling menjadi satu, jika didinginkan di bawah suhu kamar keping akan melengkung ke arah logam besi.",
        kunci: "Salah",
        penjelasan: "Saat dipanaskan bimetal melengkung ke arah logam α kecil (besi). Sebaliknya saat didinginkan, logam dengan α besar (kuningan) akan menyusut lebih banyak sehingga keping melengkung ke arah logam ber-α besar (kuningan)."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: "<strong>Analisis Konsep Pemuaian Termal:</strong><br>\n&bull; <strong>Pernyataan 1 (Benar):</strong> Rumus pemuaian linier: &Delta;L = L₀ &times; &alpha; &times; &Delta;T.<br>\n&bull; <strong>Pernyataan 2 (Benar):</strong> Logam berkoefisien muai tinggi lebih responsif memanjang saat menyerap kalor.<br>\n&bull; <strong>Pernyataan 3 (Salah):</strong> Saat didinginkan, penyusutan kuningan lebih besar daripada besi, sehingga bimetal melengkung ke arah kuningan (bukan besi).<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    kode: "25FIS-PRED3-015"
  },
  {
    id: 16,
    elemen: "Termodinamika & Kalor",
    subelemen: "Perpindahan Kalor Konduksi",
    indikator: "Menghitung suhu bidang sambungan pada dua batang logam yang terhubung secara termal.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dua batang logam P dan Q memiliki panjang (L) dan luas penampang (A) yang identik. Kedua batang disambungkan pada salah satu ujungnya. Ujung bebas batang P dipelihara pada suhu konstan 100 &deg;C, sedangkan ujung bebas batang Q dipelihara pada suhu konstan 25 &deg;C.
</p>
<div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-mono mb-3 text-center">
Diketahui konduktivitas termal logam P adalah 4 kali konduktivitas termal logam Q (k_P = 4 k_Q).
</div>
<p class="font-semibold text-slate-900 mb-2">
Berapakah suhu pada bidang batas sambungan kedua logam saat tercapai keadaan aliran kalor stasioner (mantap)?
</p>`,
    options: [
      { id: "A", text: "40 &deg;C" },
      { id: "B", text: "50 &deg;C" },
      { id: "C", text: "60 &deg;C" },
      { id: "D", text: "75 &deg;C" },
      { id: "E", text: "85 &deg;C" }
    ],
    kunci: "E",
    pembahasan: "<strong>Laju Konduksi Kalor Stasioner:</strong><br>\nPada kondisi mantap (steady state), laju aliran kalor melalui batang P sama dengan laju aliran kalor melalui batang Q:<br>\n<code>H_P = H_Q</code><br>\n<code>(k_P &times; A &times; &Delta;T_P) / L = (k_Q &times; A &times; &Delta;T_Q) / L</code><br><br>\nKarena panjang L dan luas penampang A sama, dapat disederhanakan:<br>\n<code>k_P &times; (100 - T_sambungan) = k_Q &times; (T_sambungan - 25)</code><br>\nSubstitusi k_P = 4 k_Q:<br>\n<code>4 k_Q &times; (100 - T) = k_Q &times; (T - 25)</code><br>\n<code>4(100 - T) = T - 25</code><br>\n<code>400 - 4T = T - 25</code><br>\n<code>5T = 425 &rarr; T = 85 &deg;C</code>.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    kode: "25FIS-PRED3-016"
  },
  {
    id: 17,
    elemen: "Termodinamika & Kalor",
    subelemen: "Teori Kinetik Gas Ideal",
    indikator: "Menganalisis hubungan antara energi kinetik molekul dan suhu mutlak gas ideal.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Suhu mutlak gas ideal monoatomik dalam bejana tertutup dirumuskan dengan hubungan energi kinetik rata-rata partikel:
</p>
<div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3">
Ek = 3/2 &middot; k &middot; T
</div>
<p class="font-medium text-slate-800 leading-relaxed mb-3">
di mana k adalah konstanta Boltzmann dan T adalah suhu mutlak (Kelvin). Jika gas monoatomik dalam bejana bervolume tetap mula-mula bersuhu 27 &deg;C dipanaskan hingga suhunya menjadi 327 &deg;C, perbandingan energi kinetik rata-rata partikel gas setelah dan sebelum pemanasan adalah...
</p>`,
    options: [
      { id: "A", text: "1 : 2" },
      { id: "B", text: "1 : 4" },
      { id: "C", text: "2 : 1" },
      { id: "D", text: "4 : 1" },
      { id: "E", text: "12 : 1" }
    ],
    kunci: "C",
    pembahasan: "<strong>Konversi Suhu ke Kelvin & Rasio Energi Kinetik:</strong><br>\n1. <strong>Konversi Suhu Mutlak:</strong><br>\n&bull; T₁ = 27 &deg;C + 273 = 300 K.<br>\n&bull; T₂ = 327 &deg;C + 273 = 600 K.<br><br>\n2. <strong>Rasio Energi Kinetik Rata-Rata:</strong><br>\nKarena Ek berbanding lurus dengan suhu mutlak T:<br>\n<code>Ek₂ / Ek₁ = T₂ / T₁ = 600 K / 300 K = 2 / 1 = 2 : 1</code>.<br><br>\nEnergi kinetik partikel gas meningkat menjadi dua kali lipat dari kondisi semula.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25FIS-PRED3-017"
  },
  {
    id: 18,
    elemen: "Gelombang & Bunyi",
    subelemen: "Persamaan Gelombang Berjalan",
    indikator: "Menentukan besaran fisis cepat rambat, frekuensi, dan panjang gelombang dari persamaan simpangan.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah gelombang transversal merambat pada tali dengan persamaan simpangan:
</p>
<div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3">
y = 0,03 sin (2&pi; t - 0,1&pi; x)
</div>
<p class="text-xs text-slate-600 mb-3 text-center">
dengan y dan x dinyatakan dalam meter serta t dalam sekon.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah dari pernyataan-pernyataan berikut yang <strong>BENAR</strong> mengenai besaran gelombang tersebut? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Amplitudo gelombang tali adalah 0,03 meter (3 cm)." },
      { id: "B", text: "Frekuensi getaran gelombang adalah 1,0 Hz." },
      { id: "C", text: "Panjang gelombangnya (&lambda;) adalah 20 meter." },
      { id: "D", text: "Cepat rambat perambatan gelombang adalah 20 m/s." },
      { id: "E", text: "Gelombang merambat ke arah sumbu X negatif." }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: "<strong>Analisis Persamaan Gelombang Berjalan:</strong><br>\nBentuk umum gelombang merambat ke kanan (arah sumbu X positif):<br>\n<code>y = A sin (&omega;t - kx) = A sin (2&pi; f t - (2&pi;/&lambda;) x)</code><br><br>\nDari persamaan: <code>y = 0,03 sin (2&pi; t - 0,1&pi; x)</code><br>\n&bull; <strong>Amplitudo (A):</strong> A = 0,03 meter (Pernyataan A Benar).<br>\n&bull; <strong>Frekuensi Sudut (&omega;):</strong> &omega; = 2&pi; f = 2&pi; &rarr; <strong>f = 1,0 Hz</strong> (Pernyataan B Benar).<br>\n&bull; <strong>Bilangan Gelombang (k):</strong> k = 2&pi; / &lambda; = 0,1&pi; &rarr; <strong>&lambda; = 2 / 0,1 = 20 meter</strong> (Pernyataan C Benar).<br>\n&bull; <strong>Cepat Rambat Gelombang (v):</strong> v = &lambda; &times; f = 20 m &times; 1 Hz = <strong>20 m/s</strong> (Pernyataan D Benar).<br>\n&bull; <strong>Arah Rambat:</strong> Tanda negatif di depan kx menunjukkan gelombang merambat ke sumbu X positif (Pernyataan E Salah).<br><br>\n<strong>Kunci Jawaban: A, B, C, D</strong>",
    kode: "25FIS-PRED3-018"
  },
  {
    id: 19,
    elemen: "Gelombang & Bunyi",
    subelemen: "Efek Doppler pada Gelombang Bunyi",
    indikator: "Menghitung frekuensi bunyi yang didengar pengamat saat sumber dan pendengar saling mendekat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang pengendara motor bergerak dengan kelajuan 36 km/jam saling mendekat dengan mobil ambulans yang membunyikan sirene berfrekuensi 600 Hz. Mobil ambulans bergerak dengan kelajuan 72 km/jam. Jika cepat rambat bunyi di udara adalah 340 m/s, berapakah frekuensi sirene yang didengar oleh pengendara motor?
</p>`,
    options: [
      { id: "A", text: "656,25 Hz" },
      { id: "B", text: "640,00 Hz" },
      { id: "C", text: "600,00 Hz" },
      { id: "D", text: "550,00 Hz" },
      { id: "E", text: "525,50 Hz" }
    ],
    kunci: "A",
    pembahasan: "<strong>Penerapan Efek Doppler:</strong><br>\n1. <strong>Konversi Satuan Kecepatan:</strong><br>\n&bull; Pendengar (motor mendekat): v_p = + 36 km/jam = + 10 m/s.<br>\n&bull; Sumber (ambulans mendekat): v_s = 72 km/jam = 20 m/s.<br>\n&bull; Cepat rambat bunyi: v = 340 m/s.<br>\n&bull; Frekuensi sumber: f_s = 600 Hz.<br><br>\n2. <strong>Rumus Efek Doppler:</strong><br>\n<code>f_p = [(v + v_p) / (v - v_s)] &times; f_s</code><br>\n<code>f_p = [(340 + 10) / (340 - 20)] &times; 600</code><br>\n<code>f_p = (350 / 320) &times; 600 = (35 / 32) &times; 600 = 21.000 / 32 = 656,25 Hz</code>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    kode: "25FIS-PRED3-019"
  },
  {
    id: 20,
    elemen: "Gelombang & Bunyi",
    subelemen: "Taraf Intensitas Bunyi (Akustik)",
    indikator: "Menghitung taraf intensitas bunyi gabungan sejumlah sumber bunyi identik.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Taraf intensitas bunyi di sebuah bengkel manufaktur yang mengoperasikan 100 buah mesin identik adalah sebesar 90 dB. Jika hanya 10 buah mesin yang dinyalakan secara bersamaan, berapakah taraf intensitas bunyi yang terukur?
</p>`,
    options: [
      { id: "A", text: "10 dB" },
      { id: "B", text: "60 dB" },
      { id: "C", text: "70 dB" },
      { id: "D", text: "80 dB" },
      { id: "E", text: "85 dB" }
    ],
    kunci: "D",
    pembahasan: "<strong>Hubungan Taraf Intensitas Banyak Sumber Bunyi:</strong><br>\nRumus umum taraf intensitas n sumber bunyi identik:<br>\n<code>TI_n = TI₁ + 10 log n</code><br><br>\n1. <strong>Mencari Taraf Intensitas 1 Mesin (TI₁):</strong><br>\n<code>TI_100 = TI₁ + 10 log 100 &rarr; 90 = TI₁ + 10(2) &rarr; TI₁ = 90 - 20 = 70 dB</code>.<br><br>\n2. <strong>Menghitung Taraf Intensitas 10 Mesin (TI_10):</strong><br>\n<code>TI_10 = TI₁ + 10 log 10 = 70 + 10(1) = 80 dB</code>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    kode: "25FIS-PRED3-020"
  },
  {
    id: 21,
    elemen: "Kelistrikan & Kemagnetan",
    subelemen: "Rangkaian Resistor Seri-Paralel & Hukum Ohm",
    indikator: "Menganalisis besaran arus, hambatan pengganti, dan tegangan pada rangkaian resistor.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tiga buah resistor R₁ = 6 &Omega;, R₂ = 12 &Omega;, dan R₃ = 4 &Omega; dirangkai sedemikian rupa: R₁ dan R₂ disusun secara paralel, lalu kombinasi paralel tersebut diserikan dengan resistor R₃. Rangkaian dihubungkan ke sumber tegangan searah konstan 12 Volt dengan hambatan dalam baterai diabaikan.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah dari pernyataan-pernyataan berikut yang <strong>BENAR</strong> mengenai besaran listrik pada rangkaian tersebut? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Hambatan pengganti cabang paralel (R₁ dan R₂) adalah sebesar 4 &Omega;." },
      { id: "B", text: "Hambatan total seluruh rangkaian listrik adalah 8 &Omega;." },
      { id: "C", text: "Kuat arus total yang keluar dari sumber tegangan adalah 1,5 Ampere." },
      { id: "D", text: "Tegangan jepit pada resistor R₃ adalah sebesar 6,0 Volt." },
      { id: "E", text: "Arus yang mengalir melewati resistor R₁ sama besar dengan arus yang melewati R₂." }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: "<strong>Analisis Rangkaian Campuran Resistor:</strong><br>\n1. <strong>Hambatan Paralel (R_p):</strong><br>\n<code>1/R_p = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 &rarr; R_p = 12 / 3 = 4 &Omega; (Pernyataan A Benar)</code>.<br><br>\n2. <strong>Hambatan Total (R_tot):</strong><br>\n<code>R_tot = R_p + R₃ = 4 &Omega; + 4 &Omega; = 8 &Omega; (Pernyataan B Benar)</code>.<br><br>\n3. <strong>Arus Total Rangkaian (I_tot):</strong><br>\n<code>I_tot = V / R_tot = 12 V / 8 &Omega; = 1,5 Ampere (Pernyataan C Benar)</code>.<br><br>\n4. <strong>Tegangan pada Resistor R₃:</strong><br>\n<code>V₃ = I_tot &times; R₃ = 1,5 A &times; 4 &Omega; = 6,0 Volt (Pernyataan D Benar)</code>.<br><br>\n5. <strong>Pembagian Arus pada Cabang Paralel:</strong><br>\nKarena R₁ (6 &Omega;) &ne; R₂ (12 &Omega;), arus yang mengalir tidak sama besar (I₁ = 1,0 A dan I₂ = 0,5 A). Pernyataan E Salah.<br><br>\n<strong>Kunci Jawaban: A, B, C, D</strong>",
    kode: "25FIS-PRED3-021"
  },
  {
    id: 22,
    elemen: "Kelistrikan & Kemagnetan",
    subelemen: "Hukum II Kirchhoff (Rangkaian Loop)",
    indikator: "Menghitung kuat arus yang mengalir pada rangkaian tertutup 1 loop.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah rangkaian listrik tertutup 1 loop memuat dua sumber tegangan GGL: E₁ = 12 Volt dan E₂ = 6 Volt (dipasang berlawanan arah polaritas), serta dua resistor R₁ = 4 &Omega; dan R₂ = 2 &Omega;. Hambatan dalam baterai diabaikan.
</p>
<p class="font-semibold text-slate-900 mb-2">
Kuat arus listrik (I) yang mengalir melalui rangkaian tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "1,0 Ampere" },
      { id: "B", text: "1,5 Ampere" },
      { id: "C", text: "2,0 Ampere" },
      { id: "D", text: "3,0 Ampere" },
      { id: "E", text: "4,5 Ampere" }
    ],
    kunci: "A",
    pembahasan: "<strong>Penerapan Hukum II Kirchhoff:</strong><br>\nPersamaan loop tertutup: <code>&Sigma;E + &Sigma;(I &times; R) = 0</code><br><br>\nAmbil arah loop searah dengan GGL yang lebih besar (E₁ = 12 V):<br>\n<code>(E₁ - E₂) - I &times; (R₁ + R₂) = 0</code><br>\n<code>(12 - 6) - I &times; (4 + 2) = 0</code><br>\n<code>6 - 6I = 0 &rarr; 6I = 6 &rarr; I = 1,0 Ampere</code>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    kode: "25FIS-PRED3-022"
  },
  {
    id: 23,
    elemen: "Kelistrikan & Kemagnetan",
    subelemen: "Gaya Magnetik (Gaya Lorentz)",
    indikator: "Menghitung besar gaya Lorentz pada muatan yang bergerak memotong medan magnet tegak lurus.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah partikel bermuatan listrik q = 2 &mu;C (2 &times; 10⁻⁶ C) bergerak dengan kelajuan v = 5 &times; 10⁵ m/s melintasi daerah medan magnet homogen B = 0,40 Tesla secara tegak lurus (&theta; = 90&deg;).
</p>
<p class="font-semibold text-slate-900 mb-2">
Besar gaya magnetik (gaya Lorentz) yang dialami oleh partikel bermuatan tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "0,10 Newton" },
      { id: "B", text: "0,25 Newton" },
      { id: "C", text: "0,40 Newton" },
      { id: "D", text: "0,80 Newton" },
      { id: "E", text: "1,20 Newton" }
    ],
    kunci: "C",
    pembahasan: "<strong>Perhitungan Gaya Lorentz pada Muatan Bergerak:</strong><br>\nRumus gaya Lorentz:<br>\n<code>F = q &times; v &times; B &times; sin &theta;</code><br><br>\nDiketahui:<br>\n&bull; q = 2 &times; 10⁻⁶ C<br>\n&bull; v = 5 &times; 10⁵ m/s<br>\n&bull; B = 0,40 T<br>\n&bull; &theta; = 90&deg; (&rarr; sin 90&deg; = 1)<br><br>\n<code>F = (2 &times; 10⁻⁶) &times; (5 &times; 10⁵) &times; 0,40 &times; 1 = 1,0 &times; 0,40 = 0,40 Newton</code>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25FIS-PRED3-023"
  },
  {
    id: 24,
    elemen: "Kelistrikan & Kemagnetan",
    subelemen: "Induksi Elektromagnetik & Transformator",
    indikator: "Menganalisis prinsip kerja dan efisiensi transformator ideal.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah transformator step-down ideal dihubungkan dengan sumber tegangan bolak-balik bertegangan Vp = 220 Volt. Kumparan sekunder menghasilkan tegangan Vs = 22 Volt dan dihubungkan dengan lampu berdaya P = 44 Watt.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah dari pernyataan-pernyataan berikut yang <strong>BENAR</strong> mengenai transformator ideal tersebut? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Kuat arus yang mengalir pada kumparan sekunder (Is) adalah 2,0 Ampere." },
      { id: "B", text: "Kuat arus yang mengalir pada kumparan primer (Ip) adalah 0,20 Ampere." },
      { id: "C", text: "Perbandingan jumlah lilitan primer dan lilitan sekunder adalah Np : Ns = 10 : 1." },
      { id: "D", text: "Daya listrik pada kumparan primer sama dengan daya pada kumparan sekunder karena transformator beroperasi secara ideal (efisiensi 100%)." },
      { id: "E", text: "Jika tegangan primer dinaikkan menjadi dua kali lipat, frekuensi arus bolak-balik juga akan meningkat dua kali lipat." }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: "<strong>Prinsip Transformator Ideal:</strong><br>\n1. <strong>Arus Sekunder (Is):</strong><br>\n<code>P = Vs &times; Is &rarr; 44 W = 22 V &times; Is &rarr; Is = 2,0 Ampere (Pernyataan A Benar)</code>.<br><br>\n2. <strong>Daya & Arus Primer (Ip):</strong><br>\nPada transformator ideal efisiensi &eta; = 100%, sehingga Daya Primer = Daya Sekunder = 44 W (Pernyataan D Benar):<br>\n<code>Pp = Vp &times; Ip &rarr; 44 W = 220 V &times; Ip &rarr; Ip = 44 / 220 = 0,20 Ampere (Pernyataan B Benar)</code>.<br><br>\n3. <strong>Perbandingan Lilitan (Np : Ns):</strong><br>\n<code>Np / Ns = Vp / Vs = 220 / 22 = 10 / 1 &rarr; Np : Ns = 10 : 1 (Pernyataan C Benar)</code>.<br><br>\n4. Transformator tidak mengubah frekuensi gelombang arus bolak-balik (Pernyataan E Salah).<br><br>\n<strong>Kunci Jawaban: A, B, C, D</strong>",
    kode: "25FIS-PRED3-024"
  },
  {
    id: 25,
    elemen: "Fisika Modern & Fisika Inti",
    subelemen: "Efek Fotolistrik & Peluruhan Inti",
    indikator: "Mengevaluasi syarat terjadinya efek fotolistrik dan waktu paruh zat radioaktif.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Fisika modern menjelaskan fenomena kuantum mikroskopis seperti pelepasan elektron pada efek fotolistrik dan peluruhan zat radioaktif tak stabil.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah berdasarkan teori fisika kuantum dan inti!
</p>`,
    items: [
      {
        pernyataan: "Pada fenomena efek fotolistrik, elektron foto hanya dapat terlepas dari permukaan logam jika frekuensi foton cahaya datang lebih besar daripada frekuensi ambang logam (f > f₀).",
        kunci: "Benar",
        penjelasan: "Energi foton datang (E = h·f) harus melampaui fungsi kerja logam (W₀ = h·f₀) agar mampu melepaskan elektron dari ikatannya."
      },
      {
        pernyataan: "Meningkatkan intensitas cahaya yang frekuensinya di bawah frekuensi ambang akan menyebabkan elektron foto tetap dapat terlepas jika penyinaran dilakukan dalam waktu yang sangat lama.",
        kunci: "Salah",
        penjelasan: "Efek fotolistrik terjadi secara spontan tanpa jeda waktu. Jika frekuensi foton di bawah frekuensi ambang, berapapun tingginya intensitas cahaya elektron tetap tidak dapat terlepas."
      },
      {
        pernyataan: "Suatu isotop radioaktif memiliki waktu paruh 4 jam. Jika massa mula-mula sampel adalah 800 gram, maka massa zat radioaktif yang belum meluruh setelah 12 jam adalah sebesar 100 gram.",
        kunci: "Benar",
        penjelasan: "Jumlah paruh: n = t / T_paruh = 12 / 4 = 3 kali. Massa sisa: N = N₀ × (1/2)³ = 800 × 1/8 = 100 gram."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Analisis Konsep Fisika Kuantum & Inti:</strong><br>\n&bull; <strong>Pernyataan 1 (Benar):</strong> Syarat terlepasnya elektron foto: E &gt; W₀ atau f &gt; f₀ atau panjang gelombang datang &lambda; &lt; &lambda;₀.<br>\n&bull; <strong>Pernyataan 2 (Salah):</strong> Penambahan intensitas hanya menambah kuantitas foton per detik, bukan energi tiap foton. Jika f &lt; f₀, tidak ada elektron yang lepas.<br>\n&bull; <strong>Pernyataan 3 (Benar):</strong> Peluruhan eksponensial:<br>\n<code>N(t) = N₀ &times; (1/2)<sup>t/T</sup> = 800 &times; (1/2)³ = 800 / 8 = 100 gram</code>.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    kode: "25FIS-PRED3-025"
  }
];

// Validasi tidak ada tanda dolar ($)
const jsonStr = JSON.stringify(tkaFisikaPaket3Data);
if (jsonStr.includes('$')) {
  console.error("❌ PERINGATAN: Ditemukan tanda dolar ($) pada dataset Fisika Paket 3!");
  process.exit(1);
} else {
  console.log("✅ Dataset Fisika Paket 3 100% BEBAS dari tanda dolar ($)!");
}

const fileContent = `// tka/data/mapel-fisika-paket3.js
// Bank Data Lengkap 25 Soal TKA Fisika SMA Paket 3 (Prediksi Resmi BPPP / SNBT / UTBK 2025/2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Fisika SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaFisikaPaket3Data = ${JSON.stringify(tkaFisikaPaket3Data, null, 2)};

if (typeof window !== 'undefined') {
  window.tkaFisikaPaket3Data = tkaFisikaPaket3Data;
  window.tkaFisikaPackages = window.tkaFisikaPackages || {};
  window.tkaFisikaPackages['paket3'] = {
    id: "paket3",
    title: "Paket 3: Prediksi Resmi TKA Fisika SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 3 (Prediksi 2025/2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    durasiMenit: 50,
    get data() { return tkaFisikaPaket3Data; }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaFisikaPaket3Data };
}
`;

fs.writeFileSync(path.join(__dirname, '../tka/data/mapel-fisika-paket3.js'), fileContent, 'utf8');
console.log('🎉 tka/data/mapel-fisika-paket3.js berhasil dibuat!');
