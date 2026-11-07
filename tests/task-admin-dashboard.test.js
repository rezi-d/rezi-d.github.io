/**
 * =================================================================
 * tests/task-admin-dashboard.test.js — Pengujian Otomatis Dashboard Admin
 * (Tahap C: Rekap Tugas Guru, Ekspor CSV, Purge, & Keamanan Kunci)
 * =================================================================
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Baca berkas rekap-tugas.html
const adminHtml = fs.readFileSync(path.resolve('guru/rekap-tugas.html'), 'utf-8');

// =================================================================
// 1. PENGUJIAN OTENTIKASI & PEMISAHAN KUNCI (X-Rekap-Key)
// =================================================================

test('1.1 Gerbang Otentikasi: Menggunakan header X-Rekap-Key dan modal penutup', () => {
    assert.ok(adminHtml.includes('id="auth-gate-modal"'), 'Modal gerbang login wajib ada');
    assert.ok(adminHtml.includes('input-rekap-key'), 'Input kunci rahasia rekap wajib ada');
    assert.ok(adminHtml.includes("'X-Rekap-Key'"), 'Wajib mengirimkan header otentikasi X-Rekap-Key');
    // Pastikan tidak menggunakan TEACHER_KEY atau ADMIN_KEY di header
    assert.ok(!adminHtml.includes("'TEACHER_KEY'"), 'Dilarang menggunakan header TEACHER_KEY');
    assert.ok(!adminHtml.includes("'ADMIN_KEY'"), 'Dilarang menggunakan header ADMIN_KEY');
});

test('1.2 Keamanan Meta: robots noindex dan nofollow', () => {
    assert.ok(adminHtml.includes('robots" content="noindex, nofollow"'), 'Halaman admin wajib noindex dan nofollow');
});

// =================================================================
// 2. PENGUJIAN MANAJEMEN PERIODE & SIMULASI PURGE AMAN
// =================================================================

test('2.1 Pembuatan Periode: Menampilkan kode akses hanya sekali saat dibuat', () => {
    assert.ok(adminHtml.includes('id="modal-create-period"'), 'Modal buat periode baru wajib ada');
    assert.ok(adminHtml.includes('id="modal-access-code-notice"'), 'Modal pemberitahuan kode akses wajib ada');
    assert.ok(adminHtml.includes('display-new-access-code'), 'Elemen penampil kode akses wajib ada');
    assert.ok(adminHtml.includes('copyAccessCode()'), 'Fitur salin kode akses wajib ada');
});

test('2.2 Pengaman Penghapusan (Purge): Simulasi Dry Run & Konfirmasi Kata "HAPUS"', () => {
    assert.ok(adminHtml.includes('id="modal-purge"'), 'Modal konfirmasi purge wajib ada');
    assert.ok(adminHtml.includes('dry_run: true'), 'Wajib memanggil mode simulasi dry_run terlebih dahulu');
    assert.ok(adminHtml.includes("input-purge-confirm"), 'Input teks konfirmasi wajib ada');
    assert.ok(adminHtml.includes("'HAPUS'"), 'Wajib memvalidasi input kata HAPUS');
    assert.ok(adminHtml.includes('dry_run: false, confirm: true'), 'Hanya mengeksekusi hapus jika confirm=true');
});

// =================================================================
// 3. PENGUJIAN TAMPILAN REKAP & AKSI VERIFIKASI
// =================================================================

test('3.1 Multi-Perspektif: Tersedia tab Per Kelas dan Per Mapel', () => {
    assert.ok(adminHtml.includes('tab-btn-kelas'), 'Tombol tab Rekap Per Kelas wajib ada');
    assert.ok(adminHtml.includes('tab-btn-mapel'), 'Tombol tab Rekap Per Mapel wajib ada');
    assert.ok(adminHtml.includes('switchViewTab'), 'Fungsi perpindahan tab wajib ada');
});

test('3.2 Status Verifikasi: Tiga status resmi (dilaporkan, dikonfirmasi, tidak_ditemukan)', () => {
    assert.ok(adminHtml.includes('value="dilaporkan"'), 'Pilihan status dilaporkan wajib ada');
    assert.ok(adminHtml.includes('value="dikonfirmasi_guru_mapel"'), 'Pilihan status dikonfirmasi wajib ada');
    assert.ok(adminHtml.includes('value="tidak_ditemukan"'), 'Pilihan status tidak ditemukan wajib ada');
    assert.ok(adminHtml.includes('updateItemStatus'), 'Fungsi ubah status per butir wajib ada');
    assert.ok(adminHtml.includes('bulkVerifySubject'), 'Fungsi konfirmasi massal per mapel wajib ada');
});

// =================================================================
// 4. PENGUJIAN NETRALISASI CSV & TAMPILAN CETAK
// =================================================================

test('4.1 Netralisasi CSV Klien: Melindungi karakter formula injection (=, +, -, @, tab, CR)', () => {
    assert.ok(adminHtml.includes('function escapeCsvValue'), 'Fungsi escape CSV di frontend wajib ada');
    assert.ok(adminHtml.includes('/^[=+\\-@\\t\\r]/'), 'Regex pengecekan karakter pemicu formula wajib ada');
    assert.ok(adminHtml.includes("text/csv"), 'MIME type text/csv wajib ada');
});

test('4.2 Cetak Fisik & PDF: Format kop, area tanda tangan, dan pembersihan tombol', () => {
    assert.ok(adminHtml.includes('@media print'), 'CSS cetak wajib didefinisikan');
    assert.ok(adminHtml.includes('no-print'), 'Class no-print menyembunyikan tombol saat cetak');
    assert.ok(adminHtml.includes('print-only'), 'Class print-only untuk kop dan kolom tanda tangan');
    assert.ok(adminHtml.includes('Wali Kelas'), 'Kolom tanda tangan Wali Kelas wajib ada');
    assert.ok(adminHtml.includes('Guru Mata Pelajaran'), 'Kolom tanda tangan Guru Mapel wajib ada');
});
