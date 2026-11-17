# -*- coding: utf-8 -*-
import sys
import os
import json

from generate_sas_xi_html import PG_DATA, ESAI_DATA

def generate_kisi_table():
    rows = []
    # 40 PG
    for item in PG_DATA:
        no = item["no"]
        materi_key = item["materi_key"]
        materi_lbl = item["materi_label"]
        indikator = item["indikator"]
        level = item["level"]
        bobot = item["bobot"]
        
        row_html = f'''
        <tr class="kisi-row border-b border-slate-100 hover:bg-slate-50/70 transition-colors" data-materi="{materi_key}">
            <td class="p-3 text-center font-bold text-slate-700">{no}</td>
            <td class="p-3 font-medium text-slate-800">{materi_lbl}</td>
            <td class="p-3 text-slate-600 leading-relaxed">{indikator}</td>
            <td class="p-3 text-center">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold {'bg-amber-100 text-amber-800' if level=='C4' else ('bg-blue-100 text-blue-800' if level=='C3' else 'bg-slate-100 text-slate-700')}">{level}</span>
            </td>
            <td class="p-3 text-center">
                <span class="px-2 py-0.5 rounded bg-teal-50 text-teal-800 text-[10px] font-bold">PG</span>
            </td>
            <td class="p-3 text-center font-bold text-slate-700">
                <button type="button" onclick="goToQuestion('pg-{no}')" class="text-teal-600 hover:text-teal-800 hover:underline font-bold">No. {no}</button>
            </td>
            <td class="p-3 text-center text-slate-500 text-xs font-semibold">{bobot}</td>
        </tr>'''
        rows.append(row_html)

    # 5 Esai
    for item in ESAI_DATA:
        no = item["no"]
        materi_key = item["materi_key"]
        materi_lbl = item["materi_label"]
        indikator = item["indikator"]
        level = item["level"]
        bobot = item["bobot"]
        
        row_html = f'''
        <tr class="kisi-row border-b border-purple-100 bg-purple-50/20 hover:bg-purple-50/50 transition-colors" data-materi="{materi_key}">
            <td class="p-3 text-center font-bold text-purple-900">{40 + no}</td>
            <td class="p-3 font-semibold text-purple-900">{materi_lbl}</td>
            <td class="p-3 text-slate-700 leading-relaxed font-medium">{indikator}</td>
            <td class="p-3 text-center">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">{level}</span>
            </td>
            <td class="p-3 text-center">
                <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold">Esai</span>
            </td>
            <td class="p-3 text-center font-bold">
                <button type="button" onclick="goToQuestion('es-{no}')" class="text-purple-700 hover:text-purple-900 hover:underline font-bold">Esai {no}</button>
            </td>
            <td class="p-3 text-center text-purple-700 text-xs font-bold">{bobot}</td>
        </tr>'''
        rows.append(row_html)

    return "\n".join(rows)


def generate_pg_articles():
    articles = []
    letters = ["A", "B", "C", "D", "E"]
    
    for item in PG_DATA:
        no = item["no"]
        materi_lbl = item["materi_label"]
        level = item["level"]
        soal = item["soal"]
        pilihan = item["pilihan"]
        kunci = item["kunci"]
        bahas = item["bahas"]
        pengecoh = item.get("pengecoh", "")

        options_html = []
        for idx, opt_text in enumerate(pilihan):
            let = letters[idx]
            is_correct = (let == kunci)
            opt_box = f'''
            <div class="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
                <span class="font-bold text-slate-500 w-5">{let}.</span>
                <span>{opt_text}</span>
            </div>'''
            options_html.append(opt_box)

        art_html = f'''
        <article id="pg-{no}" class="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/90 transition-all">
            <div class="flex items-start justify-between gap-3 mb-4">
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-teal-600 text-white font-bold text-xs">{no}</span>
                    <span class="px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-800 text-[11px] font-semibold">{materi_lbl} • {level}</span>
                </div>
                <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Bobot: 1 Poin</span>
            </div>

            <div class="text-slate-800 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>{soal}</p>
            </div>

            <div class="mt-4 grid grid-cols-1 gap-2 text-xs sm:text-sm">
                {"".join(options_html)}
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100">
                <button type="button" onclick="toggleExp('exp-pg-{no}')" class="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5">
                    <span>💡 Kunci &amp; Pembahasan Soal {no}</span>
                    <span id="icon-exp-pg-{no}">▾</span>
                </button>
                <div id="exp-pg-{no}" class="hidden mt-3 p-4 rounded-2xl bg-teal-50/50 border border-teal-100 text-xs sm:text-sm text-slate-800 space-y-2 leading-relaxed">
                    <div class="font-bold text-teal-900 flex items-center gap-2">
                        <span>Kunci Jawaban:</span>
                        <span class="px-2.5 py-0.5 rounded bg-emerald-600 text-white text-xs font-extrabold">{kunci}</span>
                    </div>
                    <div class="pt-1 text-slate-700">
                        {bahas}
                    </div>
                    {f'<div class="pt-2 border-t border-teal-200/60 text-[11px] text-slate-600"><b>Catatan Pengecoh:</b> {pengecoh}</div>' if pengecoh else ''}
                </div>
            </div>
        </article>'''
        articles.append(art_html)

    return "\n".join(articles)


def generate_esai_articles():
    articles = []
    for item in ESAI_DATA:
        no = item["no"]
        materi_lbl = item["materi_label"]
        level = item["level"]
        bobot = item["bobot"]
        soal = item["soal"]
        bahas = item["bahas"]
        rubrik = item["rubrik"]

        rubrik_list = "".join(f'<li class="flex items-start gap-1.5"><span class="text-purple-600 font-bold">✔</span> <span>{p}</span></li>' for p in rubrik["poin"])

        art_html = f'''
        <article id="es-{no}" class="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-purple-200/90 transition-all">
            <div class="flex items-start justify-between gap-3 mb-4">
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center px-3 py-1 rounded-xl bg-purple-700 text-white font-bold text-xs">Esai {no}</span>
                    <span class="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-900 text-[11px] font-semibold">{materi_lbl} • {level}</span>
                </div>
                <span class="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">Bobot Maks: {bobot}</span>
            </div>

            <div class="text-slate-800 text-xs sm:text-sm leading-relaxed space-y-3">
                <div>{soal}</div>
            </div>

            <div class="mt-4 pt-3 border-t border-purple-100">
                <button type="button" onclick="toggleExp('exp-es-{no}')" class="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5">
                    <span>💡 Kunci, Pembahasan Konseptual &amp; Rubrik Esai {no}</span>
                    <span id="icon-exp-es-{no}">▾</span>
                </button>
                <div id="exp-es-{no}" class="hidden mt-3 p-5 rounded-2xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-800 space-y-4 leading-relaxed">
                    <div class="p-3 rounded-xl bg-white border border-purple-200">
                        <span class="text-xs font-bold text-purple-900 block mb-1">Rubrik Penskoran Guru (Maksimal {rubrik["max"]} Poin):</span>
                        <ul class="text-xs text-slate-700 space-y-1">
                            {rubrik_list}
                        </ul>
                    </div>
                    <div class="text-slate-800 pt-1">
                        {bahas}
                    </div>
                </div>
            </div>
        </article>'''
        articles.append(art_html)

    return "\n".join(articles)


def build_full_html():
    kisi_rows = generate_kisi_table()
    pg_cards = generate_pg_articles()
    esai_cards = generate_esai_articles()

    # Kunci PG mapping
    pg_keys_obj = {item["no"]: item["kunci"] for item in PG_DATA}
    pg_keys_js = json.dumps(pg_keys_obj)

    # Esai Rubrik mapping
    esai_rubrik_obj = {item["no"]: item["rubrik"] for item in ESAI_DATA}
    esai_rubrik_js = json.dumps(esai_rubrik_obj, indent=4)

    html = f'''<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kisi-Kisi &amp; Simulasi Ujian SAS Ganjil Kimia Kelas XI — Persiapan Asesmen | AjarKita</title>
    <meta name="description" content="Persiapan Sumatif Akhir Semester (SAS) Ganjil Kimia Kelas XI (Fase F): Matriks Kisi-Kisi Resmi 45 Indikator, Latihan Soal Isomorfis (40 PG + 5 Esai), Kunci & Pembahasan Konsep, serta Simulasi CBT Timer 90 Menit.">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://kimia.ajarkita.my.id/kelas-11/ujian-sas-ganjil.html">

    <!-- Open Graph / Meta Sosial -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="AjarKita Kimia">
    <meta property="og:locale" content="id_ID">
    <meta property="og:url" content="https://kimia.ajarkita.my.id/kelas-11/ujian-sas-ganjil.html">
    <meta property="og:title" content="🧪 Kisi-Kisi & Simulasi SAS Ganjil Kimia Kelas XI — AjarKita">
    <meta property="og:description" content="Akses kisi-kisi resmi 45 indikator, pelajari pembahasan 45 butir soal latihan prediksi isomorfis (40 PG + 5 Esai), dan uji kemampuan lewat CBT Online 90 Menit.">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>">

    <!-- Styling Tailwind CSS & Font Inter/Plus Jakarta -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

    <!-- KaTeX untuk Rumus Kimia & Matematika -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

    <style>
        body {{ font-family: 'Inter', sans-serif; }}
        h1, h2, h3, h4, .font-heading {{ font-family: 'Plus Jakarta Sans', sans-serif; }}
        .font-mono-code {{ font-family: 'JetBrains Mono', monospace; }}
        
        /* Glassmorphism Effect */
        .glass-card {{
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(226, 232, 240, 0.85);
        }}

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {{
            width: 6px;
            height: 6px;
        }}
        .custom-scrollbar::-webkit-scrollbar-track {{
            background: #f1f5f9;
            border-radius: 9999px;
        }}
        .custom-scrollbar::-webkit-scrollbar-thumb {{
            background: #cbd5e1;
            border-radius: 9999px;
        }}
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {{
            background: #94a3b8;
        }}

        /* Print Styling */
        @media print {{
            #header-placeholder, #footer-placeholder, #spu-placeholder, .no-print, .tab-nav-bar {{
                display: none !important;
            }}
            body {{
                background: white !important;
                color: black !important;
            }}
            .glass-card {{
                box-shadow: none !important;
                border: 1px solid #ccc !important;
            }}
        }}
    </style>
</head>
<body class="bg-[#f8fafc] text-slate-800 flex flex-col min-h-screen selection:bg-teal-500 selection:text-white" data-kelas="11">

    <!-- HEADER AJARKITA (dimuat otomatis) -->
    <div id="header-placeholder"></div>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        
        <!-- BREADCRUMB & BACK LINK -->
        <nav class="flex items-center gap-2 text-xs text-slate-500 mb-5 no-print" aria-label="Breadcrumb">
            <a href="/" class="hover:text-teal-600 transition-colors">Beranda</a>
            <span>/</span>
            <a href="/kelas-11/index.html" class="hover:text-teal-600 transition-colors">Kimia Kelas XI</a>
            <span>/</span>
            <span class="text-teal-700 font-semibold">Persiapan SAS Ganjil 2026/2027</span>
        </nav>

        <!-- HEADER HALAMAN RINGKAS & BERSIH -->
        <div class="mb-6">
            <div class="flex items-center gap-2 mb-2">
                <span class="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold uppercase">
                    Persiapan SAS Ganjil 2026/2027
                </span>
                <span class="text-xs text-slate-400">•</span>
                <span class="text-xs font-medium text-slate-500">Kimia Kelas XI (Fase F)</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Kisi-Kisi &amp; Simulasi Ujian SAS Ganjil Kimia Kelas XI
            </h1>
            <p class="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
                Modul latihan mandiri santri berbasis kisi-kisi resmi asesmen: 45 butir soal prediksi isomorfis (40 Pilihan Ganda + 5 Esai), bedah kunci &amp; pembahasan konsep mendalam, serta simulasi CBT dengan timer 90 menit.
            </p>
        </div>

        <!-- TAB NAVIGATION (3-IN-1 MODE) -->
        <div class="tab-nav-bar sticky top-16 z-30 mb-8 no-print">
            <div class="glass-card p-1.5 rounded-2xl shadow-md border border-slate-200/90 flex flex-wrap sm:flex-nowrap gap-1">
                <button type="button" 
                        onclick="switchTab('kisi-kisi')" 
                        id="tab-btn-kisi-kisi"
                        class="tab-btn flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all bg-teal-600 text-white shadow-sm">
                    <span>📋</span>
                    <span>1. Matriks Kisi-Kisi</span>
                    <span class="hidden md:inline-block px-1.5 py-0.5 rounded-md bg-white/20 text-[10px] font-mono">45 Indikator</span>
                </button>
                <button type="button" 
                        onclick="switchTab('bedah-soal')" 
                        id="tab-btn-bedah-soal"
                        class="tab-btn flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                    <span>📖</span>
                    <span>2. Bank Soal &amp; Pembahasan</span>
                    <span class="hidden md:inline-block px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[10px] font-mono">40 PG + 5 Esai</span>
                </button>
                <button type="button" 
                        onclick="switchTab('cbt')" 
                        id="tab-btn-cbt"
                        class="tab-btn flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                    <span>⏱️</span>
                    <span>3. Simulasi CBT Mandiri</span>
                    <span class="hidden md:inline-block px-1.5 py-0.5 rounded-md bg-teal-100 text-teal-800 text-[10px] font-mono">Timer 90 Mnt</span>
                </button>
            </div>
        </div>

        <!-- ========================================================= -->
        <!-- TAB PANE 1: MATRIKS KISI-KISI RESMI (45 INDIKATOR)        -->
        <!-- ========================================================= -->
        <section id="tab-content-kisi-kisi" class="tab-pane space-y-6">
            
            <!-- RINGKASAN SEBARAN KOMPETENSI -->
            <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200/90">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                    <div>
                        <div class="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                            <span>📊</span> Standar Kompetensi Asesmen
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                            Sebaran 45 Butir Soal per Ruang Lingkup Materi
                        </h3>
                    </div>
                    <div class="flex items-center gap-2 no-print">
                        <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-2">
                            <span>🖨️</span> Cetak Kisi-Kisi
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <!-- Kartu Materi 1 -->
                    <div class="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 flex flex-col justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 text-[10px] font-bold">Materi 1</span>
                            <h4 class="font-bold text-slate-900 text-sm mt-2">Konsep Mol &amp; Stoikiometri</h4>
                            <p class="text-xs text-slate-600 mt-1">Jumlah partikel, massa molar, volume molar gas STP, rumus empiris/molekul, koefisien reaksi, pereaksi pembatas, Hukum Gay-Lussac.</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-teal-200/50 flex justify-between items-center text-xs">
                            <span class="text-slate-500">8 PG + 1 Esai</span>
                            <span class="font-bold text-teal-800">20 Poin</span>
                        </div>
                    </div>

                    <!-- Kartu Materi 2 -->
                    <div class="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[10px] font-bold">Materi 2</span>
                            <h4 class="font-bold text-slate-900 text-sm mt-2">Ikatan Kimia &amp; Gaya Antarmolekul</h4>
                            <p class="text-xs text-slate-600 mt-1">Konfigurasi elektron, ikatan kovalen koordinasi, domain elektron VSEPR, bentuk molekul, kepolaran dipol, ikatan hidrogen, gaya London.</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-blue-200/50 flex justify-between items-center text-xs">
                            <span class="text-slate-500">9 PG + 1 Esai</span>
                            <span class="font-bold text-blue-800">21 Poin</span>
                        </div>
                    </div>

                    <!-- Kartu Materi 3 -->
                    <div class="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex flex-col justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">Materi 3</span>
                            <h4 class="font-bold text-slate-900 text-sm mt-2">Termokimia</h4>
                            <p class="text-xs text-slate-600 mt-1">Eksoterm vs endoterm, persamaan termokimia ΔHf°, kalorimeter q = mcΔT, Hukum Hess, siklus Hess, energi ikatan rata-rata.</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-amber-200/50 flex justify-between items-center text-xs">
                            <span class="text-slate-500">8 PG + 1 Esai</span>
                            <span class="font-bold text-amber-800">20 Poin</span>
                        </div>
                    </div>

                    <!-- Kartu Materi 4 -->
                    <div class="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex flex-col justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[10px] font-bold">Materi 4</span>
                            <h4 class="font-bold text-slate-900 text-sm mt-2">Laju Reaksi &amp; Teori Tumbukan</h4>
                            <p class="text-xs text-slate-600 mt-1">Luas permukaan bidang sentuh, persamaan laju eksperimen, tetapan laju k, pengaruh suhu, profil energi aktivasi Ea katalis, mekanisme reaksi.</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-purple-200/50 flex justify-between items-center text-xs">
                            <span class="text-slate-500">8 PG + 1 Esai</span>
                            <span class="font-bold text-purple-800">20 Poin</span>
                        </div>
                    </div>

                    <!-- Kartu Materi 5 -->
                    <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">Materi 5</span>
                            <h4 class="font-bold text-slate-900 text-sm mt-2">Kesetimbangan Kimia</h4>
                            <p class="text-xs text-slate-600 mt-1">Grafik kesetimbangan dinamis, tetapan Kc sistem heterogen & homogen, Asas Le Chatelier (suhu, volume/tekanan, konsentrasi), peran katalis.</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-emerald-200/50 flex justify-between items-center text-xs">
                            <span class="text-slate-500">7 PG + 1 Esai</span>
                            <span class="font-bold text-emerald-800">19 Poin</span>
                        </div>
                    </div>

                    <!-- Kartu Total -->
                    <div class="p-4 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded-md bg-teal-500/30 text-teal-300 text-[10px] font-bold">Total Asesmen</span>
                            <h4 class="font-bold text-white text-base mt-2">Komposisi Naskah SAS Kelas XI</h4>
                            <p class="text-xs text-slate-300 mt-1">C2 (Memahami) = 6 soal • C3 (Menerapkan) = 18 soal • C4 (Menganalisis) = 21 soal.</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                            <span class="text-slate-300 font-medium">40 PG (40 Poin) + 5 Esai (60 Poin)</span>
                            <span class="font-extrabold text-teal-400 text-sm">Total 100 Poin (90 Mnt)</span>
                        </div>
                    </div>
                </div>

                <!-- FILTER KATEGORI MATERI -->
                <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 no-print">
                    <span class="text-xs font-bold text-slate-500 mr-1">Filter Materi:</span>
                    <button type="button" onclick="filterKisi('all')" id="filter-btn-all" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-teal-600 text-white shadow-xs">Semua (45)</button>
                    <button type="button" onclick="filterKisi('stoikiometri')" id="filter-btn-stoikiometri" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Stoikiometri (9)</button>
                    <button type="button" onclick="filterKisi('ikatan')" id="filter-btn-ikatan" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Ikatan Kimia (10)</button>
                    <button type="button" onclick="filterKisi('termokimia')" id="filter-btn-termokimia" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Termokimia (9)</button>
                    <button type="button" onclick="filterKisi('lajureaksi')" id="filter-btn-lajureaksi" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Laju Reaksi (9)</button>
                    <button type="button" onclick="filterKisi('kesetimbangan')" id="filter-btn-kesetimbangan" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Kesetimbangan (8)</button>
                </div>
            </div>

            <!-- TABEL MATRIKS KISI-KISI LENGKAP -->
            <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200/90 overflow-hidden">
                <div class="flex items-center justify-between mb-4">
                    <h4 class="font-bold text-slate-900 text-base sm:text-lg">Tabel Rincian Matriks 45 Indikator</h4>
                    <span class="text-xs text-slate-500 font-mono">Klik nomor butir untuk melompat ke soal</span>
                </div>
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-xs text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr class="border-b border-slate-200 text-slate-500 font-bold bg-slate-50/80">
                                <th class="p-3 w-12 text-center">No</th>
                                <th class="p-3 w-48">Materi Pokok</th>
                                <th class="p-3">Indikator Asesmen</th>
                                <th class="p-3 w-20 text-center">Level</th>
                                <th class="p-3 w-20 text-center">Bentuk</th>
                                <th class="p-3 w-20 text-center">Tautan</th>
                                <th class="p-3 w-24 text-center">Bobot</th>
                            </tr>
                        </thead>
                        <tbody id="kisi-table-body">
                            {kisi_rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB PANE 2: BANK SOAL ISOMORFIS & BEDAH PEMBAHASAN KONSEP -->
        <!-- ========================================================= -->
        <section id="tab-content-bedah-soal" class="tab-pane hidden space-y-6">
            
            <!-- HEADER KONTROL LATIHAN -->
            <div class="glass-card rounded-3xl p-6 shadow-xs border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">
                        Latihan Soal Isomorfis &amp; Bedah Konseptual
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Soal latihan prediksi yang dirancang setara secara konseptual dan matematis dengan naskah ujian resmi sekolah.
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="toggleAllSolutions(true)" class="px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition-all">
                        Buka Semua
                    </button>
                    <button type="button" onclick="toggleAllSolutions(false)" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all">
                        Tutup Semua
                    </button>
                </div>
            </div>

            <!-- BAGIAN A: PILIHAN GANDA (40 BUTIR) -->
            <div class="space-y-4">
                <div class="flex items-center gap-2 px-2 pt-2">
                    <span class="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">Bagian A</span>
                    <h3 class="text-lg font-bold text-slate-900">40 Butir Soal Pilihan Ganda (Bobot 40 Poin)</h3>
                </div>
                {pg_cards}
            </div>

            <!-- BAGIAN B: ESAI (5 BUTIR) -->
            <div class="space-y-4 pt-6">
                <div class="flex items-center gap-2 px-2">
                    <span class="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">Bagian B</span>
                    <h3 class="text-lg font-bold text-slate-900">5 Butir Soal Esai &amp; Rubrik Guru (Bobot 60 Poin)</h3>
                </div>
                {esai_cards}
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- TAB PANE 3: SIMULASI CBT ONLINE MANDIRI (TIMER 90 MENIT)   -->
        <!-- ========================================================= -->
        <section id="tab-content-cbt" class="tab-pane hidden space-y-6">
            
            <!-- CBT START CARD -->
            <div id="cbt-start-card" class="glass-card rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200/90 text-center max-w-2xl mx-auto space-y-6">
                <div class="w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
                    ⏱️
                </div>
                <div>
                    <span class="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">Simulasi Interaktif Mandiri</span>
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
                        Simulasi CBT Persiapan SAS Ganjil Kimia Kelas XI
                    </h2>
                    <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                        Uji kesiapan Anda menghadapi Sumatif Akhir Semester dengan simulasi sistem Computer-Based Testing (CBT) standar nasional: 45 butir soal (40 PG + 5 Esai), batas waktu 90 menit, skor instan, dan evaluasi mandiri esai.
                    </p>
                </div>

                <div class="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2">
                    <div class="p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
                        <span class="text-slate-400 text-[10px] uppercase font-bold block">Jumlah Soal</span>
                        <span class="font-bold text-slate-800 text-sm sm:text-base">45 Butir</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
                        <span class="text-slate-400 text-[10px] uppercase font-bold block">Alokasi Waktu</span>
                        <span class="font-bold text-slate-800 text-sm sm:text-base">90 Menit</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
                        <span class="text-slate-400 text-[10px] uppercase font-bold block">Skor Maksimal</span>
                        <span class="font-bold text-teal-700 text-sm sm:text-base">100 Poin</span>
                    </div>
                </div>

                <!-- Form Identitas Peserta -->
                <div class="space-y-3 max-w-md mx-auto text-left pt-2">
                    <div>
                        <label for="cbt-nama" class="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap Santri / Siswa:</label>
                        <input type="text" id="cbt-nama" placeholder="Contoh: Muhammad Raihan" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
                    </div>
                    <div>
                        <label for="cbt-kelas" class="block text-xs font-bold text-slate-700 mb-1">Kelas / Rombel:</label>
                        <input type="text" id="cbt-kelas" placeholder="Contoh: XI IPA 1 (Fase F)" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
                    </div>
                </div>

                <div class="pt-4">
                    <button type="button" onclick="startCBTSimulation()" class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-lg shadow-teal-600/30 transition-all transform active:scale-95">
                        🚀 Mulai Ujian Sekarang (Timer Berjalan)
                    </button>
                </div>
            </div>

            <!-- CBT ACTIVE ARENA (DITAMPILKAN SAAT UJIAN BERJALAN) -->
            <div id="cbt-active-arena" class="hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <!-- KOLOM KIRI: DAFTAR SOAL CBT (8 KOLOM) -->
                <div class="lg:col-span-8 space-y-6">
                    <div id="cbt-questions-container" class="space-y-6">
                        <!-- Kartu soal akan di-render dinamis oleh buildCBTQuestionDeck() -->
                    </div>

                    <!-- Tombol Selesai Bawah -->
                    <div class="p-6 rounded-3xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                        <span class="text-xs text-slate-500">Periksa kembali seluruh lembar jawaban sebelum mengumpulkan.</span>
                        <button type="button" onclick="submitCBTConfirm()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all">
                            Selesai &amp; Kumpulkan Jawaban
                        </button>
                    </div>
                </div>

                <!-- KOLOM KANAN: PALET NAVIGASI & TIMER (4 KOLOM - STICKY) -->
                <div class="lg:col-span-4 sticky top-32 space-y-4">
                    <div class="glass-card rounded-3xl p-5 shadow-sm border border-slate-200/90 space-y-4">
                        
                        <!-- Header Timer & Info -->
                        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div>
                                <span class="text-[10px] font-bold text-slate-400 uppercase block">Peserta</span>
                                <span id="cbt-peserta-display" class="text-xs font-bold text-slate-800">Santri</span>
                            </div>
                            <div>
                                <span class="text-[10px] font-bold text-slate-400 uppercase block text-right">Sisa Waktu</span>
                                <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono font-bold text-sm sm:text-base">
                                    <span>⏳</span>
                                    <span id="cbt-timer-display">90:00</span>
                                </div>
                            </div>
                        </div>

                        <!-- Progres Pengerjaan -->
                        <div class="space-y-1.5">
                            <div class="flex justify-between text-xs text-slate-600">
                                <span class="font-semibold">Progres Terjawab:</span>
                                <span id="cbt-progress-text" class="font-bold text-teal-700 font-mono">0 / 45 Soal</span>
                            </div>
                            <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div id="cbt-progress-bar" class="bg-teal-600 h-full w-0 transition-all duration-300"></div>
                            </div>
                        </div>

                        <!-- Palet Navigasi Nomor Soal -->
                        <div class="space-y-3 pt-2">
                            <span class="text-xs font-bold text-slate-700 block">Navigasi Soal Pilihan Ganda (1–40):</span>
                            <div id="cbt-nav-grid-pg" class="grid grid-cols-5 gap-1.5 max-h-56 overflow-y-auto custom-scrollbar p-1">
                                <!-- Tombol 1-40 dirender dinamis -->
                            </div>
                            
                            <span class="text-xs font-bold text-purple-900 block pt-2 border-t border-slate-100">Navigasi Soal Esai (1–5):</span>
                            <div id="cbt-nav-grid-es" class="grid grid-cols-5 gap-1.5 p-1">
                                <!-- Tombol Esai 1-5 dirender dinamis -->
                            </div>
                        </div>

                        <!-- Legenda Warna -->
                        <div class="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-[10px] text-slate-500">
                            <div class="flex items-center gap-1.5">
                                <span class="w-3 h-3 rounded-md bg-teal-600"></span>
                                <span>Terjawab</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <span class="w-3 h-3 rounded-md bg-amber-400"></span>
                                <span>Ragu-ragu</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <span class="w-3 h-3 rounded-md bg-slate-100 border border-slate-300"></span>
                                <span>Kosong</span>
                            </div>
                        </div>

                        <!-- Tombol Kumpulkan -->
                        <div class="pt-2">
                            <button type="button" onclick="submitCBTConfirm()" class="w-full py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all">
                                📋 Kumpulkan Jawaban
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CBT RESULT SCORECARD (DITAMPILKAN SETELAH SUBMIT) -->
            <div id="cbt-result-card" class="hidden glass-card rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200/90 max-w-3xl mx-auto space-y-6">
                <div class="text-center space-y-2 border-b border-slate-100 pb-5">
                    <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">Hasil Asesmen Mandiri</span>
                    <h2 class="text-2xl font-bold text-slate-900">Lembar Hasil Evaluasi SAS Ganjil Kimia Kelas XI</h2>
                    <p id="cbt-result-peserta-info" class="text-xs text-slate-500"></p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-center">
                        <span class="text-slate-500 text-xs font-bold block mb-1">Skor Pilihan Ganda</span>
                        <span id="cbt-score-pg" class="text-3xl font-extrabold text-teal-800 font-mono">0 / 40</span>
                        <span id="cbt-correct-count" class="text-[11px] text-teal-600 block mt-1">0 Benar dari 40 Soal</span>
                    </div>
                    <div class="p-4 rounded-2xl bg-purple-50 border border-purple-100 text-center">
                        <span class="text-slate-500 text-xs font-bold block mb-1">Skor Maksimal Esai</span>
                        <span class="text-3xl font-extrabold text-purple-800 font-mono">60 Poin</span>
                        <span class="text-[11px] text-purple-600 block mt-1">Evaluasi Mandiri Rubrik</span>
                    </div>
                    <div class="p-4 rounded-2xl bg-slate-900 text-white text-center">
                        <span class="text-slate-400 text-xs font-bold block mb-1">Persentase PG</span>
                        <span id="cbt-score-pct" class="text-3xl font-extrabold text-teal-400 font-mono">0%</span>
                        <span class="text-[11px] text-slate-300 block mt-1">Standar Tuntas: ≥ 75%</span>
                    </div>
                </div>

                <!-- Breakdown Butir PG -->
                <div class="space-y-3 pt-2">
                    <h4 class="font-bold text-slate-900 text-sm">Rincian Jawaban Soal Pilihan Ganda (1–40):</h4>
                    <div id="cbt-pg-breakdown" class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs max-h-64 overflow-y-auto custom-scrollbar p-1">
                        <!-- Item breakdown PG dirender dinamis -->
                    </div>
                </div>

                <!-- Rubrik Self-Evaluation Esai -->
                <div class="space-y-3 pt-4 border-t border-slate-100">
                    <h4 class="font-bold text-purple-900 text-sm">Lembar Koreksi Mandiri Soal Esai (1–5):</h4>
                    <p class="text-xs text-slate-500">Cocokkan uraian jawaban Anda dengan kunci rubrik penskoran resmi berikut:</p>
                    <div id="cbt-esai-self-eval" class="space-y-4">
                        <!-- Kartu evaluasi esai dirender dinamis -->
                    </div>
                </div>

                <!-- Tombol Aksi Akhir -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-slate-100 no-print">
                    <button type="button" onclick="window.print()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2">
                        <span>🖨️</span> Cetak Lembar Skor
                    </button>
                    <button type="button" onclick="resetCBT()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all">
                        🔄 Ulangi Simulasi CBT
                    </button>
                </div>
            </div>
        </section>

    </main>

    <!-- FOOTER AJARKITA (dimuat otomatis) -->
    <div id="footer-placeholder"></div>

    <!-- SPU MODAL / POPUP (dimuat otomatis) -->
    <div id="spu-placeholder"></div>

    <!-- LOGIKA JAVASCRIPT SISTEM KISI & CBT -->
    <script>
        // Kunci Jawaban Resmi 40 PG Kelas XI
        const PG_KEYS_XI = {pg_keys_js};

        const ESAI_RUBRIK_XI = {esai_rubrik_js};

        // Tab Switching
        function switchTab(tabId) {{
            document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
            const targetContent = document.getElementById('tab-content-' + tabId);
            if (targetContent) targetContent.classList.remove('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {{
                btn.className = "tab-btn flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100";
            }});
            const activeBtn = document.getElementById('tab-btn-' + tabId);
            if (activeBtn) {{
                activeBtn.className = "tab-btn flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all bg-teal-600 text-white shadow-sm";
            }}

            window.scrollTo({{ top: 0, behavior: 'smooth' }});

            if (window.renderMathInElement) {{
                renderMathInElement(document.body, {{
                    delimiters: [
                        {{ left: '$$', right: '$$', display: true }},
                        {{ left: '$', right: '$', display: false }}
                    ]
                }});
            }}
        }}

        // Toggle Solution Accordion
        function toggleExp(id) {{
            const el = document.getElementById(id);
            const icon = document.getElementById('icon-' + id);
            if (!el) return;
            if (el.classList.contains('hidden')) {{
                el.classList.remove('hidden');
                if (icon) icon.textContent = '▴';
            }} else {{
                el.classList.add('hidden');
                if (icon) icon.textContent = '▾';
            }}
        }}

        function toggleAllSolutions(show) {{
            document.querySelectorAll('[id^=\"exp-\"]').forEach(el => {{
                const icon = document.getElementById('icon-' + el.id);
                if (show) {{
                    el.classList.remove('hidden');
                    if (icon) icon.textContent = '▴';
                }} else {{
                    el.classList.add('hidden');
                    if (icon) icon.textContent = '▾';
                }}
            }});
        }}

        // Filter Matriks Kisi-Kisi
        function filterKisi(cat) {{
            document.querySelectorAll('.filter-btn').forEach(btn => {{
                btn.className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200";
            }});
            const activeBtn = document.getElementById('filter-btn-' + cat);
            if (activeBtn) {{
                activeBtn.className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-teal-600 text-white shadow-xs";
            }}

            const rows = document.querySelectorAll('.kisi-row');
            rows.forEach(row => {{
                if (cat === 'all' || row.getAttribute('data-materi') === cat) {{
                    row.style.display = '';
                }} else {{
                    row.style.display = 'none';
                }}
            }});
        }}

        // Navigasi ke Soal Tertentu di Tab 2
        function goToQuestion(qId) {{
            switchTab('bedah-soal');
            setTimeout(() => {{
                const el = document.getElementById(qId);
                if (el) {{
                    el.scrollIntoView({{ behavior: 'smooth', block: 'center' }});
                    el.classList.add('ring-2', 'ring-teal-500');
                    setTimeout(() => el.classList.remove('ring-2', 'ring-teal-500'), 2500);
                }}
            }}, 100);
        }}

        // CBT Simulator State
        let cbtTimer = null;
        let cbtSecondsLeft = 90 * 60; // 90 menit
        let cbtAnswers = {{}}; // {{ 1: 'A', 2: 'B', ... }}
        let cbtEsaiAnswers = {{}}; // {{ 1: 'jawaban esai...', ... }}
        let cbtRagu = {{}}; // {{ 1: true, ... }}

        function startCBTSimulation() {{
            const nama = document.getElementById('cbt-nama').value.trim() || 'Santri Berprestasi';
            const kelas = document.getElementById('cbt-kelas').value.trim() || 'XI IPA (Fase F)';

            document.getElementById('cbt-start-card').classList.add('hidden');
            document.getElementById('cbt-active-arena').classList.remove('hidden');
            document.getElementById('cbt-peserta-display').textContent = nama + ' (' + kelas + ')';

            buildCBTQuestionDeck();
            buildCBTNavGrid();

            cbtSecondsLeft = 90 * 60;
            updateTimerDisplay();
            if (cbtTimer) clearInterval(cbtTimer);
            cbtTimer = setInterval(() => {{
                cbtSecondsLeft--;
                updateTimerDisplay();
                if (cbtSecondsLeft <= 0) {{
                    clearInterval(cbtTimer);
                    alert('Waktu ujian 90 menit telah habis! Sistem akan mengumpulkan lembar jawaban Anda secara otomatis.');
                    submitCBTFinal();
                }}
            }}, 1000);
        }}

        function updateTimerDisplay() {{
            const mins = Math.floor(cbtSecondsLeft / 60);
            const secs = cbtSecondsLeft % 60;
            const text = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
            const timerEl = document.getElementById('cbt-timer-display');
            if (timerEl) {{
                timerEl.textContent = text;
                if (cbtSecondsLeft <= 300) {{
                    timerEl.parentElement.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 text-white font-mono font-bold text-sm sm:text-base animate-pulse";
                }} else if (cbtSecondsLeft <= 900) {{
                    timerEl.parentElement.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 text-white font-mono font-bold text-sm sm:text-base";
                }}
            }}
        }}

        function buildCBTQuestionDeck() {{
            const container = document.getElementById('cbt-questions-container');
            container.innerHTML = '';

            // Render 40 PG
            for (let i = 1; i <= 40; i++) {{
                const srcArticle = document.getElementById('pg-' + i);
                if (!srcArticle) continue;

                const qTextEl = srcArticle.querySelector('.text-slate-800');
                const qText = qTextEl ? qTextEl.innerHTML : '';
                
                const optEls = srcArticle.querySelectorAll('.grid > div');
                let optionsHtml = '';
                const letters = ['A', 'B', 'C', 'D', 'E'];
                
                optEls.forEach((optDiv, idx) => {{
                    const letter = letters[idx];
                    const spans = optDiv.querySelectorAll('span');
                    const textSpan = spans.length > 1 ? spans[1].innerHTML : optDiv.textContent;

                    optionsHtml += `
                        <label class="cbt-opt-label flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-teal-400 bg-white hover:bg-teal-50/30 transition-all cursor-pointer" id="cbt-opt-wrapper-${{i}}-${{letter}}">
                            <input type="radio" name="cbt-pg-${{i}}" value="${{letter}}" onchange="selectCBTOption(${{i}}, '${{letter}}')" class="mt-1 w-4 h-4 text-teal-600 focus:ring-teal-500">
                            <span class="font-bold text-slate-600 w-5 text-sm">${{letter}}.</span>
                            <span class="text-xs sm:text-sm text-slate-800 leading-relaxed">${{textSpan}}</span>
                        </label>
                    `;
                }});

                const qCard = document.createElement('div');
                qCard.id = 'cbt-q-card-' + i;
                qCard.className = "bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/90 space-y-4";
                qCard.innerHTML = `
                    <div class="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-xs">${{i}}</span>
                            <span class="text-xs font-bold text-slate-700">Soal Pilihan Ganda (1 Poin)</span>
                        </div>
                        <label class="flex items-center gap-2 cursor-pointer text-xs font-semibold text-amber-700">
                            <input type="checkbox" onchange="toggleCBTRagu(${{i}}, this.checked)" class="w-4 h-4 text-amber-500 rounded focus:ring-amber-400">
                            <span>Ragu-ragu</span>
                        </label>
                    </div>
                    <div class="text-xs sm:text-sm text-slate-800 leading-relaxed">${{qText}}</div>
                    <div class="grid grid-cols-1 gap-2 pt-2">${{optionsHtml}}</div>
                `;
                container.appendChild(qCard);
            }}

            // Render 5 Esai
            for (let e = 1; e <= 5; e++) {{
                const srcArticle = document.getElementById('es-' + e);
                if (!srcArticle) continue;

                const qTextEl = srcArticle.querySelector('.text-slate-800');
                const qText = qTextEl ? qTextEl.innerHTML : '';
                const rubrikInfo = ESAI_RUBRIK_XI[e];

                const eCard = document.createElement('div');
                eCard.id = 'cbt-e-card-' + e;
                eCard.className = "bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-purple-200/90 space-y-4";
                eCard.innerHTML = `
                    <div class="flex items-center justify-between gap-3 border-b border-purple-100 pb-3">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center justify-center px-3 py-1 rounded-xl bg-purple-700 text-white font-bold text-xs">Esai ${{e}}</span>
                            <span class="text-xs font-bold text-purple-900">${{rubrikInfo ? rubrikInfo.judul : 'Soal Esai'}}</span>
                        </div>
                        <span class="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg">Bobot: 12 Poin</span>
                    </div>
                    <div class="text-xs sm:text-sm text-slate-800 leading-relaxed">${{qText}}</div>
                    <div class="pt-2 space-y-2">
                        <label class="block text-xs font-bold text-slate-700">Ketik Uraian / Langkah Jawaban Anda:</label>
                        <textarea rows="6" oninput="inputCBTEsai(${{e}}, this.value)" placeholder="Tuliskan persamaan reaksi, langkah perhitungan matematis, dan penjelasan konsep secara runtut..." class="w-full p-4 text-xs sm:text-sm rounded-2xl border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:outline-none leading-relaxed"></textarea>
                    </div>
                `;
                container.appendChild(eCard);
            }}

            if (window.renderMathInElement) {{
                renderMathInElement(container, {{
                    delimiters: [
                        {{ left: '$$', right: '$$', display: true }},
                        {{ left: '$', right: '$', display: false }}
                    ]
                }});
            }}
        }}

        function buildCBTNavGrid() {{
            const pgNav = document.getElementById('cbt-nav-grid-pg');
            const esNav = document.getElementById('cbt-nav-grid-es');
            if (pgNav) pgNav.innerHTML = '';
            if (esNav) esNav.innerHTML = '';

            // 40 PG
            for (let i = 1; i <= 40; i++) {{
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.id = 'cbt-nav-btn-' + i;
                btn.className = "h-8 rounded-lg border border-slate-300 bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center hover:border-teal-500 transition-all";
                btn.textContent = i;
                btn.onclick = () => scrollToCBTCard('cbt-q-card-' + i);
                if (pgNav) pgNav.appendChild(btn);
            }}

            // 5 Esai
            for (let e = 1; e <= 5; e++) {{
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.id = 'cbt-nav-btn-es-' + e;
                btn.className = "h-8 rounded-lg border border-purple-200 bg-purple-50 text-purple-900 font-bold text-xs flex items-center justify-center hover:border-purple-600 transition-all";
                btn.textContent = 'E' + e;
                btn.onclick = () => scrollToCBTCard('cbt-e-card-' + e);
                if (esNav) esNav.appendChild(btn);
            }}
        }}

        function scrollToCBTCard(cardId) {{
            const el = document.getElementById(cardId);
            if (el) {{
                el.scrollIntoView({{ behavior: 'smooth', block: 'center' }});
                el.classList.add('ring-2', 'ring-teal-500');
                setTimeout(() => el.classList.remove('ring-2', 'ring-teal-500'), 1500);
            }}
        }}

        function selectCBTOption(qNum, letter) {{
            cbtAnswers[qNum] = letter;

            document.querySelectorAll(`[id^="cbt-opt-wrapper-${{qNum}}-"]`).forEach(el => {{
                el.className = "cbt-opt-label flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-teal-400 bg-white hover:bg-teal-50/30 transition-all cursor-pointer";
            }});
            const selectedWrapper = document.getElementById(`cbt-opt-wrapper-${{qNum}}-${{letter}}`);
            if (selectedWrapper) {{
                selectedWrapper.className = "cbt-opt-label flex items-start gap-3 p-3.5 rounded-xl border border-teal-500 bg-teal-50/60 font-semibold text-teal-950 transition-all cursor-pointer";
            }}

            updateNavBtnState(qNum);
            updateCBTProgress();
        }}

        function toggleCBTRagu(qNum, isRagu) {{
            cbtRagu[qNum] = isRagu;
            updateNavBtnState(qNum);
        }}

        function updateNavBtnState(qNum) {{
            const btn = document.getElementById('cbt-nav-btn-' + qNum);
            if (!btn) return;

            const isAnswered = !!cbtAnswers[qNum];
            const isRagu = !!cbtRagu[qNum];

            if (isRagu) {{
                btn.className = "h-8 rounded-lg bg-amber-400 text-slate-900 font-bold text-xs flex items-center justify-center shadow-xs transition-all";
            }} else if (isAnswered) {{
                btn.className = "h-8 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center justify-center shadow-xs transition-all";
            }} else {{
                btn.className = "h-8 rounded-lg border border-slate-300 bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center hover:border-teal-500 transition-all";
            }}
        }}

        function inputCBTEsai(eNum, val) {{
            cbtEsaiAnswers[eNum] = val.trim();
            const btn = document.getElementById('cbt-nav-btn-es-' + eNum);
            if (!btn) return;

            if (val.trim().length > 5) {{
                btn.className = "h-8 rounded-lg bg-purple-700 text-white font-bold text-xs flex items-center justify-center shadow-xs transition-all";
            }} else {{
                btn.className = "h-8 rounded-lg border border-purple-200 bg-purple-50 text-purple-900 font-bold text-xs flex items-center justify-center hover:border-purple-600 transition-all";
            }}
            updateCBTProgress();
        }}

        function updateCBTProgress() {{
            const answeredPG = Object.keys(cbtAnswers).length;
            const answeredES = Object.values(cbtEsaiAnswers).filter(v => v.length > 5).length;
            const totalAnswered = answeredPG + answeredES;
            const total = 45;

            const progText = document.getElementById('cbt-progress-text');
            const progBar = document.getElementById('cbt-progress-bar');
            if (progText) progText.textContent = totalAnswered + ' / ' + total + ' Soal';
            if (progBar) progBar.style.width = ((totalAnswered / total) * 100) + '%';
        }}

        function submitCBTConfirm() {{
            const answeredPG = Object.keys(cbtAnswers).length;
            const answeredES = Object.values(cbtEsaiAnswers).filter(v => v.length > 5).length;
            const totalAnswered = answeredPG + answeredES;

            let msg = `Anda telah menjawab ${{totalAnswered}} dari 45 soal (${{answeredPG}} PG dan ${{answeredES}} Esai).\\n`;
            if (totalAnswered < 45) {{
                msg += `Masih ada ${{45 - totalAnswered}} butir soal yang belum Anda selesaikan.\\n\\n`;
            }}
            msg += 'Apakah Anda yakin ingin mengumpulkan lembar jawaban Anda sekarang?';

            if (confirm(msg)) {{
                submitCBTFinal();
            }}
        }}

        function submitCBTFinal() {{
            if (cbtTimer) clearInterval(cbtTimer);

            // Hitung Skor PG
            let correctCount = 0;
            const breakdownContainer = document.getElementById('cbt-pg-breakdown');
            if (breakdownContainer) breakdownContainer.innerHTML = '';

            for (let i = 1; i <= 40; i++) {{
                const userAns = cbtAnswers[i] || 'Kosong';
                const correctAns = PG_KEYS_XI[i];
                const isCorrect = (userAns === correctAns);
                if (isCorrect) correctCount++;

                if (breakdownContainer) {{
                    const item = document.createElement('div');
                    item.className = "p-2.5 rounded-xl border " + (isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-rose-50 border-rose-200 text-rose-950") + " flex items-center justify-between";
                    item.innerHTML = `
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-lg ${{isCorrect ? 'bg-emerald-600' : 'bg-rose-600'}} text-white font-bold text-[11px] flex items-center justify-center">${{i}}</span>
                            <span>Jawaban: <b>${{userAns}}</b></span>
                        </div>
                        <span class="font-bold text-[11px]">${{isCorrect ? '✓ Benar (+1)' : '✗ Salah (Kunci: ' + correctAns + ')'}}</span>
                    `;
                    breakdownContainer.appendChild(item);
                }}
            }}

            const pgScore = correctCount; // 40 PG @ 1 poin = max 40
            const pct = Math.round((correctCount / 40) * 100);

            // Update Scorecard
            document.getElementById('cbt-score-pg').textContent = pgScore + ' / 40';
            document.getElementById('cbt-correct-count').textContent = correctCount + ' Benar dari 40 Soal';
            document.getElementById('cbt-score-pct').textContent = pct + '%';

            const nama = document.getElementById('cbt-nama').value.trim() || 'Santri Berprestasi';
            const kelas = document.getElementById('cbt-kelas').value.trim() || 'XI IPA (Fase F)';
            document.getElementById('cbt-result-peserta-info').textContent = 'Peserta: ' + nama + ' • ' + kelas + ' • Selesai pada: ' + new Date().toLocaleTimeString('id-ID');

            // Render Esai Self-Evaluation
            const esaiContainer = document.getElementById('cbt-esai-self-eval');
            if (esaiContainer) {{
                esaiContainer.innerHTML = '';
                for (let e = 1; e <= 5; e++) {{
                    const rub = ESAI_RUBRIK_XI[e];
                    const userText = cbtEsaiAnswers[e] || '(Anda tidak mengisi uraian untuk nomor ini)';
                    const card = document.createElement('div');
                    card.className = "p-4 rounded-2xl bg-white border border-purple-200 space-y-2.5";
                    
                    let poinHtml = '';
                    rub.poin.forEach(p => {{
                        poinHtml += `<li class="flex items-start gap-1.5"><span class="text-purple-600 font-bold">✔</span> <span>${{p}}</span></li>`;
                    }});

                    card.innerHTML = `
                        <div class="flex items-center justify-between border-b border-purple-100 pb-2">
                            <span class="font-bold text-purple-950 text-xs sm:text-sm">${{rub.judul}}</span>
                            <span class="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold text-[10px]">Maks: ${{rub.max}} Poin</span>
                        </div>
                        <div class="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                            <b>Uraian Jawaban Anda:</b><br>${{userText.replace(/\\n/g, '<br>')}}
                        </div>
                        <div class="pt-1">
                            <span class="font-bold text-slate-700 text-xs">Kriteria Poin Guru:</span>
                            <ul class="text-xs text-slate-600 mt-1 space-y-1">${{poinHtml}}</ul>
                        </div>
                    `;
                    esaiContainer.appendChild(card);
                }}
            }}

            // Transisi Layar
            document.getElementById('cbt-active-arena').classList.add('hidden');
            document.getElementById('cbt-result-card').classList.remove('hidden');
            document.getElementById('cbt-result-card').scrollIntoView({{ behavior: 'smooth', block: 'start' }});
        }}

        function resetCBT() {{
            cbtAnswers = {{}};
            cbtEsaiAnswers = {{}};
            cbtRagu = {{}};
            if (cbtTimer) clearInterval(cbtTimer);

            document.getElementById('cbt-result-card').classList.add('hidden');
            document.getElementById('cbt-active-arena').classList.add('hidden');
            document.getElementById('cbt-start-card').classList.remove('hidden');
            document.getElementById('cbt-start-card').scrollIntoView({{ behavior: 'smooth', block: 'center' }});
        }}

        // Render KaTeX saat DOM siap
        window.addEventListener('DOMContentLoaded', () => {{
            if (window.renderMathInElement) {{
                renderMathInElement(document.body, {{
                    delimiters: [
                        {{ left: '$$', right: '$$', display: true }},
                        {{ left: '$', right: '$', display: false }}
                    ]
                }});
            }}
        }});
    </script>

    <!-- SCRIPT SISTEM AJARKITA -->
    <script src="/js/curriculum.js"></script>
    <script src="/js/include.js"></script>
    <script src="/js/spu.js"></script>
</body>
</html>'''
    return html

if __name__ == "__main__":
    out_path = "kelas-11/ujian-sas-ganjil.html"
    html_content = build_full_html()
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Generated {out_path} successfully ({len(html_content)} chars)")
