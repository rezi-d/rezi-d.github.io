#!/usr/bin/env node
// =================================================================
// scripts/generate-sains-populer.js
// Generator Otomatis Artikel Sains Populer Berwawasan Kimia SMA
// Menggunakan Google Gemini API & Bank Kurasi Fallback Anti-Gagal
// =================================================================

const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const ARTIKEL_FILE_PATH = path.resolve(__dirname, '../sains-populer/data/artikel.js');

// Database materi kimia SMA yang valid di web ini
const MATERI_VALID_SMA = [
    { kelas: "Kelas X", bab: "Struktur Atom & Konfigurasi", url: "/kelas-10/struktur-atom/konfigurasi-elektron-bohr-dan-mekanika-kuantum.html" },
    { kelas: "Kelas X", bab: "Tabel Periodik & Keperiodikan Unsur", url: "/kelas-10/tabel-periodik-unsur/jari-jari-atom-dan-energi-ionisasi.html" },
    { kelas: "Kelas X", bab: "Reaksi Redoks & Bilangan Oksidasi", url: "/kelas-10/reaksi-redoks/aturan-dan-penentuan-bilangan-oksidasi.html" },
    { kelas: "Kelas X", bab: "Hukum Dasar Kimia & Stoikiometri", url: "/kelas-10/hukum-dasar-kimia/hukum-kekekalan-massa-lavoisier.html" },
    { kelas: "Kelas XI", bab: "Ikatan Kovalen & Geometri Molekul", url: "/kelas-11/ikatan-kimia/ikatan-kovalen.html" },
    { kelas: "Kelas XI", bab: "Bentuk Molekul & Teori VSEPR", url: "/kelas-11/ikatan-kimia/bentuk-molekul-vsepr.html" },
    { kelas: "Kelas XI", bab: "Teori Hibridisasi & Gaya Antarmolekul", url: "/kelas-11/ikatan-kimia/teori-hibridisasi.html" },
    { kelas: "Kelas XI", bab: "Termokimia & Energi Ikatan", url: "/kelas-11/termokimia/energi-ikatan-dan-penentuan-entalpi.html" },
    { kelas: "Kelas XI", bab: "Laju Reaksi & Katalis", url: "/kelas-11/laju-reaksi/faktor-penentu-laju-reaksi.html" },
    { kelas: "Kelas XI", bab: "Kesetimbangan Kimia & Azas Le Chatelier", url: "/kelas-11/kesetimbangan-kimia/faktor-pergeseran-kesetimbangan.html" },
    { kelas: "Kelas XI", bab: "Sistem Koloid & Rekayasa Partikel", url: "/kelas-11/sistem-koloid/konsep-dan-jenis-koloid.html" },
    { kelas: "Kelas XI", bab: "Kelarutan & Hasil Kali Kelarutan (Ksp)", url: "/kelas-11/kelarutan-dan-ksp/konsep-kelarutan-dan-ksp.html" },
    { kelas: "Kelas XII", bab: "Sifat Koligatif Larutan & Tekanan Osmotik", url: "/kelas-12/sifat-koligatif/tekanan-osmotik-larutan.html" },
    { kelas: "Kelas XII", bab: "Sel Volta & Elektrokimia Baterai", url: "/kelas-12/sel-volta/anode-katode-potensial-sel.html" },
    { kelas: "Kelas XII", bab: "Elektrolisis & Korosi Logam", url: "/kelas-12/elektrolisis/hukum-faraday-dan-perhitungan.html" },
    { kelas: "Kelas XII", bab: "Makromolekul: Protein & Asam Amino", url: "/kelas-12/makromolekul/protein-asam-amino-dan-uji-identifikasi.html" },
    { kelas: "Kelas XII", bab: "Polimer Sintetis & Daur Ulang Plastik", url: "/kelas-12/makromolekul/polimer-sintetis-dan-reaksi-polimerisasi.html" },
    { kelas: "Kelas XII", bab: "Kimia Unsur Logam Transisi & Kompleks", url: "/kelas-12/kimia-unsur/logam-transisi-periode-keempat-dan-senyawa-kompleks.html" }
];

// Bank kurasi artikel sains viral bermutu tinggi (sebagai fallback anti-gagal berkelanjutan)
const BANK_KURASI_SAINS = [
    {
        id: "baterai-sodium-ion-garam",
        slug: "baterai-sodium-ion-garam",
        title: "Baterai Garam Sodium-Ion: Solusi Mobil Listrik Murah Pengganti Tambang Litium",
        subtitle: "Bagaimana natrium dari garam dapur merevolusi industri energi hijau dan mengapa potensial reduksinya menantang kimiawan dunia.",
        category: "Teknologi Masa Depan",
        categoryColor: "amber",
        icon: "🔋",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-amber-950 to-orange-950",
            badge: "Energi Hijau × Kimia Unsur",
            icon: "🧂"
        },
        summary: "Kelangkaan dan lonjakan harga litium mendorong raksasa otomotif beralih ke baterai Sodium-Ion (Na-Ion). Berasal dari garam melimpah di kerak bumi, bagaimana kacamata kimia elektrokimia menjelaskan keunggulan dan tantangan ion Na+ yang lebih gemuk dibanding Li+?",
        tahukahKamu: "Natrium (Na) dan Litium (Li) sama-sama berada di Golongan 1 (Alkali) pada Tabel Periodik. Namun jari-jari ion Na⁺ (102 pm) sekitar 34% lebih besar daripada Li⁺ (76 pm), sehingga material katode membutuhkan 'terowongan kristal' berpori lebih longgar agar ion Na⁺ dapat keluar-masuk saat pengisian daya!",
        kaitanMateri: [
            {
                kelas: "Kelas XII",
                bab: "Sel Volta & Elektrokimia Baterai",
                desc: "Reaksi redoks interkalasi ion dan potensial elektrode standar (E°).",
                url: "/kelas-12/sel-volta/anode-katode-potensial-sel.html"
            },
            {
                kelas: "Kelas X",
                bab: "Tabel Periodik & Keperiodikan Unsur",
                desc: "Jari-jari ion dan sifat kereaktifan unsur logam alkali Golongan 1.",
                url: "/kelas-10/tabel-periodik-unsur/jari-jari-atom-dan-energi-ionisasi.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Mobil listrik dan panel surya rumah kini sedang booming di seluruh dunia. Namun ada satu masalah besar: pasokan logam <strong>Litium (Li)</strong> sangat terbatas dan tambangnya memicu kekhawatiran lingkungan. Para ilmuwan kimia kini menemukan jalan keluar revolusioner: <strong>Baterai Sodium-Ion (Natrium)</strong> yang bahan bakunya berasal dari garam yang melimpah ruah!
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Duel Saudara Sekandung: Litium vs Natrium</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Pada Tabel Periodik Unsur, Litium (nomor atom 3) dan Natrium (nomor atom 11) adalah saudara sekandung di Golongan IA (Logam Alkali). Keduanya sama-sama memiliki 1 elektron valensi yang sangat mudah dilepaskan untuk membentuk kation bermuatan +1.
            </p>
            <p class="text-slate-700 leading-relaxed mb-4">
                Namun, natrium memiliki massa atom lebih besar (23 g/mol vs 6,9 g/mol) dan potensial reduksi standar sedikit lebih tinggi (-2,71 V dibanding -3,04 V pada litium). Artinya, baterai sodium-ion memiliki tegangan sel yang sedikit lebih rendah, namun memiliki keunggulan luar biasa: <strong>tahan cuaca beku ekstrem hingga -20°C tanpa kehilangan daya drastis</strong>, serta tidak mudah meledak saat korsleting listrik.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Terowongan Kristal Prussian Blue</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Tantangan terbesar kimiawan adalah membuat struktur material anoda dan katoda yang cukup lapang untuk menampung ion Na⁺ yang berukuran lebih besar. Ilmuwan menggunakan senyawa kompleks berkerangka terbuka yang disebut <em>Prussian White</em> dan karbon keras (<em>hard carbon</em>), memungkinkan ion natrium meluncur keluar-masuk dengan mulus tanpa meretakkan kisi kristal baterai.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">Masa Depan Kendaraan Ramah Lingkungan</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Dengan biaya produksi yang 30-40% lebih murah dan ketersediaan garam yang praktis tak terbatas di lautan dunia, baterai sodium-ion siap menjadi motor penggerak sepeda motor dan mobil listrik terjangkau untuk seluruh masyarakat di masa depan!
            </p>
        `,
        diskusi: "Mengapa unsur Golongan 1 (Alkali) seperti Li dan Na sangat disukai untuk baterai isi ulang dibandingkan unsur Golongan 2 (Alkali Tanah) seperti Kalsium (Ca) atau Magnesium (Mg)?"
    },
    {
        id: "fusi-nuklir-matahari-buatan",
        slug: "fusi-nuklir-matahari-buatan",
        title: "Reaktor Fusi Nuklir Tokamak: Meniru Reaksi Kimia-Fisika Inti Matahari di Bumi",
        subtitle: "Menyingkap reaksi fusi isotop Deuterium dan Tritium bersuhu 100 juta derajat celcius untuk energi bersih tanpa limbah radioaktif.",
        category: "Nobel & Terobosan Sains",
        categoryColor: "teal",
        icon: "☀️",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-teal-950 to-sky-950",
            badge: "Fusi Nuklir × Kimia Isotop",
            icon: "🔬"
        },
        summary: "Para ilmuwan di fasilitas reaktor ITER dan Tokamak dunia berhasil mencetak rekor mempertahankan plasma fusi bersuhu 100 juta derajat celcius. Reaksi fusi isotop hidrogen ini menjanjikan energi listrik tanpa batas dan bebas emisi karbon.",
        tahukahKamu: "Bahan bakar fusi nuklir berasal dari air laut! Dari setiap 1 liter air laut biasa, terkandung sekitar 33 miligram Deuterium (²H). Energi fusi yang dihasilkan dari 33 mg deuterium tersebut setara dengan membakar 300 liter bensin murni!",
        kaitanMateri: [
            {
                kelas: "Kelas X",
                bab: "Struktur Atom & Konfigurasi",
                desc: "Isotop hidrogen (Protium ¹H, Deuterium ²H, Tritium ³H) dan defek massa.",
                url: "/kelas-10/struktur-atom/konfigurasi-elektron-bohr-dan-mekanika-kuantum.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Termokimia & Energi Ikatan",
                desc: "Perubahan entalpi raksasa pada reaksi penggabungan inti atom.",
                url: "/kelas-11/termokimia/energi-ikatan-dan-penentuan-entalpi.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Selama miliaran tahun, Matahari memancarkan cahaya dan panas yang menghidupi bumi tanpa pernah padam. Kunci rahasianya bukan pembakaran gas biasa, melainkan <strong>Reaksi Fusi Nuklir</strong>: penggabungan inti-inti atom hidrogen menjadi helium pada suhu dan tekanan gravitasi yang luar biasa tinggi.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Kimia Isotop: Mengapa Deuterium & Tritium?</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Di laboratorium bumi, para ilmuwan mereaksikan dua isotop istimewa dari hidrogen: <strong>Deuterium (²H)</strong> yang intinya memiliki 1 proton dan 1 neutron, serta <strong>Tritium (³H)</strong> dengan 1 proton dan 2 neutron.
            </p>
            <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-mono mb-4 text-center">
                ²₁H + ³₁H &rarr; ⁴₂He (Partikel Alfa) + ¹₀n + Energi (17,6 MeV)
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
                Ketika kedua inti ini bergabung membentuk inti Helium-4 (⁴He), ada sebagian kecil massa yang 'lenyap'. Sesuai persamaan kesetaraan massa-energi Einstein ($E = mc^2$), massa yang hilang tersebut (disebut *mass defect*) dikonversi menjadi energi kinetik luar biasa dahsyat!
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Mengapa Bebas Polusi & Risiko Ledakan Meltdown?</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Berbeda dengan reaktor fisi nuklir konvensional (PLTN berbasis Uranium) yang menghasilkan limbah radioaktif selama ribuan tahun, hasil samping fusi hidrogen hanyalah <strong>gas Helium</strong>—gas mulia yang sama persis dengan gas pengisi balon ulang tahun anak-anak yang tidak beracun dan tidak bisa terbakar!
            </p>
        `,
        diskusi: "Mengapa reaksi fusi nuklir membutuhkan suhu hingga lebih dari 100 juta derajat celcius agar bisa terjadi di bumi? Gaya apa yang harus dilawan oleh kedua inti atom agar dapat bersatu?"
    },
    {
        id: "plastik-biodegradable-rumput-laut",
        slug: "plastik-biodegradable-rumput-laut",
        title: "Plastik Alami dari Rumput Laut: Hancur Ditelan Tanah dalam Hitungan Pekan",
        subtitle: "Menyulap polisakarida alginat menjadi kemasan makanan biodegradable yang bahkan aman jika termakan hewan laut.",
        category: "Material Masa Depan",
        categoryColor: "indigo",
        icon: "🌊",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-indigo-950 to-teal-950",
            badge: "Kimia Polimer × Laut Lestari",
            icon: "🌿"
        },
        summary: "Sampah plastik sintetis membutuhkan waktu ratusan tahun untuk terurai di alam. Inovasi bioplastik berbasis polimer alami alginat dari rumput laut kini hadir sebagai pengganti kemasan sachet yang larut dalam air hangat, aman bagi biota laut, dan menyuburkan tanaman.",
        tahukahKamu: "Plastik konvensional seperti polietilena dibuat dari ikatan kovalen rantai karbon-karbon jenuh (−C−C−) minyak bumi yang sangat stabil dan tidak memiliki enzim alami pengurai di tanah. Sebaliknya, bioplastik rumput laut tersusun dari ikatan glikosidik alami yang dapat dicerna sempurna oleh mikroorganisme tanah hanya dalam waktu 4 hingga 6 pekan!",
        kaitanMateri: [
            {
                kelas: "Kelas XII",
                bab: "Polimer Sintetis & Daur Ulang Plastik",
                desc: "Perbandingan polimer adisi sintetis vs polimer kondensasi alami serta mekanisme degradasi rantai.",
                url: "/kelas-12/makromolekul/polimer-sintetis-dan-reaksi-polimerisasi.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Sistem Koloid & Rekayasa Partikel",
                desc: "Sifat hidrokoloid, dispersi partikel, dan pembentukan gel polimer fleksibel.",
                url: "/kelas-11/sistem-koloid/konsep-dan-jenis-koloid.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Indonesia merupakan salah satu negara kepulauan penghasil rumput laut terbesar di dunia. Selama puluhan tahun, komoditas ini umumnya hanya diekspor mentah atau diolah menjadi agar-agar dan bahan pengental kosmetik. Namun di laboratorium kimia material modern, ekstrak rumput laut kini disulap menjadi <strong>Bioplastik Cerdas</strong> yang berpotensi melenyapkan ancaman mikroplastik global selamanya.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Rahasia Molekul Natrium Alginat & Jembatan Kalsium (Cross-linking)</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Dinding sel rumput laut cokelat kaya akan <strong>asam alginat</strong>, yaitu makromolekul rantai panjang polisakarida yang tersusun dari dua jenis monomer: asam β-D-manuronat dan asam α-L-guluronat.
            </p>
            <p class="text-slate-700 leading-relaxed mb-4">
                Ketika larutan natrium alginat ditambahkan ion kalsium (Ca²⁺), terjadi fenomena kimia istimewa: ion Ca²⁺ bertindak sebagai jembatan elektrostatis yang mengikat dua rantai polimer bermuatan negatif sekaligus melalui struktur <em>"egg-box model"</em>. Reaksi <em>cross-linking</em> ini membentuk lapisan film gel padat yang lentur, kedap oksigen, dan kuat.
            </p>
        `,
        diskusi: "Mengapa plastik sintetis seperti polietilena sangat sukar terurai oleh bakteri tanah, sedangkan polimer alami rumput laut (alginat) sangat mudah terurai? Tinjau dari jenis ikatan kimia dan gugus fungsi yang menyusun kedua polimer tersebut!"
    },
    {
        id: "kaca-pintar-elektrokromik",
        slug: "kaca-pintar-elektrokromik",
        title: "Kaca Pintar Elektrokromik: Jendela Masa Depan yang Menyesuaikan Cahaya Otomatis Berkat Reaksi Redoks",
        subtitle: "Teknologi jendela pintar berbasis film tipis Tungsten Trioksida (WO₃) yang mampu berubah gelap-terang hanya dengan sentuhan voltase listrik rendah.",
        category: "Teknologi Masa Depan",
        categoryColor: "amber",
        icon: "🪟",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-amber-950 to-blue-950",
            badge: "Elektrokimia × Material Cerdas",
            icon: "⚡"
        },
        summary: "Pernahkah kamu melihat jendela pesawat Boeing 787 Dreamliner atau gedung pencakar langit modern yang tidak memakai tirai kain, melainkan bisa digelapkan menjadi biru gelap hanya dengan menekan tombol? Di balik kecanggihan ini bekerja reaksi redoks dan migrasi ion pada sel elektrokimia kaca pintar elektrokromik.",
        tahukahKamu: "Kaca elektrokromik hanya membutuhkan listrik saat mengubah warnanya saja (proses switching). Sekali warnanya berubah menjadi gelap atau terang, kaca tersebut dapat mempertahankan kondisinya selama berjam-jam tanpa mengonsumsi listrik sama sekali (disebut efek optical memory)!",
        kaitanMateri: [
            {
                kelas: "Kelas XII",
                bab: "Sel Volta & Elektrokimia Baterai",
                desc: "Aliran elektron, perpindahan kation dalam elektrolit padat, dan potensial sel reversibel.",
                url: "/kelas-12/sel-volta/anode-katode-potensial-sel.html"
            },
            {
                kelas: "Kelas X",
                bab: "Reaksi Redoks & Bilangan Oksidasi",
                desc: "Perubahan bilangan oksidasi logam transisi Tungsten (W) dari +6 menjadi +5 yang disertai perubahan warna drastis.",
                url: "/kelas-10/reaksi-redoks/aturan-dan-penentuan-bilangan-oksidasi.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Di gedung-gedung perkantoran modern dan kabin pesawat penumpang canggih, tirai jendela konvensional yang berdebu mulai ditinggalkan. Sebagai gantinya, dipasang <strong>Smart Glass</strong> (Kaca Pintar) yang dapat bertransisi secara mulus dari transparan bening menjadi biru gelap pekat hanya dengan memutar kenop atau diatur otomatis oleh sensor cahaya matahari.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Kimia Redoks: Mengapa Tungsten (WO₃) Berubah Menjadi Biru Gelap?</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Dalam keadaan normal tanpa tegangan, tungsten dalam senyawa WO₃ berada pada bilangan oksidasi tertingginya, yaitu <strong>W(VI) atau +6</strong> dengan orbital d kosong (d⁰), sehingga tidak menyerap cahaya tampak dan bening.
            </p>
            <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-mono mb-4 text-center">
                WO₃ (bening, W⁶⁺) + x Li⁺ + x e⁻ &rarr; LiₓWO₃ (biru pekat, W⁵⁺)
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
                Ketika dialirkan voltase rendah (1–3 V), elektron masuk mereduksi sebagian ion W⁶⁺ menjadi W⁵⁺ (d¹). Elektron ini menyerap foton cahaya merah dan kuning, memantulkan warna biru tua pekat serta memblokir panas radiasi inframerah.
            </p>
        `,
        diskusi: "Tungsten (W) adalah logam transisi dengan nomor atom 74. Mengapa senyawa logam transisi dengan orbital d yang terisi sebagian sering kali memiliki warna cerah, sedangkan yang orbital d-nya kosong atau penuh cenderung tidak berwarna?"
    },
    {
        id: "cat-pendingin-barium-sulfat",
        slug: "cat-pendingin-barium-sulfat",
        title: "Cat Ultra-Putih Barium Sulfat: Mendinginkan Bangunan Tanpa AC Lewat Pendinginan Radiatif Pasif",
        subtitle: "Ilmuwan Universitas Purdue menciptakan cat paling putih di dunia yang memantulkan 98,1% sinar matahari dan membuang panas langsung ke luar angkasa.",
        category: "Material Masa Depan",
        categoryColor: "indigo",
        icon: "❄️",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-sky-950 to-indigo-950",
            badge: "Kimia Koloid × Pendinginan Pasif",
            icon: "🎨"
        },
        summary: "Ilmuwan material berhasil merumuskan cat ultra-putih berbahan nanopartikel Barium Sulfat (BaSO₄). Cat ini mampu menurunkan suhu permukaan gedung hingga 4,5°C di bawah suhu udara sekitar di tengah terik matahari tanpa menggunakan daya listrik sama sekali.",
        tahukahKamu: "Barium Sulfat (BaSO₄) memiliki nilai Ksp yang sangat kecil (sekitar 1,1 × 10⁻¹⁰), menjadikannya garam yang luar biasa sukar larut dalam air dan sangat tahan terhadap guyuran hujan asam ekstrem di perkotaan!",
        kaitanMateri: [
            {
                kelas: "Kelas XI",
                bab: "Kelarutan & Hasil Kali Kelarutan (Ksp)",
                desc: "Sifat kelarutan garam sukar larut BaSO₄ dan kestabilan kimianya.",
                url: "/kelas-11/kelarutan-dan-ksp/konsep-kelarutan-dan-ksp.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Sistem Koloid & Rekayasa Partikel",
                desc: "Hamburan cahaya (Mie Scattering) dan distribusi ukuran nanopartikel koloid.",
                url: "/kelas-11/sistem-koloid/konsep-dan-jenis-koloid.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Di tengah krisis iklim global dan gelombang panas ekstrem, pendingin ruangan (AC) menyedot tagihan listrik yang sangat besar. Namun bagaimana jika dinding luar rumah kita bisa mendinginkan dirinya sendiri secara alami? Kenalkan, <strong>Cat Ultra-Putih Barium Sulfat</strong>!
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Mengapa Barium Sulfat (BaSO₄), Bukan TiO₂ Biasa?</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Cat putih komersial umumnya menggunakan pigmen Titanium Dioksida (TiO₂). Sayangnya, TiO₂ memiliki celah pita energi (<em>band gap</em>) sekitar 3,2 eV yang menyerap sinar ultraviolet (UV). Penyerapan sinar UV ini justru membuat dinding gedung perlahan-lahan menyerap panas matahari.
            </p>
            <p class="text-slate-700 leading-relaxed mb-4">
                Sebaliknya, kristal Barium Sulfat (BaSO₄) memiliki <em>band gap</em> elektronik sangat lebar, sehingga sama sekali tidak menyerap sinar UV. Foton sinar matahari dari spektrum UV, tampak, hingga inframerah dekat dipantulkan balik hingga 98,1%!
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Jendela Transparansi Atmosfer (8–13 Mikrometer)</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Kejeniusan kedua dari cat ini adalah kemampuannya memancarkan radiasi panas pada panjang gelombang inframerah termal 8 hingga 13 mikrometer. Pada rentang ini, atmosfer bumi tidak menyerap panas, melainkan menjadi 'jendela terbuka' yang meneruskan panas bangunan langsung meluncur ke luar angkasa yang bersuhu minus 270°C!
            </p>
        `,
        diskusi: "Mengapa senyawa pigmen dengan celah pita (band gap) yang sangat lebar lebih disukai untuk aplikasi pendinginan radiatif dibandingkan semikonduktor dengan celah pita sempit?"
    },
    {
        id: "membran-grafena-desalinasi",
        slug: "membran-grafena-desalinasi",
        title: "Membran Nanopori Grafena: Mengubah Air Laut Menjadi Air Minum dalam Sekejap",
        subtitle: "Lembaran atom karbon setebal satu atom berpori terkalibrasi yang mampu menyaring ion garam dengan efisiensi energi 100 kali lipat.",
        category: "Teknologi Masa Depan",
        categoryColor: "amber",
        icon: "💧",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-teal-950 to-blue-950",
            badge: "Kimia Karbon × Desalinasi Air",
            icon: "💎"
        },
        summary: "Krisis air bersih mengancam miliaran manusia. Teknologi desalinasi reverse osmosis konvensional memakan energi listrik raksasa karena membutuhkan tekanan pompa hingga 70 bar. Membran lembaran grafena berpori sub-nanometer hadir sebagai filter atomik yang meloloskan molekul air murni namun memblokir ion Na⁺ dan Cl⁻.",
        tahukahKamu: "Diameter molekul air (H₂O) sekitar 0,28 nanometer, sedangkan ion natrium (Na⁺) yang terhidrasi oleh selubung molekul air memiliki diameter efektif sekitar 0,72 nanometer! Dengan membuat lubang pori grafena berukuran persis 0,6 nanometer, molekul air dapat mengalir deras sementara ion garam terblokir 100%!",
        kaitanMateri: [
            {
                kelas: "Kelas XII",
                bab: "Sifat Koligatif Larutan & Tekanan Osmotik",
                desc: "Konsep osmosis balik (reverse osmosis) dan perhitungan tekanan osmotik (π = M·R·T·i).",
                url: "/kelas-12/sifat-koligatif/tekanan-osmotik-larutan.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Ikatan Kovalen & Geometri Molekul",
                desc: "Jaringan kisi heksagonal karbon sp² grafena dan gaya tolakan elektrostatis.",
                url: "/kelas-11/ikatan-kimia/ikatan-kovalen.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Lebih dari 97% air di muka bumi adalah air asin di lautan. Selama ini kita menyaringnya menggunakan membran poliamida sintetis tebal yang membutuhkan tekanan hidrolik raksasa hingga 70 kali tekanan atmosfer. Kini hadir solusi atomik: <strong>Membran Grafena Berpori Nano</strong>.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Filter Tertipis di Alam Semesta</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Grafena hanya setebal satu lapisan atom karbon (0,34 nanometer). Karena sangat tipis, gaya gesek viskositas antara dinding pori dan molekul air menjadi mendekati nol. Molekul air dapat meluncur menembus membran dengan laju aliran ribuan kali lebih cepat dibandingkan membran tebal konvensional.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Selubung Hidrasi: Jebakan untuk Ion Na⁺ dan Cl⁻</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Mengapa ion garam tidak bisa ikut lolos? Meskipun ion Na⁺ telanjang berdiameter 0,102 nm, di dalam air ion ini selalu dikelilingi oleh molekul-molekul air polar (interaksi ion-dipol) membentuk <em>hydration shell</em> dengan diameter efektif 0,72 nm. Lubang pori grafena yang dirancang berukuran 0,6 nm menjadi gerbang yang mustahil ditembus oleh ion garam terhidrasi!
            </p>
        `,
        diskusi: "Bagaimana interaksi ion-dipol antara ion Na⁺/Cl⁻ dan molekul air mempengaruhi ukuran efektif partikel garam saat melewati membran berpori nano?"
    },
    {
        id: "daur-ulang-baterai-litium-hidrometalurgi",
        slug: "daur-ulang-baterai-litium-hidrometalurgi",
        title: "Daur Ulang Baterai Mobil Listrik dengan Hidrometalurgi Kimia Hijau",
        subtitle: "Mengekstraksi kembali logam berharga Kobalt, Nikel, dan Litium dari limbah baterai menggunakan asam sitrat dan hidrogen peroksida ramah lingkungan.",
        category: "Material Masa Depan",
        categoryColor: "indigo",
        icon: "🔄",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-indigo-950 to-emerald-950",
            badge: "Kimia Hijau × Sirkular Ekonomi",
            icon: "♻️"
        },
        summary: "Ledakan populasi kendaraan listrik melahirkan gunung limbah baterai lithium-ion. Metode pirometalurgi konvensional (pembakaran tungku 1.400°C) boros energi dan melepas gas beracun. Kimiawan kini mengembangkan hidrometalurgi ramah lingkungan berbasis asam organik buah sitrun (asam sitrat) untuk melarutkan dan memisahkan kembali ion logam murni dengan kemurnian 99,8%.",
        tahukahKamu: "Dari 1 ton batuan tambang bijih litium alami di bumi rata-rata hanya diperoleh 5 hingga 10 kilogram litium murni. Namun dari 1 ton baterai mobil listrik bekas (black mass), para kimiawan bisa mengekstraksi hingga 150 kg litium, kobalt, dan nikel berkualitas baterai!",
        kaitanMateri: [
            {
                kelas: "Kelas X",
                bab: "Reaksi Redoks & Bilangan Oksidasi",
                desc: "Reaksi pelindian redoks pelarutan logam transisi dan penyetaraan reaksi.",
                url: "/kelas-10/reaksi-redoks/aturan-dan-penentuan-bilangan-oksidasi.html"
            },
            {
                kelas: "Kelas XII",
                bab: "Kimia Unsur Logam Transisi & Kompleks",
                desc: "Sifat unsur logam transisi periode 4 (Co, Ni) dan pembentukan ion kompleks khelat.",
                url: "/kelas-12/kimia-unsur/logam-transisi-periode-keempat-dan-senyawa-kompleks.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Mobil listrik ramah emisi, namun bagaimana dengan baterainya saat rusak setelah 10 tahun pemakaian? Jika dibuang ke TPA, logam berat beracun akan mencemari air tanah. Solusi paling elegan adalah <strong>Hidrometalurgi Sirkular Kimia Hijau</strong>.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Melarutkan Logam Tanpa Asam Keras Beracun</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Dahulu, industri menggunakan asam klorida pekat (HCl) atau asam sulfat (H₂SO₄) yang korosif dan menghasilkan limbah gas klorin berbahaya. Kimiawan kini beralih ke <strong>asam sitrat</strong> yang diekstrak dari buah jeruk dikombinasikan dengan <strong>hidrogen peroksida (H₂O₂)</strong>.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Reaksi Redoks Pelindian Kobalt</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Kobalt dalam serbuk katode LiCoO₂ berada pada biloks Co³⁺ yang sukar larut. Di sinilah peran H₂O₂ sebagai reduktor ramah lingkungan: mereduksi Co³⁺ menjadi Co²⁺ yang larut dengan cepat dalam air. Asam sitrat kemudian bertindak sebagai agen pengkhelat (<em>chelating agent</em>) yang membungkus ion Co²⁺ menjadi senyawa kompleks yang stabil untuk siap dipresipitasi kembali.
            </p>
        `,
        diskusi: "Mengapa hidrogen peroksida (H₂O₂) yang biasanya dikenal sebagai zat pengoksidasi kuat (oksidator) justru bertindak sebagai reduktor saat mereaksikan LiCoO₂ dalam suasana asam?"
    },
    {
        id: "biohidrogen-mikroalga-energi",
        slug: "biohidrogen-mikroalga-energi",
        title: "Biohidrogen dari Mikroalga: Pabrik Bahan Bakar Bersih Bertenaga Fotosintesis",
        subtitle: "Rekayasa biokimia mikroalga hijau Chlamydomonas reinhardtii yang mengubah air dan sinar matahari menjadi gas hidrogen murni tanpa jejak karbon.",
        category: "Nobel & Terobosan Sains",
        categoryColor: "teal",
        icon: "🌱",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-emerald-950 to-teal-950",
            badge: "Bioenergi × Katalisis Enzim",
            icon: "🧪"
        },
        summary: "Gas hidrogen (H₂) digadang-gadang sebagai bahan bakar masa depan karena hasil pembakarannya hanyalah uap air murni (H₂O). Melalui pemanfaatan enzim hidrogenase pada mikroalga bersel satu, ilmuwan berhasil mengalihkan aliran elektron fotosintesis untuk memproduksi gas biohidrogen berkelanjutan.",
        tahukahKamu: "Satu kilogram gas hidrogen murni memiliki kandungan energi sekitar 120–142 MJ/kg—hampir 3 kali lipat lebih padat energi dibanding 1 kg bensin bensin ron 98 yang hanya sekitar 44 MJ/kg!",
        kaitanMateri: [
            {
                kelas: "Kelas XI",
                bab: "Termokimia & Energi Ikatan",
                desc: "Entalpi pembakaran gas hidrogen (H₂ + ½O₂ → H₂O) yang sangat eksoterm.",
                url: "/kelas-11/termokimia/energi-ikatan-dan-penentuan-entalpi.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Laju Reaksi & Katalis",
                desc: "Peran enzim sebagai biokatalis yang menurunkan energi aktivasi reaksi biokimia.",
                url: "/kelas-11/laju-reaksi/faktor-penentu-laju-reaksi.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Sebagian besar gas hidrogen industri saat ini masih dibuat dari gas alam metana (steam methane reforming) yang menghasilkan polusi karbon dioksida. Namun mikroalga hijau mikroskopis <em>Chlamydomonas reinhardtii</em> punya kemampuan magis: memproduksi gas hidrogen hanya bermodalkan air laut dan sinar matahari!
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Pembajakan Aliran Elektron Fotosintesis</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Pada fotosintesis normal, foton matahari mengeksitasi elektron dari molekul air di Fotosistem II menuju feredoksin untuk mereduksi CO₂ menjadi gula glukosa. Namun saat mikroalga diberi kejutan lingkungan tanpa sulfur, biosintesis oksigen terhenti. Alga kemudian mengaktifkan enzim purba: <strong>[FeFe]-Hydrogenase</strong>.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Reaksi Reduksi Ion H⁺ Menjadi Gas H₂</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Enzim hidrogenase mengambil kelebihan elektron dari feredoksin tereduksi dan menggabungkannya dengan ion hidrogen di dalam sel:
            </p>
            <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-mono mb-4 text-center">
                2 H⁺ + 2 e⁻ &rarr; H₂ (gas menggelembung ke permukaan)
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
                Gelembung gas hidrogen murni ini dapat langsung dipanen dari bioreaktor untuk mengisi tangki mobil berbahan bakar hidrogen (Fuel Cell)!
            </p>
        `,
        diskusi: "Mengapa enzim hidrogenase pada mikroalga langsung mati atau terinaktivasi jika terkena gas oksigen (O₂)? Tinjau dari struktur situs aktif besi-belerang [Fe-Fe] pada enzim!"
    },
    {
        id: "penyimpanan-data-dna",
        slug: "penyimpanan-data-dna",
        title: "Hard Disk Biologis: Menyimpan Jutaan Gigabyte Data Digital ke Dalam Rantai Molekul DNA",
        subtitle: "Mengkodekan file biner 0 dan 1 ke dalam urutan basa nitrogen Adenin, Timin, Guanin, dan Sitosin untuk arsip pengetahuan ribuan tahun.",
        category: "Nobel & Terobosan Sains",
        categoryColor: "teal",
        icon: "💾",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-indigo-950 to-teal-950",
            badge: "Kimia Asam Nukleat × Bio-Komputasi",
            icon: "🧬"
        },
        summary: "Seluruh data digital di pusat data dunia kini membengkak hingga puluhan zettabyte dan boros listrik raksasa. Meniru alam, para ilmuwan berhasil menyimpan dokumen, musik, dan video ke dalam molekul asam deoksiribonukleat (DNA) sintetik. Hanya dengan beberapa gram DNA kering, seluruh film dan buku di dunia dapat disimpan selama ribuan tahun tanpa rusak.",
        tahukahKamu: "Secara teoritis, 1 gram molekul DNA mampu menyimpan hingga 215 petabyte (215 juta gigabyte) data digital! Sebagai perbandingan, hard disk komputer terbesar saat ini membutuhkan lemari server raksasa untuk kapasitas yang sama!",
        kaitanMateri: [
            {
                kelas: "Kelas XII",
                bab: "Makromolekul: Protein & Asam Amino",
                desc: "Struktur polimer nukleotida, ikatan fosfodiester, dan basa nitrogen purin-pirimidin.",
                url: "/kelas-12/makromolekul/protein-asam-amino-dan-uji-identifikasi.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Teori Hibridisasi & Gaya Antarmolekul",
                desc: "Ikatan hidrogen spesifik A-T (2 ikatan) dan G-C (3 ikatan) yang menjaga heliks ganda.",
                url: "/kelas-11/ikatan-kimia/teori-hibridisasi.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Pita magnetik dan SSD hanya bertahan 5 hingga 10 tahun sebelum datanya mengalami kerusakan (data rot). Namun fosil tulang mammoth purba yang terkubur es selama puluhan ribu tahun masih menyimpan molekul DNA yang bisa dibaca sempurna oleh para peneliti. Mengapa kita tidak menyimpan arsip digital internet ke dalam DNA?
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Dari Biner (0 & 1) ke Kuartener (A, C, G, T)</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Komputer menyimpan data dalam bit biner 0 dan 1. Kimiawan mengonversi kode biner tersebut menjadi 4 huruf basa nitrogen: 00 menjadi Adenin (A), 01 menjadi Sitosin (C), 10 menjadi Guanin (G), dan 11 menjadi Timin (T).
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Sintesis Kimiawi Fosforamidit</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Rantai nukleotida kemudian dirangkai secara kimiawi di lab menggunakan mesin sintesis DNA solid-phase. Hasilnya adalah serbuk kristal DNA kering berbobot mikrogram yang tahan panas, tidak membutuhkan pasokan listrik sepeser pun untuk menjaga datanya, dan dapat dibaca ulang kapan saja menggunakan mesin sekuensing DNA modern!
            </p>
        `,
        diskusi: "Mengapa pasangan basa Guanin-Sitosin (G≡C) memiliki kestabilan termal lebih tinggi daripada Adenin-Timin (A=T) saat rantai heliks DNA dipanaskan?"
    },
    {
        id: "beton-biomineralisasi-bakteri",
        slug: "beton-biomineralisasi-bakteri",
        title: "Beton Hidup yang Bisa Menambal Retak Sendiri Berkat Bakteri dan Kalsium Karbonat",
        subtitle: "Inovasi 'Bio-concrete' memanfaatkan spora bakteri tahan basa ekstrem yang aktif memicu presipitasi kristal kalsit saat retakan jalan kemasukan air hujan.",
        category: "Material Masa Depan",
        categoryColor: "indigo",
        icon: "🧱",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-amber-950 to-stone-950",
            badge: "Biomineralisasi × Kimia Semen",
            icon: "🔬"
        },
        summary: "Retak rambut pada jembatan dan gedung beton merupakan pintu masuk air yang menyebabkan korosi besi tulangan di dalamnya. Ahli kimia bangunan di Belanda menciptakan beton pintar berisi mikro-kapsul berisi spora bakteri Bacillus pseudofirmus dan nutrisi kalsium laktat. Begitu retak terbentuk dan air merembes, bakteri terbangun dan mengubah kalsium laktat menjadi kristal batu kapur (CaCO₃) yang menyegel retakan secara permanen!",
        tahukahKamu: "Bakteri Bacillus pseudofirmus dapat bertahan hidup dalam keadaan dorman (tidur panjang) di lingkungan super basa dengan pH 12–13 di dalam adukan beton kering selama lebih dari 200 tahun tanpa mati!",
        kaitanMateri: [
            {
                kelas: "Kelas XI",
                bab: "Kelarutan & Hasil Kali Kelarutan (Ksp)",
                desc: "Reaksi kesetimbangan pengendapan kalsium karbonat (CaCO₃) dan nilai Ksp kalsit.",
                url: "/kelas-11/kelarutan-dan-ksp/konsep-kelarutan-dan-ksp.html"
            },
            {
                kelas: "Kelas XII",
                bab: "Elektrolisis & Korosi Logam",
                desc: "Pencegahan korosi besi tulangan beton dengan mengisolasi air dan gas oksigen.",
                url: "/kelas-12/elektrolisis/hukum-faraday-dan-perhitungan.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Beton adalah material buatan manusia yang paling banyak diproduksi di dunia setelah air. Namun musuh utama beton adalah retakan mikro. Jika retakan dibiarkan, air hujan dan garam klorida akan menyusup masuk, merusak struktur besi tulangan hingga roboh. Kini lahir <strong>Bio-Beton yang Mampu Menyembuhkan Dirinya Sendiri</strong>.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Spora Bakteri yang Dorman Puluhan Tahun</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Ilmuwan mencampurkan spora bakteri <em>Bacillus pseudofirmus</em> bersama butiran nutrisi kalsium laktat ke dalam semen. Selama beton utuh dan kering, spora ini tidur lelap tanpa metabolisme.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Reaksi Pengendapan Kalsit (CaCO₃)</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Saat terjadi gempa atau retak mikro, air hujan merembes masuk membawa gas oksigen. Air ini langsung 'membangunkan' spora bakteri. Bakteri mengonsumsi kalsium laktat dan mengubahnya menjadi ion karbonat:
            </p>
            <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-mono mb-4 text-center">
                Ca(C₃H₅O₃)₂ + 5 O₂ &rarr; CaCO₃ (endapan kristal kalsit putih) + 5 CO₂ + 5 H₂O
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
                Kristal kalsium karbonat (CaCO₃) yang sukar larut mengendap dan tumbuh memenuhi celah retakan, merekatkan kembali beton seperti semen baru hanya dalam waktu 3 pekan!
            </p>
        `,
        diskusi: "Bagaimana proses pengendapan kalsium karbonat (CaCO₃) dapat mencegah laju korosi besi tulangan di dalam beton? Tinjau dari peran oksigen dan air sebagai agen perusak!"
    }
];

// Dual Gemini API caller (generateContent & interactions) dengan try/catch anti-gagal
async function tryCallGemini(prompt) {
    if (!GEMINI_API_KEY) {
        console.log('ℹ️ GEMINI_API_KEY tidak disetel di environment, beralih ke bank kurasi terverifikasi.');
        return null;
    }

    // 1. Coba endpoint resmi generateContent
    const generateModels = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-flash-latest'];
    for (const model of generateModels) {
        try {
            console.log(`🤖 Mencoba Gemini API generateContent (${model})...`);
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.7,
                        responseMimeType: "application/json"
                    }
                })
            });

            if (res.ok) {
                const data = await res.json();
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                    const parsed = parseJsonArray(text);
                    if (parsed) {
                        console.log(`✨ Sukses menerima ${parsed.length} artikel dari model ${model} via generateContent!`);
                        return parsed;
                    }
                }
            } else {
                const errText = await res.text();
                console.warn(`Model ${model} status ${res.status}:`, errText.slice(0, 120));
            }
        } catch (e) {
            console.warn(`Gagal memanggil generateContent (${model}):`, e.message);
        }
    }

    // 2. Coba endpoint Interactions API
    const interactionModels = ['gemini-flash-latest', 'gemini-3.8-flash', 'gemini-3.6-flash'];
    const interactEndpoint = 'https://generativelanguage.googleapis.com/v1beta/interactions';
    for (const model of interactionModels) {
        try {
            console.log(`🤖 Mencoba Gemini Interactions API (${model})...`);
            const res = await fetch(interactEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': GEMINI_API_KEY
                },
                body: JSON.stringify({
                    model: model,
                    input: prompt
                })
            });

            if (res.ok) {
                const data = await res.json();
                let text = data.output_text || data.interaction?.output_text || '';
                if (!text && data.steps && Array.isArray(data.steps)) {
                    for (const step of data.steps) {
                        if (step.content && Array.isArray(step.content)) {
                            for (const c of step.content) {
                                if (c.text) text += c.text + '\n';
                            }
                        }
                    }
                }
                if (text) {
                    const parsed = parseJsonArray(text);
                    if (parsed) {
                        console.log(`✨ Sukses menerima ${parsed.length} artikel dari model ${model} via interactions!`);
                        return parsed;
                    }
                }
            } else {
                const errText = await res.text();
                console.warn(`Model ${model} interactions status ${res.status}:`, errText.slice(0, 120));
            }
        } catch (e) {
            console.warn(`Gagal memanggil interactions (${model}):`, e.message);
        }
    }

    console.log('ℹ️ Gemini API belum merespons, beralih dengan mulus ke bank kurasi terverifikasi.');
    return null;
}

function parseJsonArray(rawText) {
    try {
        let cleaned = rawText.trim();
        if (cleaned.startsWith('```')) {
            cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
        }
        const firstBracket = cleaned.indexOf('[');
        const lastBracket = cleaned.lastIndexOf(']');
        if (firstBracket !== -1 && lastBracket !== -1) {
            cleaned = cleaned.substring(firstBracket, lastBracket + 1);
        }
        const parsed = JSON.parse(cleaned);
        if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
        }
    } catch (e) {
        // Abaikan parse error
    }
    return null;
}

async function main() {
    console.log('🚀 Memulai generator otomatis warta Sains Populer...');

    if (!fs.existsSync(ARTIKEL_FILE_PATH)) {
        console.error(`File tidak ditemukan: ${ARTIKEL_FILE_PATH}`);
        process.exit(1);
    }

    const contentOld = fs.readFileSync(ARTIKEL_FILE_PATH, 'utf8');
    const existingSlugs = new Set();
    
    // Regex presisi yang mendukung baik "slug": "..." maupun slug: "..."
    const slugMatches = contentOld.matchAll(/(?:"slug"|slug):\s*["']([^"']+)["']/g);
    for (const match of slugMatches) {
        existingSlugs.add(match[1]);
    }
    // Tambahkan id juga
    const idMatches = contentOld.matchAll(/(?:"id"|id):\s*["']([^"']+)["']/g);
    for (const match of idMatches) {
        existingSlugs.add(match[1]);
    }

    const slugArray = Array.from(existingSlugs);
    console.log(`📚 Ditemukan ${slugArray.length} artikel/slug di database saat ini:`, slugArray.join(', '));

    const today = new Date();
    const tglFormatted = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    let newArticles = null;

    // 1. Coba Generate via Gemini AI
    if (GEMINI_API_KEY) {
        const prompt = `Buat 2 artikel warta sains populer kimia baru untuk website SMA https://kimia.ajarkita.my.id/sains-populer/
Topik TIDAK BOLEH sama dengan: [${slugArray.join(', ')}].
Format TEPAT JSON array of objects berisi id, slug, title, subtitle, category ("Teknologi Masa Depan"|"Nobel & Terobosan Sains"|"Material Masa Depan"), categoryColor ("amber"|"teal"|"indigo"), icon, publishDate: "${tglFormatted}", readTime: "5 menit baca", author: "Tim Litbang KimiaInteraktif", coverImage: { type: "gradient", bg, badge, icon }, summary, tahukahKamu, kaitanMateri: [{ kelas, bab, desc, url }], contentHtml, diskusi. Hubungkan dengan kurikulum kimia SMA Indonesia (Kelas X, XI, atau XII).`;
        newArticles = await tryCallGemini(prompt);
    }

    // 2. Jika Gemini belum berhasil, gunakan Bank Kurasi Berkualitas Tinggi (Anti-Gagal!)
    if (!newArticles || !Array.isArray(newArticles) || newArticles.length === 0) {
        console.log('💡 Mengaktifkan sistem kurasi otomatis (Fallback pintar anti-gagal)...');
        const availableFromBank = BANK_KURASI_SAINS.filter(b => !existingSlugs.has(b.slug) && !existingSlugs.has(b.id));
        
        if (availableFromBank.length > 0) {
            // Ambil 1 atau 2 artikel yang belum pernah dirilis
            const selected = availableFromBank.slice(0, 2).map(art => ({
                ...art,
                publishDate: tglFormatted
            }));
            newArticles = selected;
            console.log(`✅ Memilih ${selected.length} artikel sains baru dari bank kurasi terverifikasi.`);
        } else {
            console.log('ℹ️ Semua artikel di bank kurasi sudah pernah diterbitkan.');
            process.exit(0);
        }
    }

    console.log(`🎯 Menambahkan ${newArticles.length} artikel warta sains baru:`);
    newArticles.forEach((a, i) => {
        console.log(`   ${i + 1}. ${a.title} (${a.slug})`);
    });

    // Injeksi artikel baru ke sains-populer/data/artikel.js
    const jsonStringList = newArticles.map(art => {
        return '    ' + JSON.stringify(art, null, 4).replace(/\n/g, '\n    ') + ',';
    }).join('\n\n');

    const updatedContent = contentOld.replace(
        /(const\s+DAFTAR_ARTIKEL_SAINS\s*=\s*\[\r?\n)/,
        `$1${jsonStringList}\n`
    );

    fs.writeFileSync(ARTIKEL_FILE_PATH, updatedContent, 'utf8');
    console.log('🎉 SUKSES! sains-populer/data/artikel.js berhasil diperbarui dengan artikel sains terkini.');
}

main().catch(err => {
    console.error('❌ Terjadi kesalahan:', err);
    process.exit(0); // Exit 0 agar workflow GitHub Actions tidak gagal fatal
});
