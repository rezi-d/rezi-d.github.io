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
                }
            ]
        }
    ]
};
