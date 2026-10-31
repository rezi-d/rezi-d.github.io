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
                },
                {
                    q: "Pernyataan 'Jika suhu ruangan naik, maka kompresor pendingin menyala' ekuivalen dengan pernyataan...",
                    opts: [
                        "Suhu ruangan tidak naik atau kompresor pendingin menyala.",
                        "Suhu ruangan naik dan kompresor pendingin tidak menyala.",
                        "Jika kompresor pendingin menyala, maka suhu ruangan naik.",
                        "Jika suhu ruangan tidak naik, maka kompresor pendingin tidak menyala."
                    ],
                    ans: 0,
                    exp: "Berdasarkan rumus ekuivalensi implikasi ke disjungsi, (p → q) ≡ (~p ∨ q): 'Suhu ruangan tidak naik (~p) atau kompresor pendingin menyala (q)'."
                },
                {
                    q: "Ingkaran (negasi) dari pernyataan majemuk: 'Bunga memiliki SIM A dan membawa STNK kendaraan' adalah...",
                    opts: [
                        "Bunga tidak memiliki SIM A dan tidak membawa STNK kendaraan.",
                        "Bunga tidak memiliki SIM A atau tidak membawa STNK kendaraan.",
                        "Jika Bunga memiliki SIM A, maka ia tidak membawa STNK kendaraan.",
                        "Bunga memiliki SIM A tetapi tidak membawa STNK kendaraan."
                    ],
                    ans: 1,
                    exp: "Berdasarkan Hukum De Morgan, negasi dari konjungsi ~(p ∧ q) adalah (~p ∨ ~q): 'Bunga tidak memiliki SIM A atau tidak membawa STNK kendaraan'."
                },
                {
                    q: "Diketahui biimplikasi 'Angka 2 adalah bilangan genap JIKA DAN HANYA JIKA pernyataan Q benar' bernilai SALAH. Bagaimana nilai kebenaran dari pernyataan Q?",
                    opts: [
                        "Pasti bernilai benar.",
                        "Bisa benar maupun salah.",
                        "Tidak dapat ditentukan.",
                        "Pasti bernilai salah."
                    ],
                    ans: 3,
                    exp: "Biimplikasi (p ↔ q) bernilai SALAH jika p dan q memiliki nilai kebenaran yang berbeda. Karena p ('Angka 2 adalah bilangan genap') bernilai BENAR, maka Q harus bernilai SALAH."
                },
                {
                    q: "Ingkaran dari pernyataan: 'Hari ini turun hujan deras atau angin bertiup kencang' adalah...",
                    opts: [
                        "Hari ini tidak turun hujan deras atau angin tidak bertiup kencang.",
                        "Jika hari ini tidak turun hujan deras, maka angin bertiup kencang.",
                        "Hari ini tidak turun hujan deras dan angin tidak bertiup kencang.",
                        "Hari ini turun hujan deras tetapi angin tidak bertiup kencang."
                    ],
                    ans: 2,
                    exp: "Berdasarkan Hukum De Morgan, negasi dari disjungsi ~(p ∨ q) adalah (~p ∧ ~q): 'Hari ini tidak turun hujan deras dan angin tidak bertiup kencang'."
                },
                {
                    q: "Apabila implikasi 'Jika kurva permintaan bergeser ke kanan, maka harga keseimbangan naik' diketahui bernilai SALAH, maka fakta yang terjadi adalah...",
                    opts: [
                        "Kurva permintaan tidak bergeser ke kanan dan harga keseimbangan tidak naik.",
                        "Kurva permintaan bergeser ke kanan, tetapi harga keseimbangan tidak naik.",
                        "Kurva permintaan tidak bergeser ke kanan, tetapi harga keseimbangan naik.",
                        "Harga keseimbangan naik karena kurva permintaan bergeser ke kanan."
                    ],
                    ans: 1,
                    exp: "Implikasi (p → q) hanya bernilai SALAH pada satu kondisi, yaitu ketika antiseden (p) bernilai BENAR dan konsekuen (q) bernilai SALAH (p ∧ ~q)."
                },
                {
                    q: "Kontraposisi dari pernyataan: 'Jika pelamar lulus tes tulis dan wawancara, maka ia diterima bekerja' adalah...",
                    opts: [
                        "Jika pelamar tidak diterima bekerja, maka ia tidak lulus tes tulis atau tidak lulus wawancara.",
                        "Jika pelamar tidak diterima bekerja, maka ia tidak lulus tes tulis dan tidak lulus wawancara.",
                        "Jika pelamar tidak lulus tes tulis atau tidak lulus wawancara, maka ia tidak diterima bekerja.",
                        "Pelamar lulus tes tulis dan wawancara, tetapi tidak diterima bekerja."
                    ],
                    ans: 0,
                    exp: "Kontraposisi dari (p ∧ q) → r adalah ~r → ~(p ∧ q). Dengan Hukum De Morgan, ~(p ∧ q) ≡ (~p ∨ ~q), sehingga menjadi: 'Jika pelamar tidak diterima bekerja, maka ia tidak lulus tes tulis atau tidak lulus wawancara'."
                },
                {
                    q: "Manakah yang merupakan KONVERS dari pernyataan: 'Jika suatu unsur adalah gas mulia, maka konfigurasi elektronnya stabil'?",
                    opts: [
                        "Jika konfigurasi elektron suatu unsur tidak stabil, maka unsur tersebut bukan gas mulia.",
                        "Jika suatu unsur bukan gas mulia, maka konfigurasi elektronnya tidak stabil.",
                        "Jika konfigurasi elektron suatu unsur stabil, maka unsur tersebut adalah gas mulia.",
                        "Suatu unsur adalah gas mulia atau konfigurasi elektronnya stabil."
                    ],
                    ans: 2,
                    exp: "Konvers dari implikasi (p → q) adalah kebalikan arahnya yaitu (q → p): 'Jika konfigurasi elektron suatu unsur stabil (q), maka unsur tersebut adalah gas mulia (p)'."
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
                },
                {
                    q: "Manakah di antara kalimat berikut yang BUKAN merupakan proposisi maupun kalimat terbuka?",
                    opts: [
                        "Matikan semua pembakar Bunsen setelah praktikum kimia selesai!",
                        "Atom karbon memiliki nomor atom 6 pada tabel periodik.",
                        "3x + 12 = 27 untuk x anggota bilangan asli.",
                        "Pulau Kalimantan terletak di sebelah selatan Pulau Jawa."
                    ],
                    ans: 0,
                    exp: "Kalimat perintah ('Matikan semua pembakar Bunsen...') tidak memiliki nilai kebenaran benar atau salah, sehingga bukan proposisi dan bukan pula kalimat terbuka."
                },
                {
                    q: "Agar kalimat terbuka '3x − 7 = 14' berubah menjadi proposisi yang bernilai BENAR, maka variabel x harus diganti dengan...",
                    opts: [
                        "5",
                        "6",
                        "7",
                        "8"
                    ],
                    ans: 2,
                    exp: "3x − 7 = 14 → 3x = 21 → x = 7. Jika x diganti dengan 7, kalimat menjadi '3(7) − 7 = 14' yang bernilai BENAR."
                },
                {
                    q: "Manakah di antara kalimat berikut yang merupakan proposisi bernilai BENAR?",
                    opts: [
                        "Semua bilangan ganjil merupakan bilangan prima.",
                        "Jumlah sudut dalam pada setiap segitiga datar adalah 180 derajat.",
                        "Hasil kali dua bilangan negatif adalah bilangan negatif.",
                        "2x + 4 = 10 adalah kalimat tertutup."
                    ],
                    ans: 1,
                    exp: "Jumlah sudut dalam segitiga datar secara geometris selalu 180 derajat (proposisi bernilai benar). Opsi A salah (9 ganjil tapi bukan prima), C salah (negatif × negatif = positif), D salah (ada variabel x sehingga kalimat terbuka)."
                },
                {
                    q: "Diberikan kalimat terbuka P(y): 'y adalah bilangan prima yang genap'. Himpunan penyelesaian dari P(y) agar bernilai BENAR pada semesta bilangan asli adalah...",
                    opts: [
                        "{2}",
                        "{2, 4}",
                        "{1, 2}",
                        "Himpunan kosong { }"
                    ],
                    ans: 0,
                    exp: "Satu-satunya bilangan prima yang genap adalah 2. Maka himpunan penyelesaian yang membuat P(y) bernilai benar adalah {2}."
                },
                {
                    q: "Mengapa kalimat 'Lukisan abstrak di galeri itu tampak sangat indah' tidak dapat disebut sebagai proposisi dalam logika matematika?",
                    opts: [
                        "Karena kalimat tersebut mengandung variabel aljabar.",
                        "Karena kalimat tersebut merupakan kalimat tanya.",
                        "Karena lukisan abstrak tidak memiliki bentuk yang jelas.",
                        "Karena merupakan opini subjektif yang nilai kebenarannya relatif bagi setiap pengamat."
                    ],
                    ans: 3,
                    exp: "Penilaian estetika seperti 'sangat indah' bersifat subjektif (opini), sehingga tidak memiliki nilai kebenaran objektif yang tunggal (Benar saja atau Salah saja)."
                },
                {
                    q: "Diketahui kalimat terbuka Q(x): 'x² − 5x + 6 = 0'. Nilai x manakah yang mengubah Q(x) menjadi proposisi bernilai SALAH?",
                    opts: [
                        "x = 2",
                        "x = 3",
                        "x = 4",
                        "x = 2 atau x = 3"
                    ],
                    ans: 2,
                    exp: "Akar-akar dari x² − 5x + 6 = 0 adalah (x − 2)(x − 3) = 0, yaitu x = 2 atau x = 3 (keduanya menghasilkan proposisi Benar). Jika x = 4, maka 4² − 5(4) + 6 = 2 ≠ 0, sehingga menjadi proposisi bernilai SALAH."
                },
                {
                    q: "Bagaimana cara mengubah kalimat terbuka 'Mahasiswa x meraih indeks prestasi 4,00' menjadi kalimat tertutup (proposisi) tanpa mengganti x dengan nama mahasiswa tertentu?",
                    opts: [
                        "Mengubahnya menjadi kalimat tanya 'Siapakah mahasiswa x?'",
                        "Menambahkan kuantor di depannya, misalnya 'Ada mahasiswa x yang meraih indeks prestasi 4,00'.",
                        "Menghapus angka 4,00 dari kalimat tersebut.",
                        "Menambahkan kata harapan 'Semoga' di awal kalimat."
                    ],
                    ans: 1,
                    exp: "Kalimat terbuka yang memuat variabel bebas dapat diubah menjadi proposisi tertutup dengan mengikat variabel tersebut menggunakan kuantor universal (Semua) atau eksistensial (Ada/Beberapa)."
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
                },
                {
                    q: "Ingkaran dari pernyataan: 'Beberapa kereta cepat berhenti di Stasiun Halim' adalah...",
                    opts: [
                        "Semua kereta cepat tidak berhenti di Stasiun Halim.",
                        "Beberapa kereta cepat tidak berhenti di Stasiun Halim.",
                        "Semua kereta cepat berhenti di Stasiun Halim.",
                        "Ada kereta cepat yang berhenti di stasiun selain Halim."
                    ],
                    ans: 0,
                    exp: "Negasi dari kuantor eksistensial (∃x P(x): 'Beberapa A adalah B') adalah kuantor universal negatif (∀x ~P(x): 'Semua A tidak B'), yaitu 'Semua kereta cepat tidak berhenti di Stasiun Halim'."
                },
                {
                    q: "Ingkaran dari pernyataan: 'Semua mamalia menyusui anaknya dan bernapas dengan paru-paru' adalah...",
                    opts: [
                        "Semua mamalia tidak menyusui anaknya atau tidak bernapas dengan paru-paru.",
                        "Ada mamalia yang tidak menyusui anaknya dan tidak bernapas dengan paru-paru.",
                        "Ada mamalia yang tidak menyusui anaknya atau tidak bernapas dengan paru-paru.",
                        "Sebagian mamalia menyusui anaknya tetapi bernapas dengan insang."
                    ],
                    ans: 2,
                    exp: "Kuantor 'Semua' diingkarkan menjadi 'Ada/Sebagian', sedangkan konjungsi 'A dan B' diingkarkan dengan De Morgan menjadi 'tidak A atau tidak B'."
                },
                {
                    q: "Pernyataan berkuantor 'Semua peserta seminar yang datang tepat waktu memperoleh sertifikat' ekuivalen dengan...",
                    opts: [
                        "Semua peserta seminar yang memperoleh sertifikat pasti datang tepat waktu.",
                        "Semua peserta seminar yang tidak memperoleh sertifikat tidak datang tepat waktu.",
                        "Sebagian peserta seminar yang datang tepat waktu tidak memperoleh sertifikat.",
                        "Jika ada peserta yang datang terlambat, maka ia tidak memperoleh sertifikat."
                    ],
                    ans: 1,
                    exp: "Pernyataan 'Semua x, jika P(x) maka Q(x)' ekuivalen dengan kontraposisinya: 'Semua x, jika ~Q(x) maka ~P(x)', yaitu 'Semua peserta seminar yang tidak memperoleh sertifikat tidak datang tepat waktu'."
                },
                {
                    q: "Ingkaran yang paling tepat dari pernyataan: 'Setiap warga yang berusia 17 tahun ke atas wajib memiliki KTP' adalah...",
                    opts: [
                        "Setiap warga yang berusia di bawah 17 tahun tidak wajib memiliki KTP.",
                        "Tidak ada warga berusia 17 tahun ke atas yang wajib memiliki KTP.",
                        "Ada warga yang tidak berusia 17 tahun ke atas tetapi memiliki KTP.",
                        "Ada warga yang berusia 17 tahun ke atas tetapi tidak wajib memiliki KTP."
                    ],
                    ans: 3,
                    exp: "Bentuk ∀x (P(x) → Q(x)) jika dinegasikan menjadi ∃x (P(x) ∧ ~Q(x)): 'Ada warga yang berusia 17 tahun ke atas (P) tetapi tidak wajib memiliki KTP (~Q)'."
                },
                {
                    q: "Apabila klaim 'Semua logam alkali mudah bereaksi dengan air' bernilai BENAR, maka pernyataan di bawah ini yang PASTI SALAH adalah...",
                    opts: [
                        "Ada logam alkali yang tidak mudah bereaksi dengan air.",
                        "Sebagian logam alkali mudah bereaksi dengan air.",
                        "Natrium adalah logam alkali yang mudah bereaksi dengan air.",
                        "Ada unsur bukan logam alkali yang mudah bereaksi dengan air."
                    ],
                    ans: 0,
                    exp: "Jika suatu pernyataan bernilai BENAR, maka ingkarannya ('Ada logam alkali yang tidak mudah bereaksi dengan air') pasti bernilai SALAH."
                },
                {
                    q: "Negasi dari pernyataan: 'Ada siswa kelas XII yang memilih jurusan kedokteran atau teknik' adalah...",
                    opts: [
                        "Ada siswa kelas XII yang tidak memilih jurusan kedokteran dan tidak memilih jurusan teknik.",
                        "Semua siswa kelas XII tidak memilih jurusan kedokteran atau tidak memilih jurusan teknik.",
                        "Semua siswa kelas XII tidak memilih jurusan kedokteran dan tidak memilih jurusan teknik.",
                        "Semua siswa kelas XII memilih jurusan selain kedokteran."
                    ],
                    ans: 2,
                    exp: "Negasi dari ∃x (P(x) ∨ Q(x)) adalah ∀x (~P(x) ∧ ~Q(x)): 'Semua siswa kelas XII tidak memilih jurusan kedokteran DAN tidak memilih jurusan teknik'."
                },
                {
                    q: "Makna logis yang paling tepat dari pernyataan: 'Sebagian anggota koperasi belum melunasi iuran tahunan' adalah...",
                    opts: [
                        "Sebagian anggota koperasi lainnya pasti sudah melunasi iuran tahunan.",
                        "Setidaknya ada satu anggota koperasi yang belum melunasi iuran tahunan.",
                        "Hampir seluruh anggota koperasi sudah melunasi iuran tahunan.",
                        "Tidak ada anggota koperasi yang sudah melunasi iuran tahunan."
                    ],
                    ans: 1,
                    exp: "Dalam logika matematika, kuantor eksistensial ('Sebagian/Beberapa/Ada') bermakna 'minimal ada satu anggota (≥ 1)' yang memenuhi sifat tersebut, dan tidak otomatis menjamin sebagian lainnya tidak memenuhi."
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
                },
                {
                    q: "Premis 1: Jika pasokan gas alam lancar, maka pabrik pupuk beroperasi penuh.\nPremis 2: Jika pabrik pupuk beroperasi penuh, maka kuota pupuk subsidi petani terpenuhi.\nSimpulan yang sah dari kedua premis tersebut adalah...",
                    opts: [
                        "Jika pasokan gas alam lancar, maka kuota pupuk subsidi petani terpenuhi.",
                        "Jika kuota pupuk subsidi petani terpenuhi, maka pasokan gas alam lancar.",
                        "Pasokan gas alam lancar dan kuota pupuk subsidi petani terpenuhi.",
                        "Jika pasokan gas alam tidak lancar, maka kuota pupuk subsidi petani tidak terpenuhi."
                    ],
                    ans: 0,
                    exp: "Berdasarkan aturan silogisme hipotetis (p → q dan q → r ∴ p → r), diperoleh simpulan: 'Jika pasokan gas alam lancar, maka kuota pupuk subsidi petani terpenuhi'."
                },
                {
                    q: "Premis 1: Semua dokter spesialis telah menyelesaikan pendidikan profesi dokter.\nPremis 2: Semua orang yang telah menyelesaikan pendidikan profesi dokter pernah menjalani masa koasistensi di rumah sakit.\nSimpulan yang tepat adalah...",
                    opts: [
                        "Sebagian dokter spesialis belum pernah menjalani masa koasistensi di rumah sakit.",
                        "Semua yang pernah menjalani masa koasistensi di rumah sakit adalah dokter spesialis.",
                        "Semua dokter spesialis pernah menjalani masa koasistensi di rumah sakit.",
                        "Ada orang yang menyelesaikan pendidikan profesi dokter tanpa masa koasistensi."
                    ],
                    ans: 2,
                    exp: "Silogisme kategoris universal: Semua A adalah B, dan Semua B adalah C, maka Semua A adalah C ('Semua dokter spesialis pernah menjalani masa koasistensi di rumah sakit')."
                },
                {
                    q: "Premis 1: Jika debit air bendungan turun drastis, maka turbin PLTA berhenti berputar.\nPremis 2: Jika pasokan listrik kota tidak terganggu, maka turbin PLTA tidak berhenti berputar.\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Jika pasokan listrik kota terganggu, maka debit air bendungan turun drastis.",
                        "Jika debit air bendungan turun drastis, maka pasokan listrik kota terganggu.",
                        "Jika debit air bendungan tidak turun drastis, maka pasokan listrik kota tidak terganggu.",
                        "Turbin PLTA berhenti berputar atau pasokan listrik kota tidak terganggu."
                    ],
                    ans: 1,
                    exp: "Ubah Premis 2 (~r → ~q) menggunakan kontraposisi menjadi (q → r): 'Jika turbin PLTA berhenti berputar, maka pasokan listrik kota terganggu'. Sambungkan dengan Premis 1 (p → q) menghasilkan (p → r): 'Jika debit air bendungan turun drastis, maka pasokan listrik kota terganggu'."
                },
                {
                    q: "Premis 1: Semua peserta olimpiade kimia nasional menguasai konsep stoikiometri.\nPremis 2: Sebagian anggota klub sains sekolah adalah peserta olimpiade kimia nasional.\nSimpulan yang sah adalah...",
                    opts: [
                        "Semua anggota klub sains sekolah menguasai konsep stoikiometri.",
                        "Semua yang menguasai konsep stoikiometri adalah anggota klub sains sekolah.",
                        "Tidak ada anggota klub sains sekolah yang menguasai konsep stoikiometri.",
                        "Sebagian anggota klub sains sekolah menguasai konsep stoikiometri."
                    ],
                    ans: 3,
                    exp: "Karena sebagian anggota klub sains termasuk dalam himpunan peserta olimpiade kimia nasional, dan seluruh peserta olimpiade menguasai stoikiometri, maka sebagian anggota klub sains pasti menguasai konsep stoikiometri."
                },
                {
                    q: "Premis 1: Jika ekspor nikel olahan meningkat, maka neraca perdagangan mengalami surplus.\nPremis 2: Jika neraca perdagangan mengalami surplus, maka cadangan devisa negara bertambah.\nManakah pernyataan di bawah ini yang EKUIVALEN dengan simpulan kedua premis di atas?",
                    opts: [
                        "Ekspor nikel olahan tidak meningkat atau cadangan devisa negara bertambah.",
                        "Ekspor nikel olahan meningkat dan cadangan devisa negara bertambah.",
                        "Ekspor nikel olahan meningkat atau cadangan devisa negara tidak bertambah.",
                        "Jika cadangan devisa negara bertambah, maka ekspor nikel olahan meningkat."
                    ],
                    ans: 0,
                    exp: "Simpulan silogisme adalah (p → r): 'Jika ekspor nikel olahan meningkat, maka cadangan devisa negara bertambah'. Bentuk implikasi (p → r) ekuivalen dengan disjungsi (~p ∨ r): 'Ekspor nikel olahan tidak meningkat atau cadangan devisa negara bertambah'."
                },
                {
                    q: "Premis 1: Tidak ada satelit cuaca yang mengorbit di bawah ketinggian 100 km.\nPremis 2: Semua wahana seri Meteo-X adalah satelit cuaca.\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Sebagian wahana seri Meteo-X mengorbit di bawah ketinggian 100 km.",
                        "Semua yang mengorbit di atas 100 km adalah wahana seri Meteo-X.",
                        "Tidak ada wahana seri Meteo-X yang mengorbit di bawah ketinggian 100 km.",
                        "Wahana seri Meteo-X bukan merupakan satelit cuaca."
                    ],
                    ans: 2,
                    exp: "Jika semua Meteo-X adalah satelit cuaca, dan tidak ada satu pun satelit cuaca yang mengorbit di bawah 100 km, maka tidak ada wahana seri Meteo-X yang mengorbit di bawah ketinggian 100 km."
                },
                {
                    q: "Premis 1: Jika hutan bakau di pesisir ditebang habis, maka laju abrasi pantai meningkat.\nPremis 2: Jika laju abrasi pantai meningkat, maka pemukiman warga nelayan terancam rusak.\nSimpulan yang sah berdasarkan kedua premis tersebut adalah...",
                    opts: [
                        "Jika pemukiman warga nelayan terancam rusak, maka hutan bakau di pesisir ditebang habis.",
                        "Jika pemukiman warga nelayan tidak terancam rusak, maka hutan bakau di pesisir tidak ditebang habis.",
                        "Jika hutan bakau di pesisir tidak ditebang habis, maka pemukiman warga nelayan tidak terancam rusak.",
                        "Hutan bakau di pesisir ditebang habis tetapi pemukiman warga nelayan tidak terancam rusak."
                    ],
                    ans: 1,
                    exp: "Simpulan utamanya adalah p → r ('Jika hutan bakau ditebang habis, maka pemukiman terancam rusak'). Bentuk ini setara dengan kontraposisinya (~r → ~p): 'Jika pemukiman warga nelayan tidak terancam rusak, maka hutan bakau di pesisir tidak ditebang habis'."
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
                },
                {
                    q: "Premis 1: Jika kelembapan udara di ruang penyimpanan di atas 85%, maka spora jamur tumbuh dengan cepat.\nPremis 2: Alat higrometer di ruang penyimpanan menunjukkan kelembapan udara sebesar 92%.\nSimpulan yang benar adalah...",
                    opts: [
                        "Spora jamur di ruang penyimpanan tumbuh dengan cepat.",
                        "Spora jamur di ruang penyimpanan mati.",
                        "Alat higrometer di ruang penyimpanan rusak.",
                        "Kelembapan udara naik karena spora jamur tumbuh."
                    ],
                    ans: 0,
                    exp: "Kelembapan 92% berada di atas 85% sehingga antiseden (p) bernilai benar. Berdasarkan Modus Ponens, konsekuen (q) pasti terjadi: Spora jamur tumbuh dengan cepat."
                },
                {
                    q: "Premis 1: Setiap penumpang kereta cepat yang membeli tiket kelas eksekutif berhak menikmati fasilitas ruang tunggu VIP.\nPremis 2: Pak Rahmat adalah penumpang kereta cepat yang membeli tiket kelas eksekutif.\nSimpulan yang sah adalah...",
                    opts: [
                        "Semua penumpang di ruang tunggu VIP adalah Pak Rahmat.",
                        "Pak Rahmat tidak menggunakan ruang tunggu VIP.",
                        "Pak Rahmat berhak menikmati fasilitas ruang tunggu VIP.",
                        "Hanya pembeli tiket kelas eksekutif yang boleh naik kereta cepat."
                    ],
                    ans: 2,
                    exp: "Pernyataan universal 'Setiap x, P(x) → Q(x)' berlaku untuk kasus khusus Pak Rahmat. Karena P(Pak Rahmat) benar, maka berdasarkan Modus Ponens, Q(Pak Rahmat) pasti benar."
                },
                {
                    q: "Premis 1: Jika perusahaan menerapkan otomatisasi gudang ATAU menambah armada kurir, maka waktu pengiriman barang menjadi lebih singkat.\nPremis 2: Tahun ini perusahaan menerapkan otomatisasi gudang meskipun tidak menambah armada kurir.\nSimpulan yang tepat adalah...",
                    opts: [
                        "Waktu pengiriman barang tidak mengalami perubahan.",
                        "Waktu pengiriman barang menjadi lebih singkat.",
                        "Perusahaan wajib menambah armada kurir tahun depan.",
                        "Biaya operasional perusahaan meningkat tajam."
                    ],
                    ans: 1,
                    exp: "Syarat antiseden berbentuk disjungsi (p ∨ q), yang sudah bernilai BENAR cukup jika salah satu saja terpenuhi (p benar). Maka menurut Modus Ponens, akibatnya pasti terjadi: Waktu pengiriman barang menjadi lebih singkat."
                },
                {
                    q: "Premis 1: Jika konsentrasi reaktan dinaikkan, maka frekuensi tumbukan efektif antarpartikel meningkat.\nPremis 2: Jika frekuensi tumbukan efektif meningkat, maka laju reaksi kimia bertambah cepat.\nPremis 3: Praktikan menaikkan konsentrasi reaktan pada tabung reaksi.\nSimpulan akhir yang sah adalah...",
                    opts: [
                        "Frekuensi tumbukan efektif antarpartikel menurun.",
                        "Reaksi kimia berhenti sebelum waktunya.",
                        "Suhu tabung reaksi turun drastis.",
                        "Laju reaksi kimia pada tabung reaksi bertambah cepat."
                    ],
                    ans: 3,
                    exp: "Gabungan Silogisme (P1 & P2) menghasilkan p → r ('Jika konsentrasi dinaikkan, maka laju reaksi bertambah cepat'). Karena P3 menyatakan p terjadi, maka dengan Modus Ponens diperoleh r: Laju reaksi kimia bertambah cepat."
                },
                {
                    q: "Premis 1: Jika skor TOEFL pelamar minimal 500, maka pelamar lolos seleksi administrasi.\nPremis 2: Rani dinyatakan lolos seleksi administrasi.\nBerdasarkan kedua premis di atas, simpulan yang paling tepat adalah...",
                    opts: [
                        "Skor TOEFL Rani pasti minimal 500.",
                        "Skor TOEFL Rani pasti di bawah 500.",
                        "Belum dapat dipastikan apakah skor TOEFL Rani minimal 500 atau tidak.",
                        "Semua yang lolos seleksi administrasi memiliki skor TOEFL minimal 500."
                    ],
                    ans: 2,
                    exp: "Diketahui p → q dan fakta q (lolos seleksi administrasi). Menyimpulkan p dari q adalah sesat pikir (affirming the consequent), karena bisa saja ada jalur lain untuk lolos administrasi. Maka belum dapat dipastikan."
                },
                {
                    q: "Premis 1: Semua desa yang telah terjangkau jaringan serat optik dapat mengakses layanan telemedisin nasional.\nPremis 2: Desa Sukamaju bulan ini telah terjangkau jaringan serat optik.\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Desa Sukamaju dapat mengakses layanan telemedisin nasional.",
                        "Sebagian warga Desa Sukamaju menolak layanan telemedisin.",
                        "Desa lain di sekitar Sukamaju belum terjangkau serat optik.",
                        "Layanan telemedisin nasional hanya tersedia di Desa Sukamaju."
                    ],
                    ans: 0,
                    exp: "Karena Desa Sukamaju memenuhi syarat sebagai desa yang terjangkau serat optik (p), maka berdasarkan Modus Ponens, Desa Sukamaju pasti dapat mengakses layanan telemedisin nasional (q)."
                },
                {
                    q: "Premis 1: Apabila suhu pemanasan mencapai 250°C dan katalis ditambahkan, maka konversi reaksi mencapai 95%.\nPremis 2: Reaktor dioperasikan pada suhu 250°C dengan penambahan katalis.\nSimpulan yang valid adalah...",
                    opts: [
                        "Konversi reaksi kurang dari 95%.",
                        "Konversi reaksi mencapai 95%.",
                        "Katalis tidak berpengaruh terhadap konversi reaksi.",
                        "Suhu reaktor harus diturunkan."
                    ],
                    ans: 1,
                    exp: "Kedua syarat pada konjungsi (suhu 250°C DAN katalis ditambahkan) terpenuhi pada Premis 2. Berdasarkan Modus Ponens, konversi reaksi pasti mencapai 95%."
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
                },
                {
                    q: "Premis 1: Jika sampel air sungai tercemar limbah merkuri, maka reagen penguji berubah warna menjadi ungu pekat.\nPremis 2: Ketika diteteskan pada sampel air Sungai X, reagen penguji tetap bening (tidak berubah menjadi ungu pekat).\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Sampel air Sungai X tidak tercemar limbah merkuri.",
                        "Sampel air Sungai X tercemar limbah logam berat selain merkuri.",
                        "Reagen penguji sudah kedaluwarsa.",
                        "Sampel air Sungai X mengandung sedikit limbah merkuri."
                    ],
                    ans: 0,
                    exp: "Konsekuen tidak terjadi (~q: reagen tidak menjadi ungu pekat). Berdasarkan Modus Tollens (p → q, ~q ∴ ~p), maka antiseden pasti tidak terjadi: Sampel air Sungai X tidak tercemar limbah merkuri."
                },
                {
                    q: "Premis 1: Jika warga rutin menguras bak mandi ATAU menaburkan bubuk abate, maka jentik nyamuk tidak berkembang biak.\nPremis 2: Ditemukan banyak jentik nyamuk berkembang biak di bak mandi rumah Pak Toni.\nSimpulan yang sah adalah...",
                    opts: [
                        "Pak Toni tidak rutin menguras bak mandi atau tidak menaburkan bubuk abate.",
                        "Pak Toni rutin menguras bak mandi tetapi tidak menaburkan bubuk abate.",
                        "Pak Toni tidak rutin menguras bak mandi dan tidak menaburkan bubuk abate.",
                        "Bubuk abate tidak mempan membasmi jentik nyamuk."
                    ],
                    ans: 2,
                    exp: "Dari (p ∨ q) → r dan fakta ~r (jentik berkembang biak), Modus Tollens menghasilkan ~(p ∨ q). Menurut Hukum De Morgan, ~(p ∨ q) ≡ (~p ∧ ~q): Pak Toni tidak rutin menguras bak mandi DAN tidak menaburkan bubuk abate."
                },
                {
                    q: "Premis 1: Semua senyawa ionik dapat menghantarkan arus listrik ketika berada dalam fase lelehan.\nPremis 2: Kristal Z ketika dilelehkan sama sekali tidak dapat menghantarkan arus listrik.\nSimpulan yang tepat adalah...",
                    opts: [
                        "Kristal Z adalah senyawa ionik lemah.",
                        "Kristal Z bukan merupakan senyawa ionik.",
                        "Sebagian senyawa ionik adalah Kristal Z.",
                        "Kristal Z dapat menghantarkan listrik dalam wujud padat."
                    ],
                    ans: 1,
                    exp: "Jika x adalah senyawa ionik → x menghantarkan listrik saat meleleh. Karena Kristal Z tidak menghantarkan listrik saat meleleh (~q), maka dengan Modus Tollens, Kristal Z pasti bukan senyawa ionik (~p)."
                },
                {
                    q: "Premis 1: Jika suku bunga kredit perumahan turun, maka penjualan rumah tapak meningkat.\nPremis 2: Kuartal ini suku bunga kredit perumahan TIDAK turun.\nSimpulan apakah yang secara logika deduktif paling tepat?",
                    opts: [
                        "Penjualan rumah tapak pasti tidak meningkat.",
                        "Penjualan rumah tapak pasti meningkat.",
                        "Harga bahan bangunan ikut naik.",
                        "Belum dapat disimpulkan apakah penjualan rumah tapak meningkat atau tidak."
                    ],
                    ans: 3,
                    exp: "Waspada jebakan Denying the Antecedent! Dari p → q dan ~p, kita TIDAK BOLEH menyimpulkan ~q. Modus Tollens hanya berlaku jika ~q yang diketahui. Jadi penjualan rumah belum dapat dipastikan."
                },
                {
                    q: "Premis 1: Apabila berkas pajak lengkap dan pembayaran dilakukan sebelum tanggal jatuh tempo, maka wajib pajak bebas dari sanksi administrasi.\nPremis 2: Perusahaan X dikenai sanksi administrasi tahun ini.\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Berkas pajak Perusahaan X tidak lengkap atau pembayarannya tidak dilakukan sebelum tanggal jatuh tempo.",
                        "Berkas pajak Perusahaan X tidak lengkap dan pembayarannya terlambat.",
                        "Perusahaan X tidak pernah membayar pajak.",
                        "Jika berkas pajak lengkap, maka Perusahaan X tetap terkena sanksi."
                    ],
                    ans: 0,
                    exp: "Dikenai sanksi berarti ~r (tidak bebas sanksi). Dengan Modus Tollens pada (p ∧ q) → r diperoleh ~(p ∧ q) ≡ (~p ∨ ~q): Berkas pajak tidak lengkap ATAU pembayaran tidak dilakukan sebelum jatuh tempo."
                },
                {
                    q: "Premis 1: Jika tekanan udara di dalam kabin pesawat mengalami kebocoran, maka masker oksigen jatuh secara otomatis.\nPremis 2: Selama penerbangan berlangsung, masker oksigen tidak jatuh.\nSimpulan yang sah adalah...",
                    opts: [
                        "Pesawat terbang pada ketinggian rendah.",
                        "Sistem otomatis masker oksigen sedang dimatikan.",
                        "Tekanan udara di dalam kabin pesawat tidak mengalami kebocoran.",
                        "Penumpang tidak membutuhkan oksigen tambahan."
                    ],
                    ans: 2,
                    exp: "Berdasarkan Modus Tollens (p → q dan ~q ∴ ~p), karena masker oksigen tidak jatuh (~q), maka tekanan udara kabin pasti tidak mengalami kebocoran (~p)."
                },
                {
                    q: "Premis 1: Jika cuaca di Selat Sunda cerah, maka kapal feri berangkat tepat waktu.\nPremis 2: Jika kapal feri berangkat tepat waktu, maka truk logistik tiba di gudang sebelum pukul 22.00.\nFaktanya, truk logistik baru tiba di gudang pada pukul 23.30. Simpulan yang benar adalah...",
                    opts: [
                        "Kapal feri berangkat tepat waktu tetapi jalan raya macet.",
                        "Cuaca di Selat Sunda tidak cerah.",
                        "Cuaca di Selat Sunda cerah tetapi kapal feri rusak.",
                        "Truk logistik tidak naik kapal feri."
                    ],
                    ans: 1,
                    exp: "Tiba pukul 23.30 berarti TIDAK tiba sebelum pukul 22.00 (~r). Dari rantai p → q → r dan ~r, Modus Tollens berantai menghasilkan ~p: Cuaca di Selat Sunda tidak cerah."
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
                },
                {
                    q: "Analis Transportasi: 'Pemberlakuan tarif parkir progresif yang tinggi di pusat kota akan memaksa pengguna mobil pribadi beralih menggunakan transportasi umum seperti MRT dan bus kota.'\nManakah pernyataan yang paling MEMPERLEMAH argumen analis tersebut?",
                    opts: [
                        "Sebagian besar gedung perkantoran di pusat kota menyediakan tunjangan parkir gratis penuh bagi karyawannya.",
                        "Stasiun MRT dan halte bus kota terletak tepat di depan gedung-gedung perkantoran pusat kota.",
                        "Tarif MRT dan bus kota disubsidi oleh pemerintah daerah sehingga sangat terjangkau.",
                        "Kemacetan di pusat kota paling parah terjadi pada jam berangkat dan pulang kerja."
                    ],
                    ans: 0,
                    exp: "Jika karyawan mendapatkan fasilitas parkir gratis penuh dari kantornya, kenaikan tarif parkir progresif tidak akan membebani biaya mereka, sehingga tidak akan memaksa mereka beralih ke transportasi umum."
                },
                {
                    q: "Ahli Ekologi: 'Pelepasliaran burung hantu (Tyto alba) di area persawahan Desa Makmur terbukti efektif menekan populasi hama tikus sawah tanpa merusak ekosistem.'\nManakah fakta di bawah ini yang paling MEMPERKUAT pernyataan ahli ekologi tersebut?",
                    opts: [
                        "Burung hantu Tyto alba memiliki bulu berwarna cokelat keputihan yang indah.",
                        "Satu ekor burung hantu dewasa memangsa rata-rata 3 hingga 5 ekor tikus sawah setiap malam dan tidak memakan bulir padi.",
                        "Petani di desa tetangga masih menggunakan racun kimia untuk membasmi hama tikus.",
                        "Populasi burung pipit di area persawahan Desa Makmur tidak mengalami perubahan."
                    ],
                    ans: 1,
                    exp: "Bukti bahwa satu ekor burung hantu memangsa 3–5 ekor tikus per malam dan tidak merusak padi secara langsung mendukung efektivitas pengendalian hama tikus sekaligus keamanannya bagi ekosistem sawah."
                },
                {
                    q: "Direktur Pemasaran: 'Setelah kami mengganti desain kemasan biskuit menjadi warna merah menyala pada bulan Juni, penjualan biskuit naik 40%. Ini membuktikan bahwa konsumen lebih menyukai kemasan warna merah.'\nManakah informasi yang paling MEMPERLEMAH kesimpulan direktur tersebut?",
                    opts: [
                        "Biaya cetak kemasan warna merah sama dengan kemasan warna biru sebelumnya.",
                        "Pada bulan Juni, pesaing utama biskuit tersebut menarik seluruh produknya dari pasar akibat kendala pabrik.",
                        "Survei menunjukkan warna merah mudah dikenali di rak swalayan.",
                        "Distribusi biskuit kemasan baru dilakukan secara serentak di seluruh cabang."
                    ],
                    ans: 1,
                    exp: "Hilangnya produk pesaing utama dari pasar pada bulan Juni merupakan penyebab alternatif yang kuat atas lonjakan penjualan 40%, sehingga melemahkan klaim bahwa kenaikan itu murni karena warna kemasan."
                },
                {
                    q: "Dokter Gigi: 'Mengunyah permen karet bebas gula yang mengandung xylitol setelah makan dapat mencegah pembentukan plak dan gigi berlubang.'\nManakah temuan ilmiah yang paling MEMPERKUAT pernyataan dokter gigi tersebut?",
                    opts: [
                        "Permen karet bebas gula tersedia dalam berbagai rasa buah yang menyegarkan napas.",
                        "Xylitol tidak dapat difermentasi oleh bakteri mulut menjadi asam perusak email gigi serta merangsang produksi air liur penetral asam.",
                        "Harga permen karet yang mengandung xylitol sedikit lebih mahal dibandingkan permen biasa.",
                        "Anak-anak usia sekolah dasar sangat gemar mengunyah permen karet."
                    ],
                    ans: 1,
                    exp: "Mekanisme biologis bahwa xylitol menghambat pembentukan asam oleh bakteri dan merangsang air liur penetral asam secara langsung memperkuat klaim pencegahan plak dan gigi berlubang."
                },
                {
                    q: "Pengamat Ekonomi: 'Kebijakan bekerja dari rumah (Work From Home) selama 3 hari seminggu akan meningkatkan produktivitas kerja karyawan perusahaan teknologi.'\nManakah fakta yang paling MEMPERLEMAH prediksi pengamat tersebut?",
                    opts: [
                        "Karyawan menghemat waktu tempuh perjalanan hingga 2 jam setiap harinya saat bekerja dari rumah.",
                        "Koordinasi tim teknis saat bekerja dari rumah sering terhambat oleh gangguan koneksi internet rumah dan distraksi domestik.",
                        "Perusahaan teknologi telah membekali setiap karyawan dengan laptop berspesifikasi tinggi.",
                        "Tingkat stres karyawan akibat kemacetan jalan raya menurun signifikan."
                    ],
                    ans: 1,
                    exp: "Hambatan koordinasi tim teknis akibat gangguan internet dan distraksi rumah menunjukkan adanya kendala langsung yang menurunkan kinerja, sehingga memperlemah klaim peningkatan produktivitas."
                },
                {
                    q: "Sejarawan: 'Situs candi yang baru ditemukan di lereng Gunung Kawi kemungkinan besar dibangun pada masa Kerajaan Majapahit, bukan masa Kerajaan Singasari.'\nTemuan arkeologis manakah yang paling MEMPERKUAT hipotesis sejarawan tersebut?",
                    opts: [
                        "Di sekitar situs candi ditemukan banyak pepohonan tua yang berusia ratusan tahun.",
                        "Struktur candi menggunakan batu bata merah dengan relief surya majapahit dan angka tahun prasasti 1365 Masehi.",
                        "Lokasi candi berjarak sekitar 30 kilometer dari pusat Kota Malang.",
                        "Sebagian batu candi telah mengalami pelapukan akibat lumut dan air hujan."
                    ],
                    ans: 1,
                    exp: "Penggunaan bata merah, relief khas Majapahit, dan angka tahun 1365 M (era puncak Majapahit, setelah runtuhnya Singasari tahun 1292 M) adalah bukti primer yang sangat memperkuat hipotesis tersebut."
                },
                {
                    q: "Petani Kopi: 'Menanam pohon pelindung seperti lamtoro di sela-sela kebun kopi arabika akan meningkatkan kualitas biji kopi yang dihasilkan.'\nManakah pernyataan yang paling MEMPERKUAT argumen petani kopi tersebut?",
                    opts: [
                        "Naungan pohon lamtoro menjaga suhu mikro kebun tetap sejuk sehingga buah kopi matang lebih merata dan padat nutrisi.",
                        "Kayu pohon lamtoro dapat dimanfaatkan petani sebagai kayu bakar.",
                        "Kopi robusta lebih tahan terhadap serangan hama karat daun dibandingkan kopi arabika.",
                        "Harga jual biji kopi arabika di pasar internasional sedang mengalami kenaikan."
                    ],
                    ans: 0,
                    exp: "Fakta bahwa naungan pohon pelindung membuat buah kopi matang lebih merata dan padat nutrisi menjelaskan hubungan sebab-akibat langsung mengapa kualitas biji kopi meningkat."
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
                },
                {
                    q: "Wacana: 'Semua kendaraan dinas yang berusia lebih dari 10 tahun wajib mengikuti uji emisi setiap enam bulan. Mobil operasional Kantor Pos X berusia 7 tahun.'\nNilai kebenaran dari simpulan: 'Mobil operasional Kantor Pos X tidak wajib mengikuti uji emisi setiap enam bulan' adalah...",
                    opts: [
                        "Pasti benar",
                        "Pasti salah",
                        "Tidak dapat dipastikan (belum tentu benar)",
                        "Saling bertentangan dengan premis utama"
                    ],
                    ans: 2,
                    exp: "Teks hanya mengatur kewajiban bagi kendaraan berusia > 10 tahun (p → q). Untuk kendaraan berusia ≤ 10 tahun (~p), teks tidak menyebutkan apakah bebas uji emisi atau tetap wajib karena aturan lain. Maka simpulannya tidak dapat dipastikan."
                },
                {
                    q: "Wacana: 'Senyawa plastik jenis PET dapat didaur ulang menjadi serat tekstil poliester. Pabrik Tekstil Maju hanya menggunakan bahan baku kapas organik murni untuk seluruh produk pakaiannya.'\nBerdasarkan wacana di atas, pernyataan 'Sebagian produk pakaian Pabrik Tekstil Maju mengandung serat hasil daur ulang plastik PET' bernilai...",
                    opts: [
                        "Pasti benar",
                        "Mungkin benar",
                        "Pasti salah",
                        "Tidak relevan"
                    ],
                    ans: 2,
                    exp: "Kata kunci pada teks adalah 'hanya menggunakan bahan baku kapas organik murni untuk seluruh produknya'. Maka klaim bahwa sebagian produknya mengandung serat plastik PET bertentangan langsung dengan fakta teks dan bernilai PASTI SALAH."
                },
                {
                    q: "Wacana: 'Jika curah hujan bulanan di bawah 50 mm, maka petani di Kabupaten S menanam palawija. Jika petani menanam palawija, maka kebutuhan air irigasi berkurang 40%.'\nFakta bulan ini: Curah hujan di Kabupaten S tercatat 35 mm. Bagaimana kualitas simpulan: 'Kebutuhan air irigasi di Kabupaten S berkurang 40%'?",
                    opts: [
                        "Simpulan tersebut pasti benar.",
                        "Simpulan tersebut mungkin benar.",
                        "Simpulan tersebut pasti salah.",
                        "Simpulan tidak relevan dengan informasi yang diberikan."
                    ],
                    ans: 0,
                    exp: "Curah hujan 35 mm (< 50 mm) memenuhi syarat pertama (p). Melalui rantai silogisme dan Modus Ponens (p → q → r, dan p benar), maka akibat akhir (r: kebutuhan air irigasi berkurang 40%) PASTI BENAR."
                },
                {
                    q: "Wacana: 'Lebih dari 80% kebakaran hutan di Provinsi R pada musim kemarau terjadi di lahan gambut yang mengering. Pemadaman api di lahan gambut membutuhkan waktu tiga kali lebih lama dibandingkan di lahan tanah mineral.'\nManakah pernyataan yang PASTI BENAR berdasarkan wacana tersebut?",
                    opts: [
                        "Tidak ada kebakaran hutan di Provinsi R yang terjadi di lahan tanah mineral.",
                        "Sebagian kecil (kurang dari 20%) kebakaran hutan di Provinsi R pada musim kemarau terjadi di luar lahan gambut yang mengering.",
                        "Kebakaran di lahan tanah mineral tidak pernah bisa dipadamkan.",
                        "Lahan gambut hanya dapat ditemukan di Provinsi R."
                    ],
                    ans: 1,
                    exp: "Jika lebih dari 80% (tetapi tidak disebutkan 100%) terjadi di lahan gambut mengering, proporsi sisanya (< 20%) terjadi di luar kategori tersebut. Opsi A, C, dan D mengandung klaim mutlak yang tidak didukung teks."
                },
                {
                    q: "Wacana: 'Pasien yang menderita alergi penisilin tidak boleh diberikan antibiotik golongan beta-laktam. Dokter meresepkan antibiotik golongan beta-laktam kepada Pasien Y setelah memeriksa rekam medisnya secara teliti.'\nJika keputusan dokter tersebut sesuai prosedur medis pada wacana, maka simpulan 'Pasien Y tidak menderita alergi penisilin' adalah...",
                    opts: [
                        "Pasti benar",
                        "Pasti salah",
                        "Tidak relevan",
                        "Kurang informasi"
                    ],
                    ans: 0,
                    exp: "Premis: Alergi penisilin (p) → Tidak boleh diberi beta-laktam (q). Fakta: Pasien Y diberi beta-laktam (~q). Berdasarkan Modus Tollens, Pasien Y pasti tidak menderita alergi penisilin (~p). Jadi simpulan PASTI BENAR."
                },
                {
                    q: "Wacana: 'Semua logam transisi pada periode keempat memiliki titik lebur di atas 1.000°C, kecuali seng (Zn). Unsur M adalah logam transisi periode keempat yang melebur pada suhu 420°C.'\nPernyataan manakah yang PASTI BENAR mengenai Unsur M?",
                    opts: [
                        "Unsur M bukan merupakan logam transisi.",
                        "Unsur M adalah seng (Zn).",
                        "Unsur M terletak pada periode kelima.",
                        "Titik lebur Unsur M salah diukur."
                    ],
                    ans: 1,
                    exp: "Satu-satunya logam transisi periode keempat yang titik leburnya tidak di atas 1.000°C adalah seng (Zn). Karena Unsur M adalah logam transisi periode keempat dengan titik lebur 420°C (< 1.000°C), maka Unsur M pasti adalah seng (Zn)."
                },
                {
                    q: "Wacana: 'Toko Roti Harum hanya memberikan diskon 50% untuk produk roti yang dipanggang sehari sebelumnya dan dijual di atas pukul 20.00. Riko membeli roti di Toko Roti Harum pada pukul 19.00.'\nBagaimana kualitas simpulan: 'Riko mendapatkan diskon 50% dari Toko Roti Harum'?",
                    opts: [
                        "Pasti benar",
                        "Mungkin benar",
                        "Pasti salah",
                        "Tidak relevan"
                    ],
                    ans: 2,
                    exp: "Kata 'hanya' menunjukkan syarat mutlak (perlu): Diskon 50% → (roti kemarin DAN dibeli di atas pukul 20.00). Karena Riko membeli pukul 19.00 (syarat waktu tidak terpenuhi), maka ia pasti tidak mendapatkan diskon 50%. Jadi simpulan tersebut PASTI SALAH."
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
                },
                {
                    q: "Teks: 'Paparan cahaya biru (blue light) dari layar gawai pada malam hari menekan sekresi hormon melatonin di otak. Penurunan hormon melatonin membuat waktu mulai tidur menjadi mundur dan kualitas tidur fase dalam (deep sleep) menurun.'\nSimpulan yang paling logis berdasarkan teks tersebut adalah...",
                    opts: [
                        "Penggunaan gawai pada siang hari tidak memiliki dampak kesehatan apa pun.",
                        "Paparan cahaya biru dari layar gawai pada malam hari dapat mengganggu waktu dan kualitas tidur seseorang.",
                        "Hormon melatonin hanya diproduksi oleh orang yang tidak memiliki gawai.",
                        "Semua penderita insomnia pasti disebabkan oleh paparan cahaya biru."
                    ],
                    ans: 1,
                    exp: "Menghubungkan sebab awal (paparan cahaya biru gawai malam hari) dengan akibat akhir (waktu tidur mundur dan kualitas tidur menurun) menghasilkan simpulan pada opsi B."
                },
                {
                    q: "Teks: 'Penggunaan pupuk kimia sintetis secara terus-menerus tanpa diimbangi pupuk organik menyebabkan populasi mikroorganisme pengurai di dalam tanah menyusut. Menyusutnya mikroorganisme pengurai membuat struktur tanah menjadi keras dan daya serap airnya menurun drastis.'\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Pupuk kimia sintetis sama sekali tidak mengandung unsur hara bagi tanaman.",
                        "Pemakaian pupuk kimia sintetis terus-menerus tanpa pupuk organik dapat mengeraskan struktur tanah dan menurunkan daya serap airnya.",
                        "Semua petani di Indonesia sudah beralih menggunakan pupuk organik murni.",
                        "Tanah yang keras hanya dapat dipulihkan dengan menanam tanaman kacang-kacangan."
                    ],
                    ans: 1,
                    exp: "Rantai kausalitas: Pupuk kimia terus-menerus tanpa organik → mikroorganisme menyusut → tanah keras & daya serap air turun. Opsi B merangkum ujung awal hingga ujung akhir rantai tersebut secara akurat."
                },
                {
                    q: "Teks: 'Perusahaan rintisan (startup) yang fokus pada pertumbuhan pengguna secara agresif dengan membakar modal besar rentan mengalami krisis kas ketika pendanaan investor mengering. Sebaliknya, perusahaan rintisan yang menjaga efisiensi operasional sejak awal mampu bertahan lebih lama saat kondisi ekonomi memburuk.'\nSimpulan yang paling tepat dari teks di atas adalah...",
                    opts: [
                        "Investor tidak mau lagi mendanai perusahaan rintisan di bidang teknologi.",
                        "Ketahanan sebuah perusahaan rintisan saat ekonomi memburuk sangat dipengaruhi oleh efisiensi pengelolaan modal dan operasionalnya.",
                        "Semua perusahaan rintisan yang memberikan promo diskon pasti akan bangkrut.",
                        "Perusahaan rintisan tidak memerlukan pertumbuhan jumlah pengguna baru."
                    ],
                    ans: 1,
                    exp: "Paragraf membandingkan dua strategi startup (bakar modal agresif vs efisiensi operasional) dan dampaknya terhadap daya tahan perusahaan saat krisis/pendanaan mengering. Opsi B menyimpulkan perbandingan tersebut dengan tepat."
                },
                {
                    q: "Teks: 'Konsumsi serat pangan larut seperti beta-glukan pada gandum utuh membentuk gel kental di saluran pencernaan. Gel ini mengikat asam empedu dan kolesterol, lalu membuangnya bersama feses sehingga kadar kolesterol jahat (LDL) dalam darah berkurang.'\nSimpulan yang paling logis dari wacana tersebut adalah...",
                    opts: [
                        "Mengonsumsi gandum utuh yang kaya serat larut membantu menurunkan kadar kolesterol jahat (LDL) dalam darah.",
                        "Penderita kolesterol tinggi dilarang mengonsumsi nasi putih sama sekali.",
                        "Serat pangan larut hanya terdapat pada tanaman gandum impor.",
                        "Asam empedu tidak lagi diproduksi oleh hati jika seseorang makan gandum."
                    ],
                    ans: 0,
                    exp: "Sebab awal: konsumsi serat larut (beta-glukan) pada gandum utuh. Akibat akhir: kadar kolesterol jahat (LDL) dalam darah berkurang. Opsi A menggabungkan keduanya secara tepat."
                },
                {
                    q: "Teks: 'Di kawasan perkotaan yang padat, ruang terbuka hijau (RTH) berfungsi menyerap polutan udara sekaligus menurunkan suhu permukaan melalui proses evapotranspirasi tanaman. Kota-kota yang luas RTH-nya kurang dari 10% tercatat memiliki suhu rata-rata siang hari 3°C lebih panas dibandingkan kota yang memiliki RTH di atas 30%.'\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Suhu udara di perkotaan hanya dipengaruhi oleh jumlah kendaraan bermotor.",
                        "Ketersediaan ruang terbuka hijau yang memadai berperan penting dalam menjaga kesejukan suhu dan kualitas udara perkotaan.",
                        "Seluruh gedung di perkotaan harus dibongkar untuk dijadikan hutan kota.",
                        "Tanaman di ruang terbuka hijau tidak dapat tumbuh jika suhu udara naik 3°C."
                    ],
                    ans: 1,
                    exp: "Wacana menjelaskan fungsi RTH (menyerap polutan & menurunkan suhu) serta bukti perbandingan suhu antar-kota berdasarkan persentase RTH. Opsi B menyimpulkan inti gagasan tersebut secara akurat."
                },
                {
                    q: "Teks: 'Penerapan sistem pembayaran nontunai (cashless) di jalan tol memangkas waktu transaksi di gerbang tol dari rata-rata 12 detik menjadi kurang dari 4 detik per kendaraan. Meskipun demikian, kemacetan panjang masih sering terjadi di dekat gerbang keluar tol akibat penyempitan lajur jalan arteri.'\nSimpulan yang paling sesuai dengan teks adalah...",
                    opts: [
                        "Sistem pembayaran nontunai gagal mempercepat waktu transaksi di gerbang tol.",
                        "Pembayaran nontunai berhasil mempercepat transaksi di gerbang tol, tetapi belum sepenuhnya mengatasi kemacetan akibat faktor penyempitan jalan arteri.",
                        "Gerbang tol sebaiknya kembali menggunakan pembayaran uang tunai.",
                        "Penyempitan lajur jalan arteri disebabkan oleh penggunaan kartu pembayaran nontunai."
                    ],
                    ans: 1,
                    exp: "Teks memuat hubungan konsesif ('Meskipun demikian'): pembayaran nontunai mempercepat transaksi gerbang tol, namun kemacetan tetap muncul karena penyempitan jalan arteri. Opsi B menangkap kedua sisi fakta tersebut."
                },
                {
                    q: "Teks: 'Bakteri extremophile yang hidup di kawah hidrotermal dasar laut memiliki enzim polimerase yang tahan terhadap suhu di atas 90°C. Sifat tahan panas ini membuat enzim tersebut sangat ideal digunakan dalam teknik penggandaan DNA (PCR) di laboratorium diagnostik yang memerlukan siklus pemanasan berulang.'\nSimpulan yang paling tepat adalah...",
                    opts: [
                        "Semua bakteri dasar laut berbahaya bagi kesehatan manusia.",
                        "Keunggulan enzim tahan panas dari bakteri kawah hidrotermal menjadikannya komponen penting dalam proses penggandaan DNA (PCR).",
                        "Teknik PCR hanya dapat dilakukan di dasar laut bersuhu tinggi.",
                        "DNA manusia akan rusak jika dipanaskan menggunakan enzim bakteri."
                    ],
                    ans: 1,
                    exp: "Premis 1: Bakteri hidrotermal punya enzim tahan panas > 90°C. Premis 2: Sifat tahan panas itu ideal untuk teknik PCR. Simpulan logisnya adalah opsi B."
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
                },
                {
                    q: "Pada percobaan laboratorium, larutan asam klorida (HCl), asam sulfat (H₂SO₄), dan asam nitrat (HNO₃) diuji dengan indikator fenolftalein dan ketiganya tetap tidak berwarna. Ketika ketiganya direaksikan dengan logam magnesium, ketiganya menghasilkan gelembung gas hidrogen.\nGeneralisasi induktif yang paling tepat dari percobaan tersebut adalah...",
                    opts: [
                        "Semua zat cair yang bening pasti mengandung asam klorida.",
                        "Larutan asam kuat tidak mengubah warna indikator fenolftalein dan bereaksi dengan logam magnesium menghasilkan gas hidrogen.",
                        "Logam magnesium hanya dapat bereaksi dengan larutan asam nitrat.",
                        "Indikator fenolftalein selalu rusak jika terkena gas hidrogen."
                    ],
                    ans: 1,
                    exp: "HCl, H₂SO₄, dan HNO₃ merupakan sampel representatif dari kelompok larutan asam kuat. Kedua sifat yang konsisten teramati pada ketiganya dapat digeneralisasikan untuk kelompok larutan asam kuat."
                },
                {
                    q: "Data Kementerian Pertanian di 8 provinsi sentra beras menunjukkan bahwa desa-desa yang menerapkan sistem irigasi tetes otomatis mengalami penghematan air hingga 45% dan peningkatan hasil panen rata-rata 20% dibandingkan desa yang memakai irigasi konvensional.\nSimpulan generalisasi yang paling kuat adalah...",
                    opts: [
                        "Penerapan sistem irigasi tetes otomatis di sentra pertanian cenderung meningkatkan efisiensi penggunaan air sekaligus mendongkrak hasil panen.",
                        "Petani yang menggunakan irigasi konvensional tidak akan pernah berhasil memanen padi.",
                        "Sistem irigasi tetes otomatis tidak membutuhkan biaya perawatan sama sekali.",
                        "Seluruh lahan pertanian di dunia sudah menggunakan sistem irigasi tetes otomatis."
                    ],
                    ans: 0,
                    exp: "Pengamatan di 8 provinsi sentra beras konsisten menunjukkan dua dampak positif irigasi tetes otomatis (hemat air & hasil panen naik). Opsi A merumuskan generalisasi secara proporsional dengan kata 'cenderung'."
                },
                {
                    q: "Seorang peneliti ingin menarik kesimpulan umum mengenai rata-rata durasi belajar mandiri siswa SMA di Provinsi Jawa Timur. Manakah metode pengambilan sampel di bawah ini yang akan menghasilkan generalisasi PALING VALID?",
                    opts: [
                        "Mewawancarai 20 siswa peraih medali olimpiade sains di satu SMA favorit di Surabaya.",
                        "Menyebarkan kuesioner kepada 1.500 siswa SMA yang dipilih secara acak proporsional dari berbagai kabupaten dan kota di Jawa Timur.",
                        "Mengamati kebiasaan belajar 5 orang siswa yang sedang berada di perpustakaan daerah pada hari Minggu.",
                        "Menanyakan pendapat 10 guru bimbingan konseling di satu sekolah swasta."
                    ],
                    ans: 1,
                    exp: "Generalisasi induktif yang kuat menuntut ukuran sampel yang cukup besar (1.500 siswa) dan representatif mewakili keberagaman populasi (acak proporsional dari berbagai kabupaten/kota di Jawa Timur)."
                },
                {
                    q: "Selama lima tahun berturut-turut, indeks kualitas sungai di kawasan industri tekstil A, kawasan industri kulit B, dan kawasan industri kertas C memburuk setiap kali pengawasan instalasi pengolahan air limbah (IPAL) dilonggarkan.\nGeneralisasi yang paling tepat berdasarkan fakta tersebut adalah...",
                    opts: [
                        "Pelonggaran pengawasan IPAL di kawasan industri berdampak pada penurunan kualitas air sungai di sekitarnya.",
                        "Semua sungai di Indonesia sudah tidak layak digunakan sebagai sumber air baku.",
                        "Industri kertas menghasilkan limbah yang paling sedikit dibandingkan industri tekstil.",
                        "Kualitas air sungai hanya dipengaruhi oleh curah hujan tahunan."
                    ],
                    ans: 0,
                    exp: "Dari tiga kawasan industri berbeda selama lima tahun, pola yang berulang secara konsisten adalah pelonggaran pengawasan IPAL diikuti penurunan kualitas sungai. Opsi A merangkum pola umum tersebut."
                },
                {
                    q: "Kopi gayo dari Aceh memiliki cita rasa khas yang dipengaruhi ketinggian tanah vulkanik. Kopi kintamani dari Bali dan kopi toraja dari Sulawesi juga memiliki karakter rasa unik sesuai kondisi tanah dan ketinggian wilayah tanamnya.\nKesimpulan umum (generalisasi) yang paling tepat adalah...",
                    opts: [
                        "Semua jenis kopi di Indonesia memiliki rasa yang sama persis.",
                        "Karakteristik cita rasa kopi nusantara sangat dipengaruhi oleh kondisi geografis dan tanah tempat kopi tersebut ditanam.",
                        "Tanaman kopi hanya bisa tumbuh di pulau Sumatra, Bali, dan Sulawesi.",
                        "Kopi gayo lebih mahal daripada kopi kintamani dan kopi toraja."
                    ],
                    ans: 1,
                    exp: "Ketiga sampel kopi nusantara menunjukkan pola yang sama: cita rasanya dipengaruhi oleh kondisi tanah dan ketinggian wilayah tanamnya (kondisi geografis)."
                },
                {
                    q: "Rudi membeli dua buah durian di sebuah kios pinggir jalan dan mendapati kedua durian tersebut hambar. Rudi langsung menyimpulkan bahwa semua durian yang dijual pedagang di seluruh kota itu pasti hambar.\nKesalahan penalaran induktif yang dilakukan Rudi adalah...",
                    opts: [
                        "Salah menempatkan urutan sebab dan akibat.",
                        "Menarik generalisasi dari jumlah sampel yang terlalu sedikit dan tidak mewakili populasi.",
                        "Menggunakan kata yang bermakna ganda (ambiguitas).",
                        "Membandingkan dua buah yang berbeda jenisnya."
                    ],
                    ans: 1,
                    exp: "Menyimpulkan sifat seluruh populasi di satu kota hanya dari 2 buah sampel di satu kios merupakan kesalahan generalisasi tergesa-gesa (sampel terlalu kecil dan tidak representatif)."
                },
                {
                    q: "Pengamatan astronomi terhadap Planet Yupiter, Saturnus, Uranus, dan Neptunus menunjukkan bahwa keempat planet raksasa yang berada di luar sabuk asteroid tersebut semuanya memiliki sistem cincin dan banyak satelit alami.\nGeneralisasi yang paling didukung oleh data pengamatan tersebut adalah...",
                    opts: [
                        "Semua benda langit di tata surya memiliki sistem cincin.",
                        "Planet-planet raksasa di luar sabuk asteroid dalam tata surya kita memiliki sistem cincin dan banyak satelit alami.",
                        "Bumi dan Mars akan segera membentuk sistem cincin seperti Saturnus.",
                        "Satelit alami hanya dapat terbentuk dari pecahan asteroid."
                    ],
                    ans: 1,
                    exp: "Keempat planet (Yupiter, Saturnus, Uranus, Neptunus) mencakup seluruh anggota kelompok planet raksasa luar di tata surya kita, sehingga sifat kepemilikan cincin dan banyak satelit alami berlaku umum bagi kelompok tersebut."
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
                },
                {
                    q: "MITOKONDRIA : SEL = ... : ...",
                    opts: [
                        "Kemudi : Kapal Laut",
                        "Reaktor Pembangkit : Pabrik",
                        "Jendela : Rumah",
                        "Layar : Komputer"
                    ],
                    ans: 1,
                    exp: "Kalimat penghubung: 'MITOKONDRIA adalah bagian penghasil energi utama di dalam SEL'. Pola yang setara adalah: 'REAKTOR PEMBANGKIT adalah bagian penghasil energi utama di dalam PABRIK'."
                },
                {
                    q: "SEISMOGRAF : GEMPA BUMI = ... : ...",
                    opts: [
                        "Barometer : Tekanan Udara",
                        "Teleskop : Bintang Jatuh",
                        "Mikroskop : Laboratorium",
                        "Stetoskop : Rumah Sakit"
                    ],
                    ans: 0,
                    exp: "Kalimat penghubung: 'SEISMOGRAF adalah alat ukur untuk mendeteksi kekuatan GEMPA BUMI'. Setara dengan: 'BAROMETER adalah alat ukur untuk mendeteksi besarnya TEKANAN UDARA'."
                },
                {
                    q: " ULAT : KUPU-KUPU = ... : ...",
                    opts: [
                        "Telur : Ayam Goreng",
                        "Berudu : Katak",
                        "Anak Kucing : Harimau",
                        "Biji : Daun"
                    ],
                    ans: 1,
                    exp: "Kalimat penghubung: 'ULAT adalah fase larva yang mengalami metamorfosis menjadi KUPU-KUPU dewasa'. Setara dengan: 'BERUDU adalah fase larva yang mengalami metamorfosis menjadi KATAK dewasa'."
                },
                {
                    q: "VAKSIN : IMUNITAS = ... : ...",
                    opts: [
                        "Racun : Kesehatan",
                        "Latihan Fisik : Kebugaran",
                        "Obat Tidur : Insomnia",
                        "Kacamata : Kebutaan"
                    ],
                    ans: 1,
                    exp: "Kalimat penghubung: 'Pemberian VAKSIN bertujuan membangun/meningkatkan IMUNITAS tubuh'. Setara dengan: 'LATIHAN FISIK bertujuan membangun/meningkatkan KEBUGARAN tubuh'."
                },
                {
                    q: "KONSTITUSI : NEGARA = ... : ...",
                    opts: [
                        "Anggaran Dasar : Organisasi",
                        "Kamus : Bahasa",
                        "Peta : Wilayah",
                        "Resep : Restoran"
                    ],
                    ans: 0,
                    exp: "Kalimat penghubung: 'KONSTITUSI adalah aturan dasar tertulis yang menjadi landasan hukum berjalannya suatu NEGARA'. Setara dengan: 'ANGGARAN DASAR adalah aturan dasar tertulis yang menjadi landasan berjalannya suatu ORGANISASI'."
                },
                {
                    q: "ABRASI : GELOMBANG LAUT = ... : ...",
                    opts: [
                        "Reboisasi : Hutan Gundul",
                        "Deflasi : Bank Sentral",
                        "Korosi : Oksigen dan Air",
                        "Irigasi : Sawah"
                    ],
                    ans: 2,
                    exp: "Kalimat penghubung (Akibat : Sebab): 'ABRASI (pengikisan pantai) adalah proses perusakan yang disebabkan oleh GELOMBANG LAUT'. Setara dengan: 'KOROSI (perkaratan logam) adalah proses perusakan yang disebabkan oleh OKSIGEN DAN AIR'."
                },
                {
                    q: "Perhatikan analogi berikut: 'Meminta siswa menghafal rumus fisika tanpa memahami konsep dasarnya sama seperti menyuruh seseorang menghafal lirik lagu berbahasa asing tanpa mengerti artinya.'\nSimpulan yang paling tepat dari analogi tersebut adalah...",
                    opts: [
                        "Belajar fisika sebaiknya dilakukan sambil mendengarkan lagu berbahasa asing.",
                        "Siswa yang hanya menghafal rumus tanpa konsep tidak akan mampu menerapkan rumus tersebut secara bermakna saat konteks soal berubah.",
                        "Rumus fisika ditulis menggunakan bahasa asing yang sulit diterjemahkan.",
                        "Menghafal lirik lagu jauh lebih bermanfaat daripada menghafal rumus fisika."
                    ],
                    ans: 1,
                    exp: "Orang yang menghafal lirik tanpa tahu arti kata-katanya hanya bisa mengulang bunyi tetapi tidak paham maknanya; analog dengan siswa yang sekadar menghafal rumus tanpa paham konsep sehingga bingung menerapkannya secara kontekstual."
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
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Pupuk nitrogen yang berlebihan terbawa aliran air hujan masuk ke perairan danau.\n(2) Terjadi ledakan pertumbuhan eceng gondok dan alga (eutrofikasi) yang menutupi permukaan danau.\nHubungan yang paling tepat antara kedua pernyataan tersebut adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama.",
                        "Pernyataan (1) dan (2) adalah akibat dari dua penyebab yang tidak saling berhubungan."
                    ],
                    ans: 0,
                    exp: "Limpasan pupuk kaya unsur nitrogen ke danau (1) menyuburkan perairan secara berlebih sehingga memicu ledakan populasi alga dan eceng gondok/eutrofikasi (2). Maka (1) adalah penyebab dan (2) adalah akibat."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Jumlah penderita infeksi saluran pernapasan akut (ISPA) di Kota Pekanbaru meningkat tajam pada bulan September.\n(2) Beberapa jadwal penerbangan di Bandara Sultan Syarif Kasim II Pekanbaru ditunda akibat jarak pandang di bawah 500 meter pada bulan September.\nHubungan kedua pernyataan di atas adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama.",
                        "Pernyataan (1) dan (2) adalah akibat dari dua penyebab yang tidak saling berhubungan."
                    ],
                    ans: 2,
                    exp: "Kenaikan penderita ISPA (1) dan penundaan pesawat akibat jarak pandang pendek (2) tidak saling menyebabkan satu sama lain, melainkan keduanya adalah AKIBAT dari satu penyebab yang sama, yaitu bencana kabut asap kebakaran hutan/lahan."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Nilai tukar mata uang rupiah melemah tajam terhadap dolar Amerika Serikat.\n(2) Biaya produksi pabrik perakitan elektronik di dalam negeri yang mengandalkan komponen impor mengalami kenaikan.\nHubungan kedua pernyataan tersebut adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari dua penyebab yang tidak saling berhubungan.",
                        "Pernyataan (1) dan (2) tidak memiliki hubungan kausalitas."
                    ],
                    ans: 0,
                    exp: "Ketika rupiah melemah terhadap dolar AS (1), harga beli komponen impor dalam rupiah menjadi lebih mahal, sehingga mengakibatkan biaya produksi pabrik perakitan naik (2). Jadi (1) penyebab dan (2) akibat."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Tingkat literasi membaca siswa sekolah menengah di Kabupaten X meningkat 15% tahun ini.\n(2) Produksi perikanan tangkap nelayan di pesisir Kabupaten X menurun akibat gelombang tinggi.\nHubungan yang tepat antara kedua pernyataan tersebut adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama.",
                        "Pernyataan (1) dan (2) adalah akibat dari dua penyebab yang tidak saling berhubungan."
                    ],
                    ans: 3,
                    exp: "Kenaikan literasi siswa sekolah (akibat program pendidikan) dan penurunan hasil tangkapan ikan nelayan (akibat cuaca laut) adalah dua peristiwa di bidang berbeda yang disebabkan oleh dua faktor yang tidak saling berhubungan."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Pasien mengonsumsi antibiotik tidak sampai habis sesuai dosis yang diresepkan dokter.\n(2) Bakteri patogen di dalam tubuh pasien mengalami mutasi dan menjadi kebal (resisten) terhadap antibiotik tersebut.\nHubungan kedua pernyataan tersebut adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama.",
                        "Pernyataan (1) dan (2) tidak memiliki hubungan sebab-akibat."
                    ],
                    ans: 0,
                    exp: "Menghentikan konsumsi antibiotik sebelum tuntas (1) menyisakan bakteri yang belum mati sempurna untuk beradaptasi, sehingga mengakibatkan timbulnya resistensi bakteri terhadap antibiotik (2)."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Banyak pohon pelindung di lereng perbukitan Hulu Sungai Ciliwung ditebang untuk dijadikan vila komersial.\n(2) Daya serap tanah terhadap air hujan di kawasan hulu berkurang drastis sehingga limpasan air permukaan meningkat.\nHubungan yang paling tepat adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari dua penyebab yang tidak saling berhubungan.",
                        "Pernyataan (1) dan (2) saling bertentangan."
                    ],
                    ans: 0,
                    exp: "Penebangan pohon di lereng bukit (1) menghilangkan akar penahan air dan kanopi tanah, yang secara langsung mengakibatkan berkurangnya daya serap tanah dan meningkatnya limpasan air permukaan (2)."
                },
                {
                    q: "Perhatikan dua pernyataan berikut:\n(1) Pendapatan asli daerah dari sektor pajak hotel dan restoran di Yogyakarta melonjak pada akhir bulan Desember.\n(2) Volume sampah domestik di kawasan wisata Malioboro meningkat dua kali lipat pada akhir bulan Desember.\nHubungan kedua pernyataan di atas adalah...",
                    opts: [
                        "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
                        "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
                        "Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama.",
                        "Pernyataan (1) dan (2) adalah akibat dari dua penyebab yang tidak saling berhubungan."
                    ],
                    ans: 2,
                    exp: "Lonjakan pajak hotel/restoran (1) dan peningkatan volume sampah di kawasan wisata (2) sama-sama merupakan AKIBAT dari satu penyebab yang sama, yaitu membeludaknya kunjungan wisatawan saat libur akhir tahun di bulan Desember."
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
                },
                {
                    q: "Berapa banyak bilangan prima yang terletak di antara 20 dan 40?",
                    opts: [
                        "3 bilangan",
                        "4 bilangan",
                        "5 bilangan",
                        "6 bilangan"
                    ],
                    ans: 1,
                    exp: "Daftar bilangan prima antara 20 dan 40 adalah: 23, 29, 31, dan 37 (21, 25, 27, 33, 35, 39 bukan prima). Jadi seluruhnya ada 4 bilangan."
                },
                {
                    q: "Jika a adalah bilangan bulat positif sedemikian sehingga (3a + 5) merupakan bilangan GENAP, maka manakah ekspresi di bawah ini yang PASTI merupakan bilangan GENAP?",
                    opts: [
                        "2a + 1",
                        "a²",
                        "a + 3",
                        "4a − 1"
                    ],
                    ans: 2,
                    exp: "Agar 3a + 5 bernilai genap, maka 3a harus ganjil (karena Ganjil + Ganjil = Genap), sehingga a pasti bilangan GANJIL. Maka a + 3 = Ganjil + Ganjil = GENAP."
                },
                {
                    q: "Jumlah dari tiga bilangan bulat genap berurutan adalah 78. Berapakah nilai bilangan terbesar di antara ketiganya?",
                    opts: [
                        "24",
                        "26",
                        "28",
                        "30"
                    ],
                    ans: 2,
                    exp: "Bilangan tengah (rata-rata) = 78 / 3 = 26. Tiga bilangan genap berurutan tersebut adalah 24, 26, dan 28. Maka bilangan terbesarnya adalah 28."
                },
                {
                    q: "Bilangan empat digit 4A5B habis dibagi 5 dan juga habis dibagi 9. Jika B adalah angka genap dan A adalah angka bukan nol, berapakah nilai A?",
                    opts: [
                        "4",
                        "5",
                        "7",
                        "9"
                    ],
                    ans: 3,
                    exp: "Agar habis dibagi 5 dan B genap, digit satuan B harus 0. Agar 4A50 habis dibagi 9, jumlah seluruh digitnya (4 + A + 5 + 0 = 9 + A) harus kelipatan 9. Karena A bukan nol, maka A = 9."
                },
                {
                    q: "Selisih antara Kelipatan Persekutuan Terkecil (KPK) dan Faktor Persekutuan Terbesar (FPB) dari bilangan 36 dan 48 adalah...",
                    opts: [
                        "120",
                        "132",
                        "144",
                        "156"
                    ],
                    ans: 1,
                    exp: "36 = 12 × 3 dan 48 = 12 × 4. Maka FPB = 12, sedangkan KPK = 12 × 3 × 4 = 144. Selisihnya = 144 − 12 = 132."
                },
                {
                    q: "Jika p adalah bilangan bulat negatif dan q adalah bilangan bulat positif, maka hasil operasi manakah yang PASTI menghasilkan bilangan bulat positif?",
                    opts: [
                        "q − p",
                        "p + q",
                        "p − q",
                        "p × q"
                    ],
                    ans: 0,
                    exp: "Karena q positif dan p negatif, maka q − p = Positif − (Negatif) = Positif + Positif, yang pasti menghasilkan bilangan bulat positif."
                },
                {
                    q: "Hasil kali dari dua bilangan asli yang berurutan adalah 156. Berapakah jumlah dari kedua bilangan tersebut?",
                    opts: [
                        "23",
                        "24",
                        "25",
                        "27"
                    ],
                    ans: 2,
                    exp: "Cari dua bilangan berurutan di sekitar √156 ≈ 12,5, yaitu 12 dan 13 (12 × 13 = 156). Jumlah kedua bilangan tersebut adalah 12 + 13 = 25."
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
                },
                {
                    q: "Hasil dari (0,125 × 560) + (0,25 × 120) adalah...",
                    opts: [
                        "90",
                        "100",
                        "110",
                        "120"
                    ],
                    ans: 1,
                    exp: "Ubah desimal ke pecahan istimewa: 0,125 = 1/8 dan 0,25 = 1/4. Maka (1/8 × 560) + (1/4 × 120) = 70 + 30 = 100."
                },
                {
                    q: "Nilai dari 155² − 145² adalah...",
                    opts: [
                        "1.500",
                        "2.500",
                        "3.000",
                        "3.500"
                    ],
                    ans: 2,
                    exp: "Gunakan sifat selisih kuadrat a² − b² = (a + b)(a − b): (155 + 145)(155 − 145) = 300 × 10 = 3.000."
                },
                {
                    q: "Jika p = 62,5% dari 32 dan q = √144 + 8, maka hubungan yang tepat antara p dan q adalah...",
                    opts: [
                        "p > q",
                        "p < q",
                        "p = q",
                        "p = 2q"
                    ],
                    ans: 2,
                    exp: "62,5% = 5/8, sehingga p = (5/8) × 32 = 20. Sedangkan q = 12 + 8 = 20. Maka berlaku p = q."
                },
                {
                    q: "Nilai dari (1 − 1/2)(1 − 1/3)(1 − 1/4)(1 − 1/5) adalah...",
                    opts: [
                        "0,20",
                        "0,25",
                        "0,40",
                        "0,80"
                    ],
                    ans: 0,
                    exp: "Sederhanakan tiap kurung: (1/2) × (2/3) × (3/4) × (4/5). Coret pembilang dan penyebut secara berantai (teleskopik), tersisa 1/5 = 0,20."
                },
                {
                    q: "Di antara empat pecahan berikut, manakah yang memiliki nilai PALING KECIL?",
                    opts: [
                        "4/7",
                        "3/5",
                        "5/9",
                        "11/20"
                    ],
                    ans: 3,
                    exp: "Ubah ke desimal: 4/7 ≈ 0,571; 3/5 = 0,600; 5/9 ≈ 0,556; dan 11/20 = 0,550. Jadi nilai yang paling kecil adalah 11/20."
                },
                {
                    q: "Hasil dari √0,64 + √0,09 − 0,5 adalah...",
                    opts: [
                        "0,4",
                        "0,6",
                        "0,8",
                        "1,1"
                    ],
                    ans: 1,
                    exp: "√0,64 = 0,8 dan √0,09 = 0,3. Maka 0,8 + 0,3 − 0,5 = 1,1 − 0,5 = 0,6."
                },
                {
                    q: "Jika x = 1.234 × 1.236 dan y = 1.235², maka nilai dari (y − x) adalah...",
                    opts: [
                        "1",
                        "0",
                        "2",
                        "1.235"
                    ],
                    ans: 0,
                    exp: "Misalkan n = 1.235. Maka x = (n − 1)(n + 1) = n² − 1, sedangkan y = n². Sehingga y − x = n² − (n² − 1) = 1."
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
                },
                {
                    q: "Rata-rata nilai praktikum dari 6 mahasiswa adalah 80. Setelah nilai 1 mahasiswa yang mengikuti praktikum susulan dimasukkan, rata-ratanya naik menjadi 82. Berapakah nilai mahasiswa susulan tersebut?",
                    opts: [
                        "88",
                        "90",
                        "92",
                        "94"
                    ],
                    ans: 3,
                    exp: "Total nilai 6 mahasiswa = 6 × 80 = 480. Total nilai 7 mahasiswa = 7 × 82 = 574. Nilai mahasiswa susulan = 574 − 480 = 94."
                },
                {
                    q: "Di sebuah divisi riset, rata-rata gaji 12 staf pria adalah Rp 6.000.000 dan rata-rata gaji 8 staf wanita adalah Rp 5.500.000. Berapakah rata-rata gaji seluruh staf di divisi tersebut?",
                    opts: [
                        "Rp 5.700.000",
                        "Rp 5.800.000",
                        "Rp 5.850.000",
                        "Rp 5.900.000"
                    ],
                    ans: 1,
                    exp: "Rata-rata gabungan = [(12 × 6.000.000) + (8 × 5.500.000)] / (12 + 8) = (72.000.000 + 44.000.000) / 20 = 116.000.000 / 20 = Rp 5.800.000."
                },
                {
                    q: "Diketahui data hasil kuis 8 siswa sebagai berikut: 7, 5, 9, 8, 6, 10, 7, 4. Berapakah nilai median dari data tersebut?",
                    opts: [
                        "6,5",
                        "7,0",
                        "7,5",
                        "8,0"
                    ],
                    ans: 1,
                    exp: "Urutkan data dari terkecil ke terbesar: 4, 5, 6, 7, 7, 8, 9, 10. Karena ada 8 data (genap), median adalah rata-rata data ke-4 dan ke-5: (7 + 7) / 2 = 7,0."
                },
                {
                    q: "Rata-rata dari 10 bilangan tercatat sebesar 45. Setelah diperiksa kembali, ternyata terdapat satu bilangan yang seharusnya bernilai 65 tetapi salah dicatat sebagai 35. Berapakah rata-rata yang sebenarnya?",
                    opts: [
                        "46,5",
                        "47,0",
                        "48,0",
                        "48,5"
                    ],
                    ans: 2,
                    exp: "Selisih koreksi nilai = 65 − 35 = +30. Kenaikan pada rata-rata untuk 10 bilangan = +30 / 10 = +3. Maka rata-rata sebenarnya = 45 + 3 = 48,0."
                },
                {
                    q: "Rata-rata usia 5 orang anggota tim ekspedisi adalah 30 tahun. Jika anggota termuda berusia 25 tahun dan selisih usia antara anggota tertua dan termuda adalah 10 tahun, berapakah rata-rata usia 3 anggota lainnya?",
                    opts: [
                        "28 tahun",
                        "30 tahun",
                        "31 tahun",
                        "32 tahun"
                    ],
                    ans: 1,
                    exp: "Total usia 5 anggota = 5 × 30 = 150 tahun. Usia anggota tertua = 25 + 10 = 35 tahun. Jumlah usia anggota termuda dan tertua = 25 + 35 = 60 tahun. Maka jumlah usia 3 anggota lainnya = 150 − 60 = 90 tahun, sehingga rata-ratanya = 90 / 3 = 30 tahun."
                },
                {
                    q: "Jangkauan (selisih nilai terbesar dan terkecil) dari sekumpulan data {12, 18, 9, 24, x, 15} adalah 20. Jika x merupakan nilai terbesar dalam data tersebut, berapakah nilai x?",
                    opts: [
                        "27",
                        "28",
                        "29",
                        "32"
                    ],
                    ans: 2,
                    exp: "Nilai terkecil pada data tersebut adalah 9. Karena x adalah nilai terbesar dan jangkauannya 20, maka x − 9 = 20 → x = 29."
                },
                {
                    q: "Rata-rata nilai ujian 15 siswa kelompok P adalah 76. Ketika 5 siswa dari kelompok Q digabungkan, rata-rata seluruhnya menjadi 78. Berapakah rata-rata nilai 5 siswa dari kelompok Q tersebut?",
                    opts: [
                        "80",
                        "82",
                        "84",
                        "86"
                    ],
                    ans: 2,
                    exp: "Total nilai 20 siswa = 20 × 78 = 1.560. Total nilai 15 siswa kelompok P = 15 × 76 = 1.140. Total nilai 5 siswa kelompok Q = 1.560 − 1.140 = 420. Rata-rata kelompok Q = 420 / 5 = 84."
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
                },
                {
                    q: "Data jumlah pengunjung museum sains selama 5 hari kerja:\nSenin: 150 orang | Selasa: 180 orang | Rabu: 210 orang | Kamis: 160 orang | Jumat: 200 orang.\nBerapakah persentase kenaikan jumlah pengunjung dari hari Kamis ke hari Jumat?",
                    opts: [
                        "20%",
                        "25%",
                        "30%",
                        "40%"
                    ],
                    ans: 1,
                    exp: "Kenaikan dari Kamis (160) ke Jumat (200) adalah 40 orang. Persentase kenaikan terhadap hari Kamis = (40 / 160) × 100% = (1/4) × 100% = 25%."
                },
                {
                    q: "Grafik batang mencatat volume ekspor bijih olahan (dalam juta ton) per kuartal: Kuartal I = 30, Kuartal II = 45, Kuartal III = 36, dan Kuartal IV = 49. Berapakah rata-rata volume ekspor per kuartal sepanjang tahun tersebut?",
                    opts: [
                        "38 juta ton",
                        "39 juta ton",
                        "40 juta ton",
                        "42 juta ton"
                    ],
                    ans: 2,
                    exp: "Total ekspor 4 kuartal = 30 + 45 + 36 + 49 = 160 juta ton. Rata-rata per kuartal = 160 / 4 = 40 juta ton."
                },
                {
                    q: "Diagram lingkaran (360°) memetakan distribusi 720 mahasiswa baru Fakultas MIPA: Kimia = 90°, Biologi = 100°, Fisika = 60°, dan sisanya adalah Matematika. Berapa banyak mahasiswa baru di jurusan Matematika?",
                    opts: [
                        "180 mahasiswa",
                        "200 mahasiswa",
                        "220 mahasiswa",
                        "240 mahasiswa"
                    ],
                    ans: 2,
                    exp: "Sudut juring Matematika = 360° − (90° + 100° + 60°) = 360° − 250° = 110°. Jumlah mahasiswa Matematika = (110° / 360°) × 720 = 110 × 2 = 220 mahasiswa."
                },
                {
                    q: "Tabel keuangan 4 cabang apotek (dalam juta rupiah):\n• Cabang P: Pendapatan 120, Biaya 90\n• Cabang Q: Pendapatan 150, Biaya 110\n• Cabang R: Pendapatan 100, Biaya 65\n• Cabang S: Pendapatan 180, Biaya 140\nJika margin laba bersih dihitung dengan rumus [(Pendapatan − Biaya) / Pendapatan] × 100%, cabang manakah yang memiliki persentase margin laba tertinggi?",
                    opts: [
                        "Cabang P",
                        "Cabang Q",
                        "Cabang R",
                        "Cabang S"
                    ],
                    ans: 2,
                    exp: "Hitung rasio laba bersih terhadap pendapatan: Cabang P = 30/120 = 25%; Cabang Q = 40/150 ≈ 26,7%; Cabang R = 35/100 = 35%; Cabang S = 40/180 ≈ 22,2%. Tertinggi adalah Cabang R (35%)."
                },
                {
                    q: "Grafik garis menunjukkan suhu cairan yang dipanaskan secara konstan: Menit ke-0 = 25°C, Menit ke-2 = 37°C, Menit ke-4 = 49°C, Menit ke-6 = 61°C. Jika laju kenaikan suhu tetap konstan, pada menit ke berapakah suhu cairan mencapai 97°C?",
                    opts: [
                        "Menit ke-10",
                        "Menit ke-12",
                        "Menit ke-14",
                        "Menit ke-16"
                    ],
                    ans: 1,
                    exp: "Setiap 2 menit suhu naik 12°C, artinya laju kenaikan adalah 6°C per menit. Dari suhu awal 25°C menuju 97°C dibutuhkan kenaikan sebesar 97 − 25 = 72°C. Waktu yang diperlukan = 72 / 6 = 12 menit."
                },
                {
                    q: "Tabel hasil uji kompetensi karyawan di empat departemen:\n• Departemen IT: 50 peserta, 42 lulus\n• Departemen Keuangan: 40 peserta, 36 lulus\n• Departemen Pemasaran: 60 peserta, 48 lulus\n• Departemen Logistik: 25 peserta, 22 lulus\nDepartemen manakah yang memiliki persentase kelulusan tertinggi?",
                    opts: [
                        "Departemen IT",
                        "Departemen Keuangan",
                        "Departemen Pemasaran",
                        "Departemen Logistik"
                    ],
                    ans: 1,
                    exp: "Persentase kelulusan: IT = 42/50 = 84%; Keuangan = 36/40 = 90%; Pemasaran = 48/60 = 80%; Logistik = 22/25 = 88%. Yang paling tinggi adalah Departemen Keuangan (90%)."
                },
                {
                    q: "Berdasarkan grafik tahunan, penjualan mobil hibrida pada tahun 2023 tercatat sebanyak 15.000 unit. Pada tahun 2024 penjualannya naik 40% dibanding tahun 2023, dan pada tahun 2025 naik lagi 20% dari capaian tahun 2024. Berapakah jumlah penjualan pada tahun 2025?",
                    opts: [
                        "24.000 unit",
                        "24.600 unit",
                        "25.200 unit",
                        "26.000 unit"
                    ],
                    ans: 2,
                    exp: "Penjualan tahun 2024 = 140% × 15.000 = 21.000 unit. Penjualan tahun 2025 = 120% × 21.000 = 25.200 unit."
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
                },
                {
                    q: "Harga 2 tiket dewasa dan 3 tiket anak-anak di sebuah planetarium adalah Rp 130.000. Jika harga 1 tiket dewasa Rp 15.000 lebih mahal daripada 1 tiket anak-anak, berapakah harga 1 tiket anak-anak?",
                    opts: [
                        "Rp 20.000",
                        "Rp 22.000",
                        "Rp 25.000",
                        "Rp 35.000"
                    ],
                    ans: 0,
                    exp: "Misalkan tiket anak = A, maka tiket dewasa D = A + 15.000. Substitusikan: 2(A + 15.000) + 3A = 130.000 → 5A + 30.000 = 130.000 → 5A = 100.000 → A = Rp 20.000."
                },
                {
                    q: "Sebuah tangki penampungan mula-mula berisi air sebanyak 1/4 dari kapasitas totalnya. Setelah ditambahkan air sebanyak 180 liter, isi tangki menjadi 3/4 dari kapasitas totalnya. Berapakah kapasitas penuh tangki tersebut?",
                    opts: [
                        "240 liter",
                        "300 liter",
                        "360 liter",
                        "400 liter"
                    ],
                    ans: 2,
                    exp: "Pertambahan bagian = 3/4 − 1/4 = 2/4 = 1/2 bagian tangki. Karena 1/2 bagian setara dengan 180 liter, maka kapasitas penuh tangki = 2 × 180 = 360 liter."
                },
                {
                    q: "Jumlah uang Sinta dan Tono adalah Rp 240.000. Apabila Sinta memberikan Rp 30.000 uangnya kepada Tono, maka uang mereka berdua menjadi sama banyak. Berapakah uang Sinta mula-mula?",
                    opts: [
                        "Rp 135.000",
                        "Rp 140.000",
                        "Rp 150.000",
                        "Rp 160.000"
                    ],
                    ans: 2,
                    exp: "Saat uang mereka sama banyak, masing-masing memegang Rp 240.000 / 2 = Rp 120.000. Karena kondisi itu dicapai setelah Sinta memberikan Rp 30.000, maka uang Sinta mula-mula = Rp 120.000 + Rp 30.000 = Rp 150.000."
                },
                {
                    q: "Dalam sebuah kompetisi sains yang terdiri dari 40 butir soal, jawaban benar diberi skor +4, salah diberi skor −1, dan tidak dijawab diberi skor 0. Budi menjawab 35 soal dan memperoleh total skor 110. Berapa banyak soal yang dijawab BENAR oleh Budi?",
                    opts: [
                        "28 soal",
                        "29 soal",
                        "30 soal",
                        "31 soal"
                    ],
                    ans: 1,
                    exp: "Misalkan jumlah soal benar = B, maka jumlah salah = 35 − B. Persamaan skor: 4B − 1(35 − B) = 110 → 5B − 35 = 110 → 5B = 145 → B = 29 soal."
                },
                {
                    q: "Keliling sebuah lahan kebun percobaan yang berbentuk persegi panjang adalah 64 meter. Jika ukuran panjangnya 8 meter lebih panjang daripada lebarnya, berapakah luas lahan kebun tersebut?",
                    opts: [
                        "220 m²",
                        "232 m²",
                        "240 m²",
                        "256 m²"
                    ],
                    ans: 2,
                    exp: "Setengah keliling (p + l) = 64 / 2 = 32 m. Diketahui p − l = 8 m. Jumlahkan keduanya: 2p = 40 → p = 20 m, sehingga l = 12 m. Luas kebun = 20 × 12 = 240 m²."
                },
                {
                    q: "Sebuah panitia menyewa total 8 unit kendaraan yang terdiri dari bus besar (kapasitas 40 penumpang) dan minibus (kapasitas 15 penumpang) untuk mengangkut tepat 220 peserta tanpa ada kursi kosong. Berapa unit bus besar yang disewa?",
                    opts: [
                        "3 unit",
                        "4 unit",
                        "5 unit",
                        "6 unit"
                    ],
                    ans: 1,
                    exp: "Misalkan semua 8 unit adalah minibus, maka terangkut 8 × 15 = 120 peserta. Sisa peserta = 220 − 120 = 100 orang. Karena selisih kapasitas bus besar dan minibus adalah 40 − 15 = 25 orang, maka jumlah bus besar = 100 / 25 = 4 unit."
                },
                {
                    q: "Enam tahun yang lalu, umur Kakak adalah 3 kali umur Adik. Jika saat ini umur Kakak adalah 2 kali umur Adik, berapakah jumlah umur Kakak dan Adik saat ini?",
                    opts: [
                        "30 tahun",
                        "32 tahun",
                        "36 tahun",
                        "40 tahun"
                    ],
                    ans: 2,
                    exp: "Saat ini K = 2A. Enam tahun lalu: K − 6 = 3(A − 6) → 2A − 6 = 3A − 18 → A = 12 tahun. Maka umur Kakak sekarang K = 2(12) = 24 tahun. Jumlah umur mereka = 12 + 24 = 36 tahun."
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
                },
                {
                    q: "Dari 6 orang peneliti kimia akan dipilih 2 orang untuk mewakili lembaga dalam konferensi internasional (tanpa membedakan jabatan). Berapa banyak pasangan perwakilan berbeda yang dapat dipilih?",
                    opts: [
                        "12 pasangan",
                        "15 pasangan",
                        "20 pasangan",
                        "30 pasangan"
                    ],
                    ans: 1,
                    exp: "Karena urutan tidak diperhatikan, gunakan rumus kombinasi C(6,2) = (6 × 5) / (2 × 1) = 15 pasangan."
                },
                {
                    q: "Dua buah dadu bersisi enam dilempar bersama-sama satu kali. Berapakah peluang munculnya kedua mata dadu yang berjumlah 8?",
                    opts: [
                        "1/9",
                        "5/36",
                        "1/6",
                        "7/36"
                    ],
                    ans: 1,
                    exp: "Total ruang sampel dua dadu n(S) = 36. Pasangan mata dadu berjumlah 8 adalah {(2,6), (3,5), (4,4), (5,3), (6,2)} sebanyak 5 kejadian. Maka peluangnya adalah 5/36."
                },
                {
                    q: "Dari Kota A ke Kota B terdapat 3 jalur jalan raya, dan dari Kota B ke Kota C terdapat 4 jalur jalan raya. Jika seseorang berkendara dari A ke C melalui B lalu pulang kembali ke A melalui B tanpa melewati jalur yang sama saat berangkat, berapa banyak variasi rute perjalanan pulang-pergi tersebut?",
                    opts: [
                        "24 rute",
                        "48 rute",
                        "72 rute",
                        "144 rute"
                    ],
                    ans: 2,
                    exp: "Saat berangkat (A→B→C): 3 × 4 = 12 cara. Saat pulang (C→B→A) tidak boleh memakai jalur berangkat, sehingga tersisa (4 − 1) × (3 − 1) = 3 × 2 = 6 cara. Total rute pulang-pergi = 12 × 6 = 72 rute."
                },
                {
                    q: "Tiga keping uang logam yang setimbang dilempar secara bersamaan satu kali. Berapakah peluang munculnya tepat 2 sisi Angka (A) dan 1 sisi Gambar (G)?",
                    opts: [
                        "1/8",
                        "1/4",
                        "3/8",
                        "1/2"
                    ],
                    ans: 2,
                    exp: "Banyak titik sampel 3 koin n(S) = 2³ = 8. Kejadian muncul tepat 2 Angka dan 1 Gambar adalah {AAG, AGA, GAA} sebanyak 3 kejadian. Maka peluangnya = 3/8."
                },
                {
                    q: "Dalam sebuah pertemuan ilmiah yang dihadiri oleh 8 orang delegasi, setiap delegasi saling berjabat tangan tepat satu kali dengan seluruh delegasi lainnya. Berapakah total jabat tangan yang terjadi?",
                    opts: [
                        "24 jabat tangan",
                        "28 jabat tangan",
                        "32 jabat tangan",
                        "56 jabat tangan"
                    ],
                    ans: 1,
                    exp: "Setiap jabat tangan melibatkan 2 orang tanpa memperhatikan urutan: C(8,2) = (8 × 7) / 2 = 28 jabat tangan."
                },
                {
                    q: "Peluang seorang atlet panahan mengenai sasaran tengah dalam sekali tembakan adalah 0,85. Jika atlet tersebut melepaskan 200 kali tembakan, berapakah frekuensi harapan tembakan yang MELESET dari sasaran tengah?",
                    opts: [
                        "15 kali",
                        "30 kali",
                        "45 kali",
                        "170 kali"
                    ],
                    ans: 1,
                    exp: "Peluang meleset P(A') = 1 − 0,85 = 0,15. Frekuensi harapan meleset dari 200 tembakan = 0,15 × 200 = 30 kali."
                },
                {
                    q: "Empat orang siswa (Andi, Bela, Cici, dan Dodi) akan duduk berjajar pada satu baris bangku yang terdiri atas 4 kursi. Jika Andi dan Bela harus selalu duduk berdampingan, berapa banyak susunan posisi duduk yang mungkin?",
                    opts: [
                        "6 susunan",
                        "12 susunan",
                        "16 susunan",
                        "24 susunan"
                    ],
                    ans: 1,
                    exp: "Kelompokkan (Andi, Bela) menjadi 1 kesatuan, sehingga terdapat 3 objek {(AB), C, D} yang disusun berjajar: 3! = 6 cara. Karena posisi Andi dan Bela dapat bertukar (AB atau BA = 2 cara), total susunan = 6 × 2 = 12 susunan."
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
                },
                {
                    q: "Tentukan bilangan berikutnya dari barisan: 5, 7, 11, 17, 25, 35, ...",
                    opts: [
                        "45",
                        "46",
                        "47",
                        "49"
                    ],
                    ans: 2,
                    exp: "Selisih antarsuku berturut-turut adalah: +2, +4, +6, +8, +10. Maka selisih berikutnya adalah +12, sehingga 35 + 12 = 47."
                },
                {
                    q: "Perhatikan barisan bilangan dengan operasi bergantian berikut: 3, 6, 4, 8, 6, 12, 10, ...\nSuku berikutnya adalah...",
                    opts: [
                        "18",
                        "20",
                        "22",
                        "24"
                    ],
                    ans: 1,
                    exp: "Pola operasinya bergantian antara (×2) dan (−2): 3 (×2)= 6, (−2)= 4, (×2)= 8, (−2)= 6, (×2)= 12, (−2)= 10. Langkah berikutnya adalah (×2): 10 × 2 = 20."
                },
                {
                    q: "Tentukan huruf berikutnya pada barisan alfabet berikut: B, D, G, K, P, ...",
                    opts: [
                        "T",
                        "U",
                        "V",
                        "W"
                    ],
                    ans: 2,
                    exp: "Ubah ke nomor urutan alfabet: B(2), D(4), G(7), K(11), P(16). Selisihnya adalah +2, +3, +4, +5. Maka selisih berikutnya adalah +6, yaitu huruf ke-(16 + 6) = 22, yang merupakan huruf V."
                },
                {
                    q: "Tentukan suku berikutnya dari barisan: 240, 120, 40, 10, ...",
                    opts: [
                        "2",
                        "2,5",
                        "4",
                        "5"
                    ],
                    ans: 0,
                    exp: "Perhatikan rasio pembagian berturut-turut: 240 (÷2) = 120; 120 (÷3) = 40; 40 (÷4) = 10. Maka langkah selanjutnya adalah (÷5): 10 ÷ 5 = 2."
                },
                {
                    q: "Perhatikan barisan bilangan: 2, 6, 12, 20, 30, 42, ...\nBilangan selanjutnya yang tepat adalah...",
                    opts: [
                        "52",
                        "54",
                        "56",
                        "60"
                    ],
                    ans: 2,
                    exp: "Selisih antarsuku adalah +4, +6, +8, +10, +12. Maka selisih berikutnya adalah +14, sehingga 42 + 14 = 56 (atau mengikuti pola perkalian n(n+1): 7 × 8 = 56)."
                },
                {
                    q: "Tentukan angka yang tepat untuk melanjutkan barisan: 100, 5, 90, 10, 80, 20, 70, ...",
                    opts: [
                        "30",
                        "35",
                        "40",
                        "60"
                    ],
                    ans: 2,
                    exp: "Larik ganjil (U₁, U₃, U₅, U₇): 100, 90, 80, 70 (berkurang 10). Larik genap (U₂, U₄, U₆, U₈): 5, 10, 20, ... (dikali 2). Karena yang ditanyakan adalah suku ke-8 (larik genap), maka nilainya 20 × 2 = 40."
                },
                {
                    q: "Suatu kultur bakteri membelah diri menjadi 2 kali lipat setiap 20 menit. Jika pada pukul 08.00 terdapat 50 bakteri, berapa jumlah bakteri tersebut pada pukul 10.00?",
                    opts: [
                        "1.600 bakteri",
                        "2.400 bakteri",
                        "3.200 bakteri",
                        "6.400 bakteri"
                    ],
                    ans: 2,
                    exp: "Rentang waktu dari pukul 08.00 ke 10.00 adalah 2 jam (120 menit), sehingga terjadi pembelahan sebanyak 120 / 20 = 6 kali. Jumlah bakteri = 50 × 2⁶ = 50 × 64 = 3.200 bakteri."
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
                },
                {
                    q: "Sebuah mobil hibrida menghabiskan 12 liter bahan bakar untuk menempuh jarak 180 km. Dengan laju konsumsi yang sama, berapa liter bahan bakar yang diperlukan untuk menempuh perjalanan sejauh 315 km?",
                    opts: [
                        "18 liter",
                        "21 liter",
                        "24 liter",
                        "25 liter"
                    ],
                    ans: 1,
                    exp: "Konsumsi bahan bakar = 180 km / 12 liter = 15 km/liter. Untuk jarak 315 km (perbandingan senilai), bahan bakar yang diperlukan = 315 / 15 = 21 liter."
                },
                {
                    q: "Pembangunan sebuah jembatan desa dijadwalkan selesai dalam waktu 40 hari oleh 18 orang pekerja. Agar jembatan tersebut selesai lebih cepat dalam waktu 24 hari, berapa banyak pekerja TAMBAHAN yang harus direkrut?",
                    opts: [
                        "10 orang",
                        "12 orang",
                        "15 orang",
                        "30 orang"
                    ],
                    ans: 1,
                    exp: "Perbandingan berbalik nilai: 40 × 18 = 24 × P₂ → 720 = 24·P₂ → P₂ = 30 pekerja total. Maka pekerja tambahan yang harus direkrut = 30 − 18 = 12 orang."
                },
                {
                    q: "Pada sebuah peta topografi berskala 1 : 250.000, jarak lurus antara Pos Pengamatan A dan Kawah B adalah 12 cm. Berapakah jarak sebenarnya antara kedua lokasi tersebut?",
                    opts: [
                        "3 km",
                        "25 km",
                        "30 km",
                        "300 km"
                    ],
                    ans: 2,
                    exp: "Jarak sebenarnya = 12 cm × 250.000 = 3.000.000 cm. Karena 1 km = 100.000 cm, maka 3.000.000 / 100.000 = 30 km."
                },
                {
                    q: "Ke dalam 300 mL larutan alkohol yang berkonsentrasi 20% ditambahkan air murni sebanyak 100 mL. Berapakah konsentrasi (persentase) alkohol pada larutan campuran yang baru?",
                    opts: [
                        "12,5%",
                        "15,0%",
                        "16,0%",
                        "17,5%"
                    ],
                    ans: 1,
                    exp: "Volume alkohol murni = 20% × 300 mL = 60 mL. Volume larutan total setelah ditambah air = 300 + 100 = 400 mL. Persentase alkohol baru = (60 / 400) × 100% = 15,0%."
                },
                {
                    q: "Perbandingan jumlah buku milik Andi dan Bima adalah 2 : 3, sedangkan perbandingan jumlah buku milik Bima dan Ciko adalah 4 : 5. Jika total buku mereka bertiga adalah 70 eksemplar, berapakah jumlah buku milik Bima?",
                    opts: [
                        "16 eksemplar",
                        "20 eksemplar",
                        "24 eksemplar",
                        "30 eksemplar"
                    ],
                    ans: 2,
                    exp: "Samakan angka rasio Bima (KPK dari 3 dan 4 adalah 12): A : B = 8 : 12 dan B : C = 12 : 15, sehingga A : B : C = 8 : 12 : 15 (total = 35 bagian). Jumlah buku Bima = (12 / 35) × 70 = 24 eksemplar."
                },
                {
                    q: "Harga bahan baku kedelai mengalami kenaikan sebesar 25%. Agar total biaya belanja kedelai sebuah pabrik tahu tetap sama seperti sebelum kenaikan harga, berapa persen volume pembelian kedelai yang harus dikurangi?",
                    opts: [
                        "15%",
                        "20%",
                        "25%",
                        "30%"
                    ],
                    ans: 1,
                    exp: "Harga baru = 125% = 5/4 dari harga awal. Agar Biaya (Harga × Volume) tetap, Volume baru harus menjadi kebalikannya yaitu 4/5 = 80% dari volume awal. Maka pengurangannya adalah 100% − 80% = 20%."
                },
                {
                    q: "Jika ukuran panjang sebuah pelat logam persegi panjang memuai (bertambah) sebesar 20% sedangkan lebarnya menyusut (berkurang) sebesar 10%, maka luas pelat logam tersebut mengalami...",
                    opts: [
                        "Penurunan sebesar 8%",
                        "Kenaikan sebesar 8%",
                        "Kenaikan sebesar 10%",
                        "Tidak mengalami perubahan luas"
                    ],
                    ans: 1,
                    exp: "Luas baru = (100% + 20%) × (100% − 10%) × Luas awal = 1,20 × 0,90 = 1,08 = 108% dari luas awal. Artinya luas pelat mengalami kenaikan sebesar 8%."
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
                },
                {
                    q: "Raka menjual sebuah mikroskop digital bekas dengan harga Rp 3.400.000. Dari penjualan tersebut, Raka ternyata mengalami kerugian sebesar 15% dari harga belinya. Berapakah harga beli mikroskop tersebut mula-mula?",
                    opts: [
                        "Rp 3.800.000",
                        "Rp 3.910.000",
                        "Rp 4.000.000",
                        "Rp 4.200.000"
                    ],
                    ans: 2,
                    exp: "Rugi 15% berarti Harga Jual = 85% × Harga Beli. Maka Harga Beli = Rp 3.400.000 × (100 / 85) = Rp 40.000 × 100 = Rp 4.000.000."
                },
                {
                    q: "Sebuah lembaga pembiayaan memberikan pinjaman modal usaha sebesar Rp 12.000.000 dengan bunga tunggal 10% per tahun. Jika peminjam melunasi seluruh pinjaman beserta bunganya dengan mencicil sama besar setiap bulan selama 12 bulan, berapakah besar angsuran per bulannya?",
                    opts: [
                        "Rp 1.050.000",
                        "Rp 1.100.000",
                        "Rp 1.120.000",
                        "Rp 1.200.000"
                    ],
                    ans: 1,
                    exp: "Bunga 1 tahun = 10% × Rp 12.000.000 = Rp 1.200.000. Total kewajiban = Rp 12.000.000 + Rp 1.200.000 = Rp 13.200.000. Angsuran per bulan = Rp 13.200.000 / 12 = Rp 1.100.000."
                },
                {
                    q: "Pada kemasan sekarung pupuk NPK tertulis Bruto = 50 kg dan Tara = 2%. Jika harga isi bersih (Neto) pupuk tersebut adalah Rp 10.000 per kilogram, berapakah harga total pupuk bersih di dalam karung tersebut?",
                    opts: [
                        "Rp 480.000",
                        "Rp 485.000",
                        "Rp 490.000",
                        "Rp 500.000"
                    ],
                    ans: 2,
                    exp: "Berat kemasan (Tara) = 2% × 50 kg = 1 kg. Berat bersih (Neto) = 50 − 1 = 49 kg. Harga total pupuk bersih = 49 × Rp 10.000 = Rp 490.000."
                },
                {
                    q: "Seorang konsultan riset menerima honorarium proyek sebesar Rp 8.000.000 sebelum pajak. Jika penghasilan tersebut dikenai potongan Pajak Penghasilan (PPh) sebesar 5%, berapakah uang bersih yang diterima konsultan tersebut?",
                    opts: [
                        "Rp 7.200.000",
                        "Rp 7.500.000",
                        "Rp 7.600.000",
                        "Rp 7.800.000"
                    ],
                    ans: 2,
                    exp: "Potongan pajak = 5% × Rp 8.000.000 = Rp 400.000. Honor bersih yang diterima = Rp 8.000.000 − Rp 400.000 = Rp 7.600.000."
                },
                {
                    q: "Sebuah tas ransel dengan harga label Rp 500.000 dijual di dua toko berbeda. Toko A memberikan diskon tunggal sebesar 35%, sedangkan Toko B memberikan diskon bertingkat '20% + 20%'. Berapakah selisih harga akhir tas tersebut di Toko A dan Toko B?",
                    opts: [
                        "Rp 5.000",
                        "Rp 10.000",
                        "Rp 15.000",
                        "Rp 25.000"
                    ],
                    ans: 0,
                    exp: "Di Toko A, pembeli membayar 65% × Rp 500.000 = Rp 325.000. Di Toko B, pembeli membayar 80% × 80% × Rp 500.000 = 64% × Rp 500.000 = Rp 320.000. Selisih harga keduanya adalah Rp 325.000 − Rp 320.000 = Rp 5.000."
                },
                {
                    q: "Ibu menyimpan uang sebesar Rp 4.000.000 di bank yang memberikan suku bunga tunggal 6% per tahun. Setelah berapa bulan total tabungan Ibu bertambah menjadi Rp 4.160.000?",
                    opts: [
                        "6 bulan",
                        "8 bulan",
                        "9 bulan",
                        "10 bulan"
                    ],
                    ans: 1,
                    exp: "Bunga yang diperoleh = Rp 4.160.000 − Rp 4.000.000 = Rp 160.000. Bunga per tahun = 6% × Rp 4.000.000 = Rp 240.000 (atau Rp 20.000 per bulan). Maka lama menabung = Rp 160.000 / Rp 20.000 = 8 bulan."
                },
                {
                    q: "Seorang pedagang membeli 5 lusin botol kaca laboratorium dengan harga total Rp 1.200.000. Jika seluruh botol tersebut habis terjual dengan harga eceran Rp 25.000 per botol, berapakah persentase keuntungan yang diperoleh pedagang tersebut?",
                    opts: [
                        "15%",
                        "20%",
                        "25%",
                        "30%"
                    ],
                    ans: 2,
                    exp: "Jumlah botol = 5 × 12 = 60 botol. Harga beli per botol = Rp 1.200.000 / 60 = Rp 20.000. Keuntungan per botol = Rp 25.000 − Rp 20.000 = Rp 5.000. Persentase keuntungan = (5.000 / 20.000) × 100% = 25%."
                }
            ]
        }
    ]
};
