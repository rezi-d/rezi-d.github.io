// =================================================================
// js/render-hub.js — Renderer generik untuk halaman hub tiap Kelas
// (kelas-10/index.html, kelas-11/index.html, kelas-12/index.html)
//
// CARA PAKAI di halaman hub:
//   1. <body data-kelas="11">  <- ganti sesuai kelasnya (10/11/12)
//   2. Sediakan 3 elemen kosong ini di HTML:
//        <span id="kelas-badge"></span>
//        <h1 id="kelas-judul"></h1>
//        <div id="bab-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-5"></div>
//   3. Muat script ini SETELAH js/curriculum.js:
//        <script src="/js/curriculum.js"></script>
//        <script src="/js/render-hub.js"></script>
//
// Tidak perlu edit apa pun di file ini untuk menambah bab baru —
// cukup edit js/curriculum.js, halaman hub akan otomatis ikut update.
// =================================================================

function renderHubKelas() {
    const kelasKey = document.body.getAttribute('data-kelas');
    const data = kurikulum[kelasKey];

    const badgeEl = document.getElementById('kelas-badge');
    const judulEl = document.getElementById('kelas-judul');
    const gridEl  = document.getElementById('bab-grid');

    // Guard: kalau salah satu elemen wajib tidak ada, jangan lanjut (hindari error di console)
    if (!data || !badgeEl || !judulEl || !gridEl) return;

    badgeEl.textContent = data.label;
    judulEl.textContent = `Materi Kimia ${data.label}`;

    // KASUS 1: Kelas ini belum punya bab sama sekali (contoh: Kelas X, XII saat ini)
    // -> satu pesan lebar penuh, karena tidak ada kartu lain untuk dipasangkan di grid
    if (!data.bab || data.bab.length === 0) {
        gridEl.innerHTML = kartuSegeraHadir(
            'Segera Hadir',
            `Materi ${data.label} sedang dalam pengembangan. Nantikan update selanjutnya!`,
            true
        );
        return;
    }

    // Ambil data progres dari localStorage
    let progres = { completed: {}, scores: {} };
    try {
        const raw = localStorage.getItem('kimia_progres_v1');
        if (raw) progres = JSON.parse(raw);
    } catch (e) {}

    // KASUS 2: Ada bab -> render satu kartu per bab lengkap dengan progress bar & daftar sub-bab
    gridEl.innerHTML = data.bab.map((bab, index) => {
        const nomorBab = index + 1;
        const punyaSubbab = Array.isArray(bab.subbab) && bab.subbab.length > 0;

        if (!punyaSubbab) {
            return kartuSegeraHadir(
                `Bab ${nomorBab}: ${bab.title}`,
                `Materi ${bab.title} akan segera ditambahkan di sini.`,
                false
            );
        }

        const deskripsi = bab.deskripsi || (bab.subbab.map(sb => sb.title).join(', ') + '.');
        const hrefPertama = `/kelas-${kelasKey}/${bab.slug}/${bab.subbab[0].file}`;

        const totalSub = bab.subbab.length;
        let doneSub = 0;
        const listSubHtml = bab.subbab.map((sb, sIdx) => {
            const key = `${kelasKey}/${bab.slug}/${sb.file}`;
            const isDone = !!(progres.completed && progres.completed[key]);
            if (isDone) doneSub++;
            const scoreObj = progres.scores && progres.scores[key];
            const scoreBadge = scoreObj ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 ml-auto shrink-0">Nilai ${scoreObj.pct}</span>` : '';
            return `
                <a href="/kelas-${kelasKey}/${bab.slug}/${sb.file}" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs ${isDone ? 'bg-emerald-50/70 text-emerald-900 font-medium' : 'text-slate-600 hover:bg-slate-50'} transition">
                    <span class="shrink-0">${isDone ? '✅' : `<span class="inline-block w-4 text-slate-400 font-mono">${sIdx + 1}.</span>`}</span>
                    <span class="truncate">${sb.title}</span>
                    ${scoreBadge}
                </a>`;
        }).join('');

        const pct = Math.round((doneSub / totalSub) * 100);

        return `
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition flex flex-col justify-between">
                <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <a href="${hrefPertama}" class="text-lg font-bold text-slate-900 hover:text-teal-600 transition">
                            Bab ${nomorBab}: ${bab.title}
                        </a>
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 ${pct === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">
                            ${doneSub}/${totalSub} Selesai
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed mb-3">
                        ${deskripsi}
                    </p>
                    <!-- Progress bar ala Zenius -->
                    <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                        <div class="h-full bg-teal-500 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                    </div>
                    <div class="space-y-1 border-t border-slate-100 pt-3 mb-4">
                        ${listSubHtml}
                    </div>
                </div>
                <a href="${hrefPertama}" class="inline-flex items-center justify-center w-full py-2 px-4 rounded-lg bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white text-xs font-bold transition">
                    ${doneSub > 0 ? 'Lanjutkan Belajar &rarr;' : 'Mulai Belajar Bab Ini &rarr;'}
                </a>
            </div>`;
    }).join('');
}

// Kartu placeholder abu-abu bergaris putus-putus (dipakai di 2 kasus di atas).
// lebarPenuh = true hanya untuk kasus "kelas belum punya bab sama sekali".
function kartuSegeraHadir(judul, teks, lebarPenuh) {
    const spanClass = lebarPenuh ? 'col-span-full' : '';
    return `
        <div class="${spanClass} bg-slate-100 p-6 rounded-xl border border-dashed border-slate-300 opacity-60">
            <h2 class="text-lg font-bold text-slate-500 mb-2">${judul}</h2>
            <p class="text-sm text-slate-400 leading-relaxed">${teks}</p>
        </div>`;
}

document.addEventListener('DOMContentLoaded', renderHubKelas);
