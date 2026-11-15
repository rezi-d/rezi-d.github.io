#!/usr/bin/env python3
"""
scripts/generate_olimpiade_audio.py
Generate Indonesian Audio Narration for Bab 9: Pengayaan Olimpiade Matematika (OSN)
Using Microsoft Edge Neural Voice (id-ID-ArdiNeural).
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
    {
        "filename": "audio-aljabar-olimpiade.mp3",
        "text": (
            "Halo pejuang olimpiade matematika AjarKita! Di sesi aljabar olimpiade kali ini, "
            "kita mempelajari senjata pamungkas yang paling sering keluar di OSN, yaitu ketaksamaan AM-GM dan Cauchy-Schwarz. "
            "Seringkali, saat melihat bentuk pecahan variabel yang rumit, intuisi awal siswa adalah menyamakan penyebut atau mengalikan silang. "
            "Namun di tingkat olimpiade, kunci rahasianya adalah mengenali bentuk perkalian yang konstan, sehingga saat dijumlahkan dengan AM-GM, "
            "variabelnya saling meniadakan. Perhatikan juga syarat kesamaan, yaitu kapan nilai minimum itu benar-benar tercapai. "
            "Selamat belajar dan mari asah intuisi aljabar Anda!"
        )
    },
    {
        "filename": "audio-teori-bilangan-olimpiade.mp3",
        "text": (
            "Selamat datang di modul teori bilangan olimpiade matematika! Teori bilangan adalah seni memahami pola keterbagian dan bilangan bulat. "
            "Salah satu trik terpenting dalam seleksi OSN-K adalah menggunakan aritmetika modulo. "
            "Daripada menghitung angka berpangkat ribuan secara langsung, kita cukup mencari pola sisa pembagiannya yang selalu berulang secara siklis. "
            "Pahami juga Teorema Kecil Fermat dan Teorema Euler untuk menyederhanakan pangkat raksasa dalam hitungan detik. "
            "Simak pembahasannya langkah demi langkah di modul ini!"
        )
    },
    {
        "filename": "audio-geometri-olimpiade.mp3",
        "text": (
            "Halo semuanya! Dalam geometri olimpiade, tantangan terbesarnya adalah kita sering kali harus menambahkan garis bantu yang tidak ada pada gambar soal. "
            "Di modul ini, Anda akan mempelajari Dalil Ceva untuk membuktikan tiga garis bertemu di satu titik, Dalil Menelaus untuk membuktikan tiga titik terletak pada satu garis lurus, "
            "serta keajaiban Teorema Ptolemy pada segiempat tali busur. Ingat, gambar sketsa yang proporsional dan akurat adalah setengah dari solusi geometri. "
            "Mari kita bedah bersama!"
        )
    },
    {
        "filename": "audio-kombinatorika-olimpiade.mp3",
        "text": (
            "Salam juara olimpiade! Kombinatorika bukan sekadar rumus permutasi dan kombinasi biasa. "
            "Di tingkat OSN, Anda akan menjumpai Prinsip Sarang Merpati atau Pigeonhole Principle. "
            "Intinya sederhana: jika ada n tambah satu merpati dimasukkan ke dalam n sarang, pasti ada minimal satu sarang yang memuat lebih dari satu merpati. "
            "Namun, keahlian sejati seorang peserta olimpiade adalah bagaimana mendefinisikan siapa merpatinya dan apa sarangnya dari sebuah narasi soal yang abstrak. "
            "Pelajari juga metode sekat Stars and Bars di modul ini untuk membagi objek identik!"
        )
    },
    {
        "filename": "audio-bedah-soal-osnk.mp3",
        "text": (
            "Halo rekan-rekan pembelajar! Pada bab kelima ini, kita masuk ke sesi simulasi bedah soal asli OSN-K Matematika SMA. "
            "Dalam ujian OSN tingkat kabupaten atau kota, seluruh jawaban akhir berupa bilangan bulat antara 0 sampai 999 tanpa pengurangan nilai jika salah. "
            "Strategi terpenting adalah alokasi waktu: kerjakan soal-soal aljabar dan teori bilangan terlebih dahulu yang memiliki alur komputasi jelas, "
            "lalu uji kasus-kasus kecil untuk menemukan konjektur sebelum membuktikannya secara umum. "
            "Selamat mencoba simulasi kuis interaktif di slide kelima!"
        )
    },
    {
        "filename": "audio-simulasi-osnp.mp3",
        "text": (
            "Selamat! Anda telah tiba di tingkat provinsi atau OSN-P. Berbeda dengan tingkat kabupaten yang hanya menilai jawaban akhir, "
            "di OSN-P setiap baris penalaran Anda dinilai secara ketat oleh juri nasional. "
            "Jawaban yang benar sekalipun bisa mendapatkan nilai nol jika argumennya cacat logika atau hanya mengandalkan contoh tanpa bukti umum. "
            "Di sesi ini, kita melatih metode pembuktian kontradiksi, prinsip nilai ekstremal, serta teknik penyusunan esai matematika yang elegan, runtut, dan tidak terbantahkan. "
            "Tetap semangat dan raih medali impian Anda!"
        )
    }
]

async def generate_all():
    print(f"Generating {len(AUDIOS)} audio files with voice {VOICE}...")
    for item in AUDIOS:
        out_path = os.path.join(OUTPUT_DIR, item["filename"])
        print(f"Synthesizing: {item['filename']} ...")
        comm = edge_tts.Communicate(item["text"], VOICE, rate="-2%")
        await comm.save(out_path)
        print(f"✅ Generated: {out_path} ({os.path.getsize(out_path)} bytes)")

if __name__ == "__main__":
    asyncio.run(generate_all())
