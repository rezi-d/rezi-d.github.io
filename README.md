# 🧪 KimiaInteraktif — Media Pembelajaran & Simulator Kimia SMA

**KimiaInteraktif** ([https://kimia.ajarkita.my.id](https://kimia.ajarkita.my.id)) adalah platform pembelajaran Kimia SMA (Kelas X, XI, dan XII) berbasis web interaktif yang dilengkapi laboratorium virtual, animasi visual konsep reaksi, latihan pemahaman *auto-koreksi*, tabel periodik unsur digital, serta pencetakan kartu bukti nilai untuk pembelajaran jarak jauh (PJJ / Google Classroom).

---

## ✨ Fitur Utama

- 🔬 **Laboratorium & Simulator Virtual Interaktif**
  - **Kelas XI:** Kalkulator Mol & Pereaksi Pembatas (M-R-S), Visualisasi Ikatan Ion/Kovalen/Logam, Simulator Bentuk Molekul 3D VSEPR, Kalorimeter Kopi Virtual, dan Simulator Hukum Hess Model Tabel.
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