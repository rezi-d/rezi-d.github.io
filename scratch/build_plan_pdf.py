import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

PDF_FILENAME = "Ringkasan_Rencana_Kerja_MultiTes_IELTS.pdf"
ARTIFACT_DIR = "/Users/ash-shiddiiqi/.gemini/antigravity/brain/08227bad-0f5c-48ae-a335-4b5aa3c69dd8"
OUT_PATH_ARTIFACT = os.path.join(ARTIFACT_DIR, PDF_FILENAME)
OUT_PATH_WORKSPACE = os.path.join("/Users/ash-shiddiiqi/pengembangan web kimia", PDF_FILENAME)

class NumberedCanvas(canvas.Canvas):
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
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, total_pages):
        self.saveState()
        self.setFont("Helvetica-Bold", 7.5)
        self.setFillColor(colors.HexColor("#475569"))

        # Running Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(1.6 * cm, 28.5 * cm, "Platform AjarKita — Spesifikasi Teknis Rencana Kerja Multi-Test IELTS")
            self.drawRightString(21 * cm - 1.6 * cm, 28.5 * cm, "Rencana Kerja Pra-Eksekusi")
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(1.6 * cm, 28.3 * cm, 21 * cm - 1.6 * cm, 28.3 * cm)

        # Running Footer
        self.setFont("Helvetica", 7.5)
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(1.6 * cm, 1.4 * cm, 21 * cm - 1.6 * cm, 1.4 * cm)

        self.drawString(1.6 * cm, 0.95 * cm, "Dokumen Perencanaan Internal • Wajib Disetujui Pengguna Sebelum Eksekusi Dimulai")
        page_str = f"Halaman {self._pageNumber} dari {total_pages}"
        self.drawRightString(21 * cm - 1.6 * cm, 0.95 * cm, page_str)
        self.restoreState()

def build_pdf():
    doc = SimpleDocTemplate(
        OUT_PATH_ARTIFACT,
        pagesize=A4,
        leftMargin=1.6 * cm,
        rightMargin=1.6 * cm,
        topMargin=1.8 * cm,
        bottomMargin=1.8 * cm
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=19,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=3
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#475569'),
        spaceAfter=8
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=colors.HexColor('#1e293b'),
        spaceBefore=7,
        spaceAfter=4
    )

    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#1e293b'),
        spaceBefore=5,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'DocBullet',
        parent=body_style,
        leftIndent=12,
        bulletIndent=3,
        spaceAfter=2
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor('#0f172a')
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        leading=9,
        textColor=colors.HexColor('#334155')
    )

    elements = []

    # =========================================================================
    # HALAMAN 1: Header, Metadata, Tujuan & Prinsip, dan Tahap 1
    # =========================================================================
    elements.append(Paragraph("RENCANA KERJA MULTI-TEST IELTS AJARKITA", title_style))
    elements.append(Paragraph("Spesifikasi Rencana Arsitektur &amp; 4 Tahap Pengerjaan Infrastruktur (Sebelum Penambahan Konten Mock 2)", subtitle_style))

    meta_data = [
        [
            Paragraph("<b>Target Modul:</b> 4 Skill (Listening, Reading, Writing, Speaking)", table_cell_style),
            Paragraph("<b>Prinsip Inti:</b> Zero-Content &amp; Zero-Regression", table_cell_style),
            Paragraph("<b>Status:</b> Menunggu Persetujuan User", table_cell_style)
        ],
        [
            Paragraph("<b>Penyusun:</b> Tim Pengembang Teknis AjarKita", table_cell_style),
            Paragraph("<b>Standar Uji:</b> Evaluasi Terkontrol (Fail-Closed)", table_cell_style),
            Paragraph("<b>Tanggal:</b> 4 November 2026", table_cell_style)
        ]
    ]
    meta_table = Table(meta_data, colWidths=[6.0 * cm, 6.0 * cm, 5.8 * cm])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    elements.append(meta_table)
    elements.append(Spacer(1, 6))

    elements.append(Paragraph("1. TUJUAN SISTEM &amp; BATASAN UMUM WAJIB", h1_style))
    elements.append(Paragraph(
        "Tujuan proyek adalah membangun infrastruktur teknis agar platform AjarKita mendukung multi-tes secara fleksibel (Mock 1 gratis, Mock 2+ premium) <b>SEBELUM</b> naskah soal Mock 2 dipasang. Proyek dilaksanakan bertahap, diuji otomatis pada setiap langkah, dan <b>tidak melangkah ke tahap berikutnya tanpa persetujuan eksplisit pengguna</b>.",
        body_style
    ))

    rules_data = [
        [Paragraph("<b>Aturan Dasar</b>", table_header_style), Paragraph("<b>Ketentuan &amp; Batasan Wajib</b>", table_header_style)],
        [Paragraph("1. Zero Content", table_cell_style), Paragraph("DILARANG menambahkan soal, kunci jawaban, atau berkas audio Mock 2 selama pekerjaan infrastruktur.", table_cell_style)],
        [Paragraph("2. Zero Regression", table_cell_style), Paragraph("Perilaku Mock 1 tidak boleh berubah sedikit pun. Seluruh 184 uji otomatis (26 suite) wajib tetap lulus 100%.", table_cell_style)],
        [Paragraph("3. Pengerjaan Berurutan", table_cell_style), Paragraph("Eksekusi dilakukan bertahap (Tahap 1 &rarr; 2 &rarr; 3 &rarr; 4). Tiap tahap dilaporkan sebelum lanjut.", table_cell_style)],
        [Paragraph("4. Pelaporan Objektif", table_cell_style), Paragraph("Wajib menggunakan bahasa baku: <i>'tidak ditemukan kegagalan pada pengujian otomatis; verifikasi manual belum dilakukan'</i>.", table_cell_style)],
        [Paragraph("5. Bebas Secret", table_cell_style), Paragraph("DILARANG menaruh token asli, secret key, atau pepper di kode repositori, commit log, maupun laporan.", table_cell_style)],
    ]
    rules_table = Table(rules_data, colWidths=[3.8 * cm, 14.0 * cm])
    rules_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f1f5f9')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    elements.append(rules_table)
    elements.append(Spacer(1, 6))

    elements.append(Paragraph("2. RINCIAN TAHAP 1: KEAMANAN AKSES SERVER (Prioritas Tertinggi)", h1_style))
    elements.append(Paragraph(
        "<b>Tujuan:</b> Memasang pengaman server agar konten berbayar (Mock 2+) terlindungi dari akses tanpa lisensi, baik via URL langsung maupun manipulasi request.",
        body_style
    ))
    t1_points = [
        "<b>Verifikasi Server-Side Fail-Closed:</b> Seluruh endpoint 4 modul (<i>start, save-progress, submit, status, detail, audio</i>) wajib memeriksa token lisensi di server. Tanpa token valid, server menolak dengan HTTP 401/403.",
        "<b>Proteksi Anti-Bocor (Zero Data Leak):</b> Pengiriman submission kosong tanpa token dilarang mengembalikan kunci jawaban, audio, transkrip, maupun sample answer.",
        "<b>Isolasi Konfigurasi (packages-config):</b> Mock 1 didefinisikan sebagai tes publik gratis lewat whitelist konfigurasi (semua alias: 1, test1, reading1, dsb.), sedangkan Mock 2+ dikunci di level server.",
        "<b>Pengujian Otomatis:</b> Menambahkan test suite yang memverifikasi penolakan URL langsung tanpa token dan submit kosong tanpa lisensi."
    ]
    for p in t1_points:
        elements.append(Paragraph(f"• {p}", bullet_style))

    # =========================================================================
    # HALAMAN 2: Tahap 2, Tahap 3, dan Tahap 4
    # =========================================================================
    elements.append(PageBreak())

    elements.append(Paragraph("3. RINCIAN TAHAP 2: SKEMA DATABASE &amp; REKAPITULASI GURU", h1_style))
    elements.append(Paragraph(
        "<b>Tujuan:</b> Mengisolasi penyimpanan data antar-tes pada Cloudflare D1 agar nilai Mock 1 dan Mock 2 tersimpan rapi dan tidak saling menimpa.",
        body_style
    ))
    t2_points = [
        "<b>Kolom test_id Terstruktur:</b> Menambahkan kolom <code>test_id TEXT NOT NULL DEFAULT 'test1'</code> pada tabel sesi (<i>listening_sessions, reading_sessions, writing_sessions, speaking_sessions</i>).",
        "<b>Migrasi Aman (Zero Data Loss):</b> Skrip migrasi D1 otomatis menetapkan seluruh baris data lama berstatus <code>test_id = 'test1'</code> tanpa downtime dan tanpa risiko kehilangan data.",
        "<b>Rekapitulasi Guru Terpisah:</b> Endpoint <code>/guru/rekap</code> dan dashboard guru mengelompokkan hasil per siswa per <code>test_id</code>. Nilai Mock 1 siswa tetap 100% utuh saat siswa mengerjakan Mock 2.",
        "<b>Keterpaduan SOP &amp; Fitur Eksisting:</b> Memastikan endpoint <code>/admin/delete-customer</code> (opsi dry-run default &amp; eksekusi batch), cron retensi rekaman harian, kuota add-on mingguan, dan token audio speaking tetap valid multi-tes.",
        "<b>Pengujian Otomatis:</b> Menambahkan test suite untuk memastikan nilai Mock 1 tidak tertimpa setelah Mock 2 disubmit, serta validasi migrasi aman."
    ]
    for p in t2_points:
        elements.append(Paragraph(f"• {p}", bullet_style))
    elements.append(Spacer(1, 6))

    elements.append(Paragraph("4. RINCIAN TAHAP 3: ISOLASI PENYIMPANAN BROWSER (localStorage)", h1_style))
    elements.append(Paragraph(
        "<b>Tujuan:</b> Menjamin draf tulisan, jawaban sementara, atau autosave di peramban peserta tidak tercampur antar-tes.",
        body_style
    ))
    t3_points = [
        "<b>Format Kunci Ber-Namespace:</b> Seluruh draf autosave menggunakan format kunci terikat test_id: <code>ajarkita:{test_id}:{modul}:draft</code> (contoh: <code>ajarkita:test1:writing:draft</code> vs <code>ajarkita:test2:writing:draft</code>).",
        "<b>Migrasi Draf Lama:</b> Draf lama tanpa test_id dimigrasikan otomatis ke <code>test_id = 'test1'</code> atau diabaikan secara aman tanpa memicu crash JavaScript.",
        "<b>Independensi Antar-Sesi:</b> Menjamin saat peserta mengerjakan Mock 2, lembar kerja bersih dan tidak memuat sisa jawaban dari Mock 1.",
        "<b>Pengujian Otomatis:</b> Menambahkan test suite simulasi localStorage untuk memastikan draf Test 1 tidak muncul di Test 2."
    ]
    for p in t3_points:
        elements.append(Paragraph(f"• {p}", bullet_style))
    elements.append(Spacer(1, 6))

    elements.append(Paragraph("5. RINCIAN TAHAP 4: ANTARMUKA PEMILIHAN TES (UI Selector)", h1_style))
    elements.append(Paragraph(
        "<b>Tujuan:</b> Mengubah antarmuka dari yang sebelumnya terpaku statis pada 'Test 1' menjadi sistem pemilihan paket tes dinamis.",
        body_style
    ))
    t4_points = [
        "<b>Pencabutan Hardcode 'Test 1':</b> Menghapus seluruh teks statis 'Test 1' di header, navigasi, dan badge, digantikan judul dinamis sesuai tes aktif.",
        "<b>Komponen Selektor Tes Dinamis:</b> Menambahkan kartu pilihan tes di hub IELTS (<code>/ielts/index.html</code>) yang menampilkan status tes (Gratis untuk Mock 1, Terkunci/Perlu Lisensi untuk Mock 2+).",
        "<b>Integrasi Portal Lisensi:</b> Memasang tombol satu klik ke <code>premium-saya.html</code> saat peserta memilih tes premium tanpa lisensi aktif.",
        "<b>Pengujian Otomatis:</b> Memastikan seluruh tautan navigasi dan pemilihan tes berfungsi mulus tanpa tautan rusak."
    ]
    for p in t4_points:
        elements.append(Paragraph(f"• {p}", bullet_style))

    # =========================================================================
    # HALAMAN 3: Analisis Dampak, Matriks Pengujian, dan Lembar Persetujuan
    # =========================================================================
    elements.append(PageBreak())

    elements.append(Paragraph("6. ANALISIS KAPASITAS D1, ASET WORKER &amp; BIAYA", h1_style))
    impact_data = [
        [Paragraph("<b>Komponen</b>", table_header_style), Paragraph("<b>Kondisi Saat Ini (Mock 1)</b>", table_header_style), Paragraph("<b>Estimasi Pasca Multi-Tes (Mock 1 + 2)</b>", table_header_style), Paragraph("<b>Batas Kuota Gratis</b>", table_header_style)],
        [
            Paragraph("D1 Database", table_cell_style),
            Paragraph("&plusmn; 45 MB (&lt; 10%)", table_cell_style),
            Paragraph("Bertambah &plusmn; 0.5 MB / 100 sesi (sangat aman)", table_cell_style),
            Paragraph("500 MB / database", table_cell_style)
        ],
        [
            Paragraph("Worker Assets", table_cell_style),
            Paragraph("33 berkas (~180 KB)", table_cell_style),
            Paragraph("Bertambah &plusmn; 150 KB untuk naskah Mock 2", table_cell_style),
            Paragraph("25 MB / worker", table_cell_style)
        ],
        [
            Paragraph("Audio Speaking", table_cell_style),
            Paragraph("0 KB di server (Lokal)", table_cell_style),
            Paragraph("Tetap 100% lokal browser (Zero server cost)", table_cell_style),
            Paragraph("Bebas server storage", table_cell_style)
        ],
        [
            Paragraph("Isolasi Data", table_cell_style),
            Paragraph("Tunggal (Mock 1)", table_cell_style),
            Paragraph("Terkelompok per siswa per test_id", table_cell_style),
            Paragraph("Data terisolasi rapi", table_cell_style)
        ]
    ]
    impact_table = Table(impact_data, colWidths=[3.2 * cm, 4.2 * cm, 6.4 * cm, 4.0 * cm])
    impact_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f1f5f9')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    elements.append(impact_table)
    elements.append(Spacer(1, 6))

    elements.append(Paragraph("7. PROTOKOL UJI OTOMATIS &amp; BATASAN VERIFIKASI", h1_style))
    elements.append(Paragraph(
        "Setiap tahap wajib diverifikasi menggunakan rangkaian tes otomatis (Node.js Test Runner) dan dilaporkan secara transparan. Uji otomatis mencakup otorisasi server, integritas data D1, dan isolasi draf. Namun, uji otomatis memiliki <b>batasan</b>: tidak dapat memverifikasi visual peramban Safari, kejelasan grafik vektor SVG, serta interaksi mikrofon nyata pengguna. Oleh karena itu laporan wajib mencantumkan frasa: <i>'tidak ditemukan kegagalan pada pengujian otomatis; verifikasi manual belum dilakukan'</i>.",
        body_style
    ))
    elements.append(Spacer(1, 6))

    elements.append(Paragraph("8. LEMBAR KONFIRMASI PERSETUJUAN PENGGUNA", h1_style))
    elements.append(Paragraph(
        "Rencana teknis di atas diajukan untuk ditinjau oleh Pengguna. <b>Pengerjaan fisik kode berikutnya TIDAK AKAN dimulai sebelum tahap ini disetujui secara tertulis</b>.",
        body_style
    ))

    approval_data = [
        [Paragraph("<b>Tahap Rencana</b>", table_header_style), Paragraph("<b>Fokus Pekerjaan yang Diajukan</b>", table_header_style), Paragraph("<b>Status Saat Ini</b>", table_header_style)],
        [Paragraph("Tahap 1", table_cell_style), Paragraph("Keamanan Akses Server &amp; Fail-Closed Token Licensing", table_cell_style), Paragraph("<b>Menunggu Persetujuan Pengguna</b>", table_cell_style)],
        [Paragraph("Tahap 2", table_cell_style), Paragraph("Skema Database D1 &amp; Rekapitulasi Guru Terisolasi per Tes", table_cell_style), Paragraph("<b>Menunggu Persetujuan Pengguna</b>", table_cell_style)],
        [Paragraph("Tahap 3", table_cell_style), Paragraph("Isolasi Penyimpanan Browser (localStorage ber-namespace)", table_cell_style), Paragraph("<b>Menunggu Persetujuan Pengguna</b>", table_cell_style)],
        [Paragraph("Tahap 4", table_cell_style), Paragraph("Antarmuka Pemilih Tes (UI Selector &amp; dynamic labels)", table_cell_style), Paragraph("<b>Menunggu Persetujuan Pengguna</b>", table_cell_style)],
    ]
    approval_table = Table(approval_data, colWidths=[2.5 * cm, 9.5 * cm, 5.8 * cm])
    approval_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    elements.append(approval_table)

    doc.build(elements, canvasmaker=NumberedCanvas)

    import shutil
    shutil.copyfile(OUT_PATH_ARTIFACT, OUT_PATH_WORKSPACE)
    print(f"Successfully generated 3-page plan PDF: {OUT_PATH_ARTIFACT} and {OUT_PATH_WORKSPACE}")

if __name__ == '__main__':
    build_pdf()
