// tka/data/mapel-matematika-umum-paket3.js
// Paket 3: Try Out 3 Sekolah TKA Matematika Umum (Wajib) SMA 2025/2026
// Sumber: SOAL TKA 2026 : TO SEKOLAH 21 OKTOBER (TKA - MATEMATIKA)
// Memuat 25 soal lengkap (PG, MCMA, dan Benar/Salah) beserta tabel, visualisasi SVG, dan pembahasan komprehensif.

const tkaMatematikaUmumPaket3Data = [
  {
    "id": 1,
    "elemen": "Data dan Peluang",
    "subelemen": "Statistika (Interpretasi Diagram Garis)",
    "indikator": "Menganalisis tren, perubahan antardata, dan jumlah pada diagram garis multi-seri.",
    "kode": "25MATWA-TO3-001",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nProgram perpustakaan keliling di Kecamatan Sukamaju melayani tiga lokasi, yaitu Taman Baca, Balai Warga, dan Sekolah Komunitas. Pengelola mencatat jumlah peminjam buku pada setiap lokasi selama enam bulan.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nData pada diagram garis disajikan sebagai berikut.\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl\">\n  <div class=\"text-xs sm:text-sm font-bold text-slate-800 text-center\">Jumlah Peminjam Perpustakaan Keliling</div>\n  <div class=\"text-xs text-slate-500 text-center mb-2\">Tiga lokasi layanan selama Juli&ndash;Desember</div>\n  <svg viewBox=\"0 0 540 260\" class=\"w-full max-w-xl mx-auto bg-white border border-slate-300 rounded-lg p-1\">\n    <!-- Legenda -->\n    <circle cx=\"130\" cy=\"18\" r=\"3.5\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <line x1=\"118\" y1=\"18\" x2=\"142\" y2=\"18\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <text x=\"147\" y=\"22\" font-size=\"10\" fill=\"#334155\" font-weight=\"bold\">Taman Baca</text>\n    <rect x=\"236\" y=\"14.5\" width=\"7\" height=\"7\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <line x1=\"228\" y1=\"18\" x2=\"252\" y2=\"18\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <text x=\"257\" y=\"22\" font-size=\"10\" fill=\"#334155\" font-weight=\"bold\">Balai Warga</text>\n    <polygon points=\"355,14 359,18 355,22 351,18\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <line x1=\"343\" y1=\"18\" x2=\"367\" y2=\"18\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <text x=\"372\" y=\"22\" font-size=\"10\" fill=\"#334155\" font-weight=\"bold\">Sekolah Komunitas</text>\n    <!-- Grid horizontal (y=220 -> 0, y=40 -> 200; 1 orang = 0.9px) -->\n    <line x1=\"55\" y1=\"220\" x2=\"510\" y2=\"220\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"55\" y1=\"40\" x2=\"55\" y2=\"220\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"55\" y1=\"130\" x2=\"510\" y2=\"130\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n    <line x1=\"55\" y1=\"94\" x2=\"510\" y2=\"94\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n    <line x1=\"55\" y1=\"58\" x2=\"510\" y2=\"58\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n    <text x=\"48\" y=\"223\" font-size=\"9\" text-anchor=\"end\" fill=\"#64748b\">0</text>\n    <text x=\"48\" y=\"133\" font-size=\"9\" text-anchor=\"end\" fill=\"#64748b\">100</text>\n    <text x=\"48\" y=\"97\" font-size=\"9\" text-anchor=\"end\" fill=\"#64748b\">140</text>\n    <text x=\"48\" y=\"61\" font-size=\"9\" text-anchor=\"end\" fill=\"#64748b\">180</text>\n    <text x=\"48\" y=\"43\" font-size=\"9\" text-anchor=\"end\" fill=\"#64748b\">200</text>\n    <!-- Label Bulan: x = 90, 170, 250, 330, 410, 490 -->\n    <text x=\"90\" y=\"236\" font-size=\"9.5\" text-anchor=\"middle\" fill=\"#334155\">Juli</text>\n    <text x=\"170\" y=\"236\" font-size=\"9.5\" text-anchor=\"middle\" fill=\"#334155\">Agustus</text>\n    <text x=\"250\" y=\"236\" font-size=\"9.5\" text-anchor=\"middle\" fill=\"#334155\">September</text>\n    <text x=\"330\" y=\"236\" font-size=\"9.5\" text-anchor=\"middle\" fill=\"#334155\">Oktober</text>\n    <text x=\"410\" y=\"236\" font-size=\"9.5\" text-anchor=\"middle\" fill=\"#334155\">November</text>\n    <text x=\"490\" y=\"236\" font-size=\"9.5\" text-anchor=\"middle\" fill=\"#334155\">Desember</text>\n    <!-- Taman Baca: 120(112), 135(98.5), 150(85), 145(89.5), 155(80.5), 175(62.5) -->\n    <polyline points=\"90,112 170,98.5 250,85 330,89.5 410,80.5 490,62.5\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <circle cx=\"90\" cy=\"112\" r=\"3\" fill=\"#fff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <circle cx=\"170\" cy=\"98.5\" r=\"3\" fill=\"#fff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <circle cx=\"250\" cy=\"85\" r=\"3\" fill=\"#fff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <circle cx=\"330\" cy=\"89.5\" r=\"3\" fill=\"#fff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <circle cx=\"410\" cy=\"80.5\" r=\"3\" fill=\"#fff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <circle cx=\"490\" cy=\"62.5\" r=\"3\" fill=\"#fff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"105\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">120</text>\n    <text x=\"170\" y=\"91\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">135</text>\n    <text x=\"250\" y=\"78\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">150</text>\n    <text x=\"330\" y=\"82\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">145</text>\n    <text x=\"410\" y=\"74\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">155</text>\n    <text x=\"475\" y=\"63\" font-size=\"8.5\" text-anchor=\"end\" fill=\"#1d4ed8\" font-weight=\"bold\">175</text>\n    <!-- Balai Warga: 90(139), 115(116.5), 110(121), 130(103), 150(85), 160(76) -->\n    <polyline points=\"90,139 170,116.5 250,121 330,103 410,85 490,76\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <rect x=\"87\" y=\"136\" width=\"6\" height=\"6\" fill=\"#fff\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <rect x=\"167\" y=\"113.5\" width=\"6\" height=\"6\" fill=\"#fff\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <rect x=\"247\" y=\"118\" width=\"6\" height=\"6\" fill=\"#fff\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <rect x=\"327\" y=\"100\" width=\"6\" height=\"6\" fill=\"#fff\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <rect x=\"407\" y=\"82\" width=\"6\" height=\"6\" fill=\"#fff\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <rect x=\"487\" y=\"73\" width=\"6\" height=\"6\" fill=\"#fff\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"150\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">90</text>\n    <text x=\"170\" y=\"110\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">115</text>\n    <text x=\"250\" y=\"133\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">110</text>\n    <text x=\"330\" y=\"115\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">130</text>\n    <text x=\"410\" y=\"97\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">150</text>\n    <text x=\"490\" y=\"88\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">160</text>\n    <!-- Sekolah Komunitas: 100(130), 105(125.5), 125(107.5), 140(94), 165(71.5), 180(58) -->\n    <polyline points=\"90,130 170,125.5 250,107.5 330,94 410,71.5 490,58\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <polygon points=\"90,126.5 93.5,130 90,133.5 86.5,130\" fill=\"#fff\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <polygon points=\"170,122 173.5,125.5 170,129 166.5,125.5\" fill=\"#fff\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <polygon points=\"250,104 253.5,107.5 250,111 246.5,107.5\" fill=\"#fff\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <polygon points=\"330,90.5 333.5,94 330,97.5 326.5,94\" fill=\"#fff\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <polygon points=\"410,68 413.5,71.5 410,75 406.5,71.5\" fill=\"#fff\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <polygon points=\"490,54.5 493.5,58 490,61.5 486.5,58\" fill=\"#fff\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"124\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\">100</text>\n    <text x=\"170\" y=\"137\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\">105</text>\n    <text x=\"250\" y=\"101\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\">125</text>\n    <text x=\"330\" y=\"104\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\">140</text>\n    <text x=\"410\" y=\"63\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\">165</text>\n    <text x=\"490\" y=\"50\" font-size=\"8.5\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\">180</text>\n  </svg>\n  <div class=\"overflow-x-auto mt-2\">\n    <table class=\"w-full text-xs text-center border-collapse border border-slate-300 bg-white\">\n      <thead class=\"bg-slate-100 text-slate-700\">\n        <tr>\n          <th class=\"border border-slate-300 px-2 py-1\">Lokasi</th>\n          <th class=\"border border-slate-300 px-2 py-1\">Juli</th>\n          <th class=\"border border-slate-300 px-2 py-1\">Agustus</th>\n          <th class=\"border border-slate-300 px-2 py-1\">September</th>\n          <th class=\"border border-slate-300 px-2 py-1\">Oktober</th>\n          <th class=\"border border-slate-300 px-2 py-1\">November</th>\n          <th class=\"border border-slate-300 px-2 py-1\">Desember</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"border border-slate-300 px-2 py-1 font-semibold text-left\">Taman Baca</td>\n          <td class=\"border border-slate-300 px-2 py-1\">120</td>\n          <td class=\"border border-slate-300 px-2 py-1\">135</td>\n          <td class=\"border border-slate-300 px-2 py-1\">150</td>\n          <td class=\"border border-slate-300 px-2 py-1\">145</td>\n          <td class=\"border border-slate-300 px-2 py-1\">155</td>\n          <td class=\"border border-slate-300 px-2 py-1\">175</td>\n        </tr>\n        <tr>\n          <td class=\"border border-slate-300 px-2 py-1 font-semibold text-left\">Balai Warga</td>\n          <td class=\"border border-slate-300 px-2 py-1\">90</td>\n          <td class=\"border border-slate-300 px-2 py-1\">115</td>\n          <td class=\"border border-slate-300 px-2 py-1\">110</td>\n          <td class=\"border border-slate-300 px-2 py-1\">130</td>\n          <td class=\"border border-slate-300 px-2 py-1\">150</td>\n          <td class=\"border border-slate-300 px-2 py-1\">160</td>\n        </tr>\n        <tr>\n          <td class=\"border border-slate-300 px-2 py-1 font-semibold text-left\">Sekolah Komunitas</td>\n          <td class=\"border border-slate-300 px-2 py-1\">100</td>\n          <td class=\"border border-slate-300 px-2 py-1\">105</td>\n          <td class=\"border border-slate-300 px-2 py-1\">125</td>\n          <td class=\"border border-slate-300 px-2 py-1\">140</td>\n          <td class=\"border border-slate-300 px-2 py-1\">165</td>\n          <td class=\"border border-slate-300 px-2 py-1\">180</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan diagram garis tersebut, pilihlah semua pernyataan yang benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Jumlah peminjam dari ketiga lokasi pada bulan November adalah 470 orang."
      },
      {
        "id": "B",
        "text": "Jumlah peminjam di Taman Baca tidak pernah mengalami penurunan."
      },
      {
        "id": "C",
        "text": "Kenaikan terbesar dalam satu bulan pada seluruh lokasi adalah 20 orang."
      },
      {
        "id": "D",
        "text": "Jumlah peminjam di Sekolah Komunitas selalu meningkat setiap bulan."
      },
      {
        "id": "E",
        "text": "Selisih peminjam terbanyak dan paling sedikit pada bulan Desember adalah 25 orang."
      }
    ],
    "kunci": [
      "A",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Analisis Diagram Garis:</strong><br>\nMari kita periksa setiap pernyataan berdasarkan data pada diagram garis:<br>\n1. <strong>Pernyataan A (Benar):</strong> Pada bulan November, jumlah peminjam dari ketiga lokasi adalah:<br>\n   \\[ 155 \\text{ (Taman Baca)} + 150 \\text{ (Balai Warga)} + 165 \\text{ (Sekolah Komunitas)} = 470 \\text{ orang.} \\]<br>\n2. <strong>Pernyataan B (Salah):</strong> Jumlah peminjam di Taman Baca mengalami penurunan dari bulan September (150 orang) ke bulan Oktober (145 orang).<br>\n3. <strong>Pernyataan C (Salah):</strong> Kenaikan terbesar dalam satu bulan adalah <strong>25 orang</strong>, yaitu pada Balai Warga dari Juli ke Agustus (\\(115 - 90 = 25\\)) dan pada Sekolah Komunitas dari Oktober ke November (\\(165 - 140 = 25\\)).<br>\n4. <strong>Pernyataan D (Benar):</strong> Jumlah peminjam di Sekolah Komunitas berturut-turut dari Juli hingga Desember adalah \\(100 \\to 105 \\to 125 \\to 140 \\to 165 \\to 180\\), sehingga selalu meningkat setiap bulan.<br>\n5. <strong>Pernyataan E (Salah):</strong> Pada bulan Desember, peminjam terbanyak adalah 180 orang (Sekolah Komunitas) dan paling sedikit adalah 160 orang (Balai Warga), sehingga selisihnya adalah \\(180 - 160 = 20\\) orang.<br>\n<strong>Kunci Jawaban: A dan D</strong>"
  },
  {
    "id": 2,
    "elemen": "Aljabar",
    "subelemen": "Program Linear (Sistem Pertidaksamaan Linear Dua Variabel)",
    "indikator": "Memodelkan permasalahan kontekstual produksi barang ke dalam sistem pertidaksamaan linear dua variabel.",
    "kode": "25MATWA-TO3-002",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah kelompok perajin akan membuat syal batik dan tas kain untuk dipasarkan dalam pameran budaya. Setiap syal memerlukan 3 jam pengerjaan dan 1,5 meter kain, sedangkan setiap tas memerlukan 2 jam pengerjaan dan 3 meter kain. Kelompok tersebut memiliki waktu pengerjaan paling banyak 120 jam dan persediaan kain paling banyak 120 meter.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUntuk memenuhi target pameran, jumlah seluruh produk yang dibuat sekurang-kurangnya 30 buah. Berdasarkan perkiraan permintaan, jumlah tas yang dibuat tidak boleh lebih dari dua kali jumlah syal.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika \\(x\\) menyatakan banyak syal dan \\(y\\) menyatakan banyak tas, sistem pertidaksamaan yang tepat untuk memodelkan seluruh ketentuan tersebut adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 3x + 2y \\le 120;\\; x + 2y \\le 80;\\; x + y \\ge 30;\\; x \\le 2y;\\; x \\ge 0,\\; y \\ge 0 \\)"
      },
      {
        "id": "B",
        "text": "\\( 3x + 2y \\le 120;\\; x + 2y \\le 80;\\; x + y \\ge 30;\\; y \\le 2x;\\; x \\ge 0,\\; y \\ge 0 \\)"
      },
      {
        "id": "C",
        "text": "\\( 3x + 2y \\le 120;\\; x + 2y \\le 80;\\; x + y \\le 30;\\; y \\le 2x;\\; x > 0,\\; y > 0 \\)"
      },
      {
        "id": "D",
        "text": "\\( 3x + 2y \\ge 120;\\; x + 2y \\le 80;\\; x + y \\ge 30;\\; y \\le 2x;\\; x \\ge 0,\\; y \\ge 0 \\)"
      },
      {
        "id": "E",
        "text": "\\( 3x + 2y \\le 120;\\; 2x + y \\le 80;\\; x + y \\ge 30;\\; y \\le 2x;\\; x \\ge 0,\\; y \\ge 0 \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Pemodelan Sistem Pertidaksamaan Linear:</strong><br>\nMisalkan \\(x =\\) banyak syal dan \\(y =\\) banyak tas.<br>\n1. <strong>Kendala waktu pengerjaan (paling banyak 120 jam):</strong><br>\n   \\[ 3x + 2y \\le 120 \\]<br>\n2. <strong>Kendala persediaan kain (paling banyak 120 meter):</strong><br>\n   \\[ 1{,}5x + 3y \\le 120 \\quad \\xrightarrow{\\text{dibagi } 1{,}5} \\quad x + 2y \\le 80 \\]<br>\n3. <strong>Target jumlah seluruh produk (sekurang-kurangnya 30 buah):</strong><br>\n   \\[ x + y \\ge 30 \\]<br>\n4. <strong>Batas permintaan tas (tidak boleh lebih dari dua kali jumlah syal):</strong><br>\n   \\[ y \\le 2x \\]<br>\n5. <strong>Syarat non-negatif:</strong> \\( x \\ge 0, \\; y \\ge 0 \\).<br><br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 3,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Bangun Datar & Kecukupan Data",
    "indikator": "Menganalisis kecukupan informasi untuk menentukan keliling persegi panjang jika diketahui panjang diagonalnya.",
    "kode": "25MATWA-TO3-003",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah area pameran sekolah berbentuk persegi panjang. Pada bagian tepi area tersebut akan dipasang lampu hias tanpa celah. Panjang diagonal area pameran adalah 26 meter.\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 380 185\" class=\"w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg\">\n    <rect x=\"45\" y=\"25\" width=\"260\" height=\"110\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Lampu hias keliling -->\n    <rect x=\"41\" y=\"21\" width=\"268\" height=\"118\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"1.5\" stroke-dasharray=\"6,6\"/>\n    <!-- Stand sudut -->\n    <rect x=\"60\" y=\"38\" width=\"75\" height=\"32\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#94a3b8\"/>\n    <text x=\"97.5\" y=\"52\" font-size=\"8\" text-anchor=\"middle\" fill=\"#475569\" font-weight=\"bold\">STAN KARYA</text>\n    <text x=\"97.5\" y=\"62\" font-size=\"7.5\" text-anchor=\"middle\" fill=\"#64748b\">Siswa</text>\n    <rect x=\"60\" y=\"90\" width=\"75\" height=\"32\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#94a3b8\"/>\n    <text x=\"97.5\" y=\"104\" font-size=\"8\" text-anchor=\"middle\" fill=\"#475569\" font-weight=\"bold\">STAN BUDAYA</text>\n    <text x=\"97.5\" y=\"114\" font-size=\"7.5\" text-anchor=\"middle\" fill=\"#64748b\">Daerah</text>\n    <rect x=\"215\" y=\"38\" width=\"75\" height=\"32\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#94a3b8\"/>\n    <text x=\"252.5\" y=\"52\" font-size=\"8\" text-anchor=\"middle\" fill=\"#475569\" font-weight=\"bold\">STAN SAINS</text>\n    <text x=\"252.5\" y=\"62\" font-size=\"7.5\" text-anchor=\"middle\" fill=\"#64748b\">dan Teknologi</text>\n    <rect x=\"215\" y=\"90\" width=\"75\" height=\"32\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#94a3b8\"/>\n    <text x=\"252.5\" y=\"104\" font-size=\"8\" text-anchor=\"middle\" fill=\"#475569\" font-weight=\"bold\">STAN KREATIF</text>\n    <text x=\"252.5\" y=\"114\" font-size=\"7.5\" text-anchor=\"middle\" fill=\"#64748b\">Sekolah</text>\n    <!-- Diagonal -->\n    <line x1=\"45\" y1=\"135\" x2=\"305\" y2=\"25\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/>\n    <rect x=\"142\" y=\"68\" width=\"66\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#dc2626\" stroke-width=\"1.2\"/>\n    <text x=\"175\" y=\"81\" font-size=\"10\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">26 meter</text>\n    <!-- Label p dan l -->\n    <text x=\"175\" y=\"156\" font-size=\"10.5\" text-anchor=\"middle\" fill=\"#1e293b\" font-weight=\"bold\">panjang, p</text>\n    <text x=\"330\" y=\"82\" font-size=\"10.5\" text-anchor=\"middle\" fill=\"#1e293b\" font-weight=\"bold\" transform=\"rotate(90 330 82)\">lebar (l)</text>\n    <text x=\"175\" y=\"174\" font-size=\"9\" text-anchor=\"middle\" fill=\"#854d0e\">Lampu hias mengikuti seluruh keliling area pameran</text>\n  </svg>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nBerapakah panjang minimum rangkaian lampu yang diperlukan untuk mengelilingi area tersebut?\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nTentukan apakah informasi berikut cukup untuk menjawab pertanyaan tersebut.\n</p>\n<ol class=\"list-decimal list-inside space-y-1 mb-3 text-slate-800 font-medium\">\n  <li>Luas area pameran adalah \\(240\\text{ m}^2\\).</li>\n  <li>Selisih antara panjang dan lebar area pameran adalah \\(14\\text{ meter}\\).</li>\n</ol>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPilih jawaban yang benar!\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Kedua pernyataan secara bersama-sama cukup untuk menjawab pertanyaan, tetapi setiap pernyataan saja tidak cukup."
      },
      {
        "id": "B",
        "text": "Pernyataan (1) saja cukup dan pernyataan (2) saja juga cukup untuk menjawab pertanyaan."
      },
      {
        "id": "C",
        "text": "Pernyataan (1) saja cukup untuk menjawab pertanyaan, tetapi pernyataan (2) saja tidak cukup."
      },
      {
        "id": "D",
        "text": "Pernyataan (2) saja cukup untuk menjawab pertanyaan, tetapi pernyataan (1) saja tidak cukup."
      },
      {
        "id": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Analisis Kecukupan Data:</strong><br>\nDiketahui panjang diagonal persegi panjang \\( d = 26\\text{ m} \\), sehingga menurut Teorema Pythagoras:<br>\n\\[ p^2 + l^2 = 26^2 = 676 \\]<br>\nDitanyakan panjang minimum rangkaian lampu (keliling area), yaitu \\( K = 2(p + l) \\).<br><br>\n1. <strong>Analisis Pernyataan (1) saja:</strong><br>\n   Diketahui luas \\( p \\times l = 240 \\). Gunakan identitas kuadrat jumlah:<br>\n   \\[ (p + l)^2 = p^2 + l^2 + 2pl = 676 + 2(240) = 676 + 480 = 1.156 \\]<br>\n   Karena \\( p, l > 0 \\), maka \\( p + l = \\sqrt{1.156} = 34\\text{ m} \\), sehingga \\( K = 2(34) = 68\\text{ m} \\).<br>\n   <em>Pernyataan (1) saja CUKUP.</em><br><br>\n2. <strong>Analisis Pernyataan (2) saja:</strong><br>\n   Diketahui selisih \\( p - l = 14 \\). Gunakan identitas kuadrat selisih:<br>\n   \\[ (p - l)^2 = p^2 + l^2 - 2pl \\implies 14^2 = 676 - 2pl \\implies 2pl = 676 - 196 = 480 \\]<br>\n   Maka \\( (p + l)^2 = (p^2 + l^2) + 2pl = 676 + 480 = 1.156 \\implies p + l = 34\\text{ m} \\implies K = 68\\text{ m} \\).<br>\n   <em>Pernyataan (2) saja juga CUKUP.</em><br><br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 4,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Bangun Ruang Sisi Lengkung (Kerucut)",
    "indikator": "Menghitung biaya minimum pembelian bahan kain untuk membuat sejumlah kap lampu berbentuk selimut kerucut.",
    "kode": "25MATWA-TO3-004",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKelompok perajin Desa Sukamaju membuat kap lampu berbentuk kerucut tanpa alas untuk menghias sebuah pendopo. Setiap kap lampu memiliki diameter alas \\(24\\text{ cm}\\) dan panjang garis pelukis \\(25\\text{ cm}\\).\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeluruh permukaan luar kap lampu akan dilapisi kain bermotif tradisional. Untuk sambungan dan lipatan pada setiap kap lampu, diperlukan tambahan kain sebesar \\(8\\%\\) dari luas selimut kerucut.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nKain dijual dalam bentuk lembaran dengan ketentuan berikut:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>luas setiap lembar \\(2.400\\text{ cm}^2\\);</li>\n  <li>harga setiap lembar Rp28.000,00; dan</li>\n  <li>sisa kain dari suatu lembar dapat digunakan untuk membuat kap lampu lainnya.</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika kelompok tersebut akan membuat 10 kap lampu dan menggunakan \\(\\pi = 3{,}14\\), biaya minimum pembelian kain adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Rp140.000,00"
      },
      {
        "id": "B",
        "text": "Rp280.000,00"
      },
      {
        "id": "C",
        "text": "Rp168.000,00"
      },
      {
        "id": "D",
        "text": "Rp112.000,00"
      },
      {
        "id": "E",
        "text": "Rp196.000,00"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Luas Selimut Kerucut &amp; Optimasi Biaya:</strong><br>\n1. <strong>Luas selimut satu kap lampu (kerucut tanpa alas):</strong><br>\n   Diketahui diameter \\( d = 24\\text{ cm} \\implies r = 12\\text{ cm} \\) dan garis pelukis \\( s = 25\\text{ cm} \\).<br>\n   \\[ L_{\\text{selimut}} = \\pi r s = 3{,}14 \\times 12 \\times 25 = 3{,}14 \\times 300 = 942\\text{ cm}^2 \\]<br>\n2. <strong>Kebutuhan kain untuk 1 kap lampu (ditambah 8% lipatan):</strong><br>\n   \\[ L_{1\\text{ kap}} = 942 \\times (1 + 0{,}08) = 942 \\times 1{,}08 = 1.017{,}36\\text{ cm}^2 \\]<br>\n3. <strong>Total kebutuhan kain untuk 10 kap lampu:</strong><br>\n   \\[ L_{\\text{total}} = 10 \\times 1.017{,}36 = 10.173{,}6\\text{ cm}^2 \\]<br>\n4. <strong>Banyak lembar kain yang harus dibeli:</strong><br>\n   \\[ n = \\frac{10.173{,}6}{2.400} = 4{,}239 \\text{ lembar} \\implies \\text{dibulatkan ke atas menjadi } 5 \\text{ lembar} \\]<br>\n5. <strong>Biaya minimum pembelian kain:</strong><br>\n   \\[ \\text{Biaya} = 5 \\times \\text{Rp28.000,00} = \\text{Rp140.000,00} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 5,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Teorema Pythagoras dalam Konteks Nyata",
    "indikator": "Menganalisis panjang lintasan miring dan kapasitas pemasangan objek berjarak tetap pada tali.",
    "kode": "25MATWA-TO3-005",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPanitia Festival Budaya memasang rangkaian umbul-umbul pada seutas tali yang menghubungkan puncak dua tiang. Tinggi tiang pertama \\(5{,}2\\text{ meter}\\) dan tinggi tiang kedua \\(2{,}8\\text{ meter}\\). Kedua tiang berdiri tegak pada permukaan tanah yang datar dengan jarak horizontal \\(7\\text{ meter}\\).\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTali dipasang lurus dari puncak tiang pertama menuju puncak tiang kedua. Pada setiap ujung tali, sepanjang \\(20\\text{ cm}\\) digunakan untuk ikatan sehingga bagian tersebut tidak dapat dipasangi umbul-umbul.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nPanitia menyediakan tiga jenis umbul-umbul.\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full max-w-xs mx-auto text-sm text-center border-collapse border border-slate-300 bg-white\">\n    <thead class=\"bg-slate-100 text-slate-800\">\n      <tr>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Jenis</th>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Lebar pada Arah Tali</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 font-semibold\">P</td>\n        <td class=\"border border-slate-300 px-3 py-1\">30 cm</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 font-semibold\">Q</td>\n        <td class=\"border border-slate-300 px-3 py-1\">40 cm</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 font-semibold\">R</td>\n        <td class=\"border border-slate-300 px-3 py-1\">50 cm</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nUmbul-umbul dipasang dalam satu baris. Jarak antara dua umbul-umbul yang berdekatan adalah \\(5\\text{ cm}\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan &ldquo;Benar&rdquo; atau &ldquo;Salah&rdquo; untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "text": "Panjang tali yang dapat dipasangi umbul-umbul adalah 7 meter."
      },
      {
        "id": 2,
        "text": "Maksimal 15 umbul-umbul jenis Q dapat dipasang pada tali."
      },
      {
        "id": 3,
        "text": "Sebanyak 10 umbul-umbul jenis P dan 8 umbul-umbul jenis Q dapat dipasang secara bersamaan."
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Pembahasan Teorema Pythagoras &amp; Barisan Objek:</strong><br>\n1. <strong>Panjang tali yang dapat dipasangi umbul-umbul (Pernyataan 1 Benar):</strong><br>\n   Selisih tinggi kedua tiang: \\( \\Delta h = 5{,}2 - 2{,}8 = 2{,}4\\text{ m} \\), jarak horizontal \\( x = 7\\text{ m} \\).<br>\n   Panjang total tali:<br>\n   \\[ L = \\sqrt{7^2 + 2{,}4^2} = \\sqrt{49 + 5{,}76} = \\sqrt{54{,}76} = 7{,}4\\text{ m} = 740\\text{ cm} \\]<br>\n   Dikurangi ikatan \\(20\\text{ cm}\\) pada setiap ujung tali (2 ujung):<br>\n   \\[ L_{\\text{efektif}} = 740 - 2(20) = 700\\text{ cm} = 7\\text{ meter.} \\]<br>\n2. <strong>Jumlah maksimal umbul-umbul jenis Q (Pernyataan 2 Benar):</strong><br>\n   Untuk \\(n\\) umbul-umbul jenis Q (lebar \\(40\\text{ cm}\\)) terdapat \\((n - 1)\\) celah berjarak \\(5\\text{ cm}\\):<br>\n   \\[ 40n + 5(n - 1) \\le 700 \\implies 45n - 5 \\le 700 \\implies 45n \\le 705 \\implies n \\le 15{,}67 \\]<br>\n   Jadi maksimal dapat dipasang <strong>15 umbul-umbul</strong> jenis Q (membutuhkan \\(15 \\times 40 + 14 \\times 5 = 670\\text{ cm} \\le 700\\text{ cm}\\)).<br>\n3. <strong>Pemasangan 10 jenis P dan 8 jenis Q sekaligus (Pernyataan 3 Salah):</strong><br>\n   Total umbul-umbul \\( = 10 + 8 = 18 \\) buah (terdapat \\(18 - 1 = 17\\) celah berjarak \\(5\\text{ cm}\\)).<br>\n   Panjang yang dibutuhkan:<br>\n   \\[ (10 \\times 30) + (8 \\times 40) + (17 \\times 5) = 300 + 320 + 85 = 705\\text{ cm} > 700\\text{ cm (tidak cukup).} \\]<br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>"
  },
  {
    "id": 6,
    "elemen": "Data dan Peluang",
    "subelemen": "Peluang & Himpunan",
    "indikator": "Menentukan peluang kejadian terpilihnya anggota yang hanya termasuk dalam tepat satu dari dua himpunan.",
    "kode": "25MATWA-TO3-006",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPanitia Festival Budaya Nusantara menyediakan sebuah kotak berisi 100 kupon akses kegiatan. Setiap kupon memiliki kemungkinan memberikan akses ke Lokakarya Batik, Pertunjukan Wayang, keduanya, atau tidak memberikan akses ke kedua kegiatan tersebut.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nBerdasarkan data panitia diketahui bahwa:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>60 kupon memberikan akses ke Lokakarya Batik;</li>\n  <li>45 kupon memberikan akses ke Pertunjukan Wayang; dan</li>\n  <li>20 kupon memberikan akses ke kedua kegiatan tersebut.</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nRaka mengambil satu kupon secara acak dari dalam kotak. Peluang Raka mendapatkan kupon yang memberikan akses ke tepat satu kegiatan adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\frac{9}{20} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\frac{17}{20} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\frac{1}{5} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\frac{13}{20} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\frac{2}{5} \\)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Peluang Kejadian dengan Diagram Venn:</strong><br>\n1. <strong>Banyak kupon hanya Lokakarya Batik:</strong><br>\n   \\[ n(B_{\\text{saja}}) = 60 - 20 = 40 \\text{ kupon} \\]<br>\n2. <strong>Banyak kupon hanya Pertunjukan Wayang:</strong><br>\n   \\[ n(W_{\\text{saja}}) = 45 - 20 = 25 \\text{ kupon} \\]<br>\n3. <strong>Banyak kupon yang memberikan akses ke tepat satu kegiatan:</strong><br>\n   \\[ n(E) = 40 + 25 = 65 \\text{ kupon} \\]<br>\n4. <strong>Peluang terambilnya kupon tepat satu kegiatan:</strong><br>\n   \\[ P(E) = \\frac{65}{100} = \\frac{13}{20} \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 7,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Bangun Ruang Sisi Datar (Optimasi Pengemasan Balok)",
    "indikator": "Menentukan jumlah maksimum paket berbentuk balok yang dapat disusun di dalam ruang penyimpanan dengan aturan orientasi lapisan.",
    "kode": "25MATWA-TO3-007",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah komunitas sekolah memiliki lemari pendingin berbentuk balok untuk menyimpan paket makanan. Ukuran bagian dalam lemari adalah:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>panjang \\(180\\text{ cm}\\);</li>\n  <li>lebar \\(160\\text{ cm}\\); dan</li>\n  <li>tinggi \\(150\\text{ cm}\\).</li>\n</ul>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada bagian atas lemari harus disisakan ruang setinggi \\(5\\text{ cm}\\) untuk sirkulasi udara. Dengan demikian, tinggi efektif yang dapat digunakan untuk menyusun paket adalah \\(145\\text{ cm}\\).\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSetiap paket makanan berbentuk balok berukuran \\(50 \\times 40 \\times 30\\text{ cm}\\). Paket boleh diletakkan menggunakan salah satu dari ketiga sisinya sebagai alas. Agar susunan stabil, paket dalam satu lapisan harus memiliki orientasi yang sama, tetapi orientasi antar lapisan boleh berbeda.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJumlah maksimum paket makanan yang dapat disimpan di dalam lemari adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "66 paket"
      },
      {
        "id": "B",
        "text": "72 paket"
      },
      {
        "id": "C",
        "text": "60 paket"
      },
      {
        "id": "D",
        "text": "54 paket"
      },
      {
        "id": "E",
        "text": "62 paket"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Optimasi Penyusunan Lapisan Balok:</strong><br>\nUkuran bidang alas lemari adalah \\(180\\text{ cm} \\times 160\\text{ cm}\\) dan tinggi efektif \\(H = 145\\text{ cm}\\).<br>\nMari kita analisis daya tampung maksimum per lapisan untuk masing-masing pilihan tinggi lapisan:<br>\n1. <strong>Lapisan dengan tinggi \\(t = 50\\text{ cm}\\) (alas paket \\(30 \\times 40\\text{ cm}\\)):</strong><br>\n   Susun sisi \\(30\\text{ cm}\\) sepanjang \\(180\\text{ cm}\\) dan sisi \\(40\\text{ cm}\\) sepanjang \\(160\\text{ cm}\\):<br>\n   \\[ \\left\\lfloor \\frac{180}{30} \\right\\rfloor \\times \\left\\lfloor \\frac{160}{40} \\right\\rfloor = 6 \\times 4 = 24 \\text{ paket/lapisan.} \\]<br>\n2. <strong>Lapisan dengan tinggi \\(t = 40\\text{ cm}\\) (alas paket \\(30 \\times 50\\text{ cm}\\)):</strong><br>\n   Susun sisi \\(30\\text{ cm}\\) sepanjang \\(180\\text{ cm}\\) dan sisi \\(50\\text{ cm}\\) sepanjang \\(160\\text{ cm}\\):<br>\n   \\[ \\left\\lfloor \\frac{180}{30} \\right\\rfloor \\times \\left\\lfloor \\frac{160}{50} \\right\\rfloor = 6 \\times 3 = 18 \\text{ paket/lapisan.} \\]<br>\n3. <strong>Lapisan dengan tinggi \\(t = 30\\text{ cm}\\) (alas paket \\(40 \\times 50\\text{ cm}\\)):</strong><br>\n   \\[ \\left\\lfloor \\frac{180}{40} \\right\\rfloor \\times \\left\\lfloor \\frac{160}{50} \\right\\rfloor = 4 \\times 3 = 12 \\text{ paket/lapisan.} \\]<br><br>\nAgar jumlah paket maksimum dengan batas tinggi total \\(\\le 145\\text{ cm}\\), gunakan <strong>2 lapisan setinggi \\(50\\text{ cm}\\)</strong> dan <strong>1 lapisan setinggi \\(40\\text{ cm}\\)</strong> (total tinggi \\(= 50 + 50 + 40 = 140\\text{ cm} \\le 145\\text{ cm}\\)):<br>\n\\[ \\text{Total maksimum} = (2 \\times 24) + (1 \\times 18) = 48 + 18 = 66 \\text{ paket.} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 8,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Keliling Bangun Datar Gabungan",
    "indikator": "Menghitung keliling bagian terluar bangun datar gabungan persegi panjang, setengah lingkaran, dan segitiga sama kaki.",
    "kode": "25MATWA-TO3-008",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nMira membuat bingkai papan nama untuk empat pintu kamar di rumahnya. Setiap papan nama merupakan gabungan sebuah persegi panjang, setengah lingkaran, dan segitiga sama kaki dengan susunan dan ukuran seperti pada gambar berikut.\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 360 250\" class=\"w-full max-w-sm mx-auto bg-white border border-slate-300 rounded-lg\">\n    <!-- Bentuk gabungan: A(80,95) ke B(248,95) jari-jari 84 -> skala 4px = 1cm: 42cm = 168px (r=84px), 24cm = 96px, 30cm = 120px, 20cm = 80px -->\n    <!-- Pakai skala 2.6px = 1cm: 42cm = 109.2px (r=54.6), 24cm = 62.4px, 30cm = 78px, 20cm = 52px -->\n    <!-- Pusat busur di (170, 80), r = 63 (skala 3px = 1cm: 42cm = 126px, 24cm = 72px, 30cm = 90px, 20cm = 60px, 6cm = 18px) -->\n    <path d=\"M 107 85 A 63 63 0 0 1 233 85 L 233 157 L 215 157 L 170 217 L 125 157 L 107 157 Z\" fill=\"#ecfdf5\" stroke=\"#047857\" stroke-width=\"2.5\"/>\n    <!-- Garis bantu putus-putus -->\n    <line x1=\"107\" y1=\"85\" x2=\"233\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"125\" y1=\"157\" x2=\"215\" y2=\"157\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"170\" y1=\"157\" x2=\"170\" y2=\"217\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <!-- Label titik -->\n    <text x=\"96\" y=\"88\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#334155\">A</text>\n    <text x=\"238\" y=\"88\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#334155\">B</text>\n    <text x=\"96\" y=\"161\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#334155\">D</text>\n    <text x=\"122\" y=\"170\" font-size=\"9\" font-weight=\"bold\" fill=\"#334155\">E</text>\n    <text x=\"212\" y=\"170\" font-size=\"9\" font-weight=\"bold\" fill=\"#334155\">F</text>\n    <text x=\"238\" y=\"161\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#334155\">C</text>\n    <text x=\"170\" y=\"230\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#334155\">G</text>\n    <!-- Ukuran -->\n    <text x=\"170\" y=\"79\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">42 cm</text>\n    <text x=\"170\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#065f46\">PAPAN NAMA</text>\n    <text x=\"265\" y=\"125\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">24 cm</text>\n    <line x1=\"246\" y1=\"85\" x2=\"246\" y2=\"157\" stroke=\"#475569\" stroke-width=\"1\"/>\n    <text x=\"170\" y=\"153\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">30 cm</text>\n    <text x=\"190\" y=\"188\" font-size=\"10\" font-weight=\"bold\" fill=\"#0f172a\">20 cm</text>\n    <rect x=\"18\" y=\"195\" width=\"82\" height=\"34\" rx=\"4\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\"/>\n    <text x=\"59\" y=\"210\" font-size=\"8\" text-anchor=\"middle\" fill=\"#475569\">Dibuat sebanyak</text>\n    <text x=\"59\" y=\"222\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">4 papan</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nMira akan memasang pita hias tepat di sepanjang bagian terluar setiap papan nama. Jika digunakan \\(\\pi = \\frac{22}{7}\\), panjang minimum pita yang diperlukan untuk empat papan nama adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "704 cm"
      },
      {
        "id": "B",
        "text": "992 cm"
      },
      {
        "id": "C",
        "text": "656 cm"
      },
      {
        "id": "D",
        "text": "872 cm"
      },
      {
        "id": "E",
        "text": "824 cm"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Keliling Bangun Datar Gabungan:</strong><br>\nMari kita hitung panjang bagian terluar untuk <strong>1 papan nama</strong>:<br>\n1. <strong>Busur setengah lingkaran atas (diameter \\(AB = 42\\text{ cm}\\)):</strong><br>\n   \\[ L_{\\text{busur}} = \\frac{1}{2} \\pi d = \\frac{1}{2} \\times \\frac{22}{7} \\times 42 = 66\\text{ cm} \\]<br>\n2. <strong>Dua sisi tegak persegi panjang (\\(AD\\) dan \\(BC\\)):</strong><br>\n   \\[ AD + BC = 24 + 24 = 48\\text{ cm} \\]<br>\n3. <strong>Bagian mendatar bawah di luar alas segitiga (\\(DE + FC\\)):</strong><br>\n   \\[ DE + FC = 42 - 30 = 12\\text{ cm} \\]<br>\n4. <strong>Dua sisi miring segitiga sama kaki (\\(EG\\) dan \\(FG\\)):</strong><br>\n   Setengah alas segitiga \\(= \\frac{30}{2} = 15\\text{ cm}\\) dan tinggi \\(= 20\\text{ cm}\\).<br>\n   \\[ EG = FG = \\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25\\text{ cm} \\implies EG + FG = 50\\text{ cm} \\]<br><br>\n<strong>Keliling 1 papan nama:</strong><br>\n\\[ K_1 = 66 + 48 + 12 + 50 = 176\\text{ cm} \\]<br>\n<strong>Panjang pita untuk 4 papan nama:</strong><br>\n\\[ K_{\\text{total}} = 4 \\times 176 = 704\\text{ cm} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 9,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Hubungan Antarsudut pada Dua Garis Sejajar",
    "indikator": "Menganalisis besar dan hubungan sudut-sudut yang terbentuk oleh dua garis sejajar yang dipotong garis transversal.",
    "kode": "25MATWA-TO3-009",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDua garis sejajar \\(g\\) dan \\(h\\) dipotong oleh garis transversal \\(t\\). Pada titik potong garis \\(t\\) dengan garis \\(g\\) dan \\(h\\), terbentuk sudut \\(A, B, C, D, E, F, G,\\) dan \\(H\\) seperti pada gambar berikut.\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 360 185\" class=\"w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg\">\n    <!-- Garis sejajar g dan h -->\n    <line x1=\"40\" y1=\"55\" x2=\"320\" y2=\"55\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <polygon points=\"320,55 310,50 310,60\" fill=\"#1e293b\"/>\n    <text x=\"305\" y=\"45\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">g</text>\n    <line x1=\"40\" y1=\"135\" x2=\"320\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <polygon points=\"320,135 310,130 310,140\" fill=\"#1e293b\"/>\n    <text x=\"305\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">h</text>\n    <!-- Garis transversal t: lewat (140, 55) dan (190, 135) -->\n    <line x1=\"115\" y1=\"15\" x2=\"215\" y2=\"175\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <text x=\"222\" y=\"172\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">t</text>\n    <!-- Label sudut di titik (140, 55) -->\n    <text x=\"118\" y=\"48\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">A</text>\n    <text x=\"152\" y=\"45\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">B</text>\n    <text x=\"156\" y=\"70\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">C</text>\n    <text x=\"122\" y=\"73\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">D</text>\n    <!-- Label sudut di titik (190, 135) -->\n    <text x=\"168\" y=\"128\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">E</text>\n    <text x=\"202\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">F</text>\n    <text x=\"206\" y=\"150\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">G</text>\n    <text x=\"172\" y=\"153\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">H</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nDiketahui besar \\(\\angle B = 118^\\circ\\). Pernyataan yang benar berdasarkan hubungan antarsudut tersebut adalah ... (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\angle C + \\angle F = 180^\\circ \\)"
      },
      {
        "id": "B",
        "text": "\\( \\angle A = 62^\\circ \\)"
      },
      {
        "id": "C",
        "text": "\\( \\angle E + \\angle G = 180^\\circ \\)"
      },
      {
        "id": "D",
        "text": "\\( \\angle C = 118^\\circ \\)"
      },
      {
        "id": "E",
        "text": "\\( \\angle D = \\angle H \\)"
      }
    ],
    "kunci": [
      "A",
      "B",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Hubungan Sudut pada Garis Sejajar:</strong><br>\nDiketahui \\(\\angle B = 118^\\circ\\). Berdasarkan sifat sudut berpelurus, bertolak belakang, dan sehadap:<br>\n- Kelompok sudut tumpul: \\( \\angle B = \\angle D = \\angle F = \\angle H = 118^\\circ \\)<br>\n- Kelompok sudut lancip: \\( \\angle A = \\angle C = \\angle E = \\angle G = 180^\\circ - 118^\\circ = 62^\\circ \\)<br><br>\nMari kita uji setiap pilihan:<br>\n1. <strong>Opsi A (Benar):</strong> \\( \\angle C + \\angle F = 62^\\circ + 118^\\circ = 180^\\circ \\) (sudut dalam sepihak berjumlah \\(180^\\circ\\)).<br>\n2. <strong>Opsi B (Benar):</strong> \\( \\angle A = 180^\\circ - \\angle B = 180^\\circ - 118^\\circ = 62^\\circ \\).<br>\n3. <strong>Opsi C (Salah):</strong> \\( \\angle E + \\angle G = 62^\\circ + 62^\\circ = 124^\\circ \\ne 180^\\circ \\) (sudut bertolak belakang).<br>\n4. <strong>Opsi D (Salah):</strong> \\( \\angle C = 62^\\circ \\ne 118^\\circ \\).<br>\n5. <strong>Opsi E (Benar):</strong> \\( \\angle D = \\angle H = 118^\\circ \\) (pasangan sudut sehadap).<br>\n<strong>Kunci Jawaban: A, B, dan E</strong>"
  },
  {
    "id": 10,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Perbandingan Trigonometri Segitiga Siku-Siku",
    "indikator": "Menganalisis nilai perbandingan trigonometri sudut-sudut pada rangka atap segitiga menggunakan garis tinggi dan Teorema Pythagoras.",
    "kode": "25MATWA-TO3-010",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah rangka atap memiliki penampang berbentuk segitiga \\(PQR\\). Sebuah tiang penyangga \\(PS\\) dipasang tegak lurus terhadap bagian dasar \\(QR\\), dengan titik \\(S\\) terletak di antara \\(Q\\) dan \\(R\\).\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nDiketahui:\n</p>\n<div class=\"my-2 text-center font-semibold text-slate-800\">\n  \\( PQ = 13\\text{ m}, \\quad PR = 15\\text{ m}, \\quad QR = 14\\text{ m} \\)\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nSudut-sudut pada rangka tersebut didefinisikan sebagai berikut:\n</p>\n<div class=\"my-2 text-center font-semibold text-slate-800\">\n  \\( \\alpha = \\angle QPS, \\quad \\beta = \\angle PQS, \\quad \\gamma = \\angle SPR, \\quad \\delta = \\angle PRS \\)\n</div>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 360 190\" class=\"w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg\">\n    <!-- Segitiga PQR: Q(60,150), S(140,150), R(284,150), P(140,22) (skala 1m = 16px: QS=5->80, SR=9->144, PS=12->128) -->\n    <polygon points=\"60,150 284,150 140,22\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n    <line x1=\"140\" y1=\"22\" x2=\"140\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n    <rect x=\"140\" y=\"138\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <!-- Label titik -->\n    <text x=\"140\" y=\"15\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">P</text>\n    <text x=\"48\" y=\"155\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">Q</text>\n    <text x=\"140\" y=\"165\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">S</text>\n    <text x=\"292\" y=\"155\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">R</text>\n    <!-- Label sudut -->\n    <text x=\"128\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">&alpha;</text>\n    <text x=\"148\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">&gamma;</text>\n    <text x=\"78\" y=\"142\" font-size=\"11\" font-weight=\"bold\" fill=\"#d97706\">&beta;</text>\n    <text x=\"255\" y=\"142\" font-size=\"11\" font-weight=\"bold\" fill=\"#7c3aed\">&delta;</text>\n    <!-- Ukuran sisi -->\n    <text x=\"86\" y=\"82\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#334155\" transform=\"rotate(-58 86 82)\">13 m</text>\n    <text x=\"218\" y=\"82\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#334155\" transform=\"rotate(42 218 82)\">15 m</text>\n    <text x=\"172\" y=\"180\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#334155\">14 m</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPilihlah semua pernyataan yang benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\tan \\delta = \\frac{4}{3} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\tan \\beta = \\frac{5}{12} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\sin \\alpha = \\frac{5}{13} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\cos \\gamma = \\frac{4}{5} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\sin \\delta = \\frac{3}{5} \\)"
      }
    ],
    "kunci": [
      "A",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Trigonometri Segitiga Siku-Siku:</strong><br>\nMisalkan \\( QS = x \\), maka \\( SR = 14 - x \\). Pada \\(\\triangle PQS\\) dan \\(\\triangle PSR\\) yang siku-siku di \\(S\\):<br>\n\\[ PS^2 = 13^2 - x^2 = 15^2 - (14 - x)^2 \\]<br>\n\\[ 169 - x^2 = 225 - (196 - 28x + x^2) \\implies 169 = 29 + 28x \\implies 28x = 140 \\implies x = 5\\text{ m.} \\]<br>\nDengan demikian:<br>\n- \\( QS = 5\\text{ m} \\)<br>\n- \\( SR = 14 - 5 = 9\\text{ m} \\)<br>\n- Tinggi tiang penyangga \\( PS = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12\\text{ m} \\).<br><br>\nEvaluasi kelima pernyataan:<br>\n1. <strong>Opsi A (Benar):</strong> \\( \\tan \\delta = \\frac{PS}{SR} = \\frac{12}{9} = \\frac{4}{3} \\).<br>\n2. <strong>Opsi B (Salah):</strong> \\( \\tan \\beta = \\frac{PS}{QS} = \\frac{12}{5} \\ne \\frac{5}{12} \\).<br>\n3. <strong>Opsi C (Benar):</strong> \\( \\sin \\alpha = \\frac{QS}{PQ} = \\frac{5}{13} \\).<br>\n4. <strong>Opsi D (Benar):</strong> \\( \\cos \\gamma = \\frac{PS}{PR} = \\frac{12}{15} = \\frac{4}{5} \\).<br>\n5. <strong>Opsi E (Salah):</strong> \\( \\sin \\delta = \\frac{PS}{PR} = \\frac{12}{15} = \\frac{4}{5} \\ne \\frac{3}{5} \\).<br>\n<strong>Kunci Jawaban: A, C, dan D</strong>"
  },
  {
    "id": 11,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Kesebangunan Bangun Datar",
    "indikator": "Menentukan panjang sisi miring trapesium siku-siku yang sebangun menggunakan Teorema Pythagoras dan perbandingan senilai.",
    "kode": "25MATWA-TO3-011",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah jendela kaca patri pada gedung kesenian berbentuk trapesium siku-siku \\(ABCD\\). Sisi \\(AB\\) dan \\(DC\\) sejajar, sedangkan sisi \\(BC\\) tegak lurus terhadap kedua sisi tersebut. Diketahui:\n</p>\n<div class=\"my-2 text-center font-semibold text-slate-800\">\n  \\( AB = 54\\text{ cm}, \\quad DC = 30\\text{ cm}, \\quad BC = 32\\text{ cm} \\)\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nDi bagian tengah jendela dipasang ornamen berbentuk trapesium siku-siku \\(EFGH\\) yang sebangun dengan trapesium \\(ABCD\\).\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 340 175\" class=\"w-full max-w-sm mx-auto bg-white border border-slate-300 rounded-lg\">\n    <polygon points=\"50,145 266,145 266,25 146,25\" fill=\"#f1f5f9\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"256\" y=\"25\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#334155\" stroke-width=\"1.2\"/>\n    <rect x=\"256\" y=\"135\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#334155\" stroke-width=\"1.2\"/>\n    <polygon points=\"106,120 236,120 236,48 164,48\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n    <rect x=\"228\" y=\"48\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"1.2\"/>\n    <rect x=\"228\" y=\"112\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"1.2\"/>\n    <circle cx=\"185\" cy=\"84\" r=\"14\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n    <polygon points=\"185,70 193,84 185,98 177,84\" fill=\"#38bdf8\" opacity=\"0.7\"/>\n    <text x=\"38\" y=\"152\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n    <text x=\"272\" y=\"152\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n    <text x=\"272\" y=\"24\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n    <text x=\"135\" y=\"22\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e293b\">D</text>\n    <text x=\"94\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">E</text>\n    <text x=\"240\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">F</text>\n    <text x=\"240\" y=\"46\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">G</text>\n    <text x=\"152\" y=\"45\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">H</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika panjang sisi atas ornamen \\(HG = 18\\text{ cm}\\), panjang sisi miring \\(EH\\) adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "18 cm"
      },
      {
        "id": "B",
        "text": "30 cm"
      },
      {
        "id": "C",
        "text": "24 cm"
      },
      {
        "id": "D",
        "text": "20 cm"
      },
      {
        "id": "E",
        "text": "40 cm"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Kesebangunan Trapesium Siku-Siku:</strong><br>\n1. <strong>Hitung panjang sisi miring \\(AD\\) pada trapesium \\(ABCD\\):</strong><br>\n   Selisih panjang sisi sejajar: \\( AB - DC = 54 - 30 = 24\\text{ cm} \\), dan tinggi \\( BC = 32\\text{ cm} \\).<br>\n   \\[ AD = \\sqrt{BC^2 + (AB - DC)^2} = \\sqrt{32^2 + 24^2} = \\sqrt{1.024 + 576} = \\sqrt{1.600} = 40\\text{ cm} \\]<br>\n2. <strong>Gunakan perbandingan kesebangunan trapesium \\(EFGH \\sim ABCD\\):</strong><br>\n   \\[ \\frac{EH}{AD} = \\frac{HG}{DC} \\implies \\frac{EH}{40} = \\frac{18}{30} \\]<br>\n   \\[ EH = 40 \\times \\frac{3}{5} = 24\\text{ cm} \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 12,
    "elemen": "Data dan Peluang",
    "subelemen": "Statistika (Ukuran Pemusatan dan Penyebaran Data)",
    "indikator": "Menganalisis nilai data yang belum diketahui berdasarkan informasi rata-rata, median, dan jangkauan.",
    "kode": "25MATWA-TO3-012",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSanggar budaya Desa Mekarjaya mengadakan kegiatan membuat kerajinan tradisional selama lima hari. Banyak peserta setiap hari disajikan dalam tabel berikut.\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full max-w-md mx-auto text-sm text-center border-collapse border border-slate-300 bg-white\">\n    <thead class=\"bg-slate-100 text-slate-800\">\n      <tr>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Hari</th>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Senin</th>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Selasa</th>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Rabu</th>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Kamis</th>\n        <th class=\"border border-slate-300 px-3 py-1.5\">Jumat</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1.5 font-semibold\">Jumlah peserta</td>\n        <td class=\"border border-slate-300 px-3 py-1.5\">14</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 italic font-semibold\">p</td>\n        <td class=\"border border-slate-300 px-3 py-1.5\">18</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 italic font-semibold\">q</td>\n        <td class=\"border border-slate-300 px-3 py-1.5\">22</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nDiketahui bahwa:\n</p>\n<ol class=\"list-decimal list-inside space-y-1 mb-3 text-slate-700\">\n  <li>rata-rata jumlah peserta selama lima hari adalah 18 orang;</li>\n  <li>median data tersebut adalah 18 orang;</li>\n  <li>jangkauan data tersebut adalah 16 orang; dan</li>\n  <li>\\(p\\) dan \\(q\\) merupakan bilangan cacah.</li>\n</ol>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan &ldquo;Benar&rdquo; atau &ldquo;Salah&rdquo; untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "text": "Jumlah peserta pada hari Selasa dan Kamis adalah 36 orang."
      },
      {
        "id": 2,
        "text": "Jumlah peserta pada hari Selasa dan Kamis mungkin sama banyak."
      },
      {
        "id": 3,
        "text": "Salah satu nilai p dan q adalah 10, sedangkan nilai lainnya 26."
      }
    ],
    "kunci": [
      "Benar",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Pembahasan Analisis Statistik Data Tunggal:</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong><br>\n   Rata-rata 5 hari adalah 18 orang, sehingga total peserta selama 5 hari adalah \\( 5 \\times 18 = 90 \\) orang:<br>\n   \\[ 14 + p + 18 + q + 22 = 90 \\implies 54 + p + q = 90 \\implies p + q = 36 \\text{ orang.} \\]<br>\n2. <strong>Pernyataan 2 (Salah):</strong><br>\n   Jika \\(p = q\\), maka \\(p = q = 18\\). Akibatnya kelima data menjadi \\(14, 18, 18, 18, 22\\) yang memiliki jangkauan \\(22 - 14 = 8 \\ne 16\\) (melanggar ketentuan ke-3 bahwa jangkauan adalah 16 orang).<br>\n3. <strong>Pernyataan 3 (Benar):</strong><br>\n   Misalkan nilai yang lebih kecil di antara \\(p, q\\) adalah \\(x\\) dan yang lebih besar adalah \\(y\\) (dengan \\(x + y = 36\\) dan \\(x \\le 18 \\le y\\)).<br>\n   Agar jangkauan data bernilai 16:<br>\n   - Jika nilai minimum adalah 14, maka nilai maksimum harus \\(14 + 16 = 30 \\implies y = 30 \\implies x = 6 < 14\\) (kontradiksi).<br>\n   - Jika nilai maksimum adalah 22, maka nilai minimum harus \\(22 - 16 = 6 \\implies x = 6 \\implies y = 30 > 22\\) (kontradiksi).<br>\n   - Maka \\(x\\) adalah nilai minimum (\\(x < 14\\)) dan \\(y\\) adalah nilai maksimum (\\(y > 22\\)), sehingga:<br>\n     \\[ y - x = 16 \\quad \\text{dan} \\quad y + x = 36 \\implies 2y = 52 \\implies y = 26, \\; x = 10. \\]<br>\n   Jadi salah satu nilai \\(p\\) dan \\(q\\) adalah 10 dan nilai lainnya 26.<br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  },
  {
    "id": 13,
    "elemen": "Data dan Peluang",
    "subelemen": "Kaidah Pencacahan (Permutasi dengan Syarat Urutan)",
    "indikator": "Menentukan banyak susunan objek berbeda pada satu baris jika sebagian objek harus berada dalam urutan relatif tertentu.",
    "kode": "25MATWA-TO3-013",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerpustakaan sekolah akan menata tujuh buku berbeda pada sebuah rak pameran. Tiga di antaranya merupakan seri sejarah <em>Jejak Nusantara</em> yang terdiri atas Volume I, Volume II, dan Volume III. Empat buku lainnya merupakan buku tunggal dengan judul berbeda.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAgar alur sejarah tetap berutan, Volume I harus diletakkan di sebelah kiri Volume II dan Volume II harus diletakkan di sebelah kiri Volume III. Ketiga buku seri tersebut tidak harus diletakkan bersebelahan.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBanyak susunan tujuh buku yang memenuhi ketentuan tersebut adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "120 susunan"
      },
      {
        "id": "B",
        "text": "5.040 susunan"
      },
      {
        "id": "C",
        "text": "360 susunan"
      },
      {
        "id": "D",
        "text": "840 susunan"
      },
      {
        "id": "E",
        "text": "720 susunan"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Permutasi dengan Urutan Relatif Tetap:</strong><br>\nTotal susunan 7 buku berbeda tanpa syarat adalah:<br>\n\\[ 7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 5.040 \\text{ susunan.} \\]<br>\nUntuk tiga buku seri (Volume I, Volume II, Volume III), terdapat \\(3! = 6\\) kemungkinan urutan relatif ketiganya, dan hanya <strong>1 urutan</strong> yang memenuhi syarat (Volume I di kiri Volume II, dan Volume II di kiri Volume III).<br>\nBanyak susunan yang memenuhi ketentuan adalah:<br>\n\\[ \\text{Banyak susunan} = \\frac{7!}{3!} = \\frac{5.040}{6} = 840 \\text{ susunan.} \\]<br>\n<em>(Cara alternatif: pilih 3 posisi dari 7 posisi untuk menempatkan Volume I, II, III secara berurutan sebanyak \\(C(7,3) = 35\\) cara, lalu susun 4 buku lainnya sebanyak \\(4! = 24\\) cara, sehingga \\(35 \\times 24 = 840\\) susunan).</em><br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 14,
    "elemen": "Bilangan",
    "subelemen": "Operasi Biner & Sifat Bilangan Asli",
    "indikator": "Menentukan nilai variabel dari persamaan operasi biner dan menganalisis sifat keterbagian serta faktor bilangan tersebut.",
    "kode": "25MATWA-TO3-014",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nOperasi biner \\(\\triangle\\) pada bilangan asli didefinisikan sebagai berikut:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ a \\triangle b = \\frac{3a - 2b}{a + b} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika \\( a \\triangle 4 = \\frac{11}{5} \\), pilihlah &ldquo;Benar&rdquo; atau &ldquo;Salah&rdquo; untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "text": "Nilai a merupakan kelipatan dari 7."
      },
      {
        "id": 2,
        "text": "Nilai a merupakan bilangan kuadrat sempurna."
      },
      {
        "id": 3,
        "text": "Nilai a mempunyai tepat empat faktor positif."
      }
    ],
    "kunci": [
      "Benar",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Pembahasan Operasi Biner &amp; Faktor Bilangan:</strong><br>\nSubstitusikan \\(b = 4\\) ke dalam rumus operasi biner:<br>\n\\[ a \\triangle 4 = \\frac{3a - 2(4)}{a + 4} = \\frac{11}{5} \\]<br>\n\\[ 5(3a - 8) = 11(a + 4) \\]<br>\n\\[ 15a - 40 = 11a + 44 \\implies 4a = 84 \\implies a = 21 \\]<br><br>\nEvaluasi ketiga pernyataan untuk \\(a = 21\\):<br>\n1. <strong>Pernyataan 1 (Benar):</strong> \\(21 = 3 \\times 7\\), sehingga \\(a\\) merupakan kelipatan dari 7.<br>\n2. <strong>Pernyataan 2 (Salah):</strong> 21 bukan bilangan kuadrat sempurna (\\(4^2 = 16\\) dan \\(5^2 = 25\\)).<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Faktor positif dari 21 adalah \\(\\{1, 3, 7, 21\\}\\), sehingga tepat memiliki 4 faktor positif.<br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  },
  {
    "id": 15,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Dimensi Tiga (Kedudukan Garis dan Bidang pada Balok)",
    "indikator": "Mengidentifikasi hubungan kesejajaran dan ketegaklurusan antargaris maupun antarbidang pada bangun ruang balok.",
    "kode": "25MATWA-TO3-015",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah kotak kaca untuk memajang miniatur benda bersejarah berbentuk balok \\(PQRS.TUVW\\) seperti pada gambar berikut.\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 360 190\" class=\"w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg\">\n    <!-- Balok PQRS.TUVW: P(55,155), Q(225,155), R(285,115), S(115,115), T(55,65), U(225,65), V(285,25), W(115,25) -->\n    <line x1=\"115\" y1=\"115\" x2=\"285\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n    <line x1=\"55\" y1=\"155\" x2=\"115\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n    <line x1=\"115\" y1=\"25\" x2=\"115\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n    <!-- Miniatur candi di tengah -->\n    <polygon points=\"140,135 200,135 192,125 148,125\" fill=\"#b45309\" opacity=\"0.7\"/>\n    <polygon points=\"150,125 190,125 184,113 156,113\" fill=\"#d97706\" opacity=\"0.8\"/>\n    <polygon points=\"160,113 180,113 170,88\" fill=\"#b45309\" opacity=\"0.85\"/>\n    <!-- Rusuk tampak depan/atas/kanan -->\n    <polygon points=\"55,65 225,65 225,155 55,155\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <polyline points=\"55,65 115,25 285,25 225,65\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <polyline points=\"285,25 285,115 225,155\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <!-- Label titik sudut -->\n    <text x=\"42\" y=\"162\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">P</text>\n    <text x=\"228\" y=\"168\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">Q</text>\n    <text x=\"293\" y=\"120\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">R</text>\n    <text x=\"102\" y=\"118\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">S</text>\n    <text x=\"42\" y=\"68\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">T</text>\n    <text x=\"232\" y=\"72\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">U</text>\n    <text x=\"292\" y=\"28\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">V</text>\n    <text x=\"100\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">W</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPilih semua pernyataan yang benar mengenai hubungan antargaris dan antarbidang pada balok tersebut! (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Garis PT sejajar dengan garis RV."
      },
      {
        "id": "B",
        "text": "Bidang PQUT sejajar dengan bidang SRVW."
      },
      {
        "id": "C",
        "text": "Garis TU sejajar dengan garis QR."
      },
      {
        "id": "D",
        "text": "Garis PV tegak lurus terhadap bidang PQRS."
      },
      {
        "id": "E",
        "text": "Bidang QRVU tegak lurus terhadap bidang PQRS."
      }
    ],
    "kunci": [
      "A",
      "B",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Kedudukan Garis dan Bidang pada Balok \\(PQRS.TUVW\\):</strong><br>\n1. <strong>Opsi A (Benar):</strong> Garis \\(PT\\) dan garis \\(RV\\) sama-sama merupakan rusuk tegak balok sehingga saling sejajar (\\(PT \\parallel QU \\parallel RV \\parallel SW\\)).<br>\n2. <strong>Opsi B (Benar):</strong> Bidang \\(PQUT\\) (sisi depan) berhadapan dan sejajar dengan bidang \\(SRVW\\) (sisi belakang).<br>\n3. <strong>Opsi C (Salah):</strong> Garis \\(TU\\) sejajar dengan \\(PQ\\) dan \\(SR\\), sedangkan dengan garis \\(QR\\) bersilangan tegak lurus.<br>\n4. <strong>Opsi D (Salah):</strong> Garis \\(PV\\) adalah diagonal ruang balok, sehingga membentuk sudut lancip terhadap bidang alas \\(PQRS\\) (garis yang tegak lurus \\(PQRS\\) di titik \\(R\\) adalah \\(RV\\)).<br>\n5. <strong>Opsi E (Benar):</strong> Bidang sisi samping \\(QRVU\\) berdiri tegak lurus terhadap bidang alas \\(PQRS\\).<br>\n<strong>Kunci Jawaban: A, B, dan E</strong>"
  },
  {
    "id": 16,
    "elemen": "Data dan Peluang",
    "subelemen": "Peluang Bersyarat (Pengambilan dengan & tanpa Pengembalian)",
    "indikator": "Menganalisis kemungkinan komposisi kejadian sebelumnya berdasarkan nilai peluang pengambilan pada giliran berikutnya.",
    "kode": "25MATWA-TO3-016",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kegiatan Jelajah Museum Daerah, panitia menyediakan sebuah kotak berisi 20 token dengan komposisi berikut.\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full max-w-md mx-auto text-sm border-collapse border border-slate-300 bg-white\">\n    <thead class=\"bg-slate-100 text-slate-800\">\n      <tr>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Jenis Token</th>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Banyak Token</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1.5\">Token emas&mdash;akses ruang koleksi khusus</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-center font-semibold\">10</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1.5\">Token perak&mdash;suvenir pembatas buku</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-center font-semibold\">5</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1.5\">Token &ldquo;Coba Lagi&rdquo;</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-center font-semibold\">5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nAturan pengambilan token adalah sebagai berikut.\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>Setiap peserta mengambil satu token secara acak.</li>\n  <li>Token emas dan token perak yang telah diambil tidak dikembalikan ke dalam kotak.</li>\n  <li>Token &ldquo;Coba Lagi&rdquo; selalu dikembalikan ke dalam kotak.</li>\n  <li>Setiap peserta hanya melakukan satu kali pengambilan.</li>\n</ul>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAlya mendapat giliran sebagai peserta kelima. Sebelum Alya mengambil token, telah terjadi empat kali pengambilan. Panitia menghitung bahwa peluang Alya memperoleh token emas adalah \\(\\frac{5}{9}\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKombinasi token yang mungkin telah diperoleh empat peserta sebelumnya adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1 token perak dan 3 token “Coba Lagi”"
      },
      {
        "id": "B",
        "text": "2 token emas dan 2 token “Coba Lagi”"
      },
      {
        "id": "C",
        "text": "1 token emas, 1 token perak, dan 2 token “Coba Lagi”"
      },
      {
        "id": "D",
        "text": "2 token perak dan 2 token “Coba Lagi”"
      },
      {
        "id": "E",
        "text": "1 token emas, 2 token perak, dan 1 token “Coba Lagi”"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Peluang Pengambilan Bersyarat:</strong><br>\nMisalkan dari 4 peserta sebelumnya terambil:<br>\n- \\(e\\) token emas (tidak dikembalikan \\(\\implies\\) sisa token emas \\(= 10 - e\\))<br>\n- \\(p\\) token perak (tidak dikembalikan \\(\\implies\\) sisa token perak \\(= 5 - p\\))<br>\n- \\(c\\) token &ldquo;Coba Lagi&rdquo; (dikembalikan \\(\\implies\\) jumlah token &ldquo;Coba Lagi&rdquo; tetap 5)<br>\ndengan \\(e + p + c = 4\\).<br><br>\nTotal token di dalam kotak saat Alya mengambil adalah \\(N = 20 - e - p\\).<br>\nPeluang Alya memperoleh token emas:<br>\n\\[ P(\\text{Emas}) = \\frac{10 - e}{20 - e - p} = \\frac{5}{9} = \\frac{10}{18} \\]<br>\nAgar pembilang bernilai 10 dan penyebut bernilai 18:<br>\n- \\(10 - e = 10 \\implies e = 0\\) (belum ada token emas yang terambil)<br>\n- \\(20 - 0 - p = 18 \\implies p = 2\\) (2 token perak telah terambil)<br>\n- \\(c = 4 - e - p = 4 - 0 - 2 = 2\\) (2 token &ldquo;Coba Lagi&rdquo; telah terambil dan dikembalikan).<br><br>\nJadi empat peserta sebelumnya memperoleh <strong>2 token perak dan 2 token &ldquo;Coba Lagi&rdquo;</strong>.<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 17,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri (Komposisi Rotasi dan Dilatasi)",
    "indikator": "Menentukan koordinat bayangan titik hasil komposisi rotasi terhadap pusat (a, b) dilanjutkan dilatasi terhadap pusat O(0, 0).",
    "kode": "25MATWA-TO3-017",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada bidang koordinat terdapat titik \\(K(-3, 5)\\) dan titik \\(C(1, 2)\\). Titik \\(K\\) mengalami dua transformasi secara berurutan sebagai berikut:\n</p>\n<ol class=\"list-decimal list-inside space-y-1 mb-3 text-slate-700\">\n  <li>Dirotasi \\(90^\\circ\\) searah jarum jam dengan pusat rotasi \\(C(1, 2)\\).</li>\n  <li>Hasil rotasi kemudian didilatasi dengan pusat \\(O(0, 0)\\) dan faktor skala \\(-2\\).</li>\n</ol>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKoordinat bayangan akhir titik \\(K\\) adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( (4, 6) \\)"
      },
      {
        "id": "B",
        "text": "\\( (-12, -8) \\)"
      },
      {
        "id": "C",
        "text": "\\( (-10, -6) \\)"
      },
      {
        "id": "D",
        "text": "\\( (-8, -12) \\)"
      },
      {
        "id": "E",
        "text": "\\( (8, 12) \\)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Komposisi Transformasi Geometri:</strong><br>\n1. <strong>Transformasi Pertama: Rotasi \\(90^\\circ\\) searah jarum jam (\\(-90^\\circ\\)) dengan pusat \\(C(a, b) = (1, 2)\\):</strong><br>\n   Rumus rotasi \\(-90^\\circ\\) terhadap pusat \\((a, b)\\):<br>\n   \\[ x' = a + (y - b) \\quad \\text{dan} \\quad y' = b - (x - a) \\]<br>\n   Substitusikan \\(K(-3, 5)\\) dan \\(C(1, 2)\\):<br>\n   \\[ x' = 1 + (5 - 2) = 1 + 3 = 4 \\]<br>\n   \\[ y' = 2 - (-3 - 1) = 2 - (-4) = 6 \\]<br>\n   Diperoleh bayangan pertama \\(K'(4, 6)\\).<br><br>\n2. <strong>Transformasi Kedua: Dilatasi \\([O(0, 0), k = -2]\\):</strong><br>\n   \\[ x'' = k \\cdot x' = -2 \\times 4 = -8 \\]<br>\n   \\[ y'' = k \\cdot y' = -2 \\times 6 = -12 \\]<br>\n   Jadi koordinat bayangan akhir titik \\(K\\) adalah \\((-8, -12)\\).<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 18,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Dimensi Tiga (Diagonal Ruang Balok)",
    "indikator": "Menghitung panjang diagonal ruang balok dalam permasalahan kontekstual pemasangan kabel lintas ruang.",
    "kode": "25MATWA-TO3-018",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah ruang uji iklim untuk penelitian tanaman berbentuk balok dengan ukuran panjang \\(20\\text{ meter}\\), lebar \\(12\\text{ meter}\\), dan tinggi \\(9\\text{ meter}\\). Sebuah kabel serat optik akan dipasang dari sudut kiri depan bagian bawah menuju sudut kanan belakang bagian atas.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKabel dipasang lurus melalui ruang tersebut sehingga menempuh jarak terpendek antara kedua sudut. Teknisi menyediakan satu gulungan kabel sepanjang \\(30\\text{ meter}\\).\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 380 185\" class=\"w-full max-w-md mx-auto bg-white border border-slate-300 rounded-lg\">\n    <line x1=\"115\" y1=\"115\" x2=\"285\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"55\" y1=\"155\" x2=\"115\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"115\" y1=\"25\" x2=\"115\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <polygon points=\"55,65 225,65 225,155 55,155\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <polyline points=\"55,65 115,25 285,25 225,65\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <polyline points=\"285,25 285,115 225,155\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Kabel diagonal ruang dari (55,155) ke (285,25) -->\n    <line x1=\"55\" y1=\"155\" x2=\"285\" y2=\"25\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n    <circle cx=\"55\" cy=\"155\" r=\"4\" fill=\"#dc2626\"/>\n    <circle cx=\"285\" cy=\"25\" r=\"4\" fill=\"#dc2626\"/>\n    <text x=\"32\" y=\"145\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#dc2626\">Titik awal</text>\n    <text x=\"285\" y=\"15\" font-size=\"8.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#dc2626\">Titik akhir</text>\n    <text x=\"175\" y=\"75\" font-size=\"9\" font-weight=\"bold\" fill=\"#b91c1c\">Kabel serat optik</text>\n    <!-- Ukuran -->\n    <text x=\"140\" y=\"172\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">20 m</text>\n    <text x=\"272\" y=\"142\" font-size=\"10\" font-weight=\"bold\" fill=\"#0f172a\">12 m</text>\n    <text x=\"35\" y=\"112\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">9 m</text>\n    <rect x=\"298\" y=\"75\" width=\"72\" height=\"36\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#f59e0b\"/>\n    <text x=\"334\" y=\"90\" font-size=\"8\" text-anchor=\"middle\" fill=\"#92400e\">Kabel tersedia</text>\n    <text x=\"334\" y=\"103\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#78350f\">30 m</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPanjang kabel yang tersisa setelah pemasangan adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "7 meter"
      },
      {
        "id": "B",
        "text": "8 meter"
      },
      {
        "id": "C",
        "text": "15 meter"
      },
      {
        "id": "D",
        "text": "5 meter"
      },
      {
        "id": "E",
        "text": "10 meter"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Diagonal Ruang Balok:</strong><br>\n1. <strong>Hitung panjang kabel yang terpakai (diagonal ruang balok):</strong><br>\n   \\[ d_{\\text{ruang}} = \\sqrt{p^2 + l^2 + t^2} = \\sqrt{20^2 + 12^2 + 9^2} \\]<br>\n   \\[ d_{\\text{ruang}} = \\sqrt{400 + 144 + 81} = \\sqrt{625} = 25\\text{ meter.} \\]<br>\n2. <strong>Hitung panjang kabel yang tersisa:</strong><br>\n   \\[ \\text{Sisa kabel} = 30\\text{ m} - 25\\text{ m} = 5\\text{ meter.} \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 19,
    "elemen": "Bilangan",
    "subelemen": "Himpunan (Operasi Irisan dan Gabungan)",
    "indikator": "Menentukan anggota hasil operasi campuran irisan dan gabungan tiga himpunan bilangan bulat.",
    "kode": "25MATWA-TO3-019",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nNara memainkan permainan dengan papan berbentuk garis bilangan. Ketentuan penempatan bidak dalam permainan tersebut sebagai berikut:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>Bidak biru dapat ditempatkan pada bilangan bulat yang lebih dari \\(-4\\) dan tidak lebih dari \\(5\\).</li>\n  <li>Bidak merah dapat ditempatkan pada bilangan genap dari \\(-2\\) sampai dengan \\(8\\).</li>\n  <li>Posisi bonus terdapat pada bilangan yang merupakan faktor positif dari \\(18\\).</li>\n</ul>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nKetiga kelompok posisi tersebut dinyatakan sebagai berikut:\n</p>\n<div class=\"my-2 text-center text-slate-800 space-y-1\">\n  <div>\\( P = \\{x \\mid -4 < x \\le 5,\\; x \\in \\mathbb{Z}\\} \\)</div>\n  <div>\\( Q = \\{x \\mid x \\text{ bilangan genap},\\; -2 \\le x \\le 8,\\; x \\in \\mathbb{Z}\\} \\)</div>\n  <div>\\( R = \\{x \\mid x \\text{ merupakan faktor positif dari } 18\\} \\)</div>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPosisi kemenangan adalah posisi yang dapat ditempati sekaligus oleh bidak biru dan merah, kemudian digabungkan dengan seluruh posisi bonus. Himpunan posisi kemenangan dinyatakan dengan \\((P \\cap Q) \\cup R\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nHimpunan posisi kemenangan yang tepat adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\{-2, 0, 2, 3, 4, 5, 6, 9, 18\\} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\{-2, 0, 1, 2, 3, 4, 5, 9, 18\\} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\{-2, 0, 1, 2, 3, 4, 6, 8, 9\\} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\{-2, 0, 1, 2, 3, 4, 6, 9, 18\\} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\{-2, 0, 1, 2, 3, 4, 6, 8, 18\\} \\)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Operasi Himpunan:</strong><br>\n1. <strong>Daftarkan anggota masing-masing himpunan:</strong><br>\n   - \\( P = \\{-3, -2, -1, 0, 1, 2, 3, 4, 5\\} \\)<br>\n   - \\( Q = \\{-2, 0, 2, 4, 6, 8\\} \\)<br>\n   - \\( R = \\{1, 2, 3, 6, 9, 18\\} \\)<br><br>\n2. <strong>Tentukan irisan \\(P \\cap Q\\):</strong><br>\n   \\[ P \\cap Q = \\{-2, 0, 2, 4\\} \\]<br><br>\n3. <strong>Tentukan gabungan \\((P \\cap Q) \\cup R\\):</strong><br>\n   \\[ (P \\cap Q) \\cup R = \\{-2, 0, 2, 4\\} \\cup \\{1, 2, 3, 6, 9, 18\\} = \\{-2, 0, 1, 2, 3, 4, 6, 9, 18\\} \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 20,
    "elemen": "Bilangan",
    "subelemen": "Eksponen (Bilangan Berpangkat Pecahan)",
    "indikator": "Menghitung hasil operasi perkalian dan pembagian bilangan berpangkat pecahan.",
    "kode": "25MATWA-TO3-020",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-semibold text-slate-900 leading-relaxed mb-3\">\nNilai dari bentuk bilangan berpangkat \\( \\dfrac{27^{\\frac{2}{3}} \\times 16^{\\frac{3}{4}}}{9^{\\frac{1}{2}} \\times 2} \\) adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "24"
      },
      {
        "id": "E",
        "text": "18"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Sifat Eksponen Pecahan:</strong><br>\nUbah masing-masing bilangan pokok menjadi bentuk pangkat prima:<br>\n- \\( 27^{\\frac{2}{3}} = (3^3)^{\\frac{2}{3}} = 3^2 = 9 \\)<br>\n- \\( 16^{\\frac{3}{4}} = (2^4)^{\\frac{3}{4}} = 2^3 = 8 \\)<br>\n- \\( 9^{\\frac{1}{2}} = (3^2)^{\\frac{1}{2}} = 3^1 = 3 \\)<br><br>\nSubstitusikan ke bentuk pecahan:<br>\n\\[ \\frac{27^{\\frac{2}{3}} \\times 16^{\\frac{3}{4}}}{9^{\\frac{1}{2}} \\times 2} = \\frac{9 \\times 8}{3 \\times 2} = \\frac{72}{6} = 12 \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 21,
    "elemen": "Aljabar",
    "subelemen": "Barisan Geometri & Peluruhan Eksponensial",
    "indikator": "Menganalisis sisa massa zat pencemar pada proses penyaringan bertahap menggunakan konsep peluruhan geometri.",
    "kode": "25MATWA-TO3-021",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah laboratorium lingkungan menguji metode penyaringan bertahap untuk mengurangi massa zat pencemar dalam sampel air. Sebelum proses penyaringan, massa zat pencemar dalam sampel tersebut adalah \\(500\\text{ mg}\\). Setiap tahap penyaringan menyisakan \\(60\\%\\) dari massa zat pencemar pada tahap sebelumnya.\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nHasil pengujian dikategorikan sebagai berikut:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>Massa zat pencemar lebih dari \\(200\\text{ mg}\\) dikategorikan tercemar tinggi.</li>\n  <li>Massa zat pencemar lebih dari \\(50\\text{ mg}\\) dan paling banyak \\(200\\text{ mg}\\) dikategorikan memerlukan pemurnian lanjutan.</li>\n  <li>Massa zat pencemar paling banyak \\(50\\text{ mg}\\) dikategorikan aman.</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan &ldquo;Benar&rdquo; atau &ldquo;Salah&rdquo; untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "text": "Setelah penyaringan tahap ke-2, tersisa 180 mg zat pencemar sehingga sampel memerlukan pemurnian lanjutan."
      },
      {
        "id": 2,
        "text": "Jumlah zat pencemar yang berhasil dikurangi sejak kondisi awal sampai penyaringan tahap ke-3 adalah 392 mg."
      },
      {
        "id": 3,
        "text": "Sampel pertama kali masuk kategori aman setelah penyaringan tahap ke-4."
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Pembahasan Peluruhan Bertahap (Barisan Geometri):</strong><br>\nMassa awal \\( M_0 = 500\\text{ mg} \\) dengan rasio sisa per tahap \\( r = 60\\% = 0{,}6 \\), sehingga \\( M_n = 500 \\times (0{,}6)^n \\):<br>\n- <strong>Tahap ke-1:</strong> \\( M_1 = 500 \\times 0{,}6 = 300\\text{ mg} \\) (tercemar tinggi)<br>\n- <strong>Tahap ke-2:</strong> \\( M_2 = 300 \\times 0{,}6 = 180\\text{ mg} \\) (memerlukan pemurnian lanjutan karena \\(50 < 180 \\le 200\\)) \\(\\implies\\) <strong>Pernyataan 1 Benar</strong>.<br>\n- <strong>Tahap ke-3:</strong> \\( M_3 = 180 \\times 0{,}6 = 108\\text{ mg} \\). Jumlah zat pencemar yang berhasil dikurangi adalah \\( M_0 - M_3 = 500 - 108 = 392\\text{ mg} \\) \\(\\implies\\) <strong>Pernyataan 2 Benar</strong>.<br>\n- <strong>Tahap ke-4:</strong> \\( M_4 = 108 \\times 0{,}6 = 64{,}8\\text{ mg} \\). Karena \\(64{,}8 > 50\\text{ mg}\\), sampel belum masuk kategori aman pada tahap ke-4 (baru masuk kategori aman pada tahap ke-5 dengan \\(M_5 = 38{,}88\\text{ mg}\\)) \\(\\implies\\) <strong>Pernyataan 3 Salah</strong>.<br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>"
  },
  {
    "id": 22,
    "elemen": "Aljabar",
    "subelemen": "Sistem Persamaan Linear Tiga Variabel (SPLTV)",
    "indikator": "Menyelesaikan permasalahan kontekstual harga paket barang menggunakan sistem persamaan linear tiga variabel.",
    "kode": "25MATWA-TO3-022",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah toko perlengkapan sekolah menjual paket yang terdiri atas buku catatan, pena, dan map dokumen. Harga setiap paket ditentukan berdasarkan jumlah dan jenis barang di dalamnya.\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full max-w-lg mx-auto text-sm border-collapse border border-slate-300 bg-white\">\n    <thead class=\"bg-slate-100 text-slate-800\">\n      <tr>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Paket</th>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Komposisi Barang</th>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Harga</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-center font-semibold\">Paket P</td>\n        <td class=\"border border-slate-300 px-3 py-1.5\">2 buku, 1 pena, dan 1 map</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-right\">Rp34.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-center font-semibold\">Paket Q</td>\n        <td class=\"border border-slate-300 px-3 py-1.5\">1 buku, 2 pena, dan 2 map</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-right\">Rp38.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-center font-semibold\">Paket R</td>\n        <td class=\"border border-slate-300 px-3 py-1.5\">3 buku, 1 pena, dan 2 map</td>\n        <td class=\"border border-slate-300 px-3 py-1.5 text-right\">Rp52.000,00</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLaras membeli Paket P. Selain itu, ia membeli 3 buku catatan dan 2 map dokumen dengan harga satuan yang sama seperti barang dalam paket.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTotal harga yang harus dibayar Laras adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Rp72.000,00"
      },
      {
        "id": "B",
        "text": "Rp80.000,00"
      },
      {
        "id": "C",
        "text": "Rp64.000,00"
      },
      {
        "id": "D",
        "text": "Rp68.000,00"
      },
      {
        "id": "E",
        "text": "Rp76.000,00"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Sistem Persamaan Linear Tiga Variabel:</strong><br>\nMisalkan harga satuan buku \\(= b\\), pena \\(= p\\), dan map \\(= m\\) (dalam ribuan rupiah):<br>\n1. \\( 2b + p + m = 34 \\) &hellip; (1)<br>\n2. \\( b + 2p + 2m = 38 \\) &hellip; (2)<br>\n3. \\( 3b + p + 2m = 52 \\) &hellip; (3)<br><br>\nKurangkan persamaan (3) dengan persamaan (1):<br>\n\\[ (3b + p + 2m) - (2b + p + m) = 52 - 34 \\implies b + m = 18 \\]<br>\nKalikan persamaan (1) dengan 2 lalu kurangkan persamaan (2):<br>\n\\[ 2(2b + p + m) - (b + 2p + 2m) = 68 - 38 \\implies 3b = 30 \\implies b = 10 \\text{ (Rp10.000,00).} \\]<br>\nSubstitusikan \\(b = 10\\) ke \\(b + m = 18\\):<br>\n\\[ m = 18 - 10 = 8 \\text{ (Rp8.000,00).} \\]<br>\nTotal yang harus dibayar Laras (Paket P + 3 buku + 2 map):<br>\n\\[ \\text{Total} = 34.000 + 3(10.000) + 2(8.000) = 34.000 + 30.000 + 16.000 = \\text{Rp80.000,00.} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 23,
    "elemen": "Aljabar",
    "subelemen": "Fungsi Linear & Invers",
    "indikator": "Menentukan nilai input variabel bebas pada fungsi linear berdasarkan nilai output sensor.",
    "kode": "25MATWA-TO3-023",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah rumah kaca menggunakan sensor digital untuk mengukur kelembapan tanah. Berdasarkan hasil kalibrasi, hubungan antara persentase kelembapan tanah \\(k\\) dan angka yang ditampilkan sensor dinyatakan dengan fungsi \\(f(k) = 4k + 120\\), dengan \\(0 \\le k \\le 100\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPada suatu pengukuran, layar sensor menampilkan angka 392. Persentase kelembapan tanah yang sebenarnya adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "68%"
      },
      {
        "id": "B",
        "text": "78%"
      },
      {
        "id": "C",
        "text": "128%"
      },
      {
        "id": "D",
        "text": "58%"
      },
      {
        "id": "E",
        "text": "98%"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Fungsi Linear:</strong><br>\nDiketahui \\( f(k) = 4k + 120 \\) dan nilai pembacaan sensor \\( f(k) = 392 \\):<br>\n\\[ 4k + 120 = 392 \\]<br>\n\\[ 4k = 392 - 120 = 272 \\]<br>\n\\[ k = \\frac{272}{4} = 68 \\]<br>\nJadi persentase kelembapan tanah yang sebenarnya adalah <strong>68%</strong>.<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 24,
    "elemen": "Aljabar",
    "subelemen": "Komposisi Fungsi Sepenggal (Piecewise Function)",
    "indikator": "Menganalisis biaya akhir pelatihan menggunakan komposisi fungsi bersyarat dan membandingkannya dengan anggaran peserta.",
    "kode": "25MATWA-TO3-024",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah sanggar budaya menyelenggarakan pelatihan pembuatan wayang kulit bagi pelajar. Biaya normal pelatihan sebesar \\(x\\) rupiah. Semua peserta memperoleh subsidi pelestarian budaya sehingga biaya setelah subsidi dinyatakan dengan fungsi \\(f(x) = 0{,}88x\\).\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nPeserta juga memperoleh potongan tambahan berdasarkan nilai seleksi portofolio. Biaya akhir yang harus dibayarkan dinyatakan dengan fungsi:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ g(y) = \\begin{cases} 0{,}80y, & \\text{jika nilai portofolio } \\ge 90 \\\\ 0{,}90y, & \\text{jika } 80 \\le \\text{nilai portofolio } < 90 \\\\ y, & \\text{jika nilai portofolio } < 80 \\end{cases} \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\(y = f(x)\\).\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-2\">\nNara memperoleh nilai portofolio 84 dan membayar biaya akhir sebesar Rp396.000,00. Lima pelajar lain telah memenuhi seluruh persyaratan administrasi dan memiliki data berikut.\n</p>\n<div class=\"my-3 overflow-x-auto\">\n  <table class=\"w-full max-w-md mx-auto text-sm border-collapse border border-slate-300 bg-white\">\n    <thead class=\"bg-slate-100 text-slate-800\">\n      <tr>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nama</th>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Nilai Portofolio</th>\n        <th class=\"border border-slate-300 px-3 py-1.5 text-center\">Uang yang Tersedia</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 text-center font-semibold\">Ayu</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-center\">92</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-right\">Rp355.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 text-center font-semibold\">Bagas</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-center\">86</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-right\">Rp400.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 text-center font-semibold\">Citra</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-center\">78</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-right\">Rp445.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 text-center font-semibold\">Damar</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-center\">90</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-right\">Rp350.000,00</td>\n      </tr>\n      <tr>\n        <td class=\"border border-slate-300 px-3 py-1 text-center font-semibold\">Eka</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-center\">83</td>\n        <td class=\"border border-slate-300 px-3 py-1 text-right\">Rp390.000,00</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPeserta hanya dapat mengikuti pelatihan apabila uang yang tersedia sekurang-kurangnya sama dengan biaya akhir. Berdasarkan informasi tersebut, pelajar yang dapat mengikuti pelatihan adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Bagas dan Citra"
      },
      {
        "id": "B",
        "text": "Ayu, Citra, dan Damar"
      },
      {
        "id": "C",
        "text": "Ayu dan Bagas"
      },
      {
        "id": "D",
        "text": "Ayu, Bagas, dan Citra"
      },
      {
        "id": "E",
        "text": "Bagas, Damar, dan Eka"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Komposisi Fungsi Bersyarat:</strong><br>\n1. <strong>Menentukan biaya setelah subsidi (\\(y = f(x)\\)):</strong><br>\n   Nilai portofolio Nara adalah 84 (\\(80 \\le 84 < 90\\)), sehingga berlaku \\(g(y) = 0{,}90y\\):<br>\n   \\[ 0{,}90y = 396.000 \\implies y = \\frac{396.000}{0{,}90} = \\text{Rp440.000,00.} \\]<br>\n2. <strong>Biaya akhir untuk setiap rentang nilai portofolio:</strong><br>\n   - Nilai \\(\\ge 90\\): \\( 0{,}80 \\times 440.000 = \\text{Rp352.000,00} \\)<br>\n   - Nilai \\(80 \\le \\text{nilai} < 90\\): \\( 0{,}90 \\times 440.000 = \\text{Rp396.000,00} \\)<br>\n   - Nilai \\(< 80\\): \\( 1 \\times 440.000 = \\text{Rp440.000,00} \\)<br><br>\n3. <strong>Evaluasi kelima pelajar:</strong><br>\n   - <strong>Ayu (nilai 92):</strong> Biaya Rp352.000,00 \\(\\le\\) Uang Rp355.000,00 (<strong>Dapat ikut</strong>)<br>\n   - <strong>Bagas (nilai 86):</strong> Biaya Rp396.000,00 \\(\\le\\) Uang Rp400.000,00 (<strong>Dapat ikut</strong>)<br>\n   - <strong>Citra (nilai 78):</strong> Biaya Rp440.000,00 \\(\\le\\) Uang Rp445.000,00 (<strong>Dapat ikut</strong>)<br>\n   - <strong>Damar (nilai 90):</strong> Biaya Rp352.000,00 \\(>\\) Uang Rp350.000,00 (Tidak cukup)<br>\n   - <strong>Eka (nilai 83):</strong> Biaya Rp396.000,00 \\(>\\) Uang Rp390.000,00 (Tidak cukup)<br><br>\nJadi pelajar yang dapat mengikuti pelatihan adalah <strong>Ayu, Bagas, dan Citra</strong>.<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 25,
    "elemen": "Aljabar",
    "subelemen": "Barisan Aritmetika",
    "indikator": "Menentukan suku ke-n pada barisan aritmetika dalam konteks penataan kursi.",
    "kode": "25MATWA-TO3-025",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPanitia Festival Budaya Desa menata kursi tamu dalam beberapa baris. Banyak kursi pada setiap baris membentuk barisan aritmetika. Baris pertama berisi 180 kursi, sedangkan baris keempat berisi 240 kursi.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBanyak kursi yang harus disiapkan pada baris ketujuh adalah ...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "300 kursi"
      },
      {
        "id": "B",
        "text": "340 kursi"
      },
      {
        "id": "C",
        "text": "260 kursi"
      },
      {
        "id": "D",
        "text": "280 kursi"
      },
      {
        "id": "E",
        "text": "320 kursi"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Barisan Aritmetika:</strong><br>\nDiketahui suku pertama \\( U_1 = a = 180 \\) dan suku keempat \\( U_4 = 240 \\):<br>\n\\[ U_4 = a + 3b = 240 \\implies 180 + 3b = 240 \\implies 3b = 60 \\implies b = 20 \\]<br>\nBanyak kursi pada baris ketujuh (\\(U_7\\)):<br>\n\\[ U_7 = a + 6b = 180 + 6(20) = 180 + 120 = 300 \\text{ kursi.} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  }
];

if (typeof window !== 'undefined') {
  window.tkaMatematikaUmumPaket3Data = tkaMatematikaUmumPaket3Data;
  window.tkaMatematikaUmumPackages = window.tkaMatematikaUmumPackages || {};
  window.tkaMatematikaUmumPackages['paket3'] = {
    id: "paket3",
    title: "Paket 3: Try Out 3 Sekolah TKA Matematika Umum (Wajib) SMA 2025/2026",
    shortTitle: "Paket 3 (TO 3 Sekolah • " + tkaMatematikaUmumPaket3Data.length + " Soal)",
    badge: "TO 3 Sekolah",
    total: tkaMatematikaUmumPaket3Data.length,
    durasiMenit: 50,
    data: tkaMatematikaUmumPaket3Data
  };
}
