"""Warn (do not fail) if the resume PDF is not one page of selectable text."""
import sys
from pypdf import PdfReader

path = sys.argv[1] if len(sys.argv) > 1 else 'dist/resume.pdf'
reader = PdfReader(path)
pages = len(reader.pages)
text = reader.pages[0].extract_text() or ''
print(f'{path}: {pages} page(s), {len(text)} characters of selectable text')
if pages != 1:
    print('::warning::resume.pdf is longer than one page; shorten the content or the print spacing')
if 'Sanjay Lagariya' not in text:
    print('::warning::resume.pdf text is not selectable')
