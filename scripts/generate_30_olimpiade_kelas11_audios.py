#!/usr/bin/env python3
"""
scripts/generate_30_olimpiade_kelas11_audios.py
Generate 30 Indonesian Audio Narrations for Bab 8: Pengayaan Olimpiade Matematika SMA Kelas XI (OSN-K & OSN-P)
5 audio tracks per sub-bab (1 per slide/poin) using Microsoft Edge Neural Voice (id-ID-ArdiNeural).
"""

import asyncio
import os
import sys

try:
    import edge_tts
except ImportError:
    print("Error: edge-tts not installed.")
    print("Install via: pip install edge-tts")
    sys.exit(1)

OUTPUT_DIR = "storage/audio/matematika/kelas-11/olimpiade"
os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE = "id-ID-ArdiNeural"

AUDIOS = [
    # Sub-bab 1: Aljabar Polinomial & Vieta Olimpiade
    {
        "filename": "aljabar-poin-1-vieta-derajat-tinggi.mp3",
        "text": "Selamat datang di modul aljabar olimpiade matematika SMA kelas 11. Di poin pertama ini, kita membedah Teorema Vieta untuk polinomial berderajat tiga atau lebih. Pesan paling penting dari pembina olimpiade adalah: jangan pernah tergoda mencari nilai akar-akarnya satu per satu! Dalam seleksi OSN, akar-akar dari polinomial berderajat tinggi hampir selalu berupa bilangan irasional rumit atau bilangan kompleks. Yang diuji oleh juri bukanlah kemampuan Anda menghitung manual yang melelahkan, melainkan kejelian Anda mengeksploitasi fungsi simetris dasar dari koefisien persamaannya. Perhatikan pola tanda bergantian: minus, plus, minus, plus. Suku s1 adalah minus an minus satu per an. Suku s2 adalah an minus dua per an, dan seterusnya hingga hasil kali seluruh akar sn adalah minus satu dipangkatkan n dikali a nol per an. Dari fungsi simetris dasar ini, kita bisa menghitung jumlahan kuadrat, jumlahan kubik, hingga jumlahan kebalikan akar. Trik rahasia untuk jumlahan kebalikan akar: daripada menyamakan penyebut, lakukan substitusi variabel x sama dengan satu per y, yang secara otomatis membalik urutan koefisien polinomial. Dengan trik ini, jumlahan kebalikan akar langsung terjawab hanya dalam satu detik!"
    },
    {
        "filename": "aljabar-poin-2-newton-sums-rekursif.mp3",
        "text": "Di poin kedua ini, kita mempelajari senjata legendaris aljabar olimpiade yaitu Rumus Rekursi Newton atau Newton's Sums. Bayangkan di ruang ujian Anda diminta menghitung jumlahan akar berpangkat lima, a pangkat lima tambah b pangkat lima tambah c pangkat lima. Jika Anda mencoba menggunakan ekspansi multinomial atau aljabar biasa, Anda akan membuang waktu lebih dari 20 menit dan sangat rentan salah tanda. Newton's Sums memberikan jalan pintas yang sangat brilian. Karena setiap akar memenuhi persamaan awal, kita cukup mengalikan persamaan tersebut dengan x pangkat k lalu menjumlahkannya untuk seluruh akar. Hubungan rekursif yang tercipta memungkinkan kita melangkah dari pangkat rendah ke pangkat tinggi secara bertahap: P1, lalu P2, P3, P4, hingga P5. Hati-hati dengan satu jebakan fatal: nilai awal P nol bernilai n, yaitu banyaknya akar, bukan nol atau satu! Jika P nol Anda salah, maka seluruh rantai perhitungan berikutnya akan hancur. Kuasai rekursi ini, maka soal pangkat tinggi tingkat provinsi dapat Anda tuntaskan dalam hitungan baris!"
    },
    {
        "filename": "aljabar-poin-3-keterbagian-polinomial-bulat.mp3",
        "text": "Poin ketiga membahas sifat keterbagian untuk polinomial berkoefisien bulat, atau elemen dari Z x. Teorema kuncinya sangat ringkas namun mematikan: untuk sembarang bilangan bulat a dan b yang berbeda, a minus b selalu membagi habis P a dikurang P b. Mengapa ini selalu benar? Karena setiap suku an dikali a pangkat n dikurang b pangkat n selalu memiliki faktor aljabar a minus b. Senjata ini sangat ampuh untuk membuktikan bahwa suatu persamaan polinomial bulat tidak memiliki solusi. Contoh klasik olimpiade: buktikan tidak ada polinomial bulat yang memenuhi P a sama dengan b, P b sama dengan c, dan P c sama dengan a untuk tiga bilangan bulat berbeda. Dengan sifat keterbagian, kita mendapatkan rantai keterbagian siklik yang memaksa selisih mutlak ketiganya sama besar. Namun karena jumlahan ketiga selisih tersebut harus nol, kondisi ini memicu kontradiksi matematis yang mutlak. Pelajari juga Kriteria Eisenstein di slide ini untuk menguji apakah suatu polinomial dapat difaktorkan atau tidak."
    },
    {
        "filename": "aljabar-poin-4-fungsi-selisih-monik.mp3",
        "text": "Di poin keempat, kita membahas strategi rekayasa aljabar tingkat master: membuat fungsi selisih pembantu Q x sama dengan P x dikurang g x. Pola soal olimpiade yang sangat umum adalah memberikan nilai polinomial di beberapa titik terurut, misalnya P satu sama dengan 10, P dua sama dengan 20, P tiga sama dengan 30, dan P empat sama dengan 40 untuk polinomial monik berderajat empat. Peserta pemula akan memisalkan P x sama dengan a x pangkat empat tambah b x pangkat tiga dan seterusnya, lalu terjebak dalam sistem persamaan linear empat variabel yang melelahkan. Juara olimpiade melihat polanya: nilai P x selalu sama dengan 10x pada keempat titik tersebut! Maka definisikan Q x sama dengan P x dikurang 10x. Karena nilainya nol pada x satu, dua, tiga, dan empat, maka keempat titik itu adalah akar-akar langsung dari Q x! Bentuk faktorisasi Q x langsung diketahui seketika tanpa eliminasi apa pun. Dengan trik fungsi selisih ini, Anda bisa mencari nilai di titik mana pun hanya dalam tiga baris perhitungan yang sangat elegan."
    },
    {
        "filename": "aljabar-poin-5-kuis-evaluasi-aljabar.mp3",
        "text": "Selamat tiba di kuis evaluasi aljabar polinomial kompetisi OSN! Di slide penutup ini, Anda disajikan soal-soal pilihan ganda berstandar seleksi yang dirancang khusus untuk menguji ketajaman intuisi aljabar Anda. Sebelum mulai menjawab, ingat tiga pedoman taktis dari pembina: pertama, pada soal Teorema Vieta, selalu periksa apakah Anda diminta mencari akar atau fungsi simetrisnya. Manfaatkan bentuk kebalikan akar dan pergeseran variabel. Kedua, pada soal rekursi Newton, hitung nilai awal P nol, P satu, dan P dua dengan teliti sebelum melompat ke pangkat yang lebih tinggi. Dan ketiga, pada soal nilai polinomial di beberapa titik, selalu cari pola fungsinya terlebih dahulu sebelum tergoda melakukan eliminasi koefisien. Kerjakan kuis ini secara mandiri, baca pembahasannya dengan cermat, dan bersiaplah melangkah ke sub-materi berikutnya yaitu Teori Bilangan dan Persamaan Diophantine!"
    },

    # Sub-bab 2: Teori Bilangan & Persamaan Diophantine
    {
        "filename": "teoribilangan-poin-1-bezout.mp3",
        "text": "Selamat datang di materi kedua olimpiade: Teori Bilangan dan Persamaan Diophantine. Di poin pertama ini, kita mempelajari Algoritma Euclidean dan Identitas Bézout. Ini adalah fondasi utama dari seluruh analisis persamaan Diophantine linier berbentukan ax tambah by sama dengan c. Syarat mutlak agar persamaan ini memiliki solusi bilangan bulat adalah faktor persekutuan terbesar FPB dari a dan b harus membagi habis konstanta c. Jika syarat keterbagian ini tidak terpenuhi, Anda bisa langsung menyimpulkan tidak ada solusi tanpa perlu menghitung lebih jauh. Langkah taktisnya: jalankan pembagian bertingkat Euclidean hingga sisa terakhir bernilai nol, lalu lakukan substitusi balik untuk mengekstrak sepasang solusi partikular x nol dan y nol. Dari sepasang solusi khusus ini, seluruh keluarga solusi bilangan bulat tak hingga dapat dirumuskan secara presisi. Kuasai mekanisme substitusi balik ini karena ini adalah modal awal yang wajib dikuasai setiap finalis OSN!"
    },
    {
        "filename": "teoribilangan-poin-2-crt.mp3",
        "text": "Di poin kedua, kita membedah Teorema Sisa Cina atau Chinese Remainder Theorem. Di ruang kompetisi, Anda sering disajikan teka-teki kuno: temukan bilangan bulat terkecil yang jika dibagi 3 bersisa 2, dibagi 5 bersisa 3, dan dibagi 7 bersisa 2. Mencari dengan mencoba satu per satu angka akan menghabiskan waktu berharga Anda. CRT menjamin adanya solusi unik dalam modulo perkalian ketiga pembagi tersebut, dengan syarat mutlak seluruh modulo harus saling prima atau koprima sepasang demi sepasang. Langkah pembina: hitung perkalian total M, tentukan sub-modulus Mi, lalu cari invers perkalian modular yi sedemikian rupa sehingga Mi dikali yi kongruen dengan satu modulo mi. Dengan mengalikan sisa bagi dengan masing-masing faktor pembobot ini, nilai solusi gabungan langsung ditemukan secara instan dan rigor. CRT adalah senjata paling mematikan untuk memecahkan sistem kongruensi simultan!"
    },
    {
        "filename": "teoribilangan-poin-3-fermat-euler.mp3",
        "text": "Poin ketiga membahas Teorema Kecil Fermat dan perumuman emasnya oleh Leonhard Euler melalui Fungsi Totient Phi. Saat menghadapi soal OSN yang menanyakan dua angka terakhir dari 7 dipangkatkan 2026, jangan pernah mencoba mengalikan manual! Dua angka terakhir berarti kita bekerja dalam modulo 100. Fungsi Totient Euler phi 100 bernilai 40. Teorema Euler menyatakan bahwa jika basis a dan modulo m saling prima, maka a dipangkatkan phi m selalu kongruen dengan satu modulo m. Ini berarti kita dapat langsung memotong eksponen 2026 dengan modulo 40! Sisa pangkatnya menyusut drastis menjadi hanya 26. Ditambah dengan sifat bahwa 7 pangkat 4 bernilai 2401 yang kongruen dengan satu modulo 100, eksponen raksasa tersebut runtuh seketika menyisakan 7 kuadrat yaitu 49. Ingat selalu: reduksi eksponen dengan phi m, bukan dengan m itu sendiri!"
    },
    {
        "filename": "teoribilangan-poin-4-residu-sfft.mp3",
        "text": "Di poin keempat, kita mempelajari dua trik pembunuh persamaan Diophantine non-linier: Trik Penjerat Modulo Residu Kuadrat dan Simon's Favorite Factoring Trick atau SFFT. Di olimpiade, banyak persamaan yang tampaknya mustahil diselesaikan dengan aljabar biasa, seperti x kuadrat tambah y kuadrat sama dengan 3 dikali z kuadrat. Trik rahasianya: uji kedua ruas dalam modulo 3 atau modulo 4! Ingat kaidah emas ini di luar kepala: bilangan kuadrat sempurna hanya bisa bersisa 0 atau 1 jika dibagi 3 atau 4. Tidak ada kuadrat yang bersisa 2 atau 3! Dengan memeriksa kombinasi residu, Anda dapat membuktikan bahwa persamaan tersebut hanya memiliki solusi sepele nol nol nol melalui penurunan tak hingga Fermat. Senjata kedua adalah SFFT: mengubah bentuk xy tambah ax tambah by menjadi kurung x tambah b dikali y tambah a dengan menambahkan ab di kedua ruas. Bentuk perkalian faktor bulat ini langsung membatasi solusi menjadi sejumlah hingga pasangan faktor!"
    },
    {
        "filename": "teoribilangan-poin-5-kuis-evaluasi.mp3",
        "text": "Selamat tiba di kuis evaluasi teori bilangan dan persamaan Diophantine! Di slide penutup ini, ada tiga soal seleksi olimpiade yang menguji kejelian Anda menerapkan seluruh teori yang telah kita pelajari. Dengarkan panduan taktis pembina: pertama, pada soal digit terakhir atau sisa bagi pangkat besar, hitung fungsi totient phi m dan manfaatkan pembagi terdekat yang menghasilkan residu satu atau minus satu. Kedua, pada soal persamaan pecahan Diophantine seperti 1 per x tambah 1 per y sama dengan 1 per n, kalikan silang dan terapkan SFFT menjadi x minus n dikali y minus n sama dengan n kuadrat. Dan ketiga, pada kongruensi simultan, cari angka yang memenuhi dua kongruensi pertama sebelum menguji pada kongruensi ketiga. Kerjakan kuis ini secara cermat, baca ulasan rigornya, dan mari bersiap menuju materi Geometri dan Trigonometri Olimpiade Lanjutan!"
    },

    # Sub-bab 3: Geometri & Trigonometri Lanjutan
    {
        "filename": "geometri-poin-1-ptolemy.mp3",
        "text": "Selamat datang di materi ketiga: Geometri dan Trigonometri Olimpiade Lanjutan. Di poin pertama ini, kita membedah Teorema Ptolemy dan Ketaksamaan Ptolemy. Teorema ini adalah salah satu senjata paling indah dan paling sering keluar dalam geometri olimpiade tingkat lanjut. Teorema Ptolemy menyatakan bahwa untuk segiempat tali busur siklik, perkalian panjang kedua diagonalnya tepat sama dengan jumlahan dari perkalian sisi-sisi yang saling berseberangan: AC dikali BD sama dengan AB dikali CD ditambah BC dikali DA. Jika keempat titik sudutnya tidak berada pada satu lingkaran atau tidak siklik, maka ruas kiri selalu lebih kecil daripada ruas kanan, yang kita sebut Ketaksamaan Ptolemy. Trik olimpiade penting: gunakan Teorema Ptolemy untuk menghitung panjang diagonal yang belum diketahui, atau untuk membuktikan kesiklikan empat buah titik. Hubungan ini juga menjadi jembatan luar biasa untuk membuktikan rumus jumlah sinus dan cosinus dalam trigonometri secara murni geometris!"
    },
    {
        "filename": "geometri-poin-2-simson-miquel.mp3",
        "text": "Di poin kedua, kita berkenalan dengan dua konfigurasi klasik yang sangat anggun: Garis Simson dan Titik Miquel. Teorema Garis Simson menyatakan bahwa jika Anda memilih suatu titik P pada lingkaran luar sebuah segitiga, lalu memproyeksikan titik P tersebut secara tegak lurus ke ketiga sisi segitiga, maka ketiga titik kaki proyeksi tersebut dijamin terletak pada satu garis lurus yang sama! Sebaliknya, jika ketiga kaki proyeksi segaris, maka titik P pasti terletak pada lingkaran luar segitiga. Kunci pembuktiannya terletak pada perburuan segiempat-segiempat siklik kecil yang terbentuk dari sudut-sudut siku-siku proyeksi. Konfigurasi kedua adalah Titik Miquel: jika pada sembarang segitiga Anda memilih sebuah titik di setiap sisinya, maka tiga lingkaran luar yang melalui masing-masing titik sudut dan dua titik sisi yang berdekatan akan selalu berpotongan di tepat satu titik persekutuan tunggal. Menguasai dua teorema ini akan melatih mata geometris Anda untuk melihat keteraturan di balik jalinan garis yang rumit!"
    },
    {
        "filename": "geometri-poin-3-power-of-point.mp3",
        "text": "Poin ketiga membahas Teorema Titik Kuasa atau Power of a Point serta konsep Sumbu Radikal. Bagi sembarang titik P dan sebuah lingkaran, jika kita menarik garis yang memotong lingkaran di titik A dan B, maka nilai perkalian berarah PA dikali PB selalu bernilai konstan, tidak peduli arah garis mana pun yang Anda buat! Nilai invarian ini tepat sama dengan d kuadrat dikurang R kuadrat, di mana d adalah jarak titik P ke pusat lingkaran dan R adalah jari-jari lingkaran. Jika titik P berada di luar lingkaran dan kita menarik garis singgung di titik T, maka perkalian PA dikali PB tepat sama dengan PT kuadrat. Dari konsep titik kuasa ini lahir Sumbu Radikal, yaitu tempat kedudukan titik-titik yang memiliki kuasa yang sama terhadap dua lingkaran. Sumbu radikal ini selalu berupa garis lurus yang tegak lurus terhadap garis penghubung kedua pusat lingkaran. Ini adalah senjata utama untuk membuktikan konkurensi tiga lingkaran dalam seleksi tingkat nasional!"
    },
    {
        "filename": "geometri-poin-4-trigonometri-segitiga.mp3",
        "text": "Di poin keempat, kita beralih ke trigonometri sudut segitiga di mana jumlahan sudut A tambah B tambah C sama dengan 180 derajat atau pi radian. Kondisi jumlahan sudut konstan ini melahirkan identitas aljabar trigonometri yang sangat mempesona: jumlahan tangen ketiga sudut tepat sama dengan hasil kali ketiga tangennya! Tan A ditambah tan B ditambah tan C sama dengan tan A dikali tan B dikali tan C. Mengapa identitas ini sangat sakti? Karena dalam soal ketaksamaan atau aljabar non-rutin, kita bisa mengubah jumlahan menjadi perkalian dalam satu langkah instan. Untuk sudut setengah, berlaku pula identitas komplementer bahwa tan A per dua dikali tan B per dua ditambah tan B per dua dikali tan C per dua ditambah tan C per dua dikali tan A per dua tepat sama dengan satu. Sering kali soal aljabar yang tampak abstrak dengan syarat xy tambah yz tambah zx sama dengan satu sesungguhnya adalah penyamaran dari sudut setengah segitiga!"
    },
    {
        "filename": "geometri-poin-5-kuis-evaluasi.mp3",
        "text": "Selamat tiba di kuis evaluasi geometri dan trigonometri olimpiade lanjutan! Di slide penutup ini, ada tiga soal pilihan ganda berbobot olimpiade. Dengarkan panduan taktis dari pembina sebelum Anda mulai: pertama, saat mengerjakan soal geometri, selalu buat sketsa gambar yang besar, rapi, dan proporsional. Gambar yang akurat sering kali secara visual membisikkan hubungan kesiklikan atau kesebangunan yang tersembunyi. Kedua, pada soal segiempat dengan panjang sisi lengkap dan diagonal yang ditanyakan, segera uji apakah segiempat tersebut siklik agar Anda bisa langsung mengerahkan Teorema Ptolemy. Dan ketiga, pada soal garis singgung dan tali busur yang berpotongan, gunakan relasi titik kuasa PT kuadrat sama dengan PA dikali PB. Kerjakan kuis ini dengan konsentrasi penuh, baca ulasan solusinya, dan mari kita lanjutkan ke materi Ketaksamaan dan Deret Teleskopik!"
    },

    # Sub-bab 4: Ketaksamaan & Deret Teleskopik Olimpiade
    {
        "filename": "ketaksamaan-poin-1-titu.mp3",
        "text": "Selamat datang di modul keempat: Ketaksamaan dan Deret Teleskopik Olimpiade. Di poin pertama ini, kita mempelajari Ketaksamaan Cauchy-Schwarz dan bentuk fraksionalnya yang sangat terkenal yaitu Titu's Lemma atau Engel Form. Di arena olimpiade, banyak sekali soal ketaksamaan pecahan yang menjebak peserta untuk menyamakan penyebut. Menyamakan penyebut adalah malapetaka aljabar yang memicu persamaan suku banyak derajat tinggi! Titu's Lemma hadir sebagai pembasmi pecahan aljabar: jumlahan pecahan dengan pembilang kuadrat ui kuadrat dibagi vi selalu lebih besar atau sama dengan kuadrat jumlahan seluruh pembilang dibagi jumlahan seluruh penyebut. Seluruh pembilang dikumpulkan menjadi satu kuadrat di atas, dan seluruh penyebut dijumlahkan secara linear di bawah. Jika pembilangnya belum kuadrat, gunakan trik memaksa bentuk kuadrat dengan mengalikan pembilang dan penyebut dengan variabel yang sama. Trik ini memotong waktu pengerjaan soal pembuktian OSN hingga 80 persen!"
    },
    {
        "filename": "ketaksamaan-poin-2-jensen.mp3",
        "text": "Di poin kedua, kita membedah Ketaksamaan Jensen dan analisis konveksitas kurva. Ketaksamaan Jensen menghubungkan nilai rata-rata fungsi dengan fungsi dari nilai rata-rata variabelnya. Untuk fungsi yang konveks atau cekung ke atas, yang ditandai dengan turunan kedua f double aksen x selalu lebih besar atau sama dengan nol pada intervalnya, berlaku bahwa rata-rata nilai fungsi selalu lebih besar atau sama dengan nilai fungsi di titik rata-rata variabel. Sebaliknya, untuk fungsi konkaf atau cekung ke bawah di mana turunan kedua kurang dari sama dengan nol, tandanya berbalik. Contoh paling legendaris adalah membuktikan bahwa jumlahan sinus A tambah sinus B tambah sinus C pada segitiga selalu bernilai maksimal tiga akar tiga per dua. Karena fungsi sinus adalah konkaf pada rentang nol hingga 180 derajat, Jensen langsung menyimpulkan bahwa nilai maksimum mutlak tercapai saat segitiga tersebut sama sisi, di mana A sama dengan B sama dengan C yaitu 60 derajat!"
    },
    {
        "filename": "ketaksamaan-poin-3-teleskopik.mp3",
        "text": "Poin ketiga membahas Trik Penjumlahan Deret Teleskopik. Bayangkan Anda disajikan deret yang terdiri dari ratusan bahkan ribuan suku pecahan. Menjumlahkan secara konvensional tentu mustahil. Kunci deret teleskopik adalah merekayasa suku umum ak menjadi selisih dari dua suku berturutan, yaitu bk dikurang bk tambah satu. Ketika seluruh suku dijumlahkan dari awal sampai akhir, seluruh suku tengah akan saling meniadakan atau cancel out seperti lipatan teropong teleskop yang dirapatkan! Yang tersisa hanyalah suku pertama di ujung awal dikurangi suku terakhir di ujung akhir. Pelajari tiga pola dekomposisi utama di slide ini: pertama, pecahan parsial satu per k dikali k tambah satu. Kedua, rasionalisasi bentuk akar satu per akar k tambah akar k tambah satu. Dan ketiga, deret teleskopik trigonometri arctan. Hati-hati memeriksa suku-suku sisa di ujung akhir agar tidak terpotong keliru!"
    },
    {
        "filename": "ketaksamaan-poin-4-homogenisasi.mp3",
        "text": "Di poin keempat, kita mempelajari strategi penyetaraan skala aljabar: Homogenisasi dan Normalisasi. Suatu ketaksamaan disebut homogen jika setiap suku memiliki total derajat variabel yang identik. Keajaiban dari ketaksamaan homogen adalah nilainya invarian terhadap penskalaan variabel. Artinya, jika variabel a, b, dan c kita kalikan dengan sembarang konstanta positif k, bentuk ketaksamaan tidak akan berubah sama sekali! Berkat sifat invarian ini, kita berhak secara sah menetapkan asumsi normalisasi tanpa mengurangi keumuman masalah atau without loss of generality WLOG. Misalnya, kita dapat menetapkan jumlahan a tambah b tambah c sama dengan satu, atau hasil kali abc sama dengan satu. Normalisasi ini seketika menyederhanakan perhitungan yang rumit menjadi aljabar yang sangat ramah. Sebaliknya, jika soal memiliki syarat a tambah b tambah c sama dengan satu, kita dapat mengembalikan bentuknya menjadi homogen dengan menyisipkan faktor a tambah b tambah c!"
    },
    {
        "filename": "ketaksamaan-poin-5-kuis-evaluasi.mp3",
        "text": "Selamat tiba di kuis evaluasi ketaksamaan dan deret teleskopik olimpiade! Di slide penutup ini, ada tiga soal pilihan ganda standar OSN. Dengarkan panduan taktis dari pembina: pertama, pada soal pecahan ketaksamaan, jangan pernah buru-buru menyamakan penyebut. Amati apakah Anda bisa mengerahkan Titu's Lemma dengan mengumpulkan pembilang kuadrat di atas. Kedua, pada deret pecahan bertingkat, lakukan dekomposisi pecahan parsial dan tuliskan tiga suku pertama serta dua suku terakhir secara berjajar untuk melihat pola saling menghilangkan. Dan ketiga, pada ketaksamaan trigonometri sudut segitiga, uji apakah fungsi bersifat konveks atau konkaf, lalu manfaatkan Ketaksamaan Jensen di mana titik kesamaan hampir selalu berada pada segitiga sama sisi. Kerjakan kuis ini dengan teliti, baca pembahasannya yang mendalam, dan mari melangkah ke materi Kombinatorika Lanjutan dan Teori Graf!"
    },

    # Sub-bab 5: Kombinatorika Lanjutan & Teori Graf
    {
        "filename": "kombinatorika-poin-1-derangement.mp3",
        "text": "Selamat datang di modul kelima: Kombinatorika Lanjutan dan Teori Graf. Di poin pertama ini, kita mempelajari Prinsip Inklusi-Eksklusi atau PIE dan konsep Derangement yang disimbolkan dengan tanda seru n atau subfaktorial. Bayangkan ada n orang tamu di sebuah pesta yang menaruh topinya di lemari. Ketika pulang dalam keadaan gelap gulita, setiap orang mengambil satu topi secara acak. Berapa peluang atau berapa banyak cara tidak ada satu pun orang yang mendapatkan kembali topinya sendiri? Inilah definisi derangement: permutasi di mana tidak ada elemen yang menempati posisi aslinya. Menggunakan prinsip inklusi-eksklusi dengan tanda selang-seling tambah, kurang, tambah, kurang, kita memperoleh formula ajaib subfaktorial Dn sama dengan n faktorial dikali jumlahan minus satu pangkat k per k faktorial. Untuk n sama dengan 4, nilainya adalah 9 cara. Trik olimpiade penting: ada rumus rekursi praktis yaitu Dn sama dengan n minus satu dikali Dn minus satu ditambah Dn minus dua. Hafalkan nilai D1 sampai D5 di luar kepala untuk menghemat waktu saat OSN-K!"
    },
    {
        "filename": "kombinatorika-poin-2-double-counting.mp3",
        "text": "Di poin kedua, kita membedah salah satu teknik paling puitis dan kuat dalam kombinatorika, yaitu Teknik Double Counting atau Penghitungan Ganda. Filosofi double counting sangat sederhana: jika Anda menghitung ukuran suatu himpunan yang sama dengan dua cara pandang yang berbeda, maka kedua hasil perhitungan tersebut haruslah bernilai identik. Keajaiban hadir ketika sudut pandang pertama menghasilkan jumlahan aljabar rumit, sementara sudut pandang kedua menghasilkan bentuk sederhana terfaktorkan. Misalnya, bayangkan sebuah panitia beranggotakan k orang yang dipilih dari n orang, dengan satu orang bertindak sebagai ketua. Jika Anda memilih anggota panitia terlebih dahulu lalu memilih ketuanya, Anda mendapatkan jumlahan kombinasi k dikali n kombinasi k. Tetapi jika Anda memilih ketua terlebih dahulu dari n orang lalu memilih sisa anggotanya dari n minus satu orang, hasilnya langsung bernilai n dikali dua pangkat n minus satu! Seketika tercipta identitas aljabar kombinatorika yang indah tanpa perlu induksi matematika yang panjang!"
    },
    {
        "filename": "kombinatorika-poin-3-graf-euler.mp3",
        "text": "Poin ketiga membawa kita masuk ke dunia Teori Graf melalui Lemma Jabat Tangan atau Handshaking Lemma dan Rumus Topologi Euler. Lemma Jabat Tangan menyatakan bahwa jika Anda menjumlahkan derajat dari seluruh simpul pada sebuah graf, hasilnya tepat sama dengan dua kali banyaknya sisi. Mengapa dikali dua? Karena setiap sisi menghubungkan tepat dua buah simpul, sehingga setiap satu sisi menyumbangkan tepat dua derajat pada total jumlahan. Konsekuensi paling krusial di olimpiade: banyaknya simpul yang memiliki derajat ganjil harus selalu berjumlah genap! Jika sebuah soal menanyakan apakah mungkin ada graf dengan 5 simpul yang masing-masing berderajat 3, Anda bisa langsung menjawab mustahil dalam 1 detik, karena 5 adalah bilangan ganjil. Untuk graf planar yang digambar di bidang datar tanpa ada sisi yang saling berpotongan, berlaku Rumus Euler V minus E tambah F sama dengan 2, di mana V adalah titik, E adalah sisi, dan F adalah bidang muka. Dari rumus ini diturunkan batas ketaksamaan sisi E kurang dari sama dengan 3V minus 6, yang menjadi bukti bahwa graf lengkap K5 tidak mungkin planar!"
    },
    {
        "filename": "kombinatorika-poin-4-ekstremal-ramsey.mp3",
        "text": "Di poin keempat, kita mempelajari strategi pemecahan masalah tingkat tinggi: Prinsip Ekstremal dan Teorema Ramsey. Prinsip Ekstremal mengajarkan kita untuk selalu memulai analisis dengan memilih elemen yang ekstrem: elemen yang nilainya paling besar, paling kecil, titik yang paling luar, atau segmen garis yang paling pendek. Mengapa titik ekstrem ini sangat istimewa? Karena pada titik ekstrem, batasan ruang atau nilai mencapai titik jenuhnya, sehingga ruang kemungkinan gerak menjadi sangat terbatas dan mudah dianalisis. Konsep kedua adalah Teorema Ramsey yang sering dianalogikan dengan pesta 6 orang. Teorema ini menyatakan bahwa di antara 6 orang sembarang, selalu dipastikan ada setidaknya 3 orang yang saling kenal satu sama lain, atau 3 orang yang sama sekali saling tidak kenal. Keteraturan struktural semacam ini tidak bisa dihindari begitu ukuran himpunan melewati ambang batas tertentu. Ini adalah manifestasi matematis dari pepatah bahwa keteraturan lengkap adalah keniscayaan dalam kekacauan yang cukup besar!"
    },
    {
        "filename": "kombinatorika-poin-5-kuis-evaluasi.mp3",
        "text": "Selamat tiba di kuis evaluasi kombinatorika lanjutan dan teori graf! Di slide penutup ini, Anda disajikan tiga soal berbobot seleksi OSN. Dengarkan arahan taktis pembina: pertama, pada soal pengacakan atau posisi salah total, gunakan formula derangement subfaktorial Dn. Kedua, pada soal graf, selalu periksa paritas derajat ganjil dengan Handshaking Lemma. Jika jumlah simpul ganjil tidak genap, graf tersebut pasti fiktif dan mustahil ada. Dan ketiga, pada soal graf planar berwajah bidang, gunakan Rumus Euler V minus E tambah F sama dengan 2. Kerjakan kuis ini secara cermat, baca ulasan solusinya, dan mari kita masuki bab puncak persiapan kompetisi kita: Bedah Soal dan Strategi Penulisan Esai OSN-P!"
    },

    # Sub-bab 6: Bedah Soal & Strategi Esai OSN-P
    {
        "filename": "esai-poin-1-anatomi.mp3",
        "text": "Selamat datang di modul pemungkas persiapan olimpiade: Bedah Soal dan Strategi Penulisan Esai OSN-P Matematika SMA. Di poin pertama ini, kita membedah perbedaan paling mendasar antara seleksi tingkat kota kabupaten OSN-K dengan seleksi tingkat provinsi OSN-P. Di OSN-K, format soal adalah isian singkat atau pilihan ganda di mana juri hanya melihat angka akhir. Namun di OSN-P, formatnya adalah esai pembuktian penuh dengan rubrik penilaian resmi skala nol sampai tujuh poin yang diadopsi dari standar International Mathematical Olympiad atau IMO. Di OSN-P, menulis jawaban akhir yang benar tanpa langkah penalaran yang sah hanya akan diberi nilai nol atau satu poin! Sebaliknya, seorang peserta yang jawaban akhirnya keliru karena slip aritmetika kecil tetapi struktur pembuktian dan lemma pendukungnya sudah tepat bisa mengantongi enam dari tujuh poin. Juri mencari keteraturan logika, kejujuran argumen, dan pencegahan penalaran melingkar atau circular reasoning!"
    },
    {
        "filename": "esai-poin-2-struktur-esai.mp3",
        "text": "Di poin kedua, kita membedah empat pilar anatomi esai pembuktian yang sempurna. Pilar pertama: Nyatakan Klaim dan Definisi Awal. Tuliskan dengan sangat jelas apa yang hendak Anda buktikan dan definisikan seluruh variabel baru yang Anda perkenalkan agar juri tidak bingung. Pilar kedua: Bangun Lemma Pendukung. Jika masalah utama terlalu besar, pecah menjadi dua atau tiga klaim kecil yang disebut lemma. Buktikan masing-masing lemma secara mandiri. Pilar ketiga: Eksekusi Aljabar dan Geometri. Tuliskan setiap peralihan baris perhitungan secara logis tanpa melompati langkah kritis. Hindari menulis kata-kata berbahaya seperti jelas bahwa atau trivial, karena kata tersebut sering menjadi tanda bahwa peserta sedang menyembunyikan kelemahan logikanya. Dan pilar keempat: Kesimpulan Akhir. Tutup bukti Anda dengan merangkum kembali bahwa pernyataan soal telah terbukti secara sah dan bubuhkan simbol kotak hitam atau QED sebagai penanda akhir pembuktian!"
    },
    {
        "filename": "esai-poin-3-kontradiksi-induksi.mp3",
        "text": "Poin ketiga membahas dua senjata pembuktian paling ampuh dalam matematika modern: Metode Kontradiksi atau Reductio ad Absurdum, dan Induksi Matematika Kuat. Dalam metode kontradiksi, kita mengasumsikan bahwa pernyataan yang ingin dibuktikan adalah salah. Dari negasi asumsi ini, kita kembangkan langkah-langkah deduksi logis hingga sampai pada suatu kesimpulan yang bertentangan dengan aksioma matematika atau kondisi soal yang diketahui. Karena matematika bebas dari kontradiksi, maka asumsi negasi tadi pasti salah, yang berarti pernyataan asal terbukti benar secara mutlak! Senjata kedua adalah Induksi Kuat: berbeda dengan induksi biasa yang hanya mengasumsikan kebenaran untuk kasus k, dalam induksi kuat kita mengasumsikan pernyataan benar untuk seluruh nilai dari basis satu hingga k. Ini sangat efektif untuk menyelesaikan relasi rekursif berderajat tinggi dan sifat faktorisasi prima bilangan bulat!"
    },
    {
        "filename": "esai-poin-4-bedah-kasus.mp3",
        "text": "Di poin keempat, kita melakukan bedah tuntas terhadap salah satu tipe soal esai paling klasik di OSN-P: menemukan seluruh bilangan prima p sedemikian rupa sehingga 2p tambah 1 dan 4p tambah 1 juga merupakan bilangan prima. Bagaimana cara pembina olimpiade membedah soal semacam ini? Kuncinya adalah metode pembagian kasus modulo 3! Mengapa memilih modulo 3? Karena koefisien dari p adalah satu, dua, dan empat, yang mencakup seluruh kemungkinan residu perkalian modulo 3. Jika p sama dengan 3, kita peroleh pasangan prima 3, 7, dan 13 yang memenuhi soal secara sempurna. Namun jika p lebih dari 3, maka p tidak boleh habis dibagi 3, sehingga p hanya bisa bersisa satu atau dua modulo 3. Jika p bersisa satu, maka 2p tambah 1 habis dibagi 3 sehingga bukan prima. Jika p bersisa dua, maka 4p tambah 1 habis dibagi 3 sehingga bukan prima. Dengan membagi kasus yang rapi dan tertutup rapat, seluruh himpunan solusi dapat dipastikan lengkap tanpa ada satu pun kemungkinan yang terlewat!"
    },
    {
        "filename": "esai-poin-5-kuis-evaluasi.mp3",
        "text": "Selamat tiba di kuis evaluasi strategi penulisan esai OSN-P! Di slide penutup ini, Anda disajikan tiga soal konseptual yang menguji pemahaman Anda mengenai metodologi pembuktian formal dan rubrikasi juri olimpiade. Ingat tiga prinsip emas sebelum Anda masuk ke ruang ujian: pertama, jangan pernah menganggap bahwa menguji beberapa angka contoh adalah sebuah pembuktian formal. Menguji sepuluh angka hanyalah dugaan empiris yang bernilai nol poin jika klaimnya diminta berlaku untuk seluruh bilangan. Kedua, pada persamaan fungsi seperti persamaan Cauchy f x tambah y sama dengan f x tambah f y, pastikan Anda menunjukkan langkah induksi dari bilangan asli ke bilangan bulat, lalu ke bilangan rasional sebelum menarik kesimpulan f x sama dengan c x. Dan ketiga, tuliskan jawaban Anda dengan tulisan tangan yang rapi dan terstruktur rapi. Selamat belajar, kuasai seluruh persenjataan aljabar, teori bilangan, geometri, dan kombinatorika ini, dan raihlah medali impian Anda di ajang Olimpiade Sains Nasional!"
    }
]

async def generate_audio(item):
    filepath = os.path.join(OUTPUT_DIR, item["filename"])
    print(f"Generating: {item['filename']}...")
    communicate = edge_tts.Communicate(item["text"], VOICE, rate="+0%")
    await communicate.save(filepath)
    print(f"✓ Saved: {filepath}")

async def main():
    print(f"Starting generation of {len(AUDIOS)} audio narrations for Bab 8 OSN Kelas XI...")
    for item in AUDIOS:
        await generate_audio(item)
    print("All 30 audio files generated successfully!")

if __name__ == "__main__":
    asyncio.run(main())
