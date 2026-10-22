import React, { useState } from 'react';
import { packagesData } from '../data/cateringData';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from './SectionHeader';
import PackageCard from './PackageCard';

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
    <section
      id="catalog"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#FBF9F5] via-[#F7F2E7] to-[#EFE6D6] md:bg-[linear-gradient(135deg,#FBF9F5_0%,#F8F3EA_40%,#F4EDE0_70%,#ECE1CF_100%)] border-b border-[#E8DFD1] w-full overflow-hidden"
    >
      <span id="sajian" className="absolute -top-24"></span>
      <span id="katalog" className="absolute -top-24"></span>

      {/* Pure CSS Luxury Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-12 -left-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.12)_0%,transparent_65%)]" />
        <div className="absolute -bottom-20 -right-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(119,90,25,0.08)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader
          badge="Koleksi Jamuan Terkurasi"
          title="Pilihan Paket Katering Dapur Rasa"
          subtitle="Dirancang khusus untuk menghadirkan pengalaman bersantap yang tak terlupakan. Seluruh susunan hidangan dapat disesuaikan dengan konsep acara Anda."
          className="mb-10 sm:mb-12"
        />

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

        {/* Packages Grid - Rendered using Reusable PackageCard with AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectPackage={onSelectPackage}
                isAnimated={true}
              />
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
