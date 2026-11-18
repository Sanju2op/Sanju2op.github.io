import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { site } from '../data/site';

// Social preview image, drawn at build time so it never needs a binary upload.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#CC785C"/>
  <rect x="60" y="60" width="1080" height="510" fill="none" stroke="#2A130A" stroke-width="6"/>
  <text x="110" y="330" font-family="Helvetica, Arial, sans-serif" font-size="150" font-weight="800" letter-spacing="-6" fill="#2A130A">${site.name.split(' ')[0]}</text>
  <text x="110" y="470" font-family="Helvetica, Arial, sans-serif" font-size="150" font-weight="800" letter-spacing="-6" fill="#2A130A">${site.name.split(' ')[1]}</text>
  <text x="110" y="540" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="600" fill="#4A2315">${site.role} · sanju2op.github.io</text>
</svg>`;

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
