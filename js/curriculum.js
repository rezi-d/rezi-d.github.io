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
        bab: []   // <- kosong dulu, isi nanti: { slug, title, subbab: [...] }
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
                subbab: []   // <- kosong dulu (placeholder), isi nanti begitu sub-babnya digarap.
                             //    Selama kosong, halaman hub otomatis menampilkannya sebagai
                             //    kartu "Segera Hadir" (lihat logic render di js/render-hub.js).
            }
        ]
    },
    "12": {
        label: "Kelas XII",
        bab: []   // <- kosong dulu
    }
};

// Modul di luar struktur Kelas/Bab (tampil sebagai menu terpisah di header)
const modulLain = [
    { slug: "tka",  title: "Simulasi TKA",    path: "/tka/index.html",  icon: "📝", status: "segera" },
    { slug: "anbk", title: "Persiapan ANBK",  path: "/anbk/index.html", icon: "🎯", status: "segera" }
];
