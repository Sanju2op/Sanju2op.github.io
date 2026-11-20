"""Render the built resume page to dist/resume.pdf (A4, print stylesheet)."""
import sys
from playwright.sync_api import sync_playwright

url = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:4321/'
out = sys.argv[2] if len(sys.argv) > 2 else 'dist/resume.pdf'

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(url, wait_until='networkidle')
    page.evaluate('document.fonts.ready')
    page.emulate_media(media='print')
    page.pdf(path=out, format='A4', print_background=True, prefer_css_page_size=True)
    browser.close()
print('wrote', out)
