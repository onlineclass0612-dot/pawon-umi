import React from 'react';
import { businessInfo } from '../data/cateringData';
import { createWhatsAppUrl } from '../utils/formatters';

export default function FloatingCTA() {
  const message = "Halo Pawon Umi, saya tertarik menggunakan layanan catering Pawon Umi. Saya ingin menanyakan pilihan menu dan ketersediaan tanggal untuk acara saya.";
  const waUrl = createWhatsAppUrl(businessInfo.whatsapp, message);

  return (
    <aside
      aria-label="Konsultasi WhatsApp Cepat"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 lg:hidden"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Pawon Umi"
        title="Chat WhatsApp Pawon Umi"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#20ba5a] to-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring-white/80"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.99C16.32 13.86 15.12 13.27 14.9 13.19C14.67 13.11 14.51 13.07 14.35 13.32C14.18 13.56 13.71 14.11 13.56 14.27C13.42 14.44 13.27 14.46 13.03 14.34C12.78 14.21 11.99 13.96 11.06 13.13C10.33 12.48 9.84 11.68 9.7 11.43C9.55 11.19 9.68 11.06 9.81 10.93C9.92 10.82 10.05 10.64 10.18 10.5C10.3 10.35 10.34 10.25 10.42 10.08C10.5 9.92 10.46 9.77 10.4 9.65C10.34 9.53 9.84 8.3 9.64 7.79C9.43 7.31 9.23 7.37 9.07 7.36C8.92 7.35 8.75 7.33 8.53 7.33Z" />
        </svg>

        {/* Online Status Pulse Badge */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#16a34a] border-2 border-white" />
        </span>
      </a>
    </aside>
  );
}
