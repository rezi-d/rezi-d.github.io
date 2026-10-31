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
                }
            ]
        }
    ]
};
