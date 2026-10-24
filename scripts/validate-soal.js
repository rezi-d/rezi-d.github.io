#!/usr/bin/env node
// =================================================================
// scripts/validate-soal.js
// Validator Otomatis Bank Soal SNBT & Try Out Akbar
// 
// Fungsi:
// 1. Mendeteksi tanda dolar tunggal ($...$) dan opsi --fix untuk auto-konversi ke \(...\)
// 2. Mendeteksi soal kembar / duplikat antar paket
// 3. Memverifikasi struktur soal (options A-E, kunci jawaban, dan pembahasan)
//
// Penggunaan:
//   node scripts/validate-soal.js         -> Scan & lapor temuan
//   node scripts/validate-soal.js --fix   -> Scan & langsung rapikan otomatis
// =================================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FILE_DATA = path.join(ROOT, 'snbt', 'js', 'snbt-data.js');
const FILE_AKBAR = path.join(ROOT, 'snbt', 'js', 'snbt-akbar-data.js');
const DO_FIX = process.argv.includes('--fix');

console.log('🔍 Memulai Validasi Bank Soal SNBT & Try Out Akbar...\n');

let totalErrors = 0;
let totalWarnings = 0;
let totalSoalChecked = 0;

// Helper Regex untuk Single Dollar: $...$ bukan $$...$$
const SINGLE_DOLLAR_REGEX = /(?<!\$)\$(?!\$)([^$\n]+?)(?<!\$)\$(?!\$)/g;

function cleanText(txt) {
    if (!txt) return '';
    return txt.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}

// -------------------------------------------------------------
// 1. Periksa snbt-data.js
// -------------------------------------------------------------
if (!fs.existsSync(FILE_DATA)) {
    console.error('❌ File snbt-data.js tidak ditemukan di:', FILE_DATA);
    process.exit(1);
}

let codeData = fs.readFileSync(FILE_DATA, 'utf8');
let snbtSubtes, snbtBankSoal;
try {
    const res = (new Function(codeData + '; return { snbtSubtes, snbtBankSoal };'))();
    snbtSubtes = res.snbtSubtes;
    snbtBankSoal = res.snbtBankSoal;
} catch (e) {
    console.error('❌ Gagal mem-parse snbt-data.js:', e.message);
    process.exit(1);
}

const seenQuestions = new Map();

console.log('📦 Memeriksa snbt-data.js (Bank Soal Subtes)...');
let dataFixCount = 0;

for (const [paketKey, soalList] of Object.entries(snbtBankSoal || {})) {
    if (!Array.isArray(soalList)) continue;
    soalList.forEach((q, idx) => {
        totalSoalChecked++;
        const loc = `snbt-data [${paketKey}] No. ${idx + 1} (id: ${q.id})`;

        // 1. Cek Kelengkapan Field
        if (!q.soal) {
            console.error(`  ❌ [${loc}] Tidak ada teks 'soal'!`);
            totalErrors++;
        }
        if (!Array.isArray(q.options) || q.options.length < 2) {
            console.error(`  ❌ [${loc}] Opsi jawaban kurang atau tidak ada!`);
            totalErrors++;
        } else {
            const optIds = q.options.map(o => o.id);
            if (!q.kunci || !optIds.includes(q.kunci)) {
                console.error(`  ❌ [${loc}] Kunci jawaban '${q.kunci}' tidak cocok dengan opsi yang ada: [${optIds.join(', ')}]`);
                totalErrors++;
            }
        }
        if (!q.pembahasan) {
            console.warn(`  ⚠️  [${loc}] Belum ada pembahasan.`);
            totalWarnings++;
        }

        // 2. Cek Format Dolar Tunggal
        const rawJson = JSON.stringify(q);
        const dollarMatches = rawJson.match(SINGLE_DOLLAR_REGEX);
        if (dollarMatches) {
            console.warn(`  ⚠️  [${loc}] Ditemukan ${dollarMatches.length} ekspresi rumus memakai tanda dolar '$':`, dollarMatches.slice(0, 3));
            totalWarnings++;
        }

        // 3. Cek Duplikasi Soal
        const norm = cleanText(q.soal);
        if (norm.length > 25) {
            if (seenQuestions.has(norm)) {
                console.warn(`  ⚠️  [DUPLIKAT] Soal ini sama dengan: ${seenQuestions.get(norm)}`);
                console.warn(`     Snippet: "${q.soal.slice(0, 70)}..."`);
                totalWarnings++;
            } else {
                seenQuestions.set(norm, loc);
            }
        }
    });
}

// -------------------------------------------------------------
// 2. Periksa snbt-akbar-data.js
// -------------------------------------------------------------
if (!fs.existsSync(FILE_AKBAR)) {
    console.error('❌ File snbt-akbar-data.js tidak ditemukan di:', FILE_AKBAR);
    process.exit(1);
}

let codeAkbar = fs.readFileSync(FILE_AKBAR, 'utf8');
let snbtTryOutAkbar;
try {
    snbtTryOutAkbar = (new Function(codeAkbar + '; return snbtTryOutAkbar;'))();
} catch (e) {
    console.error('❌ Gagal mem-parse snbt-akbar-data.js:', e.message);
    process.exit(1);
}

console.log('\n🏆 Memeriksa snbt-akbar-data.js (Try Out Akbar)...');
(snbtTryOutAkbar || []).forEach(to => {
    const toName = `TO Akbar #${to.id} (${to.judul})`;
    for (const [subId, subObj] of Object.entries(to.subtesData || {})) {
        const soalList = subObj.soal || [];
        soalList.forEach((q, idx) => {
            totalSoalChecked++;
            const loc = `${toName} [${subId}] No. ${idx + 1} (id: ${q.id})`;

            // 1. Cek Kelengkapan Field
            if (!q.soal) {
                console.error(`  ❌ [${loc}] Tidak ada teks 'soal'!`);
                totalErrors++;
            }
            if (!Array.isArray(q.options) || q.options.length < 2) {
                console.error(`  ❌ [${loc}] Opsi jawaban kurang atau tidak ada!`);
                totalErrors++;
            } else {
                const optIds = q.options.map(o => o.id);
                if (!q.kunci || !optIds.includes(q.kunci)) {
                    console.error(`  ❌ [${loc}] Kunci jawaban '${q.kunci}' tidak cocok dengan opsi yang ada: [${optIds.join(', ')}]`);
                    totalErrors++;
                }
            }
            if (!q.pembahasan) {
                console.warn(`  ⚠️  [${loc}] Belum ada pembahasan.`);
                totalWarnings++;
            }

            // 2. Cek Format Dolar Tunggal
            const rawJson = JSON.stringify(q);
            const dollarMatches = rawJson.match(SINGLE_DOLLAR_REGEX);
            if (dollarMatches) {
                console.warn(`  ⚠️  [${loc}] Ditemukan ${dollarMatches.length} ekspresi rumus memakai tanda dolar '$':`, dollarMatches.slice(0, 3));
                totalWarnings++;
            }

            // 3. Cek Duplikasi Soal
            const norm = cleanText(q.soal);
            if (norm.length > 25) {
                if (seenQuestions.has(norm)) {
                    console.warn(`  ⚠️  [DUPLIKAT] Soal ini sama dengan: ${seenQuestions.get(norm)}`);
                    console.warn(`     Snippet: "${q.soal.slice(0, 70)}..."`);
                    totalWarnings++;
                } else {
                    seenQuestions.set(norm, loc);
                }
            }
        });
    }
});

// -------------------------------------------------------------
// Auto-Fix jika dipanggil dengan flag --fix
// -------------------------------------------------------------
if (DO_FIX && totalWarnings > 0) {
    console.log('\n🛠️  Menjalankan auto-fix konversi $...$ ke \\(...\\)...');

    function replaceDollarInObj(obj) {
        if (typeof obj === 'string') {
            return obj.replace(SINGLE_DOLLAR_REGEX, (m, inner) => `\\(${inner}\\)`);
        }
        if (Array.isArray(obj)) return obj.map(replaceDollarInObj);
        if (obj && typeof obj === 'object') {
            const out = {};
            for (const [k, v] of Object.entries(obj)) out[k] = replaceDollarInObj(v);
            return out;
        }
        return obj;
    }

    // Fix snbt-data.js jika ada
    const aStartData = codeData.indexOf('const snbtBankSoal = {');
    const aEndData = codeData.indexOf('// =================================================================\n// HELPER UTILITY FUNCTIONS');
    if (aStartData !== -1 && aEndData !== -1) {
        const fixedBank = replaceDollarInObj(snbtBankSoal);
        codeData = codeData.slice(0, aStartData)
            + 'const snbtBankSoal = ' + JSON.stringify(fixedBank) + ';\n\n'
            + codeData.slice(aEndData);
        fs.writeFileSync(FILE_DATA, codeData, 'utf8');
        console.log('  ✅ snbt-data.js berhasil dirapikan.');
    }

    // Fix snbt-akbar-data.js
    const aStartAkbar = codeAkbar.indexOf('const snbtTryOutAkbar = [');
    const aEndAkbar = codeAkbar.indexOf('function getSnbtAkbar');
    if (aStartAkbar !== -1 && aEndAkbar !== -1) {
        const fixedAkbar = replaceDollarInObj(snbtTryOutAkbar);
        codeAkbar = codeAkbar.slice(0, aStartAkbar)
            + 'const snbtTryOutAkbar = ' + JSON.stringify(fixedAkbar) + ';\n\n'
            + codeAkbar.slice(aEndAkbar);
        fs.writeFileSync(FILE_AKBAR, codeAkbar, 'utf8');
        console.log('  ✅ snbt-akbar-data.js berhasil dirapikan.');
    }
}

// -------------------------------------------------------------
// Ringkasan
// -------------------------------------------------------------
console.log('\n=============================================');
console.log(`📊 Hasil Validasi: ${totalSoalChecked} butir soal diperiksa.`);
console.log(`   ❌ Error Kritis : ${totalErrors}`);
console.log(`   ⚠️  Peringatan   : ${totalWarnings}`);
if (totalErrors === 0 && totalWarnings === 0) {
    console.log('🎉 SEMUA SOAL VALID, RAPI, DAN BEBAS MASALAH!');
} else if (totalErrors === 0) {
    console.log('✅ Struktur aman. Hanya ada beberapa catatan/peringatan.');
} else {
    console.log('🚨 Ada error kritis pada struktur soal yang perlu diperbaiki!');
}
console.log('=============================================\n');

if (totalErrors > 0) process.exit(1);
