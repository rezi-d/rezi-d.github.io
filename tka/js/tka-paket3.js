// tka/js/tka-paket3.js
// Bank Data Lengkap 40 Soal TKA Kimia SMA Paket 3 (Prediksi Resmi BPPP / SNBT / UTBK 2025/2026)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan arsip Soal-soal TKA Mata Pilihan 2025 dengan formula KaTeX ilmiah & pembahasan komprehensif

const tkaPaket3Data = [
  {
    "id": 1,
    "elemen": "Struktur Atom & Sistem Periodik Unsur",
    "subelemen": "Konfigurasi Elektron & Letak Unsur",
    "indikator": "Menentukan konfigurasi elektron netral dan letak unsur pada tabel periodik dari ionnya.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nIon $X^{3+}$ memiliki konfigurasi elektron:\n$$X^{3+}: 1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^3$$\nKonfigurasi elektron atom netral $X$ dan letaknya dalam tabel periodik unsur adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "$1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^6$; golongan VIA, periode 3"
      },
      {
        "id": "B",
        "text": "$1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^6$; golongan VIB, periode 3"
      },
      {
        "id": "C",
        "text": "$1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^4\\ 4s^2$; golongan VIB, periode 4"
      },
      {
        "id": "D",
        "text": "$1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^5\\ 4s^1$; golongan VIB, periode 3"
      },
      {
        "id": "E",
        "text": "$1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^5\\ 4s^1$; golongan VIB, periode 4"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Analisis Konfigurasi Elektron & Letak Unsur:</strong><br>\n1. <strong>Menentukan Konfigurasi Atom Netral $X$:</strong><br>\nIon $X^{3+}$ terbentuk karena atom $X$ telah melepaskan 3 elektron (2 elektron dari kulit terluar $4s$ dan 1 elektron dari subkulit $3d$).<br>\nUntuk kembali ke bentuk atom netral $X$, tambahkan 3 elektron kembali:<br>\n$$X: 1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^4\\ 4s^2$$\n2. <strong>Aturan Kestabilan Setengah Penuh (Subkulit $d$):</strong><br>\nKonfigurasi $d^4\\ s^2$ tidak stabil dan mengalami eksitasi menjadi konfigurasi setengah penuh $d^5\\ s^1$ yang jauh lebih simetris dan stabil (seperti pada atom Kromium ${}^{24}\\text{Cr}$):<br>\n$$X: 1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^5\\ 4s^1$$\n3. <strong>Menentukan Golongan dan Periode:</strong><br>\n- Kulit terluar ($n$ terbesar) $= 4 \\rightarrow$ <strong>Periode 4</strong>.<br>\n- Elektron valensi pada $(n-1)d + ns = 5 + 1 = 6$ elektron pada orbital $d$ dan $s \\rightarrow$ <strong>Golongan VIB</strong>.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    "kode": "25KIM-PRED3-001"
  },
  {
    "id": 2,
    "elemen": "Struktur Atom & Sistem Periodik Unsur",
    "subelemen": "Sifat Keperiodikan Unsur",
    "indikator": "Menganalisis perbandingan jari-jari atom dalam satu golongan halogen.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan notasi tiga unsur halogen berikut:\n$${}_{17}\\text{Z},\\quad {}_{35}\\text{W},\\quad {}_{53}\\text{X}$$\nBagaimanakah urutan perbandingan jari-jari atom ketiga unsur tersebut jika diurutkan berdasarkan kenaikan nomor atomnya?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Jari-jari atom: $\\text{Z} > \\text{W} > \\text{X}$ karena muatan inti semakin besar."
      },
      {
        "id": "B",
        "text": "Jari-jari atom: $\\text{W} > \\text{X} > \\text{Z}$ karena jumlah elektron valensinya berbeda."
      },
      {
        "id": "C",
        "text": "Jari-jari atom: $\\text{Z} < \\text{W} < \\text{X}$ seiring bertambahnya jumlah kulit utama atom."
      },
      {
        "id": "D",
        "text": "Jari-jari atom: $\\text{X} < \\text{Z} < \\text{W}$ karena pengaruh gaya tarik inti yang semakin kuat."
      },
      {
        "id": "E",
        "text": "Jari-jari atom ketiganya identik karena berada dalam satu golongan yang sama (golongan VIIA)."
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Analisis Sifat Keperiodikan (Jari-Jari Atom):</strong><br>\n1. <strong>Konfigurasi Elektron Ketiga Unsur:</strong><br>\n- ${}_{17}\\text{Z}: [\\text{Ne}]\\ 3s^2\\ 3p^5$ (Kulit valensi $n = 3$, periode 3)<br>\n- ${}_{35}\\text{W}: [\\text{Ar}]\\ 3d^{10}\\ 4s^2\\ 4p^5$ (Kulit valensi $n = 4$, periode 4)<br>\n- ${}_{53}\\text{X}: [\\text{Kr}]\\ 4d^{10}\\ 5s^2\\ 5p^5$ (Kulit valensi $n = 5$, periode 5)<br><br>\n2. <strong>Tren Jari-Jari Atom dalam Satu Golongan:</strong><br>\nKetiga unsur berada dalam satu golongan yang sama, yaitu Golongan VIIA (Halogen). Dari atas ke bawah dalam satu golongan (${}_{17}\\text{Z} \\rightarrow {}_{35}\\text{W} \\rightarrow {}_{53}\\text{X}$), jumlah kulit elektron bertambah ($n = 3, 4, 5$). Akibatnya, jarak antara inti atom dengan elektron terluar semakin jauh, sehingga <strong>jari-jari atom semakin besar</strong>:<br>\n$$\\text{Jari-jari atom: } \\text{Z} < \\text{W} < \\text{X}$$\n<br><strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-PRED3-002"
  },
  {
    "id": 3,
    "elemen": "Ikatan Kimia & Struktur Molekul",
    "subelemen": "Kaidah Oktet & Pengecualian Oktet",
    "indikator": "Mengevaluasi kestabilan struktur Lewis molekul terhadap kaidah duplet dan oktet.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKaidah oktet dan duplet menjelaskan kestabilan atom melalui pembagian elektron menyerupai gas mulia. Namun, beberapa molekul kovalen stabil dapat mengalami penyimpangan (pengecualian) dari kaidah oktet, seperti spesies dengan elektron gasal (odd-electron) atau oktet berkembang (expanded octet).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah terkait struktur Lewis molekul-molekul kovalen!<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik Benar atau Salah pada setiap pernyataan berdasarkan prinsip ikatan kimia!</span>\n</p>",
    "items": [
      {
        "pernyataan": "Pada molekul gas nitrogen dioksida (NO₂), atom pusat N memiliki 7 elektron valensi di sekitarnya sehingga merupakan contoh molekul berelektron gasal yang menyimpang dari kaidah oktet.",
        "kunci": "Benar",
        "penjelasan": "Atom N memiliki 5 elektron valensi, berikatan dengan 2 atom O membentuk radikal bebas dengan 7 elektron di sekitar N (tidak memenuhi oktet)."
      },
      {
        "pernyataan": "Molekul fosforus pentaklorida (PCl₅) memenuhi kaidah oktet sempurna karena atom pusat P dikelilingi oleh tepat 8 elektron ikatan.",
        "kunci": "Salah",
        "penjelasan": "PCl5 memiliki 5 pasangan elektron ikatan (10 elektron di sekitar atom pusat P), sehingga merupakan contoh oktet berkembang (expanded octet)."
      },
      {
        "pernyataan": "Molekul boron trifluorida (BF₃) merupakan contoh molekul dengan oktet tidak lengkap karena atom pusat B hanya memiliki 6 elektron valensi di sekitarnya.",
        "kunci": "Benar",
        "penjelasan": "Boron (golongan IIIA) hanya memiliki 3 elektron valensi, berikatan tunggal dengan 3 atom F sehingga atom pusat B hanya dikelilingi 6 elektron."
      }
    ],
    "kunci": [
      "Benar",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Analisis Kaidah Oktet dan Pengecualiannya:</strong><br>\n- <strong>Pernyataan 1 (Benar):</strong> Pada struktur Lewis $\\text{NO}_2$, total elektron valensi $= 5 + (2 \\times 6) = 17$ elektron (ganjil). Atom pusat $\\text{N}$ hanya memiliki 7 elektron dan 1 elektron tidak berpasangan, sehingga menyimpang dari kaidah oktet.<br>\n- <strong>Pernyataan 2 (Salah):</strong> Pada molekul $\\text{PCl}_5$, atom $\\text{P}$ mengikat 5 atom $\\text{Cl}$, sehingga atom $\\text{P}$ dikelilingi oleh $5 \\times 2 = 10$ elektron. Ini merupakan fenomena <em>expanded octet</em> (oktet berkembang), bukan oktet sempurna.<br>\n- <strong>Pernyataan 3 (Benar):</strong> Pada $\\text{BF}_3$, atom $\\text{B}$ membentuk 3 ikatan kovalen tunggal dengan $\\text{F}$, sehingga total elektron di sekitar $\\text{B}$ adalah 6 elektron (oktet tidak lengkap / <em>incomplete octet</em>).<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    "kode": "25KIM-PRED3-003"
  },
  {
    "id": 4,
    "elemen": "Ikatan Kimia & Struktur Molekul",
    "subelemen": "Kepolaran Senyawa",
    "indikator": "Menentukan molekul kovalen paling polar berdasarkan selisih keelektronegatifan.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan tabel data keelektronegatifan beberapa unsur menurut skala Pauling berikut:\n</p>\n<div class=\"overflow-x-auto my-3\">\n<table class=\"min-w-[280px] text-xs border border-slate-300 mx-auto text-center\">\n  <thead class=\"bg-slate-100 font-semibold text-slate-700\">\n    <tr><th class=\"p-2 border\">Unsur</th><th class=\"p-2 border\">H</th><th class=\"p-2 border\">C</th><th class=\"p-2 border\">N</th><th class=\"p-2 border\">O</th><th class=\"p-2 border\">F</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"p-2 border font-medium\">Keelektronegatifan</td><td class=\"p-2 border\">2,1</td><td class=\"p-2 border\">2,5</td><td class=\"p-2 border\">3,0</td><td class=\"p-2 border\">3,5</td><td class=\"p-2 border\">4,0</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, ikatan kovalen manakah yang memiliki tingkat kepolaran paling tinggi?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Ikatan C—H dengan selisih keelektronegatifan 0,4"
      },
      {
        "id": "B",
        "text": "Ikatan H—F dengan selisih keelektronegatifan 1,9"
      },
      {
        "id": "C",
        "text": "Ikatan N—H dengan selisih keelektronegatifan 0,9"
      },
      {
        "id": "D",
        "text": "Ikatan O—H dengan selisih keelektronegatifan 1,4"
      },
      {
        "id": "E",
        "text": "Ikatan C—O dengan selisih keelektronegatifan 1,0"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Kepolaran Ikatan Kovalen:</strong><br>\nKepolaran ikatan ditentukan oleh besarnya <strong>selisih keelektronegatifan ($\\Delta \\text{EN}$)</strong> antara dua atom yang berikatan:<br>\n- $\\Delta \\text{EN}(\\text{C}-\\text{H}) = |2,5 - 2,1| = 0,4$<br>\n- $\\Delta \\text{EN}(\\text{N}-\\text{H}) = |3,0 - 2,1| = 0,9$<br>\n- $\\Delta \\text{EN}(\\text{C}-\\text{O}) = |3,5 - 2,5| = 1,0$<br>\n- $\\Delta \\text{EN}(\\text{O}-\\text{H}) = |3,5 - 2,1| = 1,4$<br>\n- $\\Delta \\text{EN}(\\text{H}-\\text{F}) = |4,0 - 2,1| = 1,9$<br><br>\nIkatan $\\text{H}-\\text{F}$ memiliki nilai $\\Delta \\text{EN}$ terbesar (1,9), sehingga polaritas ikatannya paling kuat dan menghasilkan momen dipol paling signifikan.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25KIM-PRED3-004"
  },
  {
    "id": 5,
    "elemen": "Kimia Organik & Biokimia",
    "subelemen": "Bioproses Enzimatis & Fermentasi",
    "indikator": "Menganalisis peran enzimatis kapang Rhizopus oryzae dalam peningkatan nilai gizi tempe.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam pembuatan tempe tradisional, biji kedelai difermentasi menggunakan inokulum kapang <em>Rhizopus oryzae</em> dan <em>Rhizopus oligosporus</em>. Selama masa inkubasi 24–48 jam, miselium putih tumbuh merata mengikat biji kedelai menjadi massa yang kompak dan padat. Proses biologis ini disertai dengan pelepasan panas, penurunan kadar asam fitat, serta hidrolisis makromolekul nutrisi.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah penjelasan kimiawi yang paling tepat mengenai alasan tempe memiliki nilai cerna dan ketersediaan hayati nutrisi yang jauh lebih tinggi dibandingkan kedelai mentah?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Fermentasi mengoksidasi seluruh lemak nabati menjadi senyawa hidrokarbon sederhana yang larut air."
      },
      {
        "id": "B",
        "text": "Enzim protease yang disekresikan kapang mendegradasi protein kompleks menjadi peptida pendek dan asam amino bebas."
      },
      {
        "id": "C",
        "text": "Kapang mengubah seluruh kandungan karbohidrat kedelai menjadi gas karbon dioksida dan etanol."
      },
      {
        "id": "D",
        "text": "Miselium kapang mengendapkan seluruh senyawa mineral sehingga tidak dapat diserap tubuh."
      },
      {
        "id": "E",
        "text": "Reaksi fermentasi merombak dinding selulosa menjadi polimer plastik yang tahan asam lambung."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Analisis Kimiawi Proses Fermentasi Tempe:</strong><br>\n1. <strong>Aktivitas Enzim Protease:</strong> Kapang <em>Rhizopus oryzae</em> mensekresikan enzim protease ekstraseluler. Enzim ini menghidrolisis ikatan peptida pada protein globulin kedelai yang kompleks dan sukar larut menjadi oligopeptida pendek serta asam amino bebas yang mudah diserap oleh saluran pencernaan manusia.<br>\n2. <strong>Reduksi Senyawa Antinutrisi:</strong> Fermentasi juga mengaktifkan enzim fitase yang mengurai asam fitat (senyawa pengikat mineral $\\text{Fe}$ dan $\\text{Ca}$), sehingga bioavailabilitas zat besi dan mineral penting lainnya melonjak drastis.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25KIM-PRED3-005"
  },
  {
    "id": 6,
    "elemen": "Termokimia & Energi Alternatif",
    "subelemen": "Nilai Kalor Bahan Bakar",
    "indikator": "Mengevaluasi faktor kimia penentu efisiensi nilai kalor pembakaran briket biomassa.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBriket arang biomassa dari limbah tempurung kelapa dan serbuk kayu gergaji menjadi salah satu alternatif energi terbarukan yang ramah lingkungan. Dalam proses pirolisis (karbonisasi), biomassa dipanaskan pada suhu $400-600^\\circ\\text{C}$ dalam kondisi minim oksigen untuk mengeliminasi senyawa volatil dan uap air, menghasilkan arang dengan kadar karbon terikat (fixed carbon) yang tinggi.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nMengapa briket arang hasil pirolisis menghasilkan suhu pembakaran yang lebih stabil dan menghasilkan lebih sedikit asap dibandingkan kayu mentah?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Karena kadar air dan zat volatil (senyawa organik rantai pendek) telah direduksi secara signifikan selama karbonisasi."
      },
      {
        "id": "B",
        "text": "Karena proses karbonisasi menambahkan unsur nitrogen dalam jumlah besar ke dalam kisi arang."
      },
      {
        "id": "C",
        "text": "Karena briket arang tidak membutuhkan oksigen sama sekali untuk melangsungkan reaksi pembakaran."
      },
      {
        "id": "D",
        "text": "Karena ikatan kovalen karbon pada briket diubah sepenuhnya menjadi ikatan logam yang konduktif."
      },
      {
        "id": "E",
        "text": "Karena briket melepaskan gas hidrogen sulfida yang mempercepat laju nyala api."
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Termokimia Pembakaran Biomassa:</strong><br>\n1. <strong>Penyebab Asap pada Kayu Mentah:</strong> Kayu mentah memiliki kadar air tinggi dan zat volatil (terpen, asam asetat, tar) yang belum terurai. Saat dibakar, zat volatil mengalami pembakaran tidak sempurna menghasilkan jelaga dan asap pekat.<br>\n2. <strong>Efisiensi Briket Arang:</strong> Pirolisis membuang uap air dan zat volatil tersebut, meninggalkan residu berupa <em>fixed carbon</em> padat murni (C > 75%). Ketika briket dibakar, karbon padat bereaksi sempurna dengan oksigen ($C(s) + O_2(g) \\rightarrow CO_2(g)$) dengan nilai kalor tinggi ($> 6.000\\text{ kal/g}$), nyala bersih tanpa asap, dan bara stabil.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-PRED3-006"
  },
  {
    "id": 7,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Tata Nama Senyawa Kimia",
    "indikator": "Mengidentifikasi pasangan rumus kimia dan nama senyawa anorganik yang sesuai IUPAC.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan daftar rumus kimia dan penamaannya berikut ini:\n<br>\n(1) $\\text{Fe}_2\\text{O}_3$ : Besi(III) oksida<br>\n(2) $\\text{N}_2\\text{O}_5$ : Dinitrogen pentaoksida<br>\n(3) $\\text{CuSO}_4$ : Tembaga(I) sulfat<br>\n(4) $\\text{Al}_2(\\text{SO}_4)_3$ : Aluminium sulfat<br>\n(5) $\\text{PCl}_3$ : Monofosforus triklorida\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah pasangan rumus senyawa dan nama senyawa yang BENAR menurut aturan IUPAC?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Pilihan jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "(1) Fe₂O₃ diberi nama Besi(III) oksida"
      },
      {
        "id": "B",
        "text": "(2) N₂O₅ diberi nama Dinitrogen pentaoksida"
      },
      {
        "id": "C",
        "text": "(3) CuSO₄ diberi nama Tembaga(I) sulfat"
      },
      {
        "id": "D",
        "text": "(4) Al₂(SO₄)₃ diberi nama Aluminium sulfat"
      },
      {
        "id": "E",
        "text": "(5) PCl₃ diberi nama Monofosforus triklorida"
      }
    ],
    "kunci": [
      "A",
      "B",
      "D"
    ],
    "pembahasan": "<strong>Analisis Tata Nama Senyawa Anorganik (IUPAC):</strong><br>\n- <strong>(1) Benar:</strong> $\\text{Fe}_2\\text{O}_3 \\rightarrow \\text{Fe}^{3+}$ dan $\\text{O}^{2-}$, biloks Fe $= +3$, dinamakan <strong>Besi(III) oksida</strong>.<br>\n- <strong>(2) Benar:</strong> $\\text{N}_2\\text{O}_5$ adalah senyawa kovalen nonlogam-nonlogam, dinamakan <strong>Dinitrogen pentaoksida</strong>.<br>\n- <strong>(3) Salah:</strong> $\\text{CuSO}_4 \\rightarrow \\text{Cu}^{2+} + \\text{SO}_4^{2-}$, biloks Cu $= +2$, nama yang tepat adalah <strong>Tembaga(II) sulfat</strong> (bukan Tembaga(I)).<br>\n- <strong>(4) Benar:</strong> $\\text{Al}_2(\\text{SO}_4)_3$ tersusun atas kation $\\text{Al}^{3+}$ (hanya memiliki 1 biloks $+3$) dan anion sulfat, dinamakan <strong>Aluminium sulfat</strong> (tanpa angka romawi).<br>\n- <strong>(5) Salah:</strong> Awalan 'mono-' tidak digunakan untuk unsur pertama pada senyawa kovalen biner. Nama yang tepat adalah <strong>Fosforus triklorida</strong>.<br><br>\n<strong>Kunci Jawaban: A, B, D</strong>",
    "kode": "25KIM-PRED3-007"
  },
  {
    "id": 8,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Hukum-Hukum Dasar Kimia",
    "indikator": "Menganalisis perbandingan volume gas pada reaksi pembakaran etuna berdasarkan hukum Gay-Lussac.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nReaksi pembakaran sempurna gas asetilena (etuna) berlangsung pada suhu dan tekanan konstan menurut persamaan reaksi setara berikut:\n$$2\\text{C}_2\\text{H}_2(g) + 5\\text{O}_2(g) \\rightarrow 4\\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$$\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah berdasarkan hukum perbandingan volume Gay-Lussac dan konsep stoikiometri gas!<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik Benar atau Salah pada setiap pernyataan berikut!</span>\n</p>",
    "items": [
      {
        "pernyataan": "Untuk membakar habis 10 liter gas asetilena (C₂H₂) diperlukan tepat 25 liter gas oksigen (O₂) pada suhu dan tekanan yang sama.",
        "kunci": "Benar",
        "penjelasan": "Perbandingan volume C2H2 : O2 = 2 : 5. Maka volume O2 = (5/2) * 10 L = 25 Liter."
      },
      {
        "pernyataan": "Pembakaran 2 liter gas asetilena akan menghasilkan 8 liter gas karbon dioksida (CO₂).",
        "kunci": "Salah",
        "penjelasan": "Perbandingan C2H2 : CO2 = 2 : 4 = 1 : 2. Jadi 2 L C2H2 menghasilkan 2 * 2 L = 4 L CO2 (bukan 8 L)."
      },
      {
        "pernyataan": "Pada suhu dan tekanan yang sama, perbandingan mol zat-zat yang bereaksi dan hasil reaksi berbanding lurus dengan perbandingan koefisien reaksinya.",
        "kunci": "Benar",
        "penjelasan": "Sesuai Hipotesis Avogadro, pada P dan T sama, gas-gas dengan volume sama mengandung jumlah molekul/mol yang sama (V ~ n ~ koefisien)."
      }
    ],
    "kunci": [
      "Benar",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Hukum Perbandingan Volume (Gay-Lussac & Avogadro):</strong><br>\nPada suhu dan tekanan yang sama, volume gas-gas yang bereaksi dan gas hasil reaksi berbanding sebagai bilangan bulat dan sederhana sesuai koefisien reaksinya:<br>\n$$\\text{Perbandingan Volume: } \\text{C}_2\\text{H}_2 : \\text{O}_2 : \\text{CO}_2 : \\text{H}_2\\text{O} = 2 : 5 : 4 : 2$$<br>\n- <strong>Pernyataan 1 (Benar):</strong> $V_{\\text{O}_2} = \\frac{5}{2} \\times 10\\text{ L} = 25\\text{ L}$.<br>\n- <strong>Pernyataan 2 (Salah):</strong> $V_{\\text{CO}_2} = \\frac{4}{2} \\times 2\\text{ L} = 4\\text{ L}$ (bukan 8 L).<br>\n- <strong>Pernyataan 3 (Benar):</strong> Menurut hukum Avogadro, perbandingan koefisien reaksi gas mencerminkan perbandingan volume sekaligus perbandingan molnya.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    "kode": "25KIM-PRED3-008"
  },
  {
    "id": 9,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Perhitungan Stoikiometri Gas",
    "indikator": "Menghitung volume gas hidrogen yang diperlukan untuk memproduksi gas amonia.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGas amonia ($\\text{NH}_3$) diproduksi melalui proses Haber-Bosch menurut persamaan reaksi (belum setara):\n$$\\text{N}_2(g) + \\text{H}_2(g) \\rightarrow \\text{NH}_3(g)$$\nJika reaksi diukur pada suhu dan tekanan tetap, volume gas hidrogen ($\\text{H}_2$) yang diperlukan untuk menghasilkan $12\\text{ liter}$ gas amonia adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "18 liter"
      },
      {
        "id": "B",
        "text": "12 liter"
      },
      {
        "id": "C",
        "text": "24 liter"
      },
      {
        "id": "D",
        "text": "6 liter"
      },
      {
        "id": "E",
        "text": "36 liter"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Langkah Perhitungan Stoikiometri Gas:</strong><br>\n1. <strong>Menyetarakan Persamaan Reaksi:</strong><br>\n$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$$<br>\n2. <strong>Perbandingan Koefisien Volume (Gay-Lussac):</strong><br>\n$$V_{\\text{H}_2} = \\frac{\\text{Koefisien } \\text{H}_2}{\\text{Koefisien } \\text{NH}_3} \\times V_{\\text{NH}_3}$$\n$$V_{\\text{H}_2} = \\frac{3}{2} \\times 12\\text{ liter} = 18\\text{ liter}$$\n<br><strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-PRED3-009"
  },
  {
    "id": 10,
    "elemen": "Larutan & Kimia Fisika",
    "subelemen": "Daya Hantar Listrik Larutan",
    "indikator": "Mengidentifikasi pasangan larutan elektrolit kuat, lemah, dan nonelektrolit.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBerikut adalah data pengamatan uji daya hantar listrik terhadap 5 sampel larutan berkonsentrasi sama ($0,1\\text{ M}$):\n</p>\n<div class=\"overflow-x-auto my-3\">\n<table class=\"min-w-[360px] text-xs border border-slate-300 mx-auto text-center\">\n  <thead class=\"bg-slate-100 font-semibold text-slate-700\">\n    <tr><th class=\"p-2 border\">Larutan</th><th class=\"p-2 border\">Zat Terlarut</th><th class=\"p-2 border\">Nyala Lampu</th><th class=\"p-2 border\">Gelembung Gas pada Elektroda</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"p-2 border\">P</td><td class=\"p-2 border\">NaCl</td><td class=\"p-2 border text-emerald-700 font-bold\">Terang</td><td class=\"p-2 border\">Banyak</td></tr>\n    <tr><td class=\"p-2 border\">Q</td><td class=\"p-2 border\">CH₃COOH</td><td class=\"p-2 border text-amber-700 font-bold\">Redup</td><td class=\"p-2 border\">Sedikit</td></tr>\n    <tr><td class=\"p-2 border\">R</td><td class=\"p-2 border\">C₁₂H₂₂O₁₁ (Sukrosa)</td><td class=\"p-2 border text-rose-700 font-bold\">Padam</td><td class=\"p-2 border\">Tidak ada</td></tr>\n    <tr><td class=\"p-2 border\">S</td><td class=\"p-2 border\">H₂SO₄</td><td class=\"p-2 border text-emerald-700 font-bold\">Terang</td><td class=\"p-2 border\">Banyak</td></tr>\n    <tr><td class=\"p-2 border\">T</td><td class=\"p-2 border\">CO(NH₂)₂ (Urea)</td><td class=\"p-2 border text-rose-700 font-bold\">Padam</td><td class=\"p-2 border\">Tidak ada</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data eksperimen di atas, manakah kesimpulan yang BENAR mengenai sifat larutan?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Larutan P (NaCl) dan S (H₂SO₄) merupakan larutan elektrolit kuat karena terionisasi sempurna (α = 1)."
      },
      {
        "id": "B",
        "text": "Larutan Q (CH₃COOH) merupakan elektrolit lemah karena hanya terionisasi sebagian (0 < α < 1)."
      },
      {
        "id": "C",
        "text": "Larutan R (sukrosa) dan T (urea) tergolong nonelektrolit karena dalam air tidak menghasilkan ion bebas (α = 0)."
      },
      {
        "id": "D",
        "text": "Daya hantar listrik larutan Q lebih besar daripada larutan P karena Q berupa senyawa organik."
      },
      {
        "id": "E",
        "text": "Seluruh larutan di atas dapat menghantarkan arus listrik karena berwujud cair."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C"
    ],
    "pembahasan": "<strong>Klasifikasi Daya Hantar Listrik Larutan:</strong><br>\n- <strong>Elektrolit Kuat (P & S):</strong> $\\text{NaCl}$ (garam ionik) dan $\\text{H}_2\\text{SO}_4$ (asam kuat) terurai 100% menjadi ion-ion bebas ($\\alpha = 1$). Banyaknya ion bebas menyebabkan lampu menyala terang dan timbul gelembung gas melimpah di elektroda. (<strong>Opsi A Benar</strong>)<br>\n- <strong>Elektrolit Lemah (Q):</strong> $\\text{CH}_3\\text{COOH}$ hanya terionisasi sebagian ($0 < \\alpha < 1$). Jumlah ion sedikit membuat lampu redup dan gelembung sedikit. (<strong>Opsi B Benar</strong>)<br>\n- <strong>Nonelektrolit (R & T):</strong> Sukrosa dan urea adalah molekul kovalen polar yang larut dalam air dalam bentuk molekul netral tanpa ionisasi ($\\alpha = 0$), sehingga lampu padam dan tidak ada gelembung gas. (<strong>Opsi C Benar</strong>)<br>\n- Opsi D salah (P memiliki daya hantar jauh lebih besar dari Q). Opsi E salah (nonelektrolit tidak menghantarkan arus).<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>",
    "kode": "25KIM-PRED3-010"
  },
  {
    "id": 11,
    "elemen": "Larutan Asam-Basa",
    "subelemen": "Asam Poliprotik & Nilai Ka",
    "indikator": "Menganalisis ionisasi bertahap asam fosfat (H3PO4) dan konsentrasi spesies dominan.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAsam fosfat ($\\text{H}_3\\text{PO}_4$) merupakan asam lemah poliprotik yang mengalami ionisasi bertahap dalam air:\n$$\\text{H}_3\\text{PO}_4(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{H}_2\\text{PO}_4^-(aq) \\quad K_{a1} = 7{,}5 \\times 10^{-3}$$\n$$\\text{H}_2\\text{PO}_4^-(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{HPO}_4^{2-}(aq) \\quad K_{a2} = 6{,}2 \\times 10^{-8}$$\n$$\\text{HPO}_4^{2-}(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{PO}_4^{3-}(aq) \\quad K_{a3} = 4{,}8 \\times 10^{-13}$$\nManakah pernyataan yang paling tepat mengenai konsentrasi ion-ion dalam larutan $\\text{H}_3\\text{PO}_4\\ 0{,}1\\text{ M}$?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Konsentrasi ion PO₄³⁻ lebih besar daripada konsentrasi H₂PO₄⁻."
      },
      {
        "id": "B",
        "text": "Ketiga tahap ionisasi memberikan kontribusi yang sama besar terhadap pH larutan."
      },
      {
        "id": "C",
        "text": "Tahap ionisasi ketiga berlangsung paling dominan karena menghasilkan muatan ion terbesar."
      },
      {
        "id": "D",
        "text": "Konsentrasi ion H⁺ dalam larutan praktis hanya ditentukan oleh tahap ionisasi pertama (Ka1)."
      },
      {
        "id": "E",
        "text": "Nilai Ka3 yang sangat kecil membuktikan bahwa asam fosfat adalah asam kuat pada tahap ketiga."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Ionisasi Asam Lemah Poliprotik:</strong><br>\nPada asam poliprotik, nilai tetapan ionisasi berturut-turut mengalami penurunan drastis ($K_{a1} \\gg K_{a2} \\gg K_{a3}$):<br>\n$$7{,}5 \\times 10^{-3} \\gg 6{,}2 \\times 10^{-8} \\gg 4{,}8 \\times 10^{-13}$$<br>\nHal ini terjadi karena pelepasan proton berikutnya dari ion bermuatan negatif memerlukan energi yang jauh lebih besar akibat gaya tarik elektrostatik inti.<br>\nKarena $K_{a1}$ bernilai ribuan kali lebih besar daripada $K_{a2}$, maka praktis seluruh ion $\\text{H}^+$ yang menentukan keasaman (pH) larutan dihasilkan dari <strong>tahap ionisasi pertama ($K_{a1}$)</strong>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-PRED3-011"
  },
  {
    "id": 12,
    "elemen": "Larutan Asam-Basa",
    "subelemen": "Titrasi Asam-Basa",
    "indikator": "Menghitung konsentrasi larutan asam klorida (HCl) dari data titrasi dengan NaOH.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak $25\\text{ mL}$ sampel larutan $\\text{HCl}$ dititrasi dengan larutan standar $\\text{NaOH}\\ 0{,}1\\text{ M}$ menggunakan indikator fenolftalein (PP). Diperoleh data volume titrasi sebagai berikut:\n</p>\n<div class=\"overflow-x-auto my-2 text-center text-xs\">\n  <table class=\"min-w-[260px] border border-slate-300 mx-auto\">\n    <thead class=\"bg-slate-100 font-semibold\"><tr><th class=\"p-1.5 border\">Percobaan</th><th class=\"p-1.5 border\">Volume HCl</th><th class=\"p-1.5 border\">Volume NaOH</th></tr></thead>\n    <tbody>\n      <tr><td class=\"p-1 border\">1</td><td class=\"p-1 border\">25 mL</td><td class=\"p-1 border\">20,2 mL</td></tr>\n      <tr><td class=\"p-1 border\">2</td><td class=\"p-1 border\">25 mL</td><td class=\"p-1 border\">19,8 mL</td></tr>\n      <tr><td class=\"p-1 border\">3</td><td class=\"p-1 border\">25 mL</td><td class=\"p-1 border\">20,0 mL</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, konsentrasi larutan $\\text{HCl}$ yang dititrasi adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "0,04 M"
      },
      {
        "id": "B",
        "text": "0,05 M"
      },
      {
        "id": "C",
        "text": "0,06 M"
      },
      {
        "id": "D",
        "text": "0,07 M"
      },
      {
        "id": "E",
        "text": "0,08 M"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Perhitungan Konsentrasi pada Titrasi Asam Basa:</strong><br>\n1. <strong>Volume Rata-Rata NaOH:</strong><br>\n$$V_{\\text{NaOH}} = \\frac{20{,}2 + 19{,}8 + 20{,}0}{3} = 20{,}0\\text{ mL}$$<br>\n2. <strong>Rumus Titrasi Netralisasi:</strong><br>\n$$V_a \\times M_a \\times n_a = V_b \\times M_b \\times n_b$$\nDi mana valensi asam $\\text{HCl}$ ($n_a$) $= 1$, dan valensi basa $\\text{NaOH}$ ($n_b$) $= 1$.<br>\n$$25\\text{ mL} \\times M_a \\times 1 = 20\\text{ mL} \\times 0{,}1\\text{ M} \\times 1$$\n$$M_a = \\frac{2{,}0}{25} = 0{,}08\\text{ M}$$\n<br><strong>Kunci Jawaban: E</strong>",
    "kode": "25KIM-PRED3-012"
  },
  {
    "id": 13,
    "elemen": "Kimia Dasar & Stoikiometri",
    "subelemen": "Penyetaraan Reaksi Kimia",
    "indikator": "Menentukan perbandingan volume gas pada pembakaran sempurna metana.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPersamaan reaksi pembakaran gas metana (belum setara):\n$$\\text{CH}_4(g) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + \\text{H}_2\\text{O}(g)$$\nJika $5\\text{ liter}$ gas metana dibakar sempurna pada kondisi suhu dan tekanan yang sama, perbandingan volume gas $\\text{O}_2$ yang diperlukan dan volume gas $\\text{CO}_2$ yang dihasilkan adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1 : 1"
      },
      {
        "id": "B",
        "text": "1 : 2"
      },
      {
        "id": "C",
        "text": "2 : 1"
      },
      {
        "id": "D",
        "text": "3 : 2"
      },
      {
        "id": "E",
        "text": "4 : 1"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Penyetaraan Reaksi Pembakaran Hidrokarbon:</strong><br>\n1. <strong>Menyetarakan Reaksi:</strong><br>\n$$\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$$<br>\n2. <strong>Perbandingan Volume Gas (Gay-Lussac):</strong><br>\nPerbandingan koefisien $\\text{O}_2 : \\text{CO}_2 = 2 : 1$.<br>\nUntuk $5\\text{ L } \\text{CH}_4$:<br>\n- $V_{\\text{O}_2} = 2 \\times 5\\text{ L} = 10\\text{ L}$<br>\n- $V_{\\text{CO}_2} = 1 \\times 5\\text{ L} = 5\\text{ L}$<br>\nPerbandingan volume $\\text{O}_2 : \\text{CO}_2 = 10\\text{ L} : 5\\text{ L} = 2 : 1$.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-PRED3-013"
  },
  {
    "id": 14,
    "elemen": "Larutan Asam-Basa",
    "subelemen": "Larutan Penyangga (Buffer)",
    "indikator": "Mengidentifikasi pasangan spesi kimia yang dapat membentuk larutan penyangga asam atau basa.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBerikut adalah daftar spesi kimia yang tersedia di laboratorium:\n<br>\n(1) $\\text{NH}_3(aq)$ dan $\\text{NH}_4\\text{Cl}(aq)$<br>\n(2) $\\text{H}_2\\text{CO}_3(aq)$ dan $\\text{NaHCO}_3(aq)$<br>\n(3) $\\text{HCl}(aq)$ dan $\\text{NaCl}(aq)$<br>\n(4) $\\text{CH}_3\\text{COOH}(aq)$ dan $\\text{CH}_3\\text{COONa}(aq)$<br>\n(5) $\\text{NaOH}(aq)$ dan $\\text{NaCl}(aq)$\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPasangan spesi kimia manakah yang dapat membentuk sistem larutan penyangga (buffer)?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Pilihan jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Pasangan (1): NH₃ dan NH₄Cl (Penyangga basa)"
      },
      {
        "id": "B",
        "text": "Pasangan (2): H₂CO₃ dan NaHCO₃ (Penyangga asam dalam darah)"
      },
      {
        "id": "C",
        "text": "Pasangan (3): HCl dan NaCl"
      },
      {
        "id": "D",
        "text": "Pasangan (4): CH₃COOH dan CH₃COONa (Penyangga asam)"
      },
      {
        "id": "E",
        "text": "Pasangan (5): NaOH dan NaCl"
      }
    ],
    "kunci": [
      "A",
      "B",
      "D"
    ],
    "pembahasan": "<strong>Prinsip Pembentukan Larutan Penyangga:</strong><br>\nSistem buffer hanya terbentuk dari:<br>\n1. <strong>Asam lemah + Basa konjugasinya (garamnya):</strong><br>\n- $\\text{H}_2\\text{CO}_3$ (asam lemah) + $\\text{HCO}_3^-$ dari $\\text{NaHCO}_3$ (buffer karbonat darah). (<strong>Opsi B Benar</strong>)<br>\n- $\\text{CH}_3\\text{COOH}$ (asam lemah) + $\\text{CH}_3\\text{COO}^-$ dari $\\text{CH}_3\\text{COONa}$. (<strong>Opsi D Benar</strong>)<br>\n2. <strong>Basa lemah + Asam konjugasinya (garamnya):</strong><br>\n- $\\text{NH}_3$ (basa lemah) + $\\text{NH}_4^+$ dari $\\text{NH}_4\\text{Cl}$. (<strong>Opsi A Benar</strong>)<br>\n- Pasangan (3) dan (5) terdiri dari asam kuat ($\\text{HCl}$) dan basa kuat ($\\text{NaOH}$) yang tidak dapat membentuk sistem penyangga.<br><br>\n<strong>Kunci Jawaban: A, B, D</strong>",
    "kode": "25KIM-PRED3-014"
  },
  {
    "id": 15,
    "elemen": "Larutan Asam-Basa",
    "subelemen": "Hidrolisis Garam",
    "indikator": "Mengevaluasi sifat keasaman dan reaksi hidrolisis garam amonium klorida (NH4Cl).",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nReaksi netralisasi antara $50\\text{ mL } \\text{NH}_3\\ 0{,}1\\text{ M}$ (basa lemah, $K_b = 10^{-5}$) dengan $50\\text{ mL } \\text{HCl}\\ 0{,}1\\text{ M}$ (asam kuat) menghasilkan larutan garam amonium klorida ($\\text{NH}_4\\text{Cl}$).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah terkait sifat larutan garam tersebut!<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik Benar atau Salah pada setiap pernyataan berikut!</span>\n</p>",
    "items": [
      {
        "pernyataan": "Garam NH₄Cl mengalami hidrolisis parsial (sebagian) karena kation NH₄⁺ bereaksi dengan air menghasilkan ion H₃O⁺.",
        "kunci": "Benar",
        "penjelasan": "Kation NH4+ berasal dari basa lemah NH3 sehingga terhidrolisis: NH4+ + H2O <=> NH3 + H3O+."
      },
      {
        "pernyataan": "Larutan garam NH₄Cl yang terbentuk bersifat asam dengan nilai pH < 7 dan mengubah warna lakmus biru menjadi merah.",
        "kunci": "Benar",
        "penjelasan": "Karena ion H+ dilepaskan dari hidrolisis kation asam konjugasi, larutan bersifat asam (pH = 5)."
      },
      {
        "pernyataan": "Anion Cl⁻ turut mengalami hidrolisis dalam air menghasilkan asam klorida dan ion OH⁻.",
        "kunci": "Salah",
        "penjelasan": "Anion Cl- berasal dari asam kuat HCl sehingga tidak bereaksi dengan air (tidak terhidrolisis)."
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Analisis Hidrolisis Garam Asam (NH₄Cl):</strong><br>\n1. <strong>Reaksi Ionisasi Garam:</strong> $\\text{NH}_4\\text{Cl}(aq) \\rightarrow \\text{NH}_4^+(aq) + \\text{Cl}^-(aq)$<br>\n- Kation $\\text{NH}_4^+$ berasal dari basa lemah, sehingga mengalami hidrolisis kationik:<br>\n$$\\text{NH}_4^+(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NH}_3(aq) + \\text{H}_3\\text{O}^+(aq)$$\nMenghasilkan ion $\\text{H}^+$ yang menyebabkan larutan bersifat <strong>asam ($\\text{pH} < 7$)</strong> dan memerahkan kertas lakmus biru. (<strong>Pernyataan 1 & 2 Benar</strong>)<br>\n- Anion $\\text{Cl}^-$ berasal dari asam kuat $\\text{HCl}$, memiliki basa konjugasi yang sangat lemah sehingga <strong>tidak mengalami hidrolisis</strong>. (<strong>Pernyataan 3 Salah</strong>)<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    "kode": "25KIM-PRED3-015"
  },
  {
    "id": 16,
    "elemen": "Larutan & Kimia Fisika",
    "subelemen": "Kelarutan & Hasil Kali Kelarutan (Ksp)",
    "indikator": "Menganalisis terjadinya endapan berdasarkan perbandingan nilai Qsp dan Ksp.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak $10\\text{ mL}$ larutan $\\text{KCl } 0{,}4\\text{ M}$ dicampurkan ke dalam $10\\text{ mL}$ larutan $\\text{Pb}(\text{NO}_3)_2\\ 0{,}1\\text{ M}$. Jika diketahui nilai tetapan hasil kali kelarutan $K_{sp}\\ \\text{PbCl}_2 = 1{,}6 \\times 10^{-5}$, peristiwa kimia apakah yang terjadi pada campuran tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Campuran belum jenuh dan tidak terbentuk endapan karena Qsp < Ksp."
      },
      {
        "id": "B",
        "text": "Campuran tepat jenuh dan belum terbentuk endapan karena Qsp = Ksp."
      },
      {
        "id": "C",
        "text": "Terbentuk endapan Pb(NO₃)₂ karena garam nitrat sukar larut."
      },
      {
        "id": "D",
        "text": "Terbentuk endapan PbCl₂ karena nilai Qsp > Ksp."
      },
      {
        "id": "E",
        "text": "Tidak terbentuk endapan karena KCl bereaksi membentuk gas klorin."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Analisis Pengendapan Berdasarkan Nilai $Q_{sp}$:</strong><br>\n1. <strong>Konsentrasi Ion Setelah Pencampuran ($V_{\\text{total}} = 20\\text{ mL}$):</strong><br>\n$$[\\text{Pb}^{2+}] = \\frac{10\\text{ mL} \\times 0{,}1\\text{ M}}{20\\text{ mL}} = 0{,}05\\text{ M} = 5 \\times 10^{-2}\\text{ M}$$\n$$[\\text{Cl}^-] = \\frac{10\\text{ mL} \\times 0{,}4\\text{ M}}{20\\text{ mL}} = 0{,}2\\text{ M} = 2 \\times 10^{-1}\\text{ M}$$\n2. <strong>Menghitung Kuosien Reaksi ($Q_{sp}$):</strong><br>\n$$\\text{PbCl}_2(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + 2\\text{Cl}^-(aq)$$\n$$Q_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^-]^2 = (5 \\times 10^{-2})(0{,}2)^2 = (5 \\times 10^{-2})(4 \\times 10^{-2}) = 2 \\times 10^{-3}$$\n3. <strong>Perbandingan dengan $K_{sp}$:</strong><br>\n$$Q_{sp}\\ (2 \\times 10^{-3}) > K_{sp}\\ (1{,}6 \\times 10^{-5})$$\nKarena $Q_{sp} > K_{sp}$, kondisi larutan telah lewat jenuh dan <strong>terbentuk endapan $\\text{PbCl}_2$</strong>.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-PRED3-016"
  },
  {
    "id": 17,
    "elemen": "Kimia Koloid & Material",
    "subelemen": "Sistem Koloid & Nanoteknologi",
    "indikator": "Menganalisis sifat optik nanopartikel TiO2 pada sediaan sunscreen.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPartikel titanium dioksida ($\\text{TiO}_2$) berukuran nano ($20-50\\text{ nm}$) secara luas digunakan dalam formulasi tabir surya (<em>sunscreen</em>) modern. Partikel $\\text{TiO}_2$ konvensional (ukuran mikro) menghasilkan lapisan putih tebal di kulit (<em>white cast</em>), sedangkan sediaan nanopartikel tampak transparan tanpa mengurangi daya proteksinya.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nMengapa suspensi nanopartikel $\\text{TiO}_2$ tampak bening transparan di kulit namun tetap efektif memblokir radiasi sinar ultraviolet (UV)?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Karena nanopartikel mengubah sinar UV menjadi gelombang inframerah yang menghangatkan kulit."
      },
      {
        "id": "B",
        "text": "Karena ukuran partikel yang jauh lebih kecil dari panjang gelombang cahaya tampak mereduksi efek hamburan cahaya (Efek Tyndall)."
      },
      {
        "id": "C",
        "text": "Karena nanopartikel larut secara kimiawi dan menyatu ke dalam lapisan dermis kulit."
      },
      {
        "id": "D",
        "text": "Karena TiO₂ bereaksi dengan keringat membentuk gas oksigen pelindung."
      },
      {
        "id": "E",
        "text": "Karena nanopartikel menyerap seluruh spektrum cahaya tampak tanpa sisa."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Sifat Optik Koloid & Nanomaterial:</strong><br>\n1. <strong>Hamburan Cahaya (Rayleigh Scattering):</strong> Partikel mikro memiliki ukuran sebanding dengan panjang gelombang cahaya tampak ($400-700\\text{ nm}$), sehingga menghamburkan seluruh cahaya tampak yang memicu penampakan putih pekat (<em>white cast</em>).<br>\n2. <strong>Keunggulan Ukuran Nano ($< 50\\text{ nm}$):</strong> Ukuran partikel jauh lebih kecil daripada panjang gelombang cahaya tampak, sehingga hamburan cahaya tampak menjadi sangat minimal dan film sunscreen tampak transparan di mata manusia.<br>\n3. <strong>Proteksi Sinar UV:</strong> Struktur pita energi (<em>band gap</em> $\\sim 3{,}2\\text{ eV}$) dari $\\text{TiO}_2$ tetap secara optimal menyerap radiasi foton UV-A dan UV-B berenergi tinggi, memberikan perlindungan maksimal bagi kulit.<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25KIM-PRED3-017"
  },
  {
    "id": 18,
    "elemen": "Laju Reaksi & Kinetika Kimia",
    "subelemen": "Pengaruh Suhu terhadap Laju Reaksi",
    "indikator": "Menganalisis prinsip kinetika kimia pada metode pengawetan pendinginan makanan.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam industri pengolahan pangan, pembekuan daging dan buah pada suhu $-18^\\circ\\text{C}$ dapat mempertahankan kesegaran bahan pangan selama berbulan-bulan, sedangkan bahan pangan yang sama akan membusuk dalam hitungan hari jika disimpan pada suhu ruang ($28^\\circ\\text{C}$).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nDitinjau dari teori tumbukan dan persamaan Arrhenius, mengapa penurunan suhu secara efektif menghambat pembusukan bahan pangan?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Suhu rendah menaikkan energi aktivasi (Ea) dari enzim mikroorganisme."
      },
      {
        "id": "B",
        "text": "Pendinginan membekukan molekul oksigen sehingga tidak dapat bereaksi."
      },
      {
        "id": "C",
        "text": "Penurunan suhu merusak seluruh ikatan kovalen pada sel bakteri pembusuk."
      },
      {
        "id": "D",
        "text": "Penurunan suhu menurunkan energi kinetik rata-rata molekul sehingga frekuensi tumbukan efektif yang melampaui Ea berkurang drastis."
      },
      {
        "id": "E",
        "text": "Penurunan suhu meningkatkan nilai tetapan laju reaksi (k) dekomposisi."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Teori Tumbukan & Pengaruh Suhu (Arrhenius):</strong><br>\nBerdasarkan persamaan Arrhenius $k = A \\cdot e^{-E_a / RT}$:<br>\n1. <strong>Energi Kinetik Partikel:</strong> Penurunan suhu ($T$) menurunkan energi kinetik translasi molekul substrat dan enzim pembusuk.<br>\n2. <strong>Frekuensi Tumbukan Efektif:</strong> Proporsi fraksi molekul yang memiliki energi sama atau melampaui energi aktivasi ($E \\ge E_a$) berkurang secara eksponensial.<br>\n3. Dampaknya, tetapan laju reaksi kimia dekomposisi organik dan metabolisme mikroorganisme menurun tajam hingga mendekati nol, menghentikan laju pembusukan.<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-PRED3-018"
  },
  {
    "id": 19,
    "elemen": "Elektrokimia & Reaksi Redoks",
    "subelemen": "Hukum Faraday I",
    "indikator": "Menghitung waktu yang dibutuhkan untuk mengendapkan timah (Sn) pada katoda.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLarutan $\\text{SnCl}_2$ dielektrolisis menggunakan elektroda inert dengan arus listrik searah sebesar $2\\text{ Ampere}$. Jika massa timah yang berhasil diendapkan pada katoda adalah $1{,}19\\text{ gram}$ ($A_r\\ \\text{Sn} = 119$, $1\\text{ F} = 96.500\\text{ C/mol}$), berapakah lama waktu elektrolisis tersebut berlangsung?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "965 detik"
      },
      {
        "id": "B",
        "text": "482,5 detik"
      },
      {
        "id": "C",
        "text": "1.930 detik"
      },
      {
        "id": "D",
        "text": "2.412 detik"
      },
      {
        "id": "E",
        "text": "3.860 detik"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Langkah Perhitungan Hukum Faraday I:</strong><br>\n1. <strong>Reaksi Reduksi di Katoda:</strong> $\\text{Sn}^{2+} + 2e^- \\rightarrow \\text{Sn}(s)$ (perubahan valensi $n = 2$).<br>\nMassa ekuivalen timah: $e = \\frac{A_r}{n} = \\frac{119}{2} = 59{,}5$.<br>\n2. <strong>Rumus Hukum Faraday:</strong><br>\n$$w = \\frac{e \\times i \\times t}{96.500}$$\n$$1{,}19 = \\frac{59{,}5 \\times 2 \\times t}{96.500}$$\n$$1{,}19 = \\frac{119 \\times t}{96.500}$$\n$$t = \\frac{1{,}19 \\times 96.500}{119} = 0{,}01 \\times 96.500 = 965\\text{ detik}$$\n<br><strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-PRED3-019"
  },
  {
    "id": 20,
    "elemen": "Termokimia & Energi",
    "subelemen": "Kalorimetri & Entalpi Reaksi",
    "indikator": "Menghitung perubahan entalpi netralisasi per mol reaksi HNO3 dengan KOH.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak $50\\text{ mL}$ larutan $\\text{HNO}_3\\ 0{,}1\\text{ M}$ dicampurkan dengan $50\\text{ mL}$ larutan $\\text{KOH}\\ 0{,}1\\text{ M}$ ke dalam kalorimeter plastik. Terjadi kenaikan suhu larutan sebesar $0{,}6^\\circ\\text{C}$. Jika massa jenis larutan dianggap $1\\text{ g/mL}$ dan kalor jenis larutan $4{,}2\\text{ J/g}\\cdot^\\circ\\text{C}$, berapakah nilai perubahan entalpi netralisasi ($\\Delta H$) reaksi per mol air yang terbentuk?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "-25,2 kJ/mol"
      },
      {
        "id": "B",
        "text": "+50,4 kJ/mol"
      },
      {
        "id": "C",
        "text": "-50,4 kJ/mol"
      },
      {
        "id": "D",
        "text": "-100,8 kJ/mol"
      },
      {
        "id": "E",
        "text": "+25,2 kJ/mol"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Langkah Perhitungan Kalorimetri:</strong><br>\n1. <strong>Massa Total Campuran:</strong> $V = 50 + 50 = 100\\text{ mL} \\rightarrow m = 100\\text{ gram}$.<br>\n2. <strong>Menghitung Kalor yang Diserap Larutan ($q$):</strong><br>\n$$q = m \\times c \\times \\Delta T = 100\\text{ g} \\times 4{,}2\\text{ J/g}^\\circ\\text{C} \\times 0{,}6^\\circ\\text{C} = 252\\text{ J} = 0{,}252\\text{ kJ}$$<br>\n3. <strong>Mol Zat yang Bereaksi:</strong><br>\n$$\\text{Mol } \\text{HNO}_3 = 50\\text{ mL} \\times 0{,}1\\text{ M} = 5\\text{ mmol} = 0{,}005\\text{ mol}$$\n$$\\text{Mol } \\text{KOH} = 50\\text{ mL} \\times 0{,}1\\text{ M} = 5\\text{ mmol} = 0{,}005\\text{ mol}$$\nAir yang terbentuk $= 0{,}005\\text{ mol}$.<br>\n4. <strong>Perubahan Entalpi ($\\Delta H$):</strong> Karena suhu naik, reaksi bersifat eksoterm ($q_{\\text{reaksi}} = -q$):<br>\n$$\\Delta H = -\\frac{q}{\\text{mol}} = -\\frac{0{,}252\\text{ kJ}}{0{,}005\\text{ mol}} = -50{,}4\\text{ kJ/mol}$$\n<br><strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-PRED3-020"
  },
  {
    "id": 21,
    "elemen": "Kimia Organik",
    "subelemen": "Isomeri Senyawa Karbon",
    "indikator": "Menentukan pasangan isomer gugus fungsi antara senyawa keton dan aldehida.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSenyawa karbon dengan rumus struktur $\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CH}_3$ (2-butanon) berisomer gugus fungsi dengan senyawa...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1-butanol"
      },
      {
        "id": "B",
        "text": "Dietil eter"
      },
      {
        "id": "C",
        "text": "Asam butanoat"
      },
      {
        "id": "D",
        "text": "Butanal"
      },
      {
        "id": "E",
        "text": "Metil propanoat"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Isomer Gugus Fungsi:</strong><br>\nSenyawa 2-butanon memiliki gugus karbonil keton ($-\\text{CO}-$) dengan rumus molekul umum $\\text{C}_n\\text{H}_{2n}\\text{O}$ (yaitu $\\text{C}_4\\text{H}_8\\text{O}$).<br>\nPasangan isomer gugus fungsi senyawa alkanal (aldehida) dan alkanon (keton) keduanya memiliki rumus umum yang sama $\\text{C}_n\\text{H}_{2n}\\text{O}$.<br>\nOleh karena itu, 2-butanon berisomer gugus fungsi dengan <strong>butanal</strong> (aldehida 4 atom karbon: $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CHO}$).<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-PRED3-021"
  },
  {
    "id": 22,
    "elemen": "Kimia Organik",
    "subelemen": "Jenis-Jenis Reaksi Senyawa Karbon",
    "indikator": "Mengidentifikasi reaksi adisi, substitusi, dan eliminasi pada senyawa organik.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan empat persamaan reaksi senyawa karbon berikut:\n<br>\n(1) $\\text{CH}_2=\\text{CH}_2 + \\text{HCl} \\rightarrow \\text{CH}_3-\\text{CH}_2\\text{Cl}$<br>\n(2) $\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{h\\nu} \\text{CH}_3\\text{Cl} + \\text{HCl}$<br>\n(3) $\\text{CH}_3-\\text{CH}_2\\text{OH} \\xrightarrow{\\text{H}_2\\text{SO}_4\\text{ pekat},\\ 180^\\circ\\text{C}} \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}$<br>\n(4) $\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{H}_2 \\xrightarrow{\\text{Ni}} \\text{CH}_3-\\text{CH}_2-\\text{CH}_3$\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah pernyataan yang BENAR mengenai jenis reaksi-reaksi tersebut?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Reaksi (1) merupakan reaksi adisi karena terjadi pemutusan ikatan rangkap dua menjadi ikatan tunggal."
      },
      {
        "id": "B",
        "text": "Reaksi (2) merupakan reaksi substitusi karena atom H pada alkana digantikan oleh atom klorin."
      },
      {
        "id": "C",
        "text": "Reaksi (3) merupakan reaksi eliminasi (dehidrasi alkohol) yang menghasilkan ikatan rangkap dua alkena."
      },
      {
        "id": "D",
        "text": "Reaksi (4) merupakan reaksi hidrogenasi yang tergolong sebagai reaksi adisi."
      },
      {
        "id": "E",
        "text": "Reaksi (1) dan (3) memiliki mekanisme reaksi yang sama persis."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Klasifikasi Reaksi Senyawa Karbon:</strong><br>\n- <strong>Reaksi (1) Adisi:</strong> Alkena tak jenuh menerima molekul $\\text{HCl}$, ikatan rangkap terputus menjadi ikatan jenuh. (<strong>A Benar</strong>)<br>\n- <strong>Reaksi (2) Substitusi:</strong> Penggantian atom $\\text{H}$ oleh halogen $\\text{Cl}$ pada alkana melalui radikal bebas. (<strong>B Benar</strong>)<br>\n- <strong>Reaksi (3) Eliminasi:</strong> Pelepasan molekul $\\text{H}_2\\text{O}$ dari alkohol membentuk ikatan rangkap alkena. (<strong>C Benar</strong>)<br>\n- <strong>Reaksi (4) Adisi (Hidrogenasi):</strong> Penjenuhan ikatan rangkap propena menjadi propana oleh $\\text{H}_2$ dengan katalis nikel. (<strong>D Benar</strong>)<br>\n- Opsi E salah (reaksi adisi dan eliminasi merupakan kebalikan satu sama lain).<br><br>\n<strong>Kunci Jawaban: A, B, C, D</strong>",
    "kode": "25KIM-PRED3-022"
  },
  {
    "id": 23,
    "elemen": "Laju Reaksi & Kinetika Kimia",
    "subelemen": "Faktor-Faktor yang Mempengaruhi Laju Reaksi",
    "indikator": "Menganalisis pengaruh luas permukaan dan konsentrasi pada reaksi Mg dengan HCl.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam sebuah eksperimen laboratorium untuk mempelajari kinetika reaksi:\n$$\\text{Mg}(s) + 2\\text{HCl}(aq) \\rightarrow \\text{MgCl}_2(aq) + \\text{H}_2(g)$$\nDiuji 4 kondisi reaksi yang berbeda pada suhu tetap ($25^\\circ\\text{C}$):\n<br>\n- Tabung 1: $1\\text{ g}$ lempeng $\\text{Mg} + 20\\text{ mL } \\text{HCl } 1\\text{ M}$<br>\n- Tabung 2: $1\\text{ g}$ serbuk $\\text{Mg} + 20\\text{ mL } \\text{HCl } 1\\text{ M}$<br>\n- Tabung 3: $1\\text{ g}$ lempeng $\\text{Mg} + 20\\text{ mL } \\text{HCl } 2\\text{ M}$<br>\n- Tabung 4: $1\\text{ g}$ serbuk $\\text{Mg} + 20\\text{ mL } \\text{HCl } 2\\text{ M}$\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah berdasarkan teori tumbukan!<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik Benar atau Salah pada setiap pernyataan berikut!</span>\n</p>",
    "items": [
      {
        "pernyataan": "Reaksi pada Tabung 4 berlangsung paling cepat karena memiliki konsentrasi pereaksi tertinggi dan luas bidang sentuh partikel terbesar.",
        "kunci": "Benar",
        "penjelasan": "Serbuk padatan memiliki luas permukaan kontak paling besar, dan larutan HCl 2 M memiliki kerapatan partikel per volume paling tinggi."
      },
      {
        "pernyataan": "Perbedaan laju reaksi antara Tabung 1 dan Tabung 2 semata-mata dipengaruhi oleh energi aktivasi yang menurun pada bentuk serbuk.",
        "kunci": "Salah",
        "penjelasan": "Bentuk serbuk memperluas bidang sentuh, bukan menurunkan energi aktivasi (energi aktivasi hanya diturunkan oleh katalis)."
      },
      {
        "pernyataan": "Semakin besar konsentrasi HCl, semakin banyak jumlah partikel per satuan volume, sehingga frekuensi tumbukan efektif antarreaktan meningkat.",
        "kunci": "Benar",
        "penjelasan": "Konsentrasi berbanding lurus dengan kerapatan partikel terlarut dan peluang terjadinya tumbukan efektif."
      }
    ],
    "kunci": [
      "Benar",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Analisis Teori Tumbukan pada Laju Reaksi:</strong><br>\n- <strong>Pernyataan 1 (Benar):</strong> Tabung 4 mengombinasikan serbuk $\\text{Mg}$ (luas permukaan kontak maksimum) dan $\\text{HCl } 2\\text{ M}$ (konsentrasi tertinggi), sehingga laju reaksi dan pembentukan gas $\\text{H}_2$ paling cepat.<br>\n- <strong>Pernyataan 2 (Salah):</strong> Luas permukaan mempengaruhi <strong>frekuensi tumbukan</strong> antarpartikel per satuan waktu, sama sekali TIDAK mengubah energi aktivasi ($E_a$). Penurunan $E_a$ hanya dapat dicapai melalui penambahan katalis.<br>\n- <strong>Pernyataan 3 (Benar):</strong> Kenaikan konsentrasi memperbanyak partikel per satuan ruang, meningkatkan probabilitas tumbukan efektif berenergi cukup.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    "kode": "25KIM-PRED3-023"
  },
  {
    "id": 24,
    "elemen": "Laju Reaksi & Kinetika Kimia",
    "subelemen": "Persamaan Laju & Orde Reaksi",
    "indikator": "Menentukan rumus persamaan laju reaksi dari tabel eksperimen.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nData eksperimen penentuan laju reaksi untuk:\n$$2\\text{NO}(g) + \\text{Br}_2(g) \\rightarrow 2\\text{NOBr}(g)$$\n</p>\n<div class=\"overflow-x-auto my-2 text-center text-xs\">\n  <table class=\"min-w-[320px] border border-slate-300 mx-auto\">\n    <thead class=\"bg-slate-100 font-semibold\"><tr><th class=\"p-1.5 border\">Percobaan</th><th class=\"p-1.5 border\">[NO] (M)</th><th class=\"p-1.5 border\">[Br₂] (M)</th><th class=\"p-1.5 border\">Laju Reaksi (v, M/s)</th></tr></thead>\n    <tbody>\n      <tr><td class=\"p-1 border\">1</td><td class=\"p-1 border\">0,1</td><td class=\"p-1 border\">0,05</td><td class=\"p-1 border\">6</td></tr>\n      <tr><td class=\"p-1 border\">2</td><td class=\"p-1 border\">0,1</td><td class=\"p-1 border\">0,10</td><td class=\"p-1 border\">12</td></tr>\n      <tr><td class=\"p-1 border\">3</td><td class=\"p-1 border\">0,2</td><td class=\"p-1 border\">0,10</td><td class=\"p-1 border\">48</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nPersamaan laju reaksi yang sesuai dengan data di atas adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "v = k [NO] [Br₂]"
      },
      {
        "id": "B",
        "text": "v = k [NO] [Br₂]²"
      },
      {
        "id": "C",
        "text": "v = k [NO]² [Br₂]²"
      },
      {
        "id": "D",
        "text": "v = k [NO]² [Br₂]"
      },
      {
        "id": "E",
        "text": "v = k [NO]²"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Penentuan Orde Reaksi:</strong><br>\n1. <strong>Menentukan Orde terhadap $\\text{Br}_2$ (Data 1 & 2, saat $[\\text{NO}]$ konstan):</strong><br>\n$$\\frac{v_2}{v_1} = \\left(\\frac{[\\text{Br}_2]_2}{[\\text{Br}_2]_1}\\right)^y \\Rightarrow \\frac{12}{6} = \\left(\\frac{0{,}10}{0{,}05}\\right)^y \\Rightarrow 2 = 2^y \\Rightarrow y = 1$$<br>\n2. <strong>Menentukan Orde terhadap $\\text{NO}$ (Data 2 & 3, saat $[\\text{Br}_2]$ konstan):</strong><br>\n$$\\frac{v_3}{v_2} = \\left(\\frac{[\\text{NO}]_3}{[\\text{NO}]_2}\\right)^x \\Rightarrow \\frac{48}{12} = \\left(\\frac{0{,}2}{0{,}1}\\right)^x \\Rightarrow 4 = 2^x \\Rightarrow x = 2$$<br>\n3. <strong>Persamaan Laju Reaksi:</strong><br>\n$$v = k [\\text{NO}]^2 [\\text{Br}_2]$$\n<br><strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-PRED3-024"
  },
  {
    "id": 25,
    "elemen": "Kesetimbangan Kimia",
    "subelemen": "Pergeseran Kesetimbangan & Asas Le Chatelier",
    "indikator": "Menganalisis pergeseran kesetimbangan disosiasi NO2/N2O4 akibat perubahan suhu dan tekanan.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGas nitrogen dioksida ($\\text{NO}_2$, berwarna cokelat kemerahan) dapat berdimerisasi membentuk dinitrogen tetroksida ($\\text{N}_2\\text{O}_4$, tidak berwarna) dalam wadah tertutup menurut reaksi kesetimbangan eksoterm:\n$$2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g) \\quad \\Delta H = -57{,}2\\text{ kJ}$$\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah berdasarkan asas Le Chatelier!<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik Benar atau Salah pada setiap pernyataan berikut!</span>\n</p>",
    "items": [
      {
        "pernyataan": "Jika suhu sistem dinaikkan, kesetimbangan akan bergeser ke arah endoterm (kiri / pembentukan NO₂) sehingga warna campuran gas menjadi semakin cokelat pekat.",
        "kunci": "Benar",
        "penjelasan": "Reaksi ke kanan eksoterm (melepas kalor). Kenaikan suhu memaksa sistem menyerap kalor dengan bergeser ke arah endoterm (ke kiri)."
      },
      {
        "pernyataan": "Jika tekanan total sistem diperbesar dengan memperkecil volume wadah, kesetimbangan akan bergeser ke arah koefisien gas yang lebih kecil (kanan / pembentukan N₂O₄).",
        "kunci": "Benar",
        "penjelasan": "Koefisien gas kiri = 2, kanan = 1. Tekanan naik menggeser kesetimbangan ke sisi jumlah molekul gas lebih sedikit (kanan)."
      },
      {
        "pernyataan": "Penambahan katalis ke dalam sistem akan menggeser posisi kesetimbangan ke arah kanan dan meningkatkan hasil produksi gas N₂O₄.",
        "kunci": "Salah",
        "penjelasan": "Katalis mempercepat tercapainya kesetimbangan dengan mempercepat laju reaksi maju dan balik secara seimbang, tidak mengubah posisi kesetimbangan."
      }
    ],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Asas Le Chatelier pada Reaksi Kesetimbangan Gas:</strong><br>\n- <strong>Pernyataan 1 (Benar):</strong> Reaksi ke kanan bersifat eksoterm ($\\Delta H < 0$). Kenaikan suhu menggeser kesetimbangan ke arah endoterm (kiri), membentuk lebih banyak gas $\\text{NO}_2$ sehingga intensitas warna cokelat meningkat.<br>\n- <strong>Pernyataan 2 (Benar):</strong> Tekanan diperbesar (volume diperkecil) menggeser kesetimbangan ke arah koefisien gas terkecil (koefisien kanan $= 1 <$ koefisien kiri $= 2$), menghasilkan lebih banyak $\\text{N}_2\\text{O}_4$.<br>\n- <strong>Pernyataan 3 (Salah):</strong> Katalis hanya menurunkan energi aktivasi ($E_a$) kedua arah reaksi tanpa mengubah komposisi kesetimbangan atau nilai $K_c$.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>",
    "kode": "25KIM-PRED3-025"
  },
  {
    "id": 26,
    "elemen": "Kesetimbangan Kimia",
    "subelemen": "Tetapan Kesetimbangan Kc",
    "indikator": "Merumuskan persamaan reaksi kimia kesetimbangan heterogen dari persamaan Kc.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nRumus tetapan kesetimbangan ($K_c$) suatu reaksi heterogen dinyatakan sebagai:\n$$K_c = \\frac{[\\text{CO}_2][\\text{H}_2\\text{O}]}{[\\text{SO}_2]^2}$$\nPersamaan reaksi kesetimbangan kimia yang paling tepat untuk rumusan $K_c$ tersebut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2SO₂(g) + CO₂(g) ⇌ 2SO₃(g) + H₂O(g)"
      },
      {
        "id": "B",
        "text": "2SO₂(s) + CO₂(g) + H₂O(g) ⇌ 2SO₃(g)"
      },
      {
        "id": "C",
        "text": "CS₂(l) + 2O₂(g) ⇌ CO₂(g) + 2SO₂(g)"
      },
      {
        "id": "D",
        "text": "C(s) + 2H₂SO₄(l) ⇌ 2SO₂(g) + CO₂(g) + 2H₂O(g)"
      },
      {
        "id": "E",
        "text": "2SO₂(g) + C(s) + 2H₂O(g) ⇌ CO₂(g) + 2H₂S(g)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Aturan Penulisan Rumus $K_c$ untuk Reaksi Heterogen:</strong><br>\n1. Dalam rumusan tetapan kesetimbangan $K_c$, hanya zat berwujud <strong>gas ($g$) dan larutan ($aq$)</strong> yang dimasukkan. Zat berwujud padat murni ($s$) dan cairan murni ($l$) tidak disertakan karena konsentrasinya bernilai konstan (aktivitas $= 1$).<br>\n2. Pada reaksi:<br>\n$$\\text{C}(s) + 2\\text{H}_2\\text{SO}_4(l) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$$\nZat di ruas kanan adalah gas $\\text{CO}_2, \\text{SO}_2,$ dan $\\text{H}_2\\text{O}$, dengan reaktan padat/cair di kiri, menghasilkan:<br>\n$$K_c = [\\text{SO}_2]^2 [\\text{CO}_2] [\\text{H}_2\\text{O}]^2$$\n<br><strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-PRED3-026"
  },
  {
    "id": 27,
    "elemen": "Kimia Karbon & Makromolekul",
    "subelemen": "Polimer & Polimerisasi",
    "indikator": "Mengidentifikasi polimer yang terbentuk dari monomer propena.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu bahan plastik sintesis dibuat melalui reaksi polimerisasi adisi dari monomer berikut:\n$$\\text{CH}_2=\\text{CH}-\\text{CH}_3$$\nNama polimer yang terbentuk dan kegunaan utamanya dalam kehidupan sehari-hari adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Polipropilena, digunakan untuk wadah makanan kedap air, tali plastik, dan serat karpet"
      },
      {
        "id": "B",
        "text": "Polietilena, digunakan untuk kantong plastik belanja sekali pakai"
      },
      {
        "id": "C",
        "text": "Polivinilklorida (PVC), digunakan untuk pipa air paralon"
      },
      {
        "id": "D",
        "text": "Teflon, digunakan untuk pelapis wajan antilengket"
      },
      {
        "id": "E",
        "text": "Polistirena, digunakan untuk wadah gabus styrofoam"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Polimerisasi Adisi Monomer Alkena:</strong><br>\nMonomer $\\text{CH}_2=\\text{CH}-\\text{CH}_3$ adalah propena (propilena). Melalui reaksi polimerisasi adisi (pemutusan ikatan rangkap dua), monomer-monomer propena bergabung membentuk makromolekul rantai panjang <strong>polipropilena (PP)</strong>:<br>\n$$n(\\text{CH}_2=\\text{CH}-\\text{CH}_3) \\rightarrow [-\\text{CH}_2-\\text{CH}(\\text{CH}_3)-]_n$$\nPolipropilena memiliki ketahanan termal tinggi, fleksibel, serta aman digunakan sebagai wadah makanan/minuman (kode daur ulang nomor 5) dan tali plastik sintesis.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-PRED3-027"
  },
  {
    "id": 28,
    "elemen": "Larutan & Kimia Fisika",
    "subelemen": "Sifat Koligatif Larutan",
    "indikator": "Menganalisis fenomena kehidupan sehari-hari yang memanfaatkan prinsip sifat koligatif larutan.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBerikut adalah beberapa penerapan sifat koligatif larutan dalam teknologi dan kehidupan sehari-hari:\n<br>\n(1) Penambahan etilen glikol pada cairan radiator mobil di daerah bermusim dingin.<br>\n(2) Pemberian garam dapur untuk membunuh lintah atau bekicot.<br>\n(3) Desalinasi air laut menjadi air tawar melalui osmosis balik (reverse osmosis).<br>\n(4) Penggunaan garam dapur untuk mencairkan salju di jalan raya.<br>\n(5) Penggunaan cairan infus yang isotonik dengan cairan sel darah merah.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah penerapan di atas yang didasarkan pada prinsip <strong>penurunan titik beku larutan (ΔTf)</strong>?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "(1) Penambahan etilen glikol pada radiator mobil"
      },
      {
        "id": "B",
        "text": "(2) Pemberian garam dapur untuk membasmi lintah"
      },
      {
        "id": "C",
        "text": "(3) Desalinasi air laut menggunakan reverse osmosis"
      },
      {
        "id": "D",
        "text": "(4) Penggunaan garam dapur untuk mencairkan salju di jalan raya"
      },
      {
        "id": "E",
        "text": "(5) Pembuatan cairan infus intravena isotonik"
      }
    ],
    "kunci": [
      "A",
      "D"
    ],
    "pembahasan": "<strong>Klasifikasi Sifat Koligatif Larutan:</strong><br>\n1. <strong>Penurunan Titik Beku ($\\Delta T_f$):</strong><br>\n- (1) Etilen glikol menurunkan titik beku air radiator sehingga tidak membeku pada suhu di bawah $0^\\circ\\text{C}$. (<strong>A Benar</strong>)<br>\n- (4) Taburan garam pada salju menurunkan titik beku es di bawah suhu lingkungan sehingga es mencair. (<strong>D Benar</strong>)<br>\n2. <strong>Tekanan Osmotik ($\\Pi$):</strong><br>\n- (2) Garam pada lintah memicu air keluar dari tubuh lintah melalui osmosis (krenasi).<br>\n- (3) Desalinasi menggunakan membran semipermeabel dengan tekanan melebihi tekanan osmotik.<br>\n- (5) Cairan infus harus isotonik (tekanan osmosis sama dengan plasma darah) agar sel darah tidak hemolisis atau mengerut.<br><br>\n<strong>Kunci Jawaban: A, D</strong>",
    "kode": "25KIM-PRED3-028"
  },
  {
    "id": 29,
    "elemen": "Larutan & Kimia Fisika",
    "subelemen": "Penurunan Tekanan Uap (Hukum Raoult)",
    "indikator": "Menganalisis larutan yang memiliki tekanan uap jenuh paling rendah berdasarkan fraksi mol zat terlarut.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nLima wadah tertutup masing-masing berisi pelarut air murni dengan jumlah mol zat terlarut nonelektrolit yang berbeda pada suhu konstan $25^\\circ\\text{C}$:\n<br>\n- Wadah 1: $1\\text{ mol}$ zat terlarut dalam $20\\text{ mol}$ air<br>\n- Wadah 2: $2\\text{ mol}$ zat terlarut dalam $20\\text{ mol}$ air<br>\n- Wadah 3: $4\\text{ mol}$ zat terlarut dalam $20\\text{ mol}$ air<br>\n- Wadah 4: $1\\text{ mol}$ zat terlarut dalam $10\\text{ mol}$ air<br>\n- Wadah 5: $2\\text{ mol}$ zat terlarut dalam $10\\text{ mol}$ air\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nWadah manakah yang memiliki <strong>tekanan uap jenuh larutan paling rendah</strong>?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Wadah 1"
      },
      {
        "id": "B",
        "text": "Wadah 2"
      },
      {
        "id": "C",
        "text": "Wadah 3"
      },
      {
        "id": "D",
        "text": "Wadah 4"
      },
      {
        "id": "E",
        "text": "Wadah 5"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Hukum Raoult tentang Tekanan Uap Larutan:</strong><br>\nMenurut Hukum Raoult: $P = X_p \\cdot P^\\circ$ atau $\\Delta P = X_t \\cdot P^\\circ$.<br>\nTekanan uap larutan ($P$) akan <strong>paling rendah</strong> ketika fraksi mol zat terlarut ($X_t$) bernilai <strong>paling besar</strong> (karena partikel zat terlarut menghalangi molekul pelarut menguap di permukaan):<br>\n- Wadah 1: $X_t = \\frac{1}{21} \\approx 0{,}048$<br>\n- Wadah 2: $X_t = \\frac{2}{22} \\approx 0{,}091$<br>\n- Wadah 3: $X_t = \\frac{4}{24} = \\frac{1}{6} \\approx 0{,}167$<br>\n- Wadah 4: $X_t = \\frac{1}{11} \\approx 0{,}091$<br>\n- Wadah 5: $X_t = \\frac{2}{12} = \\frac{1}{6} \\approx 0{,}167$<br>\nKarena Wadah 3 dan 5 memiliki fraksi mol terbesar ($X_t = 0{,}167$), keduanya mengalami penurunan tekanan uap terbesar. Memilih Wadah 3 menghasilkan tekanan uap larutan paling minimum.<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-PRED3-029"
  },
  {
    "id": 30,
    "elemen": "Reaksi Redoks & Elektrokimia",
    "subelemen": "Penyetaraan Persamaan Reaksi Redoks",
    "indikator": "Menentukan koefisien reaksi redoks Cu dengan HNO3 dalam suasana asam.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan persamaan reaksi redoks pembentukan gas nitrogen monoksida berikut (belum setara):\n$$a\\text{Cu}(s) + b\\text{HNO}_3(aq) \\rightarrow c\\text{Cu}(\text{NO}_3)_2(aq) + d\\text{NO}(g) + e\\text{H}_2\\text{O}(l)$$\nNilai koefisien reaksi $a, b, c, d,$ dan $e$ berturut-turut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1, 4, 1, 2, 2"
      },
      {
        "id": "B",
        "text": "3, 6, 3, 2, 3"
      },
      {
        "id": "C",
        "text": "2, 8, 2, 2, 4"
      },
      {
        "id": "D",
        "text": "3, 4, 3, 1, 2"
      },
      {
        "id": "E",
        "text": "3, 8, 3, 2, 4"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Metode Perubahan Bilangan Oksidasi (PBO):</strong><br>\n1. <strong>Identifikasi Spesi Redoks:</strong><br>\n- Oksidasi: $\\text{Cu}^0 \\rightarrow \\text{Cu}^{2+} + 2e^-$ (naik 2, dikalikan 3)<br>\n- Reduksi: $\\text{N}^{+5}\\text{O}_3^- + 3e^- \\rightarrow \\text{N}^{+2}\\text{O}$ (turun 3, dikalikan 2)<br>\n2. <strong>Menyetarakan Elektron:</strong><br>\n$$3\\text{Cu} + 2\\text{NO}_3^- \\rightarrow 3\\text{Cu}^{2+} + 2\\text{NO}$$<br>\n3. <strong>Menyetarakan Anion $\\text{NO}_3^-$ dan Atom $\\text{H}$:</strong><br>\nDi ruas kanan terdapat $3 \\times 2 = 6$ ion $\\text{NO}_3^-$ pada garam $\\text{Cu}(\text{NO}_3)_2$ ditambah 2 atom N pada $\\text{NO}$, total $= 8$ atom N.<br>\nMaka koefisien $\\text{HNO}_3$ harus 8:<br>\n$$3\\text{Cu} + 8\\text{HNO}_3 \\rightarrow 3\\text{Cu}(\text{NO}_3)_2 + 2\\text{NO} + 4\\text{H}_2\\text{O}$$<br>\nKoefisien: $a=3, b=8, c=3, d=2, e=4$.<br><br>\n<strong>Kunci Jawaban: E</strong>",
    "kode": "25KIM-PRED3-030"
  },
  {
    "id": 31,
    "elemen": "Reaksi Redoks & Elektrokimia",
    "subelemen": "Sel Volta & Potensial Sel",
    "indikator": "Menganalisis elektroda anoda-katoda, arah aliran elektron, dan nilai potensial sel Volta.",
    "tipe": "kompleks_bs",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu sel Volta dirangkai dengan mencelupkan elektroda Nikel (Ni) ke dalam larutan $\\text{NiSO}_4\\ 1\\text{ M}$ dan elektroda Tembaga (Cu) ke dalam larutan $\\text{CuSO}_4\\ 1\\text{ M}$. Kedua kompartemen dihubungkan jembatan garam $\\text{KNO}_3$ dan kawat ber-voltmeter.\n<br>\nDiketahui data potensial reduksi standar:\n$$E^\\circ\\ \\text{Ni}^{2+}/\\text{Ni} = -0{,}25\\text{ Volt}$$\n$$E^\\circ\\ \\text{Cu}^{2+}/\\text{Cu} = +0{,}34\\text{ Volt}$$\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nTentukan apakah pernyataan berikut Benar atau Salah terkait sel Volta tersebut!<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik Benar atau Salah pada setiap pernyataan berikut!</span>\n</p>",
    "items": [
      {
        "pernyataan": "Elektroda Nikel (Ni) berfungsi sebagai anoda (kutub negatif) tempat terjadinya reaksi oksidasi logam Ni menjadi ion Ni²⁺.",
        "kunci": "Benar",
        "penjelasan": "Ni memiliki E° reduksi lebih negatif (-0,25 V) dibanding Cu (+0,34 V), sehingga Ni teroksidasi di anoda."
      },
      {
        "pernyataan": "Elektron mengalir secara spontan melalui kawat penghantar luar dari elektroda Tembaga (Cu) menuju elektroda Nikel (Ni).",
        "kunci": "Salah",
        "penjelasan": "Elektron dilepaskan di anoda (Ni) dan mengalir melalui kawat luar menuju katoda (Cu), bukan sebaliknya."
      },
      {
        "pernyataan": "Nilai potensial standar sel Volta (E°sel) yang terukur pada voltmeter adalah sebesar +0,59 Volt.",
        "kunci": "Benar",
        "penjelasan": "E°sel = E°katoda - E°anoda = (+0,34 V) - (-0,25 V) = +0,59 Volt."
      }
    ],
    "kunci": [
      "Benar",
      "Salah",
      "Benar"
    ],
    "pembahasan": "<strong>Prinsip Kerja Sel Volta (Ni - Cu):</strong><br>\n1. <strong>Menentukan Anoda dan Katoda:</strong><br>\n- $E^\\circ\\ \\text{Ni}^{2+}/\\text{Ni} = -0{,}25\\text{ V}$ (lebih kecil/negatif $\\rightarrow$ Anoda, oksidasi). (<strong>Pernyataan 1 Benar</strong>)<br>\n- $E^\\circ\\ \\text{Cu}^{2+}/\\text{Cu} = +0{,}34\\text{ V}$ (lebih besar/positif $\\rightarrow$ Katoda, reduksi).<br>\n2. <strong>Arah Aliran Elektron:</strong><br>\nElektron mengalir dari <strong>Anoda (Ni) $\\rightarrow$ Katoda (Cu)</strong> melalui sirkuit kawat luar. (<strong>Pernyataan 2 Salah</strong>)<br>\n3. <strong>Potensial Sel Standar ($E^\\circ_{\\text{sel}}$):</strong><br>\n$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = (+0{,}34\\text{ V}) - (-0{,}25\\text{ V}) = +0{,}59\\text{ Volt}$$ (<strong>Pernyataan 3 Benar</strong>)<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>",
    "kode": "25KIM-PRED3-031"
  },
  {
    "id": 32,
    "elemen": "Reaksi Redoks & Elektrokimia",
    "subelemen": "Pencegahan Korosi Logam",
    "indikator": "Mengidentifikasi logam pelindung yang dapat mencegah korosi paku besi melalui proteksi katodik.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang siswa melakukan eksperimen pencegahan korosi paku besi (Fe, $E^\\circ = -0{,}44\\text{ V}$) yang dililitkan dengan berbagai pita logam lain dan direndam dalam media korosif:\n<br>\n- Tabung 1: Paku Fe dililit pita Seng (Zn, $E^\\circ = -0{,}76\\text{ V}$)<br>\n- Tabung 2: Paku Fe dililit kawat Tembaga (Cu, $E^\\circ = +0{,}34\\text{ V}$)<br>\n- Tabung 3: Paku Fe dililit pita Magnesium (Mg, $E^\\circ = -2{,}37\\text{ V}$)<br>\n- Tabung 4: Paku Fe dililit pita Timah (Sn, $E^\\circ = -0{,}14\\text{ V}$)\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nLogam manakah yang mampu memberikan <strong>perlindungan katodik (anoda korban)</strong> sehingga paku besi terlindung dari perkaratan?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Pita Seng (Zn) pada Tabung 1"
      },
      {
        "id": "B",
        "text": "Kawat Tembaga (Cu) pada Tabung 2"
      },
      {
        "id": "C",
        "text": "Pita Magnesium (Mg) pada Tabung 3"
      },
      {
        "id": "D",
        "text": "Pita Timah (Sn) pada Tabung 4"
      },
      {
        "id": "E",
        "text": "Seluruh logam di atas mempercepat korosi paku besi"
      }
    ],
    "kunci": [
      "A",
      "C"
    ],
    "pembahasan": "<strong>Prinsip Proteksi Katodik (Anoda Korban):</strong><br>\nUntuk melindungi besi dari korosi secara proteksi katodik, logam pelindung harus memiliki <strong>potensial reduksi lebih negatif ($E^\\circ < E^\\circ_{\\text{Fe}} = -0{,}44\\text{ V}$)</strong> dan berada di sebelah kiri Fe dalam deret Volta:<br>\n$$\\text{Mg } (-2{,}37\\text{ V}) < \\text{Zn } (-0{,}76\\text{ V}) < \\text{Fe } (-0{,}44\\text{ V}) < \\text{Sn } (-0{,}14\\text{ V}) < \\text{Cu } (+0{,}34\\text{ V})$$<br>\n- <strong>Logam Zn dan Mg (Opsi A & C Benar):</strong> Bertindak sebagai anoda yang terkorosi lebih dahulu (anoda korban), mengalirkan elektron ke paku Fe sehingga Fe tetap terlindung sebagai katoda.<br>\n- Logam Cu dan Sn memiliki $E^\\circ$ lebih positif dari Fe. Jika lapisan Cu/Sn tergores, besi justru akan teroksidasi jauh lebih cepat.<br><br>\n<strong>Kunci Jawaban: A, C</strong>",
    "kode": "25KIM-PRED3-032"
  },
  {
    "id": 33,
    "elemen": "Reaksi Redoks & Elektrokimia",
    "subelemen": "Perhitungan Potensial Sel Standar",
    "indikator": "Menghitung potensial sel dan menuliskan notasi sel Volta.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui data potensial reduksi standar:\n$$E^\\circ\\ \\text{Mg}^{2+}/\\text{Mg} = -2{,}37\\text{ V}$$\n$$E^\\circ\\ \\text{Cu}^{2+}/\\text{Cu} = +0{,}34\\text{ V}$$\nNotasi sel Volta dan potensial sel standar ($E^\\circ_{\\text{sel}}$) yang dihasilkan dari kedua elektroda tersebut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Mg | Mg²⁺ || Cu²⁺ | Cu ; E°sel = +2,71 V"
      },
      {
        "id": "B",
        "text": "Cu | Cu²⁺ || Mg²⁺ | Mg ; E°sel = +2,71 V"
      },
      {
        "id": "C",
        "text": "Mg | Mg²⁺ || Cu²⁺ | Cu ; E°sel = +2,03 V"
      },
      {
        "id": "D",
        "text": "Cu²⁺ | Cu || Mg | Mg²⁺ ; E°sel = -2,71 V"
      },
      {
        "id": "E",
        "text": "Mg²⁺ | Mg || Cu | Cu²⁺ ; E°sel = -2,03 V"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Notasi Sel Volta & Perhitungan $E^\\circ_{\\text{sel}}$:</strong><br>\n1. <strong>Menentukan Elektroda:</strong><br>\n- Anoda (Oksidasi): Logam Mg ($E^\\circ$ lebih negatif: $-2{,}37\\text{ V}$).<br>\n- Katoda (Reduksi): Logam Cu ($E^\\circ$ lebih positif: $+0{,}34\\text{ V}$).<br>\n2. <strong>Penulisan Notasi Sel:</strong> $\\text{Anoda} \\mid \\text{Ion Anoda} \\parallel \\text{Ion Katoda} \\mid \\text{Katoda}$<br>\n$$\\text{Mg} \\mid \\text{Mg}^{2+} \\parallel \\text{Cu}^{2+} \\mid \\text{Cu}$$\n3. <strong>Perhitungan $E^\\circ_{\\text{sel}}$:</strong><br>\n$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = (+0{,}34\\text{ V}) - (-2{,}37\\text{ V}) = +2{,}71\\text{ Volt}$$\n<br><strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-PRED3-033"
  },
  {
    "id": 34,
    "elemen": "Kimia Organik & Termokimia",
    "subelemen": "Reaksi Esterifikasi",
    "indikator": "Mengidentifikasi senyawa ester beraroma buah yang terbentuk dari reaksi asam etanoat dengan propanol.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nCampuran antara $5\\text{ mL}$ asam etanoat ($\\text{CH}_3\\text{COOH}$) dengan $5\\text{ mL}$ 1-propanol ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$) dipanaskan dengan penambahan beberapa tetes asam sulfat pekat sebagai katalis. Campuran menghasilkan aroma wangi buah apel/pear yang khas.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNama senyawa ester yang terbentuk dari reaksi tersebut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Metil propanoat"
      },
      {
        "id": "B",
        "text": "Etil etanoat"
      },
      {
        "id": "C",
        "text": "Butil metanoat"
      },
      {
        "id": "D",
        "text": "Propil etanoat"
      },
      {
        "id": "E",
        "text": "Propil propanoat"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Reaksi Esterifikasi Fischer:</strong><br>\nAsam karboksilat bereaksi dengan alkohol dengan katalis asam sulfat menghasilkan ester dan air:<br>\n$$\\text{CH}_3\\text{COOH} + \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COOCH}_2\\text{CH}_2\\text{CH}_3 + \\text{H}_2\\text{O}$$<br>\n- Gugus alkil dari alkohol: propil ($-\\text{CH}_2\\text{CH}_2\\text{CH}_3$)<br>\n- Gugus asil dari asam: etanoat (asetat, $\\text{CH}_3\\text{COO}-$)<br>\nNama ester yang dihasilkan adalah <strong>propil etanoat</strong> (propil asetat).<br><br>\n<strong>Kunci Jawaban: D</strong>",
    "kode": "25KIM-PRED3-034"
  },
  {
    "id": 35,
    "elemen": "Kimia Organik",
    "subelemen": "Reaksi Senyawa Hidrokarbon",
    "indikator": "Mengidentifikasi reaksi substitusi pada senyawa alkana dan alkil halida.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan lima persamaan reaksi kimia di bawah ini:\n<br>\n(1) $2\\text{NO}(g) + \\text{O}_2(g) \\rightarrow 2\\text{NO}_2(g)$<br>\n(2) $\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{Br}_2 \\rightarrow \\text{CH}_3-\\text{CHBr}-\\text{CH}_2\\text{Br}$<br>\n(3) $\\text{CH}_4 + \\text{Cl}_2 \\rightarrow \\text{CH}_3\\text{Cl} + \\text{HCl}$<br>\n(4) $\\text{CH}_3-\\text{CH}_2\\text{OH} \\rightarrow \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}$<br>\n(5) $\\text{C}_2\\text{H}_5\\text{Cl} + \\text{NaOH} \\rightarrow \\text{C}_2\\text{H}_5\\text{OH} + \\text{NaCl}$\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah persamaan reaksi yang tergolong sebagai <strong>reaksi substitusi</strong>?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Reaksi (1)"
      },
      {
        "id": "B",
        "text": "Reaksi (2)"
      },
      {
        "id": "C",
        "text": "Reaksi (3): Metana dengan gas klorin"
      },
      {
        "id": "D",
        "text": "Reaksi (4)"
      },
      {
        "id": "E",
        "text": "Reaksi (5): Etil klorida dengan natrium hidroksida"
      }
    ],
    "kunci": [
      "C",
      "E"
    ],
    "pembahasan": "<strong>Identifikasi Reaksi Substitusi:</strong><br>\nReaksi substitusi adalah reaksi penggantian suatu atom atau gugus atom oleh atom/gugus atom lain tanpa mengubah derajat kejenuhan rantai karbon:<br>\n- <strong>Reaksi (3):</strong> Penggantian atom H pada metana oleh atom Cl dari $\\text{Cl}_2$ menghasilkan $\\text{CH}_3\\text{Cl}$ (substitusi radikal bebas). (<strong>Opsi C Benar</strong>)<br>\n- <strong>Reaksi (5):</strong> Penggantian gugus halogen $-\\text{Cl}$ pada etil klorida oleh gugus $-\\text{OH}$ dari $\\text{NaOH}$ menghasilkan etanol (substitusi nukleofilik). (<strong>Opsi E Benar</strong>)<br>\n- Reaksi (1) adalah reaksi oksidasi anorganik. Reaksi (2) adalah adisi halogen pada alkena. Reaksi (4) adalah eliminasi alkohol.<br><br>\n<strong>Kunci Jawaban: C, E</strong>",
    "kode": "25KIM-PRED3-035"
  },
  {
    "id": 36,
    "elemen": "Kimia Organik",
    "subelemen": "Benzena & Turunannya",
    "indikator": "Mengidentifikasi isomer posisi meta pada turunan benzena disubstitusi.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu senyawa turunan benzena disubstitusi memiliki gugus hidroksil ($\\text{-OH}$) dan gugus nitro ($\\text{-NO}_2$) yang terikat pada atom C cincin benzena nomor 1 dan nomor 3 (posisi 1,3).\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nNama trivial IUPAC yang tepat untuk senyawa tersebut adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Orto-nitrofenol"
      },
      {
        "id": "B",
        "text": "Para-nitrofenol"
      },
      {
        "id": "C",
        "text": "Meta-nitrofenol"
      },
      {
        "id": "D",
        "text": "Orto-nitrotoluena"
      },
      {
        "id": "E",
        "text": "Para-aminofenol"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Tata Nama Posisi Turunan Benzena:</strong><br>\nPada cincin benzena dengan dua substituen:<br>\n- Posisi 1,2 = awalan <em>orto-</em> ($o-$)<br>\n- Posisi 1,3 = awalan <em>meta-</em> ($m-$)<br>\n- Posisi 1,4 = awalan <em>para-</em> ($p-$)<br>\nGugus $-\\text{OH}$ memiliki prioritas penamaan lebih tinggi daripada $-\\text{NO}_2$, sehingga senyawa induknya adalah <strong>fenol</strong>. Dengan gugus nitro di posisi nomor 3, nama senyawa adalah <strong>meta-nitrofenol</strong> (3-nitrofenol).<br><br>\n<strong>Kunci Jawaban: C</strong>",
    "kode": "25KIM-PRED3-036"
  },
  {
    "id": 37,
    "elemen": "Makromolekul & Biokimia",
    "subelemen": "Uji Karbohidrat",
    "indikator": "Mengidentifikasi senyawa disakarida non-reduksi berdasarkan uji Molisch dan Benedict.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSuatu senyawa karbohidrat diuji di laboratorium dan menunjukkan hasil sebagai berikut:\n<br>\n- Uji Molisch memberikan cincin ungu pada batas dua cairan (positif karbohidrat).<br>\n- Uji Benedict tidak menghasilkan endapan merah bata (uji reduksi negatif).<br>\n- Uji hidrolisis asam menghasilkan dua molekul monosakarida yang berbeda jenis.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data tersebut, senyawa karbohidrat yang dimaksud adalah...\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Glukosa"
      },
      {
        "id": "B",
        "text": "Maltosa"
      },
      {
        "id": "C",
        "text": "Laktosa"
      },
      {
        "id": "D",
        "text": "Galaktosa"
      },
      {
        "id": "E",
        "text": "Sukrosa"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Identifikasi Senyawa Karbohidrat:</strong><br>\n1. <strong>Gula Non-Pereduksi:</strong> Sukrosa adalah satu-satunya disakarida umum yang bersifat non-pereduksi (tidak mereduksi reagen Fehling/Benedict) karena ikatan glikosidiknya melibatkan atom karbon anomerik dari kedua unit monosakarida (C-1 $\\alpha$-D-glukosa dan C-2 $\\beta$-D-fruktosa).<br>\n2. <strong>Hasil Hidrolisis:</strong> Hidrolisis sukrosa menghasilkan 2 monosakarida yang berbeda, yaitu <strong>glukosa dan fruktosa</strong> (gula invert).<br>\n(Maltosa terhidrolisis menjadi 2 molekul glukosa yang sama, sedangkan glukosa dan galaktosa adalah monosakarida).<br><br>\n<strong>Kunci Jawaban: E</strong>",
    "kode": "25KIM-PRED3-037"
  },
  {
    "id": 38,
    "elemen": "Makromolekul & Biokimia",
    "subelemen": "Uji Protein & Asam Amino",
    "indikator": "Menganalisis kandungan ikatan peptida, cincin benzena, dan belerang pada protein bahan makanan.",
    "tipe": "mcma",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nHasil uji biokimia terhadap empat sampel bahan makanan menunjukkan data sebagai berikut:\n</p>\n<div class=\"overflow-x-auto my-2 text-center text-xs\">\n  <table class=\"min-w-[340px] border border-slate-300 mx-auto\">\n    <thead class=\"bg-slate-100 font-semibold\"><tr><th class=\"p-1.5 border\">Bahan</th><th class=\"p-1.5 border\">Uji Biuret</th><th class=\"p-1.5 border\">Uji Xantoproteat</th><th class=\"p-1.5 border\">Uji Timbal(II) Asetat</th></tr></thead>\n    <tbody>\n      <tr><td class=\"p-1 border\">K</td><td class=\"p-1 border text-purple-700 font-bold\">Ungu</td><td class=\"p-1 border text-amber-700 font-bold\">Jingga</td><td class=\"p-1 border text-slate-800 font-bold\">Hitam</td></tr>\n      <tr><td class=\"p-1 border\">L</td><td class=\"p-1 border text-purple-700 font-bold\">Ungu</td><td class=\"p-1 border\">Kuning pucat</td><td class=\"p-1 border\">Tidak berubah</td></tr>\n      <tr><td class=\"p-1 border\">M</td><td class=\"p-1 border\">Biru</td><td class=\"p-1 border\">Tidak berwarna</td><td class=\"p-1 border\">Tidak berubah</td></tr>\n      <tr><td class=\"p-1 border\">N</td><td class=\"p-1 border text-purple-700 font-bold\">Ungu</td><td class=\"p-1 border text-amber-700 font-bold\">Jingga</td><td class=\"p-1 border\">Tidak berubah</td></tr>\n    </tbody>\n  </table>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nManakah kesimpulan yang BENAR mengenai kandungan nutrisi sampel bahan makanan tersebut?<br>\n<span class=\"text-xs font-normal text-slate-600\">Klik pada setiap pilihan jawaban benar! Jawaban benar lebih dari satu.</span>\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Bahan K mengandung protein dengan asam amino berinti benzena dan mengandung unsur belerang (seperti sistein/metionin)."
      },
      {
        "id": "B",
        "text": "Bahan L mengandung ikatan peptida (protein) namun tidak mengandung asam amino berinti benzena maupun belerang."
      },
      {
        "id": "C",
        "text": "Bahan M tidak mengandung ikatan peptida sama sekali karena uji Biuret menghasilkan warna biru."
      },
      {
        "id": "D",
        "text": "Bahan N mengandung protein dengan asam amino aromatis berinti benzena (seperti tirosin/fenilalanin)."
      },
      {
        "id": "E",
        "text": "Bahan K, L, dan N semuanya mengandung lemak jenuh tinggi."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "D"
    ],
    "pembahasan": "<strong>Prinsip Reagen Penguji Protein:</strong><br>\n1. <strong>Uji Biuret (Ungu):</strong> Menguji keberadaan minimal dua <strong>ikatan peptida</strong>. K, L, dan N positif mengandung protein.<br>\n2. <strong>Uji Xantoproteat (Jingga):</strong> Menguji adanya <strong>cincin benzena (asam amino aromatis)</strong> seperti fenilalanin, tirosin, dan triptofan. K dan N positif.<br>\n3. <strong>Uji Timbal(II) Asetat (Hitam PbS):</strong> Menguji keberadaan <strong>unsur belerang (S)</strong> seperti sistein dan metionin. Hanya bahan K yang positif menghasilkan endapan hitam $\\text{PbS}$.<br>\nMaka kesimpulan A, B, C, dan D semuanya bernilai benar.<br><br>\n<strong>Kunci Jawaban: A, B, C, D</strong>",
    "kode": "25KIM-PRED3-038"
  },
  {
    "id": 39,
    "elemen": "Struktur Atom & Sistem Periodik Unsur",
    "subelemen": "Sifat Keperiodikan Unsur",
    "indikator": "Menganalisis perbandingan sifat kimia dan keelektronegatifan unsur satu periode.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiketahui dua unsur seperiode: ${}_{11}\\text{Na}$ (Natrium) dan ${}_{17}\\text{Cl}$ (Klorin). Manakah pernyataan yang paling tepat untuk membandingkan sifat kimia dan keelektronegatifan kedua unsur tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Keelektronegatifan unsur Cl jauh lebih besar daripada Na karena muatan inti efektif Cl lebih besar sehingga gaya tarik terhadap elektron ikatan lebih kuat."
      },
      {
        "id": "B",
        "text": "Keelektronegatifan unsur Na lebih besar daripada Cl karena jari-jari atom Na lebih besar."
      },
      {
        "id": "C",
        "text": "Kedua unsur memiliki keelektronegatifan sama karena berada dalam periode 3."
      },
      {
        "id": "D",
        "text": "Unsur Na lebih mudah menarik elektron dibandingkan unsur Cl dalam ikatan kimia."
      },
      {
        "id": "E",
        "text": "Unsur Cl memiliki energi ionisasi lebih kecil daripada Na sehingga bersifat logam kuat."
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Keelektronegatifan dalam Satu Periode:</strong><br>\n- ${}_{11}\\text{Na}: [\\text{Ne}]\\ 3s^1$ (Golongan IA, logam elektropositif kuat)<br>\n- ${}_{17}\\text{Cl}: [\\text{Ne}]\\ 3s^2\\ 3p^5$ (Golongan VIIA, nonlogam elektronegatif kuat)<br>\nDalam satu periode dari kiri ke kanan ($\\text{Na} \\rightarrow \\text{Cl}$), jumlah proton bertambah sehingga muatan inti efektif ($Z_{\\text{eff}}$) meningkat dan jari-jari atom mengecil. Akibatnya, kemampuan inti untuk menarik pasangan elektron ikatan (<strong>keelektronegatifan</strong>) kian kuat. Keelektronegatifan $\\text{Cl} (3{,}0)$ jauh lebih besar daripada $\\text{Na} (0{,}9)$.<br><br>\n<strong>Kunci Jawaban: A</strong>",
    "kode": "25KIM-PRED3-039"
  },
  {
    "id": 40,
    "elemen": "Kimia Lingkungan & Asam-Basa",
    "subelemen": "Pencemaran Udara & Hujan Asam",
    "indikator": "Mengevaluasi efektivitas teknologi flue-gas desulfurization (scrubber CaCO3) dalam mengatasi polusi hujan asam.",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAnalisis air hujan di suatu kawasan industri berat menunjukkan nilai $\\text{pH} = 4{,}5$ (terkategori hujan asam). Fenomena ini dipicu oleh emisi gas buang pembakaran bahan bakar fosil yang mengandung sulfur dioksida ($\\text{SO}_2$) dan nitrogen oksida ($\\text{NO}_x$). Gas-gas tersebut bereaksi dengan uap air di atmosfer membentuk aerosol asam sulfat ($\\text{H}_2\\text{SO}_4$) dan asam nitrat ($\\text{HNO}_3$) yang merusak ekosistem dan korosi infrastruktur.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan prinsip kimia hijau dan reaksi asam-basa, metode penanganan di cerobong asap industri (flue gas) manakah yang paling efektif dan berkesinambungan untuk menetralkan emisi gas asam tersebut sebelum terlepas ke udara?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Mengalirkan gas buang ke dalam larutan asam klorida pekat untuk mengendapkan sulfur."
      },
      {
        "id": "B",
        "text": "Pemasangan unit wet scrubber berbasis suspensi kalsium karbonat (CaCO₃) atau kalsium hidroksida untuk mereaksikan gas asam menjadi garam gipsum (CaSO₄)."
      },
      {
        "id": "C",
        "text": "Membakar kembali gas buang pada suhu di atas 2.000°C dengan oksigen murni."
      },
      {
        "id": "D",
        "text": "Mengencerkan gas buang dengan menambahkan gas karbon monoksida (CO)."
      },
      {
        "id": "E",
        "text": "Menyemprotkan air murni bertekanan tinggi tanpa bahan penetral."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Solusi Kimia Hijau Mengatasi Hujan Asam (Flue-Gas Desulfurization):</strong><br>\n1. <strong>Reaksi Netralisasi Emisi Asam:</strong> Gas $\\text{SO}_2$ bersifat oksida asam. Dengan melewatkan gas cerobong ke dalam <em>wet scrubber</em> yang disemprot suspensi $\\text{CaCO}_3$ atau $\\text{Ca(OH)}_2$, gas $\\text{SO}_2$ dinetralkan secara efisien:<br>\n$$\\text{CaCO}_3(s) + \\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) \\rightarrow \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}(s) + \\text{CO}_2(g)$$\n2. <strong>Keuntungan Ekologis & Ekonomis:</strong> Endapan kalsium sulfat dihidrat (gipsum sintesis) yang dihasilkan tidak beracun dan dapat dimanfaatkan kembali sebagai bahan baku industri semen dan papan dinding (drywall).<br><br>\n<strong>Kunci Jawaban: B</strong>",
    "kode": "25KIM-PRED3-040"
  }
];

if (typeof window !== 'undefined') {
  window.tkaPaket3Data = tkaPaket3Data;
  window.tkaPackages = window.tkaPackages || {};
  window.tkaPackages['paket3'] = {
    id: "paket3",
    title: "Paket 3: Prediksi Resmi TKA Kimia SMA 2025/2026 (40 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 3 (Prediksi 2025/2026 - 40 Soal)",
    badge: "Prediksi 40 Soal",
    total: 40,
    get data() { return tkaPaket3Data; }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaPaket3Data };
}
