from PIL import Image
import os

def optimize_image(filename, output_filename, max_width, max_height=None):
    try:
        if not os.path.exists(filename):
            print(f"File not found: {filename}")
            return

        with Image.open(filename) as img:
            # Calculate new dimensions
            width, height = img.size
            if max_height:
                 # Resize to fit within max_width x max_height
                img.thumbnail((max_width, max_height))
            else:
                 # Resize by width, maintaining aspect ratio
                ratio = max_width / width
                new_size = (int(width * ratio), int(height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Save as WebP
            img.save(output_filename, 'WEBP', quality=85)
            print(f"Saved {output_filename}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Optimize jombinasquare.png (Preloader)
# Original is large, displayed ~140x140. Resize to 200x200 for safety.
optimize_image('jombinasquare.png', 'jombinasquare.webp', 200, 200)

# Generate small favicon.png from jombinasquare.png
try:
    with Image.open('jombinasquare.png') as img:
        img.thumbnail((64, 64))
        img.save('favicon.png', 'PNG')
        print("Saved favicon.png")
except Exception as e:
    print(f"Error creating favicon: {e}")

# Optimize JomBina.png (Logo)
# Displayed ~241x56. Resize to 241 width for perfect match.
optimize_image('JomBina.png', 'JomBina.webp', 241)
