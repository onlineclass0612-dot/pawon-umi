import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { businessInfo } from '../data/cateringData';
import BrandLogo from './BrandLogo';

export default function Navbar({ onNavigateHome, currentView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold 20px for instantaneous, smooth transition upon starting scroll
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, hash) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(hash);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled || isOpen
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8DFD1] shadow-xs'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-22 gap-4">
          
          {/* Brand Identity - Artisanal & Decorative */}
          <a
            href="#beranda"
            onClick={(e) => handleNav(e, '#beranda')}
            className="group min-w-0"
          >
            <BrandLogo variant="light" size="md" />
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
              href={`https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Dapur%20Rasa,%20saya%20ingin%20konsultasi%20menu%20dan%20jadwal%20acara.`}
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

      {/* Mobile & Tablet Drawer with Smooth Hardware-Accelerated CSS Slide */}
      <div
        className={`lg:hidden bg-[#FBF9F5] border-b border-[#E8DFD1] px-5 sm:px-6 space-y-2 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
          isOpen ? 'max-h-96 py-4 sm:py-5 opacity-100 translate-y-0' : 'max-h-0 py-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <a
          href="#beranda"
          onClick={(e) => {
            setIsOpen(false);
            handleNav(e, '#beranda');
          }}
          aria-current={currentView === 'home' ? 'page' : undefined}
          className={`block label-md whitespace-nowrap py-2.5 px-3 rounded-[0.25rem] border-b border-[#EFEEEA] transition-all duration-150 active:bg-[#F2ECE1] active:translate-x-1 ${
            currentView === 'home' ? 'text-[#775A19] font-semibold bg-[#F5F3EF]' : 'text-[#665D58]'
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
          className={`block label-md whitespace-nowrap py-2.5 px-3 rounded-[0.25rem] border-b border-[#EFEEEA] transition-all duration-150 active:bg-[#F2ECE1] active:translate-x-1 ${
            currentView === 'catalog' ? 'text-[#775A19] font-semibold bg-[#F5F3EF]' : 'text-[#665D58]'
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
          className="block label-md whitespace-nowrap text-[#665D58] py-2.5 px-3 rounded-[0.25rem] border-b border-[#EFEEEA] transition-all duration-150 active:bg-[#F2ECE1] active:translate-x-1"
        >
          Ulasan
        </a>
        <a
          href="#galeri"
          onClick={(e) => {
            setIsOpen(false);
            handleNav(e, '#galeri');
          }}
          className="block label-md whitespace-nowrap text-[#665D58] py-2.5 px-3 rounded-[0.25rem] border-b border-[#EFEEEA] transition-all duration-150 active:bg-[#F2ECE1] active:translate-x-1"
        >
          Galeri
        </a>
        <a
          href="#kontak"
          onClick={(e) => {
            setIsOpen(false);
            handleNav(e, '#kontak');
          }}
          className="block label-md whitespace-nowrap text-[#665D58] py-2.5 px-3 rounded-[0.25rem] transition-all duration-150 active:bg-[#F2ECE1] active:translate-x-1"
        >
          Kontak
        </a>
      </div>
    </header>
  );
}
