// scripts/build_geografi_paket2.js
const fs = require('fs');
const path = require('path');

const geografiPaket2Data = [
  // 1. Konsep Geografi (PG)
  {
    id: 1,
    elemen: "Konsep Dasar Geografi",
    subelemen: "10 Konsep Esensial Geografi",
    indikator: "Mengidentifikasi konsep keterjangkauan dan morfologi pada fenomena distribusi penduduk dan fasilitas wilayah.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kondisi Pulau Jawa dengan kepadatan penduduk yang sangat tinggi menyebabkan lahan pertanian menjadi semakin sempit dan terfragmentasi. Sebaliknya, Pulau Kalimantan masih memiliki hamparan lahan yang sangat luas dengan kepadatan penduduk yang relatif rendah. Untuk menyeimbangkan persebaran sumber daya manusia dan mengoptimalkan potensi agraris, pemerintah menyelenggarakan program perpindahan penduduk antarpulau melalui transmigrasi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Konsep esensial geografi yang paling tepat untuk mengkaji fenomena perpindahan dan persebaran penduduk antarwilayah tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Konsep pola keruangan" },
      { id: "B", text: "Konsep lokasi dan keterjangkauan" },
      { id: "C", text: "Konsep aglomerasi industri" },
      { id: "D", text: "Konsep morfologi permukaan bumi" },
      { id: "E", text: "Konsep diferensiasi area" }
    ],
    kunci: "B",
    pembahasan: `<strong>Analisis Konsep Esensial Geografi:</strong><br>
Fenomena perpindahan penduduk dari Pulau Jawa ke Kalimantan berkaitan erat dengan:<br>
1. <strong>Konsep Lokasi:</strong> Menunjukkan posisi relatif daerah asal (Pulau Jawa) dan daerah tujuan (Pulau Kalimantan) yang memiliki karakteristik demografi serta ketersediaan lahan berbeda.<br>
2. <strong>Konsep Keterjangkauan (Accessibility):</strong> Berkaitan dengan sarana transportasi laut dan udara yang menghubungkan kedua pulau dalam mobilitas transmigrasi.<br><br>
<strong>Kunci Jawaban: B (Konsep lokasi dan keterjangkauan)</strong>`,
    kode: "25GEO-PRED2-001"
  },

  // 2. Pendekatan Geografi (PG)
  {
    id: 2,
    elemen: "Pendekatan Geografi",
    subelemen: "Pendekatan Lingkungan (Ekologi)",
    indikator: "Menganalisis bencana banjir perkotaan menggunakan pendekatan kelingkungan (ekologi).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Bencana banjir luapan sungai yang melanda kawasan hilir perkotaan di Bandung dan Jabodetabek terjadi berulang setiap musim penghujan. Investigasi tata ruang menunjukkan bahwa kawasan hulu di wilayah perbukitan telah mengalami alih fungsi lahan masif dari kawasan hutan lindung dan perkebunan teh menjadi kawasan permukiman padat serta vila peristirahatan, sehingga menurunkan daya infiltrasi tanah secara drastis.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pendekatan geografi yang paling tepat untuk menganalisis hubungan timbal balik antara aktivitas manusia dan kerusakan daya dukung lingkungan tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Pendekatan keruangan (spatial approach)" },
      { id: "B", text: "Pendekatan kronologis (temporal approach)" },
      { id: "C", text: "Pendekatan morfometrik lereng" },
      { id: "D", text: "Pendekatan geologi struktur" },
      { id: "E", text: "Pendekatan kelingkungan (ekologi)" }
    ],
    kunci: "E",
    pembahasan: `<strong>Analisis Pendekatan Geografi:</strong><br>
Dalam geografi terdapat 3 pendekatan utama:<br>
1. <strong>Pendekatan Keruangan (Spasial):</strong> Mengkaji persebaran spasial suatu fenomena di permukaan bumi.<br>
2. <strong>Pendekatan Kelingkungan (Ekologi):</strong> Mengkaji interelasi timbal balik antara organisme hidup (terutama perilaku manusia) dengan lingkungan fisiknya (abiotik). Pada soal, banjir hilir disebabkan oleh perilaku manusia yang merusak hutan di hulu.<br>
3. <strong>Pendekatan Kompleks Wilayah:</strong> Kombinasi keruangan dan ekologi yang melibatkan kerja sama antarwilayah.<br><br>
<strong>Kunci Jawaban: E (Pendekatan kelingkungan/ekologi)</strong>`,
    kode: "25GEO-PRED2-002"
  },

  // 3. Prinsip Geografi (PG)
  {
    id: 3,
    elemen: "Prinsip Geografi",
    subelemen: "Prinsip Interelasi",
    indikator: "Mengidentifikasi prinsip interelasi pada keterkaitan fenomena cuaca ekstrem angin puting beliung.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Fenomena bencana meteorologis angin puting beliung yang menerjang wilayah permukiman dataran rendah di Indonesia memiliki keterkaitan langsung dengan adanya perbedaan tekanan udara dan gradien suhu yang sangat kontras di lapisan troposfer akibat pertumbuhan awan konvektif kumulonimbus (Cb).
</p>
<p class="font-semibold text-slate-900 mb-2">
Prinsip geografi yang digunakan untuk menjelaskan adanya hubungan sebab-akibat antargejala geosfer tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Prinsip interelasi" },
      { id: "B", text: "Prinsip deskripsi" },
      { id: "C", text: "Prinsip persebaran (distribusi)" },
      { id: "D", text: "Prinsip korologi" },
      { id: "E", text: "Prinsip kronologi" }
    ],
    kunci: "A",
    pembahasan: `<strong>Prinsip-Prinsip Geografi:</strong><br>
&bull; <strong>Prinsip Persebaran:</strong> Gejala geosfer tersebar tidak merata di muka bumi.<br>
&bull; <strong>Prinsip Interelasi:</strong> Hubungan saling keterkaitan dan sebab-akibat antara satu fenomena geosfer dengan fenomena lainnya (contoh: perbedaan suhu dan tekanan ekstrem memicu terjadinya angin puting beliung).<br>
&bull; <strong>Prinsip Deskripsi:</strong> Penjelasan mendalam melalui grafik, peta, dan tabel.<br>
&bull; <strong>Prinsip Korologi:</strong> Penggabungan ketiga prinsip secara komprehensif.<br><br>
<strong>Kunci Jawaban: A (Prinsip interelasi)</strong>`,
    kode: "25GEO-PRED2-003"
  },

  // 4. Teori Pembentukan Tata Surya & Bumi (MCMA)
  {
    id: 4,
    elemen: "Dinamika Planet Bumi",
    subelemen: "Teori Pembentukan Tata Surya",
    indikator: "Menganalisis asumsi dan perbedaan Teori Kabut (Nebula) dan Teori Pasang Surut Gas.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Para astronom dan geolog merumuskan berbagai hipotesis mengenai asal-usul terbentuknya tata surya dan planet bumi. Dua hipotesis yang sangat dikenal adalah <strong>Teori Kabut (Nebula)</strong> oleh Immanuel Kant dan Simon de Laplace, serta <strong>Teori Pasang Surut Gas</strong> oleh James Jeans dan Harold Jeffreys.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pernyataan yang <strong>benar</strong> mengenai konsep kedua teori pembentukan tata surya tersebut adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Menurut Teori Nebula, tata surya bermula dari gumpalan kabut gas dan debu raksasa yang berputar cepat hingga bagian tepinya terlepas membentuk cincin dan memadat menjadi planet-planet." },
      { id: "B", text: "Menurut Teori Pasang Surut, tata surya terbentuk karena sebuah bintang besar melintas sangat dekat dengan matahari purba, menimbulkan gaya gravitasi yang menarik lidah gelombang gas panas dari matahari." },
      { id: "C", text: "Teori Pasang Surut menyatakan bahwa planet-planet terbentuk akibat ledakan bintang kembar yang hancur berkeping-keping." },
      { id: "D", text: "Lidah gas panas yang terlepas akibat pasang surut gravitasi bintang yang melintas tersebut kemudian mendingin dan terfragmentasi membentuk gumpalan planet-planet." },
      { id: "E", text: "Teori Nebula membuktikan bahwa matahari dan seluruh planet berasal dari dua bintang kembar yang saling mengorbit." }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Analisis Teori Pembentukan Tata Surya:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Teori Nebula (Kant-Laplace) menyatakan tata surya berasal dari kabut gas bersuhu tinggi yang berputar. Karena pendinginan dan percepatan rotasi, cincin gas terlepas dan terkondensasi menjadi planet.<br>
&bull; <strong>Pernyataan B &amp; D (Benar):</strong> Teori Pasang Surut (Jeans-Jeffreys) menyatakan adanya gaya tarik gravitasi dari bintang masif lain yang melintas di dekat matahari purba, menarik tonjolan gelombang pasang gas berbentuk cerutu yang kemudian mendingin menjadi planet-planet.<br>
&bull; <strong>Pernyataan C &amp; E (Salah):</strong> Ledakan bintang kembar adalah substansi dari Teori Bintang Kembar (Fred Hoyle).<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`,
    kode: "25GEO-PRED2-004"
  },

  // 5. Lapisan Atmosfer (PG + Diagram SVG Lapisan Atmosfer)
  {
    id: 5,
    elemen: "Dinamika Atmosfer",
    subelemen: "Struktur Vertikal Lapisan Atmosfer",
    indikator: "Menentukan fungsi lapisan stratosfer dan termosfer berdasarkan visualisasi profil ketinggian atmosfer.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Atmosfer bumi tersusun atas beberapa lapisan konsentris vertikal dengan karakteristik temperatur dan fungsi proteksi yang spesifik bagi kelangsungan hidup di bumi.
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Profil Struktur Lapisan Vertikal Atmosfer Bumi:</div>
  <svg viewBox="0 0 520 220" class="w-full max-w-lg mx-auto bg-slate-900 border border-slate-700 rounded-lg shadow-sm">
    <!-- Eksosfer -->
    <rect x="20" y="15" width="480" height="32" fill="#0f172a" stroke="#334155" />
    <text x="35" y="36" font-size="11" font-weight="bold" fill="#94a3b8">Eksosfer (&gt; 500 km)</text>
    <text x="250" y="36" font-size="10" fill="#64748b">Batas ruang angkasa, satelit orbit geostasioner</text>

    <!-- Termosfer / Ionosfer -->
    <rect x="20" y="50" width="480" height="36" fill="#1e1b4b" stroke="#4338ca" />
    <text x="35" y="73" font-size="11" font-weight="bold" fill="#a5b4fc">Termosfer / Ionosfer (85 - 500 km)</text>
    <text x="275" y="73" font-size="10" fill="#c7d2fe">Pemantulan gelombang radio &amp; aurora</text>

    <!-- Mesosfer -->
    <rect x="20" y="89" width="480" height="36" fill="#1e293b" stroke="#475569" />
    <text x="35" y="112" font-size="11" font-weight="bold" fill="#cbd5e1">Mesosfer (50 - 85 km)</text>
    <text x="250" y="112" font-size="10" fill="#94a3b8">Suhu s.d. -100&deg;C, membakar habis meteorit</text>

    <!-- Stratosfer (Tanda X) -->
    <rect x="20" y="128" width="480" height="42" fill="#0369a1" stroke="#38bdf8" stroke-width="2" />
    <text x="35" y="153" font-size="12" font-weight="extrabold" fill="#ffffff">LAPISAN [ X ] (12 - 50 km)</text>
    <text x="270" y="153" font-size="11" font-weight="bold" fill="#bae6fd">&larr; Konsentrasi Lapisan Gas Ozon (O3)</text>

    <!-- Troposfer -->
    <rect x="20" y="173" width="480" height="36" fill="#0284c7" stroke="#38bdf8" />
    <text x="35" y="196" font-size="11" font-weight="bold" fill="#f0f9ff">Troposfer (0 - 12 km)</text>
    <text x="225" y="196" font-size="10" fill="#e0f2fe">Dinamika cuaca: awan, hujan, petir, angin</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan diagram profil tersebut, lapisan bertanda <strong>[ X ]</strong> adalah lapisan... dan memiliki fungsi vital bagi biosfer bumi untuk...
</p>`,
    options: [
      { id: "A", text: "Troposfer; tempat berlangsungnya proses kondensasi awan dan sirkulasi hidrologi" },
      { id: "B", text: "Mesosfer; membakar habis benda-benda angkasa dan meteorit yang jatuh ke bumi" },
      { id: "C", text: "Stratosfer; menyerap dan menyaring radiasi sinar ultraviolet (UV) matahari yang berbahaya melalui lapisan ozon" },
      { id: "D", text: "Termosfer; memantulkan gelombang radio gelombang pendek untuk komunikasi nirkabel jarak jauh" },
      { id: "E", text: "Ionosfer; tempat terjadinya ionisasi gas yang menghasilkan pancaran cahaya aurora kutub" }
    ],
    kunci: "C",
    pembahasan: `<strong>Analisis Karakteristik Lapisan Stratosfer:</strong><br>
Lapisan yang berada pada ketinggian 12 hingga 50 km di atas troposfer adalah <strong>Stratosfer</strong>.<br>
Ciri dan fungsi vital stratosfer:<br>
1. Mengandung konsentrasi gas <strong>Ozon (O<sub>3</sub>)</strong> pada lapisan ozonosfer (ketinggian sekitar 20-35 km).<br>
2. Berfungsi menyerap radiasi radiasi sinar ultraviolet-B (UV-B) berenergi tinggi dari matahari sebelum mencapai permukaan bumi, sehingga melindungi makhluk hidup dari mutasi sel genetik dan kanker kulit.<br>
3. Bebas dari fenomena cuaca konvektif sehingga menjadi jalur ideal bagi penerbangan pesawat jet komersial.<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25GEO-PRED2-005"
  },

  // 6. Vulkanisme & Tipe Letusan (PG)
  {
    id: 6,
    elemen: "Dinamika Litosfer",
    subelemen: "Vulkanisme & Tipe Gunung Api",
    indikator: "Mengidentifikasi karakteristik erupsi campuran pada gunung api tipe strato.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan beberapa karakteristik letusan gunung api berikut:
</p>
<ol class="list-decimal list-inside space-y-1.5 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li>Tekanan gas bersifat sedang hingga sangat tinggi.</li>
  <li>Dapur magma memiliki kedalaman bervariasi dari dangkal hingga dalam.</li>
  <li>Erupsi berlangsung berseling-seling antara letusan eksplosif (menghasilkan piroklastik/eflata) dan lelehan efusif (aliran lava cair).</li>
  <li>Membentuk badan gunung api berlapis-lapis menyerupai kerucut raksasa.</li>
</ol>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik erupsi tersebut menghasilkan bentuk tubuh gunung api bertipe...
</p>`,
    options: [
      { id: "A", text: "Gunung api perisai (tameng) seperti Gunung Mauna Loa" },
      { id: "B", text: "Gunung api maar (corong kawah) akibat satu kali letusan eksplosif dahsyat" },
      { id: "C", text: "Gunung api strato (berlapis) seperti sebagian besar gunung api di Indonesia" },
      { id: "D", text: "Gunung api kaldera runtuhan bawah laut" },
      { id: "E", text: "Gunung api rekahan linier (fissure eruption)" }
    ],
    kunci: "C",
    pembahasan: `<strong>Bentuk dan Tipe Gunung Api:</strong><br>
&bull; <strong>Gunung Api Strato (Kerucut Berlapis):</strong> Terbentuk dari erupsi campuran yang berselang-seling antara lelehan lava kental (efusif) dan lontaran material padat/piroklastik (eksplosif). Akibatnya, material endapan membentuk lapisan-lapisan yang membangun lereng kerucut curam. Sebagian besar gunung api di busur vulkanik Indonesia (seperti Merapi, Semeru, Sinabung) adalah tipe strato.<br>
&bull; <strong>Gunung Api Maar:</strong> Terbentuk dari satu kali letusan gas eksplosif dahsyat yang menyisakan kawah cekung terisi air danau.<br>
&bull; <strong>Gunung Api Perisai:</strong> Terbentuk dari lelehan lava basaltik sangat encer bertekanan gas rendah yang mengalir luas dengan lereng sangat landai.<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25GEO-PRED2-006"
  },

  // 7. Siklus Batuan & Klasifikasi (Benar/Salah + Tabel)
  {
    id: 7,
    elemen: "Dinamika Litosfer",
    subelemen: "Siklus Batuan & Nilai Ekonomis",
    indikator: "Mengevaluasi proses pembentukan dan jenis batuan beku, sedimen, dan metamorf.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kerak bumi tersusun atas tiga kelompok utama batuan yang terus mengalami siklus perubahan akibat proses endogenik dan eksogenik:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-amber-600 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-amber-700">Kelompok Batuan</th>
        <th class="p-2.5 border border-amber-700">Contoh Batuan</th>
        <th class="p-2.5 border border-amber-700">Faktor Pembentuk Utama</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 font-bold border border-slate-200">Batuan Beku Dalam (Plutonik)</td>
        <td class="p-2 border border-slate-200">Granit, Diorit, Gabro</td>
        <td class="p-2 border border-slate-200">Pendinginan magma lambat di kedalaman bumi</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 font-bold border border-slate-200">Batuan Sedimen Organik</td>
        <td class="p-2 border border-slate-200">Batu Bara, Batu Gamping Terumbu</td>
        <td class="p-2 border border-slate-200">Akumulasi sisa-sisa jasad renik dan vegetasi purba</td>
      </tr>
      <tr>
        <td class="p-2 font-bold border border-slate-200">Batuan Metamorf (Malihan)</td>
        <td class="p-2 border border-slate-200">Marmer (Pualam), Sabak, Kuarsit</td>
        <td class="p-2 border border-slate-200">Pengaruh suhu tinggi dan tekanan besar (p metamorphosis)</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan berikut berdasarkan karakteristik siklus batuan:
</p>`,
    items: [
      {
        pernyataan: "Batuan granit memiliki tekstur kristal kasar berbutir sempurna (fanerik) karena proses kristalisasi magma berlangsung lambat di kedalaman litosfer.",
        kunci: "Benar",
        penjelasan: "Magma yang membeku jauh di bawah permukaan bumi mengalami pendinginan perlahan sehingga atom-atomnya sempat membentuk kristal mineral berukuran besar (faneritik)."
      },
      {
        pernyataan: "Batu marmer terbentuk dari batuan sedimen batu gamping (limestone) yang mengalami metamorfosis kontak akibat paparan suhu magma yang sangat tinggi.",
        kunci: "Benar",
        penjelasan: "Batu marmer atau pualam adalah batuan metamorf kontak/termal yang berasal dari rekristalisasi kalsit pada batu gamping akibat pengaruh suhu tinggi."
      },
      {
        pernyataan: "Batu obsidian dan batu apung adalah contoh batuan sedimen klastik hasil pengendapan mekanik di dasar danau.",
        kunci: "Salah",
        penjelasan: "Obsidian dan batu apung adalah batuan beku luar (efusif/vulkanik) yang terbentuk dari pendinginan cepat lava di permukaan bumi, bukan batuan sedimen."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Evaluasi Pernyataan Siklus Batuan:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Granit adalah batuan beku plutonik bertekstur kristalin holokristalin karena pendinginan magma lambat.<br>
2. <strong>Pernyataan 2 (Benar):</strong> Marmer/pualam berasal dari batu kapur/gamping (sedimen karbonat) yang terpengaruh intrusi suhu panas magma tinggi (metamorfosis termal/kontak).<br>
3. <strong>Pernyataan 3 (Salah):</strong> Batu obsidian (kaca vulkanik) dan batu apung (pumice) adalah batuan beku luar/lelehan gas vulkanik, bukan batuan sedimen klastik.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`,
    kode: "25GEO-PRED2-007"
  },

  // 8. Seisme & Mitigasi Tsunami (PG)
  {
    id: 8,
    elemen: "Mitigasi Bencana Alam",
    subelemen: "Gempa Bumi & Tsunami",
    indikator: "Menentukan tindakan mitigasi evakuasi mandiri bencana tsunami di kawasan pesisir pantai.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Masyarakat yang bermukim di pesisir pantai barat Sumatra merasakan guncangan gempa tektonik dangkal yang sangat kuat selama lebih dari 30 detik hingga sulit berdiri tegak. Sesaat setelah guncangan mereda, terlihat air laut di sepanjang garis pantai surut secara mendadak hingga ratusan meter dan tercium aroma khas dasar laut yang menyengat.
</p>
<p class="font-semibold text-slate-900 mb-2">
Langkah mitigasi bencana yang paling tepat dan harus segera dilakukan oleh warga setempat tanpa menunggu sirine resmi peringatan dini adalah...
</p>`,
    options: [
      { id: "A", text: "Bergegas menuju garis pantai untuk mengumpulkan ikan-ikan yang terdampar di dasar laut yang mengering" },
      { id: "B", text: "Segera berlari menjauhi pantai menuju tempat yang lebih tinggi (perbukitan atau bangunan kokoh bertingkat) melalui jalur evakuasi bencana" },
      { id: "C", text: "Menaiki perahu nelayan dan berlayar mendekati muara sungai untuk mengamankan kapal" },
      { id: "D", text: "Masuk kembali ke dalam rumah dan mengunci semua pintu serta jendela rapat-rapat" },
      { id: "E", text: "Menunggu pengumuman konfirmasi melalui pengeras suara balai desa sebelum mengambil tindakan evakuasi" },
    ],
    kunci: "B",
    pembahasan: `<strong>Mitigasi Bencana Gempa Bumi &amp; Tsunami:</strong><br>
Air laut yang mendadak surut drastis setelah gempa tektonik kuat di zona subduksi lempeng laut merupakan tanda alam mutlak (natural warning sign) terjadinya perambatan gelombang tsunami menuju daratan.<br>
Tindakan penyelamatan diri mandiri tercepat adalah menerapkan prinsip <strong>20-20-20</strong> (jika gempa berlangsung 20 detik, ada waktu sekitar 20 menit sebelum gelombang tiba, lari ke tempat dengan elevasi minimal 20 meter di atas permukaan laut). Menuju perbukitan atau tempat evakuasi sementara (TES) adalah tindakan penyelamatan yang wajib diambil.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25GEO-PRED2-008"
  },

  // 9. Siklus Hidrologi (PG + Diagram SVG Siklus Air)
  {
    id: 9,
    elemen: "Dinamika Hidrosfer",
    subelemen: "Siklus Hidrologi & Aliran Permukaan",
    indikator: "Menganalisis dampak berkurangnya tutupan vegetasi hutan terhadap tahapan infiltrasi dan run-off dalam siklus air.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Siklus hidrologi menggerakkan perpindahan massa air bumi secara dinamis antara atmosfer, biosfer, dan litosfer melalui serangkaian tahapan fisik.
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Diagram Siklus Hidrologi &amp; Neraca Air:</div>
  <svg viewBox="0 0 520 200" class="w-full max-w-lg mx-auto bg-sky-50 border border-sky-200 rounded-lg shadow-sm">
    <!-- Awan -->
    <ellipse cx="280" cy="40" rx="60" ry="22" fill="#e2e8f0" stroke="#94a3b8" />
    <ellipse cx="320" cy="35" rx="45" ry="20" fill="#cbd5e1" stroke="#94a3b8" />
    <text x="260" y="44" font-size="11" font-weight="bold" fill="#334155">Awan (Kondensasi)</text>

    <!-- Hujan (Presipitasi) -->
    <line x1="280" y1="65" x2="270" y2="105" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3" />
    <line x1="300" y1="65" x2="290" y2="105" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3" />
    <text x="310" y="90" font-size="10" font-weight="bold" fill="#0369a1">Presipitasi</text>

    <!-- Gunung / Hulu -->
    <polygon points="50,170 170,70 270,170" fill="#15803d" stroke="#166534" />
    <text x="130" y="115" font-size="11" font-weight="bold" fill="#f0fdf4">Hutan Hulu</text>

    <!-- Transpirasi & Evaporasi -->
    <path d="M 160 110 Q 170 70 240 50" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="2,2" />
    <text x="135" y="80" font-size="10" fill="#15803d">Transpirasi</text>

    <!-- Laut / Hilir -->
    <rect x="360" y="145" width="140" height="45" fill="#0284c7" />
    <text x="410" y="172" font-size="12" font-weight="bold" fill="#ffffff">Laut</text>
    <path d="M 430 145 Q 410 80 340 55" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="2,2" />
    <text x="405" y="100" font-size="10" fill="#0369a1">Evaporasi Laut</text>

    <!-- Infiltrasi & Run-off -->
    <path d="M 220 160 L 360 160" stroke="#0284c7" stroke-width="3" />
    <text x="240" y="152" font-size="10" font-weight="bold" fill="#0f172a">Aliran Permukaan (Run-off)</text>
    <path d="M 180 165 L 180 190 L 360 190" stroke="#b45309" stroke-width="2" stroke-dasharray="3,2" />
    <text x="235" y="185" font-size="10" fill="#b45309">Infiltrasi &amp; Air Tanah (Perkolasi)</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Jika vegetasi hutan di wilayah hulu ditebang secara liar dan tanahnya mengalami pemadatan (betonisasi), perubahan neraca hidrologi yang akan terjadi secara signifikan adalah...
</p>`,
    options: [
      { id: "A", text: "Tingkat infiltrasi air tanah melonjak tajam dan evapotranspirasi meningkat" },
      { id: "B", text: "Aliran permukaan (run-off) menurun drastis sehingga debit air sungai di hilir stabil sepanjang tahun" },
      { id: "C", text: "Infiltrasi air ke dalam tanah menurun drastis, sedangkan volume limpasan permukaan (run-off) melonjak tinggi sehingga memicu banjir dan erosi tanah" },
      { id: "D", text: "Kapasitas kondensasi awan bertambah dua kali lipat akibat tingginya partikel debu" },
      { id: "E", text: "Cadangan air tanah freatik bertambah banyak karena air hujan tidak terhalang oleh dedaunan pohon" }
    ],
    kunci: "C",
    pembahasan: `<strong>Pengaruh Tutupan Vegetasi terhadap Siklus Hidrologi:</strong><br>
Akar pohon dan lapisan humus di lantai hutan berfungsi sebagai penyerap air alami (sponge effect) yang memperbesar laju <strong>infiltrasi</strong> dan pengisian air tanah (perkolasi).<br>
Ketika hutan ditebang dan tanah terkompaksi:<br>
1. Air hujan tidak dapat meresap ke dalam tanah sehingga <strong>infiltrasi menurun drastis</strong>.<br>
2. Sebagian besar air hujan langsung mengalir di permukaan sebagai <strong>limpasan permukaan (surface run-off)</strong>.<br>
3. Hal ini mengakibatkan banjir bandang di musim hujan, erosi tanah lapisan atas, serta kekeringan air sumur di musim kemarau.<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25GEO-PRED2-009"
  },

  // 10. Pola Aliran Sungai (MCMA)
  {
    id: 10,
    elemen: "Dinamika Hidrosfer",
    subelemen: "Morfologi & Pola Aliran Sungai",
    indikator: "Mengidentifikasi karakteristik pola aliran sungai radial sentrifugal dan pola trellis.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pola aliran sungai (drainage pattern) pada suatu daerah aliran sungai (DAS) sangat dipengaruhi oleh struktur geologi, jenis batuan, kemiringan lereng, dan tingkat resistensi batuan terhadap erosi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pernyataan yang <strong>benar</strong> mengenai pola aliran sungai dan karakteristik morfologinya adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Pola aliran radial sentrifugal mengalir menyebar ke segala arah menuruni lereng dari satu puncak kerucut gunung api atau struktur kubah (dome)." },
      { id: "B", text: "Pola aliran dendritik menyerupai cabang-cabang ranting pohon dan umumnya berkembang pada batuan yang homogen dengan lapisan batuan sedimen mendatar." },
      { id: "C", text: "Pola aliran trellis memiliki anak-anak sungai yang sejajar dan bermuara tegak lurus pada sungai utama, umumnya dijumpai di daerah pegunungan lipatan (antiklin dan sinklin)." },
      { id: "D", text: "Pola aliran rektangular hanya dapat berkembang pada daerah cekungan danau endorheik tanpa muara laut." },
      { id: "E", text: "Pola aliran radial sentripetal adalah aliran yang menyebar keluar meninggalkan danau kawah." }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: `<strong>Karakteristik Pola Aliran Sungai:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Pola radial sentrifugal mengalir menyebar keluar meninggalkan puncak kubah/gunung berapi.<br>
&bull; <strong>Pernyataan B (Benar):</strong> Pola dendritik berbentuk seperti ranting pohon pada batuan berbutir homogen.<br>
&bull; <strong>Pernyataan C (Benar):</strong> Pola trellis terbentuk di kawasan struktur geologi lipatan, di mana anak sungai sejajar mengalir di lembah sinklinal.<br>
&bull; <strong>Pernyataan D &amp; E (Salah):</strong> Pola rektangular terbentuk pada daerah patahan/retakan bersudut siku-siku; radial sentripetal adalah aliran yang memusat menuju cekungan danau/depresi.<br><br>
<strong>Kunci Jawaban: A, B, dan C</strong>`,
    kode: "25GEO-PRED2-010"
  },

  // 11. Iklim & Pembagian Koppen / Angin Muson (PG)
  {
    id: 11,
    elemen: "Dinamika Atmosfer",
    subelemen: "Klasifikasi Iklim & Angin Muson",
    indikator: "Menjelaskan faktor geografis yang menyebabkan Nusa Tenggara Timur memiliki curah hujan relatif rendah.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Data klimatologi menunjukkan variasi curah hujan tahunan yang sangat kontras di Indonesia. Wilayah Sumatra Barat dan Kalimantan Barat memiliki curah hujan sangat tinggi (&gt; 3.000 mm/tahun) dengan tipe iklim hujan tropis (Af), sedangkan wilayah Nusa Tenggara Timur (NTT) memiliki curah hujan jauh lebih rendah (&lt; 1.000 mm/tahun) dan didominasi oleh bioma sabana/stepa beriklim Aw.
</p>
<p class="font-semibold text-slate-900 mb-2">
Faktor geografis utama yang menyebabkan rendahnya curah hujan dan vegetasi sabana di Nusa Tenggara Timur adalah...
</p>`,
    options: [
      { id: "A", text: "Wilayah NTT berada tepat di garis khatulistiwa sehingga mengalami pemanasan zenithal konstan sepanjang tahun" },
      { id: "B", text: "NTT sangat dipengaruhi oleh hembusan Angin Muson Timur/Tenggara dari daratan gurun luas Australia yang bersifat kering dan miskin uap air" },
      { id: "C", text: "Adanya rangkaian pegunungan vulkanik tinggi yang membentang dari utara ke selatan menghalangi semua pergerakan awan" },
      { id: "D", text: "Ketinggian tempat wilayah NTT berada di atas 3.500 mdpl sehingga uap air langsung membeku" },
      { id: "E", text: "Wilayah NTT tidak dilalui oleh arus laut hangat lintas Indonesia (Arlindo)" }
    ],
    kunci: "B",
    pembahasan: `<strong>Faktor Curah Hujan Nusa Tenggara Timur:</strong><br>
Wilayah kepulauan Nusa Tenggara terletak sangat dekat dengan benua Australia.<br>
Pada periode Mei hingga September, matahari berada di belahan bumi utara, memicu bertiupnya <strong>Angin Muson Timur/Tenggara</strong> dari benua Australia bertekanan tinggi menuju Asia.<br>
Karena sebagian besar daratan Australia adalah gurun pasir kering, massa udara yang bertiup melintasi perairan sempit Timor hanya membawa sedikit uap air. Akibatnya wilayah NTT mengalami musim kemarau panjang yang kering dengan curah hujan rendah dan lanskap sabana padang rumput.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25GEO-PRED2-011"
  },

  // 12. Biosfer: Region Fauna Wallace (PG)
  {
    id: 12,
    elemen: "Dinamika Biosfer",
    subelemen: "Persebaran Fauna Dunia (Biogeografi)",
    indikator: "Menentukan jenis fauna khas yang menempati region Ethiopian (Afrotropik).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Alfred Russel Wallace membagi biosfer daratan dunia ke dalam enam kawasan biogeografi fauna: Neartik, Neotropik, Paleartik, Ethiopian (Afrotropik), Oriental, dan Australis.
</p>
<p class="font-semibold text-slate-900 mb-2">
Kelompok hewan mamalia darat yang merupakan fauna khas endemik wilayah <strong>Region Ethiopian (Afrotropik)</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Jerapah, zebra, simpanse, burung unta, dan kuda nil" },
      { id: "B", text: "Kanguru, koala, burung kasuari, dan platipus" },
      { id: "C", text: "Bison, beruang kutub, rusa kutub (karibu), dan serigala abu-abu" },
      { id: "D", text: "Trenggiling raksasa, llama, jaguar, dan anaconda" },
      { id: "E", text: "Orangutan, harimau loreng, gajah kerdil, dan badak bercula satu" }
    ],
    kunci: "A",
    pembahasan: `<strong>Persebaran Fauna Wilayah Dunia:</strong><br>
&bull; <strong>Region Ethiopian (Afrika Sub-Sahara &amp; Madagaskar):</strong> Jerapah, zebra, gorila, simpanse, cheetah, singa afrika, kuda nil, dan burung unta.<br>
&bull; <strong>Region Australis:</strong> Kanguru, koala, walabi, kasuari, platipus.<br>
&bull; <strong>Region Neotropik (Amerika Selatan/Tengah):</strong> Llama, alpaka, tapir, jaguar, piranha, anaconda.<br>
&bull; <strong>Region Neartik (Amerika Utara):</strong> Bison, berang-berang, domba gunung.<br>
&bull; <strong>Region Oriental (Asia Selatan &amp; Tenggara):</strong> Gajah asia, badak jawa/sumatra, orangutan, harimau.<br><br>
<strong>Kunci Jawaban: A</strong>`,
    kode: "25GEO-PRED2-012"
  },

  // 13. Persebaran Bioma Dunia (Benar/Salah)
  {
    id: 13,
    elemen: "Dinamika Biosfer",
    subelemen: "Bioma Dunia & Karakteristik Adaptasi",
    indikator: "Mengevaluasi karakteristik ekologis dan adaptasi vegetasi pada bioma taiga, tundra, dan hutan gugur.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kondisi iklim global membentuk formasi bioma utama di permukaan bumi dengan karakteristik flora dan fauna yang khas. Tentukan kebenaran dari masing-masing pernyataan perbandingan bioma berikut:
</p>`,
    items: [
      {
        pernyataan: "Bioma Taiga (hutan boreal) didominasi oleh vegetasi pohon berdaun jarum (konifer) seperti pinus dan cemara yang daunnya dilapisi lapisan lilin untuk menahan penguapan di musim dingin bersalju.",
        kunci: "Benar",
        penjelasan: "Taiga adalah bioma hutan konifer di daerah iklim subarktik dengan spesies berdaun jarum tahan beku."
      },
      {
        pernyataan: "Bioma Tundra memiliki lapisan tanah bawah yang membeku secara abadi (permafrost) sehingga tidak memungkinkan pertumbuhan pohon berkayu besar.",
        kunci: "Benar",
        penjelasan: "Permafrost di lingkar kutub utara membatasi pertumbuhan perakaran dalam, sehingga hanya lumut (lichen) dan semak kerdil yang tumbuh."
      },
      {
        pernyataan: "Bioma Gurun memiliki keanekaragaman jenis tumbuhan paling tinggi di bumi karena intensitas penyinaran matahari berlangsung maksimum 12 jam sehari.",
        kunci: "Salah",
        penjelasan: "Bioma dengan biodiversitas tertinggi di bumi adalah Hutan Hujan Tropis. Bioma gurun memiliki biodiversitas rendah karena defisit air ekstrem."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Analisis Bioma Dunia:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Bioma taiga dicirikan oleh hutan konifer homogen (spruce, fir, larch, pine) berdaun jarum dengan adaptasi lilin resin.<br>
2. <strong>Pernyataan 2 (Benar):</strong> Bioma tundra kutub utara ditandai tanah beku abadi (permafrost) tanpa pohon (treeless plain).<br>
3. <strong>Pernyataan 3 (Salah):</strong> Hutan Hujan Tropis (bukan gurun) adalah bioma terkaya biodiversitas di bumi.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`,
    kode: "25GEO-PRED2-013"
  },

  // 14. Posisi Geostrategis Indonesia (PG)
  {
    id: 14,
    elemen: "Posisi Geografis Indonesia",
    subelemen: "Poros Maritim Dunia & ALKI",
    indikator: "Menganalisis keuntungan geostrategis ALKI (Alur Laut Kepulauan Indonesia) bagi perdagangan internasional.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sebagai negara kepulauan terbesar di dunia (archipelagic state) yang diakui UNCLOS 1982, Indonesia menetapkan tiga Alur Laut Kepulauan Indonesia (ALKI I, II, dan III) untuk mengakomodasi hak lintas damai pelayaran kapal niaga internasional antara Samudera Hindia dan Samudera Pasifik.
</p>
<p class="font-semibold text-slate-900 mb-2">
Keuntungan geostrategis dan geoekonomi yang dapat dioptimalkan Indonesia dari penetapan jalur pelayaran internasional pada <strong>ALKI II (Selat Lombok - Selat Makassar)</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Menjadikan Selat Malaka sebagai satu-satunya jalur pelayaran kapal tanker dunia" },
      { id: "B", text: "Menyediakan alternatif jalur pelayaran laut dalam yang aman bagi kapal-kapal tanker raksasa (VLCC/Capesize) dari Australia ke Asia Timur yang tidak dapat melintasi kedalaman Selat Malaka yang dangkal" },
      { id: "C", text: "Menutup seluruh perairan pedalaman Indonesia dari akses kapal penelitian asing" },
      { id: "D", text: "Membatasi ekspor komoditas perikanan hanya pada pulau-pulau kecil di Samudera Hindia" },
      { id: "E", text: "Mengalihkan arus pasang surut air laut untuk membangkitkan listrik tenaga nuklir" }
    ],
    kunci: "B",
    pembahasan: `<strong>Keunggulan Geostrategis ALKI II:</strong><br>
Selat Malaka merupakan choke point yang sangat padat dan memiliki kedalaman relatif dangkal (shallow water), sehingga kapal tanker minyak raksasa bertonase sangat besar (Super Tanker / VLCC / ULCC) dengan draft air dalam tidak dapat melintasinya secara aman.<br>
<strong>ALKI II (Selat Lombok &rarr; Selat Makassar &rarr; Laut Sulawesi)</strong> menawarkan perairan laut dalam (deep water passage) bebas sedimentasi dangkal yang menghubungkan rute strategis Australia dan Selandia Baru menuju pusat industri di Asia Timur (Tiongkok, Jepang, Korea Selatan). Indonesia dapat mengoptimalkan pelabuhan bunker logistik dan pemeliharaan kapal di koridor ini.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25GEO-PRED2-014"
  },

  // 15. Dinamika Kependudukan: Dependency Ratio (PG + Tabel)
  {
    id: 15,
    elemen: "Dinamika Kependudukan",
    subelemen: "Komposisi Usia & Rasio Ketergantungan",
    indikator: "Menghitung angka beban ketergantungan (Dependency Ratio) dari tabel komposisi usia penduduk.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tabel berikut menyajikan data komposisi penduduk suatu wilayah kecamatan berdasarkan kelompok umur pada tahun 2024:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-amber-600 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-amber-700">Kelompok Usia (Tahun)</th>
        <th class="p-2.5 border border-amber-700">Kategori Demografi</th>
        <th class="p-2.5 border border-amber-700 text-right">Jumlah Penduduk (Jiwa)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 border border-slate-200">0 &minus; 14</td>
        <td class="p-2 border border-slate-200">Usia Belum Produktif (Muda)</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold">40.000</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 border border-slate-200">15 &minus; 64</td>
        <td class="p-2 border border-slate-200">Usia Produktif</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold text-emerald-700">100.000</td>
      </tr>
      <tr>
        <td class="p-2 border border-slate-200">&ge; 65</td>
        <td class="p-2 border border-slate-200">Usia Tidak Produktif (Tua)</td>
        <td class="p-2 border border-slate-200 text-right font-mono font-bold">10.000</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan data tersebut, <strong>Angka Beban Ketergantungan (Dependency Ratio)</strong> kecamatan tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "25" },
      { id: "B", text: "40" },
      { id: "C", text: "50" },
      { id: "D", text: "60" },
      { id: "E", text: "75" }
    ],
    kunci: "C",
    pembahasan: `<strong>Rumus Perhitungan Dependency Ratio (DR):</strong><br>
<code>DR = [(Penduduk Usia Non-Produktif) / (Penduduk Usia Produktif)] &times; 100</code><br>
<code>DR = [((0-14 tahun) + (&ge; 65 tahun)) / (15-64 tahun)] &times; 100</code><br><br>
Diketahui data:<br>
&bull; Usia Non-Produktif Muda (0-14 th) = 40.000 jiwa<br>
&bull; Usia Non-Produktif Tua (&ge; 65 th) = 10.000 jiwa<br>
&bull; Usia Produktif (15-64 th) = 100.000 jiwa<br><br>
Substitusi nilai:<br>
<code>DR = [(40.000 + 10.000) / 100.000] &times; 100</code><br>
<code>DR = [50.000 / 100.000] &times; 100 = 0,5 &times; 100 = 50</code>.<br><br>
<strong>Interpretasi:</strong> Setiap 100 jiwa penduduk usia produktif menanggung beban ekonomi sebanyak 50 jiwa penduduk non-produktif.<br><br>
<strong>Kunci Jawaban: C (50)</strong>`,
    kode: "25GEO-PRED2-015"
  },

  // 16. Piramida Penduduk & Bonus Demografi (MCMA)
  {
    id: 16,
    elemen: "Dinamika Kependudukan",
    subelemen: "Struktur Piramida & Bonus Demografi",
    indikator: "Menganalisis prasyarat keberhasilan pemanfaatan bonus demografi pada struktur penduduk.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Bonus demografi adalah suatu kondisi di mana rasio ketergantungan (<em>dependency ratio</em>) suatu negara berada pada titik terendah (di bawah 50), yang berarti jumlah penduduk usia produktif (15-64 tahun) mendominasi lebih dari 65% total populasi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Kebijakan strategis pemerintah yang tepat agar jendela peluang bonus demografi tidak berubah menjadi bencana demografi pengangguran massal adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Meningkatkan kualitas pendidikan vokasi dan pelatihan keterampilan kerja yang selaras dengan kebutuhan industri teknologi modern" },
      { id: "B", text: "Menaikkan batas usia wajib pensiun sedini mungkin agar generasi muda langsung menjadi pengambil kebijakan tunggal" },
      { id: "C", text: "Membatasi masuknya investasi padat karya untuk menjaga keaslian lingkungan perdesaan" },
      { id: "D", text: "Memperluas penyediaan lapangan kerja produktif dan iklim investasi yang kondusif bagi kewirausahaan rintisan (startup)" },
      { id: "E", text: "Meningkatkan layanan kesehatan preventif dan pemenuhan gizi untuk mencegah stunting pada generasi masa depan" }
    ],
    kunci: ["A", "D", "E"],
    pembahasan: `<strong>Strategi Pemanfaatan Bonus Demografi:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Pendidikan vokasi (link and match) meningkatkan produktivitas tenaga kerja.<br>
&bull; <strong>Pernyataan D (Benar):</strong> Penciptaan lapangan kerja dan kemudahan berusaha menampung jutaan angkatan kerja baru.<br>
&bull; <strong>Pernyataan E (Benar):</strong> Kesehatan dan nutrisi anak mencegah hilangnya potensi kognitif (stunting) pada angkatan kerja.<br>
&bull; <strong>Pernyataan B &amp; C (Salah):</strong> Bukan kebijakan realistis dalam penyerapan angkatan kerja.<br><br>
<strong>Kunci Jawaban: A, D, dan E</strong>`,
    kode: "25GEO-PRED2-016"
  },

  // 17. Pembangunan Berkelanjutan (PG)
  {
    id: 17,
    elemen: "Lingkungan Hidup",
    subelemen: "Prinsip Pembangunan Berkelanjutan (SDGs)",
    indikator: "Menentukan implementasi prinsip pembangunan berwawasan lingkungan pada sektor industri manufaktur.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pembangunan berkelanjutan (<em>sustainable development</em>) menuntut adanya keharmonisan antara pertumbuhan ekonomi, keadilan sosial, dan kelestarian fungsi lingkungan hidup untuk generasi kini maupun generasi mendatang.
</p>
<p class="font-semibold text-slate-900 mb-2">
Contoh tindakan operasional pada sektor industri yang mencerminkan penerapan prinsip pembangunan berkelanjutan berwawasan lingkungan adalah...
</p>`,
    options: [
      { id: "A", text: "Membuang limbah cair industri ke sungai pada malam hari saat debit air sungai tinggi agar cepat larut" },
      { id: "B", text: "Mengeksploitasi bahan baku secara maksimal tanpa henti untuk menekan biaya per unit produk" },
      { id: "C", text: "Memasang Instalasi Pengolahan Air Limbah (IPAL) berstandar baku mutu dan menerapkan teknologi daur ulang air pendingin (zero liquid discharge)" },
      { id: "D", text: "Mengganti seluruh cerobong asap pabrik dengan cerobong pendek agar asap tidak terbawa angin ke daerah lain" },
      { id: "E", text: "Mengubur limbah bahan berbahaya dan beracun (B3) di pekarangan pabrik tanpa izin lingkungan" }
    ],
    kunci: "C",
    pembahasan: `<strong>Prinsip Pembangunan Industri Berkelanjutan:</strong><br>
Industri hijau (green industry) beroperasi dengan prinsip:<br>
1. Mengurangi limbah sejak dari sumber (reduce at source).<br>
2. Mengolah limbah beracun melalui <strong>IPAL (Instalasi Pengolahan Air Limbah)</strong> hingga memenuhi baku mutu lingkungan sebelum dialirkan keluar.<br>
3. Menerapkan daur ulang (recycle) dan pemulihan energi (recovery).<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25GEO-PRED2-017"
  },

  // 18. AMDAL (Benar/Salah)
  {
    id: 18,
    elemen: "Pengelolaan Lingkungan Hidup",
    subelemen: "Analisis Mengenai Dampak Lingkungan (AMDAL)",
    indikator: "Mengevaluasi fungsi hukum dan teknis AMDAL dalam perizinan berusaha.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Analisis Mengenai Dampak Lingkungan (AMDAL) merupakan instrumen pencegahan pencemaran dan kerusakan lingkungan hidup yang diwajibkan bagi setiap rencana usaha dan/atau kegiatan yang berdampak penting. Tentukan kebenaran dari masing-masing pernyataan berikut:
</p>`,
    items: [
      {
        pernyataan: "AMDAL berfungsi sebagai pedoman teknis pengelolaan lingkungan (RKL) dan pemantauan lingkungan (RPL) bagi pemrakarsa usaha selama masa konstruksi dan operasi.",
        kunci: "Benar",
        penjelasan: "RKL dan RPL merupakan dokumen bagian integral dari AMDAL yang menjadi acuan pengawasan lingkungan."
      },
      {
        pernyataan: "Masyarakat yang terdampak langsung oleh rencana pembangunan wajib dilibatkan dalam proses penyusunan AMDAL melalui konsultasi publik.",
        kunci: "Benar",
        penjelasan: "Keterlibatan masyarakat terkena dampak diatur undang-undang untuk menjamin transparansi dan keadilan sosial."
      },
      {
        pernyataan: "Persetujuan Lingkungan hasil uji kelayakan AMDAL dapat diabaikan jika perusahaan telah membayar retribusi daerah dalam jumlah besar.",
        kunci: "Salah",
        penjelasan: "Persetujuan Lingkungan merupakan syarat mutlak perizinan berusaha yang tidak dapat digantikan oleh pembayaran retribusi uang."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Fungsi dan Ketentuan Hukum AMDAL:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> AMDAL melahirkan dokumen RKL (Rencana Pengelolaan Lingkungan) dan RPL (Rencana Pemantauan Lingkungan).<br>
2. <strong>Pernyataan 2 (Benar):</strong> Pelibatan masyarakat terdampak melalui konsultasi publik adalah kewajiban hukum mutlak.<br>
3. <strong>Pernyataan 3 (Salah):</strong> Persetujuan lingkungan tidak dapat diperjualbelikan atau digantikan oleh pembayaran denda/retribusi.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`,
    kode: "25GEO-PRED2-018"
  },

  // 19. Peta Topografi & Kontur Interval (Ci) (PG + Peta Kontur SVG)
  {
    id: 19,
    elemen: "Pengetahuan Dasar Pemetaan",
    subelemen: "Peta Topografi & Perhitungan Skala",
    indikator: "Menghitung skala peta topografi berdasarkan selisih ketinggian garis kontur interval (Ci).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan visualisasi peta topografi (garis kontur) berikut yang menyajikan kontur elevasi suatu perbukitan:
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Representasi Garis Kontur Elevasi Peta Topografi:</div>
  <svg viewBox="0 0 460 210" class="w-full max-w-md mx-auto bg-amber-50 border border-amber-200 rounded-lg shadow-sm">
    <!-- Kontur 1 (Terluar) -->
    <ellipse cx="230" cy="105" rx="190" ry="85" fill="none" stroke="#78350f" stroke-width="2" />
    <text x="50" y="108" font-size="11" font-weight="bold" fill="#78350f">100 m</text>

    <!-- Kontur 2 -->
    <ellipse cx="230" cy="105" rx="140" ry="65" fill="none" stroke="#92400e" stroke-width="1.8" />
    <text x="100" y="108" font-size="11" font-weight="bold" fill="#92400e">150 m</text>

    <!-- Kontur 3 -->
    <ellipse cx="230" cy="105" rx="90" ry="45" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="3,1" />
    <text x="150" y="108" font-size="11" font-weight="bold" fill="#b45309">200 m</text>

    <!-- Puncak -->
    <circle cx="230" cy="105" r="5" fill="#dc2626" />
    <text x="215" y="95" font-size="11" font-weight="extrabold" fill="#dc2626">&Delta; Puncak</text>
  </svg>
</div>
<p class="font-medium text-slate-800 leading-relaxed mb-2">
Berdasarkan peta topografi tersebut, diketahui interval antar-garis kontur (<em>contour interval</em> / Ci) adalah <strong>50 meter</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Skala peta topografi tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "1 : 25.000" },
      { id: "B", text: "1 : 50.000" },
      { id: "C", text: "1 : 100.000" },
      { id: "D", text: "1 : 200.000" },
      { id: "E", text: "1 : 250.000" }
    ],
    kunci: "C",
    pembahasan: `<strong>Rumus Hubungan Kontur Interval (Ci) dan Skala Peta:</strong><br>
Rumus standar baku pemetaan topografi:<br>
<code>Ci = (1 / 2.000) &times; Penyebut Skala</code><br>
Maka untuk mencari penyebut skala:<br>
<code>Penyebut Skala = Ci &times; 2.000</code><br><br>
Diketahui:<br>
&bull; Kontur 1 = 100 m<br>
&bull; Kontur 2 = 150 m<br>
&bull; Kontur 3 = 200 m<br>
&bull; <code>Ci = 150 m &minus; 100 m = 50 meter</code><br><br>
Perhitungan:<br>
<code>Penyebut Skala = 50 &times; 2.000 = 100.000</code>.<br>
Maka skala peta adalah <strong>1 : 100.000</strong>.<br><br>
<strong>Kunci Jawaban: C (1 : 100.000)</strong>`,
    kode: "25GEO-PRED2-019"
  },

  // 20. Kemiringan Lereng Peta Kontur (PG)
  {
    id: 20,
    elemen: "Pengetahuan Dasar Pemetaan",
    subelemen: "Analisis Morfologi Garis Kontur",
    indikator: "Menyimpulkan karakteristik kemiringan medan berdasarkan kerapatan garis kontur pada peta.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada selembar peta topografi, seorang perencana wilayah mengamati dua kawasan lereng perbukitan:
<br>&bull; <strong>Sektor X:</strong> Garis-garis kontur tergambar sangat berdekatan dan rapat satu sama lain.
<br>&bull; <strong>Sektor Y:</strong> Garis-garis kontur tergambar sangat renggang dengan jarak antargaris yang lebar.
</p>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik medan morfologi yang tepat dari perbandingan kedua sektor tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Sektor X merupakan dataran rendah alluvial yang landai, sedangkan Sektor Y merupakan tebing curam" },
      { id: "B", text: "Sektor X memiliki beda tinggi nol, sedangkan Sektor Y memiliki puncak tertinggi" },
      { id: "C", text: "Sektor X merupakan lereng yang terjal/curam dengan kemiringan lereng besar, sedangkan Sektor Y merupakan lereng landai yang relatif datar" },
      { id: "D", text: "Kedua sektor memiliki kemiringan lereng yang identik karena berada pada peta yang sama" },
      { id: "E", text: "Sektor X sangat cocok untuk pembangunan landasan pacu bandar udara" }
    ],
    kunci: "C",
    pembahasan: `<strong>Prinsip Kerapatan Garis Kontur:</strong><br>
1. <strong>Garis Kontur Sangat Rapat (Sektor X):</strong> Menunjukkan bahwa dalam jarak horizontal yang sangat pendek terjadi pertambahan ketinggian yang sangat besar. Karakteristik medan ini adalah <strong>terjal, curam, atau tebing patahan</strong> (rawan longsor).<br>
2. <strong>Garis Kontur Sangat Renggang (Sektor Y):</strong> Menunjukkan pertambahan elevasi berlangsung lambat pada jarak mendatar yang luas. Karakteristik medannya adalah <strong>landai atau relatif datar</strong> (cocok untuk permukiman dan pertanian).<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25GEO-PRED2-020"
  },

  // 21. Penginderaan Jauh & Unsur Interpretasi (MCMA)
  {
    id: 21,
    elemen: "Penginderaan Jauh",
    subelemen: "Unsur-Unsur Interpretasi Citra",
    indikator: "Menganalisis unsur interpretasi citra foto udara untuk mengenali objek perkebunan kelapa sawit dan jalan raya.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam kegiatan interpretasi citra penginderaan jauh, penafsir foto udara memanfaatkan unsur spasial dan spektral seperti rona/warna, bentuk, ukuran, tekstur, pola, bayangan, situs, dan asosiasi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Ciri interpretasi citra yang <strong>tepat</strong> dalam mengidentifikasi bentang lahan perkebunan kelapa sawit dan jalur jalan raya adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Perkebunan kelapa sawit memiliki tajuk tanaman menyerupai bintang dengan pola tanam berbaris teratur (grid sistematis)" },
      { id: "B", text: "Jalan raya dikenali dari bentuknya yang memanjang, memiliki lebar seragam, dan berasosiasi dengan keberadaan kendaraan bermotor" },
      { id: "C", text: "Jalan raya selalu memiliki tekstur sangat kasar dan rona sangat gelap akibat pantulan vegetasi" },
      { id: "D", text: "Perkebunan kelapa sawit memiliki tekstur permukaan sedang hingga kasar dengan rona hijau gelap seragam pada citra foto udara inframerah" },
      { id: "E", text: "Pemukiman kumuh dikenali dari pola bangunan yang sangat simetris dan berjarak renggang teratur" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Unsur Interpretasi Citra Objek Geografis:</strong><br>
&bull; <strong>Kelapa Sawit (Pernyataan A &amp; D Benar):</strong> Bentuk tajuk menyerupai bintang, ukuran tinggi relatif seragam, pola berbaris rapi teratur (larikan), tekstur sedang-kasar, berasosiasi dengan jalan kebun.<br>
&bull; <strong>Jalan Raya (Pernyataan B Benar):</strong> Berbentuk memanjang linier, lebar seragam, rona cerah hingga kelabu, berasosiasi dengan jembatan dan kendaraan.<br>
&bull; <strong>Pernyataan C &amp; E Salah:</strong> Jalan aspal bertekstur halus, sedangkan permukiman kumuh berpola acak tidak teratur dan sangat padat.<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`,
    kode: "25GEO-PRED2-021"
  },

  // 22. SIG: Data Vektor vs Raster (PG)
  {
    id: 22,
    elemen: "Sistem Informasi Geografis (SIG)",
    subelemen: "Struktur Data Spasial (Vektor & Raster)",
    indikator: "Membedakan karakteristik penyimpanan data spasial model raster dan vektor.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sistem Informasi Geografis (SIG) mengelola dua model struktur data spasial utama untuk merepresentasikan objek-objek di permukaan bumi: <strong>Data Vektor</strong> dan <strong>Data Raster</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik yang menjadi ciri pembeda utama dari <strong>Data Raster</strong> dibandingkan Data Vektor adalah...
</p>`,
    options: [
      { id: "A", text: "Disusun dalam matriks sel-sel piksel (grid) bujur sangkar di mana setiap sel menyimpan nilai atribut tematik tertentu (misalnya nilai elevasi atau digital number citra)" },
      { id: "B", text: "Direpresentasikan secara matematis melalui koordinat titik (point), garis penghubung (line/polyline), dan luasan tertutup (polygon)" },
      { id: "C", text: "Membutuhkan kapasitas penyimpanan memori yang jauh lebih kecil dan tidak mengalami distorsi pikselasi saat diperbesar (zoom-in)" },
      { id: "D", text: "Memiliki ketepatan batas administrasi wilayah yang sangat tajam dan presisi tinggi tanpa batas undak" },
      { id: "E", text: "Hanya dapat digunakan untuk mencatat data non-spasial (data tabular angka)" }
    ],
    kunci: "A",
    pembahasan: `<strong>Model Data Spasial SIG:</strong><br>
&bull; <strong>Data Raster:</strong> Data spasial yang tersusun dari kisi-kisi atau matriks <strong>sel piksel (grid)</strong> reguler. Setiap sel memiliki koordinat baris-kolom dan menyimpan nilai tertentu (contoh: Citra Satelit, DEM/SRTM ketinggian, peta tutupan lahan piksel). Keterbatasan raster adalah fenomena pikselasi saat diperbesar.<br>
&bull; <strong>Data Vektor:</strong> Data berbasis koordinat kartesian eksplisit berupa <strong>titik (point), garis (polyline), dan poligon (area)</strong>. Sangat presisi untuk batas kepemilikan tanah, jaringan jalan, dan batas administrasi.<br><br>
<strong>Kunci Jawaban: A</strong>`,
    kode: "25GEO-PRED2-022"
  },

  // 23. Pola Pemukiman Desa (PG)
  {
    id: 23,
    elemen: "Interaksi Keruangan Desa - Kota",
    subelemen: "Struktur & Pola Pemukiman Desa",
    indikator: "Menentukan pola pemukiman penduduk desa di kawasan pesisir pantai dan sepanjang bantaran sungai.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Kondisi topografi, ketersediaan sumber air, dan jalur perhubungan sarana transportasi di wilayah perdesaan sangat memengaruhi morfologi persebaran tempat tinggal penduduk. Di daerah perdesaan yang terletak di sepanjang bantaran sungai besar di Kalimantan atau di sepanjang jalur jalan lintas Sumatra, rumah-rumah penduduk dibangun berderet sejajar mengikuti orientasi jalur tersebut.
</p>
<p class="font-semibold text-slate-900 mb-2">
Pola keruangan permukiman desa tersebut diklasifikasikan sebagai...
</p>`,
    options: [
      { id: "A", text: "Pola linier (memanjang)" },
      { id: "B", text: "Pola memusat (agglomerated/nucleated)" },
      { id: "C", text: "Pola tersebar (dispersed/scattered)" },
      { id: "D", text: "Pola radial mengitari danau" },
      { id: "E", text: "Pola bertingkat (terraced)" }
    ],
    kunci: "A",
    pembahasan: `<strong>Pola Persebaran Permukiman Desa:</strong><br>
1. <strong>Pola Linier (Memanjang):</strong> Rumah-rumah penduduk berderet memanjang sejajar mengikuti prasarana transportasi, seperti di sepanjang tepi jalan raya, bantaran alur sungai, atau garis pantai.<br>
2. <strong>Pola Memusat (Terkonsentrasi):</strong> Mengelompok di sekitar fasilitas bersama, seperti di persimpangan jalan, sumber mata air di daerah kering, atau muara sungai.<br>
3. <strong>Pola Tersebar:</strong> Terpisah-pisah berjauhan, umum di daerah karst berbatu gamping atau kawasan pegunungan terjal.<br><br>
<strong>Kunci Jawaban: A (Pola linier/memanjang)</strong>`,
    kode: "25GEO-PRED2-023"
  },

  // 24. Interaksi Keruangan Teori Gravitasi Reilly (PG)
  {
    id: 24,
    elemen: "Interaksi Keruangan Desa - Kota",
    subelemen: "Kekuatan Interaksi Teori Gravitasi (W.J. Reilly)",
    indikator: "Menghitung kekuatan interaksi keruangan antara dua kota berdasarkan jumlah penduduk dan jarak spasial.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dua buah kota saling berinteraksi dalam mobilitas perdagangan barang dan jasa:
<br>&bull; <strong>Kota A</strong> memiliki jumlah penduduk sebanyak <strong>20.000 jiwa</strong>.
<br>&bull; <strong>Kota B</strong> memiliki jumlah penduduk sebanyak <strong>10.000 jiwa</strong>.
<br>&bull; Jarak mutlak yang memisahkan antara Kota A dan Kota B adalah sejauh <strong>10 km</strong> (konstanta gravitasi k = 1).
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan Model Gravitasi W.J. Reilly, kekuatan interaksi spasial antara Kota A dan Kota B (I<sub>AB</sub>) adalah...
</p>`,
    options: [
      { id: "A", text: "1.000.000" },
      { id: "B", text: "2.000.000" },
      { id: "C", text: "4.000.000" },
      { id: "D", text: "20.000.000" },
      { id: "E", text: "200.000.000" }
    ],
    kunci: "B",
    pembahasan: `<strong>Rumus Teori Gravitasi Reilly:</strong><br>
<code>I<sub>AB</sub> = k &times; [(P<sub>A</sub> &times; P<sub>B</sub>) / (d<sub>AB</sub>)<sup>2</sup>]</code><br><br>
Diketahui:<br>
&bull; P<sub>A</sub> = 20.000 jiwa<br>
&bull; P<sub>B</sub> = 10.000 jiwa<br>
&bull; d<sub>AB</sub> = 10 km<br>
&bull; k = 1<br><br>
Perhitungan:<br>
<code>I<sub>AB</sub> = 1 &times; [(20.000 &times; 10.000) / (10)<sup>2</sup>]</code><br>
<code>I<sub>AB</sub> = [200.000.000 / 100] = 2.000.000</code>.<br><br>
Kekuatan interaksi antara Kota A dan Kota B bernilai <strong>2.000.000</strong>.<br><br>
<strong>Kunci Jawaban: B (2.000.000)</strong>`,
    kode: "25GEO-PRED2-024"
  },

  // 25. Teori Titik Henti Carrothers (Benar/Salah)
  {
    id: 25,
    elemen: "Interaksi Keruangan Desa - Kota",
    subelemen: "Teori Titik Henti (Breaking Point Theory)",
    indikator: "Mengevaluasi prinsip penentuan lokasi optimal pelayanan umum menggunakan Teori Titik Henti.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Teori Titik Henti (<em>Breaking Point Theory</em>) yang dikemukakan oleh William J. Reilly dan dimodifikasi oleh Carrothers digunakan untuk memperkirakan posisi garis batas batas ambang pengaruh pasar atau lokasi ideal penempatan fasilitas umum (seperti rumah sakit regional atau pasar induk) di antara dua pusat permukiman yang berbeda jumlah penduduknya.
<br>Rumus titik henti dihitung dengan persamaan:
<br><code>D<sub>AB</sub> = d<sub>AB</sub> / [1 + &radic;(P<sub>A</sub> / P<sub>B</sub>)]</code>
<br><span class="text-xs text-slate-600">Catatan: P<sub>A</sub> adalah kota dengan jumlah penduduk lebih banyak, dan P<sub>B</sub> adalah kota dengan penduduk lebih sedikit. Jarak D<sub>AB</sub> selalu diukur dari kota berpenduduk lebih sedikit (Kota B).</span>
</p>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan evaluasi berikut:
</p>`,
    items: [
      {
        pernyataan: "Lokasi titik henti ideal penempatan fasilitas umum akan selalu berada lebih dekat ke arah kota yang memiliki jumlah penduduk lebih sedikit.",
        kunci: "Benar",
        penjelasan: "Kota dengan penduduk lebih sedikit memiliki daya gravitasi lebih kecil, sehingga fasilitas umum ditempatkan lebih dekat dengannya agar terjadi keseimbangan daya jangkau."
      },
      {
        pernyataan: "Jika penduduk Kota A = 36.000 jiwa, penduduk Kota B = 4.000 jiwa, dan jarak antarkota 20 km, maka lokasi titik henti berada tepat 5 km diukur dari Kota B.",
        kunci: "Benar",
        penjelasan: "D_AB = 20 / [1 + √(36.000 / 4.000)] = 20 / [1 + √9] = 20 / [1 + 3] = 20 / 4 = 5 km diukur dari Kota B."
      },
      {
        pernyataan: "Semakin besar perbedaan jumlah penduduk antara dua kota, maka lokasi titik henti akan bergeser semakin mendekati pusat kota yang berpenduduk lebih padat.",
        kunci: "Salah",
        penjelasan: "Semakin besar disparitas penduduk, nilai penyebut [1 + √(PA/PB)] makin besar sehingga DAB makin kecil, yang berarti lokasi justru makin mendekat ke kota kecil."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Analisis Teori Titik Henti (Carrothers):</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Pusat pelayanan selalu ditempatkan lebih dekat ke kota berpopulasi lebih kecil untuk mengimbangi daya tarik kota besar.<br>
2. <strong>Pernyataan 2 (Benar):</strong> Perhitungan numerik:<br>
   <code>D<sub>AB</sub> = 20 / [1 + &radic;(36.000 / 4.000)] = 20 / [1 + &radic;9] = 20 / (1 + 3) = 20 / 4 = 5 km dari Kota B</code>.<br>
3. <strong>Pernyataan 3 (Salah):</strong> Jika disparitas bertambah besar, titik henti semakin mendekat ke kota yang penduduknya lebih sedikit (bukan yang lebih padat).<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`,
    kode: "25GEO-PRED2-025"
  }
];

// Cek apakah ada tanda dolar
const rawStr = JSON.stringify(geografiPaket2Data);
const dollarMatches = (rawStr.match(/\$/g) || []).length;
if (dollarMatches > 0) {
  console.error(`❌ TERDETEKSI ${dollarMatches} TANDA DOLAR PADA DATASET GEOGRAFI PAKET 2!`);
  process.exit(1);
} else {
  console.log("✅ Dataset Geografi Paket 2 100% BEBAS dari tanda dolar ($)!");
}

const fileContent = `// tka/data/mapel-geografi-paket2.js
// Bank Soal & Pembahasan Prediksi Resmi TKA Geografi SMA 2025/2026 (Paket 2: 25 Butir Soal Standar TKA BPPP)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Geografi SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaGeografiPaket2Data = ${JSON.stringify(geografiPaket2Data, null, 2)};

if (typeof window !== 'undefined') {
  window.tkaGeografiPaket2Data = tkaGeografiPaket2Data;
  window.tkaGeografiPackages = window.tkaGeografiPackages || {};
  window.tkaGeografiPackages['paket2'] = {
    id: "paket2",
    title: "Paket 2: Prediksi Resmi TKA Geografi SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    durasiMenit: 50,
    data: tkaGeografiPaket2Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaGeografiPaket2Data };
}
`;

const outputPath = path.join(__dirname, '../tka/data/mapel-geografi-paket2.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`🎉 ${outputPath} berhasil dibuat! (25 soal)`);
