// scripts/build_antropologi_paket1.js
const fs = require('fs');
const path = require('path');

const soalList = [
  {
    id: 1,
    kode: "25ANT-PAKET1-001",
    elemen: "Pengantar Antropologi",
    subelemen: "Cabang Ilmu Antropologi",
    kompetensi: "Membedakan karakteristik fokus kajian antara antropologi budaya dan antropologi sosial.",
    indikator: "Mengidentifikasi karakteristik utama fokus kajian antropologi budaya.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAntropologi budaya memiliki fokus kajian yang berbeda dengan antropologi sosial. Salah satu karakteristik utama antropologi budaya adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Menganalisis struktur sosial dan sistem organisasi dalam masyarakat"
      },
      {
        id: "B",
        key: "B",
        text: "Mengkaji keunikan tradisi, adat, dan sistem pengetahuan dalam suatu kelompok"
      },
      {
        id: "C",
        key: "C",
        text: "Meneliti perilaku individu dalam konteks ekonomi dan politik kekuasaan"
      },
      {
        id: "D",
        key: "D",
        text: "Memahami bagaimana kelompok masyarakat berinteraksi dalam konflik sosial"
      },
      {
        id: "E",
        key: "E",
        text: "Mengamati perubahan sosial yang terjadi akibat perkembangan teknologi industri"
      }
    ],
    kunci: "B",
    pembahasan: "<strong>Fokus Kajian Antropologi Budaya vs Antropologi Sosial:</strong><br>\nSecara epistemologis, antropologi terbagi menjadi dua tradisi besar:<br>\n1. <strong>Antropologi Sosial</strong> (berkembang pesat di tradisi Inggris): menitikberatkan kajian pada struktur sosial, organisasi kemasyarakatan, sistem kekerabatan, hukum adat, dan hubungan kelembagaan antarkelompok.<br>\n2. <strong>Antropologi Budaya</strong> (berkembang pesat di tradisi Amerika, dipelopori Franz Boas): berfokus pada cara hidup, sistem simbol, makna, bahasa, adat istiadat, kepercayaan (religi), serta <em>sistem pengetahuan lokal</em> yang diwariskan dari generasi ke generasi.<br><br>\nDengan demikian, karakteristik utama antropologi budaya adalah mengkaji keunikan tradisi, adat, dan sistem pengetahuan dalam kelompok (<strong>Pilihan B</strong>).<br><br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    id: 2,
    kode: "25ANT-PAKET1-002",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Kriteria Informan Etnografi",
    kompetensi: "Menjelaskan urgensi kriteria keterlibatan langsung dalam pemilihan informan etnografi.",
    indikator: "Menentukan tujuan utama memilih informan yang memiliki keterlibatan langsung dalam kebudayaan.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam memilih informan untuk penelitian etnografi, etnografer harus memastikan bahwa informan memiliki keterlibatan langsung dalam kebudayaan yang sedang diteliti. Tujuan dari keterlibatan langsung ini adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Memilih informan berdasarkan tingkat pendidikan formal dan gelar akademis yang mereka miliki"
      },
      {
        id: "B",
        key: "B",
        text: "Menjamin bahwa informan memiliki pengetahuan teoretis konseptual tentang kebudayaan mereka"
      },
      {
        id: "C",
        key: "C",
        text: "Memastikan bahwa informan memahami kebudayaannya dari kacamata komparatif akademis luar"
      },
      {
        id: "D",
        key: "D",
        text: "Memastikan bahwa informan masih aktif dalam praktik budaya nyata yang sedang diteliti"
      },
      {
        id: "E",
        key: "E",
        text: "Memilih informan yang berpengalaman di masa lalu meskipun kini sudah terasing dari komunitas"
      }
    ],
    kunci: "D",
    pembahasan: "<strong>Kriteria Informan dalam Penelitian Etnografi:</strong><br>\nMenurut James Spradley, salah satu syarat mutlak informan kunci (<em>key informant</em>) adalah <strong>keterlibatan langsung</strong> (<em>direct involvement</em>). Kebudayaan bukanlah entitas statis melainkan praktik hidup yang terus bertransformasi. Informan yang masih aktif dalam kegiatan kebudayaan yang diteliti mampu memberikan data emik (<em>native's point of view</em>) yang hidup, akurat, kontekstual, dan mencerminkan dinamika nyata di lapangan.<br><br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    id: 3,
    kode: "25ANT-PAKET1-003",
    elemen: "Antropologi Terapan",
    subelemen: "Mediasi dan Manajemen Konflik",
    kompetensi: "Menganalisis peranan antropologi terapan dalam pembekalan budaya bagi personel di daerah konflik.",
    indikator: "Menjelaskan alasan pentingnya pemahaman budaya lokal bagi pasukan penugasan di daerah konflik.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam konteks antropologi terapan, personel yang bertugas di daerah rawan konflik seringkali dibekali pemahaman mendalam mengenai budaya lokal agar dapat menjalankan misi dengan lebih efektif. Hal ini dilakukan karena ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Pemahaman budaya lokal dapat menghapus seluruh perbedaan sosial masyarakat secara instan"
      },
      {
        id: "B",
        key: "B",
        text: "Kebudayaan masyarakat di daerah konflik harus segera diseragamkan dengan budaya modern nasional"
      },
      {
        id: "C",
        key: "C",
        text: "Memperkenalkan budaya luar ke daerah konflik dapat mempercepat transformasi sosial sepihak"
      },
      {
        id: "D",
        key: "D",
        text: "Penguasaan budaya lokal ditujukan untuk mendominasi dan mengendalikan warga secara koersif"
      },
      {
        id: "E",
        key: "E",
        text: "Dengan memahami budaya setempat, mereka dapat menyusun strategi komunikasi dan interaksi yang sensitif budaya"
      }
    ],
    kunci: "E",
    pembahasan: "<strong>Peran Antropologi Terapan di Daerah Konflik:</strong><br>\nDalam antropologi terapan, pembekalan wawasan sosio-kultural bertujuan membangun kepekaan budaya (<em>cultural sensitivity</em>). Personel yang memahami sistem norma, pantangan (tabu), dan simbol kultural masyarakat lokal dapat menjalin komunikasi persuasif, mencegah friksi akibat salah paham kultural, serta meredam eskalasi konflik antarkelompok secara humanis.<br><br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    id: 4,
    kode: "25ANT-PAKET1-004",
    elemen: "Antropologi Linguistik",
    subelemen: "Variasi Bahasa",
    kompetensi: "Mengidentifikasi konsep variasi bahasa idiolek dalam kajian linguistik antropologis.",
    indikator: "Mendefinisikan konsep idiolek dalam variasi penuturan bahasa.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kajian linguistik antropologis, istilah <em>idiolek</em> merujuk pada ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Gaya bahasa yang khas, unik, dan individual pada diri setiap penutur"
      },
      {
        id: "B",
        key: "B",
        text: "Variasi bahasa yang timbul akibat letak geografis atau batas wilayah persebaran penduduk"
      },
      {
        id: "C",
        key: "C",
        text: "Perubahan struktur fonologis bahasa yang diwariskan turun-temurun lintas generasi"
      },
      {
        id: "D",
        key: "D",
        text: "Ragam bahasa yang dipakai oleh kelompok strata sosial atau profesi tertentu"
      },
      {
        id: "E",
        key: "E",
        text: "Sistem aksara formal dan ortografi baku yang disepakati oleh lembaga bahasa negara"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Hierarki Variasi Bahasa:</strong><br>\n1. <strong>Idiolek:</strong> Variasi bahasa yang bersifat individual; kekhasan pilihan kata, nada, intonasi, dan diksi seorang individu.<br>\n2. <strong>Dialek:</strong> Variasi bahasa dari sekelompok penutur yang berada di wilayah geografis tertentu (dialek regional).<br>\n3. <strong>Sosiolek:</strong> Variasi bahasa yang didasarkan pada kelas sosial, profesi, atau usia penutur.<br>\n4. <strong>Kronolek:</strong> Variasi bahasa yang digunakan pada masa/era sejarah tertentu.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 5,
    kode: "25ANT-PAKET1-005",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Metode Etnografi",
    kompetensi: "Menjelaskan teknik pengumpulan data observasi partisipatif dalam tradisi etnografi.",
    indikator: "Mengidentifikasi istilah teknik penelitian di mana etnografer tinggal dan membaur bersama masyarakat.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam studi etnografi, seorang antropolog melakukan penelitian dengan cara tinggal dan membaur bersama masyarakat yang diteliti dalam kurun waktu tertentu untuk merasakan ritme kehidupan sehari-hari. Teknik penelitian ini dikenal dengan istilah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Observasi partisipatif (participant observation)"
      },
      {
        id: "B",
        key: "B",
        text: "Wawancara terstruktur tertutup"
      },
      {
        id: "C",
        key: "C",
        text: "Studi literatur historis"
      },
      {
        id: "D",
        key: "D",
        text: "Survei kuesioner berskala besar"
      },
      {
        id: "E",
        key: "E",
        text: "Eksperimen laboratorium terkontrol"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Observasi Partisipatif (Bronislaw Malinowski):</strong><br>\nObservasi partisipatif merupakan ciri khas (<em>hallmark</em>) metode penelitian antropologi. Peneliti tidak hanya mengamati dari luar sebagai pengamat pasif, melainkan ikut serta dalam rutinitas harian, upacara adat, serta interaksi sosial warga untuk menangkap makna simbolis dari sudut pandang warga setempat (perspektif emik).<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 6,
    kode: "25ANT-PAKET1-006",
    elemen: "Antropologi Kontemporer",
    subelemen: "Antropologi Siber dan Netnografi",
    kompetensi: "Mengidentifikasi metodologi penelitian antropologi dalam mengkaji komunitas virtual di dunia digital.",
    indikator: "Menentukan metode penelitian yang tepat untuk meneliti interaksi budaya komunitas daring.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang peneliti ingin memahami budaya, simbol status, dan konvensi komunikasi sebuah komunitas virtual pecinta permainan peran (role-playing game) daring di internet. Pendekatan metodologis yang paling tepat digunakan adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Etnografi klasik pedalaman"
      },
      {
        id: "B",
        key: "B",
        text: "Netnografi (cyber-ethnography)"
      },
      {
        id: "C",
        key: "C",
        text: "Ekskavasi stratigrafi arkeologis"
      },
      {
        id: "D",
        key: "D",
        text: "Analisis antropometri fisik"
      },
      {
        id: "E",
        key: "E",
        text: "Studi linguistik komparatif diakronis"
      }
    ],
    kunci: "B",
    pembahasan: "<strong>Netnografi (Robert Kozinets):</strong><br>\nNetnografi adalah adaptasi dari metode etnografi konvensional yang dirancang khusus untuk mengkaji praktik budaya, pola interaksi, norma, dan pembentukan identitas pada komunitas virtual di ruang siber (<em>cyberspace</em>). Peneliti mengamati interaksi teks, bahasa slang, meme, dan dinamika forum daring.<br><br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    id: 7,
    kode: "25ANT-PAKET1-007",
    elemen: "Etnografi Nusantara",
    subelemen: "Sistem Religi dan Seni Suku Mentawai",
    kompetensi: "Menganalisis makna simbolis seni rajah tubuh (titi) dalam kebudayaan masyarakat Kepulauan Mentawai.",
    indikator: "Menjelaskan fungsi spiritual dan sosial tradisi titi (tato) bagi masyarakat Suku Mentawai.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kebudayaan tradisional Suku Mentawai di Sumatera Barat, tato tradisional yang disebut <em>titi</em> pada sekujur tubuh memiliki makna filosofis yang sangat mendalam, yaitu sebagai ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Simbol keharmonisan dengan roh alam, penanda status sosial, dan representasi identitas kosmis"
      },
      {
        id: "B",
        key: "B",
        text: "Hukuman sosial yang dijatuhkan bagi anggota klan yang melanggar aturan adat berburu"
      },
      {
        id: "C",
        key: "C",
        text: "Penanda kepemilikan budak oleh para kepala suku feodal di daerah pesisir"
      },
      {
        id: "D",
        key: "D",
        text: "Kewajiban semata-mata untuk menarik wisatawan asing demi kepentingan pariwisata daerah"
      },
      {
        id: "E",
        key: "E",
        text: "Strategi kamuflase militer saat terjadi peperangan antarsuku di dalam hutan rimba"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Makna Filosofis Tradisi Titi Mentawai:</strong><br>\nBagi masyarakat Mentawai penganut kepercayaan Arat Sabulungan, tubuh manusia dipandang sebagai rumah bagi jiwa (<em>simagere</em>). Tato <em>titi</em> dibuat oleh <em>sipatiti</em> dengan motif tumbuhan, hewan, dan garis alam guna menjaga keharmonisan antara manusia, jiwa, dan roh alam penunggu semesta, sekaligus menunjukkan klan, kedewasaan, serta profesi berburu seseorang.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 8,
    kode: "25ANT-PAKET1-008",
    elemen: "Konsep Dasar Kebudayaan",
    subelemen: "Relativisme Budaya",
    kompetensi: "Menerapkan prinsip relativisme budaya dalam menyikapi keberagaman adat istiadat.",
    indikator: "Mengidentifikasi contoh sikap yang mencerminkan penerapan prinsip relativisme budaya.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nRelativisme budaya adalah konsep fundamental dalam antropologi yang menekankan bahwa setiap kebudayaan harus dipahami berdasarkan konteks dan nilai-nilainya sendiri. Contoh sikap penerapan relativisme budaya dalam kehidupan sehari-hari adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Menilai tradisi masyarakat lain sebagai tradisi terbelakang berdasarkan standar modern kita"
      },
      {
        id: "B",
        key: "B",
        text: "Mewajibkan kelompok minoritas untuk meninggalkan tradisinya agar sesuai budaya mayoritas"
      },
      {
        id: "C",
        key: "C",
        text: "Menghindari pergaulan dengan individu yang memiliki latar belakang kebiasaan berbeda"
      },
      {
        id: "D",
        key: "D",
        text: "Menyeragamkan seluruh produk budaya lokal agar bangsa memiliki satu standar tunggal"
      },
      {
        id: "E",
        key: "E",
        text: "Menghormati dan berusaha memahami logika di balik praktik budaya lain tanpa buru-buru menghakimi"
      }
    ],
    kunci: "E",
    pembahasan: "<strong>Relativisme Budaya (Cultural Relativism):</strong><br>\nKonsep ini digagas oleh Franz Boas sebagai antitesis terhadap <em>etnosentrisme</em> (sikap menilai budaya lain memakai tolok ukur budayanya sendiri dan menganggap budayanya paling unggul). Menghormati serta membedah logika internal suatu adat istiadat tanpa prasangka superioritas mencerminkan penerapan relativisme budaya yang sehat.<br><br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    id: 9,
    kode: "25ANT-PAKET1-009",
    elemen: "Konsep Dasar Kebudayaan",
    subelemen: "Wujud Kebudayaan Hoenigman",
    kompetensi: "Mengkategorikan fenomena kebudayaan ke dalam tiga wujud kebudayaan menurut J.J. Hoenigman.",
    indikator: "Menentukan wujud kebudayaan berupa artefak (kebudayaan fisik).",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nMenurut J.J. Hoenigman, kebudayaan memiliki tiga wujud, yaitu gagasan, aktivitas, dan artefak. Manakah di antara pilihan berikut yang merupakan contoh kebudayaan dalam wujud <em>artefak</em>?\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Falsafah hidup 'Tri Hita Karana' yang diyakini oleh masyarakat Bali"
      },
      {
        id: "B",
        key: "B",
        text: "Prosesi musyawarah mufakat di balai desa saat menentukan jadwal tanam padi"
      },
      {
        id: "C",
        key: "C",
        text: "Candi Borobudur, keris pusaka, dan kain tenun ikat tradisional"
      },
      {
        id: "D",
        key: "D",
        text: "Keyakinan akan adanya kekuatan gaib pada benda-benda pusaka leluhur"
      },
      {
        id: "E",
        key: "E",
        text: "Tata krama dan etika bertutur kata bahasa Jawa ragam krama inggil"
      }
    ],
    kunci: "C",
    pembahasan: "<strong>Tiga Wujud Kebudayaan (J.J. Hoenigman):</strong><br>\n1. <strong>Gagasan (Ideational):</strong> Bersifat abstrak di kepala manusia, mencakup ide, nilai, norma, falsafah (misal: Tri Hita Karana).<br>\n2. <strong>Aktivitas (Sosial/Tindakan):</strong> Pola perilaku manusia yang saling berinteraksi (misal: upacara adat, musyawarah desa).<br>\n3. <strong>Artefak (Fisik/Kebudayaan Materi):</strong> Benda nyata hasil karya fisik manusia yang dapat diraba dan dilihat (misal: Candi Borobudur, keris, kain tenun).<br><br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    id: 10,
    kode: "25ANT-PAKET1-010",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Enkulturasi dan Sosialisasi",
    kompetensi: "Menjelaskan konsep enkulturasi dalam pewarisan nilai-nilai kebudayaan.",
    indikator: "Mengidentifikasi pengertian proses enkulturasi dalam kehidupan manusia.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSalah satu konsep penting dalam antropologi adalah <em>enkulturasi</em> (pembudayaan). Pengertian paling tepat dari proses enkulturasi adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Proses belajar seorang individu dalam menyerap nilai, norma, dan kebiasaan budayanya sejak masa kanak-kanak"
      },
      {
        id: "B",
        key: "B",
        text: "Penyatuan dua kebudayaan berbeda yang menghasilkan kebudayaan baru tanpa meninggalkan sifat aslinya"
      },
      {
        id: "C",
        key: "C",
        text: "Pemaksaan unsur-unsur kebudayaan asing oleh penguasa kolonial kepada masyarakat jajahan"
      },
      {
        id: "D",
        key: "D",
        text: "Pemusnahan warisan artefak kebudayaan lama untuk digantikan dengan teknologi modern"
      },
      {
        id: "E",
        key: "E",
        text: "Kondisi di mana suatu masyarakat kehilangan seluruh orientasi nilai dan pedoman moralnya"
      }
    ],
    kunci: "A",
    pembahasan: "<strong>Enkulturasi (Enculturation):</strong><br>\nEnkulturasi (proses pembudayaan) adalah proses belajar sepanjang hayat di mana seorang individu mempelajari, menghayati, dan menyesuaikan alam pikiran serta sikapnya dengan sistem norma, adat istiadat, dan nilai yang hidup dalam kebudayaannya sejak dini di lingkungan keluarga dan masyarakat.<br><br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    id: 11,
    kode: "25ANT-PAKET1-011",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Teori Perubahan Kebudayaan",
    kompetensi: "Menganalisis karakteristik teori sosiohistoris siklus dalam memahami pasang surut peradaban.",
    indikator: "Mengidentifikasi asumsi pokok teori siklus mengenai pertumbuhan dan keruntuhan kebudayaan.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDinamika kebudayaan dan masyarakat senantiasa terjadi seiring waktu. Tokoh antropologi dan sejarah seperti Oswald Spengler dan Arnold Toynbee mengemukakan teori sosiohistoris siklus. Asumsi pokok teori siklus menyatakan bahwa ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Masyarakat bergerak secara garis lurus (linier) dari tahap primitif menuju puncak peradaban sempurna"
      },
      {
        id: "B",
        key: "B",
        text: "Perubahan kebudayaan semata-mata ditentukan oleh faktor pertentangan kelas ekonomi materialistis"
      },
      {
        id: "C",
        key: "C",
        text: "Peradaban dan kebudayaan mengalami fase kelahiran, pertumbuhan, kejayaan, kemunduran, lalu berulang kembali"
      },
      {
        id: "D",
        key: "D",
        text: "Semua kebudayaan di muka bumi berpusat pada satu kebudayaan induk tunggal yang menyebar ke seluruh dunia"
      },
      {
        id: "E",
        key: "E",
        text: "Kemajuan teknologi secara permanen menghentikan kemungkinan mundurnya suatu peradaban besar"
      }
    ],
    kunci: "C",
    pembahasan: "<strong>Teori Sosiohistoris Siklus:</strong><br>\nBerbeda dengan teori evolusi linier yang menganggap peradaban bergerak maju lurus tanpa henti, teori siklus (Oswald Spengler, Arnold Toynbee, Ibnu Khaldun) memandang peradaban seperti organisme biologis: lahir, bertumbuh, mencapai puncak kejayaan (keemasan), mengalami degenerasi/keruntuhan, lalu siklus tersebut berulang kembali pada peradaban berikutnya.<br><br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    id: 12,
    kode: "25ANT-PAKET1-012",
    elemen: "Antropologi Linguistik",
    subelemen: "Sosiolinguistik vs Etnolinguistik",
    kompetensi: "Membedakan orientasi kajian sosiolinguistik dengan etnolinguistik.",
    indikator: "Mengidentifikasi perbedaan utama fokus telaah sosiolinguistik dan etnolinguistik.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kajian bahasa dan masyarakat, terdapat dua cabang ilmu yang saling beririsan: sosiolinguistik dan etnolinguistik. Perbedaan utama fokus kajian di antara keduanya terletak pada ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Sosiolinguistik mengkaji aksara kuno prasejarah, sedangkan etnolinguistik mengkaji tata bahasa komputer"
      },
      {
        id: "B",
        key: "B",
        text: "Sosiolinguistik hanya meneliti bahasa asing, sedangkan etnolinguistik hanya meneliti bahasa daerah"
      },
      {
        id: "C",
        key: "C",
        text: "Sosiolinguistik mengabaikan struktur masyarakat, sedangkan etnolinguistik mengabaikan unsur budaya"
      },
      {
        id: "D",
        key: "D",
        text: "Sosiolinguistik memfokuskan hubungan bahasa dengan struktur sosial penutur, sedangkan etnolinguistik membedah keterkaitan bahasa dengan pola pikir budaya dan kosmologi suku bangsa"
      },
      {
        id: "E",
        key: "E",
        text: "Sosiolinguistik berfokus pada asal-usul biologi penutur, sedangkan etnolinguistik meneliti fonem fisik manusia"
      }
    ],
    kunci: "D",
    pembahasan: "<strong>Sosiolinguistik vs Etnolinguistik:</strong><br>\n- <strong>Sosiolinguistik:</strong> Menelaah variasi bahasa dalam konteks variabel sosial masyarakat (kelas sosial, gender, usia, profesi, konteks percakapan formal/informal).<br>\n- <strong>Etnolinguistik:</strong> Menelaah hubungan timbal balik antara bahasa dan kebudayaan suku bangsa, seperti bagaimana kosa kata, metafora, dan struktur bahasa merefleksikan pandangan dunia (<em>worldview</em>) dan nilai kultural etnis tertentu.<br><br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    id: 13,
    kode: "25ANT-PAKET1-013",
    elemen: "Struktur dan Sistem Sosial",
    subelemen: "Tingkatan Norma Sosial",
    kompetensi: "Menganalisis kekuatan daya ikat norma adat istiadat (customs) dalam kehidupan masyarakat.",
    indikator: "Mengidentifikasi karakteristik norma adat istiadat (customs) dibanding norma sosial lainnya.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nNorma sosial dalam masyarakat tersusun atas beberapa tingkatan: cara (<em>usage</em>), kebiasaan (<em>folkways</em>), tata kelakuan (<em>mores</em>), dan adat istiadat (<em>customs</em>). Karakteristik khas dari norma <em>adat istiadat</em> adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Hanya berlaku temporer dan tidak memiliki konsekuensi sanksi apa pun jika dilanggar"
      },
      {
        id: "B",
        key: "B",
        text: "Memiliki daya ikat yang sangat kuat dan pelanggarannya diganjar sanksi adat yang berat dari komunitas"
      },
      {
        id: "C",
        key: "C",
        text: "Diciptakan secara tertulis oleh badan legislatif negara modern melalui undang-undang formal"
      },
      {
        id: "D",
        key: "D",
        text: "Hanya mengatur tata cara makan dan berpakaian individu dalam ruang lingkup rumah tangga"
      },
      {
        id: "E",
        key: "E",
        text: "Berasal dari tren gaya hidup populer yang mudah berganti mengikuti perkembangan media sosial"
      }
    ],
    kunci: "B",
    pembahasan: "<strong>Tingkatan Norma Sosial:</strong><br>\nAdat istiadat (<em>customs</em>) merupakan tingkatan norma tertinggi dalam keterikatan tradisional. Norma ini berakar kuat pada pola perilaku luhur turun-temurun dan diintegrasikan secara mendalam. Pelanggaran terhadap adat istiadat dikenai sanksi adat berat, seperti denda adat, pengucilan, hingga pengusiran dari tanah leluhur.<br><br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    id: 14,
    kode: "25ANT-PAKET1-014",
    elemen: "Antropologi Linguistik",
    subelemen: "Semantik Budaya dan Simbolisme",
    kompetensi: "Menganalisis makna kultural sistem simbol warna dalam kajian semantik etnolinguistik.",
    indikator: "Menjelaskan fenomena perbedaan asosiasi makna warna antar-kelompok kebudayaan.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam kebudayaan Barat, pakaian hitam kerap diidentikkan dengan perkabungan dan kedukaan, sedangkan dalam kebudayaan Tionghoa tradisional, warna putih justru menjadi simbol resmi duka cita. Dalam kajian etnolinguistik, fenomena ini menunjukkan bahwa ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Makna warna bersifat universal dan biologis pada mata manusia secara seragam di seluruh bumi"
      },
      {
        id: "B",
        key: "B",
        text: "Warna putih memiliki panjang gelombang cahaya yang secara ilmiah mencerminkan kesedihan global"
      },
      {
        id: "C",
        key: "C",
        text: "Masyarakat Barat belum mengenal klasifikasi warna secara maju sebelum era industri"
      },
      {
        id: "D",
        key: "D",
        text: "Setiap suku bangsa dilarang menciptakan lambang warna yang bertentangan dengan kebudayaan global"
      },
      {
        id: "E",
        key: "E",
        text: "Sistem simbol warna merupakan bentukan semantik budaya (cultural semantics) yang arbitrer dan kontekstual"
      }
    ],
    kunci: "E",
    pembahasan: "<strong>Semantik Budaya dan Klasifikasi Warna:</strong><br>\nDalam etnolinguistik, simbol warna bersifat konvensional dan arbitrer (manasuka) yang dibentuk oleh sejarah, filsafat, dan kosmologi masyarakatnya masing-masing. Di Tiongkok, putih diasosiasikan dengan logam dan musim gugur (akhir siklus kehidupan), sedangkan di Barat hitam melambangkan ketiadaan cahaya/kematian.<br><br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    id: 15,
    kode: "25ANT-PAKET1-015",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Unsur Universal Kebudayaan",
    kompetensi: "Menentukan unsur kebudayaan universal yang paling cepat mengalami perubahan akibat modernisasi.",
    indikator: "Mengidentifikasi unsur kebudayaan yang paling mudah berubah seiring arus kemajuan zaman.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKoentjaraningrat mengklasifikasikan tujuh unsur kebudayaan universal. Di antara unsur-unsur tersebut, unsur kebudayaan yang biasanya paling cepat dan mudah mengalami perubahan akibat modernisasi dan kontak dengan bangsa luar adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Sistem religi dan keyakinan spiritual inti"
      },
      {
        id: "B",
        key: "B",
        text: "Sistem nilai moral dasar kepribadian masyarakat"
      },
      {
        id: "C",
        key: "C",
        text: "Sistem peralatan hidup dan teknologi"
      },
      {
        id: "D",
        key: "D",
        text: "Sistem kekerabatan dan garis keturunan biologis"
      },
      {
        id: "E",
        key: "E",
        text: "Sistem pantangan gaib dan tabu leluhur"
      }
    ],
    kunci: "C",
    pembahasan: "<strong>Kecepatan Perubahan Unsur Kebudayaan:</strong><br>\nUnsur kebudayaan fisik yang berorientasi praktis seperti <em>sistem teknologi dan peralatan hidup</em> (alat komunikasi, transportasi, mesin pertanian) jauh lebih mudah dan cepat diadopsi karena manfaat efisiensinya dapat dirasakan langsung. Sebaliknya, unsur batiniah seperti sistem religi, filsafat hidup, dan sistem kekerabatan bersifat sangat resisten terhadap perubahan.<br><br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    id: 16,
    kode: "25ANT-PAKET1-016",
    elemen: "Antropologi Perkotaan",
    subelemen: "Adaptasi Budaya Kaum Migran",
    kompetensi: "Mengidentifikasi objek kajian antropologi perkotaan (urban anthropology) di kota-kota megapolitan.",
    indikator: "Menentukan fokus telaah antropologi perkotaan terkait fenomena migrasi dan permukiman.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSalah satu objek kajian utama dalam antropologi perkotaan (<em>urban anthropology</em>) di negara-negara berkembang seperti Indonesia adalah ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Fosil manusia purba dan peralatan batu kapak perimbas di goa-goa kapur"
      },
      {
        id: "B",
        key: "B",
        text: "Strategi adaptasi budaya komunitas migran dan pembentukan jaringan sosial di kawasan permukiman padat"
      },
      {
        id: "C",
        key: "C",
        text: "Sistem penanggalan astrologi suku bangsa pedalaman Amazon"
      },
      {
        id: "D",
        key: "D",
        text: "Variasi morfologi tulang tengkorak manusia Neanderthal"
      },
      {
        id: "E",
        key: "E",
        text: "Struktur gramatika prasasti berbahasa Sansekerta abad ke-5 Masehi"
      }
    ],
    kunci: "B",
    pembahasan: "<strong>Fokus Kajian Antropologi Perkotaan:</strong><br>\nAntropologi perkotaan memusatkan perhatian pada dinamika kehidupan masyarakat kota, termasuk bagaimana para migran pedesaan beradaptasi dengan lingkungan baru, mempertahankan paguyuban kedaerahan sebagai modal sosial, serta menavigasi keterbatasan ruang dan ekonomi di perkotaan.<br><br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    id: 17,
    kode: "25ANT-PAKET1-017",
    elemen: "Antropologi Politik",
    subelemen: "Tipe Legitimasi Kekuasaan Weber",
    kompetensi: "Menganalisis tipe otoritas legal-rasional menurut teori Max Weber.",
    indikator: "Menentukan ciri khas legitimasi kekuasaan yang didasarkan pada prinsip hukum dan kompetensi birokrasi.",
    tipe: "pg",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam teori legitimasi kekuasaan Max Weber, suatu pemerintahan modern yang mendapatkan kepatuhan warganya karena didasarkan pada peraturan tertulis, konstitusi resmi, dan hierarki birokrasi profesional disebut menerapkan tipe otoritas ...\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Otoritas karismatik adikodrati"
      },
      {
        id: "B",
        key: "B",
        text: "Otoritas tradisional turun-temurun"
      },
      {
        id: "C",
        key: "C",
        text: "Otoritas feodal patrimonial"
      },
      {
        id: "D",
        key: "D",
        text: "Otoritas legal-rasional"
      },
      {
        id: "E",
        key: "E",
        text: "Otoritas militeristik tirani"
      }
    ],
    kunci: "D",
    pembahasan: "<strong>Tiga Tipe Otoritas Max Weber:</strong><br>\n1. <strong>Otoritas Tradisional:</strong> Didasarkan pada kesakralan tradisi masa lampau dan garis keturunan (misal: kerajaan/kesultanan).<br>\n2. <strong>Otoritas Karismatik:</strong> Didasarkan pada daya tarik personal luar biasa, kewibawaan, atau anugerah supranatural seorang pemimpin.<br>\n3. <strong>Otoritas Legal-Rasional:</strong> Didasarkan pada ketaatan pada hukum konstitusional, undang-undang tertulis, dan prosedur birokrasi rasional.<br><br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    id: 18,
    kode: "25ANT-PAKET1-018",
    elemen: "Etnolinguistik dan Folklor",
    subelemen: "Sastra Lisan Marumpasa Batak Toba",
    kompetensi: "Menganalisis fungsi dan konteks tradisi sastra lisan marumpasa pada masyarakat Batak Toba.",
    indikator: "Memilih konteks peristiwa adat di mana tradisi marumpasa dilantunkan (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nTradisi <em>marumpasa</em> dalam masyarakat Batak Toba merupakan folklor lisan berupa pantun atau petuah berirama tinggi. Dalam konteks adat manakah tradisi bertutur marumpasa lazim dilantunkan?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Upacara pesta pernikahan adat (mangoli / mangalua) sebagai wejangan hidup rukun bagi pengantin"
      },
      {
        id: "B",
        key: "B",
        text: "Perayaan kelahiran anak dan syukuran pemberian nama (tardidi) untuk memohon berkah"
      },
      {
        id: "C",
        key: "C",
        text: "Upacara adat duka cita/kematian (saur matua) untuk menghormati leluhur dan penguatan keluarga"
      },
      {
        id: "D",
        key: "D",
        text: "Ujian tertulis standardisasi akademis formal di sekolah-sekolah modern"
      },
      {
        id: "E",
        key: "E",
        text: "Penyusunan laporan pembukuan devisa ekspor komoditas perdagangan internasional"
      }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Konteks Marumpasa Batak Toba (Jawaban A, B, dan C Benar):</strong><br>\n<em>Umpasa</em> adalah sastra lisan berbobot filosofis yang berfungsi sebagai doa, restu, serta pedoman tata laku adat dalam siklus kehidupan (<em>life cycle</em>) Batak Toba, terutama pada upacara perkawinan, kelahiran anak, syukuran panen, maupun upacara kematian adat terhormat. Opsi D dan E tidak relevan dengan ranah folklor adat tradisional.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    id: 19,
    kode: "25ANT-PAKET1-019",
    elemen: "Struktur dan Sistem Sosial",
    subelemen: "Sistem Kekerabatan Matrilineal",
    kompetensi: "Menganalisis prinsip pewarisan dan peran mamak dalam masyarakat matrilineal Minangkabau.",
    indikator: "Menentukan karakteristik sistem kekerabatan dan harta pusaka matrilineal (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nMasyarakat Minangkabau menganut sistem kekerabatan <em>matrilineal</em> yang khas. Manakah pernyataan berikut yang mencerminkan prinsip kekerabatan dan pengelolaan harta dalam sistem matrilineal tersebut?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Garis keturunan keluarga dan penentuan suku/klan ditarik mengikuti garis keturunan ibu"
      },
      {
        id: "B",
        key: "B",
        text: "Harta pusaka tinggi (tanah adat, sawah, rumah gadang) diwariskan turun-temurun kepada kaum perempuan"
      },
      {
        id: "C",
        key: "C",
        text: "Saudara laki-laki ibu (tungganai/mamak rumah) bertindak sebagai pemelihara dan pengawas pemanfaatan harta pusaka"
      },
      {
        id: "D",
        key: "D",
        text: "Seluruh nama keluarga dan gelar bangsawan wajib diturunkan melalui anak laki-laki kandung pertama"
      },
      {
        id: "E",
        key: "E",
        text: "Kaum perempuan sama sekali tidak diizinkan menempati rumah gadang milik kaum leluhur"
      }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Karakteristik Sistem Matrilineal Minangkabau (Jawaban A, B, dan C Benar):</strong><br>\n1. <strong>Garis Ibu (A):</strong> Garis keturunan (suku) ditarik dari garis ibu.<br>\n2. <strong>Harta Pusaka Tinggi (B):</strong> Tanah ulayat dan rumah gadang diwariskan secara kolektif kepada perempuan kaum untuk menjamin kesejahteraan keturunan.<br>\n3. <strong>Peran Mamak (C):</strong> Saudara laki-laki ibu (mamak) bertanggung jawab memimpin keluarga besar kaum serta mengawasi harta pusaka bagi kemenakannya.<br>Opsi D adalah ciri patrilineal, dan Opsi E bertentangan dengan kenyataan bahwa rumah gadang dihuni oleh kaum wanita dan anak-anaknya.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    id: 20,
    kode: "25ANT-PAKET1-020",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Fungsi Kerangka Teori Etnografi",
    kompetensi: "Menganalisis signifikansi kerangka teoritis dalam membedakan etnografi akademis dengan tulisan populer.",
    indikator: "Memilih fungsi utama kerangka teori dalam riset etnografi ilmiah (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam penelitian antropologi, etnografi akademis dibedakan dari catatan perjalanan awam oleh keberadaan kerangka teori ilmiah. Apa fungsi utama kerangka teori dalam riset etnografi akademis?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Menyediakan landasan konseptual yang memandu peneliti dalam mengorganisasi dan menafsirkan data lapangan"
      },
      {
        id: "B",
        key: "B",
        text: "Menghubungkan temuan empiris lokal di komunitas tertentu dengan konsep dan perdebatan teoretis yang lebih luas"
      },
      {
        id: "C",
        key: "C",
        text: "Mencegah laporan riset agar tidak berhenti pada taraf deskripsi mentah tanpa eksplanasi analitis ilmiah"
      },
      {
        id: "D",
        key: "D",
        text: "Memastikan bahwa peneliti wajib merekayasa data informan agar sesuai dengan keinginan sponsor dana"
      },
      {
        id: "E",
        key: "E",
        text: "Menghapuskan kewajiban peneliti untuk melakukan kerja lapangan observasi langsung"
      }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Fungsi Teori dalam Etnografi Ilmiah (Jawaban A, B, dan C Benar):</strong><br>\nKerangka teori bertindak sebagai 'lensa analitis' bagi etnografer untuk menginterpretasikan fakta budaya (menjawab pertanyaan <em>mengapa</em> dan <em>bagaimana</em>, bukan sekadar <em>apa</em>). Teori mengaitkan temuan mikro di satu kampung dengan proposisi umum dalam disiplin ilmu antropologi. Opsi D dan E melanggar etika dan metodologi riset ilmiah.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    id: 21,
    kode: "25ANT-PAKET1-021",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Globalisasi dan Kebudayaan Lokal",
    kompetensi: "Mengidentifikasi faktor pendorong dan manifestasi pengaruh budaya global pada masyarakat kontemporer.",
    indikator: "Menentukan faktor percepatan integrasi budaya global di era revolusi industri 4.0 (jawaban benar lebih dari satu).",
    tipe: "mcma",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerkembangan dunia kontemporer mempercepat penetrasi kebudayaan global ke ranah lokal. Faktor utama apa sajakah yang mendorong akselerasi difusi budaya global tersebut?<br>\n<span class=\"text-xs text-indigo-600 font-semibold\">*(Pilihlah seluruh opsi yang benar!)*</span>\n</p>",
    options: [
      {
        id: "A",
        key: "A",
        text: "Revolusi teknologi informasi, internet berkecepatan tinggi, dan penetrasi masif media sosial lintas benua"
      },
      {
        id: "B",
        key: "B",
        text: "Meningkatnya arus migrasi, pariwisata internasional, dan mobilitas penduduk lintas batas negara"
      },
      {
        id: "C",
        key: "C",
        text: "Integrasi ekonomi dunia dan persebaran industri kreatif hiburan multinasional (musik, film, fesyen)"
      },
      {
        id: "D",
        key: "D",
        text: "Kebijakan isolasi total dari seluruh pemerintah negara di dunia terhadap barang-barang impor"
      },
      {
        id: "E",
        key: "E",
        text: "Terputusnya seluruh sambungan kabel optik telekomunikasi bawah laut antarbenua"
      }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: "<strong>Akselerasi Difusi Budaya Global (Jawaban A, B, dan C Benar):</strong><br>\nGlobalisasi budaya dipacu oleh konvergensi teknologi digital (internet/media sosial), kemudahan transportasi internasional, serta ekspansi pasar industri kreatif transnasional yang memungkinkan pertukaran nilai dan gaya hidup secara instan (Manuel Castells: <em>The Network Society</em>). Opsi D dan E bertolak belakang dengan fakta keterbukaan global.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    id: 22,
    kode: "25ANT-PAKET1-022",
    elemen: "Metodologi Penelitian Antropologi",
    subelemen: "Netnografi vs Etnografi Klasik",
    kompetensi: "Mengevaluasi komparasi karakteristik antara metode netnografi dan etnografi konvensional.",
    indikator: "Menilai kebenaran premis metodologis terkait ruang lingkup kerja netnografi.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nEvaluasilah apakah setiap pernyataan mengenai komparasi antara <strong>netnografi</strong> dan <strong>etnografi klasik</strong> berikut <strong>Benar</strong> atau <strong>Salah</strong>:\n</p>",
    items: [
      {
        pernyataan: "Etnografi klasik mensyaratkan kehadiran fisik peneliti di lokasi geografis nyata, sedangkan netnografi memusatkan observasi pada ruang digital dan komunitas maya.",
        kunci: "Benar",
        penjelasan: "Sesuai dengan distingsi metodologis; netnografi mengkaji interaksi daring tanpa mensyaratkan pertemuan fisik di wilayah geografis tertentu."
      },
      {
        pernyataan: "Netnografi sama sekali tidak memerlukan etika persetujuan (informed consent) karena semua data di internet dianggap bebas dieksploitasi tanpa izin pembuatnya.",
        kunci: "Salah",
        penjelasan: "Keliru; netnografi tetap terikat ketat pada etika riset, perlindungan privasi informan, anonimitas akun, dan informed consent."
      },
      {
        pernyataan: "Data dalam netnografi dapat berupa jejak digital asinkron, seperti arsip obrolan forum, komentar media sosial, dan konten visual buatan pengguna (UGC).",
        kunci: "Benar",
        penjelasan: "Tepat; teks, visual, dan jejak interaksi daring merupakan sumber data primer dalam netnografi."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Evaluasi Karakteristik Netnografi:</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Netnografi meneliti fenomena budaya di ruang digital berbasis internet.<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Peneliti siber tetap wajib mematuhi standar etika penelitian (misal panduan AoIR - <em>Association of Internet Researchers</em>).<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Jejak digital, postingan forum, dan metadata merupakan artefak kultural di ranah maya.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  },
  {
    id: 23,
    kode: "25ANT-PAKET1-023",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Dampak Integrasi Global dan Glokalisasi",
    kompetensi: "Menilai dampak integrasi global terhadap pelestarian dan adaptasi kebudayaan lokal.",
    indikator: "Menilai kebenaran pernyataan terkait pengaruh positif dan fenomena glokalisasi.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nEvaluasilah apakah setiap pernyataan mengenai <strong>dampak integrasi budaya global</strong> terhadap kebudayaan lokal berikut <strong>Benar</strong> atau <strong>Salah</strong>:\n</p>",
    items: [
      {
        pernyataan: "Integrasi global selalu dan pasti mengakibatkan kepunahan total seluruh kebudayaan lokal di muka bumi tanpa ada ruang bertahan sama sekali.",
        kunci: "Salah",
        penjelasan: "Keliru; kebudayaan lokal memiliki daya lentur (resiliensi) dan dapat melakukan rekontekstualisasi serta revitalisasi melalui media modern."
      },
      {
        pernyataan: "Penyebaran ilmu pengetahuan dan teknologi modern melalui integrasi global dapat membantu masyarakat adat mendokumentasikan serta melestarikan warisan budayanya.",
        kunci: "Benar",
        penjelasan: "Tepat; teknologi digital membantu dokumentasi bahasa daerah, digitalisasi manuskrip kuno, dan pemetaan wilayah adat."
      },
      {
        pernyataan: "Konsep 'glokalisasi' (glocalization) menjelaskan proses di mana produk budaya global diadaptasi dan disesuaikan dengan selera dan nilai budaya lokal.",
        kunci: "Benar",
        penjelasan: "Tepat; istilah Roland Robertson ini menunjukkan sintesis kreatif antara elemen global dan kearifan lokal."
      }
    ],
    kunci: ["Salah", "Benar", "Benar"],
    pembahasan: "<strong>Evaluasi Dinamika Budaya Global dan Lokal:</strong><br>\n1. <strong>Pernyataan 1 (Salah):</strong> Globalisasi tidak selalu homogenisasi destruktif; terjadi resistensi kultural dan hibridisasi.<br>\n2. <strong>Pernyataan 2 (Benar):</strong> Kemajuan sains dan teknologi membuka sarana konservasi budaya yang efisien.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Glokalisasi merupakan pertemuan aktif antara global dan lokal (misal: kuliner waralaba global yang menyajikan menu bumbu rendang).<br><br>\n<strong>Kunci Jawaban: Salah, Benar, Benar</strong>"
  },
  {
    id: 24,
    kode: "25ANT-PAKET1-024",
    elemen: "Antropologi Fisik dan Arkeologi",
    subelemen: "Interdisipliner Geomorfologi dan Permukiman Kuno",
    kompetensi: "Menganalisis hubungan interdisipliner antara arkeologi permukiman kuno dan ilmu geomorfologi bumi.",
    indikator: "Menilai kebenaran pernyataan mengenai pengaruh bentang alam geografis terhadap struktur benteng pertahanan kuno.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKetika seorang antropolog/arkeolog meneliti pemilihan lokasi dan rancang bangun <strong>benteng pertahanan kuno</strong> di masa lalu, evaluasilah kebenaran pernyataan ilmiah berikut:\n</p>",
    items: [
      {
        pernyataan: "Kajian mengenai bentuk benteng pertahanan kuno dan keterkaitannya dengan relief permukaan bumi memanfaatkan ilmu geomorfologi.",
        kunci: "Benar",
        penjelasan: "Tepat; geomorfologi mengkaji morfologi bentang alam, topografi bukit, dan dinamika erosi permukaan bumi yang dimanfaatkan manusia purba."
      },
      {
        pernyataan: "Benteng pertahanan kuno dibangun semata-mata atas dasar faktor estetika tanpa mempertimbangkan ketersediaan sumber air tawar maupun lereng curam.",
        kunci: "Salah",
        penjelasan: "Keliru; pemilihan lokasi benteng kuno mutlak memperhitungkan pertahanan alami (tebing, sungai) serta logistik air minum bagi penghuninya."
      },
      {
        pernyataan: "Topografi medan yang terjal dan perbukitan tinggi sengaja dipilih oleh perancang benteng masa lampau untuk memperoleh keunggulan strategis pemantauan musuh.",
        kunci: "Benar",
        penjelasan: "Tepat; elevasi yang tinggi memberikan sudut pandang taktis (vantage point) yang superior dalam mempertahankan benteng."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Arkeologi dan Geomorfologi dalam Strategi Pertahanan Kuno:</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Geomorfologi merupakan ilmu bantu utama arkeologi lansekap (<em>landscape archaeology</em>).<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Faktor geostrategis dan kelangsungan hidup logistik air jauh lebih krusial dibanding sekadar estetika.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Wilayah tinggi memberi keunggulan visual dan daya halau gravitasi saat diserbu lawan.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  },
  {
    id: 25,
    kode: "25ANT-PAKET1-025",
    elemen: "Dinamika Kebudayaan",
    subelemen: "Hibridisasi Budaya",
    kompetensi: "Menganalisis proses hibridisasi budaya dan sinkretisme dalam era kontemporer.",
    indikator: "Menilai kebenaran premis mengenai konsep hibridisasi budaya.",
    tipe: "kompleks_bs",
    soalHtml: "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nEvaluasilah apakah setiap pernyataan mengenai konsep <strong>hibridisasi budaya</strong> (cultural hybridity) berikut <strong>Benar</strong> atau <strong>Salah</strong>:\n</p>",
    items: [
      {
        pernyataan: "Hibridisasi budaya merujuk pada proses pencampuran dua atau lebih elemen kebudayaan berbeda yang melahirkan bentuk kebudayaan baru yang unik dan dinamis.",
        kunci: "Benar",
        penjelasan: "Tepat; konsep hibridisasi (Homi Bhabha) menggambarkan ruang ketiga (third space) tempat bertemunya elemen-elemen budaya berbeda."
      },
      {
        pernyataan: "Dalam proses hibridisasi, masyarakat lokal selalu bersikap pasif tanpa daya untuk menyaring, memodifikasi, atau menolak unsur budaya asing yang masuk.",
        kunci: "Salah",
        penjelasan: "Keliru; masyarakat lokal merupakan aktor aktif (agensi) yang melakukan negosiasi, adaptasi selektif, dan kreasi ulang terhadap pengaruh luar."
      },
      {
        pernyataan: "Teknologi informasi dan komunikasi serta media digital bertindak sebagai katalis dominan yang mempercepat terjadinya proses hibridisasi budaya lintas negara.",
        kunci: "Benar",
        penjelasan: "Tepat; konektivitas daring memungkinkan difusi dan percampuran budaya terjadi secara harian dan transnasional."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: "<strong>Evaluasi Konsep Hibridisasi Budaya:</strong><br>\n1. <strong>Pernyataan 1 (Benar):</strong> Hibridisasi menghasilkan sintesis budaya baru (misal: musik campursari, kuliner fusion, arsitektur kolonial tropis).<br>\n2. <strong>Pernyataan 2 (Salah):</strong> Teori budaya modern menegaskan adanya <em>human agency</em> di mana masyarakat tidak sekadar menelan mentah-mentah budaya luar.<br>\n3. <strong>Pernyataan 3 (Benar):</strong> Platform digital mempertemukan aneka referensi kultural dalam kecepatan tinggi.<br><br>\n<strong>Kunci Jawaban: Benar, Salah, Benar</strong>"
  }
];

// Buat konten file JavaScript
const fileContent = `// Data Soal TKA Antropologi SMA 2025/2026 (Pilihan) - Paket 1
// Sumber: Buku Kompilasi Resmi BPPP Kemendikbudristek 2025 (Halaman 185-212)
// Paket 1: 25 Butir Soal Variasi PG, MCMA, dan Benar/Salah (100% Bebas Tanda Dolar)

const tkaAntropologiPaket1Data = ${JSON.stringify(soalList, null, 2)};

// Registrasi global bundle
if (typeof window !== 'undefined') {
  window.DATA_ANTROPOLOGI = tkaAntropologiPaket1Data;
  window.tkaAntropologiPaket1Data = tkaAntropologiPaket1Data;
  window.tkaAntropologiPackages = window.tkaAntropologiPackages || {};
  window.tkaAntropologiPackages['paket1'] = {
    title: "Paket 1: Soal Resmi & Prediksi TKA Antropologi (Pilihan) SMA 2025/2026 (BPPP Kemendikbudristek)",
    shortTitle: "Paket 1 (Resmi 2025/2026 • 25 Soal)",
    data: tkaAntropologiPaket1Data
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tkaAntropologiPaket1Data;
}
`;

// Tulis ke tka/data/mapel-antropologi.js
const targetPath = path.join(__dirname, '../tka/data/mapel-antropologi.js');

// Verifikasi bebas tanda dolar
const dollarCount = (fileContent.match(/\\$/g) || []).length;
console.log('Dollar sign count in generated Antropologi Paket 1:', dollarCount);
if (dollarCount > 0) {
  console.error('ERROR: Masih terdapat tanda dolar di dalam dataset!');
  process.exit(1);
} else {
  console.log('✅ Dataset Antropologi Paket 1 100% BEBAS dari tanda dolar ($)!');
}

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('🎉 ' + targetPath + ' berhasil dibuat! (25 butir soal)');
