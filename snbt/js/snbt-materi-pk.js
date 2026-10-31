// =========================================================================
// DATA MATERI & MINI-GAME SNBT 2026 — SUBTES 4: PENGETAHUAN KUANTITATIF (PK)
// Total: 20 Sub-Materi × 3 Soal Game = 60 Soal Khusus Mini-Game
// Hadiah Maksimal per Sub-Materi: Rp 400 (Skor 3/3)
// =========================================================================

window.SNBT_MATERI_REGISTRY = window.SNBT_MATERI_REGISTRY || {};

window.SNBT_MATERI_REGISTRY["pk"] = {
    id: "pk",
    nama: "Pengetahuan Kuantitatif (PK)",
    icon: "📐",
    color: "amber",
    rewardPerSub: 400,
    submateri: [
        // =====================================================================
        // KATEGORI 0: OPERASI DASAR & BILANGAN (4 SUB-MATERI)
        // =====================================================================
        {
            key: "pk_0_0",
            kategori: "Operasi Dasar & Bilangan",
            judul: "Operasi Hitung Matematika Dasar (PEMDAS)",
            ringkasan: `
                <p>Dalam <strong>Pengetahuan Kuantitatif (PK)</strong>, soal operasi hitung dasar sering menggunakan <strong>hierarki PEMDAS</strong> (Kurung &rarr; Pangkat/Akar &rarr; Kali/Bagi dari kiri ke kanan &rarr; Tambah/Kurang dari kiri ke kanan) serta <strong>simbol operasi buatan</strong> (seperti a &star; b atau a &oplus; b).</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Urutan Prioritas</th>
                                <th class="p-2 border border-slate-200 text-left">Kaidah Eksekusi</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh Jebakan</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">1. Tanda Kurung ( )</td>
                                <td class="p-2">Kerjakan dari kurung paling dalam terlebih dahulu</td>
                                <td class="p-2">24 &divide; (6 &divide; 2) = 24 &divide; 3 = 8</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">2. Pangkat & Akar</td>
                                <td class="p-2">Hati-hati tanda minus di luar kurung: -3<sup>2</sup> &ne; (-3)<sup>2</sup></td>
                                <td class="p-2">-3<sup>2</sup> = -(3&times;3) = -9, sedangkan (-3)<sup>2</sup> = +9</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">3. Kali (&times;) & Bagi (&divide;)</td>
                                <td class="p-2">Setara! Kerjakan <strong>urut dari kiri ke kanan</strong></td>
                                <td class="p-2">18 &divide; 3 &times; 2 = (18 &divide; 3) &times; 2 = 6 &times; 2 = 12 (Bukan 3!)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">4. Operasi Simbol (&star;, #, @)</td>
                                <td class="p-2">Substitusi posisi angka ke rumus definisi sesuai urutan kurung</td>
                                <td class="p-2">Jika a # b = a<sup>2</sup> - 2b, maka 4 # 3 = 4<sup>2</sup> - 2(3) = 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Operasi &oplus; didefinisikan dengan a &oplus; b = (a &times; b) - (a + b). Berapakah nilai dari 5 &oplus; (4 &oplus; 2)?",
                langkah: "Kerjakan dalam kurung dulu: 4 &oplus; 2 = (4 &times; 2) - (4 + 2) = 8 - 6 = 2. Selanjutnya: 5 &oplus; 2 = (5 &times; 2) - (5 + 2) = 10 - 7 = 3."
            },
            gameQuestions: [
                {
                    q: "Hasil dari 36 ÷ 3 × 2 - (-4)² + 8 adalah...",
                    opts: [
                        "-6",
                        "16",
                        "34",
                        "48"
                    ],
                    ans: 1,
                    exp: "Kerjakan bagi/kali dari kiri: (36 ÷ 3) × 2 = 12 × 2 = 24. Hitung pangkat: (-4)² = 16. Maka: 24 - 16 + 8 = 16."
                },
                {
                    q: "Untuk setiap bilangan bulat p dan q, didefinisikan operasi p ★ q = p(q - 2) + 3q. Nilai dari 3 ★ (2 ★ 3) adalah...",
                    opts: [
                        "42",
                        "60",
                        "66",
                        "72"
                    ],
                    ans: 1,
                    exp: "Hitung kurung dalam terlebih dahulu: 2 ★ 3 = 2(3 - 2) + 3(3) = 2 + 9 = 11. Selanjutnya: 3 ★ 11 = 3(11 - 2) + 3(11) = 3(9) + 33 = 27 + 33 = 60."
                },
                {
                    q: "Jika 123 × 45 + 123 × 55 - 23 × 100 = N, maka nilai N adalah...",
                    opts: [
                        "8.000",
                        "9.000",
                        "10.000",
                        "12.300"
                    ],
                    ans: 2,
                    exp: "Gunakan sifat distributif: 123 × (45 + 55) - 23 × 100 = 123 × 100 - 23 × 100 = (123 - 23) × 100 = 100 × 100 = 10.000."
                },
                {
                    q: "Hasil dari -5² + 48 ÷ (4 × 2) × 3 - (-7) adalah...",
                    opts: [
                        "-14",
                        "0",
                        "25",
                        "50"
                    ],
                    ans: 1,
                    exp: "Perhatikan bahwa -5² = -(5 × 5) = -25. Selanjutnya 48 ÷ (4 × 2) × 3 = 48 ÷ 8 × 3 = 6 × 3 = 18. Maka -25 + 18 - (-7) = -7 + 7 = 0."
                },
                {
                    q: "Didefinisikan operasi a ⊕ b = a² - ab + 2b. Nilai dari (3 ⊕ 2) ⊕ (-1) adalah...",
                    opts: [
                        "40",
                        "44",
                        "54",
                        "58"
                    ],
                    ans: 2,
                    exp: "Hitung kurung dalam: 3 ⊕ 2 = 3² - 3(2) + 2(2) = 9 - 6 + 4 = 7. Kemudian: 7 ⊕ (-1) = 7² - 7(-1) + 2(-1) = 49 + 7 - 2 = 54."
                },
                {
                    q: "Nilai dari [72 ÷ (-9) × 2 + 20] ÷ [(-3)² - 7] adalah...",
                    opts: [
                        "-2",
                        "1",
                        "2",
                        "4"
                    ],
                    ans: 2,
                    exp: "Bagian pembilang: (72 ÷ (-9)) × 2 + 20 = (-8) × 2 + 20 = -16 + 20 = 4. Bagian penyebut: (-3)² - 7 = 9 - 7 = 2. Hasilnya: 4 ÷ 2 = 2."
                },
                {
                    q: "Untuk setiap bilangan real x dan y dengan x ≠ y, didefinisikan x # y = (x + 2y) / (x - y). Jika p # 3 = 4, maka nilai p adalah...",
                    opts: [
                        "5",
                        "6",
                        "8",
                        "9"
                    ],
                    ans: 1,
                    exp: "Substitusikan ke definisi: (p + 2(3)) / (p - 3) = 4 -> p + 6 = 4(p - 3) -> p + 6 = 4p - 12 -> 3p = 18 -> p = 6."
                },
                {
                    q: "Hasil dari 2.025 × 99 + 2.025 - 1.025 × 100 adalah...",
                    opts: [
                        "90.000",
                        "100.000",
                        "102.500",
                        "110.000"
                    ],
                    ans: 1,
                    exp: "Faktorkan 2.025: 2.025 × (99 + 1) - 1.025 × 100 = 2.025 × 100 - 1.025 × 100 = (2.025 - 1.025) × 100 = 1.000 × 100 = 100.000."
                },
                {
                    q: "Diketahui operasi p ∇ q = 3p - 2q + pq. Jika 4 ∇ m = 22, maka nilai dari m ∇ 2 adalah...",
                    opts: [
                        "19",
                        "21",
                        "23",
                        "25"
                    ],
                    ans: 1,
                    exp: "Cari nilai m dari 4 ∇ m = 22: 3(4) - 2m + 4m = 22 -> 12 + 2m = 22 -> m = 5. Maka 5 ∇ 2 = 3(5) - 2(2) + 5(2) = 15 - 4 + 10 = 21."
                },
                {
                    q: "Nilai dari 100 - 40 ÷ 5 × 2 + (-2)³ × 3 adalah...",
                    opts: [
                        "60",
                        "84",
                        "92",
                        "108"
                    ],
                    ans: 0,
                    exp: "Kerjakan bagi/kali dan pangkat terlebih dahulu: 40 ÷ 5 × 2 = 8 × 2 = 16, serta (-2)³ × 3 = (-8) × 3 = -24. Maka: 100 - 16 + (-24) = 60."
                }
            ]
        },
        {
            key: "pk_0_1",
            kategori: "Operasi Dasar & Bilangan",
            judul: "Pecahan, Desimal, dan Persentase",
            ringkasan: `
                <p>Menghitung cepat pecahan dan persentase di PK bergantung pada <strong>hafalan pecahan istimewa</strong> dan sifat pertukaran <strong>a% dari b = b% dari a</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Pecahan Istimewa</th>
                                <th class="p-2 border border-slate-200 text-left">Desimal / Persen</th>
                                <th class="p-2 border border-slate-200 text-left">Pecahan Istimewa</th>
                                <th class="p-2 border border-slate-200 text-left">Desimal / Persen</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">1/8 | 3/8 | 5/8 | 7/8</td>
                                <td class="p-2">12,5% | 37,5% | 62,5% | 87,5%</td>
                                <td class="p-2 font-semibold">1/6 | 5/6</td>
                                <td class="p-2">16,67% | 83,33%</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">1/3 | 2/3</td>
                                <td class="p-2">33,33% | 66,67%</td>
                                <td class="p-2 font-semibold">1/9 | k/9</td>
                                <td class="p-2">0,111... | 0,kkk... (desimal berulang)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Berapakah nilai dari 37,5% dari 240 ditambah 16% dari 25?",
                langkah: "37,5% = 3/8, maka (3/8) &times; 240 = 90. Sedangkan 16% dari 25 = 25% dari 16 = (1/4) &times; 16 = 4. Total = 90 + 4 = 94."
            },
            gameQuestions: [
                {
                    q: "Nilai dari 62,5% dari 160 ditambah 28% dari 25 adalah...",
                    opts: [
                        "104",
                        "107",
                        "112",
                        "115"
                    ],
                    ans: 1,
                    exp: "62,5% = 5/8, sehingga (5/8) × 160 = 100. Selanjutnya, 28% dari 25 = 25% dari 28 = (1/4) × 28 = 7. Maka 100 + 7 = 107."
                },
                {
                    q: "Manakah di antara pecahan berikut yang nilainya PALING BESAR?",
                    opts: [
                        "5/8",
                        "7/11",
                        "2/3",
                        "13/20"
                    ],
                    ans: 2,
                    exp: "Ubah ke desimal/persen: 5/8 = 62,5%; 7/11 = 63,63%; 2/3 = 66,67%; 13/20 = 65%. Maka yang paling besar adalah 2/3."
                },
                {
                    q: "Jika bentuk desimal berulang 0,272727... dinyatakan sebagai pecahan paling sederhana a/b, maka nilai dari a + b adalah...",
                    opts: [
                        "14",
                        "36",
                        "38",
                        "126"
                    ],
                    ans: 0,
                    exp: "Desimal berulang dua angka: 0,272727... = 27/99. Sederhanakan dengan membagi 9 pada pembilang dan penyebut: 3/11. Maka a = 3 dan b = 11, sehingga a + b = 14."
                },
                {
                    q: "Nilai dari 87,5% dari 240 dikurangi 36% dari 50 adalah...",
                    opts: [
                        "182",
                        "192",
                        "198",
                        "202"
                    ],
                    ans: 1,
                    exp: "87,5% = 7/8, maka (7/8) × 240 = 210. Sedangkan 36% dari 50 = 50% dari 36 = 18. Selisihnya = 210 - 18 = 192."
                },
                {
                    q: "Hasil dari (1 - 1/2)(1 - 1/3)(1 - 1/4)...(1 - 1/20) adalah...",
                    opts: [
                        "0,02",
                        "0,04",
                        "0,05",
                        "0,10"
                    ],
                    ans: 2,
                    exp: "Ubah setiap kurung menjadi pecahan: (1/2) × (2/3) × (3/4) × ... × (19/20). Dengan pencoretan berantai (teleskopik), tersisa 1/20 = 0,05."
                },
                {
                    q: "Harga sebuah jaket dinaikkan sebesar 20%, kemudian pada saat diskon akhir tahun harganya diturunkan sebesar 25%. Persentase perubahan harga akhir jaket dibandingkan harga mula-mula adalah...",
                    opts: [
                        "Turun 5%",
                        "Turun 10%",
                        "Tetap (0%)",
                        "Naik 5%"
                    ],
                    ans: 1,
                    exp: "Misalkan harga mula-mula = 100. Setelah naik 20% menjadi 120. Kemudian didiskon 25% (yaitu 1/4 × 120 = 30), sehingga harga akhir = 120 - 30 = 90. Artinya turun 10% dari harga mula-mula."
                },
                {
                    q: "Jika x = 0,363636... dan y = 0,181818..., maka nilai dari (x + y) / (x - y) adalah...",
                    opts: [
                        "2",
                        "3",
                        "4",
                        "6"
                    ],
                    ans: 1,
                    exp: "x = 36/99 = 4/11 dan y = 18/99 = 2/11. Maka (x + y) / (x - y) = (4/11 + 2/11) / (4/11 - 2/11) = (6/11) / (2/11) = 3."
                },
                {
                    q: "Urutan pecahan 3/5, 5/8, 7/12, dan 13/20 dari yang TERKECIL ke TERBESAR adalah...",
                    opts: [
                        "7/12, 3/5, 5/8, 13/20",
                        "3/5, 7/12, 5/8, 13/20",
                        "7/12, 5/8, 3/5, 13/20",
                        "3/5, 5/8, 7/12, 13/20"
                    ],
                    ans: 0,
                    exp: "Konversikan ke persentase: 7/12 ≈ 58,33%; 3/5 = 60%; 5/8 = 62,5%; dan 13/20 = 65%. Jadi urutan dari terkecil ke terbesar adalah 7/12, 3/5, 5/8, 13/20."
                },
                {
                    q: "Jika 37,5% dari suatu bilangan P adalah 45, maka nilai dari 5/6 dari bilangan P tersebut adalah...",
                    opts: [
                        "80",
                        "90",
                        "100",
                        "108"
                    ],
                    ans: 2,
                    exp: "37,5% = 3/8, sehingga (3/8)P = 45 -> P = 45 × (8/3) = 120. Maka nilai dari (5/6)P = (5/6) × 120 = 100."
                },
                {
                    q: "Nilai dari (0,75 × 160 + (1/6) × 180) ÷ (12,5% × 240) adalah...",
                    opts: [
                        "3",
                        "4",
                        "5",
                        "6"
                    ],
                    ans: 2,
                    exp: "Pembilang: (3/4) × 160 + 30 = 120 + 30 = 150. Penyebut: (1/8) × 240 = 30. Maka 150 ÷ 30 = 5."
                }
            ]
        },
        {
            key: "pk_0_2",
            kategori: "Operasi Dasar & Bilangan",
            judul: "Sistem Koordinat Kartesius",
            ringkasan: `
                <p><strong>Sistem Koordinat Kartesius (x, y)</strong> memetakan posisi titik pada 4 kuadran, jarak antardua titik, koordinat titik tengah, dan pencerminan/translasi titik.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep Koordinat</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Tanda Kuadran (I, II, III, IV)</td>
                                <td class="p-2">Kuadran I: (+, +) | Kuadran II: (-, +) | Kuadran III: (-, -) | Kuadran IV: (+, -)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Jarak Dua Titik A(x<sub>1</sub>, y<sub>1</sub>) & B(x<sub>2</sub>, y<sub>2</sub>)</td>
                                <td class="p-2">d = &radic;[(x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup>] <em>(Gunakan tripel Pythagoras: 3-4-5, 5-12-13, 8-15-17!)</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Titik Tengah Segmen AB</td>
                                <td class="p-2">M = ((x<sub>1</sub> + x<sub>2</sub>)/2 , (y<sub>1</sub> + y<sub>2</sub>)/2)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Jarak Titik (x, y) ke Sumbu</td>
                                <td class="p-2">Jarak ke sumbu-X adalah <strong>|y|</strong>; jarak ke sumbu-Y adalah <strong>|x|</strong> (sering terbalik!)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Berapakah jarak antara titik P(-2, 3) dan Q(4, -5) pada bidang Kartesius?",
                langkah: "Selisih x: |4 - (-2)| = 6. Selisih y: |-5 - 3| = 8. Dengan tripel Pythagoras 6 - 8 - 10, jarak PQ adalah 10 satuan."
            },
            gameQuestions: [
                {
                    q: "Diketahui titik A(-3, 4) dan titik B(9, -1) pada bidang koordinat Kartesius. Jarak antara titik A dan titik B adalah...",
                    opts: [
                        "10 satuan",
                        "12 satuan",
                        "13 satuan",
                        "15 satuan"
                    ],
                    ans: 2,
                    exp: "Δx = 9 - (-3) = 12, dan Δy = -1 - 4 = -5. Jarak AB = √(12² + (-5)²) = √(144 + 25) = √169 = 13 satuan (tripel Pythagoras 5-12-13)."
                },
                {
                    q: "Titik M(3, -2) adalah titik tengah dari ruas garis PQ. Jika koordinat titik P adalah (-1, 4), maka koordinat titik Q berada di...",
                    opts: [
                        "Kuadran I",
                        "Kuadran II",
                        "Kuadran III",
                        "Kuadran IV"
                    ],
                    ans: 3,
                    exp: "Rumus titik tengah: (-1 + xQ)/2 = 3 -> xQ = 7; dan (4 + yQ)/2 = -2 -> yQ = -8. Koordinat Q adalah (7, -8), yaitu x positif dan y negatif, yang berada di Kuadran IV."
                },
                {
                    q: "Sebuah titik R terletak di Kuadran II, berjarak 5 satuan dari sumbu-X dan 7 satuan dari sumbu-Y. Koordinat titik R tersebut adalah...",
                    opts: [
                        "(-5, 7)",
                        "(-7, 5)",
                        "(7, -5)",
                        "(-5, -7)"
                    ],
                    ans: 1,
                    exp: "Jarak dari sumbu-Y adalah nilai |x| = 7, dan jarak dari sumbu-X adalah nilai |y| = 5. Karena di Kuadran II (x negatif, y positif), maka koordinat R adalah (-7, 5)."
                },
                {
                    q: "Titik P(2, -3) dicerminkan terhadap sumbu-X menghasilkan titik P', kemudian P' ditranslasikan oleh T(-5, 4) menghasilkan P''. Koordinat titik P'' adalah...",
                    opts: [
                        "(-3, 7)",
                        "(-3, 1)",
                        "(-7, 1)",
                        "(3, -7)"
                    ],
                    ans: 0,
                    exp: "Pencerminan P(2, -3) terhadap sumbu-X mengubah tanda y menjadi P'(2, 3). Translasi oleh T(-5, 4) menghasilkan P''(2 - 5, 3 + 4) = (-3, 7)."
                },
                {
                    q: "Diketahui segitiga ABC dengan koordinat titik A(1, 2), B(9, 2), dan C(9, 8). Keliling segitiga ABC tersebut adalah...",
                    opts: [
                        "20 satuan",
                        "22 satuan",
                        "24 satuan",
                        "28 satuan"
                    ],
                    ans: 2,
                    exp: "Panjang AB = 9 - 1 = 8 satuan (mendatar), dan BC = 8 - 2 = 6 satuan (tegak lurus di B). Dengan Pythagoras, AC = √(8² + 6²) = 10 satuan. Keliling = 8 + 6 + 10 = 24 satuan."
                },
                {
                    q: "Jarak antara titik K(a, 5) dan titik L(2, -3) adalah 10 satuan. Jika titik K berada di Kuadran II, maka nilai a adalah...",
                    opts: [
                        "-8",
                        "-6",
                        "-4",
                        "-2"
                    ],
                    ans: 2,
                    exp: "Jarak KL = √[(a - 2)² + (5 - (-3))²] = 10 -> (a - 2)² + 8² = 100 -> (a - 2)² = 36 -> a - 2 = ±6 -> a = 8 atau a = -4. Karena K di Kuadran II (absis negatif), maka a = -4."
                },
                {
                    q: "Diketahui jajargenjang ABCD dengan koordinat berurutan A(1, 2), B(6, 4), dan C(8, 9). Koordinat titik D adalah...",
                    opts: [
                        "(2, 7)",
                        "(3, 7)",
                        "(3, 6)",
                        "(4, 7)"
                    ],
                    ans: 1,
                    exp: "Pada jajargenjang ABCD berlaku sifat titik sudut berhadapan: A + C = B + D -> D = A + C - B = (1 + 8 - 6, 2 + 9 - 4) = (3, 7)."
                },
                {
                    q: "Titik C membagi ruas garis yang menghubungkan A(-2, 1) dan B(8, 11) di dalam dengan perbandingan AC : CB = 2 : 3. Koordinat titik C adalah...",
                    opts: [
                        "(2, 5)",
                        "(3, 6)",
                        "(4, 7)",
                        "(1, 4)"
                    ],
                    ans: 0,
                    exp: "Gunakan rumus perbandingan segmen garis: C = (3A + 2B) / (2 + 3) = ((3(-2) + 2(8))/5, (3(1) + 2(11))/5) = (10/5, 25/5) = (2, 5)."
                },
                {
                    q: "Luas segitiga yang titik-titik sudutnya berada pada koordinat P(-2, 1), Q(6, 1), dan R(3, 7) adalah...",
                    opts: [
                        "20 satuan luas",
                        "24 satuan luas",
                        "28 satuan luas",
                        "48 satuan luas"
                    ],
                    ans: 1,
                    exp: "Sisi PQ sejajar sumbu-X (y = 1) dengan panjang alas a = 6 - (-2) = 8 satuan. Tinggi segitiga dari titik R(3, 7) ke garis y = 1 adalah t = 7 - 1 = 6 satuan. Luas = ½ × 8 × 6 = 24 satuan luas."
                },
                {
                    q: "Sebuah titik M(-6, -8) diputar 180° terhadap titik pusat O(0, 0) menghasilkan bayangan M'. Jumlah jarak titik M' ke sumbu-X dan ke sumbu-Y adalah...",
                    opts: [
                        "2 satuan",
                        "10 satuan",
                        "14 satuan",
                        "16 satuan"
                    ],
                    ans: 2,
                    exp: "Rotasi 180° terhadap O(0, 0) mengubah M(-6, -8) menjadi M'(6, 8). Jarak M' ke sumbu-X adalah |8| = 8, dan jarak ke sumbu-Y adalah |6| = 6. Jumlahnya = 8 + 6 = 14 satuan."
                }
            ]
        },
        {
            key: "pk_0_3",
            kategori: "Operasi Dasar & Bilangan",
            judul: "Teori Bilangan, FPB, KPK, dan Sisa Pembagian",
            ringkasan: `
                <p>Soal <strong>Teori Bilangan & Keterbagian</strong> di PK menguji sifat ganjil-genap, bilangan prima, FPB-KPK, dan <strong>uji habis dibagi (modulo/sisa pembagian)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Pembagi</th>
                                <th class="p-2 border border-slate-200 text-left">Syarat Habis Dibagi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Habis dibagi 3 / 9</td>
                                <td class="p-2"><strong>Jumlah seluruh digitnya</strong> habis dibagi 3 (atau habis dibagi 9).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Habis dibagi 4 / 8</td>
                                <td class="p-2"><strong>2 digit terakhir</strong> habis dibagi 4 | <strong>3 digit terakhir</strong> habis dibagi 8.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Habis dibagi 11</td>
                                <td class="p-2">Selisih jumlah digit urutan ganjil dan urutan genap adalah 0 atau kelipatan 11.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Hubungan FPB & KPK</td>
                                <td class="p-2">Untuk dua bilangan bulat positif A dan B berlaku: <strong>A &times; B = FPB(A, B) &times; KPK(A, B)</strong>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Bilangan 5-digit 47A28 habis dibagi 9. Berapakah nilai digit A?",
                langkah: "Jumlahkan seluruh digitnya: 4 + 7 + A + 2 + 8 = 21 + A. Agar habis dibagi 9, jumlah terdekat adalah 27, sehingga 21 + A = 27 &rarr; A = 6."
            },
            gameQuestions: [
                {
                    q: "Bilangan enam angka 35A4B2 habis dibagi 36. Jika B adalah bilangan ganjil terkecil yang mungkin, maka nilai A + B adalah...",
                    opts: [
                        "2",
                        "4",
                        "6",
                        "8"
                    ],
                    ans: 1,
                    exp: "Habis dibagi 36 berarti habis dibagi 4 dan 9. Agar habis dibagi 4, dua digit terakhir 'B2' harus habis dibagi 4; untuk B ganjil terkecil diperoleh B = 1 (karena 12 habis dibagi 4). Selanjutnya, jumlah digit 3 + 5 + A + 4 + 1 + 2 = 15 + A harus habis dibagi 9 -> 15 + A = 18 -> A = 3. Maka A + B = 3 + 1 = 4."
                },
                {
                    q: "Diketahui dua bilangan bulat positif m dan n memiliki FPB = 6 dan KPK = 72. Jika salah satu bilangan tersebut adalah 18, maka selisih kedua bilangan tersebut adalah...",
                    opts: [
                        "6",
                        "12",
                        "18",
                        "24"
                    ],
                    ans: 0,
                    exp: "Gunakan sifat m × n = FPB × KPK -> 18 × n = 6 × 72 -> n = 432 / 18 = 24. Selisih kedua bilangan = |24 - 18| = 6."
                },
                {
                    q: "Suatu bilangan bulat positif N jika dibagi 7 bersisa 4. Berapakah sisa pembagian dari (N² + 2N) oleh 7?",
                    opts: [
                        "1",
                        "2",
                        "3",
                        "5"
                    ],
                    ans: 2,
                    exp: "Substitusikan langsung N dengan sisanya terhadap 7, yaitu N ≡ 4 (mod 7). Maka N² + 2N ≡ 4² + 2(4) = 16 + 8 = 24. Bagi 24 dengan 7: 24 = 3 × 7 + 3, sehingga sisanya adalah 3."
                },
                {
                    q: "Tiga lampu hias menyala berkedip secara berkala. Lampu merah berkedip setiap 12 detik, lampu kuning setiap 15 detik, dan lampu hijau setiap 20 detik. Jika ketiga lampu menyala bersamaan pada pukul 19.00, maka ketiganya akan menyala bersamaan untuk keempat kalinya pada pukul...",
                    opts: [
                        "19.02",
                        "19.03",
                        "19.04",
                        "19.05"
                    ],
                    ans: 1,
                    exp: "KPK dari 12, 15, dan 20 adalah 60 detik = 1 menit. Menyala bersamaan ke-1 pada 19.00, ke-2 pada 19.01, ke-3 pada 19.02, dan ke-4 pada pukul 19.03."
                },
                {
                    q: "Bilangan 6-angka 724X5Y habis dibagi 45. Jika Y bukan angka nol, maka nilai dari 2X + Y adalah...",
                    opts: [
                        "9",
                        "11",
                        "13",
                        "15"
                    ],
                    ans: 2,
                    exp: "Habis dibagi 45 berarti habis dibagi 5 dan 9. Agar habis dibagi 5 dan Y ≠ 0, maka Y = 5. Jumlah digit = 7 + 2 + 4 + X + 5 + 5 = 23 + X. Agar habis dibagi 9, maka 23 + X = 27 -> X = 4. Jadi 2X + Y = 2(4) + 5 = 13."
                },
                {
                    q: "Angka satuan dari hasil perpangkatan 7^2026 adalah...",
                    opts: [
                        "1",
                        "3",
                        "7",
                        "9"
                    ],
                    ans: 3,
                    exp: "Siklus angka satuan perpangkatan 7 berulang setiap 4 kali: 7¹=7, 7²=9, 7³=3, 7⁴=1. Karena 2026 dibagi 4 bersisa 2 (2026 = 4 × 506 + 2), maka angka satuannya sama dengan 7² yaitu 9."
                },
                {
                    q: "Diketahui p dan q adalah dua bilangan prima berbeda. Jika p + q = 39, maka nilai dari |p - q| adalah...",
                    opts: [
                        "31",
                        "33",
                        "35",
                        "37"
                    ],
                    ans: 2,
                    exp: "Karena hasil jumlah dua bilangan prima adalah ganjil (39), salah satunya harus prima genap yaitu 2. Maka bilangan prima lainnya adalah 39 - 2 = 37. Selisihnya = |37 - 2| = 35."
                },
                {
                    q: "Banyaknya faktor bulat positif (pembagi positif) dari bilangan 180 adalah...",
                    opts: [
                        "12",
                        "15",
                        "18",
                        "24"
                    ],
                    ans: 2,
                    exp: "Faktorisasi prima dari 180 = 2² × 3² × 5¹. Banyaknya faktor positif diperoleh dengan mengalikan (pangkat + 1): (2 + 1)(2 + 1)(1 + 1) = 3 × 3 × 2 = 18."
                },
                {
                    q: "Suatu bilangan bulat positif K jika dibagi 6 bersisa 5, dan jika dibagi 8 bersisa 7. Nilai K terkecil yang lebih besar dari 100 adalah...",
                    opts: [
                        "115",
                        "119",
                        "121",
                        "143"
                    ],
                    ans: 1,
                    exp: "Karena dibagi 6 sisa 5 dan dibagi 8 sisa 7 (masing-masing kurang 1 dari pembagi), maka (K + 1) adalah kelipatan dari KPK(6, 8) = 24. Jadi K = 24n - 1. Untuk n = 5 diperoleh K = 24(5) - 1 = 119."
                },
                {
                    q: "Jika a adalah bilangan bulat ganjil dan b adalah bilangan bulat genap, maka manakah di antara bentuk berikut yang PASTI merupakan bilangan ganjil?",
                    opts: [
                        "2a + 3b",
                        "a² + ab",
                        "(a + b)(a - 1)",
                        "3a + b + 1"
                    ],
                    ans: 1,
                    exp: "Karena a ganjil dan b genap, maka a² = ganjil × ganjil = ganjil, sedangkan ab = ganjil × genap = genap. Jumlahnya: a² + ab = ganjil + genap = ganjil."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 1: ALJABAR & FUNGSI (6 SUB-MATERI)
        // =====================================================================
        {
            key: "pk_1_0",
            kategori: "Aljabar & Fungsi",
            judul: "Operasi Aljabar, Faktorisasi, dan Distribusi",
            ringkasan: `
                <p><strong>Identitas pemfaktoran aljabar</strong> adalah senjata tercepat di PK untuk menyederhanakan perhitungan angka besar tanpa perlu menghitung manual.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Tiga Identitas Aljabar Wajib Hafal:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Selisih Dua Kuadrat:</strong> a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)</li>
                        <li><strong>Kuadrat Penjumlahan:</strong> (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup> &rArr; a<sup>2</sup> + b<sup>2</sup> = (a + b)<sup>2</sup> - 2ab</li>
                        <li><strong>Kuadrat Pengurangan:</strong> (a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup> &rArr; (a + b)<sup>2</sup> - (a - b)<sup>2</sup> = 4ab</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Hitung cepat nilai dari (2.026² - 2.024²) / 4.050!",
                langkah: "Gunakan a² - b² = (a + b)(a - b): (2.026 + 2.024)(2.026 - 2.024) / 4.050 = (4.050 × 2) / 4.050 = 2."
            },
            gameQuestions: [
                {
                    q: "Nilai dari (1.015² - 985²) / 300 adalah...",
                    opts: [
                        "60",
                        "120",
                        "200",
                        "600"
                    ],
                    ans: 2,
                    exp: "Gunakan identitas a² - b² = (a + b)(a - b): (1.015 + 985)(1.015 - 985) / 300 = (2.000 × 30) / 300 = 60.000 / 300 = 200."
                },
                {
                    q: "Jika x + y = 7 dan x · y = 10, maka nilai dari x² + y² adalah...",
                    opts: [
                        "29",
                        "39",
                        "49",
                        "69"
                    ],
                    ans: 0,
                    exp: "x² + y² = (x + y)² - 2xy = 7² - 2(10) = 49 - 20 = 29."
                },
                {
                    q: "Diketahui a ≠ 0 dan a + 1/a = 4. Nilai dari a² + 1/a² adalah...",
                    opts: [
                        "12",
                        "14",
                        "16",
                        "18"
                    ],
                    ans: 1,
                    exp: "Kuadratkan kedua ruas: (a + 1/a)² = 4² -> a² + 2(a)(1/a) + 1/a² = 16 -> a² + 2 + 1/a² = 16 -> a² + 1/a² = 14."
                },
                {
                    q: "Jika (p + q)² = 64 dan (p - q)² = 16, maka nilai dari p · q adalah...",
                    opts: [
                        "8",
                        "12",
                        "16",
                        "20"
                    ],
                    ans: 1,
                    exp: "Gunakan identitas (p + q)² - (p - q)² = 4pq -> 64 - 16 = 4pq -> 48 = 4pq -> pq = 12."
                },
                {
                    q: "Bentuk sederhana dari (2x² - 5x - 3) / (x² - 9) untuk x ≠ ±3 adalah...",
                    opts: [
                        "(2x + 1) / (x + 3)",
                        "(2x - 1) / (x + 3)",
                        "(2x + 1) / (x - 3)",
                        "(2x - 1) / (x - 3)"
                    ],
                    ans: 0,
                    exp: "Faktorkan pembilang dan penyebut: (2x + 1)(x - 3) / [(x + 3)(x - 3)]. Coret faktor (x - 3), sehingga diperoleh (2x + 1) / (x + 3)."
                },
                {
                    q: "Jika x - y = 5 dan x² - y² = 45, maka nilai dari x² + y² adalah...",
                    opts: [
                        "45",
                        "53",
                        "61",
                        "65"
                    ],
                    ans: 1,
                    exp: "Karena x² - y² = (x + y)(x - y) = 45 dan x - y = 5, maka x + y = 45 / 5 = 9. Dari x + y = 9 dan x - y = 5 diperoleh x = 7 dan y = 2. Maka x² + y² = 7² + 2² = 49 + 4 = 53."
                },
                {
                    q: "Diketahui m ≠ 0 dan m - 1/m = 3. Nilai dari m² + 1/m² adalah...",
                    opts: [
                        "7",
                        "9",
                        "11",
                        "13"
                    ],
                    ans: 2,
                    exp: "Kuadratkan kedua ruas: (m - 1/m)² = 3² -> m² - 2(m)(1/m) + 1/m² = 9 -> m² - 2 + 1/m² = 9 -> m² + 1/m² = 11."
                },
                {
                    q: "Hasil dari √(4.000 × 4.006 + 9) adalah...",
                    opts: [
                        "4.001",
                        "4.002",
                        "4.003",
                        "4.004"
                    ],
                    ans: 2,
                    exp: "Misalkan a = 4.000, maka bentuk di dalam akar menjadi a(a + 6) + 9 = a² + 6a + 9 = (a + 3)². Sehingga √[(a + 3)²] = a + 3 = 4.000 + 3 = 4.003."
                },
                {
                    q: "Jika a + b + c = 10 dan ab + bc + ac = 31, maka nilai dari a² + b² + c² adalah...",
                    opts: [
                        "36",
                        "38",
                        "42",
                        "69"
                    ],
                    ans: 1,
                    exp: "Gunakan identitas (a + b + c)² = a² + b² + c² + 2(ab + bc + ac) -> 10² = (a² + b² + c²) + 2(31) -> 100 - 62 = 38."
                },
                {
                    q: "Jika 3x + 2y = 12 dan xy = 6, maka nilai dari 9x² + 4y² adalah...",
                    opts: [
                        "60",
                        "72",
                        "84",
                        "108"
                    ],
                    ans: 1,
                    exp: "Kuadratkan (3x + 2y)² = 9x² + 12xy + 4y² -> 12² = (9x² + 4y²) + 12(6) -> 144 - 72 = 72."
                }
            ]
        },
        {
            key: "pk_1_1",
            kategori: "Aljabar & Fungsi",
            judul: "Persamaan dan Pertidaksamaan Linier/Kuadrat",
            ringkasan: `
                <p>Pada <strong>Persamaan Kuadrat ax<sup>2</sup> + bx + c = 0</strong> dengan akar-akar x<sub>1</sub> dan x<sub>2</sub>, kamu hampir tidak pernah perlu mencari akar satu per satu jika menggunakan <strong>Teorema Vieta</strong> dan <strong>Diskriminan (D)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Jumlah & Hasil Kali Akar (Vieta)</td>
                                <td class="p-2"><strong>x<sub>1</sub> + x<sub>2</sub> = -b / a</strong> &nbsp;|&nbsp; <strong>x<sub>1</sub> &middot; x<sub>2</sub> = c / a</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Diskriminan (D = b<sup>2</sup> - 4ac)</td>
                                <td class="p-2">D &gt; 0 (2 akar real berbeda) | <strong>D = 0 (akar kembar / menyinggung)</strong> | D &lt; 0 (imajiner / definit)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Pertidaksamaan Kuadrat</td>
                                <td class="p-2">Untuk (x - p)(x - q) &lt; 0 (dengan p &lt; q) &rarr; himpunan penyelesaian di tengah: <strong>p &lt; x &lt; q</strong>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Jika x₁ dan x₂ adalah akar-akar dari 2x² - 6x + 3 = 0, berapakah nilai (1/x₁) + (1/x₂)?",
                langkah: "Samakan penyebut: (x₁ + x₂) / (x₁ · x₂). Karena x₁ + x₂ = -(-6)/2 = 3 dan x₁ · x₂ = 3/2, maka hasilnya = 3 / (3/2) = 2."
            },
            gameQuestions: [
                {
                    q: "Persamaan kuadrat x² - 5x + 6 = 0 memiliki akar-akar p dan q. Persamaan kuadrat baru yang akar-akarnya (p + 2) dan (q + 2) adalah...",
                    opts: [
                        "x² - 9x + 20 = 0",
                        "x² + 9x + 20 = 0",
                        "x² - 9x + 14 = 0",
                        "x² - 5x + 10 = 0"
                    ],
                    ans: 0,
                    exp: "Dari x² - 5x + 6 = 0 diperoleh p + q = 5 dan pq = 6 (atau akar-akarnya 2 dan 3). Akar baru adalah 2+2 = 4 dan 3+2 = 5. Jumlah akar baru = 9, hasil kali akar baru = 20. Persamaannya: x² - 9x + 20 = 0."
                },
                {
                    q: "Agar persamaan kuadrat x² + (m - 2)x + 9 = 0 memiliki dua akar real yang kembar (sama), maka nilai m yang memenuhi (untuk m > 0) adalah...",
                    opts: [
                        "4",
                        "6",
                        "8",
                        "11"
                    ],
                    ans: 2,
                    exp: "Syarat akar kembar adalah D = b² - 4ac = 0 -> (m - 2)² - 4(1)(9) = 0 -> (m - 2)² = 36 -> m - 2 = 6 atau m - 2 = -6 -> m = 8 atau m = -4. Untuk m > 0, diperoleh m = 8."
                },
                {
                    q: "Banyaknya bilangan bulat x yang memenuhi pertidaksamaan x² - 2x - 8 < 0 adalah...",
                    opts: [
                        "4 bilangan",
                        "5 bilangan",
                        "6 bilangan",
                        "7 bilangan"
                    ],
                    ans: 1,
                    exp: "Faktorkan: (x - 4)(x + 2) < 0 -> solusi intervalnya adalah -2 < x < 4. Bilangan bulat di dalam interval terbuka (-2, 4) adalah {-1, 0, 1, 2, 3}, yaitu sebanyak 5 bilangan."
                },
                {
                    q: "Jika x₁ dan x₂ adalah akar-akar persamaan kuadrat x² - 6x + 4 = 0, maka nilai dari x₁² + x₂² adalah...",
                    opts: [
                        "24",
                        "28",
                        "32",
                        "44"
                    ],
                    ans: 1,
                    exp: "Dari teorema Vieta: x₁ + x₂ = 6 dan x₁ · x₂ = 4. Maka x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = 6² - 2(4) = 36 - 8 = 28."
                },
                {
                    q: "Diketahui sistem persamaan linier 3x + 2y = 17 dan 2x + 3y = 18. Nilai dari x + y adalah...",
                    opts: [
                        "5",
                        "6",
                        "7",
                        "8"
                    ],
                    ans: 2,
                    exp: "Jumlahkan langsung kedua persamaan: (3x + 2x) + (2y + 3y) = 17 + 18 -> 5x + 5y = 35 -> 5(x + y) = 35 -> x + y = 7."
                },
                {
                    q: "Himpunan penyelesaian dari pertidaksamaan (2x - 5) / 3 ≤ x - 1 adalah...",
                    opts: [
                        "x ≤ -2",
                        "x ≥ -2",
                        "x ≤ 2",
                        "x ≥ 2"
                    ],
                    ans: 1,
                    exp: "Kalikan kedua ruas dengan 3: 2x - 5 ≤ 3x - 3 -> -5 + 3 ≤ 3x - 2x -> x ≥ -2."
                },
                {
                    q: "Jika salah satu akar dari persamaan kuadrat 2x² + kx - 15 = 0 adalah x = 3, maka akar yang lainnya adalah...",
                    opts: [
                        "-5/2",
                        "-3/2",
                        "3/2",
                        "5/2"
                    ],
                    ans: 0,
                    exp: "Hasil kali kedua akar adalah x₁ · x₂ = c/a = -15/2. Karena x₁ = 3, maka 3 · x₂ = -15/2 -> x₂ = -5/2."
                },
                {
                    q: "Jika α dan β adalah akar-akar dari persamaan kuadrat x² - 4x - 5 = 0 dengan α > β, maka nilai dari 2α - β adalah...",
                    opts: [
                        "7",
                        "9",
                        "11",
                        "13"
                    ],
                    ans: 2,
                    exp: "Faktorkan persamaan: (x - 5)(x + 1) = 0 -> x = 5 atau x = -1. Karena α > β, maka α = 5 dan β = -1. Nilai 2α - β = 2(5) - (-1) = 11."
                },
                {
                    q: "Agar grafik fungsi kuadrat f(x) = x² - 2px + (p + 6) selalu berada di atas sumbu-X (definit positif), maka batas nilai p yang memenuhi adalah...",
                    opts: [
                        "-3 < p < 2",
                        "-2 < p < 3",
                        "p < -2 atau p > 3",
                        "p < -3 atau p > 2"
                    ],
                    ans: 1,
                    exp: "Syarat definit positif adalah a > 0 dan D < 0: (-2p)² - 4(1)(p + 6) < 0 -> 4p² - 4p - 24 < 0 -> p² - p - 6 < 0 -> (p - 3)(p + 2) < 0 -> -2 < p < 3."
                },
                {
                    q: "Jumlah semua nilai x yang memenuhi persamaan nilai mutlak |2x - 3| = 7 adalah...",
                    opts: [
                        "2",
                        "3",
                        "5",
                        "7"
                    ],
                    ans: 1,
                    exp: "Kemungkinan 1: 2x - 3 = 7 -> 2x = 10 -> x = 5. Kemungkinan 2: 2x - 3 = -7 -> 2x = -4 -> x = -2. Jumlah semua nilai x = 5 + (-2) = 3."
                }
            ]
        },
        {
            key: "pk_1_2",
            kategori: "Aljabar & Fungsi",
            judul: "Akar, Eksponen, dan Bentuk Pangkat",
            ringkasan: `
                <p><strong>Eksponen dan bentuk akar</strong> diuji melalui penyamaan basis pangkat, sifat pangkat negatif/pecahan, serta merasionalkan penyebut akar sekawan.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Sifat Eksponen</th>
                                <th class="p-2 border border-slate-200 text-left">Sifat Bentuk Akar</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2">a<sup>m</sup> &middot; a<sup>n</sup> = a<sup>m+n</sup> &nbsp;|&nbsp; a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup></td>
                                <td class="p-2">&radic;(a &middot; b) = &radic;a &middot; &radic;b</td>
                            </tr>
                            <tr>
                                <td class="p-2">(a<sup>m</sup>)<sup>n</sup> = a<sup>m&middot;n</sup> &nbsp;|&nbsp; a<sup>-n</sup> = 1 / a<sup>n</sup></td>
                                <td class="p-2">Sekawan: c / (&radic;a + &radic;b) = c(&radic;a - &radic;b) / (a - b)</td>
                            </tr>
                            <tr>
                                <td class="p-2">a<sup>m/n</sup> = <sup>n</sup>&radic;(a<sup>m</sup>)</td>
                                <td class="p-2">Akar dalam akar: &radic;[(p+q) &plusmn; 2&radic;(pq)] = &radic;p &plusmn; &radic;q (dengan p &gt; q)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Jika 9^(x+1) = 27^(x-1), berapakah nilai x?",
                langkah: "Samakan basis ke 3: (3²)^(x+1) = (3³)^(x-1) -> 3^(2x+2) = 3^(3x-3) -> 2x + 2 = 3x - 3 -> x = 5."
            },
            gameQuestions: [
                {
                    q: "Jika 8^(x - 1) = 4^(x + 2), maka nilai dari 2x + 1 adalah...",
                    opts: [
                        "9",
                        "11",
                        "15",
                        "17"
                    ],
                    ans: 2,
                    exp: "Ubah ke basis 2: (2³)^(x - 1) = (2²)^(x + 2) -> 3x - 3 = 2x + 4 -> x = 7. Maka nilai 2x + 1 = 2(7) + 1 = 15."
                },
                {
                    q: "Nilai dari (27^(2/3) + 16^(3/4) - 25^(1/2)) adalah...",
                    opts: [
                        "9",
                        "12",
                        "17",
                        "22"
                    ],
                    ans: 1,
                    exp: "27^(2/3) = (3³)^(2/3) = 3² = 9; 16^(3/4) = (2⁴)^(3/4) = 2³ = 8; 25^(1/2) = √25 = 5. Maka 9 + 8 - 5 = 12."
                },
                {
                    q: "Bentuk sederhana dari √(8 + 2√15) adalah...",
                    opts: [
                        "√5 + √3",
                        "√6 + √2",
                        "√5 - √3",
                        "3 + √5"
                    ],
                    ans: 0,
                    exp: "Gunakan rumus √[(p + q) + 2√(p·q)] = √p + √q. Cari dua bilangan yang dijumlahkan = 8 dan dikalikan = 15, yaitu 5 dan 3. Maka hasilnya adalah √5 + √3."
                },
                {
                    q: "Bentuk rasional dari 12 / (√7 - √3) adalah...",
                    opts: [
                        "2(√7 + √3)",
                        "3(√7 + √3)",
                        "3(√7 - √3)",
                        "4(√7 + √3)"
                    ],
                    ans: 1,
                    exp: "Kalikan dengan sekawan (√7 + √3)/(√7 + √3): 12(√7 + √3) / (7 - 3) = 12(√7 + √3) / 4 = 3(√7 + √3)."
                },
                {
                    q: "Nilai dari (2^2027 + 2^2025) / 2^2024 adalah...",
                    opts: [
                        "6",
                        "8",
                        "10",
                        "12"
                    ],
                    ans: 2,
                    exp: "Keluarkan faktor 2^2024 pada pembilang: [2^2024 × (2³ + 2¹)] / 2^2024 = 2³ + 2¹ = 8 + 2 = 10."
                },
                {
                    q: "Jika 3^x = 5, maka nilai dari 3^(2x + 1) - 3^(x + 2) adalah...",
                    opts: [
                        "25",
                        "30",
                        "35",
                        "45"
                    ],
                    ans: 1,
                    exp: "Uraikan pangkatnya: 3^(2x + 1) = (3^x)² × 3¹ = 5² × 3 = 75, sedangkan 3^(x + 2) = 3^x × 3² = 5 × 9 = 45. Maka 75 - 45 = 30."
                },
                {
                    q: "Hasil dari √75 + 2√12 - √27 adalah...",
                    opts: [
                        "4√3",
                        "5√3",
                        "6√3",
                        "7√3"
                    ],
                    ans: 2,
                    exp: "Sederhanakan masing-masing akar: √75 = 5√3, 2√12 = 2(2√3) = 4√3, dan √27 = 3√3. Maka 5√3 + 4√3 - 3√3 = 6√3."
                },
                {
                    q: "Jika (1/9)^(x - 2) = 27^(4 - x), maka nilai x yang memenuhi adalah...",
                    opts: [
                        "4",
                        "6",
                        "8",
                        "10"
                    ],
                    ans: 2,
                    exp: "Samakan basis menjadi 3: (3^-2)^(x - 2) = (3³)^(4 - x) -> -2x + 4 = 12 - 3x -> 3x - 2x = 12 - 4 -> x = 8."
                },
                {
                    q: "Bentuk sederhana dari (a^-2 · b^3) / (a^-5 · b) untuk a, b ≠ 0 adalah...",
                    opts: [
                        "a³b²",
                        "a^-7 b²",
                        "a³b⁴",
                        "b² / a³"
                    ],
                    ans: 0,
                    exp: "Kurangkan pangkat dari basis yang sama: a^(-2 - (-5)) · b^(3 - 1) = a³b²."
                },
                {
                    q: "Nilai x positif yang memenuhi persamaan akar berulang √(x + √(x + √(x + ...))) = 4 adalah...",
                    opts: [
                        "8",
                        "12",
                        "14",
                        "16"
                    ],
                    ans: 1,
                    exp: "Karena keseluruhan akar tak hingga bernilai 4, maka √(x + 4) = 4. Kuadratkan kedua ruas: x + 4 = 16 -> x = 12."
                }
            ]
        },
        {
            key: "pk_1_3",
            kategori: "Aljabar & Fungsi",
            judul: "Logaritma Dasar",
            ringkasan: `
                <p><strong>Logaritma</strong> adalah kebalikan (invers) dari eksponen: <strong><sup>a</sup>log b = c &hArr; a<sup>c</sup> = b</strong> (dengan syarat basis a &gt; 0, a &ne; 1, dan numerus b &gt; 0).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1 my-2">
                    <div class="font-bold text-teal-800">⚡ Sifat Operasi Logaritma UTBK:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Penjumlahan & Pengurangan (Basis Sama):</strong> <sup>a</sup>log x + <sup>a</sup>log y = <sup>a</sup>log(x&middot;y) &nbsp;|&nbsp; <sup>a</sup>log x - <sup>a</sup>log y = <sup>a</sup>log(x/y)</li>
                        <li><strong>Sifat Pangkat Basis & Numerus:</strong> <sup>a<sup>n</sup></sup>log(b<sup>m</sup>) = (m / n) &middot; <sup>a</sup>log b</li>
                        <li><strong>Perkalian Berantai (Coret Silang):</strong> <sup>a</sup>log b &middot; <sup>b</sup>log c = <sup>a</sup>log c</li>
                        <li><strong>Ubah Basis:</strong> <sup>a</sup>log b = <sup>p</sup>log b / <sup>p</sup>log a = 1 / (<sup>b</sup>log a)</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Hitung nilai dari ²log 24 + ²log 3 - ²log 9!",
                langkah: "Karena basisnya sama-sama 2: ²log(24 × 3 / 9) = ²log(72 / 9) = ²log 8 = ²log(2³) = 3."
            },
            gameQuestions: [
                {
                    q: "Nilai dari ³log 18 + ³log 6 - ³log 4 adalah...",
                    opts: [
                        "2",
                        "3",
                        "4",
                        "9"
                    ],
                    ans: 1,
                    exp: "Gabungkan numerus karena basis sama-sama 3: ³log(18 × 6 / 4) = ³log(108 / 4) = ³log 27 = ³log(3³) = 3."
                },
                {
                    q: "Hasil dari ²log 9 · ³log 125 · ⁵log 16 adalah...",
                    opts: [
                        "12",
                        "18",
                        "24",
                        "36"
                    ],
                    ans: 2,
                    exp: "Ubah ke bilangan pokok prima: ²log(3²) · ³log(5³) · ⁵log(2⁴) = (2 · 3 · 4) · (²log 3 · ³log 5 · ⁵log 2) = 24 · (²log 2) = 24 × 1 = 24."
                },
                {
                    q: "Jika ²log(3x - 5) = 4, maka nilai x yang memenuhi adalah...",
                    opts: [
                        "3",
                        "5",
                        "7",
                        "9"
                    ],
                    ans: 2,
                    exp: "Berdasarkan definisi logaritma: 3x - 5 = 2⁴ -> 3x - 5 = 16 -> 3x = 21 -> x = 7."
                },
                {
                    q: "Diketahui ²log 3 = a dan ³log 5 = b. Nilai dari ⁶log 15 dinyatakan dalam a dan b adalah...",
                    opts: [
                        "(a + b) / (a + 1)",
                        "a(1 + b) / (a + 1)",
                        "b(1 + a) / (b + 1)",
                        "ab / (a + 1)"
                    ],
                    ans: 1,
                    exp: "Ubah ke basis 3: ⁶log 15 = (³log 15)/(³log 6) = (³log 3 + ³log 5)/(³log 3 + ³log 2). Karena ²log 3 = a maka ³log 2 = 1/a. Sehingga menjadi (1 + b) / (1 + 1/a) = a(1 + b) / (a + 1)."
                },
                {
                    q: "Nilai dari ⁸log 32 + ⁹log 27 adalah...",
                    opts: [
                        "8/5",
                        "15/6",
                        "19/6",
                        "7/2"
                    ],
                    ans: 2,
                    exp: "⁸log 32 = (2³)log(2⁵) = 5/3, dan ⁹log 27 = (3²)log(3³) = 3/2. Jumlahnya = 5/3 + 3/2 = (10 + 9)/6 = 19/6."
                },
                {
                    q: "Jika ³log(x - 1) + ³log(x + 1) = 1, maka nilai x yang memenuhi adalah...",
                    opts: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    ans: 1,
                    exp: "Gabungkan logaritma: ³log[(x - 1)(x + 1)] = 1 -> x² - 1 = 3¹ = 3 -> x² = 4 -> x = 2 (memenuhi syarat numerus x > 1)."
                },
                {
                    q: "Nilai dari 5^(⁵log 12) - 2^(⁴log 9) adalah...",
                    opts: [
                        "3",
                        "6",
                        "9",
                        "10"
                    ],
                    ans: 2,
                    exp: "Gunakan sifat a^(ᵃlog b) = b: 5^(⁵log 12) = 12. Sedangkan ⁴log 9 = (2²)log(3²) = ²log 3, sehingga 2^(²log 3) = 3. Maka 12 - 3 = 9."
                },
                {
                    q: "Hasil dari [1 / (²log 30)] + [1 / (³log 30)] + [1 / (⁵log 30)] adalah...",
                    opts: [
                        "0",
                        "1",
                        "2",
                        "30"
                    ],
                    ans: 1,
                    exp: "Gunakan sifat 1 / (ᵃlog b) = ᵇlog a: ³⁰log 2 + ³⁰log 3 + ³⁰log 5 = ³⁰log(2 × 3 × 5) = ³⁰log 30 = 1."
                },
                {
                    q: "Jika ᵃlog b = 4 dan ᵇlog c = 3, maka nilai dari ᵃlog(b · c²) adalah...",
                    opts: [
                        "16",
                        "20",
                        "28",
                        "32"
                    ],
                    ans: 2,
                    exp: "ᵃlog(b · c²) = ᵃlog b + 2 · ᵃlog c. Karena ᵃlog c = ᵃlog b · ᵇlog c = 4 × 3 = 12, maka nilainya = 4 + 2(12) = 28."
                },
                {
                    q: "Nilai x yang memenuhi persamaan ²log(²log(x + 2)) = 2 adalah...",
                    opts: [
                        "10",
                        "12",
                        "14",
                        "16"
                    ],
                    ans: 2,
                    exp: "Dari logaritma luar: ²log(x + 2) = 2² = 4. Dari logaritma dalam: x + 2 = 2⁴ = 16 -> x = 14."
                }
            ]
        },
        {
            key: "pk_1_4",
            kategori: "Aljabar & Fungsi",
            judul: "Himpunan, Relasi, dan Fungsi Komposisi/Invers",
            ringkasan: `
                <p>Topik ini menggabungkan <strong>Diagram Venn 2-3 himpunan</strong>, <strong>Fungsi Komposisi (f &compfn; g)(x) = f(g(x))</strong>, dan <strong>Fungsi Invers f<sup>-1</sup>(x)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat UTBK</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Gabungan 2 Himpunan</td>
                                <td class="p-2">n(S) = n(A) + n(B) - n(A &cap; B) + n(Tidak Keduanya)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Invers Fungsi Linier</td>
                                <td class="p-2">Jika f(x) = ax + b &rArr; <strong>f<sup>-1</sup>(x) = (x - b) / a</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Invers Fungsi Pecahan</td>
                                <td class="p-2">Jika f(x) = (ax + b)/(cx + d) &rArr; <strong>f<sup>-1</sup>(x) = (-dx + b)/(cx - a)</strong> <em>(Tukar posisi & tanda a dan d!)</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Trik Mencari f<sup>-1</sup>(k)</td>
                                <td class="p-2">Ingat sifat: <strong>f(a) = k &hArr; f<sup>-1</sup>(k) = a</strong>. Tidak perlu mencari rumus invers secara penuh!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Diketahui f(2x - 1) = 6x + 5. Berapakah nilai dari f⁻¹(17)?",
                langkah: "Gunakan sifat f(a) = k <=> f⁻¹(k) = a. Samakan hasil fungsi dengan 17: 6x + 5 = 17 -> 6x = 12 -> x = 2. Substitusi x = 2 ke dalam kurung: 2(2) - 1 = 3. Jadi f(3) = 17, sehingga f⁻¹(17) = 3!"
            },
            gameQuestions: [
                {
                    q: "Dari 40 mahasiswa di suatu kelas, 24 orang mengikuti klub Robotika, 18 orang mengikuti klub Debat, dan 5 orang tidak mengikuti keduanya. Banyaknya mahasiswa yang mengikuti KEDUA klub tersebut adalah...",
                    opts: [
                        "5 orang",
                        "7 orang",
                        "9 orang",
                        "11 orang"
                    ],
                    ans: 1,
                    exp: "n(S) = n(A) + n(B) - n(A ∩ B) + n(Tidak Keduanya) -> 40 = 24 + 18 - x + 5 -> 40 = 47 - x -> x = 7 orang."
                },
                {
                    q: "Diketahui fungsi f(x) = 3x - 2 dan g(x) = x² + 1. Nilai dari (f ∘ g)(2) adalah...",
                    opts: [
                        "13",
                        "15",
                        "17",
                        "21"
                    ],
                    ans: 0,
                    exp: "Hitung dari dalam: g(2) = 2² + 1 = 5. Kemudian substitusikan ke f: f(g(2)) = f(5) = 3(5) - 2 = 13."
                },
                {
                    q: "Jika f(x + 3) = 4x - 1, maka nilai dari f⁻¹(11) adalah...",
                    opts: [
                        "3",
                        "5",
                        "6",
                        "9"
                    ],
                    ans: 2,
                    exp: "Agar hasil 4x - 1 = 11, maka 4x = 12 -> x = 3. Substitusikan x = 3 ke dalam input f(x + 3): f(3 + 3) = f(6) = 11. Dengan demikian f⁻¹(11) = 6."
                },
                {
                    q: "Diketahui fungsi f(x) = (2x + 3) / (x - 4) untuk x ≠ 4. Nilai dari f⁻¹(3) adalah...",
                    opts: [
                        "9",
                        "12",
                        "15",
                        "18"
                    ],
                    ans: 2,
                    exp: "Gunakan sifat f(a) = 3 <=> f⁻¹(3) = a: (2a + 3) / (a - 4) = 3 -> 2a + 3 = 3a - 12 -> a = 15."
                },
                {
                    q: "Jika f(x) = 2x + 5 dan (f ∘ g)(x) = 6x - 1, maka nilai dari g(4) adalah...",
                    opts: [
                        "7",
                        "9",
                        "11",
                        "13"
                    ],
                    ans: 1,
                    exp: "Substitusikan x = 4: f(g(4)) = 6(4) - 1 = 23. Karena f(u) = 2u + 5 = 23 -> 2u = 18 -> u = g(4) = 9."
                },
                {
                    q: "Dalam suatu survei terhadap 50 warga, 30 orang gemar minum kopi, 25 orang gemar minum teh, dan 8 orang tidak gemar keduanya. Banyaknya warga yang HANYA gemar minum kopi adalah...",
                    opts: [
                        "13 orang",
                        "15 orang",
                        "17 orang",
                        "20 orang"
                    ],
                    ans: 2,
                    exp: "Misalkan x gemar keduanya: 50 = 30 + 25 - x + 8 -> 50 = 63 - x -> x = 13 orang. Maka yang HANYA gemar minum kopi = 30 - 13 = 17 orang."
                },
                {
                    q: "Suatu himpunan A memiliki 5 anggota. Banyaknya himpunan bagian dari A yang memiliki tepat 3 anggota adalah...",
                    opts: [
                        "6",
                        "10",
                        "15",
                        "32"
                    ],
                    ans: 1,
                    exp: "Banyaknya himpunan bagian dengan 3 anggota dari 5 anggota dihitung menggunakan kombinasi C(5, 3) = (5 × 4) / (2 × 1) = 10."
                },
                {
                    q: "Diketahui g(x) = x - 3 dan (f ∘ g)(x) = x² - 4x + 5. Nilai dari f(2) adalah...",
                    opts: [
                        "6",
                        "8",
                        "10",
                        "14"
                    ],
                    ans: 2,
                    exp: "Agar g(x) = x - 3 bernilai 2, pilih x = 5. Substitusikan x = 5 ke (f ∘ g)(x): f(g(5)) = f(2) = 5² - 4(5) + 5 = 25 - 20 + 5 = 10."
                },
                {
                    q: "Jika f⁻¹(x) = 3x - 4 dan g⁻¹(x) = (x + 2) / 2, maka nilai dari (f ∘ g)⁻¹(5) adalah...",
                    opts: [
                        "5,5",
                        "6,5",
                        "7,5",
                        "8,5"
                    ],
                    ans: 1,
                    exp: "Gunakan sifat (f ∘ g)⁻¹(x) = g⁻¹(f⁻¹(x)). Hitung f⁻¹(5) = 3(5) - 4 = 11. Lalu g⁻¹(11) = (11 + 2) / 2 = 6,5."
                },
                {
                    q: "Diketahui fungsi f memenuhi persamaan f(x) + 2f(1 - x) = 3x untuk setiap bilangan real x. Nilai dari f(0) adalah...",
                    opts: [
                        "-1",
                        "1",
                        "2",
                        "3"
                    ],
                    ans: 2,
                    exp: "Untuk x = 0: f(0) + 2f(1) = 0 -> f(1) = -½ f(0). Untuk x = 1: f(1) + 2f(0) = 3. Substitusikan f(1): -½ f(0) + 2f(0) = 3 -> (3/2)f(0) = 3 -> f(0) = 2."
                }
            ]
        },
        {
            key: "pk_1_5",
            kategori: "Aljabar & Fungsi",
            judul: "Persamaan Garis Lurus dan Gradien",
            ringkasan: `
                <p><strong>Gradien (m)</strong> menyatakan kemiringan garis lurus. Dua hubungan garis yang selalu muncul di PK adalah garis <strong>sejajar</strong> dan <strong>tegak lurus</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Bentuk / Hubungan</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Gradien & Persamaan Garis</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Bentuk y = mx + c</td>
                                <td class="p-2">Gradien = <strong>m</strong> (koefisien x saat koefisien y = 1)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Bentuk Implisit ax + by + c = 0</td>
                                <td class="p-2">Gradien <strong>m = -a / b</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Melalui 2 Titik (x<sub>1</sub>, y<sub>1</sub>) & (x<sub>2</sub>, y<sub>2</sub>)</td>
                                <td class="p-2"><strong>m = (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>)</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Hubungan 2 Garis</td>
                                <td class="p-2"><strong>Sejajar:</strong> m<sub>1</sub> = m<sub>2</sub> &nbsp;|&nbsp; <strong>Tegak Lurus:</strong> m<sub>1</sub> &middot; m<sub>2</sub> = -1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Tentukan persamaan garis yang melalui titik (2, -1) dan tegak lurus terhadap garis 2x - 3y + 6 = 0!",
                langkah: "Gradien garis awal: m₁ = -a/b = -2/(-3) = 2/3. Karena tegak lurus, m₂ = -3/2. Persamaan garis: y - (-1) = (-3/2)(x - 2) -> 2y + 2 = -3x + 6 -> 3x + 2y = 4."
            },
            gameQuestions: [
                {
                    q: "Gradien garis yang tegak lurus terhadap garis dengan persamaan 4x + 2y - 10 = 0 adalah...",
                    opts: [
                        "-2",
                        "-1/2",
                        "1/2",
                        "2"
                    ],
                    ans: 2,
                    exp: "Gradien garis 4x + 2y - 10 = 0 adalah m₁ = -a/b = -4/2 = -2. Karena tegak lurus (m₁ · m₂ = -1), maka m₂ = -1 / (-2) = 1/2."
                },
                {
                    q: "Persamaan garis lurus yang melalui titik (1, 5) dan sejajar dengan garis y = 3x - 4 adalah...",
                    opts: [
                        "y = 3x + 2",
                        "y = 3x + 5",
                        "y = -3x + 8",
                        "y = 3x - 2"
                    ],
                    ans: 0,
                    exp: "Karena sejajar dengan y = 3x - 4, maka gradiennya m = 3. Substitusi titik (1, 5) ke y - y₁ = m(x - x₁): y - 5 = 3(x - 1) -> y = 3x - 3 + 5 -> y = 3x + 2."
                },
                {
                    q: "Jika titik A(2, 3), B(4, 7), dan C(6, k) terletak pada satu garis lurus (kolinear), maka nilai k adalah...",
                    opts: [
                        "9",
                        "10",
                        "11",
                        "13"
                    ],
                    ans: 2,
                    exp: "Titik segaris memiliki gradien yang sama: m_AB = m_BC -> (7 - 3)/(4 - 2) = (k - 7)/(6 - 4) -> 4/2 = (k - 7)/2 -> k - 7 = 4 -> k = 11."
                },
                {
                    q: "Persamaan garis lurus yang melalui titik (-2, 1) dan (4, 10) adalah...",
                    opts: [
                        "3x - 2y + 8 = 0",
                        "3x + 2y + 4 = 0",
                        "2x - 3y + 7 = 0",
                        "3x - 2y - 8 = 0"
                    ],
                    ans: 0,
                    exp: "Gradien m = (10 - 1) / (4 - (-2)) = 9/6 = 3/2. Persamaan garis: y - 1 = (3/2)(x + 2) -> 2y - 2 = 3x + 6 -> 3x - 2y + 8 = 0."
                },
                {
                    q: "Sebuah garis lurus memotong sumbu-X di titik (6, 0) dan memotong sumbu-Y di titik (0, 4). Persamaan garis tersebut adalah...",
                    opts: [
                        "2x + 3y = 12",
                        "3x + 2y = 12",
                        "2x - 3y = 12",
                        "3x - 2y = 12"
                    ],
                    ans: 0,
                    exp: "Gunakan rumus cepat garis yang memotong (a, 0) dan (0, b): bx + ay = a·b -> 4x + 6y = 24. Bagi kedua ruas dengan 2: 2x + 3y = 12."
                },
                {
                    q: "Garis g melalui titik (3, -2) dan tegak lurus terhadap garis 3x - 4y + 8 = 0. Koordinat titik potong garis g terhadap sumbu-Y adalah...",
                    opts: [
                        "(0, -2)",
                        "(0, 2)",
                        "(0, 4)",
                        "(0, 6)"
                    ],
                    ans: 1,
                    exp: "Gradien garis awal m₁ = -3/(-4) = 3/4, sehingga gradien garis g yang tegak lurus adalah m₂ = -4/3. Persamaan garis g: y - (-2) = (-4/3)(x - 3) -> y + 2 = (-4/3)x + 4 -> y = (-4/3)x + 2. Saat x = 0 diperoleh y = 2, yaitu (0, 2)."
                },
                {
                    q: "Jarak titik P(3, 1) ke garis lurus 3x + 4y + 2 = 0 adalah...",
                    opts: [
                        "2 satuan",
                        "3 satuan",
                        "4 satuan",
                        "5 satuan"
                    ],
                    ans: 1,
                    exp: "Gunakan rumus jarak titik ke garis: d = |ax₁ + by₁ + c| / √(a² + b²) = |3(3) + 4(1) + 2| / √(3² + 4²) = 15 / 5 = 3 satuan."
                },
                {
                    q: "Titik potong antara garis 2x + y = 7 dan garis x - 2y = 1 adalah (a, b). Nilai dari 2a - b adalah...",
                    opts: [
                        "3",
                        "4",
                        "5",
                        "6"
                    ],
                    ans: 2,
                    exp: "Substitusikan y = 7 - 2x ke persamaan kedua: x - 2(7 - 2x) = 1 -> 5x - 14 = 1 -> x = 3 = a, sehingga y = 7 - 2(3) = 1 = b. Maka 2a - b = 2(3) - 1 = 5."
                },
                {
                    q: "Jika garis (k - 1)x + 3y - 5 = 0 sejajar dengan garis 4x + 6y + 9 = 0, maka nilai k adalah...",
                    opts: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    ans: 1,
                    exp: "Dua garis sejajar memiliki perbandingan koefisien x dan y yang sama: (k - 1) / 4 = 3 / 6 -> (k - 1) / 4 = 1 / 2 -> k - 1 = 2 -> k = 3."
                },
                {
                    q: "Luas daerah segitiga yang dibatasi oleh sumbu-X, sumbu-Y, dan garis 3x + 4y - 24 = 0 adalah...",
                    opts: [
                        "12 satuan luas",
                        "24 satuan luas",
                        "36 satuan luas",
                        "48 satuan luas"
                    ],
                    ans: 1,
                    exp: "Titik potong sumbu-X (y = 0) adalah x = 8, dan titik potong sumbu-Y (x = 0) adalah y = 6. Luas segitiga siku-siku = ½ × 8 × 6 = 24 satuan luas."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 2: GEOMETRI & PENGUKURAN (5 SUB-MATERI)
        // =====================================================================
        {
            key: "pk_2_0",
            kategori: "Geometri & Pengukuran",
            judul: "Sudut, Garis Sejajar, dan Poligon",
            ringkasan: `
                <p>Hubungan sudut pada dua garis sejajar yang dipotong garis transversal serta jumlah sudut poligon (segi-n) sangat sering keluar sebagai soal gambar di PK.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep Sudut</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus & Sifat Utama</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Berpenyiku vs Berpelurus</td>
                                <td class="p-2">Berpenyiku (komplemen): <strong>&alpha; + &beta; = 90&deg;</strong> | Berpelurus (suplemen): <strong>&alpha; + &beta; = 180&deg;</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Dua Garis Sejajar</td>
                                <td class="p-2">Sehadap = <strong>sama besar</strong> | Dalam/luar berseberangan = <strong>sama besar</strong> | Dalam/luar sepihak = <strong>jumlahnya 180&deg;</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Sudut Luar Segitiga</td>
                                <td class="p-2">Sudut luar suatu segitiga = <strong>jumlah dua sudut dalam yang tidak bersisian dengannya</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Poligon Segi-n Beraturan</td>
                                <td class="p-2">Jumlah sudut dalam = <strong>(n - 2) &times; 180&deg;</strong> | Besar 1 sudut luar = <strong>360&deg; / n</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Berapakah besar setiap sudut dalam pada segi enam (heksagon) beraturan?",
                langkah: "Sudut luar segi-6 beraturan = 360° / 6 = 60°. Maka setiap sudut dalamnya = 180° - 60° = 120°."
            },
            gameQuestions: [
                {
                    q: "Dua sudut saling berpelurus memiliki perbandingan 4 : 5. Selisih besar kedua sudut tersebut adalah...",
                    opts: [
                        "15°",
                        "20°",
                        "25°",
                        "40°"
                    ],
                    ans: 1,
                    exp: "Jumlah sudut berpelurus = 180°. Selisihnya = [(5 - 4) / (5 + 4)] × 180° = (1/9) × 180° = 20°."
                },
                {
                    q: "Pada segitiga ABC, sisi BC diperpanjang hingga titik D. Jika besar ∠BAC = 55° dan ∠ABC = 65°, maka besar sudut luar ∠ACD adalah...",
                    opts: [
                        "110°",
                        "115°",
                        "120°",
                        "125°"
                    ],
                    ans: 2,
                    exp: "Berdasarkan teorema sudut luar segitiga, besar ∠ACD sama dengan jumlah dua sudut dalam yang tidak bersisian dengannya: ∠BAC + ∠ABC = 55° + 65° = 120°."
                },
                {
                    q: "Besar setiap sudut dalam dari suatu segi delapan (oktagon) beraturan adalah...",
                    opts: [
                        "120°",
                        "135°",
                        "140°",
                        "144°"
                    ],
                    ans: 1,
                    exp: "Sudut luar segi-8 beraturan = 360° / 8 = 45°. Maka besar satu sudut dalamnya = 180° - 45° = 135°."
                },
                {
                    q: "Besar suatu sudut adalah 4 kali besar sudut penyikunya (komplemennya). Besar sudut pelurus (suplemen) dari sudut tersebut adalah...",
                    opts: [
                        "72°",
                        "98°",
                        "108°",
                        "118°"
                    ],
                    ans: 2,
                    exp: "Misalkan sudut tersebut α, maka α = 4(90° - α) -> 5α = 360° -> α = 72°. Sudut pelurusnya adalah 180° - 72° = 108°."
                },
                {
                    q: "Dua garis sejajar dipotong oleh sebuah garis transversal. Jika sepasang sudut dalam sepihak berukuran (3x + 15)° dan (2x - 10)°, maka nilai x adalah...",
                    opts: [
                        "30",
                        "35",
                        "40",
                        "45"
                    ],
                    ans: 1,
                    exp: "Sepasang sudut dalam sepihak berjumlah 180°: (3x + 15) + (2x - 10) = 180 -> 5x + 5 = 180 -> 5x = 175 -> x = 35."
                },
                {
                    q: "Jumlah seluruh sudut dalam dari suatu poligon (segi-n) cembung adalah 1.440°. Banyaknya sisi (n) dari poligon tersebut adalah...",
                    opts: [
                        "8",
                        "9",
                        "10",
                        "12"
                    ],
                    ans: 2,
                    exp: "Rumus jumlah sudut dalam segi-n: (n - 2) × 180° = 1.440° -> n - 2 = 1.440 / 180 = 8 -> n = 10."
                },
                {
                    q: "Banyaknya diagonal bidang yang dapat ditarik di dalam sebuah segi sepuluh (dekagon) cembung adalah...",
                    opts: [
                        "27",
                        "35",
                        "40",
                        "45"
                    ],
                    ans: 1,
                    exp: "Banyaknya diagonal segi-n adalah n(n - 3) / 2 = 10(10 - 3) / 2 = (10 × 7) / 2 = 35 diagonal."
                },
                {
                    q: "Pada segitiga sama kaki ABC dengan AB = AC, besar sudut puncak ∠BAC adalah 40°. Jika garis bagi sudut ∠ABC memotong sisi AC di titik D, maka besar ∠BDC adalah...",
                    opts: [
                        "65°",
                        "70°",
                        "75°",
                        "80°"
                    ],
                    ans: 2,
                    exp: "Karena AB = AC dan ∠BAC = 40°, maka ∠ABC = ∠ACB = (180° - 40°)/2 = 70°. Garis bagi BD membagi ∠ABC menjadi ∠DBC = 35°. Pada segitiga BDC, ∠BDC = 180° - (35° + 70°) = 75°."
                },
                {
                    q: "Jarum pendek (jam) dan jarum panjang (menit) pada sebuah jam dinding menunjukkan pukul 04.20. Besar sudut terkecil yang dibentuk oleh kedua jarum jam tersebut adalah...",
                    opts: [
                        "0°",
                        "5°",
                        "10°",
                        "15°"
                    ],
                    ans: 2,
                    exp: "Pada menit ke-20, jarum panjang tepat di angka 4 (120°). Jarum pendek sudah bergeser dari angka 4 sejauh (20/60) × 30° = 10°. Jadi sudut terkecil antara keduanya adalah 10°."
                },
                {
                    q: "Perbandingan sudut-sudut dalam sebuah segitiga adalah 2 : 3 : 4. Selisih antara sudut terbesar dan sudut terkecil pada segitiga tersebut adalah...",
                    opts: [
                        "20°",
                        "30°",
                        "40°",
                        "60°"
                    ],
                    ans: 2,
                    exp: "Total bagian = 2 + 3 + 4 = 9 bagian = 180° -> 1 bagian = 20°. Selisih sudut terbesar dan terkecil = (4 - 2) × 20° = 40°."
                }
            ]
        },
        {
            key: "pk_2_1",
            kategori: "Geometri & Pengukuran",
            judul: "Sifat Bangun Datar: Keliling dan Luas",
            ringkasan: `
                <p>Soal bangun datar di PK sering menggabungkan dua bangun (misal persegi di dalam lingkaran atau daerah yang diarsir). Kuasai rumus cepat berikut:</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1 my-2">
                    <div class="font-bold text-teal-800">⚡ Rumus Cepat Bangun Datar:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Persegi:</strong> Luas = s<sup>2</sup> = <strong>&frac12; &times; d<sup>2</sup></strong> (dengan d = diagonal = s&radic;2).</li>
                        <li><strong>Segitiga Sama Sisi (sisi a):</strong> Tinggi = &frac12;a&radic;3 &nbsp;|&nbsp; Luas = <strong>&frac14;a<sup>2</sup>&radic;3</strong>.</li>
                        <li><strong>Trapesium & Belah Ketupat:</strong> L<sub>trapesium</sub> = &frac12;(a + b) &times; t &nbsp;|&nbsp; L<sub>belah ketupat</sub> = &frac12; &times; d<sub>1</sub> &times; d<sub>2</sub>.</li>
                        <li><strong>Lingkaran & Juring:</strong> L = &pi;r<sup>2</sup>, K = 2&pi;r, L<sub>juring</sub> = (&theta;/360&deg;) &times; &pi;r<sup>2</sup>.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Sebuah persegi memiliki panjang diagonal 10 cm. Berapakah luas persegi tersebut?",
                langkah: "Gunakan rumus L = ½ × d² = ½ × 10² = ½ × 100 = 50 cm²."
            },
            gameQuestions: [
                {
                    q: "Sebuah belah ketupat memiliki keliling 40 cm dan panjang salah satu diagonalnya 12 cm. Luas belah ketupat tersebut adalah...",
                    opts: [
                        "96 cm²",
                        "120 cm²",
                        "144 cm²",
                        "192 cm²"
                    ],
                    ans: 0,
                    exp: "Panjang sisi belah ketupat s = 40 / 4 = 10 cm. Setengah diagonal pertama = 12 / 2 = 6 cm. Dengan tripel Pythagoras 6-8-10, setengah diagonal kedua = 8 cm, sehingga d₂ = 16 cm. Luas = ½ × d₁ × d₂ = ½ × 12 × 16 = 96 cm²."
                },
                {
                    q: "Jika jari-jari sebuah lingkaran diperbesar sehingga kelilingnya menjadi 3 kali lipat semula, maka luas lingkaran tersebut menjadi ... kali lipat semula.",
                    opts: [
                        "3",
                        "6",
                        "9",
                        "12"
                    ],
                    ans: 2,
                    exp: "Keliling sebanding dengan jari-jari (K ∝ r), sehingga r baru = 3r. Karena Luas sebanding dengan kuadrat jari-jari (L ∝ r²), maka luasnya menjadi 3² = 9 kali lipat semula."
                },
                {
                    q: "Luas sebuah segitiga sama sisi yang memiliki keliling 18 cm adalah...",
                    opts: [
                        "9√3 cm²",
                        "12√3 cm²",
                        "18√3 cm²",
                        "36√3 cm²"
                    ],
                    ans: 0,
                    exp: "Panjang sisi segitiga sama sisi a = 18 / 3 = 6 cm. Luas = ¼ × a²√3 = ¼ × 6²√3 = ¼ × 36√3 = 9√3 cm²."
                },
                {
                    q: "Sebuah trapesium sama kaki memiliki panjang sisi sejajar 10 cm dan 22 cm, serta panjang kaki miringnya 10 cm. Luas trapesium tersebut adalah...",
                    opts: [
                        "96 cm²",
                        "112 cm²",
                        "128 cm²",
                        "160 cm²"
                    ],
                    ans: 2,
                    exp: "Alas segitiga siku-siku di sisi samping trapesium = (22 - 10) / 2 = 6 cm. Dengan sisi miring 10 cm, diperoleh tinggi trapesium t = √(10² - 6²) = 8 cm. Luas = ½ × (10 + 22) × 8 = 128 cm²."
                },
                {
                    q: "Sebuah persegi berada tepat di dalam sebuah lingkaran sehingga keempat titik sudut persegi menyentuh keliling lingkaran. Jika jari-jari lingkaran adalah 7 cm, maka luas persegi tersebut adalah...",
                    opts: [
                        "49 cm²",
                        "98 cm²",
                        "147 cm²",
                        "196 cm²"
                    ],
                    ans: 1,
                    exp: "Diagonal persegi sama dengan diameter lingkaran: d = 2 × 7 = 14 cm. Luas persegi = ½ × d² = ½ × 14² = 98 cm²."
                },
                {
                    q: "Sebuah juring lingkaran memiliki sudut pusat 72° dan jari-jari 10 cm. Luas juring lingkaran tersebut adalah... (π = 3,14)",
                    opts: [
                        "31,4 cm²",
                        "47,1 cm²",
                        "62,8 cm²",
                        "78,5 cm²"
                    ],
                    ans: 2,
                    exp: "Luas juring = (72° / 360°) × πr² = (1/5) × 3,14 × 10² = (1/5) × 314 = 62,8 cm²."
                },
                {
                    q: "Sebuah taman berbentuk persegi panjang berukuran 20 m × 14 m. Di sekeliling bagian luar taman dibuat jalan setapak dengan lebar 1 m. Luas jalan setapak tersebut adalah...",
                    opts: [
                        "68 m²",
                        "70 m²",
                        "72 m²",
                        "76 m²"
                    ],
                    ans: 2,
                    exp: "Ukuran total beserta jalan setapak = (20 + 2) × (14 + 2) = 22 × 16 = 352 m². Luas taman = 20 × 14 = 280 m². Luas jalan setapak = 352 - 280 = 72 m²."
                },
                {
                    q: "Pada segitiga ABC, titik D terletak pada sisi AB sehingga AD : DB = 2 : 3. Jika luas segitiga ABC adalah 60 cm², maka luas segitiga ADC adalah...",
                    opts: [
                        "20 cm²",
                        "24 cm²",
                        "30 cm²",
                        "36 cm²"
                    ],
                    ans: 1,
                    exp: "Segitiga ADC dan ABC memiliki tinggi yang sama dari titik C ke garis AB, sehingga perbandingan luasnya sebanding dengan alasnya: Luas ADC = [2 / (2 + 3)] × 60 = (2/5) × 60 = 24 cm²."
                },
                {
                    q: "Panjang sebuah persegi panjang dinaikkan sebesar 20%, sedangkan lebarnya diturunkan sebesar 10%. Persentase perubahan luas persegi panjang tersebut adalah...",
                    opts: [
                        "Bertambah 8%",
                        "Bertambah 10%",
                        "Berkurang 8%",
                        "Tetap"
                    ],
                    ans: 0,
                    exp: "Luas baru = (1,20 p) × (0,90 l) = 1,08 × (p × l), yang berarti luasnya bertambah sebesar 8%."
                },
                {
                    q: "Dua buah lingkaran masing-masing berjari-jari 6 cm dan 9 cm. Perbandingan luas lingkaran pertama dan lingkaran kedua adalah...",
                    opts: [
                        "2 : 3",
                        "4 : 9",
                        "8 : 27",
                        "3 : 4"
                    ],
                    ans: 1,
                    exp: "Perbandingan luas lingkaran sebanding dengan kuadrat jari-jarinya: L₁ : L₂ = 6² : 9² = 36 : 81 = 4 : 9."
                }
            ]
        },
        {
            key: "pk_2_2",
            kategori: "Geometri & Pengukuran",
            judul: "Sifat Bangun Ruang: Volume dan Luas Permukaan",
            ringkasan: `
                <p>Pada <strong>Bangun Ruang (3D)</strong>, bedakan bangun ruang <strong>beraturan tegak (Prisma/Tabung)</strong> dengan bangun ruang <strong>berpuncak lancip (Limas/Kerucut)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Bangun Ruang</th>
                                <th class="p-2 border border-slate-200 text-left">Volume (V)</th>
                                <th class="p-2 border border-slate-200 text-left">Luas Permukaan (LP)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Kubus (rusuk s)</td>
                                <td class="p-2">V = s<sup>3</sup></td>
                                <td class="p-2">LP = 6s<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Balok (p, l, t)</td>
                                <td class="p-2">V = p &times; l &times; t</td>
                                <td class="p-2">LP = 2(pl + pt + lt)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Prisma & Tabung</td>
                                <td class="p-2">V = Luas Alas &times; t (Tabung: &pi;r<sup>2</sup>t)</td>
                                <td class="p-2">Tabung: 2&pi;r(r + t)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Limas & Kerucut</td>
                                <td class="p-2">V = <strong>&frac13; &times; Luas Alas &times; t</strong></td>
                                <td class="p-2">Kerucut: &pi;r(r + s) dengan s = &radic;(r<sup>2</sup> + t<sup>2</sup>)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Bola (jari-jari r)</td>
                                <td class="p-2">V = (4/3)&pi;r<sup>3</sup></td>
                                <td class="p-2">LP = 4&pi;r<sup>2</sup></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Sebuah kerucut dimasukkan tepat ke dalam sebuah tabung sehingga alas dan tingginya berimpit. Jika volume tabung 300 cm³, berapakah volume kerucut?",
                langkah: "Karena memiliki jari-jari r dan tinggi t yang sama, V_kerucut = ⅓ × V_tabung = ⅓ × 300 = 100 cm³."
            },
            gameQuestions: [
                {
                    q: "Jumlah panjang seluruh rusuk sebuah kubus adalah 60 cm. Luas permukaan kubus tersebut adalah...",
                    opts: [
                        "125 cm²",
                        "150 cm²",
                        "216 cm²",
                        "300 cm²"
                    ],
                    ans: 1,
                    exp: "Kubus memiliki 12 rusuk yang sama panjang, sehingga s = 60 / 12 = 5 cm. Luas permukaan kubus = 6 × s² = 6 × 5² = 150 cm²."
                },
                {
                    q: "Sebuah limas segi empat beraturan memiliki panjang rusuk alas 10 cm dan tinggi limas 12 cm. Volume limas tersebut adalah...",
                    opts: [
                        "360 cm³",
                        "400 cm³",
                        "600 cm³",
                        "1.200 cm³"
                    ],
                    ans: 1,
                    exp: "Volume limas = ⅓ × Luas Alas × tinggi = ⅓ × (10 × 10) × 12 = 100 × 4 = 400 cm³."
                },
                {
                    q: "Sebuah tabung dan sebuah kerucut memiliki jari-jari alas yang sama. Jika volume tabung sama dengan 2 kali volume kerucut, maka perbandingan tinggi tabung dan tinggi kerucut adalah...",
                    opts: [
                        "1 : 3",
                        "2 : 3",
                        "3 : 2",
                        "2 : 1"
                    ],
                    ans: 1,
                    exp: "V_tabung = 2 × V_kerucut -> πr²·t₁ = 2 × (⅓ πr²·t₂) -> t₁ = (2/3) t₂ -> t₁ : t₂ = 2 : 3."
                },
                {
                    q: "Sebuah balok memiliki luas sisi depan 24 cm², luas sisi samping 18 cm², dan luas sisi alas 12 cm². Volume balok tersebut adalah...",
                    opts: [
                        "36 cm³",
                        "54 cm³",
                        "72 cm³",
                        "108 cm³"
                    ],
                    ans: 2,
                    exp: "Gunakan sifat V = √(L₁ × L₂ × L₃) = √(24 × 18 × 12) = √(5.184) = 72 cm³."
                },
                {
                    q: "Sebuah kerucut memiliki jari-jari alas 7 cm dan tinggi 24 cm. Luas selimut kerucut tersebut adalah... (π = 22/7)",
                    opts: [
                        "528 cm²",
                        "550 cm²",
                        "616 cm²",
                        "704 cm²"
                    ],
                    ans: 1,
                    exp: "Garis pelukis s = √(7² + 24²) = 25 cm (tripel Pythagoras 7-24-25). Luas selimut kerucut = π × r × s = (22/7) × 7 × 25 = 550 cm²."
                },
                {
                    q: "Sebuah bola logam berjari-jari 6 cm dilebur menjadi sejumlah bola kecil pejal berjari-jari 2 cm. Banyaknya bola kecil yang terbentuk adalah...",
                    opts: [
                        "9 buah",
                        "18 buah",
                        "27 buah",
                        "36 buah"
                    ],
                    ans: 2,
                    exp: "Perbandingan volume bola sebanding dengan pangkat tiga jari-jarinya: n = (r_besar / r_kecil)³ = (6 / 2)³ = 3³ = 27 buah."
                },
                {
                    q: "Sebuah tabung tertutup memiliki jari-jari alas 7 cm dan tinggi 10 cm. Luas seluruh permukaan tabung tersebut adalah... (π = 22/7)",
                    opts: [
                        "440 cm²",
                        "594 cm²",
                        "748 cm²",
                        "1.540 cm²"
                    ],
                    ans: 2,
                    exp: "Luas permukaan tabung = 2πr(r + t) = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm²."
                },
                {
                    q: "Sebuah bola dimasukkan tepat menyinggung sisi alas, sisi atas, dan sisi selimut sebuah tabung. Perbandingan volume bola terhadap volume tabung tersebut adalah...",
                    opts: [
                        "1 : 2",
                        "2 : 3",
                        "3 : 4",
                        "1 : 3"
                    ],
                    ans: 1,
                    exp: "Karena bola menyinggung alas dan tutup tabung, tinggi tabung t = 2r. Maka V_bola : V_tabung = [(4/3)πr³] : [πr²(2r)] = (4/3) : 2 = 2 : 3."
                },
                {
                    q: "Sebuah prisma tegak memiliki alas berbentuk segitiga siku-siku dengan panjang sisi siku-siku 6 cm dan 8 cm. Jika tinggi prisma 10 cm, maka luas seluruh permukaan prisma tersebut adalah...",
                    opts: [
                        "240 cm²",
                        "264 cm²",
                        "288 cm²",
                        "312 cm²"
                    ],
                    ans: 2,
                    exp: "Sisi miring alas = √(6² + 8²) = 10 cm. Luas alas = ½ × 6 × 8 = 24 cm², keliling alas = 6 + 8 + 10 = 24 cm. Luas permukaan = (2 × 24) + (24 × 10) = 48 + 240 = 288 cm²."
                },
                {
                    q: "Jika panjang rusuk sebuah kubus diperbesar menjadi 2 kali lipat semula, maka perbandingan PERTAMBAHAN volume kubus terhadap volume kubus mula-mula adalah...",
                    opts: [
                        "3 : 1",
                        "4 : 1",
                        "7 : 1",
                        "8 : 1"
                    ],
                    ans: 2,
                    exp: "Volume awal V₀ = s³ dan volume baru V₁ = (2s)³ = 8s³. Pertambahan volume ΔV = 8s³ - s³ = 7s³. Maka ΔV : V₀ = 7 : 1."
                }
            ]
        },
        {
            key: "pk_2_3",
            kategori: "Geometri & Pengukuran",
            judul: "Trigonometri Dasar Segitiga Siku-siku",
            ringkasan: `
                <p><strong>Trigonometri dasar</strong> di PK berfokus pada perbandingan sisi segitiga siku-siku (<strong>SINDEMI, KOSAMI, TANDESA</strong>), sudut istimewa (0&deg;, 30&deg;, 45&deg;, 60&deg;, 90&deg;), dan identitas Pythagoras <strong>sin<sup>2</sup>&theta; + cos<sup>2</sup>&theta; = 1</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Fungsi</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Sisi</th>
                                <th class="p-2 border border-slate-200 text-center">30&deg;</th>
                                <th class="p-2 border border-slate-200 text-center">45&deg;</th>
                                <th class="p-2 border border-slate-200 text-center">60&deg;</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">sin &theta;</td>
                                <td class="p-2">Depan / Miring</td>
                                <td class="p-2 text-center">1/2</td>
                                <td class="p-2 text-center">&frac12;&radic;2</td>
                                <td class="p-2 text-center">&frac12;&radic;3</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">cos &theta;</td>
                                <td class="p-2">Samping / Miring</td>
                                <td class="p-2 text-center">&frac12;&radic;3</td>
                                <td class="p-2 text-center">&frac12;&radic;2</td>
                                <td class="p-2 text-center">1/2</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">tan &theta;</td>
                                <td class="p-2">Depan / Samping</td>
                                <td class="p-2 text-center">&frac13;&radic;3</td>
                                <td class="p-2 text-center">1</td>
                                <td class="p-2 text-center">&radic;3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Pada segitiga siku-siku di B, diketahui sudut A lancip dengan sin A = 3/5. Berapakah nilai tan A?",
                langkah: "sin A = Depan / Miring = 3 / 5. Dengan Pythagoras 3-4-5, sisi Samping = 4. Maka tan A = Depan / Samping = 3/4."
            },
            gameQuestions: [
                {
                    q: "Diketahui α adalah sudut lancip pada segitiga siku-siku dengan cos α = 5/13. Nilai dari sin α + tan α adalah...",
                    opts: [
                        "12/13",
                        "12/5",
                        "216/65",
                        "17/13"
                    ],
                    ans: 2,
                    exp: "cos α = Samping/Miring = 5/13. Dari tripel Pythagoras 5-12-13 diperoleh sisi Depan = 12. Maka sin α = 12/13 dan tan α = 12/5. Jumlahnya = 12/13 + 12/5 = (60 + 156)/65 = 216/65."
                },
                {
                    q: "Nilai dari (sin 30° + cos 60°) × tan 45° adalah...",
                    opts: [
                        "1/2",
                        "1",
                        "√3",
                        "2"
                    ],
                    ans: 1,
                    exp: "sin 30° = 1/2, cos 60° = 1/2, dan tan 45° = 1. Maka (1/2 + 1/2) × 1 = 1 × 1 = 1."
                },
                {
                    q: "Sebuah tangga bersandar pada dinding vertikal membentuk sudut 60° terhadap lantai mendatar. Jika jarak kaki tangga ke dinding adalah 3 meter, maka panjang tangga tersebut adalah...",
                    opts: [
                        "3√2 meter",
                        "3√3 meter",
                        "6 meter",
                        "9 meter"
                    ],
                    ans: 2,
                    exp: "cos 60° = Samping (jarak kaki tangga) / Miring (panjang tangga) -> 1/2 = 3 / L -> L = 6 meter."
                },
                {
                    q: "Diketahui segitiga ABC siku-siku di B dengan panjang AB = 6 cm dan besar ∠BAC = 30°. Panjang sisi BC adalah...",
                    opts: [
                        "2√3 cm",
                        "3√3 cm",
                        "4√3 cm",
                        "6√3 cm"
                    ],
                    ans: 0,
                    exp: "tan 30° = Depan (BC) / Samping (AB) -> (1/3)√3 = BC / 6 -> BC = 2√3 cm."
                },
                {
                    q: "Untuk setiap sudut θ, nilai dari (sin θ + cos θ)² + (sin θ - cos θ)² adalah...",
                    opts: [
                        "0",
                        "1",
                        "2",
                        "4"
                    ],
                    ans: 2,
                    exp: "Jabarkan kedua kuadrat: (sin²θ + 2sinθcosθ + cos²θ) + (sin²θ - 2sinθcosθ + cos²θ) = 2(sin²θ + cos²θ) = 2(1) = 2."
                },
                {
                    q: "Seorang pengamat berdiri sejauh 20√3 meter dari kaki sebuah menara vertikal dan melihat puncak menara dengan sudut elevasi 30°. Jika tinggi mata pengamat dari tanah adalah 1,6 meter, maka tinggi total menara tersebut adalah...",
                    opts: [
                        "19,6 meter",
                        "20,0 meter",
                        "21,6 meter",
                        "23,2 meter"
                    ],
                    ans: 2,
                    exp: "Tinggi menara di atas mata pengamat = 20√3 × tan 30° = 20√3 × (1/√3) = 20 meter. Tinggi total menara = 20 + 1,6 = 21,6 meter."
                },
                {
                    q: "Diketahui sudut lancip β memenuhi tan β = 3/4. Nilai dari 5 sin β - 2 cos β adalah...",
                    opts: [
                        "1/5",
                        "3/5",
                        "7/5",
                        "9/5"
                    ],
                    ans: 2,
                    exp: "Dari tan β = 3/4 (Depan = 3, Samping = 4) diperoleh sisi Miring = 5. Maka sin β = 3/5 dan cos β = 4/5. Sehingga 5(3/5) - 2(4/5) = 3 - 8/5 = 7/5."
                },
                {
                    q: "Nilai dari (sin² 60° + cos² 30°) / (tan² 60° - 1) adalah...",
                    opts: [
                        "1/2",
                        "3/4",
                        "1",
                        "3/2"
                    ],
                    ans: 1,
                    exp: "sin² 60° = (½√3)² = 3/4, cos² 30° = (½√3)² = 3/4, dan tan² 60° = (√3)² = 3. Maka (3/4 + 3/4) / (3 - 1) = (3/2) / 2 = 3/4."
                },
                {
                    q: "Pada segitiga ABC, diketahui panjang sisi AB = 8 cm, AC = 10 cm, dan besar ∠BAC = 60°. Luas segitiga ABC tersebut adalah...",
                    opts: [
                        "10√3 cm²",
                        "20 cm²",
                        "20√3 cm²",
                        "40√3 cm²"
                    ],
                    ans: 2,
                    exp: "Gunakan rumus luas segitiga trigonometri: L = ½ × AB × AC × sin ∠BAC = ½ × 8 × 10 × sin 60° = 40 × (½√3) = 20√3 cm²."
                },
                {
                    q: "Jika sin x + cos x = 7/5 untuk x sudut lancip, maka nilai dari sin x · cos x adalah...",
                    opts: [
                        "7/25",
                        "12/25",
                        "14/25",
                        "24/25"
                    ],
                    ans: 1,
                    exp: "Kuadratkan kedua ruas: (sin x + cos x)² = (7/5)² -> sin²x + cos²x + 2 sin x cos x = 49/25 -> 1 + 2 sin x cos x = 49/25 -> 2 sin x cos x = 24/25 -> sin x cos x = 12/25."
                }
            ]
        },
        {
            key: "pk_2_4",
            kategori: "Geometri & Pengukuran",
            judul: "Dimensi Tiga (Jarak Titik, Garis, Bidang)",
            ringkasan: `
                <p>Pada <strong>Kubus ABCD.EFGH dengan panjang rusuk a</strong>, menghafal rumus diagonal dan jarak istimewa akan memangkas waktu pengerjaan dari 3 menit menjadi 10 detik!</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Unsur / Jarak dalam Kubus (rusuk a)</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Diagonal Bidang / Sisi (AC, BG, AF)</td>
                                <td class="p-2"><strong>a&radic;2</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Diagonal Ruang (AG, BH, CE, DF)</td>
                                <td class="p-2"><strong>a&radic;3</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Jarak Titik Sudut ke Titik Tengah Sisi Seberang (misal A ke tengah CG)</td>
                                <td class="p-2"><strong>&frac12;a&radic;5</strong> atau <strong>&frac32;a</strong> (untuk A ke tengah EFGH = <strong>&frac12;a&radic;6</strong>)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Jarak C ke Bidang BDG (Trik 1/3 Diagonal Ruang)</td>
                                <td class="p-2">Jarak C ke BDG = <strong>&frac13;a&radic;3</strong> &nbsp;|&nbsp; Jarak E ke BDG = <strong>&frac23;a&radic;3</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Pada kubus ABCD.EFGH dengan rusuk 6 cm, berapakah jarak dari titik E ke pusat bidang alas ABCD?",
                langkah: "Gunakan rumus jarak titik sudut ke pusat bidang seberang: ½a√6 = ½(6)√6 = 3√6 cm. (Atau Pythagoras AE = 6 dan AO = ½×6√2 = 3√2 -> EO = √(36+18) = √54 = 3√6)."
            },
            gameQuestions: [
                {
                    q: "Diketahui kubus ABCD.EFGH memiliki panjang rusuk 8 cm. Jarak antara titik A dan titik G (diagonal ruang) adalah...",
                    opts: [
                        "8√2 cm",
                        "8√3 cm",
                        "4√6 cm",
                        "16 cm"
                    ],
                    ans: 1,
                    exp: "Garis AG adalah diagonal ruang kubus dengan panjang rusuk a = 8 cm, sehingga panjang AG = a√3 = 8√3 cm."
                },
                {
                    q: "Pada kubus ABCD.EFGH dengan panjang rusuk 6 cm, titik P adalah titik potong diagonal bidang atas EFGH. Jarak dari titik A ke titik P adalah...",
                    opts: [
                        "3√2 cm",
                        "3√5 cm",
                        "3√6 cm",
                        "6√2 cm"
                    ],
                    ans: 2,
                    exp: "Segitiga AEP siku-siku di E dengan AE = 6 cm dan EP = ½ EG = ½(6√2) = 3√2 cm. Maka AP = √(6² + (3√2)²) = √(36 + 18) = √54 = 3√6 cm (rumus cepat: ½a√6)."
                },
                {
                    q: "Sebuah balok memiliki ukuran panjang 12 cm, lebar 4 cm, dan tinggi 3 cm. Panjang diagonal ruang balok tersebut adalah...",
                    opts: [
                        "13 cm",
                        "15 cm",
                        "17 cm",
                        "19 cm"
                    ],
                    ans: 0,
                    exp: "Diagonal ruang balok = √(p² + l² + t²) = √(12² + 4² + 3²) = √(144 + 16 + 9) = √169 = 13 cm."
                },
                {
                    q: "Diketahui kubus ABCD.EFGH dengan panjang rusuk 12 cm. Jarak dari titik C ke bidang BDG adalah...",
                    opts: [
                        "3√3 cm",
                        "4√3 cm",
                        "6√2 cm",
                        "6√3 cm"
                    ],
                    ans: 1,
                    exp: "Gunakan rumus cepat jarak titik sudut C ke bidang BDG: ⅓ × diagonal ruang = ⅓ × a√3 = ⅓ × 12√3 = 4√3 cm."
                },
                {
                    q: "Pada kubus ABCD.EFGH dengan panjang rusuk 8 cm, titik M adalah titik tengah rusuk CG. Jarak dari titik E ke titik M adalah...",
                    opts: [
                        "10 cm",
                        "12 cm",
                        "8√2 cm",
                        "8√3 cm"
                    ],
                    ans: 1,
                    exp: "Segitiga EGM siku-siku di G dengan EG = 8√2 cm dan GM = 4 cm. Maka EM = √[(8√2)² + 4²] = √(128 + 16) = √144 = 12 cm (rumus cepat: (3/2)a = 12 cm)."
                },
                {
                    q: "Diketahui kubus ABCD.EFGH dengan panjang rusuk 6 cm. Jarak dari titik B ke garis diagonal ruang AG adalah...",
                    opts: [
                        "2√3 cm",
                        "2√6 cm",
                        "3√2 cm",
                        "3√6 cm"
                    ],
                    ans: 1,
                    exp: "Pada segitiga ABG yang siku-siku di B, jarak B ke AG adalah tinggi segitiga dari B: d = (AB × BG) / AG = (6 × 6√2) / (6√3) = 6√2 / √3 = 2√6 cm."
                },
                {
                    q: "Sebuah limas segi empat beraturan T.ABCD memiliki panjang rusuk alas AB = 8 cm dan panjang rusuk tegak TA = 12 cm. Tinggi limas tersebut adalah...",
                    opts: [
                        "4√5 cm",
                        "4√6 cm",
                        "4√7 cm",
                        "8√2 cm"
                    ],
                    ans: 2,
                    exp: "Setengah diagonal alas AO = ½ × 8√2 = 4√2 cm. Tinggi limas TO = √(TA² - AO²) = √(12² - (4√2)²) = √(144 - 32) = √112 = 4√7 cm."
                },
                {
                    q: "Pada kubus ABCD.EFGH dengan panjang rusuk 10 cm, jarak antara bidang AFH dan bidang BDG adalah...",
                    opts: [
                        "(5/3)√3 cm",
                        "(10/3)√2 cm",
                        "(10/3)√3 cm",
                        "5√3 cm"
                    ],
                    ans: 2,
                    exp: "Bidang AFH dan bidang BDG membagi diagonal ruang EC menjadi 3 bagian sama panjang, sehingga jarak kedua bidang adalah ⅓ × EC = (10/3)√3 cm."
                },
                {
                    q: "Diketahui kubus ABCD.EFGH dengan panjang rusuk 4 cm. Luas bidang diagonal ACGE pada kubus tersebut adalah...",
                    opts: [
                        "8√2 cm²",
                        "16 cm²",
                        "16√2 cm²",
                        "16√3 cm²"
                    ],
                    ans: 2,
                    exp: "Bidang diagonal ACGE berbentuk persegi panjang dengan panjang AC = 4√2 cm dan lebar AE = 4 cm. Luasnya = 4√2 × 4 = 16√2 cm²."
                },
                {
                    q: "Pada kubus ABCD.EFGH, besar sudut yang dibentuk oleh garis diagonal bidang AH dan garis diagonal bidang AC adalah...",
                    opts: [
                        "30°",
                        "45°",
                        "60°",
                        "90°"
                    ],
                    ans: 2,
                    exp: "Hubungkan titik C dan H. Karena AH = AC = CH = a√2 (ketiganya diagonal bidang kubus), maka segitiga ACH adalah segitiga sama sisi, sehingga besar ∠HAC = 60°."
                }
            ]
        },

        // =====================================================================
        // KATEGORI 3: STATISTIKA, PELUANG & MATRIKS (5 SUB-MATERI)
        // =====================================================================
        {
            key: "pk_3_0",
            kategori: "Statistika, Peluang & Matriks",
            judul: "Statistika Dasar & Tendensi Sentral (Mean, Median, Modus)",
            ringkasan: `
                <p><strong>Ukuran pemusatan (Mean, Median, Modus)</strong> dan <strong>ukuran penyebaran (Jangkauan, Kuartil, Simpangan Baku)</strong> memiliki sifat perubahan yang sangat elegan ketika seluruh data ditambah atau dikali bilangan konstan:</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Aturan Emas Transformasi Data (Jika Setiap Data Dikali p Lalu Ditambah q):</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Ukuran Pemusatan (Mean, Median, Modus, Kuartil):</strong> Berubah mengikuti <strong>KEDUA operasi</strong> &rarr; <strong>Nilai Baru = p &times; Nilai Lama + q</strong>.</li>
                        <li><strong>Ukuran Penyebaran (Jangkauan/Range, Jangkauan Antarkuartil, Simpangan Baku):</strong> Hanya berubah oleh <strong>PERKALIAN |p|</strong> (tidak berubah saat ditambah/dikurang q!) &rarr; <strong>Penyebaran Baru = |p| &times; Penyebaran Lama</strong>.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Sekumpulan data memiliki rata-rata 15 dan jangkauan 6. Jika setiap data dikalikan 2 kemudian dikurangi 5, berapakah rata-rata dan jangkauan barunya?",
                langkah: "Rata-rata baru = 2(15) - 5 = 25. Jangkauan baru (hanya dipengaruhi perkalian 2) = 2 × 6 = 12."
            },
            gameQuestions: [
                {
                    q: "Sekumpulan data memiliki nilai rata-rata 20 dan jangkauan (range) 8. Jika setiap nilai data dalam kumpulan tersebut dikalikan 3 kemudian ditambah 4, maka rata-rata dan jangkauan data yang baru berturut-turut adalah...",
                    opts: [
                        "64 dan 28",
                        "64 dan 24",
                        "60 dan 24",
                        "60 dan 28"
                    ],
                    ans: 1,
                    exp: "Rata-rata (pemusatan) mengikuti kali dan tambah: 3(20) + 4 = 64. Jangkauan (penyebaran) hanya dipengaruhi perkalian: 3 × 8 = 24."
                },
                {
                    q: "Diketahui lima bilangan bulat positif yang telah diurutkan dari terkecil ke terbesar: 4, a, 7, b, 11. Jika modus data tersebut tunggal yaitu 7 dan rata-ratanya adalah 7, maka nilai a adalah...",
                    opts: [
                        "4",
                        "5",
                        "6",
                        "7"
                    ],
                    ans: 2,
                    exp: "Rata-rata = 7, sehingga jumlah kelima data = 5 × 7 = 35 -> 4 + a + 7 + b + 11 = 35 -> a + b = 13. Karena data terurut (4 ≤ a ≤ 7 ≤ b ≤ 11) dan modus tunggalnya 7, maka salah satu dari a atau b harus bernilai 7, yaitu b = 7 dan a = 6."
                },
                {
                    q: "Median dari data: 12, 8, 15, 6, 10, 18, 9, 14 adalah...",
                    opts: [
                        "10",
                        "11",
                        "12",
                        "12,5"
                    ],
                    ans: 1,
                    exp: "Urutkan ke-8 data dari terkecil: 6, 8, 9, 10, 12, 14, 15, 18. Median adalah rata-rata data ke-4 (10) dan ke-5 (12): (10 + 12) / 2 = 11."
                },
                {
                    q: "Rata-rata nilai ujian matematika dari 28 siswa adalah 75. Setelah nilai dari 2 siswa ujian susulan digabungkan, rata-rata kelas naik menjadi 76. Rata-rata nilai kedua siswa yang mengikuti ujian susulan tersebut adalah...",
                    opts: [
                        "85",
                        "88",
                        "90",
                        "92"
                    ],
                    ans: 2,
                    exp: "Jumlah nilai 30 siswa = 30 × 76 = 2.280. Jumlah nilai 28 siswa awal = 28 × 75 = 2.100. Jumlah nilai 2 siswa susulan = 2.280 - 2.100 = 180, sehingga rata-rata keduanya = 180 / 2 = 90."
                },
                {
                    q: "Simpangan rata-rata dari sekumpulan data: 4, 6, 8, 10, 12 adalah...",
                    opts: [
                        "2,0",
                        "2,4",
                        "2,8",
                        "3,0"
                    ],
                    ans: 1,
                    exp: "Rata-rata data x̄ = (4 + 6 + 8 + 10 + 12) / 5 = 8. Simpangan rata-rata SR = (|4 - 8| + |6 - 8| + |8 - 8| + |10 - 8| + |12 - 8|) / 5 = (4 + 2 + 0 + 2 + 4) / 5 = 12 / 5 = 2,4."
                },
                {
                    q: "Ragam (variansi) dari data: 3, 5, 7, 9, 11 adalah...",
                    opts: [
                        "4",
                        "6",
                        "8",
                        "10"
                    ],
                    ans: 2,
                    exp: "Rata-rata data x̄ = 7. Ragam σ² = [(-4)² + (-2)² + 0² + 2² + 4²] / 5 = (16 + 4 + 0 + 4 + 16) / 5 = 40 / 5 = 8."
                },
                {
                    q: "Rata-rata gaji 12 karyawan bagian produksi adalah Rp5.000.000 dan rata-rata gaji 8 karyawan bagian pemasaran adalah Rp6.000.000. Rata-rata gaji seluruh karyawan gabungan kedua bagian tersebut adalah...",
                    opts: [
                        "Rp5.300.000",
                        "Rp5.400.000",
                        "Rp5.500.000",
                        "Rp5.600.000"
                    ],
                    ans: 1,
                    exp: "Rata-rata gabungan = (12 × 5.000.000 + 8 × 6.000.000) / (12 + 8) = 108.000.000 / 20 = Rp5.400.000."
                },
                {
                    q: "Jangkauan antarkuartil (hamparan H = Q₃ - Q₁) dari data terurut: 3, 5, 6, 8, 9, 11, 14 adalah...",
                    opts: [
                        "5",
                        "6",
                        "8",
                        "11"
                    ],
                    ans: 1,
                    exp: "Dari 7 data terurut, median Q₂ adalah data ke-4 (8), kuartil bawah Q₁ adalah data ke-2 (5), dan kuartil atas Q₃ adalah data ke-6 (11). Maka H = Q₃ - Q₁ = 11 - 5 = 6."
                },
                {
                    q: "Lima bilangan bulat positif memiliki rata-rata 10 dan median 9. Nilai terbesar yang mungkin dari salah satu bilangan dalam data tersebut adalah...",
                    opts: [
                        "27",
                        "29",
                        "30",
                        "31"
                    ],
                    ans: 2,
                    exp: "Agar bilangan ke-5 maksimum, empat bilangan lainnya dibuat sekecil mungkin dengan tetap menjaga median = 9 dan bulat positif, yaitu: 1, 1, 9, 9, x₅. Karena jumlahnya = 5 × 10 = 50, maka 20 + x₅ = 50 -> x₅ = 30."
                },
                {
                    q: "Sekumpulan data memiliki simpangan baku 4 dan median 12. Jika setiap data dikurangi 3 kemudian dikalikan 2, maka simpangan baku dan median data yang baru berturut-turut adalah...",
                    opts: [
                        "5 dan 18",
                        "8 dan 18",
                        "8 dan 21",
                        "5 dan 21"
                    ],
                    ans: 1,
                    exp: "Simpangan baku (ukuran penyebaran) hanya berubah oleh perkalian: 4 × 2 = 8. Median (ukuran pemusatan) mengikuti kedua operasi: (12 - 3) × 2 = 18."
                }
            ]
        },
        {
            key: "pk_3_1",
            kategori: "Statistika, Peluang & Matriks",
            judul: "Peluang Kejadian, Kaidah Pencacahan, Permutasi & Kombinasi",
            ringkasan: `
                <p>Membedakan <strong>Permutasi</strong> dan <strong>Kombinasi</strong> serta menguasai peluang kejadian majemuk (saling lepas vs saling bebas) adalah kunci sub-materi ini.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus & Kapan Dipakai</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Permutasi P(n, r)</td>
                                <td class="p-2"><strong>n! / (n - r)!</strong> &rarr; Urutan/jabatan <strong>DIPERHATIKAN</strong> (Ketua-Sekretaris, PIN, posisi duduk). Permutasi melingkar = <strong>(n - 1)!</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Kombinasi C(n, r)</td>
                                <td class="p-2"><strong>n! / [r! (n - r)!]</strong> &rarr; Urutan <strong>TIDAK DIPERHATIKAN</strong> (tim cerdas cermat, jabat tangan, ambil bola sekaligus).</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Peluang Majemuk</td>
                                <td class="p-2">Saling lepas (ATAU): <strong>P(A &cup; B) = P(A) + P(B)</strong> | Saling bebas (DAN): <strong>P(A &cap; B) = P(A) &times; P(B)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Enam anggota keluarga duduk mengelilingi meja bundar. Berapa banyak susunan duduk jika Ayah dan Ibu harus selalu duduk berdampingan?",
                langkah: "Anggap (Ayah-Ibu) sebagai 1 kesatuan, sehingga ada 5 objek melingkar: (5 - 1)! = 4! = 24. Karena Ayah-Ibu bisa bertukar posisi (2! = 2), total = 24 × 2 = 48 cara."
            },
            gameQuestions: [
                {
                    q: "Dari 7 kandidat terbaik akan dipilih seorang Ketua, seorang Sekretaris, dan seorang Bendahara. Banyaknya susunan pengurus yang mungkin terbentuk adalah...",
                    opts: [
                        "35",
                        "105",
                        "210",
                        "343"
                    ],
                    ans: 2,
                    exp: "Karena jabatan berbeda (urutan diperhatikan), gunakan Permutasi P(7, 3) = 7 × 6 × 5 = 210 susunan."
                },
                {
                    q: "Sebuah kotak berisi 5 bola merah dan 3 bola biru. Jika diambil 2 bola sekaligus secara acak, peluang terambilnya 1 bola merah dan 1 bola biru adalah...",
                    opts: [
                        "15/56",
                        "15/28",
                        "5/14",
                        "3/8"
                    ],
                    ans: 1,
                    exp: "n(S) = C(8, 2) = (8 × 7)/2 = 28. Kejadian 1 merah dan 1 biru: n(A) = C(5, 1) × C(3, 1) = 5 × 3 = 15. Maka P(A) = 15/28."
                },
                {
                    q: "Peluang Andi lulus ujian mengemudi adalah 0,8 dan peluang Budi lulus ujian yang sama adalah 0,7. Jika kelulusan keduanya saling bebas, peluang HANYA SALAH SATU dari mereka yang lulus adalah...",
                    opts: [
                        "0,38",
                        "0,44",
                        "0,56",
                        "0,94"
                    ],
                    ans: 0,
                    exp: "P(Andi lulus & Budi gagal) + P(Andi gagal & Budi lulus) = (0,8 × 0,3) + (0,2 × 0,7) = 0,24 + 0,14 = 0,38."
                },
                {
                    q: "Banyaknya bilangan ganjil terdiri dari 3 angka berbeda yang dapat disusun dari angka-angka 1, 2, 3, 4, 5, dan 6 adalah...",
                    opts: [
                        "48",
                        "60",
                        "72",
                        "90"
                    ],
                    ans: 1,
                    exp: "Angka satuan harus ganjil {1, 3, 5} = 3 pilihan. Angka ratusan tersisa 5 pilihan (tidak boleh sama dengan satuan), dan puluhan tersisa 4 pilihan. Total = 5 × 4 × 3 = 60 bilangan."
                },
                {
                    q: "Dalam suatu rapat yang dihadiri oleh 10 orang, setiap peserta saling berjabat tangan tepat satu kali dengan peserta lainnya. Banyaknya jabat tangan yang terjadi seluruhnya adalah...",
                    opts: [
                        "36",
                        "45",
                        "55",
                        "90"
                    ],
                    ans: 1,
                    exp: "Setiap jabat tangan melibatkan 2 orang tanpa memperhatikan urutan: C(10, 2) = (10 × 9) / 2 = 45 jabat tangan."
                },
                {
                    q: "Dua buah dadu bersisi enam dilempar bersama-sama satu kali. Peluang munculnya jumlah mata kedua dadu sama dengan 8 atau 11 adalah...",
                    opts: [
                        "5/36",
                        "1/6",
                        "7/36",
                        "2/9"
                    ],
                    ans: 2,
                    exp: "Ruang sampel n(S) = 36. Jumlah 8: {(2,6),(3,5),(4,4),(5,3),(6,2)} ada 5 pasang. Jumlah 11: {(5,6),(6,5)} ada 2 pasang. Total peluang = (5 + 2) / 36 = 7/36."
                },
                {
                    q: "Banyaknya susunan huruf berbeda yang dapat dibentuk dengan mengacak seluruh huruf pada kata 'BANANA' adalah...",
                    opts: [
                        "30",
                        "60",
                        "120",
                        "180"
                    ],
                    ans: 1,
                    exp: "Kata 'BANANA' terdiri dari 6 huruf dengan unsur yang sama: 3 huruf A dan 2 huruf N. Banyak susunan = 6! / (3! × 2!) = 720 / (6 × 2) = 60 susunan."
                },
                {
                    q: "Lima orang sahabat (termasuk Dinda dan Rina) duduk berjajar pada satu baris kursi bioskop. Banyaknya cara mereka duduk jika Dinda dan Rina harus selalu duduk berdampingan adalah...",
                    opts: [
                        "24",
                        "48",
                        "60",
                        "120"
                    ],
                    ans: 1,
                    exp: "Anggap (Dinda-Rina) sebagai 1 kesatuan, sehingga ada 4 objek berjajar: 4! = 24 cara. Karena Dinda dan Rina dapat bertukar posisi (2! = 2), maka total = 24 × 2 = 48 cara."
                },
                {
                    q: "Sebuah tim olimpiade yang terdiri dari 4 siswa akan dipilih dari 5 siswa putra dan 3 siswa putri. Jika disyaratkan minimal terdapat 2 siswa putri di dalam tim, banyaknya cara memilih tim tersebut adalah...",
                    opts: [
                        "25",
                        "30",
                        "35",
                        "40"
                    ],
                    ans: 2,
                    exp: "Kasus 1 (2 putri & 2 putra): C(3,2) × C(5,2) = 3 × 10 = 30. Kasus 2 (3 putri & 1 putra): C(3,3) × C(5,1) = 1 × 5 = 5. Total = 30 + 5 = 35 cara."
                },
                {
                    q: "Tiga keping uang logam setimbang dilempar undi bersama-sama satu kali. Peluang munculnya PALING SEDIKIT dua sisi Angka (A) adalah...",
                    opts: [
                        "1/4",
                        "3/8",
                        "1/2",
                        "5/8"
                    ],
                    ans: 2,
                    exp: "n(S) = 2³ = 8. Kejadian minimal 2 Angka adalah {AAG, AGA, GAA, AAA} yaitu sebanyak 4 kejadian. Maka peluangnya = 4/8 = 1/2."
                }
            ]
        },
        {
            key: "pk_3_2",
            kategori: "Statistika, Peluang & Matriks",
            judul: "Barisan dan Deret Aritmatika & Geometri",
            ringkasan: `
                <p>Kuasai rumus suku ke-n (U<sub>n</sub>) dan jumlah n suku pertama (S<sub>n</sub>) untuk <strong>Barisan Aritmatika</strong> (beda b tetap) dan <strong>Barisan Geometri</strong> (rasio r tetap).</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Deret</th>
                                <th class="p-2 border border-slate-200 text-left">Suku ke-n (U<sub>n</sub>)</th>
                                <th class="p-2 border border-slate-200 text-left">Jumlah n Suku (S<sub>n</sub>)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Aritmatika (beda b)</td>
                                <td class="p-2"><strong>U<sub>n</sub> = a + (n - 1)b</strong><br>Trik: b = (U<sub>p</sub> - U<sub>q</sub>) / (p - q)</td>
                                <td class="p-2"><strong>S<sub>n</sub> = (n/2)(a + U<sub>n</sub>) = (n/2)(2a + (n-1)b)</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Geometri (rasio r)</td>
                                <td class="p-2"><strong>U<sub>n</sub> = a &middot; r<sup>n-1</sup></strong></td>
                                <td class="p-2"><strong>S<sub>n</sub> = a(r<sup>n</sup> - 1) / (r - 1)</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Geometri Tak Hingga</td>
                                <td class="p-2">Syarat konvergen: -1 &lt; r &lt; 1</td>
                                <td class="p-2"><strong>S<sub>&infin;</sub> = a / (1 - r)</strong> (Trik S<sub>&infin;</sub> = B / A)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Pada barisan aritmatika diketahui U₃ = 11 dan U₇ = 23. Berapakah nilai U₁₀?",
                langkah: "Cari beda b = (23 - 11) / (7 - 3) = 12 / 4 = 3. Maka U₁₀ = U₇ + 3b = 23 + 3(3) = 32."
            },
            gameQuestions: [
                {
                    q: "Suku ke-4 dan suku ke-9 suatu barisan aritmatika berturut-turut adalah 17 dan 37. Jumlah 10 suku pertama (S₁₀) deret tersebut adalah...",
                    opts: [
                        "215",
                        "230",
                        "245",
                        "260"
                    ],
                    ans: 1,
                    exp: "Beda b = (37 - 17)/(9 - 4) = 20/5 = 4. Suku pertama a = U₄ - 3b = 17 - 12 = 5. S₁₀ = (10/2)(2a + 9b) = 5 × (10 + 36) = 5 × 46 = 230."
                },
                {
                    q: "Pada suatu barisan geometri dengan rasio positif, diketahui U₂ = 6 dan U₄ = 54. Suku ke-6 (U₆) barisan tersebut adalah...",
                    opts: [
                        "162",
                        "324",
                        "486",
                        "972"
                    ],
                    ans: 2,
                    exp: "U₄ / U₂ = r² -> 54 / 6 = 9 -> r = 3 (karena r > 0). Maka U₆ = U₄ × r² = 54 × 9 = 486."
                },
                {
                    q: "Jumlah tak hingga dari deret geometri: 18 + 6 + 2 + 2/3 + ... adalah...",
                    opts: [
                        "24",
                        "26",
                        "27",
                        "36"
                    ],
                    ans: 2,
                    exp: "Suku pertama a = 18 dan rasio r = 6/18 = 1/3. Jumlah tak hingga S∞ = a / (1 - r) = 18 / (1 - 1/3) = 18 / (2/3) = 27."
                },
                {
                    q: "Tiga bilangan membentuk barisan aritmatika dengan jumlah ketiga bilangan adalah 24 dan hasil kalinya adalah 440. Selisih bilangan terbesar dan terkecil adalah...",
                    opts: [
                        "4",
                        "6",
                        "8",
                        "9"
                    ],
                    ans: 1,
                    exp: "Misalkan ketiga bilangan (a - b), a, (a + b). Jumlah = 3a = 24 -> a = 8. Hasil kali: (8 - b)(8)(8 + b) = 440 -> 64 - b² = 55 -> b = 3. Bilangannya 5, 8, 11; selisih terbesar dan terkecil = 11 - 5 = 6."
                },
                {
                    q: "Sebuah bola dijatuhkan vertikal dari ketinggian 12 meter. Setiap kali memantul di lantai, bola mencapai ketinggian 2/3 dari ketinggian sebelumnya. Panjang seluruh lintasan bola sampai berhenti adalah...",
                    opts: [
                        "36 meter",
                        "48 meter",
                        "60 meter",
                        "72 meter"
                    ],
                    ans: 2,
                    exp: "Gunakan rumus cepat lintasan bola memantul dengan rasio p/q: L = h₀ × (q + p) / (q - p) = 12 × (3 + 2) / (3 - 2) = 12 × 5 = 60 meter."
                },
                {
                    q: "Jumlah semua bilangan asli antara 10 dan 100 yang habis dibagi 4 adalah...",
                    opts: [
                        "1.080",
                        "1.134",
                        "1.188",
                        "1.242"
                    ],
                    ans: 2,
                    exp: "Barisan aritmatika dengan a = 12, b = 4, dan U_n = 96. Banyaknya suku n = ((96 - 12)/4) + 1 = 22. Maka S₂₂ = (22/2)(12 + 96) = 11 × 108 = 1.188."
                },
                {
                    q: "Jika tiga bilangan positif (x - 1), (x + 2), dan (2x + 4) membentuk barisan geometri, maka suku ke-4 dari barisan tersebut adalah...",
                    opts: [
                        "18",
                        "24",
                        "32",
                        "36"
                    ],
                    ans: 1,
                    exp: "Syarat barisan geometri: (x + 2)² = (x - 1)(2x + 4) -> x² + 4x + 4 = 2x² + 2x - 4 -> x² - 2x - 8 = 0 -> x = 4. Ketiga suku pertama adalah 3, 6, 12 (rasio r = 2), sehingga suku ke-4 adalah 12 × 2 = 24."
                },
                {
                    q: "Diketahui rumus jumlah n suku pertama suatu deret aritmatika adalah S_n = 2n² + 3n. Suku ke-8 (U₈) dari barisan tersebut adalah...",
                    opts: [
                        "29",
                        "31",
                        "33",
                        "35"
                    ],
                    ans: 2,
                    exp: "Gunakan hubungan U₈ = S₈ - S₇ = [2(8²) + 3(8)] - [2(7²) + 3(7)] = (128 + 24) - (98 + 21) = 152 - 119 = 33."
                },
                {
                    q: "Suatu koloni bakteri membelah diri menjadi 2 setiap 20 menit. Jika pada awalnya terdapat 50 bakteri, maka banyaknya bakteri setelah 2 jam adalah...",
                    opts: [
                        "1.600",
                        "2.400",
                        "3.200",
                        "6.400"
                    ],
                    ans: 2,
                    exp: "Selama 2 jam (120 menit), bakteri membelah sebanyak n = 120 / 20 = 6 kali. Banyak bakteri akhir = 50 × 2⁶ = 50 × 64 = 3.200."
                },
                {
                    q: "Suatu deret geometri tak hingga yang konvergen memiliki jumlah 36. Jika suku pertamanya adalah 24, maka rasio (r) deret tersebut adalah...",
                    opts: [
                        "1/4",
                        "1/3",
                        "1/2",
                        "2/3"
                    ],
                    ans: 1,
                    exp: "S∞ = a / (1 - r) -> 36 = 24 / (1 - r) -> 1 - r = 24 / 36 = 2/3 -> r = 1 - 2/3 = 1/3."
                }
            ]
        },
        {
            key: "pk_3_3",
            kategori: "Statistika, Peluang & Matriks",
            judul: "Matriks dan Transformasi Geometri Dasar",
            ringkasan: `
                <p>Fokus soal <strong>Matriks 2&times;2</strong> di PK adalah kesamaan matriks, perkalian matriks, <strong>determinan (det A = ad - bc)</strong>, <strong>matriks singular (det = 0)</strong>, dan <strong>invers matriks</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Determinan Matriks 2&times;2 [a b ; c d]</td>
                                <td class="p-2"><strong>det(A) = |A| = ad - bc</strong> &nbsp;(Matriks singular / tak punya invers &hArr; <strong>ad - bc = 0</strong>)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Sifat Determinan</td>
                                <td class="p-2">det(A &middot; B) = det(A) &times; det(B) &nbsp;|&nbsp; det(A<sup>-1</sup>) = 1 / det(A)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Transformasi Titik (x, y)</td>
                                <td class="p-2">Translasi T(a, b) &rarr; (x+a, y+b) | Refleksi sumbu-X &rarr; (x, -y) | Refleksi garis y = x &rarr; (y, x)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Jika matriks A = [[x, 4], [3, x + 1]] adalah matriks singular (tidak memiliki invers), tentukan nilai x (untuk x > 0)!",
                langkah: "Syarat matriks singular adalah det(A) = 0 -> x(x + 1) - (4)(3) = 0 -> x² + x - 12 = 0 -> (x + 4)(x - 3) = 0. Untuk x > 0, nilai x = 3."
            },
            gameQuestions: [
                {
                    q: "Diketahui matriks A = [[2, 1], [4, 3]] dan matriks B = [[5, 2], [3, 2]]. Nilai determinan dari matriks hasil kali (A · B) adalah...",
                    opts: [
                        "4",
                        "6",
                        "8",
                        "12"
                    ],
                    ans: 2,
                    exp: "Gunakan sifat determinan: det(A · B) = det(A) × det(B). Karena det(A) = (2)(3) - (1)(4) = 2 dan det(B) = (5)(2) - (2)(3) = 4, maka det(A · B) = 2 × 4 = 8."
                },
                {
                    q: "Matriks P = [[k - 1, 6], [2, k + 3]] tidak memiliki invers (singular). Nilai k yang memenuhi (untuk k > 0) adalah...",
                    opts: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    ans: 1,
                    exp: "Syarat singular adalah det(P) = 0 -> (k - 1)(k + 3) - 12 = 0 -> k² + 2k - 3 - 12 = 0 -> k² + 2k - 15 = 0 -> (k + 5)(k - 3) = 0. Untuk k > 0 diperoleh k = 3."
                },
                {
                    q: "Titik A(4, -2) ditranslasikan oleh T(-1, 5) kemudian dicerminkan terhadap garis y = x. Koordinat bayangan akhir titik A adalah...",
                    opts: [
                        "(3, 3)",
                        "(-3, 3)",
                        "(3, -3)",
                        "(5, 3)"
                    ],
                    ans: 0,
                    exp: "Hasil translasi: A'(4 + (-1), -2 + 5) = A'(3, 3). Dicerminkan terhadap garis y = x (tukar posisi x dan y): A''(3, 3)."
                },
                {
                    q: "Diketahui kesamaan matriks [[2x, y - 1], [3, x + 2y]] = [[6, 3], [3, z]]. Nilai dari x + y + z adalah...",
                    opts: [
                        "14",
                        "16",
                        "18",
                        "20"
                    ],
                    ans: 2,
                    exp: "Samakan elemen seletak: 2x = 6 -> x = 3; y - 1 = 3 -> y = 4; dan z = x + 2y = 3 + 2(4) = 11. Maka x + y + z = 3 + 4 + 11 = 18."
                },
                {
                    q: "Invers dari matriks M = [[5, 3], [3, 2]] adalah...",
                    opts: [
                        "[[2, -3], [-3, 5]]",
                        "[[-2, 3], [3, -5]]",
                        "[[5, -3], [-3, 2]]",
                        "[[2, 3], [3, 5]]"
                    ],
                    ans: 0,
                    exp: "det(M) = (5)(2) - (3)(3) = 10 - 9 = 1. Maka M⁻¹ = (1/1) × [[2, -3], [-3, 5]] = [[2, -3], [-3, 5]]."
                },
                {
                    q: "Diketahui matriks A = [[3, -1], [2, 4]] dan matriks identitas I = [[1, 0], [0, 1]]. Determinan dari matriks (A - 2I) adalah...",
                    opts: [
                        "0",
                        "2",
                        "4",
                        "6"
                    ],
                    ans: 2,
                    exp: "A - 2I = [[3 - 2, -1], [2, 4 - 2]] = [[1, -1], [2, 2]]. Determinannya = (1)(2) - (-1)(2) = 2 + 2 = 4."
                },
                {
                    q: "Jika matriks C berordo 2×2 memenuhi persamaan [[2, 1], [5, 3]] · C = [[4, 2], [11, 7]], maka determinan dari matriks C adalah...",
                    opts: [
                        "4",
                        "5",
                        "6",
                        "8"
                    ],
                    ans: 2,
                    exp: "Gunakan sifat det(A) × det(C) = det(B). Karena det(A) = 2(3) - 1(5) = 1 dan det(B) = 4(7) - 2(11) = 6, maka 1 × det(C) = 6 -> det(C) = 6."
                },
                {
                    q: "Titik P(-3, 5) diputar 90° berlawanan arah jarum jam terhadap titik pusat O(0, 0), kemudian didilatasikan dengan pusat O(0, 0) dan faktor skala k = 2. Koordinat bayangan akhir titik P adalah...",
                    opts: [
                        "(-10, -6)",
                        "(-10, 6)",
                        "(10, -6)",
                        "(-6, -10)"
                    ],
                    ans: 0,
                    exp: "Rotasi +90° terhadap O(0, 0) mengubah (x, y) menjadi (-y, x), sehingga P(-3, 5) menjadi P'(-5, -3). Dilatasi skala 2 menghasilkan P''(2(-5), 2(-3)) = (-10, -6)."
                },
                {
                    q: "Persamaan bayangan garis y = 2x - 3 jika ditranslasikan oleh T(2, 1) adalah...",
                    opts: [
                        "y = 2x - 6",
                        "y = 2x - 4",
                        "y = 2x + 2",
                        "y = 2x - 8"
                    ],
                    ans: 0,
                    exp: "Translasi T(2, 1) memberi x = x' - 2 dan y = y' - 1. Substitusikan ke persamaan garis: (y' - 1) = 2(x' - 2) - 3 -> y' - 1 = 2x' - 7 -> y = 2x - 6."
                },
                {
                    q: "Sebuah daerah segitiga dengan luas 15 cm² ditransformasikan oleh matriks T = [[3, 1], [2, 2]]. Luas bayangan daerah segitiga tersebut adalah...",
                    opts: [
                        "30 cm²",
                        "45 cm²",
                        "60 cm²",
                        "75 cm²"
                    ],
                    ans: 2,
                    exp: "Luas bayangan = |det(T)| × Luas awal. Karena det(T) = (3)(2) - (1)(2) = 4, maka Luas bayangan = 4 × 15 = 60 cm²."
                }
            ]
        },
        {
            key: "pk_3_4",
            kategori: "Statistika, Peluang & Matriks",
            judul: "Limit dan Turunan Fungsi Aljabar Dasar",
            ringkasan: `
                <p><strong>Limit fungsi aljabar</strong> bentuk tak tentu (0/0) dapat diselesaikan cepat dengan pemfaktoran atau <strong>Aturan L'Hôpital (turunan pembilang dibagi turunan penyebut)</strong>, sedangkan <strong>Turunan pertama f'(x)</strong> menentukan gradien garis singgung dan nilai maksimum/minimum.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep Kalkulus Dasar</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Turunan Pangkat</td>
                                <td class="p-2">Jika f(x) = a &middot; x<sup>n</sup> &rArr; <strong>f'(x) = n &middot; a &middot; x<sup>n-1</sup></strong> (turunan konstanta = 0)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Limit 0/0 (L'Hôpital)</td>
                                <td class="p-2">lim<sub>x&rarr;c</sub> [f(x) / g(x)] = <strong>f'(c) / g'(c)</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Gradien & Stasioner</td>
                                <td class="p-2">Gradien singgung di x = a adalah <strong>m = f'(a)</strong> | Titik balik maksimum/minimum terjadi saat <strong>f'(x) = 0</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Hitung nilai dari lim (x→3) (x² - 9) / (x - 3)!",
                langkah: "Gunakan L'Hôpital (turunkan atas dan bawah): lim (x→3) (2x) / 1 = 2(3) / 1 = 6."
            },
            gameQuestions: [
                {
                    q: "Nilai dari lim (x → 2) (x² + 3x - 10) / (x - 2) adalah...",
                    opts: [
                        "3",
                        "5",
                        "7",
                        "9"
                    ],
                    ans: 2,
                    exp: "Gunakan pemfaktoran (x + 5)(x - 2)/(x - 2) = x + 5 -> 2 + 5 = 7, atau gunakan L'Hôpital: (2x + 3)/1 untuk x = 2 menghasilkan 2(2) + 3 = 7."
                },
                {
                    q: "Gradien garis singgung kurva y = x³ - 4x² + 5x - 1 di titik dengan absis x = 2 adalah...",
                    opts: [
                        "-1",
                        "1",
                        "3",
                        "5"
                    ],
                    ans: 1,
                    exp: "Gradien garis singgung m = y' = 3x² - 8x + 5. Untuk x = 2, diperoleh m = 3(2²) - 8(2) + 5 = 12 - 16 + 5 = 1."
                },
                {
                    q: "Fungsi f(x) = -x² + 6x + 7 mencapai nilai maksimum pada saat nilai f(x) sama dengan...",
                    opts: [
                        "3",
                        "12",
                        "16",
                        "18"
                    ],
                    ans: 2,
                    exp: "Syarat stasioner maksimum: f'(x) = 0 -> -2x + 6 = 0 -> x = 3. Substitusikan x = 3 ke f(x): f(3) = -(3²) + 6(3) + 7 = -9 + 18 + 7 = 16."
                },
                {
                    q: "Nilai dari lim (x → 4) (x - 4) / (√x - 2) adalah...",
                    opts: [
                        "0",
                        "2",
                        "4",
                        "8"
                    ],
                    ans: 2,
                    exp: "Faktorkan (x - 4) menjadi (√x + 2)(√x - 2). Setelah (√x - 2) dicoret, diperoleh lim (x → 4) (√x + 2) = √4 + 2 = 4."
                },
                {
                    q: "Nilai dari lim (x → ∞) (6x³ - 4x² + 5) / (2x³ + 3x - 1) adalah...",
                    opts: [
                        "0",
                        "2",
                        "3",
                        "6"
                    ],
                    ans: 2,
                    exp: "Karena pangkat tertinggi pembilang dan penyebut sama (yaitu x³), nilai limit tak hingganya adalah rasio koefisien pangkat tertinggi: 6 / 2 = 3."
                },
                {
                    q: "Persamaan garis singgung pada kurva y = x² - 3x + 4 di titik yang berabsis x = 3 adalah...",
                    opts: [
                        "y = 3x - 5",
                        "y = 3x + 5",
                        "y = 3x - 9",
                        "y = 2x - 2"
                    ],
                    ans: 0,
                    exp: "Saat x = 3, y = 3² - 3(3) + 4 = 4 -> titik (3, 4). Gradien m = y' = 2x - 3 -> m = 2(3) - 3 = 3. Persamaan garis singgung: y - 4 = 3(x - 3) -> y = 3x - 5."
                },
                {
                    q: "Fungsi f(x) = x³ - 6x² + 9x + 2 merupakan fungsi turun pada interval...",
                    opts: [
                        "x < 1 atau x > 3",
                        "1 < x < 3",
                        "-3 < x < -1",
                        "x < -3 atau x > -1"
                    ],
                    ans: 1,
                    exp: "Syarat fungsi turun adalah f'(x) < 0: 3x² - 12x + 9 < 0 -> x² - 4x + 3 < 0 -> (x - 1)(x - 3) < 0 -> 1 < x < 3."
                },
                {
                    q: "Sebuah partikel bergerak sepanjang garis lurus dengan persamaan posisi s(t) = t³ - 6t² + 15t + 4 (s dalam meter, t dalam detik). Kecepatan partikel pada saat percepatannya sama dengan nol adalah...",
                    opts: [
                        "0 m/s",
                        "3 m/s",
                        "6 m/s",
                        "9 m/s"
                    ],
                    ans: 1,
                    exp: "Kecepatan v(t) = s'(t) = 3t² - 12t + 15, dan percepatan a(t) = v'(t) = 6t - 12. Saat a(t) = 0 diperoleh t = 2 detik. Maka v(2) = 3(2²) - 12(2) + 15 = 12 - 24 + 15 = 3 m/s."
                },
                {
                    q: "Kawat sepanjang 40 meter akan digunakan seluruhnya untuk memagari sebuah kebun berbentuk persegi panjang. Luas maksimum kebun yang dapat dipagari adalah...",
                    opts: [
                        "80 m²",
                        "96 m²",
                        "100 m²",
                        "120 m²"
                    ],
                    ans: 2,
                    exp: "Keliling 2(p + l) = 40 -> p + l = 20 -> l = 20 - p. Luas L(p) = 20p - p². Maksimum saat L'(p) = 20 - 2p = 0 -> p = 10 m dan l = 10 m. Luas maksimum = 10 × 10 = 100 m²."
                },
                {
                    q: "Jika f(x) = (2x + 1)(x - 3), maka nilai dari turunan pertama f'(2) adalah...",
                    opts: [
                        "1",
                        "3",
                        "5",
                        "7"
                    ],
                    ans: 1,
                    exp: "Jabarkan fungsi terlebih dahulu: f(x) = 2x² - 5x - 3. Turunan pertamanya adalah f'(x) = 4x - 5. Untuk x = 2 diperoleh f'(2) = 4(2) - 5 = 3."
                }
            ]
        }
    ]
};
