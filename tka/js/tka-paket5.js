// tka/js/tka-paket5.js
// Bank Data Lengkap 25 Soal TKA Kimia SMA Paket 5 (Prediksi TKA Kimia 2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan arsip Prediksi Resmi TKA Kimia SMA 2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaPaket5Data = [
  // ----------------------------------------------------
  // Bagian 1: Pilihan Ganda (No. 1 - 15)
  // ----------------------------------------------------
  {
    "id": 1,
    "elemen": "Struktur Atom & Ikatan Kimia",
    "subelemen": "Energi Ionisasi & Karakter Senyawa",
    "indikator": "Menganalisis rumus kimia dan sifat fisik senyawa berdasarkan data energi ionisasi dan konfigurasi elektron.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang insinyur material merekayasa sel fotovoltaik baru yang stabil pada suhu ekstrem. Ia menganalisis dua unsur tak dikenal hasil sintesis laboratorium, yaitu Unsur M dan Unsur X.<br>\nData energi ionisasi berurutan unsur M (dalam kJ/mol):<br>\n<code>IE₁ = 578, IE₂ = 1820, IE₃ = 2750, IE₄ = 11600</code>.<br>\nUnsur X memiliki konfigurasi elektron keadaan dasar: <code>[Ne] 3s² 3p⁴</code>.<br><br>\nJika Unsur M dan Unsur X direaksikan untuk membentuk senyawa pelapis sel fotovoltaik, manakah rumus kimia dan perkiraan sifat fisik yang paling akurat dari senyawa tersebut?\n</p>",
    "options": [
      { "id": "A", "text": "M₂X₃, berupa padatan ionik berkonduktivitas tinggi saat dilelehkan." },
      { "id": "B", "text": "MX₂, berupa molekul kovalen nonpolar bertitik didih rendah." },
      { "id": "C", "text": "MX, berupa molekul kovalen polar yang larut baik dalam benzena." },
      { "id": "D", "text": "M₂X, berupa padatan amorf berikatan kovalen koordinasi raksasa." },
      { "id": "E", "text": "M₃X₂, berupa padatan ionik berkonduktivitas tinggi saat padat." }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Analisis Valensi & Karakter Ikatan:</strong><br>\n1. <strong>Valensi Unsur M:</strong> Terjadi lonjakan energi ionisasi yang sangat drastis dari IE₃ (2.750 kJ/mol) ke IE₄ (11.600 kJ/mol). Lonjakan lebih dari 4 kali lipat ini membuktikan bahwa unsur M memiliki 3 elektron valensi (golongan IIIA) dan membentuk kation stabil <code>M³⁺</code>.<br>\n2. <strong>Valensi Unsur X:</strong> Konfigurasi <code>[Ne] 3s² 3p⁴</code> memiliki 6 elektron valensi (golongan VIA) sehingga memerlukan 2 elektron untuk mencapai oktet stabil dan membentuk anion <code>X²⁻</code>.<br>\n3. <strong>Rumus Kimia & Sifat Fisik:</strong> Kation M³⁺ dan anion X²⁻ membentuk senyawa ionik <strong>M₂X₃</strong>. Senyawa ionik tidak menghantarkan listrik dalam wujud padat karena ion terkunci dalam kisi kristal, namun memiliki konduktivitas listrik yang tinggi ketika <strong>dilelehkan (fasa cair)</strong> atau dilarutkan dalam air karena ion-ionnya bebas bergerak.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "26KIM-PRED5-001"
  },
  {
    "id": 2,
    "elemen": "Stoikiometri & Hukum Dasar Kimia",
    "subelemen": "Persamaan Reaksi Pembakaran & Hubungan Mol",
    "indikator": "Menghitung kebutuhan reaktan gas oksigen dan produk uap air pada pembakaran campuran gas.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah fasilitas pengolahan biomassa menghasilkan gas metana (CH₄) yang terkontaminasi oleh gas hidrogen sulfida (H₂S). Ketika gas ini dibakar sempurna dalam reaktor dengan menggunakan oksigen berlebih (O₂), terjadi dua reaksi pembakaran:<br>\n&bull; Pembakaran metana menghasilkan gas karbondioksida (CO₂) dan uap air (H₂O).<br>\n&bull; Pembakaran hidrogen sulfida menghasilkan gas belerang dioksida (SO₂) dan uap air (H₂O).<br><br>\nSeorang teknisi mengumpulkan data jumlah molekul relatif yang bereaksi dan dihasilkan dalam satu siklus reaksi singkat pada reaktor:<br>\n&bull; Jumlah molekul CH₄ yang terbakar = <em>n</em> molekul.<br>\n&bull; Jumlah molekul H₂S yang terbakar = <em>2n</em> molekul.<br><br>\nPernyataan yang benar mengenai banyaknya molekul gas O₂ yang diperlukan dan total molekul uap air (H₂O) yang dihasilkan adalah...\n</p>",
    "options": [
      { "id": "A", "text": "membutuhkan 3,5n molekul O₂ dan menghasilkan 3n molekul H₂O." },
      { "id": "B", "text": "membutuhkan 5n molekul O₂ dan menghasilkan 4n molekul H₂O." },
      { "id": "C", "text": "membutuhkan 5n molekul O₂ dan menghasilkan 3n molekul H₂O." },
      { "id": "D", "text": "membutuhkan 4n molekul O₂ dan menghasilkan 4n molekul H₂O." },
      { "id": "E", "text": "membutuhkan 6n molekul O₂ dan menghasilkan 5n molekul H₂O." }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Penyetaraan Reaksi & Stoikiometri Molekul:</strong><br>\n1. <strong>Reaksi 1 (Pembakaran Metana):</strong><br>\n<code>CH₄ + 2O₂ &rarr; CO₂ + 2H₂O</code><br>\nUntuk <em>n</em> molekul CH₄: membutuhkan <strong>2n O₂</strong> dan menghasilkan <strong>2n H₂O</strong>.<br><br>\n2. <strong>Reaksi 2 (Pembakaran H₂S):</strong><br>\n<code>2H₂S + 3O₂ &rarr; 2SO₂ + 2H₂O</code> &hArr; <code>H₂S + 1,5 O₂ &rarr; SO₂ + H₂O</code><br>\nUntuk <em>2n</em> molekul H₂S: membutuhkan <code>2n &times; 1,5 = 3n O₂</code> dan menghasilkan <code>2n &times; 1 = 2n H₂O</code>.<br><br>\n3. <strong>Total O₂ dan H₂O:</strong><br>\n&bull; Total molekul O₂ = <code>2n + 3n = 5n molekul O₂</code>.<br>\n&bull; Total molekul H₂O = <code>2n + 2n = 4n molekul H₂O</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "26KIM-PRED5-002"
  },
  {
    "id": 3,
    "elemen": "Stoikiometri & Kimia Lingkungan",
    "subelemen": "Analisis Campuran Gas & Emisi Karbon",
    "indikator": "Menghitung persentase volume gas campuran hidrokarbon dan menganalisis dampak emisinya.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah industri kuliner menggunakan bahan bakar LPG (Liquefied Petroleum Gas) yang terdiri dari campuran gas propana (C₃H₈) dan butana (C₄H₁₀). Dalam rangka uji batas emisi karbon, sebanyak 10 liter sampel gas LPG dibakar sempurna dengan oksigen berlebih pada suhu dan tekanan yang sama. Dari hasil pengukuran sensor emisi gas buang, total volume gas CO₂ murni yang terbentuk dicatat sebesar 34 liter.<br><br>\nBerdasarkan data eksperimen tersebut, berapakah persentase volume gas propana (C₃H₈) dalam sampel LPG industri tersebut, dan bagaimana dampaknya terhadap emisi jika proporsi butana ditingkatkan?\n</p>",
    "options": [
      { "id": "A", "text": "60%; semakin tinggi proporsi butana, volume CO₂ yang dihasilkan per liter campuran akan semakin meningkat." },
      { "id": "B", "text": "60%; semakin tinggi proporsi butana, volume CO₂ yang dihasilkan per liter campuran akan semakin menurun." },
      { "id": "C", "text": "40%; semakin tinggi proporsi butana, volume CO₂ yang dihasilkan per liter campuran akan semakin meningkat." },
      { "id": "D", "text": "40%; semakin tinggi proporsi butana, volume CO₂ yang dihasilkan per liter campuran tidak akan berubah karena keduanya merupakan alkana." },
      { "id": "E", "text": "30%; semakin tinggi proporsi butana, jumlah molekul CO₂ yang terbentuk akan berkurang karena butana membutuhkan lebih banyak oksigen." }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Perhitungan Hukum Gay-Lussac & Analisis Emisi:</strong><br>\n1. <strong>Persamaan Reaksi Pembakaran:</strong><br>\n&bull; <code>C₃H₈(g) + 5O₂(g) &rarr; 3CO₂(g) + 4H₂O(g)</code> (1 L C₃H₈ menghasilkan 3 L CO₂)<br>\n&bull; <code>C₄H₁₀(g) + 13/2 O₂(g) &rarr; 4CO₂(g) + 5H₂O(g)</code> (1 L C₄H₁₀ menghasilkan 4 L CO₂)<br><br>\n2. <strong>Perhitungan Persentase Volume:</strong><br>\nMisalkan volume C₃H₈ = <em>x</em> liter, maka volume C₄H₁₀ = <em>(10 &minus; x)</em> liter.<br>\nVolume total CO₂ = <code>3x + 4(10 &minus; x) = 34</code><br>\n<code>3x + 40 &minus; 4x = 34 &rarr; 40 &minus; x = 34 &rarr; x = 6 liter</code>.<br>\nPersentase C₃H₈ = <code>(6 / 10) &times; 100% = 60%</code>.<br><br>\n3. <strong>Analisis Emisi Karbon:</strong> Karena 1 liter butana (C₄H₁₀) menghasilkan 4 liter CO₂ sedangkan 1 liter propana (C₃H₈) hanya menghasilkan 3 liter CO₂, peningkatan proporsi butana akan menaikkan total volume gas rumah kaca CO₂ yang diemisikan per liter campuran.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "26KIM-PRED5-003"
  },
  {
    "id": 4,
    "elemen": "Kesetimbangan Kimia",
    "subelemen": "Grafik Mol Kesetimbangan & Derajat Disosiasi",
    "indikator": "Menentukan persamaan reaksi kesetimbangan dan derajat disosiasi dari kurva perubahan mol zat.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan grafik kesetimbangan kimia berikut pada volume sistem 1 liter dan suhu tetap:\n</p>\n<div class=\"my-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center\">\n  <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md h-auto\">\n    <line x1=\"50\" y1=\"190\" x2=\"370\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"2\" />\n    <line x1=\"50\" y1=\"190\" x2=\"50\" y2=\"20\" stroke=\"#64748b\" stroke-width=\"2\" />\n    <text x=\"30\" y=\"25\" font-size=\"11\" fill=\"#334155\" font-weight=\"bold\">Mol</text>\n    <text x=\"340\" y=\"210\" font-size=\"11\" fill=\"#334155\" font-weight=\"bold\">Waktu (t)</text>\n    <!-- Sumbu Y ticks -->\n    <text x=\"25\" y=\"195\" font-size=\"10\" fill=\"#64748b\">0</text>\n    <text x=\"20\" y=\"155\" font-size=\"10\" fill=\"#64748b\">0,2</text>\n    <text x=\"20\" y=\"115\" font-size=\"10\" fill=\"#64748b\">0,4</text>\n    <text x=\"20\" y=\"75\" font-size=\"10\" fill=\"#64748b\">0,6</text>\n    <text x=\"20\" y=\"35\" font-size=\"10\" fill=\"#64748b\">0,8</text>\n    <!-- Garis grid horizontal -->\n    <line x1=\"50\" y1=\"150\" x2=\"370\" y2=\"150\" stroke=\"#e2e8f0\" stroke-dasharray=\"4\" />\n    <line x1=\"50\" y1=\"110\" x2=\"370\" y2=\"110\" stroke=\"#e2e8f0\" stroke-dasharray=\"4\" />\n    <line x1=\"50\" y1=\"70\" x2=\"370\" y2=\"70\" stroke=\"#e2e8f0\" stroke-dasharray=\"4\" />\n    <line x1=\"50\" y1=\"30\" x2=\"370\" y2=\"30\" stroke=\"#e2e8f0\" stroke-dasharray=\"4\" />\n    <!-- Kurva A (reaktan: 0.8 -> 0.4) -->\n    <path d=\"M 50 30 Q 150 100 240 110 L 360 110\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" />\n    <text x=\"365\" y=\"115\" font-size=\"12\" font-weight=\"bold\" fill=\"#ef4444\">A</text>\n    <!-- Kurva B (produk: 0 -> 0.2) -->\n    <path d=\"M 50 190 Q 150 155 240 150 L 360 150\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\" />\n    <text x=\"365\" y=\"155\" font-size=\"12\" font-weight=\"bold\" fill=\"#3b82f6\">B</text>\n    <!-- Kurva C (produk: 0 -> 0.6) -->\n    <path d=\"M 50 190 Q 150 85 240 70 L 360 70\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" />\n    <text x=\"365\" y=\"75\" font-size=\"12\" font-weight=\"bold\" fill=\"#10b981\">C</text>\n    <!-- Garis setimbang -->\n    <line x1=\"240\" y1=\"20\" x2=\"240\" y2=\"190\" stroke=\"#94a3b8\" stroke-dasharray=\"3\" />\n    <text x=\"215\" y=\"205\" font-size=\"10\" fill=\"#94a3b8\">Setimbang</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan grafik tersebut, persamaan reaksi kesetimbangan yang tepat beserta nilai derajat disosiasi (&alpha;) spesi A adalah...\n</p>",
    "options": [
      { "id": "A", "text": "A(g) ⇌ B(g) + 3C(g) dengan α = 0,25" },
      { "id": "B", "text": "2A(g) ⇌ B(g) + 3C(g) dengan α = 0,50" },
      { "id": "C", "text": "2A(g) ⇌ B(g) + C(g) dengan α = 0,50" },
      { "id": "D", "text": "A(g) ⇌ 2B(g) + 3C(g) dengan α = 0,20" },
      { "id": "E", "text": "3A(g) ⇌ B(g) + 2C(g) dengan α = 0,75" }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Analisis Perubahan Mol & Koefisien Reaksi:</strong><br>\n1. <strong>Perubahan Mol Spesi (&Delta;n):</strong><br>\n&bull; Spesi A (reaktan): mol awal = 0,8 mol, sisa setimbang = 0,4 mol &rarr; <code>&Delta;n(A) = 0,8 &minus; 0,4 = 0,4 mol (berkurang)</code>.<br>\n&bull; Spesi B (produk): mol awal = 0 mol, saat setimbang = 0,2 mol &rarr; <code>&Delta;n(B) = +0,2 mol</code>.<br>\n&bull; Spesi C (produk): mol awal = 0 mol, saat setimbang = 0,6 mol &rarr; <code>&Delta;n(C) = +0,6 mol</code>.<br><br>\n2. <strong>Rasio Koefisien Reaksi:</strong><br>\nPerbandingan mol yang bereaksi berbanding lurus dengan koefisien:<br>\n<code>Koef A : Koef B : Koef C = 0,4 : 0,2 : 0,6 = 2 : 1 : 3</code>.<br>\nMaka persamaan reaksinya adalah: <strong>2A(g) &hArr; B(g) + 3C(g)</strong>.<br><br>\n3. <strong>Derajat Disosiasi (&alpha;) Spesi A:</strong><br>\n<code>&alpha; = mol A bereaksi / mol A mula-mula = 0,4 / 0,8 = 0,50</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "26KIM-PRED5-004"
  },
  {
    "id": 5,
    "elemen": "Termokimia",
    "subelemen": "Hukum Hess & Efisiensi Energi",
    "indikator": "Menghitung entalpi reaksi pembentukan gas menggunakan prinsip Hukum Hess.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDi industri pengemasan daging, gas karbon monoksida (CO) digunakan untuk menjaga warna merah segar pada produk daging. Gas ini dapat disintesis berdasarkan prinsip termokimia melalui dua tahap reaksi:<br>\n(1) <code>CH₄(g) + 2O₂(g) &rarr; CO₂(g) + 2H₂O(g)</code> &nbsp; &Delta;H₁ = &minus;802 kJ<br>\n(2) <code>CH₄(g) + CO₂(g) &rarr; 2CO(g) + 2H₂(g)</code> &nbsp; &Delta;H₂ = +247 kJ<br><br>\nInsinyur proses merancang reaksi keseluruhan (reforming parsial metana) sesuai persamaan:<br>\n<code>2CH₄(g) + 2O₂(g) ...</code> atau penggabungan langsung kedua tahap:<br>\n<code>2CH₄(g) + 2O₂(g) &rarr; 2CO(g) + 2H₂(g) + 2H₂O(g)</code>.<br><br>\nBerdasarkan hukum Hess, berapakah entalpi reaksi keseluruhan penggabungan tersebut dan bagaimana sifat termalnya terhadap konsumsi energi pabrik?\n</p>",
    "options": [
      { "id": "A", "text": "ΔH = −308 kJ; bersifat eksotermik sehingga dapat menghemat konsumsi energi bahan bakar eksternal." },
      { "id": "B", "text": "ΔH = −555 kJ; bersifat eksotermik karena reaksi pembakaran metana mendominasi seluruh sistem." },
      { "id": "C", "text": "ΔH = +1049 kJ; bersifat endotermik sehingga membutuhkan suplai pemanas listrik berdaya tinggi secara terus-menerus." },
      { "id": "D", "text": "ΔH = +308 kJ; bersifat endotermik sehingga pabrik harus menyuplai kalor tambahan dalam jumlah besar." },
      { "id": "E", "text": "ΔH = +555 kJ; bersifat endotermik karena reaksi pembakaran metana mendominasi seluruh sistem." }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Penerapan Penjumlahan Hukum Hess:</strong><br>\nJumlahkan reaksi (1) dan reaksi (2):<br>\n<code>CH₄(g) + 2O₂(g) &rarr; CO₂(g) + 2H₂O(g) &nbsp; &Delta;H₁ = &minus;802 kJ</code><br>\n<code>CH₄(g) + CO₂(g) &rarr; 2CO(g) + 2H₂(g) &nbsp; &Delta;H₂ = +247 kJ</code><br>\n------------------------------------------------------------- (+)<br>\n<code>2CH₄(g) + 2O₂(g) &rarr; 2CO(g) + 2H₂(g) + 2H₂O(g)</code><br>\n<code>&Delta;H_total = &Delta;H₁ + &Delta;H₂ = (&minus;802 kJ) + (+247 kJ) = &minus;555 kJ</code>.<br><br>\nKarena bertanda negatif (&Delta;H &lt; 0), reaksi bersifat <strong>eksotermik</strong> dan melepaskan kalor ke lingkungan.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "26KIM-PRED5-005"
  },
  {
    "id": 6,
    "elemen": "Larutan Asam-Basa & Penyangga",
    "subelemen": "Asidosis Respiratorik & Penyangga Darah",
    "indikator": "Menganalisis pergeseran kesetimbangan sistem penyangga bikarbonat pada gangguan pernapasan.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang pasien darurat medis mengalami hipoventilasi (penurunan frekuensi napas) akibat overdosis obat penenang, sehingga terjadi penumpukan gas CO₂ di dalam darahnya. Kondisi ini memicu gangguan keseimbangan asam-basa darah yang melibatkan sistem penyangga utama:<br>\n<code>CO₂(g) + H₂O(l) ⇌ H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq)</code><br><br>\nTim medis mencatat bahwa pH darah pasien turun dari 7,40 menjadi 7,15 (asidosis respiratorik). Tindakan atau analisis kimia yang paling tepat untuk kondisi tersebut adalah...\n</p>",
    "options": [
      { "id": "A", "text": "kenaikan konsentrasi CO₂ menggeser kesetimbangan ke kanan, meningkatkan konsentrasi H⁺; pemberian larutan infus yang mengandung HCO₃⁻ dapat membantu menaikkan pH darah kembali mendekati normal." },
      { "id": "B", "text": "kenaikan konsentrasi CO₂ menggeser kesetimbangan ke kiri, menurunkan konsentrasi HCO₃⁻; infus asam encer seperti HCl dapat menstabilkan pH darah." },
      { "id": "C", "text": "penurunan pH terjadi karena H₂CO₃ bertindak sebagai basa Lewis yang menerima pasangan elektron dari air." },
      { "id": "D", "text": "sistem penyangga darah gagal total karena nilai Ka dari H₂CO₃ berubah secara signifikan akibat perubahan tekanan parsial CO₂." },
      { "id": "E", "text": "penambahan ion HCO₃⁻ justru akan menurunkan pH lebih lanjut karena HCO₃⁻ bereaksi dengan air membentuk ion OH⁻ yang bersifat toksik." }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Prinsip Le Chatelier pada Sistem Buffer Darah:</strong><br>\n1. <strong>Asidosis Respiratorik:</strong> Penumpukan CO₂ meningkatkan reaktan di sisi kiri. Sesuai asas Le Chatelier, kesetimbangan bergeser ke arah kanan, memicu ionisasi <code>H₂CO₃ &rarr; H⁺ + HCO₃⁻</code>. Peningkatan [H⁺] menyebabkan penurunan pH darah.<br>\n2. <strong>Tindakan Terapi Medis:</strong> Pemberian infus bikarbonat (HCO₃⁻) akan bereaksi dengan kelebihan ion H⁺ membentuk asam karbonat yang kemudian diubah menjadi CO₂ dan dikeluarkan lewat ventilasi mekanik, sehingga konsentrasi [H⁺] berkurang dan pH darah kembali naik ke rentang fisiologis 7,35 - 7,45.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "26KIM-PRED5-006"
  },
  {
    "id": 7,
    "elemen": "Asam-Basa & Titrasi",
    "subelemen": "Kurva Titrasi & Pemilihan Indikator",
    "indikator": "Mengidentifikasi pasangan titrat-titran dan indikator yang sesuai berdasarkan kurva titrasi.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan kurva titrasi asam-basa berikut:\n</p>\n<div class=\"my-3 text-center\">\n  <img src=\"/tka/img/kimia-paket5/image1.jpg\" alt=\"Kurva Titrasi Asam Basa\" class=\"max-w-xs mx-auto rounded-xl border border-slate-200 shadow-2xs\" />\n</div>\n<div class=\"my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed\">\n  <strong>Data Trayek Indikator:</strong><br>\n  &bull; Metil Jingga: pH 3,1 &minus; 4,4 (Merah &rarr; Kuning)<br>\n  &bull; Bromtimol Biru: pH 6,0 &minus; 7,6 (Kuning &rarr; Biru)<br>\n  &bull; Fenolftalein (PP): pH 8,0 &minus; 9,8 (Tak berwarna &rarr; Merah muda)\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan kurva tersebut, pasangan larutan asam-basa dan indikator yang digunakan pada titrasi tersebut adalah...\n</p>",
    "options": [
      { "id": "A", "text": "larutan CH₃COOH dititrasi oleh larutan NaOH dengan indikator bromthymol blue" },
      { "id": "B", "text": "larutan CH₃COOH dititrasi oleh larutan NH₄OH dengan indikator phenolftalein" },
      { "id": "C", "text": "larutan CH₃COOH dititrasi oleh larutan NaOH dengan indikator methyl orange" },
      { "id": "D", "text": "larutan HCl dititrasi oleh larutan NaOH dengan indikator phenolftalein" },
      { "id": "E", "text": "larutan HCl dititrasi oleh larutan NH₄OH dengan indikator phenolftalein" }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Analisis Kurva Titrasi:</strong><br>\n1. <strong>Identifikasi Jenis Titrasi:</strong> Titik awal pH sangat rendah (sekitar pH 1 &rarr; asam kuat). Terjadi lonjakan tajam pada penambahan 25 mL larutan basa dengan titik ekivalen tepat pada <strong>pH = 7,0</strong>. Ini membuktikan titrasi terjadi antara <strong>asam kuat (HCl) dititrasi oleh basa kuat (NaOH)</strong>.<br>\n2. <strong>Pemilihan Indikator:</strong> Pada titrasi asam kuat dengan basa kuat, lonjakan pH di sekitar titik ekivalen sangat panjang (pH 4 s.d. 10). Indikator <strong>fenolftalein (PP)</strong> yang memiliki trayek 8,0 - 9,8 berada tepat pada daerah lonjakan tajam tersebut dan memberikan titik akhir yang sangat jelas (tak berwarna menjadi merah muda tepat saat 1 tetes kelebihan basa).<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "26KIM-PRED5-007"
  },
  {
    "id": 8,
    "elemen": "Larutan Asam-Basa",
    "subelemen": "Indikator Alami & pH Tanah",
    "indikator": "Menentukan perkiraan pH sampel tanah menggunakan trayek perubahan warna indikator alami.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang ahli agronomi menguji sampel tanah pertanian untuk menentukan apakah perlu dilakukan pengapuran (penambahan CaCO₃) agar tanah cocok untuk tanaman teh (pH optimal 4,5 &minus; 5,5). Ekstrak air dari tanah tersebut diuji menggunakan tiga jenis indikator alami ekstrak tumbuhan yang telah dikalibrasi:<br>\n&bull; <strong>Ekstrak Bunga Telang</strong> (trayek 3,0 &minus; 4,5; Merah muda &rarr; Biru)<br>\n&bull; <strong>Ekstrak Kunyit</strong> (trayek 6,5 &minus; 8,0; Kuning &rarr; Merah bata)<br>\n&bull; <strong>Ekstrak Kol Ungu</strong> (trayek 5,5 &minus; 7,5; Merah &rarr; Merah muda)<br><br>\nHasil pengamatan pada ekstrak tanah:<br>\n&bull; Ekstrak Bunga Telang: berwarna <strong>Biru</strong><br>\n&bull; Ekstrak Kunyit: berwarna <strong>Kuning</strong><br>\n&bull; Ekstrak Kol Ungu: berwarna <strong>Merah</strong><br><br>\nKesimpulan yang tepat mengenai kondisi tanah dan tindakan yang harus diambil adalah...\n</p>",
    "options": [
      { "id": "A", "text": "Tanah memiliki rentang pH 6,5 − 7,5, sehingga pengapuran berlebih telah terjadi." },
      { "id": "B", "text": "Tanah memiliki rentang pH 4,5 ≤ pH ≤ 5,5, yang sudah optimal untuk tanaman teh sehingga pengapuran tidak diperlukan." },
      { "id": "C", "text": "Tanah bersifat basa (pH > 8,0), sehingga perlu ditambahkan pupuk asam seperti amonium sulfat." },
      { "id": "D", "text": "Tanah bersifat sangat asam (pH < 3,0), sehingga pengapuran dalam jumlah sangat besar harus segera dilakukan." },
      { "id": "E", "text": "Tanah bersifat netral, sehingga pupuk apapun dapat digunakan tanpa batas dosis." }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Analisis Irisan Trayek pH Indikator:</strong><br>\n1. Bunga Telang berwarna Biru &rarr; <code>pH &ge; 4,5</code>.<br>\n2. Ekstrak Kunyit berwarna Kuning &rarr; <code>pH &le; 6,5</code>.<br>\n3. Ekstrak Kol Ungu berwarna Merah &rarr; <code>pH &le; 5,5</code>.<br>\nIrisan ketiga data tersebut: <strong>4,5 &le; pH &le; 5,5</strong>.<br>\nRentang ini persis memenuhi pH optimal pertumbuhan tanaman teh (4,5 - 5,5), sehingga tanah dalam kondisi prima dan <strong>pengapuran tidak diperlukan</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "26KIM-PRED5-008"
  },
  {
    "id": 9,
    "elemen": "Sifat Koligatif Larutan",
    "subelemen": "Tekanan Osmotik Cairan Infus",
    "indikator": "Menghitung massa zat terlarut elektrolit biner untuk membuat larutan infus isotonik.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nApabila seseorang memerlukan injeksi cairan nutrisi/infus, cairan infus tersebut harus bersifat isotonik dengan cairan dalam darah. Injeksi cairan infus berupa larutan garam fisiologis (NaCl, Mr = 58,5) harus isotonik dengan tekanan osmotik darah sebesar 9,84 atm pada suhu ruangan 27&deg;C (T = 300 K).<br><br>\nApabila dibuat 1 liter cairan infus dan NaCl terionisasi sempurna dalam air, massa NaCl yang dibutuhkan adalah... (R = 0,082 L.atm/mol.K)\n</p>",
    "options": [
      { "id": "A", "text": "4,68 gram" },
      { "id": "B", "text": "5,85 gram" },
      { "id": "C", "text": "11,70 gram" },
      { "id": "D", "text": "23,40 gram" },
      { "id": "E", "text": "46,80 gram" }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Perhitungan Tekanan Osmotik Larutan Elektrolit:</strong><br>\n1. <strong>Faktor van 't Hoff NaCl:</strong> NaCl &rarr; Na⁺ + Cl⁻ (n = 2 ion, terionisasi sempurna &alpha; = 1 &rarr; i = 2).<br>\n2. <strong>Rumus Osmotik:</strong><br>\n<code>&pi; = M &times; R &times; T &times; i</code><br>\n<code>9,84 = M &times; 0,082 &times; 300 &times; 2</code><br>\n<code>9,84 = M &times; 49,2 &rarr; M = 9,84 / 49,2 = 0,2 M</code>.<br><br>\n3. <strong>Menghitung Massa NaCl (Volume = 1 L):</strong><br>\n<code>mol = M &times; V = 0,2 &times; 1 = 0,2 mol</code>.<br>\n<code>Massa NaCl = mol &times; Mr = 0,2 &times; 58,5 = 11,7 gram</code>.<br><br>\n<strong>Kunci Jawaban: C (11,70 gram)</strong>",
    "kode": "26KIM-PRED5-009"
  },
  {
    "id": 10,
    "elemen": "Elektrokimia",
    "subelemen": "Sel Volta & Notasi Sel",
    "indikator": "Mengevaluasi kebenaran penulisan notasi sel Volta dari diagram rangkaian sel Daniell.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan gambar sel Volta berikut:\n</p>\n<div class=\"my-3 text-center\">\n  <img src=\"/tka/img/kimia-paket5/image2.jpg\" alt=\"Sel Daniell Zn-Cu\" class=\"max-w-xs mx-auto rounded-xl border border-slate-200 shadow-2xs\" />\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nSeorang siswa menuliskan notasi sel untuk gambar di atas adalah: <code>Cu | Cu²⁺ || Zn²⁺ | Zn</code>.<br>\nBagaimana evaluasi yang tepat terhadap jawaban siswa tersebut?\n</p>",
    "options": [
      { "id": "A", "text": "Salah, seharusnya Zn | Zn²⁺ || Cu²⁺ | Cu" },
      { "id": "B", "text": "Benar, karena Cu mengalami reaksi oksidasi" },
      { "id": "C", "text": "Benar, karena notasi sel diawali dari reaksi oksidasi ke reduksi" },
      { "id": "D", "text": "Salah, karena Zn mengalami reaksi reduksi, maka ditulis di awal" },
      { "id": "E", "text": "Salah, karena notasi sel tidak memerlukan tanda jembatan garam" }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Aturan Penulisan Notasi Sel Galvani/Volta:</strong><br>\n1. Berdasarkan gambar, elektron mengalir dari elektrode Zn ke Cu. Seng (Zn) berada di anode dan mengalami oksidasi: <code>Zn(s) &rarr; Zn²⁺(aq) + 2e⁻</code>.<br>\n2. Tembaga (Cu) berada di katode dan mengalami reduksi: <code>Cu²⁺(aq) + 2e⁻ &rarr; Cu(s)</code>.<br>\n3. Konvensi internasional penulisan notasi sel adalah:<br>\n<strong>Anode (Oksidasi) || Katode (Reduksi)</strong><br>\nSehingga notasi yang benar adalah: <strong>Zn | Zn²⁺ || Cu²⁺ | Cu</strong>.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "26KIM-PRED5-010"
  },
  {
    "id": 11,
    "elemen": "Sifat Koligatif Larutan",
    "subelemen": "Penurunan Titik Beku Formulasi Aditif",
    "indikator": "Menganalisis penurunan titik beku larutan elektrolit vs non-elektrolit pada industri pangan beku.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam industri manufaktur makanan beku, es krim diproduksi dengan mengendalikan pembentukan kristal es agar teksturnya tetap lembut. Formulasi aditif pelindung titik beku (cryoprotectant) diuji menggunakan dua sampel larutan berikut dalam pelarut air (Kf = 1,86 &deg;C/m):<br>\n&bull; <strong>Sampel A:</strong> Larutan Sukrosa (C₁₂H₂₂O₁₁, Mr = 342 g/mol) 0,2 molal<br>\n&bull; <strong>Sampel B:</strong> Larutan Kalsium Klorida (CaCl₂, Mr = 111 g/mol) 0,1 molal (derajat ionisasi 80% / &alpha; = 0,8)<br><br>\nJika es krim harus disimpan pada suhu &minus;0,50&deg;C tanpa membeku sepenuhnya, analisis kesimpulan manakah yang paling akurat mengenai pemilihan sampel aditif tersebut?\n</p>",
    "options": [
      { "id": "A", "text": "Sampel A lebih disukai karena merupakan senyawa elektrolit yang tidak mengubah rasa es krim." },
      { "id": "B", "text": "Kedua sampel memberikan nilai titik beku yang identik karena jumlah total massa zat terlarut yang dicampurkan hampir sama." },
      { "id": "C", "text": "Sampel B lebih efektif menjaga es krim tetap cair pada −0,50°C karena memiliki titik beku ≈ −0,483°C." },
      { "id": "D", "text": "Sampel A menghasilkan titik beku −0,372°C sehingga pada −0,50°C produk sudah membeku, sedangkan Sampel B memiliki titik beku lebih rendah (−0,483°C) yang lebih mendekati target suhu." },
      { "id": "E", "text": "Sampel B tidak dapat digunakan karena disosiasi CaCl₂ menghasilkan i = 3 secara mutlak tanpa dipengaruhi derajat ionisasi." }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Perhitungan Penurunan Titik Beku:</strong><br>\n1. <strong>Sampel A (Sukrosa - Non-Elektrolit, i = 1):</strong><br>\n<code>&Delta;Tf = m &times; Kf = 0,2 &times; 1,86 = 0,372 &deg;C</code> &rarr; Titik beku Tf = &minus;0,372 &deg;C. Pada suhu &minus;0,50 &deg;C, sampel A sudah membeku.<br>\n2. <strong>Sampel B (CaCl₂ - Elektrolit):</strong><br>\nCaCl₂ &rarr; Ca²⁺ + 2Cl⁻ (n = 3 ion).<br>\n<code>i = 1 + (n &minus; 1)&alpha; = 1 + (3 &minus; 1)(0,8) = 1 + 1,6 = 2,6</code>.<br>\n<code>&Delta;Tf = m &times; Kf &times; i = 0,1 &times; 1,86 &times; 2,6 = 0,4836 &deg;C</code> &rarr; Titik beku Tf = &minus;0,483 &deg;C.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "26KIM-PRED5-011"
  },
  {
    "id": 12,
    "elemen": "Kimia Karbon & Energi",
    "subelemen": "Kalor Pembakaran Per Gram Alkana",
    "indikator": "Mengevaluasi efisiensi energi dan jejak karbon bahan bakar alkana dari nilai entalpi pembakaran per gram.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang ahli kimia menganalisis efisiensi energi bahan bakar cair berbasis alkana murni (C₃H₈, C₆H₁₄, C₉H₂₀, C₁₂H₂₆) yang digunakan untuk pembangkit listrik tenaga termal. Evaluasi dilakukan berdasarkan energi yang dihasilkan untuk setiap gram bahan bakar dan dampaknya terhadap jejak karbon. Data entalpi pembakaran per gram menunjukkan:<br>\n&bull; C₃H₈ = &minus;50,35 kJ/g<br>\n&bull; C₆H₁₄ = &minus;48,31 kJ/g<br>\n&bull; C₉H₂₀ = &minus;47,40 kJ/g<br>\n&bull; C₁₂H₂₆ = &minus;46,90 kJ/g<br><br>\nBerdasarkan data kuantitatif tersebut, kesimpulan penalaran manakah yang paling akurat?\n</p>",
    "options": [
      { "id": "A", "text": "C₆H₁₄ paling ideal karena meminimalkan pembentukan senyawa sampingan nitrogen oksida (NOx) di dalam ruang bakar." },
      { "id": "B", "text": "C₉H₂₀ paling efisien karena memiliki nilai kalor tengah yang seimbang dengan jumlah molekul air yang terbentuk saat reaksi." },
      { "id": "C", "text": "Semua jenis alkana memiliki nilai energi per gram yang konstan karena energi ikatan C−H dan C−C adalah sama." },
      { "id": "D", "text": "C₁₂H₂₆ paling ramah lingkungan karena kerapatan molekulnya tinggi sehingga tidak mudah menguap dan mencemari atmosfer saat penyimpanan." },
      { "id": "E", "text": "C₃H₈ paling ramah lingkungan dan efisien karena menghasilkan energi tertinggi per gram (−50,35 kJ/g) serta memiliki persentase massa karbon terkecil." }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Analisis Efisiensi Kalor & Emisi Karbon:</strong><br>\n1. <strong>Kerapatan Energi:</strong> Propana (C₃H₈) menghasilkan energi per gram terbesar (&minus;50,35 kJ/g) dibanding alkana berantai lebih panjang. Semakin pendek rantai alkana, semakin tinggi rasio H : C.<br>\n2. <strong>Persentase Karbon & Emisi:</strong> Pembakaran atom hidrogen menghasilkan H₂O dengan energi sangat tinggi tanpa karbon, sedangkan pembakaran atom karbon menghasilkan CO₂. Karena propana memiliki rasio hidrogen tertinggi, persentase massa karbonnya paling rendah, menghasilkan emisi CO₂ paling sedikit untuk tiap joule energi yang dihasilkan.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    "kode": "26KIM-PRED5-012"
  },
  {
    "id": 13,
    "elemen": "Sifat Koligatif Larutan",
    "subelemen": "Penurunan Tekanan Uap & Molalitas Partikel",
    "indikator": "Membandingkan penurunan tekanan uap larutan dari konsentrasi partikel efektif.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDi laboratorium hortikultura, tiga jenis larutan nutrisi hidroponik disiapkan dalam wadah terbuka pada suhu konstan. Penguapan air yang terlalu cepat dari wadah dapat menyebabkan konsentrasi nutrisi menjadi pekat dan merusak akar tanaman. Ketiga larutan dibuat dengan melarutkan massa yang sama (10 gram) dari masing-masing zat ke dalam 1 kg air murni:<br>\n&bull; <strong>Larutan I:</strong> Urea (CO(NH₂)₂, Mr = 60 g/mol)<br>\n&bull; <strong>Larutan II:</strong> Kalsium Klorida (CaCl₂, Mr = 111 g/mol, terionisasi sempurna)<br>\n&bull; <strong>Larutan III:</strong> Magnesium Sulfat (MgSO₄, Mr = 120 g/mol, terionisasi sempurna)<br><br>\nManakah larutan nutrisi yang paling efektif menahan laju penguapan air (memiliki tekanan uap larutan paling rendah)?\n</p>",
    "options": [
      { "id": "A", "text": "Larutan I, karena memiliki molalitas molekuler awal terbesar yaitu 0,167 m." },
      { "id": "B", "text": "Ketiga larutan memiliki kemampuan menahan penguapan yang sama karena massa zat terlarut yang ditambahkan sama persis (10 gram)." },
      { "id": "C", "text": "Larutan I dan Larutan III setara, karena keduanya memiliki nilai partikel efektif yang persis sama." },
      { "id": "D", "text": "Larutan III, karena ion Mg²⁺ dan SO₄²⁻ memiliki muatan ion paling besar sehingga menarik air paling kuat." },
      { "id": "E", "text": "Larutan II, karena menghasilkan molalitas partikel efektif terbesar yaitu ≈ 0,270 m." }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Hukum Raoult & Jumlah Partikel Efektif:</strong><br>\nLaju penguapan terendah (tekanan uap paling rendah) terjadi pada larutan dengan penurunan tekanan uap (&Delta;P) terbesar, yaitu larutan dengan <strong>molalitas partikel efektif (m &times; i) terbesar</strong>.<br>\n1. <strong>Urea (non-elektrolit, i = 1):</strong><br>\n<code>m_eff = (10 / 60) &times; 1 = 0,167 m</code>.<br>\n2. <strong>CaCl₂ (elektrolit, n = 3 ion, i = 3):</strong><br>\n<code>m_eff = (10 / 111) &times; 3 = 0,0901 &times; 3 &approx; 0,270 m</code>.<br>\n3. <strong>MgSO₄ (elektrolit, n = 2 ion, i = 2):</strong><br>\n<code>m_eff = (10 / 120) &times; 2 = 0,0833 &times; 2 &approx; 0,167 m</code>.<br><br>\nLarutan II menghasilkan konsentrasi partikel terlarut terbesar (0,270 m), sehingga paling efektif menghalangi molekul air menguap.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    "kode": "26KIM-PRED5-013"
  },
  {
    "id": 14,
    "elemen": "Kesetimbangan Larutan & Ksp",
    "subelemen": "Pengendapan & Ion Sejenis",
    "indikator": "Menghitung konsentrasi kation yang tersisa setelah reaksi pengendapan menggunakan konsep Ksp.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah laboratorium pengolahan limbah industri melakukan uji cepat untuk menentukan sisa ion perak setelah proses netralisasi dan pemisahan garam. Sebanyak 50 mL larutan AgNO₃ 0,01 M dicampurkan dengan 50 mL larutan NaCl 0,03 M dalam bejana gelas. Karena terbentuk endapan AgCl, sistem mencapai kesetimbangan yang dipengaruhi oleh tetapan hasil kali kelarutan (Ksp AgCl = 1 &times; 10⁻¹⁰).<br><br>\nBerapakah konsentrasi ion Ag⁺ yang tersisa dalam larutan campuran setelah mencapai kesetimbangan?\n</p>",
    "options": [
      { "id": "A", "text": "1 × 10⁻¹⁰ M" },
      { "id": "B", "text": "1 × 10⁻⁸ M" },
      { "id": "C", "text": "2 × 10⁻⁸ M" },
      { "id": "D", "text": "6,7 × 10⁻⁸ M" },
      { "id": "E", "text": "1 × 10⁻⁵ M" }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Perhitungan Pengendapan & Efek Ion Senama:</strong><br>\n1. <strong>Mol Awal:</strong><br>\n&bull; <code>Ag⁺ = 50 mL &times; 0,01 M = 0,5 mmol</code>.<br>\n&bull; <code>Cl⁻ = 50 mL &times; 0,03 M = 1,5 mmol</code>.<br>\nVolume total campuran = <code>50 + 50 = 100 mL</code>.<br><br>\n2. <strong>Stoikiometri Pengendapan:</strong><br>\n<code>Ag⁺ + Cl⁻ &rarr; AgCl(s)</code><br>\nAg⁺ habis bereaksi (0,5 mmol mengendap sebagai AgCl).<br>\nSisa Cl⁻ yang tidak mengendap = <code>1,5 &minus; 0,5 = 1,0 mmol</code>.<br>\nKonsentrasi Cl⁻ bebas = <code>1,0 mmol / 100 mL = 0,01 M = 10⁻² M</code>.<br><br>\n3. <strong>Sisa Ion Ag⁺ dalam Kesetimbangan Ksp:</strong><br>\n<code>Ksp = [Ag⁺][Cl⁻]</code><br>\n<code>1 &times; 10⁻¹⁰ = [Ag⁺] &times; (10⁻²) &rarr; [Ag⁺] = 1 &times; 10⁻⁸ M</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "26KIM-PRED5-014"
  },
  {
    "id": 15,
    "elemen": "Larutan Asam-Basa & Penyangga",
    "subelemen": "Penyangga Asam Asetat",
    "indikator": "Menganalisis komponen larutan penyangga dan menghitung pH dari reaksi asam lemah dengan basa kuat.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLarutan penyangga berguna untuk menjaga kestabilan pH cairan tubuh, makanan kaleng, dan formulasi obat. Sebanyak 100 mL larutan CH₃COOH 0,1 M direaksikan dengan 100 mL larutan NaOH 0,05 M. Diketahui Ka CH₃COOH = 1 &times; 10⁻⁵.<br><br>\nBerdasarkan data reaksi tersebut, berapakah pH larutan penyangga yang terbentuk?\n</p>",
    "options": [
      { "id": "A", "text": "pH = 4" },
      { "id": "B", "text": "pH = 5" },
      { "id": "C", "text": "pH = 6" },
      { "id": "D", "text": "pH = 8" },
      { "id": "E", "text": "pH = 9" }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Perhitungan Sistem Penyangga:</strong><br>\n1. <strong>Mol Reaktan:</strong><br>\n&bull; <code>CH₃COOH = 100 mL &times; 0,1 M = 10 mmol</code>.<br>\n&bull; <code>NaOH = 100 mL &times; 0,05 M = 5 mmol</code>.<br><br>\n2. <strong>Reaksi Netralisasi Sebagian:</strong><br>\n<code>CH₃COOH + NaOH &rarr; CH₃COONa + H₂O</code><br>\n&bull; Bereaksi: 5 mmol NaOH habis bereaksi dengan 5 mmol CH₃COOH.<br>\n&bull; Sisa CH₃COOH = <code>10 &minus; 5 = 5 mmol</code> (asam lemah).<br>\n&bull; Terbentuk CH₃COONa = <code>5 mmol</code> (basa konjugasi).<br><br>\n3. <strong>Menghitung pH:</strong><br>\n<code>[H⁺] = Ka &times; (mol asam / mol garam) = 10⁻⁵ &times; (5 / 5) = 10⁻⁵ M</code>.<br>\n<code>pH = &minus;log(10⁻⁵) = 5</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "26KIM-PRED5-015"
  },

  // ----------------------------------------------------
  // Bagian 2: Pilihan Ganda Kompleks / MCMA (No. 16 - 20)
  // ----------------------------------------------------
  {
    "id": 16,
    "elemen": "Stoikiometri",
    "subelemen": "Pereaksi Pembatas Reaksi Logam & Asam",
    "indikator": "Mengidentifikasi pereaksi pembatas, volume gas, dan persamaan reaksi pada reaksi magnesium dan HCl.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang siswa melakukan suatu percobaan dengan memasukkan pita magnesium ke dalam larutan asam klorida. Sebanyak 2,4 gram magnesium (Ar Mg = 24 g/mol) direaksikan dengan 100 mL larutan HCl 1 M. Reaksi dilakukan di dalam labu Erlenmeyer tertutup yang dihubungkan ke penampung gas.<br><br>\nPilihlah semua pernyataan yang benar terkait eksperimen tersebut! (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      { "id": "A", "text": "HCl bertindak sebagai pereaksi pembatas." },
      { "id": "B", "text": "Mol Mg yang bereaksi adalah 0,1 mol." },
      { "id": "C", "text": "Volume gas hidrogen yang dihasilkan pada kondisi STP adalah 2,24 L." },
      { "id": "D", "text": "Jumlah mol MgCl₂ yang dihasilkan sama dengan jumlah mol HCl yang bereaksi." },
      { "id": "E", "text": "Persamaan reaksi setara: Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)." }
    ],
    "kunci": ["A", "E"],
    "pembahasan": "<strong>Analisis Stoikiometri Pereaksi Pembatas:</strong><br>\n1. <strong>Mol Awal:</strong><br>\n&bull; <code>n(Mg) = 2,4 / 24 = 0,10 mol</code>.<br>\n&bull; <code>n(HCl) = 0,1 L &times; 1 M = 0,10 mol</code>.<br><br>\n2. <strong>Pereaksi Pembatas:</strong><br>\nPersamaan setara: <code>Mg + 2HCl &rarr; MgCl₂ + H₂</code> (Pernyataan E BENAR).<br>\nBandingkan mol / koefisien:<br>\n&bull; Mg = 0,10 / 1 = 0,10.<br>\n&bull; HCl = 0,10 / 2 = 0,05 (lebih kecil &rarr; HCl habis pertama kali / pereaksi pembatas, Pernyataan A BENAR).<br><br>\n3. <strong>Zat Bereaksi & Hasil Reaksi:</strong><br>\n&bull; Mg bereaksi = <code>1/2 &times; 0,10 = 0,05 mol</code> (Pernyataan B SALAH).<br>\n&bull; MgCl₂ terbentuk = <code>0,05 mol</code> (setengah dari mol HCl yang bereaksi, Pernyataan D SALAH).<br>\n&bull; H₂ terbentuk = <code>0,05 mol &times; 22,4 L/mol = 1,12 L</code> (bukan 2,24 L, Pernyataan C SALAH).<br><br>\n<strong>Kunci Jawaban: A, E</strong>",
    "kode": "26KIM-PRED5-016"
  },
  {
    "id": 17,
    "elemen": "Teori Asam-Basa",
    "subelemen": "Struktur Lewis & Pasangan Asam-Basa",
    "indikator": "Menganalisis peranan spesi asam-basa berdasarkan teori Arrhenius, Bronsted-Lowry, dan Lewis.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan persamaan reaksi pelarutan asam sulfat di dalam air berikut:\n</p>\n<div class=\"my-3 text-center\">\n  <img src=\"/tka/img/kimia-paket5/image3.jpg\" alt=\"Reaksi Lewis H2SO4 dalam air\" class=\"max-w-md mx-auto rounded-xl border border-slate-200 shadow-2xs\" />\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPilihlah semua pernyataan yang benar terkait reaksi tersebut! (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      { "id": "A", "text": "H₂O bertindak sebagai basa Brønsted-Lowry karena menerima proton." },
      { "id": "B", "text": "H₂SO₄ merupakan asam menurut teori Arrhenius karena melepaskan ion H⁺ (menjadi H₃O⁺) dalam medium air." },
      { "id": "C", "text": "H₂O bertindak sebagai basa Lewis karena mendonorkan pasangan elektron bebas (PEB) kepada proton." },
      { "id": "D", "text": "Ion SO₄²⁻ merupakan basa kuat menurut teori Brønsted-Lowry." },
      { "id": "E", "text": "H₂O dan H₃O⁺ merupakan pasangan asam-basa konjugasi Brønsted-Lowry." }
    ],
    "kunci": ["A", "B", "C", "E"],
    "pembahasan": "<strong>Analisis Teori Asam Basa Multi-Model:</strong><br>\n&bull; <strong>Pernyataan A (Benar):</strong> Molekul H₂O bertindak sebagai akseptor proton (basa Brønsted-Lowry) menjadi H₃O⁺.<br>\n&bull; <strong>Pernyataan B (Benar):</strong> Menurut Arrhenius, senyawa yang memperbesar konsentrasi ion hidronium dalam air adalah asam.<br>\n&bull; <strong>Pernyataan C (Benar):</strong> Pada diagram Lewis terlihat jelas atom oksigen pada H₂O menggunakan pasangan elektron bebasnya untuk mengikat H⁺, sehingga H₂O bertindak sebagai basa Lewis (donor PEB).<br>\n&bull; <strong>Pernyataan D (Salah):</strong> H₂SO₄ adalah asam kuat, sehingga basa konjugasinya (ion sulfat) merupakan basa konjugasi yang relatif lemah.<br>\n&bull; <strong>Pernyataan E (Benar):</strong> Pasangan H₂O dan H₃O⁺ hanya berselisih satu proton H⁺, sehingga merupakan pasangan asam-basa konjugasi.<br><br>\n<strong>Kunci Jawaban: A, B, C, E</strong>",
    "kode": "26KIM-PRED5-017"
  },
  {
    "id": 18,
    "elemen": "Titrasi Asam-Basa",
    "subelemen": "Standarisasi & Kadar Asam Asetat Cuka",
    "indikator": "Menghitung konsentrasi awal dan persentase massa asam cuka melalui data titrasi pengenceran.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang mahasiswa kimia melakukan standarisasi untuk menentukan kadar kemurnian sampel cuka dapur (CH₃COOH, Mr = 60 g/mol) menggunakan metode titrasi. Sampel cuka sebanyak 10 mL diencerkan dengan air murni hingga volume 100 mL dalam labu ukur. Kemudian, 20 mL dari larutan encer tersebut diambil dan dititrasi dengan larutan standar NaOH 0,10 M. Titik akhir titrasi dicapai saat menghabiskan rata-rata 15 mL NaOH. Diketahui massa jenis cuka dapur murni awal adalah 1,0 g/mL.<br><br>\nPilihlah semua pernyataan yang benar! (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      { "id": "A", "text": "Pengenceran cuka dapur dengan air murni mengubah jumlah total mol asam asetat di dalam labu ukur 100 mL." },
      { "id": "B", "text": "Konsentrasi asam asetat dalam larutan cuka encer hasil pengenceran adalah 0,075 M." },
      { "id": "C", "text": "Konsentrasi awal asam asetat dalam sampel cuka dapur sebelum pengenceran adalah 0,75 M." },
      { "id": "D", "text": "Kadar persentase massa (% w/w) asam asetat dalam sampel cuka dapur awal adalah 4,5%." },
      { "id": "E", "text": "Jumlah mol asam asetat yang bereaksi dalam 20 mL larutan sampel encer saat titrasi adalah 1,5 mmol." }
    ],
    "kunci": ["B", "C", "D", "E"],
    "pembahasan": "<strong>Perhitungan Titrasi Bertingkat & Kadar Persen:</strong><br>\n1. <strong>Mol Asam dalam Titrasi (20 mL):</strong><br>\n<code>mol asam = mol NaOH = 15 mL &times; 0,10 M = 1,5 mmol</code> (Pernyataan E BENAR).<br>\n2. <strong>Konsentrasi Encer:</strong><br>\n<code>M_encer = 1,5 mmol / 20 mL = 0,075 M</code> (Pernyataan B BENAR).<br>\n3. <strong>Konsentrasi Awal Sebelum Diencerkan (Faktor 10x):</strong><br>\n<code>M_awal = M_encer &times; (100 mL / 10 mL) = 0,075 &times; 10 = 0,75 M</code> (Pernyataan C BENAR).<br>\n4. <strong>Kadar Persen Massa (% w/w):</strong><br>\nDalam 1 Liter (1.000 mL) cuka awal:<br>\n&bull; Massa cuka = <code>1.000 mL &times; 1,0 g/mL = 1.000 gram</code>.<br>\n&bull; Massa CH₃COOH = <code>0,75 mol &times; 60 g/mol = 45 gram</code>.<br>\n&bull; <code>% w/w = (45 / 1.000) &times; 100% = 4,5%</code> (Pernyataan D BENAR).<br>\n(Pernyataan A SALAH karena pengenceran hanya menambah volume pelarut air tanpa mengubah jumlah total mol zat terlarut).<br><br>\n<strong>Kunci Jawaban: B, C, D, E</strong>",
    "kode": "26KIM-PRED5-018"
  },
  {
    "id": 19,
    "elemen": "Reaksi Redoks",
    "subelemen": "Penyetaraan Redoks & Alat Breathalyzer",
    "indikator": "Menganalisis reaksi redoks penentuan kadar alkohol dengan larutan kalium dikromat asam.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam uji laboratorium penentuan kadar alkohol (etanol, C₂H₅OH) pada sampel napas, digunakan alat breathalyzer. Alat ini bekerja berdasarkan reaksi redoks dengan larutan kalium dikromat (K₂Cr₂O₇) dalam suasana asam:<br>\n<code>C₂H₅OH + Cr₂O₇²⁻ + H⁺ &rarr; CH₃COOH + Cr³⁺ + H₂O</code> &nbsp; (belum setara)<br><br>\nPilihlah semua pernyataan yang benar mengenai reaksi tersebut! (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      { "id": "A", "text": "Atom karbon pada molekul etanol teroksidasi dengan perubahan bilangan oksidasi total sebesar 4 unit per molekul." },
      { "id": "B", "text": "Perubahan warna larutan dari hijau menjadi jingga menandakan keberadaan etanol dalam sampel." },
      { "id": "C", "text": "Ion dikromat (Cr₂O₇²⁻) bertindak sebagai pengoksidasi (oksidator) yang mengalami reduksi." },
      { "id": "D", "text": "Ion H⁺ bertindak sebagai reduktor tambahan di dalam sistem." },
      { "id": "E", "text": "Perbandingan mol C₂H₅OH terhadap Cr₂O₇²⁻ dalam persamaan reaksi setara adalah 3 : 2." }
    ],
    "kunci": ["A", "C", "E"],
    "pembahasan": "<strong>Penyetaraan Reaksi Redoks Suasana Asam:</strong><br>\n1. <strong>Oksidasi Etanol:</strong><br>\n<code>C₂H₅OH + H₂O &rarr; CH₃COOH + 4H⁺ + 4e⁻</code><br>\nBilangan oksidasi rata-rata C pada C₂H₅OH adalah &minus;2, berubah menjadi 0 pada CH₃COOH. Total perubahan biloks = <code>2 &times; 2 = 4 unit elektron</code> (Pernyataan A BENAR).<br>\n2. <strong>Reduksi Dikromat:</strong><br>\n<code>Cr₂O₇²⁻ + 14H⁺ + 6e⁻ &rarr; 2Cr³⁺ + 7H₂O</code> (Pernyataan C BENAR, mengalami reduksi dari +6 ke +3).<br>\n3. <strong>Penggabungan Reaksi Setara (KPK elektron 4 dan 6 = 12):</strong><br>\n<code>3C₂H₅OH + 2Cr₂O₇²⁻ + 16H⁺ &rarr; 3CH₃COOH + 4Cr³⁺ + 11H₂O</code>.<br>\nPerbandingan mol <code>C₂H₅OH : Cr₂O₇²⁻ = 3 : 2</code> (Pernyataan E BENAR).<br>\n(Pernyataan B SALAH karena Cr₂O₇²⁻ berwarna jingga dan Cr³⁺ berwarna hijau, sehingga perubahan warnanya adalah dari <strong>jingga menjadi hijau</strong>).<br><br>\n<strong>Kunci Jawaban: A, C, E</strong>",
    "kode": "26KIM-PRED5-019"
  },
  {
    "id": 20,
    "elemen": "Elektrolisis",
    "subelemen": "Elektrolisis Air & Muatan Elektrode",
    "indikator": "Menganalisis reaksi di anode dan katode pada sel elektrolisis larutan berair.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan gambar sel elektrokimia berikut:\n</p>\n<div class=\"my-3 text-center\">\n  <img src=\"/tka/img/kimia-paket5/image4.jpg\" alt=\"Sel Elektrolisis Air\" class=\"max-w-xs mx-auto rounded-xl border border-slate-200 shadow-2xs\" />\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPilihlah semua pernyataan yang benar terkait sel tersebut! (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      { "id": "A", "text": "Kation larutan A yang bereaksi pada elektrode merupakan ion logam aktif." },
      { "id": "B", "text": "Merupakan sel elektrokimia yang reaksi kimianya berlangsung secara spontan tanpa suplai energi luar." },
      { "id": "C", "text": "Elektrode X merupakan kutub positif (anode) tempat terbentuknya gas oksigen." },
      { "id": "D", "text": "Anion larutan A mengandung ion halida pekat yang teroksidasi." },
      { "id": "E", "text": "Sel menggunakan elektrode inert yang tidak ikut teroksidasi selama elektrolisis berlangsung." }
    ],
    "kunci": ["C", "E"],
    "pembahasan": "<strong>Analisis Sel Elektrolisis Air:</strong><br>\n1. <strong>Tipe Sel:</strong> Gambar menunjukkan sel elektrolisis (non-spontan, digerakkan oleh sumber arus DC / baterai, Pernyataan B SALAH).<br>\n2. <strong>Reaksi Anode (Kutub Positif / X):</strong> Di tabung X terbentuk gas O₂ sesuai reaksi <code>2H₂O &rarr; O₂ + 4H⁺ + 4e⁻</code>. Karena elektrode positif terhubung ke kutub positif baterai, maka X adalah <strong>anode bermuatan positif</strong> (Pernyataan C BENAR).<br>\n3. <strong>Reaksi Katode (Kutub Negatif / Y):</strong> Di tabung Y terbentuk gas H₂ sesuai reaksi <code>2H₂O + 2e⁻ &rarr; H₂ + 2OH⁻</code>. Volume gas H₂ tampak dua kali lebih banyak daripada O₂ (sesuai rasio stoikiometri 2 : 1).<br>\n4. <strong>Elektrode Inert:</strong> Karena air yang teroksidasi di anode dan tereduksi di katode, sel menggunakan <strong>elektrode inert</strong> (seperti Platina atau Karbon) sehingga elektrode tidak terkikis (Pernyataan E BENAR).<br><br>\n<strong>Kunci Jawaban: C, E</strong>",
    "kode": "26KIM-PRED5-020"
  },

  // ----------------------------------------------------
  // Bagian 3: Pernyataan Benar / Salah (No. 21 - 25)
  // ----------------------------------------------------
  {
    "id": 21,
    "elemen": "Bentuk Molekul & Kepolaran",
    "subelemen": "VSEPR & Momen Dipol SF₄ vs CF₄",
    "indikator": "Menganalisis pengaruh pasangan elektron bebas pada atom pusat terhadap simetri geometri dan kepolaran.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSenyawa karbon tetrafluorida (CF₄) dan belerang tetrafluorida (SF₄) memiliki jumlah atom fluorin terikat yang identik, yaitu masing-masing 4 atom. Namun, SF₄ bersifat polar dan sangat reaktif, sedangkan CF₄ bersifat nonpolar dan relatif inert.<br>\nSeorang siswa menyimpulkan bahwa sifat kepolaran molekul semata-mata ditentukan oleh jumlah atom halogen yang terikat.<br><br>\nTentukan Benar atau Salah untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "pernyataan": "Molekul CF₄ bersifat nonpolar karena memiliki geometri tetrahedral simetris sempurna sehingga momen dipol antar-ikatan C−F saling meniadakan (μ = 0).",
        "kunci": "Benar"
      },
      {
        "pernyataan": "Atom pusat S pada SF₄ memiliki 5 domain elektron (4 PEI dan 1 PEB) sehingga membentuk geometri molekul bentuk T (T-shaped) yang tidak simetris.",
        "kunci": "Salah"
      },
      {
        "pernyataan": "Perbedaan kepolaran antara SF₄ dan CF₄ membuktikan bahwa keberadaan Pasangan Elektron Bebas (PEB) pada atom pusat merusak simetri molekul dan menghasilkan momen dipol netto tidak sama dengan nol.",
        "kunci": "Benar"
      }
    ],
    "kunci": ["Benar", "Salah", "Benar"],
    "pembahasan": "<strong>Analisis Geometri VSEPR & Kepolaran Molekul:</strong><br>\n1. <strong>CF₄:</strong> Atom C memiliki 4 elektron valensi, semuanya dipakai berikatan dengan F (4 PEI, 0 PEB &rarr; tipe AX₄). Geometrinya tetrahedral simetris sempurna, sehingga resultan momen dipol &mu; = 0 (<strong>Nonpolar</strong>). <em>(Pernyataan 1: Benar)</em><br>\n2. <strong>SF₄:</strong> Atom S memiliki 6 elektron valensi; 4 elektron membentuk 4 ikatan kovalen tunggal dengan F dan 2 elektron tersisa membentuk 1 PEB (tipe AX₄E). Geometri molekulnya adalah <strong>jungkat-jungkit (seesaw)</strong>, BUKAN bentuk T (bentuk T bertipe AX₃E₂ seperti pada ClF₃). <em>(Pernyataan 2: Salah)</em><br>\n3. <strong>Pengaruh PEB:</strong> PEB memiliki tolakan yang lebih kuat dan merusak kesimetrisan ruang, menghasilkan resultan dipol &mu; &gt; 0 (<strong>Polar</strong>). <em>(Pernyataan 3: Benar)</em><br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    "kode": "26KIM-PRED5-021"
  },
  {
    "id": 22,
    "elemen": "Stoikiometri Gas",
    "subelemen": "Dekomposisi Natrium Azida Airbag",
    "indikator": "Menghitung mol gas nitrogen, massa natrium azida, dan hasil samping reaksi airbag mobil.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSistem airbag mobil menggunakan reaksi penguraian cepat padatan natrium azida (NaN₃, Mr = 65 g/mol) untuk menghasilkan gas nitrogen (N₂, Mr = 28 g/mol) sebagai berikut:<br>\n<code>2NaN₃(s) &rarr; 2Na(s) + 3N₂(g)</code><br><br>\nSeorang insinyur keselamatan menganalisis bahwa untuk mengembang sempurna dalam waktu 40 milidetik, kantung udara membutuhkan tepat 67,2 Liter gas N₂ pada kondisi standar STP (1 mol gas = 22,4 L).<br><br>\nTentukan Benar atau Salah untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "pernyataan": "Jumlah mol gas N₂ yang harus dihasilkan oleh sistem airbag tersebut adalah 3,0 mol.",
        "kunci": "Benar"
      },
      {
        "pernyataan": "Massa padatan NaN₃ minimum yang harus diisikan ke dalam wadah pemicu airbag adalah 130 gram.",
        "kunci": "Benar"
      },
      {
        "pernyataan": "Selain gas N₂, reaksi tersebut juga menghasilkan 46 gram logam natrium (Na, Ar = 23 g/mol) sebagai hasil samping reaksi.",
        "kunci": "Benar"
      }
    ],
    "kunci": ["Benar", "Salah", "Benar"],
    "pembahasan": "<strong>Perhitungan Stoikiometri Dekomposisi NaN₃:</strong><br>\n1. <strong>Mol Gas N₂:</strong><br>\n<code>n(N₂) = 67,2 L / 22,4 L/mol = 3,0 mol</code>. <em>(Pernyataan 1: Benar)</em><br>\n2. <strong>Massa NaN₃ yang Diperlukan:</strong><br>\nBerdasarkan koefisien reaksi (koef NaN₃ / koef N₂ = 2/3):<br>\n<code>n(NaN₃) = 2/3 &times; 3,0 mol = 2,0 mol</code>.<br>\n<code>Massa NaN₃ = 2,0 mol &times; 65 g/mol = 130 gram</code>. <em>(Pernyataan 2: Benar)</em><br>\n3. <strong>Massa Logam Natrium (Na) yang Dihasilkan:</strong><br>\n<code>n(Na) = 2/3 &times; 3,0 mol = 2,0 mol</code>.<br>\n<code>Massa Na = 2,0 mol &times; 23 g/mol = 46 gram</code>. <em>(Pernyataan 3: Benar)</em><br><br>\n<strong>Kunci Jawaban: Benar, Benar, Benar</strong>",
    "kode": "26KIM-PRED5-022"
  },
  {
    "id": 23,
    "elemen": "Kimia Organik",
    "subelemen": "Klorinasi Radikal Bebas Alkana",
    "indikator": "Menganalisis selektivitas dan jenis produk substitusi radikal bebas pada propana dan isobutana.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu industri kimia memproduksi senyawa monoklorida sebagai bahan baku polimer. Reaksi dilakukan di dua reaktor berbeda menggunakan reaksi klorinasi radikal bebas (+Cl₂ dengan bantuan sinar UV):<br>\n&bull; <strong>Reaktor X:</strong> Propana <code>(CH₃−CH₂−CH₃)</code><br>\n&bull; <strong>Reaktor Y:</strong> Isobutana / 2-metilpropana <code>(CH₃−CH(CH₃)−CH₃)</code><br><br>\nTentukan Benar atau Salah untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "pernyataan": "Klorinasi propana di Reaktor X hanya menghasilkan satu jenis produk monokloropropana karena seluruh atom karbonnya berada dalam lingkungan ikatan yang identik.",
        "kunci": "Salah"
      },
      {
        "pernyataan": "Pada Reaktor Y, produk utama yang mendominasi adalah 2-kloro-2-metilpropana karena atom H tersier jauh lebih mudah disubstitusi dibanding atom H primer akibat kestabilan radikal bebas tersier.",
        "kunci": "Benar"
      },
      {
        "pernyataan": "Reaktor Y menghasilkan rasio produk bercabang yang lebih selektif dibanding Reaktor X karena energi aktivasi pembentukan radikal tersier pada isobutana lebih rendah.",
        "kunci": "Benar"
      }
    ],
    "kunci": ["Salah", "Benar", "Benar"],
    "pembahasan": "<strong>Mekanisme Reaksi Substitusi Radikal Bebas:</strong><br>\n1. <strong>Reaktor X (Propana):</strong> Propana memiliki 6 atom H primer (pada C1 & C3) dan 2 atom H sekunder (pada C2). Reaksi klorinasi menghasilkan campuran isomer yaitu <strong>1-kloropropana</strong> dan <strong>2-kloropropana</strong>, bukan hanya satu produk tunggal. <em>(Pernyataan 1: Salah)</em><br>\n2. <strong>Reaktor Y (Isobutana):</strong> Memiliki 9 atom H primer dan 1 atom H tersier. Radikal bebas tersier <code>(CH₃)₃C&bull;</code> jauh lebih stabil dibanding radikal primer karena efek hiperkonjugasi dan induksi tiga gugus metil. Oleh karena itu, energi aktivasinya lebih rendah dan laju abstraksi H tersier jauh lebih cepat, menjadikan <strong>2-kloro-2-metilpropana</strong> sebagai produk substitusi yang sangat dominan. <em>(Pernyataan 2 & 3: Benar)</em><br><br>\n<strong>Kunci Jawaban: Salah, Benar, Benar</strong>",
    "kode": "26KIM-PRED5-023"
  },
  {
    "id": 24,
    "elemen": "Kesetimbangan Larutan & Hidrolisis",
    "subelemen": "Reaksi Netralisasi & pH Hidrolisis Garam",
    "indikator": "Menentukan kombinasi larutan asam asetat dan natrium hidroksida yang menghasilkan pH garam terhidrolisis tepat sama dengan 9.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGaram natrium asetat (CH₃COONa) dibuat melalui reaksi netralisasi antara larutan asam asetat (CH₃COOH) dan larutan natrium hidroksida (NaOH):<br>\n<code>CH₃COOH(aq) + NaOH(aq) &rarr; CH₃COONa(aq) + H₂O(l)</code><br><br>\nEmpat botol larutan tersedia di laboratorium:\n</p>\n<div class=\"my-3 text-center\">\n  <img src=\"/tka/img/kimia-paket5/image5.jpg\" alt=\"Botol Larutan Asam Basa\" class=\"max-w-sm mx-auto rounded-xl border border-slate-200 shadow-2xs\" />\n</div>\n<div class=\"my-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed\">\n  &bull; <strong>Botol A:</strong> CH₃COOH 0,1 M &nbsp;|&nbsp; <strong>Botol B:</strong> CH₃COOH 0,2 M<br>\n  &bull; <strong>Botol C:</strong> NaOH 0,1 M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp; <strong>Botol D:</strong> NaOH 0,2 M<br>\n  <em>(Diketahui Ka CH₃COOH = 1 &times; 10⁻⁵ dan Kw = 1 &times; 10⁻¹⁴)</em>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan Benar atau Salah apakah kombinasi pencampuran berikut menghasilkan larutan terhidrolisis dengan pH = 9!\n</p>",
    "items": [
      {
        "pernyataan": "100 mL larutan dari Botol A dicampur dengan 100 mL larutan dari Botol C menghasilkan pH = 9.",
        "kunci": "Salah"
      },
      {
        "pernyataan": "200 mL larutan dari Botol B dicampur dengan 100 mL larutan dari Botol D menghasilkan pH = 9.",
        "kunci": "Salah"
      },
      {
        "pernyataan": "100 mL larutan dari Botol B dicampur dengan 100 mL larutan dari Botol D menghasilkan pH = 9.",
        "kunci": "Benar"
      }
    ],
    "kunci": ["Salah", "Salah", "Benar"],
    "pembahasan": "<strong>Perhitungan Hidrolisis Parsial Garam:</strong><br>\nAgar pH larutan garam = 9 (basa), maka pOH = 5 &rarr; <code>[OH⁻] = 10⁻⁵ M</code>.<br>\nRumus hidrolisis garam dari asam lemah dan basa kuat:<br>\n<code>[OH⁻] = &radic;[ (Kw / Ka) &times; [Garam] ]</code><br>\n<code>10⁻⁵ = &radic;[ (10⁻¹⁴ / 10⁻⁵) &times; [Garam] ] = &radic;[ 10⁻⁹ &times; [Garam] ]</code><br>\nKuadratkan kedua sisi: <code>10⁻¹⁰ = 10⁻⁹ &times; [Garam] &rarr; [Garam] = 0,1 M</code>.<br>\nArtinya, kedua pereaksi harus habis bereaksi sempurna dan konsentrasi CH₃COONa yang terbentuk dalam volume total harus tepat <strong>0,1 M</strong>.<br><br>\n1. <strong>100 mL A (0,1 M) + 100 mL C (0,1 M):</strong><br>\nMol = 10 mmol CH₃COOH + 10 mmol NaOH &rarr; Garam = 10 mmol / 200 mL = 0,05 M (bukan 0,1 M). <em>(Pernyataan 1: Salah)</em><br>\n2. <strong>200 mL B (0,2 M) + 100 mL D (0,2 M):</strong><br>\nCH₃COOH = 40 mmol, NaOH = 20 mmol. Asam lemah bersisa 20 mmol &rarr; terbentuk larutan penyangga (buffer asam), bukan hidrolisis garam. <em>(Pernyataan 2: Salah)</em><br>\n3. <strong>100 mL B (0,2 M) + 100 mL D (0,2 M):</strong><br>\nCH₃COOH = 20 mmol, NaOH = 20 mmol. Keduanya tepat habis bereaksi.<br>\nKonsentrasi Garam = <code>20 mmol / 200 mL = 0,1 M</code> (tepat memenuhi syarat hidrolisis pH = 9). <em>(Pernyataan 3: Benar)</em><br><br>\n<strong>Kunci Jawaban: Salah, Salah, Benar</strong>",
    "kode": "26KIM-PRED5-024"
  },
  {
    "id": 25,
    "elemen": "Kinetika Kimia",
    "subelemen": "Metode Laju Awal & Pengaruh Suhu",
    "indikator": "Menentukan orde reaksi, perbandingan laju pembentukan sulfur, dan efek kenaikan suhu pada pengendapan natrium tiosulfat.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSekelompok siswa melakukan eksperimen di laboratorium kimia untuk mempelajari faktor-faktor yang memengaruhi laju reaksi pengendapan belerang:<br>\n<code>Na₂S₂O₃(aq) + 2HCl(aq) &rarr; 2NaCl(aq) + H₂O(l) + SO₂(g) + S(s)</code><br><br>\nEksperimen dilakukan dengan menempatkan gelas kimia di atas tanda silang hitam (X). Waktu reaksi (t) dicatat hingga tanda silang (X) tepat tertutup oleh endapan sulfur. Volume total dibuat konstan 50 mL dengan penambahan air:<br>\n&bull; <strong>Tabung 1:</strong> 40 mL Na₂S₂O₃ 0,2 M + 0 mL H₂O + 10 mL HCl 2 M &rarr; Waktu: <strong>12 detik</strong><br>\n&bull; <strong>Tabung 2:</strong> 20 mL Na₂S₂O₃ 0,2 M + 20 mL H₂O + 10 mL HCl 2 M &rarr; Waktu: <strong>24 detik</strong><br>\n&bull; <strong>Tabung 3:</strong> 10 mL Na₂S₂O₃ 0,2 M + 30 mL H₂O + 10 mL HCl 2 M &rarr; Waktu: <strong>48 detik</strong><br>\n&bull; <strong>Tabung 4:</strong> 10 mL Na₂S₂O₃ 0,2 M + 20 mL H₂O + 20 mL HCl 2 M &rarr; Waktu: <strong>48 detik</strong><br><br>\nTentukan Benar atau Salah untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "pernyataan": "Orde reaksi terhadap natrium tiosulfat (Na₂S₂O₃) adalah 1, sedangkan orde reaksi terhadap asam klorida (HCl) adalah 0.",
        "kunci": "Benar"
      },
      {
        "pernyataan": "Laju pembentukan endapan sulfur (S) pada Tabung 1 adalah dua kali lebih cepat dibandingkan pada Tabung 2.",
        "kunci": "Benar"
      },
      {
        "pernyataan": "Jika campuran pada Tabung 3 dipanaskan hingga suhunya naik sebesar 20°C (dengan asumsi laju reaksi menjadi 2 kali lipat setiap kenaikan 10°C), maka waktu reaksi yang dibutuhkan menjadi 6 detik.",
        "kunci": "Salah"
      }
    ],
    "kunci": ["Benar", "Benar", "Salah"],
    "pembahasan": "<strong>Analisis Orde Reaksi & Pengaruh Suhu:</strong><br>\nLaju reaksi berbanding terbalik dengan waktu reaksi: <code>v &prop; 1 / t</code>.<br>\n1. <strong>Orde HCl (Bandingkan Tabung 3 dan 4):</strong> Konsentrasi Na₂S₂O₃ tetap (10 mL), konsentrasi HCl dinaikkan 2 kali lipat (10 mL &rarr; 20 mL), tetapi waktu reaksi tetap sama (48 s). Artinya laju reaksi tidak dipengaruhi oleh konsentrasi HCl &rarr; <strong>Orde terhadap HCl = 0</strong>.<br>\n2. <strong>Orde Na₂S₂O₃ (Bandingkan Tabung 2 dan 1):</strong> Konsentrasi HCl tetap (10 mL), konsentrasi Na₂S₂O₃ dinaikkan 2 kali lipat (20 mL &rarr; 40 mL). Waktu berkurang menjadi setengahnya (24 s &rarr; 12 s), yang berarti laju reaksi menjadi 2 kali lebih cepat &rarr; <strong>Orde terhadap Na₂S₂O₃ = 1</strong>. <em>(Pernyataan 1 & 2: Benar)</em><br>\n3. <strong>Pengaruh Kenaikan Suhu:</strong><br>\nKenaikan suhu &Delta;T = 20 &deg;C. Laju reaksi menjadi <code>2^(20/10) = 2² = 4 kali lebih cepat</code>.<br>\nWaktu reaksi baru = <code>t_awal / 4 = 48 detik / 4 = 12 detik</code> (bukan 6 detik). <em>(Pernyataan 3: Salah)</em><br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    "kode": "26KIM-PRED5-025"
  }
];

if (typeof window !== 'undefined') {
  window.tkaPaket5Data = tkaPaket5Data;
  window.tkaPackages = window.tkaPackages || {};
  window.tkaPackages['paket5'] = {
    id: "paket5",
    title: "Paket 5: Prediksi TKA Kimia SMA 2026 (25 Soal PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 5 (Prediksi 2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    get data() { return tkaPaket5Data; }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaPaket5Data };
}
