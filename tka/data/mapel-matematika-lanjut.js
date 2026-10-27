// tka/data/mapel-matematika-lanjut.js
// Bank Soal & Pembahasan Resmi TKA Matematika Tingkat Lanjut SMA 2025 (25 Butir Soal Resmi BPPP Kemendikbudristek)
// Sesuai Dokumen Resmi Seleksi Masuk PTN TKA Matematika SMA 2025 Tingkat Lanjut

const tkaMatematikaLanjutPaket1Data = [
  {
    "id": 1,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menentukan invers matriks berordo 2x2. (1)",
    "kode": "25MATALJMTXM26SL-000000-2629",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_01.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan matriks berikut!\n</p>\n<div class=\"my-4 text-center\">\n  \\[ F = \\begin{pmatrix} 2 & 0 \\\\ 0 & \\frac{1}{2} \\end{pmatrix} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nInvers dari matriks \\(F\\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\begin{pmatrix} -1 & 0 \\\\ 0 & -2 \\end{pmatrix} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\begin{pmatrix} -\\frac{1}{2} & 0 \\\\ 0 & -2 \\end{pmatrix} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\begin{pmatrix} \\frac{1}{2} & 0 \\\\ 0 & 2 \\end{pmatrix} \\)"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan Invers Matriks Ordo 2&times;2:</strong><br>\nDiberikan matriks diagonal \\( F = \\begin{pmatrix} 2 & 0 \\\\ 0 & \\frac{1}{2} \\end{pmatrix} \\).<br>\n1. <strong>Hitung determinan matriks \\(F\\):</strong><br>\n\\[ \\det(F) = ad - bc = (2)\\left(\\frac{1}{2}\\right) - (0)(0) = 1 - 0 = 1 \\]<br>\n2. <strong>Rumus invers matriks ordo 2&times;2:</strong><br>\n\\[ F^{-1} = \\frac{1}{\\det(F)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\]<br>\nSubstitusikan nilai-nilai elemen matriks:<br>\n\\[ F^{-1} = \\frac{1}{1} \\begin{pmatrix} \\frac{1}{2} & 0 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{2} & 0 \\\\ 0 & 2 \\end{pmatrix} \\]<br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    "id": 2,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menentukan solusi dari persamaan linear dua variabel menggunakan konsep invers matriks. (3)",
    "kode": "25MATALJMTXM26SL-000000-0694",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_02.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPak Andi memiliki beberapa sapi dan kambing. Semua hewan ternaknya selalu diberikan pakan berupa campuran rumput gajah dan rumput gamal. Setiap hari, dia selalu menyediakan 38 kg rumput gajah dan 34 kg rumput gamal untuk seluruh kambing dan sapi miliknya (tanpa sisa). Kebutuhan pakan per ekor per hari:\n</p>\n<ul class=\"list-disc pl-5 mb-3 space-y-1 text-slate-700\">\n  <li><strong>Sapi:</strong> Rumput Gajah 10 kg, Rumput Gamal 10 kg</li>\n  <li><strong>Kambing:</strong> Rumput Gajah 2 kg, Rumput Gamal 1 kg</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika banyaknya sapi dan kambing yang dipelihara oleh Pak Andi berturut-turut adalah \\(x\\) dan \\(y\\), maka \\( \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\begin{pmatrix} -1 & 1 \\\\ 10 & -5 \\end{pmatrix} \\begin{pmatrix} 19 \\\\ 34 \\end{pmatrix} = \\begin{pmatrix} 15 \\\\ 20 \\end{pmatrix} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\begin{pmatrix} 10 & -10 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 38 \\\\ 34 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\begin{pmatrix} -\\frac{1}{10} & \\frac{2}{10} \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 34 \\\\ 38 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\begin{pmatrix} -1 & 2 \\\\ 10 & -10 \\end{pmatrix} \\begin{pmatrix} 38 \\\\ 34 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\begin{pmatrix} -\\frac{1}{5} & \\frac{1}{5} \\\\ 2 & -1 \\end{pmatrix} \\begin{pmatrix} 19 \\\\ 34 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan SPLDV Berbasis Matriks:</strong><br>\nMisalkan banyaknya sapi = \\(x\\) ekor dan kambing = \\(y\\) ekor.<br>\n1. <strong>Persamaan konsumsi rumput gajah:</strong><br>\n\\[ 10x + 2y = 38 \\iff 5x + y = 19 \\]<br>\n2. <strong>Persamaan konsumsi rumput gamal:</strong><br>\n\\[ 10x + y = 34 \\]<br>\nDalam bentuk matriks:<br>\n\\[ \\begin{pmatrix} 5 & 1 \\\\ 10 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 19 \\\\ 34 \\end{pmatrix} \\]<br>\nInvers matriks koefisien \\( M = \\begin{pmatrix} 5 & 1 \\\\ 10 & 1 \\end{pmatrix} \\):<br>\n\\[ \\det(M) = 5(1) - 1(10) = 5 - 10 = -5 \\]<br>\n\\[ M^{-1} = \\frac{1}{-5} \\begin{pmatrix} 1 & -1 \\\\ -10 & 5 \\end{pmatrix} = \\begin{pmatrix} -\\frac{1}{5} & \\frac{1}{5} \\\\ 2 & -1 \\end{pmatrix} \\]<br>\nMaka penyelesaiannya:<br>\n\\[ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -\\frac{1}{5} & \\frac{1}{5} \\\\ 2 & -1 \\end{pmatrix} \\begin{pmatrix} 19 \\\\ 34 \\end{pmatrix} = \\begin{pmatrix} -\\frac{19}{5} + \\frac{34}{5} \\\\ 38 - 34 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\]<br>\nDiperoleh banyaknya sapi = 3 ekor dan kambing = 4 ekor.<br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    "id": 3,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menganalisis hasil operasi perkalian dua matriks. (4)",
    "kode": "25MATALJMTXM27SL-000000-2607",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_03.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah pabrik minuman tradisional memproduksi tiga jenis minuman yaitu wedang jahe (WJ), beras kencur (BK), dan kunir asem (KA). Dalam proses produksinya, digunakan tiga bahan utama yaitu jahe (J) dalam gram, gula merah (GM) dalam gram, dan air (A) dalam mililiter.\n</p>\n<p class=\"text-slate-700 mb-2\">Setiap botol minuman memerlukan bahan sebagai berikut:</p>\n<div class=\"my-3 text-center\">\n  \\[ \\begin{array}{rcc}\n  & \\begin{matrix} J & GM & A \\end{matrix} \\\\\n  \\begin{matrix} \\text{WJ} \\\\ \\text{BK} \\\\ \\text{KA} \\end{matrix} & \n  \\begin{pmatrix} 20 & 15 & 50 \\\\ 10 & 25 & 40 \\\\ 12 & 8 & k \\end{pmatrix}\n  \\end{array} \\]\n</div>\n<p class=\"text-slate-700 mb-2\">Pada suatu hari pabrik tersebut menerima pesanan minuman sebanyak:</p>\n<div class=\"my-2 text-center\">\n  \\[ \\begin{pmatrix} \\text{WJ} \\\\ \\text{BK} \\\\ \\text{KA} \\end{pmatrix} = \\begin{pmatrix} 100 \\\\ 120 \\\\ 80 \\end{pmatrix} \\]\n</div>\n<p class=\"text-slate-700 mb-2\">Total kebutuhan bahan baku yang digunakan adalah:</p>\n<div class=\"my-2 text-center\">\n  \\[ \\begin{pmatrix} J \\\\ GM \\\\ A \\end{pmatrix} = \\begin{pmatrix} 4360 \\\\ 4960 \\\\ 13000 \\end{pmatrix} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBanyak air yang dibutuhkan untuk memproduksi satu botol kunir asem (\\(k\\)) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "30 ml"
      },
      {
        "id": "B",
        "text": "35 ml"
      },
      {
        "id": "C",
        "text": "40 ml"
      },
      {
        "id": "D",
        "text": "45 ml"
      },
      {
        "id": "E",
        "text": "50 ml"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Perkalian Matriks dan Pemodelan Kebutuhan Air:</strong><br>\nMatriks kebutuhan per botol memiliki kolom air: WJ = 50 ml, BK = 40 ml, KA = \\(k\\) ml.<br>\nJumlah pesanan masing-masing botol:<br>\n\\(\\text{WJ} = 100\\) botol, \\(\\text{BK} = 120\\) botol, \\(\\text{KA} = 80\\) botol.<br><br>\nPersamaan total kebutuhan air \\(A\\):<br>\n\\[ 100(50) + 120(40) + 80(k) = 13000 \\]<br>\n\\[ 5000 + 4800 + 80k = 13000 \\]<br>\n\\[ 9800 + 80k = 13000 \\]<br>\n\\[ 80k = 13000 - 9800 = 3200 \\]<br>\n\\[ k = \\frac{3200}{80} = 40 \\text{ ml} \\]<br>\nJadi, kebutuhan air untuk satu botol kunir asem adalah 40 ml.<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 4,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menginterpretasi solusi permasalahan kontekstual yang dihasilkan menggunakan operasi matriks. (2)",
    "kode": "25MATALJMTXM27SL-000000-0718",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_04.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang pemilik hotel mengelola 3 hotel (Hotel A, Hotel B, dan Hotel C). Ketiga hotel memiliki tipe kamar yang sama dengan rincian kapasitas dan harga sewa per malam sebagai berikut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-full text-xs text-center border border-slate-300\">\n    <thead class=\"bg-amber-100 font-bold text-amber-950\">\n      <tr>\n        <th class=\"p-2 border\">Tipe Kamar</th>\n        <th class=\"p-2 border\">Hotel A</th>\n        <th class=\"p-2 border\">Hotel B</th>\n        <th class=\"p-2 border\">Hotel C</th>\n        <th class=\"p-2 border\">Harga (per malam)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"p-2 border font-semibold bg-amber-50\">Standard Room</td>\n        <td class=\"p-2 border\">9</td>\n        <td class=\"p-2 border\">6</td>\n        <td class=\"p-2 border\">7</td>\n        <td class=\"p-2 border font-medium\">Rp 150.000</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 border font-semibold bg-amber-50\">Deluxe Room</td>\n        <td class=\"p-2 border\">6</td>\n        <td class=\"p-2 border\">7</td>\n        <td class=\"p-2 border\">5</td>\n        <td class=\"p-2 border font-medium\">Rp 500.000</td>\n      </tr>\n      <tr>\n        <td class=\"p-2 border font-semibold bg-amber-50\">Suite Room</td>\n        <td class=\"p-2 border\">3</td>\n        <td class=\"p-2 border\">2</td>\n        <td class=\"p-2 border\">4</td>\n        <td class=\"p-2 border font-medium\">Rp 1.000.000</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBagaimana kondisi pendapatan ketiga hotel tersebut dalam 1 hari jika semua kamar terisi penuh? Pilih semua jawaban yang benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Pendapatan Hotel A dan Hotel C sama besar."
      },
      {
        "id": "B",
        "text": "Pendapatan Hotel B lebih besar daripada Hotel A."
      },
      {
        "id": "C",
        "text": "Pendapatan paling besar diperoleh dari Hotel C."
      },
      {
        "id": "D",
        "text": "Masing-masing hotel memiliki selisih pendapatan yang sama besar."
      },
      {
        "id": "E",
        "text": "Pendapatan yang diperoleh dari ketiga hotel tersebut lebih dari Rp20.000.000."
      }
    ],
    "kunci": [
      "C",
      "E"
    ],
    "pembahasan": "<strong>Analisis Pendapatan Harian Ketiga Hotel:</strong><br>\nMatriks harga kamar: \\( H = \\begin{pmatrix} 150.000 \\\\ 500.000 \\\\ 1.000.000 \\end{pmatrix} \\).<br><br>\n1. <strong>Pendapatan Hotel A:</strong><br>\n\\[ P_A = 9(150.000) + 6(500.000) + 3(1.000.000) = 1.350.000 + 3.000.000 + 3.000.000 = \\text{Rp } 7.350.000 \\]<br>\n2. <strong>Pendapatan Hotel B:</strong><br>\n\\[ P_B = 6(150.000) + 7(500.000) + 2(1.000.000) = 900.000 + 3.500.000 + 2.000.000 = \\text{Rp } 6.400.000 \\]<br>\n3. <strong>Pendapatan Hotel C:</strong><br>\n\\[ P_C = 7(150.000) + 5(500.000) + 4(1.000.000) = 1.050.000 + 2.500.000 + 4.000.000 = \\text{Rp } 7.550.000 \\]<br><br>\n4. <strong>Total Pendapatan Ketiga Hotel:</strong><br>\n\\[ P_{\\text{total}} = 7.350.000 + 6.400.000 + 7.550.000 = \\text{Rp } 21.300.000 \\]<br>\nNilai Rp 21.300.000 > Rp 20.000.000 (Pernyataan E Benar).<br>\nPendapatan Hotel C (Rp 7.550.000) adalah yang tertinggi di antara ketiganya (Pernyataan C Benar).<br>\nPernyataan A salah (\\(7.350.000 \\neq 7.550.000\\)), B salah (\\(6.400.000 < 7.350.000\\)), dan D salah (selisih tidak konstan).<br>\n<strong>Kunci Jawaban: C, E</strong>"
  },
  {
    "id": 5,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan nilai-nilai pembuat nol dari fungsi polinomial berorde tiga. (5)",
    "kode": "25MATALJPOLM29SL-000000-0746",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_05.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDi manakah koordinat titik perpotongan grafik fungsi \\( f(x) = x^3 + 3x^2 - 10x - 24 \\) terhadap sumbu X?\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPilih pada semua jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "(-2, 0)"
      },
      {
        "id": "B",
        "text": "(-1, 0)"
      },
      {
        "id": "C",
        "text": "(3, 0)"
      },
      {
        "id": "D",
        "text": "(4, 0)"
      },
      {
        "id": "E",
        "text": "(5, 0)"
      }
    ],
    "kunci": [
      "A",
      "C"
    ],
    "pembahasan": "<strong>Pembahasan Titik Potong Polinomial Sumbu X:</strong><br>\nTitik perpotongan kurva dengan sumbu X terjadi ketika \\( f(x) = 0 \\):<br>\n\\[ x^3 + 3x^2 - 10x - 24 = 0 \\]<br>\n1. <strong>Uji faktor rasional pembagi 24:</strong><br>\nUntuk \\( x = 3 \\):<br>\n\\[ f(3) = 3^3 + 3(3^2) - 10(3) - 24 = 27 + 27 - 30 - 24 = 0 \\quad \\text{(Faktor: } x - 3 \\text{)} \\]<br>\n2. <strong>Faktorisasi menggunakan pembagian sintetis (Horner):</strong><br>\nMembagi \\( x^3 + 3x^2 - 10x - 24 \\) dengan \\( (x - 3) \\):<br>\n\\[ x^3 + 3x^2 - 10x - 24 = (x - 3)(x^2 + 6x + 8) \\]<br>\nFaktorkan bentuk kuadrat:<br>\n\\[ x^2 + 6x + 8 = (x + 2)(x + 4) \\]<br>\nMaka bentuk pemfaktoran lengkapnya adalah:<br>\n\\[ f(x) = (x - 3)(x + 2)(x + 4) = 0 \\]<br>\nAkar-akar pembuat nol: \\( x_1 = 3 \\), \\( x_2 = -2 \\), \\( x_3 = -4 \\).<br>\nTitik potong sumbu X adalah \\( (3, 0) \\), \\( (-2, 0) \\), dan \\( (-4, 0) \\).<br>\nDari opsi yang tersedia, titik potong yang benar adalah \\((-2, 0)\\) dan \\((3, 0)\\).<br>\n<strong>Kunci Jawaban: A, C</strong>"
  },
  {
    "id": 6,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan hasil operasi aljabar dua parameter yang merupakan komponen dari bentuk polinomial dengan disertai informasi pembagi dan sisa hasil bagi. (8)",
    "kode": "25MATALJPOLM29SL-000000-2773",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_06.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui suku banyak \\( f(x) = x^4 + ax^3 + bx^2 + x - 6 \\) apabila dibagi oleh \\( x^2 + x + 1 \\) menghasilkan sisa \\( 5x - 1 \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai dari \\( a + b = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "-5"
      },
      {
        "id": "E",
        "text": "-7"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Teorema Sisa Polinomial Berderajat Empat:</strong><br>\nBerdasarkan algoritma pembagian polinomial:<br>\n\\[ f(x) = P(x) \\cdot H(x) + S(x) \\]<br>\nKarena derajat \\(f(x)\\) adalah 4 dan pembagi \\(P(x) = x^2 + x + 1\\) berderajat 2, maka hasil bagi \\(H(x)\\) berderajat 2 dengan koefisien utama 1:<br>\n\\[ H(x) = x^2 + cx + d \\]<br>\nSehingga:<br>\n\\[ x^4 + ax^3 + bx^2 + x - 6 = (x^2 + x + 1)(x^2 + cx + d) + (5x - 1) \\]<br>\nJabarkan perkalian \\((x^2 + x + 1)(x^2 + cx + d)\\):<br>\n\\[ = x^4 + cx^3 + dx^2 + x^3 + cx^2 + dx + x^2 + cx + d \\]<br>\n\\[ = x^4 + (c + 1)x^3 + (d + c + 1)x^2 + (c + d)x + d \\]<br>\nTambahkan sisa \\(5x - 1\\):<br>\n\\[ = x^4 + (c + 1)x^3 + (d + c + 1)x^2 + (c + d + 5)x + (d - 1) \\]<br><br>\nSamakan koefisien dengan \\(x^4 + ax^3 + bx^2 + x - 6\\):<br>\n1. <strong>Konstanta:</strong> \\( d - 1 = -6 \\implies d = -5 \\)<br>\n2. <strong>Koefisien \\(x\\):</strong> \\( c + d + 5 = 1 \\implies c + (-5) + 5 = 1 \\implies c = 1 \\)<br>\n3. <strong>Koefisien \\(x^3\\):</strong> \\( a = c + 1 = 1 + 1 = 2 \\)<br>\n4. <strong>Koefisien \\(x^2\\):</strong> \\( b = d + c + 1 = -5 + 1 + 1 = -3 \\)<br><br>\nNilai dari \\( a + b \\):<br>\n\\[ a + b = 2 + (-3) = -1 \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 7,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan hasil perkalian skalar dengan polinomial yang tepat dalam konteks permasalahan sehari-hari. (6)",
    "kode": "25MATALJPOLM28SL-000000-2861",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_07.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah drum bahan bakar logam mengalami penambahan kapasitas volume saat terkena panas, yang dapat dinyatakan dalam fungsi berikut:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ V(T) = 0{,}05T^3 + 0{,}4T^2 + 20T \\]\n</div>\n<p class=\"text-slate-700 mb-2\">\ndengan \\(T\\) adalah suhu dalam derajat Celsius dan \\(V(T)\\) adalah penambahan volume dalam liter.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nApabila terdapat 10 drum dengan jenis dan ukuran yang sama, total penambahan volume dari drum-drum tersebut ketika terkena panas dengan suhu yang sama dapat dinyatakan dengan ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 50T^3 + 40T^2 + 200T \\)"
      },
      {
        "id": "B",
        "text": "\\( 50T^3 + 4T^2 + 200T \\)"
      },
      {
        "id": "C",
        "text": "\\( 5T^3 + 4T^2 + 200T \\)"
      },
      {
        "id": "D",
        "text": "\\( 0{,}5T^3 + 4T^2 + 200T \\)"
      },
      {
        "id": "E",
        "text": "\\( 0{,}5T^3 + 0{,}4T^2 + 200T \\)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Perkalian Skalar Polinomial:</strong><br>\nDiberikan fungsi penambahan volume untuk 1 buah drum:<br>\n\\[ V(T) = 0{,}05T^3 + 0{,}4T^2 + 20T \\]<br>\nUntuk 10 drum identik, total pertambahan volume adalah hasil kali skalar 10 dengan fungsi \\(V(T)\\):<br>\n\\[ V_{\\text{total}}(T) = 10 \\cdot V(T) \\]<br>\n\\[ = 10 \\cdot (0{,}05T^3 + 0{,}4T^2 + 20T) \\]<br>\n\\[ = (10 \\times 0{,}05)T^3 + (10 \\times 0{,}4)T^2 + (10 \\times 20)T \\]<br>\n\\[ = 0{,}5T^3 + 4T^2 + 200T \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 8,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan ukuran dimensi bangun ruang yang diketahui volumenya. (7)",
    "kode": "25MATALJPOLM29SL-000000-0707",
    "tipe": "kategori",
    "img": "/tka/img/matematika-lanjut/soal_08.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah perusahaan menawarkan saham kepada pembeli. Perusahaan menyiapkan modal saham yang akan dijual dan dapat dinyatakan sebagai fungsi \\( f(x) = x^3 - 70x^2 - 600x + 74.000 \\), di mana nilai \\(f(x)\\) dalam jutaan rupiah dan \\(x\\) menyatakan banyak saham dalam satuan unit saham.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nApabila modal saham yang dimiliki perusahaan tersebut adalah 2 milyar (2.000 juta), tentukan Mungkin atau Tidak Mungkin perusahaan dapat menjual sejumlah unit saham berikut!\n</p>",
    "kategoriConfig": {
      "columns": [
        "Mungkin",
        "Tidak Mungkin"
      ],
      "rows": [
        {
          "id": "r1",
          "label": "30 unit"
        },
        {
          "id": "r2",
          "label": "40 unit"
        },
        {
          "id": "r3",
          "label": "60 unit"
        }
      ]
    },
    "kunci": {
      "r1": "Tidak Mungkin",
      "r2": "Mungkin",
      "r3": "Mungkin"
    },
    "pembahasan": "<strong>Pembahasan Nilai Suku Banyak Modal Saham:</strong><br>\nModal yang disiapkan adalah 2 miliar rupiah = 2.000 juta rupiah.<br>\nMaka persamaan polinomial yang harus dipenuhi adalah:<br>\n\\[ f(x) = 2.000 \\]<br>\n\\[ x^3 - 70x^2 - 600x + 74.000 = 2.000 \\]<br>\n\\[ x^3 - 70x^2 - 600x + 72.000 = 0 \\]<br><br>\nUji nilai-nilai unit saham \\(x\\):<br>\n1. <strong>Untuk \\(x = 30\\):</strong><br>\n\\[ 30^3 - 70(30^2) - 600(30) + 72.000 = 27.000 - 63.000 - 18.000 + 72.000 = 18.000 \\neq 0 \\]<br>\n(Tidak memenuhi, sehingga 30 unit <strong>Tidak Mungkin</strong>).<br><br>\n2. <strong>Untuk \\(x = 40\\):</strong><br>\n\\[ 40^3 - 70(40^2) - 600(40) + 72.000 = 64.000 - 112.000 - 24.000 + 72.000 = 0 \\]<br>\n(Memenuhi akar persamaan, sehingga 40 unit <strong>Mungkin</strong>).<br><br>\n3. <strong>Untuk \\(x = 60\\):</strong><br>\n\\[ 60^3 - 70(60^2) - 600(60) + 72.000 = 216.000 - 252.000 - 36.000 + 72.000 = 0 \\]<br>\n(Memenuhi akar persamaan, sehingga 60 unit <strong>Mungkin</strong>).<br><br>\nFaktorisasi penuh: \\( (x - 40)(x - 60)(x + 30) = 0 \\).<br>\n<strong>Kunci: 30 unit (Tidak Mungkin), 40 unit (Mungkin), 60 unit (Mungkin)</strong>"
  },
  {
    "id": 9,
    "elemen": "Aljabar",
    "subelemen": "Fungsi",
    "indikator": "Menginterpretasikan model pertumbuhan bentuk eksponensial dalam konteks kehidupan sehari-hari. (9)",
    "kode": "25MATALJFNGM30SL-000000-0398",
    "tipe": "kategori",
    "img": "/tka/img/matematika-lanjut/soal_09.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPopulasi kelinci di suatu pulau dimodelkan dengan fungsi eksponensial, yaitu:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ K(t) = 4 \\cdot 2^{t/4} \\]\n</div>\n<p class=\"text-slate-700 mb-2\">\ndengan \\(t\\) menyatakan waktu dalam satuan tahun dan \\(K(t)\\) menyatakan populasi dalam ribu ekor.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBagaimana interpretasi yang tepat mengenai model eksponensial populasi kelinci tersebut? Tentukan Benar atau Salah untuk setiap pernyataan berikut!\n</p>",
    "kategoriConfig": {
      "columns": [
        "Benar",
        "Salah"
      ],
      "rows": [
        {
          "id": "r1",
          "label": "Setiap 4 tahun populasi bertambah menjadi 4 kalinya."
        },
        {
          "id": "r2",
          "label": "Pada saat awal populasi kelinci berjumlah 4 ribu ekor."
        },
        {
          "id": "r3",
          "label": "Populasi mencapai 1 juta sebelum 20 tahun dari awal pengamatan."
        }
      ]
    },
    "kunci": {
      "r1": "Salah",
      "r2": "Benar",
      "r3": "Salah"
    },
    "pembahasan": "<strong>Analisis Model Pertumbuhan Eksponensial:</strong><br>\nModel populasi: \\( K(t) = 4 \\cdot 2^{t/4} \\) (dalam ribu ekor).<br><br>\n1. <strong>Pernyataan 1: \"Setiap 4 tahun populasi bertambah menjadi 4 kalinya.\"</strong><br>\nSaat selang waktu bertambah 4 tahun (\\(\\Delta t = 4\\)):<br>\n\\[ K(t + 4) = 4 \\cdot 2^{(t+4)/4} = 4 \\cdot 2^{t/4} \\cdot 2^1 = 2 \\cdot K(t) \\]<br>\nPopulasi bertambah menjadi <strong>2 kalinya</strong> (bukan 4 kalinya). &rarr; <strong>Salah</strong>.<br><br>\n2. <strong>Pernyataan 2: \"Pada saat awal populasi kelinci berjumlah 4 ribu ekor.\"</strong><br>\nPada saat awal (\\(t = 0\\)):<br>\n\\[ K(0) = 4 \\cdot 2^0 = 4 \\text{ ribu ekor} \\]<br>\nNilai ini sesuai. &rarr; <strong>Benar</strong>.<br><br>\n3. <strong>Pernyataan 3: \"Populasi mencapai 1 juta sebelum 20 tahun dari awal pengamatan.\"</strong><br>\n1 juta ekor = 1.000 ribu ekor.<br>\nPada tahun ke-20 (\\(t = 20\\)):<br>\n\\[ K(20) = 4 \\cdot 2^{20/4} = 4 \\cdot 2^5 = 4 \\cdot 32 = 128 \\text{ ribu ekor} \\]<br>\nKarena 128 ribu ekor masih jauh di bawah 1.000 ribu ekor, populasi belum mencapai 1 juta pada 20 tahun pertama (baru tercapai sekitar \\(t \\approx 32\\) tahun). &rarr; <strong>Salah</strong>.<br><br>\n<strong>Kunci: Pernyataan 1 (Salah), Pernyataan 2 (Benar), Pernyataan 3 (Salah)</strong>"
  },
  {
    "id": 10,
    "elemen": "Aljabar",
    "subelemen": "Fungsi",
    "indikator": "Menentukan beberapa nilai yang memenuhi persyaratan tertentu dari grafik fungsi eksponensial dalam konteks permasalahan sehari-hari. (10)",
    "kode": "25MATALJFNGM30SL-000000-2955",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_10.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang peneliti lingkungan melakukan pengamatan terhadap pertumbuhan tanaman eceng gondok di beberapa danau sekitar wilayah X. Pengamatan dilakukan selama 3 tahun dan grafik menunjukkan pertumbuhan eceng gondok berpola eksponensial: pada tahun ke-0 seluas 10 m&sup2;, tahun ke-1 seluas 70 m&sup2;, dan tahun ke-2 seluas 490 m&sup2;.\n</p>\n<p class=\"text-slate-700 mb-2\">\nSetelah 3 tahun pengamatan, peneliti mencatat banyak tanaman eceng gondok di beberapa wilayah perairan tersebut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-full text-xs text-center border border-slate-300\">\n    <thead class=\"bg-blue-100 font-bold text-blue-950\">\n      <tr>\n        <th class=\"p-2 border\">Wilayah Perairan</th>\n        <th class=\"p-2 border\">Luas Area Tertutupi Eceng Gondok (m&sup2;)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"p-2 border font-semibold\">Danau A</td><td class=\"p-2 border\">15.000</td></tr>\n      <tr><td class=\"p-2 border font-semibold\">Danau B</td><td class=\"p-2 border\">16.500</td></tr>\n      <tr><td class=\"p-2 border font-semibold\">Danau C</td><td class=\"p-2 border\">17.000</td></tr>\n      <tr><td class=\"p-2 border font-semibold\">Danau D</td><td class=\"p-2 border\">17.500</td></tr>\n      <tr><td class=\"p-2 border font-semibold\">Danau E</td><td class=\"p-2 border\">18.000</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, wilayah perairan manakah dengan luas area yang tertutupi tanaman eceng gondok lebih dari 49 m&sup2; pada awal pengamatan dilakukan? Pilih semua jawaban yang benar!\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Danau A"
      },
      {
        "id": "B",
        "text": "Danau B"
      },
      {
        "id": "C",
        "text": "Danau C"
      },
      {
        "id": "D",
        "text": "Danau D"
      },
      {
        "id": "E",
        "text": "Danau E"
      }
    ],
    "kunci": [
      "C",
      "D",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Pertumbuhan Eksponensial Luas Eceng Gondok:</strong><br>\nDari grafik pengamatan:<br>\n\\[ L(0) = 10 \\text{ m}^2, \\quad L(1) = 70 \\text{ m}^2, \\quad L(2) = 490 \\text{ m}^2 \\]<br>\nRasio pertumbuhan tahunan: \\( r = \\frac{70}{10} = \\frac{490}{70} = 7 \\).<br>\nFungsi pertumbuhan eksponensial dalam 3 tahun: \\( L(3) = L_0 \\cdot 7^3 = L_0 \\cdot 343 \\).<br>\nSehingga luas awal masing-masing danau pada tahun ke-0 adalah \\( L_0 = \\frac{L(3)}{343} \\).<br><br>\nKriteria: Luas awal \\( L_0 > 49 \\text{ m}^2 \\iff L(3) > 49 \\times 343 = 16.807 \\text{ m}^2 \\).<br>\nMari uji luas pada tahun ke-3 untuk tiap danau:<br>\n1. Danau A: \\( 15.000 < 16.807 \\) (Luas awal \\( \\approx 43{,}73 \\text{ m}^2 \\)) &rarr; Tidak memenuhi.<br>\n2. Danau B: \\( 16.500 < 16.807 \\) (Luas awal \\( \\approx 48{,}10 \\text{ m}^2 \\)) &rarr; Tidak memenuhi.<br>\n3. Danau C: \\( 17.000 > 16.807 \\) (Luas awal \\( \\approx 49{,}56 \\text{ m}^2 \\)) &rarr; Memenuhi.<br>\n4. Danau D: \\( 17.500 > 16.807 \\) (Luas awal \\( \\approx 51{,}02 \\text{ m}^2 \\)) &rarr; Memenuhi.<br>\n5. Danau E: \\( 18.000 > 16.807 \\) (Luas awal \\( \\approx 52{,}48 \\text{ m}^2 \\)) &rarr; Memenuhi.<br><br>\n<strong>Kunci Jawaban: C, D, E</strong>"
  },
  {
    "id": 11,
    "elemen": "Aljabar",
    "subelemen": "Fungsi",
    "indikator": "Menyimpulkan karakteristik dari suatu model fungsi trigonometri dalam konteks permasalahan sehari-hari. (11)",
    "kode": "25MATALJFNGM30SL-000000-2856",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_11.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGrafik berikut menyatakan perubahan kedalaman air laut di sebuah teluk:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ y = a + b \\cos\\left(\\frac{1}{6}\\pi t\\right) \\]\n</div>\n<p class=\"text-slate-700 mb-2\">\nPada grafik tersebut, \\(y\\) menyatakan kedalaman air laut dalam meter, \\(t\\) dalam jam, serta \\(a\\) dan \\(b\\) adalah konstanta. Nilai \\(t = 6\\) menyatakan 6 jam setelah pukul 00.00. Nilai maksimum adalah 14,3 meter (pada \\(t = 0\\) dan \\(t = 12\\)) dan minimum adalah 10,3 meter (pada \\(t = 6\\)).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nWaktu saat kedalaman air laut mencapai 12,3 meter untuk ketiga kalinya setelah pukul 00.00 adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "3 jam"
      },
      {
        "id": "B",
        "text": "9 jam"
      },
      {
        "id": "C",
        "text": "10 jam"
      },
      {
        "id": "D",
        "text": "12 jam"
      },
      {
        "id": "E",
        "text": "15 jam"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan Karakteristik Gelombang Pasang Surut Trigonometri:</strong><br>\nDari kurva grafik kedalaman air laut:<br>\n1. Nilai maksimum: \\( y_{\\max} = 14{,}3 \\text{ meter} \\)<br>\n2. Nilai minimum: \\( y_{\\min} = 10{,}3 \\text{ meter} \\)<br>\nKonstanta pergeseran vertikal (garis tengah):<br>\n\\[ a = \\frac{y_{\\max} + y_{\\min}}{2} = \\frac{14{,}3 + 10{,}3}{2} = 12{,}3 \\text{ meter} \\]<br>\nAmplitudo gelombang:<br>\n\\[ b = \\frac{y_{\\max} - y_{\\min}}{2} = \\frac{14{,}3 - 10{,}3}{2} = 2 \\text{ meter} \\]<br>\nModel fungsi lengkap:<br>\n\\[ y(t) = 12{,}3 + 2 \\cos\\left(\\frac{\\pi t}{6}\\right) \\]<br><br>\nMencari waktu ketika kedalaman \\(y = 12{,}3\\) meter:<br>\n\\[ 12{,}3 + 2 \\cos\\left(\\frac{\\pi t}{6}\\right) = 12{,}3 \\implies \\cos\\left(\\frac{\\pi t}{6}\\right) = 0 \\]<br>\nNilai nol dari fungsi kosinus tercapai saat argumen sama dengan \\( \\frac{\\pi}{2} + k\\pi \\):<br>\n\\[ \\frac{\\pi t}{6} = \\frac{\\pi}{2}, \\; \\frac{3\\pi}{2}, \\; \\frac{5\\pi}{2}, \\dots \\]<br>\nKalikan kedua ruas dengan \\(\\frac{6}{\\pi}\\):<br>\n1. Kali pertama: \\( t_1 = \\frac{1}{2} \\times 6 = 3 \\) jam.<br>\n2. Kali kedua: \\( t_2 = \\frac{3}{2} \\times 6 = 9 \\) jam.<br>\n3. Kali ketiga: \\( t_3 = \\frac{5}{2} \\times 6 = 15 \\) jam.<br><br>\nKedalaman 12,3 meter tercapai untuk ketiga kalinya pada \\(t = 15\\) jam.<br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    "id": 12,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menentukan vektor-vektor diagonal yang terdapat pada suatu ruang berbentuk balok. (12)",
    "kode": "25MATGMPVKTM32SL-000000-0557",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_12.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui vektor:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\vec{AB} = \\begin{pmatrix} 2m \\\\ m + 3 \\\\ m \\end{pmatrix} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika nilai panjang vektor \\( |\\vec{AB}| = 9 \\) satuan panjang, maka nilai \\(m\\) yang memenuhi vektor \\(\\vec{AB}\\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "-4 atau -3"
      },
      {
        "id": "B",
        "text": "-4 atau 3"
      },
      {
        "id": "C",
        "text": "-3 atau 4"
      },
      {
        "id": "D",
        "text": "3 atau 4"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Panjang Vektor pada Dimensi Tiga:</strong><br>\nPanjang vektor \\( \\vec{AB} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} \\) didefinisikan sebagai:<br>\n\\[ |\\vec{AB}| = \\sqrt{x^2 + y^2 + z^2} \\]<br>\nDiberikan \\( |\\vec{AB}| = 9 \\):<br>\n\\[ \\sqrt{(2m)^2 + (m + 3)^2 + m^2} = 9 \\]<br>\nKuadratkan kedua ruas:<br>\n\\[ 4m^2 + (m^2 + 6m + 9) + m^2 = 81 \\]<br>\n\\[ 6m^2 + 6m + 9 = 81 \\]<br>\n\\[ 6m^2 + 6m - 72 = 0 \\]<br>\nBagi kedua ruas dengan 6:<br>\n\\[ m^2 + m - 12 = 0 \\]<br>\nFaktorkan persamaan kuadrat:<br>\n\\[ (m + 4)(m - 3) = 0 \\]<br>\nDiperoleh: \\( m = -4 \\) atau \\( m = 3 \\).<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 13,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menentukan hasil operasi nilai-nilai parameter pembentuk vektor-vektor yang berelasi dalam bangun segiempat. (13)",
    "kode": "25MATGMPVKTM32SL-000000-2576",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_13.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui trapesium sama kaki \\(ABCD\\) dengan \\(AD = BC\\) dan titik \\(A(0,0)\\). Vektor-vektor pembentuk trapesium adalah:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\vec{AD} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}, \\quad \\vec{AB} = \\begin{pmatrix} 6 \\\\ 0 \\end{pmatrix}, \\quad \\text{dan} \\quad \\vec{BC} = \\begin{pmatrix} a \\\\ b \\end{pmatrix} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai dari \\( a^2 + 2b = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "10"
      },
      {
        "id": "E",
        "text": "13"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Vektor pada Bangun Trapesium Sama Kaki:</strong><br>\n1. Titik-titik sudut trapesium:<br>\n   - \\( A(0, 0) \\)<br>\n   - \\( B = A + \\vec{AB} = (0, 0) + (6, 0) = (6, 0) \\)<br>\n   - \\( D = A + \\vec{AD} = (0, 0) + (1, 4) = (1, 4) \\)<br>\n2. Karena \\(ABCD\\) adalah trapesium dengan sisi sejajar \\(AB\\) yang terletak pada sumbu X (horizontal), maka sisi atas \\(CD\\) juga harus horizontal, sehingga ordinat \\(y_C = y_D = 4\\).<br>\n3. Karena trapesium sama kaki dengan \\(AD = BC\\), maka kemiringan kaki \\(BC\\) merupakan refleksi simetris dari kaki \\(AD\\):<br>\n   - Kaki \\(AD\\) bergeser dari \\(x = 0\\) ke \\(x = 1\\) (ke arah kanan sebesar 1 satuan).<br>\n   - Maka kaki \\(BC\\) bergeser dari titik \\(B(6, 0)\\) ke arah kiri sebesar 1 satuan, sehingga \\(x_C = 6 - 1 = 5\\).<br>\n   Diperoleh koordinat \\( C(5, 4) \\).<br>\n4. Menentukan vektor \\( \\vec{BC} \\):<br>\n\\[ \\vec{BC} = C - B = (5 - 6, 4 - 0) = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix} \\]<br>\nSehingga nilai \\( a = -1 \\) dan \\( b = 4 \\).<br><br>\nNilai yang ditanyakan:<br>\n\\[ a^2 + 2b = (-1)^2 + 2(4) = 1 + 8 = 9 \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 14,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menganalisis lintasan yang panjang vektornya memenuhi kriteria tertentu menggunakan konsep perbandingan vektor. (14)",
    "kode": "25MATGMPVKTM32SL-000000-2830",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_14.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah kereta api sedang melaju dengan kecepatan konstan pada sebuah lintasan lurus dari stasiun A sampai stasiun E. Diketahui koordinat stasiun A dan E (dalam km) berturut-turut adalah \\( (2, 3, 5) \\) dan \\( (11, 6, 8) \\).\n</p>\n<p class=\"text-slate-700 mb-2\">\nWaktu tempuh antarkereta stasiun:\n</p>\n<ul class=\"list-disc pl-5 mb-3 space-y-1 text-slate-700\">\n  <li>Stasiun A ke B: 5 menit</li>\n  <li>Stasiun B ke C: 3 menit</li>\n  <li>Stasiun C ke D: 2 menit</li>\n  <li>Stasiun D ke E: 3 menit</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah antarkereta stasiun yang jaraknya kurang dari 3,5 km? Pilih semua jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "AB"
      },
      {
        "id": "B",
        "text": "BC"
      },
      {
        "id": "C",
        "text": "CD"
      },
      {
        "id": "D",
        "text": "DE"
      },
      {
        "id": "E",
        "text": "CE"
      }
    ],
    "kunci": [
      "B",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Perbandingan Jarak Berdasarkan Panjang Vektor Lintasan:</strong><br>\n1. <strong>Vektor perpindahan total \\( \\vec{AE} \\):</strong><br>\n\\[ \\vec{AE} = E - A = (11 - 2, 6 - 3, 8 - 5) = (9, 3, 3) \\]<br>\n2. <strong>Panjang lintasan total \\( |\\vec{AE}| \\):</strong><br>\n\\[ |\\vec{AE}| = \\sqrt{9^2 + 3^2 + 3^2} = \\sqrt{81 + 9 + 9} = \\sqrt{99} = 3\\sqrt{11} \\approx 9{,}95 \\text{ km} \\]<br>\n3. <strong>Total waktu tempuh dari A ke E:</strong><br>\n\\[ t_{\\text{total}} = 5 + 3 + 2 + 3 = 13 \\text{ menit} \\]<br>\nKarena melaju dengan kelajuan konstan, jarak sebanding langsung dengan waktu tempuh:<br>\n\\[ s = \\frac{t}{13} \\times \\sqrt{99} \\approx \\frac{t}{13} \\times 9{,}95 \\text{ km} \\]<br><br>\nHitung jarak untuk masing-masing ruas stasiun:<br>\n- <strong>Ruas AB:</strong> \\( \\frac{5}{13} \\times 9{,}95 \\approx 3{,}83 \\text{ km} \\) (&gt; 3,5 km).<br>\n- <strong>Ruas BC:</strong> \\( \\frac{3}{13} \\times 9{,}95 \\approx 2{,}30 \\text{ km} \\) (&lt; 3,5 km &rarr; <strong>Memenuhi</strong>).<br>\n- <strong>Ruas CD:</strong> \\( \\frac{2}{13} \\times 9{,}95 \\approx 1{,}53 \\text{ km} \\) (&lt; 3,5 km &rarr; <strong>Memenuhi</strong>).<br>\n- <strong>Ruas DE:</strong> \\( \\frac{3}{13} \\times 9{,}95 \\approx 2{,}30 \\text{ km} \\) (&lt; 3,5 km &rarr; <strong>Memenuhi</strong>).<br>\n- <strong>Ruas CE:</strong> \\( CD + DE \\approx 1{,}53 + 2{,}30 = 3{,}83 \\text{ km} \\) (&gt; 3,5 km).<br><br>\nJarak antarkereta stasiun yang kurang dari 3,5 km adalah <strong>BC, CD, dan DE</strong>.<br>\n<strong>Kunci Jawaban: B, C, D</strong>"
  },
  {
    "id": 15,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Lingkaran",
    "indikator": "Mengidentifikasi persamaan-persamaan lingkaran yang sepusat. (15)",
    "kode": "25MATGMPLKRM33SL-000000-2848",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_15.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan gambar lingkaran pada bidang Cartesius! Titik pusat lingkaran \\(P\\) terletak pada koordinat \\((-3, 4)\\) dan diameternya adalah 4 satuan.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPersamaan lingkaran yang sepusat (konsentris) dengan lingkaran pada gambar di atas adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( x^2 + 6x + y^2 - 8y + 16 = 0 \\)"
      },
      {
        "id": "B",
        "text": "\\( x^2 - 6x + y^2 - 8y + 21 = 0 \\)"
      },
      {
        "id": "C",
        "text": "\\( x^2 + 6x + y^2 + 8y + 16 = 0 \\)"
      },
      {
        "id": "D",
        "text": "\\( x^2 - 8x + y^2 - 6y + 16 = 0 \\)"
      },
      {
        "id": "E",
        "text": "\\( x^2 + 8x + y^2 - 6y + 21 = 0 \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Lingkaran Konsentris (Sepusat):</strong><br>\nDari gambar grafik Cartesius, titik pusat lingkaran adalah \\( P(a, b) = (-3, 4) \\).<br>\nDua lingkaran dikatakan sepusat jika memiliki koordinat pusat yang sama.<br>\nBentuk umum persamaan lingkaran dengan pusat \\((-3, 4)\\):<br>\n\\[ (x - a)^2 + (y - b)^2 = R^2 \\]<br>\n\\[ (x + 3)^2 + (y - 4)^2 = R^2 \\]<br>\n\\[ x^2 + 6x + 9 + y^2 - 8y + 16 - R^2 = 0 \\]<br>\n\\[ x^2 + 6x + y^2 - 8y + (25 - R^2) = 0 \\]<br><br>\nPerhatikan koefisien variabel linier:<br>\n- Koefisien \\(x\\) harus \\(+6\\) (karena pusat \\(x = -\\frac{A}{2} = -\\frac{6}{2} = -3\\)).<br>\n- Koefisien \\(y\\) harus \\(-8\\) (karena pusat \\(y = -\\frac{B}{2} = -\\frac{-8}{2} = 4\\)).<br><br>\nMemeriksa opsi A:<br>\n\\[ x^2 + 6x + y^2 - 8y + 16 = 0 \\]<br>\nPusat lingkaran A: \\( \\left(-\\frac{6}{2}, -\\frac{-8}{2}\\right) = (-3, 4) \\). Jari-jari: \\( R = \\sqrt{(-3)^2 + 4^2 - 16} = \\sqrt{9 + 16 - 16} = 3 \\).<br>\nMaka lingkaran pada opsi A sepusat dengan lingkaran pada gambar.<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 16,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Lingkaran",
    "indikator": "Menentukan koordinat titik singgung dari garis-garis singgung lingkaran yang tegak lurus terhadap suatu garis tertentu. (16)",
    "kode": "25MATGMPLKRM33SL-000000-2609",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_16.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan gambar! Garis \\(f\\) melalui titik \\(C(-1, 0)\\) dan \\(D(0, 2)\\). Lingkaran memiliki titik pusat \\(A(2, -3)\\) dan salah satu titik pada lingkaran adalah \\(B(3, -1)\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan semua koordinat titik singgung lingkaran dari garis-garis singgung lingkaran yang tegak lurus terhadap garis \\(f\\)! Pilih semua jawaban benar!\n</p>",
    "options": [
      {
        "id": "A",
        "text": "(3, 1)"
      },
      {
        "id": "B",
        "text": "(1, -5)"
      },
      {
        "id": "C",
        "text": "(-1, 5)"
      },
      {
        "id": "D",
        "text": "(3, -1)"
      },
      {
        "id": "E",
        "text": "(-3, -1)"
      }
    ],
    "kunci": [
      "B",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Titik Singgung Lingkaran:</strong><br>\n1. <strong>Gradien garis \\(f\\):</strong><br>\nMelalui \\(C(-1, 0)\\) dan \\(D(0, 2)\\):<br>\n\\[ m_f = \\frac{2 - 0}{0 - (-1)} = 2 \\]<br>\n2. <strong>Gradien garis singgung \\(g\\):</strong><br>\nKarena garis singgung tegak lurus garis \\(f\\), maka \\( m_g \\cdot m_f = -1 \\implies m_g = -\\frac{1}{2} \\).<br>\n3. <strong>Gradien jari-jari ke titik singgung:</strong><br>\nGaris jari-jari selalu tegak lurus terhadap garis singgung di titik singgungnya, sehingga:<br>\n\\[ m_r = -\\frac{1}{m_g} = 2 \\]<br>\nArtinya titik singgung \\((x_s, y_s)\\) terletak pada garis yang melalui pusat \\(A(2, -3)\\) dengan gradien 2:<br>\n\\[ y - (-3) = 2(x - 2) \\implies y + 3 = 2x - 4 \\implies y = 2x - 7 \\]<br>\n4. <strong>Jari-jari lingkaran:</strong><br>\nJarak titik pusat \\(A(2, -3)\\) ke titik \\(B(3, -1)\\) pada lingkaran:<br>\n\\[ r^2 = (3 - 2)^2 + (-1 - (-3))^2 = 1^2 + 2^2 = 5 \\implies r = \\sqrt{5} \\]<br>\n5. <strong>Koordinat titik singgung:</strong><br>\nSubstitusikan \\( y + 3 = 2(x - 2) \\) ke persamaan lingkaran \\((x - 2)^2 + (y + 3)^2 = 5\\):<br>\n\\[ (x - 2)^2 + [2(x - 2)]^2 = 5 \\implies 5(x - 2)^2 = 5 \\implies (x - 2)^2 = 1 \\]<br>\n\\[ x - 2 = \\pm 1 \\]<br>\n- Jika \\( x - 2 = 1 \\implies x = 3 \\), maka \\( y = 2(3) - 7 = -1 \\implies (3, -1) \\).<br>\n- Jika \\( x - 2 = -1 \\implies x = 1 \\), maka \\( y = 2(1) - 7 = -5 \\implies (1, -5) \\).<br><br>\nTitik-titik singgungnya adalah \\( (1, -5) \\) dan \\( (3, -1) \\).<br>\n<strong>Kunci Jawaban: B, D</strong>"
  },
  {
    "id": 17,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Lingkaran",
    "indikator": "Menganalisis hubungan luas area dari suatu objek (gabungan beberapa bangun datar) untuk menyelesaikan masalah. (17)",
    "kode": "25MATGMPLKRM34SL-000000-2771",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_17.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu rumah makan memasang gambar rambu lalu lintas balai pertolongan pertama pada papan berbentuk persegi berukuran 40 cm &times; 40 cm. Rambu tersebut terdiri dari:\n</p>\n<ul class=\"list-disc pl-5 mb-3 space-y-1 text-slate-700\">\n  <li>Empat bidang sudut berwarna <strong>biru</strong> di luar lingkaran (lingkaran berdiameter 40 cm).</li>\n  <li>Cincin lingkaran berwarna <strong>hitam</strong> dengan diameter luar 40 cm (jari-jari 20 cm) dan jari-jari dalam 14 cm.</li>\n  <li>Daerah lingkaran dalam (jari-jari 14 cm) memuat simbol palang merah simetris dengan lebar palang 10 cm, sisanya berwarna <strong>putih</strong>.</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nCat warna apakah yang lebih banyak digunakan dibanding cat warna hitam? Pilih semua jawaban benar!\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Setengah hitam dan biru."
      },
      {
        "id": "B",
        "text": "Setengah hitam dan merah."
      },
      {
        "id": "C",
        "text": "Setengah hitam dan putih."
      },
      {
        "id": "D",
        "text": "Biru dan putih."
      },
      {
        "id": "E",
        "text": "Biru dan merah."
      }
    ],
    "kunci": [
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Perbandingan Luas Warna Rambu:</strong><br>\nGunakan \\(\\pi \\approx \\frac{22}{7}\\):<br>\n1. <strong>Luas total papan:</strong> \\( 40 \\times 40 = 1600 \\text{ cm}^2 \\).<br>\n2. <strong>Luas warna Biru (luar lingkaran \\(r=20\\)):</strong><br>\n\\[ L_{\\text{biru}} = 1600 - \\pi (20)^2 = 1600 - 400(3{,}14) \\approx 1600 - 1256 = 344 \\text{ cm}^2 \\]<br>\n3. <strong>Luas cincin Hitam:</strong><br>\n\\[ L_{\\text{hitam}} = \\pi (20^2 - 14^2) = \\frac{22}{7}(400 - 196) = \\frac{22}{7}(204) \\approx 641{,}14 \\text{ cm}^2 \\]<br>\nSetengah luas hitam: \\( \\frac{1}{2} L_{\\text{hitam}} \\approx 320{,}57 \\text{ cm}^2 \\).<br>\n4. <strong>Luas lingkaran dalam (\\(r=14\\)):</strong><br>\n\\[ L_{\\text{dalam}} = \\frac{22}{7} \\times 14^2 = 616 \\text{ cm}^2 \\]<br>\nPalang merah berada di dalam lingkaran ini. Luas palang merah mendekati \\( 260 \\text{ cm}^2 \\), sehingga luas putih (latar lingkaran dalam) adalah \\( L_{\\text{putih}} \\approx 616 - 260 = 356 \\text{ cm}^2 \\).<br><br>\nMemeriksa kombinasi luas warna terhadap cat warna hitam (641 cm&sup2;):<br>\n- <strong>Biru dan Putih:</strong> \\( 344 + 356 = 700 \\text{ cm}^2 > 641 \\text{ cm}^2 \\) (Lebih banyak &rarr; <strong>Benar</strong>).<br>\n- <strong>Setengah hitam dan Putih:</strong> \\( 320{,}57 + 356 = 676{,}57 \\text{ cm}^2 > 641 \\text{ cm}^2 \\) (Lebih banyak &rarr; <strong>Benar</strong>).<br>\n<strong>Kunci Jawaban: C, D</strong>"
  },
  {
    "id": 18,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Lingkaran",
    "indikator": "Menentukan kesesuaian ukuran-ukuran objek berdasarkan konsep lingkaran dalam konteks permasalahan sehari-hari. (18)",
    "kode": "25MATGMPLKRM34SL-000000-0588",
    "tipe": "kategori",
    "img": "/tka/img/matematika-lanjut/soal_18.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPak Baskara membuat daun pintu dengan ornamen kaca patri berbentuk bulat di tengahnya. Rincian ornamen:\n</p>\n<ul class=\"list-disc pl-5 mb-3 space-y-1 text-slate-700\">\n  <li>Luas 1 potong kaca merah berbentuk tembereng adalah \\( 456 \\text{ cm}^2 \\). Gunakan pendekatan \\( \\pi = 3{,}14 \\) dan \\( \\sqrt{2} \\approx 1{,}4 \\).</li>\n  <li>Kerangka ornamen terbuat dari logam berupa keliling lingkaran dan dua diagonal garis tengah bersilang tegak lurus serta tali busur yang membentuk persegi.</li>\n  <li>Kriteria <strong>Pas</strong> adalah panjang logam cukup untuk membuat kerangka dan sisa bahan tidak lebih dari 1 meter (&le; 100 cm).</li>\n</ul>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-full text-xs text-center border border-slate-300\">\n    <thead class=\"bg-amber-100 font-bold\">\n      <tr><th class=\"p-2 border\">Jenis Logam</th><th class=\"p-2 border\">Logam A</th><th class=\"p-2 border\">Logam B</th><th class=\"p-2 border\">Logam C</th></tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"p-2 border font-semibold\">Panjang satuan</td><td class=\"p-2 border\">4 m</td><td class=\"p-2 border\">5 m</td><td class=\"p-2 border\">6,5 m</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pilihan logam yang akan dibeli Pak Baskara berikut ini Pas atau Tidak Pas!\n</p>",
    "kategoriConfig": {
      "columns": [
        "Pas",
        "Tidak Pas"
      ],
      "rows": [
        {
          "id": "r1",
          "label": "Membeli 2 buah logam A"
        },
        {
          "id": "r2",
          "label": "Membeli 1 buah logam B"
        },
        {
          "id": "r3",
          "label": "Membeli 1 buah logam C"
        }
      ]
    },
    "kunci": {
      "r1": "Tidak Pas",
      "r2": "Tidak Pas",
      "r3": "Pas"
    },
    "pembahasan": "<strong>Pembahasan Kebutuhan Logam Kerangka Kaca Patri:</strong><br>\n1. <strong>Menentukan jari-jari lingkaran (\\(r\\)):</strong><br>\nLuas satu tembereng merah (sudut pusat \\(90^\\circ\\)):<br>\n\\[ L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\Delta} = \\frac{1}{4}\\pi r^2 - \\frac{1}{2} r^2 = r^2 \\left(\\frac{3{,}14}{4} - 0{,}5\\right) = r^2 (0{,}785 - 0{,}5) = 0{,}285 r^2 \\]<br>\nDiketahui luas 1 tembereng merah = \\( 456 \\text{ cm}^2 \\):<br>\n\\[ 0{,}285 r^2 = 456 \\implies r^2 = \\frac{456}{0{,}285} = 1600 \\implies r = 40 \\text{ cm} \\]<br>\n2. <strong>Menghitung panjang kerangka logam yang dibutuhkan:</strong><br>\n- Keliling lingkaran: \\( K = 2\\pi r = 2 \\times 3{,}14 \\times 40 = 251{,}2 \\text{ cm} \\).<br>\n- Dua diameter bersilang: \\( 2 \\times (2r) = 2 \\times 80 = 160 \\text{ cm} \\).<br>\n- Empat sisi persegi (tali busur): panjang sisi \\( s = r\\sqrt{2} \\approx 40 \\times 1{,}4 = 56 \\text{ cm} \\). Empat sisi: \\( 4 \\times 56 = 224 \\text{ cm} \\).<br>\nTotal kebutuhan panjang logam:<br>\n\\[ P_{\\text{total}} = 251{,}2 + 160 + 224 = 635{,}2 \\text{ cm} \\approx 6{,}35 \\text{ meter} \\]<br><br>\n3. <strong>Analisis Pilihan Logam:</strong><br>\n- <strong>Membeli 2 buah logam A:</strong> Total panjang \\( 2 \\times 4\\text{ m} = 8\\text{ m} = 800\\text{ cm} \\). Sisa: \\( 800 - 635{,}2 = 164{,}8\\text{ cm} > 100\\text{ cm} \\) (1 meter). Jadi <strong>Tidak Pas</strong>.<br>\n- <strong>Membeli 1 buah logam B:</strong> Total panjang \\( 5\\text{ m} = 500\\text{ cm} \\). Panjang kurang dari kebutuhan (635,2 cm). Jadi <strong>Tidak Pas</strong>.<br>\n- <strong>Membeli 1 buah logam C:</strong> Total panjang \\( 6{,}5\\text{ m} = 650\\text{ cm} \\). Sisa: \\( 650 - 635{,}2 = 14{,}8\\text{ cm} \\le 100\\text{ cm} \\) (cukup dan sisa di bawah 1 m). Jadi <strong>Pas</strong>.<br><br>\n<strong>Kunci: 2 Logam A (Tidak Pas), 1 Logam B (Tidak Pas), 1 Logam C (Pas)</strong>"
  },
  {
    "id": 19,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan hasil operasi dari dua parameter yang merupakan komponen pembentuk dua garis lurus disertai dengan informasi bayangan hasil dua kali transformasi geometri. (19)",
    "kode": "25MATGMPTRGM35SL-000000-2697",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_19.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nApabila garis \\( ax + y - 9 = 0 \\) dan \\( x + by + 6 = 0 \\) dicerminkan terhadap garis \\( y = x \\) kemudian dilanjutkan translasi \\( T\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\), menghasilkan bayangan dengan persamaan berturut-turut:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ x + 2y - 8 = 0 \\quad \\text{dan} \\quad 2x - y - 9 = 0 \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai dari \\( 2a - b = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "-6"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "2"
      },
      {
        "id": "E",
        "text": "6"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan Komposisi Refleksi dan Translasi Garis:</strong><br>\nTransformasi titik \\((x, y)\\):<br>\n1. Refleksi terhadap garis \\(y = x\\): \\( (x, y) \\to (y, x) \\).<br>\n2. Translasi \\( T\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\):<br>\n\\[ x' = y + 1 \\implies y = x' - 1 \\]<br>\n\\[ y' = x - 1 \\implies x = y' + 1 \\]<br><br>\n<strong>Garis Pertama:</strong> \\( ax + y - 9 = 0 \\)<br>\nSubstitusi nilai \\(x\\) dan \\(y\\):<br>\n\\[ a(y' + 1) + (x' - 1) - 9 = 0 \\implies x' + ay' + (a - 10) = 0 \\]<br>\nBayangan yang diketahui adalah \\( x + 2y - 8 = 0 \\).<br>\nSamakan koefisien:<br>\n- Koefisien \\(y\\): \\( a = 2 \\).<br>\n- Konstanta: \\( a - 10 = 2 - 10 = -8 \\) (Tepat cocok).<br><br>\n<strong>Garis Kedua:</strong> \\( x + by + 6 = 0 \\)<br>\nSubstitusi nilai \\(x\\) dan \\(y\\):<br>\n\\[ (y' + 1) + b(x' - 1) + 6 = 0 \\implies bx' + y' + (-b + 7) = 0 \\]<br>\nBayangan yang diketahui: \\( 2x - y - 9 = 0 \\iff -2x + y + 9 = 0 \\) (agar koefisien \\(y\\) bernilai \\(+1\\)).<br>\nSamakan koefisien:<br>\n- Koefisien \\(x\\): \\( b = -2 \\).<br>\n- Konstanta: \\( -b + 7 = -(-2) + 7 = 9 \\) (Tepat cocok).<br><br>\nNilai yang dicari:<br>\n\\[ 2a - b = 2(2) - (-2) = 4 + 2 = 6 \\]<br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    "id": 20,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan transformasi geometri yang terjadi pada sebuah lingkaran dengan disertakan informasi bayangan hasil transformasi. (20)",
    "kode": "25MATGMPTRGM35SL-000000-2767",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_20.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLingkaran \\(L\\) memiliki pusat di \\((-5, 3)\\) dan jari-jari 2. Lingkaran \\(L'\\) adalah bayangan dari \\(L\\) setelah dilakukan translasi \\(T\\).\n</p>\n<p class=\"text-slate-700 mb-2\">\nLingkaran \\(L''\\) dengan persamaan \\( (x + 4)^2 + (y - 4)^2 = 16 \\) adalah bayangan dari \\(L'\\) setelah dilakukan dilatasi dengan pusat \\(O(0, 0)\\) dengan faktor skala tertentu.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPernyataan yang benar mengenai translasi \\(T\\) dan faktor skala dilatasi yang dilakukan adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( T = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} \\) dan skala dilatasi 8"
      },
      {
        "id": "B",
        "text": "\\( T = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} \\) dan skala dilatasi 4"
      },
      {
        "id": "C",
        "text": "\\( T = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} \\) dan skala dilatasi 2"
      },
      {
        "id": "D",
        "text": "\\( T = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\) dan skala dilatasi 2"
      },
      {
        "id": "E",
        "text": "\\( T = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\) dan skala dilatasi 8"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Transformasi Dilatasi dan Translasi Lingkaran:</strong><br>\n1. <strong>Faktor Skala Dilatasi (\\(k\\)):</strong><br>\n- Jari-jari awal lingkaran \\(L\\) adalah \\(r = 2\\). Translasi tidak mengubah ukuran jari-jari, sehingga jari-jari \\(L'\\) tetap 2.<br>\n- Lingkaran akhir \\(L''\\): \\( (x + 4)^2 + (y - 4)^2 = 16 \\implies r'' = \\sqrt{16} = 4 \\).<br>\n- Karena \\( r'' = |k| \\cdot r' \\implies 4 = k \\cdot 2 \\implies k = 2 \\).<br>\n2. <strong>Pusat Lingkaran:</strong><br>\n- Titik pusat lingkaran \\(L''\\) adalah \\( P''(-4, 4) \\).<br>\n- Karena \\(P''\\) merupakan hasil dilatasi dari \\(P'\\) dengan pusat \\(O(0, 0)\\) berskala \\(k = 2\\):<br>\n\\[ P' = \\frac{P''}{k} = \\left(\\frac{-4}{2}, \\frac{4}{2}\\right) = (-2, 2) \\]<br>\n- Titik \\(P'(-2, 2)\\) adalah hasil translasi \\(T\\begin{pmatrix} p \\\\ q \\end{pmatrix}\\) dari pusat awal \\(P(-5, 3)\\):<br>\n\\[ \\begin{pmatrix} -2 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} p \\\\ q \\end{pmatrix} \\]<br>\n\\[ p = -2 - (-5) = 3 \\]<br>\n\\[ q = 2 - 3 = -1 \\]<br>\nDiperoleh translasi \\( T = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} \\) dan skala dilatasi 2.<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 21,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan titik-titik yang terletak pada suatu garis dengan disertakan informasi bayangan garis tersebut hasil transformasi rotasi. (21)",
    "kode": "25MATGMPTRGM35SL-000000-2601",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_21.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGaris \\(l\\) merupakan bayangan garis \\( 3x + 2y = 6 \\) yang dirotasikan sejauh \\(90^\\circ\\) berlawanan arah jarum jam dengan pusat rotasi \\((2, 0)\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah koordinat titik yang terletak pada garis \\(l\\)? Pilih semua jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "(-3, -2)"
      },
      {
        "id": "B",
        "text": "(-2, -1)"
      },
      {
        "id": "C",
        "text": "(1, 2)"
      },
      {
        "id": "D",
        "text": "(2, 0)"
      },
      {
        "id": "E",
        "text": "(5, 2)"
      }
    ],
    "kunci": [
      "D",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Persamaan Garis Hasil Rotasi \\(90^\\circ\\):</strong><br>\nRumus rotasi titik \\((x, y)\\) sebesar \\(90^\\circ\\) berlawanan arah jarum jam dengan pusat \\((a, b) = (2, 0)\\):<br>\n\\[ x' - a = -(y - b) \\implies x' - 2 = -y \\implies y = 2 - x' \\]<br>\n\\[ y' - b = (x - a) \\implies y' = x - 2 \\implies x = y' + 2 \\]<br><br>\nSubstitusikan \\(x\\) dan \\(y\\) ke persamaan garis awal \\( 3x + 2y = 6 \\):<br>\n\\[ 3(y' + 2) + 2(2 - x') = 6 \\]<br>\n\\[ 3y' + 6 + 4 - 2x' = 6 \\]<br>\n\\[ -2x' + 3y' + 4 = 0 \\iff 2x' - 3y' = 4 \\]<br>\nPersamaan garis bayangan \\(l\\) adalah \\( 2x - 3y = 4 \\).<br><br>\nUji koordinat opsi pada persamaan \\( 2x - 3y = 4 \\):<br>\n- Untuk \\((-3, -2)\\): \\( 2(-3) - 3(-2) = -6 + 6 = 0 \\neq 4 \\) (Salah).<br>\n- Untuk \\((-2, -1)\\): \\( 2(-2) - 3(-1) = -4 + 3 = -1 \\neq 4 \\) (Salah).<br>\n- Untuk \\((1, 2)\\): \\( 2(1) - 3(2) = 2 - 6 = -4 \\neq 4 \\) (Salah).<br>\n- Untuk \\((2, 0)\\): \\( 2(2) - 3(0) = 4 - 0 = 4 \\) (<strong>Benar</strong>).<br>\n- Untuk \\((5, 2)\\): \\( 2(5) - 3(2) = 10 - 6 = 4 \\) (<strong>Benar</strong>).<br><br>\n<strong>Kunci Jawaban: D, E</strong>"
  },
  {
    "id": 22,
    "elemen": "Kalkulus",
    "subelemen": "Limit",
    "indikator": "Menghitung nilai limit tentu fungsi aljabar dalam bentuk pecahan rasional (pangkat dua dan tiga). (22)",
    "kode": "25MATKLKLMTM36SL-000000-2835",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_22.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNilai dari:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\lim_{x \\to 3} \\frac{x^3 - 3x^2 + 2x + 1}{5 + 3x - 9x^2} = \\dots \\]\n</div>",
    "options": [
      {
        "id": "A",
        "text": "\\( -\\frac{7}{67} \\)"
      },
      {
        "id": "B",
        "text": "\\( -\\frac{6}{67} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\frac{6}{76} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\frac{7}{67} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\frac{7}{76} \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Limit Tentu Fungsi Pecahan Rasional:</strong><br>\nPeriksa nilai limit dengan metode substitusi langsung untuk \\(x = 3\\):<br>\n1. <strong>Hitung nilai pembilang pada \\(x = 3\\):</strong><br>\n\\[ 3^3 - 3(3^2) + 2(3) + 1 = 27 - 27 + 6 + 1 = 7 \\]<br>\n2. <strong>Hitung nilai penyebut pada \\(x = 3\\):</strong><br>\n\\[ 5 + 3(3) - 9(3^2) = 5 + 9 - 9(9) = 14 - 81 = -67 \\]<br>\nKarena penyebut bernilai \\(-67 \\neq 0\\), maka limit ini merupakan <strong>limit tentu</strong>:<br>\n\\[ \\lim_{x \\to 3} \\frac{x^3 - 3x^2 + 2x + 1}{5 + 3x - 9x^2} = \\frac{7}{-67} = -\\frac{7}{67} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 23,
    "elemen": "Kalkulus",
    "subelemen": "Limit",
    "indikator": "Menentukan kecenderungan nilai tertentu menggunakan konsep limit tak tentu di ketakhinggaan dalam konteks kehidupan sehari-hari. (23)",
    "kode": "25MATKLKLMTM36SL-000000-2710",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_23.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nRoni, penjual nasi goreng, menjual dagangannya sebanyak \\(P\\) porsi dan akan memperoleh keuntungan (dalam jutaan rupiah) yang dapat dinyatakan dengan fungsi:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ K(p) = \\frac{9p^2 + 2p + 10}{3p^2 + 3p + 2} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKeuntungan yang akan diperoleh Roni apabila dia menjual nasi goreng dengan porsi sangat banyak adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Rp 2.000.000,00"
      },
      {
        "id": "B",
        "text": "Rp 3.000.000,00"
      },
      {
        "id": "C",
        "text": "Rp 5.000.000,00"
      },
      {
        "id": "D",
        "text": "Rp 9.000.000,00"
      },
      {
        "id": "E",
        "text": "Rp 10.000.000,00"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Limit Fungsi di Ketakhinggaan:</strong><br>\nMenjual nasi goreng dalam jumlah yang sangat banyak dimodelkan dengan \\( p \\to \\infty \\):<br>\n\\[ \\lim_{p \\to \\infty} K(p) = \\lim_{p \\to \\infty} \\frac{9p^2 + 2p + 10}{3p^2 + 3p + 2} \\]<br>\nBagi pembilang dan penyebut dengan derajat tertinggi \\(p^2\\):<br>\n\\[ = \\lim_{p \\to \\infty} \\frac{9 + \\frac{2}{p} + \\frac{10}{p^2}}{3 + \\frac{3}{p} + \\frac{2}{p^2}} = \\frac{9 + 0 + 0}{3 + 0 + 0} = \\frac{9}{3} = 3 \\]<br>\nKarena nilai \\(K(p)\\) dalam satuan juta rupiah, maka keuntungan yang diperoleh adalah:<br>\n\\[ 3 \\times \\text{Rp } 1.000.000,00 = \\text{Rp } 3.000.000,00 \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 24,
    "elemen": "Kalkulus",
    "subelemen": "Limit",
    "indikator": "Menentukan nilai limit dari rasio luas segitiga dengan luas setengah lingkaran untuk nilai parameter mendekati suatu sudut dalam pi. (24)",
    "kode": "25MATKLKLMTM37SL-000000-0509",
    "tipe": "mcma",
    "img": "/tka/img/matematika-lanjut/soal_24.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah setengah lingkaran dengan diameter \\(AB\\) terletak pada segitiga sama kaki \\(ABC\\) (\\(CA = CB\\)) dengan sudut puncak \\(\\angle ACB = \\theta\\).\n</p>\n<p class=\"text-slate-700 mb-2\">\nJika luas segitiga \\(ABC\\) dinyatakan dengan \\(X\\) dan luas setengah lingkaran dinyatakan dengan \\(Y\\), manakah pernyataan yang benar tentang nilai \\( \\lim_{\\theta \\to a} \\frac{X}{Y} \\)? Pilih semua jawaban benar!\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Besar jari-jari mempengaruhi nilai limit."
      },
      {
        "id": "B",
        "text": "Besar sudut tidak mempengaruhi nilai limit."
      },
      {
        "id": "C",
        "text": "Nilai \\( \\frac{X}{Y} \\) selalu sama untuk berapapun \\(\\theta\\)."
      },
      {
        "id": "D",
        "text": "\\( \\lim_{\\theta \\to \\frac{\\pi}{2}} \\frac{X}{Y} = \\frac{2}{\\pi} \\)"
      },
      {
        "id": "E",
        "text": "Jika \\( \\theta = \\pi \\) maka \\( \\frac{X}{Y} = 0 \\)"
      }
    ],
    "kunci": [
      "D",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Rasio Luas Segitiga terhadap Setengah Lingkaran:</strong><br>\nMisalkan jari-jari setengah lingkaran adalah \\(r\\), sehingga diameter \\(AB = 2r\\).<br>\n1. <strong>Luas setengah lingkaran (\\(Y\\)):</strong><br>\n\\[ Y = \\frac{1}{2} \\pi r^2 \\]<br>\n2. <strong>Luas segitiga sama kaki \\(ABC\\) (\\(X\\)):</strong><br>\nTinggi segitiga \\(h\\) dari titik puncak \\(C\\) ke alas \\(AB\\):<br>\n\\[ \\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{r}{h} \\implies h = \\frac{r}{\\tan(\\theta/2)} \\]<br>\nMaka luas segitiga:<br>\n\\[ X = \\frac{1}{2} \\cdot \\text{alas} \\cdot h = \\frac{1}{2} \\cdot (2r) \\cdot \\frac{r}{\\tan(\\theta/2)} = \\frac{r^2}{\\tan(\\theta/2)} \\]<br>\n3. <strong>Rasio \\( \\frac{X}{Y} \\):</strong><br>\n\\[ \\frac{X}{Y} = \\frac{\\frac{r^2}{\\tan(\\theta/2)}}{\\frac{1}{2}\\pi r^2} = \\frac{2}{\\pi \\tan(\\theta/2)} \\]<br>\nPerhatikan bahwa \\(r^2\\) saling menghilangkan, sehingga rasio <strong>tidak bergantung pada jari-jari</strong>.<br><br>\nEvaluasi pernyataan:<br>\n- Untuk \\( \\theta \\to \\frac{\\pi}{2} \\): \\( \\frac{\\theta}{2} = \\frac{\\pi}{4} \\implies \\tan(\\pi/4) = 1 \\).<br>\n\\[ \\lim_{\\theta \\to \\frac{\\pi}{2}} \\frac{X}{Y} = \\frac{2}{\\pi \\cdot 1} = \\frac{2}{\\pi} \\quad \\text{(Pernyataan D Benar)} \\]<br>\n- Untuk \\( \\theta \\to \\pi \\): \\( \\frac{\\theta}{2} \\to \\frac{\\pi}{2} \\implies \\tan(\\theta/2) \\to \\infty \\).<br>\n\\[ \\lim_{\\theta \\to \\pi} \\frac{X}{Y} = \\frac{2}{\\pi \\cdot (\\infty)} = 0 \\quad \\text{(Pernyataan E Benar)} \\]<br><br>\n<strong>Kunci Jawaban: D, E</strong>"
  },
  {
    "id": 25,
    "elemen": "Kalkulus",
    "subelemen": "Limit",
    "indikator": "Menentukan pasangan parameter pembentuk fungsi trigonometri yang memenuhi persamaan limit fungsi trigonometri tertentu. (25)",
    "kode": "25MATKLKLMTM37SL-000000-2914",
    "tipe": "pg",
    "img": "/tka/img/matematika-lanjut/soal_25.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNilai dari:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\lim_{x \\to 3} \\frac{1 - \\cos(6x - 18)}{\\left(x - \\frac{9}{x}\\right) \\sin(6x - 18)} = \\dots \\]\n</div>",
    "options": [
      {
        "id": "A",
        "text": "\\( -\\frac{3}{2} \\)"
      },
      {
        "id": "B",
        "text": "\\( -\\frac{2}{3} \\)"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "\\( \\frac{2}{3} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\frac{3}{2} \\)"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan Limit Fungsi Trigonometri Tak Tentu \\(\\frac{0}{0}\\):</strong><br>\nGunakan pemisalan variabel \\( u = x - 3 \\). Ketika \\( x \\to 3 \\), maka \\( u \\to 0 \\) dan \\( x = u + 3 \\).<br>\n1. Bentuk sudut:<br>\n\\[ 6x - 18 = 6(x - 3) = 6u \\]<br>\n2. Identitas trigonometri sudut rangkap:<br>\n\\[ 1 - \\cos(6u) = 2 \\sin^2(3u) \\]<br>\n3. Uraikan suku pecahan aljabar pada penyebut:<br>\n\\[ x - \\frac{9}{x} = \\frac{x^2 - 9}{x} = \\frac{(x - 3)(x + 3)}{x} = \\frac{u(u + 6)}{u + 3} \\]<br>\nKetika \\( u \\to 0 \\), faktor \\( \\frac{u + 6}{u + 3} \\to \\frac{6}{3} = 2 \\).<br>\nSehingga penyebut dapat ditulis sebagai \\( 2u \\cdot \\sin(6u) \\).<br><br>\nSubstitusikan ke limit:<br>\n\\[ \\lim_{u \\to 0} \\frac{2 \\sin^2(3u)}{\\left[\\frac{u(u+6)}{u+3}\\right] \\sin(6u)} = \\lim_{u \\to 0} \\frac{u+3}{u+6} \\cdot \\lim_{u \\to 0} \\frac{2 \\sin^2(3u)}{u \\sin(6u)} \\]<br>\n\\[ = \\frac{3}{6} \\cdot 2 \\cdot \\lim_{u \\to 0} \\left( \\frac{\\sin(3u)}{u} \\cdot \\frac{\\sin(3u)}{\\sin(6u)} \\right) \\]<br>\n\\[ = \\frac{1}{2} \\cdot 2 \\cdot \\left( 3 \\cdot \\frac{3}{6} \\right) = 1 \\cdot \\left( 3 \\cdot \\frac{1}{2} \\right) = \\frac{3}{2} \\]<br>\n<strong>Kunci Jawaban: E</strong>"
  }
];

// Inisialisasi Kumpulan Paket Matematika Tingkat Lanjut
if (typeof window !== 'undefined') {
  window.tkaMatematikaLanjutPaket1Data = tkaMatematikaLanjutPaket1Data;
  window.tkaMatematikaLanjutPackages = window.tkaMatematikaLanjutPackages || {};
  window.tkaMatematikaLanjutPackages['paket1'] = {
    title: "Paket 1: Soal Resmi TKA Matematika Tingkat Lanjut SMA 2025 (BPPP Kemendikbudristek)",
    shortTitle: "Paket 1 (Resmi 2025 • 25 Soal)",
    data: tkaMatematikaLanjutPaket1Data
  };
}
