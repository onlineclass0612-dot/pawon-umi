import React, { useEffect } from 'react';
import { motion } from 'motion/react';

/**
 * CatalogSplashScreen Component (Quiet Luxury Edition)
 * A refined, calm, and prestigious transition screen featuring the Pawon Umi medallion
 * enveloped in a warm ambient candle-lit golden aura, completely free of tacky radar waves.
 */
export default function CatalogSplashScreen({ onFinish, duration = 1150 }) {
  useEffect(() => {
    // Lock scrolling while splash screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, duration);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [onFinish, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1B1C1A] text-[#FBF9F5] select-none overflow-hidden"
      role="status"
      aria-label="Memuat Katalog Sajian Pawon Umi"
    >
      {/* Soft Ambient Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.14)_0%,transparent_60%)] pointer-events-none" />

      {/* Decorative Heritage Corner Notations */}
      <div className="absolute top-7 left-7 text-[#C5A059]/35 text-[11px] font-cinzel tracking-[0.25em] hidden sm:block">
        PAWON UMI • BESPOKE DINING
      </div>
      <div className="absolute bottom-7 right-7 text-[#C5A059]/35 text-[11px] font-cinzel tracking-[0.25em] hidden sm:block">
        EST. 2018 • FINE HOSPITALITY
      </div>

      <div className="relative flex flex-col items-center z-10 px-4">
        
        {/* Medallion Frame with Quiet Luxury Warm Ambient Glow (No Tacky Wave Shockwaves) */}
        <div className="relative flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40">
          
          {/* Gentle Breathing Warm Golden Ambient Aura */}
          <motion.div
            className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#775A19]/25 via-[#C5A059]/20 to-transparent blur-2xl pointer-events-none transform-gpu"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [0.96, 1.04, 0.96]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Delicate Fine Jewelry Outer Ring */}
          <div className="absolute -inset-2.5 rounded-full border border-[#C5A059]/30 pointer-events-none" />

          {/* Centered Brand Medallion Logo (Still, Crisp & Prestigious) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 p-[3px] rounded-full bg-gradient-to-tr from-[#775A19] via-[#C5A059] to-[#E9C176] shadow-[0_12px_32px_rgba(0,0,0,0.6)] cursor-default select-none"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1B1C1A] p-2 flex items-center justify-center border border-[#C5A059]/40 overflow-hidden">
              <img
                src="/images/logo.webp"
                alt="Pawon Umi Logo"
                width="112"
                height="112"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </motion.div>

        </div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-center space-y-2"
        >
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="font-cinzel font-medium text-2xl sm:text-3xl tracking-widest text-[#FBF9F5]">
              <span className="font-accent text-3xl sm:text-4xl text-[#C5A059] font-normal leading-none mr-0.5 select-none">
                P
              </span>
              awon
              <span className="font-accent text-3xl sm:text-4xl text-[#C5A059] font-normal leading-none ml-2 mr-0.5 select-none">
                U
              </span>
              mi
            </span>
          </div>

          {/* Subtitle with Warm Amber Glow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-80" />
            <span className="label-sm text-[#C5A059] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium">
              Mempersiapkan Kurasi Jamuan
            </span>
          </div>

          {/* Minimalist Hairline Golden Progress Line (100% GPU-accelerated) */}
          <div className="w-32 sm:w-40 h-[1.5px] bg-white/10 rounded-full mx-auto mt-4 overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-[#775A19] via-[#C5A059] to-[#E9C176] origin-left transform-gpu"
              style={{ willChange: "transform" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: duration / 1000, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
