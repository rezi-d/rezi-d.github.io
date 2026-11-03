import os
import sys
from datetime import datetime

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
        
        # Header (Pages > 1)
        if self._pageNumber > 1:
            self.drawString(18 * mm, 285 * mm, "Rencana Fitur Premium IELTS-Style di kimia.ajarkita.my.id")
            self.drawRightString(A4[0] - 18 * mm, 285 * mm, "AjarKita Edu Platform • November 2026")
            self.setStrokeColor(colors.HexColor("#E2E8F0"))
            self.setLineWidth(0.5)
            self.line(18 * mm, 282 * mm, A4[0] - 18 * mm, 282 * mm)
            
        # Footer
        self.setStrokeColor(colors.HexColor("#E2E8F0"))
        self.setLineWidth(0.5)
        self.line(18 * mm, 15 * mm, A4[0] - 18 * mm, 15 * mm)
        
        self.drawString(18 * mm, 10 * mm, "Dokumen Strategis Internal • Tanggapan Resmi terhadap Usulan Claude (3 Nov 2026)")
        page_str = f"Halaman {self._pageNumber} dari {page_count}"
        self.drawRightString(A4[0] - 18 * mm, 10 * mm, page_str)
        self.restoreState()

def build_pdf(filename="Rencana_Fitur_Premium_IELTS_AjarKita.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=20 * mm,
        bottomMargin=20 * mm
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#1E1B4B'),
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor('#4338CA'),
        spaceAfter=12
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=colors.HexColor('#1E1B4B'),
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor('#0F172A'),
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#334155'),
        spaceAfter=6
    )

    body_bold = ParagraphStyle(
        'Body_Bold',
        parent=body_style,
        fontName='Helvetica-Bold'
    )

    callout_style = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=colors.HexColor('#1E293B')
    )

    bullet_style = ParagraphStyle(
        'Bullet_Custom',
        parent=body_style,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=3
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#1E293B')
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.white
    )

    story = []

    # Title block
    story.append(Paragraph("Rencana Strategis & Teknis Fitur Premium IELTS-Style", title_style))
    story.append(Paragraph("Platform: <b>kimia.ajarkita.my.id</b> (AjarKita Edu Platform) &bull; Tanggal: 3 November 2026", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#4338CA'), spaceBefore=0, spaceAfter=10))

    # Ringkasan Eksekutif Callout
    summary_html = """
    <b>RINGKASAN EKSEKUTIF & EVALUASI USULAN:</b><br/>
    Dokumen saran dari Claude (3 November 2026) mengenai target pasar publik dan harga <b>Rp35.000</b> dinilai <b>sangat realistis dan tepat sasaran</b>. 
    Perubahan audiens dari <i>lingkungan kelas sekolah tertutup</i> ke <i>konsumen publik bebas</i> mengubah asumsi biaya, kapasitas server, dan beban operasional guru.
    Rencana ini membedah mitigasi teknis dan bisnis agar peluncuran fitur premium IELTS di AjarKita berjalan menguntungkan, aman dari kelebihan beban server, dan terbebas dari sengketa operasional.
    """
    summary_table = Table([[Paragraph(summary_html, callout_style)]], colWidths=[174 * mm])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#EEF2FF')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#818CF8')),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 8))

    # BAGIAN 1: JAWABAN ATAS 2 PERTANYAAN KUNCI CLAUDE
    story.append(Paragraph("1. Jawaban atas Dua Pertanyaan Kunci Usulan Claude", h1_style))
    
    p1_text = """
    <b>Pertanyaan 1: Fitur premium saat ini dibeli lewat cara apa?</b><br/>
    &bull; <b>Status Saat Ini:</b> Pembelian dilakukan secara semi-manual via <b>WhatsApp Admin (0852-6660-1477)</b>. Setelah bukti transfer diverifikasi, admin menerbitkan kode token lisensi 16-karakter (format <code>SNBT-XXXX-XXXX-XXXX</code>) lewat panel server.<br/>
    &bull; <b>Rekomendasi untuk Publik:</b> Tetap buka jalur WhatsApp untuk mempertahankan margin 100% (Rp35.000 utuh). Jika ingin otomatisasi checkout instan, gunakan <b>QRIS Payment Gateway</b> (biaya hanya <b>0,7% = Rp245</b> per transaksi). <u>Hindari Virtual Account (VA)</u> karena biaya tetapnya berkisar Rp2.000–Rp4.000, yang memotong 6%–11% omzet pada harga tiket Rp35.000.
    """
    story.append(Paragraph(p1_text, body_style))

    p2_text = """
    <b>Pertanyaan 2: Apakah Rp35.000 itu sekali bayar atau per periode?</b><br/>
    &bull; <b>Keputusan: HARUS BERLANGGANAN PER PERIODE (30 Hari atau 90 Hari), BUKAN AKSES SEUMUR HIDUP.</b><br/>
    &bull; <b>Alasan Bisnis & Arsitektur:</b> Database D1 (tabel <code>licenses</code>) telah dirancang dengan kolom <code>duration_days</code> dan otomatis menghitung sisa hari aktif (<code>remainingDays</code>). Menjanjikan akses 'seumur hidup' untuk Rp35.000 menciptakan kewajiban server dan dukungan tak terbatas yang merugikan di masa depan. Kebutuhan belajar intensif IELTS pada umumnya berlangsung 1–3 bulan sebelum jadwal ujian resmi.
    """
    story.append(Paragraph(p2_text, body_style))
    story.append(Spacer(1, 6))

    # BAGIAN 2: BEBAN OPERASIONAL & PENILAIAN MANUAL
    story.append(Paragraph("2. Pemisahan Fitur Mandiri vs. Beban Guru (Writing & Speaking)", h1_style))
    story.append(Paragraph(
        "Kekhawatiran terbesar dalam dokumen Claude adalah janji <b>penilaian guru manusia pada Writing dan Speaking di harga Rp35.000</b>. "
        "Di sekolah, guru memeriksa esai dan rekaman siswa sebagai tugas kedinasan. Namun jika 1.000 pengguna publik membeli paket tersebut, "
        "tidak ada guru yang sanggup mengoreksi ribuan esai dan audio dengan kompensasi yang sangat kecil.",
        body_style
    ))

    # Warning Box
    warn_html = """
    <b>KEBIJAKAN PEMISAHAN PRODUK (TIERING STRATEGY):</b><br/>
    <b>Paket Standar Publik (Rp35.000 / 30 Hari)</b> adalah paket <b>LATIHAN & EVALUASI MANDIRI</b>. 
    Siswa mendapatkan simulasi waktu nyata, kunci jawaban terperinci, contoh esai resmi Band 8.5/9.0, audit kata/paragraf otomatis, 
    dan pemutar rekaman suara mandiri. Penilaian manual guru <u>TIDAK TERMASUK</u> di dalam paket Rp35.000.<br/>
    <b>Layanan Tambahan Koreksi Guru:</b> Ditawarkan sebagai <i>Add-on Voucher</i> terpisah (+Rp25.000–Rp50.000 per esai/speaking review) atau khusus paket B2B kemitraan sekolah.
    """
    warn_table = Table([[Paragraph(warn_html, callout_style)]], colWidths=[174 * mm])
    warn_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#FEF3C7')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#F59E0B')),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(warn_table)
    story.append(Spacer(1, 10))

    # TABEL STRUKTUR FITUR
    story.append(Paragraph("Tabel Pembagian Paket Fitur IELTS di kimia.ajarkita.my.id", h2_style))
    table_data = [
        [
            Paragraph("Subtes / Fitur", table_header),
            Paragraph("Trial / Mock 1 (Gratis)", table_header),
            Paragraph("Premium Mandiri (Rp35.000)", table_header),
            Paragraph("Kemitraan Guru / Add-on", table_header)
        ],
        [
            Paragraph("<b>Listening</b> (40 Soal)", table_cell),
            Paragraph("Akses Penuh • Audio Kontinu", table_cell),
            Paragraph("Akses Semua Paket • Pembahasan", table_cell),
            Paragraph("Termasuk dalam Rekap Kelas", table_cell)
        ],
        [
            Paragraph("<b>Reading</b> (40 Soal)", table_cell),
            Paragraph("Akses Penuh • Timer 60 Menit", table_cell),
            Paragraph("Akses Semua Passage & Bukti Teks", table_cell),
            Paragraph("Termasuk dalam Rekap Kelas", table_cell)
        ],
        [
            Paragraph("<b>Writing</b> (Task 1 & 2)", table_cell),
            Paragraph("Editor & Audit Struktur Kata", table_cell),
            Paragraph("Self-Review + Sample Band 8.5+", table_cell),
            Paragraph("Penilaian Manual 4 Kriteria Guru", table_cell)
        ],
        [
            Paragraph("<b>Speaking</b> (Part 1–3)", table_cell),
            Paragraph("Perekaman Suara Mandiri", table_cell),
            Paragraph("Draf Transkrip & Self-Playback", table_cell),
            Paragraph("Evaluasi 4 Rubrik Resmi Guru", table_cell)
        ],
        [
            Paragraph("<b>Rekap & Sertifikat</b>", table_cell),
            Paragraph("Rangkuman Nilai Sesi", table_cell),
            Paragraph("Rangkuman Overall L+R Mandiri", table_cell),
            Paragraph("Overall Band Lengkap 4 Subtes", table_cell)
        ]
    ]

    tier_table = Table(table_data, colWidths=[38 * mm, 44 * mm, 48 * mm, 44 * mm])
    tier_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#312E81')),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F8FAFC')]),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(tier_table)
    story.append(Spacer(1, 10))

    # BAGIAN 3: BIAYA & INFRASTRUKTUR CLOUDFLARE
    story.append(Paragraph("3. Analisis Biaya Server, Batas Cloudflare, & Penyimpanan", h1_style))
    story.append(Paragraph(
        "Kapasitas Cloudflare paket gratisan mencakup 100.000 request/hari, 100.000 row write/hari, dan D1 SQLite 500 MB. "
        "Berikut mitigasi teknis yang telah diterapkan serta rencana skalabilitasnya:",
        body_style
    ))

    story.append(Paragraph("&bull; <b>Sistem Retensi D1 yang Telah Aktif:</b> Telah dipasang <code>Cron Trigger</code> harian (pukul 03.00 WIB) yang otomatis menghapus rekaman dinilai &gt; 14 hari dan belum dinilai &gt; 60 hari. Hal ini mencegah penumpukan audio usang di database 500 MB.", bullet_style))
    story.append(Paragraph("&bull; <b>Perhitungan Titik Impas Workers Paid:</b> Jika kuota gratis terlampaui saat promosi publik ramai, upgrade ke Cloudflare Workers Paid membutuhkan biaya <b>$5/bulan (~Rp80.000)</b>. Dengan harga Rp35.000, <b>cukup 3 penjualan per bulan untuk menutup 100% biaya server</b>.", bullet_style))
    story.append(Paragraph("&bull; <b>Penyimpanan Biner Audio (R2 Storage):</b> Saat ini audio disimpan di D1 Base64. Jika transaksi publik meningkat pesat dan metode pembayaran kartu telah tersedia, pemindahan biner audio ke Cloudflare R2 (10 GB gratis) akan menghapus kekhawatiran kapasitas selamanya.", bullet_style))
    story.append(Spacer(1, 6))

    # BAGIAN 4: KEAMANAN, AKSES, & HAK CIPTA
    story.append(Paragraph("4. Keamanan Akses, Data Pribadi, & Hak Cipta Merek", h1_style))
    
    sec_text = """
    &bull; <b>Turnstile CAPTCHA pada Form Publik:</b> Alur 'tanpa login' pada simulasi gratis berisiko dibanjiri bot spam. Diterapkan Cloudflare Turnstile (gratis & mulus tanpa teka-teki gambar) untuk mengamankan pembuatan sesi.<br/>
    &bull; <b>Proteksi Soal Premium di Server:</b> Berkas soal premium disimpan di <code>env.ASSETS</code> privat (bukan URL statis publik) dan hanya dikirim setelah token SHA-256 dan <code>device_id</code> tervalidasi di backend Cloudflare Worker.<br/>
    &bull; <b>Pembatasan Perangkat (Anti Account-Sharing):</b> Setiap token lisensi dibatasi maksimal terikat pada <b>2 perangkat</b> unik siswa.<br/>
    &bull; <b>Kepatuhan Merek Dagang IELTS:</b> Istilah 'IELTS' adalah merek dagang IDP, British Council, dan Cambridge. Di seluruh halaman situs dan footer dicantumkan pernyataan non-afiliasi: <i>'Simulasi IELTS-Style mandiri, tidak berafiliasi maupun didukung secara resmi oleh University of Cambridge atau IDP'</i>.
    """
    story.append(Paragraph(sec_text, body_style))
    story.append(Spacer(1, 6))

    # BAGIAN 5: ROADMAP PELUNCURAN BERTINGKAT
    story.append(Paragraph("5. Urutan Peluncuran Bertahap yang Disepakati (Roadmap)", h1_style))

    roadmap_data = [
        [
            Paragraph("Fase", table_header),
            Paragraph("Fokus Kegiatan", table_header),
            Paragraph("Target Waktu & Sasaran", table_header)
        ],
        [
            Paragraph("<b>Fase 1</b><br/>Uji Coba Kelas", table_cell),
            Paragraph("Pengujian intensif 4 subtes di lingkungan siswa sekolah asli. Memastikan stabilitas timer, sistem rekam suara audio, dan reliabilitas dashboard guru.", table_cell),
            Paragraph("<b>Selesai / Sedang Berjalan</b><br/>Evaluasi bug & akurasi skor", table_cell)
        ],
        [
            Paragraph("<b>Fase 2</b><br/>Rilis Paket Rp35k", table_cell),
            Paragraph("Membuka paket Premium Mandiri publik (Listening, Reading, Writing self-review) dengan aktivasi WhatsApp/QRIS. Speaking dibatasi 1 rekaman aktif per akun.", table_cell),
            Paragraph("<b>Bulan ke-1 Peluncuran</b><br/>Target: 20–50 lisensi pertama", table_cell)
        ],
        [
            Paragraph("<b>Fase 3</b><br/>Monitoring & Audit", table_cell),
            Paragraph("Memantau log penghapusan berkala D1 (cleanup_logs), volume request Worker harian, dan respons umpan balik pembeli mandiri.", table_cell),
            Paragraph("<b>Bulan ke-2 Peluncuran</b><br/>Evaluasi kapasitas D1 & Workers", table_cell)
        ],
        [
            Paragraph("<b>Fase 4</b><br/>Skalabilitas & R2", table_cell),
            Paragraph("Jika penjualan konsisten tembus &gt;50 lisensi/bulan: aktifkan Workers Paid ($5), pindahkan audio ke R2, dan tawarkan add-on evaluasi guru berbayar khusus.", table_cell),
            Paragraph("<b>Bulan ke-3 ke Depan</b><br/>Ekspansi kemitraan bimbel/sekolah", table_cell)
        ]
    ]

    roadmap_table = Table(roadmap_data, colWidths=[28 * mm, 100 * mm, 46 * mm])
    roadmap_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1E1B4B')),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F8FAFC')]),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(roadmap_table)
    story.append(Spacer(1, 10))

    # Kesimpulan & Tanda Tangan
    concl_html = """
    <b>KESIMPULAN:</b><br/>
    Rencana penambahan fitur IELTS-style ke paket premium <b>Rp35.000</b> di <code>kimia.ajarkita.my.id</code> sangat layak dijalankan dengan syarat 
    <b>menegaskan batas layanan mandiri (tanpa evaluasi manual guru)</b>, menerapkan <b>masa langganan 30/90 hari</b>, serta mengandalkan 
    <b>sistem retensi D1 harian</b> yang telah berhasil kita terapkan.
    """
    concl_table = Table([[Paragraph(concl_html, callout_style)]], colWidths=[174 * mm])
    concl_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#F0FDF4')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#22C55E')),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(concl_table)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF berhasil dibuat: {filename} ({os.path.getsize(filename)} bytes)")

if __name__ == '__main__':
    build_pdf()
