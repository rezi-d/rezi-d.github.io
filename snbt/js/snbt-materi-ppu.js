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
                },
                {
                    q: "Perhatikan kalimat berikut: 'Disrupsi teknologi kecerdasan buatan memicu *transformasi* fundamental dalam lanskap ketenagakerjaan global.' Kata yang paling tepat untuk menggantikan kata bercetak miring adalah...",
                    opts: [
                        "pergantian",
                        "perubahan bentuk atau struktur",
                        "perpindahan lokasi",
                        "penyeragaman sistem"
                    ],
                    ans: 1,
                    exp: "Secara leksikal dan kontekstual, 'transformasi' dalam KBBI bermakna perubahan rupa (bentuk, sifat, fungsi, atau struktur) secara menyeluruh."
                },
                {
                    q: "Dalam kalimat 'Bank sentral mengambil langkah *mitigasi* untuk mencegah krisis likuiditas perbankan', kata 'mitigasi' memiliki makna yang berlawanan (antonim kontekstual) paling dekat dengan...",
                    opts: [
                        "peredaman",
                        "pencegahan",
                        "eskalasi / pembiaran risiko",
                        "rehabilitasi"
                    ],
                    ans: 2,
                    exp: "'Mitigasi' berarti tindakan mengurangi dampak atau keparahan risiko/bencana. Antonim kontekstualnya adalah tindakan yang memperparah atau membiarkan peningkatan risiko (eskalasi/pembiaran)."
                },
                {
                    q: "Manakah pasangan kalimat di bawah ini yang menunjukkan relasi POLISEMI pada kata 'kaki'?",
                    opts: [
                        "(1) Kaki meja kayu jati itu patah satu. — (2) Pendaki itu mendirikan tenda di kaki Gunung Rinjani.",
                        "(1) Ia menginjak rem dengan kaki kanan. — (2) Kaki tangan sindikat pemalsuan dokumen itu telah diringkus.",
                        "(1) Kakaknya membeli sepatu berukuran empat puluh kaki. — (2) Kaki langit tampak memerah saat senja.",
                        "(1) Kaki kursi itu keropos dimakan rayap. — (2) Petani itu mencangkul tanah dengan tangan dan kaki."
                    ],
                    ans: 0,
                    exp: "'Kaki meja' (penopang bagian bawah meja) dan 'kaki gunung' (bagian paling bawah lereng gunung) merupakan polisemi karena masih memiliki benang merah makna 'bagian bawah yang menopang suatu objek'."
                },
                {
                    q: "Perhatikan kalimat berikut: ' Pemerintah daerah melakukan *revitalisasi* kawasan kota tua guna meningkatkan daya tarik wisata sejarah.' Makna kata 'revitalisasi' dalam konteks kalimat tersebut adalah...",
                    opts: [
                        "pembongkaran bangunan lama untuk diganti gedung pencakar langit",
                        "proses menghidupkan atau menggiatkan kembali kawasan yang sebelumnya kurang berdaya",
                        "pemindahan penduduk lokal ke wilayah pinggiran kota",
                        "penutupan akses publik demi menjaga keaslian situs purbakala"
                    ],
                    ans: 1,
                    exp: "'Revitalisasi' bermakna proses, cara, atau perbuatan menghidupkan atau menggiatkan kembali berbagai program atau kawasan agar kembali vital/berfungsi optimal."
                },
                {
                    q: "Kata 'bisa' pada kalimat (1) 'Ular kobra menyemburkan bisa yang mematikan ke arah mangsanya' dan kalimat (2) 'Mahasiswa baru itu sudah bisa mengoperasikan mikroskop elektron' memiliki relasi makna...",
                    opts: [
                        "Polisemi",
                        "Homonimi",
                        "Hiponimi",
                        "Sinestesia"
                    ],
                    ans: 1,
                    exp: "Kata 'bisa' (zat racun dari binatang) dan 'bisa' (mampu/dapat) berasal dari akar etimologi yang berbeda, kebetulan ejaan dan pelafalannya sama, serta tidak memiliki kaitan makna sama sekali (homonimi)."
                },
                {
                    q: "Kalimat manakah yang menggunakan diksi bernuansa ilmiah dan formal paling tepat untuk laporan penelitian?",
                    opts: [
                        "Para peneliti mengintip pergerakan bakteri patogen itu lewat lensa mikroskop selama tiga jam.",
                        "Tim riset mengamati pertumbuhan koloni bakteri patogen tersebut secara berkala setiap tiga jam.",
                        "Ilmuwan melirik perkembangan kuman penyakit itu di dalam cawan petri.",
                        "Petugas laboratorium menonton pembelahan sel mikroba itu dengan saksama."
                    ],
                    ans: 1,
                    exp: "Di antara verba bersinonim 'mengintip', 'mengamati', 'melirik', dan 'menonton', kata 'mengamati' (observasi) adalah diksi yang tepat secara kolokasi dan laras ilmiah untuk penelitian laboratorium."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Kesenjangan akses pendidikan berkualitas masih menjadi persoalan *pelik* di wilayah kepulauan terluar.' Padanan kata yang paling tepat untuk menggantikan kata 'pelik' adalah...",
                    opts: [
                        "sederhana",
                        "rumit",
                        "langka",
                        "usang"
                    ],
                    ans: 1,
                    exp: "Dalam konteks kalimat 'persoalan pelik', kata 'pelik' bermakna rumit, sulit, atau sukar diselesaikan."
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
                },
                {
                    q: "Penggunaan istilah 'pramuniaga' untuk menggantikan kata 'pelayan toko' dan istilah 'narapidana' untuk menggantikan kata 'orang hukuman/tahanan' merupakan contoh perubahan makna...",
                    opts: [
                        "Peyorasi",
                        "Ameliorasi",
                        "Spesialisasi",
                        "Asosiasi"
                    ],
                    ans: 1,
                    exp: "Ameliorasi adalah perubahan makna yang membuat nilai rasa suatu kata menjadi lebih sopan, halus, atau lebih tinggi penghargaannya dibandingkan istilah lama."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Menjelang pemilihan umum, sejumlah politisi berebut kursi di parlemen dengan menghalalkan berbagai cara.' Kata 'kursi' dalam kalimat tersebut mengalami perubahan makna secara...",
                    opts: [
                        "Sinestesia",
                        "Asosiasi",
                        "Spesialisasi",
                        "Ameliorasi"
                    ],
                    ans: 1,
                    exp: "Kata 'kursi' (tempat duduk) diasosiasikan dengan 'jabatan atau kedudukan kekuasaan' karena persamaan sifat/fungsinya. Ini disebut perubahan makna asosiasi."
                },
                {
                    q: "Dahulu kata 'putra' dan 'putri' hanya digunakan khusus untuk menyebut anak kandung raja atau bangsawan keraton. Kini, kedua kata tersebut digunakan untuk menyebut anak laki-laki dan perempuan dari keluarga mana pun. Gejala perubahan makna ini disebut...",
                    opts: [
                        "Generalisasi (perluasan makna)",
                        "Spesialisasi (penyempitan makna)",
                        "Peyorasi (penurunan nilai rasa)",
                        "Sinestesia (pertukaran indra)"
                    ],
                    ans: 0,
                    exp: "Cakupan makna kata 'putra' dan 'putri' meluas dari yang semula hanya terbatas pada anak raja menjadi seluruh anak laki-laki dan perempuan secara umum (generalisasi)."
                },
                {
                    q: "Dalam bahasa Arab, kata 'madrasah' bermakna 'sekolah' secara umum. Setelah diserap ke dalam bahasa Indonesia, kata 'madrasah' hanya merujuk pada sekolah yang berbasis pendidikan agama Islam. Perubahan makna yang terjadi adalah...",
                    opts: [
                        "Generalisasi",
                        "Spesialisasi",
                        "Ameliorasi",
                        "Asosiasi"
                    ],
                    ans: 1,
                    exp: "Makna kata 'madrasah' mengalami penyempitan cakupan (spesialisasi) dari 'semua jenis sekolah' menjadi khusus 'sekolah berciri khas agama Islam'."
                },
                {
                    q: "Manakah di antara kalimat berikut yang mengandung perubahan makna ASOSIASI?",
                    opts: [
                        "Suara merdu penyanyi keroncong itu terasa sejuk di telinga para pendengar.",
                        "Pejabat yang terbukti menerima amplop dari rekanan proyek itu langsung diberhentikan.",
                        "Ibu Kepala Sekolah menyapa seluruh siswa baru dengan senyuman yang manis.",
                        "Warga binaan di lembaga pemasyarakatan itu mendapatkan pelatihan keterampilan menjahit."
                    ],
                    ans: 1,
                    exp: "Kata 'amplop' (sampul surat kertas) pada opsi B mengalami perubahan makna asosiasi menjadi 'uang suap/sogokan' karena uang suap lazim diselipkan di dalam amplop. Opsi A dan C adalah sinestesia; Opsi D adalah ameliorasi."
                },
                {
                    q: "Kata 'gerombolan' pada awalnya hanya bermakna 'kelompok atau kumpulan orang'. Akan tetapi, dewasa ini kata tersebut hampir selalu berkonotasi negatif sebagai 'kawanan pengacau atau penjahat'. Fenomena semantik ini tergolong...",
                    opts: [
                        "Ameliorasi",
                        "Peyorasi",
                        "Generalisasi",
                        "Sinestesia"
                    ],
                    ans: 1,
                    exp: "Perubahan nilai rasa kata dari netral ('kelompok') menjadi negatif/buruk ('kawanan penjahat/pengacau') disebut peyorasi."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Kombinasi warna cat dinding yang *sejuk* dan pencahayaan lampu yang *lembut* menciptakan suasana ruang baca yang nyaman.' Kata bercetak miring dalam kalimat tersebut menunjukkan gejala...",
                    opts: [
                        "Sinestesia",
                        "Peyorasi",
                        "Spesialisasi",
                        "Generalisasi"
                    ],
                    ans: 0,
                    exp: "'Warna' dan 'pencahayaan' ditangkap oleh indra penglihatan (mata), tetapi disifati dengan 'sejuk' dan 'lembut' yang merupakan tanggapan indra peraba (kulit). Pertukaran tanggapan indra ini adalah sinestesia."
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
                },
                {
                    q: "Perhatikan kalimat berikut: 'Indonesia mengekspor berbagai hasil perkebunan, antara lain kelapa sawit, karet, kakao, dan kopi robusta.' Hubungan makna antara kata 'kelapa sawit', 'karet', 'kakao', dan 'kopi robusta' disebut...",
                    opts: [
                        "Hipernim",
                        "Kohiponim (sesama anggota hiponim)",
                        "Holonim",
                        "Sinonim mutlak"
                    ],
                    ans: 1,
                    exp: "Kata-kata khusus yang berada pada satu tingkat hierarki yang sama di bawah satu hipernim ('hasil perkebunan') memiliki relasi kohiponim."
                },
                {
                    q: "Manakah di antara pasangan kata berikut yang memiliki relasi MERONIMI — HOLONIMI (bagian — keseluruhan), BUKAN hiponimi — hipernimi (jenis — induk)?",
                    opts: [
                        "anggrek — bunga",
                        "prosesor — komputer",
                        "perak — logam",
                        "biola — alat musik"
                    ],
                    ans: 1,
                    exp: "'Prosesor' bukan jenis dari komputer, melainkan komponen/bagian fisik (meronim) dari sebuah 'komputer' (holonim). Sementara anggrek, perak, dan biola adalah jenis (hiponim) dari bunga, logam, dan alat musik."
                },
                {
                    q: "Di antara kata-kata berikut yang terdapat dalam bidang sastra, manakah kata yang memiliki cakupan makna PALING LUAS (hipernim tertinggi)?",
                    opts: [
                        "Novel sejarah",
                        "Karya sastra",
                        "Prosa fiksi",
                        "Roman"
                    ],
                    ans: 1,
                    exp: "'Karya sastra' mencakup puisi, drama, dan prosa (termasuk prosa fiksi -> novel/roman -> novel sejarah), sehingga memiliki cakupan makna paling luas."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Museum Nasional menyimpan ribuan artefak bersejarah seperti prasasti batu, keramik kuno, mata uang logam, dan senjata tradisional.' Kata 'prasasti batu' terhadap 'artefak bersejarah' berkedudukan sebagai...",
                    opts: [
                        "Hipernim (superordinat)",
                        "Hiponim (subordinat)",
                        "Holonim",
                        "Antonim"
                    ],
                    ans: 1,
                    exp: "'Prasasti batu' adalah salah satu jenis khusus (hiponim/subordinat) yang tercakup di dalam kategori umum 'artefak bersejarah' (hipernim)."
                },
                {
                    q: "Manakah deretan kata di bawah ini yang SELURUHNYA merupakan hiponim dari 'bencana hidrometeorologi'?",
                    opts: [
                        "banjir bandang, kekeringan ekstrem, angin puting beliung",
                        "gempa bumi tektonik, tsunami, erupsi gunung berapi",
                        "tanah longsor, likuefaksi, gempa vulkanik",
                        "kebakaran gedung, kecelakaan pesawat, tumpahan minyak"
                    ],
                    ans: 0,
                    exp: "Bencana hidrometeorologi adalah bencana yang dipengaruhi oleh parameter cuaca/iklim dan siklus air, sehingga hiponimnya meliputi banjir bandang, kekeringan ekstrem, dan angin puting beliung."
                },
                {
                    q: "Jika kata (1) 'Energi', (2) 'Energi terbarukan', (3) 'Energi surya', dan (4) 'Listrik fotovoltaik atap' disusun dari cakupan makna PALING SEMPIT ke PALING LUAS, urutan yang benar adalah...",
                    opts: [
                        "(1) - (2) - (3) - (4)",
                        "(4) - (3) - (2) - (1)",
                        "(3) - (4) - (2) - (1)",
                        "(4) - (2) - (3) - (1)"
                    ],
                    ans: 1,
                    exp: "Urutan dari paling khusus (sempit) ke paling umum (luas): Listrik fotovoltaik atap (4) -> Energi surya (3) -> Energi terbarukan (2) -> Energi (1)."
                },
                {
                    q: "Kalimat manakah yang TIDAK tepat dalam menyejajarkan kohiponim pada rinciannya?",
                    opts: [
                        "Rumah sakit itu memiliki dokter spesialis jantung, spesialis anak, dan spesialis bedah saraf.",
                        "Petani itu menanam berbagai jenis sayuran daun, seperti bayam, kangkung, sawi, dan cangkul.",
                        "Perusahaan teknologi tersebut memproduksi laptop, ponsel pintar, dan tablet.",
                        "Di perairan taman nasional itu hidup penyu hijau, lumba-lumba, dan hiu paus."
                    ],
                    ans: 1,
                    exp: "Pada opsi B, hipernimnya adalah 'sayuran daun' (bayam, kangkung, sawi), tetapi diselipkan kata 'cangkul' yang merupakan alat pertanian (bukan hiponim dari sayuran daun)."
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
                },
                {
                    q: "Perhatikan kalimat berikut: 'Karakteristik tanah vulkanik di lereng gunung berapi sangat *berbeda dari* tanah gambut di dataran rendah.' Perbaikan frasa bercetak miring agar sesuai dengan pasangan idiomatis baku adalah...",
                    opts: [
                        "berbeda oleh",
                        "berbeda dengan",
                        "berbeda atas",
                        "berbeda pada"
                    ],
                    ans: 1,
                    exp: "Kata 'berbeda' berpasangan secara idiomatis dengan preposisi 'dengan' ('berbeda dengan') untuk menyatakan perbandingan dua hal."
                },
                {
                    q: "Manakah kalimat di bawah ini yang TIDAK mengandung kesalahan pasangan konjungsi korelatif?",
                    opts: [
                        "Baik pemerintah pusat ataupun pemerintah daerah harus bersinergi menangani inflasi.",
                        "Pembangunan kawasan industri itu tidak hanya membuka lapangan kerja, tetapi juga meningkatkan pendapatan asli daerah.",
                        "Bukan hanya faktor modal yang menentukan kesuksesan usaha, tetapi juga ketekunan wirausahawan.",
                        "Entah disetujui ataupun ditolak, kami tetap akan mempresentasikan rancangan inovasi ini."
                    ],
                    ans: 1,
                    exp: "Konjungsi korelatif yang baku adalah: 'tidak hanya ..., tetapi juga ...' (Opsi B benar). Adapun 'baik ... maupun ...' (bukan ataupun), dan 'bukan hanya ..., melainkan juga ...' (bukan tetapi juga)."
                },
                {
                    q: "Kalimat manakah yang menggunakan bentuk verba berkonfiks 'ber-...-kan' secara TEPAT dan tidak lewah?",
                    opts: [
                        "Berdasarkan atas laporan Badan Meteorologi, gelombang tinggi berpotensi terjadi di perairan selatan.",
                        "Putusan pengadilan negeri tersebut berlandaskan pada undang-undang yang berlaku.",
                        "Berdasarkan data sensus penduduk terbaru, jumlah angkatan kerja produktif mengalami peningkatan.",
                        "Kerja sama bilateral kedua negara itu berpedoman pada atas asas saling menguntungkan."
                    ],
                    ans: 2,
                    exp: "Konfiks 'ber-...-kan' (seperti 'berdasarkan' atau 'berlandaskan') sudah mengandung makna preposisi 'pada/atas' ('berdasar pada'). Oleh karena itu, setelah kata 'berdasarkan' harus langsung diikuti nomina tanpa kata depan 'pada' atau 'atas'."
                },
                {
                    q: "Lengkapi kalimat berikut dengan pasangan kata yang tepat: 'Kenaikan permukaan air laut yang ... pencairan es di kutub sangat ... kelangsungan hidup masyarakat pesisir.'",
                    opts: [
                        "disebabkan karena — berdampak bagi",
                        "disebabkan oleh — berdampak pada",
                        "disebabkan dari — berdampak terhadap",
                        "disebabkan atas — berdampak dengan"
                    ],
                    ans: 1,
                    exp: "Pasangan preposisi idiomatis yang baku adalah 'disebabkan oleh' dan 'berdampak pada'."
                },
                {
                    q: "Dalam kolokasi bahasa Indonesia baku, verba 'merumuskan' paling tepat dipasangkan dengan nomina...",
                    opts: [
                        "kebijakan / masalah",
                        "gedung bertingkat",
                        "tersangka korupsi",
                        "pameran lukisan"
                    ],
                    ans: 0,
                    exp: "Kata 'merumuskan' berkolokasi secara semantis dan idiomatis dengan objek abstrak konseptual seperti 'kebijakan', 'masalah', 'hipotesis', atau 'undang-undang'."
                },
                {
                    q: "Manakah di antara kalimat berikut yang menggunakan preposisi idiomatis secara TEPAT?",
                    opts: [
                        "Cincin pernikahan tradisional itu terbuat oleh logam mulia murni.",
                        "Kenaikan harga pangan pokok tahun ini berbanding lurus dengan laju inflasi tahunan.",
                        "Para ilmuwan membagi zona kedalaman laut itu menjadi atas empat lapisan utama.",
                        "Keputusan investasi jangka panjang itu sangat bergantung dari stabilitas politik nasional."
                    ],
                    ans: 1,
                    exp: "'Berbanding lurus dengan' adalah pasangan idiomatis yang tepat. Opsi A salah (seharusnya 'terbuat dari'); Opsi C salah (seharusnya 'membagi ... menjadi empat lapisan' atau 'terbagi atas'); Opsi D salah (seharusnya 'bergantung pada')."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Kebijakan fiskal ekspansif tersebut *bertujuan untuk* mendorong daya beli masyarakat.' Mengapa frasa bercetak miring dianggap kurang hemat dalam tata bahasa baku?",
                    opts: [
                        "Karena kata 'bertujuan' sudah bermakna 'mempunyai tujuan (untuk)', sehingga penambahan preposisi 'untuk' bersifat lewah.",
                        "Karena kata 'bertujuan' seharusnya diikuti oleh preposisi 'pada'.",
                        "Karena kata 'mendorong' tidak boleh didahului oleh kata 'bertujuan'.",
                        "Karena kata 'bertujuan' hanya boleh digunakan untuk kalimat pasif."
                    ],
                    ans: 0,
                    exp: "Dalam kaidah kehematan kalimat baku, verba berawalan 'ber-' seperti 'bertujuan' dapat langsung diikuti verba ('bertujuan mendorong daya beli...') karena penambahan 'untuk' setelah 'bertujuan' dianggap lewah."
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
                },
                {
                    q: "Dalam kalimat 'Pemerintah membangunkan warga korban gempa rumah tahan guncangan', imbuhan 'meN-...-kan' pada verba 'membangunkan' menyatakan makna semantis...",
                    opts: [
                        "Resiprokal (saling melakukan tindakan)",
                        "Benefaktif (melakukan tindakan untuk kepentingan orang lain)",
                        "Refleksif (melakukan tindakan terhadap diri sendiri)",
                        "Repetitif (melakukan tindakan secara berulang-ulang)"
                    ],
                    ans: 1,
                    exp: "'Membangunkan warga ... rumah' bermakna membangun rumah untuk kepentingan warga korban gempa. Makna 'melakukan perbuatan untuk orang lain' disebut benefaktif."
                },
                {
                    q: "Kalimat manakah yang memiliki makna SAMA (parafrasa yang tepat) dengan kalimat: 'Sejak diberlakukannya larangan kantong plastik sekali pakai, volume sampah anorganik di pasar tradisional menurun hingga tiga puluh persen'?",
                    opts: [
                        "Penurunan volume sampah anorganik sebesar tiga puluh persen di pasar tradisional mendorong diberlakukannya larangan kantong plastik sekali pakai.",
                        "Pemberlakuan larangan kantong plastik sekali pakai berhasil menekan volume sampah anorganik di pasar tradisional sampai tiga puluh persen.",
                        "Volume sampah anorganik di pasar tradisional menurun tiga puluh persen sebelum larangan kantong plastik sekali pakai diberlakukan.",
                        "Meskipun kantong plastik sekali pakai dilarang, volume sampah anorganik di pasar tradisional hanya berkurang tiga puluh persen."
                    ],
                    ans: 1,
                    exp: "Kalimat asal menunjukkan hubungan waktu dan sebab-akibat: larangan plastik mendahului dan menyebabkan turunnya sampah anorganik hingga 30%. Opsi B menyatakan makna yang ekuivalen secara semantis."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Kucing makan tikus mati di dapur.' Agar kalimat tersebut tidak ambigu dan secara tegas bermakna 'tikus yang dimakan oleh kucing adalah tikus yang sudah mati', perbaikan struktur yang tepat adalah...",
                    opts: [
                        "Kucing yang mati itu makan tikus di dapur.",
                        "Kucing memakan bangkai tikus (atau tikus yang sudah mati) di dapur.",
                        "Setelah makan tikus, kucing itu mati di dapur.",
                        "Kucing dan tikus mati setelah makan di dapur."
                    ],
                    ans: 1,
                    exp: "Kalimat 'Kucing makan tikus mati' bertaksa (ambigu): bisa berarti kucing makan tikus lalu kucingnya mati, atau kucing memakan tikus yang sudah mati. Penggunaan 'memakan bangkai tikus / tikus yang sudah mati' menghilangkan ambiguitas tersebut."
                },
                {
                    q: "Manakah di antara kalimat berikut yang verba predikatnya menyatakan makna RESIPROKAL (saling/timbal balik)?",
                    opts: [
                        "Kedua pemimpin negara itu berjabat tangan seusai menandatangani nota kesepahaman.",
                        "Burung elang itu terbang berputar-putar di atas lembah hijau.",
                        "Para siswa sedang berjemur di lapangan olahraga pada pagi hari.",
                        "Adik sudah pandai berpakaian sendiri sebelum berangkat ke sekolah."
                    ],
                    ans: 0,
                    exp: "'Berjabat tangan' mengandung makna resiprokal (keduanya saling menjabat tangan satu sama lain). Opsi C dan D bermakna refleksif (terhadap diri sendiri), sedangkan Opsi B bermakna repetitif/kontinuatif."
                },
                {
                    q: "Perhatikan pasangan kalimat berikut:\n(1) 'Dokter menuliskan pasien resep obat antibiotik.'\n(2) 'Dokter menulisi kertas resep dengan nama obat antibiotik.'\nPerbedaan peran semantis objek pada kedua kalimat tersebut adalah...",
                    opts: [
                        "Objek kalimat (1) berperan sebagai penerima manfaat (benefaktif), sedangkan objek kalimat (2) berperan sebagai tempat/sasaran (lokatif).",
                        "Objek kalimat (1) berperan sebagai alat, sedangkan objek kalimat (2) berperan sebagai pelaku.",
                        "Kedua objek memiliki peran semantis yang sama persis, yaitu sebagai penderita.",
                        "Objek kalimat (1) berperan sebagai tempat, sedangkan objek kalimat (2) berperan sebagai penerima manfaat."
                    ],
                    ans: 0,
                    exp: "Pada 'menuliskan pasien resep', objek 'pasien' adalah penerima manfaat (benefaktif). Pada 'menulisi kertas resep', objek 'kertas resep' adalah lokasi/wadah sasaran tulisan (lokatif)."
                },
                {
                    q: "Kalimat manakah yang memiliki pola peran semantis [Pelaku — Tindakan — Sasaran — Alat]?",
                    opts: [
                        "Nelayan tradisional menangkap ikan cakalang dengan jaring ramah lingkungan.",
                        "Angin kencang menumbangkan pohon beringin tua di alun-alun kota tadi malam.",
                        "Mahasiswa biologi mengamati sel epidermis bawang merah di laboratorium.",
                        "Ibu membelikan adik sepatu olahraga baru di pusat perbelanjaan."
                    ],
                    ans: 0,
                    exp: "'Nelayan tradisional' (Pelaku/Agen) — 'menangkap' (Tindakan) — 'ikan cakalang' (Sasaran/Pasien) — 'dengan jaring ramah lingkungan' (Alat/Instrumen)."
                },
                {
                    q: "Mengapa kalimat 'Sejarah kota tua yang panjang itu menarik minat wisatawan asing' mengandung ketaksaan makna (ambiguitas)?",
                    opts: [
                        "Karena klausa atributif 'yang panjang itu' dapat menerangkan 'Sejarah' (sejarahnya yang panjang) ataupun 'kota tua' (bentuk wilayah kotanya yang memanjang).",
                        "Karena kata 'wisatawan asing' tidak memiliki jumlah yang pasti.",
                        "Karena verba 'menarik' termasuk verba intransitif.",
                        "Karena kalimat tersebut tidak memiliki Subjek dan Predikat."
                    ],
                    ans: 0,
                    exp: "Dalam frasa nominal bertingkat 'Sejarah kota tua yang panjang itu', perluasan 'yang panjang itu' menimbulkan ambiguitas struktural karena dapat merujuk pada 'Sejarah' maupun 'kota tua'."
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
                },
                {
                    q: "Perhatikan dua kalimat tunggal berikut:\n(1) Koperasi petani kopi itu telah memperoleh sertifikasi perdagangan adil.\n(2) Pendapatan bersih para anggotanya masih belum stabil akibat fluktuasi harga ekspor.\nKonjungsi yang PALING TEPAT untuk menggabungkan kedua kalimat tersebut menjadi satu kalimat majemuk setara pertentangan adalah...",
                    opts: [
                        "sehingga",
                        "tetapi / namun (dengan struktur yang disesuaikan)",
                        "karena",
                        "supaya"
                    ],
                    ans: 1,
                    exp: "Kalimat (1) bernada positif (telah memperoleh sertifikasi), sedangkan kalimat (2) bernada kontras (pendapatan belum stabil). Penggabungan menjadi kalimat majemuk setara pertentangan menggunakan konjungsi koordinatif 'tetapi'."
                },
                {
                    q: "Manakah di antara kalimat berikut yang merupakan kalimat majemuk bertingkat dengan anak kalimat pengganti OBJEK (klausa nomina)?",
                    opts: [
                        "Ketua tim ekspedisi menyatakan bahwa seluruh anggota pendaki telah tiba di pos utama dengan selamat.",
                        "Para pendaki beristirahat di dalam tenda ketika badai salju menerjang lereng gunung.",
                        "Pemandu wisata itu membawa peta topografi dan kompas magnetik.",
                        "Jalur pendakian selatan ditutup sementara karena terjadi guguran lava pijar."
                    ],
                    ans: 0,
                    exp: "Pada opsi A, klausa 'bahwa seluruh anggota pendaki telah tiba...' menduduki fungsi Objek dari verba transitif 'menyatakan' (Ketua tim ekspedisi [S] menyatakan [P] bahwa... [O])."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Meskipun diguyur hujan lebat sejak pagi, para relawan tetap menanam ribuan bibit bakau di pesisir pantai.' Hubungan makna antara anak kalimat dan induk kalimat tersebut adalah...",
                    opts: [
                        "Sebab-akibat",
                        "Konsesif (pertentangan tak bersyarat)",
                        "Tujuan",
                        "Perbandingan cara"
                    ],
                    ans: 1,
                    exp: "Konjungsi subordinatif 'meskipun' (atau 'walaupun', 'kendatipun', 'biarpun') menandai hubungan konsesif, yaitu keadaan pada anak kalimat tidak membatalkan terlaksananya tindakan pada induk kalimat."
                },
                {
                    q: "Kalimat manakah yang TIDAK baku karena menggabungkan konjungsi subordinatif dan koordinatif secara bertumpuk di antara dua klausa?",
                    opts: [
                        "Karena curah hujan tahun ini sangat rendah, maka cadangan air waduk menyusut tajam.",
                        "Cadangan air waduk menyusut tajam karena curah hujan tahun ini sangat rendah.",
                        "Walaupun pasokan air berkurang, petani tetap menanam palawija yang tahan kering.",
                        "Pemerintah membangun embung desa agar kebutuhan air pertanian tercukupi."
                    ],
                    ans: 0,
                    exp: "Penggunaan pasangan 'Karena ..., maka ...' dalam satu kalimat majemuk bertingkat menyebabkan kalimat kehilangan induk kalimat (kedua klausa berubah menjadi keterangan). Cukup gunakan 'Karena A, B' atau 'A sehingga B'."
                },
                {
                    q: "Dalam kalimat 'Peneliti yang menemukan vaksin malaria generasi baru itu menerima penghargaan internasional di Stockholm', klausa 'yang menemukan vaksin malaria generasi baru itu' merupakan perluasan dari unsur...",
                    opts: [
                        "Subjek",
                        "Predikat",
                        "Objek",
                        "Pelengkap"
                    ],
                    ans: 0,
                    exp: "Inti kalimatnya adalah 'Peneliti (S) menerima (P) penghargaan internasional (O) di Stockholm (K)'. Klausa 'yang menemukan...' menerangkan nomina 'Peneliti' yang berkedudukan sebagai Subjek."
                },
                {
                    q: "Manakah kalimat majemuk di bawah ini yang menggunakan konjungsi koordinatif 'melainkan' secara TEPAT?",
                    opts: [
                        "Harga komoditas ekspor itu sudah mulai membaik, melainkan biaya logistik pelayaran masih mahal.",
                        "Bencana banjir di kawasan hilir itu bukan semata-mata dipicu oleh curah hujan ekstrem, melainkan juga oleh rusaknya daerah tangkapan air di hulu.",
                        "Para siswa kelas dua belas sangat antusias mengikuti simulasi ujian, melainkan beberapa komputer mengalami gangguan jaringan.",
                        "Ia ingin melanjutkan studi ke jenjang magister, melainkan belum mendapatkan izin dari tempat kerjanya."
                    ],
                    ans: 1,
                    exp: "Konjungsi 'melainkan' wajib berpasangan dengan kata ingkar 'bukan' pada klausa pertama ('bukan ..., melainkan ...'). Adapun kata ingkar 'tidak' atau pertentangan positif menggunakan konjungsi 'tetapi'."
                },
                {
                    q: "Perhatikan kalimat majemuk campuran berikut: 'Ketika bel tanda ujian berbunyi, pengawas membagikan lembar soal dan seluruh peserta langsung mengerjakan ujian dengan tenang.' Berapakah jumlah klausa dalam kalimat tersebut?",
                    opts: [
                        "Satu klausa",
                        "Dua klausa",
                        "Tiga klausa (satu klausa bawahan/anak kalimat dan dua klausa atasan/induk kalimat)",
                        "Empat klausa"
                    ],
                    ans: 2,
                    exp: "Kalimat majemuk campuran tersebut terdiri atas 3 klausa: (1) Ketika bel tanda ujian berbunyi [anak kalimat waktu], (2) pengawas membagikan lembar soal [induk kalimat 1], dan (3) seluruh peserta langsung mengerjakan ujian dengan tenang [induk kalimat 2]."
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
                },
                {
                    q: "Ubahlah kalimat aktif berikut menjadi kalimat pasif yang baku: 'Anda harus melampirkan salinan ijazah yang telah dilegalisasi saat mendaftar.'",
                    opts: [
                        "Salinan ijazah yang telah dilegalisasi harus dilampirkan oleh Anda saat mendaftar.",
                        "Salinan ijazah yang telah dilegalisasi Anda harus lampirkan saat mendaftar.",
                        "Salinan ijazah yang telah dilegalisasi harus Anda lampirkan saat mendaftar.",
                        "Saat mendaftar, Anda harus dilampirkan salinan ijazah yang telah dilegalisasi."
                    ],
                    ans: 2,
                    exp: "Subjek 'Anda' adalah pronomina persona kedua, sehingga mengikuti pola pasif Tipe 2: Objek maju menjadi Subjek + kata bantu modalitas ('harus') + pronomina pelaku ('Anda') + verba tanpa awalan meN- ('lampirkan')."
                },
                {
                    q: "Manakah kalimat di bawah ini yang berpredikat verba aktif berawalan 'meN-', tetapi TIDAK DAPAT dipasifkan karena verbanya bersifat intransitif?",
                    opts: [
                        "Bank sentral menaikkan suku bunga acuan sebesar dua puluh lima basis poin.",
                        "Air danau kawah itu mendidih akibat peningkatan aktivitas magma di bawah permukaan.",
                        "Tim konservasi melepasliarkan sepuluh ekor orang utan ke hutan Kalimantan.",
                        "Petugas bea cukai memeriksa dokumen manifes kargo kapal asing tersebut."
                    ],
                    ans: 1,
                    exp: "Meskipun berawalan 'meN-', verba 'mendidih' (sama seperti 'menangis', 'menguap', 'mendarat') adalah verba intransitif yang tidak memiliki Objek, sehingga tidak dapat diubah menjadi bentuk pasif 'dididih'."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Saya sudah mengirimkan berkas pengajuan paten itu ke kantor kementerian.' Bentuk pasif yang baku dari kalimat tersebut adalah...",
                    opts: [
                        "Berkas pengajuan paten itu sudah dikirimkan oleh saya ke kantor kementerian.",
                        "Berkas pengajuan paten itu saya sudah kirimkan ke kantor kementerian.",
                        "Berkas pengajuan paten itu sudah saya kirimkan ke kantor kementerian.",
                        "Ke kantor kementerian berkas pengajuan paten itu sudah dikirim oleh saya."
                    ],
                    ans: 2,
                    exp: "Kata ganti orang pertama ('saya') pada kalimat pasif wajib mengikuti rumus: [Kata bantu 'sudah' + 'saya' + 'kirimkan']."
                },
                {
                    q: "Kalimat manakah yang memiliki imbuhan pasif 'ter-' dengan makna 'tidak sengaja' (ketidaksengajaan)?",
                    opts: [
                        "Batu meteorit seberat lima ton itu tidak terangkat oleh alat berat biasa.",
                        "Dokumen rahasia perusahaan itu terbawa oleh staf magang ke dalam tas pribadinya.",
                        "Puncak Gunung Semeru terlihat sangat jelas dari desa wisata tersebut pagi ini.",
                        "Susunan pengurus koperasi yang baru telah terbentuk melalui rapat anggota tahunan."
                    ],
                    ans: 1,
                    exp: "Verba pasif 'terbawa' pada opsi B menyatakan ketidaksengajaan. Adapun 'terangkat' (opsi A) dan 'terlihat' (opsi C) menyatakan kemampuan ('dapat di-'), sedangkan 'terbentuk' (opsi D) menyatakan keadaan yang telah selesai."
                },
                {
                    q: "Perhatikan kalimat aktif dwitransitif berikut: 'Pemerintah daerah memberikan petani lokal bibit padi unggul tahan wereng.' Mengapa dalam transformasi pasifnya hanya 'petani lokal' yang tepat dijadikan Subjek ('Petani lokal diberi bibit padi unggul oleh pemerintah daerah')?",
                    opts: [
                        "Karena dalam kalimat berpredikat 'memberikan [Seseorang] [Sesuatu]', frasa yang berada tepat di belakang verba ('petani lokal') adalah Objek, sedangkan 'bibit padi unggul' adalah Pelengkap.",
                        "Karena kata 'bibit padi unggul' merupakan Keterangan tempat.",
                        "Karena kata 'pemerintah daerah' adalah kata ganti orang pertama.",
                        "Karena verba 'memberikan' termasuk verba intransitif."
                    ],
                    ans: 0,
                    exp: "Dalam tata bahasa baku, nomina yang langsung mengikuti verba transitif 'memberikan' ('petani lokal') berkedudukan sebagai Objek, sedangkan nomina kedua ('bibit padi unggul') adalah Pelengkap. Hanya Objek yang dapat menjadi Subjek kalimat pasif."
                },
                {
                    q: "Jika kalimat pasif 'Rencana tata ruang wilayah itu belum kami sepakati dalam sidang paripurna' diubah menjadi kalimat aktif, bentuk yang tepat adalah...",
                    opts: [
                        "Sidang paripurna belum menyepakati rencana tata ruang wilayah kami itu.",
                        "Kami belum menyepakati rencana tata ruang wilayah itu dalam sidang paripurna.",
                        "Kami belum disepakati oleh rencana tata ruang wilayah itu dalam sidang paripurna.",
                        "Dalam sidang paripurna belum disepakati rencana tata ruang wilayah itu oleh kami."
                    ],
                    ans: 1,
                    exp: "Pelaku pasif 'kami' dikembalikan menjadi Subjek aktif, predikat 'belum kami sepakati' menjadi aktif 'belum menyepakati', dan 'rencana tata ruang wilayah itu' menjadi Objek."
                },
                {
                    q: "Manakah di antara kalimat pasif berikut yang paling baku dan efektif?",
                    opts: [
                        "Semua saran dari peserta lokakarya akan kami tampung untuk perbaikan draf regulasi.",
                        "Semua saran dari peserta lokakarya kami akan tampung untuk perbaikan draf regulasi.",
                        "Semua saran dari peserta lokakarya akan ditampung oleh kami untuk perbaikan draf regulasi.",
                        "Akan ditampung oleh kami semua saran dari peserta lokakarya untuk perbaikan draf regulasi."
                    ],
                    ans: 0,
                    exp: "Bentuk pasif persona pertama yang baku meletakkan kata bantu 'akan' tepat di depan pronomina 'kami' diikuti verba dasar 'tampung' ('akan kami tampung')."
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
                },
                {
                    q: "Perhatikan kalimat berikut: 'Pemanfaatan kecerdasan buatan yang terintegrasi dengan sensor satelit cuaca memungkinkan para ahli meteorologi memprediksi pergerakan siklon tropis secara lebih akurat.' Inti dari kalimat tersebut adalah...",
                    opts: [
                        "Kecerdasan buatan terintegrasi dengan sensor satelit cuaca.",
                        "Pemanfaatan kecerdasan buatan memungkinkan ahli meteorologi memprediksi pergerakan siklon.",
                        "Ahli meteorologi memprediksi pergerakan siklon tropis secara akurat.",
                        "Sensor satelit cuaca memprediksi pergerakan siklon tropis."
                    ],
                    ans: 1,
                    exp: "Subjek inti adalah 'Pemanfaatan kecerdasan buatan' (perluasan 'yang terintegrasi...' dipangkas), Predikat inti 'memungkinkan', Objek inti 'ahli meteorologi', dan Pelengkap klausa 'memprediksi pergerakan siklon'."
                },
                {
                    q: "Manakah kalimat di bawah ini yang memiliki pola kalimat dasar S - P - Pel (Subjek - Predikat - Pelengkap)?",
                    opts: [
                        "Indonesia merupakan negara kepulauan terbesar di dunia.",
                        "Petani memanen padi organik di sawah terasering.",
                        "Pemerintah meresmikan bendungan baru di Provinsi Nusa Tenggara Timur.",
                        "Kapal kargo itu bersandar di Pelabuhan Tanjung Priok."
                    ],
                    ans: 0,
                    exp: "Verba kopula 'merupakan' (atau 'menjadi') diikuti oleh Pelengkap, bukan Objek (karena tidak bisa dipasifkan). Jadi 'Indonesia' (S) — 'merupakan' (P) — 'negara kepulauan terbesar' (Pel) — 'di dunia' (K)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Selama dua dekade terakhir, deforestasi hutan hujan tropis di wilayah lembah Amazon yang dipicu oleh pembukaan lahan peternakan telah mengurangi kapasitas penyerapan karbon bumi secara signifikan.' Inti kalimat tersebut adalah...",
                    opts: [
                        "Deforestasi hutan dipicu pembukaan lahan peternakan.",
                        "Pembukaan lahan peternakan mengurangi hutan hujan tropis.",
                        "Deforestasi mengurangi kapasitas penyerapan karbon.",
                        "Hutan hujan tropis menyerap karbon bumi."
                    ],
                    ans: 2,
                    exp: "Buang Keterangan waktu ('Selama dua dekade terakhir,'), perluasan Subjek ('hutan hujan tropis di wilayah... yang dipicu oleh...'), dan Keterangan cara ('secara signifikan'). Tersisa S ('Deforestasi') + P ('mengurangi') + O ('kapasitas penyerapan karbon')."
                },
                {
                    q: "Kalimat manakah yang memiliki inti kalimat yang SAMA dengan kalimat: 'Terumbu karang melindungi garis pantai'?",
                    opts: [
                        "Perlindungan garis pantai sangat bergantung pada kelestarian ekosistem terumbu karang.",
                        "Di wilayah perairan dangkal, ekosistem terumbu karang yang sehat efektif melindungi garis pantai dari abrasi gelombang besar.",
                        "Garis pantai yang indah itu dikelilingi oleh hamparan terumbu karang yang memesona.",
                        "Masyarakat pesisir bekerja sama melindungi terumbu karang di sepanjang garis pantai."
                    ],
                    ans: 1,
                    exp: "Pada opsi B, jika Keterangan tempat ('Di wilayah perairan dangkal,'), perluasan S ('yang sehat'), adverbia ('efektif'), dan Keterangan ('dari abrasi gelombang besar') dipangkas, diperoleh inti: '(Ekosistem) terumbu karang melindungi garis pantai'."
                },
                {
                    q: "Tentukan inti kalimat dari: 'Menurut laporan organisasi kesehatan dunia, paparan polusi udara partikel halus yang melebihi ambang batas aman dapat memicu berbagai penyakit saluran pernapasan akut pada anak-anak.'",
                    opts: [
                        "Organisasi kesehatan dunia melaporkan paparan polusi udara.",
                        "Paparan polusi udara memicu penyakit saluran pernapasan.",
                        "Polusi udara melebihi ambang batas aman pada anak-anak.",
                        "Penyakit saluran pernapasan akut dipicu oleh organisasi kesehatan."
                    ],
                    ans: 1,
                    exp: "Keterangan sumber ('Menurut laporan...'), perluasan S ('yang melebihi ambang batas aman'), dan Keterangan ('pada anak-anak') dipangkas. Intinya: 'Paparan polusi udara (S) memicu (P) penyakit saluran pernapasan (O)'."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Karena tingginya permintaan baterai kendaraan listrik, sejumlah perusahaan tambang multinasional membangun fasilitas pemurnian kobalt di kawasan industri terpadu.' Apakah fungsi dari bagian 'Karena tingginya permintaan baterai kendaraan listrik'?",
                    opts: [
                        "Subjek inti kalimat",
                        "Predikat kalimat",
                        "Keterangan penyebab (bukan unsur inti kalimat)",
                        "Objek kalimat"
                    ],
                    ans: 2,
                    exp: "Bagian yang diawali preposisi/konjungsi 'Karena...' berfungsi sebagai Keterangan sebab (unsur tambahan), sedangkan inti kalimatnya berada pada induk kalimat: 'Perusahaan tambang membangun fasilitas pemurnian kobalt'."
                },
                {
                    q: "Manakah di antara kalimat berikut yang berpola dasar S - P - O - K?",
                    opts: [
                        "Para siswa berolahraga dengan gembira di lapangan sekolah setiap Jumat pagi.",
                        "Arkeolog itu meneliti fosil manusia purba di Museum Sangiran.",
                        "Udara pegunungan terasa sangat dingin pada dini hari.",
                        "Ayah menjadi ketua rukun warga sejak bulan Januari."
                    ],
                    ans: 1,
                    exp: "Pada opsi B: 'Arkeolog itu' (S) — 'meneliti' (P transitif) — 'fosil manusia purba' (O) — 'di Museum Sangiran' (K tempat). Opsi A berpola S-P-K-K-K; Opsi C dan D berpola S-P-Pel-K."
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
                },
                {
                    q: "Perhatikan kalimat berikut: 'Melalui pelatihan kewirausahaan digital ini diharapkan dapat meningkatkan omzet pelaku usaha mikro.' Mengapa kalimat tersebut tidak logis dan tidak baku?",
                    opts: [
                        "Karena kalimat tersebut tidak memiliki Subjek (bagian awal diawali preposisi 'Melalui', lalu verba pasif 'diharapkan' diikuti verba aktif 'dapat meningkatkan').",
                        "Karena kata 'omzet' seharusnya ditulis 'omset'.",
                        "Karena kata 'pelaku usaha mikro' tidak boleh diletakkan di akhir kalimat.",
                        "Karena pelatihan kewirausahaan tidak ada hubungannya dengan omzet."
                    ],
                    ans: 0,
                    exp: "Kalimat tersebut kehilangan Subjek akibat penggunaan kata depan 'Melalui' di awal kalimat. Agar logis dan bersubjek, hapus kata 'Melalui' dan sesuaikan menjadi: 'Pelatihan kewirausahaan digital ini diharapkan dapat meningkatkan omzet pelaku usaha mikro'."
                },
                {
                    q: "Manakah di antara kalimat berikut yang TIDAK LOGIS karena kesalahan pemilihan objek pada verba 'mengentaskan'?",
                    opts: [
                        "Pemerintah daerah berkomitmen mengentaskan masyarakat pesisir dari jerat kemiskinan ekstrem.",
                        "Program beasiswa vokasi itu berhasil mengentaskan ribuan pemuda desa dari pengangguran.",
                        "Kementerian Sosial berupaya keras mengentaskan kemiskinan di daerah tertinggal.",
                        "Koperasi nelayan itu membantu mengentaskan keluarga buruh tangkap dari lilitan utang rentenir."
                    ],
                    ans: 2,
                    exp: "'Mengentaskan' bermakna mengangkat ke tempat yang lebih baik/kering. Jika dikatakan 'mengentaskan kemiskinan', artinya kemiskinan itu yang diselamatkan/diangkat. Yang logis adalah 'mengentaskan masyarakat dari kemiskinan' atau 'menanggulangi/mengatasi kemiskinan'."
                },
                {
                    q: "Perhatikan kalimat pengumuman berikut: 'Barang siapa yang kehilangan dompet kulit berwarna cokelat harap diambil di meja sekretariat.' Ketidaklogisan kalimat tersebut terletak pada...",
                    opts: [
                        "Subjek kalimatnya adalah 'Barang siapa yang kehilangan dompet' (orangnya), sehingga jika dipasangkan dengan predikat 'harap diambil', artinya orang yang kehilangan dompet itulah yang diambil di meja sekretariat.",
                        "Penggunaan kata 'berwarna cokelat' yang seharusnya cukup ditulis 'cokelat'.",
                        "Meja sekretariat tidak boleh digunakan untuk menyimpan barang temuan.",
                        "Kata 'dompet kulit' tidak baku dalam bahasa Indonesia."
                    ],
                    ans: 0,
                    exp: "Subjek 'Barang siapa yang kehilangan dompet' merujuk pada orang. Jika predikatnya pasif 'harap diambil', maka orangnya yang diambil. Perbaikan logis: 'Barang siapa yang kehilangan dompet ... harap mengambilnya di meja sekretariat'."
                },
                {
                    q: "Kalimat manakah di bawah ini yang LOGIS dalam hal kesejajaran komparasi (perbandingan)?",
                    opts: [
                        "Kepadatan penduduk di Pulau Jawa jauh lebih tinggi daripada pulau-pulau lain di Indonesia.",
                        "Kepadatan penduduk di Pulau Jawa jauh lebih tinggi daripada kepadatan penduduk di pulau-pulau lain di Indonesia.",
                        "Harga baterai mobil listrik sekarang lebih murah dibandingkan lima tahun yang lalu.",
                        "Kualitas udara di kawasan pegunungan lebih bersih daripada kota metropolitan."
                    ],
                    ans: 1,
                    exp: "Perbandingan yang logis harus membandingkan dua hal yang setara kategorinya: 'Kepadatan penduduk di Pulau Jawa' harus dibandingkan dengan 'kepadatan penduduk di pulau-pulau lain' (bukan dibandingkan dengan 'pulau-pulau lain')."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Saat mengendarai sepeda motor di jalan raya, helm standar nasional wajib dikenakan demi keselamatan.' Mengapa hubungan antara anak kalimat dan induk kalimat tersebut tidak logis (dangling modifier)?",
                    opts: [
                        "Karena Subjek induk kalimatnya adalah 'helm standar nasional', sehingga secara gramatikal seolah-olah 'helm' itulah yang mengendarai sepeda motor di jalan raya.",
                        "Karena kata 'wajib' tidak boleh mendahului kata 'dikenakan'.",
                        "Karena sepeda motor bukan kendaraan beroda empat.",
                        "Karena kata 'demi keselamatan' seharusnya diletakkan di awal kalimat."
                    ],
                    ans: 0,
                    exp: "Anak kalimat yang melesapkan Subjek ('Saat [S] mengendarai sepeda motor...') wajib memiliki Subjek yang sama dengan induk kalimatnya. Jika induk kalimatnya bersubjek 'helm', maka secara sintaksis helm yang mengendarai motor. Perbaikan: 'Saat mengendarai sepeda motor di jalan raya, pengendara wajib mengenakan helm standar nasional'."
                },
                {
                    q: "Manakah kalimat di bawah ini yang TIDAK LOGIS dalam penggunaan kata 'mengajar' atau 'mengajarkan'?",
                    opts: [
                        "Profesor Hendra mengajarkan fisika kuantum kepada mahasiswa semester lima.",
                        "Ibu Pertiwi sudah mengajar siswa sekolah dasar di pulau terluar selama sepuluh tahun.",
                        "Dosen tamu itu sedang mengajarkan mahasiswa teknik sipil cara menghitung beban jembatan.",
                        "Pelatih kepala itu mengajarkan strategi pertahanan berlapis kepada para pemain."
                    ],
                    ans: 2,
                    exp: "Verba 'mengajar' berobjek orang/peserta didik ('mengajar mahasiswa'), sedangkan 'mengajarkan' berobjek materi/ilmu ('mengajarkan cara menghitung beban kepada mahasiswa'). Kalimat 'mengajarkan mahasiswa' pada opsi C tidak tepat secara semantis."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Di dalam bab kedua skripsi ini akan membahas landasan teori dan tinjauan pustaka.' Perbaikan yang paling tepat agar kalimat tersebut memiliki Subjek yang logis adalah...",
                    opts: [
                        "Bab kedua skripsi ini membahas landasan teori dan tinjauan pustaka.",
                        "Di dalam bab kedua skripsi ini peneliti akan dibahas landasan teori.",
                        "Membahas landasan teori dan tinjauan pustaka di dalam bab kedua skripsi ini.",
                        "Pada bab kedua skripsi ini akan membahas tentang landasan teori."
                    ],
                    ans: 0,
                    exp: "Menghapus preposisi 'Di dalam' menjadikan frasa nominal 'Bab kedua skripsi ini' berfungsi sebagai Subjek yang logis bagi predikat 'membahas' (atau pertahankan 'Di dalam bab kedua skripsi ini' tetapi ubah predikatnya menjadi pasif 'akan dibahas landasan teori...')."
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
                },
                {
                    q: "Perhatikan teks singkat berikut:\n'(1) Ekosistem padang lamun di perairan dangkal nusantara memiliki kemampuan menyerap karbon biru hingga lima kali lebih cepat dibandingkan hutan daratan. (2) Selain menjadi penyerap karbon, hamparan lamun berfungsi sebagai tempat pemijahan berbagai biota laut bernilai ekonomi tinggi. (3) Namun, sekitar tiga puluh persen luasan padang lamun di Indonesia telah mengalami degradasi akibat reklamasi pantai dan pencemaran limbah domestik.'\nTopik utama dari kutipan tersebut adalah...",
                    opts: [
                        "Cara melakukan reklamasi pantai yang ramah lingkungan di Indonesia",
                        "Peran ekologis ekosistem padang lamun di Indonesia dan ancaman kerusakannya",
                        "Perbandingan kecepatan fotosintesis hutan hujan tropis dengan padang lamun",
                        "Daftar biota laut bernilai ekonomi tinggi yang hidup di perairan dangkal"
                    ],
                    ans: 1,
                    exp: "Kalimat (1) dan (2) membahas fungsi/peran ekologis padang lamun (penyerap karbon biru dan tempat pemijahan biota), sedangkan kalimat (3) membahas ancaman degradasinya. Jadi topik utamanya adalah peran ekologis padang lamun dan ancaman kerusakannya."
                },
                {
                    q: "Paragraf 1 sebuah artikel ilmiah mengemukakan klaim bahwa pembelajaran berbasis proyek (project-based learning) efektif meningkatkan kemampuan berpikir kritis siswa SMA. Paragraf 2 menyajikan data hasil eksperimen di dua belas sekolah yang menunjukkan kenaikan skor rata-rata uji nalar kritis sebesar 28 persen setelah penerapan metode tersebut. Fungsi Paragraf 2 terhadap Paragraf 1 adalah...",
                    opts: [
                        "Membantah tesis yang diajukan pada Paragraf 1",
                        "Memberikan bukti empiris yang mendukung klaim pada Paragraf 1",
                        "Mengalihkan topik bahasan ke masalah kurikulum sekolah dasar",
                        "Menjelaskan latar belakang sejarah pendidikan di Indonesia"
                    ],
                    ans: 1,
                    exp: "Paragraf 2 menyajikan data kuantitatif hasil eksperimen yang berfungsi memperkuat atau membuktikan klaim umum pada Paragraf 1."
                },
                {
                    q: "Perhatikan kalimat pertama sebuah bacaan: 'Tantangan terbesar dalam adopsi kendaraan listrik di Indonesia saat ini bukan lagi terletak pada keraguan konsumen, melainkan pada belum meratanya sebaran stasiun pengisian daya cepat di luar Pulau Jawa.' Apabila penulis ingin menambahkan satu paragraf SEBELUM paragraf tersebut (predecessor paragraph), topik yang paling logis dibahas pada paragraf pendahulu itu adalah...",
                    opts: [
                        "Perkembangan minat dan peningkatan kepercayaan konsumen Indonesia terhadap kendaraan listrik.",
                        "Sejarah penemuan mesin uap pada masa Revolusi Industri di Inggris.",
                        "Rincian teknis cara merakit baterai litium di pabrik pengolahan nikel.",
                        "Kebijakan tarif tol lintas Sumatera pada musim mudik lebaran."
                    ],
                    ans: 0,
                    exp: "Frasa transisi 'bukan lagi terletak pada keraguan konsumen, melainkan pada...' mengindikasikan bahwa paragraf sebelumnya telah membahas teratasinya keraguan konsumen (meningkatnya minat/kepercayaan konsumen terhadap kendaraan listrik)."
                },
                {
                    q: "Manakah di antara pilihan berikut yang merupakan penulisan judul karangan yang PALING TEPAT menurut kaidah EYD V?",
                    opts: [
                        "Optimalisasi Pemanfaatan Limbah Kelapa Sawit Sebagai Bahan Baku Bioenergi Di Kalimantan.",
                        "Optimalisasi Pemanfaatan Limbah Kelapa Sawit sebagai Bahan Baku Bioenergi di Kalimantan",
                        "Optimalisasi pemanfaatan limbah kelapa sawit sebagai bahan baku bioenergi di Kalimantan",
                        "OPTIMALISASI PEMANFAATAN LIMBAH KELAPA SAWIT SEBAGAI BAHAN BAKU BIOENERGI DI KALIMANTAN."
                    ],
                    ans: 1,
                    exp: "Dalam penulisan judul (Opsi B), setiap kata diawali huruf kapital KECUALI kata tugas seperti preposisi/konjungsi ('sebagai', 'di') yang tidak berada di awal judul, serta judul tidak diakhiri tanda titik."
                },
                {
                    q: "Sebuah wacana terdiri atas tiga paragraf:\n• Paragraf 1: Definisi dan mekanisme terbentuknya pulau bahang perkotaan (urban heat island).\n• Paragraf 2: Dampak pulau bahang perkotaan terhadap lonjakan konsumsi listrik pendingin ruangan dan kesehatan warga.\n• Paragraf 3: Strategi mitigasi melalui perluasan ruang terbuka hijau dan penggunaan material atap reflektif.\nSimpulan menyeluruh yang paling tepat untuk merangkum ketiga paragraf tersebut adalah...",
                    opts: [
                        "Pulau bahang perkotaan merupakan fenomena peningkatan suhu kota yang berdampak buruk bagi energi dan kesehatan, tetapi dapat dimitigasi dengan perluasan ruang terbuka hijau serta atap reflektif.",
                        "Konsumsi listrik pendingin ruangan di kota besar tidak dapat dikurangi meskipun ruang terbuka hijau telah diperluas.",
                        "Material atap reflektif adalah satu-satunya cara untuk menghentikan pemanasan global di seluruh permukaan bumi.",
                        "Warga perkotaan sebaiknya pindah ke pedesaan untuk menghindari fenomena pulau bahang perkotaan."
                    ],
                    ans: 0,
                    exp: "Simpulan wacana global yang baik harus merangkum benang merah gagasan pokok dari Paragraf 1 (fenomena), Paragraf 2 (dampak), dan Paragraf 3 (solusi/mitigasi) secara proporsional."
                },
                {
                    q: "Perhatikan paragraf berikut:\n'(1) Arsitektur rumah adat tradisional Nusantara dirancang selaras dengan kondisi geologi Indonesia yang rawan gempa. (2) Struktur sambungan kayu sistem pasak pada rumah gadang dan omo hada mampu meredam energi getaran seismik secara lentur. (3) Selain itu, fondasi umpak batu memungkinkan tiang bangunan bergeser secara elastis tanpa mengalami patah struktur. (4) Oleh sebab itu, kearifan konstruksi vernakular ini patut diadopsi dalam rekayasa bangunan tahan gempa modern.'\nGagasan pokok paragraf tersebut terletak pada...",
                    opts: [
                        "Kalimat (1) dan dipertegas kembali pada kalimat (4) (paragraf campuran)",
                        "Kalimat (2) saja",
                        "Kalimat (3) saja",
                        "Seluruh kalimat tanpa ada kalimat penjelas"
                    ],
                    ans: 0,
                    exp: "Kalimat (1) menyampaikan pernyataan umum (arsitektur tradisional Nusantara selaras dengan kondisi rawan gempa), kalimat (2) dan (3) memberikan rincian bukti teknis, dan kalimat (4) menegaskan simpulan ('Oleh sebab itu...'). Ini adalah paragraf campuran (deduktif-induktif)."
                },
                {
                    q: "Kalimat penutup sebuah artikel berbunyi: 'Untuk mengatasi kelangkaan regenerasi petani muda tersebut, pemerintah mulai memperkenalkan program pertanian presisi berbasis internet untuk segala (IoT) dan pesawat nirawak.' Apabila teks dilanjutkan ke paragraf berikutnya, manakah kalimat pertama yang paling koheren untuk mengawali paragraf baru tersebut?",
                    opts: [
                        "Penerapan teknologi IoT dan pesawat nirawak itu memungkinkan pemantauan kelembapan tanah serta pemupukan dilakukan secara otomatis dari gawai.",
                        "Pada abad ke-19, sistem tanam paksa telah menyengsarakan rakyat di berbagai daerah jajahan.",
                        "Harga beras di pasar induk mengalami penurunan tipis setelah panen raya bulan lalu.",
                        "Banyak pemuda desa memilih bekerja di sektor jasa pengiriman barang di ibu kota."
                    ],
                    ans: 0,
                    exp: "Kalimat pertama paragraf baru harus mengait (kohesif dan koheren) dengan fokus yang baru diperkenalkan di ujung paragraf sebelumnya, yaitu 'pertanian presisi berbasis IoT dan pesawat nirawak'."
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
                },
                {
                    q: "Perhatikan kalimat berikut: 'Sektor usaha mikro, kecil, dan menengah (UMKM) terbukti menjadi *tulang punggung* perekonomian nasional saat krisis global melanda.' Makna ungkapan 'tulang punggung' dalam kalimat tersebut adalah...",
                    opts: [
                        "beban tambahan yang memberatkan",
                        "penopang atau penyangga utama kekuatan",
                        "bagian yang paling rentan mengalami keretakan",
                        "pelengkap yang bersifat sementara"
                    ],
                    ans: 1,
                    exp: "Ungkapan 'tulang punggung' bermakna pokok kekuatan atau penopang utama yang menyangga keberlangsungan sesuatu."
                },
                {
                    q: "Ilustrasi: Seorang pejabat publik berbicara sangat lantang menentang praktik nepotisme di media massa, tetapi diam-diam ia justru mengangkat kerabat dekatnya yang tidak kompeten menduduki jabatan strategis. Peribahasa yang sesuai untuk menyindir perilaku tersebut adalah...",
                    opts: [
                        "Gajah di pelupuk mata tak tampak, semut di seberang lautan tampak.",
                        "Di mana bumi dipijak, di situ langit dijunjung.",
                        "Berakit-rakit ke hulu, berenang-renang ke tepian.",
                        "Sekali merengkuh dayung, dua tiga pulau terlampaui."
                    ],
                    ans: 0,
                    exp: "Peribahasa 'Gajah di pelupuk mata tak tampak, semut di seberang lautan tampak' mengiaskan orang yang sangat jeli melihat kesalahan orang lain, tetapi buta terhadap kesalahan besar pada dirinya sendiri."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Keberhasilan ilmuwan muda Indonesia mematenkan baterai berbahan dasar natrium itu menjadi *buah bibir* di kalangan akademisi internasional.' Ungkapan 'buah bibir' bermakna...",
                    opts: [
                        "oleh-oleh perjalanan",
                        "bahan pembicaraan banyak orang",
                        "karya tulis ilmiah",
                        "senyuman yang ramah"
                    ],
                    ans: 1,
                    exp: "'Buah bibir' berarti bahan pembicaraan. Adapun oleh-oleh disebut 'buah tangan', dan gagasan/karya pikir disebut 'buah pikiran'."
                },
                {
                    q: "Dalam kalimat 'Karena terus-menerus merugi akibat kalah bersaing dengan produk impor murah, pabrik garmen tua itu akhirnya *gulung tikar*', ungkapan 'gulung tikar' berpadanan makna dengan...",
                    opts: [
                        "berpindah lokasi pabrik",
                        "bangkrut atau menutup usaha",
                        "mengganti jajaran direksi",
                        "beristirahat sejenak"
                    ],
                    ans: 1,
                    exp: "Idiom 'gulung tikar' bermakna bangkrut atau kehabisan modal sehingga terpaksa menghentikan/menutup kegiatan usaha."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Mediator internasional itu harus ekstra hati-hati dalam menyelesaikan sengketa perbatasan kedua negara agar keputusannya adil, ibarat *menarik rambut dalam tepung, rambut jangan putus, tepung jangan berserak*.' Makna peribahasa dalam kalimat tersebut adalah...",
                    opts: [
                        "Menyelesaikan suatu perkara yang rumit dengan sangat bijaksana dan cermat sehingga tujuan tercapai tanpa menimbulkan kerugian atau kericuhan baru.",
                        "Melakukan pekerjaan yang sia-sia dan tidak mungkin berhasil.",
                        "Mencari keuntungan pribadi di tengah pertikaian dua belah pihak.",
                        "Menunda penyelesaian masalah hingga kedua pihak kelelahan sendiri."
                    ],
                    ans: 0,
                    exp: "Peribahasa 'Menarik rambut dalam tepung...' bermakna menyelesaikan masalah yang pelik dengan penuh kecermatan dan kebijaksanaan agar masalah tuntas tanpa merugikan pihak mana pun."
                },
                {
                    q: "Kalimat manakah yang menggunakan ungkapan bermakna 'tidak memihak / adil'?",
                    opts: [
                        "Hakim ketua itu tetap *dingin kepala* meskipun suasana ruang sidang memanas.",
                        "Dalam membagi warisan keluarga, orang tua tidak boleh *berat sebelah*.",
                        "Pimpinan perusahaan memberikan peringatan keras kepada karyawan yang *panjang tangan*.",
                        "Direktur utama menunjuk staf senior itu sebagai *tangan kanan* dalam negosiasi."
                    ],
                    ans: 1,
                    exp: "Ungkapan 'berat sebelah' bermakna memihak atau tidak adil, sehingga 'tidak boleh berat sebelah' berkaitan langsung dengan sikap adil/tidak memihak. ('Dingin kepala' = tenang; 'panjang tangan' = suka mencuri; 'tangan kanan' = orang kepercayaan)."
                },
                {
                    q: "Perhatikan kalimat berikut: 'Setelah lima kali gagal menembus pasar ekspor, pengelola koperasi kerajinan bambu itu tidak *patah arang* dan terus memperbaiki standar mutu produknya.' Makna ungkapan 'patah arang' adalah...",
                    opts: [
                        "kehabisan bahan bakar",
                        "putus asa atau menyerah kalah",
                        "marah besar",
                        "lupa daratan"
                    ],
                    ans: 1,
                    exp: "Ungkapan 'patah arang' (atau 'patah semangat') bermakna putus asa atau hilang harapan. Jadi 'tidak patah arang' berarti pantang menyerah."
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
                },
                {
                    q: "Perhatikan kutipan berikut: 'Keberhasilan tim riset dalam negeri mengembangkan katalis bioavtur berbahan minyak inti sawit merupakan terobosan gemilang bagi kemandirian energi nasional. Inovasi ini membuka peluang emas bagi Indonesia untuk memimpin pasar bahan bakar penerbangan ramah lingkungan di kawasan Asia Tenggara.' Sikap penulis terhadap inovasi bioavtur tersebut adalah...",
                    opts: [
                        "Skeptis dan meragukan",
                        "Apresiatif dan optimistis",
                        "Netral dan dingin",
                        "Kritis dan menolak"
                    ],
                    ans: 1,
                    exp: "Diksi positif seperti 'terobosan gemilang' dan 'membuka peluang emas' mencerminkan sikap penulis yang menghargai (apresiatif) serta penuh harapan baik (optimistis)."
                },
                {
                    q: "Perhatikan kutipan berikut: 'Klaim bahwa suplemen herbal tersebut mampu menyembuhkan segala jenis penyakit kronis hanya dalam waktu semalam jelas belum teruji secara klinis. Tanpa publikasi uji acak terkontrol yang transparan di jurnal medis bereputasi, janji manis iklan itu patut diragukan kebenarannya.' Sikap penulis terhadap klaim suplemen tersebut adalah...",
                    opts: [
                        "Skeptis dan kritis",
                        "Antusias dan mendukung penuh",
                        "Pasrah dan takut",
                        "Bingung dan ragu terhadap ilmu kedokteran"
                    ],
                    ans: 0,
                    exp: "Penulis menuntut bukti ilmiah ('uji acak terkontrol') dan menyatakan bahwa klaim iklan tersebut 'patut diragukan kebenarannya', yang menunjukkan sikap skeptis (tidak mudah percaya tanpa bukti) dan kritis."
                },
                {
                    q: "Perhatikan kutipan berikut: 'Di satu sisi, otomatisasi pabrik menggunakan lengan robotik mampu meningkatkan presisi produksi dan menekan biaya operasional perusahaan. Namun di sisi lain, peralihan ini berisiko memangkas ribuan lapangan kerja bagi buruh kasar yang belum memiliki keterampilan digital.' Bagaimana cara penulis menyajikan permasalahan dalam kutipan tersebut?",
                    opts: [
                        "Memihak secara sepihak kepada pemilik pabrik",
                        "Menyajikan dua sudut pandang (dampak positif dan negatif) secara berimbang",
                        "Menyerang teknologi robotik secara emosional",
                        "Mengabaikan nasib buruh kasar sepenuhnya"
                    ],
                    ans: 1,
                    exp: "Penggunaan penanda wacana 'Di satu sisi...' dan 'Namun di sisi lain...' menunjukkan bahwa penulis memaparkan keuntungan dan risiko secara objektif serta berimbang (balanced)."
                },
                {
                    q: "Perhatikan kutipan berikut: 'Alih-alih memperbaiki sistem drainase kota yang tersumbat lumpur, pemerintah kota justru menganggarkan miliaran rupiah untuk membangun tugu hiasan di bundaran jalan protokol. Kebijakan yang salah prioritas ini menunjukkan betapa abainya perencana anggaran terhadap penderitaan warga yang kebanjiran setiap musim hujan.' Nada penulis dalam kutipan tersebut adalah...",
                    opts: [
                        "Memuji dan menyanjung pemerintah kota",
                        "Kritis dan menyayangkan (mengecam ketidaktepatan prioritas kebijakan)",
                        "Gembira dan menghibur warga",
                        "Netral tanpa penilaian"
                    ],
                    ans: 1,
                    exp: "Frasa 'Alih-alih...', 'Kebijakan yang salah prioritas ini', dan 'betapa abainya...' memperlihatkan nada kritis tajam yang menyayangkan/mengecam kebijakan anggaran tersebut."
                },
                {
                    q: "Dalam kutipan: 'Penyandang disabilitas berhak memperoleh fasilitas trotoar pemandu, ram kursi roda yang landai, serta transportasi publik yang inklusif. Sudah saatnya tata ruang perkotaan dirancang ramah bagi semua warga tanpa terkecuali, bukan hanya bagi mereka yang bertubuh bugar.' Tujuan dan keberpihakan penulis dalam kutipan tersebut adalah...",
                    opts: [
                        "Meminta penyandang disabilitas untuk tetap tinggal di rumah",
                        "Mengadvokasi hak aksesibilitas ruang publik bagi penyandang disabilitas (persuasif-advokatif)",
                        "Menghapus seluruh trotoar di kawasan perkotaan",
                        "Membatasi penggunaan transportasi publik bagi warga bertubuh bugar"
                    ],
                    ans: 1,
                    exp: "Diksi 'berhak memperoleh', 'Sudah saatnya...', dan 'ramah bagi semua warga' menunjukkan keberpihakan penulis pada penyandang disabilitas dengan tujuan mengajak/mendorong pemenuhan hak aksesibilitas (persuasif)."
                },
                {
                    q: "Perhatikan kutipan berikut: 'Laju kepunahan spesies amfibi endemik di hutan pegunungan terus meningkat seiring menyempitnya tutupan kanopi hutan. Jika koridor ekologis antarkawasan konservasi gagal dipulihkan dalam dekade ini, kita akan kehilangan kekayaan biodiversitas yang tak tergantikan selamanya.' Perasaan yang ingin dibangkitkan penulis kepada pembaca adalah...",
                    opts: [
                        "Rasa bangga dan puas diri",
                        "Kesadaran akan urgensi (kegentingan) konservasi dan kepedulian ekologis",
                        "Sikap masa bodoh terhadap kelestarian amfibi",
                        "Rasa lucu dan terhibur"
                    ],
                    ans: 1,
                    exp: "Kalimat bersyarat peringatan ('Jika ... gagal dipulihkan dalam dekade ini, kita akan kehilangan ... selamanya') bertujuan membangkitkan kesadaran akan urgensi penyelamatan ekosistem."
                },
                {
                    q: "Manakah di antara kalimat berikut yang ditulis dengan sikap PALING OBJEKTIF (bebas dari opini subjektif penulis)?",
                    opts: [
                        "Pemandangan matahari terbit di kawah Gunung Bromo sungguh merupakan keajaiban alam paling memukau di dunia.",
                        "Berdasarkan data Badan Pusat Statistik, tingkat inflasi tahunan pada kuartal ketiga tercatat sebesar 2,54 persen.",
                        "Kebijakan kenaikan tarif parkir itu sangat memberatkan dan tidak masuk akal bagi para pekerja komuter.",
                        "Setiap warga negara yang bijaksana tentu lebih memilih menabung emas daripada membeli barang mewah yang mubazir."
                    ],
                    ans: 1,
                    exp: "Opsi B hanya menyajikan data faktual yang terukur dan bersumber jelas tanpa kata sifat penilaian subjektif (seperti 'paling memukau', 'tidak masuk akal', atau 'mubazir')."
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
                },
                {
                    q: "Dalam suatu bahasa buatan diketahui:\n• 'sora lumi' = satu bintang\n• 'sora-sora lumi' = banyak bintang\n• 'kemi vana' = satu pohon\n• 'vana-vana' = pohon-pohon (tanpa kata bilangan)\nJika dalam bahasa tersebut:\n• 'pelo' = batu\n• 'daru' = sungai\nManakah analisis struktur yang BENAR berdasarkan data di atas? (Perhatikan letak kata 'satu' pada frasa ke-1 dan ke-3!)",
                    opts: [
                        "Pada frasa 1 'sora' = bintang dan 'lumi' = satu; pada frasa 3 'kemi' = satu dan 'vana' = pohon (urutan tidak konsisten).",
                        "Kata 'lumi' dan 'kemi' keduanya berarti 'satu', sedangkan kata benda yang diulang ('sora-sora' = bintang-bintang, 'vana-vana' = pohon-pohon) menyatakan makna jamak.",
                        "Kata 'sora' berarti 'satu' dan 'vana' berarti 'satu'.",
                        "Pengulangan kata mengubah kata benda menjadi kata kerja."
                    ],
                    ans: 1,
                    exp: "Bandingkan 'sora lumi' (satu bintang) dengan 'sora-sora lumi' (banyak bintang): yang berulang adalah 'sora' (bintang), tetapi pada frasa 3 dan 4 yang berulang adalah 'vana' (pohon). Ini menunjukkan kata benda dasar direduplikasi untuk membentuk makna jamak ('sora-sora', 'vana-vana')."
                },
                {
                    q: "Perhatikan kosakata bahasa hipotesis berikut:\n• 'kano mire tola' = guru membaca buku\n• 'kano mire-ka tola?' = apakah guru membaca buku?\n• 'suri veno rima' = murid menulis surat\nBagaimanakah cara mengatakan 'apakah murid membaca surat?' dalam bahasa tersebut?",
                    opts: [
                        "suri mire-ka rima?",
                        "kano veno-ka rima?",
                        "suri-ka mire rima?",
                        "rima mire-ka suri?"
                    ],
                    ans: 0,
                    exp: "Pola kalimat adalah S - P - O: 'kano' = guru, 'suri' = murid (Subjek); 'mire' = membaca, 'veno' = menulis (Predikat); 'tola' = buku, 'rima' = surat (Objek). Kalimat tanya ('apakah...') dibentuk dengan menambahkan akhiran '-ka' pada Predikat ('mire-ka'). Jadi 'apakah murid membaca surat?' = 'suri mire-ka rima?'."
                },
                {
                    q: "Diketahui data bahasa buatan:\n• 'neko shiro nemu' = kucing putih tidur\n• 'inu kuro hashiru' = anjing hitam berlari\n• 'shiro inu nemu' = anjing putih tidur\nPerhatikan baik-baik perbedaan letak kata sifat pada kalimat 1 dan 3! Berdasarkan data bahwa kata kerja selalu di akhir (nemu = tidur, hashiru = berlari) serta 'inu' muncul di kalimat 2 dan 3 ('anjing') dan 'shiro' muncul di kalimat 1 dan 3 ('putih'), maka arti dari 'kuro' dan 'neko' berturut-turut adalah...",
                    opts: [
                        "kucing dan hitam",
                        "hitam dan kucing",
                        "tidur dan berlari",
                        "putih dan anjing"
                    ],
                    ans: 1,
                    exp: "Bandingkan kalimat 1 ('neko shiro nemu' = kucing putih tidur) dan kalimat 3 ('shiro inu nemu' = anjing putih tidur): kata yang sama adalah 'nemu' (tidur) dan 'shiro' (putih). Maka pada kalimat 1, 'neko' = kucing. Bandingkan kalimat 2 ('inu kuro hashiru' = anjing hitam berlari) dan kalimat 3: kata yang sama adalah 'inu' (anjing), dan karena 'hashiru' = berlari, maka 'kuro' = hitam. Jadi 'kuro' dan 'neko' = hitam dan kucing."
                },
                {
                    q: "Dalam sebuah bahasa hipotesis:\n• 'me-lara' = melihat\n• 'pe-lara' = penglihatan\n• 'lara-wan' = penonton (orang yang melihat)\nJika kata dasar 'turi' berarti 'tulis' (menulis = 'me-turi'), maka gabungan kata untuk menyatakan 'penulis mempunyai penglihatan' (dengan diketahui 'vano' = mempunyai dan urutan kalimat S - P - O) adalah...",
                    opts: [
                        "turi-wan vano pe-lara",
                        "pe-turi vano lara-wan",
                        "me-turi vano me-lara",
                        "turi-wan pe-lara vano"
                    ],
                    ans: 0,
                    exp: "Akhiran '-wan' membentuk nomina pelaku ('lara-wan' = orang yang melihat -> 'turi-wan' = orang yang menulis / penulis). Awalan 'pe-' membentuk nomina abstrak hasil/proses ('pe-lara' = penglihatan). Dengan urutan S - P - O: 'penulis (turi-wan) mempunyai (vano) penglihatan (pe-lara)' = 'turi-wan vano pe-lara'."
                },
                {
                    q: "Perhatikan data bahasa buatan yang menggunakan urutan S - O - P (Subjek - Objek - Predikat) berikut:\n• 'ari boka dumu' = adik bola menendang (adik menendang bola)\n• 'ari boka dumu-ta' = adik telah menendang bola\n• 'ari boka dumu-ri' = adik akan menendang bola\nJika 'kaka' = kakak, 'susu' = roti, dan 'maka' = makan, maka terjemahan dari 'kakak akan makan roti' adalah...",
                    opts: [
                        "kaka maka-ri susu",
                        "kaka susu maka-ri",
                        "kaka susu maka-ta",
                        "susu kaka maka-ri"
                    ],
                    ans: 1,
                    exp: "Urutan sintaksisnya adalah S - O - P, dengan penanda kala mendatang ('akan') berupa akhiran '-ri' pada verba di akhir kalimat. Subjek = 'kaka' (kakak), Objek = 'susu' (roti), Predikat = 'maka-ri' (akan makan). Jadi: 'kaka susu maka-ri'."
                },
                {
                    q: "Dalam suatu kode bahasa rahasia:\n• 'piko lano' = air dingin\n• 'lano tiru' = angin dingin\n• 'piko sema' = air mengalir\nJika diketahui 'tiru' = angin dan 'sema' = mengalir, maka cara mengatakan 'angin mengalir' dalam bahasa tersebut adalah...",
                    opts: [
                        "piko tiru",
                        "tiru sema",
                        "lano sema",
                        "sema piko"
                    ],
                    ans: 1,
                    exp: "Dari kalimat 1 dan 2, kata yang sama adalah 'lano' = dingin. Maka 'piko' = air dan 'tiru' = angin. Dari kalimat 3 ('piko sema' = air mengalir), 'sema' = mengalir, dengan urutan [Subjek/Benda + Predikat/Sifat]. Maka 'angin (tiru) mengalir (sema)' adalah 'tiru sema'."
                },
                {
                    q: "Diketahui sistem bahasa hipotesis berikut:\n• 'gama' = burung\n• 'noka' = pohon\n• 'gama di-noka' = burung di atas pohon\n• 'gama ku-noka' = burung menuju pohon\n• 'gama fa-noka' = burung dari pohon\nJika 'vela' berarti 'perahu' dan 'sura' berarti 'pulau', maka arti kalimat 'vela fa-sura' adalah...",
                    opts: [
                        "perahu menuju pulau",
                        "perahu di atas pulau",
                        "perahu dari pulau",
                        "pulau dari perahu"
                    ],
                    ans: 2,
                    exp: "Prefiks preposisional pada lokasi: 'di-' = di atas, 'ku-' = menuju, dan 'fa-' = dari. Maka 'vela (perahu) fa-sura (dari pulau)' berarti 'perahu dari pulau'."
                }
            ]
        }
    ]
};
