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

    // KASUS 2: Ada bab -> render satu kartu per bab
    gridEl.innerHTML = data.bab.map((bab, index) => {
        const nomorBab = index + 1;
        const punyaSubbab = Array.isArray(bab.subbab) && bab.subbab.length > 0;

        // Bab sudah terdaftar di curriculum.js, tapi kontennya belum digarap
        // (misalnya Termokimia yang subbab-nya masih array kosong).
        // Kartu ini TIDAK lebar penuh -> tetap sejajar di grid dengan kartu bab aktif lainnya.
        if (!punyaSubbab) {
            return kartuSegeraHadir(
                `Bab ${nomorBab}: ${bab.title}`,
                `Materi ${bab.title} akan segera ditambahkan di sini.`,
                false
            );
        }

        // Deskripsi: pakai teks kurasi manual (bab.deskripsi) kalau ada,
        // kalau tidak, gabungkan otomatis dari judul semua sub-bab
        const deskripsi = bab.deskripsi || (bab.subbab.map(sb => sb.title).join(', ') + '.');
        const hrefPertama = `/kelas-${kelasKey}/${bab.slug}/${bab.subbab[0].file}`;

        return `
            <a href="${hrefPertama}" class="block bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition group">
                <h2 class="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                    Bab ${nomorBab}: ${bab.title}
                </h2>
                <p class="text-sm text-slate-500 leading-relaxed">
                    ${deskripsi}
                </p>
                <p class="text-xs text-teal-600 font-semibold mt-3">${bab.subbab.length} sub-bab &rarr;</p>
            </a>`;
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
