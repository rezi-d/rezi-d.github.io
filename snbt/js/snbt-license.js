// =================================================================
// snbt/js/snbt-license.js
// Sistem Lisensi Paket Premium SNBT 30 Hari (Rp 25.000)
// Validasi Server-Side via Cloudflare Worker + D1 (Anti-Bypass)
// =================================================================

const SNBT_API_URL = "https://kimia-snbt-api.kimia-ajarkita.workers.dev";
const SNBT_PRICE = "Rp 25.000";
const SNBT_DURATION_DAYS = 30;
const SNBT_WA_ADMIN = "6285266601477";

// Ambil atau buat ID perangkat unik (tersimpan di browser ini)
function snbtGetDeviceId() {
    const KEY = 'snbt_device_id';
    try {
        let id = localStorage.getItem(KEY);
        if (id && /^[A-Za-z0-9_-]{16,64}$/.test(id)) return id;
        const bytes = new Uint8Array(18);
        crypto.getRandomValues(bytes);
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
        id = 'dev_' + Array.from(bytes, (b) => chars[b % chars.length]).join('');
        localStorage.setItem(KEY, id);
        return id;
    } catch (e) {
        return 'dev_fallback_' + Math.random().toString(36).slice(2, 18);
    }
}

function snbtClearLocalLicense() {
    try {
        localStorage.removeItem('snbt_premium_token');
        localStorage.removeItem('snbt_premium_expires_at');
        localStorage.removeItem('snbt_premium_activated_at');
    } catch (e) {}
}

// Cek cepat untuk tampilan UI (kebenaran sesungguhnya diverifikasi di server saat ambil soal)
function snbtIsPremiumActive() {
    try {
        const token = localStorage.getItem('snbt_premium_token');
        const expiresAt = parseInt(localStorage.getItem('snbt_premium_expires_at'), 10);
        if (!token || !expiresAt) return false;
        if (!/^SNBT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(token)) return false;
        if (Date.now() > expiresAt) return false;
        return true;
    } catch (e) {
        return false;
    }
}

// Sinkronisasi status lisensi dengan server di latar belakang
async function snbtVerifyWithServer() {
    const token = localStorage.getItem('snbt_premium_token');
    if (!token) return false;
    try {
        const res = await fetch(`${SNBT_API_URL}/activate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, deviceId: snbtGetDeviceId() })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
            snbtClearLocalLicense();
            return false;
        }
        localStorage.setItem('snbt_premium_expires_at', String(data.expiresAt));
        return true;
    } catch (e) {
        return snbtIsPremiumActive();
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

// Aktivasi Lisensi ke Server Cloudflare Worker + D1
async function snbtActivateLicense(phone, token) {
    const cleanPhone = (phone || '').toString().replace(/\D/g, '');
    const cleanToken = (token || '').trim().toUpperCase();

    if (!/^SNBT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(cleanToken)) {
        return {
            success: false,
            message: "Format Kode Token tidak valid (contoh format: SNBT-XXXX-XXXX-XXXX)."
        };
    }

    try {
        const res = await fetch(`${SNBT_API_URL}/activate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: cleanToken,
                deviceId: snbtGetDeviceId()
            })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
            return {
                success: false,
                message: data.error || "Kode token tidak valid atau sudah kedaluwarsa."
            };
        }

        if (cleanPhone) localStorage.setItem('snbt_premium_phone', cleanPhone);
        localStorage.setItem('snbt_premium_token', cleanToken);
        localStorage.setItem('snbt_premium_activated_at', Date.now().toString());
        localStorage.setItem('snbt_premium_expires_at', String(data.expiresAt));

        return {
            success: true,
            remainingDays: data.remainingDays,
            expiryDate: snbtGetExpiryDateFormatted()
        };
    } catch (err) {
        return {
            success: false,
            message: "Gagal menghubungi server lisensi. Periksa koneksi internet Anda lalu coba lagi."
        };
    }
}

// Ambil paket soal (paket gratis dari snbt-data.js, paket premium dari Worker)
async function snbtLoadSoalList(subtesId, paketId) {
    const paket = typeof getSnbtPaket === 'function' ? getSnbtPaket(subtesId, paketId) : null;
    if (!paket) throw new Error('Paket soal tidak ditemukan.');

    if (paket.status !== 'premium') {
        const list = typeof getSnbtSoalList === 'function' ? getSnbtSoalList(subtesId, paketId) : [];
        return list;
    }

    const token = localStorage.getItem('snbt_premium_token') || '';
    if (!token) {
        const err = new Error('Paket ini khusus untuk pengguna Premium. Silakan aktifkan lisensi Anda terlebih dahulu.');
        err.needPremium = true;
        throw err;
    }

    const res = await fetch(`${SNBT_API_URL}/paket/${encodeURIComponent(subtesId)}_${encodeURIComponent(paketId)}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'X-Device-Id': snbtGetDeviceId()
        }
    });

    if (!res.ok) {
        let msg = 'Lisensi tidak valid atau sudah kedaluwarsa.';
        try {
            const body = await res.json();
            if (body && body.error) msg = body.error;
        } catch (e) {}
        if (res.status === 401 || res.status === 403) snbtClearLocalLicense();
        const err = new Error(msg);
        err.needPremium = true;
        throw err;
    }

    return await res.json();
}

// Ambil data Try Out Akbar beserta seluruh butir soal dari Worker
async function snbtLoadAkbar(toId) {
    const meta = typeof getSnbtAkbar === 'function' ? getSnbtAkbar(toId) : null;
    if (!meta) throw new Error('Paket Try Out Akbar tidak ditemukan.');

    const token = localStorage.getItem('snbt_premium_token') || '';
    if (!token) {
        const err = new Error('Try Out Akbar SNBT merupakan fitur eksklusif Siswa Premium. Silakan aktifkan lisensi Anda terlebih dahulu.');
        err.needPremium = true;
        throw err;
    }

    const res = await fetch(`${SNBT_API_URL}/paket/akbar_${encodeURIComponent(toId)}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'X-Device-Id': snbtGetDeviceId()
        }
    });

    if (!res.ok) {
        let msg = 'Lisensi tidak valid atau sudah kedaluwarsa.';
        try {
            const body = await res.json();
            if (body && body.error) msg = body.error;
        } catch (e) {}
        if (res.status === 401 || res.status === 403) snbtClearLocalLicense();
        const err = new Error(msg);
        err.needPremium = true;
        throw err;
    }

    const payload = await res.json();
    return Object.assign({}, meta, { subtesData: payload.subtesData });
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
        subtesSpan.textContent = `${subtesNama} - ${paketNomor}`;
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
    <div id="snbt-premium-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-2.5 sm:p-4 bg-slate-950/70 backdrop-blur-sm" onclick="if(event.target===this)snbtClosePremiumModal()">
        <div class="relative w-full max-w-md max-h-[94vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <!-- HEADER MODAL RINGKAS (Tombol X selalu tampak jelas) -->
            <div class="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-4 py-3 shrink-0 flex items-center justify-between gap-2">
                <div class="min-w-0">
                    <div class="flex items-center gap-1.5">
                        <span class="text-sm">👑</span>
                        <h3 class="text-sm sm:text-base font-black tracking-tight truncate">
                            Akses Premium SNBT 2026
                        </h3>
                        <span class="hidden px-2 py-0.5 rounded bg-black/20 text-[10px] text-white font-semibold truncate">
                            <span id="modal-subtes-info"></span>
                        </span>
                    </div>
                    <p class="text-[11px] text-amber-50/95 leading-tight mt-0.5">
                        Buka semua 35+ paket soal, Try Out Akbar &amp; pembahasan lengkap
                    </p>
                </div>
                <button type="button" onclick="snbtClosePremiumModal()" title="Tutup (Esc)" class="w-7 h-7 rounded-full bg-black/25 hover:bg-black/40 text-white text-xs font-bold flex items-center justify-center shrink-0 transition cursor-pointer">
                    ✕
                </button>
            </div>

            <!-- ISI MODAL -->
            <div class="p-3.5 sm:p-4 space-y-2.5 overflow-y-auto">
                
                <!-- BAR HARGA PROMO RINGKAS -->
                <div class="px-3 py-2 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between gap-2">
                    <div class="flex items-baseline gap-1.5 flex-wrap">
                        <span class="text-lg sm:text-xl font-black text-amber-900">${SNBT_PRICE}</span>
                        <span class="text-[11px] text-slate-600 font-semibold">/ 30 Hari</span>
                        <span class="text-[10px] text-slate-400 line-through">Rp 75.000</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                        ✓ All-Access 35+ Paket &amp; TO Akbar
                    </span>
                </div>

                <!-- TABS: CARA PEMBAYARAN vs AKTIVASI TOKEN -->
                <div class="space-y-2.5">
                    <div class="flex rounded-xl bg-slate-100 p-1 text-xs font-bold text-slate-600">
                        <button type="button" id="tab-btn-pay" onclick="snbtSwitchTab('pay')" class="flex-1 py-1.5 rounded-lg bg-white text-slate-900 shadow-2xs transition cursor-pointer">
                            1. Scan QRIS (${SNBT_PRICE})
                        </button>
                        <button type="button" id="tab-btn-token" onclick="snbtSwitchTab('token')" class="flex-1 py-1.5 rounded-lg hover:text-slate-900 transition cursor-pointer">
                            2. Masukkan Kode Lisensi
                        </button>
                    </div>

                    <!-- KONTEN TAB 1: BAYAR QRIS (QRIS DIPERBESAR) -->
                    <div id="tab-content-pay" class="space-y-2 text-center">
                        <p class="text-[11px] text-slate-600 leading-tight">
                            Scan via <strong>GoPay, OVO, Dana, ShopeePay, BCA, atau M-Banking</strong>:
                        </p>
                        <div class="p-2 bg-white border border-slate-200 rounded-2xl inline-block shadow-xs">
                            <img src="/img/qris.png" alt="QRIS Pembayaran SNBT" class="w-56 sm:w-64 h-auto mx-auto rounded-lg">
                        </div>
                        <div class="space-y-1 pt-0.5">
                            <a href="https://wa.me/${SNBT_WA_ADMIN}?text=Halo%20Admin,%20saya%20sudah%20transfer%20Rp25.000%20via%20QRIS%20untuk%20Aktivasi%20Paket%20Premium%20SNBT%20(30%20Hari).%20Mohon%20kode%20lisensinya%20ya!" target="_blank" rel="noopener" class="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition">
                                <span>💬</span>
                                <span>Konfirmasi Transfer ke WhatsApp Admin</span>
                            </a>
                            <p class="text-[10px] text-slate-400 leading-tight">
                                Kirim bukti transfer ke WA Admin untuk menerima Kode Token aktivasi.
                            </p>
                        </div>
                    </div>

                    <!-- KONTEN TAB 2: INPUT TOKEN AKTIVASI -->
                    <div id="tab-content-token" class="hidden space-y-3 pt-1">
                        <div class="space-y-2.5">
                            <div>
                                <label class="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                                    Nomor WhatsApp Anda (Opsional):
                                </label>
                                <input type="tel" id="input-license-phone" placeholder="Contoh: 081234567890" class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-mono">
                            </div>

                            <div>
                                <label class="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                                    Kode Token Lisensi:
                                </label>
                                <input type="text" id="input-license-token" placeholder="Contoh: SNBT-XXXX-XXXX-XXXX" class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-mono uppercase tracking-wider">
                                <span class="text-[10px] text-slate-400">Kode unik yang diberikan Admin via WhatsApp (maks. 2 perangkat).</span>
                            </div>
                        </div>

                        <div id="license-feedback" class="text-xs min-h-[16px] font-semibold"></div>

                        <button type="button" id="btn-submit-activation" onclick="snbtSubmitActivation()" class="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer">
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') snbtClosePremiumModal();
    });
}

function snbtSwitchTab(tab) {
    const btnPay = document.getElementById('tab-btn-pay');
    const btnToken = document.getElementById('tab-btn-token');
    const contentPay = document.getElementById('tab-content-pay');
    const contentToken = document.getElementById('tab-content-token');

    if (tab === 'pay') {
        btnPay.className = "flex-1 py-1.5 rounded-lg bg-white text-slate-900 shadow-2xs transition cursor-pointer";
        btnToken.className = "flex-1 py-1.5 rounded-lg hover:text-slate-900 transition cursor-pointer";
        contentPay.classList.remove('hidden');
        contentToken.classList.add('hidden');
    } else {
        btnToken.className = "flex-1 py-1.5 rounded-lg bg-white text-slate-900 shadow-2xs transition cursor-pointer";
        btnPay.className = "flex-1 py-1.5 rounded-lg hover:text-slate-900 transition cursor-pointer";
        contentToken.classList.remove('hidden');
        contentPay.classList.add('hidden');
    }
}

async function snbtSubmitActivation() {
    const elPhone = document.getElementById('input-license-phone');
    const elToken = document.getElementById('input-license-token');
    const elFb = document.getElementById('license-feedback');
    const btn = document.getElementById('btn-submit-activation');

    if (!elToken || !elFb) return;

    const phone = elPhone ? elPhone.value.trim() : '';
    const token = elToken.value.trim();

    if (!token) {
        elFb.innerHTML = `<span class="text-rose-600">Harap masukkan kode token lisensi!</span>`;
        return;
    }

    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span>⏳</span><span>Memverifikasi ke server...</span>`;
    }

    const res = await snbtActivateLicense(phone, token);

    if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<span>🚀</span><span>Aktifkan Akses Premium (30 Hari)</span>`;
    }

    if (res.success) {
        elFb.innerHTML = `<span class="text-emerald-700 font-bold">🎉 Berhasil! Akun Premium Anda aktif selama 30 hari (hingga ${res.expiryDate}). Seluruh paket terbuka!</span>`;
        setTimeout(() => {
            snbtClosePremiumModal();
            location.reload();
        }, 1200);
    } else {
        elFb.innerHTML = `<span class="text-rose-600">${res.message}</span>`;
    }
}

// Inisialisasi otomatis jika DOM siap
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        snbtInjectPremiumModal();
        if (snbtIsPremiumActive()) {
            snbtVerifyWithServer().then((stillValid) => {
                if (!stillValid) location.reload();
            });
        }
    });
}

// Alias global untuk kompatibilitas nama fungsi
if (typeof window !== 'undefined') {
    window.openSnbtPremiumModal = snbtOpenPremiumModal;
    window.closeSnbtPremiumModal = snbtClosePremiumModal;
}
