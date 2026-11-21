# 📐 STANDAR BAKU MODUL PEMBELAJARAN FISIKA AJARKITA
## Panduan Resmi Arsitektur Halaman, Visual, Kuis Auto-Koreksi & Konsistensi Antar-Bab (Fase E & Fase F)

Dokumen ini adalah **pedoman baku dan aturan wajib** dalam pengembangan seluruh modul Fisika SMA/MA (Kelas X, XI, XII) di platform **AjarKita**. Seluruh Bab (dimulai dari Bab 1 hingga Bab berikutnya) **WAJIB 100% mematuhi struktur, layout, visual, dan mekanisme kuis** yang tertera di dokumen ini tanpa modifikasi sepihak.

---

## 🏛️ 1. Arsitektur Layout Halaman (4-Kolom Standar)

Layout halaman menggunakan pembagian 4-kolom Tailwind CSS yang sepenuhnya seragam dengan Matematika dan Kimia:

```html
<body class="bg-[#f5f5f7] text-slate-800 flex flex-col min-h-screen" 
      data-mapel="fisika" 
      data-kelas="fis-10" 
      data-bab="[slug-bab-sesuai-curriculum.js]">

    <!-- HEADER (Dimuat otomatis oleh js/include.js) -->
    <div id="header-placeholder"></div>

    <!-- WRAPPER UTAMA: 4 KOLOM -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- KOLOM KIRI (lg:col-span-1): SIDEBAR OTOMATIS -->
        <div id="sidebar-placeholder" class="lg:col-span-1"></div>

        <!-- KOLOM KANAN (lg:col-span-3): KONTEN MATERI -->
        <main class="lg:col-span-3 space-y-6">
            <article class="space-y-6">
                <!-- Hero Card, Sticky Controller, Carousel Slides, Bottom Nav, References -->
            </article>
        </main>
    </div>

    <!-- FOOTER & MODAL SPU -->
    <div id="footer-placeholder"></div>
    <div id="spu-placeholder"></div>
</body>
```

> ⚠️ **ATURAN KRUSIAL SIDEBAR:**
> - Elemen `<div id="sidebar-placeholder" class="lg:col-span-1"></div>` **TIDAK BOLEH DIHAPUS**.
> - Atribut `data-mapel="fisika"`, `data-kelas="fis-10"` (atau `fis-11`/`fis-12`), dan `data-bab="[slug-bab]"` pada tag `<body>` wajib cocok 100% dengan definisi di `js/curriculum.js` agar sidebar, daftar sub-bab, pelacak progress, dan checklist tuntas ter-render otomatis.

---

## 🎴 2. Komponen Wajib Kolom Kanan (Konten Materi)

### 2.1 Hero Card Judul Sub-Bab
Hero card bersih dengan latar belakang putih (`bg-white`), border abu-abu halus, dan 3 badge informasi di atas judul:
```html
<div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs">
    <div class="flex flex-wrap items-center gap-2 mb-3">
        <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
            Bab [Nomor]: [Nama Bab]
        </span>
        <span class="text-xs text-slate-400 font-medium">Sub-Materi [X] dari [Total]</span>
        <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">5 Poin Materi Interaktif</span>
    </div>

    <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
        [X]. [Judul Lengkap Sub-Bab]
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
        [Ringkasan pengantar materi yang memuat konsep fisis, hukum terkait, dan capaian pembelajaran].
    </p>
</div>
```

### 2.2 Top Sticky Slider Controller
Controller navigasi slide yang melayang saat scroll:
```html
<div class="sticky top-12 sm:top-14 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between gap-3">
    <button id="slider-btn-prev" onclick="ieltsSlider.prev()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 focus:outline-none" aria-label="Poin Sebelumnya">
        <span>&larr;</span> <span class="hidden sm:inline">Sebelumnya</span>
    </button>
    <div class="flex flex-col items-center gap-1">
        <span id="slider-counter" class="text-xs font-bold text-slate-700">Poin 1 / 5</span>
        <div id="slider-dots" class="flex items-center gap-1.5"></div>
    </div>
    <button id="slider-btn-next" onclick="ieltsSlider.next()" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs focus:outline-none" aria-label="Poin Berikutnya">
        <span class="hidden sm:inline">Berikutnya</span> <span>&rarr;</span>
    </button>
</div>
```

---

## 📑 3. Struktur Baku 5 Slide Materi

Setiap modul pembelajaran dipecah tepat menjadi **5 Slide Carousel** (`.ielts-slide` berturut-turut dengan `id="slide-1"` s.d. `id="slide-5"`):

### Pola Slide 1 s.d. Slide 4 (Header & Komponen):
Header setiap slide wajib menggunakan badge lingkaran nomor berwarna biru:
```html
<section class="ielts-slide bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5" id="slide-[N]">
    <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">[N]</span>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                [Judul Poin Pembelajaran]
            </h2>
        </div>
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">[Pill Badge Kanan]</span>
    </div>

    <!-- ISI KONTEN (Paragraf Teori, Rumus KaTeX, Box Callout, Visual) -->
</section>
```

### Distribusi Materi Wajib Tiap Slide:
* **Slide 1: Konsep Inti / Teori Fisika Formal**:
  Penurunan rumus matematis, hukum fisika pokok, formulasi KaTeX rapi (`$$...$$` untuk display mode, `$...$` untuk inline).
* **Slide 2: Diagram Vektor / Model Fisis (SVG Dark)**:
  Wajib memuat minimal 1 ilustrasi diagram vektor SVG berlatar gelap (`#0f172a` atau `#1e293b`) dengan kontras tinggi (stroke cyan `#38bdf8`, kuning `#facc15`, hijau `#4ade80`, merah `#f87171`) untuk memvisualisasikan medan, gerak benda, diagram gaya bebas, atau siklus energi.
* **Slide 3: Tabel Komparasi / Data Teknis / Aplikasi Kontekstual**:
  Wajib memuat tabel komparasi (`<table class="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200...">`) untuk membandingkan sifat fisis, efisiensi perangkat, atau parameter kuantitatif.
* **Slide 4: Contoh Soal Terbimbing & Analisis Langkah demi Langkah**:
  Minimal 2 studi kasus kontekstual lengkap dengan langkah penyelesaian matematis berurutan (diketahui, ditanya, persamaan, substitusi angka, satuan SI, dan kesimpulan fisis).

---

## 📝 4. Standar Slide 5: Latihan Soal Interaktif (Auto-Koreksi Murni)

Slide 5 **WAJIB 100% MENGIKUTI STANDAR EMAS MATEMATIKA** (tanpa tombol manual "Periksa Seluruh Jawaban" dan tanpa kartu rekap hasil statis):

```html
<!-- SLIDE 5: EVALUASI LATIHAN SOAL INTERAKTIF (AUTO-KOREKSI) -->
<section class="ielts-slide bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5" id="slide-5">
    <div class="border-b border-slate-200 pb-3 flex items-center justify-between flex-wrap gap-2">
        <div>
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-0.5">Poin 5 &middot; Evaluasi Pemahaman Mandiri</span>
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                📝 5. Latihan Soal Interaktif (Auto-Koreksi)
            </h2>
        </div>
        <span class="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2.5 py-1 rounded-full font-mono">4 Soal Auto-Check</span>
    </div>

    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Pilihlah salah satu opsi jawaban pada masing-masing soal. Sistem pelacak progres akan merekam nilai secara otomatis saat seluruh soal terjawab.
    </p>

    <div class="space-y-5">
        <!-- SOAL 1 -->
        <div class="bg-slate-50/70 p-5 rounded-2xl border border-slate-200">
            <span class="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">Soal 1 &middot; [Topik Soal 1]</span>
            <p class="text-sm text-slate-800 mb-3 font-medium">
                [Teks pertanyaan soal 1 lengkap dengan notasi KaTeX $...$]
            </p>
            <div class="space-y-2">
                <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:bg-blue-50/40 cursor-pointer transition-colors text-xs sm:text-sm">
                    <input type="radio" name="fis-[kelas]-[bab]-[sub]-q1" value="A" class="accent-blue-600">
                    <span>A. [Pilihan Jawaban A]</span>
                </label>
                <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:bg-blue-50/40 cursor-pointer transition-colors text-xs sm:text-sm">
                    <input type="radio" name="fis-[kelas]-[bab]-[sub]-q1" value="B" class="accent-blue-600">
                    <span>B. [Pilihan Jawaban B]</span>
                </label>
                <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:bg-blue-50/40 cursor-pointer transition-colors text-xs sm:text-sm">
                    <input type="radio" name="fis-[kelas]-[bab]-[sub]-q1" value="C" class="accent-blue-600">
                    <span>C. [Pilihan Jawaban C]</span>
                </label>
                <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:bg-blue-50/40 cursor-pointer transition-colors text-xs sm:text-sm">
                    <input type="radio" name="fis-[kelas]-[bab]-[sub]-q1" value="D" class="accent-blue-600">
                    <span>D. [Pilihan Jawaban D]</span>
                </label>
            </div>
            <div id="feedback-fis-[kelas]-[bab]-[sub]-q1" class="mt-3"></div>
        </div>

        <!-- SOAL 2, 3, dan 4 mengikuti struktur yang sama -->
    </div>

    <!-- SKRIP AUTO-SCORE EVENT LISTENER -->
    <script>
    (function() {
        const answers = {
            "fis-[kelas]-[bab]-[sub]-q1": { correct: "B", explanation: "Tepat sekali! [Alasan fisis & langkah hitung matematis]." },
            "fis-[kelas]-[bab]-[sub]-q2": { correct: "A", explanation: "Tepat sekali! [Alasan fisis & langkah hitung matematis]." },
            "fis-[kelas]-[bab]-[sub]-q3": { correct: "C", explanation: "Tepat sekali! [Alasan fisis & langkah hitung matematis]." },
            "fis-[kelas]-[bab]-[sub]-q4": { correct: "D", explanation: "Tepat sekali! [Alasan fisis & langkah hitung matematis]." }
        };

        Object.keys(answers).forEach(qName => {
            const radios = document.querySelectorAll(`input[name="${qName}"]`);
            radios.forEach(r => {
                r.addEventListener('change', () => {
                    const fb = document.getElementById(`feedback-${qName}`);
                    if (r.value === answers[qName].correct) {
                        fb.innerHTML = `<div class="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs sm:text-sm font-semibold">✅ Tepat sekali! ${answers[qName].explanation}</div>`;
                    } else {
                        fb.innerHTML = `<div class="p-3 bg-rose-50 text-rose-800 rounded-xl border border-rose-200 text-xs sm:text-sm font-semibold">❌ Jawaban belum tepat. Coba telaah kembali materi pada slide sebelumnya!</div>`;
                    }
                    if (window.renderMathInElement) {
                        renderMathInElement(fb, { delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
                    }
                });
            });
        });
    })();
    </script>
</section>
```

> 🚫 **LARANGAN MUTLAK PADA SLIDE 5:**
> 1. DILARANG menambahkan tombol `<button>Periksa Seluruh Jawaban</button>`.
> 2. DILARANG menambahkan kartu statis "REKAP OTOMATIS LATIHAN MANDIRI" atau form input nama/kelas.
> 3. Skor otomatis direkam oleh sistem `include.js` yang mendeteksi ikon `✅` pada kontainer feedback saat siswa memilih opsi radio.

---

## 📚 5. Komponen Bawah: Navigasi, Referensi & Skrip

### 5.1 Bottom Slider Navigation Bar
```html
<div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-3">
    <button id="slider-btn-prev-bottom" onclick="ieltsSlider.prev()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5">
        <span>&larr;</span> <span>Poin Sebelumnya</span>
    </button>
    <span id="slider-bottom-counter" class="text-xs font-mono font-bold text-slate-500 hidden sm:inline">1 / 5</span>
    <button id="slider-btn-next-bottom" onclick="ieltsSlider.next()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
        <span id="slider-btn-next-bottom-text">Poin Selanjutnya &rarr;</span>
    </button>
</div>
```

### 5.2 Academic Reference Box (Rujukan Internasional Wajib)
Wajib mencantumkan regulasi nasional terbaru dan buku referensi prestisius luar negeri:
```html
<!-- SUMBER REFERENSI AKADEMIK -->
<div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
    <p class="font-bold text-slate-800 text-sm mb-1 flex items-center gap-1.5">
        <span>📚 Sumber Referensi Kurikulum &amp; Standar:</span>
    </p>
    <p><strong>Kemendikbudristek RI.</strong> (2024). <em>Kepka BSKAP No. 032/H/KR/2024 tentang Capaian Pembelajaran Fisika Fase E/F</em>.</p>
    <p><strong>Halliday, David, Resnick, Robert, &amp; Walker, Jearl.</strong> (2018). <em>Fundamentals of Physics</em> (11th ed. Extended). John Wiley &amp; Sons.</p>
    <p><strong>Serway, Raymond A. &amp; Jewett, John W.</strong> (2018). <em>Physics for Scientists and Engineers with Modern Physics</em> (10th ed.). Cengage Learning.</p>
    <p><strong>David Morin.</strong> (2008). <em>Introduction to Classical Mechanics: With Problems and Solutions</em>. Cambridge University Press.</p>
</div>
```

### 5.3 Navigasi Sub-Bab Sebelumnya / Selanjutnya
```html
<div class="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-slate-200">
    <a href="[file-sub-sebelumnya].html" class="text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 transition">&larr; Sebelumnya: [Judul Sub-Bab]</a>
    <span class="text-xs text-slate-400 font-medium">Sub-Materi [X] dari [Total]</span>
    <a href="[file-sub-berikutnya].html" class="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-xs">Lanjut: [Judul Sub-Bab] &rarr;</a>
</div>
```

### 5.4 Script Inclusion (Gunakan Path Absolut Root `/`)
```html
<!-- FOOTER & MODAL SPU -->
<div id="footer-placeholder"></div>
<div id="spu-placeholder"></div>

<!-- SLIDER SCRIPT & ASSETS -->
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
```

---

## ✅ 6. Checklist Verifikasi Sebelum Commit & Push
Setiap membuat bab baru, jalankan audit berikut:
1. `id="sidebar-placeholder"` berada di kolom kiri (`lg:col-span-1`).
2. Layout pembungkus utama tepat menggunakan `grid-cols-1 lg:grid-cols-4 gap-8`.
3. Tepat memiliki 5 elemen `<section class="ielts-slide ...">` dengan `id="slide-1"` s.d. `id="slide-5"`.
4. Slide 1–4 memiliki badge nomor lingkaran `w-8 h-8 rounded-full bg-blue-600`.
5. Slide 2 memiliki minimal 1 diagram vektor SVG berlatar gelap (`#0f172a` atau `#1e293b`).
6. Slide 3 memiliki tabel komparasi atau data kuantitatif.
7. Slide 5 murni auto-koreksi dengan 4 soal pilihan ganda, umpan balik langsung (`✅ Tepat sekali!` / `❌ Jawaban belum tepat.`), tanpa tombol submit manual dan tanpa kartu rekap statis.
8. Seluruh skrip menggunakan path absolut root (`/ielts/ielts-slider.js`, `/js/...`).
9. Formula KaTeX seimbang tanpa karakter pemutus yang tidak tertutup (`$$` dan `$` genap).
