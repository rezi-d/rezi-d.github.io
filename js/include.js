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
    const kelasId = document.body.dataset.kelas;
    const babSlug = document.body.dataset.bab;
    const halamanIni = location.pathname.split('/').pop();
    if (!kelasId || !babSlug || !halamanIni) return null;
    return `${kelasId}/${babSlug}/${halamanIni}`;
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
    const progres = getProgres();
    const totalSub = dataBab.subbab.length;
    let doneCount = 0;

    const daftarSubbab = dataBab.subbab.map((item, idx) => {
        const aktif = item.file === halamanIni;
        const subKey = `${kelasId}/${babSlug}/${item.file}`;
        const isDone = !!progres.completed[subKey];
        if (isDone) doneCount++;
        const scoreInfo = progres.scores[subKey];

        const kelasCSS = aktif
            ? 'bg-teal-50 text-teal-700 font-semibold border border-teal-200/80'
            : (isDone ? 'text-slate-700 hover:bg-emerald-50/50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900');

        const iconStatus = isDone
            ? `<span class="shrink-0 text-xs" title="Selesai dipelajari">✅</span>`
            : `<span class="shrink-0 text-xs text-slate-400 font-mono">${idx + 1}.</span>`;

        const scorePill = scoreInfo
            ? `<span class="ml-auto shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${scoreInfo.pct >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${scoreInfo.pct}</span>`
            : '';

        return `
            <a href="${item.file}" class="flex items-center gap-2 px-3 py-2 rounded-lg transition ${kelasCSS}">
                ${iconStatus}
                <span class="leading-snug">${item.title}</span>
                ${scorePill}
            </a>`;
    }).join('');

    const pctBab = totalSub > 0 ? Math.round((doneCount / totalSub) * 100) : 0;

    container.innerHTML = `
        <aside class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit sticky top-24 w-full">
            <div class="flex items-center justify-between mb-1">
                <p class="text-xs font-semibold text-teal-600 uppercase tracking-wide">${dataKelas.label}</p>
                <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${pctBab === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">${doneCount}/${totalSub} Selesai</span>
            </div>
            <h2 class="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                📖 ${dataBab.title}
            </h2>
            <!-- Progress Bar Bab ala Zenius -->
            <div class="mb-4 pb-3 border-b border-slate-100">
                <div class="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span>Progres Bab</span>
                    <span class="font-bold text-teal-700">${pctBab}%</span>
                </div>
                <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-teal-500 rounded-full transition-all duration-500" style="width: ${pctBab}%"></div>
                </div>
            </div>
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
                <a href="${url}" class="block bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition group">
                    <div class="flex items-start justify-between mb-3">
                        <span class="text-3xl block">🧪</span>
                        <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${pctKelas === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">
                            ${doneSubKelas}/${totalSubKelas} Sub-bab
                        </span>
                    </div>
                    <h2 class="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-1">${dataKelas.label}</h2>
                    <p class="text-xs text-slate-500 leading-relaxed mb-3">${dataKelas.bab.length} Bab &bull; ${totalSubKelas} Sub-materi interaktif</p>
                    <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                        <div class="h-full bg-teal-500 rounded-full transition-all duration-500" style="width: ${pctKelas}%"></div>
                    </div>
                    <p class="text-xs text-teal-600 font-semibold">${doneSubKelas > 0 ? `Lanjutkan belajar (${pctKelas}%) &rarr;` : 'Mulai belajar &rarr;'}</p>
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
    btn.className = 'fixed bottom-14 right-4 z-40 w-8 h-8 rounded-full bg-slate-800/90 hover:bg-teal-600 text-white text-xs font-bold shadow-md border border-slate-700 active:scale-95 transition-all duration-300 flex items-center justify-center opacity-0 pointer-events-none translate-y-3 cursor-pointer';
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
});


