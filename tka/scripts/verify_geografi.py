# -*- coding: utf-8 -*-
import os
import json

path = 'tka/data/mapel-geografi.js'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const tkaGeografiPaket1Data = '
suffix = '// Registrasi global bundle'
s = text.find(prefix) + len(prefix)
e = text.find(suffix)
json_str = text[s:e].strip().rstrip(';')

data = json.loads(json_str)
print(f'Total questions loaded: {len(data)}')

missing_images = []
for q in data:
    img_rel = q['img'].lstrip('/')
    if not os.path.exists(img_rel):
        missing_images.append((q['id'], img_rel))

if missing_images:
    print('WARNING: Missing images:', missing_images)
else:
    print('SUCCESS: All 30 question images exist on disk!')

type_counts = {}
for q in data:
    t = q['tipe']
    type_counts[t] = type_counts.get(t, 0) + 1
print('Question type distribution:', type_counts)

# Check tka-registry.js
with open('tka/js/tka-registry.js', 'r', encoding='utf-8') as f:
    reg_text = f.read()
assert 'id: "geografi"' in reg_text, 'geografi not found in tka-registry.js'
assert 'status: "tersedia"' in reg_text, 'geografi status is not tersedia'
print('SUCCESS: tka-registry.js verified: Geografi is registered as tersedia!')

# Check simulasi.html & pembahasan.html
with open('tka/simulasi.html', 'r', encoding='utf-8') as f:
    sim_text = f.read()
assert 'mapel-geografi.js' in sim_text, 'mapel-geografi.js not linked in simulasi.html'
assert 'tkaGeografiPackages' in sim_text, 'tkaGeografiPackages not in simulasi.html'
print('SUCCESS: simulasi.html verified!')

with open('tka/pembahasan.html', 'r', encoding='utf-8') as f:
    pem_text = f.read()
assert 'mapel-geografi.js' in pem_text, 'mapel-geografi.js not linked in pembahasan.html'
assert 'tkaGeografiPackages' in pem_text, 'tkaGeografiPackages not in pembahasan.html'
print('SUCCESS: pembahasan.html verified!')
