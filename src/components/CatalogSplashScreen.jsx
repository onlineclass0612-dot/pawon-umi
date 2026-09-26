import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function CatalogSplashScreen({ onFinish, duration = 1350 }) {
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
        
        {/* Heartbeat Pulsing Logo Container */}
        <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44">
          
          {/* Outer Ripple Wave 1 (Heartbeat rhythm) */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#C5A059]/50"
            animate={{
              scale: [1, 1.4, 1.05, 1.6, 1],
              opacity: [0.6, 0.1, 0.5, 0, 0.6]
            }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Outer Ripple Wave 2 (Slightly delayed expansion) */}
          <motion.div
            className="absolute inset-2 rounded-full border border-[#E9C176]/30"
            animate={{
              scale: [1, 1.25, 1.08, 1.45, 1],
              opacity: [0.5, 0.15, 0.4, 0, 0.5]
            }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1
            }}
          />

          {/* Core Medallion with Heartbeat Pulse Animation (Lub-Dub Rhythm) */}
          <motion.div
            animate={{
              scale: [1, 1.14, 1.04, 1.2, 1],
              filter: [
                "drop-shadow(0 0 12px rgba(197, 160, 89, 0.35))",
                "drop-shadow(0 0 28px rgba(197, 160, 89, 0.75))",
                "drop-shadow(0 0 16px rgba(197, 160, 89, 0.45))",
                "drop-shadow(0 0 36px rgba(197, 160, 89, 0.85))",
                "drop-shadow(0 0 12px rgba(197, 160, 89, 0.35))"
              ]
            }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative p-[3px] rounded-full bg-gradient-to-tr from-[#775A19] via-[#C5A059] to-[#E9C176] shadow-2xl cursor-default"
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

          {/* Elegant Golden Progress Indicator */}
          <div className="w-36 sm:w-44 h-[2px] bg-white/10 rounded-full mx-auto mt-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#775A19] via-[#C5A059] to-[#E9C176]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: duration / 1000, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
