# -*- coding: utf-8 -*-
"""
Patch simulasi.html and pembahasan.html to wire up mapel geografi and support flexible kompleks_bs kolom.
"""

# 1. Patch simulasi.html
with open('tka/simulasi.html', 'r', encoding='utf-8') as f:
    sim_content = f.read()

# Add script tag
if '<script src="/tka/data/mapel-geografi.js"></script>' not in sim_content:
    sim_content = sim_content.replace(
        '<script src="/tka/data/mapel-sosiologi.js"></script>',
        '<script src="/tka/data/mapel-sosiologi.js"></script>\n    <script src="/tka/data/mapel-geografi.js"></script>'
    )

# Add activePackages check
target_active = """} else if (currentMapelKey === 'sosiologi' && typeof window.tkaSosiologiPackages !== 'undefined') {
            activePackages = window.tkaSosiologiPackages;
        }"""
new_active = """} else if (currentMapelKey === 'sosiologi' && typeof window.tkaSosiologiPackages !== 'undefined') {
            activePackages = window.tkaSosiologiPackages;
        } else if (currentMapelKey === 'geografi' && typeof window.tkaGeografiPackages !== 'undefined') {
            activePackages = window.tkaGeografiPackages;
        }"""
if target_active in sim_content and "currentMapelKey === 'geografi'" not in sim_content:
    sim_content = sim_content.replace(target_active, new_active)

# Add updateMapelUI condition
target_ui = """} else if (currentMapelKey === 'sosiologi') {
                document.title = "Simulasi CBT TKA Sosiologi SMA 2025/2026: Paket 1 & Paket 2 HOTS — KimiaInteraktif";
                if (heading) heading.innerHTML = "👥 Simulasi Tes Kemampuan Akademik (TKA) Sosiologi";
                if (subInfo) subInfo.innerText = "TKA Sosiologi SMA • CBT Interaktif";
                if (topLinkPembahasan) topLinkPembahasan.href = `/tka/pembahasan.html?mapel=sosiologi`;
                if (tab1) tab1.innerHTML = `<span>📄 Paket 1 (Resmi 2025 &bull; 30 Soal)</span>`;
                if (tab2) tab2.innerHTML = `<span>✨ Paket 2 (Try Out HOTS 2025/2026 &bull; 25 Soal)</span>`;
            }"""
new_ui = """} else if (currentMapelKey === 'sosiologi') {
                document.title = "Simulasi CBT TKA Sosiologi SMA 2025/2026: Paket 1 & Paket 2 HOTS — KimiaInteraktif";
                if (heading) heading.innerHTML = "👥 Simulasi Tes Kemampuan Akademik (TKA) Sosiologi";
                if (subInfo) subInfo.innerText = "TKA Sosiologi SMA • CBT Interaktif";
                if (topLinkPembahasan) topLinkPembahasan.href = `/tka/pembahasan.html?mapel=sosiologi`;
                if (tab1) tab1.innerHTML = `<span>📄 Paket 1 (Resmi 2025 &bull; 30 Soal)</span>`;
                if (tab2) tab2.innerHTML = `<span>✨ Paket 2 (Try Out HOTS 2025/2026 &bull; 25 Soal)</span>`;
            } else if (currentMapelKey === 'geografi') {
                document.title = "Simulasi CBT TKA Geografi SMA 2025/2026: Paket 1 Resmi — KimiaInteraktif";
                if (heading) heading.innerHTML = "🗺️ Simulasi Tes Kemampuan Akademik (TKA) Geografi";
                if (subInfo) subInfo.innerText = "TKA Geografi SMA • CBT Interaktif";
                if (topLinkPembahasan) topLinkPembahasan.href = `/tka/pembahasan.html?mapel=geografi`;
                if (tab1) tab1.innerHTML = `<span>📄 Paket 1 (Resmi 2025 &bull; 30 Soal)</span>`;
                if (tab2) tab2.innerHTML = `<span>✨ Paket 2 (Segera Hadir)</span>`;
            }"""
if target_ui in sim_content:
    sim_content = sim_content.replace(target_ui, new_ui)

# Update mapelName in submitExam
old_mapel_name = "((currentMapelKey === 'sosiologi') ? 'Sosiologi' : 'Kimia')))))"
new_mapel_name = "((currentMapelKey === 'sosiologi') ? 'Sosiologi' : ((currentMapelKey === 'geografi') ? 'Geografi' : 'Kimia'))))))"
if old_mapel_name in sim_content:
    sim_content = sim_content.replace(old_mapel_name, new_mapel_name)

# Update kompleks_bs radio options to use item.kolom
old_kbs_sim = """            } else if (item.tipe === 'kompleks_bs') {
                const currentObj = (typeof savedAns === 'object' && savedAns !== null) ? savedAns : {};
                optContainer.innerHTML = item.items.map((it, idx) => `
                    <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <div class="text-xs sm:text-sm text-slate-800 font-medium"><strong>Pernyataan ${idx + 1}:</strong> ${it.pernyataan}</div>
                        <div class="flex items-center gap-4 text-xs font-semibold">
                            <label class="flex items-center gap-1.5 cursor-pointer">
                                <input type="radio" name="bs-${item.id}-${idx}" value="Benar" class="accent-emerald-600" ${currentObj[idx] === 'Benar' ? 'checked' : ''} onchange="handleBsChange('${item.id}', ${idx}, 'Benar')">
                                <span class="text-emerald-700">Benar</span>
                            </label>
                            <label class="flex items-center gap-1.5 cursor-pointer">
                                <input type="radio" name="bs-${item.id}-${idx}" value="Salah" class="accent-rose-600" ${currentObj[idx] === 'Salah' ? 'checked' : ''} onchange="handleBsChange('${item.id}', ${idx}, 'Salah')">
                                <span class="text-rose-700">Salah</span>
                            </label>
                        </div>
                    </div>
                `).join('');
            }"""

new_kbs_sim = """            } else if (item.tipe === 'kompleks_bs') {
                const currentObj = (typeof savedAns === 'object' && savedAns !== null) ? savedAns : {};
                const optA = (item.kolom && item.kolom[0]) ? item.kolom[0] : 'Benar';
                const optB = (item.kolom && item.kolom[1]) ? item.kolom[1] : 'Salah';
                optContainer.innerHTML = item.items.map((it, idx) => `
                    <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <div class="text-xs sm:text-sm text-slate-800 font-medium"><strong>Pernyataan ${idx + 1}:</strong> ${it.pernyataan}</div>
                        <div class="flex items-center gap-4 text-xs font-semibold">
                            <label class="flex items-center gap-1.5 cursor-pointer">
                                <input type="radio" name="bs-${item.id}-${idx}" value="${optA}" class="accent-emerald-600" ${currentObj[idx] === optA ? 'checked' : ''} onchange="handleBsChange('${item.id}', ${idx}, '${optA}')">
                                <span class="text-emerald-700">${optA}</span>
                            </label>
                            <label class="flex items-center gap-1.5 cursor-pointer">
                                <input type="radio" name="bs-${item.id}-${idx}" value="${optB}" class="accent-rose-600" ${currentObj[idx] === optB ? 'checked' : ''} onchange="handleBsChange('${item.id}', ${idx}, '${optB}')">
                                <span class="text-rose-700">${optB}</span>
                            </label>
                        </div>
                    </div>
                `).join('');
            }"""

if old_kbs_sim in sim_content:
    sim_content = sim_content.replace(old_kbs_sim, new_kbs_sim)

with open('tka/simulasi.html', 'w', encoding='utf-8', newline='') as f:
    f.write(sim_content)
print("simulasi.html updated!")


# 2. Patch pembahasan.html
with open('tka/pembahasan.html', 'r', encoding='utf-8') as f:
    pem_content = f.read()

# Add script tag
if '<script src="/tka/data/mapel-geografi.js"></script>' not in pem_content:
    pem_content = pem_content.replace(
        '<script src="/tka/data/mapel-sosiologi.js"></script>',
        '<script src="/tka/data/mapel-sosiologi.js"></script>\n  <script src="/tka/data/mapel-geografi.js"></script>'
    )

# Add activePackages check
target_pem_act = """} else if (currentMapelKey === 'sosiologi' && typeof window.tkaSosiologiPackages !== 'undefined') {
            activePackages = window.tkaSosiologiPackages;
        }"""
new_pem_act = """} else if (currentMapelKey === 'sosiologi' && typeof window.tkaSosiologiPackages !== 'undefined') {
            activePackages = window.tkaSosiologiPackages;
        } else if (currentMapelKey === 'geografi' && typeof window.tkaGeografiPackages !== 'undefined') {
            activePackages = window.tkaGeografiPackages;
        }"""
if target_pem_act in pem_content and "currentMapelKey === 'geografi'" not in pem_content:
    pem_content = pem_content.replace(target_pem_act, new_pem_act)

# Add updateMapelUI in pembahasan.html
target_pem_ui = """} else if (currentMapelKey === 'sosiologi') {
                document.title = "Bank Soal & Pembahasan TKA Sosiologi SMA 2025/2026 - KimiaInteraktif";
                if (titleEl) titleEl.innerText = "👥 Soal & Pembahasan TKA Sosiologi SMA 2025/2026";
                if (subtitleEl) subtitleEl.innerText = "Koleksi 55 butir soal resmi & try out TKA Sosiologi SMA 2025/2026 (Paket 1 & Paket 2) beserta kunci jawaban dan analisis sosiologis mendalam step-by-step.";
                if (tab1) tab1.innerHTML = `<span>📄 Paket 1 (Resmi 2025 &bull; 30 Soal)</span>`;
                if (tab2) tab2.innerHTML = `<span>✨ Paket 2 (Try Out HOTS 2025/2026 &bull; 25 Soal)</span>`;
            }"""
new_pem_ui = """} else if (currentMapelKey === 'sosiologi') {
                document.title = "Bank Soal & Pembahasan TKA Sosiologi SMA 2025/2026 - KimiaInteraktif";
                if (titleEl) titleEl.innerText = "👥 Soal & Pembahasan TKA Sosiologi SMA 2025/2026";
                if (subtitleEl) subtitleEl.innerText = "Koleksi 55 butir soal resmi & try out TKA Sosiologi SMA 2025/2026 (Paket 1 & Paket 2) beserta kunci jawaban dan analisis sosiologis mendalam step-by-step.";
                if (tab1) tab1.innerHTML = `<span>📄 Paket 1 (Resmi 2025 &bull; 30 Soal)</span>`;
                if (tab2) tab2.innerHTML = `<span>✨ Paket 2 (Try Out HOTS 2025/2026 &bull; 25 Soal)</span>`;
            } else if (currentMapelKey === 'geografi') {
                document.title = "Bank Soal & Pembahasan TKA Geografi SMA 2025/2026 - KimiaInteraktif";
                if (titleEl) titleEl.innerText = "🗺️ Soal & Pembahasan TKA Geografi SMA 2025/2026";
                if (subtitleEl) subtitleEl.innerText = "Koleksi 30 butir soal resmi TKA Geografi SMA 2025 beserta kunci jawaban dan analisis geospasial ilmiah mendalam step-by-step.";
                if (tab1) tab1.innerHTML = `<span>📄 Paket 1 (Resmi 2025 &bull; 30 Soal)</span>`;
                if (tab2) tab2.innerHTML = `<span>✨ Paket 2 (Segera Hadir)</span>`;
            }"""
if target_pem_ui in pem_content:
    pem_content = pem_content.replace(target_pem_ui, new_pem_ui)

with open('tka/pembahasan.html', 'w', encoding='utf-8', newline='') as f:
    f.write(pem_content)
print("pembahasan.html updated!")
