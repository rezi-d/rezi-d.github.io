// =================================================================
// js/curriculum.js — Peta Seluruh Konten Web (Single Source of Truth)
//
// Semua sidebar, dropdown "Materi", dan halaman hub dirender OTOMATIS
// dari data di file ini. Untuk menambah materi baru:
//   1. Tambah entri di objek `kurikulum` (kelas > bab > subbab)
//   2. Buat file HTML-nya di folder yang sesuai
//   3. TIDAK PERLU edit partials/header.html atau logika sidebar
//
// Untuk menambah modul non-materi (seperti TKA/ANBK baru), tambah
// entri di array `modulLain`.
// =================================================================

const kurikulum = {
    "10": {
        label: "Kelas X",
        bab: [
            {
                slug: "kimia-disekitar-kita",
                title: "Kimia di Sekitar Kita",
                deskripsi: "Ruang lingkup kimia, metode ilmiah, 12 prinsip kimia hijau, refleksi pembelajaran, serta proyek PJJ infografis.",
                subbab: [
                    { file: "ruang-lingkup-kimia.html", title: "Ruang Lingkup Kimia & Metode Ilmiah" },
                    { file: "kimia-hijau.html", title: "Prinsip Kimia Hijau dalam Kehidupan" },
                    { file: "refleksi-dan-proyek.html", title: "Refleksi & Proyek PJJ (Freeform)" }
                ]
            }
        ]
    },
    "11": {
        label: "Kelas XI",
        bab: [
            {
                slug: "stoikiometri",
                title: "Stoikiometri",
                deskripsi: "Konsep mol & massa molar, volume gas & molaritas, rumus empiris, pereaksi pembatas, kadar kemurnian.",
                subbab: [
                    { file: "konsep-mol.html", title: "Konsep Mol & Massa Molar" },
                    { file: "volume-gas-molaritas.html", title: "Volume Gas & Molaritas" },
                    { file: "rumus-empiris.html", title: "Rumus Empiris & Molekul" },
                    { file: "pereaksi-pembatas.html", title: "Pereaksi Pembatas (M-R-S)" },
                    { file: "kadar-kemurnian.html", title: "Kadar Kemurnian & Air Kristal" }
                ]
            },
            {
                slug: "ikatan-kimia",
                title: "Ikatan Kimia",
                deskripsi: "Kestabilan atom & struktur Lewis, ikatan ion, ikatan kovalen, ikatan logam, bentuk molekul (VSEPR), kepolaran molekul, teori hibridisasi.",
                subbab: [
                    { file: "kestabilan-atom-struktur-lewis.html", title: "Kestabilan Atom & Struktur Lewis" },
                    { file: "ikatan-ion.html", title: "Ikatan Ion" },
                    { file: "ikatan-kovalen.html", title: "Ikatan Kovalen" },
                    { file: "ikatan-logam.html", title: "Ikatan Logam" },
                    { file: "bentuk-molekul-vsepr.html", title: "Bentuk Molekul (VSEPR)" },
                    { file: "kepolaran-molekul.html", title: "Kepolaran Molekul & Momen Dipol" },
                    { file: "teori-hibridisasi.html", title: "Teori Hibridisasi" }
                ]
            },
            {
                slug: "termokimia",
                title: "Termokimia",
                deskripsi: "Sistem & lingkungan, reaksi eksoterm & endoterm, perubahan entalpi standar, simulasi kalorimeter virtual, dan proyek spreadsheet Numbers.",
                subbab: [
                    { file: "konsep-dasar-termokimia.html", title: "Konsep Dasar & Reaksi Eksoterm/Endoterm" },
                    { file: "perubahan-entalpi-standar.html", title: "Kondisi Standar & Persamaan Termokimia" },
                    { file: "kalorimetri-dan-proyek.html", title: "Kalorimeter Virtual & Proyek (Numbers)" }
                ]
            }
        ]
    },
    "12": {
        label: "Kelas XII",
        bab: [
            {
                slug: "sel-volta",
                title: "Sel Volta & Elektrokimia",
                deskripsi: "Reaksi redoks, penentuan anode-katode, deret Volta, potensial sel standar, notasi sel Galvani, dan proyek animasi Keynote.",
                subbab: [
                    { file: "dasar-redoks-elektrokimia.html", title: "Dasar Redoks & Sel Elektrokimia" },
                    { file: "anode-katode-potensial-sel.html", title: "Anode, Katode, & Potensial Sel" },
                    { file: "notasi-sel-dan-proyek.html", title: "Notasi Sel & Proyek Keynote" }
                ]
            }
        ]
    }
};

// Modul di luar struktur Kelas/Bab (tampil sebagai menu terpisah di header)
const modulLain = [
    { slug: "tka",  title: "Simulasi TKA",    path: "/tka/index.html",  icon: "📝", status: "segera" },
    { slug: "anbk", title: "Persiapan ANBK",  path: "/anbk/index.html", icon: "🎯", status: "segera" }
];
