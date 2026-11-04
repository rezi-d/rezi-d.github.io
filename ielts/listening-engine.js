/**
 * IELTS-Style Academic Listening Practice Test Engine
 * AjarKita Academic Suite - kimia.ajarkita.my.id
 * 
 * Fitur:
 * - 4 Section, 40 Soal berstandar Cambridge format
 * - Autoplay sekali putar per section (tanpa pause, seek, atau replay)
 * - Custom player dengan indikator visual progress streaming
 * - Pembagian soal per kelompok (chunking Q1-5, Q6-10) agar tidak sesak di mobile
 * - Navigasi 1-40 interaktif (status terjawab / belum)
 * - Autosave berkala ke Cloudflare D1
 * - Penilaian aman di server (kunci jawaban tidak terekspos sebelum submit)
 * - Estimated Band Score & Analisis Diagnostik per Section pasca-submit
 */

(function() {
    'use strict';

    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? (window.location.port === '8787' ? '' : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev')
        : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev';

    function getNormalizedTestId(tid) {
        if (typeof window !== 'undefined' && window.normalizeTestId) {
            return window.normalizeTestId(tid);
        }
        return (tid || 'test1').toString().trim().toLowerCase();
    }

    function getStorageDraftKey(tid) {
        if (typeof window !== 'undefined' && window.getDraftStorageKey) {
            return window.getDraftStorageKey(tid, 'listening');
        }
        return `ajarkita:${getNormalizedTestId(tid)}:listening:draft`;
    }

    function getStorageSessionKey(tid) {
        if (typeof window !== 'undefined' && window.getSessionStorageKey) {
            return window.getSessionStorageKey(tid, 'listening');
        }
        return `ajarkita:${getNormalizedTestId(tid)}:listening:session_id`;
    }

    function getInitialTestId() {
        if (typeof window !== 'undefined' && window.location) {
            const params = new URLSearchParams(window.location.search);
            const t = params.get('test') || params.get('testId');
            if (t) return getNormalizedTestId(t);
        }
        return 'test1';
    }

    function getSavedSessionId(tid) {
        try {
            const sessionKey = getStorageSessionKey(tid);
            const saved = localStorage.getItem(sessionKey);
            if (saved) return saved;
            if (getNormalizedTestId(tid) === 'test1') {
                return localStorage.getItem('ielts_listening_session_id') || '';
            }
        } catch (_) {}
        return '';
    }

    function saveListeningDraft(payload) {
        if (typeof window !== 'undefined' && window.saveModuleDraft) {
            return window.saveModuleDraft(STATE.testId, 'listening', payload);
        }
        try {
            const key = getStorageDraftKey(STATE.testId);
            localStorage.setItem(key, JSON.stringify(payload));
            if (payload && payload.sessionId) {
                localStorage.setItem(getStorageSessionKey(STATE.testId), payload.sessionId);
            }
            return true;
        } catch (_) {
            return false;
        }
    }

    function loadListeningDraft(sessionId) {
        if (typeof window !== 'undefined' && window.loadModuleDraft) {
            return window.loadModuleDraft(STATE.testId, 'listening', { sessionId, deviceId: STATE.deviceId });
        }
        try {
            const key = getStorageDraftKey(STATE.testId);
            const raw = localStorage.getItem(key);
            if (raw) return JSON.parse(raw);
            if (getNormalizedTestId(STATE.testId) === 'test1' && sessionId) {
                const legacy = localStorage.getItem(`ielts_listening_backup_${sessionId}`);
                if (legacy) {
                    const parsed = JSON.parse(legacy);
                    saveListeningDraft(parsed);
                    return parsed;
                }
            }
        } catch (_) {}
        return null;
    }

    function clearListeningDraft(sessionId) {
        if (typeof window !== 'undefined' && window.clearModuleDraft) {
            window.clearModuleDraft(STATE.testId, 'listening', { sessionId, deviceId: STATE.deviceId });
        } else {
            try {
                localStorage.removeItem(getStorageDraftKey(STATE.testId));
                localStorage.removeItem(getStorageSessionKey(STATE.testId));
                if (getNormalizedTestId(STATE.testId) === 'test1') {
                    localStorage.removeItem('ielts_listening_session_id');
                    if (sessionId) localStorage.removeItem(`ielts_listening_backup_${sessionId}`);
                }
            } catch (_) {}
        }
    }

    const initialTestId = getInitialTestId();

    const STATE = {
        testId: initialTestId,
        sessionId: getSavedSessionId(initialTestId),
        deviceId: getOrSetDeviceId(),
        nama: '',
        kelas: '',
        testData: null,
        currentSectionIdx: 0, // 0 = Sec 1, 1 = Sec 2, 2 = Sec 3, 3 = Sec 4
        currentGroupIdx: 0,
        answers: {},
        audio: null,
        audioDuration: 0,
        audioPlaying: false,
        isReviewCountdown: false,
        reviewTimeRemaining: 30,
        reviewInterval: null,
        startedAt: null,
        autosaveTimer: null,
        submitted: false,
        results: null
    };

    function getOrSetDeviceId() {
        let dev = localStorage.getItem('ielts_shared_device_id');
        if (!dev) {
            dev = localStorage.getItem('ielts_listening_device_id') ||
                  localStorage.getItem('ielts_reading_device_id') ||
                  localStorage.getItem('ielts_writing_device_id') ||
                  localStorage.getItem('ielts_speaking_device_id');
            if (!dev) {
                dev = 'dev_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
            }
            localStorage.setItem('ielts_shared_device_id', dev);
        }
        return dev;
    }

    function getIeltsToken() {
        return localStorage.getItem('ielts_premium_token') || localStorage.getItem('ielts_token') || '';
    }

    // --- Inisialisasi DOM Aman (Mencegah Lewatnya DOMContentLoaded di Safari) ---
    function onDomReady(fn) {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            setTimeout(fn, 1);
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    onDomReady(() => {
        renderDynamicTestHeader();
        if (!checkTestAvailability()) return;
        initSoundCheck();
        initStartForm();
        prefillUserData();
        checkExistingSession();
    });

    function checkTestAvailability() {
        const cfg = (typeof getMockTestConfig === 'function') ? getMockTestConfig(STATE.testId) : null;
        if (cfg && cfg.available === false) {
            const hasLicense = Boolean(getIeltsToken());
            const startForm = document.getElementById('form-start-test');
            const startContainer = startForm ? startForm.closest('.grid') : null;
            if (startContainer) {
                startContainer.innerHTML = `
                    <div id="unavailable-test-notice" class="md:col-span-2 p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 space-y-3">
                        <div class="flex items-center gap-2 text-amber-800 font-extrabold text-sm uppercase tracking-wide">
                            <span>🔒</span> <span>Simulasi ${cfg.label || 'Mock Test 2'} Segera Hadir</span>
                        </div>
                        <p class="text-xs sm:text-sm text-amber-900 leading-relaxed">
                            Set simulasi lengkap <strong>${cfg.label || 'Mock Test 2'}</strong> saat ini masih dalam proses finalisasi rekaman audio dan kalibrasi soal. Akses simulasi belum dibuka dan tidak ada sesi ujian yang dibuat di sistem.
                        </p>
                        ${hasLicense ? `
                        <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                            <span>✅</span> <span>Lisensi Anda terdeteksi aktif. Anda akan otomatis mendapat akses saat paket ini resmi dirilis.</span>
                        </div>
                        ` : ''}
                        <div class="pt-2 flex flex-wrap gap-2.5">
                            <a href="/ielts/index.html" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition">
                                &larr; Kembali ke Pilihan Tes (Coba Mock Test 1 Gratis)
                            </a>
                            <a href="/ielts/premium-saya.html" class="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-xs transition">
                                Info Lisensi &amp; Paket
                            </a>
                        </div>
                    </div>
                `;
            }
            const resumeBanner = document.getElementById('banner-resume-session');
            if (resumeBanner) resumeBanner.classList.add('hidden');
            return false;
        }
        return true;
    }

    function renderDynamicTestHeader() {
        const norm = (typeof normalizeTestId === 'function') ? normalizeTestId(STATE.testId) : (STATE.testId || 'test1');
        const testNum = norm.replace(/^test/, '');
        const badgeLabel = document.getElementById('listening-badge-label');
        if (badgeLabel) {
            badgeLabel.textContent = `Complete Academic Listening Simulation • Test ${testNum}`;
        }
        const cfg = (typeof getMockTestConfig === 'function') ? getMockTestConfig(STATE.testId) : null;
        const testLabel = cfg?.label || `Mock Test ${testNum}`;
        if (document.title && !document.title.includes(testLabel)) {
            document.title = `Simulasi IELTS Academic Listening (${testLabel}) — AjarKita`;
        }
    }

    function prefillUserData() {
        const namaInput = document.getElementById('input-nama-peserta');
        const kelasInput = document.getElementById('input-kelas-peserta');
        if (!namaInput && !kelasInput) return;

        const savedNama = localStorage.getItem('ielts_student_name') || '';
        const savedKelas = localStorage.getItem('ielts_student_class') || '';

        if (namaInput && !namaInput.value && savedNama) namaInput.value = savedNama;
        if (kelasInput && !kelasInput.value && savedKelas) kelasInput.value = savedKelas;
    }

    // --- Sound Check ---
    let soundCheckAudio = null;
    function initSoundCheck() {
        const btn = document.getElementById('btn-sound-check');
        const status = document.getElementById('sound-check-status');
        if (!btn) return;

        btn.addEventListener('click', () => {
            if (soundCheckAudio && !soundCheckAudio.paused) {
                soundCheckAudio.pause();
                soundCheckAudio.currentTime = 0;
                btn.innerHTML = '<span>🔊</span> Putar Tes Suara';
                status.textContent = 'Tes audio dihentikan.';
                return;
            }

            if (!soundCheckAudio) {
                soundCheckAudio = new Audio('/storage/listening/sound_check.mp3');
                soundCheckAudio.addEventListener('ended', () => {
                    btn.innerHTML = '<span>🔊</span> Putar Ulang Tes Suara';
                    status.innerHTML = '<span class="text-teal-600 font-bold">✓ Suara selesai diputar. Jika terdengar jelas, volume Anda sudah pas!</span>';
                });
                soundCheckAudio.addEventListener('error', () => {
                    status.innerHTML = '<span class="text-amber-600">Perhatian: File tes suara tidak dapat dimuat, periksa sambungan internet Anda.</span>';
                });
            }

            btn.innerHTML = '<span>⏸</span> Mengetes Suara...';
            status.textContent = 'Mendengarkan contoh percakapan audio...';
            soundCheckAudio.play().catch(e => {
                status.innerHTML = '<span class="text-rose-600">Autoplay terblokir browser. Klik tombol untuk mengizinkan audio.</span>';
            });
        });
    }

    // --- Form Pendaftaran Peserta ---
    function initStartForm() {
        const form = document.getElementById('form-start-test');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const namaInput = document.getElementById('input-nama-peserta');
            const kelasInput = document.getElementById('input-kelas-peserta');
            const btnSubmit = document.getElementById('btn-start-test');

            const nama = namaInput ? namaInput.value.trim() : '';
            const kelas = kelasInput ? kelasInput.value.trim() : '';

            if (nama.length < 2) {
                alert('Silakan masukkan Nama Lengkap Anda (minimal 2 huruf).');
                namaInput.focus();
                return;
            }
            if (kelas.length < 1) {
                alert('Silakan pilih atau ketikkan Kelas Anda (contoh: 12 MIPA 1).');
                kelasInput.focus();
                return;
            }

            STATE.nama = nama;
            STATE.kelas = kelas;

            try {
                localStorage.setItem('ielts_student_name', nama);
                localStorage.setItem('ielts_student_class', kelas);
            } catch {}

            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<span>⏳</span> Mempersiapkan Ruang Ujian...';

            try {
                await startOrResumeSession();
            } catch (err) {
                console.error(err);
                alert('Gagal memulai tes: ' + (err.message || 'Periksa koneksi internet Anda.'));
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = '<span>🚀</span> Mulai Tes Listening Sekarang';
            }
        });
    }

    // --- Memeriksa Sesi Tersimpan (Resume On Refresh) ---
    async function checkExistingSession() {
        const savedSessionId = getSavedSessionId(STATE.testId);
        if (!savedSessionId) return;

        const banner = document.getElementById('banner-resume-session');
        const resumeBtn = document.getElementById('btn-resume-session');
        const discardBtn = document.getElementById('btn-discard-session');

        if (banner) {
            banner.classList.remove('hidden');
            const draft = loadListeningDraft(savedSessionId);
            const timeEl = document.getElementById('resume-time-listening-val');
            if (timeEl && draft?.savedAt) {
                timeEl.textContent = typeof formatDraftTime === 'function' ? formatDraftTime(draft.savedAt) : new Date(draft.savedAt).toLocaleTimeString();
            }
        }

        if (resumeBtn) {
            resumeBtn.addEventListener('click', async () => {
                resumeBtn.disabled = true;
                resumeBtn.textContent = 'Memulihkan sesi...';
                try {
                    await startOrResumeSession(savedSessionId);
                } catch (e) {
                    alert('Sesi lama sudah kadaluarsa atau selesai. Silakan isi form untuk memulai tes baru.');
                    clearSavedSession();
                    if (banner) banner.classList.add('hidden');
                }
            });
        }

        if (discardBtn) {
            discardBtn.addEventListener('click', () => {
                if (confirm('Hapus draf dan mulai baru?\n\nPERINGATAN PRIVASI (Komputer Bersama):\nSeluruh jawaban dan ID sesi aktif di perangkat ini akan dibersihkan total.')) {
                    clearSavedSession();
                    if (banner) banner.classList.add('hidden');
                }
            });
        }
    }

    function clearSavedSession() {
        clearListeningDraft(STATE.sessionId);
        STATE.sessionId = '';
        STATE.answers = {};
    }

    // --- Hubungi Server untuk Memulai Sesi ---
    async function startOrResumeSession(overrideSessionId) {
        const token = getIeltsToken();
        const payload = {
            testId: STATE.testId,
            deviceId: STATE.deviceId,
            nama: STATE.nama || 'Peserta',
            kelas: STATE.kelas || 'Umum',
            sessionId: overrideSessionId || STATE.sessionId || undefined,
            token: token || undefined
        };

        const headers = {
            'Content-Type': 'application/json',
            'X-Device-Id': STATE.deviceId
        };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const res = await fetch(`${API_BASE}/listening/start`, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.error || 'Server menolak permintaan memulai tes.');
        }

        const data = await res.json();

        if (data.alreadySubmitted) {
            alert('Sesi ini sudah pernah disubmit sebelumnya.');
            clearSavedSession();
            window.location.reload();
            return;
        }

        STATE.sessionId = data.sessionId;
        try {
            localStorage.setItem(getStorageSessionKey(STATE.testId), data.sessionId);
            if (getNormalizedTestId(STATE.testId) === 'test1') {
                localStorage.setItem('ielts_listening_session_id', data.sessionId);
            }
        } catch (_) {}

        STATE.testData = data.testData;
        STATE.startedAt = data.startedAt;
        STATE.currentSectionIdx = (data.currentSec ? data.currentSec - 1 : 0);
        STATE.answers = data.savedAnswers || {};

        // Pulihkan draf lokal jika data jawaban di server masih kosong tapi ada backup lokal
        const draft = loadListeningDraft(data.sessionId);
        if (draft && draft.answers && (!data.savedAnswers || Object.keys(data.savedAnswers).length === 0)) {
            STATE.answers = draft.answers;
        }

        // Mulai tampilan ujian
        transitionToExamView();
    }

    // --- Transisi dari Intro ke Ujian Aktif ---
    function transitionToExamView() {
        const introSection = document.getElementById('view-intro-instruction');
        const examSection = document.getElementById('view-active-exam');

        if (introSection) introSection.classList.add('hidden');
        if (examSection) examSection.classList.remove('hidden');

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Mulai timer autosave berkala (tiap 30 detik)
        if (STATE.autosaveTimer) clearInterval(STATE.autosaveTimer);
        STATE.autosaveTimer = setInterval(autoSaveProgress, 30000);

        // Render Navigasi Soal 1-40
        renderQuestionNavigator();

        // Render Section Pertama
        loadSection(STATE.currentSectionIdx);
    }

    // --- Render Navigasi Soal (1-40) ---
    function renderQuestionNavigator() {
        const container = document.getElementById('question-nav-grid');
        if (!container) return;

        let html = '';
        for (let i = 1; i <= 40; i++) {
            const isAnswered = isQuestionAnswered(i);
            const statusClass = isAnswered 
                ? 'bg-teal-600 text-white border-teal-600 font-bold' 
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300';

            html += `
                <button type="button" 
                        id="nav-btn-q${i}" 
                        onclick="window.ListeningEngine.jumpToQuestion(${i})" 
                        class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer font-mono ${statusClass}"
                        title="Soal nomor ${i}">
                    ${i}
                </button>
            `;
        }
        container.innerHTML = html;
        updateAnsweredStats();
    }

    function isQuestionAnswered(qNo) {
        const val = STATE.answers[String(qNo)] || STATE.answers[qNo];
        return typeof val === 'string' && val.trim().length > 0;
    }

    function updateAnsweredStats() {
        let count = 0;
        for (let i = 1; i <= 40; i++) {
            if (isQuestionAnswered(i)) count++;
        }
        const badge = document.getElementById('answered-count-badge');
        if (badge) {
            badge.textContent = `${count} / 40 Terjawab`;
        }
    }

    function updateNavButtonState(qNo) {
        const btn = document.getElementById(`nav-btn-q${qNo}`);
        if (!btn) return;
        if (isQuestionAnswered(qNo)) {
            btn.className = 'w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer font-mono bg-teal-600 text-white border-teal-600 font-bold';
        } else {
            btn.className = 'w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer font-mono bg-white text-slate-700 border-slate-200 hover:border-slate-300';
        }
        updateAnsweredStats();
    }

    // --- Muat dan Render Section Tertentu ---
    function loadSection(sectionIdx) {
        STATE.currentSectionIdx = sectionIdx;
        STATE.currentGroupIdx = 0;

        const secData = STATE.testData.sections[sectionIdx];
        if (!secData) return;

        // Update indikator header
        const secBadge = document.getElementById('current-section-badge');
        const secTitle = document.getElementById('current-section-title');
        const secInstr = document.getElementById('current-section-instruction');

        if (secBadge) secBadge.textContent = `SECTION ${secData.section_no} DARI 4`;
        if (secTitle) secTitle.textContent = secData.context_title;
        if (secInstr) secInstr.textContent = secData.instruction;

        // Render kelompok soal
        renderGroups(secData.groups);

        // Siapkan Audio Section
        setupSectionAudio(secData.audio_file, secData.section_no);
    }

    // --- Setup Audio Kontinu Sekali Putar (No Pause, No Seek, No Replay) ---
    function setupSectionAudio(audioSrc, secNo) {
        // Hentikan audio sebelumnya jika ada
        if (STATE.audio) {
            STATE.audio.pause();
            STATE.audio.src = '';
            STATE.audio = null;
        }

        const audioNotice = document.getElementById('audio-playback-status');
        const progressBar = document.getElementById('audio-progress-bar');
        const timerDisplay = document.getElementById('audio-time-display');

        STATE.audio = new Audio(audioSrc);
        STATE.audio.preload = 'auto';

        STATE.audio.addEventListener('loadedmetadata', () => {
            STATE.audioDuration = STATE.audio.duration;
            if (timerDisplay) {
                timerDisplay.textContent = `00:00 / ${formatTime(STATE.audioDuration)}`;
            }
        });

        STATE.audio.addEventListener('timeupdate', () => {
            if (!STATE.audio) return;
            const cur = STATE.audio.currentTime;
            const dur = STATE.audio.duration || 1;
            const pct = Math.min(100, (cur / dur) * 100);

            if (progressBar) progressBar.style.width = `${pct}%`;
            if (timerDisplay) {
                timerDisplay.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
            }
        });

        STATE.audio.addEventListener('ended', () => {
            STATE.audioPlaying = false;
            if (audioNotice) {
                audioNotice.innerHTML = `<span class="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-xs"><span>⏸</span> Audio Section ${secNo} Selesai diputar. Waktu pengecekan jawaban.</span>`;
            }
            startReviewCountdown(secNo);
        });

        STATE.audio.addEventListener('error', (err) => {
            console.error('Audio load error:', err);
            if (audioNotice) {
                audioNotice.innerHTML = `<span class="text-rose-600 text-xs font-semibold">⚠️ Audio buffering atau jaringan lambat. Harap tunggu...</span>`;
            }
        });

        // Putar audio otomatis
        STATE.audio.play().then(() => {
            STATE.audioPlaying = true;
            if (audioNotice) {
                audioNotice.innerHTML = `
                    <span class="inline-flex items-center gap-2 text-indigo-700 font-semibold text-xs animate-pulse">
                        <span class="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block"></span>
                        <span>🎧 Audio Sedang Diputar (Sekali Putar • Jangan Tutup Halaman)</span>
                    </span>
                `;
            }
        }).catch(err => {
            console.warn('Autoplay prevented:', err);
            if (audioNotice) {
                audioNotice.innerHTML = `
                    <button type="button" onclick="window.ListeningEngine.resumeAudio()" class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition">
                        ▶ Klik untuk Mulai Putar Audio Section ${secNo}
                    </button>
                `;
            }
        });
    }

    function formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // --- Jeda Review 30 Detik Antar Section ---
    function startReviewCountdown(secNo) {
        STATE.isReviewCountdown = true;
        STATE.reviewTimeRemaining = 30; // 30 detik sesuai standar IELTS

        const modal = document.getElementById('review-countdown-modal');
        const timerText = document.getElementById('review-timer-seconds');
        const nextSecLabel = document.getElementById('review-next-section-label');

        if (modal) modal.classList.remove('hidden');
        if (nextSecLabel) {
            nextSecLabel.textContent = secNo < 4 ? `Section ${secNo + 1}` : 'Halaman Penyerahan Jawaban';
        }

        if (STATE.reviewInterval) clearInterval(STATE.reviewInterval);

        STATE.reviewInterval = setInterval(() => {
            STATE.reviewTimeRemaining--;
            if (timerText) timerText.textContent = `${STATE.reviewTimeRemaining}s`;

            if (STATE.reviewTimeRemaining <= 0) {
                clearInterval(STATE.reviewInterval);
                finishReviewCountdown(secNo);
            }
        }, 1000);
    }

    function finishReviewCountdown(currentSecNo) {
        if (STATE.reviewInterval) clearInterval(STATE.reviewInterval);
        const modal = document.getElementById('review-countdown-modal');
        if (modal) modal.classList.add('hidden');
        STATE.isReviewCountdown = false;

        // Auto-save sebelum ganti section
        autoSaveProgress();

        if (currentSecNo < 4) {
            // Lanjut ke section berikutnya
            loadSection(currentSecNo); // currentSecNo adalah 1-based, index berikutnya = currentSecNo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Section 4 selesai, buka form submit
            openSubmitConfirmation();
        }
    }

    // --- Render Soal per Kelompok (Chunking) ---
    function renderGroups(groups) {
        const container = document.getElementById('groups-container');
        if (!container) return;

        let html = '';

        groups.forEach((grp, idx) => {
            const rangeStr = grp.range ? `Questions ${grp.range[0]}–${grp.range[1]}` : '';

            html += `
                <div class="group-card bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6 mb-8" id="group-card-${grp.group_id}">
                    <!-- Group Header -->
                    <div class="border-b border-slate-100 pb-4">
                        <div class="flex items-center justify-between mb-1">
                            <span class="text-xs font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                ${rangeStr}
                            </span>
                        </div>
                        <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-2">${grp.heading}</h3>
                        <p class="text-xs sm:text-sm text-slate-600 mt-1 italic font-medium">${grp.instruction}</p>
                    </div>

                    <!-- Render Sesuai Tipe Soal -->
                    <div class="group-body space-y-4">
                        ${renderGroupContent(grp)}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;

        // Attach event listeners ke seluruh input
        attachQuestionInputListeners();
    }

    function renderGroupContent(grp) {
        switch (grp.type) {
            case 'completion':
                return renderCompletionGroup(grp);
            case 'multiple_choice_single':
                return renderMultipleChoiceGroup(grp);
            case 'map_labelling':
                return renderMapLabellingGroup(grp);
            case 'matching':
                return renderMatchingGroup(grp);
            default:
                return `<p class="text-xs text-slate-400">Tipe soal belum terdaftar.</p>`;
        }
    }

    // 1. Completion (Form / Notes / Flowchart)
    function renderCompletionGroup(grp) {
        return grp.questions.map(q => {
            const savedVal = STATE.answers[String(q.no)] || '';
            const maxWordNotice = q.max_words ? `<span class="text-[10px] text-slate-400 block mt-1">(Batas: maksimal ${q.max_words} kata)</span>` : '';

            return `
                <div class="question-row p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition" id="question-row-${q.no}">
                    <div class="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <div class="flex-grow">
                            ${q.prefix ? `<span>${q.prefix}</span>` : ''}
                            <input type="text" 
                                   id="q-input-${q.no}" 
                                   data-qno="${q.no}" 
                                   value="${escapeHtml(savedVal)}" 
                                   placeholder="${q.placeholder || 'Ketik jawaban...'}" 
                                   autocomplete="off"
                                   class="q-text-input inline-block min-w-[140px] max-w-xs px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 shadow-2xs transition">
                            ${q.suffix ? `<span>${q.suffix}</span>` : ''}
                            ${maxWordNotice}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 2. Multiple Choice Single (A, B, C)
    function renderMultipleChoiceGroup(grp) {
        return grp.questions.map(q => {
            const savedVal = STATE.answers[String(q.no)] || '';

            const optionsHtml = q.options.map(opt => {
                const isChecked = savedVal.toUpperCase() === opt.letter.toUpperCase();
                const checkedClass = isChecked ? 'border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600' : 'border-slate-200 hover:border-slate-300 bg-white';

                return `
                    <label class="q-option-card flex items-start gap-3 p-3.5 rounded-xl border ${checkedClass} cursor-pointer transition select-none" data-qno="${q.no}" data-opt="${opt.letter}">
                        <input type="radio" 
                               name="q_mc_${q.no}" 
                               value="${opt.letter}" 
                               ${isChecked ? 'checked' : ''} 
                               class="mt-0.5 text-indigo-600 focus:ring-indigo-500">
                        <div class="text-xs sm:text-sm text-slate-700">
                            <strong class="text-indigo-900 mr-1">${opt.letter}.</strong>
                            <span>${opt.text}</span>
                        </div>
                    </label>
                `;
            }).join('');

            return `
                <div class="question-row p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition space-y-3" id="question-row-${q.no}">
                    <div class="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <span>${q.prompt}</span>
                    </div>
                    <div class="space-y-2 pl-8">
                        ${optionsHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // 3. Map / Plan Labelling
    function renderMapLabellingGroup(grp) {
        const legendHtml = (grp.options_legend || []).map(opt => `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
                <strong class="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] font-bold">${opt.letter}</strong>
                <span>${opt.text}</span>
            </span>
        `).join('');

        const questionsHtml = grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toUpperCase();

            const selectOptions = (grp.options_legend || []).map(opt => `
                <option value="${opt.letter}" ${savedVal === opt.letter ? 'selected' : ''}>
                    ${opt.letter} - ${opt.text}
                </option>
            `).join('');

            return `
                <div class="question-row p-3.5 rounded-xl bg-white border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3" id="question-row-${q.no}">
                    <div class="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <span>${q.label_target}</span>
                    </div>
                    <div class="shrink-0 pl-8 sm:pl-0">
                        <select id="q-select-${q.no}" 
                                data-qno="${q.no}" 
                                class="q-select-input px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-xs font-bold text-indigo-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 cursor-pointer">
                            <option value="">-- Pilih Huruf (A-F) --</option>
                            ${selectOptions}
                        </select>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="space-y-6">
                <!-- SVG Map Container -->
                <div class="p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">📍 Peta Denah Wilayah</p>
                    <div class="max-w-xl mx-auto overflow-hidden rounded-xl border border-slate-200 shadow-xs bg-white p-2">
                        <img src="${grp.map_image}" alt="Denah Kebun Botani" class="w-full h-auto object-contain">
                    </div>
                    <!-- Legend -->
                    <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
                        ${legendHtml}
                    </div>
                </div>

                <!-- Questions List -->
                <div class="space-y-3">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }

    // 4. Matching Pool
    function renderMatchingGroup(grp) {
        const poolHtml = (grp.matching_pool || []).map(item => `
            <div class="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700">
                <span class="w-6 h-6 rounded bg-teal-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0">${item.letter}</span>
                <span class="font-medium">${item.text}</span>
            </div>
        `).join('');

        const questionsHtml = grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toUpperCase();

            const selectOptions = (grp.matching_pool || []).map(item => `
                <option value="${item.letter}" ${savedVal === item.letter ? 'selected' : ''}>
                    ${item.letter} - ${item.text}
                </option>
            `).join('');

            return `
                <div class="question-row p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3" id="question-row-${q.no}">
                    <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                        <span class="font-extrabold text-teal-700 shrink-0 w-8">[${q.no}]</span>
                        <span class="font-medium">${q.prompt}</span>
                    </div>
                    <div class="shrink-0 pl-8 sm:pl-0">
                        <select id="q-select-${q.no}" 
                                data-qno="${q.no}" 
                                class="q-select-input px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-teal-900 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/10 cursor-pointer">
                            <option value="">-- Pilih Huruf --</option>
                            ${selectOptions}
                        </select>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="space-y-5">
                <!-- Matching Pool Box -->
                <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-teal-800">Daftar Pilihan Kategori:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        ${poolHtml}
                    </div>
                </div>

                <!-- Questions List -->
                <div class="space-y-3">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }

    // --- Pasang Event Listener Input Jawaban ---
    function attachQuestionInputListeners() {
        // Text Inputs (Completion)
        document.querySelectorAll('.q-text-input').forEach(input => {
            input.addEventListener('input', (e) => {
                const qNo = e.target.getAttribute('data-qno');
                const val = e.target.value;
                STATE.answers[qNo] = val;
                updateNavButtonState(qNo);
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    // Pindah focus ke input soal berikutnya
                    const nextQ = parseInt(e.target.getAttribute('data-qno'), 10) + 1;
                    const nextInput = document.getElementById(`q-input-${nextQ}`) || document.getElementById(`q-select-${nextQ}`);
                    if (nextInput) nextInput.focus();
                }
            });
        });

        // Radio Inputs (Multiple Choice)
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const card = e.target.closest('.q-option-card');
                if (!card) return;
                const qNo = card.getAttribute('data-qno');
                const val = card.getAttribute('data-opt');
                STATE.answers[qNo] = val;

                // Update styling radio cards dalam question yang sama
                const row = document.getElementById(`question-row-${qNo}`);
                if (row) {
                    row.querySelectorAll('.q-option-card').forEach(c => {
                        if (c.getAttribute('data-opt') === val) {
                            c.className = 'q-option-card flex items-start gap-3 p-3.5 rounded-xl border border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600 cursor-pointer transition select-none';
                        } else {
                            c.className = 'q-option-card flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white cursor-pointer transition select-none';
                        }
                    });
                }

                updateNavButtonState(qNo);
            });
        });

        // Select Inputs (Map & Matching)
        document.querySelectorAll('.q-select-input').forEach(select => {
            select.addEventListener('change', (e) => {
                const qNo = e.target.getAttribute('data-qno');
                const val = e.target.value;
                STATE.answers[qNo] = val;
                updateNavButtonState(qNo);
            });
        });
    }

    // --- Autosave Progres ke Server ---
    async function autoSaveProgress() {
        if (!STATE.sessionId || STATE.submitted) return;

        // Selalu cadangkan instan ke format baku localStorage (Zero data loss)
        saveListeningDraft({
            sessionId: STATE.sessionId,
            answers: STATE.answers,
            currentSec: STATE.currentSectionIdx + 1,
            savedAt: Date.now()
        });

        const badge = document.getElementById('autosave-indicator');
        if (badge) {
            badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block"></span> <span>Menyimpan...</span>`;
        }

        try {
            const res = await fetch(`${API_BASE}/listening/save-progress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                body: JSON.stringify({
                    sessionId: STATE.sessionId,
                    deviceId: STATE.deviceId,
                    currentSec: STATE.currentSectionIdx + 1,
                    answers: STATE.answers
                })
            });

            const data = await res.json().catch(() => ({}));
            if (res.headers.get('X-Eco-Mode') === 'active' || data.eco_mode) {
                STATE.ecoMode = true;
            }

            if (res.status === 429 || res.status === 503 || data.quota_exceeded) {
                if (badge) {
                    badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-500 inline-block"></span> <span class="text-amber-700 font-bold">Jawaban aman di localStorage (Kuota Server Penuh)</span>`;
                }
                return;
            }

            if (res.ok && badge) {
                badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> <span class="text-slate-500">Tersimpan otomatis</span>`;
            }
        } catch (err) {
            console.warn('Autosave failed:', err);
            if (badge) {
                badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-400 inline-block"></span> <span class="text-slate-500">Tersimpan di perangkat (offline)</span>`;
            }
        }
    }

    // --- Jump / Scroll ke Soal Tertentu ---
    function jumpToQuestion(qNo) {
        // Tentukan ada di section mana soal ini
        const targetSecIdx = qNo <= 10 ? 0 : qNo <= 20 ? 1 : qNo <= 30 ? 2 : 3;

        if (targetSecIdx !== STATE.currentSectionIdx) {
            // Berpindah section
            loadSection(targetSecIdx);
        }

        setTimeout(() => {
            const row = document.getElementById(`question-row-${qNo}`);
            if (row) {
                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                row.classList.add('ring-2', 'ring-indigo-600');
                setTimeout(() => row.classList.remove('ring-2', 'ring-indigo-600'), 1500);

                const input = document.getElementById(`q-input-${qNo}`) || document.getElementById(`q-select-${qNo}`);
                if (input) input.focus();
            }
        }, 150);
    }

    // --- Submit Konfirmasi Modal ---
    function openSubmitConfirmation() {
        const modal = document.getElementById('submit-confirm-modal');
        const summaryText = document.getElementById('submit-modal-summary');
        if (!modal) return;

        let answeredCount = 0;
        for (let i = 1; i <= 40; i++) {
            if (isQuestionAnswered(i)) answeredCount++;
        }

        if (summaryText) {
            summaryText.innerHTML = `
                Anda telah menjawab <strong>${answeredCount}</strong> dari <strong>40</strong> soal.<br>
                ${answeredCount < 40 ? `<span class="text-amber-600 font-semibold">Terdapat ${40 - answeredCount} soal yang masih kosong.</span>` : '<span class="text-teal-600 font-semibold">Semua 40 soal telah terisi!</span>'}
            `;
        }

        modal.classList.remove('hidden');
    }

    function closeSubmitConfirmation() {
        const modal = document.getElementById('submit-confirm-modal');
        if (modal) modal.classList.add('hidden');
    }

    // --- Submit Tes ke Server untuk Penilaian ---
    async function submitTest() {
        closeSubmitConfirmation();

        const btnSubmit = document.getElementById('btn-confirm-submit');
        if (btnSubmit) {
            btnSubmit.disabled = true;
            btnSubmit.textContent = 'Memeriksa & Menghitung Skor...';
        }

        // Hentikan audio jika masih aktif
        if (STATE.audio) {
            STATE.audio.pause();
            STATE.audio = null;
        }
        if (STATE.autosaveTimer) clearInterval(STATE.autosaveTimer);

        const token = getIeltsToken();
        try {
            const headers = {
                'Content-Type': 'application/json',
                'X-Device-Id': STATE.deviceId
            };
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const res = await fetch(`${API_BASE}/listening/submit`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    sessionId: STATE.sessionId,
                    deviceId: STATE.deviceId,
                    answers: STATE.answers,
                    token: token || undefined
                })
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || 'Server gagal memproses penilaian.');
            }

            const data = await res.json();
            STATE.submitted = true;
            STATE.results = data;

            // Bersihkan sesi aktif dari localStorage
            clearSavedSession();

            // Tampilkan Halaman Hasil & Review
            renderResultsView(data);

        } catch (err) {
            console.error('Submit error:', err);
            alert('Gagal mengirim jawaban: ' + (err.message || 'Cek koneksi internet.'));
            if (btnSubmit) {
                btnSubmit.disabled = false;
                btnSubmit.textContent = 'Ya, Kirim & Nilai Sekarang';
            }
        }
    }

    // --- Render Tampilan Hasil & Review Diagnostik ---
    function renderResultsView(res) {
        const examSection = document.getElementById('view-active-exam');
        const resultsSection = document.getElementById('view-test-results');

        if (examSection) examSection.classList.add('hidden');
        if (resultsSection) resultsSection.classList.remove('hidden');

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update Skor & Band
        const bandEl = document.getElementById('res-estimated-band');
        const rawEl = document.getElementById('res-raw-score');
        const nameEl = document.getElementById('res-student-name');
        const classEl = document.getElementById('res-student-class');

        if (bandEl) bandEl.textContent = Number(res.bandScore).toFixed(1);
        if (rawEl) rawEl.textContent = `${res.rawScore} / 40`;
        if (nameEl) nameEl.textContent = STATE.nama || 'Peserta';
        if (classEl) classEl.textContent = STATE.kelas || '-';

        // Breakdown Section
        const s1Score = (res.sectionScores && res.sectionScores.s1) || 0;
        const s2Score = (res.sectionScores && res.sectionScores.s2) || 0;
        const s3Score = (res.sectionScores && res.sectionScores.s3) || 0;
        const s4Score = (res.sectionScores && res.sectionScores.s4) || 0;

        updateSectionBar('s1', s1Score);
        updateSectionBar('s2', s2Score);
        updateSectionBar('s3', s3Score);
        updateSectionBar('s4', s4Score);

        // Render Question Reviews
        renderQuestionReviewList(res.questionReviews || []);

        // Render Transcripts
        renderTranscripts(res.transcripts || {});
    }

    function updateSectionBar(secKey, score) {
        const textEl = document.getElementById(`res-score-${secKey}`);
        const barEl = document.getElementById(`res-bar-${secKey}`);
        if (textEl) textEl.textContent = `${score} / 10`;
        if (barEl) barEl.style.width = `${(score / 10) * 100}%`;
    }

    // --- Render Daftar Review Soal (Jawaban Peserta vs Kunci) ---
    function renderQuestionReviewList(reviews, filter = 'all') {
        const container = document.getElementById('results-questions-container');
        if (!container) return;

        const filtered = reviews.filter(r => {
            if (filter === 'correct') return r.isCorrect;
            if (filter === 'incorrect') return !r.isCorrect;
            return true;
        });

        if (filtered.length === 0) {
            container.innerHTML = `<div class="text-center py-8 text-slate-400 text-xs">Tidak ada soal pada kategori filter ini.</div>`;
            return;
        }

        container.innerHTML = filtered.map(r => {
            const statusBadge = r.isCorrect
                ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">✓ BENAR</span>`
                : `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-100 text-rose-800 border border-rose-200">✗ SALAH</span>`;

            const studentText = r.studentAnswer && r.studentAnswer.trim().length > 0 
                ? escapeHtml(r.studentAnswer) 
                : '<em class="text-slate-400">(Kosong / Tidak dijawab)</em>';

            const correctText = (r.correctAnswers || []).join(' / ');

            return `
                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-mono font-bold text-xs flex items-center justify-center">#${r.no}</span>
                            <span class="text-xs text-slate-500 font-medium">Section ${r.section}</span>
                        </div>
                        ${statusBadge}
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                        <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Jawaban Anda:</span>
                            <span class="${r.isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-semibold'}">${studentText}</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-teal-50/60 border border-teal-200/80">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-teal-700 block mb-1">Kunci Jawaban yang Diterima:</span>
                            <span class="text-teal-900 font-bold font-mono">${escapeHtml(correctText)}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- Render Transkrip Audio Lengkap ---
    function renderTranscripts(transcripts) {
        const container = document.getElementById('transcripts-container');
        if (!container) return;

        const secTitles = {
            "1": "Section 1: Community Photography Club Registration",
            "2": "Section 2: City Botanical Garden Orientation & Volunteer Roles",
            "3": "Section 3: Academic Phytoremediation Tutorial",
            "4": "Section 4: Biomimetic Architecture & Passive Ventilation Lecture"
        };

        let html = '';
        for (let sec = 1; sec <= 4; sec++) {
            const text = transcripts[String(sec)] || 'Transkrip tidak tersedia.';
            html += `
                <details class="group bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                    <summary class="flex items-center justify-between p-4 cursor-pointer font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 select-none transition">
                        <span class="flex items-center gap-2">
                            <span>📜</span>
                            <span>${secTitles[String(sec)]}</span>
                        </span>
                        <span class="text-slate-400 group-open:rotate-180 transition-transform">&darr;</span>
                    </summary>
                    <div class="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/50 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line">
                        ${escapeHtml(text)}
                    </div>
                </details>
            `;
        }

        container.innerHTML = html;
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

    // --- Export Public API ke Window ---
    window.ListeningEngine = {
        jumpToQuestion,
        loadSection,
        resumeAudio: () => {
            if (STATE.audio) STATE.audio.play();
        },
        openSubmitModal: openSubmitConfirmation,
        closeSubmitModal: closeSubmitConfirmation,
        submitTest: submitTest,
        finishReviewCountdown: () => finishReviewCountdown(STATE.currentSectionIdx + 1),
        filterReviews: (type) => {
            if (STATE.results) {
                renderQuestionReviewList(STATE.results.questionReviews || [], type);
            }
        }
    };

})();
