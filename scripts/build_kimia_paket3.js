// scripts/build_kimia_paket3.js
// Generator resmi 25 Soal TKA Kimia SMA Paket 3
// Standar BPPP / Kemendikbudristek: Format Variatif (PG, MCMA, Benar/Salah)
// Bebas tanda dolar ($), 100% menggunakan format HTML/Unicode bersih.

const fs = require('fs');
const path = require('path');

const tkaPaket3Data = [
  {
    id: 1,
    elemen: "Struktur Atom & Sistem Periodik Unsur",
    subelemen: "Konfigurasi Elektron & Letak Unsur",
    indikator: "Menentukan konfigurasi elektron netral dan letak unsur pada tabel periodik dari ionnya.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nIon X<sup>3+</sup> memiliki konfigurasi elektron:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\nX<sup>3+</sup> : 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>3</sup>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKonfigurasi elektron atom netral X dalam keadaan dasar (ground state) dan letaknya dalam sistem periodik unsur adalah...\n</p>",
    options: [
      { id: "A", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ ; golongan VIA, periode 3" },
      { id: "B", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ ; golongan VIB, periode 3" },
      { id: "C", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s² ; golongan VIB, periode 4" },
      { id: "D", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ ; golongan VIB, periode 3" },
      { id: "E", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ ; golongan VIB, periode 4" }
    ],
    kunci: "E",
    pembahasan: "<strong>Analisis Konfigurasi Elektron & Letak Unsur:</strong><br>\n1. <strong>Menentukan Konfigurasi Atom Netral X:</strong><br>\nIon X<sup>3+</sup> terbentuk karena atom X melepaskan 3 elektron (2 elektron dari subkulit terluar 4s dan 1 elektron dari subkulit 3d).<br>\nUntuk kembali ke atom netral X (nomor atom = 18 + 3 + 3 = 24), tambahkan 3 elektron:<br>\n<code>X : 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s²</code><br><br>\n2. <strong>Aturan Kestabilan Subkulit d (Setengah Penuh):</strong><br>\nKonfigurasi 3d⁴ 4s² tidak stabil dan mengalami eksitasi menjadi konfigurasi setengah penuh yang lebih simetris dan stabil (seperti pada atom Kromium <sub>24</sub>Cr):<br>\n<code>X : 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹</code><br><br>\n3. <strong>Menentukan Golongan dan Periode:</strong><br>\n&bull; Kulit terluar (n terbesar = 4) &rarr; <strong>Periode 4</strong>.<br>\n&bull; Elektron valensi pada (n-1)d + ns = 5 + 1 = 6 elektron orbital d &amp; s &rarr; <strong>Golongan VIB</strong>.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    kode: "25KIM-PRED3-001"
  },
  {
    id: 2,
    elemen: "Struktur Atom & Sistem Periodik Unsur",
    subelemen: "Sifat Keperiodikan Unsur",
    indikator: "Menganalisis perbandingan jari-jari atom dalam satu golongan halogen.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan notasi tiga unsur halogen berikut:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\n<sub>17</sub>Cl , &emsp; <sub>35</sub>Br , &emsp; <sub>53</sub>I\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBagaimanakah urutan perbandingan jari-jari atom ketiga unsur tersebut jika diurutkan berdasarkan kenaikan nomor atomnya?\n</p>",
    options: [
      { id: "A", text: "Jari-jari atom: Cl > Br > I karena muatan inti efektif semakin kuat menarik elektron terluar." },
      { id: "B", text: "Jari-jari atom: Br > I > Cl karena jumlah elektron valensi pada kulit terluarnya berbeda." },
      { id: "C", text: "Jari-jari atom: Cl < Br < I seiring bertambahnya jumlah kulit utama elektron dari atas ke bawah dalam satu golongan." },
      { id: "D", text: "Jari-jari atom: I < Cl < Br karena pengaruh efek perisai elektron (shielding effect) yang melemah." },
      { id: "E", text: "Jari-jari atom ketiganya sama besar karena berada dalam satu golongan yang sama (golongan VIIA)." }
    ],
    kunci: "C",
    pembahasan: "<strong>Analisis Sifat Keperiodikan (Jari-Jari Atom):</strong><br>\n1. <strong>Konfigurasi Elektron Ketiga Unsur:</strong><br>\n&bull; <sub>17</sub>Cl : [Ne] 3s² 3p⁵ (memiliki 3 kulit elektron, periode 3)<br>\n&bull; <sub>35</sub>Br : [Ar] 3d¹⁰ 4s² 4p⁵ (memiliki 4 kulit elektron, periode 4)<br>\n&bull; <sub>53</sub>I : [Kr] 4d¹⁰ 5s² 5p⁵ (memiliki 5 kulit elektron, periode 5)<br><br>\n2. <strong>Tren Jari-Jari Atom dalam Satu Golongan:</strong><br>\nKetiga unsur berada dalam satu golongan (Golongan VIIA / Halogen). Dari atas ke bawah dalam satu golongan (Cl &rarr; Br &rarr; I), jumlah kulit elektron utama bertambah sehingga jarak antara inti dengan elektron valensi semakin jauh.<br>\nAkibatnya, <strong>jari-jari atom semakin besar: Cl &lt; Br &lt; I</strong>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25KIM-PRED3-002"
  },
  {
    id: 3,
    elemen: "Ikatan Kimia & Bentuk Molekul",
    subelemen: "Kaidah Oktet & Pengecualian Oktet",
    indikator: "Mengevaluasi kestabilan struktur Lewis molekul terhadap kaidah duplet dan oktet.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKaidah oktet menjelaskan kestabilan atom melalui pembagian elektron menyerupai konfigurasi gas mulia (8 elektron valensi). Namun, beberapa molekul kovalen stabil dapat mengalami penyimpangan dari kaidah oktet, seperti molekul berelektron gasal (ganjil), oktet tidak lengkap, atau oktet berkembang.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah terkait struktur Lewis molekul-molekul kovalen!<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik Benar atau Salah pada setiap pernyataan berdasarkan prinsip ikatan kimia!</span>\n</p>",
    items: [
      {
        pernyataan: "Pada molekul gas nitrogen dioksida (NO₂), atom pusat N memiliki 7 elektron valensi di sekitarnya sehingga merupakan contoh molekul berelektron gasal (ganjil) yang menyimpang dari kaidah oktet.",
        kunci: "Benar",
        penjelasan: "Atom N memiliki 5 elektron valensi, berikatan dengan 2 atom O membentuk radikal bebas dengan 7 elektron di sekitar N (tidak memenuhi kaidah oktet)."
      },
      {
        pernyataan: "Molekul fosforus pentaklorida (PCl₅) memenuhi kaidah oktet sempurna karena atom pusat P dikelilingi oleh tepat 8 elektron ikatan.",
        kunci: "Salah",
        penjelasan: "PCl₅ memiliki 5 pasangan elektron ikatan (total 10 elektron di sekitar atom pusat P), sehingga merupakan contoh oktet berkembang (expanded octet)."
      },
      {
        pernyataan: "Molekul boron trifluorida (BF₃) merupakan contoh molekul dengan oktet tidak lengkap (incomplete octet) karena atom pusat B hanya memiliki 6 elektron valensi di sekitarnya.",
        kunci: "Benar",
        penjelasan: "Boron (golongan IIIA) hanya memiliki 3 elektron valensi, berikatan kovalen tunggal dengan 3 atom F sehingga atom pusat B hanya dikelilingi 6 elektron."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Analisis Kaidah Oktet dan Pengecualiannya:</strong><br>\n&bull; <strong>Pernyataan 1 (Benar):</strong> Pada struktur Lewis NO₂, total elektron valensi = 5 + (2 &times; 6) = 17 elektron (ganjil). Atom pusat N hanya memiliki 7 elektron dan terdapat 1 elektron bebas tidak berpasangan (radikal bebas).<br>\n&bull; <strong>Pernyataan 2 (Salah):</strong> Pada molekul PCl₅, atom P mengikat 5 atom Cl, sehingga atom pusat P dikelilingi oleh 5 pasang elektron ikatan (10 elektron). Ini merupakan fenomena <em>expanded octet</em> (oktet berkembang), bukan oktet sempurna.<br>\n&bull; <strong>Pernyataan 3 (Benar):</strong> Pada BF₃, atom B membentuk 3 ikatan kovalen tunggal dengan F, sehingga total elektron di sekitar B adalah 6 elektron (oktet tidak lengkap / <em>incomplete octet</em>).<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    kode: "25KIM-PRED3-003"
  },
  {
    id: 4,
    elemen: "Ikatan Kimia & Bentuk Molekul",
    subelemen: "Kepolaran Senyawa",
    indikator: "Menentukan molekul kovalen paling polar berdasarkan selisih keelektronegatifan.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan tabel data keelektronegatifan beberapa unsur menurut skala Pauling berikut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n<table class=\"min-w-[280px] text-xs border border-slate-300 mx-auto text-center\">\n  <thead class=\"bg-slate-100 font-semibold text-slate-700\">\n    <tr><th class=\"p-2 border\">Unsur</th><th class=\"p-2 border\">H</th><th class=\"p-2 border\">C</th><th class=\"p-2 border\">N</th><th class=\"p-2 border\">O</th><th class=\"p-2 border\">F</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"p-2 border font-medium\">Keelektronegatifan</td><td class=\"p-2 border\">2,1</td><td class=\"p-2 border\">2,5</td><td class=\"p-2 border\">3,0</td><td class=\"p-2 border\">3,5</td><td class=\"p-2 border\">4,0</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, ikatan kovalen tunggal manakah yang memiliki tingkat kepolaran paling tinggi?\n</p>",
    options: [
      { id: "A", text: "Ikatan C—H dengan selisih keelektronegatifan 0,4" },
      { id: "B", text: "Ikatan H—F dengan selisih keelektronegatifan 1,9" },
      { id: "C", text: "Ikatan N—H dengan selisih keelektronegatifan 0,9" },
      { id: "D", text: "Ikatan O—H dengan selisih keelektronegatifan 1,4" },
      { id: "E", text: "Ikatan C—O dengan selisih keelektronegatifan 1,0" }
    ],
    kunci: "B",
    pembahasan: "<strong>Kepolaran Ikatan Kovalen:</strong><br>\nKepolaran ikatan kovalen ditentukan oleh besarnya <strong>selisih keelektronegatifan (&Delta;EN)</strong> antara dua atom yang saling berikatan:<br>\n&bull; &Delta;EN(C—H) = |2,5 - 2,1| = 0,4<br>\n&bull; &Delta;EN(N—H) = |3,0 - 2,1| = 0,9<br>\n&bull; &Delta;EN(C—O) = |3,5 - 2,5| = 1,0<br>\n&bull; &Delta;EN(O—H) = |3,5 - 2,1| = 1,4<br>\n&bull; &Delta;EN(H—F) = |4,0 - 2,1| = <strong>1,9</strong><br><br>\nIkatan H—F memiliki selisih keelektronegatifan terbesar (1,9), sehingga rapatan elektron sangat kuat tertarik ke arah atom F dan menghasilkan momen dipol ikatan paling polar.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-004"
  },
  {
    id: 5,
    elemen: "Kimia Dasar & Stoikiometri",
    subelemen: "Tata Nama Senyawa Kimia",
    indikator: "Mengidentifikasi pasangan rumus kimia dan nama senyawa anorganik yang sesuai IUPAC.",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTata nama senyawa anorganik menurut IUPAC mempertimbangkan jenis ikatan, valensi (bilangan oksidasi) logam transisi dengan angka Romawi, serta awalan jumlah atom Yunani untuk senyawa kovalen nonlogam.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah dari pasangan rumus kimia dan nama senyawa berikut yang <strong>BENAR</strong> menurut aturan IUPAC? <em>(Pilih semua jawaban yang benar!)</em>\n</p>",
    options: [
      { id: "A", text: "Cu₂O dinamakan tembaga(I) oksida" },
      { id: "B", text: "Fe₂(SO₄)₃ dinamakan besi(III) sulfat" },
      { id: "C", text: "N₂O₅ dinamakan dinitrogen pentaoksida" },
      { id: "D", text: "SnCl₄ dinamakan timah(II) klorida" },
      { id: "E", text: "Al₂(CO₃)₃ dinamakan dialuminium trikarbonat" }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Analisis Tata Nama Senyawa IUPAC:</strong><br>\n&bull; <strong>A (Benar):</strong> Pada Cu₂O, bilangan oksidasi Cu adalah +1 (2 &times; (+1) + (-2) = 0), sehingga dinamakan <strong>tembaga(I) oksida</strong>.<br>\n&bull; <strong>B (Benar):</strong> Pada Fe₂(SO₄)₃, ion sulfat SO₄²⁻ memiliki muatan -2, sehingga muatan Fe adalah +3 (besi(III) sulfat).<br>\n&bull; <strong>C (Benar):</strong> N₂O₅ adalah senyawa kovalen nonlogam-nonlogam, dinamakan menggunakan awalan angka Yunani: <strong>dinitrogen pentaoksida</strong>.<br>\n&bull; <strong>D (Salah):</strong> Pada SnCl₄, bilangan oksidasi Sn adalah +4, sehingga namanya seharusnya <strong>timah(IV) klorida</strong>, bukan timah(II).<br>\n&bull; <strong>E (Salah):</strong> Al adalah unsur golongan utama (golongan IIIA) yang hanya memiliki satu biloks (+3). Oleh karena itu tidak menggunakan awalan di-/tri-, melainkan cukup <strong>aluminium karbonat</strong>.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>",
    kode: "25KIM-PRED3-005"
  },
  {
    id: 6,
    elemen: "Kimia Dasar & Stoikiometri",
    subelemen: "Perhitungan Stoikiometri Gas",
    indikator: "Menghitung volume gas amonia yang diproduksi pada proses Haber-Bosch.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGas amonia (NH₃) disintesis dalam skala industri melalui proses Haber-Bosch menurut persamaan reaksi setara:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\nN₂(g) + 3H₂(g) &rarr; 2NH₃(g)\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika sebanyak 60 liter gas hidrogen (H₂) direaksikan sempurna dengan gas nitrogen (N₂) berlebih pada suhu dan tekanan yang sama, berapakah volume gas amonia (NH₃) yang dihasilkan?\n</p>",
    options: [
      { id: "A", text: "20 liter" },
      { id: "B", text: "30 liter" },
      { id: "C", text: "40 liter" },
      { id: "D", text: "60 liter" },
      { id: "E", text: "90 liter" }
    ],
    kunci: "C",
    pembahasan: "<strong>Hukum Gay-Lussac (Perbandingan Koefisien = Perbandingan Volume):</strong><br>\nPada kondisi suhu dan tekanan yang sama (P, T tetap), perbandingan volume gas pereaksi dan hasil reaksi setara dengan perbandingan koefisien reaksinya:<br>\n<code>Koefisien H₂ : Koefisien NH₃ = 3 : 2</code><br><br>\nMaka volume gas NH₃ yang dihasilkan:<br>\n<code>Volume NH₃ = (Koefisien NH₃ / Koefisien H₂) &times; Volume H₂</code><br>\n<code>Volume NH₃ = (2 / 3) &times; 60 Liter = 40 Liter</code><br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25KIM-PRED3-006"
  },
  {
    id: 7,
    elemen: "Kimia Dasar & Stoikiometri",
    subelemen: "Hukum-Hukum Dasar Kimia",
    indikator: "Menganalisis perbandingan volume gas pada reaksi pembakaran etuna berdasarkan hukum Gay-Lussac.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGas etuna (asetilena, C₂H₂) digunakan sebagai gas bahan bakar pada pengelasan logam. Gas etuna terbakar sempurna dengan gas oksigen menurut persamaan reaksi setara:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\n2C₂H₂(g) + 5O₂(g) &rarr; 4CO₂(g) + 2H₂O(g)\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah terkait reaksi gas tersebut pada suhu dan tekanan tetap!\n</p>",
    items: [
      {
        pernyataan: "Untuk membakar habis 10 liter gas etuna (C₂H₂), diperlukan tepat 25 liter gas oksigen (O₂).",
        kunci: "Benar",
        penjelasan: "Sesuai koefisien reaksi, volume O₂ = (5/2) × 10 L = 25 Liter."
      },
      {
        pernyataan: "Volume gas karbon dioksida (CO₂) yang dihasilkan dari pembakaran 10 liter gas etuna adalah sebanyak 40 liter.",
        kunci: "Salah",
        penjelasan: "Volume CO₂ yang dihasilkan adalah (4/2) × 10 L = 20 Liter, bukan 40 Liter."
      },
      {
        pernyataan: "Perbandingan volume gas-gas yang terlibat dalam reaksi di atas (C₂H₂ : O₂ : CO₂ : H₂O = 2 : 5 : 4 : 2) membuktikan berlakunya Hukum Perbandingan Volume Gay-Lussac.",
        kunci: "Benar",
        penjelasan: "Perbandingan volume gas yang bereaksi dan hasil reaksi berbanding sebagai bilangan bulat dan sederhana sesuai koefisien reaksinya."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Penerapan Hukum Gay-Lussac:</strong><br>\n&bull; <strong>Pernyataan 1 (Benar):</strong> Volume O₂ = (5 / 2) &times; 10 L = 25 Liter.<br>\n&bull; <strong>Pernyataan 2 (Salah):</strong> Volume CO₂ = (4 / 2) &times; 10 L = 20 Liter (bukan 40 Liter).<br>\n&bull; <strong>Pernyataan 3 (Benar):</strong> Perbandingan volume gas 2 : 5 : 4 : 2 merupakan bilangan bulat sederhana yang tepat membuktikan Hukum Gay-Lussac.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    kode: "25KIM-PRED3-007"
  },
  {
    id: 8,
    elemen: "Larutan & Kimia Fisika",
    subelemen: "Daya Hantar Listrik Larutan",
    indikator: "Mengidentifikasi pasangan larutan elektrolit kuat, lemah, dan nonelektrolit.",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLarutan elektrolit dapat menghantarkan arus listrik karena mengalami disosiasi menjadi ion-ion bebas (kation dan anion). Derajat ionisasi (&alpha;) menentukan kekuatan daya hantar listrik larutan.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah dari larutan-larutan berikut yang tergolong sebagai <strong>ELEKTROLIT KUAT</strong> dan terionisasi sempurna (&alpha; = 1) dalam air? <em>(Pilih semua jawaban yang benar!)</em>\n</p>",
    options: [
      { id: "A", text: "Larutan asam klorida (HCl 0,1 M)" },
      { id: "B", text: "Larutan natrium hidroksida (NaOH 0,1 M)" },
      { id: "C", text: "Larutan asam asetat (CH₃COOH 0,1 M)" },
      { id: "D", text: "Larutan kalium klorida (KCl 0,1 M)" },
      { id: "E", text: "Larutan glukosa (C₆H₁₂O₆ 0,1 M)" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: "<strong>Klasifikasi Larutan Elektrolit:</strong><br>\n&bull; <strong>HCl (Asam Klorida):</strong> Asam kuat terionisasi sempurna menjadi ion H⁺ dan Cl⁻ (&alpha; = 1) &rarr; Elektrolit Kuat.<br>\n&bull; <strong>NaOH (Natrium Hidroksida):</strong> Basa kuat terionisasi sempurna menjadi Na⁺ dan OH⁻ (&alpha; = 1) &rarr; Elektrolit Kuat.<br>\n&bull; <strong>KCl (Kalium Klorida):</strong> Garam yang larut sempurna dalam air terurai menjadi K⁺ dan Cl⁻ &rarr; Elektrolit Kuat.<br>\n&bull; <strong>CH₃COOH:</strong> Asam lemah terionisasi sebagian (&alpha; &lt; 1) &rarr; Elektrolit Lemah.<br>\n&bull; <strong>Glukosa (C₆H₁₂O₆):</strong> Senyawa kovalen molekuler netral tidak terionisasi (&alpha; = 0) &rarr; Nonelektrolit.<br><br>\n<strong>Kunci Jawaban: A, B, D</strong>",
    kode: "25KIM-PRED3-008"
  },
  {
    id: 9,
    elemen: "Larutan Asam-Basa",
    subelemen: "Titrasi Asam-Basa",
    indikator: "Menghitung konsentrasi larutan asam klorida dari data eksperimen titrasi dengan NaOH.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak 25,0 mL larutan asam klorida (HCl) dititrasi dengan larutan baku NaOH 0,10 M menggunakan indikator fenolftalein (PP). Data volume NaOH yang digunakan pada tiga kali percobaan titrasi hingga mencapai titik akhir titrasi (warna merah muda konstan) adalah:\n</p>\n<div class=\"overflow-x-auto my-3\">\n<table class=\"min-w-[260px] text-xs border border-slate-300 mx-auto text-center\">\n  <thead class=\"bg-slate-100 font-semibold text-slate-700\">\n    <tr><th class=\"p-2 border\">Percobaan Titrasi</th><th class=\"p-2 border\">1</th><th class=\"p-2 border\">2</th><th class=\"p-2 border\">3</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"p-2 border font-medium\">Volume NaOH 0,10 M</td><td class=\"p-2 border font-mono\">19,8 mL</td><td class=\"p-2 border font-mono\">20,2 mL</td><td class=\"p-2 border font-mono\">20,0 mL</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data eksperimen tersebut, konsentrasi (molaritas) larutan asam klorida (HCl) yang diuji adalah...\n</p>",
    options: [
      { id: "A", text: "0,040 M" },
      { id: "B", text: "0,080 M" },
      { id: "C", text: "0,100 M" },
      { id: "D", text: "0,125 M" },
      { id: "E", text: "0,160 M" }
    ],
    kunci: "B",
    pembahasan: "<strong>Perhitungan Titrasi Asam-Basa Netralisasi:</strong><br>\n1. <strong>Rata-rata Volume NaOH:</strong><br>\n<code>V_rata-rata NaOH = (19,8 + 20,2 + 20,0) / 3 = 20,0 mL</code><br><br>\n2. <strong>Prinsip Ekuivalensi Netralisasi:</strong><br>\n<code>Mol ekuivalen asam = Mol ekuivalen basa</code><br>\n<code>V_asam &times; M_asam &times; valensi asam = V_basa &times; M_basa &times; valensi basa</code><br>\n(Valensi asam HCl = 1; valensi basa NaOH = 1)<br><br>\n<code>25,0 mL &times; M_HCl &times; 1 = 20,0 mL &times; 0,10 M &times; 1</code><br>\n<code>M_HCl = 2,0 / 25,0 = 0,080 M</code><br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-009"
  },
  {
    id: 10,
    elemen: "Larutan Asam-Basa",
    subelemen: "Larutan Penyangga (Buffer)",
    indikator: "Mengidentifikasi pasangan spesi kimia yang dapat membentuk larutan penyangga asam atau basa.",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLarutan penyangga (buffer) merupakan larutan yang mampu mempertahankan kestabilan pH saat ditambahkan sedikit asam kuat, basa kuat, maupun saat diencerkan dengan air.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah dari campuran larutan berikut yang dapat menghasilkan <strong>SISTEM LARUTAN PENYANGGA</strong>? <em>(Pilih semua jawaban yang benar!)</em>\n</p>",
    options: [
      { id: "A", text: "100 mL CH₃COOH 0,1 M + 100 mL CH₃COONa 0,1 M" },
      { id: "B", text: "100 mL NH₃(aq) 0,2 M + 100 mL NH₄Cl 0,1 M" },
      { id: "C", text: "100 mL HCl 0,1 M + 100 mL NaCl 0,1 M" },
      { id: "D", text: "100 mL H₂CO₃ 0,1 M + 100 mL NaHCO₃ 0,1 M" },
      { id: "E", text: "100 mL NaOH 0,1 M + 100 mL HCl 0,1 M" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: "<strong>Syarat Terbentuknya Larutan Penyangga:</strong><br>\n&bull; <strong>A (Penyangga Asam):</strong> Mengandung asam lemah CH₃COOH dan basa konjugasinya ion CH₃COO⁻ dari garam CH₃COONa.<br>\n&bull; <strong>B (Penyangga Basa):</strong> Mengandung basa lemah NH₃ dan asam konjugasinya ion NH₄⁺ dari garam NH₄Cl.<br>\n&bull; <strong>D (Penyangga Karbonat):</strong> Mengandung asam lemah H₂CO₃ dan basa konjugasinya ion HCO₃⁻ (sistem penyangga darah biologis).<br>\n&bull; <strong>C (Bukan Penyangga):</strong> Campuran asam kuat HCl dan garam NaCl tidak dapat membentuk buffer.<br>\n&bull; <strong>E (Bukan Penyangga):</strong> Reaksi netralisasi ekuivalen asam kuat dan basa kuat menghasilkan garam netral NaCl, bukan larutan penyangga.<br><br>\n<strong>Kunci Jawaban: A, B, D</strong>",
    kode: "25KIM-PRED3-010"
  },
  {
    id: 11,
    elemen: "Larutan Asam-Basa",
    subelemen: "Hidrolisis Garam",
    indikator: "Mengevaluasi sifat keasaman dan reaksi hidrolisis garam amonium klorida.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGaram amonium klorida (NH₄Cl) terbentuk dari reaksi netralisasi antara larutan amonia (NH₃, basa lemah) dengan asam klorida (HCl, asam kuat). Di dalam air, garam ini terionisasi sempurna menjadi kation NH₄⁺ dan anion Cl⁻.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan-pernyataan berikut Benar atau Salah terkait larutan garam NH₄Cl!\n</p>",
    items: [
      {
        pernyataan: "Kation amonium (NH₄⁺) mengalami hidrolisis parsial menghasilkan ion hidronium (H₃O⁺) menurut reaksi: NH₄⁺(aq) + H₂O(l) ⇌ NH₃(aq) + H₃O⁺(aq).",
        kunci: "Benar",
        penjelasan: "NH₄⁺ berasal dari basa lemah NH₃ sehingga dapat bereaksi dengan air mendonorkan proton menghasilkan ion H₃O⁺."
      },
      {
        pernyataan: "Anion klorida (Cl⁻) mengalami hidrolisis kuat menghasilkan ion hidroksida (OH⁻) sehingga larutan garam bersifat basa dengan pH > 7.",
        kunci: "Salah",
        penjelasan: "Cl⁻ merupakan basa konjugasi dari asam kuat HCl sehingga sangat lemah dan tidak dapat terhidrolisis dalam air."
      },
      {
        pernyataan: "Larutan garam NH₄Cl di dalam air memiliki nilai pH < 7 (bersifat asam) dan dapat mengubah warna lakmus biru menjadi merah.",
        kunci: "Benar",
        penjelasan: "Karena hanya kation yang terhidrolisis menghasilkan ion H₃O⁺, larutan garam bersifat asam (pH < 7)."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Analisis Hidrolisis Garam Asam (NH₄Cl):</strong><br>\n&bull; <strong>Pernyataan 1 (Benar):</strong> Ion NH₄⁺ berasal dari basa lemah NH₃, sehingga bereaksi dengan molekul air melepaskan H⁺ (H₃O⁺).<br>\n&bull; <strong>Pernyataan 2 (Salah):</strong> Ion Cl⁻ adalah basa konjugasi dari asam kuat HCl sehingga tidak bereaksi dengan air (tidak terhidrolisis).<br>\n&bull; <strong>Pernyataan 3 (Benar):</strong> Akibat penumpukan ion H₃O⁺ dari hidrolisis kation, larutan memiliki [H⁺] &gt; 10⁻⁷ M, pH &lt; 7, dan menguji lakmus biru menjadi merah.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    kode: "25KIM-PRED3-011"
  },
  {
    id: 12,
    elemen: "Larutan & Kimia Fisika",
    subelemen: "Kelarutan & Hasil Kali Kelarutan (Ksp)",
    indikator: "Menganalisis terjadinya endapan berdasarkan perbandingan nilai Qsp dan Ksp.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak 100 mL larutan AgNO₃ 0,002 M dicampurkan dengan 100 mL larutan NaCl 0,002 M pada suhu 25 &deg;C. Diketahui nilai tetapan hasil kali kelarutan AgCl pada suhu tersebut adalah Ksp = 1,8 &times; 10⁻¹⁰.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPernyataan manakah yang paling tepat mengenai kondisi larutan campuran tersebut?\n</p>",
    options: [
      { id: "A", text: "Tidak terbentuk endapan karena nilai Qsp = Ksp (larutan tepat jenuh)." },
      { id: "B", text: "Tidak terbentuk endapan karena nilai Qsp < Ksp (larutan belum jenuh)." },
      { id: "C", text: "Terbentuk endapan AgCl karena nilai Qsp = 1,0 × 10⁻⁶ > Ksp." },
      { id: "D", text: "Terbentuk endapan AgCl karena nilai Qsp = 4,0 × 10⁻⁶ > Ksp." },
      { id: "E", text: "Larutan membentuk sistem koloid stabil tanpa terjadi pengendapan padatan." }
    ],
    kunci: "C",
    pembahasan: "<strong>Uji Pengendapan dengan Kuosien Reaksi (Qsp):</strong><br>\n1. <strong>Konsentrasi Setelah Pencampuran:</strong><br>\nVolume total larutan = 100 mL + 100 mL = 200 mL.<br>\n<code>[Ag⁺] = (100 mL &times; 0,002 M) / 200 mL = 0,001 M = 1,0 &times; 10⁻³ M</code><br>\n<code>[Cl⁻] = (100 mL &times; 0,002 M) / 200 mL = 0,001 M = 1,0 &times; 10⁻³ M</code><br><br>\n2. <strong>Menghitung Nilai Qsp:</strong><br>\n<code>Qsp = [Ag⁺] &times; [Cl⁻] = (1,0 &times; 10⁻³) &times; (1,0 &times; 10⁻³) = 1,0 &times; 10⁻⁶</code><br><br>\n3. <strong>Perbandingan Qsp dengan Ksp:</strong><br>\nKarena nilai Qsp (1,0 &times; 10⁻⁶) jauh lebih besar daripada nilai Ksp (1,8 &times; 10⁻¹⁰), larutan berada dalam keadaan lewat jenuh sehingga <strong>terbentuk endapan putih AgCl</strong>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    kode: "25KIM-PRED3-012"
  },
  {
    id: 13,
    elemen: "Termokimia & Energetika",
    subelemen: "Kalorimetri & Entalpi Reaksi",
    indikator: "Menghitung perubahan entalpi netralisasi per mol reaksi asam kuat dengan basa kuat.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKe dalam sebuah kalorimeter sederhana dimasukkan 50 mL larutan HCl 1,0 M dan 50 mL larutan NaOH 1,0 M. Suhu awal kedua larutan adalah 25,0 &deg;C. Setelah dicampurkan dan diaduk merata, suhu campuran naik menjadi 31,5 &deg;C. Jika kalor jenis larutan c = 4,2 J/(g&middot;&deg;C) dan massa jenis larutan dianggap &rho; = 1,0 g/mL (kapasitas kalor bejana kalorimeter diabaikan), perubahan entalpi netralisasi (&Delta;H) per mol reaksi adalah...\n</p>",
    options: [
      { id: "A", text: "-27,3 kJ/mol" },
      { id: "B", text: "-54,6 kJ/mol" },
      { id: "C", text: "-65,2 kJ/mol" },
      { id: "D", text: "+54,6 kJ/mol" },
      { id: "E", text: "+27,3 kJ/mol" }
    ],
    kunci: "B",
    pembahasan: "<strong>Perhitungan Kalorimetri Netralisasi:</strong><br>\n1. <strong>Massa Campuran dan Kenaikan Suhu:</strong><br>\nVolume total = 50 + 50 = 100 mL &rarr; massa m = 100 gram.<br>\n<code>&Delta;T = 31,5 &deg;C - 25,0 &deg;C = 6,5 &deg;C</code><br><br>\n2. <strong>Kalor yang Dilepaskan Reaksi:</strong><br>\n<code>q_larutan = m &times; c &times; &Delta;T = 100 g &times; 4,2 J/(g&middot;&deg;C) &times; 6,5 &deg;C = 2.730 Joule = 2,73 kJ</code><br>\n<code>q_reaksi = -q_larutan = -2,73 kJ (reaksi eksoterm)</code><br><br>\n3. <strong>Menghitung Mol Pereaksi yang Bereaksi:</strong><br>\n<code>Mol HCl = 50 mL &times; 1,0 M = 50 mmol = 0,05 mol</code><br>\n<code>Mol NaOH = 50 mL &times; 1,0 M = 50 mmol = 0,05 mol</code><br>\nMol H₂O yang terbentuk = 0,05 mol.<br><br>\n4. <strong>Perubahan Entalpi Molar:</strong><br>\n<code>&Delta;H = q_reaksi / mol = -2,73 kJ / 0,05 mol = -54,6 kJ/mol</code><br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-013"
  },
  {
    id: 14,
    elemen: "Laju Reaksi & Kinetika Kimia",
    subelemen: "Persamaan Laju & Orde Reaksi",
    indikator: "Menentukan rumus persamaan laju reaksi dari tabel eksperimen.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nData eksperimen laju reaksi untuk reaksi: 2A + B &rarr; C + D pada suhu tertentu disajikan dalam tabel berikut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n<table class=\"min-w-[320px] text-xs border border-slate-300 mx-auto text-center\">\n  <thead class=\"bg-slate-100 font-semibold text-slate-700\">\n    <tr><th class=\"p-2 border\">Percobaan</th><th class=\"p-2 border\">Konsentrasi [A]</th><th class=\"p-2 border\">Konsentrasi [B]</th><th class=\"p-2 border\">Laju Reaksi (M/s)</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"p-2 border font-medium\">1</td><td class=\"p-2 border font-mono\">0,10 M</td><td class=\"p-2 border font-mono\">0,10 M</td><td class=\"p-2 border font-mono\">2,0 &times; 10⁻³</td></tr>\n    <tr><td class=\"p-2 border font-medium\">2</td><td class=\"p-2 border font-mono\">0,20 M</td><td class=\"p-2 border font-mono\">0,10 M</td><td class=\"p-2 border font-mono\">8,0 &times; 10⁻³</td></tr>\n    <tr><td class=\"p-2 border font-medium\">3</td><td class=\"p-2 border font-mono\">0,10 M</td><td class=\"p-2 border font-mono\">0,20 M</td><td class=\"p-2 border font-mono\">4,0 &times; 10⁻³</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, persamaan laju reaksi yang benar adalah...\n</p>",
    options: [
      { id: "A", text: "v = k [A] [B]" },
      { id: "B", text: "v = k [A]² [B]" },
      { id: "C", text: "v = k [A] [B]²" },
      { id: "D", text: "v = k [A]² [B]²" },
      { id: "E", text: "v = k [A]²" }
    ],
    kunci: "B",
    pembahasan: "<strong>Penentuan Orde dan Persamaan Laju Reaksi:</strong><br>\nBentuk umum persamaan laju: <code>v = k [A]<sup>x</sup> [B]<sup>y</sup></code><br><br>\n1. <strong>Menentukan Orde terhadap A (x):</strong><br>\nBandingkan percobaan 1 dan 2 ([B] konstan pada 0,10 M):<br>\n<code>v₂ / v₁ = ([A]₂ / [A]₁)<sup>x</sup> &rarr; (8,0 &times; 10⁻³) / (2,0 &times; 10⁻³) = (0,20 / 0,10)<sup>x</sup></code><br>\n<code>4 = 2<sup>x</sup> &rarr; x = 2 (Orde reaksi terhadap A adalah 2)</code><br><br>\n2. <strong>Menentukan Orde terhadap B (y):</strong><br>\nBandingkan percobaan 1 dan 3 ([A] konstan pada 0,10 M):<br>\n<code>v₃ / v₁ = ([B]₃ / [B]₁)<sup>y</sup> &rarr; (4,0 &times; 10⁻³) / (2,0 &times; 10⁻³) = (0,20 / 0,10)<sup>y</sup></code><br>\n<code>2 = 2<sup>y</sup> &rarr; y = 1 (Orde reaksi terhadap B adalah 1)</code><br><br>\n3. <strong>Persamaan Laju Reaksi:</strong><br>\n<code>v = k [A]² [B]</code> (Orde total = 2 + 1 = 3).<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-014"
  },
  {
    id: 15,
    elemen: "Laju Reaksi & Kinetika Kimia",
    subelemen: "Teori Tumbukan & Faktor Laju",
    indikator: "Mengevaluasi faktor luas permukaan, suhu, dan katalis terhadap laju reaksi.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTeori tumbukan menjelaskan bahwa laju reaksi dipengaruhi oleh frekuensi tumbukan efektif antara molekul-molekul pereaksi yang memiliki orientasi ruang yang tepat dan energi kinetik melampaui energi aktivasi (Ea).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan-pernyataan berikut Benar atau Salah terkait faktor-faktor penentu laju reaksi!\n</p>",
    items: [
      {
        pernyataan: "Kenaikan suhu meningkatkan energi kinetik rata-rata partikel pereaksi sehingga memperbanyak fraksi molekul yang energinya mampu melampaui energi aktivasi (Ea).",
        kunci: "Benar",
        penjelasan: "Peningkatan suhu menggeser kurva distribusi Maxwell-Boltzmann ke energi yang lebih tinggi sehingga laju reaksi meningkat signifikan."
      },
      {
        pernyataan: "Serbuk seng (Zn) bereaksi lebih cepat dengan larutan asam klorida dibandingkan lempengan seng bermassa sama karena serbuk memiliki total luas bidang sentuh permukaan yang lebih besar.",
        kunci: "Benar",
        penjelasan: "Semakin luas bidang sentuh zat padat, semakin tinggi frekuensi tumbukan antarpartikel per satuan waktu."
      },
      {
        pernyataan: "Penambahan katalis mempercepat laju reaksi dengan cara meningkatkan nilai entalpi reaksi (ΔH) dan memperbesar energi aktivasi (Ea).",
        kunci: "Salah",
        penjelasan: "Katalis mempercepat reaksi dengan cara menyediakan mekanisme reaksi alternatif dengan energi aktivasi (Ea) yang lebih rendah, tanpa mengubah entalpi reaksi (ΔH)."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: "<strong>Analisis Faktor-Faktor yang Mempengaruhi Laju Reaksi:</strong><br>\n&bull; <strong>Pernyataan 1 (Benar):</strong> Kenaikan suhu meningkatkan kecepatan gerak dan energi kinetik partikel, memperbanyak tumbukan efektif berenergi &ge; Ea.<br>\n&bull; <strong>Pernyataan 2 (Benar):</strong> Serbuk memiliki luas permukaan bidang sentuh jauh lebih besar dibandingkan kepingan padat, sehingga peluang partikel asam bertumbukan dengan atom Zn jauh lebih sering.<br>\n&bull; <strong>Pernyataan 3 (Salah):</strong> Katalis tidak menaikkan Ea melainkan <strong>menurunkan energi aktivasi (Ea)</strong> dan tidak mengubah nilai entalpi reaksi (&Delta;H).<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    kode: "25KIM-PRED3-015"
  },
  {
    id: 16,
    elemen: "Kesetimbangan Kimia",
    subelemen: "Pergeseran Kesetimbangan Kimia",
    indikator: "Menganalisis pergeseran kesetimbangan reaksi eksoterm berdasarkan Asas Le Chatelier.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nReaksi sintesis gas belerang trioksida (SO₃) pada proses kontak berlangsung menurut sistem kesetimbangan eksoterm:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\n2SO₂(g) + O₂(g) &harr; 2SO₃(g) &emsp; &Delta;H = -198 kJ\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTindakan manakah yang dapat menggeser arah kesetimbangan ke arah kanan (meningkatkan hasil produksi gas SO₃)?\n</p>",
    options: [
      { id: "A", text: "Menaikkan suhu sistem reaksi" },
      { id: "B", text: "Memperkecil tekanan sistem dengan memperbesar volume wadah" },
      { id: "C", text: "Mengurangi konsentrasi gas SO₂ di dalam wadah" },
      { id: "D", text: "Menambahkan gas oksigen (O₂) atau memperbesar tekanan sistem" },
      { id: "E", text: "Menambahkan katalis padat V₂O₅ pada suhu sangat tinggi" }
    ],
    kunci: "D",
    pembahasan: "<strong>Penerapan Asas Le Chatelier:</strong><br>\n1. <strong>Pengaruh Konsentrasi:</strong> Menambahkan pereaksi (gas O₂ atau SO₂) akan menggeser kesetimbangan ke arah produk (ke kanan).<br>\n2. <strong>Pengaruh Tekanan / Volume:</strong><br>\n&bull; Koefisien gas di ruas kiri = 2 + 1 = 3 molekul gas.<br>\n&bull; Koefisien gas di ruas kanan = 2 molekul gas.<br>\nMemperbesar tekanan (memperkecil volume) akan menggeser kesetimbangan ke arah jumlah koefisien gas yang lebih kecil (ke kanan / ke arah SO₃).<br>\n3. <strong>Pengaruh Suhu:</strong> Reaksi ke kanan bersifat eksoterm (&Delta;H negatif). Kenaikan suhu justru menggeser kesetimbangan ke arah endoterm (ke kiri).<br><br>\n<strong>Kunci Jawaban: D</strong>",
    kode: "25KIM-PRED3-016"
  },
  {
    id: 17,
    elemen: "Larutan & Kimia Fisika",
    subelemen: "Penurunan Tekanan Uap (Hukum Raoult)",
    indikator: "Menghitung penurunan tekanan uap jenuh larutan nonelektrolit dari data massa dan fraksi mol.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak 18 gram glukosa (C₆H₁₂O₆, Mr = 180 g/mol) dilarutkan ke dalam 90 gram air murni (H₂O, Mr = 18 g/mol) pada suhu 25 &deg;C. Jika tekanan uap jenuh air murni pada suhu tersebut adalah 24,0 mmHg, berapakah penurunan tekanan uap jenuh (&Delta;P) larutan tersebut?\n</p>",
    options: [
      { id: "A", text: "0,47 mmHg" },
      { id: "B", text: "0,96 mmHg" },
      { id: "C", text: "1,20 mmHg" },
      { id: "D", text: "2,40 mmHg" },
      { id: "E", text: "4,80 mmHg" }
    ],
    kunci: "A",
    pembahasan: "<strong>Hukum Raoult (Penurunan Tekanan Uap):</strong><br>\n1. <strong>Menghitung Jumlah Mol Masing-Masing Zat:</strong><br>\n<code>Mol glukosa (n_terlarut) = 18 g / 180 g/mol = 0,10 mol</code><br>\n<code>Mol air (n_pelarut) = 90 g / 18 g/mol = 5,00 mol</code><br><br>\n2. <strong>Menghitung Fraksi Mol Zat Terlarut (Xt):</strong><br>\n<code>Xt = n_terlarut / (n_terlarut + n_pelarut) = 0,10 / (0,10 + 5,00) = 0,10 / 5,10 &approx; 0,0196</code><br><br>\n3. <strong>Menghitung Penurunan Tekanan Uap (&Delta;P):</strong><br>\n<code>&Delta;P = P&deg; &times; Xt = 24,0 mmHg &times; (0,10 / 5,10) = 2,40 / 5,10 &approx; 0,47 mmHg</code><br><br>\n<strong>Kunci Jawaban: A</strong>",
    kode: "25KIM-PRED3-017"
  },
  {
    id: 18,
    elemen: "Larutan & Kimia Fisika",
    subelemen: "Sifat Koligatif Larutan",
    indikator: "Menganalisis fenomena kehidupan sehari-hari yang memanfaatkan prinsip sifat koligatif larutan.",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSifat koligatif larutan hanya bergantung pada jumlah partikel zat terlarut dalam larutan, bukan pada jenis partikelnya. Sifat ini mencakup penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, dan tekanan osmotik.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah dari fenomena teknologi dan kehidupan sehari-hari berikut yang menerapkan prinsip <strong>SIFAT KOLIGATIF LARUTAN</strong>? <em>(Pilih semua jawaban yang benar!)</em>\n</p>",
    options: [
      { id: "A", text: "Penaburan garam dapur (NaCl) pada jalan bersalju untuk mencairkan es di negara beriklim dingin" },
      { id: "B", text: "Penambahan etilen glikol ke dalam cairan radiator mobil untuk mencegah air radiator membeku saat musim dingin" },
      { id: "C", text: "Proses desalinasi pemurnian air laut menjadi air tawar melalui membran osmosis balik (reverse osmosis)" },
      { id: "D", text: "Penggunaan serbuk tawas (Al₂(SO₄)₃) untuk mengendapkan partikel lumpur pada penjernihan air sumur" },
      { id: "E", text: "Pembuatan cairan infus intravena dengan konsentrasi isotonik terhadap tekanan osmotik sel darah merah" }
    ],
    kunci: ["A", "B", "C", "E"],
    pembahasan: "<strong>Analisis Penerapan Sifat Koligatif Larutan:</strong><br>\n&bull; <strong>A (Benar):</strong> Penerapan <em>penurunan titik beku</em> larutan (larutan garam NaCl membeku di bawah 0 &deg;C sehingga es mencair).<br>\n&bull; <strong>B (Benar):</strong> Penerapan <em>penurunan titik beku</em> (etilen glikol sebagai zat antibeku radiator).<br>\n&bull; <strong>C (Benar):</strong> Penerapan <em>tekanan osmotik</em> (osmosis balik memisahkan molekul air dari ion garam menggunakan tekanan melebihi tekanan osmotik air laut).<br>\n&bull; <strong>D (Salah):</strong> Penjernihan air dengan tawas adalah penerapan <em>koagulasi sistem koloid</em>, bukan sifat koligatif.<br>\n&bull; <strong>E (Benar):</strong> Penerapan <em>tekanan osmotik</em> (larutan infus harus isotonik dengan cairan intraseluler agar sel darah tidak mengalami lisis atau krenasi).<br><br>\n<strong>Kunci Jawaban: A, B, C, E</strong>",
    kode: "25KIM-PRED3-018"
  },
  {
    id: 19,
    elemen: "Reaksi Redoks & Elektrokimia",
    subelemen: "Penyetaraan Persamaan Reaksi Redoks",
    indikator: "Menentukan koefisien reaksi redoks Cu dengan asam nitrat dalam suasana asam.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPersamaan reaksi redoks tembaga dengan ion nitrat dalam suasana asam berikut belum setara:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\na Cu(s) + b NO₃⁻(aq) + c H⁺(aq) &rarr; d Cu²⁺(aq) + e NO(g) + f H₂O(l)\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika persamaan reaksi redoks tersebut disetarakan, nilai koefisien a, b, dan e berturut-turut adalah...\n</p>",
    options: [
      { id: "A", text: "1, 2, dan 1" },
      { id: "B", text: "3, 2, dan 2" },
      { id: "C", text: "3, 4, dan 2" },
      { id: "D", text: "2, 3, dan 3" },
      { id: "E", text: "3, 8, dan 4" }
    ],
    kunci: "B",
    pembahasan: "<strong>Penyetaraan Reaksi Redoks Metode Setengah Reaksi (Suasana Asam):</strong><br>\n1. <strong>Reaksi Oksidasi:</strong><br>\n<code>Cu &rarr; Cu²⁺ + 2e⁻ &emsp; (&times; 3)</code><br><br>\n2. <strong>Reaksi Reduksi:</strong><br>\n<code>NO₃⁻ + 4H⁺ + 3e⁻ &rarr; NO + 2H₂O &emsp; (&times; 2)</code><br><br>\n3. <strong>Gabungan Reaksi Setara:</strong><br>\n<code>3Cu(s) + 2NO₃⁻(aq) + 8H⁺(aq) &rarr; 3Cu²⁺(aq) + 2NO(g) + 4H₂O(l)</code><br><br>\nNilai koefisien:<br>\na = 3, b = 2, c = 8, d = 3, e = 2, f = 4.<br>\nMaka koefisien a, b, dan e berturut-turut adalah <strong>3, 2, dan 2</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-019"
  },
  {
    id: 20,
    elemen: "Reaksi Redoks & Elektrokimia",
    subelemen: "Sel Volta & Potensial Sel",
    indikator: "Menghitung potensial sel dan menuliskan notasi sel Volta standar.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui data potensial reduksi standar (E&deg;) dari dua elektroda logam:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs sm:text-sm text-slate-800 space-y-1 mb-3\">\n<div>Zn²⁺(aq) + 2e⁻ &rarr; Zn(s) &emsp; E&deg; = -0,76 Volt</div>\n<div>Cu²⁺(aq) + 2e⁻ &rarr; Cu(s) &emsp; E&deg; = +0,34 Volt</div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNotasi sel Volta dan nilai potensial sel standar (E&deg; sel) yang dihasilkan dari kombinasi kedua elektroda tersebut adalah...\n</p>",
    options: [
      { id: "A", text: "Zn | Zn²⁺ || Cu²⁺ | Cu ; E° sel = +1,10 V" },
      { id: "B", text: "Cu | Cu²⁺ || Zn²⁺ | Zn ; E° sel = +1,10 V" },
      { id: "C", text: "Zn | Zn²⁺ || Cu²⁺ | Cu ; E° sel = -0,42 V" },
      { id: "D", text: "Cu²⁺ | Cu || Zn | Zn²⁺ ; E° sel = +0,42 V" },
      { id: "E", text: "Zn²⁺ | Zn || Cu | Cu²⁺ ; E° sel = -1,10 V" }
    ],
    kunci: "A",
    pembahasan: "<strong>Analisis Sel Volta (Sel Galvani):</strong><br>\n1. <strong>Menentukan Katoda dan Anoda:</strong><br>\n&bull; E&deg; Cu²⁺/Cu (+0,34 V) &gt; E&deg; Zn²⁺/Zn (-0,76 V).<br>\n&bull; Elektroda dengan E&deg; lebih positif bertindak sebagai <strong>Katoda (Reduksi)</strong>: Cu²⁺ + 2e⁻ &rarr; Cu.<br>\n&bull; Elektroda dengan E&deg; lebih negatif bertindak sebagai <strong>Anoda (Oksidasi)</strong>: Zn &rarr; Zn²⁺ + 2e⁻.<br><br>\n2. <strong>Menghitung Potensial Sel Standar (E&deg; sel):</strong><br>\n<code>E&deg; sel = E&deg; katoda - E&deg; anoda = (+0,34 V) - (-0,76 V) = +1,10 Volt</code><br><br>\n3. <strong>Notasi Sel Standar:</strong><br>\n<code>Anoda | Ion Anoda || Ion Katoda | Katoda &rarr; Zn | Zn²⁺ || Cu²⁺ | Cu</code><br><br>\n<strong>Kunci Jawaban: A</strong>",
    kode: "25KIM-PRED3-020"
  },
  {
    id: 21,
    elemen: "Reaksi Redoks & Elektrokimia",
    subelemen: "Pencegahan Korosi Logam",
    indikator: "Mengidentifikasi logam pelindung yang dapat mencegah korosi besi melalui proteksi katodik.",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBesi (E&deg; Fe²⁺/Fe = -0,44 V) mudah mengalami perkaratan (korosi) saat kontak dengan air dan oksigen. Salah satu metode pencegahan korosi pipa besi bawah tanah atau tiang jembatan adalah metode <strong>proteksi katodik</strong> (anoda tumbal / sacrificial anode).\n</p>\n<p class=\"text-xs text-slate-600 mb-2 font-mono\">\nData E&deg;: Mg²⁺/Mg = -2,37 V ; Al³⁺/Al = -1,66 V ; Zn²⁺/Zn = -0,76 V ; Sn²⁺/Sn = -0,14 V ; Cu²⁺/Cu = +0,34 V\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nLogam manakah yang dapat berfungsi efektif sebagai anoda korban (tumbal) untuk melindungi besi dari korosi? <em>(Pilih semua jawaban yang benar!)</em>\n</p>",
    options: [
      { id: "A", text: "Logam Magnesium (Mg)" },
      { id: "B", text: "Logam Aluminium (Al)" },
      { id: "C", text: "Logam Seng (Zn)" },
      { id: "D", text: "Logam Timah (Sn)" },
      { id: "E", text: "Logam Tembaga (Cu)" }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Prinsip Proteksi Katodik (Anoda Tumbal):</strong><br>\nAgar besi bertindak sebagai katoda (terlindung dari oksidasi), logam pelindung harus memiliki nilai <strong>potensial reduksi standar (E&deg;) yang lebih negatif daripada E&deg; besi (-0,44 V)</strong> sehingga logam pelindung tersebut yang akan teroksidasi terlebih dahulu:<br>\n&bull; <strong>Mg (E&deg; = -2,37 V):</strong> Sangat efektif sebagai anoda korban pada pipa bawah tanah.<br>\n&bull; <strong>Al (E&deg; = -1,66 V):</strong> Efektif sebagai anoda korban pada lingkungan laut.<br>\n&bull; <strong>Zn (E&deg; = -0,76 V):</strong> Efektif digunakan pada galvanisasi besi dan lambung kapal.<br>\n&bull; <strong>Sn (-0,14 V) dan Cu (+0,34 V):</strong> Memiliki E&deg; lebih positif dari Fe. Jika lapisan tergores, besi justru akan berkarat lebih cepat.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>",
    kode: "25KIM-PRED3-021"
  },
  {
    id: 22,
    elemen: "Reaksi Redoks & Elektrokimia",
    subelemen: "Hukum Faraday I",
    indikator: "Menghitung massa endapan nikel pada katoda melalui proses elektrolisis.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nArus listrik searah sebesar 5,0 Ampere dialirkan ke dalam sel elektrolisis yang berisi larutan nikel sulfat (NiSO₄) selama 1.930 detik. Jika diketahui massa atom relatif nikel Ar Ni = 59 g/mol dan tetapan Faraday 1 F = 96.500 C/mol elektron, berapakah massa logam nikel yang mengendap pada katoda? (Reaksi katoda: Ni²⁺ + 2e⁻ &rarr; Ni)\n</p>",
    options: [
      { id: "A", text: "1,475 gram" },
      { id: "B", text: "2,950 gram" },
      { id: "C", text: "5,900 gram" },
      { id: "D", text: "11,80 gram" },
      { id: "E", text: "29,50 gram" }
    ],
    kunci: "B",
    pembahasan: "<strong>Perhitungan Hukum Faraday I:</strong><br>\nRumus Hukum Faraday I:<br>\n<code>W = (e &times; i &times; t) / 96.500</code><br><br>\n1. <strong>Massa Ekivalen (e) Nikel:</strong><br>\nKation Ni²⁺ memiliki perubahan biloks n = 2.<br>\n<code>e = Ar / n = 59 / 2 = 29,5 g/ekuivalen</code><br><br>\n2. <strong>Menghitung Massa Endapan (W):</strong><br>\n<code>W = (29,5 &times; 5,0 A &times; 1.930 s) / 96.500</code><br>\nPerhatikan bahwa: 1.930 / 96.500 = 1 / 50 = 0,02 mol elektron.<br>\n<code>W = 29,5 &times; 5,0 &times; 0,02 = 29,5 &times; 0,10 = 2,950 gram</code><br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-022"
  },
  {
    id: 23,
    elemen: "Kimia Organik & Makromolekul",
    subelemen: "Isomeri Senyawa Karbon",
    indikator: "Menentukan pasangan isomer gugus fungsi antara senyawa keton dan aldehida.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu senyawa organik X memiliki rumus molekul C₃H₆O. Senyawa X tidak dapat mereduksi larutan Fehling maupun pereaksi Tollens, namun saat direduksi dengan gas hidrogen menghasilkan senyawa alkohol sekunder (2-propanol). Berdasarkan sifat-sifat tersebut, nama senyawa X beserta hubungan isomernya terhadap senyawa propanal adalah...\n</p>",
    options: [
      { id: "A", text: "Propanon, merupakan isomer posisi dari propanal" },
      { id: "B", text: "Propanon, merupakan isomer gugus fungsi dari propanal" },
      { id: "C", text: "Asam propanoat, merupakan isomer gugus fungsi dari propanal" },
      { id: "D", text: "Metil etil eter, merupakan isomer kerangka dari propanal" },
      { id: "E", text: "Propil alkohol, merupakan isomer geometri dari propanal" }
    ],
    kunci: "B",
    pembahasan: "<strong>Analisis Isomer Gugus Fungsi Senyawa Karbon:</strong><br>\n1. <strong>Identifikasi Senyawa X:</strong><br>\nRumus molekul C₃H₆O mengikuti rumus umum CnH₂nO (alkanal / aldehid atau alkanon / keton).<br>\n&bull; Karena tidak mereduksi Fehling dan Tollens, senyawa X bukan aldehid melainkan <strong>keton (alkanon)</strong>.<br>\n&bull; Reduksi senyawa X menghasilkan 2-propanol (alkohol sekunder), memastikan bahwa senyawa X adalah <strong>propanon (CH₃-CO-CH₃)</strong>.<br><br>\n2. <strong>Hubungan dengan Propanal:</strong><br>\nPropanon (keton) dan propanal (aldehid) memiliki rumus molekul sama (C₃H₆O) tetapi memiliki gugus fungsi yang berbeda (-CO- dan -CHO). Oleh karena itu, keduanya berisomer <strong>gugus fungsi</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-023"
  },
  {
    id: 24,
    elemen: "Kimia Organik & Makromolekul",
    subelemen: "Uji Biokimia Protein & Karbohidrat",
    indikator: "Menganalisis hasil uji positif identifikasi makromolekul karbohidrat, protein, dan pati.",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUji biokimia kualitatif digunakan untuk mengidentifikasi keberadaan makromolekul nutrisi seperti karbohidrat, protein, dan amilum pada sampel bahan makanan.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah dari pasangan pereaksi uji dan hasil pengamatan positif berikut yang <strong>BENAR</strong>? <em>(Pilih semua jawaban yang benar!)</em>\n</p>",
    options: [
      { id: "A", text: "Uji Biuret menghasilkan kompleks warna ungu untuk membuktikan adanya ikatan peptida dalam protein" },
      { id: "B", text: "Uji Xantoproteat menghasilkan warna kuning/jingga pada pemanasan untuk mendeteksi cincin benzena dalam asam amino" },
      { id: "C", text: "Uji Benedict menghasilkan endapan merah bata (Cu₂O) untuk membuktikan adanya gula pereduksi (seperti glukosa dan maltosa)" },
      { id: "D", text: "Uji Iodin menghasilkan warna biru kehitaman untuk membuktikan adanya kandungan amilum (pati)" },
      { id: "E", text: "Uji Molisch menghasilkan endapan putih untuk mendeteksi kandungan lemak jenuh dan trigliserida" }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: "<strong>Analisis Uji Kualitatif Makromolekul Biokimia:</strong><br>\n&bull; <strong>A (Benar):</strong> Reagen Biuret (CuSO₄ + NaOH) bereaksi dengan ikatan peptida (-CO-NH-) membentuk ion kompleks berwarna ungu.<br>\n&bull; <strong>B (Benar):</strong> Uji Xantoproteat (dengan HNO₃ pekat) mendeteksi asam amino aromatik (memiliki cincin benzena seperti tirosin dan fenilalanin) menghasilkan warna kuning hingga jingga.<br>\n&bull; <strong>C (Benar):</strong> Uji Benedict mereduksi ion Cu²⁺ menjadi endapan Cu₂O berwarna merah bata oleh gula pereduksi.<br>\n&bull; <strong>D (Benar):</strong> Uji Iodin bereaksi dengan rantai heliks amilosa membentuk warna biru kehitaman yang khas.<br>\n&bull; <strong>E (Salah):</strong> Uji Molisch adalah uji umum untuk karbohidrat (menghasilkan cincin ungu pada batas dua cairan), bukan untuk lemak/trigliserida.<br><br>\n<strong>Kunci Jawaban: A, B, C, D</strong>",
    kode: "25KIM-PRED3-024"
  },
  {
    id: 25,
    elemen: "Kimia Lingkungan & Kimia Hijau",
    subelemen: "Pencemaran Udara & Hujan Asam",
    indikator: "Mengevaluasi efektivitas teknologi flue-gas desulfurization (scrubber CaCO3) dalam mengatasi polusi hujan asam.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGas buang pembakaran batu bara mengandung sulfur dioksida (SO₂) yang merupakan prekursor utama hujan asam. Dalam prinsip Kimia Hijau (Green Chemistry), teknologi <em>flue-gas desulfurization</em> (FGD) digunakan untuk menyerap gas SO₂ cerobong pabrik menggunakan semprotan bubur batu kapur (CaCO₃).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBagaimanakah prinsip reaksi netralisasi dan produk ramah lingkungan yang dihasilkan dari proses scrubber tersebut?\n</p>",
    options: [
      { id: "A", text: "Gas SO₂ direduksi menggunakan gas metana menjadi gas hidrogen sulfida yang berbau busuk." },
      { id: "B", text: "Gas SO₂ bereaksi dengan CaCO₃ dan oksigen menghasilkan endapan kalsium sulfat (gipsum, CaSO₄·2H₂O) yang aman dan bernilai ekonomis." },
      { id: "C", text: "Gas SO₂ bereaksi dengan gas karbon monoksida membentuk gas klorin berbahaya." },
      { id: "D", text: "Gas SO₂ diencerkan secara fisika menggunakan air murni bertekanan tinggi tanpa terjadi reaksi kimia netralisasi." },
      { id: "E", text: "Gas SO₂ disaring menggunakan membran polietilena berpori tanpa bahan penetral basa." }
    ],
    kunci: "B",
    pembahasan: "<strong>Solusi Kimia Hijau Mengatasi Hujan Asam (Flue-Gas Desulfurization):</strong><br>\n1. <strong>Reaksi Netralisasi Emisi Asam:</strong> Gas SO₂ bersifat oksida asam. Dengan melewatkan gas cerobong ke dalam <em>wet scrubber</em> yang disemprot suspensi batu kapur (CaCO₃), gas SO₂ dinetralkan secara efisien:<br>\n<code>CaCO₃(s) + SO₂(g) + 1/2 O₂(g) + 2H₂O(l) &rarr; CaSO₄&middot;2H₂O(s) + CO₂(g)</code><br><br>\n2. <strong>Keuntungan Ekologis &amp; Ekonomis:</strong> Endapan kalsium sulfat dihidrat (gipsum sintesis) yang dihasilkan tidak beracun dan dapat dimanfaatkan kembali sebagai bahan baku industri semen dan papan dinding (drywall).<br><br>\n<strong>Kunci Jawaban: B</strong>",
    kode: "25KIM-PRED3-025"
  }
];

// Periksa bahwa tidak ada tanda dolar ($) sama sekali dalam data!
const jsonStr = JSON.stringify(tkaPaket3Data);
if (jsonStr.includes('$')) {
  console.error("❌ PERINGATAN: Masih ditemukan tanda dolar ($) dalam dataset!");
  process.exit(1);
} else {
  console.log("✅ Dataset 100% BEBAS dari tanda dolar ($)!");
}

const fileContent = `// tka/js/tka-paket3.js
// Bank Data Lengkap 25 Soal TKA Kimia SMA Paket 3 (Prediksi Resmi BPPP / SNBT / UTBK 2025/2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Kimia SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaPaket3Data = ${JSON.stringify(tkaPaket3Data, null, 2)};

if (typeof window !== 'undefined') {
  window.tkaPaket3Data = tkaPaket3Data;
  window.tkaPackages = window.tkaPackages || {};
  window.tkaPackages['paket3'] = {
    id: "paket3",
    title: "Paket 3: Prediksi Resmi TKA Kimia SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 3 (Prediksi 2025/2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    get data() { return tkaPaket3Data; }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaPaket3Data };
}
`;

fs.writeFileSync(path.join(__dirname, '../tka/js/tka-paket3.js'), fileContent, 'utf8');
console.log('🎉 tka/js/tka-paket3.js berhasil diperbarui dengan 25 butir soal standar resmi!');

// 1. Update tka-data.js
const tkaDataPath = path.join(__dirname, '../tka/js/tka-data.js');
let tkaDataContent = fs.readFileSync(tkaDataPath, 'utf8');
tkaDataContent = tkaDataContent.replace(
  /title:\s*"Paket 3:[^"]*"/,
  'title: "Paket 3: Prediksi Resmi TKA Kimia SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)"'
);
tkaDataContent = tkaDataContent.replace(
  /shortTitle:\s*"Paket 3[^"]*"/,
  'shortTitle: "Paket 3 (Prediksi 2025/2026 • 25 Soal)"'
);
tkaDataContent = tkaDataContent.replace(
  /badge:\s*"Prediksi\s*\d+\s*Soal"/,
  'badge: "Prediksi 25 Soal"'
);
tkaDataContent = tkaDataContent.replace(
  /total:\s*40/,
  'total: 25'
);
fs.writeFileSync(tkaDataPath, tkaDataContent, 'utf8');
console.log('🎉 tka/js/tka-data.js paket3 metadata berhasil diselaraskan (25 soal)!');

// 2. Update tka-registry.js
const tkaRegPath = path.join(__dirname, '../tka/js/tka-registry.js');
let tkaRegContent = fs.readFileSync(tkaRegPath, 'utf8');
// Update totalSoal untuk kimia menjadi 73 (23 + 25 + 25)
tkaRegContent = tkaRegContent.replace(
  /(id:\s*"kimia"[\s\S]*?totalSoal:\s*)\d+/,
  '$173'
);
fs.writeFileSync(tkaRegPath, tkaRegContent, 'utf8');
console.log('🎉 tka/js/tka-registry.js totalSoal Kimia diset ke 73 (23 + 25 + 25)!');

// 3. Update verify-kimia-all.js
const verifyPath = path.join(__dirname, 'verify-kimia-all.js');
let verifyContent = fs.readFileSync(verifyPath, 'utf8');
verifyContent = verifyContent.replace(
  /assert\(tkaPaket3Data\.length === \d+,/g,
  "assert(tkaPaket3Data.length === 25,"
);
if (!verifyContent.includes("includes('$')")) {
  verifyContent = verifyContent.replace(
    /assert\(tkaPaket3Data\.length === 25,[^\n]+\n/g,
    "assert(tkaPaket3Data.length === 25, `Paket 3 harus berisi 25 soal, ditemukan: ${tkaPaket3Data.length}`);\nassert(!JSON.stringify(tkaPaket3Data).includes('$'), 'Paket 3 tidak boleh mengandung tanda dolar ($)');\n"
  );
}
fs.writeFileSync(verifyPath, verifyContent, 'utf8');
console.log('🎉 scripts/verify-kimia-all.js diperbarui dengan validasi 25 soal & no-dollar check!');

