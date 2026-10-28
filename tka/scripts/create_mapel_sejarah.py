import json
import os

soal_raw = [
    {
        "id": 1,
        "kode": "25SEJPISKDSS01SA-000000-0027",
        "elemen": "Pengantar Ilmu Sejarah",
        "subelemen": "Konsep Dasar Sejarah",
        "kompetensi": "Kemampuan murid untuk menjelaskan konsep dasar sejarah (manusia, ruang, waktu, diakronik, dan sinkronik).",
        "indikator": "Menjelaskan konsep sinkronik dalam sejarah berdasarkan kutipan peristiwa sejarah. (1)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_01.png",
        "wacana": "Konsep sinkronik dalam sejarah menekankan pada telaah mendalam terhadap suatu peristiwa sejarah pada ruang yang meluas tetapi dalam batasan waktu yang terbatas (tertentu). Pendekatan ini menganalisis struktur masyarakat, sistem sosial, ekonomi, budaya, dan politik secara mendalam pada kurun waktu tersebut.",
        "pertanyaan": "Berdasarkan penjelasan tersebut, manakah kajian sejarah di bawah ini yang paling tepat menerapkan cara berpikir sinkronik?",
        "options": [
            {"id": "A", "text": "Perkembangan sistem persenjataan kerajaan-kerajaan di Jawa dari abad ke-13 hingga abad ke-18."},
            {"id": "B", "text": "Dinamika pergerakan nasional Indonesia sejak berdirinya Budi Utomo hingga proklamasi kemerdekaan."},
            {"id": "C", "text": "Proses evolusi sistem pemerintahan monarki tradisional menjadi negara kesatuan modern di Indonesia."},
            {"id": "D", "text": "Perjalanan panjang bangsa Portugis menjelajahi samudra untuk menemukan Kepulauan Rempah."},
            {"id": "E", "text": "Menggambarkan kondisi sosial ekonomi masyarakat Indonesia pada masa pendudukan Jepang tahun 1942-1945."}
        ],
        "kunci": "E",
        "pembahasan": "<strong>Analisis Konsep Berpikir Sinkronik dalam Sejarah:</strong><br>\n1. <strong>Sinkronik (Syn = bersama, Chronos = waktu):</strong> Mempelajari peristiwa sejarah dalam kurun waktu yang terbatas/khusus, namun meluas dalam ruang dengan menganalisis aspek sosial, ekonomi, politik, dan budaya secara komprehensif.<br>\n2. Opsi A, B, C, dan D adalah kajian <em>diakronik</em> (kronologis panjang melintasi banyak zaman).<br>\n3. Opsi E secara spesifik membatasi kurun waktu pada masa pendudukan Jepang (1942–1945) dan mengkaji kondisi sosial-ekonominya secara mendalam.<br><br>\n<strong>Kunci Jawaban: E</strong>"
    },
    {
        "id": 2,
        "kode": "25SEJHBIKISS05SA-000000-0009",
        "elemen": "Periode Kerajaan Hindu-Budha dan Islam",
        "subelemen": "Kehidupan religi, budaya, politik dan ekonomi masyarakat di Nusantara pada masa kerajaan Islam",
        "kompetensi": "Kemampuan murid untuk mengevaluasi kehidupan politik dan ekonomi Kerajaan Islam di Nusantara.",
        "indikator": "Menganalisis faktor yang mempengaruhi kehidupan ekonomi di salah satu kerajaan islam di nusantara. (2)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_02.png",
        "wacana": "Pada abad ke-16, Kesultanan Banten berkembang menjadi bandar niaga internasional terkemuka dan pusat penyebaran Islam yang sangat ramai di Selat Sunda.",
        "pertanyaan": "Faktor apa saja yang memicu kemajuan pesat perekonomian dan perdagangan Kesultanan Banten pada masa tersebut? (Klik jawaban benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Jatuhnya Malaka ke tangan Portugis tahun 1511 menyebabkan kapal dagang muslim beralih rute melalui Selat Sunda."},
            {"id": "B", "text": "Posisi geografis Banten yang sangat strategis di pintu masuk Selat Sunda sebagai penghubung Jawa dan Sumatra."},
            {"id": "C", "text": "Pelabuhan Banten memiliki teluk alami yang terlindung dari gelombang samudra sehingga aman disinggahi kapal."},
            {"id": "D", "text": "Kesultanan Banten menyerahkan monopoli perdagangan komoditas lada sepenuhnya kepada kongsi dagang VOC."},
            {"id": "E", "text": "Banten dan wilayah kekuasaannya (Lampung) menghasilkan komoditas lada bermutu tinggi yang sangat diminati pasar dunia."}
        ],
        "kunci": ["A", "B", "C", "E"],
        "pembahasan": "<strong>Faktor Kejayaan Maritim Kesultanan Banten:</strong><br>\n1. <strong>Faktor Geopolitik:</strong> Kejatuhan Malaka ke tangan Portugis (1511) mendorong pedagang muslim Tiongkok, India, Arab, dan Persia memindahkan rute niaga melewati Selat Sunda dan singgah di Banten.<br>\n2. <strong>Faktor Geografis:</strong> Teluk Banten aman dari terpaan ombak besar Samudra Hindia dan berada di persimpangan Selat Sunda.<br>\n3. <strong>Faktor Komoditas:</strong> Banten menguasai daerah penghasil lada utama di Banten Selatan dan Lampung.<br>\n4. Banten menentang monopoli VOC, sehingga opsi D salah.<br><br>\n<strong>Kunci Jawaban: A, B, C, E</strong>"
    },
    {
        "id": 3,
        "kode": "25SEJPBEKBES06SA-000000-0377",
        "elemen": "Perlawanan terhadap Bangsa Eropa",
        "subelemen": "Proses kedatangan Bangsa Eropa ke Nusantara",
        "kompetensi": "Kemampuan murid untuk menganalisis alasan masuknya Bangsa Eropa ke Nusantara.",
        "indikator": "Menganalisis alasan kedatangan salah satu bangsa Eropa ke Nusantara berdasarkan fakta sejarah. (3)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_03.png",
        "wacana": "Pada Juni 1596, empat kapal Belanda dipimpin Cornelis de Houtman berhasil berlabuh di pelabuhan Banten setelah menempuh pelayaran samudra yang berbahaya mengitari Tanjung Harapan.",
        "pertanyaan": "Apakah alasan utama yang melatarbelakangi kedatangan armada Cornelis de Houtman ke Nusantara?",
        "options": [
            {"id": "A", "text": "Menyebarkan ajaran agama Kristen Protestan ke seluruh pelosok kepulauan Nusantara."},
            {"id": "B", "text": "Membantu Kesultanan Banten dalam menghadapi serangan kekuatan militer Portugis di Selat Malaka."},
            {"id": "C", "text": "Mendirikan benteng pertahanan militer permanen untuk menandingi kekuatan Spanyol di Filipina."},
            {"id": "D", "text": "Mencari daerah penghasil rempah-rempah secara langsung setelah ditutupnya pelabuhan Lisabon oleh Spanyol-Portugis."},
            {"id": "E", "text": "Melakukan ekspedisi ilmiah botani dan kartografi di wilayah perairan tropis Nusantara."}
        ],
        "kunci": "D",
        "pembahasan": "<strong>Latar Belakang Ekspedisi Cornelis de Houtman (1596):</strong><br>\nPada tahun 1580, Raja Philip II dari Spanyol menyatukan Spanyol dan Portugal (Uni Iberia). Karena Belanda sedang berperang memerdekakan diri dari Spanyol (Perang Delapan Puluh Tahun), Spanyol menutup pelabuhan Lisabon bagi pedagang Belanda. Hal ini memaksa Belanda mencari rute laut langsung ke kepulauan rempah-rempah (Nusantara).<br><br>\n<strong>Kunci Jawaban: D</strong>"
    },
    {
        "id": 4,
        "kode": "25SEJPNPJPPS10SA-000000-0422",
        "elemen": "Pergerakan Nasional sampai Proklamasi Kemerdekaan",
        "subelemen": "Kehidupan Bangsa Indonesia di bawah penjajahan Jepang dan perlawanan Bangsa Indonesia",
        "kompetensi": "Kemampuan murid untuk mengidentifikasi latar belakang perlawanan bangsa Indonesia terhadap pendudukan Jepang.",
        "indikator": "Mengidentifikasi latar belakang perlawanan rakyat Indonesia terhadap penjajahan Jepang di salah satu daerah. (4)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_04.png",
        "wacana": "Pada November 1942, meletus perlawanan rakyat Aceh di Cot Plieng, Lhokseumawe, yang dipimpin oleh seorang ulama bernama Teuku Abdul Jalil.",
        "pertanyaan": "Apakah faktor utama yang mendorong perlawanan Teuku Abdul Jalil terhadap kekuasaan tentara Jepang di Cot Plieng?",
        "options": [
            {"id": "A", "text": "Penolakan terhadap kenaikan pajak bumi dan bea garam yang ditetapkan tentara Jepang."},
            {"id": "B", "text": "Menolak seikerei karena bertentangan dengan ajaran Islam."},
            {"id": "C", "text": "Tuntutan pembentukan tentara sukarela khusus rakyat Aceh untuk pertahanan lokal."},
            {"id": "D", "text": "Penolakan terhadap penutupan madrasah dan pondok pesantren tradisional di Aceh."},
            {"id": "E", "text": "Reaksi atas penangkapan para bangsawan dan pejabat adat uleebalang oleh militer Jepang."}
        ],
        "kunci": "B",
        "pembahasan": "<strong>Perlawanan Rakyat Cot Plieng Aceh (1942):</strong><br>\nTeuku Abdul Jalil, seorang pimpinan pesantren di Cot Plieng, menolak keras instruksi militer Jepang untuk melakukan <em>Seikerei</em> (membungkuk 90 derajat menghadap matahari terbit ke arah Kaisar Tenno Heika di Tokyo). Ritual ini dinilai sebagai bentuk syirik yang mencederai aqidah tauhid Islam, sehingga memicu perlawanan senjata santri.<br><br>\n<strong>Kunci Jawaban: B</strong>"
    },
    {
        "id": 5,
        "kode": "25SEJOBRODBS15SA-000000-0156",
        "elemen": "Orde Baru sampai Reformasi",
        "subelemen": "Kehidupan masyarakat pada masa Orde Baru",
        "kompetensi": "Kemampuan murid untuk menjelaskan proses lahirnya Orde Baru.",
        "indikator": "Menganalisis peristiwa penting di masa transisi menuju lahirnya pemerintahan Orde Baru. (5)",
        "tipe": "kompleks_bs",
        "img": "/tka/img/sejarah/soal_05.png",
        "kolom": ["Benar", "Salah"],
        "wacana": "Pasca-peristiwa G30S 1965, ketidakstabilan politik dan inflasi ekonomi yang sangat tinggi mendorong aksi demonstrasi mahasiswa yang tergabung dalam KAMI/KAPI dengan mengajukan Tri Tuntutan Rakyat (Tritura).",
        "pertanyaan": "Tentukan Benar atau Salah untuk setiap pernyataan mengenai peristiwa masa transisi menuju lahirnya Orde Baru!",
        "items": [
            {
                "pernyataan": "Surat Perintah Sebelas Maret (Supersemar) memberikan kewenangan bagi pengamanan stabilitas nasional.",
                "kunci": "Benar",
                "penjelasan": "Supersemar 1966 memberikan mandat wewenang kepada Letjen Soeharto untuk mengambil segala tindakan yang dianggap perlu demi terjaminnya keamanan, ketertiban, dan jalannya pemerintahan."
            },
            {
                "pernyataan": "Salah satu tuntutan Tritura adalah pembubaran Partai Komunis Indonesia (PKI) beserta ormas-ormasnya.",
                "kunci": "Benar",
                "penjelasan": "Tiga tuntutan Tritura adalah: (1) Bubarkan PKI, (2) Bersihkan Kabinet Dwikora dari unsur G30S/PKI, (3) Turunkan harga kebutuhan pokok."
            },
            {
                "pernyataan": "Dewan Jenderal dibentuk oleh mahasiswa untuk mengambil alih kendali roda pemerintahan dari Presiden Soekarno.",
                "kunci": "Salah",
                "penjelasan": "Isu Dewan Jenderal adalah propaganda PKI yang menuduh para perwira tinggi Angkatan Darat merencanakan kudeta, bukan badan bentukan mahasiswa."
            }
        ],
        "kunci": ["Benar", "Benar", "Salah"],
        "pembahasan": "<strong>Analisis Masa Transisi Menuju Orde Baru (1965–1966):</strong><br>\n1. Supersemar memberi wewenang legalitas keamanan kepada Soeharto (Benar).<br>\n2. Tritura menuntut pembubaran PKI, reshuffle kabinet, dan penurunan harga pangan (Benar).<br>\n3. Dewan Jenderal bukan badan mahasiswa, melainkan isu politik menjelang G30S (Salah).<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>"
    },
    {
        "id": 6,
        "kode": "25SEJPISKDSS01SA-000000-0016",
        "elemen": "Pengantar Ilmu Sejarah",
        "subelemen": "Konsep Dasar Sejarah",
        "kompetensi": "Kemampuan murid untuk memahami pengertian dan hakikat sejarah menurut para tokoh pemikir.",
        "indikator": "Mengidentifikasi konsep gerak sejarah menurut sejarawan dunia. (6)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_06.png",
        "wacana": "Herodotus, sejarawan Yunani kuno yang dijuluki sebagai 'Bapak Sejarah', menyatakan bahwa sejarah tidak berkembang ke arah depan dengan tujuan pasti, melainkan bergerak melingkar seperti lingkaran, di mana tinggi rendahnya putaran disebabkan oleh keadaan manusia itu sendiri.",
        "pertanyaan": "Berdasarkan pandangan Herodotus tersebut, apa makna utama gerak sejarah bagi peradaban manusia?",
        "options": [
            {"id": "A", "text": "Sejarah manusia selalu bergerak lurus linier menuju kemajuan teknologi tanpa henti."},
            {"id": "B", "text": "Kehidupan masa lalu manusia sepenuhnya ditentukan oleh kekuatan gaib dan takdir alamiah semata."},
            {"id": "C", "text": "Setiap bangsa di dunia memiliki kecepatan evolusi kebudayaan yang sama pada setiap abad."},
            {"id": "D", "text": "Peristiwa sejarah akan selalu berakhir pada kehancuran total peradaban manusia secara permanen."},
            {"id": "E", "text": "Sejarah berkembang melalui siklus yang berulang dan tidak menentu sesuai tindakan manusia, mengalami masa kejayaan lalu kemunduran."}
        ],
        "kunci": "E",
        "pembahasan": "<strong>Teori Siklus (Cyclical View) Herodotus:</strong><br>\nHerodotus memandang sejarah berputar seperti roda (siklus). Peradaban mengalami fase kelahiran, perkembangan menuju puncak kejayaan, lalu disusul kemunduran dan keruntuhan, yang kemudian dapat bangkit kembali bergantung pada kebijaksanaan dan moralitas manusia penopangnya.<br><br>\n<strong>Kunci Jawaban: E</strong>"
    },
    {
        "id": 7,
        "kode": "25SEJHBIKISS05SA-000000-0041",
        "elemen": "Periode Kerajaan Hindu-Budha dan Islam",
        "subelemen": "Kehidupan religi, budaya, politik dan ekonomi masyarakat di Nusantara pada masa kerajaan Islam",
        "kompetensi": "Kemampuan murid untuk menganalisis faktor perkembangan Kesultanan Demak.",
        "indikator": "Mengidentifikasi faktor pendorong berkembangnya Kesultanan Demak sebagai kerajaan maritim dan agraris. (7)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_07.png",
        "wacana": "Kesultanan Demak merupakan kerajaan Islam pertama di Jawa yang berhasil mengintegrasikan potensi maritim pesisir dan kekuatan agraris pedalaman.",
        "pertanyaan": "Faktor apa sajakah yang mendukung kejayaan perekonomian Kesultanan Demak? (Klik jawaban benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Daerah pedalaman Demak merupakan lumbung padi subur yang menghasilkan surplus beras untuk komoditas ekspor."},
            {"id": "B", "text": "Letak bandar Demak di muara sungai memudahkan pengangkutan hasil bumi dari daerah pedalaman ke pesisir laut."},
            {"id": "C", "text": "Armada laut Demak yang tangguh mampu mengendalikan jalur pelayaran niaga di pesisir utara Pulau Jawa."},
            {"id": "D", "text": "Demak mengizinkan Portugis mendirikan kantor dagang monopoli di Jepara untuk memperlancar ekspor rempah."},
            {"id": "E", "text": "Pelabuhan satelit seperti Jepara, Tuban, dan Sedayu berfungsi optimal sebagai penopang aktivitas ekspor-impor."}
        ],
        "kunci": ["A", "B", "C", "E"],
        "pembahasan": "<strong>Faktor Perekonomian Kesultanan Demak:</strong><br>\nDemak memiliki basis agraris kuat di pedalaman Jawa Tengah (penghasil beras surplus) dan bandar maritim strategis di pantai utara Jawa (Demak, Jepara, Tuban). Demak sangat anti-monopoli bangsa Barat dan bahkan mengirim armada perang pimpinan Pati Unus untuk menggempur Portugis di Malaka.<br><br>\n<strong>Kunci Jawaban: A, B, C, E</strong>"
    },
    {
        "id": 8,
        "kode": "25SEJPISSSSS03SA-000000-0026",
        "elemen": "Pengantar Ilmu Sejarah",
        "subelemen": "Sumber-sumber sejarah",
        "kompetensi": "Kemampuan murid untuk membedakan antara sumber sejarah primer dan sekunder.",
        "indikator": "Membedakan karakteristik sumber sejarah primer dan sekunder berdasarkan contoh kasus. (8)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_08.png",
        "wacana": "Dalam meneliti peristiwa Konferensi Asia Afrika (KAA) di Bandung tahun 1955, seorang sejarawan membandingkan naskah asli teks pidato Presiden Soekarno yang dibacakan pada pembukaan konferensi tahun 1955 dengan buku monograf bertajuk 'Refleksi 60 Tahun KAA' yang diterbitkan akademisi pada tahun 2015.",
        "pertanyaan": "Bagaimanakah kedudukan dan klasifikasi kedua sumber sejarah tersebut?",
        "options": [
            {"id": "A", "text": "Kedua sumber berkedudukan sama sebagai sumber primer karena meneliti peristiwa KAA 1955."},
            {"id": "B", "text": "Buku tahun 2015 berkedudukan lebih tinggi dari naskah pidato karena memuat analisis mutakhir."},
            {"id": "C", "text": "Naskah pidato asli adalah sumber tersier, sedangkan buku analisis terbitan 2015 adalah sumber sekunder."},
            {"id": "D", "text": "Naskah pidato adalah sumber sekunder subjektif, sedangkan buku terbitan 2015 adalah sumber primer objektif."},
            {"id": "E", "text": "Naskah pidato merupakan sumber primer karena dibuat pada saat peristiwa berlangsung, sedangkan buku adalah sumber sekunder."}
        ],
        "kunci": "E",
        "pembahasan": "<strong>Klasifikasi Sumber Sejarah:</strong><br>\n- <strong>Sumber Primer:</strong> Rekaman langsung yang sezaman dan diciptakan oleh pelaku/saksi mata pada saat peristiwa berlangsung (Naskah pidato Presiden Soekarno 1955).<br>\n- <strong>Sumber Sekunder:</strong> Rekonstruksi, telaah ilmiah, atau interpretasi yang disusun setelah peristiwa berlalu dengan memanfaatkan sumber primer (Buku monograf 2015).<br><br>\n<strong>Kunci Jawaban: E</strong>"
    },
    {
        "id": 9,
        "kode": "25SEJPNPRPNS09SA-000000-0187",
        "elemen": "Pergerakan Nasional sampai Proklamasi Kemerdekaan",
        "subelemen": "Relevansi semangat Pergerakan Nasional dengan masa kini",
        "kompetensi": "Kemampuan murid untuk merefleksikan pemikiran tokoh pergerakan nasional dalam konteks kehidupan berbangsa.",
        "indikator": "Menganalisis prinsip pendidikan kebangsaan Ki Hajar Dewantara melalui Perguruan Taman Siswa. (9)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_09.png",
        "wacana": "Pada 3 Juli 1922, Ki Hajar Dewantara mendirikan Perguruan Tamansiswa di Yogyakarta guna membebaskan mental generasi bumiputra dari belenggu subordinasi kolonial.",
        "pertanyaan": "Prinsip dan nilai perjuangan apa saja yang terkandung dalam konsep pendidikan Tamansiswa? (Klik jawaban benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Penerapan sistem Among dengan semboyan 'Ing ngarsa sung tulada, ing madya mangun karsa, tut wuri handayani'."},
            {"id": "B", "text": "Pendidikan berasaskan kebudayaan nasional sendiri demi menumbuhkan rasa percaya diri bangsa."},
            {"id": "C", "text": "Menolak subsidi dana dari pemerintah kolonial Belanda (non-kooperatif) demi menjaga kemandirian moril."},
            {"id": "D", "text": "Membatasi penerimaan murid hanya dari kalangan priyayi dan anak-anak pegawai kolonial."},
            {"id": "E", "text": "Mewujudkan kemerdekaan lahir dan batin peserta didik agar mampu berdiri di atas kaki sendiri."}
        ],
        "kunci": ["A", "B", "C", "E"],
        "pembahasan": "<strong>Prinsip Pendidikan Perguruan Tamansiswa:</strong><br>\nTamansiswa menerapkan Sistem Among, berpijak pada kebudayaan nasional, berprinsip mandiri (pantang subsidi kolonial), dan membuka akses seluas-luasnya bagi rakyat jelata (menolak elitisme diskriminatif sekolah Belanda).<br><br>\n<strong>Kunci Jawaban: A, B, C, E</strong>"
    },
    {
        "id": 10,
        "kode": "25SEJBHIKHBS04SA-000000-0285",
        "elemen": "Periode Kerajaan Hindu-Budha dan Islam",
        "subelemen": "Kehidupan masyarakat masa Hindu-Buddha",
        "kompetensi": "Kemampuan murid untuk mengklasifikasikan bukti peninggalan kebudayaan masa Hindu-Buddha di Nusantara.",
        "indikator": "Menginterpretasikan makna relief candi sebagai sumber rekonstruksi kehidupan sosial masyarakat Jawa kuno. (10)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_10.png",
        "wacana": "Relief Karmawibhangga Panel 65 di Candi Borobudur memahat adegan kehidupan pedesaan di era Mataram Kuno, memperlihatkan para petani sedang mengolah sawah menggunakan bajak lembu, lumbung penyimpanan bulir padi, serta ancaman hama perusak tanaman.",
        "pertanyaan": "Apakah kesimpulan historis yang paling tepat dari penggambaran relief Karmawibhangga tersebut?",
        "options": [
            {"id": "A", "text": "Masyarakat pedalaman Jawa kuno belum mengenal kepemilikan alat-alat pertanian berbasis logam."},
            {"id": "B", "text": "Menunjukkan bahwa masyarakat Jawa kuno telah mengembangkan sistem pertanian padi yang teratur dan maju."},
            {"id": "C", "text": "Masyarakat Jawa kuno hanya menggantungkan penghidupannya pada sektor maritim dan pelayaran samudra."},
            {"id": "D", "text": "Relief candi semata-mata menyalin tradisi kebudayaan India tanpa menggambarkan realitas lokal Nusantara."},
            {"id": "E", "text": "Pertanian padi sawah hanya diperuntukkan bagi konsumsi kalangan keluarga istana dan pendeta."}
        ],
        "kunci": "B",
        "pembahasan": "<strong>Rekonstruksi Relief Candi Borobudur:</strong><br>\nRelief Karmawibhangga memvisualisasikan kearifan lokal agraris Jawa Kuno (local genius). Adanya teknologi bajak, pengelolaan lumbung padi, dan sistem manajemen pertanian membuktikan struktur masyarakat agraris sawah basah yang telah tertata rapi sejak abad ke-8 Masehi.<br><br>\n<strong>Kunci Jawaban: B</strong>"
    },
    {
        "id": 11,
        "kode": "25SEJHBIKISS05SA-000000-0182",
        "elemen": "Periode Kerajaan Hindu-Budha dan Islam",
        "subelemen": "Kehidupan religi, budaya, politik dan ekonomi masyarakat di Nusantara pada masa kerajaan Islam",
        "kompetensi": "Kemampuan murid untuk mengevaluasi berbagai teori tentang masuknya agama dan kebudayaan Islam ke Nusantara.",
        "indikator": "Mengidentifikasi bukti dari teori masuk dan berkembangnya agama islam ke Nusantara. (11)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_11.png",
        "wacana": "Agama Islam masuk ke Nusantara melalui berbagai cara, salah satunya adalah melalui jalur perdagangan. Beberapa ahli berpendapat bahwa Islam dibawa oleh para pedagang dari Gujarat.",
        "pertanyaan": "Apa bukti yang mendukung teori Gujarat tersebut?",
        "options": [
            {"id": "A", "text": "Makam Sunan Ampel di Surabaya."},
            {"id": "B", "text": "Nisan Syekh Rukunuddin di Barus."},
            {"id": "C", "text": "Nisan Syekh Jumadil Kubro di Troloyo."},
            {"id": "D", "text": "Makam Fatimah Binti Maimun di Gresik."},
            {"id": "E", "text": "Nisan Sultan Malik Al-Saleh di Samudra Pasai."}
        ],
        "kunci": "E",
        "pembahasan": "<strong>Bukti Arkeologis Teori Gujarat:</strong><br>\nTeori Gujarat (didukung Snouck Hurgronje, Moquette, dan Pijnapel) mendasarkan argumennya pada kemiripan bentuk fisik, ornamen, dan kaligrafi batu nisan makam Sultan Malik Al-Saleh (1297 M) di Samudra Pasai dan makam Maulana Malik Ibrahim (1419 M) di Gresik dengan batu nisan khas produksi Cambay, Gujarat, India.<br><br>\n<strong>Kunci Jawaban: E</strong>"
    },
    {
        "id": 12,
        "kode": "25SEJPISFSHS02SA-000000-0166",
        "elemen": "Pengantar Ilmu Sejarah",
        "subelemen": "Fenomena sejarah dalam kehidupan sehari-hari",
        "kompetensi": "Kemampuan murid untuk mengenali dan menjelaskan pengaruh peristiwa sejarah terhadap kehidupan sehari-hari.",
        "indikator": "Membandingkan kehidupan masyarakat sebelum dan sesudah peristiwa sejarah berdasarkan kutipan peristiwa sejarah. (12)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_12.png",
        "wacana": "Sumpah Pemuda terjadi pada tanggal 28 Oktober 1928, merupakan momen yang penting dalam sejarah perjuangan kemerdekaan Indonesia. Peristiwa ini merupakan hasil dari Kongres Pemuda II yang diselenggarakan di Jakarta. Hal ini menjadi tonggak penting dalam menyatukan para pemuda dari berbagai latar belakang suku, dan bahasa sebagai satu identitas, bangsa Indonesia. Persatuan ini yang menjadi modal dalam berjuang menggapai kemerdekaan Indonesia.",
        "pertanyaan": "Berdasarkan informasi diatas, bagaimana perbandingan persatuan dan nasionalisme di masyarakat sebelum dan sesudah Sumpah Pemuda?",
        "options": [
            {"id": "A", "text": "Sebelum adanya Sumpah Pemuda, masyarakat berjuang untuk daerahnya masing-masing, sedangkan sesudahnya muncul perasaan sebagai sebuah bangsa yang satu"},
            {"id": "B", "text": "Sebelum adanya Sumpah Pemuda, masyarakat berjuang untuk kolonialisme, sedangkan sesudahnya masyarakat berjuang untuk kelompoknya masing-masing"},
            {"id": "C", "text": "Sebelum adanya Sumpah Pemuda, masyarakat berjuang untuk daerahnya masing-masing, sedangkan sesudahnya tidak ada perubahan dalam tujuan berjuang"},
            {"id": "D", "text": "Sebelum adanya Sumpah Pemuda, masyarakat telah berjuang bersama-sama sebagai sebuah bangsa, sedangkan sesudahnya tidak ada perbedaan yang signifikan"},
            {"id": "E", "text": "Sebelum adanya Sumpah Pemuda, muncul perasaan sebagai sebuah bangsa yang satu, sedangkan sesudahnya perasaan itu semakin kuat dan kokoh"}
        ],
        "kunci": "A",
        "pembahasan": "<strong>Perubahan Paradigma Pasca-Sumpah Pemuda 1928:</strong><br>\nSebelum ikrar Sumpah Pemuda 1928, perlawanan dan organisasi pergerakan masih terkotak-kotak dalam kedaerahan (Jong Java, Jong Sumatranen Bond, Jong Ambon, dsb). Deklarasi 28 Oktober 1928 mentransformasikan kesadaran primordial lokal menjadi kesadaran nasional integral: satu nusa, satu bangsa, dan satu bahasa persatuan Indonesia.<br><br>\n<strong>Kunci Jawaban: A</strong>"
    },
    {
        "id": 13,
        "kode": "25SEJHBIKISS05SA-000000-0321",
        "elemen": "Pengantar Ilmu Sejarah",
        "subelemen": "Sumber-sumber sejarah",
        "kompetensi": "Kemampuan murid untuk mengkritisi fakta sejarah yang terjadi pada masa lalu.",
        "indikator": "Membandingkan dua jenis sumber sejarah, berdasarkan narasi tentang fakta sejarah yang terjadi pada masa lalu (13)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_13.png",
        "wacana": "Pada awal abad ke-17, Surabaya adalah kota pelabuhan yang makmur dengan jaringan perdagangan kuat. Namun, kota ini ditaklukkan oleh Kesultanan Mataram di bawah kepemimpinan Sultan Agung setelah pengepungan panjang dari tahun 1620 hingga 1625.",
        "pertanyaan": "Bagaimanakah pengaruh konflik antara Mataram dengan Surabaya terhadap kehidupan ekonomi di Nusantara? (Klik jawaban benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Mataram menjadi pusat baru perekonomian melalui perdangan dan pelayaran rempah dari Indonesia Timur."},
            {"id": "B", "text": "Surabaya yang tidak lagi menjadi pelabuhan penting dan telah kehilangan dominasinya atas Jawa Timur."},
            {"id": "C", "text": "Terjadi kemunduran perekonomian di pesisir akibat penghancuran kota-kota sekutu Surabaya oleh Mataram."},
            {"id": "D", "text": "Menguatnya Kesultanan Makassar sebagai pusat perdagangan rempah-rempah di Nusantara dari Indonesia Timur."},
            {"id": "E", "text": "Mataram menjadi pusat pelayaran dan perdagangan antarregional menggantikan Surabaya yang telah berhasil ditaklukkan."}
        ],
        "kunci": ["B", "C", "D"],
        "pembahasan": "<strong>Dampak Penaklukan Surabaya oleh Sultan Agung (1620–1625):</strong><br>\n1. Mataram merupakan kerajaan agraris pedalaman; penghancuran Surabaya dan pelabuhan sekutunya mematikan pusat perniagaan maritim Jawa Timur.<br>\n2. Surabaya kehilangan status bandar utamanya.<br>\n3. Para pedagang rempah-rempah Nusantara mengalihkan pusat perdagangan mereka ke Kesultanan Makassar (Somba Opu) yang tumbuh pesat sebagai pelabuhan bebas.<br><br>\n<strong>Kunci Jawaban: B, C, D</strong>"
    },
    {
        "id": 14,
        "kode": "25SEJPISSSSS03SA-000000-0236",
        "elemen": "Perlawanan terhadap Bangsa Eropa",
        "subelemen": "Pengantar Ilmu Sejarah",
        "kompetensi": "Kemampuan murid untuk menginterpretasikan isi sumber sejarah.",
        "indikator": "Ketepatan dalam menginterpretasi dari sebuah penafsiran sumber sejarah (14)",
        "tipe": "kompleks_bs",
        "img": "/tka/img/sejarah/soal_14.png",
        "kolom": ["Tepat", "Tidak Tepat"],
        "wacana": "Gajah Mada, Mahapatih Majapahit, mengucapkan Sumpah Palapa untuk menyatukan Nusantara. Sumpah ini membawa Majapahit mencapai puncak kejayaannya sebagai kekuatan yang disegani. Sejarawan George Coedes menuliskan bahwa Gajah Mada merupakan tokoh penting dalam perluasan supremasi/kekuasaan tertinggi Majapahit pada masa Hayam Wuruk.\nBerdasarkan informasi di atas, manakah penafsiran yang paling tepat mengenai Sumpah Palapa bagi Majapahit?",
        "pertanyaan": "Pilih tepat atau tidak tepat mengenai pentingnya Sumpah Palapa bagi Majapahit!",
        "items": [
            {
                "pernyataan": "Sumpah Palapa tujuan menyatukan nusantara.",
                "kunci": "Tepat",
                "penjelasan": "Sumpah Palapa adalah tekad bulat Gajah Mada mempersatukan wilayah-wilayah Nusantara di bawah naungan Majapahit."
            },
            {
                "pernyataan": "Sumpah Palapa berfokus perluasan wilayah daratan.",
                "kunci": "Tidak Tepat",
                "penjelasan": "Wilayah Nusantara adalah gugusan kepulauan (maritim) yang dipersatukan melalui supremasi jalur laut dan armada maritim Jalasenastri Majapahit, bukan sekadar wilayah daratan."
            },
            {
                "pernyataan": "Sumpah Palapa mencerminkan luhur cita-cita Majapahit.",
                "kunci": "Tepat",
                "penjelasan": "Sumpah Palapa merepresentasikan cita-cita luhur integrasi geopolitik dan kemakmuran kemaharajaan Majapahit."
            }
        ],
        "kunci": ["Tepat", "Tidak Tepat", "Tepat"],
        "pembahasan": "<strong>Interpretasi Historis Sumpah Palapa:</strong><br>\nPernyataan 1 Tepat: Bertujuan integrasi persatuan Nusantara.<br>\nPernyataan 2 Tidak Tepat: Berfokus pada kemaritiman kepulauan Nusantara, bukan sekadar ekspansi daratan.<br>\nPernyataan 3 Tepat: Merupakan refleksi cita-cita luhur kejayaan Majapahit.<br><br>\n<strong>Kunci Jawaban: Tepat, Tidak Tepat, Tepat</strong>"
    },
    {
        "id": 15,
        "kode": "25SEJPBEKBES06SA-000000-0367",
        "elemen": "Perlawanan terhadap Bangsa Eropa",
        "subelemen": "Proses kedatangan Bangsa Eropa ke Nusantara",
        "kompetensi": "Kemampuan murid untuk menganalisis proses kedatangan bangsa Eropa ke Nusantara.",
        "indikator": "Menjelaskan proses perjalanan bangsa Eropa ke Nusantara berdasarkan deskripsi proses kedatangan salah satu bangsa tersebut. (15)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_15.png",
        "wacana": "Bangsa Spanyol sebagai salah satu bangsa Eropa yang melakukan penjelajahan Samudera. Beberapa tokoh penjelajahan samudera dari negara ini di antaranya adalah Christophorus Columbus, Francisco Pizarro dan Magellan.",
        "pertanyaan": "Manakah jalur pelayaran Bangsa Spanyol sehingga sampai di Nusantara?",
        "options": [
            {"id": "A", "text": "Eropa - Samudra Atlantik - Benua Amerika - Samudra Pasifik - Filipina - Malaka"},
            {"id": "B", "text": "Eropa - Samudra Atlantik - Benua Amerika - Samudera Pasifik - Filipina - Maluku"},
            {"id": "C", "text": "Eropa - Samudera Atlantik - Benua Amerika - Samudera Pasifik - Goa India - Malaka"},
            {"id": "D", "text": "Eropa - Pantai Barat Afrika - Tanjung Harapan - Pantai Timur Afrika - Kalikut India - Malaka"},
            {"id": "E", "text": "Eropa - Pantai Barat Afrika - Tanjung Harapan - Pantai Timur Afrika - Kalikut India - Maluku - Malaka"}
        ],
        "kunci": "B",
        "pembahasan": "<strong>Rute Pelayaran Bangsa Spanyol (Magellan-Elcano):</strong><br>\nBerdasarkan Perjanjian Tordesillas (1494), Spanyol berlayar ke arah barat: menyeberangi Samudra Atlantik -> melintasi pantai timur Benua Amerika Selatan -> melewati Selat Magellan -> mengarungi Samudra Pasifik -> mendarat di Kepulauan Filipina (Cebu/Mactan) -> berlayar ke selatan hingga tiba di Maluku (Tidore) tahun 1521.<br><br>\n<strong>Kunci Jawaban: B</strong>"
    },
    {
        "id": 16,
        "kode": "25SEJHBIKISS05SA-000000-0185",
        "elemen": "Periode Kerajaan Hindu-Budha dan Islam",
        "subelemen": "Kehidupan religi, budaya, politik dan ekonomi masyarakat di Nusantara pada masa kerajaan Islam",
        "kompetensi": "Kemampuan murid untuk mengklasifikasikan berbagai peninggalan kebudayaan Islam.",
        "indikator": "Menentukan kategori jejak budaya peninggalan kerajaan islam berdasarkan contoh-contoh tradisi budaya yang masih ada saat ini. (16)",
        "tipe": "kompleks_bs",
        "img": "/tka/img/sejarah/soal_15.png",
        "kolom": ["Tepat", "Tidak Tepat"],
        "wacana": "Walisongo, sebutan bagi kelompok yang berperan penting dalam penyebaran Islam di Pulau Jawa. Wali Songo memperkenalkan agama Islam melalui berbagai pendekatan kepada masyarakat. Wali Songo menggunakan berbagai pendekatan budaya untuk menyebarkan Islam di Jawa, seperti cerita pewayangan dengan tokoh Islam dan pertunjukan seni.\nManakah dari pernyataan berikut yang menunjukkan fakta yang tepat dan tidak tepat tentang jejak budaya Islam di Jawa?",
        "pertanyaan": "Klik pilihan Tepat atau Tidak Tepat untuk setiap pernyataan di bawah ini!",
        "items": [
            {
                "pernyataan": "Pembaharuan bentuk wayang yang sebelumnya berbentuk gambar manusia menjadi gambar dekoratif",
                "kunci": "Tepat",
                "penjelasan": "Sunan Kalijaga mengubah media wayang dari gambar figuratif manusia realistis menjadi wayang kulit stilasi dekoratif bersiluet miring agar selaras dengan norma seni rupa Islam."
            },
            {
                "pernyataan": "Menggunakan tembang-tembang Jawa dalam menyampaikan tuntunan-tuntunan hidup",
                "kunci": "Tepat",
                "penjelasan": "Wali Songo menciptakan tembang macapat (seperti Ilir-ilir ciptaan Sunan Kalijaga dan Maskumambang ciptaan Sunan Kudus) sebagai media dakwah edukatif."
            },
            {
                "pernyataan": "Pertunjukan tari Sanghyang saat melakukan upacara keagamaan tradisional",
                "kunci": "Tidak Tepat",
                "penjelasan": "Tari Sanghyang merupakan tarian sakral penolak bala dalam tradisi pra-Hindu dan Hindu di Bali, bukan warisan akulturasi dakwah Wali Songo."
            }
        ],
        "kunci": ["Tepat", "Tepat", "Tidak Tepat"],
        "pembahasan": "<strong>Akulturasi Budaya Islam Wali Songo:</strong><br>\n- Pembaharuan wayang menjadi stilasi dekoratif (Tepat).<br>\n- Tembang Jawa macapat sebagai pitutur tuntunan hidup (Tepat).<br>\n- Tari Sanghyang adalah tradisi keagamaan Hindu Bali, bukan tradisi Islam Wali Songo (Tidak Tepat).<br><br>\n<strong>Kunci Jawaban: Tepat, Tepat, Tidak Tepat</strong>"
    },
    {
        "id": 17,
        "kode": "25SEJPBEPBAS07SA-000000-0361",
        "elemen": "Perlawanan terhadap Bangsa Eropa",
        "subelemen": "Perlawanan terhadap Bangsa Eropa sebelum Abad ke-20",
        "kompetensi": "Kemampuan murid untuk mengkritisi dampak kolonialisme bangsa Eropa di bidang sosial dan ekonomi.",
        "indikator": "Menganalisis dampak kolonialisme bangsa eropa pada kehidupan sosial/ekonomi masyarakat nusantara (17)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_16.png",
        "wacana": "Gambar menunjukkan ilustrasi pelaksanaan hukuman yang dikenal sebagai poenale sanctie yang banyak dilakukan pada perkebunan kolonial di Sumatera Timur pada akhir abad ke-19. Praktik seperti ini diterapkan kepada pekerja perkebunan yang dianggap melanggar peraturan.\nSumber: Raden Roro Mei/Pusmendik, 2025",
        "pertanyaan": "Berdasarkan ilustrasi tersebut, manakah di antara pernyataan berikut yang paling tepat menunjukkan pengaruh praktik poenale sanctie terhadap kehidupan pekerja pada masa kolonial?",
        "options": [
            {"id": "A", "text": "Membuat para pekerja kehilangan kemerdekaannya"},
            {"id": "B", "text": "Menurunkan produktivitas dan kesejahteraan para kuli perkebunan"},
            {"id": "C", "text": "Menciptakan kesenjangan baru antara para kuli dengan pegawai Eropa"},
            {"id": "D", "text": "Menjadi bentuk eksploitasi pekerja karena mereka tidak bisa istirahat atau libur"},
            {"id": "E", "text": "Menjadi bentuk penindasan yang menimbulkan ketakutan di kalangan pekerja perkebunan"}
        ],
        "kunci": "E",
        "pembahasan": "<strong>Dampak Poenale Sanctie (Koelie Ordonnantie):</strong><br>\n<em>Poenale sanctie</em> adalah klausul sanksi pidana sepihak yang melegalkan majikan perkebunan kolonial menghukum fisik, mencambuk, merantai, dan memenjarakan kuli yang melarikan diri atau membangkang. Praktik ini melembagakan teror fisik dan ketakutan mendalam yang menindas martabat kemanusiaan para pekerja perkebunan.<br><br>\n<strong>Kunci Jawaban: E</strong>"
    },
    {
        "id": 18,
        "kode": "25SEJHBIKISS05SA-000000-0352",
        "elemen": "Periode Kerajaan Hindu-Budha dan Islam",
        "subelemen": "Kehidupan religi, budaya, politik dan ekonomi masyarakat di Nusantara pada masa kerajaan Islam",
        "kompetensi": "Kemampuan murid untuk mengkritisi pengaruh kehidupan ekonomi/politik di nusantara pada masa kerajaan Islam.",
        "indikator": "Mengkritisi pengaruh kehidupan ekonomi/politik di nusantara berdasarkan fakta sejarah pada masa kerajaan islam (18)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_17.png",
        "wacana": "Perang Tellumpoccoe terjadi pada 1582–1611 di Sulawesi Selatan sebagai konflik antara Kesultanan Gowa-Tallo dan aliansi kerajaan-kerajaan Bugis (Bone, Wajo, Soppeng).",
        "pertanyaan": "Bagaimana dampak perang tersebut dalam kehidupan ekonomi di Nusantara? (Klik jawaban benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Kemenangan Gowa-Tallo memperkuat kontrol atas jalur perdagangan rempah di Indonesia Timur"},
            {"id": "B", "text": "Perang tersebut memperkuat posisi kerajaan-kerajaan Bugis dalam perdagangan internasional"},
            {"id": "C", "text": "Gowa-Tallo menjadi penguasa perekonomian di jalur pelayaran sekitar Sulawesi Selatan"},
            {"id": "D", "text": "Perdagangan lokal di kawasan Sulawesi bagian selatan menjadi lebih bebas dan tidak terpusat"},
            {"id": "E", "text": "Pengaruh Bone di bidang ekonomi melemah setelah kekalahannya dengan kerajaan Gowa-Tallo"}
        ],
        "kunci": ["A", "C", "E"],
        "pembahasan": "<strong>Dampak Perang Tellumpoccoe (1582–1611):</strong><br>\nKemenangan Kesultanan Gowa-Tallo mengukuhkan posisinya sebagai penguasa tunggal jalur pelayaran maritim Sulawesi Selatan, memperluas cengkeraman atas tata niaga rempah kawasan timur Nusantara, serta melumpuhkan pengaruh ekonomi kerajaan Bone dan sekutunya.<br><br>\n<strong>Kunci Jawaban: A, C, E</strong>"
    },
    {
        "id": 19,
        "kode": "25SEJPBEKBES06SA-000000-0687",
        "elemen": "Perlawanan terhadap Bangsa Eropa",
        "subelemen": "Proses kedatangan Bangsa Eropa ke Nusantara",
        "kompetensi": "Kemampuan murid untuk menganalisis alasan pendorong kedatangan Bangsa Eropa ke Nusantara.",
        "indikator": "Menentukan alasan yang mendorong kedatangan Bangsa Eropa ke Nusantara, berdasarkan fakta sejarah pada masa tersebut. (19)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_17.png",
        "wacana": "Kehidupan global semakin berkembang dengan maraknya penjelajahan samudra orang-orang Eropa ke dunia Timur. Begitu juga peristiwa di kawasan Laut Tengah pada tahun 1453 turut meramaikan kedatangan bangsa Eropa ke Nusantara.",
        "pertanyaan": "Peristiwa apa yang terjadi di Laut Tengah sehingga melatarbelakangi kedatangan bangsa Eropa ke Nusantara?",
        "options": [
            {"id": "A", "text": "Terjadi persaingan dagang sesama bangsa Eropa"},
            {"id": "B", "text": "Mencari sumber daya alam lain seperti logam mulia"},
            {"id": "C", "text": "Bangsa Eropa ingin memperluas wilayah kekuasaannya"},
            {"id": "D", "text": "Semangat dan dorongan untuk melanjutkan Perang Salib"},
            {"id": "E", "text": "Jatuhnya kekuasaan Konstantinopel ke tangan Turki Usmani"}
        ],
        "kunci": "E",
        "pembahasan": "<strong>Pemicu Penjelajahan Samudra Bangsa Eropa:</strong><br>\nPada tahun 1453, Kesultanan Turki Usmani menaklukkan Konstantinopel. Peristiwa ini menutup gerbang perniagaan Laut Tengah bagi bangsa Eropa Kristen dan melambungkan harga rempah-rempah, sehingga memicu bangsa Portugis dan Spanyol merintis pelayaran samudra menemukan kepulauan rempah Nusantara.<br><br>\n<strong>Kunci Jawaban: E</strong>"
    },
    {
        "id": 20,
        "kode": "25SEJPNPRPNS09SA-000000-0107",
        "elemen": "Pergerakan Nasional sampai Proklamasi Kemerdekaan",
        "subelemen": "Relevansi semangat Pergerakan Nasional dengan masa kini",
        "kompetensi": "Kemampuan murid untuk menghubungkan semangat tokoh pergerakan nasional dengan kehidupan di masa kini.",
        "indikator": "Menentukan hubungan semangat para tokoh perjuangan pada masa pergerakan nasional kemerdekaan dengan perkembangan kehidupan di masa kini. (20)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_18.png",
        "wacana": "Mohammad Hatta dikenal sebagai tokoh nasionalis yang memperjuangkan kemerdekaan Indonesia melalui jalur diplomasi dan pendidikan. Ia juga menekankan pentingnya koperasi sebagai pilar ekonomi kerakyatan.",
        "pertanyaan": "Jika Anda adalah seorang pemuda yang ingin menghidupkan semangat Mohammad Hatta di masa kini, manakah tindakan yang tepat yang mencerminkan semangat tersebut? (Klik jawaban benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Mendirikan koperasi digital untuk memberdayakan UMKM lokal"},
            {"id": "B", "text": "Aktif berdiplomasi dan berdialog dalam organisasi internasional pemuda"},
            {"id": "C", "text": "Menggalang dana dari investor asing untuk dominasi pasar lokal"},
            {"id": "D", "text": "Menyebarkan nilai-nilai ekonomi kerakyatan dengan memahami literasi keuangan"},
            {"id": "E", "text": "Mendorong penguasaan pasar oleh korporasi besar agar efisien"}
        ],
        "kunci": ["A", "B", "D"],
        "pembahasan": "<strong>Refleksi Semangat Bung Hatta di Era Kontemporer:</strong><br>\nSemangat Bung Hatta tercermin pada: (1) Pemberdayaan ekonomi gotong royong melalui koperasi digital bagi UMKM lokal, (2) Kecakapan diplomasi intelektual damai di panggung global, dan (3) Edukasi literasi ekonomi kerakyatan yang menolak hegemoni kapitalisme semata.<br><br>\n<strong>Kunci Jawaban: A, B, D</strong>"
    },
    {
        "id": 21,
        "kode": "25SEJPBEPBAS07SA-000000-0619",
        "elemen": "Perlawanan terhadap Bangsa Eropa",
        "subelemen": "Perlawanan terhadap Bangsa Eropa sebelum Abad ke-20",
        "kompetensi": "Kemampuan murid untuk mengkritisi perlawanan rakyat nusantara terhadap bangsa Eropa sebelum abad ke-20.",
        "indikator": "Menentukan strategi perlawanan rakyat nusantara terhadap bangsa Eropa sebelum abad ke-20 berdasarkan fakta sejarah pada masa tersebut. (21)",
        "tipe": "kompleks_bs",
        "img": "/tka/img/sejarah/soal_19.png",
        "kolom": ["Benar", "Salah"],
        "wacana": "Persaingan Portugis dan Spanyol di Maluku diakhiri dengan perjanjian Saragosa 1529. Portugis tetap di Maluku, sementara Spanyol harus bergerak ke Filipina. Portugis semakin berkuasa dengan melakukan monopoli perdagangan di Maluku. Hal ini mengancam kedudukan raja-raja di Maluku.\nStrategi apa yang digunakan rakyat Maluku untuk melawan Portugis?",
        "pertanyaan": "Pilihlah benar atau salah dari pernyataan tentang strategi perlawanan yang dilakukan rakyat Maluku dalam menghadapi Portugis!",
        "items": [
            {
                "pernyataan": "Menyeimbangkan pengaruh asing melalui kerjasama dengan penguasa wilayah Papua, Jawa, dan Sumatra",
                "kunci": "Benar",
                "penjelasan": "Sultan Baabullah dari Ternate berhasil menyatukan 72 pulau berpenghuni dari Mindanao, Maluku, hingga kepulauan Papua untuk menghadapi Portugis."
            },
            {
                "pernyataan": "Melakukan perlawanan terbuka melalui serangan militer baik darat maupun laut pada Portugis",
                "kunci": "Benar",
                "penjelasan": "Rakyat Ternate di bawah pimpinan Sultan Khairun dan Sultan Baabullah melancarkan pengepungan militer total terhadap Benteng Sao Paulo (Gamlamo) Portugis."
            },
            {
                "pernyataan": "Melakukan hubungan diplomasi melalui perjanjian monopoli dengan Portugis",
                "kunci": "Salah",
                "penjelasan": "Rakyat dan penguasa Maluku justru menentang keras paksaan monopoli dagang Portugis yang menindas."
            }
        ],
        "kunci": ["Benar", "Benar", "Salah"],
        "pembahasan": "<strong>Strategi Perlawanan Rakyat Maluku:</strong><br>\nSultan Baabullah menggalang persatuan antarkerajaan kepulauan Nusantara dan mengepung benteng Portugis selama 5 tahun hingga Portugis menyerah dan terusir pada 1575. Monopoli Portugis ditentang total, bukan disepakati.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Salah</strong>"
    },
    {
        "id": 22,
        "kode": "25SEJPNPJPPS10SA-000000-0432",
        "elemen": "Pergerakan Nasional sampai Proklamasi Kemerdekaan",
        "subelemen": "Kehidupan Bangsa Indonesia di bawah penjajahan Jepang dan perlawanan Bangsa Indonesia",
        "kompetensi": "Kemampuan murid untuk mengidentifikasi latar belakang perlawanan bangsa Indonesia kepada Jepang.",
        "indikator": "Mengidentifikasi latar belakang perlawanan bangsa Indonesia kepada Jepang berdasarkan salah satu perlawanan pada masa tersebut. (22)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_20.png",
        "wacana": "Perlawanan yang dipimpin oleh Kiai Zainal Mustafa meletus pada bulan Februari 1944. Dia seorang tokoh dari Singaparna, Tasik Malaya, Jawa Barat. Ia sangat menentang kebijakan-kebijakan Jepang.",
        "pertanyaan": "Apakah yang mendorong perlawanan Kiai Zainal Mustafa kepada Jepang di Singaparna?",
        "options": [
            {"id": "A", "text": "Perlakuan militer Jepang yang menyebabkan penderitaan rakyat"},
            {"id": "B", "text": "Kewajiban rakyat untuk menanam jenis tanaman pangan tertentu"},
            {"id": "C", "text": "Rakyat wajib membayar pajak kepada Jepang dalam bentuk uang"},
            {"id": "D", "text": "Sistem sewa tanah yang mengakibatkan rakyat terjerat banyak hutang"},
            {"id": "E", "text": "Kelaparan akibat adanya kebijakan tanam paksa atau disebut Cultuur stelsel"}
        ],
        "kunci": "A",
        "pembahasan": "<strong>Latar Belakang Perlawanan Sukamanah Singaparna (1944):</strong><br>\nKiai Haji Zainal Mustafa memimpin perlawanan santri karena penderitaan luar biasa rakyat akibat kekejaman militer Jepang, kewajiban romusha yang merenggut nyawa, setoran padi wajib yang menimbulkan kelaparan, serta penolakan atas ritual Seikerei.<br><br>\n<strong>Kunci Jawaban: A</strong>"
    },
    {
        "id": 23,
        "kode": "25SEJRDTPMKS12SA-000000-0438",
        "elemen": "Revolusi Kemerdekaan Indonesia sampai Demokrasi Terpimpin",
        "subelemen": "Perjuangan mempertahankan kemerdekaan",
        "kompetensi": "Kemampuan murid untuk menganalisis upaya perjuangan fisik bangsa Indonesia mempertahankan kemerdekaan.",
        "indikator": "Menganalisis peran rakyat dalam mempertahankan kemerdekaan, berdasarkan fakta sejarah tentang perlawanan rakyat pada masa revolusi Indonesia sampai demokrasi terpimpin. (23)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_21.png",
        "wacana": "Setelah berhasil memproklamasikan kemerdekaan Indonesia pada tanggal 17 Agustus 1945, Bangsa Indonesia harus berjuang mempertahankan kemerdekaan. Ancaman dari luar maupun dari dalam mengancam tegaknya kedaulatan Negara Republik Indonesia yang baru saja berdiri. Ancaman dari luar muncul dari Belanda yang tidak mau mengakui kedaulatan Indonesia.",
        "pertanyaan": "Perjuangan fisik apa saja yang dilakukan oleh rakyat Indonesia untuk mempertahankan kemerdekaan menghadapi Belanda yang ingin menguasai kembali Indonesia ? (Klik pada semua jawaban benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Pertempuran 10 November 1945"},
            {"id": "B", "text": "Pertempuran 5 Hari di Semarang"},
            {"id": "C", "text": "Serangan Umum 1 Maret 1949"},
            {"id": "D", "text": "Pemberontakan Andi Azis"},
            {"id": "E", "text": "Pemberontakan Republik Maluku Selatan"}
        ],
        "kunci": ["A", "C"],
        "pembahasan": "<strong>Perjuangan Fisik Mempertahankan Kemerdekaan Melawan Belanda:</strong><br>\n- <strong>Pertempuran 10 November 1945</strong> di Surabaya melawan tentara Inggris dan NICA Belanda.<br>\n- <strong>Serangan Umum 1 Maret 1949</strong> di Yogyakarta membuktikan kepada dunia internasional bahwa TNI dan Republik Indonesia masih kokoh eksis.<br>\n(Pertempuran Semarang adalah perlawanan menghadapi sisa tentara Jepang Kido Butai; Andi Azis dan RMS adalah pemberontakan internal).<br><br>\n<strong>Kunci Jawaban: A, C</strong>"
    },
    {
        "id": 24,
        "kode": "25SEJPNPJPPS10SA-000000-0527",
        "elemen": "Pergerakan Nasional sampai Proklamasi Kemerdekaan",
        "subelemen": "Kehidupan Bangsa Indonesia di bawah penjajahan Jepang dan perlawanan Bangsa Indonesia",
        "kompetensi": "Kemampuan murid untuk mengidentifikasi kebijakan pendudukan militer Jepang di Indonesia.",
        "indikator": "Menetukan karakteristik penjajahan Jepang terhadap bangsa Indonesia berdasarkan kebijakan politik/ekonomi/sosial/ budaya pada masa tersebut. (24)",
        "tipe": "kompleks_bs",
        "img": "/tka/img/sejarah/soal_22.png",
        "kolom": ["Benar", "Salah"],
        "wacana": "Jepang menjadi negara industri karena keberhasilan Restorasi Meiji/kebangkitan modernisasi. Kebutuhan akan modal pada kegiatan industri memicu Jepang melakukan ekspansi ke Indonesia.\nBagaimana karakteristik kebijakan Jepang pada masyarakat saat menjajah Indonesia?",
        "pertanyaan": "Pilihlah Benar atau Salah pada pernyataan berikut!",
        "items": [
            {
                "pernyataan": "Mengutamakan kegiatan ekonomi untuk kepentingan militer",
                "kunci": "Benar",
                "penjelasan": "Sistem ekonomi pendudukan Jepang adalah ekonomi perang; seluruh pabrik, logistik hasil bumi, dan perbankan diarahkan untuk mensuplai logistik tentara Jepang."
            },
            {
                "pernyataan": "Jepang membagi wilayah Indonesia menjadi tiga pemerintahan militer",
                "kunci": "Benar",
                "penjelasan": "Jepang membagi kepulauan Indonesia menjadi: Tentara AD XVI (Jawa-Madura), Tentara AD XXV (Sumatra), dan Armada AL II Kaigun (Kalimantan, Sulawesi, Maluku, Sunda Kecil)."
            },
            {
                "pernyataan": "Lebih mementingkan peperangan dalam mengeksploitasi sumber daya alam",
                "kunci": "Benar",
                "penjelasan": "Eksploitasi minyak bumi, batu bara, karet, dan hasil panen beras diprioritaskan sepenuhnya untuk membiayai jalannya mesin perang Pasifik."
            }
        ],
        "kunci": ["Benar", "Benar", "Benar"],
        "pembahasan": "<strong>Karakteristik Pemerintahan Pendudukan Jepang:</strong><br>\nSeluruh pernyataan adalah Benar. Struktur pemerintahan militer Jepang bersifat fasistik militeristik yang membagi Nusantara dalam tiga zona komando pertahanan serta memberlakukan ekonomi perang eksploitatif.<br><br>\n<strong>Kunci Jawaban: Benar, Benar, Benar</strong>"
    },
    {
        "id": 25,
        "kode": "25SEJRDTDDLS13SA-000000-0423",
        "elemen": "Revolusi Kemerdekaan Indonesia sampai Demokrasi Terpimpin",
        "subelemen": "Kehidupan masyarakat Indonesia pada masa Demokrasi Liberal",
        "kompetensi": "Kemampuan murid untuk mengkritisi dampak kebijakan ekonomi masa Demokrasi Parlementer.",
        "indikator": "Menentukan efektifitas dari kebijakan pemerintah mengenai kondisi ekonomi/politik pada masa pemerintahan demokrasi terpimpin. (25)",
        "tipe": "kompleks_bs",
        "img": "/tka/img/sejarah/soal_23.png",
        "kolom": ["Sesuai", "Tidak Sesuai"],
        "wacana": "Tabel: Kondisi Ekonomi Masa Demokrasi Liberal\n1. Program Benteng: Memberikan lisensi impor untuk kaum pribumi -> Dampak: Pengusaha pribumi kurang memiliki jiwa wirausaha\n2. Rencana Sumitro: Melaksanakan industrialisasi dengan pembangunan industri dasar -> Dampak: Muncul perusahaan-perusahaan yang melayani kepentingan umum\n3. Biro Perancang Negara: Merancang RPLT (Rencana Program Lima Tahun) -> Dampak: Meningkatnya defisit anggaran pemerintah dari 20 persen tahun 1950 menjadi 100 persen tahun 1960\nSumber Tabel: Kementerian Pendidikan dan Kebudayaan, 2015. Sejarah Indonesia Untuk SMA/MA Kelas XII. Jakarta: Kemendikbud, halaman 70-75\nBerdasarkan data tersebut, manakah dampak negatif akibat kebijakan pemerintah pada masa Demokrasi Parlementer?",
        "pertanyaan": "Klik sesuai atau tidak sesuai dari dari dampak negatif kebijakan pemerintah pada masa Demokrasi Parlementer!",
        "items": [
            {
                "pernyataan": "Kondisi perekonomian yang semakin memburuk akibat defisit anggaran akibat munculnya berbagai macam konflik",
                "kunci": "Sesuai",
                "penjelasan": "Defisit anggaran membengkak dari 20% menjadi 100% dipicu oleh biaya penanganan pergolakan daerah dan ketidakstabilan koalisi kabinet."
            },
            {
                "pernyataan": "Rencana Sumitro merupakan program yang berkontribusi bagi seluruh lapisan masyarakat",
                "kunci": "Tidak Sesuai",
                "penjelasan": "Rencana Sumitro berfokus pada industri dasar dan permodalan padat modal, bukan program yang langsung menjangkau dan berdampak merata bagi seluruh rakyat jelata."
            },
            {
                "pernyataan": "Pemberian lisensi impor dari Program Gerakan Benteng tidak efektif membangkitkan jiwa wirausaha kaum pribumi",
                "kunci": "Sesuai",
                "penjelasan": "Banyak pengusaha pribumi menyalahgunakan fasilitas lisensi impor dengan menjualnya kembali kepada pengusaha Tionghoa/non-pribumi (fenomena Ali-Baba)."
            }
        ],
        "kunci": ["Sesuai", "Tidak Sesuai", "Sesuai"],
        "pembahasan": "<strong>Analisis Kebijakan Ekonomi Masa Demokrasi Parlementer:</strong><br>\n- Defisit anggaran akibat konflik politik adalah fakta dampak negatif (Sesuai).<br>\n- Pernyataan Rencana Sumitro berkontribusi bagi seluruh lapisan adalah Tidak Sesuai konteks dampak negatif.<br>\n- Kegagalan Program Benteng membangkitkan wirausaha mandiri pribumi adalah dampak negatif (Sesuai).<br><br>\n<strong>Kunci Jawaban: Sesuai, Tidak Sesuai, Sesuai</strong>"
    },
    {
        "id": 26,
        "kode": "25SEJPNPRPNS09SA-000000-0191",
        "elemen": "Pergerakan Nasional sampai Proklamasi Kemerdekaan",
        "subelemen": "Relevansi semangat Pergerakan Nasional dengan masa kini",
        "kompetensi": "Kemampuan murid untuk mengimplementasikan ide/nilai tokoh pergerakan nasional untuk mengatasi masalah bangsa saat ini.",
        "indikator": "Mengimplementasikan ide/kegiatan yang sesuai dengan nilai tokoh untuk mengatasi masalah saat ini, berdasarkan studi kasus yang mencerminkan semangat tokoh pergerakan nasional. (26)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_24.png",
        "wacana": "Ekonomi Kerakyatan digagas oleh Mohammad Hatta, yang bertujuan untuk membangun perekonomian rakyat melalui koperasi, dengan prinsip kebersamaan, kekuasaan milik rakyat, dan lebih mementingkan kepentingan umum. Namun, fakta saat ini jurang sosial melebar antara buruh dan pemilik modal. Pemerintah membuat proyek sosial ekonomi untuk menjembatani kesenjangan tersebut.",
        "pertanyaan": "Manakah yang mencerminkan nilai-nilai dari semangat ekonomi Bung Hatta? Pilih jawaban benar? jawaban benar lebih dari satu",
        "options": [
            {"id": "A", "text": "Pemberian progam investasi gratis untuk kalangan pengusaha makro"},
            {"id": "B", "text": "Deregulasi total yang mengabaikan perlindungan usaha mikro"},
            {"id": "C", "text": "Pengembangan koperasi pekerja di sektor informal"},
            {"id": "D", "text": "Pelatihan kewirausahaan berbasis komunitas lokal"},
            {"id": "E", "text": "Kolaborasi antara UMKM dan koperasi digital"}
        ],
        "kunci": ["C", "D", "E"],
        "pembahasan": "<strong>Nilai Ekonomi Kerakyatan Mohammad Hatta:</strong><br>\nEkonomi kerakyatan berakar pada asas kekeluargaan dan kedaulatan rakyat. Pilihan yang selaras adalah membina koperasi pekerja sektor informal, melatih kewirausahaan komunitas lokal, serta membangun kolaborasi digital antarpelaku UMKM agar mandiri dan berdaya saing.<br><br>\n<strong>Kunci Jawaban: C, D, E</strong>"
    },
    {
        "id": 27,
        "kode": "25SEJRDTPMKS12SA-000000-0450",
        "elemen": "Revolusi Kemerdekaan Indonesia sampai Demokrasi Terpimpin",
        "subelemen": "Perjuangan mempertahankan kemerdekaan",
        "kompetensi": "Kemampuan murid untuk menentukan upaya yang ditempuh dalam mempertahankan kemerdekaan pasca-Proklamasi.",
        "indikator": "Menentukan upaya yang ditempuh dalam mempertahankan kemerdekaan, berdasarkan uraian tentang dinamika perjuangan bangsa Indonesia pasca-Proklamasi. (27)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_25.png",
        "wacana": "Agresi Militer Belanda II dimulai pada tanggal 19 Desember 1948, ketika Belanda menyerbu Yogyakarta dan menawan Presiden serta Wakil Presiden. Sedangkan Syafruddin Prawiranegara membentuk Pemerintahan Darurat Republik Indonesia (PDRI) di Sumatera Barat saat situasi genting. Panglima Soedirman melanjutkan perjuangan melalui gerilya. Sementara itu, diplomasi Indonesia tetap berjalan di forum internasional.\nSumber: Buku Sejarah untuk SMA/MA Kelas XII (Kemdikbud, 2022)",
        "pertanyaan": "Apa bentuk respons strategis bangsa Indonesia dalam mempertahankan kemerdekaan setelah Agresi Militer Belanda II?",
        "options": [
            {"id": "A", "text": "Mendirikan pemerintahan federal di luar Jawa untuk mendapatkan pengakuan Belanda."},
            {"id": "B", "text": "Menawarkan pembentukan negara bersama di bawah pengawasan Dewan keamanan PBB."},
            {"id": "C", "text": "Menyelamatkan struktur pemerintahan melalui PDRI, bergerilya, dan menekan Belanda dengan diplomasi."},
            {"id": "D", "text": "Menjalin aliansi pertahanan dengan negara-negara boneka yang dibentuk oleh pemerintahan Belanda."},
            {"id": "E", "text": "Mengalihkan pusat kekuasaan ke negara bagian yang belum diduduki dan menandatangani perjanjian lokal."}
        ],
        "kunci": "C",
        "pembahasan": "<strong>Strategi Menghadapi Agresi Militer Belanda II:</strong><br>\nBangsa Indonesia menerapkan dwitunggal strategi pertahanan: secara ketatanegaraan mendirikan PDRI di Bukittinggi agar kelangsungan pemerintahan de jure tetap ada, secara militer menggelar perang gerilya semesta bersama Jenderal Soedirman, dan di jalur politik internasional melakukan diplomasi aktif menekan Belanda melalui Dewan Keamanan PBB.<br><br>\n<strong>Kunci Jawaban: C</strong>"
    },
    {
        "id": 28,
        "kode": "25SEJOBRODBS15SA-000000-0243",
        "elemen": "Orde Baru sampai Reformasi",
        "subelemen": "Kehidupan masyarakat pada masa Orde Baru",
        "kompetensi": "Kemampuan murid untuk menjelaskan proses lahirnya Orde Baru.",
        "indikator": "Menentukan kondisi yang mendorong lahirnya orde baru, berdasarkan kebijakan politik pada masa tersebut. (28)",
        "tipe": "kompleks_bs",
        "img": "/tka/img/sejarah/soal_26.png",
        "kolom": ["Tepat", "Tidak Tepat"],
        "wacana": "Supersemar atau Surat Perintah 11 Maret 1966 merupakan surat yang dikeluarkan oleh Presiden Sukarno dan memberikan wewenang luas kepada Letjen Soeharto untuk menjaga stabilitas negara dan menyelamatkan revolusi. Surat ini menjadi titik balik sejarah Indonesia karena memberi dasar legitimasi bagi Soeharto untuk mengambil langkah-langkah strategis selanjutnya.\nBagaimana akibat Supersemar sehingga mendorong lahirnya Orde Baru?",
        "pertanyaan": "Pilih tepat atau tidak tepat setiap fakta kelahiran Orde Baru!",
        "items": [
            {
                "pernyataan": "Soeharto leluasa menahan para menteri yang ada di kabinet karena dianggap terlibat dalam Gerakan 30 September 1965",
                "kunci": "Tepat",
                "penjelasan": "Pada 18 Maret 1966, Letjen Soeharto menahan 15 menteri Kabinet Dwikora yang diduga tersangkut atau bersimpati dengan G30S/PKI."
            },
            {
                "pernyataan": "Supersemar secara langsung memberikan mandat kepada Soeharto sebagai Presiden Republik Indonesia",
                "kunci": "Tidak Tepat",
                "penjelasan": "Supersemar hanya surat perintah pengamanan pemulihan ketertiban, bukan mandat pengangkatan presiden. Soeharto diangkat menjadi Pejabat Presiden oleh Sidang Istimewa MPRS pada Maret 1967."
            },
            {
                "pernyataan": "Soeharto menjadi leluasa untuk mengambil tindakan dalam melakukan pelarangan dan pembubaran terhadap PKI",
                "kunci": "Tepat",
                "penjelasan": "Tindakan pertama Soeharto sehari pasca-Supersemar (12 Maret 1966) adalah membubarkan PKI dan menyatakannya sebagai partai terlarang di seluruh wilayah Indonesia."
            }
        ],
        "kunci": ["Tepat", "Tidak Tepat", "Tepat"],
        "pembahasan": "<strong>Fakta Historis Pasca-Supersemar:</strong><br>\n1. Penahanan 15 menteri kabinet yang terindikasi G30S (Tepat).<br>\n2. Mandat presiden langsung dari Supersemar (Tidak Tepat; alih kepresidenan melalui TAP MPRS XXXIII/MPRS/1967).<br>\n3. Pembubaran resmi PKI pada 12 Maret 1966 (Tepat).<br><br>\n<strong>Kunci Jawaban: Tepat, Tidak Tepat, Tepat</strong>"
    },
    {
        "id": 29,
        "kode": "25SEJRDTDTPS14SA-000000-0565",
        "elemen": "Revolusi Kemerdekaan Indonesia sampai Demokrasi Terpimpin",
        "subelemen": "Kehidupan masyarakat pada masa Demokrasi Terpimpin",
        "kompetensi": "Kemampuan murid untuk mengidentifikasi perkembangan politik dan ekonomi pada masa Demokrasi Terpimpin.",
        "indikator": "Menganalisis dampak kebijakan pemerintah terhadap perkembangan politik Indonesia pada masa revolusi Kemerdekaan IIndonesia sampai demokrasi terpimpin. (29)",
        "tipe": "pg",
        "img": "/tka/img/sejarah/soal_27.png",
        "wacana": "Perhatikan kutipan berikut!\n\"Pembangunan mercusuar dianggap sebagai cara menunjukkan keunggulan Indonesia di mata dunia, namun biaya besar yang dikeluarkan menyebabkan krisis ekonomi semakin parah.\"\nSumber: Kahin, Nationalism and Revolution in Indonesia, 2010.",
        "pertanyaan": "Berdasarkan kutipan tersebut, apa kelemahan utama dari kebijakan Politik Mercusuar yang dilaksanakan oleh Presiden Soekarno?",
        "options": [
            {"id": "A", "text": "Proyek besar gagal menarik dukungan negara-negara Blok Timur"},
            {"id": "B", "text": "Dana pembangunan dialihkan untuk subsidi pangan dan stabilisasi harga"},
            {"id": "C", "text": "Citra internasional Indonesia menguat, tetapi perekonomian rakyat memburuk"},
            {"id": "D", "text": "Proyek pembangunan skala nasional berhasil menurunkan laju inflasi secara cepat"},
            {"id": "E", "text": "Pemerintah berhasil mengintegrasikan petani dan buruh dalam proyek-proyek mercusuar"}
        ],
        "kunci": "C",
        "pembahasan": "<strong>Kelemahan Politik Mercusuar Masa Demokrasi Terpimpin:</strong><br>\nProyek mercusuar (Monas, Senayan, Hotel Indonesia, Jembatan Ampera) memang berhasil memamerkan kemegahan Indonesia di hadapan dunia internasional (termasuk penyelenggaraan GANEFO), tetapi pembangunannya menghabiskan devisa negara secara masif sehingga memperparah inflasi, defisit kas negara, dan penderitaan ekonomi rakyat banyak.<br><br>\n<strong>Kunci Jawaban: C</strong>"
    },
    {
        "id": 30,
        "kode": "25SEJOBRODBS15SA-000000-0053",
        "elemen": "Orde Baru sampai Reformasi",
        "subelemen": "Kehidupan masyarakat pada masa Orde Baru",
        "kompetensi": "Kemampuan murid untuk mengkritisi berbagai kebijakan politik dan ekonomi beserta dampaknya pada masa Orde Baru.",
        "indikator": "Menganalisis kebijakan politik/ekonomi yang mendorong lahirnya pemerintahan orde baru. (30)",
        "tipe": "mcma",
        "img": "/tka/img/sejarah/soal_28.png",
        "wacana": "Tabel: Terkait dualisme kepemimpinan nasional pada awal Orde Baru\n- Maret 1967: MPRS mengangkat Soeharto sebagai Pejabat Presiden -> Dampak: Dualisme Kepemimpinan Nasional\n- Maret 1968: MPRS menetapkan Soeharto sebagai Presiden -> Dampak: Berakhirnya Dualisme Kepemimpinan Nasional\nPresiden Soeharto diharapkan segera melakukan pemilu pada tahun 1968. Namun karena berbagai pertimbangan politik dan keamanan, pemilu baru dapat diselenggarakan pada tahun 1971. Setelah pemilu tahun 1971, pemerintah melemparkan gagasan penyederhanaan partai politik. Banyaknya partai politik dianggap tidak memudahkan pembangunan, justru menambah permasalahan.",
        "pertanyaan": "Apa saja langkah-langkah pemerintah dalam mengatasi masalah partai politik? (Klik pada jawaban yang benar! Jawaban benar lebih dari satu)",
        "options": [
            {"id": "A", "text": "Menciptakan kekuatan politik sipil baru yaitu Sekretariat Bersama (Sekber) Golongan Karya"},
            {"id": "B", "text": "Empat partai berhaluan Islam bergabung dalam Partai Persatuan Pembangunan (PPP)"},
            {"id": "C", "text": "Lima partai non Islam, bergabung dalam Partai Demokrasi Indonesia (PDI)"},
            {"id": "D", "text": "Mendorong dibentuknya Badan Pengawas Pemilu tingkat nasional dan daerah"},
            {"id": "E", "text": "Calon presiden dan wakil presiden dari usulan sepuluh partai politik"}
        ],
        "kunci": ["A", "B", "C"],
        "pembahasan": "<strong>Fusi Partai Politik Masa Orde Baru (1973):</strong><br>\nPemerintah Orde Baru menyederhanakan sistem kepartaian menjadi 3 kontestan: (1) Golongan Karya (Golkar) sebagai pilar politik utama, (2) Fusi 4 partai Islam (NU, Parmusi, PSII, Perti) ke dalam PPP, dan (3) Fusi 5 partai non-Islam/nasionalis (PNI, IPKI, Murba, Parkindo, Partai Katolik) ke dalam PDI.<br><br>\n<strong>Kunci Jawaban: A, B, C</strong>"
    }
]

# Susun soal_sejarah_paket1 dengan format soalHtml
for s in soal_raw:
    # buat soalHtml
    img_tag = f'<div class="mb-4 text-center">\n  <img src="{s["img"]}" alt="Stimulus Soal {s["id"]}" class="max-w-full mx-auto rounded-xl border border-slate-200 shadow-xs bg-white" loading="lazy">\n</div>\n' if s.get("img") else ''
    wacana_tag = f'<p class="font-medium text-slate-800 leading-relaxed mb-3 whitespace-pre-line">\n{s["wacana"]}\n</p>\n'
    tanya_tag = f'<p class="font-semibold text-slate-900 mb-2">\n{s["pertanyaan"]}\n</p>'
    s["soalHtml"] = img_tag + wacana_tag + tanya_tag

content_js = """// tka/data/mapel-sejarah.js
// Bank Soal & Pembahasan Resmi TKA Sejarah SMA 2025 (30 Butir Soal Resmi BPPP Kemendikbudristek)
// Sesuai Dokumen Resmi Seleksi Masuk PTN TKA Sejarah SMA 2025 Pilihan

const tkaSejarahPaket1Data = """ + json.dumps(soal_raw, indent=2, ensure_ascii=False) + """;

// Registrasi global bundle
if (typeof window !== 'undefined') {
  window.tkaSejarahPaket1Data = tkaSejarahPaket1Data;
  window.tkaSejarahPackages = window.tkaSejarahPackages || {};
  window.tkaSejarahPackages['paket1'] = {
    title: "Paket 1: Soal Resmi TKA Sejarah SMA 2025 (BPPP Kemendikbudristek)",
    shortTitle: "Paket 1 (Resmi 2025 - 30 Soal)",
    data: tkaSejarahPaket1Data
  };
}
"""

with open("tka/data/mapel-sejarah.js", "w", encoding="utf-8") as f:
    f.write(content_js)

with open("tka/js/data_sejarah.js", "w", encoding="utf-8") as f:
    f.write(content_js)

print("Berhasil menyusun 30 butir soal Sejarah ke tka/data/mapel-sejarah.js dan tka/js/data_sejarah.js")
