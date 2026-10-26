// =================================================================
// tka/js/snbp-calculator.js
// Kalkulator Analisis Nilai Rapor & TKA untuk SNBP 2026
// Berdasarkan Permendikbudristek No. 48/2022, Kepmendikbudristek No. 345/M/2022,
// dan Kebijakan TKA Permendikdasmen No. 9/2025
// =================================================================

// 1. Pemetaan Resmi Mata Pelajaran Pendukung Prodi (Kepmendikbud No. 345/M/2022)
const MAPEL_PENDUKUNG_RULES = [
    { regex: /kedokteran gigi/i, mapel: ['Biologi', 'Kimia'] },
    { regex: /kedokteran hewan/i, mapel: ['Biologi', 'Kimia'] },
    { regex: /kedokteran|pendidikan dokter/i, mapel: ['Biologi', 'Kimia'] },
    { regex: /farmasi/i, mapel: ['Kimia', 'Biologi'] },
    { regex: /kebidanan|keperawatan/i, mapel: ['Biologi'] },
    { regex: /gizi|kesehatan masyarakat/i, mapel: ['Biologi', 'Kimia'] },
    { regex: /teknik kimia/i, mapel: ['Kimia', 'Matematika'] },
    { regex: /kimia|biokimia/i, mapel: ['Kimia', 'Matematika'] },
    { regex: /teknik informatika|sistem informasi|ilmu komputer|rekayasa perangkat lunak|teknologi informasi/i, mapel: ['Matematika', 'Fisika'] },
    { regex: /teknik elektro|teknik telekomunikasi/i, mapel: ['Fisika', 'Matematika'] },
    { regex: /teknik mesin|teknik sipil|arsitektur|teknik industri|teknik penerbangan|teknik perkapalan/i, mapel: ['Fisika', 'Matematika'] },
    { regex: /teknik pertambangan|teknik geologi|teknik perminyakan|teknik geofisika/i, mapel: ['Fisika', 'Matematika'] },
    { regex: /biologi|bioteknologi/i, mapel: ['Biologi', 'Kimia'] },
    { regex: /fisika|astronomi|geofisika/i, mapel: ['Fisika', 'Matematika'] },
    { regex: /matematika|statistika|aktuaria/i, mapel: ['Matematika'] },
    { regex: /pertanian|agroteknologi|agribisnis|kehutanan|peternakan|perikanan/i, mapel: ['Biologi', 'Kimia'] },
    { regex: /manajemen|akuntansi|ekonomi|keuangan/i, mapel: ['Ekonomi', 'Matematika'] },
    { regex: /ilmu hukum|hukum/i, mapel: ['Sosiologi'] },
    { regex: /psikologi/i, mapel: ['Sosiologi', 'Matematika'] },
    { regex: /hubungan internasional|ilmu komunikasi|jurnalistik/i, mapel: ['Sosiologi', 'Bahasa Inggris'] },
    { regex: /sosiologi|antropologi|ilmu politik|administrasi publik/i, mapel: ['Sosiologi'] },
    { regex: /geografi|perencanaan wilayah/i, mapel: ['Geografi', 'Matematika'] },
    { regex: /sastra inggris|bahasa inggris/i, mapel: ['Bahasa Inggris'] },
    { regex: /sastra indonesia|bahasa indonesia/i, mapel: ['Bahasa Indonesia'] },
    { regex: /sastra jepang|bahasa jepang|sastra prancis|bahasa arab|bahasa jerman/i, mapel: ['Bahasa Inggris'] },
    { regex: /seni|desain|dkv|kriya/i, mapel: ['Bahasa Indonesia'] },
    { regex: /olahraga|ilmu keolahragaan|penjaskes/i, mapel: ['Biologi'] },
    { regex: /pendidikan kimia/i, mapel: ['Kimia', 'Matematika'] },
    { regex: /pendidikan biologi/i, mapel: ['Biologi', 'Kimia'] },
    { regex: /pendidikan fisika/i, mapel: ['Fisika', 'Matematika'] },
    { regex: /pendidikan matematika/i, mapel: ['Matematika'] }
];

function cariMapelPendukung(namaProdi) {
    if (!namaProdi) return [];
    for (const rule of MAPEL_PENDUKUNG_RULES) {
        if (rule.regex.test(namaProdi)) {
            return rule.mapel;
        }
    }
    return ['Matematika'];
}

// 2. Data Rapor Default berdasarkan Jurusan
const DEFAULT_MAPEL = {
    mipa: [
        { id: 'matematika', nama: 'Matematika (Umum)', nilai: [85, 87, 88, 90, 92] },
        { id: 'bindonesia', nama: 'Bahasa Indonesia', nilai: [84, 85, 86, 88, 90] },
        { id: 'binggris', nama: 'Bahasa Inggris', nilai: [82, 84, 85, 87, 89] },
        { id: 'kimia', nama: 'Kimia', nilai: [86, 88, 90, 92, 95] },
        { id: 'fisika', nama: 'Fisika', nilai: [82, 84, 85, 87, 88] },
        { id: 'biologi', nama: 'Biologi', nilai: [85, 86, 88, 91, 93] }
    ],
    ips: [
        { id: 'matematika', nama: 'Matematika (Umum)', nilai: [83, 85, 86, 88, 90] },
        { id: 'bindonesia', nama: 'Bahasa Indonesia', nilai: [85, 86, 88, 89, 91] },
        { id: 'binggris', nama: 'Bahasa Inggris', nilai: [82, 84, 85, 87, 89] },
        { id: 'ekonomi', nama: 'Ekonomi', nilai: [86, 88, 90, 92, 94] },
        { id: 'sosiologi', nama: 'Sosiologi', nilai: [84, 86, 87, 89, 92] },
        { id: 'geografi', nama: 'Geografi', nilai: [83, 85, 86, 88, 90] }
    ],
    merdeka: [
        { id: 'matematika', nama: 'Matematika (Umum)', nilai: [85, 87, 88, 90, 92] },
        { id: 'bindonesia', nama: 'Bahasa Indonesia', nilai: [84, 85, 86, 88, 90] },
        { id: 'binggris', nama: 'Bahasa Inggris', nilai: [82, 84, 85, 87, 89] },
        { id: 'kimia', nama: 'Kimia (Pilihan)', nilai: [86, 88, 90, 92, 95] },
        { id: 'biologi', nama: 'Biologi (Pilihan)', nilai: [85, 86, 88, 91, 93] },
        { id: 'ekonomi', nama: 'Ekonomi (Pilihan)', nilai: [84, 85, 87, 89, 91] }
    ]
};

let snbpState = {
    jurusan: 'mipa',
    mapelList: JSON.parse(JSON.stringify(DEFAULT_MAPEL.mipa)),
    tkaScore: 680,
    akreditasi: 'A',
    prestasi: 'kab',
    pilihan1: null,
    pilihan2: null,
    pilihan3: null,
    pilihan4: null
};

// Muat dari localStorage jika ada
function muatSnbpState() {
    try {
        const saved = localStorage.getItem('snbp_user_state_v1');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && Array.isArray(parsed.mapelList)) {
                snbpState = Object.assign({}, snbpState, parsed);
            }
        }
    } catch (e) {}
}

function simpanSnbpState() {
    try {
        localStorage.setItem('snbp_user_state_v1', JSON.stringify(snbpState));
    } catch (e) {}
}

// Helper untuk mengupdate status visual tombol peminatan (MIPA, IPS, Kurikulum Merdeka)
function updateTombolPeminatan(jurusan) {
    const btnMipa = document.getElementById('btn-jurusan-mipa');
    const btnIps = document.getElementById('btn-jurusan-ips');
    const btnMerdeka = document.getElementById('btn-jurusan-merdeka');
    
    const activeClass = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0071e3] text-white shadow-xs transition cursor-pointer";
    const inactiveClass = "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition cursor-pointer";

    if (btnMipa) btnMipa.className = (jurusan === 'mipa') ? activeClass : inactiveClass;
    if (btnIps) btnIps.className = (jurusan === 'ips') ? activeClass : inactiveClass;
    if (btnMerdeka) btnMerdeka.className = (jurusan === 'merdeka') ? activeClass : inactiveClass;
}

// 3. Render Tabel Grid Rapor
function renderTabelRapor() {
    updateTombolPeminatan(snbpState.jurusan || 'mipa');
    const tbody = document.getElementById('snbp-tbody-rapor');
    if (!tbody) return;

    // Ambil prodi terpilih untuk highlight mapel pendukung
    const prodiPilihan = snbpState.pilihan1 ? snbpState.pilihan1.prodi : '';
    const mapelKunci = cariMapelPendukung(prodiPilihan);

    // Update banner penjelasan mapel pendukung dinamis
    const infoMapel = document.getElementById('snbp-info-mapel-pendukung');
    if (infoMapel) {
        if (prodiPilihan && mapelKunci.length > 0) {
            infoMapel.innerHTML = `
                <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold">
                    <span>⭐</span>
                    <span>Mapel Pendukung Aktif (Pilihan 1 &bull; <strong>${prodiPilihan}</strong>): <strong class="text-amber-950 underline decoration-amber-400">${mapelKunci.join(', ')}</strong> (Kepmendikbudristek No. 345/M/2022)</span>
                </div>
            `;
        } else {
            infoMapel.innerHTML = `
                <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium">
                    <span>💡</span>
                    <span>Tanda <strong>⭐ Mapel Pendukung</strong> akan menyala otomatis setelah Anda memilih jurusan di <strong>Langkah 2</strong>.</span>
                </div>
            `;
        }
    }

    let html = '';
    const semTotals = [0, 0, 0, 0, 0];
    const semCounts = [0, 0, 0, 0, 0];

    snbpState.mapelList.forEach((m, idx) => {
        // Cek apakah mapel ini merupakan mapel pendukung
        const isPendukung = mapelKunci.some(k => m.nama.toLowerCase().includes(k.toLowerCase()));
        
        let rowSum = 0;
        let rowCount = 0;
        m.nilai.forEach((v, sIdx) => {
            const num = parseFloat(v) || 0;
            if (num > 0) {
                rowSum += num;
                rowCount++;
                semTotals[sIdx] += num;
                semCounts[sIdx]++;
            }
        });
        const rowAvg = rowCount > 0 ? (rowSum / rowCount).toFixed(1) : '-';

        const rowBg = isPendukung ? 'bg-amber-50/70 border-amber-300' : (idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50');
        const badgePendukung = isPendukung 
            ? `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full mt-1">⭐ Mapel Pendukung</span>` 
            : '';

        html += `
        <tr class="${rowBg} border-b border-slate-200/80 transition-colors hover:bg-sky-50/40">
            <td class="p-2.5 sm:p-3 font-semibold text-slate-800 text-xs sm:text-sm">
                <div class="flex items-center justify-between gap-1">
                    <div>
                        <div class="font-bold text-slate-900">${m.nama}</div>
                        ${badgePendukung}
                    </div>
                    ${snbpState.mapelList.length > 4 ? `
                    <button type="button" onclick="hapusMapel(${idx})" title="Hapus Mapel" class="text-slate-400 hover:text-red-600 text-xs p-1 rounded transition">✕</button>
                    ` : ''}
                </div>
            </td>`;

        for (let s = 0; s < 5; s++) {
            const val = m.nilai[s] !== undefined ? m.nilai[s] : '';
            html += `
            <td class="p-1 sm:p-2 text-center">
                <input type="number" min="0" max="100" step="1" value="${val}"
                       onchange="updateNilaiRapor(${idx}, ${s}, this.value)"
                       oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                       class="w-12 sm:w-16 px-1 py-1.5 text-center font-mono text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] bg-white text-slate-900 shadow-2xs">
            </td>`;
        }

        html += `
            <td class="p-2.5 sm:p-3 text-center font-mono font-bold text-slate-800 bg-slate-100/50 text-xs sm:text-sm">
                ${rowAvg}
            </td>
        </tr>`;
    });

    tbody.innerHTML = html;

    // Hitung rata-rata tiap semester di footer
    const semAverages = [];
    let totalRaporSum = 0;
    let totalRaporCount = 0;

    for (let s = 0; s < 5; s++) {
        const elSemAvg = document.getElementById(`snbp-sem-avg-${s + 1}`);
        if (semCounts[s] > 0) {
            const avg = semTotals[s] / semCounts[s];
            semAverages.push(avg);
            totalRaporSum += avg;
            totalRaporCount++;
            if (elSemAvg) elSemAvg.textContent = avg.toFixed(1);
        } else {
            semAverages.push(0);
            if (elSemAvg) elSemAvg.textContent = '-';
        }
    }

    const totalOverallAvg = totalRaporCount > 0 ? (totalRaporSum / totalRaporCount).toFixed(2) : '0.00';
    const elOverall = document.getElementById('snbp-overall-avg');
    if (elOverall) elOverall.textContent = totalOverallAvg;

    // Cek tren kenaikan nilai
    const elTrend = document.getElementById('snbp-trend-badge');
    if (elTrend && semAverages.length >= 4) {
        let isRising = true;
        for (let i = 1; i < 5; i++) {
            if (semAverages[i] < semAverages[i - 1] - 0.5) {
                isRising = false;
                break;
            }
        }
        if (isRising && semAverages[4] > semAverages[0]) {
            elTrend.className = "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200";
            elTrend.innerHTML = "<span>↗️</span> <span>Tren Kenaikan Nilai Positif (+5% Bonus)</span>";
        } else {
            elTrend.className = "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200";
            elTrend.innerHTML = "<span>📊</span> <span>Tren Nilai Fluktuatif</span>";
        }
    }

    simpanSnbpState();
}

function updateNilaiRapor(mapelIdx, semIdx, value) {
    let num = parseFloat(value);
    if (isNaN(num)) num = '';
    else if (num > 100) num = 100;
    else if (num < 0) num = 0;

    snbpState.mapelList[mapelIdx].nilai[semIdx] = num;
    renderTabelRapor();
}

function gantiJurusanRapor(jurusan) {
    snbpState.jurusan = jurusan;
    snbpState.mapelList = JSON.parse(JSON.stringify(DEFAULT_MAPEL[jurusan] || DEFAULT_MAPEL.mipa));
    updateTombolPeminatan(jurusan);
    renderTabelRapor();
}

function tambahMapelKustom() {
    const nama = prompt("Masukkan nama mata pelajaran tambahan:\n(Contoh: Matematika Tingkat Lanjut, Informatika, Bahasa Asing)");
    if (!nama || !nama.trim()) return;

    snbpState.mapelList.push({
        id: 'kustom_' + Date.now(),
        nama: nama.trim(),
        nilai: [85, 85, 85, 85, 85]
    });
    renderTabelRapor();
}

function hapusMapel(idx) {
    if (snbpState.mapelList.length <= 4) {
        alert("Minimal 4 mata pelajaran untuk simulasi rapor.");
        return;
    }
    snbpState.mapelList.splice(idx, 1);
    renderTabelRapor();
}

function isiContohRaporCepat() {
    gantiJurusanRapor(snbpState.jurusan);
    alert("Sampel nilai rapor berhasil dimuat! Anda dapat langsung memilih kampus impian di bawah.");
}

// 4. Kalkulator Rasionalisasi SNBP (Algoritma Komposit Ilmiah)
function hitungRasionalisasiSnbp(prodi, dataRapor, skorTka, akreditasi, prestasi) {
    if (!prodi) return null;

    // A. Rata-rata Seluruh Mapel (Bobot 50%)
    let sumTotal = 0;
    let countTotal = 0;
    dataRapor.forEach(m => {
        m.nilai.forEach(v => {
            const n = parseFloat(v) || 0;
            if (n > 0) {
                sumTotal += n;
                countTotal++;
            }
        });
    });
    const avgUmum = countTotal > 0 ? sumTotal / countTotal : 75;

    // B. Rata-rata Mapel Pendukung (Bobot 30%)
    const mapelKunci = cariMapelPendukung(prodi.prodi);
    let sumPendukung = 0;
    let countPendukung = 0;
    dataRapor.forEach(m => {
        const isKey = mapelKunci.some(k => m.nama.toLowerCase().includes(k.toLowerCase()));
        if (isKey) {
            m.nilai.forEach(v => {
                const n = parseFloat(v) || 0;
                if (n > 0) {
                    sumPendukung += n;
                    countPendukung++;
                }
            });
        }
    });
    const avgPendukung = countPendukung > 0 ? sumPendukung / countPendukung : avgUmum;

    // C. Skor TKA (Bobot 10%)
    // Skala TKA 200-1000 dikonversi ke skala 0-100: (TKA / 1000) * 100
    const tkaValue = parseFloat(skorTka) || 600;
    const tkaScaled = Math.min(100, Math.max(0, (tkaValue / 1000) * 100));

    // D. Bonus Tren Kenaikan Semester (Bobot 5%)
    let bonusTren = 0;
    const semAverages = [];
    for (let s = 0; s < 5; s++) {
        let semSum = 0, semC = 0;
        dataRapor.forEach(m => {
            const v = parseFloat(m.nilai[s]) || 0;
            if (v > 0) { semSum += v; semC++; }
        });
        semAverages.push(semC > 0 ? semSum / semC : 0);
    }
    let isRising = true;
    for (let i = 1; i < 5; i++) {
        if (semAverages[i] < semAverages[i - 1] - 0.5) { isRising = false; break; }
    }
    if (isRising && semAverages[4] > semAverages[0]) {
        bonusTren = 100; // skor sempurna untuk komponen tren
    } else {
        bonusTren = 75;
    }

    // E. Poin Prestasi (Bobot 5%)
    let bonusPrestasi = 70; // baseline
    if (prestasi === 'internasional') bonusPrestasi = 100;
    else if (prestasi === 'nasional') bonusPrestasi = 95;
    else if (prestasi === 'provinsi') bonusPrestasi = 85;
    else if (prestasi === 'kab') bonusPrestasi = 78;

    // F. Skor Komposit Siswa (0 - 100)
    let skorKomposit = (0.50 * avgUmum) + 
                       (0.30 * avgPendukung) + 
                       (0.10 * tkaScaled) + 
                       (0.05 * bonusTren) + 
                       (0.05 * bonusPrestasi);

    // G. Faktor Akreditasi Sekolah
    let faktorAkreditasi = 1.0;
    if (akreditasi === 'B') faktorAkreditasi = 0.96;
    else if (akreditasi === 'C') faktorAkreditasi = 0.90;
    skorKomposit *= faktorAkreditasi;

    // H. Menghitung Ambang Batas Aman Prodi (Estimasi Rapor Lolos SNBP)
    // 1. Prestise & Passing Grade Nasional PTN (dari skorAman UTBK di database: skala 350 - 750)
    const skorAmanPtn = parseFloat(prodi.skorAman) || 550;
    // Peta skor UTBK (350 - 750) ke baseline rapor (77.0 - 92.0)
    let targetKomposit = 77.0 + ((skorAmanPtn - 350) / 400.0) * 15.0;

    // 2. Koreksi Rasio Persaingan Riil (peminat / dayaTampung):
    // Data keketatan di database = peminat / dayaTampung (Rasio: 1 kursi diperebutkan N orang)
    const dt = parseFloat(prodi.dayaTampung) || 0;
    const pem = parseFloat(prodi.peminat) || 0;
    let rasioKeketatan = 2.5; // default wajar prodi baru

    if (dt > 0 && pem > 0) {
        rasioKeketatan = pem / dt;
    } else if (prodi.keketatan && parseFloat(prodi.keketatan) > 0) {
        const k = parseFloat(prodi.keketatan);
        rasioKeketatan = (k > 0 && k < 1) ? (100 / k) : k;
    }
    // Semakin tinggi rasio persaingan (misal 1 : 20 di kampus favorit), semakin ketat targetnya
    const koreksiRasio = Math.min(2.5, Math.max(-1.5, (rasioKeketatan - 3.0) * 0.15));
    targetKomposit += koreksiRasio;

    // 3. Batas khusus untuk rumpun sangat favorit
    const prodiLower = (prodi.prodi || '').toLowerCase();
    if (prodiLower.includes('kedokteran') || prodiLower.includes('dokter')) {
        targetKomposit = Math.max(targetKomposit, 91.5);
    } else if (prodiLower.includes('farmasi')) {
        targetKomposit = Math.max(targetKomposit, 88.5);
    } else if (prodiLower.includes('informatika') || prodiLower.includes('ilmu komputer')) {
        targetKomposit = Math.max(targetKomposit, 87.5);
    }

    // I. Persentase Peluang Lolos
    const selisih = skorKomposit - targetKomposit;
    // Logistik sigmoid probabilitas
    let peluang = 1 / (1 + Math.exp(-0.7 * selisih));
    let peluangPct = Math.round(peluang * 100);
    peluangPct = Math.max(10, Math.min(95, peluangPct)); // batas realistis SNBP

    let kategori = 'kompetitif';
    let labelKategori = 'Kompetitif (Cukup Bersaing)';
    let warnaBadge = 'bg-amber-100 text-amber-900 border-amber-300';
    let iconPeluang = '🟡';

    if (peluangPct >= 78) {
        kategori = 'aman';
        labelKategori = 'Peluang Sangat Tinggi (Aman)';
        warnaBadge = 'bg-emerald-100 text-emerald-900 border-emerald-300';
        iconPeluang = '🟢';
    } else if (peluangPct < 52) {
        kategori = 'risiko';
        labelKategori = 'Risiko Tinggi (Spekulatif)';
        warnaBadge = 'bg-rose-100 text-rose-900 border-rose-300';
        iconPeluang = '🔴';
    }

    return {
        prodi,
        avgUmum: avgUmum.toFixed(2),
        avgPendukung: avgPendukung.toFixed(2),
        mapelKunci,
        tkaValue,
        tkaScaled: tkaScaled.toFixed(1),
        skorKomposit: skorKomposit.toFixed(2),
        targetKomposit: targetKomposit.toFixed(2),
        rasioKeketatan: rasioKeketatan.toFixed(1),
        peluangPct,
        kategori,
        labelKategori,
        warnaBadge,
        iconPeluang,
        semAverages
    };
}

// 5. Eksekusi Analisis SNBP & Render Hasil Lengkap
function prosesAnalisisSnbp() {
    if (!snbpState.pilihan1) {
        alert("Pilih Program Studi Pilihan 1 terlebih dahulu!");
        document.getElementById('snbp-search-input-1')?.focus();
        return;
    }

    // Ambil input tambahan
    const tkaInput = document.getElementById('snbp-input-tka');
    if (tkaInput) snbpState.tkaScore = parseFloat(tkaInput.value) || 650;

    const akreditasiSelect = document.getElementById('snbp-select-akreditasi');
    if (akreditasiSelect) snbpState.akreditasi = akreditasiSelect.value;

    const prestasiSelect = document.getElementById('snbp-select-prestasi');
    if (prestasiSelect) snbpState.prestasi = prestasiSelect.value;

    const isPro = typeof snbtIsPremiumActive === 'function' && snbtIsPremiumActive();

    // Hitung Rasionalisasi
    const res1 = hitungRasionalisasiSnbp(snbpState.pilihan1, snbpState.mapelList, snbpState.tkaScore, snbpState.akreditasi, snbpState.prestasi);
    const res2 = snbpState.pilihan2 ? hitungRasionalisasiSnbp(snbpState.pilihan2, snbpState.mapelList, snbpState.tkaScore, snbpState.akreditasi, snbpState.prestasi) : null;
    const res3 = (isPro && snbpState.pilihan3) ? hitungRasionalisasiSnbp(snbpState.pilihan3, snbpState.mapelList, snbpState.tkaScore, snbpState.akreditasi, snbpState.prestasi) : null;
    const res4 = (isPro && snbpState.pilihan4) ? hitungRasionalisasiSnbp(snbpState.pilihan4, snbpState.mapelList, snbpState.tkaScore, snbpState.akreditasi, snbpState.prestasi) : null;

    renderOutputSnbp(res1, res2, res3, res4);
}

function renderOutputSnbp(res1, res2, res3, res4) {
    const container = document.getElementById('snbp-hasil-container');
    if (!container) return;

    container.classList.remove('hidden');

    function buatKartuHasil(res, labelPilihan, nomorBadge) {
        if (!res) return '';
        const p = res.prodi;
        const badgeBg = nomorBadge === '1' ? 'bg-[#0071e3]' : (nomorBadge === '2' ? 'bg-slate-700' : 'bg-amber-600');
        const labelColor = nomorBadge === '1' ? 'text-[#0071e3]' : (nomorBadge === '2' ? 'text-slate-700' : 'text-amber-800');
        return `
        <div class="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full ${badgeBg} text-white text-xs font-bold flex items-center justify-center">${nomorBadge}</span>
                    <span class="text-xs font-bold uppercase tracking-wider ${labelColor}">${labelPilihan}</span>
                </div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${res.warnaBadge}">
                    <span>${res.iconPeluang}</span>
                    <span>${res.labelKategori}</span>
                </span>
            </div>

            <div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900">${p.prodi}</h3>
                <p class="text-xs sm:text-sm text-slate-600 font-medium">${p.univ} &bull; ${p.wilayah || 'Indonesia'}</p>
            </div>

            <!-- METER PERSENTASE BESAR -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                <div>
                    <span class="text-xs text-slate-500 font-semibold block">Estimasi Peluang Lolos:</span>
                    <div class="text-3xl sm:text-4xl font-extrabold text-[#0071e3] font-mono mt-0.5">
                        ${res.peluangPct}%
                    </div>
                </div>
                <div class="text-right text-xs space-y-1">
                    <div class="text-slate-500 font-medium">Daya Tampung: <strong class="text-slate-800">${p.dayaTampung || '-'}</strong></div>
                    <div class="text-slate-500 font-medium">Peminat: <strong class="text-slate-800">${p.peminat || '-'}</strong></div>
                    <div class="text-slate-500 font-medium">Keketatan: <strong class="text-slate-800">1 : ${res.rasioKeketatan}</strong></div>
                </div>
            </div>

            <!-- ANALISIS BREAKDOWN ANGKA -->
            <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200/50">
                    <span class="text-slate-500 text-[11px] block">Rerata Rapor Anda:</span>
                    <strong class="text-slate-900 text-sm font-mono">${res.avgUmum}</strong>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Target Prodi: ~${res.targetKomposit}</span>
                </div>
                <div class="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60">
                    <span class="text-amber-900 text-[11px] block">Mapel Pendukung (${res.mapelKunci.join(', ')}):</span>
                    <strong class="text-amber-950 text-sm font-mono">${res.avgPendukung}</strong>
                    <span class="text-[10px] text-amber-700 block mt-0.5">Bobot 30% Kepmendikbud</span>
                </div>
            </div>

            <!-- DIAGNOSA RINGKAS -->
            <div class="text-xs text-slate-600 leading-relaxed bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                ${res.peluangPct >= 78 
                    ? `🎉 <strong>Peluang Kuat:</strong> Nilai rapor umum Anda (${res.avgUmum}) dan mapel pendukung (${res.avgPendukung}) melampaui estimasi ambang aman prodi ${p.prodi} (${p.univ}) dengan rasio persaingan 1 : ${res.rasioKeketatan}. Pertahankan konsistensi nilai!` 
                    : res.peluangPct >= 52 
                    ? `⚖️ <strong>Cukup Bersaing:</strong> Anda memiliki peluang masuk, namun persaingan prodi ${p.prodi} di ${p.univ} cukup ketat (1 : ${res.rasioKeketatan}). Pertimbangkan sertifikat prestasi dan maksimalkan nilai TKA sebagai penguat!` 
                    : `⚠️ <strong>Pilihan Spekulatif:</strong> Persaingan prodi ${p.prodi} di ${p.univ} sangat ketat (1 : ${res.rasioKeketatan}) relatif terhadap nilai rapor saat ini. Disarankan menyiapkan Pilihan 2 dengan prodi berdaya tampung lebih besar atau rasio persaingan lebih rasional.`}
            </div>
        </div>`;
    }

    const cards = [
        buatKartuHasil(res1, 'Pilihan 1 (Prioritas Utama)', '1'),
        res2 ? buatKartuHasil(res2, 'Pilihan 2 (Alternatif Cadangan)', '2') : '',
        res3 ? buatKartuHasil(res3, 'Pilihan 3 (Alternatif Tambahan)', '3') : '',
        res4 ? buatKartuHasil(res4, 'Pilihan 4 (Alternatif Cadangan Akhir)', '4') : ''
    ].filter(Boolean);

    let cardsHtml = `
    <div class="grid grid-cols-1 ${cards.length > 1 ? 'md:grid-cols-2' : ''} gap-5">
        ${cards.join('')}
    </div>`;

    // Render Grafik Tren SVG Sem 1 - 5
    const semAverages = res1.semAverages;
    const minVal = Math.min(...semAverages.filter(v => v > 0), 75) - 3;
    const maxVal = Math.max(...semAverages, 95) + 3;
    const range = maxVal - minVal || 20;

    const points = semAverages.map((val, idx) => {
        const x = 50 + (idx * 80);
        const y = 140 - (((val - minVal) / range) * 110);
        return { x, y, val: val.toFixed(1) };
    });

    const polyPoints = points.map(p => `${p.x},${p.y}`).join(' ');

    const svgChart = `
    <div class="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
            <h4 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span>📈</span>
                <span>Grafik Tren Nilai Rapor (Semester 1 s.d. 5)</span>
            </h4>
            <span class="text-xs font-semibold text-slate-500">Skala 0 - 100</span>
        </div>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 420 170" class="w-full max-w-xl mx-auto h-40">
                <!-- Garis Grid Horizontal -->
                <line x1="40" y1="30" x2="380" y2="30" stroke="#f1f5f9" stroke-width="1" />
                <line x1="40" y1="85" x2="380" y2="85" stroke="#f1f5f9" stroke-width="1" />
                <line x1="40" y1="140" x2="380" y2="140" stroke="#cbd5e1" stroke-width="1.5" />

                <!-- Garis Kurva Tren -->
                <polyline fill="none" stroke="#0071e3" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="${polyPoints}" />

                <!-- Titik Data & Label Angka -->
                ${points.map((pt, i) => `
                    <circle cx="${pt.x}" cy="${pt.y}" r="5.5" fill="#ffffff" stroke="#0071e3" stroke-width="3" />
                    <text x="${pt.x}" y="${pt.y - 10}" font-size="11" font-weight="bold" fill="#0071e3" text-anchor="middle" font-family="monospace">${pt.val}</text>
                    <text x="${pt.x}" y="160" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">Sem ${i + 1}</text>
                `).join('')}
            </svg>
        </div>
        <p class="text-xs text-slate-500 text-center">
            *Kurva yang konsisten naik (positif) memberikan bobot evaluasi lebih tinggi pada seleksi SNBP oleh PTN tujuan.
        </p>
    </div>`;

    // Tombol Cetak & Aksi
    const actionButtons = `
    <div class="p-5 rounded-2xl bg-[#1d1d1f] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-1 text-center sm:text-left">
            <h4 class="font-bold text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2">
                <span>📄</span>
                <span>Bawa Lembar Hasil ke Konsultasi Guru BK</span>
            </h4>
            <p class="text-xs text-slate-300">Cetak atau simpan analisis ini sebagai panduan resmi diskusi pemilihan jurusan di sekolah.</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
            <button type="button" onclick="window.print()" class="px-4 py-2.5 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs">
                <span>🖨️</span>
                <span>Cetak Lembar Analisis (PDF)</span>
            </button>
            <button type="button" onclick="window.scrollTo({top: 300, behavior: 'smooth'})" class="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition cursor-pointer">
                Ubah Pilihan
            </button>
        </div>
    </div>`;

    container.innerHTML = `
        <div class="space-y-6 animate-in fade-in duration-300">
            <div class="text-center space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-[#0071e3]">Hasil Simulasi SNBP 2026</span>
                <h3 class="text-xl sm:text-2xl font-bold text-slate-900">Analisis Kelayakan Nilai Rapor &amp; TKA</h3>
                <p class="text-xs text-slate-500">Estimasi komposit berbasis data peminat, keketatan kampus, dan pembobotan Kemendikbud.</p>
            </div>
            ${cardsHtml}
            ${svgChart}
            ${actionButtons}
        </div>
    `;

    container.scrollIntoView({ behavior: 'smooth' });
}

// Inisialisasi saat window dimuat
window.addEventListener('DOMContentLoaded', () => {
    muatSnbpState();
    updateTombolPeminatan(snbpState.jurusan || 'mipa');
    sinkronisasiStatusLisensiSnbp();
});


// 6. Pencarian & Pemilihan Prodi SNBP
let snbpSearchTimeout = null;
let currentSearchSlot = 1;

function bukaPencarianProdiSnbp(slot) {
    currentSearchSlot = slot;
    const input = document.getElementById(`snbp-search-input-${slot}`);
    if (input) {
        input.focus();
        cariProdiSnbp(input.value, slot);
    }
}

function cariProdiSnbp(query, slot) {
    clearTimeout(snbpSearchTimeout);
    snbpSearchTimeout = setTimeout(() => {
        const box = document.getElementById(`snbp-search-box-${slot}`);
        if (!box) return;

        const clean = (query || '').trim().toLowerCase();
        if (clean.length < 2) {
            box.classList.add('hidden');
            box.innerHTML = '';
            return;
        }

        const db = typeof getDatabase === 'function' ? getDatabase() : (typeof ptnDatabaseNasional !== 'undefined' ? ptnDatabaseNasional : []);
        const tokens = clean.split(/\s+/).filter(Boolean);

        const results = [];
        for (let i = 0; i < db.length && results.length < 25; i++) {
            const item = db[i];
            const text = `${item.prodi} ${item.univ} ${item.univShort || ''} ${item.wilayah || ''}`.toLowerCase();
            if (tokens.every(t => text.includes(t))) {
                results.push(item);
            }
        }

        if (results.length === 0) {
            box.innerHTML = `<div class="p-3 text-xs text-slate-500 text-center">Tidak ditemukan jurusan '${query}'. Coba kata kunci lain (mis. 'Farmasi', 'Informatika', 'Unja').</div>`;
            box.classList.remove('hidden');
            return;
        }

        let html = '';
        results.forEach(p => {
            const mapel = cariMapelPendukung(p.prodi);
            html += `
            <div onclick="pilihProdiSnbp(${slot}, '${p.id}')" class="p-2.5 hover:bg-sky-50 cursor-pointer transition flex items-center justify-between gap-2 border-b border-slate-100 last:border-none">
                <div>
                    <div class="text-xs sm:text-sm font-bold text-slate-900">${p.prodi}</div>
                    <div class="text-[11px] text-slate-500">${p.univ} &bull; <span class="font-semibold text-slate-700">${p.jenjang || 'S1'}</span></div>
                    <div class="text-[10px] text-amber-800 font-medium mt-0.5">⭐ Mapel Kunci: ${mapel.join(', ')}</div>
                </div>
                <div class="text-right text-[11px] text-slate-500 shrink-0">
                    <span class="px-2 py-0.5 rounded-full bg-slate-100 font-mono font-semibold" title="Rasio Keketatan">1 : ${p.keketatan || '-'}</span>
                </div>
            </div>`;
        });

        box.innerHTML = html;
        box.classList.remove('hidden');
    }, 80);
}

function pilihProdiSnbp(slot, prodiId) {
    const db = typeof getDatabase === 'function' ? getDatabase() : (typeof ptnDatabaseNasional !== 'undefined' ? ptnDatabaseNasional : []);
    const prodi = db.find(p => p.id === prodiId);
    if (!prodi) return;

    snbpState[`pilihan${slot}`] = prodi;

    // Tutup popup search
    const box = document.getElementById(`snbp-search-box-${slot}`);
    if (box) box.classList.add('hidden');

    const input = document.getElementById(`snbp-search-input-${slot}`);
    if (input) input.value = `${prodi.prodi} - ${prodi.univ}`;

    // Render kartu pilihan
    renderKartuPilihanSlot(slot, prodi);

    // Re-render tabel rapor untuk update highlight mapel pendukung Pilihan 1 jika slot 1
    if (slot === 1) renderTabelRapor();
    simpanSnbpState();
}

function hapusPilihanSnbp(slot) {
    snbpState[`pilihan${slot}`] = null;

    const input = document.getElementById(`snbp-search-input-${slot}`);
    if (input) input.value = '';

    renderKartuPilihanSlot(slot, null);
    if (slot === 1) renderTabelRapor();
    simpanSnbpState();
}

function renderKartuPilihanSlot(slot, prodi) {
    const card = document.getElementById(`snbp-selected-card-${slot}`);
    if (!card) return;

    if (!prodi) {
        const placeholderText = slot === 1 
            ? 'Pilihan 1 belum ditentukan. Cari jurusan di atas.'
            : slot === 2 
            ? 'Pilihan 2 belum ditentukan (opsional).'
            : slot === 3 
            ? 'Pilihan 3 belum ditentukan (khusus PRO).'
            : 'Pilihan 4 belum ditentukan (khusus PRO).';

        const borderClass = (slot === 1) 
            ? 'border-blue-300 bg-white/70' 
            : (slot >= 3) 
            ? 'border-amber-300 bg-white/70' 
            : 'border-slate-300 bg-white/70';

        card.innerHTML = `
            <div class="p-3.5 rounded-xl border border-dashed ${borderClass} text-center text-xs text-slate-500">
                ${placeholderText}
            </div>`;
        return;
    }

    const mapel = cariMapelPendukung(prodi.prodi);
    const badgeBg = slot === 1 ? 'bg-[#0071e3]' : (slot >= 3 ? 'bg-amber-600' : 'bg-slate-700');
    const borderCard = slot === 1 ? 'border-blue-200' : (slot >= 3 ? 'border-amber-200' : 'border-slate-200');

    card.innerHTML = `
        <div class="p-4 rounded-xl bg-white border ${borderCard} shadow-xs flex items-center justify-between gap-3">
            <div class="space-y-1 min-w-0 pr-1">
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-2 py-0.5 rounded-full ${badgeBg} text-white font-bold text-[10px]">Pilihan ${slot}</span>
                    <span class="text-xs text-slate-500 font-semibold">${prodi.jenjang || 'S1'} &bull; ${prodi.kelompok || 'Saintek'}</span>
                </div>
                <h4 class="font-bold text-slate-900 text-sm sm:text-base truncate">${prodi.prodi}</h4>
                <p class="text-xs text-slate-600 truncate">${prodi.univ} &bull; ${prodi.wilayah || 'Indonesia'}</p>
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold">
                    <span>⭐ Mapel Pendukung:</span>
                    <strong>${mapel.join(', ')}</strong>
                </div>
            </div>
            <button type="button" onclick="hapusPilihanSnbp(${slot})" class="text-slate-400 hover:text-red-600 text-xs font-bold p-2 transition cursor-pointer shrink-0" title="Hapus / Ganti Pilihan">
                ✕ Ganti
            </button>
        </div>`;
}

function sinkronisasiStatusLisensiSnbp() {
    const isPro = typeof snbtIsPremiumActive === 'function' && snbtIsPremiumActive();
    const lockedBanner = document.getElementById('snbp-locked-banner');
    const unlockedGrid = document.getElementById('snbp-unlocked-grid');
    const badgePro = document.getElementById('badge-pro-unlocked');
    const titleLangkah2 = document.getElementById('snbp-target-title');
    const subtitleLangkah2 = document.getElementById('snbp-target-subtitle');

    if (isPro) {
        if (lockedBanner) lockedBanner.classList.add('hidden');
        if (unlockedGrid) unlockedGrid.classList.remove('hidden');
        if (badgePro) badgePro.classList.remove('hidden');
        if (titleLangkah2) titleLangkah2.innerHTML = 'Pilih Jurusan Impian (Formasi 4 Pilihan Aktif 👑)';
        if (subtitleLangkah2) subtitleLangkah2.textContent = 'Mode Lisensi PRO Aktif: Analisis hingga 4 pilihan jurusan sekaligus di 143 PTN se-Indonesia';

        // Render input jika ada pilihan 3 & 4
        if (snbpState.pilihan3) {
            const input3 = document.getElementById('snbp-search-input-3');
            if (input3 && !input3.value) input3.value = `${snbpState.pilihan3.prodi} - ${snbpState.pilihan3.univ}`;
            renderKartuPilihanSlot(3, snbpState.pilihan3);
        }
        if (snbpState.pilihan4) {
            const input4 = document.getElementById('snbp-search-input-4');
            if (input4 && !input4.value) input4.value = `${snbpState.pilihan4.prodi} - ${snbpState.pilihan4.univ}`;
            renderKartuPilihanSlot(4, snbpState.pilihan4);
        }
    } else {
        if (lockedBanner) lockedBanner.classList.remove('hidden');
        if (unlockedGrid) unlockedGrid.classList.add('hidden');
        if (badgePro) badgePro.classList.add('hidden');
        if (titleLangkah2) titleLangkah2.innerHTML = 'Pilih Jurusan Impian (Pilihan 1 &amp; Pilihan 2)';
        if (subtitleLangkah2) subtitleLangkah2.textContent = 'Versi gratis: 2 pilihan jurusan. Upgrade ke PRO untuk membuka formasi 4 jurusan.';
    }

    // Render pilihan 1 & 2
    if (snbpState.pilihan1) {
        const input1 = document.getElementById('snbp-search-input-1');
        if (input1 && !input1.value) input1.value = `${snbpState.pilihan1.prodi} - ${snbpState.pilihan1.univ}`;
        renderKartuPilihanSlot(1, snbpState.pilihan1);
    }
    if (snbpState.pilihan2) {
        const input2 = document.getElementById('snbp-search-input-2');
        if (input2 && !input2.value) input2.value = `${snbpState.pilihan2.prodi} - ${snbpState.pilihan2.univ}`;
        renderKartuPilihanSlot(2, snbpState.pilihan2);
    }
}

if (typeof window !== 'undefined') {
    window.sinkronisasiStatusLisensiSnbp = sinkronisasiStatusLisensiSnbp;
}
