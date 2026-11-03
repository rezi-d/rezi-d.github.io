/**
 * Konfigurasi Masa Simpan (Retention Policy) Rekaman Speaking
 * Aturan per jenis:
 * - Add-on guru: 14 hari (graded) dan 60 hari (ungraded)
 * - Paket mandiri: 3 hari (pembersihan cepat 3-7 hari untuk menghemat kuota D1)
 */
export const RETENTION_CONFIG = {
    // 1. Rekaman Add-on Guru / Sekolah:
    // Disimpan selama 14 hari setelah dinilai (memberi waktu keberatan nilai)
    TEACHER_GRADED_RETENTION_DAYS: 14,

    // Disimpan maksimal selama 60 hari sejak ujian dimulai (waktu tunggu guru mengoreksi)
    TEACHER_UNGRADED_RETENTION_DAYS: 60,

    // 2. Rekaman Paket Mandiri (jika ada data uji/unggahan aktif):
    // Disimpan 3 hari (dalam rentang 3-7 hari) lalu dihapus otomatis agar hemat kuota D1
    SELF_STUDY_RETENTION_DAYS: 3,

    // Ambang batas peringatan di dashboard sebelum rekaman kedaluwarsa (7 hari)
    EXPIRING_WARNING_DAYS: 7,

    // Jadwal Cron Pembersihan Otomatis:
    // Cloudflare Worker berjalan dalam zona waktu UTC.
    // 19:00 UTC = 02:00 WIB (dini hari saat traffic minimum).
    CRON_SCHEDULE_UTC: "0 19 * * *",
    CRON_SCHEDULE_WIB: "02:00 WIB",

    // Backward-compatibility aliases untuk modul lama
    GRADED_RETENTION_DAYS: 14,
    UNGRADED_RETENTION_DAYS: 60
};
