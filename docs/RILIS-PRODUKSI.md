# Runbook Rilis Produksi: Infrastruktur Multi-Tes IELTS & Perlindungan Akses

> **PERINGATAN PENTING SEBELUM MEMULAI:**
> Runbook ini disusun sebagai panduan operasional berurutan rilis ke lingkungan produksi. **JANGAN MENJALANKAN DOKUMEN INI TANPA PERSETUJUAN EKSPLISIT DARI PEMILIK PROYEK.**
> Seluruh perintah di bawah ini **belum dijalankan**. Database produksi Cloudflare D1 (`kimia-lisensi` / `69e3b92a-89af-4d16-8ee6-3d201722ad09`) tetap 100% utuh dan belum dimigrasi.

---

## 1. Waktu Rilis yang Disarankan (Maintenance Window)

Untuk meminimalkan dampak terhadap pengguna aktif:
- **Jadwal Ideal:** Lakukan rilis pada **pukul 23:00 – 01:30 WIB** atau **pukul 02:30 – 05:00 WIB** (dini hari), saat aktivitas belajar siswa berada pada titik terendah.
- **Waktu yang Wajib Dihindari:**
  - **Pukul 01:30 – 02:30 WIB:** Trigger cron retensi berkala (`0 19 * * *` UTC = 02:00 WIB) sedang berjalan pada rentang waktu ini. Hindari proses deploy atau migrasi agar tidak terjadi konflik konkurensi database.
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
- `ADMIN_KEY`: Kunci administratif tingkat tinggi untuk pengelolaan lisensi dan pembersihan data uji.
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

Jalankan berkas migrasi Cloudflare D1 `worker/migrations/0001_add_multi_test_id.sql` yang menambahkan kolom `test_id TEXT NOT NULL DEFAULT 'test1'` secara aman (zero data loss):

### a) Hitung Jumlah Baris SEBELUM Migrasi:
Jalankan query baseline untuk mencatat jumlah baris awal pada seluruh tabel sesi dan rekaman:
```bash
npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, COUNT(*) AS total_sebelum FROM listening_sessions UNION ALL SELECT 'reading_sessions', COUNT(*) FROM reading_sessions UNION ALL SELECT 'writing_sessions', COUNT(*) FROM writing_sessions UNION ALL SELECT 'speaking_sessions', COUNT(*) FROM speaking_sessions UNION ALL SELECT 'speaking_recordings', COUNT(*) FROM speaking_recordings;"
```
*Catat angka dari kelima tabel tersebut.*

### b) Eksekusi Migrasi D1:
```bash
npx wrangler d1 migrations apply kimia-lisensi --remote
```

> 🛑 **PROTOKOL JIKA MIGRASI D1 GAGAL:**
> Jika eksekusi migrasi menghasilkan galat (error) atau keluar dengan status gagal:
> 1. **BERHENTI SEGERA.**
> 2. **JANGAN DEPLOY** kode Worker maupun kode Frontend.
> 3. **JANGAN ULANGI** perintah migrasi secara membabi buta.
> 4. Periksa riwayat tabel migrasi internal:
>    ```bash
>    npx wrangler d1 execute kimia-lisensi --remote --command "SELECT * FROM d1_migrations;"
>    ```
> 5. Jalankan kembali query hitung baris baseline untuk memastikan data tidak berubah.
> 6. Segera laporkan pesan error persis beserta hasil query di atas kepada pemilik proyek untuk investigasi.

### c) Verifikasi Keutuhan Baris SESUDAH Migrasi:
Jalankan query verifikasi untuk membuktikan seluruh baris lama tetap utuh dan termigrasi menjadi `test_id = 'test1'`:
```bash
npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, COUNT(*) AS total_sesudah, SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) AS migrasi_test1 FROM listening_sessions UNION ALL SELECT 'reading_sessions', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM reading_sessions UNION ALL SELECT 'writing_sessions', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM writing_sessions UNION ALL SELECT 'speaking_sessions', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM speaking_sessions UNION ALL SELECT 'speaking_recordings', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM speaking_recordings;"
```
*Kriteria Sukses: `total_sesudah` harus sama persis dengan `total_sebelum`, dan `migrasi_test1` harus sama dengan `total_sesudah` pada kelima tabel.*

---

## 5. Eksekusi Deploy Kode (Backend & Frontend)

### Arsitektur Hosting:
- **Backend API & Aset Privat:** Dilayani oleh Cloudflare Worker `kimia-snbt-api` (`worker/`). Aset master soal di `./premium` dilindungi oleh `run_worker_first: true`.
- **Frontend Publik:** Dilayani sebagai situs statis di **GitHub Pages** (repositori `rezi-d/rezi-d.github.io` dengan custom domain `kimia.ajarkita.my.id`).

> ⚠️ **PERINGATAN ARSITEKTUR & KEAMANAN KONTEN PREMIUM:**
> Frontend situs dan folder `worker/` berada di dalam repositori GitHub Pages (`rezi-d/rezi-d.github.io`) yang kemungkinan berstatus **publik** (dapat dilihat/diakses bebas).
> - Seluruh konten premium (soal ujian, kunci jawaban, audio listening, dan transkrip untuk Mock 2 ke atas) **DILARANG KERAS DI-COMMIT KE DALAM REPOSITORI PUBLIK INI**.
> - Sebelum konten Mock 2 ditambahkan di masa mendatang, seluruh aset konten premium tersebut **wajib disimpan di media penyimpanan privat di luar repositori publik** (misalnya Cloudflare R2 privat, storage bucket terenkripsi, atau disajikan terproteksi melalui Worker endpoint dengan otentikasi ketat). Jangan sekali-kali menaruh berkas master JSON atau audio MP3 Mock 2 di folder publik frontend.

### Urutan Eksekusi Deploy:

#### Langkah 5.1: Buat Anchor Tag di Commit Stabil Terakhir (SEBELUM Langkah Rilis)
Sebelum melakukan build, pengujian rilis, atau deploy apa pun, buat tag pada commit stabil terakhir sebagai jangkar rollback yang presisi:
```bash
# Periksa hash commit stabil terakhir
git log -1 --format="%h %s"

# Buat dan dorong anchor tag pre-multi-test
git tag pre-multi-test <COMMIT_STABIL_TERAKHIR>
git push origin pre-multi-test
```

#### Langkah 5.2: Jalankan Seluruh Suite Pengujian Otomatis (Wajib Lulus ≥ 212)
Jalankan pengujian regresi dan integrasi multi-tes:
```bash
npm test
```
*Syarat Mutlak: Seluruh rangkaian tes (saat ini 215 tes di 30 berkas tes) wajib lulus 100% tanpa ada kegagalan sama sekali. Tidak boleh berada di bawah 212 tes.*

#### Langkah 5.3: Audit Bebas Secret pada Perubahan Berkas
Periksa status dan diff repositori untuk memastikan kebersihan kode:
```bash
git status
git diff
```
*Pastikan tidak ada kunci rahasia (API key, secret), token autentik, maupun file cadangan database SQL (`backups/*.sql`) yang belum di-ignore.*

#### Langkah 5.4: Git Add dan Commit Rilis
Tambahkan berkas yang telah diaudit dan buat commit rilis:
```bash
# Tambahkan berkas yang telah diverifikasi
git add .gitignore docs/ ielts/ worker/ tests/

# Buat commit rilis produksi
git commit -m "feat(release): rilis infrastruktur multi-tes IELTS v1.4.0-multi-test"
```

#### Langkah 5.5: Deploy Backend Cloudflare Worker
Deploy Cloudflare Worker terlebih dahulu:
```bash
cd worker
npm run deploy
```
*Pastikan output deployment menunjukkan status `Success`.*

> 💡 **MENGAPA WORKER DIDELOY LEBIH DULU DARI FRONTEND?**
> Worker versi baru bersifat **kompatibel ke belakang (backward-compatible)** dengan frontend lama. Worker baru secara otomatis menganggap setiap request tanpa parameter `test` sebagai `test1`, dan skema database D1 telah disiapkan pada Langkah 4.
> Sebaliknya, jika frontend baru dideploy lebih dahulu, pengguna yang membuka halaman baru bisa mengirim parameter multi-tes (`test=2`) ke Worker lama yang belum mengenali rute, validasi, atau normalisasi multi-tes, sehingga berisiko menimbulkan error 400/500 bagi pengguna aktif.

#### Langkah 5.6: Buat Tag Rilis dan Push Frontend ke GitHub Pages
Setelah Worker aktif dan terverifikasi berjalan normal, dorong frontend ke repositori:
```bash
cd ..

# Buat tag rilis versi produksi
git tag -a v1.4.0-multi-test -m "Rilis Infrastruktur Multi-Tes IELTS Tahap 4 (Ready for Content)"

# Dorong commit rilis dan tag ke GitHub Pages
git push origin main --tags
```

---

## 6. Prosedur Uji Asap Pasca-Deploy (Smoke Testing Produksi)

Lakukan verifikasi operasional langsung pada domain produksi (`https://kimia.ajarkita.my.id`).
> 💡 **Ketentuan Identitas Uji:**
> Gunakan identitas nama peserta **`UJI-RILIS`** dan kelas **`UJI-PRODUKSI`** untuk seluruh sesi pengerjaan uji agar mudah diidentifikasi dan dibersihkan dari rekapitulasi.

| Skenario Pengujian | Langkah Pengujian | Kriteria Lulus |
| :--- | :--- | :--- |
| **1. SNBT & Kimia Lama Normal** | Buka halaman materi Kimia dan simulasi UTBK-SNBT (`/snbt/`). Coba aktivasi token SNBT jika ada. | Halaman terbuka normal, bank soal SNBT berfungsi, otentikasi SNBT tidak terganggu oleh perubahan IELTS. |
| **2. Mock 1 Bebas Token & Audio** | Buka `/ielts/listening-mock-test.html?test=1`. Klik "Putar Tes Suara", isi nama `UJI-RILIS` & mulai sesi. | Berjalan normal tanpa token, audio Section 1 berputar lancar tanpa error network. |
| **3. Pilihan Tes Multi-Tes** | Buka `/ielts/index.html`. Klik tab `Mock Test 1` lalu klik tab `Mock Test 2`. | Tab Mock 1 berlabel "Gratis". Tab Mock 2 berlabel "Segera Hadir" dengan kartu tes nonaktif. |
| **4. Guard Halaman Start Mock 2** | 1. Buka URL langsung `/ielts/writing-mock-test.html?test=2` (coba dengan login lisensi maupun tanpa login).<br/>2. Jalankan query D1 untuk verifikasi tidak adanya baris phantom:<br/>`npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, COUNT(*) AS count_test2 FROM listening_sessions WHERE test_id = 'test2' UNION ALL SELECT 'reading_sessions', COUNT(*) FROM reading_sessions WHERE test_id = 'test2' UNION ALL SELECT 'writing_sessions', COUNT(*) FROM writing_sessions WHERE test_id = 'test2' UNION ALL SELECT 'speaking_sessions', COUNT(*) FROM speaking_sessions WHERE test_id = 'test2';"` | Muncul kotak pemberitahuan `"Simulasi Mock Test 2 Segera Hadir"`, form submit disembunyikan, dan query database menghasilkan `count_test2 = 0` pada seluruh tabel sesi. |
| **5. Blokir Aset Statis Premium (Filter Pola Nama)** | 1. Buka URL pola master terduga: `curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/test2-master.json`<br/>2. Buka URL pola master acak: `curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/xyz-master.json` | **Kedua URL wajib ditolak `HTTP 403 Forbidden` (BUKAN `404 Not Found`).**<br/>*(Catatan Penting: Respons 403 bukan bukti bahwa berkas fisik ada di server. Filter keamanan Worker assets `run_worker_first: true` bekerja berdasarkan pencocokan pola nama berkas privat seperti `/*-master.json` atau `/premium/*`. Uji dengan path acak `/listening/xyz-master.json` membuktikan bahwa pencegatan pola aktif terlepas dari keberadaan berkas).* |
| **6. Penolakan API Mock 2 Tanpa Token** | Jalankan via curl: `curl -i -X POST https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/start -H "Content-Type: application/json" -d '{"testId":"test2","nama":"UJI-RILIS","kelas":"UJI-PRODUKSI"}'`. | Wajib ditolak `HTTP 401 Unauthorized` dengan JSON `{"ok":false,"reason":"token_required"}`. |
| **7. Rekap Guru & Filter Multi-Tes** | Akses `/ielts/rekap.html` dengan kunci guru sah (`?key=...`). | Dashboard terbuka, widget pemantauan kapasitas D1 tampil, dan filter dropdown tes (`Semua`, `Mock 1`, `Mock 2`) berfungsi normal. |
| **8. Pertahanan Endpoint Admin** | 1. Akses `https://kimia-snbt-api.kimia-ajarkita.workers.dev/admin/list` tanpa header otorisasi.<br/>2. *(Opsional uji otorisasi)* Masukkan kunci admin secara aman tanpa pencatatan terminal:<br/>`read -s ADMIN_KEY`<br/>`curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/admin/list -H "Authorization: Bearer $ADMIN_KEY"`<br/>`unset ADMIN_KEY` | Akses tanpa kunci wajib ditolak `HTTP 401`/`HTTP 403` secara instan. Akses dengan `$ADMIN_KEY` mengembalikan data JSON lisensi dengan aman, dan variabel lingkungan langsung dibersihkan. |
| **9. Verifikasi Trigger Cron** | Buka **Cloudflare Dashboard > Workers & Pages > `kimia-snbt-api` > Settings > Triggers**. | Jadwal cron retensi berkala `0 19 * * *` (setiap hari pukul 02:00 WIB / 19:00 UTC) terdaftar aktif dalam daftar Cron Triggers. |
| **10. Verifikasi Cache-Buster di Incognito** | Buka tab **Incognito / Private Window**, akses `/ielts/writing-mock-test.html`, buka inspect DevTools Network tab. | Berkas skrip termuat dengan query string `?v=20261104f` tanpa tersangkut cache usang. |

### Pembersihan Data Uji `UJI-RILIS` Pasca Smoke Test:

> ⚠️ **CATATAN INVESTIGASI ENDPOINT `/admin/delete-customer`:**
> Endpoint `/admin/delete-customer` dirancang khusus untuk penghapusan lisensi pelanggan berdasarkan identifier lisensi (`id`, `wa`, atau `token`). Endpoint tersebut **TIDAK MENDUKUNG** pencarian atau penghapusan berdasarkan nama/kelas siswa sesi ad-hoc tanpa lisensi. Oleh karena itu, penghapusan data uji `UJI-RILIS` dilakukan langsung melalui perintah query Cloudflare D1.

#### Langkah 1: Tampilkan Baris Data Uji (SELECT):
Jalankan query untuk memeriksa baris data sesi yang dibuat oleh pengujian:
```bash
npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, id, nama_peserta, kelas, started_at FROM listening_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI' UNION ALL SELECT 'reading_sessions', id, nama_peserta, kelas, started_at FROM reading_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI' UNION ALL SELECT 'writing_sessions', id, nama_peserta, kelas, started_at FROM writing_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI' UNION ALL SELECT 'speaking_sessions', id, nama_peserta, kelas, started_at FROM speaking_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI';"
```
*Catat ID dan jumlah baris sesi uji yang ditemukan.*

#### Langkah 2: Hapus Baris Data Uji dengan Kondisi yang Persis Sama (DELETE):
Eksekusi penghapusan pada keempat tabel sesi:
```bash
npx wrangler d1 execute kimia-lisensi --remote --command "DELETE FROM listening_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI'; DELETE FROM reading_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI'; DELETE FROM writing_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI'; DELETE FROM speaking_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI';"
```
*(Catatan: Catat jumlah baris yang terhapus dari eksekusi perintah di atas).*

#### Langkah 3: Verifikasi Penghapusan:
Jalankan kembali query SELECT pada Langkah 1 untuk memastikan seluruh tabel sesi mengembalikan 0 baris untuk identitas `UJI-RILIS` & `UJI-PRODUKSI`. Periksa pula dashboard `/ielts/rekap.html` untuk memastikan tabel rekapitulasi guru telah bersih dari entri uji.

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
Kembalikan seluruh commit frontend ke titik jangkar `pre-multi-test`:
```bash
git revert pre-multi-test..HEAD --no-edit
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

---

## 8. Catatan Pasca-Rilis (Template Berita Acara Rilis)

Simpan rekaman eksekusi ini sebagai bukti serah terima operasional rilis:

```markdown
### Berita Acara Rilis Produksi Multi-Tes IELTS
- Tanggal & Waktu Eksekusi : [YYYY-MM-DD HH:MM WIB]
- Pelaksana Rilis          : [Nama Pelaksana]
- D1 Time Travel Bookmark  : [ID Bookmark sebelum migrasi]
- Hash Commit Stabil Lama  : [Hash anchor pre-multi-test]
- Hash Commit Rilis Baru   : [Hash commit v1.4.0-multi-test]

#### Verifikasi Jumlah Baris Database:
| Nama Tabel | Total Sebelum | Total Sesudah | Termigrasi 'test1' | Status |
| :--- | :---: | :---: | :---: | :---: |
| listening_sessions | [ ] | [ ] | [ ] | OK / Selaras |
| reading_sessions   | [ ] | [ ] | [ ] | OK / Selaras |
| writing_sessions   | [ ] | [ ] | [ ] | OK / Selaras |
| speaking_sessions  | [ ] | [ ] | [ ] | OK / Selaras |
| speaking_recordings| [ ] | [ ] | [ ] | OK / Selaras |

#### Hasil Smoke Testing (10 Skenario):
1. SNBT & Kimia Lama Normal        : [ LULUS / GAGAL ]
2. Mock 1 Bebas Token & Audio      : [ LULUS / GAGAL ]
3. Pilihan Tes Multi-Tes (/ielts/) : [ LULUS / GAGAL ]
4. Guard Start Mock 2 (?test=2)    : [ LULUS / GAGAL ] (count_test2 = 0)
5. Blokir Aset Statis (Wajib 403)  : [ LULUS / GAGAL ] (pola & acak tertolak 403)
6. Penolakan API Mock 2 (Wajib 401): [ LULUS / GAGAL ]
7. Rekap Guru & Filter Multi-Tes   : [ LULUS / GAGAL ]
8. Pertahanan Endpoint /admin/*    : [ LULUS / GAGAL ]
9. Trigger Cron Dashboard Cloudflare: [ LULUS / GAGAL ] (0 19 * * *)
10. Cache-Buster v=20261104f Incognito: [ LULUS / GAGAL ]

- Jumlah Baris UJI-RILIS Dihapus   : [ ... baris ]
- Pembersihan Baris UJI-RILIS      : [ SUDAH DIBERSIHKAN ]
- Kesimpulan Rilis                 : [ SUKSES OPERASIONAL / ROLLBACK ]
```
