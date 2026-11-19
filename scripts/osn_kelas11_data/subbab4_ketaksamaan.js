// Data Narasi Guru & Audio untuk Sub-bab 4: Ketaksamaan & Deret Teleskopik Olimpiade
module.exports = {
    audioTracks: [
        {
            title: "Poin 1: Cauchy-Schwarz & Titu's Lemma",
            desc: "Dengarkan bentuk fraksional Engel untuk memusnahkan pecahan aljabar olimpiade",
            src: "/storage/audio/matematika/kelas-11/olimpiade/ketaksamaan-poin-1-titu.mp3",
            text: "Selamat datang di modul keempat: Ketaksamaan dan Deret Teleskopik Olimpiade. Di poin pertama ini, kita mempelajari Ketaksamaan Cauchy-Schwarz dan bentuk fraksionalnya yang sangat terkenal yaitu Titu's Lemma atau Engel Form. Di arena olimpiade, banyak sekali soal ketaksamaan pecahan yang menjebak peserta untuk menyamakan penyebut. Menyamakan penyebut adalah malapetaka aljabar yang memicu persamaan suku banyak derajat tinggi! Titu's Lemma hadir sebagai pembasmi pecahan aljabar: jumlahan pecahan dengan pembilang kuadrat ui kuadrat dibagi vi selalu lebih besar atau sama dengan kuadrat jumlahan seluruh pembilang dibagi jumlahan seluruh penyebut. Seluruh pembilang dikumpulkan menjadi satu kuadrat di atas, dan seluruh penyebut dijumlahkan secara linear di bawah. Jika pembilangnya belum kuadrat, gunakan trik memaksa bentuk kuadrat dengan mengalikan pembilang dan penyebut dengan variabel yang sama. Trik ini memotong waktu pengerjaan soal pembuktian OSN hingga 80 persen!"
        },
        {
            title: "Poin 2: Ketaksamaan Jensen & Konveksitas",
            desc: "Dengarkan analisis turunan kedua f''(x) ≥ 0 dan pembuktian ketaksamaan simetris",
            src: "/storage/audio/matematika/kelas-11/olimpiade/ketaksamaan-poin-2-jensen.mp3",
            text: "Di poin kedua, kita membedah Ketaksamaan Jensen dan analisis konveksitas kurva. Ketaksamaan Jensen menghubungkan nilai rata-rata fungsi dengan fungsi dari nilai rata-rata variabelnya. Untuk fungsi yang konveks atau cekung ke atas, yang ditandai dengan turunan kedua f double aksen x selalu lebih besar atau sama dengan nol pada intervalnya, berlaku bahwa rata-rata nilai fungsi selalu lebih besar atau sama dengan nilai fungsi di titik rata-rata variabel. Sebaliknya, untuk fungsi konkaf atau cekung ke bawah di mana turunan kedua kurang dari sama dengan nol, tandanya berbalik. Contoh paling legendaris adalah membuktikan bahwa jumlahan sinus A tambah sinus B tambah sinus C pada segitiga selalu bernilai maksimal tiga akar tiga per dua. Karena fungsi sinus adalah konkaf pada rentang nol hingga 180 derajat, Jensen langsung menyimpulkan bahwa nilai maksimum mutlak tercapai saat segitiga tersebut sama sisi, di mana A sama dengan B sama dengan C yaitu 60 derajat!"
        },
        {
            title: "Poin 3: Trik Penjumlahan Deret Teleskopik",
            desc: "Dengarkan pemecahan pecahan parsial dan keruntuhan beruntun suku-suku tengah",
            src: "/storage/audio/matematika/kelas-11/olimpiade/ketaksamaan-poin-3-teleskopik.mp3",
            text: "Poin ketiga membahas Trik Penjumlahan Deret Teleskopik. Bayangkan Anda disajikan deret yang terdiri dari ratusan bahkan ribuan suku pecahan. Menjumlahkan secara konvensional tentu mustahil. Kunci deret teleskopik adalah merekayasa suku umum ak menjadi selisih dari dua suku berturutan, yaitu bk dikurang bk tambah satu. Ketika seluruh suku dijumlahkan dari awal sampai akhir, seluruh suku tengah akan saling meniadakan atau cancel out seperti lipatan teropong teleskop yang dirapatkan! Yang tersisa hanyalah suku pertama di ujung awal dikurangi suku terakhir di ujung akhir. Pelajari tiga pola dekomposisi utama di slide ini: pertama, pecahan parsial satu per k dikali k tambah satu. Kedua, rasionalisasi bentuk akar satu per akar k tambah akar k tambah satu. Dan ketiga, deret teleskopik trigonometri arctan. Hati-hati memeriksa suku-suku sisa di ujung akhir agar tidak terpotong keliru!"
        },
        {
            title: "Poin 4: Trik Homogenisasi & Normalisasi",
            desc: "Dengarkan teknik menyetarakan derajat suku dan penetapan skala variabel a + b + c = 1",
            src: "/storage/audio/matematika/kelas-11/olimpiade/ketaksamaan-poin-4-homogenisasi.mp3",
            text: "Di poin keempat, kita mempelajari strategi penyetaraan skala aljabar: Homogenisasi dan Normalisasi. Suatu ketaksamaan disebut homogen jika setiap suku memiliki total derajat variabel yang identik. Keajaiban dari ketaksamaan homogen adalah nilainya invarian terhadap penskalaan variabel. Artinya, jika variabel a, b, dan c kita kalikan dengan sembarang konstanta positif k, bentuk ketaksamaan tidak akan berubah sama sekali! Berkat sifat invarian ini, kita berhak secara sah menetapkan asumsi normalisasi tanpa mengurangi keumuman masalah atau without loss of generality WLOG. Misalnya, kita dapat menetapkan jumlahan a tambah b tambah c sama dengan satu, atau hasil kali abc sama dengan satu. Normalisasi ini seketika menyederhanakan perhitungan yang rumit menjadi aljabar yang sangat ramah. Sebaliknya, jika soal memiliki syarat a tambah b tambah c sama dengan satu, kita dapat mengembalikan bentuknya menjadi homogen dengan menyisipkan faktor a tambah b tambah c!"
        },
        {
            title: "Poin 5: Panduan Evaluasi Ketaksamaan & Deret",
            desc: "Dengarkan tips eliminasi opsi, uji syarat kesamaan, dan eksekusi kuis ketaksamaan OSN",
            src: "/storage/audio/matematika/kelas-11/olimpiade/ketaksamaan-poin-5-kuis-evaluasi.mp3",
            text: "Selamat tiba di kuis evaluasi ketaksamaan dan deret teleskopik olimpiade! Di slide penutup ini, ada tiga soal pilihan ganda standar OSN. Dengarkan panduan taktis dari pembina: pertama, pada soal pecahan ketaksamaan, jangan pernah buru-buru menyamakan penyebut. Amati apakah Anda bisa mengerahkan Titu's Lemma dengan mengumpulkan pembilang kuadrat di atas. Kedua, pada deret pecahan bertingkat, lakukan dekomposisi pecahan parsial dan tuliskan tiga suku pertama serta dua suku terakhir secara berjajar untuk melihat pola saling menghilangkan. Dan ketiga, pada ketaksamaan trigonometri sudut segitiga, uji apakah fungsi bersifat konveks atau konkaf, lalu manfaatkan Ketaksamaan Jensen di mana titik kesamaan hampir selalu berada pada segitiga sama sisi. Kerjakan kuis ini dengan teliti, baca pembahasannya yang mendalam, dan mari melangkah ke materi Kombinatorika Lanjutan dan Teori Graf!"
        }
    ],

    slide1Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI TITU'S LEMMA -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">⚖️</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Titu's Lemma (Pembasmi Pecahan Aljabar)</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Bentuk fraksional Cauchy-Schwarz $\sum \frac{u_i^2}{v_i} \ge \frac{(\sum u_i)^2}{\sum v_i}$</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(0)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Pembuktian:</strong> Diberikan bilangan real positif $a, b, c > 0$ dengan $a + b + c = 1$. Buktikan bahwa:
                                    $$\frac{1}{a} + \frac{1}{b} + \frac{1}{c} \ge 9$$
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2.5 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>⚡</span> <span>Eksekusi Kilat 2 Baris via Titu's Lemma:</span>
                                    </div>
                                    <ul class="space-y-1.5 text-slate-700">
                                        <li>1. Ubah setiap pembilang menjadi bentuk kuadrat: $\frac{1^2}{a} + \frac{1^2}{b} + \frac{1^2}{c}$.</li>
                                        <li>2. Terapkan Titu's Lemma secara langsung:
                                            $$\frac{1^2}{a} + \frac{1^2}{b} + \frac{1^2}{c} \ge \frac{(1 + 1 + 1)^2}{a + b + c} = \frac{3^2}{1} = \mathbf{9}$$
                                        </li>
                                        <li>3. <strong>Uji Syarat Kesamaan:</strong> Kesamaan tercapai jika $\frac{1}{a} = \frac{1}{b} = \frac{1}{c} \iff a = b = c = \frac{1}{3}$. Selesai seketika!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`,

    slide2Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI JENSEN -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">📈</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Ketaksamaan Jensen pada Sudut Segitiga</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Memaksimalkan fungsi konkaf $\sin x$ &amp; penjaminan titik kesamaan simetris</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(1)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal:</strong> Untuk sembarang segitiga $ABC$, tentukan nilai maksimum dari $\sin A + \sin B + \sin C$!
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Uji Konveksitas &amp; Jensen:</span>
                                    </div>
                                    <p class="text-slate-700 leading-relaxed">
                                        Perhatikan $f(x) = \sin x$ pada interval $(0, \pi)$.<br>
                                        Turunan kedua: $f''(x) = -\sin x < 0$. Karena $f''(x) < 0$, maka $f(x)$ bersifat <strong>konkaf murni</strong>.<br>
                                        Berdasarkan Ketaksamaan Jensen untuk fungsi konkaf:
                                        $$\frac{\sin A + \sin B + \sin C}{3} \le \sin\left(\frac{A + B + C}{3}\right) = \sin\left(\frac{180^\circ}{3}\right) = \sin 60^\circ = \frac{\sqrt{3}}{2}$$
                                        $$\sin A + \sin B + \sin C \le \mathbf{\frac{3\sqrt{3}}{2}}$$
                                        Kesamaan tercapai saat segitiga sama sisi $A = B = C = 60^\circ$.
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide3Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI TELESKOPIK -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🔭</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Keruntuhan Deret Teleskopik Pecahan Parsial</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Dekomposisi suku $\frac{1}{k(k+2)} = \frac{1}{2}\left(\frac{1}{k} - \frac{1}{k+2}\right)$</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(2)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <p>
                                    <strong>Studi Kasus Soal:</strong> Hitung jumlah tak hingga deret: $S = \sum_{k=1}^\infty \frac{1}{k(k+2)}$.
                                </p>

                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>⚡</span> <span>Penjajaran Suku Teleskopik:</span>
                                    </div>
                                    <p class="text-slate-700 leading-relaxed">
                                        Pisahkan suku umum: $\frac{1}{k(k+2)} = \frac{1}{2}\left(\frac{1}{k} - \frac{1}{k+2}\right)$.<br>
                                        Tuliskan suku-sukunya dengan faktor $\frac{1}{2}$ di luar:
                                        $$S = \frac{1}{2} \left[ \left(1 - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{4} - \frac{1}{6}\right) + \dots \right]$$
                                        Seluruh suku dari $\frac{1}{3}$ dan seterusnya saling menghilangkan berpasangan!<br>
                                        Suku yang tersisa di awal hanyalah $1$ dan $\frac{1}{2}$:
                                        $$S = \frac{1}{2} \left(1 + \frac{1}{2}\right) = \frac{1}{2} \cdot \frac{3}{2} = \mathbf{\frac{3}{4}}$$
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide4Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI HOMOGENISASI -->
                        <div class="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-4 shadow-xs">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-amber-200/80 gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">💡</span>
                                    <div>
                                        <h3 class="font-bold text-amber-950 text-sm sm:text-base">Trik Olimpiade: Normalisasi WLOG &amp; Homogenisasi</h3>
                                        <p class="text-[11px] text-amber-800 font-medium">Penskalaan variabel bebas skala $a+b+c = 1$ untuk memangkas aljabar</p>
                                    </div>
                                </div>
                                <button type="button" onclick="playCurrentSlideAudio(3)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs self-start sm:self-auto shrink-0">
                                    <span>🎙️</span> <span>Dengarkan Narasi Suara</span>
                                </button>
                            </div>

                            <div class="text-xs text-slate-700 leading-relaxed space-y-3.5">
                                <div class="p-3.5 bg-white/90 rounded-xl border border-amber-200/90 space-y-2 shadow-2xs">
                                    <div class="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                                        <span>🧠</span> <span>Kapan Boleh Menetapkan $a+b+c=1$?</span>
                                    </div>
                                    <p class="text-slate-700 leading-relaxed">
                                        Normalisasi hanya sah jika ketaksamaan bersifat <strong>homogen derajatnya</strong>. Jika Anda mengalikan $a, b, c$ dengan konstanta $k > 0$ dan kedua ruas berubah dengan faktor $k^p$ yang sama di semua suku, maka skala nilai tidak berpengaruh terhadap validitas ketaksamaan. Asumsi $a+b+c=1$ atau $abc=1$ seketika membunuh variabel penyebut!
                                    </p>
                                </div>
                            </div>
                        </div>`,

    slide5Narasi: `
                        <!-- TRIK OLIMPIADE: NARASI EVALUASI KETAKSAMAAN -->
                        <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-700 space-y-2">
                            <div class="flex items-center justify-between pb-1.5 border-b border-amber-200/60">
                                <span class="font-bold text-amber-950 flex items-center gap-1.5">
                                    <span>💡</span> <span>Panduan Taktis Evaluasi &amp; Trik Kuis Ketaksamaan OSN</span>
                                </span>
                                <button type="button" onclick="playCurrentSlideAudio(4)" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold transition shadow-xs text-[11px]">
                                    <span>🎙️</span> <span>Dengarkan Arahan Kuis</span>
                                </button>
                            </div>
                            <p class="leading-relaxed">
                                <strong>Checklist Mental Sebelum Memilih Jawaban:</strong><br>
                                1. <em>Pecahan Aljabar:</em> Gunakan Titu's Lemma: $\sum \frac{u_i^2}{v_i} \ge \frac{(\sum u_i)^2}{\sum v_i}$.<br>
                                2. <em>Deret Pecahan:</em> Urai suku menjadi selisih $\frac{1}{k} - \frac{1}{k+d}$, lalu hitung suku awal yang tak tereliminasi.<br>
                                3. <em>Trigonometri Jensen:</em> Fungsi $\sin x$ adalah konkaf pada segitiga, nilai maksimum selalu dicapai pada segitiga sama sisi $60^\circ$.
                            </p>
                        </div>`
};
