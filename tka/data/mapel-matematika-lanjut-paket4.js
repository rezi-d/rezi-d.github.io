// tka/data/mapel-matematika-lanjut-paket4.js
// Paket 4: Try Out TKA-2 Prosus Inten Matematika Tingkat Lanjut SMA 2026/2027 (25 Soal)
// Memuat variasi tipe soal: Pilihan Ganda (pg), Pilihan Ganda Kompleks (mcma), dan Pernyataan Benar/Salah (kompleks_bs)
// Bebas simbol dolar mentah, dilengkapi tabel HTML dan ilustrasi SVG presisi serta pembahasan langkah demi langkah

const tkaMatematikaLanjutPaket4Data = [
  {
    "id": 1,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menentukan jumlah semua unsur matriks invers dari persamaan perkalian matriks 2x2.",
    "kode": "INTEN-TKA2-MATL-01",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nJika berlaku persamaan matriks:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ \\begin{pmatrix} 2 & 4 \\\\ 0 & 1 \\end{pmatrix} A = \\begin{pmatrix} 2 & 3 \\\\ 0 & 1 \\end{pmatrix} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nmaka jumlah semua unsur matriks \\( A^{-1} \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\frac{3}{2} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\frac{5}{2} \\)"
      },
      {
        "id": "C",
        "text": "\\( 3 \\)"
      },
      {
        "id": "D",
        "text": "\\( \\frac{11}{2} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\frac{15}{2} \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Persamaan &amp; Invers Matriks:</strong><br>\nMisalkan \\( P = \\begin{pmatrix} 2 & 4 \\\\ 0 & 1 \\end{pmatrix} \\) dan \\( Q = \\begin{pmatrix} 2 & 3 \\\\ 0 & 1 \\end{pmatrix} \\), sehingga \\( P A = Q \\).<br>\n1. <strong>Menentukan matriks \\( A^{-1} \\):</strong><br>\nDari \\( P A = Q \\), maka \\( A = P^{-1} Q \\), sehingga:<br>\n\\[ A^{-1} = (P^{-1} Q)^{-1} = Q^{-1} P \\]<br>\n2. <strong>Hitung \\( Q^{-1} \\):</strong><br>\n\\[ \\det(Q) = (2)(1) - (3)(0) = 2 \\]<br>\n\\[ Q^{-1} = \\frac{1}{2} \\begin{pmatrix} 1 & -3 \\\\ 0 & 2 \\end{pmatrix} \\]<br>\n3. <strong>Kalikan \\( Q^{-1} \\) dengan \\( P \\):</strong><br>\n\\[ A^{-1} = \\frac{1}{2} \\begin{pmatrix} 1 & -3 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & 4 \\\\ 0 & 1 \\end{pmatrix} = \\frac{1}{2} \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & \\frac{1}{2} \\\\ 0 & 1 \\end{pmatrix} \\]<br>\n4. <strong>Jumlah semua unsur matriks \\( A^{-1} \\):</strong><br>\n\\[ 1 + \\frac{1}{2} + 0 + 1 = \\frac{5}{2} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 2,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Menganalisis sifat-sifat determinan dari operasi penjumlahan, perkalian, transpos, dan invers matriks 2x2.",
    "kode": "INTEN-TKA2-MATL-02",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui matriks:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix} \\quad \\text{dan} \\quad B = \\begin{pmatrix} 2 & -1 \\\\ 1 & 1 \\end{pmatrix} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPernyataan berikut yang benar adalah .... (Pilihan jawaban benar lebih dari satu)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\text{Det}(A + B) = 4 \\)"
      },
      {
        "id": "B",
        "text": "\\( \\text{Det}(AB) = 3 \\)"
      },
      {
        "id": "C",
        "text": "\\( \\text{Det}(A^T B) = 2 \\)"
      },
      {
        "id": "D",
        "text": "\\( \\text{Det}(3AB^{-1}) = 1 \\)"
      },
      {
        "id": "E",
        "text": "\\( \\text{Det}\\,6(AB)^{-1} = 12 \\)"
      }
    ],
    "kunci": [
      "B",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Sifat Determinan Matriks Ordo 2&times;2:</strong><br>\nHitung determinan masing-masing matriks terlebih dahulu:<br>\n&bull; \\( \\det(A) = (2)(3) - (5)(1) = 6 - 5 = 1 \\)<br>\n&bull; \\( \\det(B) = (2)(1) - (-1)(1) = 2 + 1 = 3 \\)<br><br>\nUji setiap pernyataan:<br>\n1. <strong>Opsi A:</strong> \\( A + B = \\begin{pmatrix} 4 & 4 \\\\ 2 & 4 \\end{pmatrix} \\implies \\det(A + B) = (4)(4) - (4)(2) = 16 - 8 = 8 \\neq 4 \\) (<strong>Salah</strong>).<br>\n2. <strong>Opsi B:</strong> \\( \\det(AB) = \\det(A) \\cdot \\det(B) = 1 \\times 3 = 3 \\) (<strong>Benar</strong>).<br>\n3. <strong>Opsi C:</strong> \\( \\det(A^T B) = \\det(A^T) \\cdot \\det(B) = 1 \\times 3 = 3 \\neq 2 \\) (<strong>Salah</strong>).<br>\n4. <strong>Opsi D:</strong> Karena matriks berordo \\( 2 \\times 2 \\), berlaku \\( \\det(kM) = k^2 \\det(M) \\):<br>\n   \\( \\det(3AB^{-1}) = 3^2 \\cdot \\det(A) \\cdot \\frac{1}{\\det(B)} = 9 \\cdot 1 \\cdot \\frac{1}{3} = 3 \\neq 1 \\) (<strong>Salah</strong>).<br>\n5. <strong>Opsi E:</strong> \\( \\det(6(AB)^{-1}) = 6^2 \\cdot \\frac{1}{\\det(AB)} = 36 \\cdot \\frac{1}{3} = 12 \\) (<strong>Benar</strong>).<br><br>\n<strong>Kunci Jawaban: B dan E</strong>"
  },
  {
    "id": 3,
    "elemen": "Aljabar",
    "subelemen": "Matriks",
    "indikator": "Memodelkan permasalahan kontekstual pendapatan penjualan tiket ke dalam persamaan perkalian matriks.",
    "kode": "INTEN-TKA2-MATL-03",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nJumlah penumpang kereta api X dan Y pada suatu hari adalah sebagai berikut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-full text-xs sm:text-sm text-center border border-slate-300 rounded-lg overflow-hidden\">\n    <thead class=\"bg-slate-800 text-white font-bold\">\n      <tr>\n        <th class=\"p-2.5 border border-slate-600\">Kereta Api</th>\n        <th class=\"p-2.5 border border-slate-600\">Kelas Bisnis</th>\n        <th class=\"p-2.5 border border-slate-600\">Kelas Eksekutif</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class=\"bg-white\">\n        <td class=\"p-2.5 border border-slate-300 font-bold text-slate-900\">Kereta api X</td>\n        <td class=\"p-2.5 border border-slate-300\">200 penumpang</td>\n        <td class=\"p-2.5 border border-slate-300\">60 penumpang</td>\n      </tr>\n      <tr class=\"bg-slate-50\">\n        <td class=\"p-2.5 border border-slate-300 font-bold text-slate-900\">Kereta api Y</td>\n        <td class=\"p-2.5 border border-slate-300\">150 penumpang</td>\n        <td class=\"p-2.5 border border-slate-300\">80 penumpang</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nHarga tiket kereta api adalah Rp90.000,00 untuk kelas bisnis dan Rp150.000,00 untuk kelas eksekutif. Jika \\( x \\) dan \\( y \\) berturut-turut menyatakan pendapatan kereta api X dan Y, maka besar pendapatan yang diterima dari penjualan tiket kereta api X dan Y dapat diselesaikan dengan menggunakan persamaan bentuk matriks ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 200 & 60 \\\\ 150 & 80 \\end{pmatrix} \\begin{pmatrix} 90.000 \\\\ 150.000 \\end{pmatrix} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 200 & 150 \\\\ 60 & 80 \\end{pmatrix} \\begin{pmatrix} 90.000 \\\\ 150.000 \\end{pmatrix} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 200 & 80 \\\\ 60 & 150 \\end{pmatrix} \\begin{pmatrix} 90.000 \\\\ 150.000 \\end{pmatrix} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\begin{pmatrix} 200 & 60 \\\\ 150 & 80 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 90.000 \\\\ 150.000 \\end{pmatrix} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\begin{pmatrix} 200 & 150 \\\\ 60 & 80 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 90.000 \\\\ 150.000 \\end{pmatrix} \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Pemodelan Perkalian Matriks:</strong><br>\n1. <strong>Pendapatan Kereta api X (\\(x\\)):</strong><br>\n   Terdiri atas 200 penumpang kelas bisnis dan 60 penumpang kelas eksekutif:<br>\n   \\[ x = 200(90.000) + 60(150.000) \\]<br>\n2. <strong>Pendapatan Kereta api Y (\\(y\\)):</strong><br>\n   Terdiri atas 150 penumpang kelas bisnis dan 80 penumpang kelas eksekutif:<br>\n   \\[ y = 150(90.000) + 80(150.000) \\]<br>\n3. <strong>Representasi Matriks:</strong><br>\n   \\[ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 200 & 60 \\\\ 150 & 80 \\end{pmatrix} \\begin{pmatrix} 90.000 \\\\ 150.000 \\end{pmatrix} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 4,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan titik-titik yang terletak pada bayangan lingkaran hasil komposisi pencerminan dan translasi.",
    "kode": "INTEN-TKA2-MATL-04",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLingkaran \\( L \\) merupakan bayangan lingkaran \\( x^2 + y^2 = 4 \\) bila dicerminkan terhadap garis \\( x = 2 \\) dilanjutkan dengan translasi \\( \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix} \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah titik yang terletak pada lingkaran \\( L \\)? Pilihlah semua jawaban yang benar. Jawaban yang benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( (3, 4) \\)"
      },
      {
        "id": "B",
        "text": "\\( (2, 3) \\)"
      },
      {
        "id": "C",
        "text": "\\( (1, 6) \\)"
      },
      {
        "id": "D",
        "text": "\\( (-1, 4) \\)"
      },
      {
        "id": "E",
        "text": "\\( (-2, 2) \\)"
      }
    ],
    "kunci": [
      "A",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Transformasi Lingkaran:</strong><br>\nLingkaran awal \\( x^2 + y^2 = 4 \\) memiliki pusat \\( P(0, 0) \\) dan jari-jari \\( r = 2 \\).<br>\nTransformasi pencerminan dan translasi merupakan transformasi isometri sehingga ukuran jari-jari tetap (\\( r' = 2 \\)).<br>\n1. <strong>Transformasikan titik pusat \\( P(0, 0) \\):</strong><br>\n   &bull; Dicerminkan terhadap garis \\( x = 2 \\):<br>\n     \\( P'(2(2) - 0, \\, 0) = P'(4, 0) \\).<br>\n   &bull; Dilanjutkan translasi \\( T = \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix} \\):<br>\n     \\( P''(4 + (-3), \\, 0 + 4) = P''(1, 4) \\).<br>\n2. <strong>Persamaan Lingkaran Bayangan \\( L \\):</strong><br>\n   \\[ (x - 1)^2 + (y - 4)^2 = 4 \\]<br>\n3. <strong>Uji setiap titik pada opsi:</strong><br>\n   &bull; <strong>A. (3, 4):</strong> \\( (3 - 1)^2 + (4 - 4)^2 = 4 + 0 = 4 \\) (<strong>Benar</strong>)<br>\n   &bull; <strong>B. (2, 3):</strong> \\( (2 - 1)^2 + (3 - 4)^2 = 1 + 1 = 2 \\neq 4 \\) (Salah)<br>\n   &bull; <strong>C. (1, 6):</strong> \\( (1 - 1)^2 + (6 - 4)^2 = 0 + 4 = 4 \\) (<strong>Benar</strong>)<br>\n   &bull; <strong>D. (-1, 4):</strong> \\( (-1 - 1)^2 + (4 - 4)^2 = 4 + 0 = 4 \\) (<strong>Benar</strong>)<br>\n   &bull; <strong>E. (-2, 2):</strong> \\( (-2 - 1)^2 + (2 - 4)^2 = 9 + 4 = 13 \\neq 4 \\) (Salah)<br><br>\n<strong>Kunci Jawaban: A, C, dan D</strong>"
  },
  {
    "id": 5,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan nilai fungsi dari peta garis yang dirotasikan terhadap titik pusat (a, b).",
    "kode": "INTEN-TKA2-MATL-05",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGaris \\( y = 3x - 2 \\) dirotasi \\( 90^\\circ \\) searah jarum jam dengan pusat \\( (2, 1) \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika hasil peta dari garis tersebut adalah \\( g(x) \\), maka nilai dari \\( g(8) = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 4 \\)"
      },
      {
        "id": "B",
        "text": "\\( 2 \\)"
      },
      {
        "id": "C",
        "text": "\\( 1 \\)"
      },
      {
        "id": "D",
        "text": "\\( 0 \\)"
      },
      {
        "id": "E",
        "text": "\\( -1 \\)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Rotasi Garis terhadap Pusat (2, 1):</strong><br>\nRotasi \\( 90^\\circ \\) searah jarum jam memiliki sudut rotasi \\( \\theta = -90^\\circ \\) dengan pusat \\( (a, b) = (2, 1) \\).<br>\n1. <strong>Rumus hubungan koordinat bayangan \\( (x', y') \\):</strong><br>\n\\[ \\begin{pmatrix} x' - 2 \\\\ y' - 1 \\end{pmatrix} = \\begin{pmatrix} \\cos(-90^\\circ) & -\\sin(-90^\\circ) \\\\ \\sin(-90^\\circ) & \\cos(-90^\\circ) \\end{pmatrix} \\begin{pmatrix} x - 2 \\\\ y - 1 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x - 2 \\\\ y - 1 \\end{pmatrix} \\]<br>\nSehingga:<br>\n&bull; \\( x' - 2 = y - 1 \\implies y = x' - 1 \\)<br>\n&bull; \\( y' - 1 = -(x - 2) \\implies x = 3 - y' \\)<br><br>\n2. <strong>Substitusikan ke persamaan garis awal \\( y = 3x - 2 \\):</strong><br>\n\\[ x' - 1 = 3(3 - y') - 2 \\]<br>\n\\[ x' - 1 = 9 - 3y' - 2 \\]<br>\n\\[ 3y' = 8 - x' \\implies y' = \\frac{8 - x'}{3} \\]<br>\nDiperoleh fungsi peta garis: \\( g(x) = \\frac{8 - x}{3} \\).<br><br>\n3. <strong>Hitung nilai \\( g(8) \\):</strong><br>\n\\[ g(8) = \\frac{8 - 8}{3} = 0 \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 6,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menentukan komponen tak diketahui dari vektor di ruang dimensi tiga berdasarkan panjang vektornya.",
    "kode": "INTEN-TKA2-MATL-06",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nMisalkan \\( \\vec{a} = \\begin{pmatrix} 2 - x \\\\ 3 \\\\ 4 \\end{pmatrix} \\) adalah vektor di \\( \\mathbb{R}^3 \\) dengan \\( x > 0 \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika panjang dari vektor \\( \\vec{a} \\) adalah 13 satuan, maka nilai dari \\( x \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 2 \\)"
      },
      {
        "id": "B",
        "text": "\\( 4 \\)"
      },
      {
        "id": "C",
        "text": "\\( 10 \\)"
      },
      {
        "id": "D",
        "text": "\\( 12 \\)"
      },
      {
        "id": "E",
        "text": "\\( 14 \\)"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan Panjang (Norma) Vektor di \\( \\mathbb{R}^3 \\):</strong><br>\nDiketahui \\( |\\vec{a}| = 13 \\), sehingga:<br>\n\\[ \\sqrt{(2 - x)^2 + 3^2 + 4^2} = 13 \\]<br>\nKuadratkan kedua ruas:<br>\n\\[ (2 - x)^2 + 9 + 16 = 169 \\]<br>\n\\[ (2 - x)^2 + 25 = 169 \\]<br>\n\\[ (2 - x)^2 = 144 \\]<br>\n\\[ 2 - x = 12 \\quad \\text{atau} \\quad 2 - x = -12 \\]<br>\n&bull; Untuk \\( 2 - x = 12 \\implies x = -10 \\) (tidak memenuhi karena syarat \\( x > 0 \\)).<br>\n&bull; Untuk \\( 2 - x = -12 \\implies x = 14 \\) (memenuhi \\( x > 0 \\)).<br><br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    "id": 7,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menentukan komponen vektor yang menghubungkan titik tengah dua rusuk pada balok di ruang tiga dimensi.",
    "kode": "INTEN-TKA2-MATL-07",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui balok \\( ABCD.EFGH \\) dengan titik \\( A(0, 0, 0) \\). Vektor-vektor posisi pembentuk balok adalah:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ \\overrightarrow{AB} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\quad \\overrightarrow{AD} = \\begin{pmatrix} 0 \\\\ 6 \\\\ 0 \\end{pmatrix}, \\quad \\overrightarrow{AE} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 10 \\end{pmatrix} \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTitik \\( P \\) dan titik \\( Q \\) berturut-turut terletak di pertengahan rusuk \\( EH \\) dan \\( CG \\). Jika \\( \\overrightarrow{PQ} = \\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix} \\), maka nilai dari \\( a^2 + 2b + 3c = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 5 \\)"
      },
      {
        "id": "B",
        "text": "\\( 7 \\)"
      },
      {
        "id": "C",
        "text": "\\( 9 \\)"
      },
      {
        "id": "D",
        "text": "\\( 10 \\)"
      },
      {
        "id": "E",
        "text": "\\( 13 \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Vektor Posisi pada Balok \\( ABCD.EFGH \\):</strong><br>\nDengan titik pangkal \\( A(0, 0, 0) \\), koordinat titik-titik sudut balok adalah:<br>\n&bull; \\( E = (0, 0, 10) \\) dan \\( H = \\overrightarrow{AD} + \\overrightarrow{AE} = (0, 6, 10) \\)<br>\n&bull; \\( C = \\overrightarrow{AB} + \\overrightarrow{AD} = (4, 6, 0) \\) dan \\( G = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE} = (4, 6, 10) \\)<br><br>\n1. <strong>Koordinat titik tengah \\( P \\) (pertengahan \\( EH \\)):</strong><br>\n\\[ P = \\frac{E + H}{2} = \\frac{(0, 0, 10) + (0, 6, 10)}{2} = (0, 3, 10) \\]<br>\n2. <strong>Koordinat titik tengah \\( Q \\) (pertengahan \\( CG \\)):</strong><br>\n\\[ Q = \\frac{C + G}{2} = \\frac{(4, 6, 0) + (4, 6, 10)}{2} = (4, 6, 5) \\]<br>\n3. <strong>Vektor \\( \\overrightarrow{PQ} \\):</strong><br>\n\\[ \\overrightarrow{PQ} = Q - P = \\begin{pmatrix} 4 - 0 \\\\ 6 - 3 \\\\ 5 - 10 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 3 \\\\ -5 \\end{pmatrix} \\implies a = 4, \\; b = 3, \\; c = -5 \\]<br>\n4. <strong>Hitung nilai \\( a^2 + 2b + 3c \\):</strong><br>\n\\[ a^2 + 2b + 3c = 4^2 + 2(3) + 3(-5) = 16 + 6 - 15 = 7 \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 8,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Vektor",
    "indikator": "Menganalisis panjang segmen lintasan lurus pesawat di ruang 3D berdasarkan perbandingan waktu tempuh pada kecepatan konstan.",
    "kode": "INTEN-TKA2-MATL-08",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah pesawat terbang terpantau sedang melakukan penerbangan dengan kecepatan konstan pada sebuah lintasan lurus. Gambar berikut merupakan pergerakan pesawat tersebut yang dilengkapi waktu tempuh antar titik.\n</p>\n<div class=\"my-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 520 130\" class=\"w-full max-w-lg mx-auto bg-white border border-slate-200 rounded-lg p-2\">\n    <!-- Garis lintasan naik -->\n    <line x1=\"45\" y1=\"65\" x2=\"475\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n    <!-- Garis vertikal ke sumbu waktu -->\n    <line x1=\"55\" y1=\"64\" x2=\"55\" y2=\"92\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"160\" y1=\"54\" x2=\"160\" y2=\"92\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"265\" y1=\"45\" x2=\"265\" y2=\"92\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"370\" y1=\"35\" x2=\"370\" y2=\"92\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"465\" y1=\"26\" x2=\"465\" y2=\"92\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <!-- Titik posisi pesawat -->\n    <circle cx=\"55\" cy=\"64\" r=\"4\" fill=\"#0284c7\"/>\n    <circle cx=\"160\" cy=\"54\" r=\"4\" fill=\"#0284c7\"/>\n    <circle cx=\"265\" cy=\"45\" r=\"4\" fill=\"#0284c7\"/>\n    <circle cx=\"370\" cy=\"35\" r=\"4\" fill=\"#0284c7\"/>\n    <circle cx=\"465\" cy=\"26\" r=\"4\" fill=\"#0284c7\"/>\n    <!-- Garis waktu horizontal -->\n    <line x1=\"55\" y1=\"92\" x2=\"465\" y2=\"92\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <circle cx=\"55\" cy=\"92\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"160\" cy=\"92\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"265\" cy=\"92\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"370\" cy=\"92\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"465\" cy=\"92\" r=\"3.5\" fill=\"#0f172a\"/>\n    <!-- Label titik A B C D E -->\n    <text x=\"55\" y=\"114\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">A</text>\n    <text x=\"160\" y=\"114\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">B</text>\n    <text x=\"265\" y=\"114\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">C</text>\n    <text x=\"370\" y=\"114\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">D</text>\n    <text x=\"465\" y=\"114\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">E</text>\n    <!-- Label selang waktu -->\n    <text x=\"107\" y=\"107\" font-size=\"11\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#1e293b\">5 menit</text>\n    <text x=\"212\" y=\"107\" font-size=\"11\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#1e293b\">4 menit</text>\n    <text x=\"317\" y=\"107\" font-size=\"11\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#1e293b\">3 menit</text>\n    <text x=\"417\" y=\"107\" font-size=\"11\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#1e293b\">2 menit</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika koordinat titik \\( A(4, 1, 3) \\) dan titik \\( E(7, 5, 15) \\), lintasan mana saja yang panjangnya tidak kurang dari 6 satuan? Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( AB \\)"
      },
      {
        "id": "B",
        "text": "\\( AC \\)"
      },
      {
        "id": "C",
        "text": "\\( BD \\)"
      },
      {
        "id": "D",
        "text": "\\( CD \\)"
      },
      {
        "id": "E",
        "text": "\\( DE \\)"
      }
    ],
    "kunci": [
      "B",
      "C"
    ],
    "pembahasan": "<strong>Pembahasan Perbandingan Vektor &amp; Jarak pada Kecepatan Konstan:</strong><br>\n1. <strong>Hitung panjang lintasan total \\( AE \\):</strong><br>\n   \\[ \\overrightarrow{AE} = E - A = (7 - 4, \\, 5 - 1, \\, 15 - 3) = (3, 4, 12) \\]<br>\n   \\[ |AE| = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13 \\text{ satuan} \\]<br>\n2. <strong>Total waktu tempuh \\( A \\to E \\):</strong><br>\n   \\[ t_{AE} = 5 + 4 + 3 + 2 = 14 \\text{ menit} \\]<br>\n   Karena kecepatan konstan, panjang setiap segmen sebanding dengan waktu tempuhnya: \\( L = \\frac{t}{14} \\times 13 \\).<br>\n   Agar \\( L \\ge 6 \\), diperlukan waktu tempuh \\( t \\ge \\frac{6 \\times 14}{13} = \\frac{84}{13} \\approx 6{,}46 \\text{ menit} \\).<br><br>\n3. <strong>Evaluasi panjang masing-masing lintasan:</strong><br>\n   &bull; <strong>A. Lintasan AB</strong> (\\( t = 5 \\) menit): \\( |AB| = \\frac{5}{14} \\times 13 = \\frac{65}{14} \\approx 4{,}64 &lt; 6 \\) (Salah)<br>\n   &bull; <strong>B. Lintasan AC</strong> (\\( t = 5 + 4 = 9 \\) menit): \\( |AC| = \\frac{9}{14} \\times 13 = \\frac{117}{14} \\approx 8{,}36 \\ge 6 \\) (<strong>Benar</strong>)<br>\n   &bull; <strong>C. Lintasan BD</strong> (\\( t = 4 + 3 = 7 \\) menit): \\( |BD| = \\frac{7}{14} \\times 13 = 6{,}5 \\ge 6 \\) (<strong>Benar</strong>)<br>\n   &bull; <strong>D. Lintasan CD</strong> (\\( t = 3 \\) menit): \\( |CD| = \\frac{3}{14} \\times 13 = \\frac{39}{14} \\approx 2{,}79 &lt; 6 \\) (Salah)<br>\n   &bull; <strong>E. Lintasan DE</strong> (\\( t = 2 \\) menit): \\( |DE| = \\frac{2}{14} \\times 13 = \\frac{26}{14} \\approx 1{,}86 &lt; 6 \\) (Salah)<br><br>\n<strong>Kunci Jawaban: B dan C</strong>"
  },
  {
    "id": 9,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan nilai parameter koefisien dua garis yang ditransformasikan oleh komposisi translasi dan refleksi.",
    "kode": "INTEN-TKA2-MATL-09",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBayangan garis \\( ax + 2y - 5 = 0 \\) oleh translasi \\( T\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} \\) dan dilanjutkan dengan pencerminan terhadap garis \\( x = 1 \\) adalah garis dengan persamaan \\( 3x - 2y + 11 = 0 \\).\n</p>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGaris lainnya yaitu \\( -2x + by - 3 = 0 \\) bila ditransformasi dengan transformasi yang sama, akan diperoleh bayangan garis dengan persamaan \\( 2x - y = 0 \\). Nilai \\( 2a + b = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 7 \\)"
      },
      {
        "id": "B",
        "text": "\\( 6 \\)"
      },
      {
        "id": "C",
        "text": "\\( 5 \\)"
      },
      {
        "id": "D",
        "text": "\\( -5 \\)"
      },
      {
        "id": "E",
        "text": "\\( -7 \\)"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Komposisi Transformasi Garis:</strong><br>\n1. <strong>Menentukan pemetaan titik \\( (x, y) \\to (x', y') \\):</strong><br>\n   &bull; Translasi \\( T\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} \\): \\( (x, y) \\to (x + 2, \\, y + 3) \\).<br>\n   &bull; Pencerminan terhadap garis \\( x = 1 \\):<br>\n     \\( x' = 2(1) - (x + 2) = -x \\implies x = -x' \\)<br>\n     \\( y' = y + 3 \\implies y = y' - 3 \\)<br><br>\n2. <strong>Substitusi ke garis pertama \\( ax + 2y - 5 = 0 \\):</strong><br>\n   \\[ a(-x') + 2(y' - 3) - 5 = 0 \\iff -ax' + 2y' - 11 = 0 \\iff ax' - 2y' + 11 = 0 \\]<br>\n   Bandingkan dengan bayangan \\( 3x - 2y + 11 = 0 \\), diperoleh \\( a = 3 \\).<br><br>\n3. <strong>Substitusi ke garis kedua \\( -2x + by - 3 = 0 \\):</strong><br>\n   \\[ -2(-x') + b(y' - 3) - 3 = 0 \\iff 2x' + by' - (3b + 3) = 0 \\]<br>\n   Bandingkan dengan bayangan \\( 2x - y = 0 \\), diperoleh \\( b = -1 \\) (yang juga memenuhi \\( 3(-1) + 3 = 0 \\)).<br><br>\n4. <strong>Hitung nilai \\( 2a + b \\):</strong><br>\n   \\[ 2a + b = 2(3) + (-1) = 5 \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 10,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan hasil bagi dan sisa pembagian suku banyak derajat tiga oleh suku banyak derajat dua.",
    "kode": "INTEN-TKA2-MATL-10",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui suku banyak \\( x^3 + 14x^2 - 5x + 3 \\) dibagi oleh \\( x^2 + 3x - 4 \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPilihlah semua jawaban yang benar. Jawaban yang benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Hasil baginya adalah \\( x - 11 \\)"
      },
      {
        "id": "B",
        "text": "Hasil bagi adalah \\( x + 11 \\)"
      },
      {
        "id": "C",
        "text": "Sisanya adalah \\( -34x + 47 \\)"
      },
      {
        "id": "D",
        "text": "Sisanya adalah \\( 34x - 47 \\)"
      },
      {
        "id": "E",
        "text": "Sisanya adalah \\( -34x - 47 \\)"
      }
    ],
    "kunci": [
      "B",
      "C"
    ],
    "pembahasan": "<strong>Pembahasan Pembagian Suku Banyak:</strong><br>\nKita bagi \\( P(x) = x^3 + 14x^2 - 5x + 3 \\) dengan \\( Q(x) = x^2 + 3x - 4 \\):<br>\n1. Langkah pertama: \\( \\frac{x^3}{x^2} = x \\).<br>\n   Kalikan: \\( x(x^2 + 3x - 4) = x^3 + 3x^2 - 4x \\).<br>\n   Kurangkan dari \\( P(x) \\):<br>\n   \\[ (x^3 + 14x^2 - 5x + 3) - (x^3 + 3x^2 - 4x) = 11x^2 - x + 3 \\]<br>\n2. Langkah kedua: \\( \\frac{11x^2}{x^2} = 11 \\).<br>\n   Kalikan: \\( 11(x^2 + 3x - 4) = 11x^2 + 33x - 44 \\).<br>\n   Kurangkan:<br>\n   \\[ (11x^2 - x + 3) - (11x^2 + 33x - 44) = -34x + 47 \\]<br>\nJadi:<br>\n&bull; <strong>Hasil bagi:</strong> \\( H(x) = x + 11 \\) (<strong>Opsi B Benar</strong>)<br>\n&bull; <strong>Sisa pembagian:</strong> \\( S(x) = -34x + 47 \\) (<strong>Opsi C Benar</strong>)<br><br>\n<strong>Kunci Jawaban: B dan C</strong>"
  },
  {
    "id": 11,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menganalisis koefisien dan faktor-faktor linier lain dari suku banyak berderajat tiga menggunakan Teorema Faktor.",
    "kode": "INTEN-TKA2-MATL-11",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuku banyak \\( P(x) = 2x^3 + 7x^2 + ax - 3 \\) mempunyai faktor \\( (2x - 1) \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan <strong>Benar</strong> atau <strong>Salah</strong> untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "pernyataan": "Nilai \\( a = 10 \\)",
        "text": "Nilai \\( a = 10 \\)",
        "kunci": "Salah"
      },
      {
        "id": 2,
        "pernyataan": "\\( (x + 1) \\) juga merupakan faktor yang lain dari suku banyak \\( P(x) \\)",
        "text": "\\( (x + 1) \\) juga merupakan faktor yang lain dari suku banyak \\( P(x) \\)",
        "kunci": "Benar"
      },
      {
        "id": 3,
        "pernyataan": "\\( (x - 3) \\) juga merupakan faktor yang lain dari suku banyak \\( P(x) \\)",
        "text": "\\( (x - 3) \\) juga merupakan faktor yang lain dari suku banyak \\( P(x) \\)",
        "kunci": "Salah"
      }
    ],
    "kunci": [
      "Salah",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Pembahasan Teorema Faktor Polinomial:</strong><br>\n1. <strong>Menentukan nilai \\( a \\):</strong><br>\n   Karena \\( (2x - 1) \\) adalah faktor dari \\( P(x) \\), maka \\( P\\left(\\frac{1}{2}\\right) = 0 \\):<br>\n   \\[ 2\\left(\\frac{1}{2}\\right)^3 + 7\\left(\\frac{1}{2}\\right)^2 + a\\left(\\frac{1}{2}\\right) - 3 = 0 \\]<br>\n   \\[ \\frac{1}{4} + \\frac{7}{4} + \\frac{a}{2} - 3 = 0 \\implies 2 + \\frac{a}{2} - 3 = 0 \\implies a = 2 \\]<br>\n   Maka Pernyataan 1 (\\( a = 10 \\)) bernilai <strong>Salah</strong>.<br><br>\n2. <strong>Menentukan faktor-faktor lainnya:</strong><br>\n   Substitusikan \\( a = 2 \\): \\( P(x) = 2x^3 + 7x^2 + 2x - 3 \\).<br>\n   Faktorkan dengan membagi \\( P(x) \\) oleh \\( (2x - 1) \\):<br>\n   \\[ 2x^3 + 7x^2 + 2x - 3 = (2x - 1)(x^2 + 4x + 3) = (2x - 1)(x + 1)(x + 3) \\]<br>\n   Faktor-faktor linier lainnya adalah \\( (x + 1) \\) dan \\( (x + 3) \\).<br>\n   &bull; Pernyataan 2: \\( (x + 1) \\) merupakan faktor \\( P(x) \\) &rarr; <strong>Benar</strong>.<br>\n   &bull; Pernyataan 3: \\( (x - 3) \\) merupakan faktor \\( P(x) \\) &rarr; <strong>Salah</strong> (faktornya adalah \\( x + 3 \\)).<br><br>\n<strong>Kunci Jawaban: Salah, Benar, Salah</strong>"
  },
  {
    "id": 12,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan koordinat titik potong grafik fungsi polinomial derajat tiga dengan sumbu-X.",
    "kode": "INTEN-TKA2-MATL-12",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui grafik fungsi polinomial \\( f(x) = x^3 + x^2 - 12x \\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPada koordinat titik manakah grafik fungsi berpotongan dengan sumbu-x? Pilihlah semua jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( (-4, 0) \\)"
      },
      {
        "id": "B",
        "text": "\\( (-3, 0) \\)"
      },
      {
        "id": "C",
        "text": "\\( (0, 0) \\)"
      },
      {
        "id": "D",
        "text": "\\( (3, 0) \\)"
      },
      {
        "id": "E",
        "text": "\\( (4, 0) \\)"
      }
    ],
    "kunci": [
      "A",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Titik Potong Grafik Polinomial dengan Sumbu-X:</strong><br>\nGrafik memotong sumbu-X ketika \\( f(x) = 0 \\):<br>\n\\[ x^3 + x^2 - 12x = 0 \\]<br>\n\\[ x(x^2 + x - 12) = 0 \\]<br>\n\\[ x(x + 4)(x - 3) = 0 \\]<br>\nDiperoleh pembuat nol: \\( x = -4 \\), \\( x = 0 \\), atau \\( x = 3 \\).<br>\nSehingga titik potong grafik dengan sumbu-X adalah \\( (-4, 0) \\), \\( (0, 0) \\), dan \\( (3, 0) \\).<br><br>\n<strong>Kunci Jawaban: A, C, dan D</strong>"
  },
  {
    "id": 13,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Menentukan fungsi polinomial total volume dari beberapa tangki identik yang beroperasi bersamaan.",
    "kode": "INTEN-TKA2-MATL-13",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah laboratorium kimia menggunakan tangki pencampur untuk mereaksikan beberapa senyawa. Hubungan antara volume larutan senyawa yang ditampung dalam satu tangki (\\(V\\)) dalam liter dan waktu (\\(t\\)) dalam jam dimodelkan oleh fungsi polinomial:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ V(t) = t^3 - 2t^2 + 5t \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nUntuk kebutuhan penelitian, laboratorium menjalankan 5 tangki secara bersamaan dengan waktu reaksi yang sama. Total volume larutan senyawa dalam tangki-tangki tersebut dapat dinyatakan dengan ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 5t^3 - 10t^2 + 25t \\)"
      },
      {
        "id": "B",
        "text": "\\( 5t^3 - 2t^2 + 5t \\)"
      },
      {
        "id": "C",
        "text": "\\( 15t^3 - 10t^2 + 25t \\)"
      },
      {
        "id": "D",
        "text": "\\( 15t^3 - 50t^2 + 25t \\)"
      },
      {
        "id": "E",
        "text": "\\( 125t^3 - 50t^2 + 25t \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Perkalian Skalar Polinomial:</strong><br>\nJika 1 tangki menampung \\( V(t) = t^3 - 2t^2 + 5t \\), maka 5 tangki identik yang berjalan bersamaan selama waktu \\( t \\) yang sama memiliki total volume:<br>\n\\[ V_{\\text{total}}(t) = 5 \\cdot V(t) = 5(t^3 - 2t^2 + 5t) = 5t^3 - 10t^2 + 25t \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 14,
    "elemen": "Aljabar",
    "subelemen": "Polinomial",
    "indikator": "Mengevaluasi akar-akar persamaan polinomial untuk menentukan dosis konsumsi zat harian yang menghasilkan tingkat kebugaran netral.",
    "kode": "INTEN-TKA2-MATL-14",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah eksperimen dilakukan untuk mengamati hubungan antara banyaknya konsumsi harian zat X dan tingkat kebugaran seseorang. Dalam eksperimen tersebut, tingkat kebugaran dinyatakan dalam rentang \\(-10\\) sampai \\(10\\) dengan \\(-10\\) menunjukkan kondisi yang sangat tidak bugar, \\(0\\) menunjukkan kondisi netral, dan \\(10\\) menunjukkan kondisi yang sangat bugar. Berdasarkan hasil eksperimen, tingkat kebugaran tersebut dapat dirumuskan sebagai berikut:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ B(k) = -k^3 + 4k^2 + k - 4 \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\( B(k) \\) menyatakan tingkat kebugaran seseorang dengan konsumsi harian zat X sebanyak \\( k \\) mg.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nApabila tingkat kebugaran yang akan dicapai adalah tingkat 0, tentukan apakah banyak zat X yang dikonsumsi berikut <strong>Tepat (Benar)</strong> atau <strong>Tidak Tepat (Salah)</strong>!\n</p>",
    "items": [
      {
        "id": 1,
        "pernyataan": "Banyak zat X yang dikonsumsi: <strong>2 mg</strong> (Tepat = Benar, Tidak Tepat = Salah)",
        "text": "Banyak zat X yang dikonsumsi: 2 mg (Tepat = Benar, Tidak Tepat = Salah)",
        "kunci": "Salah"
      },
      {
        "id": 2,
        "pernyataan": "Banyak zat X yang dikonsumsi: <strong>3 mg</strong> (Tepat = Benar, Tidak Tepat = Salah)",
        "text": "Banyak zat X yang dikonsumsi: 3 mg (Tepat = Benar, Tidak Tepat = Salah)",
        "kunci": "Salah"
      },
      {
        "id": 3,
        "pernyataan": "Banyak zat X yang dikonsumsi: <strong>4 mg</strong> (Tepat = Benar, Tidak Tepat = Salah)",
        "text": "Banyak zat X yang dikonsumsi: 4 mg (Tepat = Benar, Tidak Tepat = Salah)",
        "kunci": "Benar"
      }
    ],
    "kunci": [
      "Salah",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Pembahasan Persamaan Polinomial \\( B(k) = 0 \\):</strong><br>\nAgar mencapai tingkat kebugaran 0, selesaikan persamaan \\( B(k) = 0 \\):<br>\n\\[ -k^3 + 4k^2 + k - 4 = 0 \\iff k^3 - 4k^2 - k + 4 = 0 \\]<br>\nFaktorkan dengan pengelompokan suku:<br>\n\\[ k^2(k - 4) - 1(k - 4) = 0 \\iff (k - 4)(k^2 - 1) = 0 \\iff (k - 4)(k - 1)(k + 1) = 0 \\]<br>\nKarena \\( k \\ge 0 \\), maka nilai konsumsi yang menghasilkan tingkat kebugaran 0 adalah \\( k = 1 \\text{ mg} \\) atau \\( k = 4 \\text{ mg} \\).<br>\n&bull; Untuk \\( k = 2 \\text{ mg} \\): \\( B(2) = -8 + 16 + 2 - 4 = 6 \\neq 0 \\) &rarr; <strong>Tidak Tepat (Salah)</strong>.<br>\n&bull; Untuk \\( k = 3 \\text{ mg} \\): \\( B(3) = -27 + 36 + 3 - 4 = 8 \\neq 0 \\) &rarr; <strong>Tidak Tepat (Salah)</strong>.<br>\n&bull; Untuk \\( k = 4 \\text{ mg} \\): \\( B(4) = -64 + 64 + 4 - 4 = 0 \\) &rarr; <strong>Tepat (Benar)</strong>.<br><br>\n<strong>Kunci Jawaban: Salah, Salah, Benar</strong>"
  },
  {
    "id": 15,
    "elemen": "Aljabar",
    "subelemen": "Fungsi Eksponensial",
    "indikator": "Menginterpretasikan model fungsi pertumbuhan eksponensial pada kasus peningkatan jumlah penderita penyakit.",
    "kode": "INTEN-TKA2-MATL-15",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang peneliti memperkirakan sejak awal tahun 2023, peningkatan penderita diabetes di suatu negara mengikuti model:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ f(t) = \\frac{1}{8}(4^t) \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\( t \\) adalah lama waktu dalam tahun dan \\( f(t) \\) menyatakan peningkatan dalam ribuan orang.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBagaimana interpretasi yang tepat dari model matematika tersebut? Tentukan <strong>Benar</strong> atau <strong>Salah</strong> untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "pernyataan": "Jumlah penderita diabetes pada akhir tahun 2025 diperkirakan meningkat 3.000 orang.",
        "text": "Jumlah penderita diabetes pada akhir tahun 2025 diperkirakan meningkat 3.000 orang.",
        "kunci": "Salah"
      },
      {
        "id": 2,
        "pernyataan": "Peningkatan jumlah penderita diabetes setiap tahun dua kali lipat dari tahun sebelumnya.",
        "text": "Peningkatan jumlah penderita diabetes setiap tahun dua kali lipat dari tahun sebelumnya.",
        "kunci": "Salah"
      },
      {
        "id": 3,
        "pernyataan": "Peningkatan penderita diabetes dari awal tahun 2024 sampai dengan akhir tahun 2026 mencapai 31.500 orang.",
        "text": "Peningkatan penderita diabetes dari awal tahun 2024 sampai dengan akhir tahun 2026 mencapai 31.500 orang.",
        "kunci": "Benar"
      }
    ],
    "kunci": [
      "Salah",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Pembahasan Model Fungsi Eksponensial \\( f(t) = \\frac{1}{8}(4^t) \\):</strong><br>\nWaktu dihitung sejak awal tahun 2023 (\\( t = 0 \\)):<br>\n&bull; Akhir tahun 2023 / awal tahun 2024 (\\( t = 1 \\)): \\( f(1) = \\frac{1}{8}(4^1) = 0{,}5 \\text{ ribu} = 500 \\text{ orang} \\).<br>\n&bull; Akhir tahun 2024 / awal tahun 2025 (\\( t = 2 \\)): \\( f(2) = \\frac{1}{8}(4^2) = 2 \\text{ ribu} = 2.000 \\text{ orang} \\).<br>\n&bull; Akhir tahun 2025 / awal tahun 2026 (\\( t = 3 \\)): \\( f(3) = \\frac{1}{8}(4^3) = 8 \\text{ ribu} = 8.000 \\text{ orang} \\).<br>\n&bull; Akhir tahun 2026 (\\( t = 4 \\)): \\( f(4) = \\frac{1}{8}(4^4) = 32 \\text{ ribu} = 32.000 \\text{ orang} \\).<br><br>\nEvaluasi tiap pernyataan:<br>\n1. <strong>Pernyataan 1:</strong> Pada akhir tahun 2025 (\\( t = 3 \\)), peningkatan mencapai \\( f(3) = 8.000 \\text{ orang} \\) (bukan 3.000 orang) &rarr; <strong>Salah</strong>.<br>\n2. <strong>Pernyataan 2:</strong> Rasio peningkatan tiap tahun adalah \\( \\frac{f(t+1)}{f(t)} = \\frac{4^{t+1}}{4^t} = 4 \\) kali lipat dari tahun sebelumnya (bukan 2 kali lipat) &rarr; <strong>Salah</strong>.<br>\n3. <strong>Pernyataan 3:</strong> Dari awal tahun 2024 (\\( t = 1 \\)) sampai akhir tahun 2026 (\\( t = 4 \\)), pertambahan peningkatannya adalah \\( f(4) - f(1) = 32.000 - 500 = 31.500 \\text{ orang} \\) &rarr; <strong>Benar</strong>.<br><br>\n<strong>Kunci Jawaban: Salah, Salah, Benar</strong>"
  },
  {
    "id": 16,
    "elemen": "Aljabar",
    "subelemen": "Komposisi Fungsi & Fungsi Irasional",
    "indikator": "Menganalisis kecukupan modal distributor pada minggu ke-t menggunakan komposisi dua fungsi.",
    "kode": "INTEN-TKA2-MATL-16",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah distributor memasarkan suatu produk berdasarkan data dan pengalaman sebelumnya. Untuk menyediakan sebanyak \\( x \\) unit barang, kebutuhan modal yang diperkirakan dinyatakan oleh fungsi:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ p(x) = 10\\sqrt{x^2 - 6x + 18} \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\( p(x) \\) menyatakan kebutuhan modal dalam juta rupiah dan \\( x \\) menyatakan banyaknya barang dalam ribuan. Pada minggu ke-\\(t\\), jumlah barang yang dipasok dinyatakan dengan \\( x = x(t) \\) yang mengikuti model:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ x(t) = 1 + \\sqrt{t}, \\quad 0 \\le t \\le 49 \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDistributor memiliki modal yang tersedia sebesar Rp40 juta. Oleh karena itu, apabila pengeluaran barang melebihi Rp40 juta, dia akan melakukan pinjaman kepada bank untuk menutupi kekurangan dana tersebut.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah distributor <strong>Perlu (Benar)</strong> atau <strong>Tidak Perlu (Salah)</strong> melakukan pinjaman kepada bank pada waktu berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "pernyataan": "Waktu: <strong>Minggu ke-9</strong> (Perlu = Benar, Tidak Perlu = Salah)",
        "text": "Waktu: Minggu ke-9 (Perlu = Benar, Tidak Perlu = Salah)",
        "kunci": "Salah"
      },
      {
        "id": 2,
        "pernyataan": "Waktu: <strong>Minggu ke-16</strong> (Perlu = Benar, Tidak Perlu = Salah)",
        "text": "Waktu: Minggu ke-16 (Perlu = Benar, Tidak Perlu = Salah)",
        "kunci": "Salah"
      },
      {
        "id": 3,
        "pernyataan": "Waktu: <strong>Minggu ke-36</strong> (Perlu = Benar, Tidak Perlu = Salah)",
        "text": "Waktu: Minggu ke-36 (Perlu = Benar, Tidak Perlu = Salah)",
        "kunci": "Benar"
      },
      {
        "id": 4,
        "pernyataan": "Waktu: <strong>Minggu ke-49</strong> (Perlu = Benar, Tidak Perlu = Salah)",
        "text": "Waktu: Minggu ke-49 (Perlu = Benar, Tidak Perlu = Salah)",
        "kunci": "Benar"
      }
    ],
    "kunci": [
      "Salah",
      "Salah",
      "Benar",
      "Benar"
    ],
    "pembahasan": "<strong>Pembahasan Komposisi Fungsi Kebutuhan Modal \\( p(x(t)) \\):</strong><br>\nDistributor perlu melakukan pinjaman ke bank jika \\( p(x(t)) &gt; 40 \\text{ juta rupiah} \\).<br>\n1. <strong>Minggu ke-9 (\\( t = 9 \\)):</strong><br>\n   \\( x(9) = 1 + \\sqrt{9} = 4 \\)<br>\n   \\( p(4) = 10\\sqrt{4^2 - 6(4) + 18} = 10\\sqrt{10} \\approx 31{,}62 \\text{ juta} \\le 40 \\text{ juta} \\) &rarr; <strong>Tidak Perlu (Salah)</strong>.<br>\n2. <strong>Minggu ke-16 (\\( t = 16 \\)):</strong><br>\n   \\( x(16) = 1 + \\sqrt{16} = 5 \\)<br>\n   \\( p(5) = 10\\sqrt{5^2 - 6(5) + 18} = 10\\sqrt{13} \\approx 36{,}06 \\text{ juta} \\le 40 \\text{ juta} \\) &rarr; <strong>Tidak Perlu (Salah)</strong>.<br>\n3. <strong>Minggu ke-36 (\\( t = 36 \\)):</strong><br>\n   \\( x(36) = 1 + \\sqrt{36} = 7 \\)<br>\n   \\( p(7) = 10\\sqrt{7^2 - 6(7) + 18} = 10\\sqrt{25} = 50 \\text{ juta} &gt; 40 \\text{ juta} \\) &rarr; <strong>Perlu (Benar)</strong>.<br>\n4. <strong>Minggu ke-49 (\\( t = 49 \\)):</strong><br>\n   \\( x(49) = 1 + \\sqrt{49} = 8 \\)<br>\n   \\( p(8) = 10\\sqrt{8^2 - 6(8) + 18} = 10\\sqrt{34} \\approx 58{,}31 \\text{ juta} &gt; 40 \\text{ juta} \\) &rarr; <strong>Perlu (Benar)</strong>.<br><br>\n<strong>Kunci Jawaban: Salah, Salah, Benar, Benar</strong>"
  },
  {
    "id": 17,
    "elemen": "Trigonometri",
    "subelemen": "Fungsi Trigonometri",
    "indikator": "Menganalisis grafik fungsi sinus periodik untuk menentukan waktu kerja optimal panel surya.",
    "kode": "INTEN-TKA2-MATL-17",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah panel surya digunakan untuk mengubah energi cahaya matahari menjadi energi listrik. Intensitas cahaya matahari yang diterima panel berubah secara periodik sepanjang hari dan dapat dimodelkan dengan fungsi:\n</p>\n<div class=\"my-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ y = A \\sin(Bx + C) + D \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\( x \\) menyatakan waktu dalam jam setelah tengah malam dan \\( y \\) menyatakan intensitas cahaya dalam \\( \\text{W/m}^2 \\). Grafik hubungan antara waktu dan intensitas cahaya ditunjukkan pada gambar berikut:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 420 260\" class=\"w-full max-w-md mx-auto bg-white border border-slate-200 rounded-lg p-2\">\n    <!-- Judul sumbu Y -->\n    <text x=\"65\" y=\"16\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">Intensitas cahaya</text>\n    <text x=\"65\" y=\"28\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">matahari (W/m²)</text>\n    <!-- Sumbu Y -->\n    <line x1=\"65\" y1=\"245\" x2=\"65\" y2=\"35\" stroke=\"#0f172a\" stroke-width=\"1.8\"/>\n    <polygon points=\"65,32 61,40 69,40\" fill=\"#0f172a\"/>\n    <!-- Sumbu X (y = 0 berada di y_svg = 195) -->\n    <line x1=\"55\" y1=\"195\" x2=\"365\" y2=\"195\" stroke=\"#0f172a\" stroke-width=\"1.8\"/>\n    <polygon points=\"370,195 362,191 362,199\" fill=\"#0f172a\"/>\n    <text x=\"388\" y=\"188\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">x (waktu)</text>\n    <text x=\"388\" y=\"200\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">(jam)</text>\n    <!-- Garis bantu putus-putus -->\n    <!-- y = 500 -> y_svg = 60, y = 200 -> y_svg = 141, y = 0 -> y_svg = 195, y = -100 -> y_svg = 222 -->\n    <!-- x = 0 -> 65, x = 6 -> 135, x = 12 -> 205, x = 18 -> 275, x = 24 -> 345 -->\n    <line x1=\"65\" y1=\"60\" x2=\"205\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"205\" y1=\"60\" x2=\"205\" y2=\"195\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"65\" y1=\"141\" x2=\"275\" y2=\"141\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"135\" y1=\"141\" x2=\"135\" y2=\"195\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"275\" y1=\"141\" x2=\"275\" y2=\"195\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"65\" y1=\"222\" x2=\"345\" y2=\"222\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"345\" y1=\"195\" x2=\"345\" y2=\"222\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n    <!-- Kurva Sinus y = 300 sin(pi/12 (x - 6)) + 200 -->\n    <path d=\"M 65 222 C 92 222, 112 182, 135 141 C 158 100, 178 60, 205 60 C 232 60, 252 100, 275 141 C 298 182, 318 222, 345 222 C 355 222, 362 214, 368 205\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n    <!-- Titik-titik penting -->\n    <circle cx=\"65\" cy=\"222\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"135\" cy=\"141\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"205\" cy=\"60\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"275\" cy=\"141\" r=\"3.5\" fill=\"#0f172a\"/>\n    <circle cx=\"345\" cy=\"222\" r=\"3.5\" fill=\"#0f172a\"/>\n    <!-- Label Sumbu Y -->\n    <text x=\"58\" y=\"64\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\" fill=\"#0f172a\">500</text>\n    <text x=\"58\" y=\"145\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\" fill=\"#0f172a\">200</text>\n    <text x=\"58\" y=\"198\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\" fill=\"#0f172a\">0</text>\n    <text x=\"58\" y=\"226\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\" fill=\"#0f172a\">-100</text>\n    <!-- Label Sumbu X -->\n    <text x=\"72\" y=\"208\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">0</text>\n    <text x=\"135\" y=\"210\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">6</text>\n    <text x=\"205\" y=\"210\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">12</text>\n    <text x=\"275\" y=\"210\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">18</text>\n    <text x=\"335\" y=\"210\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">24</text>\n    <!-- Kotak rumus -->\n    <rect x=\"145\" y=\"15\" width=\"150\" height=\"26\" rx=\"4\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n    <text x=\"220\" y=\"32\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0369a1\">y = A sin(Bx + C) + D</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPanel surya dikatakan bekerja optimal apabila intensitas cahaya yang diterima lebih dari \\( 450\\text{ W/m}^2 \\). Berdasarkan grafik tersebut, tentukan apakah panel surya bekerja <strong>Optimal (Benar)</strong> atau <strong>Tidak Optimal (Salah)</strong> pada waktu-waktu berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "pernyataan": "Waktu penggunaan panel surya: <strong>09.00</strong> (Optimal = Benar, Tidak Optimal = Salah)",
        "text": "Waktu penggunaan panel surya: 09.00 (Optimal = Benar, Tidak Optimal = Salah)",
        "kunci": "Salah"
      },
      {
        "id": 2,
        "pernyataan": "Waktu penggunaan panel surya: <strong>11.00</strong> (Optimal = Benar, Tidak Optimal = Salah)",
        "text": "Waktu penggunaan panel surya: 11.00 (Optimal = Benar, Tidak Optimal = Salah)",
        "kunci": "Benar"
      },
      {
        "id": 3,
        "pernyataan": "Waktu penggunaan panel surya: <strong>14.00</strong> (Optimal = Benar, Tidak Optimal = Salah)",
        "text": "Waktu penggunaan panel surya: 14.00 (Optimal = Benar, Tidak Optimal = Salah)",
        "kunci": "Benar"
      }
    ],
    "kunci": [
      "Salah",
      "Benar",
      "Benar"
    ],
    "pembahasan": "<strong>Pembahasan Pemodelan Grafik Sinusoidal Panel Surya:</strong><br>\n1. <strong>Menentukan persamaan fungsi dari grafik:</strong><br>\n   &bull; Nilai maksimum \\( y_{\\text{maks}} = 500 \\) (saat \\( x = 12 \\)) dan minimum \\( y_{\\text{min}} = -100 \\) (saat \\( x = 24 \\)).<br>\n   &bull; Amplitudo: \\( A = \\frac{500 - (-100)}{2} = 300 \\).<br>\n   &bull; Pergeseran vertikal: \\( D = \\frac{500 + (-100)}{2} = 200 \\).<br>\n   &bull; Periode \\( T = 24 \\) jam \\( \\implies B = \\frac{360^\\circ}{24} = 15^\\circ\\text{/jam} \\) (atau \\( \\frac{\\pi}{12} \\)).<br>\n   &bull; Kurva melewati garis setimbang \\( y = 200 \\) saat naik di \\( x = 6 \\), sehingga:<br>\n     \\[ y(x) = 300 \\sin(15^\\circ(x - 6)) + 200 \\]<br><br>\n2. <strong>Uji intensitas cahaya pada masing-masing waktu (syarat optimal: \\( y &gt; 450 \\)):</strong><br>\n   &bull; <strong>Pukul 09.00 (\\( x = 9 \\)):</strong><br>\n     \\( y(9) = 300 \\sin(15^\\circ \\times 3) + 200 = 300 \\sin 45^\\circ + 200 = 150\\sqrt{2} + 200 \\approx 412{,}13 \\text{ W/m}^2 \\le 450 \\) &rarr; <strong>Tidak Optimal (Salah)</strong>.<br>\n   &bull; <strong>Pukul 11.00 (\\( x = 11 \\)):</strong><br>\n     \\( y(11) = 300 \\sin(15^\\circ \\times 5) + 200 = 300 \\sin 75^\\circ + 200 \\approx 300(0{,}9659) + 200 = 489{,}78 \\text{ W/m}^2 &gt; 450 \\) &rarr; <strong>Optimal (Benar)</strong>.<br>\n   &bull; <strong>Pukul 14.00 (\\( x = 14 \\)):</strong><br>\n     \\( y(14) = 300 \\sin(15^\\circ \\times 8) + 200 = 300 \\sin 120^\\circ + 200 = 150\\sqrt{3} + 200 \\approx 459{,}81 \\text{ W/m}^2 &gt; 450 \\) &rarr; <strong>Optimal (Benar)</strong>.<br><br>\n<strong>Kunci Jawaban: Salah, Benar, Benar</strong>"
  },
  {
    "id": 18,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Lingkaran",
    "indikator": "Menentukan persamaan umum lingkaran yang melalui tiga titik potong pada sumbu koordinat.",
    "kode": "INTEN-TKA2-MATL-18",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPersamaan lingkaran yang melalui titik \\( A(-1, 0) \\), \\( B(3, 0) \\), dan \\( C(0, 3) \\) seperti pada gambar berikut adalah ....\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 240 220\" class=\"w-full max-w-xs mx-auto bg-white border border-slate-200 rounded-lg p-2\">\n    <!-- Sumbu X dan Y (Titik (0,0) di (90, 140), skala 1 unit = 25px) -->\n    <!-- Pusat lingkaran di (1, 1) -> (115, 115), r = sqrt(5) * 25 = 55.9px -->\n    <line x1=\"20\" y1=\"140\" x2=\"215\" y2=\"140\" stroke=\"#0f172a\" stroke-width=\"1.6\"/>\n    <polygon points=\"220,140 212,136 212,144\" fill=\"#0f172a\"/>\n    <line x1=\"90\" y1=\"200\" x2=\"90\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.6\"/>\n    <polygon points=\"90,15 86,23 94,23\" fill=\"#0f172a\"/>\n    <text x=\"212\" y=\"156\" font-size=\"12\" font-style=\"italic\" font-weight=\"bold\" fill=\"#0f172a\">x</text>\n    <text x=\"76\" y=\"24\" font-size=\"12\" font-style=\"italic\" font-weight=\"bold\" fill=\"#0f172a\">y</text>\n    <!-- Lingkaran berpusat di (115, 115) dengan r = 55.9 -->\n    <circle cx=\"115\" cy=\"115\" r=\"55.9\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <!-- Titik potong (-1,0)->(65,140), (3,0)->(165,140), (0,3)->(90,65) -->\n    <circle cx=\"65\" cy=\"140\" r=\"3\" fill=\"#0f172a\"/>\n    <circle cx=\"165\" cy=\"140\" r=\"3\" fill=\"#0f172a\"/>\n    <circle cx=\"90\" cy=\"65\" r=\"3\" fill=\"#0f172a\"/>\n    <text x=\"55\" y=\"156\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">-1</text>\n    <text x=\"168\" y=\"156\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">3</text>\n    <text x=\"78\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">3</text>\n  </svg>\n</div>",
    "options": [
      {
        "id": "A",
        "text": "\\( x^2 + y^2 + 2x + 2y + 1 = 0 \\)"
      },
      {
        "id": "B",
        "text": "\\( x^2 + y^2 + 2x + 2y - 15 = 0 \\)"
      },
      {
        "id": "C",
        "text": "\\( x^2 + y^2 - 4x - 4y - 27 = 0 \\)"
      },
      {
        "id": "D",
        "text": "\\( x^2 + y^2 - 2x - 2y - 3 = 0 \\)"
      },
      {
        "id": "E",
        "text": "\\( x^2 + y^2 - 2x - 2y - 8 = 0 \\)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Persamaan Lingkaran Melalui Tiga Titik:</strong><br>\nBentuk umum persamaan lingkaran adalah \\( x^2 + y^2 + Ax + By + C = 0 \\).<br>\n1. <strong>Substitusi titik \\( A(-1, 0) \\):</strong><br>\n   \\[ (-1)^2 + 0^2 + A(-1) + B(0) + C = 0 \\implies -A + C = -1 \\implies C = A - 1 \\]<br>\n2. <strong>Substitusi titik \\( B(3, 0) \\):</strong><br>\n   \\[ 3^2 + 0^2 + 3A + C = 0 \\implies 9 + 3A + (A - 1) = 0 \\implies 4A = -8 \\implies A = -2 \\]<br>\n   Maka \\( C = -2 - 1 = -3 \\).<br>\n3. <strong>Substitusi titik \\( C(0, 3) \\):</strong><br>\n   \\[ 0^2 + 3^2 + 3B + C = 0 \\implies 9 + 3B - 3 = 0 \\implies 3B = -6 \\implies B = -2 \\]<br><br>\nSehingga persamaan lingkarannya adalah:<br>\n\\[ x^2 + y^2 - 2x - 2y - 3 = 0 \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 19,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Lingkaran",
    "indikator": "Menentukan koordinat titik-titik singgung lingkaran dari garis singgung yang sejajar dengan suatu garis.",
    "kode": "INTEN-TKA2-MATL-19",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan gambar berikut. Lingkaran berpusat di titik \\( P(4, 2) \\) serta melalui titik \\( A(5, 4) \\).\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 280 210\" class=\"w-full max-w-xs mx-auto bg-white border border-slate-200 rounded-lg p-2\">\n    <!-- Sumbu koordinat: O(0,0) di (80, 150), skala 1 unit = 22px -->\n    <line x1=\"15\" y1=\"150\" x2=\"260\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"1.6\"/>\n    <polygon points=\"265,150 257,146 257,154\" fill=\"#0f172a\"/>\n    <line x1=\"80\" y1=\"195\" x2=\"80\" y2=\"15\" stroke=\"#0f172a\" stroke-width=\"1.6\"/>\n    <polygon points=\"80,10 76,18 84,18\" fill=\"#0f172a\"/>\n    <text x=\"255\" y=\"166\" font-size=\"12\" font-style=\"italic\" font-weight=\"bold\" fill=\"#0f172a\">x</text>\n    <text x=\"66\" y=\"22\" font-size=\"12\" font-style=\"italic\" font-weight=\"bold\" fill=\"#0f172a\">y</text>\n    <!-- Garis melalui C(-1, 4) -> (58, 62) dan B(1, 0) -> (102, 150) diperpanjang -->\n    <line x1=\"47\" y1=\"40\" x2=\"120\" y2=\"186\" stroke=\"#0f172a\" stroke-width=\"1.8\"/>\n    <circle cx=\"58\" cy=\"62\" r=\"3\" fill=\"#0f172a\"/>\n    <circle cx=\"102\" cy=\"150\" r=\"3\" fill=\"#0f172a\"/>\n    <text x=\"22\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">C(-1, 4)</text>\n    <text x=\"86\" y=\"168\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">B(1, 0)</text>\n    <!-- Lingkaran P(4, 2) -> (168, 106), r = sqrt(5)*22 = 49.2px, A(5, 4) -> (190, 62) -->\n    <circle cx=\"168\" cy=\"106\" r=\"49.2\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <circle cx=\"168\" cy=\"106\" r=\"3\" fill=\"#0f172a\"/>\n    <circle cx=\"190\" cy=\"62\" r=\"3.5\" fill=\"#0f172a\"/>\n    <text x=\"168\" y=\"122\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">P(4, 2)</text>\n    <text x=\"212\" y=\"58\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">A(5, 4)</text>\n  </svg>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan semua koordinat titik singgung lingkaran dari garis singgung lingkaran yang sejajar dengan garis yang melalui titik \\( C(-1, 4) \\) dan titik \\( B(1, 0) \\). (Jawaban benar lebih dari satu)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( (2, 1) \\)"
      },
      {
        "id": "B",
        "text": "\\( (2, 3) \\)"
      },
      {
        "id": "C",
        "text": "\\( (3, 4) \\)"
      },
      {
        "id": "D",
        "text": "\\( (4, 5) \\)"
      },
      {
        "id": "E",
        "text": "\\( (6, 3) \\)"
      }
    ],
    "kunci": [
      "A",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Titik Singgung Garis Singgung Lingkaran:</strong><br>\n1. <strong>Jari-jari lingkaran:</strong><br>\n   Pusat \\( P(4, 2) \\) melalui \\( A(5, 4) \\):<br>\n   \\[ r^2 = (5 - 4)^2 + (4 - 2)^2 = 1 + 4 = 5 \\implies r = \\sqrt{5} \\]<br>\n2. <strong>Gradien garis singgung (\\( m_s \\)):</strong><br>\n   Garis singgung sejajar dengan garis \\( BC \\):<br>\n   \\[ m_s = m_{BC} = \\frac{0 - 4}{1 - (-1)} = \\frac{-4}{2} = -2 \\]<br>\n3. <strong>Gradien jari-jari menuju titik singgung (garis normal \\( m_n \\)):</strong><br>\n   Jari-jari di titik singgung tegak lurus terhadap garis singgung:<br>\n   \\[ m_n = -\\frac{1}{m_s} = \\frac{1}{2} \\]<br>\n   Vektor dari pusat \\( P(4, 2) \\) ke titik singgung searah dengan \\( \\pm(2, 1) \\) yang panjangnya tepat \\( \\sqrt{2^2 + 1^2} = \\sqrt{5} = r \\).<br>\n4. <strong>Koordinat kedua titik singgung:</strong><br>\n   &bull; \\( T_1 = P - (2, 1) = (4 - 2, \\, 2 - 1) = (2, 1) \\) (<strong>Opsi A Benar</strong>)<br>\n   &bull; \\( T_2 = P + (2, 1) = (4 + 2, \\, 2 + 1) = (6, 3) \\) (<strong>Opsi E Benar</strong>)<br><br>\n<strong>Kunci Jawaban: A dan E</strong>"
  },
  {
    "id": 20,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Lingkaran",
    "indikator": "Menghitung panjang total kerangka logam ornamen kaca patri berbentuk lingkaran dari luas tembereng yang diketahui.",
    "kode": "INTEN-TKA2-MATL-20",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang tukang profesional akan membuat daun pintu dengan ornamen kaca patri berbentuk bulat di tengahnya. Kerangka ornamen terbuat dari logam yang berfungsi untuk menempelkan potongan-potongan kaca patri. Beliau ingin memilih logam yang <strong>pas</strong>, yaitu cukup untuk membuat seluruh kerangka ornamen dan sisanya tidak lebih dari 1 m.\n</p>\n<div class=\"my-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  <svg viewBox=\"0 0 420 220\" class=\"w-full max-w-md mx-auto bg-white border border-slate-200 rounded-lg p-2\">\n    <!-- Lingkaran Kaca Patri (Kiri) -->\n    <g transform=\"translate(105, 110)\">\n      <!-- 4 Tembereng Biru -->\n      <circle cx=\"0\" cy=\"0\" r=\"75\" fill=\"#0284c7\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <!-- Persegi / Belah Ketupat Dalam (Kuning/Coklat Kaca Patri) -->\n      <polygon points=\"0,-75 75,0 0,75 -75,0\" fill=\"#d97706\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <polygon points=\"0,-75 -75,0 0,0\" fill=\"#f59e0b\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n      <polygon points=\"0,75 75,0 0,0\" fill=\"#b45309\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n      <!-- Dua Diameter Tegak Lurus -->\n      <line x1=\"0\" y1=\"-75\" x2=\"0\" y2=\"75\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <line x1=\"-75\" y1=\"0\" x2=\"75\" y2=\"0\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <text x=\"0\" y=\"96\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">Ornamen Kaca Patri</text>\n    </g>\n    <!-- Panah penunjuk tembereng biru -->\n    <line x1=\"150\" y1=\"52\" x2=\"205\" y2=\"35\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <circle cx=\"150\" cy=\"52\" r=\"3\" fill=\"#0f172a\"/>\n    <text x=\"210\" y=\"32\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">Luas 1 potong kaca biru</text>\n    <text x=\"210\" y=\"45\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">(tembereng) = 114 cm²</text>\n    <text x=\"210\" y=\"63\" font-size=\"10\" font-weight=\"semibold\" fill=\"#334155\">Gunakan π = 3,14</text>\n    <!-- Skema Kerangka Logam (Kanan Bawah) -->\n    <g transform=\"translate(310, 130)\">\n      <circle cx=\"0\" cy=\"0\" r=\"55\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n      <polygon points=\"0,-55 55,0 0,55 -55,0\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n      <line x1=\"0\" y1=\"-55\" x2=\"0\" y2=\"55\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n      <line x1=\"-55\" y1=\"0\" x2=\"55\" y2=\"0\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n      <text x=\"0\" y=\"74\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">Skema Kerangka Logam</text>\n    </g>\n  </svg>\n</div>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-full text-xs sm:text-sm text-center border border-slate-300 rounded-lg overflow-hidden\">\n    <thead class=\"bg-slate-800 text-white font-bold\">\n      <tr>\n        <th class=\"p-2 border border-slate-600\">Jenis Logam</th>\n        <th class=\"p-2 border border-slate-600\">Logam P</th>\n        <th class=\"p-2 border border-slate-600\">Logam Q</th>\n        <th class=\"p-2 border border-slate-600\">Logam R</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class=\"bg-white\">\n        <td class=\"p-2 border border-slate-300 font-semibold\">Panjang satuan</td>\n        <td class=\"p-2 border border-slate-300\">1 m</td>\n        <td class=\"p-2 border border-slate-300\">4 m</td>\n        <td class=\"p-2 border border-slate-300\">5 m</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pilihan logam yang akan dibeli tukang berikut ini <strong>Pas (Benar)</strong> atau <strong>Tidak Pas (Salah)</strong>!\n</p>",
    "items": [
      {
        "id": 1,
        "pernyataan": "Membeli 3 buah logam P (Pas = Benar, Tidak Pas = Salah)",
        "text": "Membeli 3 buah logam P (Pas = Benar, Tidak Pas = Salah)",
        "kunci": "Salah"
      },
      {
        "id": 2,
        "pernyataan": "Membeli 1 buah logam Q (Pas = Benar, Tidak Pas = Salah)",
        "text": "Membeli 1 buah logam Q (Pas = Benar, Tidak Pas = Salah)",
        "kunci": "Benar"
      },
      {
        "id": 3,
        "pernyataan": "Membeli 1 buah logam R (Pas = Benar, Tidak Pas = Salah)",
        "text": "Membeli 1 buah logam R (Pas = Benar, Tidak Pas = Salah)",
        "kunci": "Salah"
      }
    ],
    "kunci": [
      "Salah",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Pembahasan Geometri Lingkaran &amp; Tembereng Ornamen Kaca Patri:</strong><br>\n1. <strong>Menentukan jari-jari lingkaran (\\(r\\)) dari luas 1 potong kaca biru (tembereng \\(90^\\circ\\)):</strong><br>\n   \\[ L_{\\text{tembereng}} = \\frac{1}{4}\\pi r^2 - \\frac{1}{2}r^2 = r^2\\left(\\frac{3{,}14}{4} - 0{,}5\\right) = 0{,}285\\,r^2 \\]<br>\n   Diketahui \\( L_{\\text{tembereng}} = 114\\text{ cm}^2 \\):<br>\n   \\[ 0{,}285\\,r^2 = 114 \\implies r^2 = \\frac{114}{0{,}285} = 400 \\implies r = 20\\text{ cm} \\]<br><br>\n2. <strong>Menghitung panjang total kerangka logam:</strong><br>\n   Kerangka terdiri atas keliling lingkaran, 2 diameter tegak lurus, dan 4 sisi persegi dalam (masing-masing panjangnya \\( r\\sqrt{2} \\)):<br>\n   &bull; Keliling lingkaran: \\( 2\\pi r = 2(3{,}14)(20) = 125{,}6\\text{ cm} \\)<br>\n   &bull; Dua buah diameter: \\( 2 \\times (2r) = 4(20) = 80\\text{ cm} \\)<br>\n   &bull; Empat sisi persegi dalam: \\( 4 \\times 20\\sqrt{2} = 80\\sqrt{2} \\approx 80(1{,}414) = 113{,}12\\text{ cm} \\)<br>\n   &bull; Total panjang kerangka: \\( 125{,}6 + 80 + 113{,}12 = 318{,}72\\text{ cm} \\approx 3{,}19\\text{ m} \\).<br><br>\n3. <strong>Evaluasi pilihan logam (syarat Pas: cukup \\( \\ge 3{,}19\\text{ m} \\) dan sisa \\( \\le 1\\text{ m} \\)):</strong><br>\n   &bull; <strong>3 buah logam P (3 m):</strong> \\( 3\\text{ m} &lt; 3{,}19\\text{ m} \\) (kurang/tidak cukup) &rarr; <strong>Tidak Pas (Salah)</strong>.<br>\n   &bull; <strong>1 buah logam Q (4 m):</strong> Cukup (\\( 4\\text{ m} &gt; 3{,}19\\text{ m} \\)) dan sisa \\( 4 - 3{,}19 = 0{,}81\\text{ m} \\le 1\\text{ m} \\) &rarr; <strong>Pas (Benar)</strong>.<br>\n   &bull; <strong>1 buah logam R (5 m):</strong> Cukup, tetapi sisa \\( 5 - 3{,}19 = 1{,}81\\text{ m} &gt; 1\\text{ m} \\) &rarr; <strong>Tidak Pas (Salah)</strong>.<br><br>\n<strong>Kunci Jawaban: Salah, Benar, Salah</strong>"
  },
  {
    "id": 21,
    "elemen": "Kalkulus",
    "subelemen": "Limit Fungsi Aljabar",
    "indikator": "Menganalisis keberadaan dan nilai limit fungsi sepotong-sepotong (piecewise) pada titik-titik batas interval.",
    "kode": "INTEN-TKA2-MATL-21",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui fungsi sepotong-sepotong:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ f(x) = \\begin{cases} x^2, & \\text{untuk } 0 &lt; x &lt; 2 \\\\ 1, & \\text{untuk } x = 2 \\\\ 2 + x, & \\text{untuk } 2 &lt; x \\le 4 \\\\ 3 + (x - 1)^2, & \\text{untuk } x &gt; 4 \\end{cases} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan <strong>Benar</strong> atau <strong>Salah</strong> untuk setiap pernyataan berikut!\n</p>",
    "items": [
      {
        "id": 1,
        "pernyataan": "\\( \\lim_{x \\to 2} f(x) = 4 \\)",
        "text": "\\( \\lim_{x \\to 2} f(x) = 4 \\)",
        "kunci": "Benar"
      },
      {
        "id": 2,
        "pernyataan": "\\( \\lim_{x \\to 3} f(x) = 5 \\)",
        "text": "\\( \\lim_{x \\to 3} f(x) = 5 \\)",
        "kunci": "Benar"
      },
      {
        "id": 3,
        "pernyataan": "\\( \\lim_{x \\to 4} f(x) = 6 \\)",
        "text": "\\( \\lim_{x \\to 4} f(x) = 6 \\)",
        "kunci": "Salah"
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Pembahasan Limit Kiri dan Limit Kanan Fungsi Sepotong-Sepotong:</strong><br>\n1. <strong>Evaluasi \\( \\lim_{x \\to 2} f(x) \\):</strong><br>\n   &bull; Limit kiri: \\( \\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^-} x^2 = 2^2 = 4 \\)<br>\n   &bull; Limit kanan: \\( \\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^+} (2 + x) = 2 + 2 = 4 \\)<br>\n   Karena limit kiri = limit kanan = 4, maka \\( \\lim_{x \\to 2} f(x) = 4 \\) (<strong>Pernyataan 1 Benar</strong>).<br><br>\n2. <strong>Evaluasi \\( \\lim_{x \\to 3} f(x) \\):</strong><br>\n   Untuk \\( x \\) di sekitar 3 (interval \\( 2 &lt; x \\le 4 \\)), berlaku \\( f(x) = 2 + x \\):<br>\n   \\[ \\lim_{x \\to 3} f(x) = 2 + 3 = 5 \\quad (\\textbf{Pernyataan 2 Benar}) \\]<br><br>\n3. <strong>Evaluasi \\( \\lim_{x \\to 4} f(x) \\):</strong><br>\n   &bull; Limit kiri: \\( \\lim_{x \\to 4^-} f(x) = \\lim_{x \\to 4^-} (2 + x) = 2 + 4 = 6 \\)<br>\n   &bull; Limit kanan: \\( \\lim_{x \\to 4^+} f(x) = \\lim_{x \\to 4^+} [3 + (x - 1)^2] = 3 + (4 - 1)^2 = 12 \\)<br>\n   Karena limit kiri (\\(6\\)) \\( \\neq \\) limit kanan (\\(12\\)), maka \\( \\lim_{x \\to 4} f(x) \\) <strong>tidak ada</strong> (<strong>Pernyataan 3 Salah</strong>).<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>"
  },
  {
    "id": 22,
    "elemen": "Kalkulus",
    "subelemen": "Limit di Ketakhinggaan",
    "indikator": "Menentukan nilai limit fungsi irasional saat waktu mendekati tak hingga dalam konteks reaksi kimia.",
    "kode": "INTEN-TKA2-MATL-22",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang ilmuwan sedang melakukan percobaan suatu senyawa. Senyawa ini merupakan hasil reaksi kimia dari beberapa senyawa. Setelah diteliti ternyata jumlah senyawa baru yang terbentuk mengikuti fungsi:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ f(t) = \\sqrt{9t^2 + 12t - 5} - 3t + 4 \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\ndengan \\( f(t) \\) menyatakan jumlah senyawa dalam miligram dan \\( t \\) waktu dalam detik. Jumlah senyawa yang terbentuk dalam jangka waktu yang sangat lama adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 2 \\)"
      },
      {
        "id": "B",
        "text": "\\( 4 \\)"
      },
      {
        "id": "C",
        "text": "\\( 6 \\)"
      },
      {
        "id": "D",
        "text": "\\( 8 \\)"
      },
      {
        "id": "E",
        "text": "\\( 12 \\)"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Limit di Ketakhinggaan Bentuk Akar:</strong><br>\nJangka waktu yang sangat lama dinyatakan oleh \\( t \\to \\infty \\):<br>\n\\[ \\lim_{t \\to \\infty} f(t) = \\lim_{t \\to \\infty} \\left( \\sqrt{9t^2 + 12t - 5} - \\sqrt{9t^2} \\right) + 4 \\]<br>\nGunakan rumus \\( \\lim_{t \\to \\infty} \\left( \\sqrt{at^2 + bt + c} - \\sqrt{at^2 + pt + q} \\right) = \\frac{b - p}{2\\sqrt{a}} \\) dengan \\( a = 9, \\; b = 12, \\; p = 0 \\):<br>\n\\[ \\lim_{t \\to \\infty} f(t) = \\frac{12 - 0}{2\\sqrt{9}} + 4 = \\frac{12}{6} + 4 = 2 + 4 = 6 \\text{ miligram} \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 23,
    "elemen": "Kalkulus",
    "subelemen": "Limit Fungsi Aljabar",
    "indikator": "Menghitung nilai limit fungsi rasional pada suatu titik dengan metode substitusi langsung.",
    "kode": "INTEN-TKA2-MATL-23",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui fungsi rasional:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ f(x) = \\frac{x^2 + 2x - 4}{2x - 3} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai dari \\( \\lim_{x \\to 2} f(x) = \\dots \\)\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 10 \\)"
      },
      {
        "id": "B",
        "text": "\\( 8 \\)"
      },
      {
        "id": "C",
        "text": "\\( 4 \\)"
      },
      {
        "id": "D",
        "text": "\\( 3 \\)"
      },
      {
        "id": "E",
        "text": "\\( 2 \\)"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Limit Fungsi Rasional:</strong><br>\nKarena untuk \\( x = 2 \\) penyebut bernilai \\( 2(2) - 3 = 1 \\neq 0 \\), limit dapat dihitung dengan substitusi langsung:<br>\n\\[ \\lim_{x \\to 2} \\frac{x^2 + 2x - 4}{2x - 3} = \\frac{2^2 + 2(2) - 4}{2(2) - 3} = \\frac{4 + 4 - 4}{4 - 3} = \\frac{4}{1} = 4 \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 24,
    "elemen": "Kalkulus",
    "subelemen": "Limit Fungsi Aljabar",
    "indikator": "Menentukan nilai limit fungsi bentuk tak tentu 0/0 yang memuat bentuk akar dengan perkalian sekawan.",
    "kode": "INTEN-TKA2-MATL-24",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNilai dari limit fungsi irasional berikut:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ \\lim_{x \\to 3} \\frac{9 - x^2}{2\\sqrt{x^2 + 3} - 4\\sqrt{3}} = \\dots \\]\n</div>",
    "options": [
      {
        "id": "A",
        "text": "\\( -4\\sqrt{3} \\)"
      },
      {
        "id": "B",
        "text": "\\( -2\\sqrt{3} \\)"
      },
      {
        "id": "C",
        "text": "\\( 0 \\)"
      },
      {
        "id": "D",
        "text": "\\( 2\\sqrt{3} \\)"
      },
      {
        "id": "E",
        "text": "\\( 4\\sqrt{3} \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Limit Fungsi Bentuk Akar (Perkalian Sekawan):</strong><br>\nFaktorkan angka 2 pada penyebut dan kalikan dengan bentuk sekawannya:<br>\n\\[ \\lim_{x \\to 3} \\frac{9 - x^2}{2(\\sqrt{x^2 + 3} - 2\\sqrt{3})} \\cdot \\frac{\\sqrt{x^2 + 3} + 2\\sqrt{3}}{\\sqrt{x^2 + 3} + 2\\sqrt{3}} \\]<br>\n\\[ = \\lim_{x \\to 3} \\frac{(9 - x^2)(\\sqrt{x^2 + 3} + 2\\sqrt{3})}{2\\left((x^2 + 3) - 12\\right)} \\]<br>\n\\[ = \\lim_{x \\to 3} \\frac{-(x^2 - 9)(\\sqrt{x^2 + 3} + 2\\sqrt{3})}{2(x^2 - 9)} \\]<br>\nSederhanakan faktor \\( (x^2 - 9) \\) dan substitusikan \\( x = 3 \\):<br>\n\\[ = -\\frac{1}{2}\\left(\\sqrt{3^2 + 3} + 2\\sqrt{3}\\right) = -\\frac{1}{2}\\left(2\\sqrt{3} + 2\\sqrt{3}\\right) = -\\frac{1}{2}(4\\sqrt{3}) = -2\\sqrt{3} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 25,
    "elemen": "Kalkulus",
    "subelemen": "Limit Fungsi Trigonometri",
    "indikator": "Menentukan nilai limit fungsi trigonometri saat simpangan mendekati nol pada model sensor getaran mesin.",
    "kode": "INTEN-TKA2-MATL-25",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah sensor getaran pada sebuah mesin mencatat perubahan posisi suatu komponen yang bergerak secara periodik. Seorang teknisi menggunakan model matematis berikut untuk menentukan laju perubahan relatif sistem:\n</p>\n<div class=\"my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center\">\n  \\[ L(x) = \\frac{\\sin 3x - \\sin 3x \\cdot \\cos 2x}{2x^3} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\ndengan \\( x \\) menyatakan besar simpangan dalam radian. Ketika mesin bekerja semakin stabil, nilai simpangan \\( x \\) semakin mendekati 0. Nilai yang paling tepat untuk menggambarkan karakteristik \\( L(x) \\) ketika simpangan \\( x \\) mendekati nol adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\frac{1}{2} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\frac{2}{3} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\frac{3}{2} \\)"
      },
      {
        "id": "D",
        "text": "\\( 2 \\)"
      },
      {
        "id": "E",
        "text": "\\( 3 \\)"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan Limit Fungsi Trigonometri:</strong><br>\nFaktorkan \\( \\sin 3x \\) pada pembilang dan gunakan identitas sudut rangkap \\( 1 - \\cos 2x = 2\\sin^2 x \\):<br>\n\\[ \\lim_{x \\to 0} L(x) = \\lim_{x \\to 0} \\frac{\\sin 3x (1 - \\cos 2x)}{2x^3} \\]<br>\n\\[ = \\lim_{x \\to 0} \\frac{\\sin 3x \\cdot 2\\sin^2 x}{2x^3} \\]<br>\n\\[ = \\lim_{x \\to 0} \\left( \\frac{\\sin 3x}{x} \\cdot \\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{x} \\right) \\]<br>\n\\[ = 3 \\times 1 \\times 1 = 3 \\]<br>\n<strong>Kunci Jawaban: E</strong>"
  }
];

if (typeof window !== 'undefined') {
  window.tkaMatematikaLanjutPaket4Data = tkaMatematikaLanjutPaket4Data;
  window.tkaMatematikaLanjutPackages = window.tkaMatematikaLanjutPackages || {};
  window.tkaMatematikaLanjutPackages['paket4'] = {
    id: "paket4",
    title: "Paket 4: Try Out TKA-2 Prosus Inten Matematika Tingkat Lanjut SMA 2026/2027 (25 Soal)",
    shortTitle: "Paket 4 (TO Prosus Inten • 25 Soal)",
    badge: "TO Inten 25 Soal",
    total: 25,
    durasiMenit: 60,
    data: tkaMatematikaLanjutPaket4Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaMatematikaLanjutPaket4Data };
}
