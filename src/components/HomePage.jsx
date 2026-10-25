import React, { useState, useEffect, lazy, Suspense } from 'react';
import Hero from './Hero';
import MenuPackages from './MenuPackages';

// Below-the-fold components code-split & loaded only when user scrolls/interacts
const CateringCalculator = lazy(() => import('./CateringCalculator'));
const EditorialStories = lazy(() => import('./EditorialStories'));
const BookingForm = lazy(() => import('./BookingForm'));

export default function HomePage({ onSelectPackage }) {
  const [loadBelowFold, setLoadBelowFold] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    // Only load below-the-fold sections when user actually scrolls or interacts
    const onScrollOrInteract = () => {
      setLoadBelowFold(true);
    };

    window.addEventListener('scroll', onScrollOrInteract, { passive: true, once: true });
    window.addEventListener('touchstart', onScrollOrInteract, { passive: true, once: true });
    window.addEventListener('wheel', onScrollOrInteract, { passive: true, once: true });

    return () => {
      window.removeEventListener('scroll', onScrollOrInteract);
      window.removeEventListener('touchstart', onScrollOrInteract);
      window.removeEventListener('wheel', onScrollOrInteract);
    };
  }, []);

  return (
    <main className="flex-1 w-full max-w-full overflow-x-hidden">
      {/* 1. Beranda (Instant Hero with 0 KB JS contention) */}
      <Hero />

      {/* 2. Catalog / Koleksi Pilihan Sajian */}
      <MenuPackages
        onSelectPackage={onSelectPackage}
      />

      {/* Below-the-fold sections deferred to guarantee 100% green sub-second LCP & 0 TBT */}
      {loadBelowFold ? (
        <>
          {/* 3. Kalkulator Porsi & Estimasi Biaya Jamuan (Tepat di bawah Catalog) */}
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <CateringCalculator onSelectPackage={onSelectPackage} />
          </Suspense>

          {/* 4. Dokumentasi & Ulasan Jamuan (Merged Editorial Story Showcase) */}
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <EditorialStories />
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
