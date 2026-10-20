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