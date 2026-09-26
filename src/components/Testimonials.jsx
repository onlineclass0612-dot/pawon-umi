import React from 'react';
import { testimonials } from '../data/cateringData';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-16 sm:py-20 md:py-28 bg-[#FBF9F5] border-b border-[#E8DFD1] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#D1C5B4] text-[#775A19]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="label-sm text-[#4E4639]">Suara Klien & Rekan Acara</span>
          </div>
          <h2 className="headline-md text-[#2C2521]">
            Kesan Mendalam di Setiap Jamuan
          </h2>
          <p className="body-md text-[#4E4639]">
            Kepercayaan lebih dari 2.800 tuan rumah dan perencana pernikahan adalah bukti komitmen kami pada keutamaan rasa.
          </p>
        </motion.div>

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
              className="p-5 sm:p-8 rounded-[0.5rem] bg-[#F5F3EF] border border-[#E8DFD1] flex flex-col justify-between hover:border-[#C5A059] hover:shadow-lg transition-all relative"
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
