// =========================================================================
// DATA MATERI & MINI-GAME SNBT 2026 — SUBTES 5: LITERASI BAHASA INDONESIA (LBI)
// Total: 8 Sub-Materi × 3 Soal Game = 24 Soal Khusus Mini-Game
// Hadiah Maksimal per Sub-Materi: Rp 400 (Skor 3/3)
// =========================================================================

window.SNBT_MATERI_REGISTRY = window.SNBT_MATERI_REGISTRY || {};

window.SNBT_MATERI_REGISTRY["lbi"] = {
    id: "lbi",
    nama: "Literasi Bahasa Indonesia (LBI)",
    icon: "🇮🇩",
    color: "red",
    rewardPerSub: 400,
    submateri: [
        {
            key: "lbi_0_0",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Menentukan Tema dan Ide Pokok Wacana Kompleks",
            ringkasan: `
                <p>Dalam <strong>Literasi Bahasa Indonesia (LBI)</strong>, wacana umumnya panjang dan memuat istilah populer/ilmiah. Untuk menentukan <strong>Tema / Topik Wacana</strong> dan <strong>Ide Pokok (Gagasan Utama)</strong> secara cepat, kamu tidak perlu membaca kata demi kata secara berulang.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Target Analisis</th>
                                <th class="p-2 border border-slate-200 text-left">Teknik Membaca Cepat (Skimming)</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Opsi Jawaban Benar</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Ide Pokok 1 Paragraf</td>
                                <td class="p-2">Baca <strong>Kalimat Pertama</strong> dan <strong>Kalimat Terakhir</strong> paragraf tersebut. Waspadai kata <em>Namun, Akan tetapi,</em> di kalimat ke-2!</td>
                                <td class="p-2">Berupa pernyataan payung (umum) yang merangkum seluruh kalimat penjelas; bebas dari contoh angka detail.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Tema / Topik Wacana Utuh</td>
                                <td class="p-2">Gabungkan <strong>Subjek Inti</strong> dari Kalimat Utama tiap paragraf</td>
                                <td class="p-2">Tidak terlalu sempit (hanya membahas 1 paragraf) dan tidak terlalu luas (di luar bahasan teks).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Teks membahas: (P1) Fenomena pulau bahang perkotaan (urban heat island) di kota metropolitan. (P2) Peran tutupan aspal dan gedung kaca dalam menyerap radiasi panas matahari. (P3) Solusi penanaman taman atap (green roof) untuk menurunkan suhu kota. Apakah topik utama teks tersebut?",
                langkah: "Gabungkan benang merah P1, P2, dan P3: 'Penyebab dan upaya mitigasi fenomena pulau bahang perkotaan (urban heat island).'"
            },
            gameQuestions: [
                {
                    q: "Bacalah kutipan berikut!\n'Asam lemak omega-3, terutama EPA dan DHA yang banyak terkandung pada ikan laut dalam seperti makarel dan sarden, berperan krusial dalam menjaga elastisitas pembuluh darah manusia. Berbagai studi epidemiologi membuktikan bahwa populasi pesisir yang rutin mengonsumsi ikan laut segar memiliki risiko penyakit jantung koroner empat puluh persen lebih rendah dibandingkan populasi yang jarang mengonsumsinya. Sayangnya, pengolahan ikan dengan cara menggoreng pada suhu sangat tinggi dapat merusak ikatan rangkap asam lemak tersebut.'\nIde pokok kutipan di atas adalah...",
                    opts: [
                        "Cara menggoreng ikan makarel dan sarden agar tetap renyah dan gurih.",
                        "Peran penting asam lemak omega-3 pada ikan laut dalam bagi kesehatan pembuluh darah dan jantung beserta kerentanannya terhadap suhu goreng tinggi.",
                        "Perbandingan jumlah penduduk wilayah pesisir dan wilayah pegunungan di Indonesia.",
                        "Sejarah penemuan senyawa kimia EPA dan DHA oleh para peneliti epidemiologi."
                    ],
                    ans: 1,
                    exp: "Gagasan utama kutipan tersebut memaparkan peran omega-3 (EPA & DHA) pada ikan laut dalam untuk menjaga kesehatan pembuluh darah/jantung serta pengaruh cara pengolahannya."
                },
                {
                    q: "Perhatikan paragraf berikut!\n'(1) Banyak orang mengira bahwa kelelahan mata digital semata-mata disebabkan oleh paparan sinar biru dari layar gawai. (2) Namun, penelitian oftalmologi terbaru menunjukkan bahwa penyebab utamanya justru adalah penurunan frekuensi berkedip hingga enam puluh persen saat seseorang menatap layar secara intens. (3) Berkurangnya kedipan ini membuat lapisan air mata cepat menguap sehingga kornea mengalami kekeringan dan iritasi.'\nGagasan utama paragraf tersebut terletak pada kalimat ke-2 karena...",
                    opts: [
                        "Kalimat ke-1 selalu merupakan kalimat penjelas di setiap paragraf bahasa Indonesia.",
                        "Kalimat ke-2 menggunakan konjungsi pertentangan 'Namun,' yang meluruskan anggapan di kalimat ke-1 dan menjadi fokus yang dijelaskan oleh kalimat ke-3.",
                        "Kalimat ke-2 memiliki jumlah kata yang paling banyak dibandingkan kalimat lainnya.",
                        "Kalimat ke-3 menggunakan istilah medis yang sulit dipahami."
                    ],
                    ans: 1,
                    exp: "Ini adalah pola paragraf berbalik arah (ineratif/korektif): kalimat (1) menyajikan anggapan umum yang keliru, lalu kalimat (2) ('Namun,...') menyajikan tesis utama penulis yang kemudian dijelaskan lebih lanjut oleh kalimat (3)."
                },
                {
                    q: "Manakah di antara pilihan berikut yang merupakan kesalahan paling umum saat memilih Topik Utama sebuah wacana multi-paragraf?",
                    opts: [
                        "Memilih opsi yang memuat kata kunci yang berulang di setiap paragraf.",
                        "Memilih opsi yang hanya mencerminkan isi satu paragraf saja (terlalu sempit) atau memuat contoh spesifik.",
                        "Memilih frasa nominal yang merangkum keseluruhan isi bacaan.",
                        "Memperhatikan keterkaitan antara paragraf pembuka, isi, dan penutup."
                    ],
                    ans: 1,
                    exp: "Jebakan utama soal topik wacana di LBI adalah opsi pengecoh yang terdengar benar padahal hanya mewakili satu paragraf atau satu kalimat contoh saja (terlalu sempit)."
                },
                {
                    q: "Bacalah paragraf berikut!\n'Perubahan pola curah hujan ekstrem akibat pemanasan global telah menggeser kalender tanam tradisional para petani padi di Pulau Jawa. Selama puluhan tahun, petani mengandalkan pranata mangsa untuk menentukan awal musim tanam pada bulan Oktober. Akan tetapi, anomali iklim dalam satu dekade terakhir sering memicu kemarau basah atau banjir mendadak yang menyebabkan gagal panen. Oleh sebab itu, pemanfaatan stasiun cuaca mikro berbasis sensor digital di tingkat desa kini menjadi kebutuhan mendesak bagi ketahanan pangan nasional.'\nIde pokok yang merangkum paragraf di atas adalah...",
                    opts: [
                        "Sejarah panjang penggunaan pranata mangsa oleh para petani tradisional di Pulau Jawa.",
                        "Urgensi adaptasi teknologi stasiun cuaca mikro akibat pergeseran pola curah hujan yang mengganggu kalender tanam tradisional.",
                        "Cara kerja sensor digital pada stasiun cuaca mikro untuk mengukur kelembapan udara harian.",
                        "Perbedaan curah hujan antara Pulau Jawa dan pulau-pulau lain di Indonesia pada bulan Oktober."
                    ],
                    ans: 1,
                    exp: "Paragraf tersebut memaparkan masalah pergeseran pola curah hujan yang membuat kalender tanam tradisional tidak lagi akurat (kalimat 1-3) dan mengerucut pada gagasan utama pentingnya stasiun cuaca mikro sebagai solusi adaptasi (kalimat 4)."
                },
                {
                    q: "Bacalah kutipan berikut!\n'(1) Mikroplastik berukuran kurang dari lima milimeter kini telah terdeteksi di berbagai ekosistem perairan tawar hingga jaringan tubuh biota laut. (2) Partikel sintetis ini berasal dari pelapukan sampah plastik besar maupun serat tekstil poliester yang terlepas saat proses pencucian pakaian. (3) Karena sifatnya yang sulit terurai secara biologis, mikroplastik dapat terakumulasi di sepanjang rantai makanan dan berisiko masuk ke tubuh manusia melalui konsumsi hasil laut.'\nKalimat utama kutipan tersebut terdapat pada nomor...",
                    opts: [
                        "(1), karena memperkenalkan fenomena pencemaran mikroplastik secara umum yang kemudian dirinci sumber dan dampaknya pada kalimat (2) dan (3).",
                        "(2), karena menjelaskan proses pencucian pakaian berbahan poliester di rumah tangga.",
                        "(3), karena memuat kata 'manusia' di bagian akhir kalimat.",
                        "Tidak ada kalimat utama karena ketiganya merupakan kalimat penjelas."
                    ],
                    ans: 0,
                    exp: "Paragraf tersebut berpola deduktif: kalimat (1) menyatakan tesis umum tentang sebaran mikroplastik di perairan dan biota, sedangkan kalimat (2) menjelaskan asal-usulnya dan kalimat (3) menjelaskan dampaknya pada rantai makanan."
                },
                {
                    q: "Perhatikan ringkasan tiga paragraf dari sebuah artikel ilmiah populer berikut!\n• Paragraf 1: Meningkatnya prevalensi bakteri yang kebal terhadap berbagai jenis antibiotik (multidrug-resistant) di rumah sakit seluruh dunia.\n• Paragraf 2: Kebiasaan pasien menghentikan konsumsi antibiotik sebelum dosis habis serta penggunaan antibiotik berlebihan pada peternakan unggas.\n• Paragraf 3: Kampanye penggunaan antibiotik secara bijak dan pengembangan terapi bakteriofag sebagai alternatif pengobatan infeksi.\nTema wacana yang paling tepat untuk menaungi ketiga paragraf tersebut adalah...",
                    opts: [
                        "Manajemen peternakan unggas modern bebas bakteri patogen.",
                        "Ancaman resistensi antibiotik, faktor pemicunya, dan strategi penanggulangannya.",
                        "Sejarah penemuan virus bakteriofag di laboratorium mikrobiologi rumah sakit.",
                        "Prosedur standar pelayanan pasien rawat inap di rumah sakit internasional."
                    ],
                    ans: 1,
                    exp: "Tema wacana utuh harus mencakup benang merah Paragraf 1 (masalah resistensi antibiotik), Paragraf 2 (faktor penyebabnya), dan Paragraf 3 (upaya solusi/penanggulangannya)."
                },
                {
                    q: "Bacalah teks berikut!\n'Banyak pelaku usaha rintisan (startup) berasumsi bahwa bakar uang melalui diskon besar-besaran adalah satu-satunya jalan membangun loyalitas pelanggan. Padahal, riset perilaku konsumen menunjukkan bahwa tujuh puluh persen pengguna yang datang semata karena promosi ekstrem akan langsung berpindah ke kompetitor begitu subsidi harga dihentikan. Retensi pelanggan jangka panjang justru bertumpu pada keandalan kualitas produk, kemudahan layanan purnajual, dan kejelasan solusi atas masalah nyata pengguna.'\nGagasan pokok teks di atas adalah...",
                    opts: [
                        "Cara menghitung anggaran promosi diskon bulanan bagi perusahaan rintisan baru.",
                        "Loyalitas pelanggan jangka panjang ditentukan oleh kualitas produk dan layanan, bukan sekadar strategi subsidi harga (bakar uang).",
                        "Alasan mengapa tujuh puluh persen masyarakat Indonesia gemar berbelanja melalui aplikasi daring.",
                        "Persaingan tarif pengiriman barang antarperusahaan logistik di kota besar."
                    ],
                    ans: 1,
                    exp: "Penulis meluruskan asumsi di kalimat pertama ('Padahal...') dan menegaskan gagasan pokok bahwa retensi/loyalitas pelanggan jangka panjang bergantung pada kualitas produk dan layanan, bukan strategi bakar uang."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Hutan mangrove di pesisir timur Sumatra menyimpan cadangan karbon biru (blue carbon) hingga empat kali lipat lebih besar per hektare dibandingkan hutan hujan tropis daratan. Sistem perakaran mangrove yang rapat memerangkap sedimen kaya bahan organik di dalam lumpur anaerobik yang miskin oksigen. Kondisi lumpur yang minim oksigen inilah yang memperlambat proses dekomposisi mikroba, sehingga karbon tetap terkunci di dalam tanah selama ratusan tahun.'\nJudul yang paling tepat dan mencerminkan topik utama kutipan tersebut adalah...",
                    opts: [
                        "Keanekaragaman Jenis Burung Air di Pesisir Timur Sumatra",
                        "Mekanisme Penyimpanan Karbon Biru Berkapasitas Tinggi pada Ekosistem Hutan Mangrove",
                        "Dampak Penebangan Hutan Hujan Tropis Daratan terhadap Suhu Global",
                        "Cara Menanam Bibit Mangrove di Lahan Berlumpur bagi Masyarakat Desa"
                    ],
                    ans: 1,
                    exp: "Seluruh kalimat dalam kutipan tersebut berfokus pada tingginya kapasitas cadangan karbon biru pada hutan mangrove beserta mekanisme ilmiah penyimpanan karbon di dalam lumpur akarnya."
                },
                {
                    q: "Bacalah paragraf berikut!\n'Pada masa awal revolusi industri, peningkatan produksi pabrik selalu identik dengan lonjakan konsumsi batu bara dan emisi gas buang. Di era ekonomi hijau saat ini, paradigma tersebut mulai runtuh seiring terbuktinya fenomena decoupling di puluhan negara maju. Negara-negara tersebut berhasil mencatatkan pertumbuhan produk domestik bruto (PDB) yang stabil sambil terus menurunkan total emisi karbon tahunannya melalui elektrifikasi industri dan efisiensi energi terbarukan.'\nIde pokok paragraf tersebut adalah...",
                    opts: [
                        "Sejarah penambangan batu bara pada masa awal revolusi industri di Eropa.",
                        "Keberhasilan pemisahan (decoupling) antara pertumbuhan ekonomi dan kenaikan emisi karbon melalui transisi energi bersih.",
                        "Rumus perhitungan produk domestik bruto (PDB) tahunan di negara-negara berkembang.",
                        "Kendala teknis pemasangan panel surya pada atap pabrik manufaktur berat."
                    ],
                    ans: 1,
                    exp: "Paragraf tersebut menyoroti perubahan paradigma dari era industri lama ke era ekonomi hijau, yaitu keberhasilan memisahkan (decoupling) pertumbuhan ekonomi dari kenaikan emisi karbon."
                },
                {
                    q: "Perhatikan paragraf berikut!\n'Tidur siang singkat selama lima belas hingga dua puluh menit (power nap) terbukti memberikan efek penyegaran instan bagi fungsi kognitif otak pekerja. Durasi singkat ini menjaga otak tetap berada pada tahap tidur ringan sehingga seseorang dapat bangun tanpa mengalami inersia tidur atau rasa pening yang berat. Dengan demikian, kewaspadaan visual dan ketelitian kerja pada sore hari dapat meningkat kembali secara optimal.'\nKata kunci utama yang menjadi pengikat ide pokok paragraf tersebut adalah...",
                    opts: [
                        "Gangguan insomnia kronis pada pekerja malam",
                        "Manfaat tidur siang singkat (power nap) bagi pemulihan fungsi kognitif dan ketelitian kerja",
                        "Bahaya tidur lebih dari sepuluh jam setiap akhir pekan",
                        "Pengaruh konsumsi kafein terhadap detak jantung pekerja kantor"
                    ],
                    ans: 1,
                    exp: "Kalimat pertama hingga terakhir secara koheren membahas manfaat tidur siang singkat (power nap) 15-20 menit untuk menyegarkan fungsi kognitif dan meningkatkan ketelitian kerja tanpa memicu inersia tidur."
                }
            ]
        },
        {
            key: "lbi_0_1",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Analisis Struktur Teks Eksposisi & Argumentasi",
            ringkasan: `
                <p>Mayoritas bacaan di UTBK LBI berjenis <strong>Teks Eksposisi</strong> (memaparkan informasi/analisis secara objektif) atau <strong>Teks Argumentasi</strong> (meyakinkan pembaca terhadap suatu posisi dengan bukti kuat).</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Bagian Struktur</th>
                                <th class="p-2 border border-slate-200 text-left">Fungsi dalam Wacana</th>
                                <th class="p-2 border border-slate-200 text-left">Cara Memperkuat / Memperlemah Argumen</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">1. Tesis (Pernyataan Pendapat)</td>
                                <td class="p-2">Menyajikan isu utama, klaim awal, atau sudut pandang penulis di paragraf awal.</td>
                                <td class="p-2"><strong>Memperkuat (Strengthen):</strong> Tambahkan bukti empiris/data riset yang mendukung hubungan sebab-akibat tesis.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">2. Rangkaian Argumen / Eksplanasi</td>
                                <td class="p-2">Menyajikan fakta, data statistik, hasil riset ahli, dan alasan logis yang menopang tesis.</td>
                                <td class="p-2"><strong>Memperlemah (Weaken):</strong> Tunjukkan adanya faktor penyebab alternatif atau bukti kontra yang mematahkan asumsi penulis.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">3. Penegasan Ulang (Reiterasi)</td>
                                <td class="p-2">Merangkum simpulan akhir atau memberikan rekomendasi/solusi kebijakan di paragraf penutup.</td>
                                <td class="p-2">Pastikan rekomendasi selaras dengan akar masalah yang dibahas di bagian argumen.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Klaim penulis: 'Pemberlakuan kerja empat hari seminggu akan meningkatkan produktivitas perusahaan teknologi.' Pernyataan mana yang paling memperkuat klaim tersebut?",
                langkah: "Cari bukti data/riset yang menunjukkan kenaikan output kerja saat jam kerja dipadatkan 4 hari, misalnya: 'Uji coba di 60 perusahaan perangkat lunak menunjukkan penurunan tingkat kelelahan staf dan kenaikan penyelesaian proyek sebesar 20%.'"
            },
            gameQuestions: [
                {
                    q: "Perhatikan argumen berikut!\n'Pemerintah Kota X berencana melarang penggunaan kantong plastik sekali pakai di seluruh pasar tradisional mulai bulan depan. Menurut Dinas Lingkungan Hidup, kebijakan ini diyakini akan mengurangi volume sampah di Tempat Pemrosesan Akhir (TPA) Kota X hingga tiga puluh persen dalam setahun.'\nPernyataan manakah yang jika benar PALING MEMPERLEMAH argumen Dinas Lingkungan Hidup tersebut?",
                    opts: [
                        "Banyak pedagang pasar tradisional yang mulai menyediakan tas belanja berbahan kain perca.",
                        "Survei komposisi sampah menunjukkan bahwa kantong plastik dari pasar tradisional hanya menyumbang kurang dari dua persen total sampah yang masuk ke TPA Kota X, sedangkan sisanya adalah sampah organik rumah tangga dan limbah industri.",
                        "Harga tas belanja ramah lingkungan semakin murah karena diproduksi secara massal oleh UMKM lokal.",
                        "Kota Y yang terletak di provinsi tetangga juga berencana menerapkan peraturan serupa tahun depan."
                    ],
                    ans: 1,
                    exp: "Jika kantong plastik dari pasar tradisional ternyata hanya menyumbang <2% dari total sampah TPA Kota X, maka pelarangannya mustahil dapat mengurangi total volume sampah TPA hingga 30%. Ini mematahkan langsung klaim kuantitatif argumen tersebut."
                },
                {
                    q: "Dalam struktur teks eksposisi ilmiah populer, bagian paragraf penutup yang berfungsi merangkum kembali gagasan utama sekaligus memberikan saran tindak lanjut disebut...",
                    opts: [
                        "Abstraksi orientasi",
                        "Tesis pembuka",
                        "Penegasan ulang (reiterasi)",
                        "Komplikasi konflik"
                    ],
                    ans: 2,
                    exp: "Struktur baku teks eksposisi terdiri atas: (1) Tesis (pernyataan pendapat/pembuka), (2) Rangkaian Argumen (isi), dan (3) Penegasan Ulang / Reiterasi (simpulan dan rekomendasi penutup)."
                },
                {
                    q: "Peneliti nutrisi menyatakan: 'Konsumsi minuman berpemanis buatan secara berlebihan pada remaja berkaitan erat dengan penurunan kualitas tidur malam.' Bukti manakah yang PALING MEMPERKUAT pernyataan peneliti tersebut?",
                    opts: [
                        "Minuman berpemanis buatan banyak dijual dengan kemasan berwarna cerah di minimarket dekat sekolah.",
                        "Studi klinis terhadap 1.200 remaja menunjukkan bahwa kelompok yang meminum lebih dari dua kaleng minuman berpemanis per hari mengalami penundaan fase tidur nyenyak (deep sleep) rata-rata 45 menit dibandingkan kelompok kontrol.",
                        "Remaja umumnya lebih menyukai minuman dingin saat cuaca siang hari sedang terik.",
                        "Harga gula tebu murni di pasar internasional mengalami kenaikan sebesar lima persen tahun ini."
                    ],
                    ans: 1,
                    exp: "Opsi B menyajikan bukti empiris terukur (studi klinis dengan kelompok kontrol) yang membuktikan hubungan langsung antara konsumsi minuman berpemanis dan gangguan kualitas tidur malam."
                },
                {
                    q: "Bacalah argumen berikut!\n'Perusahaan logistik Nusantara Express mengklaim bahwa penggantian seluruh armada truk diesel mereka dengan truk listrik baterai akan memangkas total biaya operasional pengiriman antarkota sebesar empat puluh persen mulai tahun pertama.'\nFakta manakah yang jika benar PALING MEMPERLEMAH klaim perusahaan tersebut?",
                    opts: [
                        "Truk listrik menghasilkan suara mesin yang jauh lebih senyap dibandingkan truk bermesin diesel konvensional.",
                        "Biaya penggantian baterai dan tarif pengisian daya cepat (ultra-fast charging) komersial di sepanjang jalur tol antarkota saat ini masih setara dengan sembilan puluh lima persen biaya bahan bakar solar.",
                        "Pemerintah memberikan keringanan pajak kendaraan bermotor tahunan bagi perusahaan yang menggunakan kendaraan listrik.",
                        "Banyak pengemudi truk yang menyambut baik fitur kemudi otomatis pada armada truk listrik terbaru."
                    ],
                    ans: 1,
                    exp: "Jika biaya baterai dan pengisian daya cepat ternyata masih mencapai 95% dari biaya solar, maka penghematan yang didapat hanya sekitar 5%, sehingga klaim pemangkasan biaya operasional sebesar 40% di tahun pertama menjadi lemah."
                },
                {
                    q: "Perhatikan kutipan teks eksposisi berikut!\n'(1) Urbanisasi yang tidak terkendali di kota-kota pesisir utara Jawa telah memicu eksploitasi air tanah dalam secara masif oleh gedung komersial dan industri. (2) Menurut pemantauan geodetik ITB, pengambilan air tanah yang melebihi kapasitas imbuhan alami ini menyebabkan penurunan muka tanah (land subsidence) rata-rata 5 hingga 12 sentimeter per tahun. (3) Oleh karena itu, perluasan jaringan pipa air bersih perpipaan dan moratorium izin sumur bor dalam harus segera ditegakkan agar kawasan pesisir tidak tenggelam.'\nUrutan struktur teks eksposisi dari kalimat (1), (2), dan (3) secara berturut-turut adalah...",
                    opts: [
                        "Tesis — Argumen (Bukti Data) — Penegasan Ulang (Rekomendasi)",
                        "Argumen — Penegasan Ulang — Tesis",
                        "Orientasi — Komplikasi — Resolusi",
                        "Penegasan Ulang — Tesis — Koda"
                    ],
                    ans: 0,
                    exp: "Kalimat (1) mengajukan tesis masalah (eksploitasi air tanah akibat urbanisasi), kalimat (2) menyajikan argumen berupa data riset geodetik ITB, dan kalimat (3) menutup dengan penegasan ulang berupa rekomendasi kebijakan ('Oleh karena itu,...')."
                },
                {
                    q: "Seorang pengamat pendidikan berpendapat: 'Penerapan ujian berbasis komputer secara daring dari rumah masing-masing siswa sepenuhnya menjamin kejujuran akademik yang lebih tinggi dibandingkan ujian tertulis di ruang kelas.'\nPernyataan manakah yang PALING MEMPERLEMAH pendapat pengamat tersebut?",
                    opts: [
                        "Ujian berbasis komputer menghemat anggaran pencetakan kertas soal hingga jutaan rupiah per sekolah.",
                        "Hasil evaluasi menunjukkan bahwa tanpa pengawasan kamera pemantau dan pengunci peramban (proctoring browser), tingkat kolusi dan pencarian jawaban melalui kecerdasan buatan saat ujian di rumah meningkat tiga kali lipat.",
                        "Sebagian besar siswa sekolah menengah atas telah terbiasa mengetik menggunakan papan ketik laptop.",
                        "Nilai hasil ujian berbasis komputer dapat langsung dihitung secara otomatis detik itu juga."
                    ],
                    ans: 1,
                    exp: "Bukti bahwa tingkat kecurangan/kolusi meningkat tiga kali lipat saat ujian dilakukan dari rumah tanpa pengawasan ketat secara langsung mematahkan klaim bahwa ujian dari rumah menjamin kejujuran yang lebih tinggi."
                },
                {
                    q: "Bacalah argumen berikut!\n'Pembangunan jalur sepeda terproteksi (separated bike lane) di sepanjang jalan protokol kota metropolitan akan meningkatkan jumlah pekerja komuter yang bersepeda ke kantor secara signifikan.'\nManakah pernyataan yang PALING MEMPERKUAT argumen di atas?",
                    opts: [
                        "Harga sepeda lipat buatan dalam negeri mengalami penurunan sepuluh persen pada kuartal ini.",
                        "Survei terhadap 5.000 komuter perkotaan mengungkap bahwa 78 persen responden sebenarnya ingin bersepeda ke kantor, tetapi mengurungkan niatnya semata-mata karena takut terserempet kendaraan bermotor di jalan raya yang belum memiliki pembatas fisik.",
                        "Komunitas sepeda santai sering mengadakan kegiatan bersepeda bersama setiap Minggu pagi di kawasan bebas kendaraan.",
                        "Jalur pedestrian di sekitar pusat perbelanjaan telah dilengkapi dengan ubin pemandu bagi penyandang disabilitas."
                    ],
                    ans: 1,
                    exp: "Data survei bahwa 78% komuter menahan diri bersepeda hanya karena faktor keamanan (belum adanya pembatas fisik) memperkuat klaim bahwa penyediaan jalur sepeda terproteksi akan mendorong mereka beralih bersepeda."
                },
                {
                    q: "Dalam sebuah teks argumentasi, penulis menyertakan kutipan hasil penelitian longitudinal dari jurnal medis terindeks disertai grafik penurunan angka kesakitan. Tujuan utama penulis menyertakan elemen tersebut adalah...",
                    opts: [
                        "Menghibur pembaca agar tidak bosan membaca istilah kedokteran.",
                        "Meningkatkan kekuatan persuasif dan objektivitas argumen melalui dukungan bukti empiris yang valid.",
                        "Memperpanjang jumlah halaman artikel agar memenuhi syarat publikasi cetak.",
                        "Mengalihkan perhatian pembaca dari topik utama yang sedang dibahas."
                    ],
                    ans: 1,
                    exp: "Dalam teks argumentasi maupun eksposisi analitis, penyertaan data statistik dan rujukan riset ilmiah bertujuan memperkuat validitas klaim serta meyakinkan pembaca secara objektif."
                },
                {
                    q: "Perhatikan teks berikut!\n'Banyak petani kopi robusta di lereng gunung mulai menerapkan sistem agroforestri dengan menanam pohon pelindung seperti lamtoro dan alpukat di sela-sela kebun kopi mereka. Kanopi pohon pelindung mampu menahan terpaan suhu ekstrem siang hari dan menjaga kelembapan mikro tanah. Selain itu, guguran daun pohon pelindung memperkaya kandungan nitrogen tanah secara alami sehingga produktivitas buah kopi tetap stabil meskipun terjadi kemarau panjang.'\nAsumsi dasar yang mendasari argumen keberhasilan sistem agroforestri pada teks di atas adalah...",
                    opts: [
                        "Tanaman kopi robusta membutuhkan kondisi mikroklimat yang lembap dan tanah kaya unsur hara agar produktivitasnya tetap terjaga saat kemarau.",
                        "Buah alpukat memiliki harga jual ekspor yang jauh lebih mahal daripada biji kopi robusta.",
                        "Pohon lamtoro dapat tumbuh tanpa membutuhkan air hujan sama sekali sepanjang tahun.",
                        "Seluruh konsumen kopi dunia hanya mau membeli kopi yang ditanam di dataran rendah."
                    ],
                    ans: 0,
                    exp: "Argumen bahwa pohon pelindung menjaga produktivitas kopi lewat pengaturan suhu/kelembapan dan pasokan nitrogen bertumpu pada asumsi dasar bahwa tanaman kopi membutuhkan mikroklimat lembap serta unsur hara tanah tersebut."
                },
                {
                    q: "Manakah di antara kalimat berikut yang paling tepat digunakan sebagai kalimat PENEGASAN ULANG (reiterasi) pada akhir esai bertema 'Bahaya Limbah Elektronik (E-Waste) yang Tidak Didaur Ulang'?",
                    opts: [
                        "Pertama-tama, marilah kita mengenal pengertian limbah elektronik menurut kamus lingkungan hidup.",
                        "Mengingat tingginya risiko pencemaran logam berat timbal dan merkuri terhadap air tanah, pemerintah bersama produsen gawai wajib segera menyediakan fasilitas pengumpulan dan daur ulang limbah elektronik yang terpadu.",
                        "Sebagai contoh, sebuah ponsel pintar rata-rata mengandung sekitar 0,034 gram emas dan 16 gram tembaga pada papan sirkuitnya.",
                        "Pada tahun 1990, jumlah pengguna telepon genggam di Indonesia masih sangat terbatas di kota-kota besar."
                    ],
                    ans: 1,
                    exp: "Kalimat penegasan ulang (reiterasi) pada penutup eksposisi/argumentasi berciri merangkum urgensi masalah sekaligus menegaskan simpulan/rekomendasi tindakan ('Mengingat..., pemerintah bersama produsen wajib segera...')."
                }
            ]
        },
        {
            key: "lbi_0_2",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Menemukan Informasi Eksplisit dan Implisit",
            ringkasan: `
                <p>Soal LBI selalu mengombinasikan pertanyaan <strong>Informasi Eksplisit (Tersurat)</strong> dan <strong>Informasi Implisit (Tersirat / Inferensi)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Informasi</th>
                                <th class="p-2 border border-slate-200 text-left">Definisi & Teknik Scanning</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Eksplisit (Tersurat)</td>
                                <td class="p-2">Tertulis <strong>secara langsung</strong> di dalam teks (biasanya diparafrasakan dengan sinonim). Gunakan teknik <em>scanning</em> kata kunci (nama, tahun, angka, istilah khusus).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Implisit (Tersirat)</td>
                                <td class="p-2"><strong>Tidak tertulis kata per kata</strong>, tetapi pasti benar sebagai konsekuensi logis dari fakta di dalam teks. <strong>Ingat:</strong> Inferensi yang sah tidak boleh melompat terlalu jauh di luar data teks!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Teks: 'Seluruh penerbangan komersial di Bandara A dialihkan ke Bandara B apabila jarak pandang akibat kabut asap turun di bawah 800 meter. Pagi ini pukul 06.30, jarak pandang di Bandara A tercatat hanya 450 meter.' Apakah informasi implisit yang tepat?",
                langkah: "Karena 450 meter < 800 meter, maka secara implisit dapat dipastikan bahwa pagi ini pukul 06.30 seluruh penerbangan komersial di Bandara A dialihkan ke Bandara B."
            },
            gameQuestions: [
                {
                    q: "Bacalah teks berikut!\n'Tanaman bakau jenis Rhizophora mucronata mampu bertahan hidup di perairan pesisir dengan kadar garam tinggi berkat mekanisme ultrafiltrasi pada membran akarnya. Akar napas tanaman ini dapat menyaring hingga sembilan puluh persen garam natrium klorida dari air laut sebelum air tersebut dialirkan ke jaringan pembuluh xilem. Sisa garam yang masih ikut terserap kemudian dikeluarkan melalui kelenjar khusus pada permukaan daun tua.'\nBerdasarkan teks tersebut, informasi EKSPLISIT mengenai cara bakau mengatasi sisa garam yang telanjur masuk ke jaringan tubuhnya adalah...",
                    opts: [
                        "Menyimpannya di dalam batang kayu hingga tanaman berusia puluhan tahun.",
                        "Mengeluarkannya melalui kelenjar khusus yang terdapat pada permukaan daun tua.",
                        "Mengubah garam natrium klorida menjadi glukosa melalui proses fotosintesis.",
                        "Memompa kembali sisa garam tersebut keluar melalui ujung akar tunggang."
                    ],
                    ans: 1,
                    exp: "Informasi tersebut tertulis secara eksplisit pada kalimat terakhir: 'Sisa garam yang masih ikut terserap kemudian dikeluarkan melalui kelenjar khusus pada permukaan daun tua.'"
                },
                {
                    q: "Perhatikan kutipan berikut!\n'Subsidi pembelian motor listrik sebesar tujuh juta rupiah per unit hanya diberikan kepada warga negara Indonesia yang telah memiliki KTP elektronik dan belum pernah menerima subsidi serupa sebelumnya. Setiap satu Nomor Induk Kependudukan (NIK) hanya berhak atas satu kali pembelian unit bersubsidi. Tahun lalu, Pak Budi telah membeli satu unit motor listrik menggunakan program subsidi pemerintah tersebut.'\nInformasi IMPLISIT (tersirat) yang pasti benar berdasarkan kutipan di atas adalah...",
                    opts: [
                        "Pak Budi tidak lagi berhak mendapatkan subsidi pemerintah jika ia membeli motor listrik kedua tahun ini.",
                        "Pak Budi bekerja sebagai pegawai negeri di kementerian perhubungan.",
                        "Harga motor listrik tanpa subsidi tidak terjangkau oleh masyarakat kelas menengah.",
                        "Seluruh tetangga Pak Budi juga telah membeli motor listrik bersubsidi tahun lalu."
                    ],
                    ans: 0,
                    exp: "Dari aturan 'Setiap satu NIK hanya berhak atas satu kali pembelian unit bersubsidi' dan fakta 'Tahun lalu Pak Budi telah membeli satu unit menggunakan subsidi', maka secara implisit Pak Budi tidak bisa lagi menerima subsidi untuk pembelian berikutnya."
                },
                {
                    q: "Ketika menjawab pertanyaan informasi tersirat (implisit) dalam ujian Literasi Bahasa Indonesia, sikap yang HARUS DIHINDARI oleh peserta ujian adalah...",
                    opts: [
                        "Menarik simpulan logis berdasarkan hubungan sebab-akibat dari dua kalimat di dalam teks.",
                        "Menggunakan asumsi pribadi atau opini luar yang tidak memiliki dasar bukti sama sekali di dalam teks bacaan.",
                        "Memperhatikan kata pembatas kuantitas seperti 'sebagian', 'seluruh', 'hanya', dan 'jarang'.",
                        "Mencocokkan kesesuaian subjek dan predikat pernyataan opsi dengan isi paragraf."
                    ],
                    ans: 1,
                    exp: "Inferensi/informasi implisit dalam LBI harus tetap berpijak ketat pada premis yang ada di dalam teks, bukan opini spekulatif dari luar teks."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Beasiswa Riset Unggulan Nasional hanya diberikan kepada mahasiswa semester akhir yang memiliki Indeks Prestasi Kumulatif (IPK) minimal 3,50, telah lulus ujian proposal skripsi, dan melampirkan surat rekomendasi dari dosen pembimbing utama. Nadira adalah mahasiswi semester akhir dengan IPK 3,82 dan telah mengantongi surat rekomendasi dari dosen pembimbing utamanya, tetapi jadwal ujian proposal skripsinya baru akan dilaksanakan bulan depan.'\nBerdasarkan teks di atas, pernyataan IMPLISIT yang tepat mengenai Nadira saat ini adalah...",
                    opts: [
                        "Nadira saat ini belum memenuhi syarat untuk menerima Beasiswa Riset Unggulan Nasional karena belum lulus ujian proposal skripsi.",
                        "Nadira pasti tidak akan pernah lulus ujian proposal skripsi bulan depan.",
                        "IPK Nadira masih kurang dari batas minimum yang ditetapkan panitia beasiswa.",
                        "Dosen pembimbing utama menolak memberikan surat rekomendasi kepada Nadira."
                    ],
                    ans: 0,
                    exp: "Syarat beasiswa bersifat kumulatif ('dan'): IPK >= 3,50, telah lulus ujian proposal, serta punya surat rekomendasi. Karena ujian proposal Nadira baru bulan depan, secara implisit saat ini ia belum memenuhi syarat."
                },
                {
                    q: "Bacalah teks berikut!\n'Kawah Ijen di perbatasan Kabupaten Banyuwangi dan Bondowoso terkenal dengan fenomena api biru (blue fire) yang langka di dunia. Fenomena ini sebenarnya bukanlah api dari pembakaran kayu, melainkan gas belerang bertekanan tinggi yang menyembur dari celah batuan vulkanik dengan suhu mencapai 600 derajat Celsius dan langsung bereaksi dengan oksigen di udara. Cahaya biru tersebut hanya dapat diamati dengan jelas oleh mata telanjang pada dini hari sebelum matahari terbit.'\nManakah pernyataan EKSPLISIT yang sesuai dengan isi teks di atas?",
                    opts: [
                        "Fenomena api biru Kawah Ijen dapat terlihat sangat jelas pada pukul dua belas siang.",
                        "Api biru Kawah Ijen terbentuk dari reaksi gas belerang bersuhu hingga 600 derajat Celsius dengan oksigen di udara.",
                        "Kawah Ijen terletak di perbatasan Kabupaten Malang dan Lumajang.",
                        "Gas belerang di Kawah Ijen berasal dari pembakaran hutan pinus di sekitar lereng gunung."
                    ],
                    ans: 1,
                    exp: "Kalimat kedua menyatakan secara tersurat bahwa fenomena tersebut adalah gas belerang bersuhu mencapai 600 derajat Celsius yang bereaksi dengan oksigen di udara."
                },
                {
                    q: "Perhatikan paragraf berikut!\n'Pada tahun 2024, kapasitas terpasang pembangkit listrik tenaga surya (PLTS) atap di Kawasan Industri Hijau meningkat dua kali lipat dibandingkan tahun 2023. Peningkatan ini didorong oleh kebijakan insentif penghapusan biaya kapasitas paralel serta turunnya harga modul fotovoltaik silikon di pasar global sebesar dua puluh lima persen.'\nBerdasarkan paragraf tersebut, informasi IMPLISIT yang pasti benar adalah...",
                    opts: [
                        "Kapasitas terpasang PLTS atap di Kawasan Industri Hijau pada tahun 2023 hanya setengah dari kapasitas terpasang pada tahun 2024.",
                        "Harga modul fotovoltaik silikon pada tahun 2024 naik sebesar dua puluh lima persen dibandingkan tahun 2023.",
                        "Seluruh pabrik di Kawasan Industri Hijau telah berhenti menggunakan listrik dari jaringan negara.",
                        "Pembangkit listrik tenaga angin tidak diizinkan beroperasi di Kawasan Industri Hijau."
                    ],
                    ans: 0,
                    exp: "Jika kapasitas tahun 2024 adalah dua kali lipat kapasitas tahun 2023, maka secara matematis dan implisit kapasitas pada tahun 2023 adalah setengah (50%) dari kapasitas tahun 2024."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Burung kutub Arctic tern memegang rekor migrasi terjauh di dunia satwa. Setiap tahun, burung mungil seberat seratus gram ini terbang bolak-balik dari kawasan Arktik di Kutub Utara menuju Antarktika di Kutub Selatan dan kembali lagi, menempuh jarak total sekitar 70.000 kilometer. Karena selalu mengikuti musim panas di kedua belahan bumi, burung ini merasakan paparan sinar matahari lebih banyak dibandingkan makhluk hidup lainnya di bumi.'\nAlasan EKSPLISIT mengapa burung Arctic tern mendapatkan paparan sinar matahari paling banyak dibandingkan satwa lain adalah...",
                    opts: [
                        "Karena ukuran tubuhnya hanya seberat seratus gram sehingga mampu terbang sangat tinggi di lapisan stratosfer.",
                        "Karena pola migrasinya selalu mengikuti periode musim panas di belahan bumi utara dan belahan bumi selatan.",
                        "Karena burung tersebut tidak pernah tidur sepanjang hidupnya.",
                        "Karena burung tersebut hanya memakan plankton yang bercahaya di permukaan laut kutub."
                    ],
                    ans: 1,
                    exp: "Tertulis secara eksplisit pada kalimat terakhir: 'Karena selalu mengikuti musim panas di kedua belahan bumi, burung ini merasakan paparan sinar matahari lebih banyak...'"
                },
                {
                    q: "Bacalah teks berikut!\n'Perpustakaan Nasional menetapkan aturan bahwa naskah kuno lontar abad ke-16 di ruang koleksi langka hanya boleh diakses secara fisik oleh peneliti yang membawa surat izin konservasi dan mengenakan sarung tangan nitril bebas bedak. Pengunjung umum yang tidak memiliki surat izin konservasi tetap dapat mempelajari isi naskah tersebut melalui layar mikrofilm digital di lantai tiga. Hari ini, Raka datang sebagai pengunjung umum tanpa membawa surat izin konservasi.'\nInferensi (informasi tersirat) yang tepat berdasarkan teks tersebut adalah...",
                    opts: [
                        "Raka tidak diizinkan menyentuh naskah kuno lontar secara fisik, tetapi ia dapat membaca versi mikrofilm digitalnya di lantai tiga.",
                        "Raka diusir oleh petugas keamanan dan dilarang masuk ke gedung Perpustakaan Nasional.",
                        "Koleksi mikrofilm digital di lantai tiga sedang mengalami kerusakan teknis hari ini.",
                        "Raka diizinkan meminjam naskah lontar asli untuk dibawa pulang ke rumah selama mengenakan sarung tangan."
                    ],
                    ans: 0,
                    exp: "Karena Raka adalah pengunjung umum tanpa surat izin konservasi, sesuai aturan teks ia tidak boleh mengakses fisik naskah lontar, namun tetap bisa mempelajarinya lewat layar mikrofilm digital di lantai tiga."
                },
                {
                    q: "Perhatikan kutipan laporan berikut!\n'Dari lima jenis komoditas hortikultura yang diuji coba di lahan pasir pantai selatan Yogyakarta, hanya bawang merah varietas Tiron dan cabai keriting yang mampu menghasilkan panen di atas sepuluh ton per hektare. Sementara itu, tomat, kubis, dan kentang mengalami penurunan hasil panen drastis akibat tingginya laju evaporasi dan rendahnya daya ikat air pada tanah berpasir.'\nPernyataan manakah yang SESUAI secara eksplisit maupun implisit dengan laporan di atas?",
                    opts: [
                        "Jumlah komoditas uji coba yang gagal mencapai panen di atas sepuluh ton per hektare lebih banyak daripada yang berhasil.",
                        "Tanah pasir pantai memiliki daya ikat air yang sangat tinggi sehingga membuat akar kentang membusuk.",
                        "Cabai keriting mengalami penurunan hasil panen paling parah dibandingkan tomat dan kubis.",
                        "Seluruh jenis sayuran dataran tinggi tumbuh subur di lahan pasir pantai selatan Yogyakarta."
                    ],
                    ans: 0,
                    exp: "Dari 5 komoditas, yang berhasil mencapai >10 ton/ha ada 2 (bawang merah dan cabai keriting), sedangkan yang gagal ada 3 (tomat, kubis, kentang). Karena 3 > 2, maka yang gagal lebih banyak daripada yang berhasil."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Obat golongan antihistamin generasi pertama seperti klorfeniramin maleat bersifat lipofilik sehingga mudah menembus sawar darah-otak dan memicu efek samping rasa kantuk yang kuat. Sebaliknya, antihistamin generasi kedua seperti loratadin dirancang sulit menembus sawar darah-otak sehingga meredakan gejala alergi tanpa menyebabkan kantuk pada dosis terapi normal.'\nJika seorang sopir bus antarkota membutuhkan obat pereda alergi debu sesaat sebelum bertugas mengemudi jarak jauh, kesimpulan implisit yang paling logis berdasarkan teks adalah...",
                    opts: [
                        "Sopir tersebut lebih aman mengonsumsi loratadin dibandingkan klorfeniramin maleat agar kewaspadaan mengemudinya tidak terganggu oleh rasa kantuk.",
                        "Sopir tersebut sebaiknya meminum klorfeniramin maleat dosis ganda agar bus melaju lebih cepat.",
                        "Kedua jenis obat tersebut sama-sama dilarang diproduksi oleh industri farmasi modern.",
                        "Loratadin bekerja dengan cara menembus sawar darah-otak secara cepat untuk menidurkan pasien."
                    ],
                    ans: 0,
                    exp: "Mengemudi membutuhkan kewaspadaan tinggi (tidak boleh mengantuk). Karena loratadin (generasi kedua) meredakan alergi tanpa menyebabkan kantuk, secara implisit obat tersebut lebih aman bagi sopir dibandingkan klorfeniramin maleat."
                }
            ]
        },
        {
            key: "lbi_0_3",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Mengevaluasi Kredibilitas Fakta vs Opini",
            ringkasan: `
                <p>Membedakan <strong>Fakta</strong> dan <strong>Opini (Pendapat)</strong> secara tajam sangat penting untuk mengevaluasi kredibilitas informasi di dalam teks jurnalistik maupun esai ilmiah populer.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Kriteria</th>
                                <th class="p-2 border border-slate-200 text-left">Fakta (Kenyataan Objektif)</th>
                                <th class="p-2 border border-slate-200 text-left">Opini (Pendapat / Penilaian)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Sifat Kebenaran</td>
                                <td class="p-2">Peristiwa yang <strong>sudah terjadi</strong>, terukur, dan dapat diverifikasi kebenarannya secara objektif oleh siapa pun.</td>
                                <td class="p-2">Berupa penilaian subjektif, saran, prediksi masa depan (<em>akan, diperkirakan, berpotensi</em>), atau keharusan.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Penanda Bahasa Khas</td>
                                <td class="p-2">Tanggal/tahun kejadian nyata, angka hasil sensus/pengukuran resmi, lokasi geografis, kutipan peristiwa historis.</td>
                                <td class="p-2">Kata sifat/modalitas subjektif: <em>sebaiknya, seharusnya, tampaknya, sangat indah, paling lezat, dikhawatirkan, mungkin</em>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Bedakan: (1) 'Menurut laporan BPS, inflasi tahunan bulan lalu tercatat sebesar 2,56 persen.' vs (2) 'Angka inflasi tersebut tampaknya masih cukup memberatkan bagi keluarga muda.'",
                langkah: "Kalimat (1) adalah Fakta (data terukur yang sudah dirilis resmi oleh BPS). Kalimat (2) adalah Opini karena memuat tafsiran/penilaian subjektif ('tampaknya masih cukup memberatkan')."
            },
            gameQuestions: [
                {
                    q: "Perhatikan empat kalimat berikut!\n(1) Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) mencatat gempa tektonik bermagnitudo 5,2 mengguncang wilayah pesisir selatan Jawa Barat pada pukul 04.15 WIB.\n(2) Pusat gempa tersebut berada di laut pada kedalaman 28 kilometer dan tidak berpotensi menimbulkan gelombang tsunami.\n(3) Masyarakat di sekitar pesisir sebaiknya tidak mudah percaya pada kabar berantai yang belum jelas sumbernya di media sosial.\n(4) Pemerintah daerah setempat mungkin perlu menambah jumlah rambu jalur evakuasi agar terlihat lebih mencolok.\nKalimat yang merupakan FAKTA dalam kutipan di atas adalah...",
                    opts: [
                        "(1) dan (2)",
                        "(1) dan (3)",
                        "(2) dan (4)",
                        "(3) dan (4)"
                    ],
                    ans: 0,
                    exp: "Kalimat (1) dan (2) memuat data peristiwa dan pengukuran ilmiah resmi yang telah terjadi dan terverifikasi. Adapun kalimat (3) ('sebaiknya...') dan kalimat (4) ('mungkin perlu...', 'lebih mencolok') merupakan saran/opini."
                },
                {
                    q: "Manakah di antara kalimat berikut yang merupakan OPINI (pendapat)?",
                    opts: [
                        "Candi Borobudur terletak di Kabupaten Magelang, Provinsi Jawa Tengah.",
                        "Indonesia memproklamasikan kemerdekaannya pada tanggal 17 Agustus 1945 di Jakarta.",
                        "Pemandangan matahari terbit dari puncak Gunung Bromo merupakan panorama alam paling memukau di Asia Tenggara.",
                        "Bank Indonesia mempertahankan suku bunga acuan BI-Rate pada level 6,00 persen dalam rapat dewan gubernur bulan ini."
                    ],
                    ans: 2,
                    exp: "Frasa 'paling memukau di Asia Tenggara' adalah penilaian estetika yang bersifat subjektif (ukuran 'memukau' berbeda-beda bagi tiap orang), sehingga merupakan opini."
                },
                {
                    q: "Mengapa kalimat 'Apabila pembangunan jalur kereta bawah tanah selesai tepat waktu tahun depan, kemacetan di jalan protokol diperkirakan akan berkurang drastis' dikategorikan sebagai OPINI?",
                    opts: [
                        "Karena membahas transportasi umum di perkotaan.",
                        "Karena berisi pengandaian ('Apabila...') dan prediksi terhadap peristiwa yang belum terjadi ('tahun depan', 'diperkirakan akan...').",
                        "Karena tidak menyebutkan nama perusahaan kontraktor yang membangun kereta bawah tanah.",
                        "Karena menggunakan kalimat majemuk bertingkat."
                    ],
                    ans: 1,
                    exp: "Pernyataan yang berisi syarat pengandaian dan perkiraan/prediksi masa depan belum terjadi secara faktual, sehingga dikategorikan sebagai opini/hipotesis."
                },
                {
                    q: "Bacalah paragraf berikut!\n'(1) Taman Nasional Komodo ditetapkan sebagai Situs Warisan Dunia oleh UNESCO pada tahun 1991. (2) Kawasan konservasi ini mencakup tiga pulau besar, yaitu Pulau Komodo, Pulau Rinca, dan Pulau Padar, serta sejumlah pulau kecil di sekitarnya. (3) Pembatasan kuota wisatawan harian rasanya merupakan langkah paling bijaksana untuk menjaga kenyamanan habitat komodo. (4) Selain itu, tarif tiket masuk kawasan konservasi seharusnya dinaikkan dua kali lipat bagi wisatawan mancanegara.'\nKalimat yang memuat OPINI penulis dalam paragraf tersebut adalah nomor...",
                    opts: [
                        "(1) dan (2)",
                        "(1) dan (3)",
                        "(2) dan (4)",
                        "(3) dan (4)"
                    ],
                    ans: 3,
                    exp: "Kalimat (1) dan (2) adalah fakta historis dan geografis yang terverifikasi. Kalimat (3) ('rasanya merupakan langkah paling bijaksana') dan kalimat (4) ('seharusnya dinaikkan') adalah opini berupa penilaian dan saran."
                },
                {
                    q: "Perhatikan pernyataan berikut!\n'Meskipun memiliki angka melek huruf di atas 95 persen, kemampuan literasi kritis masyarakat dalam menyaring informasi hoaks kesehatan di grup pesan instan tampaknya masih cukup memprihatinkan.'\nMengapa bagian klausa utama kalimat tersebut tergolong OPINI?",
                    opts: [
                        "Karena menggunakan kata modalitas penilaian subjektif 'tampaknya masih cukup memprihatinkan' tanpa ukuran kuantitatif yang pasti.",
                        "Karena mencantumkan angka statistik 95 persen pada anak kalimat.",
                        "Karena membahas topik kesehatan masyarakat.",
                        "Karena ditulis dalam bahasa Indonesia baku."
                    ],
                    ans: 0,
                    exp: "Penanda bahasa 'tampaknya masih cukup memprihatinkan' menunjukkan tafsiran atau penilaian subjektif penulis, bukan data pengukuran objektif."
                },
                {
                    q: "Manakah di antara empat kalimat laporan ekonomi berikut yang murni merupakan FAKTA?",
                    opts: [
                        "Nilai ekspor nikel olahan Indonesia pada triwulan ketiga tahun 2024 tercatat mencapai 4,8 miliar dolar AS berdasarkan data Badan Pusat Statistik.",
                        "Hilirisasi mineral tambang diyakini akan menjadikan Indonesia sebagai negara industri terkuat di Asia pada tahun 2045.",
                        "Pemerintah sebaiknya segera memperluas kebijakan hilirisasi ke sektor komoditas perkebunan kelapa sawit dan rumput laut.",
                        "Fluktuasi harga komoditas global tahun depan kemungkinan besar akan menekan margin keuntungan perusahaan tambang."
                    ],
                    ans: 0,
                    exp: "Opsi A memuat data realisasi yang sudah terjadi pada triwulan III 2024 dan bersumber dari pencatatan resmi BPS. Opsi B ('diyakini akan... 2045'), C ('sebaiknya'), dan D ('kemungkinan besar akan...') semuanya adalah opini/prediksi."
                },
                {
                    q: "Dalam mengevaluasi kredibilitas sebuah artikel kesehatan di internet, sumber manakah yang memiliki tingkat keandalan (kredibilitas) fakta ilmiah PALING TINGGI?",
                    opts: [
                        "Testimoni seorang selebritas di media sosial yang mengaku sembuh setelah mengonsumsi suplemen herbal tertentu selama tiga hari.",
                        "Artikel tinjauan sistematis (systematic review) yang diterbitkan oleh jurnal kedokteran terakreditasi dengan penelaahan sejawat (peer-reviewed) dan mencantumkan metodologi uji klinis.",
                        "Pesan berantai tanpa nama penulis yang menyertakan foto dokter dan klaim penyembuhan instan segala penyakit.",
                        "Kolom komentar pembaca pada blog gaya hidup populer."
                    ],
                    ans: 1,
                    exp: "Dalam literasi informasi ilmiah, kredibilitas tertinggi dimiliki oleh publikasi ilmiah yang melalui proses peer-review (penelaahan sejawat) dengan metodologi riset dan data empiris yang transparan."
                },
                {
                    q: "Bacalah kutipan berikut!\n'(1) Kereta Cepat Whoosh menghubungkan Stasiun Halim di Jakarta Timur dengan Stasiun Tegalluar di Kabupaten Bandung sepanjang 142,3 kilometer. (2) Dengan kecepatan operasional hingga 350 kilometer per jam, waktu tempuh antarkedua stasiun tersebut dapat dipangkas menjadi sekitar 45 menit. (3) Kehadiran kereta cepat ini tentu menjadi kebanggaan terbesar bagi seluruh warga Jawa Barat. (4) Pada masa mendatang, jalur kereta cepat ini diperkirakan akan diteruskan hingga mencapai Kota Surabaya.'\nPasangan kalimat FAKTA dan kalimat PREDIKSI (opini masa depan) secara berturut-turut ditunjukkan oleh nomor...",
                    opts: [
                        "(1) dan (4)",
                        "(3) dan (1)",
                        "(3) dan (2)",
                        "(4) dan (2)"
                    ],
                    ans: 0,
                    exp: "Kalimat (1) adalah fakta objektif (rute dan jarak terukur 142,3 km), sedangkan kalimat (4) adalah prediksi/opini masa depan ('Pada masa mendatang... diperkirakan akan...')."
                },
                {
                    q: "Perhatikan kalimat berikut!\n'Kopi arabika yang ditanam pada ketinggian di atas 1.200 meter di atas permukaan laut memiliki kadar keasaman yang jauh lebih nikmat dibandingkan kopi robusta dataran rendah.'\nKata dalam kalimat di atas yang menyebabkan kalimat tersebut menjadi sebuah OPINI subjektif adalah...",
                    opts: [
                        "ketinggian",
                        "1.200 meter",
                        "jauh lebih nikmat",
                        "dataran rendah"
                    ],
                    ans: 2,
                    exp: "Ukuran 'jauh lebih nikmat' berkaitan dengan selera lidah masing-masing individu (subjektif) sehingga tidak dapat dibuktikan kebenarannya secara universal sebagai fakta."
                },
                {
                    q: "Bacalah empat pernyataan tentang ekosistem terumbu karang berikut!\n(1) Segitiga Terumbu Karang (Coral Triangle) meliputi perairan Indonesia, Malaysia, Filipina, Papua Nugini, Timor Leste, dan Kepulauan Solomon.\n(2) Kawasan Segitiga Terumbu Karang menyimpan sekitar 76 persen dari seluruh spesies karang pembentuk terumbu yang telah diidentifikasi di dunia.\n(3) Wisatawan yang menyelam tanpa mematuhi etika konservasi adalah pihak yang paling tidak bertanggung jawab atas rusaknya keindahan laut.\n(4) Kenaikan suhu permukaan laut sebesar dua derajat Celsius berpotensi memicu pemutihan karang massal pada dekade mendatang.\nPernyataan yang berisi FAKTA objektif ditunjukkan oleh nomor...",
                    opts: [
                        "(1) dan (2)",
                        "(1) dan (4)",
                        "(2) dan (3)",
                        "(3) dan (4)"
                    ],
                    ans: 0,
                    exp: "Pernyataan (1) adalah fakta geografis dan pernyataan (2) adalah data inventarisasi ilmiah yang terukur. Pernyataan (3) memuat penghakiman subjektif ('paling tidak bertanggung jawab') dan (4) memuat prediksi masa depan ('berpotensi... pada dekade mendatang')."
                }
            ]
        },
        {
            key: "lbi_0_4",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Menyimpulkan Isi Bacaan Secara Komprehensif",
            ringkasan: `
                <p><strong>Simpulan bacaan</strong> adalah gagasan akhir yang diturunkan secara logis dari keseluruhan rangkaian premis/fakta di dalam teks. Bedakan antara <strong>Ide Pokok</strong> (topik payung di awal) dan <strong>Simpulan</strong> (hasil akhir penalaran teks).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Tiga Syarat Simpulan Bacaan yang Sah di LBI:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Merangkum Sebab-Akibat Utama:</strong> Jika teks memaparkan <em>Masalah A &rarr; Dampak B &rarr; Solusi C</em>, maka simpulan komprehensif harus mengaitkan ketiganya.</li>
                        <li><strong>Proporsional dengan Kuantifikasi Teks:</strong> Jika teks menyebut <em>"sebagian besar UMKM"</em>, simpulan <strong>tidak boleh</strong> mengklaim <em>"seluruh UMKM"</em> atau <em>"tidak ada UMKM"</em>.</li>
                        <li><strong>Bebas Halusinasi (Zero Extrapolation Trap):</strong> Jangan memilih opsi yang menambahkan variabel baru yang tidak pernah disinggung penulis.</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Teks: 'Restorasi lahan gambut melalui pembangunan sekat kanal terbukti menjaga kelembapan tanah gambut sepanjang musim kemarau. Tanah gambut yang tetap basah mampu mencegah munculnya titik api kebakaran hutan sekaligus menekan pelepasan emisi karbon ke atmosfer.' Simpulan yang tepat adalah...",
                langkah: "Hubungkan rantai A -> B -> C: Pembangunan sekat kanal dalam restorasi gambut efektif mencegah kebakaran hutan dan menekan emisi karbon dengan cara menjaga kelembapan tanah gambut."
            },
            gameQuestions: [
                {
                    q: "Bacalah teks berikut!\n'Penggunaan pupuk kimia sintetis secara terus-menerus dalam jangka panjang menyebabkan populasi mikroorganisme tanah penyubur alami menyusut drastis. Akibatnya, struktur tanah sawah menjadi keras, miskin unsur hara organik, dan semakin bergantung pada dosis pupuk kimia yang lebih tinggi setiap musim tanam. Kombinasi penggunaan kompos organik dan rotasi tanaman kacang-kacangan terbukti mampu memulihkan kembali biodiversitas mikroba serta kesuburan alami tanah tersebut.'\nSimpulan yang PALING TEPAT untuk bacaan di atas adalah...",
                    opts: [
                        "Seluruh petani di dunia wajib menghentikan penanaman padi dan beralih menanam kacang-kacangan.",
                        "Kerusakan kesuburan tanah akibat ketergantungan pupuk kimia sintetis jangka panjang dapat dipulihkan melalui integrasi kompos organik dan rotasi tanaman.",
                        "Pupuk kimia sintetis sama sekali tidak mengandung unsur hara yang dibutuhkan oleh tanaman pertanian.",
                        "Mikroorganisme tanah hanya dapat hidup di lahan perkebunan yang tidak pernah dialiri air irigasi."
                    ],
                    ans: 1,
                    exp: "Opsi B merangkum secara utuh hubungan masalah (degradasi tanah akibat pupuk kimia sintetis jangka panjang) dan solusinya (pemulihan dengan kompos organik dan rotasi tanaman)."
                },
                {
                    q: "Perhatikan kutipan berikut!\n'Survei di sepuluh kota besar menunjukkan bahwa 68 persen pekerja muda memilih transportasi publik berjadwal tetap karena ingin menghindari stres kemacetan jalan raya. Selain faktor ketepatan waktu, integrasi pembayaran nontunai antarmoda juga menjadi alasan utama meningkatnya jumlah penumpang harian kereta komuter dan bus raya terpadu.'\nSimpulan yang tepat berdasarkan kutipan tersebut adalah...",
                    opts: [
                        "Mayoritas pekerja muda di sepuluh kota besar beralih ke transportasi publik karena keunggulan bebas stres kemacetan, ketepatan jadwal, dan kemudahan integrasi pembayaran nontunai.",
                        "Tidak ada lagi pekerja muda di kota besar yang membeli kendaraan bermotor pribadi.",
                        "Tarif kereta komuter jauh lebih mahal dibandingkan biaya bahan bakar kendaraan pribadi.",
                        "Pemerintah telah menghapus seluruh pembayaran tunai di seluruh sektor perdagangan nasional."
                    ],
                    ans: 0,
                    exp: "Angka 68 persen merepresentasikan 'mayoritas' (sebagian besar), dan opsi A merangkum ketiga faktor pendorong yang disebutkan secara proporsional di dalam teks."
                },
                {
                    q: "Jika sebuah teks memaparkan bahwa: (1) Deforestasi di kawasan hulu mengurangi daya serap air hujan oleh akar pepohonan, dan (2) Berkurangnya daya serap air hujan memicu peningkatan limpasan air permukaan yang menyebabkan banjir bandang di wilayah hilir. Maka simpulan berantai yang valid adalah...",
                    opts: [
                        "Banjir bandang di wilayah hilir menyebabkan terjadinya deforestasi di kawasan hulu.",
                        "Deforestasi di kawasan hulu berkontribusi memicu terjadinya banjir bandang di wilayah hilir melalui peningkatan limpasan air permukaan.",
                        "Curah hujan di wilayah hilir selalu lebih tinggi daripada curah hujan di kawasan hulu.",
                        "Penanaman pohon hanya boleh dilakukan di daerah muara sungai."
                    ],
                    ans: 1,
                    exp: "Sesuai silogisme kausalitas (A -> B dan B -> C maka A -> C), deforestasi di hulu (A) memicu banjir bandang di hilir (C) melalui peningkatan limpasan air permukaan (B)."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Program digitalisasi pembukuan keuangan telah diikuti oleh 45 persen pelaku UMKM kuliner di Kabupaten Sleman. Pelaku UMKM yang telah menerapkan pembukuan digital tercatat lebih mudah memperoleh persetujuan kredit modal kerja dari perbankan formal karena arus kas usaha mereka terdokumentasi secara transparan.'\nSimpulan yang PALING TEPAT berdasarkan kutipan di atas adalah...",
                    opts: [
                        "Seluruh pelaku UMKM kuliner di Kabupaten Sleman telah memperoleh kredit modal kerja dari perbankan formal.",
                        "Sebagian pelaku UMKM kuliner di Kabupaten Sleman yang telah menerapkan pembukuan digital memiliki kemudahan akses kredit perbankan berkat transparansi arus kas mereka.",
                        "Pelaku UMKM yang tidak menggunakan aplikasi digital dilarang berjualan kuliner di Kabupaten Sleman.",
                        "Perbankan formal hanya memberikan kredit kepada perusahaan multinasional berskala besar."
                    ],
                    ans: 1,
                    exp: "Kuantifikasi 45 persen setara dengan 'sebagian' (bukan seluruh). Opsi B merangkum proporsi subjek serta hubungan sebab-akibat antara pembukuan digital, transparansi arus kas, dan kemudahan akses kredit."
                },
                {
                    q: "Bacalah teks berikut!\n'Konsumsi garam natrium melebihi 2.000 miligram per hari menyebabkan retensi cairan di dalam pembuluh darah. Peningkatan volume cairan ini memaksa jantung memompa lebih keras sehingga tekanan darah arteri meningkat secara kronis. Apabila tidak dikendalikan melalui diet rendah garam dan olahraga teratur, hipertensi kronis tersebut meningkatkan risiko serangan strok serta gagal ginjal.'\nSimpulan komprehensif dari teks kesehatan di atas adalah...",
                    opts: [
                        "Konsumsi garam natrium berlebih memicu hipertensi kronis yang berisiko menyebabkan strok dan gagal ginjal apabila tidak dikendalikan dengan diet rendah garam dan olahraga.",
                        "Penyakit gagal ginjal hanya dapat disembuhkan dengan cara menghentikan konsumsi air putih.",
                        "Olahraga teratur dapat menggantikan fungsi ginjal dalam menyaring garam natrium.",
                        "Semua orang yang berolahraga pasti tidak memerlukan garam natrium sedikit pun di dalam tubuhnya."
                    ],
                    ans: 0,
                    exp: "Opsi A merangkum rangkaian kausalitas secara utuh dari pemicu awal (konsumsi natrium berlebih), mekanisme antara (hipertensi), hingga risiko akhir (strok dan gagal ginjal) serta langkah pengendaliannya."
                },
                {
                    q: "Perhatikan teks berikut!\n'Penerapan sistem tilang elektronik berbasis kamera ETLE di dua belas persimpangan utama Kota Surabaya menurunkan angka pelanggaran menerobos lampu merah sebesar 54 persen dalam enam bulan pertama. Selain itu, angka kecelakaan lalu lintas di titik-titik persimpangan tersebut juga turun sebesar 38 persen pada periode yang sama.'\nSimpulan yang paling didukung oleh data dalam teks tersebut adalah...",
                    opts: [
                        "Penerapan kamera ETLE di dua belas persimpangan utama Kota Surabaya efektif menekan angka pelanggaran lampu merah sekaligus menurunkan tingkat kecelakaan lalu lintas.",
                        "Tidak ada lagi pengendara yang melanggar aturan lalu lintas di seluruh wilayah Provinsi Jawa Timur.",
                        "Kamera ETLE berfungsi mengatur durasi nyala lampu hijau agar kendaraan melaju lebih kencang.",
                        "Penurunan kecelakaan lalu lintas di Kota Surabaya disebabkan oleh kenaikan harga bahan bakar minyak."
                    ],
                    ans: 0,
                    exp: "Opsi A menyimpulkan kedua dampak positif terukur (penurunan pelanggaran 54% dan penurunan kecelakaan 38%) secara akurat sesuai cakupan lokasi di dalam teks."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Varietas padi biosalin yang dikembangkan oleh badan riset nasional memiliki gen toleran salinitas yang memungkinkannya tumbuh pada lahan sawah pesisir yang terdampak intrusi air laut hingga kadar garam 6 dS/m. Uji tanam di lima kabupaten pesisir utara Jawa menunjukkan rata-rata hasil panen mencapai 6,2 ton gabah kering giling per hektare, padahal sebelumnya lahan tersebut telantar karena padi biasa mati akibat air payau.'\nSimpulan yang tepat dari bacaan tersebut adalah...",
                    opts: [
                        "Varietas padi biosalin harus disiram menggunakan air laut murni setiap hari agar dapat berbuah.",
                        "Inovasi varietas padi biosalin memungkinkan lahan sawah pesisir yang terdampak intrusi air laut kembali produktif menghasilkan panen gabah yang tinggi.",
                        "Padi biosalin hanya dapat ditanam di lereng pegunungan vulkanik yang dingin.",
                        "Intrusi air laut di pesisir utara Jawa telah berhenti sepenuhnya berkat penanaman padi biosalin."
                    ],
                    ans: 1,
                    exp: "Teks memaparkan keunggulan padi biosalin (toleran salinitas) dan hasilnya di lapangan (lahan telantar akibat intrusi air laut kini menghasilkan 6,2 ton/ha), sehingga simpulannya adalah inovasi tersebut mengembalikan produktivitas lahan pesisir terdampak intrusi."
                },
                {
                    q: "Bacalah paragraf berikut!\n'Pencahayaan buatan yang berlebihan pada malam hari di kawasan perkotaan (polusi cahaya) mengacaukan orientasi navigasi serangga penyerbuk nokturnal seperti ngengat. Penelitian ekologis menemukan bahwa tanaman liar yang berada di dekat lampu jalan LED berintensitas tinggi mengalami penurunan kunjungan penyerbukan malam sebesar 62 persen. Akibatnya, produksi buah dan biji pada tanaman tersebut menyusut meskipun serangga penyerbuk siang hari seperti lebah tetap beraktivitas normal.'\nSimpulan yang PALING TEPAT berdasarkan paragraf di atas adalah...",
                    opts: [
                        "Lebah siang hari mampu menggantikan sepenuhnya peran serangga penyerbuk malam hari yang terganggu oleh lampu jalan.",
                        "Polusi cahaya malam hari di perkotaan menurunkan keberhasilan reproduksi (produksi buah dan biji) tanaman akibat terganggunya aktivitas serangga penyerbuk nokturnal.",
                        "Tanaman di dekat lampu jalan tumbuh lebih subur karena melakukan fotosintesis dua puluh empat jam sehari.",
                        "Seluruh spesies ngengat di dunia telah mengalami kepunahan akibat penggunaan lampu LED."
                    ],
                    ans: 1,
                    exp: "Rantai penalaran teks: polusi cahaya malam -> mengganggu serangga penyerbuk nokturnal (kunjungan turun 62%) -> produksi buah/biji tanaman menyusut dan tidak dapat dikompensasi oleh penyerbuk siang hari."
                },
                {
                    q: "Perhatikan kutipan berikut!\n'Kemasan plastik biodegradable berbahan pati singkong dapat terurai sempurna oleh mikroba pengurai hanya apabila berada pada fasilitas pengomposan industri dengan suhu di atas 50 derajat Celsius dan kelembapan terkontrol. Apabila kemasan tersebut terbuang ke perairan laut dingin atau tertimbun di tempat sampah biasa yang miskin oksigen, laju penguraiannya hampir sama lambatnya dengan plastik konvensional berbahan minyak bumi.'\nSimpulan kritis yang tepat dari kutipan tersebut adalah...",
                    opts: [
                        "Kemasan plastik berbahan pati singkong tidak pernah bisa terurai di kondisi mana pun.",
                        "Efektivitas penguraian plastik biodegradable berbahan pati singkong sangat bergantung pada ketersediaan fasilitas pengolahan sampah dengan kondisi suhu dan kelembapan yang tepat.",
                        "Membuang plastik biodegradable ke laut merupakan cara terbaik untuk memberi makan biota laut.",
                        "Plastik berbahan minyak bumi lebih cepat terurai di suhu 50 derajat Celsius dibandingkan pati singkong."
                    ],
                    ans: 1,
                    exp: "Teks menekankan syarat kondisional ('hanya apabila...'): plastik biodegradable cepat terurai di fasilitas pengomposan bersuhu >50°C, tetapi lambat terurai di laut/TPA biasa. Maka simpulannya efektivitasnya bergantung pada kondisi pengolahan yang tepat."
                },
                {
                    q: "Bacalah teks berikut!\n'Anak-anak yang rutin membaca buku cerita cetak bersama orang tua selama dua puluh menit setiap malam sebelum tidur menunjukkan penguasaan kosakata reseptif empat puluh persen lebih luas saat memasuki usia sekolah dasar dibandingkan anak yang hanya menonton video pendek sendirian. Interaksi tanya-jawab dua arah saat membaca bersama merangsang area bahasa di korteks otak anak secara jauh lebih aktif daripada paparan layar satu arah.'\nSimpulan yang paling akurat untuk teks tersebut adalah...",
                    opts: [
                        "Kebiasaan membaca buku cetak bersama orang tua secara interaktif lebih efektif memperkaya kosakata dan merangsang perkembangan bahasa anak dibandingkan tontonan layar satu arah.",
                        "Anak yang menonton video pendek tidak akan pernah bisa membaca dan menulis di sekolah dasar.",
                        "Buku cerita cetak hanya boleh dibaca pada malam hari selama tepat dua puluh menit.",
                        "Orang tua tidak perlu mengajak anak berbicara saat membacakan buku cerita."
                    ],
                    ans: 0,
                    exp: "Teks membandingkan dampak membaca interaktif bersama orang tua vs menonton video satu arah terhadap penguasaan kosakata dan stimulasi area bahasa otak anak."
                }
            ]
        },
        {
            key: "lbi_0_5",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Memahami Unsur dan Logika Teks Eksplanatif Ilmiah",
            ringkasan: `
                <p><strong>Teks eksplanatif ilmiah</strong> menjelaskan <em>bagaimana (how)</em> dan <em>mengapa (why)</em> suatu fenomena alam, biologi, kimia, fisika, atau sosial terjadi melalui urutan mekanisme kausal dan kronologis.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Komponen Teks Eksplanasi</th>
                                <th class="p-2 border border-slate-200 text-left">Fokus Analisis di UTBK</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">1. Pernyataan Umum</td>
                                <td class="p-2">Definisi konsep ilmiah dan konteks umum fenomena yang akan dijelaskan.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">2. Deretan Penjelas (Urutan Proses)</td>
                                <td class="p-2">Rantai mekanisme <strong>Tahap 1 &rarr; Tahap 2 &rarr; Tahap 3</strong>. Soal UTBK sering menanyakan: <em>"Apa yang terjadi jika Tahap 2 terhambat?"</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">3. Interpretasi / Penutup</td>
                                <td class="p-2">Dampak akhir fenomena atau implikasi ilmiahnya bagi kehidupan manusia/lingkungan.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Teks menjelaskan mekanisme vaksin mRNA: (1) mRNA masuk ke sel tubuh -> (2) Ribosom membaca mRNA untuk membuat protein spike tidak berbahaya -> (3) Sistem imun mengenali protein spike dan membentuk antibodi memori. Apa yang terjadi jika ribosom gagal membaca mRNA?",
                langkah: "Jika Tahap (2) gagal, maka protein spike tidak terbentuk, sehingga Tahap (3) (pembentukan antibodi memori oleh sistem imun) tidak akan terpicu."
            },
            gameQuestions: [
                {
                    q: "Bacalah teks eksplanatif berikut!\n'Proses pengasaman laut (ocean acidification) bermula ketika sekitar sepertiga emisi karbon dioksida (CO₂) di atmosfer larut ke dalam air permukaan samudra. Reaksi kimia antara CO₂ dan molekul air (H₂O) menghasilkan asam karbonat (H₂CO₃) yang tidak stabil dan segera melepaskan ion hidrogen (H⁺). Peningkatan konsentrasi ion H⁺ ini tidak hanya menurunkan pH air laut, tetapi juga mengikat ion karbonat bebas (CO₃²⁻) menjadi ion bikarbonat. Padahal, organisme laut bercangkang seperti terumbu karang, tiram, dan pteropoda sangat membutuhkan ion karbonat bebas untuk membentuk kerangka kalsium karbonat (CaCO₃).'\nBerdasarkan mekanisme ilmiah dalam teks di atas, mengapa peningkatan ion hidrogen (H⁺) menghambat pembentukan cangkang organisme laut?",
                    opts: [
                        "Karena ion H⁺ mengubah suhu air laut menjadi titik beku secara mendadak.",
                        "Karena ion H⁺ mengikat ion karbonat bebas (CO₃²⁻) sehingga ketersediaan ion karbonat yang dibutuhkan organisme untuk membentuk cangkang CaCO₃ berkurang.",
                        "Karena ion H⁺ memaksa terumbu karang bermigrasi ke daratan.",
                        "Karena asam karbonat menghilangkan seluruh kandungan oksigen terlarut di dasar samudra."
                    ],
                    ans: 1,
                    exp: "Sesuai rantai reaksi kimia di dalam teks, peningkatan ion H⁺ mengikat ion karbonat bebas (CO₃²⁻) menjadi bikarbonat, sehingga organisme bercangkang kekurangan bahan baku CO₃²⁻ untuk membentuk cangkang CaCO₃."
                },
                {
                    q: "Berdasarkan teks pengasaman laut pada soal sebelumnya, urutan rantai sebab-akibat kimiawi yang TEPAT adalah...",
                    opts: [
                        "Penurunan pH laut → Emisi CO₂ atmosfer → Pembentukan CaCO₃ → Pelepasan ion H⁺",
                        "Pelarutan CO₂ atmosfer ke laut → Pembentukan asam karbonat (H₂CO₃) → Pelepasan ion H⁺ & pengikatan ion karbonat → Terganggunya pembentukan cangkang CaCO₃",
                        "Terganggunya pembentukan cangkang CaCO₃ → Pelarutan CO₂ ke laut → Kenaikan pH air laut",
                        "Pengikatan ion karbonat → Berkurangnya emisi CO₂ di atmosfer → Pertumbuhan pesat terumbu karang"
                    ],
                    ans: 1,
                    exp: "Urutan kronologis dan kausal yang tepat sesuai teks adalah: CO₂ larut dalam H₂O -> terbentuk H₂CO₃ -> melepas ion H⁺ dan mengikat CO₃²⁻ -> pembentukan cangkang CaCO₃ terganggu."
                },
                {
                    q: "Perhatikan teks berikut!\n'Pada tumbuhan hijau, stomata di permukaan daun akan menutup secara otomatis ketika tanaman mendeteksi cekaman kekeringan melalui sinyal hormon asam absisat (ABA) dari akar. Penutupan stomata ini bertujuan mencegah hilangnya uap air berlebih melalui transpirasi. Namun, penutupan stomata juga menghalangi masuknya gas karbon dioksida dari udara ke dalam jaringan mesofil daun.'\nKonsekuensi logis yang terjadi pada tumbuhan apabila stomata terus menutup dalam waktu lama adalah...",
                    opts: [
                        "Laju fotosintesis tumbuhan akan menurun karena kekurangan pasokan karbon dioksida.",
                        "Akar tumbuhan akan berhenti menyerap mineral meskipun tanah kembali basah.",
                        "Daun tumbuhan akan berubah fungsi menjadi organ penyimpan cadangan lemak.",
                        "Laju penguapan air (transpirasi) justru meningkat sepuluh kali lipat."
                    ],
                    ans: 0,
                    exp: "Karena penutupan stomata menghalangi masuknya gas CO₂ (bahan baku utama fotosintesis) ke dalam daun, maka laju fotosintesis tumbuhan otomatis akan menurun."
                },
                {
                    q: "Bacalah teks eksplanatif berikut!\n'Fenomena eutrofikasi di danau bermula ketika limpasan air pertanian yang kaya limbah pupuk nitrat dan fosfat masuk ke badan perairan. Kelimpahan nutrisi ini memicu ledakan pertumbuhan populasi alga di permukaan air (algal bloom) hingga menutupi masuknya cahaya matahari ke dasar danau. Ketika massa alga yang berjumlah besar tersebut mati dan tenggelam ke dasar, bakteri aerobik menguraikannya dengan menghabiskan sebagian besar oksigen terlarut (dissolved oxygen) di dalam air. Akibatnya, terbentuk zona hipoksia yang menyebabkan kematian massal ikan.'\nBerdasarkan mekanisme di atas, penyebab langsung berkurangnya oksigen terlarut di dasar danau secara drastis adalah...",
                    opts: [
                        "Ikan-ikan di danau meminum seluruh pupuk nitrat dan fosfat yang masuk dari sawah.",
                        "Aktivitas bakteri aerobik yang mengonsumsi oksigen terlarut dalam jumlah besar saat menguraikan bangkai alga yang mati.",
                        "Sinar matahari membakar molekul oksigen di permukaan danau pada siang hari.",
                        "Tanaman air di dasar danau menghasilkan gas beracun ketika terkena cahaya matahari."
                    ],
                    ans: 1,
                    exp: "Kalimat ketiga menjelaskan secara langsung bahwa ketika alga mati, bakteri aerobik menguraikannya dengan menghabiskan sebagian besar oksigen terlarut di dalam air."
                },
                {
                    q: "Berdasarkan mekanisme eutrofikasi pada soal sebelumnya, langkah intervensi di bagian HULU manakah yang paling efektif memutus rantai proses tersebut sejak tahap paling awal?",
                    opts: [
                        "Menaburkan lebih banyak pupuk fosfat ke tengah danau.",
                        "Mengendalikan dosis pemupukan pertanian dan membangun zona penyangga vegetasi tepi air agar limpasan nitrat serta fosfat tidak masuk ke danau.",
                        "Mematikan seluruh bakteri pengurai di seluruh daratan sekitar danau.",
                        "Menutup permukaan danau menggunakan terpal plastik hitam pekat."
                    ],
                    ans: 1,
                    exp: "Tahap paling awal eutrofikasi adalah masuknya limpasan pupuk nitrat dan fosfat ke danau. Mengendalikan pemupukan dan menahan limpasan nutrisi di hulu akan mencegah ledakan alga sejak awal."
                },
                {
                    q: "Bacalah teks berikut!\n'Ketika kadar glukosa darah meningkat seusai makan, sel beta pada pulau Langerhans di pankreas mendeteksi kenaikan tersebut dan mensekresikan hormon insulin ke aliran darah. Insulin kemudian berikatan dengan reseptor khusus pada membran sel otot dan sel hati, memicu terbukanya saluran transporter glukosa (GLUT4). Melalui saluran yang terbuka inilah molekul glukosa dapat berpindah dari darah masuk ke dalam sel untuk diubah menjadi energi atau disimpan sebagai glikogen.'\nPada penderita resistensi insulin, reseptor pada membran sel otot gagal merespons ikatan hormon insulin secara normal. Berdasarkan teks, apa dampak langsung dari kegagalan tahap tersebut?",
                    opts: [
                        "Saluran transporter glukosa (GLUT4) tidak terbuka optimal sehingga glukosa gagal masuk ke sel dan menumpuk di dalam aliran darah.",
                        "Sel beta pankreas berhenti mendeteksi aliran darah dan berubah menjadi sel otot.",
                        "Glikogen di dalam hati langsung menguap melalui paru-paru.",
                        "Kadar glukosa di dalam aliran darah langsung turun menjadi nol seketika."
                    ],
                    ans: 0,
                    exp: "Jika ikatan insulin pada reseptor gagal direspons (Tahap 2 terhambat), maka saluran GLUT4 tidak terbuka, sehingga glukosa tidak dapat berpindah dari darah ke dalam sel (kadar glukosa darah tetap tinggi)."
                },
                {
                    q: "Perhatikan teks eksplanasi fisika atmosfer berikut!\n'Angin darat dan angin laut terbentuk akibat perbedaan kapasitas kalor jenis antara daratan dan lautan. Pada siang hari, daratan menyerap panas matahari lebih cepat daripada lautan sehingga udara di atas daratan memuai, massa jenisnya mengecil, dan bergerak naik ke atas. Naiknya udara hangat di daratan menciptakan daerah bertekanan rendah di permukaan darat, sehingga udara yang lebih dingin dan bertekanan lebih tinggi dari atas permukaan laut mengalir menuju daratan sebagai angin laut.'\nMengapa pada malam hari arah angin berbalik mengalir dari daratan menuju lautan (angin darat)?",
                    opts: [
                        "Karena pada malam hari daratan melepaskan panas lebih cepat sehingga lebih dingin dan bertekanan lebih tinggi daripada lautan yang masih menyimpan panas.",
                        "Karena gelombang pasang air laut mendorong udara kembali ke tengah samudra.",
                        "Karena rotasi bumi berhenti berputar selama beberapa jam pada tengah malam.",
                        "Karena pepohonan di pantai mengembuskan angin kencang ke arah laut saat malam hari."
                    ],
                    ans: 0,
                    exp: "Sesuai prinsip kapasitas kalor pada teks, pada malam hari daratan mendingin lebih cepat (tekanan lebih tinggi) sedangkan lautan melepas panas lebih lambat (masih hangat, udara naik, tekanan lebih rendah), sehingga udara mengalir dari darat ke laut."
                },
                {
                    q: "Bacalah teks berikut!\n'Pelapukan biologis-kimiawi pada batuan candi andesit sering dipercepat oleh kolonisasi lumut kerak (lichen). Lumut kerak menempel pada pori-pori permukaan batu melalui filamen rizoid, lalu mengekskresikan asam likenat dan asam oksalat sebagai hasil metabolismenya. Senyawa asam organik ini bereaksi melarutkan mineral kalsium dan magnesium pengikat matriks batuan andesit, sehingga butiran permukaan batu menjadi rapuh dan mudah terkelupas saat terkena terpaan air hujan.'\nUrutan proses kerusakan batuan candi oleh lumut kerak yang sesuai dengan teks adalah...",
                    opts: [
                        "Pelarutan mineral batu → Kolonisasi lumut kerak → Pembentukan batu andesit baru → Terpaan hujan",
                        "Kolonisasi pori batu oleh lumut kerak → Ekskresi asam organik (likenat/oksalat) → Pelarutan mineral pengikat matriks batu → Kerapuhan dan pengelupasan permukaan batu",
                        "Terpaan air hujan → Pembentukan asam oksalat oleh awan → Pertumbuhan lumut kerak di dalam tanah",
                        "Pengelupasan permukaan batu → Penyatuan mineral kalsium → Hilangnya pori-pori batu candi"
                    ],
                    ans: 1,
                    exp: "Rantai mekanisme dalam teks secara berurutan adalah: lumut kerak menempel di pori batu -> mengeluarkan asam likenat/oksalat -> melarutkan mineral pengikat batuan -> batu rapuh dan terkelupas."
                },
                {
                    q: "Perhatikan teks berikut!\n'Dalam sistem pengereman regeneratif pada mobil listrik, saat pengemudi melepaskan pedal gas atau menginjak pedal rem, motor traksi listrik beralih fungsi menjadi generator. Putaran roda mobil memutar rotor di dalam generator melawan medan magnet stator, yang menghasilkan gaya hambat elektromagnetik untuk memperlambat laju kendaraan. Secara bersamaan, energi kinetik putaran roda yang tertahan tersebut dikonversi menjadi arus listrik dan dialirkan kembali untuk mengisi baterai tegangan tinggi.'\nFungsi ganda yang terjadi secara simultan saat pengereman regeneratif bekerja berdasarkan teks tersebut adalah...",
                    opts: [
                        "Mempercepat laju putaran roda sekaligus menguras muatan baterai hingga habis.",
                        "Memperlambat laju kendaraan melalui gaya hambat elektromagnetik sekaligus memanen energi kinetik menjadi energi listrik ke dalam baterai.",
                        "Mengubah energi panas knalpot menjadi bahan bakar bensin di dalam tangki.",
                        "Mematikan medan magnet stator agar mobil dapat meluncur bebas tanpa hambatan di turunan."
                    ],
                    ans: 1,
                    exp: "Teks menjelaskan dua proses simultan ketika motor beralih menjadi generator: (1) menghasilkan gaya hambat elektromagnetik untuk memperlambat kendaraan, dan (2) mengonversi energi kinetik menjadi arus listrik untuk mengisi baterai."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Fenomena likuefaksi tanah terjadi ketika lapisan tanah pasir lepas yang jenuh air menerima guncangan gelombang gempa bumi yang kuat dan berulang dalam waktu singkat. Guncangan seismik tersebut meningkatkan tekanan air pori di sela-sela butiran pasir secara mendadak hingga menyamai tegangan geser antartitik kontak butiran tanah. Akibatnya, butiran-butiran pasir kehilangan ikatan kontak satu sama lain dan seluruh lapisan tanah berubah sifat dari padat menjadi seperti fluida kental yang tidak lagi mampu menopang beban bangunan di atasnya.'\nBerdasarkan teks di atas, syarat fisik yang harus dipenuhi agar suatu lapisan tanah dapat mengalami likuefaksi saat diguncang gempa kuat adalah...",
                    opts: [
                        "Tanah berupa batuan granit padat yang kering kerontang di puncak bukit.",
                        "Tanah berupa lapisan pasir lepas yang jenuh air sehingga tekanan air porinya dapat meningkat memisahkan kontak antarbutiran pasir.",
                        "Tanah telah dilapisi oleh rumput sintetis di halaman rumah.",
                        "Suhu udara di permukaan tanah berada di bawah nol derajat Celsius."
                    ],
                    ans: 1,
                    exp: "Kalimat pertama dan kedua menegaskan bahwa likuefaksi terjadi pada lapisan tanah pasir lepas yang jenuh air, di mana guncangan gempa menaikkan tekanan air pori hingga menghilangkan kontak antarbutiran pasir."
                }
            ]
        },
        {
            key: "lbi_0_6",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Menganalisis Nilai Moral dan Estetika Teks Sastra",
            ringkasan: `
                <p>Selain teks ilmiah, UTBK LBI juga menyajikan kutipan <strong>novel, cerpen, atau esai sastra</strong> untuk menguji pemahaman terhadap <strong>unsur intrinsik (tema, watak tokoh, latar, konflik, amanat)</strong> dan <strong>nilai kehidupan (moral, sosial, budaya)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Unsur Sastra</th>
                                <th class="p-2 border border-slate-200 text-left">Cara Mengidentifikasi di Teks LBI</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Penokohan Dramatik vs Analitik</td>
                                <td class="p-2"><strong>Analitik:</strong> Watak disebutkan langsung oleh narator. <strong>Dramatik:</strong> Watak tersirat lewat dialog, tindakan tokoh, atau respons tokoh lain.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Majas / Gaya Bahasa</td>
                                <td class="p-2"><strong>Personifikasi</strong> (benda mati bertingkah seperti manusia), <strong>Metafora</strong> (perbandingan langsung tanpa kata <em>seperti</em>), <strong>Hiperbola</strong> (melebih-lebihkan).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Nilai Moral vs Nilai Sosial</td>
                                <td class="p-2"><strong>Moral:</strong> Hati nurani, kejujuran, integritas pribadi. <strong>Sosial:</strong> Kepedulian antarmanusia, gotong royong, empati terhadap sesama.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Kutipan: 'Angin malam merangkul bahu renta Pak Tua yang masih setia menunggu perahu anaknya bersandar di dermaga kayu.' Gaya bahasa apakah yang tampak pada kalimat tersebut?",
                langkah: "'Angin malam merangkul bahu...' memberikan sifat perilaku manusia ('merangkul') kepada benda alam ('angin malam'), yaitu majas Personifikasi."
            },
            gameQuestions: [
                {
                    q: "Bacalah kutipan cerpen berikut!\n'Meski amplop tebal berisi uang pelicin itu diletakkan tepat di atas mejanya ketika ruang kerja sedang sepi, Damar mendorongnya kembali tanpa menyentuh sedikit pun. \"Maaf, Pak. Jembatan desa itu harus dibangun dengan besi ukuran standar sesuai spesifikasi kontrak. Saya tidak ingin tidur nyenyak di atas keselamatan ribuan warga yang melintasinya setiap hari,\" ujar Damar dengan suara tenang tetapi tegas.'\nWatak tokoh Damar dan nilai kehidupan yang paling menonjol dalam kutipan tersebut adalah...",
                    opts: [
                        "Keras kepala dan nilai estetika keindahan arsitektur",
                        "Berintegritas tinggi (jujur/bertanggung jawab) dan nilai moral",
                        "Penakut dan nilai adat istiadat daerah",
                        "Sombong dan nilai ekonomi perdagangan"
                    ],
                    ans: 1,
                    exp: "Tindakan Damar menolak uang suap demi menjaga keselamatan warga melalui kualitas jembatan menunjukkan watak berintegritas tinggi (jujur dan bertanggung jawab) serta mencerminkan nilai moral."
                },
                {
                    q: "Dalam kutipan soal sebelumnya, pengarang menggambarkan watak tokoh Damar menggunakan teknik...",
                    opts: [
                        "Analitik (paparan langsung dari pengarang bahwa Damar adalah orang jujur)",
                        "Dramatik melalui tindakan dan dialog tokoh",
                        "Deskripsi ciri fisik dan pakaian tokoh",
                        "Kilas balik masa kecil tokoh"
                    ],
                    ans: 1,
                    exp: "Pengarang tidak menuliskan kata 'Damar adalah orang yang jujur' secara langsung, melainkan menunjukkannya lewat tindakan ('mendorongnya kembali') dan dialog tegas Damar (teknik dramatik)."
                },
                {
                    q: "Perhatikan kalimat sastra berikut: 'Lampu-lampu jalan kota tua itu berkedip mengantuk menatap langkah kaki para pekerja sif malam yang pulang menjelang subuh.' Gaya bahasa (majas) yang dominan pada kalimat tersebut adalah...",
                    opts: [
                        "Litotes (merendahkan diri)",
                        "Personifikasi (penginsanan benda mati)",
                        "Ironi (sindiran halus)",
                        "Eufemisme (penghalusan makna)"
                    ],
                    ans: 1,
                    exp: "Benda mati ('Lampu-lampu jalan') digambarkan memiliki sifat manusia ('berkedip mengantuk menatap langkah kaki'), yang merupakan ciri khas majas personifikasi."
                },
                {
                    q: "Bacalah kutipan cerita berikut!\n'Setiap kali musim paceklik tiba dan sumur-sumur warga di lereng bukit kapur itu mengering, Mbok Darmi selalu membuka pintu pagar bambunya lebar-lebar. Ia membiarkan para tetangga menimba air dari sumur tua warisan suaminya tanpa memungut sepeser pun, padahal beberapa orang menyarankannya untuk menjual air itu per jeriken. \"Air itu rezeki dari perut bumi, Nduk. Kalau tetangga kehausan sedangkan tempayan kita penuh, rasanya air yang kita minum pun jadi seret di kerongkongan,\" tuturnya sambil tersenyum teduh.'\nNilai kehidupan yang paling menonjol dari sikap Mbok Darmi adalah...",
                    opts: [
                        "Nilai sosial (kepedulian dan empati berbagi kepada sesama di tengah kesulitan)",
                        "Nilai politik (strategi mencari dukungan suara dalam pemilihan kepala desa)",
                        "Nilai estetika (keindahan arsitektur sumur tua dan pagar bambu)",
                        "Nilai ilmiah (cara mengebor sumur di batuan kapur)"
                    ],
                    ans: 0,
                    exp: "Keikhlasan Mbok Darmi membagikan air sumurnya secara cuma-cuma kepada tetangga yang kesulitan saat musim kemarau mencerminkan nilai sosial berupa empati, gotong royong, dan kepedulian antarsesama."
                },
                {
                    q: "Bacalah kutipan novel berikut!\n'Di ruang tunggu stasiun yang dingin itu, jarum jam dinding merayap begitu lamban seolah enggan beranjak dari angka sebelas. Aruna menggenggam erat tiket kereta menuju perantauan di tangannya, sementara bayangan wajah ibunya yang berdiri melambai di ambang pintu rumah kayu tadi pagi terus berputar di pelupuk matanya. Dadanya terasa sesak antara harapan mengubah nasib keluarga dan beratnya meninggalkan kampung halaman untuk pertama kalinya.'\nKonflik batin yang dialami oleh tokoh Aruna dalam kutipan tersebut adalah...",
                    opts: [
                        "Kemarahan karena kereta api yang ditumpanginya mengalami keterlambatan selama berjam-jam.",
                        "Pergulatan perasaan antara tekad merantau demi memperbaiki ekonomi keluarga dan rasa berat berpisah dengan ibu serta kampung halaman.",
                        "Ketakutan karena kehilangan tiket kereta api di ruang tunggu stasiun yang dingin.",
                        "Pertengkaran hebat dengan petugas stasiun mengenai harga tiket kereta api."
                    ],
                    ans: 1,
                    exp: "Kalimat terakhir menjelaskan secara eksplisit maupun dramatik konflik batin Aruna: tarik-menarik perasaan antara harapan mengubah nasib keluarga di perantauan dan beratnya meninggalkan ibu/kampung halaman."
                },
                {
                    q: "Perhatikan kutipan prosa berikut!\n'Bagi masyarakat kampung nelayan Lamalera, melaut dengan perahu kayu peledang tanpa mesin bukanlah sekadar urusan mencari ikan untuk mengisi periuk nasi. Sebelum perahu didorong ke bibir ombak, tetua adat selalu memimpin doa bersama di pantai dan mengingatkan pantangan untuk tidak menangkap paus betina yang sedang mengandung. Tradisi leluhur itu dijaga turun-temurun agar laut tetap memberi kehidupan bagi anak cucu mereka.'\nUnsur ekstrinsik yang paling kental mewarnai kutipan cerita tersebut adalah...",
                    opts: [
                        "Nilai budaya dan kearifan lokal masyarakat adat dalam menjaga kelestarian alam.",
                        "Perkembangan teknologi mesin perahu cepat modern di galangan kapal.",
                        "Persaingan harga ikan segar di pasar pelelangan internasional.",
                        "Biografi pendidikan formal pengarang di perguruan tinggi."
                    ],
                    ans: 0,
                    exp: "Kutipan tersebut menonjolkan tradisi turun-temurun, ritual doa tetua adat, dan pantangan adat yang selaras dengan konservasi alam (nilai budaya dan kearifan lokal)."
                },
                {
                    q: "Perhatikan kalimat dalam kutipan cerpen berikut!\n'Sejak pabrik tekstil tempat ayahnya bekerja gulung tikar bulan lalu, Rendra terpaksa ikut memeras keringat sepulang sekolah demi membantu mengepulkan asap dapur keluarganya.'\nMakna ungkapan metaforis 'gulung tikar', 'memeras keringat', dan 'mengepulkan asap dapur' secara berturut-turut dalam kalimat tersebut adalah...",
                    opts: [
                        "Merapikan alas tidur, berolahraga sore, dan membakar kayu di halaman.",
                        "Mengalami kebangkrutan usaha, bekerja keras, dan mencukupi kebutuhan makan sehari-hari keluarga.",
                        "Menjual karpet tekstil, mencuci pakaian, dan memasak air panas.",
                        "Berpindah lokasi pabrik, menangis sedih, dan memperbaiki atap dapur yang bocor."
                    ],
                    ans: 1,
                    exp: "Dalam khazanah idiom/metafora bahasa Indonesia: 'gulung tikar' berarti bangkrut/tutup usaha, 'memeras keringat' berarti bekerja keras, dan 'mengepulkan asap dapur' berarti memenuhi kebutuhan makan/nafkah keluarga."
                },
                {
                    q: "Bacalah kutipan berikut!\n'Pak Harun dikenal sebagai abdi negara yang lurus hati dan bersih sepanjang tiga puluh tahun masa pengabdiannya di kantor pajak daerah. Ia tidak pernah sekali pun tergoda menerima bingkisan proyek, selalu datang lima belas menit sebelum jam kerja dimulai, dan hidup bersahaja di rumah sederhana yang dicicilnya sejak muda.'\nCara pengarang mendeskripsikan watak tokoh Pak Harun dalam kutipan di atas adalah...",
                    opts: [
                        "Teknik analitik (uraian langsung oleh narator mengenai sifat dan kebiasaan tokoh).",
                        "Teknik dialog antartokoh yang saling berdebat.",
                        "Teknik monolog batin tokoh dalam mimpi.",
                        "Teknik simbolik melalui cuaca buruk di luar gedung."
                    ],
                    ans: 0,
                    exp: "Narator memaparkan secara langsung sifat tokoh ('dikenal sebagai abdi negara yang lurus hati dan bersih...', 'hidup bersahaja'), yang merupakan ciri teknik penokohan analitik."
                },
                {
                    q: "Bacalah kutipan cerpen berikut!\n'\"Silakan masuk ke gubuk reot kami ini, Nak. Maaf, hanya ada seduhan teh tawar dan singkong rebus seadanya untuk menjamu tamu terhormat dari kota,\" ucap Pak Surya ramah sambil mempersilakan kami duduk di sofa jati ukir Jepara yang tampak terawat di ruang tamu rumahnya yang asri.'\nGaya bahasa (majas) yang digunakan oleh Pak Surya dalam dialog tersebut adalah...",
                    opts: [
                        "Hiperbola (melebih-lebihkan kemewahan untuk menyombongkan diri)",
                        "Litotes (merendahkan keadaan diri sendiri demi kesantunan berbahasa)",
                        "Sarkasme (ejekan kasar yang menyakitkan hati lawan bicara)",
                        "Paradoks (pernyataan yang tampaknya bertentangan tetapi mengandung kebenaran filosofis)"
                    ],
                    ans: 1,
                    exp: "Menyebut rumah yang asri dengan sofa jati terawat sebagai 'gubuk reot' merupakan ungkapan penghalusan yang merendahkan diri demi kesopanan/kerendahan hati kepada tamu, yaitu majas Litotes."
                },
                {
                    q: "Bacalah kutipan cerita berikut!\n'Laras menatap piala juara kedua lomba lukis tingkat provinsi di tangannya dengan mata berkaca-kaca karena kecewa. Selama berbulan-bulan ia merasa lukisannya sudah paling sempurna dan menganggap remeh peserta dari sekolah pinggiran. Namun, ketika ia berjalan mendekati lukisan juara pertama karya seorang siswa tunarungu dari desa sebelah, Laras tertegun melihat detail goresan kuas dan kedalaman emosi yang begitu jujur pada kanvas itu. Perlahan, rasa angkuh di dadanya luruh; ia menghampiri sang juara dan mengulurkan tangan sambil tersenyum tulus.'\nAmanat yang dapat dipetik dari perubahan sikap tokoh Laras dalam kutipan tersebut adalah...",
                    opts: [
                        "Jangan pernah mengikuti perlombaan melukis apabila belum dipastikan menang juara pertama.",
                        "Sikap meremehkan orang lain dan merasa diri paling sempurna harus dijauhi; kita perlu berlapang dada mengakui keunggulan karya orang lain dengan rendah hati.",
                        "Lukisan yang menggunakan cat mahal pasti selalu kalah dari lukisan sederhana.",
                        "Seorang pelukis harus menyembunyikan karyanya agar tidak dilihat oleh peserta dari sekolah lain."
                    ],
                    ans: 1,
                    exp: "Perjalanan karakter Laras dari merasa paling sempurna/meremehkan peserta lain hingga akhirnya tersadar dan mengapresiasi karya juara pertama dengan tulus memberikan amanat tentang kerendahan hati dan sportivitas."
                }
            ]
        },
        {
            key: "lbi_0_7",
            kategori: "Kompetensi Literasi Membaca",
            judul: "Menilai, Membandingkan, dan Menghubungkan Dua Teks Berbeda",
            ringkasan: `
                <p>Soal <strong>Sintesis Dua Teks (Teks 1 & Teks 2)</strong> meminta kamu membandingkan persamaan topik, perbedaan sudut pandang/fokus pembahasan, atau bagaimana Teks 2 melengkapi/membantah Teks 1.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Rumus Matriks Membandingkan Teks 1 vs Teks 2:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Persamaan Kedua Teks:</strong> Cari <strong>Kata Kunci Subjek Utama</strong> yang sama-sama muncul di Teks 1 dan Teks 2.</li>
                        <li><strong>Perbedaan Fokus / Sudut Pandang:</strong> Tentukan <em>Aspek</em> apa yang dibahas di Teks 1 (misal: <strong>dampak positif ekonomi</strong>) vs <em>Aspek</em> di Teks 2 (misal: <strong>risiko pencemaran lingkungan</strong>).</li>
                        <li><strong>Perbedaan Penyajian:</strong> Perhatikan apakah Teks 1 menyajikan <em>kronologi sejarah (urutan tahun)</em> sedangkan Teks 2 menyajikan <em>hubungan kausalitas (sebab-akibat)</em>.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Teks 1 memaparkan efisiensi kecerdasan buatan (AI) dalam mempercepat diagnosis medis di rumah sakit. Teks 2 memaparkan tantangan kebocoran privasi data rekam medis pasien dalam penggunaan AI kesehatan. Apakah perbedaan fokus kedua teks?",
                langkah: "Kedua teks bertopik sama (AI dalam bidang kesehatan), tetapi Teks 1 berfokus pada manfaat efisiensi klinisnya, sedangkan Teks 2 berfokus pada risiko keamanan dan etika privasi datanya."
            },
            gameQuestions: [
                {
                    q: "Perhatikan dua kutipan teks berikut!\n[Teks 1] Pengembangan pembangkit listrik tenaga panas bumi (geotermal) menawarkan keunggulan pasokan listrik beban dasar (baseload) yang stabil selama 24 jam penuh tanpa bergantung pada kondisi cuaca harian seperti tenaga surya atau angin.\n[Teks 2] Eksplorasi panas bumi di kawasan pegunungan vulkanik menuntut investasi awal yang sangat besar pada tahap pengeboran sumur eksplorasi serta memerlukan mitigasi sosial yang hati-hati karena lokasinya kerap berdekatan dengan hutan konservasi dan wilayah adat.\nHubungan isi antara Teks 1 dan Teks 2 yang PALING TEPAT adalah...",
                    opts: [
                        "Teks 1 memaparkan keunggulan teknis energi panas bumi, sedangkan Teks 2 memaparkan tantangan biaya investasi dan aspek sosial-lingkungan dalam pengembangannya.",
                        "Teks 2 membantah klaim Teks 1 bahwa energi panas bumi dapat menghasilkan listrik selama 24 jam.",
                        "Kedua teks sama-sama menyimpulkan bahwa tenaga surya lebih murah daripada tenaga panas bumi.",
                        "Teks 1 membahas sejarah penemuan listrik, sedangkan Teks 2 membahas cara kerja panel surya."
                    ],
                    ans: 0,
                    exp: "Kedua teks membahas topik yang sama (energi panas bumi), di mana Teks 1 menyoroti sisi keunggulan/keandalan pasokan listriknya, sedangkan Teks 2 menyoroti tantangan investasi dan sosial-lingkungannya."
                },
                {
                    q: "Perhatikan dua teks singkat berikut!\n[Teks A] Pada tahun 1928, Alexander Fleming secara tidak sengaja menemukan bahwa jamur Penicillium notatum menghasilkan zat yang mampu membunuh koloni bakteri Staphylococcus. Tiga belas tahun kemudian, Howard Florey dan Ernst Chain berhasil memurnikan penisilin untuk produksi massal obat antibiotik.\n[Teks B] Resistensi antibiotik terjadi ketika bakteri mengalami mutasi genetik setelah terpapar dosis antibiotik yang tidak tuntas. Bakteri yang bertahan hidup kemudian memperbanyak diri dan menularkan gen kebal tersebut kepada populasi bakteri lainnya.\nPerbedaan pola pengembangan paragraf antara Teks A dan Teks B adalah...",
                    opts: [
                        "Teks A dikembangkan dengan pola kronologis (urutan waktu sejarah), sedangkan Teks B dikembangkan dengan pola kausalitas/proses (mekanisme sebab-akibat).",
                        "Teks A berupa teks fiksi imajinatif, sedangkan Teks B berupa puisi lirik.",
                        "Teks A menggunakan pola perbandingan kontras, sedangkan Teks B menggunakan pola biografi tokoh.",
                        "Teks A membahas penyakit virus, sedangkan Teks B membahas jamur pangan."
                    ],
                    ans: 0,
                    exp: "Teks A menyajikan urutan peristiwa berdasarkan waktu sejarah ('Pada tahun 1928...', 'Tiga belas tahun kemudian...'), sedangkan Teks B menjelaskan mekanisme sebab-akibat terjadinya resistensi bakteri."
                },
                {
                    q: "Jika Teks 1 menyajikan data penurunan jumlah pembaca koran cetak selama satu dekade terakhir, dan Teks 2 menyajikan data lonjakan jumlah pelanggan portal berita digital berbayar pada periode sepuluh tahun yang sama, maka sintesis (simpulan gabungan) yang paling tepat dari kedua teks adalah...",
                    opts: [
                        "Masyarakat modern sudah kehilangan minat sama sekali untuk membaca berita harian.",
                        "Terjadi pergeseran preferensi medium konsumsi berita masyarakat dari media cetak konvensional menuju platform berita digital.",
                        "Harga kertas koran cetak lebih murah dibandingkan biaya berlangganan internet bulanan.",
                        "Portal berita digital hanya dibaca oleh kalangan lansia di pedesaan."
                    ],
                    ans: 1,
                    exp: "Menggabungkan penurunan pembaca koran cetak (Teks 1) dan kenaikan pelanggan berita digital (Teks 2) pada periode yang sama menghasilkan sintesis bahwa minat baca berita tidak hilang, melainkan beralih medium dari cetak ke digital."
                },
                {
                    q: "Bacalah kedua kutipan berikut!\n[Teks 1] Pertanian vertikal dalam ruangan (indoor vertical farming) dengan pencahayaan LED berspektrum khusus memungkinkan produksi sayuran daun di tengah kota metropolitan tanpa memerlukan lahan luas. Sistem tertutup ini menghemat penggunaan air hingga sembilan puluh persen dibandingkan pertanian lahan terbuka serta bebas dari pestisida kimia.\n[Teks 2] Meskipun unggul dalam efisiensi ruang dan air, operasional pertanian vertikal dalam ruangan membutuhkan pasokan energi listrik yang sangat besar untuk menyalakan lampu tumbuh dan pengatur suhu ruangan sepanjang hari. Akibatnya, jenis tanaman yang menguntungkan secara ekonomi masih terbatas pada sayuran berumur pendek dan bernilai jual tinggi.\nBagaimana Teks 2 berfungsi terhadap informasi yang disajikan dalam Teks 1?",
                    opts: [
                        "Teks 2 memberikan perspektif penyeimbang dengan memaparkan keterbatasan konsumsi energi dan keekonomian dari teknologi pertanian vertikal yang dipuji di Teks 1.",
                        "Teks 2 menyalin ulang seluruh kalimat Teks 1 menggunakan bahasa daerah.",
                        "Teks 2 membuktikan bahwa pertanian vertikal menggunakan lebih banyak pestisida daripada pertanian tradisional.",
                        "Teks 2 menjelaskan cara memperbaiki lampu jalan raya yang rusak."
                    ],
                    ans: 0,
                    exp: "Teks 1 menyoroti keunggulan pertanian vertikal (hemat lahan, hemat air 90%, bebas pestisida), lalu Teks 2 melengkapi/menyeimbangkannya dengan menguraikan keterbatasan biaya energi listrik dan batasan jenis komoditasnya."
                },
                {
                    q: "Perhatikan dua kutipan teks berikut!\n[Teks 1] Bank Indonesia mencatat nilai transaksi pembayaran menggunakan standar kode respons cepat (QRIS) tumbuh lebih dari seratus persen secara tahunan, didorong oleh adopsi masif di kalangan pedagang mikro, warung makan, hingga pasar tradisional.\n[Teks 2] Di sejumlah wilayah kepulauan terluar dan pedesaan pegunungan, transaksi tunai masih mendominasi lebih dari delapan puluh persen aktivitas perdagangan harian karena belum meratanya sinyal jaringan internet seluler berkecepatan stabil.\nSimpulan sintesis yang paling komprehensif dari kedua teks tersebut adalah...",
                    opts: [
                        "Adopsi pembayaran digital QRIS tumbuh sangat pesat pada sektor usaha mikro, namun pemerataan penggunaannya di wilayah terluar masih terkendala oleh infrastruktur jaringan internet.",
                        "Seluruh pedagang di wilayah kepulauan terluar telah meninggalkan penggunaan uang kertas.",
                        "Standar pembayaran QRIS hanya dapat digunakan di daerah pegunungan yang tidak memiliki sinyal internet.",
                        "Bank Indonesia telah menghentikan pencetakan uang rupiah logam dan kertas sejak tahun lalu."
                    ],
                    ans: 0,
                    exp: "Sintesis yang tepat harus memadukan fakta pertumbuhan pesat QRIS di UMKM (Teks 1) dengan fakta kendala pemerataan jaringan internet di wilayah terluar/pedesaan (Teks 2)."
                },
                {
                    q: "Bacalah kedua teks berikut!\n[Teks A] Terumbu karang buatan yang dicetak menggunakan teknologi printer tiga dimensi berbahan keramik karbonat memiliki tekstur berpori mikro yang menyerupai kerangka karang alami. Struktur celah yang presisi ini mempercepat penempelan larva polip karang dan menyediakan tempat berlindung bagi ikan-ikan karang muda.\n[Teks B] Keberhasilan transplantasi terumbu karang buatan sangat ditentukan oleh kualitas perairan lokasi penenggelaman. Apabila perairan pesisir masih tercemar limbah sedimen lumpur dan deterjen rumah tangga, pori-pori struktur terumbu buatan akan tertutup alga berlendir sehingga larva karang gagal menempel.\nHubungan logis antara Teks A dan Teks B adalah...",
                    opts: [
                        "Teks A menjelaskan inovasi desain struktural terumbu karang buatan, sedangkan Teks B menjelaskan prasyarat kualitas lingkungan perairan agar inovasi tersebut dapat berhasil.",
                        "Teks A dan Teks B saling bertolak belakang mengenai bahan pembuat printer tiga dimensi.",
                        "Teks B menyatakan bahwa larva karang hanya dapat hidup di air yang tercemar deterjen.",
                        "Teks A membahas budi daya ikan air tawar, sedangkan Teks B membahas penambangan batu kapur."
                    ],
                    ans: 0,
                    exp: "Teks A berfokus pada keunggulan desain fisik terumbu buatan cetak 3D, sedangkan Teks B menambahkan syarat ekologis (kebersihan perairan dari sedimen/limbah) yang menentukan keberhasilan inovasi tersebut di lapangan."
                },
                {
                    q: "Perhatikan dua kutipan berikut!\n[Teks 1] Konsumsi probiotik dari pangan fermentasi tradisional seperti tempe, dadih, dan tape singkong berperan menjaga keseimbangan mikrobiota usus. Bakteri asam laktat di dalamnya menekan pertumbuhan bakteri patogen saluran cerna serta memperkuat lapisan mukosa dinding usus.\n[Teks 2] Penelitian terbaru di bidang neurogastroenterologi mengungkap adanya jalur komunikasi dua arah antara mikrobiota usus dan sistem saraf pusat yang disebut poros usus-otak (gut-brain axis). Mikrobiota usus yang sehat turut memproduksi neurotransmiter serotonin yang membantu menstabilkan suasana hati dan menurunkan respons kecemasan.\nApabila informasi Teks 1 dan Teks 2 dihubungkan, inferensi baru yang dapat ditarik adalah...",
                    opts: [
                        "Konsumsi pangan fermentasi kaya probiotik berpotensi tidak hanya menyehatkan saluran pencernaan, tetapi juga mendukung kesehatan mental dan kestabilan suasana hati melalui poros usus-otak.",
                        "Pangan fermentasi tradisional seperti tempe dan dadih hanya boleh dikonsumsi oleh penderita gangguan saraf berat.",
                        "Bakteri patogen di dalam usus berfungsi memproduksi hormon kebahagiaan bagi otak manusia.",
                        "Sistem saraf pusat terletak di dalam lambung dan usus halus manusia."
                    ],
                    ans: 0,
                    exp: "Hubungan berantai Teks 1 + Teks 2: Pangan fermentasi menyehatkan mikrobiota usus (Teks 1) + Mikrobiota usus yang sehat membantu menstabilkan suasana hati lewat poros usus-otak (Teks 2) -> Pangan fermentasi berpotensi mendukung kesehatan cerna sekaligus kestabilan suasana hati."
                },
                {
                    q: "Bacalah dua teks berikut!\n[Teks 1] Pemerintah Provinsi Bali menerbitkan regulasi pelarangan produksi dan distribusi air minum dalam kemasan plastik sekali pakai berukuran di bawah satu liter guna menekan timbulan sampah plastik di destinasi wisata.\n[Teks 2] Sejumlah pengelola hotel, bandara, dan objek wisata di Bali mulai memasang stasiun pengisian air minum isi ulang (water refill station) berfilter ultraviolet agar wisatawan dapat mengisi ulang botol minum pribadi (tumbler) mereka dengan aman dan praktis.\nHubungan fungsional antara isi Teks 1 dan Teks 2 adalah...",
                    opts: [
                        "Teks 1 memaparkan kebijakan pembatasan plastik sekali pakai, sedangkan Teks 2 memaparkan penyediaan infrastruktur pendukung di lapangan agar kebijakan tersebut dapat berjalan efektif.",
                        "Teks 2 merupakan bentuk penolakan pelaku pariwisata terhadap regulasi yang disebutkan dalam Teks 1.",
                        "Teks 1 membahas pencemaran udara, sedangkan Teks 2 membahas pengolahan limbah cair hotel.",
                        "Kedua teks menyarankan wisatawan untuk berhenti minum air selama berlibur di Bali."
                    ],
                    ans: 0,
                    exp: "Regulasi pelarangan kemasan air minum kecil (Teks 1) membutuhkan fasilitas substitusi di lapangan berupa stasiun isi ulang air minum (Teks 2) agar kebutuhan air minum wisatawan tetap terpenuhi tanpa sampah plastik."
                },
                {
                    q: "Perhatikan dua teks singkat berikut!\n[Teks 1] Bahasa daerah di berbagai kepulauan Indonesia menghadapi ancaman kepunahan serius akibat menyusutnya jumlah penutur muda. Banyak keluarga di perkotaan tidak lagi menggunakan bahasa ibu sebagai bahasa pengantar sehari-hari di rumah karena menganggapnya kurang bergengsi dibandingkan bahasa nasional atau bahasa asing.\n[Teks 2] Sekelompok kreator muda di Sulawesi dan Kalimantan berhasil menarik jutaan penonton generasi Z melalui konten komedi pendek, lagu pop akustik, dan siniar (podcast) yang dibawakan dalam bahasa daerah masing-masing dengan takarir bahasa Indonesia.\nBerdasarkan perbandingan kedua teks, peran inisiatif pada Teks 2 terhadap permasalahan pada Teks 1 adalah...",
                    opts: [
                        "Menawarkan solusi kreatif revitalisasi bahasa daerah melalui medium budaya populer digital agar kembali diminati dan dianggap relevan oleh generasi muda.",
                        "Mempercepat kepunahan bahasa daerah dengan cara melarang penggunaan takarir bahasa Indonesia.",
                        "Membuktikan bahwa bahasa daerah hanya cocok digunakan untuk menulis naskah kuno di museum.",
                        "Menggantikan kurikulum bahasa Indonesia di sekolah dengan kurikulum pembuatan video komedi."
                    ],
                    ans: 0,
                    exp: "Teks 1 mengidentifikasi masalah turunnya minat dan gengsi bahasa daerah di kalangan muda, sedangkan Teks 2 menunjukkan bagaimana kreator muda merevitalisasi daya tarik bahasa daerah lewat medium digital populer."
                },
                {
                    q: "Bacalah kedua kutipan berikut!\n[Teks 1] Penambangan pasir laut secara masif menggunakan kapal keruk hisap merusak habitat bentik dasar laut, meningkatkan kekeruhan kolom air, dan mengubah pola refraksi gelombang yang memperparah abrasi garis pantai di desa-desa pesisir.\n[Teks 2] Dalam laporan keuangan kuartalan perusahaan konstruksi reklamasi, penggunaan pasir laut hasil pengerukan dekat lokasi proyek tercatat mampu menghemat biaya transportasi material urukan hingga tiga puluh lima persen dibandingkan mendatangkan tanah batu dari tambang daratan.\nPerbedaan sudut pandang (perspektif) antara Teks 1 dan Teks 2 dalam melihat aktivitas pengerukan pasir laut adalah...",
                    opts: [
                        "Teks 1 meninjau dari sudut pandang dampak ekologis dan kerentanan lingkungan pesisir, sedangkan Teks 2 meninjau dari sudut pandang efisiensi biaya finansial korporasi konstruksi.",
                        "Teks 1 meninjau dari sudut pandang hukum pidana internasional, sedangkan Teks 2 meninjau dari sudut pandang kesehatan nelayan.",
                        "Kedua teks sama-sama meninjau dari sudut pandang pelestarian terumbu karang.",
                        "Teks 1 mendukung pengerukan pasir laut, sedangkan Teks 2 menentang proyek reklamasi."
                    ],
                    ans: 0,
                    exp: "Teks 1 berfokus pada dampak kerusakan lingkungan/ekologis pesisir (habitat bentik, kekeruhan, abrasi pantai), sedangkan Teks 2 berfokus pada sudut pandang efisiensi biaya ekonomi/finansial proyek konstruksi."
                }
            ]
        }
    ]
};
