import React, { lazy, Suspense } from 'react';
import Hero from './Hero';
import MenuPackages from './MenuPackages';

// Below-the-fold components code-split to slash initial mobile JS bundle
const Testimonials = lazy(() => import('./Testimonials'));
const Gallery = lazy(() => import('./Gallery'));
const BookingForm = lazy(() => import('./BookingForm'));

export default function HomePage({ onSelectPackage, onOpenCatalog }) {
  return (
    <main className="flex-1 w-full max-w-full overflow-x-hidden">
      {/* 1. Beranda */}
      <Hero />

      {/* 2. Catalog / Koleksi Pilihan Sajian */}
      <MenuPackages
        onSelectPackage={onSelectPackage}
        onOpenCatalog={onOpenCatalog}
      />

      {/* 3. Ulasan Klien (Lazy loaded below the fold) */}
      <Suspense fallback={<div className="min-h-[380px]" />}>
        <Testimonials />
      </Suspense>

      {/* 4. Galeri Jamuan (Lazy loaded below the fold) */}
      <Suspense fallback={<div className="min-h-[480px]" />}>
        <Gallery />
      </Suspense>

      {/* 5. Kontak & Reservasi (Lazy loaded below the fold) */}
      <Suspense fallback={<div className="min-h-[480px]" />}>
        <BookingForm />
      </Suspense>
    </main>
  );
}
