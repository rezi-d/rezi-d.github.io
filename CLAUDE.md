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
