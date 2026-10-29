// scripts/build_sejarah_paket2.js
const fs = require('fs');
const path = require('path');

const sejarahPaket2Data = [
  // 1. Konsep Diakronik vs Sinkronik (PG)
  {
    id: 1,
    elemen: "Konsep Dasar Ilmu Sejarah",
    subelemen: "Cara Berpikir Diakronik (Kronologis) & Sinkronik",
    indikator: "Membedakan cara berpikir diakronik dan sinkronik dalam merekonstruksi peristiwa sejarah.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang sejarawan menyusun karya ilmiah berjudul <em>"Kondisi Sosial, Ekonomi, dan Struktur Stratifikasi Masyarakat Kota Surabaya Pasca-Pertempuran 10 November 1945"</em>. Dalam penelitiannya, ia membedah secara mendalam interaksi antarkelompok masyarakat, pembagian peran pemuda laskar, dan dampak kerusakan fasilitas perkotaan pada rentang waktu November hingga Desember 1945 tanpa memanjang ke tahun-tahun berikutnya.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pendekatan cara berpikir sejarah yang diterapkan oleh sejarawan tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Diakronik, karena memfokuskan pada runtutan kejadian secara berkesinambungan lintas abad" },
      { id: "B", text: "Sinkronik, karena mempelajari peristiwa sejarah pada ruang yang meluas dengan kurun waktu yang terbatas dan mendalam secara multidimensional" },
      { id: "C", text: "Periodisasi, karena membagi sejarah Indonesia ke dalam babakan zaman purba hingga modern" },
      { id: "D", text: "Anakronisme, karena mencampuradukkan fakta masa lalu dengan teknologi masa kini" },
      { id: "E", text: "Kronologi, karena menata daftar tanggal peristiwa secara berurutan tanpa analisis sosial" }
    ],
    kunci: "B",
    pembahasan: `<strong>Analisis Cara Berpikir Sejarah:</strong><br>
&bull; <strong>Cara Berpikir Sinkronik:</strong> Meneliti gejala atau peristiwa sejarah dengan ruang yang meluas (mengkaji struktur sosial, ekonomi, politik secara mendalam) tetapi dalam batas waktu yang sempit/terbatas (misal hanya akhir tahun 1945). Pendekatan ini dipinjam dari ilmu-ilmu sosial (sosiologi, antropologi, ekonomi).<br>
&bull; <strong>Cara Berpikir Diakronik (Kronologis):</strong> Memanjang dalam waktu tetapi menyempit dalam ruang, mengutamakan urutan kausalitas perkembangan suatu peristiwa dari waktu ke waktu.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-001"
  },

  // 2. Kritik Sumber / Metodologi Sejarah (MCMA)
  {
    id: 2,
    elemen: "Metodologi Sejarah",
    subelemen: "Kritik Sumber (Verifikasi)",
    indikator: "Membedakan kritik eksternal (otentisitas) dan kritik internal (kredibilitas) pada dokumen sejarah primer.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam tahap verifikasi (kritik sumber), seorang sejarawan wajib menguji keaslian dan kebenaran isi dari dokumen arsip masa kolonial yang baru ditemukan di museum luar negeri.
</p>
<p class="font-semibold text-slate-900 mb-2">
Langkah-langkah yang tergolong dalam <strong>Kritik Eksternal</strong> untuk menguji keaslian fisik sumber sejarah adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Menguji usia kertas, jenis tinta, dan watermark bahan kertas dokumen di laboratorium kimia radiokarbon" },
      { id: "B", text: "Meneliti gaya bahasa, ejaan kuno, dan keaslian tanda tangan atau stempel segel resmi penerbit dokumen" },
      { id: "C", text: "Menilai apakah penulis dokumen memiliki integritas kejujuran atau berada di bawah tekanan pihak penguasa" },
      { id: "D", text: "Membandingkan apakah isi pernyataan saksi sejarah masuk akal dan didukung oleh dokumen lain yang sezaman" },
      { id: "E", text: "Memeriksa bentuk fisik huruf mesin ketik atau bentuk aksara kaligrafi naskah untuk membuktikan dokumen tersebut bukan hasil pemalsuan" }
    ],
    kunci: ["A", "B", "E"],
    pembahasan: `<strong>Metodologi Sejarah: Kritik Eksternal vs Internal:</strong><br>
&bull; <strong>Kritik Eksternal (Otentisitas Fisik - Pilihan A, B, dan E):</strong> Bertujuan membuktikan keaslian fisik bahan dokumen sejarah (apakah dokumen itu asli atau tiruan/palsu). Meliputi analisis bahan kertas, jenis tinta, cap stempel, tanda tangan, gaya huruf, ejaan bahasa.<br>
&bull; <strong>Kritik Internal (Kredibilitas Isi - Pilihan C dan D):</strong> Bertujuan menguji kebenaran isi narasi, kesaksian, objektivitas saksi, dan reliabilitas informasi.<br><br>
<strong>Kunci Jawaban: A, B, dan E</strong>`,
    kode: "25SEJ-PRED2-002"
  },

  // 3. Historiografi Sejarah (Benar/Salah + Tabel)
  {
    id: 3,
    elemen: "Metodologi Sejarah",
    subelemen: "Perkembangan Historiografi di Indonesia",
    indikator: "Mengevaluasi ciri khas historiografi tradisional, kolonial, dan nasional (Indonesia-sentris).",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Penulisan sejarah (historiografi) di Indonesia mengalami pergeseran paradigma dari masa ke masa sesuai kepentingan zaman:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-amber-600 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-amber-700">Jenis Historiografi</th>
        <th class="p-2.5 border border-amber-700">Fokus Sudut Pandang</th>
        <th class="p-2.5 border border-amber-700">Ciri Karakteristik Utama</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 font-bold border border-slate-200">Historiografi Tradisional</td>
        <td class="p-2 border border-slate-200">Istana-sentris (Keraton)</td>
        <td class="p-2 border border-slate-200">Mitologis, magis-religius, melegitimasi kekuasaan raja keturunan dewa</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 font-bold border border-slate-200">Historiografi Kolonial</td>
        <td class="p-2 border border-slate-200">Eropa/Neerlando-sentris</td>
        <td class="p-2 border border-slate-200">Aktivitas pejabat VOC/Hindia Belanda, pejuang pribumi dianggap pemberontak</td>
      </tr>
      <tr>
        <td class="p-2 font-bold border border-slate-200">Historiografi Nasional</td>
        <td class="p-2 border border-slate-200">Indonesia-sentris</td>
        <td class="p-2 border border-slate-200">Rakyat Indonesia sebagai subjek sentral, menumbuhkan integritas kebangsaan</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan berikut berdasarkan karakteristik historiografi:
</p>`,
    items: [
      {
        pernyataan: "Kitab Babad Tanah Jawi dan Kitab Hikayat Raja-Raja Pasai merupakan contoh historiografi tradisional yang kental dengan unsur magis-religius untuk memperkuat legitimasi ketuhanan raja.",
        kunci: "Benar",
        penjelasan: "Karya sastra babad dan hikayat klasik ditulis oleh pujangga keraton berorientasi istanasentris dengan mitos legitimasi raja."
      },
      {
        pernyataan: "Karya historiografi kolonial memposisikan tokoh perlawanan seperti Pangeran Diponegoro dan Tuanku Imam Bonjol sebagai pahlawan pembela kedaulatan rakyat nusantara.",
        kunci: "Salah",
        penjelasan: "Dalam sudut pandang kolonial (Neerlandosentris), Diponegoro dan Imam Bonjol dicap sebagai pemberontak atau pengacau ketertiban umum (rust en orde)."
      },
      {
        pernyataan: "Seminar Sejarah Nasional I tahun 1957 di Yogyakarta menjadi tonggak dekolonisasi historiografi menuju penulisan sejarah dengan pendekatan Indonesia-sentris.",
        kunci: "Benar",
        penjelasan: "Seminar Sejarah Nasional 1957 merumuskan perlunya penulisan sejarah dari sudut pandang pengalaman dan perjuangan bangsa Indonesia sendiri."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Analisis Historiografi Indonesia:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Historiografi tradisional bersifat regiosentris dan istanasentris, mencampurkan mitologi dan silsilah dewa untuk mengukuhkan wibawa raja.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Historiografi kolonial mengabaikan peran rakyat lokal dan menamai pahlawan nusantara dengan sebutan pemberontak (*opstandeling*).<br>
3. <strong>Pernyataan 3 (Benar):</strong> Seminar Sejarah Nasional 1957 mempelopori penulisan sejarah Indonesia-sentris ilmiah multidimensional (dipelopori Prof. Sartono Kartodirdjo).<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`,
    kode: "25SEJ-PRED2-003"
  },

  // 4. Asal-Usul Nenek Moyang: Teori Out of Taiwan (PG + Diagram SVG)
  {
    id: 4,
    elemen: "Zaman Praaksara di Nusantara",
    subelemen: "Asal-Usul Nenek Moyang & Rumpun Austronesia",
    indikator: "Menganalisis bukti linguistik dan arkeologis pada Teori Out of Taiwan mengenai migrasi bangsa Austronesia.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Berdasarkan pendekatan genetika molekuler dan linguistik komparatif yang dirumuskan oleh Peter Bellwood dan Robert Blust, nenek moyang bangsa Indonesia berasal dari Kepulauan Formosa (Taiwan) melalui <strong>Teori Out of Taiwan</strong>.
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Rute Migrasi Bangsa Penutur Austronesia (Teori Out of Taiwan):</div>
  <svg viewBox="0 0 500 200" class="w-full max-w-lg mx-auto bg-sky-50 border border-sky-200 rounded-lg shadow-sm">
    <!-- Daratan Taiwan -->
    <rect x="230" y="20" width="60" height="25" rx="5" fill="#f59e0b" stroke="#d97706" />
    <text x="240" y="37" font-size="11" font-weight="bold" fill="#ffffff">Taiwan</text>

    <!-- Jalur Panah ke Filipina -->
    <line x1="260" y1="48" x2="260" y2="75" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow)" />
    <!-- Filipina -->
    <rect x="225" y="80" width="70" height="25" rx="5" fill="#10b981" stroke="#059669" />
    <text x="235" y="97" font-size="11" font-weight="bold" fill="#ffffff">Filipina</text>

    <!-- Jalur Barat (ke Kalimantan & Sumatra) -->
    <line x1="230" y1="105" x2="140" y2="145" stroke="#dc2626" stroke-width="2.5" />
    <rect x="70" y="145" width="120" height="30" rx="5" fill="#3b82f6" stroke="#1d4ed8" />
    <text x="78" y="165" font-size="11" font-weight="bold" fill="#ffffff">Sulawesi &amp; Barat</text>

    <!-- Jalur Timur (ke Maluku & Pasifik) -->
    <line x1="290" y1="105" x2="380" y2="145" stroke="#dc2626" stroke-width="2.5" />
    <rect x="330" y="145" width="130" height="30" rx="5" fill="#8b5cf6" stroke="#6d28d9" />
    <text x="338" y="165" font-size="11" font-weight="bold" fill="#ffffff">Maluku &amp; Pasifik</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Bukti kebudayaan material dan teknologi maritim yang dibawa oleh penutur rumpun bahasa Austronesia saat bermigrasi ke nusantara adalah...
</p>`,
    options: [
      { id: "A", text: "Teknologi pembuatan perahu bercadik ganda, tradisi bercocok tanam padi gaga, dan beliung persegi yang dihaluskan" },
      { id: "B", text: "Keahlian berburu binatang raksasa menggunakan kapak genggam kasar peble Paleolitikum" },
      { id: "C", text: "Kemampuan membuat persenjataan mesiu dan teknik cetak logam lilin hilang (a cire perdue)" },
      { id: "D", text: "Penggunaan huruf Pallawa dan bahasa Sanskerta pada prasasti batu yupa" },
      { id: "E", text: "Tradisi pemujaan arwah nenek moyang menggunakan menhir dan sarkofagus emas murni" }
    ],
    kunci: "A",
    pembahasan: `<strong>Bukti Budaya Migrasi Austronesia (Teori Out of Taiwan):</strong><br>
Bangsa penutur rumpun bahasa <strong>Austronesia</strong> yang bermigrasi sekitar 2.000-1.500 SM (Neolitikum) membawa kemajuan peradaban tinggi ke Nusantara:<br>
1. <strong>Teknologi Maritim:</strong> Menguasai navigasi astronomi laut lepas dan merancang <strong>perahu bercadik ganda</strong> yang stabil melintasi samudera.<br>
2. <strong>Teknologi Pertanian:</strong> Mengenal domestikasi tanaman (bercocok tanam padi, talas, keladi) dan hewan ternak (babi, anjing, ayam).<br>
3. <strong>Benda Budaya:</strong> Memproduksi <strong>beliung persegi</strong> dan kapak lonjong yang diasah halus, serta tembikar berhias.<br><br>
<strong>Kunci Jawaban: A</strong>`,
    kode: "25SEJ-PRED2-004"
  },

  // 5. Kerajaan Hindu-Buddha: Sriwijaya (PG)
  {
    id: 5,
    elemen: "Zaman Hindu-Buddha di Nusantara",
    subelemen: "Kerajaan Maritim Sriwijaya",
    indikator: "Menjelaskan faktor pendukung utama Kerajaan Sriwijaya berkembang menjadi pusat kemaritiman dan pendidikan agama Buddha di Asia Tenggara.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Catatan musafir Tiongkok, I-Tsing (Yijing), yang berkunjung ke Sumatra pada abad ke-7 Masehi mencatat bahwa terdapat lebih dari seribu biksu yang belajar agama Buddha Mahayana di Sriwijaya di bawah bimbingan guru ternama Sakyakirti.
</p>
<p class="font-semibold text-slate-900 mb-2">
Faktor geografis dan strategis utama yang mendorong Kerajaan Sriwijaya tumbuh menjadi imperium maritim terbesar di Asia Tenggara adalah...
</p>`,
    options: [
      { id: "A", text: "Memiliki tanah vulkanik yang sangat subur untuk pertanian padi sawah basah di pedalaman" },
      { id: "B", text: "Menguasai dua jalur perairan kunci perdagangan internasional, yaitu Selat Malaka dan Selat Sunda, didukung armada laut yang tangguh" },
      { id: "C", text: "Berhasil menguasai tambang emas dan perak terbesar di daratan Tiongkok selatan" },
      { id: "D", text: "Menolak seluruh pedagang asing selain pedagang yang beragama Buddha" },
      { id: "E", text: "Terlindung dari ancaman invasi karena dikelilingi oleh benteng batu pualam bertingkat" }
    ],
    kunci: "B",
    pembahasan: `<strong>Kejayaan Kemaritiman Sriwijaya:</strong><br>
Sriwijaya merupakan <em>thalassocracy</em> (negara maritim) yang basis kekuatannya terletak pada:<br>
1. <strong>Lokasi Geostrategis:</strong> Mengontrol pintu gerbang <strong>Selat Malaka</strong> dan <strong>Selat Sunda</strong>, yang menjadi simpul wajib kapal niaga antara India, Timur Tengah, dan Tiongkok.<br>
2. <strong>Armada Angkatan Laut Tangguh:</strong> Menjamin keamanan jalur pelayaran dari perompak laut (*orang laut*) serta memungut bea cukai impor-ekspor.<br>
3. <strong>Pusat Ilmu Pengetahuan:</strong> Menjadi pusat pembelajaran tata bahasa Sanskerta dan teologi Buddha Mahayana terkemuka di Asia.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-005"
  },

  // 6. Kerajaan Majapahit & Sumpah Palapa (MCMA)
  {
    id: 6,
    elemen: "Zaman Hindu-Buddha di Nusantara",
    subelemen: "Kejayaan Kerajaan Majapahit & Integrasi Nusantara",
    indikator: "Menganalisis makna politik dan kultural dari Sumpah Palapa Mahapatih Gajah Mada.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam Kitab Pararaton dikisahkan bahwa pada saat pengangkatannya menjadi Mahapatih Amangkubhumi Majapahit pada tahun 1336 Masehi di hadapan Ratu Tribhuwana Tunggadewi, Gajah Mada mengucapkan <strong>Sumpah Palapa</strong>:
<br><em>"Lamun huwus kalah nusantara isun amukti palapa, lamun kalah ring Gurun, ring Seran, Tanjung Pura, ring Haru, ring Pahang, Dompo, ring Bali, Sunda, Palembang, Tumasik, samana isun amukti palapa."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Makna historis dan nilai kebangsaan yang terkandung dalam ikrar Sumpah Palapa tersebut adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Komitmen pantang menikmati kenikmatan duniawi/pribadi sebelum berhasil menyatukan wilayah kepulauan nusantara di bawah naungan kedaulatan Majapahit" },
      { id: "B", text: "Gagasan visioner tentang integrasi geopolitik nusantara yang menjadi inspirasi historis bagi konsep Negara Kesatuan Republik Indonesia" },
      { id: "C", text: "Upaya menghapuskan seluruh sistem kepercayaan lokal nusantara dan memaksakan satu agama tunggal" },
      { id: "D", text: "Tekad memperluas jaringan hegemoni perdagangan maritim dan stabilitas wilayah nusantara dari ancaman hegemoni Dinasti Mongol (Yuan)" },
      { id: "E", text: "Perjanjian persekutuan dagang eksklusif antara Majapahit dengan imperium Romawi" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Makna Filosofis &amp; Politis Sumpah Palapa:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> *Amukti palapa* bermakna menikmati istirahat atau kesenangan materi/makanan enak. Gajah Mada bersumpah menanggalkan pamrih pribadi demi cita-cita persatuan.<br>
&bull; <strong>Pernyataan B (Benar):</strong> Konsep geopolitik *Nusantara* yang dipersatukan Majapahit diakui para pendiri bangsa (seperti Mohammad Yamin dan Soekarno) sebagai inspirasi integrasi teritorial NKRI.<br>
&bull; <strong>Pernyataan D (Benar):</strong> Penyatuan nusantara bertujuan membendung ekspansi imperium Tiongkok pasca-serangan tentara Kubilai Khan ke Singasari.<br>
&bull; <strong>Pernyataan C &amp; E (Salah):</strong> Majapahit menjunjung tinggi toleransi keyakinan (*Bhinneka Tunggal Ika tan Hana Dharma Mangrwa*).<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`,
    kode: "25SEJ-PRED2-006"
  },

  // 7. Saluran Islamisasi di Nusantara (PG)
  {
    id: 7,
    elemen: "Zaman Islam di Nusantara",
    subelemen: "Proses & Saluran Islamisasi",
    indikator: "Mengidentifikasi saluran kesenian dan akulturasi budaya lokal dalam strategi dakwah Walisongo.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Proses penyebaran agama Islam di Nusantara berlangsung secara damai tanpa penaklukan militer berdarah melalui berbagai saluran adaptif. Salah satu anggota Walisongo, Sunan Kalijaga, menggunakan media pertunjukan wayang kulit purwa dan gending gamelan (seperti Ilir-Ilir) dengan menyisipkan nilai-nilai tauhid, syahadatain (Sekaten), dan akhlak Islam ke dalam cerita epos Mahabarata.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pendekatan dakwah yang diterapkan oleh Sunan Kalijaga tersebut menunjukkan saluran Islamisasi melalui jalur...
</p>`,
    options: [
      { id: "A", text: "Saluran perkawinan politik antardinasti" },
      { id: "B", text: "Saluran akulturasi kesenian dan kebudayaan rakyat" },
      { id: "C", text: "Saluran penaklukan militer dan ekspansi teritorial" },
      { id: "D", text: "Saluran birokrasi peradilan syariah formal" },
      { id: "E", text: "Saluran monopoli perniagaan rempah-rempah" }
    ],
    kunci: "B",
    pembahasan: `<strong>Saluran Islamisasi Melalui Kesenian:</strong><br>
Walisongo, khususnya <strong>Sunan Kalijaga</strong> dan <strong>Sunan Bonang</strong>, mengedepankan pendekatan kultural toleran (*kearifan lokal*):<br>
1. Mengadaptasi seni pertunjukan wayang kulit dengan mengganti lakon pemujaan dewa menjadi pengenalan rukun Islam dan kalimat syahadat (Jimat Kalimasada).<br>
2. Menciptakan tembang gending Jawa yang sarat petuah spiritual (Lir-Ilir, Dandanggula).<br>
3. Memperkenalkan perayaan Sekaten (dari kata *Syahadatain*) menjelang Maulid Nabi Muhammad SAW di halaman Masjid Agung Demak.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-007"
  },

  // 8. VOC & Kebijakan Kolonialisme (Benar/Salah)
  {
    id: 8,
    elemen: "Kolonialisme & Imperialisme di Indonesia",
    subelemen: "Monopoli Perdagangan VOC di Maluku",
    indikator: "Mengevaluasi kebijakan represif VOC berupa Pelayaran Hongi dan Ekstirpasi di Kepulauan Maluku.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Persekutuan Dagang Hindia Timur Belanda (VOC) yang didirikan tahun 1602 dibekali hak-hak istimewa (<em>Octrooi</em>) oleh parlemen Belanda untuk menegakkan monopoli perdagangan rempah-rempah di Nusantara. Tentukan kebenaran dari masing-masing pernyataan berikut:
</p>`,
    items: [
      {
        pernyataan: "Hak Ekstirpasi memberi wewenang legal bagi VOC untuk menebang dan memusnahkan pohon cengkih dan pala milik rakyat agar jumlah produksi rempah terkendali dan harga tetap tinggi di pasar Eropa.",
        kunci: "Benar",
        penjelasan: "Ekstirpasi bertujuan menjaga hukum suplai dan permintaan agar VOC dapat memonopoli keuntungan dengan membatasi jumlah pasokan cengkih."
      },
      {
        pernyataan: "Pelayaran Hongi (Hongitochten) adalah patroli armada perahu kora-kora bersenjata lengkap milik VOC untuk mengawasi dan menindak rakyat Maluku yang menyelundupkan rempah ke pedagang lain.",
        kunci: "Benar",
        penjelasan: "Pelayaran Hongi mengawasi penyelundupan dan menghukum desa-desa yang menjual rempah kepada pedagang Inggris, Portugis, atau Jawa."
      },
      {
        pernyataan: "Hak Octrooi melarang VOC mencetak mata uang sendiri dan mewajibkannya meminta persetujuan raja-raja lokal sebelum menyatakan perang.",
        kunci: "Salah",
        penjelasan: "Hak Octrooi justru memberi hak berdaulat seperti negara: mencetak uang, memelihara angkatan perang, mendirikan benteng, dan menyatakan perang/damai."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Kebijakan Monopoli VOC di Kepulauan Maluku:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Hak Ekstirpasi adalah hak memangkas/menebang tanaman rempah milik pribumi demi mencegah kelebihan pasokan (*overproduction*) yang bisa menurunkan harga.<br>
2. <strong>Pernyataan 2 (Benar):</strong> Pelayaran Hongi menggunakan perahu kora-kora untuk merazia penyelundupan rempah.<br>
3. <strong>Pernyataan 3 (Salah):</strong> Berdasarkan Hak Octrooi 1602, VOC memiliki wewenang mencetak uang sendiri, merekrut tentara, dan memerintah wilayah taklukan tanpa izin raja lokal.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`,
    kode: "25SEJ-PRED2-008"
  },

  // 9. Sistem Tanam Paksa (Cultuurstelsel) (PG)
  {
    id: 9,
    elemen: "Kolonialisme & Imperialisme di Indonesia",
    subelemen: "Sistem Tanam Paksa (Cultuurstelsel)",
    indikator: "Menganalisis latar belakang penerapan dan dampak eksploitatif Cultuurstelsel bagi masyarakat Jawa.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tahun 1830, Gubernur Jenderal Johannes van den Bosch memberlakukan kebijakan Sistem Tanam Paksa (<em>Cultuurstelsel</em>) di Pulau Jawa. Dalam praktiknya di lapangan, terjadi penyimpangan besar-besaran terhadap aturan awal akibat adanya sistem <em>cultuurprocenten</em> (bonus persentase keuntungan bagi pejabat kolonial dan bupati pribumi).
</p>
<p class="font-semibold text-slate-900 mb-2">
Latar belakang finansial utama pemerintah kolonial Belanda menerapkan Cultuurstelsel pada tahun 1830 adalah...
</p>`,
    options: [
      { id: "A", text: "Keinginan modernisasi pertanian Jawa agar setara dengan perkebunan gandum di Eropa" },
      { id: "B", text: "Kas negara Belanda mengalami kebangkrutan parah (defisit berat) akibat pembiayaan Perang Diponegoro (Perang Jawa) dan Perang Kemerdekaan Belgia" },
      { id: "C", text: "Kewajiban menjalankan misi kemanusiaan untuk mendidik petani pribumi cara menanam teh dan tebu" },
      { id: "D", text: "Desakan kaum humanis etis Belanda untuk menghapuskan monopoli swasta" },
      { id: "E", text: "Terjadinya gagal panen massal di Belanda yang menuntut pasokan pangan beras dari Jawa" }
    ],
    kunci: "B",
    pembahasan: `<strong>Latar Belakang Cultuurstelsel (1830-1870):</strong><br>
Pemberlakuan Tanam Paksa oleh Van den Bosch didorong krisis keuangan akut negeri Belanda:<br>
1. <strong>Pengeluaran Perang Jawa (1825-1830):</strong> Menelan biaya sekitar 20-25 juta gulden untuk memadamkan perlawanan Pangeran Diponegoro.<br>
2. <strong>Pemisahan Diri Belgia (1830):</strong> Belanda kehilangan wilayah industri selatan yang kaya.<br>
Melalui Tanam Paksa komoditas ekspor (kopi, tebu, nila, tembakau), Belanda berhasil meraup surplus kas (*batig slot*) lebih dari 800 juta gulden yang menyelamatkan keuangan negeri Belanda dari kebangkrutan.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-009"
  },

  // 10. Politik Etis & Lahirnya Elit Terpelajar (PG)
  {
    id: 10,
    elemen: "Pergerakan Nasional Indonesia",
    subelemen: "Politik Etis & Kesadaran Kebangsaan",
    indikator: "Menjelaskan dampak implementasi program edukasi Politik Etis terhadap pembentukan kesadaran nasional.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kritik keras C.Th. van Deventer melalui artikel <em>"Een Eereschuld"</em> (Utang Kehormatan) mendorong Ratu Wilhelmina mengumumkan kebijakan Politik Etis pada tahun 1901 yang berpilar pada Trias van Deventer: Irigasi, Emigrasi, dan Edukasi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Meskipun pilar edukasi awalnya dirancang untuk mencetak tenaga administrasi rendahan yang murah bagi kantor kolonial, dampak tak terduga (<em>unintended consequence</em>) yang paling revolusioner bagi bangsa Indonesia adalah...
</p>`,
    options: [
      { id: "A", text: "Meningkatnya loyalitas para bupati dan priyayi Jawa kepada Ratu Belanda" },
      { id: "B", text: "Lahirnya golongan cendekiawan/elit terpelajar pribumi yang berpikiran maju, melintasi sekat kedaerahan, dan memelopori pergerakan nasional modern" },
      { id: "C", text: "Terciptanya swasembada pangan beras di seluruh Hindia Belanda" },
      { id: "D", text: "Terhapusnya diskriminasi rasial di sekolah-sekolah anak bangsawan Eropa (ELS)" },
      { id: "E", text: "Dibubarkannya seluruh organisasi serikat buruh kereta api dan buruh pelabuhan" }
    ],
    kunci: "B",
    pembahasan: `<strong>Dampak Revolusioner Edukasi Politik Etis:</strong><br>
Pemerintah kolonial membuka sekolah dokter pribumi (STOVIA), sekolah guru (Kweekschool), dan sekolah teknik tinggi (THS Bandung).<br>
Para pemuda pribumi yang menempuh pendidikan modern barat ini bersentuhan dengan ide-ide kemerdekaan, demokrasi, sosialisme, dan nasionalisme. Mereka menyadari penindasan kolonialisme dan mentransformasi perlawanan dari perjuangan fisik kedaerahan menjadi <strong>organisasi pergerakan modern</strong> yang mengusung kesadaran kebangsaan Indonesia.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-010"
  },

  // 11. Organisasi Pergerakan Nasional (MCMA)
  {
    id: 11,
    elemen: "Pergerakan Nasional Indonesia",
    subelemen: "Corak & Strategi Perjuangan Organisasi",
    indikator: "Menganalisis karakteristik radikal-nonkooperatif pada organisasi Indische Partij dan Perhimpunan Indonesia.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam sejarah pergerakan nasional, organisasi pergerakan dibedakan berdasarkan corak perjuangannya: moderat-kooperatif (bersedia duduk di Volksraad) dan radikal-nonkooperatif (menolak bekerja sama dengan penjajah dan menuntut kemerdekaan mutlak).
</p>
<p class="font-semibold text-slate-900 mb-2">
Ciri-ciri dan tindakan yang mencerminkan strategi <strong>Radikal-Nonkooperatif</strong> ditunjukkan oleh... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Indische Partij secara tegas mencanangkan semboyan 'Indie voor Indiers' dan menuntut kemerdekaan Hindia lepas dari kerajaan Belanda" },
      { id: "B", text: "Perhimpunan Indonesia (PI) di Belanda menerbitkan Manifesto Politik 1925 yang menegaskan asas swadaya (self-reliance), persatuan nasional, dan non-kooperasi" },
      { id: "C", text: "Budi Utomo membatasi keanggotaannya hanya bagi kaum priyayi Jawa dan Madura serta memperjuangkan kemajuan pengajaran seni keraton" },
      { id: "D", text: "Partai Nasional Indonesia (PNI) pimpinan Ir. Soekarno menggelorakan pidato politik membakar semangat massa untuk merdeka dengan kekuatan sendiri" },
      { id: "E", text: "Gabungan Politik Indonesia (GAPI) mengajukan petisi damai menuntut 'Indonesia Berparlemen' di dalam kerangka kerajaan Belanda" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Ciri Strategi Radikal-Nonkooperatif:</strong><br>
&bull; <strong>Indische Partij (Pernyataan A Benar):</strong> Partai politik pertama di Hindia Belanda (Douwes Dekker, Cipto Mangunkusumo, Suwardi Suryaningrat) yang terang-terangan menuntut kemerdekaan.<br>
&bull; <strong>Perhimpunan Indonesia (Pernyataan B Benar):</strong> Di bawah Mohammad Hatta, mencetuskan Manifesto 1925 berprinsip non-kooperasi dan persatuan antarsuku.<br>
&bull; <strong>PNI (Pernyataan D Benar):</strong> Menerapkan aksi massa mandiri (*zelfgenoegzaamheid* &amp; *zelfhelp*) tanpa kompromi.<br>
&bull; <strong>Pernyataan C &amp; E Salah:</strong> Budi Utomo dan GAPI menerapkan pendekatan kooperatif moderat.<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`,
    kode: "25SEJ-PRED2-011"
  },

  // 12. Sumpah Pemuda 1928 (PG)
  {
    id: 12,
    elemen: "Pergerakan Nasional Indonesia",
    subelemen: "Kongres Pemuda II & Ikrar Sumpah Pemuda",
    indikator: "Menjelaskan arti penting pengikraran Bahasa Indonesia sebagai bahasa persatuan dalam Sumpah Pemuda 1928.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tanggal 28 Oktober 1928, Kongres Pemuda II di Batavia melahirkan ikrar monumental Sumpah Pemuda: Satu Nusa, Satu Bangsa, dan Menjunjung Bahasa Persatuan, Bahasa Indonesia.
</p>
<p class="font-semibold text-slate-900 mb-2">
Arti strategis ditetapkannya Bahasa Indonesia (yang berakar dari Bahasa Melayu Riau) sebagai bahasa persatuan dalam integrasi nasional adalah...
</p>`,
    options: [
      { id: "A", text: "Bahasa Melayu memiliki struktur hierarki kasta tutur yang rumit sehingga cocok untuk kaum bangsawan feodal" },
      { id: "B", text: "Bahasa Melayu telah lama menjadi lingua franca (bahasa pergaulan antarpulau dan perdagangan) yang demokratis, egaliter tanpa tingkatan derajat tutur, serta dapat diterima sukarela oleh seluruh suku bangsa tanpa kecemburuan hegemoni mayoritas" },
      { id: "C", text: "Ditetapkan secara sepihak atas perintah gubernur jenderal Belanda untuk mempermudah sensus" },
      { id: "D", text: "Bahasa Melayu merupakan satu-satunya bahasa yang memiliki aksara fonetik latin di Asia Tenggara" },
      { id: "E", text: "Bahasa Indonesia saat itu merupakan bahasa dengan penutur asli terbanyak melampaui bahasa Jawa" }
    ],
    kunci: "B",
    pembahasan: `<strong>Makna Pemilihan Bahasa Indonesia (Sumpah Pemuda 1928):</strong><br>
Para pemuda secara bijaksana tidak memilih bahasa Jawa (meskipun sukunya mayoritas) demi menghindari kecemburuan etnis dan karena bahasa Jawa memiliki tingkatan feodal (*ngoko, krama, krama inggil*).<br>
Bahasa Melayu dipilih karena:<br>
1. Berfungsi sebagai <strong>lingua franca</strong> perdagangan maritim kepulauan nusantara selama berabad-abad.<br>
2. Bersifat egaliter, demokratis, fleksibel menyerap kosakata modern, dan mudah dipelajari oleh seluruh suku dari Sabang sampai Merauke.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-012"
  },

  // 13. Pendudukan Jepang & Organisasi Militer (PG)
  {
    id: 13,
    elemen: "Masa Pendudukan Militer Jepang",
    subelemen: "PETA & Dampak Militerisasi Pemuda",
    indikator: "Menganalisis dampak pembentukan PETA (Pembela Tanah Air) terhadap kesiapan militer bangsa Indonesia menjelang revolusi fisik.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada masa pendudukan militer Jepang di Jawa dan Sumatra, pemerintah militer Angkatan Darat ke-16 membentuk organisasi militer sukarela <strong>PETA (Pembela Tanah Air / Kyodo Boei Giyugun)</strong> atas usulan Gatot Mangkuprojo pada akhir tahun 1943.
</p>
<p class="font-semibold text-slate-900 mb-2">
Dampak positif paling menentukan dari pelatihan militer PETA bagi perjuangan kemerdekaan Indonesia pasca-Proklamasi 1945 adalah...
</p>`,
    options: [
      { id: "A", text: "PETA berhasil memukul mundur seluruh armada sekutu dari kawasan Pasifik Barat Daya" },
      { id: "B", text: "Perwira dan prajurit jebolan PETA (seperti Soedirman, Gatot Subroto, Ahmad Yani, dan Soeharto) menjadi tulang punggung kepemimpinan dan cikal bakal pembentukan Tentara Keamanan Rakyat (TKR/TNI)" },
      { id: "C", text: "PETA mempermudah Jepang mengeksploitasi beras dan tenaga romusha di pedesaan" },
      { id: "D", text: "PETA mengubah bahasa resmi pergaulan di Hindia Belanda menjadi bahasa Jepang tulisan kanji" },
      { id: "E", text: "Seluruh persenjataan modern PETA diserahkan secara damai kepada tentara NICA Belanda" }
    ],
    kunci: "B",
    pembahasan: `<strong>Arti Historis PETA bagi TNI:</strong><br>
Meskipun Jepang membentuk PETA untuk mempertahankan pulau Jawa dari invasi pasukan Sekutu, pelatihan komando taktik perang gerilya dan kepemimpinan militer perwira (*Daidanco, Cudanco, Shodanco*) memberi bekal luar biasa bagi pemuda Indonesia.<br>
Ketika Proklamasi berkumandang, para eks-perwira PETA bersatu dengan eks-KNIL dan laskar rakyat mendirikan BKR &rarr; TKR &rarr; TRI &rarr; <strong>TNI (Tentara Nasional Indonesia)</strong> dengan Jenderal Soedirman sebagai Panglima Besar.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-013"
  },

  // 14. Peristiwa Rengasdengklok (Benar/Salah)
  {
    id: 14,
    elemen: "Detik-Detik Proklamasi Kemerdekaan",
    subelemen: "Peristiwa Rengasdengklok & Peran Golongan Muda",
    indikator: "Mengevaluasi latar belakang dan dinamika dialektika golongan muda vs tua di Rengasdengklok.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kabar menyerahnya Jepang tanpa syarat kepada Sekutu pada tanggal 14 Agustus 1945 memicu ketegangan pandangan antara Golongan Muda (Wikana, Chaerul Saleh, Sukarni) dan Golongan Tua (Soekarno dan Moh. Hatta). Tentukan kebenaran dari masing-masing pernyataan berikut:
</p>`,
    items: [
      {
        pernyataan: "Golongan Muda mengamankan Soekarno dan Moh. Hatta ke Rengasdengklok pada 16 Agustus 1945 dini hari dengan tujuan menjauhkan mereka dari pengaruh dan tekanan janji kemerdekaan marsekal militer Jepang.",
        kunci: "Benar",
        penjelasan: "Pemuda ingin memastikan proklamasi lahir dari kehendak mandiri rakyat Indonesia, bukan 'hadiah' dari badan buatan Jepang (PPKI)."
      },
      {
        pernyataan: "Golongan Tua bersikeras agar proklamasi diputuskan secara tergesa-gesa pada dini hari 16 Agustus di tepi Sungai Citarum tanpa naskah tertulis.",
        kunci: "Salah",
        penjelasan: "Golongan Tua (Soekarno-Hatta) justru ingin bertindak hati-hati dengan mengadakan rapat koordinasi resmi PPKI di Jakarta agar tidak terjadi pertumpahan darah prematur dengan tentara Jepang."
      },
      {
        pernyataan: "Achmad Soebardjo berperan sebagai penengah diplomatik yang menjamin dengan taruhan nyawanya bahwa Proklamasi Kemerdekaan akan dilaksanakan di Jakarta selambat-lambatnya 17 Agustus 1945 pukul 12.00 WIB.",
        kunci: "Benar",
        penjelasan: "Jaminan pribadi Achmad Soebardjo meyakinkan Golongan Muda untuk menyetujui kembalinya Soekarno-Hatta ke Jakarta malam itu juga."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Dinamika Peristiwa Rengasdengklok:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Pemuda membawa Bung Karno dan Bung Hatta ke garnisun PETA Rengasdengklok agar steril dari intervensi Mayjen Nishimura.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Soekarno-Hatta menolak desakan proklamasi serampangan di Rengasdengklok dan menuntut perumusan terstruktur di ibu kota.<br>
3. <strong>Pernyataan 3 (Benar):</strong> Achmad Soebardjo menjaminkan keselamatan dan kepastian proklamasi esok paginya di Jakarta.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`,
    kode: "25SEJ-PRED2-014"
  },

  // 15. Maklumat Pemerintah 3 November 1945 (PG)
  {
    id: 15,
    elemen: "Awal Kemerdekaan & Ketatanegaraan",
    subelemen: "Maklumat Wakil Presiden No. X & Sistem Multi Partai",
    indikator: "Menjelaskan implikasi Maklumat Pemerintah 3 November 1945 terhadap perubahan sistem ketatanegaraan Indonesia.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tanggal 3 November 1945, Wakil Presiden Mohammad Hatta mengeluarkan Maklumat Pemerintah yang menganjurkan pembentukan partai-partai politik seluas-luasnya sebelum diselenggarakannya pemilihan umum pada Januari 1946.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tujuan politis dan diplomatik utama di balik dikeluarkannya Maklumat Pemerintah 3 November 1945 tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Mengukuhkan sistem partai tunggal (Partai Nasional Indonesia) sebagai pilar kekuasaan mutlak presiden" },
      { id: "B", text: "Menunjukkan kepada dunia internasional (khususnya pihak Sekutu) bahwa Republik Indonesia adalah negara yang demokratis dan menjunjung tinggi pluralisme politik, bukan bentukan fasis Jepang" },
      { id: "C", text: "Membubarkan badan perwakilan Komite Nasional Indonesia Pusat (KNIP)" },
      { id: "D", text: "Mengalihkan ibukota negara dari Jakarta ke Yogyakarta" },
      { id: "E", text: "Menyerahkan kekuasaan eksekutif kepada komandan tentara sekutu AFNEI" }
    ],
    kunci: "B",
    pembahasan: `<strong>Tujuan Maklumat Pemerintah 3 November 1945:</strong><br>
1. <strong>Tujuan Diplomatik Luar Negeri:</strong> Pihak Sekutu dan Belanda mempropagandakan bahwa kemerdekaan Indonesia hanyalah 'boneka fasis buatan militer Jepang'. Dengan membuka sistem multipartai, RI membuktikan kepada dunia bahwa pemerintahannya menganut prinsip kedaulatan rakyat dan demokrasi parlementer.<br>
2. <strong>Tujuan Domestik:</strong> Menyalurkan beragam aspirasi ideologi (nasionalis, agama, sosialis/komunis) ke dalam wadah kepartaian yang tertib dan konstitusional.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-015"
  },

  // 16. Diplomasi Perjuangan Mempertahankan Kemerdekaan (Benar/Salah + Tabel)
  {
    id: 16,
    elemen: "Revolusi Menegakkan Kemerdekaan (1945-1949)",
    subelemen: "Perundingan Linggarjati, Renville, dan KMB",
    indikator: "Mengevaluasi hasil perundingan diplomatik antara Indonesia dan Belanda dalam mempertahankan kemerdekaan.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam mempertahankan kemerdekaan menghadapi agresi Belanda, Indonesia memadukan perjuangan bersenjata (militer) dan diplomasi meja perundingan:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-amber-600 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-amber-700">Perundingan</th>
        <th class="p-2.5 border border-amber-700">Waktu</th>
        <th class="p-2.5 border border-amber-700">Poin Kesepakatan Pokok</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 font-bold border border-slate-200">Perjanjian Linggarjati</td>
        <td class="p-2 border border-slate-200">Maret 1947</td>
        <td class="p-2 border border-slate-200">Belanda mengakui kedaulatan RI secara <em>de facto</em> atas Jawa, Madura, dan Sumatra; pembentukan Republik Indonesia Serikat (RIS)</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 font-bold border border-slate-200">Perjanjian Renville</td>
        <td class="p-2 border border-slate-200">Januari 1948</td>
        <td class="p-2 border border-slate-200">Pengakuan Garis Demarkasi van Mook; penarikan mundur pasukan TNI dari kantong-kantong gerilya Jawa Barat (Long March Siliwangi)</td>
      </tr>
      <tr>
        <td class="p-2 font-bold border border-slate-200">Konferensi Meja Bundar (KMB)</td>
        <td class="p-2 border border-slate-200">Desember 1949</td>
        <td class="p-2 border border-slate-200">Penyerahan kedaulatan penuh tanpa syarat kepada RIS, pembentukan Uni Indonesia-Belanda, masalah Irian Barat ditunda 1 tahun</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan evaluasi berikut:
</p>`,
    items: [
      {
        pernyataan: "Perjanjian Renville ditandatangani di atas kapal perang milik angkatan laut Amerika Serikat (USS Renville) dengan difasilitasi oleh Komisi Tiga Negara (KTN).",
        kunci: "Benar",
        penjelasan: "USS Renville dipilih sebagai wilayah netral di Teluk Jakarta dengan mediasi KTN (Australia, Belgia, AS)."
      },
      {
        pernyataan: "Hasil Konferensi Meja Bundar (KMB) tahun 1949 berhasil menuntaskan status penyatuan wilayah Papua Barat (Irian Barat) ke dalam NKRI pada hari yang sama.",
        kunci: "Salah",
        penjelasan: "Penyelesaian status Irian Barat ditunda pembahasannya dalam kurun waktu 1 tahun setelah penyerahan kedaulatan RIS."
      },
      {
        pernyataan: "Agresi Militer Belanda II pada Desember 1948 memicu pembentukan Pemerintah Darurat Republik Indonesia (PDRI) di Bukittinggi oleh Sjafruddin Prawiranegara untuk menjaga eksistensi pemerintahan.",
        kunci: "Benar",
        penjelasan: "PDRI di Bukittinggi membuktikan kepada dunia internasional bahwa kepemimpinan Republik Indonesia masih berdiri kokoh meskipun Soekarno-Hatta ditawan di Bangka."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Evaluasi Perjuangan Diplomasi RI-Belanda:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Perundingan Renville dilaksanakan di atas kapal USS Renville diawasi KTN.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Belanda bersikeras menahan Irian Barat sehingga klausul KMB menunda penentuan statusnya satu tahun ke depan (yang kemudian memicu sengketa Trikora 1962).<br>
3. <strong>Pernyataan 3 (Benar):</strong> PDRI di pedalaman Sumatra Barat berhasil mematahkan klaim sepihak Belanda bahwa RI sudah lenyap.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`,
    kode: "25SEJ-PRED2-016"
  },

  // 17. Serangan Umum 1 Maret 1949 (PG)
  {
    id: 17,
    elemen: "Revolusi Menegakkan Kemerdekaan",
    subelemen: "Serangan Umum 1 Maret 1949",
    indikator: "Menjelaskan signifikansi politis dan diplomatik Serangan Umum 1 Maret 1949 di Yogyakarta.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tanggal 1 Maret 1949 pagi hari, pasukan TNI di bawah komando Letkol Soeharto atas prakarsa Sri Sultan Hamengkubuwono IX dan Panglima Besar Jenderal Soedirman melancarkan <strong>Serangan Umum 1 Maret 1949</strong> dan berhasil menguasai ibukota Yogyakarta selama 6 jam penuh.
</p>
<p class="font-semibold text-slate-900 mb-2">
Dampak diplomatik terbesar dari keberhasilan penguasaan Yogyakarta selama 6 jam tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Menghancurkan seluruh markas komando tentara Belanda di Batavia tanpa sisa" },
      { id: "B", text: "Membuktikan kepada Perserikatan Bangsa-Bangsa (PBB) dan dunia internasional bahwa TNI masih eksis dan memiliki daya tempur kuat, sekaligus membantah propaganda Belanda bahwa tentara RI telah musnah" },
      { id: "C", text: "Menjadikan Yogyakarta sebagai ibukota abadi Republik Indonesia Serikat" },
      { id: "D", text: "Memaksa ratu Belanda menandatangani penyerahan seluruh perbendaharaan emas kolonial" },
      { id: "E", text: "Menghentikan seluruh bantuan logistik militer Amerika Serikat kepada Belanda" }
    ],
    kunci: "B",
    pembahasan: `<strong>Arti Politis Serangan Umum 1 Maret 1949:</strong><br>
Belanda mengklaim kepada Dewan Keamanan PBB bahwa Republik Indonesia tinggal nama dan tentaranya hanya gerombolan liar yang tercerai berai.<br>
Serangan Umum 1 Maret 1949 berhasil merebut Yogyakarta selama 6 jam di siang hari. Berita keberhasilan ini disiarkan melalui radio gerilya AURI di Playen Wonosari &rarr; Bukittinggi &rarr; New Delhi &rarr; PBB di Lake Success, New York. PBB kemudian mendesak Belanda menghentikan agresi dan menandatangani Perjanjian Roem-Royen.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-017"
  },

  // 18. Demokrasi Liberal & Jatuh Bangun Kabinet (PG)
  {
    id: 18,
    elemen: "Demokrasi Parlementer / Liberal (1950-1959)",
    subelemen: "Sistem Multi Partai & Instabilitas Kabinet",
    indikator: "Menganalisis penyebab utama seringnya pergantian kabinet pada masa berlakunya UUDS 1950.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sepanjang masa Demokrasi Liberal (1950-1959), Indonesia mengalami pergantian kabinet sebanyak tujuh kali dalam kurun waktu hanya sembilan tahun (Kabinet Natsir, Sukiman, Wilopo, Ali Sastroamidjojo I, Burhanuddin Harahap, Ali Sastroamidjojo II, dan Djuanda).
</p>
<p class="font-semibold text-slate-900 mb-2">
Penyebab utama dari tingginya ketidakstabilan politik dan seringnya kabinet dijatuhkan oleh parlemen pada masa tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Presiden Soekarno sering membubarkan kabinet secara otoriter tanpa persetujuan parlemen" },
      { id: "B", text: "Sistem multipartai yang terfragmentasi tanpa adanya satu partai mayoritas tunggal, sehingga kabinet koalisi rapuh dan mudah dijatuhkan melalui mosi tidak percaya parlemen (oposisi)" },
      { id: "C", text: "Seluruh partai politik menolak penyelenggaraan pemilihan umum demokratis" },
      { id: "D", text: "Campur tangan angkatan darat yang memaksakan sistem dwifungsi ABRI sejak tahun 1950" },
      { id: "E", text: "Adanya larangan bagi menteri dari kalangan sipil untuk menyusun rencana anggaran belanja" }
    ],
    kunci: "B",
    pembahasan: `<strong>Instabilitas Kabinet Demokrasi Liberal:</strong><br>
Berdasarkan UUDS 1950, Indonesia menganut sistem <strong>parlementer multipartai</strong>:<br>
1. Tidak ada partai pemenang mayoritas mutlak di parlemen (persaingan sengit antara PNI, Masyumi, NU, dan PKI).<br>
2. Perdana Menteri harus membentuk koalisi yang rentan retak akibat benturan kepentingan partai pendukung.<br>
3. Partai oposisi dengan mudah mengajukan <strong>mosi tidak percaya</strong> terhadap kebijakan kabinet (misal mosi Hadikusumo pada Natsir, peristiwa Tanjung Morawa pada Wilopo), mengakibatkan usia rata-rata kabinet hanya berkisar satu tahun dan program kerja jangka panjang terhenti.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-018"
  },

  // 19. Konferensi Asia Afrika (KAA) 1955 (MCMA)
  {
    id: 19,
    elemen: "Demokrasi Parlementer & Hubungan Internasional",
    subelemen: "Konferensi Asia Afrika (KAA) Bandung 1955",
    indikator: "Mengidentifikasi prinsip-prinsip Dasasila Bandung hasil KAA 1955.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tanggal 18-24 April 1955, pemerintah Indonesia sukses menyelenggarakan Konferensi Asia Afrika (KAA) di Gedung Merdeka Bandung yang dihadiri oleh 29 negara yang baru merdeka dari belenggu kolonialisme. Konferensi ini melahirkan deklarasi bersejarah <strong>Dasasila Bandung</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Prinsip-prinsip dasar hubungan antarbangsa yang termaktub dalam <strong>Dasasila Bandung</strong> adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Menghormati hak-hak dasar manusia dan tujuan-tujuan serta asas-asas yang termuat dalam Piagam PBB" },
      { id: "B", text: "Menghormati kedaulatan dan integritas teritorial semua bangsa di dunia" },
      { id: "C", text: "Mewajibkan seluruh anggota untuk membentuk pakta pertahanan militer bersama menghadapi blok barat" },
      { id: "D", text: "Tidak melakukan intervensi atau campur tangan dalam urusan dalam negeri negara lain" },
      { id: "E", text: "Menyelesaikan segala perselisihan internasional dengan jalan damai seperti perundingan, persetujuan, atau arbitrase" }
    ],
    kunci: ["A", "B", "D", "E"],
    pembahasan: `<strong>Prinsip-Prinsip Dasasila Bandung (KAA 1955):</strong><br>
Butir-butir Dasasila Bandung memuat:<br>
1. Menghormati hak asasi manusia &amp; Piagam PBB (Pilihan A).<br>
2. Menghormati kedaulatan dan keutuhan wilayah semua bangsa (Pilihan B).<br>
3. Mengakui persamaan semua ras dan persamaan semua bangsa.<br>
4. Tidak melakukan intervensi urusan internal negara lain (Pilihan D).<br>
5. Menghormati hak membela diri secara individu/kolektif sesuai Piagam PBB.<br>
6. Tidak menggunakan pakta pertahanan kolektif untuk melayani kepentingan khusus negara adidaya.<br>
7. Menyelesaikan sengketa internasional secara damai (Pilihan E).<br>
Pilihan C salah karena KAA justru menolak pakta militer perang dingin.<br><br>
<strong>Kunci Jawaban: A, B, D, dan E</strong>`,
    kode: "25SEJ-PRED2-019"
  },

  // 20. Dekrit Presiden 5 Juli 1959 (PG)
  {
    id: 20,
    elemen: "Demokrasi Terpimpin (1959-1965)",
    subelemen: "Dekrit Presiden 5 Juli 1959",
    indikator: "Menentukan isi pokok dan alasan dikeluarkannya Dekrit Presiden 5 Juli 1959.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kegagalan Dewan Konstituante hasil Pemilu 1955 dalam merumuskan undang-undang dasar baru pengganti UUDS 1950 membawa bangsa Indonesia ke ambang krisis konstitusional dan perpecahan nasional. Menghadapi situasi genting tersebut, Presiden Soekarno mengeluarkan <strong>Dekrit Presiden 5 Juli 1959</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Berikut ini yang merupakan salah satu isi pokok dari Dekrit Presiden 5 Juli 1959 adalah...
</p>`,
    options: [
      { id: "A", text: "Pembubaran DPR hasil pemilu 1955 dan penunjukan kabinet zaken" },
      { id: "B", text: "Berlakunya kembali UUD 1945 dan tidak berlakunya lagi UUDS 1950, serta pembubaran Konstituante" },
      { id: "C", text: "Pembentukan Komite Nasional Indonesia Pusat (KNIP)" },
      { id: "D", text: "Penetapan Soekarno sebagai presiden seumur hidup oleh parlemen" },
      { id: "E", text: "Pengesahan pembentukan Republik Indonesia Serikat (RIS)" }
    ],
    kunci: "B",
    pembahasan: `<strong>Isi Pokok Dekrit Presiden 5 Juli 1959:</strong><br>
1. <strong>Pembubaran Dewan Konstituante.</strong><br>
2. <strong>Berlakunya kembali UUD 1945</strong> dan tidak berlakunya lagi UUDS 1950.<br>
3. Pembentukan Majelis Permusyawaratan Rakyat Sementara (MPRS) dan Dewan Pertimbangan Agung Sementara (DPAS) dalam waktu sesingkat-singkatnya.<br><br>
Keluarnya dekrit ini menandai berakhirnya era Demokrasi Parlementer/Liberal dan dimulainya era <strong>Demokrasi Terpimpin</strong>.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-020"
  },

  // 21. Deklarasi Djuanda 1957 & Wawasan Nusantara (PG)
  {
    id: 21,
    elemen: "Demokrasi Parlementer & Kedaulatan Wilayah",
    subelemen: "Deklarasi Djuanda 13 Desember 1957",
    indikator: "Menjelaskan perubahan fundamental konsep wilayah perairan laut Indonesia pasca-Deklarasi Djuanda.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebelum tahun 1957, wilayah laut Indonesia masih merujuk pada ordonansi kolonial Belanda <em>(Territoriale Zee en Maritieme Kringen Ordonnantie 1939)</em> yang menetapkan batas laut teritorial hanya sejauh 3 mil laut diukur dari garis air surut pulau-pulau. Akibatnya, laut di antara pulau-pulau di Indonesia berstatus laut bebas internasional yang bebas dilayari kapal perang asing.
</p>
<p class="font-semibold text-slate-900 mb-2">
Perubahan revolusioner yang dicetuskan oleh Perdana Menteri Djuanda Kartawidjaja melalui <strong>Deklarasi Djuanda 13 Desember 1957</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Menyerahkan pengelolaan seluruh laut pedalaman kepada otoritas keamanan maritim PBB" },
      { id: "B", text: "Menyatakan bahwa laut di antara dan di sekeliling pulau-pulau Indonesia bukan lagi pemisah, melainkan satu kesatuan wilayah kedaulatan mutlak NKRI dengan lebar laut teritorial 12 mil diukur dari garis pangkal lurus (prinsip negara kepulauan)" },
      { id: "C", text: "Membatasi pelayaran kapal niaga hanya pada perairan dangkal Selat Madura" },
      { id: "D", text: "Menghapuskan batas Zona Ekonomi Eksklusif (ZEE) 200 mil" },
      { id: "E", text: "Membuka seluruh teluk dan selat pedalaman sebagai pangkalan militer bersama negara anggota KAA" }
    ],
    kunci: "B",
    pembahasan: `<strong>Makna Monumental Deklarasi Djuanda:</strong><br>
Deklarasi Djuanda merupakan tonggak lahirnya <strong>Wawasan Nusantara</strong>:<br>
1. Menyingkirkan hukum kolonial 1939 yang membatasi laut teritorial 3 mil dari pantai pulau (yang membuat laut Jawa dan laut Banda menjadi perairan internasional bebas).<br>
2. Menetapkan bahwa segala perairan di sekitar, di antara, dan yang menghubungkan pulau-pulau adalah bagian tak terpisahkan dari kedaulatan NKRI dengan batas laut teritorial <strong>12 mil laut</strong> ditarik dari garis lurus yang menghubungkan titik-titik terluar pulau terluar (*archipelagic state*).<br>
Konsep ini akhirnya diakui secara hukum internasional dalam <strong>UNCLOS 1982</strong>.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-021"
  },

  // 22. Orde Baru: Fusi Partai Politik 1973 (PG)
  {
    id: 22,
    elemen: "Masa Orde Baru (1966-1998)",
    subelemen: "Penyederhanaan Sistem Kepartaian (Fusi 1973)",
    indikator: "Mengidentifikasi pengelompokan fusi partai politik Islam dan non-Islam pada masa Orde Baru.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Untuk menciptakan stabilitas politik nasional demi kelancaran program Pembangunan Lima Tahun (Pelita), pemerintah Orde Baru di bawah Presiden Soeharto melakukan kebijakan penyederhanaan (fusi) partai politik pada awal tahun 1973 sehingga hanya menyisakan tiga kontestan peserta pemilu.
</p>
<p class="font-semibold text-slate-900 mb-2">
Hasil penggabungan partai-partai politik pada masa Orde Baru yang tepat adalah...
</p>`,
    options: [
      { id: "A", text: "Partai Persatuan Pembangunan (PPP) merupakan fusi dari partai-partai Islam (NU, Parmusi, PSII, dan Perti)" },
      { id: "B", text: "Partai Demokrasi Indonesia (PDI) merupakan gabungan dari Masyumi dan Partai Sosialis Indonesia" },
      { id: "C", text: "Golongan Karya (Golkar) merupakan gabungan dari PNI dan Partai Katolik" },
      { id: "D", text: "PPP dibubarkan dan anggotanya diwajibkan bergabung ke dalam Partai Komunis Indonesia" },
      { id: "E", text: "PDI merupakan peleburan dari seluruh organisasi kepemudaan mahasiswa intra-kampus" }
    ],
    kunci: "A",
    pembahasan: `<strong>Fusi Partai Politik Orde Baru 1973:</strong><br>
Pemerintah menyederhanakan sistem politik menjadi 3 kekuatan:<br>
1. <strong>Partai Persatuan Pembangunan (PPP):</strong> Fusi dari 4 partai berakar Islam, yaitu <strong>Nahdlatul Ulama (NU), Parmusi, PSII, dan Perti</strong>.<br>
2. <strong>Partai Demokrasi Indonesia (PDI):</strong> Fusi dari 5 partai nasionalis dan non-Islam, yaitu <strong>PNI, Parkindo (Kristen), Partai Katolik, IPKI, dan Partai Murba</strong>.<br>
3. <strong>Golongan Karya (Golkar):</strong> Organisasi fungsional yang didukung aparat birokrasi dan militer ABRI.<br><br>
<strong>Kunci Jawaban: A</strong>`,
    kode: "25SEJ-PRED2-022"
  },

  // 23. Krisis Moneter 1997/1998 & Reformasi (PG)
  {
    id: 23,
    elemen: "Era Reformasi (1998-Sekarang)",
    subelemen: "Faktor Penyebab Jatuhnya Rezim Orde Baru",
    indikator: "Menganalisis keterkaitan krisis moneter Asia 1997 dengan runtuhnya legitimasi politik Orde Baru.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Krisis keuangan Asia yang bermula dari anjloknya nilai tukar mata uang Baht Thailand pada pertengahan tahun 1997 merambat dahsyat ke perekonomian Indonesia. Nilai tukar Rupiah terhadap Dolar AS merosot tajam dari Rp2.500/USD menjadi lebih dari Rp15.000/USD, memicu lonjakan harga sembako, kebangkrutan ratusan bank dan korporasi, serta gelombang PHK massal.
</p>
<p class="font-semibold text-slate-900 mb-2">
Kaitan langsung antara krisis ekonomi moneter tersebut dengan meletusnya Gerakan Reformasi Mei 1998 adalah...
</p>`,
    options: [
      { id: "A", text: "Pemerintah Orde Baru memutuskan untuk mengembalikan UUD 1945 ke naskah asli tanpa perubahan" },
      { id: "B", text: "Krisis moneter menyingkap rapuhnya fondasi fundamental ekonomi dan merebaknya praktik Korupsi, Kolusi, dan Nepotisme (KKN), sehingga memicu hilangnya legitimasi moral rakyat dan mendorong gelombang demonstrasi mahasiswa menuntut pengunduran diri Soeharto" },
      { id: "C", text: "Mahasiswa menuntut pemulihan monarki absolut di bawah kekuasaan keraton Jawa" },
      { id: "D", text: "Pihak militer mengambil alih kekuasaan presiden secara paksa melalui kudeta bersenjata" },
      { id: "E", text: "Krisis ekonomi memaksa Indonesia keluar dari keanggotaan PBB dan ASEAN" }
    ],
    kunci: "B",
    pembahasan: `<strong>Hubungan Krisis Moneter 1997 dengan Reformasi 1998:</strong><br>
Pertumbuhan ekonomi tinggi semu Orde Baru ditopang oleh utang luar negeri swasta jangka pendek yang tidak terlindungi nilai tukar (*unhedged*) serta maraknya kroniisme KKN.<br>
Ketika badai moneter melanda, inflasi tak terkendali memicu kepanikan sosial. Mahasiswa dan tokoh intelektual menyatukan kekuatan menuntut <strong>Enam Agenda Reformasi</strong>: (1) Adili Soeharto dan kroninya, (2) Amandemen UUD 1945, (3) Penghapusan Dwifungsi ABRI, (4) Otonomi daerah seluas-luasnya, (5) Supremasi hukum, dan (6) Pemerintahan bersih dari KKN.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SEJ-PRED2-023"
  },

  // 24. Agenda Reformasi 1998 & Amandemen UUD 1945 (MCMA)
  {
    id: 24,
    elemen: "Era Reformasi (1998-Sekarang)",
    subelemen: "Amandemen UUD 1945 & Demokratisasi",
    indikator: "Mengidentifikasi perubahan-perubahan mendasar sistem ketatanegaraan hasil amandemen UUD 1945 (1999-2002).",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebagai amanat Gerakan Reformasi 1998, MPR RI melaksanakan amandemen Undang-Undang Dasar 1945 sebanyak empat tahap pada kurun waktu 1999 hingga 2002 untuk membatasi kekuasaan eksekutif dan memperkuat mekanisme checks and balances.
</p>
<p class="font-semibold text-slate-900 mb-2">
Perubahan-perubahan mendasar dalam sistem ketatanegaraan Republik Indonesia hasil amandemen UUD 1945 adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Presiden dan wakil presiden dipilih secara langsung oleh rakyat melalui pemilihan umum satu paket, bukan lagi oleh mandataris MPR" },
      { id: "B", text: "Masa jabatan presiden dibatasi secara tegas maksimal dua periode (masing-masing 5 tahun)" },
      { id: "C", text: "Dibentuknya lembaga yudikatif baru, yaitu Mahkamah Konstitusi (MK) dan Komisi Yudisial (KY)" },
      { id: "D", text: "DPR dihapuskan dan digantikan sepenuhnya oleh Dewan Pertimbangan Agung (DPA)" },
      { id: "E", text: "Dimasukkannya jaminan perlindungan Hak Asasi Manusia (HAM) secara komprehensif dalam Bab XA UUD 1945" }
    ],
    kunci: ["A", "B", "C", "E"],
    pembahasan: `<strong>Hasil Perubahan Mendasar Amandemen UUD 1945 (1999-2002):</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Pemilihan Presiden dan Wakil Presiden secara langsung (Pasal 6A).<br>
&bull; <strong>Pernyataan B (Benar):</strong> Pembatasan masa jabatan presiden maksimal 2 kali masa jabatan berturut-turut (Pasal 7).<br>
&bull; <strong>Pernyataan C (Benar):</strong> Pembentukan lembaga pengawal konstitusi Mahkamah Konstitusi (MK) dan Komisi Yudisial (KY).<br>
&bull; <strong>Pernyataan E (Benar):</strong> Penambahan pasal perlindungan HAM lengkap (Pasal 28A-28J).<br>
&bull; <strong>Pernyataan D (Salah):</strong> Lembaga DPA justru dihapuskan, sedangkan kewenangan legislasi DPR diperkuat secara mandiri.<br><br>
<strong>Kunci Jawaban: A, B, C, dan E</strong>`,
    kode: "25SEJ-PRED2-024"
  },

  // 25. Peran Indonesia dalam Misi Perdamaian Garuda (Benar/Salah)
  {
    id: 25,
    elemen: "Peran Indonesia dalam Perdamaian Dunia",
    subelemen: "Kontingen Garuda & Politik Luar Negeri Bebas Aktif",
    indikator: "Mengevaluasi implementasi politik luar negeri bebas aktif melalui pengiriman Pasukan Perdamaian Kontingen Garuda.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sesuai amanat Pembukaan UUD 1945 alinea IV untuk <em>"ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi, dan keadilan sosial"</em>, Indonesia menerapkan Politik Luar Negeri Bebas Aktif dan aktif mengirim Pasukan Penjaga Perdamaian PBB (Kontingen Garuda/Konga).
</p>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan berikut:
</p>`,
    items: [
      {
        pernyataan: "Pengiriman Kontingen Garuda I (Konga I) pertama kali dilaksanakan pada tahun 1957 ke wilayah konflik Timur Tengah (Mesir) pasca-Krisis Terusan Suez.",
        kunci: "Benar",
        penjelasan: "Konga I berkekuatan 559 prajurit TNI dikirim di bawah bendera UNEF ke perbatasan Mesir-Israel pada awal 1957."
      },
      {
        pernyataan: "Politik luar negeri Bebas Aktif berarti Indonesia bersikap netral pasif tanpa peduli terhadap konflik krisis kemanusiaan yang menimpa bangsa lain.",
        kunci: "Salah",
        penjelasan: "Bebas berarti tidak terikat blok adidaya manapun, sedangkan Aktif berarti proaktif memperjuangkan perdamaian dunia dan dekolonisasi."
      },
      {
        pernyataan: "Pasukan Kontingen Garuda dikenal di panggung internasional PBB karena kemampuannya membaur secara humanis dan menjalin empati sosial dengan masyarakat sipil lokal di daerah operasi mandat.",
        kunci: "Benar",
        penjelasan: "Pendekatan kultural dan keramahan humanis prajurit TNI Garuda selalu mendapat apresiasi tinggi dari PBB dan rakyat lokal."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Analisis Kontingen Garuda &amp; Politik Bebas Aktif:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Konga I dikirim ke Mesir tahun 1957 di bawah kepemimpinan Letkol Hartoyo untuk mengawasi gencatan senjata Krisis Terusan Suez.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Bebas Aktif (dicetuskan Moh. Hatta dalam *Mendayung Antara Dua Karang*) menolak netralitas pasif; Indonesia justru aktif menentang penjajahan dan memediasi konflik internasional.<br>
3. <strong>Pernyataan 3 (Benar):</strong> Pendekatan santun dan kemampuan teritorial TNI diakui PBB dalam misi Lebanon (UNIFIL), Kongo (MONUSCO), dll.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`,
    kode: "25SEJ-PRED2-025"
  }
];

// Cek apakah ada tanda dolar
const rawStr = JSON.stringify(sejarahPaket2Data);
const dollarMatches = (rawStr.match(/\$/g) || []).length;
if (dollarMatches > 0) {
  console.error(`❌ TERDETEKSI ${dollarMatches} TANDA DOLAR PADA DATASET SEJARAH PAKET 2!`);
  process.exit(1);
} else {
  console.log("✅ Dataset Sejarah Paket 2 100% BEBAS dari tanda dolar ($)!");
}

const fileContent = `// tka/data/mapel-sejarah-paket2.js
// Bank Soal & Pembahasan Prediksi Resmi TKA Sejarah SMA 2025/2026 (Paket 2: 25 Butir Soal Standar TKA BPPP)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Sejarah SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaSejarahPaket2Data = ${JSON.stringify(sejarahPaket2Data, null, 2)};

if (typeof window !== 'undefined') {
  window.tkaSejarahPaket2Data = tkaSejarahPaket2Data;
  window.tkaSejarahPackages = window.tkaSejarahPackages || {};
  window.tkaSejarahPackages['paket2'] = {
    id: "paket2",
    title: "Paket 2: Prediksi Resmi TKA Sejarah SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    durasiMenit: 45,
    data: tkaSejarahPaket2Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaSejarahPaket2Data };
}
`;

const outputPath = path.join(__dirname, '../tka/data/mapel-sejarah-paket2.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`🎉 ${outputPath} berhasil dibuat! (25 soal)`);
