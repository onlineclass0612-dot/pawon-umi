import React, { useState } from 'react';
import { packagesData, businessInfo } from '../data/cateringData';
import { Sparkles, Users, Info, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatRupiah } from '../utils/formatters';

export default function MenuPackages({ onSelectPackage, onOpenCatalog }) {
  // Kategori pilihan khusus untuk section ini: Rice Box, Tumpeng, dan Prasmanan (dalam 1 baris)
  const homeCategories = [
    { id: "nasikotak", name: "Rice Box" },
    { id: "tumpeng", name: "Tumpeng" },
    { id: "prasmanan", name: "Prasmanan" }
  ];
  const [activeCategory, setActiveCategory] = useState("nasikotak");

  const filteredPackages = packagesData.filter(item => item.category === activeCategory);

  // Menampilkan 3 data paket sesuai kategori yang dipilih
  const displayedPackages = filteredPackages.slice(0, 3);

  return (
    <section id="catalog" className="py-16 sm:py-20 md:py-28 bg-[#FBF9F5] border-b border-[#E8DFD1] w-full relative">
      <span id="sajian" className="absolute -top-24"></span>
      <span id="katalog" className="absolute -top-24"></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#D1C5B4] text-[#775A19]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="label-sm text-[#4E4639]">Koleksi Jamuan Terkurasi</span>
          </div>
          <h2 className="headline-md text-[#2C2521]">
            Pilihan Paket Katering Pawon Umi
          </h2>
          <p className="body-md text-[#4E4639]">
            Dirancang khusus untuk menghadirkan pengalaman bersantap yang tak terlupakan. Seluruh susunan hidangan dapat disesuaikan dengan konsep acara Anda.
          </p>
        </motion.div>

        {/* Filter Categories Pills - 3 Kategori Terpilih dalam 1 Baris */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center mb-10 sm:mb-14 px-2"
        >
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 p-1 sm:p-1.5 rounded-full bg-[#F0ECE3] border border-[#E8DFD1] shadow-2xs max-w-full">
            {homeCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`label-sm relative px-3.5 sm:px-6 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap text-xs sm:text-sm font-medium ${
                    isActive
                      ? "text-[#2C2521] font-semibold"
                      : "text-[#665D58] hover:text-[#2C2521]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#C5A059] rounded-full shadow-xs"
                      transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Packages Grid - Animated Card Layout with AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.96 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                className={`bg-[#F5F3EF] rounded-[0.5rem] border overflow-hidden flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg hover:border-[#C5A059] ${
                  pkg.popular
                    ? "border-[#C5A059] ring-1 ring-[#C5A059]/40"
                    : "border-[#E8DFD1]"
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

                    {/* Price with Dotted Leader or Editorial Styling */}
                    <div className="py-3 border-y border-[#E8DFD1] flex items-baseline justify-between">
                      <span className="label-sm text-[#7F7667]">Investasi Jamuan</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-xl sm:text-2xl font-medium text-[#775A19]">
                          {formatRupiah(pkg.price)}
                        </span>
                        <span className="label-sm text-[#7F7667]">/ {pkg.unit}</span>
                      </div>
                    </div>

                    {/* Menu Highlights List with Dotted Leader styling */}
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
                    className="btn-secondary flex-1 text-xs cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Rincian Menu</span>
                  </button>

                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=Halo%20Concierge%20Pawon%20Umi,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    <span>Pesan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Link Lihat Selengkapnya ke Halaman Katalog Lengkap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 text-center space-y-3"
        >
          <a
            href="#/paket-lengkap"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenCatalog) onOpenCatalog();
            }}
            className="inline-flex items-center justify-center gap-2 btn-secondary !px-8 !py-3.5 text-xs sm:text-sm font-semibold group transition-all duration-300 hover:border-[#775A19] hover:bg-[#F5F3EF] cursor-pointer shadow-2xs"
          >
            <span>Lihat Selengkapnya</span>
            <ArrowRight className="w-4 h-4 text-[#775A19] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="label-sm text-[#7F7667] normal-case text-xs">
            Buka katalog lengkap berisikan seluruh {packagesData.length} pilihan paket dan seluruh kategori hidangan
          </p>
        </motion.div>

      </div>
    </section>
  );
}
