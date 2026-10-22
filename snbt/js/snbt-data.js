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
            { id: 1, judul: 'Paket 1: Analisis Tata Makna & Kosakata', status: 'tersedia', jumlahSoal: 15, durasiMenit: 15, tahun: '2025/2026' }
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
            { id: 1, judul: 'Paket 1: Aljabar, Aritmetika & Kecukupan Data', status: 'tersedia', jumlahSoal: 10, durasiMenit: 20, tahun: '2025/2026' }
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
,

    // -----------------------------------------------------------------
    // PENGETAHUAN KUANTITATIF (PK) - PAKET 1 (Sumber: Bank Soal UTBK 2021)
    // -----------------------------------------------------------------
    'pk_1': [
        {
                "id": 1,
                "topik": "Aljabar Matriks",
                "soal": "Nilai \\(k\\) yang memenuhi persamaan matriks berikut adalah ....<br><br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-sm sm:text-base font-serif'>$$\\begin{pmatrix} 0 & k \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} 3 & 1 \\\\ 2 & 1 \\end{pmatrix} - \\begin{pmatrix} 3 & 3 \\\\ 5 & 1 \\end{pmatrix} = \\begin{pmatrix} 3 & 0 \\\\ 2 & 2 \\end{pmatrix}$$</div>",
                "options": [
                        {
                                "id": "A",
                                "text": "0"
                        },
                        {
                                "id": "B",
                                "text": "2"
                        },
                        {
                                "id": "C",
                                "text": "3"
                        },
                        {
                                "id": "D",
                                "text": "6"
                        },
                        {
                                "id": "E",
                                "text": "7"
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Langkah 1: Lakukan Perkalian Matriks di Ruas Kiri</strong><br>$$\\begin{pmatrix} 0 & k \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} 3 & 1 \\\\ 2 & 1 \\end{pmatrix} = \\begin{pmatrix} (0)(3) + (k)(2) & (0)(1) + (k)(1) \\\\ (1)(3) + (2)(2) & (1)(1) + (2)(1) \\end{pmatrix} = \\begin{pmatrix} 2k & k \\\\ 7 & 3 \\end{pmatrix}$$<br><strong>Langkah 2: Kurangkan dengan Matriks Kedua</strong><br>$$\\begin{pmatrix} 2k & k \\\\ 7 & 3 \\end{pmatrix} - \\begin{pmatrix} 3 & 3 \\\\ 5 & 1 \\end{pmatrix} = \\begin{pmatrix} 2k - 3 & k - 3 \\\\ 7 - 5 & 3 - 1 \\end{pmatrix} = \\begin{pmatrix} 2k - 3 & k - 3 \\\\ 2 & 2 \\end{pmatrix}$$<br><strong>Langkah 3: Samakan dengan Matriks Ruas Kanan</strong><br>$$\\begin{pmatrix} 2k - 3 & k - 3 \\\\ 2 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & 0 \\\\ 2 & 2 \\end{pmatrix}$$<br>Dari kesamaan elemen baris ke-1 kolom ke-2:<br>\\(k - 3 = 0 \\implies k = 3\\)<br>Uji pada baris ke-1 kolom ke-1: \\(2(3) - 3 = 6 - 3 = 3\\) (Cocok).<br><br><strong>Kesimpulan:</strong> Nilai \\(k\\) yang memenuhi adalah <strong>3</strong> (Opsi C)."
        },
        {
                "id": 2,
                "topik": "Aritmetika Sosial & Optimasi Biaya",
                "soal": "Seseorang merencanakan membeli minyak goreng secara langsung ke toko atau secara online. Tersedia dua ukuran kemasan dengan rincian biaya sebagai berikut:<br><br><div class='overflow-x-auto my-3'><table class='w-full text-xs sm:text-sm border border-slate-200 text-left'><tr class='bg-slate-100 font-bold border-b border-slate-200'><th class='p-2.5'>Pilihan Kemasan</th><th class='p-2.5'>Beli Langsung di Toko</th><th class='p-2.5'>Beli Online (Termasuk Ongkir)</th></tr><tr class='border-b border-slate-100'><td class='p-2.5 font-medium'>Kemasan 2 Liter</td><td class='p-2.5'>Rp30.000 / wadah</td><td class='p-2.5'>Rp40.000 / wadah</td></tr><tr class='border-b border-slate-100'><td class='p-2.5 font-medium'>Kemasan 5 Liter</td><td class='p-2.5'>Rp70.000 / wadah</td><td class='p-2.5'>Rp85.000 / wadah</td></tr></table></div>Jika membeli langsung ke toko, diperlukan biaya transportasi perjalanan sebesar <strong>Rp40.000</strong> (cukup dibayar sekali untuk seluruh belanjaan).<br><br>Total biaya minimal yang dibutuhkan untuk memenuhi kebutuhan <strong>10 liter minyak goreng</strong> adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "Rp200.000"
                        },
                        {
                                "id": "B",
                                "text": "Rp190.000"
                        },
                        {
                                "id": "C",
                                "text": "Rp180.000"
                        },
                        {
                                "id": "D",
                                "text": "Rp170.000"
                        },
                        {
                                "id": "E",
                                "text": "Rp160.000"
                        }
                ],
                "kunci": "D",
                "pembahasan": "<strong>Analisis Opsi Kombinasi untuk 10 Liter Minyak:</strong><br><br><strong>Opsi 1: Membeli Langsung ke Toko</strong><br>• Kemasan termurah adalah 2 wadah kemasan 5 Liter (2 × 5L = 10L):<br>  Harga minyak = \\(2 \\times \\text{Rp}70.000 = \\text{Rp}140.000\\)<br>  Biaya perjalanan = \\(\\text{Rp}40.000\\)<br>  Total Biaya = \\(140.000 + 40.000 = \\mathbf{Rp180.000}\\)<br><br><strong>Opsi 2: Membeli Secara Online (Tanpa Biaya Transport Tambahan)</strong><br>• Membeli 2 wadah kemasan 5 Liter:<br>  Total Biaya = \\(2 \\times \\text{Rp}85.000 = \\mathbf{Rp170.000}\\)<br>• Membeli 5 wadah kemasan 2 Liter:<br>  Total Biaya = \\(5 \\times \\text{Rp}40.000 = \\text{Rp}200.000\\)<br><br><strong>Bandingkan Biaya Minimal:</strong><br>Biaya minimal dari seluruh opsi yang tersedia adalah <strong>Rp170.000</strong> (membeli 2 kemasan 5 liter secara online).<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>D</strong>."
        },
        {
                "id": 3,
                "topik": "Teori Bilangan & Faktor Persekutuan Terbesar (FPB)",
                "soal": "Faktor persekutuan terbesar (FPB) dari setiap dua bilangan di antara bilangan asli \\(a, b,\\) dan \\(c\\) adalah 1 (ketiganya saling prima berpasangan).<br>Diketahui:<br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base font-mono my-2 text-center'>\\(a(b - 1) = 24\\), &nbsp;&nbsp; \\(2a - c = 5\\), &nbsp;&nbsp; dan &nbsp;&nbsp; \\(a < 6\\)</div>Manakah pernyataan berikut yang bernilai benar?<br><ol class='list-decimal list-inside space-y-1 my-2 text-xs sm:text-sm text-slate-800'><li>Hasil kali ketiga bilangan adalah 84</li><li>Selisih dua bilangan terbesar adalah 3</li><li>Selisih bilangan terbesar dan terkecil adalah 4</li><li>Bilangan terkecil adalah 5</li></ol>",
                "options": [
                        {
                                "id": "A",
                                "text": "(1), (2), dan (3) saja yang benar"
                        },
                        {
                                "id": "B",
                                "text": "(1) dan (3) saja yang benar"
                        },
                        {
                                "id": "C",
                                "text": "(2) dan (4) saja yang benar"
                        },
                        {
                                "id": "D",
                                "text": "Hanya (4) yang benar"
                        },
                        {
                                "id": "E",
                                "text": "Semua pilihan benar"
                        }
                ],
                "kunci": "A",
                "pembahasan": "<strong>Analisis Nilai a, b, dan c:</strong><br>1. \\(a\\) adalah bilangan asli faktor dari 24 dan \\(a < 6\\), sehingga \\(a \\in \\{1, 2, 3, 4\\}\\).<br>2. Dari \\(2a - c = 5 \\implies c = 2a - 5\\). Karena \\(c\\) bilangan asli (\\(c \\ge 1\\)), maka:<br>   \\(2a - 5 \\ge 1 \\implies 2a \\ge 6 \\implies a \\ge 3\\).<br>   Maka kemungkinan nilai \\(a\\) hanya <strong>3</strong> atau <strong>4</strong>.<br><br><strong>Uji Nilai a:</strong><br>• Jika \\(a = 3\\):<br>  \\(c = 2(3) - 5 = 1\\)<br>  \\(3(b - 1) = 24 \\implies b - 1 = 8 \\implies b = 9\\).<br>  Namun, \\(\\text{FPB}(a, b) = \\text{FPB}(3, 9) = 3 \\ne 1\\) (Gugur, karena syarat FPB harus 1).<br><br>• Jika \\(a = 4\\):<br>  \\(c = 2(4) - 5 = 3\\)<br>  \\(4(b - 1) = 24 \\implies b - 1 = 6 \\implies b = 7\\).<br>  Uji FPB berpasangan: \\(\\text{FPB}(4, 7) = 1\\), \\(\\text{FPB}(4, 3) = 1\\), \\(\\text{FPB}(7, 3) = 1\\). (Memenuhi semua syarat!).<br><br>Maka ketiga bilangan adalah: \\(c = 3\\) (terkecil), \\(a = 4\\) (tengah), \\(b = 7\\) (terbesar).<br><br><strong>Uji Pernyataan:</strong><br>(1) Hasil kali: \\(a \\times b \\times c = 4 \\times 7 \\times 3 = 84\\) (BENAR).<br>(2) Selisih dua terbesar: \\(7 - 4 = 3\\) (BENAR).<br>(3) Selisih terbesar dan terkecil: \\(7 - 3 = 4\\) (BENAR).<br>(4) Bilangan terkecil adalah 5 (SALAH, yang terkecil adalah 3).<br><br><strong>Kesimpulan:</strong> Pernyataan (1), (2), dan (3) benar (Opsi A)."
        },
        {
                "id": 4,
                "topik": "Barisan & Deret Aritmetika",
                "soal": "Jika barisan \\(8, 13, 18, \\dots\\) merupakan barisan aritmetika, manakah pernyataan berikut yang bernilai benar?<br><ol class='list-decimal list-inside space-y-1 my-2 text-xs sm:text-sm text-slate-800'><li>Suku ke-10 lebih kecil daripada 55</li><li>Jumlah suku ke-3 dan ke-7 lebih besar daripada suku ke-10</li><li>Tidak ada suku yang merupakan kuadrat suatu bilangan bulat</li><li>Terdapat empat suku berturutan yang jumlahnya sama dengan suatu suku</li></ol>",
                "options": [
                        {
                                "id": "A",
                                "text": "(1), (2), dan (3) saja yang benar"
                        },
                        {
                                "id": "B",
                                "text": "(1) dan (3) saja yang benar"
                        },
                        {
                                "id": "C",
                                "text": "(2) dan (4) saja yang benar"
                        },
                        {
                                "id": "D",
                                "text": "Hanya (4) yang benar"
                        },
                        {
                                "id": "E",
                                "text": "Semua pilihan benar"
                        }
                ],
                "kunci": "A",
                "pembahasan": "<strong>Analisis Rumus Barisan Aritmetika:</strong><br>Suku pertama \\(a = 8\\), beda \\(b = 13 - 8 = 5\\).<br>Rumus suku ke-\\(n\\): \\(U_n = 8 + (n - 1)5 = 5n + 3\\).<br><br><strong>Uji Pernyataan:</strong><br>1. Suku ke-10: \\(U_{10} = 5(10) + 3 = 53\\). Karena \\(53 < 55\\), pernyataan (1) <strong>BENAR</strong>.<br>2. \\(U_3 = 5(3) + 3 = 18\\)<br>   \\(U_7 = 5(7) + 3 = 38\\)<br>   \\(U_3 + U_7 = 18 + 38 = 56\\). Karena \\(56 > 53\\) (lebih besar dari \\(U_{10}\\)), pernyataan (2) <strong>BENAR</strong>.<br>3. Perhatikan bentuk suku: \\(U_n = 5n + 3 \\equiv 3 \\pmod 5\\).<br>   Kuadrat bilangan bulat jika dibagi 5 hanya mungkin bersisa 0, 1, atau 4 (tidak pernah bersisa 3). Oleh karena itu, <em>tidak ada suku yang merupakan kuadrat sempurna</em>. Pernyataan (3) <strong>BENAR</strong>.<br>4. Jumlah 4 suku berturutan selalu bernilai genap kelipatan yang jika dibagi 5 bersisa 2, sehingga tidak pernah sama dengan suku manapun yang bersisa 3 modulo 5. Pernyataan (4) <strong>SALAH</strong>.<br><br><strong>Kesimpulan:</strong> Pernyataan (1), (2), dan (3) benar (Opsi A)."
        },
        {
                "id": 5,
                "topik": "Logika Himpunan & Alur Pekerjaan (Dependency Graph)",
                "soal": "Jika \\(X\\) adalah himpunan pekerjaan, notasi \\(X \\to y\\) diartikan bahwa pekerjaan \\(y\\) hanya dapat dilakukan secara langsung setelah menyelesaikan <strong>salah satu</strong> pekerjaan pada himpunan \\(X\\).<br><br>Diketahui aturan prasyarat:<br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs sm:text-sm my-2 space-y-1'><div>• \\(\\{\\} \\to P1\\) (P1 bisa dikerjakan langsung)</div><div>• \\(\\{\\} \\to P2\\) (P2 bisa dikerjakan langsung)</div><div>• \\(\\{P1, P2\\} \\to P3\\)</div><div>• \\(\\{P3\\} \\to P4\\)</div><div>• \\(\\{P2\\} \\to P5\\)</div><div>• \\(\\{P4, P5\\} \\to P6\\)</div></div>Manakah urutan penyelesaian pekerjaan yang valid agar dapat melakukan pekerjaan <strong>P6</strong>?<br><ol class='list-decimal list-inside space-y-1 my-2 text-xs sm:text-sm text-slate-800'><li>\\(P1 \\to P4 \\to P6\\)</li><li>\\(P2 \\to P5 \\to P6\\)</li><li>\\(P1 \\to P3 \\to P5 \\to P6\\)</li><li>\\(P1 \\to P3 \\to P4 \\to P6\\)</li></ol>",
                "options": [
                        {
                                "id": "A",
                                "text": "(1), (2), dan (3) saja yang benar"
                        },
                        {
                                "id": "B",
                                "text": "(1) dan (3) saja yang benar"
                        },
                        {
                                "id": "C",
                                "text": "(2) dan (4) saja yang benar"
                        },
                        {
                                "id": "D",
                                "text": "Hanya (4) yang benar"
                        },
                        {
                                "id": "E",
                                "text": "Semua pilihan benar"
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Analisis Aturan Transisi:</strong><br>Untuk dapat mengerjakan \\(P6\\), syaratnya adalah menyelesaikan salah satu dari \\(\\{P4, P5\\}\\).<br><br>• <strong>Jalur 1 (\\(P1 \\to P4 \\to P6\\)):</strong> Tidak valid, karena \\(P4\\) hanya bisa dikerjakan setelah \\(P3\\), bukan langsung dari \\(P1\\).<br>• <strong>Jalur 2 (\\(P2 \\to P5 \\to P6\\)):</strong> <strong>Valid!</strong> Mulai dari \\(P2\\) &rarr; buka \\(P5\\) (karena \\(P2 \\in \\{P2\\}\\)) &rarr; buka \\(P6\\) (karena \\(P5 \\in \\{P4, P5\\}\\)).<br>• <strong>Jalur 3 (\\(P1 \\to P3 \\to P5 \\to P6\\)):</strong> Tidak valid, karena \\(P5\\) mensyaratkan \\(P2\\), bukan \\(P3\\).<br>• <strong>Jalur 4 (\\(P1 \\to P3 \\to P4 \\to P6\\)):</strong> <strong>Valid!</strong> Mulai dari \\(P1\\) &rarr; buka \\(P3\\) &rarr; buka \\(P4\\) &rarr; buka \\(P6\\).<br><br><strong>Kesimpulan:</strong> Urutan yang benar adalah (2) dan (4) (Opsi C)."
        },
        {
                "id": 6,
                "topik": "Kecukupan Data: Titik Potong Fungsi Kubik",
                "soal": "Apakah grafik fungsi \\(f(x) = x^3 + bx + c\\) memotong sumbu-\\(x\\) di tepat satu titik?<br><br>Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:<br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs sm:text-sm my-2'>(1) \\(b > 0\\)<br>(2) \\(bc > 0\\)</div>",
                "options": [
                        {
                                "id": "A",
                                "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
                        },
                        {
                                "id": "B",
                                "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
                        },
                        {
                                "id": "C",
                                "text": "Dua pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
                        },
                        {
                                "id": "D",
                                "text": "Salah satu pernyataan SAJA cukup untuk menjawab pertanyaan."
                        },
                        {
                                "id": "E",
                                "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
                        }
                ],
                "kunci": "A",
                "pembahasan": "<strong>Analisis Turunan & Kemonotonan Fungsi:</strong><br>Turunan pertama fungsi adalah \\(f'(x) = 3x^2 + b\\).<br><br><strong>Uji Pernyataan (1): \\(b > 0\\)</strong><br>Karena \\(x^2 \\ge 0\\) untuk setiap \\(x \\in \\mathbb{R}\\) dan \\(b > 0\\), maka \\(f'(x) = 3x^2 + b > 0\\) selalu bernilai positif untuk semua nilai \\(x\\).<br>Artinya grafik fungsi \\(f(x)\\) adalah fungsi yang selalu <em>monoton naik murni</em> (strictly increasing) tanpa memiliki titik stasioner/balik.<br>Karena fungsi kubik kontinu dari \\(-\\infty\\) sampai \\(+\\infty\\) dan selalu naik, ia <strong>pasti memotong sumbu-x di tepat satu titik</strong>.<br>&rarr; <em>Pernyataan (1) SAJA CUKUP menjawab YA secara pasti.</em><br><br><strong>Uji Pernyataan (2): \\(bc > 0\\)</strong><br>Hanya menyatakan bahwa tanda \\(b\\) dan \\(c\\) sama. Jika \\(b < 0\\) dan \\(c < 0\\), kurva memiliki titik balik dan jumlah titik potong sumbu-x bisa 1 atau 3 bergantung pada nilai ekstrem lokal.<br>&rarr; <em>Pernyataan (2) SAJA TIDAK CUKUP.</em><br><br><strong>Kesimpulan:</strong> Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup (Opsi A)."
        },
        {
                "id": 7,
                "topik": "Kecukupan Data: Geometri Trapesium",
                "soal": "Pada segi enam \\(KLMNOP\\), titik-titik \\(K, L, M,\\) dan \\(N\\) merupakan titik-titik sudut trapesium sama kaki dengan \\(KL = MN\\) dan sisi sejajar \\(LM \\parallel KN\\).<br>Berapakah besar sudut \\(\\angle KNO\\)?<br><br>Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:<br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs sm:text-sm my-2'>(1) Besar \\(\\angle MNO = 150^\\circ\\)<br>(2) \\(KN = 2LM\\)</div>",
                "options": [
                        {
                                "id": "A",
                                "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
                        },
                        {
                                "id": "B",
                                "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
                        },
                        {
                                "id": "C",
                                "text": "Dua pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
                        },
                        {
                                "id": "D",
                                "text": "Salah satu pernyataan SAJA cukup untuk menjawab pertanyaan."
                        },
                        {
                                "id": "E",
                                "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
                        }
                ],
                "kunci": "E",
                "pembahasan": "<strong>Analisis Geometri Sudut:</strong><br>Perhatikan bahwa \\(\\angle KNO = \\angle MNO - \\angle MNK\\).<br><br>• <strong>Pernyataan (1):</strong> Memberikan besar \\(\\angle MNO = 150^\\circ\\), tetapi sudut alas trapesium \\(\\angle MNK\\) belum diketahui karena tidak ada informasi kemiringan kaki trapesium.<br>• <strong>Pernyataan (2):</strong> Hanya memberikan perbandingan panjang sisi sejajar \\(KN = 2LM\\). Sudut \\(\\angle MNK\\) masih bergantung pada tinggi trapesium atau panjang kaki \\(MN\\).<br>• <strong>Gabungan (1) dan (2):</strong> Mengetahui perbandingan alas dan sudut luar tidak memberikan nilai tunggal bagi sudut dalam trapesium \\(\\angle MNK\\) karena trapesium masih dapat direnggangkan/ditinggikan secara fleksibel.<br><br><strong>Kesimpulan:</strong> Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan (Opsi E)."
        },
        {
                "id": 8,
                "topik": "Kecukupan Data: Statistika Bilangan Bulat",
                "soal": "Lima bilangan bulat positif memiliki rata-rata 6. Berapakah nilai dua bilangan terkecil?<br><br>Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:<br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs sm:text-sm my-2'>(1) Jangkauannya sama dengan 4<br>(2) Tidak ada bilangan yang bernilai sama</div>",
                "options": [
                        {
                                "id": "A",
                                "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
                        },
                        {
                                "id": "B",
                                "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
                        },
                        {
                                "id": "C",
                                "text": "Dua pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
                        },
                        {
                                "id": "D",
                                "text": "Salah satu pernyataan SAJA cukup untuk menjawab pertanyaan."
                        },
                        {
                                "id": "E",
                                "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Analisis Matematika:</strong><br>Misalkan kelima bilangan bulat positif terurut adalah \\(x_1 \\le x_2 \\le x_3 \\le x_4 \\le x_5\\).<br>Rata-rata = 6 &rarr; Jumlah kelima bilangan: \\(x_1 + x_2 + x_3 + x_4 + x_5 = 5 \\times 6 = 30\\).<br><br>• <strong>Pernyataan (1) SAJA:</strong> Jangkauan \\(x_5 - x_1 = 4\\). Banyak kemungkinan kombinasi bilangan (misal: 4, 6, 6, 6, 8 atau 5, 5, 5, 6, 9) sehingga dua nilai terkecil tidak unik. (Tidak cukup).<br>• <strong>Pernyataan (2) SAJA:</strong> Semua bilangan berbeda: \\(x_1 < x_2 < x_3 < x_4 < x_5\\). Masih tak terhingga kombinasi bilangan berbeda yang berjumlah 30. (Tidak cukup).<br><br>• <strong>Dua Pernyataan Bersama-sama:</strong><br>Karena semua 5 bilangan berbeda dan jangkauan \\(x_5 - x_1 = 4\\), kelima bilangan bulat tersebut <strong>harus merupakan 5 bilangan bulat berurutan</strong>:<br>\\(x, x+1, x+2, x+3, x+4\\).<br>Jumlah: \\(5x + 10 = 30 \\implies 5x = 20 \\implies x = 4\\).<br>Maka kelima bilangan pasti bernilai unik: <strong>4, 5, 6, 7, 8</strong>.<br>Dua bilangan terkecil dapat dipastikan secara tunggal, yaitu <strong>4 dan 5</strong>.<br><br><strong>Kesimpulan:</strong> Dua pernyataan BERSAMA-SAMA cukup, tetapi satu pernyataan saja tidak cukup (Opsi C)."
        },
        {
                "id": 9,
                "topik": "Aljabar & Limit Fungsi",
                "soal": "Semua pasangan \\((a, b)\\) di mana \\(a\\) dan \\(b\\) merupakan anggota dari himpunan \\(\\{2, 3, 4, 5, 7\\}\\) memenuhi persamaan limit:<br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-sm sm:text-base font-serif my-2'>$$\\lim_{x \\to 1} \\frac{x + b}{ax - 1} = 2$$</div>Berdasarkan informasi di atas, berapa banyakkah dari empat pernyataan berikut yang bernilai benar?<br><ol class='list-decimal list-inside space-y-1 my-2 text-xs sm:text-sm text-slate-800'><li>\\(a \\le b\\)</li><li>\\(a + b < ab\\)</li><li>\\(b - a = 1\\)</li><li>Terdapat dua pasangan nilai \\(a\\) dan \\(b\\) yang memenuhi</li></ol>",
                "options": [
                        {
                                "id": "A",
                                "text": "0"
                        },
                        {
                                "id": "B",
                                "text": "1"
                        },
                        {
                                "id": "C",
                                "text": "2"
                        },
                        {
                                "id": "D",
                                "text": "3"
                        },
                        {
                                "id": "E",
                                "text": "4"
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Langkah Penyelesaian Persamaan Limit:</strong><br>Substitusikan \\(x = 1\\) ke dalam bentuk limit:<br>$$\\frac{1 + b}{a(1) - 1} = 2 \\implies \\frac{1 + b}{a - 1} = 2$$$$1 + b = 2(a - 1) = 2a - 2 \\implies b = 2a - 3$$<br>Kita uji nilai \\(a \\in \\{2, 3, 4, 5, 7\\}\\):<br>• Jika \\(a = 2 \\implies b = 2(2) - 3 = 1\\) (Tidak memenuhi, 1 bukan anggota himpunan).<br>• Jika \\(a = 3 \\implies b = 2(3) - 3 = 3\\) &rarr; Pasangan \\((3, 3)\\) [Memenuhi].<br>• Jika \\(a = 4 \\implies b = 2(4) - 3 = 5\\) &rarr; Pasangan \\((4, 5)\\) [Memenuhi].<br>• Jika \\(a = 5 \\implies b = 2(5) - 3 = 7\\) &rarr; Pasangan \\((5, 7)\\) [Memenuhi].<br>• Jika \\(a = 7 \\implies b = 2(7) - 3 = 11\\) (Tidak memenuhi, 11 bukan anggota himpunan).<br><br>Terdapat <strong>3 pasangan yang memenuhi</strong>: \\((3, 3), (4, 5), (5, 7)\\).<br><br><strong>Uji Keempat Pernyataan:</strong><br>1. \\(a \\le b\\): untuk \\((3, 3) \\implies 3 \\le 3\\), untuk \\((4, 5) \\implies 4 \\le 5\\), untuk \\((5, 7) \\implies 5 \\le 7\\). <strong>(BENAR)</strong>.<br>2. \\(a + b < ab\\): \\(3+3 < 3(3) \\implies 6 < 9\\); \\(4+5 < 4(5) \\implies 9 < 20\\); \\(5+7 < 5(7) \\implies 12 < 35\\). <strong>(BENAR)</strong>.<br>3. \\(b - a = 1\\): Pada pasangan \\((3, 3)\\), \\(3 - 3 = 0 \\ne 1\\). <strong>(SALAH)</strong>.<br>4. Terdapat dua pasangan nilai \\(a\\) dan \\(b\\): Faktanya ada 3 pasangan. <strong>(SALAH)</strong>.<br><br><strong>Kesimpulan:</strong> Pernyataan yang bernilai benar ada <strong>2</strong> (Pernyataan 1 dan 2) &rarr; Opsi C."
        },
        {
                "id": 10,
                "topik": "Operasi Hitung Khusus / Aljabar Simbolik",
                "soal": "Operasi simbolik \\(::\\) didefinisikan dengan aturan:<br><div class='p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-sm sm:text-base font-serif my-2'>$$m \\mathbin{::} n = n(m - n) + n^2$$</div>dengan \\(m, n\\) adalah bilangan bulat.<br><br>Nilai dari \\(-4 \\mathbin{::} (1 \\mathbin{::} 2)\\) adalah ....<br><ol class='list-decimal list-inside space-y-1 my-2 text-xs sm:text-sm text-slate-800'><li>2</li><li>0</li><li>-6</li><li>-8</li></ol>",
                "options": [
                        {
                                "id": "A",
                                "text": "(1), (2), dan (3) saja yang benar"
                        },
                        {
                                "id": "B",
                                "text": "(1) dan (3) saja yang benar"
                        },
                        {
                                "id": "C",
                                "text": "(2) dan (4) saja yang benar"
                        },
                        {
                                "id": "D",
                                "text": "Hanya (4) yang benar"
                        },
                        {
                                "id": "E",
                                "text": "Semua pilihan benar"
                        }
                ],
                "kunci": "D",
                "pembahasan": "<strong>Penyederhanaan Operasi Simbolik:</strong><br>Jabarkan bentuk aljabar dari definisi:<br>$$m \\mathbin{::} n = n(m - n) + n^2 = mn - n^2 + n^2 = m \\cdot n$$<br>Ternyata operasi \\(m \\mathbin{::} n\\) setara dengan perkalian biasa \\(m \\cdot n\\)!<br><br><strong>Hitung Nilai Soal:</strong><br>1. Hitung dalam kurung terlebih dahulu:<br>   \\(1 \\mathbin{::} 2 = 1 \\cdot 2 = 2\\)<br>2. Hitung operasi berikutnya:<br>   \\(-4 \\mathbin{::} 2 = (-4) \\cdot 2 = -8\\)<br><br>Maka nilai akhirnya adalah <strong>-8</strong>.<br>Dari pilihan pernyataan yang diberikan, hanya pernyataan (4) yang bernilai benar.<br><br><strong>Kesimpulan:</strong> Hanya (4) yang benar (Opsi D)."
        }
    ],

    // -----------------------------------------------------------------
    // PENGETAHUAN & PEMAHAMAN UMUM (PPU) - PAKET 1 (Sumber: Bank Soal UTBK 2021)
    // -----------------------------------------------------------------
    'ppu_1': [
        {
                "id": 1,
                "bacaanId": "ppu1_teks1",
                "bacaanTitle": "Teks untuk Soal Nomor 1—3",
                "bacaan": "<p class='mb-2'>(1) Puntung rokok adalah salah satu bentuk sampah yang paling umum di dunia yang menyebabkan kerusakan lingkungan yang parah. (2) Analisis distribusi sampah puntung rokok di lingkungan perkotaan dapat menghasilkan wawasan yang berguna untuk intervensi lebih lanjut mengurangi sampah ini. (3) Informasi tentang puntung rokok yang dibuang di ruang publik dikumpulkan melalui pengamatan sosial sistematis di berbagai sampel daerah di Madrid, Spanyol. [...]. (4) Analisis data dilakukan secara kualitatif dengan menggunakan lokasi sebagai parameter utama.</p><p class='mb-2'>(5) Ditemukan bahwa lokasi perhotelan dan perhentian angkutan umum merupakan tempat dengan konsentrasi puntung rokok tertinggi. (6) Lokasi selanjutnya adalah pintu masuk lokasi pendidikan dan taman bermain. (7) Daerah [...] kota menunjukkan jumlah puntung rokok tertinggi dibandingkan dengan daerah pinggiran kota. (8) Penelitian ini merupakan studi yang memperkirakan dan memetakan sampah puntung rokok di wilayah perkotaan besar. (9) Temuan dalam penelitian ini menunjukkan sifat puntung rokok yang ada di mana-mana di lingkungan perkotaan. (10) Oleh karena itu, diperlukan adanya intervensi untuk mengurangi dampaknya terhadap kesehatan masyarakat dan lingkungan.</p><p class='mt-2 text-xs text-slate-500 italic'>Diadaptasi dari: https://www.sciencedirect.com/</p>",
                "topik": "Ketepatan Diksi & Kolokasi Kata",
                "soal": "Kata yang tepat untuk mengisi rumpang pada frasa <em>... kota</em> dalam kalimat (7) adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "inti"
                        },
                        {
                                "id": "B",
                                "text": "sentral"
                        },
                        {
                                "id": "C",
                                "text": "fokus"
                        },
                        {
                                "id": "D",
                                "text": "induk"
                        },
                        {
                                "id": "E",
                                "text": "pusat"
                        }
                ],
                "kunci": "E",
                "pembahasan": "<strong>Analisis Kolokasi & Pasangan Kata:</strong><br>Dalam tata ruang perkotaan dan bahasa Indonesia baku, lawan kata dari <em>daerah pinggiran kota</em> (suburban/outskirts) adalah <strong>daerah pusat kota</strong> (city center / downtown).<br><br>Kolokasi kata yang lazim dan berterima secara semantis adalah <em>pusat kota</em>.<br><br><strong>Kesimpulan:</strong> Kata yang tepat adalah <strong>pusat</strong> (Opsi E)."
        },
        {
                "id": 2,
                "bacaanId": "ppu1_teks1",
                "bacaanTitle": "Teks untuk Soal Nomor 1—3",
                "topik": "Parafrase & Restrukturisasi Kalimat",
                "soal": "Gagasan pada kalimat (5) <em>\"Ditemukan bahwa lokasi perhotelan dan perhentian angkutan umum merupakan tempat dengan konsentrasi puntung rokok tertinggi\"</em> dapat diungkapkan kembali secara efektif melalui kalimat ....",
                "options": [
                        {
                                "id": "A",
                                "text": "Konsentrasi puntung rokok tertinggi membuat lokasi perhotelan dan perhentian angkutan umum menjadi pusat temuan penelitian"
                        },
                        {
                                "id": "B",
                                "text": "Jumlah puntung rokok terkonsentrasi di tempat-tempat tertentu, misalnya lokasi perhotelan dan perhentian angkutan umum"
                        },
                        {
                                "id": "C",
                                "text": "Para ahli menemukan bahwa hotel dan perhentian angkutan umum adalah tempat favorit para perokok"
                        },
                        {
                                "id": "D",
                                "text": "Penelitian ini dilakukan khusus terkonsentrasi pada lokasi perhotelan dan perhentian angkutan umum yang banyak dikunjungi orang"
                        },
                        {
                                "id": "E",
                                "text": "Hasil penelitian menunjukkan bahwa konsentrasi puntung rokok tertinggi terdapat di lokasi perhotelan dan terminal angkutan umum"
                        }
                ],
                "kunci": "E",
                "pembahasan": "<strong>Analisis Parafrase Kalimat Ilmiah:</strong><br>Kalimat (5) menyampaikan inti hasil temuan studi mengenai sebaran konsentrasi sampah puntung rokok tertinggi.<br><br>Kalimat pada opsi <strong>E</strong> menyampaikan seluruh komponen esensial kalimat asli secara akurat tanpa menambah asumsi subjektif yang tidak ada di teks (seperti 'tempat favorit perokok' pada opsi C atau 'khusus terkonsentrasi' pada opsi D).<br><br><strong>Kesimpulan:</strong> Parafrase yang paling tepat adalah <strong>Opsi E</strong>."
        },
        {
                "id": 3,
                "bacaanId": "ppu1_teks1",
                "bacaanTitle": "Teks untuk Soal Nomor 1—3",
                "topik": "Kepaduan Paragraf & Kalimat Pasif",
                "soal": "Kalimat pasif yang tepat untuk mengisi rumpang pada paragraf 1 [...] setelah kalimat (3) adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "Diperkirakan kepadatan puntung rokok di ruang publik di seluruh kota mudah terkumpul"
                        },
                        {
                                "id": "B",
                                "text": "Perkiraan kepadatan puntung rokok di ruang publik di seluruh kota adalah data yang harus dikumpulkan"
                        },
                        {
                                "id": "C",
                                "text": "Data yang terkumpul digunakan untuk memperkirakan kepadatan puntung rokok di ruang publik di seluruh kota"
                        },
                        {
                                "id": "D",
                                "text": "Pengumpulan data dilakukan untuk mengukur kepadatan puntung rokok di ruang publik di seluruh kota"
                        },
                        {
                                "id": "E",
                                "text": "Informasi tentang kepadatan puntung rokok di ruang publik terkumpul sebagai data primer"
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Analisis Alur Logika & Bentuk Pasif:</strong><br>Kalimat (3) menyatakan: <em>\"Informasi tentang puntung rokok... <strong>dikumpulkan</strong> melalui pengamatan sosial sistematis...\"</em><br>Kalimat rumpang harus menjembatani data yang baru saja dikumpulkan dengan analisis data pada kalimat (4): <em>\"Analisis data dilakukan secara kualitatif...\"</em>.<br><br>Kalimat pasif pada opsi <strong>C</strong>: <em>\"Data yang terkumpul digunakan untuk memperkirakan kepadatan puntung rokok...\"</em> menyambung kohesi leksikal 'dikumpulkan' &rarr; 'data yang terkumpul' dan memberikan tujuan fungsi data tersebut.<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>C</strong>."
        },
        {
                "id": 4,
                "bacaanId": "ppu1_teks2",
                "bacaanTitle": "Teks untuk Soal Nomor 4—6",
                "bacaan": "<p class='mb-2'>(1) Kebudayaan yang dimiliki suatu kelompok tidak akan terhindar dari pengaruh kebudayaan kelompok lain dengan adanya kontak antarkelompok atau melalui proses difusi. (2) Suatu kelompok sosial akan mengadopsi suatu kebudayaan tertentu apabila kebudayaan tersebut berguna untuk mengatasi atau memenuhi tuntutan yang dihadapinya. (3) Adopsi tersebut dipengaruhi oleh faktor-faktor fisikal, seperti iklim, topografi, sumber daya alam, dan sejenisnya.</p><p class='mb-2'>(4) Perkembangan zaman juga mendorong terjadinya perubahan-perubahan di segala bidang termasuk dalam kebudayaan. (5) Mau tidak mau kebudayaan yang dianut semua kelompok sosial akan bergeser, baik secara lambat maupun cepat, yang akan menimbulkan konflik antara kelompok yang menghendaki perubahan dan yang tidak menghendaki perubahan. (6) Hal yang terpenting dalam proses pengembangan suatu kebudayaan adalah adanya kontrol atau kendali terhadap perilaku reguler yang ditampilkan oleh para penganutnya.</p><p>(7) Tidak jarang perilaku yang ditampilkan kelompok tertentu bertolak belakang dengan perilaku yang dianut di dalam kelompok sosialnya. (8) Oleh karena itu, kontrol sosial diperlukan untuk memfilter nilai-nilai yang sesuai dengan kebudayaan suatu kelompok.</p><p class='mt-2 text-xs text-slate-500 italic'>Diadaptasi dari: https://arinaadjer.blogspot.com/</p>",
                "topik": "Semantik: Sinonim Kata",
                "soal": "Sinonim kata <strong>difusi</strong> dalam kalimat (1) adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "pertukaran"
                        },
                        {
                                "id": "B",
                                "text": "penyatuan"
                        },
                        {
                                "id": "C",
                                "text": "pembauran"
                        },
                        {
                                "id": "D",
                                "text": "pemerataan"
                        },
                        {
                                "id": "E",
                                "text": "pemanfaatan"
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Analisis Makna Kata Difusi:</strong><br>Dalam sosiologi dan antropologi budaya, <strong>difusi kebudayaan</strong> adalah proses penyebaran, penjalaran, dan percampuran unsur-unsur kebudayaan dari suatu masyarakat ke masyarakat lain.<br><br>Sinonim kontekstual yang paling tepat untuk difusi kebudayaan antarpopulasi adalah <strong>pembauran</strong>.<br><br><strong>Kesimpulan:</strong> Sinonim kata difusi adalah <strong>pembauran</strong> (Opsi C)."
        },
        {
                "id": 5,
                "bacaanId": "ppu1_teks2",
                "bacaanTitle": "Teks untuk Soal Nomor 4—6",
                "topik": "Makna Asosiatif & Leksikal",
                "soal": "Frasa <em>yang tidak menghendaki perubahan</em> pada kalimat (5) memiliki makna asosiatif dengan kata ....",
                "options": [
                        {
                                "id": "A",
                                "text": "tradisional"
                        },
                        {
                                "id": "B",
                                "text": "fanatik"
                        },
                        {
                                "id": "C",
                                "text": "ortodoks"
                        },
                        {
                                "id": "D",
                                "text": "konservatif"
                        },
                        {
                                "id": "E",
                                "text": "apatis"
                        }
                ],
                "kunci": "D",
                "pembahasan": "<strong>Analisis Makna Asosiatif:</strong><br>Dalam diskursus sosiologi dan politik kebudayaan:<br>• <strong>Konservatif:</strong> Sikap yang berpegang teguh pada keadaan yang sudah mapan dan cenderung menolak atau tidak menghendaki perubahan sosial baru.<br>• Tradisional: Berkaitan dengan tradisi turun-temurun.<br>• Ortodoks: Berpandangan teguh pada doktrin agama/ajaran murni.<br>• Apatis: Tidak peduli / acuh tak acuh.<br><br>Oleh sebab itu, sikap yang secara spesifik 'tidak menghendaki perubahan' berasoisasi langsung dengan paham <strong>konservatif</strong>.<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>konservatif</strong> (Opsi D)."
        },
        {
                "id": 6,
                "bacaanId": "ppu1_teks2",
                "bacaanTitle": "Teks untuk Soal Nomor 4—6",
                "topik": "Gaya Bahasa: Perumpamaan (Metafora)",
                "soal": "Perumpamaan (analogi / metafora) pada teks di atas dapat ditemukan pada ....",
                "options": [
                        {
                                "id": "A",
                                "text": "kalimat (1)"
                        },
                        {
                                "id": "B",
                                "text": "kalimat (4)"
                        },
                        {
                                "id": "C",
                                "text": "kalimat (5)"
                        },
                        {
                                "id": "D",
                                "text": "kalimat (6)"
                        },
                        {
                                "id": "E",
                                "text": "kalimat (8)"
                        }
                ],
                "kunci": "E",
                "pembahasan": "<strong>Analisis Majas & Perumpamaan:</strong><br>Perhatikan kalimat (8): <em>\"Oleh karena itu, kontrol sosial diperlukan untuk <strong>memfilter</strong> nilai-nilai yang sesuai dengan kebudayaan suatu kelompok.\"</em><br><br>Kata <em>memfilter</em> (menyaring) secara harfiah merupakan tindakan fisik menggunakan alat saringan/penyaring pada zat cair/padat. Di sini kata tersebut digunakan secara kiasan (metaforis) untuk mengumpamakan proses penyeleksian nilai-nilai abstrak oleh masyarakat.<br><br><strong>Kesimpulan:</strong> Perumpamaan terdapat pada <strong>kalimat (8)</strong> (Opsi E)."
        },
        {
                "id": 7,
                "bacaanId": "ppu1_teks3",
                "bacaanTitle": "Teks untuk Soal Nomor 7—9",
                "bacaan": "<p class='mb-2'>(1) Kota-kota besar di Indonesia saat ini telah mengembangkan diri untuk lebih ramah terhadap lingkungan serta berupaya untuk menjaga keberlanjutan lingkungan. (2) Di Yogyakarta, upaya mewujudkan nuansa kota yang ramah lingkungan dibentuk oleh kalangan pemuda yang melakukan kampanye tentang perlunya menanam tumbuhan rindang di perkotaan, juga mengajari tata cara berkebun di lahan sempit. (3) Aksi kolektif yang dibangun oleh masyarakat mulai menunjukkan perubahan sikap terhadap penyelesaian masalah lingkungan yang dimulai dari skala individu. (4) Mereka bergabung untuk mewujudkan cita-cita yang dapat mengatasi permasalahan lingkungan akibat sampah yang dibuang sembarangan, menurunnya kualitas kota, dan kurangnya ruang hijau. (5) Kegiatan ini dikenal dengan Jogja Berkebun yang terdiri atas berbagai macam latar belakang profesi yang berbeda, mulai dari profesional, wiraswasta, pelajar, hingga ibu rumah tangga.</p><p>(6) Komunitas-komunitas masyarakat perkotaan secara rutin menggelar kegiatan gotong royong untuk meningkatkan kualitas lingkungan dari infrastruktur fisik atau nonfisik kampung hingga ruang publik. (7) Di Jakarta, upaya penyelamatan lingkungan ada di sekitar area kampung di mana masyarakatnya berusaha untuk menyelesaikan masalah lingkungan di kampungnya. (8) Didorong oleh pendampingan beberapa universitas di Jakarta, masyarakat kemudian mulai mengembangkan program kampung hijau sebagai kampanye menjaga kebersihan dan penghijauan lingkungan di kampung-kampung padat penduduk ibu kota.</p><p class='mt-2 text-xs text-slate-500 italic'>Diadaptasi dari: https://repository.unair.ac.id/</p>",
                "topik": "Paralelisme Bentuk Frasa (Kalimat Efektif)",
                "soal": "Frasa <em>sampah yang dibuang sembarangan, menurunnya kualitas kota, dan kurangnya ruang hijau</em> pada kalimat (4) akan menjadi benar bila susunannya diubah secara paralel menjadi ....",
                "options": [
                        {
                                "id": "A",
                                "text": "sampah yang dibuang sembarangan, menurunnya kualitas kota, dan ruang hijau yang berkurang"
                        },
                        {
                                "id": "B",
                                "text": "sampah yang dibuang secara sembarangan, kualitas kota yang menurun, dan kurangnya ruang hijau"
                        },
                        {
                                "id": "C",
                                "text": "pembuangan sampah yang sembarangan, menurunnya kualitas kota, dan berkurangnya ruang hijau"
                        },
                        {
                                "id": "D",
                                "text": "pembuangan sampah yang sembarangan, kualitas kota yang menurun, dan berkurangnya ruang hijau"
                        },
                        {
                                "id": "E",
                                "text": "dibuangnya sampah secara sembarangan, turunnya kualitas kota, dan kekurangan ruang hijau"
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Prinsip Keparalelan Bentuk (Paralelisme):</strong><br>Dalam rincian konjungtif koordinatif, bentuk satuan kata yang sejajar harus menggunakan pola bentukan kata yang sejenis.<br><br>Pada opsi <strong>C</strong>, ketiganya memiliki bentuk nomina tindakan berimbuhan sejajar (pe-an / me-...-nya / ber-...-nya):<br>1. <em>pembuangan sampah yang sembarangan</em> (nomina pe-an)<br>2. <em>menurunnya kualitas kota</em> (nomina me-...-nya)<br>3. <em>berkurangnya ruang hijau</em> (nomina ber-...-nya)<br><br><strong>Kesimpulan:</strong> Susunan yang benar dan sejajar adalah <strong>Opsi C</strong>."
        },
        {
                "id": 8,
                "bacaanId": "ppu1_teks3",
                "bacaanTitle": "Teks untuk Soal Nomor 7—9",
                "topik": "Koherensi & Urutan Logis Paragraf",
                "soal": "Gagasan pada paragraf pertama akan menjadi lebih mudah dipahami dan mengalir logis apabila urutan kalimatnya adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "3-2-1-5-4"
                        },
                        {
                                "id": "B",
                                "text": "3-1-2-4-5"
                        },
                        {
                                "id": "C",
                                "text": "1-3-2-5-4"
                        },
                        {
                                "id": "D",
                                "text": "1-3-4-2-5"
                        },
                        {
                                "id": "E",
                                "text": "3-2-5-4-1"
                        }
                ],
                "kunci": "D",
                "pembahasan": "<strong>Analisis Alur Ide Pokok Paragraf:</strong><br>• Kalimat (1): Pernyataan umum tentang komitmen kota-kota besar di Indonesia terhadap lingkungan.<br>• Kalimat (3): Munculnya aksi kolektif masyarakat dari skala individu.<br>• Kalimat (4): <em>Mereka</em> (merujuk pada masyarakat di kalimat 3) bergabung untuk mewujudkan cita-cita mengatasi sampah.<br>• Kalimat (2): Contoh konkrit perwujudan nuansa kota ramah lingkungan di Yogyakarta oleh pemuda.<br>• Kalimat (5): Kegiatan ini dikenal dengan nama <em>Jogja Berkebun</em>.<br><br>Urutan <strong>1 - 3 - 4 - 2 - 5</strong> menyajikan alur dari gagasan umum nasional &rarr; kesadaran kolektif masyarakat &rarr; gerakan spesifik pemuda Jogja Berkebun.<br><br><strong>Kesimpulan:</strong> Urutan yang paling padu adalah <strong>Opsi D</strong>."
        },
        {
                "id": 9,
                "bacaanId": "ppu1_teks3",
                "bacaanTitle": "Teks untuk Soal Nomor 7—9",
                "topik": "Hubungan Antarkalimat Paragraf",
                "soal": "Kalimat (6) dan kalimat (7) dalam bacaan di atas mengandung hubungan ....",
                "options": [
                        {
                                "id": "A",
                                "text": "pemaparan"
                        },
                        {
                                "id": "B",
                                "text": "pertentangan"
                        },
                        {
                                "id": "C",
                                "text": "penambahan"
                        },
                        {
                                "id": "D",
                                "text": "pemerian"
                        },
                        {
                                "id": "E",
                                "text": "penekanan"
                        }
                ],
                "kunci": "D",
                "pembahasan": "<strong>Analisis Hubungan Semantik Antarkalimat:</strong><br>• Kalimat (6) menyatakan pernyataan umum: <em>\"Komunitas-komunitas masyarakat perkotaan secara rutin menggelar kegiatan gotong royong...\"</em><br>• Kalimat (7) memberikan rincian kasus konkrit: <em>\"Di Jakarta, upaya penyelamatan lingkungan ada di sekitar area kampung...\"</em><br><br>Hubungan penjelasan dari hal umum ke rincian penggambaran kasus nyata disebut <strong>pemerian (elaborasi deskriptif rincian)</strong>.<br><br><strong>Kesimpulan:</strong> Hubungan antarkalimat tersebut adalah <strong>pemerian</strong> (Opsi D)."
        },
        {
                "id": 10,
                "bacaanId": "ppu1_teks4",
                "bacaanTitle": "Teks untuk Soal Nomor 10—12",
                "bacaan": "<p class='mb-2'>(1) Saat ini internet menggunakan kode kompleks untuk melindungi kerahasiaan informasi. (2) Akan tetapi, peretas semakin mahir mencari segala cara untuk mengalahkan sistem itu. (3) Hal ini tidak hanya menyebabkan pelanggaran privasi besar, tetapi juga menyebabkan penipuan yang mencapai triliunan dolar setiap tahun.</p><p class='mb-2'>(4) Namun sekarang, dunia lebih dekat dengan internet yang benar-benar aman dari ancaman serangan dunia maya yang semakin meningkat. (5) Hal ini berkat diciptakannya prototipe unik oleh tim ilmuwan internasional yang dapat mengubah cara berkomunikasi secara daring. (6) Penelitian yang dipimpin oleh University of Bristol memiliki potensi untuk melayani jutaan pengguna.</p><p>(7) Temuan ini berupa jaringan kuantum terbesar yang pernah ada dari jenisnya dan dapat digunakan untuk mengamankan komunikasi daring. (8) Dengan menerapkan teknik baru yang memanfaatkan hukum fisika sederhana, prototipe yang dibuat para ilmuwan ini mampu melindungi pesan dari penyusup sehingga transaksi informasi lebih dari dua pihak dapat dilakukan tanpa rasa cemas. (9) Hal ini merupakan terobosan besar karena sejauh ini fisikawan hanya mampu mengembangkan bentuk enkripsi yang aman bagi dua pengguna saja.</p><p class='mt-2 text-xs text-slate-500 italic'>Diadaptasi dari: https://www.sciencedaily.com/</p>",
                "topik": "Segmentasi Paragraf / Pemisahan Ide",
                "soal": "Apabila gagasan pada bacaan di atas dipisahkan menjadi dua paragraf, pengelompokan kalimat-kalimatnya agar gagasan pada masing-masing paragraf padu dan utuh adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "(1-2-3) dan (4-5-6-7-8-9)"
                        },
                        {
                                "id": "B",
                                "text": "(1-2-3-4) dan (5-6-7-8-9)"
                        },
                        {
                                "id": "C",
                                "text": "(1-2-3-4-5) dan (6-7-8-9)"
                        },
                        {
                                "id": "D",
                                "text": "(1-2-3-4-5-6) dan (7-8-9)"
                        },
                        {
                                "id": "E",
                                "text": "(1-2-3-4-5-6-7) dan (8-9)"
                        }
                ],
                "kunci": "A",
                "pembahasan": "<strong>Analisis Kesatuan Gagasan Pokok (Kohesi & Koherensi):</strong><br>• Kalimat (1) s.d. (3) fokus membahas <strong>masalah kerentanan internet konvensional</strong> terhadap aksi peretasan dan kerugian finansial.<br>• Kalimat (4) diawali dengan konjungsi pertentangan <em>\"Namun sekarang...\"</em> dan mulai membahas <strong>solusi baru berupa prototipe jaringan kuantum</strong> yang aman hingga kalimat (9).<br><br>Maka titik pisah alami yang mempertahankan keutuhan tema berada di antara kalimat (3) dan (4).<br><br><strong>Kesimpulan:</strong> Pengelompokan yang tepat adalah <strong>(1-2-3) dan (4-5-6-7-8-9)</strong> (Opsi A)."
        },
        {
                "id": 11,
                "bacaanId": "ppu1_teks4",
                "bacaanTitle": "Teks untuk Soal Nomor 10—12",
                "topik": "Sintaksis: Kalimat Efektif",
                "soal": "Ungkapan <em>\"prototipe yang dibuat para ilmuwan ini mampu melindungi pesan dari penyusup sehingga transaksi informasi lebih dari dua pihak dapat dilakukan tanpa rasa cemas\"</em> pada kalimat (8) dapat disempurnakan menjadi ....",
                "options": [
                        {
                                "id": "A",
                                "text": "pesan dari penyusup mampu dilindungi para ilmuwan melalui prototipe sehingga transisi informasi lebih dari dua pihak dapat dilakukan tanpa rasa cemas"
                        },
                        {
                                "id": "B",
                                "text": "prototipe mampu melindungi pesan para ilmuwan dari penyusup sehingga transaksi informasi lebih dari dua pihak dapat dilakukan tanpa rasa cemas"
                        },
                        {
                                "id": "C",
                                "text": "para ilmuwan membuat prototipe yang mampu melindungi pesan dari penyusup sehingga transaksi informasi lebih dari dua pihak dapat dilakukan tanpa rasa cemas"
                        },
                        {
                                "id": "D",
                                "text": "prototipe mampu membuat pesan dari ilmuwan sehingga transaksi informasi lebih dari dua pihak dapat terlindungi dari penyusup tanpa rasa cemas"
                        },
                        {
                                "id": "E",
                                "text": "transaksi informasi lebih dari dua pihak dapat dilakukan para ilmuwan tanpa rasa cemas sehingga mereka mampu membuat prototipe yang melindungi pesan dari penyusup"
                        }
                ],
                "kunci": "C",
                "pembahasan": "<strong>Analisis Efektivitas Kalimat:</strong><br>Struktur pada opsi <strong>C</strong> menempatkan subjek pelaku secara lugas dan aktif: <em>\"para ilmuwan (S) membuat (P) prototipe yang mampu melindungi pesan dari penyusup (O)...\"</em>.<br><br>Bentuk ini menghilangkan konstruksi pasif ganda yang berbelit-belit dan menjaga kelogisan makna secara utuh.<br><br><strong>Kesimpulan:</strong> Kalimat penyempurnaan yang tepat adalah <strong>Opsi C</strong>."
        },
        {
                "id": 12,
                "bacaanId": "ppu1_teks4",
                "bacaanTitle": "Teks untuk Soal Nomor 10—12",
                "topik": "Pola Dasar Kalimat Majemuk",
                "soal": "Dari bacaan di atas, kalimat yang berpola dasar sama dengan pola dasar kalimat <em>\"Masalah tersebut memengaruhi bukan hanya kondisi finansial, melainkan juga memengaruhi kondisi emosi anggota keluarga sepanjang periode.\"</em> adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "kalimat (2)"
                        },
                        {
                                "id": "B",
                                "text": "kalimat (3)"
                        },
                        {
                                "id": "C",
                                "text": "kalimat (4)"
                        },
                        {
                                "id": "D",
                                "text": "kalimat (8)"
                        },
                        {
                                "id": "E",
                                "text": "kalimat (9)"
                        }
                ],
                "kunci": "B",
                "pembahasan": "<strong>Analisis Pola Dasar Sintaksis:</strong><br>Kalimat acuan:<br>• <em>Masalah tersebut</em> = Subjek (S)<br>• <em>memengaruhi</em> = Predikat (P)<br>• <em>bukan hanya kondisi finansial, melainkan juga memengaruhi kondisi emosi...</em> = Objek / Pelengkap majemuk korelatif.<br><br>Perhatikan kalimat (3):<br>• <em>Hal ini</em> = Subjek (S)<br>• <em>tidak hanya menyebabkan</em> = Predikat (P)<br>• <em>pelanggaran privasi besar</em> = Objek 1 (O1)<br>• <em>tetapi juga menyebabkan penipuan...</em> = Objek 2 (O2)<br><br>Keduanya memiliki struktur dasar identik: <strong>Subjek + Predikat dengan konjungsi korelatif dua objek paralel</strong>.<br><br><strong>Kesimpulan:</strong> Kalimat yang berpola sama adalah <strong>kalimat (3)</strong> (Opsi B)."
        },
        {
                "id": 13,
                "bacaanId": "ppu1_teks5",
                "bacaanTitle": "Teks untuk Soal Nomor 13—15",
                "bacaan": "<p class='mb-2'>(1) Transformasi, kreativitas inovasi, dan produktivitas yang meningkat selama masa pandemi covid 19 ini menguatkan keyakinan kita bahwa perguruan tinggi di Indonesia mampu menghasilkan karya unggul. (2) Sinergi lintas disiplin keilmuan, lintas perguruan tinggi, dan lintas institusi terbukti mampu menghasilkan karya inovatif. (3) Transformasi digital harus diarahkan untuk meningkatkan mutu pendidikan tinggi dan menciptakan kolaborasi antarperguruan tinggi serta dunia industri. (4) Penguatan infrastruktur jaringan internet menjadi agenda yang harus segera dituntaskan. (5) Penguatan kemampuan dosen dalam pemanfaatan teknologi pembelajaran dan pengembangan platform pembelajaran menjadi tugas bersama.</p><p>(6) Program pemulihan ekonomi berbasis kekuatan kampus perlu dirancang dan diimplementasikan. (7) Berbagai program kampus merdeka dapat diimplementasikan untuk mewujudkan itu, baik melalui kegiatan KKN, mahasiswa membangun desa, mahasiswa penggerak UMKM, mahasiswa kerelawanan, maupun mahasiswa kewirausahaan. (8) Di dalam setiap kesulitan terkandung peluang melimpah. (9) Kreativitas dan semangatlah yang akan menemukan kemudahan dan peluang tersebut. (10) Saat ini bagi civitas akademika untuk bangkit menggali kreativitas dan energi positif demi membangun hari esok yang lebih baik, membangun Indonesia maju, Indonesia yang makmur sejahtera, dan berkeadilan.</p><p class='mt-2 text-xs text-slate-500 italic'>Diadaptasi dari: https://dikti.kemdikbud.go.id/</p>",
                "topik": "Semantik: Pola Hubungan Makna Frasa",
                "soal": "Dari bacaan di atas, frasa yang berpola makna sama dengan frasa <strong>perwira menengah</strong> adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "karya unggul (kalimat 1)"
                        },
                        {
                                "id": "B",
                                "text": "dunia industri (kalimat 3)"
                        },
                        {
                                "id": "C",
                                "text": "mutu pendidikan (kalimat 3)"
                        },
                        {
                                "id": "D",
                                "text": "pemulihan ekonomi (kalimat 6)"
                        },
                        {
                                "id": "E",
                                "text": "peluang melimpah (kalimat 8)"
                        }
                ],
                "kunci": "A",
                "pembahasan": "<strong>Analisis Pola Makna Frasa:</strong><br>Frasa <em>perwira menengah</em> memiliki susunan:<br>• <em>perwira</em> = Nomina (Kata Benda)<br>• <em>menengah</em> = Adjektiva (Kata Sifat / Tingkatan Kualitas)<br>Pola: <strong>Nomina + Adjektiva (kualitas/tingkatan)</strong>.<br><br>Bandingkan dengan frasa pada opsi:<br>• <strong>karya unggul:</strong> <em>karya</em> (Nomina) + <em>unggul</em> (Adjektiva mutu/kualitas). Polanya identik!<br>• dunia industri: Nomina + Nomina.<br>• mutu pendidikan: Nomina + Nomina.<br><br><strong>Kesimpulan:</strong> Frasa yang berpola makna sama adalah <strong>karya unggul</strong> (Opsi A)."
        },
        {
                "id": 14,
                "bacaanId": "ppu1_teks5",
                "bacaanTitle": "Teks untuk Soal Nomor 13—15",
                "topik": "Kelogisan & Ketatabahasaan Kalimat",
                "soal": "Kalimat yang <strong>tidak logis / rancu secara ketatabahasaan</strong> dalam bacaan di atas adalah ....",
                "options": [
                        {
                                "id": "A",
                                "text": "kalimat (3)"
                        },
                        {
                                "id": "B",
                                "text": "kalimat (7)"
                        },
                        {
                                "id": "C",
                                "text": "kalimat (8)"
                        },
                        {
                                "id": "D",
                                "text": "kalimat (9)"
                        },
                        {
                                "id": "E",
                                "text": "kalimat (10)"
                        }
                ],
                "kunci": "E",
                "pembahasan": "<strong>Analisis Struktur Kalimat Baku:</strong><br>Perhatikan kalimat (10): <em>\"Saat ini bagi civitas akademika untuk bangkit menggali kreativitas dan energi positif...\"</em><br><br>Kalimat ini cacat struktur karena <strong>tidak memiliki Subjek dan Predikat utama</strong> yang jelas:<br>• <em>Saat ini</em> = Keterangan Waktu<br>• <em>bagi civitas akademika untuk bangkit...</em> = Frasa preposisional keterangan.<br>Tidak ada kata kerja verba inti yang berfungsi sebagai predikat klausa utama (kalimat buntung). Seharusnya: <em>\"Saat ini <strong>merupakan kesempatan</strong> bagi civitas akademika untuk bangkit...\"</em>.<br><br><strong>Kesimpulan:</strong> Kalimat yang tidak logis adalah <strong>kalimat (10)</strong> (Opsi E)."
        },
        {
                "id": 15,
                "bacaanId": "ppu1_teks5",
                "bacaanTitle": "Teks untuk Soal Nomor 13—15",
                "topik": "Morfologi: Makna Imbuhan per-an",
                "soal": "Bentuk imbuhan <em>per-an</em> pada kata <strong>perguruan</strong> dalam kalimat (1) mempunyai kesamaan makna dengan bentuk <em>per-an</em> dalam kalimat ....",
                "options": [
                        {
                                "id": "A",
                                "text": "Kedua kata itu menunjukkan pertalian bentuk dan makna sehingga mempermudah penutur jati memahaminya."
                        },
                        {
                                "id": "B",
                                "text": "Halaman ini memuat pelajaran untuk siswa SD seperti matematika dan bahasa Indonesia."
                        },
                        {
                                "id": "C",
                                "text": "Sebanyak tiga kapal berbendera negara asing terpantau sedang melakukan aktivitas di perairan tersebut."
                        },
                        {
                                "id": "D",
                                "text": "Hasil penelitian menunjukkan bahwa persuratkabaran pada masa reformasi berbeda dengan masa sebelumnya."
                        },
                        {
                                "id": "E",
                                "text": "Setiap pelabuhan pasti dapat mendorong kemajuan di sektor maritim khususnya perkapalan."
                        }
                ],
                "kunci": "E",
                "pembahasan": "<strong>Analisis Makna Konfiks per-an:</strong><br>Kata <em>perguruan</em> dibentuk dari kata dasar <em>guru</em> dengan konfiks <em>per-an</em> yang menyatakan <strong>tempat/wahana kegiatan</strong> (tempat menuntut ilmu/berguru atau institusi pendidikan).<br><br>Pada opsi <strong>E</strong>, kata <em>pelabuhan</em> dibentuk dari kata dasar <em>labuh</em> dengan makna <strong>tempat berlabuh</strong> bagi kapal-kapal (menyatakan tempat/institusi fasilitas).<br><br><strong>Kesimpulan:</strong> Kesamaan makna konfiks terdapat pada kata <em>pelabuhan</em> (Opsi E)."
        }
],
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
