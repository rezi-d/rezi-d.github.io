/**
 * scripts/generate-seo.js
 * =================================================================
 * Script Otomatis Pembuat Sitemap.xml & Penyuntik Tag SEO/OpenGraph
 * berdasarkan data di js/curriculum.js.
 *
 * Cara pakai manual (opsional):
 *   node scripts/generate-seo.js
 *
 * Otomatis dijalankan oleh GitHub Actions (.github/workflows/auto-seo.yml)
 * setiap kali ada penambahan Bab / Sub-bab baru yang di-push ke GitHub.
 * =================================================================
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOMAIN = 'https://kimia.ajarkita.my.id';
const SVG_FAVICON = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>';

// 1. Baca dan evaluasi js/curriculum.js
const curriculumPath = path.join(ROOT_DIR, 'js', 'curriculum.js');
const curriculumCode = fs.readFileSync(curriculumPath, 'utf8');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(curriculumCode + '\n;this.kurikulum = kurikulum; this.modulLain = modulLain;', sandbox);

const kurikulum = sandbox.kurikulum;
if (!kurikulum) {
    console.error('❌ Gagal membaca objek `kurikulum` dari js/curriculum.js');
    process.exit(1);
}

// 2. Kumpulkan seluruh URL untuk sitemap.xml dan periksa file HTML sub-bab
const urls = [
    { loc: `${DOMAIN}/`, changefreq: 'weekly', priority: '1.0' }
];

let updatedHtmlCount = 0;

for (const [kelasId, dataKelas] of Object.entries(kurikulum)) {
    const kelasLabel = dataKelas.label || `Kelas ${kelasId}`;
    urls.push({
        loc: `${DOMAIN}/kelas-${kelasId}/index.html`,
        changefreq: 'weekly',
        priority: '0.9'
    });

    if (!Array.isArray(dataKelas.bab)) continue;

    for (const bab of dataKelas.bab) {
        if (!Array.isArray(bab.subbab)) continue;

        for (const sub of bab.subbab) {
            const relPath = `kelas-${kelasId}/${bab.slug}/${sub.file}`;
            const fullUrl = `${DOMAIN}/${relPath}`;
            urls.push({
                loc: fullUrl,
                changefreq: 'monthly',
                priority: '0.8'
            });

            // Periksa apakah file HTML sub-bab sudah ada di disk
            const htmlFilePath = path.join(ROOT_DIR, 'kelas-' + kelasId, bab.slug, sub.file);
            if (fs.existsSync(htmlFilePath)) {
                const changed = ensureHtmlSeoTags(htmlFilePath, {
                    kelasLabel,
                    babTitle: bab.title,
                    babDeskripsi: bab.deskripsi || '',
                    subTitle: sub.title,
                    fullUrl
                });
                if (changed) updatedHtmlCount++;
            }
        }
    }
}

// 3. Tulis ulang sitemap.xml
const sitemapLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

for (const u of urls) {
    sitemapLines.push('    <url>');
    sitemapLines.push(`        <loc>${u.loc}</loc>`);
    sitemapLines.push(`        <changefreq>${u.changefreq}</changefreq>`);
    sitemapLines.push(`        <priority>${u.priority}</priority>`);
    sitemapLines.push('    </url>');
}
sitemapLines.push('</urlset>');
sitemapLines.push('');

const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
const newSitemapContent = sitemapLines.join('\n');
const oldSitemapContent = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';

if (newSitemapContent.replace(/\r\n/g, '\n') !== oldSitemapContent.replace(/\r\n/g, '\n')) {
    fs.writeFileSync(sitemapPath, newSitemapContent, 'utf8');
    console.log(`✅ sitemap.xml diperbarui (${urls.length} URL terdaftar).`);
} else {
    console.log(`ℹ️ sitemap.xml sudah mutakhir (${urls.length} URL).`);
}

if (updatedHtmlCount > 0) {
    console.log(`✅ ${updatedHtmlCount} file HTML baru otomatis dilengkapi tag SEO & Open Graph.`);
} else {
    console.log('ℹ️ Seluruh file HTML materi sudah memiliki tag SEO & Open Graph lengkap.');
}

/**
 * Memastikan file HTML memiliki <title> yang sesuai, Favicon 🧪,
 * <meta name="description">, <link rel="canonical">, dan Open Graph (og:*).
 */
function ensureHtmlSeoTags(filePath, info) {
    let html = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const pageTitle = `${info.subTitle} - ${info.babTitle} ${info.kelasLabel} | KimiaInteraktif`;
    const ogTitle = `🧪 ${info.subTitle} — ${info.babTitle} (${info.kelasLabel})`;

    // Ekstrak paragraf pengantar pertama dari <article> jika ada, atau gunakan deskripsi bab
    let description = `Pelajari materi ${info.subTitle} pada bab ${info.babTitle} (${info.kelasLabel} SMA) lengkap dengan simulasi interaktif dan latihan soal auto-koreksi. ${info.babDeskripsi}`.trim();
    if (description.length > 200) {
        description = description.slice(0, 197) + '...';
    }
    const safeDesc = description.replace(/"/g, '&quot;');
    const safeOgTitle = ogTitle.replace(/"/g, '&quot;');

    // 1. Perbaiki <title> jika masih template "Modul Materi"
    if (/<title>\s*Modul Materi[^<]*<\/title>/i.test(html)) {
        html = html.replace(/<title>\s*Modul Materi[^<]*<\/title>/i, `<title>${pageTitle}</title>`);
        modified = true;
    }

    // 2. Perbaiki Favicon kosong <link rel="icon" href="data:,">
    if (html.includes('<link rel="icon" href="data:,">')) {
        html = html.replace('<link rel="icon" href="data:,">', `<link rel="icon" href="${SVG_FAVICON}">`);
        modified = true;
    }

    // 3. Jika belum ada <meta property="og:title">, suntikkan paket SEO + Open Graph tepat setelah <title>...</title>
    if (!html.includes('property="og:title"')) {
        const seoBlock = [
            `    <meta name="description" content="${safeDesc}">`,
            `    <meta name="robots" content="index, follow">`,
            `    <link rel="canonical" href="${info.fullUrl}">`,
            `    <meta property="og:type" content="article">`,
            `    <meta property="og:site_name" content="KimiaInteraktif">`,
            `    <meta property="og:locale" content="id_ID">`,
            `    <meta property="og:url" content="${info.fullUrl}">`,
            `    <meta property="og:title" content="${safeOgTitle}">`,
            `    <meta property="og:description" content="${safeDesc}">`
        ].join('\n');

        if (/<\/title>/i.test(html)) {
            html = html.replace(/<\/title>/i, `</title>\n${seoBlock}`);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`   ✨ Auto-SEO ditambahkan ke: ${path.relative(ROOT_DIR, filePath)}`);
    }

    return modified;
}
