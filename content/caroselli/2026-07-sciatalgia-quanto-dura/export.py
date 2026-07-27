from playwright.sync_api import sync_playwright
from PIL import Image
import os

HTML_PATH = os.path.join(os.path.dirname(__file__), "carosello.html")
OUTPUT_DIR = os.path.dirname(__file__)
N_SLIDES = 7

def export_carosello():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(
            viewport={"width": 1200, "height": 1200},
            device_scale_factor=1
        )
        page.goto(f"file://{os.path.abspath(HTML_PATH)}")
        page.wait_for_timeout(1500)  # attendi font Google

        # Porta tutte le slide a scala 1:1 per l'export
        page.evaluate("""
            document.querySelectorAll('.slide').forEach(s => {
                s.style.transform = 'scale(1)';
                s.style.marginBottom = '0px';
            });
            document.body.style.gap = '20px';
        """)
        page.wait_for_timeout(400)

        slides = page.query_selector_all(".slide")
        assert len(slides) == N_SLIDES, f"Attese {N_SLIDES} slide, trovate {len(slides)}"

        for i, slide in enumerate(slides, 1):
            out_path = os.path.join(OUTPUT_DIR, f"slide_{i:02d}.png")
            slide.screenshot(path=out_path)
            im = Image.open(out_path)
            assert im.size == (1080, 1080), f"Slide {i}: dimensioni errate {im.size}"
            print(f"✓ slide_{i:02d}.png — {im.size}")

        browser.close()

    print(f"\nExport completato: {N_SLIDES} slide in {OUTPUT_DIR}/")

if __name__ == "__main__":
    export_carosello()
