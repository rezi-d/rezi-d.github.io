// tka/data/mapel-ekonomi-paket2.js
// Bank Soal & Pembahasan Prediksi Resmi TKA Ekonomi SMA 2025/2026 (Paket 2: 25 Butir Soal Standar TKA BPPP)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Ekonomi SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaEkonomiPaket2Data = [
  {
    "id": 1,
    "elemen": "Konsep Dasar Ilmu Ekonomi",
    "subelemen": "Masalah Pokok Ekonomi Modern",
    "indikator": "Mengidentifikasi masalah ekonomi modern What, How, dan For Whom pada kegiatan rintisan usaha.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang pengusaha muda di bidang agrobisnis berencana mendirikan unit pengolahan sari buah apel di Kota Batu. Sebelum memulai kegiatan usahanya, ia melakukan riset pasar mendalam untuk memutuskan apakah akan memproduksi keripik apel renyah atau minuman sari apel segar, memilih apakah menggunakan mesin pengering otomatis berskala industri atau merekrut tenaga kerja warga lokal secara manual, serta menentukan apakah produknya ditujukan bagi konsumen wisatawan domestik kelas menengah atau pasar ekspor mancanegara.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nRangkaian pertimbangan pengusaha tersebut berturut-turut mencerminkan pemecahan masalah pokok ekonomi modern berupa...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "How, What, dan For Whom"
      },
      {
        "id": "B",
        "text": "What, How, dan For Whom"
      },
      {
        "id": "C",
        "text": "For Whom, What, dan How"
      },
      {
        "id": "D",
        "text": "What, For Whom, dan How"
      },
      {
        "id": "E",
        "text": "How, For Whom, dan What"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Tiga Masalah Pokok Ekonomi Modern:</strong><br>\n1. <strong>Barang apa yang akan diproduksi dan berapa jumlahnya (What):</strong> Menentukan komoditas keripik apel atau sari apel segar.<br>\n2. <strong>Bagaimana cara memproduksi barang tersebut (How):</strong> Menentukan teknik kombinasi faktor produksi, apakah padat modal (mesin otomatis) atau padat karya (tenaga kerja lokal).<br>\n3. <strong>Untuk siapa barang diproduksi (For Whom):</strong> Menentukan target segmentasi pasar dan distribusi hasil produksi (wisatawan domestik atau pasar ekspor).<br><br>\n<strong>Kunci Jawaban: B (What, How, dan For Whom)</strong>",
    "kode": "25EKO-PRED2-001"
  },
  {
    "id": 2,
    "elemen": "Mekanisme Pasar & Elastisitas",
    "subelemen": "Keseimbangan Pasar (Market Equilibrium)",
    "indikator": "Menghitung harga dan kuantitas keseimbangan pasar berdasarkan fungsi permintaan dan penawaran linier.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDi pasar komoditas beras lokal, interaksi antara pembeli dan penjual menghasilkan persamaan perilaku ekonomi sebagai berikut:\n<br>&bull; Fungsi Permintaan: <code>Q<sub>d</sub> = 40 &minus; 2P</code>\n<br>&bull; Fungsi Penawaran: <code>Q<sub>s</sub> = &minus;10 + 3P</code>\n<br><span class=\"text-xs text-slate-600\">(P dalam satuan ribuan Rupiah per kg, dan Q dalam satuan ton)</span>\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <div class=\"text-xs font-semibold text-slate-600 mb-2\">Kurva Keseimbangan Pasar Permintaan &amp; Penawaran:</div>\n  <svg viewBox=\"0 0 460 200\" class=\"w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg shadow-xs\">\n    <!-- Sumbu P dan Q -->\n    <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\" />\n    <line x1=\"50\" y1=\"160\" x2=\"420\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2\" />\n    <text x=\"30\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">P (Harga)</text>\n    <text x=\"390\" y=\"180\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">Q (Jumlah)</text>\n\n    <!-- Kurva Permintaan (Demand) -->\n    <line x1=\"80\" y1=\"40\" x2=\"360\" y2=\"150\" stroke=\"#dc2626\" stroke-width=\"2.5\" />\n    <text x=\"365\" y=\"150\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">D (Qd)</text>\n\n    <!-- Kurva Penawaran (Supply) -->\n    <line x1=\"80\" y1=\"150\" x2=\"360\" y2=\"40\" stroke=\"#0284c7\" stroke-width=\"2.5\" />\n    <text x=\"365\" y=\"40\" font-size=\"11\" font-weight=\"bold\" fill=\"#0284c7\">S (Qs)</text>\n\n    <!-- Titik Keseimbangan E -->\n    <circle cx=\"220\" cy=\"95\" r=\"5\" fill=\"#16a34a\" />\n    <line x1=\"50\" y1=\"95\" x2=\"220\" y2=\"95\" stroke=\"#16a34a\" stroke-dasharray=\"3,3\" />\n    <line x1=\"220\" y1=\"95\" x2=\"220\" y2=\"160\" stroke=\"#16a34a\" stroke-dasharray=\"3,3\" />\n    <text x=\"230\" y=\"90\" font-size=\"12\" font-weight=\"extrabold\" fill=\"#16a34a\">E (Titik Keseimbangan)</text>\n    <text x=\"15\" y=\"99\" font-size=\"11\" font-weight=\"bold\" fill=\"#16a34a\">P_e = 10</text>\n    <text x=\"210\" y=\"178\" font-size=\"11\" font-weight=\"bold\" fill=\"#16a34a\">Q_e = 20</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nHarga keseimbangan (P<sub>e</sub>) dan jumlah keseimbangan (Q<sub>e</sub>) yang terbentuk di pasar tersebut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "P = Rp8.000,00 dan Q = 24 ton"
      },
      {
        "id": "B",
        "text": "P = Rp10.000,00 dan Q = 20 ton"
      },
      {
        "id": "C",
        "text": "P = Rp12.000,00 dan Q = 16 ton"
      },
      {
        "id": "D",
        "text": "P = Rp15.000,00 dan Q = 10 ton"
      },
      {
        "id": "E",
        "text": "P = Rp20.000,00 dan Q = 5 ton"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Langkah Perhitungan Keseimbangan Pasar:</strong><br>\nSyarat mutlak keseimbangan pasar tercapai saat:<br>\n<code>Q<sub>d</sub> = Q<sub>s</sub></code><br><br>\nSubstitusikan kedua persamaan fungsi:<br>\n<code>40 &minus; 2P = &minus;10 + 3P</code><br>\n<code>40 + 10 = 3P + 2P</code><br>\n<code>50 = 5P &rarr; P = 50 / 5 = 10</code> (yaitu Rp10.000,00 per kg).<br><br>\nSubstitusikan nilai P = 10 ke salah satu fungsi untuk mencari Q:<br>\n<code>Q = 40 &minus; 2(10) = 40 &minus; 20 = 20 ton</code>.<br>\n(Pengujian pada Q<sub>s</sub>: <code>&minus;10 + 3(10) = &minus;10 + 30 = 20 ton</code> &rarr; Terbukti cocok).<br><br>\nMaka titik keseimbangan pasar terbentuk pada tingkat harga <strong>Rp10.000,00</strong> dan jumlah <strong>20 ton</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-002"
  },
  {
    "id": 3,
    "elemen": "Mekanisme Pasar & Elastisitas",
    "subelemen": "Elastisitas Harga Permintaan (Ed)",
    "indikator": "Menghitung koefisien elastisitas dan menganalisis dampaknya terhadap penerimaan total produsen.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nToko Sepatu \"Sporty\" mencatat data penjualan sepatu olahraga tertentu:\n<br>&bull; Ketika harga sepasang sepatu sebesar <strong>Rp200.000,00</strong>, jumlah permintaan konsumen sebanyak <strong>1.000 pasang</strong> per bulan.\n<br>&bull; Ketika harga dinaikkan menjadi <strong>Rp220.000,00</strong>, jumlah permintaan turun menjadi <strong>800 pasang</strong> per bulan.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPernyataan yang <strong>benar</strong> terkait perhitungan koefisien elastisitas dan dampaknya terhadap penerimaan total (Total Revenue / TR) toko adalah... (Pilihlah lebih dari satu jawaban yang benar!)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Nilai koefisien elastisitas permintaan (Ed) adalah sebesar 2 (bersifat elastis, di mana |Ed| > 1)"
      },
      {
        "id": "B",
        "text": "Nilai koefisien elastisitas permintaan (Ed) adalah sebesar 0,5 (bersifat inelastis, di mana |Ed| < 1)"
      },
      {
        "id": "C",
        "text": "Persentase penurunan jumlah barang yang diminta (20%) lebih besar daripada persentase kenaikan harga (10%)"
      },
      {
        "id": "D",
        "text": "Kenaikan harga tersebut menyebabkan penerimaan total toko menurun dari Rp200.000.000,00 menjadi Rp176.000.000,00"
      },
      {
        "id": "E",
        "text": "Kenaikan harga barang yang bersifat elastis akan selalu meningkatkan keuntungan total penjual"
      }
    ],
    "kunci": [
      "A",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Langkah Perhitungan Elastisitas Permintaan:</strong><br>\nDiketahui data:<br>\n&bull; P<sub>1</sub> = Rp200.000, Q<sub>1</sub> = 1.000 unit<br>\n&bull; P<sub>2</sub> = Rp220.000 (&Delta;P = Rp20.000)<br>\n&bull; Q<sub>2</sub> = 800 unit (&Delta;Q = &minus;200 unit)<br><br>\n1. <strong>Koefisien Elastisitas (Ed):</strong><br>\n   <code>Ed = (&Delta;Q / &Delta;P) &times; (P<sub>1</sub> / Q<sub>1</sub>)</code><br>\n   <code>Ed = (&minus;200 / 20.000) &times; (200.000 / 1.000) = &minus;0,01 &times; 200 = &minus;2</code>.<br>\n   Nilai mutlak <strong>|Ed| = 2 &gt; 1</strong> &rarr; Permintaan bersifat <strong>Elastis</strong> (Pernyataan A Benar).<br><br>\n2. <strong>Persentase Perubahan:</strong><br>\n   &bull; &Delta;P / P<sub>1</sub> = 20.000 / 200.000 = 10%<br>\n   &bull; &Delta;Q / Q<sub>1</sub> = &minus;200 / 1.000 = &minus;20% (Pernyataan C Benar).<br><br>\n3. <strong>Analisis Penerimaan Total (TR):</strong><br>\n   &bull; TR<sub>1</sub> = P<sub>1</sub> &times; Q<sub>1</sub> = Rp200.000 &times; 1.000 = Rp200.000.000,00<br>\n   &bull; TR<sub>2</sub> = P<sub>2</sub> &times; Q<sub>2</sub> = Rp220.000 &times; 800 = Rp176.000.000,00<br>\n   Pada kurva elastis, menaikkan harga justru menurunkan penerimaan total (Pernyataan D Benar, E Salah).<br><br>\n<strong>Kunci Jawaban: A, C, dan D</strong>",
    "kode": "25EKO-PRED2-003"
  },
  {
    "id": 4,
    "elemen": "Bentuk-Bentuk Pasar",
    "subelemen": "Pasar Persaingan Sempurna vs Pasar Monopoli",
    "indikator": "Mengevaluasi karakteristik Pasar Persaingan Sempurna, Monopoli, dan Oligopoli.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nStruktur pasar dibedakan berdasarkan jumlah produsen, diferensiasi produk, dan kebebasan keluar-masuk pasar. Tentukan kebenaran dari masing-masing pernyataan perbandingan pasar berikut:\n</p>",
    "items": [
      {
        "pernyataan": "Pada Pasar Persaingan Sempurna, produsen individual bertindak sebagai penerima harga (price taker) karena jumlah penjual sangat banyak dan produk yang diperdagangkan bersifat homogen sempurna.",
        "kunci": "Benar",
        "penjelasan": "Karena produk identik dan banyak produsen, satu produsen tidak memiliki kekuatan mengubah harga pasar."
      },
      {
        "pernyataan": "Dalam Pasar Monopoli, perusahaan memiliki kekuatan menentukan harga (price maker) dan kurva permintaan yang dihadapi perusahaan berlereng negatif menurun dari kiri atas ke kanan bawah.",
        "kunci": "Benar",
        "penjelasan": "Monopoli adalah penjual tunggal tanpa barang pengganti dekat dengan hambatan masuk (barrier to entry) tinggi."
      },
      {
        "pernyataan": "Pasar Oligopoli dicirikan oleh adanya ribuan produsen kecil yang menjual barang komoditas seragam tanpa memerlukan iklan promosi sama sekali.",
        "kunci": "Salah",
        "penjelasan": "Oligopoli dikuasai oleh beberapa perusahaan besar (misalnya industri semen atau operator seluler) dengan ketergantungan strategis tinggi dan persaingan iklan yang sangat agresif."
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Evaluasi Karakteristik Struktur Pasar:</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Di pasar persaingan sempurna, kurva permintaan individual berbentuk garis horizontal elastis tak terhingga (P = AR = MR), produsen adalah *price taker*.<br>\n2. <strong>Pernyataan 2 (Benar):</strong> Monopoli adalah pengendali harga (*price maker*) dengan kurva permintaan pasar yang menurun.<br>\n3. <strong>Pernyataan 3 (Salah):</strong> Pasar yang dikuasai ribuan produsen komoditas seragam adalah persaingan sempurna. Oligopoli hanya dikuasai beberapa pemain besar (*few sellers*).<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    "kode": "25EKO-PRED2-004"
  },
  {
    "id": 5,
    "elemen": "Ekonomi Makro",
    "subelemen": "Pendapatan Nasional Per Kapita",
    "indikator": "Menghitung dan membandingkan pendapatan per kapita antarnegara dari data agregat.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTabel berikut menyajikan data Produk Nasional Bruto (PNB/GNP) dan jumlah penduduk dari beberapa negara fiktif pada tahun 2024:\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs\">\n    <thead class=\"bg-amber-600 text-white font-semibold\">\n      <tr>\n        <th class=\"p-2.5 border border-amber-700\">Negara</th>\n        <th class=\"p-2.5 border border-amber-700 text-right\">GNP (Juta USD)</th>\n        <th class=\"p-2.5 border border-amber-700 text-right\">Jumlah Penduduk (Jiwa)</th>\n      </tr>\n    </thead>\n    <tbody class=\"divide-y divide-slate-200 bg-white\">\n      <tr>\n        <td class=\"p-2 border border-slate-200 font-bold\">Arkadia</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">120.000</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">30.000.000</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200 font-bold\">Britania Raya Baru</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">400.000</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">80.000.000</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 border border-slate-200 font-bold\">Caelum</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">50.000</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">5.000.000</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200 font-bold\">Dravidia</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">180.000</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">60.000.000</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nUrutan negara dengan pendapatan per kapita dari yang <strong>tertinggi hingga terendah</strong> adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Britania Raya Baru, Caelum, Arkadia, Dravidia"
      },
      {
        "id": "B",
        "text": "Caelum, Britania Raya Baru, Arkadia, Dravidia"
      },
      {
        "id": "C",
        "text": "Britania Raya Baru, Arkadia, Caelum, Dravidia"
      },
      {
        "id": "D",
        "text": "Caelum, Arkadia, Britania Raya Baru, Dravidia"
      },
      {
        "id": "E",
        "text": "Arkadia, Caelum, Britania Raya Baru, Dravidia"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Rumus Pendapatan Per Kapita:</strong><br>\n<code>Pendapatan Per Kapita = Total GNP / Jumlah Penduduk</code><br><br>\nPerhitungan untuk masing-masing negara:<br>\n1. <strong>Caelum:</strong><br>\n   <code>50.000.000.000 USD / 5.000.000 jiwa = 10.000 USD</code> per kapita.<br><br>\n2. <strong>Britania Raya Baru:</strong><br>\n   <code>400.000.000.000 USD / 80.000.000 jiwa = 5.000 USD</code> per kapita.<br><br>\n3. <strong>Arkadia:</strong><br>\n   <code>120.000.000.000 USD / 30.000.000 jiwa = 4.000 USD</code> per kapita.<br><br>\n4. <strong>Dravidia:</strong><br>\n   <code>180.000.000.000 USD / 60.000.000 jiwa = 3.000 USD</code> per kapita.<br><br>\nUrutan dari tertinggi: <strong>Caelum (10.000 USD) &rarr; Britania Raya Baru (5.000 USD) &rarr; Arkadia (4.000 USD) &rarr; Dravidia (3.000 USD)</strong>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-005"
  },
  {
    "id": 6,
    "elemen": "Kebijakan Ekonomi Makro",
    "subelemen": "Kebijakan Moneter Bank Sentral",
    "indikator": "Menganalisis instrumen kebijakan moneter kontraktif (tight money policy) untuk mengendalikan laju inflasi.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nIndeks Harga Konsumen (IHK) menunjukkan lonjakan laju inflasi tahunan melampaui batas target sasaran pemerintah. Untuk meredam tekanan kenaikan harga barang dan mengurangi jumlah uang yang beredar (JUB) di masyarakat, Bank Indonesia mengambil bauran instrumen kebijakan moneter.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKombinasi instrumen kebijakan moneter kontraktif (<em>tight money policy</em>) yang tepat diterapkan oleh bank sentral adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Menurunkan suku bunga acuan bank dan membeli kembali Surat Berharga Negara dari pasar sekunder"
      },
      {
        "id": "B",
        "text": "Menaikkan suku bunga diskonto (BI-Rate), menaikkan persentase giro wajib minimum (cadangan kas bank), dan menjual Surat Berharga Negara (SBN) ke pasar uang"
      },
      {
        "id": "C",
        "text": "Melonggarkan syarat kredit agunan rumah dan mempermudah pinjaman usaha konsumtif"
      },
      {
        "id": "D",
        "text": "Mencetak uang kertas baru dalam jumlah berlipat ganda untuk dibagikan cuma-cuma"
      },
      {
        "id": "E",
        "text": "Menurunkan rasio kecukupan modal bank umum agar perbankan lebih leluasa menyalurkan kredit"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Instrumen Kebijakan Moneter Kontraktif (Mengatasi Inflasi):</strong><br>\nUntuk mengurangi jumlah uang beredar (*JUB*), Bank Sentral menerapkan:<br>\n1. <strong>Politik Diskonto (Discount Policy):</strong> <em>Menaikkan</em> suku bunga agar masyarakat gemar menabung dan minat kredit menurun.<br>\n2. <strong>Operasi Pasar Terbuka (Open Market Operation):</strong> <em>Menjual</em> surat berharga (SBN/SBI) sehingga uang masyarakat terserap masuk ke bank sentral.<br>\n3. <strong>Cadangan Kas Minimum (Cash Ratio/GWM):</strong> <em>Menaikkan</em> persentase cadangan kas wajib bank umum sehingga likuiditas penyaluran kredit berkurang.<br>\n4. <strong>Kredit Selektif (Tight Credit):</strong> Memperketat persyaratan 5C (Character, Capacity, Capital, Collateral, Condition).<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-006"
  },
  {
    "id": 7,
    "elemen": "Uang & Perbankan",
    "subelemen": "Teori Kuantitas Uang (Equation of Exchange)",
    "indikator": "Menghitung tingkat harga dan kecepatan uang berdasarkan rumus persamaan transaksi Irving Fisher.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam teori kuantitas uang kuantitatif, Irving Fisher merumuskan persamaan pertukaran:\n<br><code>M &times; V = P &times; T</code>\n<br>Di suatu wilayah perekonomian tercatat:\n<br>&bull; Jumlah uang yang beredar di masyarakat (M) = <strong>Rp40.000.000.000,00</strong>\n<br>&bull; Kecepatan peredaran uang (V) = <strong>15 kali</strong> dalam setahun\n<br>&bull; Total volume transaksi unit barang dan jasa yang diperjualbelikan (T) = <strong>60.000.000 unit</strong>\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPernyataan yang <strong>benar</strong> berdasarkan analisis rumus transaksi Irving Fisher tersebut adalah... (Pilihlah lebih dari satu jawaban yang benar!)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Tingkat harga umum barang (P) pada perekonomian tersebut adalah sebesar Rp10.000,00 per unit"
      },
      {
        "id": "B",
        "text": "Jika jumlah uang beredar (M) dinaikkan dua kali lipat menjadi Rp80 Miliar sementara V dan T tetap, maka tingkat harga umum (P) akan naik dua kali lipat menjadi Rp20.000,00 per unit (inflasi proporsional)"
      },
      {
        "id": "C",
        "text": "Tingkat harga umum barang (P) adalah Rp25.000,00 per unit"
      },
      {
        "id": "D",
        "text": "Nilai transaksi agregat barang yang terjadi dalam perekonomian (P × T) adalah sebesar Rp600 Miliar"
      },
      {
        "id": "E",
        "text": "Pertambahan jumlah uang beredar akan selalu menurunkan tingkat harga barang di pasar"
      }
    ],
    "kunci": [
      "A",
      "B",
      "D"
    ],
    "pembahasan": "<strong>Langkah Perhitungan Teori Irving Fisher:</strong><br>\nRumus: <code>M &times; V = P &times; T</code><br>\n&bull; M = Rp40.000.000.000<br>\n&bull; V = 15 kali<br>\n&bull; T = 60.000.000 unit<br><br>\n1. <strong>Menghitung Nilai P:</strong><br>\n   <code>P = (M &times; V) / T</code><br>\n   <code>P = (Rp40.000.000.000 &times; 15) / 60.000.000 = Rp600.000.000.000 / 60.000.000 = Rp10.000,00 per unit</code> (Pernyataan A Benar, C Salah).<br><br>\n2. <strong>Nilai Transaksi (P &times; T):</strong><br>\n   <code>P &times; T = M &times; V = Rp600 Miliar</code> (Pernyataan D Benar).<br><br>\n3. <strong>Hukum Fisher:</strong><br>\n   Tingkat harga (P) berbanding lurus secara proporsional dengan jumlah uang beredar (M). Jika M naik 2x lipat (menjadi 80 Miliar), maka P menjadi <code>(80 M &times; 15) / 60 jt = Rp20.000,00</code> (Pernyataan B Benar).<br><br>\n<strong>Kunci Jawaban: A, B, dan D</strong>",
    "kode": "25EKO-PRED2-007"
  },
  {
    "id": 8,
    "elemen": "Kebijakan Ekonomi Makro",
    "subelemen": "Kebijakan Fiskal (Penerimaan Pajak & Pengeluaran Pemerintah)",
    "indikator": "Menentukan kebijakan fiskal ekspansif yang tepat untuk mengatasi kelesuan ekonomi dan resesi.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKetika perekonomian nasional mengalami kontraksi dan kelesuan daya beli masyarakat akibat gelombang resesi global, pemerintah menerapkan kebijakan anggaran defisit melalui <strong>Kebijakan Fiskal Ekspansif</strong>.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nLangkah instrumen fiskal yang sesuai dengan arah kebijakan ekspansif tersebut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Menaikkan tarif Pajak Pertambahan Nilai (PPN) dan memangkas anggaran subsidi bantuan sosial"
      },
      {
        "id": "B",
        "text": "Menurunkan tarif pajak penghasilan, memberikan insentif tax holiday bagi dunia usaha, serta memperbesar alokasi belanja proyek infrastruktur padat karya dan transfer bantuan sosial"
      },
      {
        "id": "C",
        "text": "Menghapuskan seluruh anggaran belanja kesehatan dan pendidikan"
      },
      {
        "id": "D",
        "text": "Memperketat syarat pinjaman bank komersial dan menyita aset wajib pajak kecil"
      },
      {
        "id": "E",
        "text": "Menunda seluruh pembayaran gaji pegawai negeri dan aparatur sipil negara"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Kebijakan Fiskal Ekspansif (Penanggulangan Resesi):</strong><br>\nBertujuan memulihkan daya beli agregat (*aggregate demand*) dan mendorong roda produksi melalui:<br>\n1. <strong>Pengurangan Pajak (*Tax Cut*):</strong> Menurunkan tarif pajak atau memberikan tax holiday agar pendapatan siap konsumsi (disposable income) rumah tangga dan kas investasi korporasi meningkat.<br>\n2. <strong>Peningkatan Pengeluaran Pemerintah (*Government Spending*):</strong> Menambah belanja infrastruktur padat karya dan jaring pengaman sosial (bansos) untuk menciptakan lapangan kerja langsung.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-008"
  },
  {
    "id": 9,
    "elemen": "Keuangan Negara & Daerah",
    "subelemen": "Struktur Pendapatan & Belanja Negara (APBN)",
    "indikator": "Mengevaluasi pos penerimaan perpajakan, PNBP, dan transfer ke daerah dalam struktur APBN.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAnggaran Pendapatan dan Belanja Negara (APBN) disusun setiap tahun melalui persetujuan bersama antara Presiden dan DPR. Tentukan kebenaran dari masing-masing pernyataan komponen APBN berikut:\n</p>",
    "items": [
      {
        "pernyataan": "Penerimaan Negara Bukan Pajak (PNBP) bersumber dari pemanfaatan sumber daya alam (minyak bumi, gas, mineral), dividen bagian laba BUMN, dan pendapatan layanan Badan Layanan Umum (BLU).",
        "kunci": "Benar",
        "penjelasan": "PNBP mencakup seluruh penerimaan pemerintah pusat di luar sektor perpajakan dan hibah."
      },
      {
        "pernyataan": "Dana Transfer ke Daerah (TKD) seperti Dana Bagi Hasil (DBH), Dana Alokasi Umum (DAU), dan Dana Alokasi Khusus (DAK) dialokasikan untuk mendanai pelaksanaan desentralisasi fiskal pemerintah daerah.",
        "kunci": "Benar",
        "penjelasan": "TKD menjamin pemerataan kemampuan keuangan antardaerah otonom di Indonesia."
      },
      {
        "pernyataan": "Jika rancangan APBN yang diajukan oleh Presiden ditolak oleh DPR, maka pemerintah secara otomatis tidak memiliki anggaran dan dilarang menyelenggarakan kegiatan negara.",
        "kunci": "Salah",
        "penjelasan": "Berdasarkan UUD 1945 Pasal 23 ayat (3), jika DPR tidak menyetujui rancangan APBN yang diajukan, maka pemerintah menjalankan APBN tahun sebelumnya."
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Analisis Struktur dan Asas Hukum APBN:</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> PNBP terdiri dari penerimaan SDA migas/non-migas, laba BUMN, dan PNBP lainnya/BLU.<br>\n2. <strong>Pernyataan 2 (Benar):</strong> Dana Alokasi Umum (DAU) bersifat *block grant*, DAK bersifat *specific grant* untuk infrastruktur prioritas daerah.<br>\n3. <strong>Pernyataan 3 (Salah):</strong> Berdasarkan Pasal 23 ayat (3) UUD 1945, jika RAPBN ditolak, pemerintah memakai pagu APBN tahun anggaran lalu.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    "kode": "25EKO-PRED2-009"
  },
  {
    "id": 10,
    "elemen": "Ketenagakerjaan & Pembangunan",
    "subelemen": "Klasifikasi Jenis Pengangguran",
    "indikator": "Membedakan pengangguran struktural, friksional, siklikal, dan musiman berdasarkan kasus nyata di masyarakat.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAkibat modernisasi pesat dan penerapan sistem otomasi robotik di pabrik perakitan mobil, sebanyak 500 karyawan bagian pengelasan manual dirumahkan karena keahlian tenaga manusia telah digantikan sepenuhnya oleh perangkat lengan robot presisi tinggi. Para pekerja yang terkena PHK tersebut tidak dapat langsung melamar ke pabrik mobil lain karena tidak memiliki keterampilan mengoperasikan perangkat lunak pemrograman robotika tersebut.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan penyebab terjadinya, jenis pengangguran yang dialami oleh para pekerja tersebut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Pengangguran siklikal (konjungtural)"
      },
      {
        "id": "B",
        "text": "Pengangguran musiman"
      },
      {
        "id": "C",
        "text": "Pengangguran struktural"
      },
      {
        "id": "D",
        "text": "Pengangguran friksional"
      },
      {
        "id": "E",
        "text": "Pengangguran terbuka sukarela"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Jenis-Jenis Pengangguran Berdasarkan Penyebabnya:</strong><br>\n&bull; <strong>Pengangguran Struktural (Pilihan C):</strong> Terjadi karena adanya perubahan struktur atau dinamika teknologi perekonomian yang menyebabkan keahlian pencari kerja tidak lagi sesuai (*mismatch*) dengan kualifikasi yang dibutuhkan industri baru.<br>\n&bull; <strong>Pengangguran Friksional:</strong> Pengangguran sementara saat seseorang berpindah pekerjaan untuk mencari posisi yang lebih baik.<br>\n&bull; <strong>Pengangguran Siklikal:</strong> Terjadi akibat penurunan aktivitas ekonomi/resesi.<br>\n&bull; <strong>Pengangguran Musiman:</strong> Terjadi akibat pergantian musim (misal buruh tani saat jeda tanam).<br><br>\n<strong>Kunci Jawaban: C (Pengangguran struktural)</strong>",
    "kode": "25EKO-PRED2-010"
  },
  {
    "id": 11,
    "elemen": "Ekonomi Internasional",
    "subelemen": "Teori Keunggulan Komparatif (David Ricardo)",
    "indikator": "Menganalisis prinsip keunggulan komparatif David Ricardo berdasarkan biaya peluang (opportunity cost).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam teori perdagangan internasional, David Ricardo mengemukakan <strong>Teori Keunggulan Komparatif (Comparative Advantage)</strong> untuk melengkapi kelemahan Teori Keunggulan Mutlak Adam Smith.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPrinsip dasar dari Teori Keunggulan Komparatif menyatakan bahwa perdagangan internasional yang saling menguntungkan antarnegara tetap dapat terjadi apabila...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Kedua negara memiliki cadangan emas batangan yang persis sama banyak"
      },
      {
        "id": "B",
        "text": "Suatu negara memiliki keunggulan mutlak memproduksi semua jenis barang dengan biaya termurah di dunia"
      },
      {
        "id": "C",
        "text": "Meskipun suatu negara mengalami ketertinggalan mutlak dalam memproduksi kedua jenis barang, perdagangan tetap menguntungkan jika negara tersebut berspesialisasi memproduksi barang yang memiliki keunggulan komparatif terbesar (biaya peluang / opportunity cost paling rendah)"
      },
      {
        "id": "D",
        "text": "Pemerintah melarang seluruh lalu lintas mata uang asing di wilayah perbatasan"
      },
      {
        "id": "E",
        "text": "Kedua negara menggunakan sistem mata uang bersama tunggal"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Teori Keunggulan Komparatif (David Ricardo):</strong><br>\nJika Negara A lebih efisien memproduksi SEMUA barang dibanding Negara B, Negara B tetap dapat berdagang secara menguntungkan dengan Negara A.<br>\nKuncinya adalah <strong>spesialisasi pada barang dengan biaya peluang (*opportunity cost*) terendah</strong> atau efisiensi komparatif tertinggi, lalu mengekspornya dan mengimpor barang yang biaya peluangnya lebih tinggi.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25EKO-PRED2-011"
  },
  {
    "id": 12,
    "elemen": "Ekonomi Internasional",
    "subelemen": "Instrumen Proteksionisme Perdagangan Luar Negeri",
    "indikator": "Mengidentifikasi dampak ekonomi dari kebijakan kuota impor dan tarif bea masuk.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUntuk melindungi industri manufaktur dalam negeri dari serbuan produk impor berharga murah, pemerintah memberlakukan kebijakan kuota impor dan kenaikan tarif bea masuk.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nDampak ekonomi yang ditimbulkan dari pemberlakuan <strong>Kuota Impor</strong> tersebut di pasar domestik adalah... (Pilihlah lebih dari satu jawaban yang benar!)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Jumlah barang impor yang masuk ke pasar domestik dibatasi secara kuantitas maksimal"
      },
      {
        "id": "B",
        "text": "Harga produk sejenis di pasar dalam negeri cenderung mengalami kenaikan"
      },
      {
        "id": "C",
        "text": "Produsen lokal memperoleh perlindungan pasar sehingga volume produksi dalam negeri dapat meningkat"
      },
      {
        "id": "D",
        "text": "Surplus konsumen masyarakat meningkat drastis karena harga barang di toko menjadi jauh lebih murah"
      },
      {
        "id": "E",
        "text": "Pilihan variasi barang yang dapat dibeli oleh konsumen di pasar domestik menjadi lebih terbatas"
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "E"
    ],
    "pembahasan": "<strong>Dampak Kebijakan Kuota Impor:</strong><br>\n&bull; <strong>Pernyataan A (Benar):</strong> Kuota membatasi volume fisik barang impor.<br>\n&bull; <strong>Pernyataan B (Benar):</strong> Berkurangnya pasokan impor mendorong kenaikan harga keseimbangan domestik.<br>\n&bull; <strong>Pernyataan C (Benar):</strong> Melindungi produsen lokal dari perang harga asing.<br>\n&bull; <strong>Pernyataan E (Benar):</strong> Pilihan produk bagi konsumen berkurang.<br>\n&bull; <strong>Pernyataan D (Salah):</strong> Surplus konsumen justru berkurang (*deadweight loss*) karena harus membayar harga lebih mahal.<br><br>\n<strong>Kunci Jawaban: A, B, C, dan E</strong>",
    "kode": "25EKO-PRED2-012"
  },
  {
    "id": 13,
    "elemen": "Ekonomi Internasional",
    "subelemen": "Neraca Pembayaran (Balance of Payments)",
    "indikator": "Menghitung saldo neraca perdagangan barang dari data transaksi ekspor-impor.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLaporan transaksi perdagangan internasional suatu negara pada tahun 2024 mencatat data sebagai berikut (dalam satuan juta USD):\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs\">\n    <thead class=\"bg-amber-600 text-white font-semibold\">\n      <tr>\n        <th class=\"p-2.5 border border-amber-700\">Jenis Transaksi Ekspor / Impor</th>\n        <th class=\"p-2.5 border border-amber-700 text-right\">Nilai (Juta USD)</th>\n      </tr>\n    </thead>\n    <tbody class=\"divide-y divide-slate-200 bg-white\">\n      <tr>\n        <td class=\"p-2 border border-slate-200\">Ekspor Komoditas Barang (Migas &amp; Non-Migas)</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono font-bold text-emerald-700\">85.000</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200\">Impor Komoditas Barang Baku &amp; Konsumsi</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono font-bold text-rose-600\">65.000</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 border border-slate-200\">Ekspor Jasa Pengangkutan &amp; Pariwisata</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">12.000</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200\">Impor Jasa Asuransi &amp; Pengapalan Luar Negeri</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">18.000</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, kondisi <strong>Neraca Perdagangan Barang (Trade Balance)</strong> negara tersebut mengalami...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Defisit sebesar 20.000 Juta USD"
      },
      {
        "id": "B",
        "text": "Surplus sebesar 20.000 Juta USD"
      },
      {
        "id": "C",
        "text": "Defisit sebesar 6.000 Juta USD"
      },
      {
        "id": "D",
        "text": "Surplus sebesar 14.000 Juta USD"
      },
      {
        "id": "E",
        "text": "Keseimbangan seimbang (bernilai nol)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Perhitungan Neraca Perdagangan Barang:</strong><br>\n<code>Neraca Perdagangan Barang = Ekspor Barang &minus; Impor Barang</code><br><br>\nDiketahui data:<br>\n&bull; Ekspor Barang = 85.000 Juta USD<br>\n&bull; Impor Barang = 65.000 Juta USD<br><br>\nPerhitungan:<br>\n<code>Saldo = 85.000 &minus; 65.000 = +20.000 Juta USD</code>.<br>\nKarena nilai ekspor barang lebih besar daripada impor barang, maka neraca perdagangan barang mengalami <strong>Surplus sebesar 20.000 Juta USD</strong>.<br><br>\n(Catatan: Transaksi jasa masuk ke pos neraca jasa/perjalanan terpisah).<br><br>\n<strong>Kunci Jawaban: B (Surplus sebesar 20.000 Juta USD)</strong>",
    "kode": "25EKO-PRED2-013"
  },
  {
    "id": 14,
    "elemen": "Badan Usaha dalam Perekonomian",
    "subelemen": "Bentuk-Bentuk Badan Usaha (PT dan CV)",
    "indikator": "Membedakan karakteristik tanggung jawab pemegang saham PT dan sekutu dalam persekutuan komanditer (CV).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam menjalankan usaha, pelaku bisnis dapat memilih badan hukum Perseroan Terbatas (PT) atau Persekutuan Komanditer (CV).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKelebihan utama dari badan usaha berbentuk <strong>Perseroan Terbatas (PT)</strong> dibandingkan Persekutuan Komanditer (CV) ditinjau dari aspek tanggung jawab keuangan pemilik adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Pemilik PT menanggung seluruh kerugian perusahaan hingga mengorbankan seluruh harta kekayaan pribadi tanpa batas"
      },
      {
        "id": "B",
        "text": "Tanggung jawab pemegang saham bersifat terbatas (limited liability), di mana apabila perusahaan pailit/bangkrut, kerugian yang ditanggung investor hanya sebatas jumlah nominal modal saham yang disetor ke perseroan"
      },
      {
        "id": "C",
        "text": "PT tidak wajib membayar pajak penghasilan badan kepada kas negara"
      },
      {
        "id": "D",
        "text": "PT dapat didirikan tanpa akta notaris resmi dan tidak memerlukan pengesahan Kementerian Hukum"
      },
      {
        "id": "E",
        "text": "Kekuasaan tertinggi dalam PT berada di tangan dewan komisaris tanpa keterlibatan RUPS"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Prinsip Tanggung Jawab Terbatas PT (*Limited Liability*):</strong><br>\n&bull; <strong>Perseroan Terbatas (PT):</strong> Merupakan badan hukum (*rechtspersoon*) terpisah dari pemiliknya. Tanggung jawab pemegang saham <strong>terbatas</strong> hanya sebesar saham yang dimilikinya; harta pribadi pemilik terlindungi dari sitaan kreditur perseroan.<br>\n&bull; <strong>Persekutuan Komanditer (CV):</strong> Memiliki sekutu aktif (*komplementer*) yang mengelola usaha dengan tanggung jawab tidak terbatas hingga harta pribadi, serta sekutu pasif (*komanditer*) yang hanya menyetor modal.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-014"
  },
  {
    "id": 15,
    "elemen": "Koperasi Indonesia",
    "subelemen": "Prinsip Kerja & Pembagian SHU Koperasi",
    "indikator": "Mengevaluasi prinsip-prinsip jati diri koperasi menurut UU No. 25 Tahun 1992.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBerdasarkan Undang-Undang Nomor 25 Tahun 1992, koperasi Indonesia berlandaskan Pancasila dan UUD 1945 atas asas kekeluargaan. Tentukan kebenaran dari masing-masing pernyataan berikut:\n</p>",
    "items": [
      {
        "pernyataan": "Keanggotaan koperasi bersifat sukarela dan terbuka, serta pengelolaan organisasi dilakukan secara demokratis dengan prinsip satu anggota satu suara (one man one vote) dalam Rapat Anggota.",
        "kunci": "Benar",
        "penjelasan": "Berbeda dari PT di mana suara ditentukan jumlah lembar saham, koperasi menempatkan setiap anggota setara secara demokratis."
      },
      {
        "pernyataan": "Pembagian Sisa Hasil Usaha (SHU) kepada anggota dilakukan sebanding dengan besarnya jasa usaha dan kontribusi transaksi yang dilakukan masing-masing anggota kepada koperasi.",
        "kunci": "Benar",
        "penjelasan": "SHU dibagikan adil berdasarkan jasa modal (simpanan) dan jasa transaksi/usaha anggota."
      },
      {
        "pernyataan": "Tujuan utama pendirian koperasi adalah memaksimalisasi keuntungan tunai pemilik modal pendiri sebesar-besarnya seperti badan usaha perseroan.",
        "kunci": "Salah",
        "penjelasan": "Tujuan koperasi adalah memajukan kesejahteraan anggota pada khususnya dan masyarakat pada umumnya, bukan semata-mata mencari laba kapitalis."
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Prinsip Koperasi (UU No. 25/1992):</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Demokrasi ekonomi: hak suara anggota sama rata (*one member one vote*).<br>\n2. <strong>Pernyataan 2 (Benar):</strong> Pembagian SHU adil sebanding partisipasi modal dan partisipasi transaksi belanja anggota.<br>\n3. <strong>Pernyataan 3 (Salah):</strong> Koperasi berorientasi pada kemakmuran bersama dan kesejahteraan anggota (*service-oriented*), bukan profit maksimal bagi pemodal.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    "kode": "25EKO-PRED2-015"
  },
  {
    "id": 16,
    "elemen": "Konsep Manajemen",
    "subelemen": "Fungsi-Fungsi Pokok Manajemen (POAC)",
    "indikator": "Mengidentifikasi fungsi pengorganisasian (organizing) dalam pembagian tugas dan wewenang kerja tim.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam rangka peluncuran produk telepon pintar baru, seorang manajer puncak menetapkan pembagian struktur departemen, mendelegasikan wewenang operasional kepada masing-masing kepala divisi, serta mengalokasikan anggaran dan penempatan staf sesuai keahlian bidangnya.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nAktivitas manajerial yang dilakukan tersebut merupakan penerapan fungsi manajemen...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Planning (Perencanaan tujuan)"
      },
      {
        "id": "B",
        "text": "Organizing (Pengorganisasian tugas dan struktur)"
      },
      {
        "id": "C",
        "text": "Actuating (Pengarahan dan motivasi kerja)"
      },
      {
        "id": "D",
        "text": "Controlling (Pengawasan evaluasi kinerja)"
      },
      {
        "id": "E",
        "text": "Staffing (Pemecatan karyawan)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Fungsi Manajemen George R. Terry (POAC):</strong><br>\n&bull; <strong>Planning:</strong> Menetapkan sasaran dan memilih langkah mencapai tujuan.<br>\n&bull; <strong>Organizing (Pilihan B):</strong> Mengelompokkan aktivitas, menetapkan struktur organisasi, membagi tugas kerja (*division of labor*), mendelegasikan wewenang, dan mengalokasikan sumber daya manusia.<br>\n&bull; <strong>Actuating:</strong> Membimbing, memotivasi, dan menggerakkan staf agar bekerja optimal.<br>\n&bull; <strong>Controlling:</strong> Memantau dan mengoreksi deviasi kinerja terhadap standar target.<br><br>\n<strong>Kunci Jawaban: B (Organizing)</strong>",
    "kode": "25EKO-PRED2-016"
  },
  {
    "id": 17,
    "elemen": "Konsep Manajemen",
    "subelemen": "Bidang-Bidang Manajemen Fungsional",
    "indikator": "Membedakan tugas pokok manajemen pemasaran, keuangan, produksi, dan personalia.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDivisi sebuah perusahaan ritel bertugas melakukan riset preferensi selera konsumen, merancang strategi promosi potongan harga, memilih saluran distribusi gerai toko di lokasi strategis, serta menetapkan bauran pemasaran (marketing mix: 4P).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nAktivitas tersebut merupakan lingkup tanggung jawab dari...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Manajemen Keuangan"
      },
      {
        "id": "B",
        "text": "Manajemen Personalia / Sumber Daya Manusia"
      },
      {
        "id": "C",
        "text": "Manajemen Pemasaran"
      },
      {
        "id": "D",
        "text": "Manajemen Produksi & Rekayasa"
      },
      {
        "id": "E",
        "text": "Manajemen Administrasi Akuntansi"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Bidang-Bidang Manajemen:</strong><br>\n&bull; <strong>Manajemen Pemasaran (Marketing - Pilihan C):</strong> Mengelola riset pasar, bauran pemasaran 4P (*Product, Price, Place, Promotion*), kepuasan pelanggan, dan perluasan pangsa pasar.<br>\n&bull; <strong>Manajemen Keuangan:</strong> Mengelola perolehan dan penggunaan modal, likuiditas, dan profitabilitas.<br>\n&bull; <strong>Manajemen Produksi:</strong> Mengatur proses konversi bahan baku menjadi barang jadi.<br>\n&bull; <strong>Manajemen Personalia/SDM:</strong> Merekrut, melatih, mengevaluasi, dan menggaji karyawan.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25EKO-PRED2-017"
  },
  {
    "id": 18,
    "elemen": "Akuntansi Dasar",
    "subelemen": "Penggolongan Akun (Riil dan Nominal)",
    "indikator": "Membedakan akun riil yang disajikan pada neraca dan akun nominal yang disajikan pada laporan laba rugi.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam bagan akun standar akuntansi keuangan, akun dikelompokkan menjadi Akun Riil (Permanent Accounts) dan Akun Nominal (Temporary Accounts).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKelompok akun yang seluruhnya tergolong ke dalam <strong>Akun Riil</strong> yang saldonya dibawa terus ke periode akuntansi berikutnya adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Beban Sewa, Pendapatan Jasa, dan Laba Bersih"
      },
      {
        "id": "B",
        "text": "Kas, Piutang Usaha, Perlengkapan, Utang Usaha, dan Modal Saham"
      },
      {
        "id": "C",
        "text": "Pendapatan Komisi, Beban Gaji, dan Beban Asuransi"
      },
      {
        "id": "D",
        "text": "Beban Iklan, Beban Listrik, dan Penjualan Bersih"
      },
      {
        "id": "E",
        "text": "Ikhtisar Laba Rugi, Prive, dan Beban Bunga"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Penggolongan Akun Riil vs Akun Nominal:</strong><br>\n&bull; <strong>Akun Riil (Akun Neraca / Laporan Posisi Keuangan - Pilihan B):</strong> Terdiri dari akun <strong>Harta (Assets), Kewajiban/Utang (Liabilities), dan Ekuitas/Modal (Equity)</strong>. Saldonya bersifat permanen dan tidak ditutup pada akhir tahun.<br>\n&bull; <strong>Akun Nominal (Akun Laba Rugi):</strong> Terdiri dari akun <strong>Pendapatan (Revenues) dan Beban (Expenses)</strong>. Saldonya bersifat sementara dan wajib dinolkan/ditutup ke akun modal melalui jurnal penutup pada akhir periode.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-018"
  },
  {
    "id": 19,
    "elemen": "Akuntansi Dasar",
    "subelemen": "Persamaan Dasar Akuntansi (Harta = Utang + Modal)",
    "indikator": "Menganalisis pencatatan transaksi pembayaran sewa dan penerimaan pelunasan piutang.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUsaha Percetakan \"Grafika Express\" melakukan dua transaksi keuangan pada minggu pertama bulan Oktober:\n<br>1. Membayar beban sewa tempat usaha untuk bulan berjalan secara tunai sebesar <strong>Rp3.000.000,00</strong>.\n<br>2. Menerima pelunasan piutang usaha dari pelanggan atas pekerjaan spanduk bulan lalu sebesar <strong>Rp5.000.000,00</strong> secara tunai.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPengaruh yang <strong>benar</strong> dari kedua transaksi tersebut terhadap Persamaan Dasar Akuntansi adalah... (Pilihlah lebih dari satu jawaban yang benar!)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Transaksi 1 menyebabkan Kas berkurang sebesar Rp3.000.000,00 dan Modal berkurang sebesar Rp3.000.000,00"
      },
      {
        "id": "B",
        "text": "Transaksi 1 menyebabkan Kas berkurang sebesar Rp3.000.000,00 dan Utang Sewa bertambah sebesar Rp3.000.000,00"
      },
      {
        "id": "C",
        "text": "Transaksi 2 menyebabkan Kas bertambah sebesar Rp5.000.000,00 dan Piutang Usaha berkurang sebesar Rp5.000.000,00 (harta berubah komposisi tanpa mengubah modal)"
      },
      {
        "id": "D",
        "text": "Transaksi 2 menyebabkan Kas bertambah sebesar Rp5.000.000,00 dan Modal bertambah sebesar Rp5.000.000,00"
      },
      {
        "id": "E",
        "text": "Transaksi 1 dan 2 secara bersama-sama menyebabkan posisi total aktiva bertambah bersih sebesar Rp2.000.000,00"
      }
    ],
    "kunci": [
      "A",
      "C",
      "E"
    ],
    "pembahasan": "<strong>Analisis Transaksi Persamaan Dasar Akuntansi:</strong><br>\n1. <strong>Transaksi 1 (Bayar Beban Sewa Tunai):</strong><br>\n   &bull; Kas (Harta) berkurang: &minus;Rp3.000.000,00<br>\n   &bull; Modal berkurang karena beban: &minus;Rp3.000.000,00 (Pernyataan A Benar, B Salah).<br><br>\n2. <strong>Transaksi 2 (Terima Pelunasan Piutang):</strong><br>\n   &bull; Kas (Harta) bertambah: +Rp5.000.000,00<br>\n   &bull; Piutang (Harta) berkurang: &minus;Rp5.000.000,00<br>\n   Modal tidak berubah karena pendapatan sudah diakui saat timbul piutang bulan lalu (Pernyataan C Benar, D Salah).<br><br>\n3. <strong>Dampak Bersih pada Kas (Aktiva):</strong><br>\n   <code>&minus;Rp3.000.000 + Rp5.000.000 = +Rp2.000.000,00</code> (Pernyataan E Benar).<br><br>\n<strong>Kunci Jawaban: A, C, dan E</strong>",
    "kode": "25EKO-PRED2-019"
  },
  {
    "id": 20,
    "elemen": "Siklus Akuntansi Perusahaan Jasa",
    "subelemen": "Ayat Jurnal Penyesuaian (AJP)",
    "indikator": "Menentukan ayat jurnal penyesuaian untuk mencatat beban pemakaian perlengkapan kantor.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam neraca saldo per 31 Desember 2024, akun <strong>Perlengkapan Kantor</strong> tercatat di sisi debit sebesar <strong>Rp8.000.000,00</strong>. Berdasarkan hasil perhitungan fisik persediaan barang pada akhir tahun di gudang (stock opname), perlengkapan kantor yang masih tersisa adalah senilai <strong>Rp3.000.000,00</strong>.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nAyat Jurnal Penyesuaian (AJP) yang benar per 31 Desember 2024 adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Beban Perlengkapan (D) Rp3.000.000,00 ; Perlengkapan Kantor (K) Rp3.000.000,00"
      },
      {
        "id": "B",
        "text": "Beban Perlengkapan (D) Rp5.000.000,00 ; Perlengkapan Kantor (K) Rp5.000.000,00"
      },
      {
        "id": "C",
        "text": "Perlengkapan Kantor (D) Rp5.000.000,00 ; Beban Perlengkapan (K) Rp5.000.000,00"
      },
      {
        "id": "D",
        "text": "Beban Perlengkapan (D) Rp8.000.000,00 ; Kas (K) Rp8.000.000,00"
      },
      {
        "id": "E",
        "text": "Kas (D) Rp3.000.000,00 ; Perlengkapan Kantor (K) Rp3.000.000,00"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Perhitungan Jurnal Penyesuaian Perlengkapan:</strong><br>\nAkun awal dicatat sebagai aset/harta (Perlengkapan Kantor = Rp8.000.000,00).<br>\nPerlengkapan yang masih tersisa = Rp3.000.000,00.<br><br>\nMaka perlengkapan yang telah <strong>terpakai / menjadi beban</strong> selama periode berjalan:<br>\n<code>Beban Perlengkapan = Saldo Awal &minus; Sisa Akhir</code><br>\n<code>Beban Perlengkapan = Rp8.000.000,00 &minus; Rp3.000.000,00 = Rp5.000.000,00</code>.<br><br>\nAyat Jurnal Penyesuaian:<br>\n&bull; <code>Beban Perlengkapan Kantor (Debit) Rp5.000.000,00</code><br>\n&bull; <code>Perlengkapan Kantor (Kredit) Rp5.000.000,00</code>.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-020"
  },
  {
    "id": 21,
    "elemen": "Laporan Keuangan",
    "subelemen": "Laporan Perubahan Modal / Ekuitas",
    "indikator": "Menghitung modal akhir perusahaan jasa dari laba bersih dan pengambilan prive.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nData keuangan Kantor Konsultan Hukum \"Keadilan &amp; Rekan\" untuk periode yang berakhir pada tanggal 31 Desember 2024 menyajikan informasi sebagai berikut:\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs\">\n    <tbody class=\"divide-y divide-slate-200 bg-white\">\n      <tr>\n        <td class=\"p-2 border border-slate-200 font-semibold\">Modal Awal per 1 Januari 2024</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono font-bold\">Rp50.000.000,00</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200\">Pendapatan Jasa Konsultasi Hukum</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono text-emerald-700\">Rp35.000.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 border border-slate-200\">Total Beban Operasional Kantor</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono text-rose-600\">Rp20.000.000,00</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200\">Pengambilan Pribadi Pemilik (Prive)</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">Rp5.000.000,00</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data keuangan tersebut, besarnya <strong>Modal Akhir</strong> per 31 Desember 2024 adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Rp55.000.000,00"
      },
      {
        "id": "B",
        "text": "Rp60.000.000,00"
      },
      {
        "id": "C",
        "text": "Rp65.000.000,00"
      },
      {
        "id": "D",
        "text": "Rp70.000.000,00"
      },
      {
        "id": "E",
        "text": "Rp75.000.000,00"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Langkah Penyusunan Laporan Perubahan Modal:</strong><br>\n1. <strong>Laba Bersih:</strong><br>\n   <code>Laba Bersih = Pendapatan &minus; Beban Operasional</code><br>\n   <code>Laba Bersih = Rp35.000.000,00 &minus; Rp20.000.000,00 = Rp15.000.000,00</code>.<br><br>\n2. <strong>Penambahan Modal Bersih:</strong><br>\n   <code>Penambahan Modal = Laba Bersih &minus; Prive</code><br>\n   <code>Penambahan Modal = Rp15.000.000,00 &minus; Rp5.000.000,00 = Rp10.000.000,00</code>.<br><br>\n3. <strong>Modal Akhir:</strong><br>\n   <code>Modal Akhir = Modal Awal + Penambahan Modal</code><br>\n   <code>Modal Akhir = Rp50.000.000,00 + Rp10.000.000,00 = Rp60.000.000,00</code>.<br><br>\n<strong>Kunci Jawaban: B (Rp60.000.000,00)</strong>",
    "kode": "25EKO-PRED2-021"
  },
  {
    "id": 22,
    "elemen": "Akuntansi Perusahaan Dagang",
    "subelemen": "Jurnal Khusus (Special Journals)",
    "indikator": "Mengidentifikasi pencatatan transaksi penjualan barang dagang secara kredit ke dalam Jurnal Penjualan.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada tanggal 15 November 2024, Toko Grosir \"Sejahtera\" menjual barang dagangan berupa 100 karton minyak goreng kepada Toko Berkah seharga <strong>Rp14.000.000,00</strong> dengan syarat pembayaran <code>2/10, n/30</code> disertai faktur nomor F-105.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTransaksi tersebut harus dicatat oleh Toko Grosir \"Sejahtera\" ke dalam jurnal khusus...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Jurnal Penerimaan Kas"
      },
      {
        "id": "B",
        "text": "Jurnal Pembelian"
      },
      {
        "id": "C",
        "text": "Jurnal Penjualan"
      },
      {
        "id": "D",
        "text": "Jurnal Pengeluaran Kas"
      },
      {
        "id": "E",
        "text": "Jurnal Retur Penjualan"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Fungsi Jurnal Khusus Perusahaan Dagang:</strong><br>\n&bull; <strong>Jurnal Penjualan (Sales Journal - Pilihan C):</strong> Khusus mencatat transaksi <strong>penjualan barang dagangan secara KREDIT</strong> (ditandai adanya syarat pembayaran seperti 2/10, n/30 dan faktur).<br>\n&bull; <strong>Jurnal Pembelian:</strong> Mencatat pembelian barang dagang atau aktiva lain secara kredit.<br>\n&bull; <strong>Jurnal Penerimaan Kas:</strong> Mencatat semua penerimaan uang tunai (penjualan tunai, pelunasan piutang).<br>\n&bull; <strong>Jurnal Pengeluaran Kas:</strong> Mencatat semua pembayaran tunai.<br><br>\n<strong>Kunci Jawaban: C (Jurnal Penjualan)</strong>",
    "kode": "25EKO-PRED2-022"
  },
  {
    "id": 23,
    "elemen": "Akuntansi Perusahaan Dagang",
    "subelemen": "Perhitungan Harga Pokok Penjualan (HPP)",
    "indikator": "Menghitung HPP perusahaan dagang dari komponen persediaan awal, pembelian bersih, dan persediaan akhir.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nData persediaan dan transaksi pembelian PD Maju Bersama selama bulan Desember 2024 tercatat sebagai berikut:\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs\">\n    <tbody class=\"divide-y divide-slate-200 bg-white\">\n      <tr>\n        <td class=\"p-2 border border-slate-200\">Persediaan Barang Dagang Awal (1 Des 2024)</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono font-bold\">Rp20.000.000,00</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200\">Pembelian Barang Dagang selama Desember</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">Rp60.000.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 border border-slate-200\">Beban Angkut Pembelian</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono\">Rp3.000.000,00</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200\">Retur Pembelian dan Pengurangan Harga</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono text-rose-600\">Rp2.000.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 border border-slate-200\">Potongan Pembelian Tunai</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono text-rose-600\">Rp1.000.000,00</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2 border border-slate-200 font-semibold\">Persediaan Barang Dagang Akhir (31 Des 2024)</td>\n        <td class=\"p-2 border border-slate-200 text-right font-mono font-bold\">Rp15.000.000,00</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, besarnya <strong>Harga Pokok Penjualan (HPP)</strong> PD Maju Bersama adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Rp60.000.000,00"
      },
      {
        "id": "B",
        "text": "Rp65.000.000,00"
      },
      {
        "id": "C",
        "text": "Rp70.000.000,00"
      },
      {
        "id": "D",
        "text": "Rp75.000.000,00"
      },
      {
        "id": "E",
        "text": "Rp80.000.000,00"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Langkah Perhitungan Harga Pokok Penjualan (HPP):</strong><br>\n1. <strong>Pembelian Bersih:</strong><br>\n   <code>Pembelian Bersih = (Pembelian + Beban Angkut) &minus; (Retur Pembelian + Potongan Pembelian)</code><br>\n   <code>Pembelian Bersih = (Rp60.000.000 + Rp3.000.000) &minus; (Rp2.000.000 + Rp1.000.000)</code><br>\n   <code>Pembelian Bersih = Rp63.000.000 &minus; Rp3.000.000 = Rp60.000.000,00</code>.<br><br>\n2. <strong>Barang Tersedia untuk Dijual (BTUD):</strong><br>\n   <code>BTUD = Persediaan Awal + Pembelian Bersih</code><br>\n   <code>BTUD = Rp20.000.000,00 + Rp60.000.000,00 = Rp80.000.000,00</code>.<br><br>\n3. <strong>Harga Pokok Penjualan (HPP):</strong><br>\n   <code>HPP = BTUD &minus; Persediaan Akhir</code><br>\n   <code>HPP = Rp80.000.000,00 &minus; Rp15.000.000,00 = Rp65.000.000,00</code>.<br><br>\n<strong>Kunci Jawaban: B (Rp65.000.000,00)</strong>",
    "kode": "25EKO-PRED2-023"
  },
  {
    "id": 24,
    "elemen": "Siklus Akuntansi",
    "subelemen": "Ayat Jurnal Penutup (Closing Entries)",
    "indikator": "Mengevaluasi prosedur penutupan akun pendapatan, beban, ikhtisar laba rugi, dan prive.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada akhir siklus akuntansi tahunan, perusahaan membuat ayat jurnal penutup untuk menolkan saldo akun-akun nominal sebelum membuka buku besar periode baru. Tentukan kebenaran dari masing-masing pernyataan berikut:\n</p>",
    "items": [
      {
        "pernyataan": "Untuk menutup akun Pendapatan yang bersaldo normal kredit, maka akun Pendapatan dicatat di sisi Debit dan akun Ikhtisar Laba Rugi dicatat di sisi Kredit.",
        "kunci": "Benar",
        "penjelasan": "Mendebit akun pendapatan memindahkan saldonya menjadi nol dan mengkredit ikhtisar laba rugi."
      },
      {
        "pernyataan": "Akun Beban ditutup dengan cara mencatat akun Beban di sisi Debit dan akun Modal di sisi Kredit.",
        "kunci": "Salah",
        "penjelasan": "Akun beban bersaldo normal debit ditutup dengan mengkredit akun beban dan mendebit akun Ikhtisar Laba Rugi (bukan langsung modal)."
      },
      {
        "pernyataan": "Akun Pengambilan Pribadi (Prive) yang bersaldo debit ditutup dengan cara mendebit akun Modal dan mengkredit akun Prive.",
        "kunci": "Benar",
        "penjelasan": "Prive mengurangi modal pemilik sehingga modal didebit dan prive dikredit menjadi nol."
      }
    ],
    "kunci": [
      "Benar",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Prosedur Ayat Jurnal Penutup:</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Menutup Pendapatan: <code>Pendapatan (D) ; Ikhtisar Laba Rugi (K)</code>.<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Menutup Beban: <code>Ikhtisar Laba Rugi (D) ; Beban-beban (K)</code>.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Menutup Prive: <code>Modal Pemilik (D) ; Prive (K)</code>.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    "kode": "25EKO-PRED2-024"
  },
  {
    "id": 25,
    "elemen": "Lembaga Keuangan & Otoritas Moneter",
    "subelemen": "Fungsi Pengawasan OJK & Perlindungan Simpanan LPS",
    "indikator": "Menjelaskan syarat kriteria simpanan nasabah yang dijamin oleh Lembaga Penjamin Simpanan (LPS).",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUntuk menjaga kepercayaan masyarakat dan stabilitas sistem perbankan nasional, <strong>Lembaga Penjamin Simpanan (LPS)</strong> menjamin simpanan nasabah di bank umum dan BPR hingga batas maksimal <strong>Rp2 Miliar per nasabah per bank</strong>.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKriteria persyaratan agar simpanan tabungan atau deposito seorang nasabah layak dibayar klaim penjaminannya (memenuhi kriteria 3T LPS) apabila bank yang bersangkutan dicabut izin usahanya adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Nasabah wajib menjadi pengurus aktif atau pemegang saham pengendali pada bank tersebut"
      },
      {
        "id": "B",
        "text": "Tercatat dalam pembukuan bank, Tingkat bunga simpanan tidak melebihi tingkat bunga penjaminan LPS, dan Tidak melakukan tindakan yang merugikan bank (tidak memiliki kredit macet)"
      },
      {
        "id": "C",
        "text": "Telah membuka rekening tabungan minimal selama 15 tahun tanpa pernah menarik uang tunai"
      },
      {
        "id": "D",
        "text": "Menyetujui bunga deposito di atas batas penjaminan yang ditawarkan oleh oknum pegawai bank"
      },
      {
        "id": "E",
        "text": "Saldo tabungan disimpan dalam bentuk pecahan uang koin kuno"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Syarat Klaim Penjaminan Simpanan LPS (Kriteria 3T):</strong><br>\nAgar simpanan nasabah dijamin dan dibayarkan oleh LPS saat bank dilikuidasi, harus memenuhi <strong>3T</strong>:<br>\n1. <strong>Tercatat:</strong> Simpanan tercatat sah dalam pembukuan bank.<br>\n2. <strong>Tingkat Bunga Wajar:</strong> Tingkat bunga simpanan yang diterima tidak melebihi tingkat bunga penjaminan maksimum yang ditetapkan LPS.<br>\n3. <strong>Tidak Merugikan Bank:</strong> Nasabah tidak melakukan tindakan curang yang merugikan bank (misalnya tidak memiliki fasilitas pinjaman/kredit macet yang belum lunas).<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25EKO-PRED2-025"
  }
];

if (typeof window !== 'undefined') {
  window.tkaEkonomiPaket2Data = tkaEkonomiPaket2Data;
  window.tkaEkonomiPackages = window.tkaEkonomiPackages || {};
  window.tkaEkonomiPackages['paket2'] = {
    id: "paket2",
    title: "Paket 2: Prediksi Resmi TKA Ekonomi SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    durasiMenit: 50,
    data: tkaEkonomiPaket2Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaEkonomiPaket2Data };
}
