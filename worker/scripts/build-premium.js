// =================================================================
// worker/scripts/build-premium.js
// Memisahkan soal premium dari data publik.
//
//   node worker/scripts/build-premium.js          -> hasilkan worker/premium/*.json
//   node worker/scripts/build-premium.js --strip  -> juga tulis ulang file publik
//                                                    tanpa isi soal premium
//
// Sumber asli disalin sekali ke worker/premium-src/ (di-gitignore).
// =================================================================
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..', '..');
const PUB = path.join(ROOT, 'snbt', 'js');
const SRC = path.join(ROOT, 'worker', 'premium-src');
const OUT = path.join(ROOT, 'worker', 'premium');
const STRIP = process.argv.includes('--strip');

fs.mkdirSync(SRC, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

// Salin sumber asli sekali saja agar dapat dibangun ulang setelah file publik di-strip
for (const f of ['snbt-data.js', 'snbt-akbar-data.js']) {
    const dst = path.join(SRC, f);
    if (!fs.existsSync(dst)) fs.copyFileSync(path.join(PUB, f), dst);
}

function load(file, exportNames) {
    const code = fs.readFileSync(path.join(SRC, file), 'utf8') + `\n;({ ${exportNames.join(', ')} })`;
    return vm.runInNewContext(code, {}, { timeout: 15000 });
}

const { snbtSubtes, snbtBankSoal } = load('snbt-data.js', ['snbtSubtes', 'snbtBankSoal']);
const { snbtTryOutAkbar } = load('snbt-akbar-data.js', ['snbtTryOutAkbar']);

// Bersihkan output lama
for (const f of fs.readdirSync(OUT)) if (f.endsWith('.json')) fs.unlinkSync(path.join(OUT, f));

let nPaket = 0;
const premiumKeys = new Set();

for (const sub of snbtSubtes) {
    for (const p of sub.paketList) {
        if (p.status !== 'premium') continue;
        const key = `${sub.id}_${p.id}`;
        const soal = snbtBankSoal[key];
        if (!soal) { console.warn('! Soal tidak ditemukan untuk', key); continue; }
        fs.writeFileSync(path.join(OUT, `${key}.json`), JSON.stringify(soal));
        premiumKeys.add(key);
        nPaket++;
    }
}

let nAkbar = 0;
const akbarPremiumIds = new Set();
for (const to of snbtTryOutAkbar) {
    if (to.status !== 'premium') continue;
    fs.writeFileSync(path.join(OUT, `akbar_${to.id}.json`), JSON.stringify({ id: to.id, subtesData: to.subtesData }));
    akbarPremiumIds.add(to.id);
    nAkbar++;
}

console.log(`Paket premium: ${nPaket}, Try Out Akbar premium: ${nAkbar}`);
console.log('Total soal publik gratis dipertahankan:', Object.keys(snbtBankSoal).length - premiumKeys.size, 'paket');

if (STRIP) {
    // ---- snbt-data.js publik ----
    let src = fs.readFileSync(path.join(SRC, 'snbt-data.js'), 'utf8');
    const publicBank = {};
    for (const k of Object.keys(snbtBankSoal)) if (!premiumKeys.has(k)) publicBank[k] = snbtBankSoal[k];

    const start = src.indexOf('const snbtBankSoal = {');
    const endMarker = '// =================================================================\n// HELPER UTILITY FUNCTIONS';
    const normalized = src.replace(/\r\n/g, '\n');
    const s2 = normalized.indexOf('const snbtBankSoal = {');
    const e2 = normalized.indexOf(endMarker);
    if (s2 < 0 || e2 < 0) throw new Error('Penanda struktur snbt-data.js tidak ditemukan');
    const header = normalized.slice(0, s2);
    const footer = normalized.slice(e2);
    const newSrc = header
        + '// Catatan: soal PREMIUM tidak lagi disertakan di file publik ini.\n'
        + '// Soal premium dilayani oleh API lisensi (lihat snbt-license.js).\n'
        + 'const snbtBankSoal = ' + JSON.stringify(publicBank) + ';\n\n'
        + footer;
    fs.writeFileSync(path.join(PUB, 'snbt-data.js'), newSrc, 'utf8');

    // ---- snbt-akbar-data.js publik: sisakan metadata tanpa soal ----
    const akbarPublic = snbtTryOutAkbar.map((to) => {
        if (!akbarPremiumIds.has(to.id)) return to;
        const meta = JSON.parse(JSON.stringify(to));
        for (const sid of Object.keys(meta.subtesData || {})) {
            meta.subtesData[sid] = {
                nama: meta.subtesData[sid].nama,
                durasiMenit: meta.subtesData[sid].durasiMenit,
                jumlahSoal: (meta.subtesData[sid].soal || []).length
            };
        }
        return meta;
    });
    const akbarSrc = fs.readFileSync(path.join(SRC, 'snbt-akbar-data.js'), 'utf8').replace(/\r\n/g, '\n');
    const aStart = akbarSrc.indexOf('const snbtTryOutAkbar = [');
    const aEnd = akbarSrc.indexOf('function getSnbtAkbar');
    if (aStart < 0 || aEnd < 0) throw new Error('Penanda struktur snbt-akbar-data.js tidak ditemukan');
    const newAkbar = akbarSrc.slice(0, aStart)
        + '// Catatan: isi soal Try Out Akbar PREMIUM dilayani oleh API lisensi.\n'
        + 'const snbtTryOutAkbar = ' + JSON.stringify(akbarPublic) + ';\n\n'
        + akbarSrc.slice(aEnd);
    fs.writeFileSync(path.join(PUB, 'snbt-akbar-data.js'), newAkbar, 'utf8');
    console.log('File publik di-strip.');
}
