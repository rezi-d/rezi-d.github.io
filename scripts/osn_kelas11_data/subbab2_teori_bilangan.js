// Data Narasi Guru & Audio untuk Sub-bab 2: Teori Bilangan & Persamaan Diophantine
module.exports = {
    audioTracks: [
        {
            title: "Poin 1: Algoritma Euclidean & Identitas Bézout",
            desc: "Dengarkan strategi pembalik sisa pembagian untuk menyusun solusi umum Diophantine linier",
            src: "/storage/audio/matematika/kelas-11/olimpiade/teoribilangan-poin-1-bezout.mp3",
            text: "Selamat datang di materi kedua olimpiade: Teori Bilangan dan Persamaan Diophantine. Di poin pertama ini, kita mempelajari Algoritma Euclidean dan Identitas Bézout. Ini adalah fondasi utama dari seluruh analisis persamaan Diophantine linier berbentukan ax tambah by sama dengan c. Syarat mutlak agar persamaan ini memiliki solusi bilangan bulat adalah faktor persekutuan terbesar FPB dari a dan b harus membagi habis konstanta c. Jika syarat keterbagian ini tidak terpenuhi, Anda bisa langsung menyimpulkan tidak ada solusi tanpa perlu menghitung lebih jauh. Langkah taktisnya: jalankan pembagian bertingkat Euclidean hingga sisa terakhir bernilai nol, lalu lakukan substitusi balik untuk mengekstrak sepasang solusi partikular x nol dan y nol. Dari sepasang solusi khusus ini, seluruh keluarga solusi bilangan bulat tak hingga dapat dirumuskan secara presisi. Kuasai mekanisme substitusi balik ini karena ini adalah modal awal yang wajib dikuasai setiap finalis OSN!"
        },
        {
            title: "Poin 2: Teorema Sisa Cina (CRT)",
            desc: "Dengarkan konstruksi invers modular dan unifikasi sistem kongruensi simultan",
            src: "/storage/audio/matematika/kelas-11/olimpiade/teoribilangan-poin-2-crt.mp3",
            text: "Di poin kedua, kita membedah Teorema Sisa Cina atau Chinese Remainder Theorem. Di ruang kompetisi, Anda sering disajikan teka-teki kuno: temukan bilangan bulat terkecil yang jika dibagi 3 bersisa 2, dibagi 5 bersisa 3, dan dibagi 7 bersisa 2. Mencari dengan mencoba satu per satu angka akan menghabiskan waktu berharga Anda. CRT menjamin adanya solusi unik dalam modulo perkalian ketiga pembagi tersebut, dengan syarat mutlak seluruh modulo harus saling prima atau koprima sepasang demi sepasang. Langkah pembina: hitung perkalian total M, tentukan sub-modulus Mi, lalu cari invers perkalian modular yi sedemikian rupa sehingga Mi dikali yi kongruen dengan satu modulo mi. Dengan mengalikan sisa bagi dengan masing-masing faktor pembobot ini, nilai solusi gabungan langsung ditemukan secara instan dan rigor.CRT adalah senjata paling mematikan untuk memecahkan sistem kongruensi simultan!"
        },
        {
            title: "Poin 3: Teorema Fermat & Totient Euler",
            desc: "Dengarkan teknik mereduksi eksponen raksasa dan eksploitasi siklus modulo",
            src: "/storage/audio/matematika/kelas-11/olimpiade/teoribilangan-poin-3-fermat-euler.mp3",
            text: "Poin ketiga membahas Teorema Kecil Fermat dan perumuman emasnya oleh Leonhard Euler melalui Fungsi Totient Phi. Saat menghadapi soal OSN yang menanyakan dua angka terakhir dari 7 dipangkatkan 2026, jangan pernah mencoba mengalikan manual! Dua angka terakhir berarti kita bekerja dalam modulo 100. Fungsi Totient Euler phi 100 bernilai 40. Teorema Euler menyatakan bahwa jika basis a dan modulo m saling prima, maka a dipangkatkan phi m selalu kongruen dengan satu modulo m. Ini berarti kita dapat langsung memotong eksponen 2026 dengan modulo 40! Sisa pangkatnya menyusut drastis menjadi hanya 26. Ditambah dengan sifat bahwa 7 pangkat 4 bernilai 2401 yang kongruen dengan satu modulo 100, eksponen raksasa tersebut runtuh seketika menyisakan 7 kuadrat yaitu 49. Ingat selalu: reduksi eksponen dengan phi m, bukan dengan m itu sendiri!"
        },
        {
            title: "Poin 4: Trik Penjerat Modulo & SFFT",
            desc: "Dengarkan trik mengurung persamaan non-linier dengan residu kuadrat dan faktorisasi Simon",
            src: "/storage/audio/matematika/kelas-11/olimpiade/teoribilangan-poin-4-residu-sfft.mp3",
            text: "Di poin keempat, kita mempelajari dua trik pembunuh persamaan Diophantine non-linier: Trik Penjerat Modulo Residu Kuadrat dan Simon's Favorite Factoring Trick atau SFFT. Di olimpiade, banyak persamaan yang tampaknya mustahil diselesaikan dengan aljabar biasa, seperti x kuadrat tambah y kuadrat sama dengan 3 dikali z kuadrat. Trik rahasianya: uji kedua ruas dalam modulo 3 atau modulo 4! Ingat kaidah emas ini di luar kepala: bilangan kuadrat sempurna hanya bisa bersisa 0 atau 1 jika dibagi 3 atau 4. Tidak ada kuadrat yang bersisa 2 atau 3! Dengan memeriksa kombinasi residu, Anda dapat membuktikan bahwa persamaan tersebut hanya memiliki solusi sepele nol nol nol melalui penurunan tak hingga Fermat. Senjata kedua adalah SFFT: mengubah bentuk xy tambah ax tambah by menjadi kurung x tambah b dikali y tambah a dengan menambahkan ab di kedua ruas. Bentuk perkalian faktor bulat ini langsung membatasi solusi menjadi sejumlah hingga pasangan faktor!"
        },
        {
            title: "Poin 5: Panduan Evaluasi Teori Bilangan",
            desc: "Dengarkan tips eliminasi opsi, checklist koprima, dan strategi kuis teori bilangan OSN",
            src: "/storage/audio/matematika/kelas-11/olimpiade/teoribilangan-poin-5-kuis-evaluasi.mp3",
            text: "Selamat tiba di kuis evaluasi teori bilangan dan persamaan Diophantine! Di slide penutup ini, ada tiga soal seleksi olimpiade yang menguji kejelian Anda menerapkan seluruh teori yang telah kita pelajari. Dengarkan panduan taktis pembina: pertama, pada soal digit terakhir atau sisa bagi pangkat besar, hitung fungsi totient phi m dan manfaatkan pembagi terdekat yang menghasilkan residu satu atau minus satu. Kedua, pada soal persamaan pecahan Diophantine seperti 1 per x tambah 1 per y sama dengan 1 per n, kalikan silang dan terapkan SFFT menjadi x minus n dikali y minus n sama dengan n kuadrat. Dan ketiga, pada kongruensi simultan, cari angka yang memenuhi dua kongruensi pertama sebelum menguji pada kongruensi ketiga. Kerjakan kuis ini secara cermat, baca ulasan rigornya, dan mari bersiap menuju materi Geometri dan Trigonometri Olimpiade Lanjutan!"
        }
    ],

    slide1Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI BÉZOUT & DIOPHANTINE -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🔑</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Algoritma Euclidean &amp; Solusi Umum Bézout</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Uji eksistensi FPB $\gcd(a, b) \mid c$ dan formulasi keluarga solusi tak hingga</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(0)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal:</strong> Tentukan seluruh pasangan bilangan bulat $(x, y)$ yang memenuhi persamaan Diophantine linier $23x + 17y = 5$.
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-rose-200/90 space-y-1.5 shadow-2xs">
                                    <div class="font-bold text-rose-900 text-xs flex items-center gap-1.5">
                                        <span>⚠️</span> <span>Langkah Pertama yang Wajib: Uji Syarat Keterbagian FPB</span>
                                    </div>
                                    <p class="text-slate-600">
                                        Berdasarkan Identitas Bézout: persamaan $ax + by = c$ <strong>memiliki solusi bulat jika dan hanya jika $\gcd(a, b) \mid c$</strong>. Karena $\gcd(23, 17) = 1$ dan $1 \mid 5$, maka persamaan dijamin memiliki tak terhingga banyaknya solusi bulat.
                                    </p>
                                </div>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Substitusi Balik Euclidean untuk Menemukan Solusi Khusus:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Jalankan Algoritma Pembagian Euclidean:</strong><br>
                                                $23 = 1 \cdot 17 + 6 \implies 6 = 23 - 17$<br>
                                                $17 = 2 \cdot 6 + 5 \implies 5 = 17 - 2(6)$<br>
                                                $6 = 1 \cdot 5 + 1 \implies 1 = 6 - 5$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Substitusi Balik untuk Mengekspresikan 1:</strong><br>
                                                $$1 = 6 - (17 - 2 \cdot 6) = 3(6) - 17 = 3(23 - 17) - 17 = 3(23) - 4(17)$$
                                                Diperoleh: $23(3) + 17(-4) = 1$.
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Kalikan dengan 5 untuk Memperoleh Solusi Partikular:</strong><br>
                                                $$23(15) + 17(-20) = 5 \implies x_0 = 15, \quad y_0 = -20$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
                                            <div>
                                                <strong class="text-slate-900">Formulasi Keluarga Solusi Umum:</strong><br>
                                                $$x = 15 + 17t, \quad y = -20 - 23t, \quad \forall t \in \mathbb{Z}$$
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>`,

    slide2Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI CHINESE REMAINDER THEOREM -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🏮</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Teorema Sisa Cina (CRT) Tanpa Tebakan</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Metode pembobot modular $M_i y_i \equiv 1 \pmod{m_i}$ &amp; unifikasi kongruensi</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(1)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal Klasik:</strong> Tentukan bilangan bulat positif terkecil $x$ sedemikian rupa sehingga:
                                    $$x \equiv 2 \pmod 3, \quad x \equiv 3 \pmod 5, \quad x \equiv 2 \pmod 7$$
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Trik Pemaduan Dua Kongruensi Tercepat:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Amati Sisa yang Identik (Trik Cepat):</strong><br>
                                                Perhatikan bahwa $x \equiv 2 \pmod 3$ dan $x \equiv 2 \pmod 7$ memiliki sisa yang sama yaitu 2! Karena $\gcd(3, 7) = 1$, kedua syarat ini langsung bergabung menjadi:
                                                $$x \equiv 2 \pmod{21} \implies x = 21k + 2$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Substitusikan ke Syarat Ketiga Modulo 5:</strong><br>
                                                $$21k + 2 \equiv 3 \pmod 5 \iff 1k + 2 \equiv 3 \pmod 5 \iff k \equiv 1 \pmod 5$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Hitung Nilai $x$ Terkecil:</strong><br>
                                                Ambil $k = 1$, maka:
                                                $$x = 21(1) + 2 = \mathbf{23}$$
                                                Solusi umum: $x \equiv 23 \pmod{105}$ (karena $3 \times 5 \times 7 = 105$).
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-semibold text-[11px]">
                                    ✓ Uji validitas: $23 = 7(3)+2$ (sisa 2), $23 = 4(5)+3$ (sisa 3), $23 = 3(7)+2$ (sisa 2). Terverifikasi 100% akurat!
                                </div>
                            </div>
                        </div>`,

    slide3Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI FERMAT & EULER TOTIENT -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">👑</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Reduksi Eksponen Raksasa Modulo m</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Mencari 2 digit terakhir via $\varphi(100)$ &amp; pemecahan pangkat cerdas</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(2)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal Ujian OSN:</strong> Tentukan dua digit terakhir dari bilangan $7^{2026}$.
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Langkah Dekomposisi Eksponen Bertingkat:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Terjemahkan ke Modulo 100:</strong><br>
                                                Dua digit terakhir suatu bilangan setara dengan mencari nilai sisanya dalam $\pmod{100}$.
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Hitung Nilai Totient Euler $\varphi(100)$:</strong><br>
                                                $100 = 2^2 \cdot 5^2 \implies \varphi(100) = 100 \left(1 - \frac{1}{2}\right)\left(1 - \frac{1}{5}\right) = 100 \cdot \frac{1}{2} \cdot \frac{4}{5} = \mathbf{40}$.<br>
                                                Karena $\gcd(7, 100) = 1$, maka $7^{40} \equiv 1 \pmod{100}$.
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Pangkas Pangkat dengan Siklus Modulo 40:</strong><br>
                                                $2026 = 50 \times 40 + 26 \implies 7^{2026} = (7^{40})^{50} \cdot 7^{26} \equiv 1^{50} \cdot 7^{26} \equiv 7^{26} \pmod{100}$.
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
                                            <div>
                                                <strong class="text-slate-900">Trik Kilat: $7^4 = 2401 \equiv 1 \pmod{100}$:</strong><br>
                                                Ternyata siklus sebenarnya jauh lebih pendek! $7^4 \equiv 1 \pmod{100}$.<br>
                                                Maka $7^{26} = (7^4)^6 \cdot 7^2 \equiv 1^6 \cdot 49 = \mathbf{49} \pmod{100}$.
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <p class="text-amber-900 font-bold bg-amber-100/60 p-2.5 rounded-lg border border-amber-200">
                                    💡 Dua digit terakhir dari $7^{2026}$ adalah <strong>49</strong>. Selesai tanpa menghitung angka besar!
                                </p>
                            </div>
                        </div>`,

    slide4Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI SFFT & RESIDU KUADRAT -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🛡️</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Simon's Favorite Factoring Trick (SFFT)</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Mengonversi persamaan perkalian variabel $xy + ax + by = c$ menjadi faktor bulat</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(3)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal:</strong> Tentukan banyaknya pasangan bilangan bulat positif $(x, y)$ yang memenuhi persamaan:
                                    $$\frac{1}{x} + \frac{1}{y} = \frac{1}{6}$$
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Eksekusi Kilat dengan SFFT:</span>
                                    </div>
                                    <ul class="space-y-2 text-slate-700">
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                                            <div>
                                                <strong class="text-slate-900">Hilangkan Penyebut Pecahan:</strong><br>
                                                Kalikan kedua ruas dengan $6xy$:
                                                $$6y + 6x = xy \iff xy - 6x - 6y = 0$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                                            <div>
                                                <strong class="text-slate-900">Rekayasa SFFT (Tambahkan $(-6) \times (-6) = 36$):</strong><br>
                                                $$xy - 6x - 6y + 36 = 36 \iff (x - 6)(y - 6) = 36$$
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                                            <div>
                                                <strong class="text-slate-900">Hitung Banyaknya Faktor Positif dari 36:</strong><br>
                                                Karena $x, y > 0$ dan $\frac{1}{x} < \frac{1}{6} \implies x > 6$, maka $(x-6)$ dan $(y-6)$ harus bernilai positif.<br>
                                                $36 = 2^2 \cdot 3^2 \implies d(36) = (2+1)(2+1) = \mathbf{9}$ pembagi positif.<br>
                                                Maka terdapat tepat <strong>9 pasangan bilangan bulat positif $(x, y)$</strong>!
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>`,

    slide5Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI EVALUASI TEORI BILANGAN -->
                        <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-700 space-y-2">
                            <div class="flex items-center justify-between pb-1.5 border-b border-amber-200/60">
                                <span class="font-bold text-amber-950 flex items-center gap-1.5">
                                    <span>💡</span> <span>Panduan Taktis Evaluasi &amp; Trik Kuis Teori Bilangan OSN</span>
                                </span>
                                <button type="button" onclick="playCurrentSlideAudio(4)" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold transition shadow-xs text-[11px]">
                                    <span>🎙️</span> <span>Dengarkan Arahan Kuis</span>
                                </button>
                            </div>
                            <p class="leading-relaxed">
                                <strong>Checklist Mental Sebelum Memilih Jawaban:</strong><br>
                                1. <em>Pangkat Besar:</em> Cari keteraturan $a^k \equiv \pm 1 \pmod m$ atau manfaatkan $\varphi(m)$.<br>
                                2. <em>Persamaan Pecahan:</em> Bentuk $(x - n)(y - n) = n^2$ via SFFT, lalu hitung jumlah pembagi $d(n^2)$.<br>
                                3. <em>Kongruensi Simultan:</em> Padukan kongruensi yang memiliki sisa serupa terlebih dahulu.
                            </p>
                        </div>`
};
