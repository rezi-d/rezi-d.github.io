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
        ]
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
