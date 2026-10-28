// tka/scripts/verify_sosiologi_all.js
const fs = require('fs');

global.window = {};

eval(fs.readFileSync('tka/data/mapel-sosiologi.js', 'utf8'));
eval(fs.readFileSync('tka/data/mapel-sosiologi-paket2.js', 'utf8'));
eval(fs.readFileSync('tka/data/mapel-sosiologi-paket3.js', 'utf8'));
eval(fs.readFileSync('tka/data/mapel-sosiologi-paket4.js', 'utf8'));

const pkgs = window.tkaSosiologiPackages;
console.log('Daftar Paket Sosiologi terdaftar:', Object.keys(pkgs));

let total = 0;
for (const [key, pkg] of Object.entries(pkgs)) {
    console.log(`\n📦 ${key}: ${pkg.title}`);
    console.log(`   Short: ${pkg.shortTitle}`);
    console.log(`   Jumlah soal: ${pkg.data.length}`);
    total += pkg.data.length;
    
    pkg.data.forEach((soal, i) => {
        if (!soal.id || !soal.elemen || !soal.soalHtml || !soal.kunci || !soal.pembahasan) {
            console.error(`   ❌ Soal no ${i+1} field hilang!`, soal);
            process.exit(1);
        }
        if (soal.tipe === 'pg' && (!soal.options || soal.options.length === 0)) {
            console.error(`   ❌ Soal PG no ${i+1} opsi hilang!`, soal);
            process.exit(1);
        }
        if (soal.tipe === 'kategori' && (!soal.pernyataan || soal.pernyataan.length === 0)) {
            console.error(`   ❌ Soal Kategori no ${i+1} pernyataan hilang!`, soal);
            process.exit(1);
        }
    });
    console.log(`   ✅ Seluruh ${pkg.data.length} soal terverifikasi 100% valid!`);
}

console.log(`\n🎉 TOTAL SOAL TKA SOSIOLOGI: ${total} SOAL LENGKAP & VALID!`);
