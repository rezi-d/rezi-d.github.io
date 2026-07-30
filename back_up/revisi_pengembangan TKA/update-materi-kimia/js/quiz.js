// =================================================================
// js/quiz.js — Fungsi Auto-Koreksi Latihan Soal (Komponen Bersama)
// Dipakai di semua sub-bab: pasang sekali per soal, otomatis
// memeriksa jawaban 2 detik setelah pengguna berhenti mengetik.
// =================================================================

/**
 * Memasang auto-koreksi pada satu kolom input jawaban.
 * @param {string} idInput       - id elemen <input> jawaban pengguna
 * @param {string} idStatus      - id elemen <span>/<p> untuk pesan status
 * @param {string} idPembahasan  - id elemen pembahasan (ditampilkan setelah dicek)
 * @param {number} jawabanBenar  - nilai jawaban yang benar
 * @param {string} pesanSukses   - pesan yang tampil jika jawaban benar
 * @param {number} [toleransi=0.05] - toleransi pembulatan yang diizinkan
 */
function pasangAutoKoreksi(idInput, idStatus, idPembahasan, jawabanBenar, pesanSukses, toleransi = 0.05) {
    const inputEl = document.getElementById(idInput);
    const statusEl = document.getElementById(idStatus);
    const pembahasanEl = idPembahasan ? document.getElementById(idPembahasan) : null;
    if (!inputEl || !statusEl) return;

    let timerKoreksi;

    inputEl.addEventListener('input', function () {
        clearTimeout(timerKoreksi);
        const nilaiInput = parseFloat(inputEl.value);

        if (isNaN(nilaiInput)) {
            statusEl.innerText = '';
            statusEl.className = 'text-xs mt-2 min-h-[20px] font-medium';
            if (pembahasanEl) pembahasanEl.classList.add('hidden');
            return;
        }

        statusEl.innerText = '⏳ Memeriksa jawaban...';
        statusEl.className = 'text-xs mt-2 min-h-[20px] font-medium text-amber-600';

        timerKoreksi = setTimeout(() => {
            if (Math.abs(nilaiInput - jawabanBenar) <= toleransi) {
                statusEl.innerText = pesanSukses;
                statusEl.className = 'text-xs mt-2 min-h-[20px] font-semibold text-emerald-600';
            } else {
                statusEl.innerText = '❌ Jawaban belum tepat. Coba periksa kembali perhitungan Anda.';
                statusEl.className = 'text-xs mt-2 min-h-[20px] font-semibold text-rose-600';
            }
            if (pembahasanEl) pembahasanEl.classList.remove('hidden');
        }, 2000);
    });
}
