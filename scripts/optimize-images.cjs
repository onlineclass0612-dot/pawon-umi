const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeImages() {
  console.log('--- Optimizing Images for Production ---');

  // 1. Optimize logo.webp (Target: ~2-3 KiB, sharp 80x80 for 40px/56px displays)
  const logoPath = path.join(__dirname, '../public/images/logo.webp');
  const logoBackupPath = path.join(__dirname, '../public/images/logo_orig.webp');
  if (!fs.existsSync(logoBackupPath)) {
    fs.copyFileSync(logoPath, logoBackupPath);
  }

  const logoBuf = await sharp(logoBackupPath)
    .resize(80, 80)
    .webp({ quality: 78, effort: 6 })
    .toBuffer();

  fs.writeFileSync(logoPath, logoBuf);
  console.log(`[OK] logo.webp optimized: ${(logoBuf.length / 1024).toFixed(2)} KiB (${logoBuf.length} bytes)`);

  // 2. Optimize hero_catering_buffet_mobile.webp (Target: ~22.5 KiB, 440px wide)
  const heroMobilePath = path.join(__dirname, '../public/images/hero_catering_buffet_mobile.webp');
  const origJpgPath = 'C:/Users/MyBook Hype/.gemini/antigravity-ide/brain/bd3337bf-a644-4906-8afb-2a63d87836d8/hero_catering_buffet_1790224360466.jpg';

  let heroBuf;
  if (fs.existsSync(origJpgPath)) {
    heroBuf = await sharp(origJpgPath)
      .resize(440)
      .webp({ quality: 65, effort: 6 })
      .toBuffer();
  } else {
    heroBuf = await sharp(heroMobilePath)
      .resize(440)
      .webp({ quality: 62, effort: 6 })
      .toBuffer();
  }

  fs.writeFileSync(heroMobilePath, heroBuf);
  console.log(`[OK] hero_catering_buffet_mobile.webp optimized: ${(heroBuf.length / 1024).toFixed(2)} KiB (${heroBuf.length} bytes)`);
}

optimizeImages().catch(console.error);
