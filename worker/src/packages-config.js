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
            quota: "Kuota terbatas per minggu",
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
