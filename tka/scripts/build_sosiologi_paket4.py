# tka/scripts/build_sosiologi_paket4.py
import re, json

with open('tka/scripts/dump_pdf_lat.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Bersihkan header halaman PDF
text = re.sub(r'=== PAGE \d+ ===', '', text)
text = re.sub(r'KUMPULAN SOAL LATIHAN TKA SOSIOLOGI \.2026\.\s*', '', text)
text = re.sub(r'Bentuk soal :.*?\n', '', text)

q_blocks = re.split(r'\n(?=\d+[\.\)]\s+)', text)
q_blocks = [q.strip() for q in q_blocks if q.strip() and re.match(r'^\d+[\.\)]', q.strip())]

print(f"Total blocks detected in PDF Latihan: {len(q_blocks)}")

KUNCI_PAKET4 = {
    1: {
        "kunci": "C",
        "elemen": "Interaksi Sosial & Komunikasi",
        "pembahasan": "Interaksi sosial memerlukan dua unsur utama: kontak sosial dan komunikasi. Meskipun akses fisik terputus total akibat banjir bandang, penggunaan radio amatir memungkinkan penyampaian pesan dan pertukaran informasi darurat (komunikasi simbolik) secara efektif antara warga terisolasi dan tim relawan."
    },
    2: {
        "kunci": "B",
        "elemen": "Akomodasi & Integrasi Sosial",
        "pembahasan": "Forum dialog terbuka dan pembentukan panitia kerja bersama merupakan bentuk akomodasi (kompromi dan konsiliasi) yang menghasilkan kesepakatan damai serta saling menghormati keragaman budaya tanpa pemaksaan asimilasi."
    },
    3: {
        "kunci": ["Benar", "Benar", "Salah"],
        "elemen": "Gejala Sosial & Patologi Digital",
        "pembahasan": "Pernyataan 1 BENAR (berdampak luas dan meresahkan publik). Pernyataan 2 BENAR (pelanggaran norma hukum dan nilai sosial). Pernyataan 3 SALAH (dilakukan secara terorganisir dan berulang, bukan acak)."
    },
    4: {
        "kunci": "B",
        "elemen": "Perubahan Sosial & Diferensiasi",
        "pembahasan": "Alih fungsi lahan pertanian menjadi kawasan industri mengubah struktur mata pencaharian pedesaan, mengikis kepemilikan lahan mandiri petani menjadi buruh upahan, serta mentransformasi solidaritas paguyuban menjadi relasi kontraktual."
    },
    5: {
        "kunci": ["A", "B", "D"],
        "elemen": "Penelitian Kualitatif",
        "pembahasan": "Tujuan penelitian kualitatif studi kasus mencakup eksplorasi mendalam mengenai peran kepemimpinan perempuan, hambatan kultural, dan pola interaksi dalam komunitas adat (bukan pengujian statistik kuantitatif)."
    },
    6: {
        "kunci": "C",
        "elemen": "Metode Pengumpulan Data",
        "pembahasan": "Untuk mengukur tingkat kepuasan warga secara representatif dalam populasi besar, kuesioner terstruktur dengan skala Likert adalah teknik pengumpulan data kuantitatif yang paling efisien dan terstandarisasi."
    },
    7: {
        "kunci": ["A", "B", "E"],
        "elemen": "Manfaat Penelitian Sosial",
        "pembahasan": "Penelitian pekerja anak memberikan sumbangan teoritis terhadap sosiologi keluarga dan kemiskinan, menyajikan rekomendasi kebijakan perlindungan anak, serta memetakan akar masalah struktural."
    },
    8: {
        "kunci": "B",
        "elemen": "Globalisasi Ekonomi & Tenaga Kerja",
        "pembahasan": "Investasi multinasional mendorong spesialisasi tenaga kerja dan transfer teknologi, tetapi juga berisiko memicu marginalisasi tenaga kerja lokal yang tidak memiliki sertifikasi keahlian modern."
    },
    9: {
        "kunci": ["A", "C", "D"],
        "elemen": "Pemberdayaan Komunitas Berkelanjutan",
        "pembahasan": "Pengembangan desa wisata berbasis komunitas (CBT) harus memprioritaskan keterlibatan aktif warga lokal, pelestarian ekosistem alam, serta pembagian keuntungan ekonomi yang berkeadilan."
    },
    10: {
        "kunci": "C",
        "elemen": "Modernisasi & Pendidikan",
        "pembahasan": "Pemanfaatan kecerdasan buatan (AI) dalam pembelajaran memfasilitasi diferensiasi belajar personal, namun menuntut adaptasi peran guru dari sekadar pengajar menjadi fasilitator dan pembina karakter moral."
    },
    11: {
        "kunci": ["Benar", "Benar", "Salah", "Benar", "Salah"],
        "elemen": "Dinamika Kelompok Sosial & Perubahan Spasial",
        "pembahasan": "Hilangnya ruang publik fisik mengikis modal sosial dan keakraban emosional (Pernyataan 1 & 2 BENAR), meningkatkan segmentasi sosial (Pernyataan 4 BENAR). Namun perumahan megah tidak otomatis meningkatkan gotong royong dan tidak menghilangkan potensi konflik (Pernyataan 3 & 5 SALAH)."
    },
    12: {
        "kunci": "B",
        "elemen": "Perilaku Kolektif & Hoaks Digital",
        "pembahasan": "Penyebaran disinformasi dan hoaks di media sosial memanipulasi bias konfirmasi masyarakat, memperlemah kohesi sosial, dan memicu polarisasi politik antarkelompok."
    },
    13: {
        "kunci": ["A", "B", "E"],
        "elemen": "Penanganan Konflik Sosial",
        "pembahasan": "Penyelesaian konflik agraria membutuhkan pemetaan pemangku kepentingan yang transparan, dialog langsung yang setara, serta kepastian legalitas hak ulayat masyarakat adat."
    },
    14: {
        "kunci": "B",
        "elemen": "Masalah Sosial Global",
        "pembahasan": "Pencemaran sampah plastik merupakan tragedi milik bersama (tragedy of the commons) yang menuntut aksi kolektif lintas negara serta transformasi gaya hidup sirkular."
    },
    15: {
        "kunci": "B",
        "elemen": "Kearifan Lokal & Warisan Budaya",
        "pembahasan": "Pelestarian tradisi tenun ikat lokal memerlukan perlindungan hak cipta geografis, regenerasi perajin muda, dan pemanfaatan pemasaran digital tanpa menghilangkan nilai filosofis sakral motifnya."
    },
    16: {
        "kunci": "C",
        "elemen": "Konformitas & Penyimpangan Sosial",
        "pembahasan": "Tekanan teman sebaya (peer pressure) dan disorganisasi lingkungan keluarga menjadi faktor dominan pendorong perilaku menyimpang pada remaja perkotaan."
    },
    17: {
        "kunci": "B",
        "elemen": "Penyajian Data Kualitatif",
        "pembahasan": "Data wawancara mendalam dan narasi pengalaman subjektif disajikan melalui reduksi data tematik, matriks kategori, dan kutipan informan representatif."
    },
    18: {
        "kunci": "C",
        "elemen": "Konflik Industrial & Akomodasi",
        "pembahasan": "Perselisihan hubungan industrial antara buruh dan manajemen diselesaikan melalui mediasi tripartit (buruh, pengusaha, dan dinas ketenagakerjaan) yang adil."
    },
    19: {
        "kunci": "B",
        "elemen": "Tata Ruang & Ketimpangan Spasial",
        "pembahasan": "Gentrifikasi permukiman kota sering kali memicu segregasi spasial dan pemindahan paksa (displacement) warga berpenghasilan rendah ke pinggiran kota."
    },
    20: {
        "kunci": "C",
        "elemen": "Resolusi Konflik Spasial",
        "pembahasan": "Relokasi warga yang berkeadilan harus menjamin ketersediaan mata pencaharian pengganti, kelayakan hunian baru, dan konsultasi publik tanpa paksaan aparat represif."
    },
    21: {
        "kunci": "B",
        "elemen": "Klasifikasi Kelompok Sosial",
        "pembahasan": "Kelompok primer (keluarga, sahabat dekat) dicirikan oleh hubungan tatap muka akrab, personal, dan intim; berbeda dari kelompok sekunder yang formal dan impersonal."
    },
    22: {
        "kunci": "C",
        "elemen": "Harmoni Sosial & Solidaritas",
        "pembahasan": "Kegiatan lintas generasi seperti kerja bakti dan posyandu memupuk modal sosial dan empati antargenerasi di lingkungan permukiman."
    },
    23: {
        "kunci": "B",
        "elemen": "Ketimpangan Sosial Pendidikan",
        "pembahasan": "Kesenjangan kualitas pendidikan antardaerah membatasi peluang mobilitas sosial vertikal generasi muda di wilayah tertinggal."
    },
    24: {
        "kunci": "C",
        "elemen": "Kebijakan Afirmatif Pendidikan",
        "pembahasan": "Program afirmasi pendidikan tinggi (seperti KIP Kuliah atau beasiswa daerah 3T) berfungsi sebagai saluran mobilitas sosial vertikal naik bagi anak-anak keluarga prasejahtera."
    },
    25: {
        "kunci": "A",
        "elemen": "Kemiskinan Struktural & Mobilitas",
        "pembahasan": "Ketiadaan dokumen kependudukan resmi dan keterbatasan modal ekonomi memicu lingkaran setan kemiskinan antargenerasi (vicious circle of poverty) karena anak-anak terhambat mengakses sekolah formal."
    }
}

soal_list = []

for idx, q_text in enumerate(q_blocks, 1):
    soal_num = idx
    info = KUNCI_PAKET4[soal_num]
    
    if soal_num == 3:
        soal_html = """<p class="font-medium text-slate-800 leading-relaxed mb-3">
Maraknya aksi penipuan daring berbasis modul peretasan pesan singkat (phishing) telah meresahkan warga di berbagai daerah. Para pelaku memanfaatkan data pribadi korban untuk membobol rekening perbankan. Kepolisian mencatat kasus ini terjadi secara berulang dalam beberapa bulan terakhir dengan modus yang terorganisir dan korban dari pelbagai kalangan.
</p>
<p class="font-semibold text-slate-900 mb-2">
Tentukan apakah pernyataan berikut Benar atau Salah terkait alasan fenomena tersebut dikategorikan sebagai gejala sosial!
</p>"""
        item = {
            "id": soal_num,
            "elemen": info["elemen"],
            "tipe": "kategori",
            "soalHtml": soal_html.strip(),
            "kunci": info["kunci"],
            "pembahasan": f"<strong>Analisis Sosiologis & Pembahasan:</strong><br>{info['pembahasan']}<br><br><strong>Kunci Jawaban: {info['kunci']}</strong>",
            "pernyataan": [
                {"pernyataan": "Kasus tersebut merupakan gejala sosial karena berdampak luas dan menimbulkan keresahan publik.", "kunci": "Benar"},
                {"pernyataan": "Fenomena ini termasuk gejala sosial akibat adanya penyimpangan norma hukum dan sosial di masyarakat.", "kunci": "Benar"},
                {"pernyataan": "Kejadian ini bukan gejala sosial karena dilakukan secara acak tanpa pola tindakan yang jelas.", "kunci": "Salah"}
            ]
        }
    elif soal_num == 11:
        soal_html = """<p class="font-medium text-slate-800 leading-relaxed mb-3">
<strong>Studi Kasus:</strong><br>
Pembangunan perumahan megah di sekitar kawasan perkampungan padat penduduk membawa perubahan fisik dan sosial yang signifikan. Hilangnya lapangan publik yang sebelumnya menjadi pusat kegiatan warga menyebabkan ruang untuk berkumpul dan berinteraksi secara tatap muka semakin terbatas. Komunikasi antarwarga yang dahulu terjalin hangat kini perlahan bergeser menjadi interaksi serba digital melalui grup perpesanan singkat (instant messaging).
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan studi kasus di atas, tentukan apakah pernyataan berikut Benar atau Salah mengenai dampak jangka panjang dari perubahan pola interaksi masyarakat tersebut!
</p>"""
        item = {
            "id": soal_num,
            "elemen": info["elemen"],
            "tipe": "kategori",
            "soalHtml": soal_html.strip(),
            "kunci": info["kunci"],
            "pembahasan": f"<strong>Analisis Sosiologis & Pembahasan:</strong><br>{info['pembahasan']}<br><br><strong>Kunci Jawaban: {info['kunci']}</strong>",
            "pernyataan": [
                {"pernyataan": "Terkikisnya ikatan solidaritas sosial dan rasa kepemilikan komunitas secara bertahap akibat hilangnya ruang publik fisik.", "kunci": "Benar"},
                {"pernyataan": "Peralihan komunikasi ke grup perpesanan singkat berpotensi menurunkan kualitas hubungan emosional antarwarga secara langsung.", "kunci": "Benar"},
                {"pernyataan": "Pembangunan perumahan megah secara otomatis meningkatkan semangat gotong royong dan ikatan kekeluargaan antarwarga.", "kunci": "Salah"},
                {"pernyataan": "Terjadinya segmentasi sosial yang mereduksi fungsi interaksi tatap muka di tengah masyarakat perkampungan.", "kunci": "Benar"},
                {"pernyataan": "Menurunnya angka kriminalitas secara drastis serta hilangnya seluruh potensi konflik di lingkungan permukiman.", "kunci": "Salah"}
            ]
        }
    elif soal_num in [5, 7, 9, 13]:
        lines = [l.strip() for l in q_text.splitlines() if l.strip()]
        soal_lines = []
        options = []
        letters = ['A', 'B', 'C', 'D', 'E']
        c_i = 0
        for l in lines:
            if l.startswith("☐") or l.startswith("[ ]") or l.startswith("[]") or re.match(r'^[A-E][\.\)]', l):
                clean_opt = re.sub(r'^[☐\[\]A-E\.\)]\s*', '', l).strip()
                if clean_opt and len(clean_opt) > 5:
                    options.append({"id": letters[c_i] if c_i < len(letters) else str(c_i+1), "text": clean_opt})
                    c_i += 1
            else:
                soal_lines.append(l)
                
        soal_html = ""
        for l in soal_lines:
            clean_l = re.sub(r'^\d+[\.\)]\s*', '', l)
            if clean_l.endswith("?") or clean_l.endswith("!"):
                soal_html += f"<p class=\"font-semibold text-slate-900 mb-2\">{clean_l}</p>\n"
            else:
                soal_html += f"<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">{clean_l}</p>\n"
                
        item = {
            "id": soal_num,
            "elemen": info["elemen"],
            "tipe": "pg_kompleks",
            "soalHtml": soal_html.strip(),
            "kunci": info["kunci"],
            "pembahasan": f"<strong>Analisis Sosiologis & Pembahasan:</strong><br>{info['pembahasan']}<br><br><strong>Kunci Jawaban: {info['kunci']}</strong>",
            "options": options
        }
    else:
        lines = [l.strip() for l in q_text.splitlines() if l.strip()]
        opt_start = -1
        for i, l in enumerate(lines):
            if re.match(r'^[A-E][\.\)]\s+', l):
                opt_start = i
                break
        
        options = []
        if opt_start != -1:
            soal_lines = lines[:opt_start]
            for l in lines[opt_start:]:
                m = re.match(r'^([A-E])[\.\)]\s+(.*)', l)
                if m:
                    options.append({"id": m.group(1), "text": m.group(2).strip()})
        else:
            soal_lines = lines
            
        soal_html = ""
        for l in soal_lines:
            clean_l = re.sub(r'^\d+[\.\)]\s*', '', l)
            if clean_l.endswith("?") or clean_l.endswith("!") or clean_l.endswith("..."):
                soal_html += f"<p class=\"font-semibold text-slate-900 mb-2\">{clean_l}</p>\n"
            else:
                soal_html += f"<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">{clean_l}</p>\n"
                
        item = {
            "id": soal_num,
            "elemen": info["elemen"],
            "tipe": "pg",
            "soalHtml": soal_html.strip(),
            "kunci": info["kunci"],
            "pembahasan": f"<strong>Analisis Sosiologis & Pembahasan:</strong><br>{info['pembahasan']}<br><br><strong>Kunci Jawaban: {info['kunci']}</strong>",
            "options": options
        }
        
    soal_list.append(item)

print(f"Generated {len(soal_list)} structured questions for Paket 4.")

output_js = f"""// tka/data/mapel-sosiologi-paket4.js
// Bank Soal & Pembahasan Latihan Intensif TKA Sosiologi SMA 2026 (25 Butir Soal Terprediksi Lengkap)
// Disusun berdasarkan kisi-kisi resmi BPPP Kemendikbudristek & Kurikulum Merdeka Terintegrasi

const tkaSosiologiPaket4Data = {json.dumps(soal_list, ensure_ascii=False, indent=2)};

// Registrasi global bundle
if (typeof window !== 'undefined') {{
  window.tkaSosiologiPaket4Data = tkaSosiologiPaket4Data;
  window.tkaSosiologiPackages = window.tkaSosiologiPackages || {{}};
  window.tkaSosiologiPackages['paket4'] = {{
    title: "Paket 4: Latihan Intensif TKA Sosiologi SMA 2026 (25 Soal Terprediksi)",
    shortTitle: "Paket 4 (Latihan Intensif - 25 Soal)",
    data: tkaSosiologiPaket4Data
  }};
}}

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ tkaSosiologiPaket4Data }};
}}
"""

with open('tka/data/mapel-sosiologi-paket4.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Saved tka/data/mapel-sosiologi-paket4.js successfully!")
