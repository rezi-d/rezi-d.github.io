// tka/data/mapel-fisika.js
// Bank Soal & Pembahasan Resmi TKA Fisika SMA 2025 (22 Butir Soal Resmi BPPP Kemendikbudristek)
// Sesuai Dokumen Resmi Seleksi Masuk PTN TKA Fisika SMA 2025

const tkaFisikaPaket1Data = [
  {
    "id": 1,
    "elemen": "Kinematika",
    "subelemen": "Pengukuran & Angka Penting",
    "indikator": "Menganalisis hasil pembacaan pengukuran besaran panjang menggunakan salah satu alat ukur panjang.",
    "kode": "25FISKINUKRF01SA-000000-0537",
    "tipe": "mcma",
    "img": "/tka/img/fisika/soal_01.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nHega akan membuat wadah untuk tempat manik-manik yang berbentuk tabung dan terbuat dari karton bekas. Hega mengukur ketebalan dan diameter luar tabung dengan menggunakan mikrometer sekrup.\n</p>\n<div class=\"p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1 mb-3\">\n  <div><strong>Diameter Luar Tabung:</strong> Skala utama = 13,0 mm, skala nonius = 47 &times; 0,01 mm = 0,47 mm &rarr; Diameter luar \\(D_o = 13{,}47\\text{ mm}\\).</div>\n  <div><strong>Ketebalan Tabung:</strong> Skala utama = 1,5 mm, skala nonius = 32 &times; 0,01 mm = 0,32 mm &rarr; Tebal dinding tabung \\(t = 1{,}82\\text{ mm}\\).</div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan hasil pengukuran tersebut, diameter manik-manik mana saja yang dapat masuk ke dalam wadah yang dibuat oleh Hega? Klik pada setiap diameter yang sesuai. Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "8,80 mm"
      },
      {
        "id": "B",
        "text": "9,30 mm"
      },
      {
        "id": "C",
        "text": "9,60 mm"
      },
      {
        "id": "D",
        "text": "10,10 mm"
      },
      {
        "id": "E",
        "text": "10,30 mm"
      }
    ],
    "kunci": [
      "A",
      "B",
      "C"
    ],
    "pembahasan": "<strong>Langkah Analisis Pembacaan Mikrometer & Geometri Tabung:</strong><br>\n1. <em>Diameter luar tabung (\\(D_o\\)):</em><br>\n   \\(D_o = \\text{Skala Utama} + \\text{Skala Nonius} = 13{,}0\\text{ mm} + (47 \\times 0{,}01\\text{ mm}) = 13{,}47\\text{ mm}\\).<br><br>\n2. <em>Tebal dinding tabung (\\(t\\)):</em><br>\n   \\(t = 1{,}5\\text{ mm} + (32 \\times 0{,}01\\text{ mm}) = 1{,}82\\text{ mm}\\).<br><br>\n3. <em>Diameter dalam wadah tabung (\\(D_i\\)):</em><br>\n   Karena tabung memiliki dua dinding penampang (kiri dan kanan), maka:<br>\n   \\[D_i = D_o - 2t = 13{,}47\\text{ mm} - 2(1{,}82\\text{ mm}) = 13{,}47 - 3{,}64 = 9{,}83\\text{ mm}\\]<br>\n4. <em>Kriteria manik-manik yang dapat masuk:</em><br>\n   Manik-manik dapat masuk ke dalam lubang tabung jika diameternya lebih kecil dari diameter rongga dalam (\\(d < 9{,}83\\text{ mm}\\)).<br>\n   &bull; <strong>8,80 mm</strong> &lt; 9,83 mm (Dapat masuk &mdash; Benar)<br>\n   &bull; <strong>9,30 mm</strong> &lt; 9,83 mm (Dapat masuk &mdash; Benar)<br>\n   &bull; <strong>9,60 mm</strong> &lt; 9,83 mm (Dapat masuk &mdash; Benar)<br>\n   &bull; 10,10 mm &gt; 9,83 mm (Tidak dapat masuk)<br>\n   &bull; 10,30 mm &gt; 9,83 mm (Tidak dapat masuk)<br>\n   <strong>Kunci Jawaban: A, B, C</strong>"
  },
  {
    "id": 2,
    "elemen": "Kinematika",
    "subelemen": "Gerak Lurus",
    "indikator": "Mengevaluasi strategi-strategi dalam menyelesaikan permasalahan sehari-hari menggunakan konsep gerak relatif.",
    "kode": "25FISKINGLRF02SA-000000-0009",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_02.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah kapal menyeberang dari Pulau A menuju Pulau B yang terletak tepat di sebelah timur. Jika saat itu arus air laut bergerak dari arah barat ke timur dengan kecepatan \\(2\\text{ km}\\cdot\\text{jam}^{-1}\\) dan kapal harus sampai tepat pukul 09.00 (dengan target laju resultan 10 km/jam ke arah timur), strategi apa yang harus diterapkan agar kapal datang tepat waktu?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Bergerak ke arah timur dengan kecepatan 12 km.jam⁻¹."
      },
      {
        "id": "B",
        "text": "Bergerak ke arah tenggara dengan kecepatan 10 km.jam⁻¹."
      },
      {
        "id": "C",
        "text": "Bergerak ke arah barat dengan kecepatan 10 km.jam⁻¹."
      },
      {
        "id": "D",
        "text": "Bergerak ke arah timur laut dengan kecepatan 10 km.jam⁻¹."
      },
      {
        "id": "E",
        "text": "Bergerak ke arah timur dengan kecepatan 8 km.jam⁻¹."
      }
    ],
    "kunci": "E",
    "pembahasan": "<strong>Konsep Vektor Kecepatan Relatif (Kerangka Acuan Arus Laut):</strong><br>\n&bull; Kecepatan resultan perahu terhadap tanah/bumi: \\(\\vec{v}_{PT} = \\vec{v}_{PA} + \\vec{v}_{AT}\\), di mana:<br>\n  - \\(\\vec{v}_{PA}\\) = kecepatan perahu terhadap air<br>\n  - \\(\\vec{v}_{AT}\\) = kecepatan arus air terhadap tanah = \\(+2\\text{ km/jam}\\) ke arah timur.<br>\n&bull; Karena pulau B tepat berada di sebelah timur pulau A, kapal cukup mengarahkan haluannya searah arus (ke timur).<br>\n&bull; Jika kecepatan resultan yang dibutuhkan untuk sampai tepat pukul 09.00 adalah \\(10\\text{ km/jam}\\) ke arah timur, maka perahu cukup digerakkan dengan mesin pada kecepatan:<br>\n\\[v_{PA} = v_{PT} - v_{AT} = 10\\text{ km/jam} - 2\\text{ km/jam} = 8\\text{ km/jam ke arah timur}\\]<br>\nDengan demikian, gaya dorong mesin hemat energi dan kapal terbantu oleh arus laut untuk mencapai resultan 10 km/jam.<br>\n<strong>Kunci Jawaban: E</strong>"
  },
  {
    "id": 3,
    "elemen": "Kinematika",
    "subelemen": "Gerak Lurus",
    "indikator": "Menginterpretasikan grafik kecepatan terhadap waktu dari peristiwa gerak lurus dalam kehidupan sehari-hari.",
    "kode": "25FISKINGLRF02SA-250004-0708",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_03.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDi sebuah jalan lurus yang sepi di pinggiran kota, dua sahabat yaitu Rafi dan Dion memutuskan untuk melakukan uji coba mobil mereka. Dua mobil yaitu mobil A dan mobil B berangkat dari titik yang sama secara bersamaan (\\(t = 0\\)) dan ingin mencapai jarak tertentu. Kedua mobil memiliki kombinasi kecepatan awal dan percepatan seperti pada grafik kecepatan terhadap waktu (\\(v-t\\)) berikut.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan grafik, kondisi manakah yang menggambarkan gerak dari mobil A dan B?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Kecepatan mobil A dan kecepatan mobil B selalu konstan."
      },
      {
        "id": "B",
        "text": "Pada detik ke-5, mobil A dan mobil B berada pada posisi yang sama."
      },
      {
        "id": "C",
        "text": "Mobil A akan menyalip mobil B pada detik ke-5."
      },
      {
        "id": "D",
        "text": "Pada detik ke-5, kecepatan kedua mobil sama."
      },
      {
        "id": "E",
        "text": "Percepatan kedua mobil pada detik ke-5 yaitu 25 m.s⁻²."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Interpretasi Fisik Grafik \\(v-t\\):</strong><br>\n1. <em>Titik Potong Kurva pada \\(t = 5\\text{ s}\\):</em><br>\n   Kedua garis grafik berpotongan pada ordinat \\(v = 25\\text{ m/s}\\). Hal ini menunjukkan bahwa pada detik ke-5, besar <strong>kecepatan kedua mobil adalah tepat sama</strong> (\\(v_A = v_B = 25\\text{ m/s}\\)).<br>\n2. <em>Posisi / Jarak Tempuh (Luas di Bawah Kurva):</em><br>\n   - Luas mobil B (trapesium dari \\(v_0 = 15\\) ke \\(25\\)): \\(s_B = \\frac{15 + 25}{2} \\times 5 = 100\\text{ m}\\).<br>\n   - Luas mobil A (segitiga dari \\(v_0 = 0\\) ke \\(25\\)): \\(s_A = \\frac{1}{2} \\times 5 \\times 25 = 62{,}5\\text{ m}\\).<br>\n   Karena \\(s_B > s_A\\), pada detik ke-5 mobil A <em>belum</em> menyalip mobil B dan belum berada di posisi yang sama.<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 4,
    "elemen": "Kinematika",
    "subelemen": "Gerak Lurus",
    "indikator": "Menentukan salah satu besaran berdasarkan grafik kecepatan terhadap waktu dari peristiwa gerak lurus dalam kehidupan sehari-hari.",
    "kode": "25FISKINGLRF02SA-250004-0702",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_04.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nBerdasarkan grafik uji coba mobil pada soal sebelumnya, mobil A berangkat dari keadaan diam (\\(v_0 = 0\\)) dan mobil B memiliki kecepatan awal \\(15\\text{ m/s}\\). Mobil A akan menyusul mobil B setelah menempuh jarak ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "150 m"
      },
      {
        "id": "B",
        "text": "200 m"
      },
      {
        "id": "C",
        "text": "250 m"
      },
      {
        "id": "D",
        "text": "300 m"
      },
      {
        "id": "E",
        "text": "400 m"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Perhitungan Waktu dan Jarak Menyusul:</strong><br>\n1. <em>Percepatan masing-masing mobil:</em><br>\n   - Mobil A: \\(a_A = \\frac{25 - 0}{5} = 5\\text{ m/s}^2\\)<br>\n   - Mobil B: \\(a_B = \\frac{25 - 15}{5} = 2\\text{ m/s}^2\\)<br><br>\n2. <em>Persamaan posisi fungsi waktu:</em><br>\n   \\[s_A(t) = v_{0A}t + \\frac{1}{2}a_A t^2 = \\frac{1}{2}(5)t^2 = 2{,}5 t^2\\]\n   \\[s_B(t) = v_{0B}t + \\frac{1}{2}a_B t^2 = 15t + \\frac{1}{2}(2)t^2 = 15t + t^2\\]<br>\n3. <em>Syarat menyusul (\\(s_A(t) = s_B(t)\\)):</em><br>\n   \\[2{,}5 t^2 = 15t + t^2 \\implies 1{,}5 t^2 - 15t = 0\\]\n   \\[1{,}5 t (t - 10) = 0 \\implies t = 10\\text{ sekon}\\]<br>\n4. <em>Jarak tempuh mobil A saat menyusul:</em><br>\n   \\[s_A(10) = 2{,}5 \\times (10)^2 = 2{,}5 \\times 100 = 250\\text{ meter}\\]<br>\n<strong>Kunci Jawaban: C (250 m)</strong>"
  },
  {
    "id": 5,
    "elemen": "Kinematika",
    "subelemen": "Gerak Lurus",
    "indikator": "Menyelesaikan permasalahan kontekstual dan relevan menggunakan konsep gerak vertikal.",
    "kode": "25FISKINGLRF02SA-000000-0460",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_05.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDua roket air diluncurkan secara vertikal ke atas dari permukaan tanah. Roket A memiliki kecepatan awal \\(v_{0A} = 40\\text{ m}\\cdot\\text{s}^{-1}\\) dan Roket B memiliki kecepatan awal \\(v_{0B} = 50\\text{ m}\\cdot\\text{s}^{-1}\\). Jika percepatan gravitasi bumi adalah \\(g = 10\\text{ m}\\cdot\\text{s}^{-2}\\), berapakah perbedaan ketinggian kedua roket air setelah 3 detik diluncurkan?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "30 m"
      },
      {
        "id": "B",
        "text": "50 m"
      },
      {
        "id": "C",
        "text": "75 m"
      },
      {
        "id": "D",
        "text": "105 m"
      },
      {
        "id": "E",
        "text": "180 m"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Metode Cepat Kinematika Gerak Vertikal:</strong><br>\nPersamaan posisi ketinggian vertikal ke atas:\n\\[h(t) = v_0 t - \\frac{1}{2} g t^2\\]\nSelisih ketinggian antara Roket B dan Roket A pada waktu \\(t\\):\n\\[\\Delta h(t) = h_B(t) - h_A(t) = \\left(v_{0B}t - \\frac{1}{2}gt^2\\right) - \\left(v_{0A}t - \\frac{1}{2}gt^2\\right)\\]\nPerhatikan bahwa komponen gravitasi saling meniadakan:\n\\[\\Delta h(t) = (v_{0B} - v_{0A}) \\times t\\]\nMasukkan nilai \\(v_{0B} = 50\\text{ m/s}\\), \\(v_{0A} = 40\\text{ m/s}\\), dan \\(t = 3\\text{ s}\\):\n\\[\\Delta h(3) = (50 - 40) \\times 3 = 10 \\times 3 = 30\\text{ meter}\\]<br>\n<strong>Kunci Jawaban: A (30 m)</strong>"
  },
  {
    "id": 6,
    "elemen": "Kinematika",
    "subelemen": "Gerak Lengkung",
    "indikator": "Menganalisis keterkaitan beberapa besaran gerak parabola pada peristiwa sehari-hari.",
    "kode": "25FISKINGLKF03SA-000000-0520",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_06.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nAdrian dan Bisma melakukan lemparan melompat (jump shot) bola basket ke ring yang berjarak \\(x = 3\\text{ m}\\) dan berketinggian \\(h = 3{,}05\\text{ m}\\). Keduanya melepaskan bola pada sudut elevasi \\(50^\\circ\\) dari ketinggian awal \\(h_0 = 2\\text{ m}\\). Pada percobaan pertama, bola dilepaskan dengan \\(v_0 = 7{,}5\\text{ m}\\cdot\\text{s}^{-1}\\) dan masuk ke ring.\nPada percobaan kedua, Adrian tetap melempar dengan \\(v_0 = 7{,}5\\text{ m}\\cdot\\text{s}^{-1}\\), sedangkan Bisma menurunkan kecepatannya menjadi \\(6{,}5\\text{ m}\\cdot\\text{s}^{-1}\\) dengan sudut tetap.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan perubahan tersebut, kondisi apa yang akan terjadi pada hasil tembakan bola Bisma jika dibandingkan dengan bola Adrian? (Diketahui \\(\\sin 50^\\circ = 0{,}766\\) dan \\(\\cos 50^\\circ = 0{,}643\\))\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Kedua bola tetap masuk ke ring karena sudut dan tinggi awalnya tidak berubah."
      },
      {
        "id": "B",
        "text": "Bola Bisma dipastikan masih dapat masuk ke dalam ring karena sudutnya besar."
      },
      {
        "id": "C",
        "text": "Bola Bisma jatuh lebih cepat dan gagal masuk karena kecepatannya lebih kecil."
      },
      {
        "id": "D",
        "text": "Bola Bisma akan melengkung lebih tinggi sehingga justru lebih mudah masuk."
      },
      {
        "id": "E",
        "text": "Bola Adrian diperkirakan akan melewati ring karena kecepatannya terlalu besar."
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Analisis Trajektori Gerak Parabola:</strong><br>\nPersamaan lintasan parabola \\(y(x)\\):\n\\[y = y_0 + x\\tan\\theta - \\frac{g x^2}{2 v_0^2 \\cos^2\\theta}\\]\n&bull; Pada jarak horizontal ring (\\(x = 3\\text{ m}\\)), ketinggian bola berbanding terbalik dengan kuadrat kecepatan awal: penurunan kecepatan \\(v_0\\) dari \\(7{,}5\\text{ m/s}\\) menjadi \\(6{,}5\\text{ m/s}\\) memperbesar suku pengurang gravitasi (\\(\\frac{g x^2}{2 v_0^2 \\cos^2\\theta}\\)).<br>\n&bull; Akibatnya, pada \\(x = 3\\text{ m}\\), ketinggian bola Bisma akan berada jauh di bawah tinggi ring (\\(y < 3{,}05\\text{ m}\\)). Bola Bisma jatuh lebih cepat di depan ring dan gagal masuk.<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 7,
    "elemen": "Dinamika",
    "subelemen": "Hubungan Gaya dan Gerak (Hukum Newton)",
    "indikator": "Mengidentifikasi beberapa fenomena yang menerapkan hukum Newton yang sama.",
    "kode": "25FISDINHGNF04SA-000000-0637",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_07.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKetika sebuah mobil tiba-tiba mengerem mendadak, penumpang di dalamnya akan terdorong ke depan. Di antara beberapa fenomena berikut ini, manakah yang menunjukkan penerapan hukum gerak yang sama dengan fenomena tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Semakin besar gaya yang diberikan pada suatu benda, semakin besar percepatannya."
      },
      {
        "id": "B",
        "text": "Ketika mendayung perahu ke depan, air akan mendorong perahu ke belakang."
      },
      {
        "id": "C",
        "text": "Sebuah buku akan tetap diam di atas meja sampai ada gaya yang menggerakkannya."
      },
      {
        "id": "D",
        "text": "Sebuah bola kasti yang dilempar vertikal ke atas oleh seseorang akan kembali jatuh ke tanah."
      },
      {
        "id": "E",
        "text": "Dibutuhkan gaya yang lebih besar untuk mempercepat truk dibandingkan mempercepat sepeda motor."
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Identifikasi Hukum I Newton (Kelembaman / Inersia):</strong><br>\n&bull; Peristiwa penumpang terdorong ke depan saat pengereman mendadak terjadi karena sifat <em>kelembaman</em> (inersia), yaitu kecenderungan benda untuk mempertahankan keadaan geraknya (\\(\\Sigma F = 0\\), Hukum I Newton).<br>\n&bull; Pilihan A & E menerapkan <strong>Hukum II Newton</strong> (\\(F = m \\cdot a\\)).<br>\n&bull; Pilihan B menerapkan <strong>Hukum III Newton</strong> (Aksi-Reaksi).<br>\n&bull; Pilihan C (\"Sebuah buku tetap diam di atas meja sampai ada gaya luar yang mempengaruhinya\") adalah rumusan klasik <strong>Hukum I Newton</strong>.<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 8,
    "elemen": "Dinamika",
    "subelemen": "Hubungan Gaya dan Gerak (Hukum Newton)",
    "indikator": "Menganalisis keterkaitan gaya yang bekerja terhadap perubahan kondisi gerak benda pada peristiwa sehari-hari.",
    "kode": "25FISDINHGNF04SA-000000-0102",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_08.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang nelayan tradisional menggunakan perahu motor untuk melaut. Perahu bergerak dengan kecepatan konstan \\(v_y = 6\\text{ m}\\cdot\\text{s}^{-1}\\) ke arah utara. Tiba-tiba arus laut memberikan gaya horizontal \\(F = 300\\text{ N}\\) selama \\(t = 4\\text{ s}\\) ke arah timur. Massa total perahu beserta muatan adalah \\(150\\text{ kg}\\). Mesin perahu tetap mempertahankan kecepatan ke utara konstan \\(6\\text{ m}\\cdot\\text{s}^{-1}\\). Setelah 4 detik gaya arus bekerja, kondisi gerak perahu adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "kecepatan resultannya 10 m.s⁻¹ dengan arah 53° ke timur dari utara, kemudian bergerak lurus dengan kecepatan konstan"
      },
      {
        "id": "B",
        "text": "kecepatan resultannya 8 m.s⁻¹ dengan arah 45° ke timur dari utara, kemudian bergerak lurus dengan percepatan tetap"
      },
      {
        "id": "C",
        "text": "kecepatan resultannya 10 m.s⁻¹ dengan arah 37° ke timur dari utara, kemudian bergerak lurus dan mengalami perlambatan"
      },
      {
        "id": "D",
        "text": "kecepatan resultannya 12 m.s⁻¹ dengan arah 37° ke timur dari utara, kemudian bergerak lurus dengan percepatan konstan"
      },
      {
        "id": "E",
        "text": "kecepatan resultannya 6 m.s⁻¹ dengan arah 45° ke timur dari utara, kemudian bergerak lurus dengan percepatan tetap"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Perhitungan Dinamika Dua Dimensi:</strong><br>\n1. <em>Percepatan ke arah timur (sumbu-x):</em><br>\n   \\[a_x = \\frac{F}{m} = \\frac{300\\text{ N}}{150\\text{ kg}} = 2\\text{ m/s}^2\\]\n2. <em>Kecepatan sumbu-x pada akhir detik ke-4:</em><br>\n   \\[v_x = a_x \\cdot t = 2\\text{ m/s}^2 \\times 4\\text{ s} = 8\\text{ m/s}\\]\n3. <em>Kecepatan resultan total:</em><br>\n   \\[v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ m/s}\\]\n4. <em>Arah terhadap sumbu utara (sumbu-y):</em><br>\n   \\[\\tan\\theta = \\frac{v_x}{v_y} = \\frac{8}{6} = \\frac{4}{3} \\implies \\theta \\approx 53^\\circ\\text{ ke timur dari utara}\\]\n5. <em>Kondisi setelah \\(t > 4\\text{ s}\\):</em> Karena gaya arus laut sudah berhenti bekerja dan mesin mempertahankan gaya seimbang terhadap gesekan air, gaya netto total \\(\\Sigma F = 0\\), sehingga perahu bergerak lurus beraturan dengan <strong>kecepatan konstan</strong> (Hukum I Newton).<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 9,
    "elemen": "Dinamika",
    "subelemen": "Momentum dan Impuls",
    "indikator": "Menjelaskan fenomena kehidupan sehari-hari menggunakan konsep momentum dan impuls.",
    "kode": "25FISDINMMIF05SA-000000-0545",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_09.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam sebuah pertunjukan bela diri, seorang atlet karate berhasil memecahkan tumpukan batu bata ringan (hebel) dengan pukulan cepat. Tumpukan batu bata dapat pecah meskipun hanya bersentuhan dengan tangan dalam waktu singkat. Penjelasan yang paling tepat untuk fenomena ini adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Impuls yang kecil menyebabkan tumpukan batu bata pecah karena kecepatan pukulan sangat tinggi."
      },
      {
        "id": "B",
        "text": "Gaya menjadi sangat besar karena perubahan momentum terjadi dalam waktu yang sangat singkat."
      },
      {
        "id": "C",
        "text": "Impuls yang diterima hebel menjadi kecil karena waktu sentuh sangat singkat."
      },
      {
        "id": "D",
        "text": "Tidak ada perubahan momentum, karena batu bata kondisi awalnya diam."
      },
      {
        "id": "E",
        "text": "Impuls yang besar terjadi karena gaya dan waktu sentuh yang besar."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Hubungan Impuls dan Gaya Kontak Rata-Rata:</strong><br>\nMenurut teorema impuls-momentum:\n\\[I = \\Delta p = F_{\\text{kontak}} \\cdot \\Delta t \\implies F_{\\text{kontak}} = \\frac{\\Delta p}{\\Delta t}\\]\nKetika tangan karateka yang bermassa dan berkecepatan tinggi dihentikan mendadak oleh tumpukan hebel dalam selang waktu benturan (\\(\\Delta t\\)) yang sangat singkat (fraksi milisekon), penyebut \\(\\Delta t\\) yang sangat kecil mengakibatkan gaya kontak impulsif (\\(F\\)) melonjak menjadi luar biasa besar, melampaui batas modulus elastisitas dan kekuatan geser hebel sehingga pecah seketika.<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 10,
    "elemen": "Dinamika",
    "subelemen": "Dinamika Rotasi (Momen Gaya dan Momen Inersia)",
    "indikator": "Menyelesaikan permasalahan kontekstual dan relevan menggunakan konsep dinamika rotasi terkait momen gaya dan momen inersia.",
    "kode": "25FISDINDRTF06SA-000000-0290",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_10.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah kunci pas dengan panjang \\(L = 20\\text{ cm}\\) digunakan untuk memutar baut dengan tujuan mengencangkan baut. Agar kunci pas berfungsi optimal, diperlukan gaya \\(F = 15\\text{ N}\\) membentuk sudut \\(37^\\circ\\) terhadap posisi horizontal kunci pas. Berapakah percepatan sudut yang dihasilkan oleh gaya \\(F\\) tersebut jika kunci pas dianggap batang homogen bermassa 500 gram? (\\(\\sin 37^\\circ = 0{,}6\\) dan \\(\\cos 37^\\circ = 0{,}8\\))\n</p>",
    "options": [
      {
        "id": "A",
        "text": "180 rad.s⁻²"
      },
      {
        "id": "B",
        "text": "270 rad.s⁻²"
      },
      {
        "id": "C",
        "text": "360 rad.s⁻²"
      },
      {
        "id": "D",
        "text": "1080 rad.s⁻²"
      },
      {
        "id": "E",
        "text": "1440 rad.s⁻²"
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Perhitungan Dinamika Rotasi Batang:</strong><br>\n1. <em>Momen gaya (torsi) terhadap poros baut:</em><br>\n   \\[\\tau = F \\sin\\theta \\cdot L = 15\\text{ N} \\times \\sin(37^\\circ) \\times 0{,}2\\text{ m} = 15 \\times 0{,}6 \\times 0{,}2 = 1{,}8\\text{ N}\\cdot\\text{m}\\]\n2. <em>Momen inersia batang homogen diputar di ujungnya:</em><br>\n   \\[I = \\frac{1}{3} m L^2 = \\frac{1}{3} (0{,}5\\text{ kg}) (0{,}2\\text{ m})^2 = \\frac{1}{3} \\times 0{,}5 \\times 0{,}04 = \\frac{0{,}02}{3} = \\frac{1}{150}\\text{ kg}\\cdot\\text{m}^2\\]\n3. <em>Percepatan sudut (\\(\\alpha\\)):</em><br>\n   \\[\\alpha = \\frac{\\tau}{I} = \\frac{1{,}8}{\\frac{1}{150}} = 1{,}8 \\times 150 = 270\\text{ rad}\\cdot\\text{s}^{-2}\\]<br>\n<strong>Kunci Jawaban: B (270 rad.s⁻²)</strong>"
  },
  {
    "id": 11,
    "elemen": "Fluida",
    "subelemen": "Fluida Statis dan Dinamis",
    "indikator": "Menentukan nilai besaran yang tidak diketahui menggunakan konsep Hukum Pascal.",
    "kode": "25FISFLUFLDF07SA-000000-0109",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_11.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nKursi yang digunakan oleh dokter gigi saat praktik seringkali dapat dinaikkan dan diturunkan dengan mudah menggunakan sistem hidrolik. Jika beban yang dapat diangkat oleh piston besar yaitu \\(540\\text{ N}\\) dengan diameter \\(3\\text{ cm}\\), maka gaya terkecil yang digunakan pada piston kecil yang berukuran \\(0{,}5\\text{ cm}\\) adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "15 N"
      },
      {
        "id": "B",
        "text": "90 N"
      },
      {
        "id": "C",
        "text": "240 N"
      },
      {
        "id": "D",
        "text": "3240 N"
      },
      {
        "id": "E",
        "text": "19440 N"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Penerapan Hukum Pascal:</strong><br>\nTekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan ke segala arah dengan sama besar:\n\\[P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2}\\]\nKarena penampang berbentuk lingkaran (\\(A = \\frac{1}{4}\\pi d^2\\)):\n\\[\\frac{F_1}{F_2} = \\left(\\frac{d_1}{d_2}\\right)^2 = \\left(\\frac{0{,}5\\text{ cm}}{3\\text{ cm}}\\right)^2 = \\left(\\frac{1}{6}\\right)^2 = \\frac{1}{36}\\]\n\\[F_1 = \\frac{F_2}{36} = \\frac{540\\text{ N}}{36} = 15\\text{ N}\\]<br>\n<strong>Kunci Jawaban: A (15 N)</strong>"
  },
  {
    "id": 12,
    "elemen": "Gelombang",
    "subelemen": "Bunyi",
    "indikator": "Menentukan salah satu besaran fisis terkait bunyi dan gelombang menggunakan data yang disajikan.",
    "kode": "25FISGELBNYF08SA-000000-0332",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_12.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeorang siswa melakukan percobaan membuat alat musik sederhana dari pipa PVC yang diisi air. Ia memukul bagian atas pipa untuk menghasilkan bunyi. Panjang pipa adalah 80 cm dan sebagian diisi air sehingga hanya tersisa kolom udara setinggi 40 cm yang berfungsi sebagai kolom udara terbuka di salah satu ujungnya. Diketahui cepat rambat bunyi di udara adalah \\(340\\text{ m}\\cdot\\text{s}^{-1}\\). Jika pada saat itu pipa menghasilkan nada dasar (harmonik pertama), berapa frekuensi bunyi yang dihasilkan?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "212,5 Hz"
      },
      {
        "id": "B",
        "text": "425,0 Hz"
      },
      {
        "id": "C",
        "text": "637,5 Hz"
      },
      {
        "id": "D",
        "text": "850 Hz"
      },
      {
        "id": "E",
        "text": "1062,5 Hz"
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Karakteristik Pipa Organa Tertutup Sebelah:</strong><br>\nPada nada dasar pipa organa tertutup, terbentuk \\(\\frac{1}{4}\\lambda\\) di sepanjang kolom udara \\(L\\):\n\\[L = \\frac{1}{4}\\lambda_0 \\implies \\lambda_0 = 4L\\]\nDengan \\(L = 40\\text{ cm} = 0{,}4\\text{ m}\\) dan \\(v = 340\\text{ m/s}\\):\n\\[f_0 = \\frac{v}{\\lambda_0} = \\frac{v}{4L} = \\frac{340\\text{ m/s}}{4 \\times 0{,}4\\text{ m}} = \\frac{340}{1{,}6} = 212{,}5\\text{ Hz}\\]<br>\n<strong>Kunci Jawaban: A (212,5 Hz)</strong>"
  },
  {
    "id": 13,
    "elemen": "Gelombang",
    "subelemen": "Cahaya",
    "indikator": "Menjelaskan fenomena kehidupan sehari-hari menggunakan konsep sifat-sifat cahaya.",
    "kode": "25FISGELCHYF09SA-000000-0212",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_13.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSeseorang sedang dalam perjalanan pulang melalui tanah lapang yang sangat panas. Dari kejauhan, ia melihat tanaman-tanaman pendek di seberang lapangan terlihat beriak seperti bayangan di dalam gelombang air (fatamorgana). Setelah mendekatinya, ternyata itu hanyalah ilusi. Sesuai prinsip sifat-sifat cahaya, bagaimana penjelasan ilmiah dari fenomena ilusi tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Cahaya dari tanaman terlihat beriak seperti gelombang air karena tertiup angin."
      },
      {
        "id": "B",
        "text": "Permukaan lapangan terlihat bergelombang sehingga cahaya dari tanaman terlihat beriak."
      },
      {
        "id": "C",
        "text": "Permukaan lapangan yang tidak rata menyebabkan pemantulan cahaya yang tidak teratur."
      },
      {
        "id": "D",
        "text": "Panas permukaan lapangan menyebabkan perbedaan kerapatan udara sehingga cahaya mengalami pembiasan."
      },
      {
        "id": "E",
        "text": "Tanah lapang yang panas membuat tarikan gravitasi saat cahaya merambat menuju siswa menjadi berbelok."
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Fisika di Balik Fatamorgana:</strong><br>\nPermukaan tanah lapang yang terpapar sinar matahari kuat memanaskan lapisan udara langsung di atasnya. Udara panas memiliki massa jenis dan kerapatan optik (indeks bias) yang lebih rendah daripada udara dingin di lapisan atasnya. Berkas cahaya yang merambat dari objek melewati gradien kerapatan optik ini dibiaskan secara bertingkat dan mengalami pemantulan internal total ke atas mata pengamat, menciptakan citra maya terbalik menyerupai permukaan air.<br>\n<strong>Kunci Jawaban: D</strong>"
  },
  {
    "id": 14,
    "elemen": "Gelombang",
    "subelemen": "Cahaya",
    "indikator": "Mengevaluasi strategi-strategi dalam menyelesaikan permasalahan sehari-hari menggunakan prinsip cermin, lensa, dan alat optik.",
    "kode": "25FISGELCHYF09SA-000000-0247",
    "tipe": "kompleks_bs",
    "img": "/tka/img/fisika/soal_14.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nRina menderita hipermetropi (rabun dekat) dengan titik dekat mata \\(PP = 50\\text{ cm}\\) (titik dekat mata normal \\(S_n = 25\\text{ cm}\\)). Dokter meresepkan lensa kacamata untuk membantunya melihat jelas. Tentukan apakah strategi berikut <strong>Tepat</strong> atau <strong>Tidak Tepat</strong> dilakukan oleh Rina.\n</p>",
    "options": [],
    "kunci": [
      "Benar",
      "Benar",
      "Salah"
    ],
    "pembahasan": "<strong>Analisis Kacamata Penderita Hipermetropi:</strong><br>\n1. <em>Kekuatan lensa kacamata hipermetropi:</em><br>\n   \\[P = \\frac{100}{S_n} - \\frac{100}{PP} = \\frac{100}{25} - \\frac{100}{50} = 4 - 2 = +2\\text{ dioptri (Lensa Cembung)}\\]\n   Maka strategi 1 adalah <strong>Tepat</strong>.<br><br>\n2. <em>Jarak baca alami penderita hipermetropi:</em><br>\n   Titik dekat Rina adalah 50 cm, artinya mata tanpa akomodasi berlebihan mampu memfokuskan objek pada jarak \\(s \\ge 50\\text{ cm}\\). Maka strategi membaca pada jarak lebih dari 50 cm adalah <strong>Tepat</strong>.<br><br>\n3. <em>Lensa cekung:</em><br>\n   Lensa cekung (negatif) ditujukan untuk mata miopi (rabun jauh) dan akan memundurkan bayangan semakin jauh ke belakang retina, memperparah hipermetropi. Maka strategi 3 adalah <strong>Tidak Tepat</strong>."
  },
  {
    "id": 15,
    "elemen": "Kalor dan Termodinamika",
    "subelemen": "Kalor dan Perpindahannya",
    "indikator": "Menentukan jenis variabel dalam rancangan percobaan terkait konsep kalor.",
    "kode": "25FISKALKLPF10SA-250023-0720",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_15.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam percobaan konduksi kalor, sebatang logam besi diletakkan horizontal dan dipanaskan pada salah satu ujungnya dengan pembakar spirtus. Potongan lilin kecil ditempelkan pada batang besi tiap jarak 5 cm. Waktu melelehnya masing-masing lilin dicatat dengan stopwatch untuk menyelidiki pengaruh jarak efektif terhadap daya konduksi kalor. Berdasarkan rancangan percobaan ini, apa variabel kontrol, variabel bebas, dan variabel terikatnya?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "variabel kontrol = jenis bahan; variabel bebas = daya konduksi; variabel terikat = panjang logam"
      },
      {
        "id": "B",
        "text": "variabel kontrol = waktu melelehnya lilin; variabel bebas = jenis bahan; variabel terikat = daya konduksi"
      },
      {
        "id": "C",
        "text": "variabel kontrol = jenis logam; variabel bebas = jarak lilin dari sumber; variabel terikat = waktu melelehnya lilin"
      },
      {
        "id": "D",
        "text": "variabel kontrol = waktu melelehnya lilin; variabel bebas = panjang logam; variabel terikat = jenis logam"
      },
      {
        "id": "E",
        "text": "variabel kontrol = panjang logam; variabel bebas = jenis bahan; variabel terikat = daya konduksi"
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Penetapan Variabel Ilmiah dalam Metode Percobaan:</strong><br>\n&bull; <strong>Variabel Kontrol</strong> (faktor yang dijaga tetap konstan): jenis logam (besi), luas penampang batang, jenis pembakar/nyala api.<br>\n&bull; <strong>Variabel Bebas</strong> (faktor yang sengaja diubah-ubah oleh peneliti): jarak penempatan lilin dari sumber panas (5 cm, 10 cm, 15 cm, dst).<br>\n&bull; <strong>Variabel Terikat</strong> (faktor yang diamati dan diukur sebagai respon): waktu yang dibutuhkan lilin untuk meleleh (dicatat dengan stopwatch).<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 16,
    "elemen": "Kalor dan Termodinamika",
    "subelemen": "Kalor dan Perpindahannya",
    "indikator": "Mengevaluasi prosedur percobaan dari rancangan percobaan terkait konsep kalor.",
    "kode": "25FISKALKLPF10SA-250023-0717",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_17.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDari rancangan percobaan konduksi kalor pada batang logam menggunakan potongan lilin tersebut, apa salah satu kelemahan metodologis yang paling mungkin menyebabkan data pengukuran waktu meleleh menjadi tidak akurat?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Jenis lilin dan ukuran lilin tidak dipastikan sama sehingga tidak homogen."
      },
      {
        "id": "B",
        "text": "Jenis logam yang tidak diganti-ganti sehingga menyebabkan tidak ada pembanding."
      },
      {
        "id": "C",
        "text": "Penempatan sumber panas di ujung logam menyebabkan kalor tidak menyebar secara merata."
      },
      {
        "id": "D",
        "text": "Pengukuran waktu menggunakan stopwatch sulit dilakukan sehingga muncul penyimpangan data waktu."
      },
      {
        "id": "E",
        "text": "Panjang keseluruhan logam tidak diukur sehingga tidak dapat dibandingkan."
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Evaluasi Validitas Eksperimen Konduksi:</strong><br>\nAgar waktu melelehnya lilin benar-benar hanya dipengaruhi oleh laju hantaran kalor \\(H = \\frac{k A \\Delta T}{L}\\), jumlah kalor yang dibutuhkan untuk melelehkan setiap potongan lilin (\\(Q = m \\cdot L_f\\)) harus sama persis. Jika massa, bentuk, dan ketebalan potongan lilin tidak seragam (tidak homogen), lilin yang lebih tipis/sedikit akan meleleh lebih cepat bukan semata-mata karena laju konduksi, melainkan karena kapasitas kalornya yang lebih kecil.<br>\n<strong>Kunci Jawaban: A</strong>"
  },
  {
    "id": 17,
    "elemen": "Kalor dan Termodinamika",
    "subelemen": "Gas Ideal",
    "indikator": "Menentukan salah satu nilai besaran fisis menggunakan konsep gas ideal.",
    "kode": "25FISKALGIDF12SA-000000-0115",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_18.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGas ideal di dalam sebuah wadah tertutup memiliki volume awal 2 liter, suhu 300 kelvin, dan tekanan 1 atmosfer. Jika gas tersebut dimampatkan hingga volumenya menjadi 1 liter dengan suhu mutlaknya dinaikkan menjadi 2 kali semula, maka tekanan akhir gas adalah ....\n</p>",
    "options": [
      {
        "id": "A",
        "text": "0,5 atmosfer"
      },
      {
        "id": "B",
        "text": "1 atmosfer"
      },
      {
        "id": "C",
        "text": "2 atmosfer"
      },
      {
        "id": "D",
        "text": "4 atmosfer"
      },
      {
        "id": "E",
        "text": "6 atmosfer"
      }
    ],
    "kunci": "D",
    "pembahasan": "<strong>Persamaan Keadaan Gas Ideal Boyle-Gay Lussac:</strong><br>\nUntuk jumlah mol gas yang konstan dalam ruang tertutup:\n\\[\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}\\]\nDiketahui:<br>\n- \\(P_1 = 1\\text{ atm}\\), \\(V_1 = 2\\text{ L}\\), \\(T_1 = 300\\text{ K}\\)<br>\n- \\(V_2 = 1\\text{ L}\\), \\(T_2 = 2 \\times 300 = 600\\text{ K}\\)<br>\nMaka tekanan akhir \\(P_2\\):\n\\[P_2 = P_1 \\times \\left(\\frac{V_1}{V_2}\\right) \\times \\left(\\frac{T_2}{T_1}\\right) = 1 \\times \\left(\\frac{2}{1}\\right) \\times \\left(\\frac{600}{300}\\right) = 1 \\times 2 \\times 2 = 4\\text{ atmosfer}\\]<br>\n<strong>Kunci Jawaban: D (4 atmosfer)</strong>"
  },
  {
    "id": 18,
    "elemen": "Kalor dan Termodinamika",
    "subelemen": "Termodinamika",
    "indikator": "Menganalisis salah satu besaran fisis berdasarkan data menggunakan prinsip hukum termodinamika.",
    "kode": "25FISKALTRMF13SA-000000-0438",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_19.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nSebuah mesin kalor menyerap kalor dari sumber panas, melakukan usaha, dan membuang sisa kalor ke lingkungan. Pada tahap awal, mesin ini memiliki efisiensinya 30%, dan usaha yang dihasilkan tiap siklus adalah 600 J. Setelah beberapa waktu, mesin ini diperbaiki sehingga memiliki efisiensi 50%. Agar mesin tetap menghasilkan usaha yang sama (600 J) dan kondisi lingkungan kerja tetap, bagaimana kebutuhan kalor masuk pada mesin tersebut setelah diperbaiki?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Membutuhkan kalor 40% lebih banyak."
      },
      {
        "id": "B",
        "text": "Membutuhkan kalor 40% lebih sedikit."
      },
      {
        "id": "C",
        "text": "Membutuhkan kalor 75% kalor lebih sedikit."
      },
      {
        "id": "D",
        "text": "Membutuhkan kalor 25% kalor lebih banyak."
      },
      {
        "id": "E",
        "text": "Membutuhkan kalor 50% kalor lebih sedikit."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Perhitungan Kalor Masuk Mesin Kalor:</strong><br>\nEfisiensi termal mesin kalor dirumuskan sebagai:\n\\[\\eta = \\frac{W}{Q_{\\text{in}}} \\implies Q_{\\text{in}} = \\frac{W}{\\eta}\\]\n1. <em>Kondisi awal (\\(\\eta_1 = 30\\% = 0{,}3\\)):</em><br>\n   \\[Q_{\\text{in},1} = \\frac{600\\text{ J}}{0{,}3} = 2000\\text{ J}\\]\n2. <em>Kondisi setelah diperbaiki (\\(\\eta_2 = 50\\% = 0{,}5\\)):</em><br>\n   \\[Q_{\\text{in},2} = \\frac{600\\text{ J}}{0{,}5} = 1200\\text{ J}\\]\n3. <em>Perubahan kebutuhan kalor masuk:</em><br>\n   \\[\\Delta Q_{\\text{in}} = 2000 - 1200 = 800\\text{ J (penghematan)}\\]\n   Persentase pengurangan terhadap kalor semula:\n   \\[\\frac{800}{2000} \\times 100\\% = 40\\%\\text{ lebih sedikit}\\]<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 19,
    "elemen": "Kalor dan Termodinamika",
    "subelemen": "Pemanasan Global",
    "indikator": "Menganalisis penyebab/penanganan dari anomali kondisi lingkungan akibat pemanasan global.",
    "kode": "25FISKALPMGF11SA-000000-0027",
    "tipe": "mcma",
    "img": "/tka/img/fisika/soal_20.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nGrafik menunjukkan tren kenaikan suhu rata-rata tahunan di Kota X (2005&ndash;2025) dari \\(27{,}0^\\circ\\text{C}\\) menjadi \\(29{,}6^\\circ\\text{C}\\). Di saat yang sama, terjadi peningkatan drastis kendaraan bermotor dan penggunaan AC serta penyusutan area hijau kota sebesar 40%.\n</p>\n<p class=\"font-semibold text-slate-900 mb-2\">\nBerdasarkan data di atas, pilihlah semua pernyataan yang benar sesuai dengan kondisi dan fenomena tersebut! Klik pada setiap jawaban yang Benar! Jawaban benar lebih dari satu.\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Grafik menunjukkan tren kenaikan suhu yang dapat disebabkan oleh peningkatan energi termal di lingkungan akibat aktivitas manusia."
      },
      {
        "id": "B",
        "text": "Emisi dari kendaraan dan AC menyebabkan peningkatan kalor laten di udara yang mengurangi efek rumah kaca."
      },
      {
        "id": "C",
        "text": "Penurunan area hijau menyebabkan berkurangnya pendinginan alami akibat proses transpirasi dan evaporasi."
      },
      {
        "id": "D",
        "text": "Kenaikan suhu udara dalam jangka panjang menunjukkan adanya ketidakseimbangan antara energi yang diserap dan dipancarkan kembali oleh permukaan bumi."
      },
      {
        "id": "E",
        "text": "Peningkatan suhu udara berarti peningkatan energi kinetik rata-rata partikel udara di atmosfer."
      }
    ],
    "kunci": [
      "A",
      "C",
      "D",
      "E"
    ],
    "pembahasan": "<strong>Analisis Fisika Fenomena Termal Atmosfer:</strong><br>\n&bull; <strong>Pernyataan A (Benar):</strong> Aktivitas antropogenik (buangan panas mesin dan gas rumah kaca) meningkatkan akumulasi energi termal.<br>\n&bull; <strong>Pernyataan B (Salah):</strong> Emisi gas kendaraan (CO₂) justru memerangkap radiasi inframerah, memperkuat efek rumah kaca, bukan menguranginya.<br>\n&bull; <strong>Pernyataan C (Benar):</strong> Tumbuhan menyerap kalor melalui evaporasi dan transpirasi air, sehingga pengurangan area hijau memicu <em>urban heat island</em>.<br>\n&bull; <strong>Pernyataan D (Benar):</strong> Pemanasan bumi terjadi karena radiasi netto masuk lebih besar daripada radiasi gelombang panjang yang dapat dipancarkan keluar ke angkasa.<br>\n&bull; <strong>Pernyataan E (Benar):</strong> Berdasarkan teori kinetik gas, suhu mutlak merupakan representasi langsung dari energi kinetik translasi rata-rata partikel gas (\\(\\bar{E}_k = \\frac{3}{2}kT\\)).<br>\n<strong>Kunci Jawaban: A, C, D, E</strong>"
  },
  {
    "id": 20,
    "elemen": "Kelistrikan",
    "subelemen": "Listrik Statis",
    "indikator": "Menentukan salah satu nilai besaran tertentu menggunakan konsep listrik statis.",
    "kode": "25FISLISLSSF14SA-000000-0606",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_21.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDalam sistem printer elektrostatik, dua elektroda dipasang sejajar pada kertas cetak untuk mengarahkan partikel toner. Dua muatan terpisah pada sumbu-x: \\(Q_1 = 4\\ \\mu\\text{C}\\) terletak di \\(x = 0\\) dan \\(Q_2 = 9\\ \\mu\\text{C}\\) terletak di \\(x = 8\\text{ cm}\\). Keduanya memiliki jenis muatan yang sama. Di manakah letak suatu titik di sepanjang sumbu-x yang dapat memiliki kuat medan listrik total sama dengan nol?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Di sebelah kiri Q₁, yaitu pada x = -3,2 cm."
      },
      {
        "id": "B",
        "text": "Di sebelah kanan Q₁, yaitu pada x = 3,2 cm."
      },
      {
        "id": "C",
        "text": "Tepat di antara kedua muatan, yaitu pada x = 4 cm."
      },
      {
        "id": "D",
        "text": "Di sebelah kanan Q₁, yaitu pada x = 4,8 cm."
      },
      {
        "id": "E",
        "text": "Di sebelah kanan Q₂, yaitu pada x = 11,2 cm."
      }
    ],
    "kunci": "B",
    "pembahasan": "<strong>Penentuan Letak Kuat Medan Listrik Nol:</strong><br>\nKarena kedua muatan sejenis, medan listrik saling berlawanan arah di daerah antara kedua muatan (\\(0 < x < 8\\)). Misalkan titik P berjarak \\(r_1\\) dari \\(Q_1\\), maka jaraknya dari \\(Q_2\\) adalah \\((8 - r_1)\\).<br>\nSyarat kuat medan listrik nol:\n\\[E_1 = E_2 \\implies \\frac{k Q_1}{r_1^2} = \\frac{k Q_2}{(8 - r_1)^2}\\]\nTarik akar pada kedua ruas:\n\\[\\frac{\\sqrt{Q_1}}{r_1} = \\frac{\\sqrt{Q_2}}{8 - r_1} \\implies \\frac{\\sqrt{4}}{r_1} = \\frac{\\sqrt{9}}{8 - r_1} \\implies \\frac{2}{r_1} = \\frac{3}{8 - r_1}\\]\nKalikan silang:\n\\[2(8 - r_1) = 3r_1 \\implies 16 - 2r_1 = 3r_1 \\implies 5r_1 = 16 \\implies r_1 = 3{,}2\\text{ cm}\\]\nTitik tersebut berada pada koordinat \\(x = 3{,}2\\text{ cm}\\) (di sebelah kanan \\(Q_1\\)).<br>\n<strong>Kunci Jawaban: B</strong>"
  },
  {
    "id": 21,
    "elemen": "Kelistrikan",
    "subelemen": "Rangkaian Arus Searah",
    "indikator": "Memodifikasi rangkaian listrik sederhana sehingga memenuhi kondisi tertentu berdasarkan hukum kelistrikan.",
    "kode": "25FISLISRASF15SA-000000-0361",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_22.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nPerhatikan dua rangkaian listrik:\n</p>\n<div class=\"p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1 mb-3\">\n  <div><strong>Rangkaian A:</strong> Sumber tegangan 12 V dihubungkan dengan dua resistor \\(6\\ \\Omega\\) dan \\(6\\ \\Omega\\) secara seri.</div>\n  <div><strong>Rangkaian B:</strong> Sumber tegangan 6 V dihubungkan dengan dua resistor \\(3\\ \\Omega\\) dan \\(3\\ \\Omega\\) secara paralel.</div>\n</div>\n<p class=\"font-semibold text-slate-900 mb-2\">\nAgar besar arus listrik pada kedua rangkaian tersebut nilainya sama, bagaimana cara modifikasi rangkaian yang tepat?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Ubah sumber tegangan rangkaian A menjadi 6 V."
      },
      {
        "id": "B",
        "text": "Tambah satu resistor 6 Ω secara paralel pada Rangkaian A."
      },
      {
        "id": "C",
        "text": "Ubah susunan resistor Rangkaian B menjadi seri."
      },
      {
        "id": "D",
        "text": "Ganti tegangan sumber Rangkaian B menjadi 12 V."
      },
      {
        "id": "E",
        "text": "Tambah satu resistor 3 Ω secara seri pada Rangkaian B."
      }
    ],
    "kunci": "C",
    "pembahasan": "<strong>Analisis Rangkaian Arus Searah:</strong><br>\n1. <em>Kondisi saat ini:</em><br>\n   - Rangkaian A: \\(R_A = 6 + 6 = 12\\ \\Omega\\) &rarr; \\(I_A = \\frac{V_A}{R_A} = \\frac{12\\text{ V}}{12\\ \\Omega} = 1\\text{ A}\\).<br>\n   - Rangkaian B: \\(R_B = \\frac{3 \\times 3}{3 + 3} = 1{,}5\\ \\Omega\\) &rarr; \\(I_B = \\frac{V_B}{R_B} = \\frac{6\\text{ V}}{1{,}5\\ \\Omega} = 4\\text{ A}\\).<br><br>\n2. <em>Uji Opsi C (Ubah susunan resistor Rangkaian B menjadi seri):</em><br>\n   Jika kedua resistor \\(3\\ \\Omega\\) di Rangkaian B disusun seri:\n   \\[R_B' = 3 + 3 = 6\\ \\Omega\\]\n   Kuat arus baru Rangkaian B:\n   \\[I_B' = \\frac{6\\text{ V}}{6\\ \\Omega} = 1\\text{ A}\\]\n   Karena \\(I_A = 1\\text{ A}\\) dan \\(I_B' = 1\\text{ A}\\), maka kuat arus kedua rangkaian menjadi tepat sama!<br>\n<strong>Kunci Jawaban: C</strong>"
  },
  {
    "id": 22,
    "elemen": "Kelistrikan",
    "subelemen": "Rangkaian Arus Searah",
    "indikator": "Menganalisis keputusan berdasarkan permasalahan kontekstual sehari-hari menggunakan konsep energi dan daya listrik.",
    "kode": "25FISLISRASF15SA-000000-0362",
    "tipe": "pg",
    "img": "/tka/img/fisika/soal_23.png",
    "soalHtml": "<p class=\"font-medium text-slate-800 leading-relaxed mb-3\">\nDiberikan data spesifikasi dan durasi penggunaan peralatan elektronik dari sebuah keluarga sebagai berikut: AC (1.000 W, 8 jam/hari, 30 hari), Kulkas (150 W, 24 jam/hari, 30 hari), Mesin Cuci (350 W, 1 jam/hari, 8 hari), Setrika (300 W, 1 jam/hari, 12 hari), dan Televisi (100 W, 5 jam/hari, 30 hari).\nJika tarif listrik yang berlaku adalah Rp1.500,00 per kWh, dan keluarga tersebut ingin agar total biaya listrik tetap di bawah Rp375.000,00 per bulan, keputusan terbaik apa yang dapat diambil untuk mencapai tujuan tersebut?\n</p>",
    "options": [
      {
        "id": "A",
        "text": "Mengurangi penggunaan AC menjadi 4 jam per hari."
      },
      {
        "id": "B",
        "text": "Mengurangi durasi menonton televisi 1 jam per hari dan mengurangi penggunaan mesin cuci 1 hari per bulan."
      },
      {
        "id": "C",
        "text": "Mengurangi durasi menonton TV menjadi 2 jam per hari."
      },
      {
        "id": "D",
        "text": "Tidak menggunakan mesin cuci sama sekali."
      },
      {
        "id": "E",
        "text": "Mengurangi frekuensi menyetrika menjadi 4 hari per bulan."
      }
    ],
    "kunci": "A",
    "pembahasan": "<strong>Perhitungan Konsumsi Energi Listrik Bulanan:</strong><br>\n1. <em>Konsumsi energi saat ini (kWh):</em><br>\n   - AC: \\(1\\text{ kW} \\times 8\\text{ jam} \\times 30\\text{ hari} = 240\\text{ kWh}\\)<br>\n   - Kulkas: \\(0{,}15\\text{ kW} \\times 24\\text{ jam} \\times 30\\text{ hari} = 108\\text{ kWh}\\)<br>\n   - Mesin Cuci: \\(0{,}35\\text{ kW} \\times 1\\text{ jam} \\times 8\\text{ hari} = 2{,}8\\text{ kWh}\\)<br>\n   - Setrika: \\(0{,}3\\text{ kW} \\times 1\\text{ jam} \\times 12\\text{ hari} = 3{,}6\\text{ kWh}\\)<br>\n   - TV: \\(0{,}1\\text{ kW} \\times 5\\text{ jam} \\times 30\\text{ hari} = 15\\text{ kWh}\\)<br>\n   <strong>Total energi = 369,4 kWh</strong> &rarr; Biaya total = \\(369{,}4 \\times 1500 = \\text{Rp}554.100,00\\).<br><br>\n2. <em>Target Biaya Maksimal &lt; Rp375.000,00:</em><br>\n   Energi maksimum yang diizinkan = \\(\\frac{375.000}{1500} = 250\\text{ kWh}\\).<br>\n   Energi yang harus dipangkas = \\(369{,}4 - 250 = 119{,}4\\text{ kWh}\\).<br><br>\n3. <em>Efek Memangkas Pemakaian AC Menjadi 4 Jam/Hari:</em><br>\n   Pengurangan energi AC = \\(1\\text{ kW} \\times (8 - 4)\\text{ jam} \\times 30\\text{ hari} = 120\\text{ kWh}\\).<br>\n   Total energi baru = \\(369{,}4 - 120 = 249{,}4\\text{ kWh}\\).<br>\n   Biaya baru = \\(249{,}4 \\times 1500 = \\text{Rp}374.100,00 < \\text{Rp}375.000,00\\) (Target tercapai!).<br>\n<strong>Kunci Jawaban: A</strong>"
  }
];

// Inisialisasi Kumpulan Paket Fisika
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tkaFisikaPaket1Data };
}

if (typeof window !== 'undefined') {
  window.tkaFisikaPaket1Data = tkaFisikaPaket1Data;
  window.tkaFisikaPackages = window.tkaFisikaPackages || {};
  window.tkaFisikaPackages['paket1'] = {
    id: "paket1",
    title: "Paket 1: Soal Resmi TKA Fisika 2025 (22 Soal)",
    shortTitle: "Paket 1 (Resmi 2025 • 22 Soal)",
    badge: "Resmi 2025",
    total: 22,
    data: tkaFisikaPaket1Data
  };
}
