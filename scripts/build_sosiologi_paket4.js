// scripts/build_sosiologi_paket4.js
const fs = require('fs');
const path = require('path');

const sosiologiPaket4Data = [
  // 1. Ciri Sosiologi sebagai Ilmu (PG + Diagram Bagan SVG)
  {
    id: 1,
    elemen: "Sosiologi sebagai Ilmu",
    subelemen: "Hakikat & Karakteristik Sosiologi",
    indikator: "Mengidentifikasi sifat kumulatif sosiologi berdasarkan dinamika penyempurnaan teori-teori sosial.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Teori-teori sosiologi tidak pernah dibangun dari nol secara terisolasi, melainkan selalu disusun berdasarkan teori-teori yang sudah ada sebelumnya, kemudian diperluas, diperhalus, dan disempurnakan sesuai dengan dinamika perkembangan masyarakat mutakhir.
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Empat Ciri Utama Sosiologi sebagai Ilmu Pengetahuan Empiris:</div>
  <svg viewBox="0 0 500 130" class="w-full max-w-lg mx-auto bg-white border border-slate-200 rounded-lg shadow-xs">
    <!-- Empiris -->
    <rect x="15" y="20" width="105" height="90" rx="8" fill="#f8fafc" stroke="#94a3b8" />
    <text x="35" y="45" font-size="12" font-weight="bold" fill="#0369a1">Empiris</text>
    <text x="25" y="70" font-size="10" fill="#475569">Berdasarkan</text>
    <text x="25" y="85" font-size="10" fill="#475569">observasi nyata</text>
    <text x="25" y="100" font-size="10" fill="#475569">bukan spekulasi</text>

    <!-- Teoretis -->
    <rect x="135" y="20" width="105" height="90" rx="8" fill="#f8fafc" stroke="#94a3b8" />
    <text x="155" y="45" font-size="12" font-weight="bold" fill="#0369a1">Teoretis</text>
    <text x="145" y="70" font-size="10" fill="#475569">Menyusun</text>
    <text x="145" y="85" font-size="10" fill="#475569">abstraksi logis</text>
    <text x="145" y="100" font-size="10" fill="#475569">sebab-akibat</text>

    <!-- Kumulatif (Highlight) -->
    <rect x="255" y="15" width="115" height="100" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
    <text x="275" y="45" font-size="13" font-weight="extrabold" fill="#b45309">Kumulatif</text>
    <text x="265" y="70" font-size="10" font-weight="semibold" fill="#78350f">Teori disusun atas</text>
    <text x="265" y="85" font-size="10" font-weight="semibold" fill="#78350f">dasar teori lama,</text>
    <text x="265" y="100" font-size="10" font-weight="semibold" fill="#78350f">disempurnakan</text>

    <!-- Non-Etis -->
    <rect x="385" y="20" width="100" height="90" rx="8" fill="#f8fafc" stroke="#94a3b8" />
    <text x="400" y="45" font-size="12" font-weight="bold" fill="#0369a1">Non-Etis</text>
    <text x="395" y="70" font-size="10" fill="#475569">Tidak menilai</text>
    <text x="395" y="85" font-size="10" fill="#475569">baik-buruk fakta,</text>
    <text x="395" y="100" font-size="10" fill="#475569">hanya jelaskan</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik sosiologi yang selalu mengalami penyempurnaan dan perluasan dari teori-teori terdahulu tersebut menunjukkan bahwa sosiologi bersifat...
</p>`,
    options: [
      { id: "A", text: "Statis" },
      { id: "B", text: "Empiris" },
      { id: "C", text: "Teoretis" },
      { id: "D", text: "Non-etis" },
      { id: "E", text: "Kumulatif" }
    ],
    kunci: "E",
    pembahasan: `<strong>Empat Ciri Pokok Sosiologi sebagai Ilmu:</strong><br>
1. <strong>Empiris:</strong> Didasarkan pada observasi penalaran akal sehat terhadap fakta kenyataan sosial di masyarakat, bukan dugaan fiktif atau spekulasi.<br>
2. <strong>Teoretis:</strong> Selalu berusaha menyusun abstraksi dari hasil observasi hubungan kausalitas (sebab-akibat) untuk menghasilkan teori ilmiah.<br>
3. <strong>Kumulatif:</strong> Teori-teori sosiologi dibentuk berdasarkan teori yang telah ada sebelumnya, namun terus diperbaiki, diperluas, dan disempurnakan (akumulasi pengetahuan bertahap).<br>
4. <strong>Non-Etis:</strong> Tidak mempersoalkan nilai baik atau buruk suatu fakta sosial, melainkan bertujuan menjelaskan fakta tersebut secara analitis dan objektif.<br><br>
<strong>Kunci Jawaban: E (Kumulatif)</strong>`,
    kode: "25SOS-PRED4-001"
  },

  // 2. Nilai & Norma Sosial: Tingkatan Norma (MCMA)
  {
    id: 2,
    elemen: "Nilai dan Norma Sosial",
    subelemen: "Klasifikasi Norma Berdasarkan Daya Ikatnya",
    indikator: "Membedakan tingkatan norma cara (usage), kebiasaan (folkways), tata kelakuan (mores), dan adat istiadat (custom).",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam kehidupan bermasyarakat, norma sosial memiliki kekuatan mengikat (daya ikat) yang bervariasi dari yang paling lemah hingga yang memiliki sanksi adat/hukum paling tegas.
</p>
<p class="font-semibold text-slate-900 mb-2">
Contoh perilaku yang tergolong pelanggaran terhadap <strong>Tata Kelakuan (Mores)</strong> dan <strong>Adat Istiadat (Custom)</strong> adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Seorang pemuda makan sambil berdiri di tempat pesta umum (pelanggaran cara/usage)" },
      { id: "B", text: "Melakukan tindakan perzinaan atau perselingkuhan yang melanggar batas kesusilaan masyarakat setempat" },
      { id: "C", text: "Pelanggaran terhadap larangan perkawinan satu klan/marga (matrilineal) dalam adat Minangkabau yang berakibat sanksi dikucilkan dari desa" },
      { id: "D", text: "Tidak mengetuk pintu saat memasuki rumah tetangga yang sedang terbuka (pelanggaran kebiasaan/folkways)" },
      { id: "E", text: "Melakukan pencurian uang kas desa dan melanggar sumpah adat leluhur" }
    ],
    kunci: ["B", "C", "E"],
    pembahasan: `<strong>Tingkatan Daya Ikat Norma Sosial:</strong><br>
&bull; <strong>Cara (Usage):</strong> Daya ikat sangat lemah, sanksi hanya teguran ringan (misal makan bersendawa / makan berdiri - Pilihan A).<br>
&bull; <strong>Kebiasaan (Folkways):</strong> Perbuatan diulang-ulang yang diterima masyarakat (misal memberi salam, ketuk pintu - Pilihan D).<br>
&bull; <strong>Tata Kelakuan (Mores - Pilihan B):</strong> Aturan pengatur kelakuan yang bersumber pada moral/ajaran agama, sanksinya celaan moral dan hukum sosial.<br>
&bull; <strong>Adat Istiadat (Custom - Pilihan C &amp; E):</strong> Tata kelakuan yang mengakar kuat dengan sanksi adat berat seperti pengusiran atau pencabutan hak ulayat.<br><br>
<strong>Kunci Jawaban: B, C, dan E</strong>`,
    kode: "25SOS-PRED4-002"
  },

  // 3. Faktor Interaksi Sosial (PG)
  {
    id: 3,
    elemen: "Interaksi Sosial",
    subelemen: "Faktor Pendorong Interaksi Sosial",
    indikator: "Menganalisis pengaruh sugesti iklan produk terhadap perilaku konsumsi impulsif masyarakat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang remaja yang awalnya tidak berniat membeli makanan mendadak memesan paket makanan cepat saji melalui aplikasi pesan antar online setelah terpesona melihat video promosi dengan visual lelehan keju dan audio yang sangat menggugah selera tanpa mempertimbangkan kandungan nutrisi maupun kondisi keuangannya saat itu.
</p>
<p class="font-semibold text-slate-900 mb-2">
Faktor pendorong interaksi sosial yang mendasari keputusan remaja tersebut untuk langsung bertindak tanpa pertimbangan rasional adalah...
</p>`,
    options: [
      { id: "A", text: "Identifikasi, yaitu dorongan mendalam untuk menjadi identik sama persis dengan tokoh idola" },
      { id: "B", text: "Empati, yaitu kemampuan merasakan penderitaan orang lain dan melakukan tindakan nyata" },
      { id: "C", text: "Sugesti, yaitu pengaruh psikologis pandangan atau anjuran yang diberikan pihak lain dan diterima secara spontan tanpa kritik rasional" },
      { id: "D", text: "Imitasi, yaitu tindakan meniru gaya berpakaian atau potongan rambut orang lain secara sadar" },
      { id: "E", text: "Simpati, yaitu perasaan tertarik kepada pihak lain karena kepribadian atau penampilannya" }
    ],
    kunci: "C",
    pembahasan: `<strong>Faktor-Faktor Pendorong Interaksi Sosial:</strong><br>
&bull; <strong>Sugesti:</strong> Pengaruh psikis yang menggerakkan hati orang lain untuk menerima pandangan/anjuran tanpa dipikirkan secara kritis dan rasional. Iklan komersial, promosi influencer, dan propaganda politik bekerja terutama melalui mekanisme sugesti.<br>
&bull; <strong>Imitasi:</strong> Meniru penampilan fisik atau tindakan orang lain.<br>
&bull; <strong>Identifikasi:</strong> Keinginan kuat menjadi sama persis dengan tokoh panutan.<br>
&bull; <strong>Simpati &amp; Empati:</strong> Ketertarikan emosional dan keterlibatan mendalam merasakan kondisi batin orang lain.<br><br>
<strong>Kunci Jawaban: C (Sugesti)</strong>`,
    kode: "25SOS-PRED4-003"
  },

  // 4. Syarat Terjadinya Interaksi Sosial (PG)
  {
    id: 4,
    elemen: "Interaksi Sosial",
    subelemen: "Kontak Sosial & Komunikasi",
    indikator: "Menentukan syarat mutlak terjadinya interaksi sosial menurut Soerjono Soekanto.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dua orang penumpang berada di dalam gerbong kereta api yang sama dan duduk berhadapan selama 3 jam perjalanan. Keduanya saling memandang sekilas, namun sama sekali tidak saling menyapa, tidak berbicara, dan masing-masing hanya fokus menatap layar telepon genggam masing-masing.
</p>
<p class="font-semibold text-slate-900 mb-2">
Peristiwa tersebut belum dapat dikategorikan sebagai bentuk interaksi sosial penuh karena...
</p>`,
    options: [
      { id: "A", text: "Keduanya tidak memiliki kesamaan latar belakang etnis dan bahasa daerah" },
      { id: "B", text: "Meskipun terjadi kontak sosial fisik secara tatap muka, tetapi tidak tercipta komunikasi timbal balik (interpretasi pesan dan makna aksi-reaksi)" },
      { id: "C", text: "Interaksi sosial hanya dapat berlangsung di ruang publik terbuka, bukan di dalam moda transportasi" },
      { id: "D", text: "Tidak adanya pihak ketiga yang bertindak sebagai mediator resmi" },
      { id: "E", text: "Keduanya tidak menandatangani kesepakatan tertulis sebelum perjalanan dimulai" }
    ],
    kunci: "B",
    pembahasan: `<strong>Syarat Terjadinya Interaksi Sosial:</strong><br>
Menurut Soerjono Soekanto, interaksi sosial mutlak memerlukan dua syarat utama:<br>
1. <strong>Kontak Sosial:</strong> Hubungan awal antarpihak, baik primer (tatap muka langsung) maupun sekunder (melalui media perantara).<br>
2. <strong>Komunikasi:</strong> Proses penyampaian pesan (ide, maksud, lambang) dari komunikator kepada komunikan yang kemudian direspons atau diberi umpan balik (feedback/tanggapan).<br>
Duduk berdekatan tanpa adanya pertukaran pesan yang dimaknai timbal balik hanya memenuhi kontak fisik awal, namun belum menjadi interaksi sosial bermakna.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-004"
  },

  // 5. Sosialisasi: Tahap George Herbert Mead (Benar/Salah)
  {
    id: 5,
    elemen: "Sosialisasi & Pembentukan Kepribadian",
    subelemen: "Tahap Pembentukan Diri (George Herbert Mead)",
    indikator: "Mengevaluasi tahapan sosialisasi diri (preparatory, play, game, generalized other).",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sosiolog George Herbert Mead merumuskan bahwa kepribadian dan peran sosial individu terbentuk melalui tahapan interaksi sosialisasi secara bertahap. Tentukan kebenaran dari masing-masing pernyataan berikut:
</p>`,
    items: [
      {
        pernyataan: "Pada tahap Meniru (Play Stage), seorang anak mulai menirukan peran orang dewasa (seperti bermain dokter-dokteran atau masak-masakan) meskipun belum sepenuhnya memahami hak dan kewajiban nyata dari peran tersebut.",
        kunci: "Benar",
        penjelasan: "Play stage ditandai peniruan peran orang penting (significant others) di lingkungannya secara simbolik."
      },
      {
        pernyataan: "Tahap Siap Bertindak (Game Stage) ditandai oleh kemampuan anak memahami perannya sendiri sekaligus memahami aturan main dan peran orang lain dalam suatu tim (seperti bermain sepak bola bersaing secara sportif).",
        kunci: "Benar",
        penjelasan: "Pada game stage, kesadaran aturan kolektif dan pembagian kerja sama tim mulai terbentuk sempurna."
      },
      {
        pernyataan: "Tahap Penerimaan Norma Kolektif (Generalized Other) hanya dapat dicapai oleh seseorang apabila ia telah terpilih menjadi pejabat tinggi dalam pemerintahan.",
        kunci: "Salah",
        penjelasan: "Generalized other adalah fase kematangan individu dalam masyarakat umum di mana ia telah mampu mematuhi norma sosial universal tanpa harus menjadi pejabat."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Tahapan Sosialisasi Diri G.H. Mead:</strong><br>
1. <strong>Preparatory Stage (Tahap Persiapan):</strong> Bayi mulai meniru bunyi dan gerak tanpa arti.<br>
2. <strong>Play Stage (Tahap Meniru Peran - Pernyataan 1 Benar):</strong> Anak meniru profesi orang tua/dokter/polisi secara imajinatif.<br>
3. <strong>Game Stage (Tahap Siap Bertindak - Pernyataan 2 Benar):</strong> Memahami peran diri dan peran rekan tim berdasarkan aturan permainan.<br>
4. <strong>Generalized Other (Tahap Kedewasaan Sosial - Pernyataan 3 Salah):</strong> Individu menginternalisasi nilai, norma, dan ekspektasi masyarakat luas sebagai warga negara yang bertanggung jawab.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`,
    kode: "25SOS-PRED4-005"
  },

  // 6. Perilaku Menyimpang: Teori Labeling (PG)
  {
    id: 6,
    elemen: "Penyimpangan & Pengendalian Sosial",
    subelemen: "Teori Penyimpangan Sosial (Edwin Lemert & Howard Becker)",
    indikator: "Menganalisis mekanisme Teori Labeling dalam memperparah penyimpangan sekunder remaja.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang pelajar pernah satu kali terlibat aksi perkelahian antarsekolah. Pasca-kejadian tersebut, pihak guru dan warga lingkungan mencapnya sebagai "anak berandalan nakal yang tidak punya masa depan". Akibat cap negatif tersebut melekat secara sosial dan dijauhi teman-temannya, ia akhirnya putus sekolah dan bergabung dengan kelompok geng kriminal jalanan.
</p>
<p class="font-semibold text-slate-900 mb-2">
Teori sosiologi yang paling tepat untuk menjelaskan proses transformasi dari penyimpangan primer menjadi penyimpangan sekunder akibat cap sosial tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Teori Anomi (Emile Durkheim)" },
      { id: "B", text: "Teori Sosialisasi Tidak Sempurna" },
      { id: "C", text: "Teori Pemberian Cap / Julukan (Labeling Theory)" },
      { id: "D", text: "Teori Diferensiasi Asosiasi (Edwin Sutherland)" },
      { id: "E", text: "Teori Konflik Kelas (Karl Marx)" }
    ],
    kunci: "C",
    pembahasan: `<strong>Analisis Teori Labeling (Edwin Lemert &amp; Howard Becker):</strong><br>
Teori Labeling menyatakan bahwa penyimpangan bukan melekat pada sifat intrinsik suatu perbuatan, melainkan konsekuensi dari penerapan aturan dan cap/julukan yang dilekatkan oleh masyarakat kepada si pelaku.<br>
1. <strong>Penyimpangan Primer:</strong> Pelanggaran awal yang bersifat sementara.<br>
2. <strong>Penyimpangan Sekunder:</strong> Ketika masyarakat memberi stigma/label permanen ("anak nakal/kriminal"), individu tersebut menginternalisasi label tersebut sebagai identitas barunya (*self-fulfilling prophecy*) dan melanjutkan perilaku menyimpang yang lebih berat.<br><br>
<strong>Kunci Jawaban: C (Teori Labeling)</strong>`,
    kode: "25SOS-PRED4-006"
  },

  // 7. Pengendalian Sosial: Preventif vs Represif (PG)
  {
    id: 7,
    elemen: "Pengendalian Sosial",
    subelemen: "Sifat & Cara Pengendalian Sosial",
    indikator: "Membedakan sifat pengendalian sosial preventif, represif, dan kuratif dalam ketertiban masyarakat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Menjelang libur panjang akhir tahun, aparat kepolisian lalu lintas mengadakan penyuluhan tertib berkendara di sekolah-sekolah serta memasang spanduk peringatan batas kecepatan dan larangan penggunaan knalpot bising di titik-titik rawan kecelakaan.
</p>
<p class="font-semibold text-slate-900 mb-2">
Ditinjau dari waktu dan sifat pelaksanaannya, upaya pengendalian sosial yang dilakukan oleh kepolisian tersebut bersifat...
</p>`,
    options: [
      { id: "A", text: "Represif, karena menjatuhkan hukuman denda di tempat bagi pelanggar" },
      { id: "B", text: "Koersif, karena menggunakan kekerasan fisik dan ancaman senjata" },
      { id: "C", text: "Preventif, karena dilakukan sebelum terjadinya pelanggaran untuk mencegah timbulnya gangguan ketertiban" },
      { id: "D", text: "Kuratif, karena menyembuhkan trauma korban kecelakaan lalu lintas" },
      { id: "E", text: "Ajudikasi, karena diselesaikan melalui proses persidangan pengadilan negeri" }
    ],
    kunci: "C",
    pembahasan: `<strong>Sifat Pengendalian Sosial:</strong><br>
&bull; <strong>Pengendalian Preventif:</strong> Tindakan antisipasi yang dilakukan <em>sebelum</em> pelanggaran terjadi dengan tujuan mencegah timbulnya penyimpangan (contoh: sosialisasi, rambu peringatan, nasihat orang tua).<br>
&bull; <strong>Pengendalian Represif:</strong> Tindakan penindakan yang dilakukan <em>setelah</em> pelanggaran terjadi agar keadaan pulih seperti semula (contoh: penilangan, penahanan, vonis penjara).<br>
&bull; <strong>Pengendalian Kuratif:</strong> Upaya pemulihan/rehabilitasi bagi pelaku penyimpangan agar dapat kembali beradaptasi normal di masyarakat.<br><br>
<strong>Kunci Jawaban: C (Preventif)</strong>`,
    kode: "25SOS-PRED4-007"
  },

  // 8. Bentuk Akomodasi Konflik (Benar/Salah + Tabel)
  {
    id: 8,
    elemen: "Konflik & Resolusi Konflik Sosial",
    subelemen: "Bentuk-Bentuk Akomodasi Sosial",
    indikator: "Mengevaluasi perbedaan bentuk akomodasi mediasi, arbitrase, konsiliasi, dan ajudikasi.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Untuk meredakan perselisihan dan menghentikan kekerasan fisik dalam konflik sosial, masyarakat menggunakan beragam metode akomodasi:
</p>
<div class="my-3 overflow-x-auto">
  <table class="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-amber-600 text-white font-semibold">
      <tr>
        <th class="p-2.5 border border-amber-700">Bentuk Akomodasi</th>
        <th class="p-2.5 border border-amber-700">Peran Pihak Ketiga</th>
        <th class="p-2.5 border border-amber-700">Kekuatan Keputusan</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 font-bold border border-slate-200">Mediasi</td>
        <td class="p-2 border border-slate-200">Pihak ketiga netral bertindak sebagai penasihat/fasilitator</td>
        <td class="p-2 border border-slate-200">Tidak mengikat secara hukum, keputusan akhir di tangan pihak berkonflik</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-2 font-bold border border-slate-200">Arbitrase</td>
        <td class="p-2 border border-slate-200">Pihak ketiga netral yang ditunjuk atau memiliki kedudukan lebih tinggi</td>
        <td class="p-2 border border-slate-200">Mengikat dan wajib dipatuhi oleh kedua belah pihak yang bersengketa</td>
      </tr>
      <tr>
        <td class="p-2 font-bold border border-slate-200">Ajudikasi</td>
        <td class="p-2 border border-slate-200">Majelis Hakim di lembaga peradilan formal</td>
        <td class="p-2 border border-slate-200">Ketetapan vonis hukum resmi berkekuatan hukum tetap</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan berikut berdasarkan mekanisme resolusi konflik:
</p>`,
    items: [
      {
        pernyataan: "Perbedaan mendasar antara Mediasi dan Arbitrase terletak pada wewenang pihak ketiga: dalam mediasi keputusan pihak ketiga tidak mengikat, sedangkan dalam arbitrase keputusan pihak ketiga bersifat mengikat kedua pihak.",
        kunci: "Benar",
        penjelasan: "Mediator hanya memfasilitasi dialog, sedangkan arbiter diberi mandat memutus sengketa."
      },
      {
        pernyataan: "Penyelesaian sengketa hak paten atau sengketa batas tanah antarwarga di meja sidang pengadilan negeri merupakan contoh nyata bentuk akomodasi Konsiliasi.",
        kunci: "Salah",
        penjelasan: "Penyelesaian perselisihan melalui jalur persidangan resmi di pengadilan disebut Ajudikasi (adjudication), bukan konsiliasi."
      },
      {
        pernyataan: "Bentuk akomodasi Stalemate terjadi ketika kedua belah pihak yang bertikai memiliki kekuatan seimbang sehingga konflik terhenti dengan sendirinya tanpa ada pihak yang menang atau kalah.",
        kunci: "Benar",
        penjelasan: "Stalemate adalah kondisi kebuntuan di mana kekuatan seimbang mencegah kelanjutan perang (contoh ketegangan perbatasan AS-Uni Soviet masa Perang Dingin)."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Bentuk-Bentuk Akomodasi Konflik:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Pada mediasi, pihak ketiga netral memberi masukan non-binding. Pada arbitrase, pihak ketiga mengambil keputusan yang mengikat (*binding*).<br>
2. <strong>Pernyataan 2 (Salah):</strong> Penyelesaian di meja sidang peradilan adalah <strong>Ajudikasi</strong>. Konsiliasi menggunakan lembaga/pertemuan tertentu untuk mempertemukan keinginan pihak yang berselisih.<br>
3. <strong>Pernyataan 3 (Benar):</strong> Stalemate adalah berhentinya perseteruan karena kekuatan seimbang di titik jenuh.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`,
    kode: "25SOS-PRED4-008"
  },

  // 9. Kelompok Sosial: Paguyuban vs Patembayan (PG + Tabel)
  {
    id: 9,
    elemen: "Kelompok Sosial di Masyarakat",
    subelemen: "Klasifikasi Ferdinand Tonnies (Gemeinschaft & Gesellschaft)",
    indikator: "Membedakan karakteristik hubungan sosial kelompok paguyuban dan patembayan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sosiolog klasik Ferdinand Tönnies membedakan ikatan kelompok sosial ke dalam dua tipe: <strong>Gemeinschaft (Paguyuban)</strong> dan <strong>Gesellschaft (Patembayan)</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Karakteristik hubungan sosial yang merupakan ciri utama dari kelompok <strong>Patembayan (Gesellschaft)</strong> adalah...
</p>`,
    options: [
      { id: "A", text: "Hubungan bersifat intim, privat, eksklusif, dan didasari oleh ikatan batin alamiah yang kekal sejak lahir (seperti keluarga besar dan trah keturunan)" },
      { id: "B", text: "Hubungan bersifat kontraktual, formal, impersonal, berorientasi pamrih/laba, dan dibatasi oleh jangka waktu tertentu (seperti serikat buruh perusahaan atau ikatan direksi perseroan terbatas)" },
      { id: "C", text: "Seluruh anggota dipersatukan oleh kesamaan garis darah nenek moyang (genealogis)" },
      { id: "D", text: "Hubungan sosial berlangsung tanpa pamrih kebendaan dan diikat oleh kedekatan geografis tempat tinggal sekampung" },
      { id: "E", text: "Struktur kepemimpinan ditentukan secara turun-temurun berdasarkan kasta bangsawan" }
    ],
    kunci: "B",
    pembahasan: `<strong>Perbandingan Gemeinschaft vs Gesellschaft (Ferdinand Tonnies):</strong><br>
&bull; <strong>Gemeinschaft (Paguyuban):</strong> Ikatan batin alamiah, intim, pribadi, dan kekal. Dibagi menjadi: (1) *by blood* (keluarga/ikatan darah), (2) *by place* (rukun tetangga/desa), (3) *by mind* (kesamaan ideologi/keyakinan).<br>
&bull; <strong>Gesellschaft (Patembayan - Pilihan B):</strong> Ikatan sosial modern yang bersifat mekanis, formal, kontraktual, berbasis kepentingan utilitas/ekonomi (*vested interest*), dan berlangsung untuk waktu tertentu (contoh: perseroan terbatas, serikat pekerja, asosiasi pedagang).<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-009"
  },

  // 10. Mobilitas Sosial: Saluran Mobilitas (PG)
  {
    id: 10,
    elemen: "Mobilitas Sosial",
    subelemen: "Saluran Mobilitas Sosial Vertikal (Social Elevator)",
    indikator: "Mengidentifikasi peran lembaga pendidikan formal sebagai saluran mobilitas vertikal naik (social climbing).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang anak dari keluarga buruh tani miskin di pedesaan berhasil menempuh pendidikan tinggi melalui beasiswa bidikmisi hingga lulus cumlaude dari fakultas kedokteran. Setelah menjadi dokter spesialis bedah ternama di rumah sakit rujukan nasional, status sosial ekonomi dan wibawa keluarganya di masyarakat melonjak tinggi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Fenomena tersebut menunjukkan terjadinya mobilitas sosial... melalui saluran mobilitas utama berupa...
</p>`,
    options: [
      { id: "A", text: "Mobilitas horizontal antargenerasi; lembaga partai politik" },
      { id: "B", text: "Mobilitas vertikal naik (social climbing); lembaga pendidikan formal (social elevator)" },
      { id: "C", text: "Mobilitas intragenerasi menurun (social sinking); lembaga keagamaan" },
      { id: "D", text: "Mobilitas lateral geografis; organisasi profesi ketenagakerjaan" },
      { id: "E", text: "Mobilitas struktural semu; dinas militer sukarela" }
    ],
    kunci: "B",
    pembahasan: `<strong>Saluran Mobilitas Sosial (Pitirim A. Sorokin):</strong><br>
1. <strong>Mobilitas Vertikal Naik (Social Climbing):</strong> Perubahan status sosial seseorang dari lapisan bawah ke lapisan sosial yang lebih tinggi dan terhormat.<br>
2. <strong>Lembaga Pendidikan Formal (*Social Elevator*):</strong> Pendidikan merupakan saluran mobilitas vertikal paling terbuka dan demokratis, karena memungkinkan individu meraih keahlian profesional dan jabatan kerja bergengsi tanpa memandang latar belakang kasta orang tuanya.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-010"
  },

  // 11. Stratifikasi Sosial Terbuka vs Tertutup (MCMA)
  {
    id: 11,
    elemen: "Struktur Sosial & Diferensiasi",
    subelemen: "Sistem Pelapisan Sosial (Stratifikasi)",
    indikator: "Menganalisis karakteristik stratifikasi sosial terbuka pada masyarakat modern meritokratis.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sistem pelapisan sosial dalam sosiologi dibedakan menjadi stratifikasi sosial tertutup (closed stratification) dan stratifikasi sosial terbuka (open stratification).
</p>
<p class="font-semibold text-slate-900 mb-2">
Pernyataan yang merupakan karakteristik dari <strong>Stratifikasi Sosial Terbuka</strong> adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Kedudukan seseorang pada lapisan sosial ditentukan secara mutlak oleh garis kelahiran/keturunan darah bangsawan (ascribed status)" },
      { id: "B", text: "Setiap anggota masyarakat memiliki peluang dan kesempatan yang adil untuk berpindah ke lapisan sosial yang lebih tinggi melalui prestasi, kerja keras, dan pendidikan (achieved status)" },
      { id: "C", text: "Diterapkan pada masyarakat industri modern yang menghargai kompetensi, profesionalisme, dan sistem meritokrasi" },
      { id: "D", text: "Terdapat larangan perkawinan antarlapisan sosial yang berbeda derajat demi menjaga kemurnian kasta" },
      { id: "E", text: "Seseorang yang berada di lapisan atas dapat mengalami penurunan status ke lapisan bawah (social sinking) akibat kebangkrutan ekonomi atau pelanggaran hukum" }
    ],
    kunci: ["B", "C", "E"],
    pembahasan: `<strong>Ciri Stratifikasi Terbuka vs Tertutup:</strong><br>
&bull; <strong>Stratifikasi Terbuka (Pernyataan B, C, dan E Benar):</strong> Lapisan sosial bersifat dinamis dan fleksibel. Individu dapat naik kelas (*social climbing*) dengan prestasi (*achieved status*) atau turun kelas (*social sinking*). Menjadi basis masyarakat industri modern.<br>
&bull; <strong>Stratifikasi Tertutup (Pernyataan A &amp; D Salah):</strong> Kedudukan kaku dan permanen berdasarkan kelahiran (*ascribed status*), mobilitas vertikal hampir mustahil terjadi (seperti sistem kasta tradisional atau feodalisme kuno).<br><br>
<strong>Kunci Jawaban: B, C, dan E</strong>`,
    kode: "25SOS-PRED4-011"
  },

  // 12. Diferensiasi Sosial (PG)
  {
    id: 12,
    elemen: "Struktur Sosial & Diferensiasi",
    subelemen: "Diferensiasi Sosial (Horizontal)",
    indikator: "Membedakan hakikat diferensiasi sosial (horizontal) dan stratifikasi sosial (vertikal).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam suatu masyarakat majemuk, penduduk terbagi ke dalam kelompok-kelompok suku bangsa (Jawa, Sunda, Batak, Minang, Bugis, Dayak, Papua) dan beragam pemeluk agama (Islam, Kristen Protestan, Katolik, Hindu, Buddha, Khonghucu).
</p>
<p class="font-semibold text-slate-900 mb-2">
Pengelompokan masyarakat tersebut dalam kajian sosiologi dikategorikan sebagai <strong>Diferensiasi Sosial</strong> karena...
</p>`,
    options: [
      { id: "A", text: "Perbedaan tersebut membentuk tingkatan hierarki kekuasaan dari kasta penguasa hingga budak" },
      { id: "B", text: "Perbedaan didasarkan pada parameter horizontal tanpa membedakan derajat tinggi-rendah, di mana setiap suku dan agama dipandang memiliki martabat yang setara di mata hukum" },
      { id: "C", text: "Suku dengan jumlah populasi terbanyak berhak memonopoli peradilan adat" },
      { id: "D", text: "Merupakan bentuk diskriminasi formal yang dilegalkan oleh pemerintah daerah" },
      { id: "E", text: "Seluruh anggota kelompok diwajibkan melebur menjadi satu suku tunggal" }
    ],
    kunci: "B",
    pembahasan: `<strong>Diferensiasi Sosial vs Stratifikasi Sosial:</strong><br>
&bull; <strong>Diferensiasi Sosial:</strong> Klasifikasi kemajemukan masyarakat secara <strong>horizontal/sejajar</strong> berdasarkan ciri fisik (ras), sosial-budaya (suku bangsa, klan, marga), dan agama. Tidak ada tingkatan lebih tinggi atau lebih mulia (*non-hierarchical*).<br>
&bull; <strong>Stratifikasi Sosial:</strong> Pembedaan masyarakat secara <strong>vertikal/hierarkis</strong> bertingkat berdasarkan kekayaan, kekuasaan, kehormatan, dan ilmu pengetahuan.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-012"
  },

  // 13. Teori Perubahan Sosial (PG + Diagram SVG Teori Siklus vs Linier)
  {
    id: 13,
    elemen: "Perubahan Sosial & Globalisasi",
    subelemen: "Teori-Teori Perubahan Sosial",
    indikator: "Membedakan konsep Teori Siklus (Oswald Spengler & Toynbee) dengan Teori Perkembangan Linier (Auguste Comte).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Para sosiolog merumuskan arah dan pola pergerakan perubahan masyarakat melalui dua model utama: Teori Siklus dan Teori Linier (Evolusi).
</p>
<div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
  <div class="text-xs font-semibold text-slate-600 mb-2">Perbandingan Pola Arah Perubahan Sosial:</div>
  <svg viewBox="0 0 500 130" class="w-full max-w-lg mx-auto bg-white border border-slate-200 rounded-lg shadow-xs">
    <!-- Teori Siklus -->
    <text x="70" y="25" font-size="11" font-weight="bold" fill="#0f172a">A. Teori Siklus (Berulang)</text>
    <path d="M 50 85 A 35 35 0 1 1 120 85 A 35 35 0 1 1 50 85" fill="none" stroke="#d97706" stroke-width="2.5" />
    <text x="65" y="55" font-size="9" fill="#b45309">Kelahiran &rarr;</text>
    <text x="125" y="88" font-size="9" fill="#b45309">Kejayaan &rarr;</text>
    <text x="65" y="115" font-size="9" fill="#b45309">Keruntuhan</text>

    <!-- Pembatas -->
    <line x1="220" y1="15" x2="220" y2="115" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />

    <!-- Teori Linier -->
    <text x="280" y="25" font-size="11" font-weight="bold" fill="#0f172a">B. Teori Linier (Maju Bertahap)</text>
    <line x1="260" y1="100" x2="440" y2="40" stroke="#0284c7" stroke-width="3" />
    <polygon points="445,38 435,36 438,45" fill="#0284c7" />
    <text x="260" y="118" font-size="10" fill="#475569">Primitif</text>
    <text x="340" y="90" font-size="10" fill="#475569">Tradisional</text>
    <text x="430" y="30" font-size="10" font-weight="bold" fill="#0369a1">Modern</text>
  </svg>
</div>
<p class="font-semibold text-slate-900 mb-2">
Inti pandangan dari <strong>Teori Siklus</strong> dalam memahami perjalanan peradaban masyarakat adalah...
</p>`,
    options: [
      { id: "A", text: "Masyarakat bergerak lurus tanpa henti menuju satu titik akhir kemajuan teknologi mutlak yang serba sempurna" },
      { id: "B", text: "Perubahan sosial bergerak menyerupai roda berputar yang berulang; suatu peradaban akan lahir, tumbuh mekar mencapai kejayaan, mengalami kemunduran/keruntuhan, dan kemudian digantikan oleh peradaban baru dengan pola berulang" },
      { id: "C", text: "Perubahan hanya dipicu oleh pertarungan senjata antara kaum majikan borjuis dan kaum buruh tertindas" },
      { id: "D", text: "Masyarakat primitif tidak akan pernah dapat berubah menjadi masyarakat perkotaan" },
      { id: "E", text: "Setiap perubahan sosial selalu direncanakan secara sempurna oleh institusi perbankan dunia" }
    ],
    kunci: "B",
    pembahasan: `<strong>Teori Siklus vs Teori Linier:</strong><br>
&bull; <strong>Teori Siklus (Oswald Spengler, Arnold Toynbee, Pitirim Sorokin):</strong> Perubahan sosial terjadi secara bertahap menyerupai siklus hidup organisme: lahir, masa kanak-kanak, dewasa jaya, masa tua renta, dan runtuh/mati. Apa yang terjadi hari ini pernah terjadi di masa lampau dan akan berulang di masa mendatang (contoh pasang surut imperium Romawi, Sriwijaya, Majapahit, atau tren busana mode).<br>
&bull; <strong>Teori Linier (Evolusi Auguste Comte, Herbert Spencer):</strong> Perubahan bergerak progresif maju satu arah dari tahap sederhana (teologis) &rarr; transisi (metafisik) &rarr; maju (positivistik).<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-013"
  },

  // 14. Dampak Perubahan Sosial: Cultural Lag (PG)
  {
    id: 14,
    elemen: "Perubahan Sosial & Globalisasi",
    subelemen: "Kesenjangan Budaya (Cultural Lag)",
    indikator: "Mengidentifikasi fenomena ketimpangan budaya material dan non-material (cultural lag) menurut William F. Ogburn.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pemerintah membangun jaringan jalan tol layang bebas hambatan yang canggih dan modern. Namun, di beberapa ruas jalan masih sering dijumpai pengemudi yang membuang sampah plastik sembarangan dari jendela mobil, berhenti di bahu jalan untuk berfoto swafoto, serta menerobos antrean gerbang tol otomatis tanpa etika berkendara.
</p>
<p class="font-semibold text-slate-900 mb-2">
Fenomena ketidaksiapan mentalitas masyarakat dalam mengimbangi pesatnya kemajuan infrastruktur fisik teknologi tersebut disebut...
</p>`,
    options: [
      { id: "A", text: "Cultural Shock (keguncangan budaya sesaat)" },
      { id: "B", text: "Cultural Lag (kesenjangan/ketertinggalan budaya)" },
      { id: "C", text: "Anomi sosial tanpa norma" },
      { id: "D", text: "Akulturasi budaya timur" },
      { id: "E", text: "Asimilasi struktural" }
    ],
    kunci: "B",
    pembahasan: `<strong>Cultural Lag (William F. Ogburn):</strong><br>
Cultural Lag (ketertinggalan budaya) terjadi ketika unsur kebudayaan material (teknologi fisik, gawai canggih, jalan tol, internet) berkembang sangat cepat, sedangkan kebudayaan non-material (sikap mental, nilai norma, etika kesadaran hukum, kedisiplinan) lambat menyesuaikan diri.<br>
Akibatnya timbul kesenjangan sosial perilaku yang tidak serasi dengan teknologi yang digunakannya.<br><br>
<strong>Kunci Jawaban: B (Cultural Lag)</strong>`,
    kode: "25SOS-PRED4-014"
  },

  // 15. Globalisasi: Westernisasi vs Modernisasi (Benar/Salah)
  {
    id: 15,
    elemen: "Perubahan Sosial & Globalisasi",
    subelemen: "Modernisasi, Westernisasi, dan Konsumerisme",
    indikator: "Mengevaluasi perbedaan esensial antara modernisasi dan westernisasi.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam era globalisasi informasi, masyarakat sering mencampuradukkan antara konsep Modernisasi dan Westernisasi. Tentukan kebenaran dari masing-masing pernyataan perbandingan berikut:
</p>`,
    items: [
      {
        pernyataan: "Modernisasi adalah proses perubahan cara berpikir dari irasional-tradisional menjadi rasional, efisien, berorientasi ilmu pengetahuan, dan memanfaatkan teknologi maju tanpa harus meniru gaya hidup budaya barat.",
        kunci: "Benar",
        penjelasan: "Modernisasi berfokus pada rasionalitas berpikir, produktivitas, dan etos kerja objektif."
      },
      {
        pernyataan: "Westernisasi adalah proses peniruan gaya hidup, tata cara pergaulan, mode busana, dan kebiasaan masyarakat dunia barat secara membabi buta tanpa filter nilai budaya luhur bangsa.",
        kunci: "Benar",
        penjelasan: "Westernisasi menyerap aspek eksternal budaya barat seperti konsumerisme dan individualisme bebas."
      },
      {
        pernyataan: "Seseorang yang memegang teguh nilai kearifan lokal gotong royong dan berakhlak mulia mustahil dapat menjadi manusia modern.",
        kunci: "Salah",
        penjelasan: "Modernitas tidak bertentangan dengan moralitas dan kearifan lokal; manusia modern dapat berpikir ilmiah sekaligus berkarakter budaya bangsa yang kuat."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Modernisasi vs Westernisasi:</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Modernisasi menitikberatkan rasionalitas, efisiensi waktu, dan penguasaan sains teknologi universal.<br>
2. <strong>Pernyataan 2 (Benar):</strong> Westernisasi adalah imitasi kultural gaya hidup hedonis/individualis barat.<br>
3. <strong>Pernyataan 3 (Salah):</strong> Kearifan lokal gotong royong dan moralitas justru menjadi filter pelindung identitas bangsa di era modern.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`,
    kode: "25SOS-PRED4-015"
  },

  // 16. Lembaga Sosial: Fungsi Manifes vs Laten (PG)
  {
    id: 16,
    elemen: "Lembaga Sosial",
    subelemen: "Fungsi Manifes & Fungsi Laten Lembaga Sosial",
    indikator: "Membedakan fungsi manifes (disadari) dan fungsi laten (tersembunyi) pada lembaga pendidikan formal.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Lembaga pendidikan formal (sekolah dan perguruan tinggi) memiliki fungsi manifes (fungsi nyata yang disadari dan dikehendaki secara sengaja) serta fungsi laten (dampak tersembunyi yang tidak disadari secara langsung).
</p>
<p class="font-semibold text-slate-900 mb-2">
Berikut ini yang merupakan <strong>Fungsi Laten</strong> dari lembaga pendidikan formal adalah...
</p>`,
    options: [
      { id: "A", text: "Mentransfer ilmu pengetahuan, keterampilan vokasional, dan literasi dasar bagi peserta didik" },
      { id: "B", text: "Menanamkan nilai-nilai kepatuhan terhadap norma hukum dan tata tertib kewarganegaraan" },
      { id: "C", text: "Memperpanjang masa ketergantungan ekonomi anak pada orang tua serta menunda usia kedewasaan pernikahan" },
      { id: "D", text: "Mengembangkan bakat dan potensi kecerdasan intelektual siswa demi masa depan" },
      { id: "E", text: "Mempersiapkan lulusan untuk terjun bersaing di pasar bursa tenaga kerja" }
    ],
    kunci: "C",
    pembahasan: `<strong>Fungsi Manifes vs Fungsi Laten Lembaga Pendidikan:</strong><br>
&bull; <strong>Fungsi Manifes (Disadari &amp; Dikehendaki - Pilihan A, B, D, E):</strong> Mentransfer ilmu, melatih keterampilan kerja, mengembangkan kepribadian, melestarikan kebudayaan.<br>
&bull; <strong>Fungsi Laten (Tidak Disadari / Efek Sampingan Tersembunyi - Pilihan C):</strong><br>
1. Mengurangi kendali orang tua karena anak menghabiskan sebagian besar waktu di lingkungan sekolah.<br>
2. <strong>Menunda usia kedewasaan dan pernikahan dini</strong> (karena masa studi panjang).<br>
3. Memperpanjang ketergantungan finansial anak kepada orang tua selama masa kuliah.<br>
4. Menjadi wadah pembangkangan kelompok sebaya (peer group).<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25SOS-PRED4-016"
  },

  // 17. Lembaga Keluarga: Fungsi Afeksi & Sosialisasi (PG)
  {
    id: 17,
    elemen: "Lembaga Sosial",
    subelemen: "Fungsi-Fungsi Pokok Lembaga Keluarga",
    indikator: "Menganalisis kegagalan fungsi afeksi dan pengawasan keluarga pada maraknya kenakalan remaja.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Fenomena remaja yang terlibat pergaulan bebas dan penyalahgunaan zat terlarang sering kali berakar dari situasi rumah tangga yang mengalami perceraian atau orang tua yang terlalu sibuk bekerja sehingga tidak pernah meluangkan waktu untuk mendengarkan keluh kesah batin sang anak.
</p>
<p class="font-semibold text-slate-900 mb-2">
Fungsi pokok lembaga keluarga yang terabaikan pada kasus tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Fungsi reproduksi biologis" },
      { id: "B", text: "Fungsi ekonomi konsumtif" },
      { id: "C", text: "Fungsi afeksi (kehangatan kasih sayang dan perlindungan emosional) serta fungsi sosialisasi primer" },
      { id: "D", text: "Fungsi penentuan gelar kebangsawanan" },
      { id: "E", text: "Fungsi peradilan hukum pidana" }
    ],
    kunci: "C",
    pembahasan: `<strong>Fungsi Lembaga Keluarga:</strong><br>
Keluarga adalah unit sosialisasi pertama dan utama (*primary socialization*).<br>
Kegagalan memberikan kehangatan batin, perhatian tulus, dan rasa aman emosional merupakan disfungsi dari <strong>Fungsi Afeksi</strong>. Tanpa ikatan afeksi yang kuat di rumah, anak mencari pengakuan semu dan pelarian emosional ke kelompok sebaya menyimpang di luar rumah.<br><br>
<strong>Kunci Jawaban: C</strong>`,
    kode: "25SOS-PRED4-017"
  },

  // 18. Integrasi Sosial Masyarakat Multikultural (MCMA)
  {
    id: 18,
    elemen: "Integrasi Sosial & Masyarakat Multikultural",
    subelemen: "Bentuk & Faktor Pendorong Integrasi Sosial",
    indikator: "Mengidentifikasi faktor pendorong terwujudnya integrasi sosial pada masyarakat multikultural Indonesia.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Integrasi sosial merupakan proses penyesuaian unsur-unsur yang berbeda dalam masyarakat majemuk hingga membentuk satu kesatuan yang harmonis dan padu.
</p>
<p class="font-semibold text-slate-900 mb-2">
Faktor-faktor yang mendorong percepatan dan penguatan <strong>Integrasi Sosial</strong> di Indonesia adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Adanya konsensus bersama mengenai nilai-nilai dasar bangsa yang terangkum dalam Pancasila dan semboyan Bhinneka Tunggal Ika" },
      { id: "B", text: "Sikap terbuka (toleransi) terhadap kebudayaan lain dan kesediaan untuk saling menghargai perbedaan latar belakang" },
      { id: "C", text: "Tumbuhnya primordialisme sempit dan etnosentrisme yang menganggap sukunya sendiri paling unggul dibanding suku lain" },
      { id: "D", text: "Tingginya intensitas perkawinan campuran antaretnis (amalgamasi) yang mempererat jalinan kekerabatan kultural" },
      { id: "E", text: "Adanya musuh bersama dari luar yang mengancam keutuhan dan kedaulatan tanah air" }
    ],
    kunci: ["A", "B", "D", "E"],
    pembahasan: `<strong>Faktor Pendorong Integrasi Sosial:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Konsensus nilai dasar filosofis (Pancasila) menyatukan keragaman.<br>
&bull; <strong>Pernyataan B (Benar):</strong> Sikap toleransi menghargai martabat sesama warga.<br>
&bull; <strong>Pernyataan D (Benar):</strong> Perkawinan campur (amalgamasi) menyatukan dua keluarga besar lintas etnis.<br>
&bull; <strong>Pernyataan E (Benar):</strong> Ancaman dari luar memperkuat rasa nasionalisme dan solidaritas bersama.<br>
&bull; <strong>Pernyataan C (Salah):</strong> Etnosentrisme dan primordialisme justru menjadi faktor penghambat (disintegrasi).<br><br>
<strong>Kunci Jawaban: A, B, D, dan E</strong>`,
    kode: "25SOS-PRED4-018"
  },

  // 19. Penelitian Sosial: Metode Pengumpulan Data (PG)
  {
    id: 19,
    elemen: "Metode Penelitian Sosial",
    subelemen: "Instrumen & Teknik Pengumpulan Data",
    indikator: "Menentukan keunggulan metode kuesioner/angket dalam penelitian kuantitatif pada populasi besar.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang peneliti sosiologi ingin meneliti tingkat literasi digital pada 1.200 siswa SMA se-Kabupaten. Karena wilayah penelitian sangat luas serta keterbatasan waktu dan tenaga lapangan, peneliti memilih menyebarkan daftar pertanyaan tertulis dengan opsi jawaban berskala Likert melalui formulir daring (Google Form).
</p>
<p class="font-semibold text-slate-900 mb-2">
Keunggulan utama dari metode pengumpulan data menggunakan <strong>Angket / Kuesioner</strong> tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Dapat menggali data alamiah batiniah terdalam dari responden yang buta aksara" },
      { id: "B", text: "Mampu menjangkau jumlah sampel responden yang sangat besar dalam waktu singkat serta biaya yang relatif murah dan efisien" },
      { id: "C", text: "Menjamin bahwa 100% seluruh kuesioner pasti dikembalikan tepat waktu dengan jawaban jujur" },
      { id: "D", text: "Memungkinkan peneliti mengamati gestur tubuh dan mimik muka responden secara langsung" },
      { id: "E", text: "Tidak memerlukan pengujian validitas dan reliabilitas instrumen statistik" }
    ],
    kunci: "B",
    pembahasan: `<strong>Keunggulan Metode Angket / Kuesioner:</strong><br>
1. <strong>Efisien Skala Besar:</strong> Dapat disebarkan kepada ribuan responden di berbagai lokasi geografis sekaligus dalam waktu singkat.<br>
2. <strong>Standarisasi Data:</strong> Seluruh responden menerima pertanyaan dan pilihan skala yang identik sehingga mempermudah tabulasi statistik kuantitatif.<br>
3. <strong>Menjaga Kerahasiaan (Anonimitas):</strong> Responden lebih leluasa memberikan jawaban tanpa canggung karena identitas pribadi dapat dirahasiakan.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-019"
  },

  // 20. Teknik Penarikan Sampel (Sampling) (PG)
  {
    id: 20,
    elemen: "Metode Penelitian Sosial",
    subelemen: "Teknik Penarikan Sampel (Sampling)",
    indikator: "Mengidentifikasi penggunaan teknik Stratified Random Sampling pada populasi berstrata jenjang pendidikan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam meneliti pengaruh kebijakan upah minimum terhadap tingkat tabungan pekerja pabrik tekstil, peneliti membagi populasi karyawan ke dalam kelompok berjenjang: buruh harian lepas, operator mesin terampil, supervisor teknis, dan manajer divisi. Dari masing-masing jenjang tersebut kemudian diambil perwakilan sampel secara acak proporsional.
</p>
<p class="font-semibold text-slate-900 mb-2">
Teknik penarikan sampel yang diterapkan oleh peneliti sosiologi tersebut adalah...
</p>`,
    options: [
      { id: "A", text: "Snowball Sampling (sampel bola salju)" },
      { id: "B", text: "Stratified Random Sampling (sampel acak berstrata proporsional)" },
      { id: "C", text: "Accidental Sampling (sampel kebetulan)" },
      { id: "D", text: "Purposive Sampling berdasarkan selera pribadi peneliti" },
      { id: "E", text: "Cluster Sampling berdasarkan zona garis bujur" }
    ],
    kunci: "B",
    pembahasan: `<strong>Teknik Stratified Random Sampling:</strong><br>
Teknik ini digunakan jika populasi bersifat <strong>heterogen dan memiliki tingkatan berjenjang (strata)</strong> tertentu (misal: tingkat pendidikan SD, SMP, SMA, PT; atau golongan jabatan/penghasilan).<br>
Langkah kerjanya: populasi dipilah ke dalam sub-populasi strata yang homogen, kemudian dari tiap strata diambil sampel secara acak (*random*) agar setiap tingkatan terwakili secara adil dan representatif dalam analisis data.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-020"
  },

  // 21. Penelitian Kualitatif: Observasi Partisipan (PG)
  {
    id: 21,
    elemen: "Metode Penelitian Sosial",
    subelemen: "Metode Penelitian Kualitatif (Observasi Partisipasi)",
    indikator: "Menjelaskan esensi teknik observasi partisipan dalam studi etnografi masyarakat adat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Untuk memahami sistem kepercayaan dan ritual pelestarian hutan larangan masyarakat adat Baduy Dalam, seorang peneliti sosiologi-antropologi tinggal menetap bersama warga adat selama enam bulan, ikut serta mengenakan busana tenun putih tanpa kancing, mematuhi pantangan adat, serta mengikuti kegiatan berladang sehari-hari.
</p>
<p class="font-semibold text-slate-900 mb-2">
Metode pengumpulan data kualitatif yang diterapkan oleh peneliti tersebut dikenal sebagai...
</p>`,
    options: [
      { id: "A", text: "Eksperimen laboratorium tertutup" },
      { id: "B", text: "Observasi partisipan (participant observation)" },
      { id: "C", text: "Analisis isi kuantitatif media massa" },
      { id: "D", text: "Survei jajak pendapat telepon" },
      { id: "E", text: "Simulasi model matematika komputer" }
    ],
    kunci: "B",
    pembahasan: `<strong>Observasi Partisipan (Participant Observation):</strong><br>
Merupakan metode pengumpulan data kualitatif khas etnografi di mana peneliti <strong>terjun langsung dan ikut serta secara aktif</strong> dalam aktivitas kehidupan sehari-hari kelompok yang diteliti.<br>
Tujuannya adalah meraih perspektif emik (*insider's point of view*), yaitu memahami makna di balik nilai, simbol, dan perilaku masyarakat dari sudut pandang warga itu sendiri secara mendalam dan otentik.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-021"
  },

  // 22. Etika Penelitian Sosial (Benar/Salah)
  {
    id: 22,
    elemen: "Metode Penelitian Sosial",
    subelemen: "Etika & Kode Etik Peneliti Sosial",
    indikator: "Mengevaluasi prinsip-prinsip etika penelitian terhadap perlindungan hak dan kerahasiaan informan.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam melaksanakan penelitian sosial di lapangan, peneliti terikat oleh kode etik ilmiah yang ketat demi menghormati hak-hak subjek penelitian. Tentukan kebenaran dari masing-masing pernyataan etika berikut:
</p>`,
    items: [
      {
        pernyataan: "Prinsip Informed Consent mewajibkan peneliti untuk menjelaskan tujuan penelitian dan memperoleh persetujuan sukarela dari informan sebelum wawancara dimulai tanpa ada paksaan atau tipu muslihat.",
        kunci: "Benar",
        penjelasan: "Informed consent adalah persetujuan atas dasar pemahaman yang jelas mengenai hak informan."
      },
      {
        pernyataan: "Peneliti berhak mempublikasikan nama lengkap asli, alamat rumah, dan nomor telepon informan korban kekerasan seksual di laporan akhir tanpa perlu izin demi keterbukaan data publik.",
        kunci: "Salah",
        penjelasan: "Prinsip anonimitas (anonymity) dan kerahasiaan (confidentiality) mutlak melindungi privasi dan keselamatan korban dengan menyamarkan identitas asli menggunakan nama samaran (pseudonim)."
      },
      {
        pernyataan: "Peneliti tidak boleh memanipulasi, merekayasa, atau mengubah data lapangan demi memuaskan hipotesis awal atau kepentingan pihak sponsor penyandang dana.",
        kunci: "Benar",
        penjelasan: "Integritas ilmiah dan kejujuran data (honesty) adalah pilar fundamental metode ilmiah sosiologi."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Etika Pokok Penelitian Sosial:</strong><br>
1. <strong>Informed Consent (Pernyataan 1 Benar):</strong> Subjek penelitian berhak tahu hak dan risiko keikutsertaannya.<br>
2. <strong>Anonimitas &amp; Kerahasiaan (Pernyataan 2 Salah):</strong> Identitas informan wajib dirahasiakan, terutama menyangkut isu sensitif atau keselamatan diri subjek.<br>
3. <strong>Integritas Data (Pernyataan 3 Benar):</strong> Peneliti pantang melakukan fabrikasi (*plagiat/manipulasi*) demi membuktikan hipotesis.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`,
    kode: "25SOS-PRED4-022"
  },

  // 23. Perubahan Sosial: Faktor Internal vs Eksternal (PG)
  {
    id: 23,
    elemen: "Perubahan Sosial & Globalisasi",
    subelemen: "Faktor Penyebab Perubahan Sosial",
    indikator: "Mengklasifikasikan faktor pendorong perubahan sosial yang berasal dari dalam masyarakat (faktor internal).",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan beberapa faktor pendorong perubahan sosial berikut:
</p>
<ol class="list-decimal list-inside space-y-1.5 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3 text-xs sm:text-sm">
  <li>Penemuan baru di bidang teknologi baterai listrik (inovasi teknologi / discovery).</li>
  <li>Pertumbuhan jumlah penduduk yang sangat pesat di kawasan perkotaan.</li>
  <li>Terjadinya bencana gempa bumi tektonik dan tsunami di kawasan pesisir.</li>
  <li>Pemberontakan dan revolusi sosial menumbangkan kekuasaan rezim otoriter.</li>
  <li>Pengaruh kontak kebudayaan asing melalui film dan musik luar negeri.</li>
</ol>
<p class="font-semibold text-slate-900 mb-2">
Faktor penyebab perubahan sosial yang bersumber dari <strong>Dalam Masyarakat Sendiri (Faktor Internal)</strong> ditunjukkan oleh nomor...
</p>`,
    options: [
      { id: "A", text: "(1), (2), dan (3)" },
      { id: "B", text: "(1), (2), dan (4)" },
      { id: "C", text: "(2), (3), dan (5)" },
      { id: "D", text: "(2), (4), dan (5)" },
      { id: "E", text: "(3), (4), dan (5)" }
    ],
    kunci: "B",
    pembahasan: `<strong>Faktor Penyebab Perubahan Sosial:</strong><br>
&bull; <strong>Faktor Internal (Berasal dari Dalam Masyarakat):</strong><br>
1. Penemuan baru (*discovery/invention/innovation*) (Nomor 1).<br>
2. Bertambah atau berkurangnya jumlah penduduk (demografi) (Nomor 2).<br>
3. Pertentangan/konflik dalam masyarakat.<br>
4. Pemberontakan atau revolusi sosial (Nomor 4).<br>
&bull; <strong>Faktor Eksternal (Berasal dari Luar Masyarakat):</strong><br>
- Bencana alam lingkungan fisik (Nomor 3).<br>
- Peperangan dengan negara lain.<br>
- Pengaruh kontak kebudayaan masyarakat lain (difusi/akulturasi) (Nomor 5).<br><br>
<strong>Kunci Jawaban: B ((1), (2), dan (4))</strong>`,
    kode: "25SOS-PRED4-023"
  },

  // 24. Aksi Sosial Partisipatif & Pemberdayaan Komunitas (MCMA)
  {
    id: 24,
    elemen: "Pemberdayaan Komunitas Lokal",
    subelemen: "Strategi Pemberdayaan Berkelanjutan",
    indikator: "Menganalisis prinsip-prinsip pemberdayaan komunitas lokal berbasis kearifan lokal.",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam menanggulangi kemiskinan dan ketimpangan sosial, pendekatan pembangunan bergeser dari model bantuan karikatif (charity) menjadi program <strong>Pemberdayaan Komunitas (Community Empowerment)</strong>.
</p>
<p class="font-semibold text-slate-900 mb-2">
Prinsip-prinsip pokok yang harus diterapkan agar program pemberdayaan komunitas berjalan mandiri dan berkelanjutan adalah... (Pilihlah lebih dari satu jawaban yang benar!)
</p>`,
    options: [
      { id: "A", text: "Menempatkan masyarakat lokal sebagai subjek dan pelaku utama pembangunan, bukan sekadar objek pasif penerima bantuan" },
      { id: "B", text: "Menggali dan mendayagunakan potensi kearifan lokal serta sumber daya lokal yang telah dimiliki warga setempat" },
      { id: "C", text: "Memaksakan program seragam dari pusat tanpa memperhatikan kebutuhan spesifik budaya komunitas setempat" },
      { id: "D", text: "Membangun kemandirian masyarakat melalui pelatihan keterampilan, pendampingan manajemen usaha, dan pembentukan koperasi warga" },
      { id: "E", text: "Memberikan bantuan tunai tanpa akhir agar masyarakat senantiasa bergantung pada dana pemerintah" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Prinsip Pemberdayaan Komunitas:</strong><br>
&bull; <strong>Pernyataan A (Benar):</strong> Partisipasi aktif masyarakat sebagai subjek pembangunan.<br>
&bull; <strong>Pernyataan B (Benar):</strong> Mengoptimalkan kearifan lokal (*indigenous knowledge*) dan aset wilayah sendiri.<br>
&bull; <strong>Pernyataan D (Benar):</strong> Memberdayakan kemandirian (*capacity building*) melalui edukasi dan lembaga ekonomi warga.<br>
&bull; <strong>Pernyataan C &amp; E (Salah):</strong> Top-down sentralistik dan bantuan konsumtif tanpa pendampingan hanya melanggengkan jebakan ketergantungan.<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`,
    kode: "25SOS-PRED4-024"
  },

  // 25. Publikasi Hasil Penelitian Sosial (PG)
  {
    id: 25,
    elemen: "Metode Penelitian Sosial",
    subelemen: "Laporan & Publikasi Ilmiah",
    indikator: "Menjelaskan fungsi sosial kemanfaatan hasil laporan penelitian bagi pembuat kebijakan publik.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Setelah menyelesaikan penelitian tentang akar permasalahan tawuran pelajar di perkotaan, siswa mempresentasikan laporannya dalam diskusi panel bersama dinas pendidikan, pihak sekolah, dan perwakilan orang tua, serta menerbitkan ringkasan eksekutif kebijakan (<em>policy brief</em>).
</p>
<p class="font-semibold text-slate-900 mb-2">
Kemanfaatan utama dari publikasi hasil penelitian sosial tersebut bagi pembuat kebijakan (stakeholders) adalah...
</p>`,
    options: [
      { id: "A", text: "Dijadikan pajangan formalitas di lemari perpustakaan agar memenuhi target administratif" },
      { id: "B", text: "Menjadi rujukan ilmiah berbasis bukti nyata (evidence-based policy) dalam merumuskan program intervensi sosial yang tepat sasaran dan teruji" },
      { id: "C", text: "Membubarkan seluruh organisasi kesiswaan ekstrakurikuler di sekolah" },
      { id: "D", text: "Menghakimi secara sepihak pihak-pihak yang terlibat dalam perkelahian" },
      { id: "E", text: "Menaikkan tarif pajak daerah bagi keluarga pelajar yang bermasalah" }
    ],
    kunci: "B",
    pembahasan: `<strong>Fungsi Sosial Hasil Penelitian:</strong><br>
Penelitian sosiologi memiliki nilai terapan praktis (*applied sociology*):<br>
Hasil temuan empiris menjadi basis <strong>kebijakan publik berbasis bukti (evidence-based policy)</strong> bagi pengambil keputusan (pemerintah/sekolah) untuk merancang intervensi yang akurat, efektif, dan solutif mengatasi patologi sosial di masyarakat.<br><br>
<strong>Kunci Jawaban: B</strong>`,
    kode: "25SOS-PRED4-025"
  }
];

// Cek apakah ada tanda dolar
const rawStr = JSON.stringify(sosiologiPaket4Data);
const dollarMatches = (rawStr.match(/\$/g) || []).length;
if (dollarMatches > 0) {
  console.error(`❌ TERDETEKSI ${dollarMatches} TANDA DOLAR PADA DATASET SOSIOLOGI PAKET 4!`);
  process.exit(1);
} else {
  console.log("✅ Dataset Sosiologi Paket 4 100% BEBAS dari tanda dolar ($)!");
}

const fileContent = `// tka/data/mapel-sosiologi-paket4.js
// Bank Soal & Pembahasan Prediksi Resmi TKA Sosiologi SMA 2025/2026 (Paket 4: 25 Butir Soal Standar TKA BPPP)
// Sesuai Buku Referensi Resmi TKA Mata Pilihan 2025 Halaman 111-127
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Sosiologi SMA 2025/2026 dengan formula HTML/Unicode bersih (bebas tanda dolar) & pembahasan komprehensif

const tkaSosiologiPaket4Data = ${JSON.stringify(sosiologiPaket4Data, null, 2)};

if (typeof window !== 'undefined') {
  window.tkaSosiologiPaket4Data = tkaSosiologiPaket4Data;
  window.tkaSosiologiPackages = window.tkaSosiologiPackages || {};
  window.tkaSosiologiPackages['paket4'] = {
    id: "paket4",
    title: "Paket 4: Prediksi Resmi TKA Sosiologi SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 4 (Prediksi 2025/2026 • 25 Soal)",
    badge: "Prediksi 25 Soal",
    total: 25,
    durasiMenit: 50,
    data: tkaSosiologiPaket4Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaSosiologiPaket4Data };
}
`;

const outputPath = path.join(__dirname, '../tka/data/mapel-sosiologi-paket4.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`🎉 ${outputPath} berhasil dibuat! (25 soal)`);
