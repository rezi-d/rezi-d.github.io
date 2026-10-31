// =========================================================================
// DATA MATERI & MINI-GAME SNBT 2026 — SUBTES 1: PENALARAN UMUM (PU)
// Total: 21 Sub-Materi × 3 Soal Game = 63 Soal Khusus Mini-Game
// Hadiah Maksimal per Sub-Materi: Rp 400 (Skor 3/3)
// =========================================================================

window.SNBT_MATERI_REGISTRY = window.SNBT_MATERI_REGISTRY || {};

window.SNBT_MATERI_REGISTRY["pu"] = {
    id: "pu",
    nama: "Penalaran Umum (PU)",
    icon: "🧠",
    color: "teal",
    rewardPerSub: 400,
    submateri: [
        // =====================================================================
        // KATEGORI 0: LOGIKA DASAR (3 SUB-MATERI)
        // =====================================================================
        {
            key: "pu_0_0",
            kategori: "Logika Dasar",
            judul: "Logika Matematika (Dasar)",
            ringkasan: `
                <p><strong>Logika Matematika Dasar</strong> adalah fondasi utama dalam menjawab soal penalaran deduktif UTBK. Kamu wajib menguasai 5 operator penghubung pernyataan (proposisi) beserta hukum ekuivalensinya.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Operator</th>
                                <th class="p-2 border border-slate-200 text-left">Simbol & Kata Kunci</th>
                                <th class="p-2 border border-slate-200 text-left">Kapan Bernilai BENAR / SALAH?</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Konjungsi (DAN)</td>
                                <td class="p-2">p ∧ q ("dan", "tetapi", "meskipun")</td>
                                <td class="p-2"><strong>Benar</strong> hanya jika p dan q <em>keduanya benar</em>.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Disjungsi (ATAU)</td>
                                <td class="p-2">p ∨ q ("atau")</td>
                                <td class="p-2"><strong>Salah</strong> hanya jika p dan q <em>keduanya salah</em>.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Implikasi (JIKA-MAKA)</td>
                                <td class="p-2">p → q ("jika p maka q")</td>
                                <td class="p-2"><strong>Salah</strong> hanya jika p Benar tetapi q Salah (B → S = S).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Biimplikasi</td>
                                <td class="p-2">p ↔ q ("jika dan hanya jika")</td>
                                <td class="p-2"><strong>Benar</strong> jika nilai p dan q <em>sama</em> (B-B atau S-S).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1">
                    <div class="font-bold text-teal-800">⚡ Rumus Emas Ekuivalensi UTBK (Wajib Hafal!):</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Kontraposisi (Setara dengan Implikasi):</strong> (p → q) ≡ (~q → ~p)</li>
                        <li><strong>Ubah Implikasi ke ATAU:</strong> (p → q) ≡ (~p ∨ q)</li>
                        <li><strong>Negasi (Ingkaran) Implikasi:</strong> ~(p → q) ≡ (p ∧ ~q) <em>("p terjadi TETAPI q tidak terjadi")</em></li>
                        <li><strong>Hukum De Morgan:</strong> ~(p ∧ q) ≡ (~p ∨ ~q) dan ~(p ∨ q) ≡ (~p ∧ ~q)</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Pernyataan mana yang setara (ekuivalen) dengan: 'Jika subsidi pupuk ditambah, maka produksi padi meningkat'?",
                langkah: "Misalkan p = subsidi pupuk ditambah, q = produksi padi meningkat. Kalimat p → q hanya setara dengan kontraposisinya (~q → ~p) atau (~p ∨ q). Kontraposisinya: 'Jika produksi padi TIDAK meningkat, maka subsidi pupuk TIDAK ditambah'."
            },
            gameQuestions: [
                {
                    q: "Ingkaran (negasi) yang paling tepat dari pernyataan: 'Jika harga bahan bakar naik, maka ongkos logistik meningkat' adalah...",
                    opts: [
                        "Jika harga bahan bakar tidak naik, maka ongkos logistik tidak meningkat.",
                        "Jika ongkos logistik tidak meningkat, maka harga bahan bakar tidak naik.",
                        "Harga bahan bakar naik, tetapi ongkos logistik tidak meningkat.",
                        "Harga bahan bakar tidak naik atau ongkos logistik meningkat."
                    ],
                    ans: 2,
                    exp: "Negasi dari implikasi ~(p → q) adalah (p ∧ ~q), yaitu: 'Harga bahan bakar naik (p), tetapi ongkos logistik tidak meningkat (~q)'."
                },
                {
                    q: "Pernyataan 'Jika mahasiswa lulus ujian komprehensif, maka ia berhak mengikuti wisuda' memiliki nilai kebenaran yang SAMA (ekuivalen) dengan...",
                    opts: [
                        "Jika mahasiswa berhak mengikuti wisuda, maka ia lulus ujian komprehensif.",
                        "Jika mahasiswa tidak berhak mengikuti wisuda, maka ia tidak lulus ujian komprehensif.",
                        "Mahasiswa lulus ujian komprehensif dan ia tidak berhak mengikuti wisuda.",
                        "Jika mahasiswa tidak lulus ujian komprehensif, maka ia tidak berhak mengikuti wisuda."
                    ],
                    ans: 1,
                    exp: "Implikasi (p → q) selalu ekuivalen dengan kontraposisinya (~q → ~p): 'Jika tidak berhak wisuda (~q), maka tidak lulus ujian komprehensif (~p)'."
                },
                {
                    q: "Diketahui pernyataan majemuk: 'Raka belajar kimia ATAU Raka bermain futsal' bernilai SALAH. Manakah kondisi di bawah ini yang pasti benar?",
                    opts: [
                        "Raka belajar kimia tetapi tidak bermain futsal.",
                        "Raka tidak belajar kimia tetapi bermain futsal.",
                        "Raka tidak belajar kimia dan tidak bermain futsal.",
                        "Jika Raka belajar kimia, maka ia bermain futsal."
                    ],
                    ans: 2,
                    exp: "Disjungsi (p ∨ q) hanya bernilai SALAH apabila kedua komponennya bernilai salah (~p ∧ ~q), artinya Raka tidak belajar kimia dan tidak bermain futsal."
                }
            ]
        },
        {
            key: "pu_0_1",
            kategori: "Logika Dasar",
            judul: "Proposisi, Kalimat Terbuka/Tertutup",
            ringkasan: `
                <p>Dalam logika penalaran, tidak semua kalimat bahasa Indonesia disebut sebagai <strong>proposisi (pernyataan)</strong>. Membedakan proposisi dan kalimat terbuka sangat penting untuk memvalidasi premis argumen.</p>
                <ul class="list-disc pl-5 my-2.5 space-y-1.5 text-xs">
                    <li><strong>Proposisi (Kalimat Tertutup / Pernyataan):</strong> Kalimat deklaratif (berita) yang sudah pasti bernilai <strong>Benar saja</strong> atau <strong>Salah saja</strong> secara objektif, tidak boleh keduanya sekaligus.</li>
                    <li><strong>Bukan Proposisi:</strong> Kalimat perintah, kalimat tanya, kalimat harapan/doa, dan opini subjektif ("Lukisan itu sangat indah").</li>
                    <li><strong>Kalimat Terbuka:</strong> Kalimat yang memuat <em>variabel (peubah)</em> sehingga nilai kebenarannya belum bisa ditentukan sebelum variabelnya diganti dengan nilai tertentu. Contoh: "2x + 5 = 11" atau "Kota X adalah ibu kota provinsi Jawa Barat".</li>
                </ul>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
                    <strong>💡 Trik Cepat UTBK:</strong> Untuk mengubah <em>kalimat terbuka</em> menjadi <em>proposisi tertutup</em>, kita bisa melakukan dua cara: (1) Mengganti variabel dengan konstanta spesifik, atau (2) Menambahkan kuantor (Semua / Ada) di depannya.
                </div>
            `,
            contoh: {
                soal: "Manakah di antara kalimat berikut yang merupakan proposisi bernilai salah? (A) Semoga besok tidak hujan (B) 3x - 6 = 12 (C) Semua bilangan prima adalah bilangan ganjil.",
                langkah: "(A) adalah kalimat harapan (bukan proposisi). (B) adalah kalimat terbuka karena ada variabel x. (C) adalah proposisi tertutup yang bernilai SALAH karena ada bilangan prima yang genap yaitu 2."
            },
            gameQuestions: [
                {
                    q: "Manakah di antara kalimat berikut yang termasuk PROPOSISI (kalimat tertutup)?",
                    opts: [
                        "Apakah semua logam dapat menghantarkan arus listrik?",
                        "Bilangan x habis dibagi oleh 4 dan 6.",
                        "Air murni pada tekanan 1 atm membeku pada suhu 100 derajat Celsius.",
                        "Sebaiknya pemerintah segera menurunkan pajak kendaraan listrik."
                    ],
                    ans: 2,
                    exp: "Kalimat 'Air murni pada tekanan 1 atm membeku pada suhu 100°C' adalah kalimat berita objektif yang sudah pasti nilai kebenarannya (yaitu bernilai Salah, karena membeku pada 0°C). Maka kalimat tersebut adalah proposisi."
                },
                {
                    q: "Diketahui kalimat terbuka P(n): 'n² − 4n + 3 < 0 dengan n adalah bilangan bulat'. Nilai n berapakah yang mengubah P(n) menjadi proposisi bernilai BENAR?",
                    opts: [
                        "n = 1",
                        "n = 2",
                        "n = 3",
                        "n = 4"
                    ],
                    ans: 1,
                    exp: "Substitusikan n = 2 ke n² − 4n + 3: diperoleh (2)² − 4(2) + 3 = 4 − 8 + 3 = −1. Karena −1 < 0, maka untuk n = 2 kalimat tersebut menjadi proposisi bernilai BENAR."
                },
                {
                    q: "Mengapa kalimat 'Logam X berwujud cair pada suhu ruang' dikategorikan sebagai kalimat terbuka?",
                    opts: [
                        "Karena tidak ada logam yang berwujud cair pada suhu ruang.",
                        "Karena kalimat tersebut mengandung variabel X yang belum ditentukan unsurnya.",
                        "Karena merupakan kalimat perintah di laboratorium.",
                        "Karena selalu bernilai benar untuk semua unsur kimia."
                    ],
                    ans: 1,
                    exp: "Simbol 'Logam X' adalah peubah (variabel). Jika X = Raksa (Hg) maka bernilai Benar, sedangkan jika X = Besi (Fe) maka bernilai Salah. Karena nilai kebenarannya bergantung pada X, ia adalah kalimat terbuka."
                }
            ]
        },
        {
            key: "pu_0_2",
            kategori: "Logika Dasar",
            judul: "Logika Kuantor, Operasi Logika",
            ringkasan: `
                <p><strong>Logika Kuantor</strong> mengatur pernyataan yang mengandung kata jumlah seperti <em>Semua</em>, <em>Setiap</em>, <em>Sebagian</em>, <em>Ada</em>, atau <em>Tidak ada</em>. Soal UTBK sangat sering menanyakan <strong>ingkaran (negasi)</strong> maupun <strong>kesetaraan</strong> dari kalimat berkuantor.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Kuantor</th>
                                <th class="p-2 border border-slate-200 text-left">Kata Kunci</th>
                                <th class="p-2 border border-slate-200 text-left">Ingkaran (Negasi)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Universal (∀)</td>
                                <td class="p-2">Semua, Setiap, Seluruh</td>
                                <td class="p-2"><strong>Ada / Sebagian / Beberapa</strong> ... yang <strong>TIDAK</strong> ...</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Eksistensial (∃)</td>
                                <td class="p-2">Ada, Beberapa, Sebagian, Sementara</td>
                                <td class="p-2"><strong>Semua / Setiap</strong> ... <strong>TIDAK</strong> ... (Tidak ada ... yang ...)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1">
                    <div class="font-bold text-teal-800">⚠️ Jebakan Umum UTBK:</div>
                    <p>Ingkaran dari <em>"Semua peserta lulus"</em> <strong>BUKAN</strong> <em>"Semua peserta tidak lulus"</em>, melainkan cukup <strong>"Ada/sebagian peserta yang tidak lulus"</strong>. Satu saja contoh penyangkal sudah cukup untuk menggugurkan klaim "Semua".</p>
                </div>
            `,
            contoh: {
                soal: "Tentukan ingkaran dari: 'Semua warga desa memiliki kartu sehat dan mendapat bantuan pangan'.",
                langkah: "Kuantor 'Semua' berubah menjadi 'Ada/Sebagian'. Bagian sifat menggunakan Hukum De Morgan: ~(A dan B) = (~A atau ~B). Hasilnya: 'Ada warga desa yang TIDAK memiliki kartu sehat ATAU TIDAK mendapat bantuan pangan'."
            },
            gameQuestions: [
                {
                    q: "Ingkaran (negasi) yang tepat dari pernyataan: 'Semua peserta UTBK di ruangan ini membawa kartu ujian dan pensil kayu' adalah...",
                    opts: [
                        "Semua peserta UTBK di ruangan ini tidak membawa kartu ujian dan tidak membawa pensil kayu.",
                        "Ada peserta UTBK di ruangan ini yang tidak membawa kartu ujian atau tidak membawa pensil kayu.",
                        "Sebagian peserta UTBK di ruangan ini membawa kartu ujian tetapi tidak membawa pensil kayu.",
                        "Tidak ada peserta UTBK di ruangan ini yang membawa kartu ujian maupun pensil kayu."
                    ],
                    ans: 1,
                    exp: "Negasi dari 'Semua x, (P ∧ Q)' adalah 'Ada/Sebagian x, (~P ∨ ~Q)': Ada peserta UTBK di ruangan ini yang tidak membawa kartu ujian ATAU tidak membawa pensil kayu."
                },
                {
                    q: "Pernyataan 'Tidak ada mamalia laut yang bernapas menggunakan insang' memiliki arti yang sama (ekuivalen) dengan...",
                    opts: [
                        "Sebagian mamalia laut tidak bernapas menggunakan insang.",
                        "Semua mamalia laut bernapas tidak menggunakan insang.",
                        "Semua yang tidak bernapas menggunakan insang adalah mamalia laut.",
                        "Ada mamalia laut yang bernapas menggunakan paru-paru."
                    ],
                    ans: 1,
                    exp: "Kalimat 'Tidak ada A yang B' secara logika identik dengan kuantor universal negatif: 'Semua A adalah bukan B' (Semua mamalia laut tidak bernapas menggunakan insang)."
                },
                {
                    q: "Jika pernyataan 'Beberapa ilmuwan di laboratorium itu fasih berbahasa Jerman' bernilai SALAH, maka kesimpulan yang PASTI BENAR adalah...",
                    opts: [
                        "Sebagian ilmuwan di laboratorium itu tidak fasih berbahasa Jerman.",
                        "Semua ilmuwan di laboratorium itu fasih berbahasa Jerman.",
                        "Tidak ada satu pun ilmuwan di laboratorium itu yang fasih berbahasa Jerman.",
                        "Hanya satu ilmuwan di laboratorium itu yang fasih berbahasa Jerman."
                    ],
                    ans: 2,
                    exp: "Jika pernyataan eksistensial ('Beberapa A adalah B') bernilai SALAH, maka negasinya bernilai BENAR, yaitu 'Semua A tidak B' atau 'Tidak ada satu pun ilmuwan yang fasih berbahasa Jerman'."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 1: PENALARAN DEDUKTIF (6 SUB-MATERI)
        // =====================================================================
        {
            key: "pu_1_0",
            kategori: "Penalaran Deduktif",
            judul: "Silogisme",
            ringkasan: `
                <p><strong>Silogisme</strong> adalah penarikan kesimpulan dari dua premis yang memiliki <em>suku tengah (jembatan penghubung)</em>. Ada dua bentuk utama yang wajib kamu kuasai:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div class="font-bold text-slate-900 mb-1">1. Silogisme Hipotetis (Berantai)</div>
                        <p class="font-mono text-teal-700 mb-1">Premis 1: p → q<br>Premis 2: q → r<br>∴ Simpulan: p → r</p>
                        <p class="text-slate-600">Dan kontraposisinya: <strong>~r → ~p</strong></p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div class="font-bold text-slate-900 mb-1">2. Silogisme Kategoris (Semua - Sebagian)</div>
                        <p class="font-mono text-indigo-700 mb-1">Premis 1: Semua A adalah B<br>Premis 2: Sebagian C adalah A<br>∴ Simpulan: Sebagian C adalah B</p>
                        <p class="text-slate-600">Jika ada premis "Sebagian", simpulan wajib "Sebagian".</p>
                    </div>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Trik Cepat UTBK:</strong> Jika Premis 2 belum berbentuk <em>q → r</em> (misalnya berbentuk <em>~r → ~q</em> atau <em>~q ∨ r</em>), ubah dulu Premis 2 ke bentuk implikasi standar <em>q → r</em> menggunakan kontraposisi sebelum menyambung rantai!
                </div>
            `,
            contoh: {
                soal: "P1: Jika curah hujan tinggi, maka debit sungai naik. P2: Jika pintu air tidak dibuka, maka debit sungai tidak naik. Simpulannya?",
                langkah: "Ubah P2 dengan kontraposisi: 'Jika debit sungai naik (q), maka pintu air dibuka (r)'. Sambungkan dengan P1 (p → q): diperoleh p → r, yaitu 'Jika curah hujan tinggi, maka pintu air dibuka'."
            },
            gameQuestions: [
                {
                    q: "Premis 1: Jika inflasi terkendali, maka daya beli masyarakat meningkat.\nPremis 2: Jika daya beli masyarakat meningkat, maka pertumbuhan ekonomi daerah naik.\nSimpulan yang sah adalah...",
                    opts: [
                        "Jika pertumbuhan ekonomi daerah naik, maka inflasi terkendali.",
                        "Jika pertumbuhan ekonomi daerah tidak naik, maka inflasi tidak terkendali.",
                        "Jika inflasi tidak terkendali, maka pertumbuhan ekonomi daerah tidak naik.",
                        "Inflasi terkendali dan pertumbuhan ekonomi daerah naik."
                    ],
                    ans: 1,
                    exp: "Dari p → q dan q → r diperoleh simpulan p → r ('Jika inflasi terkendali, maka pertumbuhan ekonomi naik'). Bentuk ini ekuivalen dengan kontraposisinya (~r → ~p): 'Jika pertumbuhan ekonomi daerah tidak naik, maka inflasi tidak terkendali'."
                },
                {
                    q: "Premis 1: Semua senyawa hidrokarbon mengandung unsur karbon dan hidrogen.\nPremis 2: Sebagian bahan bakar pesawat merupakan senyawa hidrokarbon.\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Semua bahan bakar pesawat mengandung unsur karbon dan hidrogen.",
                        "Sebagian bahan bakar pesawat mengandung unsur karbon dan hidrogen.",
                        "Sebagian senyawa hidrokarbon bukan bahan bakar pesawat.",
                        "Semua yang mengandung karbon dan hidrogen adalah bahan bakar pesawat."
                    ],
                    ans: 1,
                    exp: "Suku penengahnya adalah 'senyawa hidrokarbon'. Karena sebagian bahan bakar pesawat termasuk di dalamnya, maka sebagian bahan bakar pesawat pasti memiliki sifat senyawa hidrokarbon (mengandung unsur karbon dan hidrogen)."
                },
                {
                    q: "Premis 1: Jika kualitas baterai litium murni, maka daya simpan energi optimal.\nPremis 2: Mobil listrik tidak dapat menempuh jarak 500 km ATAU kualitas baterai litium murni.\nSimpulan yang tepat adalah...",
                    opts: [
                        "Jika mobil listrik dapat menempuh jarak 500 km, maka daya simpan energi optimal.",
                        "Jika daya simpan energi optimal, maka mobil listrik dapat menempuh jarak 500 km.",
                        "Mobil listrik dapat menempuh jarak 500 km dan daya simpan energi optimal.",
                        "Jika mobil listrik tidak dapat menempuh jarak 500 km, maka daya simpan energi tidak optimal."
                    ],
                    ans: 0,
                    exp: "Ingat (~a ∨ p) ≡ (a → p). Maka Premis 2 setara dengan: 'Jika mobil listrik dapat menempuh 500 km (a), maka kualitas baterai litium murni (p)'. Digabung dengan Premis 1 (p → q), diperoleh (a → q): 'Jika mobil listrik dapat menempuh jarak 500 km, maka daya simpan energi optimal'."
                }
            ]
        },
        {
            key: "pu_1_1",
            kategori: "Penalaran Deduktif",
            judul: "Modus Ponens",
            ringkasan: `
                <p><strong>Modus Ponens</strong> (kaidah penguatan sebab) adalah aturan penarikan kesimpulan paling langsung: jika syarat (sebab) terpenuhi, maka akibatnya pasti terjadi.</p>
                <div class="my-3 p-3.5 rounded-xl bg-slate-100 font-mono text-xs text-slate-900">
                    Premis 1 : p → q (Jika p terjadi, maka q terjadi)<br>
                    Premis 2 : p (Faktanya p benar-benar terjadi)<br>
                    ----------------------------------------------<br>
                    Simpulan : ∴ q (Maka q pasti terjadi)
                </div>
                <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-1">
                    <div class="font-bold text-rose-800">🚫 Awas Sesat Pikir (Fallacy of Affirming the Consequent):</div>
                    <p>Jika Premis 1 adalah <strong>p → q</strong> dan Premis 2 adalah <strong>q</strong> (akibatnya yang terjadi), kamu <strong>TIDAK BOLEH</strong> menyimpulkan <strong>p</strong>! Contoh: "Jika hujan maka jalan basah. Sekarang jalan basah." Belum tentu karena hujan (bisa saja disiram mobil pemadam).</p>
                </div>
            `,
            contoh: {
                soal: "Jika kadar gula darah puasa di atas 126 mg/dL, pasien didiagnosis diabetes. Hasil lab Pak Budi menunjukkan gula darah puasa 145 mg/dL. Simpulannya?",
                langkah: "Karena 145 mg/dL berada di atas 126 mg/dL, maka syarat p terpenuhi. Berdasarkan Modus Ponens, akibat q pasti terjadi: 'Pak Budi didiagnosis diabetes'."
            },
            gameQuestions: [
                {
                    q: "Premis 1: Jika indeks pencemaran udara melebihi angka 150, maka kegiatan olahraga luar ruangan sekolah diliburkan.\nPremis 2: Hari ini indeks pencemaran udara di Kota X tercatat sebesar 175.\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Sebagian sekolah di Kota X tetap mengadakan olahraga luar ruangan.",
                        "Hari ini kegiatan olahraga luar ruangan sekolah di Kota X diliburkan.",
                        "Besok indeks pencemaran udara akan turun di bawah 150.",
                        "Indeks pencemaran udara naik karena olahraga luar ruangan."
                    ],
                    ans: 1,
                    exp: "Angka 175 > 150 berarti syarat p terpenuhi. Dengan Modus Ponens (p → q, p ∴ q), kesimpulannya pasti q: Kegiatan olahraga luar ruangan sekolah diliburkan."
                },
                {
                    q: "Premis 1: Apabila nilai tukar rupiah menguat DAN cadangan devisa naik, maka bank sentral menurunkan suku bunga acuan.\nPremis 2: Kuartal ini nilai tukar rupiah menguat serta cadangan devisa naik.\nSimpulan yang sah adalah...",
                    opts: [
                        "Bank sentral menurunkan suku bunga acuan.",
                        "Bank sentral mempertahankan suku bunga acuan.",
                        "Inflasi nasional turun drastis.",
                        "Cadangan devisa naik karena suku bunga diturunkan."
                    ],
                    ans: 0,
                    exp: "Syarat majemuk (p ∧ q) keduanya telah terpenuhi pada Premis 2. Sesuai Modus Ponens, konsekuennya pasti berlaku: Bank sentral menurunkan suku bunga acuan."
                },
                {
                    q: "Diketahui aturan: 'Jika suatu larutan bersifat asam kuat, maka kertas lakmus biru akan berubah menjadi merah'. Ketika diuji, larutan Z mengubah kertas lakmus biru menjadi merah. Apa yang dapat disimpulkan secara logis?",
                    opts: [
                        "Larutan Z pasti merupakan asam kuat.",
                        "Larutan Z bukan asam kuat.",
                        "Belum dapat dipastikan apakah larutan Z adalah asam kuat atau asam lemah.",
                        "Semua larutan yang mengubah lakmus biru menjadi merah adalah asam kuat."
                    ],
                    ans: 2,
                    exp: "Hati-hati jebakan konvers! Diketahui p → q dan fakta q (lakmus biru jadi merah). Dari p → q dan q, kita TIDAK BISA memastikan p (karena asam lemah pun mengubah lakmus biru menjadi merah). Jadi belum dapat dipastikan."
                }
            ]
        },
        {
            key: "pu_1_2",
            kategori: "Penalaran Deduktif",
            judul: "Modus Tollens",
            ringkasan: `
                <p><strong>Modus Tollens</strong> (kaidah penolakan akibat) menyatakan bahwa apabila akibat (konsekuen) <strong>tidak terjadi</strong>, maka penyebabnya (antiseden) <strong>pasti tidak terjadi</strong>.</p>
                <div class="my-3 p-3.5 rounded-xl bg-slate-100 font-mono text-xs text-slate-900">
                    Premis 1 : p → q (Jika p terjadi, maka q terjadi)<br>
                    Premis 2 : ~q (Faktanya q TIDAK terjadi)<br>
                    ----------------------------------------------<br>
                    Simpulan : ∴ ~p (Maka p pasti TIDAK terjadi)
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                    <div class="font-bold text-amber-900">⚡ Kombinasi Modus Tollens + De Morgan (Sering Keluar!):</div>
                    <p>Jika Premis 1 adalah <strong>(a ∧ b) → c</strong> lalu diketahui <strong>~c</strong>, maka simpulannya adalah <strong>~(a ∧ b) ≡ (~a ∨ ~b)</strong>! Perhatikan kata "DAN" berubah menjadi "ATAU".</p>
                </div>
            `,
            contoh: {
                soal: "Jika pelamar memiliki sertifikat TOEFL ≥ 550 dan pengalaman kerja 2 tahun, ia lolos seleksi administrasi. Dika tidak lolos seleksi administrasi. Simpulannya?",
                langkah: "Karena ~c (tidak lolos), maka ~(a ∧ b) = ~a ∨ ~b: 'Dika tidak memiliki sertifikat TOEFL ≥ 550 ATAU pengalamannya kurang dari 2 tahun'."
            },
            gameQuestions: [
                {
                    q: "Premis 1: Jika tanaman mendapatkan penyinaran matahari cukup dan tanahnya subur, maka hasil panennya melimpah.\nPremis 2: Hasil panen tahun ini tidak melimpah.\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Tanaman tidak mendapatkan penyinaran matahari cukup dan tanahnya tidak subur.",
                        "Tanaman tidak mendapatkan penyinaran matahari cukup atau tanahnya tidak subur.",
                        "Jika hasil panen tidak melimpah, maka tanahnya tidak subur.",
                        "Tanaman mendapatkan penyinaran matahari cukup, tetapi tanahnya tidak subur."
                    ],
                    ans: 1,
                    exp: "Dari (a ∧ b) → c dan fakta ~c, berdasarkan Modus Tollens diperoleh ~(a ∧ b). Berdasarkan Hukum De Morgan, ~(a ∧ b) ≡ (~a ∨ ~b): Tanaman tidak mendapat penyinaran cukup ATAU tanahnya tidak subur."
                },
                {
                    q: "Premis 1: Jika sistem pendingin reaktor berfungsi normal, maka suhu inti stabil di bawah 300°C.\nPremis 2: Saat ini suhu inti mencapai 380°C.\nSimpulan yang sah adalah...",
                    opts: [
                        "Sistem pendingin reaktor berfungsi normal.",
                        "Sistem pendingin reaktor tidak berfungsi normal.",
                        "Suhu inti naik karena reaktor dimatikan.",
                        "Tidak dapat ditarik kesimpulan."
                    ],
                    ans: 1,
                    exp: "Suhu 380°C berarti suhu inti TIDAK stabil di bawah 300°C (~q). Dengan Modus Tollens (p → q, ~q ∴ ~p), maka sistem pendingin reaktor pasti tidak berfungsi normal (~p)."
                },
                {
                    q: "Premis 1: Jika dana riset cair tepat waktu, maka survei lapangan selesai bulan Juli.\nPremis 2: Jika survei lapangan selesai bulan Juli, maka laporan publikasi terbit bulan September.\nFaktanya, laporan publikasi TIDAK terbit bulan September. Simpulan yang benar adalah...",
                    opts: [
                        "Survei lapangan selesai bulan Juli tetapi dana riset terlambat.",
                        "Dana riset tidak cair tepat waktu.",
                        "Dana riset cair tepat waktu tetapi laporan ditunda.",
                        "Survei lapangan tetap selesai bulan Juli."
                    ],
                    ans: 1,
                    exp: "Gabungan P1 dan P2 memberi p → r. Karena ~r (laporan tidak terbit September), dengan Modus Tollens diperoleh ~p: Dana riset tidak cair tepat waktu."
                }
            ]
        },
        {
            key: "pu_1_3",
            kategori: "Penalaran Deduktif",
            judul: "Memperkuat / Memperlemah Argumen",
            ringkasan: `
                <p>Tipe soal <strong>Memperkuat (Strengthen)</strong> dan <strong>Memperlemah (Weaken)</strong> adalah ciri khas TPS UTBK terbaru. Setiap argumen dalam teks selalu memiliki tiga komponen: <strong>Data/Bukti → (Asumsi Tersembunyi) → Klaim/Kesimpulan</strong>.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
                    <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                        <div class="font-bold text-emerald-800 mb-1">✅ Cara MEMPERKUAT Argumen:</div>
                        <ul class="list-disc pl-4 space-y-1">
                            <li>Berikan fakta pendukung bahwa penyebab memang menghasilkan akibat tersebut.</li>
                            <li>Tunjukkan tidak ada faktor pengganggu lain.</li>
                            <li>Buktikan efek serupa berhasil di tempat/kondisi yang relevan.</li>
                        </ul>
                    </div>
                    <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
                        <div class="font-bold text-rose-800 mb-1">❌ Cara MEMPERLEMAH Argumen:</div>
                        <ul class="list-disc pl-4 space-y-1">
                            <li>Serang asumsi tersembunyinya!</li>
                            <li>Tunjukkan adanya <em>penyebab alternatif</em> (faktor lain yang sebenarnya memicu hasil).</li>
                            <li>Tunjukkan efek samping yang justru menggagalkan tujuan utama.</li>
                        </ul>
                    </div>
                </div>
            `,
            contoh: {
                soal: "Argumen: 'Pemasangan kamera tilang elektronik (ETLE) di perempatan X akan menurunkan angka kecelakaan secara drastis.' Fakta mana yang MEMPERLEMAH argumen tersebut?",
                langkah: "Cari fakta yang mematahkan hubungan antara kamera ETLE dan kecelakaan di perempatan X. Misalnya: '90% kecelakaan di perempatan X disebabkan oleh jalan berlubang dan lampu jalan yang mati pada malam hari, bukan pelanggaran rambu'."
            },
            gameQuestions: [
                {
                    q: "Pakar Kesehatan: 'Mengonsumsi teh hijau tanpa gula dua cangkir sehari efektif menurunkan risiko obesitas pada pekerja kantoran karena kandungan katekinnya mempercepat metabolisme lemak.'\nManakah pernyataan yang paling MEMPERLEMAH argumen pakar tersebut?",
                    opts: [
                        "Harga teh hijau murni lebih mahal dibandingkan teh hitam biasa.",
                        "Pekerja kantoran yang rutin minum teh hijau umumnya tetap mengonsumsi camilan tinggi kalori secara berlebihan saat lembur.",
                        "Teh hijau juga mengandung antioksidan yang baik untuk kesehatan pembuluh darah.",
                        "Sebagian pekerja kantoran lebih menyukai kopi hitam daripada teh hijau."
                    ],
                    ans: 1,
                    exp: "Pernyataan bahwa peminum teh hijau tetap mengonsumsi camilan tinggi kalori berlebih menunjukkan bahwa efek pembakaran lemak dari katekin akan tertutup oleh surplus kalori harian, sehingga klaim efektif menurunkan obesitas menjadi lemah."
                },
                {
                    q: "Manajer Pabrik: 'Mengganti lampu pijar gudang dengan lampu sensor gerak LED akan memangkas tagihan listrik bulanan perusahaan hingga 35%.'\nManakah temuan di bawah ini yang paling MEMPERKUAT klaim manajer tersebut?",
                    opts: [
                        "Gudang hanya dimasuki petugas selama total 2 jam per hari, sementara sebelumnya lampu pijar menyala 24 jam penuh.",
                        "Lampu sensor gerak LED membutuhkan biaya pemasangan awal yang cukup tinggi.",
                        "Kantor pusat perusahaan sudah menggunakan panel surya sejak tahun lalu.",
                        "Karyawan gudang bekerja dalam dua sif siang dan malam."
                    ],
                    ans: 0,
                    exp: "Fakta bahwa gudang hanya aktif 2 jam sehari sedangkan lampu lama menyala 24 jam membuktikan bahwa sensor gerak akan mematikan lampu selama 22 jam sehari, sehingga penghematan listrik drastis sangat logis tercapai."
                },
                {
                    q: "Peneliti Pendidikan: 'Sekolah yang menerapkan larangan membawa ponsel pintar ke dalam kelas mengalami peningkatan rata-rata nilai ujian matematika sebesar 18%.'\nFakta manakah yang jika benar paling MEMPERLEMAH kesimpulan bahwa larangan ponsel adalah penyebab kenaikan nilai tersebut?",
                    opts: [
                        "Siswa menjadi lebih fokus mencatat penjelasan guru di papan tulis.",
                        "Bersamaan dengan larangan ponsel, sekolah tersebut juga menambah jam bimbingan intensif matematika setiap sore.",
                        "Orang tua siswa mendukung penuh kebijakan larangan membawa ponsel ke kelas.",
                        "Nilai mata pelajaran bahasa juga mengalami sedikit kenaikan."
                    ],
                    ans: 1,
                    exp: "Adanya tambahan jam bimbingan intensif matematika setiap sore memberikan PENYEBAB ALTERNATIF (confounding variable), sehingga belum tentu kenaikan nilai 18% itu murni karena larangan ponsel."
                }
            ]
        },
        {
            key: "pu_1_4",
            kategori: "Penalaran Deduktif",
            judul: "Evaluasi Bukti & Premis",
            ringkasan: `
                <p>Dalam soal <strong>Evaluasi Bukti & Kualitas Simpulan</strong>, kamu diminta menilai hubungan antara data pada teks dengan suatu pernyataan baru. Kategorinya biasanya terbagi menjadi:</p>
                <ul class="list-disc pl-5 my-2.5 space-y-1.5 text-xs">
                    <li><strong>Pasti Benar:</strong> Pernyataan 100% didukung oleh teks atau merupakan konsekuensi logis mutlak dari premis teks.</li>
                    <li><strong>Pasti Salah:</strong> Pernyataan bertentangan langsung (kontradiktif) dengan data eksplisit di dalam teks.</li>
                    <li><strong>Mungkin Benar:</strong> Pernyataan sejalan tapi belum cukup bukti untuk dipastikan 100%.</li>
                    <li><strong>Tidak Relevan:</strong> Pernyataan membahas variabel di luar konteks sebab-akibat yang dibicarakan teks.</li>
                </ul>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Kunci Penting:</strong> Jangan pernah menggunakan asumsi pribadi di luar teks! Ukurlah kebenaran pernyataan <em>semata-mata</em> berdasarkan fakta yang tertulis pada paragraf soal.
                </div>
            `,
            contoh: {
                soal: "Teks: 'Semua spesies bakau mampu bertahan di air payau. Tanaman A mati ketika ditanam di air payau.' Nilai pernyataan: 'Tanaman A adalah spesies bakau'.",
                langkah: "Karena semua bakau tahan air payau sedangkan Tanaman A mati di air payau, maka Tanaman A pasti BUKAN bakau. Maka pernyataan 'Tanaman A adalah bakau' bernilai PASTI SALAH."
            },
            gameQuestions: [
                {
                    q: "Wacana: 'Setiap penerima beasiswa riset unggulan wajib mempublikasikan minimal satu jurnal internasional dan memiliki IPK di atas 3,50. Tahun ini, Dinda memiliki IPK 3,85 tetapi belum mempublikasikan jurnal internasional.'\nBagaimana kualitas simpulan: 'Dinda menerima beasiswa riset unggulan tahun ini'?",
                    opts: [
                        "Simpulan tersebut pasti benar.",
                        "Simpulan tersebut mungkin benar.",
                        "Simpulan tersebut pasti salah.",
                        "Simpulan tidak dapat dinilai karena informasi kurang."
                    ],
                    ans: 2,
                    exp: "Syarat penerima beasiswa adalah konjungsi (jurnal internasional DAN IPK > 3,50). Karena Dinda belum mempublikasikan jurnal, syarat mutlaknya gugur. Dengan Modus Tollens, Dinda pasti bukan penerima beasiswa. Maka klaim bahwa Dinda menerima beasiswa adalah PASTI SALAH."
                },
                {
                    q: "Wacana: 'Konsumsi garam berlebih memicu retensi cairan dalam pembuluh darah yang berujung pada tekanan darah tinggi (hipertensi). Studi menunjukkan 70% penderita hipertensi di Kota M gemar mengonsumsi makanan cepat saji tinggi natrium.'\nPernyataan manakah yang PASTI BENAR berdasarkan wacana?",
                    opts: [
                        "Semua orang yang gemar makan makanan cepat saji di Kota M menderita hipertensi.",
                        "Ada penderita hipertensi di Kota M yang tidak gemar mengonsumsi makanan cepat saji tinggi natrium.",
                        "Garam adalah satu-satunya penyebab penyakit hipertensi di Kota M.",
                        "30% penduduk Kota M bebas dari risiko tekanan darah tinggi."
                    ],
                    ans: 1,
                    exp: "Jika 70% penderita hipertensi di Kota M gemar mengonsumsi makanan cepat saji tinggi natrium, maka sisanya (30% dari penderita hipertensi tersebut) pasti TIDAK gemar mengonsumsinya."
                },
                {
                    q: "Wacana: 'Apabila terumbu karang mengalami pemutihan (bleaching), populasi ikan karang menurun tajam. Jika populasi ikan karang menurun tajam, pendapatan nelayan pesisir berkurang.'\nJika diketahui pendapatan nelayan pesisir meningkat tahun ini, maka simpulan 'Terumbu karang tidak mengalami pemutihan' adalah...",
                    opts: [
                        "Pasti benar",
                        "Pasti salah",
                        "Tidak relevan dengan informasi yang diberikan",
                        "Simpulan tidak valid"
                    ],
                    ans: 0,
                    exp: "Rantai implikasi: Pemutihan (p) → Ikan turun (q) → Pendapatan berkurang (r). Fakta: Pendapatan meningkat (~r). Dengan Modus Tollens berantai (~r → ~p), pasti terumbu karang TIDAK mengalami pemutihan (~p). Jadi simpulan tersebut PASTI BENAR."
                }
            ]
        },
        {
            key: "pu_1_5",
            kategori: "Penalaran Deduktif",
            judul: "Simpulan Logis",
            ringkasan: `
                <p>Menarik <strong>Simpulan Logis</strong> dari paragraf utuh menuntut ketelitian agar tidak terjebak pada opsi yang terdengar bagus tetapi melompat terlalu jauh dari teks.</p>
                <div class="my-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div class="font-bold text-slate-900">📋 3 Syarat Simpulan Logis yang Valid di UTBK:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Merangkum rantai utama:</strong> Menggabungkan premis awal (sebab pertama) dengan akibat akhir pada paragraf.</li>
                        <li><strong>Tidak ada kata ekstrem baru:</strong> Hindari memilih opsi yang tiba-tiba memunculkan kata <em>"selalu", "pasti satu-satunya", "tidak pernah"</em> jika di teks hanya tertulis <em>"cenderung", "dapat", "umumnya"</em>.</li>
                        <li><strong>Tidak menambah variabel luar:</strong> Semua istilah pada opsi jawaban harus bersumber dari informasi di dalam teks.</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Teks: 'Kurang tidur menurunkan fungsi korteks prefrontal. Penurunan fungsi korteks prefrontal membuat seseorang sulit berkonsentrasi dan mudah mengambil keputusan impulsif.' Simpulan yang tepat?",
                langkah: "Hubungkan ujung awal ('Kurang tidur') dengan ujung akhir ('sulit berkonsentrasi dan mudah mengambil keputusan impulsif'). Simpulan: 'Orang yang kurang tidur cenderung sulit berkonsentrasi dan mudah mengambil keputusan impulsif'."
            },
            gameQuestions: [
                {
                    q: "Teks: 'Pemanfaatan mikroalga sebagai bahan baku bioavtur mampu menyerap emisi karbon dioksida hingga 80% lebih banyak dibandingkan tanaman kelapa sawit. Selain itu, budidaya mikroalga tidak membutuhkan lahan pertanian subur sehingga tidak mengganggu ketahanan pangan nasional.'\nSimpulan yang paling tepat dari teks tersebut adalah...",
                    opts: [
                        "Tanaman kelapa sawit harus segera dilarang sebagai bahan baku energi terbarukan.",
                        "Mikroalga merupakan alternatif bahan baku bioavtur yang ramah lingkungan sekaligus aman bagi ketahanan pangan.",
                        "Bioavtur dari mikroalga sudah digunakan oleh seluruh maskapai penerbangan dunia.",
                        "Lahan pertanian subur hanya boleh digunakan untuk menanam padi dan jagung."
                    ],
                    ans: 1,
                    exp: "Teks menyoroti dua keunggulan utama mikroalga: menyerap emisi CO2 lebih tinggi (ramah lingkungan) dan tidak memakai lahan subur (aman bagi ketahanan pangan). Opsi B merangkum kedua premis secara presisi tanpa melebih-lebihkan."
                },
                {
                    q: "Teks: 'Ketika kadar hormon kortisol meningkat akibat stres kronis, produksi kolagen kulit terhambat. Terhambatnya produksi kolagen menyebabkan elastisitas kulit berkurang dan mempercepat munculnya kerutan halus.'\nBerdasarkan teks tersebut, simpulan yang paling logis adalah...",
                    opts: [
                        "Semua kerutan halus pada wajah manusia semata-mata disebabkan oleh stres kronis.",
                        "Stres kronis dapat memicu berkurangnya elastisitas kulit dan mempercepat munculnya kerutan halus.",
                        "Krim kolagen tidak berguna bagi orang yang sedang mengalami stres kerja.",
                        "Orang yang tidak mengalami stres kronis tidak akan pernah mengalami penuaan kulit."
                    ],
                    ans: 1,
                    exp: "Rantai kausalitas pada teks: Stres kronis → kortisol naik → kolagen terhambat → elastisitas kulit berkurang & muncul kerutan halus. Maka simpulan yang sah menghubungkan awal dan akhir rantai tersebut."
                },
                {
                    q: "Teks: 'Subsidi kendaraan listrik roda dua meningkat tahun ini, namun angka penjualannya di daerah luar pulau Jawa masih di bawah 10%. Survei menunjukkan bahwa keterbatasan stasiun penukaran baterai menjadi kekhawatiran utama calon pembeli di daerah tersebut.'\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Masyarakat di luar pulau Jawa tidak tertarik dengan program subsidi pemerintah.",
                        "Rendahnya penjualan motor listrik di luar Jawa berkaitan erat dengan belum meratanya infrastruktur stasiun baterai.",
                        "Subsidi kendaraan listrik sebaiknya dialihkan seluruhnya untuk pembangunan jalan raya.",
                        "Motor listrik tidak cocok digunakan di wilayah beriklim tropis."
                    ],
                    ans: 1,
                    exp: "Teks memaparkan fakta rendahnya penjualan di luar Jawa meski ada subsidi, diikuti bukti survei bahwa penyebab utamanya adalah keterbatasan stasiun baterai. Opsi B merangkum hubungan kedua informasi tersebut secara tepat."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 2: PENALARAN INDUKTIF (3 SUB-MATERI)
        // =====================================================================
        {
            key: "pu_2_0",
            kategori: "Penalaran Induktif",
            judul: "Generalisasi",
            ringkasan: `
                <p><strong>Generalisasi Induktif</strong> adalah proses menarik kesimpulan umum dari sejumlah fakta atau pengamatan khusus (sampel). Berbeda dengan deduksi yang bersifat mutlak, simpulan generalisasi bersifat <strong>probabilistik (kemungkinan besar)</strong>.</p>
                <div class="my-3 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5">
                    <div class="font-bold text-teal-800">🔍 Kriteria Generalisasi yang Kuat:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Ukuran sampel memadai:</strong> Semakin banyak kasus khusus yang diamati memiliki sifat yang sama, semakin kuat generalisasinya.</li>
                        <li><strong>Sampel representatif (beragam):</strong> Pengamatan mencakup berbagai kelompok yang mewakili populasi.</li>
                        <li><strong>Rumusan kesimpulan proporsional:</strong> Menggunakan kata seperti <em>"Pada umumnya...", "Sebagian besar...", "Cenderung..."</em> jika masih ada kemungkinan pengecualian.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Besi memuai jika dipanaskan. Tembaga memuai jika dipanaskan. Aluminium dan perak juga memuai jika dipanaskan. Generalisasi yang tepat?",
                langkah: "Besi, tembaga, aluminium, dan perak semuanya adalah anggota kelas 'Logam'. Maka generalisasi induktifnya: 'Semua (atau pada umumnya) logam akan memuai apabila dipanaskan'."
            },
            gameQuestions: [
                {
                    q: "Hasil uji laboratorium terhadap ekstrak daun jambu biji, daun sirih, dan daun kelor menunjukkan bahwa ketiganya mengandung senyawa flavonoid yang mampu menghambat pertumbuhan bakteri Staphylococcus aureus.\nGeneralisasi induktif yang paling tepat dari temuan tersebut adalah...",
                    opts: [
                        "Semua jenis daun di dunia pasti dapat menyembuhkan penyakit infeksi bakteri.",
                        "Tanaman herbal yang daunnya mengandung senyawa flavonoid cenderung memiliki sifat antibakteri terhadap Staphylococcus aureus.",
                        "Bakteri Staphylococcus aureus hanya dapat dibasmi menggunakan ekstrak daun kelor.",
                        "Obat antibiotik kimia sudah tidak diperlukan lagi di rumah sakit."
                    ],
                    ans: 1,
                    exp: "Ketiga sampel adalah tanaman yang daunnya mengandung flavonoid dan terbukti menghambat bakteri S. aureus. Generalisasi yang proporsional adalah menyimpulkan kecenderungan sifat antibakteri pada daun tanaman yang mengandung flavonoid."
                },
                {
                    q: "Survei di 15 kota besar Indonesia menunjukkan bahwa 88% remaja berusia 15–18 tahun mencari informasi berita melalui platform video pendek, bukan surat kabar cetak.\nPernyataan generalisasi yang paling didukung oleh data tersebut adalah...",
                    opts: [
                        "Surat kabar cetak akan berhenti terbit sepenuhnya pada tahun depan.",
                        "Remaja perkotaan di Indonesia saat ini lebih memilih media visual digital daripada media cetak untuk mengakses berita.",
                        "Seluruh penduduk Indonesia tidak lagi membaca koran.",
                        "Berita di platform video pendek selalu lebih akurat daripada surat kabar cetak."
                    ],
                    ans: 1,
                    exp: "Sampel mencakup 88% remaja di 15 kota besar. Generalisasi yang valid dan tidak melampaui populasi sampel adalah: Remaja perkotaan di Indonesia cenderung memilih media visual digital dibanding media cetak."
                },
                {
                    q: "Seorang wisatawan mengunjungi 3 pantai di Kabupaten Z pada musim hujan dan mendapati ketiga pantai tersebut berombak sangat tinggi. Ia lalu menyimpulkan: 'Seluruh pantai di Kabupaten Z tidak pernah aman untuk berenang sepanjang tahun'.\nMengapa generalisasi wisatawan tersebut dikategorikan LEMAH (cacat logika)?",
                    opts: [
                        "Karena wisatawan tersebut tidak membawa alat pengukur tinggi gelombang.",
                        "Karena sampel pengamatan hanya dilakukan pada satu musim (musim hujan) tetapi disimpulkan untuk sepanjang tahun.",
                        "Karena pantai di kabupaten lain juga memiliki ombak yang tinggi.",
                        "Karena berenang di pantai memang membutuhkan keahlian khusus."
                    ],
                    ans: 1,
                    exp: "Ini adalah cacat Hasty Generalization (generalisasi tergesa-gesa): pengamatan hanya dilakukan pada kondisi khusus (musim hujan di 3 pantai), namun disimpulkan berlaku mutlak sepanjang tahun untuk seluruh pantai."
                }
            ]
        },
        {
            key: "pu_2_1",
            kategori: "Penalaran Induktif",
            judul: "Analogi Hubungan Kata",
            ringkasan: `
                <p><strong>Penalaran Analogi</strong> membandingkan dua hal yang berbeda namun memiliki <strong>pola hubungan logis yang identik</strong>. Kunci utamanya adalah merangkai kedua kata menjadi satu kalimat spesifik yang presisi.</p>
                <div class="my-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <strong>1. Fungsi / Alat:</strong><br>Stetoskop : Dokter = Kompas : Nakhoda
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <strong>2. Sebab → Akibat:</strong><br>Virus : Penyakit = Api : Kebakaran
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <strong>3. Bagian → Keseluruhan:</strong><br>Retina : Mata = Кatup : Jantung
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <strong>4. Urutan / Derajat Intensitas:</strong><br>Gerimis : Badai = Hangat : Mendidih
                    </div>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
                    <strong>💡 Trik Anti-Terjebak:</strong> Pastikan <strong>urutan arah (kiri ke kanan)</strong> dan <strong>kelas katanya</strong> (kata benda : kata benda) persis sama! Jangan sampai terbalik antara <em>Sebab : Akibat</em> dengan <em>Akibat : Sebab</em>.
                </div>
            `,
            contoh: {
                soal: "INSULIN : DIABETES = ... : ...",
                langkah: "Buat kalimat penghubung: 'Kekurangan hormon INSULIN menyebabkan penyakit DIABETES'. Cari pasangan yang berpola 'Kekurangan zat A menyebabkan penyakit B', yaitu: 'ZAT BESI : ANEMIA' (atau Yodium : Gondok)."
            },
            gameQuestions: [
                {
                    q: "KATALIS : LAJU REAKSI = ... : ...\nPilihlah pasangan kata yang memiliki hubungan analogi paling setara!",
                    opts: [
                        "Termometer : Suhu Badan",
                        "Pupuk : Pertumbuhan Tanaman",
                        "Rem : Kecepatan Kendaraan",
                        "Bensin : Tangki Motor"
                    ],
                    ans: 1,
                    exp: "Kalimat penghubung: 'KATALIS berfungsi mempercepat/meningkatkan LAJU REAKSI'. Pola yang identik adalah: 'PUPUK berfungsi mempercepat/meningkatkan PERTUMBUHAN TANAMAN' (sedangkan rem justru memperlambat)."
                },
                {
                    q: "EPIDERMIS : KULIT = ... : ...",
                    opts: [
                        "Atmosfer : Bumi",
                        "Akar : Pohon",
                        "Kornea : Mata",
                        "Tulang : Otot"
                    ],
                    ans: 0,
                    exp: "Kalimat spesifik: 'EPIDERMIS adalah lapisan paling luar yang melindungi KULIT'. Hubungan yang paling presisi adalah: 'ATMOSFER adalah lapisan paling luar yang melindungi BUMI'."
                },
                {
                    q: "Dalam sebuah argumen analogi: 'Mengelola keuangan negara tanpa dana cadangan darurat ibarat berlayar di samudra lepas tanpa sekoci penyelamat.'\nApa intisari pesan logis dari analogi tersebut?",
                    opts: [
                        "Negara kepulauan wajib membeli banyak sekoci penyelamat untuk kapal perang.",
                        "Dana cadangan darurat berfungsi sebagai pelindung vital saat negara menghadapi krisis tak terduga.",
                        "Mengelola keuangan negara jauh lebih mudah daripada mengemudikan kapal di samudra.",
                        "Krisis ekonomi hanya terjadi pada negara yang memiliki wilayah laut luas."
                    ],
                    ans: 1,
                    exp: "Sekoci penyelamat berfungsi menyelamatkan penumpang saat kapal mengalami bahaya darurat di laut; analog dengan dana cadangan yang melindungi negara saat terjadi krisis ekonomi tak terduga."
                }
            ]
        },
        {
            key: "pu_2_2",
            kategori: "Penalaran Induktif",
            judul: "Hubungan Kausalitas (Sebab-Akibat)",
            ringkasan: `
                <p>Soal <strong>Kausalitas (Sebab-Akibat)</strong> menguji kemampuanmu menentukan apakah dua pernyataan (Pernyataan 1 dan Pernyataan 2) saling berhubungan sebagai sebab dan akibat, ataukah keduanya hanya kebetulan / akibat dari satu penyebab lain.</p>
                <div class="my-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div class="font-bold text-slate-900">🎯 5 Pola Pilihan Standar Soal Kausalitas UTBK:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li>Pernyataan 1 adalah <strong>penyebab</strong> dan Pernyataan 2 adalah <strong>akibat</strong>.</li>
                        <li>Pernyataan 2 adalah <strong>penyebab</strong> dan Pernyataan 1 adalah <strong>akibat</strong>.</li>
                        <li>Pernyataan 1 dan 2 adalah <strong>akibat</strong> dari dua penyebab yang tidak saling berhubungan.</li>
                        <li>Pernyataan 1 dan 2 adalah <strong>akibat dari suatu penyebab yang sama</strong>.</li>
                        <li>Pernyataan 1 dan 2 tidak memiliki hubungan kausalitas.</li>
                    </ol>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Trik Uji Cepat:</strong> Pasang kata <strong>"KARENA"</strong> di antara kedua kalimat. Jika <em>"(Kalimat A) terjadi KARENA (Kalimat B)"</em> masuk akal secara ilmiah, maka B adalah Sebab dan A adalah Akibat. Hati-hati: jika A dan B sama-sama dampak dari fenomena C (misal El Nino), pilih opsi <em>"akibat dari suatu penyebab yang sama"</em>!
                </div>
            `,
            contoh: {
                soal: "(1) Banyak petani gagal panen padi musim ini. (2) Harga beras di pasar tradisional melonjak naik.",
                langkah: "Uji dengan kata KARENA: 'Harga beras melonjak naik (2) KARENA banyak petani gagal panen (1)'. Sangat logis sesuai hukum suplai-permintaan! Maka (1) adalah penyebab dan (2) adalah akibat."
            },
            gameQuestions: [
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Kadar gas rumah kaca seperti metana dan karbon dioksida di atmosfer meningkat tajam selama dua dekade terakhir.\n(2) Lapisan es abadi di wilayah kutub utara mencair dengan laju yang semakin cepat.\nHubungan yang tepat antara kedua pernyataan tersebut adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari dua penyebab yang tidak saling berhubungan.",
                        "Pernyataan (1) dan (2) tidak memiliki hubungan sebab-akibat."
                    ],
                    ans: 0,
                    exp: "Peningkatan gas rumah kaca (1) memicu pemanasan suhu global (efek rumah kaca), yang secara langsung mengakibatkan mencairnya lapisan es kutub (2). Jadi (1) adalah penyebab dan (2) adalah akibat."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Penjualan jas hujan dan payung di kota Surabaya meningkat tiga kali lipat pada bulan Januari.\n(2) Debit air Sungai Brantas mengalami kenaikan signifikan pada bulan Januari.\nHubungan kedua pernyataan di atas adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama.",
                        "Pernyataan (1) dan (2) saling bertentangan."
                    ],
                    ans: 2,
                    exp: "Naiknya penjualan jas hujan (1) tidak menyebabkan sungai meluap (2), begitu pula sebaliknya. Keduanya sama-sama merupakan AKIBAT dari satu penyebab yang sama, yaitu tingginya curah hujan di bulan Januari."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Banyak lulusan perguruan tinggi kesulitan mendapatkan pekerjaan yang sesuai dengan bidang keahliannya.\n(2) Kurikulum di sejumlah perguruan tinggi belum disesuaikan dengan kebutuhan industri digital terkini.\nHubungan yang paling tepat adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Keduanya adalah penyebab dari masalah yang berbeda.",
                        "Keduanya tidak berhubungan sama sekali."
                    ],
                    ans: 1,
                    exp: "Uji dengan kata KARENA: 'Lulusan kesulitan mendapat pekerjaan yang sesuai (1) KARENA kurikulum belum disesuaikan dengan kebutuhan industri (2)'. Maka (2) adalah penyebab dan (1) adalah akibat."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 3: PENALARAN KUANTITATIF (9 SUB-MATERI)
        // =====================================================================
        {
            key: "pu_3_0",
            kategori: "Penalaran Kuantitatif",
            judul: "Teori dan Jenis Bilangan",
            ringkasan: `
                <p>Sub-topik <strong>Teori dan Jenis Bilangan</strong> pada Penalaran Umum berfokus pada logika sifat bilangan bulat, bilangan prima, bilangan ganjil-genap, serta keterbagian angka tanpa perlu rumus rumit.</p>
                <div class="my-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div class="font-bold text-slate-900 mb-1">📌 Sifat Ganjil (Gj) & Genap (Gn):</div>
                        <ul class="list-disc pl-4 space-y-0.5">
                            <li>Gj ± Gj = <strong>Genap</strong></li>
                            <li>Gj ± Gn = <strong>Ganjil</strong></li>
                            <li>Gj × Gj = <strong>Ganjil</strong></li>
                            <li>Berapa pun dikali Genap = <strong>Genap</strong></li>
                        </ul>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div class="font-bold text-slate-900 mb-1">📌 Sifat Bilangan Prima:</div>
                        <ul class="list-disc pl-4 space-y-0.5">
                            <li>Bilangan > 1 yang hanya habis dibagi 1 dan dirinya sendiri: {2, 3, 5, 7, 11, 13, 17, 19, ...}.</li>
                            <li><strong>Angka 2</strong> adalah <em>satu-satunya</em> bilangan prima yang genap!</li>
                        </ul>
                    </div>
                </div>
            `,
            contoh: {
                soal: "Jika p dan q adalah bilangan prima berbeda yang lebih besar dari 2, maka hasil dari (p + q) pasti merupakan bilangan...",
                langkah: "Semua bilangan prima > 2 pasti merupakan bilangan GANJIL. Karena Ganjil + Ganjil = Genap, maka (p + q) pasti merupakan bilangan GENAP (dan bukan prima)."
            },
            gameQuestions: [
                {
                    q: "Jika x adalah bilangan ganjil dan y adalah bilangan genap, manakah di antara ekspresi berikut yang PASTI menghasilkan bilangan GANJIL?",
                    opts: [
                        "2x + y",
                        "x² + y²",
                        "xy + y",
                        "(x + 1)(y + 1)"
                    ],
                    ans: 1,
                    exp: "Karena x ganjil maka x² ganjil. Karena y genap maka y² genap. Ganjil + Genap = GANJIL! (Coba x=3, y=2 → 9 + 4 = 13, ganjil)."
                },
                {
                    q: "Diketahui p dan q adalah dua bilangan prima dan berlaku p + q = 31. Berapakah hasil kali dari p × q?",
                    opts: [
                        "58",
                        "62",
                        "87",
                        "93"
                    ],
                    ans: 0,
                    exp: "Jumlah dua bilangan menghasilkan 31 (ganjil) hanya mungkin jika salah satunya GENAP dan satunya GANJIL. Satu-satunya bilangan prima genap adalah p = 2. Maka q = 31 − 2 = 29 (prima). Hasil kali p × q = 2 × 29 = 58."
                },
                {
                    q: "Sebuah bilangan bulat positif N jika dibagi 5 bersisa 3, dan jika dibagi 4 bersisa 1. Manakah bilangan terkecil di bawah ini yang memenuhi nilai N?",
                    opts: [
                        "13",
                        "17",
                        "18",
                        "23"
                    ],
                    ans: 0,
                    exp: "Uji opsi terkecil: 13 dibagi 5 = 2 sisa 3 (memenuhi). 13 dibagi 4 = 3 sisa 1 (memenuhi). Jadi nilai N terkecil adalah 13."
                }
            ]
        },
        {
            key: "pu_3_1",
            kategori: "Penalaran Kuantitatif",
            judul: "Sifat-sifat Bilangan & Operasi",
            ringkasan: `
                <p>Soal <strong>Operasi Bilangan & Taksiran Cepat</strong> di PU sering dirancang untuk menguji kecerdikanmu menghitung pecahan, desimal, dan akar tanpa kalkulator dalam waktu kurang dari 30 detik.</p>
                <div class="my-3 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5">
                    <div class="font-bold text-teal-800">⚡ Pecahan Istimewa & Trik Aljabar Cepat:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Pecahan ke Desimal/Persen:</strong> 1/8 = 0,125 (12,5%); 3/8 = 0,375 (37,5%); 1/6 ≈ 16,67%; 1/3 ≈ 33,33%.</li>
                        <li><strong>Selisih Kuadrat:</strong> a² − b² = (a + b)(a − b). Contoh: 505² − 495² = (1000)(10) = 10.000!</li>
                        <li><strong>Membandingkan Pecahan a/b vs c/d:</strong> Cukup kali silang (a × d) dibanding (b × c).</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Berapakah nilai dari 37,5% × 640 + 12,5% × 640?",
                langkah: "Jangan dihitung satu-satu! Gunakan sifat distributif: (37,5% + 12,5%) × 640 = 50% × 640 = 1/2 × 640 = 320. Selesai dalam 5 detik!"
            },
            gameQuestions: [
                {
                    q: "Hasil dari (2026² − 2024²) / 4 adalah...",
                    opts: [
                        "1012",
                        "2025",
                        "4050",
                        "8100"
                    ],
                    ans: 1,
                    exp: "Gunakan rumus a² − b² = (a + b)(a − b). Maka (2026 + 2024)(2026 − 2024) / 4 = (4050 × 2) / 4 = 8100 / 4 = 2025."
                },
                {
                    q: "Manakah di antara pecahan berikut yang memiliki nilai PALING BESAR?",
                    opts: [
                        "5/8",
                        "7/11",
                        "2/3",
                        "13/20"
                    ],
                    ans: 2,
                    exp: "Ubah ke desimal atau kali silang: 5/8 = 0,625; 7/11 ≈ 0,636; 13/20 = 0,650; sedangkan 2/3 ≈ 0,667. Maka yang paling besar adalah 2/3."
                },
                {
                    q: "Nilai dari 37,5% dari 240 ditambah 1/3 dari 180 adalah...",
                    opts: [
                        "120",
                        "140",
                        "150",
                        "165"
                    ],
                    ans: 2,
                    exp: "Ingat 37,5% = 3/8. Maka (3/8 × 240) + (1/3 × 180) = (3 × 30) + 60 = 90 + 60 = 150."
                }
            ]
        },
        {
            key: "pu_3_2",
            kategori: "Penalaran Kuantitatif",
            judul: "Statistik Dasar & Rata-rata",
            ringkasan: `
                <p>Konsep <strong>Rata-rata (Mean), Median, dan Rata-rata Gabungan</strong> hampir selalu muncul di setiap paket UTBK.</p>
                <div class="my-3 p-3.5 rounded-xl bg-slate-100 text-xs space-y-1.5">
                    <div><strong>1. Jumlah Nilai Total:</strong> Jumlah Data = Rata-rata × Banyaknya Data (S = x̄ × n)</div>
                    <div><strong>2. Rata-rata Gabungan:</strong> x̄_gab = (n₁·x̄₁ + n₂·x̄₂) / (n₁ + n₂)</div>
                    <div><strong>3. Trik Selisih (Metode Jungkat-Jungkit):</strong> Perbandingan jumlah orang n₁ : n₂ berbanding terbalik dengan jarak rata-rata masing-masing ke rata-rata gabungan: <strong>n₁ / n₂ = |x̄₂ − x̄_gab| / |x̄₁ − x̄_gab|</strong></div>
                </div>
            `,
            contoh: {
                soal: "Rata-rata nilai 8 siswa adalah 75. Jika nilai Roni dimasukkan, rata-ratanya menjadi 77. Berapa nilai Roni?",
                langkah: "Total awal (8 siswa) = 8 × 75 = 600. Total baru (9 siswa) = 9 × 77 = 693. Nilai Roni = 693 − 600 = 93."
            },
            gameQuestions: [
                {
                    q: "Rata-rata berat badan 10 pemain basket adalah 72 kg. Ketika 2 pemain cadangan bergabung, rata-rata berat badan seluruhnya menjadi 73,5 kg. Berapakah rata-rata berat badan kedua pemain cadangan tersebut?",
                    opts: [
                        "78 kg",
                        "80 kg",
                        "81 kg",
                        "82,5 kg"
                    ],
                    ans: 2,
                    exp: "Total berat 10 pemain = 10 × 72 = 720 kg. Total berat 12 pemain = 12 × 73,5 = 882 kg. Jumlah berat 2 pemain baru = 882 − 720 = 162 kg. Rata-rata keduanya = 162 / 2 = 81 kg."
                },
                {
                    q: "Rata-rata nilai ujian kimia kelas A adalah 84, sedangkan kelas B adalah 74. Jika nilai kedua kelas digabungkan, rata-ratanya menjadi 80. Berapakah perbandingan jumlah siswa kelas A dan kelas B?",
                    opts: [
                        "2 : 3",
                        "3 : 2",
                        "3 : 4",
                        "4 : 3"
                    ],
                    ans: 1,
                    exp: "Gunakan trik selisih ke rata-rata gabungan (80): Jarak kelas A = |84 − 80| = 4. Jarak kelas B = |74 − 80| = 6. Perbandingan jumlah siswa berbalik nilai dengan jaraknya: nA : nB = 6 : 4 = 3 : 2."
                },
                {
                    q: "Lima bilangan bulat positif terurut dari terkecil hingga terbesar memiliki median 8, modus tunggal 10, dan rata-rata 8. Berapakah jumlah dua bilangan terkecilnya?",
                    opts: [
                        "10",
                        "11",
                        "12",
                        "13"
                    ],
                    ans: 2,
                    exp: "Misalkan 5 data terurut: a, b, c, d, e. Median adalah data ke-3 → c = 8. Modus tunggal 10 berarti angka 10 muncul minimal dua kali di posisi d dan e → d = 10, e = 10. Karena rata-rata = 8, total kelima bilangan = 5 × 8 = 40. Maka a + b = 40 − (8 + 10 + 10) = 40 − 28 = 12."
                }
            ]
        },
        {
            key: "pu_3_3",
            kategori: "Penalaran Kuantitatif",
            judul: "Interpretasi Grafik & Tabel",
            ringkasan: `
                <p>Soal <strong>Interpretasi Grafik, Diagram, dan Tabel Data</strong> menguji ketelitianmu membaca tren, kenaikan/penurunan mutlak, serta <strong>persentase pertumbuhan</strong>.</p>
                <div class="my-3 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
                    <div class="font-bold text-amber-900">⚠️ Bedakan 2 Pertanyaan Ini di UTBK:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Kenaikan Terbesar (Nominal):</strong> Cukup kurangi (Nilai Akhir − Nilai Awal).</li>
                        <li><strong>Persentase Kenaikan Terbesar:</strong> Dihitung terhadap <em>nilai awalnya</em>: <strong>[(Akhir − Awal) / Awal] × 100%</strong>. Nilai awal yang kecil dengan kenaikan sedang sering kali memiliki <em>persentase</em> kenaikan lebih besar!</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Cabang A naik dari 20 ke 30 ton. Cabang B naik dari 100 ke 120 ton. Mana yang persentase kenaikannya lebih tinggi?",
                langkah: "Secara nominal B naik 20 ton dan A naik 10 ton. TAPI secara persentase: A naik (10/20)×100% = 50%, sedangkan B naik (20/100)×100% = 20%. Jadi persentase kenaikan A jauh lebih tinggi!"
            },
            gameQuestions: [
                {
                    q: "Data produksi komoditas ekspor (dalam ribu ton) selama dua tahun:\n• Kopi: 2024 = 40, 2025 = 52\n• Kakao: 2024 = 25, 2025 = 35\n• Teh: 2024 = 50, 2025 = 60\n• Karet: 2024 = 80, 2025 = 96\nKomoditas manakah yang mengalami PERSENTASE kenaikan produksi paling tinggi?",
                    opts: [
                        "Kopi",
                        "Kakao",
                        "Teh",
                        "Karet"
                    ],
                    ans: 1,
                    exp: "Hitung persentase kenaikan [(Akhir − Awal)/Awal × 100%]: Kopi = 12/40 = 30%; Kakao = 10/25 = 40%; Teh = 10/50 = 20%; Karet = 16/80 = 20%. Yang tertinggi adalah Kakao (40%)."
                },
                {
                    q: "Sebuah diagram lingkaran menunjukkan alokasi anggaran riset sebesar Rp 400 juta: Energi Surya 35%, Baterai 25%, Hidrogen 15%, dan sisanya untuk Biomassa. Berapakah selisih anggaran antara Energi Surya dan Biomassa?",
                    opts: [
                        "Rp 20 juta",
                        "Rp 40 juta",
                        "Rp 60 juta",
                        "Rp 100 juta"
                    ],
                    ans: 1,
                    exp: "Persentase Biomassa = 100% − (35% + 25% + 15%) = 25%. Selisih persentase Energi Surya (35%) dan Biomassa (25%) adalah 10%. Maka selisih anggarannya = 10% × Rp 400 juta = Rp 40 juta."
                },
                {
                    q: "Tabel penjualan buku di Toko Ilmu selama 4 bulan:\nJanuari: 120 eksemplar | Februari: 150 eksemplar | Maret: 135 eksemplar | April: 195 eksemplar.\nJika tren kenaikan rata-rata per bulan dari Januari ke April terus berlanjut, berapakah prediksi penjualan pada bulan Mei?",
                    opts: [
                        "210 eksemplar",
                        "215 eksemplar",
                        "220 eksemplar",
                        "225 eksemplar"
                    ],
                    ans: 2,
                    exp: "Perubahan dari Januari ke April (3 selang bulan: Jan→Feb, Feb→Mar, Mar→Apr) adalah 195 − 120 = +75 eksemplar. Rata-rata kenaikan per bulan = 75 / 3 = +25 eksemplar. Maka prediksi Mei = 195 + 25 = 220 eksemplar."
                }
            ]
        },
        {
            key: "pu_3_4",
            kategori: "Penalaran Kuantitatif",
            judul: "Penyelesaian Soal Cerita Aljabar",
            ringkasan: `
                <p>Kunci menaklukkan <strong>Soal Cerita Aljabar</strong> adalah menerjemahkan kalimat bahasa sehari-hari ke dalam <strong>model matematika (variabel x dan y)</strong> secara cepat.</p>
                <div class="my-3 p-3.5 rounded-xl bg-slate-100 text-xs space-y-1">
                    <div>• <em>"A tiga kali lebih banyak dari B"</em> → <strong>A = 3B</strong></div>
                    <div>• <em>"Umur A lima tahun yang lalu"</em> → <strong>(A − 5)</strong></div>
                    <div>• <em>"Selisih uang A dan B adalah 20 ribu"</em> → <strong>A − B = 20.000</strong></div>
                </div>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
                    <strong>⚡ Trik Eliminasi Cepat:</strong> Jika yang ditanyakan adalah jumlah <em>(x + y)</em> atau selisih <em>(x − y)</em>, coba langsung jumlahkan atau kurangkan kedua persamaan tanpa harus mencari nilai x dan y satu per satu!
                </div>
            `,
            contoh: {
                soal: "Harga 3 buku dan 2 pena adalah Rp 28.000. Harga 2 buku dan 3 pena adalah Rp 27.000. Berapa harga 1 buku dan 1 pena?",
                langkah: "Jumlahkan langsung kedua persamaan: (3B + 2P) + (2B + 3P) = 28.000 + 27.000 → 5B + 5P = 55.000. Bagi 5: diperoleh 1B + 1P = Rp 11.000!"
            },
            gameQuestions: [
                {
                    q: "Di sebuah kantin, harga 4 porsi bakso dan 3 gelas jus jeruk adalah Rp 82.000, sedangkan harga 2 porsi bakso dan 3 gelas jus jeruk adalah Rp 52.000. Berapakah harga 1 porsi bakso?",
                    opts: [
                        "Rp 12.000",
                        "Rp 15.000",
                        "Rp 16.000",
                        "Rp 18.000"
                    ],
                    ans: 1,
                    exp: "Kurangkan langsung persamaan pertama dengan kedua: (4B + 3J) − (2B + 3J) = 82.000 − 52.000 → 2B = 30.000 → B = Rp 15.000."
                },
                {
                    q: "Umur seorang ayah saat ini adalah 4 kali umur anaknya. Empat tahun yang lalu, jumlah umur mereka berdua adalah 42 tahun. Berapakah umur anak tersebut sekarang?",
                    opts: [
                        "8 tahun",
                        "10 tahun",
                        "12 tahun",
                        "14 tahun"
                    ],
                    ans: 1,
                    exp: "Jika 4 tahun lalu jumlah umur mereka 42, maka sekarang kedua-duanya bertambah 4 tahun (total bertambah 8 tahun): A + B = 42 + 8 = 50. Karena A = 4B, maka 4B + B = 50 → 5B = 50 → B = 10 tahun."
                },
                {
                    q: "Sebuah gedung parkir menampung 60 kendaraan yang terdiri atas mobil (roda 4) dan sepeda motor (roda 2). Jika jumlah seluruh roda kendaraan yang terparkir adalah 160 buah, berapakah jumlah mobil di gedung tersebut?",
                    opts: [
                        "20 mobil",
                        "25 mobil",
                        "30 mobil",
                        "40 mobil"
                    ],
                    ans: 0,
                    exp: "Trik cepat: Andaikan semua 60 kendaraan adalah motor (2 roda), maka ada 120 roda. Kelebihan roda = 160 − 120 = 40 roda. Karena setiap mobil punya kelebihan 2 roda dibanding motor, jumlah mobil = 40 / 2 = 20 mobil."
                }
            ]
        },
        {
            key: "pu_3_5",
            kategori: "Penalaran Kuantitatif",
            judul: "Peluang Dasar dan Pencacahan",
            ringkasan: `
                <p>Dalam Penalaran Umum, soal <strong>Pencacahan dan Peluang Dasar</strong> menilai logika kombinasi pilihan dan kemungkinan suatu peristiwa terjadi.</p>
                <div class="my-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div class="font-bold text-slate-900 mb-1">1. Aturan Perkalian (Filling Slots)</div>
                        <p>Jika tahap 1 ada <em>m</em> cara dan tahap 2 ada <em>n</em> cara yang dilakukan bersamaan/berurutan, total cara = <strong>m × n</strong>.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div class="font-bold text-slate-900 mb-1">2. Peluang Kejadian P(A)</div>
                        <p><strong>P(A) = n(A) / n(S)</strong>, di mana n(A) adalah banyak kejadian yang diharapkan dan n(S) adalah total seluruh kemungkinan.</p>
                    </div>
                </div>
            `,
            contoh: {
                soal: "Dari 5 kandidat peneliti, akan dipilih 1 ketua dan 1 sekretaris. Berapa banyak susunan yang mungkin?",
                langkah: "Kursi ketua bisa diisi oleh 5 kandidat. Setelah ketua terpilih, kursi sekretaris bisa diisi oleh 4 kandidat tersisa. Total susunan = 5 × 4 = 20 cara."
            },
            gameQuestions: [
                {
                    q: "Sebuah kode brankas laboratorium terdiri dari 3 angka berbeda yang disusun dari angka-angka {1, 2, 3, 4, 5}. Jika angka terakhir harus bilangan genap, berapa banyak kode berbeda yang dapat dibuat?",
                    opts: [
                        "12 kode",
                        "20 kode",
                        "24 kode",
                        "30 kode"
                    ],
                    ans: 2,
                    exp: "Kerjakan syarat khusus dulu (angka terakhir genap): dari {1,2,3,4,5}, yang genap ada 2 pilihan (2 atau 4). Setelah 1 angka dipakai di belakang, sisa 4 angka untuk posisi pertama, dan sisa 3 angka untuk posisi tengah. Total = 4 × 3 × 2 = 24 kode."
                },
                {
                    q: "Dalam sebuah kotak terdapat 5 bola merah, 3 bola biru, dan 2 bola kuning. Jika diambil 1 bola secara acak, berapakah peluang terambilnya bola yang BUKAN berwarna biru?",
                    opts: [
                        "3/10",
                        "1/2",
                        "7/10",
                        "4/5"
                    ],
                    ans: 2,
                    exp: "Total bola n(S) = 5 + 3 + 2 = 10 bola. Bola yang bukan biru (merah + kuning) = 5 + 2 = 7 bola. Maka peluangnya = 7/10."
                },
                {
                    q: "Rina memiliki 4 kemeja berbeda warna, 3 celana panjang berbeda model, dan 2 pasang sepatu. Berapa banyak variasi setelan berpakaian (1 kemeja, 1 celana, 1 pasang sepatu) yang dapat dikenakan Rina?",
                    opts: [
                        "9 variasi",
                        "14 variasi",
                        "18 variasi",
                        "24 variasi"
                    ],
                    ans: 3,
                    exp: "Karena kemeja, celana, dan sepatu dipakai bersamaan (DAN), gunakan aturan perkalian: 4 × 3 × 2 = 24 variasi."
                }
            ]
        },
        {
            key: "pu_3_6",
            kategori: "Penalaran Kuantitatif",
            judul: "Barisan dan Deret Angka",
            ringkasan: `
                <p>Soal <strong>Pola Barisan Angka dan Huruf</strong> menguji kepekaan mengenali keteraturan hubungan antarsuku. Jangan panik jika selisih pertamanya belum teratur!</p>
                <div class="my-3 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5">
                    <div class="font-bold text-teal-800">🔍 4 Pola Barisan Paling Sering Keluar di UTBK:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Selisih Bertingkat (Larik 1):</strong> Selisihnya membentuk pola +2, +4, +6, +8 atau +1, +4, +9 (bilangan kuadrat).</li>
                        <li><strong>Perkalian/Pembagian Bergantian:</strong> Misalnya ×2, −1, ×2, −1.</li>
                        <li><strong>Larik Lompat Satu Suku (2 Barisan Gabungan):</strong> Suku ganjil (U₁, U₃, U₅) punya pola sendiri, suku genap (U₂, U₄, U₆) punya pola sendiri.</li>
                        <li><strong>Pola Fibonacci:</strong> Suku berikutnya adalah jumlah dua suku sebelumnya (Uₙ = Uₙ₋₁ + Uₙ₋₂).</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Tentukan angka berikutnya dari barisan: 3, 5, 9, 15, 23, ...",
                langkah: "Cek selisih antarsuku: 3 ke 5 (+2), 5 ke 9 (+4), 9 ke 15 (+6), 15 ke 23 (+8). Selisih berikutnya pasti +10! Maka suku selanjutnya = 23 + 10 = 33."
            },
            gameQuestions: [
                {
                    q: "Perhatikan barisan bilangan berikut: 4, 7, 13, 25, 49, ...\nBilangan yang tepat untuk mengisi suku berikutnya adalah...",
                    opts: [
                        "73",
                        "85",
                        "97",
                        "98"
                    ],
                    ans: 2,
                    exp: "Cek selisih antarsuku: +3, +6, +12, +24. Selisihnya selalu dikali 2, sehingga selisih berikutnya adalah +48. Maka 49 + 48 = 97. (Atau pola ×2 − 1: 49×2 − 1 = 97)."
                },
                {
                    q: "Tentukan suku berikutnya dari barisan: 2, 10, 4, 8, 8, 6, 16, 4, ...",
                    opts: [
                        "24",
                        "32",
                        "2",
                        "20"
                    ],
                    ans: 1,
                    exp: "Ini adalah pola lompat satu suku! Suku urutan ganjil: 2, 4, 8, 16, ... (dikali 2). Suku urutan genap: 10, 8, 6, 4 (dikurangi 2). Suku ke-9 adalah urutan ganjil, sehingga 16 × 2 = 32."
                },
                {
                    q: "Perhatikan pola barisan Fibonacci termodifikasi berikut: 2, 3, 5, 8, 13, 21, ...\nBerapakah nilai suku ke-8 dari barisan tersebut?",
                    opts: [
                        "34",
                        "47",
                        "55",
                        "89"
                    ],
                    ans: 2,
                    exp: "Setiap suku merupakan jumlah dua suku di depannya: Suku ke-7 = 13 + 21 = 34. Suku ke-8 = 21 + 34 = 55."
                }
            ]
        },
        {
            key: "pu_3_7",
            kategori: "Penalaran Kuantitatif",
            judul: "Persentase & Perbandingan",
            ringkasan: `
                <p>Kunci utama soal <strong>Perbandingan (Rasio)</strong> adalah membedakan apakah dua variabel berhubungan <strong>Senilai</strong> atau <strong>Berbalik Nilai</strong>.</p>
                <div class="my-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                        <div class="font-bold text-emerald-800 mb-1">↗️ Perbandingan Senilai</div>
                        <p>Jika A naik, maka B ikut naik (Contoh: Bensin & Jarak Tempuh, Jumlah Barang & Harga).</p>
                        <p class="font-mono mt-1 font-bold">A₁ / A₂ = B₁ / B₂</p>
                    </div>
                    <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
                        <div class="font-bold text-amber-900 mb-1">↘️ Perbandingan Berbalik Nilai</div>
                        <p>Jika A naik, maka B justru turun (Contoh: Jumlah Pekerja & Waktu Selesai, Kecepatan & Waktu).</p>
                        <p class="font-mono mt-1 font-bold">A₁ × B₁ = A₂ × B₂</p>
                    </div>
                </div>
            `,
            contoh: {
                soal: "Proyek renovasi lab selesai dalam 30 hari oleh 12 pekerja. Agar selesai dalam 20 hari, berapa pekerja tambahan yang dibutuhkan?",
                langkah: "Gunakan perbandingan berbalik nilai (A₁ × B₁ = A₂ × B₂): 12 × 30 = P₂ × 20 → 360 = 20·P₂ → P₂ = 18 pekerja. Pekerja TAMBAHAN = 18 − 12 = 6 orang."
            },
            gameQuestions: [
                {
                    q: "Sebuah mesin cetak otomatis mampu mencetak 450 lembar modul ujian dalam waktu 15 menit. Berapa lembar modul yang dapat dicetak oleh mesin tersebut dalam waktu 1 jam 10 menit?",
                    opts: [
                        "1.800 lembar",
                        "2.100 lembar",
                        "2.250 lembar",
                        "2.400 lembar"
                    ],
                    ans: 1,
                    exp: "Kecepatan cetak per menit = 450 / 15 = 30 lembar/menit. Waktu 1 jam 10 menit = 70 menit. Total cetakan = 30 × 70 = 2.100 lembar."
                },
                {
                    q: "Persediaan pakan di sebuah peternakan cukup untuk memberi makan 40 ekor sapi selama 18 hari. Jika peternak membeli lagi 8 ekor sapi, maka persediaan pakan tersebut akan habis dalam waktu...",
                    opts: [
                        "12 hari",
                        "14 hari",
                        "15 hari",
                        "16 hari"
                    ],
                    ans: 2,
                    exp: "Jumlah sapi sekarang = 40 + 8 = 48 ekor. Perbandingan berbalik nilai: 40 × 18 = 48 × H → 720 = 48H → H = 720 / 48 = 15 hari."
                },
                {
                    q: "Perbandingan uang tabungan Dina dan Fajar adalah 3 : 5. Jika selisih uang tabungan mereka adalah Rp 400.000, berapakah jumlah uang tabungan mereka berdua?",
                    opts: [
                        "Rp 1.200.000",
                        "Rp 1.600.000",
                        "Rp 2.000.000",
                        "Rp 2.400.000"
                    ],
                    ans: 1,
                    exp: "Selisih rasio = 5 − 3 = 2 bagian. Jumlah rasio = 3 + 5 = 8 bagian. Maka jumlah uang keduanya = (8 / 2) × Rp 400.000 = 4 × Rp 400.000 = Rp 1.600.000."
                }
            ]
        },
        {
            key: "pu_3_8",
            kategori: "Penalaran Kuantitatif",
            judul: "Aritmatika Sosial (Diskon & Bunga Bank)",
            ringkasan: `
                <p><strong>Aritmatika Sosial</strong> menguji logika perhitungan keuntungan, kerugian, diskon bertingkat (ganda), serta bunga tabungan/pinjaman.</p>
                <div class="my-3 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5">
                    <div class="font-bold text-teal-800">⚡ Rumus Cepat Aritmatika Sosial:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Harga Jual saat Untung p%:</strong> HJ = (100% + p%) × Harga Beli (Modal).</li>
                        <li><strong>Jebakan Diskon Ganda (50% + 20%):</strong> Diskon 50% + 20% <strong>BUKAN 70%</strong>! Hitung dari sisa harga yang harus dibayar: Bayar = (100% − 50%) × (100% − 20%) = 50% × 80% = 40% harga awal (berarti total diskonnya 60%).</li>
                        <li><strong>Bunga Tunggal n Bulan (b% per tahun):</strong> Bunga = (n / 12) × b% × Modal Awal.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Sepatu seharga Rp 400.000 mendapat diskon bertingkat 50% + 20%. Berapa harga yang harus dibayar?",
                langkah: "Setelah diskon pertama 50%, harganya menjadi Rp 200.000. Diskon kedua 20% dihitung dari Rp 200.000 (potong Rp 40.000), sehingga yang dibayar adalah Rp 160.000."
            },
            gameQuestions: [
                {
                    q: "Sebuah toko buku memberikan promo diskon ganda '30% + 10%' untuk sebuah ensiklopedia sains yang harga normalnya Rp 200.000. Berapakah harga akhir yang harus dibayar pembeli?",
                    opts: [
                        "Rp 120.000",
                        "Rp 126.000",
                        "Rp 130.000",
                        "Rp 140.000"
                    ],
                    ans: 1,
                    exp: "Setelah diskon 30%, pembeli membayar 70% × Rp 200.000 = Rp 140.000. Lalu diskon tambahan 10% membuat pembeli membayar 90% × Rp 140.000 = Rp 126.000."
                },
                {
                    q: "Seorang pedagang membeli sekotak peralatan laboratorium bekas seharga Rp 1.500.000, lalu mengeluarkan biaya perbaikan Rp 300.000. Jika ia ingin memperoleh keuntungan sebesar 20% dari total modal, berapakah harga jual yang harus ditetapkan?",
                    opts: [
                        "Rp 1.800.000",
                        "Rp 2.100.000",
                        "Rp 2.160.000",
                        "Rp 2.250.000"
                    ],
                    ans: 2,
                    exp: "Total modal = Rp 1.500.000 + Rp 300.000 = Rp 1.800.000. Harga jual dengan untung 20% = 120% × Rp 1.800.000 = Rp 2.160.000."
                },
                {
                    q: "Andi menabung uang sebesar Rp 6.000.000 di koperasi yang memberikan bunga tunggal 8% per tahun. Berapakah total tabungan Andi setelah mengendap selama 9 bulan?",
                    opts: [
                        "Rp 6.320.000",
                        "Rp 6.360.000",
                        "Rp 6.400.000",
                        "Rp 6.480.000"
                    ],
                    ans: 1,
                    exp: "Bunga 9 bulan = (9/12) × 8% × Rp 6.000.000 = (3/4) × 8% × Rp 6.000.000 = 6% × Rp 6.000.000 = Rp 360.000. Total tabungan = Rp 6.000.000 + Rp 360.000 = Rp 6.360.000."
                }
            ]
        }
    ]
};
