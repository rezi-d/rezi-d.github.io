#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/generate_juknis_pdf.py
Menghasilkan dokumen PDF Petunjuk Teknis (Juknis) Resmi
Pelaporan Tugas Susulan Google Classroom - Platform AjarKita
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    """Canvas dua-pass untuk menyematkan nomor halaman dinamis (Halaman X dari Y)."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_footer(num_pages)
            super().showPage()
        super().save()

    def draw_footer(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # Garis pembatas footer
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(40, 36, A4[0] - 40, 36)
        
        # Teks Footer Kiri & Kanan
        text_left = "Petunjuk Teknis Pelaporan Tugas • SMA IT Ash-Shiddiiqi Islamic Boarding School"
        text_right = f"Halaman {self._pageNumber} dari {page_count}"
        
        self.drawString(40, 24, text_left)
        self.drawRightString(A4[0] - 40, 24, text_right)
        self.restoreState()

def build_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=38,
        rightMargin=38,
        topMargin=36,
        bottomMargin=46
    )

    styles = getSampleStyleSheet()
    
    # Kustomisasi Styles
    primary_color = colors.HexColor("#1e3a8a")
    secondary_color = colors.HexColor("#0284c7")
    text_dark = colors.HexColor("#0f172a")
    text_muted = colors.HexColor("#475569")
    bg_light = colors.HexColor("#f8fafc")

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=primary_color,
        alignment=0,
        spaceAfter=3
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_muted,
        alignment=0,
        spaceAfter=10
    )

    h1_style = ParagraphStyle(
        'Heading1Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=primary_color,
        spaceBefore=10,
        spaceAfter=5
    )

    h2_style = ParagraphStyle(
        'Heading2Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=secondary_color,
        spaceBefore=6,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_dark
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_dark,
        leftIndent=12
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=colors.HexColor("#1e293b")
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10.5,
        textColor=text_dark
    )

    tag_style = ParagraphStyle(
        'TagStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9,
        textColor=colors.white,
        alignment=1
    )

    notice_style = ParagraphStyle(
        'NoticeStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor("#1e3a8a")
    )

    story = []

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    assets_dir = os.path.join(base_dir, "docs", "assets", "juknis")
    logo_path = os.path.join(assets_dir, "logo-ash-shiddiiqi.jpg")

    logo_img = Image(logo_path, width=40, height=48) if os.path.exists(logo_path) else Paragraph("<b>LOGO</b>", body_style)

    # --- 1. KOP SURAT RESMI SMA IT ASH-SHIDDIIQI ---
    kop_data = [
        [
            logo_img,
            Paragraph("<b><font size='10.5' color='#166534'>SMA IT ASH-SHIDDIIQI</font></b><br/>"
                      "<b><font size='8.5' color='#0f172a'>ISLAMIC BOARDING SCHOOL</font></b><br/>"
                      "<font size='7.5' color='#475569'>Sistem Informasi &amp; Manajemen Pelaporan Tugas Siswa<br/>"
                      "Portal Resmi: <b>https://kimia.ajarkita.my.id</b></font>", body_style),
            Paragraph("<b>No. Dokumen:</b> JUKNIS/AK-TGS/2026/01<br/>"
                      "<b>Edisi:</b> Semester Ganjil 2026/2027<br/>"
                      "<b>Sifat:</b> Terbuka untuk Seluruh Siswa", ParagraphStyle('KopMeta', parent=body_style, fontSize=7.5, leading=10.5, alignment=2))
        ]
    ]
    kop_table = Table(kop_data, colWidths=[46, 290, 183])
    kop_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(kop_table)
    story.append(HRFlowable(width="100%", thickness=1.8, color=colors.HexColor("#166534"), spaceBefore=4, spaceAfter=8))

    # --- 2. JUDUL DOKUMEN ---
    title_box_data = [
        [
            Paragraph("<b>PETUNJUK TEKNIS (JUKNIS) OPERASIONAL</b><br/>"
                      "<font size='8' color='#475569'>Tata Cara Pelaporan Tugas Susulan Google Classroom yang Telah Ditutup Melalui Formulir Digital AjarKita</font>", title_style)
        ]
    ]
    title_table = Table(title_box_data, colWidths=[519])
    title_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#eff6ff")),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#bfdbfe")),
        ('LINEBEFORE', (0,0), (0,-1), 3.5, primary_color),
    ]))
    story.append(title_table)
    story.append(Spacer(1, 8))

    # --- 3. LATAR BELAKANG & TUJUAN ---
    story.append(Paragraph("<b>1. Latar Belakang &amp; Tujuan</b>", h1_style))
    story.append(Paragraph(
        "Ketika kantung penugasan di <b>Google Classroom (GC) telah resmi ditutup</b>, siswa yang menyerahkan tugas susulan secara fisik (buku tugas/kertas kerja) seringkali menghadapi kendala pencatatan yang terselip atau lambat terdata oleh guru mata pelajaran. "
        "Formulir Digital AjarKita disediakan sebagai jembatan resmi untuk mencatat penyerahan berkas fisik secara real-time dan memberikan <b>Nomor Resi Referensi Sah</b> bagi siswa.",
        body_style
    ))
    story.append(Spacer(1, 4))

    # --- 4. KETENTUAN UMUM ---
    story.append(Paragraph("<b>2. Ketentuan Umum &amp; Persiapan Siswa</b>", h1_style))
    persiapan_data = [
        [
            Paragraph("<b>Ketentuan Penting Sebelum Mengisi:</b><br/>"
                      "1. Siswa telah <b>menyerahkan tugas fisik</b> di meja guru/wali kelas sesuai instruksi sekolah.<br/>"
                      "2. Meminta <b>Kode Akses Periode</b> (contoh: <b>TGS-SEMGAN</b>) kepada guru mapel atau wali kelas.<br/>"
                      "3. Form dapat diakses melalui ponsel (HP), laptop, atau PC di <b>https://kimia.ajarkita.my.id</b>.<br/>"
                      "4. Sesi pengisian aktif dibatasi maksimal <b>30 menit</b> demi keamanan privasi di gawai bersama.", notice_style)
        ]
    ]
    persiapan_table = Table(persiapan_data, colWidths=[519])
    persiapan_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('LINEBEFORE', (0,0), (0,-1), 3, secondary_color),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(persiapan_table)
    story.append(Spacer(1, 10))

    # --- 5. LANGKAH-LANGKAH OPERASIONAL (STEP BY STEP) ---
    story.append(Paragraph("<b>3. Langkah-Langkah Pelaporan (Berdasarkan Panduan Antarmuka)</b>", h1_style))
    story.append(Spacer(1, 4))

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    assets_dir = os.path.join(base_dir, "docs", "assets", "juknis")

    # LANGKAH 0: TOMBOL FAB
    p0_img = os.path.join(assets_dir, "step0-tombol-lapor.jpg")
    p0_img_flow = Image(p0_img, width=225, height=128) if os.path.exists(p0_img) else Paragraph("[Gambar 1]", body_style)

    step0_desc = Paragraph(
        "<b>Langkah Awal: Menemukan Tombol 'Lapor Tugas'</b><br/><br/>"
        "1. Buka situs <b>https://kimia.ajarkita.my.id</b> pada peramban (Chrome / Edge / Safari).<br/>"
        "2. Lihat pojok <b>kanan bawah layar</b> Anda.<br/>"
        "3. Klik tombol mengambang berwarna gelap bertuliskan <b>'Lapor Tugas'</b> (lihat tanda panah merah pada gambar).<br/>"
        "4. Jendela formulir pelaporan akan langsung muncul di tengah layar.",
        body_style
    )
    step0_table = Table([[p0_img_flow, step0_desc]], colWidths=[235, 284])
    step0_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BACKGROUND', (0,0), (-1,-1), colors.white),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(step0_table)
    story.append(Spacer(1, 12))

    # --- HALAMAN 2: LANGKAH 1 & 2 ---
    story.append(PageBreak())

    # LANGKAH 1: KODE AKSES
    p1_img = os.path.join(assets_dir, "step1-kode-akses.jpg")
    p1_img_flow = Image(p1_img, width=225, height=138) if os.path.exists(p1_img) else Paragraph("[Gambar 2]", body_style)

    step1_table_data = [
        [Paragraph("<b>No</b>", table_header_style), Paragraph("<b>Elemen Formulir</b>", table_header_style), Paragraph("<b>Keterangan &amp; Tindakan</b>", table_header_style)],
        [Paragraph("<font color='#ef4444'><b>[1]</b></font>", table_cell_style), Paragraph("<b>Kode Akses Periode</b>", table_cell_style), Paragraph("Ketik kode akses dari guru (Contoh: <b>TGS-SEMGAN</b> atau <b>SEMGAN</b>).", table_cell_style)],
        [Paragraph("-", table_cell_style), Paragraph("<b>Verifikasi Keamanan</b>", table_cell_style), Paragraph("Tunggu centang hijau Cloudflare Turnstile (<b>Success!</b>).", table_cell_style)],
        [Paragraph("<font color='#ef4444'><b>[2]</b></font>", table_cell_style), Paragraph("<b>Verifikasi Kode &rarr;</b>", table_cell_style), Paragraph("Klik tombol biru untuk memeriksa keabsahan kode dan membuka sesi.", table_cell_style)],
    ]
    t1 = Table(step1_table_data, colWidths=[24, 95, 155])
    t1.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#f1f5f9")),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))

    step1_content = [
        Paragraph("<b>Langkah 1: Masukkan Kode Akses &amp; Keamanan</b>", h2_style),
        t1,
        Spacer(1, 3),
        Paragraph("<font size='7' color='#b45309'><i>Tips: Kode tidak peka huruf besar/kecil (case-insensitive).</i></font>", body_style)
    ]
    step1_table = Table([[p1_img_flow, step1_content]], colWidths=[235, 284])
    step1_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(step1_table)
    story.append(Spacer(1, 14))

    # LANGKAH 2: IDENTITAS SISWA
    p2_img = os.path.join(assets_dir, "step2-identitas-siswa.png")
    p2_img_flow = Image(p2_img, width=225, height=135) if os.path.exists(p2_img) else Paragraph("[Gambar 3]", body_style)

    step2_table_data = [
        [Paragraph("<b>No</b>", table_header_style), Paragraph("<b>Elemen Formulir</b>", table_header_style), Paragraph("<b>Keterangan &amp; Tindakan</b>", table_header_style)],
        [Paragraph("<font color='#ef4444'><b>[1]</b></font>", table_cell_style), Paragraph("<b>Nama Lengkap Siswa</b>", table_cell_style), Paragraph("Ketik nama lengkap sesuai buku rapor / absen resmi (Contoh: <b>Muhammad Fikri Haikal</b>).", table_cell_style)],
        [Paragraph("<font color='#ef4444'><b>[2]</b></font>", table_cell_style), Paragraph("<b>Pilihan Kelas</b>", table_cell_style), Paragraph("Pilih kelas Anda dari menu dropdown (Contoh: <b>XI IPA Putra</b>).", table_cell_style)],
        [Paragraph("<font color='#ef4444'><b>[3]</b></font>", table_cell_style), Paragraph("<b>Lanjut ke Rincian &rarr;</b>", table_cell_style), Paragraph("Klik tombol biru untuk menuju halaman pengisian rincian tugas.", table_cell_style)],
    ]
    t2 = Table(step2_table_data, colWidths=[24, 95, 155])
    t2.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#f1f5f9")),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))

    step2_content = [
        Paragraph("<b>Langkah 2: Mengisi Identitas Siswa</b>", h2_style),
        t2,
        Spacer(1, 3),
        Paragraph("<font size='7' color='#0369a1'><i>Pemberitahuan: Nama ini akan dicocokkan langsung oleh guru mapel.</i></font>", body_style)
    ]
    step2_table = Table([[p2_img_flow, step2_content]], colWidths=[235, 284])
    step2_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(step2_table)
    story.append(Spacer(1, 14))

    # --- HALAMAN 3: LANGKAH 3, 4, & FAQ ---
    story.append(PageBreak())

    # LANGKAH 3: RINCIAN BUTIR TUGAS
    p3_img = os.path.join(assets_dir, "step3-rincian-tugas.jpg")
    p3_img_flow = Image(p3_img, width=225, height=138) if os.path.exists(p3_img) else Paragraph("[Gambar 4]", body_style)

    step3_table_data = [
        [Paragraph("<b>No</b>", table_header_style), Paragraph("<b>Kolom Isian</b>", table_header_style), Paragraph("<b>Keterangan</b>", table_header_style)],
        [Paragraph("<font color='#ef4444'><b>[1]</b></font>", table_cell_style), Paragraph("<b>Mata Pelajaran</b>", table_cell_style), Paragraph("Pilih mapel (tersedia 27 mapel resmi).", table_cell_style)],
        [Paragraph("<font color='#ef4444'><b>[2]</b></font>", table_cell_style), Paragraph("<b>Tanggal Serah</b>", table_cell_style), Paragraph("Tanggal berkas diserahkan (bawaan: hari ini).", table_cell_style)],
        [Paragraph("<font color='#ef4444'><b>[3]</b></font>", table_cell_style), Paragraph("<b>Judul / Nama Tugas</b>", table_cell_style), Paragraph("Ketik judul tugas (Contoh: <b>Tugas 3 Listening</b>).", table_cell_style)],
        [Paragraph("<font color='#ef4444'><b>[4]</b></font>", table_cell_style), Paragraph("<b>Catatan Fisik</b>", table_cell_style), Paragraph("Opsional: misal <i>'di map merah meja guru'</i>.", table_cell_style)],
        [Paragraph("<font color='#7c3aed'><b>[5*]</b></font>", table_cell_style), Paragraph("<b>+ Tambah Tugas</b>", table_cell_style), Paragraph("Klik jika ingin lapor lebih dari 1 tugas sekaligus.", table_cell_style)],
        [Paragraph("<font color='#ef4444'><b>[6]</b></font>", table_cell_style), Paragraph("<b>Kirim Laporan &rarr;</b>", table_cell_style), Paragraph("Klik tombol biru untuk mengirim ke database guru.", table_cell_style)],
    ]
    t3 = Table(step3_table_data, colWidths=[24, 95, 155])
    t3.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#f1f5f9")),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))

    step3_content = [
        Paragraph("<b>Langkah 3: Butir Tugas yang Diserahkan</b>", h2_style),
        t3
    ]
    step3_table = Table([[p3_img_flow, step3_content]], colWidths=[235, 284])
    step3_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(step3_table)
    story.append(Spacer(1, 12))

    # LANGKAH 4: RESI DIGITAL
    p4_img = os.path.join(assets_dir, "step4-resi-digital.png")
    p4_img_flow = Image(p4_img, width=225, height=138) if os.path.exists(p4_img) else Paragraph("[Gambar 5]", body_style)

    step4_content = [
        Paragraph("<b>Langkah 4: Bukti Resi Referensi Sah</b>", h2_style),
        Paragraph("<font color='#059669'><b>✔ Laporan Berhasil Diterima!</b></font><br/>"
                  "Sistem otomatis menerbitkan Nomor Tanda Terima resmi (contoh: <b>TSG-TYC4M3</b>).<br/><br/>"
                  "<b>Tindakan Siswa:</b><br/>"
                  "• Klik tombol <b>'Salin Nomor Referensi'</b> atau lakukan tangkapan layar (screenshot) sebagai bukti.<br/>"
                  "• <font color='#ef4444'><b>[1]</b></font> Klik tombol biru <b>'Selesai &amp; Bersihkan Sesi'</b> untuk mengosongkan memori formulir dari gawai demi keamanan bersama.", body_style)
    ]
    step4_table = Table([[p4_img_flow, step4_content]], colWidths=[235, 284])
    step4_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(step4_table)
    story.append(Spacer(1, 10))

    # --- 6. FAQ ---
    story.append(Paragraph("<b>4. Pertanyaan yang Sering Diajukan (FAQ)</b>", h1_style))
    faq_data = [
        [
            Paragraph("<b>Q: Bagaimana jika saya salah ketik judul atau ingin menambah tugas lagi?</b><br/>"
                      "A: Cukup buka kembali formulir dan laporkan ulang. Sistem memperlakukan laporan terakhir sebagai revisi terkini.<br/>"
                      "<b>Q: Kapan status tugas saya berubah menjadi 'Dikonfirmasi'?</b><br/>"
                      "A: Guru mapel akan memeriksa berkas fisik Anda via Dashboard Guru dan mengubah statusnya menjadi Dikonfirmasi.", notice_style)
        ]
    ]
    faq_table = Table(faq_data, colWidths=[519])
    faq_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('LINEBEFORE', (0,0), (0,-1), 3, primary_color),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(faq_table)

    # Build PDF dengan custom NumberedCanvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"[OK] Berhasil menghasilkan file PDF: {output_path}")

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_docs = os.path.join(base_dir, "docs", "Juknis-Pelaporan-Tugas-Google-Classroom.pdf")
    out_root = os.path.join(base_dir, "Juknis-Pelaporan-Tugas-Google-Classroom.pdf")
    
    build_pdf(out_docs)
    build_pdf(out_root)
