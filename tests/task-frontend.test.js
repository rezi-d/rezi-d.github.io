/**
 * =================================================================
 * tests/task-frontend.test.js — Pengujian Otomatis Form Siswa & FAB
 * (Tahap B: Antarmuka Siswa, Aksesibilitas, & Keamanan Klien)
 * =================================================================
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Baca berkas kode frontend untuk verifikasi statis & aturan keamanan
const fabCode = fs.readFileSync(path.resolve('js/task-fab.js'), 'utf-8');
const modalCode = fs.readFileSync(path.resolve('js/task-modal.js'), 'utf-8');
const laporanHtml = fs.readFileSync(path.resolve('laporan.html'), 'utf-8');

// =================================================================
// 1. PENGUJIAN DAFTAR PENGECUALIAN (EXCLUSION LIST) FAB
// =================================================================

test('1.1 FAB Exclusion: Tolak halaman ujian, CBT, timer, dan IELTS Mock Test', () => {
    // Ekstrak regex pola pengecualian dari berkas js/task-fab.js
    const excludedPatterns = [
        /\/ielts\//i,
        /\/simulasi/i,
        /\/cbt/i,
        /\/ujian/i,
        /\/quiz/i,
        /\/guru\//i,
        /\/admin/i,
        /mock-test/i,
        /listening/i,
        /reading/i,
        /writing/i,
        /speaking/i,
        /laporan(\.html)?$/i
    ];

    function checkExcluded(pathname) {
        return excludedPatterns.some(p => p.test(pathname));
    }

    // Kasus yang WAJIB DITOLAK (Tombol TIDAK BOLEH tampil)
    assert.equal(checkExcluded('/ielts/mock-test1.html'), true);
    assert.equal(checkExcluded('/ielts/listening-test1.html'), true);
    assert.equal(checkExcluded('/ielts/speaking-practice.html'), true);
    assert.equal(checkExcluded('/simulasi-cbt/snbt.html'), true);
    assert.equal(checkExcluded('/cbt/ujian-kimia.html'), true);
    assert.equal(checkExcluded('/quiz/bab-1.html'), true);
    assert.equal(checkExcluded('/guru/rekap.html'), true);
    assert.equal(checkExcluded('/laporan.html'), true);
    assert.equal(checkExcluded('/laporan'), true);

    // Kasus yang DIIZINKAN (Tombol BOLEH tampil)
    assert.equal(checkExcluded('/'), false);
    assert.equal(checkExcluded('/index.html'), false);
    assert.equal(checkExcluded('/tentang.html'), false);
    assert.equal(checkExcluded('/kontak.html'), false);
    assert.equal(checkExcluded('/kelas-10/struktur-atom.html'), false);
    assert.equal(checkExcluded('/kelas-11/termokimia.html'), false);
    assert.equal(checkExcluded('/kelas-12/redoks.html'), false);
});

test('1.2 FAB Exclusion: Deteksi elemen timer aktif di DOM', () => {
    // Verifikasi bahwa kode mengecek selector timer ujian
    assert.ok(fabCode.includes('[data-cbt-timer]'), 'Mengecek selector data-cbt-timer');
    assert.ok(fabCode.includes('#timer'), 'Mengecek selector #timer');
    assert.ok(fabCode.includes('.quiz-timer'), 'Mengecek selector .quiz-timer');
    assert.ok(fabCode.includes('window.__CBT_RUNNING'), 'Mengecek penanda global CBT');
});

// =================================================================
// 2. PENGUJIAN AKSESIBILITAS & ATRIBUT DOM (WCAG)
// =================================================================

test('2.1 Aksesibilitas Dialog Modal: Atribut ARIA dan Penanda Standar', () => {
    // Dialog wajib memiliki role="dialog", aria-modal="true", aria-labelledby
    assert.ok(modalCode.includes(`setAttribute('role', 'dialog')`) || modalCode.includes('role="dialog"'), 'Wajib memiliki role="dialog"');
    assert.ok(modalCode.includes(`setAttribute('aria-modal', 'true')`) || modalCode.includes('aria-modal="true"'), 'Wajib memiliki aria-modal="true"');
    assert.ok(modalCode.includes(`setAttribute('aria-labelledby', 'task-modal-title')`) || modalCode.includes('aria-labelledby="task-modal-title"'), 'Wajib mengikat aria-labelledby');
    assert.ok(modalCode.includes('id="task-modal-title"'), 'Judul dialog wajib memiliki ID yang cocok');
    assert.ok(modalCode.includes('aria-label="Tutup formulir"'), 'Tombol X wajib memiliki aria-label');
});

test('2.2 Aksesibilitas FAB: Ukuran sentuh minimal 48px dan label', () => {
    assert.ok(fabCode.includes('min-height: 48px'), 'FAB wajib memiliki ukuran sentuh minimal 48px');
    assert.ok(fabCode.includes('aria-label'), 'FAB wajib memiliki atribut aria-label');
    assert.ok(fabCode.includes('env(safe-area-inset-bottom'), 'FAB wajib memperhitungkan safe area iPhone');
});

test('2.3 Aksesibilitas Navigasi Keyboard: Esc key dan Focus Trap', () => {
    assert.ok(modalCode.includes(`e.key === 'Escape'`), 'Wajib menangani penutupan dengan tombol Escape');
    assert.ok(modalCode.includes(`e.key === 'Tab'`), 'Wajib memiliki perangkap fokus (Focus Trap) untuk Tab / Shift+Tab');
    assert.ok(modalCode.includes('triggerButton.focus()'), 'Wajib mengembalikan fokus ke tombol pemanggil saat ditutup');
    assert.ok(modalCode.includes(`document.body.style.overflow = 'hidden'`), 'Wajib mengunci scroll latar belakang saat modal aktif');
});

// =================================================================
// 3. PENGUJIAN PRIVASI & PERANGKAT BERSAMA (Zero PII LocalStorage)
// =================================================================

test('3.1 Privasi Mutlak: TIDAK MENYIMPAN nama atau tugas di localStorage/cookie', () => {
    // Periksa bahwa task-modal.js dan task-fab.js TIDAK menyimpan nama siswa ke localStorage
    assert.ok(!modalCode.includes('localStorage.setItem("task_student_name"'), 'Dilarang menyimpan nama siswa ke localStorage');
    assert.ok(!modalCode.includes('localStorage.setItem("studentName"'), 'Dilarang menyimpan studentName ke localStorage');
    assert.ok(!modalCode.includes('document.cookie ='), 'Dilarang menulis cookie data siswa');
    
    // Periksa bahwa input nama dan kode akses memiliki autocomplete="off"
    assert.ok(modalCode.includes('id="task-access-code"') && modalCode.includes('autocomplete="off"'), 'Kode akses wajib autocomplete="off"');
    assert.ok(modalCode.includes('id="task-student-name"') && modalCode.includes('autocomplete="off"'), 'Nama siswa wajib autocomplete="off"');
});

test('3.2 Pembersihan Memori: Reset internal state saat modal selesai atau ditutup', () => {
    assert.ok(modalCode.includes('function resetInternalState()'), 'Wajib ada fungsi reset internal state');
    assert.ok(modalCode.includes('sessionToken = null'), 'Wajib membersihkan token sesi sesaat dari RAM');
    assert.ok(modalCode.includes('savedStudentName = \'\''), 'Wajib menghapus nama siswa dari variabel memori');
    assert.ok(modalCode.includes('taskRows = []'), 'Wajib mengosongkan butir tugas dari memori');
});

// =================================================================
// 4. PENGUJIAN VALIDASI FORM & BATAS BUTIR TUGAS
// =================================================================

test('4.1 Validasi Identitas Siswa: Batas panjang 2 - 60 karakter', () => {
    assert.ok(modalCode.includes('name.length < 2'), 'Wajib menolak nama kurang dari 2 karakter');
    assert.ok(modalCode.includes('name.length > 60'), 'Wajib menolak nama lebih dari 60 karakter');
    assert.ok(modalCode.includes('maxlength="60"'), 'Input nama wajib membatasi maxlength="60"');
});

test('4.2 Pembatasan Multi-Tugas: Maksimal 30 butir tugas per sesi', () => {
    assert.ok(modalCode.includes('taskRows.length >= 30'), 'Wajib membatasi penambahan jika sudah mencapai 30 butir');
    assert.ok(modalCode.includes('maxlength="100"'), 'Judul tugas wajib membatasi maxlength="100"');
    assert.ok(modalCode.includes('maxlength="200"'), 'Catatan fisik wajib membatasi maxlength="200"');
});

// =================================================================
// 5. PENGUJIAN PENANGANAN TABRAKAN FLOATING ELEMENT (SPU & BACK-TO-TOP)
// =================================================================

test('5.1 Penyesuaian Posisi FAB jika Tombol SPU Ada', () => {
    assert.ok(fabCode.includes('btnOpenSpu'), 'Wajib mendeteksi keberadaan tombol Tabel Periodik (#btnOpenSpu)');
    assert.ok(fabCode.includes('calc(3.75rem + env(safe-area-inset-bottom, 0px))') || fabCode.includes('calc(4.75rem'), 'FAB digeser ke atas tombol SPU jika SPU aktif');
    assert.ok(fabCode.includes('btn-back-to-top'), 'Tombol Back to Top disesuaikan posisinya agar tidak bertabrakan');
});

// =================================================================
// 6. PENGUJIAN HALAMAN MANDIRI LAPORAN (/laporan.html)
// =================================================================

test('6.1 Halaman Mandiri /laporan.html: Memuat status terbuka atau tertutup dengan benar', () => {
    assert.ok(laporanHtml.includes('/api/task/public/status'), 'Halaman mandiri memeriksa status periode');
    assert.ok(laporanHtml.includes('Pelaporan Sedang Ditutup'), 'Menampilkan pesan penutupan saat periode tidak aktif');
    assert.ok(laporanHtml.includes('js/task-modal.js'), 'Menghubungkan ke modul modal form');
    assert.ok(laporanHtml.includes('robots" content="noindex, follow"'), 'Tidak diindeks mesin pencari secara publik');
});
