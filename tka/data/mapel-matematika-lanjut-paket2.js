// tka/data/mapel-matematika-lanjut-paket2.js
// Bank Soal Try Out HOTS TKA Matematika Tingkat Lanjut SMA 2025/2026 (25 Butir Soal Prediksi Standar BPPP KaTeX)
// Disusun Berdasarkan Kisi-Kisi Resmi Seleksi PTN & Kurikulum Merdeka Matematika Tingkat Lanjut

const tkaMatematikaLanjutPaket2Data = [
  {
    "id": 1,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menentukan nilai determinan dan operasi invers matriks berpangkat tinggi. (1)",
    "kode": "TO26-MATLANJ-01",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui matriks \\( A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 2 \\end{pmatrix} \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai determinan dari matriks \\( (A^{-1})^{2026} \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( -1 \\)"
      },
      {
        "id": "B",
        "text": "\\( 0 \\)"
      },
      {
        "id": "C",
        "text": "\\( 1 \\)"
      },
      {
        "id": "D",
        "text": "\\( 2026 \\)"
      },
      {
        "id": "E",
        "text": "\\( 2^{2026} \\)"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Determinan Matriks Berpangkat:</strong><br>\n1. <strong>Hitung determinan matriks \\(A\\):</strong><br>\n\\[ \\det(A) = ad - bc = (2)(2) - (1)(3) = 4 - 3 = 1 \\]<br>\n2. <strong>Sifat determinan invers matriks:</strong><br>\n\\[ \\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{1} = 1 \\]<br>\n3. <strong>Sifat determinan matriks berpangkat:</strong><br>\n\\[ \\det((A^{-1})^n) = [\\det(A^{-1})]^n \\]<br>\nMaka untuk \\( n = 2026 \\):<br>\n\\[ \\det((A^{-1})^{2026}) = 1^{2026} = 1 \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 2,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menggunakan teorema Cayley-Hamilton untuk menyelesaikan polinomial matriks. (2)",
    "kode": "TO26-MATLANJ-02",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui matriks \\( A = \\begin{pmatrix} 4 & 1 \\\\ -2 & 1 \\end{pmatrix} \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBentuk matriks \\( A^2 - 5A \\) ekuivalen dengan ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( -6I \\)"
      },
      {
        "id": "B",
        "text": "\\( -I \\)"
      },
      {
        "id": "C",
        "text": "\\( O \\)"
      },
      {
        "id": "D",
        "text": "\\( 5I \\)"
      },
      {
        "id": "E",
        "text": "\\( 6I \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Teorema Cayley-Hamilton:</strong><br>\nSetiap matriks persegi memenuhi persamaan karakteristiknya sendiri:<br>\n\\[ \\det(A - \\lambda I) = 0 \\]<br>\nTrace matriks \\( A \\): \\( \\text{tr}(A) = 4 + 1 = 5 \\).<br>\nDeterminan matriks \\( A \\): \\( \\det(A) = (4)(1) - (1)(-2) = 4 + 2 = 6 \\).<br>\nPersamaan karakteristik:<br>\n\\[ \\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0 \\implies \\lambda^2 - 5\\lambda + 6 = 0 \\]<br>\nBerdasarkan teorema Cayley-Hamilton, matriks \\(A\\) memenuhi persamaan tersebut:<br>\n\\[ A^2 - 5A + 6I = O \\]<br>\n\\[ A^2 - 5A = -6I \\]<br>\ndengan \\(I\\) adalah matriks identitas ordo 2&times;2.<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 3,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menyelesaikan Sistem Persamaan Linear Tiga Variabel (SPLTV) dengan aturan Cramer. (3)",
    "kode": "TO26-MATLANJ-03",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiberikan sistem persamaan linear:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai determinan matriks koefisien utama \\( D \\) dari SPLTV di atas adalah ....\n</p>",
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
        "text": "11"
      },
      {
        "id": "E",
        "text": "13"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Determinan SPLTV 3x3 (Aturan Sarrus):</strong><br>\nMatriks koefisien sistem persamaan linear adalah:<br>\n\\[ D = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix} \\]<br>\nHitung nilai determinan menggunakan ekspansi baris pertama:<br>\n\\[ \\det(D) = 1 \\begin{vmatrix} -1 & 1 \\\\ 2 & -1 \\end{vmatrix} - 1 \\begin{vmatrix} 2 & 1 \\\\ 1 & -1 \\end{vmatrix} + 1 \\begin{vmatrix} 2 & -1 \\\\ 1 & 2 \\end{vmatrix} \\]<br>\n1. Submatriks pertama: \\( (-1)(-1) - (1)(2) = 1 - 2 = -1 \\)<br>\n2. Submatriks kedua: \\( (2)(-1) - (1)(1) = -2 - 1 = -3 \\)<br>\n3. Submatriks ketiga: \\( (2)(2) - (-1)(1) = 4 + 1 = 5 \\)<br><br>\nGabungkan ketiga hasil:<br>\n\\[ \\det(D) = 1(-1) - 1(-3) + 1(5) = -1 + 3 + 5 = 7 \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 4,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Mengaplikasikan Teorema Vieta untuk menentukan jumlah kuadrat akar-akar persamaan polinomial derajat tiga. (4)",
    "kode": "TO26-MATLANJ-04",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAkar-akar persamaan polinomial \\( 2x^3 - 6x^2 + 8x - 5 = 0 \\) adalah \\( x_1, x_2, \\) dan \\( x_3 \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai dari \\( x_1^2 + x_2^2 + x_3^2 \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "7"
      },
      {
        "id": "E",
        "text": "9"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Teorema Vieta Polinomial Derajat Tiga:</strong><br>\nUntuk persamaan polinomial \\( ax^3 + bx^2 + cx + d = 0 \\) dengan \\( a = 2, b = -6, c = 8, d = -5 \\):<br>\n1. Jumlah akar-akar:<br>\n\\[ x_1 + x_2 + x_3 = -\\frac{b}{a} = -\\frac{-6}{2} = 3 \\]<br>\n2. Jumlah hasil kali sepasang akar:<br>\n\\[ x_1 x_2 + x_1 x_3 + x_2 x_3 = \\frac{c}{a} = \\frac{8}{2} = 4 \\]<br>\n3. Jumlah kuadrat masing-masing akar:<br>\n\\[ x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2(x_1 x_2 + x_1 x_3 + x_2 x_3) \\]<br>\nSubstitusikan nilai yang diketahui:<br>\n\\[ x_1^2 + x_2^2 + x_3^2 = 3^2 - 2(4) = 9 - 8 = 1 \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 5,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan sisa pembagian polinomial oleh faktor kuadrat teruraikan. (5)",
    "kode": "TO26-MATLANJ-05",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu polinomial \\( P(x) \\) jika dibagi oleh \\( (x - 2) \\) bersisa 7, dan jika dibagi oleh \\( (x + 3) \\) bersisa -8.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika \\( P(x) \\) dibagi oleh \\( (x^2 + x - 6) \\), maka sisanya adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 3x + 1 \\)"
      },
      {
        "id": "B",
        "text": "\\( 3x - 1 \\)"
      },
      {
        "id": "C",
        "text": "\\( 2x + 3 \\)"
      },
      {
        "id": "D",
        "text": "\\( -3x + 13 \\)"
      },
      {
        "id": "E",
        "text": "\\( x + 5 \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Teorema Sisa Pembagian Polinomial:</strong><br>\nPembagi adalah \\( x^2 + x - 6 = (x - 2)(x + 3) \\).<br>\nKarena pembagi berderajat 2, maka sisa pembagian \\( S(x) \\) berderajat paling tinggi 1:<br>\n\\[ S(x) = px + q \\]<br>\nBerdasarkan teorema sisa:<br>\n- \\( P(2) = 7 \\implies 2p + q = 7 \\quad \\dots (1) \\)<br>\n- \\( P(-3) = -8 \\implies -3p + q = -8 \\quad \\dots (2) \\)<br><br>\nEliminasi variabel \\(q\\) dengan mengurangkan persamaan (1) dan (2):<br>\n\\[ (2p + q) - (-3p + q) = 7 - (-8) \\]<br>\n\\[ 5p = 15 \\implies p = 3 \\]<br>\nSubstitusi \\(p = 3\\) ke persamaan (1):<br>\n\\[ 2(3) + q = 7 \\implies 6 + q = 7 \\implies q = 1 \\]<br>\nMaka sisa pembagiannya adalah \\( S(x) = 3x + 1 \\).<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 6,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan akar-akar rasional dari persamaan polinomial berderajat empat. (6)",
    "kode": "TO26-MATLANJ-06",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiberikan persamaan polinomial berderajat empat:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ x^4 - 5x^3 + 5x^2 + 5x - 6 = 0 \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah di antara nilai-nilai berikut yang merupakan akar-akar real dari persamaan tersebut? Pilih semua jawaban benar!\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( x = -1 \\)"
      },
      {
        "id": "B",
        "text": "\\( x = 1 \\)"
      },
      {
        "id": "C",
        "text": "\\( x = 2 \\)"
      },
      {
        "id": "D",
        "text": "\\( x = 3 \\)"
      },
      {
        "id": "E",
        "text": "\\( x = 4 \\)"
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Akar-Akar Polinomial Berderajat Empat:</strong><br>\nFungsi polinomial: \\( f(x) = x^4 - 5x^3 + 5x^2 + 5x - 6 \\).<br>\n1. <strong>Uji \\( x = 1 \\):</strong><br>\n\\( 1 - 5 + 5 + 5 - 6 = 0 \\implies (x - 1) \\) adalah faktor.<br>\n2. <strong>Uji \\( x = -1 \\):</strong><br>\n\\( (-1)^4 - 5(-1)^3 + 5(-1)^2 + 5(-1) - 6 = 1 + 5 + 5 - 5 - 6 = 0 \\implies (x + 1) \\) adalah faktor.<br>\n3. <strong>Faktorisasi bertahap:</strong><br>\nBagi \\( f(x) \\) dengan \\( (x - 1)(x + 1) = x^2 - 1 \\):<br>\n\\[ x^4 - 5x^3 + 5x^2 + 5x - 6 = (x^2 - 1)(x^2 - 5x + 6) \\]<br>\nFaktorkan bentuk kuadrat kedua:<br>\n\\[ x^2 - 5x + 6 = (x - 2)(x - 3) \\]<br>\nBentuk faktorisasi penuh:<br>\n\\[ (x - 1)(x + 1)(x - 2)(x - 3) = 0 \\]<br>\nAkar-akar real persamaan adalah \\( x = -1, \\, 1, \\, 2, \\, 3 \\).<br>\n<strong>Kunci Jawaban: A, B, C, D</strong>"
  },
  {
    "id": 7,
    "elemen": "Aljabar",
    "subelemen": "Fungsi",
    "indikator": "Menentukan asimtot datar dan asimtot tegak dari fungsi pecahan rasional. (7)",
    "kode": "TO26-MATLANJ-07",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiberikan fungsi pecahan rasional:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ f(x) = \\frac{4x - 8}{2x + 6} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPersamaan asimtot datar dan asimtot tegak dari grafik fungsi \\( f(x) \\) berturut-turut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( y = 2 \\) dan \\( x = -3 \\)"
      },
      {
        "id": "B",
        "text": "\\( y = -3 \\) dan \\( x = 2 \\)"
      },
      {
        "id": "C",
        "text": "\\( y = 4 \\) dan \\( x = -6 \\)"
      },
      {
        "id": "D",
        "text": "\\( y = 2 \\) dan \\( x = 3 \\)"
      },
      {
        "id": "E",
        "text": "\\( y = -2 \\) dan \\( x = -3 \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Asimtot Fungsi Pecahan Rasional:</strong><br>\nFungsi rasional: \\( f(x) = \\frac{ax + b}{cx + d} = \\frac{4x - 8}{2x + 6} \\).<br>\n1. <strong>Asimtot Tegak:</strong><br>\nTerjadi saat pembuat nol penyebut bernilai nol dan pembilang tidak nol:<br>\n\\[ 2x + 6 = 0 \\implies 2x = -6 \\implies x = -3 \\]<br>\n2. <strong>Asimtot Datar:</strong><br>\nDihitung dari limit fungsi saat \\( x \\to \\pm\\infty \\):<br>\n\\[ y = \\lim_{x \\to \\infty} \\frac{4x - 8}{2x + 6} = \\frac{4}{2} = 2 \\]<br>\nJadi, persamaan asimtot datarnya adalah \\( y = 2 \\) dan asimtot tegaknya adalah \\( x = -3 \\).<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 8,
    "elemen": "Aljabar",
    "subelemen": "Fungsi",
    "indikator": "Menyelesaikan persamaan eksponensial bentuk kuadrat. (8)",
    "kode": "TO26-MATLANJ-08",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nHimpunan penyelesaian dari persamaan eksponensial:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ 3^{2x+1} - 28 \\cdot 3^x + 9 = 0 \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nadalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\{-2, 1\\} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\{-1, 2\\} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\{1, 2\\} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\{-2, -1\\} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\{2, 3\\} \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Persamaan Eksponensial Bentuk Kuadrat:</strong><br>\nUbah bentuk persamaan eksponen:<br>\n\\[ 3^{2x+1} = 3^1 \\cdot (3^x)^2 = 3(3^x)^2 \\]<br>\nPersamaan menjadi:<br>\n\\[ 3(3^x)^2 - 28(3^x) + 9 = 0 \\]<br>\nMisalkan \\( u = 3^x \\) dengan syarat \\( u > 0 \\):<br>\n\\[ 3u^2 - 28u + 9 = 0 \\]<br>\nFaktorkan persamaan kuadrat:<br>\n\\[ (3u - 1)(u - 9) = 0 \\]<br>\nDiperoleh dua penyelesaian untuk \\(u\\):<br>\n1. \\( 3u - 1 = 0 \\implies u = \\frac{1}{3} = 3^{-1} \\implies 3^x = 3^{-1} \\implies x = -1 \\)<br>\n2. \\( u - 9 = 0 \\implies u = 9 = 3^2 \\implies 3^x = 3^2 \\implies x = 2 \\)<br><br>\nHimpunan penyelesaiannya adalah \\( \\{-1, 2\\} \\).<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 9,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Irisan Kerucut",
    "indikator": "Menentukan persamaan garis singgung pada parabola dengan gradien tertentu. (9)",
    "kode": "TO26-MATLANJ-09",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPersamaan garis singgung pada parabola \\( y^2 = 8x \\) yang sejajar dengan garis \\( 2x - y + 5 = 0 \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 2x - y + 1 = 0 \\)"
      },
      {
        "id": "B",
        "text": "\\( 2x - y + 2 = 0 \\)"
      },
      {
        "id": "C",
        "text": "\\( 2x - y + 4 = 0 \\)"
      },
      {
        "id": "D",
        "text": "\\( x - 2y + 1 = 0 \\)"
      },
      {
        "id": "E",
        "text": "\\( 2x + y - 1 = 0 \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Garis Singgung Parabola dengan Gradien Tertentu:</strong><br>\n1. <strong>Identifikasi parameter parabola:</strong><br>\nBentuk umum: \\( y^2 = 4px \\).<br>\nDiketahui \\( y^2 = 8x \\implies 4p = 8 \\implies p = 2 \\).<br>\n2. <strong>Menentukan gradien garis singgung (\\(m\\)):</strong><br>\nGaris singgung sejajar garis \\( 2x - y + 5 = 0 \\implies y = 2x + 5 \\).<br>\nGradien garis acuan adalah \\( m = 2 \\). Karena sejajar, gradien garis singgung \\( m = 2 \\).<br>\n3. <strong>Rumus persamaan garis singgung parabola \\( y^2 = 4px \\) bergradien \\(m\\):</strong><br>\n\\[ y = mx + \\frac{p}{m} \\]<br>\nSubstitusikan \\( m = 2 \\) dan \\( p = 2 \\):<br>\n\\[ y = 2x + \\frac{2}{2} = 2x + 1 \\]<br>\nUbah ke bentuk implisit:<br>\n\\[ 2x - y + 1 = 0 \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 10,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Irisan Kerucut",
    "indikator": "Menghitung eksentrisitas dan koordinat titik fokus elips horizontal. (10)",
    "kode": "TO26-MATLANJ-10",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiberikan persamaan elips:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\frac{x^2}{25} + \\frac{y^2}{16} = 1 \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai eksentrisitas (\\(e\\)) dan koordinat titik-titik fokus dari elips tersebut berturut-turut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( e = \\frac{3}{5} \\) dan fokus \\( (\\pm 3, 0) \\)"
      },
      {
        "id": "B",
        "text": "\\( e = \\frac{4}{5} \\) dan fokus \\( (\\pm 4, 0) \\)"
      },
      {
        "id": "C",
        "text": "\\( e = \\frac{3}{5} \\) dan fokus \\( (0, \\pm 3) \\)"
      },
      {
        "id": "D",
        "text": "\\( e = \\frac{5}{3} \\) dan fokus \\( (\\pm 3, 0) \\)"
      },
      {
        "id": "E",
        "text": "\\( e = \\frac{4}{3} \\) dan fokus \\( (0, \\pm 4) \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Karakteristik Geometri Elips:</strong><br>\nPersamaan elips: \\( \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\).<br>\nDari persamaan: \\( a^2 = 25 \\implies a = 5 \\) dan \\( b^2 = 16 \\implies b = 4 \\).<br>\nKarena \\( a > b \\), elips merupakan elips horizontal yang berpusat di \\( (0, 0) \\).<br><br>\n1. <strong>Jarak fokus ke titik pusat (\\(c\\)):</strong><br>\n\\[ c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3 \\]<br>\nTitik fokus elips terletak pada sumbu utama (sumbu X): \\( F_1(-3, 0) \\) dan \\( F_2(3, 0) \\) atau \\( (\\pm 3, 0) \\).<br><br>\n2. <strong>Nilai Eksentrisitas (\\(e\\)):</strong><br>\n\\[ e = \\frac{c}{a} = \\frac{3}{5} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 11,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Irisan Kerucut",
    "indikator": "Menentukan persamaan garis asimtot dari hiperbola horizontal. (11)",
    "kode": "TO26-MATLANJ-11",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiberikan persamaan hiperbola:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPersamaan garis-garis asimtot dari hiperbola tersebut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( y = \\pm \\frac{3}{4}x \\)"
      },
      {
        "id": "B",
        "text": "\\( y = \\pm \\frac{4}{3}x \\)"
      },
      {
        "id": "C",
        "text": "\\( y = \\pm \\frac{9}{16}x \\)"
      },
      {
        "id": "D",
        "text": "\\( y = \\pm \\frac{16}{9}x \\)"
      },
      {
        "id": "E",
        "text": "\\( y = \\pm \\frac{5}{4}x \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Persamaan Asimtot Hiperbola:</strong><br>\nBentuk baku hiperbola horizontal pusat \\((0, 0)\\):<br>\n\\[ \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\]<br>\nDiketahui \\( a^2 = 16 \\implies a = 4 \\) dan \\( b^2 = 9 \\implies b = 3 \\).<br>\nPersamaan garis asimtot hiperbola horizontal diberikan oleh rumus:<br>\n\\[ y = \\pm \\frac{b}{a} x \\]<br>\nSubstitusi nilai \\( a = 4 \\) dan \\( b = 3 \\):<br>\n\\[ y = \\pm \\frac{3}{4} x \\]<br>\nYaitu dua garis saling memotong di titik asal: \\( y = \\frac{3}{4}x \\) dan \\( y = -\\frac{3}{4}x \\).<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 12,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menghitung panjang proyeksi ortogonal skalar suatu vektor pada vektor lain. (12)",
    "kode": "TO26-MATLANJ-12",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui vektor \\( \\vec{u} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\end{pmatrix} \\) dan \\( \\vec{v} = \\begin{pmatrix} 4 \\\\ -4 \\\\ 2 \\end{pmatrix} \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPanjang proyeksi skalar ortogonal vektor \\( \\vec{u} \\) pada arah vektor \\( \\vec{v} \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\frac{8}{3} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\frac{7}{3} \\)"
      },
      {
        "id": "C",
        "text": "\\( 3 \\)"
      },
      {
        "id": "D",
        "text": "\\( \\frac{16}{6} \\)"
      },
      {
        "id": "E",
        "text": "\\( 4 \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Proyeksi Skalar Ortogonal:</strong><br>\nRumus panjang proyeksi skalar ortogonal vektor \\( \\vec{u} \\) pada arah \\( \\vec{v} \\) adalah:<br>\n\\[ |\\vec{p}| = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|} \\]<br>\n1. <strong>Hitung perkalian titik (dot product) \\( \\vec{u} \\cdot \\vec{v} \\):</strong><br>\n\\[ \\vec{u} \\cdot \\vec{v} = (2)(4) + (-1)(-4) + (2)(2) = 8 + 4 + 4 = 16 \\]<br>\n2. <strong>Hitung panjang vektor acuan \\( |\\vec{v}| \\):</strong><br>\n\\[ |\\vec{v}| = \\sqrt{4^2 + (-4)^2 + 2^2} = \\sqrt{16 + 16 + 4} = \\sqrt{36} = 6 \\]<br>\n3. <strong>Hitung panjang proyeksi:</strong><br>\n\\[ |\\vec{p}| = \\frac{16}{6} = \\frac{8}{3} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 13,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menghitung luas daerah segitiga pada ruang dimensi tiga menggunakan perkalian silang vektor (cross product). (13)",
    "kode": "TO26-MATLANJ-13",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah segitiga \\( ABC \\) di ruang tiga dimensi dibentuk oleh dua vektor sisi \\( \\vec{AB} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} \\) dan \\( \\vec{AC} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix} \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nLuas segitiga \\( ABC \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\frac{1}{2}\\sqrt{21} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\sqrt{21} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\frac{1}{2}\\sqrt{17} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\frac{5}{2} \\)"
      },
      {
        "id": "E",
        "text": "\\( 3 \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Luas Segitiga dengan Cross Product:</strong><br>\nLuas segitiga yang dibentang oleh vektor \\( \\vec{AB} \\) dan \\( \\vec{AC} \\) adalah:<br>\n\\[ L = \\frac{1}{2} |\\vec{AB} \\times \\vec{AC}| \\]<br>\n1. <strong>Hitung perkalian silang \\( \\vec{AB} \\times \\vec{AC} \\):</strong><br>\n\\[ \\vec{AB} \\times \\vec{AC} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 0 \\\\ 0 & 1 & 2 \\end{vmatrix} \\]<br>\n\\[ = \\hat{i}(2 \\cdot 2 - 0 \\cdot 1) - \\hat{j}(1 \\cdot 2 - 0 \\cdot 0) + \\hat{k}(1 \\cdot 1 - 2 \\cdot 0) \\]<br>\n\\[ = 4\\hat{i} - 2\\hat{j} + 1\\hat{k} = \\begin{pmatrix} 4 \\\\ -2 \\\\ 1 \\end{pmatrix} \\]<br>\n2. <strong>Hitung magnitudo vektor hasil:</strong><br>\n\\[ |\\vec{AB} \\times \\vec{AC}| = \\sqrt{4^2 + (-2)^2 + 1^2} = \\sqrt{16 + 4 + 1} = \\sqrt{21} \\]<br>\n3. <strong>Luas segitiga:</strong><br>\n\\[ L = \\frac{1}{2} \\sqrt{21} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 14,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menentukan besar sudut antara dua vektor pada dimensi tiga. (14)",
    "kode": "TO26-MATLANJ-14",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui dua vektor \\( \\vec{a} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} \\) dan \\( \\vec{b} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBesar sudut \\( \\theta \\) antara vektor \\( \\vec{a} \\) dan vektor \\( \\vec{b} \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 30^\\circ \\)"
      },
      {
        "id": "B",
        "text": "\\( 45^\\circ \\)"
      },
      {
        "id": "C",
        "text": "\\( 60^\\circ \\)"
      },
      {
        "id": "D",
        "text": "\\( 90^\\circ \\)"
      },
      {
        "id": "E",
        "text": "\\( 120^\\circ \\)"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Sudut Antara Dua Vektor:</strong><br>\nRumus kosinus sudut antara dua vektor:<br>\n\\[ \\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|} \\]<br>\n1. Perkalian titik: \\( \\vec{a} \\cdot \\vec{b} = (1)(0) + (0)(1) + (1)(1) = 1 \\).<br>\n2. Panjang \\( \\vec{a} \\): \\( |\\vec{a}| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{2} \\).<br>\n3. Panjang \\( \\vec{b} \\): \\( |\\vec{b}| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{2} \\).<br>\nSubstitusi ke rumus kosinus:<br>\n\\[ \\cos \\theta = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\]<br>\nMaka besar sudut \\( \\theta = \\arccos\\left(\\frac{1}{2}\\right) = 60^\\circ \\).<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 15,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan pengaruh matriks transformasi terhadap luas suatu bidang datar. (15)",
    "kode": "TO26-MATLANJ-15",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah segitiga memiliki luas awal 12 satuan luas. Segitiga tersebut ditransformasikan oleh matriks:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ M = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nLuas bayangan segitiga setelah transformasi adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "120 satuan luas"
      },
      {
        "id": "B",
        "text": "144 satuan luas"
      },
      {
        "id": "C",
        "text": "168 satuan luas"
      },
      {
        "id": "D",
        "text": "180 satuan luas"
      },
      {
        "id": "E",
        "text": "216 satuan luas"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Pengaruh Matriks Transformasi terhadap Luas:</strong><br>\nHubungan luas bayangan \\( L' \\) dengan luas asal \\( L \\) yang ditransformasikan oleh matriks \\( M \\) adalah:<br>\n\\[ L' = |\\det(M)| \\times L \\]<br>\n1. <strong>Hitung determinan matriks \\(M\\):</strong><br>\n\\[ \\det(M) = (3)(4) - (-1)(2) = 12 - (-2) = 14 \\]<br>\n2. <strong>Hitung luas bayangan:</strong><br>\n\\[ L' = |14| \\times 12 = 168 \\text{ satuan luas} \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 16,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan bayangan kurva lingkaran akibat komposisi rotasi dan dilatasi. (16)",
    "kode": "TO26-MATLANJ-16",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLingkaran dengan persamaan \\( x^2 + y^2 = 9 \\) didilatasikan dengan faktor skala 3 dan pusat \\( O(0,0) \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPersamaan lingkaran bayangan hasil dilatasi tersebut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( x^2 + y^2 = 27 \\)"
      },
      {
        "id": "B",
        "text": "\\( x^2 + y^2 = 81 \\)"
      },
      {
        "id": "C",
        "text": "\\( 3x^2 + 3y^2 = 9 \\)"
      },
      {
        "id": "D",
        "text": "\\( x^2 + y^2 = 18 \\)"
      },
      {
        "id": "E",
        "text": "\\( x^2 + y^2 = 36 \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Dilatasi Lingkaran:</strong><br>\n1. Lingkaran asal memiliki pusat \\( (0, 0) \\) dan jari-jari \\( r = \\sqrt{9} = 3 \\).<br>\n2. Pada dilatasi dengan pusat \\( O(0,0) \\) dan faktor skala \\( k = 3 \\):<br>\n   - Titik pusat tetap di \\( (0, 0) \\).<br>\n   - Jari-jari bayangan menjadi \\( r' = |k| \\cdot r = 3 \\times 3 = 9 \\).<br>\n3. Persamaan lingkaran bayangan:<br>\n\\[ x^2 + y^2 = (r')^2 = 9^2 = 81 \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 17,
    "elemen": "Trigonometri",
    "subelemen": "Identitas dan Persamaan",
    "indikator": "Menyelesaikan persamaan trigonometri bentuk penjumlahan sinus. (17)",
    "kode": "TO26-MATLANJ-17",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBentuk sederhana dari \\( \\frac{\\sin 5x + \\sin 3x}{\\cos 5x + \\cos 3x} \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\tan 4x \\)"
      },
      {
        "id": "B",
        "text": "\\( \\cot 4x \\)"
      },
      {
        "id": "C",
        "text": "\\( \\tan 8x \\)"
      },
      {
        "id": "D",
        "text": "\\( \\tan x \\)"
      },
      {
        "id": "E",
        "text": "\\( \\sin 4x \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Rumus Penjumlahan dan Pengurangan Trigonometri:</strong><br>\nGunakan rumus transformasi jumlah ke perkalian trigonometri:<br>\n1. \\( \\sin A + \\sin B = 2 \\sin\\left(\\frac{A+B}{2}\\right) \\cos\\left(\\frac{A-B}{2}\\right) \\)<br>\n2. \\( \\cos A + \\cos B = 2 \\cos\\left(\\frac{A+B}{2}\\right) \\cos\\left(\\frac{A-B}{2}\\right) \\)<br><br>\nSubstitusikan \\( A = 5x \\) dan \\( B = 3x \\):<br>\n- Pembilang: \\( \\sin 5x + \\sin 3x = 2 \\sin(4x) \\cos(x) \\)<br>\n- Penyebut: \\( \\cos 5x + \\cos 3x = 2 \\cos(4x) \\cos(x) \\)<br><br>\nMaka bentuk pecahannya:<br>\n\\[ \\frac{2 \\sin(4x) \\cos(x)}{2 \\cos(4x) \\cos(x)} = \\frac{\\sin(4x)}{\\cos(4x)} = \\tan 4x \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 18,
    "elemen": "Trigonometri",
    "subelemen": "Identitas dan Persamaan",
    "indikator": "Menentukan nilai ekstrem fungsi trigonometri bentuk harmonik k cos(x - alpha). (18)",
    "kode": "TO26-MATLANJ-18",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNilai maksimum dari fungsi \\( f(x) = 3\\cos x + 4\\sin x + 2 \\) adalah ....\n</p>",
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
        "text": "12"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Nilai Ekstrem Bentuk \\( A \\cos x + B \\sin x \\):</strong><br>\nBentuk kombinasi linear sinus dan kosinus dapat disederhanakan menjadi:<br>\n\\[ 3\\cos x + 4\\sin x = k \\cos(x - \\alpha) \\]<br>\ndengan amplitudo \\( k \\):<br>\n\\[ k = \\sqrt{A^2 + B^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5 \\]<br>\nKarena nilai maksimum dari \\( \\cos(x - \\alpha) \\) adalah 1, maka nilai maksimum dari \\( 3\\cos x + 4\\sin x \\) adalah 5.<br>\nMaka nilai maksimum fungsi \\( f(x) \\):<br>\n\\[ f_{\\max} = 5 + 2 = 7 \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 19,
    "elemen": "Kalkulus",
    "subelemen": "Limit",
    "indikator": "Menghitung limit trigonometri melibatkan sudut rangkap kosinus. (19)",
    "kode": "TO26-MATLANJ-19",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNilai dari:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\sin 2x} = \\dots \\]\n</div>",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "8"
      },
      {
        "id": "E",
        "text": "16"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Limit Fungsi Trigonometri Dasar:</strong><br>\nGunakan identitas sudut ganda: \\( 1 - \\cos 4x = 2 \\sin^2(2x) \\).<br>\nSubstitusi ke dalam limit:<br>\n\\[ \\lim_{x \\to 0} \\frac{2 \\sin^2(2x)}{x \\sin 2x} = \\lim_{x \\to 0} \\frac{2 \\sin(2x) \\sin(2x)}{x \\sin 2x} = \\lim_{x \\to 0} \\frac{2 \\sin(2x)}{x} \\]<br>\nGunakan sifat limit dasar trigonometri \\( \\lim_{x \\to 0} \\frac{\\sin(ax)}{x} = a \\):<br>\n\\[ = 2 \\cdot \\lim_{x \\to 0} \\frac{\\sin(2x)}{x} = 2 \\times 2 = 4 \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 20,
    "elemen": "Kalkulus",
    "subelemen": "Limit",
    "indikator": "Menghitung limit tak hingga bentuk selisih bentuk akar kuadrat. (20)",
    "kode": "TO26-MATLANJ-20",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNilai dari limit di ketakhinggaan berikut:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 1} - \\sqrt{4x^2 - 4x + 3} \\right) = \\dots \\]\n</div>",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      },
      {
        "id": "E",
        "text": "6"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Limit Bentuk Akar di Ketakhinggaan:</strong><br>\nBentuk umum: \\( \\lim_{x \\to \\infty} \\left(\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + px + q}\\right) = \\frac{b - p}{2\\sqrt{a}} \\).<br>\nDari soal:<br>\n- \\( a = 4 \\)<br>\n- \\( b = 8 \\)<br>\n- \\( p = -4 \\)<br><br>\nSubstitusikan ke rumus praktis:<br>\n\\[ L = \\frac{8 - (-4)}{2\\sqrt{4}} = \\frac{8 + 4}{2 \\times 2} = \\frac{12}{4} = 3 \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 21,
    "elemen": "Kalkulus",
    "subelemen": "Turunan",
    "indikator": "Menentukan turunan pertama fungsi trigonometri komposisi dengan aturan rantai. (21)",
    "kode": "TO26-MATLANJ-21",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTurunan pertama dari fungsi \\( f(x) = \\sin^3(2x) \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 3 \\sin^2(2x) \\cos(2x) \\)"
      },
      {
        "id": "B",
        "text": "\\( 6 \\sin^2(2x) \\cos(2x) \\)"
      },
      {
        "id": "C",
        "text": "\\( 3 \\cos^2(2x) \\)"
      },
      {
        "id": "D",
        "text": "\\( 6 \\sin(2x) \\cos^2(2x) \\)"
      },
      {
        "id": "E",
        "text": "\\( 2 \\sin^2(2x) \\cos(2x) \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Aturan Rantai Turunan Fungsi Trigonometri:</strong><br>\nFungsi komposisi: \\( f(x) = [u(x)]^3 \\) dengan \\( u(x) = \\sin(2x) \\).<br>\n1. Turunan luar: \\( \\frac{df}{du} = 3u^2 = 3\\sin^2(2x) \\).<br>\n2. Turunan dalam \\( u(x) = \\sin(2x) \\): \\( u'(x) = 2\\cos(2x) \\).<br>\nBerdasarkan aturan rantai:<br>\n\\[ f'(x) = 3\\sin^2(2x) \\cdot 2\\cos(2x) = 6\\sin^2(2x)\\cos(2x) \\]<br>\n(Atau dapat juga ditulis \\( 3\\sin(2x)\\sin(4x) \\)).<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 22,
    "elemen": "Kalkulus",
    "subelemen": "Turunan",
    "indikator": "Menentukan persamaan garis singgung kurva fungsi trigonometri pada titik tertentu. (22)",
    "kode": "TO26-MATLANJ-22",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPersamaan garis singgung kurva \\( y = 2\\sin x \\) pada titik berabsis \\( x = \\frac{\\pi}{3} \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( y - \\sqrt{3} = x - \\frac{\\pi}{3} \\)"
      },
      {
        "id": "B",
        "text": "\\( y - \\sqrt{3} = 2\\left(x - \\frac{\\pi}{3}\\right) \\)"
      },
      {
        "id": "C",
        "text": "\\( y - 1 = x - \\frac{\\pi}{3} \\)"
      },
      {
        "id": "D",
        "text": "\\( y - \\frac{\\sqrt{3}}{2} = x - \\frac{\\pi}{3} \\)"
      },
      {
        "id": "E",
        "text": "\\( y - \\sqrt{3} = -\\left(x - \\frac{\\pi}{3}\\right) \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Persamaan Garis Singgung Kurva Trigonometri:</strong><br>\n1. <strong>Tentukan koordinat titik singgung \\((x_1, y_1)\\):</strong><br>\nUntuk \\( x = \\frac{\\pi}{3} \\):<br>\n\\[ y_1 = 2\\sin\\left(\\frac{\\pi}{3}\\right) = 2 \\left(\\frac{1}{2}\\sqrt{3}\\right) = \\sqrt{3} \\]<br>\nTitik singgung adalah \\( \\left(\\frac{\\pi}{3}, \\sqrt{3}\\right) \\).<br>\n2. <strong>Tentukan gradien garis singgung (\\(m\\)):</strong><br>\nTurunan pertama: \\( y' = 2\\cos x \\).<br>\nSubstitusi \\( x = \\frac{\\pi}{3} \\):<br>\n\\[ m = y'\\left(\\frac{\\pi}{3}\\right) = 2\\cos\\left(\\frac{\\pi}{3}\\right) = 2 \\left(\\frac{1}{2}\\right) = 1 \\]<br>\n3. <strong>Persamaan garis singgung:</strong><br>\n\\[ y - y_1 = m(x - x_1) \\implies y - \\sqrt{3} = 1\\left(x - \\frac{\\pi}{3}\\right) \\implies y - \\sqrt{3} = x - \\frac{\\pi}{3} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 23,
    "elemen": "Kalkulus",
    "subelemen": "Integral",
    "indikator": "Menyelesaikan integral tentu fungsi polinomial aljabar. (23)",
    "kode": "TO26-MATLANJ-23",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNilai dari:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ \\int_{0}^{2} (3x^2 - 4x + 1) \\, dx = \\dots \\]\n</div>",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      },
      {
        "id": "E",
        "text": "6"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Integral Tentu Aljabar:</strong><br>\n1. <strong>Tentukan antiturunan fungsi:</strong><br>\n\\[ \\int (3x^2 - 4x + 1) \\, dx = x^3 - 2x^2 + x \\]<br>\n2. <strong>Evaluasi pada batas integrasi \\([0, 2]\\):</strong><br>\n\\[ \\left[ x^3 - 2x^2 + x \\right]_{0}^{2} = (2^3 - 2(2^2) + 2) - (0^3 - 2(0^2) + 0) \\]<br>\n\\[ = (8 - 8 + 2) - 0 = 2 \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 24,
    "elemen": "Kalkulus",
    "subelemen": "Integral",
    "indikator": "Menyelesaikan integral parsial fungsi aljabar-trigonometri. (24)",
    "kode": "TO26-MATLANJ-24",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nHasil dari \\( \\int x \\cos x \\, dx \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( x \\sin x + \\cos x + C \\)"
      },
      {
        "id": "B",
        "text": "\\( x \\sin x - \\cos x + C \\)"
      },
      {
        "id": "C",
        "text": "\\( -x \\sin x + \\cos x + C \\)"
      },
      {
        "id": "D",
        "text": "\\( x \\cos x + \\sin x + C \\)"
      },
      {
        "id": "E",
        "text": "\\( \\frac{1}{2}x^2 \\sin x + C \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Teknik Integral Parsial:</strong><br>\nRumus integral parsial: \\( \\int u \\, dv = uv - \\int v \\, du \\).<br>\nPilih:<br>\n- \\( u = x \\implies du = dx \\)<br>\n- \\( dv = \\cos x \\, dx \\implies v = \\sin x \\)<br><br>\nTerapkan ke rumus parsial:<br>\n\\[ \\int x \\cos x \\, dx = x \\sin x - \\int \\sin x \\, dx \\]<br>\nKarena \\( \\int \\sin x \\, dx = -\\cos x \\):<br>\n\\[ = x \\sin x - (-\\cos x) + C = x \\sin x + \\cos x + C \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 25,
    "elemen": "Kalkulus",
    "subelemen": "Integral",
    "indikator": "Menghitung luas daerah tertutup yang dibatasi kurva parabola dan sumbu koordinat. (25)",
    "kode": "TO26-MATLANJ-25",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLuas daerah yang dibatasi oleh kurva parabola \\( y = 6x - x^2 \\) dan sumbu X adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "18 satuan luas"
      },
      {
        "id": "B",
        "text": "24 satuan luas"
      },
      {
        "id": "C",
        "text": "36 satuan luas"
      },
      {
        "id": "D",
        "text": "48 satuan luas"
      },
      {
        "id": "E",
        "text": "54 satuan luas"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Luas Daerah Parabola:</strong><br>\n1. <strong>Tentukan batas integrasi (titik potong sumbu X saat \\(y = 0\\)):</strong><br>\n\\[ 6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0 \\quad \\text{atau} \\quad x = 6 \\]<br>\nKurva terbuka ke bawah (karena koefisien \\(x^2\\) bernilai negatif) dan berada di atas sumbu X pada interval \\([0, 6]\\).<br><br>\n2. <strong>Hitung luas dengan integral tentu:</strong><br>\n\\[ L = \\int_{0}^{6} (6x - x^2) \\, dx = \\left[ 3x^2 - \\frac{1}{3}x^3 \\right]_{0}^{6} \\]<br>\n\\[ = \\left( 3(6^2) - \\frac{1}{3}(6^3) \\right) - 0 = (3 \\times 36 - 72) = 108 - 72 = 36 \\text{ satuan luas} \\]<br>\n(Atau dengan rumus praktis Archimedes luas segmen parabola: \\( L = \\frac{D\\sqrt{D}}{6a^2} = \\frac{36 \\times 6}{6 \\times 1} = 36 \\)).<br>\n<strong>Kunci Jawaban: C</strong>"
  }
];

// Inisialisasi Paket 2 Matematika Tingkat Lanjut
if (typeof window !== 'undefined') {
  window.tkaMatematikaLanjutPaket2Data = tkaMatematikaLanjutPaket2Data;
  window.tkaMatematikaLanjutPackages = window.tkaMatematikaLanjutPackages || {};
  window.tkaMatematikaLanjutPackages['paket2'] = {
    title: "Paket 2: Try Out HOTS TKA Matematika Tingkat Lanjut SMA 2025/2026",
    shortTitle: "Paket 2 (Try Out HOTS 2025/2026 • 25 Soal KaTeX)",
    data: tkaMatematikaLanjutPaket2Data
  };
}
