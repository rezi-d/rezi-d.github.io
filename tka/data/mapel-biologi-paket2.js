// tka/data/mapel-biologi-paket2.js
// Bank Soal & Pembahasan Try Out HOTS TKA Biologi SMA 2025/2026 (25 Butir Soal Analitis HOTS)
// Sesuai Kisi-kisi Resmi Seleksi Masuk PTN (SNBT, UTBK & Ujian Mandiri PTN)

const tkaBiologiPaket2Data = [
  {
    id: 1,
    elemen: "Genetika dan Evolusi",
    subelemen: "Hereditas & Hukum Mendel",
    indikator: "Menganalisis perbandingan fenotipe pada peristiwa penyimpangan semu hukum Mendel (Kriptomeri/Komplementer).",
    kode: "26BIO-HOTS-GEN01",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pada tanaman <em>Linaria maroccana</em>, pembentukan pigmen antosianin ungu diatur oleh dua gen yang berinteraksi secara kriptomeri:
<br>&bull; Gen \(A\) menghasilkan pigmen antosianin, sedangkan alelnya \(a\) tidak menghasilkan pigmen.
<br>&bull; Gen \(B\) menghasilkan lingkungan plasma sel yang bersifat basa (antosianin berubah warna menjadi <strong>ungu</strong>).
<br>&bull; Alel \(b\) menghasilkan lingkungan plasma sel yang bersifat asam (antosianin berubah warna menjadi <strong>merah</strong>).
<br>&bull; Jika tidak ada pigmen antosianin (\(aa\)), bunga akan berwarna <strong>putih</strong> terlepas dari keberadaan gen \(B\) atau \(b\).
<br>Tanaman berbunga ungu heterozigot (\(AaBb\)) disilangkan dengan tanaman berbunga merah bergenotipe \(Aabb\).
</p>
<p class="font-semibold text-slate-900 mb-2">
Rasio kemungkinan fenotipe keturunan yang dihasilkan dari persilangan tersebut adalah ....
</p>`,
    options: [
      { id: "A", text: "Ungu : Merah : Putih = 3 : 3 : 2" },
      { id: "B", text: "Ungu : Merah : Putih = 9 : 3 : 4" },
      { id: "C", text: "Ungu : Merah : Putih = 1 : 2 : 1" },
      { id: "D", text: "Ungu : Merah : Putih = 4 : 2 : 2" },
      { id: "E", text: "Ungu : Merah : Putih = 9 : 7" }
    ],
    kunci: "A",
    pembahasan: `<strong>Analisis Persilangan Kriptomeri Linaria maroccana:</strong><br>
Genotipe Parental: \(AaBb\) (Ungu) &times; \(Aabb\) (Merah)<br>
Gamet dari \(AaBb\): \(AB, Ab, aB, ab\)<br>
Gamet dari \(Aabb\): \(Ab, ab\)<br><br>
Kombinasi Keturunan (\(4 \\times 2 = 8\) kotak):<br>
1. \(AB \\times Ab = AABb\) &rarr; <strong>Ungu</strong> (Ada antosianin, basa)<br>
2. \(AB \\times ab = AaBb\) &rarr; <strong>Ungu</strong> (Ada antosianin, basa)<br>
3. \(Ab \\times Ab = AAbb\) &rarr; <strong>Merah</strong> (Ada antosianin, asam)<br>
4. \(Ab \\times ab = Aabb\) &rarr; <strong>Merah</strong> (Ada antosianin, asam)<br>
5. \(aB \\times Ab = AaBb\) &rarr; <strong>Ungu</strong> (Ada antosianin, basa)<br>
6. \(aB \\times ab = aaBb\) &rarr; <strong>Putih</strong> (Tanpa antosianin)<br>
7. \(ab \\times Ab = Aabb\) &rarr; <strong>Merah</strong> (Ada antosianin, asam)<br>
8. \(ab \\times ab = aabb\) &rarr; <strong>Putih</strong> (Tanpa antosianin)<br><br>
Rekapitulasi Fenotipe:<br>
&bull; Ungu: \(3/8\)<br>
&bull; Merah: \(3/8\)<br>
&bull; Putih: \(2/8\)<br>
Maka rasio fenotipe keturunan adalah <strong>3 : 3 : 2</strong>.<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 2,
    elemen: "Genetika dan Evolusi",
    subelemen: "Genetika Populasi (Hukum Hardy-Weinberg)",
    indikator: "Menghitung persentase pembawa sifat (carrier) dalam suatu populasi menggunakan prinsip kesetimbangan Hardy-Weinberg.",
    kode: "26BIO-HOTS-EVO02",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam suatu populasi manusia berpenduduk 10.000 jiwa yang berada dalam kesetimbangan Hardy-Weinberg, ditemukan 16 orang menderita albino (sifat autosom resesif, genotipe \(aa\)).
</p>
<p class="font-semibold text-slate-900 mb-2">
Berdasarkan data tersebut, berapakah jumlah individu normal pembawa sifat (carrier/heterozigot, \(Aa\)) dalam populasi tersebut?
</p>`,
    options: [
      { id: "A", text: "384 orang" },
      { id: "B", text: "768 orang" },
      { id: "C", text: "960 orang" },
      { id: "D", text: "1.920 orang" },
      { id: "E", text: "3.840 orang" }
    ],
    kunci: "B",
    pembahasan: `<strong>Perhitungan Frekuensi Alel dan Genotipe Hardy-Weinberg:</strong><br>
Persamaan dasar: \(p^2 + 2pq + q^2 = 1\) dan \(p + q = 1\), di mana:<br>
&bull; \(p\) = frekuensi alel dominan (\(A\))<br>
&bull; \(q\) = frekuensi alel resesif albino (\(a\))<br><br>
1. <em>Frekuensi genotipe homozigot resesif (\(q^2\)):</em><br>
   \[q^2 = \\frac{16}{10.000} = 0{,}0016\]
   \[q = \\sqrt{0{,}0016} = 0{,}04\]
2. <em>Frekuensi alel dominan (\(p\)):</em><br>
   \[p = 1 - q = 1 - 0{,}04 = 0{,}96\]
3. <em>Frekuensi individu heterozigot/carrier (\(2pq\)):</em><br>
   \[2pq = 2 \\times 0{,}96 \\times 0{,}04 = 0{,}0768\]
4. <em>Jumlah individu carrier dalam populasi:</em><br>
   \[N_{carrier} = 0{,}0768 \\times 10.000 = 768\\text{ orang}\]
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 3,
    elemen: "Genetika dan Evolusi",
    subelemen: "Substansi Genetika & Sintesis Protein",
    indikator: "Menganalisis akibat mutasi pergeseran rangka baca (frameshift mutation) terhadap rantai asam amino.",
    kode: "26BIO-HOTS-GEN03",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Suatu fragmen untai antisense DNA memiliki urutan basa:
<br><code class="font-mono bg-slate-100 px-2 py-1 rounded">3'- TAC - AAA - TTT - GGG - ACT - 5'</code>
<br>Kamus kodon asam amino:
<br>&bull; AUG = Metionin (Start)
<br>&bull; UUU = Fenilalanin
<br>&bull; AAA = Lisin
<br>&bull; CCC = Prolin
<br>&bull; UGA = Stop
<br>Jika pada basa sitosin ke-11 dari ujung 3' mengalami <strong>delesi (hilang)</strong>, apa dampak mutasi ini terhadap rantai polipeptida yang disintesis?
</p>`,
    options: [
      { id: "A", text: "Terjadi mutasi diam (silent mutation) sehingga tidak ada perubahan jenis asam amino." },
      { id: "B", text: "Terbentuk polipeptida normal karena basa yang terhapus bukan merupakan kodon start." },
      { id: "C", text: "Terjadi pergeseran rangka baca (frameshift mutation) yang mengubah seluruh urutan asam amino hilir." },
      { id: "D", text: "Transkripsi berhenti seketika sebelum mRNA sempat dibaca oleh ribosom." },
      { id: "E", text: "Asam amino metionin gagal terbentuk sehingga rantai polipeptida tidak dapat diinisiasi." }
    ],
    kunci: "C",
    pembahasan: `<strong>Analisis Dampak Mutasi Delesi Basa Tunggal (Frameshift):</strong><br>
1. <em>Transkripsi Normal:</em><br>
   DNA template (3' &rarr; 5'): <code class="font-mono">TAC - AAA - TTT - GGG - ACT</code><br>
   mRNA (5' &rarr; 3'): <code class="font-mono">AUG - UUU - AAA - CCC - UGA</code><br>
   Asam amino normal: Metionin - Fenilalanin - Lisin - Prolin - Stop (4 asam amino).<br><br>
2. <em>Delesi Basa ke-11:</em><br>
   Basa triplet ke-4 awalnya adalah <code class="font-mono">GGG</code>. Basa ke-11 adalah huruf G kedua. Hilangnya satu basa nukleotida mengubah triplet pembacaan (open reading frame) dari triplet ke-4 hingga ujung 5'.<br>
3. <em>Konsekuensi Fungsional:</em><br>
   Peristiwa ini merupakan <strong>mutasi pergeseran rangka baca (frameshift mutation)</strong> yang mengubah seluruh jenis asam amino hilir dan dapat memunculkan kodon stop prematur atau meniadakan kodon stop asli, menghasilkan protein yang non-fungsional.<br>
<strong>Kunci Jawaban: C</strong>`
  },
  {
    id: 4,
    elemen: "Bioteknologi",
    subelemen: "Bioteknologi Molekuler Modern",
    indikator: "Menganalisis prinsip kerja dan penerapan teknologi penyuntingan genom CRISPR-Cas9.",
    kode: "26BIO-HOTS-BIO04",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Sistem penyuntingan gen CRISPR-Cas9 diadaptasi dari mekanisme pertahanan adaptif alami bakteri terhadap infeksi bakteriofag. Sistem ini terdiri atas dua komponen esensial: <em>guide RNA</em> (gRNA / sgRNA) dan enzim endonuklease Cas9.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah dari pernyataan berikut yang BENAR mengenai mekanisme kerja sistem CRISPR-Cas9 dalam rekayasa genetika modern? Klik pada setiap jawaban yang benar!
</p>`,
    options: [
      { id: "A", text: "gRNA berperan mengenali urutan sekuens DNA target melalui komplementaritas pasangan basa spesifik." },
      { id: "B", text: "Enzim Cas9 bertindak sebagai 'gunting molekuler' yang memotong ikatan fosfodiester pada kedua untai DNA ganda (double-strand break)." },
      { id: "C", text: "Cas9 mensintesis rantai DNA baru secara in vitro mirip dengan enzim Taq DNA polimerase pada PCR." },
      { id: "D", text: "Setelah pemotongan DNA, mekanisme perbaikan seluler alami (NHEJ atau HDR) dapat dimanfaatkan untuk melumpuhkan gen cacat atau menyisipkan gen baru." },
      { id: "E", text: "CRISPR-Cas9 hanya dapat digunakan pada organisme prokariotik dan tidak dapat bekerja pada genom sel eukariotik." }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Prinsip Molekuler CRISPR-Cas9:</strong><br>
&bull; <strong>Pernyataan A Benar:</strong> sgRNA (single guide RNA) dirancang memiliki sekuens ~20 nukleotida yang komplementer dengan target DNA spesifik di dekat motif PAM.<br>
&bull; <strong>Pernyataan B Benar:</strong> Enzim Cas9 adalah endonuklease yang memiliki domain pemotong RuvC dan HNH untuk memutus kedua untai DNA (double-strand break/DSB).<br>
&bull; <strong>Pernyataan D Benar:</strong> Sel merespons putusnya DNA melalui jalur perbaikan <em>Non-Homologous End Joining</em> (NHEJ &rarr; knockout gen) atau <em>Homology-Directed Repair</em> (HDR &rarr; gene knock-in/koreksi sekuens).<br>
Pernyataan C salah (Cas9 tidak memiliki aktivitas polimerase); Pernyataan E salah (CRISPR telah sukses luas diterapkan pada sel mamalia, tumbuhan, dan manusia).<br>
<strong>Kunci Jawaban: A, B, D</strong>`
  },
  {
    id: 5,
    elemen: "Bioteknologi",
    subelemen: "Rekayasa Genetika & Tanaman Transgenik",
    indikator: "Mengevaluasi mekanisme kerja toksin Bt pada tanaman kapas transgenik terhadap resistensi hama.",
    kode: "26BIO-HOTS-BIO05",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tanaman kapas transgenik Bt (<em>Bacillus thuringiensis</em>) disisipi gen <em>Cry</em> yang mengekspresikan protein kristal endotoksin. Mengapa toksin protein kristal ini sangat mematikan bagi ulat hama penggerek buah kapas (ordo Lepidoptera), namun sama sekali aman dan tidak beracun bagi manusia atau mamalia yang mengonsumsinya?
</p>`,
    options: [
      { id: "A", text: "Protein Cry diaktifkan oleh asam lambung mamalia menjadi senyawa asam amino esensial non-toksik." },
      { id: "B", text: "Saluran pencernaan ulat bersifat basa (alkalis) yang melarutkan pro-toksin dan memiliki reseptor spesifik di epitel usus tengahnya." },
      { id: "C", text: "Mamalia memiliki enzim pencernaan protease yang kebal terhadap semua jenis racun bakteri gram positif." },
      { id: "D", text: "Toksin Bt tidak diserap ke dalam getah floem tanaman kapas sehingga manusia tidak pernah menelannya." },
      { id: "E", text: "Sistem imun mamalia langsung membentuk antibodi penetralisir toksin sebelum sempat masuk ke aliran darah." }
    ],
    kunci: "B",
    pembahasan: `<strong>Spesifisitas Toksin Bt (Bacillus thuringiensis):</strong><br>
1. <strong>Aktivasi pH:</strong> Kristal protein <em>Cry</em> merupakan pro-toksin yang tidak aktif. Pro-toksin ini hanya larut dan terpotong secara enzimatik menjadi racun aktif dalam kondisi <strong>pH basa tinggi (\(\\text{pH} > 9{,}0\))</strong>, yang merupakan karakteristik khas lumen usus tengah serangga Lepidoptera.<br>
2. <strong>Reseptor Spesifik:</strong> Toksin aktif kemudian berikatan dengan reseptor cadherin dan aminopeptidase di membran mikrovili epitel serangga, membentuk pori-pori litik yang menyebabkan usus pecah dan ulat mati kelaparan/sepsis.<br>
3. <strong>Keamanan pada Mamalia:</strong> Lambung mamalia memiliki suasana asam kuat (\(\\text{pH } 1{,}5 - 2\)) dan tidak memiliki reseptor membran pengikat toksin Bt, sehingga protein Cry dicerna seperti protein pangan biasa.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 6,
    elemen: "Sel",
    subelemen: "Pembelahan Sel & Kelainan Kromosom",
    indikator: "Menganalisis fenomena nondisjunction (gagal berpisah) pada meiosis pembentukan gamet terhadap kelainan sindrom aneuploidi.",
    kode: "26BIO-HOTS-SEL06",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang anak lahir dengan ciri fisik memiliki celah mata sipit dengan lipatan epikantus, jarak antarmata lebar, garis telapak tangan tunggal lurus (<em>simian crease</em>), keterlambatan perkembangan kognitif, dan kelainan jantung bawaan. Kariotipe sel darah putih menunjukkan formula kromosom \(47, XX, +21\).
<br>Peristiwa pembelahan sel yang paling mungkin memicu timbulnya kelainan kromosom tersebut adalah....
</p>`,
    options: [
      { id: "A", text: "gagal berpisah (nondisjunction) pasangan kromosom nomor 21 pada anafase meiosis I atau kromatid saudara pada anafase meiosis II" },
      { id: "B", text: "pindah silang ganda (crossing over) antara kromosom non-homolog pada profase meiosis I" },
      { id: "C", text: "delesi segmen lengan panjang kromosom nomor 21 saat anafase mitosis embrionik" },
      { id: "D", text: "translokasi resiprok seimbang antara kromosom nomor 21 dengan gonosom X" },
      { id: "E", text: "kegagalan pembentukan cincin sitokinesis pada telofase mitosis sel somatik" }
    ],
    kunci: "A",
    pembahasan: `<strong>Patogenesis Sindrom Down (Trisomi 21):</strong><br>
&bull; Kariotipe \(47, XX, +21\) menunjukkan <strong>Trisomi 21</strong> (kelebihan 1 buah autosom nomor 21).<br>
&bull; Mayoritas kasus (&gt;90%) disebabkan oleh peristiwa <strong>gagal berpisah (nondisjunction)</strong> pasangan kromosom homolog pada anafase I oogenesis atau kromatid saudara pada anafase II.<br>
&bull; Akibatnya dihasilkan ovum dengan \(n+1\) (mengandung 2 kromosom nomor 21). Ketika ovum ini dibuahi sperma normal (\(n = 23\)), terbentuk zigot dengan total 47 kromosom (\(2n+1\)).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 7,
    elemen: "Sel",
    subelemen: "Transpor Membran & Biofisika Sel",
    indikator: "Menganalisis peran pompa natrium-kalium (Na+/K+ ATPase) dalam mempertahankan potensial istirahat membran neuron.",
    kode: "26BIO-HOTS-SEL07",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pompa natrium-kalium (\(\\text{Na}^+/\\text{K}^+\) ATPase) merupakan protein transmembran yang melakukan transpor aktif primer untuk menjaga potensial membran istirahat (<em>resting membrane potential</em> \(\\approx -70\\text{ mV}\)) pada sel saraf dan otot.
<br>Tentukan <strong>Benar</strong> atau <strong>Salah</strong> untuk setiap pernyataan mengenai kerja pompa tersebut!
</p>`,
    items: [
      { pernyataan: "Setiap hidrolisis 1 molekul ATP memompa 3 ion Na⁺ keluar sel dan memasukkan 2 ion K⁺ ke dalam sel.", kunci: "Benar", penjelasan: "Stoikiometri elektrogenik pompa adalah 3 Na⁺ keluar berbanding 2 K⁺ masuk melawan gradien konsentrasi." },
      { pernyataan: "Kerja pompa menyebabkan konsentrasi ion K⁺ di dalam sitoplasma menjadi lebih rendah daripada di cairan ekstraseluler.", kunci: "Salah", penjelasan: "K⁺ dipompa ke dalam sehingga konsentrasi K⁺ intraseluler justru jauh lebih tinggi (~140 mM) dibanding ekstraseluler (~4 mM)." },
      { pernyataan: "Inhibisi pompa oleh racun ouabain akan menyebabkan sel saraf mengalami depolarisasi permanen dan kehilangan kemampuan menghantarkan potensial aksi.", kunci: "Benar", penjelasan: "Tanpa kerja pompa, gradien elektrokimia Na⁺/K⁺ lenyap dan membran kehilangan daya eksitasi." }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Mekanisme Pompa Na⁺/K⁺ ATPase:</strong><br>
1. <strong>Stoikiometri Pompa:</strong> Tiap 1 ATP terhidrolisis menjadi ADP + Pi, menggerakkan konformasi protein untuk membuang 3 ion \(\\text{Na}^+\) ke luar dan menyerap 2 ion \(\\text{K}^+\) ke dalam sel (elektrogenik menghasilkan muatan dalam relatif lebih negatif).<br>
2. <strong>Distribusi Ion:</strong> Menjadikan \([\\text{Na}^+]\) tinggi di ekstraseluler dan \([\\text{K}^+]\) tinggi di intraseluler.<br>
3. <strong>Toksisitas Ouabain:</strong> Merupakan glikosida jantung yang mengikat sisi ekstraseluler subunit alfa pompa, melumpuhkan transpor aktif sehingga resting potential hilang dan potensial aksi gagal dibangkitkan.<br>
<strong>Kunci Jawaban: 1=Benar, 2=Salah, 3=Benar</strong>`
  },
  {
    id: 8,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Ekskresi & Osmoregulasi",
    indikator: "Menganalisis mekanisme kerja hormon antidiuretik (ADH/vasopresin) terhadap permeabilitas tubulus nefron ginjal.",
    kode: "26BIO-HOTS-EKS08",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Ketika seseorang berolahraga di bawah terik matahari dan kehilangan banyak cairan melalui keringat, osmoreseptor di hipotalamus mendeteksi peningkatan osmolaritas plasma darah. Sinyal ini merangsang kelenjar hipofisis posterior untuk melepaskan hormon ADH (<em>Antidiuretic Hormone</em> / vasopresin) ke dalam sirkulasi.
<br>Bagaimana mekanisme seluler hormon ADH dalam menurunkan volume urine pada kondisi tersebut?
</p>`,
    options: [
      { id: "A", text: "Menstimulasi translokasi vesikel yang mengandung kanal air aquaporin-2 ke membran apikal sel tubulus pengumpul (ductus colligens)." },
      { id: "B", text: "Meningkatkan filtrasi glomerulus sehingga lebih banyak garam yang direabsorpsi di tubulus kontortus proksimal." },
      { id: "C", text: "Menghambat pembentukan angiotensin II untuk menurunkan tekanan osmotik di kapiler peritubuler." },
      { id: "D", text: "Merelaksasikan sfingter uretra interna sehingga penampungan urine di vesika urinaria meningkat." },
      { id: "E", text: "Memicu sekresi ion kalium dan urea di lengkung Henle asenden untuk memekatkan cairan filtrat." }
    ],
    kunci: "A",
    pembahasan: `<strong>Mekanisme Seluler Hormon ADH pada Nefron Ginjal:</strong><br>
&bull; ADH berikatan dengan reseptor \(V_2\) berpasangan protein G (GPCR) di membran basolateral sel-sel tubulus kontortus distal dan duktus kolektivus.<br>
&bull; Pengikatan ini mengaktivasi adenilat siklase &rarr; meningkatkan kadar \(\\text{cAMP}\) &rarr; memicu fosforilasi oleh Protein Kinase A (PKA).<br>
&bull; PKA merangsang eksositosis vesikel intraseluler yang membawa kanal air <strong>aquaporin-2 (AQP2)</strong> untuk disisipkan ke membran apikal (luminal).<br>
&bull; Akibatnya, permeabilitas air melonjak tajam: air ditarik kembali secara masif ke medula ginjal hiperosmotik, menghasilkan urine pekat bervolume minimal.<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 9,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Imun & Vaksinasi",
    indikator: "Membedakan kinetika respons imun primer dan sekunder berdasarkan produksi antibodi (IgM dan IgG).",
    kode: "26BIO-HOTS-IMU09",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Grafik respon imun terhadap infeksi menunjukkan bahwa pada paparan antigen pertama (respon primer), kadar antibodi baru mulai terdeteksi setelah masa jeda (<em>lag phase</em>) 7-10 hari dengan dominasi antibodi IgM. Sebaliknya, pada paparan kedua terhadap antigen yang sama (respon sekunder), masa jeda hanya berlangsung 1-3 hari dengan lonjakan titer antibodi IgG yang berlipat ganda dan bertahan jauh lebih lama.
<br>Faktor utama yang mendasari perbedaan kinetika respon sekunder tersebut adalah....
</p>`,
    options: [
      { id: "A", text: "adanya populasi sel memori B dan T yang telah tersensitisasi serta mengalami maturasi afinitas" },
      { id: "B", text: "kemampuan neutrofil dan makrofag dalam menelan antigen dengan laju dua kali lebih cepat" },
      { id: "C", text: "peningkatan permeabilitas kapiler darah yang dipicu pelepasan histamin dalam jumlah raksasa" },
      { id: "D", text: "aktivasi sistem komplemen tanpa memerlukan pengenalan antibodi spesifik pada paparan kedua" },
      { id: "E", text: "pengubahan langsung sel fagosit monosit menjadi sel plasma penghasil imunoglobulin" }
    ],
    kunci: "A",
    pembahasan: `<strong>Imunologi Respons Sekunder & Sel Memori:</strong><br>
&bull; Pada respons primer, seleksi klonal limfosit naif membutuhkan waktu cukup lama untuk berproliferasi dan berdiferensiasi.<br>
&bull; Selain menghasilkan sel plasma pembentuk antibodi IgM berafinitas rendah, respons primer menghasilkan <strong>sel memori B dan sel memori T helper (\(\\text{CD4}^+\))</strong> berumur panjang.<br>
&bull; Sel memori telah mengalami penataan ulang genetik <em>isotype class switching</em> (menjadi IgG) dan mutasi somatik (<em>affinity maturation</em>). Saat re-infeksi terjadi, sel memori langsung berproliferasi cepat tanpa hambatan diferensiasi awal.<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 10,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Fisiologi Tumbuhan (Transport Air & Transpirasi)",
    indikator: "Menganalisis teori tegangan-kohesi Dixon dalam pengangkutan air dari akar ke daun.",
    kode: "26BIO-HOTS-TUM10",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pohon sequoia raksasa (<em>Sequoiadendron giganteum</em>) mampu mentranspor air dari perakaran tanah hingga ke pucuk dedaunan setinggi lebih dari 100 meter tanpa memerlukan pompa mekanik. Menurut teori kohesi-adhesi-tegangan (Dixon-Joly), mekanisme fisis utama yang memungkinkan kolom air ditarik ke ketinggian tersebut adalah....
</p>`,
    options: [
      { id: "A", text: "tekanan akar positif yang sangat tinggi akibat penimbunan ion mineral di dalam sel endodermis" },
      { id: "B", text: "tegangan tarik negatif (negative hydrostatic pressure) yang dibangkitkan oleh evaporasi transpirasi pada dinding sel mesofil daun" },
      { id: "C", text: "dorongan gaya kapilaritas akibat diameter trakea xilem yang menyempit di pucuk pohon" },
      { id: "D", text: "transport aktif molekul air melalui kanal protein membran pada sel kolenkim batang" },
      { id: "E", text: "gaya gravitasi balik yang dihasilkan oleh perbedaan densitas getah floem dan air xilem" }
    ],
    kunci: "B",
    pembahasan: `<strong>Teori Kohesi-Adhesi-Tegangan (Cohesion-Tension Theory):</strong><br>
1. <strong>Daya Hisap Daun:</strong> Penguapan molekul air dari permukaan dinding sel mesofil ke rongga substomata memicu penurunan potensial air lokal, menciptakan kelengkungan meniskus permukaan cairan dengan <strong>tekanan hidrostatik negatif</strong> (tegangan tarik hingga -2 MPa).<br>
2. <strong>Kohesi Air:</strong> Ikatan hidrogen yang sangat kuat antarsesama molekul air (kohesi) mencegah putusnya kolom cairan di dalam pembuluh xilem (mencegah kavitasi/emboli).<br>
3. <strong>Adhesi:</strong> Ikatan hidrogen antara molekul air dengan selulosa hidrofilik dinding xilem membantu menahan beban kolom air melawan tarikan gravitasi.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 11,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Fisiologi Tumbuhan (Hormon & Fotoperiodisme)",
    indikator: "Memprediksi respon pembungaan tanaman hari pendek (short-day plant) terhadap gangguan kilatan cahaya di malam hari.",
    kode: "26BIO-HOTS-TUM11",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tanaman krisan adalah tanaman hari pendek (<em>short-day plant</em>) dengan periode gelap kritis 10 jam. Tanaman ini ditumbuhkan di rumah kaca dengan siklus 8 jam terang dan 16 jam gelap. Di tengah periode malam yang gelap gulita tersebut, diberikan kilatan cahaya merah (<em>red light</em>) selama 10 menit.
<br>Apa respon fisiologis pembungaan tanaman krisan tersebut?
</p>`,
    options: [
      { id: "A", text: "Tanaman tetap berbunga normal karena panjang penyinaran siang hari kurang dari batas kritis." },
      { id: "B", text: "Tanaman gagal berbunga karena kilatan cahaya memecah malam panjang menjadi dua periode gelap pendek di bawah batas kritis." },
      { id: "C", text: "Pembungaan terjadi lebih cepat karena kilatan cahaya meningkatkan sintesis hormon florigen secara eksponensial." },
      { id: "D", text: "Tanaman mengalami dormansi total dan menggugurkan seluruh kuncup daunnya." },
      { id: "E", text: "Kilatan cahaya merah langsung memicu inisiasi kuncup bunga pada buku batang." }
    ],
    kunci: "B",
    pembahasan: `<strong>Fotoperiodisme dan Peran Fitokrom:</strong><br>
&bull; Tanaman hari pendek sejatinya adalah <strong>tanaman malam panjang</strong>: pembungaan mutlak memerlukan periode gelap tanpa interupsi yang melampaui durasi kritis (kristal \(P_{fr} \\rightarrow P_r\) tuntas).<br>
&bull; Kilatan cahaya merah (660 nm) mengonversi bentuk fitokrom inaktif \(P_r\) kembali menjadi bentuk aktif \(P_{fr}\).<br>
&bull; Bentuk \(P_{fr}\) pada tanaman hari pendek bertindak sebagai <strong>inhibitor pembungaan</strong>, sehingga tubuh tanaman menganggap malam panjang telah terputus dan pembungaan dibatalkan.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 12,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Ekologi & Aliran Energi",
    indikator: "Menghitung transfer energi trofik menggunakan aturan efisiensi ekologi Lindeman (10%).",
    kode: "26BIO-HOTS-EKO12",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam suatu ekosistem padang rumput, produsen primer (rumput) mampu mengikat energi matahari dan menghasilkan produktivitas primer bersih (NPP) sebesar \(40.000\\text{ kkal}\\cdot\\text{m}^{-2}\\cdot\\text{tahun}^{-1}\). Rumput dikonsumsi oleh belalang (herbivora), belalang dimangsa burung pipit (karnivora primer), dan burung pipit dimangsa elang (karnivora sekunder/puncak).
<br>Jika efisiensi transfer energi antar-tingkat trofik rata-rata adalah 10%, berapakah estimasi energi yang tersedia untuk tingkat trofik elang?
</p>`,
    options: [
      { id: "A", text: "40 kkal·m⁻²·tahun⁻¹" },
      { id: "B", text: "400 kkal·m⁻²·tahun⁻¹" },
      { id: "C", text: "4.000 kkal·m⁻²·tahun⁻¹" },
      { id: "D", text: "4 kkal·m⁻²·tahun⁻¹" },
      { id: "E", text: "0,4 kkal·m⁻²·tahun⁻¹" }
    ],
    kunci: "A",
    pembahasan: `<strong>Perhitungan Aliran Energi Tingkat Trofik (Hukum Lindeman):</strong><br>
&bull; <strong>Tingkat Trofik 1 (Produsen - Rumput):</strong> \(40.000\\text{ kkal}\\cdot\\text{m}^{-2}\\cdot\\text{tahun}^{-1}\)<br>
&bull; <strong>Tingkat Trofik 2 (Konsumen I - Belalang):</strong> \(10\\% \\times 40.000 = 4.000\\text{ kkal}\\cdot\\text{m}^{-2}\\cdot\\text{tahun}^{-1}\)<br>
&bull; <strong>Tingkat Trofik 3 (Konsumen II - Burung Pipit):</strong> \(10\\% \\times 4.000 = 400\\text{ kkal}\\cdot\\text{m}^{-2}\\cdot\\text{tahun}^{-1}\)<br>
&bull; <strong>Tingkat Trofik 4 (Konsumen III - Burung Elang):</strong> \(10\\% \\times 400 = 40\\text{ kkal}\\cdot\\text{m}^{-2}\\cdot\\text{tahun}^{-1}\)<br>
Sebagian besar energi (~90%) hilang sebagai panas entropi respirasi seluler dan sisa metabolisme (feses/urin).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 13,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Pencemaran Lingkungan & Bioakumulasi",
    indikator: "Menganalisis fenomena biomagnifikasi polutan persisten (seperti DDT atau mikroplastik) pada rantai makanan perairan.",
    kode: "26BIO-HOTS-EKO13",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Insektisida diklorodifeniltrikloroetana (DDT) yang terbawa aliran limpasan air hujan masuk ke sebuah danau. Konsentrasi DDT di air danau hanya 0,000003 ppm. Namun, saat jaringan tubuh biota dianalisis, ditemukan:
<br>&bull; Fitoplankton: 0,04 ppm
<br>&bull; Zooplankton: 0,2 ppm
<br>&bull; Ikan kecil pemakan plankton: 2,0 ppm
<br>&bull; Ikan besar predator: 20 ppm
<br>&bull; Burung elang pemakan ikan: 1.600 ppm (menipiskan cangkang telur)
<br>Penyebab biologis utama fenomena pelipatgandaan konsentrasi racun ini (biomagnifikasi) adalah....
</p>`,
    options: [
      { id: "A", text: "senyawa DDT larut dalam lemak (lipofilik), tidak mudah terurai secara biologis (non-biodegradable), dan terakumulasi di jaringan adiposa" },
      { id: "B", text: "burung elang memproduksi DDT sendiri di dalam kelenjar minyak bulunya untuk membunuh ektoparasit" },
      { id: "C", text: "fitoplankton menyerap DDT sebagai sumber fosfor utama untuk melangsungkan fotosintesis" },
      { id: "D", text: "ginjal ikan besar tidak mampu menyaring air tawar sehingga semua zat terlarut tertahan di darah" },
      { id: "E", text: "DDT bereaksi dengan garam kalsium membentuk senyawa volatil yang menyebar ke seluruh organ" }
    ],
    kunci: "A",
    pembahasan: `<strong>Prinsip Biomagnifikasi Polutan Organik Persisten (POPs):</strong><br>
&bull; Zat pencemar seperti DDT memiliki sifat <strong>hidrofobik/lipofilik tinggi</strong> dan resisten terhadap degradasi metabolik maupun fotolisis.<br>
&bull; Ketika dikonsumsi oleh organisme trofik rendah, racun tidak dapat diekskresikan melalui urine melainkan didepositkan dalam jaringan lemak (bioakumulasi).<br>
&bull; Setiap predator memakan ribuan biomassa mangsa di bawahnya sepanjang hidupnya, sehingga konsentrasi polutan per gram massa tubuh melonjak berkali-kali lipat hingga mencapai kadar toksik ekstrem pada konsumen puncak (biomagnifikasi).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 14,
    elemen: "Sel",
    subelemen: "Organel Sel & Teori Endosimbiosis",
    indikator: "Mengevaluasi bukti-bukti sitologis dan molekuler pendukung teori endosimbiosis pada asal-usul mitokondria dan kloroplas.",
    kode: "26BIO-HOTS-SEL14",
    tipe: "mcma",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Teori endosimbiosis yang dikemukakan oleh Lynn Margulis menyatakan bahwa mitokondria dan kloroplas pada sel eukariotik berevolusi dari bakteri prokariotik aerob dan bakteri fotosintetik (Cyanobacteria) yang ditelan oleh sel inang purba.
</p>
<p class="font-semibold text-slate-900 mb-2">
Manakah dari fakta biologis berikut yang merupakan bukti kuat pendukung teori endosimbiosis? Klik pada setiap jawaban yang benar!
</p>`,
    options: [
      { id: "A", text: "Mitokondria dan kloroplas memiliki DNA sirkular tertutup tanpa protein histon mirip dengan plasmid bakteri." },
      { id: "B", text: "Keduanya memiliki ribosom tipe 70S yang peka terhadap antibiotik antibakteri (seperti kloramfenikol)." },
      { id: "C", text: "Membran luar organel memiliki komposisi mirip membran sel inang eukariotik, sedangkan membran dalam kaya fosfolipid kardiolipin mirip membran sel bakteri." },
      { id: "D", text: "Keduanya bereplikasi secara mandiri di dalam sel inang melalui mekanisme pembelahan biner (binary fission)." },
      { id: "E", text: "Keduanya dapat bertahan hidup dan bereproduksi secara independen di luar sel tubuh inang tanpa media kultur khusus." }
    ],
    kunci: ["A", "B", "C", "D"],
    pembahasan: `<strong>Bukti Ilmiah Teori Endosimbiosis Serial:</strong><br>
&bull; <strong>A Benar:</strong> Memiliki DNA sirkular tanpa histon (mtDNA / cpDNA).<br>
&bull; <strong>B Benar:</strong> Memiliki ribosom 70S (eukariotik sitoplasma adalah 80S) dan translasi terhambat oleh antibiotik bakteri.<br>
&bull; <strong>C Benar:</strong> Membran ganda merefleksikan vakuola endositosis inang (membran luar) dan membran sel bakteri purba (membran dalam dengan kardiolipin).<br>
&bull; <strong>D Benar:</strong> Membelah mandiri melalui pembelahan biner ftsZ.<br>
Opsi E salah karena sebagian besar gen esensial mitokondria telah bermigrasi ke nukleus inang, sehingga organel ini tidak mampu hidup bebas mandiri di alam.<br>
<strong>Kunci Jawaban: A, B, C, D</strong>`
  },
  {
    id: 15,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Sirkulasi & Hemodinamika",
    indikator: "Menganalisis siklus jantung (sistol, diastol, dan kerja katup atrioventrikular/semilunar).",
    kode: "26BIO-HOTS-SIR15",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Selama fase ejeksi sistolik ventrikel pada siklus jantung manusia, ventrikel kiri berkontraksi kuat sehingga tekanan intraventrikel melonjak melampaui tekanan di aorta (mencapai ~120 mmHg).
<br>Kondisi katup jantung yang terjadi pada fase ini adalah....
</p>`,
    options: [
      { id: "A", text: "Katup atrioventrikular (mitral dan trikuspid) terbuka, sedangkan katup semilunar tertutup." },
      { id: "B", text: "Katup atrioventrikular tertutup rapat, sedangkan katup semilunar (aorta dan pulmonal) terbuka lebar." },
      { id: "C", text: "Semua katup jantung (AV dan semilunar) menutup serentak untuk mempertahankan volume darah." },
      { id: "D", text: "Semua katup jantung membuka agar darah dari atrium dapat langsung mengalir ke aorta." },
      { id: "E", text: "Katup mitral terbuka dan katup trikuspid tertutup untuk memisahkan sirkulasi sistemik dan pulmonal." }
    ],
    kunci: "B",
    pembahasan: `<strong>Mekanisme Kerja Katup pada Ejeksi Ventrikel:</strong><br>
&bull; Saat ventrikel berkontraksi (sistol ventrikel), tekanan di dalam ruang ventrikel meningkat tajam di atas tekanan atrium.<br>
&bull; Perbedaan gradien tekanan ini mendorong <strong>katup atrioventrikular (bikuspid/mitral & trikuspid) menutup rapat</strong> (menghasilkan bunyi jantung pertama, S1 "lub") untuk mencegah regurgitasi darah kembali ke atrium.<br>
&bull; Ketika tekanan ventrikel melampaui tekanan diastolik arteri, <strong>katup semilunar (aorta dan arteri pulmonalis) terdorong membuka</strong>, memungkinkan darah dipompakan ke seluruh tubuh dan paru-paru.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 16,
    elemen: "Genetika dan Evolusi",
    subelemen: "Pola Pewarisan Sifat Terpaut Seks",
    indikator: "Memprediksi peluang keturunan yang menderita hemofilia dari pasangan dengan status genetik tertentu.",
    kode: "26BIO-HOTS-GEN16",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Hemofilia merupakan kelainan pembekuan darah yang diturunkan secara resesif terpaut kromosom X (\(X^h\)). Seorang wanita normal yang ayahnya menderita hemofilia menikah dengan seorang pria normal.
<br>Berapakah persentase kemungkinan pasangan tersebut melahirkan seorang <strong>anak laki-laki yang menderita hemofilia</strong>?
</p>`,
    options: [
      { id: "A", text: "12,5%" },
      { id: "B", text: "25%" },
      { id: "C", text: "50%" },
      { id: "D", text: "75%" },
      { id: "E", text: "100%" }
    ],
    kunci: "B",
    pembahasan: `<strong>Analisis Pewarisan Pautan Seks Kromosom X:</strong><br>
1. <em>Genotipe Ibu:</em> Ayahnya hemofilia (\(X^h Y\)), maka sang ayah pasti mewariskan kromosom \(X^h\) kepada putrinya. Karena wanita ini berfenotipe normal, genotipenya adalah carrier: \(X^H X^h\).<br>
2. <em>Genotipe Ayah:</em> Pria normal: \(X^H Y\).<br>
3. <em>Persilangan:</em> \(X^H X^h \\times X^H Y\)<br>
   &bull; \(X^H X^H\) : Wanita normal homozigot (25%)<br>
   &bull; \(X^H X^h\) : Wanita normal carrier (25%)<br>
   &bull; \(X^H Y\) : Laki-laki normal (25%)<br>
   &bull; \(X^h Y\) : Laki-laki hemofilia (25%)<br>
Peluang melahirkan <em>anak laki-laki hemofilia</em> dari total seluruh kelahiran adalah \(1/4\) atau <strong>25%</strong>.<br>
(Catatan: Jika pertanyaannya 'dari anak laki-laki yang lahir', peluangnya 50%).<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 17,
    elemen: "Sel",
    subelemen: "Metabolisme Sel (Fermentasi Anaerob)",
    indikator: "Membandingkan perolehan energi dan produk akhir fermentasi asam laktat dengan respirasi aerob.",
    kode: "26BIO-HOTS-SEL17",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Saat atlet lari cepat (sprinter 100 meter) mengerahkan kekuatan maksimalnya, pasokan oksigen ke serabut otot rangka cepat (tipe IIb) tidak mencukupi kebutuhan fosforilasi oksidatif mitokondria, sehingga sel otot beralih ke fermentasi asam laktat.
<br>Apa tujuan utama reduksi asam piruvat menjadi asam laktat dalam kondisi anaerob tersebut?
</p>`,
    options: [
      { id: "A", text: "Menghasilkan tambahan 36 molekul ATP melalui fosforilasi tingkat substrat." },
      { id: "B", text: "Meregenerasi pasokan koenzim NAD⁺ dari NADH agar proses glikolisis dapat terus berjalan menghasilkan ATP." },
      { id: "C", text: "Mengikat kelebihan ion hidrogen bebas agar pH sitosol otot menjadi lebih basa." },
      { id: "D", text: "Mengubah glukosa langsung menjadi glikogen simpanan di dalam sarkoplasma." },
      { id: "E", text: "Memecah asam laktat menjadi gas karbon dioksida dan air tanpa memerlukan enzim." }
    ],
    kunci: "B",
    pembahasan: `<strong>Peran Fisiologis Fermentasi Asam Laktat:</strong><br>
&bull; Pada jalur glikolisis, pengubahan gliseraldehida-3-fosfat menjadi 1,3-bisfosfogliserat membutuhkan pasokan teroksidasi <strong>\(\\text{NAD}^+\)</strong>.<br>
&bull; Tanpa keberadaan oksigen, rantai transpor elektron berhenti sehingga \(\\text{NADH}\) tidak dapat mengembalikan elektronnya ke mitokondria.<br>
&bull; Enzim <em>laktat dehidrogenase</em> mentransfer hidrogen dari \(\\text{NADH}\) ke asam piruvat membentuk <strong>asam laktat</strong> dan membebaskan kembali <strong>\(\\text{NAD}^+\)</strong>, sehingga sel dapat terus memanen 2 ATP per molekul glukosa secara kontinu.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 18,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Pencernaan & Enzim",
    indikator: "Menganalisis pencernaan lemak dan emulsifikasi oleh garam empedu.",
    kode: "26BIO-HOTS-PEN18",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Seorang pasien yang menjalani operasi pengangkatan kantung empedu (kolesistektomi) akibat batu empedu disarankan oleh dokter gizi untuk membatasi konsumsi makanan berminyak dan tinggi lemak.
<br>Alasan fisiologis di balik anjuran medis tersebut adalah....
</p>`,
    options: [
      { id: "A", text: "hati berhenti memproduksi cairan empedu secara permanen sehingga pencernaan lemak berhenti total" },
      { id: "B", text: "tidak ada lagi tempat penyimpanan dan pemekatan getah empedu sehingga emulsifikasi gumpalan lemak menjadi lambat saat lemak masuk dalam jumlah besar" },
      { id: "C", text: "enzim lipase pankreas kehilangan aktivitas katalitiknya karena getah empedu merupakan koenzim aktif lipase" },
      { id: "D", text: "usus halus kehilangan kemampuan menghasilkan vili absorpsi akibat ketiadaan garam empedu" },
      { id: "E", text: "lemak yang tidak diemulsikan akan langsung diserap masuk ke pembuluh limfa dan menyumbat pembuluh darah" }
    ],
    kunci: "B",
    pembahasan: `<strong>Fisiologi Kantung Empedu (Vesica Fellea):</strong><br>
&bull; Hati adalah organ yang memproduksi cairan empedu, sedangkan kantung empedu berfungsi <strong>menampung, memekatkan, dan melepaskan</strong> empedu secara terkonsentrasi saat kimus berlemak merangsang pelepasan hormon kolesistokinin (CCK).<br>
&bull; Tanpa kantung empedu, cairan empedu mengalir konstan namun berkadar encer langsung ke duodenum.<br>
&bull; Jika pasien mengonsumsi makanan kaya lemak dalam porsi besar, ketersediaan surfaktan garam empedu untuk mengemulsikan tetesan lemak menjadi misel-misel mikro tidak memadai, menyebabkan steatorea (feses berlemak) dan diare kram.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 19,
    elemen: "Genetika dan Evolusi",
    subelemen: "Teori Evolusi & Spesiasi",
    indikator: "Membedakan mekanisme isolasi reproduksi pra-zigotik dan pasca-zigotik.",
    kode: "26BIO-HOTS-EVO19",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Isolasi reproduksi mencegah terjadinya perkawinan silang antarspesies yang berbeda sehingga integritas lungkang gen (<em>gene pool</em>) masing-masing spesies terjaga.
<br>Tentukan <strong>Benar</strong> atau <strong>Salah</strong> untuk setiap contoh mekanisme isolasi reproduksi berikut!
</p>`,
    items: [
      { pernyataan: "Dua spesies katak yang hidup di kolam yang sama tetapi memiliki masa kawin pada bulan yang berbeda merupakan contoh isolasi temporal (pra-zigotik).", kunci: "Benar", penjelasan: "Perbedaan musim/waktu kawin mencegah pertemuan gamet sebelum fertilisasi terjadi." },
      { pernyataan: "Kuda dan keledai dapat kawin menghasilkan keturunan bagal (mule) yang steril/mandul merupakan contoh isolasi mekanis (pra-zigotik).", kunci: "Salah", penjelasan: "Kemadulan keturunan hibrida (hybrid sterility) adalah contoh isolasi pasca-zigotik, bukan pra-zigotik." },
      { pernyataan: "Ketidakcocokan bentuk alat reproduksi serangga jantan dan betina sehingga transfer sperma gagal merupakan contoh isolasi mekanik (pra-zigotik).", kunci: "Benar", penjelasan: "Ketidaksesuaian anatomi struktur kopulasi secara fisik menghalangi perkawinan." }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Klasifikasi Isolasi Reproduktif:</strong><br>
1. <strong>Barier Pra-zigotik:</strong> Menghalangi perkawinan atau pembuahan.<br>
   &bull; Isolasi habitat, temporal (waktu), perilaku (etologis), mekanik, dan gametis.<br>
2. <strong>Barier Pasca-zigotik:</strong> Bekerja setelah zigot hibrida terbentuk.<br>
   &bull; Kematian hibrida (hybrid inviability), kemandulan hibrida (hybrid sterility, contoh: bagal/mule), dan kerusakan hibrida generasi lanjut (hybrid breakdown).<br>
<strong>Kunci Jawaban: 1=Benar, 2=Salah, 3=Benar</strong>`
  },
  {
    id: 20,
    elemen: "Bioteknologi",
    subelemen: "Bioteknologi Konvensional",
    indikator: "Mengidentifikasi mikroorganisme dan reaksi biokimia dalam fermentasi produk pangan tradisional.",
    kode: "26BIO-HOTS-BIO20",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Dalam pembuatan nata de coco dari air kelapa, bakteri <em>Acetobacter xylinum</em> ditambahkan ke dalam medium yang diberi sumber karbon dan nitrogen. Selama proses fermentasi, terbentuk lapisan putih tebal dan kenyal di permukaan wadah.
<br>Senyawa utama yang menyusun lapisan kenyal tersebut beserta mekanismenya adalah....
</p>`,
    options: [
      { id: "A", text: "serat selulosa murni yang disintesis dan diekskresikan oleh bakteri untuk membentuk jalinan pelindung terapung di permukaan medium yang kaya oksigen" },
      { id: "B", text: "gumpalan protein kasein yang menggumpal akibat penurunan pH oleh produksi asam laktat" },
      { id: "C", text: "polisakarida amilum yang dibentuk dari hasil fiksasi karbon dioksida oleh bakteri fototrof" },
      { id: "D", text: "lapisan lemak pektin yang diekstrak dari dinding buah kelapa akibat aktivitas enzim pektinase" },
      { id: "E", text: "endapan kalsium oksalat yang mengkristal akibat reaksi fermentasi alkohol" }
    ],
    kunci: "A",
    pembahasan: `<strong>Biosintesis Selulosa Bakterial pada Nata de Coco:</strong><br>
&bull; <em>Acetobacter xylinum</em> (sekarang <em>Komagataeibacter xylinus</em>) adalah bakteri asam asetat aerob obligat.<br>
&bull; Bakteri ini menggunakan glukosa medium untuk mensintesis pita-pita mikrofibril <strong>selulosa ekstraseluler</strong> melalui kompleks terminal sintetase membran.<br>
&bull; Anyaman serat selulosa ini membentuk pelikel mengapung di permukaan cairan untuk menjaga agar koloni bakteri tetap berada di zona antarmuka udara-cairan yang kaya gas \(\\text{O}_2\).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 21,
    elemen: "Proses-Proses Pada Makhluk Hidup",
    subelemen: "Sistem Gerak & Kontraksi Otot",
    indikator: "Menganalisis mekanisme pergeseran filamen (sliding filament theory) pada sarkomer otot rangka.",
    kode: "26BIO-HOTS-GER21",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Menurut teori pergeseran filamen (<em>sliding filament theory</em>), pemendekan sarkomer otot rangka saat kontraksi dipicu oleh pelepasan ion kalsium (\(\\text{Ca}^{2+}\)) dari retikulum sarkoplasma.
<br>Peran spesifik ion \(\\text{Ca}^{2+}\) dalam memicu terbukanya situs pengikatan jembatan silang (cross-bridge) adalah....
</p>`,
    options: [
      { id: "A", text: "berikatan dengan troponin C, menyebabkan perubahan konformasi yang menggeser tropomiosin dari situs aktif aktin" },
      { id: "B", text: "menghidrolisis molekul ATP pada kepala miosin menjadi ADP dan fosfat anorganik" },
      { id: "C", text: "memotong filamen tebal miosin menjadi monomer-monomer globular pendek" },
      { id: "D", text: "menutup pompa natrium di tubulus transversal (T-tubule) untuk memperlambat repolarisasi" },
      { id: "E", text: "melekatkan pita I secara permanen ke garis M di tengah sarkomer" }
    ],
    kunci: "A",
    pembahasan: `<strong>Mekanisme Molekuler Kontraksi Otot:</strong><br>
1. Saat relaksasi, kompleks <strong>tropomiosin</strong> menutupi situs pengikatan miosin pada untai heliks aktin.<br>
2. Potensial aksi merambat ke T-tubulus &rarr; membuka kanal \(\\text{Ca}^{2+}\) di retikulum sarkoplasma.<br>
3. Ion \(\\text{Ca}^{2+}\) berikatan dengan subunit <strong>troponin C</strong>.<br>
4. Pengikatan ini mengubah bentuk konformasi troponin sehingga menarik untai tropomiosin menyingkir dari celah aktin.<br>
5. Kepala miosin yang telah berenergi tinggi (berisi ADP + Pi) kini dapat berikatan dengan aktin membentuk <em>cross-bridge</em> dan melakukan kayuhan daya (<em>power stroke</em>).<br>
<strong>Kunci Jawaban: A</strong>`
  },
  {
    id: 22,
    elemen: "Keanekaragaman Hayati",
    subelemen: "Konservasi & Keanekaragaman Spesies",
    indikator: "Mengevaluasi keunggulan strategi konservasi insitu dibandingkan eksitu bagi spesies langka.",
    kode: "26BIO-HOTS-KON22",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pemerintah memutuskan memperluas zona suaka pada habitat alami Orangutan Sumatra (<em>Pongo abelii</em>) di Taman Nasional Gunung Leuser (konservasi in-situ) daripada hanya mengandalkan penangkaran kebun binatang (konservasi ex-situ).
<br>Keunggulan ekologis dan evolusioner utama dari konservasi in-situ bagi kelangsungan jangka panjang spesies tersebut adalah....
</p>`,
    options: [
      { id: "A", text: "biaya operasional pemeliharaan harian jauh lebih murah dan tidak membutuhkan pengawasan polisi hutan" },
      { id: "B", text: "mempertahankan proses adaptasi alami, dinamika seleksi alam, struktur sosial, dan menjaga keutuhan relung ekologis spesies di habitat aslinya" },
      { id: "C", text: "menjamin 100% individu bebas dari risiko penyakit menular dan perburuan liar" },
      { id: "D", text: "memungkinkan manipulasi genetik dan kawin silang antarspesies yang berbeda secara leluasa" },
      { id: "E", text: "mempermudah komersialisasi satwa liar untuk mendukung pendapatan pariwisata massal" }
    ],
    kunci: "B",
    pembahasan: `<strong>Keunggulan Konservasi In-situ:</strong><br>
&bull; Konservasi in-situ (di dalam habitat aslinya seperti cagar alam, suaka margasatwa, taman nasional) memungkinkan populasi satwa liar tetap berinteraksi dengan pemangsa, mangsa, parasit, dan tumbuhan pakan alaminya.<br>
&bull; Hal ini menjaga <strong>tekanan seleksi alamiah</strong>, transmisi perilaku budaya primata (misal cara membuat sarang dan mencari pakan), mencegah domestikasi buatan, serta melestarikan seluruh jejaring ekosistem hutan hujan tropis secara holistik.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 23,
    elemen: "Genetika dan Evolusi",
    subelemen: "Regulasi Ekspresi Gen",
    indikator: "Menganalisis sistem operon Lac pada bakteri Escherichia coli saat ketersediaan glukosa dan laktosa bervariasi.",
    kode: "26BIO-HOTS-GEN23",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Model operon <em>Lac</em> pada <em>Escherichia coli</em> mengatur ekspresi enzim untuk metabolisme gula laktosa. Bakteri dikultur dalam medium yang <strong>kaya laktosa namun tidak mengandung glukosa sama sekali</strong>.
<br>Kondisi molekuler operon <em>Lac</em> yang terjadi adalah....
</p>`,
    options: [
      { id: "A", text: "Represor terikat kuat pada operator dan transkripsi gen struktural (lacZ, lacY, lacA) terhenti total." },
      { id: "B", text: "Allolaktosa berikatan dengan protein represor sehingga terlepas dari operator, dan kompleks cAMP-CAP menempel pada promotor memicu transkripsi tingkat tinggi." },
      { id: "C", text: "Kadar cAMP turun drastis sehingga RNA polimerase tidak dapat menempel pada promotor." },
      { id: "D", text: "Gen lacZ mengalami mutasi translokasi sehingga hanya memproduksi enzim pemecah glukosa." },
      { id: "E", text: "Protein aktivator CAP diurai oleh protease bakteri sehingga operon tidak aktif." }
    ],
    kunci: "B",
    pembahasan: `<strong>Regulasi Ganda Operon Lac (Kontrol Negatif & Positif):</strong><br>
1. <strong>Keberadaan Laktosa (Induksi):</strong> Molekul allolaktosa mengikat protein represor LacI, mengubah konformasinya sehingga represor inaktif dan terlepas dari sekuens operator.<br>
2. <strong>Ketiadaan Glukosa (Aktivasi Katabolit):</strong> Ketiadaan glukosa memicu peningkatan enzim adenilat siklase &rarr; konsentrasi \(\\text{cAMP}\) intraseluler melonjak.<br>
3. Kompleks \(\\text{cAMP}-\\text{CAP}\) berikatan dengan situs CAP di hulu promotor, menstabilkan penempelan RNA polimerase, menghasilkan <strong>transkripsi tingkat tinggi (ekspresi maksimal)</strong>.<br>
<strong>Kunci Jawaban: B</strong>`
  },
  {
    id: 24,
    elemen: "Sel",
    subelemen: "Metabolisme Sel (Fotosintesis Tumbuhan C3, C4, CAM)",
    indikator: "Membedakan strategi adaptasi fiksasi karbon pada tumbuhan C4 dan CAM terhadap efisiensi penggunaan air.",
    kode: "26BIO-HOTS-TUM24",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Tumbuhan telah mengembangkan adaptasi evolusioner fiksasi karbon untuk mengatasi laju fotorespirasi RuBisCO di lingkungan panas dan kering.
<br>Tentukan <strong>Benar</strong> atau <strong>Salah</strong> perbandingan tumbuhan C4 (seperti jagung/tebu) dan CAM (seperti kaktus/nanas) berikut!
</p>`,
    items: [
      { pernyataan: "Tumbuhan C4 memisahkan fiksasi awal CO₂ dan Siklus Calvin secara spasial (pada dua ruang sel berbeda: sel mesofil dan sel seludang pembuluh).", kunci: "Benar", penjelasan: "Anatomi Kranz memisahkan fiksasi CO₂ oleh PEP karboksilase di mesofil dan Siklus Calvin di seludang pembuluh." },
      { pernyataan: "Tumbuhan CAM membuka stomata pada siang hari terik dan menutupnya pada malam hari untuk memaksimalkan penyerapan foton.", kunci: "Salah", penjelasan: "Tumbuhan CAM membuka stomata pada malam hari (menghindari transpirasi) dan menutupnya pada siang hari." },
      { pernyataan: "Baik tumbuhan C4 maupun CAM sama-sama menggunakan enzim PEP karboksilase untuk fiksasi awal CO₂ membentuk asam malat/oksalat (senyawa 4C).", kunci: "Benar", penjelasan: "Keduanya menggunakan PEP karboksilase yang tidak memiliki aktivitas oksigenase sehingga terbebas dari fotorespirasi." }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Perbandingan Tumbuhan C4 dan CAM:</strong><br>
&bull; <strong>C4: Pemisahan Ruang (Spasial)</strong> &rarr; Sel mesofil memfiksasi \(\\text{CO}_2\) menjadi asam 4C dengan PEP karboksilase, lalu asam malat ditransfer ke sel seludang pembuluh (Kranz anatomy) di mana \(\\text{CO}_2\) dilepas ke RuBisCO.<br>
&bull; <strong>CAM: Pemisahan Waktu (Temporal)</strong> &rarr; Stomata hanya dibuka pada <strong>malam hari</strong> yang dingin (air dihemat), \(\\text{CO}_2\) disimpan sebagai asam malat di vakuola. Pada siang hari saat stomata tertutup rapat, malat didekarboksilasi untuk Siklus Calvin menggunakan ATP/NADPH dari reaksi terang.<br>
<strong>Kunci Jawaban: 1=Benar, 2=Salah, 3=Benar</strong>`
  },
  {
    id: 25,
    elemen: "Keterampilan Proses",
    subelemen: "Analisis Data & Metode Ilmiah",
    indikator: "Menafsirkan grafik pertumbuhan populasi (kurva sigmoid logistik vs eksponensial) dan daya dukung lingkungan (carrying capacity).",
    kode: "26BIO-HOTS-EKO25",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Pertumbuhan populasi suatu spesies rusa di pulau terisolasi mengikuti model logistik sigmoid yang dirumuskan oleh persamaan Verhulst:
\\[\\frac{dN}{dt} = rN \\left( \\frac{K - N}{K} \\right)\\]
di mana \(r\) adalah laju pertumbuhan intrinsik, \(N\) adalah ukuran populasi saat ini, dan \(K\) adalah daya dukung lingkungan (<em>carrying capacity</em>).
<br>Kondisi yang terjadi ketika ukuran populasi \(N\) mendekati atau sama dengan nilai daya dukung lingkungan (\(N \\approx K\)) adalah....
</p>`,
    options: [
      { id: "A", text: "Laju pertambahan populasi per satuan waktu (dN/dt) mendekati nol sehingga ukuran populasi stabil membentuk fase stasioner platuk." },
      { id: "B", text: "Laju kelahiran meningkat secara eksponensial karena kompetisi intraspesifik lenyap." },
      { id: "C", text: "Daya dukung lingkungan (K) berlipat ganda untuk mengakomodasi pertambahan individu baru." },
      { id: "D", text: "Populasi langsung mengalami kepunahan massal akibat ketiadaan materi genetik baru." },
      { id: "E", text: "Laju kematian anjlok hingga nol karena sumber daya makanan menjadi tidak terbatas." }
    ],
    kunci: "A",
    pembahasan: `<strong>Analisis Matematis Model Pertumbuhan Logistik:</strong><br>
&bull; Suku \(\\frac{K - N}{K}\) merefleksikan resistensi lingkungan yang membatasi pertumbuhan.<br>
&bull; Ketika \(N \\rightarrow K\), nilai pembilang \((K - N) \\rightarrow 0\), sehingga:<br>
  \\[\\frac{dN}{dt} = rN \\times 0 = 0\\]
&bull; Artinya laju kelahiran (\(b\)) seimbang dengan laju kematian (\(d\)). Populasi berhenti tumbuh secara eksponensial dan mendatar pada <strong>fase stasioner (equilibrium)</strong> sesuai kapasitas daya dukung sumber daya lingkungan.<br>
<strong>Kunci Jawaban: A</strong>`
  }
];

const tkaBiologiPaket2Registry = {
  id: "paket2",
  title: "Paket 2: Try Out TKA Biologi 2025/2026 (25 Soal HOTS)",
  shortTitle: "Paket 2 (Try Out 2025/2026)",
  badge: "Try Out HOTS",
  total: 25,
  data: tkaBiologiPaket2Data
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaBiologiPaket2Data, tkaBiologiPaket2Registry };
}

if (typeof window !== 'undefined') {
  window.tkaBiologiPaket2Data = tkaBiologiPaket2Data;
  window.tkaBiologiPaket2Registry = tkaBiologiPaket2Registry;
}
