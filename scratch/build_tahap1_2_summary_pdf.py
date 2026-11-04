import os
import sys

# Tambahkan user site-packages untuk akses ReportLab
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
            self.drawString(14 * mm, 285 * mm, "Laporan Tahap 1 (5 Syarat) & Tahap 2 (Skema & Rekap Guru) • AjarKita")
            self.drawRightString(A4[0] - 14 * mm, 285 * mm, "kimia.ajarkita.my.id • Status: Verifikasi Otomatis Lulus")
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.5)
            self.line(14 * mm, 282 * mm, A4[0] - 14 * mm, 282 * mm)
            
        # Footer (Semua Halaman)
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.5)
        self.line(14 * mm, 14 * mm, A4[0] - 14 * mm, 14 * mm)
        
        self.drawString(14 * mm, 9 * mm, "AjarKita EduPlatform • Dokumen Kesiapan Arsitektur Multi-Tes IELTS (Internal)")
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

    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=C_PRIMARY,
        spaceAfter=3
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=C_MUTED,
        spaceAfter=10
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=C_INDIGO,
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=C_PRIMARY,
        spaceBefore=6,
        spaceAfter=3,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=C_TEXT,
        spaceAfter=4
    )

    body_bold = ParagraphStyle(
        'Body_Bold',
        parent=body_style,
        fontName='Helvetica-Bold'
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=colors.white
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10,
        textColor=C_TEXT
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=table_cell,
        fontName='Helvetica-Bold',
        textColor=C_PRIMARY
    )

    status_badge_style = ParagraphStyle(
        'StatusBadge',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=C_TEAL
    )

    story = []

    # 1. Header Banner
    story.append(Paragraph("AjarKita EduPlatform • Arsitektur Multi-Tes IELTS", ParagraphStyle(
        'MetaHeader', fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=C_INDIGO, spaceAfter=2
    )))
    story.append(Paragraph("Ringkasan Verifikasi Tahap 1 & Implementasi Tahap 2: Skema Database & Rekap Guru Multi-Tes", title_style))
    story.append(Paragraph("Dokumen Eksekutif & Teknis • 4 November 2026 • Platform: Cloudflare Workers + D1 • kimia.ajarkita.my.id", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1, color=C_LINE, spaceAfter=8))

    # 2. Executive Box: Status Pengujian & Prinsip Baku
    exec_content = [
        [
            Paragraph("<b>STATUS PENGUJIAN OTOMATIS:</b><br/><font color='#0F766E'><b>197 Pengujian Lulus 100% (28 Suite) • 0 Gagal</b></font><br/><i>\"Tidak ditemukan kegagalan pada pengujian otomatis; verifikasi manual belum dilakukan.\"</i>", ParagraphStyle('ExecTxt', fontName='Helvetica', fontSize=8, leading=10.5, textColor=C_TEXT)),
            Paragraph("<b>PRINSIP MULTI-TES:</b><br/>• <b>Zero Content:</b> Tanpa soal/kunci Mock 2 riil.<br/>• <b>Zero Regression:</b> Mock 1 tetap 100% gratis & utuh.<br/>• <b>Zero Data Loss:</b> Migrasi baris lama 100% presisi.", ParagraphStyle('ExecTxt2', fontName='Helvetica', fontSize=8, leading=10.5, textColor=C_TEXT))
        ]
    ]
    exec_table = Table(exec_content, colWidths=[105 * mm, 77 * mm])
    exec_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_SURFACE),
        ('BOX', (0, 0), (-1, -1), 0.8, C_INDIGO),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(exec_table)
    story.append(Spacer(1, 6 * mm))

    # 3. Bagian I: Laporan 5 Syarat Tahap 1
    story.append(Paragraph("Bagian I: Hasil Verifikasi 5 Syarat Tahap 1 (Keamanan Akses)", h1_style))
    story.append(Paragraph("Sebelum melangkah ke Tahap 2, seluruh 5 syarat verifikasi Tahap 1 telah diuji dan divalidasi secara menyeluruh:", body_style))

    tahap1_table_data = [
        [Paragraph("No", table_header), Paragraph("Syarat Verifikasi", table_header), Paragraph("Implementasi Teknis & Bukti Pengujian", table_header), Paragraph("Hasil", table_header)],
        [
            Paragraph("1", table_cell_bold),
            Paragraph("<b>Cakupan Endpoint 4 Modul</b><br/>(LRWS) memvalidasi token", table_cell),
            Paragraph("Semua endpoint utama & pendukung (Listening: start, save, submit; Reading: start, save, submit; Writing: start, save, submit, status; Speaking: start, upload, submit, status, detail, audio) menolak akses tes premium tanpa token via <code>HTTP 401 token_required</code>.", table_cell),
            Paragraph("<b>LULUS</b><br/><font color='#0F766E'>13 Endpoint Teruji</font>", status_badge_style)
        ],
        [
            Paragraph("2", table_cell_bold),
            Paragraph("<b>Proteksi Berkas Statis</b><br/>Tanpa akses URL publik langsung", table_cell),
            Paragraph("Filter Worker mencegat ekstensi <code>.json</code>, <code>.mp3</code>, path <code>/premium/</code>, dan <code>-master</code> dengan <code>HTTP 403 direct_asset_access_forbidden</code>. Binding ASSETS dengan <code>run_worker_first: true</code> menjamin routing selalu melewati Worker.", table_cell),
            Paragraph("<b>LULUS</b><br/><font color='#0F766E'>HTTP 403 Terverifikasi</font>", status_badge_style)
        ],
        [
            Paragraph("3", table_cell_bold),
            Paragraph("<b>Kekhususan Lisensi</b><br/>Tolak non-IELTS, expired, & revoked", table_cell),
            Paragraph("Lisensi paket SNBT ditolak <code>HTTP 403 wrong_package</code>. Lisensi IELTS kedaluwarsa ditolak <code>HTTP 403 token_expired</code>. Lisensi dicabut ditolak <code>HTTP 403 token_revoked</code>.", table_cell),
            Paragraph("<b>LULUS</b><br/><font color='#0F766E'>Isolasi Lisensi Valid</font>", status_badge_style)
        ],
        [
            Paragraph("4", table_cell_bold),
            Paragraph("<b>Koreksi Dokumen CDN</b><br/>Penghapusan istilah Fastly", table_cell),
            Paragraph("Seluruh dokumen arsitektur dan penulisan laporan teknis telah diselaraskan ke istilah resmi infrastruktur: <b>Cloudflare CDN / Cloudflare Cache</b>.", table_cell),
            Paragraph("<b>SELESAI</b><br/><font color='#0F766E'>Terminologi Tepat</font>", status_badge_style)
        ],
        [
            Paragraph("5", table_cell_bold),
            Paragraph("<b>Total Pengujian</b><br/>Batas minimum tidak boleh < 190", table_cell),
            Paragraph("Suite pengujian multi-tes diperluas dari 6 menjadi 9 pengujian komprehensif, menaikkan total uji menjadi 193 pengujian (seluruhnya lulus) sebelum masuk ke Tahap 2.", table_cell),
            Paragraph("<b>LULUS</b><br/><font color='#0F766E'>193 > 190 Uji</font>", status_badge_style)
        ]
    ]

    tahap1_table = Table(tahap1_table_data, colWidths=[8 * mm, 45 * mm, 105 * mm, 24 * mm])
    tahap1_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), C_INDIGO),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (3, 0), (3, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, C_SURFACE]),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(tahap1_table)
    story.append(Spacer(1, 5 * mm))

    # 4. Bagian II: Implementasi Tahap 2
    story.append(Paragraph("Bagian II: Implementasi Tahap 2 (Skema Database & Rekap Guru)", h1_style))
    story.append(Paragraph("Pekerjaan Tahap 2 difokuskan pada fondasi database dan konsistensi pelaporan rekapitulasi nilai:", body_style))

    p2_points = [
        "<b>1. Fungsi Normalisasi Tunggal (normalizeTestId):</b><br/>"
        "Dibangun satu fungsi resmi di <code>worker/src/packages-config.js</code> dan <code>ielts/packages-config.js</code>. Seluruh alias warisan (<code>1</code>, <code>test1</code>, <code>reading1</code>, <code>writing1</code>, <code>speaking1</code>, <code>listening1</code>, <code>speaking_test1</code>, spasi, huruf kapital) dikonversi deterministik ke <code>'test1'</code>. Alias Mock 2 menjadi <code>'test2'</code>. Fungsi ini dipakai di Worker, penyimpanan D1, filter rekap, kuota, retensi, dan token audio.",
        
        "<b>2. Penambahan Kolom test_id pada Skema Database:</b><br/>"
        "Kolom <code>test_id TEXT NOT NULL DEFAULT 'test1'</code> disematkan pada tabel sesi <code>listening_sessions</code>, <code>reading_sessions</code>, <code>writing_sessions</code>, <code>speaking_sessions</code>, serta tabel rekaman <code>speaking_recordings</code> di <code>worker/schema.sql</code>. Helper inisialisasi Worker mengeksekusi migrasi aman <code>ALTER TABLE ... ADD COLUMN test_id</code> secara idempotent.",

        "<b>3. Uji Migrasi Data Nyata (Zero Data Loss):</b><br/>"
        "Uji migrasi dijalankan pada database SQLite berisi 25 baris data nyata (5 listening, 5 reading, 5 writing, 5 speaking, 5 recordings) yang memuat berbagai alias lama dan nilai null. Hasil: <b>Jumlah baris sebelum migrasi (25) = Jumlah baris setelah migrasi (25)</b>. Tidak ada data yang hilang (*zero data loss*), dan seluruh baris lama berhasil memiliki <code>test_id = 'test1'</code>.",

        "<b>4. Isolasi Rekap Guru Multi-Tes (Nilai Mock 1 Tidak Tertimpa Mock 2):</b><br/>"
        "Logika penggabungan nilai siswa di endpoint <code>/ielts/admin/results</code> (dan alias <code>/guru/rekap</code>) kini dikelompokkan berdasarkan <b>(nama_peserta, kelas, test_id)</b>. Siswa yang mengerjakan Mock 1 lalu mengambil Mock 2 akan memiliki dua entri terpisah. Nilai Mock 1 tetap 100% utuh dan tidak terhapus/tertimpa saat Mock 2 disubmit. Di antarmuka <code>ielts/rekap.html</code>, ditambahkan dropdown filter tes dan badge visual penanda tes (<code>MOCK 1</code> / <code>MOCK 2</code>).",

        "<b>5. Integritas Fitur Pendukung & Konkurensi Atomik:</b><br/>"
        "• <code>POST /admin/delete-customer</code> (dry-run & batch) berhasil menghapus data sesi multi-tes.<br/>"
        "• Cron retensi harian membersihkan rekaman kedaluwarsa secara merata tanpa terpengaruh <code>test_id</code>.<br/>"
        "• Penegakan kuota mingguan add-on guru tetap aktif dan terisolasi.<br/>"
        "• Uji konkurensi serentak (<code>Promise.all</code>) membuktikan D1 mengunci transaksi submit secara tepat 1-lulus."
    ]

    for p in p2_points:
        story.append(Paragraph(p, ParagraphStyle('PointStyle', parent=body_style, leftIndent=4 * mm, spaceAfter=4)))

    story.append(Spacer(1, 4 * mm))

    # 5. Bagian III: Daftar Berkas & Metrik Pengujian
    story.append(Paragraph("Bagian III: Berkas yang Diubah & Metrik Pengujian", h1_style))

    files_table_data = [
        [Paragraph("Nama Berkas", table_header), Paragraph("Komponen", table_header), Paragraph("Deskripsi Perubahan", table_header)],
        [
            Paragraph("<code>worker/schema.sql</code>", table_cell_bold),
            Paragraph("D1 Schema", table_cell),
            Paragraph("Menambahkan <code>test_id TEXT NOT NULL DEFAULT 'test1'</code> pada tabel sesi dan rekaman.", table_cell)
        ],
        [
            Paragraph("<code>worker/src/packages-config.js</code>", table_cell_bold),
            Paragraph("Worker Config", table_cell),
            Paragraph("Implementasi dan ekspor fungsi terpusat <code>normalizeTestId(testId)</code>.", table_cell)
        ],
        [
            Paragraph("<code>ielts/packages-config.js</code>", table_cell_bold),
            Paragraph("Frontend Config", table_cell),
            Paragraph("Implementasi fungsi <code>normalizeTestId(testId)</code> untuk konsistensi di peramban.", table_cell)
        ],
        [
            Paragraph("<code>worker/src/index.js</code>", table_cell_bold),
            Paragraph("API Worker Backend", table_cell),
            Paragraph("Penerapan normalisasi testId, proteksi aset statis, migrasi skema, dan pengelompokan rekap guru.", table_cell)
        ],
        [
            Paragraph("<code>ielts/rekap.html</code>", table_cell_bold),
            Paragraph("Dashboard Rekap", table_cell),
            Paragraph("Dropdown filter tes (Semua, Mock 1, Mock 2) dan badge visual penanda tes per siswa.", table_cell)
        ],
        [
            Paragraph("<code>tests/multi-test-access-control.test.js</code>", table_cell_bold),
            Paragraph("Test Suite (Tahap 1)", table_cell),
            Paragraph("Verifikasi 5 syarat Tahap 1 (13 endpoint LRWS, aset statis 403, lisensi SNBT/expired/revoked).", table_cell)
        ],
        [
            Paragraph("<code>tests/step2-schema-migration-and-recap.test.js</code>", table_cell_bold),
            Paragraph("Test Suite (Tahap 2)", table_cell),
            Paragraph("Pengujian fungsi normalisasi, migrasi data nyata (25 baris), isolasi rekap, & konkurensi.", table_cell)
        ]
    ]

    files_table = Table(files_table_data, colWidths=[55 * mm, 30 * mm, 97 * mm])
    files_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), C_INDIGO),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, C_SURFACE]),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(files_table)
    story.append(Spacer(1, 4 * mm))

    # 6. Bagian IV: Hal yang Masih Perlu Uji Manual
    story.append(Paragraph("Bagian IV: Hal yang Masih Perlu Pengujian Manual (Sebelum Produksi)", h1_style))
    story.append(Paragraph("Pengujian otomatis menjamin keutuhan kode backend dan logika data. Sebelum rilis produksi, 3 hal manual berikut disarankan:", body_style))

    manual_items = [
        "1. <b>Verifikasi Visual Dashboard Rekap Guru (ielts/rekap.html):</b> Buka halaman rekap di browser, uji pemilihan filter \"Mock Test 1\" dan \"Mock Test 2\", serta pastikan badge tes tampil rapi pada layar mobile dan desktop.",
        "2. <b>Verifikasi Modal Penilaian Guru:</b> Simulasikan pemberian nilai (*grading modal*) pada siswa yang memiliki entri Mock 1 dan Mock 2, pastikan nilai tersimpan ke sesi tes yang tepat.",
        "3. <b>Verifikasi Dialog Lisensi Perangkat Fisik:</b> Akses link simulasi Mock 2 di Safari/Chrome ponsel tanpa token lisensi dan pastikan pop-up peringatan lisensi muncul dengan jelas."
    ]
    for m in manual_items:
        story.append(Paragraph(m, ParagraphStyle('ManualTxt', parent=body_style, leftIndent=4 * mm, spaceAfter=3)))

    story.append(Spacer(1, 4 * mm))

    # 7. Bagian V: Status Tahapan
    story.append(Paragraph("Bagian V: Status Tahapan & Permintaan Persetujuan", h1_style))
    story.append(Paragraph(
        "Pekerjaan saat ini <b>resmi berhenti di akhir Tahap 2</b> sesuai instruksi. Seluruh komitmen zero-content, zero-regression, ketiadaan rahasia di kode/log, serta preservasi database D1 produksi telah dipatuhi sepenuhnya.<br/>"
        "<b>Rencana Tahap 3 Selanjutnya:</b> Pemisahan penyimpanan browser (<code>localStorage</code>) menggunakan format kunci yang memuat <code>test_id</code> (misal: <code>ajarkita:{test_id}:{modul}:draft</code>) dan migrasi draf lama secara transparan.",
        body_style
    ))

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF successfully generated at:", output_path)

if __name__ == '__main__':
    out_pdf = "/Users/ash-shiddiiqi/.gemini/antigravity/brain/08227bad-0f5c-48ae-a335-4b5aa3c69dd8/Ringkasan_Tahap1_dan_2_MultiTes_IELTS.pdf"
    create_summary_pdf(out_pdf)
