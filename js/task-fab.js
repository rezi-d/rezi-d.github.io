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
            if (!res.ok) throw new Error(`Status ${res.status}`);
            const data = await res.json();
            try {
                sessionStorage.setItem(STATUS_CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    data: data
                }));
            } catch (e) {}
            return data;
        } catch (err) {
            // Pratinjau Otomatis di Lingkungan Lokal (127.0.0.1 / localhost / file://)
            // Memungkinkan pengujian antarmuka langsung tanpa backend Worker lokal
            const isLocalDev = window.location.hostname === 'localhost' || 
                               window.location.hostname === '127.0.0.1' || 
                               window.location.protocol === 'file:' ||
                               window.location.search.includes('preview_task=1');
            if (isLocalDev) {
                return {
                    ok: true,
                    isOpen: true,
                    period: {
                        id: 'period_preview_demo',
                        name: 'Pelaporan Tugas Susulan Semester Ganjil',
                        startsAt: Date.now() - 3600000,
                        endsAt: Date.now() + (7 * 86400000),
                        classes: ['X Putra', 'X Putri', 'XI IPA Putra', 'XI IPA Putri', 'XII IPA Putra', 'XII IPA Putri', 'XII IPS Putri'],
                        subjects: ['Kimia', 'Fisika', 'Biologi', 'Matematika']
                    }
                };
            }
            return { ok: false, isOpen: false };
        }
    }

    // 3. PENYESUAIAN POSISI & STACKING BUTTON
    function updateFabPosition(fabBtn) {
        if (!fabBtn) return;
        const spuBtn = document.getElementById('btnOpenSpu');
        const spuPlaceholder = document.getElementById('spu-placeholder');
        const backToTopBtn = document.getElementById('btn-back-to-top');

        // Tombol SPU terdeteksi langsung atau sedang dalam proses muat di spu-placeholder
        const hasSpu = (spuBtn && window.getComputedStyle(spuBtn).display !== 'none') || (spuPlaceholder !== null);

        if (hasSpu) {
            // Letakkan FAB tepat di atas tombol SPU dengan jarak selaras dan rapat (3.75rem = 60px)
            fabBtn.style.bottom = 'calc(3.75rem + env(safe-area-inset-bottom, 0px))';
            if (backToTopBtn) {
                backToTopBtn.style.bottom = 'calc(6.75rem + env(safe-area-inset-bottom, 0px))';
            }
        } else {
            // Posisi default kanan-bawah yang selaras dengan tombol SPU
            fabBtn.style.bottom = 'calc(1rem + env(safe-area-inset-bottom, 0px))';
            if (backToTopBtn) {
                backToTopBtn.style.bottom = 'calc(4.5rem + env(safe-area-inset-bottom, 0px))';
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
                    right: 1rem;
                    z-index: 45;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    background: rgba(15, 23, 42, 0.9);
                    color: #ffffff;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.025em;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                    touch-action: manipulation;
                    -webkit-tap-highlight-color: transparent;
                }
                .task-reporting-fab-btn:hover {
                    background: #000000;
                    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
                }
                .task-reporting-fab-btn:active {
                    transform: scale(0.95);
                }
                .task-reporting-fab-btn:focus-visible {
                    outline: 2px solid #0071e3;
                    outline-offset: 2px;
                }
                /* Target sentuh minimal aksesibilitas (min-height: 48px) */
                .task-reporting-fab-btn::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    min-height: 48px;
                    min-width: 48px;
                    width: 100%;
                    height: 100%;
                }
                .task-fab-icon {
                    font-size: 1rem;
                    line-height: 1;
                }
                .task-fab-label {
                    white-space: nowrap;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.025em;
                }
                .task-fab-pulse {
                    position: absolute;
                    top: 2px;
                    right: 4px;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: #10b981;
                    box-shadow: 0 0 0 2px #0f172a;
                }
                @media (max-width: 480px) {
                    .task-reporting-fab-btn {
                        padding: 0.45rem 0.875rem;
                        font-size: 0.75rem;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Hitung posisi aman
        updateFabPosition(fabBtn);
        window.addEventListener('resize', () => updateFabPosition(fabBtn));

        // Pantau pemuatan dinamis elemen lain (misal partials/spu-modal.html via fetch di include.js)
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver(() => updateFabPosition(fabBtn));
            observer.observe(document.body, { childList: true, subtree: true });
        }

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
