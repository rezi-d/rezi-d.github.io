// scripts/build_indonesia_pilihan_paket2.js
// Generator untuk tka/data/mapel-indonesia-pilihan-paket2.js
// 25 Soal Standar TKA Bahasa Indonesia (Pilihan / Tingkat Lanjut) Kurikulum Merdeka Fase F
// Disinkronkan langsung dari Halaman 128-163 Buku Kompilasi Soal TKA Mata Pilihan 2025
// Variasi: 17 PG, 4 MCMA, 4 Benar/Salah (kompleks_bs)
// 100% BEBAS tanda dolar ($)

const fs = require('fs');
const path = require('path');

const soalList = [
  // --- WACANA 1: TEKS EKSPLANASI BERITA KEBAKARAN GLODOK PLAZA (Soal 1 s.d. 3) ---
  {
    id: 1,
    kode: "25BINP-PRED2-001",
    elemen: "Membaca dan Memirsa",
    subelemen: "Menemukan Informasi Faktual Teks Berita",
    kompetensi: "Mengidentifikasi kesesuaian informasi faktual dalam teks eksplanasi berita aktual.",
    indikator: "Menemukan pernyataan yang tidak sesuai dengan kronologi kejadian kebakaran dalam teks.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-rose-100 text-rose-800 font-bold rounded-lg text-xs mb-1">Wacana 1 (Soal 1 s.d. 3)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Detik-Detik Penyelamatan Korban Kebakaran Glodok Plaza</p>
  <p><strong>[1]</strong> Sejumlah orang yang terjebak kebakaran di Glodok Plaza, Jakarta Barat, melambaikan kain dan menyalakan senter dari ponsel, Rabu (15/1/2025) malam. Hal ini mereka lakukan untuk meminta pertolongan dari warga dan petugas yang berada di lokasi. Lambaian kain dan sinar dari senter itu sebagai penanda keberadaan mereka agar mudah diketahui petugas dan warga.</p>
  <p><strong>[2]</strong> Pengamatan di lokasi, mereka yang terjebak beberapa kali melambaikan tangan ke arah kerumunan warga yang menonton dari bawah. Ada juga yang menampakkan diri melalui jendela gedung untuk meminta pertolongan. Sementara itu, warga yang menonton dari bawah gedung berteriak memperingatkan mereka untuk tidak melompat. Rata-rata posisi warga yang terjebak ini berada di lantai 7 dan 8 gedung perbelanjaan tersebut.</p>
  <p><strong>[3]</strong> Kebakaran hebat tersebut diduga kuat bermula dari salah satu ruangan diskotek di lantai 7. Petugas pemadam kebakaran tiba di lokasi kejadian pada pukul 22.20 WIB dan langsung menurunkan tangga darurat untuk mengevakuasi korban. Sebanyak 105 personel pemadam beserta 21 unit mobil damkar dikerahkan ke lokasi. Hingga pukul 22.58 WIB, petugas gabungan masih berjibaku memadamkan kobaran api yang terus membesar tertiup angin kencang.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan Wacana 1, pernyataan di bawah ini yang <strong>TIDAK SESUAI</strong> dengan fakta yang ada di dalam teks adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Kebakaran di Glodok Plaza diduga kuat berasal dari lantai 7 gedung." },
      { id: "B", key: "B", text: "Petugas pemadam kebakaran baru tiba di lokasi kejadian setelah kobaran api berhasil dipadamkan sepenuhnya oleh warga sekitar." },
      { id: "C", key: "C", text: "Warga yang terjebak menggunakan senter ponsel dan lambaian kain sebagai sinyal penanda keberadaan mereka." },
      { id: "D", key: "D", text: "Sebanyak 105 personel dan 21 unit mobil pemadam kebakaran dikerahkan untuk mengatasi amukan api." },
      { id: "E", key: "E", text: "Peristiwa evakuasi warga yang terjebak kebakaran tersebut berlangsung pada malam hari." }
    ],
    kunci: "B",
    pembahasan: `<strong>Analisis Kesesuaian Fakta Wacana (Hal. 148):</strong><br>
Pernyataan pada <strong>Pilihan B</strong> tidak sesuai dengan teks. Paragraf [3] menyatakan bahwa petugas pemadam tiba pukul 22.20 WIB saat kobaran api <em>masih belum padam</em>, bahkan hingga pukul 22.58 WIB petugas masih terus berjibaku memadamkan api di lokasi. Adapun pilihan A, C, D, dan E seluruhnya tertera secara eksplisit dalam bacaan.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 2,
    kode: "25BINP-PRED2-002",
    elemen: "Membaca dan Memirsa",
    subelemen: "Makna Kosakata Kontekstual",
    kompetensi: "Menjelaskan arti leksikal dan kontekstual kata serapan dalam teks.",
    indikator: "Menentukan makna kata 'evakuasi' berdasarkan konteks situasi darurat kebakaran.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan kalimat berikut dari paragraf ketiga Wacana 1:<br>
<em>"Petugas pemadam kebakaran tiba di lokasi kejadian pada pukul 22.20 WIB dan langsung menurunkan tangga darurat untuk <strong>mengevakuasi</strong> korban."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Makna kata <strong>evakuasi</strong> dalam konteks kalimat tersebut adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "penyelidikan forensik kepolisian untuk mencari penyebab timbulnya percikan api" },
      { id: "B", key: "B", text: "pendataan jumlah kerugian materiil barang dagangan yang hangus terbakar" },
      { id: "C", key: "C", text: "penyiraman air bertekanan tinggi ke arah pusat kobaran api di lantai atas" },
      { id: "D", key: "D", text: "penutupan akses jalan raya di sekitar gedung untuk kelancaran mobil tangki" },
      { id: "E", key: "E", text: "pemindahan atau penyelamatan orang-orang dari tempat yang berbahaya menuju tempat yang aman" }
    ],
    kunci: "E",
    pembahasan: `<strong>Makna Istilah KBBI (Hal. 148):</strong><br>
Menurut KBBI, kata <strong>evakuasi</strong> bermakna pemindahan penduduk atau orang-orang dari daerah yang berbahaya (seperti medan perang, kebakaran, banjir, atau letusan gunung berapi) ke tempat yang aman. Dalam wacana, evakuasi merujuk pada upaya penyelamatan warga yang terjebak di lantai 7 dan 8 menggunakan tangga pemadam.<br><br>
<strong>Kunci Jawaban: E</strong>`
  },
  {
    id: 3,
    kode: "25BINP-PRED2-003",
    elemen: "Membaca dan Memirsa",
    subelemen: "Tujuan Penulisan Teks Eksplanasi Berita",
    kompetensi: "Menganalisis fungsi komunikatif dan tujuan retoris teks berita faktual.",
    indikator: "Menyimpulkan tujuan utama penulisan teks peristiwa kebakaran Glodok Plaza.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Tujuan utama penulisan teks eksplanasi pada Wacana 1 di atas adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "mempromosikan tempat hiburan malam yang ada di lantai 7 gedung Glodok Plaza" },
      { id: "B", key: "B", text: "mengkritik kinerja petugas pemadam kebakaran yang lambat datang ke lokasi" },
      { id: "C", key: "C", text: "memberikan informasi terperinci mengenai peristiwa dan kronologi penyelamatan korban kebakaran di Glodok Plaza" },
      { id: "D", key: "D", text: "membujuk pembaca agar tidak mengunjungi pusat perbelanjaan elektronik di Jakarta Barat" },
      { id: "E", key: "E", text: "menjelaskan cara kerja tangga hidrolik mobil pemadam kebakaran modern" }
    ],
    kunci: "C",
    pembahasan: `<strong>Tujuan Teks Eksplanasi Faktual (Hal. 148–149):</strong><br>
Tujuan teks eksplanasi berita adalah memberikan pemaparan objektif dan kronologis kepada publik tentang bagaimana suatu peristiwa terjadi, situasi warga yang terjebak, serta langkah-langkah penanganan evakuasi oleh aparat pemadam kebakaran.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },

  // --- WACANA 2: PUISI SATIRE LINGKUNGAN "PEMANASAN KOTA" (Soal 4 s.d. 6) ---
  {
    id: 4,
    kode: "25BINP-PRED2-004",
    elemen: "Membaca dan Memirsa",
    subelemen: "Analisis Makna Puisi Kontemporer",
    kompetensi: "Menganalisis makna baris dan imaji visual dalam puisi bertema sosial lingkungan.",
    indikator: "Menilai kebenaran tafsir bait puisi 'Pemanasan Kota'.",
    tipe: "kompleks_bs",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
  <span class="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs mb-1 font-sans">Kutipan Puisi (Soal 4 s.d. 6)</span>
  <p class="font-bold text-slate-900 font-sans not-italic">PEMANASAN KOTA (Ahmad Nyabeer)</p>
  <p class="italic">
    Kobar matahari membakar kotaku<br>
    jalan raya, trotoar, keramik, pagar besi<br>
    mengirim panas pada wajahku<br>
    haruskah kuhentikan langkah kaki<br>
    di bawah dedaun yang juga gerah?<br>
    sedang air yang menyimpan sejuk jalanan<br>
    telah habis diminum zaman<br><br>
    Zaman yang memanggil para petani<br>
    menjadi tukang becak, penjual semangka, penjaga warung,<br>
    pembersih selokan atau pengemis yang tak tahu malu<br>
    kulihat semuanya di kota ini<br>
    membakar perih setiap nurani...
  </p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan interpretasi puisi di atas:
</p>`,
    items: [
      {
        pernyataan: "Larik 'sedang air yang menyimpan sejuk jalanan telah habis diminum zaman' merupakan metafora tentang hilangnya ruang terbuka hijau dan resapan air akibat laju modernisasi fisik kota.",
        kunci: "Benar",
        penjelasan: "Menggambarkan alih fungsi alam menjadi beton perkotaan."
      },
      {
        pernyataan: "Penyair melukiskan bahwa para petani desa yang bermigrasi ke kota berhasil meraih kemakmuran hidup dan derajat sosial yang tinggi.",
        kunci: "Salah",
        penjelasan: "Penyair justru melukiskan kepedihan nasib petani yang terpinggirkan menjadi buruh kasar, penjual asongan, atau pengemis kota."
      },
      {
        pernyataan: "Diksi 'membakar perih setiap nurani' mencerminkan gejolak empati moral penyair saat menyaksikan kerasnya kontras sosial di perkotaan.",
        kunci: "Benar",
        penjelasan: "Menggambarkan luka batin menyaksikan ketimpangan nasib manusia perkotaan."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Interpretasi Teks Puisi (Hal. 150):</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Frasa <em>habis diminum zaman</em> melambangkan eksploitasi lingkungan demi pembangunan beton perkotaan.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Bait kedua dengan gamblang menyebut petani berubah menjadi tukang becak, pembersih selokan, hingga pengemis (termarjinalkan, bukan makmur).<br>
3. <strong>Pernyataan 3 (Benar):</strong> Ungkapan nurani yang terbakar perih adalah ekspresi empati sosial pengarang.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`
  },
  {
    id: 5,
    kode: "25BINP-PRED2-005",
    elemen: "Membaca dan Memirsa",
    subelemen: "Kritik Sosial & Pesan Moral Puisi",
    kompetensi: "Menganalisis kritik sosial yang tersirat dalam struktur batin puisi.",
    indikator: "Memilih pernyataan kritik sosial dan pesan moral yang selaras dengan puisi 'Pemanasan Kota'.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Berdasarkan puisi <em>"Pemanasan Kota"</em> karya Ahmad Nyabeer, kritik sosial manakah yang tersirat di dalamnya? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Modernisasi fisik kota sering kali mengorbankan kelestarian alam dan kenyamanan hidup manusia" },
      { id: "B", key: "B", text: "Pembangunan gedung kaca bertingkat telah berhasil menciptakan pemerataan ekonomi yang adil" },
      { id: "C", key: "C", text: "Urbanisasi tanpa pembekalan keterampilan memicu marjinalisasi kaum petani di ruang-ruang sempit perkotaan" },
      { id: "D", key: "D", text: "Masyarakat perkotaan hidup dalam keharmonisan alam yang sejuk dan menenangkan batin" },
      { id: "E", key: "E", text: "Para petani di pedesaan sebaiknya dipaksa menjual seluruh tanah sawahnya kepada kontraktor jalan tol" }
    ],
    kunci: ["A", "C"],
    pembahasan: `<strong>Kritik Sosial Puisi (Hal. 150):</strong><br>
- <strong>Opsi A (Benar):</strong> Puisi mengkritik keras aspal, pagar besi, dan keramik yang memancarkan panas menggantikan pepohonan sejuk.<br>
- <strong>Opsi C (Benar):</strong> Baris <em>"zaman yang memanggil para petani menjadi tukang becak..."</em> mengkritik fenomena urbanisasi yang menyisihkan kaum agraris menjadi kelas pekerja informal rentan di kota.<br>
- Opsi B, D, dan E bertolak belakang dengan nada satire puisi.<br><br>
<strong>Kunci Jawaban: A dan C</strong>`
  },
  {
    id: 6,
    kode: "25BINP-PRED2-006",
    elemen: "Membaca dan Memirsa",
    subelemen: "Tema Pokok Puisi",
    kompetensi: "Menentukan tema sentral karya puisi.",
    indikator: "Mengidentifikasi tema pokok puisi 'Pemanasan Kota'.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Tema utama yang disampaikan dalam puisi <em>"Pemanasan Kota"</em> di atas adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "kehidupan masyarakat urban yang terpinggirkan dan kerusakan lingkungan akibat modernisasi perkotaan" },
      { id: "B", key: "B", text: "kebanggaan seorang pejalan kaki yang berhasil menaklukkan teriknya matahari di jalan raya" },
      { id: "C", key: "C", text: "suksesnya pembangunan infrastruktur jalan tol di kota-kota besar Indonesia" },
      { id: "D", key: "D", text: "kegembiraan petani desa saat berlibur menikmati pemandangan gedung bertingkat" },
      { id: "E", key: "E", text: "tata cara memilih bibit semangka manis untuk dijual di pinggir jalan" }
    ],
    kunci: "A",
    pembahasan: `<strong>Tema Sentral Puisi (Hal. 150):</strong><br>
Puisi memadukan tema degradasi lingkungan (panas ekstrem kota tanpa naungan pohon) dengan tema marjinalisasi sosial (nasib petani yang beralih profesi menjadi buruh jalanan di tengah rimba beton).<br><br>
<strong>Kunci Jawaban: A</strong>`
  },

  // --- WACANA 3: CERPEN "MATA HATI HASAN" (Soal 7 s.d. 9) ---
  {
    id: 7,
    kode: "25BINP-PRED2-007",
    elemen: "Membaca dan Memirsa",
    subelemen: "Karakterisasi & Konflik Batin Cerpen",
    kompetensi: "Menganalisis sikap dan respon psikologis tokoh cerpen terhadap tragedi hidup.",
    indikator: "Menjelaskan pandangan tokoh kakak yang tetap tabah meski operasi donor korneanya tidak berhasil.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-purple-100 text-purple-800 font-bold rounded-lg text-xs mb-1">Kutipan Cerpen (Soal 7 s.d. 9)</span>
  <p><em>Aku menutup mulutku yang menganga karena tak menyangka melihat kakak pulang bersama mamah dalam keadaan yang masih tidak bisa melihat. Seminggu yang lalu kakak dioperasi di rumah sakit besar karena sudah mendapat donor kornea mata dari orang lain.</em></p>
  <p><em>"Kak, mata kakak?" Aku melambaikan tanganku ke wajahnya tepat di bagian matanya. Namun, tidak ada reaksi dari matanya. Sama sekali tak berkedip.</em></p>
  <p><em>"Mah, kakak, kok, tetap gak bisa melihat?" Aku bertanya pada mamah. Tapi, mamah tidak menjawabku. Ia malah masuk ke dalam meninggalkanku dan kakak di depan pintu.</em></p>
  <p><em>"Kakak gak apa-apa, kok, jika harus selamanya gak bisa melihat. Asalkan kakak bisa terus bersama kamu, Dek," ia berkata sambil memegang erat tongkat yang selama ini menuntunnya dalam gelap. Aku menangis mendengarnya.</em></p>
  <p><em>"Maafkan aku, Kak. Karena aku kakak jadi gak bisa melihat seperti ini." Aku memeluknya erat.</em></p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Bagaimana pandangan dan sikap batin tokoh kakak terhadap kondisinya yang tetap tidak dapat melihat berdasarkan kutipan cerpen di atas?
</p>`,
    options: [
      { id: "A", key: "A", text: "Menyalahkan dokter dan pihak rumah sakit yang dinilai melakukan malapraktik saat operasi" },
      { id: "B", key: "B", text: "Merasa putus asa dan mengurung diri di kamar karena merasa masa depannya telah hancur" },
      { id: "C", key: "C", text: "Menaruh rasa benci dan dendam mendalam kepada adiknya yang menjadi penyebab kebutaannya" },
      { id: "D", key: "D", text: "Menerima keadaannya dengan ikhlas, sabar, dan penuh kehangatan kasih sayang demi menenangkan hati adiknya" },
      { id: "E", key: "E", text: "Memaksa ibunya mencari donor kornea mata kedua dari luar negeri secepatnya" }
    ],
    kunci: "D",
    pembahasan: `<strong>Sikap Batin Tokoh (Hal. 151):</strong><br>
Tokoh kakak menunjukkan kematangan jiwa dan keikhlasan luar biasa. Alih-alih marah atau meratapi nasib operasinya yang gagal, ia justru merengkuh dan menenangkan adiknya dengan kalimat tulus: <em>"Kakak gak apa-apa, kok, jika harus selamanya gak bisa melihat. Asalkan kakak bisa terus bersama kamu, Dek."</em><br><br>
<strong>Kunci Jawaban: D</strong>`
  },
  {
    id: 8,
    kode: "25BINP-PRED2-008",
    elemen: "Membaca dan Memirsa",
    subelemen: "Simbolisme dalam Cerpen",
    kompetensi: "Menganalisis makna simbolis dari objek/properti dalam karya fiksi prosa.",
    indikator: "Menjelaskan perlambang 'tongkat yang menuntunnya dalam gelap'.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Apa yang dilambangkan oleh <strong>"tongkat yang selama ini menuntunnya dalam gelap"</strong> yang dipegang erat oleh tokoh kakak dalam kutipan cerpen tersebut?
</p>`,
    options: [
      { id: "A", key: "A", text: "Senjata pertahanan diri dari ancaman bahaya fisik di jalanan" },
      { id: "B", key: "B", text: "Benda antik warisan keluarga kakek yang bernilai jual tinggi" },
      { id: "C", key: "C", text: "Simbol ketegaran, kemandirian, dan harapan untuk terus melangkah menjalani hidup meski dalam keterbatasan penglihatan" },
      { id: "D", key: "D", text: "Kerapuhan fisik manusia yang tidak mampu berjalan tanpa pertolongan orang lain" },
      { id: "E", key: "E", text: "Tanda kemarahan terselubung terhadap sang adik yang selalu merepotkannya" }
    ],
    kunci: "C",
    pembahasan: `<strong>Makna Simbolik Objek Sastra (Hal. 151):</strong><br>
Tongkat tunanetra yang dipegang erat bukan sekadar alat bantu fisik, melainkan metafora dari keteguhan hati, ketabahan jiwa, serta harapan hidup mandiri dalam meniti kegelapan dunia tanpa kehilangan arah dan kasih sayang.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 9,
    kode: "25BINP-PRED2-009",
    elemen: "Membaca dan Memirsa",
    subelemen: "Amanat Cerita Pendek",
    kompetensi: "Merumuskan pesan moral universal dari cerita pendek.",
    indikator: "Menentukan amanat utama yang dapat dipetik dari cerpen tokoh Hasan dan adiknya.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Amanat moral utama yang dapat dipetik dari penggalan cerpen di atas adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Jangan pernah melakukan operasi mata di rumah sakit daerah" },
      { id: "B", key: "B", text: "Kasih sayang persaudaraan yang sejati diwujudkan melalui keikhlasan memaafkan, kerelaan berkorban, dan saling menguatkan dalam menghadapi ujian berat kehidupan" },
      { id: "C", key: "C", text: "Seseorang harus menyembunyikan kesedihannya dengan berpura-pura bahagia di hadapan tetangga" },
      { id: "D", key: "D", text: "Penyesalan masa lalu tidak akan pernah ada gunanya bagi masa depan" },
      { id: "E", key: "E", text: "Segala bentuk kecelakaan fisik harus selalu diselesaikan melalui tuntutan ganti rugi hukum" }
    ],
    kunci: "B",
    pembahasan: `<strong>Amanat Cerpen (Hal. 151):</strong><br>
Amanat cerita mengajarkan ketulusan cinta kasih antarsaudara kandung. Keikhlasan memaafkan kesalahan masa lalu adik dan mengutamakan kebersamaan keluarga di atas kepedihan pribadi adalah pesan moral luhur yang disampaikan pengarang.<br><br>
<strong>Kunci Jawaban: B</strong>`
  },

  // --- WACANA 4: ARTIKEL ILMIAH POPULER "MINDFULNESS" (Soal 10 s.d. 12) ---
  {
    id: 10,
    kode: "25BINP-PRED2-010",
    elemen: "Membaca dan Memirsa",
    subelemen: "Evaluasi Data Artikel Populer Kesehatan Mental",
    kompetensi: "Mengevaluasi klaim data ilmiah dalam artikel populer kesehatan jiwa.",
    indikator: "Menilai kebenaran pernyataan terkait pengaruh mindfulness terhadap otak dan stres.",
    tipe: "kompleks_bs",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-teal-100 text-teal-800 font-bold rounded-lg text-xs mb-1">Artikel Populer (Soal 10 s.d. 12)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Mindfulness: Menyembuhkan Jiwa yang Terkoyak di Era Serba Cepat</p>
  <p>Di era digital yang menuntut segala hal serba instan, manusia modern kerap terjebak dalam pusaran kecemasan kronis dan kelelahan mental (<em>burnout</em>). Praktik <em>mindfulness</em>—kesadaran penuh atas momen saat ini tanpa menghakimi—muncul sebagai oase penyejuk batin. Studi neurosains dari Harvard Medical School membuktikan bahwa latihan mindfulness rutin selama delapan minggu dapat mereduksi volume amigdala (pusat pengendali rasa takut dan stres di otak) serta mempertebal korteks prefrontal yang bertanggung jawab atas konsentrasi, pengambilan keputusan, dan empati sosial.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Tentukan kebenaran dari masing-masing pernyataan evaluasi artikel ilmiah populer di atas:
</p>`,
    items: [
      {
        pernyataan: "Praktik mindfulness menekankan pada kesadaran penuh terhadap apa yang dialami pada saat ini dengan sikap terbuka dan tanpa penghakiman negatif.",
        kunci: "Benar",
        penjelasan: "Merupakan definisi inti dari konsep mindfulness."
      },
      {
        pernyataan: "Riset neurosains Harvard membuktikan bahwa latihan mindfulness memperbesar ukuran amigdala sehingga manusia menjadi lebih mudah panik dan cemas.",
        kunci: "Salah",
        penjelasan: "Teks menyatakan mindfulness justru mereduksi (mengecilkan/meredam) aktivitas volume amigdala dan mempertebal korteks prefrontal."
      },
      {
        pernyataan: "Korteks prefrontal merupakan bagian otak yang berperan penting dalam fokus konsentrasi, regulasi emosi, dan pertimbangan logis keputusan.",
        kunci: "Benar",
        penjelasan: "Sesuai rujukan fungsi neurologis pada bacaan."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Evaluasi Fakta Artikel Sains Populer (Hal. 153):</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Definisi *mindfulness* adalah kesadaran penuh saat ini (*present moment awareness*) tanpa menghakimi.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Teks menegaskan mindfulness <em>mereduksi</em> (bukan memperbesar) volume amigdala pemicu stres.<br>
3. <strong>Pernyataan 3 (Benar):</strong> Penguatan korteks prefrontal menopang daya nalar dan konsentrasi manusia.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`
  },
  {
    id: 11,
    kode: "25BINP-PRED2-011",
    elemen: "Membaca dan Memirsa",
    subelemen: "Karakteristik Artikel Ilmiah Populer",
    kompetensi: "Menganalisis ciri-ciri kebahasaan dan struktur artikel ilmiah populer.",
    indikator: "Memilih karakteristik khas artikel ilmiah populer yang membedakannya dari jurnal ilmiah kaku.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Manakah di antara pernyataan berikut yang merupakan <strong>karakteristik khas karya tulis ilmiah populer</strong>? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Menggunakan bahasa yang komunikatif, segar, dan mudah dipahami oleh khalayak pembaca awam" },
      { id: "B", key: "B", text: "Tetap berpijak pada fakta, data riset, atau teori ilmiah yang dapat dipertanggungjawabkan kebenarannya" },
      { id: "C", key: "C", text: "Wajib menggunakan formula matematika murni dan tabel kalkulasi statistik yang rumit tanpa narasi" },
      { id: "D", key: "D", text: "Kerap dipublikasikan di media massa umum seperti surat kabar harian, majalah, atau portal daring edukatif" },
      { id: "E", key: "E", text: "Hanya boleh dibaca oleh akademisi yang bergelar profesor di perguruan tinggi" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Ciri-Ciri Artikel Ilmiah Populer (Hal. 153):</strong><br>
Karya tulis ilmiah populer mengawinkan ketatnya fakta sains dengan kelenturan gaya bahasa jurnalisme:<br>
- <strong>Opsi A (Benar):</strong> Bahasa santun, luwes, dan renyah bagi pembaca umum.<br>
- <strong>Opsi B (Benar):</strong> Substanstif ilmiah (berbasis riset valid, bukan khayalan).<br>
- <strong>Opsi D (Benar):</strong> Saluran publikasi berupa media massa umum (surat kabar, majalah, blog sains).<br>
- Opsi C dan E adalah ciri jurnal akademik monografis khusus.<br><br>
<strong>Kunci Jawaban: A, B, dan D</strong>`
  },
  {
    id: 12,
    kode: "25BINP-PRED2-012",
    elemen: "Membaca dan Memirsa",
    subelemen: "Simpulan Teks Ilmiah Populer",
    kompetensi: "Menyimpulkan pesan utama teks ilmiah populer.",
    indikator: "Menentukan simpulan aplikatif dari artikel mindfulness.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Simpulan praktis yang paling tepat dari wacana tentang mindfulness pada soal nomor 10 adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Manusia di era modern sebaiknya tidak perlu menggunakan internet sama sekali" },
      { id: "B", key: "B", text: "Obat penenang kimiawi adalah satu-satunya solusi ampuh mengatasi kelelahan mental" },
      { id: "C", key: "C", text: "Melatih kesadaran penuh (mindfulness) secara konsisten dapat menjadi ikhtiar ilmiah untuk merawat kesehatan mental dan kejernihan berpikir di tengah derasnya tekanan hidup modern" },
      { id: "D", key: "D", text: "Penelitian otak manusia tidak relevan diterapkan dalam kehidupan sehari-hari" },
      { id: "E", key: "E", text: "Kecemasan dan stres adalah takdir yang tidak dapat diubah oleh latihan apa pun" }
    ],
    kunci: "C",
    pembahasan: `<strong>Simpulan Teks Populer (Hal. 153):</strong><br>
Latihan mindfulness dibuktikan secara neurosains mampu merestrukturisasi respon otak terhadap stres, menjadikannya sarana efektif dan ilmiah bagi masyarakat modern untuk merawat kesehatan mental secara mandiri.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },

  // --- WACANA 5: PIDATO KEBIJAKAN PENDIDIKAN & RESTORATIVE JUSTICE (Soal 13 s.d. 15) ---
  {
    id: 13,
    kode: "25BINP-PRED2-013",
    elemen: "Membaca dan Memirsa",
    subelemen: "Istilah Hukum dalam Teks Kebijakan",
    kompetensi: "Memaknai istilah hukum dan kebijakan publik dalam konteks pidato kenegaraan.",
    indikator: "Menjelaskan arti konsep 'restorative justice' dalam perlindungan profesi guru.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-rose-100 text-rose-800 font-bold rounded-lg text-xs mb-1">Kutipan Pidato (Soal 13 s.d. 15)</span>
  <p><em>"Terkait dengan pelindungan guru, Kemendikdasmen akan menandatangani nota kesepahaman dan perjanjian kerja sama dengan Kepolisian Negara Republik Indonesia yang di dalamnya memuat kesepakatan agar masalah-masalah kesalahpahaman atau dinamika disiplin dalam pendidikan diselesaikan secara damai dan kekeluargaan atau <strong>restorative justice</strong> sehingga guru tidak serta-merta menjadi terpidana."</em></p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Makna istilah <strong>restorative justice</strong> dalam konteks kutipan pidato menteri di atas adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Pemberian hukuman penjara maksimal kepada pelaku kekerasan di lingkungan sekolah tanpa remisi" },
      { id: "B", key: "B", text: "Pendekatan penyelesaian perkara melalui musyawarah damai dan pemulihan keadilan secara kekeluargaan antara pihak yang berselisih tanpa pemidanaan formal di pengadilan" },
      { id: "C", key: "C", text: "Penghapusan seluruh tata tertib kedisiplinan murid demi membebaskan mereka dari sanksi sekolah" },
      { id: "D", key: "D", text: "Kewajiban membayar denda uang yang sangat besar kepada kepolisian setempat" },
      { id: "E", key: "E", text: "Pemberhentian sepihak guru yang dilaporkan oleh orang tua murid ke aparat hukum" }
    ],
    kunci: "B",
    pembahasan: `<strong>Makna Istilah Restorative Justice (Hal. 154):</strong><br>
Dalam hukum pidana modern dan konteks pidato pendidikan, <strong>restorative justice</strong> (keadilan restoratif) adalah pendekatan keadilan yang menitikberatkan pada musyawarah, rekonsiliasi damai, dan pemulihan keadaan semula secara kekeluargaan antara guru, murid, dan orang tua, bukan semata-mata pembalasan hukuman kurungan penjara (*retributif*).<br><br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 14,
    kode: "25BINP-PRED2-014",
    elemen: "Membaca dan Memirsa",
    subelemen: "Klasifikasi Teks Eksposisi Pidato",
    kompetensi: "Menganalisis jenis teks eksposisi berdasarkan struktur dan tujuan penyampaiannya.",
    indikator: "Menentukan jenis teks eksposisi laporan pada pidato Hari Guru Nasional.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Ditinjau dari struktur pemaparan program kerja pemerintah dan pertanggungjawaban capaian kementerian, kutipan pidato resmi menteri pada soal nomor 13 tergolong ke dalam jenis teks eksposisi....
</p>`,
    options: [
      { id: "A", key: "A", text: "eksposisi ilustrasi" },
      { id: "B", key: "B", text: "eksposisi perbandingan" },
      { id: "C", key: "C", text: "eksposisi laporan" },
      { id: "D", key: "D", text: "eksposisi pertentangan" },
      { id: "E", key: "E", text: "eksposisi definisi murni" }
    ],
    kunci: "C",
    pembahasan: `<strong>Jenis Teks Eksposisi (Hal. 154):</strong><br>
Teks pidato tersebut menyampaikan laporan komprehensif mengenai langkah-langkah kebijakan prioritas kementerian (peningkatan kualifikasi S-1, pelatihan kompetensi, sertifikasi kesejahteraan, dan nota kesepahaman perlindungan hukum dengan Polri). Penyampaian data program kerja ini tergolong ke dalam <strong>eksposisi laporan</strong>.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 15,
    kode: "25BINP-PRED2-015",
    elemen: "Membaca dan Memirsa",
    subelemen: "Evaluasi Rincian Pidato Kebijakan",
    kompetensi: "Menilai kebenaran butir-butir program prioritas dalam pidato kenegaraan.",
    indikator: "Menilai kebenaran pernyataan terkait tiga prioritas peningkatan martabat guru.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Berdasarkan wacana pidato resmi Hari Guru Nasional 2024, tentukan kebenaran dari masing-masing pernyataan program prioritas berikut:
</p>`,
    items: [
      {
        pernyataan: "Kementerian memberikan kesempatan beasiswa lanjutan studi ke jenjang D-IV atau S-1 bagi para guru yang belum berkualifikasi sarjana.",
        kunci: "Benar",
        penjelasan: "Merupakan pilar prioritas pertama peningkatan kualifikasi akademik pendidik."
      },
      {
        pernyataan: "Peningkatan kesejahteraan guru melalui sertifikasi hanya diperuntukkan bagi guru berstatus ASN PNS, sedangkan guru honorer non-ASN dilarang menerima tunjangan.",
        kunci: "Salah",
        penjelasan: "Teks pidato menegaskan sertifikasi mencakup guru ASN PNS, PPPK, maupun non-ASN."
      },
      {
        pernyataan: "Perjanjian kerja sama dengan Kepolisian bertujuan agar dinamika penegakan disiplin sekolah tidak serta-merta dikriminalisasi ke meja hijau peradilan pidana.",
        kunci: "Benar",
        penjelasan: "Sesuai muatan nota kesepahaman restorative justice pelindungan guru."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Evaluasi Informasi Pidato (Hal. 154):</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Afirmasi kualifikasi D-IV/S-1 adalah prioritas pertama.<br>
2. <strong>Pernyataan 2 (Salah):</strong> Pidato menegaskan sertifikasi mencakup guru PNS, PPPK, dan non-ASN.<br>
3. <strong>Pernyataan 3 (Benar):</strong> Kerja sama dengan Polri mencegah kriminalisasi guru dalam mendidik.<br><br>
<strong>Kunci Jawaban: Benar, Salah, Benar</strong>`
  },

  // --- WACANA 6: PUISI SATIRE POLITIK "PERMAINAN DI BALIK MEJA" (Soal 16 s.d. 18) ---
  {
    id: 16,
    kode: "25BINP-PRED2-016",
    elemen: "Membaca dan Memirsa",
    subelemen: "Simbolisme dalam Puisi Satire",
    kompetensi: "Menganalisis makna perlambang politik dalam puisi satire modern.",
    indikator: "Menjelaskan simbolisme kata 'meja' dalam puisi 'Permainan di Balik Meja'.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
  <span class="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs mb-1 font-sans">Kutipan Puisi (Soal 16 s.d. 18)</span>
  <p class="font-bold text-slate-900 font-sans not-italic">PERMAINAN DI BALIK MEJA</p>
  <p class="italic">
    Tikus-tikus berlari, tak kenal lelah,<br>
    Berkeliaran di kantor, penuh dengan dusta.<br>
    Berdasi dan licik, tak peduli harga diri,<br>
    Menunggu celah untuk kembali beraksi.<br><br>
    Kucing datang, wajahnya berubah,<br>
    Mengganti sikap, pura-pura tak tahu arah.<br>
    Tikus menghilang, cerdik bersembunyi,<br>
    Tak ada yang tahu siapa yang berpura-pura mati.<br><br>
    Di balik meja mereka bersembunyi,<br>
    Menunggu saat, mengincar yang tak terlihat...
  </p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Simbolisme dari kata <strong>"meja"</strong> yang terdapat dalam puisi satire di atas merujuk pada....
</p>`,
    options: [
      { id: "A", key: "A", text: "perabot kantor kayu jati yang harganya sangat mahal" },
      { id: "B", key: "B", text: "sarana kebersihan tempat meletakkan makanan kucing peliharaan" },
      { id: "C", key: "C", text: "kekuasaan, wewenang birokrasi, dan jabatan formal tempat terjadinya kongkalikong korupsi" },
      { id: "D", key: "D", text: "lapangan permainan tenis meja antarpegawai di jam istirahat" },
      { id: "E", key: "E", text: "batas pemisah antara ruang tunggu tamu dengan lobi kantor" }
    ],
    kunci: "C",
    pembahasan: `<strong>Simbolisme Puisi Satire (Hal. 158):</strong><br>
Dalam wacana puisi politik/sosial, ungkapan <em>di balik meja</em> melambangkan <strong>kekuasaan, posisi jabatan birokrasi, atau wewenang administratif</strong> yang disalahgunakan oleh para koruptor (*tikus berdasi*) untuk melakukan transaksi gelap suap, gratifikasi, dan kolusi tersembunyi.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 17,
    kode: "25BINP-PRED2-017",
    elemen: "Membaca dan Memirsa",
    subelemen: "Karakterisasi Metaforis Tokoh Fabel Satire",
    kompetensi: "Menganalisis sifat-sifat alegoris tokoh fabel dalam puisi kritik sosial.",
    indikator: "Memilih sifat utama 'tikus berdasi' dan 'kucing' dalam puisi.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Berdasarkan bait-bait puisi <em>"Permainan di Balik Meja"</em>, manakah karakterisasi metaforis yang <strong>tepat</strong>? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Tokoh 'tikus' melambangkan sosok koruptor yang licik, serakah, berdasi rapi, dan tidak memiliki rasa malu" },
      { id: "B", key: "B", text: "Tokoh 'kucing' digambarkan sebagai penegak hukum ideal yang selalu tegas tanpa kompromi" },
      { id: "C", key: "C", text: "Tokoh 'kucing' melambangkan oknum pengawas yang kerap berpura-pura tidak melihat penyimpangan (sandiwara penegakan hukum)" },
      { id: "D", key: "D", text: "Puisi menggambarkan tikus dan kucing hidup berdampingan secara tulus demi kemakmuran rakyat" },
      { id: "E", key: "E", text: "Permainan antara tikus dan kucing merefleksikan lingkaran setan korupsi yang terus berulang tanpa henti" }
    ],
    kunci: ["A", "C", "E"],
    pembahasan: `<strong>Karakterisasi Metaforis Puisi (Hal. 158):</strong><br>
- <strong>Opsi A (Benar):</strong> Tikus berdasi adalah personifikasi koruptor berdasi yang rakus.<br>
- <strong>Opsi C (Benar):</strong> Kucing yang <em>mengganti sikap, pura-pura tak tahu arah</em> menyindir oknum pengawas yang berkompromi atau bersandiwara.<br>
- <strong>Opsi E (Benar):</strong> Penutup puisi menegaskan lingkaran setan sandiwara (*terperangkap dalam kebohongan yang sama*).<br><br>
<strong>Kunci Jawaban: A, C, dan E</strong>`
  },
  {
    id: 18,
    kode: "25BINP-PRED2-018",
    elemen: "Membaca dan Memirsa",
    subelemen: "Pesan Moral Satire Politik",
    kompetensi: "Menentukan pesan moral universal dari puisi satire.",
    indikator: "Menentukan pesan utama dari puisi 'Permainan di Balik Meja'.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Pesan moral mendalam yang ingin disampaikan penyair melalui puisi <em>"Permainan di Balik Meja"</em> adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Kantor-kantor dinas pemerintah sebaiknya memelihara lebih banyak kucing ras persia" },
      { id: "B", key: "B", text: "Pegawai kantor diwajibkan membeli racun tikus setiap awal bulan" },
      { id: "C", key: "C", text: "Korupsi dan kolusi birokrasi merupakan lingkaran setan kemunafikan yang sulit diputus jika aparat pengawas dan pelaku hanya bersandiwara saling menguntungkan" },
      { id: "D", key: "D", text: "Berdasi ke kantor adalah cara terbaik untuk menghindari jerat hukum pidana" },
      { id: "E", key: "E", text: "Keserakahan akan berakhir damai apabila semua pihak membagi keuntungan secara rata" }
    ],
    kunci: "C",
    pembahasan: `<strong>Pesan Moral Puisi Satire (Hal. 158):</strong><br>
Penyair mengingatkan bahaya sistemik korupsi. Jika aparat penegak hukum (kucing) dan pelaku manipulasi (tikus) bermain mata di balik meja, maka keadilan sejati tidak akan pernah terwujud dan bangsa akan terjebak dalam kebohongan permanen.<br><br>
<strong>Kunci Jawaban: C</strong>`
  },

  // --- WACANA 7: CERPEN PSIKOLOGIS "PECAHAN CERMIN OZA" (Soal 19 s.d. 21) ---
  {
    id: 19,
    kode: "25BINP-PRED2-019",
    elemen: "Membaca dan Memirsa",
    subelemen: "Simbolisme Cerpen Psikologis",
    kompetensi: "Menganalisis simbolisme psikologis dalam teks narasi fiksi.",
    indikator: "Menjelaskan arti simbol 'pecahan cermin' dalam mencerminkan kondisi batin tokoh Oza.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-purple-100 text-purple-800 font-bold rounded-lg text-xs mb-1">Kutipan Cerpen (Soal 19 s.d. 21)</span>
  <p><em>Oza terpaku memandang serpihan kaca yang berserakan di lantai kamarnya. Setiap serpihan cermin itu memantulkan pantulan wajahnya yang terpotong-potong, retak, dan tak utuh lagi. Suara bentakan ayahnya semalam masih berdenging pekak di telinganya. Oza berjongkok, berniat memunguti pecahan kaca itu dengan jemarinya yang gemetar, namun darah segar justru menetes dari ujung telunjuknya. Oza tersenyum getir; rasa sakit di jarinya tak sebanding dengan retak berkeping-keping di dalam dadanya.</em></p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Maksud dari simbolisme <strong>"pecahan cermin"</strong> yang memantulkan bayangan terpotong-potong dalam kutipan cerpen di atas adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Kerapuhan jiwa, krisis identitas, dan luka trauma batin tokoh Oza yang hancur berkeping-keping akibat konflik keluarga" },
      { id: "B", key: "B", text: "Kualitas cermin buatan pabrik yang sangat rapuh dan mudah pecah saat tersenggol" },
      { id: "C", key: "C", text: "Kebiasaan tokoh Oza yang gemar berdandan di depan cermin sebelum berangkat sekolah" },
      { id: "D", key: "D", text: "Pertanda mistis bahwa rumah keluarga Oza akan didatangi oleh musuh masa lalu" },
      { id: "E", key: "E", text: "Keinginan tokoh Oza untuk membeli cermin hias berukuran lebih besar" }
    ],
    kunci: "A",
    pembahasan: `<strong>Simbolisme Psikologis Sastra (Hal. 159):</strong><br>
Pecahan cermin adalah perlambang klasik dari retaknya keutuhan konsep diri (*identity fragmentation*), luka psikologis mendalam, dan trauma kekerasan verbal keluarga yang dialami tokoh Oza hingga batinnya merasa hancur berkeping-keping.<br><br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 20,
    kode: "25BINP-PRED2-020",
    elemen: "Membaca dan Memirsa",
    subelemen: "Karakterisasi Tokoh Melalui Tindakan",
    kompetensi: "Menganalisis kondisi emosional dan watak tokoh cerita fiksi.",
    indikator: "Menentukan kondisi psikologis tokoh Oza berdasarkan respons terhadap luka fisiknya.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Karakter dan kondisi batin tokoh Oza berdasarkan kalimat <em>"Oza tersenyum getir; rasa sakit di jarinya tak sebanding dengan retak berkeping-keping di dalam dadanya"</em> mencerminkan sosok yang....
</p>`,
    options: [
      { id: "A", key: "A", text: "pemarah dan suka merusak barang-barang berharga di dalam rumah" },
      { id: "B", key: "B", text: "sombong dan tidak memedulikan nasihat orang tuanya" },
      { id: "C", key: "C", text: "periang dan menganggap enteng segala persoalan hidup" },
      { id: "D", key: "D", text: "mengalami depresi dan kehampaan batin yang mendalam hingga mati rasa terhadap rasa sakit fisik" },
      { id: "E", key: "E", text: "penakut yang selalu berteriak histeris saat melihat darah" }
    ],
    kunci: "D",
    pembahasan: `<strong>Karakterisasi Tokoh (Hal. 159):</strong><br>
Tersenyum getir saat jari berdarah menandakan kondisi mati rasa (*emotional numbness*) akibat rasa sakit mental di dalam dada jauh lebih mendominasi daripada rasa perih luka fisik di jarinya. Ini mencirikan depresi dan kepedihan batin mendalam.<br><br>
<strong>Kunci Jawaban: D</strong>`
  },
  {
    id: 21,
    kode: "25BINP-PRED2-021",
    elemen: "Membaca dan Memirsa",
    subelemen: "Tema Cerpen Psikologis",
    kompetensi: "Menentukan tema cerita fiksi bertema kesehatan jiwa.",
    indikator: "Mengidentifikasi tema yang diangkat dalam cerpen Oza.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Tema utama yang diangkat dalam cerpen <em>"Pecahan Cermin Oza"</em> di atas adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Persaingan sengit antarsaudara memperebutkan harta warisan" },
      { id: "B", key: "B", text: "Trauma psikologis remaja akibat disfungsi komunikasi dan kekerasan verbal dalam keluarga" },
      { id: "C", key: "C", text: "Bahaya bermain pecahan kaca tajam di dalam kamar tidur" },
      { id: "D", key: "D", text: "Petualangan misteri detektif mencari pelaku pencurian cermin" },
      { id: "E", key: "E", text: "Perjuangan seorang anak memenangkan lomba merias wajah" }
    ],
    kunci: "B",
    pembahasan: `<strong>Tema Cerpen (Hal. 159):</strong><br>
Cerita berpusat pada dampak destruktif bentakan verbal orang tua terhadap kesehatan mental anak remaja (luka batin, keretakan identitas, dan trauma emosional).<br><br>
<strong>Kunci Jawaban: B</strong>`
  },

  // --- WACANA 8: PROPOSAL / KARYA TULIS ILMIAH DBD (Soal 22 s.d. 23) ---
  {
    id: 22,
    kode: "25BINP-PRED2-022",
    elemen: "Menulis",
    subelemen: "Struktur Karya Tulis Ilmiah",
    kompetensi: "Menganalisis sistematika penulisan proposal dan laporan karya ilmiah.",
    indikator: "Menilai kebenaran fungsi komponen Latar Belakang, Rumusan Masalah, dan Manfaat Penelitian.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam penyusunan karya tulis ilmiah mengenai epidemiologi penyakit Demam Berdarah Dengue (DBD), tentukan kebenaran fungsi dari masing-masing bagian struktur berikut:
</p>`,
    items: [
      {
        pernyataan: "Bagian Latar Belakang Masalah memaparkan fakta empiris lonjakan kasus DBD, urgensi penelitian, kesenjangan antara kondisi ideal dan realitas di lapangan, serta alasan rasional mengapa topik tersebut penting diteliti.",
        kunci: "Benar",
        penjelasan: "Merupakan fungsi fundamental dari Bab I Pendahuluan bagian Latar Belakang."
      },
      {
        pernyataan: "Rumusan Masalah wajib disusun dalam bentuk kalimat tanya yang spesifik, padat, dan jelas mengenai fokus variabel yang akan diteliti.",
        kunci: "Benar",
        penjelasan: "Rumusan masalah dirumuskan secara operasional dengan kalimat interogatif."
      },
      {
        pernyataan: "Manfaat Penelitian hanya boleh ditujukan untuk keuntungan pribadi peneliti agar memperoleh nilai rapor tertinggi di sekolah.",
        kunci: "Salah",
        penjelasan: "Manfaat penelitian mencakup manfaat teoretis (pengembangan ilmu pengetahuan) dan manfaat praktis bagi masyarakat/instansi terkait."
      }
    ],
    kunci: ["Benar", "Benar", "Salah"],
    pembahasan: `<strong>Struktur Karya Tulis Ilmiah (Hal. 161):</strong><br>
1. <strong>Pernyataan 1 (Benar):</strong> Latar belakang menguraikan urgensi, data fenomena empiris, dan *gap of research*.<br>
2. <strong>Pernyataan 2 (Benar):</strong> Rumusan masalah dirumuskan dalam kalimat tanya terukur.<br>
3. <strong>Pernyataan 3 (Salah):</strong> Manfaat karya ilmiah terbagi atas manfaat teoretis (akademis) dan praktis (kebijakan publik/komunitas), bukan egoisme nilai pribadi.<br><br>
<strong>Kunci Jawaban: Benar, Benar, Salah</strong>`
  },
  {
    id: 23,
    kode: "25BINP-PRED2-023",
    elemen: "Membaca dan Memirsa",
    subelemen: "Argumen Penelitian Epidemiologi",
    kompetensi: "Menganalisis alasan metodologis pentingnya riset penyakit menular.",
    indikator: "Memilih alasan utama mengapa DBD menjadi fokus kajian ilmiah krusial di Indonesia.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Berdasarkan tinjauan karya ilmiah kesehatan lingkungan, manakah alasan-alasan yang menjadikan penelitian pencegahan Demam Berdarah Dengue (DBD) sangat krusial di Indonesia? <em>(Pilih semua jawaban yang benar!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Indonesia beriklim tropis dengan kelembapan tinggi yang sangat mendukung perkembangbiakan nyamuk Aedes aegypti sepanjang tahun" },
      { id: "B", key: "B", text: "Penyakit DBD telah dinyatakan punah total sejak awal abad ke-20 sehingga tidak perlu diwaspadai lagi" },
      { id: "C", key: "C", text: "Serangan DBD dapat berkembang cepat menjadi Dengue Shock Syndrome (DSS) yang berisiko fatal kematian jika penanganannya terlambat" },
      { id: "D", key: "D", text: "Virus dengue dapat ditularkan secara langsung melalui percikan air ludah saat berbicara" },
      { id: "E", key: "E", text: "Perubahan iklim global dan cuaca ekstrem memicu pergeseran siklus hidup nyamuk vektor dengue menjadi lebih adaptif" }
    ],
    kunci: ["A", "C", "E"],
    pembahasan: `<strong>Urgensi Ilmiah Riset DBD (Hal. 161):</strong><br>
- <strong>Opsi A (Benar):</strong> Iklim tropis dan curah hujan Indonesia adalah habitat ideal vektor <em>Aedes aegypti</em>.<br>
- <strong>Opsi C (Benar):</strong> DBD berisiko komplikasi mematikan (DSS/syok dengue).<br>
- <strong>Opsi E (Benar):</strong> Pemanasan iklim mempercepat replikasi virus dan memperluas persebaran vektor nyamuk.<br>
- Opsi B salah (DBD masih endemis) dan Opsi D salah (DBD ditularkan melalui gigitan nyamuk, bukan droplet air ludah).<br><br>
<strong>Kunci Jawaban: A, C, dan E</strong>`
  },

  // --- KAIDAH KEBAHASAAN & SASTRA KLASIK (Soal 24 s.d. 25) ---
  {
    id: 24,
    kode: "25BINP-PRED2-024",
    elemen: "Menulis",
    subelemen: "Kaidah Konjungsi Antarkalimat & Kohesi Wacana",
    kompetensi: "Melengkapi paragraf rumpang dengan konjungsi antarkalimat yang tepat dan baku.",
    indikator: "Memilih konjungsi intrakalimat dan antarkalimat untuk menjaga kepaduan gagasan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Perhatikan paragraf rumpang berikut:<br>
<em>"Pemerintah daerah telah mengucurkan anggaran miliaran rupiah untuk revitalisasi pasar tradisional agar mampu bersaing dengan pasar swalayan modern. <strong>[ ...1... ]</strong>, pembangunan fisik kios tersebut ternyata tidak dibarengi dengan pelatihan literasi digital dan manajemen keuangan bagi para pedagang lokal. <strong>[ ...2... ]</strong>, banyak lapak kios baru yang sepi pembeli dan akhirnya ditinggalkan kembali oleh pemiliknya."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Kata penghubung (konjungsi) antarkalimat yang paling tepat untuk melengkapi bagian rumpang <strong>[ 1 ]</strong> dan <strong>[ 2 ]</strong> berturut-turut adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Bahkan; Sebaliknya" },
      { id: "B", key: "B", text: "Akan tetapi; Akibatnya" },
      { id: "C", key: "C", text: "Selain itu; Padahal" },
      { id: "D", key: "D", text: "Sedangkan; Sehingga" },
      { id: "E", key: "E", text: "Meskipun demikian; Andaikan" }
    ],
    kunci: "B",
    pembahasan: `<strong>Kaidah Konjungsi Antarkalimat (Hal. 162):</strong><br>
- Rumpang [ 1 ] menyatakan pertentangan/kontras terhadap harapan di kalimat pertama, sehingga konjungsi antarkalimat yang tepat adalah <strong>Akan tetapi</strong> (atau <em>Namun</em>).<br>
- Rumpang [ 2 ] menyatakan akibat buruk yang ditimbulkan oleh fakta pada kalimat kedua, sehingga konjungsi antarkalimat yang tepat adalah <strong>Akibatnya</strong>.<br>
Perhatikan bahwa <em>sedangkan</em> dan <em>sehingga</em> adalah konjungsi intrakalimat yang tidak boleh diletakkan di awal kalimat setelah tanda titik.<br><br>
<strong>Kunci Jawaban: B (Akan tetapi; Akibatnya)</strong>`
  },
  {
    id: 25,
    kode: "25BINP-PRED2-025",
    elemen: "Membaca dan Memirsa",
    subelemen: "Sastra Klasik: Nilai Moral Gurindam Dua Belas",
    kompetensi: "Menganalisis nilai didaktis, etika moral, dan fungsi sastra puisi lama (gurindam).",
    indikator: "Menjelaskan fungsi petuah moral Gurindam Pasal 3 karya Raja Ali Haji.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
  <span class="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs mb-1 font-sans">Kutipan Gurindam Dua Belas (Raja Ali Haji)</span>
  <p class="italic text-base sm:text-lg text-center font-bold text-slate-900 my-2">
    "Apabila terpelihara mata,<br>
    Sedikitlah cita-cita."
  </p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Fungsi didaktis dan kandungan petuah moral dari gurindam klasik di atas adalah....
</p>`,
    options: [
      { id: "A", key: "A", text: "Larangan bagi generasi muda untuk memiliki impian masa depan yang tinggi" },
      { id: "B", key: "B", text: "Petuah moral agar senantiasa menjaga pandangan mata dari hal-hal yang terlarang dan maksiat, sebab pandangan yang terjaga akan mengekang hawa nafsu dan angan-angan kosong yang sia-sia" },
      { id: "C", key: "C", text: "Ajakan medis untuk rutin memeriksakan ketajaman penglihatan mata ke dokter spesialis" },
      { id: "D", key: "D", text: "Peringatan agar manusia memperbanyak tidur agar matanya tetap sehat dan segar" },
      { id: "E", key: "E", text: "Kritik terhadap para seniman lukis yang terlalu banyak mengamati pemandangan alam" }
    ],
    kunci: "B",
    pembahasan: `<strong>Makna Gurindam Pasal 3 Raja Ali Haji (Hal. 163):</strong><br>
Dalam khazanah sastra Melayu klasik <em>Gurindam Dua Belas</em>, kata <em>cita-cita</em> pada baris tersebut bermakna <strong>hawa nafsu, syahwat liar, atau angan-angan godaan duniawi</strong>. Jika seseorang mampu memelihara matanya dari memandang hal-hal tercela/maksiat, maka akan sedikitlah hawa nafsu buruk yang bergejolak di dalam hatinya, menuntunnya pada ketenteraman batin yang bijaksana.<br><br>
<strong>Kunci Jawaban: B</strong>`
  }
];

// Validasi 0 Tanda Dolar
const fullJson = JSON.stringify(soalList);
if (fullJson.includes('$')) {
  console.error("FATAL: Masih ada tanda dolar ($) di soal!");
  process.exit(1);
}

// Generate Javascript File
const fileContent = `// tka/data/mapel-indonesia-pilihan-paket2.js
// Bank Soal & Pembahasan Prediksi Resmi TKA Bahasa Indonesia (Pilihan / Tingkat Lanjut) SMA 2025/2026 (Paket 2: 25 Butir Soal Standar TKA BPPP)
// Disinkronkan langsung dari Dokumen Resmi Hal. 128-163 Buku Kompilasi Soal TKA Mata Pilihan 2025
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Bahasa Indonesia (Pilihan) SMA 2025/2026 bebas tanda dolar & pembahasan komprehensif

const tkaIndoPilihanPaket2Data = ${JSON.stringify(soalList, null, 2)};

// Inisialisasi package global
if (typeof window !== 'undefined') {
  window.tkaIndoPilihanPackages = window.tkaIndoPilihanPackages || {};
  window.tkaIndoPilihanPackages['paket2'] = {
    title: "Paket 2: Prediksi Resmi TKA Bahasa Indonesia (Pilihan) SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    data: tkaIndoPilihanPaket2Data
  };
}
`;

const targetPath = path.join(__dirname, '../tka/data/mapel-indonesia-pilihan-paket2.js');
fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log("✅ Dataset Bahasa Indonesia (Pilihan) Paket 2 100% BEBAS dari tanda dolar ($)!");
console.log(`🎉 ${targetPath} berhasil dibuat! (${soalList.length} soal)`);
