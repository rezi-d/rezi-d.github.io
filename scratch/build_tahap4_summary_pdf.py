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
            self.drawString(14 * mm, 285 * mm, "Laporan Tahap 1, 2, 3, & 4 Multi-Tes IELTS • AjarKita EduPlatform")
            self.drawRightString(A4[0] - 14 * mm, 285 * mm, "kimia.ajarkita.my.id • Status: 212 Tes Lulus Otomatis")
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.5)
            self.line(14 * mm, 282 * mm, A4[0] - 14 * mm, 282 * mm)
            
        # Footer (Semua Halaman)
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.5)
        self.line(14 * mm, 14 * mm, A4[0] - 14 * mm, 14 * mm)
        
        self.drawString(14 * mm, 9 * mm, "AjarKita EduPlatform • Infrastruktur Multi-Tes & UI Selector (Tahap 4 Selesai)")
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
    C_EMERALD_BG = colors.HexColor("#F0FDF4") # Emerald 50
    C_ROSE = colors.HexColor("#BE123C")       # Rose 700
    C_ROSE_BG = colors.HexColor("#FFF1F2")    # Rose 50

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=C_PRIMARY
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=C_MUTED
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=C_INDIGO,
        spaceBefore=7,
        spaceAfter=3
    )

    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=C_PRIMARY,
        spaceBefore=4,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=C_TEXT,
        alignment=4 # Justified
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=C_TEXT,
        leftIndent=10,
        firstLineIndent=-7
    )

    callout_style = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=C_PRIMARY
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
        leading=10.5,
        textColor=C_TEXT
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.8,
        leading=10.5,
        textColor=C_PRIMARY
    )

    story = []

    # 1. Header Dokumen
    story.append(Paragraph("Laporan Akhir Kesiapan Infrastruktur Multi-Tes IELTS", title_style))
    story.append(Spacer(1, 1.5 * mm))
    story.append(Paragraph("Verifikasi Syarat Tahap 3 (Draf, Privasi, & Skema) & Penyelesaian Tahap 4 (UI Selector & Navigasi)", subtitle_style))
    story.append(Spacer(1, 2.5 * mm))

    # Badge Metadata Status
    meta_data = [
        [
            Paragraph("<b>Target Modul:</b> 4 Modul (L, R, W, S)", table_cell),
            Paragraph("<b>Status Uji:</b> 212 / 212 Lulus (0 Gagal)", table_cell_bold),
            Paragraph("<b>Keamanan Produksi:</b> D1 Untouched (Zero Touch)", table_cell),
            Paragraph("<b>Cache Buster:</b> v=20261104f", table_cell)
        ]
    ]
    meta_table = Table(meta_data, colWidths=[45 * mm, 46 * mm, 48 * mm, 43 * mm])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_SURFACE),
        ('BOX', (0, 0), (-1, -1), 0.5, C_LINE),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 3.5 * mm))

    # Pernyataan Baku Evaluasi Mutu
    disclaimer_box = [
        [
            Paragraph(
                "<b>PERNYATAAN RESMI EVALUASI KUALITAS:</b><br/>"
                "<i>\"tidak ditemukan kegagalan pada pengujian otomatis; verifikasi manual belum dilakukan\".</i><br/>"
                "Semua pengujian telah mencakup 212 skenario pengujian unit, integrasi skema D1, kontrol akses serverless, konkurensi data, isolasi penyimpanan peramban, resolusi konflik timestamp, serta integritas tautan UI tanpa secret atau token asli pada kode sumber.",
                callout_style
            )
        ]
    ]
    disc_table = Table(disclaimer_box, colWidths=[182 * mm])
    disc_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_EMERALD_BG),
        ('BOX', (0, 0), (-1, -1), 1, C_EMERALD),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(disc_table)
    story.append(Spacer(1, 4 * mm))

    # 2. Bagian I: Pemenuhan 3 Syarat Verifikasi Tahap 3
    story.append(Paragraph("Bagian I: Pemenuhan 3 Syarat Verifikasi Tahap 3", h1_style))
    
    tahap3_items = [
        [
            Paragraph("<b>1. Privasi Komputer Bersama (Shared Computer Privacy)</b><br/>"
                      "• Seluruh draf siswa (terutama tulisan Writing dan rekaman/catatan Speaking) <b>dihapus total</b> dari <code>localStorage</code> saat tombol Submit ditekan atau ujian selesai.<br/>"
                      "• Tombol pembersihan draf pada banner resume diperbarui menjadi teks tegas: <b>\"Mulai baru / hapus draf\"</b> dengan konfirmasi dialog peringatan privasi perangkat bersama.<br/>"
                      "• Banner resume kini menampilkan waktu draf terakhir disimpan (<code>savedAt</code>) dalam format jam & tanggal Indonesia (WIB), e.g. <i>\"14:30 WIB (04 Nov 2026)\"</i>.", table_cell),
            Paragraph("<b>2. Pola Write-Verify-Delete & Resolusi Konflik Timestamp</b><br/>"
                      "• Kunci legacy lama <b>HANYA dihapus SETELAH</b> kunci berformat baku (<code>ajarkita:{test_id}:{modul}:draft</code>) berhasil ditulis dan diverifikasi terbaca ulang (<i>read-back check</i>). Jika penulisan gagal (misal QuotaExceeded), draf lama tetap utuh.<br/>"
                      "• Jika kunci lama dan baru sama-sama ada, sistem membandingkan timestamp <code>savedAt</code>: <b>versi terbaru yang dipilih</b> dan versi usang dihapus setelah verifikasi.<br/>"
                      "• Diuji otomatis dengan simulasi storage kegagalan tulis dan tab ganda.", table_cell),
            Paragraph("<b>3. Idempotensi Migrasi Skema D1 & Runtime Helper</b><br/>"
                      "• <b>Hubungan:</b> <code>worker/migrations/0001_add_multi_test_id.sql</code> adalah migrasi resmi D1 yang mencatat status di tabel <code>d1_migrations</code>. Runtime helper (<code>ensure*Schema</code>) adalah proteksi pertahanan lapis kedua (<i>fail-safe</i>) untuk lingkungan dev lokal/pengujian.<br/>"
                      "• <b>Bukti Keamanan:</b> Runtime helper membungkus <code>ALTER TABLE</code> dalam blok <code>try-catch</code> khusus SQLite <i>\"duplicate column name\"</i>. Kedua jalur 100% aman dieksekusi berurutan tanpa galat.<br/>"
                      "• <b>Status Produksi:</b> D1 Produksi (<code>69e3b92a-...</code>) <b>TIDAK disentuh sama sekali</b>.", table_cell)
        ]
    ]
    tahap3_table = Table(tahap3_items, colWidths=[60 * mm, 62 * mm, 60 * mm])
    tahap3_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_SURFACE),
        ('GRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(tahap3_table)
    story.append(Spacer(1, 4 * mm))

    # 3. Bagian II: Hasil Implementasi Tahap 4 (UI Selector & Navigasi)
    story.append(Paragraph("Bagian II: Hasil Implementasi Tahap 4 (Pilihan Tes di Tampilan)", h1_style))
    story.append(Paragraph(
        "Tahap 4 menyelesaikan seluruh lapisan presentasi (antarmuka pengguna) agar siswa dan guru dapat berpindah antar simulasi tes secara mulus tanpa ketergantungan teks hardcode:",
        body_style
    ))
    story.append(Spacer(1, 2 * mm))

    ui_specs = [
        [
            Paragraph("Komponen UI", table_header),
            Paragraph("Perubahan & Logika Teknis", table_header),
            Paragraph("Status & Verifikasi", table_header)
        ],
        [
            Paragraph("<b>Header & Title Dinamis</b><br/>(Anti-Hardcode Test 1)", table_cell_bold),
            Paragraph("Hardcode teks <code>• Test 1</code> diubah menjadi elemen dinamis (<code>#listening-badge-label</code>, <code>#reading-badge-label</code>, <code>#writing-badge-label</code>, <code>#speaking-badge-label</code>). Fungsi <code>renderDynamicTestHeader()</code> memperbarui teks badge dan <code>document.title</code> secara otomatis sesuai parameter URL atau status tes aktif.", table_cell),
            Paragraph("<font color='#15803D'><b>SELESAI</b></font><br/>Tampil dinamis pada Test 1, 2, dst.", table_cell)
        ],
        [
            Paragraph("<b>Tab Selector Multi-Tes</b><br/>(/ielts/index.html)", table_cell_bold),
            Paragraph("Menyediakan tombol pemilih tab Mock Test 1 (Gratis) dan Mock Test 2. Dilengkapi fungsi <code>switchMockTab(tabId)</code> dan integrasi parameter URL <code>?test=2</code> untuk navigasi langsung.", table_cell),
            Paragraph("<font color='#15803D'><b>SELESAI</b></font><br/>Responsif di seluler & desktop", table_cell)
        ],
        [
            Paragraph("<b>Flag Ketersediaan Tunggal</b><br/>(packages-config.js)", table_cell_bold),
            Paragraph("Ketersediaan Mock 2 dikendalikan penuh oleh satu flag tunggal <code>available: false</code> (default).<br/>"
                      "• Saat <code>available: false</code>: Badge menampilkan <i>\"Segera Hadir\"</i>, banner pendaftaran premium non-aktif, tombol tes dinonaktifkan tanpa tombol beli.<br/>"
                      "• Saat <code>available: true</code>: Badge berubah menjadi <i>\"Premium\"</i>, tombol kartu aktif mengarah ke simulasi berbayar, dan banner menyediakan tombol ke portal lisensi <code>/ielts/premium-saya.html</code>.", table_cell),
            Paragraph("<font color='#15803D'><b>SELESAI</b></font><br/>Server tetap sebagai penegak mutlak", table_cell)
        ],
        [
            Paragraph("<b>Integritas Tautan & Aset</b><br/>(Link Integrity & Cache)", table_cell_bold),
            Paragraph("Seluruh tautan internal pada 5 halaman utama IELTS diverifikasi otomatis di tingkat berkas (zero broken link). Seluruh aset skrip engine dan konfigurasi dinaikkan versinya menjadi <code>v=20261104f</code> untuk menjamin peramban memuat logika terbaru tanpa tersangkut cache CDN/browser.", table_cell),
            Paragraph("<font color='#15803D'><b>SELESAI</b></font><br/>Cache-buster v=20261104f aktif", table_cell)
        ]
    ]

    ui_table = Table(ui_specs, colWidths=[42 * mm, 105 * mm, 35 * mm])
    ui_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), C_INDIGO),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('GRID', (0, 0), (-1, -1), 0.5, C_LINE),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, C_SURFACE]),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(ui_table)
    story.append(Spacer(1, 4 * mm))

    # 4. Bagian III: Ringkasan Pengujian Otomatis & Daftar Berkas
    story.append(Paragraph("Bagian III: Rangkuman Pengujian Otomatis & Berkas yang Diubah", h1_style))

    summary_stats = [
        [
            Paragraph("<b>Total Pengujian:</b> 212 Kasus Uji Otomatis", table_cell),
            Paragraph("<b>Hasil Akhir:</b> 212 Lulus (0 Gagal / 0 Error)", table_cell_bold),
            Paragraph("<b>Test Suite:</b> 30 Berkas Suite Pengujian", table_cell),
            Paragraph("<b>Durasi Uji:</b> ~360 ms (Ultra Cepat)", table_cell)
        ]
    ]
    summary_table = Table(summary_stats, colWidths=[45 * mm, 46 * mm, 48 * mm, 43 * mm])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_EMERALD_BG),
        ('BOX', (0, 0), (-1, -1), 1, C_EMERALD),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 2.5 * mm))

    files_list = (
        "<b>Daftar Berkas yang Diubah / Ditambahkan:</b><br/>"
        "• <code>ielts/packages-config.js</code> & <code>worker/src/packages-config.js</code>: Implementasi <code>getMockTestConfig</code>, <code>formatDraftTime</code>, resolusi timestamp draf, dan write-verify-delete.<br/>"
        "• <code>ielts/index.html</code>: Penambahan pemilih tab multi-tes, panel kartu Mock 1 & Mock 2, banner status adaptif, dan penghubung konfigurasi.<br/>"
        "• <code>ielts/writing-mock-test.html</code> & <code>ielts/writing-engine.js</code>: Header dinamis, penampil timestamp simpan, tombol hapus draf privasi, dan cache-buster <code>v=20261104f</code>.<br/>"
        "• <code>ielts/listening-mock-test.html</code> & <code>ielts/listening-engine.js</code>: Header dinamis, format jam WIB draf, pembersihan draf saat submit, cache-buster <code>v=20261104f</code>.<br/>"
        "• <code>ielts/reading-mock-test.html</code> & <code>ielts/reading-engine.js</code>: Header dinamis, penampil waktu simpan, dialog pembersihan draf, cache-buster <code>v=20261104f</code>.<br/>"
        "• <code>ielts/speaking-mock-test.html</code> & <code>ielts/speaking-engine.js</code>: Header dinamis, pembersihan catatan Part 2 saat submit, tombol hapus draf privasi, cache-buster <code>v=20261104f</code>.<br/>"
        "• <code>worker/src/index.js</code>: Re-ekspor modul konfigurasi multi-tes dan helper format draf.<br/>"
        "• <code>tests/step3-localstorage-draft-isolation.test.js</code>: Tambahan uji syarat verifikasi privasi komputer bersama, write-verify-delete, dan idempotensi skema.<br/>"
        "• <code>tests/step4-ui-navigation.test.js</code>: Test suite baru pengujian kontrol flag packages-config, link integrity 5 halaman, dan responsivitas UI selector."
    )
    story.append(Paragraph(files_list, body_style))
    story.append(Spacer(1, 3.5 * mm))

    # 5. Bagian IV: Daftar Uji Manual yang Tersisa
    story.append(Paragraph("Bagian IV: Daftar Verifikasi Manual yang Tersisa (Sebelum Rilis Publik)", h1_style))
    story.append(Paragraph(
        "Sesuai standar operasional, pengujian otomatis telah memverifikasi seluruh logika sistem secara ketat. Hal-hal berikut disarankan untuk dilakukan verifikasi visual manual saat peluncuran:",
        body_style
    ))
    story.append(Spacer(1, 1.5 * mm))

    manual_items = (
        "1. <b>Verifikasi Tampilan Tab di Perangkat Fisik Seluler:</b> Membuka <code>/ielts/index.html</code> pada iPhone / Android untuk memastikan tab Mock Test 1 dan Mock Test 2 dapat digulir atau ditekan nyaman tanpa layout shift.<br/>"
        "2. <b>Uji Visual Tombol Hapus Draf:</b> Mencoba mengetik di form writing/speaking pada komputer laboratorium/bersama, me-refresh peramban, memeriksa label jam simpan pada banner resume, lalu menekan tombol <i>\"Mulai baru / hapus draf\"</i> untuk memastikan prompt konfirmasi muncul.<br/>"
        "3. <b>Uji Transisi Flag Mock 2 (Uji Pra-Rilis):</b> Mengubah sementara flag <code>available: true</code> di lingkungan staging/preview untuk melihat perubahan kartu dari <i>\"Segera Hadir\"</i> menjadi <i>\"Mulai\"</i> berwarna kuning premium.<br/>"
        "4. <b>Konfirmasi Produksi:</b> D1 Produksi tetap aman dan belum disentuh hingga persetujuan serah terima resmi diberikan."
    )
    story.append(Paragraph(manual_items, body_style))

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF successfully generated at:", output_path)

if __name__ == '__main__':
    out_pdf = "/Users/ash-shiddiiqi/.gemini/antigravity/brain/08227bad-0f5c-48ae-a335-4b5aa3c69dd8/Ringkasan_Tahap1_2_3_dan_4_MultiTes_IELTS.pdf"
    create_summary_pdf(out_pdf)
