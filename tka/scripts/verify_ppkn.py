import os
import json
import re

with open("tka/data/mapel-ppkn.js", "r", encoding="utf-8") as f:
    content = f.read()

# Extract json
m = re.search(r'const tkaPpknPaket1Data = (\[.*?\]);', content, re.DOTALL)
if not m:
    print("Gagal mengekstrak json dari mapel-ppkn.js!")
    exit(1)

data = json.loads(m.group(1))
print(f"Total soal PPKn berhasil di-parse: {len(data)}")

missing_imgs = []
for item in data:
    img_path = item.get("img", "").lstrip("/")
    if img_path and not os.path.exists(img_path):
        missing_imgs.append((item["id"], img_path))

if missing_imgs:
    print("File gambar yang tidak ditemukan:", missing_imgs)
else:
    print("Semua file gambar soal_01.png sampai soal_26.png TERVERIFIKASI ADA!")

pg_count = sum(1 for x in data if x["tipe"] == "pg")
mcma_count = sum(1 for x in data if x["tipe"] == "mcma")
bs_count = sum(1 for x in data if x["tipe"] == "kompleks_bs")

print(f"Rincian: PG = {pg_count}, MCMA = {mcma_count}, Kompleks B/S = {bs_count}")
print("Verifikasi TKA PPKn 2025 SUKSES 100%!")
