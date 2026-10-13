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
            },
            {
                slug: "struktur-atom",
                title: "Struktur Atom & Model Atom",
                deskripsi: "Sejarah perkembangan model atom dari Democritus & Aristoteles, bola pejal Dalton, tabung sinar katode Thomson, eksperimen Gold Foil Rutherford, tetes minyak Millikan, penemuan neutron Chadwick, perbedaan atom & molekul, konfigurasi elektron, nomor atom & massa, hingga konsep isotop.",
                subbab: [
                    { file: "sejarah-perkembangan-model-atom.html", title: "Sejarah Perkembangan Model Atom" },
                    { file: "penemuan-elektron-dan-model-thomson.html", title: "Penemuan Elektron & Model Plum Pudding Thomson" },
                    { file: "eksperimen-gold-foil-rutherford.html", title: "Eksperimen Gold Foil Rutherford & Penemuan Inti Atom" },
                    { file: "percobaan-tetes-minyak-millikan.html", title: "Percobaan Tetes Minyak Millikan (Muatan Elektron)" },
                    { file: "penemuan-neutron-chadwick.html", title: "Penemuan Neutron (James Chadwick 1932)" },
                    { file: "perbedaan-atom-dan-molekul.html", title: "Perbedaan Atom dan Molekul (Panduan Kimia Dasar)" },
                    { file: "konfigurasi-elektron-dan-diagram-orbital.html", title: "Konfigurasi Elektron & Diagram Orbital (C, Si, Cl, Ca)" },
                    { file: "nomor-atom-nomor-massa-dan-muatan-netto.html", title: "Karakteristik Atom: Nomor Atom, Nomor Massa & Muatan Netto" },
                    { file: "isotop-versi-berbeda-suatu-unsur.html", title: "Isotop: Memahami Versi Berbeda dari Suatu Unsur" }
                ]
            },
            {
                slug: "reaksi-redoks",
                title: "Reaksi Reduksi-Oksidasi (Redoks)",
                deskripsi: "Konsep dasar redoks, transfer elektron, kriteria reaksi redoks vs non-redoks, aturan lengkap bilangan oksidasi, oksidator & reduktor, serta metode penyetaraan setengah reaksi larutan asam.",
                subbab: [
                    { file: "pengantar-reaksi-redoks-dan-transfer-elektron.html", title: "Pengantar Reaksi Redoks & Transfer Elektron" },
                    { file: "kriteria-redoks-dan-analisis-reaksi.html", title: "Kriteria Redoks: Membedakan Redoks vs Non-Redoks" },
                    { file: "aturan-dan-penentuan-bilangan-oksidasi.html", title: "Aturan & Penentuan Bilangan Oksidasi" },
                    { file: "oksidator-dan-reduktor.html", title: "Oksidator (Agen Pengoksidasi) & Reduktor (Agen Pereduksi)" },
                    { file: "penyetaraan-redoks-metode-setengah-reaksi.html", title: "Penyetaraan Redoks Metode Setengah Reaksi (Asam)" }
                ]
            }
        ]
    },
    "11": {
        label: "Kelas XI",
        bab: [
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
                slug: "stoikiometri",
                title: "Stoikiometri",
                deskripsi: "Pengantar konsep mol & Bilangan Avogadro, menghitung massa molar senyawa (sederhana, tanda kurung & hidrat), konversi mol, volume gas & molaritas, rumus empiris, pereaksi pembatas, kadar kemurnian.",
                subbab: [
                    { file: "pengantar-konsep-mol.html", title: "Pengantar Konsep Mol & Bilangan Avogadro" },
                    { file: "menghitung-massa-molar-senyawa.html", title: "Menghitung Massa Molar Senyawa Kimia" },
                    { file: "konsep-mol.html", title: "Konversi Mol, Massa & Jumlah Partikel" },
                    { file: "volume-gas-molaritas.html", title: "Volume Gas & Molaritas" },
                    { file: "rumus-empiris.html", title: "Rumus Empiris & Molekul" },
                    { file: "pereaksi-pembatas.html", title: "Pereaksi Pembatas (M-R-S)" },
                    { file: "kadar-kemurnian.html", title: "Kadar Kemurnian & Air Kristal" }
                ]
            },
            {
                slug: "termokimia",
                title: "Termokimia",
                deskripsi: "Sistem & lingkungan, reaksi eksoterm & endoterm, perubahan entalpi standar, simulasi kalorimeter virtual, dan simulator Hukum Hess.",
                subbab: [
                    { file: "konsep-dasar-termokimia.html", title: "Konsep Dasar & Reaksi Eksoterm/Endoterm" },
                    { file: "perubahan-entalpi-standar.html", title: "Kondisi Standar & Persamaan Termokimia" },
                    { file: "kalorimetri-dan-proyek.html", title: "Kalorimeter Virtual & Proyek (Numbers)" },
                    { file: "hukum-hess.html", title: "Hukum Hess & Simulator Model Tabel" }
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
            },
            {
                slug: "elektrolisis",
                title: "Sel Elektrolisis & Hukum Faraday",
                deskripsi: "Konsep sel elektrolisis (KNAP), aturan reaksi katode-anode, simulator Hukum Faraday I & II, serta aplikasi penyepuhan logam (electroplating).",
                subbab: [
                    { file: "konsep-dan-aturan-elektrolisis.html", title: "Konsep Dasar & Aturan Reaksi Elektrolisis" },
                    { file: "hukum-faraday.html", title: "Hukum Faraday I & II (Lab Virtual)" },
                    { file: "aplikasi-dan-proyek-penyepuhan.html", title: "Aplikasi Industri & Proyek Penyepuhan" }
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
