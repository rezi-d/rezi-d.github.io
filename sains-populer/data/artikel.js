// =================================================================
// sains-populer/data/artikel.js
// Database Artikel Warta Sains Populer Berwawasan Kimia
// Web: https://kimia.ajarkita.my.id/sains-populer/
// =================================================================

const DAFTAR_ARTIKEL_SAINS = [
    {
        id: "tesla-roadster-terbang",
        slug: "tesla-roadster-terbang",
        title: "Mobil Terbang Tesla Roadster: Mengapa Elon Musk Pakai Gas Dingin & Bukan Api Roket?",
        subtitle: "Menyingkap rahasia kimia gas ideal, ikatan kovalen serat karbon, dan baterai daya tinggi di balik paket SpaceX Thruster yang bikin mobil melayang.",
        category: "Teknologi Masa Depan",
        categoryColor: "amber",
        icon: "🏎️",
        publishDate: "28 Oktober 2026",
        readTime: "5 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-indigo-950 to-amber-950",
            badge: "SpaceX Thruster × Kimia Gas",
            icon: "🚀"
        },
        summary: "Elon Musk mengklaim generasi baru Tesla Roadster mampu berakselerasi 0-100 km/jam dalam waktu kurang dari 1 detik dan bahkan bisa melompat/melayang singkat dengan paket pendorong roket SpaceX. Bukan bahan bakar roket cair yang terbakar, melainkan semburan gas dingin. Bagaimana kacamata kimia menjelaskan teknologi ini?",
        tahukahKamu: "Gas Nitrogen (N₂) menyusun sekitar 78% atmosfer bumi kita. Dua atom nitrogen terikat sangat kuat oleh ikatan kovalen rangkap tiga (N≡N) dengan energi disosiasi mencapai 945 kJ/mol. Itulah alasan mengapa nitrogen sangat stabil dan tidak mudah meledak saat dimampatkan hingga ribuan atmosfer!",
        kaitanMateri: [
            {
                kelas: "Kelas XI",
                bab: "Termokimia & Energi Ikatan",
                desc: "Ekspansi gas adiabatik dan energi pemutusan ikatan.",
                url: "/kelas-11/termokimia/energi-ikatan-dan-penentuan-entalpi.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Ikatan Kovalen",
                desc: "Ikatan kovalen rangkap tiga pada molekul N₂ dan rantai karbon.",
                url: "/kelas-11/ikatan-kimia/ikatan-kovalen.html"
            },
            {
                kelas: "Kelas XII",
                bab: "Sel Volta & Elektrokimia",
                desc: "Reaksi redoks dan laju pelepasan arus pada baterai litium daya tinggi.",
                url: "/kelas-12/sel-volta/anode-katode-potensial-sel.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Bayangkan sebuah mobil sport jalan raya yang tidak hanya menempel di aspal, tetapi mampu berakselerasi dari 0 hingga 100 km/jam hanya dalam hitungan <strong>0,9 detik</strong>, dan bahkan bisa melakukan manuver melompat singkat atau melayang di atas permukaan jalan. Itulah klaim ambisius Elon Musk untuk mobil <strong>Tesla Roadster</strong> dengan paket opsional pendorong roket <em>SpaceX Thruster</em>.
            </p>

            <p class="text-slate-700 leading-relaxed mb-6">
                Pertanyaan pertamanya: <em>Apakah mobil ini menyemburkan kobaran api roket yang membakar aspal dan mobil di belakangnya?</em> 
                Jawabannya: <strong>Sama sekali tidak!</strong> Di sinilah letak kejeniusan sains kimia dan fisika yang sering luput dari perhatian publik.
            </p>

            <div class="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80">
                <div class="flex items-start gap-3">
                    <span class="text-2xl select-none">💡</span>
                    <div>
                        <h4 class="font-bold text-amber-950 text-base mb-1">Konsep Kunci: Cold Gas Thruster (Pendorong Gas Dingin)</h4>
                        <p class="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                            Pendorong yang dipasang di bagian belakang Tesla Roadster bukanlah roket kimia berbahan bakar cair seperti kerosin atau hidrogen cair, melainkan sistem <strong>Cold Gas Thruster</strong> yang memanfaatkan semburan gas bertekanan luar biasa tinggi tanpa proses pembakaran sama sekali.
                        </p>
                    </div>
                </div>
            </div>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>1. Kimia Gas Ideal: Mengapa Memilih Nitrogen (N₂)?</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Sistem pendorong gas dingin ini bekerja dengan cara memampatkan gas hingga tekanan ekstrem sekitar <strong>10.000 psi</strong> (setara dengan hampir 700 kali tekanan atmosfer normal di permukaan laut). Saat katup elektroniknya dibuka dalam hitungan milidetik, gas akan menyembur keluar melalui nosel konvergen-divergen (De Laval Nozzle) dengan kecepatan supersonik, menghasilkan gaya dorong (<em>thrust</em>) ke depan sesuai Hukum Aksi-Reaksi Newton.
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Dari sudut pandang kimia, pemilihan gas sangatlah krusial:
            </p>

            <ul class="space-y-3 mb-6 pl-2">
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span><strong>Bukan Oksigen (O₂) atau Udara Biasa:</strong> Oksigen adalah gas pengoksidasi kuat. Pada tekanan 10.000 psi, jika ada residu oli atau pelumas sedikit saja di dalam saluran pipa, campuran oksigen murni dan pelumas hidrokarbon bisa meledak seketika secara spontan (<em>auto-ignition</em>).</span>
                </li>
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span><strong>Bukan Hidrogen (H₂):</strong> Walaupun hidrogen sangat ringan dan menghasilkan kecepatan buang tertinggi, molekul H₂ sangat kecil sehingga mudah merembes menembus kisi logam (<em>hydrogen embrittlement</em>) dan sangat rentan terbakar.</span>
                </li>
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span><strong>Dipilih Gas Nitrogen (N₂):</strong> Molekul N₂ memiliki <strong>ikatan kovalen rangkap tiga (N≡N)</strong> yang sangat kuat dengan energi ikatan 945 kJ/mol. Hal ini membuat nitrogen bersifat <em>inert</em> (sukar bereaksi), tidak korosif, tidak mudah meledak, berlimpah di udara bebas, dan aman bagi lingkungan.</span>
                </li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>2. Tangki COPV: Kekuatan Ikatan Kovalen Karbon</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Menampung gas pada tekanan 700 atmosfer di dalam mobil penumpang adalah tantangan maut. Tangki baja biasa akan sangat berat dan berbahaya jika retak karena bisa menghasilkan serpihan tajam layaknya granat.
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Solusinya adalah teknologi antariksa: <strong>COPV (Carbon Overwrapped Pressure Vessel)</strong>. Tabung ini menggunakan lapisan dalam tipis (*liner*) yang dibalut oleh ratusan ribu lilitan serat karbon (<em>carbon fiber</em>) yang diresapi resin polimer epoksi.
            </p>

            <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                <strong>🔬 Kacamata Ikatan Kimia:</strong> Atom-atom karbon di dalam serat karbon tersusun dalam hibridisasi sp² yang membentuk lembaran bidang heksagonal mirip grafena. Ikatan kovalen antar-atom karbon ini adalah salah satu ikatan terkuat di alam semesta, memberikan kekuatan tarik (<em>tensile strength</em>) 5 kali lebih kuat dari baja berkualitas tinggi, tetapi dengan massa yang 3 kali lebih ringan!
            </div>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>3. Elektrokimia Baterai: Menyalurkan Ribuan Ampere Tanpa Meleleh</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Untuk mengisi ulang tekanan tangki gas dingin tersebut saat mobil sedang melaju, Tesla menggunakan kompresor listrik berkecepatan tinggi yang ditenagai oleh baterai utama mobil.
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Secara kimia, menarik daya raksasa dari sel baterai dalam waktu singkat menciptakan tantangan <strong>resistensi internal</strong> dan <strong>panas Joule</strong> ($P = I^2 R$). Tesla mengembangkan teknologi sel 4680 dengan desain tabless (tanpa tab konvensional) serta anoda komposit <em>Silicon-Carbon</em>:
            </p>

            <ul class="space-y-2 mb-6 text-slate-700 pl-4 list-disc text-sm">
                <li><strong>Anoda Silikon:</strong> Secara teoritis, silikon mampu mengikat atom litium jauh lebih banyak ($Li_{15}Si_4$) dibandingkan grafit biasa ($LiC_6$), sehingga kapasitas energinya melonjak hingga hampir 10 kali lipat di tingkat material aktif anoda.</li>
                <li><strong>Jalur Tempuh Elektron Lebih Pendek:</strong> Arsitektur sel baterai baru memperpendek jarak yang harus ditempuh elektron saat reaksi redoks pelepasan muatan (<em>discharge</em>), sehingga suhu baterai tetap stabil dan tidak mengalami *thermal runaway*.</li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">Kesimpulan: Masa Depan Transportasi di Tangan Kimiawan</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Tesla Roadster bukan sekadar mobil cepat, melainkan laboratorium berjalan tempat bertemunya **termodinamika gas**, **rekayasa material polimer komposit**, dan **elektrokimia baterai generasi baru**. Setiap kali kamu melihat inovasi teknologi canggih di media sosial, ingatlah bahwa di balik keajaibannya selalu ada prinsip kimia fundamental yang sedang bekerja!
            </p>
        `,
        diskusi: "Menurutmu, apa tantangan terbesar jika mobil dengan pendorong gas dingin nitrogen ini digunakan sehari-hari di jalan raya yang macet di Indonesia? Bagaimana pengaruh suhu lingkungan tropis terhadap tekanan gas di dalam tangki COPV berdasarkan Hukum Gay-Lussac?"
    },
    {
        id: "nobel-kimia-ai-protein",
        slug: "nobel-kimia-ai-protein",
        title: "Nobel Kimia Terbaru: Saat AI Memecahkan 'Origami Molekul' Protein & Asam Amino",
        subtitle: "Mengapa David Baker, Demis Hassabis, dan John Jumper dianugerahi Nobel Kimia 2024? Kisah bagaimana kode komputer menguraikan rahasia 20 jenis asam amino.",
        category: "Nobel & Terobosan Sains",
        categoryColor: "teal",
        icon: "🧬",
        publishDate: "28 Oktober 2026",
        readTime: "6 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-teal-950 to-emerald-950",
            badge: "Nobel Kimia 2024 × AlphaFold",
            icon: "🏆"
        },
        summary: "Penghargaan Nobel Kimia 2024 dianugerahkan kepada David Baker atas desain komputasi protein, serta Demis Hassabis dan John Jumper (Google DeepMind) atas prediksi struktur protein melalui AlphaFold2. Mengapa penemuan berbasis kecerdasan buatan (AI) ini diakui sebagai salah satu terobosan kimia terbesar abad ini?",
        tahukahKamu: "Dalam tubuh manusia terdapat ratusan ribu jenis protein berbeda, namun semuanya dirangkai hanya dari 20 jenis asam amino standar yang sama persis! Perbedaan urutan dan cara melipatnya itulah yang menentukan apakah suatu protein menjadi antibodi pelawan virus, enzim pencernaan, atau serat pembentuk rambut.",
        kaitanMateri: [
            {
                kelas: "Kelas XII",
                bab: "Makromolekul: Protein & Asam Amino",
                desc: "Struktur ikatan peptida, monomer asam amino, dan tingkat struktur protein.",
                url: "/kelas-12/makromolekul/protein-asam-amino-dan-uji-identifikasi.html"
            },
            {
                kelas: "Kelas XI",
                bab: "Ikatan Kimia: Teori Hibridisasi & Gaya",
                desc: "Ikatan hidrogen, interaksi hidrofobik, dan geometri molekul.",
                url: "/kelas-11/ikatan-kimia/teori-hibridisasi.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Selama lebih dari 50 tahun, komunitas kimiawan dan biolog molekuler di seluruh dunia terjebak dalam teka-teki raksasa yang disebut <strong>"The Protein Folding Problem"</strong> (Masalah Pelipatan Struktur Protein). Pertanyaan besarnya sangat sederhana: <em>Jika kita tahu urutan asam amino dari suatu protein, bisakah kita memprediksi bentuk 3D dari protein tersebut dengan tepat?</em>
            </p>

            <p class="text-slate-700 leading-relaxed mb-6">
                Pada Oktober 2024, Komite Nobel di Swedia mengumumkan bahwa teka-teki setengah abad ini akhirnya telah terpecahkan. Hadiah Nobel Kimia dianugerahkan kepada <strong>David Baker</strong> (University of Washington) serta <strong>Demis Hassabis dan John Jumper</strong> (Google DeepMind).
            </p>

            <div class="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200/80">
                <div class="flex items-start gap-3">
                    <span class="text-2xl select-none">🧩</span>
                    <div>
                        <h4 class="font-bold text-teal-950 text-base mb-1">Paradoks Levinthal: Angka yang Bikin Pusing</h4>
                        <p class="text-xs sm:text-sm text-teal-900/90 leading-relaxed">
                            Seorang ilmuwan bernama Cyrus Levinthal menghitung bahwa rantai protein rata-rata dengan 100 asam amino memiliki sekitar <strong>10⁴⁷ kemungkinan bentuk lipatan</strong>. Jika protein mencoba satu per satu bentuk secara acak, dibutuhkan waktu lebih lama dari usia alam semesta! Namun di dalam sel hidup kita, protein melipat ke bentuk yang sempurna hanya dalam hitungan <strong>seperseribu detik</strong>. Bagaimana bisa?
                        </p>
                    </div>
                </div>
            </div>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>1. Bahasa Kimia di Balik Lipatan Protein</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Untuk memahami mengapa penemuan ini diganjar Nobel Kimia (bukan Nobel Komputer), kita harus melihat apa yang terjadi di tingkat molekul. Protein bukanlah benang elastis biasa, melainkan rantai polipeptida yang dihubungkan oleh <strong>ikatan peptida</strong> (−CONH−).
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Bentuk 3D protein terbentuk bukan oleh ikatan kovalen yang kaku saja, melainkan oleh orkestra gaya-gaya kimia yang sangat halus:
            </p>

            <ul class="space-y-3 mb-6 pl-2">
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold shrink-0 mt-0.5">1</span>
                    <span><strong>Ikatan Hidrogen:</strong> Atom hidrogen yang terikat pada nitrogen (−N−H) tertarik pada atom oksigen karbonil (C=O) di bagian rantai lain, membentuk spiral *alpha-helix* atau lembaran *beta-sheet*.</span>
                </li>
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold shrink-0 mt-0.5">2</span>
                    <span><strong>Efek Hidrofobik:</strong> Tubuh kita sebagian besar adalah air (polar). Asam amino dengan rantai samping non-polar (seperti leusin, isoleusin, fenilalanin) akan 'sembunyi' dan berkumpul rapat di bagian dalam inti protein untuk menghindari air.</span>
                </li>
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold shrink-0 mt-0.5">3</span>
                    <span><strong>Jembatan Disulfida (−S−S−):</strong> Dua molekul asam amino sistein yang saling mendekat dapat mengalami oksidasi membentuk ikatan kovalen disulfida yang mengunci lipatan protein secara permanen.</span>
                </li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>2. AlphaFold: Saat AI Belajar Menjadi Kimiawan Ulung</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Sebelumnya, menentukan satu struktur protein membutuhkan waktu bertahun-tahun kerja keras di laboratorium menggunakan metode kristalografi sinar-X atau mikroskopi krio-elektron (Cryo-EM) dengan biaya miliaran rupiah.
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Demis Hassabis dan John Jumper menciptakan <strong>AlphaFold2</strong>. Sistem AI ini tidak hanya menghafal bentuk, melainkan dilatih dengan hukum-hukum spasial stereokimia, tolakan elektron, dan interaksi van der Waals. AlphaFold mampu memprediksi struktur 3D protein dari urutan asam aminonya dalam hitungan menit dengan akurasi setara eksperimen laboratorium!
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Kini, AlphaFold telah memprediksi struktur dari hampir seluruh <strong>200 juta protein</strong> yang dikenal sains di seluruh organisme bumi, dan seluruh datanya digratiskan untuk seluruh peneliti dunia.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>3. David Baker: Merancang Protein Baru yang Belum Pernah Ada</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Jika tim AlphaFold bertindak seperti "pembaca peta", maka David Baker adalah "arsitek pembangun". Baker mengembangkan program bernama <em>Rosetta</em> untuk merancang protein secara <em>de novo</em> (dari nol).
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Alih-alih meniru alam, Baker mampu mendesain protein sintetik baru dengan fungsi spesifik yang belum pernah diciptakan oleh evolusi alam selama miliaran tahun:
            </p>

            <ul class="space-y-2 mb-6 text-slate-700 pl-4 list-disc text-sm">
                <li><strong>Enzim Pengurai Plastik:</strong> Protein yang dirancang khusus untuk memotong ikatan ester pada botol plastik PET sehingga terurai menjadi monomer dalam hitungan jam.</li>
                <li><strong>Sensor Pendeteksi Racun Lingkungan:</strong> Protein bercahaya yang berubah warna saat mengikat ion logam berat seperti merkuri atau timbal di sumber air minum.</li>
                <li><strong>Vaksin & Obat Kanker Presisi:</strong> Protein pengikat yang menargetkan hanya sel tumor ganas tanpa merusak sel sehat di sekitarnya.</li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">Refleksi untuk Generasi Muda Kimia</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
                Nobel Kimia 2024 membuktikan bahwa sains modern kini bergerak tanpa sekat. Ilmu kimia bukan lagi hanya tentang mencampur cairan berwarna di dalam tabung reaksi, melainkan bagaimana memahami bahasa molekuler kehidupan dengan bantuan teknologi komputasi tercanggih. Siapa tahu, penemuan besar berikutnya lahir dari ide kalian saat belajar kimia hari ini!
            </p>
        `,
        diskusi: "Bagaimana pemahaman tentang ikatan hidrogen dan gaya antarmolekul dapat membantu para ilmuwan mendesain obat baru yang efektif melawan virus yang terus bermutasi?"
    },
    {
        id: "aerogel-material-masa-depan",
        slug: "aerogel-material-masa-depan",
        title: "Aerogel 'Asap Padat': Material Paling Ringan di Bumi yang Mampu Menahan Api Las",
        subtitle: "Dikenal sebagai padatan tertipis di dunia dengan 99,8% volume berupa udara. Intip rekayasa ikatan silika nanometer yang dipakai baju astronot Mars.",
        category: "Material Masa Depan",
        categoryColor: "indigo",
        icon: "☁️",
        publishDate: "28 Oktober 2026",
        readTime: "4 menit baca",
        author: "Tim Litbang KimiaInteraktif",
        coverImage: {
            type: "gradient",
            bg: "from-slate-900 via-sky-950 to-indigo-950",
            badge: "Kimia Koloid × Material Canggih",
            icon: "🧪"
        },
        summary: "Pernahkah kamu melihat material tembus pandang berwarna kebiruan seperti asap yang membeku, sangat ringan hingga bisa bertengger di atas kepala kuntum bunga, namun mampu menahan kobaran api las bersuhu 1.000°C tanpa menghantarkan panas ke tangan di baliknya? Kenalkan, inilah Aerogel Silika.",
        tahukahKamu: "Warna kebiruan pada aerogel silika terjadi karena fenomena Hamburan Rayleigh (Rayleigh Scattering) — fenomena fisika-kimia yang persis sama yang menyebabkan langit siang hari di bumi kita berwarna biru!",
        kaitanMateri: [
            {
                kelas: "Kelas XI",
                bab: "Sistem Koloid",
                desc: "Proses sol-gel, dispersi koloidal, dan sifat adsorpsi pori.",
                url: "/kelas-11/sistem-koloid/konsep-dan-jenis-koloid.html"
            },
            {
                kelas: "Kelas XII",
                bab: "Kimia Unsur Periode Ketiga (Silikon)",
                desc: "Jaringan kovalen raksasa silikon dioksida (SiO₂).",
                url: "/kelas-12/kimia-unsur/unsur-unsur-periode-ketiga.html"
            }
        ],
        contentHtml: `
            <p class="lead text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Di laboratorium riset antariksa NASA, ada sebuah material yang dijuluki <em>"Frozen Smoke"</em> (Asap Beku). Jika kamu memegangnya, bobotnya nyaris tidak terasa di telapak tangan karena <strong>99,8% volumenya adalah udara kosong</strong>, sementara hanya 0,2% sisanya berupa padatan silika.
            </p>

            <p class="text-slate-700 leading-relaxed mb-6">
                Namun jangan salah sangka: meskipun rapuh terhadap remasan tangan, material ini adalah salah satu <strong>insulator termal terbaik</strong> yang pernah diciptakan oleh umat manusia. Sepotong aerogel setebal beberapa milimeter saja mampu menahan semburan api las bersuhu lebih dari 1.000°C di satu sisi, sementara cokelat yang diletakkan di sisi lainnya sama sekali tidak meleleh!
            </p>

            <div class="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200/80">
                <div class="flex items-start gap-3">
                    <span class="text-2xl select-none">🧪</span>
                    <div>
                        <h4 class="font-bold text-indigo-950 text-base mb-1">Dibuat dari Kimia Koloid: Sintesis Sol-Gel</h4>
                        <p class="text-xs sm:text-sm text-indigo-900/90 leading-relaxed">
                            Aerogel dibuat melalui reaksi kimia <strong>Sol-Gel</strong>. Senyawa prekursor silikon seperti <em>Tetraethyl orthosilicate</em> (TEOS) dihidrolisis dan dipolimerisasi menjadi jaringan gel basah berisi cairan alkohol. Tantangannya: jika dikeringkan biasa di bawah sinar matahari, tegangan permukaan kapiler cairan akan meruntuhkan struktur pori nano tersebut menjadi serbuk kaca biasa.
                        </p>
                    </div>
                </div>
            </div>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>1. Keajaiban Supercritical Drying (Pengeringan Superkritis)</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Kunci pembuatan aerogel adalah memasukkannya ke dalam bejana bertekanan tinggi berisi karbon dioksida cair (CO₂) lalu memanaskannya hingga melewati <strong>Titik Kritis Termodinamika</strong>.
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Pada kondisi superkritis, batas antara fase cair dan gas lenyap total! Tidak ada lagi tegangan permukaan (<em>surface tension = 0</em>). Gas CO₂ dapat dikeluarkan secara perlahan, meninggalkan kerangka padatan silika ($SiO_2$) berpori nano yang utuh tanpa roboh sedikit pun.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>2. Mengapa Aerogel Sangat Sukar Menghantarkan Panas?</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Perpindahan panas terjadi lewat tiga cara: konduksi, konveksi, dan radiasi. Aerogel melumpuhkan ketiganya sekaligus:
            </p>

            <ul class="space-y-3 mb-6 pl-2">
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold shrink-0 mt-0.5">A</span>
                    <span><strong>Konduksi Padatan Ditekan Habis:</strong> Karena 99,8% strukturnya adalah udara, hanya sedikit sekali jalur padatan silika yang tersedia bagi fonon (getaran kisi atom) untuk merambatkan panas.</span>
                </li>
                <li class="flex items-start gap-2.5 text-slate-700">
                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold shrink-0 mt-0.5">B</span>
                    <span><strong>Konveksi Gas Dimatikan (Efek Knudsen):</strong> Pori-pori aerogel berukuran sangat kerdil, hanya sekitar 20 hingga 40 nanometer. Ukuran ini lebih kecil daripada jarak bebas rata-rata (<em>mean free path</em>) molekul udara bertumbukan (~70 nm). Akibatnya, molekul udara di dalam pori terperangkap dan tidak bisa bersirkulasi membawa panas!</span>
                </li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span>3. Dari Penjelajah Mars hingga Jaket Musim Dingin</span>
            </h3>

            <p class="text-slate-700 leading-relaxed mb-4">
                Awalnya aerogel hanya dipakai oleh NASA pada wahana penjelajah Mars (Mars Rover) untuk melindungi sirkuit elektronik dari suhu malam Mars yang mencapai minus 100°C, serta pada wahana antariksa <em>Stardust</em> untuk menangkap debu komet tanpa merusaknya.
            </p>

            <p class="text-slate-700 leading-relaxed mb-4">
                Kini, berkat proses kimia yang semakin efisien, aerogel mulai diproduksi untuk kehidupan sehari-hari:
            </p>

            <ul class="space-y-2 mb-6 text-slate-700 pl-4 list-disc text-sm">
                <li><strong>Jaket Musim Dingin Ultra-Tipis:</strong> Selapis kain aerogel setebal 2 mm mampu memberikan kehangatan setara jaket bulu tebal 5 cm.</li>
                <li><strong>Insulasi Bangunan Hemat Energi:</strong> Selimut aerogel yang diselipkan pada dinding gedung mampu menghemat pemakaian AC dan pemanas ruangan hingga lebih dari 40%.</li>
                <li><strong>Pembersih Tumpahan Minyak di Laut:</strong> Permukaan silika aerogel dapat dilapisi gugus alkil hidrofobik, membuatnya menolak air laut 100% namun menyerap minyak mentah hingga puluhan kali bobotnya sendiri!</li>
            </ul>
        `,
        diskusi: "Bagaimana cara memodifikasi permukaan kimia aerogel yang semula hidrofilik (mengikat air) agar menjadi superhidrofobik (menolak air total)? Gugus fungsi kimia apa yang harus direaksikan?"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DAFTAR_ARTIKEL_SAINS };
}
