import os
import re
import json
import struct
import pypdf

pdf_path = r"referensi/TKA/extracted/TKA 2025/SOAL TKA Bahasa Indonesia SMA 2025 Wajib.pdf"
scratch_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\f6918bac-1bf8-4cf3-ab48-13c70540eace\scratch\indo_wajib_ordered"
os.makedirs(scratch_dir, exist_ok=True)

reader = pypdf.PdfReader(pdf_path)
page_manifest = {}

def create_bmp(width, height, rgb_data):
    row_bytes = width * 3
    padding = (4 - (row_bytes % 4)) % 4
    image_size = (row_bytes + padding) * height
    file_size = 54 + image_size
    
    header = struct.pack('<2sIHHI', b'BM', file_size, 0, 0, 54)
    dib = struct.pack('<IIIHHIIIIII', 40, width, height, 1, 24, 0, image_size, 2835, 2835, 0, 0)
    
    rows = []
    for y in range(height - 1, -1, -1):
        row = bytearray()
        offset = y * width * 3
        for x in range(width):
            px_off = offset + x * 3
            if px_off + 2 < len(rgb_data):
                r = rgb_data[px_off]
                g = rgb_data[px_off + 1]
                b = rgb_data[px_off + 2]
                row.extend([b, g, r])
            else:
                row.extend([255, 255, 255])
        row.extend([0] * padding)
        rows.append(bytes(row))
    return header + dib + b''.join(rows)

print(f"Extracting images from Bahasa Indonesia Wajib PDF ({len(reader.pages)} pages)...")

for page_idx, page in enumerate(reader.pages):
    page_num = page_idx + 1
    page_key = f"{page_num:02d}"
    
    contents = page.get('/Contents')
    c = ""
    if contents:
        if isinstance(contents, list):
            c = " ".join([elem.get_data().decode('latin1', errors='ignore') for elem in contents if hasattr(elem, 'get_data')])
        elif hasattr(contents, 'get_data'):
            c = contents.get_data().decode('latin1', errors='ignore')
    
    matches = re.findall(r'([0-9\.\-]+)\s+([0-9\.\-]+)\s+([0-9\.\-]+)\s+([0-9\.\-]+)\s+([0-9\.\-]+)\s+([0-9\.\-]+)\s+cm\s*(?:/\w+\s+gs\s*)?/(\w+)\s+Do', c)
    
    images_with_y = []
    for m in matches:
        e = float(m[4])
        f = float(m[5])
        name = m[6]
        images_with_y.append({'name': name, 'y': f, 'x': e})
    
    # Sort top-to-bottom: descending Y
    images_with_y.sort(key=lambda item: item['y'], reverse=True)
    
    saved_files = []
    if '/Resources' in page and '/XObject' in page['/Resources']:
        xobjs = page['/Resources']['/XObject'].get_object()
        
        if not images_with_y:
            for k in xobjs.keys():
                images_with_y.append({'name': k.lstrip('/'), 'y': 0, 'x': 0})
        
        for item in images_with_y:
            name_slash = '/' + item['name']
            if name_slash in xobjs:
                obj = xobjs[name_slash]
                filt = obj.get('/Filter')
                width = int(obj.get('/Width', 0))
                height = int(obj.get('/Height', 0))
                try:
                    data = obj.get_data()
                except Exception as ex:
                    print(f"Error reading {name_slash} on page {page_num}: {ex}")
                    continue
                
                fname = f"p{page_key}_{item['name']}"
                if filt == '/DCTDecode' or (isinstance(filt, list) and '/DCTDecode' in filt):
                    out_path = os.path.join(scratch_dir, f"{fname}.jpg")
                    with open(out_path, 'wb') as f:
                        f.write(data)
                    saved_files.append(out_path)
                elif width > 0 and height > 0:
                    if len(data) == width * height * 3:
                        bmp_data = create_bmp(width, height, data)
                        out_path = os.path.join(scratch_dir, f"{fname}.bmp")
                        with open(out_path, 'wb') as f:
                            f.write(bmp_data)
                        saved_files.append(out_path)
                    elif len(data) == width * height:
                        rgb = bytearray()
                        for b in data:
                            rgb.extend([b, b, b])
                        bmp_data = create_bmp(width, height, bytes(rgb))
                        out_path = os.path.join(scratch_dir, f"{fname}.bmp")
                        with open(out_path, 'wb') as f:
                            f.write(bmp_data)
                        saved_files.append(out_path)
                    else:
                        out_path = os.path.join(scratch_dir, f"{fname}.bin")
                        with open(out_path, 'wb') as f:
                            f.write(data)
                        saved_files.append(out_path)
    page_manifest[page_key] = saved_files

manifest_path = os.path.join(r"C:\Users\Lenovo\.gemini\antigravity\brain\f6918bac-1bf8-4cf3-ab48-13c70540eace\scratch", "indo_wajib_manifest.json")
with open(manifest_path, 'w') as f:
    json.dump(page_manifest, f, indent=2)

print(f"Saved indo_wajib_manifest.json and extracted ordered images for {len(page_manifest)} pages!")
