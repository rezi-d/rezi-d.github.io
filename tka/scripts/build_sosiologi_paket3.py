# tka/scripts/build_sosiologi_paket3.py
import re, json

with open('tka/scripts/dump_to3.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.strip() for line in f if line.strip()]

blocks = []
current = []
for line in raw_lines:
    if re.match(r'^Soal\s+\d+', line, re.I):
        if current: blocks.append(current)
        current = [line]
    else:
        if current: current.append(line)
if current: blocks.append(current)

print(f"Total blocks detected in TO3: {len(blocks)}")

KUNCI_TO3 = {
    1: {"kunci": "B", "elemen": "Perubahan Sosial & Modernisasi", "pembahasan": "Cultural lag (ketertinggalan budaya) menurut William F. Ogburn terjadi ketika unsur kebudayaan material (teknologi mesin dan internet) berkembang lebih cepat dibandingkan unsur nonmaterial (kebiasaan lumbung desa dan solidaritas sosial)."},
    2: {"kunci": "C", "elemen": "Teori Perubahan Sosial & Konflik", "pembahasan": "Menurut teori konflik Karl Marx, industrialisasi meruncingkan polarisasi kelas antara kaum borjuis pemilik modal pabrik dengan kaum proletar (buruh harian), mempertajam diferensiasi struktural berbasis penguasaan alat produksi."},
    3: {"kunci": "B", "elemen": "Globalisasi & Glokalisasi", "pembahasan": "Glokalisasi (Roland Robertson) adalah perpaduan dinamis antara globalisasi dan lokalisasi, di mana budaya lokal mengadaptasi teknologi/konsep global tanpa melenyapkan fungsi dan identitas budaya aslinya."},
    4: {"kunci": "C", "elemen": "Globalisasi & Ketimpangan", "pembahasan": "Teori ketergantungan (dependency theory) dan sistem dunia Immanuel Wallerstein menjelaskan bagaimana korporasi transnasional mengekstraksi surplus ekonomi negara berkembang sehingga memperdalam ketimpangan antara negara inti dan pinggiran."},
    5: {"kunci": "B", "elemen": "Konsumerisme & Gaya Hidup Modern", "pembahasan": "Masyarakat konsumerisme menciptakan hiperrealitas dan komodifikasi gaya hidup, di mana individu mengonsumsi tanda dan prestise artifisial melampaui kebutuhan fungsional riilnya."},
    6: {"kunci": "B", "elemen": "Penelitian Sosial & Etnografi", "pembahasan": "Metode etnografi dengan observasi partisipatoris mendalam dan wawancara tak berstruktur bertujuan memahami makna tindakan dari sudut pandang warga lokal (perspektif emik)."},
    7: {"kunci": "B", "elemen": "Penelitian Sosial & Reliabilitas", "pembahasan": "Uji reliabilitas memastikan konsistensi instrumen kuesioner ketika diujikan berulang kali pada subjek yang sama atau setara."},
    8: {"kunci": "B", "elemen": "Kelompok Sosial & Partikularisme", "pembahasan": "Partikularisme kelompok mengutamakan kepentingan sempit golongan sendiri di atas kepentingan umum, berpotensi memicu diskriminasi dan polarisasi sosial."},
    9: {"kunci": "C", "elemen": "Integrasi Sosial & Kohesi", "pembahasan": "Integrasi normatif dan fungsional tercapai ketika beragam kelompok sosial saling bergantung dalam pembagian kerja serta menyepakati nilai-nilai konsensus bersama."},
    10: {"kunci": "B", "elemen": "Konflik Sosial & Kekerasan", "pembahasan": "Kekerasan struktural terjadi ketika sistem sosial dan regulasi ekonomi secara sistemik membatasi akses kelompok marginal untuk memenuhi kebutuhan dasarnya."},
    11: {"kunci": "B", "elemen": "Resolusi Konflik & Negosiasi", "pembahasan": "Mediasi transformatif membantu pihak-pihak yang bertikai mengubah relasi destruktif menjadi hubungan kerja sama yang saling menguntungkan (win-win solution)."},
    12: {"kunci": "C", "elemen": "Diferensiasi & Stratifikasi Sosial", "pembahasan": "Diferensiasi sosial bersifat horizontal tanpa tingkatan hierarkis (suku, ras, agama), sedangkan stratifikasi sosial bersifat vertikal berjenjang (kekayaan, kekuasaan, pendidikan)."},
    13: {"kunci": "B", "elemen": "Kesetaraan Gender & Kebijakan", "pembahasan": "Kebijakan responsif gender bertujuan mengatasi hambatan kultural patriarkal dan diskriminasi struktural terhadap perempuan di ruang publik."},
    14: {"kunci": "B", "elemen": "Mobilitas Sosial Antargenerasi", "pembahasan": "Mobilitas sosial antargenerasi naik terjadi saat anak dari keluarga buruh mampu mencapai kedudukan profesi dan pendidikan yang jauh lebih tinggi daripada generasi orang tuanya."},
    15: {"kunci": "C", "elemen": "Multikulturalisme & Kewargaan", "pembahasan": "Masyarakat multikultural yang demokratis mengintegrasikan prinsip kesetaraan hak kewargaan (citizenship) dengan pengakuan hak kultural kelompok minoritas."},
    16: {"kunci": "B", "elemen": "Kearifan Lokal & Lingkungan", "pembahasan": "Kearifan lokal memuat sistem pengetahuan dan tabu adat yang terbukti efektif menjaga kelestarian ekosistem dari eksploitasi berlebihan."},
    17: {"kunci": "B", "elemen": "Perubahan Sosial & Digitalisasi", "pembahasan": "Disrupsi teknologi digital meredefinisi relasi kerja, menciptakan relasi kemitraan fleksibel (gig economy) yang membutuhkan regulasi perlindungan sosial baru."},
    18: {"kunci": "B", "elemen": "Pemberdayaan Komunitas Lokal", "pembahasan": "Prinsip partisipasi bermakna (meaningful participation) memastikan bahwa masyarakat lokal menjadi subjek penentu utama dalam setiap tahapan program pemberdayaan."},
    19: {"kunci": "C", "elemen": "Patologi Sosial & Kenakalan", "pembahasan": "Teori pelabelan (labeling theory) Edwin Lemert menyatakan bahwa cap atau stigma negatif dari masyarakat dapat mendorong individu menginternalisasi peran menyimpang sekunder."},
    20: {"kunci": "B", "elemen": "Sosiologi sebagai Ilmu Terapan", "pembahasan": "Sebagai ilmu terapan (applied science), sosiologi menyajikan data sosiologis empiris untuk merancang rekayasa sosial dan kebijakan penanggulangan kemiskinan."},
    21: {"kunci": ["A", "B", "E"], "elemen": "Ciri & Fungsi Sosiologi", "pembahasan": "Pernyataan A (non-etis), B (empiris), dan E (fungsi perencanaan sosial) adalah tepat. Pernyataan C keliru karena sosiologi bukan lembaga yudikatif/hukum, dan D keliru konteks."},
    22: {"kunci": ["A", "B", "D"], "elemen": "Multikulturalisme & Integrasi", "pembahasan": "Pengakuan keragaman budaya memperkuat integrasi nasional berbasis kesetaraan dan toleransi majemuk."},
    23: {"kunci": ["B", "C", "E"], "elemen": "Stratifikasi & Mobilitas Sosial", "pembahasan": "Pendidikan tinggi, jejaring sosial, dan keterampilan teknis merupakan saluran utama mobilitas sosial vertikal terbuka di era modern."},
    24: {"kunci": ["A", "C", "D"], "elemen": "Konflik & Perdamaian", "pembahasan": "Rekonsiliasi pascakonflik membutuhkan keadilan restoratif, pemulihan modal sosial, dan kompensasi kerugian korban."},
    25: {"kunci": ["A", "B", "C", "E"], "elemen": "Rancangan Penelitian Sosial", "pembahasan": "A, B, C, dan E benar. Pernyataan D salah karena stratified random sampling justru digunakan jika populasi heterogen/bertingkat."},
    26: {"kunci": ["Benar", "Salah", "Salah"], "elemen": "Hakikat Objek Sosiologi", "pembahasan": "6A BENAR (objek material sosiologi adalah hubungan interaksi antarmanusia). 6B SALAH (sosiologi juga ilmu terapan). 6C SALAH (pendekatan objektif bukan berarti tanpa bukti empiris)."},
    27: {"kunci": ["Benar", "Salah", "Benar"], "elemen": "Multikulturalisme & Kearifan Lokal", "pembahasan": "7A BENAR (multikulturalisme akomodatif adat). 7B SALAH (bukan anomi total). 7C BENAR (proteksi nilai kesakralan dari komodifikasi)."},
    28: {"kunci": ["Salah", "Benar", "Benar"], "elemen": "Interseksi & Diferensiasi Sosial", "pembahasan": "8A SALAH (luas lahan adalah stratifikasi vertikal). 8B BENAR (interseksi silang). 8C BENAR (meredam polarisasi kelas)."},
    29: {"kunci": ["Benar", "Benar", "Salah"], "elemen": "Analisis Data Penelitian Sosial", "pembahasan": "9A BENAR (kuantitatif inferensial t-test). 9B BENAR (mixed methods kuantitatif-kualitatif). 9C SALAH (narasi kualitatif untuk memperdalam pemahaman makna subjektif, bukan uji korelasi)."},
    30: {"kunci": ["Benar", "Benar", "Salah"], "elemen": "Mobilitas Sosial & Hambatan Struktural", "pembahasan": "10A BENAR (mobilitas vertikal naik). 10B BENAR (hambatan modal struktural kemiskinan). 10C SALAH (beasiswa tidak secara otomatis menghilangkan seluruh stratifikasi sosial di dunia)."}
}

soal_list = []

for idx, b in enumerate(blocks, 1):
    soal_num = idx
    header = b[0]
    text_full = "\n".join(b)
    
    is_kategori = "BENAR" in text_full and "SALAH" in text_full and "Pernyataan" in text_full
    is_mcma = (21 <= soal_num <= 25) or "lebih dari satu" in text_full.lower()
    
    tipe = "pg"
    if is_kategori: tipe = "kategori"
    elif is_mcma: tipe = "pg_kompleks"
    
    options = []
    pernyataan_list = []
    soal_text_lines = []
    
    lines_body = b[1:]
    
    if tipe == "pg":
        opt_idx = -1
        for i, l in enumerate(lines_body):
            if re.match(r'^[A-E]\.\s+', l):
                opt_idx = i
                break
        if opt_idx != -1:
            soal_text_lines = lines_body[:opt_idx]
            for l in lines_body[opt_idx:]:
                m_opt = re.match(r'^([A-E])\.\s+(.*)', l)
                if m_opt:
                    options.append({"id": m_opt.group(1), "text": m_opt.group(2).strip()})
        else:
            soal_text_lines = lines_body
    elif tipe == "pg_kompleks":
        for l in lines_body:
            m_comp = re.match(r'^\[([A-E])\]\s*(.*)', l)
            if m_comp:
                options.append({"id": m_comp.group(1), "text": m_comp.group(2).strip()})
            elif not l.startswith("BAGIAN") and not l.startswith("Petunjuk"):
                soal_text_lines.append(l)
    elif tipe == "kategori":
        for l in lines_body:
            if re.match(r'^Pernyataan\s+\d+[A-Z]:', l):
                clean_p = re.sub(r'\s*\[\s*BENAR\s*/\s*SALAH\s*\]', '', l).strip()
                pernyataan_list.append(clean_p)
            elif not l.startswith("Tentukan BENAR") and not l.startswith("BAGIAN"):
                soal_text_lines.append(l)
                
    soal_html = ""
    for l in soal_text_lines:
        if l.endswith("?") or l.endswith("..."):
            soal_html += f"<p class=\"font-semibold text-slate-900 mb-2\">{l}</p>\n"
        else:
            soal_html += f"<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">{l}</p>\n"
            
    info = KUNCI_TO3.get(soal_num, {
        "kunci": "A",
        "elemen": "Sosiologi Terapan",
        "pembahasan": "Analisis sosiologis mendalam."
    })
    
    item = {
        "id": soal_num,
        "elemen": info["elemen"],
        "tipe": tipe,
        "soalHtml": soal_html.strip(),
        "kunci": info["kunci"],
        "pembahasan": f"<strong>Analisis Sosiologis & Pembahasan:</strong><br>{info['pembahasan']}<br><br><strong>Kunci Jawaban: {info['kunci']}</strong>"
    }
    
    if tipe in ["pg", "pg_kompleks"]:
        item["options"] = options
    elif tipe == "kategori":
        kunci_arr = info["kunci"] if isinstance(info["kunci"], list) else ["Benar", "Benar", "Salah"]
        item["pernyataan"] = [
            {"pernyataan": p, "kunci": kunci_arr[i] if i < len(kunci_arr) else "Benar"}
            for i, p in enumerate(pernyataan_list)
        ]
        
    soal_list.append(item)

print(f"Generated {len(soal_list)} structured questions for Paket 3.")

output_js = f"""// tka/data/mapel-sosiologi-paket3.js
// Bank Soal & Pembahasan Try Out 3 TKA Sosiologi SMA 2026 (30 Butir Soal Terprediksi Lengkap)
// Disusun berdasarkan kisi-kisi resmi BPPP Kemendikbudristek & Kurikulum Merdeka Terintegrasi

const tkaSosiologiPaket3Data = {json.dumps(soal_list, ensure_ascii=False, indent=2)};

// Registrasi global bundle
if (typeof window !== 'undefined') {{
  window.tkaSosiologiPaket3Data = tkaSosiologiPaket3Data;
  window.tkaSosiologiPackages = window.tkaSosiologiPackages || {{}};
  window.tkaSosiologiPackages['paket3'] = {{
    title: "Paket 3: Try Out 3 TKA Sosiologi SMA 2026 (30 Soal Terprediksi)",
    shortTitle: "Paket 3 (Try Out 3 - 30 Soal)",
    data: tkaSosiologiPaket3Data
  }};
}}

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ tkaSosiologiPaket3Data }};
}}
"""

with open('tka/data/mapel-sosiologi-paket3.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Saved tka/data/mapel-sosiologi-paket3.js successfully!")
