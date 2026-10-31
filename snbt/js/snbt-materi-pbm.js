// =========================================================================
// DATA MATERI & MINI-GAME SNBT 2026 — SUBTES 2: PEMAHAMAN BACAAN & MENULIS (PBM)
// Total: 16 Sub-Materi × 3 Soal Game = 48 Soal Khusus Mini-Game
// Hadiah Maksimal per Sub-Materi: Rp 400 (Skor 3/3)
// =========================================================================

window.SNBT_MATERI_REGISTRY = window.SNBT_MATERI_REGISTRY || {};

window.SNBT_MATERI_REGISTRY["pbm"] = {
    id: "pbm",
    nama: "Pemahaman Bacaan & Menulis (PBM)",
    icon: "✍️",
    color: "cyan",
    rewardPerSub: 400,
    submateri: [
        // =====================================================================
        // KATEGORI 0: EJAAN & TATA TULIS (EYD V) (3 SUB-MATERI)
        // =====================================================================
        {
            key: "pbm_0_0",
            kategori: "Ejaan & Tata Tulis (EYD V)",
            judul: "Huruf Kapital dan Ejaan Resmi (EYD V)",
            ringkasan: `
                <p>Dalam <strong>EYD Edisi V</strong>, penggunaan huruf kapital dan huruf miring sering menjadi jebakan di UTBK karena siswa terkecoh antara nama diri (spesifik) dan nama jenis/umum.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konteks</th>
                                <th class="p-2 border border-slate-200 text-left">Huruf Kapital (Nama Diri/Spesifik)</th>
                                <th class="p-2 border border-slate-200 text-left">Huruf Kecil (Umum / Nama Jenis)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Geografi</td>
                                <td class="p-2">Diikuti nama: <strong>Sungai</strong> Kapuas, <strong>Pulau</strong> Bali, <strong>Selat</strong> Sunda</td>
                                <td class="p-2">Tanpa nama / nama jenis kuliner-flora: menyeberangi <strong>sungai</strong>, jeruk <strong>bali</strong>, gula <strong>jawa</strong>, petai <strong>cina</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Gelar & Jabatan</td>
                                <td class="p-2">Diikuti nama orang/tempat: <strong>Gubernur</strong> Jawa Barat, <strong>Profesor</strong> Supomo</td>
                                <td class="p-2">Tanpa nama: dilantik menjadi <strong>gubernur</strong>, seorang <strong>profesor</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Bangsa & Bahasa</td>
                                <td class="p-2">Nama bangsa/bahasa saja: bahasa <strong>Indonesia</strong>, suku <strong>Minangkabau</strong></td>
                                <td class="p-2">Mendapat awalan <em>ke-</em> dan akhiran <em>-an</em>: <strong>keinggris-inggrisan</strong>, <strong>mengindonesiakan</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Sapaan & Kekerabatan</td>
                                <td class="p-2">Dipakai menyapa/mengacu: "Kapan <strong>Bapak</strong> berangkat?", "Silakan duduk, <strong>Kak</strong>!"</td>
                                <td class="p-2">Kata ganti umum: Kami menghormati <strong>bapak</strong> dan <strong>ibu</strong> kami.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Trik Cepat Huruf Miring (Italics):</strong> Dipakai untuk (1) judul buku/jurnal/surat kabar/film/album yang berdiri sendiri, (2) kata/ungkapan bahasa asing atau daerah yang belum diserap, dan (3) nama ilmiah (<em>Oryza sativa</em>). <strong>Nama lembaga/organisasi asing TIDAK dimiringkan</strong> (contoh: World Health Organization, bukan <em>World Health Organization</em>).
                </div>
            `,
            contoh: {
                soal: "Manakah penulisan kalimat yang sesuai dengan kaidah EYD V? (A) Ibu membeli bika Ambon dan pisang Ambon di Pasar Minggu. (B) Ibu membeli bika ambon dan pisang ambon di Pasar Minggu.",
                langkah: "'bika ambon' dan 'pisang ambon' adalah nama jenis makanan/buah (bukan geografi), sehingga kata 'ambon' ditulis huruf kecil. Sedangkan 'Pasar Minggu' adalah nama tempat spesifik di Jakarta sehingga ditulis kapital. Jawaban tepat: (B)."
            },
            gameQuestions: [
                {
                    q: "Manakah kalimat di bawah ini yang penggunaan huruf kapitalnya PALING TEPAT menurut EYD Edisi V?",
                    opts: [
                        "Gubernur yang baru dilantik itu meninjau kawasan Sungai Mahakam sambil mencicipi jeruk Bali.",
                        "Gubernur Kalimantan Timur meninjau kawasan Sungai Mahakam sambil mencicipi jeruk bali.",
                        "Gubernur Kalimantan Timur meninjau kawasan sungai Mahakam sambil mencicipi jeruk bali.",
                        "gubernur Kalimantan Timur meninjau kawasan Sungai Mahakam sambil mencicipi Jeruk Bali."
                    ],
                    ans: 1,
                    exp: "'Gubernur Kalimantan Timur' (jabatan diikuti nama daerah = kapital), 'Sungai Mahakam' (geografi diikuti nama = kapital), dan 'jeruk bali' (nama jenis buah = kecil semua)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Gaya hidup yang kebarat-baratan membuat pemuda dari Suku Jawa itu lupa cara berbahasa Jawa dengan santun.' Perbaikan ejaan yang tepat pada kalimat tersebut adalah...",
                    opts: [
                        "Kata 'kebarat-baratan' seharusnya ditulis 'keBarat-Baratan'.",
                        "Frasa 'Suku Jawa' seharusnya ditulis 'suku Jawa'.",
                        "Frasa 'berbahasa Jawa' seharusnya ditulis 'Berbahasa Jawa'.",
                        "Frasa 'Suku Jawa' seharusnya ditulis 'suku jawa'."
                    ],
                    ans: 1,
                    exp: "Kata 'suku', 'bangsa', dan 'bahasa' ditulis dengan huruf awal kecil, sedangkan nama sukunya ('Jawa') ditulis dengan huruf awal kapital: 'suku Jawa'."
                },
                {
                    q: "Penulisan huruf miring (italics) di bawah ini yang TIDAK sesuai dengan kaidah EYD V adalah...",
                    opts: [
                        "Penelitian itu mengkaji khasiat ekstrak daun sambiloto (*Andrographis paniculata*).",
                        "Artikel tersebut telah dimuat dalam majalah *Bahasawan Muda* edisi terbaru.",
                        "Indonesia resmi bekerja sama dengan *Association of Southeast Asian Nations* dalam bidang pendidikan.",
                        "Istilah *weltanschauung* sering diterjemahkan sebagai pandangan dunia."
                    ],
                    ans: 2,
                    exp: "Nama diri lembaga, badan, atau organisasi dalam bahasa asing TIDAK ditulis dengan huruf miring (seharusnya tegak: Association of Southeast Asian Nations)."
                },
                {
                    q: "Manakah kalimat berikut yang menggunakan huruf kapital pada kata kekerabatan/sapaan secara TEPAT?",
                    opts: [
                        "\"Kapan saudara akan menyerahkan berkas lamaran itu kepada Bapak Dekan?\" tanya petugas.",
                        "Seluruh mahasiswa baru wajib menghormati Bapak dan Ibu dosen di lingkungan kampus.",
                        "\"Silakan duduk di ruang tunggu terlebih dahulu, Bu,\" ucap perawat itu dengan ramah.",
                        "Kami berencana mengunjungi rumah Paman dan Bibi di Yogyakarta pada liburan semester ini."
                    ],
                    ans: 2,
                    exp: "Kata kekerabatan 'Bu' pada opsi C digunakan sebagai kata sapaan langsung, sehingga wajib diawali huruf kapital. Pada opsi A, 'saudara' adalah sapaan sehingga seharusnya 'Saudara'; pada opsi B dan D, 'bapak/ibu' dan 'paman/bibi' bukan sapaan langsung serta tidak diikuti nama diri sehingga ditulis huruf kecil."
                },
                {
                    q: "Penulisan nama geografi dan nama jenis di bawah ini yang SELURUHNYA BENAR menurut EYD V adalah...",
                    opts: [
                        "kacang Bogor, garam Inggris, Teluk Persia, Danau Toba",
                        "kacang bogor, garam inggris, Teluk Persia, Danau Toba",
                        "kacang bogor, garam inggris, teluk Persia, danau Toba",
                        "Kacang Bogor, Garam Inggris, Teluk Persia, Danau Toba"
                    ],
                    ans: 1,
                    exp: "'kacang bogor' dan 'garam inggris' merupakan nama jenis (bukan merujuk lokasi geografis), sehingga ditulis dengan huruf kecil. Sementara itu, 'Teluk Persia' dan 'Danau Toba' adalah nama diri geografi sehingga diawali huruf kapital."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Setiap Hari Jumat, Presiden mengadakan rapat terbatas bersama para Menteri di Istana Merdeka.' Kata-kata yang seharusnya ditulis dengan huruf awal KECIL pada kalimat tersebut adalah...",
                    opts: [
                        "Hari dan Menteri",
                        "Hari, Jumat, dan Menteri",
                        "Presiden dan Menteri",
                        "Hari dan Istana"
                    ],
                    ans: 0,
                    exp: "Kata 'hari' sebelum nama hari ('hari Jumat') dan kata jabatan 'menteri' yang tidak diikuti nama orang/instansi ('para menteri') ditulis dengan huruf kecil. Kata 'Presiden' dapat dikapitalkan bila mengacu pada pejabat tertentu yang spesifik dalam konteks kalimat, dan 'Istana Merdeka' adalah nama diri gedung."
                },
                {
                    q: "Penulisan judul karya ilmiah dalam kalimat berikut yang sesuai dengan kaidah EYD V adalah...",
                    opts: [
                        "Ia menulis makalah berjudul *Peran Generasi Muda Dalam Pelestarian Bahasa Daerah Di Kalimantan*.",
                        "Ia menulis makalah berjudul \"Peran Generasi Muda dalam Pelestarian Bahasa Daerah di Kalimantan\".",
                        "Ia menulis makalah berjudul \"Peran Generasi Muda Dalam Pelestarian Bahasa Daerah Di Kalimantan\".",
                        "Ia menulis makalah berjudul *Peran Generasi Muda dalam Pelestarian Bahasa Daerah di Kalimantan*."
                    ],
                    ans: 1,
                    exp: "Judul makalah, artikel, puisi, atau bab buku yang merupakan bagian dari suatu kumpulan/terbitan diapit tanda petik dua (\"...\"), bukan dimiringkan, serta preposisi ('dalam', 'di') di tengah judul ditulis dengan huruf kecil."
                },
                {
                    q: "Manakah kalimat yang penulisan huruf kapital pada nama peristiwa sejarah dan ketuhanan di bawah ini PALING TEPAT?",
                    opts: [
                        "Peristiwa Proklamasi Kemerdekaan Indonesia merupakan rahmat dari Tuhan Yang Maha Kuasa.",
                        "Perang Dunia II membawa dampak besar terhadap terjadinya Konferensi Asia Afrika di Bandung.",
                        "Para pahlawan berjuang mempertahankan kemerdekaan pada peristiwa perang Padri di Sumatra Barat.",
                        "Kita patut bersyukur kepada Tuhan yang Maha Pengasih atas limpahan karunia-Nya."
                    ],
                    ans: 1,
                    exp: "Huruf pertama nama peristiwa sejarah ('Perang Dunia II', 'Konferensi Asia Afrika') ditulis dengan huruf kapital. Opsi A salah karena seharusnya 'Mahakuasa' (serangkai); Opsi C salah karena seharusnya 'Perang Padri'; Opsi D salah karena seharusnya 'Tuhan Yang Maha Pengasih' ('Yang' kapital)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Peneliti dari Lembaga Biologi Molekuler Eijkman sedang meneliti mutasi virus Dengue pada nyamuk *Aedes Aegypti*.' Kesalahan penerapan ejaan pada kalimat tersebut terletak pada...",
                    opts: [
                        "Penulisan 'Lembaga Biologi Molekuler Eijkman' yang seharusnya dimiringkan.",
                        "Penulisan '*Aedes Aegypti*' yang seharusnya ditulis '*Aedes aegypti*'.",
                        "Penulisan 'mutasi virus' yang seharusnya diawali huruf kapital.",
                        "Penulisan 'nyamuk' yang seharusnya ditulis 'Nyamuk'."
                    ],
                    ans: 1,
                    exp: "Dalam tata nama ilmiah (binomial nomenklatur), kata pertama (genus) diawali huruf kapital (*Aedes*), sedangkan kata kedua (penunjuk spesies) wajib ditulis dengan huruf kecil (*aegypti*) dan keduanya dicetak miring: *Aedes aegypti*."
                },
                {
                    q: "Manakah di antara kalimat berikut yang penulisan singkatan gelar dan sapaannya TEPAT menurut EYD V?",
                    opts: [
                        "Acara lokakarya nasional itu dibuka secara resmi oleh Prof. Dr. Hendra Wijaya, M.Sc..",
                        "Surat rekomendasi penelitian tersebut ditandatangani oleh dr. Kartika Sari, Sp.A.",
                        "Kami mengucapkan terima kasih atas bantuan Sdr. Budi Santoso, S.H, M.H.",
                        "Permohonan izin cuti itu ditujukan kepada Yth. Bapak Ir. Lukman Hakim, M.T."
                    ],
                    ans: 1,
                    exp: "'dr. Kartika Sari, Sp.A.' ditulis dengan tepat. Opsi A salah karena tanda titik di akhir singkatan gelar tidak dirangkap dengan titik akhir kalimat ('M.Sc.'); Opsi C salah karena kurang titik setelah 'S.H.'; Opsi D salah karena 'Yth.' tidak diikuti sapaan 'Bapak' jika sudah ada gelar akademik 'Ir.'."
                }
            ]
        },
        {
            key: "pbm_0_1",
            kategori: "Ejaan & Tata Tulis (EYD V)",
            judul: "Pemakaian Tanda Baca (Titik, Koma, Titik Dua, dll.)",
            ringkasan: `
                <p>Soal tanda baca di PBM hampir selalu menguji <strong>tanda koma (,)</strong>, <strong>titik koma (;)</strong>, <strong>titik dua (:)</strong>, dan <strong>tanda hubung (-)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Aturan Tanda Koma (,)</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Benar</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Anak kalimat mendahului induk kalimat</td>
                                <td class="p-2"><strong>Karena hujan deras,</strong> pertandingan ditunda. <em>(Jika induk di depan, TIDAK pakai koma: Pertandingan ditunda karena hujan deras.)</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Konjungsi antarkalimat (di awal kalimat)</td>
                                <td class="p-2"><strong>Oleh karena itu,</strong> / <strong>Namun,</strong> / <strong>Akan tetapi,</strong> / <strong>Meskipun demikian,</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Sebelum konjungsi pertentangan & perincian &ge;3</td>
                                <td class="p-2">Ia rajin<strong>, tetapi</strong> adiknya malas. | Ibu membeli apel<strong>,</strong> jeruk<strong>, dan</strong> mangga.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Mengapit keterangan aposisi (tambahan)</td>
                                <td class="p-2">Soekarno<strong>, Presiden pertama RI,</strong> lahir di Surabaya.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                    <div class="font-bold text-amber-900">⚠️ Jebakan Koma di UTBK:</div>
                    <p><strong>JANGAN</strong> gunakan tanda koma sebelum kata <em>bahwa</em>, <em>karena</em>, <em>sehingga</em>, <em>agar</em>, <em>jika</em>, atau <em>meskipun</em> apabila klausa tersebut berada <strong>di belakang induk kalimat</strong>!</p>
                </div>
            `,
            contoh: {
                soal: "Manakah yang benar: 'Pemerintah menegaskan, bahwa subsidi tetap berjalan' atau 'Pemerintah menegaskan bahwa subsidi tetap berjalan'?",
                langkah: "Kata penghubung 'bahwa' adalah konjungsi penerang setelah verba transitif/kognitif. Tanda koma TIDAK digunakan sebelum 'bahwa'. Maka kalimat kedua yang benar."
            },
            gameQuestions: [
                {
                    q: "Manakah kalimat berikut yang menggunakan tanda koma (,) secara TEPAT?",
                    opts: [
                        "Para peneliti menyimpulkan, bahwa perubahan iklim mempercepat kepunahan terumbu karang.",
                        "Meskipun anggaran riset terbatas, tim mahasiswa itu berhasil merancang prototipe satelit mikro.",
                        "Petani mengalami gagal panen, karena kemarau panjang berlangsung lebih dari enam bulan.",
                        "Oleh karena itu pemerintah segera menyalurkan bantuan benih unggul ke daerah terdampak."
                    ],
                    ans: 1,
                    exp: "Anak kalimat ('Meskipun anggaran riset terbatas') mendahului induk kalimat, sehingga wajib dipisahkan dengan tanda koma. Opsi A dan C salah karena memakai koma sebelum 'bahwa'/'karena'; Opsi D salah karena tidak ada koma setelah 'Oleh karena itu'."
                },
                {
                    q: "Penggunaan tanda titik dua (:) yang TEPAT menurut kaidah EYD V terdapat pada kalimat...",
                    opts: [
                        "Kita memerlukan: kursi, meja, dan lemari untuk ruang rapat baru.",
                        "Kita memerlukan perabot ruang rapat berikut: kursi, meja, dan lemari.",
                        "Ibu membeli: bayam, wortel, dan tomat di pasar tradisional.",
                        "Peserta ujian wajib membawa: kartu peserta, identitas diri, dan alat tulis."
                    ],
                    ans: 1,
                    exp: "Tanda titik dua (:) dipakai pada akhir suatu pernyataan yang SUDAH LENGKAP (S-P-O: 'Kita memerlukan perabot ruang rapat berikut:') dan diikuti perincian. Titik dua tidak dipakai jika perincian langsung menjadi objek setelah predikat ('memerlukan:', 'membeli:', 'membawa:')."
                },
                {
                    q: "Penulisan tanda hubung (-) di bawah ini yang BENAR sesuai EYD V adalah...",
                    opts: [
                        "Perlombaan cerdas cermat itu diikuti oleh siswa seIndonesia.",
                        "Ulang tahun ke-79 Republik Indonesia dirayakan dengan meriah di seluruh daerah.",
                        "Banyak pelaku usaha mikro yang mulai beralih ke transaksi non-tunai.",
                        "Seminar nasional itu membahas kerja sama antar-negara di kawasan Asia Tenggara."
                    ],
                    ans: 1,
                    exp: "Tanda hubung dipakai untuk merangkai 'ke-' dengan angka ('ke-79'). Bentuk terikat 'nontunai' dan 'antarnegara' ditulis serangkai tanpa tanda hubung, sedangkan 'se-Indonesia' wajib memakai tanda hubung karena diikuti huruf kapital."
                },
                {
                    q: "Perhatikan kalimat berikut: 'B.J. Habibie Presiden ketiga RI dikenal sebagai pakar konstruksi pesawat terbang kelas dunia.' Perbaikan tanda baca yang paling tepat pada kalimat tersebut adalah...",
                    opts: [
                        "Menambahkan tanda koma setelah kata 'RI' saja.",
                        "Mengapit frasa 'Presiden ketiga RI' dengan dua tanda koma.",
                        "Menambahkan tanda titik dua setelah 'B.J. Habibie'.",
                        "Menambahkan tanda koma sebelum kata 'sebagai'."
                    ],
                    ans: 1,
                    exp: "Frasa 'Presiden ketiga RI' merupakan keterangan aposisi (keterangan tambahan yang menjelaskan subjek 'B.J. Habibie'), sehingga wajib diapit oleh dua tanda koma: 'B.J. Habibie, Presiden ketiga RI, dikenal...'."
                },
                {
                    q: "Manakah kalimat berikut yang menggunakan tanda titik koma (;) secara TEPAT?",
                    opts: [
                        "Ibu membeli buku, pensil, dan tinta; baju, celana, dan kaus; serta pisang, apel, dan jeruk.",
                        "Karena jalanan sangat macet; para penumpang memutuskan turun di halte terdekat.",
                        "Mahasiswa itu sangat rajin membaca; tetapi ia jarang mengikuti kegiatan organisasi.",
                        "Pemerintah membangun berbagai infrastruktur; seperti jembatan, bendungan, dan pelabuhan."
                    ],
                    ans: 0,
                    exp: "Tanda titik koma (;) digunakan untuk memisahkan bagian-bagian pemerincian yang di dalamnya sudah mengandung tanda koma (pengelompokan jenis barang). Opsi B, C, dan D seharusnya menggunakan tanda koma."
                },
                {
                    q: "Penggunaan tanda pisah (—) yang sesuai dengan kaidah EYD V terdapat pada kalimat...",
                    opts: [
                        "Keberhasilan proyek itu—saya yakin sepenuhnya—akan meningkatkan kesejahteraan nelayan lokal.",
                        "Kereta api eksekutif jurusan Jakarta—Surabaya berangkat tepat pukul delapan pagi.",
                        "Acara pameran teknologi tersebut akan berlangsung pada tanggal 10—15 November 2026.",
                        "Semua jawaban di atas (A, B, dan C) menggunakan tanda pisah secara tepat."
                    ],
                    ans: 3,
                    exp: "Menurut EYD V, tanda pisah (—) memiliki dua fungsi utama: (1) mengapit keterangan atau penjelasan yang bukan bagian utama kalimat, dan (2) menyatakan arti 'sampai dengan' atau 'sampai ke' di antara dua bilangan, tanggal, atau nama tempat. Ketiga kalimat A, B, dan C semuanya benar."
                },
                {
                    q: "Manakah penulisan bilangan dan lambang mata uang dengan tanda baca yang TEPAT menurut EYD V?",
                    opts: [
                        "Dana bantuan sosial sebesar Rp. 1.500.000,00 telah disalurkan kepada 2.500 kepala keluarga.",
                        "Dana bantuan sosial sebesar Rp1.500.000,00 telah disalurkan kepada 2.500 kepala keluarga.",
                        "Dana bantuan sosial sebesar Rp1.500.000,- telah disalurkan kepada 2500 kepala keluarga.",
                        "Dana bantuan sosial sebesar Rp 1,500,000.00 telah disalurkan kepada 2.500 kepala keluarga."
                    ],
                    ans: 1,
                    exp: "Lambang mata uang 'Rp' ditulis tanpa tanda titik dan tanpa spasi sebelum angka ('Rp1.500.000,00'), menggunakan tanda titik sebagai pemisah ribuan, serta tanda koma untuk desimal/sen (bukan ',-')."
                },
                {
                    q: "Perhatikan kalimat langsung berikut: 'Kita harus segera menghemat penggunaan air bersih, ujar Kepala Desa kepada warga.' Perbaikan tanda baca pada kalimat langsung tersebut yang tepat adalah...",
                    opts: [
                        "\"Kita harus segera menghemat penggunaan air bersih\", ujar Kepala Desa kepada warga.",
                        "\"Kita harus segera menghemat penggunaan air bersih,\" ujar Kepala Desa kepada warga.",
                        "\"Kita harus segera menghemat penggunaan air bersih.\" ujar Kepala Desa kepada warga.",
                        "\"Kita harus segera menghemat penggunaan air bersih,\" Ujar Kepala Desa kepada warga."
                    ],
                    ans: 1,
                    exp: "Dalam petikan langsung yang diikuti pengiring, tanda koma diletakkan DI DALAM tanda petik penutup sebelum kata kerja pengiring ('ujar' ditulis dengan huruf awal kecil): \"...air bersih,\" ujar Kepala Desa..."
                },
                {
                    q: "Dalam penulisan daftar pustaka atau catatan kaki, manakah penggunaan tanda titik (.) pada singkatan atau angka waktu yang TIDAK TEPAT?",
                    opts: [
                        "Seminar daring tersebut dimulai pada pukul 08.30.00 WIB.",
                        "Sebanyak 12.450 peserta telah mendaftarkan diri melalui laman resmi panitia.",
                        "Pada tahun 1.998 terjadi krisis moneter yang mengguncang perekonomian Asia.",
                        "Lihat hlm. 45—48 pada buku panduan praktikum kimia dasar."
                    ],
                    ans: 2,
                    exp: "Tanda titik TIDAK digunakan untuk memisahkan bilangan ribuan yang tidak menunjukkan jumlah, seperti tahun ('tahun 1998'), nomor halaman, kode pos, atau nomor telepon."
                },
                {
                    q: "Manakah kalimat yang penulisan tanda hubung (-) pada kata ulang atau gabungannya SALAH menurut EYD V?",
                    opts: [
                        "Petugas memverifikasi KTP-el milik warga satu per satu.",
                        "Para ilmuwan se-Asia Tenggara berkumpul dalam konferensi perubahan iklim tersebut.",
                        "Keluarga besar itu saling bersalam-salaman setelah selesai melaksanakan salat Id.",
                        "Bantuan logistik dikirimkan ke daerah-daerah terpencil yang terdampak gempa."
                    ],
                    ans: 2,
                    exp: "Selain bersifat pleonasme ('saling bersalam-salaman'), bentuk ulang yang tepat jika sudah memakai kata 'saling' adalah kata berimbuhan tunggal 'saling bersalaman' (atau 'bersalam-salaman' tanpa kata 'saling')."
                }
            ]
        },
        {
            key: "pbm_0_2",
            kategori: "Ejaan & Tata Tulis (EYD V)",
            judul: "Makna dan Fungsi Imbuhan (Afiksasi)",
            ringkasan: `
                <p><strong>Afiksasi (pengimbuhan)</strong> mencakup prefiks (awalan), sufiks (akhiran), infiks (sisipan), dan konfiks (imbuhan gabung). Fokus utama UTBK adalah <strong>hukum peluluhan KPTS</strong> dan <strong>kesepadanan makna imbuhan</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Kaidah KPTS</th>
                                <th class="p-2 border border-slate-200 text-left">Aturan</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Baku</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">KPTS + Vokal &rarr; LULUH</td>
                                <td class="p-2">Huruf pertama K, P, T, S diikuti huruf vokal (a, i, u, e, o) <strong>luluh</strong> saat diberi <em>meN-</em> / <em>peN-</em></td>
                                <td class="p-2">memesona (pesona), memengaruhi (pengaruh), mengubah (ubah - bukan rubah!), menerapkan (terap), menyukseskan (sukses)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">KPTS + Konsonan &rarr; TIDAK LULUH</td>
                                <td class="p-2">Gugus konsonan (kr-, pr-, tr-, kl-, sp-, st-) <strong>tidak luluh</strong> (kecuali pada <em>peN-</em> untuk kata dasar mulai P seperti <em>pemrogram, pemrakarsa, pemrosesan</em>)</td>
                                <td class="p-2">mengkritik, memproduksi, memprogram, mentransfer, menstabilkan</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Pengecualian Kaji & Punya</td>
                                <td class="p-2">Khusus <em>mengkaji</em> (meneliti) dan <em>mempunyai</em> tidak luluh</td>
                                <td class="p-2">mengkaji (meneliti mendalam) vs mengaji (membaca Al-Qur'an)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Kata berimbuhan pada kalimat 'Keindahan alam Raja Ampat sangat memesona wisatawan' memiliki proses pembentukan yang tepat karena...",
                langkah: "Kata dasarnya adalah 'pesona' (diawali huruf P diikuti vokal e). Ketika bertemu prefiks meN-, huruf P luluh menjadi m: meN- + pesona = memesona (bukan mempesona)."
            },
            gameQuestions: [
                {
                    q: "Manakah deretan kata berimbuhan di bawah ini yang SELURUHNYA ditulis secara baku sesuai kaidah peluluhan KPTS?",
                    opts: [
                        "mempengaruhi, mempesona, mengkritik, mensukseskan",
                        "memengaruhi, memesona, mengkritik, menyukseskan",
                        "memengaruhi, memesona, menkritik, menyukseskan",
                        "mempengaruhi, memesona, mengeritik, memproduksi"
                    ],
                    ans: 1,
                    exp: "pesona -> memesona (p+vokal luluh); pengaruh -> memengaruhi (p+vokal luluh); kritik -> mengkritik (kr- gugus konsonan tidak luluh); sukses -> menyukseskan (s+vokal luluh)."
                },
                {
                    q: "Makna imbuhan peN-...-an pada kata 'pemukiman' dalam kalimat 'Pemerintah melakukan pemukiman kembali warga terdampak erupsi' sama dengan makna imbuhan pada kata...",
                    opts: [
                        "perumahan (kumpulan rumah)",
                        "pegunungan (daerah bergunung-gunung)",
                        "penanaman (proses/tindakan menanam)",
                        "pedesaan (wilayah desa)"
                    ],
                    ans: 2,
                    exp: "'Pemukiman' (dari memukimkan) bermakna proses/cara/perbuatan memukimkan, sejajar dengan 'penanaman' (proses menanam). Adapun tempat untuk bermukim disebut 'permukiman' (dari bermukim)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Pihak manajemen sedang memproses laporan keuangan untuk mengkaji faktor-faktor yang merubah target laba tahunan.' Kata berimbuhan yang TIDAK BAKU dalam kalimat tersebut adalah...",
                    opts: [
                        "memproses (seharusnya memroses)",
                        "keuangan (seharusnya ke-uangan)",
                        "mengkaji (seharusnya mengaji)",
                        "merubah (seharusnya mengubah)"
                    ],
                    ans: 3,
                    exp: "Kata dasarnya adalah 'ubah' (bukan 'rubah', karena rubah adalah nama hewan). Imbuhan meN- + ubah menghasilkan bentuk baku 'mengubah'."
                },
                {
                    q: "Manakah pasangan kata berimbuhan meN- dan peN- dari kata dasar bergugus konsonan 'p' berikut yang KEDUANYA BAKU menurut KBBI?",
                    opts: [
                        "memprakarsai — pemrakarsa",
                        "memrakarsai — pemprakarsa",
                        "memprogram — pemprogram",
                        "memroses — pemprosesan"
                    ],
                    ans: 0,
                    exp: "Untuk kata dasar yang diawali gugus konsonan 'pr-' (prakarsa, produksi, program, proses), huruf 'p' TIDAK luluh saat diberi awalan meN- (memprakarsai, memproduksi, memprogram, memproses), tetapi LULUH saat diberi awalan peN- (pemrakarsa, pemroduksi, pemrogram, pemrosesan)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Warga desa bergotong royong melebarkan jalan setapak agar mobil ambulans dapat masuk.' Makna imbuhan meN-...-kan pada kata 'melebarkan' adalah...",
                    opts: [
                        "Melakukan pekerjaan untuk orang lain (benefaktif)",
                        "Membuat jadi lebih lebar (kausatif)",
                        "Menganggap sebagai sesuatu yang lebar",
                        "Menuju ke arah yang lebar"
                    ],
                    ans: 1,
                    exp: "Konfiks meN-...-kan yang melekat pada kata dasar sifat ('lebar') membentuk verba kausatif yang bermakna 'menyebabkan atau membuat jadi (lebih) lebar'."
                },
                {
                    q: "Penulisan kata berimbuhan dengan kata dasar bersuku kata satu di bawah ini yang SELURUHNYA BAKU adalah...",
                    opts: [
                        "mensahkan, mengecat, mengelap, mengebom",
                        "mengesahkan, mengecat, mengelap, mengebom",
                        "mengesahkan, mencat, melap, membom",
                        "mensahkan, mencat, mengelap, mengebom"
                    ],
                    ans: 1,
                    exp: "Kata dasar bersuku kata satu (sah, cat, lap, bom, las, tik) apabila mendapat awalan meN- akan berubah menjadi 'menge-': mengesahkan, mengecat, mengelap, mengebom, mengelas, mengetik."
                },
                {
                    q: "Perbedaan makna dan penggunaan yang tepat antara kata 'pewaris' dan 'ahli waris' maupun bentuk turunannya terlihat pada kaidah afiksasi kata 'petinju' dan 'peninju'. Manakah pernyataan yang BENAR?",
                    opts: [
                        "'Petinju' berasal dari 'bertinju' (orang yang profesinya bertinju), sedangkan 'peninju' berasal dari 'meninju' (orang yang meninju).",
                        "'Petinju' berasal dari 'meninju', sedangkan 'peninju' berasal dari 'bertinju'.",
                        "Kata 'peninju' tidak baku karena huruf 't' tidak boleh luluh.",
                        "Keduanya memiliki makna dan proses morfologis yang sama persis."
                    ],
                    ans: 0,
                    exp: "Prefiks pe- (tanpa peluluhan nasal, berkorelasi dengan verba 'ber-') menunjuk pelaku profesi/kebiasaan ('petinju' = atlet yang bertinju; 'pekerja' = orang yang bekerja), sedangkan peN- (dengan peluluhan nasal, berkorelasi dengan 'meN-') menunjuk pelaku tindakan aktif sesaat ('peninju' = orang yang meninju)."
                },
                {
                    q: "Manakah kalimat berikut yang menggunakan kata berimbuhan secara TEPAT dan BAKU?",
                    opts: [
                        "Para relawan sedang mensosialisasikan cara memilah sampah organik kepada warga.",
                        "Pabrik tekstil itu harus mentaati regulasi pengolahan limbah cair yang ditetapkan pemerintah.",
                        "Tim penyidik berhasil mengidentifikasi pelaku peretasan data nasabah bank tersebut.",
                        "Kementerian terkait terus mengkoordinasikan penyaluran beras cadangan pemerintah."
                    ],
                    ans: 2,
                    exp: "meN- + identifikasi -> mengidentifikasi (baku). Opsi A salah (seharusnya 'menyosialisasikan', s+vokal luluh); Opsi B salah (seharusnya 'menaati', t+vokal luluh); Opsi D salah (seharusnya 'mengoordinasikan', k+vokal luluh)."
                },
                {
                    q: "Imbuhan 'ber-...-an' pada kalimat 'Daun-daun kering berguguran tertiup angin kencang di halaman sekolah' memiliki makna yang SAMA dengan imbuhan 'ber-...-an' pada kalimat...",
                    opts: [
                        "Kedua sahabat lama itu berpelukan erat saat bertemu di bandara.",
                        "Rumah Sinta bersebelahan dengan kantor kelurahan yang baru dibangun.",
                        "Bintang-bintang bermunculan di langit malam yang cerah tanpa awan.",
                        "Para delegasi saling bersalaman seusai menandatangani nota kesepahaman."
                    ],
                    ans: 2,
                    exp: "'Berguguran' bermakna banyak pelaku yang melakukan perbuatan secara berulang/tak beraturan, sama dengan 'bermunculan' pada opsi C. Opsi A dan D bermakna resiprokal (saling), sedangkan opsi B bermakna berada di (lokatif/statif)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Pemerintah daerah berencana memperlebarkan jalan protokol guna mengurai kemacetan pada jam sibuk.' Mengapa bentuk kata 'memperlebarkan' pada kalimat tersebut salah?",
                    opts: [
                        "Karena kata dasar sifat (adjektiva) 'lebar' cukup diberi imbuhan 'memper-' (memperlebar) untuk bermakna membuat jadi lebih lebar, atau 'meN-...-kan' (melebarkan).",
                        "Karena huruf 'l' pada kata 'lebar' seharusnya luluh saat diberi imbuhan.",
                        "Karena kata 'lebar' termasuk kata benda sehingga tidak dapat diberi awalan 'memper-'.",
                        "Karena imbuhan 'memper-...-kan' tidak ada di dalam bahasa Indonesia."
                    ],
                    ans: 0,
                    exp: "Untuk kata dasar berupa kata sifat (lebar, besar, cepat, tinggi, indah), bentuk bakunya adalah 'memper-' + adjektiva ('memperlebar' = membuat jadi lebih lebar) atau 'meN-...-kan' ('melebarkan' = membuat jadi lebar). Penggabungan 'memperlebarkan' adalah kontaminasi morfologis yang tidak baku."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 1: KONJUNGSI DAN PARTIKEL (3 SUB-MATERI)
        // =====================================================================
        {
            key: "pbm_1_0",
            kategori: "Konjungsi dan Partikel",
            judul: "Preposisi (Kata Depan)",
            ringkasan: `
                <p><strong>Preposisi (kata depan)</strong> seperti <em>di</em>, <em>ke</em>, dan <em>dari</em> berfungsi menandai hubungan tempat, arah, atau waktu. Kesalahan paling sering di UTBK adalah tertukarnya <strong>kata depan <em>di</em> (dipisah)</strong> dengan <strong>awalan <em>di-</em> (dirangkai)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Bentuk</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Pengujian</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Preposisi (di / ke) &rarr; DIPISAH</td>
                                <td class="p-2">Menjawab pertanyaan <em>di mana / ke mana / kapan</em> (tempat, arah, waktu) & tidak bisa diubah ke aktif <em>meN-</em></td>
                                <td class="p-2"><strong>di samping</strong>, <strong>di antara</strong>, <strong>di luar</strong>, <strong>di dalam</strong>, <strong>ke luar</strong> (menuju luar), <strong>ke mari</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Prefiks (di- / ke-) &rarr; DIRANGKAI</td>
                                <td class="p-2">Verba pasif (bisa diubah menjadi <em>meN-</em>) atau kata benda/bilangan</td>
                                <td class="p-2"><strong>dikesampingkan</strong> (mengesampingkan), <strong>ditindaklanjuti</strong>, <strong>keluar</strong> (lawan kata masuk), <strong>ketua</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Aturan Emas Subjek Kalimat:</strong> Jangan pernah meletakkan preposisi (<em>di, dalam, pada, bagi, untuk, tentang, menurut</em>) di awal <strong>Subjek</strong> kalimat, karena akan membuat kalimat kehilangan Subjek (tidak bersubjek)!
                </div>
            `,
            contoh: {
                soal: "Manakah yang baku: 'Masalah itu tidak boleh di kesampingkan' atau 'Masalah itu tidak boleh dikesampingkan'?",
                langkah: "Karena memiliki bentuk aktif 'mengesampingkan', maka 'di-' pada kata tersebut adalah imbuhan pasif (bukan kata depan penunjuk tempat). Penulisan yang benar adalah dirangkai: 'dikesampingkan'."
            },
            gameQuestions: [
                {
                    q: "Manakah kalimat di bawah ini yang penulisan kata depan dan imbuhannya PALING TEPAT?",
                    opts: [
                        "Diantara seluruh peserta, hanya tiga orang yang lolos ke babak final.",
                        "Usulan warga desa itu tidak boleh di kesampingkan oleh pemerintah daerah.",
                        "Para penumpang diminta segera ke luar dari gedung terminal melalui pintu darurat.",
                        "Setiap laporan pengaduan masyarakat akan segera di tindaklanjuti oleh petugas."
                    ],
                    ans: 2,
                    exp: "'ke luar' menunjukkan arah menuju luar (berpasangan dengan 'dari gedung'), sehingga ditulis terpisah. Opsi A salah (seharusnya 'Di antara'); B salah (seharusnya 'dikesampingkan'); D salah (seharusnya 'ditindaklanjuti')."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Bagi seluruh peserta ujian diwajibkan hadir tiga puluh menit sebelum sesi dimulai.' Mengapa penggunaan preposisi 'Bagi' pada kalimat tersebut salah?",
                    opts: [
                        "Karena kata 'Bagi' tidak baku dalam KBBI.",
                        "Karena preposisi di depan subjek mengubah subjek menjadi keterangan sehingga kalimat kehilangan subjek.",
                        "Karena kata 'Bagi' hanya boleh digunakan untuk kalimat tanya.",
                        "Karena setelah kata 'Bagi' seharusnya diberi tanda koma."
                    ],
                    ans: 1,
                    exp: "Predikat pasif 'diwajibkan hadir' membutuhkan Subjek. Penggunaan preposisi 'Bagi' di awal frasa 'seluruh peserta ujian' mengubah fungsi Subjek menjadi Keterangan, sehingga kalimat menjadi tidak bersubjek."
                },
                {
                    q: "Pasangan penulisan bentuk 'di' yang KEDUANYA BENAR terdapat pada...",
                    opts: [
                        "di bawah meja — di bawah pengawasan",
                        "di balik pintu — di balikkan fakta",
                        "di mana pun — dimana saja",
                        "di atas namakan — di atas kertas"
                    ],
                    ans: 0,
                    exp: "'di bawah meja' dan 'di bawah pengawasan' sama-sama menggunakan preposisi 'di' yang diikuti nomina lokatif 'bawah', sehingga keduanya ditulis terpisah. Pada opsi B seharusnya 'dibalikkan'; opsi C seharusnya 'di mana saja'; opsi D seharusnya 'diatasnamakan'."
                },
                {
                    q: "Manakah kalimat yang menggunakan kata depan 'daripada' secara TEPAT menurut kaidah bahasa Indonesia baku?",
                    opts: [
                        "Tujuan daripada pembangunan waduk ini adalah untuk mengairi ribuan hektare sawah.",
                        "Pendapatan petani kopi tahun ini jauh lebih tinggi daripada tahun sebelumnya.",
                        "Keberhasilan proyek itu bergantung daripada kerja sama seluruh anggota tim.",
                        "Kami sedang mendiskusikan isi daripada rancangan peraturan daerah tersebut."
                    ],
                    ans: 1,
                    exp: "Preposisi 'daripada' HANYA digunakan untuk menyatakan perbandingan (biasanya berpasangan dengan kata 'lebih' atau 'kurang/mending'), bukan untuk menyatakan kepunyaan atau pengganti kata 'dari'."
                },
                {
                    q: "Penggunaan preposisi 'pada' dan 'di' yang PALING TEPAT terdapat dalam kalimat...",
                    opts: [
                        "Pertemuan tingkat menteri itu akan diselenggarakan di hari Senin pekan depan.",
                        "Banyak nilai moral yang dapat kita temukan di dalam novel klasik tersebut.",
                        "Buku catatan praktikum kimia saya tertinggal di Rina sejak kemarin sore.",
                        "Pada zaman dahulu, perdagangan rempah-rempah dilakukan melalui jalur pelayaran laut."
                    ],
                    ans: 3,
                    exp: "Preposisi 'pada' digunakan di depan kata penunjuk waktu ('Pada zaman dahulu', 'pada hari Senin') atau nama orang/konsep abstrak ('tertinggal pada Rina'), sedangkan 'di' digunakan untuk tempat konkret/geografis."
                },
                {
                    q: "Perhatikan kalimat rumpang berikut: 'Dana hibah penelitian itu disalurkan [...] kementerian terkait [...] perguruan tinggi negeri [...] meningkatkan jumlah publikasi internasional.' Urutan preposisi yang paling tepat untuk melengkapi kalimat tersebut adalah...",
                    opts: [
                        "oleh — kepada — untuk",
                        "dari — ke — bagi",
                        "melalui — pada — demi",
                        "oleh — bagi — terhadap"
                    ],
                    ans: 0,
                    exp: "Predikat pasif 'disalurkan' diikuti penanda pelaku 'oleh' (kementerian), penanda penerima/tujuan institusi 'kepada' (perguruan tinggi negeri), dan penanda tujuan tindakan 'untuk' (meningkatkan...)."
                },
                {
                    q: "Manakah kalimat berikut yang membedakan penulisan verba 'keluar' dan frasa preposisional 'ke luar' dengan TEPAT?",
                    opts: [
                        "Setelah pengumuman hasil seleksi ke luar, ia memutuskan merantau keluar negeri.",
                        "Setelah pengumuman hasil seleksi keluar, ia memutuskan merantau ke luar negeri.",
                        "Setelah pengumuman hasil seleksi keluar, ia memutuskan merantau keluar negeri.",
                        "Setelah pengumuman hasil seleksi ke luar, ia memutuskan merantau ke luar negeri."
                    ],
                    ans: 1,
                    exp: "'keluar' (serangkai) adalah kata kerja intransitif yang bermakna terbit/muncul ('hasil seleksi keluar'), sedangkan 'ke luar negeri' (dipisah) adalah kata depan 'ke' diikuti lokasi 'luar negeri'."
                },
                {
                    q: "Kalimat manakah yang menggunakan preposisi 'terhadap' secara TIDAK TEPAT (rancu)?",
                    opts: [
                        "Pemerintah memberikan perhatian khusus terhadap kesejahteraan guru di daerah terpencil.",
                        "Vaksinasi rutin mampu meningkatkan kekebalan tubuh anak terhadap serangan virus polio.",
                        "Polisi sedang menyelidiki terhadap penyebab kebakaran gudang logistik tersebut.",
                        "Masyarakat diharapkan memiliki kepedulian tinggi terhadap kelestarian lingkungan pesisir."
                    ],
                    ans: 2,
                    exp: "Kata kerja transitif aktif 'menyelidiki' harus langsung diikuti oleh Objek ('penyebab kebakaran...') tanpa dihalangi preposisi 'terhadap'. Pada opsi A, B, dan D, 'terhadap' sudah tepat karena mengikuti nomina ('perhatian', 'kekebalan', 'kepedulian')."
                },
                {
                    q: "Penulisan gabungan kata depan di bawah ini yang SELURUHNYA BENAR menurut EYD V adalah...",
                    opts: [
                        "ke mana, di samping itu, ke depan, di luar dugaan",
                        "kemana, disamping itu, ke depan, diluar dugaan",
                        "ke mana, di samping itu, kedepan, di luar dugaan",
                        "kemana, di samping itu, ke depan, di luar dugaan"
                    ],
                    ans: 0,
                    exp: "Semua kata depan 'di', 'ke', dan 'dari' yang diikuti kata tanya tempat ('mana') atau nomina posisi/arah ('samping', 'depan', 'luar') wajib ditulis terpisah: 'ke mana', 'di samping itu', 'ke depan', 'di luar dugaan'."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Atas perhatian Bapak dan Ibu, kami haturkan banyak terima kasih.' Penyuntingan preposisi dan diksi yang paling tepat agar kalimat penutup surat tersebut menjadi efektif dan baku adalah...",
                    opts: [
                        "Mengubah 'Atas' menjadi 'Kepada' dan menghapus kata 'banyak'.",
                        "Mengubah 'haturkan' menjadi 'ucapkan' dan menghapus kata 'banyak'.",
                        "Menghapus kata 'Atas' agar kalimat memiliki subjek.",
                        "Mengubah 'Atas perhatian' menjadi 'Untuk perhatiannya'."
                    ],
                    ans: 1,
                    exp: "Preposisi 'Atas perhatian Bapak dan Ibu,' sudah benar sebagai Keterangan sebab (karena induk kalimatnya sudah memiliki S 'kami' dan P 'ucapkan'). Namun, kata 'haturkan' (tidak tepat karena terima kasih bukan benda yang diberikan/dihaturkan) dan 'banyak' (berlebihan) harus diperbaiki menjadi: 'Atas perhatian Bapak dan Ibu, kami ucapkan terima kasih.'"
                }
            ]
        },
        {
            key: "pbm_1_1",
            kategori: "Konjungsi dan Partikel",
            judul: "Konjungsi Antarklausa & Antarkalimat",
            ringkasan: `
                <p><strong>Konjungsi (kata penghubung)</strong> terbagi atas konjungsi <strong>intrakalimat</strong> (antarklausa dalam satu kalimat) dan <strong>antarkalimat</strong> (menghubungkan kalimat baru dengan kalimat sebelumnya, diikuti koma).</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Konjungsi</th>
                                <th class="p-2 border border-slate-200 text-left">Aturan Posisi & Koma</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Koordinatif (Setara)</td>
                                <td class="p-2"><em>dan, atau, tetapi, melainkan, sedangkan, padahal</em></td>
                                <td class="p-2"><strong>TIDAK BOLEH</strong> di awal kalimat. Khusus <em>tetapi, melainkan, sedangkan, padahal</em> didahului koma.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Korelatif (Berpasangan)</td>
                                <td class="p-2"><em>baik ... maupun ...</em> | <em>tidak hanya ... tetapi juga ...</em> | <em>bukan hanya ... melainkan juga ...</em></td>
                                <td class="p-2">Wajib berpasangan tetap! Jangan silangkan <em>tidak hanya ... melainkan juga</em>.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Antarkalimat</td>
                                <td class="p-2"><em>Namun, Akan tetapi, Oleh karena itu, Meskipun demikian, Selain itu, Dengan demikian,</em></td>
                                <td class="p-2">Di awal kalimat baru dan <strong>WAJIB</strong> diikuti tanda koma (,).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Perbaiki kalimat berikut: 'Teknologi baterai litium tidak hanya ramah lingkungan, melainkan juga hemat biaya perawatan.'",
                langkah: "Pasangan konjungsi korelatif 'tidak hanya...' adalah '...tetapi juga...', sedangkan 'bukan hanya...' berpasangan dengan '...melainkan juga...'. Perbaikannya: '...tidak hanya ramah lingkungan, tetapi juga hemat biaya perawatan.'"
            },
            gameQuestions: [
                {
                    q: "Manakah kalimat di bawah ini yang menggunakan konjungsi korelatif (berpasangan) secara TEPAT?",
                    opts: [
                        "Program beasiswa itu tidak hanya mencakup biaya kuliah, melainkan juga tunjangan hidup bulanan.",
                        "Bukan hanya mahasiswa yang wajib hadir dalam seminar itu, tetapi juga para dosen pembimbing.",
                        "Baik pemerintah daerah ataupun masyarakat lokal harus menjaga kelestarian hutan mangrove.",
                        "Pupuk organik tidak hanya meningkatkan produktivitas panen, tetapi juga memperbaiki struktur tanah."
                    ],
                    ans: 3,
                    exp: "Pasangan konjungsi korelatif yang tepat adalah 'tidak hanya ... tetapi juga ...' dan 'bukan hanya ... melainkan juga ...', serta 'baik ... maupun ...'. Opsi A salah (tidak...melainkan), B salah (bukan...tetapi), dan C salah (baik...ataupun)."
                },
                {
                    q: "Kalimat pertama: 'Pemerintah telah menurunkan tarif pajak kendaraan listrik hingga sepuluh persen.' Kalimat kedua: '... minat masyarakat untuk beralih dari kendaraan berbahan bakar fosil masih belum meningkat signifikan.' Konjungsi antarkalimat yang paling tepat untuk mengisi bagian rumpang tersebut adalah...",
                    opts: [
                        "Tetapi,",
                        "Oleh karena itu,",
                        "Meskipun demikian,",
                        "Dengan demikian,"
                    ],
                    ans: 2,
                    exp: "Hubungan kalimat pertama dan kedua bersifat konsesif/pertentangan. Konjungsi antarkalimat yang tepat di awal kalimat (diikuti koma) adalah 'Meskipun demikian,' atau 'Namun,'. Kata 'Tetapi' adalah konjungsi intrakalimat sehingga tidak boleh diletakkan di awal kalimat."
                },
                {
                    q: "Manakah penggunaan konjungsi yang TIDAK TEPAT karena menimbulkan kelewahan (pleonasme) struktur klausa?",
                    opts: [
                        "Karena curah hujan sangat tinggi, bendungan desa itu akhirnya meluap.",
                        "Meskipun fasilitas laboratorium masih terbatas, para siswa tetap bersemangat melakukan praktikum.",
                        "Walaupun harga bahan baku melonjak tajam, namun perajin tempe tetap mempertahankan ukuran produknya.",
                        "Produksi garam rakyat meningkat pesat sehingga harga jual di tingkat petani mulai terkoreksi."
                    ],
                    ans: 2,
                    exp: "Penggunaan 'Walaupun ... namun ...' dalam satu kalimat yang sama adalah kesalahan ganda konjungsi subordinatif-koordinatif. Jika sudah ada 'Walaupun' di awal anak kalimat, induk kalimat tidak boleh diawali 'namun' atau 'tetapi'."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Yang menjadi kendala utama proyek ini bukanlah keterbatasan anggaran, [...] kurangnya koordinasi antarlembaga.' Konjungsi yang paling tepat untuk mengisi bagian rumpang adalah...",
                    opts: [
                        "tetapi",
                        "melainkan",
                        "sedangkan",
                        "namun"
                    ],
                    ans: 1,
                    exp: "Kata ingkar 'bukan' atau 'bukanlah' selalu berpasangan secara korelatif dengan konjungsi pertentangan 'melainkan' (bukan ... melainkan ...), sedangkan kata ingkar 'tidak' berpasangan dengan 'tetapi'."
                },
                {
                    q: "Manakah kalimat berikut yang menggunakan konjungsi subordinatif dengan posisi tanda baca yang TEPAT?",
                    opts: [
                        "Karena pasokan kedelai impor tersendat, harga tahu di pasar tradisional mengalami kenaikan.",
                        "Harga tahu di pasar tradisional mengalami kenaikan, karena pasokan kedelai impor tersendat.",
                        "Pemerintah segera mengimpor garam industri, agar pabrik kimia dapat terus beroperasi.",
                        "Para nelayan tetap melaut, meskipun gelombang tinggi melanda perairan selatan Jawa."
                    ],
                    ans: 0,
                    exp: "Konjungsi subordinatif ('karena', 'agar', 'meskipun') jika diletakkan di awal kalimat (anak kalimat mendahului induk kalimat) wajib diikuti tanda koma sebelum induk kalimat. Sebaliknya, jika induk kalimat di depan, tidak boleh ada tanda koma sebelum 'karena', 'agar', atau 'meskipun'."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Restorasi lahan gambut telah dilakukan secara masif di lima provinsi. [...], laju penurunan muka tanah di kawasan pesisir berhasil ditekan.' Konjungsi antarkalimat yang tepat untuk menyatakan hubungan akibat-hasil pada bagian rumpang tersebut adalah...",
                    opts: [
                        "Sebaliknya",
                        "Dengan demikian",
                        "Akan tetapi",
                        "Biarpun begitu"
                    ],
                    ans: 1,
                    exp: "Kalimat kedua menyatakan simpulan atau hasil logis dari tindakan pada kalimat pertama, sehingga konjungsi antarkalimat yang tepat adalah 'Dengan demikian,'."
                },
                {
                    q: "Manakah di antara kalimat berikut yang menggunakan konjungsi di AWAL kalimat secara TIDAK BAKU?",
                    opts: [
                        "Oleh sebab itu, setiap warga wajib menjaga kebersihan saluran drainase lingkungan.",
                        "Sedangkan anggaran untuk pembangunan perpustakaan daerah baru akan dicairkan bulan depan.",
                        "Selain itu, tim peneliti juga mengambil sampel sedimen dari dasar danau vulkanik.",
                        "Namun, usulan revisi jadwal ujian tersebut belum disetujui oleh senat akademik."
                    ],
                    ans: 1,
                    exp: "Kata 'sedangkan' (bersama 'dan', 'atau', 'tetapi', 'melainkan', 'padahal') merupakan konjungsi koordinatif intrakalimat, sehingga tidak boleh diletakkan di awal kalimat."
                },
                {
                    q: "Kalimat manakah yang menggunakan konjungsi penjelas 'bahwa' secara TEPAT dan EFEKTIF?",
                    opts: [
                        "Kepala BMKG memperingatkan bahwa puncak musim hujan akan berlangsung pada bulan Januari.",
                        "Menurut laporan tahunan menyebutkan bahwa angka kemiskinan ekstrem telah menurun.",
                        "Para ahli epidemiologi berpendapat tentang bahwa mutasi virus perlu dipantau secara ketat.",
                        "Hasil audit menunjukkan di mana bahwa terdapat selisih pencatatan stok barang di gudang."
                    ],
                    ans: 0,
                    exp: "Pada opsi A, Subjek ('Kepala BMKG') dan Predikat transitif ('memperingatkan') diikuti klausa komplemen yang diawali konjungsi 'bahwa' secara tepat. Opsi B kehilangan subjek karena diawali 'Menurut'; opsi C dan D rancu karena menggabungkan 'tentang bahwa' dan 'di mana bahwa'."
                },
                {
                    q: "Perhatikan kalimat rumpang berikut: 'Pembangunan jalur kereta cepat itu tetap dilanjutkan sesuai jadwal [...] banyak pihak awalnya meragukan kelayakan finansialnya.' Konjungsi yang paling tepat untuk melengkapi kalimat tersebut adalah...",
                    opts: [
                        "sehingga",
                        "kendatipun",
                        "asalkan",
                        "sebab"
                    ],
                    ans: 1,
                    exp: "Hubungan antara klausa pertama (pembangunan tetap dilanjutkan) dan klausa kedua (banyak pihak meragukan) adalah pertentangan/konsesif, sehingga konjungsi subordinatif yang tepat adalah 'kendatipun' (sepadan dengan 'meskipun' atau 'walaupun')."
                },
                {
                    q: "Penggunaan kata 'di mana' atau 'yang mana' seperti pada kalimat 'Kantor kelurahan di mana tempat kami mengurus dokumen sedang direnovasi' tidak baku dalam bahasa Indonesia karena...",
                    opts: [
                        "Kata 'mana' hanya berfungsi sebagai kata tanya atau penunjuk pilihan, bukan konjungsi perangkai klausa relatif (seharusnya diganti 'tempat').",
                        "Kata 'di mana' wajib ditulis serangkai menjadi 'dimana' apabila berada di tengah kalimat.",
                        "Kata 'di mana' hanya boleh digunakan pada kalimat perintah.",
                        "Kata 'yang mana' hanya boleh digunakan untuk merujuk benda hidup."
                    ],
                    ans: 0,
                    exp: "Dalam tata bahasa Indonesia baku, 'di mana' dan 'yang mana' tidak boleh dipakai sebagai kata penghubung penjelas nomina (terjemahan harfiah dari bahasa Inggris 'where'/'which'). Perbaikannya adalah menggunakan kata 'tempat' atau 'yang': 'Kantor kelurahan tempat kami mengurus dokumen sedang direnovasi'."
                }
            ]
        },
        {
            key: "pbm_1_2",
            kategori: "Konjungsi dan Partikel",
            judul: "Partikel dan Bentuk Terikat",
            ringkasan: `
                <p><strong>Partikel</strong> (<em>-lah, -kah, -tah, pun, per</em>) dan <strong>bentuk terikat</strong> (<em>non-, anti-, pasca-, sub-, antar-, maha-</em>) memiliki kaidah penulisan serangkai atau terpisah yang sangat tegas dalam EYD V.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Unsur</th>
                                <th class="p-2 border border-slate-200 text-left">Kaidah EYD V</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Baku</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Partikel <em>pun</em></td>
                                <td class="p-2"><strong>Dipisah</strong> bila bermakna "juga/saja". <strong>Dirangkai</strong> khusus pada 12 konjungsi padu: <em>adapun, andaipun, ataupun, bagaimanapun, biarpun, kalaupun, kendatipun, maupun, meskipun, sekalipun, sungguhpun, walaupun</em></td>
                                <td class="p-2"><em>Apa pun</em> yang terjadi, satu kali <em>pun</em>, <em>siapa pun</em> vs <em>meskipun</em>, <em>bagaimanapun</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Partikel <em>per</em></td>
                                <td class="p-2"><strong>Dipisah</strong> bila bermakna "demi", "tiap", atau "mulai". <strong>Dirangkai</strong> bila imbuhan/pecahan</td>
                                <td class="p-2">satu <strong>per</strong> satu, Rp50.000,00 <strong>per</strong> lembar, <strong>per</strong> 1 Januari vs <strong>perempat</strong>, <strong>mempercepat</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Bentuk Terikat <em>Maha-</em></td>
                                <td class="p-2">Menurut EYD V, <em>Maha</em> + sifat Tuhan ditulis <strong>TERPISAH</strong> dengan huruf kapital, kecuali <strong>Mahakuasa</strong>, <strong>Maha Esa</strong> (terpisah), dan kata turunan non-Tuhan (<em>mahasiswa, mahakarya</em>)</td>
                                <td class="p-2">Tuhan Yang <strong>Mahakuasa</strong>, <strong>Maha Pengasih</strong>, <strong>Maha Penyayang</strong>, <strong>Maha Mengetahui</strong>, <strong>Mahaadil</strong> / <strong>Maha Adil</strong> (EYD V: sifat dasar selain kuasa/esa kini ditulis terpisah: <em>Maha Pengampun</em>)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold"><em>antar-, pasca-, non-, sub-</em></td>
                                <td class="p-2">Ditulis <strong>SERANGKAI</strong> dengan kata berikutnya (kecuali diikuti huruf kapital pakai tanda hubung)</td>
                                <td class="p-2"><strong>pascasarjana</strong>, <strong>antarkota</strong>, <strong>nonblok</strong>, <strong>subbab</strong>, <strong>non-ASEAN</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Manakah yang benar: 'Siapapun yang melanggar aturan akan dikenai sanksi' atau 'Siapa pun yang melanggar aturan akan dikenai sanksi'?",
                langkah: "'siapa pun' bukan termasuk 12 konjungsi padu dan bermakna 'siapa saja', sehingga wajib ditulis terpisah: 'Siapa pun'."
            },
            gameQuestions: [
                {
                    q: "Manakah kalimat di bawah ini yang penulisan partikel 'pun'-nya BENAR menurut EYD V?",
                    opts: [
                        "Apapun rintangan yang menghadang, tim ekspedisi itu tetap melanjutkan perjalanan.",
                        "Sekali pun belum pernah mengunjungi kota itu, ia hafal peta jalannya karena sering membaca.",
                        "Tidak satu pun saksi mata yang melihat pelaku meninggalkan lokasi kejadian.",
                        "Bagaimanapun juga, keputusan akhir tetap berada di tangan dewan juri maupun panitia."
                    ],
                    ans: 2,
                    exp: "'satu pun' ditulis terpisah karena bermakna 'satu saja'. Opsi A salah (seharusnya 'Apa pun'); Opsi B salah (seharusnya 'Sekalipun' karena bermakna 'meskipun'); Opsi D tidak efektif karena 'Bagaimanapun juga' bersifat pleonasme."
                },
                {
                    q: "Penulisan gabungan bentuk terikat di bawah ini yang SELURUHNYA BAKU adalah...",
                    opts: [
                        "pasca panen, antar pulau, non pemerintah, sub bagian",
                        "pascapanen, antarpulau, nonpemerintah, subbagian",
                        "pasca-panen, antar-pulau, non-pemerintah, sub-bagian",
                        "pascapanen, antar pulau, non-pemerintah, subbagian"
                    ],
                    ans: 1,
                    exp: "Bentuk terikat 'pasca-', 'antar-', 'non-', dan 'sub-' ditulis serangkai dengan kata dasar yang mengikutinya: pascapanen, antarpulau, nonpemerintah, subbagian."
                },
                {
                    q: "Penggunaan partikel 'per' yang ditulis secara TEPAT terdapat pada kalimat...",
                    opts: [
                        "Para peserta dipersilakan memasuki ruang ujian satu persatu.",
                        "Harga beras kualitas premium di pasar induk mencapai Rp15.000,00 perkilogram.",
                        "Aturan baru mengenai tarif parkir elektronik tersebut mulai berlaku per 1 November 2026.",
                        "Tiga per empat wilayah kabupaten tersebut merupakan kawasan hutan lindung."
                    ],
                    ans: 2,
                    exp: "Partikel 'per' yang berarti 'mulai', 'demi', dan 'tiap' ditulis terpisah: 'per 1 November 2026', 'satu per satu', 'per kilogram'. Adapun bilangan pecahan ditulis serangkai: 'tiga perempat'."
                },
                {
                    q: "Manakah kalimat berikut yang membedakan penulisan konjungsi 'sekalipun' (serangkai) dan partikel 'sekali pun' (terpisah) secara TEPAT?",
                    opts: [
                        "Sekali pun cuaca sedang buruk, ia belum pernah sekalipun terlambat datang ke laboratorium.",
                        "Sekalipun cuaca sedang buruk, ia belum pernah sekali pun terlambat datang ke laboratorium.",
                        "Sekalipun cuaca sedang buruk, ia belum pernah sekalipun terlambat datang ke laboratorium.",
                        "Sekali pun cuaca sedang buruk, ia belum pernah sekali pun terlambat datang ke laboratorium."
                    ],
                    ans: 1,
                    exp: "Apabila bermakna konjungsi konsesif ('meskipun/walaupun'), 'sekalipun' ditulis serangkai. Apabila bermakna jumlah ('satu kali saja'), 'sekali pun' ditulis terpisah."
                },
                {
                    q: "Penulisan bentuk terikat yang diikuti kata berhuruf awal kapital atau singkatan di bawah ini yang TEPAT menurut EYD V adalah...",
                    opts: [
                        "Kerja sama ekonomi negara-negara nonASEAN terus ditingkatkan pada kuartal ini.",
                        "Gerakan anti-Korupsi harus ditanamkan sejak bangku pendidikan dasar.",
                        "Semangat pro-NKRI perlu dijaga oleh seluruh lapisan warga negara di perbatasan.",
                        "Peserta lomba debat itu berasal dari berbagai sekolah seJawa Barat."
                    ],
                    ans: 2,
                    exp: "Bentuk terikat yang diikuti kata yang berhuruf awal kapital atau singkatan dirangkaikan dengan tanda hubung (-), seperti 'pro-NKRI', 'non-ASEAN', dan 'se-Jawa Barat'. Kata 'antikorupsi' pada opsi B ditulis serangkai dengan huruf kecil karena 'korupsi' bukan nama diri."
                },
                {
                    q: "Manakah penulisan kata sifat ketuhanan dengan bentuk 'Maha' yang sesuai dengan kaidah EYD Edisi V?",
                    opts: [
                        "Marilah kita memanjatkan puji dan syukur ke hadirat Tuhan Yang Maha Esa lagi Maha Pengasih.",
                        "Marilah kita memanjatkan puji dan syukur ke hadirat Tuhan Yang Mahaesa lagi Mahapengasih.",
                        "Marilah kita memanjatkan puji dan syukur ke hadirat Tuhan Yang Maha-Esa lagi Maha-Pengasih.",
                        "Marilah kita memanjatkan puji dan syukur ke hadirat Tuhan yang Maha Esa lagi Maha Pengasih."
                    ],
                    ans: 0,
                    exp: "Dalam EYD V, bentuk 'Maha' yang mengacu pada nama atau sifat Tuhan ditulis terpisah dengan huruf awal kapital ('Tuhan Yang Maha Esa', 'Maha Pengasih', 'Maha Penyayang'), kecuali kata 'Mahakuasa' yang ditulis serangkai."
                },
                {
                    q: "Penulisan partikel '-lah', '-kah', dan 'pun' dalam kalimat berikut yang SELURUHNYA BENAR adalah...",
                    opts: [
                        "Apakah langkah yang harus kita tempuh apabila malam pun mulai larut?",
                        "Apa kah langkah yang harus kita tempuh apabila malampun mulai larut?",
                        "Apakah langkah yang harus kita tempuh apabila malampun mulai larut?",
                        "Apa-kah langkah yang harus kita tempuh apabila malam pun mulai larut?"
                    ],
                    ans: 0,
                    exp: "Partikel '-lah', '-kah', dan '-tah' selalu ditulis serangkai dengan kata yang mendahuluinya ('Apakah'), sedangkan partikel 'pun' yang bermakna 'juga' ditulis terpisah dari kata yang mendahuluinya ('malam pun')."
                },
                {
                    q: "Deretan kata berunsur serapan terikat di bawah ini yang penulisannya BAKU dan SERANGKAI seluruhnya adalah...",
                    opts: [
                        "ekstrakurikuler, infrastruktur, mancanegara, narasumber",
                        "ekstra kurikuler, infrastruktur, manca negara, nara sumber",
                        "ekstrakurikuler, infra struktur, mancanegara, nara sumber",
                        "ekstra-kurikuler, infrastruktur, mancanegara, narasumber"
                    ],
                    ans: 0,
                    exp: "Unsur terikat 'ekstra-', 'infra-', 'manca-', dan 'nara-' ditulis serangkai dengan unsur yang mengikutinya: ekstrakurikuler, infrastruktur, mancanegara, narasumber."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Gedung serba guna itu dilengkapi fasilitas ramah disabilitas dan sistem keamanan canggih.' Perbaikan ejaan bentuk terikat pada kalimat tersebut adalah...",
                    opts: [
                        "Mengubah 'serba guna' menjadi 'serbaguna'.",
                        "Mengubah 'serba guna' menjadi 'serba-guna'.",
                        "Mengubah 'ramah disabilitas' menjadi 'ramahdisabilitas'.",
                        "Mengubah 'sistem keamanan' menjadi 'sub-sistem keamanan'."
                    ],
                    ans: 0,
                    exp: "Unsur terikat 'serba-' ditulis serangkai dengan kata dasar yang mengikutinya menjadi 'serbaguna' (seperti halnya 'serbaada', 'serbabisa', 'serbasalah')."
                },
                {
                    q: "Manakah kalimat berikut yang penulisan bentuk terikat 'tuna-', 'swa-', dan 'pra-'-nya BENAR menurut KBBI dan EYD V?",
                    opts: [
                        "Pemerintah menyelenggarakan pelatihan wirausaha bagi warga tuna karya untuk mencapai swasembada pangan sejak masa prasejarah.",
                        "Pemerintah menyelenggarakan pelatihan wirausaha bagi warga tunakarya untuk mencapai swasembada pangan sejak masa prasejarah.",
                        "Pemerintah menyelenggarakan pelatihan wirausaha bagi warga tunakarya untuk mencapai swa sembada pangan sejak masa pra sejarah.",
                        "Pemerintah menyelenggarakan pelatihan wirausaha bagi warga tuna-karya untuk mencapai swa-sembada pangan sejak masa pra-sejarah."
                    ],
                    ans: 1,
                    exp: "Bentuk terikat 'tuna-', 'swa-', dan 'pra-' wajib ditulis serangkai dengan kata yang mengikutinya: 'tunakarya', 'swasembada', dan 'prasejarah'."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 2: PEMBENTUKAN KATA (2 SUB-MATERI)
        // =====================================================================
        {
            key: "pbm_2_0",
            kategori: "Pembentukan Kata",
            judul: "Bentuk dan Jenis Kata (Nomina, Verba, Adjektiva)",
            ringkasan: `
                <p>Mengenali <strong>kelas kata (jenis kata)</strong> sangat penting untuk menentukan kesejajaran (paralelisme) kalimat dan ketepatan pembentukan kata berimbuhan.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Kelas Kata</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Pengujian Sintaksis</th>
                                <th class="p-2 border border-slate-200 text-left">Imbuhan Khas</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Nomina (Kata Benda)</td>
                                <td class="p-2">Dapat diingkari dengan kata <strong>"bukan"</strong>; menduduki fungsi Subjek/Objek</td>
                                <td class="p-2"><em>peN-, peN-...-an, per-...-an, ke-...-an, -an</em> (peneliti, penelitian, kemiskinan)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Verba (Kata Kerja)</td>
                                <td class="p-2">Dapat diingkari dengan <strong>"tidak"</strong>; dapat didahului <em>sedang / akan / telah</em></td>
                                <td class="p-2"><em>meN-, ber-, di-, ter-, meN-...-kan, meN-...-i</em> (menganalisis, berdiskusi)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Adjektiva (Kata Sifat)</td>
                                <td class="p-2">Dapat diberi keterangan pembanding/penguat: <strong>sangat ..., lebih ..., paling ...</strong></td>
                                <td class="p-2">Kata dasar sifat atau serapan <em>-if, -is, -al</em> (produktif, kritis, rasional)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Dalam kalimat ' Langkah pencegahan lebih efektif daripada pengobatan', kata 'pencegahan' dan 'pengobatan' termasuk kelas kata apa?",
                langkah: "Kedua kata dibentuk dengan konfiks peN-...-an yang mengubah kata kerja (cegah, obat) menjadi kata benda abstrak (Nomina). Keduanya juga sejajar (paralel)."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat berikut: 'Keberhasilan proyek konservasi itu bergantung pada perencanaan yang matang, pelaksanaan yang disiplin, dan mengevaluasi secara berkala.' Agar memenuhi syarat keparalelan kelas kata, perbaikan yang tepat adalah...",
                    opts: [
                        "Mengubah 'perencanaan' menjadi 'merencanakan'.",
                        "Mengubah 'mengevaluasi' menjadi 'pengevaluasian' atau 'evaluasi'.",
                        "Mengubah 'pelaksanaan' menjadi 'dilaksanakan'.",
                        "Menghapus kata 'secara berkala' di akhir kalimat."
                    ],
                    ans: 1,
                    exp: "Rincian pertama ('perencanaan' = nomina) dan kedua ('pelaksanaan' = nomina) berbentuk kata benda, sedangkan rincian ketiga ('mengevaluasi' = verba aktif) tidak sejajar. Harus diubah menjadi nomina: 'evaluasi' atau 'pengevaluasian'."
                },
                {
                    q: "Kata bercetak miring dalam kalimat 'Pemerintah daerah mengupayakan *percepatan* pembangunan infrastruktur jalan tol' memiliki kelas kata yang SAMA dengan kata bercetak miring pada kalimat...",
                    opts: [
                        "Para ilmuwan sedang *mengembangkan* vaksin generasi terbaru di laboratorium.",
                        "Kebijakan fiskal yang *adaptif* mampu menjaga stabilitas ekonomi nasional.",
                        "Peningkatan literasi keuangan masyarakat memerlukan *pendampingan* yang berkelanjutan.",
                        "teknologi panel surya kini semakin *terjangkau* bagi rumah tangga."
                    ],
                    ans: 2,
                    exp: "'percepatan' adalah Nomina (kata benda turunan berkonfiks per-...-an). Kata 'pendampingan' juga berkelas kata Nomina (peN-...-an). Adapun 'mengembangkan' = verba, 'adaptif' = adjektiva, 'terjangkau' = verba pasif/adjektival."
                },
                {
                    q: "Manakah kalimat berikut yang menggunakan bentuk kata sifat (adjektiva) serapan secara TEPAT?",
                    opts: [
                        "Pendekatan historikal sangat diperlukan dalam meneliti naskah kuno Nusantara.",
                        "Kita harus bersikap objektifitas dalam menilai karya ilmiah peserta lomba.",
                        "Langkah sistematis diperlukan untuk menyelesaikan krisis air bersih di wilayah tersebut.",
                        "Perubahan cuaca yang sangat ekstremis mengganggu jadwal pelayaran antarpulau."
                    ],
                    ans: 2,
                    exp: "'sistematis' adalah adjektiva baku yang tepat menerangkan nomina 'langkah'. Pada opsi A seharusnya 'historis'; opsi B seharusnya 'objektif' (karena objektivitas adalah nomina); opsi D seharusnya 'ekstrem' (ekstremis adalah pelaku/nomina)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Dokter menyarankan pasien untuk mengonsumsi makanan sehat, berolahraga secara teratur, dan istirahat yang cukup.' Agar sejajar (paralel) dalam kelas kata verba berimbuhan, frasa 'istirahat yang cukup' sebaiknya diubah menjadi...",
                    opts: [
                        "peristirahatan yang cukup",
                        "beristirahat dengan cukup",
                        "diistirahatkan secara cukup",
                        "pengistirahatan yang cukup"
                    ],
                    ans: 1,
                    exp: "Rincian pertama ('mengonsumsi' = verba aktif) dan kedua ('berolahraga' = verba aktif) menggunakan kelas kata verba, sehingga rincian ketiga ('istirahat' = kata dasar/nomina) harus diubah menjadi verba aktif 'beristirahat dengan cukup'."
                },
                {
                    q: "Dalam kalimat 'Petani mandiri itu berhasil membudidayakan varietas padi tahan kekeringan', kata 'mandiri' dan 'kekeringan' secara berturut-turut berkelas kata...",
                    opts: [
                        "Nomina dan Verba",
                        "Adjektiva dan Nomina",
                        "Verba dan Adjektiva",
                        "Adverbia dan Nomina"
                    ],
                    ans: 1,
                    exp: "Kata 'mandiri' adalah adjektiva (kata sifat yang menerangkan nomina 'petani', dapat diuji dengan 'sangat mandiri'), sedangkan 'kekeringan' pada frasa 'tahan kekeringan' adalah nomina abstrak hasil konfiks ke-...-an."
                },
                {
                    q: "Manakah kata ulang di bawah ini yang mengalami perubahan kelas kata dari kata dasarnya ketika mengalami reduplikasi berimbuhan?",
                    opts: [
                        "rumah-rumahan (dari nomina 'rumah' tetap menjadi nomina)",
                        "kemerah-merahan (dari nomina/adjektiva warna menjadi adjektiva bermakna agak merah)",
                        "sayur-mayur (dari nomina 'sayur' tetap menjadi nomina)",
                        "berlari-lari (dari verba 'lari' menjadi verba)"
                    ],
                    ans: 1,
                    exp: "Konfiks ke-...-an pada reduplikasi 'kemerah-merahan' atau 'kekanak-kanakan' (dari nomina 'kanak') membentuk kelas kata Adjektiva yang menyatakan makna 'agak/menyerupai sifat'."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Tingginya angka inflasi pangan memicu keresahan masyarakat berpenghasilan rendah.' Kata 'Tingginya' pada awal kalimat tersebut mengalami proses transposisi (perubahan kategori) menjadi...",
                    opts: [
                        "Verba transitif karena diikuti objek 'angka inflasi'",
                        "Nomina (nominalisasi dengan '-nya') dari kata dasar adjektiva 'tinggi'",
                        "Adverbia keterangan cara",
                        "Preposisi penunjuk tempat"
                    ],
                    ans: 1,
                    exp: "Kata sifat (adjektiva) 'tinggi' yang diberi klitik/sufiks '-nya' di awal frasa ('Tingginya angka inflasi pangan') mengalami nominalisasi sehingga berfungsi sebagai inti frasa nominal (Subjek kalimat)."
                },
                {
                    q: "Manakah kalimat berikut yang mengalami kesalahan penempatan kelas kata antara kata benda (nomina) dan kata sifat (adjektiva)?",
                    opts: [
                        "Kreativitas siswa perlu diasah melalui pembelajaran berbasis proyek.",
                        "Tingkat efektifitas penggunaan pupuk cair itu sedang diuji di kebun percobaan.",
                        "Kebijakan moneter yang stabilitas sangat dibutuhkan oleh pelaku pasar modal.",
                        "Para juri menilai orisinalitas gagasan dari setiap karya tulis yang masuk."
                    ],
                    ans: 2,
                    exp: "Pada opsi C, konstruksi 'yang + ...' setelah nomina membutuhkan kata sifat (adjektiva) atau verba, yakni 'yang stabil', bukan kata benda 'stabilitas' (selain itu ejaan pada opsi B seharusnya 'efektivitas', namun kesalahan kelas kata sintaksis paling nyata ada pada 'yang stabilitas')."
                },
                {
                    q: "Kata 'cepat' dalam kalimat 'Kereta itu melaju dengan cepat' dan 'Kereta cepat itu tiba tepat waktu' memiliki fungsi dan perilaku sintaksis sebagai...",
                    opts: [
                        "Keduanya berfungsi sebagai verba utama kalimat.",
                        "Pada kalimat pertama berperan dalam konstruksi adverbial (keterangan cara), sedangkan pada kalimat kedua sebagai adjektiva atributif penjelas nomina.",
                        "Pada kalimat pertama sebagai subjek, sedangkan pada kalimat kedua sebagai objek.",
                        "Keduanya merupakan kata benda abstrak."
                    ],
                    ans: 1,
                    exp: "'dengan cepat' menerangkan verba 'melaju' (fungsi keterangan cara/adverbial), sedangkan pada 'kereta cepat', kata sifat 'cepat' langsung menerangkan nomina 'kereta' secara atributif."
                },
                {
                    q: "Manakah deretan kata di bawah ini yang SELURUHNYA termasuk ke dalam kelas kata ADJEKTIVA (kata sifat)?",
                    opts: [
                        "transparan, komprehensif, mutakhir, signifikan",
                        "transparansi, komprehensif, pemutakhiran, signifikan",
                        "transparan, mengomprehensifkan, mutakhir, signifikansi",
                        "ketransparanan, komprehensif, mutakhir, menyignifikankan"
                    ],
                    ans: 0,
                    exp: "Kata 'transparan', 'komprehensif', 'mutakhir', dan 'signifikan' semuanya berkelas kata adjektiva (dapat didahului kata 'sangat'). Adapun 'transparansi', 'pemutakhiran', dan 'signifikansi' adalah nomina."
                }
            ]
        },
        {
            key: "pbm_2_1",
            kategori: "Pembentukan Kata",
            judul: "Kata Baku dan Tidak Baku (KBBI VI)",
            ringkasan: `
                <p>Penguasaan <strong>kata baku menurut KBBI Edisi VI</strong> adalah lumbung poin tercepat di PBM. Perhatikan pola penyerapan kosakata asing dan ejaan yang sering salah kaprah.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Bentuk BAKU (Benar)</th>
                                <th class="p-2 border border-slate-200 text-left">Tidak Baku (Salah)</th>
                                <th class="p-2 border border-slate-200 text-left">Bentuk BAKU (Benar)</th>
                                <th class="p-2 border border-slate-200 text-left">Tidak Baku (Salah)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-bold text-teal-700">apotek, praktik, teknik</td>
                                <td class="p-2 text-rose-600">apotik, praktek, tehnik</td>
                                <td class="p-2 font-bold text-teal-700">risiko, sistem, hipotesis</td>
                                <td class="p-2 text-rose-600">resiko, sistim, hipotesa</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">analisis, diagnosis, sintesis</td>
                                <td class="p-2 text-rose-600">analisa, diagnosa, sintesa</td>
                                <td class="p-2 font-bold text-teal-700">kualitas, kuantitas, jadwal</td>
                                <td class="p-2 text-rose-600">kwalitas, kwantitas, jadual</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">aktivitas, produktivitas</td>
                                <td class="p-2 text-rose-600">aktifitas, produktifitas</td>
                                <td class="p-2 font-bold text-teal-700">hierarki, karier, variabel</td>
                                <td class="p-2 text-rose-600">hirarki, karir, varibel</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">andal, autentik, cedera</td>
                                <td class="p-2 text-rose-600">handal, otentik, cidera</td>
                                <td class="p-2 font-bold text-teal-700">canggih, sekadar, silakan</td>
                                <td class="p-2 text-rose-600">cangih, sekedar, silahkan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Rumus Serapan <em>-if</em> vs <em>-itas</em>:</strong> Saat berdiri sebagai kata sifat, gunakan huruf <strong>F</strong> (<em>aktif, efektif, produktif, kreatif, objektif</em>). Saat mendapat akhiran benda <em>-itas</em>, huruf F berubah menjadi <strong>V</strong> (<em>aktivitas, efektivitas, produktivitas, kreativitas, objektivitas</em>).
                </div>
            `,
            contoh: {
                soal: "Manakah yang baku: 'kreatifitas' atau 'kreativitas'?",
                langkah: "Kata serapan dari bahasa Inggris '-ivity' diserap menjadi '-ivitas' dengan huruf v: kreativitas."
            },
            gameQuestions: [
                {
                    q: "Manakah deretan kata di bawah ini yang SELURUHNYA merupakan kata baku menurut KBBI?",
                    opts: [
                        "apotek, resiko, analisis, sekadar, silakan",
                        "apotek, risiko, analisis, sekadar, silakan",
                        "apotik, risiko, analisa, sekedar, silahkan",
                        "apotek, risiko, analisis, sekedar, silakan"
                    ],
                    ans: 1,
                    exp: "Semua kata pada opsi B adalah bentuk baku di KBBI: apotek (bukan apotik), risiko (bukan resiko), analisis (bukan analisa), sekadar (bukan sekedar), dan silakan (bukan silahkan)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Untuk menjaga produktifitas kerja dan jenjang karir pegawai, perusahaan menerapkan sistim penilaian berbasis kompetensi yang andal.' Kata-kata yang TIDAK BAKU dalam kalimat tersebut adalah...",
                    opts: [
                        "produktifitas, karir, sistim",
                        "karir, sistim, andal",
                        "produktifitas, kompetensi, andal",
                        "produktifitas, jenjang, sistim"
                    ],
                    ans: 0,
                    exp: "Bentuk bakunya adalah 'produktivitas' (pakai v), 'karier' (pakai ie), dan 'sistem' (pakai e). Adapun kata 'andal' (bukan handal) dan 'kompetensi' sudah baku."
                },
                {
                    q: "Kalimat di bawah ini yang menggunakan kosakata baku secara menyeluruh adalah...",
                    opts: [
                        "Dokter spesialis itu memberikan diagnosa awal setelah memeriksa gejala cidera lutut atlet.",
                        "Bukti autentik yang ditemukan arkeolog itu memperkuat hipotesis tentang jalur rempah kuno.",
                        "Jadual keberangkatan kereta cepat mengalami perubahan akibat gangguan tehnis di stasiun.",
                        "Para relawan menghimbau warga agar tetap waspada terhadap potensi bencana hidrometeorologi."
                    ],
                    ans: 1,
                    exp: "'autentik' (bukan otentik) dan 'hipotesis' (bukan hipotesa) sudah baku. Opsi A salah (diagnosa -> diagnosis, cidera -> cedera); Opsi C salah (jadual -> jadwal, tehnis -> teknis); Opsi D salah (menghimbau -> mengimbau, dari kata dasar imbau)."
                },
                {
                    q: "Manakah pasangan kata baku dan tidak baku di bawah ini yang TEPAT?",
                    opts: [
                        "Baku: cendekiawan — Tidak Baku: cendikiawan",
                        "Baku: hakekat — Tidak Baku: hakikat",
                        "Baku: nasehat — Tidak Baku: nasihat",
                        "Baku: kwitansi — Tidak Baku: kuitansi"
                    ],
                    ans: 0,
                    exp: "Bentuk baku dalam KBBI adalah 'cendekiawan' (bukan cendikiawan), 'hakikat' (bukan hakekat), 'nasihat' (bukan nasehat), dan 'kuitansi' (bukan kwitansi)."
                },
                {
                    q: "Perhatikan deretan kata serapan berikut: (1) hierarki, (2) komoditi, (3) varietas, (4) standarisasi, (5) frekuensi. Kata-kata yang sudah ditulis secara BAKU menurut KBBI ditunjukkan oleh nomor...",
                    opts: [
                        "(1), (2), dan (3)",
                        "(1), (3), dan (5)",
                        "(2), (4), dan (5)",
                        "(1), (3), dan (4)"
                    ],
                    ans: 1,
                    exp: "'hierarki', 'varietas', dan 'frekuensi' adalah bentuk baku. Nomor (2) tidak baku karena seharusnya 'komoditas' (akhiran -ty diserap menjadi -tas), dan nomor (4) tidak baku karena kata dasarnya 'standar' (standard) sehingga saat diberi -isasi menjadi 'standardisasi'."
                },
                {
                    q: "Manakah kalimat berikut yang bebas dari penggunaan kata TIDAK BAKU?",
                    opts: [
                        "Atlit bulu tangkis nasional itu berhasil meraih medali emas di kejuaraan internasional.",
                        "Pemerintah memberikan izin operasional kepada koperasi yang telah memenuhi syarat administratif.",
                        "Kita perlu merubah pola pikir konsumtif agar memiliki tabungan masa depan yang cukup.",
                        " Kompleks perumahan itu dilengkapi fasilitas olah raga dan apotik dua puluh empat jam."
                    ],
                    ans: 1,
                    exp: "'izin' (bukan ijin) dan 'administratif' sudah baku. Opsi A salah ('atlit' -> 'atlet'); Opsi C salah ('merubah' -> 'mengubah'); Opsi D salah ('olah raga' -> 'olahraga' serangkai, 'apotik' -> 'apotek')."
                },
                {
                    q: "Penulisan gabungan kata (kata majemuk) di bawah ini yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
                    opts: [
                        "kacamata, matahari, kerjasama, tanggungjawab",
                        "kacamata, matahari, kerja sama, tanggung jawab",
                        "kaca mata, mata hari, kerja sama, tanggung jawab",
                        "kacamata, matahari, kerjasama, tanggung jawab"
                    ],
                    ans: 1,
                    exp: "'kacamata' dan 'matahari' merupakan gabungan kata yang sudah padu sehingga ditulis serangkai. Sebaliknya, 'kerja sama' dan 'tanggung jawab' belum mendapat konfiks gabung sehingga ditulis terpisah (kecuali jika diberi konfiks menjadi 'bekerja sama' [tetap pisah karena hanya awalan] vs 'mempertanggungjawabkan' [serangkai karena mendapat awalan dan akhiran sekaligus])."
                },
                {
                    q: "Manakah kalimat yang penulisan gabungan kata berimbuhannya TEPAT menurut EYD V?",
                    opts: [
                        "Para direksi wajib mempertanggung jawabkan laporan keuangan tahunan di hadapan pemegang saham.",
                        "Masyarakat dihimbau untuk tidak menyebarluaskan berita bohong yang belum terverifikasi.",
                        "Panitia telah melipat gandakan jumlah kursi di gedung pertunjukan karena tingginya antusiasme penonton.",
                        "Petugas berhasil menganak-tirikan berkas pengajuan yang tidak lengkap."
                    ],
                    ans: 1,
                    exp: "Gabungan kata yang mendapat awalan dan akhiran sekaligus (konfiks) ditulis serangkai: 'menyebarluaskan', 'mempertanggungjawabkan', 'melipatgandakan', 'menganaktirikan'. (Catatan: pada opsi B fokus pada 'menyebarluaskan' yang benar dibanding opsi A, C, D yang salah rangkai)."
                },
                {
                    q: "Perhatikan kalimat berikut: ' Lembah hijau di kaki gunung itu tampak sangat asri bila dipandang dari gardu pandang pada bulan Nopember.' Kata tidak baku dalam kalimat tersebut dan perbaikannya adalah...",
                    opts: [
                        "'asri' seharusnya 'asli'",
                        "'lembah' seharusnya 'lemba'",
                        "'Nopember' seharusnya 'November'",
                        "'gardu' seharusnya 'garu'"
                    ],
                    ans: 2,
                    exp: "Nama bulan ke-11 yang baku dalam KBBI adalah 'November' (menggunakan huruf v, bukan p), demikian pula 'Februari' (bukan Pebruari)."
                },
                {
                    q: "Manakah deretan kosakata di bawah ini yang SELURUHNYA BAKU menurut KBBI VI?",
                    opts: [
                        "cengkeh, mangkok, kaos, saos",
                        "cengkih, mangkuk, kaus, saus",
                        "cengkeh, mangkuk, kaus, saos",
                        "cengkih, mangkok, kaos, saus"
                    ],
                    ans: 1,
                    exp: "Bentuk baku menurut KBBI adalah 'cengkih' (bukan cengkeh), 'mangkuk' (bukan mangkok), 'kaus' (bukan kaos), dan 'saus' (bukan saos)."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 3: FRASA DAN KLAUSA (2 SUB-MATERI)
        // =====================================================================
        {
            key: "pbm_3_0",
            kategori: "Frasa dan Klausa",
            judul: "Frasa / Kelompok Kata Endosentrik & Eksosentrik",
            ringkasan: `
                <p><strong>Frasa</strong> adalah gabungan dua kata atau lebih yang bersifat <strong>nonpredikatif</strong> (tidak memiliki struktur S-P) dan mengisi satu fungsi kalimat.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Frasa</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri & Pola</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Endosentrik Atributif (Pola D-M / M-D)</td>
                                <td class="p-2">Memiliki satu unsur inti (Diterangkan/D) dan penjelas (Menerangkan/M)</td>
                                <td class="p-2"><strong>rumah baru</strong> (D-M: nomina), <strong>sangat cepat</strong> (M-D: adjektiva), <strong>sedang belajar</strong> (M-D: verba)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Endosentrik Koordinatif</td>
                                <td class="p-2">Dua unsur setara (bisa disisipi <em>dan/atau</em>)</td>
                                <td class="p-2"><strong>ayah ibu</strong>, <strong>tua muda</strong>, <strong>pulang pergi</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Eksosentrik (Frasa Preposisional)</td>
                                <td class="p-2">Diawali preposisi (<em>di, ke, dari, pada, untuk</em>) + nomina; tidak punya unsur inti yang bisa berdiri sendiri</td>
                                <td class="p-2"><strong>di perpustakaan</strong>, <strong>ke Jakarta</strong>, <strong>untuk masyarakat</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Pola Frasa Sejajar di UTBK:</strong> Jika ditanya <em>"Frasa yang berpola sama dengan [X]"</em>, perhatikan urutan <strong>Kelas Kata + Fungsi Inti (D-M)</strong>! Misalnya: <em>"perubahan iklim global"</em> = Nomina (perubahan) + Nomina (iklim) + Adjektiva (global).
                </div>
            `,
            contoh: {
                soal: "Frasa 'energi terbarukan' berpola D-M (Nomina + Verba pasif/Adjektiva). Manakah yang sepola: 'sangat ramah' atau 'pembangunan berkelanjutan'?",
                langkah: "'pembangunan berkelanjutan' terdiri atas Nomina (D) + Verba ber- (M), sejajar dengan 'energi terbarukan'. Sedangkan 'sangat ramah' berpola M-D (Adverbia + Adjektiva)."
            },
            gameQuestions: [
                {
                    q: "Frasa 'ketahanan pangan nasional' dalam kalimat 'Pemerintah memperkuat ketahanan pangan nasional' memiliki pola konstruksi dan kelas kata yang SAMA dengan frasa...",
                    opts: [
                        "sangat berkembang pesat",
                        "pertumbuhan ekonomi daerah",
                        "di kawasan industri",
                        "sedang melakukan negosiasi"
                    ],
                    ans: 1,
                    exp: "'ketahanan (Nomina) pangan (Nomina) nasional (Adjektiva/Nomina penjelas)' adalah frasa nominal berpola D-M-M, sama persis dengan 'pertumbuhan (Nomina) ekonomi (Nomina) daerah (Nomina penjelas)'."
                },
                {
                    q: "Manakah di antara kelompok kata berikut yang merupakan FRASA EKSOSENTRIK (frasa preposisional)?",
                    opts: [
                        "teknologi kecerdasan buatan",
                        "di laboratorium mikrobiologi",
                        "telah menyelesaikan penelitian",
                        "sangat ramah lingkungan"
                    ],
                    ans: 1,
                    exp: "Frasa eksosentrik adalah frasa yang diawali preposisi (kata depan 'di', 'ke', 'dari', 'pada') diikuti nomina, yaitu 'di laboratorium mikrobiologi'."
                },
                {
                    q: "Gabungan kata 'adik kakak' bila dilihat dari hubungan unsur-unsurnya membentuk...",
                    opts: [
                        "Frasa endosentrik atributif berpola D-M",
                        "Frasa endosentrik koordinatif (setara)",
                        "Frasa eksosentrik direktif",
                        "Klausa bebas predikatif"
                    ],
                    ans: 1,
                    exp: "'adik kakak' terdiri atas dua unsur inti yang kedudukannya setara dan dapat disisipi kata penghubung 'dan' (adik dan kakak), sehingga disebut frasa endosentrik koordinatif."
                },
                {
                    q: "Frasa 'sangat produktif sekali' pada kalimat 'Kinerja tim peneliti itu sangat produktif sekali tahun ini' tergolong tidak efektif. Jenis frasa apakah 'sangat produktif' setelah diperbaiki?",
                    opts: [
                        "Frasa endosentrik atributif berpola M-D (Adverbia + Adjektiva)",
                        "Frasa endosentrik atributif berpola D-M (Adjektiva + Adverbia)",
                        "Frasa eksosentrik direktif",
                        "Frasa endosentrik apositif"
                    ],
                    ans: 0,
                    exp: "Pada frasa adjektival 'sangat produktif', unsur intinya (Diterangkan/D) adalah adjektiva 'produktif', sedangkan 'sangat' adalah pewatas/pendamping (Menerangkan/M) di depan inti, sehingga berpola M-D."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Pemerintah meluncurkan program *digitalisasi pasar tradisional* di berbagai daerah.' Frasa bercetak miring tersebut memiliki pola konstruksi yang SEJAJAR dengan frasa...",
                    opts: [
                        "telah meningkatkan ekspor",
                        "rehabilitasi hutan bakau",
                        "di pusat perbelanjaan",
                        "sangat menguntungkan pedagang"
                    ],
                    ans: 1,
                    exp: "'digitalisasi (Nomina proses) pasar (Nomina) tradisional (Adjektiva/Nomina penjelas)' merupakan frasa nominal endosentrik atributif berpola D-M, sejajar dengan 'rehabilitasi (Nomina proses) hutan (Nomina) bakau (Nomina penjelas)'."
                },
                {
                    q: "Manakah di antara kalimat berikut yang mengandung FRASA ENDOSENTRIK APOSITIF?",
                    opts: [
                        "Pulau Komodo, habitat asli kadal purba raksasa, terletak di Provinsi Nusa Tenggara Timur.",
                        "Para petani garam di Madura mulai menggunakan teknologi geomembran.",
                        "Baik mahasiswa baru maupun mahasiswa lama wajib melakukan registrasi ulang.",
                        "Harga beras medium dan beras premium mulai mengalami penurunan."
                    ],
                    ans: 0,
                    exp: "Frasa endosentrik apositif adalah frasa yang unsur penjelasnya dapat menggantikan unsur intinya (berupa keterangan aposisi yang diapit koma), yaitu 'Pulau Komodo, habitat asli kadal purba raksasa,'."
                },
                {
                    q: "Perhatikan kelompok kata berikut: (1) sedang mengamati, (2) bakteri patogen, (3) di bawah mikroskop, (4) sangat teliti. Urutan jenis frasa dari keempat kelompok kata tersebut adalah...",
                    opts: [
                        "Frasa verbal, frasa nominal, frasa preposisional, frasa adjektival",
                        "Frasa nominal, frasa verbal, frasa adjektival, frasa preposisional",
                        "Frasa verbal, frasa adjektival, frasa preposisional, frasa nominal",
                        "Frasa preposisional, frasa nominal, frasa verbal, frasa adjektival"
                    ],
                    ans: 0,
                    exp: "(1) 'sedang mengamati' = frasa verbal (inti: mengamati); (2) 'bakteri patogen' = frasa nominal (inti: bakteri); (3) 'di bawah mikroskop' = frasa preposisional/eksosentrik; (4) 'sangat teliti' = frasa adjektival (inti: teliti)."
                },
                {
                    q: "Mengapa gabungan kata 'petani memanen' TIDAK dikategorikan sebagai frasa, melainkan klausa?",
                    opts: [
                        "Karena terdiri atas dua kata benda yang setara.",
                        "Karena memiliki hubungan predikatif antara Subjek ('petani') dan Predikat ('memanen').",
                        "Karena diawali oleh kata depan penunjuk tempat.",
                        "Karena tidak dapat diperluas dengan objek."
                    ],
                    ans: 1,
                    exp: "Syarat mutlak frasa adalah bersifat nonpredikatif (menduduki satu fungsi kalimat). Ketika dua kata membentuk hubungan Subjek ('petani') dan Predikat ('memanen'), konstruksi tersebut bersifat predikatif dan menjadi klausa."
                },
                {
                    q: "Frasa ambigu (bermakna ganda) terdapat pada kalimat 'Lukisan ayah yang antik itu dipajang di ruang tamu.' Makna ganda pada frasa 'lukisan ayah' muncul karena...",
                    opts: [
                        "Kata 'lukisan' tidak baku dalam KBBI.",
                        "Frasa nominal tersebut dapat bermakna 'lukisan milik ayah', 'lukisan buatan ayah', atau 'lukisan bergambar wajah ayah'.",
                        "Kata 'ruang tamu' merupakan frasa eksosentrik.",
                        "Kata 'antik' seharusnya diletakkan di awal kalimat."
                    ],
                    ans: 1,
                    exp: "Frasa nominal kepemilikan/atributif 'lukisan ayah' bersifat taksa (ambigu) karena hubungan semantis antara unsur D ('lukisan') dan M ('ayah') dapat ditafsirkan sebagai milik, karya, atau objek gambar."
                },
                {
                    q: "Manakah di antara pilihan berikut yang merupakan FRASA VERBAL berpola M-D (Menerangkan-Diterangkan)?",
                    opts: [
                        "bekerja keras",
                        "akan diberangkatkan",
                        "makan malam",
                        "tertidur pulas"
                    ],
                    ans: 1,
                    exp: "Pada frasa 'akan diberangkatkan', kata bantu aspek 'akan' berfungsi sebagai penjelas (Menerangkan/M) yang mendahului inti verba 'diberangkatkan' (Diterangkan/D). Adapun 'bekerja keras', 'makan malam', dan 'tertidur pulas' berpola D-M."
                }
            ]
        },
        {
            key: "pbm_3_1",
            kategori: "Frasa dan Klausa",
            judul: "Klausa Terikat & Bebas",
            ringkasan: `
                <p>Berbeda dengan frasa, <strong>klausa</strong> adalah satuan gramatikal yang <strong>bersifat predikatif (memiliki Subjek dan Predikat)</strong> dan berpotensi menjadi kalimat.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Klausa</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Utama</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh dalam Kalimat Majemuk</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Klausa Bebas (Induk Kalimat)</td>
                                <td class="p-2">Memiliki S-P lengkap, tidak diawali konjungsi subordinatif, dan <strong>dapat berdiri sendiri</strong> sebagai kalimat tunggal</td>
                                <td class="p-2"><strong>Petani memanen padi</strong> (ketika musim kemarau tiba).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Klausa Terikat (Anak Kalimat)</td>
                                <td class="p-2">Diawali konjungsi subordinatif (<em>ketika, karena, jika, meskipun, bahwa, yang</em>) dan <strong>tidak dapat berdiri sendiri</strong></td>
                                <td class="p-2">(Petani memanen padi) <strong>ketika musim kemarau tiba</strong>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
                    <strong>⚡ Jebakan Kata "YANG":</strong> Kata penghubung <strong>"yang"</strong> membentuk klausa perluasan (klausa relatif/terikat). Jika antara Subjek dan Predikat disisipi kata <em>"yang"</em> tanpa ada Predikat utama sesudahnya, kalimat tersebut menjadi <strong>tidak memiliki Predikat utama (fragmen kalimat)</strong>!
                </div>
            `,
            contoh: {
                soal: "Mengapa kalimat 'Mahasiswa yang mengikuti pertukaran pelajar ke Jepang tahun ini.' bukan kalimat lengkap?",
                langkah: "Karena kata 'yang' mengubah 'mengikuti pertukaran pelajar...' menjadi klausa terikat (perluasan Subjek). Akibatnya, kalimat ini hanya memiliki Subjek panjang tanpa Predikat utama."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat majemuk berikut: 'Ketika harga komoditas batu bara dunia melandai, pemerintah mempercepat proyek hilirisasi mineral di dalam negeri.' Klausa bebas (induk kalimat) pada kalimat tersebut adalah...",
                    opts: [
                        "Ketika harga komoditas batu bara dunia melandai",
                        "harga komoditas batu bara dunia melandai",
                        "pemerintah mempercepat proyek hilirisasi mineral di dalam negeri",
                        "proyek hilirisasi mineral di dalam negeri"
                    ],
                    ans: 2,
                    exp: "Klausa bebas (induk kalimat) adalah klausa S-P-O-K yang tidak diawali konjungsi subordinatif 'ketika' dan dapat berdiri sendiri sebagai kalimat utuh, yaitu 'pemerintah mempercepat proyek hilirisasi mineral di dalam negeri'."
                },
                {
                    q: "Manakah di antara konstruksi di bawah ini yang hanya berupa KLAUSA TERIKAT (fragmen) sehingga belum memenuhi syarat sebagai kalimat utuh?",
                    opts: [
                        "Para peneliti bioteknologi berhasil mengisolasi bakteri pengurai limbah plastik.",
                        "Pembangunan bendungan raksasa yang menelan anggaran triliunan rupiah sejak tahun lalu.",
                        "Inovasi sistem irigasi tetes terbukti menghemat penggunaan air hingga empat puluh persen.",
                        "Meskipun medan pegunungan sangat terjal, tim medis berhasil menjangkau desa terpencil itu."
                    ],
                    ans: 1,
                    exp: "Pada opsi B, keberadaan kata 'yang' setelah 'Pembangunan bendungan raksasa' membuat seluruh bagian sesudahnya menjadi perluasan Subjek (klausa terikat relatif), sehingga konstruksi tersebut belum memiliki Predikat utama."
                },
                {
                    q: "Berapa jumlah klausa yang terdapat dalam kalimat: 'Dokter menjelaskan bahwa pasien harus beristirahat total agar kondisinya segera pulih'?",
                    opts: [
                        "1 klausa",
                        "2 klausa",
                        "3 klausa",
                        "4 klausa"
                    ],
                    ans: 2,
                    exp: "Terdapat 3 klausa (ditandai oleh 3 pasangan S-P dan 2 konjungsi subordinatif 'bahwa' & 'agar'): (1) Dokter menjelaskan [klausa bebas], (2) bahwa pasien harus beristirahat total [klausa terikat], (3) agar kondisinya segera pulih [klausa terikat]."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Satelit cuaca yang diluncurkan oleh badan antariksa itu mengirimkan citra awan beresolusi tinggi.' Klausa terikat (anak kalimat perluasan) dalam kalimat tersebut adalah...",
                    opts: [
                        "Satelit cuaca mengirimkan citra awan beresolusi tinggi",
                        "yang diluncurkan oleh badan antariksa itu",
                        "mengirimkan citra awan beresolusi tinggi",
                        "oleh badan antariksa itu mengirimkan citra"
                    ],
                    ans: 1,
                    exp: "Bagian 'yang diluncurkan oleh badan antariksa itu' merupakan klausa relatif (klausa terikat) yang berfungsi memperluas Subjek 'Satelit cuaca'. Adapun klausa intinya (bebas) adalah 'Satelit cuaca mengirimkan citra awan beresolusi tinggi'."
                },
                {
                    q: "Kalimat majemuk setara terdiri atas dua klausa bebas atau lebih yang dihubungkan oleh konjungsi koordinatif. Manakah di bawah ini yang merupakan kalimat dengan DUA KLAUSA BEBAS?",
                    opts: [
                        "Tim SAR mengevakuasi warga lansia ketika banjir mulai merendam permukiman.",
                        "Kakak sedang menyusun skripsi di perpustakaan, sedangkan adik mengikuti les musik.",
                        "Jika curah hujan terus meningkat, debit air waduk akan melampaui batas normal.",
                        "Para petani berharap bahwa harga gabah kering panen tidak anjlok bulan ini."
                    ],
                    ans: 1,
                    exp: "Konjungsi koordinatif 'sedangkan' menghubungkan dua klausa bebas yang setara: (1) 'Kakak sedang menyusun skripsi di perpustakaan' dan (2) 'adik mengikuti les musik'. Opsi A, C, dan D adalah kalimat majemuk bertingkat (1 klausa bebas + 1 klausa terikat)."
                },
                {
                    q: "Berdasarkan kategori pengisi fungsi Predikatnya, klausa 'Harga cabai merah di pasar induk sangat tinggi' tergolong sebagai...",
                    opts: [
                        "Klausa verbal",
                        "Klausa adjektival",
                        "Klausa nominal",
                        "Klausa preposisional"
                    ],
                    ans: 1,
                    exp: "Subjek klausa tersebut adalah 'Harga cabai merah di pasar induk', sedangkan Predikatnya diisi oleh frasa adjektival 'sangat tinggi', sehingga disebut klausa adjektival."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Karena tidak memakai alat pelindung diri, pekerja konstruksi itu ditegur oleh pengawas proyek.' Klausa pertama ('Karena tidak memakai alat pelindung diri') disebut klausa terikat nirsubjek (elipsis subjek) yang subjeknya mengacu pada...",
                    opts: [
                        "alat pelindung diri",
                        "pekerja konstruksi itu",
                        "pengawas proyek",
                        "proyek konstruksi"
                    ],
                    ans: 1,
                    exp: "Subjek yang mengalami pelesapan (elipsis) pada anak kalimat 'Karena [ia] tidak memakai alat pelindung diri' memiliki koreferensi (rujukan yang sama) dengan Subjek induk kalimat, yaitu 'pekerja konstruksi itu'."
                },
                {
                    q: "Manakah kalimat berikut yang mengandung KLAUSA NOMINAL (klausa yang predikatnya berupa kata benda/frasa nominal)?",
                    opts: [
                        "Ayah saya seorang arsitek jembatan gantung.",
                        "Mahasiswa itu sedang merancang jembatan gantung.",
                        "Jembatan gantung itu sangat kokoh.",
                        "Jembatan gantung itu dibangun sejak tahun lalu."
                    ],
                    ans: 0,
                    exp: "Pada kalimat 'Ayah saya (S) seorang arsitek jembatan gantung (P)', fungsi Predikat diisi oleh frasa nominal 'seorang arsitek jembatan gantung', sehingga disebut klausa nominal."
                },
                {
                    q: "Jika klausa bebas 'Kualitas udara di kota itu membaik' digabungkan dengan klausa 'pemerintah memperluas kawasan bebas kendaraan bermotor' menggunakan konjungsi syarat, manakah hasil kalimat majemuk bertingkat yang TEPAT?",
                    opts: [
                        "Kualitas udara di kota itu membaik, apabila pemerintah memperluas kawasan bebas kendaraan bermotor.",
                        "Kualitas udara di kota itu akan membaik apabila pemerintah memperluas kawasan bebas kendaraan bermotor.",
                        "Apabila kualitas udara di kota itu membaik, namun pemerintah memperluas kawasan bebas kendaraan bermotor.",
                        "Kualitas udara di kota itu membaik sedangkan pemerintah memperluas kawasan bebas kendaraan bermotor."
                    ],
                    ans: 1,
                    exp: "Konjungsi syarat 'apabila' membentuk klausa terikat. Karena klausa terikat berada di belakang klausa bebas (induk kalimat), tidak digunakan tanda koma sebelum kata 'apabila'."
                },
                {
                    q: "Perhatikan konstruksi berikut: 'Perusahaan rintisan yang berhasil mengembangkan baterai ramah lingkungan dari limbah sekam padi.' Agar konstruksi klausa terikat tersebut berubah menjadi kalimat tunggal berpredikat yang utuh, penyuntingan paling ringkas adalah...",
                    opts: [
                        "Menambahkan kata 'Dalam' di awal konstruksi.",
                        "Menghapus konjungsi 'yang' sebelum kata 'berhasil'.",
                        "Menambahkan konjungsi 'karena' sebelum kata 'dari'.",
                        "Mengubah kata 'mengembangkan' menjadi 'pengembangan'."
                    ],
                    ans: 1,
                    exp: "Dengan menghapus kata 'yang', frasa 'Perusahaan rintisan' menjadi Subjek dan 'berhasil mengembangkan' menjadi Predikat utama, sehingga terbentuk kalimat utuh (klausa bebas)."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 4: STRUKTUR KALIMAT (3 SUB-MATERI)
        // =====================================================================
        {
            key: "pbm_4_0",
            kategori: "Struktur Kalimat",
            judul: "Struktur Kalimat (S-P-O-Pel-Ket)",
            ringkasan: `
                <p>Membedah fungsi sintaksis <strong>Subjek (S), Predikat (P), Objek (O), Pelengkap (Pel), dan Keterangan (K)</strong> adalah kunci utama menjawab soal pola kalimat sejenis di UTBK.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Pembeda</th>
                                <th class="p-2 border border-slate-200 text-left">Objek (O)</th>
                                <th class="p-2 border border-slate-200 text-left">Pelengkap (Pel)</th>
                                <th class="p-2 border border-slate-200 text-left">Keterangan (K)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Jenis Predikat</td>
                                <td class="p-2">Verba aktif transitif (<em>meN-</em>)</td>
                                <td class="p-2">Verba intransitif (<em>ber-, ter-, menjadi, merupakan</em>) atau pasif (<em>di-</em>)</td>
                                <td class="p-2">Bebas (semua jenis predikat)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Dapat Jadi S Pasif?</td>
                                <td class="p-2"><strong>BISA</strong> menjadi Subjek saat kalimat dipasifkan</td>
                                <td class="p-2"><strong>TIDAK BISA</strong> menjadi Subjek kalimat pasif</td>
                                <td class="p-2">Tidak bisa jadi S pasif</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Posisi & Preposisi</td>
                                <td class="p-2">Langsung di belakang P (tanpa preposisi)</td>
                                <td class="p-2">Di belakang P (atau di belakang O pada kalimat dwitransitif)</td>
                                <td class="p-2">Posisi fleksibel (bisa dipindah ke awal kalimat); umumnya diawali preposisi/konjungsi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Tentukan pola kalimat: 'Indonesia (1) merupakan (2) negara kepulauan terbesar (3) di dunia (4).'",
                langkah: "(1) Indonesia = Subjek; (2) merupakan = Predikat kopula/intransitif; (3) negara kepulauan terbesar = Pelengkap (karena 'merupakan' tidak bisa dipasifkan); (4) di dunia = Keterangan tempat. Pola: S - P - Pel - K."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat berikut: 'Sejak awal tahun ini, Bank Sentral memperketat kebijakan suku bunga acuan demi menjaga stabilitas nilai tukar.' Pola fungsi sintaksis kalimat tersebut adalah...",
                    opts: [
                        "K - S - P - O - K",
                        "K - S - P - Pel - K",
                        "S - P - O - Pel - K",
                        "K - S - P - O - Pel"
                    ],
                    ans: 0,
                    exp: "'Sejak awal tahun ini,' (K waktu) + 'Bank Sentral' (S) + 'memperketat' (P aktif transitif) + 'kebijakan suku bunga acuan' (O, bisa dipasifkan menjadi 'kebijakan... diperketat') + 'demi menjaga stabilitas nilai tukar' (K tujuan). Pola: K - S - P - O - K."
                },
                {
                    q: "Kalimat 'Koperasi desa itu beranggotakan seratus lima puluh petani kopi' memiliki pola kalimat S - P - Pel. Manakah kalimat di bawah ini yang memiliki pola SAMA (S - P - Pel)?",
                    opts: [
                        "Pemerintah daerah membangun jembatan gantung di desa terpencil.",
                        "Pencemaran limbah industri itu menjadi ancaman serius bagi ekosistem sungai.",
                        "Para mahasiswa sedang mendiskusikan rancangan undang-undang energi baru.",
                        "Ekspor komoditas rumput laut meningkat tajam pada kuartal ketiga."
                    ],
                    ans: 1,
                    exp: "'Pencemaran limbah industri itu' (S) + 'menjadi' (P intransitif/kopula) + 'ancaman serius bagi ekosistem sungai' (Pelengkap). Opsi A dan C berpola S-P-O(-K) karena predikatnya transitif ('membangun', 'mendiskusikan'), sedangkan opsi D berpola S-P-K."
                },
                {
                    q: "Dalam kalimat 'Ayah membelikan adik sepeda baru di toko olahraga', fungsi sintaksis kata 'adik' dan 'sepeda baru' berturut-turut adalah...",
                    opts: [
                        "Pelengkap dan Objek",
                        "Objek dan Pelengkap",
                        "Objek dan Keterangan",
                        "Pelengkap dan Keterangan"
                    ],
                    ans: 1,
                    exp: "Predikat dwitransitif 'membelikan' diikuti oleh Objek ('adik' — bisa dipasifkan menjadi 'Adik dibelikan sepeda baru oleh Ayah') dan Pelengkap ('sepeda baru' — berada langsung di belakang Objek)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Para arkeolog yang meneliti situs candi bawah tanah itu menemukan prasasti perunggu berangka tahun 850 Masehi.' Inti kalimat (S-P-O inti) dari kalimat luas tersebut adalah...",
                    opts: [
                        "Arkeolog meneliti situs candi.",
                        "Para arkeolog menemukan prasasti perunggu.",
                        "Situs candi bawah tanah memiliki prasasti perunggu.",
                        "Prasasti perunggu berangka tahun 850 Masehi."
                    ],
                    ans: 1,
                    exp: "Inti kalimat diperoleh dengan mengambil inti Subjek ('Para arkeolog', membuang perluasan 'yang meneliti...'), inti Predikat ('menemukan'), dan inti Objek ('prasasti perunggu', membuang perluasan 'berangka tahun...')."
                },
                {
                    q: "Manakah di antara kalimat berikut yang merupakan KALIMAT INVERSI (kalimat yang posisi Predikatnya mendahului Subjek: P - S)?",
                    opts: [
                        "Di atas meja kerja itu tersimpan dokumen rahasia perusahaan.",
                        "Dokumen rahasia perusahaan tersimpan di atas meja kerja itu.",
                        "Manajer keuangan menyimpan dokumen rahasia di atas meja kerja.",
                        "Karena sangat penting, dokumen itu disimpan di dalam brankas baja."
                    ],
                    ans: 0,
                    exp: "Pada opsi A: 'Di atas meja kerja itu' (K tempat) + 'tersimpan' (Predikat verba pasif) + 'dokumen rahasia perusahaan' (Subjek). Karena Predikat 'tersimpan' mendahului Subjek, kalimat ini berpola inversi (K - P - S)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Tubuhnya bercucuran keringat setelah berlari mengelilingi stadion.' Fungsi sintaksis kata 'keringat' pada kalimat tersebut adalah...",
                    opts: [
                        "Subjek",
                        "Objek",
                        "Pelengkap",
                        "Keterangan alat"
                    ],
                    ans: 2,
                    exp: "Predikat 'bercucuran' adalah verba berimbuhan 'ber-...-an' (intransitif) yang tidak dapat dipasifkan, sehingga nomina 'keringat' yang hadir langsung di belakangnya tanpa preposisi berfungsi sebagai Pelengkap (S - P - Pel - K)."
                },
                {
                    q: "Kalimat 'Melalui pemanfaatan satelit penginderaan jauh, peneliti memantau deforestasi hutan hujan tropis secara akurat' memiliki pola sintaksis yang SAMA dengan kalimat...",
                    opts: [
                        "Dengan metode fermentasi tertutup, petani meningkatkan mutu biji kakao secara konsisten.",
                        "Pada musim kemarau panjang, debit air sungai di wilayah hilir menyusut drastis.",
                        "Pemerintah memberikan insentif pajak kepada industri kendaraan listrik di dalam negeri.",
                        "Dalam simposium internasional itu, para pakar berdiskusi dengan sangat antusias."
                    ],
                    ans: 0,
                    exp: "Kalimat soal berpola K ('Melalui...') - S ('peneliti') - P ('memantau') - O ('deforestasi...') - K ('secara akurat'). Opsi A memiliki pola yang sama persis: K ('Dengan metode...') - S ('petani') - P ('meningkatkan') - O ('mutu biji kakao') - K ('secara konsisten'). Opsi B dan D tidak memiliki Objek (S-P-K)."
                },
                {
                    q: "Dalam kalimat 'Negara Indonesia berdasarkan Pancasila dan Undang-Undang Dasar 1945', frasa 'Pancasila dan Undang-Undang Dasar 1945' menduduki fungsi...",
                    opts: [
                        "Objek",
                        "Pelengkap",
                        "Keterangan tempat",
                        "Predikat"
                    ],
                    ans: 1,
                    exp: "Kata kerja 'berdasarkan' (berawalan ber-) bersifat intransitif sehingga tidak dapat dipasifkan. Nomina yang wajib hadir melengkapi verba 'berdasarkan' berfungsi sebagai Pelengkap."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Pemerintah menetapkan kawasan karst Maros-Pangkep sebagai taman bumi global.' Pola fungsi kalimat tersebut adalah...",
                    opts: [
                        "S - P - O - Pel",
                        "S - P - Pel - K",
                        "S - P - O - O",
                        "S - P - K - Pel"
                    ],
                    ans: 0,
                    exp: "'Pemerintah' (S) + 'menetapkan' (P transitif) + 'kawasan karst Maros-Pangkep' (Objek) + 'sebagai taman bumi global' (Pelengkap objek)."
                },
                {
                    q: "Mengapa kata 'kerugian' dalam kalimat 'Perusahaan logistik itu mengalami kerugian besar akibat lonjakan harga solar' berfungsi sebagai OBJEK, bukan Pelengkap?",
                    opts: [
                        "Karena kata 'kerugian' diawali oleh preposisi.",
                        "Karena predikatnya ('mengalami') adalah verba transitif aktif meN-...-i dan kalimatnya dapat dipasifkan menjadi 'Kerugian besar dialami oleh perusahaan logistik itu...'.",
                        "Karena kata 'kerugian' dapat dipindahkan ke akhir kalimat setelah kata 'solar'.",
                        "Karena kata 'kerugian' merupakan kata sifat."
                    ],
                    ans: 1,
                    exp: "Bukti paling sahih bahwa suatu nomina di belakang verba meN- adalah Objek ialah kemampuannya menduduki fungsi Subjek ketika kalimat diubah menjadi kalimat pasif ('Kerugian besar dialami oleh...')."
                }
            ]
        },
        {
            key: "pbm_4_1",
            kategori: "Struktur Kalimat",
            judul: "Kalimat Efektif dan Analisis Kesalahan",
            ringkasan: `
                <p><strong>Kalimat efektif</strong> harus memenuhi 6 syarat utama yang selalu diuji di UTBK PBM dan PPU:</p>
                <ol class="list-decimal pl-5 space-y-1.5 text-xs my-2">
                    <li><strong>Kesepadanan Struktur:</strong> Wajib minimal memiliki <strong>Subjek (S) dan Predikat (P)</strong> yang jelas (tidak ada preposisi di depan S, tidak ada kata <em>yang</em> menggantung sebelum P).</li>
                    <li><strong>Kehematan Kata (Bebas Pleonasme):</strong> Hindari kata bersinonim yang dipakai bersamaan (<em>agar supaya, adalah merupakan, sejak dari, sangat ... sekali, para siswa-siswa, saling bantu-membantu</em>).</li>
                    <li><strong>Keparalelan (Kesejajaran Bentuk):</strong> Rincian yang dihubungkan <em>dan/atau</em> harus satu kelas kata/imbuhan yang setara (<em>meN-</em> semua atau <em>peN-...-an</em> semua).</li>
                    <li><strong>Ketegasan & Kecermatan (Tidak Ambigu):</strong> Hindari struktur yang menimbulkan tafsir ganda.</li>
                    <li><strong>Kelogisan Makna:</strong> Subjek dan Predikat harus masuk akal secara nalar (contoh salah: <em>"Waktu dan tempat kami persilakan"</em> &rarr; seharusnya <em>"Kepada Bapak Dekan, kami persilakan"</em> atau <em>"Bapak Dekan kami persilakan"</em>).</li>
                </ol>
            `,
            contoh: {
                soal: "Mengapa kalimat 'Para peneliti-peneliti itu saling bertukar-tukaran data riset' tidak efektif?",
                langkah: "Terdapat dua bentuk pleonasme (kelewahan): 'para peneliti-peneliti' (kata 'para' sudah jamak, tidak perlu reduplikasi) dan 'saling bertukar-tukaran' (kata 'saling' sudah menyatakan resiprokal). Perbaikan: 'Para peneliti itu saling bertukar data riset.'"
            },
            gameQuestions: [
                {
                    q: "Manakah di antara kalimat berikut yang memenuhi seluruh kriteria KALIMAT EFEKTIF?",
                    opts: [
                        "Dalam rapat koordinasi tersebut membahas strategi pengendalian inflasi pangan menjelang akhir tahun.",
                        "Pemerintah terus berupaya keras agar supaya harga kebutuhan pokok tetap stabil di seluruh wilayah.",
                        "Peningkatan kualitas pendidikan vokasi bertujuan menyiapkan lulusan yang terampil dan berdaya saing tinggi.",
                        "Banyak berbagai macam kendala teknis yang dihadapi tim ekspedisi saat memetakan kawah gunung berapi."
                    ],
                    ans: 2,
                    exp: "Opsi C memiliki Subjek ('Peningkatan kualitas pendidikan vokasi'), Predikat ('bertujuan'), Pelengkap ('menyiapkan lulusan...'), hemat kata, dan paralel. Opsi A tidak bersubjek (diawali 'Dalam'); Opsi B pleonasme ('agar supaya'); Opsi D pleonasme ('Banyak berbagai macam')."
                },
                {
                    q: "Perhatikan kalimat tidak efektif berikut: 'Bagi warga yang kehilangan dokumen kependudukan akibat banjir harap segera melapor ke posko kelurahan.' Cara paling tepat untuk memperbaiki kalimat tersebut agar efektif adalah...",
                    opts: [
                        "Menambahkan tanda koma setelah kata 'banjir'.",
                        "Menghilangkan kata 'Bagi' di awal kalimat.",
                        "Mengubah kata 'melapor' menjadi 'melaporkan'.",
                        "Menambahkan kata 'bahwa' setelah kata 'harap'."
                    ],
                    ans: 1,
                    exp: "Menghilangkan preposisi 'Bagi' di awal kalimat mengembalikan fungsi 'Warga yang kehilangan dokumen kependudukan akibat banjir' sebagai Subjek kalimat yang utuh."
                },
                {
                    q: "Kalimat manakah yang mengandung kesalahan PLEONASME (kelewahan kata)?",
                    opts: [
                        "Sejak pagi buta, para nelayan tradisional itu telah melaut mencari ikan cakalang.",
                        "Kedua negara sepakat untuk saling bekerja sama dalam memberantas kejahatan siber lintas batas.",
                        "Riset kolaboratif itu melibatkan sejumlah universitas terkemuka dari lima benua.",
                        "Harga komoditas karet alam mulai berangsur pulih di pasar berjangka internasional."
                    ],
                    ans: 1,
                    exp: "Frasa 'saling bekerja sama' mengandung pleonasme karena 'bekerja sama' sudah bermakna resiprokal (timbal balik), sehingga kata 'saling' harus dihilangkan (cukup 'bekerja sama')."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Untuk mempersingkat waktu, acara selanjutnya adalah sambutan ketua panitia.' Mengapa frasa 'mempersingkat waktu' pada kalimat tersebut dianggap TIDAK LOGIS?",
                    opts: [
                        "Karena waktu bersifat tetap (24 jam sehari) dan tidak dapat dipersingkat; yang dapat dihemat atau diefisienkan adalah penggunaan waktunya ('menghemat waktu').",
                        "Karena kata 'mempersingkat' tidak baku dalam KBBI.",
                        "Karena seharusnya ditulis 'mempersingkatkan waktu'.",
                        "Karena kata 'waktu' tidak boleh didahului kata kerja transitif."
                    ],
                    ans: 0,
                    exp: "Secara logika (kelogisan kalimat efektif), waktu adalah besaran yang berjalan konstan sehingga tidak dapat dipersingkat atau diperpanjang. Ungkapan yang logis adalah 'Untuk menghemat waktu,...' atau 'Untuk mengefisienkan waktu,...'."
                },
                {
                    q: "Manakah kalimat berikut yang TIDAK EFEKTIF karena melanggar syarat KEPARALELAN (kesejajaran bentuk)?",
                    opts: [
                        "Tahap produksi teh meliputi pemetikan pucuk daun, pelayuan, penggilingan, dan pengeringan.",
                        "Petugas pemadam kebakaran segera melokalisasi api, mengevakuasi penghuni gedung, dan pemadaman titik bara.",
                        "Program itu dirancang untuk meningkatkan literasi digital, memperluas akses internet, dan melindungi data pribadi.",
                        "Baik kualitas pelayanan maupun kecepatan pengiriman menjadi prioritas utama perusahaan kami."
                    ],
                    ans: 1,
                    exp: "Pada opsi B, rincian pertama ('melokalisasi' = verba meN-) dan kedua ('mengevakuasi' = verba meN-) berbentuk verba aktif, sedangkan rincian ketiga ('pemadaman' = nomina peN-...-an) tidak sejajar. Seharusnya diubah menjadi 'memadamkan titik bara'."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Mobil gubernur yang baru itu diparkir di halaman kantor provinsi.' Kalimat tersebut tidak efektif karena mengandung AMBIGUITAS (ketaksaan makna). Cara memperbaikinya apabila yang dimaksud 'baru' adalah pejabat gubernurnya adalah...",
                    opts: [
                        "Mobil baru gubernur itu diparkir di halaman kantor provinsi.",
                        "Mobil milik gubernur baru itu diparkir di halaman kantor provinsi.",
                        "Mobil yang baru milik gubernur itu diparkir di halaman kantor provinsi.",
                        "Di halaman kantor provinsi, mobil gubernur yang baru itu diparkir."
                    ],
                    ans: 1,
                    exp: "Pada 'Mobil gubernur yang baru', kata 'yang baru' dapat mengacu pada 'mobil' atau 'gubernur'. Dengan mengubahnya menjadi 'Mobil milik gubernur baru itu', jelas bahwa yang baru dilantik adalah gubernurnya."
                },
                {
                    q: "Manakah kalimat di bawah ini yang LOGIS dan EFEKTIF?",
                    opts: [
                        "Pengendara sepeda motor dilarang keras tidak boleh melewati jalur khusus pejalan kaki.",
                        "Kepada pemenang lomba karya tulis ilmiah, waktu dan tempat kami persilakan untuk naik ke panggung.",
                        "Dompet kulit yang ditemukan petugas kebersihan di taman kota itu telah dikembalikan kepada pemiliknya.",
                        "Jenazah korban kecelakaan pesawat tersebut telah ditemukan oleh tim penyelamat di lereng bukit."
                    ],
                    ans: 2,
                    exp: "Opsi C efektif dan logis. Opsi A tidak logis karena negasi ganda ('dilarang keras tidak boleh' = berarti harus lewat); Opsi B tidak logis karena 'waktu dan tempat' bukan manusia yang bisa dipersilakan; Opsi D kontradiktif secara semantis antara 'jenazah' dan 'penyelamat' (lebih tepat 'tim pencari/SAR')."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Melalui digitalisasi layanan pajak daerah diharapkan dapat meningkatkan pendapatan asli daerah secara transparan.' Kesalahan struktur pada kalimat tersebut disebabkan oleh...",
                    opts: [
                        "Penggunaan kata 'Melalui' di awal kalimat yang membuat bagian Subjek berubah menjadi Keterangan sehingga kalimat tidak memiliki Subjek.",
                        "Penggunaan kata 'secara transparan' di akhir kalimat.",
                        "Penggunaan verba pasif 'diharapkan' yang tidak baku.",
                        "Tidak adanya tanda koma setelah kata 'pajak'."
                    ],
                    ans: 0,
                    exp: "Preposisi 'Melalui' di awal kalimat menyebabkan frasa 'digitalisasi layanan pajak daerah' berubah fungsi menjadi Keterangan cara/alat, sehingga predikat 'diharapkan' kehilangan Subjek. Perbaikannya: hapus kata 'Melalui' (Digitalisasi layanan pajak daerah diharapkan dapat...)."
                },
                {
                    q: "Manakah kalimat berikut yang bebas dari kelewahan kata (hemat dan efektif)?",
                    opts: [
                        "Sejak dari bangku sekolah dasar, ia sudah gemar membaca ensiklopedia sains.",
                        "Sejumlah pabrik tekstil di kawasan itu mulai menggunakan energi surya.",
                        "Para hadirin sekalian dimohon berdiri untuk menyanyikan lagu kebangsaan.",
                        "Candi Borobudur adalah merupakan salah satu warisan budaya dunia yang sangat megah sekali."
                    ],
                    ans: 1,
                    exp: "Opsi B hemat dan efektif. Opsi A pleonasme ('Sejak dari'); Opsi C pleonasme ('Para hadirin sekalian' — kata 'hadirin' sudah bermakna jamak); Opsi D pleonasme ('adalah merupakan' dan 'sangat megah sekali')."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Penelitian yang dilakukan oleh tim mahasiswa agronomi itu membuktikan bahwa pupuk kompos mampu menyuburkan tanah liat.' Mengapa kalimat tersebut sudah termasuk KALIMAT EFEKTIF?",
                    opts: [
                        "Karena menggunakan kata penghubung 'yang' dan 'bahwa' secara bersamaan tanpa predikat.",
                        "Karena memiliki Subjek ('Penelitian yang dilakukan oleh tim mahasiswa agronomi itu'), Predikat utama ('membuktikan'), dan Objek klausa ('bahwa pupuk kompos...') secara lengkap dan logis.",
                        "Karena tidak memiliki anak kalimat sama sekali.",
                        "Karena diawali oleh kata depan."
                    ],
                    ans: 1,
                    exp: "Meskipun Subjeknya diperluas dengan klausa relatif 'yang dilakukan oleh tim mahasiswa agronomi itu', kalimat ini tetap memiliki Predikat utama 'membuktikan' dan Objek 'bahwa...', sehingga strukturnya lengkap (sepadan), hemat, dan logis."
                }
            ]
        },
        {
            key: "pbm_4_2",
            kategori: "Struktur Kalimat",
            judul: "Kalimat Sumbang (Tidak Padu)",
            ringkasan: `
                <p><strong>Kalimat sumbang (kalimat tidak padu)</strong> adalah kalimat penjelas yang menyimpang dari <strong>gagasan utama (topik fokus)</strong> paragraf. Soal ini menuntut ketelitian membedakan topik umum dan fokus spesifik paragraf.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Strategi 15 Detik Menemukan Kalimat Sumbang:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li>Baca <strong>Kalimat (1) dan Kalimat (2)</strong> untuk mengunci <em>Subjek Bahasan + Aspek Spesifiknya</em> (misal: membicarakan <strong>manfaat ekologis hutan bakau bagi pantai</strong>).</li>
                        <li>Cari satu kalimat yang tiba-tiba membahas <strong>aspek lain</strong> meskipun masih memakai kata kunci yang sama (misal: tiba-tiba membahas <strong>resep kuliner buah bakau</strong> atau <strong>sejarah penamaan bakau</strong>).</li>
                        <li>Pastikan kalimat sebelum dan sesudah kalimat tersebut saling menyambung dengan mulus apabila kalimat sumbang itu dihapus.</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "(1) Tidur yang cukup sangat penting bagi konsolidasi memori otak remaja. (2) Saat tidur lelap, sinapsis saraf memindahkan informasi dari hipokampus ke korteks serebral. (3) Kasur busa berkualitas tinggi kini banyak dijual dengan potongan harga di pusat perbelanjaan. (4) Kurang tidur terbukti menurunkan daya ingat siswa hingga tiga puluh persen. Kalimat manakah yang sumbang?",
                langkah: "Kalimat (1), (2), dan (4) membahas hubungan tidur dengan fungsi memori otak. Kalimat (3) tiba-tiba membahas penjualan kasur busa di pusat perbelanjaan, sehingga kalimat (3) adalah kalimat sumbang."
            },
            gameQuestions: [
                {
                    q: "(1) Mikroplastik kini ditemukan mencemari berbagai ekosistem perairan tawar di Indonesia. (2) Partikel plastik berukuran kurang dari lima milimeter ini berasal dari degradasi sampah kemasan dan serat tekstil sintetis. (3) Industri plastik daur ulang memang mampu menyerap ribuan tenaga kerja baru setiap tahunnya. (4) Organisme akuatik seperti ikan dan plankton kerap menelan mikroplastik karena bentuknya menyerupai makanan alami. (5) Akumulasi partikel tersebut pada rantai makanan berpotensi membahayakan kesehatan manusia yang mengonsumsi ikan. Kalimat yang TIDAK PADU (sumbang) dalam paragraf di atas adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 1,
                    exp: "Paragraf tersebut berfokus pada pencemaran dan bahaya mikroplastik di ekosistem perairan (kalimat 1, 2, 4, 5). Kalimat (3) menyimpang karena membahas penyerapan tenaga kerja di industri plastik daur ulang."
                },
                {
                    q: "(1) Kafein dalam kopi bekerja dengan cara memblokir reseptor adenosin di dalam sistem saraf pusat. (2) Adenosin adalah senyawa kimia otak yang secara alami memicu rasa kantuk dan kelelahan. (3) Ketika reseptor tersebut dihambat oleh kafein, pelepasan neurotransmiter dopamin dan norepinefrin meningkat sehingga kewaspadaan tubuh terjaga. (4) Tanaman kopi robusta umumnya tumbuh subur pada ketinggian 400 hingga 800 meter di atas permukaan laut. (5) Efek stimulan kafein ini biasanya mulai terasa lima belas menit setelah dikonsumsi. Kalimat sumbang pada teks tersebut adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 2,
                    exp: "Fokus paragraf adalah mekanisme biokimia kafein terhadap sistem saraf pusat manusia. Kalimat (4) menyimpang karena membahas syarat ketinggian geografis budi daya tanaman kopi robusta."
                },
                {
                    q: "Mengapa sebuah kalimat dikategorikan sebagai kalimat sumbang di dalam suatu paragraf?",
                    opts: [
                        "Karena kalimat tersebut terlalu pendek dibandingkan kalimat lainnya.",
                        "Karena kalimat tersebut tidak mendukung gagasan utama paragraf dan merusak koherensi wacana.",
                        "Karena kalimat tersebut menggunakan istilah ilmiah yang sulit dipahami pembaca awam.",
                        "Karena kalimat tersebut terletak di bagian akhir paragraf."
                    ],
                    ans: 1,
                    exp: "Kalimat sumbang adalah kalimat yang gagasannya melenceng dari ide pokok paragraf sehingga merusak kepaduan makna (koherensi) antarbagian dalam paragraf."
                },
                {
                    q: "(1) Hutan mangrove di pesisir timur Sumatra memegang peranan vital sebagai penyerap karbon biru (blue carbon) yang sangat efektif. (2) Akar-akar napas mangrove yang rapat mampu mengunci sedimen organik di dalam lumpur anaerobik selama ratusan tahun. (3) Kayu pohon mangrove memang sejak lama dimanfaatkan warga sekitar sebagai bahan bakar arang berkualitas tinggi. (4) Kapasitas penyimpanan karbon ekosistem ini bahkan tercatat empat kali lebih besar dibandingkan hutan hujan daratan dengan luas yang sama. (5) Oleh sebab itu, konversi lahan mangrove menjadi tambak udang akan melepaskan emisi gas rumah kaca dalam jumlah masif. Kalimat yang TIDAK PADU pada paragraf di atas adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 1,
                    exp: "Gagasan utama paragraf adalah peran hutan mangrove sebagai penyerap dan penyimpan karbon biru (kalimat 1, 2, 4, 5). Kalimat (3) sumbang karena membahas pemanfaatan kayu mangrove sebagai bahan bakar arang."
                },
                {
                    q: "(1) Fenomena pulau bahang perkotaan (urban heat island) membuat suhu udara di pusat kota beberapa derajat lebih panas dibandingkan wilayah pinggiran. (2) Permukaan beton dan aspal jalan raya menyerap radiasi matahari sepanjang siang lalu melepaskannya kembali sebagai panas pada malam hari. (3) Minimnya pepohonan peneduh juga mengurangi proses evapotranspirasi yang seharusnya mendinginkan udara sekitar. (4) Gedung pencakar langit di pusat bisnis umumnya memiliki desain arsitektur kaca bergaya minimalis modern. (5) Akibatnya, penggunaan pendingin ruangan di perkotaan meningkat drastis dan memperparah konsumsi listrik. Kalimat sumbang dalam paragraf tersebut adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 2,
                    exp: "Paragraf membahas penyebab dan dampak suhu panas perkotaan (urban heat island). Kalimat (4) menyimpang karena membahas gaya desain arsitektur minimalis gedung pencakar langit."
                },
                {
                    q: "(1) Pupuk hayati mikoriza bekerja melalui simbiosis mutualisme antara jamur tanah dan sistem perakaran tanaman pertanian. (2) Hifa jamur yang halus memperluas bidang serap akar terhadap unsur hara fosfor dan air di dalam pori-pori tanah. (3) Sebagai imbalannya, tanaman menyediakan senyawa karbohidrat hasil fotosintesis bagi pertumbuhan jamur tersebut. (4) Harga pupuk kimia sintetis di tingkat pengecer sering mengalami fluktuasi menjelang musim tanam raya. (5) Kolaborasi biologis ini membuat tanaman jauh lebih tahan terhadap cekaman kekeringan dan serangan patogen akar. Kalimat yang merusak kepaduan paragraf di atas adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 2,
                    exp: "Kalimat (1), (2), (3), dan (5) membahas mekanisme kerja biologis simbiosis mikoriza dengan akar tanaman. Kalimat (4) tidak padu karena membahas fluktuasi harga pupuk kimia sintetis di pasar."
                },
                {
                    q: "(1) Digitalisasi naskah kuno Nusantara menjadi langkah penyelamatan darurat terhadap warisan intelektual masa silam. (2) Banyak lontar dan kertas daluang di museum daerah yang mulai rapuh akibat kelembapan udara tropis serta serangan kutu buku. (3) Wisatawan mancanegara sering membeli cendera mata batik tulis ketika berkunjung ke museum keraton. (4) Melalui pemindaian beresolusi tinggi, isi teks kuno tetap dapat diakses oleh peneliti filologi tanpa harus menyentuh fisik naskah yang rentan hancur. (5) Arsip digital tersebut kemudian disimpan di peladen awan agar aman dari risiko bencana kebakaran. Kalimat sumbang dalam bacaan tersebut terdapat pada...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 1,
                    exp: "Fokus paragraf adalah urgensi dan proses digitalisasi naskah kuno Nusantara (kalimat 1, 2, 4, 5). Kalimat (3) menyimpang karena membicarakan wisatawan yang membeli batik tulis."
                },
                {
                    q: "(1) Polusi cahaya buatan di kota-kota besar ternyata mengganggu navigasi alami berbagai satwa nokturnal. (2) Tukik penyu yang baru menetas di pantai sering tersesat ke arah jalan raya karena tertipu pendar lampu hotel yang lebih terang daripada cakrawala laut. (3) Burung-burung migran yang terbang pada malam hari juga kerap kehilangan orientasi dan menabrak gedung berlampu sorot. (4) Lampu jalan berteknologi LED memang terbukti menghemat tagihan listrik pemerintah daerah hingga lima puluh persen. (5) Gangguan ritme sirkadian dan navigasi ini secara perlahan mengancam kelangsungan populasi satwa liar tersebut. Kalimat yang TIDAK PADU pada paragraf di atas adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 2,
                    exp: "Paragraf berfokus pada dampak negatif polusi cahaya buatan terhadap navigasi satwa nokturnal (kalimat 1, 2, 3, 5). Kalimat (4) sumbang karena membahas penghematan tagihan listrik dari lampu LED."
                },
                {
                    q: "(1) Terapi bakteriofag kembali dilirik oleh dunia kedokteran modern untuk mengatasi krisis bakteri kebal antibiotik (superbug). (2) Bakteriofag adalah virus spesifik yang hanya menginfeksi dan menghancurkan spesies bakteri sasaran tanpa merusak sel tubuh manusia. (3) Alexander Fleming pertama kali menemukan antibiotik penisilin secara tidak sengaja dari jamur pada tahun 1928. (4) Berbeda dengan antibiotik spektrum luas, terapi ini juga tidak membunuh mikrobiota baik yang hidup di dalam usus pasien. (5) Uji klinis terbaru menunjukkan bahwa kombinasi bakteriofag mampu menyembuhkan infeksi luka kronis yang gagal ditangani obat konvensional. Kalimat sumbang pada paragraf tersebut adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 1,
                    exp: "Topik paragraf adalah keunggulan dan cara kerja terapi bakteriofag untuk mengatasi bakteri kebal antibiotik. Kalimat (3) sumbang karena menceritakan sejarah penemuan penisilin oleh Alexander Fleming pada tahun 1928."
                },
                {
                    q: "(1) Sistem pembayaran antarkota berbasis kode QR lintas negara (cross-border QRIS) mempermudah transaksi wisatawan di kawasan Asia Tenggara. (2) Pelancong asal Indonesia kini dapat membayar belanjaan di Thailand atau Malaysia langsung menggunakan saldo rupiah di gawai mereka. (3) Mekanisme ini menghilangkan kerumitan menukar uang tunai di gerai penukaran valuta asing dengan selisih kurs yang mahal. (4) Kuliner kaki lima di Bangkok memang terkenal memiliki cita rasa asam dan pedas yang khas. (5) Selain menguntungkan wisatawan, integrasi pembayaran ini juga memperluas pasar bagi pelaku UMKM di negara tujuan. Kalimat yang TIDAK PADU adalah...",
                    opts: [
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)"
                    ],
                    ans: 2,
                    exp: "Paragraf membahas kemudahan dan manfaat sistem pembayaran kode QR lintas negara di Asia Tenggara. Kalimat (4) menyimpang karena membahas cita rasa kuliner kaki lima di Bangkok."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 5: PARAGRAF & WACANA (3 SUB-MATERI)
        // =====================================================================
        {
            key: "pbm_5_0",
            kategori: "Paragraf & Wacana",
            judul: "Hubungan Kepaduan dan Kohesi Antarkalimat",
            ringkasan: `
                <p>Paragraf yang baik harus memiliki <strong>kohesi (kepaduan bentuk)</strong> dan <strong>koherensi (kepaduan makna)</strong>. Di UTBK, materi ini sering menguji <strong>kata rujukan (pronomina/demonstrativa)</strong> seperti <em>ini, itu, tersebut, nya, mereka</em> serta <strong>penggabungan dua kalimat</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Alat Kohesi</th>
                                <th class="p-2 border border-slate-200 text-left">Fungsi & Cara Cek di UTBK</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Rujukan Anaforis (<em>tersebut, itu, ini, -nya</em>)</td>
                                <td class="p-2">Mengacu pada nomina/gagasan yang <strong>baru saja disebutkan di kalimat sebelumnya</strong>. Cek subjek/objek terdekat di kalimat sebelum kata rujukan!</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Repetisi & Sinonimi</td>
                                <td class="p-2">Mengulang kata kunci utama atau menggunakan padanan katanya untuk menjaga benang merah antar-kalimat.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Penggabungan 2 Kalimat</td>
                                <td class="p-2">Tentukan hubungan logis kedua kalimat (sebab-akibat, pertentangan, syarat, tujuan, atau perluasan <em>yang</em>), lalu hapus kata rujukan yang berulang.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Kalimat 1: 'Panel surya terapung dibangun di atas waduk.' Kalimat 2: 'Inovasi tersebut mampu menekan penguapan air waduk.' Frasa 'Inovasi tersebut' merujuk pada...",
                langkah: "Kata rujukan 'tersebut' bersifat anaforis (menunjuk ke belakang) pada nomina utama di Kalimat 1, yaitu 'pembangunan panel surya terapung di atas waduk'."
            },
            gameQuestions: [
                {
                    q: "(1) Hutan gambut tropis di Kalimantan menyimpan cadangan karbon daratan dalam jumlah yang sangat masif. (2) Namun, pembukaan lahan dengan cara pengeringan kanal membuat ekosistem itu sangat rentan mengalami kebakaran hebat saat kemarau. Frasa 'ekosistem itu' pada kalimat (2) merujuk pada...",
                    opts: [
                        "cadangan karbon daratan",
                        "hutan gambut tropis di Kalimantan",
                        "pembukaan lahan dengan pengeringan kanal",
                        "musim kemarau di Kalimantan"
                    ],
                    ans: 1,
                    exp: "Frasa 'ekosistem itu' merujuk kembali (anaforis) pada subjek utama di kalimat (1) yang merupakan sebuah ekosistem, yaitu 'hutan gambut tropis di Kalimantan'."
                },
                {
                    q: "Kalimat (1): 'Baterai berbasis natrium memiliki bahan baku yang jauh lebih melimpah di alam dibandingkan litium.' Kalimat (2): 'Kepadatan energi baterai natrium masih lebih rendah sehingga jarak tempuh kendaraannya lebih pendek.' Penggabungan paling tepat untuk kedua kalimat tersebut adalah...",
                    opts: [
                        "Baterai berbasis natrium memiliki bahan baku yang jauh lebih melimpah di alam dibandingkan litium karena kepadatan energinya masih lebih rendah sehingga jarak tempuh kendaraannya lebih pendek.",
                        "Baterai berbasis natrium memiliki bahan baku yang jauh lebih melimpah di alam dibandingkan litium, tetapi kepadatan energinya masih lebih rendah sehingga jarak tempuh kendaraannya lebih pendek.",
                        "Baterai berbasis natrium memiliki bahan baku yang jauh lebih melimpah di alam dibandingkan litium sehingga kepadatan energinya masih lebih rendah dan jarak tempuh kendaraannya lebih pendek.",
                        "Meskipun kepadatan energinya masih lebih rendah, namun baterai berbasis natrium memiliki bahan baku yang jauh lebih melimpah di alam dibandingkan litium."
                    ],
                    ans: 1,
                    exp: "Kalimat (1) berisi keunggulan baterai natrium, sedangkan kalimat (2) berisi kelemahannya. Hubungan logisnya adalah pertentangan setara yang dihubungkan dengan ', tetapi ' serta mengganti pengulangan 'baterai natrium' menjadi '-nya'."
                },
                {
                    q: "Manakah di antara pilihan berikut yang BUKAN merupakan piranti kohesi gramatikal dalam sebuah paragraf?",
                    opts: [
                        "Penggunaan pronomina persona seperti 'ia', 'mereka', dan '-nya'",
                        "Penggunaan konjungsi antarkalimat seperti 'oleh karena itu' dan 'selain itu'",
                        "Penggunaan kata penunjuk seperti 'ini', 'itu', dan 'tersebut'",
                        "Penggunaan ilustrasi gambar berwarna pada sampul buku"
                    ],
                    ans: 3,
                    exp: "Piranti kohesi gramatikal meliputi referensi (pronomina/demonstrativa), substitusi, elipsis, dan konjungsi. Ilustrasi gambar sampul adalah elemen visual/desain grafis, bukan kohesi gramatikal teks."
                },
                {
                    q: "(1) Bank Indonesia bekerja sama dengan bank sentral negara-negara ASEAN untuk memperluas penggunaan mata uang lokal dalam perdagangan bilateral. (2) Kebijakan yang disebut Local Currency Transaction (LCT) ini bertujuan mengurangi ketergantungan pelaku usaha terhadap dolar Amerika Serikat. Frasa 'Kebijakan yang disebut Local Currency Transaction (LCT) ini' pada kalimat (2) mengacu pada...",
                    opts: [
                        "pembentukan bank sentral negara-negara ASEAN",
                        "perluasan penggunaan mata uang lokal dalam perdagangan bilateral",
                        "penguatan nilai tukar dolar Amerika Serikat",
                        "pemberian kredit kepada pelaku usaha ekspor"
                    ],
                    ans: 1,
                    exp: "Rujukan demonstrativa 'ini' pada kalimat (2) mengacu pada tindakan/kebijakan yang baru dijelaskan di kalimat (1), yaitu perluasan penggunaan mata uang lokal dalam perdagangan bilateral."
                },
                {
                    q: "Kalimat (1): 'Petani di Kabupaten Subang mulai menerapkan teknologi pesawat nirawak (drone) untuk menyemprotkan pupuk cair.' Kalimat (2): 'Penggunaan teknologi tersebut membuat biaya operasional pemupukan hemat hingga empat puluh persen.' Hasil penggabungan kedua kalimat tersebut dengan menggunakan klausa relatif yang paling efektif adalah...",
                    opts: [
                        "Petani di Kabupaten Subang mulai menerapkan teknologi pesawat nirawak (drone) untuk menyemprotkan pupuk cair yang membuat biaya operasional pemupukan hemat hingga empat puluh persen.",
                        "Petani di Kabupaten Subang yang mulai menerapkan teknologi pesawat nirawak (drone) tetapi biaya operasional pemupukan hemat hingga empat puluh persen.",
                        "Karena biaya operasional pemupukan hemat hingga empat puluh persen, petani di Kabupaten Subang mulai menerapkan teknologi pesawat nirawak (drone).",
                        "Petani di Kabupaten Subang mulai menerapkan teknologi pesawat nirawak (drone) untuk menyemprotkan pupuk cair padahal membuat biaya operasional pemupukan hemat hingga empat puluh persen."
                    ],
                    ans: 0,
                    exp: "Kata ganti rujukan 'Penggunaan teknologi tersebut' pada kalimat (2) dapat dilebur dengan konjungsi perluasan 'yang' langsung setelah klausa pertama sehingga membentuk satu kalimat majemuk yang padu dan hemat."
                },
                {
                    q: "(1) Ekstrak daun kelor (*Moringa oleifera*) diketahui kaya akan kandungan zat besi, protein, dan vitamin C. (2) Kandungan mikronutrisi yang tinggi pada tanaman itu menjadikannya bahan pangan tambahan yang ideal untuk mencegah tengkes (*stunting*) pada balita. Pronomina '-nya' pada kata 'menjadikannya' dalam kalimat (2) merujuk pada...",
                    opts: [
                        "kandungan zat besi dan vitamin C",
                        "ekstrak daun kelor (*Moringa oleifera*)",
                        "bahan pangan tambahan",
                        "pencegahan tengkes pada balita"
                    ],
                    ans: 1,
                    exp: "Kata 'tanaman itu' dan objek '-nya' pada 'menjadikannya bahan pangan tambahan' merujuk secara anaforis pada subjek kalimat (1), yakni ekstrak daun kelor (*Moringa oleifera*)."
                },
                {
                    q: "Perhatikan kutipan berikut: 'Pembangkit listrik tenaga panas bumi tidak bergantung pada perubahan cuaca harian. [...], sumber energi bersih ini dapat menyuplai listrik beban dasar secara stabil selama dua puluh empat jam.' Piranti kohesi konjungsi yang tepat untuk menghubungkan kedua kalimat tersebut adalah...",
                    opts: [
                        "Akan tetapi",
                        "Oleh karena itu",
                        "Meskipun demikian",
                        "Sebaliknya"
                    ],
                    ans: 1,
                    exp: "Kalimat pertama merupakan sebab (tidak bergantung pada cuaca harian), sedangkan kalimat kedua merupakan akibat logisnya (dapat menyuplai listrik secara stabil 24 jam). Konjungsi antarkalimat sebab-akibat yang tepat adalah 'Oleh karena itu,'."
                },
                {
                    q: "Dalam sebuah paragraf, penulis menggunakan kata 'cagar budaya', lalu pada kalimat berikutnya menggunakan frasa 'warisan purbakala tersebut' untuk mengacu pada objek yang sama agar tidak monoton. Piranti kohesi leksikal yang digunakan penulis tersebut adalah...",
                    opts: [
                        "Antonimi (lawan kata)",
                        "Sinonimi / Ekuivalensi leksikal (padanan makna)",
                        "Elipsis (pelesapan unsur)",
                        "Konjungsi korelatif"
                    ],
                    ans: 1,
                    exp: "Menggunakan kata atau frasa lain yang memiliki kemiripan/kesepadanan makna ('cagar budaya' -> 'warisan purbakala') untuk menjaga kepaduan wacana disebut kohesi leksikal sinonimi."
                },
                {
                    q: "(1) Berikut ini adalah alasan mengapa kita harus mengurangi penggunaan kantong plastik sekali pakai: kantong plastik membutuhkan waktu ratusan tahun untuk terurai di tanah. (2) Selain itu, serpihannya mencemari rantai makanan laut. Kata penunjuk 'Berikut ini' pada awal kalimat (1) merupakan contoh rujukan...",
                    opts: [
                        "Anaforis (merujuk pada bagian teks di sebelah kiri/sebelumnya)",
                        "Kataforis (merujuk pada bagian teks di sebelah kanan/sesudahnya)",
                        "Eksoforis (merujuk pada hal di luar bahasa tanpa disebutkan di teks)",
                        "Kontradiktif (merujuk pada pertentangan makna)"
                    ],
                    ans: 1,
                    exp: "Rujukan yang menunjuk ke depan (pada rincian yang baru akan disebutkan sesudah kata penunjuk tersebut, seperti 'berikut ini') disebut rujukan kataforis (kebalikan dari anaforis yang menunjuk ke belakang)."
                },
                {
                    q: "Kalimat (1): 'Curah hujan di wilayah hulu Sungai Citarum meningkat dua kali lipat sejak pekan lalu.' Kalimat (2): 'Tanggul penahan tanah di tiga desa bantaran sungai mengalami keretakan.' Konjungsi intrakalimat yang paling tepat untuk menggabungkan kalimat (1) dan (2) menjadi satu kalimat majemuk sebab-akibat adalah...",
                    opts: [
                        "Curah hujan di wilayah hulu Sungai Citarum meningkat dua kali lipat sejak pekan lalu sehingga tanggul penahan tanah di tiga desa bantaran sungai mengalami keretakan.",
                        "Curah hujan di wilayah hulu Sungai Citarum meningkat dua kali lipat sejak pekan lalu karena tanggul penahan tanah di tiga desa bantaran sungai mengalami keretakan.",
                        "Meskipun curah hujan di wilayah hulu Sungai Citarum meningkat dua kali lipat sejak pekan lalu, tanggul penahan tanah di tiga desa bantaran sungai mengalami keretakan.",
                        "Curah hujan di wilayah hulu Sungai Citarum meningkat dua kali lipat sejak pekan lalu, sedangkan tanggul penahan tanah di tiga desa bantaran sungai mengalami keretakan."
                    ],
                    ans: 0,
                    exp: "Kalimat (1) adalah penyebab dan kalimat (2) adalah akibat. Jika urutannya tetap [Sebab] + [Akibat], konjungsi intrakalimat yang tepat di tengah kalimat (tanpa koma) adalah 'sehingga'."
                }
            ]
        },
        {
            key: "pbm_5_1",
            kategori: "Paragraf & Wacana",
            judul: "Kalimat Utama dan Gagasan Penjelas",
            ringkasan: `
                <p>Setiap paragraf yang baik memiliki satu <strong>Kalimat Utama</strong> (yang memuat gagasan utama/ide pokok) dan beberapa <strong>Kalimat Penjelas</strong> (berisi rincian, data, contoh, atau bukti).</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Paragraf</th>
                                <th class="p-2 border border-slate-200 text-left">Letak Kalimat Utama</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Khas di Teks UTBK</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Deduktif (&gt;80% soal UTBK)</td>
                                <td class="p-2"><strong>Kalimat Pertama (1)</strong></td>
                                <td class="p-2">Kalimat (1) bersifat pernyataan umum; Kalimat (2) memiliki kata rujukan (<em>Hal ini, Kondisi tersebut, Ia</em>) atau rincian contoh.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Induktif</td>
                                <td class="p-2"><strong>Kalimat Terakhir</strong></td>
                                <td class="p-2">Kalimat terakhir diawali simpulan: <em>Jadi, Dengan demikian, Oleh sebab itu, Pada akhirnya,</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Campuran / Ineratif</td>
                                <td class="p-2">Di awal & ditegaskan di akhir (atau di tengah bila ada <em>Namun, Akan tetapi,</em> yang membalik fokus)</td>
                                <td class="p-2">Waspadai kalimat ke-2 yang diawali <em>Namun,</em> apabila kalimat ke-3 dst. seluruhnya menjelaskan kalimat ke-2!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Jika Kalimat (1) berbunyi: 'Urbanisasi yang tidak terkendali menimbulkan berbagai tekanan ekologis di kota besar.' dan Kalimat (2) berbunyi: 'Tekanan tersebut tampak dari menyusutnya ruang terbuka hijau...', di manakah letak kalimat utamanya?",
                langkah: "Karena Kalimat (2) menggunakan kata rujukan 'Tekanan tersebut' yang menjelaskan Kalimat (1), maka Kalimat (1) adalah Kalimat Utama (paragraf deduktif)."
            },
            gameQuestions: [
                {
                    q: "(1) Pemanfaatan kecerdasan buatan dalam bidang radiologi medis memberikan lompatan besar bagi akurasi deteksi dini kanker. (2) Algoritma pembelajaran mendalam kini mampu mengenali pola mikrokalsifikasi pada hasil mamografi yang sering luput dari pengamatan mata manusia. (3) Selain itu, waktu pembacaan hasil pindai dapat dipangkas dari hitungan hari menjadi beberapa menit saja. (4) Kecepatan dan ketelitian ini sangat membantu dokter dalam menentukan terapi sebelum sel tumor menyebar. Kalimat utama paragraf tersebut terletak pada...",
                    opts: [
                        "Kalimat (1)",
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)"
                    ],
                    ans: 0,
                    exp: "Kalimat (1) merupakan pernyataan umum (payung) tentang manfaat kecerdasan buatan dalam akurasi deteksi dini kanker, sedangkan kalimat (2), (3), dan (4) adalah kalimat penjelas yang merinci cara kerja dan keunggulannya."
                },
                {
                    q: "Gagasan utama paragraf: 'Dampak penurunan populasi serangga penyerbuk terhadap produksi pertanian hortikultura.' Kalimat penjelas yang PALING RELEVAN untuk mengembangkan gagasan utama tersebut adalah...",
                    opts: [
                        "Serangga penyerbuk seperti lebah madu berkomunikasi melalui tarian unik di dalam sarang.",
                        "Berkurangnya populasi lebah dan kupu-kupu menyebabkan penurunan hasil panen tanaman buah dan sayuran hingga tiga puluh persen.",
                        "Petani padi di dataran rendah mulai menggunakan traktor otomatis untuk mempercepat pengolahan sawah.",
                        "Madu hutan asli memiliki nilai jual ekonomi yang tinggi di pasar ekspor Asia Timur."
                    ],
                    ans: 1,
                    exp: "Opsi B secara langsung menjelaskan dampak berkurangnya serangga penyerbuk (lebah dan kupu-kupu) terhadap penurunan hasil panen pertanian buah dan sayuran (hortikultura)."
                },
                {
                    q: "Ciri utama yang menandai bahwa sebuah kalimat BUKAN merupakan kalimat utama melainkan kalimat penjelas adalah...",
                    opts: [
                        "Mengandung pernyataan umum yang merangkum keseluruhan isi paragraf.",
                        "Dapat berdiri sendiri tanpa bergantung pada kalimat lain.",
                        "Mengandung kata rujukan anaforis seperti 'hal tersebut', 'kondisi ini', atau rincian angka spesifik.",
                        "Memiliki struktur subjek dan predikat yang lengkap."
                    ],
                    ans: 2,
                    exp: "Kalimat yang mengandung rujukan anaforis ('hal tersebut', 'kondisi ini') bergantung pada kalimat sebelumnya dan berfungsi menjelaskan gagasan yang telah disebutkan, sehingga merupakan kalimat penjelas."
                },
                {
                    q: "(1) Di wilayah pegunungan Papua, pengiriman vaksin sering terkendala oleh minimnya akses jalan darat. (2) Di kepulauan Maluku, cuaca laut yang ekstrem kerap menunda distribusi obat-obatan esensial selama berminggu-minggu. (3) Sementara itu, sejumlah puskesmas di pedalaman Kalimantan masih kekurangan fasilitas penyimpanan rantai dingin bertenaga listrik. (4) Dengan demikian, pemerataan logistik kesehatan di daerah terpencil kepulauan Indonesia masih menghadapi tantangan geografis dan infrastruktur yang berat. Berdasarkan letak kalimat utamanya, paragraf di atas tergolong paragraf...",
                    opts: [
                        "Deduktif (kalimat utama di awal)",
                        "Induktif (kalimat utama di akhir)",
                        "Ineratif (kalimat utama di tengah)",
                        "Naratif tanpa kalimat utama"
                    ],
                    ans: 1,
                    exp: "Kalimat (1), (2), dan (3) menyajikan fakta-fakta khusus di Papua, Maluku, dan Kalimantan, lalu ditutup dengan simpulan umum pada kalimat (4) ('Dengan demikian,...'). Pola khusus ke umum ini disebut paragraf induktif."
                },
                {
                    q: "(1) Banyak orang mengira bahwa gurun pasir merupakan kawasan yang sama sekali tidak memiliki kehidupan. (2) Namun, ekosistem kering ini sebenarnya dihuni oleh beragam spesies flora dan fauna yang memiliki adaptasi fisiologis luar biasa. (3) Kaktus saguaro, misalnya, mampu menyimpan ribuan liter air di dalam batangnya yang berdaging tebal. (4) Tikus kanguru bahkan dapat bertahan hidup seumur hidupnya tanpa minum air secara langsung karena mengekstrak air dari metabolisme biji-bijian. (5) Selain itu, rubah fennec memiliki daun telinga lebar untuk melepaskan panas tubuh di tengah suhu ekstrem. Kalimat utama (gagasan pokok) paragraf tersebut terdapat pada...",
                    opts: [
                        "Kalimat (1)",
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)"
                    ],
                    ans: 1,
                    exp: "Kalimat (1) hanyalah pengantar (asumsi keliru), kemudian dibalik oleh kalimat (2) ('Namun, ekosistem kering ini sebenarnya dihuni oleh beragam spesies... yang memiliki adaptasi...'). Kalimat (3), (4), dan (5) seluruhnya merinci contoh adaptasi spesies di kalimat (2). Maka kalimat utamanya adalah Kalimat (2)."
                },
                {
                    q: "Bacalah paragraf berikut!\n(1) Kenaikan suhu permukaan laut memicu fenomena pemutihan karang (coral bleaching) secara luas di perairan Indo-Pasifik. (2) Saat suhu air melampaui ambang batas toleransi, polip karang mengeluarkan alga zooxanthellae yang hidup bersimbiosis di dalam jaringannya. (3) Padahal, alga mikroskopis tersebut menyuplai hingga sembilan puluh persen kebutuhan nutrisi karang sekaligus memberikan pigmen warna yang cerah. (4) Tanpa keberadaan alga itu, kerangka karang berubah menjadi putih pucat dan rentan mengalami kematian massal. Ide pokok paragraf di atas adalah...",
                    opts: [
                        "Keindahan warna-warni alga zooxanthellae di perairan Indo-Pasifik",
                        "Mekanisme terjadinya pemutihan karang akibat kenaikan suhu permukaan laut",
                        "Cara membudidayakan polip karang di laboratorium kelautan",
                        "Perbedaan terumbu karang Indo-Pasifik dan Atlantik"
                    ],
                    ans: 1,
                    exp: "Kalimat utama (1) menyatakan kenaikan suhu laut memicu pemutihan karang, diikuti kalimat (2)-(4) yang menjelaskan mekanisme biologisnya. Jadi, ide pokoknya adalah mekanisme terjadinya pemutihan karang akibat kenaikan suhu permukaan laut."
                },
                {
                    q: "(1) Pertanian vertikal di dalam ruangan (indoor vertical farming) menawarkan solusi konkret atas keterbatasan lahan subur di perkotaan. (2) Dengan menyusun rak tanaman secara bertingkat, produktivitas panen per meter persegi dapat meningkat hingga sepuluh kali lipat dibandingkan sawah konvensional. (3) Sistem hidroponik tertutup yang digunakan juga mampu menghemat konsumsi air hingga sembilan puluh lima persen. (4) Lebih jauh lagi, pencahayaan lampu LED berspektrum khusus memungkinkan tanaman dipanen sepanjang tahun tanpa bergantung pada musim. Kalimat manakah yang berfungsi sebagai kalimat penjelas yang menyoroti aspek EFISIENSI AIR?",
                    opts: [
                        "Kalimat (1)",
                        "Kalimat (2)",
                        "Kalimat (3)",
                        "Kalimat (4)"
                    ],
                    ans: 2,
                    exp: "Kalimat (1) adalah kalimat utama; Kalimat (2) menjelaskan efisiensi ruang/lahan; Kalimat (3) menjelaskan penghematan konsumsi air (95%); Kalimat (4) menjelaskan kemandirian terhadap musim/pencahayaan."
                },
                {
                    q: "Jika seorang penulis ingin menyusun paragraf deduktif dengan kalimat utama: 'Pengembangan transportasi umum berbasis rel di perkotaan memberikan manfaat ganda bagi lingkungan dan ekonomi.', manakah kalimat kedua yang PALING TEPAT sebagai kalimat penjelas?",
                    opts: [
                        "Dari sisi lingkungan, satu rangkaian kereta komuter mampu menggantikan ratusan kendaraan pribadi sehingga menekan emisi karbon secara signifikan.",
                        "Sejarah kereta api uap pertama kali dimulai di Inggris pada masa Revolusi Industri abad ke-18.",
                        "Harga tiket pesawat terbang domestik sering mengalami kenaikan menjelang libur lebaran.",
                        "Banyak warga yang masih gemar mengoleksi miniatur lokomotif antik di rumah mereka."
                    ],
                    ans: 0,
                    exp: "Kalimat utama menyebutkan dua aspek ('manfaat ganda bagi lingkungan dan ekonomi'). Kalimat penjelas yang paling koheren langsung merinci aspek pertama ('Dari sisi lingkungan,...')."
                },
                {
                    q: "(1) Literasi finansial menjadi keterampilan hidup yang krusial bagi generasi muda di era kemudahan layanan keuangan digital. (2) Pemahaman yang baik mengenai pengelolaan anggaran, bunga pinjaman, dan risiko investasi membentengi mereka dari jeratan pinjaman daring ilegal. (3) Selain itu, kebiasaan menyisihkan dana darurat sejak dini melatih kemandirian ekonomi saat menghadapi situasi krisis. (4) Dengan demikian, penguasaan literasi finansial merupakan kunci utama untuk membangun kesejahteraan jangka panjang generasi muda. Jenis paragraf di atas berdasarkan letak kalimat utamanya di awal dan penegasannya kembali di akhir adalah...",
                    opts: [
                        "Paragraf deduktif murni",
                        "Paragraf induktif murni",
                        "Paragraf campuran (deduktif-induktif)",
                        "Paragraf deskriptif spasial"
                    ],
                    ans: 2,
                    exp: "Gagasan utama dinyatakan pada kalimat (1) di awal paragraf, dijelaskan pada kalimat (2) dan (3), lalu ditegaskan kembali pada kalimat simpulan (4) di akhir paragraf. Pola ini disebut paragraf campuran (deduktif-induktif)."
                },
                {
                    q: "Perhatikan pernyataan berikut: 'Inti sari dari kalimat utama yang menjadi dasar pengembangan seluruh paragraf dan umumnya berbentuk frasa benda (nominal).' Pernyataan tersebut merupakan definisi dari...",
                    opts: [
                        "Kalimat penjelas",
                        "Gagasan utama (ide pokok)",
                        "Kata rujukan anaforis",
                        "Konjungsi antarkalimat"
                    ],
                    ans: 1,
                    exp: "Gagasan utama (ide pokok/pikiran utama) adalah inti sari yang terkandung di dalam kalimat utama dan menjadi payung bagi seluruh kalimat penjelas dalam satu paragraf."
                }
            ]
        },
        {
            key: "pbm_5_2",
            kategori: "Paragraf & Wacana",
            judul: "Penyuntingan Teks Paragraf",
            ringkasan: `
                <p><strong>Penyuntingan teks paragraf</strong> mengintegrasikan seluruh materi PBM: menyempurnakan kalimat, melengkapi bagian rumpang pada paragraf, memecah/menggabungkan paragraf, hingga menyusun urutan kalimat acak menjadi paragraf padu.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Trik Menyunting & Mengurutkan Paragraf:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Urutan Kalimat Acak:</strong> Cari kalimat yang <em>paling umum dan bebas dari kata rujukan/konjungsi awal</em> sebagai kalimat pertama. Lalu ikuti rantai kata rujukan (<em>ini, tersebut, selain itu, akibatnya</em>).</li>
                        <li><strong>Memecah Paragraf (2 Paragraf):</strong> Cari kalimat yang mulai membahas <strong>subtopik baru</strong> (misalnya dari membahas <em>penyebab masalah</em> beralih membahas <em>solusi pemerintah</em>).</li>
                        <li><strong>Melengkapi Kalimat Rumpang:</strong> Perhatikan kalimat tepat sebelum dan sesudah bagian rumpang agar rantai kohesinya tidak terputus.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Jika kalimat (1)-(3) membahas penyebab banjir rob di pesisir utara Jawa, sedangkan kalimat (4)-(6) membahas pembangunan tanggul laut sebagai solusinya, di manakah paragraf tersebut sebaiknya dipecah?",
                langkah: "Pemecahan paragraf dilakukan tepat saat subtopik beralih dari 'penyebab' ke 'solusi', sehingga paragraf kedua dimulai pada kalimat (4)."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat-kalimat acak berikut!\n(1) Oleh karena itu, diversifikasi sumber energi bersih menjadi agenda mendesak bagi ketahanan nasional.\n(2) Ketergantungan yang tinggi terhadap bahan bakar fosil impor membuat anggaran negara rentan terhadap gejolak harga minyak dunia.\n(3) Kondisi tersebut sering memicu pembengkakan subsidi energi ketika harga minyak mentah melonjak.\n(4) Selain membebani anggaran, pembakaran bahan bakar fosil juga meningkatkan emisi gas rumah kaca.\nUrutan kalimat yang tepat agar menjadi paragraf yang padu adalah...",
                    opts: [
                        "(2) - (3) - (4) - (1)",
                        "(2) - (1) - (3) - (4)",
                        "(4) - (2) - (3) - (1)",
                        "(3) - (2) - (4) - (1)"
                    ],
                    ans: 0,
                    exp: "Kalimat (2) adalah kalimat utama yang bebas rujukan. Kalimat (3) memiliki 'Kondisi tersebut' yang merujuk pada kalimat (2) (masalah anggaran). Kalimat (4) memiliki 'Selain membebani anggaran...' yang menyambung kalimat (3). Kalimat (1) adalah simpulan ('Oleh karena itu,...'). Urutan: (2)-(3)-(4)-(1)."
                },
                {
                    q: "(1) Terumbu karang berperan sebagai pelindung alami garis pantai dari hantaman gelombang besar dan abrasi. (2) Struktur kalsium karbonat yang kokoh pada karang mampu meredam energi ombak hingga sembilan puluh persen sebelum mencapai bibir pantai. (3) [...]. (4) Tanpa perlindungan alami ini, banyak permukiman pesisir yang akan tergerus air laut setiap musim angin barat. Kalimat yang PALING TEPAT untuk mengisi bagian rumpang pada kalimat (3) adalah...",
                    opts: [
                        "Sayangnya, kerusakan terumbu karang akibat pemutihan dan pengeboman ikan kini menurunkan fungsi peredaman gelombang tersebut.",
                        "Banyak wisatawan mancanegara yang gemar melakukan penyelaman di kawasan taman laut Indonesia Timur.",
                        "Ikan badut hidup bersimbiosis mutualisme dengan anemon laut di sela-sela terumbu karang.",
                        "Pemerintah memberikan pelatihan budi daya rumput laut kepada nelayan di pulau-pulau kecil."
                    ],
                    ans: 0,
                    exp: "Kalimat (2) membahas fungsi peredaman ombak oleh terumbu karang, sedangkan kalimat (4) menyebut 'Tanpa perlindungan alami ini...'. Kalimat (3) harus menjembatani kondisi normal di kalimat (2) menuju ancaman hilangnya perlindungan di kalimat (4), yaitu opsi A."
                },
                {
                    q: "(1) Sampah elektronik atau e-waste merupakan salah satu jenis limbah dengan pertumbuhan tercepat di dunia. (2) Setiap tahun, jutaan ton perangkat gawai, komputer, dan televisi bekas dibuang begitu saja ke tempat pembuangan akhir. (3) Limbah ini mengandung logam berat berbahaya seperti timbal, merkuri, dan kadmium yang dapat mencemari air tanah. (4) Di sisi lain, sampah elektronik sebenarnya menyimpan kandungan emas, perak, dan tembaga bernilai ekonomi tinggi. (5) Melalui teknologi ekstraksi ramah lingkungan yang disebut urban mining, logam-logam mulia tersebut dapat dipulihkan kembali untuk industri manufaktur. (6) Metode daur ulang modern ini mampu mengurangi ketergantungan pada penambangan bijih mineral primer di alam. Apabila paragraf di atas dipecah menjadi dua paragraf yang padu, paragraf kedua sebaiknya dimulai dari...",
                    opts: [
                        "Kalimat (3)",
                        "Kalimat (4)",
                        "Kalimat (5)",
                        "Kalimat (6)"
                    ],
                    ans: 1,
                    exp: "Kalimat (1), (2), dan (3) membahas pengertian dan bahaya pencemaran sampah elektronik. Mulai kalimat (4) ('Di sisi lain,...'), fokus bahasan beralih ke potensi nilai ekonomi dan daur ulang logam mulia (urban mining) pada kalimat (4), (5), dan (6)."
                },
                {
                    q: "Perhatikan kalimat-kalimat acak berikut!\n(1) Uap air tersebut kemudian naik ke atmosfer dan mengalami kondensasi menjadi titik-titik air di dalam awan.\n(2) Siklus hidrologi dimulai ketika panas matahari menguapkan air dari permukaan laut, danau, dan sungai.\n(3) Air hujan yang jatuh ke daratan sebagian akan meresap ke dalam tanah dan sebagian lagi mengalir kembali ke laut.\n(4) Ketika awan sudah jenuh dan tidak mampu lagi menampung beban titik air, turunlah presipitasi dalam bentuk hujan.\nUrutan kalimat yang tepat untuk membentuk paragraf eksposisi proses yang padu adalah...",
                    opts: [
                        "(2) - (1) - (4) - (3)",
                        "(2) - (4) - (1) - (3)",
                        "(1) - (2) - (4) - (3)",
                        "(2) - (1) - (3) - (4)"
                    ],
                    ans: 0,
                    exp: "Proses dimulai dari kalimat (2) ('Siklus hidrologi dimulai... menguapkan air'). Lalu disambung kalimat (1) ('Uap air tersebut... menjadi awan'), kalimat (4) ('Ketika awan sudah jenuh... turunlah... hujan'), dan kalimat (3) ('Air hujan yang jatuh... kembali ke laut'). Urutan: (2)-(1)-(4)-(3)."
                },
                {
                    q: "(1) Biopori adalah lubang silindris yang dibuat secara vertikal ke dalam tanah dengan diameter sepuluh hingga tiga puluh sentimeter. (2) Lubang ini kemudian diisi dengan sampah organik seperti dedaunan kering untuk memicu aktivitas organisme tanah seperti cacing. (3) Aktivitas cacing tersebut akan menciptakan pori-pori alami di dalam tanah yang mempercepat peresapan air hujan. (4) [...]. Kalimat simpulan yang PALING TEPAT untuk melengkapi akhir paragraf tersebut adalah...",
                    opts: [
                        "Dengan demikian, pembuatan lubang biopori sangat efektif untuk mencegah genangan banjir sekaligus menghasilkan kompos alami.",
                        "Oleh sebab itu, cacing tanah banyak dibudidayakan untuk bahan baku pakan ikan lele dan kosmetik.",
                        "Akan tetapi, masyarakat perkotaan lebih menyukai menutup seluruh halaman rumahnya dengan beton.",
                        "Jadi, sampah plastik harus dipisahkan dari sampah rumah tangga sebelum dibuang ke sungai."
                    ],
                    ans: 0,
                    exp: "Kalimat (1)-(3) menjelaskan pembuatan biopori dengan sampah organik (kompos) dan fungsinya mempercepat resapan air hujan (mencegah genangan). Simpulan yang merangkum kedua manfaat tersebut secara koheren adalah opsi A."
                },
                {
                    q: "Perhatikan paragraf berikut!\n(1) Pada masa awal kemerdekaan, inflasi hiper melanda perekonomian Indonesia akibat beredarnya tiga mata uang secara bersamaan. (2) Ketiga mata uang yang beredar saat itu adalah uang De Javasche Bank, uang pemerintah Hindia Belanda, dan uang pendudukan Jepang yang jumlahnya tak terkendali. (3) Untuk mengatasi kekacauan moneter tersebut, pemerintah akhirnya menerbitkan Oeang Republik Indonesia (ORI) pada tanggal 30 Oktober 1946. (4) Dalam perkembangannya, transaksi digital masa kini lebih banyak menggunakan dompet elektronik di ponsel pintar. (5) Penerbitan ORI tidak hanya memulihkan stabilitas harga, tetapi juga menjadi simbol kedaulatan ekonomi bangsa yang baru merdeka. Penyuntingan yang tepat agar paragraf tersebut menjadi padu adalah...",
                    opts: [
                        "Menghapus kalimat (2) karena terlalu rinci.",
                        "Menghapus kalimat (4) karena tidak padu dengan topik sejarah penerbitan ORI.",
                        "Memindahkan kalimat (5) ke awal paragraf.",
                        "Mengganti konjungsi 'Untuk' pada kalimat (3) menjadi 'Tetapi'."
                    ],
                    ans: 1,
                    exp: "Seluruh paragraf (kalimat 1, 2, 3, dan 5) membahas sejarah inflasi awal kemerdekaan dan penerbitan Oeang Republik Indonesia (ORI) tahun 1946. Kalimat (4) melompat ke topik dompet elektronik masa kini dan memutus hubungan antara kalimat (3) dan (5), sehingga wajib dihapus."
                },
                {
                    q: "Perhatikan kalimat dalam draf artikel berikut: 'Karena disebabkan oleh kurangnya sosialisasi, maka program pemilahan sampah di tingkat rukun warga itu belum berjalan secara optimal.' Penyuntingan paling tepat untuk memperbaiki kalimat tersebut adalah...",
                    opts: [
                        "Disebabkan oleh karena kurangnya sosialisasi, maka program pemilahan sampah di tingkat rukun warga itu belum berjalan secara optimal.",
                        "Karena kurangnya sosialisasi, program pemilahan sampah di tingkat rukun warga itu belum berjalan secara optimal.",
                        "Karena kurangnya sosialisasi, maka program pemilahan sampah di tingkat rukun warga itu belum berjalan secara optimal.",
                        "Disebabkan kurangnya sosialisasi sehingga program pemilahan sampah di tingkat rukun warga itu belum berjalan secara optimal."
                    ],
                    ans: 1,
                    exp: "Kalimat asli mengandung dua kesalahan: (1) pleonasme 'Karena disebabkan oleh' (cukup 'Karena'), dan (2) konjungsi ganda 'Karena ..., maka ...' yang menghilangkan induk kalimat. Perbaikan yang baku dan efektif adalah: 'Karena kurangnya sosialisasi, program pemilahan sampah di tingkat rukun warga itu belum berjalan secara optimal.'"
                },
                {
                    q: "(1) Kopi arabika Gayo dari dataran tinggi Aceh dikenal luas di pasar internasional karena memiliki aroma rempah yang kuat dan tingkat keasaman yang seimbang. (2) Sebagian besar perkebunan kopi di wilayah ini dikelola oleh petani rakyat secara organik tanpa pestisida kimia. (3) Sertifikasi organik dan perdagangan berkeadilan (fair trade) membuat nilai jual biji kopi Gayo jauh lebih premium di Eropa dan Amerika Utara. (4) [...]. (5) Kesejahteraan petani lokal pun turut terangkat seiring stabilnya permintaan ekspor setiap tahun. Kalimat yang tepat untuk menyisipi bagian rumpang (4) agar alur paragraf koheren adalah...",
                    opts: [
                        "Harga tersebut memberikan margin keuntungan yang lebih besar bagi koperasi petani pengekspor.",
                        "Tanaman teh hijau juga banyak ditanam di lereng pegunungan Jawa Barat.",
                        "Sayangnya, banyak petani yang memilih menebang pohon kopi untuk dijadikan lahan pertambangan batu bara.",
                        "Minuman kopi dingin bercampur susu kental manis kini sangat digemari remaja perkotaan."
                    ],
                    ans: 0,
                    exp: "Kalimat (3) membahas 'nilai jual biji kopi Gayo jauh lebih premium', dan kalimat (5) membahas 'Kesejahteraan petani lokal pun turut terangkat'. Kalimat (4) harus menghubungkan nilai jual premium (Harga tersebut) dengan peningkatan keuntungan bagi petani (opsi A)."
                },
                {
                    q: "Perhatikan kalimat-kalimat acak berikut!\n(1) Sebaliknya, pada malam hari daratan lebih cepat dingin daripada lautan sehingga angin bertiup dari darat ke laut sebagai angin darat.\n(2) Perbedaan sifat penyerapan dan pelepasan panas antara daratan dan lautan memicu terjadinya sirkulasi angin lokal di wilayah pesisir.\n(3) Udara panas di atas daratan memuai dan bergerak naik, lalu posisinya digantikan oleh udara sejuk dari laut yang disebut angin laut.\n(4) Pada siang hari, daratan menyerap panas matahari lebih cepat dibandingkan lautan sehingga suhu udara di darat lebih tinggi.\nUrutan kalimat yang tepat agar menjadi paragraf yang koheren adalah...",
                    opts: [
                        "(2) - (4) - (3) - (1)",
                        "(2) - (3) - (4) - (1)",
                        "(4) - (3) - (1) - (2)",
                        "(2) - (1) - (4) - (3)"
                    ],
                    ans: 0,
                    exp: "Kalimat (2) adalah kalimat utama (pernyataan umum). Diikuti kalimat (4) ('Pada siang hari, daratan menyerap panas...'), lalu kalimat (3) menjelaskan proses kelanjutan siang hari ('Udara panas di atas daratan... angin laut'), dan ditutup kalimat (1) ('Sebaliknya, pada malam hari... angin darat'). Urutan: (2)-(4)-(3)-(1)."
                },
                {
                    q: "Bacalah kutipan berikut: 'Para ilmuwan sedang mengkaji potensi mikroalga laut sebagai bahan baku bioavtur ramah lingkungan. Mikroalga memiliki laju fotosintesis yang cepat dan kandungan lipid yang tinggi. Budidaya mikroalga tidak membutuhkan lahan pertanian darat yang luas.' Jika ketiga kalimat di atas disunting menjadi satu kalimat majemuk yang efektif dan padu, hasilnya adalah...",
                    opts: [
                        "Para ilmuwan sedang mengkaji potensi mikroalga laut sebagai bahan baku bioavtur ramah lingkungan karena memiliki laju fotosintesis yang cepat, berkandungan lipid tinggi, dan budi dayanya tidak membutuhkan lahan pertanian darat yang luas.",
                        "Para ilmuwan sedang mengkaji potensi mikroalga laut sebagai bahan baku bioavtur ramah lingkungan, tetapi memiliki laju fotosintesis yang cepat serta tidak membutuhkan lahan pertanian darat yang luas.",
                        "Meskipun memiliki laju fotosintesis yang cepat dan kandungan lipid yang tinggi, para ilmuwan sedang mengkaji potensi mikroalga laut yang tidak membutuhkan lahan pertanian darat.",
                        "Karena para ilmuwan sedang mengkaji potensi mikroalga laut sebagai bahan baku bioavtur ramah lingkungan, maka mikroalga memiliki laju fotosintesis yang cepat."
                    ],
                    ans: 0,
                    exp: "Kalimat kedua dan ketiga merupakan alasan/sebab mengapa para ilmuwan mengkaji mikroalga laut pada kalimat pertama. Penggabungan dengan konjungsi sebab ('karena') dan pemerincian paralel serta perbaikan ejaan baku ('budi dayanya') pada opsi A menghasilkan kalimat majemuk yang paling efektif dan padu."
                }
            ]
        }
    ]
};
