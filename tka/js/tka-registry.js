// tka/js/tka-registry.js
// Registri Sentral Katalog Mata Pelajaran TKA (Tes Kemampuan Akademik) SMA 2025/2026
// Berdasarkan arsip resmi BPPP / Kemendikbudristek

const tkaRegistry = {
  rumpunList: [
    { id: "all", label: "Semua Mata Pelajaran", icon: "🌐" },
    { id: "saintek", label: "Rumpun Saintek (MIPA)", icon: "🔬" },
    { id: "soshum", label: "Rumpun Soshum (IPS)", icon: "🌍" },
    { id: "umum", label: "Literasi & Kemampuan Umum", icon: "📚" }
  ],

  mapelList: [
    // ----------------------------------------------------
    // 1. RUMPUN SAINTEK (MIPA)
    // ----------------------------------------------------
    {
      id: "kimia",
      rumpun: "saintek",
      kategori: "Pilihan",
      nama: "Kimia",
      subjudul: "Kimia SMA / MA / SMK",
      icon: "⚗️",
      color: "emerald",
      bgGradient: "from-emerald-500 to-teal-700",
      totalSoal: 73,
      paketTersedia: 3,
      durasiMenit: 50,
      status: "tersedia", // "tersedia" | "proses"
      deskripsi: "Stoikiometri, struktur atom, termokimia, laju reaksi, kesetimbangan, asam-basa, elektrokimia, dan hidrokarbon.",
      pdfSource: "SOAL TKA Kimia SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=kimia",
      urlPembahasan: "/tka/pembahasan.html?mapel=kimia"
    },
    {
      id: "fisika",
      rumpun: "saintek",
      kategori: "Pilihan",
      nama: "Fisika",
      subjudul: "Fisika SMA / MA / SMK",
      icon: "⚡",
      color: "sky",
      bgGradient: "from-sky-500 to-blue-700",
      totalSoal: 72,
      paketTersedia: 3,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Kinematika & dinamika gerak, usaha & energi, fluida, termodinamika, gelombang & optik, serta fisika modern.",
      pdfSource: "SOAL TKA Fisika SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=fisika",
      urlPembahasan: "/tka/pembahasan.html?mapel=fisika"
    },
    {
      id: "biologi",
      rumpun: "saintek",
      kategori: "Pilihan",
      nama: "Biologi",
      subjudul: "Biologi SMA / MA / SMK",
      icon: "🧬",
      color: "lime",
      bgGradient: "from-lime-500 to-emerald-700",
      totalSoal: 77,
      paketTersedia: 3,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Biologi sel & membran, metabolisme enzimatis, genetika & sintesis protein, bioteknologi, ekologi, dan evolusi.",
      pdfSource: "SOAL TKA Biologi SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=biologi",
      urlPembahasan: "/tka/pembahasan.html?mapel=biologi"
    },
    {
      id: "matematika-lanjut",
      rumpun: "saintek",
      kategori: "Pilihan",
      nama: "Matematika Tingkat Lanjut",
      subjudul: "Matematika Peminatan MIPA",
      icon: "📐",
      color: "indigo",
      bgGradient: "from-indigo-500 to-violet-800",
      totalSoal: 75,
      paketTersedia: 3,
      durasiMenit: 60,
      status: "tersedia",
      deskripsi: "Polinomial, trigonometri analitik, matriks & transformasi geometri, vektor, kalkulus diferensial dan integral.",
      pdfSource: "SOAL TKA Matematika SMA 2025 Tingkat Lanjut.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=matematika-lanjut",
      urlPembahasan: "/tka/pembahasan.html?mapel=matematika-lanjut"
    },

    // ----------------------------------------------------
    // 2. RUMPUN SOSHUM (IPS)
    // ----------------------------------------------------
    {
      id: "ekonomi",
      rumpun: "soshum",
      kategori: "Pilihan",
      nama: "Ekonomi",
      subjudul: "Ekonomi SMA / MA / SMK",
      icon: "📊",
      color: "amber",
      bgGradient: "from-amber-500 to-orange-600",
      totalSoal: 50,
      paketTersedia: 2,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Konsep kelangkaan, biaya peluang, mekanisme pasar, pendapatan nasional, kebijakan moneter & fiskal, serta akuntansi dasar.",
      pdfSource: "SOAL TKA Ekonomi SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=ekonomi",
      urlPembahasan: "/tka/pembahasan.html?mapel=ekonomi"
    },
    {
      id: "sosiologi",
      rumpun: "soshum",
      kategori: "Pilihan",
      nama: "Sosiologi",
      subjudul: "Sosiologi SMA / MA",
      icon: "👥",
      color: "amber",
      bgGradient: "from-amber-500 to-orange-700",
      totalSoal: 115,
      paketTersedia: 4,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Kelompok sosial, diferensiasi & stratifikasi, integrasi sosial, perubahan sosial era digital, dan penelitian sosial.",
      pdfSource: "SOAL TKA Sosiologi SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=sosiologi",
      urlPembahasan: "/tka/pembahasan.html?mapel=sosiologi"
    },
    {
      id: "geografi",
      rumpun: "soshum",
      kategori: "Pilihan",
      nama: "Geografi",
      subjudul: "Geografi SMA / MA",
      icon: "🗺️",
      color: "teal",
      bgGradient: "from-teal-500 to-cyan-700",
      totalSoal: 55,
      paketTersedia: 2,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Litosfer, pedosfer, hidrosfer, dinamika kependudukan, penginderaan jauh, SIG, dan tata ruang kewilayahan.",
      pdfSource: "SOAL TKA Geografi SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=geografi",
      urlPembahasan: "/tka/pembahasan.html?mapel=geografi"
    },
    {
      id: "sejarah",
      rumpun: "soshum",
      kategori: "Pilihan",
      nama: "Sejarah",
      subjudul: "Sejarah Tingkat Lanjut",
      icon: "🏛️",
      color: "stone",
      bgGradient: "from-stone-500 to-stone-800",
      totalSoal: 55,
      paketTersedia: 2,
      durasiMenit: 45,
      status: "tersedia",
      deskripsi: "Konsep berpikir diakronik-sinkronik, kerajaan nusantara, pergerakan nasional, kemerdekaan, dan sejarah global.",
      pdfSource: "SOAL TKA Sejarah SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=sejarah",
      urlPembahasan: "/tka/pembahasan.html?mapel=sejarah"
    },
    {
      id: "ppkn",
      rumpun: "soshum",
      kategori: "Pilihan",
      nama: "Pendidikan Pancasila & Kewarganegaraan",
      subjudul: "PPKn SMA / MA / SMK",
      icon: "⚖️",
      color: "rose",
      bgGradient: "from-red-500 to-rose-700",
      totalSoal: 28,
      paketTersedia: 1,
      durasiMenit: 45,
      status: "tersedia",
      deskripsi: "Pancasila dalam praksis kehidupan, hukum tata negara UUD 1945, perlindungan HAM, dan wawasan kebangsaan.",
      pdfSource: "SOAL TKA PPKn SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=ppkn",
      urlPembahasan: "/tka/pembahasan.html?mapel=ppkn"
    },

    // ----------------------------------------------------
    // 3. RUMPUN LITERASI & UMUM (WAJIB)
    // ----------------------------------------------------
    {
      id: "matematika-umum",
      rumpun: "umum",
      kategori: "Wajib",
      nama: "Matematika Umum",
      subjudul: "Penalaran Matematis",
      icon: "🔢",
      color: "violet",
      bgGradient: "from-violet-500 to-purple-800",
      totalSoal: 50,
      paketTersedia: 2,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Aritmatika, logika aljabar, persamaan fungsi kuadrat, geometri dimensi tiga, statistika dan peluang.",
      pdfSource: "SOAL TKA Matematika SMA 2025 Umum.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=matematika-umum",
      urlPembahasan: "/tka/pembahasan.html?mapel=matematika-umum"
    },
    {
      id: "indonesia-wajib",
      rumpun: "umum",
      kategori: "Wajib",
      nama: "Bahasa Indonesia (Wajib)",
      subjudul: "Literasi Teks & Analisis",
      icon: "🇮🇩",
      color: "rose",
      bgGradient: "from-rose-500 to-red-700",
      totalSoal: 33,
      paketTersedia: 1,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Pemahaman bacaan saintifik dan populer, ide pokok paragraf, koherensi kalimat efektif, dan kaidah EYD.",
      pdfSource: "SOAL TKA Bahasa Indonesia SMA 2025 Wajib.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=indonesia-wajib",
      urlPembahasan: "/tka/pembahasan.html?mapel=indonesia-wajib"
    },
    {
      id: "indonesia-pilihan",
      rumpun: "umum",
      kategori: "Pilihan",
      nama: "Bahasa Indonesia (Pilihan)",
      subjudul: "Kajian Bahasa & Sastra",
      icon: "📝",
      color: "pink",
      bgGradient: "from-pink-500 to-rose-700",
      totalSoal: 29,
      paketTersedia: 1,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Apresiasi sastra, teks editorial opini, retorika kebahasaan, dan analisis sintaksis-semantis.",
      pdfSource: "SOAL TKA Bahasa Indonesia SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=indonesia-pilihan",
      urlPembahasan: "/tka/pembahasan.html?mapel=indonesia-pilihan"
    },
    {
      id: "inggris-wajib",
      rumpun: "umum",
      kategori: "Wajib",
      nama: "Bahasa Inggris (Wajib)",
      subjudul: "English Reading Literacy",
      icon: "🇬🇧",
      color: "blue",
      bgGradient: "from-blue-500 to-indigo-800",
      totalSoal: 25,
      paketTersedia: 1,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Reading comprehension, finding main ideas, contextual inference, vocabulary in context, and author's tone.",
      pdfSource: "SOAL TKA Bahasa Inggris SMA 2025 Wajib.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=inggris-wajib",
      urlPembahasan: "/tka/pembahasan.html?mapel=inggris-wajib"
    },
    {
      id: "inggris-pilihan",
      rumpun: "umum",
      kategori: "Pilihan",
      nama: "Bahasa Inggris (Pilihan)",
      subjudul: "Advanced English Literacy",
      icon: "🗣️",
      color: "blue",
      bgGradient: "from-cyan-500 to-blue-800",
      totalSoal: 30,
      paketTersedia: 1,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Discourse analysis, evaluative critique of academic texts, argumentative reasoning, and nuanced idioms.",
      pdfSource: "SOAL TKA Bahasa Inggris SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=inggris-pilihan",
      urlPembahasan: "/tka/pembahasan.html?mapel=inggris-pilihan"
    }
  ]
};

// Ekspor global untuk browser dan Node
if (typeof window !== 'undefined') {
  window.tkaRegistry = tkaRegistry;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tkaRegistry;
}
