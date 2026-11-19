// Data Narasi Guru & Audio untuk Sub-bab 1: Aljabar Polinomial & Vieta Olimpiade
module.exports = {
    audioTracks: [
        {
            title: "Poin 1: Teorema Vieta Derajat Tinggi",
            desc: "Dengarkan intuisi fungsi simetris, trik pembalik variabel, dan eliminasi pencarian akar eksplisit",
            src: "/storage/audio/matematika/kelas-11/olimpiade/aljabar-poin-1-vieta-derajat-tinggi.mp3",
            text: "Selamat datang di modul aljabar olimpiade matematika SMA kelas 11. Di poin pertama ini, kita membedah Teorema Vieta untuk polinomial berderajat tiga atau lebih. Pesan paling penting dari pembina olimpiade adalah: jangan pernah tergoda mencari nilai akar-akarnya satu per satu! Dalam seleksi OSN, akar-akar dari polinomial berderajat tinggi hampir selalu berupa bilangan irasional rumit atau bilangan kompleks. Yang diuji oleh juri bukanlah kemampuan Anda menghitung manual yang melelahkan, melainkan kejelian Anda mengeksploitasi fungsi simetris dasar dari koefisien persamaannya. Perhatikan pola tanda bergantian: minus, plus, minus, plus. Suku s1 adalah minus an minus satu per an. Suku s2 adalah an minus dua per an, dan seterusnya hingga hasil kali seluruh akar sn adalah minus satu dipangkatkan n dikali a nol per an. Dari fungsi simetris dasar ini, kita bisa menghitung jumlahan kuadrat, jumlahan kubik, hingga jumlahan kebalikan akar. Trik rahasia untuk jumlahan kebalikan akar: daripada menyamakan penyebut, lakukan substitusi variabel x sama dengan satu per y, yang secara otomatis membalik urutan koefisien polinomial. Dengan trik ini, jumlahan kebalikan akar langsung terjawab hanya dalam satu detik!"
        },
        {
            title: "Poin 2: Senjata Rekursif Newton's Sums",
            desc: "Dengarkan cara cepat menghitung jumlahan pangkat tinggi akar tanpa ekspansi multinomial",
            src: "/storage/audio/matematika/kelas-11/olimpiade/aljabar-poin-2-newton-sums-rekursif.mp3",
            text: "Di poin kedua ini, kita mempelajari senjata legendaris aljabar olimpiade yaitu Rumus Rekursi Newton atau Newton's Sums. Bayangkan di ruang ujian Anda diminta menghitung jumlahan akar berpangkat lima, a pangkat lima tambah b pangkat lima tambah c pangkat lima. Jika Anda mencoba menggunakan ekspansi multinomial atau aljabar biasa, Anda akan membuang waktu lebih dari 20 menit dan sangat rentan salah tanda. Newton's Sums memberikan jalan pintas yang sangat brilian. Karena setiap akar memenuhi persamaan awal, kita cukup mengalikan persamaan tersebut dengan x pangkat k lalu menjumlahkannya untuk seluruh akar. Hubungan rekursif yang tercipta memungkinkan kita melangkah dari pangkat rendah ke pangkat tinggi secara bertahap: P1, lalu P2, P3, P4, hingga P5. Hati-hati dengan satu jebakan fatal: nilai awal P nol bernilai n, yaitu banyaknya akar, bukan nol atau satu! Jika P nol Anda salah, maka seluruh rantai perhitungan berikutnya akan hancur. Kuasai rekursi ini, maka soal pangkat tinggi tingkat provinsi dapat Anda tuntaskan dalam hitungan baris!"
        },
        {
            title: "Poin 3: Keterbagian Polinomial Bulat ℤ[x]",
            desc: "Dengarkan logika pembuktian keterbagian a - b membagi P(a) - P(b) dan kontradiksi siklik",
            src: "/storage/audio/matematika/kelas-11/olimpiade/aljabar-poin-3-keterbagian-polinomial-bulat.mp3",
            text: "Poin ketiga membahas sifat keterbagian untuk polinomial berkoefisien bulat, atau elemen dari Z x. Teorema kuncinya sangat ringkas namun mematikan: untuk sembarang bilangan bulat a dan b yang berbeda, a minus b selalu membagi habis P a dikurang P b. Mengapa ini selalu benar? Karena setiap suku an dikali a pangkat n dikurang b pangkat n selalu memiliki faktor aljabar a minus b. Senjata ini sangat ampuh untuk membuktikan bahwa suatu persamaan polinomial bulat tidak memiliki solusi. Contoh klasik olimpiade: buktikan tidak ada polinomial bulat yang memenuhi P a sama dengan b, P b sama dengan c, dan P c sama dengan a untuk tiga bilangan bulat berbeda. Dengan sifat keterbagian, kita mendapatkan rantai keterbagian siklik yang memaksa selisih mutlak ketiganya sama besar. Namun karena jumlahan ketiga selisih tersebut harus nol, kondisi ini memicu kontradiksi matematis yang mutlak. Pelajari juga Kriteria Eisenstein di slide ini untuk menguji apakah suatu polinomial dapat difaktorkan atau tidak."
        },
        {
            title: "Poin 4: Rekayasa Polinomial Selisih Monik",
            desc: "Dengarkan trik menghindari sistem persamaan linear dengan membentuk fungsi pembantu Q(x)",
            src: "/storage/audio/matematika/kelas-11/olimpiade/aljabar-poin-4-fungsi-selisih-monik.mp3",
            text: "Di poin keempat, kita membahas strategi rekayasa aljabar tingkat master: membuat fungsi selisih pembantu Q x sama dengan P x dikurang g x. Pola soal olimpiade yang sangat umum adalah memberikan nilai polinomial di beberapa titik terurut, misalnya P satu sama dengan 10, P dua sama dengan 20, P tiga sama dengan 30, dan P empat sama dengan 40 untuk polinomial monik berderajat empat. Peserta pemula akan memisalkan P x sama dengan a x pangkat empat tambah b x pangkat tiga dan seterusnya, lalu terjebak dalam sistem persamaan linear empat variabel yang melelahkan. Juara olimpiade melihat polanya: nilai P x selalu sama dengan 10x pada keempat titik tersebut! Maka definisikan Q x sama dengan P x dikurang 10x. Karena nilainya nol pada x satu, dua, tiga, dan empat, maka keempat titik itu adalah akar-akar langsung dari Q x! Bentuk faktorisasi Q x langsung diketahui seketika tanpa eliminasi apa pun. Dengan trik fungsi selisih ini, Anda bisa mencari nilai di titik mana pun hanya dalam tiga baris perhitungan yang sangat elegan."
        },
        {
            title: "Poin 5: Panduan Evaluasi Aljabar Polinomial",
            desc: "Dengarkan tips eliminasi opsi, checklist verifikasi akar, dan taktik kuis aljabar OSN",
            src: "/storage/audio/matematika/kelas-11/olimpiade/aljabar-poin-5-kuis-evaluasi-aljabar.mp3",
            text: "Selamat tiba di kuis evaluasi aljabar polinomial kompetisi OSN! Di slide penutup ini, Anda disajikan soal-soal pilihan ganda berstandar seleksi yang dirancang khusus untuk menguji ketajaman intuisi aljabar Anda. Sebelum mulai menjawab, ingat tiga pedoman taktis dari pembina: pertama, pada soal Teorema Vieta, selalu periksa apakah Anda diminta mencari akar atau fungsi simetrisnya. Manfaatkan bentuk kebalikan akar dan pergeseran variabel. Kedua, pada soal rekursi Newton, hitung nilai awal P nol, P satu, dan P dua dengan teliti sebelum melompat ke pangkat yang lebih tinggi. Dan ketiga, pada soal nilai polinomial di beberapa titik, selalu cari pola fungsinya terlebih dahulu sebelum tergoda melakukan eliminasi koefisien. Kerjakan kuis ini secara mandiri, baca pembahasannya dengan cermat, dan bersiaplah melangkah ke sub-materi berikutnya yaitu Teori Bilangan dan Persamaan Diophantine!"
        }
    ],

    // Narasi tambahan yang disisipkan ke masing-masing slide
    slide1Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI PENJELASAN & INTUISI GURU -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">💡</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Eksploitasi Simetri Tanpa Mencari Akar</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Strategi membaca koefisien Vieta, eliminasi variabel, &amp; trik pembalik akar</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(0)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal:</strong> Diberikan persamaan polinomial kubik $x^3 - 4x^2 + 2x - 7 = 0$ dengan akar-akar $a, b,$ dan $c$. Hitung nilai dari jumlahan kuadrat $a^2 + b^2 + c^2$ dan hasil kali pergeseran $(a+1)(b+1)(c+1)$.
                                </p>

                                <!-- Kenapa cara biasa gagal -->
                                <div class="p-3.5 bg-white/90 rounded-xl border border-rose-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-rose-900 text-xs flex items-center gap-1.5">
                                        <span>⚠️</span> <span>Jebakan Terbesar: Tergoda Mencari Nilai Akar Eksplisit</span>
                                    </div>
                                    <p class="text-slate-600">
                                        Peserta yang panik sering kali mencoba mencari akar dengan uji faktor rasional $\pm 1, \pm 7$ atau rumus Cardano.
                                    </p>
                                    <p class="text-[11px] text-rose-800 bg-rose-50/80 p-2.5 rounded-lg leading-relaxed">
                                        <strong>Fakta di Lapangan:</strong> Polinomial di atas tidak memiliki akar rasional! Ketiga akarnya berupa kombinasi irasional dan kompleks yang sangat mengerikan jika dihitung terpisah. Juri olimpiade sengaja mendesain soal ini agar diselesaikan <strong>murni melalui struktur simetris koefisien</strong>.
                                    </p>
                                </div>

                                <!-- Narasi Logika Guru -->
                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Narasi Penjelasan &amp; Intuisi Langkah demi Langkah:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Ekstraksi Koefisien Simetris Dasar (Vieta):</strong><br>
                                                Dari $P(x) = x^3 - 4x^2 + 2x - 7$, kita peroleh:
                                                $$s_1 = a+b+c = -(-4)/1 = 4, \quad s_2 = ab+bc+ca = 2/1 = 2, \quad s_3 = abc = -(-7)/1 = 7$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Hitung Jumlahan Kuadrat Tanpa Mengetahui Akarnya:</strong><br>
                                                Gunakan identitas kuadrat sempurna: $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$.
                                                Maka: $a^2 + b^2 + c^2 = s_1^2 - 2s_2 = 4^2 - 2(2) = 16 - 4 = \mathbf{12}$. Tuntas dalam 1 baris!
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Trik Evaluasi Nilai Khusus untuk $(a+1)(b+1)(c+1)$:</strong><br>
                                                Jangan kalikan satu per satu! Perhatikan bahwa $(x-a)(x-b)(x-c) = P(x)$.<br>
                                                Jika kita masukkan $x = -1$, maka:
                                                $$(-1-a)(-1-b)(-1-c) = P(-1) \implies -(a+1)(b+1)(c+1) = P(-1)$$
                                                Sehingga $(a+1)(b+1)(c+1) = -P(-1) = -[(-1)^3 - 4(-1)^2 + 2(-1) - 7] = -[-1 - 4 - 2 - 7] = -(-14) = \mathbf{14}$!
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Trik Kilat Kebalikan Akar -->
                                <div class="p-3.5 bg-amber-100/70 rounded-xl border border-amber-300 space-y-1.5">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>⚡</span> <span>Trik Kilat: Menghitung Kebalikan Akar via Pembalikan Koefisien</span>
                                    </div>
                                    <p class="text-slate-700">
                                        Jika ditanyakan $\frac{1}{a} + \frac{1}{b} + \frac{1}{c}$, lakukan transformasi $y = \frac{1}{x}$. Persamaan polinomial bagi $y$ diperoleh cukup dengan <strong>membalik urutan koefisien</strong>:
                                        $$-7y^3 + 2y^2 - 4y + 1 = 0 \iff 7y^3 - 2y^2 + 4y - 1 = 0$$
                                        Jumlahan akarnya adalah $y_1 + y_2 + y_3 = -(-2)/7 = \mathbf{\frac{2}{7}}$. Sangat instan dan bebas risiko salah samakan penyebut!
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide2Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI PENJELASAN NEWTON'S SUMS -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">⚡</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Senjata Rekursif Newton's Sums</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Menembus jumlahan pangkat tinggi $P_k = \sum r_i^k$ tanpa ekspansi multinomial</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(1)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal:</strong> Diberikan persamaan $x^3 - 2x^2 + x - 3 = 0$ dengan akar-akar $p, q, r$. Tentukan nilai dari $p^4 + q^4 + r^4$.
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-rose-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-rose-900 text-xs flex items-center gap-1.5">
                                        <span>⚠️</span> <span>Mengapa Aljabar Konvensional Membuang Waktu?</span>
                                    </div>
                                    <p class="text-slate-600">
                                        Menghitung $p^4 + q^4 + r^4$ dengan menguadratkan $(p^2+q^2+r^2)^2$ menuntut Anda mencari suku silang $(pq)^2 + (qr)^2 + (rp)^2$, yang kembali memerlukan penjabaran panjang. Pada soal berpangkat 5 atau 6, cara ini dijamin gagal selesai tepat waktu.
                                    </p>
                                </div>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Narasi Logika Eksekusi Rekursi Newton:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Ubah Persamaan Menjadi Relasi Rekursi:</strong><br>
                                                Karena $x^3 = 2x^2 - x + 3$, kalikan dengan $x^{k-3}$ untuk mendapatkan relasi barisan:
                                                $$P_k = 2P_{k-1} - P_{k-2} + 3P_{k-3} \quad (\text{untuk } k \ge 3)$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Siapkan Nilai Awal yang Benar (Awas $P_0$!):</strong><br>
                                                &bull; $P_0 = p^0 + q^0 + r^0 = 1 + 1 + 1 = \mathbf{3}$ (Derajat polinomial, bukan 0!)<br>
                                                &bull; $P_1 = p + q + r = -(-2)/1 = \mathbf{2}$<br>
                                                &bull; $P_2 = P_1^2 - 2s_2 = 2^2 - 2(1) = 4 - 2 = \mathbf{2}$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Melompat ke $P_3$ dan $P_4$:</strong><br>
                                                $$P_3 = 2P_2 - P_1 + 3P_0 = 2(2) - 2 + 3(3) = 4 - 2 + 9 = \mathbf{11}$$
                                                $$P_4 = 2P_3 - P_2 + 3P_1 = 2(11) - 2 + 3(2) = 22 - 2 + 6 = \mathbf{26}$$
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-semibold text-[11px]">
                                    ✓ Nilai $p^4 + q^4 + r^4 = \mathbf{26}$ didapatkan hanya dengan aritmetika dasar 1 digit tanpa risiko salah aljabar!
                                </div>
                            </div>
                        </div>`,

    slide3Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI PENJELASAN KETERBAGIAN BULAT -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🛡️</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Keterbagian Polinomial Bulat &amp; Pembuktian Kontradiksi</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Pemanfaatan relasi $(a-b) \mid (P(a)-P(b))$ pada permasalahan bilangan bulat</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(2)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal (OSN-K):</strong> Tentukan seluruh bilangan bulat $n$ sedemikian sehingga $n - 2$ membagi habis nilai dari $P(n) = n^3 - 2n + 7$.
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Narasi Reduksi ke Konstanta Numerik:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Gunakan Teorema Sisa / Keterbagian:</strong><br>
                                                Berdasarkan teorema keterbagian: $(n - 2)$ selalu membagi habis $[P(n) - P(2)]$.
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Hitung Nilai $P(2)$ Secara Eksplisit:</strong><br>
                                                $$P(2) = 2^3 - 2(2) + 7 = 8 - 4 + 7 = \mathbf{11}$$
                                                Karena $(n - 2) \mid [P(n) - 11]$, maka $(n - 2) \mid P(n)$ jika dan hanya jika <strong>$(n - 2)$ membagi habis $11$</strong>!
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Daftar Seluruh Faktor Pembagi Bulat dari 11:</strong><br>
                                                Karena 11 bilangan prima, faktor bulatnya hanyalah $\{\pm 1, \pm 11\}$.<br>
                                                &bull; $n - 2 = 1 \implies n = 3$<br>
                                                &bull; $n - 2 = -1 \implies n = 1$<br>
                                                &bull; $n - 2 = 11 \implies n = 13$<br>
                                                &bull; $n - 2 = -11 \implies n = -9$<br>
                                                Himpunan solusi lengkap: $n \in \{-9, 1, 3, 13\}$.
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="p-3 bg-white/90 rounded-xl border border-slate-200 text-slate-700 space-y-1">
                                    <span class="font-bold text-slate-900 text-xs flex items-center gap-1">
                                        <span>💎</span> <span>Prinsip Kontradiksi Siklik pada OSN-P:</span>
                                    </span>
                                    <p class="text-[11px] text-slate-600 leading-relaxed">
                                        Jika suatu soal menyatakan $P(a) = b, P(b) = c, P(c) = a$ untuk $a,b,c \in \mathbb{Z}$ berbeda, maka:
                                        $$(a-b) \mid (b-c) \mid (c-a) \mid (a-b) \implies |a-b| = |b-c| = |c-a| = d > 0$$
                                        Namun jumlahan selisih $(a-b) + (b-c) + (c-a) = 0$. Tiga bilangan bernilai mutlak sama tidak mungkin berjumlah 0 (karena $\pm d \pm d \pm d \ne 0$). Terbukti mustahil secara mutlak!
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide4Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI FUNGSI SELISIH PEMBANTU -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🎯</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Rekayasa Fungsi Selisih Pembantu Q(x)</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Mengonstruksi akar-akar buatan untuk memusnahkan sistem persamaan linear</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(3)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal Master:</strong> Diberikan polinomial monik berderajat 3, $P(x)$, dengan $P(1) = 1, P(2) = \frac{1}{2}, P(3) = \frac{1}{3}$. Tentukan nilai dari $P(4)$!
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-rose-200/90 space-y-1.5 shadow-2xs">
                                    <div class="font-bold text-rose-900 text-xs flex items-center gap-1.5">
                                        <span>⚠️</span> <span>Perangkap Pecahan: Jangan Masukkan Langsung ke ax³ + bx² + cx + d</span>
                                    </div>
                                    <p class="text-slate-600">
                                        Pola nilai $1, \frac{1}{2}, \frac{1}{3}$ menggoda peserta untuk membuat eliminasi pecahan yang sangat rentan keliru. Trik olimpiade adalah <strong>menghilangkan penyebut variabel</strong> terlebih dahulu!
                                    </p>
                                </div>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Konstruksi Polinomial Pembantu Berderajat 4:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Perhatikan Hubungan Input dan Output:</strong><br>
                                                Untuk $x = 1, 2, 3$, berlaku hubungan $x \cdot P(x) = 1 \iff x \cdot P(x) - 1 = 0$.
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Definisikan Fungsi Baru $H(x)$:</strong><br>
                                                Misalkan $H(x) = x \cdot P(x) - 1$.<br>
                                                Karena $P(x)$ berderajat 3 monik, maka $H(x)$ berderajat 4 monik dengan akar-akar $1, 2, 3$, dan akar ke-4 kita misalkan $r$:
                                                $$H(x) = (x - 1)(x - 2)(x - 3)(x - r)$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Cari Akar Keempat ($r$) dengan Memasukkan $x = 0$:</strong><br>
                                                $$H(0) = 0 \cdot P(0) - 1 = -1$$
                                                Di sisi lain: $H(0) = (0-1)(0-2)(0-3)(0-r) = (-1)(-2)(-3)(-r) = 6r$.<br>
                                                Maka $6r = -1 \implies r = -\frac{1}{6}$.
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
                                            <div>
                                                <strong class="text-slate-900">Hitung $P(4)$ dengan Mudah:</strong><br>
                                                $$4 \cdot P(4) - 1 = H(4) = (4-1)(4-2)(4-3)\left(4 - \left(-\frac{1}{6}\right)\right) = (3)(2)(1)\left(\frac{25}{6}\right) = 25$$
                                                $$4 \cdot P(4) = 26 \implies P(4) = \frac{26}{4} = \mathbf{\frac{13}{2}}$$
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>`,

    slide5Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI EVALUASI -->
                        <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-700 space-y-2">
                            <div class="flex items-center justify-between pb-1.5 border-b border-amber-200/60">
                                <span class="font-bold text-amber-950 flex items-center gap-1.5">
                                    <span>💡</span> <span>Panduan Taktis Evaluasi &amp; Trik Kuis Aljabar OSN</span>
                                </span>
                                <button type="button" onclick="playCurrentSlideAudio(4)" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold transition shadow-xs text-[11px]">
                                    <span>🎙️</span> <span>Dengarkan Arahan Kuis</span>
                                </button>
                            </div>
                            <p class="leading-relaxed">
                                <strong>Checklist Mental Sebelum Memilih Jawaban:</strong><br>
                                1. <em>Soal Vieta:</em> Ingat pola tanda selang-seling $-, +, -$ dan trik membalik koefisien untuk kebalikan akar $\frac{1}{a}+\frac{1}{b}+\frac{1}{c} = \frac{s_{n-1}}{s_n}$.<br>
                                2. <em>Soal Fungsi Pembantu:</em> Identifikasi pola $P(x) - g(x) = c \prod (x - r_i)$ agar tidak terjebak eliminasi manual.<br>
                                3. <em>Soal Newton's Sums:</em> Pastikan $P_0 = n$ (banyaknya akar), bukan $0$ atau $1$.
                            </p>
                        </div>`
};
