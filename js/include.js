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

// =================================================================
// MANAJEMEN PROGRES BELAJAR & SKOR KUIS (localStorage)
// =================================================================
const PROGRES_STORAGE_KEY = 'kimia_progres_v1';

function getProgres() {
    try {
        const raw = localStorage.getItem(PROGRES_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            return {
                completed: parsed.completed || {},
                scores: parsed.scores || {},
                studentName: parsed.studentName || '',
                studentClass: parsed.studentClass || ''
            };
        }
    } catch (e) {}
    return { completed: {}, scores: {}, studentName: '', studentClass: '' };
}

function saveProgres(data) {
    try {
        localStorage.setItem(PROGRES_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
}

function getCurrentSubbabKey() {
    let kelasId = document.body.dataset.kelas;
    let babSlug = document.body.dataset.bab;
    const parts = location.pathname.split('/').filter(Boolean);
    const halamanIni = parts[parts.length - 1];
    if ((!kelasId || !babSlug) && parts.length >= 3 && parts[0].startsWith('kelas-')) {
        kelasId = kelasId || parts[0].replace('kelas-', '');
        babSlug = babSlug || parts[1];
    }
    if (!kelasId || !babSlug || !halamanIni) return null;
    return `${kelasId}/${babSlug}/${halamanIni}`;
}

// Membangun SIDEBAR sub-bab secara otomatis berdasarkan
// data-kelas & data-bab yang ditulis di tag <body> (atau dari URL path).
function bangunSidebar() {
    const container = document.getElementById('sidebar-placeholder') || document.getElementById('sidebar-materi');
    if (!container) return;

    let kelasId = document.body.dataset.kelas;
    let babSlug = document.body.dataset.bab;
    const pathParts = location.pathname.split('/').filter(Boolean);
    if ((!kelasId || !babSlug) && pathParts.length >= 3 && pathParts[0].startsWith('kelas-')) {
        kelasId = kelasId || pathParts[0].replace('kelas-', '');
        babSlug = babSlug || pathParts[1];
        document.body.dataset.kelas = kelasId;
        document.body.dataset.bab = babSlug;
    }

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
    const progres = getProgres();
    const totalSub = dataBab.subbab.length;
    let doneCount = 0;
    let activeIdx = -1;

    const isCompact = totalSub > 5;
    const itemPadding = isCompact ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-sm';

    const daftarSubbab = dataBab.subbab.map((item, idx) => {
        const aktif = item.file === halamanIni;
        if (aktif) activeIdx = idx;
        const subKey = `${kelasId}/${babSlug}/${item.file}`;
        const isDone = !!progres.completed[subKey];
        if (isDone) doneCount++;
        const scoreInfo = progres.scores[subKey];

        const kelasCSS = aktif
            ? 'bg-[#0071e3]/10 text-[#0071e3] font-semibold border border-[#0071e3]/20 shadow-2xs'
            : (isDone ? 'text-slate-700 hover:bg-black/[0.03]' : 'text-slate-600 hover:bg-black/[0.03] hover:text-slate-950');

        const iconStatus = isDone
            ? `<span class="shrink-0 text-xs" title="Selesai dipelajari">✅</span>`
            : `<span class="shrink-0 text-xs ${aktif ? 'text-[#0071e3] font-bold' : 'text-slate-400'} font-mono">${idx + 1}.</span>`;

        const scorePill = scoreInfo
            ? `<span class="ml-auto shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${scoreInfo.pct >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${scoreInfo.pct}</span>`
            : '';

        return `
            <a href="${item.file}" data-active="${aktif ? 'true' : 'false'}" class="flex items-center gap-2 ${itemPadding} rounded-xl transition-all ${kelasCSS}">
                ${iconStatus}
                <span class="leading-snug">${item.title}</span>
                ${scorePill}
            </a>`;
    }).join('');

    const pctBab = totalSub > 0 ? Math.round((doneCount / totalSub) * 100) : 0;

    // Tombol pintas Prev / Next langsung di footer sidebar agar tidak perlu scroll ke bawah halaman
    const prevItem = activeIdx > 0 ? dataBab.subbab[activeIdx - 1] : null;
    const nextItem = (activeIdx >= 0 && activeIdx < totalSub - 1) ? dataBab.subbab[activeIdx + 1] : null;

    const quickNavFooter = activeIdx >= 0 ? `
        <div class="pt-3 mt-2 border-t border-black/[0.06] shrink-0">
            <div class="flex items-center justify-between gap-1.5">
                ${prevItem
                    ? `<a href="${prevItem.file}" title="Sebelumnya: ${prevItem.title}" class="flex-1 text-center py-1.5 px-2 rounded-full text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition truncate">&larr; Sebelumnya</a>`
                    : `<span class="flex-1 text-center py-1.5 px-2 rounded-full text-[11px] font-semibold bg-slate-50 text-slate-300 select-none">&larr; Awal</span>`
                }
                <span class="text-[11px] font-mono font-bold text-slate-500 px-1.5 shrink-0">${activeIdx + 1}/${totalSub}</span>
                ${nextItem
                    ? `<a href="${nextItem.file}" title="Lanjut: ${nextItem.title}" class="flex-1 text-center py-1.5 px-2 rounded-full text-[11px] font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition shadow-2xs truncate">Lanjut &rarr;</a>`
                    : `<a href="/kelas-${kelasId}/index.html" class="flex-1 text-center py-1.5 px-2 rounded-full text-[11px] font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition shadow-2xs truncate">Hub Kelas &rarr;</a>`
                }
            </div>
        </div>
    ` : '';

    container.innerHTML = `
        <aside class="bg-white p-5 rounded-2xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] sticky top-20 w-full flex flex-col lg:max-h-[calc(100vh-6rem)]">
            <div class="shrink-0">
                <div class="flex items-center justify-between mb-1">
                    <p class="text-xs font-semibold text-teal-600 uppercase tracking-wider">${dataKelas.label}</p>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${pctBab === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">${doneCount}/${totalSub} Selesai</span>
                </div>
                <h2 class="text-sm sm:text-base font-bold text-slate-900 mb-2.5 flex items-center gap-1.5 leading-snug">
                    <span>📖</span> <span>${dataBab.title}</span>
                </h2>
                <!-- Progress Bar Bab -->
                <div class="mb-3 pb-2.5 border-b border-black/[0.05]">
                    <div class="flex justify-between text-[11px] text-slate-500 mb-1">
                        <span>Progres Bab</span>
                        <span class="font-bold text-teal-700">${pctBab}%</span>
                    </div>
                    <div class="w-full h-1.5 bg-black/[0.04] rounded-full overflow-hidden">
                        <div class="h-full bg-teal-500 rounded-full transition-all duration-500" style="width: ${pctBab}%"></div>
                    </div>
                </div>
            </div>
            <nav id="sidebar-subbab-nav" class="space-y-1 font-medium overflow-y-auto pr-1 flex-1 max-h-[48vh] lg:max-h-none" style="scrollbar-width: thin;">
                ${daftarSubbab}
            </nav>
            ${quickNavFooter}
        </aside>`;

    // Otomatis gulir (auto-scroll) daftar di dalam sidebar agar sub-bab yang sedang aktif langsung terlihat di tengah
    const navEl = container.querySelector('#sidebar-subbab-nav');
    const activeLink = navEl ? navEl.querySelector('a[data-active="true"]') : null;
    if (navEl && activeLink) {
        const offset = activeLink.offsetTop - navEl.offsetTop - (navEl.clientHeight / 2) + (activeLink.clientHeight / 2);
        navEl.scrollTop = Math.max(0, offset);
    }

    // Sinkronisasi otomatis badge "Bab X: ...", nomor urut H1, dan indikator "Sub-Materi X dari Y" di dalam artikel
    const babIdx = dataKelas ? dataKelas.bab.findIndex(b => b.slug === babSlug) : -1;
    const articleEl = document.querySelector('main article');
    if (articleEl && babIdx >= 0) {
        articleEl.querySelectorAll('span').forEach(sp => {
            const txt = sp.textContent.trim();
            if (/^Bab\s+\d+\s*:/i.test(txt)) {
                sp.textContent = txt.replace(/^Bab\s+\d+/i, `Bab ${babIdx + 1}`);
            } else if (activeIdx >= 0 && /^Sub-Materi\s+\d+\s+dari\s+\d+$/i.test(txt)) {
                sp.textContent = `Sub-Materi ${activeIdx + 1} dari ${totalSub}`;
            }
        });
        const h1El = articleEl.querySelector('h1');
        if (h1El && activeIdx >= 0 && /^\s*\d+\.\s+/.test(h1El.textContent)) {
            h1El.textContent = h1El.textContent.trim().replace(/^\d+\./, `${activeIdx + 1}.`);
        }
    }
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

    const progres = getProgres();
    let html = '';

    for (const [kelasId, dataKelas] of Object.entries(kurikulum)) {
        const adaIsi = dataKelas.bab && dataKelas.bab.length > 0;
        if (adaIsi) {
            let totalSubKelas = 0;
            let doneSubKelas = 0;
            dataKelas.bab.forEach(b => {
                if (Array.isArray(b.subbab)) {
                    b.subbab.forEach(sb => {
                        totalSubKelas++;
                        if (progres.completed[`${kelasId}/${b.slug}/${sb.file}`]) doneSubKelas++;
                    });
                }
            });
            const pctKelas = totalSubKelas > 0 ? Math.round((doneSubKelas / totalSubKelas) * 100) : 0;

            const url = `/kelas-${kelasId}/index.html`;
            html += `
                <a href="${url}" class="block bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                    <div>
                        <div class="flex items-start justify-between mb-4">
                            <span class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100/80 border border-black/[0.04] text-2xl select-none group-hover:scale-105 transition-transform">🧪</span>
                            <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full ${pctKelas === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600 border border-black/[0.04]'}">
                                ${doneSubKelas}/${totalSubKelas} Sub-bab
                            </span>
                        </div>
                        <h2 class="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors mb-1.5">${dataKelas.label}</h2>
                        <p class="text-xs text-slate-500 leading-relaxed mb-4">${dataKelas.bab.length} Bab &bull; ${totalSubKelas} Sub-materi interaktif terstruktur</p>
                    </div>
                    <div>
                        <div class="w-full h-1.5 bg-black/[0.04] rounded-full overflow-hidden mb-3.5">
                            <div class="h-full bg-teal-500 rounded-full transition-all duration-500" style="width: ${pctKelas}%"></div>
                        </div>
                        <p class="text-xs text-[#0071e3] font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                            <span>${doneSubKelas > 0 ? `Lanjutkan belajar (${pctKelas}%)` : 'Mulai belajar materi'}</span>
                            <span class="text-sm leading-none">&rsaquo;</span>
                        </p>
                    </div>
                </a>`;
        } else {
            html += `
                <div class="bg-white/60 p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-dashed border-black/[0.08] opacity-60">
                    <span class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 text-2xl mb-4 select-none">🧪</span>
                    <h2 class="text-xl font-bold text-slate-400 mb-1.5">${dataKelas.label}</h2>
                    <p class="text-xs text-slate-400 leading-relaxed">Materi sedang disiapkan sesuai silabus.</p>
                </div>`;
        }
    }

    modulLain.forEach(m => {
        html += `
            <a href="${m.path}" class="block bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                <div>
                    <div class="flex items-start justify-between mb-4">
                        <span class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100/80 border border-black/[0.04] text-2xl select-none group-hover:scale-105 transition-transform">${m.icon}</span>
                        <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full ${m.status === 'segera' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}">
                            ${m.status === 'segera' ? 'Segera' : 'Tersedia'}
                        </span>
                    </div>
                    <h2 class="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors mb-1.5">${m.title}</h2>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">Bank latihan soal interaktif dan simulasi ujian persiapan asesmen nasional.</p>
                </div>
                <div>
                    <p class="text-xs text-[#0071e3] font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        <span>${m.status === 'segera' ? 'Segera hadir' : 'Mulai simulasi'}</span>
                        <span class="text-sm leading-none">&rsaquo;</span>
                    </p>
                </div>
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

    // Buat wadah Navigasi Cepat (Gaya Apple Minimalist)
    const tocBox = document.createElement('div');
    tocBox.className = 'my-6 p-4 sm:p-5 bg-black/[0.02] rounded-2xl border border-black/[0.06] shadow-2xs';
    
    let pillsHtml = '';
    headings.forEach((h2, idx) => {
        // Buat ID jika belum ada
        const section = h2.closest('section') || h2;
        let id = section.id;
        if (!id) {
            id = `topik-${idx + 1}`;
            section.id = id;
        }

        // Ambil teks judul tanpa emotikon atau badge jika ada, dan bersihkan duplikasi KaTeX
        const clone = h2.cloneNode(true);
        clone.querySelectorAll('.katex-mathml, annotation').forEach(el => el.remove());
        const cleanTitle = clone.textContent.trim().replace(/\s+/g, ' ');

        pillsHtml += `
            <a href="#${id}" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 hover:text-slate-950 border border-black/[0.06] rounded-full text-xs font-medium text-slate-700 transition-all shadow-2xs">
                <span>${cleanTitle}</span>
            </a>`;
    });

    tocBox.innerHTML = `
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-black/[0.05]">
            <span class="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                🧭 Navigasi Cepat Materi
            </span>
            <span class="text-[11px] font-medium text-slate-400 font-mono">${headings.length} Topik</span>
        </div>
        <div class="flex flex-wrap gap-2">
            ${pillsHtml}
        </div>
    `;

    // Sisipkan tepat setelah judul h1 atau pengantar pertama
    h1.insertAdjacentElement('afterend', tocBox);

    if (typeof renderMathInElement === 'function') {
        try {
            renderMathInElement(tocBox, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        } catch (e) {}
    }

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

// Tombol "Kembali ke Atas" melayang (Gaya Apple Frosted Glass)
function initBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'btn-back-to-top';
    btn.innerHTML = '↑';
    btn.title = 'Kembali ke atas';
    btn.className = 'fixed bottom-14 right-4 z-40 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-slate-900 text-sm font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-black/[0.08] active:scale-90 transition-all duration-300 flex items-center justify-center opacity-0 pointer-events-none translate-y-3 cursor-pointer';
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

// =================================================================
// PENCARIAN MATERI INSTAN DI HEADER (Otomatis dari js/curriculum.js)
// =================================================================
function initGlobalSearch() {
    const input = document.getElementById('global-search-input');
    const resultsBox = document.getElementById('global-search-results');
    if (!input || !resultsBox || typeof kurikulum === 'undefined') return;

    // Bangun indeks pencarian otomatis dari seluruh Kelas, Bab, dan Sub-bab di curriculum.js
    const index = [];
    for (const [kelasId, dataKelas] of Object.entries(kurikulum)) {
        const kelasLabel = dataKelas.label || `Kelas ${kelasId}`;
        if (!Array.isArray(dataKelas.bab)) continue;
        dataKelas.bab.forEach(bab => {
            if (!Array.isArray(bab.subbab)) return;
            bab.subbab.forEach((sub, idx) => {
                const subKey = `${kelasId}/${bab.slug}/${sub.file}`;
                index.push({
                    kelasId,
                    kelasLabel,
                    babTitle: bab.title,
                    babDesc: bab.deskripsi || '',
                    subTitle: sub.title,
                    subNum: idx + 1,
                    url: `/kelas-${kelasId}/${bab.slug}/${sub.file}`,
                    subKey,
                    searchText: `${kelasLabel} ${bab.title} ${bab.deskripsi || ''} ${sub.title}`.toLowerCase()
                });
            });
        });
    }

    function renderResults(query) {
        const q = query.trim().toLowerCase();
        if (!q) {
            resultsBox.classList.add('hidden');
            resultsBox.innerHTML = '';
            return;
        }

        const terms = q.split(/\s+/);
        const matches = index.filter(item => terms.every(t => item.searchText.includes(t)));
        const progres = getProgres();

        resultsBox.classList.remove('hidden');

        if (matches.length === 0) {
            resultsBox.innerHTML = `
                <div class="p-4 text-center text-xs text-slate-500">
                    Materi <b>"${query}"</b> tidak ditemukan.<br>
                    <button type="button" onclick="toggleSpuModal(true)" class="mt-2 text-teal-600 font-semibold hover:underline">🧪 Cari di Tabel Periodik Unsur &rarr;</button>
                </div>`;
            return;
        }

        resultsBox.innerHTML = matches.slice(0, 10).map(m => {
            const isDone = !!progres.completed[m.subKey];
            const score = progres.scores[m.subKey];
            return `
                <a href="${m.url}" class="block px-3.5 py-2.5 hover:bg-teal-50/70 transition">
                    <div class="flex items-center justify-between gap-2 mb-0.5">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200/60">
                            ${m.kelasLabel} &bull; ${m.babTitle}
                        </span>
                        <span class="text-[10px] font-bold text-emerald-700">
                            ${isDone ? '✅ Selesai' : ''}${score ? ` (${score.pct})` : ''}
                        </span>
                    </div>
                    <p class="text-xs font-bold text-slate-800">${m.subNum}. ${m.subTitle}</p>
                </a>`;
        }).join('');
    }

    input.addEventListener('input', (e) => renderResults(e.target.value));
    input.addEventListener('focus', (e) => {
        if (e.target.value.trim()) renderResults(e.target.value);
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
            resultsBox.classList.add('hidden');
        }
    });
}

// =================================================================
// TRACKER PROGRES SUB-BAB, SKOR KUIS OTOMATIS & KARTU BUKTI NILAI
// (Otomatis bekerja untuk semua halaman sekarang & halaman baru nanti)
// =================================================================
function initProgresDanKuis() {
    const article = document.querySelector('main article');
    const subKey = getCurrentSubbabKey();
    if (!article || !subKey) return;

    const kelasId = document.body.dataset.kelas;
    const babSlug = document.body.dataset.bab;
    const halamanIni = location.pathname.split('/').pop();
    const dataKelas = (typeof kurikulum !== 'undefined' && kurikulum[kelasId]) ? kurikulum[kelasId] : null;
    const dataBab = dataKelas ? dataKelas.bab.find(b => b.slug === babSlug) : null;
    const dataSub = dataBab ? dataBab.subbab.find(s => s.file === halamanIni) : null;

    const subTitle = dataSub ? dataSub.title : (article.querySelector('h1')?.textContent.trim() || 'Sub-Materi');
    const babTitle = dataBab ? dataBab.title : 'Kimia SMA';
    const kelasLabel = dataKelas ? dataKelas.label : `Kelas ${kelasId}`;

    // 1. Sisipkan Tombol "Tandai Selesai Dipelajari" di atas navigasi bawah
    const navBawah = Array.from(article.children).find(el => el.tagName === 'DIV' && el.className.includes('justify-between') && el.className.includes('border-t'));
    const doneBar = document.createElement('div');
    doneBar.className = 'mt-8 p-4 rounded-xl border border-slate-200 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-3';

    function renderDoneBar() {
        const progres = getProgres();
        const isDone = !!progres.completed[subKey];
        const score = progres.scores[subKey];
        doneBar.innerHTML = `
            <div class="flex items-center gap-2.5 text-xs sm:text-sm">
                <span class="text-xl">${isDone ? '✅' : '📖'}</span>
                <div>
                    <p class="font-bold ${isDone ? 'text-emerald-800' : 'text-slate-800'}">
                        ${isDone ? 'Sub-Bab Ini Sudah Selesai Dipelajari!' : 'Sudah selesai membaca materi di halaman ini?'}
                    </p>
                    <p class="text-[11px] text-slate-500">
                        ${score ? `Skor Latihan Mandiri Terakhir: <b>${score.correct}/${score.total} Benar (Nilai ${score.pct})</b>` : 'Tandai selesai atau kerjakan latihan soal di atas untuk menyimpan progresmu.'}
                    </p>
                </div>
            </div>
            <button type="button" id="btn-toggle-selesai" class="px-4 py-2 rounded-lg text-xs font-bold transition shrink-0 cursor-pointer ${isDone ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs' : 'bg-white hover:bg-teal-50 text-teal-700 border border-teal-300'}">
                ${isDone ? '✓ Selesai Dipelajari (Klik untuk Batal)' : '☐ Tandai Selesai Dipelajari'}
            </button>
        `;
        const btn = doneBar.querySelector('#btn-toggle-selesai');
        if (btn) {
            btn.addEventListener('click', () => {
                const p = getProgres();
                if (p.completed[subKey]) {
                    delete p.completed[subKey];
                } else {
                    p.completed[subKey] = true;
                }
                saveProgres(p);
                renderDoneBar();
                bangunSidebar();
            });
        }
    }

    if (navBawah) {
        navBawah.insertAdjacentElement('beforebegin', doneBar);
    } else {
        article.appendChild(doneBar);
    }
    renderDoneBar();

    // 2. Deteksi otomatis Latihan Soal (input[type="radio"]) di dalam <article>
    const allRadios = Array.from(article.querySelectorAll('input[type="radio"]'));
    if (allRadios.length === 0) return;

    // Kelompokkan radio berdasarkan atribut `name`
    const groupNames = [...new Set(allRadios.map(r => r.name).filter(Boolean))];
    if (groupNames.length === 0) return;

    // Cari section tempat kuis berada
    const lastRadio = allRadios[allRadios.length - 1];
    const quizSection = lastRadio.closest('section') || lastRadio.parentElement;
    if (!quizSection) return;

    const scorePanel = document.createElement('div');
    scorePanel.className = 'mt-6 p-5 bg-white rounded-xl border-2 border-indigo-200 shadow-xs';
    quizSection.appendChild(scorePanel);

    function hitungSkorSekarang() {
        let answered = 0;
        let correct = 0;

        groupNames.forEach(name => {
            const checked = article.querySelector(`input[name="${name}"]:checked`);
            if (checked) {
                answered++;
                // Cari kotak soal tempat radio ini berada untuk mengecek apakah feedback-nya "✅"
                const card = checked.closest('div.bg-white') || checked.parentElement?.parentElement?.parentElement;
                if (card && card.innerHTML.includes('✅')) {
                    correct++;
                }
            }
        });

        const total = groupNames.length;
        const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
        return { answered, correct, total, pct };
    }

    function updateScoreUI() {
        const stats = hitungSkorSekarang();
        const progres = getProgres();

        // Simpan skor otomatis jika siswa sudah menjawab minimal 1 soal
        if (stats.answered > 0) {
            progres.scores[subKey] = {
                correct: stats.correct,
                total: stats.total,
                pct: stats.pct,
                updatedAt: new Date().toISOString()
            };
            // Jika semua soal sudah dijawab, otomatis tandai sub-bab selesai!
            if (stats.answered === stats.total) {
                progres.completed[subKey] = true;
            }
            saveProgres(progres);
            renderDoneBar();
            bangunSidebar();
        }

        const savedScore = progres.scores[subKey] || stats;

        scorePanel.innerHTML = `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block mb-0.5">📊 Rekap Otomatis Latihan Mandiri</span>
                    <h4 class="text-base font-bold text-slate-900">
                        Dijawab: ${stats.answered}/${stats.total} Soal &bull; Benar: <span class="text-emerald-600">${stats.correct}/${stats.total}</span>
                    </h4>
                </div>
                <div class="flex items-center gap-3">
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 uppercase font-bold block">Nilai Kamu</span>
                        <span class="text-2xl font-extrabold ${stats.pct >= 75 ? 'text-emerald-600' : 'text-indigo-600'} font-mono">${stats.pct}</span>
                    </div>
                </div>
            </div>

            <!-- Form Cetak / Unduh Kartu Bukti Skor untuk Google Classroom -->
            <div class="mt-4 pt-1">
                <p class="text-xs font-semibold text-slate-700 mb-2">🎓 Unduh Kartu Bukti Nilai (Untuk Dilampirkan ke Google Classroom):</p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <input type="text" id="input-nama-siswa" placeholder="Nama Lengkap Siswa..." value="${progres.studentName.replace(/"/g, '&quot;')}"
                           class="px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-indigo-500">
                    <input type="text" id="input-kelas-siswa" placeholder="Kelas (misal: XII MIPA 1)..." value="${progres.studentClass.replace(/"/g, '&quot;')}"
                           class="px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-indigo-500">
                    <button type="button" id="btn-unduh-kartu-skor"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5">
                        📥 Unduh Kartu Bukti Skor (PNG)
                    </button>
                </div>
                <p id="pesan-kartu-skor" class="text-[11px] text-slate-500 mt-2">
                    💡 Isi Nama & Kelas lalu klik tombol di atas untuk mengunduh gambar Kartu Nilai resmi dari halaman ini.
                </p>
            </div>
        `;

        const namaEl = scorePanel.querySelector('#input-nama-siswa');
        const kelasEl = scorePanel.querySelector('#input-kelas-siswa');
        const btnUnduh = scorePanel.querySelector('#btn-unduh-kartu-skor');

        const simpanIdentitas = () => {
            const p = getProgres();
            p.studentName = namaEl.value.trim();
            p.studentClass = kelasEl.value.trim();
            saveProgres(p);
        };
        namaEl.addEventListener('input', simpanIdentitas);
        kelasEl.addEventListener('input', simpanIdentitas);

        btnUnduh.addEventListener('click', () => {
            simpanIdentitas();
            const nama = namaEl.value.trim() || 'Siswa KimiaInteraktif';
            const kls = kelasEl.value.trim() || kelasLabel;
            const currentStats = hitungSkorSekarang();
            unduhKartuSkorPNG({
                nama,
                kelas: kls,
                kelasLabel,
                babTitle,
                subTitle,
                correct: currentStats.correct,
                total: currentStats.total,
                pct: currentStats.pct
            });
            const msg = scorePanel.querySelector('#pesan-kartu-skor');
            if (msg) {
                msg.innerHTML = `<span class="text-emerald-700 font-semibold">✅ Kartu Bukti Skor berhasil diunduh! Silakan lampirkan gambarnya di Google Classroom.</span>`;
            }
        });
    }

    // Dengarkan perubahan jawaban radio (beri jeda 20ms agar script halaman selesai menulis feedback ✅)
    allRadios.forEach(r => {
        r.addEventListener('change', () => {
            setTimeout(updateScoreUI, 25);
        });
    });

    updateScoreUI();
}

// Menggambar Kartu Bukti Skor ke HTML5 Canvas dan mengunduhnya sebagai file gambar PNG
function unduhKartuSkorPNG(info) {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 460;
    const ctx = canvas.getContext('2d');

    // Background gradien gelap elegan
    const grad = ctx.createLinearGradient(0, 0, 800, 460);
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(1, '#1e293b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 460);

    // Garis aksen atas
    const barGrad = ctx.createLinearGradient(0, 0, 800, 0);
    barGrad.addColorStop(0, '#14b8a6');
    barGrad.addColorStop(1, '#6366f1');
    ctx.fillStyle = barGrad;
    ctx.fillRect(0, 0, 800, 10);

    // Bingkai dalam
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    ctx.lineWidth = 2;
    ctx.strokeRect(24, 28, 752, 408);

    // Header
    ctx.fillStyle = '#2dd4bf';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('🧪 KIMIAINTERAKTIF — BUKTI PENYELESAIAN MATERI & KUIS', 48, 66);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px monospace';
    ctx.fillText('https://kimia.ajarkita.my.id', 48, 88);

    // Garis pemisah
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.beginPath();
    ctx.moveTo(48, 106);
    ctx.lineTo(752, 106);
    ctx.stroke();

    // Identitas Siswa
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.fillText('NAMA SISWA', 48, 140);
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText(info.nama.slice(0, 36), 48, 170);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.fillText('KELAS', 48, 206);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(info.kelas.slice(0, 28), 48, 232);

    // Detail Materi
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.fillText('MODUL / BAB', 48, 274);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText(`${info.kelasLabel} — ${info.babTitle}`, 48, 298);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.fillText('SUB-MATERI', 48, 334);
    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText(info.subTitle.slice(0, 48), 48, 358);

    // Kotak Skor di Kanan
    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.strokeStyle = info.pct >= 75 ? '#10b981' : '#6366f1';
    ctx.lineWidth = 3;
    ctx.fillRect(540, 130, 210, 230);
    ctx.strokeRect(540, 130, 210, 230);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('NILAI AKHIR', 645, 168);

    ctx.fillStyle = info.pct >= 75 ? '#34d399' : '#818cf8';
    ctx.font = 'bold 68px monospace';
    ctx.fillText(`${info.pct}`, 645, 245);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`Benar: ${info.correct} dari ${info.total} Soal`, 645, 290);

    ctx.fillStyle = info.pct >= 75 ? '#10b981' : '#f59e0b';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(info.pct >= 75 ? '✓ TUNTAS' : '• PERLU REVIEW', 645, 325);

    // Footer Waktu
    ctx.textAlign = 'left';
    const waktu = new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' });
    ctx.fillStyle = '#64748b';
    ctx.font = '12px monospace';
    ctx.fillText(`Dicetak pada: ${waktu}`, 48, 412);

    const link = document.createElement('a');
    const cleanSub = info.subTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const cleanNama = info.nama.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    link.download = `kartu-skor-${cleanNama}-${cleanSub}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Otomatis memuat Google Analytics 4 (G-Z11XQXB5L7) di seluruh halaman web jika belum ada di <head>
function initGoogleAnalytics() {
    const GA_ID = 'G-Z11XQXB5L7';
    if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
}

initGoogleAnalytics();

document.addEventListener('DOMContentLoaded', () => {
    initSEO();
    loadPartial('/partials/header.html', 'header-placeholder', () => {
        bangunModulLainNav();
        aturTombolBeranda();
        initGlobalSearch();
    });
    loadPartial('/partials/footer.html', 'footer-placeholder');
    loadPartial('/partials/spu-modal.html', 'spu-placeholder', () => {
        if (typeof initSpu === 'function') initSpu();
    });
    bangunSidebar();
    bangunMenuBeranda();
    bangunDaftarIsi();
    initProgresDanKuis();
    initBackToTop();

    // Re-render KaTeX untuk elemen yang dibuat dinamis (TOC, Sidebar, dll) jika KaTeX aktif
    if (typeof renderMathInElement === 'function') {
        try {
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        } catch (e) {}
    }
});


