import React, { useState, useRef } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { packagesData } from '../data/cateringData';
import SectionHeader from './SectionHeader';
import PackageCard from './PackageCard';

export default function MenuPackages({ onSelectPackage }) {
  // 4 Kategori Terkurasi: Rice Box, Tumpeng, Prasmanan, Kudapan
  const homeCategories = [
    { id: "nasikotak", name: "Rice Box" },
    { id: "tumpeng", name: "Tumpeng" },
    { id: "prasmanan", name: "Prasmanan" },
    { id: "kudapan", name: "Kudapan" }
  ];
  const [activeCategory, setActiveCategory] = useState("nasikotak");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carouselRef = useRef(null);

  const filteredPackages = packagesData.filter(item => item.category === activeCategory);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentCardIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Track active slide on mobile horizontal swipe
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    if (clientWidth > 0) {
      const activeIdx = Math.round(scrollLeft / (clientWidth * 0.84));
      setCurrentCardIndex(Math.min(activeIdx, filteredPackages.length - 1));
    }
  };

  const scrollToCard = (idx) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.clientWidth * 0.84;
    carouselRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth'
    });
    setCurrentCardIndex(idx);
  };

  return (
    <section
      id="catalog"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#FBF9F5] via-[#F7F2E7] to-[#EFE6D6] md:bg-[linear-gradient(135deg,#FBF9F5_0%,#F8F3EA_40%,#F4EDE0_70%,#ECE1CF_100%)] border-b border-[#E8DFD1] w-full overflow-hidden"
    >
      <span id="sajian" className="absolute -top-24"></span>
      <span id="katalog" className="absolute -top-24"></span>

      {/* Pure CSS Luxury Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-12 -left-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.12)_0%,transparent_65%)]" />
        <div className="absolute -bottom-20 -right-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(119,90,25,0.08)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader
          badge="Koleksi Jamuan Terkurasi"
          title="Pilihan Paket Katering Dapur Rasa"
          subtitle="Dirancang khusus untuk menghadirkan pengalaman bersantap yang tak terlupakan. Seluruh susunan hidangan dapat disesuaikan dengan konsep acara Anda."
          className="mb-8 sm:mb-12"
        />

        {/* =========================================================================
            CATEGORY SELECTOR:
            - Mobile (< sm): Filter dropdown selector (Zero horizontal scrollbar)
            - Tablet & Desktop (>= sm): Elegant segmented pill buttons
           ========================================================================= */}
        
        {/* Mobile Filter Dropdown */}
        <div className="sm:hidden mb-6 px-2 max-w-xs mx-auto">
          <div className="relative">
            <div className="flex items-center justify-between p-1 bg-[#F0ECE3] border border-[#E8DFD1] rounded-2xl shadow-2xs">
              <div className="flex items-center gap-1.5 pl-3 text-xs font-semibold text-[#775A19] uppercase tracking-wider">
                <SlidersHorizontal className="w-3.5 h-3.5 shrink-0 text-[#775A19]" />
                <span>Filter:</span>
              </div>
              <div className="relative flex-1 max-w-[190px]">
                <select
                  id="mobile-category-filter"
                  value={activeCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full bg-[#FAF6EE] text-[#2C2521] text-xs font-bold py-2 pl-3 pr-8 rounded-xl border border-[#D1C5B4] focus:outline-hidden focus:ring-1 focus:ring-[#775A19] appearance-none cursor-pointer shadow-2xs"
                >
                  {homeCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#775A19] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop & Tablet Category Pills (Zero scrollbar, neatly centered) */}
        <div className="hidden sm:flex items-center justify-center mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 p-1 sm:p-1.5 rounded-full bg-[#F0ECE3] border border-[#E8DFD1] shadow-2xs">
            {homeCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`label-sm relative px-4 sm:px-6 py-2 rounded-full transition-all duration-200 active:scale-95 md:active:scale-100 md:hover:-translate-y-0.5 cursor-pointer whitespace-nowrap text-xs sm:text-sm font-medium select-none -webkit-tap-highlight-color-transparent ${
                    isActive
                      ? "text-[#2C2521] font-semibold bg-[#C5A059] shadow-xs"
                      : "text-[#665D58] hover:text-[#2C2521] hover:bg-[#E8DFD1]/50"
                  }`}
                >
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            CATALOG CARDS:
            - Mobile: Single horizontal scrollable row with NO scrollbar (no-scrollbar)
            - Desktop: High-end 3-column Grid
           ========================================================================= */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="w-[84vw] max-w-[340px] md:w-auto md:max-w-none snap-center shrink-0 md:shrink flex flex-col"
            >
              <PackageCard
                pkg={pkg}
                onSelectPackage={onSelectPackage}
              />
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Carousel Indicator Dots (Like Gallery / Editorial Stories) */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
          {filteredPackages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Pindah ke paket ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentCardIndex === idx
                  ? 'w-6 bg-[#C5A059]'
                  : 'w-1.5 bg-[#D1C5B4] hover:bg-[#A69E93]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
