// Data menu dan paket katering Pawon Umi Catering
// Mengacu pada panduan desain artisanal & understated luxury di DESIGN (1).md

export const businessInfo = {
  name: "Pawon Umi",
  fullName: "Pawon Umi Catering",
  tagline: "Artisanal Indonesian & Bespoke Dining",
  subtitle: "Menghadirkan seni jamuan kuliner Nusantara terkurasi dengan rempah warisan otentik, estetika penyajian meja yang hangat, dan keramahan pelayanan berkelas.",
  phone: "6281234567890",
  whatsapp: "6281234567890",
  email: "concierge@pawonumi.id",
  address: "Jl. Cikini Raya No. 45, Menteng, Jakarta Pusat",
  operationalHours: "Senin – Minggu: 08.00 – 20.00 WIB",
  stats: [
    { label: "Bespoke Events Curated", value: "2.800+" },
    { label: "Porsi Dihidangkan", value: "950.000+" },
    { label: "Kepuasan Klien VIP", value: "99.6%" },
    { label: "Tahun Dedikasi Rasa", value: "14+" }
  ],
  certifications: [
    { name: "Sertifikasi Halal MUI Resmi", badge: "Halal ID3111000123456" },
    { name: "Sertifikat Laik Higiene Sanitasi", badge: "Kemenkes RI" },
    { name: "Standar Keamanan Pangan HACCP", badge: "HACCP Certified" }
  ]
};

export const menuCategories = [
  { id: "all", name: "Semua Sajian" },
  { id: "prasmanan", name: "Prasmanan / Buffet" },
  { id: "nasikotak", name: "Artisanal Rice Box" },
  { id: "tumpeng", name: "Tumpeng Syukuran" },
  { id: "coffeebreak", name: "Coffee Break & Kudapan" },
  { id: "wedding", name: "Paket Resepsi Pernikahan" }
];

export const packagesData = [
  {
    id: "prasmanan-bumi-kartika",
    category: "prasmanan",
    name: "Prasmanan Bumi Kartika",
    price: 72000,
    unit: "porsi",
    minOrder: 50,
    popular: false,
    image: "/images/hero_catering_buffet.webp",
    description: "Sajian jamuan hangat dengan olahan resep keluarga turun-temurun. Pilihan sempurna untuk syukuran keluarga, arisan intimate, dan gathering korporat.",
    features: [
      "Nasi Putih Pandan Wangi Cianjur",
      "Sop Kimlo Sari Rempah & Bakso Jamur",
      "Ayam Panggang Bumbu Rujak Tradisional",
      "Rendang Daging Sapi Karamel Khas Pawon Umi",
      "Sambal Goreng Ati Kentang Balado",
      "Kerupuk Udang Gurih",
      "Es Buah Segar Nata de Coco",
      "Puding Sutra Vla Vanilla & Air Mineral"
    ],
    includesStaff: true,
    setupDuration: "2 Jam Sebelum Acara"
  },
  {
    id: "prasmanan-rajapatni",
    category: "prasmanan",
    name: "Prasmanan Agung Rajapatni",
    price: 105000,
    unit: "porsi",
    minOrder: 80,
    popular: true,
    image: "/images/hero_catering_buffet.webp",
    description: "Koleksi jamuan agung paling prestisius. Harmoni hidangan istana Nusantara dengan sentuhan plating modern dan chafing dish tembaga keemasan.",
    features: [
      "Nasi Putih Wangi & Nasi Daun Jeruk Rempah",
      "Sop Iga Sapi Kuah Bening Rempah Kayu Manis",
      "Dendeng Batokok Balado Daun Jeruk Crispy",
      "Ayam Bakar Madu Hutan Wijen Sangrai",
      "Udang Windu Telur Asin Gurih",
      "Tumis Brokoli Jamur Shiitake Saus Tiram",
      "Karedok Sayur Segar Saus Kacang Mede",
      "Es Cendol Durian Khas Nusantara",
      "Pastry Corner & Aneka Buah Musiman Pilihan"
    ],
    includesStaff: true,
    setupDuration: "3 Jam Sebelum Acara"
  },
  {
    id: "prasmanan-danapramita",
    category: "prasmanan",
    name: "Prasmanan Jamuan Danapramita",
    price: 88000,
    unit: "porsi",
    minOrder: 60,
    popular: false,
    image: "/images/hero_catering_buffet.webp",
    description: "Perpaduan rasa istimewa kuliner pesisir dan pedalaman Nusantara. Sangat digemari untuk resepsi semi-formal, perayaan kantor, dan halal bihalal.",
    features: [
      "Nasi Putih Wangi Daun Pandan & Nasi Merah Organik",
      "Sup Ikan Gurame Asam Pedas Aroma Kemangi Segar",
      "Daging Sapi Saus Lada Hitam Karamel",
      "Ayam Panggang Klaten Bumbu Areh Gurih",
      "Gurame Fillet Krispi Saus Asam Manis Nanas",
      "Tumis Buncis Daging Cincang Bawang Putih",
      "Asinan Buah Segar Khas Batavia",
      "Puding Cokelat Vla Rhum & Es Doger Spesial"
    ],
    includesStaff: true,
    setupDuration: "2.5 Jam Sebelum Acara"
  },
  {
    id: "nasibox-pawon-umi",
    category: "nasikotak",
    name: "Artisanal Bento Nasi Liwet Pawon Umi",
    price: 42000,
    unit: "box",
    minOrder: 20,
    popular: true,
    image: "/images/nasibox_premium.webp",
    description: "Kotak bento kraft ramah lingkungan dengan sekat elegan higienis. Pilihan utama untuk rapat direksi, corporate luncheon, dan event privat.",
    features: [
      "Nasi Liwet Gurih Harum Daun Salam & Teri Medan",
      "Ayam Bakar Solo Glaze Kecap Manis Legendaris",
      "Bacem Tahu & Tempe Rempah Gula Kelapa",
      "Sambal Bajak Ulek Segar Terasi Matang",
      "Lalapan Timun, Kemangi & Tomat Ceri",
      "Kerupuk Kampung & Sendok Kayu Higienis",
      "Buah Pisang Cavendish Segar"
    ],
    includesStaff: false
  },
  {
    id: "nasibox-bistik-andaliman",
    category: "nasikotak",
    name: "Executive Box Bistik Sapi Rempah",
    price: 52000,
    unit: "box",
    minOrder: 20,
    popular: false,
    image: "/images/nasibox_premium.webp",
    description: "Irisan tenderloin sapi empuk berselimut saus bistik rempah manis gurih, disajikan berdampingan dengan sayuran sauteed mentega segar.",
    features: [
      "Nasi Putih Aromatik Bawang Merah Goreng",
      "Bistik Daging Sapi Saus Lada Hitam / Manis",
      "Telur Balado Balut Cabai Merah Keriting",
      "Tumis Buncis Baby Jagung Manis Wortel",
      "Perkedel Kentang Olahan Daging Cincang",
      "Kerupuk Udang Renyah Kemasan Kedap",
      "Air Mineral Cup & Puding Mangga Segar"
    ],
    includesStaff: false
  },
  {
    id: "nasibox-ayam-madu",
    category: "nasikotak",
    name: "Royal Bento Ayam Bakar Madu Wijaya",
    price: 45000,
    unit: "box",
    minOrder: 20,
    popular: false,
    image: "/images/nasibox_premium.webp",
    description: "Kombinasi ayam bakar madu hutan wijen sangrai dengan sajian sayuran tradisional dan sambal matah harum menggugah selera.",
    features: [
      "Nasi Daun Jeruk Pandan Wangi Pulen",
      "Ayam Bakar Madu Klanceng Tabur Wijen Sangrai",
      "Sambal Matah Bali Kecombrang Segar",
      "Tempe Mendoan Gurih & Cocolan Kecap Rawit",
      "Urap Sayur Bumbu Kelapa Bakar Harum",
      "Kerupuk Gendar Renyah Bawang",
      "Buah Jeruk Segar & Sendok Bambu Higienis"
    ],
    includesStaff: false
  },
  {
    id: "tumpeng-parahyangan-agung",
    category: "tumpeng",
    name: "Tumpeng Agung Mahligai Rempah",
    price: 1350000,
    unit: "tampah (untuk 25-30 tamu)",
    minOrder: 1,
    popular: true,
    image: "/images/tumpeng_nusantara.webp",
    description: "Karya seni tumpeng kuning bertingkat di atas tampah anyam bambu berhias lipatan daun pisang dan ukiran sayuran segar karya pengrajin boga.",
    features: [
      "Nasi Kuning Kunyit Segar & Santan Kelapa Murni",
      "Ayam Goreng Lengkuas Gurih Renyah (30 Potong)",
      "Sambal Goreng Ati Sapi Ampela Balado Merah",
      "Perkedel Kentang Emas Goreng Telur",
      "Telur Dadar Rawis Halus & Telur Puyuh Pindang",
      "Kering Tempe Kacang Tanah Renyah Gurih",
      "Urap Sayuran Segar Bumbu Kelapa Sangrai",
      "Plat Tulisan Ucapan Syukuran Custom & Pisau Khusus"
    ],
    includesStaff: false
  },
  {
    id: "tumpeng-mini-parahyangan",
    category: "tumpeng",
    name: "Tumpeng Mini Dome Exclusive",
    price: 48000,
    unit: "kubah",
    minOrder: 20,
    popular: false,
    image: "/images/tumpeng_nusantara.webp",
    description: "Porsi perorangan dalam mika dome transparan berikat pita satin dan kartu ucapan kustom bertuliskan nama acara Anda.",
    features: [
      "Nasi Kuning Mini Bentuk Candi / Kerucut",
      "Ayam Suwir Balado Rempah Kelapa",
      "Perkedel Kentang Mini",
      "Telur Dadar Gulung Iris Halus",
      "Orek Tempe Gurih Manis Gula Jawa",
      "Sambal Bajak Botol Mini Segel"
    ],
    includesStaff: false
  },
  {
    id: "tumpeng-syukuran-kenduri",
    category: "tumpeng",
    name: "Tumpeng Kenduri Barokah Nusantara",
    price: 890000,
    unit: "tampah (untuk 15-20 tamu)",
    minOrder: 1,
    popular: false,
    image: "/images/tumpeng_nusantara.webp",
    description: "Sajian tumpeng tradisional berukuran kompak untuk perayaan ulang tahun, selamatan rumah baru, atau doa bersama keluarga terdekat.",
    features: [
      "Nasi Kuning Gurih Harum Daun Pandan & Santan",
      "Ayam Ungkep Goreng Kremes Lengkuas (20 Potong)",
      "Sambal Goreng Krecek Daging Sapi Cincang",
      "Perkedel Kentang Wangi Daun Bawang",
      "Telur Dadar Rawis & Telur Puyuh Semur",
      "Kering Tempe Kacang Renyah Manis Gurih",
      "Hiasan Janur & Ukiran Sayuran Cantik"
    ],
    includesStaff: false
  },
  {
    id: "coffeebreak-priyayi",
    category: "coffeebreak",
    name: "Snack Box & Coffee Break Priyayi",
    price: 32000,
    unit: "box / tamu",
    minOrder: 30,
    popular: false,
    image: "/images/nasibox_premium.webp",
    description: "Paduan jajanan pasar tradisional warisan keraton dengan kelembutan pastry modern untuk menyegarkan jeda pertemuan formal.",
    features: [
      "Lemper Bakar Ayam Gurih Daun Pisang",
      "Risoles Ragout Daging Asap Mayo Lembut",
      "Kue Lumpur Labu Kuning / Pie Buah Segar",
      "Air Mineral Botol 330ml",
      "Opsional: Live Coffee & Herbal Tisane Station (+Rp 15.000/tamu)"
    ],
    includesStaff: false
  },
  {
    id: "wedding-kirana-heritage",
    category: "wedding",
    name: "Resepsi Kirana Heritage (500 Tamu)",
    price: 48500000,
    unit: "paket jamuan lengkap",
    minOrder: 1,
    popular: true,
    image: "/images/wedding_catering_event.webp",
    description: "Paket jamuan pernikahan all-inclusive: 500 porsi prasmanan utama berkelas + 3 live food stalls terfavorit + dekorasi meja saji eksklusif.",
    features: [
      "500 Porsi Prasmanan Utama (Menu Rajapatni Bintang 5)",
      "Food Stall 1: Kambing Guling Empuk Bumbu Kecap (2 Ekor)",
      "Food Stall 2: Sate Ayam Madura Daging Pilihan (400 Tusuk)",
      "Food Stall 3: Zuppa Soup Hangat Krim Jamur Pastry (250 Porsi)",
      "Dessert Corner: Es Doger Tradisional & Aneka Buah",
      "Peralatan Chafing Dish Mewah Roll Top Gold & Tembaga",
      "12 Pramusaji Berpengalaman & Berseragam Rapi Standby",
      "Dekorasi Bunga Segar & Skirting Meja Prasmanan Elegan"
    ],
    includesStaff: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Clarissa Dananjaya",
    role: "Pengantin Baru (Resepsi di Plataran Cilandak)",
    comment: "Pawon Umi benar-benar melebihi ekspektasi kami. Meja prasmanan ditata begitu cantik dengan bunga segar dan chafing dish tembaga keemasan. Semua tamu kami memuji rasa rendang dan kambing gulingnya yang luar biasa empuk!",
    rating: 5,
    event: "Wedding Reception — 600 Guests"
  },
  {
    id: 2,
    name: "Raditya Prasetyo, S.E.",
    role: "Head of Corporate Affairs di Danareksa",
    comment: "Setiap ada pertemuan dewan direksi dan jamuan VIP, kami selalu mempercayakannya ke Pawon Umi. Packaging artisanal rice box-nya sangat berkelas, higienis, dan cita rasa bumbu rempahnya sangat otentik.",
    rating: 5,
    event: "Executive Luncheon Meeting"
  },
  {
    id: 3,
    name: "Dr. Farah Amalia, Sp.A",
    role: "Tuan Rumah Acara Tasyakuran & Aqiqah",
    comment: "Tumpeng Agung dari Pawon Umi jadi pusat perhatian di acara keluarga kami. Hiasan janur dan ukirannya sangat detail dan berseni tinggi. Pelayanan timnya juga sangat ramah dan tepat waktu.",
    rating: 5,
    event: "Tasyakuran Keluarga Besar"
  }
];

export const faqList = [
  {
    q: "Berapa hari sebelum acara pemesanan harus dikonfirmasi?",
    a: "Untuk Artisanal Rice Box dan Tumpeng Syukuran, pemesanan dapat dikonfirmasi minimal H-3 sebelum tanggal acara. Untuk Prasmanan dan Resepsi Pernikahan berskala besar, kami menyarankan konfirmasi H-14 hingga H-30 agar tim kami dapat mengunci jadwal dapur dan menyiapkan dekorasi meja secara optimal."
  },
  {
    q: "Apakah Pawon Umi menyediakan sesi Food Tasting?",
    a: "Tentu. Kami menyediakan sesi Food Tasting gratis untuk 4 orang (calon pengantin & keluarga atau panitia korporat) di Tasting Lounge Pawon Umi, Menteng, Jakarta Pusat, untuk pemesanan prasmanan di atas 100 porsi atau paket resepsi."
  },
  {
    q: "Apakah paket prasmanan sudah mencakup peralatan dan pramusaji?",
    a: "Ya, seluruh paket prasmanan Pawon Umi sudah termasuk peralatan saji lengkap (roll-top chafing dish keemasan/stainless elegan, piring keramik, sendok-garpu beratina, dan gelas) serta tim pramusaji berseragam rapi yang standby selama durasi acara."
  },
  {
    q: "Bagaimana tahapan pembayaran dan reservasi tanggal?",
    a: "Booking tanggal dilakukan dengan uang muka (DP) 30% saat penandatanganan penawaran, 40% pelunasan termin kedua pada H-7 sebelum acara, dan 30% sisa pelunasan pada H-1 acara."
  },
  {
    q: "Apakah area layanan mencakup seluruh wilayah Jabodetabek?",
    a: "Benar, armada katering berpendingin kami melayani pengiriman ke seluruh wilayah DKI Jakarta, Bogor, Depok, Tangerang, Tangerang Selatan, dan Bekasi dengan jaminan hidangan tiba dalam keadaan hangat dan higienis."
  }
];
