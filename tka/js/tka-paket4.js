// tka/js/tka-paket4.js
// Bank Data Lengkap 30 Soal TKA Kimia SMA Paket 4 (Try Out TKA-1 Prosus Inten Kimia SMA 2025/2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaPaket4Data = [
  {
    "id": 1,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Konsentrasi Larutan (Molalitas, Molaritas, Normalitas & Kadar)",
    "indikator": "Memverifikasi kebenaran hasil perhitungan konsentrasi larutan dalam berbagai satuan (molalitas, molaritas, dan persen massa).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang siswa melakukan perhitungan nilai konsentrasi berdasarkan data-data yang ada di dalam empat wadah berikut:\n</p>\n<div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 my-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-300 rounded-xl text-center shadow-sm\">\n    <div class=\"text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1\">Wadah 1</div>\n    <div class=\"p-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 mb-2\">\n      90 gram C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (Mr = 180)<br>dalam 100 gram air\n    </div>\n    <div class=\"text-xs font-semibold text-slate-900 bg-indigo-50 py-1 px-2 rounded\">Hasil hitung: 2 molal</div>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-300 rounded-xl text-center shadow-sm\">\n    <div class=\"text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1\">Wadah 2</div>\n    <div class=\"p-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 mb-2\">\n      0,2 N H<sub>2</sub>SO<sub>4</sub> 100 mL\n    </div>\n    <div class=\"text-xs font-semibold text-slate-900 bg-indigo-50 py-1 px-2 rounded\">Hasil hitung: 0,1 Molar</div>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-300 rounded-xl text-center shadow-sm\">\n    <div class=\"text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1\">Wadah 3</div>\n    <div class=\"p-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 mb-2\">\n      30 gram NaOH<br>dalam 70 gram air\n    </div>\n    <div class=\"text-xs font-semibold text-slate-900 bg-indigo-50 py-1 px-2 rounded\">Hasil hitung: Kadar NaOH = 30%</div>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-300 rounded-xl text-center shadow-sm\">\n    <div class=\"text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1\">Wadah 4</div>\n    <div class=\"p-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 mb-2\">\n      Larutan 30% CH<sub>3</sub>COOH (Mr = 60)<br>Massa jenis = 1,04 g/mL\n    </div>\n    <div class=\"text-xs font-semibold text-slate-900 bg-indigo-50 py-1 px-2 rounded\">Hasil hitung: 4 Molar</div>\n  </div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan hasil hitungan nilai konsentrasi siswa di atas, maka jawaban yang <strong>benar</strong> adalah...\n</p>",
    "options": [
      { "id": "A", "text": "1 dan 2" },
      { "id": "B", "text": "2 dan 3" },
      { "id": "C", "text": "2 dan 4" },
      { "id": "D", "text": "2 saja" },
      { "id": "E", "text": "4 saja" }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Evaluasi Perhitungan Konsentrasi pada Tiap Wadah:</strong><br>\n1. <strong>Wadah 1 (Salah):</strong><br>\n<code>m = (massa / Mr) &times; (1000 / massa pelarut) = (90 / 180) &times; (1000 / 100) = 0,5 &times; 10 = 5 molal</code> (tertulis 2 molal).<br><br>\n2. <strong>Wadah 2 (Benar):</strong><br>\nHubungan Normalitas (N) dan Molaritas (M): <code>N = M &times; a</code> (valensi asam H<sub>2</sub>SO<sub>4</sub> adalah <code>a = 2</code>).<br>\n<code>M = N / a = 0,2 / 2 = 0,1 Molar</code>.<br><br>\n3. <strong>Wadah 3 (Benar):</strong><br>\n<code>% massa NaOH = [massa NaOH / (massa NaOH + massa air)] &times; 100% = [30 / (30 + 70)] &times; 100% = 30%</code>.<br><br>\n4. <strong>Wadah 4 (Salah):</strong><br>\n<code>M = (% &times; 10 &times; &rho;) / Mr = (30 &times; 10 &times; 1,04) / 60 = 5,2 Molar</code> (tertulis 4 Molar).<br><br>\nJadi, perhitungan yang benar adalah <strong>2 dan 3</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25KIM-INTEN4-001"
  },
  {
    "id": 2,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Pereaksi Pembatas & Perhitungan Stoikiometri",
    "indikator": "Menganalisis pereaksi pembatas, jumlah mol produk, dan jumlah partikel hasil reaksi antara logam besi dan gas oksigen.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nJika 5,6 gram Fe direaksikan dengan 3,2 gram gas oksigen untuk membentuk senyawa besi(III) oksida menurut reaksi (belum setara):\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\nFe(s) + O<sub>2</sub>(g) &rarr; Fe<sub>2</sub>O<sub>3</sub>(s)\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan reaksi tersebut, pilihlah pernyataan yang benar berkaitan dengan zat reaktan dan produk! <em>(Jawaban benar lebih dari satu! Bilangan Avogadro = 6,02 &times; 10<sup>23</sup>; Ar Fe = 56; H = 1; O = 16)</em>\n</p>",
    "options": [
      { "id": "A", "text": "Jumlah molekul Fe₂O₃ yang terbentuk pada reaksi tersebut adalah 3,01 × 10²² (pada naskah asli tertulis 3,01 × 10²⁰)" },
      { "id": "B", "text": "Fe adalah pereaksi pembatas" },
      { "id": "C", "text": "Gas oksigen yang bereaksi adalah 0,025 mol" },
      { "id": "D", "text": "Volume O₂ yang sisa dalam keadaan STP adalah 11,2 L" },
      { "id": "E", "text": "Jumlah mol Fe₂O₃ yang dihasilkan sebesar 0,025 mol" }
    ],
    "kunci": ["A", "B"],
    "pembahasan": "<strong>Analisis Stoikiometri &amp; Pereaksi Pembatas:</strong><br>\n1. <strong>Persamaan Reaksi Setara:</strong><br>\n<code>4Fe(s) + 3O<sub>2</sub>(g) &rarr; 2Fe<sub>2</sub>O<sub>3</sub>(s)</code><br><br>\n2. <strong>Mol Mula-Mula:</strong><br>\n&bull; <code>n(Fe) = 5,6 / 56 = 0,10 mol</code><br>\n&bull; <code>n(O<sub>2</sub>) = 3,2 / 32 = 0,10 mol</code><br><br>\n3. <strong>Penentuan Pereaksi Pembatas (mol / koefisien):</strong><br>\n&bull; Fe : <code>0,10 / 4 = 0,025</code> (terkecil &rarr; <strong>Fe adalah pereaksi pembatas, Opsi B Benar</strong>)<br>\n&bull; O<sub>2</sub> : <code>0,10 / 3 = 0,033</code> (bersisa)<br><br>\n4. <strong>Perhitungan Reaktan &amp; Produk:</strong><br>\n&bull; Mol O<sub>2</sub> yang bereaksi = <code>(3/4) &times; 0,10 = 0,075 mol</code> (Opsi C salah).<br>\n&bull; Mol O<sub>2</sub> sisa = <code>0,10 - 0,075 = 0,025 mol</code> &rarr; Volume STP = <code>0,025 &times; 22,4 = 0,56 L</code> (Opsi D salah).<br>\n&bull; Mol Fe<sub>2</sub>O<sub>3</sub> yang terbentuk = <code>(2/4) &times; 0,10 = 0,05 mol</code> (Opsi E salah).<br>\n&bull; Jumlah partikel Fe<sub>2</sub>O<sub>3</sub> = <code>0,05 &times; 6,02 &times; 10<sup>23</sup> = 3,01 &times; 10<sup>22</sup></code> molekul (<strong>Opsi A Benar</strong>).<br><br>\n<strong>Kunci Jawaban: A, B</strong>",
    "kode": "25KIM-INTEN4-002"
  },
  {
    "id": 3,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Hukum Kelipatan Perbandingan (Hukum Dalton)",
    "indikator": "Menghitung perbandingan massa unsur oksigen pada dua senyawa fosforus oksida untuk massa fosforus yang tetap.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDua senyawa yang berbeda dibentuk dari dua unsur yang sama; untuk massa salah satu unsur yang sama, perbandingan massa unsur yang lain dalam senyawa-senyawa itu merupakan bilangan bulat dan sederhana.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan keterangan di atas, jika unsur P dan O membentuk 2 macam senyawa di mana massa P pada senyawa I = <sup>31</sup>/<sub>35</sub> bagian dan massa O pada senyawa II = <sup>40</sup>/<sub>71</sub> bagian, maka untuk massa P yang sama, perbandingan massa O pada senyawa I dan II adalah...\n</p>",
    "options": [
      { "id": "A", "text": "8 : 70" },
      { "id": "B", "text": "7 : 60" },
      { "id": "C", "text": "6 : 50" },
      { "id": "D", "text": "4 : 40" },
      { "id": "E", "text": "2 : 30" }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Penerapan Hukum Kelipatan Perbandingan (Dalton):</strong><br>\n&bull; <strong>Senyawa I:</strong><br>\nMassa P = <sup>31</sup>/<sub>35</sub> bagian, maka massa O = <code>1 - 31/35 = 4/35</code> bagian.<br>\nPerbandingan massa P : O pada Senyawa I = <code>31 : 4</code>.<br><br>\n&bull; <strong>Senyawa II:</strong><br>\nMassa O = <sup>40</sup>/<sub>71</sub> bagian, maka massa P = <code>1 - 40/71 = 31/71</code> bagian.<br>\nPerbandingan massa P : O pada Senyawa II = <code>31 : 40</code>.<br><br>\n&bull; Karena bagian massa P pada kedua senyawa sudah sama (yaitu 31 bagian), maka perbandingan massa O pada Senyawa I dan Senyawa II adalah:<br>\n<code>Massa O (I) : Massa O (II) = 4 : 40</code>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-INTEN4-003"
  },
  {
    "id": 4,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Hukum Avogadro & Gas Ideal",
    "indikator": "Menghitung massa total tabung gas yang diisi gas NO pada suhu dan tekanan yang sama dengan gas hidrogen.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah tabung gas dalam keadaan kosong beratnya 12 kg. Tabung ini diisi dengan gas hidrogen (H<sub>2</sub>) yang suhunya T &deg;C sampai tekanan P atm. Ternyata berat tabung sekarang menjadi 15 kg.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKemudian tabung dikosongkan lalu diisi dengan gas NO yang suhunya T &deg;C sampai tekanan P atm. Berapa kg berat tabung sekarang? <em>(Ar N = 14; Ar O = 16; Ar H = 1)</em>\n</p>",
    "options": [
      { "id": "A", "text": "17 kg" },
      { "id": "B", "text": "26 kg" },
      { "id": "C", "text": "39 kg" },
      { "id": "D", "text": "57 kg" },
      { "id": "E", "text": "63 kg" }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Penerapan Hukum Avogadro pada Volume, Suhu, dan Tekanan Tetap:</strong><br>\n1. <strong>Menghitung Mol Gas H<sub>2</sub>:</strong><br>\nMassa gas H<sub>2</sub> = <code>15 kg - 12 kg = 3 kg</code>.<br>\n<code>Mr H<sub>2</sub> = 2 &times; 1 = 2</code>.<br>\n<code>n(H<sub>2</sub>) = 3 kg / 2 = 1,5 kmol</code>.<br><br>\n2. <strong>Menghitung Massa Gas NO dan Berat Tabung Total:</strong><br>\nKarena tabung yang sama diisi pada suhu T &deg;C dan tekanan P atm yang sama, maka jumlah mol gas NO sama dengan jumlah mol gas H<sub>2</sub>:<br>\n<code>n(NO) = n(H<sub>2</sub>) = 1,5 kmol</code>.<br>\nDengan <code>Mr NO = 14 + 16 = 30</code>, maka:<br>\n<code>Massa gas NO = 1,5 kmol &times; 30 = 45 kg</code>.<br>\nBerat tabung sekarang = <code>Berat tabung kosong + Massa gas NO = 12 kg + 45 kg = 57 kg</code>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-INTEN4-004"
  },
  {
    "id": 5,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Hukum Kekekalan Massa (Lavoisier)",
    "indikator": "Menerapkan hukum kekekalan massa pada perubahan wujud zat di dalam sistem tertutup.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu cuplikan yodium padat (I<sub>2</sub>) sebanyak 1,5 g diletakkan dalam tabung, kemudian tabung ditutup rapat (dilas) setelah udara dikeluarkan dari tabung. Tabung dan yodium padat mempunyai berat total 28,0 g.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTabung lalu dipanaskan hingga seluruh yodium menguap dan tabung terisi gas yodium. Berat total setelah pemanasan adalah...\n</p>",
    "options": [
      { "id": "A", "text": "< 27 g" },
      { "id": "B", "text": "27,0 g" },
      { "id": "C", "text": "28,0 g" },
      { "id": "D", "text": "< 28,0 g" },
      { "id": "E", "text": "> 28,0 g" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Hukum Kekekalan Massa (Antoine Laurent Lavoisier):</strong><br>\nDi dalam sistem tertutup rapat (tabung yang dilas), tidak ada zat yang keluar maupun masuk ke dalam tabung. Perubahan wujud yodium dari padat menjadi gas (sublimasi/penguapan) tidak mengubah jumlah partikel maupun massa zat di dalamnya.<br>\nOleh karena itu, berat total tabung beserta isinya setelah pemanasan tetap <strong>28,0 g</strong>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-005"
  },
  {
    "id": 6,
    "elemen": "Larutan & Sifat Koligatif",
    "subelemen": "Sifat Koligatif Larutan Elektrolit",
    "indikator": "Mengevaluasi titik didih, titik beku, dan sifat ionisasi larutan NaOH.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSifat koligatif larutan adalah sifat larutan yang hanya ditentukan oleh banyaknya partikel zat terlarut, tidak dipengaruhi oleh jenis zat pelarut. Seorang siswa melakukan percobaan kimia dengan mengambil 4 gram NaOH (Mr = 40) dan melarutkannya ke dalam 100 gram air.\n</p>\n<p class=\"font-medium text-slate-800 mb-2\">Dari data yang ada, siswa tersebut membuat kesimpulan sebagai berikut:</p>\n<ol class=\"list-decimal list-inside text-sm text-slate-700 space-y-1 mb-3 bg-slate-50 p-3 rounded-lg border border-slate-200\">\n  <li>Dengan K<sub>b</sub> air = 0,5 &deg;C/m, maka titik didih larutan NaOH adalah 100,1 &deg;C</li>\n  <li>Dengan K<sub>f</sub> air = 1,8 &deg;C/m, maka titik beku larutan NaOH adalah &minus;1,8 &deg;C</li>\n  <li>NaOH terionisasi sempurna dalam air menjadi ion Na<sup>+</sup> dan ion OH<sup>&minus;</sup></li>\n  <li>Larutan NaOH yang dihasilkan lebih cepat membeku dibandingkan dengan pelarut air</li>\n</ol>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKesimpulan yang benar dari siswa di atas adalah...\n</p>",
    "options": [
      { "id": "A", "text": "1 saja" },
      { "id": "B", "text": "2 saja" },
      { "id": "C", "text": "3 saja" },
      { "id": "D", "text": "1 dan 3" },
      { "id": "E", "text": "2 dan 4" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Analisis Sifat Koligatif Larutan Elektrolit NaOH:</strong><br>\n1. <strong>Molalitas &amp; Faktor van 't Hoff:</strong><br>\n<code>m = (4 / 40) &times; (1000 / 100) = 0,1 &times; 10 = 1 molal</code>.<br>\nNaOH adalah basa kuat (elektrolit kuat) yang terionisasi sempurna dalam air: <code>NaOH(aq) &rarr; Na<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq)</code> sehingga <code>i = n = 2</code> (<strong>Kesimpulan 3 Benar</strong>).<br><br>\n2. <strong>Evaluasi Titik Didih &amp; Titik Beku:</strong><br>\n&bull; <code>&Delta;T<sub>b</sub> = m &times; K<sub>b</sub> &times; i = 1 &times; 0,5 &times; 2 = 1,0 &deg;C</code> &rarr; <code>T<sub>b</sub> = 100 + 1,0 = 101,0 &deg;C</code> (Kesimpulan 1 salah).<br>\n&bull; <code>&Delta;T<sub>f</sub> = m &times; K<sub>f</sub> &times; i = 1 &times; 1,8 &times; 2 = 3,6 &deg;C</code> &rarr; <code>T<sub>f</sub> = &minus;3,6 &deg;C</code> (Kesimpulan 2 salah karena belum mengalikan faktor van 't Hoff <code>i = 2</code>).<br>\n&bull; Karena titik beku larutan (&minus;3,6 &deg;C) lebih rendah dari air murni (0 &deg;C), larutan NaOH lebih sukar/lama membeku dibanding air (Kesimpulan 4 salah).<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-006"
  },
  {
    "id": 7,
    "elemen": "Larutan & Sifat Koligatif",
    "subelemen": "Penerapan Sifat Koligatif dalam Kehidupan Sehari-hari",
    "indikator": "Menentukan ketepatan pasangan fenomena sehari-hari dengan jenis sifat koligatif larutannya.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPenerapan sifat koligatif larutan banyak kita temukan dalam kehidupan sehari-hari.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukanlah apakah pernyataan penerapan sifat koligatif larutan pada tabel berikut <strong>Benar (Tepat)</strong> atau <strong>Salah (Tidak Tepat)</strong>!\n</p>",
    "items": [
      {
        "pernyataan": "Penambahan garam ketika memasak dilakukan ketika air mendidih, tujuannya sebagai tindak pencegahan agar pada proses pemasakan tidak terlalu lama adalah penerapan tekanan osmosis larutan.",
        "kunci": "Salah",
        "penjelasan": "Penambahan garam untuk meningkatkan suhu didih air saat memasak merupakan penerapan kenaikan titik didih (ΔTb), bukan tekanan osmosis."
      },
      {
        "pernyataan": "Mencairkan salju di jalan raya menggunakan campuran garam NaCl dan CaCl₂ adalah penerapan penurunan titik beku larutan.",
        "kunci": "Benar",
        "penjelasan": "Penaburan garam NaCl dan CaCl₂ menurunkan titik beku air/salju di bawah 0 °C sehingga salju mencair pada suhu lingkungan yang dingin."
      },
      {
        "pernyataan": "Mesin pencuci darah yang digunakan oleh pasien penderita gagal ginjal (mesin dialisis) cara kerjanya adalah penerapan tekanan osmosis larutan.",
        "kunci": "Benar",
        "penjelasan": "Cuci darah (hemodialisis) bekerja berdasarkan prinsip dialisis dan tekanan osmotik antara darah pasien dengan cairan dialisat melalui membran semipermeabel."
      },
      {
        "pernyataan": "Fenomena tingginya kepekatan garam pada kolam apung buatan (atau Laut Mati) yang airnya sukar menguap di bawah terik matahari merupakan contoh klasik penerapan penurunan tekanan uap larutan dalam buku teks kimia SMA.",
        "kunci": "Benar",
        "penjelasan": "Dalam kurikulum Kimia SMA, kolam apung dan Laut Mati merupakan contoh fenomena penurunan tekanan uap jenuh larutan akibat tingginya fraksi mol zat terlarut non-volatil (garam)."
      }
    ],
    "kunci": ["Salah", "Benar", "Benar", "Benar"],
    "pembahasan": "<strong>Analisis Penerapan Sifat Koligatif Larutan:</strong><br>\n&bull; <strong>Pernyataan 1 (Salah / Tidak Tepat):</strong> Penambahan garam saat memasak berhubungan dengan <strong>kenaikan titik didih (&Delta;T<sub>b</sub>)</strong>, bukan tekanan osmosis.<br>\n&bull; <strong>Pernyataan 2 (Benar / Tepat):</strong> Pencairan salju dengan garam NaCl dan CaCl<sub>2</sub> adalah penerapan <strong>penurunan titik beku (&Delta;T<sub>f</sub>)</strong>.<br>\n&bull; <strong>Pernyataan 3 (Benar / Tepat):</strong> Mesin pencuci darah (hemodialisis) bekerja dengan prinsip <strong>tekanan osmosis (&pi;)</strong>.<br>\n&bull; <strong>Pernyataan 4 (Benar / Tepat dalam konteks contoh sifat koligatif SMA):</strong> Kolam apung / Laut Mati yang berkadar garam sangat tinggi dijadikan contoh fenomena <strong>penurunan tekanan uap (&Delta;P)</strong> karena air pelarutnya sukar menguap (catatan: gaya apungnya sendiri dijelaskan oleh hukum Archimedes/massa jenis).<br><br>\n<strong>Kunci Jawaban: Salah, Benar, Benar, Benar</strong>",
    "kode": "25KIM-INTEN4-007"
  },
  {
    "id": 8,
    "elemen": "Redoks & Elektrokimia",
    "subelemen": "Konsep Reaksi Reduksi dan Oksidasi",
    "indikator": "Mengidentifikasi persamaan reaksi yang mengalami penurunan bilangan oksidasi (reaksi reduksi).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nReaksi kimia yang disertai perubahan bilangan oksidasi disebut reaksi redoks. Contoh reaksi redoks dalam kehidupan sehari-hari antara lain reaksi pembakaran dan perkaratan. Perhatikan persamaan reaksi berikut!\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm text-slate-800 space-y-1 mb-3\">\n  <div>1) FeO &rarr; Fe<sub>2</sub>O<sub>3</sub></div>\n  <div>2) CoCl<sub>2</sub> &rarr; CoCl<sub>3</sub></div>\n  <div>3) MnO<sub>4</sub><sup>&minus;</sup> &rarr; MnO<sub>2</sub></div>\n  <div>4) HNO<sub>3</sub> &rarr; H<sub>2</sub>O + NO</div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nReaksi yang merupakan contoh <strong>reaksi reduksi</strong> adalah nomor...\n</p>",
    "options": [
      { "id": "A", "text": "1 dan 2" },
      { "id": "B", "text": "1 dan 3" },
      { "id": "C", "text": "2 dan 3" },
      { "id": "D", "text": "2 dan 4" },
      { "id": "E", "text": "3 dan 4" }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Analisis Perubahan Bilangan Oksidasi:</strong><br>\n&bull; <strong>1) FeO &rarr; Fe<sub>2</sub>O<sub>3</sub>:</strong> Biloks Fe berubah dari <code>+2</code> menjadi <code>+3</code> (naik &rarr; <em>Oksidasi</em>).<br>\n&bull; <strong>2) CoCl<sub>2</sub> &rarr; CoCl<sub>3</sub>:</strong> Biloks Co berubah dari <code>+2</code> menjadi <code>+3</code> (naik &rarr; <em>Oksidasi</em>).<br>\n&bull; <strong>3) MnO<sub>4</sub><sup>&minus;</sup> &rarr; MnO<sub>2</sub>:</strong> Biloks Mn berubah dari <code>+7</code> menjadi <code>+4</code> (turun &rarr; <strong>Reduksi</strong>).<br>\n&bull; <strong>4) HNO<sub>3</sub> &rarr; H<sub>2</sub>O + NO:</strong> Biloks N berubah dari <code>+5</code> menjadi <code>+2</code> (turun &rarr; <strong>Reduksi</strong>).<br><br>\nJadi, yang merupakan reaksi reduksi adalah nomor <strong>3 dan 4</strong>.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    "kode": "25KIM-INTEN4-008"
  },
  {
    "id": 9,
    "elemen": "Redoks & Elektrokimia",
    "subelemen": "Oksidator, Reduktor, dan Kestabilan Ion",
    "indikator": "Mengevaluasi pernyataan yang tidak tepat mengenai reaksi redoks antara ion permanganat dan ion besi(II).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui persamaan reaksi redoks:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\nMnO<sub>4</sub><sup>&minus;</sup> + H<sup>+</sup> + Fe<sup>2+</sup> &rarr; Mn<sup>2+</sup> + Fe<sup>3+</sup> + H<sub>2</sub>O\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPernyataan yang <strong>tidak benar</strong> dari reaksi di atas adalah...\n</p>",
    "options": [
      { "id": "A", "text": "Bilangan oksidasi Mn berubah dari +7 menjadi +2" },
      { "id": "B", "text": "Ion Fe²⁺ merupakan reduktor" },
      { "id": "C", "text": "Hasil reduksi adalah ion Mn²⁺" },
      { "id": "D", "text": "Ion Fe²⁺ lebih stabil daripada ion Fe³⁺" },
      { "id": "E", "text": "MnO₄⁻ dapat mengoksidasi Fe²⁺" }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Analisis Reaksi Redoks Permanganometri:</strong><br>\n&bull; <strong>A (Benar):</strong> Biloks Mn dalam MnO<sub>4</sub><sup>&minus;</sup> adalah +7 dan turun menjadi +2 dalam Mn<sup>2+</sup>.<br>\n&bull; <strong>B (Benar):</strong> Ion Fe<sup>2+</sup> mengalami oksidasi menjadi Fe<sup>3+</sup> sehingga bertindak sebagai reduktor (pereduksi).<br>\n&bull; <strong>C (Benar):</strong> MnO<sub>4</sub><sup>&minus;</sup> mengalami reduksi menghasilkan produk reduksi berupa ion Mn<sup>2+</sup>.<br>\n&bull; <strong>D (Tidak Benar):</strong> Ion Fe<sup>3+</sup> (konfigurasi <code>[Ar] 3d<sup>5</sup></code>, subkulit d terisi setengah penuh) <strong>lebih stabil</strong> dibandingkan ion Fe<sup>2+</sup> (<code>[Ar] 3d<sup>6</sup></code>). Oleh sebab itu Fe<sup>2+</sup> mudah teroksidasi menjadi Fe<sup>3+</sup>.<br>\n&bull; <strong>E (Benar):</strong> MnO<sub>4</sub><sup>&minus;</sup> adalah oksidator kuat yang mengoksidasi Fe<sup>2+</sup> menjadi Fe<sup>3+</sup>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-INTEN4-009"
  },
  {
    "id": 10,
    "elemen": "Redoks & Elektrokimia",
    "subelemen": "Sel Volta (Sel Galvani)",
    "indikator": "Menganalisis proses aliran elektron, perubahan massa elektroda, dan konsentrasi ion pada sel Volta Zn-Cu.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada sel Volta energi kimia diubah menjadi energi listrik. Sel ini mempunyai elektroda logam yang dicelupkan ke dalam larutan garamnya seperti ditunjukkan pada gambar berikut:\n</p>\n<div class=\"my-3 flex justify-center\">\n  <img src=\"img/kimia-paket5/image2.jpg\" alt=\"Rangkaian Sel Volta Zn-Cu\" class=\"max-w-xs sm:max-w-sm rounded-xl border border-slate-200 shadow-sm\" />\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nDari rangkaian sel Volta di atas, maka kesimpulan yang <strong>Tidak Tepat</strong> adalah...\n</p>",
    "options": [
      { "id": "A", "text": "Elektroda seng teroksidasi menjadi Zn²⁺ dan elektron yang dibebaskan mengalir melalui kawat penghantar menuju elektroda Cu" },
      { "id": "B", "text": "Pada elektroda Cu, elektron-elektron diikat oleh ion Cu²⁺ dari larutan menjadi Cu dan selanjutnya melekat pada batang Cu" },
      { "id": "C", "text": "Akibat Zn teroksidasi pada anoda maka jumlah ion Zn²⁺ lebih sedikit dari jumlah SO₄²⁻" },
      { "id": "D", "text": "Elektroda Zn (batang Zn) akan berkurang beratnya" },
      { "id": "E", "text": "Konsentrasi larutan CuSO₄ akan semakin encer" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Analisis Mekanisme Kerja Sel Volta (Zn | ZnSO<sub>4</sub> || CuSO<sub>4</sub> | Cu):</strong><br>\n&bull; <strong>Anoda (&minus;):</strong> Logam Zn mengalami oksidasi: <code>Zn(s) &rarr; Zn<sup>2+</sup>(aq) + 2e<sup>&minus;</sup></code>. Akibatnya, batang Zn terkikis (beratnya berkurang) dan <strong>jumlah ion Zn<sup>2+</sup> di dalam larutan bertambah banyak (melebihi jumlah ion SO<sub>4</sub><sup>2&minus;</sup>)</strong>, sehingga ion Cl<sup>&minus;</sup> dari jembatan garam KCl bergerak masuk ke ruang anoda untuk menetralkan kelebihan muatan positif.<br>\n&bull; <strong>Katoda (+):</strong> Ion Cu<sup>2+</sup> dari larutan CuSO<sub>4</sub> menangkap elektron: <code>Cu<sup>2+</sup>(aq) + 2e<sup>&minus;</sup> &rarr; Cu(s)</code>. Endapan Cu menempel pada katoda dan konsentrasi CuSO<sub>4</sub> menjadi semakin encer.<br><br>\nDengan demikian, kesimpulan yang <strong>Tidak Tepat</strong> adalah <strong>C</strong>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-010"
  },
  {
    "id": 11,
    "elemen": "Redoks & Elektrokimia",
    "subelemen": "Sel Elektrolisis & Hukum Faraday",
    "indikator": "Menghitung pH larutan dan menganalisis reaksi elektroda pada elektrolisis larutan ZnSO4.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKe dalam 1 liter larutan ZnSO<sub>4</sub> dialirkan listrik sebesar 0,2 F sehingga di katoda diendapkan 6,5 gram logam zink (Ar Zn = 65).\n</p>\n<p class=\"font-medium text-slate-800 mb-2\">Data yang dihasilkan adalah:</p>\n<ol class=\"list-[lower-alpha] list-inside text-sm text-slate-700 space-y-1 mb-3 bg-slate-50 p-3 rounded-lg border border-slate-200\">\n  <li>Pada anoda dihasilkan 2,24 liter gas oksigen (STP)</li>\n  <li>pH larutan yang dihasilkan setelah elektrolisis selesai adalah 1 &minus; log 2</li>\n  <li>Reaksi yang terjadi pada anoda adalah 2H<sub>2</sub>O + 2e<sup>&minus;</sup> &rarr; H<sub>2</sub> + 2OH<sup>&minus;</sup></li>\n  <li>Reaksi yang terjadi pada katoda adalah Zn<sup>2+</sup> + 2e<sup>&minus;</sup> &rarr; Zn</li>\n</ol>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPoin yang <strong>Benar</strong> dari data yang dihasilkan adalah...\n</p>",
    "options": [
      { "id": "A", "text": "a dan b" },
      { "id": "B", "text": "b dan c" },
      { "id": "C", "text": "a dan d" },
      { "id": "D", "text": "b dan d" },
      { "id": "E", "text": "c dan d" }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Analisis Elektrolisis Larutan ZnSO<sub>4</sub> (1 L, Arus = 0,2 F):</strong><br>\n&bull; <strong>Katoda (&minus;):</strong> Kation logam transisi Zn<sup>2+</sup> tereduksi:<br>\n<code>Zn<sup>2+</sup>(aq) + 2e<sup>&minus;</sup> &rarr; Zn(s)</code> (<strong>Poin d Benar</strong>).<br>\n&bull; <strong>Anoda (+):</strong> Karena anionnya sisa asam oksi (SO<sub>4</sub><sup>2&minus;</sup>), maka air yang teroksidasi:<br>\n<code>2H<sub>2</sub>O(l) &rarr; O<sub>2</sub>(g) + 4H<sup>+</sup>(aq) + 4e<sup>&minus;</sup></code> (Poin c salah karena itu reaksi reduksi air).<br>\n&bull; <strong>Perhitungan Gas O<sub>2</sub> (Poin a):</strong><br>\n<code>n(O<sub>2</sub>) = (1/4) &times; n(e<sup>&minus;</sup>) = (1/4) &times; 0,2 mol = 0,05 mol</code>.<br>\nVolume O<sub>2</sub> (STP) = <code>0,05 &times; 22,4 = 1,12 liter</code> (Poin a salah).<br>\n&bull; <strong>Perhitungan pH Larutan (Poin b):</strong><br>\n<code>n(H<sup>+</sup>) = n(e<sup>&minus;</sup>) = 0,2 mol</code> dalam volume 1 L &rarr; <code>[H<sup>+</sup>] = 0,2 M = 2 &times; 10<sup>&minus;1</sup> M</code>.<br>\n<code>pH = &minus;log(2 &times; 10<sup>&minus;1</sup>) = 1 &minus; log 2</code> (<strong>Poin b Benar</strong>).<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-INTEN4-011"
  },
  {
    "id": 12,
    "elemen": "Kimia Organik & Hidrokarbon",
    "subelemen": "Minyak Bumi & Bilangan Oktan",
    "indikator": "Menentukan rumus struktur terkondensasi dari n-heptana dan isooktana (2,2,4-trimetilpentana).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBensin merupakan salah satu fraksi penyulingan minyak bumi yang penting. Bensin yang berisi hidrokarbon berantai lurus kurang baik digunakan untuk bahan bakar motor berkompresi tinggi karena menyebabkan <em>knocking</em> (ketukan) pada mesin. Untuk menyatakan mutu bensin dipakai istilah <em>bilangan oktan</em>. Zat yang digunakan sebagai pembanding dalam menentukan nilai bilangan oktan adalah <strong>n-heptana</strong> dan <strong>isooktana (2,2,4-trimetilpentana)</strong>.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nStruktur senyawa karbon yang terdapat dalam wacana di atas berturut-turut adalah...\n</p>",
    "options": [
      { "id": "A", "text": "CH₃(CH₂)₄CH₂CH₃ dan CH₃C(CH₃)₂CH₂CH(CH₃)CH₃" },
      { "id": "B", "text": "CH₃(CH₂)₃CH₂CH₃ dan CH₃C(CH₃)CH₂CH(CH₃)CH₃" },
      { "id": "C", "text": "CH₃(CH₂)₄CHCH₃ dan CH₃C(CH₃)₂CH₂CH(CH₃)CH₃" },
      { "id": "D", "text": "CH₃(CH₂)₃CH₂(CH₃)₂ dan CH₃C(CH₃)₂CH₂CH(CH₃)CH₃" },
      { "id": "E", "text": "CH₃(CH₂)₄CH₂CH₃ dan CH₃C(CH₃)₂CH₂CH₂CH₃" }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Analisis Struktur Senyawa Pembanding Bilangan Oktan:</strong><br>\n1. <strong>n-heptana (Bilangan Oktan = 0):</strong><br>\nAlkana rantai lurus dengan 7 atom karbon (C<sub>7</sub>H<sub>16</sub>):<br>\n<code>CH<sub>3</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>3</sub></code> atau disingkat <code>CH<sub>3</sub>(CH<sub>2</sub>)<sub>4</sub>CH<sub>2</sub>CH<sub>3</sub></code>.<br><br>\n2. <strong>Isooktana / 2,2,4-trimetilpentana (Bilangan Oktan = 100):</strong><br>\nAlkana bercabang dengan rantai utama 5 atom C (pentana) yang mengikat dua gugus metil pada C-2 dan satu gugus metil pada C-4:<br>\n<code>CH<sub>3</sub>&minus;C(CH<sub>3</sub>)<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH(CH<sub>3</sub>)&minus;CH<sub>3</sub></code>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-INTEN4-012"
  },
  {
    "id": 13,
    "elemen": "Kimia Organik & Hidrokarbon",
    "subelemen": "Tata Nama, Isomer, dan Sifat Fisik Alkana",
    "indikator": "Mengevaluasi tata nama IUPAC, jumlah atom C primer, titik didih, dan hibridisasi dua senyawa isomer alkana C8H18.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang siswa ditugaskan oleh guru kimianya untuk membuat pernyataan yang berhubungan dengan 2 senyawa karbon di bawah ini:\n</p>\n<div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 my-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-300 rounded-xl text-center\">\n    <div class=\"text-xs font-bold text-indigo-700 uppercase mb-2\">Senyawa Karbon 1</div>\n    <div class=\"font-mono text-xs sm:text-sm text-slate-800 bg-white p-2 rounded border border-slate-200 leading-relaxed\">\n      H<sub>3</sub>C&minus;CH<sub>2</sub>&minus;CH(CH<sub>3</sub>)&minus;CH(CH<sub>3</sub>)&minus;CH<sub>2</sub>&minus;CH<sub>3</sub>\n    </div>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-300 rounded-xl text-center\">\n    <div class=\"text-xs font-bold text-indigo-700 uppercase mb-2\">Senyawa Karbon 2</div>\n    <div class=\"font-mono text-xs sm:text-sm text-slate-800 bg-white p-2 rounded border border-slate-200 leading-relaxed\">\n      H<sub>3</sub>C&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>2</sub>&minus;CH<sub>3</sub>\n    </div>\n  </div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukanlah pernyataan yang <strong>Benar</strong> dan <strong>Salah</strong> pada tabel di bawah ini!\n</p>",
    "items": [
      {
        "pernyataan": "Nama senyawa karbon 1 adalah 3,4-dimetilheptana.",
        "kunci": "Salah",
        "penjelasan": "Rantai induk terpanjang pada senyawa karbon 1 memiliki 6 atom karbon (heksana) dengan cabang metil di C-3 dan C-4, sehingga namanya adalah 3,4-dimetilheksana."
      },
      {
        "pernyataan": "Jumlah atom C primer senyawa 1 lebih banyak daripada atom C primer senyawa 2.",
        "kunci": "Benar",
        "penjelasan": "Senyawa 1 memiliki 4 atom C primer (ujung -CH₃), sedangkan senyawa 2 (n-oktana) hanya memiliki 2 atom C primer."
      },
      {
        "pernyataan": "Titik didih senyawa karbon 2 lebih besar daripada senyawa karbon 1.",
        "kunci": "Benar",
        "penjelasan": "Kedua senyawa merupakan isomer C₈H₁₈. Senyawa 2 berantai lurus (n-oktana) sehingga bidang sentuh gaya van der Waals (London) lebih luas dan titik didihnya lebih tinggi dibandingkan rantai bercabang (senyawa 1)."
      },
      {
        "pernyataan": "Kedua senyawa karbon memiliki orbital hibrida sp³ pada setiap atom C-nya.",
        "kunci": "Benar",
        "penjelasan": "Kedua senyawa merupakan alkana (hidrokarbon jenuh) yang seluruh ikatan antaratom karbonnya adalah ikatan kovalen tunggal (4 ikatan sigma), sehingga seluruh atom C berhibridisasi sp³."
      }
    ],
    "kunci": ["Salah", "Benar", "Benar", "Benar"],
    "pembahasan": "<strong>Analisis Struktur &amp; Sifat Fisik Isomer Alkana (C<sub>8</sub>H<sub>18</sub>):</strong><br>\n&bull; <strong>Pernyataan 1 (Salah):</strong> Rantai utama senyawa 1 terdiri atas 6 atom C, sehingga nama IUPAC yang tepat adalah <strong>3,4-dimetilheksana</strong> (bukan heptana).<br>\n&bull; <strong>Pernyataan 2 (Benar):</strong> Jumlah atom C primer (<code>&minus;CH<sub>3</sub></code>) pada senyawa 1 ada 4 buah, sedangkan pada senyawa 2 ada 2 buah.<br>\n&bull; <strong>Pernyataan 3 (Benar):</strong> Pada isomer alkana dengan Mr sama, semakin sedikit cabang (rantai lurus seperti <em>n-oktana</em>), semakin kuat gaya dispersi London antarmolekulnya sehingga titik didihnya lebih tinggi.<br>\n&bull; <strong>Pernyataan 4 (Benar):</strong> Seluruh atom karbon pada alkana membentuk 4 ikatan tunggal (&sigma;) dengan hibridisasi <strong>sp<sup>3</sup></strong>.<br><br>\n<strong>Kunci Jawaban: Salah, Benar, Benar, Benar</strong>",
    "kode": "25KIM-INTEN4-013"
  },
  {
    "id": 14,
    "elemen": "Struktur Atom & Sistem Periodik Unsur",
    "subelemen": "Konfigurasi Elektron Ion Logam Transisi",
    "indikator": "Menentukan muatan ion dari atom 26X berdasarkan konfigurasi elektronnya.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKonfigurasi elektron suatu ion dari atom <sub>26</sub>X adalah:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\n1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>5</sup>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nIon tersebut adalah...\n</p>",
    "options": [
      { "id": "A", "text": "X³⁺" },
      { "id": "B", "text": "X²⁺" },
      { "id": "C", "text": "X⁻" },
      { "id": "D", "text": "X²⁻" },
      { "id": "E", "text": "X³⁻" }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Analisis Pelepasan Elektron pada Atom <sub>26</sub>X:</strong><br>\n1. Atom netral <sub>26</sub>X memiliki 26 elektron dengan konfigurasi keadaan dasar:<br>\n<code><sub>26</sub>X : 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>6</sup></code><br><br>\n2. Konfigurasi ion yang diketahui memiliki total elektron = <code>2 + 2 + 6 + 2 + 6 + 5 = 23 elektron</code>.<br>\nArtinya, atom X telah melepaskan <strong>3 elektron</strong> (2 elektron dari subkulit 4s dan 1 elektron dari subkulit 3d) membentuk kation bermuatan +3, yaitu <strong>X<sup>3+</sup></strong>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-INTEN4-014"
  },
  {
    "id": 15,
    "elemen": "Struktur Atom & Sistem Periodik Unsur",
    "subelemen": "Partikel Dasar Penyusun Atom",
    "indikator": "Menentukan jumlah proton, neutron, dan elektron suatu unsur periode ke-4 yang membentuk ion X2+ isoelektronik dengan Ar.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu unsur X terletak dalam periode ke-4. Untuk memperoleh konfigurasi elektron gas mulia yang stabil seperti <sub>18</sub>Ar, unsur itu membentuk ion X<sup>2+</sup>. Nomor massa unsur X itu adalah 40.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nDalam atom netral unsur X tersebut terdapat...\n</p>",
    "options": [
      { "id": "A", "text": "22 proton, 20 neutron, dan 22 elektron" },
      { "id": "B", "text": "20 proton, 20 neutron, dan 22 elektron" },
      { "id": "C", "text": "20 proton, 20 neutron, dan 20 elektron" },
      { "id": "D", "text": "22 proton, 20 neutron, dan 20 elektron" },
      { "id": "E", "text": "20 proton, 20 neutron, dan 21 elektron" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Menentukan Partikel Penyusun Atom Netral X:</strong><br>\n&bull; Gas mulia pada akhir periode 3 adalah Argon (<sub>18</sub>Ar) yang memiliki 18 elektron.<br>\n&bull; Karena unsur X terletak pada periode ke-4 dan mencapai kestabilan seperti <sub>18</sub>Ar dengan melepaskan 2 elektron membentuk ion X<sup>2+</sup>, maka jumlah elektron atom netral X adalah <code>18 + 2 = 20 elektron</code>.<br>\n&bull; Pada atom netral: <strong>Jumlah proton = Jumlah elektron = 20</strong>.<br>\n&bull; Dengan nomor massa (A) = 40, maka <strong>Jumlah neutron = A &minus; Z = 40 &minus; 20 = 20 neutron</strong>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-015"
  },
  {
    "id": 16,
    "elemen": "Struktur Atom & Sistem Periodik Unsur",
    "subelemen": "Bilangan Kuantum",
    "indikator": "Mengidentifikasi kombinasi keempat bilangan kuantum yang diizinkan untuk elektron pada subkulit d.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDari hasil perhitungan mekanika gelombang dinyatakan bahwa keadaan elektron dalam suatu atom ditentukan oleh empat bilangan kuantum yaitu bilangan kuantum utama (<em>n</em>), azimut (<em>l</em>), magnetik (<em>m</em>), dan spin (<em>s</em>).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nHarga bilangan kuantum yang mungkin untuk elektron yang berada pada <strong>subkulit d</strong> adalah...\n</p>",
    "options": [
      { "id": "A", "text": "n = 2, l = 2, m = +1, s = −1/2" },
      { "id": "B", "text": "n = 3, l = 1, m = +2, s = +1/2" },
      { "id": "C", "text": "n = 3, l = 2, m = 0, s = +1/2" },
      { "id": "D", "text": "n = 4, l = 3, m = +2, s = −1/2" },
      { "id": "E", "text": "n = 5, l = 0, m = 0, s = +1/2" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Syarat Bilangan Kuantum untuk Subkulit d:</strong><br>\n1. Elektron pada <strong>subkulit d</strong> wajib memiliki bilangan kuantum azimut <strong><em>l</em> = 2</strong> (karena <em>l</em> = 0 untuk s, 1 untuk p, 2 untuk d, dan 3 untuk f).<br>\n2. Nilai bilangan kuantum utama <em>n</em> harus lebih besar dari <em>l</em> (<strong><em>n</em> &ge; 3</strong>).<br>\n3. Nilai bilangan kuantum magnetik <em>m</em> berada pada rentang <code>&minus;l</code> sampai <code>+l</code> (yaitu &minus;2, &minus;1, 0, +1, +2).<br><br>\nEvaluasi pilihan:<br>\n&bull; A: <code>n = 2, l = 2</code> (Tidak mungkin, karena untuk n = 2 nilai maksimum l hanya 1).<br>\n&bull; B: <code>l = 1</code> (Subkulit p, dan m = +2 tidak diizinkan).<br>\n&bull; <strong>C: <code>n = 3, l = 2, m = 0, s = +1/2</code> (Mungkin dan valid untuk elektron pada subkulit 3d).</strong><br>\n&bull; D: <code>l = 3</code> (Subkulit f).<br>\n&bull; E: <code>l = 0</code> (Subkulit s).<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-016"
  },
  {
    "id": 17,
    "elemen": "Ikatan Kimia & Bentuk Molekul",
    "subelemen": "Geometri Molekul & Teori VSEPR",
    "indikator": "Mengidentifikasi spesi molekul atau ion yang memiliki bentuk geometri trigonal planar (segitiga datar).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiberikan empat spesi kimia berikut:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm text-slate-800 space-y-1 mb-3\">\n  <div>1. BCl<sub>3</sub></div>\n  <div>2. CH<sub>3</sub><sup>+</sup></div>\n  <div>3. PH<sub>3</sub></div>\n  <div>4. SO<sub>3</sub></div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika diketahui nomor atom B = 5, Cl = 17, C = 6, H = 1, P = 15, S = 16, dan O = 8, maka spesi yang memiliki bentuk molekul atau ion <strong>trigonal planar (segitiga datar)</strong> adalah...\n</p>",
    "options": [
      { "id": "A", "text": "1 dan 2" },
      { "id": "B", "text": "1, 2, dan 4" },
      { "id": "C", "text": "4 saja" },
      { "id": "D", "text": "2, 3, dan 4" },
      { "id": "E", "text": "1, 3, dan 4" }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Analisis Domain Elektron (VSEPR) untuk Geometri Trigonal Planar (AX<sub>3</sub>):</strong><br>\nBentuk <strong>trigonal planar (segitiga datar)</strong> dimiliki oleh spesi dengan 3 domain elektron ikatan (PEI = 3) dan tanpa pasangan elektron bebas pada atom pusat (PEB = 0):<br>\n&bull; <strong>1. BCl<sub>3</sub>:</strong> Atom pusat B (3 elektron valensi) mengikat 3 atom Cl &rarr; 3 PEI, 0 PEB (Tipe AX<sub>3</sub> &rarr; <strong>Trigonal planar</strong>).<br>\n&bull; <strong>2. CH<sub>3</sub><sup>+</sup>:</strong> Atom pusat C (4 elektron valensi, muatan +1 berarti tersisa 3 elektron) mengikat 3 atom H &rarr; 3 PEI, 0 PEB (Tipe AX<sub>3</sub> &rarr; <strong>Trigonal planar</strong>).<br>\n&bull; <strong>3. PH<sub>3</sub>:</strong> Atom pusat P (5 elektron valensi) mengikat 3 atom H &rarr; 3 PEI, 1 PEB (Tipe AX<sub>3</sub>E &rarr; <em>Piramida trigonal</em>).<br>\n&bull; <strong>4. SO<sub>3</sub>:</strong> Atom pusat S (6 elektron valensi) membentuk 3 ikatan rangkap dua dengan 3 atom O &rarr; 3 domain ikatan, 0 PEB (Tipe AX<sub>3</sub> &rarr; <strong>Trigonal planar</strong>).<br><br>\nJadi, spesi yang berbentuk trigonal planar adalah <strong>1, 2, dan 4</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25KIM-INTEN4-017"
  },
  {
    "id": 18,
    "elemen": "Ikatan Kimia & Bentuk Molekul",
    "subelemen": "Pembentukan Ikatan Ion dan Rumus Senyawa",
    "indikator": "Menentukan jenis ikatan dan rumus kimia senyawa yang terbentuk dari dua unsur berdasarkan massa atom dan jumlah neutronnya.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUnsur X dengan massa atom 23 memiliki 12 neutron, dan unsur Y dengan massa atom 32 memiliki 16 neutron.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika unsur X dan Y berikatan, maka akan diperoleh ikatan...\n</p>",
    "options": [
      { "id": "A", "text": "ion dengan rumus XY₂" },
      { "id": "B", "text": "kovalen dengan rumus X₂Y" },
      { "id": "C", "text": "ion dengan rumus X₂Y" },
      { "id": "D", "text": "kovalen dengan rumus X₂Y₃" },
      { "id": "E", "text": "kovalen dengan rumus XY₂" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Menentukan Nomor Atom, Konfigurasi Elektron, dan Jenis Ikatan:</strong><br>\n1. <strong>Unsur X:</strong><br>\nNomor atom <code>Z<sub>X</sub> = A &minus; n = 23 &minus; 12 = 11</code>.<br>\nKonfigurasi elektron: <code>2, 8, 1</code> (Golongan IA / logam alkali, cenderung melepas 1 elektron membentuk kation <strong>X<sup>+</sup></strong>).<br><br>\n2. <strong>Unsur Y:</strong><br>\nNomor atom <code>Z<sub>Y</sub> = A &minus; n = 32 &minus; 16 = 16</code>.<br>\nKonfigurasi elektron: <code>2, 8, 6</code> (Golongan VIA / nonlogam kalkogen, cenderung menangkap 2 elektron membentuk anion <strong>Y<sup>2&minus;</sup></strong>).<br><br>\n3. <strong>Pembentukan Senyawa:</strong><br>\nIkatan antara logam (X<sup>+</sup>) dan nonlogam (Y<sup>2&minus;</sup>) menghasilkan <strong>ikatan ion</strong> dengan rumus kimia <strong>X<sub>2</sub>Y</strong> (2X<sup>+</sup> + Y<sup>2&minus;</sup> &rarr; X<sub>2</sub>Y).<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-018"
  },
  {
    "id": 19,
    "elemen": "Ikatan Kimia & Bentuk Molekul",
    "subelemen": "Gaya Antarmolekul, Bentuk Molekul & Kebasaan Lewis",
    "indikator": "Membandingkan titik didih, bentuk molekul, dan sifat basa antara molekul NH3 dan NF3.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang siswa membandingkan data kedua senyawa kovalen di bawah ini:\n</p>\n<div class=\"flex justify-center gap-6 my-3\">\n  <div class=\"px-6 py-4 bg-slate-50 border border-slate-300 rounded-xl text-center shadow-sm\">\n    <div class=\"font-bold text-base text-indigo-800\">NH<sub>3</sub></div>\n    <div class=\"text-xs text-slate-600 mt-1\">Mr = 17</div>\n  </div>\n  <div class=\"px-6 py-4 bg-slate-50 border border-slate-300 rounded-xl text-center shadow-sm\">\n    <div class=\"font-bold text-base text-indigo-800\">NF<sub>3</sub></div>\n    <div class=\"text-xs text-slate-600 mt-1\">Mr = 71</div>\n  </div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukanlah pernyataan yang benar! <em>(Jawaban benar lebih dari satu!)</em>\n</p>",
    "options": [
      { "id": "A", "text": "Titik didih NH₃ lebih besar dari titik didih NF₃" },
      { "id": "B", "text": "Keduanya memiliki ikatan hidrogen yang jauh lebih lemah daripada gaya London" },
      { "id": "C", "text": "Keduanya memiliki bentuk molekul yang sama" },
      { "id": "D", "text": "Sifat basa NH₃ lebih besar daripada NF₃" },
      { "id": "E", "text": "Jumlah pasangan elektron bebas pada atom pusat NF₃ > NH₃" }
    ],
    "kunci": ["A", "C", "D"],
    "pembahasan": "<strong>Perbandingan Sifat Molekul NH<sub>3</sub> dan NF<sub>3</sub>:</strong><br>\n&bull; <strong>A (Benar):</strong> NH<sub>3</sub> memiliki <strong>ikatan hidrogen</strong> antarmolekul yang sangat kuat (titik didih &minus;33 &deg;C), sedangkan NF<sub>3</sub> tidak memiliki ikatan hidrogen (hanya gaya dipol-dipol lemah, titik didih &minus;129 &deg;C).<br>\n&bull; <strong>B (Salah):</strong> NF<sub>3</sub> tidak memiliki ikatan hidrogen, dan ikatan hidrogen jauh lebih kuat daripada gaya London.<br>\n&bull; <strong>C (Benar):</strong> Baik NH<sub>3</sub> maupun NF<sub>3</sub> memiliki tipe molekul <strong>AX<sub>3</sub>E</strong> (3 PEI dan 1 PEB pada atom pusat N), sehingga keduanya berbentuk <strong>piramida trigonal (segitiga piramida)</strong>.<br>\n&bull; <strong>D (Benar):</strong> Atom F sangat elektronegatif sehingga menarik kerapatan elektron pada atom N di NF<sub>3</sub> dan membuat PEB pada N sukar didonorkan. Akibatnya, sifat basa Lewis NH<sub>3</sub> jauh lebih kuat dibandingkan NF<sub>3</sub>.<br>\n&bull; <strong>E (Salah untuk atom pusat):</strong> Pada atom pusat N, baik NH<sub>3</sub> maupun NF<sub>3</sub> sama-sama memiliki tepat 1 PEB (meskipun jika dihitung total PEB seluruh atom termasuk 3 atom F, NF<sub>3</sub> memiliki total 10 PEB).<br><br>\n<strong>Kunci Jawaban: A, C, D</strong>",
    "kode": "25KIM-INTEN4-019"
  },
  {
    "id": 20,
    "elemen": "Larutan Asam-Basa",
    "subelemen": "Teori Asam-Basa Arrhenius, Bronsted-Lowry, dan Lewis",
    "indikator": "Mengurutkan persamaan reaksi sesuai dengan konsep asam-basa Arrhenius, Bronsted-Lowry, dan Lewis.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUntuk menjelaskan berbagai reaksi asam-basa diperlukan beberapa teori yaitu teori asam-basa Arrhenius, Br&oslash;nsted-Lowry, dan Lewis. Diberikan reaksi:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm text-slate-800 space-y-1 mb-3\">\n  <div>1. NaOH &rarr; Na<sup>+</sup> + OH<sup>&minus;</sup></div>\n  <div>2. AlF<sub>3</sub> + F<sup>&minus;</sup> &rarr; AlF<sub>4</sub><sup>&minus;</sup></div>\n  <div>3. HClO<sub>4</sub> + H<sub>2</sub>O &rarr; ClO<sub>4</sub><sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup></div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nUrutan yang sesuai dengan konsep asam-basa <strong>Arrhenius, Br&oslash;nsted-Lowry, dan Lewis</strong> berturut-turut adalah...\n</p>",
    "options": [
      { "id": "A", "text": "1, 2, 3" },
      { "id": "B", "text": "2, 1, 3" },
      { "id": "C", "text": "3, 1, 2" },
      { "id": "D", "text": "1, 3, 2" },
      { "id": "E", "text": "2, 3, 1" }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Analisis Konsep Teori Asam-Basa:</strong><br>\n&bull; <strong>Reaksi 1 (Arrhenius):</strong> <code>NaOH &rarr; Na<sup>+</sup> + OH<sup>&minus;</sup></code> menjelaskan basa sebagai zat yang terionisasi dalam air menghasilkan ion hidroksida (OH<sup>&minus;</sup>).<br>\n&bull; <strong>Reaksi 3 (Br&oslash;nsted-Lowry):</strong> <code>HClO<sub>4</sub> + H<sub>2</sub>O &rarr; ClO<sub>4</sub><sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup></code> menjelaskan transfer proton (H<sup>+</sup>) dari asam HClO<sub>4</sub> ke basa H<sub>2</sub>O.<br>\n&bull; <strong>Reaksi 2 (Lewis):</strong> <code>AlF<sub>3</sub> + F<sup>&minus;</sup> &rarr; AlF<sub>4</sub><sup>&minus;</sup></code> menjelaskan serah terima pasangan elektron bebas dari basa Lewis F<sup>&minus;</sup> ke asam Lewis AlF<sub>3</sub>.<br><br>\nJadi urutan Arrhenius, Br&oslash;nsted-Lowry, dan Lewis adalah <strong>1, 3, 2</strong>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-INTEN4-020"
  },
  {
    "id": 21,
    "elemen": "Larutan Asam-Basa",
    "subelemen": "Titrasi Asam Lemah oleh Basa Kuat",
    "indikator": "Mengevaluasi pH awal, pH titik setengah ekivalen, sifat garam titik ekivalen, konsentrasi ion, dan perubahan warna indikator pada titrasi CH3COOH dengan NaOH.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak 25 mL CH<sub>3</sub>COOH 0,1 M dititrasi dengan larutan NaOH 0,1 M. Diketahui K<sub>a</sub> CH<sub>3</sub>COOH = 2 &times; 10<sup>&minus;5</sup>.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah setiap pernyataan tentang titrasi tersebut pada tabel di bawah ini <strong>Benar</strong> atau <strong>Salah</strong>!\n</p>",
    "items": [
      {
        "pernyataan": "pH larutan asam asetat sebelum titrasi adalah 3 − ½ log 2.",
        "kunci": "Benar",
        "penjelasan": "Sebelum titrasi: [H⁺] = √(Ka × M) = √(2×10⁻⁵ × 0,1) = √(2×10⁻⁶) = 2^(½) × 10⁻³ M, sehingga pH = 3 − ½ log 2."
      },
      {
        "pernyataan": "Ketika NaOH digunakan 25 mL terbentuk garam yang bersifat basa.",
        "kunci": "Benar",
        "penjelasan": "Pada penambahan 25 mL NaOH 0,1 M (titik ekivalen), asam asetat dan NaOH tepat habis bereaksi membentuk garam CH₃COONa yang mengalami hidrolisis sebagian menghasilkan ion OH⁻ (bersifat basa)."
      },
      {
        "pernyataan": "Ketika NaOH digunakan 12,5 mL, pH campuran sama dengan pKa.",
        "kunci": "Benar",
        "penjelasan": "Pada titik setengah ekivalen (12,5 mL NaOH), mol CH₃COOH sisa sama dengan mol CH₃COO⁻ yang terbentuk (masing-masing 1,25 mmol), sehingga [H⁺] = Ka dan pH = pKa."
      },
      {
        "pernyataan": "Pada titik ekivalen, konsentrasi Na⁺ dalam campuran adalah 0,05 M.",
        "kunci": "Benar",
        "penjelasan": "Pada titik ekivalen, mol Na⁺ = 25 mL × 0,1 M = 2,5 mmol dalam volume total campuran 25 + 25 = 50 mL, sehingga [Na⁺] = 2,5 mmol / 50 mL = 0,05 M."
      },
      {
        "pernyataan": "Jika digunakan indikator Fenolftalein maka warna larutan setelah titik ekivalen menjadi tidak berwarna.",
        "kunci": "Salah",
        "penjelasan": "Setelah titik ekivalen, larutan bersifat basa kuat (pH > 8,3) sehingga indikator fenolftalein berwarna merah muda / lembayung, bukan tidak berwarna."
      }
    ],
    "kunci": ["Benar", "Benar", "Benar", "Benar", "Salah"],
    "pembahasan": "<strong>Analisis Kurva &amp; Stoikiometri Titrasi CH<sub>3</sub>COOH 0,1 M (25 mL) + NaOH 0,1 M:</strong><br>\n&bull; <strong>Pernyataan 1 (Benar):</strong> <code>[H<sup>+</sup>] = &radic;(2 &times; 10<sup>&minus;5</sup> &times; 10<sup>&minus;1</sup>) = &radic;2 &times; 10<sup>&minus;3</sup> M &rarr; pH = 3 &minus; &frac12; log 2</code>.<br>\n&bull; <strong>Pernyataan 2 (Benar):</strong> Pada penambahan 25 mL NaOH (titik ekivalen), terbentuk garam <code>CH<sub>3</sub>COONa</code> yang terhidrolisis bersifat basa (pH &gt; 7).<br>\n&bull; <strong>Pernyataan 3 (Benar):</strong> Pada penambahan 12,5 mL NaOH (setengah volume titik ekivalen), <code>mol asam sisa = mol basa konjugasi</code> sehingga <code>pH = pK<sub>a</sub></code>.<br>\n&bull; <strong>Pernyataan 4 (Benar):</strong> <code>[Na<sup>+</sup>] = 2,5 mmol / (25 + 25) mL = 0,05 M</code>.<br>\n&bull; <strong>Pernyataan 5 (Salah):</strong> Dalam suasana basa setelah titik ekivalen, indikator fenolftalein berubah warna menjadi <strong>merah muda (pink)</strong>.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Benar, Benar, Salah</strong>",
    "kode": "25KIM-INTEN4-021"
  },
  {
    "id": 22,
    "elemen": "Larutan Penyangga & Hidrolisis",
    "subelemen": "Pembuatan Larutan Penyangga Asam",
    "indikator": "Mengidentifikasi pasangan larutan yang menghasilkan sistem penyangga (buffer) yang bersifat asam.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui K<sub>a</sub> CH<sub>3</sub>COOH = 1,75 &times; 10<sup>&minus;5</sup> dan K<sub>b</sub> NH<sub>3</sub> = 1,8 &times; 10<sup>&minus;5</sup>.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPasangan di bawah ini yang menghasilkan campuran penyangga dan bersifat asam adalah... <em>(Jawaban benar lebih dari satu!)</em>\n</p>",
    "options": [
      { "id": "A", "text": "50 mL larutan CH₃COOH 0,2 M dengan 50 mL larutan NaOH 0,2 M" },
      { "id": "B", "text": "100 mL larutan CH₃COOH 0,2 M dengan 50 mL larutan NaOH 0,2 M" },
      { "id": "C", "text": "10 mL larutan NH₃ 0,1 M dengan 20 mL larutan CH₃COOH 0,1 M" },
      { "id": "D", "text": "10 mL larutan CH₃COOH 0,2 M dengan 10 mL larutan NaCH₃COO 0,2 M" },
      { "id": "E", "text": "10 mL larutan NH₃ 0,1 M dengan 20 mL larutan (NH₄)₂SO₄ 0,1 M" }
    ],
    "kunci": ["B", "D"],
    "pembahasan": "<strong>Analisis Pembentukan Larutan Penyangga Asam:</strong><br>\nLarutan penyangga asam terbentuk dari campuran <strong>asam lemah (CH<sub>3</sub>COOH)</strong> dan <strong>basa konjugasinya (CH<sub>3</sub>COO<sup>&minus;</sup>)</strong>:<br>\n&bull; <strong>A (Salah):</strong> 10 mmol CH<sub>3</sub>COOH + 10 mmol NaOH &rarr; habis bereaksi membentuk garam terhidrolisis yang bersifat basa.<br>\n&bull; <strong>B (Benar - Cara Tidak Langsung):</strong> 20 mmol CH<sub>3</sub>COOH + 10 mmol NaOH &rarr; tersisa 10 mmol CH<sub>3</sub>COOH dan terbentuk 10 mmol CH<sub>3</sub>COONa (<strong>Penyangga Asam</strong>).<br>\n&bull; <strong>C:</strong> Reaksi antara asam lemah berlebih dan basa lemah menghasilkan garam CH<sub>3</sub>COONH<sub>4</sub> dan sisa CH<sub>3</sub>COOH.<br>\n&bull; <strong>D (Benar - Cara Langsung):</strong> Campuran langsung asam lemah CH<sub>3</sub>COOH dengan garam konjugasinya NaCH<sub>3</sub>COO (<strong>Penyangga Asam</strong>).<br>\n&bull; <strong>E (Salah):</strong> Campuran basa lemah NH<sub>3</sub> dan asam konjugasinya (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> membentuk penyangga basa.<br><br>\n<strong>Kunci Jawaban: B, D</strong>",
    "kode": "25KIM-INTEN4-022"
  },
  {
    "id": 23,
    "elemen": "Larutan Penyangga & Hidrolisis",
    "subelemen": "Hidrolisis Garam",
    "indikator": "Menganalisis sifat asam-basa, reaksi hidrolisis, dan asal kation-anion pada larutan garam Ca(CH3COO)2.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGaram merupakan senyawa ion yang terdiri dari kation logam (komponen basa) dan anion sisa asam (komponen asam). Di dalam sebuah wadah terdapat larutan garam berikut:\n</p>\n<div class=\"my-3 p-4 bg-slate-50 border-2 border-slate-300 rounded-xl max-w-xs mx-auto text-center shadow-sm\">\n  <div class=\"font-bold text-slate-900 text-sm\">100 mL Ca(CH<sub>3</sub>COO)<sub>2</sub> 0,2 M</div>\n  <div class=\"text-xs text-slate-600 mt-1\">K<sub>a</sub> CH<sub>3</sub>COOH = 1,8 &times; 10<sup>&minus;5</sup></div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan pernyataan <strong>Benar</strong> dan <strong>Salah</strong> dalam tabel di bawah ini!\n</p>",
    "items": [
      {
        "pernyataan": "Jika dilarutkan dalam air akan terhidrolisis menghasilkan ion H⁺.",
        "kunci": "Salah",
        "penjelasan": "Anion CH₃COO⁻ mengalami hidrolisis parsial dalam air menghasilkan ion OH⁻ (CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻), bukan ion H⁺."
      },
      {
        "pernyataan": "Nilai pH garam > 7.",
        "kunci": "Benar",
        "penjelasan": "Karena hidrolisis menghasilkan ion OH⁻, larutan garam Ca(CH₃COO)₂ bersifat basa sehingga memiliki nilai pH > 7."
      },
      {
        "pernyataan": "Dapat membirukan kertas lakmus merah.",
        "kunci": "Benar",
        "penjelasan": "Larutan bersifat basa sehingga mengubah warna kertas lakmus merah menjadi biru."
      },
      {
        "pernyataan": "Ion Ca²⁺ dari garam berasal dari larutan asamnya.",
        "kunci": "Salah",
        "penjelasan": "Kation Ca²⁺ berasal dari basa kuat Ca(OH)₂, sedangkan yang berasal dari asam lemah CH₃COOH adalah anion CH₃COO⁻."
      }
    ],
    "kunci": ["Salah", "Benar", "Benar", "Salah"],
    "pembahasan": "<strong>Analisis Hidrolisis Garam Ca(CH<sub>3</sub>COO)<sub>2</sub>:</strong><br>\nGaram <code>Ca(CH<sub>3</sub>COO)<sub>2</sub></code> terbentuk dari basa kuat <code>Ca(OH)<sub>2</sub></code> dan asam lemah <code>CH<sub>3</sub>COOH</code>:<br>\n&bull; <strong>Pernyataan 1 (Salah):</strong> Hanya anion <code>CH<sub>3</sub>COO<sup>&minus;</sup></code> yang terhidrolisis: <code>CH<sub>3</sub>COO<sup>&minus;</sup>(aq) + H<sub>2</sub>O(l) &rightleftharpoons; CH<sub>3</sub>COOH(aq) + OH<sup>&minus;</sup>(aq)</code> menghasilkan ion <strong>OH<sup>&minus;</sup></strong> (bukan H<sup>+</sup>).<br>\n&bull; <strong>Pernyataan 2 (Benar):</strong> Adanya ion OH<sup>&minus;</sup> membuat larutan bersifat basa (<strong>pH &gt; 7</strong>).<br>\n&bull; <strong>Pernyataan 3 (Benar):</strong> Larutan basa dapat <strong>membirukan kertas lakmus merah</strong>.<br>\n&bull; <strong>Pernyataan 4 (Salah):</strong> Kation <code>Ca<sup>2+</sup></code> berasal dari komponen basa <code>Ca(OH)<sub>2</sub></code>.<br><br>\n<strong>Kunci Jawaban: Salah, Benar, Benar, Salah</strong>",
    "kode": "25KIM-INTEN4-023"
  },
  {
    "id": 24,
    "elemen": "Kelarutan & Hasil Kali Kelarutan (Ksp)",
    "subelemen": "Hubungan Kelarutan (s) dan Ksp",
    "indikator": "Mengurutkan kelarutan berbagai garam karbonat (MCO3) dari yang paling mudah larut ke yang paling sukar larut.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui nilai hasil kali kelarutan (K<sub>sp</sub>) dari beberapa garam karbonat di bawah ini:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm text-slate-800 space-y-1 mb-3\">\n  <div>1. MgCO<sub>3</sub> = 4 &times; 10<sup>&minus;5</sup></div>\n  <div>2. CuCO<sub>3</sub> = 2,5 &times; 10<sup>&minus;10</sup></div>\n  <div>3. CdCO<sub>3</sub> = 5,2 &times; 10<sup>&minus;12</sup></div>\n  <div>4. CaCO<sub>3</sub> = 6,9 &times; 10<sup>&minus;9</sup></div>\n  <div>5. BaCO<sub>3</sub> = 1,6 &times; 10<sup>&minus;9</sup></div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nUrutan garam dari yang <strong>lebih mudah larut ke yang lebih sukar larut</strong> berturut-turut adalah...\n</p>",
    "options": [
      { "id": "A", "text": "1 - 4 - 5 - 2 - 3" },
      { "id": "B", "text": "1 - 2 - 4 - 3 - 5" },
      { "id": "C", "text": "1 - 2 - 5 - 3 - 4" },
      { "id": "D", "text": "2 - 3 - 4 - 1 - 5" },
      { "id": "E", "text": "2 - 4 - 5 - 1 - 3" }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Membandingkan Kelarutan Garam dengan Jumlah Ion yang Sama:</strong><br>\nKelima garam merupakan elektrolit biner bertipe 1:1 (<code>MCO<sub>3</sub> &rightleftharpoons; M<sup>2+</sup> + CO<sub>3</sub><sup>2&minus;</sup></code>), sehingga kelarutan molarnya semua dirumuskan sebagai <code>s = &radic;K<sub>sp</sub></code>.<br>\nSemakin besar nilai K<sub>sp</sub>, semakin besar kelarutannya (semakin mudah larut):<br>\n1. MgCO<sub>3</sub> (K<sub>sp</sub> = 4 &times; 10<sup>&minus;5</sup>) &mdash; <em>paling mudah larut</em><br>\n4. CaCO<sub>3</sub> (K<sub>sp</sub> = 6,9 &times; 10<sup>&minus;9</sup>)<br>\n5. BaCO<sub>3</sub> (K<sub>sp</sub> = 1,6 &times; 10<sup>&minus;9</sup>)<br>\n2. CuCO<sub>3</sub> (K<sub>sp</sub> = 2,5 &times; 10<sup>&minus;10</sup>)<br>\n3. CdCO<sub>3</sub> (K<sub>sp</sub> = 5,2 &times; 10<sup>&minus;12</sup>) &mdash; <em>paling sukar larut</em><br><br>\nUrutan yang tepat adalah <strong>1 - 4 - 5 - 2 - 3</strong>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-INTEN4-024"
  },
  {
    "id": 25,
    "elemen": "Termokimia",
    "subelemen": "Hukum Hess",
    "indikator": "Menentukan hubungan aljabar perubahan entalpi antara tiga reaksi pembakaran karbon dan karbon monoksida.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerubahan entalpi suatu reaksi kimia hanya ditentukan oleh keadaan awal dan akhir reaksi, tidak tergantung dari jalan untuk mencapai keadaan akhir. Jika diketahui reaksi-reaksi:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm text-slate-800 space-y-1 mb-3\">\n  <div>C(s) + &frac12;O<sub>2</sub>(g) &rarr; CO(g) &emsp; &Delta;H = &minus;a kJ</div>\n  <div>2CO(g) + O<sub>2</sub>(g) &rarr; 2CO<sub>2</sub>(g) &emsp; &Delta;H = &minus;b kJ</div>\n  <div>C(s) + O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g) &emsp; &Delta;H = &minus;c kJ</div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nHubungan yang tepat untuk <em>a</em>, <em>b</em>, dan <em>c</em> sesuai dengan Hukum Hess adalah...\n</p>",
    "options": [
      { "id": "A", "text": "a = ½b + c" },
      { "id": "B", "text": "c = 2a + ½b" },
      { "id": "C", "text": "2c = 2a + b" },
      { "id": "D", "text": "2a = c − b" },
      { "id": "E", "text": "½b = 2a − c" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Penyusunan Siklus Hukum Hess:</strong><br>\nUntuk memperoleh reaksi ketiga <code>C(s) + O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g) (&Delta;H = &minus;c kJ)</code>:<br>\n&bull; Ambil reaksi (1) tetap: <code>C(s) + &frac12;O<sub>2</sub>(g) &rarr; CO(g)</code> &emsp; <code>&Delta;H = &minus;a kJ</code><br>\n&bull; Ambil reaksi (2) dibagi 2: <code>CO(g) + &frac12;O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g)</code> &emsp; <code>&Delta;H = &minus;&frac12;b kJ</code><br><br>\nJumlahkan kedua tahap tersebut:<br>\n<code>&minus;c = (&minus;a) + (&minus;&frac12;b)</code><br>\nKalikan kedua ruas dengan &minus;2:<br>\n<code>2c = 2a + b</code>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-025"
  },
  {
    "id": 26,
    "elemen": "Termokimia",
    "subelemen": "Entalpi Pembentukan Standar (&Delta;Hf&deg;)",
    "indikator": "Menghitung perubahan entalpi pembakaran 1,6 gram gas metana berdasarkan data entalpi pembentukan standar.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui data entalpi pembentukan standar:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm text-slate-800 space-y-1 mb-3\">\n  <div>&Delta;H<sub>f</sub>&deg; H<sub>2</sub>O = &minus;286 kJ/mol</div>\n  <div>&Delta;H<sub>f</sub>&deg; CO<sub>2</sub> = &minus;394 kJ/mol</div>\n  <div>&Delta;H<sub>f</sub>&deg; CH<sub>4</sub> = &minus;74 kJ/mol</div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika 1,6 gram CH<sub>4</sub> dibakar sempurna menghasilkan CO<sub>2</sub> dan H<sub>2</sub>O, maka nilai &Delta;H reaksi pembakaran tersebut adalah... <em>(Ar C = 12; H = 1)</em>\n</p>",
    "options": [
      { "id": "A", "text": "−520 kJ" },
      { "id": "B", "text": "−104,0 kJ" },
      { "id": "C", "text": "−754 kJ" },
      { "id": "D", "text": "−377 kJ" },
      { "id": "E", "text": "−89,2 kJ" }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Perhitungan &Delta;H Pembakaran Metana:</strong><br>\n1. <strong>Persamaan Reaksi Pembakaran Setara:</strong><br>\n<code>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)</code><br><br>\n2. <strong>Menghitung &Delta;H<sub>c</sub>&deg; untuk 1 mol CH<sub>4</sub>:</strong><br>\n<code>&Delta;H&deg; = [&Delta;H<sub>f</sub>&deg; CO<sub>2</sub> + 2 &times; &Delta;H<sub>f</sub>&deg; H<sub>2</sub>O] &minus; [&Delta;H<sub>f</sub>&deg; CH<sub>4</sub> + 2 &times; &Delta;H<sub>f</sub>&deg; O<sub>2</sub>]</code><br>\n<code>&Delta;H&deg; = [&minus;394 + 2(&minus;286)] &minus; [&minus;74 + 0] = &minus;966 + 74 = &minus;892 kJ/mol</code>.<br><br>\n3. <strong>Menghitung &Delta;H untuk 1,6 gram CH<sub>4</sub> (Mr = 16):</strong><br>\n<code>n(CH<sub>4</sub>) = 1,6 / 16 = 0,1 mol</code>.<br>\n<code>&Delta;H = 0,1 mol &times; (&minus;892 kJ/mol) = &minus;89,2 kJ</code>.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    "kode": "25KIM-INTEN4-026"
  },
  {
    "id": 27,
    "elemen": "Kinetika Kimia (Laju Reaksi)",
    "subelemen": "Orde Reaksi, Persamaan Laju & Tetapan Laju",
    "indikator": "Menentukan orde reaksi, rumus persamaan laju reaksi, dan nilai konstanta laju reaksi (k) dari tabel data eksperimen.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu reaksi: <strong>A + B &rarr; C</strong> memiliki data eksperimen sebagai berikut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-[300px] text-xs sm:text-sm border border-slate-300 mx-auto text-center\">\n    <thead class=\"bg-slate-100 font-semibold text-slate-800\">\n      <tr>\n        <th class=\"p-2 border border-slate-300\">No</th>\n        <th class=\"p-2 border border-slate-300\">Molar [A]</th>\n        <th class=\"p-2 border border-slate-300\">Molar [B]</th>\n        <th class=\"p-2 border border-slate-300\">V (M/s)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"p-2 border\">1</td><td class=\"p-2 border\">0,1</td><td class=\"p-2 border\">0,1</td><td class=\"p-2 border\">2</td></tr>\n      <tr><td class=\"p-2 border\">2</td><td class=\"p-2 border\">0,1</td><td class=\"p-2 border\">0,2</td><td class=\"p-2 border\">8</td></tr>\n      <tr><td class=\"p-2 border\">3</td><td class=\"p-2 border\">0,2</td><td class=\"p-2 border\">0,2</td><td class=\"p-2 border\">16</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nHasil yang diperoleh dari data di atas adalah... <em>(Jawaban benar lebih dari satu!)</em>\n</p>",
    "options": [
      { "id": "A", "text": "Persamaan laju reaksinya adalah: V = k[A]²[B]" },
      { "id": "B", "text": "Nilai konstanta laju reaksinya adalah 2000" },
      { "id": "C", "text": "Laju reaksi di atas berbanding lurus dengan waktu reaksinya" },
      { "id": "D", "text": "Total orde reaksinya adalah dua" },
      { "id": "E", "text": "Orde reaksi terhadap B adalah dua" }
    ],
    "kunci": ["B", "E"],
    "pembahasan": "<strong>Penentuan Orde Reaksi &amp; Konstanta Laju (k):</strong><br>\n1. <strong>Orde reaksi terhadap B (bandingkan data 1 dan 2, [A] tetap = 0,1 M):</strong><br>\n<code>(0,2 / 0,1)<sup>y</sup> = 8 / 2 &rarr; 2<sup>y</sup> = 4 &rarr; y = 2</code> (<strong>Opsi E Benar</strong>).<br><br>\n2. <strong>Orde reaksi terhadap A (bandingkan data 2 dan 3, [B] tetap = 0,2 M):</strong><br>\n<code>(0,2 / 0,1)<sup>x</sup> = 16 / 8 &rarr; 2<sup>x</sup> = 2 &rarr; x = 1</code>.<br><br>\n3. <strong>Persamaan Laju &amp; Orde Total:</strong><br>\n<code>V = k [A][B]<sup>2</sup></code> dengan orde total = <code>1 + 2 = 3</code> (Opsi A dan D salah; Opsi C salah karena laju reaksi berbanding terbalik dengan waktu reaksi).<br><br>\n4. <strong>Nilai Konstanta Laju Reaksi (k):</strong><br>\nSubstitusikan data percobaan 1:<br>\n<code>2 = k &times; (0,1) &times; (0,1)<sup>2</sup> &rarr; 2 = k &times; 10<sup>&minus;3</sup> &rarr; k = 2000 M<sup>&minus;2</sup> s<sup>&minus;1</sup></code> (<strong>Opsi B Benar</strong>).<br><br>\n<strong>Kunci Jawaban: B, E</strong>",
    "kode": "25KIM-INTEN4-027"
  },
  {
    "id": 28,
    "elemen": "Kinetika Kimia (Laju Reaksi)",
    "subelemen": "Faktor-Faktor yang Mempengaruhi Laju Reaksi",
    "indikator": "Mengidentifikasi variabel bebas yang mempengaruhi laju reaksi berdasarkan tabel eksperimen CaCO3 dan HCl.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui data percobaan untuk reaksi:\n<br><span class=\"font-mono text-xs sm:text-sm\">CaCO<sub>3</sub>(s) + 2HCl(aq) &rarr; CaCl<sub>2</sub>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)</span>\n</p>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-[420px] text-xs border border-slate-300 mx-auto text-center\">\n    <thead class=\"bg-slate-100 font-semibold text-slate-800\">\n      <tr>\n        <th class=\"p-2 border border-slate-300\">No</th>\n        <th class=\"p-2 border border-slate-300\">Bentuk 1 gram CaCO<sub>3</sub></th>\n        <th class=\"p-2 border border-slate-300\">Konsentrasi HCl</th>\n        <th class=\"p-2 border border-slate-300\">Suhu</th>\n        <th class=\"p-2 border border-slate-300\">Waktu untuk memperoleh 5 mL CO<sub>2</sub></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"p-2 border\">1</td><td class=\"p-2 border\">Serbuk</td><td class=\"p-2 border\">2 M</td><td class=\"p-2 border\">29 &deg;C</td><td class=\"p-2 border\">20 detik</td></tr>\n      <tr><td class=\"p-2 border\">2</td><td class=\"p-2 border\">Butiran</td><td class=\"p-2 border\">2 M</td><td class=\"p-2 border\">32 &deg;C</td><td class=\"p-2 border\">25 detik</td></tr>\n      <tr><td class=\"p-2 border\">3</td><td class=\"p-2 border\">Serbuk</td><td class=\"p-2 border\">2 M</td><td class=\"p-2 border\">37 &deg;C</td><td class=\"p-2 border\">10 detik</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan tabel percobaan di atas, faktor yang mempengaruhi laju reaksi adalah...\n</p>",
    "options": [
      { "id": "A", "text": "Massa CaCO₃ dan konsentrasi HCl" },
      { "id": "B", "text": "Bentuk CaCO₃ dan suhu" },
      { "id": "C", "text": "Bentuk CaCO₃ dan konsentrasi HCl" },
      { "id": "D", "text": "Suhu dan laju reaksi" },
      { "id": "E", "text": "Massa CaCO₃ dan volume HCl" }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Analisis Variabel pada Tabel Percobaan Laju Reaksi:</strong><br>\n&bull; <strong>Variabel Kontrol (Tetap):</strong> Massa CaCO<sub>3</sub> (tetap 1 gram) dan konsentrasi HCl (tetap 2 M).<br>\n&bull; <strong>Variabel Bebas (Berubah):</strong><br>\n1. <strong>Bentuk CaCO<sub>3</sub> / Luas permukaan bidang sentuh</strong> (serbuk vs butiran).<br>\n2. <strong>Suhu reaksi</strong> (29 &deg;C, 32 &deg;C, dan 37 &deg;C).<br>\n&bull; <strong>Variabel Terikat:</strong> Waktu / laju pembentukan 5 mL gas CO<sub>2</sub>.<br><br>\nJadi, faktor yang mempengaruhi laju reaksi pada percobaan tersebut adalah <strong>bentuk CaCO<sub>3</sub> dan suhu</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25KIM-INTEN4-028"
  },
  {
    "id": 29,
    "elemen": "Kesetimbangan Kimia",
    "subelemen": "Pergeseran Kesetimbangan (Asas Le Chatelier)",
    "indikator": "Menentukan perlakuan yang tepat untuk memaksimalkan produksi amonia pada proses Haber-Bosch.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPembuatan gas NH<sub>3</sub> menurut proses Haber-Bosch dilakukan dengan mereaksikan gas N<sub>2</sub> dan gas H<sub>2</sub> menurut persamaan reaksi kesetimbangan:\n</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono text-sm text-slate-800 mb-3\">\nN<sub>2</sub>(g) + 3H<sub>2</sub>(g) &rightleftharpoons; 2NH<sub>3</sub>(g) &emsp; &Delta;H = &minus;x kkal\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nUntuk mencapai hasil gas NH<sub>3</sub> yang maksimal dapat dilakukan dengan cara...\n</p>",
    "options": [
      { "id": "A", "text": "Memperbesar volume" },
      { "id": "B", "text": "Menaikkan suhu" },
      { "id": "C", "text": "Memperbesar tekanan" },
      { "id": "D", "text": "Memperbesar volume dan menaikkan suhu" },
      { "id": "E", "text": "Menurunkan tekanan dan mempertahankan suhu tidak terlalu tinggi" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Penerapan Asas Le Chatelier pada Proses Haber-Bosch:</strong><br>\nPersamaan reaksi: <code>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) &rightleftharpoons; 2NH<sub>3</sub>(g) &Delta;H = &minus;x kkal</code><br>\n&bull; Jumlah koefisien gas di ruas kiri (pereaksi) = <code>1 + 3 = 4</code>.<br>\n&bull; Jumlah koefisien gas di ruas kanan (produk) = <code>2</code>.<br>\n&bull; Reaksi bersifat eksoterm (<code>&Delta;H &lt; 0</code>).<br><br>\nAgar kesetimbangan bergeser ke kanan (menghasilkan NH<sub>3</sub> maksimal), tindakan yang harus dilakukan adalah <strong>memperbesar tekanan</strong> (atau memperkecil volume) sehingga kesetimbangan bergeser ke arah jumlah koefisien gas yang lebih kecil (ruas kanan).<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-029"
  },
  {
    "id": 30,
    "elemen": "Kesetimbangan Kimia",
    "subelemen": "Tetapan Kesetimbangan Tekanan Parsial (Kp)",
    "indikator": "Menghitung tekanan parsial gas produk saat setimbang dari nilai Kp dan tekanan parsial gas reaktan.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTetapan kesetimbangan berdasarkan tekanan (K<sub>p</sub>) adalah hasil kali tekanan parsial gas-gas hasil reaksi dibagi dengan hasil kali tekanan parsial gas-gas reaktan setelah tiap-tiap tekanan dipangkatkan dengan koefisiennya menurut persamaan reaksi.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nHarga K<sub>p</sub> untuk reaksi kesetimbangan: <strong>2X(g) &rightleftharpoons; 3Y(g)</strong> pada suhu tertentu adalah <sup>1</sup>/<sub>8</sub>. Jika dalam kesetimbangan tekanan parsial X adalah 8 atm, maka tekanan parsial Y adalah...\n</p>",
    "options": [
      { "id": "A", "text": "1/64 atm" },
      { "id": "B", "text": "1 atm" },
      { "id": "C", "text": "2 atm" },
      { "id": "D", "text": "6 atm" },
      { "id": "E", "text": "8 atm" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Perhitungan Tekanan Parsial dari Tetapan Kesetimbangan K<sub>p</sub>:</strong><br>\nPersamaan reaksi: <code>2X(g) &rightleftharpoons; 3Y(g)</code><br>\nRumus K<sub>p</sub>:<br>\n<code>K<sub>p</sub> = (P<sub>Y</sub>)<sup>3</sup> / (P<sub>X</sub>)<sup>2</sup></code><br><br>\nSubstitusikan nilai <code>K<sub>p</sub> = 1/8</code> dan <code>P<sub>X</sub> = 8 atm</code>:<br>\n<code>1/8 = (P<sub>Y</sub>)<sup>3</sup> / (8)<sup>2</sup></code><br>\n<code>1/8 = (P<sub>Y</sub>)<sup>3</sup> / 64</code><br>\n<code>(P<sub>Y</sub>)<sup>3</sup> = 64 / 8 = 8</code><br>\n<code>P<sub>Y</sub> = &sup3;&radic;8 = 2 atm</code>.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-INTEN4-030"
  }
];

if (typeof window !== 'undefined') {
  window.tkaPaket4Data = tkaPaket4Data;
  window.tkaPackages = window.tkaPackages || {};
  window.tkaPackages['paket4'] = {
    id: "paket4",
    title: "Paket 4: Try Out TKA-1 Prosus Inten Kimia SMA 2025/2026 (30 Soal)",
    shortTitle: "Paket 4 (TO Prosus Inten • 30 Soal)",
    badge: "TO Inten 30 Soal",
    total: 30,
    get data() { return tkaPaket4Data; }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaPaket4Data };
}
