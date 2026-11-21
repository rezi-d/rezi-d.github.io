# CLAUDE.md — Web Pembelajaran Kimia Interaktif

Catatan konteks untuk Claude. Dibaca otomatis tiap kali sesi dibuka di folder ini.

## Ringkas

Web modul pembelajaran Kimia SMA interaktif dengan latihan auto-koreksi, di-hosting
sebagai GitHub Pages.

- Repo: https://github.com/rezi-d/rezi-d.github.io (branch `main`)
- Stack: HTML5 statis + Tailwind CSS (CDN) + JavaScript ES6. Tanpa build step,
  tanpa framework — buka `index.html` langsung di browser sudah jalan.

## Aturan penting: `js/curriculum.js` adalah satu-satunya sumber kebenaran

Seluruh sidebar, dropdown "Materi", dan halaman hub dirender OTOMATIS dari objek
`kurikulum` di `js/curriculum.js`. Untuk menambah materi baru:

1. Tambah entri di `kurikulum` (kelas → bab → subbab)
2. Buat file HTML-nya di folder yang sesuai
3. JANGAN edit `partials/header.html` atau logika sidebar secara manual

Modul non-materi (TKA, ANBK, dsb.) ditambahkan lewat array `modulLain` di file yang sama.

## Struktur

```
index.html            beranda
partials/             header, footer, modal SPU — di-include lewat js/include.js
js/curriculum.js      peta seluruh konten (single source of truth)
js/include.js         loader partial
js/render-hub.js      render halaman hub dari curriculum.js
js/quiz.js            mesin latihan auto-koreksi
js/spu.js             sistem periodik unsur interaktif
kelas-10/  kelas-11/  kelas-12/   anbk/   tka/
back_up/              versi lama materi + PDF sumber (tidak dipakai runtime)
```

## Status per 27 Agustus 2026

Sudah terisi:

- **Kelas XI — Stoikiometri** (5 sub-bab): konsep mol & massa molar, volume gas &
  molaritas, rumus empiris & molekul, pereaksi pembatas (M-R-S), kadar kemurnian.
  Plus `tes-stoikiometri.html` — bank soal 40 butir dengan seleksi acak proporsional per topik.
- **Kelas XI — Ikatan Kimia** (7 sub-bab): kestabilan atom & struktur Lewis, ikatan ion
  (termasuk energi kisi), ikatan kovalen, ikatan logam, bentuk molekul VSEPR (diagram SVG),
  kepolaran molekul, teori hibridisasi.

Masih kerangka (baru halaman hub, sub-bab belum ada):

- Kelas X, Kelas XII, modul ANBK, modul TKA

Commit terakhir: `6b529bc` — Sub-Bab 5 Bentuk Molekul VSEPR.

## Catatan kerja

- Repo ini adalah GitHub Pages (`rezi-d.github.io`), jadi setiap push langsung tayang
  di web. Cek dulu di browser lokal sebelum push.
- Akhir baris file di-normalisasi lewat `.gitattributes` (`* text=auto`). Kalau `git status`
  tiba-tiba menampilkan ratusan file "berubah" padahal tidak diedit, itu masalah CRLF —
  jalankan `git config --global core.autocrlf true`, bukan commit perubahannya.
- `back_up/` berisi versi lama materi dan PDF sumber. Jangan dijadikan acuan konten
  terbaru — yang aktif adalah file di `kelas-*/`.

## Setup di PC baru

```bash
git clone https://github.com/rezi-d/rezi-d.github.io.git
```

Tidak perlu install apa pun. Buka `index.html` di browser (atau jalankan
`python -m http.server` di folder ini kalau butuh server lokal untuk `fetch` partial).

---

## Standar Baku Modul Fisika & Matematika SMA (Wajib Diikuti)

Seluruh modul pembelajaran baru (Fisika Kelas X, XI, XII dan Matematika) **WAJIB 100% konsisten** dengan format berikut:
1. **Layout 4 Kolom Penuh Presisi**:
   - Kolom kiri (`lg:col-span-1`): `<div id="sidebar-placeholder" class="lg:col-span-1"></div>` (render otomatis oleh `include.js`).
   - Kolom kanan (`lg:col-span-3 space-y-6`): Hero card modul, sticky controller bar, carousel container (`#ielts-slider-container`), bottom navigation bar, box referensi akademik internasional, dan tombol navigasi sub-materi.
2. **5 Slide per Modul**:
   - Slide 1: Konsep Inti / Teori Fisika Formal (KaTeX `$$...$$` dan `$...$`).
   - Slide 2: Diagram Vektor / Model Fisis SVG berlatar gelap (`#0f172a` atau `#1e293b`).
   - Slide 3: Tabel Komparasi / Data Riset Kontekstual.
   - Slide 4: Contoh Soal Terbimbing Langkah demi Langkah (*Step-by-Step*).
   - Slide 5: **Latihan Soal Interaktif (Auto-Koreksi Murni)**:
     - Header: `📝 5. Latihan Soal Interaktif (Auto-Koreksi)` + Badge `4 Soal Auto-Check`.
     - 4 kartu soal dengan radio button (`accent-blue-600`) dan container feedback instan (`✅ Tepat sekali!` / `❌ Jawaban belum tepat.`).
     - **DILARANG MENGGUNAKAN TOMBOL "Periksa Seluruh Jawaban" MANUAL ATAU FORM REKAP NILAI STATIS.**
3. **Dokumentasi Lengkap & SOP**: Baca [STANDAR_MATERI_MODUL_FISIKA.md](file:///d:/pengembngan%20web/STANDAR_MATERI_MODUL_FISIKA.md).

