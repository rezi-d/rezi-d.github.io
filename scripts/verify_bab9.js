const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'matematika/kelas-10/pengayaan-olimpiade/aljabar-olimpiade-ketaksamaan-dan-polinomial.html',
    'matematika/kelas-10/pengayaan-olimpiade/teori-bilangan-keterbagian-dan-modulo.html',
    'matematika/kelas-10/pengayaan-olimpiade/geometri-dan-trigonometri-olimpiade.html',
    'matematika/kelas-10/pengayaan-olimpiade/kombinatorika-dan-peluang-olimpiade.html',
    'matematika/kelas-10/pengayaan-olimpiade/bedah-soal-asli-osnk-matematika.html',
    'matematika/kelas-10/pengayaan-olimpiade/simulasi-dan-trik-pembuktian-osnp.html'
];

let totalAudiosChecked = 0;

for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf8');
    if (!html.includes('data-bab="pengayaan-olimpiade"')) throw new Error('Missing data-bab in ' + f);
    if (!html.includes('id="audio-olimpiade"')) throw new Error('Missing audio element in ' + f);
    if (!html.includes('ieltsSlider')) throw new Error('Missing ieltsSlider in ' + f);
    if (!html.includes('ielts-slide')) throw new Error('Missing ielts-slide in ' + f);
    if (!html.includes('id="audio-player-card"')) throw new Error('Missing audio-player-card in ' + f);
    if (!html.includes('id="audio-track-title"')) throw new Error('Missing audio-track-title in ' + f);
    if (!html.includes('id="audio-track-desc"')) throw new Error('Missing audio-track-desc in ' + f);
    if (!html.includes('id="audio-transcript-title"')) throw new Error('Missing audio-transcript-title in ' + f);
    if (!html.includes('id="audio-transcript-text"')) throw new Error('Missing audio-transcript-text in ' + f);

    // Check playCurrentSlideAudio(0) through (4) buttons
    for (let i = 0; i < 5; i++) {
        if (!html.includes(`playCurrentSlideAudio(${i})`)) {
            throw new Error(`Missing playCurrentSlideAudio(${i}) button in ${f}`);
        }
    }

    // Extract all audio src in slideAudios
    const matches = [...html.matchAll(/src:\s*"(\/storage\/audio\/matematika\/kelas-10\/olimpiade\/[^"]+\.mp3)"/g)];
    if (matches.length !== 5) {
        throw new Error(`Expected 5 audio sources in slideAudios for ${f}, but found ${matches.length}`);
    }

    for (const match of matches) {
        const relPath = match[1].replace(/^\//, '');
        if (!fs.existsSync(relPath)) {
            throw new Error(`Audio file does not exist: ${relPath} referenced in ${f}`);
        }
        const stat = fs.statSync(relPath);
        if (stat.size < 10000) {
            throw new Error(`Audio file too small (${stat.size} bytes): ${relPath}`);
        }
        totalAudiosChecked++;
    }

    console.log(`✅ Verified components & 5 audios in: ${f}`);
}

console.log(`\n🎉 ALL 6 HTML MODULES VERIFIED!`);
console.log(` Total per-materi audio files verified: ${totalAudiosChecked}/30`);
