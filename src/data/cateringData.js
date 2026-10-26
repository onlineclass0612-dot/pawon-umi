// Data menu dan paket katering Dapur Rasa Catering
// Mengacu pada panduan desain artisanal & understated luxury di DESIGN (1).md

export const businessInfo = {
  name: "Dapur Rasa",
  fullName: "Dapur Rasa Catering",
  tagline: "Catering Masakan Nusantara & Layanan Istimewa",
  subtitle: "Menghadirkan aneka masakan Nusantara lezat dengan bumbu rempah asli pilihan, penyajian rapi dan bersih, serta pelayanan ramah dan terpercaya.",
  phone: "+6285181738437",
  whatsapp: "6285181738437",
  phoneFormatted: "+62 851-8173-8437",
  email: "catering@dapurrasa.id",
  address: "Jl. Cikini Raya No. 45, Menteng, Jakarta Pusat",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl.+Cikini+Raya+No.+45,+Menteng,+Jakarta+Pusat",
  operationalHours: "Senin – Minggu: 08.00 – 20.00 WIB",
  stats: [
    { label: "Acara Sukses Terlayani", value: "2.800+" },
    { label: "Porsi Dihidangkan", value: "950.000+" },
    { label: "Kepuasan Pelanggan", value: "99.6%" },
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
  { id: "nasikotak", name: "Nasi Box" },
  { id: "tumpeng", name: "Tumpeng" },
  { id: "prasmanan", name: "Prasmanan" },
  { id: "kudapan", name: "Kudapan" }
];

export const packagesData = [
  // 1. KATEGORI NASI BOX (nasikotak) - Urut dari Termurah ke Termahal
  {
    id: "nasibox-dapur-rasa",
    category: "nasikotak",
    name: "Nasi Box Liwet Dapur Rasa",
    price: 42000,
    unit: "box",
    minOrder: 20,
    popular: false,
    image: "/images/nasibox_premium.webp",
    description: "Kemasan nasi box tebal ramah lingkungan dengan sekat rapi dan bersih. Nasi liwet harum teri Medan, ayam bakar Solo, bacem tahu tempe, sambal bajak & pisang.",
    features: [
      "Nasi Liwet Gurih Harum Daun Salam & Teri Medan",
      "Ayam Bakar Solo Bumbu Kecap Manis Gurih",
      "Bacem Tahu & Tempe Rempah Gula Kelapa",
      "Sambal Bajak Ulek Segar Terasi Matang",
      "Lalapan Timun, Kemangi & Tomat Ceri",
      "Kerupuk Kampung & Sendok Kayu Higienis",
      "Buah Pisang Cavendish Segar"
    ],
    includesStaff: false
  },
  {
    id: "nasibox-ayam-madu",
    category: "nasikotak",
    name: "Nasi Box Ayam Bakar Madu",
    price: 45000,
    unit: "box",
    minOrder: 20,
    popular: true,
    image: "/images/nasibox_premium.webp",
    description: "Kombinasi ayam bakar madu dengan taburan wijen sangrai, disajikan bersama urap sayur bumbu kelapa dan sambal matah segar.",
    features: [
      "Nasi Daun Jeruk Pandan Wangi Pulen",
      "Ayam Bakar Madu Tabur Wijen Sangrai",
      "Sambal Matah Bali Kecombrang Segar",
      "Tempe Mendoan Gurih & Cocolan Kecap Rawit",
      "Urap Sayur Bumbu Kelapa Bakar Harum",
      "Kerupuk Gendar Renyah Bawang",
      "Buah Jeruk Segar & Sendok Bambu Higienis"
    ],
    includesStaff: false
  },
  {
    id: "nasibox-bistik-andaliman",
    category: "nasikotak",
    name: "Nasi Box Bistik Sapi",
    price: 52000,
    unit: "box",
    minOrder: 20,
    popular: false,
    image: "/images/nasibox_premium.webp",
    description: "Irisan daging sapi empuk berselimut bumbu bistik lada hitam gurih lezat, disajikan berdampingan dengan tumis sayuran segar.",
    features: [
      "Nasi Putih Harum Bawang Merah Goreng",
      "Bistik Daging Sapi Saus Lada Hitam Gurih",
      "Telur Balado Balut Cabai Merah Keriting",
      "Tumis Buncis Jagung Manis & Wortel",
      "Perkedel Kentang Olahan Daging Cincang",
      "Kerupuk Udang Renyah Kemasan Kedap",
      "Air Mineral Gelas & Puding Mangga Segar"
    ],
    includesStaff: false
  },

  // 2. KATEGORI TUMPENG (tumpeng)
  {
    id: "tumpeng-syukuran-kenduri",
    category: "tumpeng",
    name: "Tumpeng Kenduri Barokah",
    price: 890000,
    unit: "tampah",
    minOrder: 1,
    popular: false,
    image: "/images/tumpeng_nusantara.webp",
    description: "Sajian tumpeng tradisional berukuran kompak di atas tampah anyam bambu berhias janur ukir, ideal untuk syukuran 15–20 tamu (± Rp 44.500/porsi).",
    features: [
      "Porsi Ideal Jamuan 15–20 Tamu",
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
    id: "tumpeng-parahyangan-agung",
    category: "tumpeng",
    name: "Tumpeng Mahligai Rempah",
    price: 1350000,
    unit: "tampah",
    minOrder: 1,
    popular: true,
    image: "/images/tumpeng_nusantara.webp",
    description: "Karya seni tumpeng kuning bertingkat di atas tampah anyam bambu berhias lipatan daun pisang dan ukiran sayuran segar untuk 25–30 tamu (± Rp 45.000/porsi).",
    features: [
      "Porsi Ideal Jamuan 25–30 Tamu",
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
    name: "Tumpeng Mini Eksklusif",
    price: 48000,
    unit: "porsi",
    minOrder: 20,
    popular: false,
    image: "/images/tumpeng_nusantara.webp",
    description: "Sajian porsi perorangan dalam wadah mika bulat bening berikat pita satin cantik dan kartu ucapan acara Anda.",
    features: [
      "Sajian Praktis Porsi Perorangan Berpita Satin Cantik",
      "Nasi Kuning Mini Bentuk Kerucut",
      "Ayam Suwir Balado Rempah Kelapa",
      "Perkedel Kentang Mini",
      "Telur Dadar Gulung Iris Halus",
      "Orek Tempe Gurih Manis Gula Jawa",
      "Sambal Bajak Botol Mini Segel"
    ],
    includesStaff: false
  },

  // 3. KATEGORI PRASMANAN (prasmanan) - Urut dari Termurah ke Termahal
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
      "Rendang Daging Sapi Karamel Khas Dapur Rasa",
      "Sambal Goreng Ati Kentang Balado",
      "Kerupuk Udang Gurih",
      "Es Buah Segar Nata de Coco",
      "Puding Sutra Vla Vanilla & Air Mineral"
    ],
    includesStaff: true,
    setupDuration: "2 Jam Sebelum Acara"
  },
  {
    id: "prasmanan-danapramita",
    category: "prasmanan",
    name: "Prasmanan Jamuan Danapramita",
    price: 88000,
    unit: "porsi",
    minOrder: 60,
    popular: true,
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
    id: "prasmanan-rajapatni",
    category: "prasmanan",
    name: "Prasmanan Agung Rajapatni",
    price: 105000,
    unit: "porsi",
    minOrder: 80,
    popular: false,
    image: "/images/hero_catering_buffet.webp",
    description: "Koleksi jamuan paling lengkap dan istimewa. Harmoni hidangan khas Nusantara dengan penataan mewah dan wadah pemanas makanan keemasan.",
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

  // 4. KATEGORI KUDAPAN (kudapan) - Urut dari Termurah ke Termahal
  {
    id: "kudapan-priyayi-klasik",
    category: "kudapan",
    name: "Kudapan Priyayi Klasik",
    price: 32000,
    unit: "porsi",
    minOrder: 30,
    popular: false,
    image: "/images/kudapan_tradisional.webp",
    description: "Paduan 3 macam kue tradisional tempo dulu dan modern dengan kehangatan kopi tubruk rempah serta teh melati hangat.",
    features: [
      "Lemper Bakar Ayam Gurih Daun Pisang",
      "Kue Lapis Legit Tradisional",
      "Risoles Ragout Daging Asap Mayo",
      "Kopi Tubruk Rempah & Teh Melati Hangat",
      "Peralatan Cangkir & Piring Saji Keramik"
    ],
    includesStaff: false
  },
  {
    id: "kudapan-executive-corner",
    category: "kudapan",
    name: "Kudapan Coffee Break Eksekutif",
    price: 45000,
    unit: "porsi",
    minOrder: 40,
    popular: true,
    image: "/images/kudapan_tradisional.webp",
    description: "Pilihan 4 macam jajanan pasar dan pie buah segar dipadukan dengan sajian kopi seduh dan aneka teh pilihan.",
    features: [
      "Kue Lumpur Labu Kuning Tabur Kismis",
      "Fruit Tartlet Vla Vanilla Buah Segar",
      "Pastry Croissant Mini Daging Asap Keju",
      "Lemper Pulen Ayam Suwir Pedas Manis",
      "Sajian Kopi Seduh Hangat & Aneka Teh Pilihan",
      "Pramusaji Siaga untuk Merapikan & Refill Minuman"
    ],
    includesStaff: true
  },
  {
    id: "kudapan-imperial-hightea",
    category: "kudapan",
    name: "Prasmanan Kudapan & Kopi Istimewa",
    price: 65000,
    unit: "porsi",
    minOrder: 50,
    popular: false,
    image: "/images/kudapan_tradisional.webp",
    description: "Sajian coffee break istimewa dengan aneka kue lezat, lapis legit prunes, jus buah segar asli, serta seduhan kopi barista dan teh pilihan.",
    features: [
      "Roti Panggang Salmon Asap & Krim Keju",
      "Lapis Legit Spesial Butter Wijsman",
      "Mini Quiche Keju Panggang",
      "Kue Cokelat & Macaron Buah",
      "Sajian Kopi Barista & Pilihan Teh Segar",
      "Jus Buah Segar Asli (Jeruk & Jambu)",
      "Pramusaji Khusus & Set Perlengkapan Cangkir Keramik Elegan"
    ],
    includesStaff: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Clarissa Dananjaya",
    role: "Pengantin Baru (Resepsi di Plataran Cilandak)",
    comment: "Dapur Rasa benar-benar melebihi ekspektasi kami. Meja prasmanan ditata begitu cantik dengan bunga segar dan wadah pemanas keemasan yang mewah. Semua tamu kami memuji rasa rendang dan kambing gulingnya yang luar biasa empuk!",
    rating: 5,
    event: "Resepsi Pernikahan — 600 Tamu"
  },
  {
    id: 2,
    name: "Raditya Prasetyo, S.E.",
    role: "Head of Corporate Affairs di Danareksa",
    comment: "Setiap ada pertemuan dewan direksi dan acara kantor, kami selalu mempercayakannya ke Dapur Rasa. Kemasan nasi box-nya sangat rapi, bersih, dan cita rasa bumbu rempahnya sangat lezat.",
    rating: 5,
    event: "Makan Siang Pertemuan Kantor"
  },
  {
    id: 3,
    name: "Dr. Farah Amalia, Sp.A",
    role: "Tuan Rumah Acara Tasyakuran & Aqiqah",
    comment: "Tumpeng dari Dapur Rasa jadi pusat perhatian di acara keluarga kami. Hiasan janur dan ukirannya sangat detail dan cantik. Pelayanan timnya juga sangat ramah dan tepat waktu.",
    rating: 5,
    event: "Tasyakuran Keluarga Besar"
  }
];

export const faqList = [
  {
    q: "Berapa hari sebelum acara pemesanan harus dikonfirmasi?",
    a: "Untuk Nasi Box dan Tumpeng Syukuran, pemesanan dapat dikonfirmasi minimal H-3 sebelum tanggal acara. Untuk Prasmanan dan Resepsi Pernikahan, kami menyarankan konfirmasi H-14 hingga H-30 agar tim kami dapat menyiapkan pesanan dan dekorasi meja secara optimal."
  },
  {
    q: "Apakah Dapur Rasa menyediakan sesi cicip makanan (Food Tasting)?",
    a: "Tentu. Kami menyediakan sesi cicip makanan gratis untuk 4 orang (calon pengantin & keluarga atau panitia acara) di Dapur Pusat Dapur Rasa, Menteng, Jakarta Pusat, untuk pemesanan prasmanan di atas 100 porsi atau paket resepsi."
  },
  {
    q: "Apakah paket prasmanan sudah mencakup peralatan dan pramusaji?",
    a: "Ya, seluruh paket prasmanan Dapur Rasa sudah termasuk peralatan saji lengkap (wadah pemanas makanan roll-top keemasan/stainless elegan, piring keramik, sendok-garpu bersih, dan gelas) serta tim pramusaji berseragam rapi yang siap melayani selama acara berlangsung."
  },
  {
    q: "Bagaimana tahapan pembayaran dan reservasi tanggal?",
    a: "Booking tanggal dilakukan dengan uang muka (DP) 30% saat konfirmasi pesanan, 40% pembayaran termin kedua pada H-7 sebelum acara, dan 30% pelunasan pada H-1 acara."
  },
  {
    q: "Apakah area layanan mencakup seluruh wilayah Jabodetabek?",
    a: "Benar, armada pengantaran kami melayani pengiriman ke seluruh wilayah DKI Jakarta, Bogor, Depok, Tangerang, Tangerang Selatan, dan Bekasi dengan jaminan makanan tiba dalam keadaan hangat dan bersih."
  }
];
