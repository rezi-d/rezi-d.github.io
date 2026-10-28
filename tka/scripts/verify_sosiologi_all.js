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
const allowedTypes = ['pg', 'mcma', 'kompleks_bs'];

for (const [key, pkg] of Object.entries(pkgs)) {
    console.log(`\n📦 ${key}: ${pkg.title}`);
    console.log(`   Short: ${pkg.shortTitle}`);
    console.log(`   Jumlah soal: ${pkg.data.length}`);
    total += pkg.data.length;
    
    const typeCounts = { pg: 0, mcma: 0, kompleks_bs: 0 };
    
    pkg.data.forEach((soal, i) => {
        const num = soal.id || (i + 1);
        if (!soal.id || !soal.elemen || !soal.soalHtml || !soal.kunci || !soal.pembahasan) {
            console.error(`   ❌ Soal no ${num} field utama hilang!`, soal);
            process.exit(1);
        }
        
        if (!allowedTypes.includes(soal.tipe)) {
            console.error(`   ❌ Soal no ${num} tipe tidak valid: "${soal.tipe}"! Harus salah satu dari: ${allowedTypes.join(', ')}`);
            process.exit(1);
        }
        
        typeCounts[soal.tipe] = (typeCounts[soal.tipe] || 0) + 1;
        
        // Verifikasi Pilihan Ganda (pg)
        if (soal.tipe === 'pg') {
            if (!soal.options || soal.options.length < 4) {
                console.error(`   ❌ Soal PG no ${num} opsi tidak lengkap!`, soal);
                process.exit(1);
            }
            if (typeof soal.kunci !== 'string' || !/^[A-E]$/.test(soal.kunci)) {
                console.error(`   ❌ Soal PG no ${num} kunci tidak valid (harus single char A-E): "${soal.kunci}"!`);
                process.exit(1);
            }
        }
        
        // Verifikasi Pilihan Ganda Kompleks (mcma)
        if (soal.tipe === 'mcma') {
            if (!soal.options || soal.options.length < 4) {
                console.error(`   ❌ Soal MCMA no ${num} opsi tidak lengkap!`, soal);
                process.exit(1);
            }
            if (!Array.isArray(soal.kunci) || soal.kunci.length < 2) {
                console.error(`   ❌ Soal MCMA no ${num} kunci harus array min 2 pilihan:`, soal.kunci);
                process.exit(1);
            }
            soal.kunci.forEach(k => {
                if (!/^[A-E]$/.test(k)) {
                    console.error(`   ❌ Soal MCMA no ${num} opsi kunci "${k}" di luar A-E!`);
                    process.exit(1);
                }
            });
        }
        
        // Verifikasi Pernyataan Benar/Salah (kompleks_bs)
        if (soal.tipe === 'kompleks_bs') {
            if (!soal.items || !Array.isArray(soal.items) || soal.items.length < 2) {
                console.error(`   ❌ Soal Benar/Salah no ${num} items pernyataan hilang atau < 2!`, soal);
                process.exit(1);
            }
            soal.items.forEach((it, idx) => {
                if (!it.pernyataan || !it.kunci || !['Benar', 'Salah'].includes(it.kunci)) {
                    console.error(`   ❌ Soal Benar/Salah no ${num} item ${idx+1} kunci tidak valid (harus 'Benar'/'Salah'):`, it);
                    process.exit(1);
                }
            });
            if (!Array.isArray(soal.kunci) || soal.kunci.length !== soal.items.length) {
                console.error(`   ❌ Soal Benar/Salah no ${num} kunci array tidak cocok dengan jumlah items:`, soal.kunci);
                process.exit(1);
            }
        }
    });
    
    console.log(`   Distribusi tipe: PG=${typeCounts.pg}, MCMA=${typeCounts.mcma}, Benar/Salah=${typeCounts.kompleks_bs}`);
    console.log(`   ✅ Seluruh ${pkg.data.length} soal terverifikasi 100% valid!`);
}

console.log(`\n🎉 TOTAL SOAL TKA SOSIOLOGI: ${total} SOAL LENGKAP & VALID DENGAN STANDAR TIPE RESMI!`);
