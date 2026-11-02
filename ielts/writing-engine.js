/**
 * IELTS-Style Academic Writing Engine — AjarKita
 * Mengelola pengerjaan tes Writing (Task 1 & Task 2):
 * - Timer gabungan 60 menit sinkron server
 * - Generator grafik garis SVG interaktif dengan 4 gaya garis & marker aksesibel
 * - Tabel data terlipat (<details>) & modal pembesar grafik (zoom)
 * - Autosave berkala (Task 1 & Task 2)
 * - Metrik dinamis: HANYA jumlah kata dan paragraf (tanpa hitung karakter)
 * - Lembar hasil Structural Check (tanpa skor band) & Sample Answer teranotasi
 */

(function () {
    'use strict';

    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? (window.location.port === '8787' ? '' : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev')
        : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev';

    const STATE = {
        testId: 'writing1',
        sessionId: localStorage.getItem('ielts_writing_session_id') || '',
        deviceId: getOrSetDeviceId(),
        nama: '',
        kelas: '',
        testData: null,
        currentTask: 1, // 1 (Task 1) atau 2 (Task 2)
        activeMobileTab: 'prompt', // 'prompt' | 'editor'
        task1Text: '',
        task2Text: '',
        remainingSeconds: 3600,
        timerInterval: null,
        autosaveTimer: null,
        isSubmitting: false,
        status: 'in_progress', // 'in_progress', 'submitted', 'graded'
        sampleAnswers: null
    };

    function getOrSetDeviceId() {
        let dev = localStorage.getItem('ielts_writing_device_id');
        if (!dev) {
            dev = 'dev_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
            localStorage.setItem('ielts_writing_device_id', dev);
        }
        return dev;
    }

    // --- Inisialisasi DOM ---
    document.addEventListener('DOMContentLoaded', () => {
        initEvents();
        checkExistingSession();
    });

    function initEvents() {
        // Form Mulai Tes
        const startForm = document.getElementById('form-start-writing');
        if (startForm) {
            startForm.addEventListener('submit', handleStartExam);
        }

        // Tombol Resume / Discard
        const btnResume = document.getElementById('btn-resume-writing');
        const btnDiscard = document.getElementById('btn-discard-writing');
        if (btnResume) btnResume.addEventListener('click', () => resumeExam(STATE.sessionId));
        if (btnDiscard) btnDiscard.addEventListener('click', discardExistingSession);

        // Tab Task 1 / Task 2
        const btnTask1 = document.getElementById('btn-tab-task-1');
        const btnTask2 = document.getElementById('btn-tab-task-2');
        if (btnTask1) btnTask1.addEventListener('click', () => switchTask(1));
        if (btnTask2) btnTask2.addEventListener('click', () => switchTask(2));

        // Mobile Tab Switcher: Prompt vs Editor
        const btnMTabPrompt = document.getElementById('btn-mtab-prompt');
        const btnMTabEditor = document.getElementById('btn-mtab-editor');
        if (btnMTabPrompt) btnMTabPrompt.addEventListener('click', () => switchMobileTab('prompt'));
        if (btnMTabEditor) btnMTabEditor.addEventListener('click', () => switchMobileTab('editor'));

        // Textarea Editor Events (Input & Blur)
        const textarea = document.getElementById('writing-textarea');
        if (textarea) {
            textarea.addEventListener('input', handleEditorInput);
            textarea.addEventListener('blur', triggerAutosave);
        }

        // Tombol Submit Manual
        const btnSubmit = document.getElementById('btn-submit-writing');
        if (btnSubmit) {
            btnSubmit.addEventListener('click', promptSubmitExam);
        }

        // Tombol Modal Zoom Grafik
        const btnZoom = document.getElementById('btn-zoom-chart');
        const btnCloseZoom = document.getElementById('btn-close-zoom-modal');
        const zoomModal = document.getElementById('modal-zoom-chart');
        if (btnZoom && zoomModal) {
            btnZoom.addEventListener('click', () => zoomModal.classList.remove('hidden'));
        }
        if (btnCloseZoom && zoomModal) {
            btnCloseZoom.addEventListener('click', () => zoomModal.classList.add('hidden'));
        }

        // Tombol Cek Polling Nilai Guru
        const btnCheckStatus = document.getElementById('btn-refresh-teacher-grade');
        if (btnCheckStatus) {
            btnCheckStatus.addEventListener('click', fetchWritingStatus);
        }
    }

    // --- Cek Sesi Sebelumnya ---
    async function checkExistingSession() {
        const savedSessionId = localStorage.getItem('ielts_writing_session_id');
        const resumeBanner = document.getElementById('banner-resume-writing');

        if (!savedSessionId) {
            if (resumeBanner) resumeBanner.classList.add('hidden');
            return;
        }

        try {
            const res = await fetch(`${API_BASE}/writing/status?sessionId=${encodeURIComponent(savedSessionId)}&deviceId=${encodeURIComponent(STATE.deviceId)}`, {
                headers: { 'X-Device-Id': STATE.deviceId }
            });
            if (res.ok) {
                const data = await res.json();
                if (data.status === 'submitted' || data.status === 'graded') {
                    // Sesi sudah disubmit, langsung arahkan ke hasil
                    STATE.sessionId = savedSessionId;
                    renderSubmittedResult(data);
                    return;
                }
                if (resumeBanner) resumeBanner.classList.remove('hidden');
            } else {
                localStorage.removeItem('ielts_writing_session_id');
                if (resumeBanner) resumeBanner.classList.add('hidden');
            }
        } catch (e) {
            if (resumeBanner) resumeBanner.classList.remove('hidden');
        }
    }

    function discardExistingSession() {
        if (!confirm('Apakah Anda yakin ingin membatalkan sesi sebelumnya dan memulai ujian baru?')) return;
        localStorage.removeItem('ielts_writing_session_id');
        const resumeBanner = document.getElementById('banner-resume-writing');
        if (resumeBanner) resumeBanner.classList.add('hidden');
    }

    // --- Memulai Ujian Baru ---
    async function handleStartExam(e) {
        e.preventDefault();
        const namaInput = document.getElementById('input-writing-nama');
        const kelasInput = document.getElementById('input-writing-kelas');
        const startBtn = document.getElementById('btn-start-writing-submit');
        const errNotice = document.getElementById('writing-start-error');

        if (errNotice) errNotice.classList.add('hidden');

        const nama = namaInput ? namaInput.value.trim() : '';
        const kelas = kelasInput ? kelasInput.value.trim() : '';

        if (nama.length < 2) {
            showStartError('Nama lengkap wajib diisi minimal 2 karakter.');
            return;
        }
        if (kelas.length < 1) {
            showStartError('Kelas wajib dipilih / diisi.');
            return;
        }

        STATE.nama = nama;
        STATE.kelas = kelas;

        if (startBtn) {
            startBtn.disabled = true;
            startBtn.textContent = 'Menyiapkan Lembar Tes...';
        }

        await startExamRequest();
    }

    async function resumeExam(overrideSessionId) {
        await startExamRequest(overrideSessionId);
    }

    async function startExamRequest(overrideSessionId = '') {
        const startBtn = document.getElementById('btn-start-writing-submit');
        const payload = {
            testId: STATE.testId,
            nama: STATE.nama || 'Peserta',
            kelas: STATE.kelas || 'Umum',
            deviceId: STATE.deviceId,
            sessionId: overrideSessionId || STATE.sessionId || undefined
        };

        try {
            const res = await fetch(`${API_BASE}/writing/start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || 'Gagal memulai simulasi tes writing.');
            }

            const data = await res.json();

            // Jika sesi ternyata sudah pernah disubmit
            if (data.alreadySubmitted) {
                STATE.sessionId = data.sessionId;
                localStorage.setItem('ielts_writing_session_id', data.sessionId);
                renderSubmittedResult(data);
                return;
            }

            STATE.sessionId = data.sessionId;
            localStorage.setItem('ielts_writing_session_id', data.sessionId);
            STATE.testData = data.testData;
            STATE.startedAt = data.startedAt;
            STATE.remainingSeconds = typeof data.remainingSeconds === 'number' ? data.remainingSeconds : 3600;
            STATE.currentTask = data.currentTask || 1;
            STATE.task1Text = data.task1Text || '';
            STATE.task2Text = data.task2Text || '';

            // Tampilkan Layar Ujian
            document.getElementById('view-intro-writing').classList.add('hidden');
            document.getElementById('view-active-writing').classList.remove('hidden');

            // Render Task Aktif
            switchTask(STATE.currentTask, false);

            // Jalankan Timer Sinkron
            startTimerCountdown();

        } catch (err) {
            showStartError(err.message);
        } finally {
            if (startBtn) {
                startBtn.disabled = false;
                startBtn.textContent = 'Mulai Simulasi Tes (60 Menit)';
            }
        }
    }

    function showStartError(msg) {
        const errNotice = document.getElementById('writing-start-error');
        if (errNotice) {
            errNotice.textContent = msg;
            errNotice.classList.remove('hidden');
        } else {
            alert(msg);
        }
    }

    // --- Perpindahan Task (Task 1 <-> Task 2) ---
    function switchTask(taskNo, shouldAutosave = true) {
        if (shouldAutosave) {
            saveCurrentEditorTextToState();
            triggerAutosave();
        }

        STATE.currentTask = taskNo;

        // Update Tombol Tab Header
        const tab1 = document.getElementById('btn-tab-task-1');
        const tab2 = document.getElementById('btn-tab-task-2');
        if (tab1 && tab2) {
            if (taskNo === 1) {
                tab1.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-indigo-600 text-white shadow-xs transition';
                tab2.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition';
            } else {
                tab1.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition';
                tab2.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-indigo-600 text-white shadow-xs transition';
            }
        }

        // Dapatkan data task dari testData
        const taskData = (STATE.testData && STATE.testData.tasks) ? STATE.testData.tasks.find(t => t.task_no === taskNo) : null;
        if (!taskData) return;

        // Render Sisi Kiri (Prompt & Visual)
        renderPromptColumn(taskData);

        // Muat teks yang sudah diketik ke textarea
        const textarea = document.getElementById('writing-textarea');
        if (textarea) {
            textarea.value = (taskNo === 1 ? STATE.task1Text : STATE.task2Text) || '';
            textarea.placeholder = taskNo === 1
                ? 'Ketik laporan Task 1 Anda di sini (minimal 150 kata)...'
                : 'Ketik esai Task 2 Anda di sini (minimal 250 kata)...';
        }

        // Perbarui badge metrik kata & paragraf
        updateMetricsDisplay();
    }

    function saveCurrentEditorTextToState() {
        const textarea = document.getElementById('writing-textarea');
        if (!textarea) return;
        if (STATE.currentTask === 1) {
            STATE.task1Text = textarea.value;
        } else {
            STATE.task2Text = textarea.value;
        }
    }

    // --- Render Kolom Prompt & Visual Data ---
    function renderPromptColumn(taskData) {
        const taskTitleEl = document.getElementById('prompt-task-title');
        const instructionEl = document.getElementById('prompt-instruction-text');
        const promptBodyEl = document.getElementById('prompt-body-text');
        const disclaimerEl = document.getElementById('prompt-data-disclaimer');
        const visualContainer = document.getElementById('prompt-visual-container');

        if (taskTitleEl) {
            taskTitleEl.textContent = `Writing Task ${taskData.task_no} (${taskData.type === 'report_line_graph' ? 'Data Report' : 'Discursive Essay'})`;
        }

        if (instructionEl) {
            instructionEl.textContent = taskData.instruction || `You should spend about ${taskData.recommended_minutes || 20} minutes on this task. Write at least ${taskData.min_words} words.`;
        }

        if (promptBodyEl) {
            promptBodyEl.textContent = taskData.prompt || '';
        }

        if (disclaimerEl) {
            if (taskData.data_disclaimer) {
                disclaimerEl.textContent = `ℹ️ ${taskData.data_disclaimer}`;
                disclaimerEl.classList.remove('hidden');
            } else {
                disclaimerEl.classList.add('hidden');
            }
        }

        // Render Visual Data (Jika ada; pada Task 2 field ini opsional / null)
        if (visualContainer) {
            if (taskData.visual_data) {
                visualContainer.classList.remove('hidden');
                renderVisualData(taskData.visual_data, visualContainer);
            } else {
                visualContainer.classList.add('hidden');
                visualContainer.innerHTML = '';
            }
        }
    }

    // --- Generator Grafik Garis SVG Vektor & Tabel Data ---
    function renderVisualData(vData, container) {
        const svgHtml = buildLineGraphSvg(vData, 600, 340);

        // Tabel Data Terlipat (<details>)
        const tableHtml = vData.show_data_table ? buildCollapsibleDataTable(vData) : '';

        container.innerHTML = `
            <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <h3 class="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span>📈</span> <span>${escapeHtml(vData.title)}</span>
                    </h3>
                    <button type="button" id="btn-zoom-chart" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition flex items-center gap-1" title="Perbesar Tampilan Grafik">
                        <span>🔍</span> <span class="hidden sm:inline">Perbesar</span>
                    </button>
                </div>

                <!-- Kontainer Grafik Garis SVG Responsif -->
                <div class="w-full overflow-x-auto bg-slate-50/50 p-2 rounded-xl flex justify-center">
                    <div class="w-full max-w-[620px]" aria-label="${escapeHtml(vData.alt_text)}" role="img">
                        ${svgHtml}
                    </div>
                </div>

                <!-- Keterangan Aksesibilitas Alt Text -->
                <p class="text-[11px] text-slate-500 italic leading-relaxed">
                    ${escapeHtml(vData.alt_text)}
                </p>

                <!-- Tabel Data Terlipat untuk Pembaca Layar & Angka Pasti -->
                ${tableHtml}
            </div>
        `;

        // Siapkan juga grafik di dalam modal zoom
        const modalContainer = document.getElementById('modal-zoom-svg-target');
        if (modalContainer) {
            modalContainer.innerHTML = buildLineGraphSvg(vData, 750, 420);
        }

        // Re-attach event zoom button
        const btnZoom = document.getElementById('btn-zoom-chart');
        const zoomModal = document.getElementById('modal-zoom-chart');
        if (btnZoom && zoomModal) {
            btnZoom.addEventListener('click', () => zoomModal.classList.remove('hidden'));
        }
    }

    function buildLineGraphSvg(vData, width = 600, height = 340) {
        const padLeft = 45;
        const padRight = 100; // Ruang ekstra untuk label langsung di ujung garis
        const padTop = 30;
        const padBottom = 40;

        const chartW = width - padLeft - padRight;
        const chartH = height - padTop - padBottom;

        const yMin = vData.y_min || 0;
        const yMax = vData.y_max || 60;
        const years = vData.years || [2000, 2005, 2010, 2015, 2020, 2025];
        const numYears = years.length;

        const getX = (idx) => padLeft + (idx / (numYears - 1)) * chartW;
        const getY = (val) => padTop + chartH - ((val - yMin) / (yMax - yMin)) * chartH;

        // Gridlines Horizontal Y (0%, 10%, 20%, 30%, 40%, 50%, 60%)
        let gridHtml = '';
        const ySteps = 6;
        for (let i = 0; i <= ySteps; i++) {
            const val = yMin + (i / ySteps) * (yMax - yMin);
            const y = getY(val);
            gridHtml += `
                <line x1="${padLeft}" y1="${y}" x2="${padLeft + chartW}" y2="${y}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
                <text x="${padLeft - 8}" y="${y + 4}" fill="#64748b" font-size="10" font-family="'JetBrains Mono', monospace" text-anchor="end">${val}%</text>
            `;
        }

        // Gridlines & Label Sumbu X (Tahun)
        let xLabelsHtml = '';
        years.forEach((yr, idx) => {
            const x = getX(idx);
            xLabelsHtml += `
                <line x1="${x}" y1="${padTop + chartH}" x2="${x}" y2="${padTop + chartH + 5}" stroke="#94a3b8" stroke-width="1.5" />
                <text x="${x}" y="${padTop + chartH + 20}" fill="#475569" font-size="11" font-weight="600" font-family="'Plus Jakarta Sans', sans-serif" text-anchor="middle">${yr}</text>
            `;
        });

        // Path Garis & Marker per Series
        let linesHtml = '';
        let markersHtml = '';
        let directLabelsHtml = '';

        (vData.series || []).forEach(s => {
            const pts = s.data.map((val, idx) => ({ x: getX(idx), y: getY(val), val }));
            const dStr = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');

            let dashArray = 'none';
            if (s.line_style === 'dashed') dashArray = '8,5';
            else if (s.line_style === 'dotted') dashArray = '3,4';
            else if (s.line_style === 'dashdot') dashArray = '10,4,2,4';

            // Garis
            linesHtml += `
                <path d="${dStr}" fill="none" stroke="${s.color}" stroke-width="2.75" stroke-dasharray="${dashArray}" stroke-linecap="round" stroke-linejoin="round" />
            `;

            // Marker di setiap titik tahun
            pts.forEach(p => {
                markersHtml += buildSvgMarker(p.x, p.y, s.marker, s.color);
            });

            // Label langsung di ujung garis (data tahun 2025)
            const lastPt = pts[pts.length - 1];
            directLabelsHtml += `
                <text x="${lastPt.x + 8}" y="${lastPt.y + 3.5}" fill="${s.color}" font-size="10.5" font-weight="700" font-family="'Plus Jakarta Sans', sans-serif">
                    ${escapeHtml(s.name)} (${lastPt.val}%)
                </text>
            `;
        });

        // Legenda di bagian atas
        let legendHtml = '';
        let legX = padLeft;
        (vData.series || []).forEach(s => {
            let legDash = s.line_style === 'dashed' ? '6,3' : (s.line_style === 'dotted' ? '2,3' : (s.line_style === 'dashdot' ? '8,3,2,3' : 'none'));
            legendHtml += `
                <g transform="translate(${legX}, 14)">
                    <line x1="0" y1="0" x2="20" y2="0" stroke="${s.color}" stroke-width="2.5" stroke-dasharray="${legDash}" />
                    ${buildSvgMarker(10, 0, s.marker, s.color, 3.5)}
                    <text x="25" y="3.5" fill="#334155" font-size="10" font-weight="600" font-family="'Plus Jakarta Sans', sans-serif">${escapeHtml(s.name)}</text>
                </g>
            `;
            legX += 115;
        });

        return `
            <svg viewBox="0 0 ${width} ${height}" class="w-full h-auto select-none" style="max-height: ${height}px;">
                <!-- Background -->
                <rect width="${width}" height="${height}" fill="#ffffff" rx="12" />
                
                <!-- Legend -->
                ${legendHtml}

                <!-- Axes -->
                <line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${padTop + chartH}" stroke="#94a3b8" stroke-width="1.5" />
                <line x1="${padLeft}" y1="${padTop + chartH}" x2="${padLeft + chartW}" y2="${padTop + chartH}" stroke="#94a3b8" stroke-width="1.5" />
                
                <!-- Y Grid & Labels -->
                ${gridHtml}

                <!-- X Grid & Labels -->
                ${xLabelsHtml}

                <!-- Series Lines -->
                ${linesHtml}

                <!-- Series Markers -->
                ${markersHtml}

                <!-- Direct End Labels -->
                ${directLabelsHtml}
            </svg>
        `;
    }

    function buildSvgMarker(x, y, shape, color, size = 4) {
        if (shape === 'square') {
            return `<rect x="${x - size}" y="${y - size}" width="${size * 2}" height="${size * 2}" fill="#ffffff" stroke="${color}" stroke-width="2" />`;
        }
        if (shape === 'triangle') {
            const pts = `${x},${y - size * 1.3} ${x + size * 1.2},${y + size * 0.9} ${x - size * 1.2},${y + size * 0.9}`;
            return `<polygon points="${pts}" fill="#ffffff" stroke="${color}" stroke-width="2" />`;
        }
        if (shape === 'diamond') {
            const pts = `${x},${y - size * 1.3} ${x + size * 1.3},${y} ${x},${y + size * 1.3} ${x - size * 1.3},${y}`;
            return `<polygon points="${pts}" fill="#ffffff" stroke="${color}" stroke-width="2" />`;
        }
        // Default: circle
        return `<circle cx="${x}" cy="${y}" r="${size}" fill="#ffffff" stroke="${color}" stroke-width="2" />`;
    }

    function buildCollapsibleDataTable(vData) {
        const years = vData.years || [2000, 2005, 2010, 2015, 2020, 2025];
        const series = vData.series || [];

        const thHtml = years.map(y => `<th class="py-2 px-2 text-center font-mono">${y}</th>`).join('');
        const rowsHtml = series.map(s => `
            <tr class="border-t border-slate-100 hover:bg-slate-50/80">
                <td class="py-2 px-3 font-semibold text-slate-800 flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${s.color};"></span>
                    <span>${escapeHtml(s.name)}</span>
                </td>
                ${s.data.map(v => `<td class="py-2 px-2 text-center font-mono font-medium">${v}%</td>`).join('')}
            </tr>
        `).join('');

        return `
            <details class="text-xs bg-slate-50/80 rounded-xl border border-slate-200 overflow-hidden">
                <summary class="py-2 px-3 font-bold text-slate-700 cursor-pointer select-none hover:bg-slate-100/80 transition flex items-center justify-between">
                    <span>📊 Tampilkan Tabel Data Rinci (Data Table)</span>
                    <span class="text-[10px] text-slate-400 font-normal">Klik untuk melipat / membuka</span>
                </summary>
                <div class="overflow-x-auto p-2 bg-white border-t border-slate-200">
                    <table class="w-full text-left text-[11px] border-collapse">
                        <thead class="bg-slate-50 text-slate-600 font-bold uppercase text-[10px]">
                            <tr>
                                <th class="py-2 px-3">Wilayah</th>
                                ${thHtml}
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 text-slate-700">
                            ${rowsHtml}
                        </tbody>
                    </table>
                </div>
            </details>
        `;
    }

    // --- Input Textarea & Metrik Kata / Paragraf ---
    function handleEditorInput() {
        saveCurrentEditorTextToState();
        updateMetricsDisplay();

        // Jadwalkan autosave debounced (3 detik setelah ketikan terakhir)
        clearTimeout(STATE.autosaveTimer);
        const syncBadge = document.getElementById('autosave-sync-indicator');
        if (syncBadge) syncBadge.textContent = 'Menyimpan...';

        STATE.autosaveTimer = setTimeout(() => {
            triggerAutosave();
        }, 3000);
    }

    function updateMetricsDisplay() {
        const textarea = document.getElementById('writing-textarea');
        const text = textarea ? textarea.value : '';

        const words = countWords(text);
        const paragraphs = countParagraphs(text);

        const taskNo = STATE.currentTask;
        const minWords = taskNo === 1 ? 150 : 250;

        // Metrik Word Counter (HANYA teks status dan angka, tanpa karakter)
        const wordBadge = document.getElementById('metric-word-badge');
        const wordText = document.getElementById('metric-word-status-text');

        if (wordBadge && wordText) {
            if (words < minWords) {
                const diff = minWords - words;
                wordBadge.className = 'px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200';
                wordBadge.textContent = `${words} / ${minWords} kata`;
                wordText.className = 'text-[11px] text-amber-700 font-medium';
                wordText.textContent = `(kurang ${diff} kata)`;
            } else {
                wordBadge.className = 'px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-50 text-teal-800 border border-teal-200';
                wordBadge.textContent = `${words} / ${minWords} kata`;
                wordText.className = 'text-[11px] text-teal-700 font-bold';
                wordText.textContent = `(memenuhi syarat minimum)`;
            }
        }

        // Metrik Paragraph Counter
        const paraBadge = document.getElementById('metric-para-badge');
        if (paraBadge) {
            paraBadge.textContent = `${paragraphs} paragraf`;
        }

        // Perbarui badge jumlah kata pada Tab Header Task 1 & Task 2
        const t1Words = countWords(STATE.task1Text);
        const t2Words = countWords(STATE.task2Text);

        const t1Badge = document.getElementById('tab-t1-word-badge');
        const t2Badge = document.getElementById('tab-t2-word-badge');
        if (t1Badge) t1Badge.textContent = `${t1Words} kata`;
        if (t2Badge) t2Badge.textContent = `${t2Words} kata`;
    }

    function countWords(str) {
        if (!str || typeof str !== 'string') return 0;
        const clean = str.trim();
        return clean ? clean.split(/\s+/).filter(w => w.length > 0).length : 0;
    }

    function countParagraphs(str) {
        if (!str || typeof str !== 'string') return 0;
        const clean = str.trim();
        return clean ? clean.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
    }

    // --- Autosave ke Server ---
    async function triggerAutosave() {
        if (!STATE.sessionId || STATE.isSubmitting || STATE.status !== 'in_progress') return;

        saveCurrentEditorTextToState();
        const syncBadge = document.getElementById('autosave-sync-indicator');

        try {
            const res = await fetch(`${API_BASE}/writing/save-progress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                body: JSON.stringify({
                    sessionId: STATE.sessionId,
                    deviceId: STATE.deviceId,
                    currentTask: STATE.currentTask,
                    task1Text: STATE.task1Text,
                    task2Text: STATE.task2Text
                })
            });

            if (res.ok) {
                if (syncBadge) {
                    syncBadge.textContent = '✓ Tersimpan di server';
                    syncBadge.className = 'text-[11px] text-emerald-600 font-medium';
                }
            }
        } catch (e) {
            if (syncBadge) {
                syncBadge.textContent = 'Tersimpan lokal (offline)';
                syncBadge.className = 'text-[11px] text-slate-500 font-medium';
            }
        }
    }

    // --- Timer 60 Menit Sinkron Server ---
    function startTimerCountdown() {
        clearInterval(STATE.timerInterval);
        updateTimerBadge();

        STATE.timerInterval = setInterval(() => {
            STATE.remainingSeconds--;

            if (STATE.remainingSeconds <= 0) {
                clearInterval(STATE.timerInterval);
                STATE.remainingSeconds = 0;
                updateTimerBadge();
                alert('Waktu 60 menit telah habis! Lembar tes Writing Anda akan otomatis disubmit ke server.');
                submitExam(true);
                return;
            }

            updateTimerBadge();
        }, 1000);
    }

    function updateTimerBadge() {
        const timerBadge = document.getElementById('writing-timer-badge');
        const timerText = document.getElementById('writing-timer-text');
        if (!timerBadge || !timerText) return;

        const m = Math.floor(STATE.remainingSeconds / 60);
        const s = STATE.remainingSeconds % 60;
        const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        timerText.textContent = timeStr;

        if (STATE.remainingSeconds < 300) { // < 5 menit (merah berkedip)
            timerBadge.className = 'px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black bg-rose-100 text-rose-800 border border-rose-300 animate-pulse flex items-center gap-1.5';
        } else if (STATE.remainingSeconds < 600) { // < 10 menit (oranye)
            timerBadge.className = 'px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1.5';
        } else {
            timerBadge.className = 'px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black bg-slate-100 text-slate-800 border border-slate-300 flex items-center gap-1.5';
        }
    }

    // --- Switch Mobile Tab (Prompt vs Editor) ---
    function switchMobileTab(tab) {
        STATE.activeMobileTab = tab;
        const btnPrompt = document.getElementById('btn-mtab-prompt');
        const btnEditor = document.getElementById('btn-mtab-editor');
        const colPrompt = document.getElementById('col-writing-prompt');
        const colEditor = document.getElementById('col-writing-editor');

        if (tab === 'prompt') {
            if (btnPrompt) btnPrompt.className = 'flex-1 py-2 text-center text-xs font-bold rounded-xl bg-indigo-600 text-white shadow-xs';
            if (btnEditor) btnEditor.className = 'flex-1 py-2 text-center text-xs font-semibold rounded-xl bg-white text-slate-600';
            if (colPrompt) colPrompt.classList.remove('hidden');
            if (colEditor) colEditor.classList.add('hidden');
        } else {
            if (btnPrompt) btnPrompt.className = 'flex-1 py-2 text-center text-xs font-semibold rounded-xl bg-white text-slate-600';
            if (btnEditor) btnEditor.className = 'flex-1 py-2 text-center text-xs font-bold rounded-xl bg-indigo-600 text-white shadow-xs';
            if (colPrompt) colPrompt.classList.add('hidden');
            if (colEditor) colEditor.classList.remove('hidden');
        }
    }

    // --- Submit Dialog & Eksekusi ---
    function promptSubmitExam() {
        saveCurrentEditorTextToState();
        const t1Words = countWords(STATE.task1Text);
        const t2Words = countWords(STATE.task2Text);

        let warnMsg = 'Apakah Anda yakin ingin menyelesaikan dan mengirim lembar tes Writing sekarang? Jawaban tidak dapat diubah setelah submit.';

        if (t1Words < 150 || t2Words < 250) {
            warnMsg = `PERINGATAN BATAS KATA MINIMUM:\n` +
                      (t1Words < 150 ? `• Task 1: ${t1Words} kata (kurang ${150 - t1Words} kata dari syarat 150 kata)\n` : '') +
                      (t2Words < 250 ? `• Task 2: ${t2Words} kata (kurang ${250 - t2Words} kata dari syarat 250 kata)\n` : '') +
                      `\nApakah Anda tetap ingin mengirim lembar jawaban sekarang?`;
        }

        if (confirm(warnMsg)) {
            submitExam(false);
        }
    }

    async function submitExam(isAuto = false) {
        if (STATE.isSubmitting) return;
        STATE.isSubmitting = true;
        clearInterval(STATE.timerInterval);

        saveCurrentEditorTextToState();

        const submitBtn = document.getElementById('btn-submit-writing');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = isAuto ? 'Waktu Habis, Mengirim...' : 'Mengirim Esai...';
        }

        try {
            const res = await fetch(`${API_BASE}/writing/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                body: JSON.stringify({
                    sessionId: STATE.sessionId,
                    deviceId: STATE.deviceId,
                    task1Text: STATE.task1Text,
                    task2Text: STATE.task2Text
                })
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || 'Gagal mengirim lembar tes writing.');
            }

            const data = await res.json();
            renderSubmittedResult(data);

        } catch (err) {
            alert('Terjadi kendala saat mengirim: ' + err.message);
            STATE.isSubmitting = false;
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Kirim Lembar Tes';
            }
        }
    }

    // --- Tampilan Hasil Pasca-Submit Siswa ---
    function renderSubmittedResult(data) {
        clearInterval(STATE.timerInterval);
        STATE.status = data.status || 'submitted';
        STATE.sampleAnswers = data.sampleAnswers || [];

        // Alihkan layar ke View Hasil
        document.getElementById('view-intro-writing').classList.add('hidden');
        document.getElementById('view-active-writing').classList.add('hidden');
        document.getElementById('view-writing-results').classList.remove('hidden');

        // Status Lencana
        const statusBadge = document.getElementById('results-writing-status-badge');
        if (statusBadge) {
            if (data.status === 'graded') {
                statusBadge.className = 'px-3 py-1 rounded-full text-xs font-extrabold bg-teal-100 text-teal-800 border border-teal-200';
                statusBadge.textContent = `✓ SUDAH DINILAI GURU (Band ${data.writingBand ? Number(data.writingBand).toFixed(1) : '-'})`;
            } else {
                statusBadge.className = 'px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 border border-amber-200';
                statusBadge.textContent = '⏳ MENUNGGU PENILAIAN GURU';
            }
        }

        // Render Lembar Penilaian Guru (Jika sudah dinilai)
        const gradeSection = document.getElementById('results-teacher-grade-section');
        if (gradeSection) {
            if (data.status === 'graded') {
                gradeSection.classList.remove('hidden');
                renderTeacherGradingFeedback(data);
            } else {
                gradeSection.classList.add('hidden');
            }
        }

        // Render Structural Check (Informasi Teknis, Bukan Skor Band)
        renderStructuralCheckTable(data.structuralCheck || {});

        // Render Tulisan Siswa (Task 1 & Task 2)
        renderStudentSubmissions(data.task1Text || STATE.task1Text, data.task2Text || STATE.task2Text);

        // Render Sample Answer Teranotasi
        renderSampleAnswers(STATE.sampleAnswers);
    }

    function renderTeacherGradingFeedback(data) {
        const t1c = data.task1Criteria || {};
        const t2c = data.task2Criteria || {};

        const bandOverallEl = document.getElementById('res-teacher-overall-band');
        if (bandOverallEl) bandOverallEl.textContent = `Band ${Number(data.writingBand).toFixed(1)}`;

        const t1BandEl = document.getElementById('res-teacher-t1-band');
        if (t1BandEl) t1BandEl.textContent = `Band ${Number(t1c.band || 0).toFixed(1)}`;

        const t2BandEl = document.getElementById('res-teacher-t2-band');
        if (t2BandEl) t2BandEl.textContent = `Band ${Number(t2c.band || 0).toFixed(1)}`;

        // Breakdown Kriteria Task 1
        const t1Breakdown = document.getElementById('res-teacher-t1-breakdown');
        if (t1Breakdown) {
            t1Breakdown.innerHTML = `
                <span>TA: <strong>${t1c.ta ?? '-'}</strong></span> • 
                <span>CC: <strong>${t1c.cc ?? '-'}</strong></span> • 
                <span>LR: <strong>${t1c.lr ?? '-'}</strong></span> • 
                <span>GRA: <strong>${t1c.gra ?? '-'}</strong></span>
            `;
        }

        // Breakdown Kriteria Task 2
        const t2Breakdown = document.getElementById('res-teacher-t2-breakdown');
        if (t2Breakdown) {
            t2Breakdown.innerHTML = `
                <span>TR: <strong>${t2c.tr ?? '-'}</strong></span> • 
                <span>CC: <strong>${t2c.cc ?? '-'}</strong></span> • 
                <span>LR: <strong>${t2c.lr ?? '-'}</strong></span> • 
                <span>GRA: <strong>${t2c.gra ?? '-'}</strong></span>
            `;
        }

        // Komentar Guru
        const commentT1El = document.getElementById('res-teacher-comment-t1');
        const commentT2El = document.getElementById('res-teacher-comment-t2');
        if (commentT1El) commentT1El.textContent = data.task1Comment || 'Tidak ada catatan tambahan untuk Task 1.';
        if (commentT2El) commentT2El.textContent = data.task2Comment || 'Tidak ada catatan tambahan untuk Task 2.';
    }

    function renderStructuralCheckTable(checkData) {
        const t1 = checkData.task1 || {};
        const t2 = checkData.task2 || {};

        const container = document.getElementById('results-structural-check-container');
        if (!container) return;

        const renderTaskCol = (t, label, minWords) => {
            const meets = t.wordCount >= minWords;
            const cohesivesText = (t.detectedCohesives && t.detectedCohesives.length > 0)
                ? t.detectedCohesives.slice(0, 6).map(c => `<span class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono">${escapeHtml(c)}</span>`).join(' ')
                : '<span class="text-slate-400 italic">Tidak terdeteksi</span>';

            return `
                <div class="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span class="font-bold text-slate-900 text-xs sm:text-sm">${label}</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${meets ? 'bg-teal-50 text-teal-700 border border-teal-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                            ${meets ? '✓ Syarat Panjang Terpenuhi' : '⚠️ Di Bawah Batas Kata'}
                        </span>
                    </div>

                    <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                            <span class="text-[10px] text-slate-500 block">Jumlah Kata Aktual</span>
                            <span class="text-base font-extrabold font-mono ${meets ? 'text-teal-700' : 'text-amber-700'}">${t.wordCount || 0}</span>
                            <span class="text-[10px] text-slate-400 block mt-0.5">Minimal ${minWords} kata</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                            <span class="text-[10px] text-slate-500 block">Jumlah Paragraf</span>
                            <span class="text-base font-extrabold font-mono text-slate-800">${t.paraCount || 0}</span>
                            <span class="text-[10px] text-slate-400 block mt-0.5">Paragraf terpisah</span>
                        </div>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <span class="text-[11px] font-semibold text-slate-700 block">Penanda Wacana Formal (Cohesive Devices):</span>
                        <div class="flex flex-wrap gap-1">
                            ${cohesivesText}
                        </div>
                    </div>

                    <div class="space-y-1 text-xs">
                        <div class="flex items-center justify-between text-[11px] text-slate-600">
                            <span>Variasi Kosakata (Unique Words):</span>
                            <strong class="font-mono text-slate-900">${t.uniqueWordsCount || 0} kata (${t.varietyRatio || 0}%)</strong>
                        </div>
                    </div>
                </div>
            `;
        };

        container.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${renderTaskCol(t1, 'Writing Task 1 (Laporan Data)', 150)}
                ${renderTaskCol(t2, 'Writing Task 2 (Esai Akademik)', 250)}
            </div>
            <p class="text-[11px] text-slate-500 italic mt-3 bg-amber-50/70 p-3 rounded-xl border border-amber-200/60 leading-relaxed">
                ℹ️ ${escapeHtml(checkData.disclaimer || 'Pengecekan di atas adalah audit kelayakan struktural otomatis dan TIDAK menilai kualitas argumen, koherensi ide, maupun ketepatan tata bahasa. Penilaian resmi dilakukan oleh guru.')}
            </p>
        `;
    }

    function renderStudentSubmissions(t1Text, t2Text) {
        const t1El = document.getElementById('results-student-t1-text');
        const t2El = document.getElementById('results-student-t2-text');

        if (t1El) {
            t1El.textContent = t1Text && t1Text.trim().length > 0 ? t1Text : '(Tidak ada teks jawaban diketik)';
        }
        if (t2El) {
            t2El.textContent = t2Text && t2Text.trim().length > 0 ? t2Text : '(Tidak ada teks jawaban diketik)';
        }
    }

    // --- Render Sample Answer (Hanya jika bukan placeholder) ---
    function renderSampleAnswers(sampleAnswersList) {
        const container = document.getElementById('results-sample-answers-container');
        if (!container) return;

        if (!sampleAnswersList || !Array.isArray(sampleAnswersList) || sampleAnswersList.length === 0) {
            container.classList.add('hidden');
            return;
        }

        // Validasi: jika teks masih berisi placeholder "[Teks paragraf dari Anda]" atau kosong, sembunyikan
        const isValidSample = (sample) => {
            if (!sample || !sample.paragraphs || !Array.isArray(sample.paragraphs)) return false;
            return sample.paragraphs.every(p => {
                const txt = p.text || '';
                return txt.trim().length > 0 && !txt.includes('[Teks paragraf dari Anda]');
            });
        };

        const validTasks = sampleAnswersList.filter(s => isValidSample(s.sample_answer));

        if (validTasks.length === 0) {
            container.classList.add('hidden');
            return;
        }

        container.classList.remove('hidden');

        container.innerHTML = validTasks.map(item => {
            const taskNo = item.task_no;
            const sample = item.sample_answer;

            const paragraphsHtml = (sample.paragraphs || []).map(p => `
                <div class="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        ${escapeHtml(p.label)}
                    </span>
                    <p class="text-xs text-slate-800 leading-relaxed font-serif">
                        ${escapeHtml(p.text)}
                    </p>
                    ${p.annotations && p.annotations.length > 0 ? `
                        <div class="pt-2 border-t border-slate-200/80 space-y-1">
                            <span class="text-[10px] font-bold text-slate-500 uppercase block">Anotasi Poin Penulisan:</span>
                            <ul class="list-disc list-inside text-[11px] text-teal-800 space-y-0.5">
                                ${p.annotations.map(a => `<li>${escapeHtml(a)}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `).join('');

            return `
                <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                    <div class="border-b border-slate-100 pb-2 flex items-center justify-between">
                        <h4 class="text-xs sm:text-sm font-bold text-slate-900">
                            Contoh Jawaban Model (Task ${taskNo}) Teranotasi
                        </h4>
                        <span class="text-[10px] text-slate-500 italic">Sebagai bahan pembanding mandiri</span>
                    </div>
                    <div class="space-y-3">
                        ${paragraphsHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- Polling Status Penilaian Guru ---
    async function fetchWritingStatus() {
        if (!STATE.sessionId) return;
        const btnCheck = document.getElementById('btn-refresh-teacher-grade');
        if (btnCheck) {
            btnCheck.disabled = true;
            btnCheck.textContent = 'Memeriksa ke server...';
        }

        try {
            const res = await fetch(`${API_BASE}/writing/status?sessionId=${encodeURIComponent(STATE.sessionId)}&deviceId=${encodeURIComponent(STATE.deviceId)}`, {
                headers: { 'X-Device-Id': STATE.deviceId }
            });
            if (res.ok) {
                const data = await res.json();
                renderSubmittedResult(data);
                if (data.status === 'graded') {
                    alert('Hasil penilaian guru telah tersedia!');
                } else {
                    alert('Status: Tulisan Anda masih dalam antrean penilaian guru.');
                }
            }
        } catch (e) {
            alert('Gagal memeriksa status ke server.');
        } finally {
            if (btnCheck) {
                btnCheck.disabled = false;
                btnCheck.textContent = '🔄 Cek Status Penilaian Guru';
            }
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

})();
