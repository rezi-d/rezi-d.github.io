/**
 * =================================================================
 * js/task-fab.js — Floating Action Button (FAB) "Lapor Tugas"
 * AjarKita (kimia.ajarkita.my.id)
 * =================================================================
 * Fitur berkala: Tombol mengambang elegan di kanan-bawah.
 * - Memeriksa status periode aktif ke server (di-cache 60 detik)
 * - Otomatis tidak tampil pada halaman ujian/CBT atau saat timer aktif
 * - Menghindari tabrakan dengan tombol mengambang lain (SPU, Back to top)
 * - Memuat modul modal (js/task-modal.js) secara LAZY hanya saat diklik
 */

(function () {
    'use strict';

    // 1. DAFTAR PENGECUALIAN HALAMAN (Exclusion List)
    // Jangan pernah tampil di halaman simulasi, CBT, mock test IELTS, atau admin
    const EXCLUDED_PATH_PATTERNS = [
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
        /laporan(\.html)?$/i // Halaman mandiri laporan sudah menampilkan form langsung
    ];

    // Cek apakah halaman ini dikecualikan
    function isExcludedPage() {
        const currentPath = window.location.pathname.toLowerCase();
        for (const pattern of EXCLUDED_PATH_PATTERNS) {
            if (pattern.test(currentPath)) {
                return true;
            }
        }
        // Cek apakah ada timer ujian aktif di DOM
        if (
            document.querySelector('[data-cbt-timer], #timer, .quiz-timer, #cbtTimer, #speakingTimer, #exam-timer') ||
            window.__CBT_RUNNING === true ||
            window.__EXAM_ACTIVE === true
        ) {
            return true;
        }
        return false;
    }

    // 2. CACHING STATUS PERIODE (60 Detik)
    const STATUS_CACHE_KEY = 'ak_task_period_status_cache';
    const CACHE_TTL_MS = 60 * 1000;

    async function fetchPeriodStatus() {
        try {
            const cached = sessionStorage.getItem(STATUS_CACHE_KEY);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
                    return parsed.data;
                }
            }
        } catch (e) {
            // Abaikan error sessionStorage di lingkungan private/restricted
        }

        try {
            const res = await fetch('/api/task/public/status', {
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) return { ok: false, isOpen: false };
            const data = await res.json();
            try {
                sessionStorage.setItem(STATUS_CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    data: data
                }));
            } catch (e) {}
            return data;
        } catch (err) {
            console.warn('[Task-FAB] Status pelaporan tidak dapat diakses:', err.message);
            return { ok: false, isOpen: false };
        }
    }

    // 3. PENYESUAIAN POSISI & STACKING BUTTON
    function updateFabPosition(fabBtn) {
        if (!fabBtn) return;
        const spuBtn = document.getElementById('btnOpenSpu');
        const backToTopBtn = document.getElementById('btn-back-to-top');

        // Jika tombol Tabel Periodik (SPU) ada di kanan bawah
        if (spuBtn && window.getComputedStyle(spuBtn).display !== 'none') {
            // Letakkan FAB di atas tombol SPU
            fabBtn.style.bottom = 'calc(4.75rem + env(safe-area-inset-bottom, 0px))';
            if (backToTopBtn) {
                backToTopBtn.style.bottom = 'calc(8.5rem + env(safe-area-inset-bottom, 0px))';
            }
        } else {
            // Posisi default kanan-bawah yang lega dan ramah sentuhan
            fabBtn.style.bottom = 'calc(1.25rem + env(safe-area-inset-bottom, 0px))';
            if (backToTopBtn) {
                backToTopBtn.style.bottom = 'calc(5rem + env(safe-area-inset-bottom, 0px))';
            }
        }
    }

    // 4. MEMUAT SKRIP MODAL SECARA LAZY
    let isModalScriptLoading = false;

    function lazyLoadTaskModal(period, callback) {
        if (window.TaskReportingModal) {
            if (typeof callback === 'function') callback();
            return;
        }
        if (isModalScriptLoading) {
            const checkInterval = setInterval(() => {
                if (window.TaskReportingModal) {
                    clearInterval(checkInterval);
                    if (typeof callback === 'function') callback();
                }
            }, 50);
            return;
        }

        isModalScriptLoading = true;
        const script = document.createElement('script');
        script.src = '/js/task-modal.js';
        script.onload = () => {
            isModalScriptLoading = false;
            if (typeof callback === 'function') callback();
        };
        script.onerror = (e) => {
            isModalScriptLoading = false;
            console.error('[Task-FAB] Gagal memuat komponen form:', e);
            alert('Gagal memuat formulir pelaporan tugas. Silakan periksa koneksi internet Anda atau coba lagi.');
        };
        document.body.appendChild(script);
    }

    // 5. INISIALISASI UTAMA FAB
    async function initTaskFab() {
        if (isExcludedPage()) return;
        if (document.getElementById('btn-task-reporting-fab')) return;

        const statusRes = await fetchPeriodStatus();
        if (!statusRes || !statusRes.ok || !statusRes.isOpen || !statusRes.period) {
            // Periode tidak dibuka atau gagal dimuat -> jangan tampilkan tombol
            return;
        }

        const period = statusRes.period;

        // Buat Tombol FAB
        const fabBtn = document.createElement('button');
        fabBtn.id = 'btn-task-reporting-fab';
        fabBtn.type = 'button';
        fabBtn.setAttribute('aria-label', `Buka Formulir Pelaporan Tugas: ${period.name}`);
        fabBtn.setAttribute('title', 'Lapor Tugas Susulan');
        
        // Inline Styles untuk memastikan ketahanan visual tanpa bergantung Tailwind saja
        fabBtn.className = 'task-reporting-fab-btn';
        fabBtn.innerHTML = `
            <span class="task-fab-icon" aria-hidden="true">📋</span>
            <span class="task-fab-label">Lapor Tugas</span>
            <span class="task-fab-pulse" aria-hidden="true"></span>
        `;

        // Style pendukung
        if (!document.getElementById('task-fab-style')) {
            const style = document.createElement('style');
            style.id = 'task-fab-style';
            style.textContent = `
                .task-reporting-fab-btn {
                    position: fixed;
                    right: 1.25rem;
                    z-index: 45;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    min-height: 48px;
                    padding: 0.625rem 1.125rem;
                    border-radius: 9999px;
                    background: #0f172a;
                    color: #ffffff;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    letter-spacing: -0.01em;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, box-shadow 0.2s;
                    touch-action: manipulation;
                    -webkit-tap-highlight-color: transparent;
                }
                .task-reporting-fab-btn:hover {
                    background: #1e293b;
                    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.35);
                    transform: translateY(-2px);
                }
                .task-reporting-fab-btn:active {
                    transform: scale(0.96) translateY(0);
                }
                .task-reporting-fab-btn:focus-visible {
                    outline: 2px solid #0071e3;
                    outline-offset: 3px;
                }
                .task-fab-icon {
                    font-size: 1.125rem;
                    line-height: 1;
                }
                .task-fab-label {
                    white-space: nowrap;
                }
                .task-fab-pulse {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background-color: #10b981;
                    box-shadow: 0 0 0 2px #0f172a;
                }
                @media (max-width: 480px) {
                    .task-reporting-fab-btn {
                        padding: 0.625rem 1rem;
                        font-size: 0.8125rem;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Hitung posisi aman
        updateFabPosition(fabBtn);
        window.addEventListener('resize', () => updateFabPosition(fabBtn));

        // Handler Klik: Lazy load modal dan buka
        fabBtn.addEventListener('click', () => {
            lazyLoadTaskModal(period, () => {
                if (window.TaskReportingModal && typeof window.TaskReportingModal.open === 'function') {
                    window.TaskReportingModal.open(period, fabBtn);
                }
            });
        });

        document.body.appendChild(fabBtn);
    }

    // Eksekusi saat DOM siap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTaskFab);
    } else {
        initTaskFab();
    }

    // Expose helper untuk pengujian
    window.__AK_TASK_FAB = {
        isExcludedPage,
        fetchPeriodStatus,
        initTaskFab,
        EXCLUDED_PATH_PATTERNS
    };
})();
