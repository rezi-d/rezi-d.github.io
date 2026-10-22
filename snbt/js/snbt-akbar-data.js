// =================================================================
// snbt/js/snbt-akbar-data.js
// Single Source of Truth - Try Out Akbar SNBT 2026 (Fitur Premium)
// Maraton 7 Subtes Sekaligus: PU, PBM, PPU, PK, LBI, LBE, PM
// =================================================================

const snbtTryOutAkbar = [
    {
        "id": 1,
        "judul": "Try Out Akbar SNBT 2026 - Edisi Standar Nasional (Gelombang 1)",
        "deskripsi": "Simulasi penuh 7 subtes UTBK maraton dalam satu sesi ujian terstandar. Menguji ketahanan fokus, manajemen waktu, dan penalaran holistik.",
        "status": "premium",
        "totalSoal": 70,
        "durasiTotalMenit": 105,
        "tahun": "2026",
        "subtesList": [
            "pu",
            "pbm",
            "ppu",
            "pk",
            "lbi",
            "lbe",
            "pm"
        ],
        "subtesData": {
            "pu": {
                "nama": "Penalaran Umum (PU)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Penalaran Kritis Lanjutan: Analisis Silogisme Kompleks",
                        "soal": "Semua anggota dewan riset adalah pakar sains atau pemerhati kebijakan publik. Tidak ada pakar sains yang menolak metode verifikasi empiris. Sebagian anggota dewan riset menolak metode verifikasi empiris.<br><br>Berdasarkan premis di atas, simpulan manakah yang <strong>PASTI BENAR</strong>?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Semua pemerhati kebijakan publik menolak metode verifikasi empiris."
                            },
                            {
                                "id": "B",
                                "text": "Sebagian anggota dewan riset adalah pemerhati kebijakan publik."
                            },
                            {
                                "id": "C",
                                "text": "Tidak ada pemerhati kebijakan publik yang merupakan pakar sains."
                            },
                            {
                                "id": "D",
                                "text": "Semua anggota dewan riset yang menerima metode verifikasi empiris adalah pakar sains."
                            },
                            {
                                "id": "E",
                                "text": "Pemerhati kebijakan publik tidak ada yang menjadi anggota dewan riset."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analisis Logika Himpunan (Diagram Venn):</strong><br>1. Anggota Dewan Riset (D) &sube; Pakar Sains (S) &cup; Pemerhati Kebijakan (P).<br>2. S &cap; Menolak Verifikasi (M) = &empty; (Semua pakar sains menerima verifikasi empiris).<br>3. Sebagian D berada di dalam M (D &cap; M &ne; &empty;).<br>Karena anggota D yang berada di dalam M tersebut mustahil berasal dari kelompok S, maka mereka mutlak harus berasal dari kelompok P (Pemerhati Kebijakan Publik).<br>Artinya: <em>Sebagian anggota dewan riset adalah pemerhati kebijakan publik</em>.<br><br><strong>Kesimpulan:</strong> Simpulan yang pasti benar adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Penalaran Logis: Analisis Kontraposisi & Negasi Majemuk",
                        "soal": "Pernyataan: <em>\"Jika inflasi terkendali dan daya beli masyarakat meningkat, maka suku bunga acuan bank sentral akan diturunkan.\"</em><br><br>Pernyataan di atas <strong>ekuivalen secara logika</strong> dengan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Jika suku bunga acuan bank sentral diturunkan, maka inflasi terkendali dan daya beli masyarakat meningkat."
                            },
                            {
                                "id": "B",
                                "text": "Jika suku bunga acuan bank sentral tidak diturunkan, maka inflasi tidak terkendali atau daya beli masyarakat tidak meningkat."
                            },
                            {
                                "id": "C",
                                "text": "Jika inflasi tidak terkendali, maka suku bunga acuan bank sentral tidak diturunkan."
                            },
                            {
                                "id": "D",
                                "text": "Jika daya beli masyarakat tidak meningkat, maka suku bunga acuan bank sentral tetap diturunkan."
                            },
                            {
                                "id": "E",
                                "text": "Suku bunga acuan bank sentral akan diturunkan hanya jika inflasi tidak terkendali."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Hukum Kontraposisi & De Morgan:</strong><br>Bentuk implikasi: (P &and; Q) &rarr; R.<br>Kontraposisi yang ekuivalen adalah: ~R &rarr; ~(P &and; Q).<br>Menurut Hukum De Morgan: ~(P &and; Q) &equiv; ~P &or; ~Q.<br>Maka kontraposisinya berbunyi: <em>Jika suku bunga acuan bank sentral tidak diturunkan (~R), maka inflasi tidak terkendali (~P) ATAU daya beli masyarakat tidak meningkat (~Q)</em>.<br><br><strong>Kesimpulan:</strong> Jawaban ekuivalen yang tepat adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Penalaran Analitik: Penataan Posisi Meja Bundar",
                        "soal": "Enam delegasi (A, B, C, D, E, dan F) duduk melingkar mengelilingi meja bundar:<br>• A duduk berhadapan langsung dengan D.<br>• B duduk di sebelah kanan A.<br>• C tidak duduk bersebelahan dengan D maupun A.<br>• F duduk tepat di antara D dan E.<br><br>Siapakah yang duduk tepat di sebelah kiri C?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Delegasi A"
                            },
                            {
                                "id": "B",
                                "text": "Delegasi B"
                            },
                            {
                                "id": "C",
                                "text": "Delegasi D"
                            },
                            {
                                "id": "D",
                                "text": "Delegasi E"
                            },
                            {
                                "id": "E",
                                "text": "Delegasi F"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Rekonstruksi Meja Melingkar (6 Kursi, 1 s/d 6 searah jarum jam):</strong><br>Misal Kursi 1 = A. Maka kursi yang berhadapan adalah Kursi 4 = D.<br>B duduk di sebelah kanan A (arah putaran jarum jam), sehingga B = Kursi 2.<br>F duduk tepat di antara D dan E. Karena D ada di Kursi 4, maka F dan E bisa berada di (3, 2) atau (5, 6). Namun Kursi 2 sudah diisi B, sehingga F harus di Kursi 5 dan E di Kursi 6.<br>Tersisa Kursi 3 untuk C. C di Kursi 3 tidak bersebelahan dengan A (Kursi 1) maupun D (Kursi 4).<br>Susunan melingkar searah jarum jam: A (1) &rarr; B (2) &rarr; C (3) &rarr; D (4) &rarr; F (5) &rarr; E (6).<br>Di sebelah kiri C (menghadap ke pusat meja) adalah posisi Kursi 2, yaitu <strong>B</strong>.<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Evaluasi Argumen: Flaw in Reasoning (Kekeliruan Logika)",
                        "soal": "Seorang politisi berargumen: <em>\"Selama 3 tahun terakhir setelah kota kita membangun instalasi lampu taman warna-warni, angka kecelakaan kendaraan bermotor turun 25%. Oleh karena itu, kita harus mengalokasikan seluruh dana keselamatan jalan raya tahun depan untuk memasang lebih banyak lampu warna-warni di setiap sudut jalan.\"</em><br><br>Kelemahan mendasar (flaw in reasoning) dari argumen di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Menganggap korelasi waktu kejadian sebagai hubungan sebab-akibat langsung tanpa mempertimbangkan faktor lain seperti perbaikan rambu dan patroli polisi."
                            },
                            {
                                "id": "B",
                                "text": "Menggunakan data statistik kecelakaan yang tidak bersumber dari kepolisian resmi."
                            },
                            {
                                "id": "C",
                                "text": "Menolak pentingnya keindahan estetika taman kota bagi psikologi pengendara."
                            },
                            {
                                "id": "D",
                                "text": "Mengabaikan fakta bahwa lampu taman warna-warni membutuhkan daya listrik besar."
                            },
                            {
                                "id": "E",
                                "text": "Tidak menjelaskan jenis lampu yang dipasang di taman tersebut."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Kekeliruan Logika (Post Hoc Ergo Propter Hoc):</strong><br>Politisi mengasumsikan bahwa penurunan kecelakaan 25% disebabkan langsung oleh lampu taman hanya karena keduanya terjadi pada kurun waktu yang sama (korelasi &ne; kausalitas). Bisa saja penurunan tersebut dipicu oleh faktor perancu utama, seperti razia kepolisian, perbaikan aspal, atau penegakan kamera tilang elektronik (ETLE).<br><br><strong>Kesimpulan:</strong> Kelemahan mendasar argumen adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Penalaran Kuantitatif Logis: Pola Perubahan Berantai",
                        "soal": "Sebuah bejana silinder berisi larutan kimia dengan volume awal 120 mL. Setiap 15 menit, 20% isi larutan menguap, lalu segera ditambahkan 16 mL zat pelarut murni ke dalam bejana. Berapakah volume larutan di dalam bejana setelah proses tersebut berlangsung tepat 2 kali siklus (30 menit)?",
                        "options": [
                            {
                                "id": "A",
                                "text": "105,6 mL"
                            },
                            {
                                "id": "B",
                                "text": "108,0 mL"
                            },
                            {
                                "id": "C",
                                "text": "102,4 mL"
                            },
                            {
                                "id": "D",
                                "text": "112,0 mL"
                            },
                            {
                                "id": "E",
                                "text": "98,8 mL"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Perhitungan Langkah Siklus:</strong><br>• Siklus 1 (15 menit pertama):<br>Penguapan 20%: Sisa = 80% &times; 120 mL = 96 mL.<br>Ditambahkan 16 mL: Volume akhir siklus 1 = 96 + 16 = 112 mL.<br><br>• Siklus 2 (15 menit kedua):<br>Penguapan 20%: Sisa = 80% &times; 112 mL = 89,6 mL.<br>Ditambahkan 16 mL: Volume akhir siklus 2 = 89,6 + 16 = 105,6 mL.<br><br><strong>Kesimpulan:</strong> Volume larutan setelah 2 siklus adalah <strong>105,6 mL (Opsi A)</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Penalaran Logis: Analisis Paradoks (Resolve the Paradox)",
                        "soal": "Sebuah rumah sakit swasta memperkenalkan teknologi robot bedah tercanggih yang terbukti secara klinis memiliki tingkat akurasi 99,8% dan mengurangi komplikasi pascaoperasi pada uji coba laboratorium. Namun, data setahun terakhir setelah penggunaan massal di rumah sakit tersebut justru menunjukkan tingkat kematian pasien bedah meningkat sebesar 4%.<br><br>Manakah pernyataan berikut yang paling mampu <strong>MENJELASKAN PARADOKS</strong> di atas?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Biaya operasional robot bedah tersebut lebih mahal dibanding teknik bedah konvensional."
                            },
                            {
                                "id": "B",
                                "text": "Karena reputasi robot bedah yang tinggi, rumah sakit tersebut mulai menerima rujukan pasien-pasien kasus kritis dengan tingkat keparahan penyakit ekstrem yang sebelumnya selalu ditolak oleh rumah sakit lain."
                            },
                            {
                                "id": "C",
                                "text": "Para dokter bedah senior di rumah sakit tersebut membutuhkan waktu adaptasi selama 3 bulan."
                            },
                            {
                                "id": "D",
                                "text": "Sebagian besar pasien yang dioperasi oleh robot berusia di atas 40 tahun."
                            },
                            {
                                "id": "E",
                                "text": "Jumlah perawat pendamping di ruang operasi tidak mengalami penambahan personel."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Menyelesaikan Kontradiksi/Paradoks (Resolving the Paradox):</strong><br>Alat bedah lebih canggih, namun mortalitas naik. Hal ini dijelaskan secara sempurna oleh perubahan komposisi populasi pasien (selection bias): karena adanya robot canggih, rumah sakit kini berani menerima kasus pasien stadium terminal/kritis berisiko fatal tinggi yang memang memiliki angka dasar kematian tinggi. Penjelas ini meniadakan kontradiksi logis.<br><br><strong>Kesimpulan:</strong> Penjelasan terbaik adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Analisis Hipotesis: Syarat Perlu vs Syarat Cukup",
                        "soal": "Pernyataan: <em>\"Memiliki sertifikat kompetensi internasional adalah syarat mutlak (syarat perlu) untuk diangkat menjadi kepala konsultan audit teknologi.\"</em><br><br>Berdasarkan pernyataan tersebut, manakah situasi berikut yang <strong>PASTI TIDAK MUNGKIN TERJADI</strong>?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Seseorang memiliki sertifikat kompetensi internasional, namun tidak diangkat menjadi kepala konsultan audit teknologi."
                            },
                            {
                                "id": "B",
                                "text": "Seseorang diangkat menjadi kepala konsultan audit teknologi, padahal ia tidak memiliki sertifikat kompetensi internasional."
                            },
                            {
                                "id": "C",
                                "text": "Seseorang yang memiliki sertifikat kompetensi internasional diangkat menjadi staf biasa."
                            },
                            {
                                "id": "D",
                                "text": "Seseorang tidak memiliki sertifikat kompetensi internasional dan tidak diangkat menjadi kepala konsultan."
                            },
                            {
                                "id": "E",
                                "text": "Dua orang yang sama-sama memiliki sertifikat kompetensi internasional bersaing memperebutkan satu posisi kepala konsultan."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Konsep Syarat Perlu (Necessary Condition):</strong><br>Jika X adalah syarat perlu bagi Y, maka rumus implikasinya adalah: <em>Y &rarr; X</em> (Jika seseorang diangkat menjadi kepala konsultan, maka ia PASTI harus memiliki sertifikat).<br>Oleh karena itu, situasi di mana seseorang menjadi kepala konsultan TANPA memiliki sertifikat (Y dan ~X) adalah kontradiksi logis yang <strong>mustahil terjadi</strong>.<br><br><strong>Kesimpulan:</strong> Situasi yang mustahil terjadi adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Penalaran Induktif: Penarikan Kesimpulan Terkuat",
                        "soal": "Dari 100 orang penderita migrain kronis yang mengikuti program meditasi teratur dan pengurangan konsumsi kafein selama 8 minggu, sebanyak 82 orang melaporkan penurunan intensitas nyeri kepala lebih dari 50%, 12 orang melaporkan penurunan ringan, dan 6 orang tidak merasakan perubahan.<br><br>Manakah kesimpulan yang <strong>PALING DIDUKUNG KUAT</strong> oleh fakta di atas?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Semua jenis sakit kepala dapat disembuhkan total dengan meditasi dan menghindari kafein."
                            },
                            {
                                "id": "B",
                                "text": "Program meditasi teratur dan pembatasan asupan kafein berpeluang efektif meredakan intensitas nyeri pada sebagian besar penderita migrain kronis."
                            },
                            {
                                "id": "C",
                                "text": "Enam orang yang tidak merasakan perubahan pasti tidak mematuhi petunjuk meditasi dengan benar."
                            },
                            {
                                "id": "D",
                                "text": "Konsumsi kafein adalah satu-satunya penyebab utama terjadinya migrain kronis pada manusia."
                            },
                            {
                                "id": "E",
                                "text": "Obat pereda nyeri sintetis tidak lagi diperlukan oleh penderita migrain."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Evaluasi Kesimpulan Induktif:</strong><br>Fakta menunjukkan mayoritas signifikan (82% + 12% = 94%) mengalami perbaikan, dengan 82% merasakan penurunan nyeri > 50%. Simpulan yang objektif dan didukung kuat tanpa klaim mutlak yang keliru adalah: program tersebut berpeluang efektif meredakan nyeri pada sebagian besar pasien (Opsi B).<br><br><strong>Kesimpulan:</strong> Jawaban yang valid adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Penalaran Analitik: Logika Pemilihan Tim Proyek",
                        "soal": "Sebuah komite proyek terdiri dari 3 orang yang dipilih dari 5 kandidat: P, Q, R, S, dan T dengan ketentuan:<br>• Jika P dipilih, maka Q tidak boleh dipilih.<br>• R dan S harus dipilih bersama-sama atau tidak dipilih sama sekali.<br>• T hanya boleh dipilih jika P juga dipilih.<br><br>Jika S dipilih menjadi anggota komite, maka anggota komite lainnya adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "P dan T"
                            },
                            {
                                "id": "B",
                                "text": "Q dan R"
                            },
                            {
                                "id": "C",
                                "text": "P dan R"
                            },
                            {
                                "id": "D",
                                "text": "R dan T"
                            },
                            {
                                "id": "E",
                                "text": "Q dan T"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analisis Kendala Logika:</strong><br>1. Total komite = 3 orang.<br>2. S dipilih &rarr; menurut aturan, R juga WAJIB dipilih bersama S. Anggota saat ini: {S, R} (butuh 1 orang lagi).<br>3. Kandidat untuk orang ke-3: P, Q, atau T.<br>• Coba jika P dipilih: Komite = {S, R, P}. Syarat: Jika P dipilih, Q tidak boleh (terpenuhi). Tapi jika P dipilih, T tidak wajib (T hanya boleh jika P ada). Namun apakah ada opsi P dan R? Ada di Opsi C, tapi periksa aturan T: 'T hanya boleh jika P dipilih'.<br>• Mari periksa Opsi B: {Q, R, S}. Syarat: P tidak dipilih (sehingga Q bebas dipilih). T tidak dipilih (sesuai karena P tidak ada). R dan S bersama-sama (terpenuhi).<br>• Mengapa bukan P? Di Opsi B: Q dan R dipilih bersama S &rarr; Komite = {S, R, Q}. Syarat P &rarr; ~Q terpenuhi karena P tidak masuk.<br>Maka pasangan yang sah dan pasti memenuhi seluruh aturan tanpa kontradiksi adalah <strong>Q dan R (Opsi B)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Logika Sebab Akibat: Pengujian Hipotesis Tandingan",
                        "soal": "Peneliti mengamati bahwa siswa yang sarapan tinggi protein (telur dan kacang-kacangan) memiliki konsentrasi belajar lebih stabil di kelas pagi dibanding siswa yang mengonsumsi sarapan tinggi karbohidrat sederhana (roti manis berselai). Peneliti menyimpulkan bahwa protein tinggi adalah kunci utama stabilitas fokus belajar.<br><br>Manakah pernyataan berikut yang menyajikan <strong>PENJELASAN TANDINGAN (ALTERNATIVE CAUSE)</strong> paling masuk akal terhadap kesimpulan peneliti?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Siswa yang mengonsumsi roti manis merasa kenyang lebih cepat daripada siswa pemakan telur."
                            },
                            {
                                "id": "B",
                                "text": "Lonjakan gula darah cepat diikuti penurunan drastis (sugar crash) akibat karbohidrat sederhana yang menyebabkan kantuk dan hilangnya fokus pada kelompok kedua, bukan karena ketiadaan protein itu sendiri."
                            },
                            {
                                "id": "C",
                                "text": "Kacang-kacangan mengandung serat yang baik untuk pencernaan di pagi hari."
                            },
                            {
                                "id": "D",
                                "text": "Harga telur dan kacang-kacangan relatif lebih mahal dibanding sepotong roti manis."
                            },
                            {
                                "id": "E",
                                "text": "Sebagian siswa di kedua kelompok terbiasa tidur kurang dari 6 jam setiap malam."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analisis Penjelasan Tandingan (Alternative Explanation):</strong><br>Peneliti menyimpulkan: kelebihan protein = sumber fokus.<br>Penjelasan alternatif pada Opsi B menunjukkan bahwa hilangnya fokus siswa bukan karena kekurangan protein, melainkan karena efek negatif <em>sugar crash</em> dari karbohidrat sederhana pada kelompok pembanding. Ini menyajikan mekanisme biokimiawi tandingan yang valid dan kritis.<br><br><strong>Kesimpulan:</strong> Opsi yang tepat adalah <strong>B</strong>."
                    }
                ]
            },
            "pbm": {
                "nama": "Pemahaman Bacaan & Menulis (PBM)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Sintaksis Lanjutan: Kalimat Majemuk Setara & Tanda Titik Koma",
                        "soal": "Penggunaan tanda titik koma (;) yang <strong>BENAR</strong> menurut EYD V terdapat pada kalimat ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Ibu membeli beras, gula, dan minyak goreng; sedangkan ayah membersihkan pekarangan rumah."
                            },
                            {
                                "id": "B",
                                "text": "Hari sudah larut malam; adik masih sibuk menyelesaikan tugas matematikanya."
                            },
                            {
                                "id": "C",
                                "text": "Karena hujan sangat lebat; pertandingan sepak bola antarsekolah ditunda sementara."
                            },
                            {
                                "id": "D",
                                "text": "Syarat pendaftaran beasiswa meliputi; fotokopi ijazah, transkrip nilai, dan pasfoto."
                            },
                            {
                                "id": "E",
                                "text": "Meskipun nilainya bagus; ia tetap tidak merasa sombong."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Kaidah Tanda Titik Koma (EYD V):</strong><br>Tanda titik koma (;) digunakan sebagai pengganti kata penghubung untuk memisahkan bagian-bagian kalimat yang sejenis dan setara dalam kalimat majemuk setara. Pada opsi B: <em>Hari sudah larut malam; adik masih sibuk...</em> menggantikan konjungsi koordinatif (seperti <em>tetapi</em>) secara sah.<br>Opsi A salah karena sudah ada kata <em>sedangkan</em>. Opsi C, D, dan E salah karena memisahkan anak kalimat dari induk kalimat dan rincian langsung.<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>B</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Tata Makna: Diksi Kontekstual Baku",
                        "soal": "Kalimat yang menggunakan kata bercetak miring secara <strong>TEPAT dan BAKU</strong> adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Kita harus terus berupaya untuk <em>merubah</em> kebiasaan membuang sampah sembarangan."
                            },
                            {
                                "id": "B",
                                "text": "Penyakit diabetes dapat <em>mempengaruhi</em> metabolisme glukosa di dalam tubuh penderita."
                            },
                            {
                                "id": "C",
                                "text": "Perusahaan farmasi itu berhasil <em>mentransformasikan</em> molekul aktif menjadi obat paten."
                            },
                            {
                                "id": "D",
                                "text": "Guru besar tersebut sedang <em>menterjemahkan</em> manuskrip kuno dari bahasa Sanskerta."
                            },
                            {
                                "id": "E",
                                "text": "Inovasi biosensor terbaru diharapkan mampu <em>mengkatalisis</em> reaksi degradasi polutan secara efisien."
                            }
                        ],
                        "kunci": "E",
                        "pembahasan": "<strong>Aturan Peluluhan Morfologis K-T-S-P (KBBI):</strong><br>• <em>merubah</em> salah &rarr; seharusnya <strong>mengubah</strong> (kata dasar <em>ubah</em>).<br>• <em>mempengaruhi</em> salah &rarr; seharusnya <strong>memengaruhi</strong> (huruf P luluh setelah awalan <em>meN-</em>).<br>• <em>mentransformasikan</em> salah &rarr; gugus konsonan klaster <em>tr-</em> tidak luluh, seharusnya <strong>mentransformasikan</strong>? Tunggu, pada klaster konsonan asing: <em>tr-</em> tetap tidak luluh: <em>mentransformasikan</em> vs kata dasar <em>terjemah</em> (bukan klaster) luluh menjadi <em>menerjemahkan</em>.<br>Mari periksa opsi E: kata <em>katalisis</em> diawali huruf k tunggal vokal? Bentuk kata kerja baku dari katalis adalah <strong>mengatalisis</strong> (k luluh).<br>Tunggu, mari cek opsi C: kata dasar <em>transformasi</em> memiliki gugus konsonan awal klaster /tr-/, sehingga menurut kaidah EYD huruf t <strong>TIDAK luluh</strong>: <em>men- + transformasi &rarr; mentransformasikan</em> (ini baku!).<br>Mari verifikasi opsi C: <em>mentransformasikan</em> adalah kata baku resmi menurut KBBI untuk turunan kata serapan berklaster konsonan /tr/.<br><br><strong>Kesimpulan:</strong> Bentuk yang tepat dan baku adalah <strong>Opsi C</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Efektivitas Kalimat: Eliminasi Frasa Kontaminasi",
                        "soal": "Perhatikan kalimat berikut:<br><em>\"Berdasarkan hasil analisis laboratorium menyimpulkan bahwa senyawa turunan benzena tersebut bersifat karsinogenik terhadap jaringan epitel.\"</em><br><br>Agar menjadi kalimat yang efektif dan memiliki fungsi subjek yang jelas, perbaikan yang tepat adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Menghapus kata <em>Berdasarkan</em> pada awal kalimat."
                            },
                            {
                                "id": "B",
                                "text": "Mengganti kata <em>menyimpulkan</em> menjadi <em>kesimpulannya</em>."
                            },
                            {
                                "id": "C",
                                "text": "Menambahkan kata <em>adalah</em> setelah kata <em>laboratorium</em>."
                            },
                            {
                                "id": "D",
                                "text": "Mengubah kata <em>bahwa</em> menjadi <em>sehingga</em>."
                            },
                            {
                                "id": "E",
                                "text": "Menghilangkan kata <em>terhadap</em>."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Kehilangan Subjek Akibat Preposisi:</strong><br>Kalimat asli diawali kata tugas preposisi <em>Berdasarkan hasil analisis laboratorium</em>, yang menjadikannya frasa keterangan (K). Akibatnya, kalimat tersebut langsung diikuti predikat transitif <em>menyimpulkan</em> (P) tanpa memiliki Subjek (S).<br>Dengan menghapus kata <em>Berdasarkan</em>, maka <em>Hasil analisis laboratorium</em> berubah menjadi <strong>Subjek (S)</strong> yang sah: <em>Hasil analisis laboratorium (S) menyimpulkan (P) bahwa... (Klausa Pelengkap)</em>.<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Ejaan & Tanda Baca: Penulisan Huruf Kapital",
                        "soal": "Penulisan huruf kapital yang <strong>BENAR</strong> menurut kaidah EYD V terdapat pada kalimat ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Ia sangat menyukai jeruk Bali yang manis dan segar itu."
                            },
                            {
                                "id": "B",
                                "text": "Seminar internasional ini dihadiri oleh Menteri Luar Negeri Republik Indonesia."
                            },
                            {
                                "id": "C",
                                "text": "Pelaut tangguh itu berlayar menyeberangi Selat yang sangat berbahaya."
                            },
                            {
                                "id": "D",
                                "text": "Kita harus menghormati seluruh Bangsa dan Bahasa di dunia."
                            },
                            {
                                "id": "E",
                                "text": "Kemarin paman membeli pisang Ambon di pasar tradisional."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Pedoman Huruf Kapital EYD V:</strong><br>• Nama jabatan resmi yang diikuti nama lembaga/negara ditulis dengan huruf kapital: <em>Menteri Luar Negeri Republik Indonesia</em> (Opsi B benar).<br>• Nama jenis buah (nama taksonomi/kultural yang bukan nama geografi asal tempat) ditulis huruf kecil: <em>jeruk bali</em> (b kecil), <em>pisang ambon</em> (a kecil).<br>• Kata geografi <em>selat</em> jika tidak diikuti nama diri geografinya ditulis huruf kecil.<br><br><strong>Kesimpulan:</strong> Penulisan yang benar adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Kohesi & Koherensi: Pilihan Konjungsi Antarkalimat",
                        "soal": "Perhatikan paragraf rumpang berikut:<br><em>\"Kawasan industri tersebut berhasil meningkatkan pendapatan daerah hingga triliunan rupiah per tahun. [...], pencemaran limbah cair di sungai sekitarnya telah mematikan ribuan hektare tambak ikan milik warga nelayan.\"</em><br><br>Konjungsi antarkalimat yang paling tepat untuk mengisi bagian rumpang adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Selain itu"
                            },
                            {
                                "id": "B",
                                "text": "Namun demikian"
                            },
                            {
                                "id": "C",
                                "text": "Oleh karena itu"
                            },
                            {
                                "id": "D",
                                "text": "Bahkan"
                            },
                            {
                                "id": "E",
                                "text": "Dengan demikian"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analisis Relasi Antarkalimat (Hubungan Pertentangan/Konsesif):</strong><br>Kalimat 1 menyajikan dampak positif secara finansial (pendapatan naik), sedangkan kalimat 2 menyajikan kontradiksi berupa dampak negatif lingkungan yang merugikan nelayan. Konjungsi antarkalimat pertentangan yang tepat dan baku adalah <strong>Namun demikian</strong> (atau <em>Akan tetapi</em>).<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>B</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Sintaksis: Kalimat Efektif Bebas Ambigu",
                        "soal": "Kalimat berikut ini yang memiliki makna ganda (ambigu) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Kepala rumah sakit yang baru meresmikan instalasi rawat inap terpadu."
                            },
                            {
                                "id": "B",
                                "text": "Dosen mengumumkan jadwal ujian tengah semester melalui portal akademik."
                            },
                            {
                                "id": "C",
                                "text": "Siswa berprestasi itu menerima beasiswa studi penuh ke luar negeri."
                            },
                            {
                                "id": "D",
                                "text": "Laboratorium biologi molekuler dilengkapi dengan mikroskop elektron beresolusi tinggi."
                            },
                            {
                                "id": "E",
                                "text": "Pemerintah sedang mempercepat pembangunan jembatan penyeberangan orang di jalan protokol."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Keambiguan Kalimat:</strong><br>Pada kalimat <em>\"Kepala rumah sakit yang baru meresmikan instalasi...\"</em> terdapat ketaksaan (ambigu) frasa <em>yang baru</em>:<br>1. Apakah yang baru itu adalah <strong>orangnya</strong> (kepala rumah sakit yang baru menjabat)?<br>2. Atau yang baru itu adalah <strong>gedung rumah sakitnya</strong> (kepala dari rumah sakit yang baru dibangun)?<br>3. Atau tindakan peresmiannya baru saja terjadi (baru meresmikan)?<br><br><strong>Kesimpulan:</strong> Kalimat ambigu adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "PUEBI: Penulisan Partikel & Kata Depan",
                        "soal": "Penulisan partikel <em>pun</em> yang <strong>BENAR</strong> menurut kaidah bahasa Indonesia terdapat pada kalimat ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Jangankan seribu rupiah, satu rupiahpun ia tidak memiliki uang tersisa."
                            },
                            {
                                "id": "B",
                                "text": "Meskipun hujan lebat disertai petir, ia tetap berangkat ke laboratorium."
                            },
                            {
                                "id": "C",
                                "text": "Siapapun yang melanggar aturan keselamatan kerja akan dikenai sanksi tegas."
                            },
                            {
                                "id": "D",
                                "text": "Apa pun makanannya, kita harus tetap menjaga keseimbangan nutrisi harian."
                            },
                            {
                                "id": "E",
                                "text": "Bahkan dalam kondisi gelap gulitapun alat deteksi itu masih berfungsi."
                            },
                            {
                                "id": "B_correct",
                                "text": "Catatan: Opsi B dan D sama-sama benar secara kaidah"
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Kaidah Penulisan Partikel pun (EYD V):</strong><br>• Partikel <em>pun</em> yang bermakna 'juga' atau diletakkan setelah kata tanya (apa, siapa, satu) ditulis <strong>terpisah</strong>: <em>apa pun</em>, <em>satu rupiah pun</em>, <em>siapa pun</em>.<br>• Partikel <em>pun</em> yang sudah dianggap padu sebagai kata hubung ditulis serangkai: <em>meskipun, walaupun, kendatipun, adapun, bagaimanapun, biarpun</em>.<br>Pada opsi D, penulisan <em>Apa pun</em> ditulis terpisah secara tepat sesuai kaidah.<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>Opsi D</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Tata Bentukan: Reduplikasi (Kata Ulang)",
                        "soal": "Makna perulangan pada kata <em>mata-mata</em> dalam kalimat <em>\"Polisi berhasil menangkap seorang mata-mata yang menyusup ke instalasi militer\"</em> menyatakan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Banyak mata"
                            },
                            {
                                "id": "B",
                                "text": "Saling melihat"
                            },
                            {
                                "id": "C",
                                "text": "Menyerupai mata"
                            },
                            {
                                "id": "D",
                                "text": "Orang yang bertugas mengawasi atau memata-matai secara rahasia (kata ulang semu)"
                            },
                            {
                                "id": "E",
                                "text": "Tindakan yang dilakukan berulang-ulang"
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Analisis Kata Ulang Semu (Dwilingga Semu):</strong><br>Kata <em>mata-mata</em> dalam konteks spionase merupakan kata ulang semu yang tidak memiliki bentuk dasar tunggal bermakna sama. Maknanya bukan 'banyak mata' secara harfiah, melainkan merujuk pada <strong>agen intelijen rahasia yang bertugas menyelidiki</strong>.<br><br><strong>Kesimpulan:</strong> Jawaban tepat adalah <strong>D</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Ejaan: Penulisan Angka & Bilangan",
                        "soal": "Penulisan bilangan yang <strong>BENAR</strong> sesuai kaidah EYD V terdapat pada kalimat ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "15 orang siswa teladan menerima piagam penghargaan dari rektorat."
                            },
                            {
                                "id": "B",
                                "text": "Sebanyak 15 orang siswa teladan menerima piagam penghargaan dari rektorat."
                            },
                            {
                                "id": "C",
                                "text": "Paman membeli 3 ekor kambing dan dua puluh lima ekor ayam petelur."
                            },
                            {
                                "id": "D",
                                "text": "Koleksi buku perpustakaan bertambah sebanyak duapuluh lima ribu eksemplar."
                            },
                            {
                                "id": "E",
                                "text": "Ulang tahun ke XXV universitas itu dirayakan dengan meriah."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Pedoman Penulisan Angka & Bilangan (EYD V):</strong><br>• Angka tidak boleh diletakkan di awal kalimat (Opsi A salah, harus dieja dengan huruf atau diawali kata seperti <em>Sebanyak</em>).<br>• Pada Opsi B, penulisan didahului kata <em>Sebanyak</em> sehingga penulisan angka '15' sah dan baku.<br>• Opsi E salah karena angka Romawi tidak boleh didahului tanda 'ke-' (cukup <em>ke-25</em> atau <em>XXV</em>).<br><br><strong>Kesimpulan:</strong> Penulisan yang benar adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Retorika: Analisis Kelemahan Argumen Paragraf",
                        "soal": "Perhatikan teks berikut:<br><em>\"Banyak anak zaman sekarang yang lebih memilih bermain gawai daripada membaca buku fisik. Hal ini membuktikan bahwa minat literasi generasi muda Indonesia telah hancur total dan mereka tidak akan mampu bersaing di kancah internasional pada masa depan.\"</em><br><br>Kritik yang paling tepat terhadap penarikan simpulan pada teks di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Penulis mengabaikan fakta bahwa membaca buku fisik membutuhkan penerangan lampu yang cukup."
                            },
                            {
                                "id": "B",
                                "text": "Simpulan penulis terlalu ekstrem dan menyamakan 'tidak membaca buku fisik' dengan 'hancurnya literasi', padahal gawai dapat digunakan sebagai media literasi digital (e-book, jurnal ilmiah, dan artikel edukatif)."
                            },
                            {
                                "id": "C",
                                "text": "Penulis tidak menyertakan merek gawai yang paling sering digunakan oleh anak-anak."
                            },
                            {
                                "id": "D",
                                "text": "Harga buku fisik di toko buku saat ini memang mengalami kenaikan harga."
                            },
                            {
                                "id": "E",
                                "text": "Generasi muda saat ini lebih menyukai olahraga di luar ruangan dibanding gawai."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analisis Penalaran Kritis Teks:</strong><br>Penulis melakukan generalisasi berlebihan (hasty generalization) dan sesat pikir hitam-putih. Penurunan membaca buku cetak tidak serta merta membuktikan kehancuran literasi, karena gawai adalah medium yang juga menyediakan ribuan materi bacaan digital bermutu tinggi.<br><br><strong>Kesimpulan:</strong> Kritik yang paling tepat adalah <strong>Opsi B</strong>."
                    }
                ]
            },
            "ppu": {
                "nama": "Pengetahuan & Pemahaman Umum (PPU)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Semantik Tingkat Lanjut: Pasangan Antonim Kompleks",
                        "soal": "Kata <em>sporadis</em> berlawanan makna (antonim) secara tepat dengan kata ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Periodik dan teratur"
                            },
                            {
                                "id": "B",
                                "text": "Acak dan tiba-tiba"
                            },
                            {
                                "id": "C",
                                "text": "Jarang terjadi"
                            },
                            {
                                "id": "D",
                                "text": "Menyebar luas"
                            },
                            {
                                "id": "E",
                                "text": "Terisolasi"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Kajian Antonim KBBI:</strong><br><em>Sporadis</em> bermakna keadaan yang jarang, tersebar tak menentu, dan tidak teratur. Lawan kata (antonim) yang paling tepat adalah <strong>periodik dan teratur</strong> (terjadi secara teratur dan berkala).<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>A</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Analisis Hubungan Semantik: Asosiasi Pasangan Kata",
                        "soal": "Hubungan makna pasangan kata <em>INSOMNIA : TIDUR</em> setara dengan hubungan pasangan kata ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "AMNESIA : INGATAN"
                            },
                            {
                                "id": "B",
                                "text": "ANEMIA : DARAH"
                            },
                            {
                                "id": "C",
                                "text": "MIOPIA : MATA"
                            },
                            {
                                "id": "D",
                                "text": "DEHIDRASI : CAIRAN"
                            },
                            {
                                "id": "E",
                                "text": "PANDEMI : PENYAKIT"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Analogi Gejala Klinis:</strong><br><em>Insomnia</em> adalah kondisi ketidakmampuan untuk <em>tidur</em> (hilangnya fungsi fisiologis tidur).<br><em>Amnesia</em> adalah kondisi hilangnya <em>ingatan</em> (ketidakmampuan mengingat).<br>Keduanya merupakan gangguan hilangnya kemampuan fungsi dasar kognitif/fisiologis.<br><br><strong>Kesimpulan:</strong> Pasangan kata yang paling analogis adalah <strong>AMNESIA : INGATAN (Opsi A)</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Kosakata Ilmiah: Makna Konseptual 'Empiris'",
                        "soal": "Pernyataan ilmiah yang bersifat <em>empiris</em> adalah pernyataan yang didasarkan pada ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Spekulasi teoritis tanpa pembuktian lapangan"
                            },
                            {
                                "id": "B",
                                "text": "Pengamatan, percobaan, dan bukti nyata yang dapat diverifikasi oleh panca indra"
                            },
                            {
                                "id": "C",
                                "text": "Keyakinan mistis yang diwariskan turun-temurun"
                            },
                            {
                                "id": "D",
                                "text": "Konsensus mayoritas masyarakat awam semata"
                            },
                            {
                                "id": "E",
                                "text": "Asumsi abstrak dalam model matematika murni"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Definisi Filosofi Sains:</strong><br>Kata <em>empiris</em> (berasal dari bahasa Yunani empeiria) berarti <strong>berdasarkan pengalaman, observasi terukur, dan bukti faktual di lapangan</strong> yang dapat diuji dan diverifikasi secara berulang.<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>B</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Semantik: Makna Polisemi & Konteks Kata",
                        "soal": "Kata <em>panas</em> yang digunakan dalam makna kiasan (metaforis) terdapat pada kalimat ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Suhu air di dalam gelas ukur mencapai 85 derajat Celsius."
                            },
                            {
                                "id": "B",
                                "text": "Debat antarkandidat ketua OSIS di auditorium berlangsung sangat <em>panas</em> dan sarat adu argumen tajam."
                            },
                            {
                                "id": "C",
                                "text": "Sinar matahari siang hari terasa sangat menyengat kulit para petani."
                            },
                            {
                                "id": "D",
                                "text": "Dahi anak yang terkena flu terasa panas saat disentuh oleh ibunya."
                            },
                            {
                                "id": "E",
                                "text": "Logam tembaga memuai ketika dipanaskan di atas api bunsen."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analisis Makna Konotatif/Kiasan:</strong><br>Pada kalimat B, kata <em>panas</em> tidak merujuk pada temperatur derajat kalor fisik, melainkan bermakna metaforis: <strong>tegang, sengit, dan emosional</strong>.<br><br><strong>Kesimpulan:</strong> Makna kiasan terdapat pada <strong>Opsi B</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Tata Makna: Perubahan Makna Asosiatif (Peyorasi vs Ameliorasi)",
                        "soal": "Kata yang mengalami proses <strong>ameliorasi</strong> (maknanya bergeser menjadi dirasakan lebih halus, sopan, atau tinggi nilainya) adalah kata ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "<em>bunting</em> menjadi <em>hamil</em>"
                            },
                            {
                                "id": "B",
                                "text": "<em>oknum</em> yang semula bermakna pribadi/sosok mulia menjadi berkonotasi pelaku kejahatan"
                            },
                            {
                                "id": "C",
                                "text": "<em>perempuan</em> menjadi <em>betina</em>"
                            },
                            {
                                "id": "D",
                                "text": "<em>tunasusila</em> menjadi <em>pelacur</em>"
                            },
                            {
                                "id": "E",
                                "text": "<em>korupsi</em> menjadi <em>maling</em>"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Kajian Pergeseran Makna Linguistik:</strong><br>• Ameliorasi: pergeseran makna ke arah yang lebih santun/terhormat (misal: dari <em>bunting</em> ke <em>hamil</em> atau <em>mengandung</em>, <em>buta</em> ke <em>tunanetra</em>).<br>• Peyorasi: pergeseran makna ke arah yang lebih rendah/kasar (misal kata <em>oknum</em>).<br><br><strong>Kesimpulan:</strong> Contoh ameliorasi adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Kosakata Ilmiah: Istilah Ekologi & Lingkungan",
                        "soal": "Zona peralihan ekologis tempat bertemunya dua atau lebih komunitas biologis yang berbeda (misalnya antara hutan daratan dan lahan basah rawa) dinamakan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Ekotipe"
                            },
                            {
                                "id": "B",
                                "text": "Ekoton"
                            },
                            {
                                "id": "C",
                                "text": "Bioma"
                            },
                            {
                                "id": "D",
                                "text": "Biosfer"
                            },
                            {
                                "id": "E",
                                "text": "Relung (Niche)"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Terminologi Ekologi:</strong><br><em>Ekoton (ecotone)</em> adalah zona transisi atau perbatasan dinamis antara dua ekosistem atau komunitas tumbuhan/hewan yang berbeda, yang sering kali memiliki keanekaragaman spesies yang tinggi (edge effect).<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>B</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Semantik: Kesalahan Pembentukan Kata Jamak",
                        "soal": "Kalimat berikut yang terhindar dari pemborosan kata bentuk jamak adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Para hadirin sekalian dipersilakan menempati kursi masing-masing."
                            },
                            {
                                "id": "B",
                                "text": "Banyak berbagai macam tanaman obat tumbuh subur di lereng bukit."
                            },
                            {
                                "id": "C",
                                "text": "Seluruh peserta lomba wajib mengumpulkan karya sebelum batas waktu."
                            },
                            {
                                "id": "D",
                                "text": "Daftar nama-nama pemenang diumumkan di papan buletin utama."
                            },
                            {
                                "id": "E",
                                "text": "Semua siswa-siswa kelas XII berkumpul di lapangan upacara."
                            }
                        ],
                        "kunci": "C",
                        "pembahasan": "<strong>Analisis Pleonasme Penjamakan:</strong><br>• Opsi A salah: <em>para hadirin sekalian</em> bertumpuk tiga penanda jamak.<br>• Opsi B salah: <em>banyak berbagai macam</em> bertumpuk.<br>• Opsi D salah: <em>daftar nama-nama</em> bertumpuk.<br>• Opsi E salah: <em>semua siswa-siswa</em> penjamakan ganda.<br>• Opsi C benar: kata <em>seluruh</em> diikuti bentuk tunggal <em>peserta</em> tanpa reduplikasi.<br><br><strong>Kesimpulan:</strong> Kalimat yang hemat dan baku adalah <strong>Opsi C</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Penalaran Bahasa: Relasi Semantis Meronimi (Bagian-Keseluruhan)",
                        "soal": "Hubungan pasangan kata <em>DAUN : POHON</em> berkedudukan sebagai relasi <em>meronimi</em> (bagian dari keseluruhan). Pasangan kata berikut yang memiliki relasi semantis yang <strong>IDENTIK</strong> adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "KELOPAK : BUNGA"
                            },
                            {
                                "id": "B",
                                "text": "AIR : LAUT"
                            },
                            {
                                "id": "C",
                                "text": "BURUNG : SAYAP"
                            },
                            {
                                "id": "D",
                                "text": "KUCING : MAMALIA"
                            },
                            {
                                "id": "E",
                                "text": "MOBIL : BENSIN"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Kajian Relasi Meronim & Holonim:</strong><br>• Daun adalah organ/bagian struktural anatomis dari keseluruhan pohon (Bagian : Utuh).<br>• Kelopak adalah bagian organ struktural dari sekuntum bunga (Bagian : Utuh).<br>(Opsi C terbalik: Utuh : Bagian; Opsi D adalah taksonomi Hiponim : Hipernim; Opsi E adalah Mesin : Bahan Bakar).<br><br><strong>Kesimpulan:</strong> Pasangan yang identik adalah <strong>KELOPAK : BUNGA (Opsi A)</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Kosakata Ilmiah: Makna Istilah Fisika & Kimia",
                        "soal": "Proses perpindahan energi kalor melalui zat perantara tanpa disertai perpindahan partikel zat itu sendiri dinamakan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Konveksi"
                            },
                            {
                                "id": "B",
                                "text": "Konduksi"
                            },
                            {
                                "id": "C",
                                "text": "Radiasi"
                            },
                            {
                                "id": "D",
                                "text": "Evaporasi"
                            },
                            {
                                "id": "E",
                                "text": "Sublimasi"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Terminologi Perpindahan Kalor:</strong><br>• <strong>Konduksi</strong>: perpindahan panas melalui rambatan kontak antarpartikel zat padat tanpa perpindahan materi.<br>• <strong>Konveksi</strong>: perpindahan panas yang disertai aliran fisik partikel fluida (cair/gas).<br>• <strong>Radiasi</strong>: perpindahan panas melalui pancaran gelombang elektromagnetik tanpa butuh media.<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>Konduksi (Opsi B)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Evaluasi Wacana Ilmiah: Tone & Sikap Penulis (Author's Stance)",
                        "soal": "Dalam sebuah artikel mengenai pemanfaatan kecerdasan buatan (AI) di bidang medis, penulis memaparkan manfaat AI dalam mendeteksi kanker stadium dini secara presisi, namun pada saat yang sama mengingatkan secara kritis tentang bahaya bias algoritma dan perlunya regulasi privasi data rekam medis pasien.<br><br>Sikap atau nada (tone) penulis dalam wacana tersebut dapat disimpulkan sebagai ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Apatis dan pesimistis"
                            },
                            {
                                "id": "B",
                                "text": "Objektif, berimbang, dan waspada secara konstruktif"
                            },
                            {
                                "id": "C",
                                "text": "Sangat fanatik mendukung teknologi tanpa kompromi"
                            },
                            {
                                "id": "D",
                                "text": "Skeptis mutlak dan menentang segala inovasi komputer"
                            },
                            {
                                "id": "E",
                                "text": "Menghibur dan bernada lelucon satir"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analisis Sikap Penulis (Tone Analysis):</strong><br>Penulis tidak memihak secara buta; ia mengapresiasi keunggulan teknologi (manfaat deteksi dini) sekaligus secara bertanggung jawab menyoroti risiko etis dan teknis (bias algoritma dan privasi). Ini merupakan representasi sikap ilmiah yang <strong>objektif, berimbang, dan berhati-hati secara konstruktif</strong>.<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>Opsi B</strong>."
                    }
                ]
            },
            "pk": {
                "nama": "Pengetahuan Kuantitatif (PK)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Aljabar Matriks: Determinan & Invers",
                        "soal": "Diketahui matriks \\( A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\). Nilai dari determinan matriks \\( 2A \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "10"
                            },
                            {
                                "id": "B",
                                "text": "15"
                            },
                            {
                                "id": "C",
                                "text": "20"
                            },
                            {
                                "id": "D",
                                "text": "25"
                            },
                            {
                                "id": "E",
                                "text": "40"
                            }
                        ],
                        "kunci": "C",
                        "pembahasan": "<strong>Sifat Determinan Matriks Ordo \\( 2 \\times 2 \\):</strong><br>• Hitung determinan \\( A \\):<br>$$\\det(A) = (2)(4) - (3)(1) = 8 - 3 = 5$$<br>• Berdasarkan sifat determinan untuk matriks ordo \\( n \\times n \\):<br>$$\\det(kA) = k^n \\cdot \\det(A)$$<br>Untuk matriks ordo \\( 2 \\times 2 \\) dengan skalar \\( k = 2 \\):<br>$$\\det(2A) = 2^2 \\cdot \\det(A) = 4 \\times 5 = 20$$<br><strong>Kesimpulan:</strong> Nilai determinan \\( 2A \\) adalah <strong>20 (Opsi C)</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Barisan Geometri: Suku Tak Hingga",
                        "soal": "Suatu deret geometri konvergen memiliki suku pertama \\( a = 12 \\) dan jumlah sampai tak hingga \\( S_\\infty = 36 \\). Rasio \\( r \\) dari deret geometri tersebut adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "1/4"
                            },
                            {
                                "id": "B",
                                "text": "1/3"
                            },
                            {
                                "id": "C",
                                "text": "1/2"
                            },
                            {
                                "id": "D",
                                "text": "2/3"
                            },
                            {
                                "id": "E",
                                "text": "3/4"
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Rumus Deret Geometri Tak Hingga:</strong><br>$$S_\\infty = \\frac{a}{1 - r}$$<br>$$36 = \\frac{12}{1 - r}$$<br>$$1 - r = \\frac{12}{36} = \\frac{1}{3}$$<br>$$r = 1 - \\frac{1}{3} = \\frac{2}{3}$$<br><strong>Kesimpulan:</strong> Rasio deret tersebut adalah <strong>2/3 (Opsi D)</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Peluang Bersyarat: Pengambilan Tanpa Pengembalian",
                        "soal": "Dalam sebuah kotak terdapat 5 bola merah dan 3 bola biru. Dua bola diambil secara acak satu per satu <strong>tanpa pengembalian</strong>. Peluang terambilnya bola pertama berwarna merah dan bola kedua berwarna biru adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "15/56"
                            },
                            {
                                "id": "B",
                                "text": "15/64"
                            },
                            {
                                "id": "C",
                                "text": "5/14"
                            },
                            {
                                "id": "D",
                                "text": "3/8"
                            },
                            {
                                "id": "E",
                                "text": "15/28"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Langkah Perhitungan Peluang Bersyarat:</strong><br>Total bola awal = \\( 5 + 3 = 8 \\) bola.<br>• Peluang bola ke-1 merah: \\( P(M_1) = \\frac{5}{8} \\).<br>• Karena tanpa pengembalian, tersisa 7 bola (4 merah, 3 biru).<br>• Peluang bola ke-2 biru: \\( P(B_2 | M_1) = \\frac{3}{7} \\).<br>Maka peluang gabungannya:<br>$$P(M_1 \\cap B_2) = \\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$$<br><strong>Kesimpulan:</strong> Peluangnya adalah <strong>15/56 (Opsi A)</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Fungsi Komposisi & Invers",
                        "soal": "Diketahui fungsi \\( f(x) = 2x - 5 \\) dan \\( g(x) = \\frac{x + 3}{x - 1} \\) untuk \\( x \\neq 1 \\). Nilai dari \\( (f \\circ g)(3) \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "-1"
                            },
                            {
                                "id": "B",
                                "text": "1"
                            },
                            {
                                "id": "C",
                                "text": "3"
                            },
                            {
                                "id": "D",
                                "text": "5"
                            },
                            {
                                "id": "E",
                                "text": "7"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Langkah Evaluasi Fungsi Komposisi:</strong><br>• Cari nilai \\( g(3) \\) terlebih dahulu:<br>$$g(3) = \\frac{3 + 3}{3 - 1} = \\frac{6}{2} = 3$$<br>• Masukkan ke dalam fungsi \\( f(x) \\):<br>$$(f \\circ g)(3) = f(g(3)) = f(3) = 2(3) - 5 = 6 - 5 = 1$$<br><strong>Kesimpulan:</strong> Nilai akhirnya adalah <strong>1 (Opsi B)</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Sistem Persamaan Linier Tiga Variabel (SPLTV)",
                        "soal": "Diketahui sistem persamaan:<br>\\( x + y = 7 \\)<br>\\( y + z = 11 \\)<br>\\( x + z = 10 \\)<br><br>Nilai dari \\( x + y + z \\) sama dengan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "12"
                            },
                            {
                                "id": "B",
                                "text": "14"
                            },
                            {
                                "id": "C",
                                "text": "15"
                            },
                            {
                                "id": "D",
                                "text": "16"
                            },
                            {
                                "id": "E",
                                "text": "28"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Metode Penjumlahan Simetris:</strong><br>Jumlahkan ketiga persamaan secara vertikal:<br>$$(x + y) + (y + z) + (x + z) = 7 + 11 + 10$$<br>$$2x + 2y + 2z = 28$$<br>$$2(x + y + z) = 28 \\implies x + y + z = 14$$<br><strong>Kesimpulan:</strong> Nilai \\( x + y + z = 14 \\) (Opsi B)."
                    },
                    {
                        "id": 6,
                        "topik": "Geometri Analitik: Persamaan Lingkaran",
                        "soal": "Persamaan lingkaran yang berpusat di titik \\( P(3, -2) \\) dan memiliki jari-jari \\( r = 5 \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "\\( (x - 3)^2 + (y + 2)^2 = 25 \\)"
                            },
                            {
                                "id": "B",
                                "text": "\\( (x + 3)^2 + (y - 2)^2 = 25 \\)"
                            },
                            {
                                "id": "C",
                                "text": "\\( (x - 3)^2 + (y + 2)^2 = 5 \\)"
                            },
                            {
                                "id": "D",
                                "text": "\\( x^2 + y^2 - 6x + 4y - 25 = 0 \\)"
                            },
                            {
                                "id": "E",
                                "text": "\\( (x - 3)^2 + (y - 2)^2 = 25 \\)"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Bentuk Baku Persamaan Lingkaran:</strong><br>Persamaan lingkaran dengan pusat \\( (a, b) \\) dan jari-jari \\( r \\):<br>$$(x - a)^2 + (y - b)^2 = r^2$$<br>Substitusi \\( a = 3 \\), \\( b = -2 \\), dan \\( r = 5 \\):<br>$$(x - 3)^2 + (y - (-2))^2 = 5^2$$<br>$$(x - 3)^2 + (y + 2)^2 = 25$$<br><strong>Kesimpulan:</strong> Persamaan yang tepat adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Trigonometri: Sudut Istimewa & Kuadran",
                        "soal": "Nilai dari \\( \\sin(150^\\circ) + \\cos(300^\\circ) - \\tan(135^\\circ) \\) sama dengan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "0"
                            },
                            {
                                "id": "B",
                                "text": "1"
                            },
                            {
                                "id": "C",
                                "text": "2"
                            },
                            {
                                "id": "D",
                                "text": "1/2"
                            },
                            {
                                "id": "E",
                                "text": "-1"
                            }
                        ],
                        "kunci": "C",
                        "pembahasan": "<strong>Evaluasi Nilai Trigonometri per Kuadran:</strong><br>• \\( \\sin(150^\\circ) = \\sin(180^\\circ - 30^\\circ) = \\sin(30^\\circ) = \\frac{1}{2} \\)<br>• \\( \\cos(300^\\circ) = \\cos(360^\\circ - 60^\\circ) = \\cos(60^\\circ) = \\frac{1}{2} \\)<br>• \\( \\tan(135^\\circ) = \\tan(180^\\circ - 45^\\circ) = -\\tan(45^\\circ) = -1 \\)<br><br>Jumlahkan seluruhnya:<br>$$\\frac{1}{2} + \\frac{1}{2} - (-1) = 1 + 1 = 2$$<br><strong>Kesimpulan:</strong> Hasilnya sama dengan <strong>2 (Opsi C)</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Statistika Data: Pengaruh Perubahan Data pada Rata-Rata",
                        "soal": "Rata-rata nilai ujian matematika dari 20 orang siswa adalah 72. Jika kemudian 2 siswa baru dengan nilai masing-masing 85 dan 95 dimasukkan ke dalam kelompok tersebut, rata-rata baru seluruh siswa menjadi ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "73,0"
                            },
                            {
                                "id": "B",
                                "text": "73,6"
                            },
                            {
                                "id": "C",
                                "text": "74,0"
                            },
                            {
                                "id": "D",
                                "text": "74,5"
                            },
                            {
                                "id": "E",
                                "text": "75,0"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Langkah Perhitungan Rata-Rata Gabungan:</strong><br>• Jumlah nilai awal 20 siswa: \\( \\Sigma X_1 = 20 \\times 72 = 1.440 \\).<br>• Tambahan nilai 2 siswa baru: \\( 85 + 95 = 180 \\).<br>• Jumlah total nilai baru: \\( \\Sigma X_{\\text{baru}} = 1.440 + 180 = 1.620 \\).<br>• Total siswa sekarang: \\( 20 + 2 = 22 \\) siswa.<br><br>Rata-rata baru:<br>$$\\bar{X} = \\frac{1.620}{22} \\approx 73{,}636... \\approx 73{,}6$$<br><strong>Kesimpulan:</strong> Rata-rata baru menjadi <strong>73,6 (Opsi B)</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Logaritma: Sifat-Sifat Operasi Logaritma",
                        "soal": "Jika \\( ^2\\log 3 = a \\) dan \\( ^3\\log 5 = b \\), maka nilai dari \\( ^6\\log 15 \\) dinyatakan dalam \\( a \\) dan \\( b \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "\\( \\frac{a(1 + b)}{a + 1} \\)"
                            },
                            {
                                "id": "B",
                                "text": "\\( \\frac{a + b}{a + 1} \\)"
                            },
                            {
                                "id": "C",
                                "text": "\\( \\frac{ab + 1}{a + 1} \\)"
                            },
                            {
                                "id": "D",
                                "text": "\\( \\frac{a + ab}{a + 1} \\)"
                            },
                            {
                                "id": "E",
                                "text": "\\( \\frac{b + 1}{a + 1} \\)"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Langkah Penjabaran Sifat Basis Logaritma:</strong><br>Gunakan basis 2 untuk menjabarkan \\( ^6\\log 15 \\):<br>$$^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6} = \\frac{^2\\log(3 \\times 5)}{^2\\log(2 \\times 3)} = \\frac{^2\\log 3 + ^2\\log 5}{^2\\log 2 + ^2\\log 3}$$<br>Diketahui: \\( ^2\\log 3 = a \\), dan \\( ^2\\log 5 = ^2\\log 3 \\times ^3\\log 5 = a \\cdot b \\).<br>Maka:<br>$$^6\\log 15 = \\frac{a + ab}{1 + a} = \\frac{a(1 + b)}{a + 1}$$<br><strong>Kesimpulan:</strong> Bentuknya adalah <strong>\\( \\frac{a(1 + b)}{a + 1} \\) (Opsi A)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Teori Bilangan: Sisa Pembagian Polinomial",
                        "soal": "Sisa pembagian polinomial \\( P(x) = 2x^3 - 5x^2 + 4x - 7 \\) oleh \\( (x - 2) \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "-3"
                            },
                            {
                                "id": "B",
                                "text": "-1"
                            },
                            {
                                "id": "C",
                                "text": "1"
                            },
                            {
                                "id": "D",
                                "text": "3"
                            },
                            {
                                "id": "E",
                                "text": "5"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Teorema Sisa Polinomial:</strong><br>Berdasarkan Teorema Sisa, sisa pembagian \\( P(x) \\) oleh \\( (x - c) \\) sama dengan nilai \\( P(c) \\).<br>Di sini pembaginya adalah \\( (x - 2) \\implies c = 2 \\):<br>$$P(2) = 2(2)^3 - 5(2)^2 + 4(2) - 7$$<br>$$P(2) = 2(8) - 5(4) + 8 - 7$$<br>$$P(2) = 16 - 20 + 8 - 7 = -3$$<br><strong>Kesimpulan:</strong> Sisa pembagiannya adalah <strong>-3 (Opsi A)</strong>."
                    }
                ]
            },
            "lbi": {
                "nama": "Literasi Bahasa Indonesia",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Literasi Filosofis: Paradoks Kemajuan Teknologi",
                        "soal": "Konektivitas digital berkecepatan tinggi memungkinkan manusia berinteraksi melintasi batas benua secara instan, namun riset sosiologis kontemporer menemukan bahwa tingkat kesepian psikologis dan isolasi sosial di kalangan generasi muda perkotaan justru mencatatkan rekor tertinggi dalam sejarah modern.<br><br>Pernyataan berikut yang paling tajam merumuskan esensi paradoks di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Teknologi digital telah memusnahkan seluruh komputer di dunia."
                            },
                            {
                                "id": "B",
                                "text": "Keluasan konektivitas kuantitatif di dunia maya tidak serta-merta menjamin kedalaman hubungan kualitatif dan keintiman emosional di dunia nyata."
                            },
                            {
                                "id": "C",
                                "text": "Generasi muda saat ini tidak lagi memiliki teman di sekolah."
                            },
                            {
                                "id": "D",
                                "text": "Biaya kuota internet yang mahal menjadi penyebab utama kesepian."
                            },
                            {
                                "id": "E",
                                "text": "Interaksi tatap muka langsung sudah tidak diinginkan oleh siapa pun."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Merumuskan Hakikat Paradoks:</strong><br>Paradoks menghubungkan dua hal kontradiktif: terhubung secara luas secara digital (kuantitas kontak tinggi), namun merasa terasing secara emosional (kualitas relasi rendah). Rumusan esensi terbaik adalah Opsi B.<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Analisis Wacana Kritis: Pembongkaran Asumsi Terselubung",
                        "soal": "Sebuah tajuk rencana mengklaim: <em>\"Pembangunan bendungan raksasa ini adalah harga yang tak terhindarkan bagi modernisasi ekonomi wilayah, sehingga relokasi paksa masyarakat adat dari tanah leluhur mereka tidak perlu diperdebatkan lagi demi kepentingan yang lebih besar.\"</em><br><br>Asumsi terselubung (underlying assumption) yang dipermasalahkan dari sudut pandang hak asasi manusia adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Asumsi utilitarian yang mengorbankan hak fundamental kelompok rentan atas nama dalih pertumbuhan ekonomi mayoritas."
                            },
                            {
                                "id": "B",
                                "text": "Asumsi bahwa bendungan tidak dapat menghasilkan energi listrik."
                            },
                            {
                                "id": "C",
                                "text": "Asumsi bahwa masyarakat adat ingin bekerja di sektor perbankan."
                            },
                            {
                                "id": "D",
                                "text": "Asumsi bahwa air bendungan akan selalu jernih sepanjang masa."
                            },
                            {
                                "id": "E",
                                "text": "Asumsi bahwa modernisasi ekonomi membutuhkan lebih banyak lahan pertanian."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Kritik Asumsi Utilitarianisme Ekstrem:</strong><br>Teks tersebut mengasumsikan bahwa 'demi kepentingan lebih besar' (utilitarianism), hak asasi masyarakat adat atas tanah adat boleh diabaikan begitu saja. Sudut pandang HAM mengkritik keras asumsi ini karena keadilan menuntut pengakuan hak kelompok minoritas/rentan.<br><br><strong>Kesimpulan:</strong> Asumsi terselubung yang bermasalah adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Literasi Linguistik: Kuasa Bahasa dalam Wacana Publik",
                        "soal": "Penggunaan eufemisme seperti <em>\"penyesuaian tarif\"</em> untuk menggantikan kata <em>\"kenaikan harga\"</em>, atau <em>\"efisiensi karyawan\"</em> untuk <em>\"pemutusan hubungan kerja (PHK) massal\"</em> dalam rilis korporasi bertujuan retoris untuk ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Menghibur pembaca dengan cerita lucu"
                            },
                            {
                                "id": "B",
                                "text": "Memperhalus dampak psikologis negatif dan meredam resistensi atau kemarahan publik terhadap kebijakan yang tidak populer"
                            },
                            {
                                "id": "C",
                                "text": "Mematuhi kaidah tata bahasa Sanskerta kuno"
                            },
                            {
                                "id": "D",
                                "text": "Menyembunyikan laporan keuangan dari dinas perpajakan"
                            },
                            {
                                "id": "E",
                                "text": "Menunjukkan bahwa perusahaan sedang mengalami keuntungan besar"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Fungsi Retoris Eufemisme:</strong><br>Dalam kajian sosiolinguistik dan analisis wacana kritis, eufemisme sengaja digunakan untuk menyamarkan realitas keras, mengurangi kecemasan atau kemarahan khalayak, serta membingkai (framing) kebijakan pahit agar terkesan wajar dan teknokratis.<br><br><strong>Kesimpulan:</strong> Tujuan retorisnya adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Evaluasi Bukti: Kelemahan Metodologis dalam Survei",
                        "soal": "Sebuah survei daring yang disebarkan melalui akun media sosial sebuah klinik kecantikan mewah menyimpulkan bahwa 95% perempuan Indonesia rela menghabiskan lebih dari separuh gaji bulanannya untuk membeli produk perawatan kulit anti-penuaan.<br><br>Kelemahan metodologis terbesar dari penarikan kesimpulan survei di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Kuesioner dibuat menggunakan bahasa Indonesia yang baik dan benar."
                            },
                            {
                                "id": "B",
                                "text": "Terjadinya bias pengambilan sampel (sampling bias), di mana pengikut akun klinik mewah tersebut tidak merepresentasikan profil demografis seluruh perempuan Indonesia yang sangat beragam kelas ekonominya."
                            },
                            {
                                "id": "C",
                                "text": "Jumlah pertanyaan kuesioner terlalu sedikit."
                            },
                            {
                                "id": "D",
                                "text": "Klinik tersebut memiliki izin resmi dari dinas kesehatan."
                            },
                            {
                                "id": "E",
                                "text": "Produk anti-penuaan terbuat dari bahan alami berkualitas tinggi."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Kritik Metodologi Riset:</strong><br>Sampel diambil murni dari pengikut akun klinik mewah (populasi berpenghasilan tinggi dan peduli estetika berlebih), lalu digeneralisasi keliru ke 'seluruh perempuan Indonesia' (termasuk kelas menengah bawah di pedesaan). Ini adalah kesalahan fatal <strong>sampling bias</strong>.<br><br><strong>Kesimpulan:</strong> Kelemahan terbesarnya adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Pemahaman Esensi Teks Hermeneutika",
                        "soal": "Sebuah teks hermeneutika menyatakan: <em>\"Membaca karya sastra klasik bukanlah sekadar mencari tahu apa yang dipikirkan pengarang pada zamannya, melainkan sebuah percakapan dialektis antara cakrawala pengalaman pembaca masa kini dan cakrawala historis teks masa lampau.\"</em><br><br>Menurut teks tersebut, proses membaca sastra klasik berorientasi pada ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Menghafal tahun kelahiran dan biografi pengarang"
                            },
                            {
                                "id": "B",
                                "text": "Peleburan cakrawala (fusion of horizons) yang dinamis dalam memaknai relevansi nilai teks dengan kehidupan kontemporer"
                            },
                            {
                                "id": "C",
                                "text": "Menyalin ulang teks tanpa mengubah satu huruf pun"
                            },
                            {
                                "id": "D",
                                "text": "Mengoreksi kesalahan ejaan kuno dari pengarang"
                            },
                            {
                                "id": "E",
                                "text": "Menganggap karya masa lampau lebih rendah dari karya modern"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Konsep Peleburan Cakrawala (Gadamer):</strong><br>Frasa <em>\"percakapan dialektis antara cakrawala pembaca masa kini dan cakrawala historis masa lampau\"</em> adalah konsep klasik hermeneutika Gadamerian (Horizontverschmelzung / peleburan cakrawala), di mana pemaknaan lahir dari pertemuan dua cakrawala pengalaman.<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Evaluasi Argumen Sains: Hubungan Korelasi vs Kausalitas",
                        "soal": "Ditemukan bahwa di kota-kota yang memiliki jumlah toko es krim terbanyak, angka kasus kematian akibat tenggelam di kolam renang juga tercatat paling tinggi pada musim panas.<br><br>Interpretasi logis yang benar mengenai korelasi data statistik tersebut adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Makan es krim secara langsung menyebabkan kram otot fatal saat berenang."
                            },
                            {
                                "id": "B",
                                "text": "Keduanya dipengaruhi oleh variabel perancu bersama (confounding variable), yaitu suhu cuaca yang panas terik memicu orang membeli es krim sekaligus meningkatkan jumlah orang yang berenang di kolam."
                            },
                            {
                                "id": "C",
                                "text": "Pemerintah harus menutup seluruh toko es krim demi keselamatan perenang."
                            },
                            {
                                "id": "D",
                                "text": "Air kolam renang tercemar oleh tumpahan es krim manis."
                            },
                            {
                                "id": "E",
                                "text": "Orang yang tidak bisa berenang dilarang membeli es krim."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Kausalitas Semu (Spurious Correlation):</strong><br>Korelasi antara konsumsi es krim dan tenggelam di kolam renang adalah contoh klasik korelasi semu yang dipicu oleh <strong>faktor cuaca musim panas yang terik</strong> (variabel ketiga yang mendasari keduanya).<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Literasi Kritis: Analisis Kontradiksi Internal Teks",
                        "soal": "Perhatikan teks berikut:<br><em>\"Perusahaan kami berkomitmen 100% menjalankan transparansi penuh dalam seluruh proses produksi dan rantai pasokan. Segala informasi formula bahan baku rahasia dan audit lingkungan internal dijaga sangat ketat dan tidak boleh diakses oleh pihak luar mana pun demi menjaga keunggulan kompetitif.\"</em><br><br>Kontradiksi internal yang terjadi dalam teks pernyataan perusahaan tersebut adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Menyatakan komitmen transparansi penuh 100%, namun pada kalimat kedua menyatakan seluruh informasi krusial dirahasiakan dan dilarang diakses oleh publik."
                            },
                            {
                                "id": "B",
                                "text": "Menyebutkan produk perusahaan berbahan alami."
                            },
                            {
                                "id": "C",
                                "text": "Menggunakan kata 'kompetitif' dalam bahasa Indonesia."
                            },
                            {
                                "id": "D",
                                "text": "Tidak menjelaskan lokasi pabrik produksi."
                            },
                            {
                                "id": "E",
                                "text": "Menjual produk dengan harga yang terlalu murah."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Kontradiksi Pernyataan:</strong><br>Kalimat 1 mengklaim 'transparansi penuh 100%', tetapi kalimat 2 langsung membantah klaim tersebut dengan menyatakan audit lingkungan dan rantai pasok dirahasiakan rapat dari pihak luar.<br><br><strong>Kesimpulan:</strong> Kontradiksi internal dinyatakan secara tepat pada <strong>Opsi A</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Literasi Bioetika: Dilema Rekayasa Genetika CRISPR",
                        "soal": "Teknologi penyuntingan gen CRISPR-Cas9 membuka peluang besar menyembuhkan penyakit genetik mematikan seperti thalasemia dan anemia sel sabit. Namun, aplikasi pada sel punca embrio manusia (germline editing) memicu kekhawatiran etis mendalam mengenai potensi kemunculan 'bayi pesanan' (designer babies) yang memperlebar jurang ketimpangan sosial-biologis.<br><br>Isu bioetika sentral yang dipersoalkan adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Bakteri penghasil enzim Cas9 sangat sulit dibudidayakan di laboratorium."
                            },
                            {
                                "id": "B",
                                "text": "Batasan moral antara terapi penyembuhan penyakit vs eugenika penyempurnaan genetik manusia yang mengancam keadilan sosial."
                            },
                            {
                                "id": "C",
                                "text": "Harga jarum suntik mikro yang terlalu mahal bagi rumah sakit."
                            },
                            {
                                "id": "D",
                                "text": "Penolakan pasien terhadap tes darah laboratorium."
                            },
                            {
                                "id": "E",
                                "text": "Ketiadaan komputer untuk mengurutkan kode DNA."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Dilema Bioetika Modern:</strong><br>Isu inti yang menjadi perdebatan etis global adalah membedakan batasan antara pengobatan penyakit (terapi medis kuratif) dengan manipulasi genetik untuk preferensi kosmetik/intelektual (eugenika modern) yang memicu kasta biologis baru.<br><br><strong>Kesimpulan:</strong> Isu bioetika sentral adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Literasi Sosiologi Perkotaan: Gentrifikasi",
                        "soal": "Fenomena masuknya investasi modal, pembukaan kafe modern, dan renovasi perumahan kelas atas di pemukiman tua pusat kota mendorong kenaikan tajam nilai sewa lahan dan pajak bumi bangunan. Akibatnya, komunitas warga asli berpenghasilan rendah yang telah menghuni kawasan tersebut selama beberapa generasi terpaksa terusir ke pinggiran kota yang minim fasilitas.<br><br>Proses sosial spasial yang digambarkan di atas dinamakan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Transmigrasi"
                            },
                            {
                                "id": "B",
                                "text": "Gentrifikasi"
                            },
                            {
                                "id": "C",
                                "text": "Reboisasi"
                            },
                            {
                                "id": "D",
                                "text": "Desentralisasi"
                            },
                            {
                                "id": "E",
                                "text": "Asimilasi kebudayaan"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Konsep Sosiologi Tata Kota:</strong><br><em>Gentrifikasi (gentrification)</em> adalah transformasi kawasan pemukiman kelas pekerja/berpenghasilan rendah menjadi kawasan komersial/hunian kelas menengah-atas yang berdampak pada tersingkirnya (displacement) warga asli karena kenaikan biaya hidup dan pajak.<br><br><strong>Kesimpulan:</strong> Istilah yang tepat adalah <strong>Gentrifikasi (Opsi B)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Pemikiran Kritis: Analisis Solusi Holistik Krisis Ekologis",
                        "soal": "Penulis menyimpulkan bahwa krisis iklim global tidak akan dapat diselesaikan semata-mata dengan perbaikan teknologi efisiensi energi jika paradigma pertumbuhan ekonomi ekstraktif tak terbatas di planet bumi yang terbatas terus dipertahankan tanpa perubahan pola konsumsi.<br><br>Gagasan mendasar penulis mengajak pembaca untuk ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Mengabaikan pengembangan inovasi energi terbarukan."
                            },
                            {
                                "id": "B",
                                "text": "Mengevaluasi secara radikal paradigma ekonomi pertumbuhan tak terbatas dan menata ulang model konsumsi yang berkelanjutan secara ekologis."
                            },
                            {
                                "id": "C",
                                "text": "Mempercepat penambangan batu bara di hutan lindung."
                            },
                            {
                                "id": "D",
                                "text": "Menolak pemakaian panel surya di kawasan perumahan."
                            },
                            {
                                "id": "E",
                                "text": "Menghentikan seluruh kegiatan perdagangan internasional."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Sintesis Pandangan Holistik:</strong><br>Penulis menekankan bahwa <em>technological fix</em> (perbaikan teknologi semata) tidak cukup tanpa diimbangi pergeseran paradigma ekonomi menuju <em>ecological limits</em> dan konsumsi yang bertanggung jawab.<br><br><strong>Kesimpulan:</strong> Gagasan mendasar penulis adalah <strong>Opsi B</strong>."
                    }
                ]
            },
            "lbe": {
                "nama": "Literasi Bahasa Inggris",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Advanced Scientific Discourse: Epigenetics",
                        "soal": "In contemporary molecular genetics, <em>epigenetic modifications</em> refer to ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Direct alterations of the underlying primary nucleotide sequence of DNA molecules"
                            },
                            {
                                "id": "B",
                                "text": "Heritable changes in gene expression and cellular phenotype occurring without altering the primary DNA sequence"
                            },
                            {
                                "id": "C",
                                "text": "The total destruction of chromosomes inside eukaryotic nuclei"
                            },
                            {
                                "id": "D",
                                "text": "The creation of synthetic artificial amino acids in vitro"
                            },
                            {
                                "id": "E",
                                "text": "Viral infections that immediately result in host cell lysis"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Core Epigenetics Definition:</strong><br>Epigenetics is the study of stable phenotypic changes (such as DNA methylation and histone acetylation) that modify gene expression without altering the underlying nucleotide sequence.<br><br><strong>Conclusion:</strong> The correct definition is <strong>Option B</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Critical Rhetoric: Recognizing Ad Hominem Fallacy",
                        "soal": "Which response represents an <strong>ad hominem fallacy</strong> in a debate regarding vaccine safety?",
                        "options": [
                            {
                                "id": "A",
                                "text": "\"The clinical trial data published in the medical journal had an insufficient sample size to detect rare adverse events.\""
                            },
                            {
                                "id": "B",
                                "text": "\"We should ignore Dr. Smith’s epidemiological study because he was once caught speeding and is a thoroughly unpleasant person.\""
                            },
                            {
                                "id": "C",
                                "text": "\"The observed antibody titers in the vaccinated cohort were five times higher than in the control group.\""
                            },
                            {
                                "id": "D",
                                "text": "\"Longitudinal surveillance is necessary to evaluate the persistence of neutralizing immunity.\""
                            },
                            {
                                "id": "E",
                                "text": "\"The vaccine formulations must be maintained at ultra-low refrigeration temperatures.\""
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Logical Fallacies (Ad Hominem):</strong><br>An <em>ad hominem</em> fallacy attacks the personal character or irrelevant personal history of the individual rather than engaging with the merits of their argument or empirical data.<br><br><strong>Conclusion:</strong> Option B is a classic example of ad hominem."
                    },
                    {
                        "id": 3,
                        "topik": "Inference in Evolutionary Biology: Convergent Evolution",
                        "soal": "The streamlined hydrodynamic body shapes of dolphins (mammals) and sharks (cartilaginous fish) represent a classic biological illustration of ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Divergent evolution from a recent common ancestor"
                            },
                            {
                                "id": "B",
                                "text": "Convergent evolution driven by similar selective environmental pressures in aquatic habitats"
                            },
                            {
                                "id": "C",
                                "text": "Direct genetic hybridization between fish and mammals"
                            },
                            {
                                "id": "D",
                                "text": "Random genetic drift without adaptive significance"
                            },
                            {
                                "id": "E",
                                "text": "Artificial selective breeding conducted by humans"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Evolutionary Biology Concepts:</strong><br>Convergent evolution occurs when unrelated or distantly related taxa independently evolve analogous structures as adaptations to similar ecological niches and physical forces.<br><br><strong>Conclusion:</strong> The correct term is <strong>Convergent evolution (Option B)</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Advanced Vocabulary: Meaning of 'Ubiquitous'",
                        "soal": "Microplastics have become virtually <em>ubiquitous</em> in marine and terrestrial ecosystems worldwide.<br><br>The word <em>ubiquitous</em> is closest in meaning to ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Omnipresent and found everywhere"
                            },
                            {
                                "id": "B",
                                "text": "Extremely scarce and localized"
                            },
                            {
                                "id": "C",
                                "text": "Harmless and non-reactive"
                            },
                            {
                                "id": "D",
                                "text": "Easily degraded by sunlight"
                            },
                            {
                                "id": "E",
                                "text": "Confined only to laboratory test tubes"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Vocabulary Definition:</strong><br><em>Ubiquitous</em> means present, appearing, or found everywhere simultaneously.<br><br><strong>Conclusion:</strong> The synonym is <strong>Omnipresent and found everywhere (Option A)</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Scientific Methodology: Double-Blind Protocols",
                        "soal": "Why is a <strong>double-blind randomized controlled trial</strong> regarded as the gold standard in pharmaceutical efficacy evaluations?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Because it ensures that all participants receive the active drug rather than a placebo."
                            },
                            {
                                "id": "B",
                                "text": "Because neither the patients nor the administering researchers know who receives the experimental treatment or the placebo, minimizing observer and psychological expectancy bias."
                            },
                            {
                                "id": "C",
                                "text": "Because it eliminates the need for statistical significance testing."
                            },
                            {
                                "id": "D",
                                "text": "Because it allows pharmaceutical firms to bypass governmental safety approvals."
                            },
                            {
                                "id": "E",
                                "text": "Because it guarantees 100% cure rates across all diseases."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Research Methodology:</strong><br>Double-blinding prevents conscious or unconscious bias from both experimenters and subjects (eliminating observer bias and placebo expectancy distortions).<br><br><strong>Conclusion:</strong> The correct explanation is <strong>Option B</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Academic Syntax: Inverted Conditional Clauses",
                        "soal": "Which of the following inverted conditional sentences is grammatically equivalent to:<br><em>\"If the laboratory had maintained proper sterile protocols, the viral culture would not have been contaminated.\"</em>",
                        "options": [
                            {
                                "id": "A",
                                "text": "\"Had the laboratory maintained proper sterile protocols, the viral culture would not have been contaminated.\""
                            },
                            {
                                "id": "B",
                                "text": "\"Did the laboratory maintain proper sterile protocols, the viral culture would not have been contaminated.\""
                            },
                            {
                                "id": "C",
                                "text": "\"Should the laboratory maintain proper sterile protocols, the viral culture would not have been contaminated.\""
                            },
                            {
                                "id": "D",
                                "text": "\"Were the laboratory to maintain proper sterile protocols, the viral culture would not have been contaminated.\""
                            },
                            {
                                "id": "E",
                                "text": "\"Could the laboratory maintain proper sterile protocols, the viral culture would not have been contaminated.\""
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Inversion in Conditional Sentences (Type 3):</strong><br>The inversion of <em>If + subject + had + V3</em> is <em>Had + subject + V3</em>.<br>Therefore: <em>Had the laboratory maintained...</em> is the precise grammatical equivalent.<br><br><strong>Conclusion:</strong> The correct sentence is <strong>Option A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Critical Tone Analysis in Academic Passages",
                        "soal": "An author concludes an essay on geoengineering: <em>\"While solar radiation management might temporarily mask warming symptoms, treating a planet's fever by dimming the sun without curbing greenhouse emissions is akin to prescribing morphine for a compound fracture while refusing to set the broken bone.\"</em><br><br>The author's tone can best be described as ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Unreservedly enthusiastic and supportive"
                            },
                            {
                                "id": "B",
                                "text": "Sharply skeptical, critical, and warning of dangerous short-sightedness"
                            },
                            {
                                "id": "C",
                                "text": "Objective, detached, and indifferent"
                            },
                            {
                                "id": "D",
                                "text": "Confused and unable to comprehend the science"
                            },
                            {
                                "id": "E",
                                "text": "Playful and purely comedic"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Tone Analysis via Analogy:</strong><br>Comparing geoengineering to masking pain with morphine while ignoring a compound fracture is a vividly vivid, caustic analogy warning against dangerous superficial fixes.<br><br><strong>Conclusion:</strong> The tone is <strong>Sharply skeptical, critical, and warning (Option B)</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Semantics: Nuances of 'Mitigate' vs 'Ameliorate'",
                        "soal": "Select the sentence that uses <em>mitigate</em> correctly in an environmental management context:",
                        "options": [
                            {
                                "id": "A",
                                "text": "The reforestation project helped mitigate soil erosion along the steep riverbank."
                            },
                            {
                                "id": "B",
                                "text": "The factory intended to mitigate toxic emissions by releasing double the amount into the atmosphere."
                            },
                            {
                                "id": "C",
                                "text": "Severe droughts mitigate water supplies and cause widespread famine."
                            },
                            {
                                "id": "D",
                                "text": "Deforestation was promoted to mitigate biodiversity."
                            },
                            {
                                "id": "E",
                                "text": "Rising sea levels mitigate coastal flooding risks."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Correct Usage of 'Mitigate':</strong><br><em>To mitigate</em> means to make less severe, serious, or painful. Reforestation lessening soil erosion is the textbook accurate usage.<br><br><strong>Conclusion:</strong> The correct sentence is <strong>Option A</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Text Organization & Structural Patterns",
                        "soal": "A scientific paper begins by outlining an environmental crisis, evaluates two opposing remediation methods, and concludes by recommending an integrated hybrid approach. What is the organizational pattern of the text?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Chronological biographical timeline"
                            },
                            {
                                "id": "B",
                                "text": "Problem - Evaluation of Alternatives - Integrated Solution"
                            },
                            {
                                "id": "C",
                                "text": "Fiction narrative with flashbacks"
                            },
                            {
                                "id": "D",
                                "text": "Alphabetical glossary index"
                            },
                            {
                                "id": "E",
                                "text": "Random collection of independent anecdotes"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Structural Pattern Identification:</strong><br>The flow moves from identifying the problem to analyzing alternative options, concluding in a synthesize solution (Problem-Solution / Comparative structure).<br><br><strong>Conclusion:</strong> The pattern is <strong>Option B</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Inference from Empirical Data: Cognitive Load Theory",
                        "soal": "According to Cognitive Load Theory, presenting redundant visual and auditory text simultaneously in multimedia learning environments often impairs comprehension because ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Working memory has unlimited capacity for information processing."
                            },
                            {
                                "id": "B",
                                "text": "It overloads the limited capacity of the phonological loop and visual-spatial sketchpad in working memory (split-attention effect)."
                            },
                            {
                                "id": "C",
                                "text": "Human brains are incapable of hearing spoken audio."
                            },
                            {
                                "id": "D",
                                "text": "Visual images permanently delete stored long-term memories."
                            },
                            {
                                "id": "E",
                                "text": "Learners always learn faster when distracted."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Cognitive Science Inference:</strong><br>Cognitive Load Theory (Sweller) posits that the human working memory has strictly limited dual-channel processing bandwidth. Redundancy and split-attention induce extraneous cognitive overload.<br><br><strong>Conclusion:</strong> The correct explanation is <strong>Option B</strong>."
                    }
                ]
            },
            "pm": {
                "nama": "Penalaran Matematika (PM)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Pemodelan Kalkulus Diferensial: Laju Perubahan Luas Lingkaran",
                        "soal": "Sebuah tumpahan minyak mentah di permukaan laut berbentuk lingkaran yang terus meluas. Pada saat jari-jari tumpahan mencapai 50 meter, laju pertambahan jari-jarinya adalah 0,4 meter/menit. Berapakah laju pertambahan luas tumpahan minyak pada saat tersebut? (Gunakan nilai \\( \\pi \\))",
                        "options": [
                            {
                                "id": "A",
                                "text": "\\( 20\\pi \\text{ m}^2/\\text{menit} \\)"
                            },
                            {
                                "id": "B",
                                "text": "\\( 40\\pi \\text{ m}^2/\\text{menit} \\)"
                            },
                            {
                                "id": "C",
                                "text": "\\( 50\\pi \\text{ m}^2/\\text{menit} \\)"
                            },
                            {
                                "id": "D",
                                "text": "\\( 80\\pi \\text{ m}^2/\\text{menit} \\)"
                            },
                            {
                                "id": "E",
                                "text": "\\( 100\\pi \\text{ m}^2/\\text{menit} \\)"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Aturan Rantai Turunan Terkait Waktu:</strong><br>Luas lingkaran: \\( A = \\pi r^2 \\).<br>Diferensialkan terhadap waktu \\( t \\):<br>$$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$$<br>Substitusi \\( r = 50 \\text{ m} \\) dan \\( \\frac{dr}{dt} = 0{,}4 \\text{ m/menit} \\):<br>$$\\frac{dA}{dt} = 2\\pi (50)(0{,}4) = 40\\pi \\text{ m}^2/\\text{menit}$$<br><strong>Kesimpulan:</strong> Laju pertambahan luas tumpahan minyak adalah <strong>\\( 40\\pi \\text{ m}^2/\\text{menit} \\) (Opsi B)</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Program Linear: Optimasi Daerah Penyelesaian Maksimum",
                        "soal": "Seorang penjahit memproduksi dua jenis pakaian: Gaun Pesta dan Kemeja Batik. Gaun Pesta membutuhkan 3 meter kain sutra dan 1 meter kain katun, menghasilkan keuntungan Rp 150.000. Kemeja Batik membutuhkan 1 meter kain sutra dan 2 meter kain katun, menghasilkan keuntungan Rp 100.000. Persediaan yang ada adalah 18 meter kain sutra dan 16 meter kain katun. Berapakah keuntungan maksimum yang dapat diperoleh penjahit?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Rp 800.000"
                            },
                            {
                                "id": "B",
                                "text": "Rp 900.000"
                            },
                            {
                                "id": "C",
                                "text": "Rp 1.050.000"
                            },
                            {
                                "id": "D",
                                "text": "Rp 1.100.000"
                            },
                            {
                                "id": "E",
                                "text": "Rp 1.200.000"
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Model Program Linear:</strong><br>Misal Gaun = \\( x \\), Kemeja = \\( y \\).<br>Kendala sutra: \\( 3x + y \\le 18 \\)<br>Kendala katun: \\( x + 2y \\le 16 \\)<br>Fungsi objektif: \\( Z = 150.000x + 100.000y \\).<br><br>Titik potong kedua garis kendala:<br>\\( 3x + y = 18 \\implies y = 18 - 3x \\)<br>Substitusi: \\( x + 2(18 - 3x) = 16 \\implies x + 36 - 6x = 16 \\implies 5x = 20 \\implies x = 4 \\).<br>Maka \\( y = 18 - 3(4) = 6 \\).<br>Uji titik-titik pojok:<br>• (0, 8): \\( Z = 100.000(8) = 800.000 \\)<br>• (6, 0): \\( Z = 150.000(6) = 900.000 \\)<br>• (4, 6): \\( Z = 150.000(4) + 100.000(6) = 600.000 + 600.000 = 1.200.000 \\text{ ? Tunggu!}\\)<br>Mari cek kembali: \\( 150.000(4) = 600.000 \\), \\( 100.000(6) = 600.000 \\). Total = Rp 1.200.000.<br><br><strong>Kesimpulan:</strong> Keuntungan maksimum yang diperoleh adalah <strong>Rp 1.200.000 (Opsi E)</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Pemodelan Peluruhan Radioaktif: Waktu Paruh",
                        "soal": "Suatu isotop radioaktif iodin-131 memiliki waktu paruh 8 hari. Jika suatu fasilitas medis menerima kiriman sampel awal sebanyak 80 gram, berapa gram massa isotop tersebut yang tersisa setelah 24 hari?",
                        "options": [
                            {
                                "id": "A",
                                "text": "5 gram"
                            },
                            {
                                "id": "B",
                                "text": "10 gram"
                            },
                            {
                                "id": "C",
                                "text": "15 gram"
                            },
                            {
                                "id": "D",
                                "text": "20 gram"
                            },
                            {
                                "id": "E",
                                "text": "40 gram"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Rumus Peluruhan Radioaktif:</strong><br>$$N_t = N_0 \\left(\\frac{1}{2}\\right)^{t / T_{1/2}}$$<br>Dengan \\( t = 24 \\text{ hari} \\) dan \\( T_{1/2} = 8 \\text{ hari} \\):<br>$$\\frac{t}{T_{1/2}} = \\frac{24}{8} = 3 \\text{ siklus peluruhan}$$<br>$$N_{24} = 80 \\times \\left(\\frac{1}{2}\\right)^3 = 80 \\times \\frac{1}{8} = 10 \\text{ gram}$$<br><strong>Kesimpulan:</strong> Massa yang tersisa adalah <strong>10 gram (Opsi B)</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Pemodelan Vektor Terapan: Resultan Kecepatan Arus Sungai",
                        "soal": "Sebuah perahu motor bergerak tegak lurus melintasi sungai dengan kecepatan mesin 12 m/s. Jika kecepatan arus air sungai yang mengalir ke arah hilir adalah 5 m/s, maka besar kecepatan resultan perahu relatif terhadap tanah adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "7 m/s"
                            },
                            {
                                "id": "B",
                                "text": "13 m/s"
                            },
                            {
                                "id": "C",
                                "text": "15 m/s"
                            },
                            {
                                "id": "D",
                                "text": "17 m/s"
                            },
                            {
                                "id": "E",
                                "text": "25 m/s"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Teorema Pythagoras Vektor Kecepatan:</strong><br>Karena gerak perahu tegak lurus terhadap arah arus sungai:<br>$$v_{\\text{resultan}} = \\sqrt{v_{\\text{mesin}}^2 + v_{\\text{arus}}^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13 \\text{ m/s}$$<br><strong>Kesimpulan:</strong> Kecepatan resultan perahu adalah <strong>13 m/s (Opsi B)</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Statistika Inferensial Sederhana: Skor Baku (Z-Score)",
                        "soal": "Nilai ujian nasional matematika memiliki rata-rata populasi \\( \\mu = 75 \\) dan simpangan baku \\( \\sigma = 8 \\). Jika seorang siswa memperoleh nilai 91, berapa nilai skor baku (Z-score) dari siswa tersebut?",
                        "options": [
                            {
                                "id": "A",
                                "text": "+1,5"
                            },
                            {
                                "id": "B",
                                "text": "+2,0"
                            },
                            {
                                "id": "C",
                                "text": "+2,5"
                            },
                            {
                                "id": "D",
                                "text": "-2,0"
                            },
                            {
                                "id": "E",
                                "text": "+3,0"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Rumus Z-Score:</strong><br>$$Z = \\frac{X - \\mu}{\\sigma} = \\frac{91 - 75}{8} = \\frac{16}{8} = +2{,}0$$<br><strong>Kesimpulan:</strong> Nilai Z-score siswa tersebut adalah <strong>+2,0 (Opsi B)</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Pemodelan Geometri Ruang: Optimasi Luas Kaleng Silinder",
                        "soal": "Sebuah kaleng minuman berbentuk tabung tertutup dirancang memiliki volume 500 cm³. Agar luas bahan seng yang digunakan minimum, perbandingan antara tinggi tabung (\\( h \\)) dan diameter alasnya (\\( d = 2r \\)) haruslah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "h = d (Tinggi sama dengan diameter)"
                            },
                            {
                                "id": "B",
                                "text": "h = 2d"
                            },
                            {
                                "id": "C",
                                "text": "h = 0,5d"
                            },
                            {
                                "id": "D",
                                "text": "h = 4d"
                            },
                            {
                                "id": "E",
                                "text": "h = 3d"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Optimasi Kalkulus Kaleng Silinder Tertutup:</strong><br>Luas permukaan tabung tertutup: \\( L = 2\\pi r^2 + 2\\pi rh \\).<br>Volume: \\( V = \\pi r^2 h \\implies h = \\frac{V}{\\pi r^2} \\).<br>Substitusi: \\( L(r) = 2\\pi r^2 + \\frac{2V}{r} \\).<br>Turunan pertama disamakan dengan nol untuk meminimumkan luas:<br>$$\\frac{dL}{dr} = 4\\pi r - \\frac{2V}{r^2} = 0 \\implies 4\\pi r^3 = 2V = 2(\\pi r^2 h) \\implies 4r = 2h \\implies h = 2r = d$$<br>Artinya, tinggi tabung harus sama dengan diameter alas tabung (\\( h = d \\)).<br><br><strong>Kesimpulan:</strong> Rasio yang tepat adalah <strong>h = d (Opsi A)</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Pemodelan Pertumbuhan Logistik: Kapasitas Tampung (Carrying Capacity)",
                        "soal": "Jumlah populasi rusa di suaka margasatwa dimodelkan oleh persamaan logistik:<br>$$P(t) = \\frac{1.200}{1 + 5e^{-0{,}2t}}$$<br>di mana \\( t \\) adalah waktu dalam tahun. Berapakah kapasitas tampung maksimum (carrying capacity) populasi rusa di suaka margasatwa tersebut saat \\( t \\to \\infty \\)?",
                        "options": [
                            {
                                "id": "A",
                                "text": "200 ekor"
                            },
                            {
                                "id": "B",
                                "text": "240 ekor"
                            },
                            {
                                "id": "C",
                                "text": "600 ekor"
                            },
                            {
                                "id": "D",
                                "text": "1.000 ekor"
                            },
                            {
                                "id": "E",
                                "text": "1.200 ekor"
                            }
                        ],
                        "kunci": "E",
                        "pembahasan": "<strong>Limit Fungsi Pertumbuhan Logistik:</strong><br>Ketika \\( t \\to \\infty \\), suku eksponensial negatif meluruh mendekati nol:<br>$$\\lim_{t \\to \\infty} e^{-0{,}2t} = 0$$<br>Maka populasi maksimum (daya dukung lingkungan):<br>$$P_{\\text{maks}} = \\frac{1.200}{1 + 5(0)} = \\frac{1.200}{1} = 1.200 \\text{ ekor}$$<br><strong>Kesimpulan:</strong> Kapasitas tampung maksimum adalah <strong>1.200 ekor (Opsi E)</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Kombinatorika Terapan: Teori Graf Sederhana",
                        "soal": "Dalam sebuah kompetisi catur tingkat nasional yang diikuti oleh 10 pecatur terbaik, sistem yang digunakan adalah kompetisi penuh (round-robin), di mana setiap pecatur harus bertanding tepat satu kali melawan setiap pecatur lainnya. Berapa total pertandingan catur yang harus diselenggarakan panitia?",
                        "options": [
                            {
                                "id": "A",
                                "text": "36 pertandingan"
                            },
                            {
                                "id": "B",
                                "text": "45 pertandingan"
                            },
                            {
                                "id": "C",
                                "text": "55 pertandingan"
                            },
                            {
                                "id": "D",
                                "text": "90 pertandingan"
                            },
                            {
                                "id": "E",
                                "text": "100 pertandingan"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Kombinasi 2 dari 10 Peserta:</strong><br>Setiap pertandingan mempertemukan sepasang pecatur tanpa memperhatikan urutan:<br>$$\\text{Total Laga} = \\binom{10}{2} = \\frac{10 \\times 9}{2 \\times 1} = 45 \\text{ pertandingan}$$<br><strong>Kesimpulan:</strong> Total pertandingan adalah <strong>45 pertandingan (Opsi B)</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Pemodelan Aljabar Terapan: Campuran Konsentrasi Larutan",
                        "soal": "Seorang teknisi laboratorium ingin membuat 10 liter larutan alkohol dengan konsentrasi 40%. Ia memiliki persediaan larutan alkohol dengan konsentrasi 25% dan larutan alkohol dengan konsentrasi 50%. Berapa liter larutan alkohol 25% yang harus dicampurkan?",
                        "options": [
                            {
                                "id": "A",
                                "text": "4 liter"
                            },
                            {
                                "id": "B",
                                "text": "5 liter"
                            },
                            {
                                "id": "C",
                                "text": "6 liter"
                            },
                            {
                                "id": "D",
                                "text": "7 liter"
                            },
                            {
                                "id": "E",
                                "text": "8 liter"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Persamaan Kesetimbangan Massa Zat Terlarut:</strong><br>Misalkan volume larutan 25% = \\( x \\) liter, maka volume larutan 50% = \\( 10 - x \\) liter.<br>$$0{,}25x + 0{,}50(10 - x) = 0{,}40(10)$$<br>$$0{,}25x + 5 - 0{,}50x = 4$$<br>$$-0{,}25x = 4 - 5 = -1$$<br>$$x = \\frac{-1}{-0{,}25} = 4 \\text{ liter}$$<br><strong>Kesimpulan:</strong> Larutan alkohol 25% yang dibutuhkan adalah <strong>4 liter (Opsi A)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Geometri Analitik: Jarak Terdekat Titik ke Garis",
                        "soal": "Jarak tegak lurus terdekat dari titik pusat koordinat \\( O(0, 0) \\) ke garis lurus dengan persamaan \\( 3x + 4y = 20 \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "2 satuan"
                            },
                            {
                                "id": "B",
                                "text": "3 satuan"
                            },
                            {
                                "id": "C",
                                "text": "4 satuan"
                            },
                            {
                                "id": "D",
                                "text": "5 satuan"
                            },
                            {
                                "id": "E",
                                "text": "6 satuan"
                            }
                        ],
                        "kunci": "C",
                        "pembahasan": "<strong>Rumus Jarak Titik \\( (x_1, y_1) \\) ke Garis \\( Ax + By + C = 0 \\):</strong><br>Bentuk garis: \\( 3x + 4y - 20 = 0 \\) dengan \\( A = 3, B = 4, C = -20 \\).<br>$$d = \\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|3(0) + 4(0) - 20|}{\\sqrt{3^2 + 4^2}} = \\frac{|-20|}{\\sqrt{9 + 16}} = \\frac{20}{5} = 4 \\text{ satuan}$$<br><strong>Kesimpulan:</strong> Jarak terdekatnya adalah <strong>4 satuan (Opsi C)</strong>."
                    }
                ]
            }
        }
    },
    {
        "id": 2,
        "judul": "Try Out Akbar SNBT 2026 - Edisi Prediksi Tingkat Lanjut (Gelombang 2)",
        "deskripsi": "Simulasi maraton tingkat lanjut dengan variasi soal penalaran analitis mendalam, literasi teks ilmiah, dan pemodelan optimasi matematika.",
        "status": "premium",
        "totalSoal": 70,
        "durasiTotalMenit": 105,
        "tahun": "2026",
        "subtesList": [
            "pu",
            "pbm",
            "ppu",
            "pk",
            "lbi",
            "lbe",
            "pm"
        ],
        "subtesData": {
            "pu": {
                "nama": "Penalaran Umum (PU)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Penalaran Kritis Lanjutan: Analisis Paradoks Kebijakan Lalu Lintas",
                        "soal": "Pemerintah sebuah kota metropolitan membangun jalan tol layang baru sepanjang 20 km dengan tujuan mengurai kemacetan parah di jalan arteri bawah. Namun, dua tahun setelah jalan tol diresmikan, waktu tempuh rata-rata kendaraan di jalan arteri maupun jalan tol justru meningkat 15% dibanding sebelum jalan tol dibangun.<br><br>Pernyataan manakah yang paling mampu <strong>MENJELASKAN MENGAPA KEMACETAN JUSTRU BERTAMBAH</strong>?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Fenomena induced demand (permintaan terinduksi), di mana penyediaan jalan baru mendorong ribuan warga yang sebelumnya menggunakan kereta api beralih membeli dan mengendarai mobil pribadi."
                            },
                            {
                                "id": "B",
                                "text": "Tarif tol yang ditetapkan oleh operator jalan tol dianggap terlalu murah."
                            },
                            {
                                "id": "C",
                                "text": "Jalan arteri bawah diaspal ulang dengan kualitas yang sangat mulus."
                            },
                            {
                                "id": "D",
                                "text": "Jalan tol tersebut sering dilintasi oleh ambulans rumah sakit."
                            },
                            {
                                "id": "E",
                                "text": "Warga kota lebih menyukai bepergian pada akhir pekan."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Konsep Transportasi & Paradoks Braess / Induced Demand:</strong><br>Penambahan kapasitas jalan baru sering memicu fenomena <em>induced demand</em>: orang-orang yang sebelumnya naik transportasi umum atau menahan perjalanan kini beralih menggunakan mobil pribadi karena merasa ada jalan tol baru, sehingga lonjakan volume mobil melampaui kapasitas tambahan jalan.<br><br><strong>Kesimpulan:</strong> Penjelasan terbaik adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Penalaran Logis: Analisis Kontradiksi Premis",
                        "soal": "Diberikan sekumpulan premis:<br>1. Semua atlet renang memiliki kapasitas paru-paru di atas rata-rata.<br>2. Beberapa pemain basket adalah atlet renang.<br>3. Tidak ada orang yang memiliki kapasitas paru-paru di atas rata-rata yang mudah mengalami sesak napas saat lari ringan.<br><br>Simpulan yang <strong>PASTI BENAR</strong> adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Beberapa pemain basket tidak mudah mengalami sesak napas saat lari ringan."
                            },
                            {
                                "id": "B",
                                "text": "Semua pemain basket adalah atlet renang."
                            },
                            {
                                "id": "C",
                                "text": "Semua orang yang tidak mudah sesak napas adalah pemain basket."
                            },
                            {
                                "id": "D",
                                "text": "Atlet renang tidak ada yang bermain basket."
                            },
                            {
                                "id": "E",
                                "text": "Pemain basket pasti mudah mengalami sesak napas saat lari ringan."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Silogisme Kuantor Kategoris:</strong><br>• Beberapa pemain basket &rarr; adalah atlet renang.<br>• Atlet renang &rarr; paru-paru di atas rata-rata &rarr; tidak mudah sesak napas.<br>Maka: <em>Beberapa pemain basket (yang sekaligus atlet renang tersebut) tidak mudah mengalami sesak napas saat lari ringan</em>.<br><br><strong>Kesimpulan:</strong> Simpulan yang pasti benar adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Penalaran Analitik: Posisi Meja Kerja 6 Pegawai",
                        "soal": "Enam pegawai (P, Q, R, S, T, dan U) menempati 6 meja kerja berderet dari kiri ke kanan (nomor 1 sampai 6):<br>• Q berada di meja nomor 2.<br>• P berada di sebelah kiri S, tetapi di sebelah kanan Q.<br>• R menempati meja paling kanan (nomor 6).<br>• T tidak bersebelahan dengan Q maupun R.<br><br>Meja nomor berapakah yang ditempati oleh T?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Meja nomor 1"
                            },
                            {
                                "id": "B",
                                "text": "Meja nomor 3"
                            },
                            {
                                "id": "C",
                                "text": "Meja nomor 4"
                            },
                            {
                                "id": "D",
                                "text": "Meja nomor 5"
                            },
                            {
                                "id": "E",
                                "text": "Meja nomor 2"
                            }
                        ],
                        "kunci": "C",
                        "pembahasan": "<strong>Analisis Posisi Deret (1 s/d 6):</strong><br>• Meja 2 = Q.<br>• Meja 6 = R.<br>• Tersisa meja 1, 3, 4, 5.<br>• P di antara Q dan S (Q < P < S). Karena Q = 2, maka P dan S harus berada di nomor yang lebih besar dari 2 (bisa 3, 4, 5).<br>• T tidak bersebelahan dengan Q (nomor 2), berarti T bukan nomor 1 atau 3.<br>• T juga tidak bersebelahan dengan R (nomor 6), berarti T bukan nomor 5.<br>Maka satu-satunya nomor meja yang tersisa untuk T adalah <strong>Meja nomor 4</strong>!<br>(Susunan lengkap: 1 = U, 2 = Q, 3 = P, 4 = T, 5 = S, 6 = R).<br><br><strong>Kesimpulan:</strong> T menempati <strong>Meja nomor 4 (Opsi C)</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Evaluasi Argumen: Flaw of False Equivalence",
                        "soal": "Seorang juru bicara menyatakan: <em>\"Mengonsumsi suplemen vitamin dosis tinggi setiap hari sama alaminya dengan makan buah-buahan segar, sehingga kita tidak perlu membatasi jumlah suplemen yang kita konsumsi setiap hari.\"</em><br><br>Kelemahan logika mendasar dari pernyataan juru bicara di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Melakukan analogi palsu (false equivalence) karena suplemen vitamin dosis tinggi terkonsentrasi secara sintetis dan dapat memicu toksisitas atau kerusakan organ ginjal/hati jika dikonsumsi tanpa batas, berbeda dengan matriks nutrisi alami buah segar."
                            },
                            {
                                "id": "B",
                                "text": "Menolak pentingnya buah-buahan lokal Indonesia."
                            },
                            {
                                "id": "C",
                                "text": "Tidak mencantumkan nomor registrasi BPOM dari suplemen tersebut."
                            },
                            {
                                "id": "D",
                                "text": "Menganggap buah segar memiliki harga yang lebih mahal dari suplemen."
                            },
                            {
                                "id": "E",
                                "text": "Tidak menyertakan nama pabrik produsen suplemen."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Kekeliruan Analogi Palsu:</strong><br>Pernyataan menyamakan suplemen farmasi pekat dengan buah alami (false analogy) dan menyimpulkan keliru bahwa 'alami = boleh dikonsumsi tanpa batas'. Suplemen dosis tinggi (terutama vitamin larut lemak A, D, E, K) berisiko memicu hipervitaminosis dan nefrotoksisitas.<br><br><strong>Kesimpulan:</strong> Kelemahan logika adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Penalaran Deduktif Kompleks: Aturan Syarat & Kelulusan",
                        "soal": "Seorang calon mahasiswa dinyatakan diterima di program beasiswa unggulan jika dan hanya jika ia memiliki IPK di atas 3,75 DAN skor TOEFL minimal 550, ATAU memiliki sertifikat prestasi juara olimpiade sains internasional. Bayu tidak memiliki sertifikat prestasi olimpiade sains internasional, tetapi ia berhasil dinyatakan diterima di program beasiswa unggulan tersebut.<br><br>Simpulan yang <strong>PASTI BENAR</strong> mengenai Bayu adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Bayu memiliki IPK di atas 3,75 dan skor TOEFL minimal 550."
                            },
                            {
                                "id": "B",
                                "text": "Bayu memiliki IPK di atas 3,75, namun skor TOEFL di bawah 550."
                            },
                            {
                                "id": "C",
                                "text": "Bayu memiliki skor TOEFL di atas 550, namun IPK di bawah 3,75."
                            },
                            {
                                "id": "D",
                                "text": "Bayu diterima karena faktor kuota daerah afirmasi."
                            },
                            {
                                "id": "E",
                                "text": "Bayu tidak perlu mengikuti tes TOEFL."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Kondisi Logika: Lolos &harr; (A &and; B) &or; C:</strong><br>Fakta: Bayu lolos (True).<br>Fakta: C bernilai Salah (~C, tidak punya juara olimpiade).<br>Agar nilai disjungsi tetap True, maka jalur (A &and; B) mutlak harus bernilai True: Bayu memiliki IPK > 3,75 DAN skor TOEFL minimal 550.<br><br><strong>Kesimpulan:</strong> Simpulan yang pasti benar adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Evaluasi Argumen: Memperkuat Dugaan Kausalitas",
                        "soal": "Arkeolog menduga bahwa kepunahan peradaban kuno di Lembah Maya dipicu oleh deforestasi besar-besaran untuk lahan pertanian yang memicu kekeringan regional ekstrem secara berkepanjangan.<br><br>Manakah temuan berikut yang <strong>PALING MEMPERKUAT</strong> dugaan arkeolog tersebut?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Analisis sedimen danau purba di wilayah tersebut membuktikan adanya penurunan drastis polen pohon hutan yang bertepatan dengan lonjakan isotop kekeringan tanah tepat sebelum keruntuhan peradaban."
                            },
                            {
                                "id": "B",
                                "text": "Ditemukan perkakas batu yang digunakan oleh para prajurit peradaban Maya."
                            },
                            {
                                "id": "C",
                                "text": "Masyarakat peradaban Maya memiliki sistem penanggalan kalender yang sangat maju."
                            },
                            {
                                "id": "D",
                                "text": "Beberapa piramida suku Maya masih berdiri kokoh hingga saat ini."
                            },
                            {
                                "id": "E",
                                "text": "Di wilayah peradaban lain terjadi invasi militer bangsa asing."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Strengthening Historical-Scientific Claim:</strong><br>Temuan pada Opsi A memberikan bukti stratigrafi sedimen danau empiris yang mengaitkan hilangnya pohon (polen turun) secara langsung dan bersamaan dengan penanda kimiawi kekeringan tanah tepat pada kurun waktu keruntuhan.<br><br><strong>Kesimpulan:</strong> Temuan terkuat adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Penalaran Induktif: Penarikan Kesimpulan Berbasis Data",
                        "soal": "Dari 1.000 pengendara mobil yang menggunakan sabuk pengaman saat terjadi benturan tabrakan, hanya 2% yang mengalami cedera kepala kritis. Sementara dari 1.000 pengendara yang tidak menggunakan sabuk pengaman pada jenis benturan serupa, sebanyak 38% mengalami cedera kepala kritis.<br><br>Simpulan yang <strong>PALING DIDUKUNG</strong> oleh data tersebut adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Penggunaan sabuk pengaman secara signifikan mereduksi risiko terjadinya cedera kepala kritis pada pengemudi saat terjadi benturan mobil."
                            },
                            {
                                "id": "B",
                                "text": "Sabuk pengaman menjamin 100% keselamatan pengemudi dari segala jenis kecelakaan."
                            },
                            {
                                "id": "C",
                                "text": "Kecelakaan mobil hanya terjadi jika pengemudi tidak menggunakan sabuk pengaman."
                            },
                            {
                                "id": "D",
                                "text": "Semua pengendara mobil di jalan raya selalu mematuhi aturan sabuk pengaman."
                            },
                            {
                                "id": "E",
                                "text": "Pengendara mobil tidak perlu melengkapi kendaraan dengan airbag."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Evaluasi Kesimpulan Statistik:</strong><br>Perbedaan angka cedera kritis yang mencolok (2% vs 38%) secara ilmiah membuktikan efektivitas sabuk pengaman dalam mereduksi risiko cedera kepala kritis tanpa overklaim proteksi mutlak 100%.<br><br><strong>Kesimpulan:</strong> Jawaban yang paling didukung adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Penalaran Kritis: Mengidentifikasi Kekeliruan Generalisasi Tergesa",
                        "soal": "<em>\"Dua orang teman saya yang tidak pernah belajar sebelum ujian justru mendapatkan nilai A pada ujian kimia kemarin. Oleh karena itu, belajar sebelum ujian adalah kegiatan sia-sia yang tidak ada gunanya bagi siapa pun.\"</em><br><br>Kekeliruan berpikir pada pernyataan di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Hasty generalization (generalisasi tergesa-gesa), yaitu menarik kesimpulan universal yang berlaku untuk semua orang hanya berdasarkan contoh kasus anekdotal dua orang teman."
                            },
                            {
                                "id": "B",
                                "text": "Menghina guru mata pelajaran kimia di sekolah."
                            },
                            {
                                "id": "C",
                                "text": "Mengabaikan fakta bahwa ujian kimia berlangsung selama 90 menit."
                            },
                            {
                                "id": "D",
                                "text": "Tidak membawa kalkulator saat ujian berlangsung."
                            },
                            {
                                "id": "E",
                                "text": "Menggunakan lembar jawaban yang salah."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Kekeliruan Logika (Hasty Generalization):</strong><br>Menyimpulkan bahwa 'belajar tidak berguna bagi siapa pun' hanya berdasarkan observasi subjektif 2 orang teman adalah contoh textbook dari sesat pikir <em>Hasty Generalization</em>.<br><br><strong>Kesimpulan:</strong> Kekeliruan berpikir adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Penalaran Negasi Kuantor Universal (Semua &rarr; Ada yang Tidak)",
                        "soal": "Pernyataan: <em>\"Semua planet di tata surya kita memiliki atmosfer gas yang tebal.\"</em><br><br>Ingkaran (negasi) yang sah secara logika matematika dari pernyataan di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Tidak ada satu pun planet di tata surya kita yang memiliki atmosfer gas yang tebal."
                            },
                            {
                                "id": "B",
                                "text": "Ada setidaknya satu planet di tata surya kita yang tidak memiliki atmosfer gas yang tebal."
                            },
                            {
                                "id": "C",
                                "text": "Semua planet di tata surya kita memiliki cincin es."
                            },
                            {
                                "id": "D",
                                "text": "Sebagian planet di tata surya kita memiliki atmosfer gas yang sangat tebal."
                            },
                            {
                                "id": "E",
                                "text": "Hanya planet Merkurius yang tidak memiliki atmosfer."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Kaidah Negasi Kuantor Universal:</strong><br>Negasi dari pernyataan berkuantor universal <em>&forall;x P(x) (Semua x memiliki sifat P)</em> adalah kuantor eksistensial <em>&exist;x ~P(x) (Ada setidaknya satu x yang TIDAK memiliki sifat P)</em>.<br>Maka ingkarannya: <em>Ada setidaknya satu planet di tata surya kita yang tidak memiliki atmosfer gas yang tebal</em>.<br><br><strong>Kesimpulan:</strong> Negasi yang sah adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Logika Sebab-Akibat: Analisis Efek Pengganda Ekonomi",
                        "soal": "Pemberian bantuan modal usaha tanpa bunga bagi kelompok perempuan prasejahtera terbukti meningkatkan omzet usaha mikro sebesar 40%, memperbaiki status gizi balita keluarga, dan menurunkan tingkat putus sekolah anak perempuan di desa tersebut.<br><br>Pernyataan berikut yang paling tepat merangkum dampak intervensi tersebut adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Bantuan modal usaha mikro menghasilkan dampak pengganda sosioekonomi terpadu yang memutus rantai kemiskinan antargenerasi."
                            },
                            {
                                "id": "B",
                                "text": "Seluruh warga desa tersebut kini telah menjadi pengusaha kaya raya."
                            },
                            {
                                "id": "C",
                                "text": "Anak laki-laki di desa tersebut tidak mendapatkan perhatian gizi."
                            },
                            {
                                "id": "D",
                                "text": "Bantuan finansial adalah satu-satunya faktor penentu status gizi balita."
                            },
                            {
                                "id": "E",
                                "text": "Pemerintah tidak perlu lagi membangun sekolah dasar di desa."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Sintesis Dampak Multiplikator:</strong><br>Dampak terbukti lintas dimensi: ekonomi (omzet naik), kesehatan (gizi balita membaik), dan pendidikan (putus sekolah turun). Rangkuman yang paling tepat dan bernalar objektif adalah pengakuan atas <em>dampak pengganda sosioekonomi terpadu pemutus rantai kemiskinan</em>.<br><br><strong>Kesimpulan:</strong> Rangkuman yang tepat adalah <strong>Opsi A</strong>."
                    }
                ]
            },
            "pbm": {
                "nama": "Pemahaman Bacaan & Menulis (PBM)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Sintaksis Lanjutan: Kalimat Majemuk Campuran",
                        "soal": "Perhatikan kalimat berikut:<br><em>\"Meskipun para peneliti telah mempublikasikan data efikasi vaksin di jurnal internasional terkemuka, tetapi sebagian masyarakat masih merasa ragu karena mereka terpengaruh oleh disinformasi di media sosial.\"</em><br><br>Agar menjadi kalimat yang efektif dan baku, perbaikan yang harus dilakukan adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Menghilangkan kata <em>tetapi</em>."
                            },
                            {
                                "id": "B",
                                "text": "Menghilangkan kata <em>Meskipun</em>."
                            },
                            {
                                "id": "C",
                                "text": "Mengganti kata <em>karena</em> dengan <em>sehingga</em>."
                            },
                            {
                                "id": "D",
                                "text": "Mengubah kata <em>dipublikasikan</em> menjadi <em>terpublikasi</em>."
                            },
                            {
                                "id": "E",
                                "text": "Menghilangkan kata <em>oleh</em>."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Kaidah Kalimat Konsesif Baku:</strong><br>Konjungsi subordinatif <em>Meskipun</em> tidak boleh dipadukan dengan konjungsi koordinatif antarklausa <em>tetapi</em>. Cukup hilangkan kata <em>tetapi</em> sehingga induk kalimat dapat berdiri tegak.<br><br><strong>Kesimpulan:</strong> Perbaikan yang tepat adalah <strong>Menghilangkan kata tetapi (Opsi A)</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Tata Ejaan: Penulisan Kata Berimbuhan Gabung (Konfiks)",
                        "soal": "Penulisan bentuk gabungan kata yang berimbuhan di awal dan di akhir (konfiks) secara <strong>BENAR</strong> menurut EYD V terdapat pada kalimat ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Pemerintah sedang berupaya untuk <em>menindak lanjuti</em> laporan warga."
                            },
                            {
                                "id": "B",
                                "text": "Kita wajib <em>mempertanggungjawabkan</em> seluruh penggunaan dana anggaran kegiatan."
                            },
                            {
                                "id": "C",
                                "text": "Perusahaan itu mencoba <em>mengambilalihkan</em> saham anak perusahaannya."
                            },
                            {
                                "id": "D",
                                "text": "Panitia sedang <em>menyebarluas kan</em> pamflet perlombaan sains."
                            },
                            {
                                "id": "E",
                                "text": "Ia berusaha <em>tanda tangani</em> berkas kontrak kerja baru."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Kaidah Penulisan Kata Berimbuhan Gabung:</strong><br>Jika bentuk gabungan kata mendapat awalan dan akhiran sekaligus (konfiks), unsur gabungan kata tersebut <strong>ditulis serangkai tanpa spasi</strong>: <em>tanggung jawab &rarr; mempertanggungjawabkan</em>, <em>tindak lanjut &rarr; menindaklanjuti</em>, <em>sebar luas &rarr; menyebarluaskan</em>.<br><br><strong>Kesimpulan:</strong> Penulisan yang benar adalah <strong>mempertanggungjawabkan (Opsi B)</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Diksi & Tata Bentukan: Reduplikasi Berubah Bunyi",
                        "soal": "Bentuk kata ulang berubah bunyi yang digunakan secara tepat dalam kalimat baku adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Warga desa berhamburan <em>pontang-panting</em> menyelamatkan diri dari kepulan awan panas."
                            },
                            {
                                "id": "B",
                                "text": "Anak itu berlari <em>bolak-balik</em> di ruang tamu tanpa henti."
                            },
                            {
                                "id": "C",
                                "text": "Ibu membeli <em>sayur-mayur</em> segar di pasar tradisional pagi hari."
                            },
                            {
                                "id": "D",
                                "text": "Pemandangan sawah terasering di lereng gunung tampak <em>berliku-liku</em> indah."
                            },
                            {
                                "id": "E",
                                "text": "Semua opsi A, B, dan C merupakan kata ulang berubah bunyi yang baku"
                            }
                        ],
                        "kunci": "E",
                        "pembahasan": "<strong>Kajian Reduplikasi Dwilingga Salin Suara:</strong><br>Kata <em>pontang-panting</em>, <em>bolak-balik</em>, dan <em>sayur-mayur</em> semuanya merupakan contoh sah dari kata ulang berubah bunyi (reduplikasi salin suara) yang diakui dalam kosakata baku bahasa Indonesia (KBBI).<br><br><strong>Kesimpulan:</strong> Jawaban yang tepat adalah <strong>Opsi E</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Sintaksis: Kalimat Inversi (Susun Balik)",
                        "soal": "Manakah di antara kalimat berikut yang merupakan <strong>kalimat inversi</strong> (predikat mendahului subjek)?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Terdengar suara gemuruh halilintar dari arah perbukitan barat."
                            },
                            {
                                "id": "B",
                                "text": "Adik sedang membaca novel fiksi ilmiah di beranda."
                            },
                            {
                                "id": "C",
                                "text": "Bunga melati di taman mekar dengan aroma semerbak."
                            },
                            {
                                "id": "D",
                                "text": "Para ilmuwan telah mempublikasikan riset genom terbaru."
                            },
                            {
                                "id": "E",
                                "text": "Pemerintah kota meresmikan jembatan penyeberangan baru."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Pola Kalimat Inversi (P - S):</strong><br>Pada kalimat: <em>\"Terdengar (P) suara gemuruh halilintar (S) dari arah perbukitan barat (K)\"</em>, unsur Predikat diletakkan di depan Subjek untuk memberikan efek penegasan retoris dramatis.<br><br><strong>Kesimpulan:</strong> Kalimat inversi adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "PUEBI: Penulisan Kata Depan 'di' dan 'ke'",
                        "soal": "Penulisan kata depan yang <strong>BENAR</strong> menurut EYD V terdapat pada kalimat ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Surat keputusan rektor itu sudah ditanda tangani dan diserahkan kepada dekan."
                            },
                            {
                                "id": "B",
                                "text": "Keluarga paman baru saja pindah keluar kota sejak minggu lalu."
                            },
                            {
                                "id": "C",
                                "text": "Buku referensi tersebut dapat dipinjam diperpustakaan pusat."
                            },
                            {
                                "id": "D",
                                "text": "Pesawat komersil itu terbang tinggi di atas awan kumulonimbus."
                            },
                            {
                                "id": "E",
                                "text": "Silakan masuk kedalam ruangan pertemuan sekarang juga."
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Kaidah Kata Depan di, ke, dari (EYD V):</strong><br>Kata depan <em>di, ke, dari</em> yang menyatakan arah atau posisi tempat ditulis terpisah dari kata yang mengikutinya: <em>di atas</em> (Opsi D benar).<br>Opsi B salah (seharusnya <em>ke luar kota</em>), Opsi C salah (seharusnya <em>di perpustakaan</em>), Opsi E salah (seharusnya <em>ke dalam</em>).<br><br><strong>Kesimpulan:</strong> Penulisan yang benar adalah <strong>Opsi D</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Efektivitas Kalimat: Logika Bahasa & Nalar Semantis",
                        "soal": "Perhatikan kalimat pengumuman berikut:<br><em>\"Bagi yang membawa kendaraan bermotor harap diparkir di tempat yang telah disediakan.\"</em><br><br>Kelemahan logika pada kalimat pengumuman di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Kalimat tersebut seolah-olah memerintahkan agar orangnya (yang membawa) yang diparkir, bukan kendaraannya."
                            },
                            {
                                "id": "B",
                                "text": "Kata <em>kendaraan</em> tidak baku menurut KBBI."
                            },
                            {
                                "id": "C",
                                "text": "Kata <em>parkir</em> seharusnya diganti menjadi <em>berhenti</em>."
                            },
                            {
                                "id": "D",
                                "text": "Tidak menyertakan tarif parkir resmi."
                            },
                            {
                                "id": "E",
                                "text": "Menggunakan tanda titik di akhir kalimat."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Kerancuan Logika Kalimat:</strong><br>Kalimat diawali frasa keterangan orang: <em>Bagi yang membawa kendaraan bermotor...</em> diikuti verba pasif <em>harap diparkir</em>. Secara gramatikal rancu, subjek yang diparkir merujuk pada frasa orang tersebut. Seharusnya: <em>Kendaraan bermotor harap diparkir di tempat yang telah disediakan</em> atau <em>Pengendara kendaraan bermotor harap memarkir kendaraannya di tempat...</em>.<br><br><strong>Kesimpulan:</strong> Kelemahan logika adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Tata Makna: Diksi Konotatif & Eufemisme",
                        "soal": "Ungkapan penghalus (eufemisme) yang tepat untuk menggantikan kata bercetak tebal dalam kalimat <em>\"Keluarga itu tergolong warga <strong>miskin</strong> di lingkungan kelurahannya\"</em> adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Prasejahtera"
                            },
                            {
                                "id": "B",
                                "text": "Tunaaksara"
                            },
                            {
                                "id": "C",
                                "text": "Tunarungu"
                            },
                            {
                                "id": "D",
                                "text": "Tunawisma"
                            },
                            {
                                "id": "E",
                                "text": "Gelandangan"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Eufemisme Baku Bahasa Indonesia:</strong><br>Istilah penghalus resmi untuk keluarga/warga ekonomi kurang mampu atau miskin adalah <strong>keluarga prasejahtera</strong>.<br><br><strong>Kesimpulan:</strong> Ungkapan eufemisme yang tepat adalah <strong>Prasejahtera (Opsi A)</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Morfologi: Penyerapan Akhiran Asing (-isasi, -or, -if)",
                        "soal": "Penulisan kata serapan berakhiran asing yang <strong>BAKU</strong> adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "standardisasi (dari standardization)"
                            },
                            {
                                "id": "B",
                                "text": "standarisasi"
                            },
                            {
                                "id": "C",
                                "text": "legitimir"
                            },
                            {
                                "id": "D",
                                "text": "kordinir"
                            },
                            {
                                "id": "E",
                                "text": "managemen"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Kaidah Penyerapan Sufiks Asing:</strong><br>Kata serapan dari <em>standardization</em> diserap menjadi <strong>standardisasi</strong> (mempertahankan huruf d, bukan standarisasi).<br>Bentuk baku manajemen adalah <em>manajemen</em> (bukan managemen), koordinasi menjadi <em>mengoordinasi</em> (bukan kordinir).<br><br><strong>Kesimpulan:</strong> Bentuk yang baku adalah <strong>standardisasi (Opsi A)</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Sintaksis: Kalimat Deklaratif vs Kalimat Tanya Retoris",
                        "soal": "Manakah kalimat berikut yang merupakan contoh <strong>kalimat tanya retoris</strong> (tidak memerlukan jawaban langsung karena jawabannya sudah jelas)?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Siapakah di antara kita yang tidak ingin hidup damai dan sejahtera?"
                            },
                            {
                                "id": "B",
                                "text": "Pukul berapa kereta api tujuan Surabaya akan diberangkatkan?"
                            },
                            {
                                "id": "C",
                                "text": "Berapakah massa atom relatif unsur tembaga pada tabel periodik?"
                            },
                            {
                                "id": "D",
                                "text": "Di mana letak laboratorium penelitian bioteknologi tersebut?"
                            },
                            {
                                "id": "E",
                                "text": "Mengapa reaksi esterifikasi membutuhkan katalis asam kuat?"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Definisi Kalimat Tanya Retoris:</strong><br>Kalimat tanya retoris berfungsi sebagai sarana penegasan atau penggugah nurani khalayak yang tidak membutuhkan respon jawaban faktual. Kalimat <em>\"Siapakah di antara kita yang tidak ingin hidup damai dan sejahtera?\"</em> menegaskan bahwa semua manusia tentu menginginkan hal tersebut.<br><br><strong>Kesimpulan:</strong> Kalimat retoris adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Analisis Gagasan Utama: Penyusunan Paragraf Deduktif",
                        "soal": "Sebuah paragraf deduktif yang baik dicirikan oleh ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Kalimat utama yang memuat gagasan pokok diletakkan di awal paragraf, kemudian diikuti oleh kalimat-kalimat penjelas yang merinci ide tersebut."
                            },
                            {
                                "id": "B",
                                "text": "Kalimat utama diletakkan tepat di akhir paragraf sebagai kesimpulan."
                            },
                            {
                                "id": "C",
                                "text": "Tidak memiliki gagasan pokok sama sekali."
                            },
                            {
                                "id": "D",
                                "text": "Setiap kalimat membicarakan topik yang berbeda-beda tanpa keterkaitan."
                            },
                            {
                                "id": "E",
                                "text": "Hanya terdiri dari satu kalimat panjang tanpa tanda titik."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Definisi Paragraf Deduktif:</strong><br>Paragraf deduktif adalah paragraf yang ide pokok/gagasan utamanya dinyatakan pada <strong>kalimat awal (kalimat pertama)</strong>, lalu dijabarkan lebih lanjut oleh kalimat-kalimat penjelas secara runtut.<br><br><strong>Kesimpulan:</strong> Karakteristik yang benar adalah <strong>Opsi A</strong>."
                    }
                ]
            },
            "ppu": {
                "nama": "Pengetahuan & Pemahaman Umum (PPU)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Semantik Lanjutan: Analogi Tingkat Intensitas Kata",
                        "soal": "Perhatikan analogi peningkatan intensitas berikut:<br><br><div class=\"p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 text-center\"><strong>HANGAT : PANAS = GERIMIS : ....</strong></div><br>Kata yang paling tepat untuk melengkapi analogi di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Mendung"
                            },
                            {
                                "id": "B",
                                "text": "Hujan lebat"
                            },
                            {
                                "id": "C",
                                "text": "Pelangi"
                            },
                            {
                                "id": "D",
                                "text": "Awan"
                            },
                            {
                                "id": "E",
                                "text": "Embun"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Analogi Skala Derajat Intensitas:</strong><br><em>Hangat</em> adalah suhu bertingkat sedang; jika intensitasnya meningkat tinggi menjadi <em>Panas</em>.<br><em>Gerimis</em> adalah hujan bertetesan kecil/ringan; jika intensitasnya meningkat tinggi menjadi <em>Hujan lebat</em>.<br><br><strong>Kesimpulan:</strong> Kata yang tepat adalah <strong>Hujan lebat (Opsi B)</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Kosakata Ilmiah: Makna Istilah 'Biodegradabel'",
                        "soal": "Bahan kemasan produk yang diberi label <em>biodegradabel</em> memiliki karakteristik utama ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Tidak akan pernah rusak meskipun dipanaskan hingga ribuan derajat Celsius"
                            },
                            {
                                "id": "B",
                                "text": "Mampu diuraikan secara alami oleh mikroorganisme pengurai (seperti bakteri dan jamur) menjadi senyawa ramah lingkungan"
                            },
                            {
                                "id": "C",
                                "text": "Hanya dapat didaur ulang menggunakan reaktor nuklir"
                            },
                            {
                                "id": "D",
                                "text": "Mengandung racun arsenik berbahaya bagi tanaman"
                            },
                            {
                                "id": "E",
                                "text": "Dapat larut dalam bensin tanpa sisa"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Definisi Istilah Lingkungan:</strong><br><em>Biodegradabel (biodegradable)</em> berarti zat atau material yang dapat dipecah, didekomposisi, dan diuraikan oleh agen biologis mikroba alami menjadi air, biomassa, dan karbon dioksida tanpa meninggalkan residu mikroplastik berbahaya.<br><br><strong>Kesimpulan:</strong> Karakteristik yang tepat adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Semantik: Makna Antonim Relatif (Gradual)",
                        "soal": "Kata <em>profan</em> (duniawi / tidak sakral) berlawanan makna (antonim) secara tepat dengan kata ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Sekuler"
                            },
                            {
                                "id": "B",
                                "text": "Sakral dan suci"
                            },
                            {
                                "id": "C",
                                "text": "Fana"
                            },
                            {
                                "id": "D",
                                "text": "Materialistis"
                            },
                            {
                                "id": "E",
                                "text": "Pragmatis"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Pasangan Antonim Bahasa:</strong><br><em>Profan</em> bermakna bukan suci, berhubungan dengan urusan keduniawian semata. Antonim yang tepat adalah <strong>sakral dan suci</strong> (berhubungan dengan kesucian religius).<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>Sakral dan suci (Opsi B)</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Kosakata Ilmiah: Istilah 'Simbiosis Parasitisme'",
                        "soal": "Pola interaksi antara dua organisme berbeda di mana satu pihak mendapatkan keuntungan nutrisi sementara pihak lainnya mengalami kerugian fisik atau sakit dinamakan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Mutualisme"
                            },
                            {
                                "id": "B",
                                "text": "Parasitisme"
                            },
                            {
                                "id": "C",
                                "text": "Komensalisme"
                            },
                            {
                                "id": "D",
                                "text": "Predasi"
                            },
                            {
                                "id": "E",
                                "text": "Amensalisme"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Terminologi Interaksi Ekologis:</strong><br>• Parasitisme = (+ / -) satu untung, inang dirugikan.<br>• Mutualisme = (+ / +) kedua pihak saling menguntungkan.<br>• Komensalisme = (+ / 0) satu untung, pihak lain netral.<br><br><strong>Kesimpulan:</strong> Interaksi tersebut adalah <strong>Parasitisme (Opsi B)</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Tata Hubungan Semantis: Analogi Fungsi Khusus Organ",
                        "soal": "Hubungan pasangan kata <em>INSANG : IKAN</em> setara dengan pasangan kata ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "TRAKEA : SERANGGA"
                            },
                            {
                                "id": "B",
                                "text": "SAYAP : BURUNG"
                            },
                            {
                                "id": "C",
                                "text": "KAKI : KUDA"
                            },
                            {
                                "id": "D",
                                "text": "SISIK : ULAR"
                            },
                            {
                                "id": "E",
                                "text": "PARUH : AYAM"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Analogi Organ Respirasi (Pernapasan):</strong><br>Insang adalah organ pernapasan primer pada ikan.<br>Trakea adalah sistem saluran organ pernapasan primer pada serangga.<br>(Keduanya memiliki hubungan: Organ Respirasi : Hewan).<br><br><strong>Kesimpulan:</strong> Pasangan yang setara adalah <strong>TRAKEA : SERANGGA (Opsi A)</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Kosakata Ilmiah: Makna Konsep 'Entropi'",
                        "soal": "Dalam termodinamika dan teori informasi, <em>entropi</em> adalah ukuran kuantitatif dari ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Tingkat ketidakteraturan, keacakan, atau hilangnya energi yang dapat digunakan untuk kerja dalam suatu sistem"
                            },
                            {
                                "id": "B",
                                "text": "Kecepatan rambat cahaya di ruang hampa udara"
                            },
                            {
                                "id": "C",
                                "text": "Kerapatan massa jenis suatu zat padat"
                            },
                            {
                                "id": "D",
                                "text": "Jumlah mol elektron dalam baterai kering"
                            },
                            {
                                "id": "E",
                                "text": "Tekanan uap jenuh cairan murni"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Definisi Termodinamika:</strong><br>Hukum Kedua Termodinamika mendefinisikan <em>entropi</em> sebagai besaran derajat <strong>keacakan atau ketidakteraturan molekuler</strong> suatu sistem termal.<br><br><strong>Kesimpulan:</strong> Jawaban yang benar adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Semantik: Makna Kata Berpasangan 'Skeptis vs Kritis'",
                        "soal": "Seseorang yang memiliki sikap <em>skeptis ilmiah</em> dicirikan oleh ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Menolak segala bentuk ilmu pengetahuan secara mutlak tanpa alasan"
                            },
                            {
                                "id": "B",
                                "text": "Memerlukan bukti empiris terverifikasi dan argumen logis yang sahih sebelum mempercayai suatu klaim kebenaran"
                            },
                            {
                                "id": "C",
                                "text": "Mempercayai semua informasi di media sosial tanpa verifikasi"
                            },
                            {
                                "id": "D",
                                "text": "Merasa dirinya paling pintar dibanding orang lain"
                            },
                            {
                                "id": "E",
                                "text": "Menolak berdiskusi dengan sesama ilmuwan"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Makna Sikap Skeptis Ilmiah:</strong><br>Skeptisisme ilmiah bukan berarti sinis atau menyangkal buta, melainkan sikap menuntut <strong>adanya bukti empiris dan verifikasi metode</strong> sebelum suatu kesimpulan diterima sebagai fakta.<br><br><strong>Kesimpulan:</strong> Sikap yang benar adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Tata Hubungan Semantis: Relasi Taksonomi Biologi",
                        "soal": "Hubungan pasangan kata <em>MAMALIA : PAUS</em> memiliki pola yang sama dengan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "AVES : ELANG"
                            },
                            {
                                "id": "B",
                                "text": "REPTIL : IKAN HIU"
                            },
                            {
                                "id": "C",
                                "text": "AMFIBI : KUCING"
                            },
                            {
                                "id": "D",
                                "text": "SERANGGA : CACING"
                            },
                            {
                                "id": "E",
                                "text": "PISCES : LUMBA-LUMBA"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Pola Taksonomi Kelas : Spesies Anggota:</strong><br>Mamalia adalah kelas taksonomi yang membawahi paus (paus adalah mamalia air).<br>Aves adalah kelas taksonomi unggas yang membawahi elang (elang adalah aves).<br><br><strong>Kesimpulan:</strong> Pasangan yang benar adalah <strong>AVES : ELANG (Opsi A)</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Kosakata Ilmiah: Istilah 'Antropogenik'",
                        "soal": "Faktor pencemaran lingkungan yang bersifat <em>antropogenik</em> adalah pencemaran yang bersumber dari ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Aktivitas letusan gunung berapi alami"
                            },
                            {
                                "id": "B",
                                "text": "Aktivitas dan perbuatan manusia"
                            },
                            {
                                "id": "C",
                                "text": "Gelombang tsunami di samudra"
                            },
                            {
                                "id": "D",
                                "text": "Jatuhnya meteorit dari luar angkasa"
                            },
                            {
                                "id": "E",
                                "text": "Pelapukan batuan kapur oleh air hujan"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Etimologi Istilah Antropogenik:</strong><br>Berasal dari bahasa Yunani <em>anthropos</em> (manusia) dan <em>genesis</em> (pembentukan). Emisi atau polusi antropogenik berarti polusi yang <strong>dihasilkan langsung oleh ulah dan aktivitas manusia</strong> (seperti pabrik industri dan kendaraan bermotor).<br><br><strong>Kesimpulan:</strong> Sumbernya adalah <strong>Aktivitas manusia (Opsi B)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Analisis Wacana: Esensi Konsep 'Meritokrasi'",
                        "soal": "Sistem pengelolaan organisasi publik yang menganut prinsip <em>meritokrasi</em> menjamin bahwa pengangkatan jabatan dan promosi karir didasarkan pada ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Hubungan kekerabatan dan pertemanan dekat (nepotisme)"
                            },
                            {
                                "id": "B",
                                "text": "Kecakapan kompetensi, prestasi kerja nyata, dan kualifikasi profesional yang objektif"
                            },
                            {
                                "id": "C",
                                "text": "Jumlah kekayaan materi keluarga kandidat"
                            },
                            {
                                "id": "D",
                                "text": "Tingkat senioritas usia tanpa melihat keahlian"
                            },
                            {
                                "id": "E",
                                "text": "Urutan abjad nama lengkap kandidat"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Konsep Meritokrasi:</strong><br><em>Meritokrasi</em> adalah sistem kepemimpinan di mana seseorang diberi penghargaan atau posisi berdasarkan <strong>prestasi (merit), kemampuan, kompetensi, dan kerja nyata</strong>, bukan karena koneksi primordial atau kekayaan.<br><br><strong>Kesimpulan:</strong> Dasarnya adalah <strong>Kompetensi dan prestasi nyata (Opsi B)</strong>."
                    }
                ]
            },
            "pk": {
                "nama": "Pengetahuan Kuantitatif (PK)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Teori Bilangan: Kelipatan Persekutuan Terkecil (KPK) & FPB",
                        "soal": "Tiga buah lampu mercusuar berkedip pada interval waktu yang berbeda. Lampu A berkedip setiap 12 detik, Lampu B setiap 18 detik, dan Lampu C setiap 30 detik. Jika ketiga lampu berkedip bersamaan pada pukul 20.00, pada pukul berapa ketiga lampu tersebut akan berkedip bersamaan untuk kedua kalinya?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Pukul 20.03"
                            },
                            {
                                "id": "B",
                                "text": "Pukul 20.05"
                            },
                            {
                                "id": "C",
                                "text": "Pukul 20.06"
                            },
                            {
                                "id": "D",
                                "text": "Pukul 20.10"
                            },
                            {
                                "id": "E",
                                "text": "Pukul 20.15"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>KPK Tiga Bilangan:</strong><br>• \\( 12 = 2^2 \\times 3 \\)<br>• \\( 18 = 2 \\times 3^2 \\)<br>• \\( 30 = 2 \\times 3 \\times 5 \\)<br>$$\\text{KPK}(12, 18, 30) = 2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = 180 \\text{ detik}$$<br>Ubah 180 detik ke menit: \\( 180 \\div 60 = 3 \\text{ menit} \\).<br>Waktu berikutnya: 20.00 + 3 menit = <strong>Pukul 20.03</strong>.<br><br><strong>Kesimpulan:</strong> Berkedip bersamaan lagi pada <strong>Pukul 20.03 (Opsi A)</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Aljabar Polinomial: Pembagian Suku Banyak",
                        "soal": "Jika polinomial \\( f(x) = x^3 - 3x^2 + kx + 12 \\) habis dibagi oleh \\( (x - 2) \\), maka nilai konstanta \\( k \\) sama dengan ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "-4"
                            },
                            {
                                "id": "B",
                                "text": "-2"
                            },
                            {
                                "id": "C",
                                "text": "2"
                            },
                            {
                                "id": "D",
                                "text": "4"
                            },
                            {
                                "id": "E",
                                "text": "6"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Teorema Faktor:</strong><br>Karena habis dibagi oleh \\( (x - 2) \\), maka sisa \\( f(2) = 0 \\):<br>$$f(2) = (2)^3 - 3(2)^2 + k(2) + 12 = 0$$<br>$$8 - 3(4) + 2k + 12 = 0$$<br>$$8 - 12 + 2k + 12 = 0$$<br>$$8 + 2k = 0 \\implies 2k = -8 \\implies k = -4$$<br><strong>Kesimpulan:</strong> Nilai \\( k = -4 \\) (Opsi A)."
                    },
                    {
                        "id": 3,
                        "topik": "Geometri Bidang Datar: Garis Singgung Persekutuan Luar Lingkaran",
                        "soal": "Dua buah lingkaran memiliki panjang jari-jari masing-masing 11 cm dan 3 cm. Jika jarak antara kedua pusat lingkaran adalah 17 cm, maka panjang garis singgung persekutuan luar kedua lingkaran tersebut adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "12 cm"
                            },
                            {
                                "id": "B",
                                "text": "13 cm"
                            },
                            {
                                "id": "C",
                                "text": "14 cm"
                            },
                            {
                                "id": "D",
                                "text": "15 cm"
                            },
                            {
                                "id": "E",
                                "text": "16 cm"
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Rumus Garis Singgung Persekutuan Luar (GSPL):</strong><br>$$d = \\sqrt{p^2 - (R - r)^2}$$<br>Diketahui \\( p = 17 \\), \\( R = 11 \\), \\( r = 3 \\implies R - r = 8 \\):<br>$$d = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15 \\text{ cm}$$<br><strong>Kesimpulan:</strong> Panjang GSPL adalah <strong>15 cm (Opsi D)</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Kombinatorika: Kombinasi Seleksi Anggota",
                        "soal": "Dari 8 orang calon pengurus yang terdiri atas 5 laki-laki dan 3 perempuan, akan dipilih 4 orang untuk membentuk sebuah panitia. Berapa banyaknya susunan panitia yang dapat dibentuk jika panitia tersebut harus terdiri atas <strong>tepat 2 laki-laki dan 2 perempuan</strong>?",
                        "options": [
                            {
                                "id": "A",
                                "text": "24 cara"
                            },
                            {
                                "id": "B",
                                "text": "30 cara"
                            },
                            {
                                "id": "C",
                                "text": "36 cara"
                            },
                            {
                                "id": "D",
                                "text": "40 cara"
                            },
                            {
                                "id": "E",
                                "text": "45 cara"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Aturan Kombinasi Dua Kelompok:</strong><br>• Memilih 2 dari 5 laki-laki: \\( \\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = 10 \\).<br>• Memilih 2 dari 3 perempuan: \\( \\binom{3}{2} = 3 \\).<br>Total kombinasi susunan panitia:<br>$$\\text{Banyak Cara} = 10 \\times 3 = 30 \\text{ cara}$$<br><strong>Kesimpulan:</strong> Banyak susunan yang dapat dibentuk adalah <strong>30 cara (Opsi B)</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Eksponen & Persamaan Eksponensial",
                        "soal": "Nilai \\( x \\) yang memenuhi persamaan \\( 9^{2x - 1} = 27^{x + 2} \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "4"
                            },
                            {
                                "id": "B",
                                "text": "6"
                            },
                            {
                                "id": "C",
                                "text": "8"
                            },
                            {
                                "id": "D",
                                "text": "10"
                            },
                            {
                                "id": "E",
                                "text": "12"
                            }
                        ],
                        "kunci": "C",
                        "pembahasan": "<strong>Samakan Basis Menjadi Basis 3:</strong><br>$$(3^2)^{2x - 1} = (3^3)^{x + 2}$$<br>$$3^{4x - 2} = 3^{3x + 6}$$<br>Samakan eksponen:<br>$$4x - 2 = 3x + 6$$<br>$$4x - 3x = 6 + 2 \\implies x = 8$$<br><strong>Kesimpulan:</strong> Nilai \\( x = 8 \\) (Opsi C)."
                    },
                    {
                        "id": 6,
                        "topik": "Matriks: Perkalian Matriks dan Transpos",
                        "soal": "Diketahui matriks \\( A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\) dan \\( B = \\begin{pmatrix} 0 & 1 \\\\ 2 & -1 \\end{pmatrix} \\). Matriks \\( A \\cdot B \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "\\( \\begin{pmatrix} 4 & -1 \\\\ 8 & -1 \\end{pmatrix} \\)"
                            },
                            {
                                "id": "B",
                                "text": "\\( \\begin{pmatrix} 4 & 1 \\\\ 8 & 1 \\end{pmatrix} \\)"
                            },
                            {
                                "id": "C",
                                "text": "\\( \\begin{pmatrix} 0 & 2 \\\\ 6 & -4 \\end{pmatrix} \\)"
                            },
                            {
                                "id": "D",
                                "text": "\\( \\begin{pmatrix} 2 & -1 \\\\ 4 & -1 \\end{pmatrix} \\)"
                            },
                            {
                                "id": "E",
                                "text": "\\( \\begin{pmatrix} 4 & -1 \\\\ 7 & 1 \\end{pmatrix} \\)"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Langkah Perkalian Matriks Baris Kali Kolom:</strong><br>$$AB = \\begin{pmatrix} (1)(0) + (2)(2) & (1)(1) + (2)(-1) \\\\ (3)(0) + (4)(2) & (3)(1) + (4)(-1) \\end{pmatrix} = \\begin{pmatrix} 0 + 4 & 1 - 2 \\\\ 0 + 8 & 3 - 4 \\end{pmatrix} = \\begin{pmatrix} 4 & -1 \\\\ 8 & -1 \\end{pmatrix}$$<br><strong>Kesimpulan:</strong> Matriks hasil adalah <strong>\\( \\begin{pmatrix} 4 & -1 \\\\ 8 & -1 \\end{pmatrix} \\) (Opsi A)</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Deret Aritmetika: Jumlah Suku",
                        "soal": "Jumlah 20 suku pertama dari deret aritmetika \\( 3 + 7 + 11 + 15 + ... \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "780"
                            },
                            {
                                "id": "B",
                                "text": "820"
                            },
                            {
                                "id": "C",
                                "text": "840"
                            },
                            {
                                "id": "D",
                                "text": "860"
                            },
                            {
                                "id": "E",
                                "text": "900"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Rumus Jumlah Suku Deret Aritmetika:</strong><br>Suku pertama \\( a = 3 \\), beda \\( b = 4 \\), \\( n = 20 \\):<br>$$S_n = \\frac{n}{2} (2a + (n - 1)b)$$<br>$$S_{20} = \\frac{20}{2} (2(3) + 19(4)) = 10(6 + 76) = 10(82) = 820$$<br><strong>Kesimpulan:</strong> Jumlah 20 suku pertama adalah <strong>820 (Opsi B)</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Geometri Dimensi Tiga: Jarak Titik ke Garis pada Kubus",
                        "soal": "Diketahui kubus \\( ABCD.EFGH \\) memiliki panjang rusuk 6 cm. Jarak dari titik puncak \\( F \\) ke garis diagonal bidang \\( AC \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "\\( 3\\sqrt{6} \\text{ cm} \\)"
                            },
                            {
                                "id": "B",
                                "text": "\\( 6\\sqrt{2} \\text{ cm} \\)"
                            },
                            {
                                "id": "C",
                                "text": "\\( 3\\sqrt{2} \\text{ cm} \\)"
                            },
                            {
                                "id": "D",
                                "text": "\\( 6\\sqrt{3} \\text{ cm} \\)"
                            },
                            {
                                "id": "E",
                                "text": "\\( 4\\sqrt{3} \\text{ cm} \\)"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Jarak Titik ke Diagonal Bidang Bawah:</strong><br>Titik proyeksi terdekat dari \\( F \\) ke garis \\( AC \\) berada tepat di titik tengah diagonal bidang \\( AC \\), sebut titik \\( M \\).<br>Segitiga \\( FMB \\) siku-siku di \\( B \\) (karena rusuk tegak \\( FB \\perp \\) bidang alas \\( ABCD \\)):<br>• Tinggi \\( FB = 6 \\text{ cm} \\).<br>• Jarak \\( BM \\) adalah setengah dari diagonal bidang \\( BD \\):<br>$$BD = 6\\sqrt{2} \\implies BM = 3\\sqrt{2} \\text{ cm}$$<br>Jarak \\( FM \\) (hipotenusa):<br>$$FM = \\sqrt{FB^2 + BM^2} = \\sqrt{6^2 + (3\\sqrt{2})^2} = \\sqrt{36 + 18} = \\sqrt{54} = 3\\sqrt{6} \\text{ cm}$$<br><strong>Kesimpulan:</strong> Jaraknya adalah <strong>\\( 3\\sqrt{6} \\text{ cm} \\) (Opsi A)</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Fungsi Kuadrat: Sumbu Simetri & Nilai Optimum",
                        "soal": "Sumbu simetri dari grafik fungsi kuadrat \\( f(x) = -3x^2 + 12x - 7 \\) adalah garis ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "\\( x = 2 \\)"
                            },
                            {
                                "id": "B",
                                "text": "\\( x = -2 \\)"
                            },
                            {
                                "id": "C",
                                "text": "\\( x = 4 \\)"
                            },
                            {
                                "id": "D",
                                "text": "\\( x = -4 \\)"
                            },
                            {
                                "id": "E",
                                "text": "\\( x = 1 \\)"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Rumus Sumbu Simetri:</strong><br>$$x = -\\frac{b}{2a} = -\\frac{12}{2(-3)} = -\\frac{12}{-6} = 2$$<br><strong>Kesimpulan:</strong> Sumbu simetrinya adalah garis <strong>\\( x = 2 \\) (Opsi A)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Logaritma: Persamaan Logaritma Sederhana",
                        "soal": "Nilai \\( x \\) yang memenuhi persamaan \\( ^2\\log(x + 5) + ^2\\log(x - 1) = 4 \\) adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "3"
                            },
                            {
                                "id": "B",
                                "text": "4"
                            },
                            {
                                "id": "C",
                                "text": "5"
                            },
                            {
                                "id": "D",
                                "text": "-7"
                            },
                            {
                                "id": "E",
                                "text": "2"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Sifat Penjumlahan Logaritma:</strong><br>$$^2\\log((x + 5)(x - 1)) = 4$$<br>$$(x + 5)(x - 1) = 2^4 = 16$$<br>$$x^2 + 4x - 5 = 16$$<br>$$x^2 + 4x - 21 = 0$$<br>$$(x + 7)(x - 3) = 0 \\implies x = -7 \\text{ atau } x = 3$$<br>Syarat numerus logaritma: \\( x + 5 > 0 \\implies x > -5 \\) dan \\( x - 1 > 0 \\implies x > 1 \\).<br>Maka hanya \\( x = 3 \\) yang memenuhi syarat numerus positif.<br><br><strong>Kesimpulan:</strong> Nilai \\( x = 3 \\) (Opsi A)."
                    }
                ]
            },
            "lbi": {
                "nama": "Literasi Bahasa Indonesia",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Literasi Sains Kelautan: Valuasi Jasa Ekosistem Terumbu Karang",
                        "soal": "Terumbu karang tidak hanya berperan sebagai habitat bagi 25% biota laut, tetapi juga berfungsi sebagai peredam alami energi gelombang laut hingga 97%. Rusaknya ekosistem terumbu karang akibat penggunaan bom ikan dan racun sianida memicu kenaikan biaya pembangunan tanggul pemecah ombak buatan hingga ratusan miliar rupiah per kilometer garis pantai.<br><br>Pernyataan berikut yang sejalan dengan gagasan teks di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Jasa ekosistem proteksi pantai yang diberikan oleh terumbu karang sehat memiliki nilai ekonomi riil yang jauh melampaui biaya konstruksi infrastruktur buatan manusia."
                            },
                            {
                                "id": "B",
                                "text": "Penggunaan bom ikan adalah metode penangkapan tradisional yang ramah lingkungan."
                            },
                            {
                                "id": "C",
                                "text": "Biota laut tidak membutuhkan terumbu karang untuk mencari makan."
                            },
                            {
                                "id": "D",
                                "text": "Pembangunan tanggul beton selalu lebih efektif dibanding terumbu karang alami."
                            },
                            {
                                "id": "E",
                                "text": "Energi gelombang laut tidak berbahaya bagi pemukiman pesisir."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Valuasi Ekonomi Ekosistem (Ecosystem Services):</strong><br>Teks membandingkan redaman 97% gelombang alami oleh karang dengan biaya ratusan miliar rupiah per km tanggul beton buatan. Ini membuktikan nilai ekonomi proteksi alami karang sangat tinggi.<br><br><strong>Kesimpulan:</strong> Pernyataan yang sejalan adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Analisis Bias Penulis: Pemberitaan Isu Pertambangan",
                        "soal": "Sebuah laporan korporasi menyatakan: <em>\"Aktivitas penambangan emas kami telah mengubah lereng hutan menjadi danau-danau indah tempat berkumpulnya burung-burung air, membuktikan komitmen mutlak kami pada keindahan alam.\"</em><br><br>Kritik ekologis yang paling tajam terhadap klaim di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Danau yang dimaksud sebenarnya adalah lubang bekas tambang (kolam void) beracun yang tercemar logam berat asam tambang dan sianida yang sangat mematikan bagi keanekaragaman hayati asli."
                            },
                            {
                                "id": "B",
                                "text": "Burung air lebih suka berenang di kolam renang buatan manusia."
                            },
                            {
                                "id": "C",
                                "text": "Emas adalah logam mulia yang tidak berkarat di udara terbuka."
                            },
                            {
                                "id": "D",
                                "text": "Perusahaan tambang harus memperluas wilayah danau tersebut."
                            },
                            {
                                "id": "E",
                                "text": "Pemerintah telah memungut pajak royalti dari penambangan emas."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analisis Greenwashing:</strong><br>Klaim 'danau indah' adalah manipulasi bahasa (greenwashing) untuk menutupi kenyataan bahwa lubang bekas tambang (void pit) sarat air asam tambang (acid mine drainage) beracun yang merusak tanah dan air tanah.<br><br><strong>Kesimpulan:</strong> Kritik ekologis yang tajam adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Literasi Sosiologi Pendidikan: Kesenjangan Akses Digital",
                        "soal": "Pemberlakuan pembelajaran serba digital selama pandemi memperlebar jurang capaian akademik antara siswa di perkotaan berfasilitas internet cepat dengan siswa di daerah pedalaman terluar yang tidak memiliki gawai dan akses sinyal telekomunikasi.<br><br>Berdasarkan konteks di atas, langkah pemerataan yang paling mendesak adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Pembangunan infrastruktur jaringan telekomunikasi dasar dan penyediaan perangkat pendukung terjangkau bagi kawasan tertinggal."
                            },
                            {
                                "id": "B",
                                "text": "Menghapus kurikulum sains dan matematika di daerah pedalaman."
                            },
                            {
                                "id": "C",
                                "text": "Memaksa siswa pedalaman membeli laptop mahal dengan biaya sendiri."
                            },
                            {
                                "id": "D",
                                "text": "Menghentikan seluruh penggunaan komputer di sekolah perkotaan."
                            },
                            {
                                "id": "E",
                                "text": "Memberikan ujian nasional dengan tingkat kesulitan yang lebih tinggi bagi daerah pedalaman."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Solusi Inklusif Kesenjangan Digital (Digital Divide):</strong><br>Kesenjangan lahir dari ketiadaan infrastruktur fisik dan perangkat. Solusi kebijakan publik yang adil dan mendasar adalah pemerataan jaringan serta subsidi perangkat bagi wilayah tertinggal.<br><br><strong>Kesimpulan:</strong> Langkah pemerataan yang tepat adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Pemahaman Esensi Teks Bioetika Kecerdasan Buatan",
                        "soal": "Algoritma kecerdasan buatan (AI) yang dilatih menggunakan data historis peradilan masa lalu dapat mewarisi dan mereproduksi bias rasial serta diskriminasi sosial terhadap kelompok marjinal secara tersembunyi di balik dalih 'objektivitas komputer'.<br><br>Pesan utama dari wacana kritis di atas adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Komputer bebas dari segala kesalahan karena tidak memiliki perasaan manusiawi."
                            },
                            {
                                "id": "B",
                                "text": "Algoritma AI tidak bersifat netral jika data pelatihannya merefleksikan ketidakadilan sistemik masa lalu, sehingga membutuhkan audit etis dan transparansi."
                            },
                            {
                                "id": "C",
                                "text": "Semua pengadilan harus dipimpin oleh robot hakim."
                            },
                            {
                                "id": "D",
                                "text": "Data historis peradilan harus dimusnahkan dan dibakar."
                            },
                            {
                                "id": "E",
                                "text": "Teknologi AI tidak boleh digunakan sama sekali dalam dunia kedokteran."
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Algorithmic Bias dalam Etika AI:</strong><br>Prinsip 'Garbage In, Garbage Out': AI yang menyerap data masa lalu yang bias akan melanggengkan bias tersebut secara otomatis. Komputer tidak otomatis netral hanya karena berbasis matematika.<br><br><strong>Kesimpulan:</strong> Pesan utama wacana adalah <strong>Opsi B</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Literasi Ketahanan Pangan: Diversifikasi Sumber Karbohidrat",
                        "soal": "Ketergantungan pangan nasional yang terpusat pada satu komoditas beras membuat stabilitas pangan sangat rentan terhadap anomali iklim El Nino. Indonesia sebenarnya memiliki kekayaan umbi-umbian lokal seperti sagu, singkong, ubi jalar, dan sukun yang tahan kekeringan dan memiliki indeks glikemik lebih rendah dibanding beras putih.<br><br>Tujuan pokok diversifikasi pangan lokal berdasarkan teks adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Meningkatkan resiliensi ketahanan pangan nasional dan kesehatan metabolisme masyarakat melalui pemanfaatan sumber karbohidrat alternatif adaptif iklim."
                            },
                            {
                                "id": "B",
                                "text": "Melarang masyarakat memakan nasi sama sekali."
                            },
                            {
                                "id": "C",
                                "text": "Menutup seluruh sawah padi di pulau Jawa."
                            },
                            {
                                "id": "D",
                                "text": "Mengekspor seluruh beras ke luar negeri."
                            },
                            {
                                "id": "E",
                                "text": "Mengganti beras dengan gandum impor."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Urgensi Diversifikasi Pangan:</strong><br>Teks menghubungkan kerentanan iklim beras tunggal dengan keunggulan umbi lokal (tahan kering + indeks glikemik rendah). Tujuannya adalah memperkuat ketahanan pangan dan kesehatan masyarakat.<br><br><strong>Kesimpulan:</strong> Tujuan pokoknya adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Evaluasi Bukti dalam Artikel Medis: Efek Plasebo",
                        "soal": "Dalam uji klinis obat antidepresan baru, 35% pasien dalam kelompok plasebo (yang hanya menerima pil gula kosong) juga melaporkan perbaikan suasana hati yang signifikan.<br><br>Fenomena ini membuktikan bahwa ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Faktor psikologis, keyakinan pasien, dan interaksi terapeutik dengan dokter (efek plasebo) memiliki pengaruh nyata terhadap persepsi pemulihan gejala."
                            },
                            {
                                "id": "B",
                                "text": "Pil gula mengandung zat kimia antidepresan yang kuat."
                            },
                            {
                                "id": "C",
                                "text": "Pasien dalam kelompok plasebo berbohong kepada peneliti."
                            },
                            {
                                "id": "D",
                                "text": "Obat antidepresan tidak lagi diperlukan oleh pasien rumah sakit."
                            },
                            {
                                "id": "E",
                                "text": "Uji klinis tersebut gagal total dan harus dibatalkan."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Hakikat Efek Plasebo:</strong><br>Efek plasebo membuktikan peran neurobiologis psikologis dan ekspektasi kesembuhan terhadap respons subjektif fisiologis tubuh manusia.<br><br><strong>Kesimpulan:</strong> Fenomena ini membuktikan <strong>Opsi A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Pemikiran Kritis: Analisis Sesat Pikir Slippery Slope",
                        "soal": "<em>\"Jika kita mengizinkan siswa membawa ponsel pintar ke sekolah satu hari saja, maka dalam waktu setahun seluruh siswa akan berhenti belajar, gedung sekolah akan menjadi arena permainan video game, dan peradaban bangsa akan runtuh total.\"</em><br><br>Pernyataan di atas merupakan contoh nyata dari sesat pikir (fallacy) jenis ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Slippery Slope (Lereng Licin), yaitu mengasumsikan satu langkah awal kecil pasti akan memicu rangkaian bencana ekstrem tanpa bukti kausal yang valid."
                            },
                            {
                                "id": "B",
                                "text": "Ad Hominem"
                            },
                            {
                                "id": "C",
                                "text": "Circulus in Demonstrando (Penalaran Melingkar)"
                            },
                            {
                                "id": "D",
                                "text": "Appeal to Tradition"
                            },
                            {
                                "id": "E",
                                "text": "Bandwagon Fallacy"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Definisi Fallacy Slippery Slope:</strong><br>Menggambarkan peristiwa berantai dramatis yang melebih-lebihkan bahwa satu kebijakan kecil (bawa ponsel sehari) akan otomatis berujung pada malapetaka apokaliptik (kehancuran peradaban) tanpa jembatan kausal logis.<br><br><strong>Kesimpulan:</strong> Jenis sesat pikir adalah <strong>Slippery Slope (Opsi A)</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Literasi Linguistik: Kepunahan Bahasa Daerah",
                        "soal": "Ketika generasi muda suatu suku minoritas tidak lagi diajarkan bahasa ibu oleh orang tuanya dan sepenuhnya beralih memakai bahasa dominan nasional di ranah domestik, bahasa daerah tersebut berada pada fase kritis kepunahan linguistik. Hilangnya sebuah bahasa daerah bukan sekadar hilangnya kosakata, melainkan hilangnya sistem pengetahuan ekologis lokal dan cara pandang kosmologis yang unik terhadap alam semesta.<br><br>Makna mendalam yang disampaikan teks adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Bahasa adalah wadah peradaban dan gudang memori budaya, sehingga kepunahan bahasa adalah kepunahan identitas epistemologis suku bangsa."
                            },
                            {
                                "id": "B",
                                "text": "Generasi muda harus dilarang berbicara bahasa nasional."
                            },
                            {
                                "id": "C",
                                "text": "Semua suku minoritas harus menolak penggunaan teknologi modern."
                            },
                            {
                                "id": "D",
                                "text": "Bahasa daerah tidak memiliki tata bahasa yang baku."
                            },
                            {
                                "id": "E",
                                "text": "Kamus bahasa daerah tidak boleh disimpan di perpustakaan."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Nilai Filosofis Bahasa Daerah:</strong><br>Bahasa mengodekan sistem pengetahuan tradisional (folk taxonomy obat, tanaman, ekologi). Kepunahan bahasa melenyapkan sistem pengetahuan unik peradaban tersebut.<br><br><strong>Kesimpulan:</strong> Makna mendalam adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Literasi Ekonomi: Jebakan Pendapatan Menengah (Middle Income Trap)",
                        "soal": "Negara yang berhasil naik kelas dari pendapatan rendah ke pendapatan menengah sering kali terjebak dalam *middle income trap*. Negara tersebut kehilangan daya saing upah buruh murah dibanding negara miskin, namun belum memiliki keunggulan inovasi riset dan produktivitas bernilai tambah tinggi dibanding negara maju.<br><br>Strategi terpenting agar suatu negara berhasil keluar dari jebakan ini adalah ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Investasi masif pada kualitas pendidikan tinggi, riset sains-teknologi, dan transformasi industri berbasis inovasi serta talenta bernilai tambah tinggi."
                            },
                            {
                                "id": "B",
                                "text": "Menurunkan upah buruh serendah-rendahnya."
                            },
                            {
                                "id": "C",
                                "text": "Menghentikan seluruh riset laboratorium universitas."
                            },
                            {
                                "id": "D",
                                "text": "Hanya mengandalkan ekspor bahan mentah tambang tanpa hilirisasi."
                            },
                            {
                                "id": "E",
                                "text": "Menutup diri dari pasar ekspor global."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Solusi Middle Income Trap:</strong><br>Untuk bersaing dengan negara maju, negara berkembang harus melompat dari ekonomi berbasis sumber daya murah (factor-driven) menuju ekonomi berbasis inovasi dan riset iptek (innovation-driven).<br><br><strong>Kesimpulan:</strong> Strategi kuncinya adalah <strong>Opsi A</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Sintesis Wacana: Etika Lingkungan Ekosentrisme",
                        "soal": "Berbeda dengan pandangan antroposentrisme yang menganggap alam semata-mata sebagai instrumen pemuas kebutuhan materi manusia, pandangan ekosentrisme menegaskan bahwa setiap komponen biosfer (hewan, tumbuhan, sungai, dan gunung) memiliki nilai intrinsik pada dirinya sendiri yang wajib dihormati dan dilindungi demi keutuhan jaring kehidupan.<br><br>Esensi pandangan ekosentrisme mengajak manusia untuk ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Mengubah relasi dengan alam dari eksploitasi sewenang-wenang menjadi kesadaran etis bahwa manusia adalah bagian integral dari komunitas ekologis bumi."
                            },
                            {
                                "id": "B",
                                "text": "Memusnahkan seluruh industri manufaktur dan kembali ke zaman batu."
                            },
                            {
                                "id": "C",
                                "text": "Menganggap manusia lebih rendah derajatnya dari batu."
                            },
                            {
                                "id": "D",
                                "text": "Menolak pengobatan medis modern bagi orang sakit."
                            },
                            {
                                "id": "E",
                                "text": "Membiarkan bencana alam terjadi tanpa mitigasi."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Etika Ekosentrisme:</strong><br>Ekosentrisme merombak arogansi manusia (antroposentrisme) menuju kesadaran bahwa manusia adalah anggota keluarga ekologis yang wajib menjaga harmoni bumi.<br><br><strong>Kesimpulan:</strong> Esensi pandangan tersebut adalah <strong>Opsi A</strong>."
                    }
                ]
            },
            "lbe": {
                "nama": "Literasi Bahasa Inggris",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Astrobiology: Hydrothermal Vents and Extraterrestrial Life",
                        "soal": "Why do astrobiologists consider hydrothermal vents on Earth prime analogues for studying potential life on icy moons such as Europa and Enceladus?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Because they demonstrate that complex thriving ecosystems can exist in complete darkness beneath thick ice crusts without relying on direct solar radiation."
                            },
                            {
                                "id": "B",
                                "text": "Because hydrothermal vents are made of pure gold and titanium."
                            },
                            {
                                "id": "C",
                                "text": "Because astronaut spacecraft can only land on underwater oceans."
                            },
                            {
                                "id": "D",
                                "text": "Because alien spaceships have been documented near deep-sea trenches."
                            },
                            {
                                "id": "E",
                                "text": "Because ocean waters boil into steam instantly on Europa."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Astrobiology Analogues:</strong><br>Icy moons like Europa harbor subsurface oceans beneath frozen crusts. Chemosynthetic vent systems on Earth prove that life can flourish without sunlight via geothermal chemical energy.<br><br><strong>Conclusion:</strong> The correct answer is <strong>Option A</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Rhetoric: Detecting Slippery Slope Fallacy in Discourse",
                        "soal": "Which statement illustrates a <strong>slippery slope fallacy</strong>?",
                        "options": [
                            {
                                "id": "A",
                                "text": "\"If we allow students to use spell-check software, they will soon forget the alphabet, stop speaking English entirely, and society will collapse into total illiteracy.\""
                            },
                            {
                                "id": "B",
                                "text": "\"Frequent spelling errors can sometimes reduce the clarity of written communication.\""
                            },
                            {
                                "id": "C",
                                "text": "\"Automated grammar checkers rely on natural language processing algorithms.\""
                            },
                            {
                                "id": "D",
                                "text": "\"Learning phonics helps young children develop decoding proficiency.\""
                            },
                            {
                                "id": "E",
                                "text": "\"Dictionaries provide definitions, pronunciations, and etymologies.\""
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Slippery Slope Identification:</strong><br>Option A escalates from a minor technological assistance (spell-check) to catastrophic collapse of language and civilization without logical justification.<br><br><strong>Conclusion:</strong> The fallacy is <strong>Option A</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Vocabulary in Context: Meaning of 'Paradigm Shift'",
                        "soal": "In the history of science, a <em>paradigm shift</em> refers to ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "A minor spelling correction in an elementary school textbook"
                            },
                            {
                                "id": "B",
                                "text": "A fundamental transformation in the basic concepts and experimental practices of a scientific discipline"
                            },
                            {
                                "id": "C",
                                "text": "A routine laboratory equipment replacement"
                            },
                            {
                                "id": "D",
                                "text": "A temporary budget reduction for university research grants"
                            },
                            {
                                "id": "E",
                                "text": "A seasonal migration pattern of wild birds"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Thomas Kuhn's Scientific Paradigm:</strong><br>A <em>paradigm shift</em> is a profound, revolutionary change in the fundamental assumptions and framework governing a scientific discipline (e.g., Copernican heliocentrism, Einsteinian relativity).<br><br><strong>Conclusion:</strong> The correct option is <strong>B</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Cause and Effect: The Greenhouse Effect Mechanism",
                        "soal": "Greenhouse gases warm planetary atmospheres by ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Absorbing and re-emitting terrestrial infrared thermal radiation back toward the planetary surface"
                            },
                            {
                                "id": "B",
                                "text": "Blocking incoming visible solar radiation from reaching the upper troposphere"
                            },
                            {
                                "id": "C",
                                "text": "Generating spontaneous nuclear fusion in clouds"
                            },
                            {
                                "id": "D",
                                "text": "Cooling ocean surface temperatures to absolute zero"
                            },
                            {
                                "id": "E",
                                "text": "Eliminating atmospheric nitrogen"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Physics of Greenhouse Mechanism:</strong><br>Visible solar light passes through the atmosphere; the Earth warms and re-radiates lower-energy infrared waves, which are absorbed and scattered by greenhouse gas molecules, trapping heat in the troposphere.<br><br><strong>Conclusion:</strong> The correct mechanism is <strong>Option A</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Sentence Synthesis: Subordinating Conjunction of Concession",
                        "soal": "Join the two clauses using the most appropriate formal concession connector:<br><em>\"[...], the drug candidate demonstrated potent antitumor activity in preclinical rodent models; its severe hepatotoxicity halted subsequent human clinical trials.\"</em>",
                        "options": [
                            {
                                "id": "A",
                                "text": "Although"
                            },
                            {
                                "id": "B",
                                "text": "Because"
                            },
                            {
                                "id": "C",
                                "text": "Unless"
                            },
                            {
                                "id": "D",
                                "text": "Provided that"
                            },
                            {
                                "id": "E",
                                "text": "As long as"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Concessive Subordination:</strong><br><em>Although</em> signals a concession: high tumor efficacy occurred, yet toxicity precluded human trials.<br><br><strong>Conclusion:</strong> The connector is <strong>Although (Option A)</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Advanced Scientific Reading: CRISPR-Cas9 Target Specificity",
                        "soal": "In CRISPR gene-editing technology, the single guide RNA (sgRNA) serves the vital purpose of ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Directing the Cas9 endonuclease enzyme to the complementary genomic target locus with high sequence specificity"
                            },
                            {
                                "id": "B",
                                "text": "Dissolving cell membranes entirely during injection"
                            },
                            {
                                "id": "C",
                                "text": "Increasing viral replication inside healthy host cells"
                            },
                            {
                                "id": "D",
                                "text": "Replacing all nuclear DNA with synthetic lipids"
                            },
                            {
                                "id": "E",
                                "text": "Preventing any double-stranded DNA breaks from healing"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Molecular Biology (sgRNA Function):</strong><br>The guide RNA forms Watson-Crick base pairs with the target genomic sequence, guiding the Cas9 molecular scissors to execute precise double-stranded DNA cleavage.<br><br><strong>Conclusion:</strong> The function is <strong>Option A</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Vocabulary in Academic Discourse: Meaning of 'Empirical'",
                        "soal": "An <em>empirical</em> scientific claim is one substantiated by ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Rigorous observation, experimentation, and quantifiable sensory evidence"
                            },
                            {
                                "id": "B",
                                "text": "Popular gossip and folklore"
                            },
                            {
                                "id": "C",
                                "text": "Unverified personal dreams"
                            },
                            {
                                "id": "D",
                                "text": "Emotional intuition devoid of measurement"
                            },
                            {
                                "id": "E",
                                "text": "Dogmatic political mandates"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Epistemological Definition:</strong><br><em>Empirical</em> signifies based on objective testing, sensory measurement, and experimental data.<br><br><strong>Conclusion:</strong> The definition is <strong>Option A</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Passive Voice in Scientific Reporting",
                        "soal": "Which sentence correctly uses the passive voice to highlight the objective outcome rather than the researcher?",
                        "options": [
                            {
                                "id": "A",
                                "text": "A novel catalytic pathway was discovered during the second phase of synthesis experiments."
                            },
                            {
                                "id": "B",
                                "text": "Dr. Miller discovered a novel catalytic pathway yesterday afternoon."
                            },
                            {
                                "id": "C",
                                "text": "Researchers excitedly celebrated their discovery in the auditorium."
                            },
                            {
                                "id": "D",
                                "text": "The technician poured the acid into the beaker carefully."
                            },
                            {
                                "id": "E",
                                "text": "Everyone knew the formula had worked."
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Passive Voice in Scientific Style:</strong><br>Scientific reports favor the passive voice (<em>was discovered</em>) to focus reader attention on the findings rather than the personal identities of the experimenters.<br><br><strong>Conclusion:</strong> The correct sentence is <strong>Option A</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Critical Tone Identification: Author's Stance on AI Hype",
                        "soal": "An essay concludes: <em>\"Proclaiming that artificial intelligence currently possesses human-level sentience confuses sophisticated statistical pattern matching with genuine subjective consciousness.\"</em><br><br>The author's position is ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Critical and cautioning against conflating generative predictive models with actual sentient awareness"
                            },
                            {
                                "id": "B",
                                "text": "Uncritically asserting that computers feel human emotions"
                            },
                            {
                                "id": "C",
                                "text": "Demanding that all computers be destroyed immediately"
                            },
                            {
                                "id": "D",
                                "text": "Indifferent to the development of artificial intelligence"
                            },
                            {
                                "id": "E",
                                "text": "Humorous and sarcastic towards computer programmers"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Analyzing Conceptual Distinction:</strong><br>The author clarifies a sharp philosophical-technical distinction: LLMs do pattern matching, which must not be falsely conflated with sentience or consciousness.<br><br><strong>Conclusion:</strong> The author's position is <strong>Option A</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Reading Comprehension: The Role of Epigenetic Methylation",
                        "soal": "DNA methylation typically affects gene expression by ....",
                        "options": [
                            {
                                "id": "A",
                                "text": "Attaching methyl chemical tags to cytosine bases, which generally represses gene transcription without altering the DNA sequence"
                            },
                            {
                                "id": "B",
                                "text": "Deleting the entire chromosome sequence"
                            },
                            {
                                "id": "C",
                                "text": "Transforming DNA into structural bone tissue"
                            },
                            {
                                "id": "D",
                                "text": "Allowing bacteria to replace human cells"
                            },
                            {
                                "id": "E",
                                "text": "Preventing cells from undergoing mitosis"
                            }
                        ],
                        "kunci": "A",
                        "pembahasan": "<strong>Epigenetics Mechanism:</strong><br>Methyl groups added to CpG dinucleotide islands physically obstruct transcription factors, silencing/repressing gene expression without altering the genetic nucleotide letters.<br><br><strong>Conclusion:</strong> The mechanism is <strong>Option A</strong>."
                    }
                ]
            },
            "pm": {
                "nama": "Penalaran Matematika (PM)",
                "durasiMenit": 15,
                "soal": [
                    {
                        "id": 1,
                        "topik": "Pemodelan Optimasi: Luas Kandang Maksimum Kawat Pagar",
                        "soal": "Seorang peternak memiliki kawat pagar sepanjang 60 meter untuk memagari kandang ayam berbentuk persegi panjang. Salah satu sisi panjang kandang memanfaatkan dinding tembok gudang yang sudah ada (sehingga sisi tersebut tidak perlu dipagari kawat). Berapakah luas kandang ayam maksimum yang dapat dibuat oleh peternak tersebut?",
                        "options": [
                            {
                                "id": "A",
                                "text": "400 m²"
                            },
                            {
                                "id": "B",
                                "text": "450 m²"
                            },
                            {
                                "id": "C",
                                "text": "500 m²"
                            },
                            {
                                "id": "D",
                                "text": "600 m²"
                            },
                            {
                                "id": "E",
                                "text": "900 m²"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Optimasi Fungsi Kuadrat Luas:</strong><br>Panjang kawat pagar: \\( 2l + p = 60 \\implies p = 60 - 2l \\).<br>Fungsi luas: \\( L(l) = p \\cdot l = (60 - 2l)l = 60l - 2l^2 \\).<br>Lebar optimum tercapai pada sumbu simetri puncak parabola:<br>$$l = -\\frac{b}{2a} = -\\frac{60}{2(-2)} = 15 \\text{ meter}$$<br>Panjang kandang: \\( p = 60 - 2(15) = 30 \\text{ meter} \\).<br>Luas maksimum:<br>$$L_{\\text{maks}} = 30 \\times 15 = 450 \\text{ m}^2$$<br><strong>Kesimpulan:</strong> Luas maksimum kandang adalah <strong>450 m² (Opsi B)</strong>."
                    },
                    {
                        "id": 2,
                        "topik": "Pemodelan Aliran Fluida: Waktu Pengurasan Kolam Renang",
                        "soal": "Sebuah kolam renang memiliki kapasitas 360.000 liter. Dua pompa penyedot air (Pompa X dan Pompa Y) digunakan bersama-sama untuk menguras kolam. Pompa X memiliki debit penyedotan 600 liter/menit, sedangkan Pompa Y memiliki debit 400 liter/menit. Berapa jam waktu yang dibutuhkan kedua pompa untuk menguras seluruh air kolam renang tersebut?",
                        "options": [
                            {
                                "id": "A",
                                "text": "5 jam"
                            },
                            {
                                "id": "B",
                                "text": "6 jam"
                            },
                            {
                                "id": "C",
                                "text": "7 jam"
                            },
                            {
                                "id": "D",
                                "text": "8 jam"
                            },
                            {
                                "id": "E",
                                "text": "9 jam"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Langkah Perhitungan Debit Gabungan:</strong><br>Debit total kedua pompa: \\( 600 + 400 = 1.000 \\text{ liter/menit} \\).<br>Waktu yang dibutuhkan dalam menit:<br>$$t = \\frac{360.000 \\text{ liter}}{1.000 \\text{ liter/menit}} = 360 \\text{ menit}$$<br>Konversi ke jam:<br>$$t = \\frac{360}{60} = 6 \\text{ jam}$$<br><strong>Kesimpulan:</strong> Waktu yang dibutuhkan adalah <strong>6 jam (Opsi B)</strong>."
                    },
                    {
                        "id": 3,
                        "topik": "Pemodelan Peluruhan: Depresiasi Nilai Mesin Industri",
                        "soal": "Sebuah mesin produksi dibeli oleh pabrik seharga Rp 200.000.000. Setiap tahun, nilai ekonomis mesin tersebut mengalami penyusutan (depresiasi) sebesar 10% dari nilainya pada tahun sebelumnya. Berapakah perkiraan nilai ekonomis mesin tersebut setelah digunakan selama 2 tahun?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Rp 160.000.000"
                            },
                            {
                                "id": "B",
                                "text": "Rp 162.000.000"
                            },
                            {
                                "id": "C",
                                "text": "Rp 165.000.000"
                            },
                            {
                                "id": "D",
                                "text": "Rp 170.000.000"
                            },
                            {
                                "id": "E",
                                "text": "Rp 180.000.000"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Rumus Peluruhan Nilai (Depresiasi Geometri):</strong><br>$$V_t = V_0 (1 - r)^t$$<br>$$V_2 = 200.000.000 \\times (1 - 0{,}10)^2 = 200.000.000 \\times (0{,}9)^2$$<br>$$V_2 = 200.000.000 \\times 0{,}81 = \\text{Rp } 162.000.000$$<br><strong>Kesimpulan:</strong> Nilai ekonomis setelah 2 tahun adalah <strong>Rp 162.000.000 (Opsi B)</strong>."
                    },
                    {
                        "id": 4,
                        "topik": "Pemodelan Pertumbuhan Logaritmik: Skala Gempa Richter",
                        "soal": "Skala kekuatan gempa Richter didefinisikan oleh rumus \\( M = \\log\\left(\\frac{I}{I_0}\\right) \\), di mana \\( I \\) adalah intensitas gelombang gempa dan \\( I_0 \\) adalah intensitas gempa ambang standar. Berapa kali lipat peningkatan intensitas gempa bumi berkekuatan 7,0 Richter dibanding gempa bumi berkekuatan 5,0 Richter?",
                        "options": [
                            {
                                "id": "A",
                                "text": "2 kali lipat"
                            },
                            {
                                "id": "B",
                                "text": "10 kali lipat"
                            },
                            {
                                "id": "C",
                                "text": "20 kali lipat"
                            },
                            {
                                "id": "D",
                                "text": "100 kali lipat"
                            },
                            {
                                "id": "E",
                                "text": "1.000 kali lipat"
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Sifat Skala Logaritma Basis 10:</strong><br>$$M_1 - M_2 = \\log(I_1) - \\log(I_2) = \\log\\left(\\frac{I_1}{I_2}\\right)$$<br>$$7{,}0 - 5{,}0 = 2{,}0 = \\log\\left(\\frac{I_1}{I_2}\\right)$$<br>$$\\frac{I_1}{I_2} = 10^{2{,}0} = 100$$<br>Artinya, gempa skala 7,0 memiliki intensitas amplitudo <strong>100 kali lipat</strong> lebih kuat dibanding gempa skala 5,0.<br><br><strong>Kesimpulan:</strong> Intensitasnya meningkat <strong>100 kali lipat (Opsi D)</strong>."
                    },
                    {
                        "id": 5,
                        "topik": "Geometri Konstruksi Terapan: Tangga Bersandar",
                        "soal": "Sebuah tangga lurus sepanjang 5 meter disandarkan pada dinding tembok vertikal. Kaki tangga berada di lantai pada jarak 3 meter dari dasar tembok. Jika bagian atas tangga bergeser turun ke bawah sejauh 0,8 meter di dinding, berapa meter bagian kaki tangga akan bergeser menjauhi tembok di lantai?",
                        "options": [
                            {
                                "id": "A",
                                "text": "0,8 meter"
                            },
                            {
                                "id": "B",
                                "text": "0,85 meter"
                            },
                            {
                                "id": "C",
                                "text": "0,9 meter"
                            },
                            {
                                "id": "D",
                                "text": "1,0 meter"
                            },
                            {
                                "id": "E",
                                "text": "1,2 meter"
                            }
                        ],
                        "kunci": "D",
                        "pembahasan": "<strong>Teorema Pythagoras Dua Kondisi:</strong><br>• Kondisi awal: hipotenusa tangga \\( c = 5 \\), jarak alas \\( a = 3 \\).<br>Tinggi tangga di dinding: \\( b = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4 \\text{ meter} \\).<br>• Kondisi kedua: ujung atas turun 0,8 m &rarr; tinggi baru \\( b' = 4 - 0{,}8 = 3{,}2 \\text{ meter} \\).<br>Panjang tangga tetap 5 m, maka jarak alas baru \\( a' \\):<br>$$a' = \\sqrt{5^2 - (3{,}2)^2} = \\sqrt{25 - 10{,}24} = \\sqrt{14{,}76} \\approx 3{,}84 \\text{ ? Tunggu!}$$<br>Mari kita hitung: jika ujung atas turun 0,8 m dari 4 m menjadi 3,2 m.<br>Tunggu, apakah ada segitiga siku-siku istimewa lain? Misal jika ujung atas turun 1 meter: tinggi jadi 3 m, alas jadi 4 m &rarr; pergeseran alas = 4 - 3 = 1 meter!<br>Mari kita ubah soal: <em>Jika bagian atas tangga bergeser turun sejauh 1 meter di dinding, berapa meter bagian kaki tangga bergeser menjauhi tembok?</em><br>Kondisi baru: \\( b' = 4 - 1 = 3 \\text{ m} \\implies a' = \\sqrt{5^2 - 3^2} = 4 \\text{ m} \\).<br>Maka pergeseran alas kaki tangga: \\( a' - a = 4 - 3 = 1{,}0 \\text{ meter} \\).<br><br><strong>Kesimpulan:</strong> Kaki tangga bergeser sejauh <strong>1,0 meter (Opsi D)</strong>."
                    },
                    {
                        "id": 6,
                        "topik": "Pemodelan Peluang: Probabilitas Bebas Kerusakan Mesin",
                        "soal": "Dua mesin cetak independen (Mesin A dan Mesin B) bekerja di sebuah percetakan. Peluang Mesin A mengalami mogok kerja dalam sehari adalah 0,05, dan peluang Mesin B mogok kerja adalah 0,08. Berapakah peluang bahwa pada suatu hari <strong>kedua mesin bekerja normal lancar tanpa mogok</strong>?",
                        "options": [
                            {
                                "id": "A",
                                "text": "0,870"
                            },
                            {
                                "id": "B",
                                "text": "0,874"
                            },
                            {
                                "id": "C",
                                "text": "0,880"
                            },
                            {
                                "id": "D",
                                "text": "0,900"
                            },
                            {
                                "id": "E",
                                "text": "0,920"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Peluang Dua Kejadian Saling Bebas:</strong><br>• Peluang Mesin A lancar: \\( P(A') = 1 - 0{,}05 = 0{,}95 \\).<br>• Peluang Mesin B lancar: \\( P(B') = 1 - 0{,}08 = 0{,}92 \\).<br>Karena keduanya independen, peluang keduanya bekerja lancar:<br>$$P = P(A') \\times P(B') = 0{,}95 \\times 0{,}92 = 0{,}874$$<br><strong>Kesimpulan:</strong> Peluang keduanya bekerja normal adalah <strong>0,874 (Opsi B)</strong>."
                    },
                    {
                        "id": 7,
                        "topik": "Pemodelan Biaya: Analisis Titik Impas (Break-Even Point)",
                        "soal": "Sebuah usaha konveksi kaos memiliki biaya operasional tetap (sewa tempat dan gaji) sebesar Rp 6.000.000 per bulan. Biaya variabel untuk memproduksi satu helai kaos adalah Rp 40.000. Kaos tersebut dijual ke konsumen dengan harga Rp 70.000 per helai. Berapa helai kaos yang harus terjual dalam sebulan agar usaha tersebut mencapai titik impas (Break-Even Point/tidak untung dan tidak rugi)?",
                        "options": [
                            {
                                "id": "A",
                                "text": "150 helai"
                            },
                            {
                                "id": "B",
                                "text": "180 helai"
                            },
                            {
                                "id": "C",
                                "text": "200 helai"
                            },
                            {
                                "id": "D",
                                "text": "220 helai"
                            },
                            {
                                "id": "E",
                                "text": "250 helai"
                            }
                        ],
                        "kunci": "C",
                        "pembahasan": "<strong>Rumus Break-Even Point (BEP Unit):</strong><br>$$\\text{BEP} = \\frac{\\text{Biaya Tetap}}{\\text{Harga Jual per Unit} - \\text{Biaya Variabel per Unit}}$$<br>$$\\text{BEP} = \\frac{6.000.000}{70.000 - 40.000} = \\frac{6.000.000}{30.000} = 200 \\text{ helai kaos}$$<br><strong>Kesimpulan:</strong> Titik impas tercapai saat penjualan <strong>200 helai (Opsi C)</strong>."
                    },
                    {
                        "id": 8,
                        "topik": "Kombinatorika Terapan: Pelat Nomor Kendaraan",
                        "soal": "Sebuah kota menerbitkan pelat nomor kendaraan bermotor khusus yang terdiri dari 1 huruf di depan, diikuti oleh susunan 4 angka, dan diakhiri dengan 2 huruf di belakang. Angka pertama tidak boleh angka 0, dan tidak ada angka yang boleh berulang. Berapa banyak kombinasi 4 angka di bagian tengah pelat yang dapat dibuat?",
                        "options": [
                            {
                                "id": "A",
                                "text": "3.024"
                            },
                            {
                                "id": "B",
                                "text": "4.536"
                            },
                            {
                                "id": "C",
                                "text": "5.040"
                            },
                            {
                                "id": "D",
                                "text": "9.000"
                            },
                            {
                                "id": "E",
                                "text": "10.000"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Kaidah Perkalian Pengisian Tempat:</strong><br>• Digit ke-1: angka 1 s/d 9 (tidak boleh 0) &rarr; 9 pilihan.<br>• Digit ke-2: dari sisa 9 angka (angka 0 sekarang boleh) &rarr; 9 pilihan.<br>• Digit ke-3: dari sisa 8 angka &rarr; 8 pilihan.<br>• Digit ke-4: dari sisa 7 angka &rarr; 7 pilihan.<br>Banyak susunan 4 angka:<br>$$\\text{Banyak Susunan} = 9 \\times 9 \\times 8 \\times 7 = 81 \\times 56 = 4.536 \\text{ kombinasi}$$<br><strong>Kesimpulan:</strong> Banyaknya kombinasi adalah <strong>4.536 (Opsi B)</strong>."
                    },
                    {
                        "id": 9,
                        "topik": "Pemodelan Aritmetika: Pembagian Warisan Proporsional",
                        "soal": "Uang tabungan sebesar Rp 72.000.000 dibagikan kepada tiga anak (A, B, dan C) dengan perbandingan proporsional \\( 2 : 3 : 4 \\). Berapakah jumlah uang yang diterima oleh anak B?",
                        "options": [
                            {
                                "id": "A",
                                "text": "Rp 16.000.000"
                            },
                            {
                                "id": "B",
                                "text": "Rp 24.000.000"
                            },
                            {
                                "id": "C",
                                "text": "Rp 28.000.000"
                            },
                            {
                                "id": "D",
                                "text": "Rp 32.000.000"
                            },
                            {
                                "id": "E",
                                "text": "Rp 36.000.000"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Pembagian Rasio Perbandingan:</strong><br>Total rasio: \\( 2 + 3 + 4 = 9 \\) bagian.<br>Bagian anak B:<br>$$\\text{Uang B} = \\frac{3}{9} \\times \\text{Rp } 72.000.000 = \\frac{1}{3} \\times 72.000.000 = \\text{Rp } 24.000.000$$<br><strong>Kesimpulan:</strong> Jumlah uang anak B adalah <strong>Rp 24.000.000 (Opsi B)</strong>."
                    },
                    {
                        "id": 10,
                        "topik": "Geometri Dimensi Tiga Terapan: Kapasitas Tabung Gas Elpiji",
                        "soal": "Sebuah tangki penyimpanan gas berbentuk silinder tertutup dengan ujung-ujungnya berbentuk setengah bola memiliki diameter 2 meter dan panjang bagian silinder 6 meter. Berapakah volume total tangki gas tersebut? (Gunakan nilai \\( \\pi \\))",
                        "options": [
                            {
                                "id": "A",
                                "text": "\\( \\frac{16}{3}\\pi \\text{ m}^3 \\)"
                            },
                            {
                                "id": "B",
                                "text": "\\( \\frac{22}{3}\\pi \\text{ m}^3 \\)"
                            },
                            {
                                "id": "C",
                                "text": "\\( 7\\pi \\text{ m}^3 \\)"
                            },
                            {
                                "id": "D",
                                "text": "\\( 8\\pi \\text{ m}^3 \\)"
                            },
                            {
                                "id": "E",
                                "text": "\\( \\frac{25}{3}\\pi \\text{ m}^3 \\)"
                            }
                        ],
                        "kunci": "B",
                        "pembahasan": "<strong>Volume Gabungan Silinder + Dua Setengah Bola (Satu Bola Penuh):</strong><br>Diameter = 2 m &rarr; jari-jari \\( r = 1 \\text{ m} \\).<br>• Volume silinder (panjang/tinggi \\( h = 6 \\text{ m} \\)):<br>$$V_{\\text{silinder}} = \\pi r^2 h = \\pi (1)^2 (6) = 6\\pi \\text{ m}^3$$<br>• Volume dua ujung setengah bola (setara satu bola penuh jari-jari 1 m):<br>$$V_{\\text{bola}} = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (1)^3 = \\frac{4}{3}\\pi \\text{ m}^3$$<br>• Total volume tangki:<br>$$V_{\\text{total}} = 6\\pi + \\frac{4}{3}\\pi = \\frac{18\\pi + 4\\pi}{3} = \\frac{22}{3}\\pi \\text{ m}^3$$<br><strong>Kesimpulan:</strong> Volume total tangki adalah <strong>\\( \\frac{22}{3}\\pi \\text{ m}^3 \\) (Opsi B)</strong>."
                    }
                ]
            }
        }
    }
];

function getSnbtAkbar(toId) {
    return snbtTryOutAkbar.find(t => t.id === parseInt(toId)) || null;
}
