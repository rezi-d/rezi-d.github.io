# Runbook Rilis Produksi: Infrastruktur Multi-Tes IELTS & Perlindungan Akses

> **PERINGATAN PENTING SEBELUM MEMULAI:**
> Runbook ini disusun sebagai panduan berurutan rilis ke lingkungan produksi. **JANGAN MENJALANKAN DOKUMEN INI TANPA PERSETUJUAN EKSPLISIT DARI PEMILIK PROYEK.**
> Seluruh perintah di bawah ini **belum dijalankan**. Database produksi D1 (`69e3b92a-89af-4d16-8ee6-3d201722ad09`) tetap 100% utuh dan belum dimigrasi.

---

## 1. Prasyarat & Penyiapan Secret Lingkungan (Cloudflare Worker)

Pastikan seluruh secret operasional telah disetel di Cloudflare Worker produksi menggunakan nama variabel berikut (**tanpa mencatat nilai rahasia di berkas kode atau log commit**):

```bash
# Set secret di Cloudflare Worker produksi satu per satu:
npx wrangler secret put TEACHER_KEY
npx wrangler secret put ADMIN_KEY
npx wrangler secret put IP_PEPPER
npx wrangler secret put TOKEN_PREFIX_PEPPER
npx wrangler secret put AUDIO_STREAM_SECRET
```

### Penjelasan Variabel Secret:
- `TEACHER_KEY`: Kunci otentikasi guru untuk mengakses rekapitulasi nilai dan modal penilaian siswa.
- `ADMIN_KEY`: Kunci administratif tingkat tinggi untuk pengelolaan lisensi dan penghapusan data GDPR/UU PDP.
- `IP_PEPPER`: Salt pepper HMAC khusus untuk membuntukan pencatatan alamat IP pada activation audit log.
- `TOKEN_PREFIX_PEPPER`: Salt pepper HMAC untuk masking awalan token lisensi pada rate limiting dan audit log.
- `AUDIO_STREAM_SECRET`: Secret penandatangan token streaming audio privat Speaking (HMAC SHA-256 terikat `recording_id`).

---

## 2. Ekspor Cadangan Database D1 Produksi (Backup Pra-Rilis)

Sebelum mengeksekusi migrasi skema apa pun ke D1 produksi, lakukan pencadangan snapshot data penuh:

```bash
# 1. Masuk ke direktori worker
cd worker

# 2. Ekspor seluruh skema dan baris data produksi ke berkas cadangan lokal
npx wrangler d1 export kimia-snbt-db --remote --output ./backups/prod-backup-$(date +%Y%m%d_%H%M%S).sql

# 3. Verifikasi ukuran berkas cadangan hasil ekspor
ls -lh ./backups/prod-backup-*.sql
```

*Simpan berkas backup ini di tempat yang aman sebagai garansi titik pemulihan (restore point).*

---

## 3. Jalankan Migrasi Skema D1 Produksi (SEBELUM Deploy Kode)

Jalankan berkas migrasi resmi Cloudflare D1 `worker/migrations/0001_add_multi_test_id.sql`. Migrasi ini menambahkan kolom `test_id TEXT NOT NULL DEFAULT 'test1'` pada tabel sesi dan rekap dengan aman (zero data loss):

```bash
# Jalankan migrasi pada database produksi Cloudflare D1
npx wrangler d1 migrations apply kimia-snbt-db --remote
```

### Verifikasi Keberhasilan Migrasi:
```bash
# Periksa jumlah baris tabel produksi untuk memastikan baris data lama tetap utuh
npx wrangler d1 execute kimia-snbt-db --remote --command "SELECT 'listening' AS tbl, COUNT(*) AS total, SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) AS migrasi_test1 FROM listening_sessions UNION ALL SELECT 'reading', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM reading_sessions UNION ALL SELECT 'writing', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM writing_sessions UNION ALL SELECT 'speaking', COUNT(*), SUM(CASE WHEN test_id = 'test1' THEN 1 ELSE 0 END) FROM speaking_sessions;"
```
*Hasil harus menunjukkan seluruh baris lama bermutasi menjadi `test_id = 'test1'` tanpa pengurangan jumlah baris.*

---

## 4. Eksekusi Deploy Kode (Backend & Frontend)

Setelah migrasi database selesai dan diverifikasi:

### a) Deploy Backend Cloudflare Worker:
```bash
cd worker
npm run deploy
```

### b) Deploy Frontend Web:
Dorong perubahan ke branch rilis produksi (`main` / GitHub Pages / Cloudflare Pages):
```bash
cd ..
git status
git push origin main
```

---

## 5. Prosedur Uji Pasca-Deploy (Smoke Testing Produksi)

Lakukan verifikasi operasional langsung pada domain produksi (`https://kimia.ajarkita.my.id`):

| Skenario Pengujian | Langkah Pengujian | Hasil yang Diharapkan |
| :--- | :--- | :--- |
| **1. Mock 1 Bebas Token & Audio** | Buka `/ielts/listening-mock-test.html?test=1`, klik tes suara & mulai sesi. | Berjalan normal, audio Listening Section 1 terputar lancar, zero token required. |
| **2. Pilihan Tes Multi-Tes** | Buka `/ielts/index.html`. Klik tab `Mock Test 1` lalu klik tab `Mock Test 2`. | Tab Mock 1 berlabel "Gratis". Tab Mock 2 berlabel "Segera Hadir" dengan tombol nonaktif dan banner penjelasan. |
| **3. Guard Halaman Start Mock 2** | Buka langsung URL `/ielts/writing-mock-test.html?test=2` (baik login lisensi maupun tidak). | Menampilkan kotak pemberitahuan `"Simulasi Mock Test 2 Segera Hadir"`, form mulai disembunyikan, dan tidak ada baris sesi kosong di D1. |
| **4. Rekap Guru & Filter Multi-Tes** | Akses `/ielts/rekap.html` dengan kunci guru sah (`?key=...`). | Dashboard terbuka normal, kapasitas D1 terpantau, dan filter dropdown tes berfungsi (`Semua`, `Mock 1`, `Mock 2`). |
| **5. Pertahanan Endpoint Admin** | Buka `https://kimia-snbt-api.kimia-ajarkita.workers.dev/admin/list` tanpa header otorisasi. | Wajib ditolak `HTTP 401` / `HTTP 403` Unauthorized secara instan. |

---

## 6. Prosedur Rollback Cepat (Jika Terjadi Kendala)

Jika ditemukan anomali fungsional kritis saat uji asap:

### a) Rollback Kode Cloudflare Worker:
```bash
# 1. Periksa daftar riwayat deployment
cd worker
npx wrangler deployments list

# 2. Kembalikan ke ID deployment versi stabil sebelumnya
npx wrangler rollback <DEPLOYMENT_ID_SEBELUMNYA>
```

### b) Rollback Frontend:
```bash
git revert HEAD --no-edit
git push origin main
```

### c) Pemulihan Database D1 (Hanya Jika Terjadi Kerusakan Data Fatal):
```bash
# Pulihkan dari cadangan yang dibuat pada Langkah 2
npx wrangler d1 execute kimia-snbt-db --remote --file=./backups/prod-backup-<TIMESTAMP>.sql
```
