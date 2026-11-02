/**
 * IELTS-Style Speaking Engine — AjarKita
 * Mengelola simulasi tes Speaking:
 * - Pengecekan mikrofon & pengukur sensitivitas suara (Audio Level Meter)
 * - Perekaman audio mandiri via MediaRecorder (kompresi Opus/WebM atau MP4 iOS)
 * - Unggah langsung per pertanyaan (Immediate Upload) dengan indikator status
 * - Alur terstruktur 3 Bagian:
 *   - Part 1: Everyday Topics (9 pertanyaan singkat, 40s)
 *   - Part 2: Cue Card (1 menit persiapan + notepad ide, 2 menit bicara)
 *   - Part 3: Two-way Discussion (5 pertanyaan analitis, 60s)
 * - Draf transkrip mesin opsional (nonaktif secara default)
 * - Tinjauan status & integrasi evaluasi guru
 */

(function () {
    'use strict';

    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? (window.location.port === '8787' ? '' : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev')
        : 'https://kimia-snbt-api.kimia-ajarkita.workers.dev';

    const STATE = {
        testId: 'speaking1',
        sessionId: localStorage.getItem('ielts_speaking_session_id') || '',
        deviceId: getOrSetDeviceId(),
        nama: '',
        kelas: '',
        testData: null,
        flatQuestions: [],
        currentIndex: 0,
        recordedQuestionsMap: {}, // { [questionId]: { duration, uploaded: true } }
        part2Notes: '',
        enableTranscript: false,

        // Media & Audio State
        mediaStream: null,
        mediaRecorder: null,
        audioChunks: [],
        audioContext: null,
        analyserNode: null,
        visualizerAnimId: null,
        isRecording: false,
        activeBlob: null,
        activeBlobBase64: null,
        recordingStartTime: 0,
        recordingTimerInterval: null,
        recordedSeconds: 0,

        // Cue Card Specific State
        cuePhase: 'prep', // 'prep' | 'speak'
        cueTimerInterval: null,
        cueRemainingSeconds: 60,

        // Speech Recognition (Optional)
        speechRecognizer: null,
        currentDraftTranscript: ''
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

    // --- DOM Ready ---
    document.addEventListener('DOMContentLoaded', () => {
        initEvents();
        checkExistingSession();
    });

    function initEvents() {
        // Mic check buttons
        const btnTestMic = document.getElementById('btn-test-mic');
        if (btnTestMic) btnTestMic.addEventListener('click', handleTestMic);

        const btnPlayTestAudio = document.getElementById('btn-play-test-audio');
        if (btnPlayTestAudio) btnPlayTestAudio.addEventListener('click', handlePlayTestAudio);

        // Optional transcript toggle
        const checkTranscript = document.getElementById('check-enable-transcript');
        if (checkTranscript) {
            checkTranscript.addEventListener('change', (e) => {
                STATE.enableTranscript = e.target.checked;
            });
        }

        // Start exam button
        const btnStart = document.getElementById('btn-start-speaking');
        if (btnStart) btnStart.addEventListener('click', handleStartExam);

        // Resume & Discard buttons
        const btnResume = document.getElementById('btn-resume-speaking');
        if (btnResume) btnResume.addEventListener('click', handleResumeExam);

        const btnDiscard = document.getElementById('btn-discard-speaking');
        if (btnDiscard) btnDiscard.addEventListener('click', handleDiscardExam);

        // Q&A Part 1 & 3 Controls
        const btnStartRecordQa = document.getElementById('btn-start-record-qa');
        if (btnStartRecordQa) btnStartRecordQa.addEventListener('click', startRecordingCurrentQuestion);

        const btnStopRecordQa = document.getElementById('btn-stop-record-qa');
        if (btnStopRecordQa) btnStopRecordQa.addEventListener('click', stopRecordingCurrentQuestion);

        const btnPlayPlaybackQa = document.getElementById('btn-play-playback-qa');
        if (btnPlayPlaybackQa) btnPlayPlaybackQa.addEventListener('click', playRecordedAudioPlayback);

        const btnNextQa = document.getElementById('btn-next-qa');
        if (btnNextQa) btnNextQa.addEventListener('click', handleNextQuestion);

        const btnPrevQa = document.getElementById('btn-prev-qa');
        if (btnPrevQa) btnPrevQa.addEventListener('click', handlePrevQuestion);

        const btnTtsSpeak = document.getElementById('btn-tts-speak');
        if (btnTtsSpeak) btnTtsSpeak.addEventListener('click', handleSpeakPrompt);

        // Part 2 Cue Card Controls
        const btnReadyToSpeakCue = document.getElementById('btn-ready-to-speak-cue');
        if (btnReadyToSpeakCue) btnReadyToSpeakCue.addEventListener('click', startCueCardSpeakingPhase);

        const btnStopSpeakCue = document.getElementById('btn-stop-speak-cue');
        if (btnStopSpeakCue) btnStopSpeakCue.addEventListener('click', stopCueCardSpeakingPhase);

        const cueNotesInput = document.getElementById('cue-notes-input');
        if (cueNotesInput) {
            cueNotesInput.addEventListener('input', (e) => {
                STATE.part2Notes = e.target.value;
            });
        }
    }

    // --- Audio Format Detection ---
    function getBestSupportedMimeType() {
        const types = [
            'audio/webm;codecs=opus',
            'audio/webm',
            'audio/mp4',
            'audio/ogg;codecs=opus',
            'audio/wav'
        ];
        if (typeof MediaRecorder === 'undefined') return '';
        for (const t of types) {
            if (MediaRecorder.isTypeSupported(t)) return t;
        }
        return '';
    }

    // --- Pengecekan Mikrofon (Mic Check) ---
    let testAudioBlob = null;
    let testAudioUrl = null;

    async function handleTestMic() {
        const btnTest = document.getElementById('btn-test-mic');
        const lblTest = document.getElementById('btn-test-mic-label');
        const badge = document.getElementById('mic-status-badge');
        const btnPlay = document.getElementById('btn-play-test-audio');

        try {
            if (!STATE.mediaStream) {
                STATE.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            }

            setupAudioVisualizer(STATE.mediaStream, 'mic-level-bar', 'mic-level-label');

            const mimeType = getBestSupportedMimeType();
            const recorder = new MediaRecorder(STATE.mediaStream, mimeType ? { mimeType } : undefined);
            const chunks = [];

            recorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) chunks.push(e.data);
            };

            recorder.onstop = () => {
                testAudioBlob = new Blob(chunks, { type: mimeType || 'audio/webm' });
                if (testAudioUrl) URL.revokeObjectURL(testAudioUrl);
                testAudioUrl = URL.createObjectURL(testAudioBlob);
                btnPlay.classList.remove('hidden');
                badge.className = 'px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold';
                badge.textContent = '✓ Mikrofon Berfungsi';
                lblTest.textContent = 'Uji Lagi (3 Detik)';
                btnTest.disabled = false;
            };

            recorder.start();
            btnTest.disabled = true;

            let countdown = 3;
            lblTest.textContent = `Bicara sekarang... (${countdown}s)`;
            const cdInterval = setInterval(() => {
                countdown--;
                if (countdown > 0) {
                    lblTest.textContent = `Bicara sekarang... (${countdown}s)`;
                } else {
                    clearInterval(cdInterval);
                    recorder.stop();
                }
            }, 1000);

        } catch (err) {
            console.error('Mic check error:', err);
            badge.className = 'px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold';
            badge.textContent = '❌ Akses Mic Ditolak / Tidak Ditemukan';
            alert('Akses mikrofon diperlukan untuk mengikuti simulasi Speaking. Harap izinkan akses mikrofon di pengaturan browser Anda.');
        }
    }

    function handlePlayTestAudio() {
        if (!testAudioUrl) return;
        const audio = new Audio(testAudioUrl);
        audio.play().catch(e => console.error('Audio playback error:', e));
    }

    function setupAudioVisualizer(stream, barId, labelId) {
        try {
            if (!STATE.audioContext) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                STATE.audioContext = new AudioCtx();
            }
            if (STATE.audioContext.state === 'suspended') {
                STATE.audioContext.resume();
            }

            const source = STATE.audioContext.createMediaStreamSource(stream);
            STATE.analyserNode = STATE.audioContext.createAnalyser();
            STATE.analyserNode.fftSize = 256;
            source.connect(STATE.analyserNode);

            const bufferLength = STATE.analyserNode.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            const bar = document.getElementById(barId);
            const label = document.getElementById(labelId);

            function draw() {
                if (!STATE.analyserNode) return;
                STATE.visualizerAnimId = requestAnimationFrame(draw);
                STATE.analyserNode.getByteFrequencyData(dataArray);

                let sum = 0;
                for (let i = 0; i < bufferLength; i++) {
                    sum += dataArray[i];
                }
                const average = sum / bufferLength;
                const percentage = Math.min(100, Math.round((average / 128) * 100));

                if (bar) bar.style.width = percentage + '%';
                if (label) label.textContent = percentage + '%';
            }
            draw();
        } catch (e) {
            console.warn('Visualizer setup error:', e);
        }
    }

    // --- Cek Sesi Sebelumnya (Resume) ---
    async function checkExistingSession() {
        if (!STATE.sessionId) return;
        try {
            const res = await fetch(`${API_BASE}/speaking/status?sessionId=${encodeURIComponent(STATE.sessionId)}&deviceId=${encodeURIComponent(STATE.deviceId)}`, {
                headers: { 'X-Device-Id': STATE.deviceId },
                credentials: 'omit'
            });
            if (!res.ok) return;
            const data = await res.json();
            if (data.ok && data.sessionId) {
                const banner = document.getElementById('banner-resume-speaking');
                if (banner && data.status === 'in_progress') {
                    banner.classList.remove('hidden');
                } else if (data.status === 'submitted' || data.status === 'graded') {
                    renderResultView(data);
                }
            }
        } catch (e) {
            console.warn('Check existing speaking session failed:', e);
        }
    }

    function handleResumeExam() {
        startExamSession(true);
    }

    function handleDiscardExam() {
        localStorage.removeItem('ielts_speaking_session_id');
        STATE.sessionId = '';
        const banner = document.getElementById('banner-resume-speaking');
        if (banner) banner.classList.add('hidden');
    }

    // --- Mulai Ujian (Start Exam) ---
    async function handleStartExam() {
        const namaInput = document.getElementById('input-nama');
        const kelasInput = document.getElementById('input-kelas');
        const errBox = document.getElementById('form-error-msg');

        const nama = (namaInput ? namaInput.value : '').trim();
        const kelas = (kelasInput ? kelasInput.value : '').trim();

        if (nama.length < 2) {
            showFormError('Nama lengkap wajib diisi minimal 2 karakter.');
            return;
        }
        if (kelas.length < 1) {
            showFormError('Kelas / Rombel wajib diisi (misal: 12 MIPA 1).');
            return;
        }

        // Pastikan mikrofon sudah memiliki izin
        try {
            if (!STATE.mediaStream) {
                STATE.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            }
        } catch (e) {
            showFormError('Mikrofon belum diizinkan. Silakan klik "Uji Mikrofon" dan izinkan akses di browser.');
            return;
        }

        STATE.nama = nama;
        STATE.kelas = kelas;
        errBox.classList.add('hidden');

        startExamSession(false);
    }

    function showFormError(msg) {
        const errBox = document.getElementById('form-error-msg');
        if (errBox) {
            errBox.textContent = msg;
            errBox.classList.remove('hidden');
        }
    }

    async function startExamSession(isResume) {
        const btnStart = document.getElementById('btn-start-speaking');
        if (btnStart) {
            btnStart.disabled = true;
            btnStart.innerHTML = '<span>Memuat Sesi Tes...</span>';
        }

        try {
            const res = await fetch(`${API_BASE}/speaking/start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                credentials: 'omit',
                body: JSON.stringify({
                    testId: STATE.testId,
                    nama: STATE.nama,
                    kelas: STATE.kelas,
                    deviceId: STATE.deviceId,
                    sessionId: isResume ? STATE.sessionId : ''
                })
            });

            const data = await res.json();
            if (!data.ok) {
                throw new Error(data.error || 'Gagal memulai sesi speaking.');
            }

            STATE.sessionId = data.sessionId;
            localStorage.setItem('ielts_speaking_session_id', data.sessionId);

            if (data.alreadySubmitted) {
                renderResultView(data);
                return;
            }

            STATE.testData = data.testData;
            flattenQuestions(data.testData);

            // Tandai soal yang sudah direkam (jika resume)
            if (data.recordedQuestions && Array.isArray(data.recordedQuestions)) {
                data.recordedQuestions.forEach(r => {
                    STATE.recordedQuestionsMap[r.question_id] = { duration: r.duration_seconds, uploaded: true };
                });
            }
            if (data.part2Notes) {
                STATE.part2Notes = data.part2Notes;
            }

            // Temukan index soal pertama yang belum direkam
            let firstUnrecorded = STATE.flatQuestions.findIndex(q => !STATE.recordedQuestionsMap[q.id]);
            STATE.currentIndex = firstUnrecorded !== -1 ? firstUnrecorded : 0;

            launchTestInterface();

        } catch (err) {
            console.error('Start exam failed:', err);
            showFormError(err.message || 'Koneksi ke server gagal. Coba lagi.');
            if (btnStart) {
                btnStart.disabled = false;
                btnStart.innerHTML = '<span>Mulai Simulasi Speaking</span><span>→</span>';
            }
        }
    }

    // --- Meratakan Daftar Soal (Flatten Pipeline) ---
    function flattenQuestions(testData) {
        const flat = [];

        // Part 1
        if (testData.part1 && testData.part1.topics) {
            testData.part1.topics.forEach(top => {
                (top.questions || []).forEach(q => {
                    flat.push({
                        part: 1,
                        partTitle: 'Part 1: Everyday Topics',
                        topicTitle: top.category,
                        id: q.id,
                        text: q.text,
                        maxSeconds: q.max_seconds || 40
                    });
                });
            });
        }

        // Part 2 (Cue Card)
        if (testData.part2 && testData.part2.cue_card) {
            const cc = testData.part2.cue_card;
            flat.push({
                part: 2,
                partTitle: 'Part 2: The Long Turn',
                topicTitle: 'Cue Card (Long Turn)',
                id: cc.id || 'p2q1',
                topic: cc.topic,
                bullets: cc.bullet_points || [],
                prepSeconds: cc.prep_seconds || 60,
                maxSeconds: cc.speaking_seconds || 120
            });
        }

        // Part 3
        if (testData.part3 && testData.part3.questions) {
            testData.part3.questions.forEach(q => {
                flat.push({
                    part: 3,
                    partTitle: 'Part 3: Two-way Discussion',
                    topicTitle: testData.part3.theme || 'Abstract Discussion',
                    id: q.id,
                    text: q.text,
                    maxSeconds: q.max_seconds || 60
                });
            });
        }

        STATE.flatQuestions = flat;
    }

    function launchTestInterface() {
        document.getElementById('view-intro-speaking').classList.add('hidden');
        document.getElementById('view-result-speaking').classList.add('hidden');
        document.getElementById('view-test-speaking').classList.remove('hidden');

        document.getElementById('top-bar-nama').textContent = STATE.nama || 'Peserta';
        document.getElementById('top-bar-kelas').textContent = STATE.kelas || '';

        renderCurrentQuestion();
    }

    // --- Render Soal Berdasarkan Index Aktif ---
    function renderCurrentQuestion() {
        resetRecordingState();

        const q = STATE.flatQuestions[STATE.currentIndex];
        if (!q) return;

        // Update Top Bar
        document.getElementById('badge-current-part').textContent = q.partTitle;
        document.getElementById('label-question-progress').textContent = `Soal ${STATE.currentIndex + 1} / ${STATE.flatQuestions.length}`;

        // Update Upload Status
        updateUploadIndicator(q.id);

        if (q.part === 2) {
            // Tampilkan Tampilan Cue Card (Part 2)
            document.getElementById('subview-qa').classList.add('hidden');
            document.getElementById('subview-cue-card').classList.remove('hidden');
            renderCueCardView(q);
        } else {
            // Tampilkan Tampilan Tanya Jawab Biasa (Part 1 & 3)
            document.getElementById('subview-cue-card').classList.add('hidden');
            document.getElementById('subview-qa').classList.remove('hidden');
            renderQaView(q);
        }
    }

    function updateUploadIndicator(qId) {
        const ind = document.getElementById('upload-status-indicator');
        if (!ind) return;
        const isUploaded = STATE.recordedQuestionsMap[qId] && STATE.recordedQuestionsMap[qId].uploaded;

        if (isUploaded) {
            ind.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500"></span><span class="text-emerald-700">✓ Tersimpan di server</span>`;
        } else {
            ind.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-300"></span><span class="text-slate-500">Belum Direkam</span>`;
        }
    }

    // --- Sub-View A: Tanya Jawab (Part 1 & Part 3) ---
    function renderQaView(q) {
        document.getElementById('qa-category-badge').textContent = q.part === 1 ? 'Part 1 • Everyday Topic' : 'Part 3 • Discussion Theme';
        document.getElementById('qa-topic-title').textContent = q.topicTitle;
        document.getElementById('qa-id-badge').textContent = `ID: ${q.id}`;
        document.getElementById('qa-time-limit-badge').textContent = `Maksimal ${q.maxSeconds} Detik`;
        document.getElementById('qa-question-text').textContent = q.text;

        document.getElementById('record-timer-text').textContent = formatSeconds(q.maxSeconds);
        document.getElementById('record-status-label').textContent = 'Klik tombol di bawah untuk mulai berbicara';

        const btnStart = document.getElementById('btn-start-record-qa');
        const btnStop = document.getElementById('btn-stop-record-qa');
        const btnPlay = document.getElementById('btn-play-playback-qa');
        const btnPrev = document.getElementById('btn-prev-qa');
        const btnNext = document.getElementById('btn-next-qa');

        btnStart.classList.remove('hidden');
        btnStop.classList.add('hidden');

        // Jika soal ini sudah pernah direkam sebelumnya
        if (STATE.recordedQuestionsMap[q.id]) {
            btnStart.innerHTML = '<span>🔄</span><span>Rekam Ulang Jawaban</span>';
            btnPlay.classList.remove('hidden');
        } else {
            btnStart.innerHTML = '<span>🎤</span><span>Mulai Bicara (Rekam)</span>';
            btnPlay.classList.add('hidden');
        }

        // Navigasi Prev
        if (STATE.currentIndex > 0) {
            btnPrev.classList.remove('hidden');
        } else {
            btnPrev.classList.add('hidden');
        }

        // Navigasi Next / Submit
        if (STATE.currentIndex === STATE.flatQuestions.length - 1) {
            btnNext.innerHTML = '<span>Selesaikan Ujian Speaking</span><span>✓</span>';
            btnNext.className = 'px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5';
        } else {
            btnNext.innerHTML = '<span>Lanjut ke Soal Berikutnya</span><span>→</span>';
            btnNext.className = 'px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center gap-1.5';
        }

        // Sembunyikan draf transkrip box
        const transcriptBox = document.getElementById('box-draft-transcript-qa');
        if (transcriptBox) transcriptBox.classList.add('hidden');
    }

    // --- Sub-View B: Cue Card (Part 2) ---
    function renderCueCardView(q) {
        document.getElementById('cue-card-topic').textContent = q.topic;
        const bulletsUl = document.getElementById('cue-card-bullets');
        bulletsUl.innerHTML = '';
        q.bullets.forEach(b => {
            const li = document.createElement('li');
            li.textContent = b;
            bulletsUl.appendChild(li);
        });

        const notesInput = document.getElementById('cue-notes-input');
        if (notesInput) notesInput.value = STATE.part2Notes || '';

        // Reset ke Fase 1 Persiapan
        STATE.cuePhase = 'prep';
        STATE.cueRemainingSeconds = q.prepSeconds || 60;
        document.getElementById('cue-phase-badge').className = 'px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold';
        document.getElementById('cue-phase-badge').textContent = 'Fase 1: Persiapan 1 Menit';
        document.getElementById('cue-timer-label').textContent = 'Sisa Waktu Persiapan:';
        document.getElementById('cue-timer-display').className = 'text-3xl sm:text-4xl font-extrabold font-mono text-amber-600';
        document.getElementById('cue-timer-display').textContent = formatSeconds(STATE.cueRemainingSeconds);

        const btnReady = document.getElementById('btn-ready-to-speak-cue');
        const btnStop = document.getElementById('btn-stop-speak-cue');
        btnReady.classList.remove('hidden');
        btnStop.classList.add('hidden');

        // Jalankan countdown 1 menit persiapan
        if (STATE.cueTimerInterval) clearInterval(STATE.cueTimerInterval);
        STATE.cueTimerInterval = setInterval(() => {
            STATE.cueRemainingSeconds--;
            document.getElementById('cue-timer-display').textContent = formatSeconds(STATE.cueRemainingSeconds);
            if (STATE.cueRemainingSeconds <= 0) {
                clearInterval(STATE.cueTimerInterval);
                startCueCardSpeakingPhase();
            }
        }, 1000);
    }

    function startCueCardSpeakingPhase() {
        if (STATE.cueTimerInterval) clearInterval(STATE.cueTimerInterval);

        STATE.cuePhase = 'speak';
        const q = STATE.flatQuestions[STATE.currentIndex];
        STATE.cueRemainingSeconds = q.maxSeconds || 120;

        document.getElementById('cue-phase-badge').className = 'px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold';
        document.getElementById('cue-phase-badge').textContent = 'Fase 2: Waktu Bicara (Merekam)';
        document.getElementById('cue-timer-label').textContent = 'Sisa Waktu Bicara:';
        document.getElementById('cue-timer-display').className = 'text-3xl sm:text-4xl font-extrabold font-mono text-red-600';
        document.getElementById('cue-timer-display').textContent = formatSeconds(STATE.cueRemainingSeconds);

        const btnReady = document.getElementById('btn-ready-to-speak-cue');
        const btnStop = document.getElementById('btn-stop-speak-cue');
        btnReady.classList.add('hidden');
        btnStop.classList.remove('hidden');

        // Mulai Perekaman Audio Part 2
        startRecordingAudio(q.id, q.maxSeconds, () => {
            stopCueCardSpeakingPhase();
        });

        // Jalankan countdown 2 menit bicara
        STATE.cueTimerInterval = setInterval(() => {
            STATE.cueRemainingSeconds--;
            document.getElementById('cue-timer-display').textContent = formatSeconds(STATE.cueRemainingSeconds);
            if (STATE.cueRemainingSeconds <= 0) {
                clearInterval(STATE.cueTimerInterval);
                stopCueCardSpeakingPhase();
            }
        }, 1000);
    }

    function stopCueCardSpeakingPhase() {
        if (STATE.cueTimerInterval) clearInterval(STATE.cueTimerInterval);
        stopRecordingCurrentQuestion();
    }

    // --- Perekaman Suara Mandiri (MediaRecorder Engine) ---
    async function startRecordingCurrentQuestion() {
        const q = STATE.flatQuestions[STATE.currentIndex];
        if (!q) return;

        const btnStart = document.getElementById('btn-start-record-qa');
        const btnStop = document.getElementById('btn-stop-record-qa');
        const btnPlay = document.getElementById('btn-play-playback-qa');
        const pulsingDot = document.getElementById('record-pulsing-dot');
        const statusLbl = document.getElementById('record-status-label');

        btnStart.classList.add('hidden');
        btnStop.classList.remove('hidden');
        btnPlay.classList.add('hidden');
        pulsingDot.className = 'w-3.5 h-3.5 rounded-full bg-red-500 pulse-recording';
        statusLbl.textContent = 'Merekam suara Anda... Bicara dengan jelas ke mikrofon';

        startRecordingAudio(q.id, q.maxSeconds, () => {
            stopRecordingCurrentQuestion();
        });
    }

    async function startRecordingAudio(questionId, maxSeconds, onTimeUp) {
        resetRecordingState();

        try {
            if (!STATE.mediaStream) {
                STATE.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            }

            setupAudioVisualizer(STATE.mediaStream, 'live-audio-bar', null);

            const mimeType = getBestSupportedMimeType();
            STATE.mediaRecorder = new MediaRecorder(STATE.mediaStream, mimeType ? { mimeType } : undefined);
            STATE.audioChunks = [];

            STATE.mediaRecorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) STATE.audioChunks.push(e.data);
            };

            STATE.mediaRecorder.onstop = async () => {
                const blob = new Blob(STATE.audioChunks, { type: mimeType || 'audio/webm' });
                STATE.activeBlob = blob;
                await processAndUploadRecording(questionId, blob, mimeType);
            };

            STATE.mediaRecorder.start(500); // chunk setiap 500ms
            STATE.isRecording = true;
            STATE.recordingStartTime = Date.now();
            STATE.recordedSeconds = 0;

            // Timer hitung mundur
            let remaining = maxSeconds;
            const timerDisplay = document.getElementById('record-timer-text');
            if (timerDisplay) timerDisplay.textContent = formatSeconds(remaining);

            STATE.recordingTimerInterval = setInterval(() => {
                remaining--;
                STATE.recordedSeconds++;
                if (timerDisplay) timerDisplay.textContent = formatSeconds(remaining);

                if (remaining <= 0) {
                    clearInterval(STATE.recordingTimerInterval);
                    if (onTimeUp) onTimeUp();
                }
            }, 1000);

            // Opsional: Draf transkrip mesin jika diaktifkan siswa
            if (STATE.enableTranscript) {
                startMachineSpeechRecognition();
            }

        } catch (err) {
            console.error('Failed to start recording:', err);
            alert('Tidak dapat memulai rekaman: ' + err.message);
            resetRecordingState();
        }
    }

    function stopRecordingCurrentQuestion() {
        if (STATE.recordingTimerInterval) clearInterval(STATE.recordingTimerInterval);
        if (STATE.speechRecognizer) {
            try { STATE.speechRecognizer.stop(); } catch (e) { }
        }

        const pulsingDot = document.getElementById('record-pulsing-dot');
        if (pulsingDot) pulsingDot.className = 'w-3.5 h-3.5 rounded-full bg-slate-300';

        const statusLbl = document.getElementById('record-status-label');
        if (statusLbl) statusLbl.textContent = 'Memproses rekaman & mengunggah ke server...';

        if (STATE.mediaRecorder && STATE.mediaRecorder.state !== 'inactive') {
            STATE.mediaRecorder.stop();
        }
        STATE.isRecording = false;
    }

    // --- Pemrosesan & Unggah Langsung ke Server (Immediate Upload) ---
    async function processAndUploadRecording(questionId, blob, mimeType) {
        const ind = document.getElementById('upload-status-indicator');
        if (ind) {
            ind.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span><span class="text-amber-700">Sedang mengunggah...</span>`;
        }

        const duration = STATE.recordedSeconds || Math.max(1, Math.round((Date.now() - STATE.recordingStartTime) / 1000));

        // Konversi Blob ke Base64
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64Data = (reader.result || '').split(',')[1];
            if (!base64Data) {
                handleUploadFailure(questionId, 'Konversi audio gagal.');
                return;
            }

            try {
                const res = await fetch(`${API_BASE}/speaking/upload-recording`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Device-Id': STATE.deviceId
                    },
                    credentials: 'omit',
                    body: JSON.stringify({
                        sessionId: STATE.sessionId,
                        questionId: questionId,
                        deviceId: STATE.deviceId,
                        audioData: base64Data,
                        mimeType: mimeType || 'audio/webm',
                        transcript: STATE.currentDraftTranscript || '',
                        durationSeconds: duration
                    })
                });

                const data = await res.json();
                if (!data.ok) throw new Error(data.error || 'Server menolak unggahan rekaman.');

                // Sukses
                STATE.recordedQuestionsMap[questionId] = { duration, uploaded: true };
                updateUploadIndicator(questionId);

                const statusLbl = document.getElementById('record-status-label');
                if (statusLbl) statusLbl.textContent = '✓ Rekaman tersimpan aman di server.';

                // Tampilkan tombol Playback
                const btnPlay = document.getElementById('btn-play-playback-qa');
                if (btnPlay) btnPlay.classList.remove('hidden');

                const btnStart = document.getElementById('btn-start-record-qa');
                const btnStop = document.getElementById('btn-stop-record-qa');
                if (btnStart) {
                    btnStart.classList.remove('hidden');
                    btnStart.innerHTML = '<span>🔄</span><span>Rekam Ulang</span>';
                }
                if (btnStop) btnStop.classList.add('hidden');

                // Hapus salinan blob lokal untuk privasi & memori
                STATE.activeBlob = null;
                STATE.activeBlobBase64 = null;

            } catch (err) {
                console.error('Upload failed:', err);
                handleUploadFailure(questionId, err.message);
            }
        };
        reader.readAsDataURL(blob);
    }

    function handleUploadFailure(questionId, errMsg) {
        const ind = document.getElementById('upload-status-indicator');
        if (ind) {
            ind.innerHTML = `<span class="w-2 h-2 rounded-full bg-red-500"></span><span class="text-red-700 font-bold">⚠️ Gagal simpan (${errMsg}).</span>`;
        }
        const statusLbl = document.getElementById('record-status-label');
        if (statusLbl) statusLbl.textContent = '⚠️ Gagal mengunggah ke server. Silakan coba rekam ulang.';

        const btnStart = document.getElementById('btn-start-record-qa');
        const btnStop = document.getElementById('btn-stop-record-qa');
        if (btnStart) btnStart.classList.remove('hidden');
        if (btnStop) btnStop.classList.add('hidden');
    }

    // --- Pemutaran Ulang Rekaman Siswa ---
    async function playRecordedAudioPlayback() {
        const q = STATE.flatQuestions[STATE.currentIndex];
        if (!q) return;

        try {
            const audioUrl = `${API_BASE}/speaking/audio?sessionId=${encodeURIComponent(STATE.sessionId)}&questionId=${encodeURIComponent(q.id)}&deviceId=${encodeURIComponent(STATE.deviceId)}`;
            const audio = new Audio(audioUrl);
            audio.play().catch(e => {
                console.warn('Playback error:', e);
                alert('Tidak dapat memutar rekaman langsung dari server.');
            });
        } catch (e) {
            console.error('Playback error:', e);
        }
    }

    // --- TTS Suara Soal Penguji (SpeechSynthesis) ---
    function handleSpeakPrompt() {
        const q = STATE.flatQuestions[STATE.currentIndex];
        if (!q || !('speechSynthesis' in window)) {
            alert('Fitur text-to-speech tidak didukung di browser ini.');
            return;
        }

        window.speechSynthesis.cancel();
        const textToSpeak = q.part === 2 ? `Part 2. ${q.topic}` : q.text;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'en-GB'; // Prefer British English
        utterance.rate = 0.95;

        // Cari suara English jika tersedia
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en-GB') || v.lang.startsWith('en'));
        if (enVoice) utterance.voice = enVoice;

        window.speechSynthesis.speak(utterance);
    }

    // --- Opsional Web Speech API (Draf Transkrip Mesin) ---
    function startMachineSpeechRecognition() {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRec) return;

        try {
            STATE.speechRecognizer = new SpeechRec();
            STATE.speechRecognizer.continuous = true;
            STATE.speechRecognizer.interimResults = true;
            STATE.speechRecognizer.lang = 'en-US';

            STATE.currentDraftTranscript = '';
            const box = document.getElementById('box-draft-transcript-qa');
            const txt = document.getElementById('text-draft-transcript-qa');
            if (box) box.classList.remove('hidden');

            STATE.speechRecognizer.onresult = (event) => {
                let interim = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        STATE.currentDraftTranscript += event.results[i][0].transcript + ' ';
                    } else {
                        interim += event.results[i][0].transcript;
                    }
                }
                if (txt) txt.textContent = (STATE.currentDraftTranscript + ' ' + interim).trim() || '...';
            };

            STATE.speechRecognizer.onerror = (e) => {
                console.warn('SpeechRecognition error (ignored):', e);
            };

            STATE.speechRecognizer.start();
        } catch (e) {
            console.warn('Speech recognition start failed:', e);
        }
    }

    // --- Navigasi Antar Soal ---
    function handleNextQuestion() {
        // Jika soal saat ini belum direkam, beri konfirmasi ramah
        const currentQ = STATE.flatQuestions[STATE.currentIndex];
        if (currentQ && !STATE.recordedQuestionsMap[currentQ.id]) {
            const ok = confirm('Anda belum merekam jawaban untuk soal ini. Lewati ke soal berikutnya?');
            if (!ok) return;
        }

        if (STATE.currentIndex < STATE.flatQuestions.length - 1) {
            STATE.currentIndex++;
            renderCurrentQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Selesai semua soal -> Submit ujian
            submitFullSpeakingTest();
        }
    }

    function handlePrevQuestion() {
        if (STATE.currentIndex > 0) {
            STATE.currentIndex--;
            renderCurrentQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // --- Selesai & Submit Ujian Speaking ---
    async function submitFullSpeakingTest() {
        const ok = confirm('Apakah Anda yakin ingin menyelesaikan simulasi Speaking ini? Semua rekaman akan dikirim ke guru untuk dievaluasi.');
        if (!ok) return;

        try {
            const res = await fetch(`${API_BASE}/speaking/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': STATE.deviceId
                },
                credentials: 'omit',
                body: JSON.stringify({
                    sessionId: STATE.sessionId,
                    deviceId: STATE.deviceId,
                    part2Notes: STATE.part2Notes || ''
                })
            });

            const data = await res.json();
            if (!data.ok) throw new Error(data.error || 'Gagal mengirim berkas tes.');

            renderResultView({
                status: 'submitted',
                nama: STATE.nama,
                kelas: STATE.kelas,
                recordedCount: Object.keys(STATE.recordedQuestionsMap).length,
                sampleAnswers: data.sampleAnswers
            });

        } catch (err) {
            console.error('Submit speaking test error:', err);
            alert('Gagal menyelesaikan tes: ' + err.message);
        }
    }

    // --- View 3: Tampilan Hasil / Selesai ---
    function renderResultView(data) {
        document.getElementById('view-intro-speaking').classList.add('hidden');
        document.getElementById('view-test-speaking').classList.add('hidden');
        document.getElementById('view-result-speaking').classList.remove('hidden');

        document.getElementById('result-nama').textContent = data.nama_peserta || STATE.nama || '-';
        document.getElementById('result-kelas').textContent = data.kelas || STATE.kelas || '-';

        const count = data.recordedCount || Object.keys(STATE.recordedQuestionsMap).length || 15;
        document.getElementById('result-recorded-count').textContent = `${count} Soal`;

        const bandEl = document.getElementById('result-speaking-band');
        const badgeEl = document.getElementById('result-status-badge');

        if (data.status === 'graded' && typeof data.speaking_band === 'number') {
            badgeEl.className = 'px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs';
            badgeEl.textContent = 'Sudah Dinilai Guru';
            bandEl.textContent = `Band ${data.speaking_band.toFixed(1)}`;
        } else {
            badgeEl.className = 'px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs';
            badgeEl.textContent = 'Menunggu Penilaian Guru';
            bandEl.textContent = 'Menunggu';
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetRecordingState() {
        if (STATE.recordingTimerInterval) clearInterval(STATE.recordingTimerInterval);
        if (STATE.cueTimerInterval) clearInterval(STATE.cueTimerInterval);
        if (STATE.visualizerAnimId) cancelAnimationFrame(STATE.visualizerAnimId);
        if (STATE.mediaRecorder && STATE.mediaRecorder.state !== 'inactive') {
            try { STATE.mediaRecorder.stop(); } catch (e) { }
        }
        if (STATE.speechRecognizer) {
            try { STATE.speechRecognizer.stop(); } catch (e) { }
        }

        STATE.isRecording = false;
        STATE.audioChunks = [];
        STATE.activeBlob = null;
        STATE.currentDraftTranscript = '';

        const bar = document.getElementById('live-audio-bar');
        if (bar) bar.style.width = '0%';
    }

    function formatSeconds(sec) {
        const s = Math.max(0, Math.floor(sec));
        const m = Math.floor(s / 60);
        const rem = s % 60;
        return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
    }

})();
