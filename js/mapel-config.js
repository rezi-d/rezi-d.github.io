// =================================================================
// js/mapel-config.js — Konfigurasi Tunggal Mata Pelajaran (Single Source of Truth)
// Digunakan bersama oleh Navbar, halaman /materi/, dan halaman /osn/.
// =================================================================

const mapelConfig = [
    {
        nama: "Matematika",
        slug: "matematika",
        status: "tersedia",
        group: "Sains",
        materi: true,
        osn: true,
        aktif: true,
        icon: "📐",
        deskripsi: "Eksponen, Logaritma, Barisan-Deret, Vektor, Trigonometri, dan Analisis Matematis SMA/MA.",
        jenjang: [
            {
                kelas: "X",
                label: "Kelas X",
                sublabel: "Fase E — Eksponen, Deret, Trigonometri & Vektor",
                path: "/matematika/kelas-10/index.html"
            },
            {
                kelas: "XI",
                label: "Kelas XI",
                sublabel: "Fase F — Invers, Lingkaran, Bivariat, Polinomial, Matriks, Transformasi, Trigonometri Lanjutan & Pengayaan OSN",
                path: "/matematika/kelas-11/index.html"
            },
            {
                kelas: "XII",
                label: "Kelas XII",
                sublabel: "Fase F Lanjutan — Dimensi Tiga, Limit, Turunan, Integral, Irisan Kerucut, Kombinatorika-Peluang & Pengayaan OSN",
                path: "/matematika/kelas-12/index.html"
            }
        ]
    },
    {
        nama: "Fisika",
        slug: "fisika",
        status: "tersedia",
        group: "Sains",
        materi: true,
        osn: true,
        aktif: true,
        icon: "⚡",
        deskripsi: "Pengukuran Kerja Ilmiah, Energi Terbarukan, Vektor, Mekanika Klasik, Fluida, Termodinamika, Gelombang, Elektromagnetika & Fisika Modern SMA sesuai CP-ATP Kurikulum Merdeka.",
        jenjang: [
            {
                kelas: "X",
                label: "Kelas X",
                sublabel: "Fase E — Pengukuran Kerja Ilmiah, Energi Alternatif, Pemanasan Global, Vektor & Pengayaan OSN Fisika",
                path: "/fisika/kelas-10/index.html"
            },
            {
                kelas: "XI",
                label: "Kelas XI",
                sublabel: "Fase F — Kinematika 2D/3D, Dinamika Newton, Gravitasi, Usaha-Energi, Momentum, Rotasi, Fluida, Termo & Pengayaan OSN",
                path: "/fisika/kelas-11/index.html"
            },
            {
                kelas: "XII",
                label: "Kelas XII",
                sublabel: "Fase F Lanjutan — Gelombang Bunyi/Cahaya, Listrik Statis/DC, Kemagnetan, RLC AC, Relativitas, Fisika Kuantum & OSN",
                path: "/fisika/kelas-12/index.html"
            }
        ]
    },
    {
        nama: "Kimia",
        slug: "kimia",
        status: "tersedia",
        group: "Sains",
        materi: true,
        osn: true,
        aktif: true,
        icon: "🧪",
        deskripsi: "Struktur Atom, Ikatan Kimia, Stoikiometri, Termokimia, Kinetika, Kesetimbangan, dan Kimia Organik.",
        jenjang: [
            {
                kelas: "X",
                label: "Kelas X",
                sublabel: "Fase E — Kimia Hijau, Struktur Atom, Redoks, SPU & Pengayaan OSN Kimia",
                path: "/kelas-10/index.html"
            },
            {
                kelas: "XI",
                label: "Kelas XI",
                sublabel: "Fase F — Termokimia, Kinetika, Kesetimbangan, Asam Basa, Kelarutan & Pengayaan OSN Kimia",
                path: "/kelas-11/index.html"
            },
            {
                kelas: "XII",
                label: "Kelas XII",
                sublabel: "Fase F Lanjutan — Sifat Koligatif, Elektrokimia, Senyawa Karbon & Pengayaan OSN Kimia",
                path: "/kelas-12/index.html"
            }
        ]
    },
    {
        nama: "Biologi",
        slug: "biologi",
        status: "segera",
        group: "Sains",
        materi: true,
        osn: true,
        aktif: true,
        icon: "🧬",
        deskripsi: "Biologi Sel & Molekuler, Genetika & Pewarisan Sifat, Fisiologi Organisme, dan Ekologi SMA.",
        jenjang: []
    },
    {
        nama: "Ekonomi",
        slug: "ekonomi",
        status: "segera",
        group: "Sosial",
        materi: true,
        osn: true,
        aktif: true,
        icon: "📈",
        deskripsi: "Konsep Dasar Ekonomi, Mekanisme Pasar, Manajemen, Akuntansi, serta Kebijakan Fiskal & Moneter.",
        jenjang: []
    },
    {
        nama: "Geografi",
        slug: "geografi",
        status: "segera",
        group: "Sosial",
        materi: true,
        osn: true,
        aktif: true,
        icon: "🌍",
        deskripsi: "Litosfer, Atmosfer, Hidrosfer, Dinamika Kependudukan, Mitigasi Bencana & Sistem Informasi Geografis.",
        jenjang: []
    }
];

// Ekspos ke global window untuk browser
if (typeof window !== "undefined") {
    window.mapelConfig = mapelConfig;
}

// Kompatibilitas Node.js (untuk test runner)
if (typeof module !== "undefined" && module.exports) {
    module.exports = { mapelConfig };
}
