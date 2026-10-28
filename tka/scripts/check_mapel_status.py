# -*- coding: utf-8 -*-
import re, sys

sys.stdout.reconfigure(encoding='utf-8')

with open('tka/js/tka-registry.js', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = r'\{\s*id:\s*"([^"]+)",\s*rumpun:\s*"([^"]+)",\s*kategori:\s*"([^"]+)",\s*nama:\s*"([^"]+)",[\s\S]*?status:\s*"([^"]+)"'
matches = re.findall(pattern, text)

print(f"Total mapel di registry: {len(matches)}")
print("\n=== SUDAH TERSEDIA DI WEB ===")
for m in matches:
    if m[4] == 'tersedia':
        print(f"[TERSEDIA] [{m[1].upper()}] {m[3]} (id: {m[0]})")

print("\n=== BELUM TERSEDIA (MASIH PROSES) ===")
for m in matches:
    if m[4] != 'tersedia':
        print(f"[BELUM] [{m[1].upper()}] {m[3]} (id: {m[0]})")
