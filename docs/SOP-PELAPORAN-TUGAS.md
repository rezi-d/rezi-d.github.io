# Standar Operasional Prosedur (SOP): Pelaporan Tugas Susulan Google Classroom
**Sistem Terpadu AjarKita Digital Record** (`kimia.ajarkita.my.id`)

---

## 1. Pendahuluan & Tujuan
Sistem Pelaporan Tugas Susulan dirancang untuk mencatat, merekapitulasi, dan memvalidasi tugas-tugas susulan siswa yang dikumpulkan melalui Google Classroom maupun penyerahan fisik langsung. Sistem ini menjamin keteraturan data nilai, mencegah duplikasi tugas, dan mempermudah guru serta wali kelas dalam memantau kelengkapan tugas siswa.

---

## 2. Hak Akses & Kunci Keamanan
Akses pengelolaan rekapitulasi data diproteksi ketat menggunakan kunci terpisah:
- **Halaman Dashboard Rekapitulasi**: `https://kimia.ajarkita.my.id/guru/rekap-tugas.html` (atau `http://localhost:5500/guru/rekap-tugas.html` pada pengujian lokal).
- **Kunci Akses Rekap Guru (`X-Rekap-Key`)**: Kunci khusus guru/wali kelas yang disetel di Cloudflare Worker (`TASK_REKAP_KEY`).
- **Kode Akses Siswa**: Dibuat otomatis per periode oleh guru (format: `TGS-XXXX-YYYY`) dan dibagikan hanya kepada siswa yang berhak mengisi tugas susulan.

---

## 3. Langkah Operasional Guru & Admin

### A. Membuka Periode Pelaporan Baru
1. Buka halaman `guru/rekap-tugas.html`.
2. Masukkan **Kunci Akses Rekap**.
3. Klik tombol **"Buka Periode Baru"**.
4. Isi data periode:
   - **Nama Periode**: Contoh: `Pelaporan Tugas Susulan Semester Ganjil 2026/2027`
   - **Tanggal Mulai & Berakhir**: Tentukan batas waktu pembukaan pengisian tugas.
   - **Batas Maksimal Tugas**: Default 30 tugas per pengisian.
5. Klik **"Simpan & Aktifkan"**.
6. **PENTING**: Sistem akan memunculkan jendela modal yang menampilkan **Kode Akses Siswa** (Contoh: `TGS-SMP-2026`).
   - Klik tombol **"Salin Kode Akses"**.
   - Catat kode ini karena kode hanya ditampilkan penuh saat pembuatan demi alasan keamanan.

### B. Membagikan Kode Akses ke Siswa
- Bagikan kode akses hanya kepada siswa yang memiliki tunggakan/tugas susulan melalui grup kelas WhatsApp atau pengumuman resmi.
- Instruksikan siswa untuk membuka situs `https://kimia.ajarkita.my.id/` dan menekan tombol mengambang **"📋 Lapor Tugas"** di pojok kanan bawah.

### C. Alur Pengisian oleh Siswa (Panduan Singkat untuk Guru)
1. Siswa menekan **"📋 Lapor Tugas"**.
2. **Langkah 1**: Siswa memasukkan **Kode Akses** periode dan menyelesaikan verifikasi Turnstile anti-bot.
3. **Langkah 2**: Siswa memasukkan **Nama Lengkap** dan memilih **Kelas** dari 7 kelas resmi:
   - `X Putra`, `X Putri`
   - `XI IPA Putra`, `XI IPA Putri`
   - `XII IPA Putra`, `XII IPA Putri`, `XII IPS Putri`
4. **Langkah 3**: Siswa menambahkan baris tugas (pilihan dari 27 mata pelajaran resmi dengan pencarian interaktif) dan mengisi judul tugas serta catatan penyerahan.
5. **Langkah 4**: Siswa menerima **Resi Tanda Terima Digital** dengan Nomor Referensi (format: `TSG-XXXXXX`) yang dapat disalin sebagai bukti penyerahan.

### D. Memeriksa & Memverifikasi Tugas Masuk
1. Masuk kembali ke dashboard `guru/rekap-tugas.html`.
2. Gunakan filter pencarian:
   - **Filter Kelas**: Pilih kelas tertentu untuk rapat pleno atau koordinasi wali kelas.
   - **Filter Mata Pelajaran**: Pilih mata pelajaran Anda untuk memverifikasi penugasan spesifik.
   - **Filter Status**: `Semua Status`, `Menunggu Verifikasi (Pending)`, atau `Sudah Disetujui`.
3. Memverifikasi tugas:
   - **Verifikasi Per Siswa**: Klik tombol **"Setujui"** pada baris tugas siswa setelah memeriksa bahwa tugas memang sudah ada di Google Classroom.
   - **Verifikasi Masal (Bulk)**: Centang beberapa tugas sekaligus, lalu klik tombol **"Verifikasi Masal Terpilih"**.

### E. Ekspor Rekapitulasi ke Excel / CSV
1. Klik tombol **"Ekspor CSV"** di pojok kanan atas tabel.
2. File CSV yang diunduh telah dilengkapi proteksi **Formula Neutralization** (kebal terhadap injeksi formula Excel berbahaya).
3. Buka file CSV di Microsoft Excel atau Google Sheets untuk pencatatan nilai rapot.

### F. Cetak Berkas Fisik / Arsip Resmi
1. Klik tombol **"Cetak Berkas"** atau tekan `Ctrl + P`.
2. Sistem secara otomatis mengaktifkan tata letak cetak khusus (`@media print`):
   - Elemen interaktif (tombol, input filter, header navigasi) otomatis disembunyikan.
   - Tampilan diformat dalam kertas A4 bersih dengan judul resmi sekolah.
   - Di bagian bawah lembar cetak otomatis disediakan kolom tanda tangan:
     - Guru Mata Pelajaran / Wali Kelas
     - Mengetahui: Wakil Kepala Sekolah Bidang Kurikulum

---

## 4. Retensi & Pembersihan Data Berkala

### A. Penghapusan Otomatis (Cloudflare Cron Trigger)
- Sistem Cloudflare Worker menjalankan pembersihan terjadwal setiap pukul **02:00 WIB (19:00 UTC)**.
- Data periode yang sudah ditutup lebih dari **90 hari** akan diarsipkan/dibersihkan secara otomatis untuk menjaga performa database Free Tier Cloudflare D1.

### B. Pembersihan Manual (Aman & Terkendali)
Jika admin sekolah perlu membersihkan data tugas uji coba:
1. Di dashboard admin, klik menu **"Kelola Periode"**.
2. Pilih periode yang ingin dihapus, lalu klik tombol merah **"Hapus Data Periode"**.
3. Sistem akan menjalankan **Simulasi Penghapusan (Dry-Run)** terlebih dahulu untuk menampilkan berapa jumlah siswa dan butir tugas yang akan terhapus.
4. Admin diwajibkan mengetik kata **`HAPUS`** secara persis di kolom konfirmasi sebelum tombol eksekusi aktif.
5. Semua tindakan penghapusan tercatat di tabel audit log sistem (`task_audit_logs`).
