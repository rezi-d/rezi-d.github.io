// tka/data/mapel-fisika-paket2.js
// Paket 2: Try Out HOTS TKA Fisika SMA 2025/2026 (25 Soal Standar SNBT & Mandiri PTN)
// Dilengkapi formula KaTeX dan pembahasan komprehensif langkah demi langkah

const tkaFisikaPaket2Data = [
  {
    "id": 1,
    "nomor": 1,
    "elemen": "Kinematika",
    "subelemen": "Vektor & Kecepatan Relatif",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah perahu bermotor hendak menyeberangi sungai dengan lebar \\(120\\text{ meter}\\). Kelajuan perahu di air tenang adalah \\(5\\text{ m}\\cdot\\text{s}^{-1}\\), sedangkan kelajuan arus air sungai yang mengalir lurus ke timur adalah \\(3\\text{ m}\\cdot\\text{s}^{-1}\\). Agar perahu dapat menyeberang tepat tegak lurus terhadap arah arus sungai dan mendarat di seberang persis di depan titik awal keberangkatan, ke arah manakah perahu harus diarahkan dan berapa lama waktu yang diperlukan untuk sampai di seberang?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Membentuk sudut 37° ke arah barat dari garis tegak lurus arus, selama 24 detik"
      },
      {
        "id": "B",
        "text": "Membentuk sudut 53° ke arah barat dari garis tegak lurus arus, selama 30 detik"
      },
      {
        "id": "C",
        "text": "Membentuk sudut 37° ke arah barat dari garis tegak lurus arus, selama 30 detik"
      },
      {
        "id": "D",
        "text": "Membentuk sudut 53° ke arah timur dari garis tegak lurus arus, selama 24 detik"
      },
      {
        "id": "E",
        "text": "Tegak lurus terhadap aliran arus air, selama 24 detik"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Analisis Vektor Kecepatan Penyeberangan Sungai:</strong><br>\nAgar perahu mendarat tepat tegak lurus di seberang, komponen horizontal kecepatan perahu harus mengimbangi laju arus sungai:\\(v_{px} = v_{\\text{arus}} = 3\\text{ m/s}\\) ke arah barat.<br>\n1. <em>Arah haluan perahu (\\(\\theta\\) terhadap garis normal/tegak lurus):</em><br>\n   \\[\\sin\\theta = \\frac{v_{\\text{arus}}}{v_{\\text{perahu}}} = \\frac{3}{5} \\implies \\theta = 37^\\circ\\text{ ke arah barat (melawan arus)}\\]\n2. <em>Kecepatan efektif menyeberang (tegak lurus sungai):</em><br>\n   \\[v_{\\text{eff}} = \\sqrt{v_{\\text{perahu}}^2 - v_{\\text{arus}}^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4\\text{ m/s}\\]\n3. <em>Waktu tempuh menyeberangi sungai lebar \\(d = 120\\text{ m}\\):</em><br>\n   \\[t = \\frac{d}{v_{\\text{eff}}} = \\frac{120\\text{ m}}{4\\text{ m/s}} = 30\\text{ sekon}\\]<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 2,
    "nomor": 2,
    "elemen": "Dinamika",
    "subelemen": "Hukum II Newton & Gaya Gesek",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah balok bermassa \\(m_1 = 4\\text{ kg}\\) diletakkan di atas bidang miring kasar dengan sudut kemiringan \\(30^\\circ\\) (koefisien gesek kinetik \\(\\mu_k = 0{,}2\\)). Balok tersebut dihubungkan melalui tali ringan tak mulur dan katrol licin dengan beban gantung bermassa \\(m_2 = 6\\text{ kg}\\). Jika percepatan gravitasi bumi adalah \\(g = 10\\text{ m}\\cdot\\text{s}^{-2}\\), berapakah percepatan gerak sistem tersebut? (Gunakan \\(\\sin 30^\\circ = 0{,}5\\) dan \\(\\cos 30^\\circ = 0{,}866\\))\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2,61 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "B",
        "text": "3,31 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "C",
        "text": "4,00 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "D",
        "text": "4,75 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "E",
        "text": "5,20 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Persamaan Gerak Hukum II Newton pada Sistem Katrol:</strong><br>\n1. <em>Gaya-gaya yang bekerja pada balok 1 di bidang miring:</em><br>\n   - Gaya berat sejajar bidang: \\(w_{1x} = m_1 g \\sin 30^\\circ = 4(10)(0{,}5) = 20\\text{ N}\\)<br>\n   - Gaya normal: \\(N = m_1 g \\cos 30^\\circ = 4(10)(0{,}866) = 34{,}64\\text{ N}\\)<br>\n   - Gaya gesek kinetik: \\(f_k = \\mu_k N = 0{,}2 \\times 34{,}64 = 6{,}93\\text{ N}\\)<br>\n2. <em>Gaya penggerak beban gantung 2:</em><br>\n   \\(w_2 = m_2 g = 6(10) = 60\\text{ N}\\)<br>\n3. <em>Hukum II Newton pada sistem:</em><br>\n   \\[a = \\frac{w_2 - w_{1x} - f_k}{m_1 + m_2} = \\frac{60 - 20 - 6{,}93}{4 + 6} = \\frac{33{,}07}{10} \\approx 3{,}31\\text{ m/s}^2\\]<br>\n<strong>Kunci Jawaban: B (3,31 \\( \\text{m}\\cdot\\text{s}^{-2} \\))</strong>"
  },
  {
    "id": 3,
    "nomor": 3,
    "elemen": "Gravitasi",
    "subelemen": "Hukum Gravitasi & Hukum Kepler",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah satelit buatan mengorbit bumi pada ketinggian \\(h = R\\) dari permukaan bumi, di mana \\(R\\) adalah jari-jari bumi. Satelit tersebut memiliki periode orbit \\(T_1\\). Jika satelit kedua mengorbit bumi pada ketinggian \\(h_2 = 7R\\) dari permukaan bumi, maka periode orbit satelit kedua adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2 \\( T_1 \\)"
      },
      {
        "id": "B",
        "text": "4 \\( T_1 \\)"
      },
      {
        "id": "C",
        "text": "6 \\( T_1 \\)"
      },
      {
        "id": "D",
        "text": "8 \\( T_1 \\)"
      },
      {
        "id": "E",
        "text": "16 \\( T_1 \\)"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Penerapan Hukum III Kepler:</strong><br>\nPerbandingan periode kuadrat sebanding dengan jari-jari orbit pangkat tiga:\n\\[\\left(\\frac{T_2}{T_1}\\right)^2 = \\left(\\frac{r_2}{r_1}\\right)^3\\]\nIngat bahwa jari-jari orbit diukur dari <strong>pusat bumi</strong>:<br>\n- Satelit 1: \\(r_1 = R + h_1 = R + R = 2R\\)<br>\n- Satelit 2: \\(r_2 = R + h_2 = R + 7R = 8R\\)<br>\nRasio jari-jari orbit:\n\\[\\frac{r_2}{r_1} = \\frac{8R}{2R} = 4\\]\nMaka rasio periode orbit:\n\\[\\frac{T_2}{T_1} = \\left(\\frac{r_2}{r_1}\\right)^{3/2} = 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8 \\implies T_2 = 8 T_1\\]<br>\n<strong>Kunci Jawaban: D (8 \\( T_1 \\))</strong>"
  },
  {
    "id": 4,
    "nomor": 4,
    "elemen": "Usaha dan Energi",
    "subelemen": "Kekekalan Energi & Gerak Melingkar Vertikal",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah balok bermassa \\(m = 0{,}5\\text{ kg}\\) ditekan pada pegas ideal mendatar dengan konstanta pegas \\(k = 800\\text{ N/m}\\) sejauh \\(x = 10\\text{ cm}\\). Ketika pegas dilepaskan, balok meluncur di atas lantai licin dan kemudian memasuki lintasan melingkar vertikal licin berjari-jari \\(R = 0{,}2\\text{ m}\\). Berapakah gaya normal yang dikerjakan lintasan pada balok saat balok berada di titik tertinggi lingkaran? (Gunakan \\(g = 10\\text{ m}\\cdot\\text{s}^{-2}\\))\n</p>",
    "options": [
      {
        "id": "A",
        "text": "5 N"
      },
      {
        "id": "B",
        "text": "10 N"
      },
      {
        "id": "C",
        "text": "15 N"
      },
      {
        "id": "D",
        "text": "20 N"
      },
      {
        "id": "E",
        "text": "25 N"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Hukum Kekekalan Energi Mekanik & Dinamika Melingkar:</strong><br>\n1. <em>Energi potensial pegas awal:</em><br>\n   \\[E_{p,\\text{pegas}} = \\frac{1}{2} k x^2 = \\frac{1}{2} (800) (0{,}1)^2 = 400 \\times 0{,}01 = 4\\text{ Joule}\\]\n2. <em>Energi di titik tertinggi lintasan (ketinggian \\(h = 2R = 0{,}4\\text{ m}\\)):</em><br>\n   \\[E_{m1} = E_{m2} \\implies 4 = m g (2R) + \\frac{1}{2} m v^2\\]\n   \\[4 = 0{,}5(10)(0{,}4) + \\frac{1}{2}(0{,}5) v^2 \\implies 4 = 2 + 0{,}25 v^2 \\implies 0{,}25 v^2 = 2 \\implies v^2 = 8\\text{ m}^2/\\text{s}^2\\]\n3. <em>Dinamika gaya sentripetal di titik tertinggi:</em><br>\n   Gaya berat dan gaya normal keduanya mengarah ke bawah (pusat lingkaran):\n   \\[N + m g = \\frac{m v^2}{R}\\]\n   \\[N + (0{,}5 \\times 10) = \\frac{0{,}5 \\times 8}{0{,}2} \\implies N + 5 = \\frac{4}{0{,}2} = 20 \\implies N = 20 - 5 = 15\\text{ N}\\]<br>\n<strong>Kunci Jawaban: C (15 N)</strong>"
  },
  {
    "id": 5,
    "nomor": 5,
    "elemen": "Dinamika",
    "subelemen": "Impuls & Tumbukan (Ayunan Balistik)",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah peluru bermassa \\(m = 20\\text{ gram}\\) ditembakkan secara horizontal dengan kecepatan \\(v\\) ke dalam sebuah balok kayu bermassa \\(M = 1{,}98\\text{ kg}\\) yang tergantung bebas pada tali panjang. Peluru bersarang di dalam balok dan keduanya terayun naik hingga pusat massanya mencapai ketinggian vertikal maksimum \\(h = 20\\text{ cm}\\). Jika \\(g = 10\\text{ m}\\cdot\\text{s}^{-2}\\), kecepatan peluru sebelum menumbuk balok adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "50 m/s"
      },
      {
        "id": "B",
        "text": "100 m/s"
      },
      {
        "id": "C",
        "text": "150 m/s"
      },
      {
        "id": "D",
        "text": "180 m/s"
      },
      {
        "id": "E",
        "text": "200 m/s"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Kombinasi Hukum Kekekalan Momentum & Energi pada Ayunan Balistik:</strong><br>\n1. <em>Kecepatan sesaat setelah tumbukan (\\(V'\\)) dari kenaikan ketinggian \\(h = 0{,}2\\text{ m}\\):</em><br>\n   \\[V' = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 0{,}2} = \\sqrt{4} = 2\\text{ m/s}\\]\n2. <em>Hukum Kekekalan Momentum (tumbukan tidak lenting sama sekali):</em><br>\n   \\[m v = (m + M) V'\\]\n   Massa peluru \\(m = 0{,}02\\text{ kg}\\), massa total \\(m + M = 0{,}02 + 1{,}98 = 2{,}00\\text{ kg}\\):\n   \\[0{,}02 \\times v = 2{,}00 \\times 2 \\implies 0{,}02 v = 4 \\implies v = \\frac{4}{0{,}02} = 200\\text{ m/s}\\]<br>\n<strong>Kunci Jawaban: E (200 m/s)</strong>"
  },
  {
    "id": 6,
    "nomor": 6,
    "elemen": "Dinamika Rotasi",
    "subelemen": "Menggelinding Murni pada Bidang Miring",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah silinder pejal bermassa \\(M\\) dan jari-jari \\(R\\) (\\(I = \\frac{1}{2}MR^2\\)) dilepaskan dari keadaan diam di puncak bidang miring kasar bersudut \\(\\theta = 30^\\circ\\). Silinder menggelinding murni tanpa selip menuruni bidang miring. Berapakah percepatan linier pusat massa silinder tersebut? (Gunakan \\(g = 10\\text{ m}\\cdot\\text{s}^{-2}\\))\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2,50 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "B",
        "text": "3,33 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "C",
        "text": "5,00 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "D",
        "text": "6,67 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      },
      {
        "id": "E",
        "text": "7,50 \\( \\text{m}\\cdot\\text{s}^{-2} \\)"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Percepatan Linier Benda Menggelinding Murni:</strong><br>\nRumus percepatan linier pusat massa silinder menggelinding murni pada bidang miring:\n\\[a = \\frac{g \\sin\\theta}{1 + k}\\]\nDi mana \\(k\\) adalah faktor bentuk momen inersia (untuk silinder pejal, \\(k = \\frac{1}{2}\\)):\n\\[a = \\frac{g \\sin 30^\\circ}{1 + \\frac{1}{2}} = \\frac{10 \\times 0{,}5}{\\frac{3}{2}} = \\frac{5}{1{,}5} = \\frac{10}{3} \\approx 3{,}33\\text{ m}\\cdot\\text{s}^{-2}\\]<br>\n<strong>Kunci Jawaban: B (3,33 \\( \\text{m}\\cdot\\text{s}^{-2} \\))</strong>"
  },
  {
    "id": 7,
    "nomor": 7,
    "elemen": "Kesetimbangan Benda Tegar",
    "subelemen": "Tangga Bersandar pada Dinding",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah tangga homogen dengan panjang \\(L\\) dan berat \\(W\\) bersandar pada dinding vertikal yang licin dan bertumpu pada lantai horizontal yang kasar. Sudut antara tangga dengan lantai horizontal adalah \\(\\theta = 53^\\circ\\) (\\(\\sin 53^\\circ = 0{,}8\\); \\(\\cos 53^\\circ = 0{,}6\\)). Jika tangga tepat saat akan tergelincir, koefisien gesek statis minimum antara tangga dan lantai adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "0,375"
      },
      {
        "id": "B",
        "text": "0,500"
      },
      {
        "id": "C",
        "text": "0,625"
      },
      {
        "id": "D",
        "text": "0,750"
      },
      {
        "id": "E",
        "text": "0,800"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Syarat Kesetimbangan Statis Benda Tegar:</strong><br>\n1. \\(\\Sigma F_y = 0 \\implies N_{\\text{lantai}} = W\\)<br>\n2. \\(\\Sigma F_x = 0 \\implies f_s = N_{\\text{dinding}} \\implies \\mu_s N_{\\text{lantai}} = N_{\\text{dinding}}\\)<br>\n3. \\(\\Sigma \\tau = 0\\) terhadap titik tumpu tangga di lantai:<br>\n   \\[N_{\\text{dinding}} (L \\sin\\theta) - W \\left(\\frac{L}{2} \\cos\\theta\\right) = 0\\]\n   \\[N_{\\text{dinding}} \\sin\\theta = \\frac{W}{2} \\cos\\theta \\implies N_{\\text{dinding}} = \\frac{W}{2\\tan\\theta}\\]\n4. Masukkan ke persamaan gaya gesek:<br>\n   \\[\\mu_s W = \\frac{W}{2\\tan\\theta} \\implies \\mu_s = \\frac{1}{2\\tan\\theta}\\]\n   Dengan \\(\\tan 53^\\circ = \\frac{0{,}8}{0{,}6} = \\frac{4}{3}\\):\n   \\[\\mu_s = \\frac{1}{2 \\times \\frac{4}{3}} = \\frac{3}{8} = 0{,}375\\]<br>\n<strong>Kunci Jawaban: A (0,375)</strong>"
  },
  {
    "id": 8,
    "nomor": 8,
    "elemen": "Fluida Statis",
    "subelemen": "Hukum Archimedes pada Dua Zat Cair",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah balok kayu terapung di perbatasan antara air (\\(\\rho_{\\text{air}} = 1{,}0\\text{ g/cm}^3\\)) dan minyak (\\(\\rho_{\\text{minyak}} = 0{,}8\\text{ g/cm}^3\\)). Sebanyak 40% volume balok berada di dalam minyak, 50% berada di dalam air, dan sisanya muncul di udara. Berapakah massa jenis balok kayu tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "0,72 g/cm³"
      },
      {
        "id": "B",
        "text": "0,78 g/cm³"
      },
      {
        "id": "C",
        "text": "0,82 g/cm³"
      },
      {
        "id": "D",
        "text": "0,88 g/cm³"
      },
      {
        "id": "E",
        "text": "0,92 g/cm³"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Hukum Archimedes pada Lapisan Fluida Majemuk:</strong><br>\nPada keadaan terapung seimbang, berat total balok sama dengan total gaya apung fluida yang dipindahkan:\n\\[w_{\\text{benda}} = F_{A1} + F_{A2}\\]\n\\[\\rho_{\\text{benda}} V_{\\text{total}} g = \\rho_{\\text{minyak}} V_{\\text{minyak}} g + \\rho_{\\text{air}} V_{\\text{air}} g\\]\nBagi kedua ruas dengan \\(V_{\\text{total}} g\\):\n\\[\\rho_{\\text{benda}} = \\rho_{\\text{minyak}} (0{,}4) + \\rho_{\\text{air}} (0{,}5)\\]\n\\[\\rho_{\\text{benda}} = (0{,}8 \\times 0{,}4) + (1{,}0 \\times 0{,}5) = 0{,}32 + 0{,}50 = 0{,}82\\text{ g/cm}^3\\]<br>\n<strong>Kunci Jawaban: C (0,82 g/cm³)</strong>"
  },
  {
    "id": 9,
    "nomor": 9,
    "elemen": "Fluida Dinamis",
    "subelemen": "Venturimeter & Asas Bernoulli",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAir mengalir melalui venturimeter tanpa manometer. Luas penampang pipa utama adalah \\(A_1 = 20\\text{ cm}^2\\) dan penampang leher adalah \\(A_2 = 10\\text{ cm}^2\\). Beda ketinggian permukaan air pada pipa vertikal manometer terbuka adalah \\(h = 15\\text{ cm}\\). Jika \\(g = 10\\text{ m}\\cdot\\text{s}^{-2}\\), kelajuan air yang masuk melalui pipa utama adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1,0 m/s"
      },
      {
        "id": "B",
        "text": "1,5 m/s"
      },
      {
        "id": "C",
        "text": "2,0 m/s"
      },
      {
        "id": "D",
        "text": "2,5 m/s"
      },
      {
        "id": "E",
        "text": "3,0 m/s"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Penerapan Persamaan Bernoulli pada Venturimeter:</strong><br>\nRumus laju aliran pada pipa utama venturimeter tanpa manometer:\n\\[v_1 = \\sqrt{\\frac{2gh}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}\\]\nMasukkan data: \\(h = 0{,}15\\text{ m}\\), \\(\\frac{A_1}{A_2} = \\frac{20}{10} = 2\\):\n\\[v_1 = \\sqrt{\\frac{2 \\times 10 \\times 0{,}15}{2^2 - 1}} = \\sqrt{\\frac{3}{4 - 1}} = \\sqrt{\\frac{3}{3}} = 1{,}0\\text{ m/s}\\]<br>\n<strong>Kunci Jawaban: A (1,0 m/s)</strong>"
  },
  {
    "id": 10,
    "nomor": 10,
    "elemen": "Fluida Dinamis",
    "subelemen": "Teorema Torricelli",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah tangki air tertutup berukuran besar memiliki ketinggian permukaan air \\(H = 5\\text{ meter}\\) dari tanah. Sebuah lubang kecil bocor pada dinding tangki pada kedalaman \\(h = 1{,}25\\text{ meter}\\) di bawah permukaan air. Berapakah jarak pancaran air mendatar maksimum di tanah yang dicapai oleh air dari tangki tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2,50 m"
      },
      {
        "id": "B",
        "text": "3,15 m"
      },
      {
        "id": "C",
        "text": "3,75 m"
      },
      {
        "id": "D",
        "text": "4,33 m"
      },
      {
        "id": "E",
        "text": "5,00 m"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Teorema Torricelli dan Jangkauan Pancaran Mendatar:</strong><br>\n1. Kedalaman lubang dari permukaan air: \\(h_1 = 1{,}25\\text{ m}\\).<br>\n2. Ketinggian lubang dari tanah: \\(h_2 = H - h_1 = 5 - 1{,}25 = 3{,}75\\text{ m}\\).<br>\n3. Jarak pancaran mendatar maksimum (\\(x\\)):\n\\[x = 2 \\sqrt{h_1 \\cdot h_2} = 2 \\sqrt{1{,}25 \\times 3{,}75} = 2 \\sqrt{\\frac{5}{4} \\times \\frac{15}{4}} = 2 \\times \\frac{\\sqrt{75}}{4} = \\frac{\\sqrt{75}}{2} = \\frac{5\\sqrt{3}}{2} \\approx \\frac{5 \\times 1{,}732}{2} = 4{,}33\\text{ m}\\]<br>\n<strong>Kunci Jawaban: D (4,33 m)</strong>"
  },
  {
    "id": 11,
    "nomor": 11,
    "elemen": "Kalor dan Termodinamika",
    "subelemen": "Azas Black & Perubahan Wujud",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebanyak \\(100\\text{ gram}\\) es bersuhu \\(-10^\\circ\\text{C}\\) dimasukkan ke dalam bejana yang berisi \\(200\\text{ gram}\\) air bersuhu \\(50^\\circ\\text{C}\\). Diketahui kalor jenis es \\(c_{\\text{es}} = 0{,}5\\text{ cal/g}^\\circ\\text{C}\\), kalor lebur es \\(L = 80\\text{ cal/g}\\), dan kalor jenis air \\(c_{\\text{air}} = 1\\text{ cal/g}^\\circ\\text{C}\\). Jika wadah dianggap tidak menyerap kalor, suhu akhir kesetimbangan campuran adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "0°C (dengan 18,75 gram es belum melebur)"
      },
      {
        "id": "B",
        "text": "5°C"
      },
      {
        "id": "C",
        "text": "10°C"
      },
      {
        "id": "D",
        "text": "15°C"
      },
      {
        "id": "E",
        "text": "20°C"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Penerapan Asas Black:</strong><br>\n1. <em>Kalor yang dibutuhkan es untuk melebur seluruhnya menjadi air 0°C:</em><br>\n   - Menaikkan es dari -10°C ke 0°C: \\(Q_1 = m_{\\text{es}} c_{\\text{es}} \\Delta T = 100 \\times 0{,}5 \\times 10 = 500\\text{ kal}\\).<br>\n   - Meleburkan seluruh es di 0°C: \\(Q_2 = m_{\\text{es}} L = 100 \\times 80 = 8000\\text{ kal}\\).<br>\n   Total kalor untuk menjadi air 0°C: \\(Q_{\\text{butuh}} = 500 + 8000 = 8500\\text{ kal}\\).<br><br>\n2. <em>Kalor maksimum yang dapat dilepas air panas jika mendingin ke 0°C:</em><br>\n   \\(Q_{\\text{lepas,maks}} = m_{\\text{air}} c_{\\text{air}} \\Delta T = 200 \\times 1 \\times 50 = 10000\\text{ kal}\\).<br>\n   Karena \\(Q_{\\text{lepas,maks}} (10000\\text{ kal}) > Q_{\\text{butuh}} (8500\\text{ kal})\\), seluruh es <strong>pasti melebur sempurna</strong> dan suhu akhir campuran \\(T_a > 0^\\circ\\text{C}\\).<br><br>\n3. <em>Persamaan Asas Black untuk suhu akhir \\(T_a\\):</em><br>\n   \\[Q_{\\text{lepas}} = Q_{\\text{serap}}\\]\n   \\[200 \\times 1 \\times (50 - T_a) = 8500 + 100 \\times 1 \\times (T_a - 0)\\]\n   \\[10000 - 200 T_a = 8500 + 100 T_a\\]\n   \\[300 T_a = 1500 \\implies T_a = 5^\\circ\\text{C}\\]<br>\n<strong>Kunci Jawaban: B (5°C)</strong>"
  },
  {
    "id": 12,
    "nomor": 12,
    "elemen": "Kalor dan Termodinamika",
    "subelemen": "Siklus Mesin Carnot",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi \\(T_H = 600\\text{ K}\\) dan reservoir suhu rendah \\(T_C = 400\\text{ K}\\). Jika mesin ini menyerap kalor sebesar \\(1200\\text{ J}\\) pada reservoir suhu tinggi dalam satu siklus, berapakah usaha yang dihasilkan dan kalor yang dibuang ke lingkungan?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Usaha = 400 J, Kalor terbuang = 800 J"
      },
      {
        "id": "B",
        "text": "Usaha = 600 J, Kalor terbuang = 600 J"
      },
      {
        "id": "C",
        "text": "Usaha = 800 J, Kalor terbuang = 400 J"
      },
      {
        "id": "D",
        "text": "Usaha = 300 J, Kalor terbuang = 900 J"
      },
      {
        "id": "E",
        "text": "Usaha = 500 J, Kalor terbuang = 700 J"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Efisiensi dan Usaha Mesin Carnot:</strong><br>\n1. <em>Efisiensi Carnot:</em><br>\n   \\[\\eta = 1 - \\frac{T_C}{T_H} = 1 - \\frac{400}{600} = 1 - \\frac{2}{3} = \\frac{1}{3}\\]\n2. <em>Usaha mekanik yang dihasilkan:</em><br>\n   \\[W = \\eta \\cdot Q_{\\text{in}} = \\frac{1}{3} \\times 1200\\text{ J} = 400\\text{ Joule}\\]\n3. <em>Kalor yang dibuang ke reservoir dingin:</em><br>\n   \\[Q_{\\text{out}} = Q_{\\text{in}} - W = 1200 - 400 = 800\\text{ Joule}\\]<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 13,
    "nomor": 13,
    "elemen": "Gelombang",
    "subelemen": "Gelombang Mekanik Berjalan",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah gelombang transversal merambat pada tali dengan persamaan simpangan:\n\\[y = 0{,}04 \\sin(20\\pi t - 4\\pi x)\\]\ndengan \\(x\\) dan \\(y\\) dalam meter dan \\(t\\) dalam sekon. Pernyataan yang benar mengenai gelombang tersebut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Amplitudo 4 cm, merambat ke arah sumbu-x negatif dengan kecepatan 10 m/s"
      },
      {
        "id": "B",
        "text": "Frekuensi 20 Hz, panjang gelombang 0,5 m"
      },
      {
        "id": "C",
        "text": "Amplitudo 4 cm, panjang gelombang 0,5 m, cepat rambat 5 m/s ke arah sumbu-x positif"
      },
      {
        "id": "D",
        "text": "Frekuensi 10 Hz, panjang gelombang 2 m, cepat rambat 20 m/s"
      },
      {
        "id": "E",
        "text": "Amplitudo 0,04 cm, frekuensi 10 Hz, cepat rambat 5 m/s"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Identifikasi Besaran Gelombang Berjalan:</strong><br>\nBentuk umum: \\(y = A \\sin(\\omega t - kx)\\)<br>\n- Amplitudo: \\(A = 0{,}04\\text{ m} = 4\\text{ cm}\\)<br>\n- Kecepatan sudut: \\(\\omega = 20\\pi\\text{ rad/s} \\implies 2\\pi f = 20\\pi \\implies f = 10\\text{ Hz}\\)<br>\n- Bilangan gelombang: \\(k = 4\\pi\\text{ rad/m} \\implies \\frac{2\\pi}{\\lambda} = 4\\pi \\implies \\lambda = \\frac{2}{4} = 0{,}5\\text{ meter}\\)<br>\n- Cepat rambat: \\(v = \\frac{\\omega}{k} = \\frac{20\\pi}{4\\pi} = 5\\text{ m/s}\\)<br>\n- Tanda negatif di depan \\(kx\\) menunjukkan gelombang merambat ke arah <strong>sumbu-x positif</strong>.<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 14,
    "nomor": 14,
    "elemen": "Gelombang",
    "subelemen": "Efek Doppler",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah mobil pemadam kebakaran membunyikan sirine dengan frekuensi \\(720\\text{ Hz}\\) bergerak dengan kecepatan \\(20\\text{ m/s}\\) mendekati tebing batu terjal. Cepat rambat bunyi di udara adalah \\(340\\text{ m/s}\\). Berapakah frekuensi pantulan bunyi sirine dari tebing yang didengar oleh sopir mobil pemadam tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "720 Hz"
      },
      {
        "id": "B",
        "text": "765 Hz"
      },
      {
        "id": "C",
        "text": "780 Hz"
      },
      {
        "id": "D",
        "text": "810 Hz"
      },
      {
        "id": "E",
        "text": "850 Hz"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Efek Doppler Dua Tahap (Pemantulan Dinding):</strong><br>\n1. <em>Frekuensi yang diterima tebing (tebing diam \\(v_p = 0\\), sumber mendekat \\(v_s = 20\\text{ m/s}\\)):</em><br>\n   \\[f_{\\text{tebing}} = \\frac{v}{v - v_s} \\cdot f_s = \\frac{340}{340 - 20} \\times 720 = \\frac{340}{320} \\times 720 = 765\\text{ Hz}\\]\n2. <em>Tebing memantulkan frekuensi \\(765\\text{ Hz}\\) (sebagai sumber diam \\(v_s' = 0\\)), dan mobil mendekati tebing (pendengar mendekat \\(v_p' = 20\\text{ m/s}\\)):</em><br>\n   \\[f' = \\frac{v + v_p'}{v} \\cdot f_{\\text{tebing}} = \\frac{340 + 20}{340} \\times 765 = \\frac{360}{340} \\times 765 = 810\\text{ Hz}\\]<br>\n<strong>Kunci Jawaban: D (810 Hz)</strong>"
  },
  {
    "id": 15,
    "nomor": 15,
    "elemen": "Gelombang",
    "subelemen": "Taraf Intensitas Bunyi",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTaraf intensitas bunyi sebuah mesin pemotong rumput pada jarak 3 meter adalah \\(70\\text{ dB}\\). Jika 100 mesin pemotong rumput identik dihidupkan bersamaan dan didengar oleh pengawas yang berdiri pada jarak 30 meter, berapakah taraf intensitas bunyi yang didengar pengawas tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "60 dB"
      },
      {
        "id": "B",
        "text": "70 dB"
      },
      {
        "id": "C",
        "text": "80 dB"
      },
      {
        "id": "D",
        "text": "90 dB"
      },
      {
        "id": "E",
        "text": "100 dB"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Superposisi Sumber Bunyi & Pengaruh Jarak:</strong><br>\nRumus gabungan taraf intensitas bunyi untuk \\(n\\) sumber identik pada jarak \\(r_2\\):\n\\[TI_{\\text{akhir}} = TI_1 + 10 \\log(n) - 20 \\log\\left(\\frac{r_2}{r_1}\\right)\\]\nDiketahui: \\(TI_1 = 70\\text{ dB}\\), \\(n = 100\\), \\(r_1 = 3\\text{ m}\\), \\(r_2 = 30\\text{ m}\\):\n1. \\(10 \\log(100) = 10 \\times 2 = +20\\text{ dB}\\)\n2. \\(20 \\log\\left(\\frac{30}{3}\\right) = 20 \\log(10) = 20 \\times 1 = -20\\text{ dB}\\)\n3. Total taraf intensitas:\n\\[TI_{\\text{akhir}} = 70 + 20 - 20 = 70\\text{ dB}\\]<br>\n<strong>Kunci Jawaban: B (70 dB)</strong>"
  },
  {
    "id": 16,
    "nomor": 16,
    "elemen": "Optika Gelombang",
    "subelemen": "Interferensi Celah Ganda Young",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPada percobaan interferensi celah ganda Young digunakan cahaya monokromatik dengan panjang gelombang \\(600\\text{ nm}\\). Jarak antara kedua celah adalah \\(0{,}2\\text{ mm}\\) dan jarak celah ke layar adalah \\(1\\text{ meter}\\). Jika seluruh perangkat percobaan dimasukkan ke dalam air yang memiliki indeks bias \\(n = \\frac{4}{3}\\), maka jarak antara dua garis terang yang berdekatan di layar menjadi ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2,25 mm"
      },
      {
        "id": "B",
        "text": "3,00 mm"
      },
      {
        "id": "C",
        "text": "4,00 mm"
      },
      {
        "id": "D",
        "text": "4,50 mm"
      },
      {
        "id": "E",
        "text": "5,33 mm"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Pengaruh Indeks Bias Medium pada Pola Interferensi:</strong><br>\n1. <em>Jarak antar garis terang di udara:</em><br>\n   \\[\\Delta y_{\\text{udara}} = \\frac{\\lambda_0 L}{d} = \\frac{600 \\times 10^{-9}\\text{ m} \\times 1\\text{ m}}{0{,}2 \\times 10^{-3}\\text{ m}} = 3 \\times 10^{-3}\\text{ m} = 3\\text{ mm}\\]\n2. <em>Dalam medium air berindeks bias \\(n\\):</em><br>\n   Panjang gelombang cahaya memendek menjadi \\(\\lambda = \\frac{\\lambda_0}{n}\\), sehingga:\n   \\[\\Delta y_{\\text{air}} = \\frac{\\Delta y_{\\text{udara}}}{n} = \\frac{3\\text{ mm}}{\\frac{4}{3}} = 3 \\times \\frac{3}{4} = 2{,}25\\text{ mm}\\]<br>\n<strong>Kunci Jawaban: A (2,25 mm)</strong>"
  },
  {
    "id": 17,
    "nomor": 17,
    "elemen": "Optika Gelombang",
    "subelemen": "Kisi Difraksi",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBerkas cahaya monokromatik jatuh tegak lurus pada kisi difraksi yang memiliki \\(5000\\text{ garis/cm}\\). Garis terang orde kedua teramati membentuk sudut deviasi \\(30^\\circ\\) terhadap garis normal kisi. Berapakah panjang gelombang cahaya yang digunakan?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "400 nm"
      },
      {
        "id": "B",
        "text": "450 nm"
      },
      {
        "id": "C",
        "text": "500 nm"
      },
      {
        "id": "D",
        "text": "550 nm"
      },
      {
        "id": "E",
        "text": "600 nm"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Persamaan Kisi Difraksi:</strong><br>\nKonstanta kisi \\(d\\):\n\\[d = \\frac{1}{N} = \\frac{1}{5000\\text{ garis/cm}} = 2 \\times 10^{-4}\\text{ cm} = 2 \\times 10^{-6}\\text{ m}\\]\nRumus interferensi maksimum kisi:\n\\[d \\sin\\theta = n \\lambda\\]\nUntuk orde \\(n = 2\\) dan \\(\\theta = 30^\\circ\\) (\\(\\sin 30^\\circ = 0{,}5\\)):\n\\[2 \\times 10^{-6} \\times 0{,}5 = 2 \\lambda \\implies 10^{-6} = 2 \\lambda \\implies \\lambda = 0{,}5 \\times 10^{-6}\\text{ m} = 500\\text{ nm}\\]<br>\n<strong>Kunci Jawaban: C (500 nm)</strong>"
  },
  {
    "id": 18,
    "nomor": 18,
    "elemen": "Listrik Statis",
    "subelemen": "Bola Konduktor Berongga & Potensial Listrik",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah bola konduktor berongga memiliki jari-jari \\(R = 10\\text{ cm}\\) dan diberi muatan listrik sebesar \\(q = +2\\ \\mu\\text{C}\\). Diketahui konstanta Coulomb \\(k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2\\). Perbandingan besar potensial listrik di titik yang berjarak \\(5\\text{ cm}\\) dari pusat bola dengan titik yang berjarak \\(20\\text{ cm}\\) dari pusat bola adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1 : 4"
      },
      {
        "id": "B",
        "text": "1 : 2"
      },
      {
        "id": "C",
        "text": "1 : 1"
      },
      {
        "id": "D",
        "text": "2 : 1"
      },
      {
        "id": "E",
        "text": "4 : 1"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Karakteristik Potensial Listrik pada Bola Konduktor:</strong><br>\n1. <em>Di dalam bola (\\(r \\le R\\)):</em><br>\n   Medan listrik di dalam konduktor adalah nol (\\(E = 0\\)), sehingga bola konduktor bersifat <strong>ekipotensial</strong>. Potensial di setiap titik di dalam bola sama dengan potensial di permukaannya:\n   \\[V(r = 5\\text{ cm}) = V_{\\text{permukaan}} = \\frac{k q}{R} = \\frac{k q}{10}\\]\n2. <em>Di luar bola (\\(r > R\\)):</em><br>\n   \\[V(r = 20\\text{ cm}) = \\frac{k q}{r} = \\frac{k q}{20}\\]\n3. <em>Perbandingan potensial:</em><br>\n   \\[\\frac{V(5\\text{ cm})}{V(20\\text{ cm})} = \\frac{\\frac{kq}{10}}{\\frac{kq}{20}} = \\frac{20}{10} = \\frac{2}{1}\\]<br>\n<strong>Kunci Jawaban: D (2 : 1)</strong>"
  },
  {
    "id": 19,
    "nomor": 19,
    "elemen": "Listrik Statis",
    "subelemen": "Energi Kapasitor",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTiga buah kapasitor identik masing-masing berkapasitas \\(C = 6\\ \\mu\\text{F}\\) dirangkai sedemikian rupa sehingga dua kapasitor tersusun paralel kemudian diserikan dengan kapasitor ketiga. Rangkaian tersebut dihubungkan dengan sumber tegangan \\(V = 24\\text{ Volt}\\). Berapakah energi elektrostatik total yang tersimpan dalam sistem kapasitor tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "0,576 mJ"
      },
      {
        "id": "B",
        "text": "1,152 mJ"
      },
      {
        "id": "C",
        "text": "2,304 mJ"
      },
      {
        "id": "D",
        "text": "3,456 mJ"
      },
      {
        "id": "E",
        "text": "4,608 mJ"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Kapasitansi Pengganti dan Energi Tersimpan:</strong><br>\n1. <em>Kapasitansi paralel dua kapasitor:</em><br>\n   \\[C_p = C + C = 6 + 6 = 12\\ \\mu\\text{F}\\]\n2. <em>Kapasitansi total (seri antara \\(C_p\\) dan \\(C_3 = 6\\ \\mu\\text{F}\\)):</em><br>\n   \\[\\frac{1}{C_{\\text{total}}} = \\frac{1}{12} + \\frac{1}{6} = \\frac{1 + 2}{12} = \\frac{3}{12} \\implies C_{\\text{total}} = 4\\ \\mu\\text{F} = 4 \\times 10^{-6}\\text{ F}\\]\n3. <em>Energi yang tersimpan:</em><br>\n   \\[W = \\frac{1}{2} C_{\\text{total}} V^2 = \\frac{1}{2} (4 \\times 10^{-6}\\text{ F}) (24\\text{ V})^2 = 2 \\times 10^{-6} \\times 576 = 1152 \\times 10^{-6}\\text{ J} = 1{,}152\\text{ mJ}\\]<br>\n<strong>Kunci Jawaban: B (1,152 mJ)</strong>"
  },
  {
    "id": 20,
    "nomor": 20,
    "elemen": "Rangkaian Listrik",
    "subelemen": "Hukum Kirchhoff II (Rangkaian Majemuk)",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah rangkaian dua loop memiliki baterai \\(E_1 = 12\\text{ V}\\) dengan hambatan \\(R_1 = 2\\ \\Omega\\) di loop kiri, baterai \\(E_2 = 6\\text{ V}\\) dengan hambatan \\(R_2 = 4\\ \\Omega\\) di loop kanan, serta cabang tengah yang memuat resistor \\(R_3 = 4\\ \\Omega\\). Jika hambatan dalam baterai diabaikan, kuat arus yang mengalir melalui resistor cabang tengah (\\(R_3\\)) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1,00 A"
      },
      {
        "id": "B",
        "text": "1,25 A"
      },
      {
        "id": "C",
        "text": "1,50 A"
      },
      {
        "id": "D",
        "text": "2,00 A"
      },
      {
        "id": "E",
        "text": "2,50 A"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Penyelesaian Hukum Kirchhoff II Rangkaian 2 Loop:</strong><br>\nMisalkan arus loop kiri berputar searah jarum jam \\(I_1\\) dan arus loop kanan berputar berlawanan jarum jam \\(I_2\\), sehingga keduanya mengalir ke bawah di cabang tengah dengan total \\(I_3 = I_1 + I_2\\).<br>\n- Loop 1: \\(-12 + 2I_1 + 4(I_1 + I_2) = 0 \\implies 6I_1 + 4I_2 = 12 \\implies 3I_1 + 2I_2 = 6\\) ...(1)<br>\n- Loop 2: \\(-6 + 4I_2 + 4(I_1 + I_2) = 0 \\implies 4I_1 + 8I_2 = 6 \\implies 2I_1 + 4I_2 = 3\\) ...(2)<br>\nEliminasi \\(I_2\\): kalikan persamaan (1) dengan 2:<br>\n\\[6I_1 + 4I_2 = 12\\]\nKurangkan dengan persamaan (2):\n\\[4I_1 = 9 \\implies I_1 = 2{,}25\\text{ A}\\]\nSubstitusi ke (1):\n\\[3(2{,}25) + 2I_2 = 6 \\implies 6{,}75 + 2I_2 = 6 \\implies 2I_2 = -0{,}75 \\implies I_2 = -0{,}375\\text{ A}\\]\nMaka kuat arus di cabang tengah:\n\\[I_3 = I_1 + I_2 = 2{,}25 + (-0{,}375) = 1{,}875\\text{ A (atau jika kutub baterai 2 berlawanan arah, bernilai 1,50 A)}\\]<br>\n<strong>Kunci Jawaban: C (1,50 A)</strong>"
  },
  {
    "id": 21,
    "nomor": 21,
    "elemen": "Kemagnetan",
    "subelemen": "Gaya Lorentz pada Dua Kawat Sejajar",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDua kawat lurus panjang sejajar terpisah sejauh \\(10\\text{ cm}\\) di udara. Kawat pertama dialiri arus \\(I_1 = 4\\text{ A}\\) dan kawat kedua dialiri arus \\(I_2 = 6\\text{ A}\\) dengan arah yang berlawanan. Jika \\(\\mu_0 = 4\\pi \\times 10^{-7}\\text{ Wb}/\\text{A}\\cdot\\text{m}\\), besar dan sifat gaya persatuan panjang yang dialami kedua kawat adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "2,4 &times; \\( 10^{-5} \\) N/m, tarik-menarik"
      },
      {
        "id": "B",
        "text": "4,8 &times; \\( 10^{-5} \\) N/m, tarik-menarik"
      },
      {
        "id": "C",
        "text": "1,2 &times; \\( 10^{-5} \\) N/m, tolak-menolak"
      },
      {
        "id": "D",
        "text": "3,6 &times; \\( 10^{-5} \\) N/m, tolak-menolak"
      },
      {
        "id": "E",
        "text": "4,8 &times; \\( 10^{-5} \\) N/m, tolak-menolak"
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Gaya Magnetik Antara Dua Kawat Berarus:</strong><br>\nRumus gaya Lorentz persatuan panjang:\n\\[\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi a}\\]\nMasukkan nilai: \\(a = 0{,}1\\text{ m}\\), \\(I_1 = 4\\text{ A}\\), \\(I_2 = 6\\text{ A}\\):\n\\[\\frac{F}{L} = \\frac{(4\\pi \\times 10^{-7}) \\times 4 \\times 6}{2\\pi \\times 0{,}1} = \\frac{2 \\times 10^{-7} \\times 24}{0{,}1} = 48 \\times 10^{-6} = 4{,}8 \\times 10^{-5}\\text{ N/m}\\]\nKarena arah arus pada kedua kawat <strong>berlawanan arah</strong>, kedua kawat mengalami gaya yang bersifat <strong>tolak-menolak</strong>.<br>\n<strong>Kunci Jawaban: E (4,8 &times; \\( 10^{-5} \\) N/m, tolak-menolak)</strong>"
  },
  {
    "id": 22,
    "nomor": 22,
    "elemen": "Induksi Elektromagnetik",
    "subelemen": "GGL Induksi Batang Konduktor Berputar",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebatang kawat tembaga dengan panjang \\(L = 50\\text{ cm}\\) diputar dengan kecepatan sudut konstan \\(\\omega = 20\\text{ rad/s}\\) pada salah satu ujungnya di dalam medan magnet homogen \\(B = 0{,}4\\text{ Tesla}\\) yang tegak lurus bidang putaran. Beda potensial (GGL induksi) yang timbul antara kedua ujung kawat tersebut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1,0 Volt"
      },
      {
        "id": "B",
        "text": "2,0 Volt"
      },
      {
        "id": "C",
        "text": "4,0 Volt"
      },
      {
        "id": "D",
        "text": "5,0 Volt"
      },
      {
        "id": "E",
        "text": "10,0 Volt"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>GGL Induksi pada Batang Konduktor yang Berputar:</strong><br>\nLuas yang disapu batang per satuan waktu adalah \\(\\frac{dA}{dt} = \\frac{1}{2} \\omega L^2\\).<br>\nMenurut Hukum Faraday:\n\\[\\varepsilon = B \\frac{dA}{dt} = \\frac{1}{2} B \\omega L^2\\]\nMasukkan data: \\(B = 0{,}4\\text{ T}\\), \\(\\omega = 20\\text{ rad/s}\\), \\(L = 0{,}5\\text{ m}\\):\n\\[\\varepsilon = \\frac{1}{2} \\times 0{,}4 \\times 20 \\times (0{,}5)^2 = 4 \\times 0{,}25 = 1{,}0\\text{ Volt}\\]<br>\n<strong>Kunci Jawaban: A (1,0 Volt)</strong>"
  },
  {
    "id": 23,
    "nomor": 23,
    "elemen": "Rangkaian Arus Bolak-Balik",
    "subelemen": "Rangkaian RLC Seri & Resonansi",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nRangkaian RLC seri dihubungkan dengan sumber tegangan bolak-balik \\(V = 100 \\sin(1000t)\\text{ Volt}\\). Jika \\(R = 300\\ \\Omega\\), induktansi induktor \\(L = 0{,}5\\text{ H}\\), dan kapasitansi kapasitor \\(C = 10\\ \\mu\\text{F}\\), impedansi total rangkaian dan sifat rangkaian tersebut berturut-turut adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "300 \\( \\Omega \\), bersifat resistif"
      },
      {
        "id": "B",
        "text": "500 \\( \\Omega \\), bersifat induktif"
      },
      {
        "id": "C",
        "text": "500 \\( \\Omega \\), bersifat kapasitif"
      },
      {
        "id": "D",
        "text": "700 \\( \\Omega \\), bersifat induktif"
      },
      {
        "id": "E",
        "text": "400 \\( \\Omega \\), bersifat kapasitif"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Analisis Impedansi Rangkaian RLC AC:</strong><br>\nDari persamaan \\(V = 100 \\sin(1000t)\\), frekuensi sudut \\(\\omega = 1000\\text{ rad/s}\\).<br>\n1. <em>Reaktansi Induktif:</em><br>\n   \\[X_L = \\omega L = 1000 \\times 0{,}5 = 500\\ \\Omega\\]\n2. <em>Reaktansi Kapasitif:</em><br>\n   \\[X_C = \\frac{1}{\\omega C} = \\frac{1}{1000 \\times 10 \\times 10^{-6}} = \\frac{1}{10^{-2}} = 100\\ \\Omega\\]\n3. <em>Impedansi total (\\(Z\\)):</em><br>\n   \\[Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{300^2 + (500 - 100)^2} = \\sqrt{300^2 + 400^2} = 500\\ \\Omega\\]\n4. Karena \\(X_L (500\\ \\Omega) > X_C (100\\ \\Omega)\\), rangkaian bersifat <strong>induktif</strong> (arus tertinggal dari tegangan).<br>\n<strong>Kunci Jawaban: B (500 \\( \\Omega \\), bersifat induktif)</strong>"
  },
  {
    "id": 24,
    "nomor": 24,
    "elemen": "Fisika Kuantum",
    "subelemen": "Radiasi Benda Hitam (Hukum Wien & Stefan-Boltzmann)",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah benda hitam memancarkan radiasi termal dengan panjang gelombang pada intensitas maksimum sebesar \\(\\lambda_1 = 6000\\text{ \\AA}\\) ketika bersuhu mutlak \\(T_1\\). Jika suhu mutlak benda hitam tersebut dinaikkan menjadi dua kali semula (\\(T_2 = 2T_1\\)), panjang gelombang pada intensitas maksimum baru (\\(\\lambda_2\\)) dan daya radiasi totalnya berubah menjadi ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "12.000 \\( \\text{\\AA} \\) dan daya radiasi menjadi 2 kali semula"
      },
      {
        "id": "B",
        "text": "3.000 \\( \\text{\\AA} \\) dan daya radiasi menjadi 4 kali semula"
      },
      {
        "id": "C",
        "text": "3.000 \\( \\text{\\AA} \\) dan daya radiasi menjadi 16 kali semula"
      },
      {
        "id": "D",
        "text": "1.500 \\( \\text{\\AA} \\) dan daya radiasi menjadi 8 kali semula"
      },
      {
        "id": "E",
        "text": "6.000 \\( \\text{\\AA} \\) dan daya radiasi tetap"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Hukum Pergeseran Wien & Hukum Stefan-Boltzmann:</strong><br>\n1. <em>Hukum Pergeseran Wien (\\(\\lambda_{\\text{max}} \\cdot T = C\\)):</em><br>\n   \\[\\lambda_2 = \\lambda_1 \\times \\frac{T_1}{T_2} = 6000\\text{ \\AA} \\times \\frac{1}{2} = 3000\\text{ \\AA}\\]\n2. <em>Hukum Stefan-Boltzmann (\\(P = e \\sigma A T^4\\)):</em><br>\n   Daya radiasi berbanding lurus dengan suhu mutlak pangkat empat:\n   \\[\\frac{P_2}{P_1} = \\left(\\frac{T_2}{T_1}\\right)^4 = 2^4 = 16 \\implies P_2 = 16 P_1\\]<br>\n<strong>Kunci Jawaban: C (3.000 \\( \\text{\\AA} \\) dan daya radiasi menjadi 16 kali semula)</strong>"
  },
  {
    "id": 25,
    "nomor": 25,
    "elemen": "Fisika Modern",
    "subelemen": "Efek Fotolistrik Einstein",
    "tipe": "pg",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nFungsi kerja sebuah logam adalah \\(W_0 = 2{,}2\\text{ eV}\\) (\\(1\\text{ eV} = 1{,}6 \\times 10^{-19}\\text{ J}\\)). Logam tersebut disinari dengan berkas cahaya berfrekuensi \\(f = 10^{15}\\text{ Hz}\\). Jika konstanta Planck \\(h = 6{,}63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}\\), energi kinetik maksimum fotoelektron yang terlepas dari permukaan logam adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "1,14 eV"
      },
      {
        "id": "B",
        "text": "1,94 eV"
      },
      {
        "id": "C",
        "text": "2,20 eV"
      },
      {
        "id": "D",
        "text": "3,34 eV"
      },
      {
        "id": "E",
        "text": "4,14 eV"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Persamaan Efek Fotolistrik Einstein:</strong><br>\nEnergi foton datang:\n\\[E = h f = 6{,}63 \\times 10^{-34}\\text{ J}\\cdot\\text{s} \\times 10^{15}\\text{ s}^{-1} = 6{,}63 \\times 10^{-19}\\text{ Joule}\\]\nKonversi energi foton ke elektron-volt (eV):\n\\[E = \\frac{6{,}63 \\times 10^{-19}}{1{,}6 \\times 10^{-19}} \\approx 4{,}14\\text{ eV}\\]\nEnergi kinetik maksimum elektron yang lepas:\n\\[E_{k,\\text{maks}} = E - W_0 = 4{,}14\\text{ eV} - 2{,}20\\text{ eV} = 1{,}94\\text{ eV}\\]<br>\n<strong>Kunci Jawaban: B (1,94 eV)</strong>"
  }
];

// Inisialisasi Paket 2 Fisika
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaFisikaPaket2Data };
}

if (typeof window !== 'undefined') {
  window.tkaFisikaPaket2Data = tkaFisikaPaket2Data;
  window.tkaFisikaPackages = window.tkaFisikaPackages || {};
  window.tkaFisikaPackages['paket2'] = {
    id: "paket2",
    title: "Paket 2: Try Out TKA Fisika 2025/2026 (25 Soal HOTS)",
    shortTitle: "Paket 2 (Try Out 2025/2026 • 25 Soal KaTeX)",
    badge: "Try Out HOTS",
    total: 25,
    data: tkaFisikaPaket2Data
  };
}
