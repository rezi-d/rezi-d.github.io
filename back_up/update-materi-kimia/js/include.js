// =================================================================
// js/include.js — Memuat komponen bersama (header, footer, sidebar,
// modal SPU) ke dalam setiap halaman lewat fetch(), lalu menandai
// menu sidebar yang sedang aktif sesuai nama file halaman saat ini.
//
// CATATAN: fetch() ke file lokal butuh server (mis. Live Server).
// Jika dibuka langsung lewat file://, browser akan memblokirnya.
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
                ⚠️ Komponen "${url}" gagal dimuat. Pastikan halaman ini dibuka lewat
                <b>Live Server</b> (localhost), bukan dengan membuka file secara langsung.
            </div>`;
        console.error(`[include.js] Gagal memuat ${url}:`, err);
    }
}

// Menandai link sidebar yang sesuai dengan halaman yang sedang dibuka
function tandaiSidebarAktif() {
    const halamanIni = location.pathname.split('/').pop() || 'materi.html';
    document.querySelectorAll('.sidebar-link').forEach(link => {
        if (link.getAttribute('href') === halamanIni) {
            link.classList.add('bg-teal-50', 'text-teal-700', 'font-semibold');
            link.classList.remove('text-slate-600');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPartial('partials/header.html', 'header-placeholder');
    loadPartial('partials/footer.html', 'footer-placeholder');
    loadPartial('partials/sidebar.html', 'sidebar-placeholder', tandaiSidebarAktif);
    loadPartial('partials/spu-modal.html', 'spu-placeholder', () => {
        if (typeof initSpu === 'function') initSpu();
    });
});
