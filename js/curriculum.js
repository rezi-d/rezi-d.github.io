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
                deskripsi: "Sejarah perkembangan model atom dari Democritus & Aristoteles, bola pejal Dalton, tabung sinar katode Thomson, eksperimen Gold Foil Rutherford, tetes minyak Millikan, penemuan neutron Chadwick, perbedaan atom & molekul, konfigurasi elektron, nomor atom & massa, konsep isotop, hingga evaluasi pemecahan masalah Chang (atom, isotop, molekul & ion) dengan kanvas kerja iPad.",
                subbab: [
                    { file: "sejarah-perkembangan-model-atom.html", title: "Sejarah Perkembangan Model Atom" },
                    { file: "penemuan-elektron-dan-model-thomson.html", title: "Penemuan Elektron & Model Plum Pudding Thomson" },
                    { file: "eksperimen-gold-foil-rutherford.html", title: "Eksperimen Gold Foil Rutherford & Penemuan Inti Atom" },
                    { file: "percobaan-tetes-minyak-millikan.html", title: "Percobaan Tetes Minyak Millikan (Muatan Elektron)" },
                    { file: "penemuan-neutron-chadwick.html", title: "Penemuan Neutron (James Chadwick 1932)" },
                    { file: "perbedaan-atom-dan-molekul.html", title: "Perbedaan Atom dan Molekul (Panduan Kimia Dasar)" },
                    { file: "konfigurasi-elektron-dan-diagram-orbital.html", title: "Konfigurasi Elektron & Diagram Orbital (C, Si, Cl, Ca)" },
                    { file: "nomor-atom-nomor-massa-dan-muatan-netto.html", title: "Karakteristik Atom: Nomor Atom, Nomor Massa & Muatan Netto" },
                    { file: "isotop-versi-berbeda-suatu-unsur.html", title: "Isotop: Memahami Versi Berbeda dari Suatu Unsur" },
                    { file: "latihan-pemecahan-masalah-struktur-atom.html", title: "Latihan Pemecahan Masalah Struktur Atom & Molekul-Ion (Chang)" }
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
            },
            {
                slug: "tabel-periodik-unsur",
                title: "Perkembangan Tabel Periodik & Prediksi Mendeleev",
                deskripsi: "Kekacauan kimia pra-tabel periodik, Kongres Karlsruhe 1860, Triade Döbereiner, Oktaf Newlands, jalur penemuan Mendeleev vs Lothar Meyer, keberanian mengosongkan celah, serta konfirmasi brilian penemuan Gallium oleh Boisbaudran.",
                subbab: [
                    { file: "sejarah-dan-upaya-awal-tabel-periodik.html", title: "Sejarah & Upaya Awal Pengelompokan Unsur" },
                    { file: "mendeleev-meyer-dan-prediksi-gallium.html", title: "Mendeleev, Meyer, & Penemuan Gallium" },
                    { file: "struktur-tabel-periodik-modern-dan-latihan-chang.html", title: "Tabel Periodik Modern & Latihan Soal Chang" }
                ]
            },
            {
                slug: "hukum-dasar-kimia",
                title: "Hukum-Hukum Dasar Kimia",
                deskripsi: "Landasan memahami kimia pada tingkat atom dan molekul: Hukum Kekekalan Massa (Lavoisier), Hukum Perbandingan Tetap (Proust), serta Hukum Perbandingan Berganda (Dalton) dalam penentuan rumus kimia.",
                subbab: [
                    { file: "hukum-kekekalan-massa-lavoisier.html", title: "Hukum Kekekalan Massa (Lavoisier)" },
                    { file: "hukum-perbandingan-tetap-proust.html", title: "Hukum Perbandingan Tetap (Proust)" },
                    { file: "hukum-perbandingan-berganda-dalton.html", title: "Hukum Perbandingan Berganda (Dalton)" },
                    { file: "latihan-pemecahan-masalah-hukum-dasar-kimia.html", title: "Latihan Pemecahan Masalah Hukum Dasar Kimia (Chang)" }
                ]
            },
            {
                slug: "tata-nama-senyawa",
                title: "Rumus Kimia & Tata Nama Senyawa",
                deskripsi: "Aturan penulisan rumus molekul vs empiris, netralitas muatan kisi senyawa ionik, prediksi ikatan ionik vs kovalen, tata nama senyawa biner ionik (kation tetap & logam transisi Stock), kovalen biner awalan Yunani, asam okso, basa, serta latihan pemecahan masalah Chang 2.35 – 2.50.",
                subbab: [
                    { file: "rumus-molekul-dan-rumus-empiris.html", title: "Rumus Molekul vs Rumus Empiris & Prediksi Senyawa" },
                    { file: "aturan-tata-nama-senyawa-anorganik.html", title: "Aturan Tata Nama Senyawa Ionik, Kovalen, & Asam" },
                    { file: "latihan-pemecahan-masalah-tata-nama-chang.html", title: "Latihan Pemecahan Masalah Rumus & Tata Nama (Chang 2.35 - 2.50)" }
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
                deskripsi: "Pengantar konsep mol & Bilangan Avogadro, menghitung massa molar senyawa, konversi mol, volume gas & molaritas, rumus empiris, pereaksi pembatas, kadar kemurnian, serta latihan pemecahan masalah Chang (pereaksi pembatas, rendemen, analisis campuran & hidrat) dengan kanvas iPad.",
                subbab: [
                    { file: "pengantar-konsep-mol.html", title: "Pengantar Konsep Mol & Bilangan Avogadro" },
                    { file: "menghitung-massa-molar-senyawa.html", title: "Menghitung Massa Molar Senyawa Kimia" },
                    { file: "konsep-mol.html", title: "Konversi Mol, Massa & Jumlah Partikel" },
                    { file: "volume-gas-molaritas.html", title: "Volume Gas & Molaritas" },
                    { file: "rumus-empiris.html", title: "Rumus Empiris & Molekul" },
                    { file: "pereaksi-pembatas.html", title: "Pereaksi Pembatas (M-R-S)" },
                    { file: "kadar-kemurnian.html", title: "Kadar Kemurnian & Air Kristal" },
                    { file: "latihan-pemecahan-masalah-stoikiometri-chang.html", title: "Latihan Pemecahan Masalah Stoikiometri (Chang Problems)" }
                ]
            },
            {
                slug: "termokimia",
                title: "Termokimia",
                deskripsi: "Sistem & lingkungan, reaksi eksoterm & endoterm, perubahan entalpi standar, simulasi kalorimeter virtual, simulator Hukum Hess, serta latihan pemecahan masalah Chang (kalibrasi bom kalorimeter asam benzoat, termodinamika ΔE vs ΔH naftalena, kerja ekspansi gas Sn/Na, siklus Hess bertingkat & kemurnian glukosa) dengan kanvas iPad.",
                subbab: [
                    { file: "konsep-dasar-termokimia.html", title: "Konsep Dasar & Reaksi Eksoterm/Endoterm" },
                    { file: "perubahan-entalpi-standar.html", title: "Kondisi Standar & Persamaan Termokimia" },
                    { file: "kalorimetri-dan-proyek.html", title: "Kalorimeter Virtual & Proyek (Numbers)" },
                    { file: "hukum-hess.html", title: "Hukum Hess & Simulator Model Tabel" },
                    { file: "latihan-pemecahan-masalah-termokimia-chang.html", title: "Latihan Pemecahan Masalah Termokimia (Chang Problems)" }
                ]
            },
            {
                slug: "laju-reaksi",
                title: "Laju Reaksi",
                deskripsi: "Konsep & ungkapan laju reaksi, teori tumbukan & faktor-faktor penentu laju, hukum laju & penentuan orde reaksi, serta mekanisme reaksi & katalis.",
                subbab: [
                    { file: "konsep-laju-reaksi.html", title: "Konsep & Ungkapan Laju Reaksi" },
                    { file: "teori-tumbukan-faktor.html", title: "Teori Tumbukan & Faktor Laju Reaksi" },
                    { file: "hukum-laju-dan-orde.html", title: "Hukum Laju & Penentuan Orde Reaksi" },
                    { file: "mekanisme-reaksi-katalis.html", title: "Mekanisme Reaksi & Katalis" }
                ]
            },
            {
                slug: "kesetimbangan-kimia",
                title: "Kesetimbangan Kimia",
                deskripsi: "Konsep kesetimbangan dinamis, tetapan kesetimbangan Kc & Kp, faktor pergeseran asas Le Châtelier, perhitungan kuosien reaksi Q, tabel M-R-S (ICE), serta latihan pemecahan masalah Chang (disosiasi gas, penurunan alfa-Kp, efek gas inert & massa molar rata-rata) dengan kanvas iPad.",
                subbab: [
                    { file: "konsep-kesetimbangan-dinamis.html", title: "Konsep Kesetimbangan Dinamis & Reversibilitas" },
                    { file: "tetapan-kesetimbangan-kc-kp.html", title: "Tetapan Kesetimbangan (Kc & Kp)" },
                    { file: "pergeseran-kesetimbangan-le-chatelier.html", title: "Pergeseran Kesetimbangan (Asas Le Châtelier)" },
                    { file: "perhitungan-kesetimbangan-kimia.html", title: "Kuosien Reaksi (Q) & Perhitungan M-R-S" },
                    { file: "latihan-pemecahan-masalah-kesetimbangan-chang.html", title: "Latihan Pemecahan Masalah Kesetimbangan Kimia (Chang Problems)" }
                ]
            },
            {
                slug: "asam-basa",
                title: "Asam dan Basa",
                deskripsi: "Teori asam-basa Arrhenius, Brønsted-Lowry & Lewis, autoionisasi air Kw, skala pH & pOH, tetapan Ka & Kb asam-basa lemah, analisis titrasi asam-basa, serta latihan pemecahan masalah Chang (aspirin lambung, hukum Ostwald, campuran pH, novokain & leveling effect) dengan kanvas iPad.",
                subbab: [
                    { file: "teori-asam-basa-indikator.html", title: "Teori Asam Basa & Indikator Larutan" },
                    { file: "derajat-keasaman-ph-poh.html", title: "Autoionisasi Air & Derajat Keasaman (pH & pOH)" },
                    { file: "kekuatan-asam-basa-ka-kb.html", title: "Kekuatan Asam-Basa Lemah (Ka, Kb & α)" },
                    { file: "titrasi-asam-basa.html", title: "Titrasi Asam-Basa & Analisis Volumetri" },
                    { file: "latihan-pemecahan-masalah-asam-basa-chang.html", title: "Latihan Pemecahan Masalah Asam-Basa (Chang Problems)" }
                ]
            },
            {
                slug: "larutan-penyangga",
                title: "Larutan Penyangga (Buffer)",
                deskripsi: "Efek ion sejenis, komponen & mekanisme kerja penyangga asam-basa, persamaan Henderson-Hasselbalch, kapasitas buffer, serta sistem penyangga dalam cairan tubuh.",
                subbab: [
                    { file: "efek-ion-sejenis.html", title: "Pengaruh Ion Sejenis (The Common Ion Effect)" },
                    { file: "prinsip-kerja-larutan-penyangga.html", title: "Komponen & Prinsip Kerja Larutan Penyangga" },
                    { file: "perhitungan-ph-penyangga.html", title: "Perhitungan pH Penyangga (Henderson-Hasselbalch)" },
                    { file: "kapasitas-dan-fungsi-penyangga.html", title: "Kapasitas Penyangga & Sistem Buffer Tubuh" },
                    { file: "latihan-pemecahan-masalah-penyangga-chang.html", title: "Latihan Pemecahan Masalah Penyangga (Chang Problems)" }
                ]
            },
            {
                slug: "hidrolisis-garam",
                title: "Hidrolisis Garam",
                deskripsi: "Konsep reaksi hidrolisis kation & anion dalam air, 4 kategori sifat asam-basa garam, hidrolisis ion logam terhidrasi, serta perhitungan tetapan Kh dan pH larutan garam.",
                subbab: [
                    { file: "konsep-dan-klasifikasi-hidrolisis.html", title: "Konsep Dasar & 4 Kategori Hidrolisis Garam" },
                    { file: "reaksi-hidrolisis-dan-kation-logam.html", title: "Reaksi Hidrolisis Kation, Anion & Logam Terhidrasi" },
                    { file: "perhitungan-ph-hidrolisis-garam.html", title: "Perhitungan Tetapan Kh & pH Larutan Garam" },
                    { file: "latihan-pemecahan-masalah-hidrolisis-chang.html", title: "Latihan Pemecahan Masalah Hidrolisis (Chang Problems)" }
                ]
            },
            {
                slug: "kelarutan-dan-ksp",
                title: "Kelarutan & Hasil Kali Kelarutan (Ksp)",
                deskripsi: "Konsep kelarutan (s), tetapan hasil kali kelarutan (Ksp), prediksi pengendapan (Qsp vs Ksp), serta pengaruh ion sejenis dan pengaruh pH terhadap kelarutan.",
                subbab: [
                    { file: "konsep-kelarutan-dan-ksp.html", title: "Konsep Kelarutan (s) & Tetapan Ksp" },
                    { file: "prediksi-pengendapan-qsp.html", title: "Prediksi Pengendapan (Qsp vs Ksp)" },
                    { file: "faktor-ion-sejenis-dan-ph.html", title: "Pengaruh Ion Sejenis & Pengaruh pH" },
                    { file: "latihan-pemecahan-masalah-ksp-chang.html", title: "Latihan Pemecahan Masalah Kelarutan & Ksp (Chang Problems)" }
                ]
            },
            {
                slug: "sistem-koloid",
                title: "Sistem Koloid",
                deskripsi: "Perbedaan larutan, koloid, dan suspensi; pengelompokan 8 sistem koloid; sifat-sifat khas (Tyndall, Brown, adsorpsi, koagulasi, dialisis); metode pembuatan koloid (kondensasi dan dispersi), serta latihan pemecahan masalah Chang (aturan Hardy-Schulze, adsorpsi AgI, termodinamika misel sabun, dialisis ginjal & elektrostatik Cottrell).",
                subbab: [
                    { file: "konsep-dan-jenis-koloid.html", title: "Konsep Sistem Koloid & 8 Jenis Koloid" },
                    { file: "sifat-khas-koloid.html", title: "Sifat-Sifat Khas Koloid" },
                    { file: "pembuatan-dan-aplikasi-koloid.html", title: "Pembuatan & Penerapan Koloid" },
                    { file: "latihan-pemecahan-masalah-koloid-chang.html", title: "Latihan Pemecahan Masalah Koloid (Chang Problems)" }
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
    { slug: "tka",          title: "Simulasi TKA",    path: "/tka/index.html",         icon: "📝", status: "aktif" },
    { slug: "prediksi-ptn", title: "Prediksi PTN",    path: "/tka/prediksi-ptn.html",  icon: "🎯", status: "aktif" },
    { slug: "anbk", title: "Persiapan ANBK",  path: "/anbk/index.html", icon: "🎯", status: "segera" }
];


