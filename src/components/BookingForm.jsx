import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Users, MapPin, Phone, User, Send, Sparkles, ChevronDown, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessInfo } from '../data/cateringData';
import { createWhatsAppUrl, formatDateIndo } from '../utils/formatters';
import FormInput from './FormInput';

const eventTypeOptions = [
  'Resepsi Pernikahan',
  'Gathering Perusahaan / Kantor',
  'Syukuran & Tasyakuran',
  'Seminar & Workshop',
  'Arisan & Acara Keluarga',
  'Jamuan Privat / Lainnya'
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'Resepsi Pernikahan',
    location: '',
    guests: '150',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value || !value.trim()) {
          return 'Nama lengkap wajib diisi';
        }
        if (value.trim().length < 3) {
          return 'Nama minimal 3 karakter';
        }
        return '';

      case 'phone': {
        if (!value || !value.trim()) {
          return 'Nomor WhatsApp wajib diisi';
        }
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10) {
          return `Nomor minimal 10 digit (baru ${digits.length} digit)`;
        }
        if (digits.length > 15) {
          return 'Nomor maksimal 15 digit angka';
        }
        return '';
      }

      case 'date': {
        if (!value) {
          return 'Silakan tentukan rencana tanggal acara';
        }
        const todayStr = new Date().toISOString().split('T')[0];
        if (value < todayStr) {
          return 'Tanggal acara tidak boleh tanggal yang sudah lewat';
        }
        return '';
      }

      case 'guests': {
        if (!value || value === '') {
          return 'Estimasi jumlah tamu wajib diisi';
        }
        const num = Number(value);
        if (isNaN(num) || num < 20) {
          return 'Estimasi pesanan minimal 20 porsi';
        }
        return '';
      }

      case 'location':
        if (!value || !value.trim()) {
          return 'Lokasi atau gedung acara wajib diisi';
        }
        if (value.trim().length < 3) {
          return 'Lokasi acara minimal 3 karakter';
        }
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Filter non-digit characters for phone (allows digits, spaces, plus, dashes)
    if (name === 'phone') {
      formattedValue = value.replace(/[^\d\s+-]/g, '');
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    // Dynamic error clearing if field is already corrected
    if (errors[name]) {
      const errorMsg = validateField(name, formattedValue);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    ['name', 'phone', 'date', 'guests', 'location'].forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first erroneous field
      const firstInvalidField = ['name', 'phone', 'date', 'guests', 'location'].find(
        (f) => newErrors[f]
      );
      if (firstInvalidField) {
        const el = document.querySelector(`[name="${firstInvalidField}"]`);
        if (el) el.focus();
      }
      return;
    }

    // Format WhatsApp text matching user requested template
    const formattedDate = formatDateIndo(formData.date);
    const text = 
      `Halo Pawon Umi,\n\n` +
      `Saya ingin menanyakan ketersediaan layanan catering untuk acara saya pada tanggal ${formattedDate}.\n\n` +
      `Detail acara saya:\n\n` +
      `• Nama: ${formData.name.trim()}\n` +
      `• No. WhatsApp: ${formData.phone.trim()}\n` +
      `• Jenis Acara: ${formData.eventType}\n` +
      `• Jumlah Tamu: ${formData.guests} orang\n` +
      `• Lokasi Acara: ${formData.location.trim()}\n` +
      `• Catatan: ${formData.notes.trim() || 'Tidak ada'}\n\n` +
      `Mohon informasinya, apakah tanggal tersebut masih tersedia?\n\n` +
      `Terima kasih.`;

    const waUrl = createWhatsAppUrl(businessInfo.whatsapp, text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <section id="kontak" className="py-16 sm:py-20 md:py-28 bg-[#FBF9F5] border-b border-[#E8DFD1] w-full relative overflow-hidden">
      <span id="reservasi" className="absolute -top-24"></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        
        <div className="bg-[#F5F3EF] rounded-[0.75rem] border border-[#E8DFD1] overflow-hidden w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-w-0">
            
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 bg-[#EFEEEA] p-5 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E8DFD1] flex flex-col justify-between w-full min-w-0"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF9F5] border border-[#D1C5B4] text-[#775A19]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="label-sm text-[#4E4639]">Layanan Concierge</span>
                </div>

                <h3 className="headline-md text-[#2C2521]">
                  Kunci Jadwal & Sesi Food Tasting
                </h3>

                <p className="body-md text-[#4E4639]">
                  Musim pernikahan dan jamuan akhir pekan memiliki slot terbatas. Diskusikan konsep acara Anda bersama tim kurator jamuan kami.
                </p>

                <div className="space-y-4 pt-6 border-t border-[#E8DFD1]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#775A19] shrink-0 mt-1" />
                    <div>
                      <p className="label-sm text-[#2C2521]">Tasting Lounge & Dapur Pusat:</p>
                      <p className="body-sm text-xs text-[#665D58] mt-0.5">{businessInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#775A19] shrink-0 mt-1" />
                    <div>
                      <p className="label-sm text-[#2C2521]">Layanan Konsultasi Langsung:</p>
                      <p className="body-sm text-xs text-[#665D58] mt-0.5">+62 812-3456-7890 (Concierge Pawon Umi)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E8DFD1]">
                <p className="label-sm text-[#7F7667] normal-case">
                  *Pemesanan melalui formulir ini akan terhubung langsung ke WhatsApp tim Concierge Pawon Umi.
                </p>
              </div>
            </motion.div>

            {/* Right Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 p-5 sm:p-8 lg:p-12 bg-[#FBF9F5] w-full min-w-0"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5 w-full min-w-0">
                
                {/* Row 1: Nama & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full min-w-0">
                  <FormInput
                    id="booking-name"
                    name="name"
                    label="Nama Lengkap Anda"
                    placeholder="Ibu Rina Paramita"
                    icon={User}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    required
                    maxLength={80}
                  />

                  <FormInput
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    label="Nomor WhatsApp Aktif"
                    placeholder="08123456789"
                    icon={Phone}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    helperText="Minimal 10 digit angka WhatsApp aktif"
                    required
                    maxLength={20}
                  />
                </div>

                {/* Row 2: Tanggal & Jenis Acara (Overflow-Proof Dropdown) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full min-w-0">
                  <FormInput
                    id="booking-date"
                    name="date"
                    type="date"
                    label="Rencana Tanggal Acara"
                    icon={Calendar}
                    min={todayDateString}
                    value={formData.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.date}
                    required
                  />

                  <div className="w-full min-w-0 relative" ref={dropdownRef}>
                    <label
                      id="booking-eventType-label"
                      className="label-md text-[#2C2521] block mb-2 cursor-pointer"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      Jenis Acara <span className="text-[#775A19] font-bold" aria-hidden="true">*</span>
                    </label>
                    
                    {/* Overflow-Safe Dropdown Trigger */}
                    <button
                      type="button"
                      id="eventType-selector"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          setIsDropdownOpen(true);
                        }
                      }}
                      className={`w-full min-w-0 max-w-full px-3.5 py-2.5 rounded-[0.25rem] bg-white border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        isDropdownOpen
                          ? 'border-[#C5A059] ring-1 ring-[#C5A059]'
                          : 'border-[#E8DFD1] hover:border-[#C5A059]'
                      }`}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      aria-labelledby="booking-eventType-label"
                    >
                      <span className="truncate body-sm text-sm text-[#2C2521] font-medium pr-2">
                        {formData.eventType}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#775A19] shrink-0 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-[#C5A059]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Overflow-Safe Dropdown Menu Options with AnimatePresence */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-0 right-0 top-[calc(100%+4px)] w-full max-w-full min-w-0 bg-white rounded-[0.375rem] border border-[#D1C5B4] shadow-xl py-1 z-40"
                          role="listbox"
                          aria-labelledby="booking-eventType-label"
                        >
                          <div className="max-h-56 overflow-y-auto divide-y divide-[#F5F3EF]">
                            {eventTypeOptions.map((type) => (
                              <button
                                key={type}
                                type="button"
                                role="option"
                                aria-selected={formData.eventType === type}
                                onClick={() => {
                                  setFormData((prev) => ({ ...prev, eventType: type }));
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full min-w-0 max-w-full px-3.5 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                  formData.eventType === type
                                    ? 'bg-[#F5F3EF] text-[#775A19] font-semibold'
                                    : 'text-[#4E4639] hover:bg-[#FBF9F5] hover:text-[#2C2521]'
                                }`}
                              >
                                <span className="truncate pr-2">{type}</span>
                                {formData.eventType === type && (
                                  <Check className="w-4 h-4 text-[#775A19] shrink-0" aria-hidden="true" />
                                )}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Row 3: Estimasi Tamu & Lokasi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full min-w-0">
                  <FormInput
                    id="booking-guests"
                    name="guests"
                    type="number"
                    label="Estimasi Jumlah Tamu"
                    placeholder="150"
                    icon={Users}
                    min="20"
                    max="10000"
                    value={formData.guests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.guests}
                    helperText="Minimum pemesanan 20 porsi"
                    required
                  />

                  <FormInput
                    id="booking-location"
                    name="location"
                    label="Lokasi / Gedung Acara"
                    placeholder="Gedung / Kediaman Pribadi"
                    icon={MapPin}
                    value={formData.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.location}
                    required
                    maxLength={150}
                  />
                </div>

                {/* Row 4: Catatan Khusus */}
                <div className="w-full min-w-0">
                  <label htmlFor="booking-notes" className="label-md text-[#2C2521] block mb-2 cursor-pointer">
                    Catatan Khusus atau Permintaan Food Tasting (Opsional)
                  </label>
                  <textarea
                    id="booking-notes"
                    name="notes"
                    rows="3"
                    maxLength={500}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Contoh: Kami berencana mengadakan sesi food tasting untuk 4 orang di akhir pekan ini..."
                    className="w-full px-4 py-2.5 rounded-[0.25rem] bg-white border border-[#E8DFD1] focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] body-sm text-sm resize-none"
                  ></textarea>
                </div>

                {/* Validation Summary Alert if errors present */}
                {Object.keys(errors).some((k) => errors[k]) && (
                  <div className="p-3.5 rounded-[0.25rem] bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Mohon lengkapi isian formulir yang belum sesuai sebelum melanjutkan.</span>
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="btn-primary w-full text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Konsultasi Sekarang</span>
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

