# Runbook Rilis Produksi: Infrastruktur Multi-Tes IELTS & Perlindungan Akses

> **PERINGATAN PENTING SEBELUM MEMULAI:**
> Runbook ini disusun sebagai panduan operasional berurutan rilis ke lingkungan produksi. **JANGAN MENJALANKAN DOKUMEN INI TANPA PERSETUJUAN EKSPLISIT DARI PEMILIK PROYEK.**
> Seluruh perintah di bawah ini **belum dijalankan**. Database produksi Cloudflare D1 (`kimia-lisensi` / `69e3b92a-89af-4d16-8ee6-3d201722ad09`) tetap 100% utuh dan belum dimigrasi.

---

## 1. Waktu Rilis yang Disarankan (Maintenance Window)

Untuk meminimalkan dampak terhadap pengguna aktif:
- **Jadwal Ideal:** Lakukan rilis pada **pukul 23:00 – 05:00 WIB** (dini hari), saat aktivitas belajar siswa berada pada titik terendah.
- **Waktu yang Wajib Dihindari:**
  - **Pukul 07:00 – 17:00 WIB:** Jam operasional sekolah dan kegiatan belajar mengajar aktif.
  - **Pukul 19:00 – 21:00 WIB:** Jam puncak latihan mandiri dan try out malam siswa.

---

## 2. Prasyarat & Penyiapan Secret Lingkungan (Cloudflare Worker)

Pastikan seluruh secret operasional telah disetel di Cloudflare Worker produksi (`kimia-snbt-api`) **tanpa mencatat nilai rahasia di berkas kode atau log commit**:

### a) Periksa Daftar Secret yang Ada:
```bash
cd worker
npx wrangler secret list
```

### b) Set Hanya Secret yang Belum Ada:
Set hanya secret yang belum terdaftar pada output di atas:
```bash
# Set secret di Cloudflare Worker produksi satu per satu:
npx wrangler secret put TEACHER_KEY
npx wrangler secret put ADMIN_KEY
npx wrangler secret put IP_PEPPER
npx wrangler secret put TOKEN_PREFIX_PEPPER
npx wrangler secret put AUDIO_STREAM_SECRET
```

> ⚠️ **PERINGATAN ROTASI KUNCI (TEACHER_KEY & ADMIN_KEY):**
> Mengganti nilai `TEACHER_KEY` atau `ADMIN_KEY` yang sudah aktif akan serta-merta **mematikan akses kunci lama**. Guru atau admin yang sedang membuka dashboard rekapitulasi akan langsung ditolak (`HTTP 401`) hingga mereka memasukkan kunci baru. Jika kunci lama masih berlaku dan aman, **jangan timpa kembali**.

### Rincian Fungsi Secret:
- `TEACHER_KEY`: Kunci otentikasi guru untuk mengakses rekapitulasi nilai dan penilaian esai/speaking.
- `ADMIN_KEY`: Kunci administratif tingkat tinggi untuk pengelolaan lisensi dan penghapusan data GDPR/UU PDP.
- `IP_PEPPER`: Salt pepper HMAC khusus untuk membuntukan alamat IP pada activation audit log.
- `TOKEN_PREFIX_PEPPER`: Salt pepper HMAC untuk masking awalan token lisensi pada rate limiting dan log.
- `AUDIO_STREAM_SECRET`: Secret penandatangan token streaming audio privat Speaking (HMAC SHA-256 terikat `recording_id`).

---

## 3. Ekspor Cadangan Database D1 & Pencatatan Snapshot Time Travel

Sebelum menyentuh skema database produksi `kimia-lisensi`, lakukan dua lapis pengamanan data:

### a) Buat Direktori Cadangan Aman:
```bash
cd worker
mkdir -p backups
```
*(Direktori `backups/` dan `worker/backups/` telah terdaftar di `.gitignore` untuk mencegah berkas cadangan terdorong ke repositori publik).*

### b) Ekspor Snapshot SQL Penuh:
```bash
# Ekspor seluruh skema dan baris data produksi ke berkas cadangan lokal
npx wrangler d1 export kimia-lisensi --remote --output ./backups/prod-backup-$(date +%Y%m%d_%H%M%S).sql

# Verifikasi keberadaan dan ukuran berkas cadangan
ls -lh ./backups/prod-backup-*.sql
```

> 🔒 **PERINGATAN PRIVASI (DATA PRIBADI SISWA / PII):**
> Berkas cadangan SQL hasil ekspor memuat data pribadi siswa (nama lengkap, kelas, identifier perangkat, dan riwayat skor pengerjaan). Berkas ini wajib disimpan di media penyimpanan lokal yang aman, dilarang dibagikan melalui kanal publik, dan dilarang di-commit ke Git.

### c) Catat Bookmark D1 Time Travel (Restore Point Cepat):
Ambil bookmark titik waktu sebelum migrasi:
```bash
npx wrangler d1 time-travel info kimia-lisensi
```
*Catat `bookmark` id atau timestamp ISO yang muncul di terminal (misal: `bookmark: 0000002a-...`). Informasi ini menjadi titik pemulihan instan jika migrasi perlu dibatalkan.*

---

## 4. Jalankan Migrasi Skema D1 Produksi (SEBELUM Deploy Kode)

Jalankan berkas migrasi Cloudflare D1 [`worker/migrations/0001_add_multi_test_id.sql`](file:///Users/ash-shiddiiqi/pengembangan%20web%20kimia/worker/migrations/0001_add_multi_test_id.sql) yang menambahkan kolom `test_id TEXT NOT NULL DEFAULT 'test1'` secara aman (zero data loss):

### a) Hitung Jumlah Baris SEBELUM Migrasi:
Jalankan query baseline untuk mencatat jumlah baris awal pada seluruh tabel sesi dan rekaman:
```bash
npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, COUNT(*) AS total_sebelum FROM listening_sessions UNION ALL SELECT 'reading_sessions', COUNT(*) FROM reading_sessions UNION ALL SELECT 'writing_sessions', COUNT(*) FROM writing_sessions UNION ALL SELECT 'speaking_sessions', COUNT(*) FROM speaking_sessions UNION ALL SELECT 'speaking_recordings', COUNT(*) FROM speaking_recordings;"
```
*Catat angka dari masing-masing tabel.*

### b) Eksekusi Migrasi D1:
```bash
npx wrangler d1 migrations apply kimia-lisensi --remote
```

### c) Verifikasi Keutuhan Baris SESUDAH Migrasi:
Jalankan query verifikasi untuk membuktikan seluruh baris lama tetap utuh dan termigrasi menjadi `test_id = 'test1'`:
```bash
npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, COUNT(*) AS total_sesudah, SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) AS migrasi_test1 FROM listening_sessions UNION ALL SELECT 'reading_sessions', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM reading_sessions UNION ALL SELECT 'writing_sessions', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM writing_sessions UNION ALL SELECT 'speaking_sessions', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM speaking_sessions UNION ALL SELECT 'speaking_recordings', COUNT(*), 0 FROM speaking_recordings;"
```
*Kriteria Sukses: `total_sesudah` harus sama persis dengan `total_sebelum`, dan `migrasi_test1` harus sama dengan `total_sesudah`.*

---

## 5. Eksekusi Deploy Kode (Backend & Frontend)

### Arsitektur Hosting:
- **Backend API & Aset Privat:** Dilayani oleh Cloudflare Worker `kimia-snbt-api` (`worker/`). Aset master soal di `./premium` dilindungi oleh `run_worker_first: true`.
- **Frontend Publik:** Dilayani sebagai situs statis di **GitHub Pages** (repositori `rezi-d/rezi-d.github.io` dengan custom domain `kimia.ajarkita.my.id`).

### Urutan Eksekusi Deploy:

#### Langkah 5.1: Deploy Backend Cloudflare Worker
```bash
cd worker
npm run deploy
```
*Pastikan output deployment menunjukkan status `Success` dan mendaftarkan trigger cron `0 19 * * *`.*

#### Langkah 5.2: Audit Pra-Commit Frontend (Pemeriksaan Bebas Secret)
Kembali ke root repositori dan periksa diff:
```bash
cd ..
git status
git diff
```
*Pastikan tidak ada kunci rahasia, secret token asli, atau berkas dump SQL cadangan yang belum di-ignore.*

#### Langkah 5.3: Commit, Pembuatan Tag Rilis, & Push Frontend
```bash
# Tambahkan git tag rilis versi produksi
git tag -a v1.4.0-multi-test -m "Rilis Infrastruktur Multi-Tes IELTS Tahap 4 (Ready for Content)"

# Dorong commit dan tag ke GitHub Pages
git push origin main --tags
```

---

## 6. Prosedur Uji Asap Pasca-Deploy (Smoke Testing Produksi)

Lakukan verifikasi operasional langsung pada domain produksi (`https://kimia.ajarkita.my.id`):

| Skenario Pengujian | Langkah Pengujian | Kriteria Lulus |
| :--- | :--- | :--- |
| **1. SNBT & Kimia Lama Normal** | Buka halaman materi Kimia dan simulasi UTBK-SNBT (`/snbt/`). Coba aktivasi token SNBT jika ada. | Halaman terbuka normal, bank soal SNBT berfungsi, otentikasi SNBT tidak terganggu oleh perubahan IELTS. |
| **2. Mock 1 Bebas Token & Audio** | Buka `/ielts/listening-mock-test.html?test=1`. Klik "Putar Tes Suara", isi nama & mulai sesi. | Berjalan normal tanpa token, audio Section 1 berputar lancar tanpa error network. |
| **3. Pilihan Tes Multi-Tes** | Buka `/ielts/index.html`. Klik tab `Mock Test 1` lalu klik tab `Mock Test 2`. | Tab Mock 1 berlabel "Gratis". Tab Mock 2 berlabel "Segera Hadir" dengan kartu tes nonaktif. |
| **4. Guard Halaman Start Mock 2** | Buka URL langsung `/ielts/writing-mock-test.html?test=2` (coba dalam mode login lisensi dan tanpa login). | Muncul kotak pemberitahuan `"Simulasi Mock Test 2 Segera Hadir"`, form submit disembunyikan, dan tidak ada baris sesi kosong di D1. |
| **5. Blokir Aset Statis Premium** | Buka URL berkas soal master langsung di browser: `https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/test2-master.json`. | Wajib ditolak `HTTP 403 Forbidden` oleh Worker assets binding (`run_worker_first`). |
| **6. Penolakan API Mock 2 Tanpa Token** | Jalankan via curl: `curl -X POST https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/start -H "Content-Type: application/json" -d '{"testId":"test2","nama":"Test","kelas":"12"}'`. | Wajib ditolak `HTTP 401` dengan respons JSON `{"ok":false,"reason":"token_required"}`. |
| **7. Rekap Guru & Filter Multi-Tes** | Akses `/ielts/rekap.html` dengan kunci guru sah (`?key=...`). | Dashboard terbuka, widget pemantauan kapasitas D1 tampil, dan filter dropdown tes (`Semua`, `Mock 1`, `Mock 2`) berfungsi normal. |
| **8. Pertahanan Endpoint Admin** | Buka `https://kimia-snbt-api.kimia-ajarkita.workers.dev/admin/list` tanpa header otorisasi. | Wajib ditolak `HTTP 401` / `HTTP 403` Unauthorized secara instan. |
| **9. Verifikasi Trigger Cron** | Periksa jadwal tugas cron retention worker via terminal: `npx wrangler triggers list` (atau via Cloudflare Dashboard). | Cron `0 19 * * *` (pukul 02:00 WIB) terdaftar aktif. |
| **10. Verifikasi Cache-Buster di Incognito** | Buka tab **Incognito / Private Window**, akses `/ielts/writing-mock-test.html`, buka inspect DevTools Network tab. | Berkas skrip termuat dengan query string `?v=20261104f` tanpa tersangkut cache usang. |

---

## 7. Prosedur Rollback Cepat (Jika Terjadi Kendala Kritis)

Jika ditemukan anomali fungsional kritis saat uji asap:

### a) Rollback Kode Cloudflare Worker (Instan):
```bash
cd worker
# 1. Periksa daftar riwayat deployment
npx wrangler deployments list

# 2. Kembalikan ke deployment versi stabil sebelumnya
npx wrangler rollback <DEPLOYMENT_ID_SEBELUMNYA>
```

> ℹ️ **CATATAN KOMPATIBILITAS SKEMA (ZERO DB ROLLBACK):**
> Rollback kode Worker **TIDAK MEMERLUKAN rollback database D1**. Penambahan kolom `test_id TEXT NOT NULL DEFAULT 'test1'` bersifat aditif murni (backward-compatible). Kode Worker versi lama tetap dapat membaca dan menulis tabel secara normal karena nilai default `'test1'` disediakan otomatis oleh SQLite.

### b) Rollback Frontend Web:
Gunakan revert terarah berdasarkan tag rilis (bukan `HEAD` acak):
```bash
# Revert rentang commit sejak tag rilis terakhir
git revert v1.4.0-multi-test..HEAD --no-edit
git push origin main
```

### c) Pemulihan Database D1 via Time Travel (Hanya Jika Terjadi Kerusakan Data Fatal):
Cloudflare D1 Time Travel adalah metode pemulihan utama yang tercepat:
```bash
# Pulihkan database ke titik bookmark sebelum migrasi (yang dicatat pada Langkah 3c)
npx wrangler d1 time-travel restore kimia-lisensi --bookmark <BOOKMARK_ID_SEBELUM_MIGRASI>
```

> ⚠️ **PERINGATAN PEMULIHAN TIME TRAVEL / RESTORE SQL:**
> Operasi `time-travel restore` maupun eksekusi file cadangan SQL akan mengembalikan **seluruh isi database** ke titik waktu cadangan dibuat. Segala aktivitas pengerjaan ujian baru atau aktivasi token yang terjadi antara titik pencadangan dan saat restore dijalankan **akan terhapus**. Gunakan hanya jika terjadi korupsi data parah yang tidak dapat diatasi melalui kode.
