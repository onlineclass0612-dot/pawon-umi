import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const galleryItems = [
  {
    id: 1,
    title: "Jamuan Prasmanan Agung Rajapatni",
    image: "/images/hero_catering_buffet.webp",
    description: "Penataan wadah pemanas keemasan mewah dengan sentuhan bunga segar untuk perayaan pernikahan dan acara kantor."
  },
  {
    id: 2,
    title: "Tumpeng Mahligai Rempah Nusantara",
    image: "/images/tumpeng_nusantara.webp",
    description: "Karya seni tumpeng kuning bertingkat di atas tampah bambu berhias lipatan daun pisang dan ukiran sayuran segar tradisional."
  },
  {
    id: 3,
    title: "Nasi Box Liwet & Menu Spesial Daging",
    image: "/images/nasibox_premium.webp",
    description: "Kemasan nasi box tebal ramah lingkungan bersekat rapi dan higienis, disiapkan khusus untuk rapat kantor dan acara keluarga."
  },
  {
    id: 4,
    title: "Resepsi Pernikahan Tradisional Elegan",
    image: "/images/wedding_catering_event.webp",
    description: "Harmoni jamuan pernikahan ratusan tamu dengan tim pramusaji profesional berseragam rapi serta tata meja yang indah."
  },
  {
    id: 5,
    title: "Coffee Break & Aneka Kudapan",
    image: "/images/gallery_dessert.webp",
    description: "Sajian kue lapis legit, jajanan pasar tradisional, pie buah segar, dan kopi seduh untuk acara seminar dan pertemuan."
  },
  {
    id: 6,
    title: "Jamuan Meja Panjang Acara Formal",
    image: "/images/gallery_banquet.webp",
    description: "Dekorasi meja panjang berhias untaian mawar putih dan sedap malam, alat makan elegan, dan suasana hangat."
  }
];

export default function Gallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
  };

  const nextLightbox = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  // Mobile Carousel scroll handlers
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth * 0.82;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(Math.min(Math.max(newIndex, 0), galleryItems.length - 1));
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const cardWidth = containerWidth * 0.82 + 14; // card width + gap
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollPrev = () => {
    scrollToIndex(Math.max(currentIndex - 1, 0));
  };

  const scrollNext = () => {
    scrollToIndex(Math.min(currentIndex + 1, galleryItems.length - 1));
  };

  return (
    <section
      id="galeri"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#F2ECE0] via-[#FAF7F1] to-[#EDE3D2] md:bg-[linear-gradient(135deg,#F3ECE0_0%,#FBF9F5_45%,#F6EFE3_75%,#EBE0CF_100%)] border-b border-[#E8DFD1] w-full overflow-hidden"
    >
      {/* Pure CSS Luxury Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.12)_0%,transparent_65%)]" />
        <div className="absolute -bottom-24 -right-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(119,90,25,0.08)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {/* Reusable Section Header */}
        <SectionHeader
          badge="Dokumentasi Jamuan & Acara"
          title="Galeri Mahakarya Dapur Rasa"
          subtitle="Potret kehangatan dan keanggunan hidangan kami dalam berbagai momen berharga, mulai dari syukuran keluarga intim hingga pesta resepsi agung."
        />

        {/* Versi Mobile: Carousel Horizontal yang Bisa Digeser Kanan/Kiri */}
        <div className="block sm:hidden space-y-4">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 -mx-4 px-4 no-scrollbar touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="w-[82vw] snap-center shrink-0 group relative rounded-[0.5rem] overflow-hidden bg-[#E8DFD1] border border-[#E8DFD1] shadow-2xs active:scale-[0.98] transition-transform duration-150 cursor-pointer select-none"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="640"
                    height="480"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/90 via-[#1B1C1A]/20 to-transparent" />
                  
                  {/* Zoom Indicator */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#1B1C1A]/80 text-white flex items-center justify-center">
                    <Maximize2 className="w-3 h-3" />
                  </div>

                  {/* Caption Content (Tanpa Badge Kategori) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-1">
                    <h3 className="headline-sm text-sm font-medium text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="body-sm text-[11.5px] text-white/85 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls: Arrows & Dot Indicators */}
          <div className="flex items-center justify-between pt-1 px-1">
            <button
              onClick={scrollPrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full border border-[#D1C5B4] bg-[#FBF9F5] text-[#2C2521] shadow-2xs transition-all ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#C5A059] active:scale-95'
              }`}
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 text-[#775A19]" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {galleryItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-6 bg-[#C5A059]'
                      : 'w-1.5 bg-[#D1C5B4]'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              disabled={currentIndex === galleryItems.length - 1}
              className={`p-2 rounded-full border border-[#D1C5B4] bg-[#FBF9F5] text-[#2C2521] shadow-2xs transition-all ${
                currentIndex === galleryItems.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#C5A059] active:scale-95'
              }`}
              aria-label="Foto selanjutnya"
            >
              <ChevronRight className="w-4 h-4 text-[#775A19]" />
            </button>
          </div>

          <p className="text-center text-[11px] text-[#7F7667] pt-1">
            Geser foto ke kanan atau kiri untuk menjelajahi galeri
          </p>
        </div>

        {/* Versi Tablet & Desktop: Grid 3 Kolom Elegan (GPU-Accelerated CSS) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-[0.5rem] overflow-hidden bg-[#E8DFD1] border border-[#E8DFD1] shadow-2xs transition-all duration-300 md:hover:border-[#C5A059] md:hover:shadow-[0_20px_35px_-15px_rgba(119,90,25,0.25)] md:hover:-translate-y-2 md:will-change-transform active:scale-[0.985] md:active:scale-100 cursor-pointer flex flex-col justify-end"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width="640"
                  height="480"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/90 via-[#1B1C1A]/20 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-95" />

                {/* Hover Quick Zoom Icon with Desktop Scale Animation */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#1B1C1A]/85 text-white flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>

                {/* Bottom Caption Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white space-y-1.5">
                  <h3 className="headline-sm text-base sm:text-lg text-white font-medium group-hover:text-[#FBF9F5] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="body-sm text-xs text-white/80 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Pure Lightweight CSS */}
      {activeLightboxIndex !== null && galleryItems[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-[#1B1C1A]/95 md:backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer transition-opacity duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#2C2521]/80 hover:bg-[#C5A059] text-white hover:text-[#2C2521] transition-colors border border-white/20 cursor-pointer"
            aria-label="Tutup preview galeri"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevLightbox}
            className="absolute left-3 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-[#2C2521]/80 hover:bg-[#C5A059] text-white hover:text-[#2C2521] transition-colors border border-white/20 cursor-pointer"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-3 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-[#2C2521]/80 hover:bg-[#C5A059] text-white hover:text-[#2C2521] transition-colors border border-white/20 cursor-pointer"
            aria-label="Foto selanjutnya"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Lightbox Center Card */}
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="max-w-4xl w-full bg-[#FBF9F5] rounded-[0.75rem] overflow-hidden border border-[#D1C5B4] shadow-2xl relative flex flex-col cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] sm:max-h-[70vh] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={galleryItems[activeLightboxIndex].image}
                alt={galleryItems[activeLightboxIndex].title}
                width="1000"
                height="750"
                decoding="async"
                className="w-full h-full max-h-[65vh] sm:max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#FBF9F5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#E8DFD1]">
              <div className="space-y-1 max-w-xl">
                <h3 id="lightbox-title" className="headline-sm text-xl text-[#2C2521] font-medium">
                  {galleryItems[activeLightboxIndex].title}
                </h3>
                <p className="body-sm text-xs sm:text-sm text-[#4E4639]">
                  {galleryItems[activeLightboxIndex].description}
                </p>
              </div>

              <div className="label-sm text-[#7F7667] text-xs shrink-0 self-end sm:self-center">
                {activeLightboxIndex + 1} / {galleryItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
