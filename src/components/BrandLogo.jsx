import React from 'react';

/**
 * Reusable BrandLogo Component for Dapur Rasa Catering
 * Supports multiple variants:
 * - 'light': Default on light cream surfaces (Navbar, etc.)
 * - 'dark': On dark charcoal surfaces (Footer, Banner, etc.)
 * - 'splash': Compact centered format for splash screens
 */
export default function BrandLogo({
  variant = 'light',
  showTagline = true,
  showBadge = true,
  size = 'md',
  className = ''
}) {
  const isDark = variant === 'dark';
  const isSplash = variant === 'splash';

  // Sizing definitions
  const logoSizes = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-10 h-10 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    splash: 'w-20 h-20 sm:w-24 sm:h-24'
  };

  const imageSize = logoSizes[size] || logoSizes.md;

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 group min-w-0 ${className}`}>
      {/* Brand Logo Medallion Frame with Gold Ring */}
      <div className="relative shrink-0">
        <div
          className={`p-[2px] rounded-full shadow-xs transition-transform duration-300 group-hover:scale-105 ${
            isDark
              ? 'bg-gradient-to-tr from-[#C5A059] via-[#E8DFD1]/30 to-[#C5A059]/40'
              : 'bg-gradient-to-tr from-[#C5A059] via-[#E8DFD1] to-[#C5A059]/40'
          }`}
        >
          <img
            src="/images/logo.webp"
            alt="Dapur Rasa Logo"
            width="56"
            height="56"
            loading="eager"
            className={`${imageSize} object-contain rounded-full border border-[#C5A059]/50 bg-[#1B1C1A]`}
          />
        </div>
      </div>

      {/* Brand Typography with Decorative D & R */}
      <div className="min-w-0 flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span
            className={`font-cinzel font-medium text-lg sm:text-2xl tracking-wider whitespace-nowrap inline-flex items-baseline ${
              isDark ? 'text-white' : 'text-[#2C2521]'
            }`}
          >
            <span
              className={`font-accent text-2xl sm:text-[2.1rem] font-normal leading-none mr-0.5 select-none ${
                isDark ? 'text-[#C5A059]' : 'text-[#775A19]'
              }`}
            >
              D
            </span>
            <span>apur</span>
            <span
              className={`font-accent text-2xl sm:text-[2.1rem] font-normal leading-none ml-1.5 sm:ml-2 mr-0.5 select-none ${
                isDark ? 'text-[#C5A059]' : 'text-[#775A19]'
              }`}
            >
              R
            </span>
            <span>asa</span>
          </span>

          {showBadge && (
            <span
              className={`hidden xs:inline-block label-sm px-2 py-0.5 rounded-full text-[10px] sm:text-[10.5px] whitespace-nowrap self-center ${
                isDark
                  ? 'bg-[#2C2521] text-[#C5A059] border border-[#7F7667]/40'
                  : 'bg-[#EADDD7] text-[#6A615C]'
              }`}
            >
              Catering
            </span>
          )}
        </div>

        {showTagline && !isSplash && (
          <p
            className={`hidden sm:block label-sm normal-case tracking-normal whitespace-nowrap text-[11px] sm:text-[11.5px] mt-0.5 ${
              isDark ? 'text-[#CEC5B8]' : 'text-[#7F7667]'
            }`}
          >
            Bespoke Dining & Fine Hospitality
          </p>
        )}
      </div>
    </div>
  );
}
