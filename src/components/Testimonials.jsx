import React from 'react';
import { testimonials } from '../data/cateringData';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  return (
    <section
      id="ulasan"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#F4EFE6] via-[#FBF9F5] to-[#EFE6D6] md:bg-[linear-gradient(135deg,#F5EFE5_0%,#FBF9F5_45%,#F8F2E7_75%,#EFE6D6_100%)] border-b border-[#E8DFD1] w-full overflow-hidden"
    >
      {/* Pure CSS Luxury Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.12)_0%,transparent_65%)]" />
        <div className="absolute -bottom-24 left-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(119,90,25,0.08)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader
          badge="Suara Klien & Rekan Acara"
          title="Kesan Mendalam di Setiap Jamuan"
          subtitle="Kepercayaan lebih dari 2.800 tuan rumah dan perencana pernikahan adalah bukti komitmen kami pada keutamaan rasa."
          className="mb-12 sm:mb-16"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="p-5 sm:p-8 rounded-[0.5rem] bg-white/85 backdrop-blur-xs border border-[#E8DFD1] flex flex-col justify-between hover:border-[#C5A059] hover:shadow-lg transition-all relative"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                <p className="body-sm italic text-[#2C2521] leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DFD1] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-sm text-[#2C2521]">
                    {item.name}
                  </h4>
                  <p className="label-sm text-[#7F7667] normal-case">
                    {item.role}
                  </p>
                </div>
                <span className="label-sm px-2.5 py-0.5 rounded-full bg-[#EADDD7] text-[#6A615C]">
                  {item.event}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
