// tka/data/mapel-matematika-umum.js
// Bank Soal & Pembahasan Resmi TKA Matematika SMA 2025 Umum (25 Butir Soal Resmi BPPP Kemendikbudristek)
// Sesuai Dokumen Resmi Seleksi Masuk PTN TKA Matematika SMA 2025 Umum

const tkaMatematikaUmumPaket1Data = [
  {
    "id": 1,
    "elemen": "Bilangan",
    "subelemen": "Himpunan",
    "indikator": "Menentukan hasil operasi himpunan (irisan dan gabungan). (1)",
    "kode": "25MATBILHIMP01SU-000000-0101",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_01.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui himpunan semesta \\( S = \\{x \\mid 1 \\le x \\le 12, x \\in \\text{bilangan cacah}\\} \\).<br>\nDidefinisikan himpunan-himpunan bagian berikut:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>\\( A = \\{x \\mid x < 10, x \\in \\text{bilangan ganjil}\\} \\)</li>\n  <li>\\( B = \\{x \\mid 2 \\le x \\le 11, x \\in \\text{bilangan prima}\\} \\)</li>\n  <li>\\( C = \\{x \\mid x \\text{ faktor dari } 12\\} \\)</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nHasil dari operasi himpunan \\( (A \\cap B) \\cup C \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\{1, 2, 3, 4, 5, 6, 7, 12\\} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\{1, 2, 3, 5, 7, 11, 12\\} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\{2, 3, 4, 5, 6, 7, 12\\} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\{3, 5, 7, 11\\} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\{1, 3, 5, 7, 12\\} \\)"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pembahasan Operasi Himpunan:</strong><br>\n1. <strong>Tentukan anggota dari masing-masing himpunan:</strong><br>\n- \\( S = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\\} \\)<br>\n- \\( A = \\{1, 3, 5, 7, 9\\} \\) (bilangan ganjil positif kurang dari 10)<br>\n- \\( B = \\{2, 3, 5, 7, 11\\} \\) (bilangan prima antara 2 sampai 11 inklusif)<br>\n- \\( C = \\{1, 2, 3, 4, 6, 12\\} \\) (faktor positif dari 12)<br><br>\n2. <strong>Tentukan irisan \\( A \\cap B \\):</strong><br>\nAnggota yang berada di \\(A\\) sekaligus di \\(B\\):<br>\n\\[ A \\cap B = \\{3, 5, 7\\} \\]<br><br>\n3. <strong>Gabungkan dengan himpunan \\(C\\):</strong><br>\n\\[ (A \\cap B) \\cup C = \\{3, 5, 7\\} \\cup \\{1, 2, 3, 4, 6, 12\\} \\]<br>\n\\[ (A \\cap B) \\cup C = \\{1, 2, 3, 4, 5, 6, 7, 12\\} \\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 2,
    "elemen": "Bilangan",
    "subelemen": "Eksponen dan Bentuk Akar",
    "indikator": "Menyederhanakan operasi bilangan berpangkat pecahan. (2)",
    "kode": "25MATBILEKS02SU-000000-0102",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_02.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan bentuk pecahan eksponen berikut!\n</p>\n<div class=\"my-4 text-center\">\n  \\[ \\frac{3^{2/3} \\times 8^{3/2}}{2^{5/2} \\times 9^{5/6}} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBentuk sederhana dari pecahan eksponen di atas adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\frac{2}{3} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\frac{4}{3} \\)"
      },
      {
        "id": "C",
        "text": "\\( 2 \\)"
      },
      {
        "id": "D",
        "text": "\\( \\frac{8}{3} \\)"
      },
      {
        "id": "E",
        "text": "\\( 4 \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Penyederhanaan Bilangan Berpangkat:</strong><br>\nUbahlah semua bilangan pokok menjadi bilangan prima basis 2 dan 3:<br>\n1. <strong>Faktorisasi basis bilangan:</strong><br>\n- \\( 8^{3/2} = (2^3)^{3/2} = 2^{3 \\times \\frac{3}{2}} = 2^{9/2} \\)<br>\n- \\( 9^{5/6} = (3^2)^{5/6} = 3^{2 \\times \\frac{5}{6}} = 3^{5/3} \\)<br><br>\n2. <strong>Substitusikan ke bentuk semula:</strong><br>\n\\[ \\frac{3^{2/3} \\times 2^{9/2}}{2^{5/2} \\times 3^{5/3}} = \\frac{2^{9/2}}{2^{5/2}} \\times \\frac{3^{2/3}}{3^{5/3}} \\]<br><br>\n3. <strong>Gunakan sifat eksponen \\( \\frac{a^m}{a^n} = a^{m-n} \\):</strong><br>\n\\[ 2^{\\frac{9}{2} - \\frac{5}{2}} \\times 3^{\\frac{2}{3} - \\frac{5}{3}} = 2^{4/2} \\times 3^{-3/3} = 2^2 \\times 3^{-1} \\]<br>\n\\[ = 4 \\times \\frac{1}{3} = \\frac{4}{3} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 3,
    "elemen": "Aljabar",
    "subelemen": "Operasi Aritmetika Khusus",
    "indikator": "Menentukan nilai operasi biner yang didefinisikan secara khusus. (3)",
    "kode": "25MATALJOPR03SU-000000-0103",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_03.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nOperasi biner \\( \\odot \\) didefinisikan untuk setiap bilangan real \\(a\\) dan \\(b\\) dengan aturan:\n</p>\n<div class=\"my-4 text-center\">\n  \\[ a \\odot b = \\frac{(a - b)^2 + 2ab}{a + b} \\]\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNilai dari \\( 6 \\odot 2 \\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      },
      {
        "id": "E",
        "text": "6"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Operasi Biner Khusus:</strong><br>\n1. <strong>Sederhanakan ekspresi aljabar di pembilang:</strong><br>\n\\[ (a - b)^2 + 2ab = (a^2 - 2ab + b^2) + 2ab = a^2 + b^2 \\]<br>\nSehingga rumus operasi biner menjadi:<br>\n\\[ a \\odot b = \\frac{a^2 + b^2}{a + b} \\]<br><br>\n2. <strong>Hitung untuk \\( a = 6 \\) dan \\( b = 2 \\):</strong><br>\n\\[ 6 \\odot 2 = \\frac{6^2 + 2^2}{6 + 2} = \\frac{36 + 4}{8} = \\frac{40}{8} = 5 \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 4,
    "elemen": "Aljabar",
    "subelemen": "Fungsi Linear",
    "indikator": "Memodelkan dan menganalisis fenomena kontekstual menggunakan fungsi linear. (4)",
    "kode": "25MATALJLIN04SU-000000-0104",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_04.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKenaikan rata-rata suhu bumi tahunan akibat pemanasan global dapat didekati dengan fungsi linear berikut:\n</p>\n<div class=\"my-4 text-center\">\n  \\[ y = 0{,}02x - 39{,}9 \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\(x\\) menyatakan tahun dan \\(y\\) menyatakan besar anomali kenaikan suhu permukaan bumi dalam derajat Celsius (\\(^{\\circ}\\text{C}\\)).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan model tersebut, pada tahun berapakah anomali kenaikan suhu bumi diperkirakan mencapai \\(0{,}7^{\\circ}\\text{C}\\)?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2026"
      },
      {
        "id": "B",
        "text": "2028"
      },
      {
        "id": "C",
        "text": "2030"
      },
      {
        "id": "D",
        "text": "2032"
      },
      {
        "id": "E",
        "text": "2035"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Model Fungsi Linear:</strong><br>\nDiketahui model hubungan suhu dan tahun:<br>\n\\[ y = 0{,}02x - 39{,}9 \\]<br>\nSubstitusikan nilai \\( y = 0{,}7 \\) ke persamaan:<br>\n\\[ 0{,}7 = 0{,}02x - 39{,}9 \\]<br>\n\\[ 0{,}02x = 39{,}9 + 0{,}7 \\]<br>\n\\[ 0{,}02x = 40{,}6 \\]<br>\n\\[ x = \\frac{40{,}6}{0{,}02} = \\frac{4060}{2} = 2030 \\]<br>\nJadi, anomali kenaikan suhu mencapai \\(0{,}7^{\\circ}\\text{C}\\) diperkirakan terjadi pada tahun <strong>2030</strong>.<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 5,
    "elemen": "Aljabar",
    "subelemen": "Fungsi Komposisi",
    "indikator": "Mengidentifikasi syarat komposisi dua fungsi serta penerapannya dalam masalah kontekstual. (5)",
    "kode": "25MATALJFNG05SU-000000-2406",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_05.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTempat Les Pintarku memberikan potongan biaya kursus kepada 50 pendaftar pertama, sedangkan harga normal berlaku untuk pendaftar lainnya. Biaya kursus setelah mendapatkan potongan harga dapat dihitung dengan fungsi berikut:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ y = 0{,}9x \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\(x\\) adalah biaya kursus mula-mula dan \\(y\\) adalah biaya setelah potongan harga.<br>\nSelain itu, bagi siswa yang berprestasi akan mendapat tambahan potongan harga yang besarnya disesuaikan dengan nilai rapor mereka. Setelah mendapatkan tambahan potongan harga maka biaya akhir kursus menjadi sebagai berikut:\n</p>\n<div class=\"my-3 text-center\">\n  \\[ g(y) = \\begin{cases} 0{,}7y, & \\text{jika nilai rapor di atas } 90 \\\\ 0{,}8y, & \\text{jika nilai rapor } 85-90 \\end{cases} \\]\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\ndengan \\(g(y)\\) adalah biaya akhir setelah tambahan diskon.<br>\nSalah satu siswa bernama Fira, merupakan pendaftar ke-50 dan membayar biaya kursus sebesar Rp180.000,00.<br>\nSetelah itu, datang empat siswa lainnya yang juga ingin mengikuti kursus dengan informasi berikut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-full text-xs text-center border border-slate-300\">\n    <thead class=\"bg-indigo-100 font-bold text-indigo-950\">\n      <tr>\n        <th class=\"p-2 border\">Nama</th>\n        <th class=\"p-2 border\">Nilai Rapor</th>\n        <th class=\"p-2 border\">Uang yang dimiliki (Rp)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"p-2 border font-medium\">Andi</td><td class=\"p-2 border\">90</td><td class=\"p-2 border\">285.000</td></tr>\n      <tr><td class=\"p-2 border font-medium\">Budi</td><td class=\"p-2 border\">92</td><td class=\"p-2 border\">286.000</td></tr>\n      <tr><td class=\"p-2 border font-medium\">Cici</td><td class=\"p-2 border\">89</td><td class=\"p-2 border\">280.000</td></tr>\n      <tr><td class=\"p-2 border font-medium\">Dini</td><td class=\"p-2 border\">95</td><td class=\"p-2 border\">287.000</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nDengan uang yang dimiliki, siapakah siswa yang pasti dapat mengikuti kursus?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Dini."
      },
      {
        "id": "B",
        "text": "Dini dan Budi."
      },
      {
        "id": "C",
        "text": "Dini, Budi dan Andi."
      },
      {
        "id": "D",
        "text": "Dini, Cici, Budi dan Andi."
      },
      {
        "id": "E",
        "text": "Cici dan Andi."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Analisis Biaya Kursus Les Pintarku:</strong><br>\n1. <strong>Menentukan biaya awal kursus normal (\\(x\\)):</strong><br>\nFira adalah pendaftar ke-50 (masuk promo 50 pendaftar pertama) dengan potongan \\( y = 0{,}9x \\) dan Fira membayar Rp180.000,00 (atau promo bertingkat Fira dengan diskon rapor). Dari perbandingan biaya normal untuk pendaftar ke-51 dan seterusnya, biaya kursus normal yang ditargetkan adalah \\( x = \\text{Rp400.000,00} \\).<br><br>\n2. <strong>Hitung biaya untuk siswa pendaftar berikutnya:</strong><br>\nKarena datang setelah pendaftar ke-50, mereka tidak mendapat diskon 50 pendaftar pertama, melainkan berlaku diskon rapor berprestasi \\(g(x)\\):<br>\n- <strong>Untuk nilai rapor &gt; 90:</strong> Biaya \\( = 0{,}7 \\times 400.000 = \\text{Rp280.000,00} \\).<br>\n  - <strong>Dini</strong> (nilai 95): Uang Rp287.000,00 &ge; Rp280.000,00 &rarr; <strong>Dapat ikut</strong>.<br>\n  - <strong>Budi</strong> (nilai 92): Uang Rp286.000,00 &ge; Rp280.000,00 &rarr; <strong>Dapat ikut</strong>.<br><br>\n- <strong>Untuk nilai rapor 85 &ndash; 90:</strong> Biaya \\( = 0{,}8 \\times 400.000 = \\text{Rp320.000,00} \\).<br>\n  - <strong>Andi</strong> (nilai 90): Uang Rp285.000,00 &lt; Rp320.000,00 &rarr; Tidak cukup.<br>\n  - <strong>Cici</strong> (nilai 89): Uang Rp280.000,00 &lt; Rp320.000,00 &rarr; Tidak cukup.<br><br>\nJadi, siswa yang pasti dapat mengikuti kursus adalah <strong>Dini dan Budi</strong>.<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 6,
    "elemen": "Aljabar",
    "subelemen": "Barisan dan Deret",
    "indikator": "Menyelesaikan masalah kontekstual sehari-hari berkaitan dengan barisan aritmetika. (6)",
    "kode": "25MATALJBDR06SU-000000-0007",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_06.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada saat pertandingan sepak bola Indonesia melawan Jepang, kelompok pendukung tim Indonesia akan duduk membentuk koreo dengan beberapa orang memegang kertas berwarna yang dibentangkan. Total kertas berwarna yang dipegang oleh pendukung di barisan kursi paling bawah adalah sebanyak 400 lembar, kemudian di baris kedua sebanyak 550 lembar, dan semakin bertambah pada barisan kursi berikutnya dengan pola penambahan yang sama.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika pola penambahan tersebut berlaku sampai pada baris kursi ketujuh, maka berapa banyak penonton yang memegang kertas koreo di baris ke-5?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "700 orang."
      },
      {
        "id": "B",
        "text": "850 orang."
      },
      {
        "id": "C",
        "text": "1.000 orang."
      },
      {
        "id": "D",
        "text": "1.150 orang."
      },
      {
        "id": "E",
        "text": "1.300 orang."
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Barisan Aritmetika:</strong><br>\nPola penonton/kertas koreo membentuk barisan aritmetika:<br>\n- Suku pertama: \\( a = U_1 = 400 \\)<br>\n- Suku kedua: \\( U_2 = 550 \\)<br>\n- Beda (selisih): \\( b = U_2 - U_1 = 550 - 400 = 150 \\)<br><br>\nRumus suku ke-\\(n\\) barisan aritmetika:<br>\n\\[ U_n = a + (n - 1)b \\]<br>\nUntuk baris ke-5 (\\(n = 5\\)):<br>\n\\[ U_5 = 400 + (5 - 1) \\times 150 = 400 + 4 \\times 150 = 400 + 600 = 1.000 \\text{ orang} \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 7,
    "elemen": "Aljabar",
    "subelemen": "Barisan dan Deret",
    "indikator": "Menyelesaikan masalah kontekstual sehari-hari berkaitan dengan barisan geometri. (7)",
    "kode": "25MATALJBDR07SU-000000-0321",
    "tipe": "mcma",
    "img": "/tka/img/matematika-umum/soal_07.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang pasien dengan kadar asam urat tinggi menjalani terapi menggunakan obat penurun kadar asam urat. Pada hari pertama, kadar asam urat dalam darah tercatat \\(13\\text{ mg/dL}\\). Obat bekerja menurunkan kadar asam urat sebesar \\(20\\%\\) setiap hari secara konsisten. Beberapa hal yang perlu diperhatikan dalam mengonsumsi obat penurun asam urat:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>Pasien mulai merasa lebih nyaman saat kadar asam urat ada di bawah \\(7\\text{ mg/dL}\\).</li>\n  <li>Pasien dianggap sembuh secara klinis jika kadar asam urat telah mencapai kurang dari \\(5\\text{ mg/dL}\\).</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPada hari keberapa berapa pasien merasa nyaman namun belum dianggap sembuh secara klinis? Klik pada setiap jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Hari ke-2"
      },
      {
        "id": "B",
        "text": "Hari ke-3"
      },
      {
        "id": "C",
        "text": "Hari ke-4"
      },
      {
        "id": "D",
        "text": "Hari ke-5"
      },
      {
        "id": "E",
        "text": "Hari ke-6"
      }
    ],
    "kunci": [
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Barisan Geometri Penurunan Eksponensial:</strong><br>\nPenurunan sebesar \\(20\\%\\) per hari berarti kadar yang tersisa pada hari berikutnya adalah:<br>\n\\[ r = 100\\% - 20\\% = 80\\% = 0{,}8 \\]<br><br>\nHitung kadar asam urat setiap hari:<br>\n- <strong>Hari ke-1:</strong> \\( 13\\text{ mg/dL} \\)<br>\n- <strong>Hari ke-2:</strong> \\( 13 \\times 0{,}8 = 10{,}4\\text{ mg/dL} \\)<br>\n- <strong>Hari ke-3:</strong> \\( 10{,}4 \\times 0{,}8 = 8{,}32\\text{ mg/dL} \\)<br>\n- <strong>Hari ke-4:</strong> \\( 8{,}32 \\times 0{,}8 = 6{,}656\\text{ mg/dL} \\)<br>\n- <strong>Hari ke-5:</strong> \\( 6{,}656 \\times 0{,}8 = 5{,}3248\\text{ mg/dL} \\)<br>\n- <strong>Hari ke-6:</strong> \\( 5{,}3248 \\times 0{,}8 = 4{,}25984\\text{ mg/dL} \\)<br><br>\nKriteria: merasa nyaman (&lt; 7 mg/dL) TETAPI belum sembuh secara klinis (&ge; 5 mg/dL):<br>\n- Hari ke-4: \\( 5 \\le 6{,}656 < 7 \\) &rarr; <strong>Memenuhi</strong>.<br>\n- Hari ke-5: \\( 5 \\le 5{,}325 < 7 \\) &rarr; <strong>Memenuhi</strong>.<br>\n- Hari ke-6: \\( 4{,}26 < 5 \\) &rarr; Sudah sembuh klinis.<br>\nJadi, kondisi tercapai pada <strong>Hari ke-4</strong> dan <strong>Hari ke-5</strong>.<br>\n<strong>Kunci Jawaban: C, D</strong>"
  },
  {
    "id": 8,
    "elemen": "Aljabar",
    "subelemen": "Persamaan dan Pertidaksamaan Linear",
    "indikator": "Memodelkan grafik suatu daerah penyelesaian ke dalam bentuk sistem pertidaksamaan linear dua variabel. (8)",
    "kode": "25MATALJPTL08SU-000000-0108",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_08.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan daerah penyelesaian yang diarsir pada bidang Cartesius berikut! Daerah dibatasi oleh titik-titik sudut \\(A(-4, 0)\\), \\(B(0, 2)\\), dan \\(C(2, 0)\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nDaerah yang diarsir pada gambar tersebut merupakan himpunan penyelesaian dari sistem pertidaksamaan ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\begin{cases} x - 2y \\ge -4 \\\\ x + y \\ge 2 \\\\ y \\ge 0 \\end{cases} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\begin{cases} 2x - y \\le 4 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\begin{cases} 2x - y \\ge 4 \\\\ x + y \\le 2 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\begin{cases} x - 2y \\ge -4 \\\\ x + y \\le 2 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\begin{cases} x - 2y \\ge -4 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases} \\)"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Pembahasan Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV):</strong><br>\nSegitiga diarsir memiliki titik sudut \\(A(-4, 0)\\), \\(B(0, 2)\\), dan \\(C(2, 0)\\):<br>\n1. <strong>Garis melalui \\(A(-4, 0)\\) dan \\(B(0, 2)\\):</strong><br>\nPersamaan garis: \\( \\frac{y - 0}{2 - 0} = \\frac{x - (-4)}{0 - (-4)} \\implies \\frac{y}{2} = \\frac{x + 4}{4} \\implies 2y = x + 4 \\implies x - 2y = -4 \\).<br>\nUji titik di dalam daerah arsiran, misal \\((0, 1)\\):<br>\n\\[ 0 - 2(1) = -2 \\ge -4 \\quad \\text{(Benar)} \\implies x - 2y \\ge -4 \\]<br><br>\n2. <strong>Garis melalui \\(B(0, 2)\\) dan \\(C(2, 0)\\):</strong><br>\nPersamaan garis: \\( 2x + 2y = 2 \\times 2 \\implies x + y = 2 \\).<br>\nUji titik \\((0, 1)\\):<br>\n\\[ 0 + 1 = 1 \\le 2 \\quad \\text{(Benar)} \\implies x + y \\le 2 \\]<br><br>\n3. <strong>Batas bawah:</strong> Sumbu X pada bagian atas, yaitu \\( y \\ge 0 \\).<br>\n(Catatan: \\(x\\) mencakup nilai negatif dari \\(-4\\) sampai \\(2\\), sehingga tidak dibatasi oleh \\(x \\ge 0\\)).<br><br>\nJadi sistem pertidaksamaannya adalah:<br>\n\\[ \\begin{cases} x - 2y \\ge -4 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases} \\]<br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    "id": 9,
    "elemen": "Aljabar",
    "subelemen": "Sistem Persamaan Linear",
    "indikator": "Menyelesaikan masalah kontekstual yang dimodelkan ke dalam sistem persamaan linear tiga variabel. (9)",
    "kode": "25MATALJSPL09SU-000000-2458",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_09.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBu Silma adalah seorang perangkai bunga yang disusun dalam buket bunga. Di tokonya, ia memiliki bunga mawar, lili, dan anyelir. Harga buket ditentukan dari total harga bunga yang digunakan dalam buket tersebut. Adapun tiga jenis buket yang biasa ia siapkan dengan komposisi ketiga bunga beserta harga per buketnya diberikan pada gambar berikut:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li><strong>Buket Tipe A (Rp85.000,00):</strong> 2 tangkai mawar, 3 tangkai lili, dan 1 tangkai anyelir</li>\n  <li><strong>Buket Tipe B (Rp70.000,00):</strong> 1 tangkai mawar, 2 tangkai lili, dan 2 tangkai anyelir</li>\n  <li><strong>Buket Tipe C (Rp75.000,00):</strong> 3 tangkai mawar, 1 tangkai lili, dan 1 tangkai anyelir</li>\n</ul>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBila seorang pembeli ingin membeli buket bunga tipe C namun ingin menambah 2 tangkai lili dan 1 tangkai anyelir dengan harga satuan, maka total harga yang harus dibayar pembeli tersebut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Rp75.000,00"
      },
      {
        "id": "B",
        "text": "Rp102.000,00"
      },
      {
        "id": "C",
        "text": "Rp110.000,00"
      },
      {
        "id": "D",
        "text": "Rp115.000,00"
      },
      {
        "id": "E",
        "text": "Rp116.000,00"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Sistem Persamaan Linear Tiga Variabel (SPLTV):</strong><br>\nMisalkan harga per tangkai bunga:<br>\n- Mawar \\( = m \\)<br>\n- Lili \\( = l \\)<br>\n- Anyelir \\( = a \\)<br><br>\nDari susunan bunga pada masing-masing buket:<br>\n1) \\( 2m + 3l + a = 85.000 \\)<br>\n2) \\( m + 2l + 2a = 70.000 \\)<br>\n3) \\( 3m + l + a = 75.000 \\)<br><br>\n<strong>Langkah Eliminasi:</strong><br>\nKurangkan persamaan (1) dengan persamaan (3):<br>\n\\[ (2m + 3l + a) - (3m + l + a) = 85.000 - 75.000 \\]<br>\n\\[ -m + 2l = 10.000 \\implies m = 2l - 10.000 \\quad \\text{--- (4)} \\]<br><br>\nSubstitusikan (4) ke persamaan (2):<br>\n\\[ (2l - 10.000) + 2l + 2a = 70.000 \\implies 4l + 2a = 80.000 \\implies 2l + a = 40.000 \\implies a = 40.000 - 2l \\quad \\text{--- (5)} \\]<br><br>\nSubstitusikan (4) dan (5) ke persamaan (1):<br>\n\\[ 2(2l - 10.000) + 3l + (40.000 - 2l) = 85.000 \\]<br>\n\\[ 4l - 20.000 + 3l + 40.000 - 2l = 85.000 \\]<br>\n\\[ 5l + 20.000 = 85.000 \\implies 5l = 65.000 \\implies l = 13.000 \\]<br><br>\nHitung harga bunga lainnya:<br>\n- \\( m = 2(13.000) - 10.000 = 26.000 - 10.000 = 16.000 \\)<br>\n- \\( a = 40.000 - 2(13.000) = 40.000 - 26.000 = 14.000 \\)<br><br>\n<strong>Hitung Total Harga Pembelian:</strong><br>\nPembeli membeli buket tipe C ditambah 2 tangkai lili dan 1 tangkai anyelir:<br>\n\\[ \\text{Total} = \\text{Harga Buket C} + 2l + 1a \\]<br>\n\\[ \\text{Total} = 75.000 + 2(13.000) + 1(14.000) = 75.000 + 26.000 + 14.000 = 115.000 \\]<br>\nJadi, total harga yang harus dibayar adalah <strong>Rp115.000,00</strong>.<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 10,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Objek Geometri",
    "indikator": "Mengidentifikasi hubungan antar dua garis atau antar dua sudut. (10)",
    "kode": "25MATGMPOBJ10SU-000000-0150",
    "tipe": "mcma",
    "img": "/tka/img/matematika-umum/soal_10.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan gambar dua garis sejajar yang dipotong oleh garis transversal pada segitiga berikut!\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan gambar tersebut, pasangan sudut manakah yang membentuk sudut \\(180^{\\circ}\\)? Klik pada setiap jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\angle A \\text{ dan } \\angle B \\)"
      },
      {
        "id": "B",
        "text": "\\( \\angle A \\text{ dan } \\angle E \\)"
      },
      {
        "id": "C",
        "text": "\\( \\angle B \\text{ dan } \\angle C \\)"
      },
      {
        "id": "D",
        "text": "\\( \\angle B \\text{ dan } \\angle D \\)"
      },
      {
        "id": "E",
        "text": "\\( \\angle E \\text{ dan } \\angle C \\)"
      }
    ],
    "kunci": [
      "C",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Hubungan Sudut Dua Garis Sejajar:</strong><br>\n1. <strong>Sudut Berpelurus:</strong> Sudut \\( \\angle B \\) dan \\( \\angle D \\) terletak pada satu garis lurus transversal, sehingga merupakan pasangan sudut berpelurus:<br>\n\\[ \\angle B + \\angle D = 180^{\\circ} \\]<br>\n(Pernyataan D Benar).<br><br>\n2. <strong>Sudut Sehadap dan Berseberangan:</strong><br>\nKarena garis transversal memotong dua garis sejajar, maka sudut luar sepihak/berseberangan menunjukkan bahwa \\( \\angle D = \\angle C \\) (sudut sehadap).<br>\nKarena \\( \\angle B + \\angle D = 180^{\\circ} \\) dan \\( \\angle D = \\angle C \\), maka:<br>\n\\[ \\angle B + \\angle C = 180^{\\circ} \\]<br>\n(Pernyataan C Benar).<br><br>\nSedangkan pasangan sudut lainnya tidak berjumlah \\(180^{\\circ}\\).<br>\n<strong>Kunci Jawaban: C, D</strong>"
  },
  {
    "id": 11,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Objek Geometri",
    "indikator": "Menentukan hubungan antar bidang atau antar garis pada suatu bangun ruang. (11)",
    "kode": "25MATGMPOBJ11SU-000000-0040",
    "tipe": "mcma",
    "img": "/tka/img/matematika-umum/soal_11.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nZara ingin menata kembali kamarnya dengan menambahkan papan jadwal di dinding. Papan jadwal tidak diletakkan pada dinding yang sejajar dengan rak buku gantung. Posisi rak buku gantung dapat dilihat menempel pada dinding belakang balok kamar (bidang CDHG).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan posisi yang diinginkan, pada dinding manakah papan jadwal akan diletakkan? Klik pada setiap jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "CDHG"
      },
      {
        "id": "B",
        "text": "BCGF"
      },
      {
        "id": "C",
        "text": "ABFE"
      },
      {
        "id": "D",
        "text": "BCFA"
      },
      {
        "id": "E",
        "text": "ADHE"
      }
    ],
    "kunci": [
      "B",
      "E"
    ],
    "pembahasan": "<strong>Pembahasan Kedudukan Bidang pada Balok:</strong><br>\nKamar berbentuk balok dengan dinding tegak sebagai berikut:<br>\n- Dinding belakang: <strong>CDHG</strong> (tempat menempelnya rak buku gantung)<br>\n- Dinding depan: <strong>ABFE</strong> (sejajar langsung dengan bidang CDHG)<br>\n- Dinding samping kanan: <strong>BCGF</strong> (tegak lurus terhadap CDHG)<br>\n- Dinding samping kiri: <strong>ADHE</strong> (tegak lurus terhadap CDHG)<br><br>\n<strong>Analisis Syarat Peletakan:</strong><br>\nPapan jadwal <em>tidak diletakkan pada dinding yang sejajar dengan rak buku gantung</em> (tidak di ABFE) dan tentunya tidak di dinding yang sudah terisi rak gantung (CDHG).<br>\nOleh karena itu, dinding yang dapat dipilih adalah dinding yang posisinya tegak lurus terhadap bidang CDHG, yaitu bidang <strong>BCGF</strong> dan <strong>ADHE</strong>.<br>\n<strong>Kunci Jawaban: B, E</strong>"
  },
  {
    "id": 12,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Objek Geometri",
    "indikator": "Menentukan panjang sisi yang tidak diketahui pada suatu bangun datar dengan menerapkan konsep kesebangunan. (12)",
    "kode": "25MATGMPGEO12SU-000000-0250",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_12.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui trapesium siku-siku \\(KLMN\\) dan \\(NMPO\\) sebangun. Sisi atas \\(OP = 18\\text{ cm}\\), sisi alas \\(KL = 32\\text{ cm}\\), dan tinggi trapesium besar \\(KN = 16\\text{ cm}\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan informasi tersebut, berapakah panjang sisi \\(LM\\)?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( 6\\sqrt{5}\\text{ cm} \\)"
      },
      {
        "id": "B",
        "text": "\\( 8\\sqrt{5}\\text{ cm} \\)"
      },
      {
        "id": "C",
        "text": "\\( 9\\sqrt{5}\\text{ cm} \\)"
      },
      {
        "id": "D",
        "text": "\\( 10\\sqrt{5}\\text{ cm} \\)"
      },
      {
        "id": "E",
        "text": "\\( 14\\sqrt{5}\\text{ cm} \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Kesebangunan Trapesium:</strong><br>\nTrapesium \\(KLMN\\) dan \\(NMPO\\) sebangun.<br>\n1. <strong>Tentukan panjang sisi sekutu \\(NM\\):</strong><br>\nSisi \\(OP\\) bersesuaian dengan \\(NM\\), dan \\(NM\\) bersesuaian dengan \\(KL\\):<br>\n\\[ \\frac{OP}{NM} = \\frac{NM}{KL} \\]<br>\n\\[ NM^2 = OP \\times KL = 18 \\times 32 = 576 \\]<br>\n\\[ NM = \\sqrt{576} = 24\\text{ cm} \\]<br><br>\n2. <strong>Hitung panjang sisi miring \\(LM\\):</strong><br>\nTarik garis tinggi dari titik \\(M\\) tegak lurus ke alas \\(KL\\) di titik \\(R\\).<br>\n- Tinggi \\(MR = KN = 16\\text{ cm}\\)<br>\n- Panjang segmen \\(RL = KL - KR = KL - NM = 32 - 24 = 8\\text{ cm}\\)<br>\nDengan teorema Pythagoras pada segitiga siku-siku \\(MRL\\):<br>\n\\[ LM = \\sqrt{MR^2 + RL^2} = \\sqrt{16^2 + 8^2} = \\sqrt{256 + 64} = \\sqrt{320} \\]<br>\n\\[ LM = \\sqrt{64 \\times 5} = 8\\sqrt{5}\\text{ cm} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 13,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Objek Geometri",
    "indikator": "Menerapkan teorema Pythagoras dalam menyelesaikan permasalahan kontekstual sehari-hari. (13)",
    "kode": "25MATGMPGEO13SU-000000-0073",
    "tipe": "kategori",
    "img": "/tka/img/matematika-umum/soal_13.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTim adiwiyata SMA Gemilang sedang menata sayuran di kebun sekolah. Mereka menanam beberapa tanaman obat keluarga (toga) seperti jahe, kunyit dan lengkuas. Setiap tanaman ditempatkan di pot yang berbeda-beda ukurannya. Pot tersebut akan diletakkan di salah satu sisi miring kebun yang berbentuk trapesium siku-siku dengan ukuran alas \\(360\\text{ cm}\\), tinggi kiri \\(500\\text{ cm}\\), dan tinggi kanan \\(350\\text{ cm}\\).<br>\nUkuran diameter pot yang digunakan untuk jahe berukuran \\(15\\text{ cm}\\), kunyit berukuran \\(26\\text{ cm}\\), dan lengkuas berukuran \\(30\\text{ cm}\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan ilustrasi, tentukan benar atau salah pernyataan berkaitan dengan kapasitas sisi kebun yang ditanami tanaman toga tersebut!\n</p>",
    "kategoriConfig": {
      "columns": [
        "Benar",
        "Salah"
      ],
      "rows": [
        {
          "id": "r1",
          "label": "Ada 25 tanaman jahe yang bisa ditanam."
        },
        {
          "id": "r2",
          "label": "Ada 15 tanaman kunyit yang bisa ditanam."
        },
        {
          "id": "r3",
          "label": "Ada 10 tanaman lengkuas yang bisa ditanam."
        }
      ]
    },
    "kunci": {
      "r1": "Salah",
      "r2": "Benar",
      "r3": "Salah"
    },
    "pembahasan": "<strong>Pembahasan Teorema Pythagoras pada Sisi Kebun:</strong><br>\n1. <strong>Hitung panjang sisi miring kebun tempat pot diletakkan:</strong><br>\n- Selisih tinggi kebun: \\( \\Delta t = 500\\text{ cm} - 350\\text{ cm} = 150\\text{ cm} \\)<br>\n- Lebar alas mendatar: \\( 360\\text{ cm} \\)<br>\nPanjang sisi miring (\\(s\\)):<br>\n\\[ s = \\sqrt{150^2 + 360^2} = \\sqrt{22.500 + 129.600} = \\sqrt{152.100} = 390\\text{ cm} \\]<br><br>\n2. <strong>Uji masing-masing pernyataan kapasitas pot:</strong><br>\n- <strong>Pot Jahe (diameter 15 cm):</strong><br>\n  \\[ \\text{Kapasitas} = \\frac{390}{15} = 26 \\text{ tanaman} \\]<br>\n  Pernyataan \"Ada 25 tanaman jahe yang bisa ditanam\" &rarr; <strong>Salah</strong> (dapat memuat 26 tanaman).<br><br>\n- <strong>Pot Kunyit (diameter 26 cm):</strong><br>\n  \\[ \\text{Kapasitas} = \\frac{390}{26} = 15 \\text{ tanaman} \\]<br>\n  Pernyataan \"Ada 15 tanaman kunyit yang bisa ditanam\" &rarr; <strong>Benar</strong>.<br><br>\n- <strong>Pot Lengkuas (diameter 30 cm):</strong><br>\n  \\[ \\text{Kapasitas} = \\frac{390}{30} = 13 \\text{ tanaman} \\]<br>\n  Pernyataan \"Ada 10 tanaman lengkuas yang bisa ditanam\" &rarr; <strong>Salah</strong> (dapat memuat 13 tanaman).<br><br>\n<strong>Kunci: r1: Salah, r2: Benar, r3: Salah</strong>"
  },
  {
    "id": 14,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Transformasi Geometri",
    "indikator": "Menentukan titik asal dari suatu koordinat titik ketika diterapkan komposisi dua jenis transformasi geometri. (14)",
    "kode": "25MATGMPTRG14SU-000000-0126",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_14.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTitik \\(B\\) direfleksikan oleh garis \\(y = 1\\), kemudian dirotasi dengan pusat di \\(O(0,0)\\) sebesar \\(180^{\\circ}\\) searah jarum jam. Titik \\(B'(-4, 1)\\) pada gambar merupakan bayangan titik \\(B\\) hasil komposisi kedua transformasi tersebut.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nGambar titik \\(B\\) semula yang sesuai memiliki koordinat ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Titik \\( B(4, -1) \\)"
      },
      {
        "id": "B",
        "text": "Titik \\( B(4, 3) \\)"
      },
      {
        "id": "C",
        "text": "Titik \\( B(-6, -1) \\)"
      },
      {
        "id": "D",
        "text": "Titik \\( B(-2, -1) \\)"
      },
      {
        "id": "E",
        "text": "Titik \\( B(2, 4) \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Invers Komposisi Transformasi Geometri:</strong><br>\nDiketahui koordinat bayangan akhir: \\( B'(-4, 1) \\).<br>\n1. <strong>Invers Rotasi \\(180^{\\circ}\\):</strong><br>\nRotasi dengan pusat \\(O(0,0)\\) sebesar \\(180^{\\circ}\\) (searah atau berlawanan jarum jam) memiliki aturan transformasi \\( (x, y) \\to (-x, -y) \\).<br>\nMaka sebelum dirotasi, bayangan pertama \\(B_1\\) adalah:<br>\n\\[ B_1 = (-(-4), -(1)) = (4, -1) \\]<br><br>\n2. <strong>Invers Refleksi terhadap garis \\( y = 1 \\):</strong><br>\nRefleksi terhadap garis horizontal \\( y = k \\) memetakan titik \\( (x, y) \\to (x, 2k - y) \\).<br>\nDi sini \\( k = 1 \\) dan koordinat setelah refleksi adalah \\( (x_1, y_1) = (4, -1) \\):<br>\n- \\( x_B = x_1 = 4 \\)<br>\n- \\( 2(1) - y_B = -1 \\implies 2 - y_B = -1 \\implies y_B = 3 \\)<br><br>\nJadi koordinat titik asal \\(B\\) adalah <strong>\\( (4, 3) \\)</strong>.<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 15,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Pengukuran",
    "indikator": "Menyelesaikan permasalahan kontekstual sehari-hari yang melibatkan jarak dua titik dalam suatu bangun ruang. (15)",
    "kode": "25MATGMPUKR15SU-000000-2440",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_17.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSD Jaya Makmur baru saja mendapat ruangan kelas baru berukuran panjang \\(6\\text{ m}\\), lebar \\(4\\text{ m}\\), dan tinggi dinding \\(5\\text{ m}\\). Murid-murid ingin menghias kelasnya dengan memasang tali hiasan pada bagian langit-langit kelas. Tali hiasan dipasang dari pojok dinding pintu masuk ke bagian tengah langit-langit dinding papan tulis seperti pada gambar.<br>\nMereka akan membuat tali kedua yang sama seperti tali hiasan pertama untuk dipasang ke pojok yang lain pada dinding pintu.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nApabila mereka membeli gulungan tali yang panjangnya \\(20\\text{ meter}\\), berapakah sisa tali yang tidak terpakai?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "6 m."
      },
      {
        "id": "B",
        "text": "10 m."
      },
      {
        "id": "C",
        "text": "11 m."
      },
      {
        "id": "D",
        "text": "13 m."
      },
      {
        "id": "E",
        "text": "14 m."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Jarak Titik pada Bidang Langit-Langit:</strong><br>\nRuangan kelas memiliki langit-langit berbentuk persegi panjang berukuran panjang \\(6\\text{ m}\\) dan lebar \\(4\\text{ m}\\).<br>\n1. <strong>Hitung panjang satu tali hiasan:</strong><br>\nTali membentang pada bidang datar langit-langit dari pojok ke titik tengah dinding seberangnya:<br>\n- Jarak searah panjang ruangan \\( = 4\\text{ m} \\) (atau dimensi sisi mendatar)<br>\n- Jarak searah lebar ke tengah \\( = \\frac{6}{2} = 3\\text{ m} \\)<br>\nDengan teorema Pythagoras pada bidang langit-langit:<br>\n\\[ \\text{Panjang tali} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ meter} \\]<br><br>\n2. <strong>Hitung total tali dan sisanya:</strong><br>\n- Jumlah tali yang dipasang: \\( 2 \\text{ buah} \\)<br>\n- Total tali terpakai: \\( 2 \\times 5\\text{ m} = 10\\text{ meter} \\)<br>\n- Panjang tali yang dibeli: \\( 20\\text{ meter} \\)<br>\n- Sisa tali yang tidak terpakai:<br>\n\\[ 20\\text{ m} - 10\\text{ m} = 10\\text{ meter} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 16,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Pengukuran",
    "indikator": "Menyelesaikan permasalahan kontekstual sehari-hari yang melibatkan perhitungan keliling gabungan bangun datar. (16)",
    "kode": "25MATGMPUKR16SU-000000-2432",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_18.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nArif, seorang desainer interior akan membuat suatu desain ornamen jam dinding baru. Ornamen tersebut memiliki bentuk dasar gabungan segitiga sama kaki dan setengah lingkaran. Ukuran alas segitiga \\(50\\text{ cm}\\), diameter lingkaran \\(20\\text{ cm}\\), dan tinggi total ornamen adalah \\(70\\text{ cm}\\).<br>\nDi sekeliling tepi luar ornamen jam tersebut akan ditempel kayu tipis untuk menambah efek tiga dimensi.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nApabila Arif akan membuat dua buah ornamen jam dinding untuk dijadikan model contoh, berapa panjang kayu tipis yang ia perlukan? (Gunakan \\(\\pi = 3{,}14\\))\n</p>",
    "options": [
      {
        "id": "A",
        "text": "322,8 cm."
      },
      {
        "id": "B",
        "text": "352,8 cm."
      },
      {
        "id": "C",
        "text": "362,8 cm."
      },
      {
        "id": "D",
        "text": "382,8 cm."
      },
      {
        "id": "E",
        "text": "445,6 cm."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Keliling Bangun Datar Gabungan:</strong><br>\n1. <strong>Tinggi dan Sisi Miring Segitiga:</strong><br>\n- Diameter lingkaran \\( d = 20\\text{ cm} \\implies r = 10\\text{ cm} \\).<br>\n- Tinggi segitiga sama kaki \\( t = 70\\text{ cm} - 10\\text{ cm} = 60\\text{ cm} \\).<br>\n- Setengah alas segitiga: \\( \\frac{50}{2} = 25\\text{ cm} \\).<br>\n- Sisi miring segitiga (Pythagoras):<br>\n\\[ s = \\sqrt{25^2 + 60^2} = \\sqrt{625 + 3.600} = \\sqrt{4.225} = 65\\text{ cm} \\]<br><br>\n2. <strong>Keliling Tepi Luar 1 Ornamen:</strong><br>\n- Dua sisi miring segitiga: \\( 2 \\times 65 = 130\\text{ cm} \\)<br>\n- Bagian alas segitiga di luar lingkaran: \\( 50 - 20 = 30\\text{ cm} \\)<br>\n- Busur bawah setengah lingkaran: \\( \\frac{1}{2} \\pi d = \\frac{1}{2} \\times 3{,}14 \\times 20 = 31{,}4\\text{ cm} \\)<br>\nTotal keliling 1 ornamen:<br>\n\\[ K = 130 + 30 + 31{,}4 = 191{,}4\\text{ cm} \\]<br><br>\n3. <strong>Panjang Kayu untuk 2 Buah Ornamen:</strong><br>\n\\[ \\text{Total kayu} = 2 \\times 191{,}4 = 382{,}8\\text{ cm} \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 17,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Pengukuran",
    "indikator": "Menggunakan keterkaitan antara konsep keliling dan luas dari suatu bangun datar dalam menyelesaikan masalah kecukupan data. (17)",
    "kode": "25MATGMPUKR17SU-000000-2240",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_20.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan permasalahan dalam kotak berikut!<br>\n<em>Panjang salah satu diagonal suatu layang-layang adalah 20 cm. Berapakah keliling layang-layang tersebut?</em><br><br>\nPutuskan apakah pernyataan (1) dan pernyataan (2) berikut cukup untuk menjawab permasalahan dalam kotak tersebut!<br>\n(1) Luas layang-layang adalah \\(160\\text{ cm}^2\\).<br>\n(2) Panjang salah satu sisi layang-layang adalah \\(10\\text{ cm}\\).\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "id": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "id": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "id": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "id": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Analisis Kecukupan Data Keliling Layang-Layang:</strong><br>\nDiketahui salah satu diagonal, misal \\( d_1 = 20\\text{ cm} \\).<br><br>\n1. <strong>Uji Pernyataan (1) SAJA:</strong><br>\nLuas \\( L = \\frac{1}{2} d_1 d_2 = 160 \\implies \\frac{1}{2} \\times 20 \\times d_2 = 160 \\implies d_2 = 16\\text{ cm} \\).<br>\nMeskipun kedua diagonal diketahui (20 cm dan 16 cm), perpotongan diagonal pada layang-layang membagi diagonal pendek menjadi 2 sama panjang (8 cm dan 8 cm), tetapi membagi diagonal panjang menjadi dua segmen \\(x\\) dan \\(20 - x\\) yang tidak diketahui perbandingannya. Akibatnya, panjang sisi miring dan keliling belum dapat ditentukan secara unik. Jadi (1) SAJA tidak cukup.<br><br>\n2. <strong>Uji Pernyataan (2) SAJA:</strong><br>\nHanya diketahui salah satu sisi = 10 cm, tanpa informasi luas atau diagonal kedua, sisi lainnya tidak dapat dihitung. Jadi (2) SAJA tidak cukup.<br><br>\n3. <strong>Uji Bersama-sama (1) dan (2):</strong><br>\nDari (1), setengah diagonal pendek adalah 8 cm. Dari (2), salah satu sisi hipotenusa adalah 10 cm. Pada segitiga siku-siku pecahan diagonal, sisi siku-siku lainnya pasti \\( \\sqrt{10^2 - 8^2} = 6\\text{ cm} \\).<br>\nMaka segmen diagonal panjang lainnya adalah \\( 20 - 6 = 14\\text{ cm} \\).<br>\nPanjang pasangan sisi kedua layang-layang dapat dihitung pasti yaitu \\( \\sqrt{8^2 + 14^2} = \\sqrt{260}\\text{ cm} \\).<br>\nSehingga keliling layang-layang dapat dihitung secara tepat dan tunggal.<br><br>\nOleh karena itu, <strong>DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup</strong>.<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 18,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Pengukuran",
    "indikator": "Menyelesaikan permasalahan kontekstual sehari-hari dengan menerapkan konsep volume bangun ruang dan gabungannya. (18)",
    "kode": "25MATGMPUKR18SU-000000-0281",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_21.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPak Omar adalah seorang distributor helm. Hari ini, ia mendapat pesanan untuk mengirimkan helm yang sama dalam jumlah besar menggunakan truk. Agar kualitas terjaga, helm dikemas dalam wadah kardus helm berukuran \\(20\\text{ cm} \\times 20\\text{ cm} \\times 30\\text{ cm}\\) (dengan tinggi \\(20\\text{ cm}\\)). Bak truk pengangkut memiliki ukuran tinggi \\(120\\text{ cm}\\), lebar \\(150\\text{ cm}\\), dan panjang \\(240\\text{ cm}\\).<br>\nPak Omar memberikan arahan pada kurir untuk mengatur posisi atas kardus helm tidak boleh dibalik (tempat masuk kepala harus menghadap ke bawah). Semua kardus helm disusun menghadap depan atau menghadap samping.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan posisi susunan tersebut, berapa paling banyak kardus helm yang dapat dimuat di truk tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "336 kardus."
      },
      {
        "id": "B",
        "text": "360 kardus."
      },
      {
        "id": "C",
        "text": "384 kardus."
      },
      {
        "id": "D",
        "text": "432 kardus."
      },
      {
        "id": "E",
        "text": "504 kardus."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Optimasi Pengemasan Bangun Ruang:</strong><br>\n1. <strong>Tinggi Tumpukan Kardus:</strong><br>\nKarena posisi atas kardus helm tidak boleh dibalik, tinggi setiap kardus helm tetap \\(20\\text{ cm}\\).<br>\nBanyak tumpukan vertikal yang muat dalam truk bertinggi \\(120\\text{ cm}\\):<br>\n\\[ \\text{Tumpukan} = \\frac{120\\text{ cm}}{20\\text{ cm}} = 6 \\text{ lapis} \\]<br><br>\n2. <strong>Penataan Alas Kardus (Ukuran \\(20\\text{ cm} \\times 30\\text{ cm}\\)):</strong><br>\nDimensi lantai bak truk: lebar \\(150\\text{ cm}\\), panjang \\(240\\text{ cm}\\).<br>\n- Jika sisi \\(30\\text{ cm}\\) diarahkan ke lebar \\(150\\text{ cm}\\): \\( \\frac{150}{30} = 5 \\) baris pas.<br>\n- Sisi \\(20\\text{ cm}\\) diarahkan ke panjang \\(240\\text{ cm}\\): \\( \\frac{240}{20} = 12 \\) kolom pas.<br>\nJumlah kardus per lapis:<br>\n\\[ 5 \\times 12 = 60 \\text{ kardus per lapis} \\]<br>\n(Perhatikan bahwa luas lantai \\(150 \\times 240 = 36.000\\text{ cm}^2\\) terisi penuh tanpa ada celah tersisa karena \\(60 \\times (20 \\times 30) = 36.000\\text{ cm}^2\\)).<br><br>\n3. <strong>Total Kardus Maksimum:</strong><br>\n\\[ \\text{Total} = 6 \\text{ lapis} \\times 60 \\text{ kardus/lapis} = 360 \\text{ kardus} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 19,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Pengukuran",
    "indikator": "Menyelesaikan permasalahan kontekstual sehari-hari yang melibatkan perhitungan luas permukaan bangun ruang sisi lengkung. (19)",
    "kode": "25MATGMPUKR19SU-000000-2434",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_22.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBu Sita, seorang desainer interior, sedang membuat hiasan lampu tidur dari bahan akrilik. Setiap hiasan akan berbentuk tabung berongga (tanpa alas dan tanpa tutup) dengan diameter \\(14\\text{ cm}\\) dan tinggi \\(25\\text{ cm}\\). Bagian luar hiasan tabung ini akan dilapisi dengan stiker vinil motif bunga.<br>\nStiker vinil dijual dalam lembaran, dan harga satu lembarnya adalah Rp9.000,00. Setiap lembar stiker vinil mampu menutupi area seluas \\(300\\text{ cm}^2\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nJika Bu Sita berencana membuat 8 buah hiasan lampu tidur, berapakah biaya minimal yang harus dikeluarkan Bu Sita untuk membeli stiker vinil tersebut? (Gunakan \\(\\pi = \\frac{22}{7}\\))\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Rp72.000,00."
      },
      {
        "id": "B",
        "text": "Rp108.000,00."
      },
      {
        "id": "C",
        "text": "Rp252.000,00."
      },
      {
        "id": "D",
        "text": "Rp270.000,00."
      },
      {
        "id": "E",
        "text": "Rp288.000,00."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Luas Permukaan Selimut Tabung:</strong><br>\nTabung berongga tanpa alas dan tutup hanya membutuhkan luas selimut tabung.<br>\n1. <strong>Hitung luas selimut satu tabung lampu:</strong><br>\n- Diameter \\( d = 14\\text{ cm} \\implies r = 7\\text{ cm} \\)<br>\n- Tinggi \\( t = 25\\text{ cm} \\)<br>\n\\[ L_{\\text{selimut}} = 2\\pi r t = \\pi d t = \\frac{22}{7} \\times 14 \\times 25 = 22 \\times 2 \\times 25 = 1.100\\text{ cm}^2 \\]<br><br>\n2. <strong>Luas total untuk 8 buah hiasan lampu:</strong><br>\n\\[ L_{\\text{total}} = 8 \\times 1.100\\text{ cm}^2 = 8.800\\text{ cm}^2 \\]<br><br>\n3. <strong>Banyak lembar stiker vinil yang dibutuhkan:</strong><br>\nSatu lembar stiker menutupi \\(300\\text{ cm}^2\\):<br>\n\\[ n = \\frac{8.800}{300} = 29{,}33... \\text{ lembar} \\]<br>\nKarena stiker dijual per lembar utuh, dibulatkan ke atas menjadi <strong>30 lembar</strong>.<br><br>\n4. <strong>Biaya minimal pembelian stiker:</strong><br>\n\\[ \\text{Biaya} = 30 \\times \\text{Rp9.000,00} = \\text{Rp270.000,00} \\]<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 20,
    "elemen": "Geometri dan Pengukuran",
    "subelemen": "Perbandingan Trigonometri",
    "indikator": "Menentukan suatu nilai perbandingan trigonometri apabila diketahui nilai perbandingan trigonometri lainnya. (20)",
    "kode": "25MATGMPTRM20SU-000000-0278",
    "tipe": "kategori",
    "img": "/tka/img/matematika-umum/soal_24.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan segitiga \\(ABC\\) yang dibagi oleh garis tinggi \\(AD\\) tegak lurus \\(BC\\).<br>\nDiketahui sisi \\(AB = 4\\text{ cm}\\) (dengan tanda sama panjang dengan \\(DC\\), sehingga \\(DC = 4\\text{ cm}\\)). Sudut pada puncak \\(A\\) di segitiga \\(ADC\\) adalah \\(\\alpha\\) dengan nilai \\( \\cos(\\alpha) = \\frac{3}{5} \\), dan sudut pada titik \\(B\\) adalah \\(\\beta\\).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan Benar atau Salah terkait nilai perbandingan trigonometri berikut!\n</p>",
    "kategoriConfig": {
      "columns": [
        "Benar",
        "Salah"
      ],
      "rows": [
        {
          "id": "r1",
          "label": "\\( \\sin(\\beta) = \\frac{\\sqrt{7}}{4} \\)"
        },
        {
          "id": "r2",
          "label": "\\( \\cos(\\beta) = \\frac{\\sqrt{7}}{5} \\)"
        },
        {
          "id": "r3",
          "label": "\\( \\tan(\\beta) = \\frac{3\\sqrt{7}}{7} \\)"
        }
      ]
    },
    "kunci": {
      "r1": "Salah",
      "r2": "Salah",
      "r3": "Benar"
    },
    "pembahasan": "<strong>Pembahasan Perbandingan Trigonometri Segitiga Siku-Siku:</strong><br>\n1. <strong>Tinjau segitiga siku-siku \\(ADC\\) (siku-siku di \\(D\\)):</strong><br>\nDiketahui \\( \\cos(\\alpha) = \\frac{AD}{AC} = \\frac{3}{5} \\).<br>\nMisalkan \\( AD = 3k \\) dan \\( AC = 5k \\).<br>\nDengan teorema Pythagoras:<br>\n\\[ DC = \\sqrt{AC^2 - AD^2} = \\sqrt{(5k)^2 - (3k)^2} = 4k \\]<br>\nKarena tanda kesamaan panjang menunjukkan \\( DC = AB = 4\\text{ cm} \\), maka \\( 4k = 4 \\implies k = 1 \\).<br>\nSehingga didapat ukuran:<br>\n- \\( DC = 4\\text{ cm} \\)<br>\n- \\( AD = 3\\text{ cm} \\)<br>\n- \\( AC = 5\\text{ cm} \\)<br><br>\n2. <strong>Tinjau segitiga siku-siku \\(ABD\\) (siku-siku di \\(D\\)):</strong><br>\n- Sisi miring \\( AB = 4\\text{ cm} \\)<br>\n- Sisi tegak depan sudut \\(\\beta\\) adalah \\( AD = 3\\text{ cm} \\)<br>\n- Sisi samping sudut \\(\\beta\\) adalah \\( BD \\):<br>\n\\[ BD = \\sqrt{AB^2 - AD^2} = \\sqrt{4^2 - 3^2} = \\sqrt{16 - 9} = \\sqrt{7}\\text{ cm} \\]<br><br>\n3. <strong>Hitung nilai perbandingan trigonometri sudut \\(\\beta\\):</strong><br>\n- \\( \\sin(\\beta) = \\frac{\\text{depan}}{\\text{miring}} = \\frac{AD}{AB} = \\frac{3}{4} \\) (sehingga r1 \\( \\frac{\\sqrt{7}}{4} \\) bernilai <strong>Salah</strong>).<br>\n- \\( \\cos(\\beta) = \\frac{\\text{samping}}{\\text{miring}} = \\frac{BD}{AB} = \\frac{\\sqrt{7}}{4} \\) (sehingga r2 \\( \\frac{\\sqrt{7}}{5} \\) bernilai <strong>Salah</strong>).<br>\n- \\( \\tan(\\beta) = \\frac{\\text{depan}}{\\text{samping}} = \\frac{AD}{BD} = \\frac{3}{\\sqrt{7}} = \\frac{3\\sqrt{7}}{7} \\) (sehingga r3 bernilai <strong>Benar</strong>).<br><br>\n<strong>Kunci: r1: Salah, r2: Salah, r3: Benar</strong>"
  },
  {
    "id": 21,
    "elemen": "Data dan Peluang",
    "subelemen": "Data",
    "indikator": "Menginterpretasi penyajian data dalam bentuk diagram garis. (21)",
    "kode": "25MATDPLDAT21SU-000000-2342",
    "tipe": "mcma",
    "img": "/tka/img/matematika-umum/soal_25.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBanyak siswa yang lulus di sekolah Yayasan Cahaya beragam setiap tahunnya. Berikut adalah data banyak lulusan di tiga sekolah menengah swasta milik Yayasan Cahaya (SMA 1 Bintang, SMA 2 Bintang, dan SMK Kejora) pada kurun tahun 2017 &ndash; 2025 yang disajikan dalam diagram garis.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan grafik tersebut, berikut ini pernyataan mana saja yang tepat mendeskripsikan banyak lulusan di ketiga sekolah milik Yayasan Cahaya? Pilih setiap jawaban benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Banyak siswa SMA 1 Bintang yang lulus selalu bertambah mulai tahun 2020."
      },
      {
        "id": "B",
        "text": "Pada tahun 2017-2020, banyak lulusan dari ketiga sekolah di yayasan Cahaya selalu bertambah."
      },
      {
        "id": "C",
        "text": "Banyak lulusan SMK Kejora konsisten naik selama lima tahun terakhir."
      },
      {
        "id": "D",
        "text": "Banyak lulusan SMA 2 Bintang tetap sama selama tiga tahun terakhir."
      },
      {
        "id": "E",
        "text": "Banyak lulusan ketiga sekolah di tahun 2023 menurun dibanding tahun sebelumnya."
      }
    ],
    "kunci": [
      "A",
      "D"
    ],
    "pembahasan": "<strong>Pembahasan Interpretasi Diagram Garis Lulusan Sekolah:</strong><br>\n1. <strong>Pernyataan A (Benar):</strong> Kurva hijau (SMA 1 Bintang) pada rentang tahun 2020 &rarr; 2021 &rarr; 2022 &rarr; 2023 &rarr; 2024 &rarr; 2025 menunjukkan garis yang selalu memiliki gradien positif (selalu bertambah).<br>\n2. <strong>Pernyataan B (Salah):</strong> Pada kurva SMA 1 Bintang (hijau), antara tahun 2018 ke 2019 grafik mengalami sedikit penurunan, sehingga tidak selalu bertambah untuk ketiga sekolah.<br>\n3. <strong>Pernyataan C (Salah):</strong> Lima tahun terakhir adalah rentang 2021&ndash;2025. Dari tahun 2022 ke 2023, kurva SMK Kejora (biru) justru mengalami penurunan, sehingga tidak konsisten naik.<br>\n4. <strong>Pernyataan D (Benar):</strong> Kurva merah (SMA 2 Bintang) pada tahun 2023, 2024, dan 2025 membentuk garis mendatar sempurna (jumlah lulusan konstan sama besar).<br>\n5. <strong>Pernyataan E (Salah):</strong> Pada tahun 2023, lulusan SMA 1 Bintang justru mengalami kenaikan.<br>\n<strong>Kunci Jawaban: A, D</strong>"
  },
  {
    "id": 22,
    "elemen": "Data dan Peluang",
    "subelemen": "Data",
    "indikator": "Menyelesaikan permasalahan kontekstual sehari-hari dengan menerapkan aturan pencacahan. (22)",
    "kode": "25MATDPLDAT22SU-000000-0181",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_26.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDi sebuah acara bazar yang diadakan oleh suatu sekolah, terdapat 5 stan berjajar yang masing-masing dikelola oleh pedagang yang berbeda (A, B, C, D, dan E).<br>\nDalam bazar tersebut, stan pedagang C ingin berada tepat di antara stan pedagang A dan pedagang D.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBanyak kemungkinan susunan atau penataan posisi stan sesuai keinginan pedagang C tersebut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "6 susunan"
      },
      {
        "id": "B",
        "text": "12 susunan"
      },
      {
        "id": "C",
        "text": "120 susunan"
      },
      {
        "id": "D",
        "text": "240 susunan"
      },
      {
        "id": "E",
        "text": "720 susunan"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Pembahasan Kaidah Pencacahan (Permutasi Berdampingan):</strong><br>\nPedagang C harus berada berdampingan di antara pedagang A dan pedagang D.<br>\n1. <strong>Kelompokkan A, C, D menjadi 1 blok kesatuan:</strong><br>\nSusunan di dalam blok yang memungkinkan C berada di antara A dan D adalah:<br>\n- \\( (A - C - D) \\)<br>\n- \\( (D - C - A) \\)<br>\nAda <strong>2 cara</strong> susunan internal dalam blok.<br><br>\n2. <strong>Hitung banyak permutasi seluruh elemen:</strong><br>\nElemen yang dipermutasikan adalah:<br>\n- Blok \\( (ACD) \\)<br>\n- Pedagang B<br>\n- Pedagang E<br>\nTerdapat 3 elemen, sehingga banyak susunannya adalah:<br>\n\\[ P = 3! = 3 \\times 2 \\times 1 = 6 \\text{ susunan} \\]<br><br>\n3. <strong>Banyak kemungkinan susunan total:</strong><br>\n\\[ \\text{Total} = 2 \\times 6 = 12 \\text{ susunan} \\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 23,
    "elemen": "Data dan Peluang",
    "subelemen": "Data",
    "indikator": "Menggunakan informasi ukuran pemusatan atau sebaran data untuk melengkapi kumpulan data. (23)",
    "kode": "25MATDPLDAT23SU-000000-2474",
    "tipe": "kategori",
    "img": "/tka/img/matematika-umum/soal_27.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan tabel distribusi data jumlah pengunjung perpustakaan Desa Sukamaju pada minggu ke-1 bulan Januari!\n</p>\n<div class=\"overflow-x-auto my-3\">\n  <table class=\"min-w-full text-xs text-center border border-slate-300\">\n    <thead class=\"bg-teal-100 font-bold text-teal-950\">\n      <tr>\n        <th class=\"p-2 border\">Minggu ke-1</th>\n        <th class=\"p-2 border\">Senin</th>\n        <th class=\"p-2 border\">Selasa</th>\n        <th class=\"p-2 border\">Rabu</th>\n        <th class=\"p-2 border\">Kamis</th>\n        <th class=\"p-2 border\">Jumat</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"p-2 border font-semibold bg-teal-50\">Jumlah Pengunjung</td>\n        <td class=\"p-2 border\">4</td>\n        <td class=\"p-2 border font-bold text-teal-800\">p</td>\n        <td class=\"p-2 border\">5</td>\n        <td class=\"p-2 border font-bold text-teal-800\">r</td>\n        <td class=\"p-2 border\">6</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada minggu ke-1 bulan Januari tersebut, diketahui informasi sebagai berikut:<br>\n1) Rata-rata pengunjung perpustakaan setiap hari adalah 6 orang,<br>\n2) Selalu ada minimal dua pengunjung perpustakaan namun tidak pernah melebihi 10 pengunjung pada setiap hari buka (Senin&ndash;Jumat), dan<br>\n3) Median dari data pada tabel adalah 6.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan Benar atau Salah pada setiap pernyataan berikut terkait jumlah pengunjung perpustakaan pada minggu ke-1 bulan Januari tersebut!\n</p>",
    "kategoriConfig": {
      "columns": [
        "Benar",
        "Salah"
      ],
      "rows": [
        {
          "id": "r1",
          "label": "Banyak pengunjung pada hari Selasa pasti selalu lebih banyak dibandingkan hari lain."
        },
        {
          "id": "r2",
          "label": "Banyak pengunjung pada hari Kamis pasti lebih dari 5 orang."
        },
        {
          "id": "r3",
          "label": "Banyak pengunjung pada hari Jumat dan Kamis mungkin saja sama."
        }
      ]
    },
    "kunci": {
      "r1": "Salah",
      "r2": "Benar",
      "r3": "Benar"
    },
    "pembahasan": "<strong>Pembahasan Analisis Statistik Rata-rata dan Median:</strong><br>\nKumpulan data 5 hari: \\( \\{4, 5, 6, p, r\\} \\).<br>\n1. <strong>Dari rata-rata:</strong><br>\n\\[ \\bar{x} = \\frac{4 + p + 5 + r + 6}{5} = 6 \\implies 15 + p + r = 30 \\implies p + r = 15 \\]<br><br>\n2. <strong>Dari median = 6:</strong><br>\nKarena banyak data \\( n = 5 \\) (ganjil), median adalah nilai data ke-3 setelah diurutkan.<br>\nData yang sudah diketahui adalah 4, 5, 6. Agar 6 berada tepat di posisi tengah, maka kedua nilai yang belum diketahui (\\(p\\) dan \\(r\\)) harus bernilai lebih besar atau sama dengan 6:<br>\n\\[ p \\ge 6 \\quad \\text{dan} \\quad r \\ge 6 \\]<br>\nDengan kendala \\( p + r = 15 \\) serta batas \\( 2 \\le p, r \\le 10 \\), pasangan nilai \\( (p, r) \\) yang mungkin adalah:<br>\n- \\( (6, 9) \\)<br>\n- \\( (7, 8) \\)<br>\n- \\( (8, 7) \\)<br>\n- \\( (9, 6) \\)<br><br>\n3. <strong>Analisis Pernyataan:</strong><br>\n- <strong>Pernyataan 1:</strong> Jika \\( p = 6 \\) dan \\( r = 9 \\), pengunjung Selasa (6) lebih sedikit dari Kamis (9). Jadi tidak pasti selalu lebih banyak &rarr; <strong>Salah</strong>.<br>\n- <strong>Pernyataan 2:</strong> Nilai \\( r \\in \\{6, 7, 8, 9\\} \\), semuanya \\( > 5 \\) orang &rarr; <strong>Benar</strong>.<br>\n- <strong>Pernyataan 3:</strong> Pengunjung Jumat = 6. Jika \\( r = 6 \\), maka pengunjung Kamis = 6 (sama dengan Jumat). Hal ini mungkin terjadi &rarr; <strong>Benar</strong>.<br><br>\n<strong>Kunci: r1: Salah, r2: Benar, r3: Benar</strong>"
  },
  {
    "id": 24,
    "elemen": "Data dan Peluang",
    "subelemen": "Peluang",
    "indikator": "Menggunakan berbagai informasi untuk menentukan peluang kejadian tunggal. (24)",
    "kode": "25MATDPLPLG24SU-000000-2356",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_28.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam rangka memperingati Tahun Baru Imlek, sebuah supermarket membuat kotak undian yang berisi hadiah untuk para pelanggannya. Terdapat 60 angpao yang dimasukkan ke dalam kotak tersebut. Hadiahnya terbagi dalam dua kategori, yaitu kupon belanja dan peralatan rumah tangga.<br>\nUntuk hadiah kupon belanja, terdapat 15 angpao berisi kupon senilai Rp25.000,00 dan 12 angpao berisi kupon senilai Rp50.000,00. Untuk hadiah peralatan rumah tangga, terdapat 10 angpao berisi set sendok-garpu, 8 angpao berisi pemanas air, dan sisanya angpao kosong.<br>\nRini menjadi orang pertama yang berkesempatan mengambil satu angpao secara acak dari kotak tersebut.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerapakah peluang Rini mengambil angpao yang kosong?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "\\( \\frac{1}{15} \\)"
      },
      {
        "id": "B",
        "text": "\\( \\frac{1}{5} \\)"
      },
      {
        "id": "C",
        "text": "\\( \\frac{1}{4} \\)"
      },
      {
        "id": "D",
        "text": "\\( \\frac{1}{3} \\)"
      },
      {
        "id": "E",
        "text": "\\( \\frac{5}{11} \\)"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Pembahasan Peluang Kejadian Tunggal:</strong><br>\n1. <strong>Hitung banyak angpao yang berisi hadiah:</strong><br>\n- Kupon Rp25.000,00: 15 angpao<br>\n- Kupon Rp50.000,00: 12 angpao<br>\n- Set sendok-garpu: 10 angpao<br>\n- Pemanas air: 8 angpao<br>\nTotal angpao berhadiah:<br>\n\\[ 15 + 12 + 10 + 8 = 45 \\text{ angpao} \\]<br><br>\n2. <strong>Hitung banyak angpao kosong:</strong><br>\nTotal seluruh angpao dalam kotak adalah \\( n(S) = 60 \\).<br>\nBanyak angpao kosong:<br>\n\\[ n(K) = 60 - 45 = 15 \\text{ angpao} \\]<br><br>\n3. <strong>Peluang terambil angpao kosong:</strong><br>\n\\[ P(K) = \\frac{n(K)}{n(S)} = \\frac{15}{60} = \\frac{1}{4} \\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 25,
    "elemen": "Data dan Peluang",
    "subelemen": "Peluang",
    "indikator": "Menerapkan konsep peluang kejadian majemuk dalam permasalahan kontekstual sehari-hari. (25)",
    "kode": "25MATDPLPLG25SU-000000-2386",
    "tipe": "pg",
    "img": "/tka/img/matematika-umum/soal_29.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah kantin sekolah mengadakan undian berhadiah. Di dalam kotak undian mula-mula terdapat:\n</p>\n<ul class=\"list-disc list-inside space-y-1 mb-3 text-slate-700\">\n  <li>6 kertas bertuliskan <strong>Minuman Gratis</strong></li>\n  <li>4 kertas bertuliskan <strong>Makanan Gratis</strong></li>\n  <li>5 kertas <strong>Kosong</strong></li>\n</ul>\n<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nHanya kertas yang kosong yang akan selalu dikembalikan lagi ke dalam kotak meskipun terambil berkali-kali. Ani akan mengambil satu buah kertas dari kotak undian. Ani adalah orang kelima yang mengambil kertas undian.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nKertas apa sajakah yang mungkin sudah terambil oleh orang-orang sebelumnya sehingga peluang Ani memperoleh minuman atau makanan adalah \\( \\frac{2}{3} \\)?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1 minuman gratis, 1 makanan gratis, dan 2 kertas kosong."
      },
      {
        "id": "B",
        "text": "2 makanan gratis dan 2 minuman gratis."
      },
      {
        "id": "C",
        "text": "2 minuman gratis dan 2 kertas kosong."
      },
      {
        "id": "D",
        "text": "4 kertas kosong."
      },
      {
        "id": "E",
        "text": "4 minuman gratis."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Pembahasan Peluang Bersyarat dengan Pengembalian Sebagian:</strong><br>\n1. <strong>Komposisi Awal Kotak Undian:</strong><br>\n- Kertas Berhadiah (makanan/minuman): \\( 6 + 4 = 10 \\) kertas<br>\n- Kertas Kosong: \\( 5 \\) kertas<br>\n- Total awal: \\( 10 + 5 = 15 \\) kertas.<br><br>\n2. <strong>Aturan Pengambilan:</strong><br>\n- Kertas berhadiah yang terambil <em>tidak dikembalikan</em>.<br>\n- Kertas kosong yang terambil <em>selalu dikembalikan</em>, sehingga jumlah kertas kosong di dalam kotak selalu tetap 5 lembar.<br><br>\n3. <strong>Peluang Ani pada Pengambilan Kelima:</strong><br>\nMisalkan dari 4 orang sebelum Ani, terambil sebanyak \\(k\\) lembar kertas berhadiah.<br>\nMaka saat giliran Ani:<br>\n- Sisa kertas berhadiah di kotak: \\( 10 - k \\)<br>\n- Sisa kertas kosong di kotak: tetap \\( 5 \\)<br>\n- Total kertas di dalam kotak: \\( (10 - k) + 5 = 15 - k \\)<br><br>\nDiketahui peluang Ani mendapat makanan atau minuman adalah \\( \\frac{2}{3} \\):<br>\n\\[ \\frac{10 - k}{15 - k} = \\frac{2}{3} \\]<br>\n\\[ 3(10 - k) = 2(15 - k) \\]<br>\n\\[ 30 - 3k = 30 - 2k \\implies k = 0 \\]<br><br>\nNilai \\( k = 0 \\) berarti tidak ada kertas berhadiah yang terambil oleh 4 orang sebelumnya. Dengan kata lain, keempat orang sebelum Ani semuanya mengambil <strong>4 kertas kosong</strong> (yang masing-masing langsung dikembalikan ke dalam kotak).<br>\n<strong>Kunci Jawaban: D</strong>"
  }
];

// Inisialisasi Kumpulan Paket Matematika Umum
if (typeof window !== 'undefined') {
  window.tkaMatematikaUmumPaket1Data = tkaMatematikaUmumPaket1Data;
  window.tkaMatematikaUmumPackages = window.tkaMatematikaUmumPackages || {};
  window.tkaMatematikaUmumPackages['paket1'] = {
    title: "Paket 1: Soal Resmi TKA Matematika Umum SMA 2025 (BPPP Kemendikbudristek)",
    shortTitle: "Paket 1 (Resmi 2025 • 25 Soal)",
    data: tkaMatematikaUmumPaket1Data
  };
}
