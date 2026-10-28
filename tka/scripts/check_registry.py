import re
import json

with open("tka/js/tka-registry.js", "r", encoding="utf-8") as f:
    text = f.read()

# find mapelList array
m = re.search(r'mapelList:\s*(\[.*?\]\s*\n\s*\]|\{.*?\})', text, re.DOTALL)
# Alternatively, parse via node.js
