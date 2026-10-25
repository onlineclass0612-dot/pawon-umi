import React, { useState, useRef, useEffect } from 'react';
import { Star, Maximize2, X, ChevronLeft, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import SectionHeader from './SectionHeader';

const editorialStories = [
  {
    id: 1,
    title: "Resepsi Kirana Heritage di Plataran Cilandak",
    category: "Resepsi Pernikahan",
    image: "/images/wedding_catering_event.webp",
    rating: 5,
    clientName: "Clarissa Dananjaya & Hendra",
    clientRole: "Pengantin Baru",
    eventDetail: "Pernikahan 600 Tamu",
    quote: "Dapur Rasa benar-benar melebihi ekspektasi kami. Meja prasmanan ditata begitu cantik dengan bunga segar dan chafing dish tembaga keemasan. Semua tamu memuji kelezatan rendang dan kambing gulingnya yang luar biasa empuk!",
    caption: "Tata jamuan resepsi pernikahan bertema keagungan tradisi Nusantara dengan tim pramusaji profesional berseragam rapi."
  },
  {
    id: 2,
    title: "Jamuan Meja Panjang VIP Gala Dinner Direksi",
    category: "VIP Corporate Gala",
    image: "/images/gallery_banquet.webp",
    rating: 5,
    clientName: "Raditya Prasetyo, S.E.",
    clientRole: "Head of Corporate Affairs di Danareksa",
    eventDetail: "Annual Board Dinner",
    quote: "Setiap ada jamuan direksi dan gala dinner VIP korporat, kami selalu mempercayakannya ke Dapur Rasa. Tata meja panjangnya sangat berkelas, higienis, dan cita rasa rempahnya sangat otentik.",
    caption: "Dekorasi meja panjang berhias untaian bunga segar, alat makan bersepuh emas, dan atmosfer pencahayaan temaram hangat."
  },
  {
    id: 3,
    title: "Tumpeng Mahligai Rempah Nusantara",
    category: "Syukuran & Tasyakuran",
    image: "/images/tumpeng_nusantara.webp",
    rating: 5,
    clientName: "Dr. Farah Amalia, Sp.A",
    clientRole: "Tuan Rumah Tasyakuran & Peresmian",
    eventDetail: "Tasyakuran Keluarga Besar",
    quote: "Tumpeng bertingkat dari Dapur Rasa jadi pusat perhatian di acara kami. Ukiran janur dan sayurannya berseni tinggi, porsi melimpah, dan bumbu ayam panggangnya meresap sempurna.",
    caption: "Karya seni tumpeng kuning bertingkat di atas tampah bambu berhias lipatan daun pisang dan ukiran sayuran segar."
  },
  {
    id: 4,
    title: "Artisanal Bento Liwet & Executive Box",
    category: "Executive Luncheon",
    image: "/images/nasibox_premium.webp",
    rating: 5,
    clientName: "Ibu Maya Puspitasari",
    clientRole: "Senior Partner di Assegaf & Partners",
    eventDetail: "International Client Meeting",
    quote: "Bento box katering paling rapi dan mewah yang pernah kami pesan untuk rapat klien asing. Kemasan ramah lingkungan, tiba dalam kondisi hangat, dan rasa sambal goreng atinya sangat istimewa.",
    caption: "Kemasan bento kraft ramah lingkungan dengan kompartemen sekat elegan dan higienis berstandar eksekutif."
  },
  {
    id: 5,
    title: "Jamuan Prasmanan Agung Rajapatni",
    category: "Prasmanan Akbar",
    image: "/images/hero_catering_buffet.webp",
    rating: 5,
    clientName: "Bpk. Ir. H. Bambang Soetrisno",
    clientRole: "Ketua Panitia Halal Bihalal",
    eventDetail: "Silaturahmi Akbar 450 Porsi",
    quote: "Penyajian chafing dish roll-top tembaga emasnya membuat ruang pesta terlihat agung. Pramusaji sangat sigap refill hidangan tanpa jeda, dan tidak ada piring kotor yang menumpuk.",
    caption: "Harmoni 8 sajian utama Nusantara dengan penataan meja prasmanan dua jalur berstandar higienis tinggi."
  },
  {
    id: 6,
    title: "Coffee Break & Kudapan Priyayi",
    category: "Coffee Break & Dessert",
    image: "/images/gallery_dessert.webp",
    rating: 5,
    clientName: "Nadia Anindita",
    clientRole: "Lead Organizer, Jakarta Creative Expo",
    eventDetail: "Konferensi 3 Hari",
    quote: "Snack corner-nya dipuji semua kurator dan pembicara seminar. Lapis legitnya lembut, pie buah segar, dan racikan kopi Nusantara hangatnya luar biasa memikat.",
    caption: "Sajian kue lapis legit, jajanan pasar keraton, tartlet buah segar, dan live coffee corner untuk konferensi formal."
  }
];

export default function EditorialStories() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    if (e) e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % editorialStories.length);
  };

  const prevLightbox = (e) => {
    if (e) e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev - 1 + editorialStories.length) % editorialStories.length);
  };

  // Lock body scroll when Lightbox is active
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  // Track active slide on mobile horizontal scroll
  const handleMobileScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth > 0) {
      const activeIdx = Math.round(scrollLeft / (clientWidth * 0.85));
      setCurrentSlideIndex(Math.min(activeIdx, editorialStories.length - 1));
    }
  };

  const scrollToIndex = (idx) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth * 0.85;
    scrollContainerRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth'
    });
    setCurrentSlideIndex(idx);
  };

  return (
    <section
      id="dokumentasi"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#F5EFE6] via-[#FAF6EE] to-[#EFE6D6] md:bg-[linear-gradient(135deg,#F5EFE5_0%,#FBF9F5_45%,#F8F2E7_75%,#EFE6D6_100%)] border-b border-[#E8DFD1] w-full overflow-hidden"
    >
      {/* Anchor targets to preserve backward compatibility for #ulasan and #galeri */}
      <span id="ulasan" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <span id="galeri" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Pure CSS Luxury Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.12)_0%,transparent_65%)]" />
        <div className="absolute -bottom-24 left-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(119,90,25,0.08)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header */}
        <SectionHeader
          badge="Dokumentasi & Ulasan Nyata"
          title="Kisah Jamuan & Bukti Kelezatan"
          subtitle="Setiap hidangan memiliki cerita. Temukan bagaimana Dapur Rasa menyempurnakan hari istimewa para tuan rumah melalui paduan rempah warisan dan estetika meja saji."
          className="mb-10 sm:mb-14"
        />

        {/* =========================================================================
            EDITORIAL STORY CARDS
            - Mobile: Smooth Horizontal Snap Carousel with peek-ahead cards
            - Desktop: High-End 3-Column Grid with hover lifts & zoom reveal
           ========================================================================= */}
        <div
          ref={scrollContainerRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible"
        >
          {editorialStories.map((story, index) => (
            <article
              key={story.id}
              className="w-[85vw] max-w-sm shrink-0 snap-center md:w-auto md:max-w-none group rounded-[0.5rem] bg-white md:bg-white/95 border border-[#E8DFD1] overflow-hidden flex flex-col justify-between transition-transform duration-150 active:scale-[0.985] md:active:scale-100 md:transition-all md:duration-300 md:hover:border-[#C5A059] md:hover:shadow-[0_20px_40px_-15px_rgba(119,90,25,0.20)] md:hover:-translate-y-2 md:will-change-transform relative shadow-2xs"
            >
              <div>
                {/* 1. Visual Photo Header with Click-to-Zoom */}
                <div
                  onClick={() => openLightbox(index)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8DFD1] cursor-pointer"
                  title="Klik untuk melihat foto penuh & dokumentasi acara"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    width="640"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-108"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/85 via-[#1B1C1A]/20 to-transparent opacity-80 md:group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#1B1C1A]/85 text-[#FBF9F5] text-[10.5px] font-medium border border-[#C5A059]/40 backdrop-blur-xs select-none">
                    {story.category}
                  </div>

                  {/* Quick Zoom Indicator (Hover Desktop, Clean Indicator Mobile) */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1B1C1A]/85 text-white flex items-center justify-center opacity-85 md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-300 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>

                  {/* Bottom Photo Caption Banner */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                    <p className="font-serif text-sm font-medium text-[#FFF9F0] line-clamp-1 drop-shadow-xs">
                      {story.title}
                    </p>
                  </div>
                </div>

                {/* 2. Editorial Review Narrative Body */}
                <div className="p-4 sm:p-5 sm:pb-4 space-y-3">
                  {/* Star Rating & Verified Label */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C5A059]">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                      ))}
                      <span className="label-sm text-xs font-semibold text-[#2C2521] ml-1.5">
                        5.0
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[10.5px] text-[#775A19] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Ulasan Terverifikasi</span>
                    </div>
                  </div>

                  {/* Client Quote */}
                  <p className="body-sm italic text-[#2C2521] text-xs sm:text-[13px] leading-relaxed line-clamp-4">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              {/* 3. Client Attribution Footer */}
              <div className="px-4 py-3.5 sm:px-5 bg-[#FAF7F2] border-t border-[#E8DFD1] flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-serif font-medium text-xs sm:text-sm text-[#2C2521] truncate">
                    {story.clientName}
                  </h4>
                  <p className="label-sm text-[#7F7667] normal-case text-[11px] truncate">
                    {story.clientRole}
                  </p>
                </div>

                <span className="label-sm px-2.5 py-0.5 rounded-full bg-[#EADDD7] text-[#6A615C] text-[10px] sm:text-[10.5px] whitespace-nowrap shrink-0">
                  {story.eventDetail}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Horizontal Carousel Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
          {editorialStories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Pindah ke cerita jamuan ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlideIndex === idx
                  ? 'w-6 bg-[#C5A059]'
                  : 'w-1.5 bg-[#D1C5B4] hover:bg-[#A69E93]'
              }`}
            />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD1] text-xs sm:text-sm text-[#4E4639]">
            <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/40 shrink-0" />
            <span>Dipercaya lebih dari <strong>2.800+</strong> perhelatan istimewa dengan kepuasan <strong>99.6%</strong>.</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          FULLSCREEN LIGHTBOX MODAL WITH REVIEW DETAILS
         ========================================================================= */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Dokumentasi Acara & Ulasan Klien"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#1B1C1A]/85 backdrop-blur-sm transition-opacity duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Tutup pratinjau dokumentasi"
            className="absolute top-4 right-4 z-60 p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevLightbox}
            aria-label="Dokumentasi sebelumnya"
            className="hidden sm:flex absolute left-4 z-60 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextLightbox}
            aria-label="Dokumentasi berikutnya"
            className="hidden sm:flex absolute right-4 z-60 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Modal Window */}
          <div
            className="relative max-w-4xl w-full bg-[#FBF9F5] rounded-[0.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Visual Image Column */}
            <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[240px] max-h-[50vh] md:max-h-none">
              <img
                src={editorialStories[activeLightboxIndex].image}
                alt={editorialStories[activeLightboxIndex].title}
                width="1000"
                height="750"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Editorial Story Column */}
            <div className="md:w-2/5 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-5 bg-[#FBF9F5]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="label-sm px-2.5 py-0.5 rounded-full bg-[#EADDD7] text-[#6A615C]">
                    {editorialStories[activeLightboxIndex].category}
                  </span>
                  
                  <div className="flex items-center gap-0.5 text-[#C5A059]">
                    {[...Array(editorialStories[activeLightboxIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                </div>

                <h3 className="headline-sm text-lg sm:text-xl text-[#2C2521] font-medium leading-snug">
                  {editorialStories[activeLightboxIndex].title}
                </h3>

                <p className="body-sm italic text-[#4E4639] text-xs sm:text-sm leading-relaxed border-l-2 border-[#C5A059] pl-3 py-0.5">
                  "{editorialStories[activeLightboxIndex].quote}"
                </p>

                <p className="body-sm text-xs text-[#7F7667]">
                  {editorialStories[activeLightboxIndex].caption}
                </p>
              </div>

              {/* Client Verification Footer */}
              <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-sm text-[#2C2521]">
                    {editorialStories[activeLightboxIndex].clientName}
                  </h4>
                  <p className="label-sm text-[#7F7667] normal-case text-xs">
                    {editorialStories[activeLightboxIndex].clientRole}
                  </p>
                </div>

                <span className="label-sm text-xs text-[#775A19] font-medium">
                  {editorialStories[activeLightboxIndex].eventDetail}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
