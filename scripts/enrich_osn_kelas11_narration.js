#!/usr/bin/env node
/**
 * scripts/enrich_osn_kelas11_narration.js
 * Injects teacher commentary, pedagogical thought guidance, and full audio narration player
 * into all 6 sub-babs of Bab 8: Pengayaan Olimpiade Sains (OSN) Kelas XI Matematika SMA.
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
                        <audio id="audio-olimpiade" preload="metadata" src="${firstTrack.src}"></audio>

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
    <!-- LOGIKA AUDIO PLAYER PEMBINA OLIMPIADE PER MATERI -->
    <script>
        const slideAudios = ${jsonTracks};

        const audioEl = document.getElementById('audio-olimpiade');
        const playBtn = document.getElementById('audio-play-btn');
        const seekBar = document.getElementById('audio-seek');
        const timeDisplay = document.getElementById('audio-time');
        let currentSlideIdx = 0;

        function formatTime(seconds) {
            if (isNaN(seconds)) return '00:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
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

            if (!audioEl) return;

            const wasPlaying = !audioEl.paused;
            if (!audioEl.src.endsWith(item.src)) {
                audioEl.src = item.src;
                audioEl.load();
                if (seekBar) seekBar.value = 0;
                if (timeDisplay) timeDisplay.textContent = '00:00 / 00:00';
            }

            if (autoPlay || wasPlaying) {
                audioEl.play().then(() => {
                    if (playBtn) playBtn.textContent = '⏸️';
                }).catch(() => {
                    if (playBtn) playBtn.textContent = '▶️';
                });
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
            if (!audioEl) return;
            if (audioEl.paused) {
                audioEl.play().then(() => {
                    if (playBtn) playBtn.textContent = '⏸️';
                }).catch(() => {
                    if (playBtn) playBtn.textContent = '▶️';
                });
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
        }

        function seekAudio(val) {
            if (!audioEl || isNaN(audioEl.duration)) return;
            audioEl.currentTime = (val / 100) * audioEl.duration;
        }

        function changeAudioSpeed(val) {
            if (!audioEl) return;
            audioEl.playbackRate = parseFloat(val);
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

            if (typeof renderMathInElement === 'function') {
                renderMathInElement(document.body, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false }
                    ],
                    throwOnError: false
                });
            }
        });
    </script>`;
}

for (const mod of modules) {
    const filePath = path.join(__dirname, '../matematika/kelas-11/pengayaan-olimpiade', mod.file);
    let html = fs.readFileSync(filePath, 'utf8');

    console.log(`Processing ${mod.file}...`);

    // 1. Insert #audio-player-card if not present
    if (!html.includes('id="audio-player-card"')) {
        const targetMarker = '<!-- SLIDER CONTROLLER (TOP STICKY) -->';
        if (html.includes(targetMarker)) {
            const cardHtml = buildAudioPlayerCard(mod.data.audioTracks[0]);
            html = html.replace(targetMarker, cardHtml + '\n\n                ' + targetMarker);
            console.log(`  Added #audio-player-card.`);
        }
    }

    // 2. Locate slides
    const slideRegex = /<section class="ielts-slide[\s\S]*?<\/section>/g;
    const slides = [...html.matchAll(slideRegex)].map(m => m[0]);

    if (slides.length !== 5) {
        console.error(`  Error: Expected 5 slides, found ${slides.length} in ${mod.file}`);
        continue;
    }

    const narrationCards = [
        mod.data.slide1Narasi,
        mod.data.slide2Narasi,
        mod.data.slide3Narasi,
        mod.data.slide4Narasi
    ];

    let newHtml = html;

    // Process Slides 1 to 4: inject before closing </section>
    for (let i = 0; i < 4; i++) {
        let slideStr = slides[i];

        if (!slideStr.includes('Trik Olimpiade:')) {
            // Also inject button in slide header if needed
            let headerBtn = `<button type="button" onclick="playCurrentSlideAudio(${i})" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition shrink-0 self-start sm:self-auto">
                                <span>🎙️</span> <span>Dengarkan Narasi Poin ${i+1}</span>
                            </button>`;
            
            // Insert header button right before the badge in slide header
            let updatedSlide = slideStr;
            const badgeMarker = '<span class="text-xs bg-amber-50 text-amber-700 font-semibold px-2.5 py-1 rounded-full border border-amber-200 font-mono">';
            if (updatedSlide.includes(badgeMarker)) {
                updatedSlide = updatedSlide.replace(badgeMarker, `<div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">\n                            ${headerBtn}\n                            ${badgeMarker}`);
                // close div after badge span
                const endSpanIdx = updatedSlide.indexOf('</span>', updatedSlide.indexOf(badgeMarker));
                if (endSpanIdx !== -1) {
                    updatedSlide = updatedSlide.slice(0, endSpanIdx + 7) + '\n                        </div>' + updatedSlide.slice(endSpanIdx + 7);
                }
            }

            const lastClosingTag = updatedSlide.lastIndexOf('</section>');
            if (lastClosingTag !== -1) {
                updatedSlide = updatedSlide.slice(0, lastClosingTag) + '\n' + narrationCards[i] + '\n                    </section>';
                newHtml = newHtml.replace(slideStr, updatedSlide);
                console.log(`  Slide ${i+1}: Injected narration card and header button.`);
            }
        }
    }

    // Process Slide 5 (Kuis): inject slide5Narasi before <!-- SOAL 1 -->
    let slide5Str = slides[4];
    if (!slide5Str.includes('Panduan Taktis Evaluasi')) {
        let updatedSlide5 = slide5Str;
        
        // Add header button to slide 5 header
        const slide5BadgeMarker = '<span class="text-xs bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full font-mono">3 Soal OSN-K / OSN-P</span>';
        if (updatedSlide5.includes(slide5BadgeMarker)) {
            const slide5Btn = `<div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                            <button type="button" onclick="playCurrentSlideAudio(4)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition shrink-0">
                                <span>🎙️</span> <span>Dengarkan Panduan Kuis</span>
                            </button>
                            ${slide5BadgeMarker}
                        </div>`;
            updatedSlide5 = updatedSlide5.replace(slide5BadgeMarker, slide5Btn);
        }

        const soal1Marker = '<!-- SOAL 1 -->';
        if (updatedSlide5.includes(soal1Marker)) {
            updatedSlide5 = updatedSlide5.replace(soal1Marker, mod.data.slide5Narasi + '\n\n                        ' + soal1Marker);
            newHtml = newHtml.replace(slide5Str, updatedSlide5);
            console.log(`  Slide 5: Injected checklist card and header button before SOAL 1.`);
        }
    }

    // 3. Inject audio script before </body>
    if (!newHtml.includes('const slideAudios =')) {
        const audioScript = buildSlideAudioScript(mod.data.audioTracks);
        const scriptMarker = '<!-- KaTeX Autorender -->';
        if (newHtml.includes(scriptMarker)) {
            newHtml = newHtml.replace(scriptMarker, audioScript + '\n\n    ' + scriptMarker);
            console.log(`  Added audio player script before KaTeX.`);
        } else {
            const bodyClose = '</body>';
            newHtml = newHtml.replace(bodyClose, audioScript + '\n' + bodyClose);
            console.log(`  Added audio player script before </body>.`);
        }
    }

    fs.writeFileSync(filePath, newHtml, 'utf8');
    console.log(`✓ Saved ${mod.file} (size: ${newHtml.length} bytes).\n`);
}

console.log('All 6 sub-bab files successfully enriched with teacher narration and audio player!');
