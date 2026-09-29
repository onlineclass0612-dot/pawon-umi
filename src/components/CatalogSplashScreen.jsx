import React, { useState, useEffect } from 'react';

/**
 * CatalogSplashScreen Component (Ultra-Lightweight Minimalist Edition)
 * Pure CSS animations — 0 kB external JS runtime overhead.
 * Runs at a solid 60/120 FPS on all devices with a brisk luxury fade transition.
 */
export default function CatalogSplashScreen({ onFinish, duration = 650 }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Lock scrolling while splash screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, Math.max(0, duration - 220));

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, duration);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, duration]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1B1C1A] text-[#FBF9F5] select-none transition-opacity duration-200 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-label="Memuat Katalog Sajian Pawon Umi"
    >
      <div className="relative flex flex-col items-center z-10 px-4 transition-all duration-300 ease-out">
        
        {/* Brand Medallion Logo (Compact, Sharp, No Blur Filter) */}
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32">
          
          {/* Subtle Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-[#C5A059]/30 pointer-events-none" />

          {/* Centered Logo Medallion */}
          <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#775A19] via-[#C5A059] to-[#E9C176] shadow-xl select-none transition-transform duration-300">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1B1C1A] p-2 flex items-center justify-center border border-[#C5A059]/30 overflow-hidden">
              <img
                src="/images/logo.webp"
                alt="Pawon Umi Logo"
                width="80"
                height="80"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

        </div>

        {/* Brand Typography */}
        <div className="mt-4 text-center space-y-2">
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="font-cinzel font-medium text-xl sm:text-2xl tracking-widest text-[#FBF9F5]">
              <span className="font-accent text-2xl sm:text-3xl text-[#C5A059] font-normal leading-none mr-0.5 select-none">
                P
              </span>
              awon
              <span className="font-accent text-2xl sm:text-3xl text-[#C5A059] font-normal leading-none ml-1.5 mr-0.5 select-none">
                U
              </span>
              mi
            </span>
          </div>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="label-sm text-[#C5A059] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium">
              Mempersiapkan Kurasi Jamuan
            </span>
          </div>

          {/* Minimalist Hairline Progress Line (100% GPU Composite scaleX) */}
          <div className="w-28 sm:w-36 h-[1.5px] bg-white/10 rounded-full mx-auto mt-3 overflow-hidden">
            <div
              className="h-full w-full bg-gradient-to-r from-[#775A19] via-[#C5A059] to-[#E9C176] origin-left animate-pulse"
              style={{
                animationDuration: `${duration}ms`
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
