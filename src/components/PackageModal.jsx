import React, { useEffect } from 'react';
import { X, ShieldCheck, Users, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { businessInfo } from '../data/cateringData';
import { formatRupiah } from '../utils/formatters';

export default function PackageModal({ pkg, onClose }) {
  // Listen for Escape key to close modal
  useEffect(() => {
    if (!pkg) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pkg, onClose]);

  if (!pkg) return null;

  const waLink = `https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Pawon%20Umi,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20(${formatRupiah(pkg.price)}/${pkg.unit}).%20Bisa%20bantu%20jelaskan%20rinciannya?`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1C1A]/60 backdrop-blur-sm cursor-pointer"
    >
      <motion.div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="package-modal-title"
        initial={{ opacity: 0, scale: 0.93, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 16 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#FBF9F5] rounded-[0.75rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD1] shadow-2xl relative cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2">
              <span className="label-sm px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#2C2521] uppercase font-semibold">
                {pkg.category}
              </span>
              {pkg.popular && (
                <span className="label-sm px-3 py-1 rounded-full bg-gradient-to-r from-[#775A19] via-[#8C6B1F] to-[#775A19] text-[#FFF9F0] font-semibold border border-[#E9C176]/70 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#E9C176] fill-[#E9C176] shrink-0" aria-hidden="true" />
                  <span>Paling Sering Dipesan</span>
                </span>
              )}
            </div>
            <h3 id="package-modal-title" className="headline-sm text-2xl text-white font-medium mt-2">
              {pkg.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-[0.5rem] bg-[#F5F3EF] border border-[#E8DFD1]">
            <div>
              <div className="label-sm text-[#7F7667]">Investasi Jamuan:</div>
              <div className="font-serif text-xl sm:text-2xl font-medium text-[#775A19]">
                {formatRupiah(pkg.price)}
                <span className="label-sm text-[#7F7667] normal-case"> / {pkg.unit}</span>
              </div>
            </div>
            <div className="label-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#FBF9F5] border border-[#D1C5B4] text-[#2C2521] flex items-center gap-1.5 text-xs">
              <Users className="w-3.5 h-3.5 text-[#775A19]" />
              <span>Minimal Order: {pkg.minOrder} {pkg.unit}</span>
            </div>
          </div>

          <div>
            <h4 className="label-md text-[#775A19] mb-1.5">Deskripsi Sajian:</h4>
            <p className="body-sm text-[#4E4639] leading-relaxed">
              {pkg.description}
            </p>
          </div>

          <div>
            <h4 className="label-md text-[#775A19] mb-3">Daftar Menu & Fasilitas Termasuk:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.features.map((feat, idx) => (
                <div key={idx} className="flex items-center text-xs text-[#2C2521] bg-[#F5F3EF] p-2.5 rounded-[0.25rem] border border-[#E8DFD1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mr-2" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="p-3.5 sm:p-4 rounded-[0.25rem] bg-[#F5F3EF] border border-[#E8DFD1] text-xs space-y-2 text-[#4E4639]">
            <div className="flex items-center gap-2 text-[#775A19]">
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
              onClick={onClose}
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
      </motion.div>
    </motion.div>
  );
}
