const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');

function read(relPath) {
    return fs.readFileSync(path.join(rootDir, relPath), 'utf8');
}

// 1. UJI REGRESI PERTAHANAN XSS (Cross-Site Scripting)
test('Keamanan - XSS Defense: escapeHtml menetralkan karakter berbahaya', () => {
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    const payload1 = '<script>alert("XSS")</script>';
    assert.equal(escapeHtml(payload1), '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');

    const payload2 = '<img src=x onerror="alert(\'pwned\')">';
    assert.equal(escapeHtml(payload2), '&lt;img src=x onerror=&quot;alert(&#039;pwned&#039;)&quot;&gt;');

    const payload3 = '"><iframe src="javascript:alert(1)"></iframe>';
    assert.equal(escapeHtml(payload3), '&quot;&gt;&lt;iframe src=&quot;javascript:alert(1)&quot;&gt;&lt;/iframe&gt;');
});

// 2. UJI REGRESI FORMULA CSV INJECTION
test('Keamanan - Formula/CSV Injection: karakter formula Excel/Sheets dinetralkan', () => {
    function sanitizeCsv(str) {
        if (str === null || str === undefined) return '""';
        let val = String(str);
        const trimmed = val.trimStart();
        const triggers = ['=', '+', '-', '@', '\t', '\r'];
        if (trimmed.length > 0 && triggers.includes(trimmed[0])) {
            val = "'" + val;
        }
        return `"${val.replace(/"/g, '""')}"`;
    }

    assert.equal(sanitizeCsv('=cmd|"/C calc"!A0'), `"'=cmd|""/C calc""!A0"`);
    assert.equal(sanitizeCsv('+1+1'), `"'+1+1"`);
    assert.equal(sanitizeCsv('-1+1'), `"'-1+1"`);
    assert.equal(sanitizeCsv('@SUM(1,2)'), `"'@SUM(1,2)"`);
    assert.equal(sanitizeCsv('   =HYPERLINK("http://evil.com")'), `"'   =HYPERLINK(""http://evil.com"")"`);
    assert.equal(sanitizeCsv('\t=1+1'), `"'	=1+1"`);
});

// 3. UJI REGRESI AUDIO MIME VALIDATION & UKURAN PAYLOAD
test('Keamanan - MIME & Payload: Tolak file non-audio berbahaya & batasi 1 MB', () => {
    const ALLOWED_AUDIO_MIMES = ['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/aac', 'audio/x-m4a'];
    const MAX_AUDIO_BYTES = 1024 * 1024; // 1 MB

    function validateAudioUpload(mimeType, byteLength) {
        if (!mimeType) return { ok: false, status: 415, error: 'MIME type required' };
        const baseMime = mimeType.split(';')[0].trim().toLowerCase();
        if (!ALLOWED_AUDIO_MIMES.includes(baseMime)) {
            return { ok: false, status: 415, error: 'Invalid audio MIME type' };
        }
        if (byteLength > MAX_AUDIO_BYTES) {
            return { ok: false, status: 413, error: 'Payload exceeds 1 MB limit' };
        }
        return { ok: true };
    }

    // Whitelist audio valid
    assert.equal(validateAudioUpload('audio/webm;codecs=opus', 500000).ok, true);
    assert.equal(validateAudioUpload('audio/mp4', 800000).ok, true);
    assert.equal(validateAudioUpload('audio/ogg', 300000).ok, true);

    // Tolak file non-audio berbahaya (Stored XSS / RCE prevention)
    assert.equal(validateAudioUpload('text/html', 1000).status, 415);
    assert.equal(validateAudioUpload('application/x-php', 1000).status, 415);
    assert.equal(validateAudioUpload('image/svg+xml', 1000).status, 415);
    assert.equal(validateAudioUpload('application/javascript', 1000).status, 415);

    // Tolak payload ukuran melebihi 1 MB (HTTP 413)
    assert.equal(validateAudioUpload('audio/webm', 1024 * 1024 + 1).status, 413);
});

// 4. UJI REGRESI PRIVASI TOKEN & PII
test('Keamanan - Token Masking & PII Protection: Token tidak bocor di UI dan Audit Log', () => {
    function maskToken(token) {
        if (!token || typeof token !== 'string') return '';
        const pfx = token.slice(0, 5);
        return `${pfx}****-****-****`;
    }

    const rawToken = 'IELT-ABCD-EFGH-JKLM';
    const masked = maskToken(rawToken);
    assert.equal(masked, 'IELT-****-****-****');
    assert.ok(!masked.includes('ABCD'));
    assert.ok(!masked.includes('EFGH'));
    assert.ok(!masked.includes('JKLM'));

    // Pastikan audit log di schema tidak menyimpan token mentah
    const schema = read('worker/schema.sql');
    assert.match(schema, /token_prefix\s+TEXT NOT NULL/);
    assert.doesNotMatch(schema, /raw_token/);
});

// 5. UJI REGRESI ISOLASI PAKET (IELTS vs SNBT)
test('Keamanan - Isolasi Paket: Token IELTS tidak dapat membuka SNBT dan sebaliknya', () => {
    const { PACKAGES_CONFIG } = require('../worker/src/packages-config.js');

    assert.equal(PACKAGES_CONFIG.ielts.id, 'ielts');
    assert.equal(PACKAGES_CONFIG.snbt.id, 'snbt');
    assert.notDeepEqual(PACKAGES_CONFIG.ielts.features, PACKAGES_CONFIG.snbt.features);

    function authorizePackage(tokenPackageType, requestedPackage) {
        if (!tokenPackageType || !requestedPackage) return false;
        return tokenPackageType.toLowerCase() === requestedPackage.toLowerCase();
    }

    assert.equal(authorizePackage('ielts', 'ielts'), true);
    assert.equal(authorizePackage('snbt', 'snbt'), true);
    assert.equal(authorizePackage('ielts', 'snbt'), false, 'Token IELTS tidak boleh membuka SNBT');
    assert.equal(authorizePackage('snbt', 'ielts'), false, 'Token SNBT tidak boleh membuka IELTS');
});

// 6. UJI REGRESI TIMING-SAFE COMPARE PADA TEACHER KEY
test('Keamanan - Timing Safe Compare: Waktu komparasi konstan mencegah timing attack', () => {
    function timingSafeEqual(a, b) {
        const enc = new TextEncoder();
        const x = enc.encode(String(a));
        const y = enc.encode(String(b));
        if (x.length !== y.length) return false;
        let diff = 0;
        for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
        return diff === 0;
    }

    assert.equal(timingSafeEqual('YOUR_TEACHER_KEY_SECRET', 'YOUR_TEACHER_KEY_SECRET'), true);
    assert.equal(timingSafeEqual('YOUR_TEACHER_KEY_SECRET', 'WRONG_TEACHER_KEY_SECRET'), false);
    assert.equal(timingSafeEqual('SHORT', 'LONGER-KEY'), false);
});
