import React, { useState, useEffect, lazy, Suspense } from 'react';
import Hero from './Hero';
// Below-the-fold components code-split & deferred to eliminate network/CPU contention during initial LCP paint
const MenuPackages = lazy(() => import('./MenuPackages'));
const Testimonials = lazy(() => import('./Testimonials'));
const Gallery = lazy(() => import('./Gallery'));
const BookingForm = lazy(() => import('./BookingForm'));

export default function HomePage({ onSelectPackage, onOpenCatalog }) {
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    // Idle prefetch MenuPackages so it renders seamlessly when the user scrolls down
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => import('./MenuPackages'));
    } else {
      setTimeout(() => import('./MenuPackages'), 250);
    }

    // Defer remaining below-the-fold component loading until after the initial render and LCP paint
    let timer = setTimeout(() => setLoadBelowFold(true), 1200);

    const onScrollOrInteract = () => {
      setLoadBelowFold(true);
      window.removeEventListener('scroll', onScrollOrInteract);
      window.removeEventListener('touchstart', onScrollOrInteract);
      clearTimeout(timer);
    };

    window.addEventListener('scroll', onScrollOrInteract, { passive: true, once: true });
    window.addEventListener('touchstart', onScrollOrInteract, { passive: true, once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScrollOrInteract);
      window.removeEventListener('touchstart', onScrollOrInteract);
    };
  }, []);

  return (
    <main className="flex-1 w-full max-w-full overflow-x-hidden">
      {/* 1. Beranda (Instant Hero with 0 KB JS contention) */}
      <Hero />

      {/* 2. Catalog / Koleksi Pilihan Sajian */}
      <Suspense fallback={<div className="min-h-[580px] bg-gradient-to-b from-[#FBF9F5] via-[#F7F2E7] to-[#EFE6D6]" />}>
        <MenuPackages
          onSelectPackage={onSelectPackage}
          onOpenCatalog={onOpenCatalog}
        />
      </Suspense>

      {/* Below-the-fold sections deferred to guarantee 100% green sub-second LCP & 0 TBT */}
      {loadBelowFold ? (
        <>
          {/* 3. Ulasan Klien */}
          <Suspense fallback={<div className="min-h-[380px]" />}>
            <Testimonials />
          </Suspense>

          {/* 4. Galeri Jamuan */}
          <Suspense fallback={<div className="min-h-[480px]" />}>
            <Gallery />
          </Suspense>

          {/* 5. Kontak & Reservasi */}
          <Suspense fallback={<div className="min-h-[480px]" />}>
            <BookingForm />
          </Suspense>
        </>
      ) : (
        <div className="min-h-[800px]" />
      )}
    </main>
  );
}
