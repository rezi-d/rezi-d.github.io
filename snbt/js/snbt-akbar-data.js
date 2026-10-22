// =================================================================
// snbt/js/snbt-akbar-data.js
// Single Source of Truth - Try Out Akbar SNBT 2026 (Fitur Premium)
// Maraton 7 Subtes Sekaligus: PU, PBM, PPU, PK, LBI, LBE, PM
// =================================================================

// Catatan: isi soal Try Out Akbar PREMIUM dilayani oleh API lisensi.
const snbtTryOutAkbar = [{"id":1,"judul":"Try Out Akbar SNBT 2026 - Edisi Standar Nasional (Gelombang 1)","deskripsi":"Simulasi penuh 7 subtes UTBK maraton dalam satu sesi ujian terstandar. Menguji ketahanan fokus, manajemen waktu, dan penalaran holistik.","status":"premium","totalSoal":70,"durasiTotalMenit":105,"tahun":"2026","subtesList":["pu","pbm","ppu","pk","lbi","lbe","pm"],"subtesData":{"pu":{"nama":"Penalaran Umum (PU)","durasiMenit":15,"jumlahSoal":10},"pbm":{"nama":"Pemahaman Bacaan & Menulis (PBM)","durasiMenit":15,"jumlahSoal":10},"ppu":{"nama":"Pengetahuan & Pemahaman Umum (PPU)","durasiMenit":15,"jumlahSoal":10},"pk":{"nama":"Pengetahuan Kuantitatif (PK)","durasiMenit":15,"jumlahSoal":10},"lbi":{"nama":"Literasi Bahasa Indonesia","durasiMenit":15,"jumlahSoal":10},"lbe":{"nama":"Literasi Bahasa Inggris","durasiMenit":15,"jumlahSoal":10},"pm":{"nama":"Penalaran Matematika (PM)","durasiMenit":15,"jumlahSoal":10}}},{"id":2,"judul":"Try Out Akbar SNBT 2026 - Edisi Prediksi Tingkat Lanjut (Gelombang 2)","deskripsi":"Simulasi maraton tingkat lanjut dengan variasi soal penalaran analitis mendalam, literasi teks ilmiah, dan pemodelan optimasi matematika.","status":"premium","totalSoal":70,"durasiTotalMenit":105,"tahun":"2026","subtesList":["pu","pbm","ppu","pk","lbi","lbe","pm"],"subtesData":{"pu":{"nama":"Penalaran Umum (PU)","durasiMenit":15,"jumlahSoal":10},"pbm":{"nama":"Pemahaman Bacaan & Menulis (PBM)","durasiMenit":15,"jumlahSoal":10},"ppu":{"nama":"Pengetahuan & Pemahaman Umum (PPU)","durasiMenit":15,"jumlahSoal":10},"pk":{"nama":"Pengetahuan Kuantitatif (PK)","durasiMenit":15,"jumlahSoal":10},"lbi":{"nama":"Literasi Bahasa Indonesia","durasiMenit":15,"jumlahSoal":10},"lbe":{"nama":"Literasi Bahasa Inggris","durasiMenit":15,"jumlahSoal":10},"pm":{"nama":"Penalaran Matematika (PM)","durasiMenit":15,"jumlahSoal":10}}}];

function getSnbtAkbar(toId) {
    return snbtTryOutAkbar.find(t => t.id === parseInt(toId)) || null;
}
