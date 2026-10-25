import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Users, 
  UtensilsCrossed, 
  Box, 
  Sparkles, 
  Coffee, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Plus, 
  Minus,
  ShieldCheck,
  Eye
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { businessInfo, packagesData } from '../data/cateringData';
import { formatRupiah, createWhatsAppUrl } from '../utils/formatters';

const formatConfigs = {
  prasmanan: {
    id: 'prasmanan',
    name: 'Prasmanan / Buffet',
    icon: UtensilsCrossed,
    tagline: 'Resepsi Pernikahan, Halal Bihalal & Gala Dinner',
    unitLabel: 'Tamu',
    min: 50,
    max: 1000,
    step: 25,
    defaultCount: 150,
    quickChips: [50, 100, 150, 250, 500, 750],
    tiers: {
      standar: {
        id: 'standar',
        name: 'Prasmanan Bumi Kartika',
        price: 72000,
        badge: 'Ekonomis & Komplit',
        description: 'Sop kimlo sari rempah, rendang sapi karamel, ayam panggang rujak & puding sutra.',
        pkgId: 'prasmanan-bumi-kartika'
      },
      favorit: {
        id: 'favorit',
        name: 'Prasmanan Jamuan Danapramita',
        price: 88000,
        badge: 'Paling Diminati ★',
        isPopular: true,
        description: 'Sop ikan gurame kemangi, daging lada hitam, ayam Klaten, karedok sayur & es doger.',
        pkgId: 'prasmanan-danapramita'
      },
      royal: {
        id: 'royal',
        name: 'Prasmanan Agung Rajapatni',
        price: 105000,
        badge: 'Kemewahan Keraton VIP',
        description: 'Sop iga sapi kayu manis, dendeng batokok crispy, ayam bakar madu, udang telur asin & es cendol durian.',
        pkgId: 'prasmanan-rajapatni'
      }
    },
    includes: [
      'Peralatan makan piring keramik & sendok garpu berstandar hotel',
      'Wadah pemanas tembaga chafing dish roll-top keemasan',
      'Tim pramusaji berseragam rapi, ramah & siaga stand by',
      'Penataan meja saji dengan taplak kain & hiasan bunga segar',
      'Pengantaran aman tiba 2-3 jam sebelum jamuan dimulai'
    ]
  },
  nasikotak: {
    id: 'nasikotak',
    name: 'Artisanal Nasi Box',
    icon: Box,
    tagline: 'Rapat Direksi, Seminar, Gathering & Konsumsi Panitia',
    unitLabel: 'Box',
    min: 20,
    max: 600,
    step: 10,
    defaultCount: 60,
    quickChips: [25, 50, 75, 100, 200, 400],
    tiers: {
      standar: {
        id: 'standar',
        name: 'Bento Nasi Liwet Dapur Rasa',
        price: 42000,
        badge: 'Menu Legendaris',
        description: 'Nasi liwet harum teri Medan, ayam bakar Solo, bacem tahu tempe, sambal bajak & pisang.',
        pkgId: 'nasibox-dapur-rasa'
      },
      favorit: {
        id: 'favorit',
        name: 'Royal Bento Ayam Bakar Madu',
        price: 45000,
        badge: 'Pilihan Eksekutif ★',
        isPopular: true,
        description: 'Nasi daun jeruk pulen, ayam bakar madu klanceng, sambal matah, urap bakar & buah segar.',
        pkgId: 'nasibox-ayam-madu'
      },
      royal: {
        id: 'royal',
        name: 'Executive Box Bistik Sapi',
        price: 52000,
        badge: 'VIP Corporate',
        description: 'Bistik tenderloin sapi saus lada hitam, telur balado, perkedel kentang daging & puding mangga.',
        pkgId: 'nasibox-bistik-andaliman'
      }
    },
    includes: [
      'Kemasan kotak bento kraft premium ramah lingkungan bersekat higienis',
      'Cutlery set sendok garpu kayu higienis, tusuk gigi & tisu kemas',
      'Jaminan makanan hangat saat tiba berkat thermal delivery bag',
      'Pengantaran tiba 1 jam sebelum sesi makan dimulai'
    ]
  },
  tumpeng: {
    id: 'tumpeng',
    name: 'Tumpeng Syukuran',
    icon: Sparkles,
    tagline: 'Peresmian Kantor, Selamatan Rumah, Milad & Tasyakuran',
    unitLabel: 'Porsi',
    min: 20,
    max: 300,
    step: 10,
    defaultCount: 30,
    quickChips: [20, 30, 50, 80, 120, 200],
    tiers: {
      standar: {
        id: 'standar',
        name: 'Tumpeng Kenduri Barokah',
        price: 44500,
        badge: 'Tampah 20 Tamu',
        description: '1 Tampah tumpeng tradisional Rp 890.000 (untuk 20 tamu / ± Rp 44.500/porsi). Nasi kuning, ayam ungkep kremes, krecek & perkedel.',
        pkgId: 'tumpeng-syukuran-kenduri',
        displayPrice: 'Rp 890.000',
        displayUnit: 'tampah (20 tamu)'
      },
      favorit: {
        id: 'favorit',
        name: 'Tumpeng Mahligai Rempah',
        price: 45000,
        badge: 'Tampah 30 Tamu ★',
        isPopular: true,
        description: '1 Tampah tumpeng bertingkat Rp 1.350.000 (untuk 30 tamu / ± Rp 45.000/porsi). Janur ukir, ayam lengkuas, sambal ati & urap.',
        pkgId: 'tumpeng-parahyangan-agung',
        displayPrice: 'Rp 1.350.000',
        displayUnit: 'tampah (30 tamu)'
      },
      royal: {
        id: 'royal',
        name: 'Tumpeng Mini Dome Exclusive',
        price: 48000,
        badge: 'Individual Dome VIP',
        description: 'Sajian perorangan dalam mika dome transparan berikat pita satin emas & kartu ucapan kustom (Rp 48.000 / porsi).',
        pkgId: 'tumpeng-mini-parahyangan',
        displayPrice: 'Rp 48.000',
        displayUnit: 'porsi'
      }
    },
    includes: [
      'Tampah anyaman bambu berhias lipatan janur daun pisang karya pengrajin boga',
      'Plat ucapan kustom berbahan akrilik/kayu bertuliskan nama acara Anda',
      'Pisau khusus pemotong tumpeng & sendok saji higienis',
      'Kotak packaging luar pelindung anti-guncangan saat pengantaran'
    ]
  },
  coffeebreak: {
    id: 'coffeebreak',
    name: 'Coffee Break & Kudapan',
    icon: Coffee,
    tagline: 'Seminar, Workshop, Half-day Meeting & Press Conference',
    unitLabel: 'Porsi',
    min: 30,
    max: 400,
    step: 10,
    defaultCount: 60,
    quickChips: [30, 50, 80, 120, 200, 300],
    tiers: {
      standar: {
        id: 'standar',
        name: 'Kudapan Priyayi Klasik',
        price: 32000,
        badge: 'Kudapan Ringan',
        description: '3 macam kue tradisional tempo dulu & modern, kopi tubruk rempah & teh melati hangat.',
        pkgId: 'kudapan-priyayi-klasik'
      },
      favorit: {
        id: 'favorit',
        name: 'Executive Coffee Corner',
        price: 45000,
        badge: 'Paling Pas ★',
        isPopular: true,
        description: '4 variasi jajanan pasar premium, pie buah segar, kopi drip Nusantara & aneka teh infusi.',
        pkgId: 'kudapan-executive-corner'
      },
      royal: {
        id: 'royal',
        name: 'Imperial High-Tea Buffet',
        price: 65000,
        badge: 'Gala Afternoon',
        description: 'Canapes gurih, lapis legit prunes, live brewing specialty coffee, freshly squeezed juice & fruit tartlet.',
        pkgId: 'kudapan-imperial-hightea'
      }
    },
    includes: [
      'Peralatan cangkir, piring kue, dan dispenser air panas profesional',
      'Racikan kopi bubuk Nusantara otentik, teh melati, gula aren & creamer',
      'Pramusaji standby untuk pembersihan dan penataan ulang snack',
      'Penyajian tepat waktu 30 menit sebelum sesi istirahat dimulai'
    ]
  }
};

export default function CateringCalculator({ onSelectPackage }) {
  const [formatKey, setFormatKey] = useState('prasmanan');
  const [guestCount, setGuestCount] = useState(150);
  const [tierKey, setTierKey] = useState('favorit');
  const guestCountInputId = useId();

  const activeFormat = formatConfigs[formatKey];
  const activeTier = activeFormat.tiers[tierKey] || activeFormat.tiers.favorit;

  // Change format safely & readjust guest count if out of bounds
  const handleFormatChange = (newFormatKey) => {
    setFormatKey(newFormatKey);
    const targetConfig = formatConfigs[newFormatKey];
    setGuestCount(targetConfig.defaultCount);
    // Keep 'favorit' tier default when switching formats
    setTierKey('favorit');
  };

  const handleSliderChange = (e) => {
    setGuestCount(parseInt(e.target.value, 10));
  };

  const adjustCount = (delta) => {
    setGuestCount((prev) => {
      const next = prev + delta;
      if (next < activeFormat.min) return activeFormat.min;
      if (next > activeFormat.max) return activeFormat.max;
      return next;
    });
  };

  // Pricing calculation
  const totalCost = guestCount * activeTier.price;

  // Find corresponding package data for modal preview if available
  const matchedPackage = activeTier.pkgId 
    ? packagesData.find((p) => p.id === activeTier.pkgId) 
    : null;

  // Generate WhatsApp message
  const unitPriceFormatted = activeTier.displayPrice && activeTier.displayUnit && activeTier.displayUnit.includes('tampah')
    ? `${activeTier.displayPrice} / ${activeTier.displayUnit} (± ${formatRupiah(activeTier.price)}/porsi)`
    : `${formatRupiah(activeTier.price)} / ${activeFormat.unitLabel.toLowerCase()}`;

  const waMessage = [
    `Halo Dapur Rasa Catering, saya melakukan simulasi estimasi di website:`,
    ``,
    `📋 Rincian Simulasi Jamuan:`,
    `• Format Acara: ${activeFormat.name}`,
    `• Perkiraan Kebutuhan: ${guestCount} ${activeFormat.unitLabel}`,
    `• Pilihan Menu: ${activeTier.name}`,
    `• Estimasi Biaya Satuan: ${unitPriceFormatted}`,
    `• Perkiraan Total Investasi: ± ${formatRupiah(totalCost)}`,
    ``,
    `Apakah jadwal untuk tanggal acara saya masih tersedia untuk konsultasi dan penyesuaian menu? Terima kasih!`
  ].join('\n');

  const waUrl = createWhatsAppUrl(businessInfo.whatsapp, waMessage);

  return (
    <section 
      id="kalkulator" 
      className="relative py-16 sm:py-20 md:py-28 bg-[#FAF6EE] border-b border-[#E8DFD1] w-full overflow-hidden"
    >
      {/* Decorative Warm Ambient Glows (Desktop only for 60 FPS mobile performance) */}
      <div 
        className="hidden md:block absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#FAF2E2] rounded-full blur-3xl pointer-events-none opacity-60" 
        aria-hidden="true" 
      />
      <div 
        className="hidden md:block absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-[#EFE6D6] rounded-full blur-3xl pointer-events-none opacity-60" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="ESTIMASI CERDAS & TRANSPARAN"
          title="Kalkulator Porsi & Estimasi Biaya Jamuan"
          subtitle="Rencanakan investasi jamuan istimewa Anda secara instan dan akurat. Sesuaikan tipe acara dan jumlah tamu untuk mendapatkan rekomendasi paket terbaik seketika."
        />

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Controls (7 Cols on LG) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Step 1: Format Acara Selector */}
            <div className="bg-[#FBF9F5] rounded-2xl p-5 sm:p-7 border border-[#E8DFD1] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="label-sm text-[#775A19] flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-[#775A19] text-white flex items-center justify-center text-xs">1</span>
                  Pilih Format Acara
                </span>
                <span className="text-xs text-[#7F7667]">Tersedia 4 format sajian</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {Object.values(formatConfigs).map((cfg) => {
                  const Icon = cfg.icon;
                  const isSelected = formatKey === cfg.id;
                  return (
                    <button
                      key={cfg.id}
                      type="button"
                      onClick={() => handleFormatChange(cfg.id)}
                      className={`relative flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#F5EFE5] border-[#775A19] text-[#775A19] shadow-xs ring-1 ring-[#775A19]/30'
                          : 'bg-[#FAF6EE] border-[#E8DFD1] text-[#665D58] hover:bg-[#F5F3EF] hover:border-[#D1C5B4]'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 transition-transform duration-200 ${isSelected ? 'scale-110 text-[#775A19]' : 'text-[#7F7667]'}`} />
                      <span className="text-xs sm:text-sm font-semibold leading-tight line-clamp-2">
                        {cfg.name}
                      </span>
                      {isSelected && (
                        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#775A19] text-white rounded-full flex items-center justify-center text-[10px]">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-xs text-[#7F7667] italic text-center sm:text-left">
                Cocok untuk: {activeFormat.tagline}
              </p>
            </div>

            {/* Step 2: Slider & Stepper Jumlah Tamu / Porsi */}
            <div className="bg-[#FBF9F5] rounded-2xl p-5 sm:p-7 border border-[#E8DFD1] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="label-sm text-[#775A19] flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-[#775A19] text-white flex items-center justify-center text-xs">2</span>
                  Tentukan Perkiraan Jumlah {activeFormat.unitLabel}
                </span>
                <span className="text-xs text-[#7F7667]">
                  Min: {activeFormat.min} • Maks: {activeFormat.max}
                </span>
              </div>

              {/* Counter Display & Stepper */}
              <div className="flex items-center justify-between gap-4 mb-6 bg-[#FAF6EE] p-3 sm:p-4 rounded-xl border border-[#E8DFD1]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EAE2D3] flex items-center justify-center text-[#775A19]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#7F7667] uppercase tracking-wider block">Kebutuhan Sajian</span>
                    <span className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2521] tracking-tight">
                      {guestCount.toLocaleString('id-ID')}
                      <span className="text-sm font-sans font-normal text-[#7F7667] ml-1.5">
                        {activeFormat.unitLabel}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Tactile + / - buttons for easy mobile tapping */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => adjustCount(-activeFormat.step)}
                    disabled={guestCount <= activeFormat.min}
                    aria-label={`Kurangi ${activeFormat.step} ${activeFormat.unitLabel}`}
                    className="w-10 h-10 rounded-lg bg-white border border-[#D1C5B4] text-[#2C2521] flex items-center justify-center hover:bg-[#F5EFE5] hover:border-[#775A19] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustCount(activeFormat.step)}
                    disabled={guestCount >= activeFormat.max}
                    aria-label={`Tambah ${activeFormat.step} ${activeFormat.unitLabel}`}
                    className="w-10 h-10 rounded-lg bg-white border border-[#D1C5B4] text-[#2C2521] flex items-center justify-center hover:bg-[#F5EFE5] hover:border-[#775A19] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2 mb-5">
                <label htmlFor={guestCountInputId} className="sr-only">
                  Jumlah {activeFormat.unitLabel}
                </label>
                <input
                  id={guestCountInputId}
                  type="range"
                  min={activeFormat.min}
                  max={activeFormat.max}
                  step={activeFormat.step}
                  value={guestCount}
                  onChange={handleSliderChange}
                  className="w-full h-2.5 bg-[#E8DFD1] rounded-lg appearance-none cursor-pointer accent-[#775A19] focus:outline-hidden focus:ring-2 focus:ring-[#775A19]/50"
                />
                <div className="flex justify-between text-[11px] text-[#7F7667]">
                  <span>{activeFormat.min} {activeFormat.unitLabel}</span>
                  <span>{Math.round((activeFormat.max + activeFormat.min) / 2)} {activeFormat.unitLabel}</span>
                  <span>{activeFormat.max} {activeFormat.unitLabel}</span>
                </div>
              </div>

              {/* Quick Preset Chips */}
              <div>
                <span className="text-[11px] text-[#7F7667] uppercase tracking-wider block mb-2 font-medium">
                  Pilihan Cepat:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeFormat.quickChips.map((chipVal) => (
                    <button
                      key={chipVal}
                      type="button"
                      onClick={() => setGuestCount(chipVal)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        guestCount === chipVal
                          ? 'bg-[#775A19] text-white border-[#775A19] font-semibold shadow-2xs'
                          : 'bg-white text-[#665D58] border-[#D1C5B4] hover:border-[#775A19] hover:bg-[#FAF6EE]'
                      }`}
                    >
                      {chipVal} {activeFormat.unitLabel}
                    </button>
                  ))}
                </div>

                {/* Helper for small intimate groups */}
                <div className="mt-4 pt-3 border-t border-[#E8DFD1]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] text-[#7F7667]">
                  <span>Butuh porsi lebih sedikit (5–15 tamu) atau budget khusus?</span>
                  <a
                    href={createWhatsAppUrl(
                      businessInfo.whatsapp,
                      'Halo Dapur Rasa Catering, saya ingin konsultasi paket jamuan porsi kecil (5-15 tamu) atau penyesuaian budget khusus.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#775A19] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Konsultasi Porsi Intimate</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Step 3: Pilihan Kelas Sajian (Tiers) */}
            <div className="bg-[#FBF9F5] rounded-2xl p-5 sm:p-7 border border-[#E8DFD1] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="label-sm text-[#775A19] flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-[#775A19] text-white flex items-center justify-center text-xs">3</span>
                  Pilih Tingkat / Kelas Menu
                </span>
                <span className="text-xs text-[#7F7667]">3 level hidangan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.values(activeFormat.tiers).map((tier) => {
                  const isSelected = tierKey === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setTierKey(tier.id)}
                      className={`text-left p-4 rounded-xl border relative transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#F5EFE5] border-[#775A19] shadow-xs ring-1 ring-[#775A19]/30'
                          : 'bg-[#FAF6EE] border-[#E8DFD1] hover:bg-[#F5F3EF] hover:border-[#D1C5B4]'
                      }`}
                    >
                      {tier.isPopular && (
                        <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-[#775A19] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-2xs">
                          Populer
                        </span>
                      )}

                      <div>
                        <span className="text-[11px] font-semibold text-[#775A19] uppercase tracking-wider block mb-1">
                          {tier.badge}
                        </span>
                        <h4 className="text-sm font-bold text-[#2C2521] leading-snug mb-1">
                          {tier.name}
                        </h4>
                        <p className="text-xs text-[#665D58] line-clamp-2 mb-3">
                          {tier.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#E8DFD1] mt-auto">
                        <span className="text-base font-bold text-[#2C2521] font-serif block">
                          {tier.displayPrice || formatRupiah(tier.price)}
                        </span>
                        <span className="text-[10px] text-[#7F7667]">
                          {tier.displayUnit ? `per ${tier.displayUnit}` : `per ${activeFormat.unitLabel.toLowerCase()}`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Result & Calculation Breakdown Card (5 Cols on LG) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border-2 border-[#D1C5B4] shadow-md relative overflow-hidden">
              
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD1]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF2E2] flex items-center justify-center text-[#775A19]">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#775A19] font-bold uppercase tracking-wider block">Ringkasan Estimasi</span>
                    <span className="text-xs text-[#7F7667]">Dihitung secara real-time</span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#FAF2E2] border border-[#E8DFD1] text-[11px] text-[#775A19] font-medium">
                  {activeFormat.name}
                </div>
              </div>

              {/* Main Total Display */}
              <div className="py-6 text-center border-b border-[#E8DFD1]">
                <span className="text-xs text-[#7F7667] uppercase tracking-wider font-semibold block mb-1">
                  Perkiraan Total Investasi Jamuan
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2521] tracking-tight">
                  {formatRupiah(totalCost)}
                </div>
                <div className="text-xs text-[#7F7667] mt-1.5 flex items-center justify-center gap-1">
                  {activeTier.displayPrice && activeTier.displayUnit && activeTier.displayUnit.includes('tampah') ? (
                    <span>
                      Estimasi untuk {guestCount} tamu • {activeTier.displayPrice} / {activeTier.displayUnit}
                    </span>
                  ) : (
                    <>
                      <span>{guestCount} {activeFormat.unitLabel}</span>
                      <span>×</span>
                      <span className="font-semibold text-[#2C2521]">{formatRupiah(activeTier.price)}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Selected Tier & Package Details */}
              <div className="py-5 border-b border-[#E8DFD1] space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#7F7667] uppercase tracking-wider block">Paket Rekomendasi:</span>
                    <h5 className="text-sm font-bold text-[#2C2521]">{activeTier.name}</h5>
                  </div>
                  {matchedPackage && onSelectPackage && (
                    <button
                      type="button"
                      onClick={() => onSelectPackage(matchedPackage)}
                      className="inline-flex items-center gap-1 text-xs text-[#775A19] hover:underline font-semibold shrink-0 cursor-pointer pt-0.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Lihat Menu
                    </button>
                  )}
                </div>
                <p className="text-xs text-[#665D58] bg-[#FAF6EE] p-3 rounded-lg border border-[#E8DFD1] leading-relaxed">
                  {activeTier.description}
                </p>
              </div>

              {/* Value Add / Included Benefits */}
              <div className="py-5 border-b border-[#E8DFD1]">
                <span className="text-xs font-semibold text-[#2C2521] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#775A19]" />
                  Sudah Termasuk Dalam Layanan:
                </span>
                <ul className="space-y-2">
                  {activeFormat.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4E4639]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#775A19] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                {/* Primary WhatsApp Action */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary !py-3.5 flex items-center justify-center gap-2 text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Konsultasikan Estimasi via WhatsApp</span>
                </a>

                {/* Secondary Action: Jump to Booking Form */}
                <a
                  href="#reservasi"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#D1C5B4] bg-[#FAF6EE] text-[#4E4639] hover:text-[#2C2521] hover:bg-[#F5EFE5] text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Lanjut Isi Formulir Reservasi</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#775A19]" />
                </a>

                {/* Bespoke Budget & Intimate Callout */}
                <div className="p-3.5 rounded-xl bg-[#FAF6EE] border border-[#E8DFD1] flex items-start gap-2.5 text-left">
                  <Sparkles className="w-4 h-4 text-[#775A19] shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#665D58] leading-relaxed">
                    <span className="font-semibold text-[#2C2521] block mb-0.5">Punya Budget Khusus atau Tamu 5–15 Orang?</span>
                    Estimasi di atas adalah acuan paket standar. Tim kuliner kami siap meracik menu tailor-made sesuai alokasi dana Anda.{' '}
                    <a
                      href={createWhatsAppUrl(
                        businessInfo.whatsapp,
                        'Halo Dapur Rasa Catering, saya ingin konsultasi menu khusus yang disesuaikan dengan anggaran / tamu terbatas untuk acara saya.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#775A19] font-bold underline hover:text-[#5C4513] inline-flex items-center gap-0.5"
                    >
                      Chat Tim Kuliner ↗
                    </a>
                  </div>
                </div>

                <p className="text-[11px] text-[#7F7667] text-center leading-normal pt-1">
                  *Estimasi di atas bersifat fleksibel dan dapat dikustomisasi sesuai selera, tema, dan lokasi acara Anda.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
