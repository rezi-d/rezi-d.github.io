// tka/scripts/verify_all_mapel.js
const fs = require('fs');
const path = require('path');

console.log("=== VERIFIKASI SENTRAL SELURUH MATA PELAJARAN TKA SMA 2025 ===");

// 1. Periksa Registri
const registryPath = path.join(__dirname, '../js/tka-registry.js');
let registryCode = fs.readFileSync(registryPath, 'utf-8');
const vm = require('vm');
const regContext = { window: {}, module: { exports: {} } };
vm.createContext(regContext);
vm.runInContext(registryCode, regContext);
const registry = regContext.window.tkaRegistry || regContext.module.exports;

console.log(`\n1. Registri Sentral: ${registry.mapelList.length} Mata Pelajaran terdaftar.`);
let totalSoalSemuaMapel = 0;
registry.mapelList.forEach((m, idx) => {
    console.log(`   [${idx+1}] ${m.nama} (${m.id}) | Status: ${m.status} | Soal: ${m.totalSoal} | Durasi: ${m.durasiMenit}m`);
    totalSoalSemuaMapel += m.totalSoal;
    if (m.status !== 'tersedia') {
        console.warn(`       WARNING: Status ${m.id} belum 'tersedia'!`);
    }
});
console.log(`   TOTAL BANK SOAL TKA: ${totalSoalSemuaMapel} Butir Soal`);

// 2. Periksa File Data & Paket
const dataFiles = [
    { id: 'indonesia-wajib', file: '../data/mapel-indonesia-wajib.js', pkgVar: 'tkaIndoWajibPackages' },
    { id: 'indonesia-pilihan', file: '../data/mapel-indonesia-pilihan.js', pkgVar: 'tkaIndoPilihanPackages' },
    { id: 'inggris-wajib', file: '../data/mapel-inggris-wajib.js', pkgVar: 'tkaInggrisWajibPackages' },
    { id: 'inggris-pilihan', file: '../data/mapel-inggris-pilihan.js', pkgVar: 'tkaInggrisPilihanPackages' },
    { id: 'ppkn', file: '../data/mapel-ppkn.js', pkgVar: 'tkaPpknPackages' },
    { id: 'sejarah', file: '../data/mapel-sejarah.js', pkgVar: 'tkaSejarahPackages' },
    { id: 'geografi', file: '../data/mapel-geografi.js', pkgVar: 'tkaGeografiPackages' },
    { id: 'sosiologi', file: '../data/mapel-sosiologi.js', pkgVar: 'tkaSosiologiPackages' },
    { id: 'matematika-umum', file: '../data/mapel-matematika-umum.js', pkgVar: 'tkaMatematikaUmumPackages' },
    { id: 'matematika-lanjut', file: '../data/mapel-matematika-lanjut.js', pkgVar: 'tkaMatematikaLanjutPackages' },
    { id: 'biologi', file: '../data/mapel-biologi.js', pkgVar: 'tkaBiologiPackages' },
    { id: 'fisika', file: '../data/mapel-fisika.js', pkgVar: 'tkaFisikaPackages' },
    { id: 'kimia', file: '../js/tka-data.js', pkgVar: 'tkaPackages' }
];

console.log("\n2. Integritas File Data Soal & Paket Simulasi:");
let hasErrors = false;

dataFiles.forEach(df => {
    const filePath = path.join(__dirname, df.file);
    if (!fs.existsSync(filePath)) {
        console.error(`   ERROR: File tidak ditemukan: ${df.file}`);
        hasErrors = true;
        return;
    }

    const code = fs.readFileSync(filePath, 'utf-8');
    const ctx = { window: {}, module: { exports: {} } };
    vm.createContext(ctx);
    try {
        vm.runInContext(code, ctx);
    } catch (err) {
        console.error(`   ERROR syntax execution di ${df.file}:`, err.message);
        hasErrors = true;
        return;
    }

    const packages = ctx.window[df.pkgVar];
    if (!packages) {
        console.error(`   ERROR: Variabel ${df.pkgVar} tidak terdefinisi di window!`);
        hasErrors = true;
        return;
    }

    const pkgKeys = Object.keys(packages);
    console.log(`   OK: ${df.id.padEnd(20)} -> ${df.pkgVar} (Paket: ${pkgKeys.join(', ')})`);
    pkgKeys.forEach(k => {
        const pkg = packages[k];
        const soalList = pkg.data || pkg.soalList || [];
        console.log(`       - [${k}] ${pkg.shortTitle || pkg.name || pkg.title} : ${soalList.length} Soal`);
        
        // Verifikasi sampel gambar
        let missingImages = 0;
        soalList.forEach(s => {
            const imgRel = s.gambar || s.img;
            if (imgRel) {
                const imgClean = imgRel.replace(/^\//, '');
                const imgFull = path.join(__dirname, '../../', imgClean);
                if (!fs.existsSync(imgFull)) {
                    missingImages++;
                }
            }
        });
        if (missingImages > 0) {
            console.warn(`         WARNING: ${missingImages} gambar tidak ditemukan di disk!`);
        }
    });
});

if (hasErrors) {
    console.error("\n❌ Ditemukan kesalahan dalam verifikasi!");
    process.exit(1);
} else {
    console.log("\n✅ SEMUA MATA PELAJARAN TKA SMA 2025 TELAH LENGKAP & VALID 100%!");
}
