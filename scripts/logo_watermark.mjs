/**
 * logo_watermark.mjs
 * Stamps the Mugil logo permanently into the bottom-right corner
 * of every product image (slightly transparent).
 *
 * Run:  node scripts/logo_watermark.mjs
 */

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const assetsDir  = path.resolve(__dirname, '../src/assets');
const backupDir  = path.resolve(__dirname, 'originals_logo');
const outputDir  = path.resolve(__dirname, 'watermarked_logo');
const wmSrc      = path.join(assetsDir, 'mugil_watermark.png');

// ── All product images to stamp (no logos / UI assets) ──────────────────────
const PRODUCT_IMAGES = [
  // Raw Tamarind
  'raw_tamarind_pods.jpg',
  'raw_tamarind_clean.jpg',
  'raw_tamarind_bag.jpg',
  'raw_tamarind_bulk.jpg',
  // Seedless Flower Tamarind
  'seedless_tamarind_block.jpg',
  'seedless_tamarind_close.jpg',
  'seedless_tamarind_bags.jpg',
  'seedless_tamarind_bulk.jpg',
  // Round Seedless Tamarind
  'round_tamarind_swirl.jpg',
  'round_tamarind_disc.jpg',
  'round_tamarind_stack.jpg',
  'round_tamarind_woven_baskets.jpg',
  // Slide / hero product images
  'slide1.webp',
  'slide2.webp',
  'slide3.webp',
  'slide4.webp',
  // Karipuli Tamarind Cake
  'karipuli_cake_top.jpg',
  'karipuli_cake_side.jpg',
  'karipuli_cake_bulk.jpg',
  // Loose Karipuli 30kg Box
  'loose_karipuli_box_open.jpg',
  'loose_karipuli_box_packed.jpg',
  'loose_karipuli_closeup.jpg',
  // Tamarind Pulp Paste
  'tamarind_paste_pack.jpg',
  'tamarind_paste_jar.jpg',
  'tamarind_paste_batch.jpg',
  'tamarind_paste_closeup.jpg',
  'tamarind_paste_label.jpg',
  // Seedless Tamarind Slab with White Layer
  'tamarind_slab_white_pack.jpg',
  'tamarind_slab_white_layer.jpg',
  'tamarind_slab_white_bulk.jpg',
  'tamarind_slab_white_detail.jpg',
  // Category card thumbnails
  'category_tamarind.webp',
  'category_oil.webp',
  'category_ghee.webp',
  'category_honey.webp',
  // Karipuli (original)
  'prod_karipuli.webp',
];

// Logo watermark size: ~20% of image width, placed 2.5% from bottom-right corner
const WM_RATIO   = 0.20;   // logo width = 20% of image width
const MARGIN_PCT = 0.025;  // 2.5% margin from edges
const OPACITY    = 0.55;   // 0=invisible 1=solid  (55% = subtle but visible)

async function buildWatermark(imgWidth, imgHeight) {
  const targetWidth = Math.round(imgWidth * WM_RATIO);
  const marginX     = Math.round(imgWidth  * MARGIN_PCT);
  const marginY     = Math.round(imgHeight * MARGIN_PCT);

  // 1. Resize logo, ensure it has an alpha channel
  const resized = await sharp(wmSrc)
    .resize({ width: targetWidth, fit: 'inside' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 2. Multiply every alpha byte by OPACITY
  const { data, info } = resized;
  for (let i = 3; i < data.length; i += 4) {
    data[i] = Math.round(data[i] * OPACITY);
  }

  // 3. Re-encode back to PNG
  const fadedWm  = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels }
  }).png().toBuffer();

  const wmMeta = await sharp(fadedWm).metadata();

  return {
    input: fadedWm,
    left:  imgWidth  - wmMeta.width  - marginX,
    top:   imgHeight - wmMeta.height - marginY,
  };
}

async function stampImage(filename) {
  const srcPath    = path.join(assetsDir, filename);
  const backupPath = path.join(backupDir,  filename);
  const outPath    = path.join(outputDir,  filename);

  if (!fs.existsSync(srcPath)) {
    console.warn(`  ⚠  Skipping (not found): ${filename}`);
    return;
  }

  // Backup original once
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(srcPath, backupPath);
    console.log(`  📦 Backed up: ${filename}`);
  }

  const meta  = await sharp(backupPath).metadata();
  const wm    = await buildWatermark(meta.width, meta.height);
  const ext   = path.extname(filename).toLowerCase();

  let outBuf;
  if (ext === '.webp') {
    outBuf = await sharp(backupPath).composite([wm]).webp({ quality: 88 }).toBuffer();
  } else {
    outBuf = await sharp(backupPath).composite([wm]).jpeg({ quality: 90 }).toBuffer();
  }

  fs.writeFileSync(outPath, outBuf);
  console.log(`  ✅ Stamped: ${filename} (${meta.width}×${meta.height})`);
}

async function main() {
  fs.mkdirSync(backupDir, { recursive: true });
  fs.mkdirSync(outputDir, { recursive: true });

  console.log('\n🔖 Stamping Mugil logo watermark onto all product images…\n');

  for (const file of PRODUCT_IMAGES) {
    await stampImage(file);
  }

  console.log('\n📋 Copying watermarked images back to src/assets/ …\n');

  let ok = 0, fail = 0;
  for (const file of PRODUCT_IMAGES) {
    const out  = path.join(outputDir, file);
    const dest = path.join(assetsDir, file);
    if (!fs.existsSync(out)) continue;
    try {
      fs.copyFileSync(out, dest);
      console.log(`  ↩  Installed: ${file}`);
      ok++;
    } catch {
      console.warn(`  ⚠  Locked (copy manually): ${file}`);
      fail++;
    }
  }

  console.log(`\n✨ Done — ${ok} stamped, ${fail} need manual copy.\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
