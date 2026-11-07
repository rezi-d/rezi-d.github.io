/**
 * =================================================================
 * js/task-modal.js — Dialog Pop-up & Bottom-Sheet Pelaporan Tugas
 * AjarKita (kimia.ajarkita.my.id)
 * =================================================================
 * Alur Siswa Langkah demi Langkah:
 * 1. Masukkan Kode Akses + Turnstile
 * 2. Identitas Siswa (Nama & Kelas)
 * 3. Daftar Tugas (Tambah/Hapus hingga 30 baris, Autocomplete Aman)
 * 4. Konfirmasi & Nomor Resi Referensi
 *
 * Privasi Mutlak:
 * - autocomplete="off"
 * - TIDAK ADA penyimpanan nama/tugas di localStorage atau cookie
 * - Memori form dikosongkan seketika setelah selesai/tutup
 * - Aksesibilitas WCAG: role="dialog", focus trap, penanganan keyboard mobile
 */

(function () {
    'use strict';

    // State Internal dalam RAM (Transient Memory Only)
    let currentPeriod = null;
    let sessionToken = null;
    let triggerButton = null;
    let turnstileWidgetId = null;
    let turnstileToken = null;
    let activeStep = 1;
    let taskRows = [];
    let isSubmitting = false;
    // 27 Mata Pelajaran Resmi Sekolah
    const OFFICIAL_SUBJECTS = [
        'Akidah',
        'Al-Quran',
        'Bahasa Arab',
        'Bahasa Indonesia',
        'Bahasa Inggris',
        'Bahasa Inggris TL (Tingkat Lanjut)',
        'Biologi',
        'BK (Bimbingan Konseling)',
        'BPI',
        'Ekonomi',
        'Fiqih',
        'Fisika',
        'Geografi',
        'Hadist',
        'Informatika',
        'Kimia',
        'Matematika',
        'Matematika TL (Tingkat Lanjut)',
        'PAI (Pendidikan Agama Islam)',
        'PJOK',
        'PKN',
        'PKW (Prakarya dan Kewirausahaan)',
        'Sejarah',
        'Sejarah TL (Tingkat Lanjut)',
        'Siroh',
        'Sosiologi',
        'Tafsir'
    ];


    // Elemen DOM Modal
    let overlayEl = null;
    let dialogEl = null;

    // Debounce timer untuk autocomplete
    let debounceTimer = null;

    // Cloudflare Turnstile Sitekey (Gunakan official always-pass testing key pada localhost / 127.0.0.1)
    const isLocalDev = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' || 
                       window.location.protocol === 'file:';
    const TURNSTILE_SITEKEY = window.TURNSTILE_SITEKEY || (isLocalDev ? '1x00000000000000000000AA' : '0x4AAAAAAAMw_z_G5tJ7B8e8');

    // Injeksi CSS Khusus Modal (Mobile-first, Bottom Sheet <= 480px)
    function ensureModalStyles() {
        if (document.getElementById('task-modal-style')) return;
        const style = document.createElement('style');
        style.id = 'task-modal-style';
        style.textContent = `
            .task-modal-overlay {
                position: fixed;
                inset: 0;
                background-color: rgba(15, 23, 42, 0.48);
                z-index: 60;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s;
            }
            .task-modal-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            .task-modal-dialog {
                background: #ffffff;
                width: 100%;
                max-width: 520px;
                max-height: 90vh;
                border-radius: 24px;
                box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                transform: scale(0.96) translateY(8px);
                transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .task-modal-overlay.active .task-modal-dialog {
                transform: scale(1) translateY(0);
            }
            @media (prefers-reduced-motion: reduce) {
                .task-modal-overlay, .task-modal-dialog {
                    transition: none !important;
                }
            }
            /* Bottom Sheet di Layar Ponsel (<= 480px) */
            @media (max-width: 480px) {
                .task-modal-overlay {
                    padding: 0;
                    align-items: flex-end;
                }
                .task-modal-dialog {
                    max-width: 100%;
                    max-height: 92vh;
                    border-radius: 24px 24px 0 0;
                    transform: translateY(100%);
                }
                .task-modal-overlay.active .task-modal-dialog {
                    transform: translateY(0);
                }
            }
            .task-header {
                padding: 1.125rem 1.5rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.06);
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #ffffff;
                position: sticky;
                top: 0;
                z-index: 10;
            }
            .task-body {
                padding: 1.25rem 1.5rem;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                flex: 1;
            }
            .task-footer {
                padding: 1rem 1.5rem;
                border-top: 1px solid rgba(0, 0, 0, 0.06);
                background: #fafafa;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 0.75rem;
                position: sticky;
                bottom: 0;
                z-index: 10;
            }
            .task-step-indicator {
                display: flex;
                align-items: center;
                gap: 0.375rem;
                margin-bottom: 1.25rem;
            }
            .task-step-dot {
                flex: 1;
                height: 4px;
                border-radius: 2px;
                background: #e2e8f0;
                transition: background-color 0.2s;
            }
            .task-step-dot.active {
                background: #0071e3;
            }
            .task-step-dot.completed {
                background: #10b981;
            }
            .task-input {
                width: 100%;
                padding: 0.75rem 1rem;
                border-radius: 12px;
                border: 1px solid #cbd5e1;
                font-size: 0.9375rem;
                color: #0f172a;
                background: #ffffff;
                transition: border-color 0.15s, box-shadow 0.15s;
                font-family: inherit;
            }
            .task-input:focus {
                outline: none;
                border-color: #0071e3;
                box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
            }
            .task-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                padding: 0.6875rem 1.25rem;
                border-radius: 12px;
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.15s, transform 0.1s, opacity 0.15s;
                border: none;
                font-family: inherit;
                min-height: 44px;
            }
            .task-btn-primary {
                background: #0071e3;
                color: #ffffff;
            }
            .task-btn-primary:hover:not(:disabled) {
                background: #0077ed;
            }
            .task-btn-primary:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
            .task-btn-secondary {
                background: #f1f5f9;
                color: #334155;
            }
            .task-btn-secondary:hover {
                background: #e2e8f0;
            }
            .task-item-card {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 14px;
                padding: 0.875rem;
                margin-bottom: 0.75rem;
                position: relative;
            }
            .task-suggestions-dropdown {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: #ffffff;
                border: 1px solid #cbd5e1;
                border-radius: 10px;
                box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
                max-height: 160px;
                overflow-y: auto;
                z-index: 25;
                margin-top: 4px;
            }
            .task-suggestion-item {
                padding: 0.5rem 0.75rem;
                font-size: 0.8125rem;
                color: #1e293b;
                cursor: pointer;
                border-bottom: 1px solid #f1f5f9;
            }
            .task-suggestion-item:hover {
                background-color: #f0fdf4;
                color: #166534;
            }
            
            /* Searchable Mapel Picker (Maksimal 4 Tampil & Search Bar) */
            .task-subject-picker-container {
                position: relative;
            }
            .task-subject-picker-btn {
                width: 100%;
                padding: 0.5rem 0.625rem;
                border-radius: 12px;
                border: 1px solid #cbd5e1;
                font-size: 0.8125rem;
                font-weight: 600;
                color: #0f172a;
                background: #ffffff;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                text-align: left;
                transition: border-color 0.15s, box-shadow 0.15s;
                font-family: inherit;
            }
            .task-subject-picker-btn:focus {
                outline: none;
                border-color: #0071e3;
                box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
            }
            .task-subject-dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: #ffffff;
                border: 1px solid #cbd5e1;
                border-radius: 12px;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.18), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                z-index: 35;
                margin-top: 4px;
                overflow: hidden;
            }
            .task-subject-search-wrapper {
                padding: 0.375rem;
                border-bottom: 1px solid #f1f5f9;
                background: #fafafa;
            }
            .task-subject-search-input {
                width: 100%;
                padding: 0.375rem 0.625rem;
                font-size: 0.75rem;
                border-radius: 8px;
                border: 1px solid #cbd5e1;
                outline: none;
                font-family: inherit;
                box-sizing: border-box;
            }
            .task-subject-search-input:focus {
                border-color: #0071e3;
            }
            .task-subject-options-list {
                max-height: 132px; /* Tepat menampilkan maksimal 4 mapel */
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }
            .task-subject-option-item {
                padding: 0.45rem 0.625rem;
                font-size: 0.8125rem;
                color: #334155;
                cursor: pointer;
                border-bottom: 1px solid #f8fafc;
                display: flex;
                align-items: center;
                justify-content: space-between;
                transition: background-color 0.1s;
            }
            .task-subject-option-item:hover {
                background-color: #eff6ff;
                color: #1d4ed8;
            }
            .task-subject-option-item.selected {
                background-color: #dbeafe;
                color: #1e40af;
                font-weight: 700;
            }

            .task-notice-box {
                background: #eff6ff;
                border: 1px solid #bfdbfe;
                border-radius: 12px;
                padding: 0.75rem 1rem;
                font-size: 0.78125rem;
                color: #1e40af;
                line-height: 1.45;
                margin-top: 1rem;
            }
        `;
        document.head.appendChild(style);
    }

    // Lazy load script Turnstile
    function loadTurnstileApi(callback) {
        if (window.turnstile) {
            if (typeof callback === 'function') callback();
            return;
        }
        const existingScript = document.querySelector('script[src*="turnstile/v0/api.js"]');
        if (existingScript) {
            existingScript.addEventListener('load', callback);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => {
            if (typeof callback === 'function') callback();
        };
        script.onerror = () => {
            console.warn('[Turnstile] Gagal memuat script turnstile online, beralih ke mode fallback.');
            if (typeof callback === 'function') callback();
        };
        document.head.appendChild(script);
    }

    // Inisialisasi Turnstile Widget
    function renderTurnstileWidget(containerId) {
        loadTurnstileApi(() => {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            turnstileToken = null;

            if (window.turnstile && typeof window.turnstile.render === 'function') {
                try {
                    turnstileWidgetId = window.turnstile.render(container, {
                        sitekey: TURNSTILE_SITEKEY,
                        callback: (token) => {
                            turnstileToken = token;
                            const btn = document.getElementById('task-btn-verify-code');
                            if (btn) btn.disabled = false;
                        },
                        'expired-callback': () => {
                            turnstileToken = null;
                            const btn = document.getElementById('task-btn-verify-code');
                            if (btn) btn.disabled = true;
                        },
                        'error-callback': () => {
                            // Fallback jika sitekey offline/testing
                            turnstileToken = 'fallback-dev-token';
                            const btn = document.getElementById('task-btn-verify-code');
                            if (btn) btn.disabled = false;
                        }
                    });
                } catch (e) {
                    turnstileToken = 'fallback-dev-token';
                }
            } else {
                // Lingkungan pengujian / tanpa koneksi Turnstile
                turnstileToken = 'fallback-dev-token';
            }
        });
    }

    // Bangun Shell Modal di DOM jika belum ada
    function createModalDom() {
        if (document.getElementById('task-modal-overlay')) return;
        ensureModalStyles();

        overlayEl = document.createElement('div');
        overlayEl.id = 'task-modal-overlay';
        overlayEl.className = 'task-modal-overlay';
        overlayEl.setAttribute('role', 'presentation');

        dialogEl = document.createElement('div');
        dialogEl.id = 'task-modal-dialog';
        dialogEl.className = 'task-modal-dialog';
        dialogEl.setAttribute('role', 'dialog');
        dialogEl.setAttribute('aria-modal', 'true');
        dialogEl.setAttribute('aria-labelledby', 'task-modal-title');

        dialogEl.innerHTML = `
            <header class="task-header">
                <div>
                    <h2 id="task-modal-title" style="font-size:1.0625rem; font-weight:700; color:#0f172a; margin:0; line-height:1.2;">
                        Pelaporan Tugas Susulan
                    </h2>
                    <p id="task-modal-subtitle" style="font-size:0.75rem; color:#64748b; margin:0.15rem 0 0 0;">
                        AjarKita Digital Record
                    </p>
                </div>
                <button type="button" id="task-modal-close-btn" aria-label="Tutup formulir" style="background:transparent; border:none; color:#64748b; font-size:1.5rem; cursor:pointer; line-height:1; padding:0.25rem 0.5rem; border-radius:8px;">
                    &times;
                </button>
            </header>
            <div id="task-modal-body" class="task-body"></div>
            <footer id="task-modal-footer" class="task-footer"></footer>
        `;

        overlayEl.appendChild(dialogEl);
        document.body.appendChild(overlayEl);

        // Event Listener Tombol X
        document.getElementById('task-modal-close-btn').addEventListener('click', handleUserCloseRequest);

        // Event Listener Klik di Luar Dialog
        overlayEl.addEventListener('click', (e) => {
            if (e.target === overlayEl) {
                handleUserCloseRequest();
            }
        });

        // Event Listener Tombol Esc & Focus Trap
        document.addEventListener('keydown', handleGlobalKeydown);
    }

    // Konfirmasi sebelum menutup jika isian sudah terisi
    function hasUnsavedData() {
        if (activeStep === 2) {
            const name = document.getElementById('task-student-name')?.value?.trim();
            return !!name;
        }
        if (activeStep === 3) {
            return taskRows.length > 0 && taskRows.some(t => t.title && t.title.trim());
        }
        return false;
    }

    function handleUserCloseRequest() {
        if (hasUnsavedData()) {
            const sure = window.confirm('Tutup formulir pelaporan? Isian tugas yang belum dikirim akan dibatalkan demi keamanan.');
            if (!sure) return;
        }
        closeModal();
    }

    function handleGlobalKeydown(e) {
        if (!overlayEl || !overlayEl.classList.contains('active')) return;

        if (e.key === 'Escape') {
            e.preventDefault();
            handleUserCloseRequest();
            return;
        }

        // Focus Trap
        if (e.key === 'Tab') {
            const focusable = dialogEl.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), [tabindex="0"]');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    // Helper Navigasi Langkah
    function renderStepIndicator() {
        return `
            <div class="task-step-indicator" aria-label="Langkah ${activeStep} dari 4">
                <div class="task-step-dot ${activeStep >= 1 ? (activeStep > 1 ? 'completed' : 'active') : ''}"></div>
                <div class="task-step-dot ${activeStep >= 2 ? (activeStep > 2 ? 'completed' : 'active') : ''}"></div>
                <div class="task-step-dot ${activeStep >= 3 ? (activeStep > 3 ? 'completed' : 'active') : ''}"></div>
                <div class="task-step-dot ${activeStep >= 4 ? 'completed active' : ''}"></div>
            </div>
        `;
    }

    // --- LANGKAH 1: KODE AKSES & TURNSTILE ---
    function renderStep1() {
        activeStep = 1;
        const bodyEl = document.getElementById('task-modal-body');
        const footerEl = document.getElementById('task-modal-footer');

        bodyEl.innerHTML = `
            ${renderStepIndicator()}
            <div style="margin-bottom:1.25rem;">
                <h3 style="font-size:1.125rem; font-weight:700; color:#0f172a; margin:0 0 0.35rem 0;">
                    1. Masukkan Kode Akses
                </h3>
                <p style="font-size:0.8125rem; color:#64748b; margin:0; line-height:1.4;">
                    Periode: <strong>${escapeHtml(currentPeriod.name || 'Pelaporan Tugas')}</strong>.<br>
                    Kode akses diberikan oleh guru mata pelajaran atau wali kelas.
                </p>
            </div>

            <div style="margin-bottom:1rem;">
                <label for="task-access-code" style="display:block; font-size:0.8125rem; font-weight:600; color:#334155; margin-bottom:0.35rem;">
                    Kode Akses Periode
                </label>
                <input type="text" id="task-access-code" class="task-input" maxlength="32"
                       placeholder="Contoh: TGS-X-2026" autocomplete="off" spellcheck="false" autofocus>
                <div id="task-code-error" style="color:#ef4444; font-size:0.75rem; margin-top:0.35rem; display:none;"></div>
            </div>

            <div style="margin-bottom:1.25rem;">
                <label style="display:block; font-size:0.8125rem; font-weight:600; color:#334155; margin-bottom:0.35rem;">
                    Verifikasi Keamanan
                </label>
                <div id="task-turnstile-widget" style="min-height:65px;"></div>
            </div>

            <div class="task-notice-box">
                🔒 <strong>Privasi &amp; Keamanan Perangkat Bersama</strong><br>
                Sistem tidak menyimpan riwayat nama atau kode pada browser ini. Setiap sesi dibatasi maksimal 30 menit.
            </div>
        `;

        footerEl.innerHTML = `
            <button type="button" class="task-btn task-btn-secondary" id="task-btn-cancel-1">Batal</button>
            <button type="button" class="task-btn task-btn-primary" id="task-btn-verify-code">
                Verifikasi Kode &rarr;
            </button>
        `;

        document.getElementById('task-btn-cancel-1').addEventListener('click', handleUserCloseRequest);
        const verifyBtn = document.getElementById('task-btn-verify-code');
        verifyBtn.addEventListener('click', handleVerifyAccessCode);

        // Enter key shortcut
        document.getElementById('task-access-code').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleVerifyAccessCode();
        });

        // Inisialisasi Turnstile
        renderTurnstileWidget('task-turnstile-widget');
    }

    async function handleVerifyAccessCode() {
        const codeInput = document.getElementById('task-access-code');
        const errorEl = document.getElementById('task-code-error');
        const verifyBtn = document.getElementById('task-btn-verify-code');
        const accessCode = codeInput?.value?.trim();

        errorEl.style.display = 'none';

        if (!accessCode) {
            errorEl.textContent = 'Harap masukkan kode akses periode.';
            errorEl.style.display = 'block';
            codeInput.focus();
            return;
        }

        verifyBtn.disabled = true;
        verifyBtn.textContent = 'Memverifikasi...';

        try {
            const res = await fetch('/api/task/auth/verify-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    periodId: currentPeriod.id,
                    accessCode: accessCode,
                    turnstileToken: turnstileToken || 'fallback-dev-token'
                })
            });

            const data = await res.json();
            if (!res.ok || !data.ok) {
                throw new Error(data.error || 'Kode akses salah atau tidak berlaku.');
            }

            // Simpan Session Token dalam RAM
            sessionToken = data.sessionToken;
            currentPeriod.classes = data.period.classes || [];
            currentPeriod.subjects = data.period.subjects || [];

            // Reset Turnstile token
            turnstileToken = null;

            // Inisialisasi default 1 baris tugas
            taskRows = [{
                id: 'row_' + Date.now(),
                subject: OFFICIAL_SUBJECTS[0],
                title: '',
                submittedDate: new Date().toISOString().split('T')[0],
                notes: ''
            }];

            renderStep2();
        } catch (err) {
            // Mode Pratinjau Lokal (127.0.0.1 / localhost) jika Worker belum berjalan lokal
            const isLocalDev = window.location.hostname === 'localhost' || 
                               window.location.hostname === '127.0.0.1' || 
                               window.location.protocol === 'file:';
            if (isLocalDev) {
                sessionToken = 'mock_dev_session_token_' + Date.now();
                currentPeriod.classes = (currentPeriod.classes && currentPeriod.classes.length) ? currentPeriod.classes : ['X Putra', 'X Putri', 'XI IPA Putra', 'XI IPA Putri', 'XII IPA Putra', 'XII IPA Putri', 'XII IPS Putri'];
                currentPeriod.subjects = (currentPeriod.subjects && currentPeriod.subjects.length > 5) ? currentPeriod.subjects : OFFICIAL_SUBJECTS;
                turnstileToken = null;
                taskRows = [{
                    id: 'row_' + Date.now(),
                    subject: OFFICIAL_SUBJECTS[0],
                    title: '',
                    submittedDate: new Date().toISOString().split('T')[0],
                    notes: ''
                }];
                renderStep2();
                return;
            }

            errorEl.textContent = err.message;
            errorEl.style.display = 'block';
            verifyBtn.disabled = false;
            verifyBtn.textContent = 'Verifikasi Kode →';
            // Render ulang Turnstile jika gagal
            renderTurnstileWidget('task-turnstile-widget');
        }
    }

    // --- LANGKAH 2: IDENTITAS SISWA ---
    function renderStep2() {
        activeStep = 2;
        const bodyEl = document.getElementById('task-modal-body');
        const footerEl = document.getElementById('task-modal-footer');

        const classOptions = (currentPeriod.classes || []).map(cls => 
            `<option value="${escapeHtml(cls)}">${escapeHtml(cls)}</option>`
        ).join('');

        bodyEl.innerHTML = `
            ${renderStepIndicator()}
            <div style="margin-bottom:1.25rem;">
                <h3 style="font-size:1.125rem; font-weight:700; color:#0f172a; margin:0 0 0.35rem 0;">
                    2. Identitas Siswa
                </h3>
                <p style="font-size:0.8125rem; color:#64748b; margin:0; line-height:1.4;">
                    Isi nama lengkap Anda sesuai buku rapor atau daftar hadir kelas.
                </p>
            </div>

            <div style="margin-bottom:1rem;">
                <label for="task-student-name" style="display:block; font-size:0.8125rem; font-weight:600; color:#334155; margin-bottom:0.35rem;">
                    Nama Lengkap Siswa *
                </label>
                <input type="text" id="task-student-name" class="task-input" maxlength="60"
                       placeholder="Contoh: Muhammad Fikri Haikal" autocomplete="off" spellcheck="false" autofocus>
                <div id="task-name-error" style="color:#ef4444; font-size:0.75rem; margin-top:0.35rem; display:none;"></div>
            </div>

            <div style="margin-bottom:1.25rem;">
                <label for="task-student-class" style="display:block; font-size:0.8125rem; font-weight:600; color:#334155; margin-bottom:0.35rem;">
                    Kelas *
                </label>
                <select id="task-student-class" class="task-input" style="cursor:pointer;">
                    <option value="" disabled selected>-- Pilih Kelas Anda --</option>
                    ${classOptions}
                </select>
                <div id="task-class-error" style="color:#ef4444; font-size:0.75rem; margin-top:0.35rem; display:none;"></div>
            </div>

            <div class="task-notice-box">
                ℹ️ <strong>Pemberitahuan Transparansi</strong><br>
                Nama Anda akan dipadankan oleh guru dengan berkas fisik tugas yang telah diserahkan di meja guru.
            </div>
        `;

        footerEl.innerHTML = `
            <button type="button" class="task-btn task-btn-secondary" id="task-btn-back-2">&larr; Kembali</button>
            <button type="button" class="task-btn task-btn-primary" id="task-btn-next-2">
                Lanjut ke Rincian Tugas &rarr;
            </button>
        `;

        document.getElementById('task-btn-back-2').addEventListener('click', renderStep1);
        document.getElementById('task-btn-next-2').addEventListener('click', handleStep2Next);

        document.getElementById('task-student-name').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleStep2Next();
        });
    }

    let savedStudentName = '';
    let savedStudentClass = '';

    function handleStep2Next() {
        const nameInput = document.getElementById('task-student-name');
        const classSelect = document.getElementById('task-student-class');
        const nameError = document.getElementById('task-name-error');
        const classError = document.getElementById('task-class-error');

        nameError.style.display = 'none';
        classError.style.display = 'none';

        const name = nameInput?.value?.trim() || '';
        const cls = classSelect?.value || '';

        let valid = true;
        if (name.length < 2) {
            nameError.textContent = 'Nama lengkap minimal 2 karakter.';
            nameError.style.display = 'block';
            valid = false;
        } else if (name.length > 60) {
            nameError.textContent = 'Nama lengkap maksimal 60 karakter.';
            nameError.style.display = 'block';
            valid = false;
        }

        if (!cls) {
            classError.textContent = 'Silakan pilih kelas Anda.';
            classError.style.display = 'block';
            valid = false;
        }

        if (!valid) return;

        savedStudentName = name;
        savedStudentClass = cls;
        renderStep3();
    }

    // --- LANGKAH 3: RINCIAN BUTIR TUGAS ---
    function renderStep3() {
        activeStep = 3;
        const bodyEl = document.getElementById('task-modal-body');
        const footerEl = document.getElementById('task-modal-footer');

        bodyEl.innerHTML = `
            ${renderStepIndicator()}
            <div style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                    <h3 style="font-size:1.125rem; font-weight:700; color:#0f172a; margin:0 0 0.25rem 0;">
                        3. Butir Tugas yang Diserahkan
                    </h3>
                    <p style="font-size:0.8125rem; color:#64748b; margin:0;">
                        Siswa: <strong>${escapeHtml(savedStudentName)}</strong> (${escapeHtml(savedStudentClass)})
                    </p>
                </div>
                <span id="task-counter-badge" style="background:#e0f2fe; color:#0369a1; font-size:0.75rem; font-weight:700; padding:0.25rem 0.625rem; border-radius:9999px;">
                    ${taskRows.length} / 30 Tugas
                </span>
            </div>

            <div id="task-items-container"></div>

            <div style="margin-top:0.75rem; margin-bottom:1rem;">
                <button type="button" id="task-btn-add-row" class="task-btn task-btn-secondary" style="width:100%; border:1px dashed #cbd5e1; background:#ffffff;">
                    + Tambah Baris Tugas Lain
                </button>
            </div>

            <div id="task-step3-error" style="color:#ef4444; font-size:0.8125rem; margin-bottom:0.75rem; display:none;"></div>

            <div class="task-notice-box">
                💡 <strong>Saran Judul Aman</strong>: Saat mengetik judul, saran akan otomatis muncul jika tugas tersebut sudah dilaporkan oleh minimal 2 siswa lain.
            </div>
        `;

        renderTaskRows();

        footerEl.innerHTML = `
            <button type="button" class="task-btn task-btn-secondary" id="task-btn-back-3">&larr; Kembali</button>
            <button type="button" class="task-btn task-btn-primary" id="task-btn-submit-all">
                Kirim Laporan (${taskRows.length}) &rarr;
            </button>
        `;

        document.getElementById('task-btn-back-3').addEventListener('click', renderStep2);
        document.getElementById('task-btn-add-row').addEventListener('click', addTaskRow);
        document.getElementById('task-btn-submit-all').addEventListener('click', handleSubmitAllTasks);
    }

    function renderTaskRows() {
        const container = document.getElementById('task-items-container');
        if (!container) return;
        container.innerHTML = '';

        const subjects = currentPeriod.subjects || ['Kimia'];

        taskRows.forEach((row, index) => {
            const card = document.createElement('div');
            card.className = 'task-item-card';
            card.id = row.id;

            const subjectOptions = subjects.map(s => 
                `<option value="${escapeHtml(s)}" ${s === row.subject ? 'selected' : ''}>${escapeHtml(s)}</option>`
            ).join('');

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                    <span style="font-size:0.75rem; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.05em;">
                        Tugas #${index + 1}
                    </span>
                    ${taskRows.length > 1 ? `
                        <button type="button" class="task-btn-delete-row" data-id="${row.id}" title="Hapus tugas ini" style="background:transparent; border:none; color:#ef4444; cursor:pointer; font-size:0.8125rem; font-weight:600; padding:0 0.25rem;">
                            ✕ Hapus
                        </button>
                    ` : ''}
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem; margin-bottom:0.5rem;">
                    <div class="task-subject-picker-container" data-id="${row.id}">
                        <label style="display:block; font-size:0.75rem; font-weight:600; color:#334155; margin-bottom:0.25rem;">Mata Pelajaran *</label>
                        <button type="button" class="task-subject-picker-btn" data-id="${row.id}">
                            <span class="task-subject-picker-label" data-id="${row.id}">${escapeHtml(row.subject || 'Pilih Mapel...')}</span>
                            <span style="font-size:0.625rem; color:#64748b; margin-left:0.25rem;">▼</span>
                        </button>
                        <div class="task-subject-dropdown-menu" id="subject-menu-${row.id}" style="display:none;">
                            <div class="task-subject-search-wrapper">
                                <input type="text" class="task-subject-search-input" data-id="${row.id}" placeholder="🔍 Cari nama mapel..." autocomplete="off">
                            </div>
                            <div class="task-subject-options-list" id="subject-options-${row.id}"></div>
                        </div>
                    </div>
                    <div>
                        <label style="display:block; font-size:0.75rem; font-weight:600; color:#334155; margin-bottom:0.25rem;">Tanggal Serah (opsional)</label>
                        <input type="date" class="task-input task-row-date" data-id="${row.id}" value="${row.submittedDate || ''}" style="padding:0.5rem; font-size:0.8125rem;">
                    </div>
                </div>

                <div style="position:relative; margin-bottom:0.5rem;">
                    <label style="display:block; font-size:0.75rem; font-weight:600; color:#334155; margin-bottom:0.25rem;">Judul / Nama Tugas *</label>
                    <input type="text" class="task-input task-row-title" data-id="${row.id}" maxlength="100"
                           value="${escapeHtml(row.title || '')}" placeholder="Contoh: Tugas 1: Termokimia Latihan 3.2" autocomplete="off" spellcheck="false" style="padding:0.5rem; font-size:0.8125rem;">
                    <div class="task-suggestions-dropdown" id="sugg-${row.id}" style="display:none;"></div>
                </div>

                <div>
                    <label style="display:block; font-size:0.75rem; font-weight:600; color:#334155; margin-bottom:0.25rem;">Catatan Fisik (opsional, maks 200 karakter)</label>
                    <input type="text" class="task-input task-row-notes" data-id="${row.id}" maxlength="200"
                           value="${escapeHtml(row.notes || '')}" placeholder="Contoh: Diserahkan di map merah meja guru" autocomplete="off" style="padding:0.5rem; font-size:0.8125rem;">
                </div>
            `;

            container.appendChild(card);
        });

        // Helper Render Pilihan Mapel dengan Pencarian (Maksimal 4 Tampil)
        function renderSubjectOptions(rowId, filterQuery = '') {
            const listEl = document.getElementById(`subject-options-${rowId}`);
            if (!listEl) return;
            const row = taskRows.find(r => r.id === rowId);
            const currentSubj = row ? row.subject : '';
            const allSubs = (currentPeriod.subjects && currentPeriod.subjects.length > 5) ? currentPeriod.subjects : OFFICIAL_SUBJECTS;
            const filtered = allSubs.filter(s => s.toLowerCase().includes(filterQuery.toLowerCase()));

            if (filtered.length === 0) {
                listEl.innerHTML = '<div style="padding:0.5rem; font-size:0.75rem; color:#94a3b8; text-align:center;">Mapel tidak ditemukan</div>';
                return;
            }

            listEl.innerHTML = filtered.map(s => `
                <div class="task-subject-option-item ${s === currentSubj ? 'selected' : ''}" data-subject="${escapeHtml(s)}">
                    <span>${escapeHtml(s)}</span>
                    ${s === currentSubj ? '<span style="color:#0071e3; font-weight:bold;">✓</span>' : ''}
                </div>
            `).join('');

            listEl.querySelectorAll('.task-subject-option-item').forEach(item => {
                item.addEventListener('click', () => {
                    const chosen = item.dataset.subject;
                    if (row) row.subject = chosen;
                    const labelEl = container.querySelector(`.task-subject-picker-label[data-id="${rowId}"]`);
                    if (labelEl) labelEl.textContent = chosen;
                    const menuEl = document.getElementById(`subject-menu-${rowId}`);
                    if (menuEl) menuEl.style.display = 'none';
                });
            });
        }

        // Pasang Event Listeners Pilihan Mapel Berpencarian
        container.querySelectorAll('.task-subject-picker-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const rowId = btn.dataset.id;
                const menuEl = document.getElementById(`subject-menu-${rowId}`);
                const isCurrentlyOpen = menuEl && menuEl.style.display === 'block';

                document.querySelectorAll('.task-subject-dropdown-menu').forEach(m => m.style.display = 'none');

                if (!isCurrentlyOpen && menuEl) {
                    renderSubjectOptions(rowId, '');
                    menuEl.style.display = 'block';
                    const searchInput = menuEl.querySelector('.task-subject-search-input');
                    if (searchInput) {
                        searchInput.value = '';
                        setTimeout(() => searchInput.focus(), 50);
                    }
                }
            });
        });

        container.querySelectorAll('.task-subject-search-input').forEach(input => {
            input.addEventListener('click', (e) => e.stopPropagation());
            input.addEventListener('input', (e) => {
                const rowId = input.dataset.id;
                renderSubjectOptions(rowId, e.target.value.trim());
            });
        });

        // Klik di luar pilihan mapel menutup dropdown
        container.addEventListener('click', (e) => {
            if (!e.target.closest('.task-subject-picker-container')) {
                document.querySelectorAll('.task-subject-dropdown-menu').forEach(m => m.style.display = 'none');
            }
        });

        container.querySelectorAll('.task-row-date').forEach(input => {
            input.addEventListener('change', (e) => {
                const row = taskRows.find(r => r.id === e.target.dataset.id);
                if (row) row.submittedDate = e.target.value;
            });
        });

        container.querySelectorAll('.task-row-notes').forEach(input => {
            input.addEventListener('input', (e) => {
                const row = taskRows.find(r => r.id === e.target.dataset.id);
                if (row) row.notes = e.target.value;
            });
        });

        container.querySelectorAll('.task-row-title').forEach(input => {
            const rowId = input.dataset.id;
            input.addEventListener('input', (e) => {
                const row = taskRows.find(r => r.id === rowId);
                if (row) row.title = e.target.value;
                handleTitleInputSuggestions(rowId, input);
            });
            input.addEventListener('blur', () => {
                setTimeout(() => {
                    const dropdown = document.getElementById(`sugg-${rowId}`);
                    if (dropdown) dropdown.style.display = 'none';
                }, 200);
            });
        });

        container.querySelectorAll('.task-btn-delete-row').forEach(btn => {
            btn.addEventListener('click', (e) => {
                deleteTaskRow(e.target.dataset.id);
            });
        });

        // Update counter dan tombol tambah
        const counterEl = document.getElementById('task-counter-badge');
        if (counterEl) counterEl.textContent = `${taskRows.length} / 30 Tugas`;

        const addBtn = document.getElementById('task-btn-add-row');
        if (addBtn) addBtn.disabled = taskRows.length >= 30;

        const submitBtn = document.getElementById('task-btn-submit-all');
        if (submitBtn) submitBtn.textContent = `Kirim Laporan (${taskRows.length}) →`;
    }

    function addTaskRow() {
        if (taskRows.length >= 30) return;
        taskRows.push({
            id: 'row_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
            subject: OFFICIAL_SUBJECTS[0],
            title: '',
            submittedDate: new Date().toISOString().split('T')[0],
            notes: ''
        });
        renderTaskRows();
        // Fokuskan ke judul input pada baris baru
        setTimeout(() => {
            const lastRow = taskRows[taskRows.length - 1];
            const lastInput = document.querySelector(`.task-row-title[data-id="${lastRow.id}"]`);
            if (lastInput) lastInput.focus();
        }, 50);
    }

    function deleteTaskRow(id) {
        if (taskRows.length <= 1) return;
        taskRows = taskRows.filter(r => r.id !== id);
        renderTaskRows();
    }

    // Saran Autocomplete yang Aman (Threshold >= 2 Siswa Berbeda)
    function handleTitleInputSuggestions(rowId, inputEl) {
        const query = inputEl.value.trim();
        const dropdown = document.getElementById(`sugg-${rowId}`);
        if (!dropdown) return;

        clearTimeout(debounceTimer);
        if (query.length < 2) {
            dropdown.style.display = 'none';
            return;
        }

        const row = taskRows.find(r => r.id === rowId);
        const subject = row ? row.subject : '';

        debounceTimer = setTimeout(async () => {
            try {
                const url = `/api/task/suggestions?periodId=${encodeURIComponent(currentPeriod.id)}&subject=${encodeURIComponent(subject)}&query=${encodeURIComponent(query)}`;
                const res = await fetch(url, {
                    headers: { 'X-Task-Session-Token': sessionToken }
                });
                if (!res.ok) return;
                const data = await res.json();
                const suggestions = (data && data.suggestions) || [];

                if (suggestions.length === 0) {
                    dropdown.style.display = 'none';
                    return;
                }

                dropdown.innerHTML = suggestions.map(title => `
                    <div class="task-suggestion-item" data-title="${escapeHtml(title)}">
                        📝 ${escapeHtml(title)}
                    </div>
                `).join('');

                dropdown.querySelectorAll('.task-suggestion-item').forEach(item => {
                    item.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                        const picked = e.currentTarget.dataset.title;
                        inputEl.value = picked;
                        if (row) row.title = picked;
                        dropdown.style.display = 'none';
                    });
                });

                dropdown.style.display = 'block';
            } catch (e) {
                const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                if (isLocalDev && query.length >= 2) {
                    const demoSuggestions = [
                        'Tugas 1: Termokimia Latihan 3.2',
                        'Tugas 2: Laju Reaksi Bab 4',
                        'Tugas 3: Kesetimbangan Kimia'
                    ].filter(t => t.toLowerCase().includes(query.toLowerCase()));
                    if (demoSuggestions.length > 0) {
                        dropdown.innerHTML = demoSuggestions.map(title => `
                            <div class="task-suggestion-item" data-title="${escapeHtml(title)}">
                                📝 ${escapeHtml(title)}
                            </div>
                        `).join('');
                        dropdown.querySelectorAll('.task-suggestion-item').forEach(item => {
                            item.addEventListener('mousedown', (e) => {
                                e.preventDefault();
                                const picked = e.currentTarget.dataset.title;
                                inputEl.value = picked;
                                if (row) row.title = picked;
                                dropdown.style.display = 'none';
                            });
                        });
                        dropdown.style.display = 'block';
                        return;
                    }
                }
                dropdown.style.display = 'none';
            }
        }, 250);
    }

    async function handleSubmitAllTasks() {
        const errorEl = document.getElementById('task-step3-error');
        const submitBtn = document.getElementById('task-btn-submit-all');
        errorEl.style.display = 'none';

        // Validasi
        if (taskRows.length === 0) {
            errorEl.textContent = 'Tambahkan minimal 1 butir tugas.';
            errorEl.style.display = 'block';
            return;
        }

        for (let i = 0; i < taskRows.length; i++) {
            const r = taskRows[i];
            if (!r.title || !r.title.trim()) {
                errorEl.textContent = `Tugas #${i + 1}: Judul tugas wajib diisi.`;
                errorEl.style.display = 'block';
                const input = document.querySelector(`.task-row-title[data-id="${r.id}"]`);
                if (input) input.focus();
                return;
            }
            if (!r.subject) {
                errorEl.textContent = `Tugas #${i + 1}: Mata pelajaran wajib dipilih.`;
                errorEl.style.display = 'block';
                return;
            }
        }

        if (isSubmitting) return;
        isSubmitting = true;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim Laporan...';

        try {
            const payload = {
                periodId: currentPeriod.id,
                studentNameRaw: savedStudentName,
                className: savedStudentClass,
                tasks: taskRows.map(r => ({
                    subject: r.subject,
                    title: r.title.trim(),
                    submittedDate: r.submittedDate || null,
                    notes: (r.notes || '').trim() || null
                }))
            };

            const res = await fetch('/api/task/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Task-Session-Token': sessionToken
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (!res.ok || !data.ok) {
                throw new Error(data.error || 'Gagal mengirim laporan tugas.');
            }

            // Sukses! Lanjut ke Langkah 4 (Resi)
            renderStep4(data.refCode, payload.tasks.length);
        } catch (err) {
            const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            if (isLocalDev) {
                // Di lingkungan Live Server lokal tanpa worker, hasilkan kode demo
                const mockRefCode = 'TSG-' + Math.random().toString(36).substring(2, 8).toUpperCase();
                renderStep4(mockRefCode, payload.tasks.length);
                return;
            }

            errorEl.textContent = err.message;
            errorEl.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.textContent = `Kirim Laporan (${taskRows.length}) →`;
        } finally {
            isSubmitting = false;
        }
    }

    // --- LANGKAH 4: KONFIRMASI & RESI ---
    function renderStep4(refCode, taskCount) {
        activeStep = 4;
        const bodyEl = document.getElementById('task-modal-body');
        const footerEl = document.getElementById('task-modal-footer');

        bodyEl.innerHTML = `
            ${renderStepIndicator()}
            <div style="text-align:center; padding:1rem 0;">
                <div style="width:56px; height:56px; border-radius:50%; background:#dcfce7; color:#16a34a; font-size:1.75rem; display:inline-flex; align-items:center; justify-content:center; margin-bottom:0.75rem;">
                    ✓
                </div>
                <h3 style="font-size:1.25rem; font-weight:800; color:#0f172a; margin:0 0 0.25rem 0;">
                    Laporan Berhasil Diterima!
                </h3>
                <p style="font-size:0.8125rem; color:#64748b; margin:0;">
                    Data telah masuk ke rekap digital guru mata pelajaran.
                </p>
            </div>

            <!-- Kartu Kode Referensi -->
            <div style="background:#f8fafc; border:2px dashed #cbd5e1; border-radius:16px; padding:1.25rem; text-align:center; margin-bottom:1.25rem;">
                <span style="font-size:0.6875rem; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em; display:block; margin-bottom:0.25rem;">
                    Nomor Referensi Tanda Terima
                </span>
                <div id="task-ref-code" style="font-size:1.625rem; font-weight:900; letter-spacing:0.08em; color:#0f172a; font-family:monospace; margin-bottom:0.75rem;">
                    ${escapeHtml(refCode)}
                </div>
                <button type="button" id="task-btn-copy-ref" class="task-btn task-btn-secondary" style="font-size:0.8125rem; padding:0.4rem 1rem;">
                    📋 Salin Nomor Referensi
                </button>
                <div id="task-copy-alert" style="color:#10b981; font-size:0.75rem; font-weight:600; margin-top:0.35rem; display:none;">
                    ✓ Berhasil disalin ke papan klip!
                </div>
            </div>

            <div style="background:#f1f5f9; border-radius:12px; padding:0.875rem 1rem; font-size:0.8125rem; color:#334155; margin-bottom:1rem;">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
                    <span style="color:#64748b;">Nama Siswa:</span>
                    <strong>${escapeHtml(savedStudentName)}</strong>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
                    <span style="color:#64748b;">Kelas:</span>
                    <strong>${escapeHtml(savedStudentClass)}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:#64748b;">Jumlah Tugas:</span>
                    <strong>${taskCount} butir</strong>
                </div>
            </div>

            <div class="task-notice-box" style="font-size:0.75rem;">
                🛡️ <em>Draf - Perlu Ditinjau Sekolah</em><br>
                Catat atau tangkap layar (screenshot) nomor referensi di atas sebagai bukti pelaporan. Seluruh data pelaporan ini akan diverifikasi oleh guru mapel bersangkutan dan otomatis dihapus permanen dari sistem setelah periode berakhir.
            </div>
        `;

        footerEl.innerHTML = `
            <button type="button" class="task-btn task-btn-primary" id="task-btn-finish" style="width:100%;">
                Selesai &amp; Bersihkan Sesi
            </button>
        `;

        // Salin ke Clipboard
        document.getElementById('task-btn-copy-ref').addEventListener('click', () => {
            navigator.clipboard.writeText(refCode).then(() => {
                const alertEl = document.getElementById('task-copy-alert');
                alertEl.style.display = 'block';
                setTimeout(() => { alertEl.style.display = 'none'; }, 2500);
            }).catch(() => {
                alert(`Nomor Referensi Anda: ${refCode}`);
            });
        });

        // Tombol Selesai -> Bersihkan seluruh memori dan tutup dialog
        document.getElementById('task-btn-finish').addEventListener('click', () => {
            resetInternalState();
            closeModal();
        });
    }

    // Bersihkan Memori RAM (Privasi Perangkat Bersama)
    function resetInternalState() {
        sessionToken = null;
        turnstileToken = null;
        savedStudentName = '';
        savedStudentClass = '';
        taskRows = [];
        activeStep = 1;
        isSubmitting = false;
    }

    // Buka Modal
    function openModal(period, triggerEl) {
        if (!period) return;
        currentPeriod = period;
        triggerButton = triggerEl || null;

        createModalDom();
        resetInternalState();
        renderStep1();

        // Kunci Scroll Latar Belakang
        document.body.style.overflow = 'hidden';

        // Tampilkan Modal
        overlayEl.classList.add('active');

        // Pindahkan fokus ke input pertama
        setTimeout(() => {
            const firstInput = dialogEl.querySelector('input, button');
            if (firstInput) firstInput.focus();
        }, 150);
    }

    // Tutup Modal
    function closeModal() {
        if (!overlayEl) return;
        overlayEl.classList.remove('active');
        document.body.style.overflow = '';

        resetInternalState();

        // Kembalikan fokus ke tombol pemicu
        if (triggerButton && typeof triggerButton.focus === 'function') {
            triggerButton.focus();
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Expose Global API
    window.TaskReportingModal = {
        open: openModal,
        close: closeModal,
        getState: () => ({ activeStep, hasToken: !!sessionToken, taskCount: taskRows.length })
    };
})();
