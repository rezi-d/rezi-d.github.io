// =================================================================
// snbt/js/snbt-data.js
// Single Source of Truth - Bank Soal SNBT / UTBK Terkurasi
// Arsitektur Modular: Mudah ditambah paket baru kapan saja
// =================================================================

const snbtSubtes = [
    {
        id: 'pu',
        nama: 'Penalaran Umum (PU)',
        kategori: 'Tes Potensi Skolastik (TPS)',
        deskripsi: 'Menguji kemampuan bernalar secara induktif, deduktif, serta analisis argumen, klaim, premis, dan logika verbal.',
        durasiStandarMenit: 30,
        icon: '🧠',
        warna: 'emerald',
        paketList: [
            { id: 1, judul: 'Paket 1: Logika Argumen & Proposisi', status: 'tersedia', jumlahSoal: 10, durasiMenit: 15, tahun: '2025/2026' },
            { id: 2, judul: 'Paket 2: Penalaran Deduktif & Silogisme', status: 'segera', jumlahSoal: 12, durasiMenit: 18, tahun: '2025/2026' },
            { id: 3, judul: 'Paket 3: Penalaran Kuantitatif & Pola Bilangan', status: 'segera', jumlahSoal: 10, durasiMenit: 15, tahun: '2025/2026' }
        ]
    },
    {
        id: 'pbm',
        nama: 'Pemahaman Bacaan & Menulis (PBM)',
        kategori: 'Tes Potensi Skolastik (TPS)',
        deskripsi: 'Menguji kemampuan memahami isi bacaan, koherensi paragraf, ejaan PUEBI/EYD, konjungsi, dan tata bahasa baku.',
        durasiStandarMenit: 25,
        icon: '📖',
        warna: 'blue',
        paketList: [
            { id: 1, judul: 'Paket 1: Pemahaman Teks & Sintaksis EYD', status: 'tersedia', jumlahSoal: 15, durasiMenit: 25, tahun: '2025/2026' },
            { id: 2, judul: 'Paket 2: Struktur Paragraf & Tata Makna', status: 'segera', jumlahSoal: 15, durasiMenit: 25, tahun: '2025/2026' }
        ]
    },
    {
        id: 'ppu',
        nama: 'Pengetahuan & Pemahaman Umum (PPU)',
        kategori: 'Tes Potensi Skolastik (TPS)',
        deskripsi: 'Menguji pemahaman kosakata ilmiah, makna kontekstual kalimat, relasi kata, dan kelogisan ide dalam teks.',
        durasiStandarMenit: 15,
        icon: '🔍',
        warna: 'purple',
        paketList: [
            { id: 1, judul: 'Paket 1: Analisis Tata Makna & Kosakata', status: 'segera', jumlahSoal: 15, durasiMenit: 15, tahun: '2025/2026' }
        ]
    },
    {
        id: 'pk',
        nama: 'Pengetahuan Kuantitatif (PK)',
        kategori: 'Tes Potensi Skolastik (TPS)',
        deskripsi: 'Menguji kemampuan aljabar, aritmetika, geometri, statistika dasar, dan penalaran kecukupan data (1) & (2).',
        durasiStandarMenit: 20,
        icon: '📐',
        warna: 'amber',
        paketList: [
            { id: 1, judul: 'Paket 1: Aljabar, Aritmetika & Kecukupan Data', status: 'segera', jumlahSoal: 15, durasiMenit: 20, tahun: '2025/2026' }
        ]
    },
    {
        id: 'lbi',
        nama: 'Literasi Bahasa Indonesia',
        kategori: 'Tes Literasi',
        deskripsi: 'Menguji kompetensi membaca kritis, mengevaluasi fakta vs opini, dan menyimpulkan esensi teks panjang.',
        durasiStandarMenit: 45,
        icon: '🇮🇩',
        warna: 'rose',
        paketList: [
            { id: 1, judul: 'Paket 1: Literasi Teks Naratif & Informasi', status: 'segera', jumlahSoal: 20, durasiMenit: 30, tahun: '2025/2026' }
        ]
    },
    {
        id: 'lbe',
        nama: 'Literasi Bahasa Inggris',
        kategori: 'Tes Literasi',
        deskripsi: 'Reading comprehension, author purpose, tone analysis, inference questions, and critical passage understanding.',
        durasiStandarMenit: 30,
        icon: '🇬🇧',
        warna: 'teal',
        paketList: [
            { id: 1, judul: 'Paket 1: Academic Reading & Inferences', status: 'segera', jumlahSoal: 20, durasiMenit: 30, tahun: '2025/2026' }
        ]
    },
    {
        id: 'pm',
        nama: 'Penalaran Matematika (PM)',
        kategori: 'Tes Literasi',
        deskripsi: 'Menguji penalaran pemecahan masalah dunia nyata dengan permodelan matematika terapan dan analisis data.',
        durasiStandarMenit: 45,
        icon: '📊',
        warna: 'indigo',
        paketList: [
            { id: 1, judul: 'Paket 1: Pemodelan Data & Situasi Nyata', status: 'segera', jumlahSoal: 20, durasiMenit: 45, tahun: '2025/2026' }
        ]
    }
];

// Bank Soal per Subtes dan Paket
const snbtBankSoal = {
    // -----------------------------------------------------------------
    // PENALARAN UMUM - PAKET 1 (Sumber: Bank Soal UTBK PU Argumen Set 1)
    // -----------------------------------------------------------------
    'pu_1': [
        {
            id: 1,
            topik: 'Dasar Logika: Pernyataan vs Nonpernyataan',
            soal: 'Perhatikan kalimat berikut:<br><br><div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">"Balikpapan adalah sebuah kota di Indonesia."</div><br>Kalimat tersebut merupakan ....',
            options: [
                { id: 'A', text: 'Pernyataan' },
                { id: 'B', text: 'Nonpernyataan' }
            ],
            kunci: 'A',
            pembahasan: `
                <strong>Analisis Logika: Konsep Pernyataan (Proposisi)</strong><br>
                Dalam logika formal, <strong>pernyataan (proposisi)</strong> adalah kalimat deklaratif yang bernilai <em>benar</em> atau <em>salah</em>, tetapi tidak bisa bernilai keduanya sekaligus.<br><br>
                Kalimat <em>"Balikpapan adalah sebuah kota di Indonesia"</em> adalah kalimat berita yang dapat diverifikasi fakta kebenarannya secara objektif (bernilai benar).<br><br>
                <strong>Kesimpulan:</strong> Kalimat tersebut merupakan <strong>Pernyataan</strong> (Opsi A).
            `
        },
        {
            id: 2,
            topik: 'Dasar Logika: Pernyataan vs Nonpernyataan',
            soal: 'Perhatikan kalimat berikut:<br><br><div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">"Tutup pintunya!"</div><br>Kalimat tersebut merupakan ....',
            options: [
                { id: 'A', text: 'Pernyataan' },
                { id: 'B', text: 'Nonpernyataan' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Analisis Logika: Kalimat Imperatif</strong><br>
                Kalimat <em>"Tutup pintunya!"</em> merupakan kalimat perintah (imperatif). Kalimat perintah tidak memiliki nilai kebenaran objektif (tidak bisa dinilai apakah "benar" atau "salah").<br><br>
                Oleh karena itu, kalimat perintah termasuk kategori <strong>Nonpernyataan</strong>.<br><br>
                <strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>B</strong>.
            `
        },
        {
            id: 3,
            topik: 'Dasar Logika: Kalimat Subjektif / Opini',
            soal: 'Perhatikan kalimat berikut:<br><br><div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">"Badan gue gemuk banget nih."</div><br>Kalimat tersebut merupakan ....',
            options: [
                { id: 'A', text: 'Pernyataan' },
                { id: 'B', text: 'Nonpernyataan' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Analisis Logika: Parameter Objektif vs Subjektif</strong><br>
                Kata <em>"gemuk banget"</em> bersifat relatif, emotif, dan subjektif karena tidak memiliki tolok ukur/standar metrik yang pasti (berbeda dengan ukuran berat badan terukur, misalnya "Berat badan saya 85 kg").<br><br>
                Dalam tinjauan logika pengantar proposisi, opini atau keluhan subjektif tanpa ukuran objektif dianggap <strong>Nonpernyataan</strong> karena nilai kebenarannya tidak bisa ditentukan secara pasti dan universal.<br><br>
                <strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>B</strong>.
            `
        },
        {
            id: 4,
            topik: 'Klasifikasi Proposisi Logika',
            soal: `Perhatikan kalimat-kalimat di bawah ini!<br>
            <ol class="list-decimal list-inside space-y-1 my-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800">
                <li>Jawa Barat terletak di sebelah barat pulau Jawa.</li>
                <li>Waktu yang dibutuhkan Bumi untuk berotasi adalah 23 jam, 56 menit, dan 4 detik.</li>
                <li>Mengapa badan saya panas dan kepala saya pusing, ya?</li>
                <li>Bunga mawar berwarna merah, sementara bunga violet berwarna biru.</li>
                <li>Saya berharap Dharma menyukai pekerjaan barunya.</li>
            </ol>
            Yang <strong>bukan</strong> termasuk pernyataan adalah ….`,
            options: [
                { id: 'A', text: '1' },
                { id: 'B', text: '3' },
                { id: 'C', text: '5' },
                { id: 'D', text: '2 dan 5' },
                { id: 'E', text: '3 dan 5' }
            ],
            kunci: 'E',
            pembahasan: `
                <strong>Analisis Kalimat demi Kalimat:</strong><br>
                • <strong>Kalimat 1:</strong> Kalimat deklaratif faktual (bernilai salah, namun tetap merupakan proposisi/pernyataan).<br>
                • <strong>Kalimat 2:</strong> Kalimat deklaratif faktual tentang sains (pernyataan).<br>
                • <strong>Kalimat 3:</strong> Kalimat tanya (interogatif) &rarr; <em>Bukan pernyataan</em>.<br>
                • <strong>Kalimat 4:</strong> Kalimat deklaratif majemuk (pernyataan).<br>
                • <strong>Kalimat 5:</strong> Kalimat harapan/keinginan (optatif subjektif) &rarr; <em>Bukan pernyataan</em>.<br><br>
                <strong>Kesimpulan:</strong> Kalimat yang bukan pernyataan adalah <strong>3 dan 5</strong> (Opsi E).
            `
        },
        {
            id: 5,
            topik: 'Identifikasi Proposisi Bernilai Kebenaran',
            soal: `Perhatikan kalimat-kalimat di bawah ini!<br>
            <ol class="list-decimal list-inside space-y-1 my-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800">
                <li>Rebus telur selama kurang lebih 5 menit.</li>
                <li>Katakan padanya saya sedang keluar sebentar.</li>
                <li>Tidak ada bilangan prima yang tidak merupakan angka ganjil.</li>
                <li>Masa jabatan presiden Indonesia adalah 5 tahun dan dapat dipilih kembali hanya untuk satu kali masa jabatan.</li>
                <li>Akhirnya saya bisa lulus PTN tahun ini.</li>
            </ol>
            Yang termasuk pernyataan adalah ….`,
            options: [
                { id: 'A', text: '1, 2 dan 3' },
                { id: 'B', text: '4, 5, dan 1' },
                { id: 'C', text: '2, 3, dan 4' },
                { id: 'D', text: '4, 3, dan 5' },
                { id: 'E', text: '2, 5, dan 1' }
            ],
            kunci: 'D',
            pembahasan: `
                <strong>Analisis Kalimat:</strong><br>
                • <strong>Kalimat 1 & 2:</strong> Kalimat instruksi / perintah (imperatif) &rarr; <em>Nonpernyataan</em>.<br>
                • <strong>Kalimat 3:</strong> Proposisi matematika deklaratif (dapat diuji nilai kebenarannya: bernilai salah karena ada bilangan 2 yang genap) &rarr; <em>Pernyataan</em>.<br>
                • <strong>Kalimat 4:</strong> Proposisi hukum perundang-undangan (Pasal 7 UUD 1945) &rarr; <em>Pernyataan</em>.<br>
                • <strong>Kalimat 5:</strong> Pernyataan faktual tentang status kelulusan penutur &rarr; <em>Pernyataan</em>.<br><br>
                Maka yang termasuk pernyataan adalah <strong>3, 4, dan 5</strong> (tercantum pada opsi 4, 3, dan 5).<br>
                <strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>D</strong>.
            `
        },
        {
            id: 6,
            topik: 'Struktur Argumen: Klaim vs Premis',
            soal: `Perhatikan kutipan berikut:<br>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 my-2">
                "(1) Semua orang harus mengonsumsi vitamin. (2) Vitamin dapat meningkatkan imunitas tubuh."
            </div>
            Manakah pernyataan yang tepat berdasarkan kedua kalimat di atas?`,
            options: [
                { id: 'A', text: 'Kedua kalimat merupakan argumen. Kalimat 2 adalah klaim, sedangkan 1 adalah premis pendukung.' },
                { id: 'B', text: 'Kedua kalimat merupakan argumen. Kalimat 1 adalah klaim, sedangkan 2 adalah premis pendukung.' },
                { id: 'C', text: 'Kedua kalimat di atas merupakan nonargumen karena kedua kalimat merupakan nonpernyataan.' },
                { id: 'D', text: 'Kedua kalimat di atas merupakan nonargumen karena kalimat 1 adalah klaim dan kalimat 2 bukanlah premis pendukung.' },
                { id: 'E', text: 'Kedua kalimat di atas merupakan nonargumen karena kalimat 2 adalah premis pendukung dan kalimat 1 bukanlah klaim.' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Struktur Argumen dalam Logika:</strong><br>
                Sebuah argumen terdiri dari <strong>Klaim/Kesimpulan</strong> (gagasan atau anjuran yang ingin dibuktikan) dan <strong>Premis</strong> (alasan/bukti yang menopang klaim tersebut).<br><br>
                • Kalimat (1): <em>"Semua orang harus mengonsumsi vitamin"</em> adalah kesimpulan atau anjuran utama &rarr; <strong>Klaim</strong>.<br>
                • Kalimat (2): <em>"Vitamin dapat meningkatkan imunitas tubuh"</em> memberikan alasan ilmiah pendukung mengapa klaim (1) dianjurkan &rarr; <strong>Premis Pendukung</strong>.<br><br>
                <strong>Kesimpulan:</strong> Kedua kalimat membentuk argumen di mana kalimat 1 adalah klaim dan kalimat 2 adalah premis pendukung (Opsi B).
            `
        },
        {
            id: 7,
            topik: 'Penalaran Induktif & Argumen Pengalaman',
            soal: `Perhatikan kutipan berikut:<br>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 my-2">
                "(1) Kemarin, aku sudah minum 3 jenis obat tapi perutku belum sembuh hingga hari ini. (2) Sepertinya, minum obat apapun tidak akan berpengaruh terhadap sakit perutku."
            </div>
            Manakah pernyataan yang tepat berdasarkan kedua kalimat di atas?`,
            options: [
                { id: 'A', text: 'Kedua kalimat merupakan argumen. Kalimat 2 adalah klaim, sedangkan 1 adalah premis pendukung.' },
                { id: 'B', text: 'Kedua kalimat merupakan argumen. Kalimat 1 adalah klaim, sedangkan 2 adalah premis pendukung.' },
                { id: 'C', text: 'Kedua kalimat di atas merupakan nonargumen karena kedua kalimat merupakan nonpernyataan.' },
                { id: 'D', text: 'Kedua kalimat di atas merupakan nonargumen karena kalimat 1 adalah klaim dan kalimat 2 bukanlah premis pendukung.' },
                { id: 'E', text: 'Kedua kalimat di atas merupakan nonargumen karena kalimat 2 adalah premis pendukung dan kalimat 1 bukanlah klaim.' }
            ],
            kunci: 'A',
            pembahasan: `
                <strong>Analisis Hubungan Pernyataan:</strong><br>
                • Kalimat (1) memaparkan fakta empiris pengalaman pribadi: <em>"Kemarin sudah minum 3 obat tapi belum sembuh"</em> &rarr; berfungsi sebagai bukti/alasan atau <strong>Premis Pendukung</strong>.<br>
                • Kalimat (2) memaparkan kesimpulan subjektif atau generalisasi penutur: <em>"Sepertinya minum obat apapun tidak berpengaruh"</em> &rarr; berfungsi sebagai <strong>Klaim</strong>.<br><br>
                <strong>Kesimpulan:</strong> Keduanya membentuk argumen, di mana kalimat 2 adalah klaim dan kalimat 1 adalah premis pendukung (Opsi A).
            `
        },
        {
            id: 8,
            topik: 'Evaluasi Argumen: Pertanyaan Retoris',
            soal: `Bobi berkata:<br>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 my-2">
                "(1) Walaupun sekarang sedang turun, jumlah kasus virus Covid-19 pasti akan naik lagi di bulan berikutnya. (2) Memangnya kalian pikir masyarakat sudah menerapkan protokol kesehatan dengan benar?"
            </div>
            Manakah pernyataan yang tepat berdasarkan kedua kalimat Bobi di atas?`,
            options: [
                { id: 'A', text: 'Kedua kalimat Bobi merupakan argumen. Kalimat 1 adalah klaim, sedangkan 2 adalah premis pendukung.' },
                { id: 'B', text: 'Kedua kalimat Bobi merupakan nonargumen karena salah satu kalimatnya merupakan nonpernyataan.' },
                { id: 'C', text: 'Kedua kalimat Bobi merupakan nonargumen karena kedua kalimat merupakan nonpernyataan.' },
                { id: 'D', text: 'Kedua kalimat Bobi merupakan nonargumen karena tidak terdapat premis pendukung.' },
                { id: 'E', text: 'Tidak ada pernyataan yang tepat.' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Kaidah Logika Argumen Standar:</strong><br>
                Sebuah argumen baku hanya dapat dibentuk oleh kalimat-kalimat yang berstatus <strong>proposisi / pernyataan</strong>.<br><br>
                Kalimat (2) merupakan bentuk kalimat tanya retoris (interogatif), bukan kalimat berita deklaratif murni, sehingga secara formal dikategorikan sebagai <em>nonpernyataan</em>.<br>
                Karena salah satu penyusunnya bukan pernyataan yang dapat diuji kebenarannya secara lugas, rangkaian tersebut dinilai sebagai <strong>nonargumen</strong>.<br><br>
                <strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>B</strong>.
            `
        },
        {
            id: 9,
            topik: 'Analisis Paragraf: Laporan Fakta vs Argumen',
            soal: `Perhatikan paragraf berikut:<br>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 my-2 leading-relaxed text-sm">
                Hasil uji sampel air dari parit belakang pabrik dan mulut pembuangan limbah PT Rayon Utama Makmur (RUM) di Bengawan Solo menunjukkan tingkat kandungan sulfida melebihi baku mutu. Begitu pula tingkat kebutuhan oksigen kimiawi (COD). Apabila kandungan sulfida tinggi, air akan berbau menyengat dan menyebabkan gatal. Kemudian, jika kadar COD tinggi, ikan di sungai itu akan mati.<br>
                <span class="text-xs text-slate-500 italic">(Sumber: tirto.id dengan modifikasi)</span>
            </div>
            Pernyataan manakah yang benar mengenai paragraf di atas?`,
            options: [
                { id: 'A', text: 'Kalimat 1 merupakan klaim, kalimat 2, 3, dan 4 merupakan premis pendukung.' },
                { id: 'B', text: 'Kalimat 1 dan 2 merupakan klaim, sedangkan kalimat 3 dan 4 merupakan premis pendukung.' },
                { id: 'C', text: 'Kalimat 1 dan 2 merupakan klaim, sedangkan kalimat 3 dan 4 merupakan kalimat yang tidak relevan terhadap klaim.' },
                { id: 'D', text: 'Kalimat 1 merupakan klaim, kalimat 2 merupakan premis pendukung, dan kalimat 3 dan 4 tidak relevan terhadap klaim.' },
                { id: 'E', text: 'Paragraf tidak memiliki klaim dan premis pendukung karena bukan merupakan argumen.' }
            ],
            kunci: 'E',
            pembahasan: `
                <strong>Analisis Teks Eksposisi Faktual:</strong><br>
                Paragraf di atas merupakan laporan berita ilmiah yang menyajikan rentetan data hasil pengujian laboratorium dan hubungan sebab-akibat objektif:<br>
                • Data kadar sulfida dan COD tinggi (fakta lab).<br>
                • Dampak sulfida dan COD pada bau air serta ikan (hubungan sebab-akibat ilmiah).<br><br>
                Tidak ada gagasan pendirian (standpoint) subjektif yang berusaha diperdebatkan atau disimpulkan penulis sebagai klaim terhadap lawan bicara. Ini adalah teks <em>laporan deskriptif-eksplanatif</em>, bukan struktur argumen.<br><br>
                <strong>Kesimpulan:</strong> Paragraf tidak memiliki klaim dan premis pendukung karena bukan merupakan argumen (Opsi E).
            `
        },
        {
            id: 10,
            topik: 'Menentukan Klaim Utama Paragraf',
            soal: `Perhatikan teks berikut:<br>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 my-2 leading-relaxed text-sm">
                Makanan dan minuman yang ditambahkan banyak gula harus dihindari. Konsumsi makanan dan minuman yang mengandung banyak gula dapat menyebabkan sindrom metabolik klasik. Tekanan darah naik adalah salah satu akibat dari mengkonsumsi gula berlebih. Konsumsi gula dalam jumlah besar bisa memicu terjadinya resistensi insulin pada tubuh. Berbagai penyakit serius dapat terjadi, apabila terjadi resistensi insulin.<br>
                <span class="text-xs text-slate-500 italic">(Sumber: halodoc.com)</span>
            </div>
            Manakah yang merupakan klaim dari teks di atas?`,
            options: [
                { id: 'A', text: 'Makanan dan minuman yang ditambahkan banyak gula harus dihindari' },
                { id: 'B', text: 'Konsumsi makanan dan minuman yang mengandung banyak gula dapat menyebabkan sindrom metabolik klasik' },
                { id: 'C', text: 'Tekanan darah naik adalah salah satu akibat dari mengkonsumsi gula berlebih' },
                { id: 'D', text: 'Konsumsi gula dalam jumlah besar bisa memicu terjadinya resistensi insulin pada tubuh' },
                { id: 'E', text: 'Berbagai penyakit serius dapat terjadi, apabila terjadi resistensi insulin' }
            ],
            kunci: 'A',
            pembahasan: `
                <strong>Menentukan Klaim Utama (Thesis / Main Claim):</strong><br>
                Klaim utama adalah pernyataan sikap atau simpulan sentral yang ingin disampaikan penulis kepada pembaca.<br><br>
                • Kalimat 1: <em>"Makanan dan minuman yang ditambahkan banyak gula harus dihindari"</em> merupakan <strong>klaim anjuran utama</strong>.<br>
                • Kalimat 2 s.d. 5 adalah rangkaian <strong>premis pendukung</strong> yang menjelaskan bahaya metabolisme dan resistensi insulin sebagai alasan logis mengapa gula harus dihindari.<br><br>
                <strong>Kesimpulan:</strong> Klaim dari teks di atas adalah opsi <strong>A</strong>.
            `
        }
    ],

    // -----------------------------------------------------------------
    // PEMAHAMAN BACAAN & MENULIS (PBM) - PAKET 1 (Sumber: Bank Soal UTBK PBM 2021)
    // -----------------------------------------------------------------
    'pbm_1': [
        {
            id: 1,
            bacaanId: 'pbm1_teks1',
            bacaanTitle: 'Teks untuk Soal Nomor 1—3',
            bacaan: `
                <p class="mb-2">(1) Keberadaan industri olahraga di tingkat dunia terus berkembang pesat. (2) Beberapa negara maju, seperti Amerika, Inggris, Jerman Perancis dan China, telah menjadikan olahraga sebagai industri prioritas sekaligus pemasok devisa negara. (3) Bahkan, olahraga terus didesain sebagai Industri modern berskala global.</p>
                <p class="mb-2">(4) Salah satu jejak munculnya industri olahraga dapat dirujuk saat Peter Ueberroth sukses mengusung bisnis dalam penyelenggaraan Olimpiade Los Angeles pada 1984. (5) Pada saat itu, penyelenggaraan pesta olimpiade berhasil mencetak laba 227,7 juta dollar AS yang ditandai dengan munculnya produk Nike sebagai sponsor kegiatan tersebut. (6) Sejak saat itu, berbagai negara terus mengembangkan industri olahraga.</p>
                <p>(7) Pasar olahraga global terus menunjukkan tren kenaikan dari tahun ke tahun. (8) Pertumbuhan industri olahraga itu dipicu oleh perkembangan internet dan digitalisasi. (9) [....], tiap-tiap kawasan memiliki spesifikasi dalam pengembangan industri olahraga. (10) Misalnya, Amerika Serikat mengedepankan industri olahraga basket, sedangkan Eropa, terutama Inggris, industri sepak bola.</p>
                <p class="mt-2 text-xs text-slate-500 italic">Diadaptasi dari: https://kompaspedia.kompas.id/</p>
            `,
            topik: 'Gagasan Utama & Inti Teks',
            soal: 'Apa inti teks tersebut?',
            options: [
                { id: 'A', text: 'Negara maju menjadikan olahraga sebagai industri.' },
                { id: 'B', text: 'Industri olahraga di dunia berkembang pesat.' },
                { id: 'C', text: 'Olahraga dirancang sebagai industri berskala besar.' },
                { id: 'D', text: 'Olimpiade ditengarai sebagai tonggak industri olahraga.' },
                { id: 'E', text: 'Olahraga menjadi industri.' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Analisis Gagasan Utama Teks:</strong><br>
                Paragraf pertama diawali dengan gagasan pokok pada kalimat (1): <em>"Keberadaan industri olahraga di tingkat dunia terus berkembang pesat."</em><br><br>
                Seluruh kalimat berikutnya (sejarah Olimpiade 1984, pertumbuhan pasar global, peran internet, hingga spesifikasi tiap kawasan) berfungsi sebagai kalimat penjelas yang mengelaborasi pesatnya perkembangan industri olahraga di dunia.<br><br>
                <strong>Kesimpulan:</strong> Inti teks tersebut adalah <strong>Industri olahraga di dunia berkembang pesat</strong> (Opsi B).
            `
        },
        {
            id: 2,
            bacaanId: 'pbm1_teks1',
            bacaanTitle: 'Teks untuk Soal Nomor 1—3',
            topik: 'PUEBI / EYD: Penulisan Huruf Kapital',
            soal: 'Penulisan kata bercetak tebal / kapital pada teks tersebut yang salah terdapat pada kalimat ....',
            options: [
                { id: 'A', text: '(2)' },
                { id: 'B', text: '(3)' },
                { id: 'C', text: '(5)' },
                { id: 'D', text: '(7)' },
                { id: 'E', text: '(9)' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Aturan Pedoman Umum Ejaan Bahasa Indonesia (PUEBI/EYD):</strong><br>
                Pada kalimat (3): <em>"Bahkan, olahraga terus didesain sebagai <strong>Industri</strong> modern berskala global."</em><br><br>
                Kata <strong>Industri</strong> ditulis dengan huruf kapital di tengah kalimat padahal bukan merupakan nama diri, nama lembaga resmi, maupun awal kalimat. Penulisan yang baku seharusnya menggunakan huruf kecil: <em>industri</em>.<br><br>
                <strong>Kesimpulan:</strong> Kesalahan terdapat pada kalimat <strong>(3)</strong> (Opsi B).
            `
        },
        {
            id: 3,
            bacaanId: 'pbm1_teks1',
            bacaanTitle: 'Teks untuk Soal Nomor 1—3',
            topik: 'Konjungsi Antarkalimat',
            soal: 'Kata sambung yang paling tepat melengkapi rumpang pada kalimat (9) adalah ....',
            options: [
                { id: 'A', text: 'oleh karena itu' },
                { id: 'B', text: 'dengan demikian' },
                { id: 'C', text: 'selain itu' },
                { id: 'D', text: 'selanjutnya' },
                { id: 'E', text: 'meskipun demikian' }
            ],
            kunci: 'C',
            pembahasan: `
                <strong>Analisis Hubungan Antarkalimat:</strong><br>
                Kalimat (7) dan (8) membahas tren kenaikan pasar olahraga global yang dipicu internet. Kalimat (9) menambahkan informasi baru mengenai aspek spesifikasi/karakteristik tiap-tiap kawasan (yang dicontohkan di kalimat 10: AS basket, Eropa sepak bola).<br><br>
                Konjungsi antarkalimat yang berfungsi menambahkan keterangan atau poin informasi baru yang setara adalah <strong>Selain itu</strong>.<br><br>
                <strong>Kesimpulan:</strong> Kata sambung yang paling tepat adalah <strong>selain itu</strong> (Opsi C).
            `
        },
        {
            id: 4,
            bacaanId: 'pbm1_teks2',
            bacaanTitle: 'Teks untuk Soal Nomor 4—6',
            bacaan: `
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-800 text-sm leading-relaxed space-y-1.5">
                    <p class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">TERBINAFINE</p>
                    <p>• Mengobati infeksi jamur.</p>
                    <p>• Berbentuk tablet dan krim.</p>
                    <p>• Krim hanya digunakan sebagai obat luar.</p>
                    <p>• Hindarkan kontak dengan mata, hidung, mulut, dan membran mukosa lainnya.</p>
                    <p>• Tidak disarankan bagi penderita hipersensitif terhadap Terbinafine dan zat tambahan. Bagi pasien dengan gangguan fungsi hati berat atau gangguan fungsi ginjal dapat dikurangi menjadi setengah dosis normal. Keamanan dan efektivitas Terbinafine pada anak-anak di bawah usia 12 tahun belum terverifikasi. Terbinafine diekskresikan dalam ASI sehingga tidak boleh digunakan selama menyusui.</p>
                    <p class="text-xs text-slate-500 italic pt-1">Diadaptasi dari https://www.hellosehat.com/</p>
                </div>
            `,
            topik: 'Menemukan Informasi Tersurat',
            soal: 'Orang yang sebaiknya menghindari produk tersebut adalah ....',
            options: [
                { id: 'A', text: 'ibu yang sedang menyusui' },
                { id: 'B', text: 'mereka yang berusia lanjut' },
                { id: 'C', text: 'mereka dengan gangguan fungsi ginjal' },
                { id: 'D', text: 'anak-anak di atas usia 12 tahun' },
                { id: 'E', text: 'pasien dengan gangguan fungsi hati' }
            ],
            kunci: 'A',
            pembahasan: `
                <strong>Analisis Informasi Teks Obat:</strong><br>
                Perhatikan kalimat terakhir pada teks: <em>"Terbinafine diekskresikan dalam ASI sehingga <strong>tidak boleh digunakan selama menyusui</strong>."</em><br><br>
                Sedangkan untuk penderita gangguan fungsi hati dan ginjal, obat masih bisa diberikan dengan penyesuaian (dikurangi setengah dosis).<br><br>
                <strong>Kesimpulan:</strong> Orang yang mutlak harus menghindari produk tersebut adalah <strong>ibu yang sedang menyusui</strong> (Opsi A).
            `
        },
        {
            id: 5,
            bacaanId: 'pbm1_teks2',
            bacaanTitle: 'Teks untuk Soal Nomor 4—6',
            topik: 'Asumsi Logis Berdasarkan Teks',
            soal: 'Berdasarkan pernyataan <em>"Keamanan dan efektivitas Terbinafine pada anak-anak di bawah usia 12 tahun belum terverifikasi"</em>, dapat diasumsikan bahwa ….',
            options: [
                { id: 'A', text: 'Terbinafine tidak memenuhi standar kesehatan' },
                { id: 'B', text: 'Terbinafine tidak boleh dikonsumsi anak-anak' },
                { id: 'C', text: 'pemberian obat ini pada anak-anak tidak disarankan' },
                { id: 'D', text: 'keamanan dan keefektifan obat masih dalam kajian' },
                { id: 'E', text: 'ada indikasi kasus fatal terjadi pada anak-anak' }
            ],
            kunci: 'D',
            pembahasan: `
                <strong>Analisis Makna Kata & Asumsi:</strong><br>
                Kata <em>"belum terverifikasi"</em> secara terminologi farmakologis dan bahasa bermakna belum terbukti secara valid melalui rangkaian uji klinis atau data empiris ilmiah.<br><br>
                Hal ini menandakan bahwa aspek keamanan serta efektivitas obat bagi kelompok anak tersebut <strong>masih dalam kajian/penelitian lebih lanjut</strong> dan belum ada kesimpulan final.<br><br>
                <strong>Kesimpulan:</strong> Asumsi yang paling tepat dan objektif adalah opsi <strong>D</strong>.
            `
        },
        {
            id: 6,
            bacaanId: 'pbm1_teks2',
            bacaanTitle: 'Teks untuk Soal Nomor 4—6',
            topik: 'Semantik / Makna Kata Kontekstual',
            soal: 'Kata <strong>berat</strong> pada pernyataan <em>"Bagi pasien dengan gangguan fungsi hati berat atau gangguan fungsi ginjal, dapat dikurangi menjadi setengah dosis normal"</em> memiliki makna ….',
            options: [
                { id: 'A', text: 'derajat' },
                { id: 'B', text: 'tingkatan' },
                { id: 'C', text: 'kuantitas' },
                { id: 'D', text: 'kualitas' },
                { id: 'E', text: 'ukuran' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Analisis Konteks Medis & Semantik:</strong><br>
                Kata <em>berat</em> dalam konteks medis (seperti gangguan fungsi hati ringan, sedang, atau berat) menunjukkan <strong>tingkatan (stadium/derajat keparahan)</strong> suatu kondisi penyakit.<br><br>
                Dalam KBBI, salah satu arti berat adalah tingkatan atau intensitas (sukar/parah). Di sini ia merujuk pada <strong>tingkatan</strong> keparahan kerusakan organ.<br><br>
                <strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>tingkatan</strong> (Opsi B).
            `
        },
        {
            id: 7,
            bacaanId: 'pbm1_teks3',
            bacaanTitle: 'Teks untuk Soal Nomor 7—9',
            bacaan: `
                <p class="mb-2">(1) Beban berat pada pendidikan tidak bisa dielakkan. (2) Saat ini data lama bersekolah menurun dari 7,9 menjadi 7,6 tahun. (3) Angka putus sekolah meningkat menjadi 24 juta. (4) Pemerintah sebenarnya sudah memberikan stimulus agar target minimum dapat dicapai. (5) Relaksasi penggunaan dana BOS dilakukan dan kuota belajar diberikan. (6) Pantauan televisi dan radio pun dimanfaatkan, tetapi tetap saja pembelajaran terganggu.</p>
                <p>(7) Penyebabnya, guru tidak dapat mengawasi siswa dari jauh, sementara orang tua pun tidak sepenuhnya dapat mendampingi anaknya. (8) Masalah berat bagi siswa perkotaan tersebut terasa lebih pahit bagi siswa perdesaan. (9) Berbagai terobosan tidak berdampak. (10) Relaksasi penggunaan dana BOS pun tidak berpengaruh karena puncak kreativitas sekolah hanya berhenti pada bagi-bagi masker. (11) Jika masalah itu berlarut-larut, desa makin tertinggal.</p>
                <p class="mt-2 text-xs text-slate-500 italic">Diadaptasi dari: https://www.news.detik.com/</p>
            `,
            topik: 'Diksi & Ketepatan Pilihan Kata',
            soal: 'Kata yang paling tepat menggantikan kata <strong>pantauan</strong> dalam kalimat (6) adalah ….',
            options: [
                { id: 'A', text: 'tayangan' },
                { id: 'B', text: 'rancangan' },
                { id: 'C', text: 'sambutan' },
                { id: 'D', text: 'saluran' },
                { id: 'E', text: 'aliran' }
            ],
            kunci: 'A',
            pembahasan: `
                <strong>Analisis Konteks Kalimat:</strong><br>
                Kalimat (6) berbunyi: <em>"Pantauan televisi dan radio pun dimanfaatkan, tetapi tetap saja pembelajaran terganggu."</em><br><br>
                Televisi dan radio adalah media penyiaran audiovisual yang menyiarkan materi edukasi (program belajar dari rumah). Oleh sebab itu, materi yang dimanfaatkan siswa adalah siaran atau <strong>tayangan</strong> dari televisi dan radio, bukan "pantauan" (pemantauan).<br><br>
                <strong>Kesimpulan:</strong> Kata yang paling tepat menggantikan pantauan adalah <strong>tayangan</strong> (Opsi A).
            `
        },
        {
            id: 8,
            bacaanId: 'pbm1_teks3',
            bacaanTitle: 'Teks untuk Soal Nomor 7—9',
            topik: 'Perluasan & Kepaduan Kalimat',
            soal: 'Kalimat manakah yang paling tepat sebagai perluasan kalimat (9) agar padu dengan kalimat yang lain?',
            options: [
                { id: 'A', text: 'Berbagai terobosan tidak berdampak dan kuota belajar tidak optimal karena jaringan, bahkan gawai tidak tersedia.' },
                { id: 'B', text: 'Berbagai terobosan tidak berdampak, bahkan kuota belajar tidak optimal karena jaringan, bahkan gawai tidak tersedia.' },
                { id: 'C', text: 'Berbagai terobosan tidak berdampak, sementara kuota belajar tidak optimal karena jaringan, bahkan gawai tidak tersedia.' },
                { id: 'D', text: 'Berbagai terobosan tidak berdampak, misalnya kuota belajar tidak optimal karena jaringan, bahkan gawai tidak tersedia.' },
                { id: 'E', text: 'Berbagai terobosan tidak berdampak sehingga kuota belajar tidak optimal karena jaringan, bahkan gawai tidak tersedia.' }
            ],
            kunci: 'D',
            pembahasan: `
                <strong>Analisis Koherensi Paragraf:</strong><br>
                Kalimat (9) <em>"Berbagai terobosan tidak berdampak"</em> menyatakan sebuah kesimpulan umum yang memerlukan perincian contoh konkrit mengapa terobosan stimulus pemerintah (seperti kuota belajar yang disebut di kalimat 5) tidak optimal.<br><br>
                Konjungsi ilustratif/penjelas yang tepat untuk menghubungkan klausa umum dengan contoh kendalanya adalah <strong>misalnya</strong>.<br><br>
                <strong>Kesimpulan:</strong> Perluasan kalimat yang paling padu adalah <strong>Opsi D</strong>.
            `
        },
        {
            id: 9,
            bacaanId: 'pbm1_teks3',
            bacaanTitle: 'Teks untuk Soal Nomor 7—9',
            topik: 'Sintaksis: Penggabungan Dua Kalimat',
            soal: `Kalimat manakah yang paling tepat sebagai penggabungan kalimat (2) dan (3)?<br>
            <div class="p-2.5 bg-slate-50 rounded-lg text-xs font-mono my-2 text-slate-700">
                (2) Saat ini data lama bersekolah menurun dari 7,9 menjadi 7,6 tahun.<br>
                (3) Angka putus sekolah meningkat menjadi 24 juta.
            </div>`,
            options: [
                { id: 'A', text: 'Saat ini rerata lama bersekolah menurun dari 7,9 menjadi 7,6 tahun karena angka putus sekolah meningkat hingga 24 juta.' },
                { id: 'B', text: 'Saat ini rerata lama bersekolah menurun dari 7,9 menjadi 7,6 tahun, sedangkan angka putus sekolah meningkat hingga 24 juta.' },
                { id: 'C', text: 'Saat ini angka putus sekolah meningkat hingga 24 juta sehingga rerata lama bersekolah menurun dari 7,9 menjadi 7,6 tahun.' },
                { id: 'D', text: 'Saat ini angka putus sekolah meningkat hingga 24 juta karena rerata lama sekolah menurun dari 7,9 menjadi 7,6 tahun.' },
                { id: 'E', text: 'Saat ini angka putus sekolah meningkat hingga 24 juta walaupun rerata lama bersekolah menurun dari 7,9 menjadi 7,6 tahun.' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Analisis Hubungan Semantik Antarklausa:</strong><br>
                Kalimat (2) memaparkan indikator lama sekolah yang <em>menurun</em>, sementara kalimat (3) memaparkan angka putus sekolah yang <em>meningkat</em>.<br><br>
                Kedua data ini menunjukkan dua fakta berbeda yang berjalan beriringan dan saling mengontraskan arah perubahan (satu turun, satu naik). Konjungsi koordinatif pertentangan/perbandingan yang tepat untuk dua fakta setara adalah <strong>sedangkan</strong> (didahului tanda koma).<br><br>
                <strong>Kesimpulan:</strong> Penggabungan yang paling tepat adalah <strong>Opsi B</strong>.
            `
        },
        {
            id: 10,
            bacaanId: 'pbm1_teks4',
            bacaanTitle: 'Teks untuk Soal Nomor 10—12',
            bacaan: `
                <p class="mb-2">(1) Salah satu kain tenun yang memiliki keunikan dan karakter budaya kuat adalah kain tenun asli Ternate. (2) Kain ini sudah ada cukup lama di Ternate. (3) Namun, saat ini kain tersebut sudah menjadi barang langka.</p>
                <p class="mb-2">(4) Suatu daerah di Ternate yang bernama Koloncucu adalah pusat pembuatannya, dan kerajinan tenun ini telah dilakukan secara turun-temurun di tempat ini. (5) Banyak pengrajin tenun Ternate yang berasal dari tempat ini dan biasanya menenun tidak hanya untuk mendapatkan uang tetapi sudah menjadi sebuah hobi untuk mengisi waktu luang.</p>
                <p>(6) Pada dasarnya, kain tenun Ternate tidak berbeda dari kain tenun lain di Indonesia. (7) Benang yang menjadi bahan dasar, peralatan, hingga teknik pembuatannya pun sama dengan kain tenun dari daerah lain di Indonesia. (8) Kain tenun Ternate biasanya memiliki berbagai motif yang berkaitan dengan keragaman Maluku Utara yang berkaitan dengan dunia laut, seperti ikan, kerang, dan burung laut.</p>
                <p class="mt-2 text-xs text-slate-500 italic">Diadaptasi dari: https://indonesiakaya.com/</p>
            `,
            topik: 'Kohesi Gramatikal: Referensi Kata Ganti',
            soal: 'Akhiran <em>-nya</em> pada kata <em>pembuatannya</em> pada kalimat (4) merujuk pada ....',
            options: [
                { id: 'A', text: 'kain tenun unik' },
                { id: 'B', text: 'kain tenun Koloncucu' },
                { id: 'C', text: 'kain tenun Ternate' },
                { id: 'D', text: 'kain tenun asli' },
                { id: 'E', text: 'kain tenun langka' }
            ],
            kunci: 'C',
            pembahasan: `
                <strong>Analisis Referensi Gramatikal (Pronomina -nya):</strong><br>
                Kalimat (4) berbunyi: <em>"Suatu daerah di Ternate yang bernama Koloncucu adalah pusat pembuatannya..."</em><br><br>
                Topik bahasan dari kalimat (1), (2), dan (3) adalah <strong>kain tenun Ternate</strong>. Kata pembuatannya merujuk pada proses pembuatan produk kain tenun Ternate tersebut.<br><br>
                <strong>Kesimpulan:</strong> Akhiran <em>-nya</em> merujuk pada <strong>kain tenun Ternate</strong> (Opsi C).
            `
        },
        {
            id: 11,
            bacaanId: 'pbm1_teks4',
            bacaanTitle: 'Teks untuk Soal Nomor 10—12',
            topik: 'Penyisipan Kalimat Baru dalam Teks',
            soal: `Anda perlu menambahkan kalimat berikut dalam bacaan tersebut:<br>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 my-2">
                "Namun, yang membedakan kain berharga mahal ini adalah motif yang menjadi ciri khasnya."
            </div>
            Kalimat tersebut paling tepat ditempatkan setelah kalimat ....`,
            options: [
                { id: 'A', text: '(3)' },
                { id: 'B', text: '(4)' },
                { id: 'C', text: '(5)' },
                { id: 'D', text: '(6)' },
                { id: 'E', text: '(7)' }
            ],
            kunci: 'E',
            pembahasan: `
                <strong>Analisis Alur Logika Teks:</strong><br>
                • Kalimat (6) dan (7) menyatakan bahwa kain tenun Ternate <em>tidak berbeda</em> dari kain lain di Indonesia (bahan, alat, tekniknya sama).<br>
                • Kalimat baru berisi pertentangan (<em>"Namun, yang membedakan... adalah motif..."</em>).<br>
                • Kalimat (8) langsung menjelaskan rincian aneka motif bahari (ikan, kerang, burung laut).<br><br>
                Oleh sebab itu, jembatan transisi logis yang sempurna adalah menempatkannya di antara kalimat (7) dan (8), yakni <strong>setelah kalimat (7)</strong>.<br><br>
                <strong>Kesimpulan:</strong> Kalimat disisipkan setelah kalimat <strong>(7)</strong> (Opsi E).
            `
        },
        {
            id: 12,
            bacaanId: 'pbm1_teks4',
            bacaanTitle: 'Teks untuk Soal Nomor 10—12',
            topik: 'PUEBI / EYD: Tanda Baca Koma',
            soal: 'Penggunaan tanda baca yang salah terdapat pada kalimat ....',
            options: [
                { id: 'A', text: '(3)' },
                { id: 'B', text: '(4)' },
                { id: 'C', text: '(6)' },
                { id: 'D', text: '(7)' },
                { id: 'E', text: '(8)' }
            ],
            kunci: 'B',
            pembahasan: `
                <strong>Aturan Penggunaan Tanda Baca Koma (,):</strong><br>
                Perhatikan kalimat (4): <em>"Suatu daerah di Ternate yang bernama Koloncucu adalah pusat pembuatannya<strong>, dan</strong> kerajinan tenun ini telah dilakukan secara turun-temurun di tempat ini."</em><br><br>
                Menurut PUEBI, tanda koma tidak digunakan sebelum kata penghubung setara <em>dan</em> kecuali untuk memisahkan unsur-unsur dalam perincian lebih dari dua hal atau memisahkan klausa bertingkat anak kalimat yang mendahului induk kalimat.<br><br>
                <strong>Kesimpulan:</strong> Kesalahan tanda baca terdapat pada kalimat <strong>(4)</strong> (Opsi B).
            `
        },
        {
            id: 13,
            bacaanId: 'pbm1_teks5',
            bacaanTitle: 'Teks untuk Soal Nomor 13—15',
            bacaan: `
                <p class="mb-2">(1) Pada hakikatnya, manusia hidup dalam sebuah kesatuan ruang yang terdiri atas beberapa komponen yang berkaitan. (2) Ruang tersebut dikenal sebagai lingkungan hidup. (3) Dalam perundang-undangan, lingkungan hidup dianggap sebagai kesatuan ruang dengan semua benda, daya, keadaan, dan makhluk hidup termasuk di dalamnya manusia dan perilakunya. (4) Semua hal itu memengaruhi kelangsungan perikehidupan dan kesejahteraan manusia serta makhluk hidup lainnya.</p>
                <p class="mb-2">(5) Lingkungan hidup terdiri atas tiga komponen utama, yaitu lingkungan alam, lingkungan buatan, dan lingkungan sosial. (6) Lingkungan sosial sangat berpengaruh terhadap pembangunan manusia seutuhnya.</p>
                <p>(7) Akan tetapi, kebutuhan manusia tidak ada batasnya sering membuat manusia bertindak berlebihan. (8) Mereka mengeksploitasi lingkungan sebesar-besarnya demi memenuhi kebutuhan hidup. (9) Kebutuhan hidup setiap manusia pasti berbeda-beda, bergantung pada jabatan, gaya hidup, usia, dan jenis kelaminnya.</p>
                <p class="mt-2 text-xs text-slate-500 italic">Diadaptasi dari: https://kompas.id/</p>
            `,
            topik: 'Kalimat Efektif & Struktur Subjek-Predikat',
            soal: 'Kalimat (7) perlu disempurnakan dengan cara ….',
            options: [
                { id: 'A', text: 'menghilangkan akan' },
                { id: 'B', text: 'mengganti bertindak dengan berlaku' },
                { id: 'C', text: 'menghilangkan berlebihan' },
                { id: 'D', text: 'mengganti batasnya dengan habisnya' },
                { id: 'E', text: 'menambahkan yang sebelum tidak' }
            ],
            kunci: 'E',
            pembahasan: `
                <strong>Analisis Struktur Kalimat Efektif:</strong><br>
                Kalimat (7): <em>"Akan tetapi, kebutuhan manusia tidak ada batasnya sering membuat manusia bertindak berlebihan."</em><br><br>
                Kalimat ini mengalami kerancuan subjek dan predikat berganda karena klausa penjelas tidak dibatasi kata pewatas. Subjek yang ingin dibentuk adalah: <em>kebutuhan manusia <strong>yang</strong> tidak ada batasnya</em>.<br>
                Dengan menambahkan kata <strong>yang</strong> sebelum kata <em>tidak</em>, klausa subjek menjadi jelas dan predikat utamanya adalah <em>sering membuat</em>.<br><br>
                <strong>Kesimpulan:</strong> Cara penyempurnaan yang tepat adalah <strong>menambahkan yang sebelum tidak</strong> (Opsi E).
            `
        },
        {
            id: 14,
            bacaanId: 'pbm1_teks5',
            bacaanTitle: 'Teks untuk Soal Nomor 13—15',
            topik: 'Kehematan Kata (Pleonasme)',
            soal: `Kata yang dapat dihilangkan tanpa mengubah makna secara keseluruhan pada kalimat (1) adalah ....<br>
            <div class="p-2.5 bg-slate-50 rounded-lg text-xs font-mono my-2 text-slate-700">
                "(1) Pada hakikatnya, manusia hidup dalam sebuah kesatuan ruang yang terdiri atas beberapa komponen yang berkaitan."
            </div>`,
            options: [
                { id: 'A', text: 'pada' },
                { id: 'B', text: 'yang' },
                { id: 'C', text: 'atas' },
                { id: 'D', text: 'sebuah' },
                { id: 'E', text: 'beberapa' }
            ],
            kunci: 'D',
            pembahasan: `
                <strong>Prinsip Kehematan Kalimat Efektif:</strong><br>
                Kata <em>sebuah</em> merupakan kata penggolong untuk benda nominal tunggal berwujud fisik.<br><br>
                Kata <em>kesatuan ruang</em> merupakan entitas konsep abstrak, bukan benda fisik yang dihitung satuan 'sebuah'. Menghilangkan kata <em>sebuah</em> menjadi <em>"manusia hidup dalam kesatuan ruang yang terdiri atas..."</em> tetap mempertahankan keutuhan makna dan menjadikan kalimat lebih hemat serta baku.<br><br>
                <strong>Kesimpulan:</strong> Kata yang dapat dihilangkan adalah <strong>sebuah</strong> (Opsi D).
            `
        },
        {
            id: 15,
            bacaanId: 'pbm1_teks5',
            bacaanTitle: 'Teks untuk Soal Nomor 13—15',
            topik: 'Kepaduan Paragraf & Kalimat Sumbang',
            soal: 'Kalimat yang tidak berkaitan dengan gagasan utama bacaan di atas (kalimat sumbang/inkonsisten) adalah kalimat ....',
            options: [
                { id: 'A', text: '(2)' },
                { id: 'B', text: '(3)' },
                { id: 'C', text: '(4)' },
                { id: 'D', text: '(5)' },
                { id: 'E', text: '(9)' }
            ],
            kunci: 'E',
            pembahasan: `
                <strong>Analisis Koherensi & Kalimat Sumbang:</strong><br>
                Gagasan pokok bacaan adalah hakikat manusia dan lingkungan hidupnya serta bagaimana nafsu eksploitasi manusia merusak kelestarian lingkungan tersebut.<br><br>
                Kalimat (9): <em>"Kebutuhan hidup setiap manusia pasti berbeda-beda, bergantung pada jabatan, gaya hidup, usia, dan jenis kelaminnya."</em> tiba-tiba melompat ke pembahasan klasifikasi faktor demografi kebutuhan individu, yang menyimpang dari fokus interaksi manusia terhadap daya dukung lingkungan hidup.<br><br>
                <strong>Kesimpulan:</strong> Kalimat sumbang adalah kalimat <strong>(9)</strong> (Opsi E).
            `
        }
    ]
};

// =================================================================
// HELPER UTILITY FUNCTIONS
// =================================================================
function getSnbtSubtes(subtesId) {
    return snbtSubtes.find(s => s.id === subtesId) || null;
}

function getSnbtPaket(subtesId, paketId) {
    const sub = getSnbtSubtes(subtesId);
    if (!sub) return null;
    return sub.paketList.find(p => p.id === parseInt(paketId)) || null;
}

function getSnbtSoalList(subtesId, paketId) {
    const key = `${subtesId}_${paketId}`;
    return snbtBankSoal[key] || [];
}
