// =================================================================
// js/mapel-config.js — Konfigurasi Tunggal Mata Pelajaran (Single Source of Truth)
// Digunakan bersama oleh Navbar, halaman /materi/, dan halaman /osn/.
// =================================================================

const mapelConfig = [
    {
        nama: "Matematika",
        slug: "matematika",
        status: "segera",
        group: "Sains",
        materi: true,
        osn: true,
        aktif: true,
        icon: "📐",
        deskripsi: "Aljabar, Geometri, Teori Bilangan, Trigonometri, dan Kombinatorika tingkat SMA/MA.",
        jenjang: []
    },
    {
        nama: "Fisika",
        slug: "fisika",
        status: "segera",
        group: "Sains",
        materi: true,
        osn: true,
        aktif: true,
        icon: "⚡",
        deskripsi: "Mekanika Klasik, Termodinamika, Gelombang, Optika, serta Kelistrikan & Kemagnetan SMA.",
        jenjang: []
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
                sublabel: "Fase E — Kimia Hijau, Struktur Atom, Redoks & SPU",
                path: "/kelas-10/index.html"
            },
            {
                kelas: "XI",
                label: "Kelas XI",
                sublabel: "Fase F — Ikatan Kimia, Termokimia, Laju Reaksi & Kesetimbangan",
                path: "/kelas-11/index.html"
            },
            {
                kelas: "XII",
                label: "Kelas XII",
                sublabel: "Fase F Lanjutan — Asam Basa, Elektrokimia & Senyawa Karbon",
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
