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
                }
            ]
        }
    ]
};
