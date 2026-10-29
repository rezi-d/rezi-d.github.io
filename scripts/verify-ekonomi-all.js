const fs = require('fs');
const path = require('path');

// Mock window object
global.window = {};

require('../tka/data/mapel-ekonomi.js');
require('../tka/data/mapel-ekonomi-paket2.js');

const pkgs = global.window.tkaEkonomiPackages;
console.log('Testing tkaEkonomiPackages...');

if (!pkgs) {
    console.error('FAIL: window.tkaEkonomiPackages not found');
    process.exit(1);
}

const keys = Object.keys(pkgs).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
    const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
    return numA - numB;
});

console.log('Packages found:', keys);

let totalSoal = 0;
let hasDollar = false;

keys.forEach(k => {
    const pkg = pkgs[k];
    console.log(`\n--- Package: ${k} (${pkg.title}) ---`);
    console.log(`Short title: ${pkg.shortTitle}`);
    console.log(`Soal count: ${pkg.data.length}`);
    totalSoal += pkg.data.length;

    pkg.data.forEach((soal, idx) => {
        const str = JSON.stringify(soal);
        if (str.includes('$')) {
            console.error(`ERROR: Dollar sign found in ${k} soal index ${idx} (id: ${soal.id})`);
            hasDollar = true;
        }

        if (!soal.id || !soal.tipe || !soal.soalHtml || !soal.kunci || !soal.pembahasan) {
            console.error(`ERROR: Incomplete field in ${k} soal index ${idx}:`, soal.id);
            process.exit(1);
        }

        if (soal.tipe === 'pg') {
            if (!soal.options || soal.options.length !== 5) {
                console.error(`ERROR: PG must have 5 options in ${k} soal index ${idx}:`, soal.id);
                process.exit(1);
            }
            if (!['A','B','C','D','E'].includes(soal.kunci)) {
                console.error(`ERROR: Invalid PG answer key ${soal.kunci} in ${k} soal ${soal.id}`);
                process.exit(1);
            }
        } else if (soal.tipe === 'mcma') {
            if (!soal.options || !Array.isArray(soal.kunci) || soal.kunci.length === 0) {
                console.error(`ERROR: Invalid MCMA question/key in ${k} soal ${soal.id}`);
                process.exit(1);
            }
        } else if (soal.tipe === 'kompleks_bs') {
            if (!Array.isArray(soal.items) || soal.items.length === 0) {
                console.error(`ERROR: Invalid kompleks_bs items in ${k} soal ${soal.id}`);
                process.exit(1);
            }
            if (!soal.kunci) {
                console.error(`ERROR: Invalid kompleks_bs kunci in ${k} soal ${soal.id}`);
                process.exit(1);
            }
        }
    });
});

console.log(`\n========================================`);
console.log(`TOTAL SOAL: ${totalSoal}`);
console.log(`HAS DOLLAR SIGN: ${hasDollar}`);

if (hasDollar) {
    console.error('FAIL: Found dollar sign in dataset!');
    process.exit(1);
}

if (totalSoal !== 50) {
    console.error(`FAIL: Expected 50 questions, found ${totalSoal}`);
    process.exit(1);
}

console.log('ALL TESTS PASSED! ✅');
