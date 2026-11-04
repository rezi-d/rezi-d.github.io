// =================================================================
// worker/src/packages-config.js
// Konfigurasi Tunggal Durasi, Harga, dan Rincian Fitur Paket
// =================================================================

export const PACKAGES_CONFIG = {
    admin_wa: "6285266601477",
    ielts: {
        id: "ielts",
        name: "Paket IELTS Mandiri",
        tagline: "Latihan Intensif 4 Modul Mandiri (Listening, Reading, Writing, Speaking)",
        mock_tests: {
            test1: { id: "test1", is_free: true, label: "Mock Test 1" },
            test2: { id: "test2", is_free: false, label: "Mock Test 2" },
            test3: { id: "test3", is_free: false, label: "Mock Test 3" }
        },
        plans: {
            "30_days": {
                plan_id: "ielts_30",
                duration_days: 30,
                price_idr: 35000,
                price_formatted: "Rp 35.000",
                label: "30 Hari Akses Penuh"
            }
        },
        features: [
            "Akses 4 Modul Latihan Mandiri Lengkap (Listening, Reading, Writing, Speaking)",
            "Perekaman & Pemutaran Audio Speaking 100% lokal di browser (privasi terjaga, tanpa upload server)",
            "Kalkulasi Skor Otomatis & Pembahasan Lengkap (Listening & Reading)",
            "Rubrik Penilaian 4 Kriteria & Contoh Sample Answer (Writing & Speaking)",
            "Penyimpanan Jawaban Otomatis & Cadangan Darurat ke Browser (localStorage)",
            "Batas aktif hingga 2 perangkat pribadi per lisensi"
        ],
        excluded_features: [
            "Penilaian personal oleh guru (Add-on terpisah)"
        ],
        teacher_addons: {
            single_essay: {
                id: "addon_single_essay",
                name: "Koreksi 1 Esai",
                price_idr: 30000,
                price_formatted: "Rp 30.000",
                description: "Koreksi 1 esai (Task 1 atau Task 2)"
            },
            writing_full: {
                id: "addon_writing_full",
                name: "Koreksi Writing Lengkap (Task 1 + 2)",
                price_idr: 50000,
                price_formatted: "Rp 50.000",
                description: "Koreksi 1 paket Writing lengkap (Task 1 + Task 2)"
            },
            speaking_review: {
                id: "addon_speaking_review",
                name: "Review Speaking (Part 1–3)",
                price_idr: 50000,
                price_formatted: "Rp 50.000",
                description: "Review performa audio speaking lengkap 3 part"
            },
            sla: "3–5 hari kerja",
            quota: "Kuota terbatas per minggu (maks 20 review/minggu)",
            max_weekly_quota: 20,
            max_recordings_per_session: 15,
            max_audio_file_bytes: 1048576, // 1 MB per file
            max_session_audio_bytes: 4194304, // 4 MB total per sesi ujian
            retention_graded_days: 14,
            retention_ungraded_days: 60,
            scores_retention: "permanent", // Nilai 4 kriteria & catatan guru tersimpan permanen
            disclaimer: "Berupa umpan balik latihan dengan estimasi band (4 kriteria), bukan skor resmi IELTS."
        }
    },
    getBuyWhatsAppUrl(planKey = '30_days') {
        const plan = this.ielts?.plans?.[planKey] || { price_formatted: "Rp 35.000", duration_days: 30 };
        const text = `Halo Admin AjarKita, saya sudah menyetujui syarat dan kebijakan privasi serta ingin beli Paket IELTS Mandiri ${plan.duration_days} Hari (${plan.price_formatted}). Mohon petunjuk pembayarannya ya!`;
        return `https://wa.me/${this.admin_wa}?text=${encodeURIComponent(text)}`;
    },
    getHelpWhatsAppUrl() {
        const text = `Halo Admin AjarKita, saya butuh bantuan terkait Lisensi IELTS Mandiri (reset perangkat / kendala aktivasi).`;
        return `https://wa.me/${this.admin_wa}?text=${encodeURIComponent(text)}`;
    },
    getAddonWhatsAppUrl(addonKey) {
        const addon = this.ielts?.teacher_addons?.[addonKey];
        if (!addon) {
            const text = `Halo Admin AjarKita, saya ingin memesan Layanan Add-on Penilaian Guru IELTS. Mohon info ketersediaan kuota minggu ini ya!`;
            return `https://wa.me/${this.admin_wa}?text=${encodeURIComponent(text)}`;
        }
        const text = `Halo Admin AjarKita, saya ingin memesan Layanan Add-on Penilaian Guru IELTS: ${addon.name} (${addon.price_formatted}). Mohon info ketersediaan kuota minggu ini ya!`;
        return `https://wa.me/${this.admin_wa}?text=${encodeURIComponent(text)}`;
    },
    snbt: {
        id: "snbt",
        name: "Paket All-Access SNBT",
        tagline: "Akses Lengkap 7 Subtes UTBK-SNBT & Try Out Akbar",
        plans: {
            "30_days": {
                plan_id: "snbt_30",
                duration_days: 30,
                price_idr: 35000,
                price_formatted: "Rp 35.000",
                label: "30 Hari Akses Penuh"
            }
        },
        features: [
            "Akses seluruh bank soal latihan 7 subtes UTBK-SNBT",
            "Akses Try Out Akbar berkala dengan pemeringkatan nasional",
            "Batas aktif hingga 2 perangkat pribadi per lisensi"
        ],
        excluded_features: []
    }
};

export function getPackageDetails(packageType = 'ielts', planKey = '30_days') {
    const pkg = PACKAGES_CONFIG[packageType] || PACKAGES_CONFIG.ielts;
    const plan = pkg.plans[planKey] || pkg.plans["30_days"];
    return {
        package_id: pkg.id,
        name: pkg.name,
        tagline: pkg.tagline,
        duration_days: plan.duration_days,
        price_idr: plan.price_idr,
        price_formatted: plan.price_formatted,
        features: pkg.features,
        excluded_features: pkg.excluded_features || []
    };
}

export function normalizeTestId(testId) {
    if (!testId) return 'test1';
    const s = String(testId).trim().toLowerCase();
    if (!s || s === 'null' || s === 'undefined') return 'test1';

    // 1. Alias resmi Mock 1 di semua modul -> 'test1'
    if (['1', 'test1', 'reading1', 'writing1', 'speaking1', 'speaking_test1', 'listening1'].includes(s)) {
        return 'test1';
    }

    // 2. Alias resmi Mock 2 di semua modul -> 'test2'
    if (['2', 'test2', 'reading2', 'writing2', 'speaking2', 'speaking_test2', 'listening2'].includes(s)) {
        return 'test2';
    }

    // 3. Alias resmi Mock 3 di semua modul -> 'test3'
    if (['3', 'test3', 'reading3', 'writing3', 'speaking3', 'speaking_test3', 'listening3'].includes(s)) {
        return 'test3';
    }

    // 4. Pola angka umum (misal reading_test4 -> test4, atau 4 -> test4)
    const match = s.match(/(\d+)$/);
    if (match) {
        return `test${match[1]}`;
    }

    // 5. Jika sudah diawali test, gunakan bentuk tersebut
    if (s.startsWith('test')) {
        return s;
    }

    return `test_${s}`;
}

export function isFreeMockTest(testId) {
    const normalized = normalizeTestId(testId);
    if (normalized === 'test1') return true;

    // Cek konfigurasi eksplisit jika terdaftar
    const mockTests = PACKAGES_CONFIG?.ielts?.mock_tests;
    if (mockTests && mockTests[normalized] !== undefined) {
        return Boolean(mockTests[normalized].is_free);
    }

    // Default aman tertutup (fail-closed) untuk tes baru tak dikenal: butuh lisensi
    return false;
}

/**
 * Menghasilkan kunci standar penyimpanan draf/autosave peramban.
 * Format baku Tahap 3: ajarkita:{test_id}:{modul}:draft
 */
export function getDraftStorageKey(testId, modul) {
    const tid = normalizeTestId(testId);
    const mod = String(modul || '').toLowerCase().trim();
    return `ajarkita:${tid}:${mod}:draft`;
}

/**
 * Menghasilkan kunci standar penyimpanan ID sesi peramban.
 * Format baku Tahap 3: ajarkita:{test_id}:{modul}:session_id
 */
export function getSessionStorageKey(testId, modul) {
    const tid = normalizeTestId(testId);
    const mod = String(modul || '').toLowerCase().trim();
    return `ajarkita:${tid}:${mod}:session_id`;
}

/**
 * Menghasilkan daftar kunci cadangan lama (legacy) untuk migrasi aman ke test1.
 */
export function getLegacyDraftKeys(modul, sessionId, deviceId) {
    const mod = String(modul || '').toLowerCase().trim();
    const candidates = [];
    if (sessionId) candidates.push(`ielts_${mod}_backup_${sessionId}`);
    if (deviceId) candidates.push(`ielts_${mod}_backup_${deviceId}`);
    candidates.push(`ielts_${mod}_backup_undefined`);
    return candidates;
}

/**
 * Memuat draf ujian dari localStorage/storage peramban secara aman.
 * - Membaca format baku: ajarkita:{test_id}:{modul}:draft
 * - Jika test1 dan format baru belum ada, memigrasikan draf lama secara transparan.
 * - Format draf yang rusak / non-JSON diabaikan dengan aman tanpa memicu crash JavaScript.
 */
export function loadModuleDraft(testId, modul, options = {}) {
    const storage = options.storage || (typeof localStorage !== 'undefined' ? localStorage : null);
    if (!storage) return null;

    const tid = normalizeTestId(testId);
    const mod = String(modul || '').toLowerCase().trim();
    const draftKey = getDraftStorageKey(tid, mod);

    try {
        const raw = storage.getItem(draftKey);
        if (raw) {
            return JSON.parse(raw);
        }
    } catch (e) {
        // Abaikan dengan aman tanpa error JavaScript
    }

    // Migrasi draf lama HANYA untuk test1 tanpa sengaja menghapus data yang sedang berjalan
    if (tid === 'test1') {
        const legacyCandidates = getLegacyDraftKeys(mod, options.sessionId, options.deviceId);

        try {
            if (typeof storage.length === 'number' && typeof storage.key === 'function') {
                const prefix = `ielts_${mod}_backup_`;
                for (let i = 0; i < storage.length; i++) {
                    const k = storage.key(i);
                    if (k && k.startsWith(prefix) && !legacyCandidates.includes(k)) {
                        legacyCandidates.push(k);
                    }
                }
            }
        } catch (_) {}

        for (const k of legacyCandidates) {
            try {
                const legacyRaw = storage.getItem(k);
                if (legacyRaw) {
                    const parsed = JSON.parse(legacyRaw);
                    if (parsed && typeof parsed === 'object') {
                        parsed.testId = 'test1';
                        storage.setItem(draftKey, JSON.stringify(parsed));
                        if (parsed.sessionId) {
                            storage.setItem(getSessionStorageKey('test1', mod), parsed.sessionId);
                        }
                        return parsed;
                    }
                }
            } catch (_) {
                // Abaikan jika berkas legacy bukan JSON valid
            }
        }
    }

    return null;
}

/**
 * Menyimpan draf ujian ke format standar ajarkita:{test_id}:{modul}:draft.
 */
export function saveModuleDraft(testId, modul, data, options = {}) {
    const storage = options.storage || (typeof localStorage !== 'undefined' ? localStorage : null);
    if (!storage || !data) return false;

    const tid = normalizeTestId(testId);
    const mod = String(modul || '').toLowerCase().trim();
    const draftKey = getDraftStorageKey(tid, mod);

    try {
        const payload = (typeof data === 'object' && data !== null)
            ? { ...data, testId: tid }
            : data;
        const serialized = typeof payload === 'string' ? payload : JSON.stringify(payload);
        storage.setItem(draftKey, serialized);

        if (typeof payload === 'object' && payload !== null && payload.sessionId) {
            storage.setItem(getSessionStorageKey(tid, mod), payload.sessionId);
        }
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Menghapus draf dan session_id modul saat submit selesai atau sesi dibatalkan sengaja oleh peserta.
 */
export function clearModuleDraft(testId, modul, options = {}) {
    const storage = options.storage || (typeof localStorage !== 'undefined' ? localStorage : null);
    if (!storage) return;

    const tid = normalizeTestId(testId);
    const mod = String(modul || '').toLowerCase().trim();
    const draftKey = getDraftStorageKey(tid, mod);
    const sessionKey = getSessionStorageKey(tid, mod);

    try {
        storage.removeItem(draftKey);
        storage.removeItem(sessionKey);

        if (tid === 'test1') {
            storage.removeItem(`ielts_${mod}_session_id`);
            if (options.sessionId) {
                storage.removeItem(`ielts_${mod}_backup_${options.sessionId}`);
            }
            if (options.deviceId) {
                storage.removeItem(`ielts_${mod}_backup_${options.deviceId}`);
            }
            try {
                if (typeof storage.length === 'number' && typeof storage.key === 'function') {
                    const prefix = `ielts_${mod}_backup_`;
                    const toDelete = [];
                    for (let i = 0; i < storage.length; i++) {
                        const k = storage.key(i);
                        if (k && k.startsWith(prefix)) toDelete.push(k);
                    }
                    toDelete.forEach(k => storage.removeItem(k));
                }
            } catch (_) {}
        }
    } catch (_) {}
}
