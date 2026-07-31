// =================================================================
// js/include.js — Memuat komponen bersama (header, footer, modal SPU)
// ke setiap halaman lewat fetch(), lalu membangun SIDEBAR dan menu
// "Modul Lain" (TKA/ANBK) secara OTOMATIS dari js/curriculum.js.
//
// PENTING: file ini WAJIB dimuat SETELAH js/curriculum.js di HTML,
// karena bergantung pada variabel global `kurikulum` dan `modulLain`.
//
// CATATAN: fetch() ke file lokal butuh server (mis. Live Server) dan
// path absolut ("/partials/...") — buka folder PALING ATAS project
// di VS Code (bukan sub-folder), supaya path ini berfungsi benar.
// =================================================================

async function loadPartial(url, targetId, callback) {
    const target = document.getElementById(targetId);
    if (!target) return;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        target.innerHTML = await res.text();
        if (typeof callback === 'function') callback();
    } catch (err) {
        target.innerHTML = `
            <div class="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 m-2">
                ⚠️ Komponen "${url}" gagal dimuat. Pastikan kamu membuka <b>folder paling atas</b>
                project ini di VS Code lewat <b>Live Server</b>, bukan sub-folder atau file:// langsung.
            </div>`;
        console.error(`[include.js] Gagal memuat ${url}:`, err);
    }
}

// Membangun SIDEBAR sub-bab secara otomatis berdasarkan
// data-kelas & data-bab yang ditulis di tag <body> halaman ini.
function bangunSidebar() {
    const container = document.getElementById('sidebar-placeholder');
    if (!container) return;

    const kelasId = document.body.dataset.kelas;
    const babSlug = document.body.dataset.bab;

    // Halaman tanpa data-kelas/data-bab (mis. halaman hub) tidak butuh sidebar sub-bab
    if (!kelasId || !babSlug || typeof kurikulum === 'undefined') {
        container.remove();
        return;
    }

    const dataKelas = kurikulum[kelasId];
    const dataBab = dataKelas ? dataKelas.bab.find(b => b.slug === babSlug) : null;

    if (!dataBab) {
        container.innerHTML = `<p class="text-xs text-red-500 p-3">⚠️ Data bab "${babSlug}" tidak ditemukan di js/curriculum.js</p>`;
        return;
    }

    const halamanIni = location.pathname.split('/').pop();

    const daftarSubbab = dataBab.subbab.map((item, idx) => {
        const aktif = item.file === halamanIni;
        const kelasCSS = aktif
            ? 'bg-teal-50 text-teal-700 font-semibold'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900';
        return `
            <a href="${item.file}" class="flex items-start gap-2 px-3 py-2 rounded-lg transition ${kelasCSS}">
                <span class="shrink-0">${idx + 1}.</span>
                <span>${item.title}</span>
            </a>`;
    }).join('');

    container.innerHTML = `
        <aside class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit sticky top-24 w-full">
            <p class="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-1">${dataKelas.label}</p>
            <h2 class="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                📖 ${dataBab.title}
            </h2>
            <nav class="space-y-1 text-sm font-medium">
                ${daftarSubbab}
            </nav>
        </aside>`;
}

// Menyisipkan link modul lain (Simulasi TKA, Persiapan ANBK, dst) ke header,
// dibaca otomatis dari array `modulLain` di js/curriculum.js
function bangunModulLainNav() {
    const slot = document.getElementById('modul-lain-nav');
    if (!slot || typeof modulLain === 'undefined') return;

    slot.innerHTML = modulLain.map(m => `
        <a href="${m.path}" class="hover:text-teal-600 transition">${m.title}</a>
    `).join('');
}
// Menyembunyikan tombol "Kembali ke Beranda" ketika user memang sedang
// berada di halaman beranda itu sendiri (path "/" atau "/index.html")
function aturTombolBeranda() {
    const btn = document.getElementById('btn-kembali-beranda');
    if (!btn) return;

    const path = location.pathname;
    const diBeranda = path === '/' || path === '/index.html';

    if (diBeranda) {
        btn.remove();
    }
}
// Membangun grid kartu Kelas & Modul di halaman BERANDA (index.html),
// dibaca otomatis dari js/curriculum.js. Aman dipanggil di halaman
// manapun — tidak melakukan apa-apa jika elemen #menu-beranda tidak ada.
function bangunMenuBeranda() {
    const slot = document.getElementById('menu-beranda');
    if (!slot || typeof kurikulum === 'undefined') return;

    let html = '';

    for (const [kelasId, dataKelas] of Object.entries(kurikulum)) {
        const adaIsi = dataKelas.bab && dataKelas.bab.length > 0;
        if (adaIsi) {
            const babPertama = dataKelas.bab[0];
            const subbabPertama = babPertama.subbab[0];
            const url = `/kelas-${kelasId}/${babPertama.slug}/${subbabPertama.file}`;
            html += `
                <a href="${url}" class="block bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition group">
                    <span class="text-3xl mb-3 block">🧪</span>
                    <h2 class="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">${dataKelas.label}</h2>
                    <p class="text-sm text-slate-500 leading-relaxed">${dataKelas.bab.length} bab tersedia</p>
                    <p class="text-xs text-teal-600 font-semibold mt-3">Mulai belajar &rarr;</p>
                </a>`;
        } else {
            html += `
                <div class="bg-slate-100 p-6 rounded-xl border border-dashed border-slate-300 opacity-60">
                    <span class="text-3xl mb-3 block">🧪</span>
                    <h2 class="text-lg font-bold text-slate-500 mb-2">${dataKelas.label}</h2>
                    <p class="text-sm text-slate-400 leading-relaxed">Materi segera hadir</p>
                </div>`;
        }
    }

    modulLain.forEach(m => {
        html += `
            <a href="${m.path}" class="block bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition group">
                <span class="text-3xl mb-3 block">${m.icon}</span>
                <h2 class="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">${m.title}</h2>
                <p class="text-sm text-slate-500 leading-relaxed">${m.status === 'segera' ? 'Segera hadir' : 'Mulai berlatih'}</p>
            </a>`;
    });

    slot.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    loadPartial('/partials/header.html', 'header-placeholder', () => {
        bangunModulLainNav();
        aturTombolBeranda();
    });
    loadPartial('/partials/footer.html', 'footer-placeholder');
    loadPartial('/partials/spu-modal.html', 'spu-placeholder', () => {
        if (typeof initSpu === 'function') initSpu();
    });
    bangunSidebar();
    bangunMenuBeranda();
});
