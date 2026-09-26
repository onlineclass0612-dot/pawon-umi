import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function CatalogSplashScreen({ onFinish, duration = 1500 }) {
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
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1B1C1A] text-[#FBF9F5] select-none overflow-hidden"
      role="status"
      aria-label="Memuat Katalog Sajian Pawon Umi"
    >
      {/* Ambient Radial Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.18)_0%,transparent_65%)] pointer-events-none" />

      {/* Decorative Corner Ornaments */}
      <div className="absolute top-6 left-6 text-[#C5A059]/30 text-xs font-cinzel tracking-widest hidden sm:block">
        PAWON UMI • ARTISANAL DINING
      </div>
      <div className="absolute bottom-6 right-6 text-[#C5A059]/30 text-xs font-cinzel tracking-widest hidden sm:block">
        EST. 2018 • FINE HOSPITALITY
      </div>

      <div className="relative flex flex-col items-center z-10">
        
        {/* Stationary Logo with Continuous Radiating Wave Emissions */}
        <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44">
          
          {/* 3 GPU-Accelerated Radiating Wave Rings (Composite-only: scale + opacity) */}
          {[0, 0.48, 0.96].map((delay, idx) => (
            <motion.div
              key={`ring-${idx}`}
              className="absolute inset-0 rounded-full border-2 border-[#C5A059]/80 pointer-events-none transform-gpu"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)"
              }}
              animate={{
                scale: [0.96, 2.2],
                opacity: [0.85, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          ))}

          {/* Secondary delicate gold halo wave */}
          {[0.24, 0.72, 1.2].map((delay, idx) => (
            <motion.div
              key={`halo-${idx}`}
              className="absolute inset-0.5 rounded-full border border-[#E9C176]/45 pointer-events-none transform-gpu"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)"
              }}
              animate={{
                scale: [0.96, 1.9],
                opacity: [0.55, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          ))}

          {/* Stationary Medallion Logo (Centered, Sharp & Still) */}
          <div className="relative z-10 p-[3px] rounded-full bg-gradient-to-tr from-[#775A19] via-[#C5A059] to-[#E9C176] shadow-[0_0_35px_rgba(197,160,89,0.45)] cursor-default select-none">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1B1C1A] p-2 flex items-center justify-center border border-[#C5A059]/40 overflow-hidden">
              <img
                src="/images/logo.webp"
                alt="Pawon Umi Logo"
                width="112"
                height="112"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

        </div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

          {/* Subtitle with Pulsing Dot */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="label-sm text-[#C5A059] text-[11px] sm:text-xs tracking-widest uppercase">
              Mempersiapkan Kurasi Jamuan
            </span>
          </div>

          {/* Elegant Golden Progress Indicator (GPU-accelerated scaleX) */}
          <div className="w-36 sm:w-44 h-[2px] bg-white/10 rounded-full mx-auto mt-4 overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-[#775A19] via-[#C5A059] to-[#E9C176] origin-left transform-gpu"
              style={{ willChange: "transform" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: duration / 1000, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
