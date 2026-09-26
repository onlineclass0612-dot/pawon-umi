import React from 'react';
import { ArrowRight, ShieldCheck, Award, Star, CheckCircle2, Sparkles, Utensils, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { businessInfo } from '../data/cateringData';
import MachineCounter from './MachineCounter';

const trustMarqueeItems = [
  { icon: ShieldCheck, title: "100% Halal MUI Resmi" },
  { icon: Award, title: "Laik Higiene Kemenkes RI" },
  { icon: CheckCircle2, title: "Garansi Tepat Waktu" },
  { icon: Sparkles, title: "Standar HACCP Certified" },
  { icon: Utensils, title: "Executive Chef Hotel Bintang 5" },
  { icon: Award, title: "Peralatan Roll-Top Mewah" }
];

export default function Hero() {
  return (
    <>
      <section
        id="beranda"
        className="relative flex flex-col justify-start lg:justify-center overflow-hidden border-b border-[#E8DFD1] pt-5 pb-8 sm:pt-7 sm:pb-10 lg:py-0 lg:h-[calc(100dvh-5.5rem)] lg:min-h-[550px] w-full"
      >
        {/* Background Image with Layered Artisanal Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_catering_buffet.webp"
            alt="Jamuan Prasmanan Pawon Umi Catering"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1376"
            height="768"
            className="w-full h-full object-cover object-center sm:object-[center_35%]"
          />
          {/* Responsive Gradient Overlay: High-contrast backdrop on text, ambient photo visibility on the right */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/95 to-[#FBF9F5]/80 md:to-[#FBF9F5]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-transparent to-[#FBF9F5]/50" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-0 lg:my-auto">
          <div className="max-w-3xl space-y-3.5 sm:space-y-4 lg:space-y-5">
            
            {/* Category tag - Shown on all viewports */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-0.5 sm:py-1 rounded-full bg-[#F5F3EF]/95 backdrop-blur-xs border border-[#D1C5B4] text-[#775A19] w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
              <span className="label-sm text-[#4E4639] text-[11px] sm:text-xs">Kurasi Jamuan Kuliner Nusantara</span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="headline-lg font-medium text-[#2C2521]"
            >
              Kemewahan Bersahaja dalam{' '}
              <span className="italic font-serif font-normal text-[#775A19]">
                Kehangatan Cita Rasa
              </span>
            </motion.h1>

            {/* Subheadline / Body Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="body-md text-sm sm:text-base text-[#4E4639] max-w-2xl leading-relaxed"
            >
              Dari resepsi pernikahan agung hingga jamuan VIP korporat terkurasi. Pawon Umi menyajikan harmoni rempah warisan Nusantara dengan standar higienis bersertifikasi Halal MUI dan estetika meja saji yang memikat.
            </motion.p>

            {/* Span Ulasan & Rating Social Proof - Berada tepat di bawah sub headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 pt-3 sm:pt-3.5 pb-1"
            >
              <div className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3EF]/95 backdrop-blur-xs border border-[#D1C5B4] text-[#2C2521] shadow-2xs">
                <div className="flex items-center gap-0.5 text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>
                <span className="label-sm font-semibold text-[#2C2521] text-xs tracking-wider">
                  4.9 / 5.0
                </span>

                {/* Bubble Chat "1.200+ Ulasan" melayang di atas ujung kanan badge rating dengan ekor di ujung kiri bawah bubble */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 sm:-top-5.5 left-full -ml-3.5 z-10 pointer-events-none group-hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2C2521] text-[#FBF9F5] border border-[#C5A059]/60 shadow-sm text-[10px] sm:text-[10.5px] font-semibold tracking-tight whitespace-nowrap select-none">
                    {/* Ekor di ujung kiri bawah bubble chat - dibuat condong diagonal antara kiri dan bawah */}
                    <svg 
                      className="absolute -bottom-[7px] left-2 w-3.5 h-2 overflow-visible" 
                      viewBox="0 0 14 8" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <polygon points="6,0 0,8 14,0" fill="#2C2521" />
                      <polyline 
                        points="6,0 0,8 14,0" 
                        fill="none" 
                        stroke="#C5A059" 
                        strokeOpacity="0.6" 
                        strokeWidth="1" 
                        strokeLinejoin="round" 
                      />
                    </svg>

                    <MessageCircle className="w-2.5 h-2.5 text-[#C5A059] shrink-0" />
                    <span>1.200+ Ulasan</span>
                  </div>
                </motion.div>
              </div>

              <span className="font-accent text-[#775A19] text-xl hidden sm:inline select-none sm:ml-22 md:ml-24">
                Cita Rasa Luhur
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <motion.a
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                href="#catalog"
                className="btn-primary shadow-sm"
              >
                <span>Jelajahi Pilihan Menu</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                href="#kontak"
                className="btn-secondary bg-[#FBF9F5]/80 backdrop-blur-xs"
              >
                <span>Konsultasi & Reservasi</span>
              </motion.a>
            </motion.div>

            {/* Botanical Divider Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.82 }}
              className="botanical-divider !my-2.5 sm:!my-3.5 max-w-2xl"
            >
              <span className="label-sm text-[#7F7667]">Jaminan Standar & Sertifikasi</span>
            </motion.div>

            {/* Trust Values Marquee in Single Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.94, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-2xl w-full overflow-hidden py-1"
            >
              {/* Fade Edges for Smooth Transition */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent z-10 pointer-events-none" />

              {/* Infinite Running Marquee Track */}
              <div className="animate-marquee flex items-center gap-3">
                {[...trustMarqueeItems, ...trustMarqueeItems].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F3EF]/90 backdrop-blur-xs border border-[#E8DFD1] hover:border-[#C5A059] shrink-0 whitespace-nowrap transition-colors select-none"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#775A19] shrink-0" />
                      <span className="label-sm text-[#4E4639] text-[11px] sm:text-xs font-medium normal-case tracking-normal">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Bar immediately below the Hero section */}
      <section className="bg-[#F5F3EF] border-b border-[#E8DFD1] py-8 sm:py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {businessInfo.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.95, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-1"
              >
                <div className="font-serif text-3xl md:text-4xl font-medium text-[#775A19] tabular-nums">
                  <MachineCounter value={stat.value} duration={2.2} delay={0.15 + idx * 0.15} />
                </div>
                <div className="label-sm text-[#665D58]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
