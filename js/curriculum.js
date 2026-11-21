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
        mapelNama: "Kimia",
        icon: "🧪",
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
                title: "Perkembangan Tabel Periodik & Sifat Keperiodikan Unsur",
                deskripsi: "Kekacauan kimia pra-tabel periodik, Kongres Karlsruhe 1860, Triade Döbereiner, Oktaf Newlands, jalur penemuan Mendeleev vs Lothar Meyer, struktur tabel periodik modern, muatan inti efektif (Zeff), tren jari-jari atom & ion, energi ionisasi (anomali Be-B dan N-O), afinitas elektron, keelektronegatifan, serta problem solving Chang 8.37 - 8.64.",
                subbab: [
                    { file: "sejarah-dan-upaya-awal-tabel-periodik.html", title: "Sejarah & Upaya Awal Pengelompokan Unsur" },
                    { file: "mendeleev-meyer-dan-prediksi-gallium.html", title: "Mendeleev, Meyer, & Penemuan Gallium" },
                    { file: "struktur-tabel-periodik-modern-dan-latihan-chang.html", title: "Tabel Periodik Modern & Latihan Soal Chang (8.1 - 8.2)" },
                    { file: "sifat-keperiodikan-unsur-dan-latihan-chang.html", title: "Sifat Keperiodikan Unsur & Latihan Soal Chang (8.3 - 8.5)" }
                ]
            },
            {
                slug: "hukum-dasar-kimia",
                title: "Hukum-Hukum Dasar Kimia",
                deskripsi: "Landasan memahami kimia pada tingkat atom dan molekul: Hukum Kekekalan Massa (Lavoisier), Hukum Perbandingan Tetap (Proust), Hukum Perbandingan Berganda (Dalton), Hukum Perbandingan Volume (Gay-Lussac), serta Hipotesis Avogadro dalam penentuan rumus kimia dan stoikiometri gas.",
                subbab: [
                    { file: "hukum-kekekalan-massa-lavoisier.html", title: "Hukum Kekekalan Massa (Lavoisier)" },
                    { file: "hukum-perbandingan-tetap-proust.html", title: "Hukum Perbandingan Tetap (Proust)" },
                    { file: "hukum-perbandingan-berganda-dalton.html", title: "Hukum Perbandingan Berganda (Dalton)" },
                    { file: "hukum-gay-lussac-dan-hipotesis-avogadro.html", title: "Hukum Perbandingan Volume (Gay-Lussac) & Hipotesis Avogadro" },
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
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN Kimia)",
                deskripsi: "Modul pengayaan tingkat tinggi persiapan Olimpiade Sains Nasional Tingkat Kabupaten/Kota (OSN-K Kimia) jenjang SMA: Mekanika Kuantum & Spektroskopi Fotoelektron (PES), Muatan Inti Efektif (Aturan Slater) & Tren Periodik Non-Ideal, Geometri Molekul Lanjutan VSEPR & Muatan Formal, Gas Nyata Van der Waals & Stoikiometri Campuran, Reaksi Redoks Kompleks & Titrasi Analitis (Permanganometri-Iodometri), serta Bedah Soal Asli & Trik Cepat OSN-K.",
                subbab: [
                    { file: "mekanika-kuantum-konfigurasi-elektron-dan-pes.html", title: "Mekanika Kuantum, Bilangan Kuantum & Spektroskopi PES" },
                    { file: "muatan-inti-efektif-aturan-slater-dan-sifat-periodik.html", title: "Muatan Inti Efektif (Aturan Slater) & Sifat Periodik Non-Ideal" },
                    { file: "geometri-molekul-vsepr-lanjut-dan-muatan-formal.html", title: "Geometri Molekul Lanjutan VSEPR (SN 5 & 6) & Muatan Formal" },
                    { file: "stoikiometri-gas-nyata-dan-analisis-campuran.html", title: "Gas Nyata Van der Waals & Analisis Campuran Multi-Komponen" },
                    { file: "reaksi-redoks-kompleks-dan-titrasi-analitis.html", title: "Penyetaraan Redoks Kompleks & Titrasi Analitis (Permanganometri & Iodometri)" },
                    { file: "bedah-soal-asli-dan-strategi-osnk-kimia.html", title: "Bedah Soal Asli OSN-K Kimia & Strategi Penalaran Cepat" }
                ]
            }
        ]
    },
    "11": {
        label: "Kelas XI",
        mapelNama: "Kimia",
        icon: "🧪",
        bab: [
            {
                slug: "ikatan-kimia",
                title: "Ikatan Kimia",
                deskripsi: "Kestabilan atom & struktur Lewis, ikatan ion, ikatan kovalen, ikatan logam, bentuk molekul (VSEPR), kepolaran molekul, teori hibridisasi, muatan formal, resonansi, pengecualian oktet, serta latihan pemecahan masalah Chang (Bab 9-10) dengan kanvas iPad.",
                subbab: [
                    { file: "kestabilan-atom-struktur-lewis.html", title: "Kestabilan Atom & Struktur Lewis" },
                    { file: "ikatan-ion.html", title: "Ikatan Ion" },
                    { file: "ikatan-kovalen.html", title: "Ikatan Kovalen" },
                    { file: "ikatan-logam.html", title: "Ikatan Logam" },
                    { file: "bentuk-molekul-vsepr.html", title: "Bentuk Molekul (VSEPR)" },
                    { file: "kepolaran-molekul.html", title: "Kepolaran Molekul & Momen Dipol" },
                    { file: "teori-hibridisasi.html", title: "Teori Hibridisasi" },
                    { file: "latihan-pemecahan-masalah-ikatan-kimia-chang.html", title: "Latihan Pemecahan Masalah Ikatan Kimia (Chang Problems)" }
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
                deskripsi: "Sistem & lingkungan, reaksi eksoterm & endoterm, perubahan entalpi standar, simulasi kalorimeter virtual, simulator Hukum Hess, energi ikatan rata-rata (Chang 9.10), serta latihan pemecahan masalah Chang (kalibrasi bom kalorimeter asam benzoat, termodinamika ΔE vs ΔH naftalena, kerja ekspansi gas Sn/Na, siklus Hess bertingkat & kemurnian glukosa) dengan kanvas iPad.",
                subbab: [
                    { file: "konsep-dasar-termokimia.html", title: "Konsep Dasar & Reaksi Eksoterm/Endoterm" },
                    { file: "perubahan-entalpi-standar.html", title: "Kondisi Standar & Persamaan Termokimia" },
                    { file: "kalorimetri-dan-proyek.html", title: "Kalorimeter Virtual & Proyek (Numbers)" },
                    { file: "hukum-hess.html", title: "Hukum Hess & Simulator Model Tabel" },
                    { file: "energi-ikatan-dan-penentuan-entalpi.html", title: "Energi Ikatan Rata-Rata & Penentuan Entalpi (Chang 9.10)" },
                    { file: "latihan-pemecahan-masalah-termokimia-chang.html", title: "Latihan Pemecahan Masalah Termokimia (Chang Problems)" }
                ]
            },
            {
                slug: "laju-reaksi",
                title: "Laju Reaksi",
                deskripsi: "Konsep & ungkapan laju reaksi, teori tumbukan & faktor-faktor penentu laju, hukum laju & penentuan orde reaksi, mekanisme reaksi & katalis, kinetika terintegrasi orde 1 & waktu paruh, persamaan Arrhenius energi aktivasi (Ea), serta pemecahan masalah Chang (Bab 14) dengan kanvas iPad.",
                subbab: [
                    { file: "konsep-laju-reaksi.html", title: "Konsep & Ungkapan Laju Reaksi" },
                    { file: "teori-tumbukan-faktor.html", title: "Teori Tumbukan & Faktor Laju Reaksi" },
                    { file: "hukum-laju-dan-orde.html", title: "Hukum Laju & Penentuan Orde Reaksi" },
                    { file: "mekanisme-reaksi-katalis.html", title: "Mekanisme Reaksi & Katalis" },
                    { file: "latihan-pemecahan-masalah-laju-reaksi-chang.html", title: "Latihan Pemecahan Masalah Laju Reaksi (Chang Problems)" }
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
            },
            {
                slug: "hidrokarbon",
                title: "Hidrokarbon & Minyak Bumi",
                deskripsi: "Kekhasan atom karbon (katenasi), deret homolog & tata nama resmi IUPAC alkana, alkena, alkuna; reaksi-reaksi fundamental (pembakaran, substitusi radikal bebas, adisi elektrofilik Markovnikov, eliminasi); keisomeran struktur dan stereoisomer geometri cis-trans beserta momen dipol; pembentukan, fraksinasi minyak bumi, mutu bensin, bilangan oktan isooktana vs n-heptana, dan evaluasi Raymond Chang.",
                subbab: [
                    { file: "kekhasan-atom-karbon-dan-alkana.html", title: "Kekhasan Atom Karbon & Struktur Alkana" },
                    { file: "alkena-alkuna-dan-reaksi-hidrokarbon.html", title: "Alkena, Alkuna & Reaksi Hidrokarbon" },
                    { file: "keisomeran-senyawa-hidrokarbon.html", title: "Keisomeran Senyawa Hidrokarbon" },
                    { file: "minyak-bumi-dan-mutu-bensin.html", title: "Minyak Bumi & Mutu Bensin" },
                    { file: "latihan-pemecahan-masalah-hidrokarbon-chang.html", title: "Latihan Pemecahan Masalah Hidrokarbon (Chang Problems)" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN Kimia)",
                deskripsi: "Modul pengayaan tingkat lanjut persiapan Olimpiade Sains Nasional (OSN-K & OSN-P Kimia) bidang Kimia Fisika dan Larutan Lanjut: Termodinamika Kimia (Hukum I, II, III, Entropi Semesta & Energi Bebas Gibbs), Kinetika Kimia Terintegrasi & Steady-State Approximation (SSA), Termodinamika Kesetimbangan & Persamaan van 't Hoff, Kesetimbangan Asam-Basa Poliprotik & Spesiasi Fraksional, Kelarutan Lanjut & Ion Kompleks (Kf vs Ksp), serta Bedah Soal Asli & Strategi Kuantitatif OSN-K Kimia Kelas XI.",
                subbab: [
                    { file: "termodinamika-kimia-lanjut-dan-energi-bebas-gibbs.html", title: "Termodinamika Kimia: Entropi, Energi Bebas Gibbs & Spontanitas" },
                    { file: "kinetika-kimia-terintegrasi-dan-mekanisme-reaksi.html", title: "Kinetika Terintegrasi, Waktu Paruh & Steady-State Approximation" },
                    { file: "kesetimbangan-termodinamika-dan-persamaan-van-t-hoff.html", title: "Termodinamika Kesetimbangan & Persamaan van 't Hoff" },
                    { file: "kesetimbangan-asam-basa-poliprotik-dan-spesiasi.html", title: "Asam Basa Poliprotik, Garam Amfiprotik & Spesiasi Fraksional" },
                    { file: "kelarutan-lanjut-dan-kesetimbangan-ion-kompleks.html", title: "Kelarutan Lanjut, Pengendapan Bertingkat & Ion Kompleks" },
                    { file: "bedah-soal-asli-dan-strategi-osnk-kimia-11.html", title: "Bedah Soal Asli OSN-K Kimia Kelas XI & Trik Hitung Cepat" }
                ]
            }
        ]
    },
    "12": {
        label: "Kelas XII",
        mapelNama: "Kimia",
        icon: "🧪",
        bab: [
            {
                slug: "sifat-koligatif-larutan",
                title: "Sifat Koligatif Larutan",
                deskripsi: "Satuan konsentrasi (molaritas, molalitas, fraksi mol, % massa), penurunan tekanan uap (Hukum Raoult), kenaikan titik didih, penurunan titik beku, tekanan osmotik (van 't Hoff), sifat koligatif larutan elektrolit, serta latihan pemecahan masalah Chang.",
                subbab: [
                    { file: "satuan-konsentrasi-larutan.html", title: "Satuan Konsentrasi: Molaritas, Molalitas & Fraksi Mol" },
                    { file: "penurunan-tekanan-uap-hukum-raoult.html", title: "Penurunan Tekanan Uap & Hukum Raoult" },
                    { file: "kenaikan-titik-didih-dan-penurunan-titik-beku.html", title: "Kenaikan Titik Didih & Penurunan Titik Beku" },
                    { file: "tekanan-osmotik-larutan.html", title: "Tekanan Osmotik & Fenomena Osmosis" },
                    { file: "sifat-koligatif-larutan-elektrolit.html", title: "Sifat Koligatif Larutan Elektrolit & Faktor van 't Hoff" },
                    { file: "latihan-pemecahan-masalah-koligatif-chang.html", title: "Latihan Pemecahan Masalah Sifat Koligatif (Chang Problems)" }
                ]
            },
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
            },
            {
                slug: "senyawa-turunan-alkana",
                title: "Senyawa Karbon Turunan Alkana",
                deskripsi: "Gugus fungsi senyawa organik (alkohol, eter, aldehid, keton, asam karboksilat, ester, haloalkana), isomer posisi dan fungsi, reaksi identifikasi pembeda laboratorium (Na, PCl5, Fehling, Tollens), mekanisme reaksi organik (SN1, SN2, Zaitsev, Markovnikov), serta latihan pemecahan masalah Chang.",
                subbab: [
                    { file: "alkohol-dan-eter.html", title: "Alkohol (Alkanol) & Eter (Alkoksi Alkana)" },
                    { file: "aldehid-dan-keton.html", title: "Aldehid (Alkanal) & Keton (Alkanon)" },
                    { file: "asam-karboksilat-dan-ester.html", title: "Asam Karboksilat (Alkanoat) & Ester (Alkil Alkanoat)" },
                    { file: "haloalkana-dan-reaksi-organik.html", title: "Haloalkana & Mekanisme Reaksi Organik (SN, Eliminasi, Adisi)" },
                    { file: "latihan-pemecahan-masalah-senyawa-karbon-chang.html", title: "Latihan Pemecahan Masalah Senyawa Karbon (Chang Problems)" }
                ]
            },
            {
                slug: "benzena-dan-turunannya",
                title: "Benzena & Senyawa Turunannya",
                deskripsi: "Struktur Kekulé, delokalisasi elektron pi, kestabilan aromatisitas (aturan Hückel), tata nama orto/meta/para, mekanisme reaksi substitusi elektrofilik aromatik (SEAr), sifat keasaman fenol, aplikasi farmasi (aspirin/parasetamol), bahan peledak TNT, serta latihan Chang.",
                subbab: [
                    { file: "struktur-dan-tata-nama-benzena.html", title: "Struktur & Tata Nama Benzena (Orto, Meta, Para)" },
                    { file: "reaksi-substitusi-elektrofilik-benzena.html", title: "Reaksi Substitusi Elektrofilik Aromatik (SEAr)" },
                    { file: "sifat-kegunaan-dan-dampak-turunan-benzena.html", title: "Sifat, Kegunaan & Dampak Turunan Benzena" },
                    { file: "latihan-pemecahan-masalah-benzena-chang.html", title: "Latihan Pemecahan Masalah Benzena (Chang Problems)" }
                ]
            },
            {
                slug: "makromolekul",
                title: "Makromolekul: Polimer & Biomolekul",
                deskripsi: "Polimerisasi adisi vs kondensasi (HDPE, PVC, Teflon, Nilon 6,6, Dakron/PET), vulkanisasi karet, struktur karbohidrat (Fischer & Haworth, mutarotasi, gula pereduksi, amilum vs selulosa), protein dan asam amino (ion zwitter, pI, elektroforesis, 4 tingkat struktur protein, denaturasi), lipid dan lemak (trigliserida, saponifikasi sabun, angka penyabunan & angka iodin), serta simulator uji laboratorium.",
                subbab: [
                    { file: "polimer-sintetis-dan-reaksi-polimerisasi.html", title: "Polimer Sintetis & Reaksi Polimerisasi (Adisi vs Kondensasi)" },
                    { file: "karbohidrat-dan-uji-laboratorium.html", title: "Karbohidrat: Struktur, Penggolongan & Uji Laboratorium" },
                    { file: "protein-asam-amino-dan-uji-identifikasi.html", title: "Protein & Asam Amino: Struktur, Titik Isoelektrik & Uji Identifikasi" },
                    { file: "lipid-lemak-minyak-dan-angka-analisis.html", title: "Lipid: Lemak, Minyak, Reaksi Saponifikasi & Angka Analisis" },
                    { file: "latihan-pemecahan-masalah-makromolekul-chang.html", title: "Latihan Pemecahan Masalah Makromolekul (Chang Problems)" }
                ]
            },
            {
                slug: "kimia-unsur",
                title: "Kimia Unsur & Senyawa Kompleks",
                deskripsi: "Gas Mulia (kestabilan oktet & senyawa Xenon), Halogen (daya desak & uji AgX), Logam Alkali & Alkali Tanah (reaksi air, tren kelarutan sulfat/hidroksida, kesadahan air & uji nyala api), Unsur Periode 3 (titik leleh Si vs S8, anomali energi ionisasi & amfoter Al(OH)3), Logam Transisi Periode 4 (anomali Cr/Cu, kemagnetan, warna d-d splitting & tata nama senyawa kompleks IUPAC), serta proses industri metalurgi terkenal (Hall-Héroult, Tanur Tiup, Proses Kontak, Haber-Bosch).",
                subbab: [
                    { file: "gas-mulia-dan-halogen.html", title: "Gas Mulia & Halogen: Sifat, Daya Desak & Senyawa" },
                    { file: "logam-alkali-dan-alkali-tanah.html", title: "Logam Alkali & Alkali Tanah: Sifat, Uji Nyala & Kesadahan Air" },
                    { file: "unsur-unsur-periode-ketiga.html", title: "Unsur-Unsur Periode 3: Tren Sifat, Ikatan & Karakteristik Amfoter" },
                    { file: "logam-transisi-periode-keempat-dan-senyawa-kompleks.html", title: "Logam Transisi Periode 4 & Senyawa Kompleks Koordinasi" },
                    { file: "proses-pengolahan-industri-dan-latihan-chang.html", title: "Proses Metalurgi Industri & Latihan Pemecahan Masalah Chang" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN Kimia)",
                deskripsi: "Modul pengayaan tingkat lanjut persiapan Olimpiade Sains Nasional (OSN-K & OSN-P Kimia) bidang Elektrokimia Lanjut, Stereokimia Organik & Mekanisme Reaksi: Persamaan Nernst & Diagram Latimer/Frost, Sel Konsentrasi & Potensiometri Analitis, Stereokimia Organik (Kiralitas, R/S Cahn-Ingold-Prelog & Enansiomer), Mekanisme Reaksi Substitusi & Eliminasi (SN1, SN2, E1, E2) serta Adisi Karbonil, Aromatisitas Hückel & SEAr Terarah, serta Bedah Soal Asli & Strategi Penalaran Cepat OSN-K Kimia Kelas XII.",
                subbab: [
                    { file: "elektrokimia-lanjut-nernst-dan-diagram-frost.html", title: "Elektrokimia Lanjut: Persamaan Nernst & Diagram Latimer-Frost" },
                    { file: "sel-konsentrasi-dan-potensiometri-analitis.html", title: "Sel Konsentrasi, Baterai Lanjut & Potensiometri Analitis" },
                    { file: "stereokimia-organik-kiralitas-dan-konfigurasi-rs.html", title: "Stereokimia Organik: Kiralitas, Konfigurasi R/S & Isomerisme Optik" },
                    { file: "mekanisme-reaksi-substitusi-dan-eliminasi.html", title: "Mekanisme Reaksi Organik: SN1, SN2, E1, E2 & Reaktivitas Karbonil" },
                    { file: "aromatisitas-lanjut-dan-substitusi-elektrofilik.html", title: "Aromatisitas Hückel, Delokalisasi Elektron & SEAr Terarah" },
                    { file: "bedah-soal-asli-dan-strategi-osnk-kimia-12.html", title: "Bedah Soal Asli OSN-K Kimia Kelas XII & Strategi Penalaran Cepat" }
                ]
            }
        ]
    },
    "mtk-10": {
        label: "Kelas X",
        mapelNama: "Matematika",
        mapel: "matematika",
        icon: "📐",
        pathPrefix: "/matematika/kelas-10",
        bab: [
            {
                slug: "eksponen-dan-logaritma",
                title: "Eksponen dan Logaritma",
                deskripsi: "Konsep bilangan berpangkat bulat dan rasional, sifat-sifat operasi aljabar eksponen, bentuk akar dan rasionalisasi penyebut, karakteristik grafik fungsi eksponensial, sifat-sifat fundamental logaritma, persamaan eksponen-logaritma, serta pemodelan matematika pertumbuhan dan peluruhan.",
                subbab: [
                    { file: "konsep-eksponen-dan-sifat-operasi.html", title: "Konsep Eksponen & Sifat-Sifat Operasi Aljabar" },
                    { file: "bentuk-akar-dan-pangkat-rasional.html", title: "Bentuk Akar & Merasionalkan Penyebut Pecahan" },
                    { file: "fungsi-eksponensial-dan-grafik.html", title: "Fungsi Eksponensial, Grafik & Model Pertumbuhan-Peluruhan" },
                    { file: "konsep-dasar-dan-sifat-logaritma.html", title: "Konsep Dasar Logaritma & 7 Sifat Esensial" },
                    { file: "persamaan-eksponen-dan-logaritma.html", title: "Persamaan & Pertidaksamaan Eksponen dan Logaritma" },
                    { file: "latihan-pemecahan-masalah-eksponen-logaritma.html", title: "Latihan Pemecahan Masalah Eksponen & Logaritma (HOTS & Olimpiade)" }
                ]
            },
            {
                slug: "barisan-dan-deret",
                title: "Barisan dan Deret",
                deskripsi: "Pola bilangan berulang, barisan dan deret aritmetika, barisan dan deret geometri hingga & tak hingga, sifat suku tengah dan sisipan, aplikasi finansial bunga tunggal-majemuk, serta analisis anuitas pinjaman.",
                subbab: [
                    { file: "pola-bilangan-dan-barisan-aritmetika.html", title: "Pola Bilangan & Barisan Aritmetika" },
                    { file: "deret-aritmetika-dan-notasi-sigma.html", title: "Deret Aritmetika & Notasi Sigma" },
                    { file: "barisan-geometri-dan-rasio.html", title: "Barisan Geometri & Rasio" },
                    { file: "deret-geometri-hingga-dan-tak-hingga.html", title: "Deret Geometri Hingga & Tak Hingga" },
                    { file: "aplikasi-finansial-bunga-dan-anuitas.html", title: "Aplikasi Finansial: Bunga & Anuitas" },
                    { file: "latihan-pemecahan-masalah-barisan-deret.html", title: "Problem Solving HOTS Barisan & Deret" }
                ]
            },
            {
                slug: "trigonometri",
                title: "Perbandingan Trigonometri",
                deskripsi: "Konsep dasar perbandingan trigonometri siku-siku (sin, cos, tan, csc, sec, cot), nilai sudut istimewa 0°-90°, sudut berelasi di 4 kuadran, identitas dasar Pythagoras, serta aplikasi nyata pemodelan tinggi objek dengan klinometer.",
                subbab: [
                    { file: "konsep-dasar-dan-perbandingan-trigonometri.html", title: "Konsep Dasar & 6 Rasio Trigonometri Siku-Siku" },
                    { file: "nilai-trigonometri-sudut-istimewa.html", title: "Nilai Perbandingan Sudut Istimewa" },
                    { file: "sudut-berelasi-dan-kuadran.html", title: "Sudut Berelasi di Berbagai Kuadran" },
                    { file: "identitas-dasar-trigonometri.html", title: "Identitas Dasar & Pembuktian Aljabar" },
                    { file: "aplikasi-pemodelan-klinometer.html", title: "Aplikasi Nyata: Pemodelan Klinometer" },
                    { file: "latihan-pemecahan-masalah-trigonometri.html", title: "Problem Solving HOTS Perbandingan Trigonometri" }
                ]
            },
            {
                slug: "vektor",
                title: "Vektor dan Operasinya",
                deskripsi: "Konsep dasar besaran vektor, notasi & vektor posisi di R², panjang (magnitudo) vektor, vektor satuan, operasi aljabar & geometris, perkalian skalar (dot product), sudut antara dua vektor, proyeksi ortogonal, serta aplikasi kontekstual resultan gaya dan navigasi.",
                subbab: [
                    { file: "konsep-dasar-vektor-dan-vektor-posisi.html", title: "Konsep Dasar Vektor & Vektor Posisi" },
                    { file: "panjang-vektor-dan-vektor-satuan.html", title: "Panjang Vektor & Vektor Satuan" },
                    { file: "operasi-aljabar-dan-geometris-vektor.html", title: "Operasi Aljabar & Geometris Vektor" },
                    { file: "perkalian-skalar-dot-product-dan-sudut.html", title: "Perkalian Skalar (Dot Product) & Sudut Vektor" },
                    { file: "proyeksi-vektor-ortogonal.html", title: "Proyeksi Vektor Ortogonal" },
                    { file: "latihan-pemecahan-masalah-vektor.html", title: "Problem Solving HOTS & Pemodelan Vektor" }
                ]
            },
            {
                slug: "sistem-persamaan-dan-pertidaksamaan-linear",
                title: "Sistem Persamaan dan Pertidaksamaan Linear",
                deskripsi: "Sistem Persamaan Linear Dua Variabel (SPLDV), Sistem Persamaan Linear Tiga Variabel (SPLTV), metode aljabar eliminasi-substitusi, aturan determinan matriks Cramer, sistem pertidaksamaan linear dua variabel (SPtLDV), penentuan Daerah Himpunan Penyelesaian (DHP), serta pemodelan matematika kontekstual.",
                subbab: [
                    { file: "sistem-persamaan-linear-dua-variabel-spldv.html", title: "Sistem Persamaan Linear Dua Variabel (SPLDV)" },
                    { file: "sistem-persamaan-linear-tiga-variabel-spltv.html", title: "Sistem Persamaan Linear Tiga Variabel (SPLTV)" },
                    { file: "metode-determinan-matriks-sistem-linear.html", title: "Metode Determinan Matriks & Aturan Cramer" },
                    { file: "sistem-pertidaksamaan-linear-dua-variabel-sptldv.html", title: "Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV)" },
                    { file: "pemodelan-matematika-dan-masalah-kontekstual.html", title: "Pemodelan Matematika & Aplikasi Kontekstual" },
                    { file: "latihan-pemecahan-masalah-sistem-linear.html", title: "Problem Solving HOTS Sistem Linear" }
                ]
            },
            {
                slug: "fungsi-kuadrat",
                title: "Fungsi Kuadrat",
                deskripsi: "Karakteristik grafik parabola f(x) = ax² + bx + c, pengaruh koefisien a, b, c, sumbu simetri & titik puncak (ekstrim), analisis diskriminan D terhadap perpotongan sumbu-X, sifat definit positif/negatif, teknik menyusun persamaan fungsi kuadrat, transformasi grafik, serta pemodelan nilai optimum.",
                subbab: [
                    { file: "konsep-dasar-dan-karakteristik-fungsi-kuadrat.html", title: "Konsep Dasar & Karakteristik Fungsi Kuadrat" },
                    { file: "diskriminan-dan-titik-potong-sumbu-x.html", title: "Diskriminan & Kedudukan Sumbu-X" },
                    { file: "menggambar-dan-mentransformasi-grafik-kuadrat.html", title: "Menggambar & Transformasi Grafik Parabola" },
                    { file: "menyusun-persamaan-fungsi-kuadrat.html", title: "Menyusun Persamaan Fungsi Kuadrat" },
                    { file: "pemodelan-matematika-dan-aplikasi-fungsi-kuadrat.html", title: "Pemodelan Matematika & Nilai Optimum" },
                    { file: "latihan-pemecahan-masalah-fungsi-kuadrat.html", title: "Problem Solving HOTS Fungsi Kuadrat" }
                ]
            },
            {
                slug: "statistika",
                title: "Statistika",
                deskripsi: "Representasi dan interpretasi data bivariat dengan diagram pencar (scatter plot), ukuran pemusatan (mean, median, modus), ukuran penempatan (kuartil & boxplot), ukuran penyebaran (jangkauan, IQR, varians, simpangan baku), deteksi pencilan (outlier), efek transformasi data aljabar, serta analisis bentuk distribusi kemencengan data.",
                subbab: [
                    { file: "diagram-pencar-dan-korelasi-data-bivariat.html", title: "Diagram Pencar & Korelasi Data Bivariat" },
                    { file: "ukuran-pemusatan-data-tunggal-dan-kelompok.html", title: "Ukuran Pemusatan: Mean, Median & Modus" },
                    { file: "ukuran-penempatan-kuartil-desil-persentil.html", title: "Ukuran Penempatan: Kuartil & Boxplot" },
                    { file: "ukuran-penyebaran-jangkauan-varians-simpangan-baku.html", title: "Ukuran Penyebaran: Jangkauan, Varians & Simpangan Baku" },
                    { file: "efek-transformasi-data-dan-distribusi-frekuensi.html", title: "Efek Transformasi Data & Distribusi Frekuensi" },
                    { file: "latihan-pemecahan-masalah-statistika.html", title: "Problem Solving HOTS Statistika" }
                ]
            },
            {
                slug: "peluang",
                title: "Peluang",
                deskripsi: "Konsep dasar ruang sampel dan titik sampel kejadian majemuk, aturan penjumlahan dan perkalian (kaidah pencacahan dasar), peluang teoretis klasik, frekuensi harapan, komplemen suatu kejadian, hukum penjumlahan peluang kejadian saling lepas dan tidak saling lepas, peluang kejadian saling bebas, peluang bersyarat, serta aplikasi problem solving HOTS.",
                subbab: [
                    { file: "ruang-sampel-titik-sampel-dan-kejadian.html", title: "Ruang Sampel & Peluang Teoretis" },
                    { file: "aturan-penjumlahan-dan-perkalian.html", title: "Aturan Penjumlahan & Perkalian" },
                    { file: "peluang-komplemen-dan-dua-kejadian-sembarang.html", title: "Peluang Komplemen & Dua Kejadian" },
                    { file: "peluang-kejadian-saling-lepas-dan-tidak-saling-lepas.html", title: "Kejadian Saling Lepas & Tidak Saling Lepas" },
                    { file: "peluang-kejadian-saling-bebas-dan-bersyarat.html", title: "Peluang Saling Bebas & Bersyarat" },
                    { file: "latihan-pemecahan-masalah-peluang.html", title: "Problem Solving HOTS Peluang" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN)",
                deskripsi: "Sesi pengayaan khusus persiapan Olimpiade Sains Nasional (OSN-K dan OSN-P) jenjang SMA: Aljabar (ketaksamaan AM-GM & Cauchy-Schwarz), Teori Bilangan (keterbagian & kongruensi modulo), Geometri & Trigonometri lanjutan (Dalil Ceva, Menelaus, Ptolemy), Kombinatorika (Prinsip Sarang Merpati & Stars and Bars), bedah soal asli OSN-K, trik pembuktian esai OSN-P, serta audio panduan berpikir guru.",
                subbab: [
                    { file: "aljabar-olimpiade-ketaksamaan-dan-polinomial.html", title: "Aljabar: Ketaksamaan AM-GM & Polinomial" },
                    { file: "teori-bilangan-keterbagian-dan-modulo.html", title: "Teori Bilangan: Keterbagian & Modulo" },
                    { file: "geometri-dan-trigonometri-olimpiade.html", title: "Geometri: Dalil Ceva, Menelaus & Siklik" },
                    { file: "kombinatorika-dan-peluang-olimpiade.html", title: "Kombinatorika: Pigeonhole & Stars-Bars" },
                    { file: "bedah-soal-asli-osnk-matematika.html", title: "Bedah Soal Asli OSN-K (Trik Cepat)" },
                    { file: "simulasi-dan-trik-pembuktian-osnp.html", title: "Simulasi & Pembuktian Rigor OSN-P" }
                ]
            }
        ]
    },
    "mtk-11": {
        label: "Kelas XI",
        mapelNama: "Matematika",
        mapel: "matematika",
        icon: "📐",
        pathPrefix: "/matematika/kelas-11",
        bab: [
            {
                slug: "komposisi-fungsi-dan-fungsi-invers",
                title: "Komposisi Fungsi dan Fungsi Invers",
                deskripsi: "Konsep dasar relasi & fungsi, domain alami, kodomain & range, operasi aljabar fungsi, syarat & sifat fungsi komposisi, teknik aljabar menentukan komponen fungsi, konsep fungsi invers & fungsi bijektif, sifat invers komposisi, serta pemodelan kontekstual industri & ekonomi.",
                subbab: [
                    { file: "konsep-fungsi-domain-kodomain-dan-range.html", title: "Konsep Fungsi, Domain, Kodomain & Range" },
                    { file: "operasi-aljabar-pada-fungsi.html", title: "Operasi Aljabar pada Fungsi & Daerah Asalnya" },
                    { file: "konsep-dan-sifat-fungsi-komposisi.html", title: "Konsep & Sifat-Sifat Fungsi Komposisi" },
                    { file: "menentukan-komponen-fungsi-komposisi.html", title: "Menentukan Komponen Fungsi Pembentuk Komposisi" },
                    { file: "konsep-fungsi-invers-dan-sifatnya.html", title: "Konsep Fungsi Invers & Sifat-Sifat Fundamental" },
                    { file: "pemodelan-dan-problem-solving-fungsi-komposisi-invers.html", title: "Pemodelan & Problem Solving HOTS Fungsi Komposisi-Invers" }
                ]
            },
            {
                slug: "lingkaran",
                title: "Geometri Lingkaran",
                deskripsi: "Unsur-unsur dan terminologi lingkaran, teorema sudut pusat & sudut keliling, sudut keliling menghadap diameter, segi empat tali busur, sudut antara dua tali busur, garis singgung lingkaran melalui titik pada/luar lingkaran, garis singgung persekutuan luar (GSPL) & dalam (GSPD), serta problem solving geometris terpadu.",
                subbab: [
                    { file: "unsur-unsur-lingkaran-dan-terminologi.html", title: "Unsur-Unsur & Terminologi Geometri Lingkaran" },
                    { file: "sudut-pusat-dan-sudut-keliling.html", title: "Teorema Sudut Pusat & Sudut Keliling" },
                    { file: "segi-empat-tali-busur-dan-sudut-dua-tali-busur.html", title: "Segi Empat Tali Busur & Sudut Dua Tali Busur" },
                    { file: "garis-singgung-lingkaran.html", title: "Konsep & Sifat Garis Singgung Lingkaran" },
                    { file: "garis-singgung-persekutuan-dua-lingkaran.html", title: "Garis Singgung Persekutuan Luar & Dalam" },
                    { file: "latihan-pemecahan-masalah-lingkaran.html", title: "Problem Solving HOTS Geometri Lingkaran" }
                ]
            },
            {
                slug: "statistika-bivariat",
                title: "Statistika: Analisis Data Bivariat",
                deskripsi: "Konsep variabel bebas (independen) dan terikat (dependen), pembuatan diagram pencar (scatter plot), identifikasi pola tren linear & non-linear, garis regresi linier metode kuadrat terkecil (least squares), koefisien korelasi Pearson (r), koefisien determinasi (r²), analisis residu, serta interpretasi model prediksi.",
                subbab: [
                    { file: "konsep-data-bivariat-dan-variabel-independen-dependen.html", title: "Konsep Data Bivariat & Variabel Independen-Dependen" },
                    { file: "diagram-pencar-scatter-plot-dan-pola-tren.html", title: "Diagram Pencar (Scatter Plot) & Pola Tren Data" },
                    { file: "garis-regresi-linier-metode-kuadrat-terkecil.html", title: "Garis Regresi Linier Metode Kuadrat Terkecil" },
                    { file: "koefisien-korelasi-pearson-dan-derajat-hubungan.html", title: "Koefisien Korelasi Pearson (r) & Derajat Hubungan" },
                    { file: "koefisien-determinasi-dan-interpretasi-model.html", title: "Koefisien Determinasi (r²) & Evaluasi Residu" },
                    { file: "latihan-pemecahan-masalah-statistika-bivariat.html", title: "Problem Solving HOTS Analisis Data Bivariat" }
                ]
            },
            {
                slug: "polinomial",
                title: "Aljabar: Polinomial (Suku Banyak)",
                deskripsi: "Konsep dasar bentuk umum suku banyak derajat n, operasi aljabar polinomial, kesamaan identitas aljabar, penentuan nilai dengan skema Horner, algoritma pembagian polinomial bersusun & Horner-Kino, Teorema Sisa & Teorema Faktor, penentuan akar-akar rasional, Teorema Vieta polinomial tingkat tinggi, serta pemodelan kontekstual.",
                subbab: [
                    { file: "konsep-dasar-dan-operasi-aljabar-polinomial.html", title: "Konsep Dasar & Operasi Aljabar Polinomial" },
                    { file: "nilai-polinomial-dan-metode-substitusi-horner.html", title: "Nilai Polinomial & Skema Sintetik Horner" },
                    { file: "pembagian-polinomial-bersusun-dan-skema-horner.html", title: "Pembagian Polinomial & Metode Horner-Kino" },
                    { file: "teorema-sisa-dan-teorema-faktor.html", title: "Teorema Sisa & Teorema Faktor" },
                    { file: "akar-akar-rasional-dan-teorema-vieta-polinomial.html", title: "Akar-Akar Rasional & Teorema Vieta Lanjutan" },
                    { file: "pemodelan-dan-problem-solving-hots-polinomial.html", title: "Problem Solving HOTS & Pemodelan Polinomial" }
                ]
            },
            {
                slug: "matriks",
                title: "Matriks & Sistem Persamaan Linier",
                deskripsi: "Konsep dasar matriks, ordo, jenis-jenis matriks, transpos matriks, kesamaan dua matriks, operasi penjumlahan, pengurangan, & perkalian skalar/matriks, determinan matriks ordo 2x2 & 3x3 (metode Sarrus & ekspansi kofaktor), sifat-sifat determinan, invers matriks ordo 2x2 & 3x3 (adjoin), penyelesaian SPLDV & SPLTV menggunakan persamaan matriks dan Aturan Cramer, serta pemodelan kontekstual.",
                subbab: [
                    { file: "konsep-dasar-ordo-dan-kesamaan-matriks.html", title: "Konsep Dasar, Ordo, Notasi & Kesamaan Matriks" },
                    { file: "operasi-aljabar-dan-perkalian-matriks.html", title: "Operasi Aljabar, Perkalian Skalar & Matriks" },
                    { file: "determinan-matriks-dan-sifat-sifatnya.html", title: "Determinan Matriks Ordo 2x2, 3x3 & Sifatnya" },
                    { file: "invers-matriks-dan-persamaan-matriks.html", title: "Invers Matriks & Penyelesaian Persamaan Matriks" },
                    { file: "aturan-cramer-dan-sistem-persamaan-linier.html", title: "Sistem Persamaan Linier & Aturan Cramer" },
                    { file: "pemodelan-dan-problem-solving-hots-matriks.html", title: "Problem Solving HOTS & Pemodelan Matriks" }
                ]
            },
            {
                slug: "transformasi-geometri",
                title: "Transformasi Geometri",
                deskripsi: "Konsep pemetaan geometri pada bidang koordinat: translasi vektor pergeseran, 7 jenis refleksi pencerminan (sumbu-x/y, titik asal, y=±x, x=h, y=k), rotasi berpusat di O(0,0) dan P(a,b), dilatasi faktor skala k dan perbesaran luas bangun, representasi matriks transformasi 2x2, invers transformasi kurva/garis, komposisi transformasi berurutan, serta pemodelan desain dan problem solving HOTS.",
                subbab: [
                    { file: "translasi-pergeseran-geometri.html", title: "Translasi (Pergeseran): Vektor, Garis & Kurva" },
                    { file: "refleksi-pencerminan-geometri.html", title: "Refleksi (Pencerminan): 7 Garis Cermin & Matriks" },
                    { file: "rotasi-perputaran-geometri.html", title: "Rotasi (Perputaran): Sudut, Pusat & Matriks Rotasi" },
                    { file: "dilatasi-perkalian-geometri.html", title: "Dilatasi (Perkalian Skala): Faktor k & Luas Bangun" },
                    { file: "matriks-transformasi-dan-komposisi-transformasi.html", title: "Matriks Transformasi & Komposisi Majemuk" },
                    { file: "pemodelan-dan-problem-solving-hots-transformasi.html", title: "Problem Solving HOTS & Pemodelan Transformasi" }
                ]
            },
            {
                slug: "trigonometri-lanjutan",
                title: "Fungsi Trigonometri Lanjutan",
                deskripsi: "Eksplorasi mendalam fungsi dan persamaan trigonometri: grafik fungsi sinus, cosinus, & tangen (amplitudo, periode, & pergeseran fasa), rumus jumlah dan selisih sudut sin/cos/tan(α ± β), sudut ganda & setengah sudut, rumus perkalian ke jumlahan dan sebaliknya (Werner & Simpson), penyelesaian persamaan trigonometri dasar & bentuk a cos x + b sin x = c, serta pemodelan gelombang fisika dan fenomena periodik.",
                subbab: [
                    { file: "grafik-fungsi-trigonometri-dan-karakteristiknya.html", title: "Grafik Fungsi Sinus, Cosinus, Tangen & Pergeseran Fasa" },
                    { file: "rumus-jumlah-dan-selisih-dua-sudut-trigonometri.html", title: "Rumus Jumlah & Selisih Dua Sudut Trigonometri" },
                    { file: "rumus-sudut-ganda-dan-setengah-sudut-trigonometri.html", title: "Rumus Sudut Ganda & Setengah Sudut" },
                    { file: "rumus-perkalian-dan-penjumlahan-trigonometri.html", title: "Konversi Perkalian & Penjumlahan Trigonometri (Werner)" },
                    { file: "persamaan-trigonometri-dasar-dan-lanjutan.html", title: "Persamaan Trigonometri Dasar & Bentuk a cos x + b sin x = c" },
                    { file: "pemodelan-dan-problem-solving-hots-trigonometri.html", title: "Problem Solving HOTS & Pemodelan Fenomena Periodik" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN)",
                deskripsi: "Modul pengayaan tingkat tinggi persiapan kompetisi matematika bergengsi (OSN-K, OSN-P, & OSN Nasional jenjang SMA): Teorema Vieta & Faktorisasi Polinomial Kompleks, Persamaan Diophantine & Teorema Euler/Fermat, Geometri Matriks & Teorema Ptolemy Berbasis Trigonometri, Rumus Penjumlahan Teleskopik & Nilai Ekstremum Cauchy-Schwarz, Kombinatorika Lanjutan (Inklusi-Eksklusi & Teori Graf), serta Strategi Esai Pembuktian Rigor OSN-P.",
                subbab: [
                    { file: "aljabar-polinomial-dan-vieta-olimpiade.html", title: "Aljabar Polinomial Olimpiade & Teorema Vieta Lanjutan" },
                    { file: "teori-bilangan-dan-persamaan-diophantine.html", title: "Teori Bilangan: Kongruensi Modulo, Euler & Diophantine" },
                    { file: "geometri-dan-trigonometri-olimpiade-lanjutan.html", title: "Geometri & Trigonometri Lanjutan: Ptolemy, Simson & Titik Kuasa" },
                    { file: "ketaksamaan-dan-deret-teleskopik-olimpiade.html", title: "Ketaksamaan Cauchy-Schwarz, AM-GM & Deret Teleskopik" },
                    { file: "kombinatorika-lanjutan-dan-teori-graf.html", title: "Kombinatorika Lanjutan: Inklusi-Eksklusi, Bijections & Teori Graf" },
                    { file: "bedah-soal-dan-strategi-esai-osnp-matematika.html", title: "Bedah Soal Asli & Trik Menulis Pembuktian Esai OSN-P" }
                ]
            }
        ]
    },
    "mtk-12": {
        label: "Kelas XII",
        mapelNama: "Matematika",
        mapel: "matematika",
        icon: "📐",
        pathPrefix: "/matematika/kelas-12",
        bab: [
            {
                slug: "dimensi-tiga",
                title: "Geometri Ruang (Dimensi Tiga)",
                deskripsi: "Analisis komprehensif geometri Euklides berdimensi tiga: aksioma kedudukan titik, garis, dan bidang pada bangun ruang (kubus, balok, limas, prisma), perhitungan jarak titik ke titik dan titik ke garis (proyeksi ortogonal, Teorema Pythagoras 3D & kesamaan luas segitiga), jarak titik ke bidang dan jarak dua garis bersilangan, sudut antara dua garis dan garis terhadap bidang, sudut tumpuan (dihedral) antara dua bidang, serta problem solving HOTS & pemodelan arsitektur ruang.",
                subbab: [
                    { file: "kedudukan-titik-garis-dan-bidang-dimensi-tiga.html", title: "Kedudukan Titik, Garis & Bidang dalam Ruang 3D" },
                    { file: "jarak-titik-ke-titik-dan-titik-ke-garis.html", title: "Jarak Titik ke Titik & Jarak Titik ke Garis" },
                    { file: "jarak-titik-ke-bidang-dan-garis-bersilangan.html", title: "Jarak Titik ke Bidang & Dua Garis Bersilangan" },
                    { file: "sudut-antara-dua-garis-dan-garis-dengan-bidang.html", title: "Sudut Antara Dua Garis & Garis terhadap Bidang" },
                    { file: "sudut-antara-dua-bidang-dihedral.html", title: "Sudut Antara Dua Bidang (Sudut Tumpuan / Dihedral)" },
                    { file: "pemodelan-dan-problem-solving-hots-dimensi-tiga.html", title: "Problem Solving HOTS & Pemodelan Geometri Ruang" }
                ]
            },
            {
                slug: "limit-fungsi",
                title: "Limit Fungsi Aljabar, Trigonometri & Ketakhinggaan",
                deskripsi: "Fondasi kalkulus diferensial dan integral: konsep intuitif & formal limit fungsi di satu titik, syarat eksistensi limit kiri dan limit kanan, teorema sifat-sifat limit, teknik penyelesaian bentuk tak tentu 0/0 pada limit aljabar (faktorisasi, skema Horner, & rasionalisasi akar sekawan), limit di ketakhinggaan (polinomial, rasional, irasional √(ax²+bx+c) - √(ax²+px+q) & analisis asimtot), limit fungsi trigonometri dasar & sudut rangkap (Teorema Apit), kontinuitas fungsi & Teorema Nilai Antara, serta problem solving HOTS.",
                subbab: [
                    { file: "konsep-dasar-limit-kiri-kanan-dan-sifat-limit.html", title: "Konsep Dasar Limit, Limit Kiri-Kanan & Sifat-Sifat Limit" },
                    { file: "limit-fungsi-aljabar-faktorisasi-dan-akar-sekawan.html", title: "Limit Fungsi Aljabar: Faktorisasi & Rasionalisasi Akar" },
                    { file: "limit-di-ketakhinggaan-dan-asimtot-kurva.html", title: "Limit di Ketakhinggaan & Analisis Asimtot Kurva" },
                    { file: "limit-fungsi-trigonometri-dasar-dan-sudut-rangkap.html", title: "Limit Fungsi Trigonometri Dasar & Rumus Sudut Rangkap" },
                    { file: "kontinuitas-fungsi-dan-teorema-nilai-antara.html", title: "Kontinuitas Fungsi, Diskontinuitas & Teorema Nilai Antara" },
                    { file: "pemodelan-dan-problem-solving-hots-limit-fungsi.html", title: "Problem Solving HOTS & Pemodelan Limit Fungsi" }
                ]
            },
            {
                slug: "turunan-fungsi",
                title: "Turunan Fungsi (Diferensial) & Aplikasinya",
                deskripsi: "Kalkulus diferensial lengkap dari fondasi hingga aplikasi tingkat lanjut: definisi limit turunan (kuosien selisih), syarat keterdiferensialan vs kontinuitas, aturan pangkat, hasil kali & hasil bagi (u·v dan u/v), Aturan Rantai (Chain Rule), turunan fungsi implisit, turunan tingkat tinggi, turunan 6 fungsi trigonometri beserta Aturan L'Hôpital untuk limit 0/0, persamaan garis singgung & garis normal kurva, analisis fungsi naik/turun, titik stasioner, kecekungan & titik belok, serta problem solving HOTS optimasi maksimum-minimum dan laju berkaitan (related rates).",
                subbab: [
                    { file: "definisi-limit-turunan-dan-aturan-dasar-diferensial.html", title: "Definisi Limit Turunan, Rumus Dasar & Operasi Aljabar" },
                    { file: "aturan-rantai-turunan-implisit-dan-tingkat-tinggi.html", title: "Aturan Rantai (Chain Rule), Turunan Implisit & Tingkat Tinggi" },
                    { file: "turunan-fungsi-trigonometri-dan-dalil-lhopital.html", title: "Turunan Fungsi Trigonometri & Aturan L'Hôpital" },
                    { file: "persamaan-garis-singgung-garis-normal-dan-kinematika.html", title: "Persamaan Garis Singgung, Garis Normal & Kinematika" },
                    { file: "fungsi-naik-turun-stasioner-dan-titik-belok.html", title: "Fungsi Naik-Turun, Titik Stasioner, Kecekungan & Titik Belok" },
                    { file: "optimasi-maksimum-minimum-dan-laju-berkaitan-hots.html", title: "Problem Solving HOTS: Optimasi Maksimum-Minimum & Laju Berkaitan" }
                ]
            },
            {
                slug: "integral",
                title: "Integral (Antiturunan) & Aplikasi Luas-Volume",
                deskripsi: "Kalkulus integral lengkap dari antiturunan hingga geometri benda putar: konsep dasar integral tak tentu (antiturunan), peran konstanta integrasi C & masalah nilai awal, rumus dasar integrasi aljabar & trigonometri, teknik integrasi substitusi aljabar & trigonometri, teknik integrasi parsial ( ∫ u dv = uv - ∫ v du & metode tabel Tanzalin), jumlah Riemann, Teorema Dasar Kalkulus I & II pada integral tentu beserta sifat simetri fungsi ganjil-genap, aplikasi luas daerah di bawah & di antara dua kurva (termasuk rumus cepat D√D / 6a²), serta volume benda putar metode cakram, cincin & kulit tabung.",
                subbab: [
                    { file: "konsep-integral-tak-tentu-dan-rumus-dasar.html", title: "Konsep Integral Tak Tentu, Rumus Dasar & Masalah Nilai Awal" },
                    { file: "teknik-integrasi-substitusi-aljabar-dan-trigonometri.html", title: "Teknik Integrasi Substitusi Aljabar & Trigonometri" },
                    { file: "teknik-integrasi-parsial-dan-metode-tanzalin.html", title: "Teknik Integrasi Parsial & Metode Tabel Tanzalin" },
                    { file: "integral-tentu-teorema-dasar-kalkulus-dan-sifat-simetri.html", title: "Integral Tentu, Teorema Dasar Kalkulus & Sifat Simetri" },
                    { file: "aplikasi-integral-luas-daerah-di-antara-dua-kurva.html", title: "Aplikasi Integral: Luas Daerah di Bawah & di Antara Dua Kurva" },
                    { file: "volume-benda-putar-dan-problem-solving-hots-integral.html", title: "Volume Benda Putar & Problem Solving HOTS Integral" }
                ]
            },
            {
                slug: "irisan-kerucut",
                title: "Geometri Analitik: Irisan Kerucut (Conic Sections)",
                deskripsi: "Geometri analitik bidang tingkat lanjut: persamaan standar & bentuk umum lingkaran, kuasa titik & kedudukan garis terhadap lingkaran, rumus bagi adil persamaan garis singgung lingkaran & garis kutub (polar), definisi lokus dan eksentrisitas irisan kerucut (e = 0, e < 1, e = 1, e > 1), parabola vertikal & horizontal (puncak, fokus, direktriks, latus rectum, & garis singgung), elips (sumbu mayor/minor, fokus c² = a² - b², & garis singgung), hiperbola (fokus c² = a² + b², asimtot, & garis singgung), serta aplikasi sifat pantul optik dan orbit planet Kepler.",
                subbab: [
                    { file: "persamaan-lingkaran-analitik-dan-kedudukan-titik-garis.html", title: "Persamaan Lingkaran Analitik, Kuasa Titik & Kedudukan Garis" },
                    { file: "persamaan-garis-singgung-lingkaran-dan-berkas-lingkaran.html", title: "Persamaan Garis Singgung Lingkaran (Bagi Adil) & Garis Polar" },
                    { file: "irisan-kerucut-parabola-fokus-direktriks-dan-garis-singgung.html", title: "Parabola: Fokus, Direktriks, Latus Rectum & Garis Singgung" },
                    { file: "irisan-kerucut-elips-eksentrisitas-dan-garis-singgung.html", title: "Elips: Sumbu Mayor-Minor, Fokus, Eksentrisitas & Garis Singgung" },
                    { file: "irisan-kerucut-hiperbola-asimtot-dan-garis-singgung.html", title: "Hiperbola: Fokus, Persamaan Asimtot & Garis Singgung" },
                    { file: "pemodelan-optik-orbit-dan-problem-solving-hots-irisan-kerucut.html", title: "Pemodelan Optik, Orbit Kepler & Problem Solving HOTS Irisan Kerucut" }
                ]
            },
            {
                slug: "kaidah-pencacahan-dan-distribusi-peluang",
                title: "Kaidah Pencacahan, Kombinatorika & Distribusi Peluang",
                deskripsi: "Kombinatorika dan statistika inferensial dasar Kelas XII: aturan penjumlahan dan aturan perkalian (filling slots), notasi faktorial, permutasi n objek, permutasi unsur yang sama & permutasi siklis, kombinasi & Teorema Binomial Newton, peluang kejadian majemuk (saling lepas, tidak saling lepas), peluang bersyarat, kejadian saling bebas & Teorema Bayes, variabel acak diskrit (fungsi massa peluang, nilai harapan E(X), variansi) & Distribusi Binomial B(n,p), variabel acak kontinu & Distribusi Normal Baku (skor-Z), serta problem solving HOTS.",
                subbab: [
                    { file: "aturan-penjumlahan-perkalian-dan-notasi-faktorial.html", title: "Aturan Penjumlahan, Perkalian (Filling Slots) & Faktorial" },
                    { file: "permutasi-unsur-sama-siklis-dan-kombinasi.html", title: "Permutasi, Unsur Sama, Siklis, Kombinasi & Binomial Newton" },
                    { file: "peluang-kejadian-majemuk-bersyarat-dan-teorema-bayes.html", title: "Peluang Kejadian Majemuk, Bersyarat & Teorema Bayes" },
                    { file: "variabel-acak-diskrit-dan-distribusi-peluang-binomial.html", title: "Variabel Acak Diskrit, Ekspektasi & Distribusi Binomial" },
                    { file: "distribusi-peluang-kontinu-dan-distribusi-normal-baku.html", title: "Variabel Acak Kontinu & Distribusi Normal Baku (Skor-Z)" },
                    { file: "pemodelan-dan-problem-solving-hots-kombinatorika-peluang.html", title: "Problem Solving HOTS Kombinatorika & Distribusi Peluang" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN Matematika)",
                deskripsi: "Modul puncak persiapan kompetisi matematika tingkat provinsi dan nasional (OSN-P, OSN Nasional, & seleksi IMO): kalkulus analitik & ketaksamaan konveksitas Jensen-Karamata, persamaan fungsional (Functional Equations) atas bilangan riil & metode diferensial, teori bilangan tingkat lanjut (Lifting The Exponent Lemma / LTE, orde modulo, & simbol Legendre), kombinatorika fungsi pembangkit, relasi rekurensi karakteristik & rantai peluang rekursif, geometri vektor ruang 3D & tetrahedron, serta bedah soal esai pembuktian rigor OSN.",
                subbab: [
                    { file: "kalkulus-olimpiade-dan-ketaksamaan-jensen-karamata.html", title: "Kalkulus Analitik & Ketaksamaan Konveksitas Jensen" },
                    { file: "persamaan-fungsional-cauchy-dan-analisis-kontinuitas.html", title: "Persamaan Fungsional (Functional Equations) & Cauchy" },
                    { file: "teori-bilangan-lanjutan-residu-kuadratik-dan-lte.html", title: "Teori Bilangan Lanjutan: Lemma LTE, Orde & Legendre" },
                    { file: "kombinatorika-pembangkit-rekurensi-dan-probabilitas-markov.html", title: "Fungsi Pembangkit, Rekurensi Linier & Peluang Rekursif" },
                    { file: "geometri-analitik-barycentric-dan-vektor-ruang-olimpiade.html", title: "Geometri Vektor Ruang 3D & Tetrahedron Olimpiade" },
                    { file: "bedah-soal-dan-strategi-esai-osn-nasional-matematika.html", title: "Bedah Soal & Strategi Pembuktian Esai OSN Matematika" }
                ]
            }
        ]
    }
    ,
    "fis-10": {
        label: "Kelas X",
        mapelNama: "Fisika",
        mapel: "fisika",
        icon: "⚡",
        pathPrefix: "/fisika/kelas-10",
        bab: [
            {
                slug: "pengukuran-dalam-kerja-ilmiah",
                title: "Pengukuran dalam Kerja Ilmiah",
                deskripsi: "Hakikat fisika, metode ilmiah, besaran pokok/turunan, dimensi besaran SI, ketelitian jangka sorong dan mikrometer sekrup, aturan angka penting, notasi ilmiah, serta analisis ketidakpastian/ralat eksperimen.",
                subbab: [
                    { file: "hakikat-fisika-dan-metode-ilmiah.html", title: "Hakikat Fisika, Metode Ilmiah & Prosedur Keselamatan Kerja Lab" },
                    { file: "besaran-satuan-dan-analisis-dimensi.html", title: "Besaran Pokok, Besaran Turunan, Satuan SI & Analisis Dimensi" },
                    { file: "penggunaan-alat-ukur-presisi.html", title: "Penggunaan Alat Ukur Presisi: Jangka Sorong, Mikrometer & Neraca" },
                    { file: "aturan-angka-penting-dan-notasi-ilmiah.html", title: "Aturan Angka Penting, Operasi Hitung Presisi & Notasi Ilmiah" },
                    { file: "ketidakpastian-pengukuran-dan-ralat.html", title: "Ketidakpastian Pengukuran Tunggal/Berulang, Presisi & Ralat Eksperimen" },
                    { file: "latihan-pemecahan-masalah-pengukuran.html", title: "Latihan Pemecahan Masalah & HOTS Analisis Data Pengukuran" }
                ]
            },
            {
                slug: "energi-terbarukan-dan-perubahan-iklim",
                title: "Energi Terbarukan & Perubahan Iklim",
                deskripsi: "Bentuk-bentuk energi, hukum kekekalan energi mekanik, perbandingan energi fosil vs alternatif (surya, angin, mikrohidro, biomassa, panas bumi), prinsip konversi pembangkit listrik, serta analisis efisiensi energi.",
                subbab: [
                    { file: "bentuk-dan-transformasi-energi.html", title: "Bentuk-Bentuk Energi & Transformasi Energi dalam Kehidupan" },
                    { file: "hukum-kekekalan-energi-mekanik.html", title: "Hukum Kekekalan Energi Mekanik & Usaha Sederhana" },
                    { file: "sumber-energi-terbarukan-dan-tak-terbarukan.html", title: "Sumber Energi Tak Terbarukan vs Energi Terbarukan Ramah Lingkungan" },
                    { file: "pembangkit-listrik-energi-alternatif.html", title: "Pembangkit Listrik Energi Surya, Angin, Air, Geotermal & Biomassa" },
                    { file: "efisiensi-dan-konservasi-energi.html", title: "Perhitungan Daya, Efisiensi Konversi Energi & Konservasi Energi" },
                    { file: "desain-proyek-rekayasa-energi.html", title: "Proyek Desain Prototipe & Studi Kasus Ketahanan Energi Nasional" }
                ]
            },
            {
                slug: "pemanasan-global-dan-dinamika-lingkungan",
                title: "Pemanasan Global & Dinamika Lingkungan",
                deskripsi: "Mekanisme efek rumah kaca alami dan antropogenik, emisi gas rumah kaca (CO2, CH4, N2O), jejak karbon, dinamika iklim global, fenomena cuaca ekstrem, mitigasi teknologi hijau, dan kesepakatan internasional.",
                subbab: [
                    { file: "efek-rumah-kaca-dan-keseimbangan-radiasi.html", title: "Efek Rumah Kaca & Keseimbangan Radiasi Termal Bumi" },
                    { file: "gas-rumah-kaca-dan-jejak-karbon.html", title: "Gas Rumah Kaca (GRK), Emisi Karbon & Jejak Karbon Pribadi" },
                    { file: "dampak-perubahan-iklim-global.html", title: "Dampak Perubahan Iklim Global: Anomali Cuaca & Kenaikan Muka Laut" },
                    { file: "solusi-mitigasi-dan-adaptasi-iklim.html", title: "Solusi Rekayasa Mitigasi & Adaptasi Pemanasan Global" },
                    { file: "kesepakatan-internasional-dan-net-zero.html", title: "Kesepakatan Iklim Global: Paris Agreement & Target Net Zero Emission" },
                    { file: "analisis-data-dan-aksi-lingkungan.html", title: "Analisis Data Temperatur Global & Refleksi Aksi Nyata Lingkungan" }
                ]
            },
            {
                slug: "vektor-dan-dasar-kinematika",
                title: "Vektor & Dasar Kinematika Gerak",
                deskripsi: "Konsep besaran skalar dan vektor, representasi grafis, metode poligon dan jajaran genjang, penguraian komponen kartesius 2D/3D, dot product, cross product, serta analisis GLB dan GLBB satu dimensi.",
                subbab: [
                    { file: "konsep-skalar-dan-notasi-vektor.html", title: "Konsep Skalar vs Vektor & Representasi Geometris Vektor" },
                    { file: "penjumlahan-dan-pengurangan-vektor.html", title: "Metode Grafis: Poligon, Jajaran Genjang & Pengurangan Vektor" },
                    { file: "penguraian-vektor-dan-komponen-kartesius.html", title: "Penguraian Vektor pada Sumbu Kartesius (x, y) & Vektor Satuan" },
                    { file: "perkalian-vektor-dot-dan-cross-product.html", title: "Perkalian Titik (Dot Product) & Perkalian Silang (Cross Product)" },
                    { file: "kinematika-1d-glb-dan-glbb.html", title: "Posisi, Perpindahan, Kecepatan, Percepatan & Gerak Lurus (GLB / GLBB)" },
                    { file: "latihan-pemecahan-masalah-vektor-kinematika.html", title: "Latihan Pemecahan Masalah Terpadu Vektor & Kinematika 1D" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN Fisika)",
                deskripsi: "Modul pengayaan tingkat tinggi untuk persiapan seleksi OSN-K & OSN-P Fisika Fase E: analisis dimensi Buckingham Pi, kinematika vektor kalkulus diferensial, gerak relatif Galilean, gerak proyektil miring, dan mekanika kompetisi.",
                subbab: [
                    { file: "analisis-dimensi-lanjut-dan-teorema-buckingham.html", title: "Analisis Dimensi Lanjut & Teorema Buckingham Pi" },
                    { file: "kinematika-vektor-dengan-kalkulus.html", title: "Kinematika Vektor dengan Pendekatan Kalkulus Diferensial & Integral" },
                    { file: "gerak-relatif-dan-transformasi-galilean.html", title: "Gerak Relatif 2D & Transformasi Koordinat Galilean" },
                    { file: "gerak-proyektil-pada-bidang-miring.html", title: "Gerak Parabola Non-Standar: Bidang Miring & Efek Hambatan Udara" },
                    { file: "pengantar-dinamika-partikel-kompetisi.html", title: "Dinamika Partikel Tingkat Kompetisi: Hukum Newton & Batasan Geometris" },
                    { file: "bedah-soal-asli-dan-strategi-osnk-fisika-10.html", title: "Bedah Soal Asli & Strategi OSN-K Fisika Fase E" }
                ]
            }
        ]
    },
    "fis-11": {
        label: "Kelas XI",
        mapelNama: "Fisika",
        mapel: "fisika",
        icon: "⚡",
        pathPrefix: "/fisika/kelas-11",
        bab: [
            {
                slug: "kinematika-gerak-lanjutan",
                title: "Kinematika Gerak 2D & 3D",
                deskripsi: "Gerak parabola, gerak melingkar beraturan (GMB) dan berubah beraturan (GMBB), percepatan sentripetal, serta kecepatan sudut dan linear.",
                subbab: [
                    { file: "analisis-vektor-posisi-kecepatan-percepatan.html", title: "Analisis Vektor Posisi, Kecepatan & Percepatan 2D" },
                    { file: "gerak-parabola-dan-lintasan-peluru.html", title: "Karakteristik Gerak Parabola, Titik Tertinggi & Jangkauan Maksimum" },
                    { file: "gerak-melingkar-beraturan-dan-berubah-beraturan.html", title: "Gerak Melingkar Beraturan (GMB) & Dinamika Sudut GMBB" },
                    { file: "percepatan-tangensial-dan-sentripetal.html", title: "Percepatan Sentripetal, Tangensial & Percepatan Total" },
                    { file: "hubungan-roda-roda-dan-transmisi-gerak.html", title: "Hubungan Roda-Roda Sepusat, Bersinggungan & Dihubungkan Rantai" },
                    { file: "latihan-pemecahan-masalah-kinematika-2d.html", title: "Latihan Pemecahan Masalah Kinematika Gerak Dua Dimensi" }
                ]
            },
            {
                slug: "dinamika-partikel-dan-hukum-newton",
                title: "Dinamika Partikel & Hukum Newton",
                deskripsi: "Hukum I, II, dan III Newton tentang gerak, diagram benda bebas (FBD), gaya kontak, gaya normal, gaya gesekan statis/kinetis, dan sistem katrol.",
                subbab: [
                    { file: "hukum-newton-dan-diagram-benda-bebas.html", title: "Hukum-Hukum Newton tentang Gerak & Teknik Diagram Benda Bebas" },
                    { file: "analisis-gaya-gesekan-statis-dan-kinetis.html", title: "Analisis Gaya Gesekan Kering: Koefisien Statis & Kinetis" },
                    { file: "dinamika-pada-bidang-miring-dan-sistem-terhubung.html", title: "Gerak Benda pada Bidang Miring Kasar & Rangkaian Terhubung" },
                    { file: "sistem-katrol-dan-tegangan-tali.html", title: "Dinamika Sistem Katrol Majemuk & Analisis Tegangan Tali" },
                    { file: "gaya-sentripetal-pada-tikungan-dan-loop.html", title: "Aplikasi Gaya Sentripetal: Tikungan Jalan Miring & Ayunan Konis" },
                    { file: "latihan-pemecahan-masalah-dinamika-newton.html", title: "Latihan Pemecahan Masalah Dinamika Partikel HOTS" }
                ]
            },
            {
                slug: "gravitasi-universal-dan-hukum-kepler",
                title: "Gravitasi Universal & Hukum Kepler",
                deskripsi: "Hukum gravitasi universal Newton, medan gravitasi, energi potensial gravitasi, kecepatan orbit, kecepatan lepas, serta Hukum I, II, dan III Kepler.",
                subbab: [
                    { file: "hukum-gravitasi-newton-dan-medan-gravitasi.html", title: "Hukum Gravitasi Universal Newton & Kuat Medan Gravitasi" },
                    { file: "energi-potensial-dan-potensial-gravitasi.html", title: "Energi Potensial Gravitasi Universal & Potensial Gravitasi" },
                    { file: "kecepatan-orbit-dan-kecepatan-lepas.html", title: "Kecepatan Satelit Mengorbit Bumi & Kecepatan Lepas (Escape Velocity)" },
                    { file: "hukum-kepler-tentang-gerak-planet.html", title: "Hukum I, II, dan III Kepler tentang Orbit Gerak Tata Surya" },
                    { file: "aplikasi-satelit-geostasioner-dan-orbit-rendah.html", title: "Aplikasi Satelit Geostasioner, LEO & Dinamika Wahana Antariksa" },
                    { file: "latihan-pemecahan-masalah-gravitasi.html", title: "Latihan Pemecahan Masalah Gravitasi Universal & Kepler" }
                ]
            },
            {
                slug: "usaha-energi-dan-daya",
                title: "Usaha, Energi & Daya",
                deskripsi: "Konsep usaha sebagai perkalian skalar, teorema usaha-energi kinetik, gaya konservatif vs non-konservatif, hukum kekekalan energi mekanik, dan daya.",
                subbab: [
                    { file: "konsep-usaha-dan-perkalian-skalar.html", title: "Konsep Usaha oleh Gaya Konstan & Gaya Berubah secara Integral" },
                    { file: "teorema-usaha-energi-kinetik.html", title: "Teorema Usaha-Energi Kinetik & Perubahan Laju Benda" },
                    { file: "gaya-konservatif-dan-energi-potensial.html", title: "Gaya Konservatif, Gaya Non-Konservatif & Kurva Energi Potensial" },
                    { file: "hukum-kekekalan-energi-mekanik-komprehensif.html", title: "Hukum Kekekalan Energi Mekanik pada Sistem Pegas & Gravitasi" },
                    { file: "konsep-daya-dan-efisiensi-mesin.html", title: "Konsep Daya Rata-Rata, Daya Sesaat & Efisiensi Mekanis" },
                    { file: "latihan-pemecahan-masalah-usaha-energi.html", title: "Latihan Pemecahan Masalah Usaha, Energi & Daya" }
                ]
            },
            {
                slug: "momentum-impuls-dan-tumbukan",
                title: "Momentum, Impuls & Tumbukan",
                deskripsi: "Momentum linear, impuls gaya, hukum kekekalan momentum linear, jenis tumbukan (lenting sempurna, sebagian, tidak lenting), dan konsep pusat massa.",
                subbab: [
                    { file: "konsep-momentum-dan-teorema-impuls.html", title: "Konsep Momentum Linear & Teorema Impuls-Momentum" },
                    { file: "hukum-kekekalan-momentum-linear.html", title: "Hukum Kekekalan Momentum Linear pada Sistem Terisolasi" },
                    { file: "tumbukan-lenting-dan-koefisien-restitusi.html", title: "Klasifikasi Tumbukan 1D & Nilai Koefisien Restitusi (e)" },
                    { file: "tumbukan-dua-dimensi-dan-sudut-hamburan.html", title: "Analisis Tumbukan Dua Dimensi (2D) & Sudut Hamburan" },
                    { file: "konsep-pusat-massa-dan-gerak-roket.html", title: "Pusat Massa Sistem Benda Banyak & Prinsip Pendorong Roket" },
                    { file: "latihan-pemecahan-masalah-momentum-tumbukan.html", title: "Latihan Pemecahan Masalah Momentum, Impuls & Tumbukan" }
                ]
            },
            {
                slug: "dinamika-rotasi-dan-kesetimbangan-tegar",
                title: "Dinamika Rotasi & Kesetimbangan Benda Tegar",
                deskripsi: "Torsi/momen gaya, momen inersia berbagai benda pejal, hukum II Newton untuk rotasi, kekekalan momentum sudut, menggelinding murni, dan kesetimbangan statik.",
                subbab: [
                    { file: "torsi-dan-hukum-ii-newton-rotasi.html", title: "Momen Gaya (Torsi) & Formulasi Hukum II Newton untuk Rotasi" },
                    { file: "momen-inersia-dan-teorema-sumbu-sejajar.html", title: "Momen Inersia Berbagai Benda Pejal & Teorema Sumbu Sejajar" },
                    { file: "dinamika-menggelinding-murni.html", title: "Kinematika & Dinamika Gerak Menggelinding Murni pada Bidang Miring" },
                    { file: "kekekalan-momentum-sudut.html", title: "Hukum Kekekalan Momentum Sudut & Efek Giroskopik" },
                    { file: "syarat-kesetimbangan-benda-tegar.html", title: "Syarat Kesetimbangan Statis Translasi dan Rotasi Benda Tegar" },
                    { file: "latihan-pemecahan-masalah-dinamika-rotasi.html", title: "Latihan Pemecahan Masalah Dinamika Rotasi & Kesetimbangan" }
                ]
            },
            {
                slug: "elastisitas-dan-getaran-harmonis",
                title: "Elastisitas & Getaran Harmonis",
                deskripsi: "Tegangan, regangan, modulus Young, hukum Hooke, energi potensial pegas, getaran harmonik sederhana (GHS), periode pegas dan ayunan sederhana.",
                subbab: [
                    { file: "tegangan-regangan-dan-modulus-young.html", title: "Tegangan, Regangan, Deformasi Bahan & Modulus Young" },
                    { file: "hukum-hooke-dan-susunan-pegas.html", title: "Hukum Hooke, Rangkaian Pegas Seri-Paralel & Energi Elastis" },
                    { file: "persamaan-gerak-harmonis-sederhana.html", title: "Kinematika Getaran Harmonis: Posisi, Kecepatan & Percepatan GHS" },
                    { file: "periode-dan-frekuensi-osilasi.html", title: "Periode dan Frekuensi Osilasi Sistem Pegas & Bandul Sederhana" },
                    { file: "analisis-energi-pada-gerak-harmonis.html", title: "Kekekalan Energi Mekanik pada Osilasi Harmonik Sederhana" },
                    { file: "latihan-pemecahan-masalah-osilasi.html", title: "Latihan Pemecahan Masalah Elastisitas & Getaran Harmonis" }
                ]
            },
            {
                slug: "mekanika-fluida-statis-dan-dinamis",
                title: "Mekanika Fluida: Statis & Dinamis",
                deskripsi: "Tekanan hidrostatis, hukum Pascal, hukum Archimedes, tegangan permukaan, viskositas, persamaan kontinuitas, hukum Bernoulli, dan terapannya.",
                subbab: [
                    { file: "tekanan-hidrostatis-dan-hukum-pascal.html", title: "Tekanan Hidrostatis, Paradoks Hidrostatis & Hukum Pascal" },
                    { file: "hukum-archimedes-dan-gaya-apung.html", title: "Hukum Archimedes, Gaya Apung, Kondisi Terapung, Melayang & Tenggelam" },
                    { file: "tegangan-permukaan-kapilaritas-viskositas.html", title: "Tegangan Permukaan, Meniskus, Kapilaritas & Viskositas Fluida" },
                    { file: "persamaan-kontinuitas-debit-fluida.html", title: "Fluida Ideal, Garis Arus & Persamaan Kontinuitas Aliran" },
                    { file: "hukum-bernoulli-dan-penerapannya.html", title: "Persamaan Bernoulli, Venturimeter, Tabung Pitot & Gaya Angkat Pesawat" },
                    { file: "latihan-pemecahan-masalah-mekanika-fluida.html", title: "Latihan Pemecahan Masalah Mekanika Fluida Statis & Dinamis" }
                ]
            },
            {
                slug: "termodinamika-dan-teori-kinetik-gas",
                title: "Termodinamika & Teori Kinetik Gas",
                deskripsi: "Konsep suhu dan kalor, asas Black, persamaan gas ideal, energi kinetik partikel gas, hukum ke-0, I, dan II termodinamika, siklus Carnot, dan efisiensi.",
                subbab: [
                    { file: "suhu-pemuaian-dan-asas-black.html", title: "Suhu, Kalor, Pemuaian Termal & Asas Black Perpindahan Kalor" },
                    { file: "persamaan-keadaan-gas-ideal.html", title: "Persamaan Keadaan Gas Ideal (Boyle, Charles, Gay-Lussac)" },
                    { file: "teori-kinetik-gas-dan-ekipartisi-energi.html", title: "Tekanan Gas Mikroskopis, Kelajuan RMS & Teorema Ekipartisi Energi" },
                    { file: "hukum-pertama-termodinamika-dan-proses-gas.html", title: "Hukum I Termodinamika: Usaha pada Proses Isotermal, Isokhorik, Isobarik & Adiabatik" },
                    { file: "hukum-kedua-termodinamika-dan-siklus-carnot.html", title: "Hukum II Termodinamika, Siklus Mesin Kalor Carnot & Mesin Pendingin" },
                    { file: "latihan-pemecahan-masalah-termodinamika.html", title: "Latihan Pemecahan Masalah Termodinamika & Gas Ideal" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN Fisika)",
                deskripsi: "Materi tingkat lanjut OSN Fisika Kelas XI: pengantar formulasi Lagrangian, osilasi teredam & terpaksa resonansi, dinamika dua benda berputar, fluida viskos Navier-Stokes sederhana, dan pemodelan gas riil Van der Waals.",
                subbab: [
                    { file: "mekanika-analitik-pengantar-lagrangian.html", title: "Pengantar Mekanika Analitik: Formulasi Energi Lagrangian Sederhana" },
                    { file: "osilasi-harmonis-teredam-dan-terpaksa.html", title: "Osilasi Teredam, Osilasi Terpaksa & Resonansi Mekanik Amplitudo" },
                    { file: "masalah-dua-benda-dan-massa-tereduksi.html", title: "Masalah Dua Benda (Two-Body Problem) & Konsep Massa Tereduksi" },
                    { file: "tumbukan-2d-dalam-kerangka-pusat-massa.html", title: "Analisis Tumbukan 2D Menggunakan Kerangka Pusat Massa (Center of Mass Frame)" },
                    { file: "persamaan-gas-riil-van-der-waals.html", title: "Termodinamika Gas Riil: Persamaan Keadaan Van der Waals & Gas Non-Ideal" },
                    { file: "bedah-soal-asli-dan-strategi-osnk-fisika-11.html", title: "Bedah Soal Asli & Strategi OSN-K Fisika Kelas XI" }
                ]
            }
        ]
    },
    "fis-12": {
        label: "Kelas XII",
        mapelNama: "Fisika",
        mapel: "fisika",
        icon: "⚡",
        pathPrefix: "/fisika/kelas-12",
        bab: [
            {
                slug: "gelombang-mekanik-dan-bunyi",
                title: "Gelombang Mekanik & Bunyi",
                deskripsi: "Persamaan umum gelombang berjalan dan stasioner, superposisi gelombang, resonansi bunyi pada dawai dan pipa organa, intensitas dan taraf intensitas, serta efek Doppler.",
                subbab: [
                    { file: "karakteristik-dan-persamaan-gelombang-berjalan.html", title: "Karakteristik & Formulasi Persamaan Gelombang Berjalan" },
                    { file: "gelombang-stasioner-ujung-terikat-dan-bebas.html", title: "Gelombang Stasioner: Simpul & Perut pada Ujung Bebas dan Terikat" },
                    { file: "gelombang-bunyi-cepat-rambat-dan-resonansi.html", title: "Cepat Rambat Gelombang Bunyi, Resonansi Dawai & Pipa Organa" },
                    { file: "intensitas-dan-taraf-intensitas-bunyi.html", title: "Intensitas, Taraf Intensitas Bunyi (Desibel) & Sumber Bunyi Jamak" },
                    { file: "efek-doppler-dan-pelayangan-bunyi.html", title: "Efek Doppler dengan Medium Bergerak & Fenomena Pelayangan Gelombang" },
                    { file: "latihan-pemecahan-masalah-gelombang-bunyi.html", title: "Latihan Pemecahan Masalah Gelombang Mekanik & Akustika" }
                ]
            },
            {
                slug: "gelombang-cahaya-dan-optika-fisis",
                title: "Gelombang Cahaya & Optika Fisis",
                deskripsi: "Interferensi celah ganda Young, interferensi lapisan tipis, difraksi celah tunggal dan kisi difraksi, daya urai Rayleigh, serta polarisasi cahaya (hukum Brewster dan Malus).",
                subbab: [
                    { file: "interferensi-cahaya-celah-ganda-young.html", title: "Interferensi Celah Ganda Thomas Young: Pola Terang & Gelap" },
                    { file: "interferensi-selaput-tipis-dan-cincin-newton.html", title: "Interferensi Selaput Tipis & Cincin Newton (Pergeseran Fasa)" },
                    { file: "difraksi-celah-tunggal-dan-kisi-difraksi.html", title: "Difraksi Celah Tunggal Fraunhofer & Kisi Difraksi Resolusi Tinggi" },
                    { file: "daya-urai-optik-dan-kriteria-rayleigh.html", title: "Kriteria Rayleigh & Daya Urai Instrumen Optik Teleskop/Mikroskop" },
                    { file: "polarisasi-cahaya-dan-hukum-malus-brewster.html", title: "Polarisasi Cahaya: Absorpsi Selektif, Hukum Malus & Sudut Brewster" },
                    { file: "latihan-pemecahan-masalah-optika-fisis.html", title: "Latihan Pemecahan Masalah Gelombang Cahaya & Optika Fisis" }
                ]
            },
            {
                slug: "listrik-statis-dan-kapasitor",
                title: "Listrik Statis & Kapasitor",
                deskripsi: "Hukum Coulomb, kuat medan listrik, hukum Gauss, potensial dan energi potensial listrik, kapasitansi kapasitor keping sejajar, rangkaian kapasitor seri-paralel, dan bahan dielektrik.",
                subbab: [
                    { file: "hukum-coulomb-dan-interaksi-muatan.html", title: "Hukum Coulomb, Gaya Elektrostatik & Prinsip Superposisi Muatan" },
                    { file: "kuat-medan-listrik-dan-hukum-gauss.html", title: "Kuat Medan Listrik, Garis Gaya & Hukum Gauss untuk Bidang Simetris" },
                    { file: "potensial-dan-energi-potensial-listrik.html", title: "Potensial Listrik Skalar & Energi Potensial Sistem Muatan Jamak" },
                    { file: "kapasitansi-kapasitor-keping-sejajar.html", title: "Kapasitansi Kapasitor Keping Sejajar & Pengaruh Bahan Dielektrik" },
                    { file: "susunan-kapasitor-dan-penyimpanan-energi.html", title: "Rangkaian Kapasitor Seri-Paralel & Rapat Energi Elektrostatik" },
                    { file: "latihan-pemecahan-masalah-listrik-statis.html", title: "Latihan Pemecahan Masalah Elektrostatika & Kapasitor" }
                ]
            },
            {
                slug: "listrik-arus-searah-dc",
                title: "Listrik Arus Searah (DC)",
                deskripsi: "Arus listrik, hambatan dan hukum Ohm, resistivitas bergantung suhu, rangkaian resistor seri-paralel, hukum I dan II Kirchhoff pada rangkaian multi-loop, jembatan Wheatstone, dan daya listrik.",
                subbab: [
                    { file: "arus-listrik-hukum-ohm-dan-resistivitas.html", title: "Arus Listrik Mikroskopis, Hukum Ohm & Resistivitas Bergantung Suhu" },
                    { file: "rangkaian-resistor-dan-gaya-gerak-listrik.html", title: "Rangkaian Hambatan Seri-Paralel, GGL & Hambatan Dalam Baterai" },
                    { file: "hukum-kirchhoff-pada-rangkaian-multiloop.html", title: "Hukum I & II Kirchhoff: Solusi Sistematis Rangkaian Majemuk Multiloop" },
                    { file: "jembatan-wheatstone-dan-potensiometer.html", title: "Metode Jembatan Wheatstone & Potensiometer Pengukuran Presisi" },
                    { file: "energi-daya-listrik-dan-transmisi-daya.html", title: "Energi Listrik Joule, Daya Listrik & Efisiensi Transmisi Arus DC" },
                    { file: "latihan-pemecahan-masalah-listrik-dc.html", title: "Latihan Pemecahan Masalah Listrik Arus Searah DC HOTS" }
                ]
            },
            {
                slug: "medan-magnet-dan-induksi-elektromagnetik",
                title: "Medan Magnet & Induksi Elektromagnetik",
                deskripsi: "Medan magnetik kawat berarus (Biot-Savart dan hukum Ampere), gaya Lorentz pada muatan dan kawat berarus, fluks magnetik, hukum Faraday dan hukum Lenz, induktansi diri, dan transformator.",
                subbab: [
                    { file: "medan-magnet-di-sekitar-kawat-berarus.html", title: "Hukum Biot-Savart & Hukum Ampere: Medan Magnet Kawat Lurus, Lingkaran & Solenoida" },
                    { file: "gaya-lorentz-pada-muatan-dan-kawat.html", title: "Gaya Lorentz pada Partikel Bermuatan Bergerak & Kawat Berarus Sejajar" },
                    { file: "hukum-faraday-dan-hukum-lenz-induksi.html", title: "Fluks Magnetik, Formulasi Hukum Induksi Faraday & Arah Arus Lenz" },
                    { file: "ggl-induksi-kawat-bergerak-dan-generator.html", title: "GGL Induksi Kawat Konduktor Memotong Medan Magnet & Prinsip Generator" },
                    { file: "induktansi-diri-dan-transformator.html", title: "Induktansi Diri Solenoida, Energi Medan Magnet & Transformator Listrik" },
                    { file: "latihan-pemecahan-masalah-elektromagnetik.html", title: "Latihan Pemecahan Masalah Kemagnetan & Induksi Elektromagnetik" }
                ]
            },
            {
                slug: "rangkaian-arus-bolak-balik-ac",
                title: "Rangkaian Arus Bolak-Balik (AC)",
                deskripsi: "Tegangan dan arus sinusoidal, nilai efektif dan maksimum, reaktansi induktif dan kapasitif, impedansi rangkaian RLC seri, diagram fasor, resonansi rangkaian AC, dan faktor daya.",
                subbab: [
                    { file: "tegangan-arus-sinusoidal-dan-nilai-efektif.html", title: "Tegangan & Arus Sinusoidal: Nilai Puncak, Efektif (RMS) & Rata-Rata" },
                    { file: "rangkaian-resistor-induktor-kapasitor-murni.html", title: "Respon AC pada Resistor, Induktor Murni (XL) & Kapasitor Murni (XC)" },
                    { file: "rangkaian-rlc-seri-dan-impedansi.html", title: "Rangkaian RLC Seri, Formulasi Impedansi Total (Z) & Sudut Fase" },
                    { file: "diagram-fasor-dan-analisis-daya-ac.html", title: "Representasi Diagram Fasor & Segitiga Daya: Daya Nyata, Semu & Faktor Daya" },
                    { file: "resonansi-rangkaian-rlc-dan-penala.html", title: "Kondisi Resonansi RLC Seri, Frekuensi Resonansi & Rangkaian Penala Radio" },
                    { file: "latihan-pemecahan-masalah-rangkaian-ac.html", title: "Latihan Pemecahan Masalah Rangkaian Arus Bolak-Balik AC" }
                ]
            },
            {
                slug: "gelombang-elektromagnetik-dan-relativitas",
                title: "Gelombang Elektromagnetik & Relativitas Khusus",
                deskripsi: "Spektrum gelombang elektromagnetik, energi gelombang elektromagnetik (vektor Poynting), postulat relativitas khusus Einstein, dilatasi waktu, kontraksi panjang, dan kesetaraan massa-energi E=mc².",
                subbab: [
                    { file: "spektrum-gelombang-elektromagnetik-dan-energi.html", title: "Spektrum Gelombang Elektromagnetik & Rapat Energi Vektor Poynting" },
                    { file: "postulat-relativitas-khusus-einstein.html", title: "Percobaan Michelson-Morley & Dua Postulat Relativitas Khusus Einstein" },
                    { file: "dilatasi-waktu-dan-paradoks-kembar.html", title: "Relativitas Waktu (Dilatasi Waktu) & Analisis Paradoks Kembar" },
                    { file: "kontraksi-panjang-dan-relativitas-kecepatan.html", title: "Kontraksi Panjang Lorentz & Penjumlahan Kecepatan Relativistik" },
                    { file: "massa-momentum-dan-energi-relativistik.html", title: "Massa Relativistik, Momentum Relativistik & Kesetaraan Massa-Energi (E=mc²)" },
                    { file: "latihan-pemecahan-masalah-relativitas.html", title: "Latihan Pemecahan Masalah Relativitas Khusus HOTS" }
                ]
            },
            {
                slug: "fisika-kuantum-dan-fisika-inti",
                title: "Fisika Kuantum & Fisika Inti",
                deskripsi: "Radiasi benda hitam Planck, efek fotolistrik Einstein, hamburan Compton, panjang gelombang de Broglie, struktur inti atom, defek massa, energi ikat inti, peluruhan radioaktif, dan reaksi fisi-fusi nuklir.",
                subbab: [
                    { file: "radiasi-benda-hitam-dan-kuantum-planck.html", title: "Radiasi Benda Hitam, Hukum Pergeseran Wien & Hipotesis Kuantum Planck" },
                    { file: "efek-fotolistrik-dan-hamburan-compton.html", title: "Efek Fotolistrik Einstein & Hamburan Foton Compton (Sifat Partikel Cahaya)" },
                    { file: "dualitas-gelombang-partikel-de-broglie.html", title: "Hipotesis Gelombang Materi Louis de Broglie & Ketidakpastian Heisenberg" },
                    { file: "struktur-inti-defek-massa-energi-ikat.html", title: "Karakteristik Inti Atom, Defek Massa & Energi Ikat per Nukleon" },
                    { file: "radioaktivitas-dan-hukum-peluruhan.html", title: "Sinar Radioaktif (Alfa, Beta, Gamma), Waktu Paruh & Aktivitas Radiasi" },
                    { file: "reaksi-inti-fisi-fusi-dan-teknologi-nuklir.html", title: "Reaksi Fisi Terkendali, Fusi Termonuklir & Pemanfaatan Radioisotop" }
                ]
            },
            {
                slug: "pengayaan-olimpiade",
                title: "Pengayaan Olimpiade Sains (OSN Fisika)",
                deskripsi: "Materi tingkat tinggi OSN Fisika Kelas XII: elektrodinamika analitik, sirkuit transien induktif-kapasitif non-linier, persamaan Maxwell diferensial dasar, optika matriks, dan mekanika relativistik 4-vektor.",
                subbab: [
                    { file: "analisis-transien-rangkaian-rc-dan-rl.html", title: "Solusi Persamaan Diferensial Transien Rangkaian RC & RL DC" },
                    { file: "hukum-gauss-dan-ampere-bentuk-diferensial.html", title: "Pengantar Kalkulus Vektor Medan: Bentuk Diferensial Hukum Gauss & Ampere" },
                    { file: "optika-matriks-dan-metode-fermat.html", title: "Prinsip Waktu Terpendek Fermat & Pengantar Optika Matriks Transfer" },
                    { file: "mekanika-relativistik-4-vektor.html", title: "Formulasi Momentum-Energi 4-Vektor dalam Tumbukan Partikel Berkecepatan Tinggi" },
                    { file: "elektrodinamika-dan-radiasi-dipol.html", title: "Induksi Medan Elektromagnetik Lanjut & Polarisabilitas Dielektrik" },
                    { file: "bedah-soal-asli-dan-strategi-osnk-fisika-12.html", title: "Bedah Soal Asli & Strategi OSN-K Fisika Kelas XII" }
                ]
            }
        ]
    }

};
// Modul di luar struktur Kelas/Bab (tampil sebagai menu terpisah di header)
const modulLain = [
    { slug: "sas-x",         title: "SAS Kimia X",     path: "/kelas-10/ujian-sas-ganjil.html", icon: "🧪", status: "aktif", desc: "Kisi-kisi resmi, bedah 20 butir soal & simulasi CBT SAS Ganjil Kimia Kelas X T.P. 2026/2027.", action: "Buka kisi-kisi & CBT" },
    { slug: "sas-xi",        title: "SAS Kimia XI",    path: "/kelas-11/ujian-sas-ganjil.html", icon: "🧪", status: "aktif", desc: "Kisi-kisi resmi, bedah 45 butir soal (40 PG + 5 Esai) & simulasi CBT SAS Ganjil Kimia Kelas XI T.P. 2026/2027.", action: "Buka kisi-kisi & CBT" },
    { slug: "sas-xii",       title: "SAS Kimia XII",   path: "/kelas-12/ujian-sas-ganjil.html", icon: "⚡", status: "aktif", desc: "Kisi-kisi resmi, bedah 45 butir soal (40 PG + 5 Esai) & simulasi CBT SAS Ganjil Kimia Kelas XII T.P. 2026/2027.", action: "Buka kisi-kisi & CBT" },
    { slug: "tracker-snbt", title: "Tracker SNBT",    path: "/snbt/tracker.html",      icon: "🎯", status: "aktif", desc: "Study Tracker 7 subtes UTBK SNBT 2026, checklist materi & evaluasi skor try out.", action: "Buka tracker" },
    { slug: "snbt",         title: "Simulasi SNBT",   path: "/snbt/index.html",        icon: "📚", status: "aktif", desc: "Simulasi Tes Potensi Skolastik (TPS) dan Literasi SNBT resmi interaktif.", action: "Mulai simulasi" },
    { slug: "tka",          title: "Simulasi TKA",    path: "/tka/index.html",         icon: "📝", status: "aktif", desc: "Simulasi CBT 15 mata pelajaran TKA SMA resmi BPPP lengkap dengan timer.", action: "Mulai simulasi" },
    { slug: "prediksi-ptn", title: "Prediksi PTN",    path: "/tka/prediksi-ptn.html",  icon: "🎯", status: "aktif", desc: "Rekomendasi jurusan PTN berdasarkan akumulasi nilai latihan Anda.", action: "Cek prediksi" },
    { slug: "sains-populer", title: "Sains Populer",  path: "/sains-populer/index.html", icon: "🔬", status: "aktif", desc: "Warta sains mutakhir & teknologi viral dari sudut pandang kimia yang mudah dipahami.", action: "Jelajahi warta" },
    { slug: "ielts",         title: "Persiapan IELTS", path: "/ielts/index.html",        icon: "🌐", status: "aktif", desc: "Suite lengkap persiapan IELTS Bands 6.5–7.5: 6 modul akademik (Parafrase, Grammar, 160+ Kosakata C1, Writing, Reading, Speaking) & Kalkulator Skor resmi.", action: "Mulai belajar" }
];


