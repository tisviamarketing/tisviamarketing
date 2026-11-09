"""
Regenerates the Tisvia icon set.

The mark is THREE pieces, not two: a left wedge, the stem, and a right wedge.
The previous icon shipped only the first two, so it read as a "1".

Geometry measured off public/logo-marketing.png (alpha profiling), with the
mark's top-left corner moved to the origin:

    left wedge   (0,0)  (54,0)  (0,102)
    stem         x 55..139, y 0..219
    right wedge  (136,0) (186,0) (186,102)

Mark box: 186 x 219.

Run from the repo root:  python3 tools/mkicon.py
"""

import io

from PIL import Image, ImageDraw

MW, MH = 186.0, 219.0
WEDGE_L = [(0, 0), (54, 0), (0, 102)]
STEM = (55, 0, 139, 219)
WEDGE_R = [(136, 0), (186, 0), (186, 102)]

BLUE = (61, 90, 254, 255)
WHITE = (255, 255, 255, 255)

SS = 4  # supersample


def tile(size: int, *, radius_ratio: float = 0.16, pad_ratio: float = 0.19,
         bg=BLUE, opaque=False) -> Image.Image:
    """Rounded blue tile with the mark knocked out in white."""
    s = size * SS
    im = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    r = int(s * radius_ratio)
    if radius_ratio >= 0.5:
        d.ellipse([0, 0, s - 1, s - 1], fill=bg)
    elif r:
        d.rounded_rectangle([0, 0, s - 1, s - 1], radius=r, fill=bg)
    else:
        d.rectangle([0, 0, s - 1, s - 1], fill=bg)

    # fit the mark by height inside the padding
    box = s * (1 - 2 * pad_ratio)
    scale = box / MH
    mw, mh = MW * scale, MH * scale
    ox, oy = (s - mw) / 2, (s - mh) / 2

    def pt(p):
        return (ox + p[0] * scale, oy + p[1] * scale)

    d.polygon([pt(p) for p in WEDGE_L], fill=WHITE)
    d.polygon([pt(p) for p in WEDGE_R], fill=WHITE)
    x0, y0, x1, y1 = STEM
    d.rectangle([pt((x0, y0)), pt((x1, y1))], fill=WHITE)

    im = im.resize((size, size), Image.LANCZOS)
    if opaque:
        flat = Image.new('RGBA', (size, size), bg)
        flat.alpha_composite(im)
        im = flat
    return im


import pathlib
OUT = str(pathlib.Path(__file__).resolve().parent.parent / 'public')

def write_ico(path, frames):
    """Write a multi-size .ico with PNG-compressed frames.

    Pillow's ICO writer resizes ONE source image to the `sizes` it is given and
    silently drops any size larger than that source, so saving from the 16px
    frame produced a single-frame icon. Writing the container here keeps each
    size's own rendering — the small ones need tighter padding than the large.
    """
    import struct
    blobs = []
    for im in frames:
        buf = io.BytesIO()
        im.save(buf, format='PNG', optimize=True)
        blobs.append(buf.getvalue())

    header = struct.pack('<HHH', 0, 1, len(frames))
    offset = len(header) + 16 * len(frames)
    entries = b''
    for im, blob in zip(frames, blobs):
        w, h = im.size
        entries += struct.pack(
            '<BBBBHHII',
            0 if w >= 256 else w,
            0 if h >= 256 else h,
            0, 0, 1, 32, len(blob), offset,
        )
        offset += len(blob)

    with open(path, 'wb') as f:
        f.write(header + entries + b''.join(blobs))


# .ico — tighter padding at small sizes so the mark survives
sizes = [16, 32, 48, 64]
write_ico(f'{OUT}/favicon.ico',
          [tile(n, pad_ratio=0.13 if n <= 32 else 0.17) for n in sizes])

# iOS: square, no rounding of our own — iOS masks it
tile(180, radius_ratio=0.0, opaque=True).save(f'{OUT}/apple-touch-icon.png')

tile(192).save(f'{OUT}/icon-192.png')
tile(512).save(f'{OUT}/icon-512.png')
# maskable: generous safe zone, full bleed
tile(512, radius_ratio=0.0, pad_ratio=0.29, opaque=True).save(f'{OUT}/icon-maskable.png')

print('ok')
