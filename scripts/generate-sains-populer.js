#!/usr/bin/env node
// =================================================================
// scripts/generate-sains-populer.js
// Generator Otomatis Artikel Sains Populer Berwawasan Kimia SMA
// Menggunakan Google Gemini Interactions API & Fallback Kurasi
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
    { kelas: "Kelas XII", bab: "Sel Volta & Elektrokimia Baterai", url: "/kelas-12/sel-volta/anode-katode-potensial-sel.html" },
    { kelas: "Kelas XII", bab: "Elektrolisis & Korosi Logam", url: "/kelas-12/elektrolisis/hukum-faraday-dan-perhitungan.html" },
    { kelas: "Kelas XII", bab: "Makromolekul: Protein & Asam Amino", url: "/kelas-12/makromolekul/protein-asam-amino-dan-uji-identifikasi.html" },
    { kelas: "Kelas XII", bab: "Polimer Sintetis & Daur Ulang Plastik", url: "/kelas-12/makromolekul/polimer-sintetis-dan-reaksi-polimerisasi.html" },
    { kelas: "Kelas XII", bab: "Kimia Unsur Logam Transisi & Kompleks", url: "/kelas-12/kimia-unsur/logam-transisi-periode-keempat-dan-senyawa-kompleks.html" }
];

// Bank kurasi artikel sains viral bermutu tinggi (sebagai fallback anti-gagal)
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
        readTime: "4 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-indigo-950 to-teal-950",
            badge: "Kimia Polimer × Laut Lestari",
            icon: "🌿"
        },
        summary: "Sampah plastik sintetis membutuhkan waktu ratusan tahun untuk terurai. Inovasi bioplastik berbasis polimer alami alginat rumput laut kini hadir sebagai pengganti kemasan sachet yang larut dalam air hangat dan menyuburkan tanaman.",
        tahukahKamu: "Plastik konvensional dibuat dari ikatan kovalen rantai karbon-karbon jenuh (−C−C−) minyak bumi yang tidak dikenali oleh enzim mikroba pengurai. Sebaliknya, bioplastik rumput laut memiliki ikatan glikosidik yang mudah dicerna bakteri tanah hanya dalam waktu 4 hingga 6 pekan!",
        kaitanMateri: [
            {
                kelas: "Kelas XII",
                bab: "Polimer Sintetis & Daur Ulang Plastik",
                desc: "Perbandingan polimer adisi sintetis vs polimer kondensasi alami.",
                url: "/kelas-12/makromolekul/polimer-sintetis-dan-reaksi-polimerisasi.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Sistem Koloid & Rekayasa Partikel",
                desc: "Sifat hidrokoloid dan pembentukan gel polimer fleksibel.",
                url: "/kelas-11/sistem-koloid/konsep-dan-jenis-koloid.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Indonesia merupakan salah satu negara penghasil rumput laut terbesar di dunia. Selama ini rumput laut hanya diolah menjadi agar-agar atau bahan kosmetik. Namun di tangan para ahli kimia material, ekstrak rumput laut kini disulap menjadi <strong>Bioplastik Cerdas</strong> yang bisa menghentikan krisis sampah plastik global.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Rahasia Molekul Natrium Alginat</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Dinding sel rumput laut cokelat kaya akan <strong>asam alginat</strong>, yaitu polimer rantai panjang alami (polisakarida) yang tersusun dari monomer asam D-manuronat dan L-guluronat.
            </p>
            <p class="text-slate-700 leading-relaxed mb-4">
                Ketika larutan natrium alginat ditambahkan sedikit ion kalsium (Ca²⁺), terjadi fenomena kimia yang menakjubkan: ion kalsium bertindak sebagai 'jembatan pengikat silang' (*cross-linking*) antar-rantai polimer, membentuk struktur gel yang lentur, kedap udara, dan kuat layaknya kantong plastik belanjaan!
            </p>
        `,
        diskusi: "Bagaimana penambahan senyawa pemlastis alami (plasticizer) seperti gliserol dapat mempengaruhi jarak antar-rantai polimer alginat dan tingkat kelenturan plastiknya?"
    }
];

// Panggilan Gemini via Interactions API (Resmi)
async function tryCallGemini(prompt) {
    if (!GEMINI_API_KEY) {
        console.log('ℹ️ GEMINI_API_KEY kosong, beralih ke bank kurasi.');
        return null;
    }

    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/interactions';
    const modelsToTry = ['gemini-flash-latest', 'gemini-3.8-flash', 'gemini-3.6-flash'];

    for (const model of modelsToTry) {
        try {
            console.log(`🤖 Mencoba Gemini Interactions API (${model})...`);
            const res = await fetch(endpoint, {
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

            if (!res.ok) {
                const err = await res.text();
                console.warn(`Model ${model} respon status ${res.status}:`, err.slice(0, 150));
                continue;
            }

            const data = await res.json();
            let text = '';
            if (data.output_text) {
                text = data.output_text;
            } else if (data.interaction && data.interaction.output_text) {
                text = data.interaction.output_text;
            } else if (data.steps && Array.isArray(data.steps)) {
                for (const step of data.steps) {
                    if (step.content && Array.isArray(step.content)) {
                        for (const c of step.content) {
                            if (c.text) text += c.text + '\n';
                        }
                    }
                }
            }

            if (!text.trim()) continue;

            let cleaned = text.trim();
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
                console.log(`✨ Sukses menerima ${parsed.length} artikel dari model ${model}!`);
                return parsed;
            }
        } catch (e) {
            console.warn(`Gagal memproses model ${model}:`, e.message);
        }
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
    const existingSlugs = [];
    const slugMatches = contentOld.matchAll(/slug:\s*["']([^"']+)["']/g);
    for (const match of slugMatches) {
        existingSlugs.push(match[1]);
    }
    console.log(`📚 Ditemukan ${existingSlugs.length} artikel di database saat ini:`, existingSlugs.join(', '));

    const today = new Date();
    const tglFormatted = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    let newArticles = null;

    // 1. Coba Generate via Gemini AI Interactions API
    if (GEMINI_API_KEY) {
        const prompt = `Buat 2 artikel warta sains populer kimia baru untuk website SMA https://kimia.ajarkita.my.id/sains-populer/
Topik TIDAK BOLEH sama dengan: [${existingSlugs.join(', ')}].
Format TEPAT JSON array of objects berisi id, slug, title, subtitle, category, categoryColor, icon, publishDate: "${tglFormatted}", readTime, author: "Tim Litbang KimiaInteraktif", coverImage, summary, tahukahKamu, kaitanMateri, contentHtml, diskusi.`;
        newArticles = await tryCallGemini(prompt);
    }

    // 2. Jika Gemini belum berhasil, gunakan Bank Kurasi Berkualitas Tinggi (Anti-Gagal!)
    if (!newArticles || !Array.isArray(newArticles) || newArticles.length === 0) {
        console.log('💡 Mengaktifkan sistem kurasi otomatis (Fallback pintar anti-gagal)...');
        const availableFromBank = BANK_KURASI_SAINS.filter(b => !existingSlugs.includes(b.slug));
        
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
    console.error('❌ Terjadi kesalahan fatal:', err);
    process.exit(1);
});
