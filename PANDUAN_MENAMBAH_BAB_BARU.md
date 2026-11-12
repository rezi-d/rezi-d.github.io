# 📘 Panduan Standar Menambahkan Bab & Sub-Bab Baru (Format Carousel / Slider)

Dokumen ini adalah panduan resmi (SOP & arsitektur referensi) untuk menambahkan **Bab Baru** dan **Sub-Bab Baru** di web **AjarKita** (misal untuk Matematika, Fisika, Biologi, dsb.) dengan format tampilan **Carousel / Slider Interaktif (1 Slide = 1 Poin Materi)** yang konsisten dengan standar modul AjarKita.

---

## 🏗️ 1. Arsitektur Single Source of Truth

AjarKita bekerja menggunakan sistem otomasi modular:
1. **`js/curriculum.js`**: Pusat data kurikulum seluruh mata pelajaran dan jenjang kelas.
2. **`js/render-hub.js`**: Merender kartu bab dan daftar materi secara otomatis di halaman Hub (seperti `/matematika/kelas-10/index.html`). Anda **tidak perlu mengedit HTML halaman hub secara manual** saat menambah bab baru!
3. **`js/include.js`**: Otomatis mendeteksi bab & sub-bab aktif, membangun sidebar navigasi kiri, daftar isi, pelacak progres belajar (`localStorage`), dan panel skor kuis.
4. **`ielts/ielts-slider.js`**: Menggerakkan navigasi carousel (Top sticky controller, dots, touch swipe mobile, keyboard arrows $\leftarrow / \rightarrow$, dan update URL hash `#slide-N`).

---

## 🚀 2. Langkah-Langkah Menambahkan Bab Baru

### Langkah 1: Daftarkan Bab di `js/curriculum.js`
Buka `js/curriculum.js`, temukan objek mata pelajaran yang sesuai (contoh `"mtk-10"`), lalu tambahkan bab baru ke dalam array `bab`:

```javascript
// Contoh penambahan Bab 2 pada mtk-10:
"mtk-10": {
    label: "Matematika Kelas X (Fase E)",
    pathPrefix: "/matematika/kelas-10",
    mapelNama: "Matematika",
    bab: [
        // Bab 1: Eksponen dan Logaritma ...
        
        // --- BAB BARU DITAMBAHKAN DI SINI ---
        {
            slug: "barisan-dan-deret",
            title: "Bab 2: Barisan dan Deret",
            desc: "Pola bilangan, barisan aritmetika dan geometri, deret tak hingga, serta aplikasi finansial bunga tunggal dan majemuk.",
            icon: "🔢",
            subbab: [
                {
                    file: "pola-bilangan-dan-barisan-aritmetika.html",
                    title: "1. Pola Bilangan & Barisan Aritmetika",
                    desc: "Konsep beda tingkat satu, rumus suku ke-n, dan pembuktian formula.",
                    icon: "📐"
                },
                {
                    file: "deret-aritmetika-dan-aplikasi.html",
                    title: "2. Deret Aritmetika & Aplikasi Masalah",
                    desc: "Penjumlahan suku beruntun Gauss dan masalah aljabar praktis.",
                    icon: "➕"
                },
                // Tambahkan subbab lainnya...
            ]
        }
    ]
}
```

> **Keuntungan:** Begitu didaftarkan di sini, kartu Bab 2 akan **otomatis muncul di `/matematika/kelas-10/index.html`** lengkap dengan daftar sub-babnya tanpa perlu mengedit HTML hub!

---

### Langkah 2: Buat Folder Bab & File Sub-Bab
Buat folder baru sesuai dengan `slug` yang Anda tentukan di `curriculum.js`:
```
matematika/kelas-10/[slug-bab]/
   ├── [nama-subbab-1].html
   ├── [nama-subbab-2].html
   └── ...
```
Contoh:
`matematika/kelas-10/barisan-dan-deret/pola-bilangan-dan-barisan-aritmetika.html`

---

## 📄 3. Template Resmi Halaman Sub-Bab (Carousel Slider)

Salin struktur HTML standar di bawah ini untuk setiap file sub-bab baru:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Judul Sub-Bab] — Matematika Kelas X</title>
    <meta name="description" content="[Deskripsi SEO lengkap sub-bab]">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://kimia.ajarkita.my.id/matematika/kelas-10/[slug-bab]/[nama-file].html">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="AjarKita">
    <meta property="og:locale" content="id_ID">
    <meta property="og:url" content="https://kimia.ajarkita.my.id/matematika/kelas-10/[slug-bab]/[nama-file].html">
    <meta property="og:title" content="📐 [Judul Sub-Bab] — Kelas X SMA">
    <meta property="og:description" content="[Deskripsi ringkas untuk media sosial]">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📐</text></svg>">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- KaTeX untuk Formula Matematika -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

    <style>
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .heading-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .katex-display { margin: 0.8em 0; overflow-x: auto; overflow-y: hidden; padding-bottom: 2px; }
    </style>
</head>
<!-- PENTING: data-mapel, data-kelas, dan data-bab wajib diisi persis sesuai curriculum.js -->
<body class="bg-[#f5f5f7] text-slate-800 flex flex-col min-h-screen" data-mapel="matematika" data-kelas="mtk-10" data-bab="[slug-bab]">

    <!-- HEADER (Dimuat otomatis) -->
    <div id="header-placeholder"></div>

    <!-- LAYOUT UTAMA (SIDEBAR + KONTEN) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- SIDEBAR (Dimuat otomatis oleh include.js) -->
        <div id="sidebar-placeholder" class="lg:col-span-1"></div>

        <!-- AREA KONTEN UTAMA -->
        <main class="lg:col-span-3 space-y-6">
            <article class="space-y-6">

                <!-- 1. HERO KARTU JUDUL SUB-BAB -->
                <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                        <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
                            Bab [Nomor]: [Nama Bab]
                        </span>
                        <span class="text-xs text-slate-400 font-medium">Sub-Materi [X] dari [Total]</span>
                        <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">[N] Poin Materi Interaktif</span>
                    </div>

                    <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
                        [X]. [Judul Lengkap Sub-Bab]
                    </h1>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        [Ringkasan pengantar materi dan instruksi navigasi kartu slider].
                    </p>
                </div>

                <!-- 2. SLIDER CONTROLLER (TOP STICKY) -->
                <div class="sticky top-12 sm:top-14 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between gap-3">
                    <button id="slider-btn-prev" onclick="ieltsSlider.prev()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 focus:outline-none" aria-label="Poin Sebelumnya">
                        <span>&larr;</span> <span class="hidden sm:inline">Sebelumnya</span>
                    </button>
                    <div class="flex flex-col items-center gap-1">
                        <span id="slider-counter" class="text-xs font-bold text-slate-700">Poin 1 / [N]</span>
                        <div id="slider-dots" class="flex items-center gap-1.5"></div>
                    </div>
                    <button id="slider-btn-next" onclick="ieltsSlider.next()" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs focus:outline-none" aria-label="Poin Berikutnya">
                        <span class="hidden sm:inline">Berikutnya</span> <span>&rarr;</span>
                    </button>
                </div>

                <!-- 3. SLIDER WRAPPER CONTAINER -->
                <!-- Pilihan data-accent: 'blue' (Matematika), 'teal' (Kimia/IELTS), 'indigo', 'rose', dsb. -->
                <div id="ielts-slider-container" data-accent="blue" class="space-y-6">

                    <!-- SLIDE 1 (Poin 1) -->
                    <section class="ielts-slide bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                        <div class="border-b border-slate-200 pb-3 flex items-center justify-between flex-wrap gap-2">
                            <div>
                                <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-0.5">Poin 1 &middot; [Topik Utama]</span>
                                <h2 class="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                                    💡 1. [Judul Poin 1]
                                </h2>
                            </div>
                            <span class="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-full font-mono">[Label Singkat]</span>
                        </div>

                        <!-- Konten Poin 1 (Teori, Penjelasan, Rumus KaTeX $...$) -->
                        <p class="text-sm text-slate-600 leading-relaxed text-justify">
                            [Isi materi poin 1...]
                        </p>
                    </section>

                    <!-- SLIDE 2 (Poin 2) -->
                    <section class="ielts-slide bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                        <div class="border-b border-slate-200 pb-3 flex items-center justify-between flex-wrap gap-2">
                            <div>
                                <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-0.5">Poin 2 &middot; [Topik Utama]</span>
                                <h2 class="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                                    ⚡ 2. [Judul Poin 2]
                                </h2>
                            </div>
                            <span class="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded-full font-mono">[Label Singkat]</span>
                        </div>

                        <!-- Konten Poin 2 -->
                        <p class="text-sm text-slate-600 leading-relaxed text-justify">
                            [Isi materi poin 2...]
                        </p>
                    </section>

                    <!-- SLIDE TERAKHIR: EVALUASI LATIHAN SOAL INTERAKTIF (AUTO-KOREKSI) -->
                    <section class="ielts-slide bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                        <div class="border-b border-slate-200 pb-3 flex items-center justify-between flex-wrap gap-2">
                            <div>
                                <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-0.5">Poin [N] &middot; Evaluasi Pemahaman Mandiri</span>
                                <h2 class="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                                    📝 [N]. Latihan Soal Interaktif (Auto-Koreksi)
                                </h2>
                            </div>
                            <span class="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2.5 py-1 rounded-full font-mono">4 Soal Auto-Check</span>
                        </div>

                        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Pilihlah salah satu opsi jawaban yang paling tepat. Skor latihan dan tanda tuntas akan tersimpan otomatis.
                        </p>

                        <div class="space-y-5">
                            <!-- CONTOH SOAL 1 -->
                            <div class="bg-slate-50/70 p-5 rounded-2xl border border-slate-200">
                                <span class="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">Soal 1 &middot; [Topik Soal]</span>
                                <p class="text-sm text-slate-800 mb-3 text-justify font-medium">
                                    [Pertanyaan soal matematika...]
                                </p>
                                <div class="space-y-2 text-sm">
                                    <label class="flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200/80 cursor-pointer transition">
                                        <input type="radio" name="kuis-[slug]-1" value="a" class="accent-blue-600">
                                        <span>A. [Pilihan A]</span>
                                    </label>
                                    <label class="flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200/80 cursor-pointer transition">
                                        <input type="radio" name="kuis-[slug]-1" value="b" class="accent-blue-600">
                                        <span>B. [Pilihan B]</span>
                                    </label>
                                    <label class="flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200/80 cursor-pointer transition">
                                        <input type="radio" name="kuis-[slug]-1" value="c" class="accent-blue-600">
                                        <span>C. [Pilihan C]</span>
                                    </label>
                                    <label class="flex items-center gap-2 p-2 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200/80 cursor-pointer transition">
                                        <input type="radio" name="kuis-[slug]-1" value="d" class="accent-blue-600">
                                        <span>D. [Pilihan D]</span>
                                    </label>
                                </div>
                                <div id="feedback-[slug]-1" class="text-xs mt-3 min-h-[16px] font-semibold"></div>
                            </div>
                        </div>

                        <!-- Skrip Evaluasi Kuis Instan -->
                        <script>
                            const kuisKeys = {
                                'kuis-[slug]-1': { 
                                    ans: 'a', 
                                    text: '[Pembahasan detail soal 1].' 
                                }
                            };

                            Object.keys(kuisKeys).forEach((name, idx) => {
                                document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
                                    radio.addEventListener('change', (e) => {
                                        const fb = document.getElementById(`feedback-[slug]-${idx + 1}`);
                                        const info = kuisKeys[name];
                                        if (e.target.value === info.ans) {
                                            fb.innerHTML = `<span class="text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 block">✅ Tepat sekali! ${info.text}</span>`;
                                        } else {
                                            fb.innerHTML = '<span class="text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 block">❌ Jawaban belum tepat. Coba periksa kembali langkah perhitungan Anda!</span>';
                                        }
                                        if (window.renderMathInElement) {
                                            window.renderMathInElement(fb, { delimiters: [{left: '$', right: '$', display: false}] });
                                        }
                                    });
                                });
                            });
                        </script>
                    </section>

                </div> <!-- END OF #ielts-slider-container -->

                <!-- 4. SLIDER BOTTOM NAV -->
                <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-3">
                    <button id="slider-btn-prev-bottom" onclick="ieltsSlider.prev()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5">
                        <span>&larr;</span> <span>Poin Sebelumnya</span>
                    </button>
                    <span id="slider-bottom-counter" class="text-xs font-mono font-bold text-slate-500 hidden sm:inline">1 / [N]</span>
                    <button id="slider-btn-next-bottom" onclick="ieltsSlider.next()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
                        <span id="slider-btn-next-bottom-text">Poin Selanjutnya &rarr;</span>
                    </button>
                </div>

                <!-- 5. SUMBER REFERENSI AKADEMIK -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                    <p class="font-bold text-slate-800 text-sm mb-1 flex items-center gap-1.5">
                        <span>📚 Sumber Referensi Kurikulum &amp; Standar:</span>
                    </p>
                    <p><strong>Kemendikbudristek RI.</strong> (2024). <em>Kepka BSKAP No. 032/H/KR/2024 tentang Capaian Pembelajaran Matematika Fase E</em>.</p>
                    <p><strong>Stewart, James, Redlin, Lothar, &amp; Watson, Saleem.</strong> (2016). <em>Precalculus: Mathematics for Calculus</em> (7th ed.). Cengage Learning.</p>
                </div>

                <!-- 6. NAVIGASI BAWAH (HUB & NEXT/PREV SUBBAB) -->
                <div class="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-slate-200">
                    <a href="[file-subbab-sebelumnya].html" class="text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 transition">
                        &larr; Sebelumnya: [Judul Sub-Bab Lalu]
                    </a>
                    <span class="text-xs text-slate-400 font-medium">Sub-Materi [X] dari [Total]</span>
                    <a href="[file-subbab-berikutnya].html" class="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-xs">
                        Lanjut: [Judul Sub-Bab Lanjut] &rarr;
                    </a>
                </div>

            </article>
        </main>
    </div>

    <!-- FOOTER & MODAL SPU (Dimuat otomatis) -->
    <div id="footer-placeholder"></div>
    <div id="spu-placeholder"></div>

    <!-- SCRIPTS PENTING -->
    <script src="/ielts/ielts-slider.js"></script>
    <script src="/js/mapel-config.js?v=20261112"></script>
    <script src="/js/curriculum.js"></script>
    <script src="/js/spu.js"></script>
    <script src="/js/include.js?v=20261112"></script>

    <!-- KaTeX Autorender -->
    <script>
        window.addEventListener('load', () => {
            if (typeof renderMathInElement === 'function') {
                renderMathInElement(document.body, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false }
                    ],
                    throwOnError: false
                });
            }
        });
    </script>
</body>
</html>
```

---

## 💡 4. Aturan Penting Agar Fitur Berfungsi Sempurna

| Fitur | Aturan Teknis | Efek / Dampak |
| :--- | :--- | :--- |
| **Deteksi Otomatis Sub-Bab di Sidebar** | `data-mapel="matematika" data-kelas="mtk-10" data-bab="[slug-bab]"` di tag `<body>` | Sidebar kiri langsung menyorot sub-bab aktif dengan warna biru dan tanda checklist hijau jika selesai. |
| **Tooltip Titik Slide (Dots)** | Beri tag `<h2>` atau `<h3>` di dalam setiap `<section class="ielts-slide">` | Script `ielts-slider.js` otomatis mengambil judul heading tersebut sebagai tooltip saat dot di-hover kursor. |
| **Pratinjau Judul Tombol Bawah** | Beri tag `<h2>` pada slide berikutnya | Tombol "Poin Selanjutnya" di bagian bawah otomatis memunculkan judul slide berikutnya. |
| **Pelacakan Progres & Bukti Skor** | Letakkan kuis di dalam `<article>` dengan input `type="radio"` | `include.js` otomatis menyisipkan panel rekap skor, sertifikat/kartu nilai PNG yang bisa diunduh siswa, serta tombol centang *Tandai Selesai*. |
| **Rumus KaTeX ($\LaTeX$)** | Gunakan `$formula$` untuk inline math, dan `$$formula$$` untuk display math di baris tersendiri | Formula otomatis dikonversi menjadi tipografi matematika tajam berstandar internasional. |
| **Pilihan Aksen Warna** | Atribut `data-accent="blue"` (atau `indigo`, `teal`, `rose`, `amber`) pada `#ielts-slider-container` | Titik aktif, tombol navigasi, dan indikator teks akan mengadopsi tema warna tersebut. |

---

## 🗺️ 5. Registrasi SEO (`sitemap.xml`)

Setelah membuat file HTML sub-bab baru, buka `sitemap.xml` di root direktori dan tambahkan entri URL baru:
```xml
<url>
    <loc>https://kimia.ajarkita.my.id/matematika/kelas-10/[slug-bab]/[nama-file].html</loc>
    <lastmod>2026-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

---
*Panduan ini dibuat otomatis oleh asisten pengembang AjarKita untuk memastikan skalabilitas kurikulum lintas mata pelajaran tetap rapi, presisi, dan terstandarisasi.*
