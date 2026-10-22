// =================================================================
// snbt/js/snbt-license.js
// Sistem Lisensi Paket Premium SNBT 30 Hari (Rp 25.000)
// Algoritma Token Unik Berbasis Nomor WhatsApp (Anti-Bagi-Pakai)
// =================================================================

const SNBT_SALT = "KIMIA_SNBT_2026_PREMIUM_AUTH_KEY";
const SNBT_PRICE = "Rp 25.000";
const SNBT_DURATION_DAYS = 30;
const SNBT_WA_ADMIN = "6285266601477";

// Algoritma Hashing Cepat & Deterministik
function snbtHash(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        hash = hash & hash;
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(6, '0');
    return hex.slice(0, 4);
}

// Generate Token dari Nomor WhatsApp
function snbtGenerateToken(phone) {
    if (!phone) return "";
    const cleanPhone = phone.toString().replace(/\D/g, '');
    if (cleanPhone.length < 8) return "";
    const last4 = cleanPhone.slice(-4);
    const code = snbtHash(cleanPhone + SNBT_SALT);
    return `SNBT25-${last4}-${code}`;
}

// Validasi Token
function snbtValidateToken(phone, token) {
    if (!phone || !token) return false;
    const expected = snbtGenerateToken(phone);
    const cleanToken = token.trim().toUpperCase();
    return expected !== "" && expected === cleanToken;
}

// Cek Apakah Akun Premium Sedang Aktif
function snbtIsPremiumActive() {
    try {
        const phone = localStorage.getItem('snbt_premium_phone');
        const token = localStorage.getItem('snbt_premium_token');
        const expiresAt = parseInt(localStorage.getItem('snbt_premium_expires_at'), 10);

        if (!phone || !token || !expiresAt) return false;

        // Cek kedaluwarsa (30 hari)
        if (Date.now() > expiresAt) {
            return false;
        }

        // Cek keabsahan matematis token
        return snbtValidateToken(phone, token);
    } catch (e) {
        return false;
    }
}

// Ambil Sisa Hari Aktif
function snbtGetRemainingDays() {
    try {
        const expiresAt = parseInt(localStorage.getItem('snbt_premium_expires_at'), 10);
        if (!expiresAt) return 0;
        const diffMs = expiresAt - Date.now();
        if (diffMs <= 0) return 0;
        return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    } catch (e) {
        return 0;
    }
}

// Format Tanggal Berakhir
function snbtGetExpiryDateFormatted() {
    try {
        const expiresAt = parseInt(localStorage.getItem('snbt_premium_expires_at'), 10);
        if (!expiresAt) return "-";
        const d = new Date(expiresAt);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return d.toLocaleDateString('id-ID', options);
    } catch (e) {
        return "-";
    }
}

// Aktivasi Lisensi
function snbtActivateLicense(phone, token) {
    const cleanPhone = phone.toString().replace(/\D/g, '');
    const cleanToken = token.trim().toUpperCase();

    if (!snbtValidateToken(cleanPhone, cleanToken)) {
        return {
            success: false,
            message: "Nomor WhatsApp dan Kode Token tidak cocok! Pastikan nomor telepon yang dimasukkan sama persis dengan yang didaftarkan ke Admin."
        };
    }

    const now = Date.now();
    const expiry = now + (SNBT_DURATION_DAYS * 24 * 60 * 60 * 1000);

    localStorage.setItem('snbt_premium_phone', cleanPhone);
    localStorage.setItem('snbt_premium_token', cleanToken);
    localStorage.setItem('snbt_premium_activated_at', now.toString());
    localStorage.setItem('snbt_premium_expires_at', expiry.toString());

    return {
        success: true,
        remainingDays: SNBT_DURATION_DAYS,
        expiryDate: snbtGetExpiryDateFormatted()
    };
}

// =================================================================
// UI MODAL PREMIUM
// =================================================================
function snbtOpenPremiumModal(subtesNama = "", paketNomor = "") {
    let modal = document.getElementById('snbt-premium-modal');
    if (!modal) {
        snbtInjectPremiumModal();
        modal = document.getElementById('snbt-premium-modal');
    }

    const subtesSpan = document.getElementById('modal-subtes-info');
    if (subtesSpan && subtesNama) {
        subtesSpan.textContent = `${subtesNama} - Paket ${paketNomor}`;
        subtesSpan.parentElement.classList.remove('hidden');
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function snbtClosePremiumModal() {
    const modal = document.getElementById('snbt-premium-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

function snbtInjectPremiumModal() {
    if (document.getElementById('snbt-premium-modal')) return;

    const modalHtml = `
    <div id="snbt-premium-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <div class="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            <!-- HEADER MODAL -->
            <div class="relative bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white p-6 sm:p-7">
                <button type="button" onclick="snbtClosePremiumModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition">
                    ✕
                </button>
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold uppercase tracking-wider mb-2">
                    <span>⭐</span> <span>Akses Eksklusif SNBT 2026</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black tracking-tight">
                    Buka Seluruh Paket Soal Premium
                </h3>
                <p class="text-xs sm:text-sm text-amber-100 mt-1 leading-relaxed">
                    Tingkatkan peluang lolos PTN impian dengan akses tak terbatas ke seluruh paket soal prediksi &amp; pembahasan mendalam.
                </p>
                <div class="hidden mt-3 inline-block px-3 py-1 rounded-lg bg-black/20 text-xs text-white font-medium">
                    Target: <span id="modal-subtes-info" class="font-bold"></span>
                </div>
            </div>

            <!-- ISI MODAL -->
            <div class="p-6 sm:p-7 space-y-6">
                
                <!-- KARTU HARGA PROMO -->
                <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between">
                    <div>
                        <span class="text-xs text-slate-500 line-through">Harga Normal: Rp 75.000</span>
                        <div class="flex items-baseline gap-1 mt-0.5">
                            <span class="text-2xl sm:text-3xl font-black text-amber-900">${SNBT_PRICE}</span>
                            <span class="text-xs text-slate-600 font-semibold">/ 30 Hari</span>
                        </div>
                        <span class="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-200/70 text-amber-900">
                            🔥 All-Access Lulus PTN &middot; Hemat 66%
                        </span>
                    </div>
                    <div class="text-right text-xs text-slate-600 space-y-1">
                        <div class="flex items-center gap-1 text-emerald-700 font-semibold justify-end">
                            <span>✓</span> Semua 35 Paket 7 Subtes
                        </div>
                        <div class="flex items-center gap-1 text-emerald-700 font-semibold justify-end">
                            <span>✓</span> Try Out Akbar Maraton
                        </div>
                        <div class="flex items-center gap-1 text-emerald-700 font-semibold justify-end">
                            <span>✓</span> Rapor Skor UTBK &amp; Pembahasan
                        </div>
                    </div>
                </div>

                <!-- TABS: CARA PEMBAYARAN vs AKTIVASI TOKEN -->
                <div class="space-y-4">
                    <div class="flex rounded-xl bg-slate-100 p-1 text-xs font-bold text-slate-600">
                        <button type="button" id="tab-btn-pay" onclick="snbtSwitchTab('pay')" class="flex-1 py-2 rounded-lg bg-white text-slate-900 shadow-2xs transition">
                            1. Bayar via QRIS (${SNBT_PRICE})
                        </button>
                        <button type="button" id="tab-btn-token" onclick="snbtSwitchTab('token')" class="flex-1 py-2 rounded-lg hover:text-slate-900 transition">
                            2. Masukkan Kode Lisensi
                        </button>
                    </div>

                    <!-- KONTEN TAB 1: BAYAR QRIS -->
                    <div id="tab-content-pay" class="space-y-4 text-center">
                        <p class="text-xs text-slate-600">
                            Scan QRIS di bawah menggunakan <strong>GoPay, OVO, Dana, ShopeePay, BCA, atau Mobile Banking</strong> apa saja:
                        </p>
                        <div class="p-3 bg-white border-2 border-dashed border-slate-200 rounded-2xl inline-block shadow-xs">
                            <img src="/img/qris.png" alt="QRIS Pembayaran SNBT" class="w-48 h-auto mx-auto rounded-lg">
                        </div>
                        <div class="space-y-2 pt-1">
                            <a href="https://wa.me/${SNBT_WA_ADMIN}?text=Halo%20Admin,%20saya%20sudah%20transfer%20Rp25.000%20via%20QRIS%20untuk%20Aktivasi%20Paket%20Premium%20SNBT%20(30%20Hari).%20Mohon%20kode%20lisensinya%20ya!" target="_blank" rel="noopener" class="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition">
                                <span>💬</span>
                                <span>Konfirmasi Transfer ke WhatsApp Admin</span>
                            </a>
                            <p class="text-[11px] text-slate-400">
                                Setelah kirim bukti transfer, Admin akan langsung membalas dengan Kode Token unik untuk nomor Anda.
                            </p>
                        </div>
                    </div>

                    <!-- KONTEN TAB 2: INPUT TOKEN AKTIVASI -->
                    <div id="tab-content-token" class="hidden space-y-4">
                        <div class="space-y-3">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                                    Nomor WhatsApp Anda:
                                </label>
                                <input type="tel" id="input-license-phone" placeholder="Contoh: 081234567890" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-mono">
                                <span class="text-[11px] text-slate-400">Masukkan nomor WA yang Anda daftarkan ke Admin.</span>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                                    Kode Token Lisensi:
                                </label>
                                <input type="text" id="input-license-token" placeholder="Contoh: SNBT25-7890-C4B1" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-mono uppercase tracking-wider">
                                <span class="text-[11px] text-slate-400">Kode unik yang diberikan Admin via WhatsApp.</span>
                            </div>
                        </div>

                        <div id="license-feedback" class="text-xs min-h-[16px] font-semibold"></div>

                        <button type="button" onclick="snbtSubmitActivation()" class="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition">
                            <span>🚀</span>
                            <span>Aktifkan Akses Premium (30 Hari)</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
}

function snbtSwitchTab(tab) {
    const btnPay = document.getElementById('tab-btn-pay');
    const btnToken = document.getElementById('tab-btn-token');
    const contentPay = document.getElementById('tab-content-pay');
    const contentToken = document.getElementById('tab-content-token');

    if (tab === 'pay') {
        btnPay.className = "flex-1 py-2 rounded-lg bg-white text-slate-900 shadow-2xs transition";
        btnToken.className = "flex-1 py-2 rounded-lg hover:text-slate-900 transition";
        contentPay.classList.remove('hidden');
        contentToken.classList.add('hidden');
    } else {
        btnToken.className = "flex-1 py-2 rounded-lg bg-white text-slate-900 shadow-2xs transition";
        btnPay.className = "flex-1 py-2 rounded-lg hover:text-slate-900 transition";
        contentToken.classList.remove('hidden');
        contentPay.classList.add('hidden');
    }
}

function snbtSubmitActivation() {
    const elPhone = document.getElementById('input-license-phone');
    const elToken = document.getElementById('input-license-token');
    const elFb = document.getElementById('license-feedback');

    if (!elPhone || !elToken || !elFb) return;

    const phone = elPhone.value.trim();
    const token = elToken.value.trim();

    if (!phone || !token) {
        elFb.innerHTML = `<span class="text-rose-600">Harap isi nomor WhatsApp dan kode token lisensi!</span>`;
        return;
    }

    const res = snbtActivateLicense(phone, token);
    if (res.success) {
        elFb.innerHTML = `<span class="text-emerald-700 font-bold">🎉 Berhasil! Akun Premium Anda aktif selama 30 hari (hingga ${res.expiryDate}). Seluruh paket terbuka!</span>`;
        setTimeout(() => {
            snbtClosePremiumModal();
            location.reload();
        }, 1500);
    } else {
        elFb.innerHTML = `<span class="text-rose-600">${res.message}</span>`;
    }
}

// Inisialisasi otomatis jika DOM siap
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        snbtInjectPremiumModal();
    });
}

// Alias global untuk kompatibilitas nama fungsi
if (typeof window !== 'undefined') {
    window.openSnbtPremiumModal = snbtOpenPremiumModal;
    window.closeSnbtPremiumModal = snbtClosePremiumModal;
}

