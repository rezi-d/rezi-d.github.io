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
            }
        ]
    },
    "11": {
        label: "Kelas XI",
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
            }
        ]
    },
    "12": {
        label: "Kelas XII",
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
            }
        ]
    }
};

// Modul di luar struktur Kelas/Bab (tampil sebagai menu terpisah di header)
const modulLain = [
    { slug: "tracker-snbt", title: "Tracker SNBT",    path: "/snbt/tracker.html",      icon: "🎯", status: "aktif", desc: "Study Tracker 7 subtes UTBK SNBT 2026, checklist materi & evaluasi skor try out.", action: "Buka tracker" },
    { slug: "snbt",         title: "Simulasi SNBT",   path: "/snbt/index.html",        icon: "📚", status: "aktif", desc: "Simulasi Tes Potensi Skolastik (TPS) dan Literasi SNBT resmi interaktif.", action: "Mulai simulasi" },
    { slug: "tka",          title: "Simulasi TKA",    path: "/tka/index.html",         icon: "📝", status: "aktif", desc: "Simulasi CBT 13 mata pelajaran TKA SMA resmi BPPP lengkap dengan timer.", action: "Mulai simulasi" },
    { slug: "prediksi-ptn", title: "Prediksi PTN",    path: "/tka/prediksi-ptn.html",  icon: "🎯", status: "aktif", desc: "Rekomendasi jurusan PTN berdasarkan akumulasi nilai latihan Anda.", action: "Cek prediksi" },
    { slug: "sains-populer", title: "Sains Populer",  path: "/sains-populer/index.html", icon: "🔬", status: "aktif", desc: "Warta sains mutakhir & teknologi viral dari sudut pandang kimia yang mudah dipahami.", action: "Jelajahi warta" }
];


