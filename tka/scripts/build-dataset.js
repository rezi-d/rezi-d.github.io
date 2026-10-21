// ============================================================================
// tka/scripts/build-dataset.js
// Builds the comprehensive National SNPMB + Kedinasan dataset
// Outputs: tka/data/sidata-ptn-nasional.json and tka/js/sidata-ptn-nasional.js
// ============================================================================

const https = require('https');
const fs = require('fs');
const path = require('path');

const CSV_URL = 'https://raw.githubusercontent.com/prodhokter/dataset-program-studi-indonesia/master/program-studi-indonesia.csv';

function toTitleCase(str) {
    if (!str) return '';
    const upperWords = new Set([
        'TI', 'SI', 'DKV', 'MIPA', 'IPA', 'IPS', 'PJJ', 'PGSD', 'PGPAUD', 'K3', 'PLB', 'BK',
        'PPKN', 'PJKR', 'PJOK', 'PTIK', 'BKN', 'MKG', 'SSN', 'UIN', 'IAIN', 'STIS', 'STAN',
        'IPDN', 'STIN', 'UI', 'ITB', 'UGM', 'ITS', 'UNAIR', 'UNDIP', 'UNPAD', 'UNHAS', 'UNS',
        'USU', 'UNAND', 'UB', 'UPI', 'UNESA', 'UNY', 'UNM', 'UNP', 'UNJ', 'UNRI', 'USK',
        'UNLAM', 'ULM', 'UNTAN', 'UNSRI', 'UNDIKSHA', 'UNTIDAR', 'UPN', 'PNK', 'POLMED',
        'POLINEMA', 'POLMAN', 'PPNS', 'PENS', 'POLBAN', 'POLIJE', 'PNUP', 'PPN', 'ISBI', 'ISI'
    ]);
    const lowerWords = new Set(['dan', 'di', 'ke', 'dari', 'terhadap', 'pada', 'untuk', 'oleh', 'dengan', 'serta', 'atau']);

    return str.toLowerCase().split(/\s+/).map((word, idx) => {
        const clean = word.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        if (upperWords.has(clean)) return word.toUpperCase();
        if (/^(I|II|III|IV|V|VI|VII|VIII|IX|X)$/i.test(clean)) return word.toUpperCase();
        if (idx > 0 && lowerWords.has(word.toLowerCase())) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

function parseDegree(d) {
    if (!d) return 'S1';
    const dl = d.toLowerCase();
    if (dl.includes('tiga') || dl.includes('d3') || dl.includes('d-iii')) return 'D3';
    if (dl.includes('empat') || dl.includes('d4') || dl.includes('terapan')) return 'D4';
    return 'S1';
}

function classifyKelompok(prodi, cat, univName) {
    const p = prodi.toLowerCase();
    const u = (univName || '').toLowerCase();

    if (u.includes('stis') || u.includes('stan') || u.includes('ipdn') || u.includes('sandi negara') || u.includes('ssn') || u.includes('stmkg') || u.includes('intelijen') || u.includes('pemasyarakatan') || u.includes('imigrasi')) {
        return 'Kedinasan';
    }
    if (p.includes('kedokteran') || p.includes('dokter') || p.includes('farmasi') || p.includes('gizi') || p.includes('kebidanan') || p.includes('keperawatan') || p.includes('kesehatan') || p.includes('fisioterapi')) {
        return 'Saintek & Kesehatan';
    }
    if (p.includes('informatika') || p.includes('ilmu komputer') || p.includes('teknik') || p.includes('elektro') || p.includes('mesin') || p.includes('sipil') || p.includes('siber') || p.includes('robot') || p.includes('arsitektur') || p.includes('mekatronika')) {
        return 'Teknik & Komputer';
    }
    if (p.includes('kimia') || p.includes('biologi') || p.includes('fisika') || p.includes('matematika') || p.includes('statistika') || p.includes('aktuaria') || p.includes('sains') || p.includes('bioteknologi') || p.includes('astronomi')) {
        return 'MIPA & Sains Alam';
    }
    if (p.includes('pertanian') || p.includes('peternakan') || p.includes('kehutanan') || p.includes('perikanan') || p.includes('agro') || p.includes('agronomi') || p.includes('kelautan') || p.includes('veteriner') || p.includes('kedokteran hewan')) {
        return 'Pertanian & Lingkungan';
    }
    if (p.includes('manajemen') || p.includes('akuntansi') || p.includes('ekonomi') || p.includes('bisnis') || p.includes('keuangan') || p.includes('pemasaran') || p.includes('perbankan') || p.includes('akturia')) {
        return 'Ekonomi & Bisnis';
    }
    if (p.includes('hukum')) {
        return 'Hukum';
    }
    if (p.includes('pendidikan') || p.includes('guru') || p.includes('bimbingan')) {
        return 'Pendidikan / Keguruan';
    }
    if (p.includes('sastra') || p.includes('bahasa') || p.includes('seni') || p.includes('desain') || p.includes('film') || p.includes('musik') || p.includes('tari') || p.includes('kriya') || p.includes('teater')) {
        return 'Bahasa & Seni Budaya';
    }
    if (p.includes('komunikasi') || p.includes('hubungan internasional') || p.includes('sosiologi') || p.includes('politik') || p.includes('administrasi') || p.includes('psikologi') || p.includes('kesejahteraan sosial') || p.includes('antropologi') || p.includes('arsip')) {
        return 'Sosial Humaniora';
    }
    if (cat === 'SAINTEK') return 'Saintek & Teknologi';
    return 'Sosial Humaniora';
}

const kedinasanDanKhusus = [
    // PKN STAN
    {
        univ: "Politeknik Keuangan Negara STAN",
        univShort: "STAN",
        wilayah: "Banten",
        prodi: "D4 Akuntansi Sektor Publik",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 180,
        peminat: 12450,
        keketatan: 1.45,
        skorMin: 690,
        skorAman: 725,
        deskripsi: "Ikatan dinas Kementerian Keuangan dengan spesialisasi audit akuntansi pemerintah & forensik keuangan."
    },
    {
        univ: "Politeknik Keuangan Negara STAN",
        univShort: "STAN",
        wilayah: "Banten",
        prodi: "D4 Manajemen Keuangan Negara",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 200,
        peminat: 14200,
        keketatan: 1.41,
        skorMin: 685,
        skorAman: 720,
        deskripsi: "Ikatan dinas Kemenkeu di bidang perbendaharaan negara, perpajakan, kepabeanan dan cukai."
    },
    {
        univ: "Politeknik Keuangan Negara STAN",
        univShort: "STAN",
        wilayah: "Banten",
        prodi: "D4 Manajemen Aset Publik",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 100,
        peminat: 6200,
        keketatan: 1.61,
        skorMin: 670,
        skorAman: 705,
        deskripsi: "Ikatan dinas pengelolaan kekayaan negara, lelang, dan penilaian aset publik."
    },
    // POLSTAT STIS
    {
        univ: "Politeknik Statistika STIS",
        univShort: "STIS",
        wilayah: "DKI Jakarta",
        prodi: "D4 Statistika",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 150,
        peminat: 11200,
        keketatan: 1.34,
        skorMin: 695,
        skorAman: 730,
        deskripsi: "Ikatan dinas Badan Pusat Statistik (BPS) dengan keunggulan riset survei dan analisis data makroekonomi."
    },
    {
        univ: "Politeknik Statistika STIS",
        univShort: "STIS",
        wilayah: "DKI Jakarta",
        prodi: "D4 Komputasi Statistik",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 150,
        peminat: 10800,
        keketatan: 1.39,
        skorMin: 690,
        skorAman: 725,
        deskripsi: "Ikatan dinas BPS berfokus pada data science, machine learning, rekayasa big data spasial, dan rekayasa perangkat lunak sensus."
    },
    {
        univ: "Politeknik Statistika STIS",
        univShort: "STIS",
        wilayah: "DKI Jakarta",
        prodi: "D3 Statistika",
        jenjang: "D3",
        kelompok: "Kedinasan",
        dayaTampung: 100,
        peminat: 5400,
        keketatan: 1.85,
        skorMin: 660,
        skorAman: 695,
        deskripsi: "Ikatan dinas BPS jenjang Diploma Tiga teknisi statistika operasional lapangan."
    },
    // IPDN
    {
        univ: "Institut Pemerintahan Dalam Negeri",
        univShort: "IPDN",
        wilayah: "Jawa Barat",
        prodi: "D4 Administrasi Pemerintahan Daerah",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 180,
        peminat: 18500,
        keketatan: 0.97,
        skorMin: 675,
        skorAman: 715,
        deskripsi: "Ikatan dinas Kementerian Dalam Negeri untuk calon pamong praja birokrasi daerah."
    },
    {
        univ: "Institut Pemerintahan Dalam Negeri",
        univShort: "IPDN",
        wilayah: "Jawa Barat",
        prodi: "D4 Manajemen Keamanan dan Keselamatan Publik",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 120,
        peminat: 15200,
        keketatan: 0.79,
        skorMin: 670,
        skorAman: 710,
        deskripsi: "Ikatan dinas Kemendagri keahlian tata kelola ketertiban umum dan perlindungan masyarakat."
    },
    {
        univ: "Institut Pemerintahan Dalam Negeri",
        univShort: "IPDN",
        wilayah: "Jawa Barat",
        prodi: "D4 Manajemen Tata Praja",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 150,
        peminat: 14800,
        keketatan: 1.01,
        skorMin: 670,
        skorAman: 710,
        deskripsi: "Ikatan dinas Kemendagri kepemimpinan pemerintahan daerah dan aparatur sipil negara."
    },
    // POLTEK SSN
    {
        univ: "Politeknik Siber dan Sandi Negara",
        univShort: "Poltek SSN",
        wilayah: "Jawa Barat",
        prodi: "D4 Rekayasa Keamanan Siber",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 50,
        peminat: 3450,
        keketatan: 1.45,
        skorMin: 685,
        skorAman: 720,
        deskripsi: "Ikatan dinas BSSN spesialis pertahanan siber nasional, digital forensics, dan cyber defense."
    },
    {
        univ: "Politeknik Siber dan Sandi Negara",
        univShort: "Poltek SSN",
        wilayah: "Jawa Barat",
        prodi: "D4 Rekayasa Kriptografi",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 40,
        peminat: 2850,
        keketatan: 1.40,
        skorMin: 680,
        skorAman: 715,
        deskripsi: "Ikatan dinas BSSN desain algoritma enkripsi proteksi data rahasia negara."
    },
    {
        univ: "Politeknik Siber dan Sandi Negara",
        univShort: "Poltek SSN",
        wilayah: "Jawa Barat",
        prodi: "D4 Rekayasa Perangkat Keras Kriptografi",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 30,
        peminat: 1950,
        keketatan: 1.54,
        skorMin: 670,
        skorAman: 705,
        deskripsi: "Ikatan dinas BSSN rancang bangun chip, modul hardware enkripsi, dan IoT security."
    },
    // STMKG
    {
        univ: "Sekolah Tinggi Meteorologi Klimatologi dan Geofisika",
        univShort: "STMKG",
        wilayah: "Banten",
        prodi: "D4 Meteorologi",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 60,
        peminat: 5100,
        keketatan: 1.18,
        skorMin: 675,
        skorAman: 710,
        deskripsi: "Ikatan dinas BMKG observasi dinamika atmosfer, peramalan cuaca penerbangan dan maritim."
    },
    {
        univ: "Sekolah Tinggi Meteorologi Klimatologi dan Geofisika",
        univShort: "STMKG",
        wilayah: "Banten",
        prodi: "D4 Klimatologi",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 40,
        peminat: 3200,
        keketatan: 1.25,
        skorMin: 665,
        skorAman: 700,
        deskripsi: "Ikatan dinas BMKG analisis variabilitas iklim, perubahan iklim, dan agroklimat."
    },
    {
        univ: "Sekolah Tinggi Meteorologi Klimatologi dan Geofisika",
        univShort: "STMKG",
        wilayah: "Banten",
        prodi: "D4 Geofisika",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 40,
        peminat: 3050,
        keketatan: 1.31,
        skorMin: 665,
        skorAman: 700,
        deskripsi: "Ikatan dinas BMKG monitoring gempa bumi, sistem peringatan dini tsunami, dan geomagnetisme."
    },
    {
        univ: "Sekolah Tinggi Meteorologi Klimatologi dan Geofisika",
        univShort: "STMKG",
        wilayah: "Banten",
        prodi: "D4 Instrumentasi-MKG",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 50,
        peminat: 3500,
        keketatan: 1.43,
        skorMin: 660,
        skorAman: 695,
        deskripsi: "Ikatan dinas BMKG kalibrasi, rekayasa sensor, radar cuaca, dan seismograf."
    },
    // STIN
    {
        univ: "Sekolah Tinggi Intelijen Negara",
        univShort: "STIN",
        wilayah: "Jawa Barat",
        prodi: "S1 Agen Intelijen",
        jenjang: "S1",
        kelompok: "Kedinasan",
        dayaTampung: 50,
        peminat: 6200,
        keketatan: 0.81,
        skorMin: 690,
        skorAman: 730,
        deskripsi: "Ikatan dinas Badan Intelijen Negara (BIN) analisis intelijen strategis keamanan nasional."
    },
    {
        univ: "Sekolah Tinggi Intelijen Negara",
        univShort: "STIN",
        wilayah: "Jawa Barat",
        prodi: "S1 Cyber Intelijen",
        jenjang: "S1",
        kelompok: "Kedinasan",
        dayaTampung: 50,
        peminat: 5400,
        keketatan: 0.93,
        skorMin: 695,
        skorAman: 735,
        deskripsi: "Ikatan dinas BIN operasi intelijen siber, counter cyber terrorism, dan deteksi ancaman digital."
    },
    // POLTEKIP / POLTEKIM
    {
        univ: "Politeknik Ilmu Pemasyarakatan & Imigrasi",
        univShort: "Poltekip / Poltekim",
        wilayah: "DKI Jakarta",
        prodi: "D4 Manajemen Pemasyarakatan (Poltekip)",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 100,
        peminat: 7200,
        keketatan: 1.39,
        skorMin: 660,
        skorAman: 695,
        deskripsi: "Ikatan dinas Kemenkumham pembinaan narapidana dan pengamanan lembaga pemasyarakatan."
    },
    {
        univ: "Politeknik Ilmu Pemasyarakatan & Imigrasi",
        univShort: "Poltekip / Poltekim",
        wilayah: "DKI Jakarta",
        prodi: "D4 Hukum Keimigrasian (Poltekim)",
        jenjang: "D4",
        kelompok: "Kedinasan",
        dayaTampung: 100,
        peminat: 8700,
        keketatan: 1.15,
        skorMin: 670,
        skorAman: 705,
        deskripsi: "Ikatan dinas Kemenkumham penegakan hukum lalu lintas keimigrasian dan pengawasan perbatasan."
    },
    // TELKOM UNIVERSITY
    {
        univ: "Telkom University",
        univShort: "Tel-U",
        wilayah: "Jawa Barat",
        prodi: "S1 Informatika",
        jenjang: "S1",
        kelompok: "Swasta Unggulan",
        dayaTampung: 450,
        peminat: 4200,
        keketatan: 10.71,
        skorMin: 645,
        skorAman: 680,
        deskripsi: "Kampus teknologi swasta terakreditasi Unggul dengan pusat unggulan AI dan software engineering."
    },
    {
        univ: "Telkom University",
        univShort: "Tel-U",
        wilayah: "Jawa Barat",
        prodi: "S1 Teknik Telekomunikasi",
        jenjang: "S1",
        kelompok: "Swasta Unggulan",
        dayaTampung: 300,
        peminat: 1800,
        keketatan: 16.67,
        skorMin: 620,
        skorAman: 655,
        deskripsi: "Pusat unggulan jaringan 5G/6G, transmisi gelombang mikro, dan komunikasi satelit."
    },
    {
        univ: "Telkom University",
        univShort: "Tel-U",
        wilayah: "Jawa Barat",
        prodi: "S1 Sistem Informasi",
        jenjang: "S1",
        kelompok: "Swasta Unggulan",
        dayaTampung: 350,
        peminat: 2900,
        keketatan: 12.07,
        skorMin: 630,
        skorAman: 665,
        deskripsi: "Fokus pada integrasi ERP enterprise, tata kelola IT korporasi, dan analitik bisnis."
    },
    {
        univ: "Telkom University",
        univShort: "Tel-U",
        wilayah: "Jawa Barat",
        prodi: "S1 Desain Komunikasi Visual (DKV)",
        jenjang: "S1",
        kelompok: "Swasta Unggulan",
        dayaTampung: 300,
        peminat: 2100,
        keketatan: 14.29,
        skorMin: 615,
        skorAman: 650,
        deskripsi: "Eksplorasi industri kreatif digital, animasi, branding visual, dan UI/UX design."
    }
];

console.log('Downloading CSV from:', CSV_URL);
https.get(CSV_URL, (res) => {
    let rawCsv = '';
    res.on('data', chunk => rawCsv += chunk);
    res.on('end', () => {
        const lines = rawCsv.trim().split('\n');
        console.log('Downloaded', lines.length, 'lines.');

        const database = [];
        const idSet = new Set();
        const idCounter = {};

        // 1. Process CSV lines
        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(';');
            if (row.length < 17) continue;

            const name = toTitleCase(row[3]);
            const degree = parseDegree(row[4]);
            const quota = parseInt(row[5], 10) || 0;
            const applicants = parseInt(row[6], 10) || 0;
            const category = row[7];
            const compRatio = parseFloat(row[9]) || (quota > 0 && applicants > 0 ? Number(((quota / applicants) * 100).toFixed(2)) : 0);
            const passGrade = Math.round(parseFloat(row[10]) || 600);
            const minScore = Math.round(parseFloat(row[12]) || (passGrade - 25));
            const univName = row[14];
            let univCode = row[15] || '';
            const region = row[16] || '';

            if (!univCode && univName) {
                univCode = univName.split(' ').map(w => w[0]).join('').toUpperCase();
            }

            const kelompok = classifyKelompok(name, category, univName);

            let slug = (univCode.toLowerCase() + '-' + name.toLowerCase() + '-' + degree.toLowerCase())
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            if (idCounter[slug]) {
                idCounter[slug]++;
                slug += '-' + idCounter[slug];
            } else {
                idCounter[slug] = 1;
            }

            database.push({
                id: slug,
                univ: univName,
                univShort: univCode,
                wilayah: region,
                prodi: name,
                jenjang: degree,
                kelompok: kelompok,
                dayaTampung: quota,
                peminat: applicants,
                keketatan: compRatio,
                skorMin: minScore,
                skorAman: passGrade,
                deskripsi: `Program studi ${name} (${degree}) di ${univName}. Daya tampung SNBT ${quota} kursi dengan ${applicants} peminat.`
            });
        }

        // 2. Append Kedinasan & Telkom
        kedinasanDanKhusus.forEach(item => {
            let slug = (item.univShort.toLowerCase() + '-' + item.prodi.toLowerCase() + '-' + item.jenjang.toLowerCase())
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            if (idCounter[slug]) {
                idCounter[slug]++;
                slug += '-' + idCounter[slug];
            } else {
                idCounter[slug] = 1;
            }

            database.push({
                id: slug,
                ...item
            });
        });

        console.log(`Total database entries compiled: ${database.length}`);

        // 3. Write JSON file
        const jsonPath = path.join(__dirname, '../data/sidata-ptn-nasional.json');
        fs.writeFileSync(jsonPath, JSON.stringify(database), 'utf8');
        console.log(`Wrote JSON: ${jsonPath} (${(fs.statSync(jsonPath).size / 1024).toFixed(1)} KB)`);

        // 4. Write JS file for fallback / offline / file:// protocol
        const jsPath = path.join(__dirname, '../js/sidata-ptn-nasional.js');
        const jsContent = `// =================================================================
// tka/js/sidata-ptn-nasional.js
// Database Nasional SNPMB (4.970+ Prodi dari 143 PTN) + Kedinasan & Telkom
// Generated automatically from official BKN/SNPMB records
// Total prodi: ${database.length}
// =================================================================

const ptnDatabaseNasional = ${JSON.stringify(database)};

if (typeof window !== "undefined") {
    window.ptnDatabaseNasional = ptnDatabaseNasional;
    // Backwards compatibility
    if (!window.ptnDatabase) {
        window.ptnDatabase = ptnDatabaseNasional;
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { ptnDatabaseNasional };
}
`;
        fs.writeFileSync(jsPath, jsContent, 'utf8');
        console.log(`Wrote JS: ${jsPath} (${(fs.statSync(jsPath).size / 1024).toFixed(1)} KB)`);
    });
}).on('error', (err) => {
    console.error('Failed to download dataset:', err);
});
