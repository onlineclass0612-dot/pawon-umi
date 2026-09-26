import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessInfo } from '../data/cateringData';

export default function Navbar({ onNavigateHome, currentView }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (e, hash) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(hash);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-[#E8DFD1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-22 gap-4">
          
          {/* Brand Identity - Artisanal & Decorative */}
          <a
            href="#beranda"
            onClick={(e) => handleNav(e, '#beranda')}
            className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0"
          >
            {/* Brand Logo - Medallion Frame with Gold Ring */}
            <div className="relative shrink-0">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#C5A059] via-[#E8DFD1] to-[#C5A059]/40 shadow-xs group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo.webp"
                  alt="Pawon Umi Logo"
                  width="56"
                  height="56"
                  loading="eager"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-full border border-[#C5A059]/40 bg-[#FBF9F5]"
                />
              </div>
            </div>
            
            {/* Brand Typography with Decorative P & U */}
            <div className="min-w-0 flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-cinzel font-medium text-lg sm:text-2xl tracking-wider text-[#2C2521] whitespace-nowrap inline-flex items-baseline">
                  <span className="font-accent text-2xl sm:text-[2.1rem] text-[#775A19] font-normal leading-none mr-0.5 select-none">
                    P
                  </span>
                  <span>awon</span>
                  <span className="font-accent text-2xl sm:text-[2.1rem] text-[#775A19] font-normal leading-none ml-1.5 sm:ml-2 mr-0.5 select-none">
                    U
                  </span>
                  <span>mi</span>
                </span>
                <span className="hidden xs:inline-block label-sm px-2 py-0.5 rounded-full bg-[#EADDD7] text-[#6A615C] text-[10px] sm:text-[10.5px] whitespace-nowrap self-center">
                  Catering
                </span>
              </div>
              <p className="hidden sm:block label-sm text-[#7F7667] normal-case tracking-normal whitespace-nowrap text-[11px] sm:text-[11.5px] mt-0.5">
                Bespoke Dining & Fine Hospitality
              </p>
            </div>
          </a>

          {/* Desktop & Laptop Navigation - strictly ordered: Beranda -> Catalog -> Ulasan -> Galeri -> Kontak */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 shrink-0" aria-label="Navigasi Utama">
            <a
              href="#beranda"
              onClick={(e) => handleNav(e, '#beranda')}
              aria-current={currentView === 'home' ? 'page' : undefined}
              className={`label-md whitespace-nowrap transition-colors ${
                currentView === 'home' ? 'text-[#775A19] font-semibold' : 'text-[#665D58] hover:text-[#775A19]'
              }`}
            >
              Beranda
            </a>
            <a
              href="#catalog"
              onClick={(e) => handleNav(e, '#catalog')}
              aria-current={currentView === 'catalog' ? 'page' : undefined}
              className={`label-md whitespace-nowrap transition-colors ${
                currentView === 'catalog' ? 'text-[#775A19] font-semibold' : 'text-[#665D58] hover:text-[#775A19]'
              }`}
            >
              Catalog
            </a>
            <a
              href="#ulasan"
              onClick={(e) => handleNav(e, '#ulasan')}
              className="label-md whitespace-nowrap text-[#665D58] hover:text-[#775A19] transition-colors"
            >
              Ulasan
            </a>
            <a
              href="#galeri"
              onClick={(e) => handleNav(e, '#galeri')}
              className="label-md whitespace-nowrap text-[#665D58] hover:text-[#775A19] transition-colors"
            >
              Galeri
            </a>
            <a
              href="#kontak"
              onClick={(e) => handleNav(e, '#kontak')}
              className="label-md whitespace-nowrap text-[#665D58] hover:text-[#775A19] transition-colors"
            >
              Kontak
            </a>
          </nav>

          {/* Desktop Primary Action */}
          <div className="hidden lg:flex items-center shrink-0">
            <a 
              href={`https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Pawon%20Umi,%20saya%20ingin%20konsultasi%20menu%20dan%20jadwal%20acara.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap shrink-0 !text-xs xl:!text-sm"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">Konsultasi Jamuan</span>
            </a>
          </div>

          {/* Tablet & Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#2C2521] hover:text-[#775A19] transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer with Smooth Motion Slide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#FBF9F5] border-b border-[#E8DFD1] px-5 sm:px-6 py-5 sm:py-6 space-y-4 overflow-hidden"
          >
            <a
              href="#beranda"
              onClick={(e) => {
                setIsOpen(false);
                handleNav(e, '#beranda');
              }}
              aria-current={currentView === 'home' ? 'page' : undefined}
              className={`block label-md whitespace-nowrap py-2 border-b border-[#EFEEEA] ${
                currentView === 'home' ? 'text-[#775A19] font-semibold' : 'text-[#665D58]'
              }`}
            >
              Beranda
            </a>
            <a
              href="#catalog"
              onClick={(e) => {
                setIsOpen(false);
                handleNav(e, '#catalog');
              }}
              aria-current={currentView === 'catalog' ? 'page' : undefined}
              className={`block label-md whitespace-nowrap py-2 border-b border-[#EFEEEA] ${
                currentView === 'catalog' ? 'text-[#775A19] font-semibold' : 'text-[#665D58]'
              }`}
            >
              Catalog
            </a>
            <a
              href="#ulasan"
              onClick={(e) => {
                setIsOpen(false);
                handleNav(e, '#ulasan');
              }}
              className="block label-md whitespace-nowrap text-[#665D58] py-2 border-b border-[#EFEEEA]"
            >
              Ulasan
            </a>
            <a
              href="#galeri"
              onClick={(e) => {
                setIsOpen(false);
                handleNav(e, '#galeri');
              }}
              className="block label-md whitespace-nowrap text-[#665D58] py-2 border-b border-[#EFEEEA]"
            >
              Galeri
            </a>
            <a
              href="#kontak"
              onClick={(e) => {
                setIsOpen(false);
                handleNav(e, '#kontak');
              }}
              className="block label-md whitespace-nowrap text-[#665D58] py-2"
            >
              Kontak
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
