// tka/js/tka-paket2.js
// Bank Data Lengkap 25 Soal TKA Kimia SMA Paket 2 (Try Out Prediksi HOTS 2025/2026)
// Disusun berdasarkan standar BPPP / SNBT / UTBK dengan KaTeX interaktif & pembahasan ilmiah rinci

const tkaPaket2Data = [
  {
    "id": 1,
    "elemen": "Kimia Dasar",
    "subelemen": "Hukum Dasar Kimia & Stoikiometri",
    "indikator": "Menerapkan Hukum Perbandingan Berganda Dalton pada dua senyawa oksida nitrogen.",
    "kode": "25KIM-TO2-KD01",
    "tipe": "pg",
    "soalHtml": "\n      Unsur nitrogen ($N$, $A_r = 14$) dan oksigen ($O$, $A_r = 16$) dapat membentuk beberapa jenis senyawa oksida. Analisis terhadap dua sampel oksida nitrogen menghasilkan data eksperimen sebagai berikut:\n      <div class=\"my-3 overflow-x-auto\">\n        <table class=\"w-full text-xs border border-slate-300 rounded-lg overflow-hidden text-center\">\n          <thead class=\"bg-slate-100 font-bold text-slate-800\">\n            <tr>\n              <th class=\"p-2 border-b border-slate-300\">Senyawa</th>\n              <th class=\"p-2 border-b border-slate-300\">Massa Nitrogen ($N$)</th>\n              <th class=\"p-2 border-b border-slate-300\">Massa Oksigen ($O$)</th>\n            </tr>\n          </thead>\n          <tbody class=\"divide-y divide-slate-200\">\n            <tr><td class=\"p-2 font-semibold\">Oksida I</td><td class=\"p-2 font-mono\">7,00 gram</td><td class=\"p-2 font-mono\">8,00 gram</td></tr>\n            <tr><td class=\"p-2 font-semibold\">Oksida II</td><td class=\"p-2 font-mono\">7,00 gram</td><td class=\"p-2 font-mono\">20,00 gram</td></tr>\n          </tbody>\n        </table>\n      </div>\n      Berdasarkan data tersebut, jika massa unsur nitrogen dalam kedua senyawa dibuat sama (tetap), perbandingan massa oksigen pada Oksida I terhadap Oksida II sesuai dengan <strong>Hukum Dalton</strong> adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "1 : 2"
      },
      {
        "id": "B",
        "text": "2 : 3"
      },
      {
        "id": "C",
        "text": "2 : 5"
      },
      {
        "id": "D",
        "text": "3 : 5"
      },
      {
        "id": "E",
        "text": "4 : 7"
      }
    ],
    "kunci": "C",
    "pembahasan": "\n      <strong>Analisis Konsep: Hukum Perbandingan Berganda (Hukum Dalton)</strong><br>\n      Hukum Dalton menyatakan: <em>\"Jika dua unsur dapat membentuk lebih dari satu senyawa, dan massa salah satu unsur dibuat sama (tetap), maka perbandingan massa unsur yang lain dalam senyawa-senyawa tersebut merupakan bilangan bulat dan sederhana.\"</em><br><br>\n      <strong>Langkah Penyelesaian:</strong><br>\n      Pada Oksida I: massa $N = 7,00\\,\\text{g}$, massa $O = 8,00\\,\\text{g}$.<br>\n      Pada Oksida II: massa $N = 7,00\\,\\text{g}$, massa $O = 20,00\\,\\text{g}$.<br>\n      Karena massa nitrogen pada kedua senyawa sudah tepat sama ($7,00\\,\\text{gram}$), perbandingan massa oksigen langsung dihitung:<br>\n      $$\\frac{\\text{Massa } O \\text{ (Oksida I)}}{\\text{Massa } O \\text{ (Oksida II)}} = \\frac{8,00}{20,00} = \\frac{2}{5}$$\n      Perbandingan massa oksigen adalah <strong>2 : 5</strong> (Rumus molekul berturut-turut adalah $NO$ dan $N_2O_5$).\n    "
  },
  {
    "id": 2,
    "elemen": "Kimia Dasar",
    "subelemen": "Stoikiometri Gas",
    "indikator": "Menentukan persentase volume campuran gas hidrokarbon berdasarkan volume gas oksigen yang dibutuhkan pada pembakaran sempurna.",
    "kode": "25KIM-TO2-KD02",
    "tipe": "pg",
    "soalHtml": "\n      Sebanyak $20\\,\\text{mL}$ campuran gas metana ($\\text{CH}_4$) dan gas propana ($\\text{C}_3\\text{H}_8$) dibakar sempurna dengan gas oksigen berlebih pada suhu dan tekanan yang sama menurut reaksi:\n      $$\\text{CH}_4(g) + 2\\,\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) + 2\\,\\text{H}_2\\text{O}(g)$$\n      $$\\text{C}_3\\text{H}_8(g) + 5\\,\\text{O}_2(g) \\longrightarrow 3\\,\\text{CO}_2(g) + 4\\,\\text{H}_2\\text{O}(g)$$\n      Jika gas oksigen yang tepat bereaksi habis adalah sebanyak $64\\,\\text{mL}$, persentase volume gas propana dalam campuran semula adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "20%"
      },
      {
        "id": "B",
        "text": "30%"
      },
      {
        "id": "C",
        "text": "40%"
      },
      {
        "id": "D",
        "text": "60%"
      },
      {
        "id": "E",
        "text": "75%"
      }
    ],
    "kunci": "C",
    "pembahasan": "\n      <strong>Analisis Konsep: Hukum Gay-Lussac (Perbandingan Koefisien = Perbandingan Volume)</strong><br>\n      Misalkan:<br>\n      Volume $\\text{CH}_4 = x\\,\\text{mL}$<br>\n      Volume $\\text{C}_3\\text{H}_8 = y\\,\\text{mL}$<br>\n      Total campuran: $x + y = 20 \\implies x = 20 - y$ &emsp; ...(Pers. 1)<br><br>\n      Berdasarkan koefisien $\\text{O}_2$:<br>\n      $\\text{O}_2$ untuk $\\text{CH}_4 = 2x\\,\\text{mL}$<br>\n      $\\text{O}_2$ untuk $\\text{C}_3\\text{H}_8 = 5y\\,\\text{mL}$<br>\n      Total $\\text{O}_2 = 2x + 5y = 64$ &emsp; ...(Pers. 2)<br><br>\n      Substitusi Pers. 1 ke Pers. 2:<br>\n      $$2(20 - y) + 5y = 64$$\n      $$40 - 2y + 5y = 64 \\implies 3y = 24 \\implies y = 8\\,\\text{mL}$$\n      Maka volume $\\text{C}_3\\text{H}_8 = 8\\,\\text{mL}$ dan volume $\\text{CH}_4 = 12\\,\\text{mL}$.<br><br>\n      Persentase volume propana:<br>\n      $$\\%\\,\\text{C}_3\\text{H}_8 = \\frac{8\\,\\text{mL}}{20\\,\\text{mL}} \\times 100\\% = 40\\%$$\n    "
  },
  {
    "id": 3,
    "elemen": "Kimia Dasar",
    "subelemen": "Stoikiometri & Analisis Kadar Zat",
    "indikator": "Menganalisis kadar kemurnian kalsium karbonat dalam sampel batu kapur melalui reaksi dengan asam.",
    "kode": "25KIM-TO2-KD03",
    "tipe": "mcma",
    "soalHtml": "\n      Sebanyak $10,0\\,\\text{gram}$ cuplikan batu kapur yang mengandung kalsium karbonat ($\\text{CaCO}_3$, $M_r = 100\\,\\text{g/mol}$) direaksikan dengan larutan asam klorida encer berlebih menurut persamaan:\n      $$\\text{CaCO}_3(s) + 2\\,\\text{HCl}(aq) \\longrightarrow \\text{CaCl}_2(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$\n      Gas $\\text{CO}_2$ yang dihasilkan ditampung dan diukur pada keadaan standar (STP, $0^\\circ\\text{C}, 1\\,\\text{atm}$), diperoleh volume gas sebesar $1,792\\,\\text{liter}$. Manakah dari pernyataan-pernyataan berikut yang <strong>BENAR</strong>? <em>(Pilih semua yang benar)</em>\n    ",
    "options": [
      {
        "id": "A",
        "text": "Jumlah mol gas CO₂ yang dibebaskan adalah 0,080 mol."
      },
      {
        "id": "B",
        "text": "Massa kalsium karbonat murni dalam cuplikan batu kapur adalah 8,0 gram."
      },
      {
        "id": "C",
        "text": "Kadar kemurnian CaCO₃ dalam cuplikan batu kapur tersebut adalah 80%."
      },
      {
        "id": "D",
        "text": "Jumlah mol HCl yang bereaksi tepat adalah 0,080 mol."
      },
      {
        "id": "E",
        "text": "Massa kalsium klorida (CaCl₂, Mr = 111) yang terbentuk adalah 8,88 gram."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "E"
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Stoikiometri Mol & Kadar Persentase Kemurnian</strong><br>\n      1. <strong>Mol gas $\\text{CO}_2$ pada STP:</strong><br>\n      $$n(\\text{CO}_2) = \\frac{1,792\\,\\text{L}}{22,4\\,\\text{L/mol}} = 0,080\\,\\text{mol}$$\n      <em>(Pernyataan A BENAR)</em><br><br>\n      2. <strong>Mol & Massa $\\text{CaCO}_3$ Murni:</strong><br>\n      Dari perbandingan koefisien: $n(\\text{CaCO}_3) = n(\\text{CO}_2) = 0,080\\,\\text{mol}$.<br>\n      $$\\text{Massa } \\text{CaCO}_3 = 0,080\\,\\text{mol} \\times 100\\,\\text{g/mol} = 8,0\\,\\text{gram}$$\n      <em>(Pernyataan B BENAR)</em><br><br>\n      3. <strong>Kadar Kemurnian $\\text{CaCO}_3$:</strong><br>\n      $$\\%\\,\\text{CaCO}_3 = \\frac{8,0\\,\\text{g}}{10,0\\,\\text{g}} \\times 100\\% = 80\\%$$\n      <em>(Pernyataan C BENAR)</em><br><br>\n      4. <strong>Mol $\\text{HCl}$ yang bereaksi:</strong><br>\n      $n(\\text{HCl}) = 2 \\times n(\\text{CaCO}_3) = 2 \\times 0,080 = 0,160\\,\\text{mol}$. Maka pernyataan D SALAH (bukan 0,080 mol).<br><br>\n      5. <strong>Massa $\\text{CaCl}_2$ yang terbentuk:</strong><br>\n      $n(\\text{CaCl}_2) = 0,080\\,\\text{mol}$.<br>\n      $$\\text{Massa } \\text{CaCl}_2 = 0,080\\,\\text{mol} \\times 111\\,\\text{g/mol} = 8,88\\,\\text{gram}$$\n      <em>(Pernyataan E BENAR)</em>\n    "
  },
  {
    "id": 4,
    "elemen": "Kimia Dasar",
    "subelemen": "Pereaksi Pembatas",
    "indikator": "Mengevaluasi pernyataan kebenaran pada reaksi redoks logam seng dengan asam klorida menggunakan konsep pereaksi pembatas.",
    "kode": "25KIM-TO2-KD04",
    "tipe": "kompleks_bs",
    "soalHtml": "\n      Logam seng padat ($13,0\\,\\text{gram}$, $A_r\\,\\text{Zn} = 65$) dimasukkan ke dalam wadah tertutup yang berisi $200\\,\\text{mL}$ larutan asam klorida ($\\text{HCl}$) $1,5\\,\\text{M}$ menurut persamaan:\n      $$\\text{Zn}(s) + 2\\,\\text{HCl}(aq) \\longrightarrow \\text{ZnCl}_2(aq) + \\text{H}_2(g)$$\n      Tentukan kebenaran masing-masing pernyataan berikut berdasarkan konsep pereaksi pembatas!\n    ",
    "items": [
      {
        "pernyataan": "Asam klorida (HCl) bertindak sebagai pereaksi pembatas yang habis bereaksi terlebih dahulu.",
        "kunci": "Benar",
        "penjelasan": "Mol Zn = 13,0 / 65 = 0,20 mol (rasio mol/koefisien = 0,20 / 1 = 0,20). Mol HCl = 0,200 L × 1,5 M = 0,30 mol (rasio mol/koefisien = 0,30 / 2 = 0,15). Karena rasio HCl lebih kecil (0,15 < 0,20), maka HCl adalah pereaksi pembatas."
      },
      {
        "pernyataan": "Terdapat sisa logam seng (Zn) sebesar 0,05 mol (setara 3,25 gram) yang tidak bereaksi.",
        "kunci": "Benar",
        "penjelasan": "Mol Zn yang bereaksi = 1/2 × n(HCl) = 1/2 × 0,30 mol = 0,15 mol. Sisa Zn = 0,20 - 0,15 = 0,05 mol = 0,05 × 65 = 3,25 gram."
      },
      {
        "pernyataan": "Volume gas hidrogen (H₂) yang terbentuk diukur pada keadaan STP adalah 4,48 liter.",
        "kunci": "Salah",
        "penjelasan": "Koefisien H₂ = 1, mol H₂ yang terbentuk = 1/2 × n(HCl) = 0,15 mol. Volume H₂ pada STP = 0,15 mol × 22,4 L/mol = 3,36 liter (bukan 4,48 liter)."
      }
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Pereaksi Pembatas (Limiting Reagent)</strong><br>\n      • Mol awal $\\text{Zn} = \\frac{13,0}{65} = 0,20\\,\\text{mol}$.<br>\n      • Mol awal $\\text{HCl} = 0,200\\,\\text{L} \\times 1,5\\,\\text{M} = 0,30\\,\\text{mol}$.<br><br>\n      Bagi mol dengan koefisien reaksi:<br>\n      • $\\text{Zn}: \\frac{0,20}{1} = 0,20$<br>\n      • $\\text{HCl}: \\frac{0,30}{2} = 0,15$<br>\n      Karena $0,15 < 0,20$, maka <strong>$\\text{HCl}$ habis bereaksi sebagai pereaksi pembatas</strong>.<br>\n      • Mol $\\text{Zn}$ bereaksi = $0,15\\,\\text{mol}$; sisa $\\text{Zn} = 0,05\\,\\text{mol} = 3,25\\,\\text{gram}$.<br>\n      • Mol $\\text{H}_2$ terbentuk = $0,15\\,\\text{mol}$; Volume STP = $0,15 \\times 22,4 = 3,36\\,\\text{liter}$.\n    "
  },
  {
    "id": 5,
    "elemen": "Struktur Atom & Ikatan Kimia",
    "subelemen": "Konfigurasi Elektron & Bilangan Kuantum",
    "indikator": "Menentukan jumlah elektron tidak berpasangan dan sifat kemagnetan ion logam transisi Fe3+.",
    "kode": "25KIM-TO2-SA01",
    "tipe": "pg",
    "soalHtml": "\n      Atom besi ($\\text{Fe}$) memiliki nomor atom $Z = 26$. Di dalam air, atom ini dapat mengalami oksidasi membentuk ion besi(III), $\\text{Fe}^{3+}$. Jumlah orbital yang terisi elektron tidak berpasangan (elektron tunggal) dan sifat kemagnetan dari ion $\\text{Fe}^{3+}$ pada keadaan dasar adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "3 orbital tidak berpasangan, bersifat diamagnetik"
      },
      {
        "id": "B",
        "text": "4 orbital tidak berpasangan, bersifat paramagnetik"
      },
      {
        "id": "C",
        "text": "5 orbital tidak berpasangan, bersifat paramagnetik kuat"
      },
      {
        "id": "D",
        "text": "5 orbital tidak berpasangan, bersifat diamagnetik"
      },
      {
        "id": "E",
        "text": "6 orbital tidak berpasangan, bersifat feromagnetik"
      }
    ],
    "kunci": "C",
    "pembahasan": "\n      <strong>Analisis Konsep: Konfigurasi Elektron Ion Logam Transisi & Kaidah Hund</strong><br>\n      1. Konfigurasi elektron atom netral $\\text{Fe}$ ($Z = 26$):<br>\n      $$_{26}\\text{Fe}: [\\text{Ar}]\\, 4s^2\\, 3d^6$$\n      2. Pada pembentukan kation logam transisi, <strong>elektron pada subkulit $4s$ (kulit terluar) dilepaskan terlebih dahulu</strong> sebelum elektron $3d$:<br>\n      Melepas 3 elektron (2 dari $4s$ dan 1 dari $3d$):<br>\n      $$\\text{Fe}^{3+}: [\\text{Ar}]\\, 3d^5$$\n      3. Berdasarkan <strong>Kaidah Hund</strong>, kelima elektron pada subkulit $d$ (yang memiliki 5 orbital degenerate) akan mengisi masing-masing orbital dengan spin sejajar (spin tunggal):<br>\n      $$\\uparrow \\quad \\uparrow \\quad \\uparrow \\quad \\uparrow \\quad \\uparrow$$\n      Terdapat tepat <strong>5 elektron tidak berpasangan</strong> dalam 5 orbital, sehingga ion $\\text{Fe}^{3+}$ bersifat <strong>sangat paramagnetik</strong> (ditarik kuat oleh medan magnet).\n    "
  },
  {
    "id": 6,
    "elemen": "Struktur Atom & Ikatan Kimia",
    "subelemen": "Bentuk Molekul VSEPR & Hibridisasi",
    "indikator": "Menentukan bentuk molekul dan kepolaran senyawa XeF4 berdasarkan teori domain elektron VSEPR.",
    "kode": "25KIM-TO2-SA02",
    "tipe": "pg",
    "soalHtml": "\n      Molekul ksenon tetrafluorida ($\\text{XeF}_4$) merupakan salah satu senyawa gas mulia yang dapat disintesis. Diketahui nomor atom $\\text{Xe} = 54$ (golongan VIIIA, 8 elektron valensi) dan $\\text{F} = 9$ (golongan VIIA, 7 elektron valensi). Bentuk geometri molekul dan kepolaran dari $\\text{XeF}_4$ menurut teori VSEPR adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "Tetrahedral, bersifat polar"
      },
      {
        "id": "B",
        "text": "Bipiramida trigonal, bersifat nonpolar"
      },
      {
        "id": "C",
        "text": "Bujur sangkar (segi empat planar), bersifat nonpolar"
      },
      {
        "id": "D",
        "text": "Jungkat-jungkit (seesaw), bersifat polar"
      },
      {
        "id": "E",
        "text": "Piramida alas bujur sangkar, bersifat polar"
      }
    ],
    "kunci": "C",
    "pembahasan": "\n      <strong>Analisis Konsep: Teori VSEPR & Domain Elektron Bebas (PEB)</strong><br>\n      1. Elektron valensi atom pusat $\\text{Xe} = 8$.<br>\n      2. Pasangan Elektron Ikatan (PEI): $\\text{Xe}$ mengikat 4 atom $\\text{F}$, sehingga $\\text{PEI} = 4$.<br>\n      3. Pasangan Elektron Bebas (PEB):<br>\n      $$\\text{PEB} = \\frac{\\text{EV} - \\text{PEI}}{2} = \\frac{8 - 4}{2} = 2$$\n      4. Tipe molekul: $\\text{AX}_4\\text{E}_2$ (total 6 domain elektron, geometri dasar oktahedral).<br>\n      5. Menurut VSEPR, kedua domain PEB menempati posisi aksial yang saling bertolak belakang ($180^\\circ$) untuk meminimalkan tolakan PEB-PEB. Keempat ikatan $\\text{Xe}-\\text{F}$ berada pada bidang ekuator membentuk geometri <strong>segi empat planar (bujur sangkar)</strong>.<br>\n      6. Karena bentuknya sangat simetris, momen dipol dari keempat ikatan $\\text{Xe}-\\text{F}$ saling meniadakan secara vektor ($\\mu = 0$), sehingga molekul bersifat <strong>nonpolar</strong>.\n    "
  },
  {
    "id": 7,
    "elemen": "Struktur Atom & Ikatan Kimia",
    "subelemen": "Sifat Keperiodikan Unsur",
    "indikator": "Menganalisis anomali energi ionisasi pertama pada unsur-unsur Periode 3.",
    "kode": "25KIM-TO2-SA03",
    "tipe": "mcma",
    "soalHtml": "\n      Secara umum, dari kiri ke kanan dalam satu periode, nilai Energi Ionisasi Pertama ($IE_1$) cenderung meningkat akibat pertambahan muatan inti efektif ($Z_{\\text{eff}}$). Namun, pada unsur-unsur Periode 3 terjadi dua anomali penurunan nilai $IE_1$, yaitu:\n      <br>\n      • $IE_1\\,(\\text{Mg}, Z=12) > IE_1\\,(\\text{Al}, Z=13)$\n      <br>\n      • $IE_1\\,(\\text{P}, Z=15) > IE_1\\,(\\text{S}, Z=16)$\n      <br><br>\n      Manakah dari pernyataan berikut yang <strong>BENAR</strong> menjelaskan anomali tersebut? <em>(Pilih semua yang benar)</em>\n    ",
    "options": [
      {
        "id": "A",
        "text": "Magnesium memiliki konfigurasi elektron subkulit 3s² yang terisi penuh sehingga relatif lebih stabil dan sulit melepaskan elektron dibandingkan elektron 3p¹ pada aluminium."
      },
      {
        "id": "B",
        "text": "Elektron terluar aluminium berada pada orbital 3p yang energinya lebih tinggi dan terperisai oleh elektron 3s, sehingga lebih mudah lepas."
      },
      {
        "id": "C",
        "text": "Fosfor memiliki subkulit 3p³ yang terisi setengah penuh (half-filled) yang memberikan kestabilan ekstra sesuai aturan Hund."
      },
      {
        "id": "D",
        "text": "Belerang memiliki satu orbital 3p yang terisi sepasang elektron (3p⁴), sehingga terjadi gaya tolak-menolak antar-elektron dalam orbital yang sama yang mempermudah pelepasan satu elektron."
      },
      {
        "id": "E",
        "text": "Jari-jari atom fosfor lebih besar daripada jari-jari atom belerang sehingga tarikan intinya lebih lemah."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "D"
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Kestabilan Subkulit Penuh dan Setengah Penuh</strong><br>\n      1. <strong>Anomali Mg vs Al:</strong><br>\n      • $_{12}\\text{Mg}: [\\text{Ne}]\\, 3s^2$ (subkulit $s$ penuh, stabil).<br>\n      • $_{13}\\text{Al}: [\\text{Ne}]\\, 3s^2\\, 3p^1$. Melepaskan elektron dari $3p^1$ membutuhkan energi lebih kecil karena terperisai oleh elektron $3s^2$. (Pernyataan A & B BENAR).<br><br>\n      2. <strong>Anomali P vs S:</strong><br>\n      • $_{15}\\text{P}: [\\text{Ne}]\\, 3s^2\\, 3p^3$ (subkulit $p$ setengah penuh, stabil secara kuantum). (Pernyataan C BENAR).<br>\n      • $_{16}\\text{S}: [\\text{Ne}]\\, 3s^2\\, 3p^4$ (ada 1 orbital $3p$ dengan pasangan elektron: $\\uparrow\\downarrow \\, \\uparrow \\, \\uparrow$). Tolakan elektrostatik antara dua elektron dalam orbital yang sama membuat satu elektron lebih mudah terionisasi. (Pernyataan D BENAR).<br><br>\n      Pernyataan E SALAH karena jari-jari atom P justru sedikit lebih besar dari S, tetapi alasan $IE_1$ lebih tinggi bukan karena jari-jari melainkan kestabilan konfigurasi $3p^3$.\n    "
  },
  {
    "id": 8,
    "elemen": "Struktur Atom & Ikatan Kimia",
    "subelemen": "Gaya Antarmolekul",
    "indikator": "Membandingkan kekuatan ikatan hidrogen dan titik didih senyawa hidrida golongan VIA.",
    "kode": "25KIM-TO2-SA04",
    "tipe": "kompleks_bs",
    "soalHtml": "\n      Grafik titik didih senyawa hidrida golongan VIA menunjukkan titik didih air ($\\text{H}_2\\text{O}$, $T_b = 100^\\circ\\text{C}$) jauh lebih tinggi dibandingkan hidrogen sulfida ($\\text{H}_2\\text{S}$, $T_b = -60^\\circ\\text{C}$), padahal massa molar $\\text{H}_2\\text{S}$ ($34\\,\\text{g/mol}$) lebih besar daripada $\\text{H}_2\\text{O}$ ($18\\,\\text{g/mol}$). Tentukan kebenaran pernyataan-pernyataan berikut!\n    ",
    "items": [
      {
        "pernyataan": "Tingginya titik didih H₂O disebabkan adanya ikatan hidrogen intermolekuler yang kuat antara atom hidrogen yang sangat elektropositif dengan atom oksigen yang sangat elektronegatif.",
        "kunci": "Benar",
        "penjelasan": "Oksigen memiliki keelektronegatifan tinggi dan ukuran atom kecil, memungkinkan terbentuknya jaringan ikatan hidrogen 3 dimensi yang sangat kokoh."
      },
      {
        "pernyataan": "Molekul H₂S tidak dapat membentuk ikatan hidrogen karena keelektronegatifan atom belerang (S) relatif rendah dan jari-jari atomnya terlalu besar.",
        "kunci": "Benar",
        "penjelasan": "Ikatan hidrogen hanya terbentuk secara signifikan jika atom H terikat pada tiga atom yang sangat elektronegatif dan berukuran kecil: F, O, atau N."
      },
      {
        "pernyataan": "Gaya van der Waals (dispersi London) pada molekul H₂O lebih kuat dibandingkan pada molekul H₂S karena massa molekul H₂O lebih kecil.",
        "kunci": "Salah",
        "penjelasan": "Gaya dispersi London justru berbanding lurus dengan massa molar dan jumlah elektron. Dispersi London pada H₂S (Mr = 34) lebih kuat daripada H₂O (Mr = 18). H₂O bertitik didih tinggi murni karena dominasi ikatan hidrogen."
      }
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Ikatan Hidrogen vs Gaya Dispersi London</strong><br>\n      Ikatan hidrogen terbentuk antara atom $\\text{H}$ yang terikat secara kovalen pada atom yang berukuran kecil dan sangat elektronegatif ($\\text{F, O, N}$) dengan pasangan elektron bebas atom tetangga.<br>\n      • Pada $\\text{H}_2\\text{O}$, setiap molekul mampu membentuk rata-rata 4 ikatan hidrogen dengan molekul tetangganya, menciptakan struktur jejaring yang memerlukan energi termal besar untuk diputus ($T_b = 100^\\circ\\text{C}$).<br>\n      • Pada $\\text{H}_2\\text{S}$, atom $\\text{S}$ memiliki keelektronegatifan yang lebih rendah (2,5 vs 3,5 pada O) dan jari-jari atom lebih besar, sehingga tidak mampu membentuk ikatan hidrogen; gaya tarik yang bekerja hanyalah gaya dipol-dipol lemah dan dispersi London.\n    "
  },
  {
    "id": 9,
    "elemen": "Kimia Fisik",
    "subelemen": "Termokimia & Hukum Hess",
    "indikator": "Menghitung entalpi pembentukan standar gas asetilena menggunakan Hukum Hess.",
    "kode": "25KIM-TO2-KF01",
    "tipe": "pg",
    "soalHtml": "\n      Diketahui data entalpi pembakaran standar ($\\Delta H_c^\\circ$) pada suhu $25^\\circ\\text{C}$ adalah sebagai berikut:\n      <div class=\"my-2 p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs space-y-1\">\n        <p>1. $\\text{C}(s) + \\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) \\quad \\Delta H_1 = -393,5\\,\\text{kJ}$</p>\n        <p>2. $\\text{H}_2(g) + \\frac{1}{2}\\,\\text{O}_2(g) \\longrightarrow \\text{H}_2\\text{O}(l) \\quad \\Delta H_2 = -285,8\\,\\text{kJ}$</p>\n        <p>3. $\\text{C}_2\\text{H}_2(g) + \\frac{5}{2}\\,\\text{O}_2(g) \\longrightarrow 2\\,\\text{CO}_2(g) + \\text{H}_2\\text{O}(l) \\quad \\Delta H_3 = -1299,8\\,\\text{kJ}$</p>\n      </div>\n      Berdasarkan Hukum Hess, nilai perubahan entalpi pembentukan standar ($\\Delta H_f^\\circ$) dari gas asetilena, $\\text{C}_2\\text{H}_2(g)$:\n      $$2\\,\\text{C}(s) + \\text{H}_2(g) \\longrightarrow \\text{C}_2\\text{H}_2(g)$$\n      adalah sebesar...\n    ",
    "options": [
      {
        "id": "A",
        "text": "-227,0 kJ/mol"
      },
      {
        "id": "B",
        "text": "+227,0 kJ/mol"
      },
      {
        "id": "C",
        "text": "-620,5 kJ/mol"
      },
      {
        "id": "D",
        "text": "+620,5 kJ/mol"
      },
      {
        "id": "E",
        "text": "+1072,8 kJ/mol"
      }
    ],
    "kunci": "B",
    "pembahasan": "\n      <strong>Analisis Konsep: Hukum Hess (Penjumlahan Kalor Reaksi)</strong><br>\n      Target reaksi pembentukan gas asetilena:<br>\n      $$2\\,\\text{C}(s) + \\text{H}_2(g) \\longrightarrow \\text{C}_2\\text{H}_2(g) \\quad \\Delta H = ?$$\n      Manipulasi persamaan termokimia:<br>\n      1. Reaksi 1 dikali 2 (karena butuh $2\\,\\text{C}$ di kiri):<br>\n      $$2\\,\\text{C}(s) + 2\\,\\text{O}_2(g) \\longrightarrow 2\\,\\text{CO}_2(g) \\quad \\Delta H = 2(-393,5) = -787,0\\,\\text{kJ}$$\n      2. Reaksi 2 tetap (karena butuh $1\\,\\text{H}_2$ di kiri):<br>\n      $$\\text{H}_2(g) + \\frac{1}{2}\\,\\text{O}_2(g) \\longrightarrow \\text{H}_2\\text{O}(l) \\quad \\Delta H = -285,8\\,\\text{kJ}$$\n      3. Reaksi 3 dibalik (karena butuh $1\\,\\text{C}_2\\text{H}_2$ di kanan):<br>\n      $$2\\,\\text{CO}_2(g) + \\text{H}_2\\text{O}(l) \\longrightarrow \\text{C}_2\\text{H}_2(g) + \\frac{5}{2}\\,\\text{O}_2(g) \\quad \\Delta H = +1299,8\\,\\text{kJ}$$\n      <br>\n      Jumlahkan ketiga reaksi:<br>\n      $$\\Delta H_f^\\circ = (-787,0) + (-285,8) + 1299,8 = -1072,8 + 1299,8 = \\mathbf{+227,0\\,\\text{kJ/mol}}$$\n    "
  },
  {
    "id": 10,
    "elemen": "Kimia Fisik",
    "subelemen": "Kinetika Kimia (Laju Reaksi)",
    "indikator": "Menentukan persamaan laju reaksi dan nilai tetapan laju k dari data eksperimen konsentrasi awal.",
    "kode": "25KIM-TO2-KF02",
    "tipe": "pg",
    "soalHtml": "\n      Reaksi antara gas nitrogen monoksida dan gas hidrogen berlangsung menurut persamaan:\n      $$2\\,\\text{NO}(g) + 2\\,\\text{H}_2(g) \\longrightarrow \\text{N}_2(g) + 2\\,\\text{H}_2\\text{O}(g)$$\n      Diperoleh data kinetika eksperimen pada suhu tetap sebagai berikut:\n      <div class=\"my-3 overflow-x-auto\">\n        <table class=\"w-full text-xs border border-slate-300 rounded-lg text-center\">\n          <thead class=\"bg-slate-100 font-bold text-slate-800\">\n            <tr>\n              <th class=\"p-2 border-b border-slate-300\">Percobaan</th>\n              <th class=\"p-2 border-b border-slate-300\">$[\\text{NO}]$ (M)</th>\n              <th class=\"p-2 border-b border-slate-300\">$[\\text{H}_2]$ (M)</th>\n              <th class=\"p-2 border-b border-slate-300\">Laju Reaksi ($v$, M/s)</th>\n            </tr>\n          </thead>\n          <tbody class=\"divide-y divide-slate-200 font-mono\">\n            <tr><td class=\"p-1.5\">1</td><td class=\"p-1.5\">0,10</td><td class=\"p-1.5\">0,10</td><td class=\"p-1.5\">$1,2 \\times 10^{-3}$</td></tr>\n            <tr><td class=\"p-1.5\">2</td><td class=\"p-1.5\">0,10</td><td class=\"p-1.5\">0,20</td><td class=\"p-1.5\">$2,4 \\times 10^{-3}$</td></tr>\n            <tr><td class=\"p-1.5\">3</td><td class=\"p-1.5\">0,20</td><td class=\"p-1.5\">0,20</td><td class=\"p-1.5\">$9,6 \\times 10^{-3}$</td></tr>\n          </tbody>\n        </table>\n      </div>\n      Berdasarkan data tersebut, persamaan hukum laju reaksi dan orde total reaksi adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "v = k [NO] [H₂], orde total = 2"
      },
      {
        "id": "B",
        "text": "v = k [NO]² [H₂], orde total = 3"
      },
      {
        "id": "C",
        "text": "v = k [NO] [H₂]², orde total = 3"
      },
      {
        "id": "D",
        "text": "v = k [NO]² [H₂]², orde total = 4"
      },
      {
        "id": "E",
        "text": "v = k [NO]⁰ [H₂]², orde total = 2"
      }
    ],
    "kunci": "B",
    "pembahasan": "\n      <strong>Analisis Konsep: Penentuan Orde Reaksi dari Data Laju Awal</strong><br>\n      Misalkan hukum laju: $v = k [\\text{NO}]^x [\\text{H}_2]^y$<br><br>\n      1. <strong>Mencari orde $y$ (terhadap $[\\text{H}_2]$):</strong><br>\n      Bandingkan Percobaan 1 dan 2 ($[\\text{NO}]$ konstan di 0,10 M):<br>\n      $$\\frac{v_2}{v_1} = \\left(\\frac{[\\text{H}_2]_2}{[\\text{H}_2]_1}\\right)^y \\implies \\frac{2,4 \\times 10^{-3}}{1,2 \\times 10^{-3}} = \\left(\\frac{0,20}{0,10}\\right)^y$$\n      $$2 = (2)^y \\implies y = 1$$\n      <br>\n      2. <strong>Mencari orde $x$ (terhadap $[\\text{NO}]$):</strong><br>\n      Bandingkan Percobaan 2 dan 3 ($[\\text{H}_2]$ konstan di 0,20 M):<br>\n      $$\\frac{v_3}{v_2} = \\left(\\frac{[\\text{NO}]_3}{[\\text{NO}]_2}\\right)^x \\implies \\frac{9,6 \\times 10^{-3}}{2,4 \\times 10^{-3}} = \\left(\\frac{0,20}{0,10}\\right)^x$$\n      $$4 = (2)^x \\implies x = 2$$\n      <br>\n      Persamaan laju reaksi: <strong>$v = k [\\text{NO}]^2 [\\text{H}_2]$</strong> dengan orde total $= 2 + 1 = 3$.\n    "
  },
  {
    "id": 11,
    "elemen": "Kimia Fisik",
    "subelemen": "Kinetika & Persamaan Arrhenius",
    "indikator": "Menganalisis pengaruh suhu, energi aktivasi, dan katalis terhadap laju reaksi kimia.",
    "kode": "25KIM-TO2-KF03",
    "tipe": "mcma",
    "soalHtml": "\n      Persamaan Arrhenius menyatakan hubungan antara tetapan laju reaksi ($k$) dengan suhu mutlak ($T$ dalam Kelvin) dan energi aktivasi ($E_a$):\n      $$k = A \\cdot e^{-\\frac{E_a}{R T}}$$\n      Di mana $A$ adalah faktor frekuensi tumbukan dan $R$ adalah konstanta gas ideal. Manakah pernyataan berikut yang <strong>BENAR</strong> mengenai kinetika reaksi kimia? <em>(Pilih semua yang benar)</em>\n    ",
    "options": [
      {
        "id": "A",
        "text": "Peningkatan suhu menyebabkan nilai tetapan laju k bertambah besar karena fraksi molekul yang memiliki energi kinetik melampaui Ea meningkat secara eksponensial."
      },
      {
        "id": "B",
        "text": "Katalis mempercepat reaksi dengan cara menurunkan nilai energi aktivasi (Ea) melalui penyediaan jalur reaksi alternatif berenergi lebih rendah."
      },
      {
        "id": "C",
        "text": "Katalis tidak mengubah nilai perubahan entalpi reaksi (ΔH) maupun posisi kesetimbangan kimia."
      },
      {
        "id": "D",
        "text": "Reaksi dengan nilai energi aktivasi yang sangat tinggi akan berlangsung secara spontan pada suhu kamar."
      },
      {
        "id": "E",
        "text": "Grafik hubungan antara ln k terhadap 1/T menghasilkan garis lurus dengan kemiringan (slope) sebesar -Ea/R."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "E"
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Teori Tumbukan & Persamaan Arrhenius</strong><br>\n      1. Sesuai faktor Boltzmann $e^{-E_a/RT}$, kenaikan suhu $T$ memperbesar nilai fraksi molekul yang memiliki energi $\\ge E_a$. (Pernyataan A BENAR).<br>\n      2. Katalis berfungsi menurunkan energi aktivasi ($E_a$) tanpa habis bereaksi dan tanpa mengubah fungsi keadaan termodinamika seperti $\\Delta H$ atau tetapan kesetimbangan $K$. (Pernyataan B & C BENAR).<br>\n      3. Pernyataan D SALAH karena reaksi dengan $E_a$ sangat tinggi membutuhkan suhu tinggi untuk berlangsung pada laju yang teramati (bersifat lambat pada suhu kamar).<br>\n      4. Bentuk linear persamaan Arrhenius: $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Plot $\\ln k$ vs $1/T$ memiliki gradien $-\\frac{E_a}{R}$. (Pernyataan E BENAR).\n    "
  },
  {
    "id": 12,
    "elemen": "Kimia Fisik",
    "subelemen": "Kesetimbangan Kimia",
    "indikator": "Menghitung tetapan kesetimbangan Kc pada disosiasi termal dinitrogen tetroksida.",
    "kode": "25KIM-TO2-KF04",
    "tipe": "pg",
    "soalHtml": "\n      Dalam suatu wadah tertutup bervolume $2,0\\,\\text{liter}$ pada suhu tertentu, dimasukkan $0,80\\,\\text{mol}$ gas $\\text{N}_2\\text{O}_4$ tak berwarna. Gas tersebut mengalami disosiasi termal membentuk gas nitrogen dioksida ($\\text{NO}_2$) berwarna cokelat kemerahan menurut reaksi:\n      $$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$$\n      Saat tercapai keadaan setimbang, ditemukan bahwa $50\\%$ dari gas $\\text{N}_2\\text{O}_4$ telah terurai. Nilai tetapan kesetimbangan konsentrasi ($K_c$) reaksi tersebut adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "0,20 M"
      },
      {
        "id": "B",
        "text": "0,40 M"
      },
      {
        "id": "C",
        "text": "0,80 M"
      },
      {
        "id": "D",
        "text": "1,60 M"
      },
      {
        "id": "E",
        "text": "3,20 M"
      }
    ],
    "kunci": "C",
    "pembahasan": "\n      <strong>Analisis Konsep: Stoikiometri Kesetimbangan Reaksi (Tabel M-B-S)</strong><br>\n      Volume wadah $V = 2,0\\,\\text{liter}$.<br>\n      Derajat disosiasi $\\alpha = 50\\% = 0,50$.<br>\n      Mol $\\text{N}_2\\text{O}_4$ terurai $= 0,50 \\times 0,80\\,\\text{mol} = 0,40\\,\\text{mol}$.<br><br>\n      Tabel Mula-mula, Bereaksi, Setimbang:<br>\n      • Mula-mula: $\\text{N}_2\\text{O}_4 = 0,80\\,\\text{mol}$, $\\text{NO}_2 = 0$<br>\n      • Bereaksi: $\\text{N}_2\\text{O}_4 = -0,40\\,\\text{mol}$, $\\text{NO}_2 = +2(0,40) = +0,80\\,\\text{mol}$<br>\n      • Setimbang: $\\text{N}_2\\text{O}_4 = 0,40\\,\\text{mol}$, $\\text{NO}_2 = 0,80\\,\\text{mol}$<br><br>\n      Konsentrasi saat setimbang:<br>\n      $$[\\text{N}_2\\text{O}_4] = \\frac{0,40\\,\\text{mol}}{2,0\\,\\text{L}} = 0,20\\,\\text{M}$$\n      $$[\\text{NO}_2] = \\frac{0,80\\,\\text{mol}}{2,0\\,\\text{L}} = 0,40\\,\\text{M}$$\n      <br>\n      Perhitungan $K_c$:<br>\n      $$K_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]} = \\frac{(0,40)^2}{0,20} = \\frac{0,16}{0,20} = \\mathbf{0,80\\,\\text{M}}$$\n    "
  },
  {
    "id": 13,
    "elemen": "Kimia Fisik",
    "subelemen": "Pergeseran Kesetimbangan Le Chatelier",
    "indikator": "Memprediksi arah pergeseran kesetimbangan pada sintesis amonia akibat perlakuan fisik.",
    "kode": "25KIM-TO2-KF05",
    "tipe": "kompleks_bs",
    "soalHtml": "\n      Reaksi pembuatan gas amonia (Proses Haber-Bosch) berlangsung secara reversibel dan eksotermik menurut persamaan:\n      $$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g) \\quad \\Delta H = -92\\,\\text{kJ}$$\n      Berdasarkan <strong>Asas Le Chatelier</strong>, tentukan kebenaran pengaruh masing-masing perlakuan terhadap produksi gas amonia ($\\text{NH}_3$) berikut!\n    ",
    "items": [
      {
        "pernyataan": "Peningkatan tekanan total sistem (dengan memperkecil volume reaktor) akan menggeser kesetimbangan ke arah kanan (meningkatkan produksi amonia).",
        "kunci": "Benar",
        "penjelasan": "Peningkatan tekanan menggeser kesetimbangan ke arah yang memiliki jumlah koefisien gas lebih sedikit. Sisi kiri = 4 mol gas, sisi kanan = 2 mol gas. Kesetimbangan bergeser ke kanan."
      },
      {
        "pernyataan": "Kenaikan suhu reaktor akan menggeser kesetimbangan ke arah pembentukan amonia sehingga nilai tetapan kesetimbangan (Kc) bertambah besar.",
        "kunci": "Salah",
        "penjelasan": "Reaksi pembentukan amonia bersifat eksotermik (ΔH < 0). Kenaikan suhu justru menggeser kesetimbangan ke arah endotermik (kiri/penguraian), sehingga hasil NH₃ berkurang dan nilai Kc mengecil."
      },
      {
        "pernyataan": "Penambahan gas helium pada volume sistem yang konstan tidak akan menggeser posisi kesetimbangan kimia.",
        "kunci": "Benar",
        "penjelasan": "Penambahan gas mulia (inert) pada volume tetap tidak mengubah tekanan parsial gas N₂, H₂, maupun NH₃, sehingga nilai rasio reaksi Q tetap sama dengan K dan kesetimbangan tidak bergeser."
      }
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Asas Le Chatelier</strong><br>\n      1. <strong>Pengaruh Tekanan / Volume:</strong> Jumlah koefisien gas reaktan $= 1 + 3 = 4$; koefisien gas produk $= 2$. Tekanan diperbesar $\\rightarrow$ bergeser ke koefisien gas lebih kecil (kanan/amonia bertambah).<br>\n      2. <strong>Pengaruh Suhu:</strong> Reaksi ke kanan eksoterm ($\\Delta H < 0$). Suhu dinaikkan $\\rightarrow$ sistem menyerap kalor $\\rightarrow$ bergeser ke kiri (endoterm, $\\text{NH}_3$ berkurang, $K$ turun).<br>\n      3. <strong>Gas Mulia pada Volume Tetap:</strong> Tekanan parsial masing-masing gas pereaksi tetap sama, sehingga posisi kesetimbangan tidak terganggu.\n    "
  },
  {
    "id": 14,
    "elemen": "Kimia Larutan & Analitik",
    "subelemen": "Larutan Penyangga (Buffer)",
    "indikator": "Menghitung pH larutan penyangga asam yang terbentuk dari campuran asam asetat dan natrium hidroksida.",
    "kode": "25KIM-TO2-KL01",
    "tipe": "pg",
    "soalHtml": "\n      Sebanyak $100\\,\\text{mL}$ larutan asam asetat ($\\text{CH}_3\\text{COOH}$) $0,20\\,\\text{M}$ ($K_a = 1,0 \\times 10^{-5}$) dicampurkan dengan $100\\,\\text{mL}$ larutan natrium hidroksida ($\\text{NaOH}$) $0,10\\,\\text{M}$. Nilai $\\text{pH}$ campuran yang terbentuk adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "9"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "kunci": "B",
    "pembahasan": "\n      <strong>Analisis Konsep: Reaksi Pembentukan Buffer Asam</strong><br>\n      1. Hitung mol masing-masing zat sebelum bereaksi:<br>\n      • $n(\\text{CH}_3\\text{COOH}) = 100\\,\\text{mL} \\times 0,20\\,\\text{M} = 20\\,\\text{mmol}$<br>\n      • $n(\\text{NaOH}) = 100\\,\\text{mL} \\times 0,10\\,\\text{M} = 10\\,\\text{mmol}$<br><br>\n      2. Reaksi Netralisasi:<br>\n      $$\\text{CH}_3\\text{COOH} + \\text{NaOH} \\longrightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$$\n      • Mula-mula: $20\\,\\text{mmol}$ | $10\\,\\text{mmol}$ | $0$<br>\n      • Bereaksi: $-10\\,\\text{mmol}$ | $-10\\,\\text{mmol}$ | $+10\\,\\text{mmol}$<br>\n      • Sisa: $10\\,\\text{mmol}$ (asam lemah) | $0$ (habis) | $10\\,\\text{mmol}$ (basa konjugasi)<br><br>\n      3. Karena tersisa asam lemah dan garam basa konjugasinya, terbentuk <strong>larutan penyangga asam</strong>:<br>\n      $$[\\text{H}^+] = K_a \\times \\frac{n_{\\text{asam}}}{n_{\\text{garam}}} = (1,0 \\times 10^{-5}) \\times \\frac{10\\,\\text{mmol}}{10\\,\\text{mmol}} = 1,0 \\times 10^{-5}\\,\\text{M}$$\n      $$\\text{pH} = -\\log(1,0 \\times 10^{-5}) = \\mathbf{5}$$\n    "
  },
  {
    "id": 15,
    "elemen": "Kimia Larutan & Analitik",
    "subelemen": "Hidrolisis Garam",
    "indikator": "Menentukan sifat asam-basa dan pH garam amonium asetat dari hidrolisis total.",
    "kode": "25KIM-TO2-KL02",
    "tipe": "pg",
    "soalHtml": "\n      Garam amonium sianida ($\\text{NH}_4\\text{CN}$) dilarutkan ke dalam air murni. Diketahui tetapan ionisasi asam sianida $K_a\\,(\\text{HCN}) = 4,0 \\times 10^{-10}$ dan tetapan ionisasi amonium hidroksida $K_b\\,(\\text{NH}_3) = 1,8 \\times 10^{-5}$, serta $K_w = 1,0 \\times 10^{-14}$. Sifat larutan dan perkiraan $\\text{pH}$ garam tersebut adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "Asam, pH = 5,3"
      },
      {
        "id": "B",
        "text": "Netral, pH = 7,0"
      },
      {
        "id": "C",
        "text": "Basa, pH = 9,3"
      },
      {
        "id": "D",
        "text": "Basa, pH = 11,2"
      },
      {
        "id": "E",
        "text": "Asam kuat, pH = 2,1"
      }
    ],
    "kunci": "C",
    "pembahasan": "\n      <strong>Analisis Konsep: Hidrolisis Total Garam Asam Lemah & Basa Lemah</strong><br>\n      Garam $\\text{NH}_4\\text{CN}$ terionisasi menghasilkan kation $\\text{NH}_4^+$ dan anion $\\text{CN}^-$, keduanya mengalami hidrolisis dalam air.<br>\n      Sifat larutan ditentukan oleh perbandingan nilai $K_a$ dan $K_b$:<br>\n      • $K_b\\,(\\text{NH}_3) = 1,8 \\times 10^{-5}$<br>\n      • $K_a\\,(\\text{HCN}) = 4,0 \\times 10^{-10}$<br>\n      Karena $K_b > K_a$, ion $\\text{CN}^-$ lebih dominan melepaskan $\\text{OH}^-$ dibandingkan hidrolisis $\\text{NH}_4^+$ yang menghasilkan $\\text{H}^+$, sehingga <strong>larutan bersifat basa (pH > 7)</strong>.<br><br>\n      Perhitungan konsentrasi $[\\text{H}^+]$:<br>\n      $$[\\text{H}^+] = \\sqrt{\\frac{K_w \\times K_a}{K_b}} = \\sqrt{\\frac{1,0 \\times 10^{-14} \\times 4,0 \\times 10^{-10}}{1,8 \\times 10^{-5}}} = \\sqrt{2,22 \\times 10^{-19}} \\approx 4,7 \\times 10^{-10}\\,\\text{M}$$\n      $$\\text{pH} = -\\log(4,7 \\times 10^{-10}) = 10 - \\log 4,7 \\approx \\mathbf{9,3}$$\n    "
  },
  {
    "id": 16,
    "elemen": "Kimia Larutan & Analitik",
    "subelemen": "Titrasi Asam Basa & Indikator",
    "indikator": "Menganalisis kurva titrasi asam lemah dengan basa kuat serta pemilihan indikator yang tepat.",
    "kode": "25KIM-TO2-KL03",
    "tipe": "mcma",
    "soalHtml": "\n      Pada titrasi $25\\,\\text{mL}$ larutan asam asetat ($\\text{CH}_3\\text{COOH}$) $0,10\\,\\text{M}$ dengan larutan baku $\\text{NaOH}$ $0,10\\,\\text{M}$, kurva titrasi menunjukkan lonjakan $\\text{pH}$ tajam di sekitar titik ekuivalen. Manakah pernyataan berikut yang <strong>BENAR</strong>? <em>(Pilih semua yang benar)</em>\n    ",
    "options": [
      {
        "id": "A",
        "text": "Titik ekuivalen titrasi tercapai saat volume NaOH yang ditambahkan tepat 25 mL."
      },
      {
        "id": "B",
        "text": "pH pada titik ekuivalen lebih besar dari 7 (sekitar 8,72) karena garam natrium asetat yang terbentuk terhidrolisis sebagian menghasilkan ion OH⁻."
      },
      {
        "id": "C",
        "text": "Indikator fenolftalein (rentang pH 8,3 – 10,0) adalah indikator yang sangat tepat digunakan karena rentang trayeknya mencakup titik ekuivalen titrasi."
      },
      {
        "id": "D",
        "text": "Pada saat penambahan 12,5 mL NaOH (setengah titik ekuivalen), pH larutan tepat sama dengan pKa asam asetat."
      },
      {
        "id": "E",
        "text": "Indikator metil jingga (rentang pH 3,1 – 4,4) merupakan pilihan ideal karena mengalami perubahan warna sebelum titik ekuivalen."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "D"
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Titrasi Asam Lemah dengan Basa Kuat</strong><br>\n      1. Volume ekuivalen: $V_a M_a = V_b M_b \\implies 25 \\times 0,10 = V_b \\times 0,10 \\implies V_b = 25\\,\\text{mL}$. (Pernyataan A BENAR).<br>\n      2. Pada titik ekuivalen, terbentuk larutan $\\text{CH}_3\\text{COONa}$ yang terhidrolisis menghasilkan basa, sehingga $\\text{pH} > 7$ (tepatnya sekitar 8,72). (Pernyataan B BENAR).<br>\n      3. Trayek fenolftalein (8,3 - 10,0) berada tepat di daerah lonjakan kurva pH titik ekuivalen (tak berwarna menjadi merah muda pucat). (Pernyataan C BENAR).<br>\n      4. Pada setengah titik ekuivalen ($V_b = 12,5\\,\\text{mL}$), $[\\text{CH}_3\\text{COOH}] = [\\text{CH}_3\\text{COO}^-]$, sehingga $\\text{pH} = \\text{p}K_a + \\log(1) = \\text{p}K_a$. (Pernyataan D BENAR).<br>\n      5. Metil jingga (3,1 - 4,4) tidak cocok karena akan berubah warna jauh sebelum titrasi mencapai titik ekuivalen. (Pernyataan E SALAH).\n    "
  },
  {
    "id": 17,
    "elemen": "Kimia Larutan & Analitik",
    "subelemen": "Kelarutan & Hasil Kali Kelarutan (Ksp)",
    "indikator": "Menghitung kelarutan garam CaF2 dalam larutan ion sejenis NaF.",
    "kode": "25KIM-TO2-KL04",
    "tipe": "pg",
    "soalHtml": "\n      Nilai tetapan hasil kali kelarutan ($K_{sp}$) dari kalsium fluorida ($\\text{CaF}_2$) adalah $4,0 \\times 10^{-11}$ pada suhu $25^\\circ\\text{C}$. Kelarutan molar ($\\text{mol/liter}$) garam $\\text{CaF}_2$ di dalam larutan natrium fluorida ($\\text{NaF}$) $0,10\\,\\text{M}$ adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "4,0 × 10⁻¹⁰ M"
      },
      {
        "id": "B",
        "text": "4,0 × 10⁻⁹ M"
      },
      {
        "id": "C",
        "text": "2,0 × 10⁻⁵ M"
      },
      {
        "id": "D",
        "text": "1,0 × 10⁻⁴ M"
      },
      {
        "id": "E",
        "text": "2,15 × 10⁻⁴ M"
      }
    ],
    "kunci": "B",
    "pembahasan": "\n      <strong>Analisis Konsep: Pengaruh Ion Sejenis (Common Ion Effect)</strong><br>\n      Reaksi ionisasi $\\text{NaF}$ (elektrolit kuat):<br>\n      $$\\text{NaF}(aq) \\longrightarrow \\text{Na}^+(aq) + \\text{F}^-(aq)$$\n      $[\\text{F}^-] = 0,10\\,\\text{M}$.<br><br>\n      Reaksi kesetimbangan kelarutan $\\text{CaF}_2$:<br>\n      $$\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+}(aq) + 2\\,\\text{F}^-(aq)$$\n      Jika kelarutan $\\text{CaF}_2 = s\\,\\text{M}$:<br>\n      $[\\text{Ca}^{2+}] = s$<br>\n      $[\\text{F}^-] = (0,10 + 2s) \\approx 0,10\\,\\text{M}$ (karena nilai $s$ sangat kecil dibandingkan $0,10$).<br><br>\n      Persamaan $K_{sp}$:<br>\n      $$K_{sp} = [\\text{Ca}^{2+}][\\text{F}^-]^2$$\n      $$4,0 \\times 10^{-11} = s \\times (0,10)^2 = s \\times 1,0 \\times 10^{-2}$$\n      $$s = \\frac{4,0 \\times 10^{-11}}{1,0 \\times 10^{-2}} = \\mathbf{4,0 \\times 10^{-9}\\,\\text{M}}$$\n      Keberadaan ion sejenis $\\text{F}^-$ menekan kelarutan $\\text{CaF}_2$ secara drastis (dari $2,15 \\times 10^{-4}\\,\\text{M}$ dalam air murni menjadi $4,0 \\times 10^{-9}\\,\\text{M}$).\n    "
  },
  {
    "id": 18,
    "elemen": "Kimia Larutan & Analitik",
    "subelemen": "Reaksi Pengendapan & Qsp",
    "indikator": "Memprediksi terbentuknya endapan barium sulfat berdasarkan perbandingan Qsp dan Ksp.",
    "kode": "25KIM-TO2-KL05",
    "tipe": "kompleks_bs",
    "soalHtml": "\n      Sebanyak $100\\,\\text{mL}$ larutan $\\text{BaCl}_2$ $2,0 \\times 10^{-5}\\,\\text{M}$ dicampurkan dengan $100\\,\\text{mL}$ larutan $\\text{Na}_2\\text{SO}_4$ $2,0 \\times 10^{-5}\\,\\text{M}$. Diketahui nilai $K_{sp}\\,\\text{BaSO}_4 = 1,1 \\times 10^{-10}$. Tentukan kebenaran pernyataan berikut!\n    ",
    "items": [
      {
        "pernyataan": "Konsentrasi ion Ba²⁺ dan ion SO₄²⁻ dalam campuran setelah pengenceran masing-masing adalah 1,0 × 10⁻⁵ M.",
        "kunci": "Benar",
        "penjelasan": "Karena volume larutan berlipat ganda (dari 100 mL menjadi 200 mL), konsentrasi masing-masing ion terencerkan menjadi setengahnya: 1/2 × (2,0 × 10⁻⁵) = 1,0 × 10⁻⁵ M."
      },
      {
        "pernyataan": "Nilai hasil kali ion (Qsp) campuran adalah 1,0 × 10⁻¹⁰.",
        "kunci": "Benar",
        "penjelasan": "Qsp = [Ba²⁺][SO₄²⁻] = (1,0 × 10⁻⁵)(1,0 × 10⁻⁵) = 1,0 × 10⁻¹⁰."
      },
      {
        "pernyataan": "Pada campuran tersebut terbentuk endapan putih BaSO₄ karena nilai Qsp lebih besar dari Ksp.",
        "kunci": "Salah",
        "penjelasan": "Nilai Qsp (1,0 × 10⁻¹⁰) lebih kecil daripada Ksp BaSO₄ (1,1 × 10⁻¹⁰). Syarat terjadinya endapan adalah Qsp > Ksp. Karena Qsp < Ksp, larutan belum jenuh sehingga TIDAK terbentuk endapan."
      }
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Hubungan $Q_{sp}$ dan $K_{sp}$ pada Pengendapan</strong><br>\n      • Volume total campuran $V_{\\text{total}} = 100 + 100 = 200\\,\\text{mL}$.<br>\n      • $[\\text{Ba}^{2+}] = 2,0 \\times 10^{-5} \\times \\frac{100}{200} = 1,0 \\times 10^{-5}\\,\\text{M}$.<br>\n      • $[\\text{SO}_4^{2-}] = 2,0 \\times 10^{-5} \\times \\frac{100}{200} = 1,0 \\times 10^{-5}\\,\\text{M}$.<br><br>\n      Hitung Kuosien Reaksi ($Q_{sp}$):<br>\n      $$Q_{sp} = [\\text{Ba}^{2+}][\\text{SO}_4^{2-}] = (1,0 \\times 10^{-5}) \\times (1,0 \\times 10^{-5}) = 1,0 \\times 10^{-10}$$\n      Bandingkan dengan nilai $K_{sp} = 1,1 \\times 10^{-10}$:<br>\n      $$Q_{sp}\\,(1,0 \\times 10^{-10}) < K_{sp}\\,(1,1 \\times 10^{-10})$$\n      Karena $Q_{sp} < K_{sp}$, larutan <strong>belum jenuh</strong> dan <strong>tidak terbentuk endapan</strong>.\n    "
  },
  {
    "id": 19,
    "elemen": "Redoks & Elektrokimia",
    "subelemen": "Penyetaraan Reaksi Redoks",
    "indikator": "Menentukan koefisien penyetaraan reaksi redoks permanganat dengan ion oksalat dalam suasana asam.",
    "kode": "25KIM-TO2-RE01",
    "tipe": "pg",
    "soalHtml": "\n      Reaksi redoks antara ion permanganat ($\\text{MnO}_4^-$) dan ion oksalat ($\\text{C}_2\\text{O}_4^{2-}$) dalam suasana asam berlangsung menurut persamaan belum setara:\n      $$a\\,\\text{MnO}_4^-(aq) + b\\,\\text{C}_2\\text{O}_4^{2-}(aq) + c\\,\\text{H}^+(aq) \\longrightarrow d\\,\\text{Mn}^{2+}(aq) + e\\,\\text{CO}_2(g) + f\\,\\text{H}_2\\text{O}(l)$$\n      Nilai koefisien reaksi $a, b,$ dan $c$ berturut-turut setelah disetarakan adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "2, 5, dan 16"
      },
      {
        "id": "B",
        "text": "2, 5, dan 8"
      },
      {
        "id": "C",
        "text": "1, 5, dan 14"
      },
      {
        "id": "D",
        "text": "2, 3, dan 16"
      },
      {
        "id": "E",
        "text": "5, 2, dan 16"
      }
    ],
    "kunci": "A",
    "pembahasan": "\n      <strong>Analisis Konsep: Metode Setengah Reaksi (Suasana Asam)</strong><br>\n      1. <strong>Setengah Reaksi Reduksi (Mn):</strong><br>\n      $$\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O} \\quad (\\times 2)$$\n      $$2\\,\\text{MnO}_4^- + 16\\,\\text{H}^+ + 10e^- \\longrightarrow 2\\,\\text{Mn}^{2+} + 8\\,\\text{H}_2\\text{O}$$\n      <br>\n      2. <strong>Setengah Reaksi Oksidasi (C):</strong><br>\n      $$\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 2\\,\\text{CO}_2 + 2e^- \\quad (\\times 5)$$\n      $$5\\,\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 10\\,\\text{CO}_2 + 10e^-$$\n      <br>\n      3. <strong>Jumlahkan kedua reaksi:</strong><br>\n      $$2\\,\\text{MnO}_4^-(aq) + 5\\,\\text{C}_2\\text{O}_4^{2-}(aq) + 16\\,\\text{H}^+(aq) \\longrightarrow 2\\,\\text{Mn}^{2+}(aq) + 10\\,\\text{CO}_2(g) + 8\\,\\text{H}_2\\text{O}(l)$$\n      Maka nilai koefisien: $a = 2$, $b = 5$, $c = 16$.\n    "
  },
  {
    "id": 20,
    "elemen": "Redoks & Elektrokimia",
    "subelemen": "Sel Volta & Potensial Sel",
    "indikator": "Menentukan potensial sel standar dan notasi sel Volta dari dua elektrode logam.",
    "kode": "25KIM-TO2-RE02",
    "tipe": "pg",
    "soalHtml": "\n      Diketahui data potensial reduksi standar ($E^\\circ$) untuk dua elektrode logam berikut:\n      <div class=\"my-2 p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs space-y-1\">\n        <p>$\\text{Zn}^{2+}(aq) + 2e^- \\longrightarrow \\text{Zn}(s) \\quad E^\\circ = -0,76\\,\\text{V}$</p>\n        <p>$\\text{Ag}^+(aq) + e^- \\longrightarrow \\text{Ag}(s) \\quad E^\\circ = +0,80\\,\\text{V}$</p>\n      </div>\n      Jika kedua elektrode tersebut disusun menjadi suatu sel Volta standar, nilai potensial sel standar ($E^\\circ_{\\text{sel}}$) dan notasi sel yang tepat adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "E°sel = +1,56 V ; Zn | Zn²⁺ || Ag⁺ | Ag"
      },
      {
        "id": "B",
        "text": "E°sel = +0,04 V ; Ag | Ag⁺ || Zn²⁺ | Zn"
      },
      {
        "id": "C",
        "text": "E°sel = +1,56 V ; Ag | Ag⁺ || Zn²⁺ | Zn"
      },
      {
        "id": "D",
        "text": "E°sel = +2,36 V ; Zn | Zn²⁺ || Ag⁺ | Ag"
      },
      {
        "id": "E",
        "text": "E°sel = -1,56 V ; Zn | Zn²⁺ || Ag⁺ | Ag"
      }
    ],
    "kunci": "A",
    "pembahasan": "\n      <strong>Analisis Konsep: Sel Volta & Penentuan Katode/Anode</strong><br>\n      • Logam dengan $E^\\circ$ lebih positif mengalami <strong>reduksi</strong> dan bertindak sebagai <strong>katode</strong>: $\\text{Ag}$ ($E^\\circ = +0,80\\,\\text{V}$).<br>\n      • Logam dengan $E^\\circ$ lebih negatif mengalami <strong>oksidasi</strong> dan bertindak sebagai <strong>anode</strong>: $\\text{Zn}$ ($E^\\circ = -0,76\\,\\text{V}$).<br><br>\n      Perhitungan Potensial Sel Standar:<br>\n      $$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katode}} - E^\\circ_{\\text{anode}} = (+0,80\\,\\text{V}) - (-0,76\\,\\text{V}) = \\mathbf{+1,56\\,\\text{V}}$$\n      <br>\n      Notasi Sel Volta (Anode || Katode):<br>\n      $$\\mathbf{\\text{Zn} \\mid \\text{Zn}^{2+} \\parallel \\text{Ag}^+ \\mid \\text{Ag}}$$\n    "
  },
  {
    "id": 21,
    "elemen": "Redoks & Elektrokimia",
    "subelemen": "Hukum Faraday & Elektrolisis",
    "indikator": "Mengevaluasi hasil reaksi elektrolisis larutan tembaga(II) sulfat dengan elektrode karbon.",
    "kode": "25KIM-TO2-RE03",
    "tipe": "kompleks_bs",
    "soalHtml": "\n      Larutan tembaga(II) sulfat ($\\text{CuSO}_4$) dielektrolisis menggunakan elektrode karbon inert ($C$) dengan arus listrik sebesar $9,65\\,\\text{Ampere}$ selama $1000\\,\\text{detik}$. Diketahui $1\\,\\text{Faraday} = 96.500\\,\\text{Coulomb}$ dan $A_r\\,\\text{Cu} = 63,5$. Tentukan kebenaran masing-masing pernyataan berikut!\n    ",
    "items": [
      {
        "pernyataan": "Pada katode terjadi endapan logam tembaga (Cu) sebesar 3,175 gram.",
        "kunci": "Benar",
        "penjelasan": "Q = I × t = 9,65 × 1000 = 9650 C = 0,10 F. Reaksi katode: Cu²⁺ + 2e⁻ → Cu. Massa Cu = (e × i × t) / 96500 = (63,5/2 × 9650) / 96500 = 31,75 × 0,10 = 3,175 gram."
      },
      {
        "pernyataan": "Pada anode terbentuk gas hidrogen (H₂) karena kation air lebih mudah direduksi daripada ion Cu²⁺.",
        "kunci": "Salah",
        "penjelasan": "Pada anode terjadi oksidasi, bukan reduksi. Karena anion adalah sisa asam oksi (SO₄²⁻), maka air yang dioksidasi menghasilkan gas OKSIGEN (O₂), bukan gas hidrogen."
      },
      {
        "pernyataan": "Volume gas oksigen yang dihasilkan di anode pada kondisi STP adalah 0,56 liter.",
        "kunci": "Benar",
        "penjelasan": "Reaksi anode: 2 H₂O → O₂ + 4 H⁺ + 4e⁻. Mol O₂ = 1/4 × mol elektron = 1/4 × 0,10 mol = 0,025 mol. Volume STP = 0,025 mol × 22,4 L/mol = 0,56 liter."
      }
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Elektrolisis & Hukum Faraday I</strong><br>\n      Muatan listrik $Q = I \\times t = 9,65\\,\\text{A} \\times 1000\\,\\text{s} = 9650\\,\\text{C}$.<br>\n      Jumlah mol elektron ($n_e$) $= \\frac{9650}{96500} = 0,10\\,\\text{mol}$.<br><br>\n      1. <strong>Katode (Reduksi $\\text{Cu}^{2+}$):</strong><br>\n      $$\\text{Cu}^{2+} + 2e^- \\longrightarrow \\text{Cu}(s)$$\n      $$\\text{Massa Cu} = \\frac{0,10}{2} \\times 63,5 = 0,05 \\times 63,5 = 3,175\\,\\text{gram}$$\n      2. <strong>Anode (Oksidasi $\\text{H}_2\\text{O}$):</strong><br>\n      $$2\\,\\text{H}_2\\text{O}(l) \\longrightarrow \\text{O}_2(g) + 4\\,\\text{H}^+(aq) + 4e^-$$\n      $$n(\\text{O}_2) = \\frac{0,10}{4} = 0,025\\,\\text{mol}$$\n      $$V_{\\text{STP}}(\\text{O}_2) = 0,025 \\times 22,4 = 0,56\\,\\text{liter}$$\n    "
  },
  {
    "id": 22,
    "elemen": "Kimia Organik",
    "subelemen": "Reaksi Hidrokarbon & Aturan Markovnikov",
    "indikator": "Memprediksi produk mayor dari reaksi adisi asam klorida pada senyawa 2-metil-2-butena.",
    "kode": "25KIM-TO2-KO01",
    "tipe": "pg",
    "soalHtml": "\n      Senyawa alkena bercabang <strong>2-metil-2-butena</strong> direaksikan dengan asam klorida ($\\text{HCl}$) menghasilkan produk adisi utama (mayor). Persamaan strukturnya:\n      $$\\text{CH}_3-\\text{C}(\\text{CH}_3)=\\text{CH}-\\text{CH}_3 + \\text{HCl} \\longrightarrow \\text{Produk Mayor}$$\n      Berdasarkan Aturan Markovnikov dan kestabilan karbokation perantara, nama resmi IUPAC dari produk mayor tersebut adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "2-kloro-2-metilbutana"
      },
      {
        "id": "B",
        "text": "2-kloro-3-metilbutana"
      },
      {
        "id": "C",
        "text": "3-kloro-2-metilbutana"
      },
      {
        "id": "D",
        "text": "1-kloro-2-metilbutana"
      },
      {
        "id": "E",
        "text": "2-kloropentana"
      }
    ],
    "kunci": "A",
    "pembahasan": "\n      <strong>Analisis Konsep: Adisi Elektrofilik Alkena & Aturan Markovnikov</strong><br>\n      Struktur reaktan: $\\text{CH}_3-\\text{C}_2(\\text{CH}_3)=\\text{C}_3\\text{H}-\\text{C}_4\\text{H}_3$.<br>\n      • Karbon $\\text{C}_2$ mengikat 0 atom hidrogen (mengikat 2 gugus metil).<br>\n      • Karbon $\\text{C}_3$ mengikat 1 atom hidrogen.<br><br>\n      Menurut <strong>Aturan Markovnikov</strong>:<br>\n      Elektrofil $\\text{H}^+$ menyerang $\\text{C}_3$ yang sudah mengikat lebih banyak hidrogen, menghasilkan <strong>karbokation tersier ($3^\\circ$) pada $\\text{C}_2$</strong> yang sangat stabil karena stabilisasi hiperkonjugasi dan efek induksi elektron:<br>\n      $$\\left[(\\text{CH}_3)_2\\text{C}^+ - \\text{CH}_2-\\text{CH}_3\\right]$$\n      Kemudian nukleofil $\\text{Cl}^-$ menyerang karbokation $\\text{C}_2$ menghasilkan:<br>\n      $$\\mathbf{2\\text{-kloro-2-metilbutana}}$$\n    "
  },
  {
    "id": 23,
    "elemen": "Kimia Organik",
    "subelemen": "Identifikasi Gugus Fungsi Turunan Alkana",
    "indikator": "Mengidentifikasi senyawa isomer C3H6O menggunakan uji pereaksi Fehling dan Tollens.",
    "kode": "25KIM-TO2-KO02",
    "tipe": "pg",
    "soalHtml": "\n      Dua senyawa organik $X$ dan $Y$ memiliki rumus molekul yang sama, yaitu $\\text{C}_3\\text{H}_6\\text{O}$. Hasil uji laboratorium terhadap kedua senyawa menunjukkan data berikut:\n      <div class=\"my-2 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1\">\n        <p>• Senyawa $X$ dapat mereduksi larutan Fehling menghasilkan endapan merah bata $\\text{Cu}_2\\text{O}$, dan dengan pereaksi Tollens menghasilkan cermin perak.</p>\n        <p>• Senyawa $Y$ tidak bereaksi dengan larutan Fehling maupun pereaksi Tollens, namun dapat bereaksi adisi dengan gas hidrogen menghasilkan alkohol sekunder.</p>\n      </div>\n      Nama IUPAC dari senyawa $X$ dan senyawa $Y$ berturut-turut adalah...\n    ",
    "options": [
      {
        "id": "A",
        "text": "Propanon dan propanal"
      },
      {
        "id": "B",
        "text": "Propanal dan propanon"
      },
      {
        "id": "C",
        "text": "1-propanol dan 2-propanol"
      },
      {
        "id": "D",
        "text": "Metil etil eter dan propanol"
      },
      {
        "id": "E",
        "text": "Asam propanoat dan metil etanoat"
      }
    ],
    "kunci": "B",
    "pembahasan": "\n      <strong>Analisis Konsep: Isomer Gugus Fungsi Aldehid dan Keton (CnH2nO)</strong><br>\n      Rumus $\\text{C}_3\\text{H}_6\\text{O}$ merupakan rumus umum homolog $\\text{C}_n\\text{H}_{2n}\\text{O}$ (golongan aldehid/alkanal atau keton/alkanon).<br>\n      1. <strong>Senyawa $X$:</strong> Positif terhadap pereaksi Fehling (endapan merah bata $\\text{Cu}_2\\text{O}$) dan pereaksi Tollens (cermin perak $\\text{Ag}$) menunjukkan bahwa $X$ memiliki gugus aldehid ($-\\text{CHO}$), yaitu <strong>propanal</strong> ($\\text{CH}_3\\text{CH}_2\\text{CHO}$).<br>\n      2. <strong>Senyawa $Y$:</strong> Negatif terhadap Fehling dan Tollens, namun jika direduksi dengan $\\text{H}_2$ menghasilkan alkohol sekunder (2-propanol), menunjukkan bahwa $Y$ adalah golongan keton, yaitu <strong>propanon / aseton</strong> ($\\text{CH}_3-\\text{CO}-\\text{CH}_3$).\n    "
  },
  {
    "id": 24,
    "elemen": "Kimia Organik",
    "subelemen": "Benzena & Gugus Pengarah",
    "indikator": "Menganalisis pengaruh gugus pengarah orto-para dan meta pada reaksi substitusi elektrofilik aromatik benzena.",
    "kode": "25KIM-TO2-KO03",
    "tipe": "mcma",
    "soalHtml": "\n      Pada reaksi substitusi elektrofilik aromatik turunan benzena, gugus substituen yang sudah terikat pada cincin benzena bertindak sebagai pengarah posisi masuknya gugus elektrofil baru. Manakah dari pasangan gugus dan perannya berikut yang <strong>BENAR</strong>? <em>(Pilih semua yang benar)</em>\n    ",
    "options": [
      {
        "id": "A",
        "text": "Gugus hidroksil (-OH) pada fenol bersifat pengaktivasi kuat dan mengarahkan substituen baru ke posisi orto dan para."
      },
      {
        "id": "B",
        "text": "Gugus nitro (-NO₂) pada nitrobenzena bersifat pendeaktivasi kuat dan mengarahkan substituen baru ke posisi meta."
      },
      {
        "id": "C",
        "text": "Gugus metil (-CH₃) pada toluena bersifat pendorong elektron (pengaktivasi) dan mengarahkan substitusi ke posisi orto dan para."
      },
      {
        "id": "D",
        "text": "Gugus karboksilat (-COOH) pada asam benzoat bersifat pengaktivasi dan mengarahkan substitusi ke posisi orto."
      },
      {
        "id": "E",
        "text": "Atom halogen (-Cl, -Br) bersifat pendeaktivasi cincin benzena namun tetap mengarahkan substituen baru ke posisi orto dan para."
      }
    ],
    "kunci": [
      "A",
      "B",
      "C",
      "E"
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Substitusi Elektrofilik Aromatik (SEAr) & Pengarah Gugus</strong><br>\n      1. Gugus $-\\text{OH}$ memiliki pasangan elektron bebas yang terdelokalisasi ke cincin benzena (efek resonansi $+R$), meningkatkan kerapatan elektron di posisi <strong>orto dan para</strong> (Pengarah Orto-Para Kuat). (Pernyataan A BENAR).<br>\n      2. Gugus $-\\text{NO}_2$ menarik elektron sangat kuat melalui efek induksi dan resonansi ($-I, -R$), menurunkan kerapatan elektron pada cincin (pendeaktivasi) terutama pada posisi orto dan para, sehingga substituen diarahkan ke posisi <strong>meta</strong>. (Pernyataan B BENAR).<br>\n      3. Gugus $-\\text{CH}_3$ memberikan efek induksi pendorong elektron $+I$ dan hiperkonjugasi, merupakan pengarah <strong>orto-para</strong>. (Pernyataan C BENAR).<br>\n      4. Gugus $-\\text{COOH}$ memiliki gugus karbonil penarik elektron, sehingga merupakan pendeaktivasi dan pengarah <strong>meta</strong> (Pernyataan D SALAH).<br>\n      5. Halogen ($-\\text{Cl, -Br}$) unik: bersifat pendeaktivasi cincin (efek $-I$ kuat) namun karena memiliki PEB yang dapat beresonansi, mereka tetap mengarahkan ke <strong>orto-para</strong>. (Pernyataan E BENAR).\n    "
  },
  {
    "id": 25,
    "elemen": "Kimia Organik & Makromolekul",
    "subelemen": "Polimer & Biomolekul",
    "indikator": "Mengevaluasi karakteristik polimerisasi sintetis dan uji biokimia protein dan karbohidrat.",
    "kode": "25KIM-TO2-KO04",
    "tipe": "kompleks_bs",
    "soalHtml": "\n      Makromolekul biologis dan polimer sintetis memiliki peranan krusial dalam kehidupan modern. Tentukan kebenaran masing-masing pernyataan mengenai polimer dan uji biomolekul berikut!\n    ",
    "items": [
      {
        "pernyataan": "Nilon 6,6 terbentuk melalui reaksi polimerisasi kondensasi antara asam adipat dengan heksametilendiamina disertai pelepasan molekul air (H₂O).",
        "kunci": "Benar",
        "penjelasan": "Polimerisasi kondensasi terjadi antara monomer bifungsional (-COOH dan -NH₂) membentuk ikatan peptida/amida dengan melepaskan produk samping H₂O."
      },
      {
        "pernyataan": "Uji Biuret pada sampel putih telur menghasilkan warna ungu, membuktikan adanya ikatan peptida dalam struktur protein.",
        "kunci": "Benar",
        "penjelasan": "Reagen Biuret (CuSO₄ encer dalam basa NaOH) membentuk kompleks koordinasi berwarna ungu dengan atom nitrogen pada dua atau lebih ikatan peptida (-CO-NH-)."
      },
      {
        "pernyataan": "Teflon (politetrafluoroetilena) merupakan polimer alami yang terbentuk melalui reaksi adisi dengan melepaskan molekul asam fluorida (HF).",
        "kunci": "Salah",
        "penjelasan": "Teflon adalah polimer SINTETIS hasil polimerisasi ADISI monomer tetrafluoroetena (CF₂=CF₂) TANPA melepaskan molekul sampingan apapun."
      }
    ],
    "pembahasan": "\n      <strong>Analisis Konsep: Polimerisasi & Uji Identifikasi Makromolekul</strong><br>\n      • <strong>Nilon 6,6:</strong> Poliamida sintetis hasil kondensasi asam heksanadioat (asam adipat) dan 1,6-diaminoheksana (heksametilendiamina) dengan pelepasan $\\text{H}_2\\text{O}$.<br>\n      • <strong>Uji Biuret:</strong> Uji spesifik untuk mendeteksi keberadaan ikatan peptida pada protein (menghasilkan kompleks tembaga(II) berwarna violet/ungu).<br>\n      • <strong>Teflon:</strong> Merupakan polimer sintetis adisi dari monomer tetrafluoroetena ($n\\,\\text{CF}_2=\\text{CF}_2 \\longrightarrow [-\\text{CF}_2-\\text{CF}_2-]_n$) tanpa pelepasan molekul kecil.\n    "
  }
];

// Ekspor untuk browser global & Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tkaPaket2Data;
}

if (typeof window !== 'undefined') {
    window.tkaPaket2Data = tkaPaket2Data;
}
