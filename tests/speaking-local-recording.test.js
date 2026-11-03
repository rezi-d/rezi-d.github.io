import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const htmlPath = path.resolve('ielts/speaking-mock-test.html');
const enginePath = path.resolve('ielts/speaking-engine.js');

test('Tahap A1: Feature flag ENABLE_SERVER_AUDIO_UPLOAD default bernilai false', () => {
    const engineCode = fs.readFileSync(enginePath, 'utf8');
    const match = engineCode.match(/const\s+ENABLE_SERVER_AUDIO_UPLOAD\s*=\s*(false|true);/);
    assert.ok(match, 'ENABLE_SERVER_AUDIO_UPLOAD harus terdefinisi');
    assert.strictEqual(match[1], 'false', 'Feature flag harus NONAKTIF (false) secara default');
});

test('Tahap A1: Teks pemberitahuan "rekaman hanya ada di perangkatmu dan hilang jika halaman ditutup" ada di HTML dan engine', () => {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const engineContent = fs.readFileSync(enginePath, 'utf8');

    const expectedPhrase = 'rekaman hanya ada di perangkatmu dan hilang jika halaman ditutup';
    assert.ok(
        htmlContent.toLowerCase().includes(expectedPhrase),
        'Pemberitahuan wajib ada di berkas ielts/speaking-mock-test.html'
    );
    assert.ok(
        engineContent.toLowerCase().includes(expectedPhrase),
        'Pemberitahuan wajib ada di peringatan beforeunload ielts/speaking-engine.js'
    );
});

test('Tahap A1: Tombol lokal "Unduh Rekaman" tersedia untuk Part 1, 2, dan 3', () => {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const engineContent = fs.readFileSync(enginePath, 'utf8');

    assert.ok(htmlContent.includes('id="btn-download-recording-qa"'), 'Harus ada tombol unduh untuk Part 1 & 3');
    assert.ok(htmlContent.includes('id="btn-download-recording-cue"'), 'Harus ada tombol unduh untuk Cue Card Part 2');

    assert.ok(engineContent.includes('downloadRecordedAudio'), 'Harus ada fungsi downloadRecordedAudio di engine');
});

test('Tahap A1: Transkripsi Web Speech API tetap opsional dan nonaktif secara default dengan catatan privasi', () => {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const engineContent = fs.readFileSync(enginePath, 'utf8');

    assert.ok(
        htmlContent.includes('id="check-enable-transcript"'),
        'Input checkbox transkrip harus tersedia'
    );
    // Pastikan tidak ada atribut 'checked' pada input checkbox
    const checkboxRegex = /<input[^>]*id="check-enable-transcript"[^>]*>/;
    const match = htmlContent.match(checkboxRegex);
    assert.ok(match, 'Tag input checkbox harus ditemukan');
    assert.ok(!match[0].includes('checked'), 'Checkbox transkrip TIDAK boleh checked secara default');

    assert.ok(
        htmlContent.includes('kebijakan privasi browser Anda') || htmlContent.includes('layanan server milik penyedia browser'),
        'Harus mencantumkan catatan bahwa audio bisa diproses layanan server milik browser'
    );
    assert.ok(
        engineContent.includes('enableTranscript: false'),
        'State enableTranscript harus bernilai false secara default'
    );
});

test('Tahap A1: Perekaman mandiri menggunakan MediaRecorder dan Blob URL tanpa upload ke server', () => {
    const engineContent = fs.readFileSync(enginePath, 'utf8');

    assert.ok(engineContent.includes('URL.createObjectURL(blob)'), 'Harus membuat Blob URL lokal');
    assert.ok(engineContent.includes('localRecordingsMap'), 'Harus menyimpan audio di localRecordingsMap di memori browser');
    assert.ok(engineContent.includes('!ENABLE_SERVER_AUDIO_UPLOAD'), 'Harus memiliki percabangan untuk mode mandiri');
});

test('Tahap A1: Fungsi pemutaran audio mengutamakan Blob URL lokal sebelum menghubungi server', () => {
    const engineContent = fs.readFileSync(enginePath, 'utf8');

    // Pastikan playRecordedAudioPlayback memeriksa localRecordingsMap
    const playFnMatch = engineContent.match(/function playRecordedAudioPlayback[\s\S]*?\{([\s\S]*?)\n    \}/);
    assert.ok(playFnMatch, 'Fungsi playRecordedAudioPlayback harus ada');
    const playBody = playFnMatch[1];
    assert.ok(playBody.includes('localRecordingsMap'), 'Pemutaran harus memeriksa localRecordingsMap');
    assert.ok(playBody.includes('new Audio(rec.url)'), 'Pemutaran lokal harus memutar langsung dari rec.url');
});

test('Tahap A1: Ekstensi download audio menyesuaikan mimeType secara akurat', () => {
    function resolveAudioExtension(mime) {
        if (!mime) return 'webm';
        if (mime.includes('mp4')) return 'mp4';
        if (mime.includes('ogg')) return 'ogg';
        if (mime.includes('wav')) return 'wav';
        return 'webm';
    }

    assert.strictEqual(resolveAudioExtension('audio/webm;codecs=opus'), 'webm');
    assert.strictEqual(resolveAudioExtension('audio/webm'), 'webm');
    assert.strictEqual(resolveAudioExtension('audio/mp4;codecs="mp4a.40.2"'), 'mp4');
    assert.strictEqual(resolveAudioExtension('audio/ogg'), 'ogg');
    assert.strictEqual(resolveAudioExtension('audio/wav'), 'wav');
    assert.strictEqual(resolveAudioExtension(''), 'webm');
});
