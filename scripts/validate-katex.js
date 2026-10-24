/**
 * validate-katex.js
 * Memverifikasi integritas sintaks KaTeX / LaTeX di seluruh file HTML materi.
 * Mencegah terulangnya karakter kontrol seperti Form-Feed (\x0c), Tab (\t), 
 * atau backslash terpotong dari string escape generator.
 */

const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (['node_modules', '.git', 'worker', 'dist'].some(skip => fullPath.includes(skip))) continue;
        
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            getHtmlFiles(fullPath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = getHtmlFiles(rootDir);

let totalErrors = 0;
let checkedFiles = 0;

console.log('🔍 Memulai Validasi KaTeX & Integritas Rumus Kimia...');

for (const filePath of htmlFiles) {
    const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf-8');

    // Hanya periksa file yang memuat katex atau rumus ($)
    if (!content.includes('katex') && !content.includes('$')) continue;
    checkedFiles++;

    // 1. Cek karakter Form Feed (\x0c) yang menghasilkan ↾rac
    if (content.includes('\x0c') || content.includes('↾')) {
        console.error(`❌ [${relativePath}]: Ditemukan karakter Form-Feed (\\x0c) atau pecahan rusak (↾rac)!`);
        totalErrors++;
    }

    // 2. Cek tab escape (\x09) yang merusak \text atau \times
    if (content.includes('\x09ext') || content.includes('\x09imes')) {
        console.error(`❌ [${relativePath}]: Ditemukan karakter tab (\\t) di dalam perintah \\text atau \\times!`);
        totalErrors++;
    }

    // 3. Cek unescaped control newline pada \rho, \rightarrow
    if (content.match(/[\r\n]+ho\b/) || content.match(/[\r\n]+ightarrow\b/)) {
        console.error(`❌ [${relativePath}]: Ditemukan newline tidak wajar pada simbol LaTeX (\\rho atau \\rightarrow)!`);
        totalErrors++;
    }

    // 4. Cek rumus tanpa backslash umum di dalam konten luar script
    const noScript = content.replace(/<script[\s\S]*?<\/script>/gi, '');
    
    // Cek Delta tanpa backslash di dalam $ ... $
    const brokenDelta = noScript.match(/(\$\$|\$)[^$]*?(?<!\\)Delta\s+[TP][^$]*?(\$\$|\$)/);
    if (brokenDelta) {
        console.error(`❌ [${relativePath}]: Ditemukan 'Delta' tanpa backslash: "${brokenDelta[0]}"!`);
        totalErrors++;
    }

    // Cek ^circ tanpa backslash di dalam $ ... $
    const brokenCirc = noScript.match(/(\$\$|\$)[^$]*?(?<!\\)\^circ\b[^$]*?(\$\$|\$)/);
    if (brokenCirc) {
        console.error(`❌ [${relativePath}]: Ditemukan '^circ' tanpa backslash: "${brokenCirc[0]}"!`);
        totalErrors++;
    }
}

console.log('=============================================');
if (totalErrors === 0) {
    console.log(`🎉 BERHASIL: ${checkedFiles} file diperiksa, 0 error KaTeX ditemukan!`);
    console.log('✅ Semua rumus LaTeX aman dari karakter kontrol dan escape bug.');
} else {
    console.error(`❌ GAGAL: Ditemukan ${totalErrors} potensi error sintaks KaTeX!`);
    process.exit(1);
}
console.log('=============================================');
