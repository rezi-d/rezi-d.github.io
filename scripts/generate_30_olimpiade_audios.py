#!/usr/bin/env python3
"""
scripts/generate_30_olimpiade_audios.py
Generate 30 Indonesian Audio Narrations for Bab 9: Pengayaan Olimpiade Matematika (OSN-K & OSN-P)
5 audio tracks per sub-bab (1 per slide/poin) using Microsoft Edge Neural Voice (id-ID-ArdiNeural).
"""

import asyncio
import os
import sys

try:
    import edge_tts
except ImportError:
    print("Error: edge-tts not installed.")
    sys.exit(1)

OUTPUT_DIR = "storage/audio/matematika/kelas-10/olimpiade"
os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE = "id-ID-ArdiNeural"

AUDIOS = [
    # Sub-bab 1: Aljabar Olimpiade
    {
        "filename": "aljabar-poin-1-amgm.mp3",
        "text": (
            "Di poin pertama ini, kita mempelajari Ketaksamaan Rataan Aritmetika dan Geometri atau AM-GM. "
            "Teorema ini menyatakan bahwa jumlahan bilangan non-negatif dibagi n selalu lebih besar atau sama dengan akar pangkat n dari perkaliannya. "
            "Kunci penting dalam olimpiade adalah kapan kesamaan itu tercapai, yaitu saat semua variabel bernilai sama. "
            "Jika Anda ingin mencari nilai minimum dari bentuk pecahan aljabar, pecahlah suku variabelnya agar saat dikalikan, variabel di pembilang dan penyebut saling menghilangkan secara sempurna."
        )
    },
    {
        "filename": "aljabar-poin-2-cauchy-schwarz.mp3",
        "text": (
            "Pada poin kedua, kita berkenalan dengan Ketaksamaan Cauchy-Schwarz dan bentuk turunannya, Titu's Lemma atau Engel form. "
            "Titu's Lemma adalah senjata rahasia olimpiade untuk menyelesaikan pecahan aljabar berpenyebut linier tanpa perlu menyamakan penyebut. "
            "Cukup kuadratkan pembilang, lalu jumlahkan pembilang dan jumlahkan penyebut. "
            "Syarat kesamaannya adalah rasio antar-suku harus konstan dan sebanding."
        )
    },
    {
        "filename": "aljabar-poin-3-vieta-polinomial.mp3",
        "text": (
            "Di poin ketiga, kita membedah Teorema Vieta untuk polinomial tingkat tinggi, khususnya derajat tiga dan empat. "
            "Ingat, dalam soal olimpiade, Anda jarang sekali diminta mencari akar-akarnya satu per satu. "
            "Soal justru menguji kejelian Anda mencari jumlahan simetris akar, seperti jumlahan kuadrat atau jumlahan kubik. "
            "Manfaatkan hubungan rekursif Newton's Sums untuk menghitung pangkat tinggi akar dengan sangat cepat."
        )
    },
    {
        "filename": "aljabar-poin-4-identitas-euler.mp3",
        "text": (
            "Poin keempat membahas faktorisasi simetris non-rutin. "
            "Salah satu yang paling legendaris adalah Identitas Euler kubik: a pangkat tiga tambah b pangkat tiga tambah c pangkat tiga dikurang 3 a b c. "
            "Perhatikan konsekuensi emasnya: jika a tambah b tambah c sama dengan nol, maka jumlahan pangkat tiga tersebut langsung sama dengan 3 a b c. "
            "Pelajari juga Identitas Sophie Germain untuk memfaktorkan bentuk a pangkat empat tambah 4 b pangkat empat."
        )
    },
    {
        "filename": "aljabar-poin-5-kuis-evaluasi.mp3",
        "text": (
            "Selamat tiba di kuis evaluasi aljabar! Ada empat soal pilihan ganda standar OSN-K di sini. "
            "Strategi pengerjaannya: pada soal AM-GM, pastikan syarat kesamaan memenuhi domain soal. "
            "Pada soal pecahan kuadrat, coba aplikasikan Titu's Lemma. "
            "Dan pada soal Vieta, susun bentuk simetris dasar sebelum menghitung. "
            "Kerjakan secara mandiri lalu klik tombol periksa jawaban untuk melihat analisis rigor."
        )
    },

    # Sub-bab 2: Teori Bilangan Olimpiade
    {
        "filename": "teori-bilangan-poin-1-keterbagian-euclid.mp3",
        "text": (
            "Poin pertama membahas relasi keterbagian dan Algoritma Pembagian Euclid. "
            "Jika a membagi b dan a membagi c, maka a pasti membagi setiap kombinasi linier bx tambah cy. "
            "Untuk mencari FPB dari dua bilangan berukuran ribuan, jangan gunakan faktorisasi pohon faktor biasa. "
            "Gunakan algoritma Euclid berulang dengan membagi sisa pembagiannya hingga sisanya bernilai nol. "
            "Sisa terakhir bukan nol adalah FPB yang dicari."
        )
    },
    {
        "filename": "teori-bilangan-poin-2-modulo-siklis.mp3",
        "text": (
            "Di poin kedua, kita menguasai aritmetika kongruensi modulo. "
            "Dua bilangan dikatakan kongruen modulo m jika selisihnya habis dibagi m. "
            "Untuk mencari digit terakhir suatu bilangan raksasa, kita gunakan modulo 10. "
            "Amati bahwa pola sisa pembagian pemangkatan selalu berulang secara periodik atau siklis. "
            "Cukup cari panjang periodenya, lalu sederhanakan eksponennya dengan sisa pembagian periode tersebut."
        )
    },
    {
        "filename": "teori-bilangan-poin-3-fermat-euler.mp3",
        "text": (
            "Poin ketiga membahas Teorema Kecil Fermat dan Teorema Euler. "
            "Teorema Fermat menyatakan bahwa untuk sembarang bilangan prima p yang relatif prima dengan a, maka a pangkat p minus satu selalu kongruen dengan 1 modulo p. "
            "Teorema ini diperluas oleh Euler untuk sembarang modulus menggunakan fungsi totient phi m. "
            "Dengan teorema ini, pangkat ribuan dapat dipangkas dalam sekejap."
        )
    },
    {
        "filename": "teori-bilangan-poin-4-diophantine-linier.mp3",
        "text": (
            "Pada poin keempat, kita menyelesaikan Persamaan Diophantine Linier ax tambah by sama dengan c, di mana solusinya hanya berupa bilangan bulat. "
            "Syarat utama memiliki solusi bulat adalah FPB dari a dan b harus membagi c. "
            "Jika syarat ini terpenuhi, cari satu solusi khusus dengan bantuan modulo, lalu bentuk solusi umumnya menggunakan parameter bilangan bulat k."
        )
    },
    {
        "filename": "teori-bilangan-poin-5-kuis-evaluasi.mp3",
        "text": (
            "Mari kita uji kemampuan teori bilangan Anda di kuis poin kelima! "
            "Anda akan berhadapan dengan soal digit terakhir, penyederhanaan pangkat Teorema Fermat, solusi positif Diophantine, dan Algoritma Euclid. "
            "Ingat, ketelitian dalam aritmetika modulo adalah kunci menghindari jebakan. "
            "Selamat mencoba dan periksa pembahasannya!"
        )
    },

    # Sub-bab 3: Geometri & Trigonometri Olimpiade
    {
        "filename": "geometri-poin-1-titik-istimewa-euler.mp3",
        "text": (
            "Di poin pertama geometri, kita mendalami empat titik pusat istimewa segitiga: titik berat centroid G, pusat lingkaran dalam incenter I, pusat lingkaran luar circumcenter O, dan titik tinggi orthocenter H. "
            "Ingat sifat penting Garis Euler: pada segitiga sembarang non-sama sisi, titik O, G, dan H selalu berada pada satu garis lurus dengan perbandingan jarak HG sama dengan dua kali GO."
        )
    },
    {
        "filename": "geometri-poin-2-dalil-ceva-menelaus.mp3",
        "text": (
            "Poin kedua menyajikan dua dalil klasik paling penting: Dalil Ceva dan Dalil Menelaus. "
            "Dalil Ceva digunakan untuk membuktikan bahwa tiga garis dari sudut segitiga bertemu di satu titik atau konkuren, sedangkan Dalil Menelaus digunakan untuk membuktikan bahwa tiga titik terletak pada satu garis lurus atau kolinier. "
            "Keduanya memanfaatkan perkalian rasio segmen sisi yang bernilai satu."
        )
    },
    {
        "filename": "geometri-poin-3-heron-inradius.mp3",
        "text": (
            "Pada poin ketiga, kita mengulas formula luas segitiga tingkat lanjut. "
            "Rumus Heron memungkinkan kita menghitung luas hanya dari panjang ketiga sisinya menggunakan semiperimeter s. "
            "Dari luas ini, kita dapat langsung menghitung jari-jari lingkaran dalam r sama dengan L dibagi s, serta jari-jari lingkaran luar R sama dengan a kali b kali c dibagi 4L. "
            "Hubungan ini sangat sering keluar dalam seleksi OSN."
        )
    },
    {
        "filename": "geometri-poin-4-segiempat-siklik-ptolemy.mp3",
        "text": (
            "Poin keempat membahas segiempat tali busur atau cyclic quadrilateral. "
            "Selain sifat sudut berhadapan yang berjumlah 180 derajat, ada Teorema Ptolemy yang menghubungkan panjang sisi dengan kedua diagonalnya: perkalian kedua diagonal sama dengan jumlah perkalian pasangan sisi yang berhadapan. "
            "Dalil ini mempermudah perhitungan jarak antar titik pada lingkaran."
        )
    },
    {
        "filename": "geometri-poin-5-kuis-evaluasi.mp3",
        "text": (
            "Saatnya menguji keterampilan visual dan logika geometri Anda di kuis poin kelima! "
            "Mulai dari perhitungan rumus Heron, jari-jari lingkaran dalam, rasio segmen Ceva, hingga Teorema Ptolemy. "
            "Gambarlah sketsa kasar yang proporsional untuk memandu jalan berpikir Anda sebelum memilih jawaban."
        )
    },

    # Sub-bab 4: Kombinatorika & Peluang Olimpiade
    {
        "filename": "kombinatorika-poin-1-pigeonhole-php.mp3",
        "text": (
            "Poin pertama membahas Prinsip Sarang Merpati atau Pigeonhole Principle. "
            "Prinsip ini menyatakan bahwa jika n tambah satu objek dimasukkan ke dalam n kotak, pasti ada minimal satu kotak yang memuat lebih dari satu objek. "
            "Kunci sukses menyelesaikan soal PHP di olimpiade adalah bagaimana Anda mendefinisikan siapa objek merpatinya dan apa kriteria sarangnya dari cerita soal yang diberikan."
        )
    },
    {
        "filename": "kombinatorika-poin-2-stars-and-bars.mp3",
        "text": (
            "Di poin kedua, kita mempelajari metode sekat Stars and Bars untuk membagikan n objek identik ke dalam k kelompok yang berbeda. "
            "Bedakan dengan cermat dua kasusnya: jika setiap kelompok boleh menerima nol atau bilangan bulat non-negatif, rumusnya adalah kombinasi n tambah k minus satu terhadap k minus satu. "
            "Namun jika setiap kelompok wajib menerima minimal satu, rumusnya adalah kombinasi n minus satu terhadap k minus satu."
        )
    },
    {
        "filename": "kombinatorika-poin-3-pie-derangements.mp3",
        "text": (
            "Pada poin ketiga, kita mempelajari Prinsip Inklusi-Eksklusi dan subfaktorial atau derangements. "
            "Derangement adalah banyaknya permutasi di mana tidak ada satupun elemen yang menempati posisi aslinya, seperti menukar kado silang secara acak. "
            "Pelajari pola bilangannya: D1 nol, D2 satu, D3 dua, D4 sembilan, dan D5 empat puluh empat, serta rumus rekursinya."
        )
    },
    {
        "filename": "kombinatorika-poin-4-lintasan-kisi.mp3",
        "text": (
            "Poin keempat menganalisis lintasan kisi terpendek atau grid walks. "
            "Perjalanan dari titik 0 koma 0 ke titik m koma n pada kisi koordinat dapat dimodelkan sebagai permutasi dengan elemen berulang, yaitu memilih m langkah ke kanan dari total m tambah n langkah. "
            "Konsep ini adalah dasar dari perjalanan acak dan bilangan Catalan dalam kombinatorika tingkat tinggi."
        )
    },
    {
        "filename": "kombinatorika-poin-5-kuis-evaluasi.mp3",
        "text": (
            "Mari kita asah logika pencacahan Anda di kuis poin kelima! "
            "Kuis ini mencakup sarang merpati umum, sekat Stars and Bars, derangement empat orang, dan lintasan kisi 4 kali 4. "
            "Pahami model matematikanya sebelum menghitung. Selamat mengerjakan!"
        )
    },

    # Sub-bab 5: Bedah Soal Asli OSN-K
    {
        "filename": "bedah-osnk-poin-1-aljabar-akar.mp3",
        "text": (
            "Di poin pertama bedah soal OSN-K, kita membongkar soal aljabar akar bertingkat. "
            "Seringkali bentuk di dalam akar merupakan kuadrat sempurna yang tersembunyi. "
            "Dengan substitusi variabel baru, akar kuadrat akan berubah menjadi nilai mutlak. "
            "Ingat bahwa akar dari u kuadrat adalah harga mutlak u, bukan u biasa. "
            "Dari harga mutlak ini, kita bisa menemukan interval penyelesaiannya secara elegan."
        )
    },
    {
        "filename": "bedah-osnk-poin-2-bilangan-selisih-kuadrat.mp3",
        "text": (
            "Poin kedua membedah soal asli teori bilangan mengenai kuadrat sempurna. "
            "Saat melihat bentuk n kuadrat ditambah konstanta sama dengan m kuadrat, pindahkan n kuadrat ke ruas kanan sehingga membentuk selisih dua kuadrat m kuadrat minus n kuadrat. "
            "Perhatikan sifat paritas bahwa m tambah n dan m minus n harus sama-sama genap agar menghasilkan nilai n bulat."
        )
    },
    {
        "filename": "bedah-osnk-poin-3-geometri-incenter.mp3",
        "text": (
            "Di poin ketiga, kita membedah soal geometri segitiga siku-siku dan lingkaran dalam. "
            "Salah satu trik tercepat menyelesaikan soal geometri pada segitiga siku-siku adalah menempatkan titik sudutnya pada bidang koordinat kartesius. "
            "Dari titik pusat incenter, kita bisa mencari koordinat titik singgung dan menghitung jaraknya menggunakan teorema jarak atau koordinat."
        )
    },
    {
        "filename": "bedah-osnk-poin-4-kombinatorika-digit-naik.mp3",
        "text": (
            "Poin keempat membedah soal kombinatorika pembentukan bilangan dengan digit naik tegas. "
            "Jangan terjebak mencacah kemungkinan angka satu per satu. "
            "Ingat prinsip bijeksi: setiap kali kita memilih empat angka berbeda dari sembilan angka yang tersedia, hanya ada tepat satu cara untuk mengurutkannya dari kecil ke besar. "
            "Jadi jawabannya cukup kombinasi 9 diambil 4."
        )
    },
    {
        "filename": "bedah-osnk-poin-5-simulasi-isian-singkat.mp3",
        "text": (
            "Di poin kelima, Anda diuji dengan simulasi empat soal asli OSN-K. "
            "Pada ujian resmi, seluruh jawaban akhir berupa bilangan bulat antara 0 hingga 999 tanpa pengurangan nilai jika salah. "
            "Manfaatkan intuisi, uji kasus-kasus batas, dan kerjakan dengan cermat. "
            "Selamat mencoba simulasi kuis ini!"
        )
    },

    # Sub-bab 6: Simulasi & Pembuktian OSN-P
    {
        "filename": "simulasi-osnp-poin-1-kontradiksi-invarian.mp3",
        "text": (
            "Poin pertama memasuki teknik pembuktian esai OSN-P: bukti kontradiksi dan prinsip invarian. "
            "Untuk membuktikan suatu pernyataan benar, asumsikan kebalikannya benar, lalu turunkan fakta secara logis hingga muncul kemustahilan matematis. "
            "Sedangkan invarian adalah besaran atau sifat yang nilainya tetap tidak berubah di bawah setiap langkah proses."
        )
    },
    {
        "filename": "simulasi-osnp-poin-2-prinsip-ekstremal.mp3",
        "text": (
            "Di poin kedua, kita menguasai Prinsip Ekstremal. "
            "Trik ini mengajarkan kita untuk memilih elemen yang paling ekstrem, misalnya bilangan bulat positif terkecil, garis terpendek, atau sudut terbesar. "
            "Pada elemen batas inilah ketaksamaan menjadi sangat ketat dan sering kali langsung mematahkan asumsi yang salah."
        )
    },
    {
        "filename": "simulasi-osnp-poin-3-pewarnaan-papan.mp3",
        "text": (
            "Poin ketiga membahas argumen pewarnaan kombinatorial, seperti kasus papan catur terpotong. "
            "Dengan mewarnai petak secara berselang-seling hitam dan putih, kita dapat membuktikan bahwa menutup 62 petak papan yang dua sudutnya sewarna dengan 31 domino adalah hal yang mustahil, karena setiap domino selalu membutuhkan satu petak hitam dan satu petak putih."
        )
    },
    {
        "filename": "simulasi-osnp-poin-4-rubrik-esai-juri.mp3",
        "text": (
            "Pada poin keempat, kita mempelajari standar rubrik penilaian juri nasional skala nol sampai tujuh. "
            "Nilai tujuh hanya diberikan jika bukti Anda lengkap dan bebas celah logika. "
            "Jawaban yang hanya menebak angka atau hanya memberi contoh angka khusus akan mendapatkan nilai nol. "
            "Biasakan menulis definisi notasi, klaim pembuktian, dan kesimpulan secara runtut dan formal."
        )
    },
    {
        "filename": "simulasi-osnp-poin-5-pembahasan-esai.mp3",
        "text": (
            "Poin kelima adalah simulasi esai analitis tingkat provinsi. "
            "Anda dihadapkan pada soal invarian pewarnaan, sifat bilangan prima modulo 24, turnamen graf catur round-robin, dan deret teleskopik akar. "
            "Pikirkan argumen umum di balik setiap pilihan jawaban. "
            "Selamat membuktikan dan raih medali olimpiade Anda!"
        )
    }
]

async def generate_single(item):
    out_path = os.path.join(OUTPUT_DIR, item["filename"])
    if os.path.exists(out_path) and os.path.getsize(out_path) > 10000:
        print(f"Skipping existing: {item['filename']}")
        return
    print(f"Synthesizing: {item['filename']} ...")
    comm = edge_tts.Communicate(item["text"], VOICE, rate="-2%")
    await comm.save(out_path)
    print(f"✅ Generated: {item['filename']} ({os.path.getsize(out_path)} bytes)")

async def main():
    print(f"Generating {len(AUDIOS)} audio files with voice {VOICE}...")
    # Generate concurrently in batches of 5 to avoid throttling
    chunk_size = 5
    for i in range(0, len(AUDIOS), chunk_size):
        chunk = AUDIOS[i:i+chunk_size]
        await asyncio.gather(*(generate_single(item) for item in chunk))
        print(f"--- Completed batch {i//chunk_size + 1} of {(len(AUDIOS)+chunk_size-1)//chunk_size} ---")
    print("🎉 All 30 audio files generated successfully!")

if __name__ == "__main__":
    asyncio.run(main())
