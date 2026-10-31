// tka/scripts/verify_all_packages_comprehensive.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== VERIFIKASI KOMPREHENSIF SEMUA PAKET TKA & 7 PAKET BARU ===");

const htmlPath = path.join(__dirname, '../simulasi.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Ambil semua tag script data mapel dari simulasi.html
const scriptRegex = /<script src="(\/tka\/(?:js|data)\/[^"]+)"><\/script>/g;
let match;
const scripts = [];
while ((match = scriptRegex.exec(htmlContent)) !== null) {
    scripts.push(match[1]);
}

console.log(`Ditemukan ${scripts.length} script paket soal di simulasi.html`);

const ctx = {
    window: {
        tkaPackages: {},
        tkaMatematikaLanjutPackages: {},
        tkaMatematikaUmumPackages: {},
        tkaEkonomiPackages: {},
        tkaGeografiPackages: {},
        tkaSosiologiPackages: {},
        tkaBiologiPackages: {},
        tkaFisikaPackages: {},
        tkaSejarahPackages: {},
        tkaPpknPackages: {},
        tkaIndoWajibPackages: {},
        tkaIndoPilihanPackages: {},
        tkaInggrisWajibPackages: {},
        tkaInggrisPilihanPackages: {},
        tkaAntropologiPackages: {}
    },
    module: { exports: {} }
};
vm.createContext(ctx);

let loadErrors = 0;
scripts.forEach(scriptRel => {
    const filePath = path.join(__dirname, '../../', scriptRel.replace(/^\//, ''));
    if (!fs.existsSync(filePath)) {
        console.error(`❌ File TIDAK DITEMUKAN: ${scriptRel}`);
        loadErrors++;
        return;
    }
    const code = fs.readFileSync(filePath, 'utf8');
    try {
        vm.runInContext(code, ctx);
        console.log(`  ✓ Loaded: ${scriptRel}`);
    } catch (err) {
        console.error(`❌ GAGAL MENJALANKAN ${scriptRel}:`, err.message);
        loadErrors++;
    }
});

if (loadErrors > 0) {
    console.error(`Ditemukan ${loadErrors} error pemuatan script!`);
    process.exit(1);
}

// Periksa 7 paket baru secara spesifik
console.log("\n=== VERIFIKASI 7 PAKET BARU SPESIFIK ===");
const targetChecks = [
    { name: "Kimia Paket 4", dict: ctx.window.tkaPackages, key: "paket4", expectedTotal: 30 },
    { name: "Kimia Paket 5", dict: ctx.window.tkaPackages, key: "paket5", expectedTotal: 25 },
    { name: "Matematika Lanjut Paket 4", dict: ctx.window.tkaMatematikaLanjutPackages, key: "paket4", expectedTotal: 25 },
    { name: "Matematika Umum Paket 3", dict: ctx.window.tkaMatematikaUmumPackages, key: "paket3", expectedTotal: 25 },
    { name: "Ekonomi Paket 3", dict: ctx.window.tkaEkonomiPackages, key: "paket3", expectedTotal: 25 },
    { name: "Geografi Paket 3", dict: ctx.window.tkaGeografiPackages, key: "paket3", expectedTotal: 25 },
    { name: "Sosiologi Paket 5", dict: ctx.window.tkaSosiologiPackages, key: "paket5", expectedTotal: 25 }
];

let totalNewQuestions = 0;
targetChecks.forEach(tc => {
    const pkg = tc.dict[tc.key];
    if (!pkg) {
        console.error(`❌ Paket ${tc.name} [${tc.key}] TIDAK DITEMUKAN di window!`);
        process.exit(1);
    }
    const data = pkg.data || [];
    console.log(`✓ ${tc.name} (${pkg.badge || pkg.shortTitle}): ${data.length} Soal (Expected: ${tc.expectedTotal})`);
    if (data.length !== tc.expectedTotal) {
        console.error(`❌ Jumlah soal ${tc.name} tidak sesuai!`);
        process.exit(1);
    }
    totalNewQuestions += data.length;

    // Verifikasi setiap soal
    data.forEach((soal, idx) => {
        const no = soal.id || (idx + 1);
        if (!soal.tipe || !soal.soalHtml || soal.kunci === undefined || !soal.pembahasan) {
            console.error(`❌ ${tc.name} Soal #${no} properti wajib hilang!`, soal);
            process.exit(1);
        }
        if (soal.tipe === 'pg') {
            if (!soal.options || soal.options.length < 4) {
                console.error(`❌ ${tc.name} Soal #${no} opsi PG kurang dari 4!`);
                process.exit(1);
            }
            if (!/^[A-E]$/.test(soal.kunci)) {
                console.error(`❌ ${tc.name} Soal #${no} kunci PG tidak valid (A-E):`, soal.kunci);
                process.exit(1);
            }
        } else if (soal.tipe === 'mcma') {
            if (!soal.options || soal.options.length < 3) {
                console.error(`❌ ${tc.name} Soal #${no} opsi MCMA kurang dari 3!`);
                process.exit(1);
            }
            if (!Array.isArray(soal.kunci) || soal.kunci.length === 0) {
                console.error(`❌ ${tc.name} Soal #${no} kunci MCMA harus array non-kosong:`, soal.kunci);
                process.exit(1);
            }
        } else if (soal.tipe === 'kompleks_bs') {
            if (!soal.items || soal.items.length < 2) {
                console.error(`❌ ${tc.name} Soal #${no} items kompleks_bs kurang dari 2!`);
                process.exit(1);
            }
            if (!Array.isArray(soal.kunci) || soal.kunci.length !== soal.items.length) {
                console.error(`❌ ${tc.name} Soal #${no} panjang kunci kompleks_bs tidak cocok dengan items:`, soal.kunci);
                process.exit(1);
            }
        }
    });
});

console.log(`\n🎉 SUKSES! 7 Paket baru terverifikasi 100% dengan total ${totalNewQuestions} butir soal!`);
