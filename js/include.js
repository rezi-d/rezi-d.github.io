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
            // Arahkan ke halaman HUB kelas (menampilkan semua bab), bukan
            // langsung lompat ke sub-bab pertama — konsisten dengan link
            // "Kelas XI" dkk. di dropdown header.
            const url = `/kelas-${kelasId}/index.html`;
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

// Membangun DAFTAR ISI CEPAT (Table of Contents / Quick Jump) secara OTOMATIS
// untuk semua halaman materi yang memiliki banyak sub-topik (h2 di dalam <article>).
function bangunDaftarIsi() {
    const article = document.querySelector('main article');
    if (!article) return;

    // Ambil semua h2 di dalam article (abaikan jika ada di dalam komponen modal/aside)
    const headings = Array.from(article.querySelectorAll('section > h2, section h2'));
    if (headings.length < 3) return; // Hanya tampil jika materi cukup panjang (>= 3 topik)

    // Cari judul h1 sebagai patokan posisi penyisipan
    const h1 = article.querySelector('h1');
    if (!h1) return;

    // Buat wadah Navigasi Cepat
    const tocBox = document.createElement('div');
    tocBox.className = 'my-6 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-xl border border-slate-200/80 shadow-xs';
    
    let pillsHtml = '';
    headings.forEach((h2, idx) => {
        // Buat ID jika belum ada
        const section = h2.closest('section') || h2;
        let id = section.id;
        if (!id) {
            id = `topik-${idx + 1}`;
            section.id = id;
        }

        // Ambil teks judul tanpa emotikon atau badge jika ada
        const cleanTitle = h2.textContent.trim().replace(/\s+/g, ' ');

        pillsHtml += `
            <a href="#${id}" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 transition shadow-2xs">
                <span>${cleanTitle}</span>
            </a>`;
    });

    tocBox.innerHTML = `
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/60">
            <span class="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                🧭 Navigasi Cepat Materi
            </span>
            <span class="text-[11px] text-slate-500">${headings.length} Topik</span>
        </div>
        <div class="flex flex-wrap gap-2">
            ${pillsHtml}
        </div>
    `;

    // Sisipkan tepat setelah judul h1 atau pengantar pertama
    h1.insertAdjacentElement('afterend', tocBox);

    // Aktifkan smooth scroll dengan offset agar tidak tertutup header sticky
    tocBox.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const headerOffset = 80;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Tombol "Kembali ke Atas" melayang (Floating Back to Top)
function initBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'btn-back-to-top';
    btn.innerHTML = '↑';
    btn.title = 'Kembali ke atas';
    btn.className = 'fixed bottom-20 right-6 z-40 w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 text-white font-bold shadow-lg border border-slate-700 active:scale-95 transition-all duration-300 flex items-center justify-center opacity-0 pointer-events-none translate-y-3 cursor-pointer';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
            btn.classList.add('opacity-100', 'translate-y-0');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
            btn.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Otomatis memastikan Favicon 🧪, Judul Tab, dan Meta SEO/OpenGraph terisi rapi untuk halaman baru di masa depan
function initSEO() {
    const iconLink = document.querySelector('link[rel="icon"]');
    const svgFavicon = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>';
    if (iconLink && iconLink.getAttribute('href') === 'data:,') {
        iconLink.setAttribute('href', svgFavicon);
    } else if (!iconLink) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = svgFavicon;
        document.head.appendChild(link);
    }

    const kelasId = document.body.dataset.kelas;
    const babSlug = document.body.dataset.bab;
    const halamanIni = location.pathname.split('/').pop();

    let subTitle = '';
    let babTitle = '';
    let kelasLabel = '';
    let babDesc = '';

    if (kelasId && typeof kurikulum !== 'undefined' && kurikulum[kelasId]) {
        kelasLabel = kurikulum[kelasId].label || `Kelas ${kelasId}`;
        if (babSlug) {
            const dataBab = kurikulum[kelasId].bab.find(b => b.slug === babSlug);
            if (dataBab) {
                babTitle = dataBab.title;
                babDesc = dataBab.deskripsi || '';
                const dataSub = dataBab.subbab.find(s => s.file === halamanIni);
                if (dataSub) subTitle = dataSub.title;
            }
        }
    }

    if (document.title.includes('Modul Materi')) {
        if (subTitle && babTitle) {
            document.title = `${subTitle} - ${babTitle} ${kelasLabel} | KimiaInteraktif`;
        } else {
            const h1 = document.querySelector('main article h1, h1');
            if (h1) document.title = `${h1.textContent.trim()} - KimiaInteraktif`;
        }
    }

    // Fallback dinamis jika halaman baru belum memiliki meta description / og:title
    if (!document.querySelector('meta[name="description"]') && (subTitle || babDesc)) {
        const metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        metaDesc.content = `Pelajari materi ${subTitle || babTitle} (${kelasLabel} SMA) lengkap dengan simulasi interaktif dan latihan soal. ${babDesc}`.trim();
        document.head.appendChild(metaDesc);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initSEO();
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
    bangunDaftarIsi();
    initBackToTop();
});

