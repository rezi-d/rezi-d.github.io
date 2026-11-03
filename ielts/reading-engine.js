/**
 * IELTS-Style Academic Reading Practice Test Engine
 * AjarKita Academic Suite - kimia.ajarkita.my.id
 * 
 * Fitur:
 * - 3 Passage Akademik Orisinal, 40 Soal
 * - 7 Tipe Soal (TFNG, YNNG, Matching Headings, Matching Info, Multiple Choice, Summary/Sentence Completion, Short-Answer)
 * - Timer 60 Menit Mundur Sinkron Server (Anti-Refresh & Auto-Submit saat 00:00)
 * - Tampilan Adaptif: Desktop Split View 2-Kolom (Independen Scroll), Mobile Tabbed (Passage vs Soal)
 * - Navigasi 1-40 Cepat dengan Highlight Passage Aktif
 * - Autosave Berkala ke Cloudflare D1
 * - Penilaian Server-Side Aman (Kunci jawaban & bukti paragraf tidak terekspos sebelum submit)
 * - Analisis Diagnostik per Passage & per Tipe Soal
 */

(function() {
    'use strict';

    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? (window.location.port === '8787' ? '' : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev')
        : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev';

    const STATE = {
        testId: 'reading1',
        sessionId: localStorage.getItem('ielts_reading_session_id') || '',
        deviceId: getOrSetDeviceId(),
        nama: '',
        kelas: '',
        testData: null,
        currentPassageIdx: 0, // 0 = P1, 1 = P2, 2 = P3
        activeMobileTab: 'passage', // 'passage' | 'questions'
        answers: {},
        remainingSeconds: 3600, // 60 menit default
        timerInterval: null,
        autosaveTimer: null,
        startedAt: null,
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

    // --- Inisialisasi DOM & Event Listeners ---
    document.addEventListener('DOMContentLoaded', () => {
        initStartForm();
        checkExistingSession();
    });

    // --- Form Identitas Peserta ---
    function initStartForm() {
        const form = document.getElementById('form-start-reading');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const namaInput = document.getElementById('input-nama-reading');
            const kelasInput = document.getElementById('input-kelas-reading');
            const btnSubmit = document.getElementById('btn-start-reading');

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

            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<span>⏳</span> Mempersiapkan Ruang Ujian Reading...';

            try {
                await startOrResumeSession();
            } catch (err) {
                console.error(err);
                alert('Gagal memulai tes: ' + (err.message || 'Periksa koneksi internet Anda.'));
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = '<span>🚀</span> Mulai Ujian Reading Sekarang (60 Menit)';
            }
        });
    }

    // --- Cek Sesi Tersimpan (Resume On Refresh) ---
    async function checkExistingSession() {
        const savedSessionId = localStorage.getItem('ielts_reading_session_id');
        if (!savedSessionId) return;

        const banner = document.getElementById('banner-resume-reading');
        const resumeBtn = document.getElementById('btn-resume-reading');
        const discardBtn = document.getElementById('btn-discard-reading');

        if (banner) banner.classList.remove('hidden');

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
                if (confirm('Yakin ingin membuang sesi tes reading sebelumnya dan memulai dari awal?')) {
                    clearSavedSession();
                    if (banner) banner.classList.add('hidden');
                }
            });
        }
    }

    function clearSavedSession() {
        localStorage.removeItem('ielts_reading_session_id');
        STATE.sessionId = '';
        STATE.answers = {};
    }

    // --- Hubungi Server Memulai Sesi ---
    async function startOrResumeSession(overrideSessionId) {
        const payload = {
            testId: STATE.testId,
            deviceId: STATE.deviceId,
            nama: STATE.nama || 'Peserta',
            kelas: STATE.kelas || 'Umum',
            sessionId: overrideSessionId || STATE.sessionId || undefined
        };

        const res = await fetch(`${API_BASE}/reading/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Device-Id': STATE.deviceId
            },
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
        localStorage.setItem('ielts_reading_session_id', data.sessionId);
        STATE.testData = data.testData;
        STATE.startedAt = data.startedAt;
        STATE.remainingSeconds = typeof data.remainingSeconds === 'number' ? data.remainingSeconds : 3600;
        STATE.currentPassageIdx = (data.currentPassage ? data.currentPassage - 1 : 0);
        STATE.answers = data.savedAnswers || {};

        transitionToExamView();
    }

    // --- Transisi ke Ruang Ujian Aktif ---
    function transitionToExamView() {
        const introSection = document.getElementById('view-intro-reading');
        const examSection = document.getElementById('view-active-reading-exam');

        if (introSection) introSection.classList.add('hidden');
        if (examSection) examSection.classList.remove('hidden');

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Mulai Countdown Timer Server
        startCountdownTimer();

        // Mulai Autosave berkala (tiap 12 detik)
        if (STATE.autosaveTimer) clearInterval(STATE.autosaveTimer);
        STATE.autosaveTimer = setInterval(autoSaveProgress, 12000);

        // Render Navigasi Soal 1–40
        renderQuestionNavigator();

        // Render Passage Awal
        loadPassage(STATE.currentPassageIdx);
    }

    // --- Timer Server 60 Menit Mundur ---
    function startCountdownTimer() {
        if (STATE.timerInterval) clearInterval(STATE.timerInterval);

        updateTimerDisplay();

        STATE.timerInterval = setInterval(() => {
            STATE.remainingSeconds--;
            updateTimerDisplay();

            if (STATE.remainingSeconds <= 0) {
                clearInterval(STATE.timerInterval);
                alert('Waktu ujian 60 menit telah habis! Lembar jawaban Anda akan otomatis dikumpulkan dan dinilai oleh server.');
                submitTest(true); // force auto-submit
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const display = document.getElementById('reading-timer-display');
        const badge = document.getElementById('reading-timer-badge');
        if (!display) return;

        const secs = Math.max(0, STATE.remainingSeconds);
        const mins = Math.floor(secs / 60);
        const remSecs = secs % 60;
        const timeStr = `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;

        display.textContent = timeStr;

        if (badge) {
            if (secs <= 300) {
                // < 5 Menit: Merah berdenyut
                badge.className = 'px-3 py-1 rounded-xl bg-rose-600 text-white font-mono font-black text-xs sm:text-sm shadow-xs animate-pulse';
            } else if (secs <= 600) {
                // < 10 Menit: Amber
                badge.className = 'px-3 py-1 rounded-xl bg-amber-500 text-white font-mono font-bold text-xs sm:text-sm shadow-xs';
            } else {
                // Normal: Indigo/Dark
                badge.className = 'px-3 py-1 rounded-xl bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm shadow-xs';
            }
        }
    }

    // --- Render Navigasi Soal (1–40) ---
    function renderQuestionNavigator() {
        const container = document.getElementById('reading-nav-grid');
        if (!container) return;

        let html = '';
        for (let i = 1; i <= 40; i++) {
            const isAnswered = isQuestionAnswered(i);
            const passageOfQ = i <= 13 ? 0 : i <= 26 ? 1 : 2;
            const isCurrentPassage = passageOfQ === STATE.currentPassageIdx;

            const baseBorder = isCurrentPassage ? 'ring-2 ring-indigo-500/80 font-bold' : 'border-slate-200';
            const statusClass = isAnswered 
                ? 'bg-teal-600 text-white border-teal-600 font-bold' 
                : `bg-white text-slate-700 ${baseBorder} hover:border-slate-300`;

            html += `
                <button type="button" 
                        id="reading-nav-btn-q${i}" 
                        onclick="window.ReadingEngine.jumpToQuestion(${i})" 
                        class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer font-mono ${statusClass}"
                        title="Soal ${i} (Passage ${passageOfQ + 1})">
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
        const badge = document.getElementById('reading-answered-badge');
        if (badge) {
            badge.textContent = `${count} / 40 Terjawab`;
        }
    }

    function updateNavButtonState(qNo) {
        const btn = document.getElementById(`reading-nav-btn-q${qNo}`);
        if (!btn) return;

        const passageOfQ = qNo <= 13 ? 0 : qNo <= 26 ? 1 : 2;
        const isCurrentPassage = passageOfQ === STATE.currentPassageIdx;
        const baseRing = isCurrentPassage ? 'ring-2 ring-indigo-500/80' : '';

        if (isQuestionAnswered(qNo)) {
            btn.className = `w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer font-mono bg-teal-600 text-white border-teal-600 font-bold ${baseRing}`;
        } else {
            btn.className = `w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer font-mono bg-white text-slate-700 border-slate-200 hover:border-slate-300 ${baseRing}`;
        }
        updateAnsweredStats();
    }

    // --- Muat dan Render Passage Tertentu (1, 2, atau 3) ---
    function loadPassage(passageIdx) {
        STATE.currentPassageIdx = passageIdx;

        const pData = STATE.testData.passages[passageIdx];
        if (!pData) return;

        // Update Tab Tombol Passage di Header
        updatePassageTabButtons(passageIdx);

        // Render Teks Bacaan (Kolom Kiri Desktop / Tab Kiri Mobile)
        renderPassageText(pData);

        // Render Soal Pertanyaan (Kolom Kanan Desktop / Tab Kanan Mobile)
        renderPassageQuestions(pData);

        // Perbarui highlight nomor soal di navigator
        renderQuestionNavigator();

        // Reset scroll pada kedua kolom agar kembali ke atas
        const colPassage = document.getElementById('container-passage-scroll');
        const colQuestions = document.getElementById('container-questions-scroll');
        if (colPassage) colPassage.scrollTop = 0;
        if (colQuestions) colQuestions.scrollTop = 0;
    }

    function updatePassageTabButtons(activeIdx) {
        for (let i = 0; i < 3; i++) {
            const btn = document.getElementById(`btn-tab-passage-${i + 1}`);
            if (btn) {
                if (i === activeIdx) {
                    btn.className = 'px-4 py-2 rounded-xl bg-indigo-600 text-white font-extrabold text-xs shadow-xs transition cursor-pointer';
                } else {
                    btn.className = 'px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer';
                }
            }
        }
    }

    // --- Render Teks Bacaan ---
    function renderPassageText(pData) {
        const titleEl = document.getElementById('passage-text-title');
        const guideEl = document.getElementById('passage-reading-guide');
        const bodyEl = document.getElementById('passage-paragraphs-body');

        if (titleEl) titleEl.textContent = `Passage ${pData.passage_no}: ${pData.title}`;
        if (guideEl) guideEl.textContent = pData.reading_time_guide || 'Spend about 20 minutes on Questions related to this passage.';

        if (!bodyEl) return;

        bodyEl.innerHTML = (pData.paragraphs || []).map(p => `
            <div class="paragraph-block p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2 hover:bg-slate-50 transition" id="para-${p.label}">
                <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 font-extrabold text-xs flex items-center justify-center shrink-0">
                        ${p.label}
                    </span>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Paragraf ${p.label}</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans text-justify">
                    ${escapeHtml(p.text)}
                </p>
            </div>
        `).join('');
    }

    // --- Render Soal-Soal Terkait Passage ---
    function renderPassageQuestions(pData) {
        const container = document.getElementById('passage-questions-container');
        if (!container) return;

        let html = '';

        (pData.groups || []).forEach(grp => {
            const rangeStr = grp.range ? `Questions ${grp.range[0]}–${grp.range[1]}` : '';

            html += `
                <div class="reading-group-card bg-white rounded-3xl border border-slate-200 shadow-xs p-5 sm:p-7 space-y-5 mb-6" id="r-grp-${grp.group_id}">
                    <div class="border-b border-slate-100 pb-3">
                        <span class="text-xs font-extrabold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                            ${rangeStr}
                        </span>
                        <h4 class="text-sm sm:text-base font-bold text-slate-900 mt-2">${grp.heading}</h4>
                        <p class="text-xs text-slate-600 mt-1 italic font-medium leading-relaxed">${grp.instruction}</p>
                    </div>

                    <div class="space-y-4">
                        ${renderReadingGroupByType(grp, pData)}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
        attachQuestionInputListeners();
    }

    function renderReadingGroupByType(grp, pData) {
        switch (grp.type) {
            case 'tfng':
                return renderTfngGroup(grp, ['TRUE', 'FALSE', 'NOT GIVEN']);
            case 'ynng':
                return renderTfngGroup(grp, ['YES', 'NO', 'NOT GIVEN']);
            case 'matching_headings':
                return renderMatchingHeadingsGroup(grp);
            case 'matching_information':
                return renderMatchingInformationGroup(grp, pData);
            case 'multiple_choice':
                return renderMultipleChoiceGroup(grp);
            case 'multiple_choice_choose_two':
                return renderMultipleChoiceChooseTwoGroup(grp);
            case 'completion':
                return renderCompletionGroup(grp);
            case 'completion_word_bank':
                return renderCompletionWordBankGroup(grp);
            case 'short_answer':
                return renderShortAnswerGroup(grp);
            default:
                return `<p class="text-xs text-slate-400">Tipe soal '${grp.type}' sedang disiapkan.</p>`;
        }
    }

    // 1 & 2. TFNG / YNNG (True/False/Not Given atau Yes/No/Not Given)
    function renderTfngGroup(grp, options) {
        return grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toUpperCase();

            const optionsHtml = options.map(opt => {
                const isChecked = savedVal === opt;
                const checkedClass = isChecked 
                    ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 font-extrabold ring-1 ring-indigo-600' 
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold';

                return `
                    <label class="q-tfng-pill flex-1 py-2 px-3 rounded-xl border text-center text-xs cursor-pointer select-none transition ${checkedClass}" data-qno="${q.no}" data-val="${opt}">
                        <input type="radio" name="r_q_${q.no}" value="${opt}" ${isChecked ? 'checked' : ''} class="hidden">
                        <span>${opt}</span>
                    </label>
                `;
            }).join('');

            return `
                <div class="question-row p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2.5" id="r-q-row-${q.no}">
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 leading-snug">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <span class="font-medium">${escapeHtml(q.prompt)}</span>
                    </div>
                    <div class="flex flex-wrap sm:flex-nowrap gap-2 pl-8 pt-1">
                        ${optionsHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // 3. Matching Headings
    function renderMatchingHeadingsGroup(grp) {
        const poolHtml = (grp.headings_pool || []).map(h => `
            <div class="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700">
                <span class="font-mono font-bold text-teal-800 w-8 shrink-0">[${h.id}]</span>
                <span class="font-medium">${escapeHtml(h.text)}</span>
            </div>
        `).join('');

        const questionsHtml = grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toLowerCase();

            const selectOptions = (grp.headings_pool || []).map(h => `
                <option value="${h.id}" ${savedVal === h.id ? 'selected' : ''}>
                    ${h.id} - ${h.text}
                </option>
            `).join('');

            return `
                <div class="question-row p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3" id="r-q-row-${q.no}">
                    <div class="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <span class="font-extrabold text-teal-700 shrink-0 w-8">[${q.no}]</span>
                        <span>Paragraf <strong>${q.target_paragraph}</strong></span>
                    </div>
                    <div class="shrink-0 pl-8 sm:pl-0">
                        <select data-qno="${q.no}" class="q-select-reading px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-xs font-bold text-teal-900 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/10 cursor-pointer">
                            <option value="">-- Pilih Judul (Heading) --</option>
                            ${selectOptions}
                        </select>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="space-y-4">
                <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-teal-800">Daftar Pilihan Judul (List of Headings):</p>
                    <div class="space-y-1.5">
                        ${poolHtml}
                    </div>
                </div>
                <div class="space-y-2.5">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }

    // 4. Matching Information (Which paragraph contains...?)
    function renderMatchingInformationGroup(grp, pData) {
        const letters = (pData.paragraphs || []).map(p => p.label);

        return grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toUpperCase();

            const optionsHtml = letters.map(ltr => {
                const isSelected = savedVal === ltr;
                return `
                    <option value="${ltr}" ${isSelected ? 'selected' : ''}>Paragraf ${ltr}</option>
                `;
            }).join('');

            return `
                <div class="question-row p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3" id="r-q-row-${q.no}">
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <span class="font-medium">${escapeHtml(q.prompt)}</span>
                    </div>
                    <div class="shrink-0 pl-8 sm:pl-0">
                        <select data-qno="${q.no}" class="q-select-reading px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-indigo-900 focus:outline-none focus:border-indigo-600 cursor-pointer">
                            <option value="">-- Pilih Paragraf --</option>
                            ${optionsHtml}
                        </select>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 5. Multiple Choice Single (A, B, C, D)
    function renderMultipleChoiceGroup(grp) {
        return grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toUpperCase();

            const optionsHtml = (q.options || []).map(opt => {
                const isChecked = savedVal === opt.letter.toUpperCase();
                const checkedClass = isChecked 
                    ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600' 
                    : 'border-slate-200 hover:border-slate-300 bg-white';

                return `
                    <label class="q-mc-card flex items-start gap-3 p-3 rounded-xl border ${checkedClass} cursor-pointer transition select-none" data-qno="${q.no}" data-opt="${opt.letter}">
                        <input type="radio" name="r_mc_${q.no}" value="${opt.letter}" ${isChecked ? 'checked' : ''} class="mt-0.5 text-indigo-600 focus:ring-indigo-500">
                        <div class="text-xs text-slate-700">
                            <strong class="text-indigo-900 mr-1">${opt.letter}.</strong>
                            <span>${escapeHtml(opt.text)}</span>
                        </div>
                    </label>
                `;
            }).join('');

            return `
                <div class="question-row p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3" id="r-q-row-${q.no}">
                    <div class="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <span>${escapeHtml(q.prompt)}</span>
                    </div>
                    <div class="space-y-2 pl-8">
                        ${optionsHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // 5b. Multiple Choice Choose Two (Q36 & Q37)
    function renderMultipleChoiceChooseTwoGroup(grp) {
        const poolHtml = (grp.options || []).map(opt => `
            <div class="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700">
                <span class="font-extrabold text-indigo-700 w-5 shrink-0">${opt.letter}.</span>
                <span>${escapeHtml(opt.text)}</span>
            </div>
        `).join('');

        const letters = (grp.options || []).map(o => o.letter);

        const questionsHtml = grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toUpperCase();

            const selectOptions = letters.map(ltr => `
                <option value="${ltr}" ${savedVal === ltr ? 'selected' : ''}>Pilihan ${ltr}</option>
            `).join('');

            return `
                <div class="question-row p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3" id="r-q-row-${q.no}">
                    <div class="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <span>${escapeHtml(q.prompt)}</span>
                    </div>
                    <div class="shrink-0 pl-8 sm:pl-0">
                        <select data-qno="${q.no}" class="q-select-reading px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-xs font-bold text-indigo-900 focus:outline-none focus:border-indigo-600 cursor-pointer">
                            <option value="">-- Pilih Huruf (A-E) --</option>
                            ${selectOptions}
                        </select>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="space-y-4">
                <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-indigo-800">Pilihan Opsi Jawaban (A–E):</p>
                    <div class="space-y-1.5">
                        ${poolHtml}
                    </div>
                </div>
                <div class="space-y-2.5">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }

    // 6. Completion (Summary / Sentence / Flowchart)
    function renderCompletionGroup(grp) {
        return grp.questions.map(q => {
            const savedVal = STATE.answers[String(q.no)] || '';
            const maxWordNotice = q.max_words ? `<span class="text-[10px] text-slate-400 block mt-1">(Batas: maksimal ${q.max_words} kata)</span>` : '';

            return `
                <div class="question-row p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition" id="r-q-row-${q.no}">
                    <div class="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <div class="flex-grow">
                            ${q.prefix ? `<span>${escapeHtml(q.prefix)}</span>` : ''}
                            <input type="text" 
                                   id="r-input-${q.no}" 
                                   data-qno="${q.no}" 
                                   value="${escapeHtml(savedVal)}" 
                                   placeholder="${q.placeholder || 'Ketik kata dari teks...'}" 
                                   autocomplete="off"
                                   class="q-reading-text-input inline-block min-w-[140px] max-w-xs px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 shadow-2xs transition">
                            ${q.suffix ? `<span>${escapeHtml(q.suffix)}</span>` : ''}
                            ${maxWordNotice}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 6b. Completion Word Bank
    function renderCompletionWordBankGroup(grp) {
        const poolHtml = (grp.word_bank || []).map(w => `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
                <strong class="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] font-bold">${w.letter}</strong>
                <span>${escapeHtml(w.text)}</span>
            </span>
        `).join('');

        const questionsHtml = grp.questions.map(q => {
            const savedVal = (STATE.answers[String(q.no)] || '').toUpperCase();

            const selectOptions = (grp.word_bank || []).map(w => `
                <option value="${w.letter}" ${savedVal === w.letter ? 'selected' : ''}>
                    ${w.letter} - ${w.text}
                </option>
            `).join('');

            return `
                <div class="question-row p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-2" id="r-q-row-${q.no}">
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <div class="flex-grow">
                            ${q.prefix ? `<span>${escapeHtml(q.prefix)}</span>` : ''}
                            <select data-qno="${q.no}" class="q-select-reading inline-block px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-indigo-900 focus:outline-none focus:border-indigo-600 cursor-pointer">
                                <option value="">-- Pilih Huruf (A-F) --</option>
                                ${selectOptions}
                            </select>
                            ${q.suffix ? `<span>${escapeHtml(q.suffix)}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="space-y-4">
                <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-amber-800">Kotak Pilihan Kata (Word Box):</p>
                    <div class="flex flex-wrap items-center gap-2">
                        ${poolHtml}
                    </div>
                </div>
                <div class="space-y-2.5">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }

    // 7. Short Answer Questions
    function renderShortAnswerGroup(grp) {
        return grp.questions.map(q => {
            const savedVal = STATE.answers[String(q.no)] || '';
            const maxWordNotice = q.max_words ? `<span class="text-[10px] text-slate-400 block mt-1">(Batas: maksimal ${q.max_words} kata dari teks)</span>` : '';

            return `
                <div class="question-row p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2" id="r-q-row-${q.no}">
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        <span class="font-extrabold text-indigo-700 shrink-0 w-8">[${q.no}]</span>
                        <span>${escapeHtml(q.prompt)}</span>
                    </div>
                    <div class="pl-8">
                        <input type="text" 
                               id="r-input-${q.no}" 
                               data-qno="${q.no}" 
                               value="${escapeHtml(savedVal)}" 
                               placeholder="Ketik jawaban singkat..." 
                               autocomplete="off"
                               class="q-reading-text-input w-full max-w-sm px-3.5 py-2 rounded-xl border border-slate-300 bg-white font-medium text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 shadow-2xs transition">
                        ${maxWordNotice}
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- Pasang Event Listener Input Jawaban ---
    function attachQuestionInputListeners() {
        // Text Inputs
        document.querySelectorAll('.q-reading-text-input').forEach(input => {
            input.addEventListener('input', (e) => {
                const qNo = e.target.getAttribute('data-qno');
                STATE.answers[qNo] = e.target.value;
                updateNavButtonState(qNo);
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const nextQ = parseInt(e.target.getAttribute('data-qno'), 10) + 1;
                    jumpToQuestion(nextQ);
                }
            });
        });

        // Radio Pills (TFNG / YNNG)
        document.querySelectorAll('.q-tfng-pill').forEach(pill => {
            pill.addEventListener('click', (e) => {
                const qNo = pill.getAttribute('data-qno');
                const val = pill.getAttribute('data-val');
                STATE.answers[qNo] = val;

                const row = document.getElementById(`r-q-row-${qNo}`);
                if (row) {
                    row.querySelectorAll('.q-tfng-pill').forEach(p => {
                        if (p.getAttribute('data-val') === val) {
                            p.className = 'q-tfng-pill flex-1 py-2 px-3 rounded-xl border text-center text-xs cursor-pointer select-none transition border-indigo-600 bg-indigo-50/70 text-indigo-900 font-extrabold ring-1 ring-indigo-600';
                        } else {
                            p.className = 'q-tfng-pill flex-1 py-2 px-3 rounded-xl border text-center text-xs cursor-pointer select-none transition border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold';
                        }
                    });
                }
                updateNavButtonState(qNo);
            });
        });

        // Radio Cards (Multiple Choice)
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const card = e.target.closest('.q-mc-card');
                if (!card) return;
                const qNo = card.getAttribute('data-qno');
                const val = card.getAttribute('data-opt');
                STATE.answers[qNo] = val;

                const row = document.getElementById(`r-q-row-${qNo}`);
                if (row) {
                    row.querySelectorAll('.q-mc-card').forEach(c => {
                        if (c.getAttribute('data-opt') === val) {
                            c.className = 'q-mc-card flex items-start gap-3 p-3 rounded-xl border border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600 cursor-pointer transition select-none';
                        } else {
                            c.className = 'q-mc-card flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white cursor-pointer transition select-none';
                        }
                    });
                }
                updateNavButtonState(qNo);
            });
        });

        // Select Inputs (Matching Headings, Information, Word Bank)
        document.querySelectorAll('.q-select-reading').forEach(select => {
            select.addEventListener('change', (e) => {
                const qNo = e.target.getAttribute('data-qno');
                STATE.answers[qNo] = e.target.value;
                updateNavButtonState(qNo);
            });
        });
    }

    // --- Autosave Progres ke Server ---
    async function autoSaveProgress() {
        if (!STATE.sessionId || STATE.submitted) return;

        // Selalu cadangkan instan ke localStorage (Zero data loss)
        try {
            localStorage.setItem(`ielts_reading_backup_${STATE.sessionId}`, JSON.stringify({
                sessionId: STATE.sessionId,
                answers: STATE.answers,
                currentPassage: STATE.currentPassageIdx + 1,
                savedAt: Date.now()
            }));
        } catch {}

        const badge = document.getElementById('reading-autosave-indicator');
        if (badge) {
            badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block"></span> <span>Menyimpan...</span>`;
        }

        try {
            const res = await fetch(`${API_BASE}/reading/save-progress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                body: JSON.stringify({
                    sessionId: STATE.sessionId,
                    deviceId: STATE.deviceId,
                    currentPassage: STATE.currentPassageIdx + 1,
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
            console.warn('Reading autosave failed:', err);
            if (badge) {
                badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-400 inline-block"></span> <span class="text-slate-500">Tersimpan di perangkat (offline)</span>`;
            }
        }
    }

    // --- Jump / Scroll ke Soal Tertentu ---
    function jumpToQuestion(qNo) {
        if (qNo < 1 || qNo > 40) return;

        // Tentukan ada di passage mana
        const targetPassageIdx = qNo <= 13 ? 0 : qNo <= 26 ? 1 : 2;

        if (targetPassageIdx !== STATE.currentPassageIdx) {
            loadPassage(targetPassageIdx);
        }

        // Jika di HP, otomatis alihkan tab aktif ke 'questions'
        switchMobileTab('questions');

        setTimeout(() => {
            const row = document.getElementById(`r-q-row-${qNo}`);
            if (row) {
                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                row.classList.add('ring-2', 'ring-indigo-600');
                setTimeout(() => row.classList.remove('ring-2', 'ring-indigo-600'), 1500);

                const input = document.getElementById(`r-input-${qNo}`) || row.querySelector('select, input');
                if (input) input.focus();
            }
        }, 150);
    }

    // --- Switch Tab Mobile (Passage vs Questions) ---
    function switchMobileTab(tab) {
        STATE.activeMobileTab = tab;

        const btnPassage = document.getElementById('mobile-tab-btn-passage');
        const btnQuestions = document.getElementById('mobile-tab-btn-questions');
        const colPassage = document.getElementById('container-passage-col');
        const colQuestions = document.getElementById('container-questions-col');

        if (!btnPassage || !btnQuestions || !colPassage || !colQuestions) return;

        if (tab === 'passage') {
            btnPassage.className = 'flex-1 py-2 rounded-xl bg-white text-indigo-700 font-extrabold text-xs shadow-xs';
            btnQuestions.className = 'flex-1 py-2 rounded-xl text-slate-500 font-bold text-xs hover:text-slate-800';
            colPassage.classList.remove('hidden');
            colQuestions.classList.add('hidden');
        } else {
            btnQuestions.className = 'flex-1 py-2 rounded-xl bg-white text-indigo-700 font-extrabold text-xs shadow-xs';
            btnPassage.className = 'flex-1 py-2 rounded-xl text-slate-500 font-bold text-xs hover:text-slate-800';
            colQuestions.classList.remove('hidden');
            colPassage.classList.add('hidden');
        }
    }

    // --- Submit Konfirmasi Modal ---
    function openSubmitModal() {
        const modal = document.getElementById('reading-submit-modal');
        const summaryText = document.getElementById('reading-modal-summary');
        if (!modal) return;

        let answeredCount = 0;
        for (let i = 1; i <= 40; i++) {
            if (isQuestionAnswered(i)) answeredCount++;
        }

        if (summaryText) {
            summaryText.innerHTML = `
                Anda telah menjawab <strong>${answeredCount}</strong> dari <strong>40</strong> soal.<br>
                ${answeredCount < 40 ? `<span class="text-amber-600 font-semibold">Terdapat ${40 - answeredCount} soal yang masih kosong.</span>` : '<span class="text-teal-600 font-semibold">Semua 40 soal telah lengkap terisi!</span>'}
            `;
        }

        modal.classList.remove('hidden');
    }

    function closeSubmitModal() {
        const modal = document.getElementById('reading-submit-modal');
        if (modal) modal.classList.add('hidden');
    }

    // --- Submit Tes ke Server untuk Penilaian ---
    async function submitTest(isForce = false) {
        if (!isForce) closeSubmitModal();

        const btnSubmit = document.getElementById('btn-reading-confirm-submit');
        if (btnSubmit) {
            btnSubmit.disabled = true;
            btnSubmit.textContent = 'Memeriksa & Menilai...';
        }

        if (STATE.timerInterval) clearInterval(STATE.timerInterval);
        if (STATE.autosaveTimer) clearInterval(STATE.autosaveTimer);

        try {
            const res = await fetch(`${API_BASE}/reading/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                body: JSON.stringify({
                    sessionId: STATE.sessionId,
                    deviceId: STATE.deviceId,
                    answers: STATE.answers
                })
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || 'Server gagal memproses penilaian reading.');
            }

            const data = await res.json();
            STATE.submitted = true;
            STATE.results = data;

            clearSavedSession();
            renderResultsView(data);

        } catch (err) {
            console.error('Submit reading error:', err);
            alert('Gagal mengirim jawaban reading: ' + (err.message || 'Cek koneksi internet.'));
            if (btnSubmit) {
                btnSubmit.disabled = false;
                btnSubmit.textContent = 'Ya, Kirim & Nilai Sekarang';
            }
        }
    }

    // --- Render Tampilan Hasil & Pembahasan Diagnostik ---
    function renderResultsView(res) {
        const examSection = document.getElementById('view-active-reading-exam');
        const resultsSection = document.getElementById('view-reading-results');

        if (examSection) examSection.classList.add('hidden');
        if (resultsSection) resultsSection.classList.remove('hidden');

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update Skor & Band
        const bandEl = document.getElementById('res-reading-band');
        const rawEl = document.getElementById('res-reading-raw');
        const nameEl = document.getElementById('res-reading-student-name');
        const classEl = document.getElementById('res-reading-student-class');

        if (bandEl) bandEl.textContent = Number(res.bandScore).toFixed(1);
        if (rawEl) rawEl.textContent = `${res.rawScore} / 40`;
        if (nameEl) nameEl.textContent = STATE.nama || 'Peserta';
        if (classEl) classEl.textContent = STATE.kelas || '-';

        // Breakdown Passage
        const p1Score = (res.passageScores && res.passageScores.p1) || 0;
        const p2Score = (res.passageScores && res.passageScores.p2) || 0;
        const p3Score = (res.passageScores && res.passageScores.p3) || 0;

        updatePassageBar('p1', p1Score, 13);
        updatePassageBar('p2', p2Score, 13);
        updatePassageBar('p3', p3Score, 14);

        // Render Question Reviews
        renderQuestionReviewList(res.questionReviews || []);
    }

    function updatePassageBar(key, score, total) {
        const textEl = document.getElementById(`res-reading-score-${key}`);
        const barEl = document.getElementById(`res-reading-bar-${key}`);
        if (textEl) textEl.textContent = `${score} / ${total}`;
        if (barEl) barEl.style.width = `${(score / total) * 100}%`;
    }

    function renderQuestionReviewList(reviews, filter = 'all') {
        const container = document.getElementById('results-reading-questions-container');
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
            const evidenceHtml = r.evidence ? `
                <div class="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed font-sans">
                    <strong class="text-indigo-900 block mb-0.5">🔍 Bukti Kutipan Teks (Evidence):</strong>
                    <span>${escapeHtml(r.evidence)}</span>
                </div>
            ` : '';

            return `
                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-mono font-bold text-xs flex items-center justify-center">#${r.no}</span>
                            <span class="text-xs text-slate-500 font-medium">Passage ${r.passage} • <span class="uppercase">${r.type}</span></span>
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

                    ${evidenceHtml}
                </div>
            `;
        }).join('');
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
    window.ReadingEngine = {
        loadPassage,
        jumpToQuestion,
        switchMobileTab,
        openSubmitModal,
        closeSubmitModal,
        submitTest: () => submitTest(false),
        filterReviews: (type) => {
            if (STATE.results) {
                renderQuestionReviewList(STATE.results.questionReviews || [], type);
            }
        }
    };

})();
