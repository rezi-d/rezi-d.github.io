// scripts/build_ppkn_paket2.js
// Generator untuk tka/data/mapel-ppkn-paket2.js
// 25 Soal Standar TKA PPKn Kurikulum Merdeka Fase F
// Variasi: 17 PG, 4 MCMA, 4 Benar/Salah (kompleks_bs)
// 100% BEBAS tanda dolar ($)

const fs = require('fs');
const path = require('path');

const soalList = [
  // --- ELEMEN 1: PANCASILA (Soal 1 s.d. 6) ---
  {
    id: 1,
    kode: "25PKN-PRED2-001",
    elemen: "Pancasila",
    subelemen: "Pancasila sebagai Ideologi Terbuka",
    kompetensi: "Menganalisis keterbukaan ideologi Pancasila dalam merespons perkembangan zaman dan teknologi.",
    indikator: "Mengidentifikasi dimensi normatif, idealitas, dan realistis Pancasila di era kecerdasan buatan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perkembangan teknologi kecerdasan buatan (<em>Artificial Intelligence</em>) dan ruang siber menghadirkan peluang efisiensi sekaligus ancaman privasi, penyebaran disinformasi, dan degradasi etika komunikasi publik. Pancasila sebagai ideologi terbuka memiliki kelenturan nilai yang memungkinkannya menyerap kemajuan peradaban tanpa kehilangan jati diri kebangsaannya.
</p>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik Pancasila yang menunjukkan kemampuannya menyesuaikan diri dengan perkembangan teknologi informasi dan kebutuhan nyata masyarakat sehari-hari tanpa mengubah nilai dasarnya mencerminkan dimensi....
</p>`,
    options: [
      { id: "A", text: "idealitas, karena berisi gagasan luhur masa depan yang tidak terikat waktu" },
      { id: "B", text: "normatif, karena dijabarkan secara kaku dalam sanksi hukum pidana formal" },
      { id: "C", text: "realistis, karena mencerminkan kenyataan hidup dan kebutuhan praktis masyarakat" },
      { id: "D", text: "spiritualitas, karena bersumber langsung dari dogma agama-agama formal di Indonesia" },
      { id: "E", text: "fleksibilitas mutlak, karena seluruh nilai dasarnya dapat direvisi sesuai konsensus zaman" }
    ],
    kunci: "C",
    pembahasan: `<strong>Tiga Dimensi Pancasila sebagai Ideologi Terbuka (Dr. Alfian):</strong><br>
1. <strong>Dimensi Idealitas:</strong> Memuat nilai-nilai dasar yang sistematis, rasional, dan mendalam yang memberikan harapan serta cita-cita masa depan bangsa.<br>
2. <strong>Dimensi Normatif:</strong> Nilai-nilai dasar tersebut dijabarkan ke dalam sistem norma hukum atau peraturan perundang-undangan (nilai instrumental).<br>
3. <strong>Dimensi Realistis:</strong> Menunjukkan kemampuan ideologi untuk mencerminkan realitas dan dinamika kehidupan konkret di tengah masyarakat, termasuk menjawab tantangan era digital dan kecerdasan buatan tanpa mengorbankan nilai dasarnya.<br><br>
<strong>Kunci Jawaban: C (realistis, karena mencerminkan kenyataan hidup dan kebutuhan praktis masyarakat)</strong>`
  },
  {
    id: 2,
    kode: "25PKN-PRED2-002",
    elemen: "Pancasila",
    subelemen: "Kedudukan Pancasila: Meja Statis & Leitstar Dinamis",
    kompetensi: "Memahami kedudukan fundamental Pancasila dalam gagasan para pendiri bangsa.",
    indikator: "Menjelaskan fungsi Pancasila sebagai meja statis pemersatu dan leitstar dinamis penuntun arah kemajuan bangsa.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam pidato bersejarah 1 Juni 1945, Ir. Soekarno menyatakan bahwa Pancasila berkedudukan sebagai <em>philosofische grondslag</em> (dasar falsafah negara), sekaligus berfungsi ganda sebagai <strong>"meja statis"</strong> dan <strong>"leitstar dinamis"</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pernyataan berikut yang paling tepat menggambarkan kedudukan Pancasila sebagai <em>"leitstar dinamis"</em> adalah....
</p>`,
    options: [
      { id: "A", text: "titik temu konsensus permanen yang menyatukan keberagaman suku, ras, dan agama di Indonesia" },
      { id: "B", text: "bintang penuntun yang menggerakkan dan mengarahkan bangsa dalam mencapai cita-cita kemerdekaan di tengah perubahan zaman" },
      { id: "C", text: "fondasi kokoh berdirinya bangunan hukum tata negara yang tidak boleh diubah oleh generasi penerus" },
      { id: "D", text: "sumber dari segala sumber hukum yang mengikat seluruh penyelenggara negara secara hierarkis" },
      { id: "E", text: "pedoman tata tertib pergaulan antarwarga negara dalam lingkup hukum perdata adat" }
    ],
    kunci: "B",
    pembahasan: `<strong>Konsep Meja Statis dan Leitstar Dinamis:</strong><br>
- <strong>Meja Statis (Statischer Tisch):</strong> Pancasila menjadi titik temu, pijakan kokoh, dan landasan persatuan yang menyatukan segenap kemajemukan elemen bangsa (suku, agama, golongan, kedaerahan).<br>
- <strong>Leitstar Dinamis (Bintang Pemandu):</strong> Pancasila berfungsi sebagai bintang penuntun arah yang dinamis, membimbing, memberi energi penggerak, serta mengarahkan kebijakan dan perjalanan bangsa Indonesia dalam mewujudkan keadilan sosial dan kedaulatan di tengah arus modernitas.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 3,
    kode: "25PKN-PRED2-003",
    elemen: "Pancasila",
    subelemen: "Moderasi Beragama & Nilai Ketuhanan",
    kompetensi: "Menganalisis implementasi nilai ketuhanan dan kemanusiaan dalam pencegahan intoleransi.",
    indikator: "Menentukan tindakan yang mencerminkan moderasi beragama berbasis Sila ke-1 dan ke-2 Pancasila.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Di sebuah wilayah perkotaan yang heterogen, muncul polemik antarwarga akibat rencana renovasi dan pembangunan tempat ibadah salah satu kelompok minoritas. Sebagian kelompok warga menolak dengan dalih persetujuan lingkungan, sementara kelompok lain merasa hak konstitusional beribadahnya dihalang-halangi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Sikap penyelesaian yang paling selaras dengan perpaduan nilai <strong>Sila Pertama (Ketuhanan Yang Maha Esa)</strong> dan <strong>Sila Kedua (Kemanusiaan yang Adil dan Beradab)</strong> adalah....
</p>`,
    options: [
      { id: "A", text: "menghentikan permanen izin pembangunan tempat ibadah demi menjaga ketenangan mayoritas warga sekitar" },
      { id: "B", text: "memfasilitasi dialog musyawarah antarumat beragama yang difasilitasi FKUB dan aparat pemerintah dengan menjunjung tinggi hak asasi beribadah dan kepatuhan regulasi" },
      { id: "C", text: "memaksa warga yang menolak untuk menerima pembangunan secara sepihak dengan mengerahkan aparat keamanan tanpa dialog" },
      { id: "D", text: "memindahkan lokasi pemukiman kelompok minoritas ke wilayah pinggiran agar tidak memicu gesekan sosial" },
      { id: "E", text: "menyerahkan penyelesaian sepenuhnya kepada kehendak voting suara terbanyak warga perumahan setempat" }
    ],
    kunci: "B",
    pembahasan: `<strong>Sinergi Sila Ke-1 dan Sila Ke-2:</strong><br>
- Sila Ke-1 menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya dan beribadat menurut agama dan kepercayaannya (Pasal 29 UUD 1945).<br>
- Sila Ke-2 menegaskan perlakuan adil dan beradab terhadap sesama manusia tanpa diskriminasi.<br>
Penyelesaian terbaik adalah dialog deliberatif yang inklusif melalui Forum Kerukunan Umat Beragama (FKUB) dan pemerintah daerah untuk memastikan hak beribadah terjamin sekaligus persyaratan administratif sosial terpenuhi secara damai.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 4,
    kode: "25PKN-PRED2-004",
    elemen: "Pancasila",
    subelemen: "Praksis Nilai Pancasila di Ruang Digital",
    kompetensi: "Mengevaluasi etika digital dan literasi kebangsaan dalam mencegah polarisasi sosial.",
    indikator: "Menilai kebenaran pernyataan terkait praksis sila-sila Pancasila dalam bermedia sosial.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Ruang digital dan media sosial kerap menjadi ajang penyebaran ujaran kebencian (<em>hate speech</em>), politik identitas yang memecah belah, dan manipulasi informasi. Evaluasi kebenaran dari masing-masing pernyataan praksis Pancasila di ruang digital berikut:
</p>`,
    items: [
      {
        pernyataan: "Penerapan Sila Persatuan Indonesia di media sosial diwujudkan dengan tidak memproduksi maupun menyebarkan konten yang mengeksploitasi sentimen SARA untuk kepentingan elektoral sesaat.",
        kunci: "Benar",
        penjelasan: "Sila ke-3 menuntut keutuhan bangsa di atas kepentingan kelompok atau partisan."
      },
      {
        pernyataan: "Kebebasan berekspresi di era digital bersifat mutlak tanpa batas hukum, sehingga kritik bermuatan pencemaran nama baik dan fitnah tetap dilindungi sebagai wujud kedaulatan rakyat.",
        kunci: "Salah",
        penjelasan: "Menurut Pasal 28J ayat (2) UUD 1945, hak asasi dan kebebasan berekspresi dibatasi oleh undang-undang demi menghormati hak orang lain, moralitas, nilai agama, dan ketertiban umum."
      },
      {
        pernyataan: "Mengedepankan etika tabayyun (verifikasi fakta dan klarifikasi objektif) sebelum membagikan informasi berita merupakan pencerminan kebijaksanaan Sila Keempat dan adab kemanusiaan Sila Kedua.",
        kunci: "Benar",
        penjelasan: "Tabayyun dan sikap kritis terhadap hoaks mencegah fitnah serta menjaga kerukunan sosial."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Evaluasi Nilai Pancasila di Era Informasi Digital:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Menjauhi provokasi SARA adalah wujud nyata persatuan bangsa (Sila ke-3).<br>
2. <strong>Pernyataan 2 (Salah):</strong> Hak berekspresi bukan hak mutlak (*derogable right*). Pasal 28J ayat (2) UUD 1945 menegaskan batas moral, ketertiban umum, dan penghormatan hak orang lain.<br>
3. <strong>Pernyataan 3 (Benar):</strong> Budaya verifikasi (*fact-checking*) dan tabayyun mencerminkan kebijaksanaan akal sehat dan adab kemanusiaan luhur.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`
  },
  {
    id: 5,
    kode: "25PKN-PRED2-005",
    elemen: "Pancasila",
    subelemen: "Sila Keadilan Sosial dalam Kebijakan Publik",
    kompetensi: "Menganalisis wujud implementasi nilai keadilan sosial bagi seluruh rakyat Indonesia.",
    indikator: "Memilih program-program pemerintah yang mencerminkan nilai instrumental dan praksis Sila Ke-5.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sila kelima, <em>"Keadilan Sosial bagi Seluruh Rakyat Indonesia"</em>, mengamanatkan bahwa kemakmuran dan kekayaan negara harus didistribusikan secara berkeadilan serta melindungi kelompok rentan dan masyarakat terpencil.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah kebijakan pemerintah berikut yang secara nyata mencerminkan implementasi Sila Kelima Pancasila? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Program Jaminan Kesehatan Nasional (JKN/BPJS Kesehatan) segmen Penerima Bantuan Iuran (PBI) yang preminya dibayarkan oleh APBN" },
      { id: "B", text: "Pemberian fasilitas bebas pajak selamanya kepada korporasi tambang multinasional tanpa kewajiban reklamasi lingkungan" },
      { id: "C", text: "Kebijakan Bahan Bakar Minyak (BBM) Satu Harga di daerah Terdepan, Terluar, dan Tertinggal (3T)" },
      { id: "D", text: "Penyaluran Bantuan Operasional Sekolah (BOS) afirmasi bagi sekolah di daerah pelosok untuk mengatasi disparitas mutu pendidikan" },
      { id: "E", text: "Pemusatan seluruh proyek infrastruktur megah hanya di kota-kota besar pulau Jawa guna memaksimalkan profitabilitas" }
    ],
    kunci: ["A", "C", "D"],
    pembahasan: `<strong>Kebijakan Publik Berkeadilan Sosial (Sila ke-5):</strong><br>
- <strong>Opsi A (Benar):</strong> JKN PBI menjamin hak dasar kesehatan bagi masyarakat miskin dan rentan.<br>
- <strong>Opsi B (Salah):</strong> Bertentangan dengan prinsip keadilan ekonomi dan perlindungan ekologis Pasal 33 UUD 1945.<br>
- <strong>Opsi C (Benar):</strong> BBM Satu Harga di wilayah 3T menghapus kesenjangan harga energi antardaerah, menciptakan keadilan spasial.<br>
- <strong>Opsi D (Benar):</strong> BOS afirmasi memberikan pemerataan akses pendidikan berkualitas bagi anak bangsa di pelosok Nusantara.<br>
- <strong>Opsi E (Salah):</strong> Pembangunan Jawa-sentris memicu ketimpangan wilayah dan melanggar prinsip keadilan sosial Indonesia-sentris.<br><br>
<strong>Kunci Jawaban: A, C, dan D</strong>`
  },
  {
    id: 6,
    kode: "25PKN-PRED2-006",
    elemen: "Pancasila",
    subelemen: "Karakter Gotong Royong & Identitas Nasional",
    kompetensi: "Menganalisis urgensi karakter gotong royong menghadapi individualisme dan hedonisme.",
    indikator: "Menentukan tindakan konkret gotong royong dalam penyelesaian persoalan lingkungan hidup lokal.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Maraknya gaya hidup individualistik, konsumerisme, dan keengganan berpartisipasi dalam kegiatan kemasyarakatan sering dinilai mengikis tradisi gotong royong sebagai intisari kepribadian bangsa Indonesia.
</p>
<p class="font-semibold text-slate-900 mb-2">
Wujud pengamalan gotong royong yang paling kontekstual dan berdampak langsung bagi kelestarian lingkungan hidup di tingkat komunitas adalah....
</p>`,
    options: [
      { id: "A", text: "membayar denda uang kepada pengurus RT agar dibebaskan dari kewajiban kerja bakti kebersihan" },
      { id: "B", text: "menginisiasi gerakan bank sampah lingkungan dan kerja bakti rutin membersihkan saluran air bersama warga sekitar" },
      { id: "C", text: "memposting keluhan tumpukan sampah di media sosial viral tanpa ikut membersihkannya secara fisik" },
      { id: "D", text: "menyerahkan seluruh penanganan limbah rumah tangga kepada petugas kebersihan sewaan swasta" },
      { id: "E", text: "membuat spanduk larangan membuang sampah sembarangan tanpa menyediakan fasilitas tempat sampah terpilah" }
    ],
    kunci: "B",
    pembahasan: `<strong>Aktualisasi Karakter Gotong Royong:</strong><br>
Gotong royong bukan sekadar kerja bakti konvensional, melainkan partisipasi aktif, sukarela, dan kolaboratif antarwarga untuk memecahkan masalah bersama. Menginisiasi bank sampah, memilah limbah organik-anorganik, dan membersihkan saluran air bersama-sama adalah wujud nyata gotong royong berbasis kepedulian ekologis.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },

  // --- ELEMEN 2: UUD NEGARA REPUBLIK INDONESIA TAHUN 1945 (Soal 7 s.d. 13) ---
  {
    id: 7,
    kode: "25PKN-PRED2-007",
    elemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    subelemen: "Lembaga Peradilan & Judicial Review",
    kompetensi: "Membedakan kewenangan uji materi (Judicial Review) antara Mahkamah Konstitusi dan Mahkamah Agung.",
    indikator: "Menganalisis lembaga peradilan yang berwenang menguji keabsahan materi suatu norma hukum.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebuah koalisi organisasi masyarakat sipil menilai bahwa salah satu pasal dalam Undang-Undang Perlindungan Konsumen yang baru disahkan DPR bersama Presiden bertentangan secara substantif dengan hak asasi warga negara yang dijamin dalam Pasal 28D ayat (1) UUD NRI Tahun 1945.
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan sistem ketatanegaraan Indonesia pasca-amandemen UUD 1945, lembaga yang berwenang mengadili perkara pengujian undang-undang tersebut adalah....
</p>`,
    options: [
      { id: "A", text: "Mahkamah Agung (MA), karena merupakan pengadilan kasasi tertinggi di Indonesia" },
      { id: "B", text: "Mahkamah Konstitusi (MK), karena berwenang menguji undang-undang terhadap UUD NRI Tahun 1945" },
      { id: "C", text: "Komisi Yudisial (KY), karena bertugas menjaga martabat dan kehormatan para hakim" },
      { id: "D", text: "Dewan Perwakilan Daerah (DPD), karena bertugas menyalurkan aspirasi daerah terkait undang-undang" },
      { id: "E", text: "Badan Pemeriksa Keuangan (BPK), karena undang-undang berdampak langsung pada keuangan negara" }
    ],
    kunci: "B",
    pembahasan: `<strong>Kewenangan Uji Materi (Judicial Review) di Indonesia:</strong><br>
- <strong>Mahkamah Konstitusi (Pasal 24C ayat 1 UUD 1945):</strong> Berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk menguji <strong>Undang-Undang (UU) terhadap Undang-Undang Dasar (UUD 1945)</strong>.<br>
- <strong>Mahkamah Agung (Pasal 24A ayat 1 UUD 1945):</strong> Berwenang menguji <strong>peraturan perundang-undangan di bawah undang-undang</strong> (PP, Perpres, Perda) terhadap undang-undang.<br>
Karena objek yang diuji adalah norma <strong>Undang-Undang terhadap UUD 1945</strong>, maka kewenangan mutlak berada pada Mahkamah Konstitusi.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 8,
    kode: "25PKN-PRED2-008",
    elemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    subelemen: "Hierarki Peraturan Perundang-undangan",
    kompetensi: "Menganalisis tata urutan peraturan perundang-undangan menurut UU No. 12 Tahun 2011 jo UU No. 13 Tahun 2022.",
    indikator: "Menentukan urutan hierarki peraturan perundang-undangan Republik Indonesia yang sah.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam asas hukum <em>lex superior derogat legi inferiori</em>, peraturan perundang-undangan yang lebih rendah tidak boleh bertentangan dengan peraturan yang lebih tinggi derajatnya.
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-rose-700 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-rose-800 text-center">Tingkat</th>
        <th class="p-2.5 border border-rose-800">Jenis Peraturan Perundang-undangan</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr><td class="p-2 border border-slate-200 text-center font-bold">1</td><td class="p-2 border border-slate-200">UUD Negara Republik Indonesia Tahun 1945</td></tr>
      <tr class="bg-slate-50"><td class="p-2 border border-slate-200 text-center font-bold">2</td><td class="p-2 border border-slate-200">Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR)</td></tr>
      <tr><td class="p-2 border border-slate-200 text-center font-bold">3</td><td class="p-2 border border-slate-200">Undang-Undang / Peraturan Pemerintah Pengganti Undang-Undang (Perppu)</td></tr>
      <tr class="bg-slate-50"><td class="p-2 border border-slate-200 text-center font-bold">4</td><td class="p-2 border border-slate-200">[ X ]</td></tr>
      <tr><td class="p-2 border border-slate-200 text-center font-bold">5</td><td class="p-2 border border-slate-200">[ Y ]</td></tr>
      <tr class="bg-slate-50"><td class="p-2 border border-slate-200 text-center font-bold">6</td><td class="p-2 border border-slate-200">Peraturan Daerah Provinsi (Perda Provinsi)</td></tr>
      <tr><td class="p-2 border border-slate-200 text-center font-bold">7</td><td class="p-2 border border-slate-200">Peraturan Daerah Kabupaten/Kota (Perda Kab/Kota)</td></tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan Pasal 7 ayat (1) UU No. 12 Tahun 2011, jenis peraturan perundang-undangan yang tepat untuk mengisi posisi <strong>[ X ]</strong> dan <strong>[ Y ]</strong> berturut-turut adalah....
</p>`,
    options: [
      { id: "A", text: "Peraturan Presiden dan Peraturan Pemerintah" },
      { id: "B", text: "Peraturan Pemerintah dan Peraturan Presiden" },
      { id: "C", text: "Peraturan Menteri dan Keputusan Presiden" },
      { id: "D", text: "Peraturan Pemerintah dan Peraturan Daerah Provinsi" },
      { id: "E", text: "Instruksi Presiden dan Surat Edaran Menteri" }
    ],
    kunci: "B",
    pembahasan: `<strong>Hierarki Peraturan Perundang-undangan (Pasal 7 ayat 1 UU No. 12/2011):</strong><br>
1. UUD Negara Republik Indonesia Tahun 1945<br>
2. Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR)<br>
3. Undang-Undang / Peraturan Pemerintah Pengganti Undang-Undang (Perppu)<br>
4. <strong>Peraturan Pemerintah (PP)</strong> [ X ]<br>
5. <strong>Peraturan Presiden (Perpres)</strong> [ Y ]<br>
6. Peraturan Daerah Provinsi<br>
7. Peraturan Daerah Kabupaten/Kota.<br><br>
Peraturan Pemerintah (PP) ditetapkan oleh Presiden untuk menjalankan UU, sedangkan Perpres berada satu tingkat di bawah PP.<br><br>
<strong>Kunci Jawaban: B (Peraturan Pemerintah dan Peraturan Presiden)</strong>`
  },
  {
    id: 9,
    kode: "25PKN-PRED2-009",
    elemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    subelemen: "Fungsi Anggaran & Legislasi DPR",
    kompetensi: "Menganalisis relasi kekuasaan eksekutif dan legislatif dalam pembahasan RAPBN.",
    indikator: "Menjelaskan konsekuensi yuridis jika DPR tidak menyetujui RAPBN yang diajukan Presiden.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pasal 23 ayat (1) UUD NRI Tahun 1945 menyatakan bahwa Anggaran Pendapatan dan Belanja Negara (APBN) sebagai wujud dari pengelolaan keuangan negara ditetapkan setiap tahun dengan undang-undang dan dilaksanakan secara terbuka serta bertanggung jawab untuk sebesar-besar kemakmuran rakyat.
</p>
<p class="font-semibold text-slate-900 mb-2">
Menurut Pasal 23 ayat (3) UUD NRI Tahun 1945, apabila Dewan Perwakilan Rakyat (DPR) tidak menyetujui Rancangan APBN yang diajukan oleh Presiden, maka langkah konstitusional yang diambil adalah....
</p>`,
    options: [
      { id: "A", text: "Presiden membubarkan DPR dan menyelenggarakan pemilihan umum darurat dalam waktu 30 hari" },
      { id: "B", text: "pemerintah pusat berhenti beroperasi sampai tercapai kompromi politik antara fraksi di DPR" },
      { id: "C", text: "Pemerintah menjalankan Anggaran Pendapatan dan Belanja Negara tahun yang lalu" },
      { id: "D", text: "Presiden mengeluarkan Dekrit Keadaan Bahaya untuk menetapkan APBN tanpa persetujuan DPR" },
      { id: "E", text: "Mahkamah Konstitusi mengambil alih kewenangan pengesahan APBN atas nama kepentingan nasional" }
    ],
    kunci: "C",
    pembahasan: `<strong>Bunyi Pasal 23 ayat (3) UUD NRI 1945:</strong><br>
<em>"Apabila Dewan Perwakilan Rakyat tidak menyetujui rancangan Anggaran Pendapatan dan Belanja Negara yang diusulkan oleh Presiden, Pemerintah menjalankan Anggaran Pendapatan dan Belanja Negara tahun yang lalu."</em><br>
Hal ini dirancang agar roda pemerintahan dan pelayanan publik dasar (kesehatan, pendidikan, keamanan) tidak mengalami kelumpuhan (<em>government shutdown</em>) akibat kebuntuan politik pembahasan anggaran di parlemen.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 10,
    kode: "25PKN-PRED2-010",
    elemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    subelemen: "Hak Asasi Manusia dalam Bab XA UUD 1945",
    kompetensi: "Membedakan hak asasi manusia yang dapat dibatasi (derogable) dan tidak dapat dikurangi (non-derogable).",
    indikator: "Menilai kebenaran pernyataan terkait klasifikasi dan pembatasan HAM dalam konstitusi.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Amandemen kedua UUD 1945 memuat ketentuan HAM yang sangat komprehensif pada Bab XA (Pasal 28A hingga 28J). Tentukan kebenaran dari masing-masing pernyataan yuridis mengenai HAM berikut:
</p>`,
    items: [
      {
        pernyataan: "Hak untuk hidup, hak untuk tidak disiksa, hak kemerdekaan pikiran dan hati nurani, hak beragama, dan hak untuk tidak dituntut atas dasar hukum yang berlaku surut adalah hak asasi manusia yang tidak dapat dikurangi dalam keadaan apa pun (non-derogable rights).",
        kunci: "Benar",
        penjelasan: "Tercantum secara eksplisit dalam Pasal 28I ayat (1) UUD NRI Tahun 1945."
      },
      {
        pernyataan: "Pemerintah berhak mencabut hak hidup seorang warga negara secara sewenang-wenang tanpa proses peradilan yang sah (fair trial) apabila negara dinyatakan dalam status darurat militer.",
        kunci: "Salah",
        penjelasan: "Hak hidup adalah non-derogable rights, tidak boleh dicabut sewenang-wenang tanpa hukum yang sah (due process of law)."
      },
      {
        pernyataan: "Dalam menjalankan hak dan kebebasannya, setiap orang wajib tunduk kepada pembatasan yang ditetapkan dengan undang-undang semata-mata untuk menjamin pengakuan atas hak orang lain serta memenuhi tuntutan moral, nilai agama, keamanan, dan ketertiban umum.",
        kunci: "Benar",
        penjelasan: "Merupakan amanat Pasal 28J ayat (2) UUD NRI Tahun 1945."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Analisis Yuridis Hak Asasi Manusia UUD NRI 1945:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Pasal 28I ayat (1) mengatur hak-hak mendasar yang mutlak (*non-derogable rights*) yang tidak boleh dikesampingkan dalam kondisi darurat apa pun.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Tindakan sewenang-wenang tanpa peradilan (*extrajudicial killing*) adalah pelanggaran HAM berat dan melanggar prinsip negara hukum Pasal 1 ayat (3).<br>
3. <strong>Pernyataan 3 (Benar):</strong> Pasal 28J ayat (2) mengatur kewajiban asasi dan dasar legitimasi pembatasan hak (*derogable rights*) melalui undang-undang demi ketertiban umum dan hak orang lain.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`
  },
  {
    id: 11,
    kode: "25PKN-PRED2-011",
    elemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    subelemen: "Lembaga Negara Independen (KY & BPK)",
    kompetensi: "Menganalisis kewenangan Komisi Yudisial dan Badan Pemeriksa Keuangan pasca-amandemen.",
    indikator: "Memilih wewenang konstitusional Komisi Yudisial (KY) menurut UUD 1945.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Amandemen UUD 1945 membentuk lembaga-lembaga negara mandiri untuk menegakkan tata kelola pemerintahan yang bersih dan independen, salah satunya adalah Komisi Yudisial (KY) yang diatur dalam Pasal 24B.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah di antara pernyataan berikut yang merupakan wewenang sah Komisi Yudisial menurut Pasal 24B ayat (1) UUD NRI Tahun 1945? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Mengusulkan pengangkatan hakim agung kepada Dewan Perwakilan Rakyat (DPR)" },
      { id: "B", text: "Memeriksa dan memutuskan permohonan kasasi perkara pidana dan perdata tingkat akhir" },
      { id: "C", text: "Mempunyai wewenang lain dalam rangka menjaga dan menegakkan kehormatan, keluhuran martabat, serta perilaku hakim" },
      { id: "D", text: "Menjatuhkan vonis hukuman pidana penjara kepada hakim yang terbukti menerima suap" },
      { id: "E", text: "Melakukan pengawasan terhadap kode etik dan pedoman perilaku hakim di seluruh lingkungan peradilan" }
    ],
    kunci: ["A", "C", "E"],
    pembahasan: `<strong>Wewenang Komisi Yudisial (Pasal 24B ayat 1 UUD 1945):</strong><br>
<em>"Komisi Yudisial bersifat mandiri yang berwenang mengusulkan pengangkatan hakim agung dan mempunyai wewenang lain dalam rangka menjaga dan menegakkan kehormatan, keluhuran martabat, serta perilaku hakim."</em><br>
- <strong>Opsi A (Benar):</strong> Mengusulkan calon Hakim Agung ke DPR untuk disetujui.<br>
- <strong>Opsi B (Salah):</strong> Memeriksa kasasi adalah kewenangan Mahkamah Agung (Pasal 24A).<br>
- <strong>Opsi C & E (Benar):</strong> Menjaga martabat, kehormatan, dan menegakkan kode etik/pedoman perilaku hakim.<br>
- <strong>Opsi D (Salah):</strong> Menjatuhkan hukuman pidana adalah kewenangan pengadilan tindak pidana korupsi/badan peradilan, bukan KY (KY hanya menjatuhkan sanksi etik).<br><br>
<strong>Kunci Jawaban: A, C, dan E</strong>`
  },
  {
    id: 12,
    kode: "25PKN-PRED2-012",
    elemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    subelemen: "Perekonomian Nasional & Kesejahteraan Sosial (Pasal 33)",
    kompetensi: "Menerapkan prinsip demokrasi ekonomi Pasal 33 UUD 1945 dalam pengelolaan sumber daya alam.",
    indikator: "Menghubungkan kebijakan hilirisasi sumber daya alam dengan amanat Pasal 33 ayat (3) UUD 1945.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pemerintah Republik Indonesia memberlakukan kebijakan larangan ekspor bijih mentah nikel (<em>raw material</em>) dan mewajibkan pembangunan fasilitas pemurnian (<em>smelter</em>) di dalam negeri (hilirisasi tambang). Kebijakan ini bertujuan meningkatkan nilai tambah komoditas, menciptakan lapangan kerja lokal, dan memperbesar pendapatan negara.
</p>
<p class="font-semibold text-slate-900 mb-2">
Kebijakan hilirisasi sumber daya tambang tersebut merupakan bentuk konkret dari pengamalan ketentuan UUD NRI Tahun 1945, yaitu....
</p>`,
    options: [
      { id: "A", text: "Pasal 27 ayat (2), tentang hak setiap warga negara atas pekerjaan dan penghidupan yang layak" },
      { id: "B", text: "Pasal 33 ayat (3), bahwa bumi, air, dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat" },
      { id: "C", text: "Pasal 34 ayat (1), tentang pemeliharaan fakir miskin dan anak terlantar oleh negara" },
      { id: "D", text: "Pasal 31 ayat (4), tentang alokasi anggaran pendidikan sekurang-kurangnya dua puluh persen" },
      { id: "E", text: "Pasal 18 ayat (1), tentang pembagian daerah Indonesia atas daerah-daerah provinsi dan kabupaten" }
    ],
    kunci: "B",
    pembahasan: `<strong>Landasan Konstitusional Hilirisasi SDA (Pasal 33 ayat 3):</strong><br>
Hak menguasai negara atas kekayaan alam bukan berarti negara memiliki secara privat seperti korporasi, melainkan negara berwenang mengatur (<em>regelendaad</em>), mengurus (<em>bestuursdaad</em>), mengarahkan (<em>beleidsdaad</em>), dan mengawasi (<em>toezichthoudensdaad</em>) agar pemanfaatan mineral tambang tidak diekspor mentah murah ke luar negeri, melainkan diolah demi sebesar-besar kemakmuran rakyat Indonesia.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 13,
    kode: "25PKN-PRED2-013",
    elemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    subelemen: "Asas Pemilihan Umum (Pasal 22E)",
    kompetensi: "Menganalisis prinsip pemilu yang demokratis dan berintegritas di Indonesia.",
    indikator: "Mengidentifikasi pelanggaran terhadap asas pemilu 'bebas dan rahasia'.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada pelaksanaan pemungutan suara di suatu Tempat Pemungutan Suara (TPS), seorang ketua RT mendampingi warga di bilik suara sambil mengarahkan dan memfoto surat suara yang dicoblos guna memastikan warga memilih calon legislatif tertentu yang telah memberikan bantuan sembako.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tindakan ketua RT tersebut secara tegas melanggar asas pemilihan umum sebagaimana diatur dalam Pasal 22E ayat (1) UUD NRI Tahun 1945, khususnya asas....
</p>`,
    options: [
      { id: "A", text: "langsung dan umum" },
      { id: "B", text: "bebas dan rahasia" },
      { id: "C", text: "jujur dan adil semata" },
      { id: "D", text: "terbuka dan akuntabel" },
      { id: "E", text: "proporsional dan berkala" }
    ],
    kunci: "B",
    pembahasan: `<strong>Asas Pemilu menurut Pasal 22E ayat (1) UUD 1945 (Luber dan Jurdil):</strong><br>
- <strong>Bebas:</strong> Setiap warga negara berhak memilih tanpa tekanan, paksaan, atau ancaman dari pihak manapun.<br>
- <strong>Rahasia:</strong> Pilihan pemilih dijamin tidak diketahui oleh orang lain dengan cara apa pun.<br>
Mendampingi pemilih di bilik suara dan memfoto surat suara melanggar prinsip <strong>bebas</strong> (karena ada pemaksaan/arahan) dan prinsip <strong>rahasia</strong> (pilihan diketahui oleh pihak lain).<br><br>
<strong>Kunci Jawaban: B (bebas dan rahasia)</strong>`
  },

  // --- ELEMEN 3: BHINNEKA TUNGGAL IKA & INTEGRASI NASIONAL (Soal 14 s.d. 19) ---
  {
    id: 14,
    kode: "25PKN-PRED2-014",
    elemen: "Bhinneka Tunggal Ika",
    subelemen: "Integrasi Nasional & Pluralisme Budaya",
    kompetensi: "Menganalisis konsep integrasi nasional dalam masyarakat majemuk Indonesia.",
    indikator: "Membedakan pendekatan asimilasi dan integrasi multikultural berdasar semboyan Bhinneka Tunggal Ika.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Indonesia merupakan bangsa majemuk yang memiliki lebih dari 300 kelompok etnis dan 700 bahasa daerah. Dalam merajut persatuan, semboyan <em>Bhinneka Tunggal Ika</em> memandang keberagaman suku bangsa dan budaya bukan sebagai ancaman perpecahan, melainkan sebagai modal sosial dan kekayaan identitas nasional.
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan filosofi Bhinneka Tunggal Ika, model integrasi sosial yang paling tepat diterapkan di Indonesia adalah....
</p>`,
    options: [
      { id: "A", text: "melting pot homogen, yaitu melebur seluruh identitas suku daerah menjadi satu kultur dominan baru" },
      { id: "B", text: "asimilasi total, yaitu mewajibkan kelompok etnis minoritas meninggalkan adat istiadat leluhurnya" },
      { id: "C", text: "pluralisme multikultural, yaitu memelihara dan menghargai keragaman identitas budaya lokal dalam bingkai persatuan nasional" },
      { id: "D", text: "segregasi spasial, yaitu memisahkan zonasi pemukiman kelompok etnis guna menghindari gesekan sosial" },
      { id: "E", text: "etnosentrisme terarah, yaitu mengunggulkan kebudayaan kelompok mayoritas sebagai tolok ukur peradaban nasional" }
    ],
    kunci: "C",
    pembahasan: `<strong>Konsep Integrasi Bhinneka Tunggal Ika:</strong><br>
Semboyan *Bhinneka Tunggal Ika* (*berbeda-beda tetapi tetap satu jua*) menganut prinsip kesatuan dalam keberagaman (*unity in diversity*). Pendekatan yang diusung adalah <strong>pluralisme multikultural</strong> (analogikanya seperti *salad bowl*), di mana setiap identitas suku, bahasa, dan kearifan lokal tetap terpelihara eksistensinya dan saling melengkapi di bawah naungan satu ikatan kebangsaan Indonesia, bukan peleburan paksa (*melting pot* homogen) atau pemisahan (*segregasi*).<br><br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 15,
    kode: "25PKN-PRED2-015",
    elemen: "Bhinneka Tunggal Ika",
    subelemen: "Resolusi Konflik Sosial & Kearifan Lokal",
    kompetensi: "Menganalisis mekanisme resolusi damai sengketa sosial berbasis kearifan lokal.",
    indikator: "Mengevaluasi kebenaran pernyataan terkait penyelesaian konflik agraria dan masyarakat adat.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Di berbagai wilayah Nusantara terdapat pranata adat lokal dalam menyelesaikan perselisihan antarwarga, seperti musyawarah adat *Pela Gandong* di Maluku, *Kerapatan Adat Nagari* di Minangkabau, atau mediasi damai kepala suku di Papua. Tentukan kebenaran dari pernyataan-pernyataan berikut:
</p>`,
    items: [
      {
        pernyataan: "Pemanfaatan pranata adat dan pendekatan keadilan restoratif (restorative justice) dapat membantu memulihkan hubungan sosial antarwarga yang berkonflik tanpa harus selalu berujung pada sanksi pemidanaan retributif.",
        kunci: "Benar",
        penjelasan: "Keadilan restoratif mengedepankan rekonsiliasi, pemulihan korban, dan keharmonisan sosial warga."
      },
      {
        pernyataan: "Hukum adat berkedudukan lebih tinggi daripada UUD 1945, sehingga putusan peradilan adat dapat mengabaikan prinsip-prinsip hak asasi manusia universal dan hukum nasional.",
        kunci: "Salah",
        penjelasan: "Berdasarkan Pasal 18B ayat (2) UUD 1945, pengakuan hukum adat berlaku sepanjang masih hidup dan sesuai dengan perkembangan masyarakat serta prinsip NKRI."
      },
      {
        pernyataan: "Pencegahan konflik berlatar belakang SARA membutuhkan penegakan hukum yang adil, netralitas aparat, serta penguatan dialog lintas budaya di ruang-ruang pendidikan publik.",
        kunci: "Benar",
        penjelasan: "Pencegahan terpadu melibatkan keadilan hukum dan edukasi multikultural berkelanjutan."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Resolusi Konflik Berbasis Nilai Kearifan Lokal:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> *Restorative justice* berakar kuat pada nilai musyawarah mufakat budaya Nusantara untuk memulihkan kedamaian sosial (*harmoni*).<br>
2. <strong>Pernyataan 2 (Salah):</strong> Pasal 18B ayat (2) UUD 1945 menyatakan hukum adat diakui bersyarat: *sepanjang masih hidup dan sesuai perkembangan masyarakat dan prinsip Negara Kesatuan Republik Indonesia*.<br>
3. <strong>Pernyataan 3 (Benar):</strong> Integrasi sosial menuntut kepastian hukum, non-diskriminasi aparat, dan pemahaman lintas kultural.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`
  },
  {
    id: 16,
    kode: "25PKN-PRED2-016",
    elemen: "Bhinneka Tunggal Ika",
    subelemen: "Hambatan Integrasi: Etnosentrisme & Stereotipe",
    kompetensi: "Menganalisis dampak negatif prasangka, etnosentrisme, dan stereotipe terhadap keutuhan bangsa.",
    indikator: "Mengidentifikasi sikap etnosentrisme dalam dinamika interaksi sosial.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang manajer personalia di sebuah perusahaan multinasional menolak berkas lamaran seorang kandidat berprestasi hanya karena kandidat tersebut berasal dari suku bangsa tertentu yang menurut anggapannya berkarakter malas dan suka membantah, meskipun kandidat tersebut memiliki kualifikasi akademik terbaik.
</p>
<p class="font-semibold text-slate-900 mb-2">
Sikap dan tindakan manajer tersebut merupakan manifestasi nyata dari hambatan integrasi sosial berupa....
</p>`,
    options: [
      { id: "A", text: "toleransi aktif yang selektif" },
      { id: "B", text: "stereotipe negatif dan diskriminasi primordial" },
      { id: "C", text: "asimilasi struktural yang tertunda" },
      { id: "D", text: "akulturasi budaya modern" },
      { id: "E", text: "patriotisme fungsional" }
    ],
    kunci: "B",
    pembahasan: `<strong>Stereotipe dan Diskriminasi Sosial:</strong><br>
- <strong>Stereotipe:</strong> Pelabelan atau generalisasi sifat buruk/negatif kepada seluruh anggota kelompok suku/etnis tertentu tanpa bukti objektif personal.<br>
- <strong>Diskriminasi:</strong> Perlakuan tidak adil atau penolakan hak (dalam hal ini hak mendapatkan pekerjaan yang layak) berdasarkan prasangka suku/agama/ras.<br>
Tindakan manajer tersebut adalah kombinasi stereotipe negatif yang berujung pada diskriminasi primordial yang melanggar Pasal 28I ayat (2) UUD 1945.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 17,
    kode: "25PKN-PRED2-017",
    elemen: "Bhinneka Tunggal Ika",
    subelemen: "Faktor Penguat Integrasi Nasional",
    kompetensi: "Mengidentifikasi faktor-faktor pendorong integrasi nasional bangsa Indonesia.",
    indikator: "Memilih faktor historis dan sosiopolitik yang memperkokoh persatuan nasional.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Integrasi nasional Indonesia tidak terjadi secara kebetulan, melainkan dibangun melalui proses sejarah perjuangan panjang dan konsensus kebangsaan yang mendalam.
</p>
<p class="font-semibold text-slate-900 mb-2">
Faktor manakah di bawah ini yang tergolong sebagai <strong>faktor pendorong integrasi nasional</strong> bangsa Indonesia? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Adanya rasa senasib dan seperjuangan akibat penderitaan penjajahan di masa lalu" },
      { id: "B", text: "Konsensus nasional bersama mengenai dasar falsafah Pancasila, UUD 1945, dan bendera Merah Putih" },
      { id: "C", text: "Adanya kesenjangan ekonomi yang sangat tajam dan meluas antarwilayah kepulauan" },
      { id: "D", text: "Keinginan dan tekad bulat untuk bersatu yang diikrarkan dalam Sumpah Pemuda 28 Oktober 1928" },
      { id: "E", text: "Munculnya etnonasionalisme sempit yang menuntut hak istimewa di setiap daerah otonom" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Faktor Pendorong Integrasi Nasional:</strong><br>
- <strong>Opsi A (Benar):</strong> Perasaan senasib seperjuangan melawan kolonialisme mengikat solidaritas lintas suku.<br>
- <strong>Opsi B (Benar):</strong> Kesepakatan fundamental (*konsensus nasional*) atas Pancasila, UUD 1945, Bahasa Indonesia, dan lambang negara Garuda Pancasila.<br>
- <strong>Opsi C (Salah):</strong> Kesenjangan ekonomi tajam adalah <em>faktor penghambat</em> integrasi karena memicu kecemburuan sosial.<br>
- <strong>Opsi D (Benar):</strong> Sumpah Pemuda 1928 adalah tonggak historis tekad satu tanah air, satu bangsa, dan satu bahasa persatuan.<br>
- <strong>Opsi E (Salah):</strong> Etnonasionalisme sempit memicu separatisme dan disintegrasi bangsa.<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`
  },
  {
    id: 18,
    kode: "25PKN-PRED2-018",
    elemen: "Bhinneka Tunggal Ika",
    subelemen: "Perlindungan Hak Masyarakat Adat (Pasal 18B)",
    kompetensi: "Menganalisis pengakuan dan perlindungan hak masyarakat hukum adat dalam konstitusi.",
    indikator: "Menentukan syarat konstitusional pengakuan kesatuan masyarakat hukum adat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pasal 18B ayat (2) UUD NRI Tahun 1945 menegaskan: <em>"Negara mengakui dan menghormati kesatuan-kesatuan masyarakat hukum adat serta hak-hak tradisionalnya sepanjang masih hidup dan sesuai dengan perkembangan masyarakat dan prinsip Negara Kesatuan Republik Indonesia, yang diatur dalam undang-undang."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan ketentuan konstitusi tersebut, penetapan wilayah hutan adat bagi suatu komunitas masyarakat adat dapat diakui secara sah oleh negara apabila....
</p>`,
    options: [
      { id: "A", text: "masyarakat adat membayar ganti rugi pembebasan lahan kepada korporasi pemegang izin konsesi hutan" },
      { id: "B", text: "kesatuan masyarakat adat tersebut nyata-nyata masih hidup, memiliki kelembagaan adat yang jelas, pranata hukum adat yang ditaati, serta diakui melalui peraturan daerah setempat" },
      { id: "C", text: "komunitas adat bersedia membubarkan struktur adatnya dan melebur ke dalam manajemen korporasi BUMN perkebunan" },
      { id: "D", text: "hutan adat tersebut memiliki potensi tambang emas yang dapat dieksploitasi oleh pemerintah pusat" },
      { id: "E", text: "seluruh anggota masyarakat adat berpindah agama menjadi penganut agama resmi yang diakui kementerian" }
    ],
    kunci: "B",
    pembahasan: `<strong>Syarat Konstitusional Pengakuan Masyarakat Hukum Adat (Putusan MK No. 35/PUU-X/2012):</strong><br>
Sebagaimana diamanatkan Pasal 18B ayat (2) UUD 1945 dan Putusan Mahkamah Konstitusi terkait Hutan Adat, hak ulayat masyarakat hukum adat diakui apabila:<br>
1. Nyata-nyata masih ada dan hidup (*actual existence*).<br>
2. Terdapat kelembagaan adat dan pranata hukum adat yang masih dipatuhi warganya.<br>
3. Memiliki batas wilayah teritorial adat yang jelas.<br>
4. Tidak bertentangan dengan kepentingan nasional dan prinsip NKRI.<br>
5. Ditetapkan dan dikukuhkan melalui instrumen hukum formal daerah (Peraturan Daerah/SK Kepala Daerah).<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 19,
    kode: "25PKN-PRED2-019",
    elemen: "Bhinneka Tunggal Ika",
    subelemen: "Bahasa Indonesia sebagai Sarana Integrasi",
    kompetensi: "Menganalisis peran bahasa nasional sebagai perekat kemajemukan bangsa.",
    indikator: "Menjelaskan fungsi bahasa Indonesia dalam menjembatani komunikasi antarsuku di Indonesia.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pemilihan bahasa Melayu sebagai cikal bakal bahasa Indonesia oleh para pemuda pada Kongres Pemuda II tahun 1928—dan bukan bahasa daerah dari suku mayoritas berpopulasi terbanyak—dinilai para ahli sosiologi politik dunia sebagai keputusan genius yang menyelamatkan Indonesia dari perpecahan etnolinguistik.
</p>
<p class="font-semibold text-slate-900 mb-2">
Alasan utama pemilihan bahasa Melayu menjadi bahasa persatuan Indonesia adalah....
</p>`,
    options: [
      { id: "A", text: "bahasa Melayu telah berabad-abad menjadi <em>lingua franca</em> (bahasa pergaulan antarpulau dan perdagangan) serta memiliki tata bahasa egaliter tanpa tingkatan kasta sosial" },
      { id: "B", text: "bahasa daerah lain dilarang oleh pemerintah kolonial Belanda untuk digunakan dalam rapat resmi" },
      { id: "C", text: "penutur bahasa Melayu saat itu menguasai lebih dari 80 persen populasi penduduk Hindia Belanda" },
      { id: "D", text: "bahasa Melayu merupakan satu-satunya bahasa daerah yang memiliki aksara tulis di kepulauan Nusantara" },
      { id: "E", text: "adanya paksaan dari kerajaan-kerajaan di Semenanjung Malaya kepada delegasi pemuda Indonesia" }
    ],
    kunci: "A",
    pembahasan: `<strong>Latar Belakang Pemilihan Bahasa Melayu/Indonesia:</strong><br>
1. <strong>Lingua Franca:</strong> Bahasa Melayu telah lama berfungsi sebagai bahasa penghubung perdagangan dan diplomasi di pelabuhan-pelabuhan Nusantara.<br>
2. <strong>Struktur Egaliter:</strong> Berbeda dengan beberapa bahasa daerah lain yang memiliki stratifikasi undhak-usuk (tingkatan bahasa berdasarkan kasta/status sosial) yang rumit, bahasa Melayu relatif egaliter, mudah dipelajari, dan tidak memicu sentimen hegemoni suku mayoritas.<br>
Hal ini menjadi perekat terkuat integrasi nasional (Pasal 36 UUD 1945).<br><br>
<strong>Kunci Jawaban: A</strong>`
  },

  // --- ELEMEN 4: NEGARA KESATUAN REPUBLIK INDONESIA & GEOPOLITIK/GEOSTRATEGI (Soal 20 s.d. 25) ---
  {
    id: 20,
    kode: "25PKN-PRED2-020",
    elemen: "Negara Kesatuan Republik Indonesia",
    subelemen: "Wawasan Nusantara sebagai Geopolitik Indonesia",
    kompetensi: "Menganalisis konsepsi Wawasan Nusantara dalam wadah Negara Kesatuan Republik Indonesia.",
    indikator: "Mengidentifikasi implementasi Wawasan Nusantara sebagai satu kesatuan pertahanan dan keamanan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Wawasan Nusantara merupakan cara pandang bangsa Indonesia tentang diri dan lingkungannya berdasarkan Pancasila dan UUD NRI Tahun 1945, yang mengutamakan persatuan bangsa dan kesatuan wilayah dalam penyelenggaraan kehidupan bermasyarakat, berbangsa, dan bernegara.
</p>
<p class="font-semibold text-slate-900 mb-2">
Perwujudan Wawasan Nusantara sebagai <strong>satu kesatuan pertahanan dan keamanan (Hankam)</strong> ditegaskan dalam prinsip bahwa....
</p>`,
    options: [
      { id: "A", text: "setiap daerah otonom berhak membentuk kesatuan militer bersenjata mandiri untuk menjaga batas wilayahnya" },
      { id: "B", text: "kekayaan alam di seluruh nusantara adalah modal bersama yang dikelola oleh pemerintah daerah masing-masing" },
      { id: "C", text: "ancaman terhadap satu pulau atau satu daerah pada hakikatnya merupakan ancaman terhadap seluruh bangsa dan negara Indonesia" },
      { id: "D", text: "seluruh warga negara wajib meninggalkan pekerjaan sipilnya untuk mengikuti dinas militer aktif sepanjang masa damai" },
      { id: "E", text: "pemerintah pusat hanya bertanggung jawab mengamankan wilayah ibu kota negara, sedangkan wilayah terluar diserahkan kepada persekutuan militer asing" }
    ],
    kunci: "C",
    pembahasan: `<strong>Wawasan Nusantara sebagai Satu Kesatuan Hankam:</strong><br>
Salah satu doktrin esensial kesatuan pertahanan keamanan Wawasan Nusantara menyatakan:<br>
<em>"Bahwa ancaman terhadap satu pulau atau satu daerah pada hakikatnya merupakan ancaman terhadap seluruh bangsa dan negara."</em><br>
Prinsip ini menegaskan soliditas pembelaan negara, di mana seluruh komponen bangsa terpanggil untuk membela kedaulatan wilayah NKRI dari Sabang sampai Merauke tanpa membedakan pulau asal.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 21,
    kode: "25PKN-PRED2-021",
    elemen: "Negara Kesatuan Republik Indonesia",
    subelemen: "Ketahanan Nasional & Konsepsi Asta Gatra",
    kompetensi: "Menganalisis struktur Asta Gatra (Trigatra dan Pancagatra) dalam Ketahanan Nasional.",
    indikator: "Mengklasifikasikan komponen alamiah Trigatra dan komponen sosial Pancagatra.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam doktrin Ketahanan Nasional Indonesia, kondisi dinamis bangsa ditopang oleh <strong>Asta Gatra</strong> yang merupakan gabungan dari <strong>Trigatra</strong> (aspek alamiah/statis) dan <strong>Pancagatra</strong> (aspek sosial/dinamis).
</p>
<p class="font-semibold text-slate-900 mb-2">
Kelompok aspek yang secara tepat tergolong ke dalam <strong>Trigatra</strong> adalah....
</p>`,
    options: [
      { id: "A", text: "Ideologi, Politik, dan Ekonomi" },
      { id: "B", text: "Posisi dan Lokasi Geografis, Keadaan dan Kekayaan Alam, serta Keadaan dan Kemampuan Penduduk" },
      { id: "C", text: "Sosial Budaya, Pertahanan Keamanan, dan Kependudukan" },
      { id: "D", text: "Batas Wilayah Laut, Anggaran Pertahanan, dan Struktur Pemerintahan" },
      { id: "E", text: "Sumber Daya Mineral, Sistem Hukum, dan Hubungan Diplomatik Luar Negeri" }
    ],
    kunci: "B",
    pembahasan: `<strong>Struktur Asta Gatra Ketahanan Nasional:</strong><br>
1. <strong>Trigatra (3 Aspek Alamiah/Statis):</strong><br>
   - Gatra Letak dan Posisi Geografis Negara.<br>
   - Gatra Keadaan dan Kekayaan Alam.<br>
   - Gatra Keadaan dan Kemampuan Penduduk (Demografi).<br>
2. <strong>Pancagatra (5 Aspek Sosial/Dinamis):</strong><br>
   - Ideologi, Politik, Ekonomi, Sosial Budaya, serta Pertahanan dan Keamanan (IPOLEKSOSBUDHANKAM).<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 22,
    kode: "25PKN-PRED2-022",
    elemen: "Negara Kesatuan Republik Indonesia",
    subelemen: "Ancaman Hibrida & Pertahanan Siber",
    kompetensi: "Mengevaluasi bentuk-bentuk ancaman terhadap integrasi nasional di era perang modern.",
    indikator: "Menilai kebenaran pernyataan terkait ancaman militer, non-militer, dan perang siber.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perkembangan lingkungan strategis abad ke-21 melahirkan ancaman hibrida (<em>hybrid threats</em>) yang memadukan instrumen militer, disinformasi, spionase, dan peretasan infrastruktur siber kritis. Tentukan kebenaran dari pernyataan-pernyataan berikut:
</p>`,
    items: [
      {
        pernyataan: "Serangan siber berskala masif yang meretas Pusat Data Nasional (PDN) dan melumpuhkan layanan imigrasi serta perbankan tergolong sebagai ancaman non-militer berdimensi teknologi dan ekonomi yang membahayakan kedaulatan negara.",
        kunci: "Benar",
        penjelasan: "Serangan siber melumpuhkan infrastruktur informasi vital tanpa kontak fisik senjata konvensional."
      },
      {
        pernyataan: "Dalam menghadapi ancaman non-militer seperti perang siber dan penyebaran ideologi radikal, Tentara Nasional Indonesia (TNI) bertindak sebagai satu-satunya unsur utama tunggal tanpa melibatkan kementerian sipil atau masyarakat.",
        kunci: "Salah",
        penjelasan: "Untuk ancaman non-militer, lembaga pemerintah di luar bidang pertahanan menjadi unsur utama, didukung oleh unsur-unsur lain dari kekuatan bangsa (Pasal 7 ayat 3 UU No. 3/2002)."
      },
      {
        pernyataan: "Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) menempatkan TNI dan Polri sebagai kekuatan utama, serta rakyat terlatih sebagai kekuatan pendukung.",
        kunci: "Benar",
        penjelasan: "Sesuai bunyi Pasal 30 ayat (2) UUD NRI Tahun 1945."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Analisis Ancaman Hibrida dan Sishankamrata:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Peretasan siber infrastruktur kritis tergolong ancaman non-militer/hibrida yang mampu mendestabilisasi keamanan nasional.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Berdasarkan UU No. 3 Tahun 2002 tentang Pertahanan Negara, ancaman non-militer menempatkan kementerian/lembaga sipil terkait (misalnya BSSN, Kominfo, Kemenkeu) sebagai garda terdepan (*unsur utama*).<br>
3. <strong>Pernyataan 3 (Benar):</strong> Pasal 30 ayat (2) UUD 1945 mengatur Sishankamrata dengan TNI (pertahanan) dan Polri (keamanan/ketertiban) sebagai kekuatan utama, serta rakyat sebagai kekuatan pendukung.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`
  },
  {
    id: 23,
    kode: "25PKN-PRED2-023",
    elemen: "Negara Kesatuan Republik Indonesia",
    subelemen: "Otonomi Daerah & Asas Pemerintahan (UU 23/2014)",
    kompetensi: "Menganalisis pembagian urusan pemerintahan antara Pemerintah Pusat dan Daerah.",
    indikator: "Memilih urusan pemerintahan absolut yang mutlak menjadi kewenangan Pemerintah Pusat.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah membagi urusan pemerintahan menjadi urusan pemerintahan absolut, urusan pemerintahan konkuren, dan urusan pemerintahan umum.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah bidang urusan di bawah ini yang sepenuhnya menjadi <strong>urusan pemerintahan absolut</strong> (tidak diserahkan kepada daerah otonom)? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", text: "Politik Luar Negeri" },
      { id: "B", text: "Pertahanan dan Keamanan" },
      { id: "C", text: "Pengelolaan Sampah dan Kebersihan Kota" },
      { id: "D", text: "Yustisi (Peradilan) dan Moneter/Fiskal Nasional" },
      { id: "E", text: "Agama" }
    ],
    kunci: ["A", "B", "D", "E"],
    pembahasan: `<strong>6 Urusan Pemerintahan Absolut (Pasal 9 & 10 UU No. 23/2014):</strong><br>
Urusan absolut adalah kewenangan yang sepenuhnya menjadi hak prerogatif Pemerintah Pusat:<br>
1. <strong>Politik Luar Negeri</strong> (Opsi A)<br>
2. <strong>Pertahanan</strong> (Opsi B)<br>
3. <strong>Keamanan</strong> (Opsi B)<br>
4. <strong>Yustisi/Peradilan</strong> (Opsi D)<br>
5. <strong>Moneter dan Fiskal Nasional</strong> (Opsi D)<br>
6. <strong>Agama</strong> (Opsi E)<br><br>
Pengelolaan sampah dan kebersihan lingkungan (Opsi C) adalah <em>urusan pemerintahan konkuren wajib non-pelayanan dasar</em> yang diserahkan kepada Pemda Kabupaten/Kota.<br><br>
<strong>Kunci Jawaban: A, B, D, dan E</strong>`
  },
  {
    id: 24,
    kode: "25PKN-PRED2-024",
    elemen: "Negara Kesatuan Republik Indonesia",
    subelemen: "Hakikat & Spektrum Bela Negara",
    kompetensi: "Menganalisis spektrum partisipasi warga negara dalam upaya pembelaan negara.",
    indikator: "Menentukan wujud bela negara non-fisik bagi generasi pelajar di era kemerdekaan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pasal 27 ayat (3) UUD NRI Tahun 1945 mengamanatkan bahwa <em>"Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara."</em> Di era pasca-kemerdekaan dan masa damai, spektrum pembelaan negara tidak terbatas pada pengangkatan senjata di medan perang.
</p>
<p class="font-semibold text-slate-900 mb-2">
Wujud bela negara non-fisik yang paling relevan dilakukan oleh seorang murid SMA berprestasi adalah....
</p>`,
    options: [
      { id: "A", text: "membeli seragam loreng militer dan melakukan razia ketertiban lalu lintas di jalan raya" },
      { id: "B", text: "tekun belajar, meneliti, dan meraih medali olimpiade sains internasional untuk mengharumkan kehormatan bangsa di mata dunia" },
      { id: "C", text: "mengikuti unjuk rasa anarkis menolak kebijakan kepala sekolah" },
      { id: "D", text: "melakukan peretasan (hacking) terhadap situs kementerian negara asing tanpa izin resmi" },
      { id: "E", text: "meninggalkan sekolah formal untuk mendaftar sebagai relawan tentara bayaran di zona konflik internasional" }
    ],
    kunci: "B",
    pembahasan: `<strong>Spektrum Bela Negara Non-Fisik:</strong><br>
Menurut UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, keikutsertaan warga negara dalam bela negara diselenggarakan melalui:<br>
1. Pendidikan kewarganegaraan.<br>
2. Pelatihan dasar kemiliteran secara wajib.<br>
3. Pengabdian sebagai prajurit TNI.<br>
4. <strong>Pengabdian sesuai dengan keahlian dan profesi.</strong><br>
Bagi pelajar, belajar tekun, berkarya di bidang IPTEK, dan mengharumkan nama bangsa di kancah sains internasional adalah manifestasi luhur bela negara.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 25,
    kode: "25PKN-PRED2-025",
    elemen: "Negara Kesatuan Republik Indonesia",
    subelemen: "Politik Luar Negeri Bebas Aktif & Geopolitik Natuna",
    kompetensi: "Menganalisis konsistensi prinsip politik luar negeri bebas aktif dalam menjaga kedaulatan maritim.",
    indikator: "Menjelaskan sikap diplomasi Indonesia terhadap klaim sepihak di Laut Natuna Utara.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kawasan perairan Laut Natuna Utara berada di dalam Zona Ekonomi Eksklusif (ZEE) Indonesia yang sah berdasarkan Konvensi Hukum Laut PBB (<em>UNCLOS 1982</em>). Namun, kapal-kapal nelayan asing yang dikawal kapal penjaga pantai asing kerap menerobos masuk dan mengklaim hak penangkapan ikan tradisional berdasar garis batas sepihak (<em>ten-dash line</em>).
</p>
<p class="font-semibold text-slate-900 mb-2">
Sikap diplomasi dan ketahanan maritim Indonesia yang paling konsisten dengan prinsip <strong>politik luar negeri bebas aktif</strong> dan kedaulatan hukum internasional adalah....
</p>`,
    options: [
      { id: "A", text: "menyerahkan sebagian wilayah perairan Natuna kepada negara asing demi menjaga stabilitas investasi ekonomi" },
      { id: "B", text: "bergabung secara resmi menjadi anggota pakta pertahanan militer NATO untuk mendapatkan perlindungan armada tempur barat" },
      { id: "C", text: "menolak tegas klaim sepihak yang tidak memiliki dasar hukum di UNCLOS 1982 sambil memperkuat patroli maritim terpadu TNI AL-Bakamla dan memberdayakan nelayan lokal" },
      { id: "D", text: "menyatakan perang terbuka dan memutuskan seluruh hubungan diplomatik serta perdagangan internasional dengan semua negara tetangga" },
      { id: "E", text: "bersikap pasif dan membiarkan kapal asing mengambil sumber daya ikan karena Indonesia kekurangan armada kapal penangkap ikan" }
    ],
    kunci: "C",
    pembahasan: `<strong>Prinsip Bebas Aktif & Kedaulatan Wilayah Maritim:</strong><br>
- <strong>Bebas:</strong> Indonesia tidak memihak blok kekuatan militer mana pun (menolak pakta pertahanan militer asing).<br>
- <strong>Aktif:</strong> Aktif menjaga perdamaian dunia berlandaskan hukum internasional (UNCLOS 1982).<br>
Dalam sengketa Laut Natuna Utara, Indonesia konsisten menolak garis klaim sepihak yang melanggar UNCLOS 1982 melalui nota protes diplomatik resmi, seraya memperkuat postur patroli kedaulatan laut (*effective presence*) oleh Bakamla dan TNI AL serta mendayagunakan nelayan nasional.<br><br>
<strong>Kunci Jawaban: C</strong>`
  }
];

// Validasi 0 Tanda Dolar
const fullJson = JSON.stringify(soalList);
if (fullJson.includes('$')) {
  console.error("FATAL: Masih ada tanda dolar ($) di soal!");
  process.exit(1);
}

// Generate Javascript File
const fileContent = `// tka/data/mapel-ppkn-paket2.js
// Bank Soal & Pembahasan Prediksi Resmi TKA PPKn SMA 2025/2026 (Paket 2: 25 Butir Soal Standar TKA BPPP)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA PPKn SMA 2025/2026 dengan formula HTML bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaPpknPaket2Data = ${JSON.stringify(soalList, null, 2)};

// Inisialisasi package global
if (typeof window !== 'undefined') {
  window.tkaPpknPackages = window.tkaPpknPackages || {};
  window.tkaPpknPackages['paket2'] = {
    title: "Paket 2: Prediksi Resmi TKA PPKn SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    data: tkaPpknPaket2Data
  };
}
`;

const targetPath = path.join(__dirname, '../tka/data/mapel-ppkn-paket2.js');
fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log("✅ Dataset PPKn Paket 2 100% BEBAS dari tanda dolar ($)!");
console.log(`🎉 ${targetPath} berhasil dibuat! (${soalList.length} soal)`);
