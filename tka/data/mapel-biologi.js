// tka/data/mapel-biologi.js
// Bank Soal & Pembahasan Resmi TKA Biologi SMA 2025 (27 Butir Soal Resmi BPPP Kemendikbudristek)
// Sesuai Dokumen Resmi Seleksi Masuk PTN TKA Biologi SMA 2025

const tkaBiologiPaket1Data = [
  {
    id: 1,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Klasifikasi dan Keanekaragaman Makhluk Hidup",
    indikator: "Menjelaskan faktor penyebab penurunan populasi spesies endemik Indonesia. (1)",
    kode: "25BIOKHYKMHB01SA-000000-0570",
    tipe: "mcma",
    img: "/tka/img/biologi/soal_01.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Badak Jawa (<em>Rhinoceros sondaicus</em>) adalah spesies endemik Indonesia yang kini berstatus kritis dan hanya ditemukan di Taman Nasional Ujung Kulon. Populasinya terus menurun akibat pembangunan infrastruktur yang mengganggu habitat alaminya. Keragaman genetik yang rendah meningkatkan risiko penyakit dan menurunkan peluang kelangsungan hidup keturunannya. Selain itu, gangguan manusia seperti perburuan menyebabkan perubahan perilaku yang menghambat reproduksi.
</p>
<p class="font-semibold text-slate-900 mb-2">
Dengan mencermati informasi tersebut, pernyataan manakah yang berkaitan dengan penurunan populasi Badak Jawa dan faktor penyebabnya? Klik pada setiap jawaban yang benar! Jawaban benar lebih dari satu.
</p>`,
    options: [
      { id: "A", text: "Perdagangan cula yang mengancam keberlangsungan spesies Badak Jawa." },
      { id: "B", text: "Deforestasi dan konversi lahan yang mengurangi ruang jelajah Badak Jawa." },
      { id: "C", text: "Perubahan pola migrasi yang menyebabkan distribusi populasi lebih tersebar dan sulit dilacak." },
      { id: "D", text: "Gangguan ekosistem akibat masuknya spesies lain ke Ujung Kulon sehingga meningkatkan kompetisi." },
      { id: "E", text: "Minimnya variasi genetik membuat badak menjadi sulit beradaptasi dengan lingkungan sekitar." }
    ],
    kunci: ["A", "B", "E"],
    pembahasan: `<strong>Analisis Faktor Penurunan Populasi Badak Jawa:</strong><br>
Berdasarkan stimulus wacana:<br>
1. <strong>Perdagangan cula (Perburuan liar):</strong> Teks menyebutkan <em>"gangguan manusia seperti perburuan menyebabkan perubahan perilaku yang menghambat reproduksi"</em> serta ancaman kematian langsung demi komoditas cula (Pernyataan A Benar).<br>
2. <strong>Deforestasi dan degradasi habitat:</strong> Teks menyebutkan <em>"pembangunan infrastruktur yang mengganggu habitat alaminya"</em> yang menyebabkan penyempitan ruang jelajah (Pernyataan B Benar).<br>
3. <strong>Depresi inbreeding & rendahnya variasi genetik:</strong> Teks menyebutkan <em>"Keragaman genetik yang rendah meningkatkan risiko penyakit dan menurunkan peluang kelangsungan hidup keturunannya"</em>, sehingga daya lentur adaptif terhadap seleksi alam menjadi sangat rendah (Pernyataan E Benar).<br><br>
Pernyataan C dan D tidak didukung oleh wacana (Badak Jawa tidak melakukan migrasi jarak jauh melintasi pulau, dan faktor utama bukan invasi kompetitor).<br>
<strong>Kunci Jawaban: A, B, E</strong>`
  },
  {
    id: 2,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Bakteri (Struktur & Peranan Bakteri Bagi Manusia)",
    indikator: "Menjelaskan mekanisme peran bakteri yang menguntungkan/merugikan manusia. (2)",
    kode: "25BIOKHYBAKB02SA-000000-0578",
    tipe: "pg",
    img: "/tka/img/biologi/soal_02.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Produk pangan pada era modern banyak dikemas agar tetap awet dan higienis. Salah satu contohnya adalah produk ikan awetan. Namun, beberapa kasus keracunan masih terjadi akibat bakteri <em>Clostridium botulinum</em>. Gejala keracunan yang muncul pada konsumen antara lain: masalah penglihatan, kelemahan otot, kesulitan menelan, mual, muntah, dan sakit perut. Keracunan ini dapat menyebabkan risiko kesehatan serius, termasuk gangguan sistem saraf dan bahkan kematian jika tidak ditangani dengan cepat.
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan informasi tersebut, mekanisme utama peran <em>Clostridium botulinum</em> dalam menyebabkan keracunan ikan awetan adalah ....
</p>`,
    options: [
      { id: "A", text: "menguraikan protein dan lemak dalam ikan menjadi senyawa berbahaya sehingga menimbulkan gangguan pencernaan mual dan kram perut" },
      { id: "B", text: "menghasilkan senyawa yang menghambat sinyal saraf dan kontraksi otot sehingga penglihatan terganggu dan otot melemah" },
      { id: "C", text: "menyerap komponen ikan ke dalam dinding sel bakteri untuk bertahan hidup sehingga menyebabkan gangguan pencernaan dan saraf optik" },
      { id: "D", text: "mengubah gula dan asam amino dalam ikan menjadi senyawa alkohol yang memengaruhi koordinasi dan saraf penglihatan" },
      { id: "E", text: "menghasilkan gas pada kondisi anaerob yang meningkatkan tekanan di dalam kemasan ikan sehingga memengaruhi kualitas fisik produk" }
    ],
    kunci: "B",
    pembahasan: `<strong>Mekanisme Toksisitas Toksin Botulinum:</strong><br>
<em>Clostridium botulinum</em> adalah bakteri anaerob obligat pembentuk endospora yang memproduksi <strong>neurotoksin botulinum</strong> (salah satu racun biologis paling mematikan di dunia).<br>
&bull; Neurotoksin ini memblokade pelepasan neurotransmiter <strong>asetilkolin</strong> di taut neuromuskular (<em>neuromuscular junction</em>).<br>
&bull; Akibatnya, transmisi sinyal saraf motorik menuju serabut otot terhenti total, memicu paralisis flasid (kelumpuhan otot tanpa kontraksi). Gejala awalnya berupa diplopia (penglihatan ganda), ptosis (kelopak mata layu), disfagia (sulit menelan), hingga kegagalan otot pernapasan.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 3,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Ekosistem (Interaksi Antar Komponen)",
    indikator: "Menentukan bentuk interaksi antarorganisme dalam suatu ekosistem. (3)",
    kode: "25BIOKHYEKOB03SA-000000-0367",
    tipe: "pg",
    img: "/tka/img/biologi/soal_03.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Lintah merupakan hewan yang sering ditemukan di daerah lembap seperti hutan hujan tropis. Hewan ini sangat bergantung pada makhluk hidup lain agar dapat bertahan hidup. Lintah juga diketahui cukup berbahaya saat menempel pada tubuh hewan lain, seperti rusa, kerbau liar, bahkan manusia.
</p>
<p class="font-semibold text-slate-900 mb-2">
Dalam interaksinya dengan makhluk hidup lain, lintah akan ....
</p>`,
    options: [
      { id: "A", text: "berkompetisi dengan inang untuk mendapatkan makanan" },
      { id: "B", text: "memanfaatkan tubuh inangnya sebagai sumber nutrisi" },
      { id: "C", text: "melekatkan diri pada makhluk hidup lain untuk membersihkan darahnya" },
      { id: "D", text: "menempel pada inang untuk mendapatkan perlindungan dari predator" },
      { id: "E", text: "hidup bebas berdampingan dengan makhluk hidup lain di hutan" }
    ],
    kunci: "B",
    pembahasan: `<strong>Interaksi Parasitisme pada Lintah (Hirudinea):</strong><br>
Lintah adalah ektoparasit obligat/fakultatif pemakan darah (<em>sanguivora</em>).<br>
&bull; Lintah menggunakan alat isap (sucker) dan zat antikoagulan (<em>hirudin</em>) untuk menghisap darah dari tubuh inang.<br>
&bull; Dalam hubungan simbiosis <strong>parasitisme</strong> ini, lintah memperoleh keuntungan langsung berupa nutrien darah cair dari inang, sedangkan inang dirugikan karena kehilangan darah dan rentan terhadap infeksi sekunder.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 4,
    elemen: "Sel",
    subelemen: "Metabolisme Sel (Respirasi Seluler)",
    indikator: "Mengidentifikasi tahapan respirasi seluler yang sesuai berdasarkan rangkaian prosesnya. (4)",
    kode: "25BIOSELMSLB04SA-000000-0697",
    tipe: "pg",
    img: "/tka/img/biologi/soal_04.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Skema berikut menunjukkan siklus respirasi seluler:
<br><strong>Tahap A:</strong> Glukosa &rarr; 2 Asam Piruvat
<br><strong>Dekarboksilasi Oksidatif:</strong> 2 Asam Piruvat &rarr; 2 Asetil KoA
<br><strong>Tahap B:</strong> Siklus Krebs (Siklus Asam Sitrat)
<br><strong>Tahap C:</strong> Rantai Transpor Elektron &amp; Fosforilasi Oksidatif
</p>
<p class="font-semibold text-slate-900 mb-2">
Dengan mencermati skema respirasi seluler tersebut, manakah dari proses berikut yang terjadi pada tahap berlabel A?
</p>`,
    options: [
      { id: "A", text: "Gugus gula bereaksi dengan oksaloasetat kemudian masuk ke siklus Krebs." },
      { id: "B", text: "Proses pengubahan glukosa menjadi asam piruvat dengan penambahan gugus oksigen." },
      { id: "C", text: "Pelepasan elektron dari NADH dan FADH₂ untuk menghasilkan ATP." },
      { id: "D", text: "Proses oksidasi suksinat menjadi fumarat disertai produksi FADH₂." },
      { id: "E", text: "Produksi ATP melalui penambahan gugus fosfat ke molekul gula." }
    ],
    kunci: "E",
    pembahasan: `<strong>Analisis Tahap A: Glikolisis:</strong><br>
Tahap A adalah <strong>Glikolisis</strong> (pemecahan 1 molekul glukosa 6C menjadi 2 molekul asam piruvat 3C di sitosol tanpa memerlukan oksigen).<br>
&bull; Pada fase investasi energi glikolisis, gugus fosfat dari ATP ditransfer ke molekul glukosa membentuk glukosa-6-fosfat dan fruktosa-1,6-bisfosfat (fosforilasi gula).<br>
&bull; Pada fase pembangkitan energi, terjadi fosforilasi tingkat substrat yang menghasilkan total 4 ATP (netto 2 ATP) dan 2 NADH.<br>
Pilihan A dan D terjadi di Siklus Krebs (B); Pilihan C terjadi di Rantai Transpor Elektron (C); Pilihan B salah karena glikolisis tidak memerlukan gas oksigen.<br>
<strong>Kunci Jawaban: E</strong>`
  },
  {
    id: 5,
    elemen: "Sel",
    subelemen: "Metabolisme Sel (Enzim)",
    indikator: "Menginterpretasi faktor-faktor yang memengaruhi kerja enzim dalam suatu percobaan sederhana. (5)",
    kode: "25BIOSELMSLB04SA-000000-0681",
    tipe: "pg",
    img: "/tka/img/biologi/soal_05.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sekelompok murid SMA melakukan percobaan kerja enzim protease dengan menggunakan putih telur sebagai substrat. Putih telur dimasukkan ke dalam 3 tabung reaksi berlabel A, B, dan C pada suhu konstan 37&deg;C selama 30 menit:
</p>
<div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1 mb-3">
  <div><strong>Tabung A:</strong> 2 ml putih telur + 1 ml protease &rarr; Kondisi larutan: <em>Agak keruh</em></div>
  <div><strong>Tabung B:</strong> 2 ml putih telur + 1 ml protease + 1 ml HCl &rarr; Kondisi larutan: <em>Bening</em> (Optimal)</div>
  <div><strong>Tabung C:</strong> 2 ml putih telur + 1 ml protease + 1 ml NaOH &rarr; Kondisi larutan: <em>Keruh</em> (Tidak aktif)</div>
</div>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan hasil percobaan ini, faktor utama yang mempengaruhi kerja enzim protease adalah ....
</p>`,
    options: [
      { id: "A", text: "konsentrasi enzim protease dalam tabung reaksi" },
      { id: "B", text: "pH lingkungan tempat enzim protease bekerja" },
      { id: "C", text: "jenis substrat yang digunakan dalam percobaan" },
      { id: "D", text: "suhu larutan selama percobaan berlangsung" },
      { id: "E", text: "waktu inkubasi enzim protease dengan substrat" }
    ],
    kunci: "B",
    pembahasan: `<strong>Pengaruh pH terhadap Aktivitas Enzim Protease (Pepsin):</strong><br>
Pada eksperimen tersebut:<br>
&bull; Variabel yang sengaja diubah-ubah (variabel bebas) adalah <strong>suasana pH</strong> larutan: netral (air), sangat asam (+ HCl), dan basa (+ NaOH).<br>
&bull; Suhu (37&deg;C), volume substrat (2 ml), volume enzim (1 ml), dan waktu inkubasi (30 menit) dijaga konstan sebagai variabel kontrol.<br>
&bull; Enzim protease lambung (seperti pepsin) memiliki struktur situs aktif yang bekerja optimum pada kondisi asam kuat (\(\\text{pH } \approx 1{,}5 - 2\)), sehingga putih telur terhidrolisis tuntas menghasilkan larutan jernih/bening.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 6,
    elemen: "Sel",
    subelemen: "Metabolisme Sel (Fotosintesis)",
    indikator: "Menjelaskan faktor-faktor yang memengaruhi fotosintesis dalam konteks percobaan. (6)",
    kode: "25BIOSELMSLB04SA-000000-0421",
    tipe: "pg",
    img: "/tka/img/biologi/soal_06.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang murid menyelidiki proses fotosintesis pada daun tanaman kembang sepatu (<em>Hibiscus rosa-sinensis</em>). Sebagian permukaan daun ditutup aluminium foil dan dibiarkan terpapar matahari 6 jam. Daun kemudian dipetik, direbus air mendidih, diekstraksi klorofilnya dengan alkohol panas, lalu ditetesi larutan lugol (iodium).
<br>Hasil: Bagian terbuka berwarna <strong>biru kehitaman</strong> (positif amilum), sedangkan bagian tertutup aluminium foil berwarna <strong>pucat</strong> (negatif amilum).
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan percobaan tersebut, faktor yang memengaruhi fotosintesis pada daun tersebut adalah ....
</p>`,
    options: [
      { id: "A", text: "intensitas cahaya pada permukaan daun" },
      { id: "B", text: "konsentrasi karbon dioksida di udara" },
      { id: "C", text: "lebar dan tipisnya permukaan daun" },
      { id: "D", text: "ketersediaan klorofil pada daun" },
      { id: "E", text: "suhu optimal untuk kerja enzim fotosintesis" }
    ],
    kunci: "A",
    pembahasan: `<strong>Percobaan Sachs (Uji Fotosintesis & Cahaya Matahari):</strong><br>
&bull; Percobaan Sachs dirancang untuk membuktikan dua hal pokok: (1) fotosintesis memerlukan <strong>cahaya matahari</strong>, dan (2) fotosintesis menghasilkan karbohidrat/glukosa yang disimpan sebagai <strong>amilum (pati)</strong>.<br>
&bull; Penutupan daun dengan aluminium foil memblokir foton cahaya matahari sehingga reaksi terang tidak dapat berlangsung pada area tersebut. Akibatnya, fiksasi CO₂ terhenti dan tidak terbentuk amilum (reaksi iodium negatif/pucat).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 7,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Respirasi & Sirkulasi",
    indikator: "Menjelaskan hubungan antara gejala klinis dengan gangguan sistem pernapasan manusia. (7)",
    kode: "25BIOPMHTPZB06SA-000000-0652",
    tipe: "pg",
    img: "/tka/img/biologi/soal_07.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang pengemudi truk berusia 45 tahun mengalami kecelakaan lalu lintas karena mengantuk. Riwayat medis menunjukkan ia sering terbangun malam hari terengah-engah dan mendengkur keras. Dokter mendiagnosis <em>obstructive sleep apnea</em> (OSA), di mana saluran napas atas tersumbat berulang kali saat tidur. Hasil rekam jantung (EKG) menunjukkan pola aritmia (detak jantung tidak teratur).
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan informasi tersebut, hubungan gejala yang dialami pengemudi tersebut dengan komplikasi yang muncul adalah....
</p>`,
    options: [
      { id: "A", text: "gangguan napas saat tidur menyebabkan kurangnya oksigen meningkatkan risiko detak jantung tidak teratur" },
      { id: "B", text: "dengkur keras mengganggu kualitas tidur sehingga mencegah terjadinya penyumbatan saluran napas atas" },
      { id: "C", text: "microsleep terjadi karena saluran napas tetap terbuka sepanjang malam sehingga tubuh kekurangan tidur" },
      { id: "D", text: "kekurangan oksigen saat tidur membuat pasien lebih jarang mengalami kantuk berlebihan pada siang hari" },
      { id: "E", text: "aritmia muncul akibat penurunan kadar karbon dioksida yang memicu otot jantung bekerja lebih stabil" }
    ],
    kunci: "A",
    pembahasan: `<strong>Patofisiologi Hubungan OSA dan Aritmia Jantung:</strong><br>
1. Obstruksi saluran napas atas intermiten saat tidur menyebabkan episode henti napas (apnea) berulang.<br>
2. Hal ini memicu <strong>hipoksemia</strong> (penurunan saturasi O₂ darah) dan <strong>hiperkapnia</strong> (penumpukan CO₂).<br>
3. Hipoksemia nokturnal mengaktivasi sistem saraf simpatis secara berlebihan dan memicu vasokonstriksi arteriol, hipertensi pulmonal, serta iskemia fokal miokardium.<br>
4. Tekanan hemodinamik dan ketidakseimbangan otonom ini secara langsung mencetuskan gangguan konduksi impuls listrik jantung (<strong>aritmia</strong>).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 8,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Sirkulasi (Komponen Darah)",
    indikator: "Mengidentifikasi perbedaan/persamaan komponen darah pada sistem peredaran darah berdasarkan struktur dan fungsinya. (8)",
    kode: "25BIOPMHTPZB05SA-000000-0554",
    tipe: "pg",
    img: "/tka/img/biologi/soal_08.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Gambar menunjukkan komponen penyusun darah manusia setelah disentrifugasi:
<br>&bull; <strong>Komponen A:</strong> Sel Darah Merah (Eritrosit, ~45%)
<br>&bull; <strong>Komponen B:</strong> Sel Darah Putih (Leukosit: neutrofil, eosinofil, basofil, monosit, limfosit)
<br>&bull; <strong>Komponen C:</strong> Keping Darah (Trombosit / Platelet)
</p>
<p class="font-semibold text-slate-900 mb-2">
Dengan mencermati struktur ketiga komponen darah tersebut, pernyataan berikut yang menunjukkan persamaan komponen berlabel B dan C adalah ....
</p>`,
    options: [
      { id: "A", text: "memiliki inti sel dan berperan dalam pertahanan tubuh terhadap patogen" },
      { id: "B", text: "tidak berinti dan berperan dalam pengangkutan oksigen ke jaringan tubuh" },
      { id: "C", text: "tidak memiliki inti sel dan berfungsi membawa hormon ke seluruh tubuh" },
      { id: "D", text: "berbentuk tidak beraturan dan diproduksi di sumsum tulang" },
      { id: "E", text: "bentuk bulat pipih dan berfungsi dalam pengangkutan karbon dioksida" }
    ],
    kunci: "D",
    pembahasan: `<strong>Persamaan Komponen B (Leukosit) dan C (Trombosit):</strong><br>
&bull; Leukosit (B) memiliki bentuk ameboid/tidak beraturan (polimorfonuklear & mononuklear).<br>
&bull; Trombosit (C) merupakan fragmen sitoplasma dari megakariosit yang berbentuk tidak beraturan dan tidak memiliki inti sejati.<br>
&bull; Keduanya sama-sama disintesis dan dimatangkan di dalam <strong>sumsum tulang merah (red bone marrow)</strong> melalui proses hematopoiesis.<br>
Pilihan A salah karena trombosit tidak berinti. Pilihan B & E merujuk ke eritrosit (A).<br>
<strong>Kunci Jawaban: D</strong>`
  },
  {
    id: 9,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Sirkulasi (Pembekuan Darah)",
    indikator: "Menentukan respon tubuh yang tepat terhadap kerusakan jaringan darah berdasarkan mekanisme pembekuan darah. (9)",
    kode: "25BIOPMHTPZB05SA-000000-0535",
    tipe: "kompleks_bs",
    img: "/tka/img/biologi/soal_09.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang murid tidak sengaja tergores <em>cutter</em> hingga mengeluarkan darah. Jika produksi enzim trombokinase (tromboplastin) dalam tubuh murid tersebut berkurang secara signifikan, tentukan <strong>Benar</strong> atau <strong>Salah</strong> dampak berikut terhadap kaskade pembekuan darah!
</p>`,
    items: [
      { pernyataan: "Darah terus mengalir karena vitamin K tidak dapat diubah menjadi benang fibrin.", kunci: "Salah", penjelasan: "Vitamin K adalah kofaktor sintesis protrombin di hati, bukan zat yang diubah menjadi fibrin." },
      { pernyataan: "Luka lambat menutup karena trombokinase tidak dapat mengaktifkan protrombin menjadi trombin.", kunci: "Benar", penjelasan: "Trombokinase bersama ion kalsium (Ca²⁺) berfungsi mengubah protrombin inaktif menjadi enzim trombin aktif." },
      { pernyataan: "Mempercepat pembekuan darah karena mengurangi aktivitas fibrinogen dalam mengalirkan darah.", kunci: "Salah", penjelasan: "Kekurangan trombokinase justru memperlambat atau menggagalkan pembekuan darah." }
    ],
    kunci: ["Salah", "Benar", "Salah"],
    pembahasan: `<strong>Mekanisme Kaskade Pembekuan Darah:</strong><br>
1. Trombosit pecah &rarr; melepaskan <strong>Trombokinase (Tromboplastin)</strong>.<br>
2. Trombokinase + \(\\text{Ca}^{2+}\) + Vitamin K &rarr; mengubah <strong>Protrombin</strong> menjadi <strong>Trombin</strong>.<br>
3. Trombin &rarr; mengonversi <strong>Fibrinogen</strong> (protein larut) menjadi benang-benang <strong>Fibrin</strong> (jaring penjerat sel darah merah).<br>
Jika trombokinase berkurang, protrombin gagal diaktivasi menjadi trombin, akibatnya benang fibrin lambat terbentuk dan perdarahan sulit berhenti.<br>
<strong>Kunci Jawaban: 1=Salah, 2=Benar, 3=Salah</strong>`
  },
  {
    id: 10,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Sirkulasi (Patologi Kardiovaskular)",
    indikator: "Memprediksi aktivitas/kebiasaan yang berpotensi menyebabkan gangguan/penyakit pada sistem peredaran darah berdasarkan data hasil pemeriksaan medis. (10)",
    kode: "25BIOPMHTPZB05SA-000000-0616",
    tipe: "kompleks_bs",
    img: "/tka/img/biologi/soal_10.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pria 35 tahun mengeluh sakit kepala, kaku tengkuk, nyeri dada, dan sesak napas. Hasil lab:
<br>&bull; Tekanan Darah: <strong>190/120 mmHg</strong> (Hipertensi Stadium 2, Normal 120/80)
<br>&bull; Denyut Jantung: <strong>98 kali/menit</strong> (Takikardia ringan, Normal 60-80)
<br>&bull; Kolesterol LDL: <strong>195 mg/dL</strong> (Sangat Tinggi, Normal &lt;100)
<br>&bull; Kolesterol HDL: <strong>65 mg/dL</strong> (Baik, Normal &ge;60)
<br>Tentukan apakah kebiasaan berikut <strong>Sesuai</strong> (faktor pemicu) atau <strong>Tidak Sesuai</strong>!
</p>`,
    items: [
      { pernyataan: "Sering mengonsumsi makanan tinggi lemak jenuh dan cepat saji sehingga kadar LDL meningkat.", kunci: "Benar", penjelasan: "Diet tinggi lemak jenuh & trans merupakan penyebab utama peningkatan LDL (aterosklerosis)." },
      { pernyataan: "Terkadang mengikuti kelas yoga dan meditasi beberapa kali sebulan untuk kesehatan jantung, sehingga LDL tetap tinggi.", kunci: "Salah", penjelasan: "Yoga dan meditasi merangsang saraf parasimpatis dan menurunkan stres, bukan pemicu LDL tinggi." },
      { pernyataan: "Sering mengalami stres kerja dan kurang tidur kronis, yang dapat memengaruhi tekanan darah dan denyut jantung.", kunci: "Benar", penjelasan: "Stres kronis melepaskan kortisol dan katekolamin yang memicu vasokonstriksi perifer dan takikardia." }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Analisis Faktor Risiko Kardiovaskular:</strong><br>
&bull; Kadar LDL sebesar 195 mg/dL sangat tinggi dan memicu pembentukan plak aterosklerosis di dinding endotel arteri koroner.<br>
&bull; Konsumsi asam lemak jenuh jenuh/trans serta makanan olahan cepat saji terbukti secara klinis meningkatkan sintesis apoB-100 dan LDL hepatik (Pernyataan 1 Sesuai/Benar).<br>
&bull; Stres psikososial kronis meningkatkan tonus simpatis, memicu hiperaktivitas renin-angiotensin-aldosteron (RAAS), meningkatkan resistensi vaskular sistemik (Pernyataan 3 Sesuai/Benar).<br>
<strong>Kunci Jawaban: 1=Benar (Sesuai), 2=Salah (Tidak Sesuai), 3=Benar (Sesuai)</strong>`
  },
  {
    id: 11,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Ekskresi & Termoregulasi",
    indikator: "Menganalisis kerja sistem ekskresi dalam mempertahankan homeostasis berdasarkan perilaku individu/kondisi lingkungan. (11)",
    kode: "25BIOPMHTPZB07SA-000000-0923",
    tipe: "pg",
    img: "/tka/img/biologi/soal_11.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pak Junaidi (40 tahun), seorang kuli bangunan, bekerja tiada henti pada terik matahari dan kurang minum. Tiba-tiba ia pingsan dengan suhu tubuh sangat tinggi (40,5&deg;C), kulit memerah, kering (tidak berkeringat), dan denyut nadi cepat. Dokter menyatakan Pak Junaidi mengalami serangan panas (<em>heat stroke</em>).
</p>
<p class="font-semibold text-slate-900 mb-2">
Apa penyebab utama kegagalan tubuh Pak Junaidi dalam mempertahankan suhu normalnya?
</p>`,
    options: [
      { id: "A", text: "Dehidrasi membuat proses berkeringat terhenti, sehingga panas tidak dapat dikeluarkan secara efektif." },
      { id: "B", text: "Pelebaran pembuluh darah di kulit menyebabkan tubuh menyimpan panas berlebihan di dalam darah." },
      { id: "C", text: "Tingginya suhu tubuh menyebabkan otot bekerja lebih cepat, sehingga suhu tubuh tidak bisa turun." },
      { id: "D", text: "Kurangnya cairan menyebabkan meningkatkan aliran darah yang justru menaikkan suhu tubuh." },
      { id: "E", text: "Kondisi lingkungan yang panas menyebabkan tubuh berhenti mengatur suhu tubuh untuk menghemat energi." }
    ],
    kunci: "A",
    pembahasan: `<strong>Patofisiologi Kegagalan Termoregulasi pada Heat Stroke:</strong><br>
&bull; Mekanisme utama pelepasan panas tubuh pada suhu lingkungan tinggi adalah melalui <strong>evaporasi keringat</strong> oleh kelenjar sudorifera (ekskresi).<br>
&bull; Ketika dehidrasi berat terjadi akibat keringat berlebih tanpa asupan cairan, volume plasma darah merosot drastis (hipovolemia).<br>
&bull; Untuk mempertahankan perfusi organ vital (otak dan jantung), hipotalamus mematikan sekresi keringat (anhidrosis). Tanpa pendinginan evaporatif, disipasi panas gagal total dan suhu inti tubuh melonjak melampaui 40&deg;C (<em>classic heat stroke</em>).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 12,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Koordinasi (Sistem Saraf)",
    indikator: "Menganalisis perubahan proses pada sistem saraf akibat gangguan yang terjadi. (12)",
    kode: "25BIOPMHSKOB09SA-000000-1047",
    tipe: "kompleks_bs",
    img: "/tka/img/biologi/soal_12.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pak Gito (69 tahun) tersesat di pasar, lupa jalan pulang, lupa nama anggota keluarganya, dan berulang kali bertanya bingung. Pemeriksaan MRI mengonfirmasi penyakit Alzheimer. Tentukan <strong>Benar</strong> atau <strong>Salah</strong> pernyataan mekanisme fisiologis berikut!
</p>`,
    items: [
      { pernyataan: "Kerusakan pada area lobus parietal dan hippocampus menyebabkan gangguan pada memori spasial yang berkaitan dengan lokasi dan arah.", kunci: "Benar", penjelasan: "Hippocampus dan korteks entorinal/parietal adalah pusat navigasi spasial dan konsolidasi memori jangka pendek ke panjang." },
      { pernyataan: "Penumpukan protein abnormal yang terjadi pada area hipotalamus mengakibatkan penurunan ingatan baik nama maupun lokasi.", kunci: "Salah", penjelasan: "Patologi Alzheimer ditandai akumulasi amiloid-beta di korteks serebri dan hippocampus, bukan hipotalamus (pusat otonom/hormonal)." },
      { pernyataan: "Plak yang terbentuk pada sel saraf menghalangi komunikasi antar sel dan mengakibatkan penurunan fungsi kognitif seperti memori dan bahasa.", kunci: "Benar", penjelasan: "Plak amiloid ekstraseluler dan kekusutan neurofibrilar intraseluler merusak transmisi sinaptik kolinergik." }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Patofisiologi Penyakit Alzheimer:</strong><br>
&bull; Alzheimer ditandai dengan degenerasi saraf progresif akibat penumpukan <strong>plak amiloid-&beta;</strong> ekstraseluler dan <strong>kekusutan neurofibrilar protein tau</strong> terhiperfosforilasi intraseluler.<br>
&bull; Atrofi pertama dan terberat terjadi di <strong>hippocampus</strong> (kehilangan memori deklaratif baru) dan korteks asosiasi parietal/temporal (kehilangan orientasi spasial dan bahasa).<br>
&bull; Hipotalamus utamanya mengatur homeostasis metabolik (suhu, rasa lapar, haus), bukan memori spasial atau deklaratif.<br>
<strong>Kunci Jawaban: 1=Benar, 2=Salah, 3=Benar</strong>`
  },
  {
    id: 13,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Imun (Imunopatologi Autoimun)",
    indikator: "Menganalisis keterkaitan bagian tubuh yang diserang sistem imun dengan dampak fisiologis yang ditimbulkannya. (13)",
    kode: "25BIOPMHSIMB08SA-000000-0874",
    tipe: "pg",
    img: "/tka/img/biologi/soal_13.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Alika (12 tahun) sering buang air kecil (poliuria), haus berlebih (polidipsia), lapar berlebih (polifagia), dan berat badan turun drastis. Gula darah puasa 300 mg/dL dan terdeteksi antibodi anti-GAD (<em>anti-glutamic acid decarboxylase</em>). Dokter mendiagnosis Diabetes Melitus Tipe 1.
<br>Bagaimana mekanisme autoimun pada diabetes melitus yang diderita Alika menyebabkan hiperglikemia?
</p>`,
    options: [
      { id: "A", text: "Limfosit B menyerang sel alfa pankreas yang berperan sebagai penghasil glukagon." },
      { id: "B", text: "Kompleks antigen-antibodi menghambat kerja hormon insulin dan glukagon." },
      { id: "C", text: "Infeksi bakteri pada pankreas menghancurkan reseptor insulin dan glukagon." },
      { id: "D", text: "Sel T sitotoksik merusak sel beta pankreas yang menghasilkan insulin." },
      { id: "E", text: "Antibodi menghambat kerja hormon insulin dalam mengubah glukosa menjadi glikogen." }
    ],
    kunci: "D",
    pembahasan: `<strong>Mekanisme Imunologis Diabetes Melitus Tipe 1:</strong><br>
&bull; DM Tipe 1 adalah penyakit autoimun spesifik organ di mana sel-sel imun mengenali autoantigen pulau Langerhans (seperti GAD-65, insulin, IA-2).<br>
&bull; <strong>Sel T sitotoksik (\(\\text{CD8}^+\))</strong> dan makrofag menginfiltrasi pulau Langerhans (insulitis) dan secara spesifik melisiskan <strong>sel &beta; pankreas</strong>.<br>
&bull; Akibat destruksi permanen sel &beta;, tubuh mengalami defisiensi insulin absolut, sehingga glukosa darah tidak dapat ditranspor ke dalam sel target (GLUT-4 tidak tertranslokasi), memicu hiperglikemia ekstrem.<br>
<strong>Kunci Jawaban: D</strong>`
  },
  {
    id: 14,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Koordinasi (Sistem Endokrin)",
    indikator: "Menganalisis keterkaitan gejala perubahan kondisi tubuh dengan gangguan hormon yang terjadi. (14)",
    kode: "25BIOPMHSKOB09SA-000000-0871",
    tipe: "pg",
    img: "/tka/img/biologi/soal_14.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Setiap kali menghadapi ulangan harian, Vito cemas: jantung berdegup sangat kencang, keluar keringat dingin, tangan gemetar, sulit menelan, sering ingin buang air kecil, napas tersengal-sengal, dan tekanan darah naik hingga 140/90 mmHg. Respon "lawan atau lari" ini dipicu sekresi hormon adrenalin (epinefrin) dari medula adrenal.
<br>Manakah mekanisme kerja hormon adrenalin yang paling tepat sesuai dengan gejala yang dialami Vito?
</p>`,
    options: [
      { id: "A", text: "Otot polos pembuluh darah menyempit sehingga aliran darah ke organ tertentu meningkat dan tekanan darah bertambah cepat." },
      { id: "B", text: "Saluran udara di paru-paru menyempit lalu memicu napas menjadi lebih cepat untuk mencukupi kebutuhan oksigen tubuh." },
      { id: "C", text: "Detak jantung menjadi lebih kuat sehingga jumlah darah yang keluar dari jantung berkurang dan otot tubuh bergetar." },
      { id: "D", text: "Kandung kemih menjadi lebih peka terhadap rangsang, disertai aliran darah ke ginjal yang meningkat sehingga timbul rasa ingin buang air kecil." },
      { id: "E", text: "Gerakan otot saluran pencernaan di tenggorokan melambat karena otot polosnya berkontraksi dan menghambat proses menelan." }
    ],
    kunci: "A",
    pembahasan: `<strong>Mekanisme Kerja Hormon Adrenalin (Epinefrin):</strong><br>
&bull; Melalui aktivasi reseptor \(\\alpha_1\)-adrenergik, epinefrin memicu vasokonstriksi (penyempitan otot polos pembuluh darah) pada sirkulasi kulit dan organ viseral gastrointestinal.<br>
&bull; Bersamaan dengan aktivasi reseptor \(\\beta_1\) di nodus SA jantung (meningkatkan curah jantung), resistensi perifer total naik sehingga tekanan darah melonjak cepat (140/90 mmHg).<br>
Pilihan B salah karena adrenalin justru mendilatasi bronkiolus (\(\\beta_2\)); Pilihan C salah karena stroke volume meningkat; Pilihan E salah karena motilitas melambat akibat relaksasi reseptor presinaptik.<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 15,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Reproduksi",
    indikator: "Menganalisis solusi yang sesuai terhadap gangguan dalam rencana kehamilan. (15)",
    kode: "25BIOPMHSRPB10SA-000000-1023",
    tipe: "mcma",
    img: "/tka/img/biologi/soal_15.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dini (25 tahun) mengalami menstruasi tidak teratur (2-4 bulan sekali), jerawat parah, dan berat badan meningkat. USG menunjukkan adanya multipel kista kecil di ovarium kiri. Dokter mendiagnosis PCOS (<em>Polycystic Ovary Syndrome</em>).
<br>Berdasarkan gejala tersebut, solusi mana saja yang tepat agar Dini dapat mengalami kehamilan? Klik semua jawaban yang benar! Jawaban benar lebih dari satu.
</p>`,
    options: [
      { id: "A", text: "Mengonsumsi suplemen peningkat hormon prolaktin secara rutin agar siklus haid teratur." },
      { id: "B", text: "Operasi pengangkatan ovarium karena ovarium yang terkena kista tidak akan berfungsi lagi." },
      { id: "C", text: "Menerapkan pola makan sehat dan rutin berolahraga agar hormon menjadi seimbang." },
      { id: "D", text: "Mendapatkan suntikan hormon FSH/LH dibawah observasi dokter untuk merangsang ovulasi." },
      { id: "E", text: "Mengikuti program bayi tabung dengan sperma Dono agar peluang mendapat keturunan lebih besar." }
    ],
    kunci: ["C", "D"],
    pembahasan: `<strong>Manajemen Infertilitas pada PCOS:</strong><br>
PCOS diakibatkan ketidakseimbangan endokrin: resistensi insulin, hiperandrogenisme, dan anovulasi kronis.<br>
1. <strong>Modifikasi Gaya Hidup (Lini Pertama):</strong> Penurunan berat badan 5-10% melalui diet seimbang dan olahraga teratur terbukti mengembalikan sensitivitas insulin dan memulihkan ovulasi spontan (Pilihan C Benar).<br>
2. <strong>Induksi Ovulasi Farmakologis:</strong> Penggunaan stimulator ovulasi seperti letrozole/klomifen atau gonadotropin (FSH/LH eksogen) untuk memicu pematangan folikel de Graaf dan pelepasan ovum (Pilihan D Benar).<br>
Pilihan A salah (hiperprolaktinemia justru memblokade gonadotropin); Pilihan B salah (ooforektomi menyebabkan kemandulan permanen). Bayi tabung (IVF) merupakan lini terakhir jika induksi ovulasi gagal.<br>
<strong>Kunci Jawaban: C, D</strong>`
  },
  {
    id: 16,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Reproduksi & Transport Zat",
    indikator: "Menganalisis dampak kehamilan berisiko terhadap kesehatan reproduksi. (16)",
    kode: "25BIOPMHSRPB10SA-000000-0954",
    tipe: "pg",
    img: "/tka/img/biologi/soal_16.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Bu Mita (hamil 6 bulan) sering lemas dan pusing. Gerakan janin melemah. Pemeriksaan menunjukkan kadar hemoglobin sangat rendah yaitu 7 g/dL (normal &gt; 11 g/dL). Bu Mita memiliki kebiasaan tidak suka makan daging dan sayuran hijau.
<br>Bagaimana kondisi Bu Mita dapat memengaruhi janinnya?
</p>`,
    options: [
      { id: "A", text: "Rendahnya hemoglobin menyebabkan darah ibu mengalir cepat melalui plasenta sehingga janin kelebihan berat badan." },
      { id: "B", text: "Janin kekurangan oksigen yang dibawa hemoglobin sehingga perkembangan otak dan organ kurang optimal." },
      { id: "C", text: "Hemoglobin rendah menyebabkan darah ibu pekat sehingga janin tidak tumbuh karena kurang asupan nutrisi." },
      { id: "D", text: "Resiko pendarahan pada ibu ketika persalinan karena hemoglobin membantu proses pembekuan darah." },
      { id: "E", text: "Janin rentan mengalami infeksi karena hemoglobin berfungsi menyerang bakteri dan virus dalam rahim." }
    ],
    kunci: "B",
    pembahasan: `<strong>Dampak Anemia Berat pada Kehamilan terhadap Janin:</strong><br>
&bull; Hemoglobin mengikat molekul \(O_2\) membentuk oksihemoglobin untuk didifusikan melintasi vili korialis plasenta menuju kapiler umbilikalis janin.<br>
&bull; Kadar Hb ibu hanya 7 g/dL menimbulkan <strong>hipoksia intrauterin kronis</strong>.<br>
&bull; Otak dan organ janin yang sedang dalam masa percepatan mitosis diferensiasi sangat sensitif terhadap defisit oksigen, memicu risiko <em>Intrauterine Growth Restriction</em> (IUGR), mikrosefali, kecacatan perkembangan saraf, hingga asfiksia perinatal.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 17,
    elemen: "Keterampilan Proses",
    subelemen: "Mempertanyakan dan Memprediksi",
    indikator: "Menentukan pertanyaan ilmiah yang relevan dari suatu percobaan sederhana. (17)",
    kode: "25BIOKPRMPPB11SA-000000-0365",
    tipe: "kompleks_bs",
    img: "/tka/img/biologi/soal_17.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang murid meneteskan larutan lugol ke dalam nasi, tahu, dan pisang yang dihaluskan.
<br>Hasil: Nasi berubah menjadi <strong>biru kehitaman pekat</strong>, Tahu <strong>tidak berubah warna</strong>, dan Pisang menjadi <strong>ungu kebiruan</strong>.
<br>Tentukan <strong>Benar</strong> atau <strong>Salah</strong> pertanyaan ilmiah yang dapat dikembangkan dari percobaan tersebut!
</p>`,
    items: [
      { pernyataan: "Mengapa nasi menunjukkan warna biru kehitaman setelah ditetesi lugol?", kunci: "Benar", penjelasan: "Relevan untuk menyelidiki pembentukan kompleks amilosa-iodium pada pati nasi." },
      { pernyataan: "Bagaimana kandungan amilum pada pisang matang memengaruhi hasil uji?", kunci: "Benar", penjelasan: "Relevan untuk menyelidiki konversi amilum menjadi glukosa seiring pematangan buah pisang." },
      { pernyataan: "Apakah warna ungu menunjukkan bahwa tahu mengandung protein tinggi?", kunci: "Salah", penjelasan: "Pereaksi Lugol digunakan untuk menguji amilum/karbohidrat, sedangkan protein diuji dengan reagen Biuret." }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Analisis Uji Makanan Kualitatif (Uji Lugol/Iodium):</strong><br>
&bull; Reagen Lugol (\(\\text{I}_2 + \\text{KI}\)) spesifik berinterkalasi ke dalam struktur heliks helikal <strong>amilosa</strong> menghasilkan warna biru kehitaman.<br>
&bull; Pertanyaan 1 dan 2 secara saintifik mengeksplorasi keberadaan dan konsentrasi amilum pada bahan pangan.<br>
&bull; Pertanyaan 3 tidak valid secara metodologis karena lugol bukan indikator ikatan peptida protein (uji protein memerlukan reagen Biuret \(\\text{CuSO}_4 + \\text{NaOH}\) yang menghasilkan warna ungu).<br>
<strong>Kunci Jawaban: 1=Benar, 2=Benar, 3=Salah</strong>`
  },
  {
    id: 18,
    elemen: "Keterampilan Proses",
    subelemen: "Mempertanyakan dan Memprediksi",
    indikator: "Merumuskan pertanyaan ilmiah kompleks yang mengintegrasikan berbagai konsep dan sistem biologi berdasarkan konteks praktikum. (18)",
    kode: "25BIOKPRMPPB11SA-000000-0696",
    tipe: "mcma",
    img: "/tka/img/biologi/soal_18.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Murid membandingkan warna dan volume urine pada dua kondisi:
<br>&bull; <strong>Sampel A:</strong> Saat istirahat dalam kondisi normal tanpa keringat (warna kuning pekat, volume sedikit).
<br>&bull; <strong>Sampel B:</strong> Setelah olahraga lari 20 menit serta minum air dalam jumlah banyak (warna kuning bening jernih, volume melimpah).
<br>Pertanyaan ilmiah mana yang paling tepat untuk dijadikan dasar penyelidikan? Klik pada semua jawaban yang benar!
</p>`,
    options: [
      { id: "A", text: "Bagaimana keringat yang dikeluarkan selama olahraga memengaruhi kadar gula darah?" },
      { id: "B", text: "Apakah jumlah cairan yang diminum memengaruhi volume urine setelah berolahraga?" },
      { id: "C", text: "Bagaimana kaitan antara banyaknya keringat dengan jumlah urine yang keluar?" },
      { id: "D", text: "Mengapa urine setelah olahraga tampak lebih pekat dibanding saat istirahat?" },
      { id: "E", text: "Apakah peningkatan detak jantung saat olahraga memengaruhi warna urine yang dihasilkan?" }
    ],
    kunci: ["B", "C", "D"],
    pembahasan: `<strong>Integrasi Osmoregulasi dan Pengeluaran Urine:</strong><br>
Percobaan ini mengkaji interaksi antara konsumsi cairan (hidrasi), pengeluaran keringat (termoregulasi), dan ekskresi ginjal yang diregulasi oleh hormon ADH (vasopresin):<br>
&bull; <strong>Opsi B & C:</strong> Menguji korelasi kuantitatif antara input cairan dan rute eliminasi air tubuh (keringat vs urine).<br>
&bull; <strong>Opsi D:</strong> Menguji kepekatan pigmen urobilin akibat perubahan laju reabsorpsi air di tubulus nefron.<br>
Opsi A dan E tidak memiliki hubungan sebab-akibat langsung dengan variabel pengamatan visual urine.<br>
<strong>Kunci Jawaban: B, C, D</strong>`
  },
  {
    id: 19,
    elemen: "Keterampilan Proses",
    subelemen: "Merencanakan dan Melakukan Penyelidikan",
    indikator: "Menentukan metode pengumpulan data yang tepat dalam penyelidikan biologi berdasarkan kegiatan observasi. (19)",
    kode: "25BIOKPRRLPB12SA-000000-0550",
    tipe: "pg",
    img: "/tka/img/biologi/soal_19.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang murid ingin mengetahui bagaimana suhu lingkungan memengaruhi pertumbuhan gulma di area taman sekolah selama 2 minggu, dengan mengamati perbedaan tanaman liar di beberapa lokasi berbeda yang tingkat paparan cahaya mataharinya bervariasi.
<br>Langkah pertama yang harus dilakukan murid dalam proses pengumpulan data adalah....
</p>`,
    options: [
      { id: "A", text: "mengukur tinggi tanaman liar setiap hari di area yang paling banyak terkena sinar matahari" },
      { id: "B", text: "menentukan lokasi pengamatan yang konsisten dan mencatat suhu di tiap lokasi secara berkala" },
      { id: "C", text: "membersihkan area dari gulma lain sebelum memulai pengamatan agar hasilnya tidak terganggu" },
      { id: "D", text: "menyimpulkan bahwa cahaya matahari adalah faktor utama yang memengaruhi pertumbuhan" },
      { id: "E", text: "memindahkan beberapa tanaman liar ke pot agar bisa diamati di lokasi yang lebih terkontrol" }
    ],
    kunci: "B",
    pembahasan: `<strong>Metodologi Ilmiah Pengumpulan Data Lapangan:</strong><br>
&bull; Tujuan penelitian adalah menyelidiki pengaruh <strong>suhu lingkungan</strong> terhadap pertumbuhan gulma.<br>
&bull; Agar data yang diperoleh valid dan dapat dibandingkan, peneliti harus menetapkan titik plot kuadrat (lokasi stasiun sampling) yang tetap/konsisten, serta melakukan pengukuran suhu mikroklimat pada waktu-waktu yang terstandarisasi sebelum mencatat respons pertumbuhan tanaman.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 20,
    elemen: "Keterampilan Proses",
    subelemen: "Memproses dan Menganalisis Data",
    indikator: "Mengevaluasi kualitas data hasil penelitian berdasarkan data dari beberapa eksperimen. (20)",
    kode: "25BIOKPRMDIB13SA-000000-0873",
    tipe: "pg",
    img: "/tka/img/biologi/soal_20.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Percobaan daya hambat ekstrak bawang putih terhadap bakteri jerawat menghasilkan diameter zona bening (mm):
<br>&bull; Kontrol negatif (air): 0; 0; 0
<br>&bull; Konsentrasi 25%: 1,3; 1,5; 3,2
<br>&bull; Konsentrasi 50%: 2,1; 5,5; 2,6
<br>&bull; Konsentrasi 75%: 3,2; 3,8; 3,5
<br>&bull; <strong>Konsentrasi 100%: 7,5; 1,5; 7,7</strong>
<br>&bull; Kontrol positif (Amoxicillin): 25; 24; 26
<br>Mengapa guru menyampaikan bahwa data yang diperoleh kurang dapat mendukung hipotesis ("semakin tinggi konsentrasi, semakin lebar zona bening")?
</p>`,
    options: [
      { id: "A", text: "Ulangan yang dilakukan pada terlalu banyak." },
      { id: "B", text: "Konsentrasi ekstrak bawang putih kurang bervariasi." },
      { id: "C", text: "Terdapat data yang tidak konsisten pada perlakuan." },
      { id: "D", text: "Rentang konsentrasi ekstrak terlalu besar." },
      { id: "E", text: "Data kontrol positif dan negatif terlalu ekstrim." }
    ],
    kunci: "C",
    pembahasan: `<strong>Evaluasi Presisi dan Konsistensi Data Eksperimen:</strong><br>
&bull; Pada perlakuan konsentrasi 100%, ulangan 1 bernilai 7,5 mm dan ulangan 3 bernilai 7,7 mm, namun pada ulangan 2 zona bening anjlok ke 1,5 mm.<br>
&bull; Begitu pula pada konsentrasi 50%, ulangan 2 melonjak anomali ke 5,5 mm (padahal ulangan lain hanya 2,1 dan 2,6 mm).<br>
&bull; Fluktuasi ekstrem ini menunjukkan adanya <strong>data anomali (outlier) yang tidak konsisten</strong> akibat galat eksperimental (human error / difusi disk yang cacat).<br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 21,
    elemen: "Keterampilan Proses",
    subelemen: "Memproses dan Menganalisis Data",
    indikator: "Menghubungkan hasil analisis data eksperimen dengan hipotesis awal. (21)",
    kode: "25BIOKPRMDIB13SA-000000-0855",
    tipe: "pg",
    img: "/tka/img/biologi/soal_21.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Hipotesis: <em>"Tanaman kacang hijau akan tumbuh lebih cepat jika ditanam pada media tanah dibandingkan pasir atau tanah liat."</em>
<br>Data tinggi tanaman (cm) hari ke-4:
<br>&bull; Pasir: 2 cm
<br>&bull; <strong>Tanah biasa: 3,7 cm</strong>
<br>&bull; Tanah liat: Mati (aerasi buruk)
<br>Pernyataan yang paling tepat untuk menghubungkan hasil analisis data dengan hipotesis awal adalah....
</p>`,
    options: [
      { id: "A", text: "data mendukung karena pertumbuhan tanaman tercepat dan tertinggi terjadi pada media tanah dibandingkan dua media lainnya" },
      { id: "B", text: "sebaiknya ditolak karena tanaman tetap tumbuh pada semua media, termasuk pasir dan tanah liat" },
      { id: "C", text: "tidak terbukti karena tanaman pada media tanah liat mengalami kematian sebelum hari keempat" },
      { id: "D", text: "belum dapat disimpulkan secara pasti karena data lingkungan dan pengulangan percobaan tidak tersedia untuk memastikan validitas hasil" },
      { id: "E", text: "memerlukan revisi karena meskipun pertumbuhan di media tanah paling tinggi, perbedaan pertumbuhan di antara media tidak terlalu besar" }
    ],
    kunci: "A",
    pembahasan: `<strong>Verifikasi Hipotesis Berdasarkan Data Eksperimen:</strong><br>
&bull; Hipotesis memprediksi bahwa media tanah menghasilkan laju pertumbuhan paling tinggi.<br>
&bull; Hasil pengamatan hari ke-4 menunjukkan: tanah (3,7 cm) &gt; pasir (2 cm) &gt; tanah liat (mati).<br>
&bull; Karena data empiris menunjukkan tinggi tanaman dan laju pertambahan hari demi hari pada media tanah selalu mengungguli pasir dan tanah liat, maka <strong>data mendukung hipotesis awal</strong> secara konsisten.<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 22,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Ekosistem (Komponen Abiotik & Biotik)",
    indikator: "Menentukan dampak perubahan kondisi abiotik terhadap komponen biotik dalam suatu ekosistem. (22)",
    kode: "25BIOKHYEKOB03SA-000000-0863",
    tipe: "pg",
    img: "/tka/img/biologi/soal_22.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Di suatu wilayah dataran tinggi terjadi peningkatan konsentrasi \(\\text{CO}_2\) dari 410 ppm menjadi 480 ppm. Wilayah ini didominasi hutan pinus dan semak endemik. Kepadatan daun pada pohon pinus meningkat, namun terjadi perubahan komposisi semak karena tidak semua spesies dapat beradaptasi.
<br>Dampak yang paling mungkin terjadi akibat peningkatan \(\\text{CO}_2\) adalah ....
</p>`,
    options: [
      { id: "A", text: "terhambatnya proses fotosintesis karena CO₂ dalam konsentrasi tinggi mengganggu aktivitas stomata" },
      { id: "B", text: "penurunan jumlah daun akibat peningkatan transpirasi dan suhu lingkungan yang ekstrem" },
      { id: "C", text: "meningkatnya produksi biomassa pada jenis tumbuhan tertentu yang toleran terhadap peningkatan CO₂" },
      { id: "D", text: "penurunan kadar klorofil karena CO₂ yang berlebihan menyebabkan stres fisiologis" },
      { id: "E", text: "tidak terjadi perubahan karena semua jenis tumbuhan memiliki plastisitas fisiologis yang sama terhadap lingkungan" }
    ],
    kunci: "C",
    pembahasan: `<strong>Efek Fertilisasi Karbon (Carbon Fertilization Effect):</strong><br>
&bull; Peningkatan konsentrasi gas \(\\text{CO}_2\) atmosferik memicu peningkatan gradien difusi masuk melalui stomata.<br>
&bull; Pada tumbuhan C3 (seperti pinus), enzim RuBisCO bekerja lebih efisien dengan menekan reaksi fotorespirasi.<br>
&bull; Akibatnya, laju asimilasi karbon bersih melonjak, memicu peningkatan sintesis pati, luas tajuk daun, dan akumulasi biomassa pada spesies pohon yang adaptif.<br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 23,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Klasifikasi dan Keanekaragaman Makhluk Hidup",
    indikator: "Menganalisis dampak pengenalan spesies asing terhadap keanekaragaman hayati lokal. (23)",
    kode: "25BIOKHYKMHB01SA-000000-0983",
    tipe: "pg",
    img: "/tka/img/biologi/soal_23.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tanaman <em>Lantana camara</em> yang diintroduksi ke Indonesia Timur telah mendominasi lebih dari 35% padang savana di Taman Nasional Wasur Papua, menggantikan rumput asli (<em>Imperata cylindrica</em>). Akibatnya, populasi burung cenderawasih, kupu-kupu endemik <em>Ornithoptera priamus</em>, reptil kecil, serta populasi serangga penyerbuk menurun drastis hingga 40%.
<br>Dampak ekologis utama dari invasi tanaman tersebut adalah ....
</p>`,
    options: [
      { id: "A", text: "menggantikan tanaman endemik melalui dominasi ruang dan senyawa alelopatik, sehingga menurunkan keberagaman flora dan fauna" },
      { id: "B", text: "meningkatkan kesuburan tanah dan memicu regenerasi tanaman lokal karena adaptasi Lantana terhadap lingkungan marginal" },
      { id: "C", text: "tidak berdampak signifikan karena Lantana hanya menyebar di lahan kritis dan tidak mengganggu komunitas alami" },
      { id: "D", text: "meningkatkan jumlah vegetasi hutan sekunder dan menyediakan tempat bersarang baru bagi burung dan reptil kecil" },
      { id: "E", text: "memfasilitasi interaksi simbiotik antara tanaman lokal dan Lantana, sehingga memperkaya komposisi tumbuhan di habitat tersebut" }
    ],
    kunci: "A",
    pembahasan: `<strong>Dampak Spesies Asing Invasif (Invasive Alien Species):</strong><br>
&bull; <em>Lantana camara</em> memiliki keunggulan kompetitif berupa daya reproduksi tinggi, toleransi kekeringan, dan sifat <strong>alelopati</strong> (mengekskresikan senyawa kimia toksik fenolik yang meracuni perkecambahan benih tumbuhan lokal).<br>
&bull; Dominasi monokultur ini merusak rantai makanan trofik padang rumput alami dan memicu kepunahan lokal fauna endemik.<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 24,
    elemen: "Sel",
    subelemen: "Metabolisme Sel (Inhibitor Enzim)",
    indikator: "Menganalisis perubahan proses metabolisme akibat pengaruh senyawa aktivator atau inhibitor tertentu dalam tubuh. (24)",
    kode: "25BIOSELMSLB04SA-000000-0886",
    tipe: "pg",
    img: "/tka/img/biologi/soal_24.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang pekerja tambang terpapar senyawa arsenik anorganik dan mengalami lemas otot, kelelahan ekstrem, dan penurunan kesadaran. Arsenik diketahui mengikat gugus tiol lipoamid dan menghambat kerja kompleks enzim <strong>piruvat dehidrogenase</strong>, enzim kunci yang mengonversi asam piruvat menjadi asetil-KoA sebelum masuk ke siklus Krebs.
<br>Dampak langsung dari gangguan ini terhadap metabolisme sel adalah ....
</p>`,
    options: [
      { id: "A", text: "akumulasi asetil-KoA karena tidak dapat masuk ke siklus Kreb" },
      { id: "B", text: "penurunan NAD⁺ akibat meningkatnya aktivitas rantai transpor elektron" },
      { id: "C", text: "penurunan pembentukan ATP karena terganggunya produksi asetil-KoA" },
      { id: "D", text: "produksi asam laktat meningkat akibat percepatan siklus Krebs" },
      { id: "E", text: "peningkatan fosforilasi oksidatif karena piruvat menumpuk dalam sitoplasma" }
    ],
    kunci: "C",
    pembahasan: `<strong>Inhibisi Enzim Piruvat Dehidrogenase oleh Toksin Arsenik:</strong><br>
&bull; Kompleks piruvat dehidrogenase (PDH) mengatalisis reaksi dekarboksilasi oksidatif: \(\\text{Piruvat} + \\text{NAD}^+ + \\text{CoA} \\rightarrow \\text{Asetil-KoA} + \\text{NADH} + \\text{CO}_2\).<br>
&bull; Jika enzim ini diinhibisi oleh arsenik, produksi <strong>asetil-KoA</strong> anjlok drastis.<br>
&bull; Tanpa pasokan asetil-KoA, siklus Krebs kehilangan substrat utama untuk berputar, sehingga pembentukan pereduksi \(\\text{NADH}\) dan \(\\text{FADH}_2\) terhenti.<br>
&bull; Akibatnya, sintesis ATP lewat fosforilasi oksidatif runtuh, memicu krisis energi seluler parah (lemas dan koma).<br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 25,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Koordinasi (Ritme Sirkadian & Hormon)",
    indikator: "Mengidentifikasi jenis hormon yang berperan dalam perubahan kondisi tubuh yang terjadi. (28)",
    kode: "25BIOPMHSKOB09SA-000000-0831",
    tipe: "pg",
    img: "/tka/img/biologi/soal_25.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang murid kesulitan tidur meskipun tubuhnya terasa lelah karena sering menggunakan ponsel hingga larut malam. Akibatnya ia merasa mengantuk saat pelajaran pagi dan sulit fokus di kelas.
<br>Hormon yang produksinya kemungkinan terganggu karena kebiasaan tersebut adalah ....
</p>`,
    options: [
      { id: "A", text: "adrenalin" },
      { id: "B", text: "kortisol" },
      { id: "C", text: "melatonin" },
      { id: "D", text: "oksitosin" },
      { id: "E", text: "tiroksin" }
    ],
    kunci: "C",
    pembahasan: `<strong>Regulasi Hormon Melatonin dan Cahaya Biru (Blue Light):</strong><br>
&bull; Hormon <strong>melatonin</strong> diproduksi oleh <strong>kelenjar pineal</strong> di otak untuk mengatur siklus tidur-bangun (ritme sirkadian).<br>
&bull; Paparan radiasi cahaya biru dari layar gawai malam hari diterima oleh sel ganglion retina ipRGC dan mengirimkan sinyal ke nukleus suprakiasmatik (SCN) di hipotalamus untuk menekan sintesis dan sekresi melatonin.<br>
&bull; Ketiadaan lonjakan melatonin malam hari menghambat inisiasi kantuk alami dan merusak arsitektur tidur pulas (fase REM & non-REM).<br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 26,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Koordinasi (Struktur Sel Saraf)",
    indikator: "Menentukan bagian neuron berdasarkan fungsinya. (29)",
    kode: "25BIOPMHSKOB09SA-000000-1003",
    tipe: "pg",
    img: "/tka/img/biologi/soal_26.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan gambar struktur sel neuron!
<br>Dalam proses penghantaran impuls saraf, setiap bagian neuron memiliki perannya masing-masing. Salah satu bagian penting yang terdapat di tengah badan sel ditandai dengan bentuk bulat (nukleus). Bagian tersebut berperan dalam....
</p>`,
    options: [
      { id: "A", text: "menyusun lapisan pelindung akson untuk mempercepat impuls" },
      { id: "B", text: "mengatur seluruh aktivitas sel saraf termasuk sintesis protein" },
      { id: "C", text: "menghantarkan impuls saraf ke otot dan kelenjar" },
      { id: "D", text: "menerima rangsangan dari lingkungan eksternal" },
      { id: "E", text: "membentuk celah sinapsis sebagai penghubung antar neuron" }
    ],
    kunci: "B",
    pembahasan: `<strong>Fungsi Nukleus (Inti Sel) pada Neuron:</strong><br>
&bull; Nukleus terletak di pusat badan sel (perikarion/soma).<br>
&bull; Di dalam nukleus terdapat materi genetik (DNA) yang mengatur transkripsi RNA dan mengendalikan seluruh metabolisme serta sintesis protein seluler (seperti enzim pembentuk neurotransmiter dan protein sitoskeleton aksonal).<br>
Pilihan A adalah fungsi sel Schwann/mielin; C adalah fungsi akson; D adalah fungsi dendrit; E adalah fungsi tombol terminal sinapsis.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 27,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Imun",
    indikator: "Mengidentifikasi jenis kekebalan tubuh (spesifik atau nonspesifik) pada sistem imun. (30)",
    kode: "25BIOPMHSIMB08SA-000000-0737",
    tipe: "pg",
    img: "/tka/img/biologi/soal_27.png",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang murid mengalami ruam kulit, gatal hebat, dan sesak napas setiap kali mengonsumsi udang atau cumi-cumi. Pemeriksaan laboratorium menunjukkan kadar Imunoglobulin E (IgE) dalam darahnya meningkat secara signifikan setelah mengonsumsi makanan laut tersebut, padahal zat alergen itu seharusnya tidak berbahaya bagi individu normal.
<br>Kondisi tersebut merupakan contoh gangguan sistem imun yang melibatkan respons kekebalan tubuh secara ....
</p>`,
    options: [
      { id: "A", text: "spesifik, karena melibatkan antibodi yang mengenali antigen secara khas" },
      { id: "B", text: "nonspesifik, karena melibatkan sel fagosit dan respons inflamasi umum" },
      { id: "C", text: "pasif alami, karena antibodi diperoleh tanpa stimulasi antigen" },
      { id: "D", text: "spesifik alami, karena disebabkan infeksi mikroorganisme patogen" },
      { id: "E", text: "nonspesifik alami, karena terjadi tanpa paparan antigen luar" }
    ],
    kunci: "A",
    pembahasan: `<strong>Reaksi Hipersensitivitas Tipe I (Alergi & IgE Spesifik):</strong><br>
&bull; Alergi makanan laut (seafood) adalah reaksi hipersensitivitas tipe cepat yang dimediasi oleh antibodi <strong>Imunoglobulin E (IgE)</strong>.<br>
&bull; Antibodi IgE merupakan komponen dari <strong>sistem imun adaptif (spesifik)</strong> yang disintesis oleh sel plasma teraktivasi dan memiliki paratop unik yang hanya berikatan secara komplementer dengan epitop alergen spesifik (misalnya protein tropomiosin udang).<br>
&bull; Kompleks IgE kemudian menempel pada reseptor Fc&epsilon;RI di sel mast/basofil, memicu degranulasi histamin yang menimbulkan ruam gatal dan bronkokonstriksi.<br>
<strong>Kunci Jawaban: A</strong>`
  }
];

const tkaBiologiPackages = {
  paket1: {
    id: "paket1",
    title: "Paket 1: Soal Resmi TKA Biologi 2025 (27 Soal)",
    shortTitle: "Paket 1 (Resmi 2025)",
    badge: "Resmi 2025",
    total: 27,
    get data() { return tkaBiologiPaket1Data; }
  },
  paket2: {
    id: "paket2",
    title: "Paket 2: Try Out TKA Biologi 2025/2026 (25 Soal HOTS)",
    shortTitle: "Paket 2 (Try Out 2025/2026)",
    badge: "Try Out HOTS",
    total: 25,
    get data() { return (typeof tkaBiologiPaket2Data !== 'undefined') ? tkaBiologiPaket2Data : []; }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaBiologiPaket1Data, tkaBiologiPackages };
}

if (typeof window !== 'undefined') {
  window.tkaBiologiPaket1Data = tkaBiologiPaket1Data;
  window.tkaBiologiPackages = tkaBiologiPackages;
}
