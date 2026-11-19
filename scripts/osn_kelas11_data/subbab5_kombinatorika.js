// Data Narasi Guru & Audio untuk Sub-bab 5: Kombinatorika Lanjutan & Teori Graf
module.exports = {
    audioTracks: [
        {
            title: "Poin 1: Prinsip Inklusi-Eksklusi & Derangement",
            desc: "Dengarkan formula selang-seling tanda PIE dan permutasi tanpa titik tetap !n",
            src: "/storage/audio/matematika/kelas-11/olimpiade/kombinatorika-poin-1-derangement.mp3",
            text: "Selamat datang di modul kelima: Kombinatorika Lanjutan dan Teori Graf. Di poin pertama ini, kita mempelajari Prinsip Inklusi-Eksklusi atau PIE dan konsep Derangement yang disimbolkan dengan tanda seru n atau subfaktorial. Bayangkan ada n orang tamu di sebuah pesta yang menaruh topinya di lemari. Ketika pulang dalam keadaan gelap gulita, setiap orang mengambil satu topi secara acak. Berapa peluang atau berapa banyak cara tidak ada satu pun orang yang mendapatkan kembali topinya sendiri? Inilah definisi derangement: permutasi di mana tidak ada elemen yang menempati posisi aslinya. Menggunakan prinsip inklusi-eksklusi dengan tanda selang-seling tambah, kurang, tambah, kurang, kita memperoleh formula ajaib subfaktorial Dn sama dengan n faktorial dikali jumlahan minus satu pangkat k per k faktorial. Untuk n sama dengan 4, nilainya adalah 9 cara. Trik olimpiade penting: ada rumus rekursi praktis yaitu Dn sama dengan n minus satu dikali Dn minus satu ditambah Dn minus dua. Hafalkan nilai D1 sampai D5 di luar kepala untuk menghemat waktu saat OSN-K!"
        },
        {
            title: "Poin 2: Teknik Double Counting",
            desc: "Dengarkan seni menghitung satu himpunan dari dua sudut pandang berbeda",
            src: "/storage/audio/matematika/kelas-11/olimpiade/kombinatorika-poin-2-double-counting.mp3",
            text: "Di poin kedua, kita membedah salah satu teknik paling puitis dan kuat dalam kombinatorika, yaitu Teknik Double Counting atau Penghitungan Ganda. Filosofi double counting sangat sederhana: jika Anda menghitung ukuran suatu himpunan yang sama dengan dua cara pandang yang berbeda, maka kedua hasil perhitungan tersebut haruslah bernilai identik. Keajaiban hadir ketika sudut pandang pertama menghasilkan jumlahan aljabar rumit, sementara sudut pandang kedua menghasilkan bentuk sederhana terfaktorkan. Misalnya, bayangkan sebuah panitia beranggotakan k orang yang dipilih dari n orang, dengan satu orang bertindak sebagai ketua. Jika Anda memilih anggota panitia terlebih dahulu lalu memilih ketuanya, Anda mendapatkan jumlahan kombinasi k dikali n kombinasi k. Tetapi jika Anda memilih ketua terlebih dahulu dari n orang lalu memilih sisa anggotanya dari n minus satu orang, hasilnya langsung bernilai n dikali dua pangkat n minus satu! Seketika tercipta identitas aljabar kombinatorika yang indah tanpa perlu induksi matematika yang panjang!"
        },
        {
            title: "Poin 3: Handshaking Lemma & Rumus Euler Graf",
            desc: "Dengarkan invarian paritas derajat simpul dan batas topologi planar V - E + F = 2",
            src: "/storage/audio/matematika/kelas-11/olimpiade/kombinatorika-poin-3-graf-euler.mp3",
            text: "Poin ketiga membawa kita masuk ke dunia Teori Graf melalui Lemma Jabat Tangan atau Handshaking Lemma dan Rumus Topologi Euler. Lemma Jabat Tangan menyatakan bahwa jika Anda menjumlahkan derajat dari seluruh simpul pada sebuah graf, hasilnya tepat sama dengan dua kali banyaknya sisi. Mengapa dikali dua? Karena setiap sisi menghubungkan tepat dua buah simpul, sehingga setiap satu sisi menyumbangkan tepat dua derajat pada total jumlahan. Konsekuensi paling krusial di olimpiade: banyaknya simpul yang memiliki derajat ganjil harus selalu berjumlah genap! Jika sebuah soal menanyakan apakah mungkin ada graf dengan 5 simpul yang masing-masing berderajat 3, Anda bisa langsung menjawab mustahil dalam 1 detik, karena 5 adalah bilangan ganjil. Untuk graf planar yang digambar di bidang datar tanpa ada sisi yang saling berpotongan, berlaku Rumus Euler V minus E tambah F sama dengan 2, di mana V adalah titik, E adalah sisi, dan F adalah bidang muka. Dari rumus ini diturunkan batas ketaksamaan sisi E kurang dari sama dengan 3V minus 6, yang menjadi bukti bahwa graf lengkap K5 tidak mungkin planar!"
        },
        {
            title: "Poin 4: Prinsip Ekstremal & Teorema Ramsey",
            desc: "Dengarkan strategi memilih elemen ekstrem (terbesar/terkecil) dan teori 6 orang pesta",
            src: "/storage/audio/matematika/kelas-11/olimpiade/kombinatorika-poin-4-ekstremal-ramsey.mp3",
            text: "Di poin keempat, kita mempelajari strategi pemecahan masalah tingkat tinggi: Prinsip Ekstremal dan Teorema Ramsey. Prinsip Ekstremal mengajarkan kita untuk selalu memulai analisis dengan memilih elemen yang ekstrem: elemen yang nilainya paling besar, paling kecil, titik yang paling luar, atau segmen garis yang paling pendek. Mengapa titik ekstrem ini sangat istimewa? Karena pada titik ekstrem, batasan ruang atau nilai mencapai titik jenuhnya, sehingga ruang kemungkinan gerak menjadi sangat terbatas dan mudah dianalisis. Konsep kedua adalah Teorema Ramsey yang sering dianalogikan dengan pesta 6 orang. Teorema ini menyatakan bahwa di antara 6 orang sembarang, selalu dipastikan ada setidaknya 3 orang yang saling kenal satu sama lain, atau 3 orang yang sama sekali saling tidak kenal. Keteraturan struktural semacam ini tidak bisa dihindari begitu ukuran himpunan melewati ambang batas tertentu. Ini adalah manifestasi matematis dari pepatah bahwa keteraturan lengkap adalah keniscayaan dalam kekacauan yang cukup besar!"
        },
        {
            title: "Poin 5: Panduan Evaluasi Kombinatorika & Graf",
            desc: "Dengarkan tips eliminasi opsi, checklist paritas derajat, dan eksekusi kuis graf OSN",
            src: "/storage/audio/matematika/kelas-11/olimpiade/kombinatorika-poin-5-kuis-evaluasi.mp3",
            text: "Selamat tiba di kuis evaluasi kombinatorika lanjutan dan teori graf! Di slide penutup ini, Anda disajikan tiga soal berbobot seleksi OSN. Dengarkan arahan taktis pembina: pertama, pada soal pengacakan atau posisi salah total, gunakan formula derangement subfaktorial Dn. Kedua, pada soal graf, selalu periksa paritas derajat ganjil dengan Handshaking Lemma. Jika jumlah simpul ganjil tidak genap, graf tersebut pasti fiktif dan mustahil ada. Dan ketiga, pada soal graf planar berwajah bidang, gunakan Rumus Euler V minus E tambah F sama dengan 2. Kerjakan kuis ini secara cermat, baca ulasan solusinya, dan mari kita masuki bab puncak persiapan kompetisi kita: Bedah Soal dan Strategi Penulisan Esai OSN-P!"
        }
    ],

    slide1Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI DERANGEMENT -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🎲</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Formula Derangement !n (Pengacakan Total)</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Permutasi tanpa titik tetap via PIE &amp; rekursi $D_n = (n-1)(D_{n-1} + D_{n-2})$</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(0)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal:</strong> Empat orang siswa mengumpulkan topi mereka. Topi dibagikan kembali secara acak. Berapa banyak cara pembagian agar tidak ada satu pun siswa yang menerima topinya sendiri?
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>⚡</span> <span>Eksekusi Cepat Formula Derangement $D_4$:</span>
                                    </div>
                                    <p class="text-slate-700 leading-relaxed">
                                        Gunakan formula subfaktorial untuk $n = 4$:
                                        $$D_4 = 4! \left( \frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} \right)$$
                                        $$D_4 = 24 \left( 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} \right) = 24 \left( \frac{12 - 4 + 1}{24} \right) = \mathbf{9}$$
                                        Terdapat tepat <strong>9 cara pembagian salah total</strong>!
                                    </p>
                                </div>

                                <div class="p-3 bg-amber-100/60 rounded-xl border border-amber-200 text-[11px] text-amber-950">
                                    💡 <strong>Tabel Derangement Wajib Hafal:</strong> $D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44, D_6 = 265$.
                                </div>
                            </div>
                        </div>`,

    slide2Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI DOUBLE COUNTING -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🪞</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Seni Double Counting Dua Sudut Pandang</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Membuktikan identitas kombinatorika aljabar tanpa induksi matematika</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(1)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Membuktikan $\sum_{k=1}^n k \binom{n}{k} = n 2^{n-1}$:</span>
                                    </div>
                                    <p class="text-slate-700 leading-relaxed">
                                        Tinjau suatu panitia dengan ukuran sembarang yang dipilih dari $n$ orang, dengan satu orang menjadi ketua.<br>
                                        &bull; <strong>Cara 1:</strong> Pilih ukuran panitia $k$ ($\binom{n}{k}$ cara), lalu pilih 1 ketua dari $k$ orang ($k$ cara). Jumlahkan: $\sum_{k=1}^n k \binom{n}{k}$.<br>
                                        &bull; <strong>Cara 2:</strong> Pilih ketuanya terlebih dahulu dari $n$ orang ($n$ cara), lalu untuk sisa $n-1$ orang lainnya, masing-masing bebas masuk atau tidak ke panitia ($2^{n-1}$ cara). Total: $n 2^{n-1}$.<br>
                                        Karena objek yang dihitung sama, maka <strong>keduanya identik</strong>!
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide3Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI HANDSHAKING & EULER GRAF -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🕸️</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Invarian Paritas Derajat Graf (Handshaking)</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Banyaknya simpul berderajat ganjil wajib selalu genap!</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(2)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal Ujian:</strong> Apakah mungkin terdapat sebuah graf sederhana yang memiliki 5 simpul dan masing-masing simpul memiliki tepat derajat 3?
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-rose-200/90 space-y-1.5 shadow-2xs">
                                    <div class="font-bold text-rose-900 text-xs flex items-center gap-1.5">
                                        <span>⚠️</span> <span>Uji Handshaking Lemma:</span>
                                    </div>
                                    <p class="text-slate-600 leading-relaxed">
                                        Berdasarkan Handshaking Lemma: $\sum_{v} \deg(v) = 2|E|$ (harus genap).<br>
                                        Jika ada 5 simpul berderajat 3, maka jumlah total derajat adalah: $5 \times 3 = 15$ (ganjil!).<br>
                                        Karena 15 adalah ganjil, maka graf tersebut <strong>mustahil ada di dunia nyata</strong>! Selesai dalam 5 detik.
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide4Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI EKSTREMAL & RAMSEY -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🎯</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Prinsip Ekstremal &amp; Teorema Ramsey $R(3,3)=6$</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Memilih elemen pembatas terkecil/terbesar &amp; keniscayaan keteraturan pesta</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(3)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Bukti Teorema 6 Orang di Pesta (Ramsey R(3,3)):</span>
                                    </div>
                                    <p class="text-slate-700 leading-relaxed">
                                        Ambil 1 orang sembarang, sebut $A$. Ada 5 orang lainnya.<br>
                                        Berdasarkan Prinsip Sangkar Burung (PHP): dari 5 orang tersebut, setidaknya ada <strong>3 orang yang kenal $A$</strong> atau <strong>3 orang yang tidak kenal $A$</strong> (karena $\lceil 5/2 \rceil = 3$).<br>
                                        Misalkan ada 3 orang $B, C, D$ yang kenal $A$. Jika ada sepasang di antara $B, C, D$ yang saling kenal (misal $B$ dan $C$), maka $A, B, C$ menjadi segitiga 3 orang yang saling kenal! Jika tidak ada sepasang pun di antara $B, C, D$ yang saling kenal, maka $B, C, D$ sendiri adalah segitiga 3 orang yang saling tidak kenal! Terbukti tuntas!
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide5Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI EVALUASI KOMBINATORIKA -->
                        <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-700 space-y-2">
                            <div class="flex items-center justify-between pb-1.5 border-b border-amber-200/60">
                                <span class="font-bold text-amber-950 flex items-center gap-1.5">
                                    <span>💡</span> <span>Panduan Taktis Evaluasi &amp; Trik Kuis Kombinatorika OSN</span>
                                </span>
                                <button type="button" onclick="playCurrentSlideAudio(4)" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold transition shadow-xs text-[11px]">
                                    <span>🎙️</span> <span>Dengarkan Arahan Kuis</span>
                                </button>
                            </div>
                            <p class="leading-relaxed">
                                <strong>Checklist Mental Sebelum Memilih Jawaban:</strong><br>
                                1. <em>Derangement:</em> $D_4 = 9, D_5 = 44$. Rumus: $D_n = (n-1)(D_{n-1} + D_{n-2})$.<br>
                                2. <em>Graf Paritas:</em> Jumlah simpul berderajat ganjil harus GENAP. Jika ganjil, graf mustahil ada.<br>
                                3. <em>Rumus Euler:</em> $V - E + F = 2$ untuk sembarang graf planar terhubung.
                            </p>
                        </div>`
};
