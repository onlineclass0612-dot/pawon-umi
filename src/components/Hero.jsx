import React from 'react';
import { ArrowRight, ShieldCheck, Award, Star, CheckCircle2, Sparkles, Utensils, MessageCircle } from 'lucide-react';
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
        className="relative flex flex-col justify-start lg:justify-center overflow-hidden border-b border-[#E8DFD1] pt-24 sm:pt-28 pb-8 sm:pb-10 lg:pt-22 lg:pb-0 lg:h-[100dvh] lg:min-h-[640px] w-full"
      >
        {/* Background Image with Layered Artisanal Gradient Overlays & Responsive Picture */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/hero_catering_buffet_mobile.webp" type="image/webp" />
            <img
              src="/images/hero_catering_buffet.webp"
              alt="Jamuan Prasmanan Dapur Rasa Catering"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="1200"
              height="670"
              className="w-full h-full object-cover object-center sm:object-[center_35%]"
            />
          </picture>
          {/* Multi-tier Rich Artisanal Gradient Overlays across All Screen Sizes */}
          {/* Layer 1: Base Directional Gradient (Vertical on Mobile, Smooth Angle on Desktop/Tablet) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/98 via-[#F7F2E7]/94 via-75% to-[#EFE6D6]/85 md:bg-[linear-gradient(112deg,#FBF9F5_0%,rgba(251,249,245,0.97)_38%,rgba(247,242,231,0.88)_58%,rgba(242,233,219,0.65)_78%,rgba(234,221,215,0.32)_100%)] pointer-events-none" />

          {/* Layer 2: Ambient Luminous Warm Gold Radial Halos (Adds depth & warmth across all viewports) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,193,118,0.22)_0%,transparent_60%)] md:bg-[radial-gradient(circle_at_25%_40%,rgba(197,160,89,0.18)_0%,transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(119,90,25,0.10)_0%,transparent_55%)] pointer-events-none" />

          {/* Layer 3: Subtle Bottom Vignette to Blend Flawlessly into the Next Section */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F5F3EF] via-[#F5F3EF]/60 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-0 lg:my-auto">
          <div className="max-w-3xl space-y-3.5 sm:space-y-4 lg:space-y-5">
            
            {/* Category tag - Instant render */}
            <div
              className="inline-flex items-center gap-2 px-3 py-0.5 sm:py-1 rounded-full bg-[#F5F3EF]/95 backdrop-blur-xs border border-[#D1C5B4] text-[#775A19] w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
              <span className="label-sm text-[#4E4639] text-[11px] sm:text-xs">Kurasi Jamuan Kuliner Nusantara</span>
            </div>

            {/* Editorial Headline - Instant LCP Anchor */}
            <h1
              className="headline-lg font-medium text-[#2C2521]"
            >
              Kemewahan Bersahaja dalam{' '}
              <span className="italic font-serif font-normal text-[#775A19]">
                Kehangatan Cita Rasa
              </span>
            </h1>

            {/* Subheadline / Body Narrative - Instant render */}
            <p
              className="body-md text-sm sm:text-base text-[#4E4639] max-w-2xl leading-relaxed"
            >
              Dari resepsi pernikahan agung hingga jamuan VIP korporat terkurasi. Dapur Rasa menyajikan harmoni rempah warisan Nusantara dengan standar higienis bersertifikasi Halal MUI dan estetika meja saji yang memikat.
            </p>

            {/* Span Ulasan & Rating Social Proof - Instant render */}
            <div
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
                <div
                  className="absolute -top-5 sm:-top-5.5 left-full -ml-3.5 z-10 pointer-events-none group-hover:scale-105 transition-transform duration-300 animate-float"
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
                </div>
              </div>

              <span className="font-accent text-[#775A19] text-xl hidden sm:inline select-none sm:ml-22 md:ml-24">
                Cita Rasa Luhur
              </span>
            </div>

            {/* Action Buttons - Instant render container with interactive button animations */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <a
                href="#catalog"
                className="btn-primary shadow-sm"
              >
                <span>Jelajahi Pilihan Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#kontak"
                className="btn-secondary bg-[#FBF9F5]/90"
              >
                <span>Konsultasi & Reservasi</span>
              </a>
            </div>

            {/* Botanical Divider Line */}
            <div
              className="botanical-divider !my-2.5 sm:!my-3.5 max-w-2xl"
            >
              <span className="label-sm text-[#7F7667]">Jaminan Standar & Sertifikasi</span>
            </div>

            {/* Trust Values Marquee in Single Line */}
            <div
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
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar immediately below the Hero section (Continuing Section 1 gradient) */}
      <section className="bg-gradient-to-b from-[#F2ECE0] via-[#F7F3EA] to-[#FBF9F5] border-b border-[#E8DFD1] py-8 sm:py-10 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {businessInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="space-y-1"
              >
                <div className="font-serif text-3xl md:text-4xl font-medium text-[#775A19] tabular-nums">
                  <MachineCounter value={stat.value} duration={1.6} delay={0.1 + idx * 0.1} />
                </div>
                <div className="label-sm text-[#665D58]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
