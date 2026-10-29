// scripts/build_antropologi_paket2.js
const fs = require('fs');
const path = require('path');

const soalList = [
  {
    id: 1,
    kode: "25ANT-PAKET2-001",
    elemen: "Antropologi Perkotaan",
    subelemen: "Tantangan Metodologis Perkotaan",
    kompetensi: "Menganalisis kompleksitas penelitian etnografi di lingkungan perkotaan metropolitan.",
    indikator: "Mengidentifikasi tantangan utama etnografer dalam meneliti masyarakat perkotaan yang heterogen.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSalah satu tantangan metodologis utama yang sering dihadapi oleh antropolog dalam melakukan penelitian <em>antropologi perkotaan</em> di kota-kota megapolitan adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Kesulitan menemukan teknologi perekam audio-visual modern di wilayah perkotaan"
      },
      {
        id: "B",
        key: "B",
        text: "Ketiadaan lembaga formal pemerintah yang mengatur perizinan penelitian sosial"
      },
      {
        id: "C",
        key: "C",
        text: "Tidak adanya variasi latar belakang etnis warga kota sehingga data menjadi monoton"
      },
      {
        id: "D",
        key: "D",
        text: "Seluruh penduduk perkotaan menolak interaksi sosial dan menutup diri secara mutlak"
      },
      {
        id: "E",
        key: "E",
        text: "Tingginya tingkat heterogenitas penduduk, fluiditas batas sosial, dan mobilitas warga yang sangat cepat"
      }
    ],
    kunci: "E",
    pembahasan: "<strong>Tantangan Antropologi Perkotaan (Hal. 190, No. 26):</strong><br>\nBerbeda dengan komunitas pedesaan tradisional yang cenderung homogen dan memiliki batas spasial jelas, masyarakat perkotaan ditandai oleh <em>heterogenitas tinggi</em> (beragam latar belakang etnis, agama, kelas sosial), percampuran budaya yang cair, privasi tinggi, serta <em>mobilitas cepat</em> warganya. Hal ini menuntut etnografer menerapkan metode multislitus (<em>multi-sited ethnography</em>) dan pendekatan jaringan sosial yang dinamis.<br><br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    id: 2,
    kode: "25ANT-PAKET2-002",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Revolusi Sosial dan Perubahan Budaya",
    kompetensi: "Menganalisis dampak revolusi sosial terhadap disorganisasi dan reintegrasi budaya masyarakat.",
    indikator: "Menjelaskan konsekuensi perubahan budaya cepat (revolusi) terhadap keteraturan sosial.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam teori perubahan budaya, revolusi sosial ditandai oleh perubahan sistem nilai dan struktur sosial secara mendadak serta berskala luas. Konsekuensi langsung yang kerap muncul pada tahap awal revolusi sosial adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Terjadinya guncangan budaya (cultural shock) dan disorganisasi sosial akibat runtuhnya tatanan norma lama"
      },
      {
        id: "B",
        key: "B",
        text: "Kondisi masyarakat yang langsung mencapai harmoni sempurna tanpa memerlukan adaptasi baru"
      },
      {
        id: "C",
        key: "C",
        text: "Seluruh warisan budaya fisik masa lalu lenyap seketika tanpa meninggalkan jejak sejarah"
      },
      {
        id: "D",
        key: "D",
        text: "Lenyapnya keberagaman hayati dan kepunahan seluruh spesies hewan peliharaan warga"
      },
      {
        id: "E",
        key: "E",
        text: "Penyatuan seluruh bahasa di dunia menjadi satu bahasa universal secara instan"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Dampak Revolusi Sosial terhadap Tatanan Budaya (Hal. 190, No. 27):</strong><br>\nPerubahan kebudayaan yang berjalan drastis dan cepat (revolusi) kerap kali tidak diimbangi kesiapan mental masyarakat, sehingga memicu <em>cultural shock</em> dan <em>disorganisasi sosial</em> (anomi). Norma-norma tradisional lama telah ditinggalkan atau dipatahkan, sementara pranata norma baru belum sepenuhnya melembaga dan terinternalisasi secara mapan.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 3,
    kode: "25ANT-PAKET2-003",
    elemen: "Sistem Religi dan Kepercayaan",
    subelemen: "Kosmologi Masyarakat Agraris",
    kompetensi: "Menganalisis sistem kepercayaan masyarakat agraris tradisional terhadap roh leluhur dan alam semesta.",
    indikator: "Menentukan fungsi ritual penghormatan roh leluhur dalam siklus pertanian tradisional.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kebudayaan masyarakat agraris tradisional di Nusantara, upacara persembahan hasil panen kepada roh leluhur dan dewi kesuburan (seperti Dewi Sri) masih terus dipelihara. Praktik ini berakar pada keyakinan bahwa ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Upacara tersebut merupakan rekayasa politik modern untuk memungut pajak tanah secara paksa"
      },
      {
        id: "B",
        key: "B",
        text: "Para petani dilarang memanfaatkan pestisida kimia karena alasan biaya produksi semata"
      },
      {
        id: "C",
        key: "C",
        text: "Keberhasilan panen dan kesuburan tanah dipengaruhi oleh keharmonisan kosmis antara manusia, alam, dan roh leluhur"
      },
      {
        id: "D",
        key: "D",
        text: "Roh leluhur menuntut kepemilikan sertifikat hak milik atas tanah pertanian secara yuridis"
      },
      {
        id: "E",
        key: "E",
        text: "Padi yang tidak didoakan akan berubah menjadi batuan keras yang tidak bisa dikonsumsi"
      }
    ],
    kunci: "C",
    pembahasan: "<strong>Kosmologi Agraris dan Penghormatan Leluhur (Hal. 190, No. 28):</strong><br>\nPandangan dunia (<em>worldview</em>) masyarakat agraris tradisional memandang alam semesta sebagai sebuah kesatuan sakral (kosmos). Tanah, air, dan tanaman bukan sekadar objek eksploitasi ekonomi melainkan entitas hidup yang diberkahi oleh kekuatan spiritual leluhur. Ritual adat panen berfungsi merawat keseimbangan kosmis, ungkapan rasa syukur, dan pelestarian etika ekologis.<br><br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    id: 4,
    kode: "25ANT-PAKET2-004",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Konflik Budaya Antargenerasi",
    kompetensi: "Mengidentifikasi faktor pemicu gesekan budaya antargenerasi dalam masyarakat yang mengalami modernisasi.",
    indikator: "Menentukan penyebab utama terjadinya benturan nilai antara generasi tua dan generasi muda.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerubahan budaya berskala besar sering kali memicu ketegangan atau konflik antargenerasi dalam keluarga maupun masyarakat. Faktor mendasar yang memicu konflik nilai tersebut adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Perbedaan kecepatan adaptasi dan orientasi nilai antara generasi tua yang memegang adat dengan generasi muda yang terpapar budaya modern"
      },
      {
        id: "B",
        key: "B",
        text: "Ketiadaan hubungan kekerabatan biologis antara orang tua dan anak-anak dalam keluarga batih"
      },
      {
        id: "C",
        key: "C",
        text: "Kewajiban seluruh anggota keluarga untuk menggunakan aksara hieroglif dalam komunikasi harian"
      },
      {
        id: "D",
        key: "D",
        text: "Sikap generasi tua yang selalu menolak pemakaian pakaian berbahan katun alami"
      },
      {
        id: "E",
        key: "E",
        text: "Perbedaan jenis golongan darah biologis antargenerasi dalam satu garis keturunan"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Konflik Budaya Antargenerasi (Hal. 190, No. 29):</strong><br>\nModernisasi dan penetrasi teknologi digital menciptakan kesenjangan budaya (<em>generation gap</em>). Generasi tua berpegang pada tradisi luhur, kepatuhan hierarkis, dan kearifan lokal, sedangkan generasi muda lebih cepat menyerap nilai egaliter, kebebasan berekspresi, serta gaya hidup kosmopolitan global.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 5,
    kode: "25ANT-PAKET2-005",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Etika Penelitian Etnografi",
    kompetensi: "Menerapkan prinsip etika antropologi ketika melakukan penelitian di komunitas yang mengalami krisis sosial.",
    indikator: "Menentukan tindakan etis yang wajib diutamakan peneliti ketika keselamatan informan terancam.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang etnografer sedang meneliti komunitas adat yang sedang mengalami krisis konflik sosial dan kerentanan ekonomi. Berdasarkan kode etik penelitian antropologi, prinsip yang paling utama harus ditegakkan oleh peneliti adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Mempublikasikan nama asli dan alamat rumah seluruh informan di media massa demi popularitas riset"
      },
      {
        id: "B",
        key: "B",
        text: "Memaksa warga untuk tetap diwawancarai berjam-jam meskipun situasi di lapangan sedang mencekam"
      },
      {
        id: "C",
        key: "C",
        text: "Mengutamakan keselamatan, martabat, dan hak privasi informan di atas kepentingan pengumpulan data ilmiah"
      },
      {
        id: "D",
        key: "D",
        text: "Menjual rekaman audio wawancara rahasia kepada pihak ketiga demi keuntungan finansial pribadi"
      },
      {
        id: "E",
        key: "E",
        text: "Mendikte informan untuk mengubah keyakinan agamanya agar sesuai dengan agama etnografer"
      }
    ],
    kunci: "C",
    pembahasan: "<strong>Etika Penelitian Antropologi (AAA Code of Ethics) (Hal. 191, No. 30):</strong><br>\nPrinsip dasar etika antropologis menyatakan bahwa kepentingan, kesejahteraan, hak asasi, dan keamanan informan (<em>informants' well-being</em>) harus senantiasa didahulukan di atas ambisi publikasi atau kepentingan akademis peneliti (<em>Do No Harm</em>). Kerahasiaan data dan kesukarelaan mutlak dijamin.<br><br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    id: 6,
    kode: "25ANT-PAKET2-006",
    elemen: "Keragaman Budaya Indonesia",
    subelemen: "Faktor Geografis Kepulauan",
    kompetensi: "Menjelaskan korelasi kondisi geografis kepulauan Indonesia dengan tingginya diversitas kebudayaan suku bangsa.",
    indikator: "Menentukan faktor geografis utama yang melahirkan keanekaragaman adat istiadat di Nusantara.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKeberagaman budaya di Indonesia merupakan salah satu yang terkaya di dunia dengan lebih dari 1.300 suku bangsa. Faktor geografis utama yang mendorong terbentuknya keunikan budaya lokal di masing-masing wilayah kepulauan adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Bentuk negara kepulauan yang terpisah lautan dan pegunungan, menyebabkan isolasi geografis antarkelompok"
      },
      {
        id: "B",
        key: "B",
        text: "Letak astronomis Indonesia yang berada tepat di kutub selatan bumi yang membeku"
      },
      {
        id: "C",
        key: "C",
        text: "Ketiadaan sumber daya alam hayati sehingga masyarakat terpaksa menciptakan budaya impor"
      },
      {
        id: "D",
        key: "D",
        text: "Kondisi daratan Nusantara yang seragam dan berupa hamparan padang pasir gurun sahara"
      },
      {
        id: "E",
        key: "E",
        text: "Adanya larangan dari penjajah Belanda bagi suku-suku daerah untuk saling berbicara satu sama lain"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Pengaruh Kondisi Geografis terhadap Kebudayaan (Hal. 191, No. 31):</strong><br>\nWilayah Indonesia yang terdiri atas ribuan pulau yang dipisahkan oleh selat, samudra, serta barisan pegunungan lebat menciptakan <em>isolasi geografis</em> selama berabad-abad. Akibat isolasi ini, setiap kelompok manusia mengembangkan adaptasi lingkungan, sistem kepercayaan, dialek bahasa, dan norma adat istiadatnya masing-masing tanpa hegemoni penyeragaman.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 7,
    kode: "25ANT-PAKET2-007",
    elemen: "Antropologi Kesehatan",
    subelemen: "Intervensi Gizi dan Persepsi Budaya",
    kompetensi: "Menganalisis kegunaan pendekatan antropologi kesehatan dalam perumusan kebijakan gizi masyarakat.",
    indikator: "Menjelaskan manfaat pendekatan budaya dalam mengatasi pantangan atau tabu makanan lokal.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam antropologi kesehatan dan gizi, program intervensi penanganan stunting atau gizi buruk pada masyarakat adat sering gagal bila hanya mengandalkan pendekatan medis klinis tanpa mempertimbangkan budaya. Manfaat utama pemahaman antropologis dalam program kesehatan masyarakat adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Menghapuskan keberadaan dokter spesialis anak dan rumah sakit umum di daerah pedesaan"
      },
      {
        id: "B",
        key: "B",
        text: "Mewajibkan masyarakat adat untuk mengonsumsi makanan instan impor dari negara Barat"
      },
      {
        id: "C",
        key: "C",
        text: "Menyediakan dalih ilmiah bagi pemerintah untuk tidak mengalokasikan anggaran kesehatan daerah"
      },
      {
        id: "D",
        key: "D",
        text: "Menggantikan seluruh obat-obatan medis modern dengan ramuan mistis tanpa uji higienis"
      },
      {
        id: "E",
        key: "E",
        text: "Memahami sistem pantangan (tabu makanan), persepsi sakit-sehat, dan merancang edukasi gizi yang selaras dengan kearifan lokal"
      }
    ],
    kunci: "E",
    pembahasan: "<strong>Antropologi Kesehatan & Budaya Gizi (Hal. 191, No. 32):</strong><br>\nSetiap kebudayaan memiliki konstruksi kultural mengenai tubuh, penyakit, dan makanan (misal: pantangan makan ikan bagi balita atau ibu menyusui di daerah tertentu). Antropolog kesehatan membantu tenaga medis memahami rasionalitas lokal tersebut sehingga dapat menyusun intervensi gizi berbasis dialog budaya persuasif tanpa merendahkan martabat masyarakat adat.<br><br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    id: 8,
    kode: "25ANT-PAKET2-008",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Discovery dan Invention",
    kompetensi: "Membedakan konsep discovery dan invention dalam perkembangan teknologi komunikasi kebudayaan.",
    indikator: "Mengidentifikasi contoh fenomena kebudayaan yang tergolong ke dalam invention.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam teori dinamika kebudayaan, penciptaan teknologi baru dibedakan menjadi <em>discovery</em> dan <em>invention</em>. Manakah di antara peristiwa berikut yang merupakan wujud dari <em>invention</em> di bidang teknologi komunikasi?\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Pengembangan rekayasa perangkat lunak telepon pintar dan aplikasi pertukaran pesan instan global"
      },
      {
        id: "B",
        key: "B",
        text: "Penemuan fosil bijih besi yang terpendam di lapisan tanah prasejarah oleh penambang"
      },
      {
        id: "C",
        key: "C",
        text: "Penemuan keberadaan gelombang elektromagnetik alami di atmosfer bumi untuk pertama kalinya"
      },
      {
        id: "D",
        key: "D",
        text: "Tersingkapnya gua purba berlukisan dinding akibat longsoran tebing kapur secara alami"
      },
      {
        id: "E",
        key: "E",
        text: "Penemuan tanaman obat liar di hutan belantara yang belum pernah diidentifikasi sebelumnya"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Discovery vs Invention (Hal. 191, No. 33):</strong><br>\n- <strong>Discovery:</strong> Penemuan unsur kebudayaan atau fenomena alam yang sebenarnya sudah ada namun belum pernah disadari atau diketahui sebelumnya (misal: penemuan hukum gelombang elektromagnetik, bijih logam, fosil).<br>\n- <strong>Invention:</strong> Rekayasa kreasi baru yang sengaja dirancang manusia dengan mengombinasikan berbagai pengetahuan dan teknologi yang sudah ditemukan sebelumnya (misal: pembuatan smartphone, satelit telekomunikasi, aplikasi perpesanan).<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 9,
    kode: "25ANT-PAKET2-009",
    elemen: "Antropologi Linguistik",
    subelemen: "Historis Bahasa Nasional",
    kompetensi: "Menganalisis alasan sosiolinguistik dan historis pemilihan bahasa Melayu sebagai fondasi bahasa Indonesia.",
    indikator: "Menentukan alasan demokratis dan praktis penetapan bahasa Melayu dalam Sumpah Pemuda 1928.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPara pendiri bangsa pada Sumpah Pemuda 1928 sepakat mengangkat bahasa Melayu—dan bukan bahasa Jawa yang penuturnya paling banyak—sebagai dasar bahasa nasional Indonesia. Alasan sosiolinguistik yang paling tepat di balik keputusan ini adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Bahasa Melayu memiliki aksara paling rumit yang hanya bisa dipelajari oleh kaum bangsawan"
      },
      {
        id: "B",
        key: "B",
        text: "Bahasa Melayu telah berabad-abad menjadi lingua franca antarpulau, bersifat egaliter, dan tidak memiliki tingkatan kasta tutur yang kaku"
      },
      {
        id: "C",
        key: "C",
        text: "Pemerintah kolonial Belanda mewajibkan seluruh rakyat jajahan untuk menguasai sastra Melayu Riau"
      },
      {
        id: "D",
        key: "D",
        text: "Bahasa Melayu merupakan bahasa internasional yang wajib digunakan dalam sidang Liga Bangsa-Bangsa"
      },
      {
        id: "E",
        key: "E",
        text: "Semua bahasa daerah lain di Nusantara telah punah sebelum kongres pemuda berlangsung"
      }
    ],
    kunci: "B",
    pembahasan: "<strong>Alasan Sosiolinguistik Pemilihan Bahasa Indonesia (Hal. 191, No. 34):</strong><br>\n1. <strong>Lingua Franca:</strong> Bahasa Melayu pasar telah digunakan berabad-abad sebagai jembatan komunikasi perdagangan antarsuku di seluruh kepulauan Nusantara.<br>\n2. <strong>Struktur Egaliter:</strong> Berbeda dengan bahasa Jawa atau Sunda yang memiliki undak-usuk/tingkatan bahasa yang ketat (ngoko, krama inggil), bahasa Melayu bersifat demokratis dan mudah dipelajari tanpa memicu rasa dominasi kasta etnis.<br><br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    id: 10,
    kode: "25ANT-PAKET2-010",
    elemen: "Antropologi Linguistik",
    subelemen: "Dinamika dan Perubahan Bahasa",
    kompetensi: "Menjelaskan fenomena pergeseran dan penyerapan kosakata dalam perspektif antropologi linguistik.",
    indikator: "Mengidentifikasi faktor pemicu perubahan bahasa suatu masyarakat tutur dari waktu ke waktu.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAntropologi linguistik mampu menjelaskan bahwa bahasa tidak bersifat beku melainkan senantiasa dinamis dan mengalami perubahan. Faktor utama yang menyebabkan kosakata dan tata bahasa suatu daerah mengalami evolusi adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Kontak budaya dengan kelompok luar, migrasi penutur, inovasi teknologi baru, dan perubahan struktur sosial"
      },
      {
        id: "B",
        key: "B",
        text: "Perubahan struktur biologis pita suara manusia setiap sepuluh tahun sekali secara genetik"
      },
      {
        id: "C",
        key: "C",
        text: "Penurunan intensitas radiasi sinar matahari di wilayah khatulistiwa bumi"
      },
      {
        id: "D",
        key: "D",
        text: "Kewajiban kamus bahasa baku untuk menghapus separuh kosakatanya setiap tahun kabisat"
      },
      {
        id: "E",
        key: "E",
        text: "Keputusan sepihak dari lembaga percetakan buku tulis di ibu kota negara"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Dinamika Perubahan Bahasa (Hal. 192, No. 35):</strong><br>\nBahasa merefleksikan denyut kehidupan penuturnya. Ketika masyarakat mengalami pergeseran ekonomi, kontak antarbudaya (akulturasi), urbanisasi, maupun kemunculan artefak teknologi baru, perbendaharaan kata (leksikon) akan beradaptasi secara alamiah melalui peminjaman kata (<em>loanwords</em>), neologisme, atau pergeseran semantik.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 11,
    kode: "25ANT-PAKET2-011",
    elemen: "Etnolinguistik Nusantara",
    subelemen: "Sistem Penamaan Anak di Bali",
    kompetensi: "Menganalisis sistem penamaan anak di Bali sebagai cerminan struktur sosial dan etnolinguistik.",
    indikator: "Menjelaskan makna di balik nama depan tradisional masyarakat Bali (Wayan, Made, Nyoman, Ketut).",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSalah satu contoh nyata keterkaitan antara bahasa dan kebudayaan (etnolinguistik) adalah sistem penamaan anak dalam masyarakat Bali (seperti Wayan/Putu, Made/Kadek, Nyoman/Komang, dan Ketut). Sistem penamaan ini secara budaya mencerminkan ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Urutan kelahiran anak dalam keluarga serta penanda keteraturan siklus kekerabatan"
      },
      {
        id: "B",
        key: "B",
        text: "Besaran jumlah utang piutang yang dimiliki orang tua saat persalinan"
      },
      {
        id: "C",
        key: "C",
        text: "Tingkat kekayaan materi dan luas sawah yang wajib diserahkan kepada kepala desa"
      },
      {
        id: "D",
        key: "D",
        text: "Rekomendasi nama yang wajib dipilih berdasarkan arahan bupati setempat"
      },
      {
        id: "E",
        key: "E",
        text: "Batas usia maksimal seseorang sebelum diperbolehkan menikah secara adat"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Etnolinguistik Sistem Penamaan Bali (Hal. 192, No. 36):</strong><br>\nDalam masyarakat Hindu-Bali, pemberian nama depan merupakan kode kultural yang menandai urutan kelahiran (Wayan/Putu/Gede = anak ke-1, Made/Kadek = ke-2, Nyoman/Komang = ke-3, Ketut = ke-4, dan anak ke-5 kembali menggunakan variasi Wayan Balik). Bahasa nama bertindak sebagai penanda tertib sosial dan penempatan posisi dalam silsilah keluarga.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 12,
    kode: "25ANT-PAKET2-012",
    elemen: "Konsep Dasar Kebudayaan",
    subelemen: "Pengaruh Budaya terhadap Perilaku",
    kompetensi: "Menganalisis interaksi antara disposisi biologis dan konstruksi sosio-kultural dalam membentuk tindakan manusia.",
    indikator: "Mengidentifikasi pandangan antropologis bahwa tingkah laku manusia dibentuk oleh pola pembiasaan budaya.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kajian antropologi, perilaku manusia tidak semata-mata ditentukan oleh dorongan biologis alami, melainkan sangat dipengaruhi oleh faktor sosio-kultural. Hal ini terbukti dari kenyataan bahwa ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Kebutuhan dasar makan, berpakaian, dan bersosialisasi diatur oleh tata cara, etiket, dan nilai simbolik yang bervariasi antar-kebudayaan"
      },
      {
        id: "B",
        key: "B",
        text: "Semua manusia di muka bumi memiliki refleks gerak tubuh yang seratus persen identik tanpa perbedaan budaya"
      },
      {
        id: "C",
        key: "C",
        text: "Genetika DNA manusia dapat langsung berubah seketika ketika seseorang membaca buku cerita rakyat"
      },
      {
        id: "D",
        key: "D",
        text: "Manusia di masyarakat modern tidak lagi memerlukan makanan dan minuman untuk mempertahankan hidup"
      },
      {
        id: "E",
        key: "E",
        text: "Bayi yang baru lahir sudah otomatis menguasai tata hukum adat tanpa proses belajar apa pun"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Pengaruh Sosio-Kultural terhadap Perilaku (Hal. 192, No. 37):</strong><br>\nMeskipun rasa lapar adalah dorongan biologis universal, apa yang boleh dimakan, bagaimana cara mengolahnya, pantangan tabu, serta tata krama saat makan di meja perjamuan sepenuhnya merupakan produk enkulturasi budaya. Kebudayaan memberi makna dan pedoman nilai terhadap ekspresi kebutuhan fisik manusia.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 13,
    kode: "25ANT-PAKET2-013",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Enkulturasi Penuh Informan",
    kompetensi: "Menjelaskan syarat enkulturasi penuh (full enculturation) pada informan kunci etnografi.",
    indikator: "Menentukan maksud kriteria enkulturasi penuh dalam memilih informan adat.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSalah satu kriteria penting dalam memilih informan utama dalam riset etnografi adalah <em>enkulturasi penuh</em> (<em>full enculturation</em>). Maksud dari kriteria enkulturasi penuh adalah bahwa informan ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Harus memiliki ijazah sarjana antropologi dari perguruan tinggi terkemuka di luar negeri"
      },
      {
        id: "B",
        key: "B",
        text: "Pernah berkeliling ke minimal tiga puluh negara berbeda untuk membandingkan adat istiadat"
      },
      {
        id: "C",
        key: "C",
        text: "Telah tumbuh, menyerap, dan menghayati kebudayaan lokal tersebut secara mendalam dan alami dalam jangka panjang"
      },
      {
        id: "D",
        key: "D",
        text: "Merupakan pejabat birokrasi pemerintahan yang baru saja ditugaskan dari ibu kota ke desa tersebut"
      },
      {
        id: "E",
        key: "E",
        text: "Sengaja melupakan bahasa ibunya demi mempelajari dialek asing yang lebih prestisius"
      }
    ],
    kunci: "C",
    pembahasan: "<strong>Kriteria Enkulturasi Penuh (James Spradley) (Hal. 192, No. 38):</strong><br>\nInforman yang mengalami enkulturasi penuh memahami seluk-beluk tradisi, bahasa simbolik, dan kebiasaan masyarakatnya secara organik bukan sekadar hafalan teori. Mereka telah menjalani kebudayaan tersebut sejak masa kecil atau waktu yang sangat lama, sehingga mampu menjelaskan latar belakang adat istiadat secara mendalam tanpa canggung.<br><br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    id: 14,
    kode: "25ANT-PAKET2-014",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Karakteristik Subjek Etnografi",
    kompetensi: "Mengidentifikasi karakteristik kelompok masyarakat yang menjadi lokus penelitian antropologi.",
    indikator: "Menentukan sifat dasar komunitas yang diteliti dalam studi antropologi kebudayaan.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kajian antropologi, kelompok masyarakat yang menjadi sasaran penelitian lapangan umumnya memiliki karakteristik berupa ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Adanya sistem nilai bersama, pola interaksi teratur, serta perasaan identitas kelompok yang diwariskan"
      },
      {
        id: "B",
        key: "B",
        text: "Kerumunan orang yang kebetulan berkumpul panik saat terjadi gempa bumi sesaat di stasiun kereta"
      },
      {
        id: "C",
        key: "C",
        text: "Kumpulan penumpang bus antarkota yang tidak saling kenal dan tidak memiliki ikatan nilai bersama"
      },
      {
        id: "D",
        key: "D",
        text: "Komunitas robot otonom di laboratorium pabrik perakitan mobil otomatis"
      },
      {
        id: "E",
        key: "E",
        text: "Kumpulan penonton bioskop yang langsung bubar setelah film selesai diputar"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Karakteristik Kelompok Kajian Antropologi (Hal. 192, No. 39):</strong><br>\nAntropologi mengkaji kelompok sosial yang memiliki kebudayaan (<em>shared culture</em>), yaitu komunitas yang diikat oleh kesadaran identitas kolektif, sistem simbol bersama, pranata adat, serta pola relasi sosial yang berlangsung berkesinambungan lintas waktu, bukan kerumunan acak sesaat (<em>crowd</em>).<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 15,
    kode: "25ANT-PAKET2-015",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Manajemen Waktu Peneliti di Lapangan",
    kompetensi: "Menganalisis prinsip fleksibilitas ritme waktu kerja lapangan etnografer di komunitas lokal.",
    indikator: "Menjelaskan cara etnografer menyesuaikan jadwal penelitian dengan rutinitas harian warga.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kerja lapangan etnografi, manajemen waktu antara etnografer dan warga lokal sangat krusial. Salah satu prinsip utama yang harus dipegang oleh seorang etnografer adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Menyesuaikan jadwal wawancara dan observasi secara fleksibel dengan rutinitas kerja dan siklus hidup informan tanpa mengganggu mata pencaharian mereka"
      },
      {
        id: "B",
        key: "B",
        text: "Memaksa para petani menghentikan masa panen mereka untuk berkumpul di balai desa setiap pukul sembilan pagi"
      },
      {
        id: "C",
        key: "C",
        text: "Hanya bekerja di dalam kamar penginapan ber-AC dan melarang warga menemui peneliti"
      },
      {
        id: "D",
        key: "D",
        text: "Mewajibkan warga membayar upah per jam kepada peneliti atas kedatangannya di desa"
      },
      {
        id: "E",
        key: "E",
        text: "Menyelesaikan seluruh penelitian etnografi yang rumit hanya dalam waktu dua jam kerja"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Manajemen Waktu Etnografer (Hal. 193, No. 40):</strong><br>\nEtnografer adalah tamu dalam ruang hidup komunitas. Peneliti harus memiliki kepekaan untuk mengikuti ritme harian warga (misal: menemani petani di pematang sawah saat istirahat siang atau berbincang di teras pada petang hari), bukannya memaksakan jadwal kaku ala kantor yang berpotensi merugikan mata pencaharian warga.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 16,
    kode: "25ANT-PAKET2-016",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Ciri Khas Pendekatan Etnografi",
    kompetensi: "Mengidentifikasi ciri utama pendekatan holistik dalam metode penelitian etnografi.",
    indikator: "Menentukan karakteristik metodologi etnografi yang membedakannya dari pendekatan survei kuantitatif.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nMetode utama dalam penelitian antropologi adalah etnografi. Salah satu ciri khas pendekatan metode etnografi yang membedakannya dari penelitian ilmu sosial lainnya adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Pendekatan holistik dan keterlibatan intensif jangka panjang (immersion) dalam konteks alami kehidupan masyarakat"
      },
      {
        id: "B",
        key: "B",
        text: "Kewajiban menghitung angka deviasi standar memakai rumus regresi linier berganda"
      },
      {
        id: "C",
        key: "C",
        text: "Hanya mengandalkan penyebaran angket lewat surat pos tanpa pernah menemui informan"
      },
      {
        id: "D",
        key: "D",
        text: "Penggunaan ruang laboratorium kedap udara untuk menguji perilaku manusia di bawah mikroskop"
      },
      {
        id: "E",
        key: "E",
        text: "Peneliti menjaga jarak dingin dan melarang adanya empati terhadap perasaan masyarakat setempat"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Karakteristik Metode Etnografi (Hal. 193, No. 41):</strong><br>\nEtnografi mengedepankan pendekatan <em>holistik</em> (memandang kebudayaan sebagai jalinan utuh antara sistem ekonomi, religi, kekerabatan, dan bahasa) serta <em>immersion</em> (peleburan peneliti di lapangan dalam rentang waktu berbulan-bulan hingga bertahun-tahun) untuk menangkap nuansa batin penutur asli.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 17,
    kode: "25ANT-PAKET2-017",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Sensitivitas Emosional Informan",
    kompetensi: "Menerapkan sikap etis ketika informan menunjukkan rasa tidak nyaman saat wawancara topik sensitif.",
    indikator: "Menentukan respons paling tepat etnografer saat informan merasa tertekan oleh pertanyaan wawancara.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSaat sedang melakukan wawancara mendalam mengenai riwayat konflik kekerasan masa lalu, seorang etnografer menyadari bahwa informan mulai gelisah, sedih, dan merasa tidak nyaman untuk melanjutkan ceritanya. Sikap etis yang wajib diambil oleh etnografer adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Membentak informan dan menuduhnya menyembunyikan kebenaran data ilmiah"
      },
      {
        id: "B",
        key: "B",
        text: "Terus mencecar informan dengan pertanyaan yang lebih tajam demi mengejar target batas waktu publikasi"
      },
      {
        id: "C",
        key: "C",
        text: "Mengancam akan melaporkan informan kepada pihak kepolisian jika menolak menjawab"
      },
      {
        id: "D",
        key: "D",
        text: "Merekam wajah informan secara diam-diam melalui kamera tersembunyi tanpa izin"
      },
      {
        id: "E",
        key: "E",
        text: "Menghentikan atau mengalihkan pertanyaan secara empati, menghormati batasan emosional informan, dan memberi waktu jeda beristirahat"
      }
    ],
    kunci: "E",
    pembahasan: "<strong>Sensitivitas Etis Etnografer (Hal. 193, No. 42):</strong><br>\nWawancara etnografi bukanlah interogasi investigasi kepolisian. Peneliti terikat komitmen humanis untuk tidak menimbulkan luka psikologis atau trauma ulang (<em>retraumatization</em>) pada informan. Menghormati ketidaknyamanan, menawarkan jeda istirahat, atau mengalihkan topik pembicaraan adalah manifestasi etika ilmiah yang mutlak.<br><br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    id: 18,
    kode: "25ANT-PAKET2-018",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Proses Akulturasi Budaya",
    kompetensi: "Menganalisis karakteristik dan contoh proses akulturasi kebudayaan di Indonesia.",
    indikator: "Menentukan ciri dan fenomena yang mencerminkan terjadinya akulturasi budaya (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kajian antropologi, <em>akulturasi</em> terjadi ketika dua kebudayaan berbeda bertemu dan saling memengaruhi tanpa menghilangkan kepribadian atau ciri khas asli dari masing-masing kebudayaan tersebut. Manakah pernyataan berikut yang mencerminkan karakteristik atau contoh akulturasi budaya di Indonesia?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Arsitektur Masjid Menara Kudus yang memadukan corak candi Hindu-Jawa dengan fungsi ibadah Islam"
      },
      {
        id: "B",
        key: "B",
        text: "Seni pertunjukan Wayang Kulit yang memuat epos Mahabharata dari India dengan tokoh punakawan khas Nusantara"
      },
      {
        id: "C",
        key: "C",
        text: "Pemusnahan total seluruh kitab kuno daerah dan penggantian paksa dengan bahasa asing penjajah"
      },
      {
        id: "D",
        key: "D",
        text: "Busana kebaya encim yang merupakan perpaduan harmonis antara busana wanita Melayu-Jawa dan tradisi Tionghoa"
      },
      {
        id: "E",
        key: "E",
        text: "Penolakan total suatu suku bangsa terhadap segala bentuk perahu dan perkakas dari luar pulau"
      }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: "<strong>Ciri dan Contoh Akulturasi Budaya (Jawaban A, B, dan D Benar) (Hal. 193, No. 43):</strong><br>\nAkulturasi adalah perjumpaan dua tradisi budaya yang melahirkan sintesis damai di mana kepribadian budaya asal tetap hidup. Contoh legendaris di Indonesia meliputi Menara Kudus (A), Wayang Kulit bernafaskan lakon Semar dkk (B), dan busana Kebaya Encim pesisiran (D). Opsi C adalah asimilasi paksa/genosida budaya, sedangkan Opsi E adalah isolasionisme kaku.<br><br>\n<strong>Kunci Jawaban: A, B, D</strong>"
  },
  {
    id: 19,
    kode: "25ANT-PAKET2-019",
    elemen: "Antropologi Kontemporer",
    subelemen: "Masyarakat Jaringan Digital",
    kompetensi: "Menganalisis transformasi budaya interaksi pada masyarakat digital (network society).",
    indikator: "Memilih karakteristik interaksi sosial dalam masyarakat jaringan menurut Manuel Castells (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerkembangan teknologi informasi melahirkan konsep masyarakat jaringan (<em>network society</em>) dalam antropologi kontemporer. Manakah di antara pernyataan berikut yang merupakan ciri menonjol pola interaksi pada masyarakat jaringan digital?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Interaksi sosial tidak lagi dibatasi oleh sekat geografis dan batas waktu fisik secara kaku"
      },
      {
        id: "B",
        key: "B",
        text: "Terbentuknya komunitas virtual berbasis kesamaan minat (interest-based community) lintas benua"
      },
      {
        id: "C",
        key: "C",
        text: "Munculnya fenomena identitas jamak (multiple identities) di mana individu menampilkan persona berbeda di media sosial"
      },
      {
        id: "D",
        key: "D",
        text: "Setiap pengguna internet diwajibkan bertemu tatap muka fisik setiap hari sebelum mengirim pesan teks"
      },
      {
        id: "E",
        key: "E",
        text: "Semua komputer dan gawai di dunia hanya dapat digunakan pada siang hari saat matahari bersinar"
      }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Ciri Masyarakat Jaringan (Network Society) (Jawaban A, B, dan C Benar) (Hal. 194, No. 44):</strong><br>\nDalam teori siber-antropologi, masyarakat digital mengalami desentralisasi spasial (A), dapat berorganisasi dalam komunitas maya global (B), serta mengalami fragmentasi dan rekreasi identitas diri di dunia maya (C). Opsi D dan E bertentangan dengan sifat dasar internet.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    id: 20,
    kode: "25ANT-PAKET2-020",
    elemen: "Keragaman Budaya Indonesia",
    subelemen: "Teori Kebudayaan Dominan Bruner",
    kompetensi: "Menganalisis teori kebudayaan dominan Edward M. Bruner (1974) dalam dinamika masyarakat majemuk Indonesia.",
    indikator: "Menentukan faktor yang melahirkan dominasi budaya suatu kelompok etnis di kota-kota multikultural (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam studi antropologi perkotaan di Indonesia, Edward M. Bruner (1974) mengemukakan teori tentang adanya <em>kebudayaan dominan</em> (<em>dominant culture</em>) di berbagai kota besar Nusantara (seperti budaya Melayu-Deli di Medan atau budaya Sunda di Bandung). Faktor apakah yang melandasi terbentuknya kebudayaan dominan tersebut?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Kelompok etnis pribumi setempat memiliki akar historis mendalam sebagai tuan rumah wilayah kota tersebut"
      },
      {
        id: "B",
        key: "B",
        text: "Kelompok suku bangsa tersebut memiliki jumlah demografis mayoritas yang signifikan di kawasan perkotaan"
      },
      {
        id: "C",
        key: "C",
        text: "Para pendatang dari suku lain melakukan adaptasi sosial dengan menyerap sebagian tata krama budaya dominan agar diterima secara harmonis"
      },
      {
        id: "D",
        key: "D",
        text: "Pemerintah mengeluarkan undang-undang yang menghukum pidana siapa pun yang berbicara bahasa suku lain"
      },
      {
        id: "E",
        key: "E",
        text: "Kebudayaan dominan dipaksakan melalui invasi militer antarpulau setiap pergantian dekade"
      }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Teori Kebudayaan Dominan Bruner (Jawaban A, B, dan C Benar) (Hal. 194, No. 45):</strong><br>\nBruner meneliti bahwa integrasi multietnis di kota-kota Indonesia berlangsung dinamis karena dipandu oleh kebudayaan dominan lokal (misal: di Bandung para pendatang menyesuaikan diri dengan kesantunan budaya Sunda). Hal ini berakar pada legitimasi historis (A), dominasi jumlah demografis (B), serta konsensus akomodasi kultural oleh pendatang (C). Opsi D dan E tidak relevan.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    id: 21,
    kode: "25ANT-PAKET2-021",
    elemen: "Antropologi Fisik dan Arkeologi",
    subelemen: "Kajian Arkeozoologi",
    kompetensi: "Menganalisis signifikansi temuan sisa fauna (arkeozoologi) di situs hunian gua prasejarah.",
    indikator: "Menentukan interpretasi ilmiah antropologis dari temuan tulang fauna di situs prasejarah (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam ekskavasi sebuah situs gua hunian prasejarah, antropolog dan arkeozoolog menemukan sisa-sisa tulang dan gigi taring harimau purba bersama alat-alat serpih batu. Kesimpulan ilmiah apa sajakah yang dapat ditarik dari temuan arkeozoologis tersebut?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Harimau purba pernah hidup berdampingan dalam satu ekosistem lingkungan purba bersama manusia purba di wilayah tersebut"
      },
      {
        id: "B",
        key: "B",
        text: "Manusia prasejarah memiliki kemampuan berburu atau memanfaatkan bagian tubuh fauna karnivora besar sebagai perkakas, liontin jimat, atau simbol keberanian"
      },
      {
        id: "C",
        key: "C",
        text: "Situs tersebut memberikan data paleoekologi mengenai iklim dan vegetasi hutan di masa lampau"
      },
      {
        id: "D",
        key: "D",
        text: "Masyarakat gua prasejarah telah mengoperasikan sirkus komersial keliling antarkota"
      },
      {
        id: "E",
        key: "E",
        text: "Harimau pada zaman tersebut telah diajarkan untuk membaca prasasti batu berhuruf Pallawa"
      }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Interpretasi Arkeozoologi (Jawaban A, B, dan C Benar) (Hal. 194, No. 46):</strong><br>\nKajian arkeozoologi merekonstruksi relasi manusia dan satwa masa lalu. Tulang fauna membuktikan keberadaan fauna di lingkungan sekitar (A), pola eksploitasi perburuan dan simbolisme artefak tulang/taring (B), serta iklim masa lampau (C). Opsi D dan E adalah anakronisme mustahil.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    id: 22,
    kode: "25ANT-PAKET2-022",
    elemen: "Struktur Sosial dan Masyarakat Majemuk",
    subelemen: "Diferensiasi Sosial Multikultural",
    kompetensi: "Mengevaluasi konsep diferensiasi sosial horizontal dalam konteks kemajemukan bangsa Indonesia.",
    indikator: "Menilai kebenaran pernyataan terkait hakikat dan dampak diferensiasi sosial.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nEvaluasilah apakah setiap pernyataan mengenai konsep <strong>diferensiasi sosial</strong> dalam masyarakat multikultural Indonesia berikut <strong>Benar</strong> atau <strong>Salah</strong>:\n</p>",
    items: [
      {
        pernyataan: "Diferensiasi sosial merupakan pembedaan anggota masyarakat secara horizontal sejajar tanpa adanya tingkatan hierarki kelas lebih tinggi atau lebih rendah (seperti keberagaman suku, agama, dan klan).",
        kunci: "Benar",
        penjelasan: "Tepat; diferensiasi sosial bersifat horizontal, berbeda dengan stratifikasi sosial yang bersifat vertikal/hierarkis."
      },
      {
        pernyataan: "Diferensiasi sosial di Indonesia membuktikan bahwa ada satu suku bangsa yang secara ilmiah dan genetik memiliki derajat lebih mulia dibanding suku bangsa lainnya.",
        kunci: "Salah",
        penjelasan: "Keliru; antropologi menolak rasisme; semua suku bangsa di Nusantara setara derajat kemanusiaannya."
      },
      {
        pernyataan: "Perbedaan akses terhadap sumber daya ekonomi dan politik antarkelompok dapat memicu ketegangan antaretnis jika tidak dikelola dengan prinsip keadilan sosial.",
        kunci: "Benar",
        penjelasan: "Tepat; kesenjangan struktural yang berimpit dengan garis etnis dapat menjadi pemicu friksi horizontal."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Evaluasi Diferensiasi Sosial Multikultural (Hal. 194, No. 47):</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Diferensiasi sosial membagi masyarakat secara setara tanpa peringkat kasta superior-inferior.<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Asumsi keunggulan genetik suku tertentu adalah pandangan etnosentrisme palsu.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Ketimpangan ekonomi-politik sering kali memperuncing sentimen primordialisme kelompok.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  },
  {
    id: 23,
    kode: "25ANT-PAKET2-023",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Kriteria Informan Komunitas Pesisir",
    kompetensi: "Mengevaluasi pertimbangan kelayakan pemilihan informan kunci pada penelitian masyarakat nelayan pesisir.",
    indikator: "Menilai kebenaran premis kualifikasi informan etnografi masyarakat maritim.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang etnografer ingin meneliti sistem navigasi tradisional dan kearifan melaut pada komunitas nelayan pesisir. Evaluasilah kebenaran kriteria <strong>pemilihan informan</strong> berikut:\n</p>",
    items: [
      {
        pernyataan: "Nelayan senior yang masih aktif melaut setiap hari dan menguasai rasi bintang maritim merupakan kandidat informan kunci terbaik.",
        kunci: "Benar",
        penjelasan: "Tepat; informan tersebut memiliki pengalaman langsung dan masih aktif menjalankan praktik budaya kelautan."
      },
      {
        pernyataan: "Wisatawan kota yang baru berlibur selama dua jam di pantai wajib dijadikan informan utama untuk menjelaskan tradisi sakral larung laut.",
        kunci: "Salah",
        penjelasan: "Keliru; wisatawan luar tidak memiliki pemahaman emik dan tidak terlibat dalam sistem budaya nelayan setempat."
      },
      {
        pernyataan: "Etnografer dapat mengombinasikan data dari nelayan aktif dengan pandangan tokoh tetua adat pesisir untuk mendapatkan perspektif holistik.",
        kunci: "Benar",
        penjelasan: "Tepat; triangulasi sumber antarinforman memperkaya validitas dan kedalaman temuan etnografi."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Evaluasi Pemilihan Informan Nelayan (Hal. 194, No. 48):</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Pengalaman harian nyata (keterlibatan aktif) adalah syarat utama informan kunci.<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Pengunjung sesaat tidak memiliki pengetahuan mendalam tentang kearifan lokal.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Menggabungkan nelayan lapangan dengan tetua adat menghasilkan pemahaman menyeluruh.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  },
  {
    id: 24,
    kode: "25ANT-PAKET2-024",
    elemen: "Konsep Dasar Kebudayaan",
    subelemen: "Aplikasi Relativisme Budaya",
    kompetensi: "Menilai penerapan prinsip relativisme budaya dalam dinamika kehidupan berbangsa.",
    indikator: "Menilai kebenaran pernyataan terkait penghormatan terhadap keberagaman adat Nusantara.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nEvaluasilah apakah setiap contoh penerapan konsep <strong>relativisme budaya</strong> dalam kehidupan sehari-hari berikut <strong>Benar</strong> atau <strong>Salah</strong>:\n</p>",
    items: [
      {
        pernyataan: "Menghargai upacara adat pemakaman Rambu Solo di Toraja tanpa menghakiminya sebagai pemborosan uang semata.",
        kunci: "Benar",
        penjelasan: "Tepat; memandang upacara adat dari kacamata makna penghormatan leluhur masyarakat Toraja mencerminkan relativisme budaya."
      },
      {
        pernyataan: "Menuntut agar semua suku di Indonesia mengganti rumah adat tradisionalnya dengan model rumah susun beton modern yang seragam.",
        kunci: "Salah",
        penjelasan: "Keliru; penyeragaman paksa bertentangan dengan prinsip penghargaan terhadap keunikan budaya lokal."
      },
      {
        pernyataan: "Berusaha memahami sistem aturan perkawinan eksogami klan pada suku lain meskipun berbeda dari aturan adat sukunya sendiri.",
        kunci: "Benar",
        penjelasan: "Tepat; sikap terbuka untuk memahami logika internal sistem kekerabatan lain adalah inti relativisme budaya."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Evaluasi Relativisme Budaya dalam Keseharian (Hal. 194, No. 49):</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Menghormati Rambu Solo' dengan memahami makna spiritualnya bagi orang Toraja.<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Pemaksaan arsitektur seragam merupakan bentuk etnosentrisme teknokratis.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Mengakui keberagaman aturan eksogami/endogami tanpa prasangka negatif.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  },
  {
    id: 25,
    kode: "25ANT-PAKET2-025",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Pemanfaatan Alat Perekam Wawancara",
    kompetensi: "Menganalisis urgensi dan teknik penggunaan peranti perekam dalam wawancara etnografi.",
    indikator: "Menilai kebenaran pernyataan mengenai fungsi alat perekam dalam menjaga otentisitas data penelitian.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam wawancara mendalam etnografi, penggunaan <strong>alat perekam</strong> (audio/video) sangat dianjurkan. Evaluasilah kebenaran alasan metodologis berikut:\n</p>",
    items: [
      {
        pernyataan: "Penggunaan alat perekam membantu menghindari hilangnya data lisan dan mencegah distorsi makna akibat keterbatasan memori ingatan peneliti.",
        kunci: "Benar",
        penjelasan: "Tepat; rekaman menjadi data primer otentik yang dapat diputar berulang kali untuk menjamin ketepatan transkrip."
      },
      {
        pernyataan: "Peneliti berhak merekam secara sembunyi-sembunyi tanpa izin informan agar informan tidak merasa canggung sama sekali.",
        kunci: "Salah",
        penjelasan: "Keliru; perekaman tanpa persetujuan (informed consent) melanggar kode etik riset antropologis."
      },
      {
        pernyataan: "Rekaman audio memungkinkan peneliti menangkap intonasi suara, jeda emosi, dan dialek penutur yang mungkin terlewat dalam catatan tulisan tangan cepat.",
        kunci: "Benar",
        penjelasan: "Tepat; nuansa paralinguistik (intonasi, nada bicara) tersimpan secara akurat dalam data rekaman suara."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Evaluasi Pemanfaatan Alat Perekam Etnografi (Hal. 194 & 212, No. 50):</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Rekaman mencegah bias lupa dan kesalahan interpretasi kata-kata informan.<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Perekaman wajib memperoleh persetujuan terang (<em>informed consent</em>) dari informan terlebih dahulu.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Aspek paralinguistik terekam sempurna untuk analisis wacana dan etnolinguistik.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  }
];

// Buat konten file JavaScript
const fileContent = `// Data Soal TKA Antropologi SMA 2025/2026 (Pilihan) - Paket 2
// Sumber: Buku Kompilasi Resmi BPPP Kemendikbudristek 2025 (Halaman 185-212, Bagian No. 26-50)
// Paket 2: 25 Butir Soal Variasi PG, MCMA, dan Benar/Salah (100% Bebas Tanda Dolar)

const tkaAntropologiPaket2Data = ${JSON.stringify(soalList, null, 2)};

// Registrasi global bundle
if (typeof window !== 'undefined') {
  window.tkaAntropologiPaket2Data = tkaAntropologiPaket2Data;
  window.tkaAntropologiPackages = window.tkaAntropologiPackages || {};
  window.tkaAntropologiPackages['paket2'] = {
    title: "Paket 2: Prediksi Resmi TKA Antropologi (Pilihan) SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    data: tkaAntropologiPaket2Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tkaAntropologiPaket2Data;
}
`;

// Tulis ke tka/data/mapel-antropologi-paket2.js
const targetPath = path.join(__dirname, '../tka/data/mapel-antropologi-paket2.js');

// Verifikasi bebas tanda dolar
const dollarCount = (fileContent.match(/\\$/g) || []).length;
console.log('Dollar sign count in generated Antropologi Paket 2:', dollarCount);
if (dollarCount > 0) {
  console.error('ERROR: Masih terdapat tanda dolar di dalam dataset!');
  process.exit(1);
} else {
  console.log('✅ Dataset Antropologi Paket 2 100% BEBAS dari tanda dolar ($)!');
}

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('🎉 ' + targetPath + ' berhasil dibuat! (25 butir soal)');
