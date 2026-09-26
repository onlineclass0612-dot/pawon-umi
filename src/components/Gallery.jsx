import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const galleryItems = [
  {
    id: 1,
    title: "Jamuan Prasmanan Agung Rajapatni",
    image: "/images/hero_catering_buffet.webp",
    description: "Penataan chafing dish tembaga keemasan dengan sentuhan bunga segar dan aksen batik untuk perayaan formal dan korporat."
  },
  {
    id: 2,
    title: "Tumpeng Mahligai Rempah Nusantara",
    image: "/images/tumpeng_nusantara.webp",
    description: "Karya seni tumpeng kuning bertingkat di atas tampah bambu berhias lipatan daun pisang dan ukiran sayuran segar tradisional."
  },
  {
    id: 3,
    title: "Artisanal Bento Liwet & Executive Box",
    image: "/images/nasibox_premium.webp",
    description: "Kemasan bento kraft ramah lingkungan dengan sekat elegan higienis, disiapkan khusus untuk rapat direksi dan acara privat."
  },
  {
    id: 4,
    title: "Resepsi Pernikahan Kirana Heritage",
    image: "/images/wedding_catering_event.webp",
    description: "Harmoni jamuan pernikahan ratusan tamu dengan tim pramusaji profesional berseragam rapi serta tata meja berstandar bintang lima."
  },
  {
    id: 5,
    title: "Coffee Break & Kudapan Priyayi",
    image: "/images/gallery_dessert.webp",
    description: "Sajian kue lapis legit, jajanan pasar keraton, tartlet buah segar, dan live espresso corner untuk menyegarkan jeda konferensi formal."
  },
  {
    id: 6,
    title: "Jamuan Meja Panjang VIP Gala Dinner",
    image: "/images/gallery_banquet.webp",
    description: "Dekorasi meja panjang berhias untaian mawar putih dan sedap malam, alat makan bersepuh emas, dan suasana lilin temaram."
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
    <section id="galeri" className="py-16 sm:py-20 md:py-28 bg-[#F5F3EF] border-b border-[#E8DFD1] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF9F5] border border-[#D1C5B4] text-[#775A19]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="label-sm text-[#4E4639]">Dokumentasi Jamuan & Acara</span>
          </div>

          <h2 className="headline-md text-[#2C2521]">
            Galeri Mahakarya Pawon Umi
          </h2>

          <p className="body-md text-[#4E4639]">
            Potret kehangatan dan keanggunan hidangan kami dalam berbagai momen berharga, mulai dari syukuran keluarga intim hingga pesta resepsi agung.
          </p>
        </motion.div>

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
                className="w-[82vw] snap-center shrink-0 group relative rounded-[0.5rem] overflow-hidden bg-[#E8DFD1] border border-[#E8DFD1] shadow-2xs active:scale-[0.99] transition-transform cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/90 via-[#1B1C1A]/20 to-transparent" />
                  
                  {/* Zoom Indicator */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#1B1C1A]/60 backdrop-blur-sm text-white flex items-center justify-center">
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

        {/* Versi Tablet & Desktop: Grid 3 Kolom Elegan */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-[0.5rem] overflow-hidden bg-[#E8DFD1] border border-[#E8DFD1] hover:border-[#C5A059] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-end"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/90 via-[#1B1C1A]/20 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-95" />

                {/* Hover Quick Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#1B1C1A]/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <Maximize2 className="w-3.5 h-3.5" />
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
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeLightboxIndex !== null && galleryItems[activeLightboxIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#1B1C1A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
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
            <motion.div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-title"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full bg-[#FBF9F5] rounded-[0.75rem] overflow-hidden border border-[#D1C5B4] shadow-2xl relative flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[65vh] sm:max-h-[70vh] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={galleryItems[activeLightboxIndex].image}
                  alt={galleryItems[activeLightboxIndex].title}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
