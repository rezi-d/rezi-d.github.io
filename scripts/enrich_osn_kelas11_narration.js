#!/usr/bin/env node
/**
 * scripts/enrich_osn_kelas11_narration.js
 * Injects teacher commentary, pedagogical thought guidance, and resilient audio player
 * into all 6 sub-babs of Bab 8: Pengayaan OSN Kelas XI Matematika SMA.
 *
 * IMPORTANT: Uses literal function callbacks in .replace() to prevent $ and KaTeX $$ 
 * from being evaluated as String.prototype.replace patterns.
 */

const fs = require('fs');
const path = require('path');

const modules = [
    {
        file: 'aljabar-polinomial-dan-vieta-olimpiade.html',
        data: require('./osn_kelas11_data/subbab1_aljabar.js'),
        subbabNum: 1
    },
    {
        file: 'teori-bilangan-dan-persamaan-diophantine.html',
        data: require('./osn_kelas11_data/subbab2_teori_bilangan.js'),
        subbabNum: 2
    },
    {
        file: 'geometri-dan-trigonometri-olimpiade-lanjutan.html',
        data: require('./osn_kelas11_data/subbab3_geometri.js'),
        subbabNum: 3
    },
    {
        file: 'ketaksamaan-dan-deret-teleskopik-olimpiade.html',
        data: require('./osn_kelas11_data/subbab4_ketaksamaan.js'),
        subbabNum: 4
    },
    {
        file: 'kombinatorika-lanjutan-dan-teori-graf.html',
        data: require('./osn_kelas11_data/subbab5_kombinatorika.js'),
        subbabNum: 5
    },
    {
        file: 'bedah-soal-dan-strategi-esai-osnp-matematika.html',
        data: require('./osn_kelas11_data/subbab6_esai.js'),
        subbabNum: 6
    }
];

function buildAudioPlayerCard(firstTrack) {
    const relativeSrc = firstTrack.src.startsWith('/') ? '../../..' + firstTrack.src : firstTrack.src;
    return `
                    <!-- KARTU AUDIO PENJELASAN GURU PEMBINA PER MATERI (STUDIO ID) -->
                    <div id="audio-player-card" class="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/60 border border-amber-200/90 shadow-xs space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-2.5">
                                <span class="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0">
                                    🎙️
                                </span>
                                <div>
                                    <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                                        <span id="audio-track-title">${firstTrack.title}</span>
                                        <span class="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-extrabold uppercase tracking-wide">Studio ID</span>
                                    </div>
                                    <p id="audio-track-desc" class="text-[11px] text-slate-600">${firstTrack.desc}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <select id="audio-speed-select" onchange="changeAudioSpeed(this.value)" class="text-xs font-bold bg-white border border-slate-300 rounded-lg px-2 py-1 text-slate-700 hover:border-amber-400 focus:outline-none">
                                    <option value="1">1.0x</option>
                                    <option value="1.25">1.25x</option>
                                    <option value="1.5">1.5x</option>
                                </select>
                                <button type="button" onclick="toggleTranscript()" class="text-xs font-bold bg-white border border-slate-300 hover:bg-slate-50 rounded-lg px-2.5 py-1 text-slate-700 transition">
                                    📜 Naskah
                                </button>
                            </div>
                        </div>

                        <!-- Audio Tag -->
                        <audio id="audio-olimpiade" preload="metadata" src="${relativeSrc}"></audio>

                        <div class="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-slate-200/80">
                            <button type="button" id="audio-play-btn" onclick="togglePlayAudio()" class="w-9 h-9 rounded-lg bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center font-bold text-sm transition shrink-0 shadow-xs" aria-label="Putar Audio">
                                ▶️
                            </button>
                            <div class="flex-grow flex items-center gap-2">
                                <input type="range" id="audio-seek" min="0" max="100" value="0" oninput="seekAudio(this.value)" class="w-full accent-amber-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg">
                            </div>
                            <span id="audio-time" class="font-mono text-xs font-bold text-slate-600 shrink-0">00:00 / 00:00</span>
                        </div>

                        <!-- Transkrip Dinamis per Materi -->
                        <div id="audio-transcript-box" class="hidden p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
                            <strong id="audio-transcript-title" class="text-slate-900 block mb-1">📝 Transkrip Suara Pembina (${firstTrack.title}):</strong>
                            <p id="audio-transcript-text" class="italic text-slate-600 leading-relaxed">"${firstTrack.text}"</p>
                        </div>
                    </div>`;
}

function buildSlideAudioScript(tracks) {
    const jsonTracks = JSON.stringify(tracks, null, 12);
    return `
    <!-- LOGIKA AUDIO PLAYER PEMBINA OLIMPIADE PER MATERI (MP3 + RESILIENT WEB SPEECH FALLBACK) -->
    <script>
        const slideAudios = ${jsonTracks};

        const audioEl = document.getElementById('audio-olimpiade');
        const playBtn = document.getElementById('audio-play-btn');
        const seekBar = document.getElementById('audio-seek');
        const timeDisplay = document.getElementById('audio-time');
        let currentSlideIdx = 0;
        let isSpeakingFallback = false;

        function resolveAudioSrc(src) {
            if (!src) return '';
            if (src.startsWith('/')) {
                return '../../..' + src;
            }
            return src;
        }

        function formatTime(seconds) {
            if (isNaN(seconds)) return '00:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        }

        function stopFallbackSpeech() {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            isSpeakingFallback = false;
            if (playBtn) playBtn.textContent = '▶️';
        }

        function playFallbackSpeech(text) {
            if (!('speechSynthesis' in window)) {
                console.warn('Web Speech API tidak didukung pada peramban ini.');
                return;
            }
            window.speechSynthesis.cancel();
            
            const cleanText = text
                .replace(/\\\w+/g, ' ')
                .replace(/[$_#*{}\[\]]/g, ' ')
                .replace(/\\s+/g, ' ')
                .trim();

            const utter = new SpeechSynthesisUtterance(cleanText);
            utter.lang = 'id-ID';
            const speed = parseFloat(document.getElementById('audio-speed-select')?.value || 1.0);
            utter.rate = speed;

            const voices = window.speechSynthesis.getVoices();
            const idVoice = voices.find(v => v.lang && (v.lang.startsWith('id') || v.lang.startsWith('ID')));
            if (idVoice) utter.voice = idVoice;

            utter.onstart = () => {
                isSpeakingFallback = true;
                if (playBtn) playBtn.textContent = '⏸️';
            };
            utter.onend = () => {
                isSpeakingFallback = false;
                if (playBtn) playBtn.textContent = '▶️';
            };
            utter.onerror = () => {
                isSpeakingFallback = false;
                if (playBtn) playBtn.textContent = '▶️';
            };

            window.speechSynthesis.speak(utter);
        }

        function loadSlideAudio(idx, autoPlay = false) {
            if (idx < 0 || idx >= slideAudios.length) return;
            currentSlideIdx = idx;
            const item = slideAudios[idx];
            
            const titleEl = document.getElementById('audio-track-title');
            const descEl = document.getElementById('audio-track-desc');
            const transTitleEl = document.getElementById('audio-transcript-title');
            const transTextEl = document.getElementById('audio-transcript-text');

            if (titleEl) titleEl.textContent = item.title;
            if (descEl) descEl.textContent = item.desc;
            if (transTitleEl) transTitleEl.textContent = '📝 Transkrip Suara Pembina (' + item.title + '):';
            if (transTextEl) transTextEl.textContent = '"' + item.text + '"';

            if (isSpeakingFallback) {
                stopFallbackSpeech();
            }

            if (!audioEl) return;

            const resolvedSrc = resolveAudioSrc(item.src);
            const wasPlaying = !audioEl.paused;
            const currentSrc = audioEl.getAttribute('src') || '';

            if (currentSrc !== resolvedSrc && !audioEl.src.endsWith(item.src)) {
                audioEl.src = resolvedSrc;
                audioEl.load();
                if (seekBar) seekBar.value = 0;
                if (timeDisplay) timeDisplay.textContent = '00:00 / 00:00';
            }

            if (autoPlay || wasPlaying) {
                const playPromise = audioEl.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        if (playBtn) playBtn.textContent = '⏸️';
                    }).catch((err) => {
                        console.warn('Audio MP3 play failed, falling back to Web Speech API:', err);
                        playFallbackSpeech(item.text);
                    });
                }
            } else {
                if (playBtn) playBtn.textContent = '▶️';
            }
        }

        function playCurrentSlideAudio(idx) {
            loadSlideAudio(idx, true);
            const card = document.getElementById('audio-player-card');
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        function togglePlayAudio() {
            if (isSpeakingFallback) {
                stopFallbackSpeech();
                return;
            }

            if (!audioEl) {
                const item = slideAudios[currentSlideIdx];
                if (item) playFallbackSpeech(item.text);
                return;
            }

            if (audioEl.paused) {
                const playPromise = audioEl.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        if (playBtn) playBtn.textContent = '⏸️';
                    }).catch((err) => {
                        console.warn('Audio MP3 play failed, falling back to Web Speech API:', err);
                        const item = slideAudios[currentSlideIdx];
                        if (item) playFallbackSpeech(item.text);
                    });
                }
            } else {
                audioEl.pause();
                if (playBtn) playBtn.textContent = '▶️';
            }
        }

        if (audioEl) {
            audioEl.addEventListener('timeupdate', () => {
                if (!isNaN(audioEl.duration) && audioEl.duration > 0) {
                    const pct = (audioEl.currentTime / audioEl.duration) * 100;
                    if (seekBar) seekBar.value = pct;
                    if (timeDisplay) timeDisplay.textContent = formatTime(audioEl.currentTime) + ' / ' + formatTime(audioEl.duration);
                }
            });

            audioEl.addEventListener('ended', () => {
                if (playBtn) playBtn.textContent = '▶️';
                if (seekBar) seekBar.value = 0;
                if (timeDisplay) timeDisplay.textContent = '00:00 / ' + formatTime(audioEl.duration);
            });

            audioEl.addEventListener('loadedmetadata', () => {
                if (timeDisplay) timeDisplay.textContent = '00:00 / ' + formatTime(audioEl.duration);
            });

            audioEl.addEventListener('error', (e) => {
                console.warn('Audio HTML5 error detected on src:', audioEl.src, e);
                if (isSpeakingFallback) return;
                if (playBtn && playBtn.textContent === '⏸️') {
                    const item = slideAudios[currentSlideIdx];
                    if (item) playFallbackSpeech(item.text);
                }
            });
        }

        function seekAudio(val) {
            if (!audioEl || isNaN(audioEl.duration)) return;
            audioEl.currentTime = (val / 100) * audioEl.duration;
        }

        function changeAudioSpeed(val) {
            const speed = parseFloat(val);
            if (audioEl) audioEl.playbackRate = speed;
            if (isSpeakingFallback && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const item = slideAudios[currentSlideIdx];
                if (item) playFallbackSpeech(item.text);
            }
        }

        function toggleTranscript() {
            const box = document.getElementById('audio-transcript-box');
            if (!box) return;
            box.classList.toggle('hidden');
        }

        window.addEventListener('load', () => {
            loadSlideAudio(0, false);

            if (window.ieltsSlider) {
                const origUpdate = window.ieltsSlider.updateSlide.bind(window.ieltsSlider);
                window.ieltsSlider.updateSlide = function(shouldScroll) {
                    origUpdate(shouldScroll);
                    loadSlideAudio(window.ieltsSlider.currentIndex, false);
                };
            }


        });
    </script>`;
}

for (const mod of modules) {
    const filePath = path.join(__dirname, '../matematika/kelas-11/pengayaan-olimpiade', mod.file);
    let html = fs.readFileSync(filePath, 'utf8');

    console.log(`Processing ${mod.file}...`);

    // 1. Insert #audio-player-card before <!-- SLIDER CONTROLLER (TOP STICKY) -->
    const targetMarker = '<!-- SLIDER CONTROLLER (TOP STICKY) -->';
    if (!html.includes('id="audio-player-card"')) {
        const cardHtml = buildAudioPlayerCard(mod.data.audioTracks[0]);
        html = html.replace(targetMarker, () => cardHtml + '\n\n                ' + targetMarker);
        console.log(`  Added #audio-player-card.`);
    }

    // 2. Inject Narasi Cards into Slide 1, 2, 3, 4 before the next slide marker
    const slideMarkers = [
        { start: '<!-- SLIDE 1:', next: '<!-- SLIDE 2:', card: mod.data.slide1Narasi, idx: 0 },
        { start: '<!-- SLIDE 2:', next: '<!-- SLIDE 3:', card: mod.data.slide2Narasi, idx: 1 },
        { start: '<!-- SLIDE 3:', next: '<!-- SLIDE 4:', card: mod.data.slide3Narasi, idx: 2 },
        { start: '<!-- SLIDE 4:', next: '<!-- SLIDE 5:', card: mod.data.slide4Narasi, idx: 3 }
    ];

    for (const sm of slideMarkers) {
        const startPos = html.indexOf(sm.start);
        const nextPos = html.indexOf(sm.next);

        if (startPos !== -1 && nextPos !== -1) {
            let slideSection = html.slice(startPos, nextPos);

            if (!slideSection.includes('Trik Olimpiade:')) {
                // Add header button in slide header
                const headerBtn = `<div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                            <button type="button" onclick="playCurrentSlideAudio(${sm.idx})" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition shrink-0 self-start sm:self-auto">
                                <span>🎙️</span> <span>Dengarkan Narasi Poin ${sm.idx + 1}</span>
                            </button>`;
                
                const badgeTag = '<span class="text-xs bg-amber-50 text-amber-700 font-semibold px-2.5 py-1 rounded-full border border-amber-200 font-mono">';
                if (slideSection.includes(badgeTag)) {
                    slideSection = slideSection.replace(badgeTag, () => headerBtn + '\n                            ' + badgeTag);
                    const endSpan = slideSection.indexOf('</span>', slideSection.indexOf(badgeTag));
                    if (endSpan !== -1) {
                        slideSection = slideSection.slice(0, endSpan + 7) + '\n                        </div>' + slideSection.slice(endSpan + 7);
                    }
                }

                // Insert narration card before the last </section> of this slide
                const lastClose = slideSection.lastIndexOf('</section>');
                if (lastClose !== -1) {
                    slideSection = slideSection.slice(0, lastClose) + '\n' + sm.card + '\n                    </section>';
                    html = html.slice(0, startPos) + slideSection + html.slice(nextPos);
                    console.log(`  Slide ${sm.idx + 1}: Injected card & header button.`);
                }
            }
        }
    }

    // 3. Inject slide 5 narasi before <!-- SOAL 1 -->
    const slide5Pos = html.indexOf('<!-- SLIDE 5:');
    if (slide5Pos !== -1) {
        const soal1Pos = html.indexOf('<!-- SOAL 1 -->', slide5Pos);
        if (soal1Pos !== -1 && !html.includes('Panduan Taktis Evaluasi &amp; Trik Kuis')) {
            // Add header button for slide 5
            const slide5BadgeMarker = '<span class="text-xs bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full font-mono">3 Soal OSN-K / OSN-P</span>';
            if (html.includes(slide5BadgeMarker)) {
                const slide5Btn = `<div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                            <button type="button" onclick="playCurrentSlideAudio(4)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition shrink-0">
                                <span>🎙️</span> <span>Dengarkan Panduan Kuis</span>
                            </button>
                            ${slide5BadgeMarker}
                        </div>`;
                html = html.replace(slide5BadgeMarker, () => slide5Btn);
            }

            // Insert slide5Narasi before <!-- SOAL 1 -->
            const insertion = mod.data.slide5Narasi + '\n\n                        ';
            html = html.replace('<!-- SOAL 1 -->', () => insertion + '<!-- SOAL 1 -->');
            console.log(`  Slide 5: Injected checklist card before SOAL 1.`);
        }
    }

    // 4. Inject audio script before </body>
    if (!html.includes('const slideAudios =')) {
        const audioScript = buildSlideAudioScript(mod.data.audioTracks);
        const scriptMarker = '<!-- KaTeX Autorender -->';
        if (html.includes(scriptMarker)) {
            html = html.replace(scriptMarker, () => audioScript + '\n\n    ' + scriptMarker);
            console.log(`  Added audio player script.`);
        }
    }

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Saved ${mod.file} (size: ${html.length} bytes).\n`);
}

console.log('All 6 sub-bab files successfully enriched without any string replace corruption!');
