# 🧪 KimiaInteraktif — Media Pembelajaran & Simulator Kimia SMA

**KimiaInteraktif** ([https://kimia.ajarkita.my.id](https://kimia.ajarkita.my.id)) adalah platform pembelajaran Kimia SMA (Kelas X, XI, dan XII) berbasis web interaktif yang dilengkapi laboratorium virtual, animasi visual konsep reaksi, latihan pemahaman *auto-koreksi*, tabel periodik unsur digital, serta pencetakan kartu bukti nilai untuk pembelajaran jarak jauh (PJJ / Google Classroom).

---

## ✨ Fitur Utama

- 🔬 **Laboratorium & Simulator Virtual Interaktif**
  - **Kelas XI:** Kalkulator Mol & Pereaksi Pembatas (M-R-S), Visualisasi Ikatan Ion/Kovalen/Logam, Simulator Bentuk Molekul 3D VSEPR, Kalorimeter Kopi Virtual, Simulator Hukum Hess Model Tabel, Simulator Dinamis Laju Reaksi & Partikel Bergerak, Lab Virtual Teori Tumbukan, serta Kalkulator Orde Terintegrasi & Waktu Paruh.
  - **Kelas XII:** Animasi Sel Volta (Sel Daniell $\text{Zn}-\text{Cu}$ dengan visualisasi elektrode menipis & menebal), Simulator Interaktif Deret Volta (4 Tab), Simulator Penentu Reaksi Katode-Anode Elektrolisis (Inert vs Logam Aktif), Lab Virtual Hukum Faraday I & II (Sel Seri), serta Studio Virtual *Electroplating* (Penyepuhan Sendok Besi).
- ✅ **Kuis Mandiri Auto-Koreksi & Pembahasan Bertahap**
  - Setiap sub-bab dilengkapi latihan soal interaktif dengan umpan balik instan dan pembahasan langkah demi langkah.
- 🎓 **Unduh Kartu Bukti Skor (PNG) & Pelacak Progres Belajar**
  - Progres belajar dan skor kuis tersimpan otomatis di browser siswa (`localStorage`).
  - Siswa dapat mengunduh **Kartu Bukti Penyelesaian Materi & Skor (PNG)** lengkap dengan nama dan kelas untuk dilampirkan ke Google Classroom.
- ⚛️ **Tabel Periodik Unsur (SPU) Digital 118 Unsur**
  - Modal SPU interaktif yang dapat dibuka dari halaman mana pun, dilengkapi filter kategori unsur, konfigurasi elektron, massa atom, elektronegativitas, dan bilangan oksidasi.
- 🔍 **Pencarian Materi Cepat (`Ctrl + K`) & Daftar Isi Otomatis**
  - Pencarian lintas kelas dan sub-bab secara instan dari bilah navigasi atas.
- 📈 **Otomatisasi SEO & Analitik**
  - Pembaruan `sitemap.xml`, *canonical tag*, dan *Open Graph meta* otomatis melalui **GitHub Actions** (`scripts/update-seo.js`).
  - Terintegrasi dengan **Google Analytics 4 (GA4)** dan **Google Search Console**.

---

## 📚 Struktur Modul Pembelajaran

Seluruh daftar materi dikelola secara terpusat melalui `js/curriculum.js`:

### 🟢 Kelas X
1. **Kimia di Sekitar Kita** (`kelas-10/kimia-disekitar-kita/`)
   - Ruang Lingkup Kimia & Metode Ilmiah (`ruang-lingkup-kimia.html`)
   - Prinsip Kimia Hijau dalam Kehidupan (`kimia-hijau.html`)
   - Refleksi & Proyek PJJ Freeform (`refleksi-dan-proyek.html`)

### 🔵 Kelas XI
1. **Stoikiometri** (`kelas-11/stoikiometri/`)
   - Konsep Mol & Massa Molar (`konsep-mol.html`)
   - Volume Gas & Molaritas (`volume-gas-molaritas.html`)
   - Rumus Empiris & Molekul (`rumus-empiris.html`)
   - Pereaksi Pembatas M-R-S (`pereaksi-pembatas.html`)
   - Kadar Kemurnian & Air Kristal (`kadar-kemurnian.html`)
   - Latihan Pemecahan Masalah Stoikiometri Chang — *dilengkapi Kanvas Interaktif iPad & Google Classroom* (`latihan-pemecahan-masalah-stoikiometri-chang.html`)
2. **Ikatan Kimia** (`kelas-11/ikatan-kimia/`)
   - Kestabilan Atom & Struktur Lewis (`kestabilan-atom-struktur-lewis.html`)
   - Ikatan Ion (`ikatan-ion.html`)
   - Ikatan Kovalen (`ikatan-kovalen.html`)
   - Ikatan Logam (`ikatan-logam.html`)
   - Bentuk Molekul VSEPR (`bentuk-molekul-vsepr.html`)
   - Kepolaran Molekul & Momen Dipol (`kepolaran-molekul.html`)
   - Teori Hibridisasi (`teori-hibridisasi.html`)
3. **Termokimia** (`kelas-11/termokimia/`)
   - Konsep Dasar & Reaksi Eksoterm/Endoterm (`konsep-dasar-termokimia.html`)
   - Kondisi Standar & Persamaan Termokimia (`perubahan-entalpi-standar.html`)
   - Kalorimeter Virtual & Proyek Numbers (`kalorimetri-dan-proyek.html`)
   - Hukum Hess & Simulator Model Tabel (`hukum-hess.html`)
   - Latihan Pemecahan Masalah Termokimia Chang — *dilengkapi Simulator Bom Kalorimeter & Kanvas Interaktif iPad* (`latihan-pemecahan-masalah-termokimia-chang.html`)
4. **Laju Reaksi** (`kelas-11/laju-reaksi/`)
   - Konsep & Ungkapan Laju Reaksi (`konsep-laju-reaksi.html`)
   - Teori Tumbukan & Faktor Laju Reaksi (`teori-tumbukan-faktor.html`)
   - Hukum Laju & Penentuan Orde Reaksi (`hukum-laju-dan-orde.html`)
   - Mekanisme Reaksi & Katalis (`mekanisme-reaksi-katalis.html`)
5. **Kesetimbangan Kimia** (`kelas-11/kesetimbangan-kimia/`)
   - Konsep Kesetimbangan Dinamis & Reversibilitas — *dilengkapi Simulator Konvergensi Laju & Partikel Canvas* (`konsep-kesetimbangan-dinamis.html`)
   - Tetapan Kesetimbangan ($K_c$ & $K_p$) — *dilengkapi Kalkulator Konversi $K_p = K_c(RT)^{\Delta n}$* (`tetapan-kesetimbangan-kc-kp.html`)
   - Pergeseran Kesetimbangan (Asas Le Châtelier) — *dilengkapi Lab Virtual Syringe Gas $\text{N}_2\text{O}_4 \rightleftharpoons 2\text{NO}_2$* (`pergeseran-kesetimbangan-le-chatelier.html`)
   - Kuosien Reaksi ($Q$) & Perhitungan M-R-S — *dilengkapi Generator Otomatis ICE Table / Tabel M-R-S* (`perhitungan-kesetimbangan-kimia.html`)
   - Latihan Pemecahan Masalah Kesetimbangan Chang — *dilengkapi Kanvas Interaktif iPad & Google Classroom* (`latihan-pemecahan-masalah-kesetimbangan-chang.html`)
6. **Asam dan Basa** (`kelas-11/asam-basa/`)
   - Teori Asam-Basa & Indikator — *dilengkapi Lab Virtual Pengujian Indikator Asam-Basa* (`teori-asam-basa-indikator.html`)
   - Derajat Keasaman (pH & pOH) — *dilengkapi Simulator Spektrum pH Interaktif 0–14* (`derajat-keasaman-ph-poh.html`)
   - Kekuatan Asam-Basa ($K_a$ & $K_b$) — *dilengkapi Simulator & Kalkulator Ionisasi Asam Lemah* (`kekuatan-asam-basa-ka-kb.html`)
   - Titrasi Asam-Basa & Kurva Titrasi — *dilengkapi Simulator Buret & Grafik Titrasi Real-Time Canvas* (`titrasi-asam-basa.html`)
   - Latihan Pemecahan Masalah Asam-Basa Chang — *dilengkapi Kanvas Interaktif iPad & Google Classroom* (`latihan-pemecahan-masalah-asam-basa-chang.html`)
7. **Larutan Penyangga (Buffer)** (`kelas-11/larutan-penyangga/`)
   - Pengaruh Ion Sejenis (The Common Ion Effect) (`efek-ion-sejenis.html`)
   - Komponen & Prinsip Kerja Larutan Penyangga (`prinsip-kerja-larutan-penyangga.html`)
   - Perhitungan pH Penyangga (Henderson-Hasselbalch) (`perhitungan-ph-penyangga.html`)
   - Kapasitas Penyangga & Sistem Buffer Tubuh (`kapasitas-dan-fungsi-penyangga.html`)
   - Latihan Pemecahan Masalah Penyangga Chang — *dilengkapi Kanvas Interaktif iPad & Google Classroom* (`latihan-pemecahan-masalah-penyangga-chang.html`)
8. **Hidrolisis Garam** (`kelas-11/hidrolisis-garam/`)
   - Konsep Dasar & 4 Kategori Hidrolisis Garam (`konsep-dan-klasifikasi-hidrolisis.html`)
   - Reaksi Hidrolisis Kation, Anion & Logam Terhidrasi (`reaksi-hidrolisis-dan-kation-logam.html`)
   - Perhitungan Tetapan $K_h$ & pH Larutan Garam (`perhitungan-ph-hidrolisis-garam.html`)
   - Latihan Pemecahan Masalah Hidrolisis Chang — *dilengkapi Kanvas Interaktif iPad & Google Classroom* (`latihan-pemecahan-masalah-hidrolisis-chang.html`)
9. **Kelarutan & Hasil Kali Kelarutan (Ksp)** (`kelas-11/kelarutan-dan-ksp/`)
   - Konsep Kelarutan ($s$) & Tetapan $K_{sp}$ (`konsep-kelarutan-dan-ksp.html`)
   - Prediksi Pengendapan ($Q_{sp}$ vs $K_{sp}$) (`prediksi-pengendapan-qsp.html`)
   - Pengaruh Ion Sejenis & Pengaruh pH (`faktor-ion-sejenis-dan-ph.html`)
   - Latihan Pemecahan Masalah Kelarutan & Ksp Chang — *dilengkapi Kanvas Interaktif iPad & Google Classroom* (`latihan-pemecahan-masalah-ksp-chang.html`)
10. **Sistem Koloid** (`kelas-11/sistem-koloid/`)
    - Konsep Sistem Koloid & 8 Jenis Koloid (`konsep-dan-jenis-koloid.html`)
    - Sifat-Sifat Khas Koloid (`sifat-khas-koloid.html`)
    - Pembuatan & Penerapan Koloid (`pembuatan-dan-aplikasi-koloid.html`)
    - Latihan Pemecahan Masalah Koloid Chang — *dilengkapi Kanvas Interaktif iPad & Google Classroom* (`latihan-pemecahan-masalah-koloid-chang.html`)

### 🟣 Kelas XII
1. **Sel Volta & Elektrokimia** (`kelas-12/sel-volta/`)
   - Dasar Redoks & Sel Elektrokimia — *dilengkapi Animasi Elektrode Menipis & Menebal* (`dasar-redoks-elektrokimia.html`)
   - Anode, Katode, & Potensial Sel — *dilengkapi Simulator Deret Volta* (`anode-katode-potensial-sel.html`)
   - Notasi Sel Galvani & Proyek Animasi Keynote (`notasi-sel-dan-proyek.html`)
2. **Sel Elektrolisis & Hukum Faraday** (`kelas-12/elektrolisis/`)
   - Konsep Dasar & Aturan Reaksi Elektrolisis — *dilengkapi Simulator Kompetisi Spesi & Variasi Logam Anode* (`konsep-dan-aturan-elektrolisis.html`)
   - Hukum Faraday I & II — *dilengkapi Lab Virtual Faraday I & II serta Animasi Elektrode* (`hukum-faraday.html`)
   - Aplikasi Industri & Proyek Penyepuhan — *dilengkapi Studio Virtual Electroplating* (`aplikasi-dan-proyek-penyepuhan.html`)

---

## 🎯 Modul Tambahan: Simulasi SNBT / UTBK & Prediksi PTN

Selain materi kimia kurikulum nasional, platform ini dilengkapi dengan sistem simulasi ujian masuk PTN:

- 📚 **Pusat Simulasi SNBT / UTBK CBT Interaktif (`/snbt/`)**
  - **Universal CBT Engine (`snbt/simulasi.html`):** 1 file mesin ujian berbasis parameter URL (`?subtes=...&paket=...`) dengan *countdown timer*, kisi-kisi nomor (1–N), tombol ragu-ragu/yakin, pintasan keyboard (`A`–`E`), format KaTeX untuk rumus kuantitatif, dan *auto-scoring* skala UTBK (200–1000).
  - **Mode Pembahasan Ilmiah (`snbt/pembahasan.html`):** Analisis konsep, bedah pilihan opsi, dan trik cepat dengan filter soal salah/benar.
  - **Database Soal Terstruktur (`snbt/js/snbt-data.js`):** Single source of truth untuk seluruh paket soal SNBT.
  - **Status Paket Aktif Saat Ini:**
    1. 🧠 **Penalaran Umum (PU):** Paket 1 (10 Soal - Logika Argumen & Proposisi)
    2. 📖 **Pemahaman Bacaan & Menulis (PBM):** Paket 1 (15 Soal - PUEBI & Koherensi Teks)
    3. 📐 **Pengetahuan Kuantitatif (PK):** Paket 1 (10 Soal - Aljabar, Matriks, & Kecukupan Data)
    4. 🔍 **Pengetahuan & Pemahaman Umum (PPU):** Paket 1 (15 Soal - Tata Makna & Kosakata)
- 🎯 **Kalkulator Prediksi Peluang Lolos PTN (`/tka/prediksi-ptn.html`)**
  - Database passing grade ribuan program studi PTN se-Indonesia lengkap dengan perhitungan keketatan dan peluang rasionalisasi nilai.
- 💬 **Kontak & Konsultasi Belajar Admin:** WhatsApp `0852-6660-1477` (`https://wa.me/6285266601477`).

---

## 💻 Panduan Melanjutkan Pekerjaan di PC Rumah

Jika Anda berpindah ke komputer atau laptop rumah, ikuti langkah berikut untuk langsung melanjutkan pengembangan:

### 1. Sinkronisasi Repository Git
Buka terminal di folder project pada PC rumah dan jalankan:
```bash
git pull origin main
```
Seluruh halaman web, mesin CBT, dan script terbaru akan langsung tersinkronisasi.

### 2. Menjalankan Server Lokal (Preview)
Gunakan ekstensi **Live Server** di VS Code:
- Buka folder paling atas project (`WEB developer pembelajaran kimia`) di VS Code.
- Klik kanan file `index.html` &rarr; pilih **"Open with Live Server"** (port default `http://localhost:5500`).
- Akses portal SNBT: `http://localhost:5500/snbt/index.html`.

### 3. Cara Menambahkan Paket Soal Baru (Sangat Mudah!)
Anda **TIDAK PERLU** membuat file HTML baru atau mengubah CSS/layout. Cukup edit satu file: **`snbt/js/snbt-data.js`**:
1. Buka `snbt/js/snbt-data.js`.
2. Di objek `snbtSubtes`, cari subtes yang ingin ditambah (misal `pu` atau `pk`) dan ubah status paketnya dari `'segera'` menjadi `'tersedia'`.
3. Di objek `snbtBankSoal`, tambahkan daftar soal baru dengan format:
   ```javascript
   'pu_2': [
       {
           id: 1,
           topik: 'Topik Bahasan',
           soal: 'Teks pertanyaan...',
           options: [
               { id: 'A', text: 'Pilihan A' },
               { id: 'B', text: 'Pilihan B' },
               ...
           ],
           kunci: 'A',
           pembahasan: 'Penjelasan langkah demi langkah...'
       },
       ...
   ]
   ```
4. **Selesai!** Mesin ujian (`simulasi.html?subtes=pu&paket=2`) dan mode pembahasan (`pembahasan.html?subtes=pu&paket=2`) otomatis aktif dan bisa dikerjakan langsung.

### 4. Lokasi Arsip Bank Soal Mentah
Seluruh bahan mentah (total 49 file) tersimpan rapi di folder lokal:
`referensi/bank soal SNBT/`:
- `01_Mega_Ebook_Wangsit/` &mdash; 4 Ebook Wangsit Jumbo (900+ halaman, ribuan soal)
- `02_Seri_Latihan_Subjek_Zenius/` &mdash; 16 file latihan per topik (sumber Paket 1-3)
- `03_Soal_Asli_UTBK_2024_2025_Per_Sesi/` &mdash; 19 file butir soal asli gelombang ujian (23 April, Sesi 1 Day 1, Sesi 9, dll)
- `04_Try_Out_Pahamify_Sainsin/` &mdash; 3 paket TO Nasional berbobot HOTS
- `05_Dokumen_Word_Soal_SNBT/` &mdash; 5 naskah ketikan Word (.docx) siap pakai
- `06_Panduan_dan_Passing_Grade/` &mdash; Panduan resmi pendaftaran & skor passing grade PTN
- 📄 Baca indeks lengkap di: `referensi/bank soal SNBT/KATALOG_BANK_SOAL.md`.

*(Catatan: Folder `referensi/` sengaja dimasukkan ke `.gitignore` agar repository GitHub tetap berukuran kecil dan proses `git push/pull` selalu instan).*

---

## 🛠️ Teknologi & Arsitektur

- **Frontend:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript (ES6+), SVG Interaktif, HTML5 Canvas
- **Komponen Dinamis (`partials/` & `js/`):**
  - `js/curriculum.js` — *Single Source of Truth* untuk seluruh navigasi, kartu beranda, dan sidebar bab.
  - `js/include.js` — Pemuat *header/footer/SPU*, mesin pencari global, pencatat progres `localStorage`, generator kartu skor PNG, dan injeksi otomatis SEO/GA4.
  - `js/spu.js` — Basis data 118 unsur kimia dan logika interaktif Tabel Periodik Unsur.
- **Hosting & CI/CD:** GitHub Pages + Custom Domain (`kimia.ajarkita.my.id`) + GitHub Actions Auto-SEO (`scripts/update-seo.js`).

---

## ➕ Cara Menambahkan Materi / Sub-Bab Baru

1. Buat file HTML materi baru di dalam folder kelas dan bab yang sesuai (misal `kelas-12/<nama-bab>/<nama-file>.html`).
2. Daftarkan `slug`, `title`, dan nama `file` di dalam objek `kurikulum` pada file `js/curriculum.js`.
3. **Selesai!** Menu beranda, halaman hub kelas, *sidebar* navigasi, *breadcrumb*, serta `sitemap.xml` (saat *push* ke GitHub) akan diperbarui secara otomatis.