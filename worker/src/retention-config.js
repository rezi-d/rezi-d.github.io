/**
 * Konfigurasi Masa Simpan (Retention Policy) Rekaman Speaking
 */
export const RETENTION_CONFIG = {
    // Rekaman yang SUDAH dinilai guru: disimpan selama 14 hari setelah dinilai (memberi waktu keberatan nilai)
    GRADED_RETENTION_DAYS: 14,

    // Rekaman yang BELUM dinilai guru: disimpan maksimal selama 60 hari sejak ujian dimulai
    UNGRADED_RETENTION_DAYS: 60,

    // Ambang batas peringatan di dashboard sebelum rekaman kedaluwarsa (7 hari)
    EXPIRING_WARNING_DAYS: 7
};
