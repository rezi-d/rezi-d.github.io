// =========================================================================
// DATA MATERI & MINI-GAME SNBT 2026 — SUBTES 3: PENGETAHUAN & PEMAHAMAN UMUM (PPU)
// Total: 13 Sub-Materi × 3 Soal Game = 39 Soal Khusus Mini-Game
// Hadiah Maksimal per Sub-Materi: Rp 400 (Skor 3/3)
// =========================================================================

window.SNBT_MATERI_REGISTRY = window.SNBT_MATERI_REGISTRY || {};

window.SNBT_MATERI_REGISTRY["ppu"] = {
    id: "ppu",
    nama: "Pengetahuan & Pemahaman Umum (PPU)",
    icon: "📖",
    color: "blue",
    rewardPerSub: 400,
    submateri: [
        // =====================================================================
        // KATEGORI 0: MAKNA KATA & SEMANTIK (4 SUB-MATERI)
        // =====================================================================
        {
            key: "ppu_0_0",
            kategori: "Makna Kata & Semantik",
            judul: "Penggunaan Istilah / Diksi Kontekstual",
            ringkasan: `
                <p><strong>Diksi kontekstual</strong> menguji ketepatan memilih kata (sinonim/antonim/polisemi) yang paling sesuai dengan konteks kalimat dalam wacana ilmiah atau populer.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Relasi Makna</th>
                                <th class="p-2 border border-slate-200 text-left">Penjelasan & Contoh Kontekstual</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Polisemi (Satu Kata Banyak Makna)</td>
                                <td class="p-2">Kata <strong>"kepala"</strong> pada <em>kepala sekolah</em> (pemimpin), <em>kepala surat</em> (bagian atas), dan <em>kepala batu</em> (keras hati) masih memiliki benang merah makna "bagian utama/atas".</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Homonimi (Bentuk Sama, Asal Beda)</td>
                                <td class="p-2">Kata <strong>"bisa"</strong> (racun ular vs dapat/mampu) atau <strong>"bulan"</strong> (satelit bumi vs 30 hari kalender) memiliki makna yang tidak berhubungan.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Sinonim Bernuansa (Denotasi & Konotasi)</td>
                                <td class="p-2">Kata <em>melihat, menatap, melirik, mengintip, memantau, mengamati</em> bersinonim umum ("menggunakan mata"), tetapi konteks ilmiah menggunakan <strong>mengamati/memantau</strong>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Trik Substitusi Konteks UTBK:</strong> Ketika ditanya <em>"Kata X pada kalimat (3) paling tepat digantikan oleh..."</em>, ganti langsung kata X di kalimat tersebut dengan pilihan jawaban, lalu cek apakah <strong>kelas kata (verba/nomina/adjektiva)</strong> dan <strong>nuansa formalnya</strong> tetap terjaga!
                </div>
            `,
            contoh: {
                soal: "Dalam kalimat 'Kebijakan moneter itu terbukti mampu meredam *gejolak* nilai tukar rupiah', kata 'gejolak' paling tepat berpadanan makna kontekstual dengan...",
                langkah: "Dalam konteks ekonomi/keuangan, 'gejolak' (gerakan naik-turun yang tajam dan cepat) berpadanan tepat dengan istilah 'fluktuasi' atau 'volatilitas'."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat berikut: 'Pemerintah berupaya *mengakselerasi* transisi energi bersih melalui pemberian insentif pajak bagi industri panel surya.' Kata yang paling tepat untuk menggantikan kata bercetak miring tanpa mengubah makna kalimat adalah...",
                    opts: [
                        "mengakomodasi",
                        "mempercepat",
                        "mengintegrasikan",
                        "memperluas"
                    ],
                    ans: 1,
                    exp: "'Mengakselerasi' (dari kata dasar akselerasi = percepatan) memiliki makna kontekstual 'mempercepat'."
                },
                {
                    q: "Kata 'ketahanan' dalam kalimat 'Perubahan iklim mengancam ketahanan pangan di negara-negara berkembang' memiliki makna kontekstual yang paling dekat dengan...",
                    opts: [
                        "kekerasan fisik suatu benda",
                        "kemampuan bertahan dan mencukupi kebutuhan secara berkelanjutan",
                        "kekuatan militer dalam mempertahankan perbatasan wilayah",
                        "kesabaran masyarakat dalam menghadapi musibah"
                    ],
                    ans: 1,
                    exp: "Dalam frasa 'ketahanan pangan' (food security), kata 'ketahanan' bermakna kemampuan suatu sistem untuk bertahan serta menjamin ketersediaan pangan secara berkelanjutan."
                },
                {
                    q: "Manakah kalimat di bawah ini yang menggunakan kata 'kabur' sebagai HOMONIM (makna yang sama sekali berbeda asal-usulnya) terhadap kalimat: 'Pandangan matanya mulai kabur karena kelelahan membaca di ruang redup'?",
                    opts: [
                        "Gagasan yang disampaikan pembicara itu masih terdengar kabur bagi peserta seminar.",
                        "Lukisan cat air itu tampak agak kabur setelah terkena percikan air hujan.",
                        "Tersangka pencurian kendaraan bermotor itu kabur melalui jendela belakang.",
                        "Batas antara fakta dan opini dalam artikel daring tersebut semakin kabur."
                    ],
                    ans: 2,
                    exp: "Pada soal serta opsi A, B, dan D, kata 'kabur' bermakna 'tidak jelas/buram' (polisemi). Sedangkan pada opsi C, 'kabur' bermakna 'melarikan diri/minggat' yang merupakan homonim (bentuk sama, makna berbeda total)."
                }
            ]
        },
        {
            key: "ppu_0_1",
            kategori: "Makna Kata & Semantik",
            judul: "Perubahan Makna Kata (Generalisasi, Spesialisasi, Peyorasi, dll.)",
            ringkasan: `
                <p>Bahasa bersifat dinamis sehingga makna kata dapat mengalami pergeseran seiring perkembangan zaman. Enam jenis perubahan makna yang wajib kamu kuasai di PPU:</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Perubahan</th>
                                <th class="p-2 border border-slate-200 text-left">Definisi</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Klasik UTBK</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Generalisasi (Meluas)</td>
                                <td class="p-2">Cakupan makna sekarang <strong>lebih luas</strong> daripada makna asalnya</td>
                                <td class="p-2"><strong>berlayar</strong> (dulu: pakai layar &rarr; kini: semua perjalanan kapal laut), <strong>putra-putri</strong> (dulu: anak raja &rarr; kini: semua anak), <strong>bapak/ibu</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Spesialisasi (Menyempit)</td>
                                <td class="p-2">Cakupan makna sekarang <strong>lebih sempit/khusus</strong> daripada makna asalnya</td>
                                <td class="p-2"><strong>sarjana</strong> (dulu: semua cendekiawan &rarr; kini: lulusan S-1), <strong>madrasah</strong> (dulu: semua sekolah &rarr; kini: sekolah Islam), <strong>pendeta</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Ameliorasi (Menghalus/Membaik)</td>
                                <td class="p-2">Nilai rasa kata menjadi <strong>lebih tinggi/hormat/positif</strong></td>
                                <td class="p-2"><strong>wanita</strong> (lebih tinggi dari perempuan pada masanya), <strong>pramuniaga</strong>, <strong>tunawisma</strong>, <strong>narapidana</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Peyorasi (Memburuk/Merendah)</td>
                                <td class="p-2">Nilai rasa kata menjadi <strong>lebih rendah/negatif/kasar</strong></td>
                                <td class="p-2"><strong>gerombolan</strong> (dulu: kelompok &rarr; kini: kawanan pengacau), <strong>kroni</strong> (dulu: sahabat &rarr; kini: kaki tangan korupsi), <strong>oknum</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Sinestesia (Pertukaran Indra)</td>
                                <td class="p-2">Perpaduan tanggapan <strong>dua indra yang berbeda</strong></td>
                                <td class="p-2">kata-katanya <strong>pedas</strong> (telinga &larr; lidah), wajahnya <strong>manis</strong> (mata &larr; lidah), warna <strong>sejuk</strong> (mata &larr; kulit)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Asosiasi (Persamaan Sifat)</td>
                                <td class="p-2">Perubahan makna karena kemiripan sifat dengan benda lain (kiasan)</td>
                                <td class="p-2"><strong>amplop</strong> (uang suap), <strong>kursi</strong> (jabatan/kekuasaan), <strong>benalu</strong> (orang yang menumpang hidup)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Kalimat 'Sambutannya yang hangat membuat tamu merasa betah' mengalami gejala perubahan makna apa?",
                langkah: "'Sambutan' ditangkap oleh penglihatan/pendengaran, sedangkan 'hangat' adalah tanggapan indra peraba (kulit). Pertukaran dua indra ini disebut Sinestesia."
            },
            gameQuestions: [
                {
                    q: "Kata 'kroni' awalnya diserap dari bahasa Belanda yang bermakna 'sahabat karib atau kawan lama'. Namun, kini kata 'kroni' hampir selalu digunakan untuk menyebut 'kaki tangan atau sekutu dalam kejahatan/korupsi'. Gejala perubahan makna tersebut disebut...",
                    opts: [
                        "Ameliorasi",
                        "Peyorasi",
                        "Generalisasi",
                        "Sinestesia"
                    ],
                    ans: 1,
                    exp: "Peyorasi adalah perubahan makna yang mengakibatkan nilai rasa suatu kata menjadi lebih rendah, buruk, atau berkonotasi negatif dibandingkan makna semula."
                },
                {
                    q: "Manakah kalimat di bawah ini yang mengandung perubahan makna SINESTESIA (pertukaran tanggapan indra)?",
                    opts: [
                        "Kapal pesiar bertenaga nuklir itu dijadwalkan berlayar menuju benua Antarktika besok pagi.",
                        "Kritik tajam dan pedas yang dilontarkan pengamat itu membuat suasana diskusi memanas.",
                        "Para sarjana teknik dikerahkan untuk merancang jembatan tahan gempa di wilayah kepulauan.",
                        "Pemerintah menyalurkan bantuan logistik bagi para penyandang tunanetra dan tunarungu."
                    ],
                    ans: 1,
                    exp: "'Kritik' diterima oleh indra pendengaran (telinga), tetapi disifati dengan 'tajam' (indra peraba) dan 'pedas' (indra pengecap/lidah). Ini adalah gejala sinestesia."
                },
                {
                    q: "Pasangan kata yang mengalami perubahan makna SPESIALISASI (penyempitan makna) adalah...",
                    opts: [
                        "berlayar dan bapak",
                        "sarjana dan sastra",
                        "pramuwisma dan tunakarya",
                        "amplop dan kursi"
                    ],
                    ans: 1,
                    exp: "Kata 'sarjana' (dulu: semua orang pandai/cendekiawan, kini: lulusan S-1) dan 'sastra' (dulu: semua tulisan/kitab ilmu, kini: karya seni bahasa yang indah) sama-sama mengalami penyempitan makna (spesialisasi)."
                }
            ]
        },
        {
            key: "ppu_0_2",
            kategori: "Makna Kata & Semantik",
            judul: "Makna Bertingkat / Hierarkis (Hiponim & Hipernim)",
            ringkasan: `
                <p><strong>Relasi makna hierarkis</strong> memetakan kata umum dan kata khusus. Soal UTBK sering menanyakan <em>"Kata manakah yang cakupan maknanya paling luas/sempit?"</em> atau hubungan bagian-ke-keseluruhan.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Istilah</th>
                                <th class="p-2 border border-slate-200 text-left">Konsep Hierarki</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Relasi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Hipernim (Superordinat)</td>
                                <td class="p-2">Kata <strong>umum (induk/payung)</strong> yang membawahi beberapa kata khusus</td>
                                <td class="p-2"><strong>Logam mulia</strong> adalah hipernim dari <em>emas, perak, platina, paladium</em>.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Hiponim (Subordinat)</td>
                                <td class="p-2">Kata <strong>khusus (anggota)</strong> yang tercakup di dalam suatu hipernim (hubungan <em>"adalah jenis dari..."</em>)</td>
                                <td class="p-2"><em>Tongkol, cakalang, tuna, gurami</em> adalah hiponim dari <strong>ikan</strong>. (Antar-anggota disebut <strong>kohiponim</strong>).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Meronim & Holonim</td>
                                <td class="p-2">Hubungan <strong>bagian-dari-keseluruhan</strong> (<em>"X adalah bagian fisik dari Y"</em>, bukan jenis)</td>
                                <td class="p-2"><em>Akar, batang, daun, kelopak</em> (meronim) adalah bagian dari <strong>pohon/bunga</strong> (holonim).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Di antara kata: (1) kendaraan, (2) transportasi darat, (3) mobil listrik, (4) alat angkut, urutkan dari yang paling khusus (hiponim terdalam) ke paling umum!",
                langkah: "Mobil listrik (3) adalah jenis dari kendaraan/transportasi darat (2) -> kendaraan (1) -> alat angkut (4)."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat berikut: 'Berbagai komoditas pangan seperti beras, jagung, kedelai, dan gula pasir mengalami peningkatan permintaan menjelang hari raya.' Dalam kalimat tersebut, frasa yang berkedudukan sebagai HIPERNIM (superordinat) adalah...",
                    opts: [
                        "beras dan jagung",
                        "komoditas pangan",
                        "peningkatan permintaan",
                        "hari raya"
                    ],
                    ans: 1,
                    exp: "'Komoditas pangan' adalah kata umum (hipernim) yang membawahi kata-kata khusus (hiponim): beras, jagung, kedelai, dan gula pasir."
                },
                {
                    q: "Hubungan makna hierarkis antara kata 'klorofil — daun — tumbuhan' paling sejajar (analog) dengan hubungan kata...",
                    opts: [
                        "kucing — harimau — singa",
                        "retina — mata — tubuh manusia",
                        "meja — kursi — perabot",
                        "dokter — perawat — rumah sakit"
                    ],
                    ans: 1,
                    exp: "Relasi 'klorofil — daun — tumbuhan' adalah meronimi bertingkat (bagian dari bagian): klorofil adalah bagian dari daun, dan daun adalah bagian dari tumbuhan. Ini sejajar dengan: retina adalah bagian dari mata, dan mata adalah bagian dari tubuh manusia."
                },
                {
                    q: "Di antara deretan kata berikut: (1) Makhluk hidup, (2) Mamalia, (3) Hewan, (4) Paus biru, (5) Vertebrata. Urutan hierarki makna dari yang PALING UMUM (hipernim tertinggi) ke PALING KHUSUS (hiponim terendah) adalah...",
                    opts: [
                        "(1) - (3) - (5) - (2) - (4)",
                        "(1) - (5) - (3) - (2) - (4)",
                        "(3) - (1) - (5) - (2) - (4)",
                        "(1) - (3) - (2) - (5) - (4)"
                    ],
                    ans: 0,
                    exp: "Urutan taksonomi dari umum ke khusus: Makhluk hidup (1) -> Hewan/Animalia (3) -> Vertebrata/hewan bertulang belakang (5) -> Mamalia/hewan menyusui (2) -> Paus biru (4)."
                }
            ]
        },
        {
            key: "ppu_0_3",
            kategori: "Makna Kata & Semantik",
            judul: "Kata Berpasangan Idiomatis / Kolokasi",
            ringkasan: `
                <p><strong>Pasangan kata idiomatis (preposisi terikat)</strong> dan <strong>kolokasi (sanding kata)</strong> adalah pasangan kata yang sudah tetap secara kaidah tata bahasa Indonesia dan tidak boleh dipertukarkan dengan kata lain.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Pasangan Idiomatis BAKU (Benar)</th>
                                <th class="p-2 border border-slate-200 text-left">Bentuk Salah Kaprah (Hindari!)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-bold text-teal-700">terdiri <u>atas</u> / terdiri <u>dari</u></td>
                                <td class="p-2 text-rose-600">terdiri oleh / terdiri dengan</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">bergantung <u>pada</u></td>
                                <td class="p-2 text-rose-600">tergantung dari / bergantung dengan</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">sesuai <u>dengan</u> | sejalan <u>dengan</u></td>
                                <td class="p-2 text-rose-600">sesuai pada / sesuai atas</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">berbeda <u>dengan</u> | terbuat <u>dari</u></td>
                                <td class="p-2 text-rose-600">berbeda dari (kurang tepat untuk perbandingan) | terbuat oleh</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">disebabkan <u>oleh</u> | mengacu <u>pada</u></td>
                                <td class="p-2 text-rose-600">disebabkan karena (lewah!) | mengacu ke/terhadap</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-teal-700">berdasarkan <u>...</u> (langsung nomina!)</td>
                                <td class="p-2 text-rose-600">berdasarkan pada / berdasarkan atas (lewah karena <em>ber-...-kan</em> = <em>berdasar pada</em>)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Mengapa frasa 'disebabkan karena cuaca buruk' salah?",
                langkah: "Verba pasif 'disebabkan' wajib berpasangan dengan preposisi 'oleh' ('disebabkan oleh cuaca buruk'). Kata 'disebabkan karena' bersifat lewah (pleonasme)."
            },
            gameQuestions: [
                {
                    q: "Manakah kalimat di bawah ini yang menggunakan pasangan kata berpreposisi (idiomatis) secara TEPAT?",
                    opts: [
                        "Keberhasilan panen raya tahun ini sangat tergantung dari ketersediaan air irigasi.",
                        "Komite seleksi beasiswa itu terdiri atas lima orang profesor dari berbagai bidang ilmu.",
                        "Kerusakan mesin turbin tersebut disebabkan karena kurangnya perawatan berkala.",
                        "Berdasarkan pada hasil uji laboratorium, sampel air sungai itu dinyatakan aman."
                    ],
                    ans: 1,
                    exp: "'terdiri atas' adalah pasangan idiomatis yang baku. Opsi A salah (seharusnya 'bergantung pada'); Opsi C salah (seharusnya 'disebabkan oleh'); Opsi D salah (seharusnya 'Berdasarkan hasil...' atau 'Berdasar pada hasil...')."
                },
                {
                    q: "Lengkapi kalimat berikut dengan pasangan kata yang baku: 'Kurikulum pelatihan baru itu telah disusun ... standar kompetensi industri dan ... kebutuhan pasar kerja.'",
                    opts: [
                        "sesuai atas — mengacu terhadap",
                        "sesuai dengan — mengacu pada",
                        "sesuai pada — mengacu dengan",
                        "sesuai oleh — mengacu dari"
                    ],
                    ans: 1,
                    exp: "Kata 'sesuai' berpasangan tetap dengan 'dengan' ('sesuai dengan'), sedangkan kata 'mengacu' berpasangan tetap dengan 'pada' ('mengacu pada')."
                },
                {
                    q: "Dalam kolokasi bahasa Indonesia ilmiah, kata 'menjatuhkan' paling tepat bersanding secara idiomatis dengan objek...",
                    opts: [
                        "vonis / hukuman",
                        "peraturan daerah",
                        "kesepakatan bersama",
                        "usul penelitian"
                    ],
                    ans: 0,
                    exp: "Dalam laras hukum dan ilmiah, kata 'menjatuhkan' berkolokasi tetap dengan 'vonis', 'hukuman', atau 'sanksi' (menjatuhkan vonis/hukuman)."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 1: APLIKASI & ANALISIS KALIMAT (5 SUB-MATERI)
        // =====================================================================
        {
            key: "ppu_1_0",
            kategori: "Aplikasi & Analisis Kalimat",
            judul: "Semantik & Tata Makna Kalimat",
            ringkasan: `
                <p><strong>Semantik kalimat</strong> menelaah bagaimana struktur kalimat membentuk makna (apakah dua kalimat berbeda bentuk memiliki <strong>makna yang sama/parafrasa</strong>, atau apakah suatu kalimat mengandung <strong>ambiguitas/ketaksaan makna</strong>).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Fokus Soal Semantik Kalimat di PPU:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Kalimat Semakna (Parafrasa):</strong> Dua kalimat tetap semakna jika peran semantis <em>Pelaku (Agen)</em>, <em>Tindakan</em>, dan <em>Sasaran (Pasien)</em> tidak berubah meskipun urutannya dibalik (misal aktif &harr; pasif, atau sebab-akibat &harr; akibat-sebab).</li>
                        <li><strong>Ambiguitas Struktural:</strong> Contoh: <em>"Lukisan pelukis baru itu dipajang di galeri"</em> &rarr; ambigu apakah <em>lukisannya yang baru</em> atau <em>pelukisnya yang baru</em>.</li>
                        <li><strong>Peran Semantis Predikat:</strong> Imbuhan <em>meN-...-kan</em> (benefaktif/kausatif) vs <em>meN-...-i</em> (lokatif/repetitif).</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Mengapa kalimat 'Istri lurah yang ramah itu membagikan sembako' bersifat ambigu?",
                langkah: "Klausa 'yang ramah itu' dapat menerangkan 'Istri' (istrinya yang ramah) maupun 'lurah' (lurahnya yang ramah). Agar tidak ambigu: 'Istri dari lurah yang ramah itu...' atau 'Istri Pak Lurah, yang ramah itu,...'"
            },
            gameQuestions: [
                {
                    q: "Kalimat manakah yang memiliki makna SAMA (ekuivalen secara semantis) dengan kalimat: 'Penurunan tarif angkutan umum massal mendorong masyarakat beralih dari kendaraan pribadi'?",
                    opts: [
                        "Masyarakat beralih dari kendaraan pribadi agar tarif angkutan umum massal diturunkan.",
                        "Peralihan masyarakat dari kendaraan pribadi dipicu oleh penurunan tarif angkutan umum massal.",
                        "Meskipun tarif angkutan umum massal turun, masyarakat tetap menggunakan kendaraan pribadi.",
                        "Penurunan tarif angkutan umum massal disebabkan oleh beralihnya masyarakat dari kendaraan pribadi."
                    ],
                    ans: 1,
                    exp: "Pada kalimat soal, penyebabnya adalah 'penurunan tarif angkutan umum massal' dan akibatnya adalah 'masyarakat beralih dari kendaraan pribadi'. Opsi B memparafrasakan hubungan sebab-akibat tersebut secara tepat dalam bentuk pasif ('dipicu oleh')."
                },
                {
                    q: "Manakah di antara kalimat berikut yang mengandung AMBIGUITAS (makna ganda) secara struktural?",
                    opts: [
                        "Mobil pejabat daerah yang baru itu sedang diparkir di halaman gedung DPRD.",
                        "Gubernur meresmikan jembatan gantung sepanjang seratus meter pada hari Senin.",
                        "Seluruh mahasiswa semester akhir wajib mengumpulkan laporan magang tepat waktu.",
                        "Harga beras organik di pasar modern sedikit lebih tinggi daripada beras biasa."
                    ],
                    ans: 0,
                    exp: "Frasa 'Mobil pejabat daerah yang baru itu' bersifat ambigu: apakah mobilnya yang baru, pejabatnya yang baru dilantik, atau daerah otonomnya yang baru."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Petani menyemprotkan pestisida nabati pada tanaman cabai.' Apabila verba predikatnya diubah menjadi berimbuhan meN-...-i agar tetap semakna, kalimat yang tepat adalah...",
                    opts: [
                        "Petani menyemproti pestisida nabati pada tanaman cabai.",
                        "Petani menyemproti tanaman cabai dengan pestisida nabati.",
                        "Tanaman cabai menyemproti petani dengan pestisida nabati.",
                        "Pestisida nabati menyemproti tanaman cabai milik petani."
                    ],
                    ans: 1,
                    exp: "Verba 'menyemprotkan' mengambil bahan ('pestisida') sebagai Objek, sedangkan verba lokatif 'menyemproti' mengambil tempat/sasaran ('tanaman cabai') sebagai Objek dan bahan sebagai Keterangan alat ('dengan pestisida nabati')."
                }
            ]
        },
        {
            key: "ppu_1_1",
            kategori: "Aplikasi & Analisis Kalimat",
            judul: "Kalimat Majemuk Setara & Bertingkat",
            ringkasan: `
                <p><strong>Kalimat majemuk</strong> adalah kalimat yang memiliki dua klausa atau lebih. Di UTBK PPU, kamu sering diminta menentukan hubungan semantis antarklausa atau mengubah dua kalimat tunggal menjadi satu kalimat majemuk.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Kalimat Majemuk</th>
                                <th class="p-2 border border-slate-200 text-left">Kedudukan Klausa</th>
                                <th class="p-2 border border-slate-200 text-left">Konjungsi Penanda</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Majemuk Setara (Koordinatif)</td>
                                <td class="p-2">Klausa Bebas + Klausa Bebas (kedudukan sejajar, tidak bisa dibalik bersama konjungsinya)</td>
                                <td class="p-2">Penjumlahan (<em>dan, serta</em>), Pemilihan (<em>atau</em>), Pertentangan (<em>tetapi, melainkan, sedangkan, padahal</em>), Urutan (<em>lalu, kemudian</em>)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Majemuk Bertingkat (Subordinatif)</td>
                                <td class="p-2">Induk Kalimat (Bebas) + Anak Kalimat (Terikat; anak kalimat bisa dipindah ke depan induk kalimat)</td>
                                <td class="p-2">Sebab (<em>karena, sebab</em>), Akibat (<em>sehingga, sampai</em>), Syarat (<em>jika, apabila</em>), Konsesif (<em>meskipun, walaupun</em>), Tujuan (<em>agar, supaya</em>), Waktu (<em>ketika, sejak</em>)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Tentukan jenis kalimat: 'Kakak mendalami ilmu hukum pidana, sedangkan adik memilih jurusan teknik kimia.'",
                langkah: "Kedua klausa dapat berdiri sendiri dan dihubungkan oleh konjungsi koordinatif 'sedangkan' (pertentangan/perbandingan setara). Maka ini adalah Kalimat Majemuk Setara Pertentangan."
            },
            gameQuestions: [
                {
                    q: "Manakah di antara kalimat berikut yang merupakan KALIMAT MAJEMUK SETARA (koordinatif)?",
                    opts: [
                        "Ketika musim penghujan tiba, debit air sungai di kawasan hulu meningkat drastis.",
                        "Tim peneliti menguji sampel tanah di lereng gunung, kemudian mereka menganalisis kandungan mineralnya di laboratorium.",
                        "Pemerintah memberikan subsidi pupuk agar produktivitas petani lokal tetap terjaga.",
                        "Walaupun harga bahan baku naik, pabrik tekstil itu tidak melakukan pemutusan hubungan kerja."
                    ],
                    ans: 1,
                    exp: "Opsi B terdiri atas dua klausa bebas yang dihubungkan oleh konjungsi koordinatif urutan waktu ('kemudian'). Opsi A, C, dan D adalah kalimat majemuk bertingkat (menggunakan konjungsi subordinatif 'ketika', 'agar', dan 'walaupun')."
                },
                {
                    q: "Perhatikan kalimat majemuk bertingkat berikut: 'Industri perikanan tangkap akan tumbuh berkelanjutan apabila kuota penangkapan ikan diawasi secara ketat.' Anak kalimat pada kalimat tersebut berfungsi sebagai...",
                    opts: [
                        "Keterangan tujuan",
                        "Keterangan syarat",
                        "Keterangan konsesif (pertentangan)",
                        "Keterangan akibat"
                    ],
                    ans: 1,
                    exp: "Klausa 'apabila kuota penangkapan ikan diawasi secara ketat' diawali konjungsi subordinatif 'apabila' yang menandai hubungan keterangan syarat."
                },
                {
                    q: "Dalam kalimat 'Para astronom mengamati komet yang melintas dekat orbit Bumi setiap tujuh puluh enam tahun sekali', klausa terikat 'yang melintas dekat orbit Bumi...' merupakan perluasan dari fungsi...",
                    opts: [
                        "Subjek",
                        "Predikat",
                        "Objek",
                        "Keterangan"
                    ],
                    ans: 2,
                    exp: "Induk kalimatnya adalah 'Para astronom (S) mengamati (P) komet (O)'. Klausa 'yang melintas...' menerangkan nomina 'komet' yang berkedudukan sebagai Objek, sehingga merupakan perluasan Objek."
                }
            ]
        },
        {
            key: "ppu_1_2",
            kategori: "Aplikasi & Analisis Kalimat",
            judul: "Transformasi Kalimat Aktif-Pasif",
            ringkasan: `
                <p><strong>Transformasi kalimat aktif ke pasif</strong> memiliki <strong>2 rumus berbeda</strong> tergantung pada apakah Subjek pelakunya adalah kata benda umum/kata ganti orang ke-3, atau kata ganti orang ke-1/ke-2 (<em>saya, aku, kami, kita, kamu, Anda</em>).</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Tipe Pelaku (Subjek Aktif)</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Pasif</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Transformasi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Tipe 1: Nomina Umum / Persona ke-3 (<em>ia, dia, mereka, beliau, pemerintah</em>)</td>
                                <td class="p-2"><strong>O &rarr; S + di-[verba] + (oleh) Pelaku</strong></td>
                                <td class="p-2">Aktif: <em>Tim peneliti menemukan spesies anggrek baru.</em><br>Pasif: <em>Spesies anggrek baru <strong>ditemukan (oleh) tim peneliti</strong>.</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Tipe 2: Persona ke-1 & ke-2 (<em>saya, aku, kami, kita, kamu, Anda, saudara</em>)</td>
                                <td class="p-2"><strong>O &rarr; S + Pelaku + [verba TANPA meN-/di-]</strong> (TIDAK boleh pakai <em>di-... oleh saya</em>!)</td>
                                <td class="p-2">Aktif: <em>Kami telah menyetujui rancangan anggaran itu.</em><br>Pasif: <em>Rancangan anggaran itu <strong>telah kami setujui</strong>.</em> (Bukan: <em>telah disetujui oleh kami</em>!)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
                    <strong>⚡ Jebakan Posisi Kata Bantu (<em>telah, sudah, akan, sedang, harus, dapat</em>):</strong> Pada pasif Tipe 2, kata bantu wajib diletakkan <strong>SEBELUM kata ganti pelaku</strong>: <em>"telah saya baca"</em>, <em>"akan kami bahas"</em> (JANGAN ditulis <em>"saya telah baca"</em> atau <em>"kami akan bahas"</em>).
                </div>
            `,
            contoh: {
                soal: "Ubahlah kalimat aktif 'Kita harus menjaga kelestarian hutan lindung' menjadi kalimat pasif yang baku!",
                langkah: "Karena Subjek aktifnya adalah persona ke-1 ('Kita'), gunakan rumus Tipe 2 (kata bantu 'harus' di depan 'kita' + verba tanpa imbuhan meN-): 'Kelestarian hutan lindung harus kita jaga.'"
            },
            gameQuestions: [
                {
                    q: "Bentuk pasif yang PALING TEPAT dan baku dari kalimat aktif: 'Kami sedang mengevaluasi efektivitas program bantuan sosial di lima provinsi' adalah...",
                    opts: [
                        "Efektivitas program bantuan sosial di lima provinsi sedang dievaluasi oleh kami.",
                        "Efektivitas program bantuan sosial di lima provinsi kami sedang evaluasi.",
                        "Efektivitas program bantuan sosial di lima provinsi sedang kami evaluasi.",
                        "Di lima provinsi sedang dievaluasi efektivitas program bantuan sosial oleh kami."
                    ],
                    ans: 2,
                    exp: "Subjek aktif adalah pronomina persona pertama ('Kami'), sehingga bentuk pasifnya tidak menggunakan awalan 'di-', dan kata bantu aspek 'sedang' wajib mendahului pronomina pelaku: 'sedang kami evaluasi'."
                },
                {
                    q: "Manakah di antara kalimat aktif berikut yang TIDAK DAPAT diubah menjadi kalimat pasif?",
                    opts: [
                        "Para arkeolog menemukan prasasti batu beraksara Pallawa di lereng Gunung Lawu.",
                        "Perubahan suhu permukaan laut memengaruhi pola migrasi ikan tuna sirip biru.",
                        "Delegasi Indonesia berdiskusi tentang perjanjian perdagangan bebas di Jenewa.",
                        "Kita wajib mematuhi protokol keselamatan kerja di dalam laboratorium kimia."
                    ],
                    ans: 2,
                    exp: "Kalimat pada opsi C menggunakan predikat verba intransitif berawalan 'ber-' ('berdiskusi') yang tidak memiliki Objek, sehingga tidak dapat dipasifkan."
                },
                {
                    q: "Perhatikan kalimat pasif berikut: 'Proposal penelitian hibah nasional itu telah disetujui oleh dewan penguji kemarin sore.' Bentuk kalimat aktif yang sepadan dengan kalimat tersebut adalah...",
                    opts: [
                        "Dewan penguji telah menyetujui proposal penelitian hibah nasional itu kemarin sore.",
                        "Kemarin sore proposal penelitian hibah nasional itu menyetujui dewan penguji.",
                        "Dewan penguji sedang menyetujui proposal penelitian hibah nasional itu kemarin sore.",
                        "Proposal penelitian hibah nasional itu telah menyetujui dewan penguji kemarin sore."
                    ],
                    ans: 0,
                    exp: "Pelaku pada kalimat pasif ('dewan penguji') dikembalikan menjadi Subjek, verba 'telah disetujui' diubah menjadi aktif 'telah menyetujui', dan 'proposal penelitian hibah nasional itu' menjadi Objek."
                }
            ]
        },
        {
            key: "ppu_1_3",
            kategori: "Aplikasi & Analisis Kalimat",
            judul: "Inti Kalimat & Kalimat Dasar",
            ringkasan: `
                <p>Soal <strong>Inti Kalimat / Kalimat Inti</strong> hampir selalu muncul setiap tahun di UTBK PPU. Kalimat panjang sepanjang 3 baris pun sebenarnya hanya memiliki kerangka inti yang pendek!</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Rumus Pangkas 3 Langkah Mencari Inti Kalimat:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Coret semua Keterangan (K) dan Anak Kalimat:</strong> Buang semua bagian yang diawali <em>di, pada, dalam, ketika, karena, meskipun, menurut, untuk, dengan, sejak</em>.</li>
                        <li><strong>Coret semua Perluasan (Atribut/Klausa <em>yang</em>):</strong> Jika Subjek atau Objek memiliki buntut panjang yang diawali kata <em>"yang..."</em>, pangkas dan sisakan <strong>kata benda intinya saja</strong>.</li>
                        <li><strong>Ambil Inti S + Inti P (+ Inti O/Pel jika transitif/berpelengkap):</strong> Inti kalimat minimal terdiri atas <strong>Subjek Inti + Predikat Inti (+ Objek/Pelengkap Inti)</strong>.</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Tentukan inti kalimat dari: 'Sejak tahun lalu, pemerintah pusat yang dipimpin presiden baru gencar membangun berbagai infrastruktur digital di daerah tertinggal.'",
                langkah: "1. Buang Keterangan: 'Sejak tahun lalu,' dan 'di daerah tertinggal'. 2. Pangkas perluasan S: 'pemerintah pusat [yang dipimpin presiden baru]' -> 'Pemerintah pusat'. 3. Pangkas P & O: '[gencar] membangun' -> 'membangun'; '[berbagai] infrastruktur digital' -> 'infrastruktur digital'. Inti kalimat: 'Pemerintah pusat membangun infrastruktur digital.'"
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat berikut: 'Di tengah ketidakpastian ekonomi global, peningkatan investasi pada sektor hilirisasi nikel yang bernilai tambah tinggi berhasil mendorong pertumbuhan ekspor nasional pada kuartal ini.' Inti kalimat dari kalimat panjang tersebut adalah...",
                    opts: [
                        "Ketidakpastian ekonomi global mendorong pertumbuhan ekspor.",
                        "Peningkatan investasi mendorong pertumbuhan ekspor.",
                        "Hilirisasi nikel bernilai tambah tinggi pada kuartal ini.",
                        "Investasi sektor hilirisasi mendorong ekonomi global."
                    ],
                    ans: 1,
                    exp: "Buang Keterangan awal ('Di tengah ketidakpastian ekonomi global,') dan Keterangan akhir ('pada kuartal ini'). Subjek intinya adalah 'Peningkatan investasi' (perluasan 'pada sektor hilirisasi nikel yang...' dibuang), Predikat intinya 'mendorong', dan Objek intinya 'pertumbuhan ekspor'."
                },
                {
                    q: "Kalimat manakah di bawah ini yang merupakan perluasan dari kalimat inti: 'Bakteri menguraikan limbah'?",
                    opts: [
                        "Limbah plastik yang menumpuk di muara sungai mencemari habitat bakteri pengurai.",
                        "Peneliti sedang mengembangbiakkan bakteri khusus untuk menguraikan limbah minyak bumi.",
                        "Bakteri hasil rekayasa genetika itu mampu menguraikan limbah tumpahan minyak di laut dengan cepat.",
                        "Penguraian limbah industri tekstil memerlukan bantuan bakteri anaerob di dalam tangki."
                    ],
                    ans: 2,
                    exp: "Pada opsi C, Subjek intinya adalah 'Bakteri' (diperluas dengan 'hasil rekayasa genetika itu'), Predikat intinya 'menguraikan' (diperluas dengan 'mampu'), dan Objek intinya 'limbah' (diperluas dengan 'tumpahan minyak di laut'), ditambah Keterangan 'dengan cepat'."
                },
                {
                    q: "Inti kalimat dari: 'Meskipun sempat tertunda akibat cuaca buruk, peluncuran satelit komunikasi generasi terbaru milik Indonesia akhirnya berlangsung dengan sukses tadi malam' adalah...",
                    opts: [
                        "Peluncuran satelit sempat tertunda cuaca buruk.",
                        "Satelit komunikasi Indonesia diluncurkan tadi malam.",
                        "Peluncuran satelit berlangsung.",
                        "Cuaca buruk menunda peluncuran satelit."
                    ],
                    ans: 2,
                    exp: "Anak kalimat konsesif ('Meskipun sempat tertunda akibat cuaca buruk,') dan keterangan cara/waktu ('dengan sukses tadi malam') dibuang. Tersisa Subjek inti 'Peluncuran satelit' dan Predikat intransitif inti 'berlangsung'."
                }
            ]
        },
        {
            key: "ppu_1_4",
            kategori: "Aplikasi & Analisis Kalimat",
            judul: "Kelogisan Kalimat (Nalar Bahasa)",
            ringkasan: `
                <p><strong>Kelogisan kalimat</strong> menuntut kesesuaian antara struktur gramatikal dengan <strong>akal sehat (logika semantis)</strong>. Banyak kalimat yang terdengar biasa dalam percakapan sehari-hari ternyata <strong>tidak logis</strong> secara tata bahasa baku.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Bentuk TIDAK LOGIS (Salah)</th>
                                <th class="p-2 border border-slate-200 text-left">Mengapa Tidak Logis?</th>
                                <th class="p-2 border border-slate-200 text-left">Perbaikan LOGIS (Benar)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 text-rose-600">"Untuk mempersingkat waktu, acara kita mulai."</td>
                                <td class="p-2">Waktu (24 jam sehari) tidak bisa dipersingkat; yang bisa dihemat adalah pemakaian waktunya.</td>
                                <td class="p-2 text-teal-700 font-semibold">"Untuk <strong>menghemat waktu</strong> / memanfaatkan waktu, acara kita mulai."</td>
                            </tr>
                            <tr>
                                <td class="p-2 text-rose-600">"Pencuri berhasil ditangkap polisi."</td>
                                <td class="p-2">Kata "berhasil" milik Subjek. Masa pencuri "berhasil" ditangkap? Yang berhasil adalah polisi!</td>
                                <td class="p-2 text-teal-700 font-semibold">"<strong>Polisi berhasil menangkap</strong> pencuri" atau "Pencuri <strong>tertangkap</strong> polisi."</td>
                            </tr>
                            <tr>
                                <td class="p-2 text-rose-600">"Mayat wanita yang ditemukan itu sebelumnya sering mondar-mandir di pasar."</td>
                                <td class="p-2">Mayat (benda mati) tidak bisa mondar-mandir; yang mondar-mandir adalah wanita itu semasa hidup.</td>
                                <td class="p-2 text-teal-700 font-semibold">"<strong>Wanita yang ditemukan tewas itu</strong> sebelumnya sering mondar-mandir di pasar."</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Mengapa kalimat 'Masalah kemacetan di ibu kota harus segera dientaskan' tidak logis?",
                langkah: "'Mengentaskan' bermakna mengangkat dari tempat basah/buruk ke tempat yang lebih baik (sehingga objeknya adalah korban/masyarakat miskin: mengentaskan masyarakat dari kemiskinan). Jika objeknya 'masalah kemacetan', gunakan 'diatasi' atau 'diselesaikan'."
            },
            gameQuestions: [
                {
                    q: "Manakah di antara kalimat berikut yang TIDAK LOGIS secara penalaran bahasa?",
                    opts: [
                        "Petugas pemadam kebakaran berhasil memadamkan api sebelum merembet ke gudang bahan kimia.",
                        "Tersangka penggelapan pajak bernilai miliaran rupiah itu akhirnya berhasil ditangkap oleh penyidik kejaksaan.",
                        "Untuk menghemat waktu, moderator langsung membuka sesi tanya jawab dengan peserta seminar.",
                        "Ponsel milik ketua panitia berdering nyaring saat rapat evaluasi sedang berlangsung."
                    ],
                    ans: 1,
                    exp: "Kalimat 'Tersangka ... berhasil ditangkap oleh penyidik' tidak logis karena Subjeknya adalah 'Tersangka', seolah-olah tersangka berusaha keras dan sukses agar dirinya ditangkap. Seharusnya: 'Penyidik kejaksaan berhasil menangkap tersangka...' atau 'Tersangka ... akhirnya tertangkap oleh penyidik'."
                },
                {
                    q: "Perhatikan kalimat tidak logis berikut: 'Jenazah pendaki yang ditemukan di lereng gunung itu sebelumnya sempat berfoto di pos pendakian terakhir.' Perbaikan yang paling tepat agar kalimat tersebut menjadi logis adalah...",
                    opts: [
                        "Mengganti kata 'Jenazah pendaki' menjadi 'Pendaki yang ditemukan jenazahnya (atau ditemukan tewas)'.",
                        "Mengganti kata 'berfoto' menjadi 'difoto oleh temannya'.",
                        "Menghilangkan kata 'sebelumnya' dari dalam kalimat.",
                        "Mengganti kata 'di lereng gunung' menjadi 'di puncak gunung'."
                    ],
                    ans: 0,
                    exp: "Subjek 'Jenazah pendaki' (orang yang sudah meninggal) tidak logis jika melakukan tindakan aktif 'sempat berfoto'. Subjeknya harus diubah menjadi 'Pendaki yang ditemukan tewas/meninggal itu...'."
                },
                {
                    q: "Manakah kalimat di bawah ini yang LOGIS dan tepat secara nalar bahasa?",
                    opts: [
                        "Waktu dan tempat kami persilakan kepada Bapak Kepala Dinas Pendidikan.",
                        "Untuk mempersingkat waktu, marilah kita lanjutkan rapat pleno sore ini.",
                        "Kepada pemenang lomba karya tulis ilmiah diharapkan naik ke atas panggung.",
                        "Bapak Kepala Dinas Pendidikan kami persilakan menyampaikan sambutan."
                    ],
                    ans: 3,
                    exp: "Yang dipersilakan memberikan sambutan adalah orangnya ('Bapak Kepala Dinas Pendidikan'), bukan 'waktu dan tempat'. Opsi A salah (tidak logis); Opsi B salah ('mempersingkat waktu' tidak logis); Opsi C salah (tidak bersubjek karena diawali 'Kepada' serta lewah 'naik ke atas')."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 2: PEMAHAMAN BACAAN GLOBAL (4 SUB-MATERI)
        // =====================================================================
        {
            key: "ppu_2_0",
            kategori: "Pemahaman Bacaan Global",
            judul: "Tema, Topik, dan Gagasan Pokok Wacana",
            ringkasan: `
                <p>Dalam memahami wacana global (beberapa paragraf), kamu harus bisa membedakan <strong>Topik/Judul Wacana</strong>, <strong>Gagasan Pokok Antarparagraf</strong>, dan <strong>Prediksi Paragraf Berikutnya</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Tipe Pertanyaan PPU</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat Menjawab</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Topik / Judul Terbaik</td>
                                <td class="p-2">Harus berupa <strong>frasa nominal</strong> (bukan kalimat), mencakup <strong>kata kunci yang diulang di semua paragraf</strong>, tidak terlalu luas dan tidak hanya mewakili 1 paragraf saja.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Hubungan Paragraf 1 dan 2</td>
                                <td class="p-2">Bandingkan <strong>Kalimat Utama Paragraf 1</strong> dan <strong>Kalimat Utama Paragraf 2</strong> (apakah P2 menjelaskan dampak dari P1, memberikan contoh P1, atau mempertentangkan P1).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Gagasan Paragraf Berikutnya</td>
                                <td class="p-2">Fokus baca <strong>1-2 kalimat paling akhir</strong> dari paragraf terakhir! Topik baru yang disinggung di kalimat penutup itulah yang akan dibahas di paragraf selanjutnya.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Jika kalimat terakhir paragraf penutup berbunyi: 'Selain regulasi pemerintah, keberhasilan daur ulang baterai juga menuntut inovasi teknologi ekstraksi hidrometalurgi di tingkat industri.', apakah topik paragraf selanjutnya?",
                langkah: "Bagian awal kalimat ('Selain regulasi pemerintah') merangkum paragraf sebelumnya, sedangkan bagian akhir ('inovasi teknologi ekstraksi hidrometalurgi di tingkat industri') adalah jembatan menuju pembahasan paragraf berikutnya."
            },
            gameQuestions: [
                {
                    q: "Paragraf 1 membahas peningkatan suhu permukaan laut akibat fenomena El Nino. Paragraf 2 membahas terjadinya pemutihan massal terumbu karang dan penurunan hasil tangkapan nelayan akibat kenaikan suhu laut tersebut. Hubungan isi antara Paragraf 1 dan Paragraf 2 adalah...",
                    opts: [
                        "Paragraf 2 merupakan rincian sejarah dari peristiwa di Paragraf 1.",
                        "Paragraf 2 memaparkan akibat atau dampak dari fenomena yang dijelaskan di Paragraf 1.",
                        "Paragraf 2 membantah argumen utama yang dikemukakan di Paragraf 1.",
                        "Paragraf 1 merupakan kesimpulan akhir dari data di Paragraf 2."
                    ],
                    ans: 1,
                    exp: "Paragraf 1 memaparkan sebab (peningkatan suhu laut akibat El Nino), sedangkan Paragraf 2 memaparkan akibat/dampaknya terhadap ekosistem karang dan nelayan."
                },
                {
                    q: "Kalimat terakhir sebuah bacaan berbunyi: 'Meskipun potensi energi panas bumi Indonesia mencapai empat puluh persen cadangan dunia, pengembangannya masih terkendala oleh tingginya risiko eksplorasi awal dan keterbatasan jaringan transmisi listrik.' Jika penulis menambahkan satu paragraf baru setelah paragraf tersebut, gagasan pokok yang PALING MUNGKIN dibahas adalah...",
                    opts: [
                        "Sejarah terbentuknya gunung berapi aktif di kepulauan Nusantara jutaan tahun silam.",
                        "Rincian kendala risiko eksplorasi awal dan keterbatasan jaringan transmisi dalam pengembangan panas bumi beserta solusinya.",
                        "Perbandingan harga bahan bakar batu bara dengan minyak mentah di pasar Eropa.",
                        "Daftar lengkap nama-nama kawah wisata panas bumi yang populer bagi turis mancanegara."
                    ],
                    ans: 1,
                    exp: "Prediksi paragraf berikutnya selalu melanjutkan subtopik baru yang diperkenalkan pada kalimat terakhir paragraf sebelumnya, yaitu kendala risiko eksplorasi awal dan keterbatasan jaringan transmisi listrik."
                },
                {
                    q: "Syarat judul karangan ilmiah yang baik dan sesuai dengan kaidah EYD V adalah...",
                    opts: [
                        "Berbentuk kalimat panjang yang diakhiri tanda titik (.).",
                        "Berbentuk frasa nominal yang ringkas, mewakili seluruh isi teks, tanpa tanda titik di akhir, dengan huruf kapital di setiap awal kata kecuali preposisi/konjungsi di tengah.",
                        "Menggunakan bahasa kiasan yang puitis meskipun tidak berkaitan langsung dengan isi penelitian.",
                        "Menuliskan seluruh kata depan seperti 'Di', 'Ke', 'Dari', dan 'Untuk' dengan huruf awal kapital meskipun berada di tengah judul."
                    ],
                    ans: 1,
                    exp: "Judul yang baik berbentuk frasa (kelompok kata), mencerminkan isi wacana secara utuh, tidak diakhiri tanda titik, dan menggunakan huruf kapital di awal setiap kata kecuali tugas (preposisi/konjungsi/interjeksi/partikel) yang tidak terletak di awal judul."
                }
            ]
        },
        {
            key: "ppu_2_1",
            kategori: "Pemahaman Bacaan Global",
            judul: "Makna Ungkapan / Peribahasa",
            ringkasan: `
                <p><strong>Ungkapan (idiom)</strong> adalah gabungan kata yang maknanya sudah menyatu dan tidak dapat ditafsirkan dari makna unsur pembentuknya secara harfiah, sedangkan <strong>peribahasa</strong> adalah kalimat/kelompok kata tetap yang mengiaskan maksud tertentu.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Ungkapan / Idiom</th>
                                <th class="p-2 border border-slate-200 text-left">Makna Kiasan</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">kambing hitam | cuci tangan</td>
                                <td class="p-2">orang yang dipersalahkan | melepaskan tanggung jawab</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">angkat kaki | angkat tangan</td>
                                <td class="p-2">pergi meninggalkan tempat | menyerah / putus asa</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">buah bibir | buah tangan | buah pikiran</td>
                                <td class="p-2">bahan pembicaraan | oleh-oleh | hasil karya/gagasan</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">tulang punggung | tangan kanan</td>
                                <td class="p-2">penopang utama | orang kepercayaan utama</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">setengah hati | berat hati</td>
                                <td class="p-2">tidak sungguh-sungguh (ragu) | kurang rela / enggan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Apakah makna ungkapan 'memutar otak' dalam kalimat 'Para insinyur harus memutar otak untuk menekan biaya produksi'?",
                langkah: "'Memutar otak' adalah ungkapan yang bermakna berpikir keras atau mencari akal/strategi dengan sungguh-sungguh."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kalimat berikut: 'Ketika proyek pembangunan jembatan itu mengalami kegagalan konstruksi, pihak kontraktor berusaha *cuci tangan* dan menjadikan cuaca ekstrem sebagai *kambing hitam*.' Makna kedua ungkapan bercetak miring tersebut berturut-turut adalah...",
                    opts: [
                        "membersihkan peralatan kerja — hewan kurban",
                        "melepaskan diri dari tanggung jawab — pihak/hal yang dipersalahkan",
                        "meminta maaf secara terbuka — alasan yang dapat diterima",
                        "mengundurkan diri dari jabatan — rahasia perusahaan"
                    ],
                    ans: 1,
                    exp: "Ungkapan 'cuci tangan' bermakna menghindar/lepas dari tanggung jawab, sedangkan 'kambing hitam' bermakna orang atau hal yang dipersalahkan atas suatu kegagalan."
                },
                {
                    q: "Ilustrasi: Sebuah daerah yang memiliki cadangan tambang emas dan lahan pertanian sangat subur justru masyarakat lokalnya hidup dalam kemiskinan karena tidak mampu mengelola sumber daya tersebut. Peribahasa yang PALING TEPAT untuk menggambarkan ilustrasi tersebut adalah...",
                    opts: [
                        "Bagai air di daun talas.",
                        "Ayam kelaparan di lumbung padi.",
                        "Seperti katak dalam tempurung.",
                        "Tong kosong nyaring bunyinya."
                    ],
                    ans: 1,
                    exp: "'Ayam (atau tikus) mati/kelaparan di lumbung padi' mengiaskan seseorang atau masyarakat yang menderita kekurangan di tengah kelimpahan kekayaan alam daerahnya sendiri."
                },
                {
                    q: "Manakah kalimat di bawah ini yang menggunakan kata 'tangan' dalam makna UNGKAPAN (idiomatis/kiasan)?",
                    opts: [
                        "Dokter bedah itu mencuci tangan dengan cairan antiseptik sebelum memasuki ruang operasi.",
                        "Pemerintah pusat akhirnya turun tangan mengatasi kelangkaan pupuk bersubsidi di daerah.",
                        "Atlet bulu tangkis itu mengalami cedera pergelangan tangan kanan saat babak semifinal.",
                        "Anak kecil itu melambaikan tangan kepada kakeknya dari balik jendela kereta api."
                    ],
                    ans: 1,
                    exp: "'Turun tangan' adalah ungkapan (idiom) yang bermakna turut campur atau bertindak langsung menyelesaikan suatu masalah. Opsi A, C, dan D menggunakan kata 'tangan' dalam makna sebenarnya (denotatif/leksikal)."
                }
            ]
        },
        {
            key: "ppu_2_2",
            kategori: "Pemahaman Bacaan Global",
            judul: "Sikap / Nada Penulis (Author's Tone)",
            ringkasan: `
                <p>Soal <strong>Sikap Penulis (Author's Attitude / Tone)</strong> dan <strong>Keberpihakan Penulis</strong> menguji kepekaanmu menangkap emosi atau sudut pandang penulis melalui pilihan kata (diksi) yang digunakannya.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Sikap Penulis</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Diksi di Dalam Teks</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Netral / Objektif / Informatif</td>
                                <td class="p-2">Hanya memaparkan fakta ilmiah, angka statistik, atau menyajikan dua sisi argumen secara berimbang tanpa kata sifat emosional.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Prihatin / Khawatir / Cemas</td>
                                <td class="p-2">Menggunakan diksi peringatan: <em>mengancam, mengkhawatirkan, rentan, darurat, sayangnya, memperparah, berisiko tinggi</em>.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Optimistis / Antusias / Mendukung</td>
                                <td class="p-2">Menggunakan diksi harapan positif: <em>menjanjikan, peluang emas, terobosan cerah, patut diapresiasi, solusi efektif</em>.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Kritis / Menentang</td>
                                <td class="p-2">Menyoroti kelemahan kebijakan/argumen: <em>keliru, timpang, merugikan masyarakat, mengabaikan hak, perlu dievaluasi total</em>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Jika penulis menulis: 'Tanpa pengawasan ketat, ekspansi tambang ilegal itu dikhawatirkan akan menghancurkan daerah aliran sungai dan menyengsarakan petani hilir', bagaimanakah sikap penulis?",
                langkah: "Pilihan kata 'dikhawatirkan', 'menghancurkan', dan 'menyengsarakan' menunjukkan sikap penulis yang prihatin/khawatir terhadap dampak tambang ilegal dan berpihak pada petani hilir."
            },
            gameQuestions: [
                {
                    q: "Perhatikan kutipan berikut: 'Maraknya pinjaman daring ilegal dengan bunga mencekik telah menjerat ribuan pekerja berpenghasilan rendah. Sayangnya, literasi keuangan digital masyarakat masih tertinggal jauh dibandingkan agresivitas iklan penyedia pinjaman tersebut. Apabila regulasi perlindungan data pribadi tidak segera dipertegas, tragedi sosial ini akan terus berulang.' Sikap penulis dalam kutipan tersebut adalah...",
                    opts: [
                        "Apatis dan acuh tak acuh",
                        "Prihatin dan kritis",
                        "Optimistis dan gembira",
                        "Sinis terhadap pekerja berpenghasilan rendah"
                    ],
                    ans: 1,
                    exp: "Penggunaan diksi 'bunga mencekik', 'Sayangnya,...', dan 'tragedi sosial ini akan terus berulang' menunjukkan rasa prihatin terhadap korban serta sikap kritis yang mendesak ketegasan regulasi."
                },
                {
                    q: "Dalam kutipan: 'Para perajin tenun tradisional di pulau terpencil sering kali hanya menerima keuntungan paling kecil dalam rantai perdagangan kain etnik, sementara tengkulak kota menikmati margin laba berlipat ganda. Pemerintah daerah wajib membuka akses pasar digital langsung agar jerih payah para penenun lokal dihargai secara adil.' Kepada siapakah penulis berpihak?",
                    opts: [
                        "Tengkulak kota",
                        "Perajin tenun tradisional",
                        "Wisatawan mancanegara",
                        "Perusahaan tekstil pabrikan"
                    ],
                    ans: 1,
                    exp: "Penulis membela kepentingan dan kesejahteraan 'perajin tenun tradisional' (penenun lokal) agar mendapatkan harga yang adil melalui akses pasar langsung."
                },
                {
                    q: "Perhatikan kutipan berikut: 'Air murni pada tekanan atmosfer standar membeku pada suhu 0 derajat Celsius dan mendidih pada suhu 100 derajat Celsius. Ketika garam natrium klorida dilarutkan ke dalam air, titik beku larutan mengalami penurunan sedangkan titik didihnya mengalami kenaikan sebanding dengan konsentrasi molal zat terlarut.' Nada (tone) penulis pada teks tersebut adalah...",
                    opts: [
                        "Emosional dan persuasif",
                        "Objektif dan informatif",
                        "Pesimistis dan meragukan",
                        "Sarkastis dan menyindir"
                    ],
                    ans: 1,
                    exp: "Teks tersebut murni memaparkan fakta sains (sifat koligatif larutan) tanpa opini emosional atau penilaian subjektif, sehingga bernada objektif dan informatif."
                }
            ]
        },
        {
            key: "ppu_2_3",
            kategori: "Pemahaman Bacaan Global",
            judul: "Sistem Bahasa Hipotesis (Bahasa Panda)",
            ringkasan: `
                <p><strong>Soal Bahasa Hipotesis (Bahasa Panda / Bahasa Buatan)</strong> menguji kemampuan analisis pola morfologi (imbuhan), urutan sintaksis (S-P-O vs O-P-S, D-M vs M-D), dan penanda jamak/waktu dari contoh kalimat yang diberikan.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Algoritma 4 Langkah Memecahkan Bahasa Panda:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Cari Kata yang Muncul Berulang:</strong> Bandingkan 2-3 kalimat petunjuk. Kata yang sama di bahasa Indonesia pasti berkorespondensi dengan kata/akar kata yang sama di bahasa buatan!</li>
                        <li><strong>Cek Urutan S-P-O:</strong> Perhatikan apakah bahasa buatan tersebut meletakkan <strong>Predikat di akhir (S-O-P)</strong>, <strong>Objek di awal (O-S-P)</strong>, atau <strong>S-P-O</strong>.</li>
                        <li><strong>Cek Hukum D-M vs M-D:</strong> Misalnya <em>"kucing putih"</em> menjadi <em>"miao bura"</em> atau <em>"bura miao"</em>.</li>
                        <li><strong>Perhatikan Imbuhan Penanda (Tanda ?, Pasif, Jamak, Masa Lalu):</strong> Cek awalan/akhiran yang berubah saat kalimat menjadi tanya atau pasif.</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Diketahui:\n- 'kora tami' = burung terbang\n- 'tami luno' = pesawat terbang\n- 'kora sena' = burung bernyanyi\nApakah arti 'kora' dan 'tami'?",
                langkah: "Kata yang sama pada kalimat 1 dan 2 adalah 'tami' = 'terbang'. Kata yang sama pada kalimat 1 dan 3 adalah 'kora' = 'burung'. Maka 'sena' = 'bernyanyi' dan 'luno' = 'pesawat'."
            },
            gameQuestions: [
                {
                    q: "Dalam suatu bahasa hipotesis diketahui:\n• 'nari voka miru' berarti 'kucing mengejar tikus'\n• 'miru voka nari' berarti 'tikus mengejar kucing'\n• 'bela voka miru' berarti 'anjing mengejar tikus'\nBerdasarkan pola tersebut, bagaimanakah cara mengatakan 'kucing mengejar anjing'?",
                    opts: [
                        "bela voka nari",
                        "nari voka bela",
                        "voka nari bela",
                        "nari bela voka"
                    ],
                    ans: 1,
                    exp: "Dari kalimat 1 dan 2, kata di tengah 'voka' tetap = 'mengejar' (pola S - P - O). 'nari' = kucing, 'miru' = tikus. Dari kalimat 3, 'bela' = anjing. Maka 'kucing (nari) mengejar (voka) anjing (bela)' adalah 'nari voka bela'."
                },
                {
                    q: "Perhatikan data bahasa buatan berikut:\n• 'tano kema' = rumah besar\n• 'kema tano' = memperbesar rumah\n• 'lira sova' = jalan lebar\n• 'sova lira' = memperlebar jalan\nJika 'bina' berarti 'buku' dan 'ruko' berarti 'tebal', maka terjemahan dari 'mempertebal buku' adalah...",
                    opts: [
                        "bina ruko",
                        "ruko bina",
                        "kema bina",
                        "bina sova"
                    ],
                    ans: 1,
                    exp: "Pola bahasa tersebut: [Nomina + Adjektiva] bermakna frasa benda ('rumah besar' = tano kema), sedangkan jika dibalik [Adjektiva + Nomina] bermakna verba kausatif 'memper-[sifat] [benda]' ('memperbesar rumah' = kema tano). Maka 'mempertebal (ruko) buku (bina)' adalah 'ruko bina'."
                },
                {
                    q: "Diketahui data bahasa hipotesis:\n• 'zora paki-lu' = anak itu membeli apel\n• 'paki zora-na' = apel dibeli anak itu\n• 'mori tesa-lu' = petani itu memetik kopi\nBagaimanakah cara mengatakan 'kopi dipetik petani itu' dalam bahasa tersebut?",
                    opts: [
                        "mori tesa-na",
                        "tesa mori-na",
                        "tesa-lu mori",
                        "mori-na tesa"
                    ],
                    ans: 1,
                    exp: "Analisis pola aktif -> pasif:\nKalimat aktif: [Subjek: zora/mori] + [Objek-lu: paki-lu / tesa-lu].\nKalimat pasif: [Objek tanpa akhiran: paki / tesa] + [Subjek-na: zora-na / mori-na].\nMaka 'kopi (tesa) dipetik petani itu (mori-na)' adalah 'tesa mori-na'."
                }
            ]
        }
    ]
};
