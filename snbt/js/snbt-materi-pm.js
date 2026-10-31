// =========================================================================
// DATA MATERI & MINI-GAME SNBT 2026 — SUBTES 7: PENALARAN MATEMATIKA (PM)
// Total: 9 Sub-Materi × 3 Soal Game = 27 Soal Khusus Mini-Game
// Hadiah Maksimal per Sub-Materi: Rp 400 (Skor 3/3)
// =========================================================================

window.SNBT_MATERI_REGISTRY = window.SNBT_MATERI_REGISTRY || {};

window.SNBT_MATERI_REGISTRY["pm"] = {
    id: "pm",
    nama: "Penalaran Matematika (PM)",
    icon: "📊",
    color: "emerald",
    rewardPerSub: 400,
    submateri: [
        {
            key: "pm_0_0",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Representasi Matematika Kontekstual (Soal Cerita Kompleks)",
            ringkasan: `
                <p><strong>Representasi matematika kontekstual</strong> menerjemahkan masalah kehidupan nyata (tarif progresif taksi/listrik, kapasitas produksi mesin, jadwal pertemuan, atau pengisian tangki) ke dalam model fungsi atau persamaan aljabar.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Tipe Masalah Nyata</th>
                                <th class="p-2 border border-slate-200 text-left">Model Matematika Cepat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Tarif / Biaya Progresif</td>
                                <td class="p-2"><strong>Total Biaya = Biaya Tetap (Buka Pintu/Abodemen) + (Tarif per Unit &times; Jumlah Unit Tambahan)</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Laju Kerja Gabungan (2 Mesin/Pipa)</td>
                                <td class="p-2">Jika A selesai dalam t<sub>1</sub> dan B selesai dalam t<sub>2</sub> &rArr; <strong>t<sub>gabungan</sub> = (t<sub>1</sub> &times; t<sub>2</sub>) / (t<sub>1</sub> + t<sub>2</sub>)</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Susul-Menyusul & Berpapasan</td>
                                <td class="p-2">Berpapasan: <strong>t = Jarak / (v<sub>1</sub> + v<sub>2</sub>)</strong> &nbsp;|&nbsp; Menyusul: <strong>t = Selisih Jarak Awal / (v<sub>2</sub> - v<sub>1</sub>)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Sebuah layanan taksi daring menetapkan tarif buka pintu Rp10.000,00 untuk 2 km pertama, dan Rp4.500,00 untuk setiap km berikutnya. Jika penumpang membayar Rp55.000,00, berapa total jarak yang ditempuh?",
                langkah: "Misalkan total jarak = x km (x > 2). Maka: 10.000 + 4.500(x - 2) = 55.000 -> 4.500(x - 2) = 45.000 -> x - 2 = 10 -> x = 12 km."
            },
            gameQuestions: [
                {
                    q: "Sebuah gedung perkantoran menerapkan tarif parkir mobil sebesar Rp5.000,00 untuk 1 jam pertama dan Rp3.000,00 untuk setiap jam berikutnya (pembulatan ke atas). Jika seorang pengunjung membayar parkir sebesar Rp23.000,00, maka lama maksimum mobil tersebut diparkir adalah...",
                    opts: [
                        "5 jam",
                        "6 jam",
                        "7 jam",
                        "8 jam"
                    ],
                    ans: 2,
                    exp: "Model biaya: 5.000 + 3.000(t - 1) = 23.000 -> 3.000(t - 1) = 18.000 -> t - 1 = 6 -> t = 7 jam."
                },
                {
                    q: "Pompa A dapat mengisi penuh sebuah tandon air kosong dalam waktu 6 jam, sedangkan pompa B dapat mengisi penuh tandon yang sama dalam waktu 12 jam. Jika kedua pompa dinyalakan bersama-sama saat tandon kosong, waktu yang dibutuhkan hingga tandon terisi penuh adalah...",
                    opts: [
                        "3 jam",
                        "4 jam",
                        "4,5 jam",
                        "9 jam"
                    ],
                    ans: 1,
                    exp: "Gunakan rumus laju gabungan: t = (t_A × t_B) / (t_A + t_B) = (6 × 12) / (6 + 12) = 72 / 18 = 4 jam."
                },
                {
                    q: "Kota P dan Kota Q berjarak 210 km. Bus pertama berangkat dari Kota P menuju Kota Q pukul 07.00 dengan kecepatan rata-rata 60 km/jam. Pada waktu yang sama (pukul 07.00), bus kedua berangkat dari Kota Q menuju Kota P dengan kecepatan rata-rata 80 km/jam. Kedua bus akan berpapasan pada pukul...",
                    opts: [
                        "08.15",
                        "08.30",
                        "08.45",
                        "09.00"
                    ],
                    ans: 1,
                    exp: "Waktu berpapasan t = Jarak / (v₁ + v₂) = 210 / (60 + 80) = 210 / 140 = 1,5 jam (1 jam 30 menit). Berangkat pukul 07.00 + 01.30 = pukul 08.30."
                }
            ]
        },
        {
            key: "pm_0_1",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Sistem Persamaan Linier Dua / Tiga Variabel (SPLDV/SPLTV)",
            ringkasan: `
                <p>Soal <strong>SPLDV dan SPLTV kontekstual</strong> di Penalaran Matematika sering menguji kecerdikan <strong>menjumlahkan/mengurangkan persamaan secara langsung</strong> tanpa harus mencari nilai masing-masing variabel satu per satu.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Trik Kombinasi Linier Langsung (Hemat 80% Waktu!):</div>
                    <p>Sebelum melakukan eliminasi panjang untuk mencari harga x, y, dan z satu per satu, perhatikan <strong>apa yang ditanyakan soal</strong>! Jika diketahui <em>2x + 3y = 40.000</em> dan <em>3x + 2y = 35.000</em> lalu ditanya harga <em>x + y</em>, cukup <strong>jumlahkan kedua persamaan</strong>: <em>5x + 5y = 75.000 &rArr; x + y = 15.000</em>!</p>
                </div>
            `,
            contoh: {
                soal: "Di kantin kampus, 3 porsi nasi goreng dan 2 gelas jus jeruk berharga Rp69.000,00. Sedangkan 2 porsi nasi goreng dan 3 gelas jus jeruk berharga Rp61.000,00. Berapakah harga 1 porsi nasi goreng dan 1 gelas jus jeruk?",
                langkah: "Jumlahkan langsung kedua persamaan: (3N + 2J) + (2N + 3J) = 69.000 + 61.000 -> 5N + 5J = 130.000 -> bagi 5 -> N + J = Rp26.000,00."
            },
            gameQuestions: [
                {
                    q: "Di sebuah koperasi mahasiswa, harga 4 buku tulis dan 3 pena adalah Rp47.000,00, sedangkan harga 2 buku tulis dan 3 pena yang sama adalah Rp31.000,00. Jika Rina membeli 1 buku tulis dan 1 pena, berapakah uang yang harus ia bayar?",
                    opts: [
                        "Rp12.000,00",
                        "Rp13.000,00",
                        "Rp14.000,00",
                        "Rp15.000,00"
                    ],
                    ans: 1,
                    exp: "Kurangkan persamaan pertama dengan kedua: (4B + 3P) - (2B + 3P) = 47.000 - 31.000 -> 2B = 16.000 -> B = 8.000. Substitusi ke persamaan kedua: 2(8.000) + 3P = 31.000 -> 3P = 15.000 -> P = 5.000. Maka B + P = 8.000 + 5.000 = Rp13.000,00."
                },
                {
                    q: "Sebuah toko buah menjual paket parsel dengan komposisi berikut:\n• Paket I (2 kg apel, 1 kg jeruk, 1 kg anggur) = Rp115.000,00\n• Paket II (1 kg apel, 2 kg jeruk, 1 kg anggur) = Rp105.000,00\n• Paket III (1 kg apel, 1 kg jeruk, 2 kg anggur) = Rp140.000,00\nBerapakah harga total jika seorang pembeli membeli 1 kg apel, 1 kg jeruk, dan 1 kg anggur?",
                    opts: [
                        "Rp85.000,00",
                        "Rp90.000,00",
                        "Rp95.000,00",
                        "Rp100.000,00"
                    ],
                    ans: 1,
                    exp: "Jumlahkan ketiga persamaan: (2A+J+G) + (A+2J+G) + (A+J+2G) = 115.000 + 105.000 + 140.000 -> 4A + 4J + 4G = 360.000. Bagi kedua ruas dengan 4: A + J + G = Rp90.000,00."
                },
                {
                    q: "Tempat parkir sebuah stasiun menampung total 80 kendaraan yang terdiri atas sepeda motor (roda 2) dan mobil pribadi (roda 4). Jika jumlah seluruh roda kendaraan yang terparkir adalah 220 roda, maka selisih banyaknya sepeda motor dan mobil di tempat parkir tersebut adalah...",
                    opts: [
                        "15 kendaraan",
                        "20 kendaraan",
                        "25 kendaraan",
                        "30 kendaraan"
                    ],
                    ans: 1,
                    exp: "Misalkan motor = m dan mobil = b. Maka m + b = 80 dan 2m + 4b = 220 (bagi 2: m + 2b = 110). Eliminasi keduanya: b = 110 - 80 = 30 mobil, dan m = 80 - 30 = 50 motor. Selisihnya = 50 - 30 = 20 kendaraan."
                }
            ]
        },
        {
            key: "pm_0_2",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Persamaan Logika Algoritma & Model Flowchart",
            ringkasan: `
                <p><strong>Logika algoritma & <em>flowchart</em> (diagram alir)</strong> menuntut ketelitian menelusuri perubahan nilai variabel langkah demi langkah (<em>trace table</em>), termasuk percabangan bersyarat (<em>if-else</em>) dan perulangan (<em>looping</em>).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Aturan Menelusuri Algoritma / Flowchart:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Buat Tabel Baris Variabel:</strong> Tulis nilai awal setiap variabel (misal: <code>x = 4, y = 1</code>).</li>
                        <li><strong>Timpa Nilai Lama:</strong> Perintah <code>x &larr; x + 3</code> artinya nilai <code>x</code> yang baru adalah nilai <code>x</code> sebelumnya ditambah 3.</li>
                        <li><strong>Cek Syarat Belah Ketupat (Keputusan):</strong> Perhatikan tanda ketaksamaan dengan teliti (apakah <code>x &lt; 10</code> atau <code>x &le; 10</code>, apakah <code>x habis dibagi 2</code>).</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Diberikan algoritma: (1) Masukkan nilai n = 7. (2) Jika n ganjil, ubah n ← 3n + 1; jika n genap, ubah n ← n / 2. (3) Ulangi langkah (2) sebanyak satu kali lagi. Berapakah nilai akhir n?",
                langkah: "Awal: n = 7 (ganjil). Langkah pertama: n ← 3(7) + 1 = 22. Ulangi sekali lagi untuk n = 22 (genap): n ← 22 / 2 = 11. Nilai akhir n adalah 11."
            },
            gameQuestions: [
                {
                    q: "Perhatikan urutan langkah algoritma berikut:\n1. Mulai dengan input bilangan bulat (x, y) = (3, 5).\n2. Hitung x ← 2x + y.\n3. Apakah x > 12? Jika YA, hitung y ← x - 4; jika TIDAK, hitung y ← x + 4.\n4. Keluarkan nilai (x + y).\nBerapakah output akhir dari algoritma tersebut?",
                    opts: [
                        "18",
                        "22",
                        "26",
                        "30"
                    ],
                    ans: 2,
                    exp: "Langkah 1: x = 3, y = 5. Langkah 2: x ← 2(3) + 5 = 11. Langkah 3: Apakah 11 > 12? TIDAK, maka y ← 11 + 4 = 15. Langkah 4: Output (x + y) = 11 + 15 = 26."
                },
                {
                    q: "Sebuah mesin otomatis memproses bilangan bulat positif N dengan aturan perulangan:\n• Selama N > 5, kurangi N dengan 4 (N ← N - 4) dan tambahkan penghitung langkah k dengan 1 (k ← k + 1).\nJika nilai awal adalah N = 23 dan k = 0, maka saat mesin berhenti bekerja, nilai akhir pasangan (N, k) adalah...",
                    opts: [
                        "(3, 4)",
                        "(3, 5)",
                        "(5, 4)",
                        "(1, 5)"
                    ],
                    ans: 1,
                    exp: "Telusuri dari (N=23, k=0) -> (19, 1) -> (15, 2) -> (11, 3) -> (7, 4) -> karena 7 > 5, lanjut sekali lagi -> (3, 5). Sekarang N = 3 (tidak lebih dari 5), mesin berhenti pada (3, 5)."
                },
                {
                    q: "Suatu fungsi rekursif didefinisikan dengan f(1) = 2 dan f(n) = 2·f(n - 1) + 1 untuk setiap n ≥ 2. Nilai dari f(4) adalah...",
                    opts: [
                        "15",
                        "23",
                        "31",
                        "47"
                    ],
                    ans: 1,
                    exp: "Hitung bertahap: f(1) = 2; f(2) = 2(2) + 1 = 5; f(3) = 2(5) + 1 = 11; f(4) = 2(11) + 1 = 23."
                }
            ]
        },
        {
            key: "pm_0_3",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Rasio, Skala, dan Masalah Perbandingan Berbalik Nilai",
            ringkasan: `
                <p>Dalam masalah <strong>perbandingan proyek konstruksi</strong>, <strong>pakan ternak</strong>, dan <strong>skala peta/denah</strong>, perhatikan apakah besaran berbanding lurus atau berbanding terbalik.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Kasus Kontekstual</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Praktis UTBK</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Beban Kerja (Orang &times; Hari)</td>
                                <td class="p-2"><strong>P<sub>1</sub> &times; H<sub>1</sub> = P<sub>2</sub> &times; H<sub>2</sub></strong> (Makin banyak pekerja, hari makin sedikit)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Proyek Terhenti di Tengah Jalan</td>
                                <td class="p-2"><strong>Tambahan Pekerja = (Pekerja Awal &times; Lama Terhenti) / Sisa Hari Tersedia</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Skala Luas pada Peta (1 : k)</td>
                                <td class="p-2">Jarak Sebenarnya = k &times; Jarak Peta &nbsp;|&nbsp; <strong>Luas Sebenarnya = k<sup>2</sup> &times; Luas pada Peta</strong> (Kuadratkan skalanya!)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Proyek jembatan direncanakan selesai dalam 40 hari oleh 18 pekerja. Setelah dikerjakan 15 hari, proyek terhenti 7 hari karena cuaca buruk. Berapa pekerja tambahan yang dibutuhkan agar selesai tepat waktu?",
                langkah: "Sisa hari efektif = 40 - 15 - 7 = 18 hari. Gunakan rumus cepat: Tambahan Pekerja = (Pekerja Awal × Lama Terhenti) / Sisa Hari = (18 × 7) / 18 = 7 orang."
            },
            gameQuestions: [
                {
                    q: "Renovasi sebuah gedung sekolah ditargetkan selesai dalam 50 hari oleh 24 pekerja. Setelah bekerja selama 20 hari, pekerjaan terpaksa dihentikan selama 6 hari karena kendala pasokan material. Agar renovasi tetap selesai tepat waktu, banyaknya pekerja tambahan yang harus direkrut adalah...",
                    opts: [
                        "4 orang",
                        "6 orang",
                        "8 orang",
                        "10 orang"
                    ],
                    ans: 1,
                    exp: "Sisa hari yang tersedia = 50 - 20 - 6 = 24 hari. Tambahan pekerja = (Pekerja Awal × Hari Libur) / Sisa Hari = (24 × 6) / 24 = 6 orang."
                },
                {
                    q: "Pada sebuah denah berskala 1 : 200, sebidang lahan kebun digambar berbentuk persegi panjang dengan ukuran 15 cm × 8 cm. Luas sebenarnya dari lahan kebun tersebut adalah...",
                    opts: [
                        "240 m²",
                        "360 m²",
                        "480 m²",
                        "960 m²"
                    ],
                    ans: 2,
                    exp: "Panjang sebenarnya = 15 cm × 200 = 3.000 cm = 30 m. Lebar sebenarnya = 8 cm × 200 = 1.600 cm = 16 m. Luas sebenarnya = 30 m × 16 m = 480 m²."
                },
                {
                    q: "Sebuah peternakan memiliki persediaan pakan yang cukup untuk 60 ekor sapi selama 15 hari. Jika peternak membeli lagi 30 ekor sapi tambahan, maka persediaan pakan tersebut akan habis dalam waktu...",
                    opts: [
                        "8 hari",
                        "10 hari",
                        "12 hari",
                        "13 hari"
                    ],
                    ans: 1,
                    exp: "Jumlah sapi sekarang = 60 + 30 = 90 ekor. Perbandingan berbalik nilai: 60 × 15 = 90 × t -> t = 900 / 90 = 10 hari."
                }
            ]
        },
        {
            key: "pm_0_4",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Kesebangunan dan Geometri Lapangan Nyata",
            ringkasan: `
                <p><strong>Kesebangunan segitiga</strong> sangat sering diaplikasikan pada pengukuran tinggi gedung/pohon menggunakan bayangan matahari, lebar sungai, atau bingkai foto.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Tiga Model Kesebangunan Lapangan di PM:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Perbandingan Bayangan:</strong> Tinggi Pohon / Tinggi Tongkat = Bayangan Pohon / Bayangan Tongkat.</li>
                        <li><strong>Segitiga Bertumpuk (Garis Sejajar DE // BC):</strong> AD / AB = AE / AC = DE / BC.</li>
                        <li><strong>Trapesium Sekat Sejajar (Rumus Ikan):</strong> Jika sisi sejajar atas <em>a</em> dan bawah <em>b</em> dibagi dengan rasio samping <em>m : n</em>, maka panjang garis tengah <strong>EF = (m&middot;b + n&middot;a) / (m + n)</strong>.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Pada pukul 10.00 pagi, sebatang tiang setinggi 2 meter membentuk bayangan sepanjang 1,5 meter di tanah. Pada saat yang sama, sebuah menara pemancar membentuk bayangan sepanjang 18 meter. Berapakah tinggi menara tersebut?",
                langkah: "Tinggi Menara / 2 = 18 / 1,5 -> Tinggi Menara = 2 × 12 = 24 meter."
            },
            gameQuestions: [
                {
                    q: "Seorang siswa dengan tinggi badan 160 cm berdiri pada jarak 3 meter dari tiang lampu jalan. Jika panjang bayangan siswa di tanah akibat cahaya lampu tersebut adalah 2 meter, maka tinggi tiang lampu jalan itu adalah...",
                    opts: [
                        "3,2 meter",
                        "3,6 meter",
                        "4,0 meter",
                        "4,8 meter"
                    ],
                    ans: 2,
                    exp: "Segitiga kecil (siswa + bayangan = 2 m) sebangun dengan segitiga besar (tiang lampu + jarak total ke ujung bayangan = 3 + 2 = 5 m). Maka: Tinggi Lampu / 1,6 m = 5 / 2 -> Tinggi Lampu = 1,6 × 2,5 = 4,0 meter."
                },
                {
                    q: "Sebuah foto diletakkan pada selembar karton berukuran lebar 30 cm dan tinggi 40 cm. Di sebelah kiri, kanan, dan atas foto masih tersisa karton selebar 3 cm. Jika foto dan karton sebangun, maka lebar karton yang tersisa di bagian BAWAH foto adalah...",
                    opts: [
                        "3 cm",
                        "4 cm",
                        "5 cm",
                        "6 cm"
                    ],
                    ans: 2,
                    exp: "Lebar foto = 30 - 3 - 3 = 24 cm. Karena foto dan karton sebangun: Tinggi Foto / Tinggi Karton = Lebar Foto / Lebar Karton -> Tinggi Foto / 40 = 24 / 30 -> Tinggi Foto = 32 cm. Maka sisa karton di bawah = 40 - 32 - 3 (atas) = 5 cm."
                },
                {
                    q: "Untuk mengukur lebar sebuah sungai tanpa menyeberanginya, seorang pramuka menancapkan patok sehingga terbentuk dua segitiga siku-siku yang sebangun di tepi sungai dengan perbandingan sisi sejajar 3 : 1. Jika jarak patok pembanding di darat adalah 6 meter, maka lebar sungai tersebut adalah...",
                    opts: [
                        "12 meter",
                        "15 meter",
                        "18 meter",
                        "24 meter"
                    ],
                    ans: 2,
                    exp: "Dengan perbandingan kesebangunan 3 : 1, lebar sungai = 3 × jarak pembanding di darat = 3 × 6 meter = 18 meter."
                }
            ]
        },
        {
            key: "pm_0_5",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Perhitungan Luas & Volume Benda Riil",
            ringkasan: `
                <p>Soal <strong>luas dan volume benda riil</strong> menguji aplikasi geometri pada pengecatan dinding/kolam, jumlah ubin keramik, debit pengisian tangki silinder, hingga kenaikan tinggi permukaan air saat benda dicelupkan (<strong>Hukum Archimedes Geometris</strong>).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Rumus Aplikasi Benda Riil:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Kenaikan Air dalam Wadah:</strong> Volume Benda Tenggelam = <strong>Luas Alas Wadah &times; &Delta;t (kenaikan tinggi air)</strong>.</li>
                        <li><strong>Debit Aliran Fluida (Q):</strong> <strong>Volume = Debit (Q) &times; Waktu (t)</strong> &nbsp;(Ingat konversi: <strong>1 liter = 1 dm<sup>3</sup> = 1.000 cm<sup>3</sup></strong> dan <strong>1 m<sup>3</sup> = 1.000 liter</strong>).</li>
                        <li><strong>Luas Dinding Kamar / Kolam Tanpa Tutup:</strong> Luas yang dicat/dikeramik pada kolam balok = <strong>(p &times; l) + 2(p &times; t) + 2(l &times; t)</strong> (tanpa tutup atas!).</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Sebuah akuarium berbentuk balok dengan luas alas 400 cm² diisi air setinggi 15 cm. Jika sebuah batu hias dimasukkan hingga tenggelam seluruhnya dan tinggi air naik menjadi 18 cm, berapakah volume batu hias tersebut?",
                langkah: "Kenaikan tinggi air Δt = 18 - 15 = 3 cm. Volume batu = Luas Alas × Δt = 400 cm² × 3 cm = 1.200 cm³."
            },
            gameQuestions: [
                {
                    q: "Sebuah kolam renang berbentuk balok memiliki ukuran panjang 10 m, lebar 6 m, dan kedalaman 2 m. Seluruh permukaan bagian dalam kolam (alas dan keempat dinding samping) akan dipasang keramik. Jika biaya pemasangan keramik adalah Rp100.000,00 per m², maka total biaya yang diperlukan adalah...",
                    opts: [
                        "Rp12.000.000,00",
                        "Rp12.400.000,00",
                        "Rp14.800.000,00",
                        "Rp18.400.000,00"
                    ],
                    ans: 1,
                    exp: "Luas alas + 4 dinding samping (tanpa tutup) = (p × l) + 2(p × t) + 2(l × t) = (10 × 6) + 2(10 × 2) + 2(6 × 2) = 60 + 40 + 24 = 124 m². Total biaya = 124 × Rp100.000,00 = Rp12.400.000,00."
                },
                {
                    q: "Sebuah tangki silinder berjari-jari 70 cm dan tinggi 1 meter akan diisi air hingga penuh menggunakan selang dengan debit konstan 22 liter/menit (gunakan π = 22/7). Waktu yang diperlukan untuk mengisi penuh tangki tersebut adalah...",
                    opts: [
                        "49 menit",
                        "60 menit",
                        "70 menit",
                        "98 menit"
                    ],
                    ans: 2,
                    exp: "Ubah ukuran ke dm agar langsung menjadi liter (1 dm³ = 1 liter): r = 70 cm = 7 dm, dan t = 1 m = 10 dm. Volume tangki = πr²t = (22/7) × 7 × 7 × 10 = 1.540 liter. Waktu = 1.540 liter / (22 liter/menit) = 70 menit."
                },
                {
                    q: "Sebuah wadah berbentuk tabung dengan jari-jari alas 10 cm berisi air setinggi 20 cm. Ke dalam wadah tersebut dimasukkan 3 buah bola besi identik berjari-jari 5 cm hingga tenggelam seluruhnya. Kenaikan tinggi permukaan air di dalam tabung adalah...",
                    opts: [
                        "2,5 cm",
                        "5,0 cm",
                        "7,5 cm",
                        "10,0 cm"
                    ],
                    ans: 1,
                    exp: "Volume 3 bola = 3 × (4/3)πr_bola³ = 4π(5³) = 500π cm³. Volume kenaikan air tabung = Luas alas tabung × Δt -> π(10²) × Δt = 500π -> 100π · Δt = 500π -> Δt = 5,0 cm."
                }
            ]
        },
        {
            key: "pm_0_6",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Aritmatika Sosial: Bunga Majemuk, Pajak, Laba/Rugi, Diskon Bertingkat",
            ringkasan: `
                <p><strong>Aritmatika sosial terapan</strong> di PM meliputi perbandingan <strong>bunga tunggal vs bunga majemuk</strong>, <strong>diskon bertingkat (<em>double discount</em>)</strong>, PPN/PPh, dan persentase laba/rugi terhadap harga beli (modal).</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Konsep Keuangan</th>
                                <th class="p-2 border border-slate-200 text-left">Rumus Cepat UTBK</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Diskon Bertingkat a% + b%</td>
                                <td class="p-2"><strong>Total Diskon Efektif = (a + b) - (a &times; b / 100)%</strong><br>Contoh: Diskon 50% + 20% = (50 + 20) - (10)% = <strong>60%</strong> (Bukan 70%!)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Mencari Modal dari Harga Jual</td>
                                <td class="p-2"><strong>Harga Beli = Harga Jual &times; [100 / (100 + %Untung)]</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Bunga Tunggal vs Bunga Majemuk</td>
                                <td class="p-2">Tunggal: <strong>M<sub>n</sub> = M<sub>0</sub>(1 + n&middot;i)</strong> &nbsp;|&nbsp; Majemuk: <strong>M<sub>n</sub> = M<sub>0</sub>(1 + i)<sup>n</sup></strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Sebuah jaket seharga Rp400.000,00 mendapat diskon bertingkat 30% + 20%. Berapakah harga akhir yang harus dibayar?",
                langkah: "Setelah diskon pertama 30%, sisa harga = 70% × 400.000 = Rp280.000,00. Diskon kedua 20% dihitung dari Rp280.000,00 -> sisa bayar = 80% × 280.000 = Rp224.000,00."
            },
            gameQuestions: [
                {
                    q: "Sebuah pusat perbelanjaan memberikan promo diskon bertingkat '50% + 20%' untuk sepasang sepatu lari yang berlabel harga Rp600.000,00. Harga yang harus dibayar pembeli di kasir adalah...",
                    opts: [
                        "Rp180.000,00",
                        "Rp240.000,00",
                        "Rp260.000,00",
                        "Rp300.000,00"
                    ],
                    ans: 1,
                    exp: "Setelah diskon pertama 50%, harga menjadi Rp300.000,00. Diskon tambahan 20% dipotong dari Rp300.000,00 (yaitu Rp60.000,00), sehingga harga bayar akhir = 300.000 - 60.000 = Rp240.000,00."
                },
                {
                    q: "Seorang pedagang menjual sebuah laptop bekas dengan harga Rp5.750.000,00 dan memperoleh keuntungan sebesar 15% dari harga belinya. Harga beli laptop tersebut adalah...",
                    opts: [
                        "Rp4.800.000,00",
                        "Rp4.950.000,00",
                        "Rp5.000.000,00",
                        "Rp5.100.000,00"
                    ],
                    ans: 2,
                    exp: "Harga Beli = Harga Jual × [100 / (100 + 15)] = 5.750.000 × (100 / 115) = Rp5.000.000,00."
                },
                {
                    q: "Dana sebesar Rp10.000.000,00 diinvestasikan pada instrumen deposito yang memberikan bunga majemuk 10% per tahun. Besar total dana investasi tersebut pada akhir tahun ke-2 adalah...",
                    opts: [
                        "Rp12.000.000,00",
                        "Rp12.100.000,00",
                        "Rp12.200.000,00",
                        "Rp12.500.000,00"
                    ],
                    ans: 1,
                    exp: "Bunga majemuk 2 tahun: M₂ = M₀ × (1 + 0,10)² = 10.000.000 × (1,1)² = 10.000.000 × 1,21 = Rp12.100.000,00."
                }
            ]
        },
        {
            key: "pm_0_7",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Penyebaran Data, Kuartil, dan Tendensi Sentral Statistik Terapan",
            ringkasan: `
                <p>Dalam <strong>Statistik Terapan PM</strong>, soal biasa disajikan dalam bentuk tabel distribusi frekuensi, diagram batang/garis, atau <strong>rata-rata gabungan dua kelompok</strong>.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Rumus Cepat Rata-Rata Gabungan & Kuartil:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Rata-Rata Gabungan:</strong> x&#772;<sub>gab</sub> = (n<sub>1</sub>&middot;x&#772;<sub>1</sub> + n<sub>2</sub>&middot;x&#772;<sub>2</sub>) / (n<sub>1</sub> + n<sub>2</sub>)</li>
                        <li><strong>Trik Perbandingan Jumlah Siswa (n<sub>1</sub> : n<sub>2</sub>):</strong> <strong>n<sub>1</sub> : n<sub>2</sub> = |x&#772;<sub>2</sub> - x&#772;<sub>gab</sub>| : |x&#772;<sub>1</sub> - x&#772;<sub>gab</sub>|</strong> (Silangkan selisihnya terhadap rata-rata gabungan!)</li>
                        <li><strong>Jangkauan Antarkuartil (Hamparan H):</strong> <strong>H = Q<sub>3</sub> - Q<sub>1</sub></strong> &nbsp;|&nbsp; Simpangan Kuartil <strong>Q<sub>d</sub> = &frac12;(Q<sub>3</sub> - Q<sub>1</sub>)</strong>.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Rata-rata nilai ujian siswa putra adalah 75 dan siswa putri adalah 83. Jika rata-rata seluruh kelas adalah 80, berapakah perbandingan jumlah siswa putra dan putri?",
                langkah: "Gunakan trik selisih silang: n_putra : n_putri = |83 - 80| : |75 - 80| = 3 : 5."
            },
            gameQuestions: [
                {
                    q: "Nilai rata-rata ujian matematika dari 28 siswa di suatu kelas adalah 76. Setelah nilai ujian 2 siswa susulan digabungkan, rata-rata kelas tersebut naik menjadi 77. Nilai rata-rata dari kedua siswa yang mengikuti ujian susulan tersebut adalah...",
                    opts: [
                        "88",
                        "90",
                        "91",
                        "93"
                    ],
                    ans: 2,
                    exp: "Total nilai 30 siswa = 30 × 77 = 2.310. Total nilai 28 siswa awal = 28 × 76 = 2.128. Jumlah nilai 2 siswa susulan = 2.310 - 2.128 = 182. Maka rata-rata keduanya = 182 / 2 = 91."
                },
                {
                    q: "Rata-rata gaji karyawan divisi teknis adalah Rp7.200.000,00 dan rata-rata gaji karyawan divisi administrasi adalah Rp6.000.000,00. Jika rata-rata gaji seluruh karyawan dari kedua divisi tersebut adalah Rp6.750.000,00, maka perbandingan jumlah karyawan divisi teknis dan administrasi adalah...",
                    opts: [
                        "3 : 5",
                        "5 : 3",
                        "4 : 3",
                        "5 : 4"
                    ],
                    ans: 1,
                    exp: "Gunakan trik selisih silang: n_teknis : n_admin = |6.000.000 - 6.750.000| : |7.200.000 - 6.750.000| = 750.000 : 450.000 = 5 : 3."
                },
                {
                    q: "Diketahui data hasil panen (dalam ton) dari 7 petak sawah percobaan: 4, 6, 8, 5, 9, 10, 7. Nilai jangkauan antarkuartil (hamparan, Q₃ - Q₁) dari data tersebut adalah...",
                    opts: [
                        "3 ton",
                        "4 ton",
                        "5 ton",
                        "6 ton"
                    ],
                    ans: 1,
                    exp: "Urutkan ke-7 data: 4, 5, 6, 7, 8, 9, 10. Kuartil tengah Q₂ = 7 (data ke-4). Kuartil bawah Q₁ = 5 (data ke-2) dan kuartil atas Q₃ = 9 (data ke-6). Maka hamparan H = Q₃ - Q₁ = 9 - 5 = 4 ton."
                }
            ]
        },
        {
            key: "pm_0_8",
            kategori: "Penalaran Kontekstual & Pemecahan Masalah",
            judul: "Peluang Terapan dalam Pengambilan Keputusan Bisnis / Sains",
            ringkasan: `
                <p><strong>Peluang terapan & nilai harapan (ekspektasi)</strong> menguji pengambilan keputusan berbasis risiko, frekuensi harapan (F<sub>h</sub> = P(A) &times; N), peluang bersyarat dari tabel kontingensi 2&times;2, dan peluang komplemen (minimal 1 berhasil = 1 - P(gagal semua)).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Tiga Rumus Peluang Terapan:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Frekuensi Harapan:</strong> <strong>F<sub>h</sub>(A) = P(A) &times; Banyaknya Percobaan (N)</strong>.</li>
                        <li><strong>Peluang Minimal Satu Sukses:</strong> <strong>P(Minimal 1 Sukses) = 1 - P(Semua Gagal)</strong>.</li>
                        <li><strong>Peluang Bersyarat Tabel Kontingensi:</strong> Jika ditanya <em>"Peluang terpilihnya A jika diketahui berasal dari kelompok B"</em>, maka <strong>penyebutnya adalah total kelompok B saja</strong> (bukan total seluruh populasi!).</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Sebuah mesin pabrik memproduksi komponen elektronik dengan peluang cacat 0,02. Jika diproduksi 1.500 komponen dalam sehari, berapa ekspektasi jumlah komponen yang lolos uji kualitas (tidak cacat)?",
                langkah: "Peluang lolos (tidak cacat) = 1 - 0,02 = 0,98. Frekuensi harapan lolos = 0,98 × 1.500 = 1.470 komponen."
            },
            gameQuestions: [
                {
                    q: "Sebuah perusahaan benih pertanian mengklaim bahwa peluang sebulir benih jagung hibrida berhasil berkecambah adalah 0,92. Jika seorang petani menanam 2.500 bulir benih tersebut, maka frekuensi harapan banyaknya benih yang GAGAL berkecambah adalah...",
                    opts: [
                        "150 bulir",
                        "200 bulir",
                        "230 bulir",
                        "250 bulir"
                    ],
                    ans: 1,
                    exp: "Peluang gagal berkecambah = 1 - 0,92 = 0,08. Frekuensi harapan gagal = 0,08 × 2.500 = 200 bulir."
                },
                {
                    q: "Dua buah sensor pendeteksi asap dipasang secara independen di sebuah ruang server. Peluang sensor A berfungsi saat terjadi kebakaran adalah 0,90 dan peluang sensor B berfungsi adalah 0,80. Peluang bahwa MINIMAL SALAH SATU sensor berfungsi saat terjadi kebakaran adalah...",
                    opts: [
                        "0,72",
                        "0,85",
                        "0,96",
                        "0,98"
                    ],
                    ans: 3,
                    exp: "Peluang kedua sensor gagal bersamaan = (1 - 0,90) × (1 - 0,80) = 0,10 × 0,20 = 0,02. Maka peluang minimal satu sensor berfungsi = 1 - 0,02 = 0,98."
                },
                {
                    q: "Hasil survei terhadap 200 pelamar kerja menunjukkan: 120 pelamar menguasai bahasa Inggris, 80 pelamar tidak menguasai bahasa Inggris. Dari 120 pelamar yang menguasai bahasa Inggris, 90 orang di antaranya juga menguasai pemrograman Python. Jika dipilih 1 orang secara acak dari kelompok pelamar yang menguasai bahasa Inggris, peluang ia juga menguasai pemrograman Python adalah...",
                    opts: [
                        "9/20",
                        "3/5",
                        "3/4",
                        "4/5"
                    ],
                    ans: 2,
                    exp: "Karena syaratnya dipilih dari kelompok yang menguasai bahasa Inggris (penyebut = 120 orang), maka peluangnya adalah 90 / 120 = 3/4."
                }
            ]
        }
    ]
};
