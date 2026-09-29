import React, { useState, useEffect, useCallback } from 'react';
import { X, ShieldCheck, Users, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/cateringData';
import { formatRupiah } from '../utils/formatters';

export default function PackageModal({ pkg, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  // Listen for Escape key to close modal
  useEffect(() => {
    if (!pkg) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pkg, handleClose]);

  if (!pkg) return null;

  const waLink = `https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Pawon%20Umi,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20(${formatRupiah(pkg.price)}/${pkg.unit}).%20Bisa%20bantu%20jelaskan%20rinciannya?`;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1C1A]/60 backdrop-blur-sm cursor-pointer transition-opacity duration-200 ease-out ${
        isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="package-modal-title"
        className={`bg-[#FBF9F5] rounded-[0.75rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD1] shadow-2xl relative cursor-default transition-all duration-200 ease-out ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Tutup detail paket"
          className="absolute top-4 right-4 z-10 p-2 rounded-[0.25rem] bg-[#FBF9F5]/90 text-[#2C2521] hover:bg-[#EFEEEA] transition-colors border border-[#E8DFD1] cursor-pointer"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Modal Visual Header */}
        <div className="relative h-64 overflow-hidden bg-[#E8DFD1]">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2521]/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <span className="label-sm px-3 py-1 rounded-full bg-[#FBF9F5]/90 text-[#2C2521] backdrop-blur-xs font-semibold">
              {pkg.category}
            </span>
            <div className="text-right">
              <span className="block text-xs text-[#E8DFD1] font-mono">Mulai dari</span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#FBF9F5]">
                {formatRupiah(pkg.price)}
              </span>
              <span className="text-xs text-[#E8DFD1]">/{pkg.unit}</span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Info */}
          <div>
            <h3 id="package-modal-title" className="headline-md text-[#2C2521]">
              {pkg.name}
            </h3>
            <p className="body-md text-[#4E4639] mt-2">
              {pkg.description}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#E8DFD1]">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#775A19] shrink-0" />
              <div>
                <span className="block text-[11px] font-mono uppercase text-[#7F7667]">Kapasitas Minimal</span>
                <span className="label-md text-[#2C2521] font-medium">{pkg.minOrder}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#775A19] shrink-0" />
              <div>
                <span className="block text-[11px] font-mono uppercase text-[#7F7667]">Tipe Sajian</span>
                <span className="label-md text-[#2C2521] font-medium">Layanan Premium</span>
              </div>
            </div>
          </div>

          {/* Menu Highlights List */}
          <div>
            <h4 className="label-md font-semibold text-[#2C2521] uppercase tracking-wider mb-3">
              Komposisi & Menu Utama:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                  <span className="body-sm text-[#4E4639]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="p-4 rounded-[0.5rem] bg-[#F5F3EF] border border-[#E8DFD1] space-y-2">
            <div className="flex items-center gap-2 text-[#775A19] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span className="label-sm normal-case">100% Halal MUI Resmi & Sertifikasi Higiene Sanitasi Kemenkes</span>
            </div>
            {pkg.includesStaff && (
              <div className="flex items-center gap-2 text-[#4E4639]">
                <Clock className="w-4 h-4 text-[#775A19] shrink-0" />
                <span className="body-sm text-xs">Termasuk peralatan saji roll-top mewah keemasan & tim pramusaji berseragam</span>
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleClose}
              className="btn-secondary w-full sm:flex-1 order-2 sm:order-1"
            >
              Tutup
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:flex-1 order-1 sm:order-2"
            >
              <span>Pesan via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
