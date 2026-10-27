# -*- coding: utf-8 -*-
with open('tka/js/tka-registry.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'id: "geografi",'
idx = text.find(target)
if idx != -1:
    end_idx = text.find('},', idx) + 2
    block = text[idx:end_idx]
    new_block = '''id: "geografi",
      rumpun: "soshum",
      kategori: "Pilihan",
      nama: "Geografi",
      subjudul: "Geografi SMA / MA",
      icon: "🗺️",
      color: "teal",
      bgGradient: "from-teal-500 to-cyan-700",
      totalSoal: 30,
      paketTersedia: 1,
      durasiMenit: 50,
      status: "tersedia",
      deskripsi: "Litosfer, pedosfer, hidrosfer, dinamika kependudukan, penginderaan jauh, SIG, dan tata ruang kewilayahan.",
      pdfSource: "SOAL TKA Geografi SMA 2025 Pilihan.pdf",
      urlSimulasi: "/tka/simulasi.html?mapel=geografi",
      urlPembahasan: "/tka/pembahasan.html?mapel=geografi"
    },'''
    text = text[:idx] + new_block + text[end_idx:]
    with open('tka/js/tka-registry.js', 'w', encoding='utf-8', newline='') as f:
        f.write(text)
    print("Updated tka-registry.js!")
else:
    print("geografi not found")
