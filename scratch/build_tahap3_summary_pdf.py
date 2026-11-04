import os
import sys

# Tambahkan user site-packages untuk ReportLab
sys.path.append('/Users/ash-shiddiiqi/Library/Python/3.9/lib/python/site-packages')

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748B"))
        
        # Header (Halaman > 1)
        if self._pageNumber > 1:
            self.drawString(14 * mm, 285 * mm, "Laporan Tahap 1, 2, & 3 Multi-Tes IELTS • AjarKita EduPlatform")
            self.drawRightString(A4[0] - 14 * mm, 285 * mm, "kimia.ajarkita.my.id • Status: 203 Tes Lulus Otomatis")
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.5)
            self.line(14 * mm, 282 * mm, A4[0] - 14 * mm, 282 * mm)
            
        # Footer (Semua Halaman)
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.5)
        self.line(14 * mm, 14 * mm, A4[0] - 14 * mm, 14 * mm)
        
        self.drawString(14 * mm, 9 * mm, "AjarKita EduPlatform • Arsitektur Multi-Tes & Isolasi Draf Peramban (Tahap 3 Selesai)")
        page_str = f"Halaman {self._pageNumber} dari {page_count}"
        self.drawRightString(A4[0] - 14 * mm, 9 * mm, page_str)
        self.restoreState()

def create_summary_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=14 * mm,
        rightMargin=14 * mm,
        topMargin=16 * mm,
        bottomMargin=18 * mm
    )

    styles = getSampleStyleSheet()

    # Warna Palet Profesional
    C_PRIMARY = colors.HexColor("#0F172A")    # Slate 900
    C_INDIGO = colors.HexColor("#4338CA")     # Indigo 700
    C_INDIGO_BG = colors.HexColor("#EEF2FF")  # Indigo 50
    C_TEXT = colors.HexColor("#334155")       # Slate 700
    C_MUTED = colors.HexColor("#64748B")      # Slate 500
    C_LINE = colors.HexColor("#E2E8F0")       # Slate 200
    C_SURFACE = colors.HexColor("#F8FAFC")    # Slate 50
    C_TEAL = colors.HexColor("#0F766E")       # Teal 700
    C_TEAL_BG = colors.HexColor("#F0FDFA")    # Teal 50
    C_AMBER = colors.HexColor("#B45309")      # Amber 700
    C_AMBER_BG = colors.HexColor("#FFFBEB")   # Amber 50
    C_EMERALD = colors.HexColor("#15803D")    # Emerald 700
    C_EMERALD_BG = colors.HexColor("#ECFDF5") # Emerald 50

    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=C_PRIMARY,
        spaceAfter=3
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=C_MUTED,
        spaceAfter=8
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=C_INDIGO,
        spaceBefore=7,
        spaceAfter=4,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=C_PRIMARY,
        spaceBefore=5,
        spaceAfter=3,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=C_TEXT,
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'Bullet_Custom',
        parent=body_style,
        leftIndent=4 * mm,
        firstLineIndent=-2.5 * mm,
        spaceAfter=2.5
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.white
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=C_TEXT
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=C_PRIMARY
    )

    callout_text = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10.5,
        textColor=C_TEXT
    )

    story = []

    # 1. Header & Title Block
    story.append(Paragraph("RINGKASAN EKSEKUTIF ARSITEKTUR MULTI-TES IELTS", title_style))
    story.append(Paragraph("Laporan Verifikasi Tahap 1, Pemenuhan 4 Syarat Tahap 2, dan Penyelesaian Tahap 3 (Isolasi Draf Browser) • AjarKita EduPlatform", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1, color=C_INDIGO, spaceBefore=0, spaceAfter=6))

    # Meta Table
    meta_data = [
        [
            Paragraph("<b>Tanggal:</b> 4 November 2026", table_cell),
            Paragraph("<b>Target Domain:</b> kimia.ajarkita.my.id", table_cell),
            Paragraph("<b>Status Uji:</b> 203 Tes Lulus (0 Gagal)", table_cell),
            Paragraph("<b>Tahapan:</b> Tahap 1, 2, & 3 Selesai", table_cell)
        ]
    ]
    meta_table = Table(meta_data, colWidths=[42 * mm, 46 * mm, 48 * mm, 46 * mm])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_SURFACE),
        ('BOX', (0, 0), (-1, -1), 0.5, C_LINE),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 4 * mm))

    # Standar Pernyataan Pelaporan
    disclaimer_box = [
        [Paragraph(
            "<b>Pernyataan Baku Verifikasi Sistem:</b><br/>"
            "<i>\"Tidak ditemukan kegagalan pada pengujian otomatis; verifikasi manual belum dilakukan.\"</i><br/>"
            "Seluruh pengujian otomatis mencakup 29 test suite dan 203 kasus uji independen tanpa melibatkan soal, transkrip, atau kunci jawaban asli Mock 2 (Zero Content). Rahasia/token asli tidak disimpan di kode atau log.",
            callout_text
        )]
    ]
    box_table = Table(disclaimer_box, colWidths=[182 * mm])
    box_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_INDIGO_BG),
        ('BOX', (0, 0), (-1, -1), 1, C_INDIGO),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(box_table)
    story.append(Spacer(1, 4 * mm))

    # 2. Bagian I: Ringkasan Pencapaian Tahap 1
    story.append(Paragraph("Bagian I: Hasil Verifikasi Tahap 1 (Keamanan Akses)", h1_style))
    t1_text = (
        "Tahap 1 berfokus pada perlindungan server-side fail-closed untuk seluruh tes premium IELTS. "
        "5 syarat verifikasi yang diminta telah terpenuhi 100%:"
    )
    story.append(Paragraph(t1_text, body_style))

    t1_points = [
        "<b>1. Cakupan Endpoint Penuh (13 Endpoint LRWS):</b> Pemeriksaan token premium terverifikasi aktif pada <code>/start</code>, <code>/save-progress</code>, <code>/status</code>, <code>/detail</code>, <code>/submit</code>, dan <code>/audio/stream</code>. Akses tanpa token ditolak HTTP 401/403.",
        "<b>2. Proteksi Berkas Aset Statis Premium:</b> Berkas soal master (<code>*-master.json</code>), folder <code>/premium/*</code>, serta berkas Mock 2/3 (<code>.json</code> & <code>.mp3</code>) diblokir HTTP 403 jika diakses langsung via URL. Aset publik Mock 1 tetap bebas token.",
        "<b>3. Kekhususan Lisensi:</b> Lisensi non-IELTS (seperti paket SNBT), lisensi kedaluwarsa, atau lisensi dicabut secara eksplisit ditolak saat mengakses Mock 2.",
        "<b>4. Koreksi Terminologi Infrastruktur:</b> Dokumentasi telah diperbaiki secara presisi merujuk ke Cloudflare Worker & Edge Rules.",
        "<b>5. Baseline Pengujian:</b> Baseline pengujian otomatis tercapai pada 190 tes."
    ]
    for p in t1_points:
        story.append(Paragraph(p, bullet_style))

    story.append(Spacer(1, 3 * mm))

    # 3. Bagian II: Pembuktian 4 Syarat Verifikasi Tahap 2
    story.append(Paragraph("Bagian II: Pembuktian 4 Syarat Verifikasi Tahap 2 (Skema & Rekap Guru)", h1_style))

    # Tabel Pembuktian Tahap 2
    t2_evidence_data = [
        [
            Paragraph("Syarat Verifikasi", table_header),
            Paragraph("Implementasi & Bukti Eksekusi Nyata", table_header),
            Paragraph("Hasil & Status", table_header)
        ],
        [
            Paragraph("<b>1. Migrasi D1 Resmi di Preview</b>", table_cell_bold),
            Paragraph(
                "Berkas <code>worker/migrations/0001_add_multi_test_id.sql</code> dieksekusi di <b>D1 PREVIEW</b> (ID: <code>2b9a6849-a29e-4906-a467-c41535ae4e09</code>).<br/>"
                "• Baris sebelum migrasi: 10 baris data nyata.<br/>"
                "• Baris setelah migrasi: <b>10 baris</b> (Zero Data Loss).<br/>"
                "• <b>Konfirmasi Produksi:</b> D1 Produksi (<code>69e3b92a-...</code>) <b>BELUM DIMIGRASI</b>.",
                table_cell
            ),
            Paragraph("<font color='#0F766E'><b>LULUS (100% MATCH)</b><br/>Produksi Tersentuh: TIDAK</font>", table_cell)
        ],
        [
            Paragraph("<b>2. Filter Aset Bebas Token Mock 1</b>", table_cell_bold),
            Paragraph(
                "Filter di <code>worker/src/index.js</code> disesuaikan spesifik. Uji otomatis membuktikan berkas publik Mock 1 (<code>/manifest.json</code>, audio Listening <code>test1.mp3</code>, dan JSON data Mock 1) tetap dapat diunduh tanpa token.",
                table_cell
            ),
            Paragraph("<font color='#0F766E'><b>LULUS</b><br/>Aset Mock 1 Bebas Akses</font>", table_cell)
        ],
        [
            Paragraph("<b>3. Modal Penilaian Guru Multi-Tes</b>", table_cell_bold),
            Paragraph(
                "Penilaian Writing (<code>/writing/admin/grade</code>) dan Speaking (<code>/speaking/admin/grade</code>) untuk siswa yang sama pada Mock 1 dan Mock 2 terbukti tersimpan di baris sesi dengan <code>test_id</code> yang benar tanpa saling menimpa.",
                table_cell
            ),
            Paragraph("<font color='#0F766E'><b>LULUS</b><br/>Skor & Feedback Terisolasi</font>", table_cell)
        ],
        [
            Paragraph("<b>4. Total Tes Otomatis (Min. 197)</b>", table_cell_bold),
            Paragraph(
                "Suite tes otomatis mencakup konkurensi multi-tes, retensi cron, penghapusan customer, dan penilaian guru. Total tes naik dari 190 menjadi 198 tes.",
                table_cell
            ),
            Paragraph("<font color='#0F766E'><b>198 TES LULUS</b><br/>(Melebihi target 197)</font>", table_cell)
        ]
    ]

    t2_table = Table(t2_evidence_data, colWidths=[40 * mm, 105 * mm, 37 * mm])
    t2_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), C_INDIGO),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('GRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, C_SURFACE]),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t2_table)
    story.append(Spacer(1, 4 * mm))

    # Page Break untuk Tahap 3 dan detail berkas
    story.append(PageBreak())

    # 4. Bagian III: Penyelesaian Tahap 3 (Isolasi Penyimpanan Browser)
    story.append(Paragraph("Bagian III: Penyelesaian Tahap 3 (Isolasi Draf & Autosave Browser)", h1_style))
    story.append(Paragraph(
        "Tahap 3 mengisolasi seluruh penyimpanan lokal peramban (<code>localStorage</code>) agar draf, sesi aktif, dan autosave antar tes tidak saling mencemari:",
        body_style
    ))

    t3_pillars = [
        "<b>1. Format Kunci Baku (<code>ajarkita:{test_id}:{modul}:draft</code>):</b><br/>"
        "Semua modul kini menggunakan konvensi kunci terpadu yang memanfaatkan fungsi <code>normalizeTestId</code>. "
        "Kunci draf meliputi <code>ajarkita:test1:listening:draft</code>, <code>ajarkita:test1:reading:draft</code>, "
        "<code>ajarkita:test1:writing:draft</code>, dan <code>ajarkita:test1:speaking:draft</code>. ID sesi tersimpan pada format <code>ajarkita:{test_id}:{modul}:session_id</code>.",
        
        "<b>2. Isolasi Mutlak Antara Mock 1 dan Mock 2:</b><br/>"
        "Saat peserta membuka Mock 2, sistem hanya mencari dan memuat draf dari kunci <code>ajarkita:test2:...</code>. "
        "Draf Mock 1 tidak akan pernah ditampilkan di Mock 2, dan submit pada Mock 1 tidak menghapus draf Mock 2 yang sedang berjalan.",

        "<b>3. Migrasi Draf Lama Transparan (Zero Data Loss):</b><br/>"
        "Siswa yang memiliki draf lama (kunci legacy seperti <code>ielts_writing_backup_*</code> atau <code>ielts_reading_backup_*</code>) "
        "akan secara otomatis dan transparan dimigrasikan ke format <code>ajarkita:test1:...:draft</code> saat membuka Test 1. Tidak ada ketikan atau jawaban siswa yang hilang.",

        "<b>4. Ketahanan Terhadap Kesalahan (Safe Fail-Closed & No JavaScript Crash):</b><br/>"
        "Seluruh parsing JSON draf dilengkapi blok pengaman (*try-catch*). Jika data lokal mengalami korupsi atau bukan JSON valid, "
        "sistem mengabaikannya dengan aman (mengembalikan <code>null</code>) tanpa memicu crash JavaScript.",

        "<b>5. Pembersihan Bersih Saat Ujian Selesai (Submit / Discard):</b><br/>"
        "Setelah tes disubmit atau siswa sengaja membuang sesi lama, draf aktif dan ID sesi dibersihkan dari penyimpanan lokal, mencegah banner *resume* palsu muncul kembali."
    ]
    for p in t3_pillars:
        story.append(Paragraph(p, bullet_style))

    story.append(Spacer(1, 3 * mm))

    # Ringkasan Modul & Kunci LocalStorage Tahap 3
    keys_data = [
        [Paragraph("Modul IELTS", table_header), Paragraph("Kunci Draf Standar (Tahap 3)", table_header), Paragraph("Kunci ID Sesi Standar", table_header), Paragraph("Sumber Data yang Disimpan", table_header)],
        [Paragraph("<b>Listening</b>", table_cell_bold), Paragraph("<code>ajarkita:{test_id}:listening:draft</code>", table_cell), Paragraph("<code>ajarkita:{test_id}:listening:session_id</code>", table_cell), Paragraph("Jawaban per soal, indeks bagian aktif, timestamp", table_cell)],
        [Paragraph("<b>Reading</b>", table_cell_bold), Paragraph("<code>ajarkita:{test_id}:reading:draft</code>", table_cell), Paragraph("<code>ajarkita:{test_id}:reading:session_id</code>", table_cell), Paragraph("Pilihan jawaban, passage aktif, sisa waktu", table_cell)],
        [Paragraph("<b>Writing</b>", table_cell_bold), Paragraph("<code>ajarkita:{test_id}:writing:draft</code>", table_cell), Paragraph("<code>ajarkita:{test_id}:writing:session_id</code>", table_cell), Paragraph("Teks Task 1, Teks Task 2, task aktif, profil siswa", table_cell)],
        [Paragraph("<b>Speaking</b>", table_cell_bold), Paragraph("<code>ajarkita:{test_id}:speaking:draft</code>", table_cell), Paragraph("<code>ajarkita:{test_id}:speaking:session_id</code>", table_cell), Paragraph("Catatan cue card Part 2, indeks soal, status sesi", table_cell)]
    ]
    keys_table = Table(keys_data, colWidths=[24 * mm, 56 * mm, 56 * mm, 46 * mm])
    keys_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), C_INDIGO),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, C_SURFACE]),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(keys_table)
    story.append(Spacer(1, 4 * mm))

    # 5. Bagian IV: Daftar Berkas yang Diperbarui & Ditambahkan
    story.append(Paragraph("Bagian IV: Daftar Berkas yang Diperbarui & Ditambahkan", h1_style))

    files_table_data = [
        [Paragraph("Nama Berkas", table_header), Paragraph("Komponen", table_header), Paragraph("Deskripsi Perubahan", table_header)],
        [
            Paragraph("<code>ielts/packages-config.js</code>", table_cell_bold),
            Paragraph("Frontend Config", table_cell),
            Paragraph("Implementasi fungsi standar penyimpanan draf (<code>loadModuleDraft</code>, <code>saveModuleDraft</code>, <code>clearModuleDraft</code>) dan ekspos ke <code>window.AjarKitaStorage</code>.", table_cell)
        ],
        [
            Paragraph("<code>worker/src/packages-config.js</code>", table_cell_bold),
            Paragraph("Worker Config", table_cell),
            Paragraph("Ekspor fungsi helper penyimpanan identik untuk runtime worker backend dan kebutuhan automated tests.", table_cell)
        ],
        [
            Paragraph("<code>ielts/*-engine.js</code><br/>(L, R, W, S)", table_cell_bold),
            Paragraph("Frontend Engines", table_cell),
            Paragraph("Pembaruan keempat mesin ujian untuk menyimpan & memulihkan draf menggunakan format baku <code>ajarkita:{test_id}:{modul}:draft</code> serta fallback aman.", table_cell)
        ],
        [
            Paragraph("<code>ielts/*-mock-test.html</code>", table_cell_bold),
            Paragraph("Halaman Ujian", table_cell),
            Paragraph("Penyisipan tag script <code>packages-config.js</code> dan pembaruan nomor versi aset cache (<code>v=20261104e</code>).", table_cell)
        ],
        [
            Paragraph("<code>worker/migrations/0001...</code>", table_cell_bold),
            Paragraph("D1 Migration", table_cell),
            Paragraph("Berkas SQL resmi D1 migrations. Telah sukses dieksekusi di remote D1 preview.", table_cell)
        ],
        [
            Paragraph("<code>tests/step3-localstorage...</code>", table_cell_bold),
            Paragraph("Test Suite Baru", table_cell),
            Paragraph("5 unit test otomatis untuk konvensi kunci baku, isolasi Mock 1 vs 2, migrasi transparan, dan resiliensi JSON corrupt.", table_cell)
        ]
    ]

    files_table = Table(files_table_data, colWidths=[48 * mm, 30 * mm, 104 * mm])
    files_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), C_INDIGO),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('GRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, C_SURFACE]),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(files_table)
    story.append(Spacer(1, 4 * mm))

    # 6. Bagian V: Ringkasan Status Uji Otomatis & Rencana Tahap 4
    story.append(Paragraph("Bagian V: Hasil Pengujian Otomatis & Rencana Tahap 4", h1_style))

    summary_stats = [
        [
            Paragraph("<b>Total Pengujian:</b> 203 Kasus Uji Otomatis", table_cell),
            Paragraph("<b>Hasil:</b> 203 Lulus (0 Gagal / 0 Error)", table_cell),
            Paragraph("<b>Cakupan Test Suite:</b> 29 Berkas Suite", table_cell),
            Paragraph("<b>Durasi Uji:</b> ~340 ms", table_cell)
        ]
    ]
    summary_table = Table(summary_stats, colWidths=[46 * mm, 46 * mm, 48 * mm, 42 * mm])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_EMERALD_BG),
        ('BOX', (0, 0), (-1, -1), 1, C_EMERALD),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 3 * mm))

    next_plan = (
        "<b>Status Pelaksanaan:</b> Eksekusi resmi dihentikan di akhir Tahap 3 sesuai instruksi pengerjaan.<br/>"
        "<b>Rencana Tahap 4 (Pilihan Tes di Tampilan):</b><br/>"
        "• Menghapus hardcode badge \"Test 1\" dan menggantinya dengan pemilih tes dinamis (Mock 1 & Mock 2) berbasis URL / konfigurasi.<br/>"
        "• Menampilkan penanda status lisensi (Gratis vs Premium) secara anggun dan menyediakan tautan langsung ke portal lisensi.<br/>"
        "• Menjamin pengalaman pengguna yang konsisten di layar seluler maupun desktop tanpa mengubah perilaku gratis Mock 1."
    )
    story.append(Paragraph(next_plan, body_style))

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF successfully generated at:", output_path)

if __name__ == '__main__':
    out_pdf = "/Users/ash-shiddiiqi/.gemini/antigravity/brain/08227bad-0f5c-48ae-a335-4b5aa3c69dd8/Ringkasan_Tahap1_2_dan_3_MultiTes_IELTS.pdf"
    create_summary_pdf(out_pdf)
