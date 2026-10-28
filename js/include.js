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
                studentClass: parsed.studentClass || '',
                lastVisited: parsed.lastVisited || null
            };
        }
    } catch (e) {}
    return { completed: {}, scores: {}, studentName: '', studentClass: '', lastVisited: null };
}

function getStudentLevel(progres) {
    const count = Object.keys((progres && progres.completed) || {}).length;
    if (count >= 30) return { icon: '🏆', title: 'Master Olimpiade', count };
    if (count >= 15) return { icon: '⚛️', title: 'Riset Spesialis', count };
    if (count >= 5)  return { icon: '🔬', title: 'Analis Kimia', count };
    if (count >= 1)  return { icon: '🧪', title: 'Praktikan Muda', count };
    return { icon: '🌱', title: 'Penjelajah Baru', count: 0 };
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

    const isCompact = totalSub > 6;
    const itemPadding = isCompact ? 'px-2.5 py-1.5 text-[13px] leading-snug' : 'px-3 py-2 text-sm';

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

    const levelInfo = getStudentLevel(progres);
    container.innerHTML = `
        <aside class="bg-white p-5 rounded-2xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] sticky top-16 w-full flex flex-col lg:max-h-[calc(100vh-5rem)]">
            <div class="shrink-0">
                <div class="flex items-center justify-between mb-1">
                    <p class="text-xs font-semibold text-teal-600 uppercase tracking-wider">${dataKelas.label}</p>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${pctBab === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">${doneCount}/${totalSub} Selesai</span>
                </div>
                <h2 class="text-sm sm:text-base font-bold text-slate-900 mb-2.5 flex items-center gap-1.5 leading-snug">
                    <span>📖</span> <span>${dataBab.title}</span>
                </h2>
                <!-- Progress Bar Bab + Level -->
                <div class="mb-3 pb-2.5 border-b border-black/[0.05]">
                    <div class="flex justify-between text-[11px] text-slate-500 mb-1">
                        <span>Progres Bab</span>
                        <span class="font-bold text-teal-700">${pctBab}%</span>
                    </div>
                    <div class="w-full h-1.5 bg-black/[0.04] rounded-full overflow-hidden mb-2">
                        <div class="h-full bg-teal-500 rounded-full transition-all duration-500" style="width: ${pctBab}%"></div>
                    </div>
                    <div class="flex items-center justify-between text-[11px] text-slate-500">
                        <span class="font-medium text-slate-700">${levelInfo.icon} ${levelInfo.title}</span>
                        <span>🔥 ${levelInfo.count} materi tuntas</span>
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
        if (h1El && activeIdx >= 0 && h1El.firstChild && h1El.firstChild.nodeType === 3 && /^\s*\d+\.\s+/.test(h1El.firstChild.textContent)) {
            h1El.firstChild.textContent = h1El.firstChild.textContent.replace(/^\s*\d+\./, `${activeIdx + 1}.`);
        }
    }
}

// Menyisipkan link modul lain (Simulasi TKA, Persiapan ANBK, dst) ke header,
// dibaca otomatis dari array `modulLain` di js/curriculum.js
function bangunModulLainNav() {
    const slot = document.getElementById('modul-lain-nav');
    if (!slot || typeof modulLain === 'undefined') return;

    slot.innerHTML = modulLain.filter(m => m.slug !== 'prediksi-ptn').map(m => `
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
    const levelInfo = getStudentLevel(progres);
    let html = '';

    // 1. Baris Kapsul Kontekstual: "Lanjutkan Belajar Terakhir" (Hanya muncul jika siswa sudah pernah membuka sub-materi)
    if (progres.lastVisited && progres.lastVisited.url && progres.lastVisited.subTitle) {
        const lv = progres.lastVisited;
        html += `
            <div class="col-span-full bg-[#f5f5f7] border border-black/[0.06] rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <span class="w-8 h-8 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-sm shrink-0 shadow-2xs">📌</span>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                            <span>Terakhir dipelajari (${lv.kelasLabel || ''} &bull; ${lv.babTitle || ''})</span>
                            <span class="hidden sm:inline">&bull;</span>
                            <span class="text-teal-700 font-semibold">${levelInfo.icon} ${levelInfo.title} (${levelInfo.count} selesai)</span>
                        </div>
                        <p class="text-xs sm:text-sm font-bold text-slate-900 truncate">${lv.subTitle}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <a href="${lv.url}" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition shadow-2xs">
                        <span>Lanjutkan</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>`;
    }

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
                <a href="${url}" class="block bg-white p-7 sm:p-8 rounded-[28px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
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
            <a href="${m.path}" class="block bg-white p-7 sm:p-8 rounded-[28px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                <div>
                    <div class="flex items-start justify-between mb-4">
                        <span class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100/80 border border-black/[0.04] text-2xl select-none group-hover:scale-105 transition-transform">${m.icon}</span>
                        <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full ${m.status === 'segera' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}">
                            ${m.status === 'segera' ? 'Segera' : 'Tersedia'}
                        </span>
                    </div>
                    <h2 class="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors mb-1.5">${m.title}</h2>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">${m.desc || 'Bank latihan soal interaktif dan simulasi ujian persiapan asesmen.'}</p>
                </div>
                <div>
                    <p class="text-xs text-[#0071e3] font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        <span>${m.status === 'segera' ? 'Segera hadir' : (m.action || 'Buka modul')}</span>
                        <span class="text-sm leading-none">&rsaquo;</span>
                    </p>
                </div>
            </a>`;
    });

    // 2. Banner Elegan "Tantangan Kilat Hari Ini" (Murni 1 Soal Harian)
    const dailyState = (function() {
        try {
            const now = new Date();
            const y = now.getFullYear();
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const d = String(now.getDate()).padStart(2, '0');
            const today = `${y}-${m}-${d}`;
            const raw = localStorage.getItem('kimia_daily_challenge_v2');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed.date === today) return parsed;
            }
        } catch (e) {}
        return null;
    })();

    const isAlreadyDone = dailyState && dailyState.answered;
    const bannerBadge = isAlreadyDone 
        ? `✅ Selesai • 🔥 Streak ${dailyState.streak} Hari`
        : `⚡ 1 Soal Harian`;
    const bannerBadgeClass = isAlreadyDone
        ? `bg-emerald-100 text-emerald-800 border border-emerald-300`
        : `bg-white text-amber-800 border border-amber-200`;
    const bannerSubtitle = isAlreadyDone
        ? `Tantangan hari ini sudah tuntas. Kembali lagi besok untuk soal baru!`
        : `Uji refleks konsep kimiamu dengan 1 soal cepat standar UTBK SNPMB &amp; Raymond Chang (30 detik).`;
    const bannerBtnLabel = isAlreadyDone
        ? `Lihat Pembahasan`
        : `Mainkan Tantangan`;

    html += `
        <div class="col-span-full mt-2 bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50/30 border border-amber-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs hover:shadow-md transition-all">
            <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-2xl shadow-sm shrink-0">
                    ⚡
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold uppercase tracking-wider text-amber-700">Tantangan Harian</span>
                        <span id="kilat-banner-stat" class="px-2 py-0.5 rounded-full text-[10px] font-bold ${bannerBadgeClass}">
                            ${bannerBadge}
                        </span>
                    </div>
                    <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                        Tantangan Kilat Kimia Hari Ini
                    </h3>
                    <p id="kilat-banner-subtitle" class="text-xs text-slate-600 mt-0.5">
                        ${bannerSubtitle}
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button type="button" onclick="bukaTantanganKilatModal()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition cursor-pointer">
                    <span id="kilat-banner-btn-text">${bannerBtnLabel}</span>
                    <span class="text-base leading-none">&rsaquo;</span>
                </button>
            </div>
        </div>
    `;

    slot.innerHTML = html;
    initTantanganKilat();
}

// =================================================================
// TANTANGAN KILAT HARI INI (Smart Non-Repeating Random Question)
// =================================================================
const BANK_TANTANGAN_KILAT = [
    {
        id: 'q1',
        tag: 'Kelas X • Struktur Atom',
        q: 'Dalam eksperimen lempeng emas tipis (Gold Foil), sebagian kecil partikel alfa memantul balik dengan sudut besar. Apa kesimpulan utama Rutherford dari fenomena ini?',
        opts: [
            'Atom merupakan bola pejal bermuatan positif merata',
            'Massa dan muatan positif atom terpusat pada inti yang sangat kecil dan padat',
            'Elektron bergerak mengelilingi inti pada lintasan stasioner',
            'Neutron tidak memiliki muatan listrik'
        ],
        ans: 1,
        exp: 'Pantulan partikel alfa bermuatan positif membuktikan adanya inti atom (nukleus) bermuatan positif yang sangat rapat di pusat ruang hampa atom.',
        link: '/kelas-10/struktur-atom/eksperimen-gold-foil-rutherford.html',
        linkLabel: 'Pelajari Eksperimen Rutherford'
    },
    {
        id: 'q2',
        tag: 'Kelas X • Struktur Atom',
        q: 'Ion ²⁷₁₃Al³⁺ memiliki jumlah proton, elektron, dan neutron berturut-turut sebanyak...',
        opts: [
            '13 proton, 13 elektron, 14 neutron',
            '13 proton, 10 elektron, 14 neutron',
            '13 proton, 16 elektron, 14 neutron',
            '14 proton, 10 elektron, 13 neutron'
        ],
        ans: 1,
        exp: 'Nomor atom Z = 13 (13 proton). Muatan +3 berarti melepas 3 elektron (13 − 3 = 10 elektron). Neutron = 27 − 13 = 14.',
        link: '/kelas-10/struktur-atom/nomor-atom-nomor-massa-dan-muatan-netto.html',
        linkLabel: 'Pelajari Nomor Atom & Ion'
    },
    {
        id: 'q3',
        tag: 'Kelas X • Reaksi Redoks',
        q: 'Berapakah bilangan oksidasi atom Mangan (Mn) di dalam ion permanganat (MnO₄⁻)?',
        opts: ['+4', '+5', '+6', '+7'],
        ans: 3,
        exp: 'Biloks O = −2. Maka Mn + 4(−2) = −1, sehingga biloks Mn = +7.',
        link: '/kelas-10/reaksi-redoks/aturan-dan-penentuan-bilangan-oksidasi.html',
        linkLabel: 'Pelajari Aturan Bilangan Oksidasi'
    },
    {
        id: 'q4',
        tag: 'Kelas X • Hukum Dasar Kimia',
        q: 'Karbon dan oksigen dapat membentuk dua senyawa berbeda: CO (perbandingan massa O = 1) dan CO₂ (perbandingan massa O = 2) untuk massa C yang tetap. Fakta ini membuktikan...',
        opts: [
            'Hukum Kekekalan Massa (Lavoisier)',
            'Hukum Perbandingan Tetap (Proust)',
            'Hukum Perbandingan Berganda (Dalton)',
            'Hukum Perbandingan Volume (Gay-Lussac)'
        ],
        ans: 2,
        exp: 'Dua unsur yang dapat membentuk lebih dari satu senyawa memiliki rasio massa unsur kedua berupa bilangan bulat sederhana (1 : 2) — inilah Hukum Dalton.',
        link: '/kelas-10/hukum-dasar-kimia/hukum-perbandingan-berganda-dalton.html',
        linkLabel: 'Pelajari Hukum Dalton'
    },
    {
        id: 'q5',
        tag: 'Kelas XI • Ikatan Kimia',
        q: 'Molekul NH₃ memiliki 3 pasangan elektron ikatan (PEI) dan 1 pasangan elektron bebas (PEB) pada atom pusat N (AX₃E). Bentuk molekul NH₃ adalah...',
        opts: [
            'Segitiga datar (Trigonal planar)',
            'Tetrahedral simetris',
            'Piramida trigonal (Trigonal pyramidal)',
            'Bentuk T (T-shaped)'
        ],
        ans: 2,
        exp: 'Tipe AX₃E memiliki tolakan PEB yang menekan ketiga ikatan N–H membentuk geometri Piramida Trigonal dengan sudut ~107°.',
        link: '/kelas-11/ikatan-kimia/bentuk-molekul-vsepr.html',
        linkLabel: 'Buka Simulator VSEPR 3D'
    },
    {
        id: 'q6',
        tag: 'Kelas XI • Stoikiometri',
        q: 'Pada reaksi 2H₂ + O₂ → 2H₂O, jika direaksikan 4 mol gas H₂ dengan 3 mol gas O₂, manakah yang bertindak sebagai pereaksi pembatas?',
        opts: [
            'Gas O₂ (bersisa 0 mol)',
            'Gas H₂ (habis bereaksi lebih dulu)',
            'Keduanya habis tepat bereaksi',
            'Uap air H₂O'
        ],
        ans: 1,
        exp: 'Bagi mol dengan koefisien: H₂ = 4/2 = 2, sedangkan O₂ = 3/1 = 3. Nilai terkecil (H₂) habis lebih dulu sebagai pereaksi pembatas.',
        link: '/kelas-11/stoikiometri/pereaksi-pembatas.html',
        linkLabel: 'Pelajari Pereaksi Pembatas'
    },
    {
        id: 'q7',
        tag: 'Kelas XI • Termokimia',
        q: 'Ketika kristal urea dilarutkan ke dalam air di gelas kimia, dinding gelas terasa dingin saat disentuh. Pernyataan yang tepat adalah...',
        opts: [
            'Reaksi eksoterm, kalor berpindah dari sistem ke lingkungan (ΔH < 0)',
            'Reaksi endoterm, sistem menyerap kalor dari lingkungan (ΔH > 0)',
            'Reaksi eksoterm, entalpi produk lebih besar dari reaktan',
            'Tidak terjadi perpindahan kalor (ΔH = 0)'
        ],
        ans: 1,
        exp: 'Gelas terasa dingin karena sistem menyerap kalor dari lingkungan sekitarnya (reaksi endoterm, bertanda ΔH positif).',
        link: '/kelas-11/termokimia/konsep-dasar-termokimia.html',
        linkLabel: 'Pelajari Konsep Termokimia'
    },
    {
        id: 'q8',
        tag: 'Kelas XI • Kesetimbangan Kimia',
        q: 'Untuk kesetimbangan eksoterm: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = −92 kJ), langkah apa yang memaksimalkan pembentukan amonia (NH₃)?',
        opts: [
            'Menaikkan suhu dan memperbesar volume',
            'Menurunkan suhu dan memperbesar tekanan (memperkecil volume)',
            'Menambahkan gas inert pada volume tetap',
            'Mengurangi konsentrasi gas N₂'
        ],
        ans: 1,
        exp: 'Menurut Asas Le Châtelier, penurunan suhu menggeser kesetimbangan ke arah eksoterm (kanan), dan peningkatan tekanan menggeser ke koefisien gas yang lebih kecil (4 mol → 2 mol).',
        link: '/kelas-11/kesetimbangan-kimia/pergeseran-kesetimbangan-le-chatelier.html',
        linkLabel: 'Pelajari Asas Le Châtelier'
    },
    {
        id: 'q9',
        tag: 'Kelas XI • Asam & Basa',
        q: 'Berapakah nilai pH dari larutan asam kuat H₂SO₄ 0,005 M (diasumsikan terionisasi sempurna 2 tahap pada konsentrasi encer)?',
        opts: ['1', '2', '3 − log 5', '2 − log 5'],
        ans: 1,
        exp: '[H⁺] = a × M = 2 × 0,005 M = 0,01 M = 10⁻² M. Maka pH = −log(10⁻²) = 2.',
        link: '/kelas-11/asam-basa/derajat-keasaman-ph-poh.html',
        linkLabel: 'Pelajari Perhitungan pH & pOH'
    },
    {
        id: 'q10',
        tag: 'Kelas XII • Sel Volta',
        q: 'Diketahui E° Zn²⁺/Zn = −0,76 V dan E° Cu²⁺/Cu = +0,34 V. Berapakah potensial sel standar (E°sel) dari sel Galvani Zn | Zn²⁺ || Cu²⁺ | Cu?',
        opts: ['−1,10 V', '+0,42 V', '+1,10 V', '−0,42 V'],
        ans: 2,
        exp: 'E°sel = E°katode (Cu) − E°anode (Zn) = (+0,34) − (−0,76) = +1,10 V.',
        link: '/kelas-12/sel-volta/anode-katode-potensial-sel.html',
        linkLabel: 'Pelajari Potensial Sel Volta'
    },
    {
        id: 'q11',
        tag: 'Simulasi SNBT • Penalaran Kuantitatif',
        q: 'Suatu larutan garam 200 mL memiliki kadar 15%. Berapa mL air murni yang harus ditambahkan agar kadarnya turun menjadi 10%?',
        opts: ['50 mL', '80 mL', '100 mL', '150 mL'],
        ans: 2,
        exp: 'Jumlah zat terlarut tetap: 200 × 15% = (200 + V) × 10% → 3000 = 2000 + 10V → V = 100 mL air.',
        link: '/snbt/index.html',
        linkLabel: 'Coba Simulasi SNBT Gratis'
    },
    {
        id: 'q12',
        tag: 'Simulasi SNBT • Penalaran Umum',
        q: 'Semua logam alkali sangat reaktif terhadap air. Natrium adalah logam alkali. Kesimpulan logis yang pasti benar adalah...',
        opts: [
            'Semua zat yang reaktif terhadap air adalah natrium',
            'Natrium sangat reaktif terhadap air',
            'Hanya natrium yang bereaksi dengan air',
            'Logam selain alkali tidak bereaksi dengan air'
        ],
        ans: 1,
        exp: 'Silogisme Modus Ponens: Karena semua anggota himpunan logam alkali reaktif terhadap air dan Natrium adalah anggotanya, maka Natrium pasti reaktif terhadap air.',
        link: '/snbt/index.html',
        linkLabel: 'Latihan Penalaran Umum SNBT'
    }
];

// =================================================================
// TANTANGAN KILAT HARI INI (MURNI 1 SOAL HARIAN / DAILY CHALLENGE)
// =================================================================
const STORAGE_DAILY_KEY = 'kimia_daily_challenge_v2';
const SESSION_KILAT_KEY = 'kimia_tantangan_kilat_session_shown';

function getTodayDateString() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function getDailyState() {
    const today = getTodayDateString();
    let state = null;
    try {
        const raw = localStorage.getItem(STORAGE_DAILY_KEY);
        if (raw) state = JSON.parse(raw);
    } catch (e) {}

    if (!state || state.date !== today) {
        let currentStreak = 0;
        if (state && state.answered) {
            const prev = new Date(state.date);
            const curr = new Date(today);
            const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                currentStreak = (state.streak || 1);
            } else if (diffDays === 0) {
                currentStreak = (state.streak || 1);
            } else {
                currentStreak = 0;
            }
        }

        const seen = (state && Array.isArray(state.seen)) ? state.seen : [];
        let pool = BANK_TANTANGAN_KILAT.filter(q => !seen.includes(q.id));
        if (pool.length === 0) {
            pool = BANK_TANTANGAN_KILAT;
        }
        const chosen = pool[Math.floor(Math.random() * pool.length)] || BANK_TANTANGAN_KILAT[0];

        state = {
            date: today,
            questionId: chosen.id,
            answered: false,
            chosenIdx: null,
            isCorrect: null,
            streak: currentStreak,
            seen: seen
        };
        saveDailyState(state);
    }
    return state;
}

function saveDailyState(st) {
    try {
        localStorage.setItem(STORAGE_DAILY_KEY, JSON.stringify(st));
    } catch (e) {}
}

function updateBerandaBanner(st) {
    const badge = document.getElementById('kilat-banner-stat');
    const subtitle = document.getElementById('kilat-banner-subtitle');
    const btnText = document.getElementById('kilat-banner-btn-text');

    if (st.answered) {
        if (badge) {
            badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300';
            badge.textContent = `✅ Selesai • 🔥 Streak ${st.streak} Hari`;
        }
        if (subtitle) {
            subtitle.textContent = `Tantangan hari ini sudah tuntas. Kembali lagi besok untuk soal baru!`;
        }
        if (btnText) {
            btnText.textContent = `Lihat Pembahasan`;
        }
    } else {
        if (badge) {
            badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-amber-800 border border-amber-200';
            badge.textContent = `⚡ 1 Soal Harian`;
        }
        if (subtitle) {
            subtitle.textContent = `Uji refleks konsep kimiamu dengan 1 soal cepat standar UTBK SNPMB & Raymond Chang (30 detik).`;
        }
        if (btnText) {
            btnText.textContent = `Mainkan Tantangan`;
        }
    }
}

function renderTantanganModal() {
    const body = document.getElementById('tantangan-kilat-body');
    if (!body) return;

    const st = getDailyState();
    const item = BANK_TANTANGAN_KILAT.find(q => q.id === st.questionId) || BANK_TANTANGAN_KILAT[0];
    const letters = ['A', 'B', 'C', 'D'];

    if (!st.answered) {
        // Mode 1: Soal Harian Belum Dijawab (Hanya 1 Soal Cepat)
        body.innerHTML = `
            <div class="flex items-center justify-between gap-2 mb-2 pr-8">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/80 text-[11px] font-extrabold shadow-2xs">
                    <span>⚡</span> <span>Tantangan Harian (1 Soal)</span>
                </span>
                <span class="text-xs font-semibold text-slate-500 truncate max-w-[200px] text-right">${item.tag}</span>
            </div>

            <div class="flex items-center justify-between text-xs text-slate-500 mb-4 pb-2.5 border-b border-slate-100">
                <span class="text-slate-600 font-medium">Uji refleks kimiamu hari ini dalam 30 detik:</span>
                ${st.streak > 0 ? `<span class="font-bold text-amber-600 flex items-center gap-1"><span>🔥</span> <span>Streak ${st.streak} Hari</span></span>` : ''}
            </div>

            <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-5">
                ${item.q}
            </h3>

            <div class="space-y-2.5" id="kilat-opts">
                ${item.opts.map((opt, idx) => `
                    <button type="button" data-idx="${idx}" class="kilat-opt-btn w-full text-left px-4 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-800 transition-all flex items-center gap-3 cursor-pointer shadow-2xs">
                        <span class="w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">${letters[idx]}</span>
                        <span class="leading-relaxed">${opt}</span>
                    </button>
                `).join('')}
            </div>

            <div id="kilat-feedback" class="hidden mt-5 pt-4 border-t border-slate-100 space-y-3.5"></div>

            <div id="kilat-footer-unanswered" class="mt-5 pt-3 flex items-center justify-between text-xs text-slate-400">
                <span>Hanya 1 soal per hari</span>
                <button type="button" onclick="closeTantanganKilatModal()" class="text-slate-500 hover:text-slate-900 font-semibold underline underline-offset-2 transition cursor-pointer">
                    Nanti Saja
                </button>
            </div>
        `;

        const buttons = body.querySelectorAll('.kilat-opt-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const chosenIdx = parseInt(btn.getAttribute('data-idx'), 10);
                const isCorrect = chosenIdx === item.ans;

                buttons.forEach((b, i) => {
                    b.disabled = true;
                    b.classList.remove('hover:bg-slate-100/80');
                    if (i === item.ans) {
                        b.className = 'kilat-opt-btn w-full text-left px-4 py-3 rounded-2xl bg-emerald-50 border-2 border-emerald-500 text-xs sm:text-sm font-bold text-emerald-950 transition-all flex items-center gap-3 shadow-xs';
                    } else if (i === chosenIdx && !isCorrect) {
                        b.className = 'kilat-opt-btn w-full text-left px-4 py-3 rounded-2xl bg-rose-50 border-2 border-rose-400 text-xs sm:text-sm font-semibold text-rose-950 transition-all flex items-center gap-3 shadow-xs';
                    } else {
                        b.classList.add('opacity-45');
                    }
                });

                // Update state: selesai hari ini
                st.answered = true;
                st.chosenIdx = chosenIdx;
                st.isCorrect = isCorrect;
                st.streak = (st.streak || 0) + 1;
                if (!st.seen.includes(item.id)) st.seen.push(item.id);
                saveDailyState(st);

                // Update banner di Beranda
                updateBerandaBanner(st);

                const unans = body.querySelector('#kilat-footer-unanswered');
                if (unans) unans.classList.add('hidden');

                const fb = body.querySelector('#kilat-feedback');
                fb.classList.remove('hidden');
                fb.innerHTML = `
                    <div class="p-4 rounded-2xl ${isCorrect ? 'bg-emerald-50/90 border border-emerald-200/90 text-emerald-950' : 'bg-rose-50/90 border border-rose-200/90 text-rose-950'} text-xs sm:text-sm leading-relaxed space-y-1.5">
                        <div class="font-bold flex items-center justify-between">
                            <span class="${isCorrect ? 'text-emerald-800' : 'text-rose-800'} flex items-center gap-1.5">
                                <span>${isCorrect ? '🎉 Jawaban Tepat Sekali!' : '💡 Kurang Tepat, Tapi Hebat Sudah Berani Mencoba!'}</span>
                            </span>
                            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-amber-700 font-extrabold text-xs shadow-2xs">
                                <span>🔥</span> <span>Streak ${st.streak} Hari</span>
                            </span>
                        </div>
                        <p class="text-slate-800">${item.exp}</p>
                    </div>

                    <div class="text-center py-1">
                        <p class="text-xs font-semibold text-slate-500">
                            ✨ <strong>Tantangan hari ini selesai!</strong> Kembali lagi besok untuk soal baru.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                        <a href="${item.link}" class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition">
                            <span>📖 ${item.linkLabel}</span>
                            <span>&rarr;</span>
                        </a>
                        <button type="button" onclick="closeTantanganKilatModal()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs sm:text-sm font-bold transition shadow-md cursor-pointer text-center">
                            Selesai &amp; Mulai Belajar &rarr;
                        </button>
                    </div>
                `;
            });
        });

    } else {
        // Mode 2: Soal Hari Ini Sudah Diselesaikan (Tampilan Review)
        body.innerHTML = `
            <div class="flex items-center justify-between gap-2 mb-2 pr-8">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300/80 text-[11px] font-extrabold shadow-2xs">
                    <span>✅</span> <span>Tantangan Hari Ini Sudah Selesai</span>
                </span>
                <span class="text-xs font-semibold text-slate-500 truncate max-w-[200px] text-right">${item.tag}</span>
            </div>

            <div class="flex items-center justify-between text-xs text-slate-500 mb-4 pb-2.5 border-b border-slate-100">
                <span class="text-slate-600 font-medium">Rekap pengerjaan Anda hari ini:</span>
                <span class="font-bold text-amber-600 flex items-center gap-1"><span>🔥</span> <span>Streak ${st.streak} Hari</span></span>
            </div>

            <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-5">
                ${item.q}
            </h3>

            <div class="space-y-2.5" id="kilat-opts">
                ${item.opts.map((opt, idx) => {
                    let optClass = 'kilat-opt-btn w-full text-left px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center gap-3 ';
                    if (idx === item.ans) {
                        optClass += 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold shadow-xs';
                    } else if (idx === st.chosenIdx && !st.isCorrect) {
                        optClass += 'bg-rose-50 border-2 border-rose-400 text-rose-950 font-semibold shadow-xs';
                    } else {
                        optClass += 'bg-slate-50 border border-slate-200/90 text-slate-800 opacity-45';
                    }
                    return `
                        <div class="${optClass}">
                            <span class="w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">${letters[idx]}</span>
                            <span class="leading-relaxed">${opt}</span>
                        </div>
                    `;
                }).join('')}
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100 space-y-3.5">
                <div class="p-4 rounded-2xl ${st.isCorrect ? 'bg-emerald-50/90 border border-emerald-200/90 text-emerald-950' : 'bg-rose-50/90 border border-rose-200/90 text-rose-950'} text-xs sm:text-sm leading-relaxed space-y-1">
                    <div class="font-bold flex items-center gap-1.5 ${st.isCorrect ? 'text-emerald-800' : 'text-rose-800'}">
                        <span>${st.isCorrect ? '✅ Jawaban Anda Tepat!' : '💡 Pembahasan Singkat:'}</span>
                    </div>
                    <p class="text-slate-800">${item.exp}</p>
                </div>

                <div class="text-center py-1">
                    <p class="text-xs text-slate-500">
                        Soal baru akan tersedia kembali besok. Semangat belajarnya! 🔥
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                    <a href="${item.link}" class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition">
                        <span>📖 ${item.linkLabel}</span>
                        <span>&rarr;</span>
                    </a>
                    <div class="flex items-center gap-2">
                        <button type="button" id="btn-reset-kilat-test" class="text-xs text-slate-400 hover:text-slate-600 underline px-2 py-1 transition cursor-pointer" title="Hanya untuk pengujian">
                            ↻ Reset Soal Uji
                        </button>
                        <button type="button" onclick="closeTantanganKilatModal()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer text-center">
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        `;

        const resetBtn = body.querySelector('#btn-reset-kilat-test');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                st.answered = false;
                st.chosenIdx = null;
                st.isCorrect = null;
                const available = BANK_TANTANGAN_KILAT.filter(q => q.id !== item.id);
                st.questionId = (available[Math.floor(Math.random() * available.length)] || BANK_TANTANGAN_KILAT[0]).id;
                saveDailyState(st);
                updateBerandaBanner(st);
                renderTantanganModal();
            });
        }
    }

    if (typeof renderMathInElement === 'function') {
        try {
            renderMathInElement(body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        } catch (e) {}
    }
}

function injectTantanganKilatModal() {
    if (document.getElementById('tantangan-kilat-modal')) return;

    const modalHtml = `
        <div id="tantangan-kilat-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden overflow-y-auto" onclick="if(event.target===this)closeTantanganKilatModal()">
            <div class="min-h-full flex items-start justify-center p-4 sm:p-6">
                <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 transform transition-all my-auto relative animate-in fade-in zoom-in-95 duration-200">
                    <button type="button" onclick="closeTantanganKilatModal()" title="Tutup (Esc)" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 text-sm font-bold flex items-center justify-center transition cursor-pointer">
                        ✕
                    </button>
                    <div id="tantangan-kilat-body"></div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const m = document.getElementById('tantangan-kilat-modal');
            if (m && !m.classList.contains('hidden')) {
                closeTantanganKilatModal();
            }
        }
    });
}

window.bukaTantanganKilatModal = function() {
    injectTantanganKilatModal();
    const modal = document.getElementById('tantangan-kilat-modal');
    if (!modal) return;

    renderTantanganModal();
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
};

window.closeTantanganKilatModal = function() {
    const modal = document.getElementById('tantangan-kilat-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    document.body.classList.remove('overflow-hidden');
};

function initTantanganKilat() {
    injectTantanganKilatModal();

    const diBeranda = !!document.getElementById('menu-beranda');
    if (!diBeranda) return;

    const dailySt = getDailyState();
    // Hanya auto-popup jika HARI INI BELUM DIJAWAB dan BELUM PERNAH POPUP di sesi tab ini
    if (!dailySt.answered && !sessionStorage.getItem(SESSION_KILAT_KEY)) {
        sessionStorage.setItem(SESSION_KILAT_KEY, 'true');
        setTimeout(() => {
            bukaTantanganKilatModal();
        }, 700);
    }
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

    // Simpan otomatis sebagai "Terakhir Dipelajari" (lastVisited) agar siswa mudah melanjutkan
    try {
        const pInit = getProgres();
        pInit.lastVisited = {
            url: location.pathname,
            subTitle,
            babTitle,
            kelasLabel,
            kelasId,
            timestamp: Date.now()
        };
        saveProgres(pInit);
    } catch (e) {}

    // Cari sub-bab berikutnya untuk tombol lanjut cepat
    const curSubIdx = dataBab && Array.isArray(dataBab.subbab)
        ? dataBab.subbab.findIndex(s => s.file === halamanIni)
        : -1;
    const nextSubItem = (curSubIdx >= 0 && curSubIdx < dataBab.subbab.length - 1)
        ? dataBab.subbab[curSubIdx + 1]
        : null;

    // 1. Sisipkan Tombol "Tandai Selesai Dipelajari" + Rekomendasi Pintar dalam 1 kotak bersih di atas navigasi bawah
    const navBawah = Array.from(article.children).find(el => el.tagName === 'DIV' && el.className.includes('justify-between') && el.className.includes('border-t'));
    const doneBar = document.createElement('div');
    doneBar.className = 'mt-8 p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-3';

    function renderDoneBar() {
        const progres = getProgres();
        const isDone = !!progres.completed[subKey];
        const score = progres.scores[subKey];
        const levelInfo = getStudentLevel(progres);
        doneBar.innerHTML = `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-center gap-2.5 text-xs sm:text-sm">
                    <span class="text-xl">${isDone ? '✅' : '📖'}</span>
                    <div>
                        <p class="font-bold ${isDone ? 'text-emerald-800' : 'text-slate-800'}">
                            ${isDone ? 'Sub-Bab Ini Sudah Selesai Dipelajari!' : 'Sudah selesai membaca materi di halaman ini?'}
                        </p>
                        <p class="text-[11px] text-slate-500">
                            ${score ? `Skor Latihan Mandiri: <b>${score.correct}/${score.total} Benar (Nilai ${score.pct})</b> &bull; ` : ''}${levelInfo.icon} ${levelInfo.title} (${levelInfo.count} materi tuntas)
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" id="btn-toggle-selesai" class="px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${isDone ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs' : 'bg-white hover:bg-teal-50 text-teal-700 border border-teal-300'}">
                        ${isDone ? '✓ Selesai Dipelajari' : '☐ Tandai Selesai'}
                    </button>
                    ${nextSubItem ? `
                        <a href="${nextSubItem.file}" class="px-3.5 py-2 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-bold transition shadow-2xs">
                            Lanjut Berikutnya &rarr;
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span class="text-slate-500 font-medium">🎯 Ingin uji kesiapan ujian &amp; peluang PTN impianmu?</span>
                <div class="flex flex-wrap items-center gap-3 font-semibold">
                    <a href="/snbt/index.html" class="text-teal-700 hover:text-teal-900 hover:underline">📚 Coba Simulasi SNBT Gratis &rarr;</a>
                    <a href="/tka/prediksi-ptn.html" class="text-[#0071e3] hover:underline">🎯 Kalkulator Prediksi PTN &rarr;</a>
                </div>
            </div>
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
    const hp = document.getElementById('header-placeholder');
    if (hp) {
        hp.classList.add('sticky', 'top-0', 'z-50');
        hp.style.position = 'sticky';
        hp.style.top = '0';
        hp.style.zIndex = '50';
    }
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
    
    // Proteksi global: Pastikan .katex-mathml tidak pernah tampil ganda di browser modern
    if (!document.getElementById('katex-mathml-hide-style')) {
        const kmStyle = document.createElement('style');
        kmStyle.id = 'katex-mathml-hide-style';
        kmStyle.textContent = '.katex-mathml { display: none !important; }';
        document.head.appendChild(kmStyle);
    }

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


