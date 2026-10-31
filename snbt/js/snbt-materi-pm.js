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
                },
                {
                    q: "Sebuah perusahaan taksi menetapkan tarif awal Rp12.000,00 untuk 3 km pertama dan Rp4.000,00 untuk setiap kilometer berikutnya. Jika seorang penumpang membayar Rp48.000,00 di akhir perjalanan (tanpa biaya tol), maka jarak total yang ditempuh taksi tersebut adalah...",
                    opts: [
                        "9 km",
                        "11 km",
                        "12 km",
                        "15 km"
                    ],
                    ans: 2,
                    exp: "Misalkan jarak total = x km (x > 3). Persamaan biaya: 12.000 + 4.000(x - 3) = 48.000 -> 4.000(x - 3) = 36.000 -> x - 3 = 9 -> x = 12 km."
                },
                {
                    q: "Sebuah bak penampungan air dapat diisi penuh oleh keran A dalam 10 menit dan oleh keran B dalam 15 menit. Di dasar bak terdapat saluran pembuangan C yang jika dibuka dapat menguras bak penuh hingga kosong dalam 30 menit. Apabila saat bak kosong kedua keran A dan B dibuka bersamaan sementara saluran pembuangan C lupa ditutup, bak akan terisi penuh dalam waktu...",
                    opts: [
                        "6,0 menit",
                        "7,5 menit",
                        "8,0 menit",
                        "10,0 menit"
                    ],
                    ans: 1,
                    exp: "Laju bersih pengisian per menit: 1/t = 1/10 + 1/15 - 1/30 = (3 + 2 - 1) / 30 = 4/30 = 2/15 bagian per menit. Maka waktu hingga penuh t = 15/2 = 7,5 menit."
                },
                {
                    q: "Andi bersepeda motor dari Kota A menuju Kota B pada pukul 06.00 dengan kecepatan konstan 45 km/jam. Pada pukul 06.40, Bima berangkat dari Kota A melewati rute yang sama dengan kecepatan konstan 60 km/jam untuk menyusul Andi. Bima akan tepat menyusul Andi pada pukul...",
                    opts: [
                        "08.00",
                        "08.20",
                        "08.40",
                        "09.00"
                    ],
                    ans: 2,
                    exp: "Saat Bima berangkat pukul 06.40 (selisih 40 menit = 2/3 jam), Andi sudah berada di depan sejauh (2/3) × 45 = 30 km. Waktu menyusul = Selisih Jarak / (v_Bima - v_Andi) = 30 / (60 - 45) = 30 / 15 = 2 jam. Maka Bima menyusul pukul 06.40 + 2 jam = 08.40."
                },
                {
                    q: "Sebuah gedung serbaguna menyewakan paket resepsi dengan biaya sewa ruang tetap sebesar Rp4.500.000,00 ditambah biaya katering sebesar Rp35.000,00 per orang tamu. Jika panitia acara memiliki anggaran maksimal Rp18.500.000,00, maka jumlah tamu paling banyak yang dapat diundang adalah...",
                    opts: [
                        "350 orang",
                        "380 orang",
                        "400 orang",
                        "450 orang"
                    ],
                    ans: 2,
                    exp: "Model biaya: 4.500.000 + 35.000n ≤ 18.500.000 -> 35.000n ≤ 14.000.000 -> n ≤ 14.000.000 / 35.000 -> n ≤ 400 orang."
                },
                {
                    q: "Baterai sebuah laptop memiliki kapasitas penuh 60 Wh. Saat digunakan untuk mengetik dokumen, laptop menyerap daya rata-rata 12 W, sedangkan saat digunakan untuk merender video menyerap daya rata-rata 30 W. Jika dari kondisi baterai penuh (100%) laptop digunakan mengetik selama 2,5 jam lalu langsung digunakan merender video hingga baterai habis (0%), maka durasi merender video tersebut adalah...",
                    opts: [
                        "45 menit",
                        "60 menit",
                        "75 menit",
                        "90 menit"
                    ],
                    ans: 1,
                    exp: "Energi terpakai saat mengetik 2,5 jam = 2,5 jam × 12 W = 30 Wh. Sisa energi baterai = 60 - 30 = 30 Wh. Waktu merender video = 30 Wh / 30 W = 1 jam = 60 menit."
                },
                {
                    q: "Mesin cetak A mampu mencetak 120 lembar per menit, sedangkan mesin cetak B mampu mencetak 180 lembar per menit. Untuk menyelesaikan pesanan 9.000 lembar brosur, operator menyalakan mesin A sendirian selama 15 menit pertama, kemudian menyalakan mesin B untuk bekerja bersama-sama dengan mesin A hingga seluruh pesanan selesai. Total waktu yang dibutuhkan sejak mesin A pertama kali dinyalakan adalah...",
                    opts: [
                        "24 menit",
                        "30 menit",
                        "39 menit",
                        "45 menit"
                    ],
                    ans: 2,
                    exp: "Selama 15 menit pertama, mesin A mencetak 15 × 120 = 1.800 lembar. Sisa pesanan = 9.000 - 1.800 = 7.200 lembar. Saat A dan B bekerja bersama, laju gabungan = 120 + 180 = 300 lembar/menit, sehingga butuh waktu 7.200 / 300 = 24 menit. Total waktu = 15 + 24 = 39 menit."
                },
                {
                    q: "Sebuah tandon air berkapasitas 800 liter mula-mula telah berisi 200 liter air. Keran pengisi dinyalakan dengan debit 25 liter/menit, namun pada saat yang sama terdapat celah bocor di bagian bawah yang mengeluarkan air dengan debit konstan 5 liter/menit. Waktu yang diperlukan hingga tandon terisi penuh adalah...",
                    opts: [
                        "20 menit",
                        "24 menit",
                        "30 menit",
                        "40 menit"
                    ],
                    ans: 2,
                    exp: "Volume air yang harus ditambahkan = 800 - 200 = 600 liter. Debit bersih = 25 - 5 = 20 liter/menit. Waktu hingga penuh = 600 / 20 = 30 menit."
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
                },
                {
                    q: "Di loket wahana wisata, keluarga Pak Ahmad membayar Rp190.000,00 untuk 3 tiket dewasa dan 2 tiket anak-anak. Sementara itu, keluarga Pak Bambang membayar Rp180.000,00 untuk 2 tiket dewasa dan 4 tiket anak-anak. Harga untuk 1 tiket dewasa dan 1 tiket anak-anak adalah...",
                    opts: [
                        "Rp65.000,00",
                        "Rp70.000,00",
                        "Rp75.000,00",
                        "Rp80.000,00"
                    ],
                    ans: 1,
                    exp: "Persamaan (1): 3D + 2A = 190.000. Persamaan (2): 2D + 4A = 180.000 -> bagi 2 menjadi D + 2A = 90.000. Kurangkan (1) dan hasil bagi (2): 2D = 100.000 -> D = 50.000. Maka 2A = 90.000 - 50.000 = 40.000 -> A = 20.000. Jadi D + A = Rp70.000,00."
                },
                {
                    q: "Tiga tangki penyimpanan bahan kimia memiliki volume x, y, dan z liter. Diketahui jumlah volume tangki pertama dan kedua adalah 170 liter, tangki kedua dan ketiga adalah 210 liter, serta tangki pertama dan ketiga adalah 180 liter. Volume dari tangki yang paling besar adalah...",
                    opts: [
                        "90 liter",
                        "100 liter",
                        "110 liter",
                        "120 liter"
                    ],
                    ans: 2,
                    exp: "Jumlahkan ketiga persamaan: (x + y) + (y + z) + (x + z) = 170 + 210 + 180 -> 2(x + y + z) = 560 -> x + y + z = 280 liter. Maka z = 280 - 170 = 110, x = 280 - 210 = 70, dan y = 280 - 180 = 100. Tangki terbesar bervolume 110 liter."
                },
                {
                    q: "Panitia pertunjukan teater berhasil menjual habis 300 lembar tiket yang terdiri atas tiket kelas Festival seharga Rp150.000,00 per lembar dan kelas VIP seharga Rp350.000,00 per lembar. Jika total uang penjualan tiket yang terkumpul adalah Rp65.000.000,00, maka banyaknya tiket kelas VIP yang terjual adalah...",
                    opts: [
                        "80 lembar",
                        "100 lembar",
                        "120 lembar",
                        "150 lembar"
                    ],
                    ans: 1,
                    exp: "Misalkan F + V = 300 dan 150.000F + 350.000V = 65.000.000 (sederhanakan: 150F + 350V = 65.000). Karena 150(F + V) = 45.000, kurangkan: 200V = 65.000 - 45.000 = 20.000 -> V = 100 lembar."
                },
                {
                    q: "Saat ini, usia seorang ayah sama dengan 3 kali usia anaknya. Enam tahun yang lalu, jumlah usia ayah dan anak tersebut adalah 48 tahun. Berapakah usia anak tersebut saat ini?",
                    opts: [
                        "12 tahun",
                        "14 tahun",
                        "15 tahun",
                        "18 tahun"
                    ],
                    ans: 2,
                    exp: "Misalkan usia ayah sekarang = A dan anak = K. Diketahui A = 3K. Enam tahun lalu: (A - 6) + (K - 6) = 48 -> A + K = 60. Substitusi A = 3K: 3K + K = 60 -> 4K = 60 -> K = 15 tahun."
                },
                {
                    q: "Di sebuah kafe, pesanan 5 cangkir espresso dan 4 potong croissant berharga Rp185.000,00, sedangkan pesanan 3 cangkir espresso dan 2 potong croissant berharga Rp105.000,00. Harga untuk 1 cangkir espresso di kafe tersebut adalah...",
                    opts: [
                        "Rp20.000,00",
                        "Rp22.500,00",
                        "Rp25.000,00",
                        "Rp27.500,00"
                    ],
                    ans: 2,
                    exp: "Persamaan (1): 5E + 4C = 185.000. Kalikan persamaan kedua (3E + 2C = 105.000) dengan 2: 6E + 4C = 210.000. Kurangkan keduanya: (6E + 4C) - (5E + 4C) = 210.000 - 185.000 -> E = Rp25.000,00."
                },
                {
                    q: "Sebuah gudang pertanian menimbang dua paket pupuk. Paket A yang terdiri atas 2 karung Urea, 3 karung NPK, dan 1 karung Kompos memiliki berat total 190 kg. Paket B yang terdiri atas 1 karung Urea, 2 karung NPK, dan 2 karung Kompos memiliki berat total 170 kg. Berapakah berat total dari 3 karung Urea, 5 karung NPK, dan 3 karung Kompos?",
                    opts: [
                        "340 kg",
                        "350 kg",
                        "360 kg",
                        "380 kg"
                    ],
                    ans: 2,
                    exp: "Gunakan trik kombinasi linier langsung dengan menjumlahkan Paket A dan Paket B: (2U + 3N + 1K) + (1U + 2N + 2K) = 3U + 5N + 3K = 190 + 170 = 360 kg."
                },
                {
                    q: "Pada suatu kompetisi matematika yang terdiri atas 50 butir soal, setiap jawaban benar diberi skor +4, jawaban salah diberi skor -1, dan soal yang tidak dijawab diberi skor 0. Dito menjawab 44 soal dan memperoleh skor akhir 136. Banyaknya soal yang dijawab BENAR oleh Dito adalah...",
                    opts: [
                        "34 soal",
                        "35 soal",
                        "36 soal",
                        "38 soal"
                    ],
                    ans: 2,
                    exp: "Misalkan banyak jawaban benar = B dan salah = S. Karena menjawab 44 soal: B + S = 44. Dari skor: 4B - S = 136. Jumlahkan kedua persamaan: 5B = 180 -> B = 36 soal."
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
                },
                {
                    q: "Perhatikan prosedur algoritma berikut:\n1. Inisialisasi variabel S = 0 dan i = 1.\n2. Selama i ≤ 4, lakukan: tambahkan S dengan i² (S ← S + i²), lalu tambahkan i dengan 1 (i ← i + 1).\n3. Cetak nilai S.\nNilai S yang dicetak pada akhir prosedur adalah...",
                    opts: [
                        "10",
                        "14",
                        "30",
                        "55"
                    ],
                    ans: 2,
                    exp: "Perulangan berjalan untuk i = 1, 2, 3, dan 4. Nilai S = 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30."
                },
                {
                    q: "Sebuah flowchart kasir pintar menerima input total belanja B (dalam ribuan rupiah) dengan aturan:\n• Jika B ≥ 200, berikan potongan P = 30.\n• Jika 100 ≤ B < 200, berikan potongan P = 15.\n• Jika B < 100, maka P = 0.\n• Selanjutnya hitung Tagihan T = B - P. Jika pelanggan membawa kartu anggota, kurangi lagi T sebesar 10% dari T.\nJika seorang pelanggan berstatus anggota berbelanja sebesar B = 180 (ribu rupiah), maka nilai akhir T adalah...",
                    opts: [
                        "135 ribu rupiah",
                        "148,5 ribu rupiah",
                        "150 ribu rupiah",
                        "165 ribu rupiah"
                    ],
                    ans: 1,
                    exp: "Karena B = 180 berada pada rentang 100 ≤ B < 200, maka potongan P = 15. Nilai T sementara = 180 - 15 = 165. Karena membawa kartu anggota, dikurangi 10%: T akhir = 165 - (0,10 × 165) = 165 - 16,5 = 148,5 ribu rupiah."
                },
                {
                    q: "Diberikan algoritma Collatz terhadap bilangan bulat positif n:\n• Jika n genap, maka n ← n / 2.\n• Jika n ganjil, maka n ← 3n + 1.\nJika nilai awal adalah n = 12, berapakah nilai n setelah aturan tersebut dijalankan tepat 4 kali berturut-turut?",
                    opts: [
                        "5",
                        "8",
                        "10",
                        "16"
                    ],
                    ans: 0,
                    exp: "Telusuri dari n = 12: Langkah 1 (12 genap) -> n = 6. Langkah 2 (6 genap) -> n = 3. Langkah 3 (3 ganjil) -> n = 3(3) + 1 = 10. Langkah 4 (10 genap) -> n = 10 / 2 = 5."
                },
                {
                    q: "Perhatikan algoritma pertukaran variabel berikut:\n1. Masukkan nilai awal a = 8 dan b = 13.\n2. Hitung a ← a + b.\n3. Hitung b ← a - 2b.\n4. Hitung a ← a - b.\nNilai akhir dari pasangan (a, b) adalah...",
                    opts: [
                        "(13, 8)",
                        "(26, -5)",
                        "(16, 5)",
                        "(21, -5)"
                    ],
                    ans: 1,
                    exp: "Telusuri langkah demi langkah: Awal a = 8, b = 13. Langkah 2: a ← 8 + 13 = 21 (b tetap 13). Langkah 3: b ← 21 - 2(13) = 21 - 26 = -5. Langkah 4: a ← 21 - (-5) = 26. Maka hasil akhirnya adalah (26, -5)."
                },
                {
                    q: "Sebuah robot penyortir bergerak pada garis bilangan dimulai dari posisi P = 0. Pada langkah ke-k (untuk k = 1, 2, 3, ..., 6), robot bergerak maju sejauh 2k satuan jika k ganjil, dan bergerak mundur sejauh k satuan jika k genap. Posisi akhir robot setelah menyelesaikan langkah ke-6 adalah...",
                    opts: [
                        "4",
                        "6",
                        "8",
                        "10"
                    ],
                    ans: 1,
                    exp: "Hitung perubahan posisi dari k = 1 s.d. 6:\nk=1 (ganjil): +2(1) = +2\nk=2 (genap): -2\nk=3 (ganjil): +2(3) = +6\nk=4 (genap): -4\nk=5 (ganjil): +2(5) = +10\nk=6 (genap): -6\nTotal posisi akhir P = 0 + 2 - 2 + 6 - 4 + 10 - 6 = 6."
                },
                {
                    q: "Diberikan algoritma pencarian nilai dengan input awal X = 2 dan Y = 50:\n• Selama X < Y, lakukan: X ← 2X dan Y ← Y - 8.\nBerapakah nilai X ketika perulangan tersebut berhenti?",
                    opts: [
                        "16",
                        "32",
                        "64",
                        "128"
                    ],
                    ans: 1,
                    exp: "Telusuri pasangan (X, Y):\nAwal: (2, 50) -> karena 2 < 50, lanjut.\nIterasi 1: (4, 42) -> karena 4 < 42, lanjut.\nIterasi 2: (8, 34) -> karena 8 < 34, lanjut.\nIterasi 3: (16, 26) -> karena 16 < 26, lanjut.\nIterasi 4: (32, 18) -> sekarang 32 tidak kurang dari 18, perulangan berhenti dengan X = 32."
                },
                {
                    q: "Suatu operasi biner '⊕' pada bilangan bulat positif didefinisikan dengan algoritma:\n• Jika a ≥ b, maka a ⊕ b = a² - b.\n• Jika a < b, maka a ⊕ b = a + 2b.\nNilai dari (3 ⊕ 5) ⊕ 10 adalah...",
                    opts: [
                        "33",
                        "159",
                        "169",
                        "179"
                    ],
                    ans: 1,
                    exp: "Kerjakan di dalam kurung terlebih dahulu: untuk (3 ⊕ 5), karena 3 < 5 maka hasilnya = 3 + 2(5) = 13. Selanjutnya hitung 13 ⊕ 10: karena 13 ≥ 10, maka hasilnya = 13² - 10 = 169 - 10 = 159."
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
                },
                {
                    q: "Pembangunan sebuah jembatan ditargetkan selesai dalam waktu 60 hari oleh 30 pekerja. Setelah dikerjakan selama 30 hari, proyek terhenti selama 10 hari akibat banjir. Agar jembatan tetap selesai tepat pada jadwal semula, berapa orang pekerja tambahan yang harus didatangkan?",
                    opts: [
                        "10 orang",
                        "12 orang",
                        "15 orang",
                        "20 orang"
                    ],
                    ans: 2,
                    exp: "Sisa hari efektif yang tersisa = 60 - 30 - 10 = 20 hari. Gunakan rumus cepat: Tambahan Pekerja = (Pekerja Awal × Lama Terhenti) / Sisa Hari = (30 × 10) / 20 = 15 orang."
                },
                {
                    q: "Sebuah mobil memerlukan 12 liter bensin untuk menempuh jarak 156 km. Jika mobil tersebut akan melakukan perjalanan sejauh 325 km dengan kondisi konsumsi bahan bakar yang sama, berapa liter bensin yang dibutuhkan?",
                    opts: [
                        "22 liter",
                        "24 liter",
                        "25 liter",
                        "28 liter"
                    ],
                    ans: 2,
                    exp: "Konsumsi per liter = 156 km / 12 liter = 13 km/liter. Untuk menempuh 325 km, bensin yang dibutuhkan = 325 / 13 = 25 liter."
                },
                {
                    q: "Sebuah asrama mahasiswa memiliki persediaan beras yang cukup untuk 40 penghuni selama 18 hari. Setelah 3 hari berjalan, datang 10 mahasiswa baru yang ikut tinggal di asrama tersebut. Sisa persediaan beras akan habis dalam waktu...",
                    opts: [
                        "10 hari",
                        "12 hari",
                        "14 hari",
                        "15 hari"
                    ],
                    ans: 1,
                    exp: "Setelah 3 hari, sisa jatah beras untuk 40 orang adalah 18 - 3 = 15 hari. Ketika ditambah 10 orang (total 50 penghuni), berlaku perbandingan berbalik nilai: 40 × 15 = 50 × h -> h = 600 / 50 = 12 hari."
                },
                {
                    q: "Pada peta berskala 1 : 50.000, sebuah kawasan danau buatan memiliki luas gambar 12 cm². Berapakah luas sebenarnya dari kawasan danau buatan tersebut dalam satuan hektare (1 hektare = 10.000 m²)?",
                    opts: [
                        "15 hektare",
                        "30 hektare",
                        "60 hektare",
                        "300 hektare"
                    ],
                    ans: 3,
                    exp: "Skala 1 : 50.000 berarti 1 cm pada peta = 50.000 cm = 500 m di lapangan. Maka 1 cm² pada peta mewakili luas (500 m)² = 250.000 m² = 25 hektare. Untuk luas gambar 12 cm², luas sebenarnya adalah 12 × 25 hektare = 300 hektare."
                },
                {
                    q: "Suatu proyek pengaspalan jalan sepanjang 5 km dapat diselesaikan oleh 16 pekerja dalam waktu 30 hari. Jika kepala proyek ingin mempercepat pengaspalan jalan tersebut agar selesai dalam waktu 20 hari, maka jumlah pekerja tambahan yang harus direkrut adalah...",
                    opts: [
                        "6 orang",
                        "8 orang",
                        "10 orang",
                        "12 orang"
                    ],
                    ans: 1,
                    exp: "Perbandingan berbalik nilai: P₁ × H₁ = P₂ × H₂ -> 16 × 30 = P₂ × 20 -> P₂ = 480 / 20 = 24 pekerja. Maka pekerja tambahan yang diperlukan = 24 - 16 = 8 orang."
                },
                {
                    q: "Untuk membuat campuran beton kualitas struktural, dibutuhkan semen, pasir, dan kerikil dengan perbandingan berat 1 : 2 : 3. Jika seorang kontraktor membutuhkan total campuran beton kering seberat 720 kg, maka selisih berat antara kerikil dan semen yang digunakan adalah...",
                    opts: [
                        "120 kg",
                        "180 kg",
                        "240 kg",
                        "360 kg"
                    ],
                    ans: 2,
                    exp: "Total bagian rasio = 1 + 2 + 3 = 6 bagian. Selisih bagian kerikil dan semen = 3 - 1 = 2 bagian. Maka selisih beratnya = (2 / 6) × 720 kg = 240 kg."
                },
                {
                    q: "Dua buah roda gigi pada mesin penggilingan saling bersinggungan. Roda gigi A memiliki 36 gerigi dan roda gigi B memiliki 24 gerigi. Jika roda gigi A berputar dengan kecepatan 120 putaran per menit (rpm), maka kecepatan putar roda gigi B adalah...",
                    opts: [
                        "80 rpm",
                        "150 rpm",
                        "180 rpm",
                        "240 rpm"
                    ],
                    ans: 2,
                    exp: "Banyak gerigi berbanding terbalik dengan kecepatan putar: G_A × n_A = G_B × n_B -> 36 × 120 = 24 × n_B -> n_B = 4.320 / 24 = 180 rpm."
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
                },
                {
                    q: "Pada suatu pagi yang cerah, sebuah tiang bendera setinggi 9 meter menghasilkan bayangan sepanjang 6 meter di lapangan datar. Pada saat yang sama, sebatang pohon pinus di dekat lapangan tersebut menghasilkan bayangan sepanjang 10 meter. Tinggi pohon pinus tersebut adalah...",
                    opts: [
                        "12 meter",
                        "14 meter",
                        "15 meter",
                        "18 meter"
                    ],
                    ans: 2,
                    exp: "Perbandingan kesebangunan bayangan: Tinggi Pohon / Tinggi Tiang = Bayangan Pohon / Bayangan Tiang -> Tinggi Pohon / 9 = 10 / 6 -> Tinggi Pohon = 90 / 6 = 15 meter."
                },
                {
                    q: "Sebidang lahan berbentuk trapesium ABCD memiliki sisi sejajar atas CD = 10 meter dan sisi sejajar bawah AB = 20 meter. Sebuah pagar pembatas EF dibangun sejajar AB dengan titik E pada AD dan F pada BC sedemikian sehingga perbandingan DE : EA = 2 : 3. Panjang pagar pembatas EF tersebut adalah...",
                    opts: [
                        "12 meter",
                        "14 meter",
                        "15 meter",
                        "16 meter"
                    ],
                    ans: 1,
                    exp: "Gunakan rumus sekat trapesium (rumus ikan): EF = (DE × AB + EA × CD) / (DE + EA) = (2 × 20 + 3 × 10) / (2 + 3) = (40 + 30) / 5 = 14 meter."
                },
                {
                    q: "Sebuah tangga kayu sepanjang 10 meter disandarkan pada dinding tembok vertikal sehingga ujung bawah tangga berjarak 6 meter dari kaki tembok. Tepat di titik tengah tangga (5 meter dari ujung bawah) dipasang sebuah tiang besi penyangga vertikal tegak lurus ke lantai. Tinggi tiang besi penyangga tersebut adalah...",
                    opts: [
                        "3,0 meter",
                        "4,0 meter",
                        "4,5 meter",
                        "5,0 meter"
                    ],
                    ans: 1,
                    exp: "Tinggi ujung atas tangga di tembok menurut Pythagoras = √(10² - 6²) = √(100 - 36) = 8 meter. Karena tiang penyangga berada tepat di tengah tangga (rasio 5 : 10 = 1 : 2), maka tinggi tiang penyangga = (1/2) × 8 meter = 4,0 meter."
                },
                {
                    q: "Seorang pengamat yang tinggi posisi matanya 1,5 meter dari permukaan tanah meletakkan sebuah cermin datar secara horizontal di tanah. Ia berdiri 2 meter dari cermin dan melihat bayangan puncak sebuah menara yang berjarak 16 meter dari cermin tersebut. Tinggi menara itu adalah...",
                    opts: [
                        "9 meter",
                        "10,5 meter",
                        "12 meter",
                        "15 meter"
                    ],
                    ans: 2,
                    exp: "Sudut datang cahaya sama dengan sudut pantul, sehingga segitiga siku-siku pengamat sebangun dengan segitiga menara: Tinggi Menara / Tinggi Mata = Jarak Menara / Jarak Pengamat -> Tinggi Menara / 1,5 = 16 / 2 -> Tinggi Menara = 1,5 × 8 = 12 meter."
                },
                {
                    q: "Sebuah lukisan berukuran lebar 40 cm dan tinggi 60 cm dipasang pada bingkai kayu yang sebangun dengan lukisan tersebut. Jika lebar tepi bingkai di bagian kiri, kanan, dan atas lukisan masing-masing adalah 5 cm, maka lebar tepi bingkai di bagian BAWAH lukisan adalah...",
                    opts: [
                        "5 cm",
                        "8 cm",
                        "10 cm",
                        "12 cm"
                    ],
                    ans: 2,
                    exp: "Lebar luar bingkai = 40 + 5 (kiri) + 5 (kanan) = 50 cm. Karena sebangun: Tinggi Bingkai / 60 = 50 / 40 -> Tinggi Bingkai = 75 cm. Maka lebar tepi bingkai bagian bawah = 75 - 60 - 5 (atas) = 10 cm."
                },
                {
                    q: "Dua buah tiang pemancar berdiri tegak lurus di atas tanah datar dengan tinggi masing-masing 6 meter dan 14 meter. Jika jarak mendatar antara kaki kedua tiang adalah 15 meter, maka panjang kabel lurus yang menghubungkan ujung puncak kedua tiang tersebut adalah...",
                    opts: [
                        "16 meter",
                        "17 meter",
                        "18 meter",
                        "20 meter"
                    ],
                    ans: 1,
                    exp: "Selisih tinggi kedua tiang Δt = 14 - 6 = 8 meter, dan jarak mendatar d = 15 meter. Panjang kabel miring membentuk hipotenusa segitiga siku-siku: L = √(8² + 15²) = √(64 + 225) = √289 = 17 meter."
                },
                {
                    q: "Sebidang tanah berbentuk segitiga siku-siku ABC (siku-siku di B) memiliki panjang sisi AB = 12 meter dan BC = 6 meter. Di dalam lahan tersebut akan dibangun kolam berbentuk persegi BDEF dengan titik D pada AB, E tepat pada sisi miring AC, dan F pada BC. Luas kolam persegi BDEF tersebut adalah...",
                    opts: [
                        "9 m²",
                        "16 m²",
                        "20 m²",
                        "25 m²"
                    ],
                    ans: 1,
                    exp: "Misalkan panjang sisi persegi = s. Segitiga kecil ADE sebangun dengan segitiga ABC: (AB - s) / AB = s / BC -> (12 - s) / 12 = s / 6 -> 6(12 - s) = 12s -> 72 - 6s = 12s -> 18s = 72 -> s = 4 meter. Maka luas persegi = 4² = 16 m²."
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
                },
                {
                    q: "Lantai sebuah aula pertemuan berbentuk persegi panjang dengan ukuran 18 m × 12 m akan dipasang ubin keramik berbentuk persegi berukuran 60 cm × 60 cm. Jika setiap satu kardus berisi 5 keping ubin keramik, maka jumlah kardus keramik paling sedikit yang harus dibeli adalah...",
                    opts: [
                        "100 kardus",
                        "110 kardus",
                        "120 kardus",
                        "144 kardus"
                    ],
                    ans: 2,
                    exp: "Ukuran ubin = 0,6 m × 0,6 m = 0,36 m². Banyak ubin yang dibutuhkan = (18 m × 12 m) / (0,6 m × 0,6 m) = 30 × 20 = 600 keping. Karena 1 kardus berisi 5 keping, jumlah kardus = 600 / 5 = 120 kardus."
                },
                {
                    q: "Atap kubah sebuah gedung berbentuk setengah bola (hemisfer) berongga dengan diameter 14 meter. Seluruh permukaan bagian luar kubah tersebut akan dilapisi cat antibocor dengan biaya Rp50.000,00 per m² (gunakan π = 22/7). Total biaya pengecatan kubah tersebut adalah...",
                    opts: [
                        "Rp7.700.000,00",
                        "Rp15.400.000,00",
                        "Rp23.100.000,00",
                        "Rp30.800.000,00"
                    ],
                    ans: 1,
                    exp: "Jari-jari kubah r = 14 / 2 = 7 m. Luas permukaan luar setengah bola = 2πr² = 2 × (22/7) × 7 × 7 = 308 m². Total biaya pengecatan = 308 × Rp50.000,00 = Rp15.400.000,00."
                },
                {
                    q: "Sebuah taman kota berbentuk lingkaran dengan diameter 28 meter. Di sekeliling tepi luar taman tersebut akan dibuat jalan setapak melingkar dengan lebar seragam 3,5 meter (gunakan π = 22/7). Luas jalan setapak tersebut adalah...",
                    opts: [
                        "308,0 m²",
                        "324,5 m²",
                        "346,5 m²",
                        "385,0 m²"
                    ],
                    ans: 2,
                    exp: "Jari-jari dalam taman r₁ = 14 m, dan jari-jari luar bersama jalan setapak r₂ = 14 + 3,5 = 17,5 m. Luas jalan setapak = π(r₂² - r₁²) = (22/7)(17,5 - 14)(17,5 + 14) = (22/7) × 3,5 × 31,5 = 11 × 31,5 = 346,5 m²."
                },
                {
                    q: "Sebuah akuarium berbentuk balok dengan ukuran panjang alas 50 cm dan lebar 30 cm diisi air hingga mencapai ketinggian 20 cm. Jika sebuah kubus logam pejal dengan panjang rusuk 15 cm dimasukkan ke dalam akuarium hingga tenggelam seluruhnya, maka tinggi permukaan air di dalam akuarium sekarang menjadi...",
                    opts: [
                        "21,50 cm",
                        "22,25 cm",
                        "22,50 cm",
                        "23,25 cm"
                    ],
                    ans: 1,
                    exp: "Volume kubus logam = 15³ = 3.375 cm³. Luas alas akuarium = 50 × 30 = 1.500 cm². Kenaikan tinggi air Δt = 3.375 / 1.500 = 2,25 cm. Maka tinggi permukaan air baru = 20 + 2,25 = 22,25 cm."
                },
                {
                    q: "Sebuah lilin hias besar berbentuk tabung padat dengan jari-jari 3 cm dan tinggi 14 cm dilebur seluruhnya, kemudian dicetak ulang menjadi lilin-lilin kecil berbentuk kerucut dengan jari-jari alas 3 cm dan tinggi 7 cm. Banyaknya lilin kerucut yang dihasilkan adalah...",
                    opts: [
                        "4 buah",
                        "6 buah",
                        "8 buah",
                        "9 buah"
                    ],
                    ans: 1,
                    exp: "Volume tabung = πR²T = π(3²)(14) = 126π cm³. Volume satu kerucut = (1/3)πr²t = (1/3)π(3²)(7) = 21π cm³. Banyaknya lilin kerucut = 126π / 21π = 6 buah."
                },
                {
                    q: "Sebuah kamar tidur berbentuk balok memiliki panjang 5 m, lebar 4 m, dan tinggi plafon 3 m. Keempat dinding bagian dalam kamar (tidak termasuk lantai dan plafon) akan dicat ulang. Pada dinding kamar terdapat sebuah pintu berukuran 2 m × 1 m dan dua buah jendela yang masing-masing berukuran 1,5 m × 1 m. Luas bidang dinding bersih yang akan dicat adalah...",
                    opts: [
                        "47 m²",
                        "49 m²",
                        "51 m²",
                        "54 m²"
                    ],
                    ans: 1,
                    exp: "Luas keempat dinding = 2(p + l) × t = 2(5 + 4) × 3 = 54 m². Luas pintu dan 2 jendela = (2 × 1) + 2(1,5 × 1) = 2 + 3 = 5 m². Luas dinding bersih yang dicat = 54 - 5 = 49 m²."
                },
                {
                    q: "Sebuah truk tangki mengangkut bahan bakar penuh di dalam tangki silinder berdiameter 1,4 meter dan panjang 4 meter (gunakan π = 22/7). Seluruh bahan bakar tersebut akan dituangkan ke dalam drum-drum penampung yang masing-masing berkapasitas 154 liter. Banyaknya drum yang diperlukan adalah...",
                    opts: [
                        "30 drum",
                        "35 drum",
                        "40 drum",
                        "45 drum"
                    ],
                    ans: 2,
                    exp: "Ubah ukuran ke desimeter (1 dm³ = 1 liter): jari-jari r = 0,7 m = 7 dm, panjang t = 4 m = 40 dm. Volume tangki = πr²t = (22/7) × 7 × 7 × 40 = 154 × 40 = 6.160 liter. Banyaknya drum = 6.160 / 154 = 40 drum."
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
                },
                {
                    q: "Sebuah kemeja kerja berlabel harga Rp250.000,00 mendapat potongan diskon sebesar 20%. Saat melakukan pembayaran di kasir, pembeli dikenai Pajak Pertambahan Nilai (PPN) sebesar 11% yang dihitung dari harga setelah diskon. Total uang yang harus dibayar oleh pembeli adalah...",
                    opts: [
                        "Rp211.000,00",
                        "Rp220.000,00",
                        "Rp222.000,00",
                        "Rp227.500,00"
                    ],
                    ans: 2,
                    exp: "Harga setelah diskon 20% = 80% × Rp250.000,00 = Rp200.000,00. Besar PPN 11% = 11% × Rp200.000,00 = Rp22.000,00. Maka total yang harus dibayar = 200.000 + 22.000 = Rp222.000,00."
                },
                {
                    q: "Seorang pedagang buah membeli satu peti jeruk seberat 50 kg dengan harga total Rp750.000,00. Setelah disortir, ternyata 5 kg jeruk busuk dan tidak dapat dijual. Jika pedagang tersebut ingin memperoleh keuntungan total sebesar 20% dari modal pembeliannya, maka harga jual jeruk yang baik per kilogramnya adalah...",
                    opts: [
                        "Rp18.000,00",
                        "Rp20.000,00",
                        "Rp21.000,00",
                        "Rp22.500,00"
                    ],
                    ans: 1,
                    exp: "Target pendapatan total (modal + untung 20%) = 120% × Rp750.000,00 = Rp900.000,00. Berat jeruk yang layak jual = 50 - 5 = 45 kg. Maka harga jual per kg = Rp900.000,00 / 45 kg = Rp20.000,00."
                },
                {
                    q: "Sebuah koperasi simpan pinjam memberikan pinjaman modal usaha sebesar Rp8.000.000,00 dengan sistem bunga tunggal 1,5% per bulan. Jika peminjam melunasi seluruh pinjaman beserta bunganya sekaligus pada akhir bulan ke-10, maka total uang yang harus dikembalikan adalah...",
                    opts: [
                        "Rp8.800.000,00",
                        "Rp9.000.000,00",
                        "Rp9.200.000,00",
                        "Rp9.500.000,00"
                    ],
                    ans: 2,
                    exp: "Persentase bunga tunggal selama 10 bulan = 10 × 1,5% = 15%. Total pengembalian = (100% + 15%) × Rp8.000.000,00 = 1,15 × Rp8.000.000,00 = Rp9.200.000,00."
                },
                {
                    q: "Pada sekarung beras tertulis informasi Bruto = 50 kg dan Tara = 2%. Jika harga beli beras bersih (neto) adalah Rp13.000,00 per kg (kemasan karung tidak dihitung biaya), maka harga beli satu karung beras tersebut adalah...",
                    opts: [
                        "Rp624.000,00",
                        "Rp637.000,00",
                        "Rp640.000,00",
                        "Rp650.000,00"
                    ],
                    ans: 1,
                    exp: "Berat tara (kemasan) = 2% × 50 kg = 1 kg. Berat bersih beras (neto) = 50 - 1 = 49 kg. Harga beli total = 49 kg × Rp13.000,00 = Rp637.000,00."
                },
                {
                    q: "Seorang kolektor menjual sebuah jam tangan dengan harga Rp3.400.000,00 dan ternyata menderita kerugian sebesar 15% dari harga belinya. Jika kolektor tersebut sebenarnya ingin memperoleh keuntungan sebesar 10% dari harga belinya, maka jam tangan itu seharusnya dijual seharga...",
                    opts: [
                        "Rp4.000.000,00",
                        "Rp4.200.000,00",
                        "Rp4.400.000,00",
                        "Rp4.500.000,00"
                    ],
                    ans: 2,
                    exp: "Harga Beli = Rp3.400.000,00 × (100 / 85) = Rp4.000.000,00. Agar memperoleh untung 10%, harga jual seharusnya = 110% × Rp4.000.000,00 = Rp4.400.000,00."
                },
                {
                    q: "Dua buah toko elektronik menjual televisi yang sama dengan harga label Rp5.000.000,00. Toko A memberikan diskon bertingkat '30% + 10%', sedangkan Toko B memberikan diskon tunggal langsung sebesar 38%. Selisih harga yang harus dibayar pembeli antara Toko A dan Toko B adalah...",
                    opts: [
                        "Rp50.000,00",
                        "Rp100.000,00",
                        "Rp150.000,00",
                        "Rp0,00 (sama persis)"
                    ],
                    ans: 0,
                    exp: "Diskon efektif Toko A = (30 + 10) - (30 × 10 / 100)% = 40% - 3% = 37%. Diskon Toko B = 38%. Selisih persentase diskon kedua toko adalah 38% - 37% = 1%. Maka selisih harganya = 1% × Rp5.000.000,00 = Rp50.000,00."
                },
                {
                    q: "Harga jual kembali sebuah mesin cetak mengalami penyusutan (depresiasi majemuk) sebesar 20% setiap tahun dari nilai mesin pada tahun sebelumnya. Jika harga beli mesin baru adalah Rp125.000.000,00, maka nilai mesin tersebut pada akhir tahun ke-3 adalah...",
                    opts: [
                        "Rp50.000.000,00",
                        "Rp64.000.000,00",
                        "Rp75.000.000,00",
                        "Rp80.000.000,00"
                    ],
                    ans: 1,
                    exp: "Nilai akhir tahun ke-3 = M₀ × (1 - 0,20)³ = 125.000.000 × (0,8)³ = 125.000.000 × (4/5)³ = 125.000.000 × (64 / 125) = Rp64.000.000,00."
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
                },
                {
                    q: "Rata-rata nilai kuis fisika dari 15 siswa adalah 80. Ketika nilai milik Raka digabungkan ke dalam kelompok tersebut, rata-rata nilai kuis menjadi 81. Nilai kuis fisika yang diperoleh Raka adalah...",
                    opts: [
                        "90",
                        "92",
                        "94",
                        "96"
                    ],
                    ans: 3,
                    exp: "Total nilai 16 siswa = 16 × 81 = 1.296. Total nilai 15 siswa awal = 15 × 80 = 1.200. Maka nilai Raka = 1.296 - 1.200 = 96."
                },
                {
                    q: "Distribusi frekuensi nilai praktikum kimia dari 30 siswa tercatat sebagai berikut:\n• Nilai 60: 4 siswa\n• Nilai 70: 6 siswa\n• Nilai 80: 10 siswa\n• Nilai 90: 8 siswa\n• Nilai 100: 2 siswa\nNilai median dari data hasil praktikum tersebut adalah...",
                    opts: [
                        "70",
                        "75",
                        "80",
                        "85"
                    ],
                    ans: 2,
                    exp: "Total frekuensi N = 30 (genap), sehingga median terletak pada rata-rata data ke-15 dan data ke-16 setelah diurutkan. Frekuensi kumulatif: nilai 60 (data 1–4), nilai 70 (data 5–10), nilai 80 (data 11–20). Karena data ke-15 dan ke-16 keduanya bernilai 80, maka median = 80."
                },
                {
                    q: "Lima bilangan bulat positif telah diurutkan dari yang terkecil hingga terbesar: a, 11, b, 18, c. Diketahui median dari data tersebut adalah 15, modus tunggalnya adalah 18, dan rata-rata kelima bilangan tersebut adalah 14. Nilai jangkauan (c - a) dari data tersebut adalah...",
                    opts: [
                        "8",
                        "9",
                        "10",
                        "11"
                    ],
                    ans: 2,
                    exp: "Karena data sudah terurut, median (data ke-3) adalah b = 15. Agar modus tunggal bernilai 18 dan c ≥ 18, maka c = 18. Jumlah kelima bilangan = 5 × 14 = 70 -> a + 11 + 15 + 18 + 18 = 70 -> a + 62 = 70 -> a = 8. Maka jangkauan = c - a = 18 - 8 = 10."
                },
                {
                    q: "Saat merekapitulasi nilai ujian dari 20 siswa, seorang guru memperoleh nilai rata-rata 74. Setelah diperiksa kembali, ternyata terdapat kesalahan pencatatan nilai seorang siswa: nilai yang seharusnya 86 tertulis sebagai 66. Rata-rata nilai ujian yang sebenarnya dari 20 siswa tersebut adalah...",
                    opts: [
                        "74,5",
                        "75,0",
                        "75,5",
                        "76,0"
                    ],
                    ans: 1,
                    exp: "Selisih kekurangan nilai akibat salah catat = 86 - 66 = +20 poin. Tambahan rata-rata untuk 20 siswa = 20 / 20 = +1,0. Maka rata-rata sebenarnya = 74 + 1,0 = 75,0."
                },
                {
                    q: "Sebuah kantor cabang memiliki 40 karyawan tetap dengan rata-rata masa kerja 9 tahun dan 10 karyawan kontrak dengan rata-rata masa kerja 4 tahun. Rata-rata masa kerja seluruh karyawan di kantor cabang tersebut adalah...",
                    opts: [
                        "6,5 tahun",
                        "7,5 tahun",
                        "8,0 tahun",
                        "8,5 tahun"
                    ],
                    ans: 2,
                    exp: "Rata-rata gabungan = (40 × 9 + 10 × 4) / (40 + 10) = (360 + 40) / 50 = 400 / 50 = 8,0 tahun."
                },
                {
                    q: "Sekumpulan data pengamatan suhu memiliki nilai rata-rata 50 dan jangkauan (range) 12. Jika setiap nilai data dalam kumpulan tersebut dikalikan 2 kemudian dikurangi 15, maka nilai rata-rata dan jangkauan yang baru berturut-turut adalah...",
                    opts: [
                        "85 dan 9",
                        "85 dan 24",
                        "100 dan 9",
                        "100 dan 24"
                    ],
                    ans: 1,
                    exp: "Ukuran pemusatan (rata-rata) berubah oleh perkalian maupun pengurangan: x̄_baru = 2(50) - 15 = 85. Ukuran penyebaran (jangkauan) hanya berubah oleh perkalian dan tidak dipengaruhi pengurangan: R_baru = 2 × 12 = 24."
                },
                {
                    q: "Waktu tunggu pelayanan lima orang nasabah di sebuah bank (dalam menit) tercatat sebagai berikut: 4, 6, 8, 10, 12. Simpangan rata-rata dari data waktu tunggu tersebut adalah...",
                    opts: [
                        "2,0 menit",
                        "2,4 menit",
                        "2,8 menit",
                        "3,0 menit"
                    ],
                    ans: 1,
                    exp: "Rata-rata x̄ = (4 + 6 + 8 + 10 + 12) / 5 = 8 menit. Simpangan rata-rata SR = (|4 - 8| + |6 - 8| + |8 - 8| + |10 - 8| + |12 - 8|) / 5 = (4 + 2 + 0 + 2 + 4) / 5 = 12 / 5 = 2,4 menit."
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
                },
                {
                    q: "Sebuah kotak penyimpanan berisi 5 bola lampu LED yang berfungsi baik dan 3 bola lampu LED yang putus (rusak). Jika seorang teknisi mengambil 2 bola lampu sekaligus secara acak dari dalam kotak tersebut, peluang bahwa KEDUA bola lampu yang terambil semuanya berfungsi baik adalah...",
                    opts: [
                        "3/14",
                        "5/14",
                        "15/28",
                        "5/8"
                    ],
                    ans: 1,
                    exp: "Banyak cara mengambil 2 lampu baik dari 5 lampu baik = C(5, 2) = (5 × 4)/2 = 10 cara. Banyak cara mengambil 2 lampu dari total 8 lampu = C(8, 2) = (8 × 7)/2 = 28 cara. Peluang = 10 / 28 = 5/14."
                },
                {
                    q: "Pengelola sebuah kedai es krim memperkirakan bahwa pada akhir pekan peluang cuaca cerah adalah 0,70 dan peluang turun hujan adalah 0,30. Apabila cuaca cerah, kedai akan memperoleh keuntungan bersih Rp1.200.000,00; sedangkan apabila turun hujan, kedai hanya memperoleh keuntungan bersih Rp200.000,00. Nilai harapan (ekspektasi matematis) keuntungan bersih kedai tersebut pada akhir pekan adalah...",
                    opts: [
                        "Rp700.000,00",
                        "Rp840.000,00",
                        "Rp900.000,00",
                        "Rp1.000.000,00"
                    ],
                    ans: 2,
                    exp: "Ekspektasi keuntungan E(X) = P(cerah)·Untung(cerah) + P(hujan)·Untung(hujan) = (0,70 × Rp1.200.000,00) + (0,30 × Rp200.000,00) = Rp840.000,00 + Rp60.000,00 = Rp900.000,00."
                },
                {
                    q: "Dari 100 pasien yang memeriksakan diri di sebuah klinik, tercatat 60 pasien mengalami gejala demam, 50 pasien mengalami gejala batuk, dan 30 pasien mengalami kedua gejala tersebut sekaligus. Jika dipilih 1 rekam medis pasien secara acak dari 100 pasien tersebut, peluang terpilihnya pasien yang mengalami gejala demam ATAU batuk adalah...",
                    opts: [
                        "0,60",
                        "0,70",
                        "0,80",
                        "0,90"
                    ],
                    ans: 2,
                    exp: "Gunakan rumus gabungan dua kejadian: n(D ∪ B) = n(D) + n(B) - n(D ∩ B) = 60 + 50 - 30 = 80 pasien. Maka peluangnya P(D ∪ B) = 80 / 100 = 0,80."
                },
                {
                    q: "Data historis sebuah maskapai penerbangan menunjukkan bahwa peluang seorang calon penumpang yang telah membeli tiket batal hadir (no-show) saat jadwal keberangkatan adalah 0,05. Jika untuk sebuah jadwal penerbangan telah terjual 400 tiket, maka frekuensi harapan jumlah penumpang yang benar-benar HADIR ikut terbang adalah...",
                    opts: [
                        "360 penumpang",
                        "375 penumpang",
                        "380 penumpang",
                        "395 penumpang"
                    ],
                    ans: 2,
                    exp: "Peluang penumpang hadir = 1 - 0,05 = 0,95. Frekuensi harapan penumpang hadir = 0,95 × 400 = 380 penumpang."
                },
                {
                    q: "Sebuah koper dikunci dengan kode kombinasi 3 digit angka (masing-masing digit dari 0 sampai 9). Pemilik koper lupa kombinasi lengkapnya, tetapi ia yakin bahwa digit pertama adalah angka 7, digit kedua adalah bilangan prima satu angka (2, 3, 5, atau 7), dan digit ketiga adalah angka genap (0, 2, 4, 6, atau 8). Jika ia mencoba satu kombinasi yang memenuhi ingatannya secara acak, peluang koper langsung terbuka pada percobaan pertama adalah...",
                    opts: [
                        "1/16",
                        "1/20",
                        "1/25",
                        "1/40"
                    ],
                    ans: 1,
                    exp: "Banyak pilihan digit pertama = 1 (angka 7), digit kedua = 4 (2, 3, 5, 7), dan digit ketiga = 5 (0, 2, 4, 6, 8). Total kombinasi yang mungkin = 1 × 4 × 5 = 20 kombinasi. Peluang berhasil pada percobaan pertama = 1/20."
                },
                {
                    q: "Dalam seleksi penerimaan beasiswa riset, peluang Andi lulus ujian tertulis adalah 0,80 dan peluang lulus ujian wawancara adalah 0,75. Apabila kelulusan kedua ujian tersebut bersifat saling bebas dan peserta wajib lulus keduanya untuk meraih beasiswa, maka peluang Andi berhasil meraih beasiswa tersebut adalah...",
                    opts: [
                        "0,55",
                        "0,60",
                        "0,65",
                        "0,70"
                    ],
                    ans: 1,
                    exp: "Untuk dua kejadian saling bebas, peluang lulus keduanya adalah P(A ∩ B) = P(A) × P(B) = 0,80 × 0,75 = 0,60."
                },
                {
                    q: "Sebuah pabrik baterai memiliki dua lini mesin produksi. Lini I menghasilkan 60% dari total produksi harian dengan persentase baterai cacat sebesar 2%. Lini II menghasilkan 40% dari total produksi harian dengan persentase baterai cacat sebesar 5%. Jika diambil 1 unit baterai secara acak dari total produksi harian pabrik tersebut, peluang terambilnya baterai yang CACAT adalah...",
                    opts: [
                        "0,024",
                        "0,028",
                        "0,032",
                        "0,035"
                    ],
                    ans: 2,
                    exp: "Gunakan peluang total: P(Cacat) = P(Lini I)·P(Cacat|Lini I) + P(Lini II)·P(Cacat|Lini II) = (0,60 × 0,02) + (0,40 × 0,05) = 0,012 + 0,020 = 0,032."
                }
            ]
        }
    ]
};
