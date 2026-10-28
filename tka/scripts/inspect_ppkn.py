import os
import pypdf

pdf_path = "referensi/TKA/extracted/TKA 2025/SOAL TKA PPKn SMA 2025 Pilihan.pdf"
reader = pypdf.PdfReader(pdf_path)
print(f"Total halaman PDF PPKn: {len(reader.pages)}")

# Periksa text di setiap halaman
for i in range(min(5, len(reader.pages))):
    text = reader.pages[i].extract_text()
    first_lines = text.split("\n")[:3]
    print(f"Halaman {i+1}: {first_lines}")
