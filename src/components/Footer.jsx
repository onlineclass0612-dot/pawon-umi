import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { businessInfo } from '../data/cateringData';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#1B1C1A] text-[#DBDAD6] pt-10 sm:pt-16 pb-8 sm:pb-12 border-t border-[#7F7667]/20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP & TABLET LAYOUT (Sitemap 4 Kolom Lengkap untuk Layar Lebar) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#30312E]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="dark" size="md" showTagline={false} />

            <p className="body-sm text-[#CEC5B8] leading-relaxed">
              {businessInfo.subtitle}
            </p>

            {/* Certifications badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              {businessInfo.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-[0.25rem] bg-[#2C2521] border border-[#7F7667]/40 label-sm text-[#C5A059] normal-case">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="label-md text-[#C5A059]">
              Navigasi
            </h4>
            <ul className="space-y-2 body-sm text-sm text-[#CEC5B8]">
              <li><a href="#beranda" className="hover:text-[#C5A059] transition-colors">Beranda</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">Catalog</a></li>
              <li><a href="#ulasan" className="hover:text-[#C5A059] transition-colors">Ulasan</a></li>
              <li><a href="#galeri" className="hover:text-[#C5A059] transition-colors">Galeri</a></li>
              <li><a href="#kontak" className="hover:text-[#C5A059] transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Culinary Offerings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="label-md text-[#C5A059]">
              Koleksi Sajian
            </h4>
            <ul className="space-y-2 body-sm text-sm text-[#CEC5B8]">
              <li><a href="#sajian" className="hover:text-[#C5A059] transition-colors">Prasmanan Pernikahan</a></li>
              <li><a href="#sajian" className="hover:text-[#C5A059] transition-colors">Artisanal Rice Box</a></li>
              <li><a href="#sajian" className="hover:text-[#C5A059] transition-colors">Tumpeng Syukuran Tradisional</a></li>
              <li><a href="#sajian" className="hover:text-[#C5A059] transition-colors">Coffee Break & Kudapan Priyayi</a></li>
              <li><a href="#galeri" className="hover:text-[#C5A059] transition-colors">Live Cooking Food Station</a></li>
            </ul>
          </div>

          {/* Concierge Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="label-md text-[#C5A059]">
              Concierge Jamuan
            </h4>
            <div className="space-y-3 body-sm text-sm text-[#CEC5B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <span className="text-xs">{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs">{businessInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs">{businessInfo.operationalHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE COMPACT LAYOUT (Tampil Khusus di Layar Mobile: Ringkas, Rapi & Elegan) */}
        <div className="block sm:hidden space-y-5 pb-6 border-b border-[#30312E]">
          
          {/* Mobile Brand & Tagline */}
          <BrandLogo variant="dark" size="sm" showTagline={true} />

          {/* Quick Horizontal Nav Bar */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs text-[#CEC5B8] py-1">
            <a href="#beranda" className="hover:text-[#C5A059] transition-colors">Beranda</a>
            <span className="text-[#59534B]">•</span>
            <a href="#catalog" className="hover:text-[#C5A059] transition-colors">Catalog</a>
            <span className="text-[#59534B]">•</span>
            <a href="#ulasan" className="hover:text-[#C5A059] transition-colors">Ulasan</a>
            <span className="text-[#59534B]">•</span>
            <a href="#galeri" className="hover:text-[#C5A059] transition-colors">Galeri</a>
            <span className="text-[#59534B]">•</span>
            <a href="#kontak" className="hover:text-[#C5A059] transition-colors">Kontak</a>
          </div>

          {/* Kontak & Sertifikasi Ringkas */}
          <div className="space-y-2 text-xs text-[#CEC5B8] pt-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="text-[11.5px] text-[#A69E93] truncate">{businessInfo.address}</span>
            </div>
            
            <div className="flex items-center justify-between pt-1">
              <a 
                href={`https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Dapur%20Rasa,%20saya%20ingin%20konsultasi%20layanan%20katering.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C5A059] font-medium hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+62 812-3456-7890</span>
              </a>

              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[0.2rem] bg-[#2C2521] border border-[#7F7667]/30 text-[10px] text-[#C5A059]">
                <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                <span>Halal MUI Resmi</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between label-sm text-[#7F7667] normal-case gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[11px] sm:text-[11px]">© {new Date().getFullYear()} Dapur Rasa Catering. All rights reserved.</p>
          <div className="flex items-center justify-center gap-1.5 text-[#A69E93] text-[11px]">
            <span>Cita rasa rempah warisan Nusantara</span>
            <Heart className="w-3 h-3 text-[#C5A059] fill-[#C5A059] shrink-0" />
          </div>
        </div>

      </div>
    </footer>
  );
}

