# Pawon Umi Catering — Artisanal Indonesian & Bespoke Dining

Website resmi dan katalog interaktif **Pawon Umi Catering**, menghadirkan pengalaman kuliner artisanal nusantara terkurasi untuk resepsi pernikahan, jamuan VIP korporat, tumpeng syukuran, dan berbagai acara istimewa.

---

## 🌟 Fitur Utama

- **Artisanal & Bespoke Design:** Estetika hangat dan mewah bertema *Heritage & Craftsmanship*, tipografi editorial modern (Cinzel, Lora, Playfair Display, Montserrat), serta animasi halus menggunakan Motion.
- **Katalog Menu Interaktif:** Filter kategori dinamis (Nasi Kotak, Tumpeng, Prasmanan, Snack Box, Coffee Break, Live Cooking) dengan modal rincian menu komprehensif.
- **Formulir Reservasi Cerdas:** Validasi interaktif langsung terintegrasi dengan generator format pesan WhatsApp resmi.
- **Mobile First & Responsive:** Pengalaman optimal di semua perangkat dengan *bottom sticky consultation CTA*, *touch-friendly swipeable carousel*, dan navigasi responsif.
- **Performa Tinggi (Lighthouse Optimized):**
  - Konversi dan kompresi seluruh aset gambar ke format modern **WebP** (reduksi payload ~86%).
  - Pemuatan font Google asinkron (*non-render-blocking*).
  - *Preload high-priority* LCP (Largest Contentful Paint) dan pencegahan Cumulative Layout Shift (CLS = 0).
  - *Code-splitting* otomatis dengan `React.lazy()` dan manual vendor chunking di Vite.

---

## 🛠️ Teknologi & Dependensi

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi:** [Motion (Framer Motion)](https://motion.dev/)
- **Ikonografi:** [Lucide React](https://lucide.dev/)
- **Linter:** [Oxlint](https://oxc.rs/)

---

## 🚀 Memulai Proyek (Development)

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18 ke atas)
- NPM atau PNPM

### Instalasi & Menjalankan Dev Server

```bash
# 1. Kloning repositori
git clone https://github.com/onlineclass0612-dot/pawon-umi.git
cd pawon-umi

# 2. Pasang dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka peramban di `http://localhost:5173`.

---

## 📦 Build untuk Produksi

```bash
# Linting kode
npm run lint

# Build bundle produksi
npm run build

# Meninjau hasil build lokal
npm run preview
```

---

## 📄 Lisensi & Hak Cipta

© 2026 **Pawon Umi Catering**. All rights reserved.
