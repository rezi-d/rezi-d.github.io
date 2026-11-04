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
> Frontend situs dan folder `worker/` berada di dalam repositori GitHub Pages (`rezi-d/rezi-d.github.io`) yang berstatus **publik** (dapat dilihat/diakses bebas).
> - Seluruh konten premium (soal ujian, kunci jawaban, audio listening, dan transkrip untuk Mock 2 ke atas) **DILARANG KERAS DI-COMMIT KE DALAM REPOSITORI PUBLIK INI**.
> - Sebelum konten Mock 2 ditambahkan di masa mendatang, seluruh aset konten premium tersebut **wajib disimpan di media penyimpanan privat di luar repositori publik** (misalnya Cloudflare R2 privat, storage bucket terenkripsi, atau disajikan terproteksi melalui Worker endpoint dengan otentikasi ketat). Jangan sekali-kali menaruh berkas master JSON atau audio MP3 Mock 2 di folder publik frontend.

### Urutan Eksekusi Deploy:

#### Langkah 5.1: Buat Anchor Tag di Commit Stabil Terakhir (SEBELUM Langkah Rilis)
*(Wajib dijalankan dari **root repositori** — ketik `cd ..` bila sebelumnya masih berada di dalam direktori `worker/`)*

Sebelum melakukan pengujian rilis, commit, atau deploy apa pun, buat tag pada commit stabil terakhir sebagai jangkar rollback yang presisi:
```bash
# Pastikan berada di root repositori:
pwd

# Periksa hash commit stabil terakhir
git log -1 --format="%h %s"

# Buat dan dorong anchor tag pre-multi-test
git tag pre-multi-test <COMMIT_STABIL_TERAKHIR>
git push origin pre-multi-test
```

#### Langkah 5.2: Jalankan Seluruh Suite Pengujian Otomatis (Wajib Lulus ≥ 215)
*(Wajib dijalankan dari **root repositori**)*

Jalankan pengujian regresi dan integrasi multi-tes:
```bash
# Pastikan berada di root repositori:
node --test tests/*.test.js
```
*Syarat Mutlak: Seluruh rangkaian tes (**wajib lulus ≥ 215 tes** dari 30 berkas tes) tanpa ada kegagalan sama sekali (0 fails). Jika ada satu pun tes yang gagal, rilis DIBATALKAN seketika.*

#### Langkah 5.3: Audit Bebas Secret & Periksa Status Git
*(Wajib dijalankan dari **root repositori**)*

Periksa status dan diff repositori untuk memastikan kebersihan kode:
```bash
git status
git diff
```
*Pastikan tidak ada kunci rahasia (API key, secret), token autentik, maupun file cadangan database SQL (`backups/*.sql`) yang terbuka.*

#### Langkah 5.4: Verifikasi `.gitignore`, `git add` Terseleksi, & Commit Rilis
*(Wajib dijalankan dari **root repositori**)*

> 🔒 **PERINGATAN KERAHASIAAN DOKUMEN RUNBOOK & DETAIL OPERASIONAL:**
> Berkas `docs/RILIS-PRODUKSI.md` memuat identifier database Cloudflare D1, URL endpoint administratif, dan rincian arsitektur operasional. **DILARANG MENYERTAKAN (`git add`) `docs/RILIS-PRODUKSI.md` MAUPUN BERKAS LAPORAN/PDF OPERASIONAL KE DALAM AREA STAGING GIT.** Hanya berkas kode aplikasi dan tes yang boleh di-commit.

Lakukan pemeriksaan aturan `.gitignore` sebelum melakukan staging:
```bash
# 1. Pastikan berkas rahasia lokal dan build artifacts benar-benar ter-ignore:
git check-ignore -v worker/.dev.vars worker/.wrangler worker/node_modules worker/backups
# (Semua path di atas WAJIB menghasilkan baris output konfirmasi rule .gitignore yang cocok)

# 2. Tambahkan HANYA berkas kode fungsional, konfigurasi publik, dan berkas pengujian:
#    CATATAN: Jangan gunakan 'git add docs/' atau 'git add .'!
git add .gitignore ielts/ worker/src/ worker/migrations/ worker/wrangler.jsonc worker/package.json tests/

# 3. Periksa secara ketat daftar berkas yang masuk ke area staging (staging area):
git diff --cached --stat
# (PASTIKAN TIDAK ADA docs/RILIS-PRODUKSI.md, file .sql cadangan, berkas secret, atau PDF operasional pada daftar ini!)

# 4. Buat commit rilis produksi:
git commit -m "feat(release): rilis infrastruktur multi-tes IELTS v1.4.0-multi-test"
```

#### Langkah 5.5: Deploy Backend Cloudflare Worker
Deploy Cloudflare Worker terlebih dahulu dari folder `worker/`:
```bash
cd worker
npm run deploy
```
*Pastikan output deployment menunjukkan status `Success`.*

> 💡 **MENGAPA WORKER DIDEPLOY LEBIH DULU DARI FRONTEND?**
> Worker versi baru bersifat **kompatibel ke belakang (backward-compatible)** dengan frontend lama. Worker baru secara otomatis menganggap setiap request tanpa parameter `test` sebagai `test1`, dan skema database D1 telah disiapkan pada Langkah 4.
> Sebaliknya, jika frontend baru dideploy lebih dahulu, pengguna yang membuka halaman baru bisa mengirim parameter multi-tes (`test=2`) ke Worker lama yang belum mengenali rute, validasi, atau normalisasi multi-tes, sehingga berisiko menimbulkan error 400/500 bagi pengguna aktif.

#### Langkah 5.5b: Verifikasi Uji Asap Cepat Backend (Smoke Test 5, 6, dan 8) SEBELUM Push Frontend
Segera setelah deploy Worker berhasil, **SEBELUM** mendorong perubahan frontend ke GitHub Pages, jalankan 3 uji gerbang backend secara langsung via terminal:

1. **Uji Asap 5 (Pencegatan Aset Master Premium):**
   ```bash
   curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/test2-master.json
   curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/xyz-master.json
   ```
   *Kriteria: Kedua URL WAJIB ditolak dengan status `HTTP/1.1 403 Forbidden`.*

2. **Uji Asap 6 (Penolakan API Mock 2 Tanpa Lisensi):**
   ```bash
   curl -i -X POST https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/start \
     -H "Content-Type: application/json" \
     -d '{"testId":"test2","nama":"UJI-RILIS","kelas":"UJI-PRODUKSI"}'
   ```
   *Kriteria: WAJIB ditolak dengan status `HTTP/1.1 401 Unauthorized` dan JSON `{"ok":false,"reason":"token_required"}`.*

3. **Uji Asap 8 (Pertahanan Endpoint Administratif):**
   ```bash
   curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/admin/list
   ```
   *Kriteria: WAJIB ditolak dengan status `HTTP/1.1 401 Unauthorized` atau `403 Forbidden`.*

> 🛑 **GERBANG KEAMANAN MUTLAK (SECURITY GATE):**
> Jika SALAH SATU dari ketiga pengujian di atas GAGAL:
> 1. **JANGAN PUSH FRONTEND** ke GitHub Pages (`git push origin main --tags` DIBATALKAN).
> 2. **Lakukan Rollback Worker Seketika** ke deployment versi stabil sebelumnya:
>    ```bash
>    npx wrangler rollback <DEPLOYMENT_ID_SEBELUMNYA>
>    ```
> 3. Hentikan proses rilis dan laporkan anomali kepada pemilik sistem untuk investigasi.
> 
> Lanjutkan ke Langkah 5.6 **HANYA JIKA** ketiga uji asap backend di atas LULUS 100%.

#### Langkah 5.6: Buat Tag Rilis dan Push Frontend ke GitHub Pages
Kembali ke root repositori, buat tag rilis versi produksi, dan dorong ke GitHub:
```bash
cd ..

# Buat tag rilis versi produksi
git tag -a v1.4.0-multi-test -m "Rilis Infrastruktur Multi-Tes IELTS Tahap 4 (Ready for Content)"

# Dorong commit rilis dan tag ke GitHub Pages
git push origin main --tags
```

#### Langkah 5.7: Tunggu Proses Build & Deploy GitHub Pages Selesai
Setelah `git push origin main --tags` berhasil:
1. Buka browser dan arahkan ke: **GitHub Repository > Tab Actions** (`https://github.com/rezi-d/rezi-d.github.io/actions`).
2. Pantau jalannya workflow deployment GitHub Pages (`pages-build-deployment`).
3. Tunggu hingga proses build selesai bertanda centang hijau (**Success**). Estimasi durasi build: **±1 – 3 menit**.
4. **JANGAN MEMULAI smoke test frontend** sebelum GitHub Pages selesai merilis kode terbaru, untuk mencegah pengujian pada aset statis usang yang belum terbarui.

---

## 6. Prosedur Uji Asap Pasca-Deploy (Smoke Testing Produksi)

Lakukan verifikasi operasional langsung pada domain produksi (`https://kimia.ajarkita.my.id`) setelah GitHub Pages selesai mendeploy.
> 💡 **Ketentuan Identitas Uji:**
> Gunakan identitas nama peserta **`UJI-RILIS`** dan kelas **`UJI-PRODUKSI`** untuk seluruh sesi pengerjaan uji agar mudah diidentifikasi dan dibersihkan dari rekapitulasi.

| Skenario Pengujian | Langkah Pengujian | Kriteria Lulus |
| :--- | :--- | :--- |
| **1. SNBT & Kimia Lama Normal** | Buka halaman materi Kimia dan simulasi UTBK-SNBT (`/snbt/`). Cukup periksa fungsi halaman materi, navigasi, dan bank soal tanpa melakukan aktivasi token pelanggan (agar tidak memakan kuota slot perangkat pelanggan). Jika ingin menguji otentikasi token, gunakan token lisensi uji khusus tim developer. | Halaman Kimia dan SNBT terbuka normal, navigasi materi aktif, bank soal SNBT berfungsi lancar, dan otentikasi SNBT tidak terganggu oleh perubahan infrastruktur IELTS. |
| **2. Mock 1 Bebas Token & Audio** | Buka `/ielts/listening-mock-test.html?test=1`. Klik "Putar Tes Suara", isi nama `UJI-RILIS` & mulai sesi. | Berjalan normal tanpa token, audio Section 1 berputar lancar tanpa error network. |
| **3. Pilihan Tes Multi-Tes** | Buka `/ielts/index.html`. Klik tab `Mock Test 1` lalu klik tab `Mock Test 2`. | Tab Mock 1 berlabel "Gratis". Tab Mock 2 berlabel "Segera Hadir" dengan kartu tes nonaktif. |
| **4. Guard Halaman Start Mock 2** | 1. Buka URL langsung `/ielts/writing-mock-test.html?test=2` (coba dengan login lisensi maupun tanpa login).<br/>2. Jalankan query D1 untuk verifikasi tidak adanya baris phantom:<br/>`npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, COUNT(*) AS count_test2 FROM listening_sessions WHERE test_id = 'test2' UNION ALL SELECT 'reading_sessions', COUNT(*) FROM reading_sessions WHERE test_id = 'test2' UNION ALL SELECT 'writing_sessions', COUNT(*) FROM writing_sessions WHERE test_id = 'test2' UNION ALL SELECT 'speaking_sessions', COUNT(*) FROM speaking_sessions WHERE test_id = 'test2';"` | Muncul kotak pemberitahuan `"Simulasi Mock Test 2 Segera Hadir"`, form submit disembunyikan, dan query database menghasilkan `count_test2 = 0` pada seluruh tabel sesi. |
| **5. Blokir Aset Statis Premium (Filter Pola Nama)** | 1. Buka URL pola master terduga: `curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/test2-master.json`<br/>2. Buka URL pola master acak: `curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/xyz-master.json` | **Kedua URL wajib ditolak `HTTP 403 Forbidden` (BUKAN `404 Not Found`).**<br/>*(Catatan Penting: Respons 403 bukan bukti bahwa berkas fisik ada di server. Filter keamanan Worker assets `run_worker_first: true` bekerja berdasarkan pencocokan pola nama berkas privat seperti `/*-master.json` atau `/premium/*`. Uji dengan path acak `/listening/xyz-master.json` membuktikan bahwa pencegatan pola aktif terlepas dari keberadaan berkas).* |
| **6. Penolakan API Mock 2 Tanpa Token** | Jalankan via curl: `curl -i -X POST https://kimia-snbt-api.kimia-ajarkita.workers.dev/listening/start -H "Content-Type: application/json" -d '{"testId":"test2","nama":"UJI-RILIS","kelas":"UJI-PRODUKSI"}'`. | Wajib ditolak `HTTP 401 Unauthorized` dengan JSON `{"ok":false,"reason":"token_required"}`. |
| **7. Rekap Guru & Filter Multi-Tes** | Akses `/ielts/rekap.html` dengan kunci guru sah (`?key=...`). | Dashboard terbuka, widget pemantauan kapasitas D1 tampil, dan filter dropdown tes (`Semua`, `Mock 1`, `Mock 2`) berfungsi normal. |
| **8. Pertahanan Endpoint Admin** | 1. Akses `https://kimia-snbt-api.kimia-ajarkita.workers.dev/admin/list` tanpa header otorisasi.<br/>2. *(Opsional uji otorisasi)* Masukkan kunci admin secara aman tanpa pencatatan terminal:<br/>`read -s ADMIN_KEY`<br/>`curl -i https://kimia-snbt-api.kimia-ajarkita.workers.dev/admin/list -H "Authorization: Bearer $ADMIN_KEY"`<br/>`unset ADMIN_KEY` | Akses tanpa kunci wajib ditolak `HTTP 401`/`HTTP 403` secara instan. Akses dengan `$ADMIN_KEY` mengembalikan data JSON lisensi dengan aman, dan variabel lingkungan langsung dibersihkan. |
| **9. Verifikasi Trigger Cron** | Buka **Cloudflare Dashboard > Workers & Pages > `kimia-snbt-api` > Settings > Triggers**. | Jadwal cron retensi berkala `0 19 * * *` (setiap hari pukul 02:00 WIB / 19:00 UTC) terdaftar aktif dalam daftar Cron Triggers. |
| **10. Verifikasi Cache-Buster di Incognito** | Buka tab **Incognito / Private Window**, akses `/ielts/writing-mock-test.html`, buka inspect DevTools Network tab. | Berkas skrip termuat dengan query string `?v=20261104f` tanpa tersangkut cache usang. |

---

### Pembersihan Data Uji `UJI-RILIS` Pasca Smoke Test:

> ⚠️ **CATATAN INVESTIGASI ENDPOINT `/admin/delete-customer`:**
> Endpoint `/admin/delete-customer` dirancang khusus untuk penghapusan lisensi pelanggan berdasarkan identifier lisensi (`id`, `wa`, atau `token`). Endpoint tersebut **TIDAK MENDUKUNG** pencarian atau penghapusan berdasarkan nama/kelas siswa sesi ad-hoc tanpa lisensi. Oleh karena itu, penghapusan data uji `UJI-RILIS` dilakukan langsung melalui perintah query Cloudflare D1.

#### Langkah 1: Periksa Skema Kolom dari `worker/schema.sql` (Verifikasi Wajib Sebelum Query)
Sebelum mengeksekusi perintah SQL di D1 produksi, periksa definisi tabel di `worker/schema.sql` untuk memastikan nama kolom valid:
```bash
grep -E "nama_peserta|kelas|session_id" worker/schema.sql
```
*Pastikan bahwa:*
- Tabel `listening_sessions`, `reading_sessions`, `writing_sessions`, dan `speaking_sessions` memiliki kolom `id`, `nama_peserta`, dan `kelas`.
- Tabel `speaking_recordings` memiliki kolom `id` dan `session_id`.

> 🛑 **PROTOKOL KEAMANAN SKEMA:** Jika nama kolom pada `worker/schema.sql` tidak cocok dengan parameter query di bawah ini, **BERHENTI SEGERA** dan jangan jalankan perintah DELETE. Periksa kembali struktur tabel sebelum melanjutkan.

#### Langkah 2: Tampilkan Baris Data Sesi Uji & Rekaman yang Terkait (SELECT):
Jalankan query untuk memeriksa baris data sesi yang dibuat oleh pengujian:
```bash
# Tampilkan baris data sesi pada keempat modul:
npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'listening_sessions' AS tbl, id, nama_peserta, kelas, started_at FROM listening_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI' UNION ALL SELECT 'reading_sessions', id, nama_peserta, kelas, started_at FROM reading_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI' UNION ALL SELECT 'writing_sessions', id, nama_peserta, kelas, started_at FROM writing_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI' UNION ALL SELECT 'speaking_sessions', id, nama_peserta, kelas, started_at FROM speaking_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI';"

# Tampilkan baris rekaman audio speaking terkait (jika ada):
npx wrangler d1 execute kimia-lisensi --remote --command "SELECT 'speaking_recordings' AS tbl, id, session_id, uploaded_at FROM speaking_recordings WHERE session_id IN (SELECT id FROM speaking_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI');"
```
*Catat ID sesi dan rekaman yang ditemukan.*

#### Langkah 3: Hapus Baris Data Uji Secara Berurutan (DELETE):
Hapus terlebih dahulu data rekaman anak (`speaking_recordings`) via relasi `session_id`, kemudian hapus data sesi induk pada keempat tabel:
```bash
# 1. Hapus rekaman audio speaking yang terikat dengan sesi UJI-RILIS:
npx wrangler d1 execute kimia-lisensi --remote --command "DELETE FROM speaking_recordings WHERE session_id IN (SELECT id FROM speaking_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI');"

# 2. Hapus sesi pengerjaan pada keempat tabel sesi:
npx wrangler d1 execute kimia-lisensi --remote --command "DELETE FROM listening_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI'; DELETE FROM reading_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI'; DELETE FROM writing_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI'; DELETE FROM speaking_sessions WHERE nama_peserta = 'UJI-RILIS' AND kelas = 'UJI-PRODUKSI';"
```
*(Catatan: Catat jumlah baris yang terhapus pada masing-masing tabel).*

#### Langkah 4: Verifikasi Penghapusan:
Jalankan kembali kedua query SELECT pada Langkah 2 untuk memastikan seluruh tabel sesi dan tabel `speaking_recordings` mengembalikan 0 baris untuk data uji `UJI-RILIS`. Periksa pula dashboard `/ielts/rekap.html` untuk memastikan tabel rekapitulasi guru telah bersih dari entri uji.

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

- Jumlah Baris UJI-RILIS Dihapus   : [ ... baris sesi, ... rekaman ]
- Pembersihan Baris UJI-RILIS      : [ SUDAH DIBERSIHKAN ]
- Kesimpulan Rilis                 : [ SUKSES OPERASIONAL / ROLLBACK ]
```
