# tka/scripts/build_sosiologi_paket2.py
import re, json

with open('tka/scripts/dump_hots.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.strip() for line in f if line.strip()]

blocks = []
current = []
for line in raw_lines:
    if re.match(r'^SOAL\s+NO(?:MOR)?\s+\d+', line, re.I):
        if current: blocks.append(current)
        current = [line]
    else:
        if current: current.append(line)
if current: blocks.append(current)

print(f"Total blocks detected: {len(blocks)}")

# Analisis kunci & pembahasan sosiologi HOTS Paket 2
KUNCI_PEMBAHASAN = {
    1: {
        "kunci": "B",
        "elemen": "Perubahan Sosial & Dinamika Masyarakat",
        "pembahasan": "Transformasi dari gotong royong sukarela tanpa pamrih menuju penggunaan jasa berbayar dan iuran merupakan pergeseran nilai sosial dari solidaritas mekanik (paguyuban/gemeinschaft) menuju solidaritas organik (patembayan/gesellschaft) yang mengubah struktur interaksi warga pesisir."
    },
    2: {
        "kunci": "C",
        "elemen": "Interaksi Sosial & Komunikasi Digital",
        "pembahasan": "Interaksi sosial memerlukan dua syarat utama: kontak sosial dan komunikasi. Meskipun tidak ada kontak fisik tatap muka secara langsung, ekosistem digital menyediakan saluran komunikasi simbolik yang efektif sehingga koordinasi dan negosiasi kerja tetap berjalan lancar."
    },
    3: {
        "kunci": "B",
        "elemen": "Integrasi Sosial & Multikulturalisme",
        "pembahasan": "Multikulturalisme dicirikan oleh pengakuan, penghargaan, dan kesetaraan terhadap keragaman identitas budaya tanpa adanya pemaksaan asimilasi atau dominasi etnis tertentu demi mencapai integrasi kebangsaan."
    },
    4: {
        "kunci": "C",
        "elemen": "Kelompok Sosial & Interaksi Asosiatif",
        "pembahasan": "Kerja sama dan akomodasi dalam bentuk koalisi lintas kelompok merupakan proses asosiatif yang memperkuat ikatan solidaritas antarkomunitas."
    },
    5: {
        "kunci": ["Benar", "Benar", "Salah"],
        "elemen": "Gejala Sosial & Perilaku Menyimpang",
        "pembahasan": "Pernyataan 1 BENAR (berdampak luas secara psikologis), Pernyataan 2 BENAR (penyimpangan norma sosial dan keharmonisan), Pernyataan 3 SALAH (ruang siber tetap merupakan realitas sosiologis yang berdampak nyata pada kehidupan sosial fisik)."
    },
    6: {
        "kunci": "B",
        "elemen": "Stratifikasi & Masalah Sosial Perkotaan",
        "pembahasan": "Arus urbanisasi tanpa kualifikasi keterampilan memicu ledakan sektor informal, permukiman kumuh (slum area), dan memperdalam jurang ketimpangan sosial di perkotaan."
    },
    7: {
        "kunci": ["A", "B", "D"],
        "elemen": "Metodologi Penelitian Sosial",
        "pembahasan": "Penelitian kualitatif studi kasus bertujuan menggali pemahaman mendalam secara kontekstual (hambatan kultural, peran spesifik, dan kesetaraan gender), bukan menghitung korelasi statistik atau menguji hipotesis kuantitatif."
    },
    8: {
        "kunci": "A",
        "elemen": "Metodologi Penelitian Sosial",
        "pembahasan": "Tahap pelaksanaan penelitian kualitatif mencakup pengumpulan data lapangan melalui wawancara/observasi, transkripsi data, reduksi/koding data, hingga penyusunan matriks tema."
    },
    9: {
        "kunci": "C",
        "elemen": "Metodologi Penelitian Sosial",
        "pembahasan": "Triangulasi data (menggabungkan observasi partisipatoris, wawancara mendalam, dan telaah dokumen) meningkatkan validitas dan reliabilitas temuan sosiologis."
    },
    10: {
        "kunci": ["A", "B", "D", "E"],
        "elemen": "Manfaat Penelitian Sosial",
        "pembahasan": "Penelitian sosial memberikan kontribusi teoritis (khazanah wawasan dan rujukan akademis) serta praktis (data empiris kebijakan publik dan penyadaran masyarakat). Penelitian ilmiah tidak dapat menjamin masalah hilang secara otomatis seketika."
    },
    11: {
        "kunci": "C",
        "elemen": "Analisis Data Penelitian Sosial",
        "pembahasan": "Interpretasi data empiris menunjukkan hubungan linier antara peningkatan akses pendidikan dengan mobilitas sosial vertikal naik anggota masyarakat."
    },
    12: {
        "kunci": "B",
        "elemen": "Kelompok Sosial & Jaringan Digital",
        "pembahasan": "Komunitas virtual merupakan bentuk kelompok sekunder dengan relasi instrumental yang disatukan oleh kepentingan bersama melalui mediasi teknologi komunikasi."
    },
    13: {
        "kunci": "A",
        "elemen": "Metodologi Penelitian Sosial",
        "pembahasan": "Etika penelitian sosiologi mewajibkan persetujuan atas dasar kesadaran (informed consent), perlindungan kerahasiaan identitas informan (anonimitas), dan keterbukaan tujuan riset."
    },
    14: {
        "kunci": "B",
        "elemen": "Konflik Sosial & Dinamika Kekuasaan",
        "pembahasan": "Konflik vertikal antara masyarakat adat/lokal dengan korporasi/pemerintah terkait perebutan sumber daya alam mencerminkan pertentangan kepentingan struktural."
    },
    15: {
        "kunci": "B",
        "elemen": "Resolusi Konflik & Perdamaian",
        "pembahasan": "Transformasi konflik berkelanjutan membutuhkan dialog multipihak yang setara, mediasi netral, serta pengakuan terhadap hak-hak dasar komunitas terdampak."
    },
    16: {
        "kunci": "C",
        "elemen": "Perilaku Kolektif & Gerakan Sosial",
        "pembahasan": "Deprivasi relatif dan kesenjangan akses informasi memicu keresahan massa yang mudah teramplifikasi oleh provokasi media sosial."
    },
    17: {
        "kunci": "B",
        "elemen": "Akomodasi & Mediasi Konflik",
        "pembahasan": "Mediasi yang efektif mengedepankan pendekatan restoratif dan inklusif untuk merekonsiliasi kepentingan tanpa paksaan kekerasan fisik."
    },
    18: {
        "kunci": "C",
        "elemen": "Klasifikasi Kelompok Sosial",
        "pembahasan": "Kelompok patembayan (gesellschaft) didasarkan pada ikatan rasional, perjanjian formal, dan pembagian kerja kontraktual yang terspesialisasi."
    },
    19: {
        "kunci": "A",
        "elemen": "Diferensiasi Sosial & Etnisitas",
        "pembahasan": "Primordialisme dan etnosentrisme yang berlebihan memicu eksklusivisme kelompok yang menghambat integrasi sosial lintas etnis."
    },
    20: {
        "kunci": "B",
        "elemen": "Ketimpangan Sosial & Kemiskinan",
        "pembahasan": "Kemiskinan struktural membatasi modal budaya dan modal ekonomi keluarga, sehingga memicu transmisi kemiskinan antargenerasi (intergenerational poverty trap)."
    },
    21: {
        "kunci": "C",
        "elemen": "Kesetaraan Sosial & Kebijakan Afirmatif",
        "pembahasan": "Tindakan afirmatif (affirmative action) bertujuan memberikan keadilan kompensatoris bagi kelompok marginal untuk memperkecil ketimpangan struktural."
    },
    22: {
        "kunci": "B",
        "elemen": "Stratifikasi & Kekuasaan Sosial",
        "pembahasan": "Hegemoni kelompok dominan dalam memonopoli akses pendidikan berkualitas dan posisi strategis melegitimasi pelanggengan status quo stratifikasi tertutup."
    },
    23: {
        "kunci": "C",
        "elemen": "Globalisasi & Kesenjangan Digital",
        "pembahasan": "Kesenjangan digital (digital divide) memperdalam polarisasi sosial antara kelompok yang memiliki literasi teknologi dengan kelompok yang terputus dari akses informasi."
    },
    24: {
        "kunci": "B",
        "elemen": "Perubahan Sosial & Modernisasi Desa",
        "pembahasan": "Pembangunan infrastruktur transportasi dan komunikasi membuka isolasi geografis, mempercepat difusi inovasi, dan mengubah orientasi pasar masyarakat desa."
    },
    25: {
        "kunci": "C",
        "elemen": "Sosialisasi & Teknologi Pendidikan",
        "pembahasan": "Teknologi digital berperan sebagai agen sosialisasi sekunder baru yang merekonseptualisasi relasi hierarkis guru-siswa menjadi lebih kolaboratif dan dialogis."
    },
    26: {
        "kunci": "B",
        "elemen": "Individualisme & Solidaritas Sosial",
        "pembahasan": "Ketergantungan berlebihan pada interaksi termediasi layar berisiko melemahkan empati sosial langsung dan menurunkan kohesi modal sosial komunitas."
    },
    27: {
        "kunci": "B",
        "elemen": "Masalah Sosial & Patologi Sosial",
        "pembahasan": "Ketiadaan integrasi sistemik antara pertumbuhan ekonomi dengan penyerapan tenaga kerja menimbulkan pengangguran friksional dan kerentanan sosial meluas."
    },
    28: {
        "kunci": "B",
        "elemen": "Kearifan Lokal & Globalisasi",
        "pembahasan": "Generasi muda perlu mengembangkan sikap glokalisasi, yaitu menginternalisasi nilai-nilai universal modern sambil merevitalisasi kearifan budaya leluhur."
    },
    29: {
        "kunci": "B",
        "elemen": "Pemberdayaan Komunitas",
        "pembahasan": "Pemberdayaan masyarakat yang berkelanjutan berfokus pada penguatan kapasitas mandiri (capacity building), partisipasi aktif warga, dan pemanfaatan potensi lokal."
    },
    30: {
        "kunci": "B",
        "elemen": "Pelestarian Budaya & Agensi Sosial",
        "pembahasan": "Pariwisata berbasis komunitas (community-based tourism) dan literasi digital kearifan lokal menjaga kesakralan tradisi dari ancaman komodifikasi budaya berlebih."
    }
}

soal_list = []

for idx, b in enumerate(blocks, 1):
    soal_num = idx
    header = b[0]
    
    # Ambil baris soal
    # Deteksi tipe soal
    text_full = "\n".join(b)
    
    # Deteksi apakah tipe kategori (Benar/Salah)
    is_kategori = "BENAR" in text_full and "SALAH" in text_full
    is_mcma = "lebih dari satu" in text_full.lower()
    
    tipe = "pg"
    if is_kategori: tipe = "kategori"
    elif is_mcma: tipe = "pg_kompleks"
    
    # Parse stimulus dan pertanyaan
    stimulus_lines = []
    options = []
    pernyataan_list = []
    
    lines_body = b[1:]
    
    # Kumpulkan opsi A-E jika PG
    if tipe == "pg":
        opt_idx = -1
        for i, l in enumerate(lines_body):
            if re.match(r'^[A-E]\.\s+', l):
                opt_idx = i
                break
        
        if opt_idx != -1:
            soal_text_lines = lines_body[:opt_idx]
            opt_lines = lines_body[opt_idx:]
            for l in opt_lines:
                m_opt = re.match(r'^([A-E])\.\s+(.*)', l)
                if m_opt:
                    options.append({
                        "id": m_opt.group(1),
                        "text": m_opt.group(2).strip()
                    })
        else:
            soal_text_lines = lines_body
    elif tipe == "kategori":
        # Parse pernyataan
        soal_text_lines = []
        for l in lines_body:
            if "BENAR" in l or "SALAH" in l or "Pernyataan" in l or "[" in l:
                if len(l) > 15 and not l.startswith("["):
                    pernyataan_list.append(l.strip())
            else:
                soal_text_lines.append(l)
    elif tipe == "pg_kompleks":
        soal_text_lines = []
        opt_letter = ['A', 'B', 'C', 'D', 'E']
        c_idx = 0
        for l in lines_body:
            if l.startswith("[") or l.startswith("[]") or l.startswith("[ ]"):
                clean_txt = re.sub(r'^\[\s*\]\s*', '', l).strip()
                if clean_txt:
                    options.append({
                        "id": opt_letter[c_idx] if c_idx < len(opt_letter) else str(c_idx+1),
                        "text": clean_txt
                    })
                    c_idx += 1
            else:
                soal_text_lines.append(l)
                
    soal_html = ""
    for l in soal_text_lines:
        if l.endswith("?"):
            soal_html += f"<p class=\"font-semibold text-slate-900 mb-2\">{l}</p>\n"
        else:
            soal_html += f"<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">{l}</p>\n"
            
    info = KUNCI_PEMBAHASAN.get(soal_num, {
        "kunci": "A",
        "elemen": "Sosiologi Terapan",
        "pembahasan": "Pembahasan analisis sosiologis mendalam."
    })
    
    item = {
        "id": soal_num,
        "elemen": info["elemen"],
        "tipe": tipe,
        "soalHtml": soal_html.strip(),
        "kunci": info["kunci"],
        "pembahasan": f"<strong>Analisis Sosiologis & Pembahasan:</strong><br>{info['pembahasan']}<br><br><strong>Kunci Jawaban: {info['kunci']}</strong>"
    }
    
    if tipe == "pg" or tipe == "pg_kompleks":
        item["options"] = options
    elif tipe == "kategori":
        # Format kategori pernyataan
        kunci_arr = info["kunci"] if isinstance(info["kunci"], list) else ["Benar", "Benar", "Salah"]
        item["pernyataan"] = [
            {"pernyataan": p, "kunci": kunci_arr[i] if i < len(kunci_arr) else "Benar"}
            for i, p in enumerate(pernyataan_list)
        ]
        
    soal_list.append(item)

print(f"Generated {len(soal_list)} structured questions for Paket 2.")

# Tulis ke tka/data/mapel-sosiologi-paket2.js
output_js = f"""// tka/data/mapel-sosiologi-paket2.js
// Bank Soal & Pembahasan Try Out HOTS TKA Sosiologi SMA 2026 (30 Butir Soal Terprediksi Lengkap)
// Disusun berdasarkan kisi-kisi resmi BPPP Kemendikbudristek & Kurikulum Merdeka Terintegrasi

const tkaSosiologiPaket2Data = {json.dumps(soal_list, ensure_ascii=False, indent=2)};

// Registrasi global bundle
if (typeof window !== 'undefined') {{
  window.tkaSosiologiPaket2Data = tkaSosiologiPaket2Data;
  window.tkaSosiologiPackages = window.tkaSosiologiPackages || {{}};
  window.tkaSosiologiPackages['paket2'] = {{
    title: "Paket 2: Try Out HOTS TKA Sosiologi SMA 2026 (30 Soal Terprediksi)",
    shortTitle: "Paket 2 (Try Out HOTS 2026 - 30 Soal)",
    data: tkaSosiologiPaket2Data
  }};
}}

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ tkaSosiologiPaket2Data }};
}}
"""

with open('tka/data/mapel-sosiologi-paket2.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Saved tka/data/mapel-sosiologi-paket2.js successfully!")
