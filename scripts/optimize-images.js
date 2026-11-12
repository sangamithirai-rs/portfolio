// Converts PNG/JPEG images in assets/ and public/ to WebP (quality 80).
// Usage: npm run optimize-images
// Originals are left untouched: update references to the .webp files, then delete the originals.
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOTS = ['assets', 'public'];
const SOURCE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;
let converted = 0;

for (const root of ROOTS) {
  for await (const file of walk(root)) {
    if (!SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase())) continue;
    const out = file.replace(/\.[^.]+$/, '.webp');
    await sharp(file).webp({ quality: 80 }).toFile(out);
    const [before, after] = await Promise.all([stat(file), stat(out)]);
    console.log(`${file}: ${kb(before.size)} -> ${out}: ${kb(after.size)}`);
    converted++;
  }
}

console.log(
  converted
    ? `\nConverted ${converted} image(s). Update references to the .webp files, then delete the originals.`
    : 'No PNG/JPEG images found. Nothing to do.'
);
