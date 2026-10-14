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
            const scoreBadge = scoreObj ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 ml-auto shrink-0">Nilai ${scoreObj.pct}</span>` : '';
            return `
                <a href="/kelas-${kelasKey}/${bab.slug}/${sb.file}" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs ${isDone ? 'bg-emerald-50/70 text-emerald-950 font-medium' : 'text-slate-600 hover:bg-black/[0.03] hover:text-slate-950'} transition-all">
                    <span class="shrink-0">${isDone ? '✅' : `<span class="inline-block w-4 text-slate-400 font-mono text-center">${sIdx + 1}.</span>`}</span>
                    <span class="truncate">${sb.title}</span>
                    ${scoreBadge}
                </a>`;
        }).join('');

        const pct = Math.round((doneSub / totalSub) * 100);

        return `
            <div class="bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <a href="${hrefPertama}" class="text-xl font-bold tracking-tight text-slate-900 hover:text-teal-600 transition-colors">
                            Bab ${nomorBab}: ${bab.title}
                        </a>
                        <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${pct === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600 border border-black/[0.04]'}">
                            ${doneSub}/${totalSub} Selesai
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        ${deskripsi}
                    </p>
                    <!-- Progress Bar ala Apple -->
                    <div class="w-full h-1.5 bg-black/[0.04] rounded-full overflow-hidden mb-4">
                        <div class="h-full bg-teal-500 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                    </div>
                    <div class="space-y-1 border-t border-black/[0.05] pt-3 mb-5">
                        ${listSubHtml}
                    </div>
                </div>
                <a href="${hrefPertama}" class="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold shadow-xs transition-all active:scale-[0.98]">
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
        <div class="${spanClass} bg-white/60 p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-dashed border-black/[0.08] opacity-60">
            <h2 class="text-lg font-bold text-slate-400 mb-2">${judul}</h2>
            <p class="text-sm text-slate-400 leading-relaxed">${teks}</p>
        </div>`;
}

document.addEventListener('DOMContentLoaded', renderHubKelas);
