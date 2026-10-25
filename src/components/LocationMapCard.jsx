import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/cateringData';

export default function LocationMapCard({ className = "" }) {
  return (
    <a
      href={businessInfo.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buka lokasi Dapur Rasa Catering di Google Maps"
      title="Buka lokasi di Google Maps"
      className={`group relative block rounded-[0.5rem] overflow-hidden border border-[#E8DFD1] bg-[#F5F3EF] transition-all duration-300 active:scale-[0.985] md:active:scale-100 md:hover:border-[#C5A059] md:hover:shadow-lg md:hover:-translate-y-1 select-none cursor-pointer ${className}`}
    >
      {/* Stylized Artisanal Cartographic SVG Map Canvas */}
      <div className="relative w-full h-40 sm:h-44 bg-[#F2EDE4] overflow-hidden">
        <svg
          viewBox="0 0 400 180"
          className="w-full h-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Base Landmass & Subtle City Blocks */}
          <rect width="400" height="180" fill="#F4EFE6" />
          
          {/* Greenery / Taman Suropati & Cikini Park Area */}
          <path
            d="M -10,30 Q 60,10 90,50 T 70,110 Q 30,130 -10,110 Z"
            fill="rgba(119, 90, 25, 0.07)"
          />
          <path
            d="M 310,120 Q 350,90 410,110 L 410,190 L 290,190 Z"
            fill="rgba(119, 90, 25, 0.06)"
          />

          {/* Secondary Roads & Street Grid */}
          <path d="M 0,45 L 400,45" stroke="#E5DEC9" strokeWidth="6" strokeLinecap="round" />
          <path d="M 0,135 L 400,135" stroke="#E5DEC9" strokeWidth="6" strokeLinecap="round" />
          <path d="M 80,0 L 80,180" stroke="#E5DEC9" strokeWidth="5" strokeLinecap="round" />
          <path d="M 310,0 L 310,180" stroke="#E5DEC9" strokeWidth="5" strokeLinecap="round" />
          
          {/* Diagonal Arterial Road (Jl. Teuku Umar / Diponegoro) */}
          <path
            d="M 20,-10 L 380,190"
            stroke="#DFD6C0"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Primary Main Boulevard: Jl. Cikini Raya (Golden Tint) */}
          <path
            d="M 200,-10 L 200,190"
            stroke="#D6C6A8"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 200,-10 L 200,190"
            stroke="#FFF9F0"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Subtle Street Labels */}
          <text
            x="208"
            y="25"
            fill="#7F7667"
            fontSize="8"
            fontFamily="var(--font-label)"
            letterSpacing="0.08em"
            fontWeight="600"
          >
            JL. CIKINI RAYA
          </text>
          <text
            x="88"
            y="70"
            fill="#9C9281"
            fontSize="7"
            fontFamily="var(--font-label)"
            letterSpacing="0.06em"
          >
            MENTENG
          </text>

          {/* Location Marker Target Radar / Pulse Rings */}
          <circle
            cx="200"
            cy="90"
            r="28"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            strokeDasharray="3 3"
          />
          <circle
            cx="200"
            cy="90"
            r="16"
            fill="rgba(197, 160, 89, 0.18)"
          />

          {/* Golden Pin Drop Landmark Pin */}
          <g transform="translate(190, 68)">
            {/* Pin Shadow */}
            <ellipse cx="10" cy="24" rx="6" ry="2.5" fill="rgba(44, 37, 33, 0.25)" />
            {/* Pin Body */}
            <path
              d="M 10,0 C 4.5,0 0,4.5 0,10 C 0,16 10,24 10,24 C 10,24 20,16 20,10 C 20,4.5 15.5,0 10,0 Z"
              fill="#775A19"
              stroke="#FFF9F0"
              strokeWidth="1.5"
            />
            {/* Pin Inner Medallion */}
            <circle cx="10" cy="9.5" r="4" fill="#C5A059" />
          </g>
        </svg>

        {/* Ambient Top Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2521]/60 via-transparent to-transparent pointer-events-none" />

        {/* Interactive Floating Action Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1B1C1A]/85 backdrop-blur-xs text-[#FBF9F5] border border-[#C5A059]/40 text-[11px] font-medium shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-gentle-pulse shrink-0" />
            <span className="truncate max-w-[170px] sm:max-w-none">Dapur Pusat & Lounge Cikini</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059] text-[#2C2521] text-xs font-semibold shadow-md group-hover:bg-[#B48F45] transition-colors">
            <span>Buka Peta</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </div>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-3 sm:p-3.5 bg-white flex items-center justify-between text-xs text-[#4E4639] border-t border-[#E8DFD1]">
        <div className="flex items-center gap-2 truncate mr-2">
          <MapPin className="w-3.5 h-3.5 text-[#775A19] shrink-0" />
          <span className="truncate text-[11.5px]">{businessInfo.address}</span>
        </div>
        <span className="text-[11px] text-[#775A19] font-medium whitespace-nowrap group-hover:underline">
          Petunjuk Arah →
        </span>
      </div>
    </a>
  );
}
