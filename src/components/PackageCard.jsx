import React from 'react';
import { Sparkles, Users, Info, ArrowUpRight } from 'lucide-react';
import { formatRupiah } from '../utils/formatters';
import { businessInfo } from '../data/cateringData';

/**
 * Reusable PackageCard Component
 * Used across both MenuPackages (Home section) and AllPackagesPage (Full Catalog)
 * GPU-accelerated CSS hover transitions — 0 KB framer-motion overhead.
 */
export default function PackageCard({
  pkg,
  onSelectPackage,
  isDark = false
}) {
  const waLink = `https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Dapur%20Rasa,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20(${formatRupiah(pkg.price)}/${pkg.unit}).%20Bisa%20bantu%20jelaskan%20rinciannya?`;

  const cardContent = (
    <div
      className={`rounded-[0.5rem] border overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl hover:border-[#C5A059] ${
        isDark
          ? 'bg-[#24211D]/90 backdrop-blur-xs border-[#383127]'
          : 'bg-[#F5F3EF] border-[#E8DFD1]'
      } ${
        pkg.popular
          ? 'border-[#C5A059] ring-1 ring-[#C5A059]/50'
          : ''
      }`}
    >
      <div>
        {/* Visual Image */}
        <div className={`relative h-56 overflow-hidden ${isDark ? 'bg-[#1B1C1A]' : 'bg-[#E8DFD1]'}`}>
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            decoding="async"
            width="600"
            height="338"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/60 via-transparent to-transparent pointer-events-none" />

          {/* Status Pill Badge - Deep Royal Bronze-Gold */}
          {pkg.popular && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#775A19] via-[#8C6B1F] to-[#775A19] text-[#FFF9F0] border border-[#E9C176]/70 label-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E9C176] fill-[#E9C176] shrink-0" />
              <span className="font-semibold tracking-wide text-xs">Paling Sering Dipesan</span>
            </div>
          )}

          {/* Minimum Order Pill */}
          <div className={`absolute bottom-3 left-4 ${isDark ? 'bg-[#1B1C1A]/90 text-[#E8DFD1] border-[#383127]' : 'bg-[#FBF9F5]/90 text-[#2C2521] border-[#D1C5B4]'} backdrop-blur-sm label-sm px-2.5 py-1 rounded-full border flex items-center gap-1.5`}>
            <Users className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Min. {pkg.minOrder} {pkg.unit}</span>
          </div>
        </div>

        {/* Card Editorial Info */}
        <div className="p-4 sm:p-6 space-y-4">
          <div>
            <h3 className={`headline-sm text-xl font-medium ${isDark ? 'text-[#F5F3EF]' : 'text-[#2C2521]'}`}>
              {pkg.name}
            </h3>
            <p className={`body-sm mt-1.5 line-clamp-2 ${isDark ? 'text-[#CEC5B8]' : 'text-[#4E4639]'}`}>
              {pkg.description}
            </p>
          </div>

          {/* Price with Dotted Leader */}
          <div className={`py-3 border-y ${isDark ? 'border-[#383127]' : 'border-[#E8DFD1]'} flex items-baseline justify-between`}>
            <span className={`label-sm ${isDark ? 'text-[#9E9588]' : 'text-[#7F7667]'}`}>Investasi Jamuan</span>
            <div className="flex items-baseline gap-1">
              <span className={`font-serif text-xl sm:text-2xl font-medium ${isDark ? 'text-[#E9C176]' : 'text-[#775A19]'}`}>
                {formatRupiah(pkg.price)}
              </span>
              <span className={`label-sm ${isDark ? 'text-[#9E9588]' : 'text-[#7F7667]'}`}>/ {pkg.unit}</span>
            </div>
          </div>

          {/* Menu Highlights List with Dotted Leader styling */}
          <div className="space-y-2 pt-1">
            <span className={`label-sm block ${isDark ? 'text-[#9E9588]' : 'text-[#7F7667]'}`}>
              Susunan Hidangan Pilihan:
            </span>
            <ul className="space-y-2">
              {pkg.features.slice(0, 5).map((feat, i) => (
                <li key={i} className={`flex items-center text-xs ${isDark ? 'text-[#E8DFD1]' : 'text-[#2C2521]'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mr-2" />
                  <span className="truncate">{feat}</span>
                  <span className="dotted-leader" />
                  <span className={`label-sm shrink-0 ${isDark ? 'text-[#9E9588]' : 'text-[#7F7667]'}`}>Included</span>
                </li>
              ))}
              {pkg.features.length > 5 && (
                <li className={`label-sm pt-1 ${isDark ? 'text-[#E9C176]' : 'text-[#775A19]'}`}>
                  + {pkg.features.length - 5} menu pendamping & perlengkapan lainnya
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 sm:p-6 pt-0 flex gap-2.5">
        <button
          onClick={() => onSelectPackage && onSelectPackage(pkg)}
          className={`btn-secondary flex-1 text-xs cursor-pointer ${
            isDark
              ? '!text-[#F5F3EF] !border-[#C5A059]/60 hover:!bg-[#C5A059] hover:!text-[#1B1C1A]'
              : ''
          }`}
          type="button"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Rincian Menu</span>
        </button>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs"
        >
          <span>Pesan</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="h-full transition-transform duration-300 hover:-translate-y-1.5 will-change-transform">
      {cardContent}
    </div>
  );
}
