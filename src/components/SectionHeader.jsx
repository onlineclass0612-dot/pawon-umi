import React from 'react';

/**
 * Reusable SectionHeader Component
 * Standardizes section badge, headline, and subtitle narrative across all landing sections.
 * Pure CSS presentation — 0 KB JS runtime overhead.
 */
export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  isDark = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'} space-y-3.5 sm:space-y-4 mb-10 sm:mb-14 ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs ${
            isDark
              ? 'bg-[#2C2521] border-[#C5A059]/40 text-[#E9C176]'
              : 'bg-[#F5F3EF] border-[#D1C5B4] text-[#775A19]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
          <span className={`label-sm ${isDark ? 'text-[#F5F3EF]' : 'text-[#4E4639]'}`}>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className={`headline-md ${isDark ? 'text-white' : 'text-[#2C2521]'}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`body-md ${isDark ? 'text-[#CEC5B8]' : 'text-[#4E4639]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
