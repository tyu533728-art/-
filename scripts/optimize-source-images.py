from pathlib import Path
from PIL import Image, ImageChops, ImageEnhance

root = Path(__file__).resolve().parents[1]
source = root / 'assets' / 'source-products' / 'xl' / 'media'
output = root / 'assets' / 'product-images'
output.mkdir(parents=True, exist_ok=True)

mapping = {
    'image4.jpeg': 'ucp-pillow-block-bearing.webp',
    'image5.jpeg': 'ucpa-narrow-pillow-block.webp',
    'image2.png': 'ucf-flange-bearing.webp',
    'image7.png': 'ucfl-bearing.webp',
    'image3.png': 'ucfc-round-flange-bearing.webp',
    'image6.jpeg': 'ucfs-heavy-flange-bearing.webp',
    'image1.png': 'uct-take-up-bearing.webp',
}

for source_name, output_name in mapping.items():
    image = Image.open(source / source_name).convert('RGB')
    background = Image.new('RGB', image.size, 'white')
    diff = ImageChops.difference(image, background)
    bbox = diff.point(lambda value: 255 if value > 12 else 0).getbbox()
    if bbox:
        left, top, right, bottom = bbox
        pad = max(12, round(min(image.size) * 0.035))
        image = image.crop((max(0, left - pad), max(0, top - pad), min(image.width, right + pad), min(image.height, bottom + pad)))
    image = ImageEnhance.Contrast(image).enhance(1.04)
    image = ImageEnhance.Sharpness(image).enhance(1.08)
    image.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
    image.save(output / output_name, 'WEBP', quality=88, method=6)
    print(f'{source_name} -> {output_name} {image.size}')
