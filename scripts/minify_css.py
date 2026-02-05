import re
import os

def minify_css(input_file, output_file):
    try:
        if not os.path.exists(input_file):
            print(f"File not found: {input_file}")
            return

        with open(input_file, 'r', encoding='utf-8') as f:
            css_content = f.read()

        # Remove comments /* ... */
        css_content = re.sub(r'/\*.*?\*/', '', css_content, flags=re.DOTALL)
        
        # Remove extra whitespace (newlines, tabs, multiple spaces)
        css_content = re.sub(r'\s+', ' ', css_content)
        
        # Remove spaces around colons, braces, semicolons, commas
        css_content = re.sub(r'\s*([:;{},])\s*', r'\1', css_content)
        
        # Remove last semicolon in block (optional but saves bytes)
        css_content = re.sub(r';}', '}', css_content)

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(css_content.strip())
            
        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        savings = original_size - minified_size
        print(f"Minified {input_file} -> {output_file} (Saved {savings} bytes)")

    except Exception as e:
        print(f"Error minifying {input_file}: {e}")

# Minify style.css
minify_css('../css/style.css', '../css/style.min.css')

# Minify responsive.css
minify_css('../css/responsive.css', '../css/responsive.min.css')
