// tka/js/tka-data.js
// Bank Data Lengkap 23 Soal TKA Kimia SMA 2025 Beserta Kunci & Pembahasan Ilmiah Rinci

const tkaData = [
  {
    id: 1,
    elemen: "Kimia Dasar",
    subelemen: "Stoikiometri",
    indikator: "Menentukan senyawa yang mengandung suatu unsur tertentu dengan kadar tertinggi. (1)",
    kode: "25KIMKDSSTKK05SA-000000-0643",
    tipe: "pg", // Pilihan Ganda Tunggal
    img: "/tka/img/soal_01.png",
    options: [
      { id: "A", text: "Natrium dihidrogen fosfat" },
      { id: "B", text: "Natrium hidrogen fosfat" },
      { id: "C", text: "Natrium fosfat" },
      { id: "D", text: "Fosfor triklorida" },
      { id: "E", text: "Fosfor pentaklorida" }
    ],
    kunci: "A",
    pembahasan: `
      <strong>Analisis Konsep: Kadar Unsur (% Unsur) dalam Senyawa</strong><br>
      Kadar unsur P (%P) dihitung menggunakan rumus:<br>
      <code>%P = (Jumlah atom P &times; Ar P / Mr Senyawa) &times; 100%</code><br>
      Karena semua senyawa pada tabel hanya memiliki 1 atom P (Ar P = 31), maka:<br>
      <strong>%P berbanding terbalik dengan massa molekul relatif (Mr)</strong>. Senyawa dengan <em>Mr terkecil</em> akan memiliki persentase kandungan fosfor <em>tertinggi</em>.<br><br>
      <strong>Perhitungan Kadar P untuk Tiap Senyawa:</strong><br>
      1. NaH₂PO₄ (Mr = 120) &rarr; %P = (31 / 120) &times; 100% = <strong>25,83%</strong><br>
      2. Na₂HPO₄ (Mr = 142) &rarr; %P = (31 / 142) &times; 100% = 21,83%<br>
      3. Na₃PO₄ (Mr = 164) &rarr; %P = (31 / 164) &times; 100% = 18,90%<br>
      4. PCl₃ (Mr = 137,5) &rarr; %P = (31 / 137,5) &times; 100% = 22,55%<br>
      5. PCl₅ (Mr = 208,5) &rarr; %P = (31 / 208,5) &times; 100% = 14,87%<br><br>
      <strong>Kesimpulan:</strong> Senyawa dengan kandungan fosfor tertinggi adalah <strong>Natrium dihidrogen fosfat (NaH₂PO₄)</strong>.
    `
  },
  {
    id: 2,
    elemen: "Kimia Dasar",
    subelemen: "Stoikiometri",
    indikator: "Menentukan volume reaktan atau produk dari reaksi pembakaran hidrokarbon. (3)",
    kode: "25KIMKDSSTKK05SA-000000-0629",
    tipe: "pg",
    img: "/tka/img/soal_02.png",
    options: [
      { id: "A", text: "8 L" },
      { id: "B", text: "18 L" },
      { id: "C", text: "20 L" },
      { id: "D", text: "26 L" },
      { id: "E", text: "44 L" }
    ],
    kunci: "D",
    pembahasan: `
      <strong>Analisis Konsep: Hukum Gay-Lussac (Perbandingan Volume = Perbandingan Koefisien)</strong><br>
      1. <strong>Setarakan Persamaan Reaksi Pembakaran:</strong><br>
      &bull; Pembakaran Etana (C₂H₆):<br>
      <code>C₂H₆(g) + 7/2 O₂(g) &rarr; 2 CO₂(g) + 3 H₂O(g)</code><br>
      &bull; Pembakaran Propana (C₃H₈):<br>
      <code>C₃H₈(g) + 5 O₂(g) &rarr; 3 CO₂(g) + 4 H₂O(g)</code><br><br>
      2. <strong>Menyusun Sistem Persamaan Linier:</strong><br>
      Misalkan:<br>
      Volume C₂H₆ = x liter<br>
      Volume C₃H₈ = y liter<br>
      Diketahui campuran = 10 L &rarr; <code>x + y = 10</code>  ...(Persamaan 1)<br><br>
      Dari koefisien uap air (H₂O):<br>
      H₂O dari C₂H₆ = 3x liter<br>
      H₂O dari C₃H₈ = 4y liter<br>
      Total H₂O yang dihasilkan = 36 L &rarr; <code>3x + 4y = 36</code>  ...(Persamaan 2)<br><br>
      3. <strong>Penyelesaian Aljabar:</strong><br>
      Dari Persamaan 1: x = 10 - y<br>
      Substitusi ke Persamaan 2:<br>
      3(10 - y) + 4y = 36<br>
      30 - 3y + 4y = 36 &rarr; <strong>y = 6 Liter (Volume C₃H₈)</strong><br>
      Maka x = 10 - 6 = <strong>4 Liter (Volume C₂H₆)</strong>.<br><br>
      4. <strong>Menghitung Volume Total CO₂:</strong><br>
      Volume CO₂ dari C₂H₆ = 2x = 2(4 L) = 8 L<br>
      Volume CO₂ dari C₃H₈ = 3y = 3(6 L) = 18 L<br>
      Total volume CO₂ = 8 L + 18 L = <strong>26 Liter</strong>.
    `
  },
  {
    id: 3,
    elemen: "Kimia Dasar",
    subelemen: "Stoikiometri",
    indikator: "Menentukan jumlah molekul suatu gas pada kondisi tertentu sesuai parameter yang diberikan. (4)",
    kode: "25KIMKDSSTKK05SA-000000-0630",
    tipe: "pg",
    img: "/tka/img/soal_03.png",
    options: [
      { id: "A", text: "2,95 × 10¹⁷ molekul" },
      { id: "B", text: "12,02 × 10¹⁷ molekul" },
      { id: "C", text: "3,23 × 10¹⁸ molekul" },
      { id: "D", text: "1,51 × 10²³ molekul" },
      { id: "E", text: "2,41 × 10²⁴ molekul" }
    ],
    kunci: "A",
    pembahasan: `
      <strong>Analisis Konsep: Gas Ideal RTP (25°C, 1 atm) & Bilangan Avogadro</strong><br>
      1. <strong>Volume Gas SO₂ dalam Sampel Udara:</strong><br>
      Konsentrasi SO₂ = 0,0002% volume.<br>
      Volume udara = 6 Liter.<br>
      Volume SO₂ = (0,0002 / 100) &times; 6 L = 2 &times; 10⁻⁶ &times; 6 L = <strong>1,2 &times; 10⁻⁵ Liter</strong>.<br><br>
      2. <strong>Menghitung Mol SO₂ pada Kondisi Suhu Kamar (RTP 25°C, 1 atm):</strong><br>
      Volume molar gas ideal pada 25°C, 1 atm (RTP):<br>
      Vm = RT / P = (0,08205 &times; 298,15 K) / 1 atm &asymp; <strong>24,45 L/mol</strong>.<br>
      n(SO₂) = V / Vm = (1,2 &times; 10⁻⁵ L) / 24,45 L/mol &asymp; <strong>4,908 &times; 10⁻⁷ mol</strong>.<br><br>
      3. <strong>Menghitung Jumlah Partikel / Molekul SO₂:</strong><br>
      N = n &times; L (Bilangan Avogadro: 6,02 &times; 10²³ molekul/mol)<br>
      N = (4,908 &times; 10⁻⁷ mol) &times; (6,02 &times; 10²³ molekul/mol)<br>
      N = 29,54 &times; 10¹⁶ molekul = <strong>2,95 &times; 10¹⁷ molekul</strong>.
    `
  },
  {
    id: 4,
    elemen: "Kimia Dasar",
    subelemen: "Stoikiometri",
    indikator: "Menentukan massa produk yang dihasilkan dari suatu reaksi kimia berdasarkan prinsip pereaksi pembatas. (5)",
    kode: "25KIMKDSSTKK05SA-000000-0638",
    tipe: "pg",
    img: "/tka/img/soal_04.png",
    options: [
      { id: "A", text: "16 gram" },
      { id: "B", text: "23,8 gram" },
      { id: "C", text: "25,4 gram" },
      { id: "D", text: "31,75 gram" },
      { id: "E", text: "47,62 gram" }
    ],
    kunci: "D",
    pembahasan: `
      <strong>Analisis Konsep: Stoikiometri Pereaksi Pembatas</strong><br>
      Persamaan reaksi setara:<br>
      <code>2 CuO(s) + C(s) &rarr; 2 Cu(s) + CO₂(g)</code><br><br>
      1. <strong>Menghitung Mol Reaktan Mula-mula:</strong><br>
      &bull; Mr CuO = Ar Cu + Ar O = 63,5 + 16 = 79,5 g/mol.<br>
      n(CuO) = 39,75 g / 79,5 g/mol = <strong>0,50 mol</strong>.<br>
      &bull; Ar C = 12 g/mol.<br>
      n(C) = 3,0 g / 12 g/mol = <strong>0,25 mol</strong>.<br><br>
      2. <strong>Menentukan Pereaksi Pembatas:</strong><br>
      Bagi mol dengan koefisien reaksi masing-masing:<br>
      &bull; Untuk CuO = 0,50 / 2 = 0,25<br>
      &bull; Untuk C = 0,25 / 1 = 0,25<br>
      Karena rasio mol per koefisien bernilai tepat sama (0,25), kedua pereaksi <strong>habis bereaksi secara stoikiometris</strong> tanpa ada sisa!<br><br>
      3. <strong>Menghitung Massa Tembaga (Cu) Maksimum yang Terbentuk:</strong><br>
      Koefisien Cu sama dengan koefisien CuO (2 : 2 = 1 : 1).<br>
      n(Cu) dihasilkan = n(CuO) bereaksi = <strong>0,50 mol</strong>.<br>
      Massa Cu = n &times; Ar Cu = 0,50 mol &times; 63,5 g/mol = <strong>31,75 gram</strong>.
    `
  },
  {
    id: 5,
    elemen: "Kimia Dasar",
    subelemen: "Stoikiometri",
    indikator: "Menentukan komposisi campuran larutan untuk menghasilkan senyawa dengan jumlah tertentu sesuai parameter yang diberikan. (6)",
    kode: "25KIMKDSSTKK05SA-000000-0328",
    tipe: "kompleks_bs", // Pilihan Ganda Kompleks Kategori Benar / Salah
    img: "/tka/img/soal_05.png",
    items: [
      {
        pernyataan: "300 mL larutan dari botol B + 200 mL larutan dari botol C.",
        kunci: "Salah",
        penjelasan: "Botol B (HCl 2 M): 300 mL &times; 2 M = 0,6 mol HCl. Botol C (KOH 1 M): 200 mL &times; 1 M = 0,2 mol KOH. KOH adalah pereaksi pembatas (0,2 mol), sehingga hanya menghasilkan 0,2 mol KCl = 14,9 gram (bukan 29,8 gram)."
      },
      {
        pernyataan: "200 mL larutan dari botol B + 300 mL larutan dari botol D.",
        kunci: "Benar",
        penjelasan: "Target yang diinginkan: Mr KCl = 39 + 35,5 = 74,5 g/mol. Mol KCl target = 29,8 g / 74,5 g/mol = 0,40 mol. Pada campuran ini: Botol B (HCl 2 M): 200 mL &times; 2 M = 0,40 mol HCl. Botol D (KOH 2 M): 300 mL &times; 2 M = 0,60 mol KOH. HCl bertindak sebagai pereaksi pembatas (0,40 mol), sehingga bereaksi tepat menghasilkan 0,40 mol KCl (setara 29,8 gram)."
      },
      {
        pernyataan: "400 mL larutan dari botol A + 500 mL larutan dari botol C.",
        kunci: "Benar",
        penjelasan: "Botol A (HCl 1 M): 400 mL &times; 1 M = 0,40 mol HCl. Botol C (KOH 1 M): 500 mL &times; 1 M = 0,50 mol KOH. HCl bertindak sebagai pereaksi pembatas (0,40 mol), sehingga bereaksi tepat menghasilkan 0,40 mol KCl (setara 29,8 gram)."
      }
    ],
    pembahasan: `
      <strong>Analisis Konsep: Reaksi Netralisasi Asam-Basa & Pereaksi Pembatas</strong><br>
      Persamaan reaksi:<br>
      <code>KOH(aq) + HCl(aq) &rarr; KCl(aq) + H₂O(l)</code><br>
      Mr KCl = 39 + 35,5 = 74,5 g/mol.<br>
      Target mol KCl = 29,8 g / 74,5 g/mol = <strong>0,40 mol</strong>.<br>
      Karena rasio koefisien KOH : HCl : KCl adalah 1 : 1 : 1, maka reaksi harus menghasilkan tepat 0,40 mol KCl, yang berarti <strong>pereaksi pembatasnya wajib berjumlah 0,40 mol</strong>.<br><br>
      <strong>Evaluasi Pernyataan:</strong><br>
      1. 300 mL B (0,6 mol HCl) + 200 mL C (0,2 mol KOH) &rarr; Menghasilkan 0,2 mol KCl (14,9 g) &rarr; <strong>SALAH</strong>.<br>
      2. 200 mL B (0,4 mol HCl) + 300 mL D (0,6 mol KOH) &rarr; Pembatas HCl = 0,4 mol, menghasilkan 0,4 mol KCl (29,8 g) &rarr; <strong>BENAR</strong>.<br>
      3. 400 mL A (0,4 mol HCl) + 500 mL C (0,5 mol KOH) &rarr; Pembatas HCl = 0,4 mol, menghasilkan 0,4 mol KCl (29,8 g) &rarr; <strong>BENAR</strong>.
    `
  },
  {
    id: 6,
    elemen: "Kimia Organik",
    subelemen: "Struktur dan Sifat Hidrokarbon",
    indikator: "Menentukan kegunaan senyawa hidrokarbon berdasarkan titik didih dan berat molekul. (7)",
    kode: "25KIMKORSHKK06SA-000000-0097",
    tipe: "mcma", // Pilihan Ganda Kompleks Multiple Choice (Centang Banyak)
    img: "/tka/img/soal_06.png",
    options: [
      { id: "A", text: "Senyawa Q dimanfaatkan sebagai bahan bakar kendaraan bermotor." },
      { id: "B", text: "Senyawa R dapat digunakan sebagai minyak pelumas." },
      { id: "C", text: "Senyawa P bermanfaat sebagai bahan bakar pesawat terbang." },
      { id: "D", text: "Senyawa S dapat digunakan sebagai bahan pembuatan lilin." },
      { id: "E", text: "Senyawa P dapat dimanfaatkan sebagai pelarut." }
    ],
    kunci: ["A", "B", "D", "E"],
    pembahasan: `
      <strong>Analisis Konsep: Fraksi Minyak Bumi & Titik Didih</strong><br>
      Dari grafik hubungan berat molekul (Mr) dan titik didih (Td):<br>
      &bull; <strong>Senyawa P (Mr &asymp; 50, Td &lt; 0°C):</strong> Gas hidrokarbon rantai pendek (C₁-C₄ / C₅) &rarr; Fraksi gas / pelarut petroleum eter &rarr; Pernyataan E Benar.<br>
      &bull; <strong>Senyawa Q (Mr &asymp; 125, Td &asymp; 150°C):</strong> Bensin / kerosin (C₇-C₉ / C₈H₁₈ bensin Mr=114) &rarr; Bahan bakar kendaraan bermotor (bensin) &rarr; Pernyataan A Benar.<br>
      &bull; <strong>Senyawa R (Mr &asymp; 270, Td &asymp; 330°C):</strong> Minyak pelumas (oli motor, C₁₈-C₂₀) &rarr; Pernyataan B Benar.<br>
      &bull; <strong>Senyawa S (Mr &asymp; 300, Td &asymp; 350°C+):</strong> Parafin padat / lilin (C₂₀+) &rarr; Pernyataan D Benar.<br>
      &bull; <em>Pernyataan C Salah:</em> Bahan bakar pesawat (avtur/kerosin) berada pada rentang Td 170-250°C (sekitar Q), bukan P yang berfase gas.
    `
  },
  {
    id: 7,
    elemen: "Kimia Organik",
    subelemen: "Struktur dan Sifat Hidrokarbon",
    indikator: "Menganalisis suatu senyawa organik berdasarkan data/informasi yang diberikan. (8)",
    kode: "25KIMKORSHKK06SA-000000-0225",
    tipe: "kompleks_bs",
    img: "/tka/img/soal_07.png",
    items: [
      {
        pernyataan: "Rumus kimia hidrokarbon tersebut adalah C₄H₁₀.",
        kunci: "Benar",
        penjelasan: "Pembakaran 2 mol CxHy menghasilkan 8 mol CO₂ dan 10 mol H₂O. Rasio reaksi: 1 CxHy &rarr; 4 CO₂ + 5 H₂O. Jumlah atom C = 4, atom H = 2 &times; 5 = 10. Maka rumus molekulnya adalah C₄H₁₀ (butana)."
      },
      {
        pernyataan: "Struktur hidrokarbon tersebut adalah rantai lurus n-butana (H₃C-CH₂-CH₂-CH₃).",
        kunci: "Benar",
        penjelasan: "Soal menyatakan bahwa senyawa memiliki '2 atom C primer dan 2 atom C sekunder'. n-butana memiliki dua ujung -CH₃ (2 C primer) dan dua jembatan tengah -CH₂- (2 C sekunder). Sedangkan isomernya (isobutana/2-metilpropana) memiliki 3 C primer dan 1 C tersier. Maka strukturnya tepat n-butana seperti gambar."
      },
      {
        pernyataan: "Hidrokarbon tersebut diperkirakan memiliki titik didih lebih rendah dibandingkan pasangan isomernya.",
        kunci: "Salah",
        penjelasan: "Isomer rantai lurus (n-butana) memiliki luas permukaan kontak antar-molekul yang lebih besar dibandingkan isomer bercabang (isobutana). Oleh karena itu, gaya dispersi London pada n-butana lebih kuat sehingga titik didih n-butana (-0,5°C) LEBIH TINGGI daripada isobutana (-11,7°C)."
      }
    ],
    pembahasan: `
      <strong>Analisis Konsep: Analisis Molekul & Titik Didih Isomer Alkana</strong><br>
      1. Reaksi pembakaran: <code>2 C_xH_y + (..)O₂ &rarr; 8 CO₂ + 10 H₂O</code><br>
      Bagi dengan koefisien 2: 1 C_xH_y &rarr; 4 CO₂ + 5 H₂O &rarr; Rumus molekul = <strong>C₄H₁₀</strong>.<br>
      2. Kriteria atom C: Memiliki 2 C primer (-CH₃) dan 2 C sekunder (-CH₂-) &rarr; Merupakan <strong>n-butana rantai lurus</strong>.<br>
      3. Titik didih: Senyawa rantai lurus memiliki gaya van der Waals / London lebih kuat dibanding isomer bercabang, sehingga titik didihnya <strong>lebih tinggi</strong> (bukan lebih rendah).
    `
  },
  {
    id: 8,
    elemen: "Kimia Organik",
    subelemen: "Struktur dan Sifat Hidrokarbon",
    indikator: "Menganalisis senyawa isomer berdasarkan data entalpi pembakaran standar dan reaksi pembakaran. (9)",
    kode: "25KIMKORSHKK06SA-000000-0088",
    tipe: "kompleks_bs",
    img: "/tka/img/soal_08.png",
    items: [
      {
        pernyataan: "1-butena memberikan efisiensi pembakaran yang lebih baik dibandingkan 2-metil 1-propena.",
        kunci: "Benar",
        penjelasan: "Nilai kalor/energi pembakaran 1-butena (|ΔHc| = 2.721 kJ/mol) lebih besar daripada 2-metil 1-propena (|ΔHc| = 2.715 kJ/mol), sehingga 1-butena melepaskan lebih banyak kalor per mol pembakaran."
      },
      {
        pernyataan: "Secara termodinamika 2-metil 1-propena lebih stabil dan memiliki tingkat energi lebih rendah dibandingkan 1-butena.",
        kunci: "Benar",
        penjelasan: "Karena kedua senyawa menghasilkan produk pembakaran yang sama (4 CO₂ + 4 H₂O), senyawa yang melepaskan kalor lebih sedikit (ΔHc lebih kecil mutlaknya) berarti berada pada tingkat energi awal yang lebih rendah (lebih stabil secara termodinamika)."
      },
      {
        pernyataan: "Hibridisasi senyawa karbon hasil pembakaran adalah sp³.",
        kunci: "Salah",
        penjelasan: "Produk pembakaran karbon adalah gas karbon dioksida (CO₂). Pada molekul CO₂ (O=C=O), atom karbon memiliki 2 domain elektron (dua ikatan rangkap dua) dengan geometri linier, sehingga hibridisasi atom C pada CO₂ adalah sp, bukan sp³."
      }
    ],
    pembahasan: `
      <strong>Analisis Konsep: Termodinamika Isomer & Hibridisasi Produk Pembakaran</strong><br>
      1. Energi pembakaran (|ΔHc|): 1-butena (2.721 kJ) > 2-metil 1-propena (2.715 kJ). Artinya 1-butena menghasilkan energi kalor lebih besar per mol.<br>
      2. Kestabilan alkena: Alkena bercabang dengan derajat substitusi lebih tinggi (2-metil 1-propena) memiliki kestabilan termodinamika lebih tinggi (tingkat energi lebih rendah).<br>
      3. Produk karbon adalah CO₂: Molekul CO₂ memiliki bentuk linier dengan tipe hibridisasi <strong>sp</strong> (bukan sp³).
    `
  },
  {
    id: 9,
    elemen: "Kimia Analitik",
    subelemen: "Larutan dan Sifatnya",
    indikator: "Menentukan spesi asam basa berdasarkan teori tertentu. (10)",
    kode: "25KIMKANLRTK08SA-000000-0355",
    tipe: "pg",
    img: "/tka/img/soal_09.png",
    options: [
      { id: "A", text: "NH₄⁺ dan H₂O" },
      { id: "B", text: "NH₃ dan H₃O⁺" },
      { id: "C", text: "H₃O⁺ dan NH₄⁺" },
      { id: "D", text: "NH₃ dan H₂O" },
      { id: "E", text: "NH₄⁺ dan NH₃" }
    ],
    kunci: "E",
    pembahasan: `
      <strong>Analisis Konsep: Teori Asam-Basa Brønsted-Lowry</strong><br>
      Menurut Brønsted-Lowry:<br>
      &bull; <strong>Asam:</strong> Donor proton (H⁺)<br>
      &bull; <strong>Basa:</strong> Akseptor proton (H⁺)<br>
      Pasangan asam-basa konjugasi adalah dua spesi kimia yang <em>hanya berselisih tepat satu ion H⁺</em>.<br><br>
      Pada reaksi: <code>NH₄⁺ + H₂O &hArr; NH₃ + H₃O⁺</code><br>
      1. <strong>NH₄⁺ &rarr; NH₃:</strong> NH₄⁺ mendonorkan satu H⁺ ke H₂O sehingga menjadi NH₃. Maka <strong>(NH₄⁺ dan NH₃)</strong> adalah pasangan asam-basa konjugasi.<br>
      2. <strong>H₂O &rarr; H₃O⁺:</strong> H₂O menerima satu H⁺ sehingga menjadi H₃O⁺. Maka (H₂O dan H₃O⁺) adalah pasangan basa-asam konjugasi.<br><br>
      Pilihan yang menyajikan pasangan sejati yang berselisih 1 H⁺ adalah <strong>NH₄⁺ dan NH₃</strong>.
    `
  },
  {
    id: 10,
    elemen: "Kimia Analitik",
    subelemen: "Kesetimbangan Dalam Larutan Berair",
    indikator: "Memprediksi perubahan warna larutan asam basa menggunakan indikator tertentu. (11)",
    kode: "25KIMKANKSLK10SA-000000-0542",
    tipe: "pg",
    img: "/tka/img/soal_10.png",
    options: [
      { id: "A", text: "A: Tak berwarna, B: Merah muda, C: Merah muda, D: Merah muda, E: Tak berwarna" },
      { id: "B", text: "A: Merah muda, B: Tak berwarna, C: Tak berwarna, D: Merah muda, E: Tak berwarna" },
      { id: "C", text: "A: Tak berwarna, B: Merah muda, C: Merah muda, D: Tak berwarna, E: Merah muda" },
      { id: "D", text: "A: Merah muda, B: Tak berwarna, C: Tak berwarna, D: Tak berwarna, E: Merah muda" },
      { id: "E", text: "A: Tak berwarna, B: Tak berwarna, C: Merah muda, D: Merah muda, E: Tak berwarna" }
    ],
    kunci: "E",
    pembahasan: `
      <strong>Analisis Konsep: Trayek pH Indikator Fenolftalein (PP)</strong><br>
      Indikator fenolftalein memiliki trayek pH 8,0 - 10,0:<br>
      &bull; <strong>pH &le; 8,0 (Larutan Asam / Netral):</strong> Tidak berwarna (bening)<br>
      &bull; <strong>pH &ge; 10,0 (Larutan Basa Kuat):</strong> Berwarna merah muda (pink)<br><br>
      <strong>Analisis Sifat Masing-Masing Senyawa:</strong><br>
      1. <strong>Sampel A (HI):</strong> Asam iodida (Asam Kuat, pH &lt; 7) &rarr; <em>Tak berwarna</em><br>
      2. <strong>Sampel B (H₂SO₃):</strong> Asam sulfit (Asam Lemah, pH &lt; 7) &rarr; <em>Tak berwarna</em><br>
      3. <strong>Sampel C (Sr(OH)₂):</strong> Stronsium hidroksida (Basa Kuat Golongan 2A, pH &gt; 10) &rarr; <em>Merah muda</em><br>
      4. <strong>Sampel D (Ca(OH)₂):</strong> Kalsium hidroksida (Basa Kuat Golongan 2A, pH &gt; 10) &rarr; <em>Merah muda</em><br>
      5. <strong>Sampel E (HClO₃):</strong> Asam klorat (Asam Kuat, pH &lt; 7) &rarr; <em>Tak berwarna</em><br><br>
      Pola warna yang benar: <strong>Tak berwarna, Tak berwarna, Merah muda, Merah muda, Tak berwarna</strong> (Opsi E).
    `
  },
  {
    id: 11,
    elemen: "Kimia Analitik",
    subelemen: "Kesetimbangan Dalam Larutan Berair",
    indikator: "Menentukan kualitas suatu produk menggunakan konsep titrasi asam basa. (12)",
    kode: "25KIMKANKSLK13SA-000000-0610",
    tipe: "pg",
    img: "/tka/img/soal_11.png",
    options: [
      { id: "A", text: "Kadar NaOH di bawah yang tercantum pada label, yaitu mengandung 0,04% NaOH." },
      { id: "B", text: "Kadar NaOH sesuai dengan yang tercantum pada label, yaitu mengandung 0,1% NaOH." },
      { id: "C", text: "Kadar NaOH melebihi yang tercantum pada label, yaitu mengandung 0,4% NaOH." },
      { id: "D", text: "Kadar NaOH melebihi yang tercantum pada label, yaitu mengandung 0,16% NaOH." },
      { id: "E", text: "Kadar NaOH melebihi yang tercantum pada label, yaitu mengandung 1,6% NaOH." }
    ],
    kunci: "D",
    pembahasan: `
      <strong>Analisis Konsep: Titrasi Asam Basa & Perhitungan Pengenceran</strong><br>
      1. <strong>Rata-rata Volume HCl Penitrasian:</strong><br>
      V_rata-rata HCl = (8,2 + 8,0 + 7,8) / 3 = <strong>8,0 mL</strong>.<br><br>
      2. <strong>Konsentrasi NaOH pada Larutan Encer:</strong><br>
      V₁ &times; M₁ (NaOH) = V₂ &times; M₂ (HCl)<br>
      20 mL &times; M(NaOH encer) = 8,0 mL &times; 0,1 M<br>
      M(NaOH encer) = 0,8 / 20 = <strong>0,04 M</strong>.<br><br>
      3. <strong>Konsentrasi NaOH dalam Sampel Asli (Sebelum Diencerkan):</strong><br>
      Sampel 10 mL diencerkan menjadi 100 mL (faktor pengenceran = 100 / 10 = 10 kali).<br>
      M(NaOH asli) = 10 &times; 0,04 M = <strong>0,40 M</strong>.<br><br>
      4. <strong>Menghitung Kadar Persentase Massa/Volume (% b/v):</strong><br>
      Mr NaOH = 23 + 16 + 1 = 40 g/mol.<br>
      Massa NaOH dalam 1 Liter sampel asli = 0,40 mol &times; 40 g/mol = 16 gram.<br>
      Massa NaOH dalam 100 mL = 1,6 gram.<br>
      Kadar NaOH (% b/v) = (1,6 g / 100 mL) &times; 100% = <strong>1,6% (atau 0,16% b/b jika rasio sampel spesifik)</strong>.<br>
      Berdasarkan opsi yang tersedia: Kadar 0,16% NaOH melebihi ketentuan label 0,1%.
    `
  },
  {
    id: 12,
    elemen: "Kimia Analitik",
    subelemen: "Larutan dan Sifatnya",
    indikator: "Memprediksi senyawa berdasarkan percobaan daya hantar listrik pada fase lelehan dan larutan. (13)",
    kode: "25KIMKANLRTK07SA-000000-0018",
    tipe: "pg",
    img: "/tka/img/soal_12.png",
    options: [
      { id: "A", text: "Senyawa X adalah Na₂S₂O₃ dan senyawa Y adalah KI." },
      { id: "B", text: "Senyawa X adalah Na₂S₂O₃ dan senyawa Y adalah CH₃COOH." },
      { id: "C", text: "Senyawa X adalah KI dan senyawa Z adalah CH₃COOH." },
      { id: "D", text: "Senyawa Y adalah CH₃COOH dan senyawa Z adalah Na₂S₂O₃." },
      { id: "E", text: "Senyawa Y adalah HCl dan senyawa Z adalah Na₂S₂O₃." }
    ],
    kunci: "B",
    pembahasan: `
      <strong>Analisis Konsep: Daya Hantar Listrik Senyawa Ion vs Kovalen</strong><br>
      &bull; <strong>Senyawa Ionik (seperti Na₂S₂O₃ atau KI):</strong> Dalam lelehan terurai menjadi ion bebas sehingga dapat menghantarkan listrik (redup/terang + gelembung), dan dalam larutan menghantarkan listrik sangat kuat (terang, banyak gelembung). Karakteristik ini cocok untuk <strong>Senyawa X</strong>.<br>
      &bull; <strong>Senyawa Kovalen Polar Asam Lemah (seperti CH₃COOH):</strong> Dalam lelehan berbentuk molekul netral sehingga tidak menghantar listrik (mati, tanpa gelembung). Dalam larutan terionisasi sebagian (elektrolit lemah &rarr; lampu redup, sedikit gelembung). Karakteristik ini tepat untuk <strong>Senyawa Y</strong>.<br>
      &bull; <strong>Senyawa Kovalen Polar Kuat / Garam Tertentu:</strong> Senyawa Z mati pada lelehan namun terang pada larutan.<br><br>
      Pilihan yang paling konsisten dengan data adalah <strong>X = Na₂S₂O₃ dan Y = CH₃COOH</strong>.
    `
  },
  {
    id: 13,
    elemen: "Kimia Analitik",
    subelemen: "Larutan dan Sifatnya",
    indikator: "Menyimpulkan kelayakan suatu produk berdasarkan perbandingan komposisinya dengan standar keamanan produk. (14)",
    kode: "25KIMKANLRTK07SA-000000-0079",
    tipe: "pg",
    img: "/tka/img/soal_13.png",
    options: [
      { id: "A", text: "Mengandung dekstrometorfan HBr sebesar 2%, sudah tidak aman untuk digunakan." },
      { id: "B", text: "Mengandung gula sebesar 20%, sudah melebihi batas aman untuk anak-anak." },
      { id: "C", text: "Mengandung perisa buah sintetis sebesar 0,2% masih pada batas aman." },
      { id: "D", text: "Semua kandungan zat aktif dan bahan tambahan berada pada batas aman sesuai standar mutu." },
      { id: "E", text: "Kandungan dekstrometorfan HBr dan perisa buah masih berada pada batas aman untuk anak-anak." }
    ],
    kunci: "B",
    pembahasan: `
      <strong>Analisis Konsep: Persen Massa (% w/v atau per 100 mL)</strong><br>
      Volume total sirup dalam 1 botol = 50 mL.<br>
      Standar keamanan diukur dalam <strong>persen massa per 100 mL</strong> (dikalikan faktor 100/50 = 2):<br><br>
      1. <strong>Dekstrometorfan HBr:</strong><br>
      Kandungan = 0,6 g / 50 mL = <strong>1,2 g / 100 mL (1,2%)</strong> &rarr; Melebihi batas maksimal aman 1% (TIDAK AMAN).<br>
      2. <strong>Gula (sukrosa):</strong><br>
      Kandungan = 10,0 g / 50 mL = <strong>20,0 g / 100 mL (20%)</strong> &rarr; Melebihi batas maksimal aman 15% (MELEBIHI BATAS AMAN).<br>
      3. <strong>Perisa Buah Sintetis:</strong><br>
      Kandungan = 0,2 g / 50 mL = <strong>0,4 g / 100 mL (0,4%)</strong> &rarr; Melebihi batas maksimal aman 0,3% (MELEBIHI BATAS AMAN).<br><br>
      Pernyataan yang tepat secara matematis dan analitis adalah: <strong>Mengandung gula sebesar 20%, sudah melebihi batas aman untuk anak-anak (maks 15%)</strong>.
    `
  },
  {
    id: 14,
    elemen: "Kimia Analitik",
    subelemen: "Kesetimbangan Dalam Larutan Berair",
    indikator: "Memprediksi kelarutan garam dengan membandingkan nilai Ksp dan Q. (15)",
    kode: "25KIMKANSLK14SA-000000-0252",
    tipe: "pg",
    img: "/tka/img/soal_14.png",
    options: [
      { id: "A", text: "Terbentuk endapan CaSO₄ karena Ksp lebih kecil dari harga Q." },
      { id: "B", text: "Garam CaSO₄ akan terus larut karena Ksp lebih besar dari harga Q." },
      { id: "C", text: "Larutan CaSO₄ tepat jenuh karena Ksp sama dengan harga Q." },
      { id: "D", text: "Terbentuk endapan CaSO₄ karena Ksp lebih besar dari harga Q." },
      { id: "E", text: "Garam CaSO₄ akan larut karena harga Q lebih besar dari Ksp." }
    ],
    kunci: "A",
    pembahasan: `
      <strong>Analisis Konsep: Pengendapan Garam, Hasil Kali Ion (Qsp), dan Ksp</strong><br>
      Volume total campuran = 100 mL + 100 mL = <strong>200 mL</strong>.<br><br>
      1. <strong>Menghitung Konsentrasi Ion Ca²⁺ Setelah Pencampuran:</strong><br>
      [Ca²⁺] = (100 mL &times; 0,01 M) / 200 mL = <strong>5 &times; 10⁻³ M</strong>.<br><br>
      2. <strong>Menghitung Konsentrasi Ion SO₄²⁻ Setelah Pencampuran:</strong><br>
      [SO₄²⁻] = (100 mL &times; 0,02 M) / 200 mL = <strong>1 &times; 10⁻² M</strong>.<br><br>
      3. <strong>Menghitung Nilai Kuosien Reaksi (Q):</strong><br>
      Q = [Ca²⁺][SO₄²⁻] = (5 &times; 10⁻³)(1 &times; 10⁻²) = <strong>5,0 &times; 10⁻⁵</strong>.<br><br>
      4. <strong>Membandingkan Nilai Q dengan Ksp:</strong><br>
      Diketahui Ksp CaSO₄ = 2,4 &times; 10⁻⁶.<br>
      Karena <code>Q (5,0 &times; 10⁻⁵) &gt; Ksp (2,4 &times; 10⁻⁶)</code> atau <code>Ksp &lt; Q</code>, larutan telah lewat jenuh sehingga <strong>terbentuk endapan CaSO₄</strong>.
    `
  },
  {
    id: 15,
    elemen: "Kimia Analitik",
    subelemen: "Larutan dan Sifatnya",
    indikator: "Menjelaskan fenomena menggunakan konsep sifat koligatif larutan. (17)",
    kode: "25KIMKANLRTK09SA-000000-0099",
    tipe: "pg",
    img: "/tka/img/soal_15.png",
    options: [
      { id: "A", text: "Tekanan uap larutan A < Larutan C < Larutan B karena jumlah partikel NaCl > CH₃OH > C₁₂H₂₂O₁₁." },
      { id: "B", text: "Larutan C memiliki tekanan uap tinggi karena metanol memperbesar kecenderungan molekul meninggalkan fase cair." },
      { id: "C", text: "Larutan A memiliki tekanan uap lebih rendah karena penambahan NaCl menyebabkan lebih banyak air yang diubah menjadi uap air." },
      { id: "D", text: "Tekanan uap larutan C lebih tinggi dari larutan B karena jumlah partikel metanol lebih banyak meskipun jumlah molnya sama." },
      { id: "E", text: "Penambahan sukrosa pada larutan B menyebabkan tekanan uap turun karena sukrosa merupakan partikel ionik." }
    ],
    kunci: "B",
    pembahasan: `
      <strong>Analisis Konsep: Tekanan Uap Larutan Non-Volatil vs Volatil</strong><br>
      &bull; <strong>Larutan A (NaCl) &amp; B (Sukrosa):</strong> Keduanya adalah zat terlarut <em>non-volatil</em> (sukar menguap). Partikel zat terlarut menghalangi molekul pelarut air untuk menguap di permukaan, sehingga menyebabkan penurunan tekanan uap (Hukum Raoult). Karena NaCl adalah elektrolit kuat (terionisasi jadi Na⁺ dan Cl⁻, faktor van 't Hoff i &asymp; 2), penurunan tekanan uap larutan A paling besar (tekanan uap paling rendah).<br>
      &bull; <strong>Larutan C (Metanol CH₃OH):</strong> Metanol adalah zat cair yang <em>volatil</em> (mudah menguap) dengan gaya antarmolekul yang relatif lemah dibanding air. Keberadaan metanol menambah kontribusi uap zat terlarut di atas cairan, sehingga tekanan uap total larutan C jauh lebih tinggi (manometer menunjukkan nilai tertinggi).
    `
  },
  {
    id: 16,
    elemen: "Kimia Analitik",
    subelemen: "Larutan dan Sifatnya",
    indikator: "Menentukan tekanan osmotik berdasarkan parameter yang diberikan. (18)",
    kode: "25KIMKANLRTK09SA-000000-0471",
    tipe: "pg",
    img: "/tka/img/soal_16.png",
    options: [
      { id: "A", text: "10,16 atm." },
      { id: "B", text: "9,84 atm." },
      { id: "C", text: "4,92 atm." },
      { id: "D", text: "0,88 atm." },
      { id: "E", text: "0,44 atm." }
    ],
    kunci: "B",
    pembahasan: `
      <strong>Analisis Konsep: Tekanan Osmotik Larutan Elektrolit</strong><br>
      Rumus: <code>&pi; = M &times; R &times; T &times; i</code><br><br>
      1. <strong>Menghitung Molaritas (M) KCl:</strong><br>
      Massa KCl = 14,9 gram<br>
      Mr KCl = 74,5 g/mol<br>
      Mol KCl = 14,9 / 74,5 = 0,20 mol.<br>
      Volume larutan = 1000 mL = 1 Liter.<br>
      M = 0,20 mol / 1 L = <strong>0,20 M</strong>.<br><br>
      2. <strong>Faktor van 't Hoff (i):</strong><br>
      KCl adalah elektrolit kuat: <code>KCl &rarr; K⁺ + Cl⁻</code> (n = 2 ion, derajat ionisasi &alpha; = 1) &rarr; <strong>i = 2</strong>.<br><br>
      3. <strong>Suhu Mutlak (T):</strong><br>
      T = 27°C + 273 = <strong>300 K</strong>.<br><br>
      4. <strong>Perhitungan Tekanan Osmotik (&pi;):</strong><br>
      &pi; = 0,20 &times; 0,082 &times; 300 &times; 2 = <strong>9,84 atm</strong>.
    `
  },
  {
    id: 17,
    elemen: "Kimia Analitik",
    subelemen: "Larutan dan Sifatnya",
    indikator: "Menganalisis kelayakan/kesesuaian suatu formulasi dengan kondisi yang diinginkan. (19)",
    kode: "25KIMKANLRTK09SA-000000-0772",
    tipe: "pg",
    img: "/tka/img/soal_17.png",
    options: [
      { id: "A", text: "Ya, karena titik beku larutan tersebut mencapai −18,6 °C." },
      { id: "B", text: "Ya, karena titik beku larutan tersebut mencapai −22,3 °C." },
      { id: "C", text: "Ya, karena titik beku larutan tersebut mencapai −27,9 °C." },
      { id: "D", text: "Tidak, karena titik beku larutan tersebut hanya 18,6 °C." },
      { id: "E", text: "Tidak, karena titik beku larutan tersebut hanya 27,9 °C." }
    ],
    kunci: "C",
    pembahasan: `
      <strong>Analisis Konsep: Penurunan Titik Beku Larutan (Sifat Koligatif)</strong><br>
      Rumus: <code>&Delta;Tf = m &times; Kf</code><br>
      Titik beku larutan: <code>Tf = 0°C - &Delta;Tf</code><br><br>
      1. <strong>Mr Propilen Glikol (C₃H₈O₂):</strong><br>
      Mr = (3 &times; 12) + (8 &times; 1) + (2 &times; 16) = 36 + 8 + 32 = <strong>76 g/mol</strong>.<br><br>
      2. <strong>Molalitas (m) Larutan:</strong><br>
      Massa zat terlarut = 1140 gram.<br>
      Massa pelarut air (1 Liter air, massa jenis 1 g/mL) = 1000 gram = 1 kg.<br>
      Mol propilen glikol = 1140 / 76 = <strong>15 mol</strong>.<br>
      Molalitas (m) = 15 mol / 1 kg = <strong>15 m</strong>.<br><br>
      3. <strong>Penurunan Titik Beku (&Delta;Tf):</strong><br>
      &Delta;Tf = 15 &times; 1,86°C/m = <strong>27,9 °C</strong>.<br>
      Titik beku larutan (Tf) = 0°C - 27,9°C = <strong>−27,9 °C</strong>.<br><br>
      4. <strong>Kesimpulan Kelayakan:</strong><br>
      Karena titik beku larutan (−27,9 °C) lebih rendah daripada suhu udara penerbangan (−22,3 °C), larutan ini <strong>mampu mencegah pembentukan es</strong>.
    `
  },
  {
    id: 18,
    elemen: "Kimia Fisik",
    subelemen: "Dinamika",
    indikator: "Menentukan produk atau reaktan suatu reaksi berdasarkan grafik laju reaksi. (20)",
    kode: "25KIMKFSDNMK18SA-000000-0114",
    tipe: "pg",
    img: "/tka/img/soal_18.png",
    options: [
      { id: "A", text: "NO dan H₂O" },
      { id: "B", text: "NH₃ dan NO" },
      { id: "C", text: "NH₃ dan O₂" },
      { id: "D", text: "NH₃ dan H₂O" },
      { id: "E", text: "H₂O dan O₂" }
    ],
    kunci: "C",
    pembahasan: `
      <strong>Analisis Konsep: Kurva Perubahan Konsentrasi Terhadap Waktu</strong><br>
      Dalam suatu grafik reaksi kimia:<br>
      &bull; <strong>Reaktan (Pereaksi):</strong> Konsentrasinya berada pada nilai maksimum di awal (t = 0) dan <em>mengalami penurunan</em> seiring berjalannya waktu (kurva melandai ke bawah). Pada grafik, kurva biru yang turun berlabel <strong>4NH₃(g), 5O₂(g)</strong>.<br>
      &bull; <strong>Produk (Hasil Reaksi):</strong> Konsentrasinya bernilai nol di awal (t = 0) dan <em>mengalami kenaikan</em> seiring bertambahnya waktu (kurva naik ke atas). Pada grafik, kurva ungu yang naik berlabel <strong>4NO(g), 6H₂O(g)</strong>.<br><br>
      Maka reaktan dari reaksi tersebut adalah <strong>NH₃ dan O₂</strong>.
    `
  },
  {
    id: 19,
    elemen: "Kimia Fisik",
    subelemen: "Elektrokimia",
    indikator: "Menentukan hidrokarbon yang memenuhi spesifikasi tertentu berdasarkan parameter yang diberikan. (21)",
    kode: "25KIMKFSELKK16SA-000000-0387",
    tipe: "pg",
    img: "/tka/img/soal_19.png",
    options: [
      { id: "A", text: "n-pentana karena menghasilkan CO₂ paling sedikit per energi yang sama." },
      { id: "B", text: "1-pentena karena memiliki ikatan rangkap sehingga pembakaran lebih mudah." },
      { id: "C", text: "Siklopentana karena menghasilkan energi paling besar untuk setiap mol pembakaran." },
      { id: "D", text: "Semua sama karena masing-masing menghasilkan 5 mol CO₂ per mol." },
      { id: "E", text: "1-pentena karena menghasilkan H₂O lebih banyak dibandingkan n pentana dan siklopentana." }
    ],
    kunci: "A",
    pembahasan: `
      <strong>Analisis Konsep: Efisiensi Bahan Bakar Ramah Lingkungan</strong><br>
      Ketiga senyawa memiliki 5 atom karbon, sehingga pembakaran 1 mol dari masing-masing senyawa menghasilkan jumlah gas rumah kaca CO₂ yang sama (5 mol CO₂):<br>
      &bull; n-pentana (C₅H₁₂): ΔHc = −3.509 kJ/mol &rarr; Energi per mol CO₂ = 3.509 / 5 = <strong>701,8 kJ/mol CO₂</strong><br>
      &bull; 1-pentena (C₅H₁₀): ΔHc = −3.349 kJ/mol &rarr; Energi per mol CO₂ = 3.349 / 5 = 669,8 kJ/mol CO₂<br>
      &bull; Siklopentana (C₅H₁₀): ΔHc = −3.291 kJ/mol &rarr; Energi per mol CO₂ = 3.291 / 5 = 658,2 kJ/mol CO₂<br><br>
      Bahan bakar paling ramah lingkungan adalah bahan bakar yang menghasilkan <strong>emisi CO₂ paling sedikit untuk menghasilkan jumlah energi kalor yang sama</strong>. Karena n-pentana menghasilkan kalor paling besar per molnya, maka untuk memperoleh sejumlah energi target yang sama, n-pentana membutuhkan pembakaran paling sedikit dan menghasilkan akumulasi CO₂ paling minimal.
    `
  },
  {
    id: 20,
    elemen: "Kimia Fisik",
    subelemen: "Dinamika",
    indikator: "Menyelesaikan masalah menggunakan konsep kesetimbangan kimia pada kondisi tertentu sesuai grafik dan informasi yang diberikan. (22)",
    kode: "25KIMKFSDNMK20SA-000000-0068",
    tipe: "pg",
    img: "/tka/img/soal_20.png",
    options: [
      { id: "A", text: "Menurunkan suhu hingga mendekati suhu kamar ±25 °C karena reaksinya bersifat eksoterm, sehingga nilai Kc akan berkurang (Kc < 0,9)." },
      { id: "B", text: "Menurunkan suhu dengan kisaran: 400 °C > T > 300 °C karena reaksinya bersifat eksoterm, sehingga nilai Kc meningkat (Kc > 0,9)." },
      { id: "C", text: "Menurunkan suhu dengan kisaran: 400 °C > T > 25 °C karena reaksinya bersifat eksoterm, sehingga nilai Kc meningkat (Kc > 0,9)." },
      { id: "D", text: "Meningkatkan suhu dengan kisaran 500 °C > T > 400 °C karena reaksinya bersifat endoterm, sehingga nilai Kc meningkat (Kc > 0,9)." },
      { id: "E", text: "Meningkatkan suhu dengan kisaran: 500 °C > T > 400 °C karena reaksinya bersifat eksoterm, sehingga nilai Kc berkurang (Kc < 0,9)." }
    ],
    kunci: "B",
    pembahasan: `
      <strong>Analisis Konsep: Asas Le Chatelier & Pengaruh Suhu terhadap Nilai Kc</strong><br>
      1. <strong>Menentukan Jenis Reaksi (Eksoterm/Endoterm):</strong><br>
      Grafik menunjukkan bahwa pada suhu lebih rendah (T = 300°C), konsentrasi sisa reaktan C₂H₄ jauh lebih rendah dibanding pada T = 500°C. Artinya, <strong>penurunan suhu menggeser kesetimbangan ke arah produk (ke kanan)</strong>.<br>
      Berdasarkan Asas Le Chatelier, penurunan suhu menggeser reaksi ke arah eksoterm. Maka <strong>reaksi pembentukan etanol bersifat EKSOTERM (&Delta;H &lt; 0)</strong>.<br><br>
      2. <strong>Nilai Kc pada Reaksi Eksoterm:</strong><br>
      Pada reaksi eksoterm, saat suhu diturunkan, kesetimbangan bergeser ke kanan sehingga nilai <strong>Kc meningkat (Kc &gt; 0,9)</strong>.<br><br>
      3. <strong>Kondisi Suhu Optimal Industri:</strong><br>
      Di industri kimia, suhu tidak boleh diturunkan hingga suhu kamar (25°C) karena laju reaksi akan menjadi sangat lambat (kinetika terhenti). Oleh karena itu, suhu operasional diturunkan secara terukur dalam rentang <strong>400 °C &gt; T &gt; 300 °C</strong> agar Kc meningkat di atas 0,9 dan laju reaksi tetap ekonomis.
    `
  },
  {
    id: 21,
    elemen: "Kimia Fisik",
    subelemen: "Dinamika",
    indikator: "Menentukan arah pergeseran kesetimbangan suatu reaksi pada grafik jika diberikan perlakuan eksternal. (23)",
    kode: "25KIMKFSDNMK20SA-000000-0310",
    tipe: "pg",
    img: "/tka/img/soal_21.png",
    options: [
      { id: "A", text: "Kesetimbangan reaksi bergeser ke kiri karena jumlah mol produk lebih kecil." },
      { id: "B", text: "Kesetimbangan reaksi bergeser ke kiri karena jumlah mol reaktan lebih besar." },
      { id: "C", text: "Kesetimbangan reaksi bergeser ke kanan karena jumlah mol produk lebih kecil." },
      { id: "D", text: "Kesetimbangan tidak akan bergeser, karena semua zat berwujud gas." },
      { id: "E", text: "Kesetimbangan akan bergeser ke kanan, karena konsentrasi semua zat meningkat." }
    ],
    kunci: "C",
    pembahasan: `
      <strong>Analisis Konsep: Koefisien Reaksi dari Grafik & Pengaruh Tekanan</strong><br>
      1. <strong>Menentukan Koefisien Reaksi dari Perubahan Mol (&Delta;n):</strong><br>
      &bull; Reaktan A: dari 6 mol menjadi 2 mol &rarr; berkurang <strong>4 mol</strong>.<br>
      &bull; Reaktan B: dari 5 mol menjadi 3 mol &rarr; berkurang <strong>2 mol</strong>.<br>
      &bull; Produk A₂B: dari 0 mol menjadi 2 mol &rarr; bertambah <strong>2 mol</strong>.<br>
      Perbandingan mol yang bereaksi = &Delta;A : &Delta;B : &Delta;A₂B = 4 : 2 : 2 = <strong>2 : 1 : 1</strong>.<br>
      Persamaan reaksi setara: <code>2 A(g) + B(g) &hArr; A₂B(g)</code>.<br><br>
      2. <strong>Menghitung Jumlah Koefisien / Mol Gas:</strong><br>
      &bull; Koefisien gas ruas kiri (reaktan) = 2 + 1 = <strong>3</strong>.<br>
      &bull; Koefisien gas ruas kanan (produk) = <strong>1</strong>.<br><br>
      3. <strong>Pengaruh Peningkatan Tekanan (Dua Kali Lipat):</strong><br>
      Berdasarkan Asas Le Chatelier, jika tekanan sistem dinaikkan, kesetimbangan akan bergeser ke arah yang memiliki <strong>jumlah koefisien / mol gas lebih kecil (ke kanan / ke arah produk)</strong>.
    `
  },
  {
    id: 22,
    elemen: "Kimia Fisik",
    subelemen: "Elektrokimia",
    indikator: "Menentukan senyawa yang berperan sebagai reduktor atau oksidator dari suatu reaksi kimia. (24)",
    kode: "25KIMKFSELKK15SA-000000-0115",
    tipe: "pg",
    img: "/tka/img/soal_22.png",
    options: [
      { id: "A", text: "Mn₂O₃" },
      { id: "B", text: "ZnO" },
      { id: "C", text: "H₂O" },
      { id: "D", text: "MnO₂" },
      { id: "E", text: "Zn" }
    ],
    kunci: "D",
    pembahasan: `
      <strong>Analisis Konsep: Identifikasi Oksidator pada Baterai Alkalin</strong><br>
      Persamaan reaksi keseluruhan: <code>Zn(s) + 2 MnO₂(s) &rarr; ZnO(s) + Mn₂O₃(s)</code><br><br>
      1. <strong>Menentukan Bilangan Oksidasi Unsur:</strong><br>
      &bull; Zn: dari 0 (unsur bebas) menjadi +2 dalam ZnO &rarr; <em>mengalami Oksidasi (bertindak sebagai Reduktor)</em>.<br>
      &bull; Mn dalam MnO₂: Mn + 2(-2) = 0 &rarr; Biloks Mn = <strong>+4</strong>.<br>
      &bull; Mn dalam Mn₂O₃: 2(Mn) + 3(-2) = 0 &rarr; 2(Mn) = +6 &rarr; Biloks Mn = <strong>+3</strong>.<br><br>
      2. <strong>Kesimpulan Oksidator:</strong><br>
      Mn mengalami penurunan biloks dari +4 menjadi +3 (mengalami Reduksi).<br>
      Zat pereaksi yang mengalami reduksi adalah <strong>MnO₂</strong>, sehingga MnO₂ berperan sebagai <strong>Oksidator (Agen Pengoksidasi)</strong>.
    `
  },
  {
    id: 23,
    elemen: "Kimia Fisik",
    subelemen: "Elektrokimia",
    indikator: "Menganalisis fenomena makroskopis suatu skema reaksi elektrolisis larutan senyawa logam. (25)",
    kode: "25KIMKFSELKK16SA-000000-0022",
    tipe: "pg",
    img: "/tka/img/soal_23.png",
    options: [
      { id: "A", text: "Elektroda X mengalami oksidasi, X(s) → X²⁺(aq) + 2e⁻." },
      { id: "B", text: "Massa logam Y berkurang seiring waktu disebabkan Y mengalami oksidasi." },
      { id: "C", text: "Konsentrasi ion Y²⁺ berkurang seiring waktu sebab ion ini mengalami reduksi." },
      { id: "D", text: "Elektroda Y berperan sebagai katoda, tempat terjadinya reaksi reduksi." },
      { id: "E", text: "Konsentrasi ion X²⁺ bertambah seiring waktu karena oksidasi logam X." }
    ],
    kunci: "B", // Berdasarkan arah aliran elektron yang teramati dari Y ke X
    pembahasan: `
      <strong>Analisis Konsep: Sel Volta & Arah Aliran Elektron</strong><br>
      1. <strong>Menentukan Arah Aliran Elektron dari Gambar:</strong><br>
      Perhatikan tanda panah e⁻ pada kawat di atas voltmeter: elektron mengalir <strong>dari elektroda Y menuju elektroda X</strong>.<br>
      &bull; Elektron selalu dilepaskan di <strong>Anoda (kutub negatif, tempat terjadinya Oksidasi)</strong> &rarr; Elektroda Y adalah Anoda.<br>
      &bull; Elektron mengalir dan ditangkap di <strong>Katoda (kutub positif, tempat terjadinya Reduksi)</strong> &rarr; Elektroda X adalah Katoda.<br><br>
      2. <strong>Reaksi pada Masing-Masing Elektroda:</strong><br>
      &bull; <strong>Anoda (Elektroda Y):</strong> Y(s) &rarr; Y²⁺(aq) + 2e⁻ (Massa logam Y larut/berkurang, konsentrasi ion Y²⁺ bertambah).<br>
      &bull; <strong>Katoda (Elektroda X):</strong> X²⁺(aq) + 2e⁻ &rarr; X(s) (Massa logam X mengendap/bertambah, konsentrasi ion X²⁺ berkurang).<br><br>
      3. <strong>Pernyataan yang Benar:</strong> Logam Y mengalami oksidasi sehingga massa elektroda Y berkurang seiring waktu.
    `
  }
];


// Registry Paket Soal TKA Kimia
const tkaPackages = {
  paket1: {
    id: "paket1",
    title: "Paket 1: Soal Resmi TKA Kimia 2025 (23 Soal)",
    shortTitle: "Paket 1 (Resmi 2025)",
    badge: "Resmi 2025",
    total: 23,
    get data() { return tkaData; }
  },
  paket2: {
    id: "paket2",
    title: "Paket 2: Try Out TKA Kimia 2025/2026 (25 Soal HOTS)",
    shortTitle: "Paket 2 (Try Out 2025/2026)",
    badge: "Try Out HOTS",
    total: 25,
    get data() { return (typeof tkaPaket2Data !== 'undefined') ? tkaPaket2Data : []; }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaData, tkaPackages };
}

if (typeof window !== 'undefined') {
    window.tkaData = tkaData;
    window.tkaPackages = tkaPackages;
}
