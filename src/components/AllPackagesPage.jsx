import React, { useState, useMemo, useRef, useEffect } from 'react';
import { menuCategories, packagesData, businessInfo } from '../data/cateringData';
import { ArrowLeft, ArrowUpRight, Info, Sparkles, Users, Check, X, ShieldCheck, ChevronDown, Filter, MessageCircle } from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

export default function AllPackagesPage({ onBack, onSelectPackage }) {
  // Array ID kategori yang dipilih (multi-select). Jika kosong ([]), berarti menampilkan semua kategori.
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleCategory = (catId) => {
    if (catId === 'all') {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((prev) => {
      if (prev.includes(catId)) {
        return prev.filter((id) => id !== catId);
      } else {
        return [...prev, catId];
      }
    });
  };

  const getCategoryCount = (catId) => {
    if (catId === 'all') return packagesData.length;
    return packagesData.filter((p) => p.category === catId).length;
  };

  const dropdownLabel = useMemo(() => {
    if (selectedCategories.length === 0) {
      return 'Semua Sajian';
    }
    if (selectedCategories.length === 1) {
      const cat = menuCategories.find((c) => c.id === selectedCategories[0]);
      return cat ? cat.name : '1 Kategori Dipilih';
    }
    return `${selectedCategories.length} Kategori Dipilih`;
  }, [selectedCategories]);

  const filteredPackages = useMemo(() => {
    if (selectedCategories.length === 0) {
      return packagesData;
    }
    return packagesData.filter((pkg) => selectedCategories.includes(pkg.category));
  }, [selectedCategories]);

  // Progressive card rendering: render initial 6 visible cards on frame 1 to keep TBT < 100ms,
  // then mount remaining cards below the fold
  const [renderedCount, setRenderedCount] = useState(6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderedCount(packagesData.length);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-[#2C2521] flex flex-col"
    >
      
      {/* Catalog Header Banner with CSS Luxury Editorial Typography (Zero Image Dependency for Instant 100% Green LCP) */}
      <section className="relative bg-[#1B1C1A] border-b border-[#332C24] pt-10 pb-14 sm:pt-12 sm:pb-16 min-h-[460px] sm:min-h-[420px] flex flex-col justify-center overflow-hidden">
        
        {/* Pure CSS Luxury Ambient Lighting (0 KB Image Payload, 100% GPU Layer) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle top-center radial gold halo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.16)_0%,transparent_70%)]" />
          {/* Bottom-right ambient warm glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(119,90,25,0.14)_0%,transparent_65%)]" />
          {/* Subtle hairline geometric texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#E9C176_1px,transparent_1px),linear-gradient(to_bottom,#E9C176_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Navigation Button */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C2521]/80 hover:bg-[#C5A059] border border-white/20 hover:border-[#C5A059] text-[#FBF9F5] hover:text-[#1B1C1A] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-xs font-medium cursor-pointer shadow-lg backdrop-blur-md group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Kembali ke Beranda</span>
            </button>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C2521]/90 border border-[#C5A059]/60 text-[#E9C176] shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="label-sm text-[#F5F3EF] tracking-wider text-[11px] uppercase">Katalog Lengkap Jamuan</span>
            </div>

            <h1 className="headline-lg font-serif font-medium text-white drop-shadow-sm text-2xl sm:text-4xl md:text-5xl leading-tight">
              Seluruh Pilihan Paket <span className="italic font-normal text-[#E9C176]">Katering Pawon Umi</span>
            </h1>

            <p className="body-md text-sm sm:text-base text-[#E8DFD1]/90 leading-relaxed max-w-2xl">
              Jelajahi seluruh kurasi hidangan mulai dari prasmanan agung, artisanal rice box, tumpeng megah tradisional, coffee break priyayi, hingga paket resepsi pernikahan lengkap bersertifikasi Halal MUI resmi.
            </p>

            {/* Quick Highlights: Tanpa Border Luar, Border Dalam Lebih Tebal (Mobile: 1 Kolom; Desktop/Tablet: 1 Baris; Background Transparan) */}
            <div className="pt-2">
              <div className="inline-flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-white/35 bg-transparent text-xs sm:text-sm text-[#E8DFD1]">
                
                {/* Badge 1: Halal */}
                <div className="flex items-center gap-2 py-2 sm:py-0 sm:pr-4 sm:first:pl-0 bg-transparent">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="font-medium whitespace-nowrap">Halal MUI Resmi</span>
                </div>

                {/* Badge 2: Higienis */}
                <div className="flex items-center gap-2 py-2 sm:py-0 sm:px-4 bg-transparent">
                  <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="font-medium whitespace-nowrap">Higiene Sanitasi</span>
                </div>

                {/* Badge 3: Konsultasi */}
                <div className="flex items-center gap-2 py-2 sm:py-0 sm:pl-4 bg-transparent">
                  <MessageCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="font-medium whitespace-nowrap">Konsultasi Menu</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Filter Bar Section (Tanpa Search Bar, Multi-select Kategori) */}
      <section
        className="sticky top-20 z-30 bg-[#FBF9F5]/98 border-b border-[#E8DFD1] py-4 shadow-2xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category Dropdown Multi-Select */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-[0.25rem] bg-white border border-[#E8DFD1] hover:border-[#C5A059] text-xs sm:text-sm text-[#2C2521] shadow-2xs transition-all cursor-pointer min-w-[240px] sm:min-w-[280px]"
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
              >
                <div className="flex items-center gap-2 truncate">
                  <Filter className="w-3.5 h-3.5 text-[#775A19] shrink-0" />
                  <span className="text-[#7F7667] text-xs">Pilih Kategori:</span>
                  <span className="font-semibold text-[#2C2521] truncate">{dropdownLabel}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {selectedCategories.length > 0 && (
                    <span className="w-5 h-5 rounded-full bg-[#C5A059] text-[#2C2521] font-bold text-[10px] flex items-center justify-center">
                      {selectedCategories.length}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 text-[#775A19] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Dropdown Menu Panel (Multi-Select) with Hardware-Accelerated CSS Transition */}
              {isDropdownOpen && (
                <div
                  className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-80 bg-white rounded-[0.375rem] border border-[#D1C5B4] shadow-xl py-1.5 z-50 transition-all duration-200 ease-out"
                >
                  <div className="px-3.5 py-2 border-b border-[#E8DFD1] flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7F7667]">
                      Pilih Kategori (Bisa Lebih Dari 1)
                    </span>
                    {selectedCategories.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setSelectedCategories([])}
                        className="text-[11px] text-[#775A19] hover:underline font-medium cursor-pointer"
                      >
                        Pilih Semua
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto py-1 divide-y divide-[#F5F3EF]">
                    {menuCategories.map((cat) => {
                      const isAllOption = cat.id === 'all';
                      const isChecked = isAllOption
                        ? selectedCategories.length === 0
                        : selectedCategories.includes(cat.id);
                      const count = getCategoryCount(cat.id);

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors cursor-pointer ${
                            isChecked
                              ? 'bg-[#F5F3EF]/80 text-[#2C2521]'
                              : 'text-[#4E4639] hover:bg-[#FBF9F5]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            {/* Custom Checkbox */}
                            <div className={`w-4 h-4 rounded-[0.2rem] border flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-[#C5A059] border-[#C5A059] text-[#2C2521]'
                                : 'border-[#D1C5B4] bg-white'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className={`truncate ${isChecked ? 'font-semibold text-[#2C2521]' : 'text-[#4E4639]'}`}>
                              {cat.name}
                            </span>
                          </div>

                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#E8DFD1]/60 text-[#665D58] font-normal shrink-0">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Dropdown Menu Footer */}
                  <div className="px-3.5 py-2 bg-[#FAF8F5] border-t border-[#E8DFD1] flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[#7F7667]">
                      {selectedCategories.length === 0
                        ? 'Menampilkan semua paket'
                        : `${selectedCategories.length} kategori dipilih`}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-3 py-1 rounded-[0.25rem] bg-[#C5A059] hover:bg-[#B38F48] text-[#2C2521] text-xs font-semibold cursor-pointer shadow-2xs"
                    >
                      Selesai
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Counter Badge */}
            <div className="label-sm text-[#7F7667] text-xs self-start sm:self-center">
              Menampilkan <span className="font-semibold text-[#775A19]">{filteredPackages.length}</span> dari {packagesData.length} Paket
            </div>
          </div>

          {/* Active Filter Indicator Chips (Bila Ada Kategori yang Dipilih) */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-[#7F7667] shrink-0">Filter aktif ({selectedCategories.length}):</span>
              {selectedCategories.map((catId) => {
                const cat = menuCategories.find((c) => c.id === catId);
                if (!cat) return null;
                return (
                  <span
                    key={catId}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#775A19] font-medium"
                  >
                    <span>{cat.name}</span>
                    <button
                      type="button"
                      onClick={() => toggleCategory(catId)}
                      className="hover:text-red-700 cursor-pointer p-0.5"
                      title={`Hapus ${cat.name}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                );
              })}
              <button
                type="button"
                onClick={() => setSelectedCategories([])}
                className="text-xs text-[#7F7667] hover:text-[#775A19] underline cursor-pointer ml-1"
              >
                Reset ke Semua
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Main Catalog Package Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 bg-[#F5F3EF] rounded-[0.75rem] border border-[#E8DFD1] p-8 space-y-4 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#EFEEEA] border border-[#D1C5B4] text-[#775A19] flex items-center justify-center mx-auto">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="headline-sm text-lg font-medium text-[#2C2521]">
              Tidak Ada Paket yang Sesuai
            </h3>
            <p className="body-sm text-xs sm:text-sm text-[#665D58]">
              Tidak ada paket yang sesuai dengan kombinasi kategori yang dipilih.
            </p>
            <button
              onClick={() => setSelectedCategories([])}
              className="btn-secondary !py-2 !px-4 text-xs"
            >
              Reset ke Semua Kategori
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="contents">
              {filteredPackages.slice(0, renderedCount).map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-[#F5F3EF] rounded-[0.5rem] border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C5A059] ${
                    pkg.popular
                      ? 'border-[#C5A059] ring-1 ring-[#C5A059]/40'
                      : 'border-[#E8DFD1]'
                  }`}
                >
                <div>
                  {/* Visual Image */}
                  <div className="relative h-56 overflow-hidden bg-[#E8DFD1]">
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

                    {/* Status Pill Badge - Deep Royal Bronze-Gold Kontras Satu Tema */}
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#775A19] via-[#8C6B1F] to-[#775A19] text-[#FFF9F0] border border-[#E9C176]/70 label-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3.5 h-3.5 text-[#E9C176] fill-[#E9C176] shrink-0" />
                        <span className="font-semibold tracking-wide text-xs">Paling Sering Dipesan</span>
                      </div>
                    )}

                    {/* Minimum Order Pill */}
                    <div className="absolute bottom-3 left-4 bg-[#FBF9F5]/90 backdrop-blur-sm text-[#2C2521] label-sm px-2.5 py-1 rounded-full border border-[#D1C5B4] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#775A19]" />
                      <span>Min. {pkg.minOrder} {pkg.unit}</span>
                    </div>
                  </div>

                  {/* Card Editorial Info */}
                  <div className="p-4 sm:p-6 space-y-4">
                    <div>
                      <h3 className="headline-sm text-xl text-[#2C2521] font-medium">
                        {pkg.name}
                      </h3>
                      <p className="body-sm text-[#4E4639] mt-1.5 line-clamp-2">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="py-3 border-y border-[#E8DFD1] flex items-baseline justify-between">
                      <span className="label-sm text-[#7F7667]">Investasi Jamuan</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-xl sm:text-2xl font-medium text-[#775A19]">
                          {formatRupiah(pkg.price)}
                        </span>
                        <span className="label-sm text-[#7F7667]">/ {pkg.unit}</span>
                      </div>
                    </div>

                    {/* Menu Highlights List */}
                    <div className="space-y-2 pt-1">
                      <span className="label-sm text-[#7F7667] block">
                        Susunan Hidangan Pilihan:
                      </span>
                      <ul className="space-y-2">
                        {pkg.features.slice(0, 5).map((feat, i) => (
                          <li key={i} className="flex items-center text-xs text-[#2C2521]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mr-2" />
                            <span className="truncate">{feat}</span>
                            <span className="dotted-leader" />
                            <span className="label-sm text-[#7F7667] shrink-0">Included</span>
                          </li>
                        ))}
                        {pkg.features.length > 5 && (
                          <li className="label-sm text-[#775A19] pt-1">
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
                    onClick={() => onSelectPackage(pkg)}
                    className="btn-secondary flex-1 text-xs cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Rincian Menu</span>
                  </button>

                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Pawon%20Umi,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Pesan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}

        {/* Bespoke Custom Menu Callout */}
        <div
          className="mt-16 p-6 sm:p-10 rounded-[0.75rem] bg-[#EFEEEA] border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs hover:border-[#C5A059] transition-colors"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="label-sm text-[#775A19] block">Layanan Jamuan Kustom</span>
            <h3 className="headline-sm text-xl text-[#2C2521] font-medium">
              Memerlukan Susunan Menu Khusus atau Diet Spesifik?
            </h3>
            <p className="body-sm text-xs sm:text-sm text-[#4E4639] max-w-xl">
              Executive Chef dan Concierge Pawon Umi dapat mengkreasikan kombinasi hidangan kustom sesuai konsep acara, jumlah tamu, dan preferensi tradisi keluarga Anda.
            </p>
          </div>
          <a
            href={`https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Pawon%20Umi,%20saya%20ingin%20konsultasi%20menu%20kustom%20untuk%20acara%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap shrink-0 !py-3 !px-6 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Konsultasi Menu Kustom</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  );
}
