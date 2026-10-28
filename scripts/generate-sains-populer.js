#!/usr/bin/env node
// =================================================================
// scripts/generate-sains-populer.js
// Generator Otomatis Artikel Sains Populer Berwawasan Kimia SMA
// Menggunakan Google Gemini API Free Tier & GitHub Actions
// =================================================================

const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error('❌ Error: Environment variable GEMINI_API_KEY tidak ditemukan!');
    console.error('Pastikan Anda sudah menambahkan GEMINI_API_KEY di GitHub Repository Secrets.');
    process.exit(1);
}

const ARTIKEL_FILE_PATH = path.resolve(__dirname, '../sains-populer/data/artikel.js');

// Database rujukan materi kimia SMA yang valid di web ini
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

async function callGemini(prompt, model = 'gemini-2.0-flash') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
    const payload = {
        contents: [
            {
                role: "user",
                parts: [{ text: prompt }]
            }
        ],
        generationConfig: {
            temperature: 0.7,
            topP: 0.95,
            responseMimeType: "application/json"
        }
    };

    console.log(`🤖 Menghubungi Google Gemini API (${model})...`);
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Gemini API Error (status ${res.status}): ${errText}`);
    }

    const data = await res.json();
    const candidate = data.candidates && data.candidates[0];
    if (!candidate || !candidate.content || !candidate.content.parts) {
        throw new Error('Respon Gemini tidak memiliki konten valid.');
    }

    const text = candidate.content.parts[0].text;
    return JSON.parse(text);
}

async function main() {
    console.log('🚀 Memulai generator otomatis warta Sains Populer...');

    if (!fs.existsSync(ARTIKEL_FILE_PATH)) {
        console.error(`File tidak ditemukan: ${ARTIKEL_FILE_PATH}`);
        process.exit(1);
    }

    // Baca artikel lama untuk mengecek topik yang sudah ada
    const contentOld = fs.readFileSync(ARTIKEL_FILE_PATH, 'utf8');
    const existingSlugs = [];
    const slugMatches = contentOld.matchAll(/slug:\s*["']([^"']+)["']/g);
    for (const match of slugMatches) {
        existingSlugs.push(match[1]);
    }
    console.log(`📚 Ditemukan ${existingSlugs.length} artikel lama di database:`, existingSlugs.join(', '));

    const today = new Date();
    const tglFormatted = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    const prompt = `
Kamu adalah editor sains populer dan kimiawan komunikator sains terbaik di Indonesia.
Tugasmu adalah membuat TEPAT 2 ARTIKEL BARU untuk portal "Sains Populer Berwawasan Kimia" di web pembelajaran SMA: https://kimia.ajarkita.my.id/sains-populer/

SYARAT TOPIK ARTIKEL:
1. Topik harus berupa sains mutakhir, teknologi viral dunia, eksplorasi luar angkasa, biomedis, material canggih, atau energi masa depan (Contoh ide topik: Baterai Garam / Sodium-Ion ramah lingkungan, Kaca Peluru Polikarbonat, Fusi Nuklir Matahari Buatan, Enzim Pemakan Sampah Plastik, Cat Super-Putih pendingin bumi, Baju Antariksa Aerogel, dll).
2. DILARANG membuat topik yang sudah ada berikut ini: [${existingSlugs.join(', ')}].
3. Ulas topik tersebut DARI SUDUT PANDANG KIMIA yang kontekstual, menarik, mengasyikkan, dan mudah dipahami siswa SMA.
4. Gunakan bahasa Indonesia yang santun, hidup, populer, dan ilmiah. Hindari rumus yang terlalu membingungkan tanpa analogi dunia nyata.

REFERENSI MATERI KIMIA SMA (Pilih 2 materi yang paling relevan untuk setiap artikel):
${JSON.stringify(MATERI_VALID_SMA, null, 2)}

FORMAT OUTPUT (HARUS TEPAT ARRAY OF OBJECTS JSON):
Kembalikan JSON array berisi 2 objek dengan struktur persis seperti berikut:
[
  {
    "id": "slug-unik-huruf-kecil-dan-tanda-minus",
    "slug": "slug-unik-huruf-kecil-dan-tanda-minus",
    "title": "Judul Menarik & Viral yang Memancing Rasa Ingin Tahu",
    "subtitle": "Subjudul penjelasan singkat tapi padat intisari kimianya",
    "category": "Teknologi Masa Depan" (atau "Nobel & Terobosan Sains" / "Material Masa Depan"),
    "categoryColor": "amber" (atau "teal" / "indigo"),
    "icon": "Emoji relevan (1 emoji, misal: 🔋 / ☀️ / 🧪 / 🚀)",
    "publishDate": "${tglFormatted}",
    "readTime": "4 menit baca",
    "author": "Tim Litbang KimiaInteraktif",
    "coverImage": {
      "type": "gradient",
      "bg": "from-slate-900 via-slate-800 to-teal-950",
      "badge": "Topik Singkat",
      "icon": "Emoji relevan"
    },
    "summary": "Ringkasan 2-3 kalimat menarik pembuka artikel.",
    "tahukahKamu": "Fakta molekuler unik yang mengejutkan tentang kimia di balik fenomena ini.",
    "kaitanMateri": [
      {
        "kelas": "Kelas XI",
        "bab": "Nama Bab Relevan dari daftar di atas",
        "desc": "Kaitan konsep kimia di artikel ini dengan materi tersebut",
        "url": "/kelas-11/..." (URL persis dari daftar rujukan di atas)
      }
    ],
    "contentHtml": "Konten artikel lengkap berbentuk tag HTML (gunakan <p class='lead ...'>, <p class='text-slate-700 leading-relaxed mb-4'>, <h3 class='text-xl font-bold text-slate-900 mt-8 mb-4'>, <ul>, <li>, dan kartu highlight)",
    "diskusi": "Pertanyaan pemantik nalar kritis untuk didiskusikan siswa"
  }
]
`;

    let newArticles = [];
    try {
        newArticles = await callGemini(prompt, 'gemini-2.0-flash');
    } catch (err) {
        console.warn('⚠️ Percobaan dengan gemini-2.0-flash gagal, mencoba fallback ke gemini-1.5-flash:', err.message);
        newArticles = await callGemini(prompt, 'gemini-1.5-flash');
    }

    if (!Array.isArray(newArticles) || newArticles.length === 0) {
        throw new Error('Hasil generate bukan array artikel yang valid!');
    }

    console.log(`✅ Berhasil menghasilkan ${newArticles.length} artikel baru:`);
    newArticles.forEach((a, i) => {
        console.log(`   ${i + 1}. ${a.title} (${a.slug})`);
    });

    // Injeksi artikel baru ke sains-populer/data/artikel.js
    // Pola: const DAFTAR_ARTIKEL_SAINS = [ ... ];
    const arrayMatch = contentOld.match(/(const\s+DAFTAR_ARTIKEL_SAINS\s*=\s*\[)([\s\S]*?)(\];)/);
    if (!arrayMatch) {
        throw new Error('Gagal menemukan array DAFTAR_ARTIKEL_SAINS di artikel.js!');
    }

    const jsonStringList = newArticles.map(art => {
        return '    ' + JSON.stringify(art, null, 4).replace(/\n/g, '\n    ') + ',';
    }).join('\n\n');

    const updatedContent = contentOld.replace(
        /(const\s+DAFTAR_ARTIKEL_SAINS\s*=\s*\[\r?\n)/,
        `$1${jsonStringList}\n`
    );

    fs.writeFileSync(ARTIKEL_FILE_PATH, updatedContent, 'utf8');
    console.log('🎉 Sukses memperbarui sains-populer/data/artikel.js dengan artikel terbaru!');
}

main().catch(err => {
    console.error('❌ Gagal menjalankan generator:', err);
    process.exit(1);
});
