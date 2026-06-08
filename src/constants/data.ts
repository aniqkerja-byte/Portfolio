// Contact info — single source of truth.
// Swap `whatsappNumber` to the real number (digits only, with country code,
// no '+', no spaces, no dashes — wa.me format).
export const contactInfo = {
  email: "jombina.site@gmail.com",
  phoneDisplay: "+60 11-2418 7824",
  phoneTel: "+601124187824", // tel: link format
  whatsappNumber: "601124187824", // wa.me format (no '+', no spaces)
  whatsappGreeting: "Hai JomBina, saya nak tanya pasal servis buat website untuk bisnes saya.",
};

export const whatsappUrl = () =>
  `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappGreeting)}`;

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  liveUrl: string;
  image: string;
};

export const projectsData: Project[] = [
  {
    slug: "jomenvois",
    title: "JomEnvois",
    category: "Sistem Kewangan",
    year: "2025",
    desc: "Sistem buat invoice yang simple, cepat, dan boleh terus preview PDF tanpa setup yang memeningkan.",
    challenge:
      "Freelancer dan bisnes kecil perlukan cara yang cepat untuk buat invoice tanpa belajar software yang berat atau bayar sistem bulanan.",
    solution:
      "Kami bina aplikasi web ringan yang boleh terus digunakan dalam browser, lengkap dengan preview PDF dan rekod invoice secara local.",
    results: ["Invoice Siap Lebih Cepat", "Data Kekal Di Browser", "Sokong Banyak Mata Wang"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://jom-envois.vercel.app/",
    image: "/work/jomenvois.png?v=3",
  },
  {
    slug: "probiozen",
    title: "Probiozen",
    category: "Kesihatan & Kecergasan",
    year: "2024",
    desc: "Landing page jualan untuk produk kesihatan, disusun supaya pelanggan cepat faham manfaat produk.",
    challenge:
      "Produk kesihatan selalunya ada banyak info. Cabarannya ialah susun ayat supaya nampak jelas, meyakinkan dan tak terlalu berat untuk dibaca.",
    solution:
      "Kami susun landing page dengan flow jualan yang kemas, bukti sokongan, testimoni, dan butang tindakan yang mudah nampak.",
    results: ["Ayat Jualan Lebih Jelas", "Loading Pantas", "Mesra Mobile"],
    techStack: ["WordPress", "Elementor", "WooCommerce"],
    liveUrl: "https://bosta.com.my/probiozen/",
    image: "/work/probiozen.png?v=3",
  },
  {
    slug: "missgoldenhair",
    title: "MissGoldenHair",
    category: "Kecantikan & Kosmetik",
    year: "2024",
    desc: "Kedai online untuk produk penjagaan rambut premium, dengan rupa yang nampak eksklusif dan mudah beli.",
    challenge:
      "Brand perlu nampak premium, tapi pengalaman membeli tetap kena mudah dan tidak mengelirukan pelanggan.",
    solution:
      "Kami gunakan visual hitam-emas, susunan produk yang jelas, dan aliran beli yang lebih lancar untuk naikkan keyakinan pelanggan.",
    results: ["Brand Nampak Premium", "Troli Lebih Mudah", "Produk Senang Dibandingkan"],
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://missgoldenhair.vercel.app/",
    image: "/work/missgoldenhair.png?v=3",
  },
  {
    slug: "ellscafe",
    title: "Ells Cafe",
    category: "Makanan & Minuman",
    year: "2023",
    desc: "Website untuk kafe tempatan supaya pelanggan boleh tengok menu, suasana dan info penting dengan cepat.",
    challenge:
      "Kafe perlukan website yang terus bagi rasa suasana kedai, bukan sekadar letak nama dan alamat sahaja.",
    solution:
      "Kami susun gambar, menu digital dan info lokasi dalam layout yang mesra mobile supaya pelanggan mudah plan untuk datang.",
    results: ["Menu Mudah Dilihat", "Bantu Carian Google", "Visual Kafe Lebih Menarik"],
    techStack: ["WordPress", "PHP", "MySQL"],
    liveUrl: "https://bosta.com.my/ellscafe/",
    image: "/work/ells_cafe.png?v=3",
  },
  {
    slug: "bukupanduansihat",
    title: "Buku Panduan Sihat",
    category: "Pendidikan Digital",
    year: "2023",
    desc: "Landing page untuk produk digital kesihatan, fokus pada penerangan nilai dan proses beli yang jelas.",
    challenge:
      "Produk digital perlukan keyakinan. Pelanggan perlu faham apa yang mereka dapat sebelum sanggup bayar.",
    solution:
      "Kami bina landing page format sales letter dengan penerangan manfaat, bukti, visual dan sistem bayaran yang mudah.",
    results: ["Produk Terhantar Automatik", "Kepercayaan Lebih Kuat", "Bayaran Lebih Mudah"],
    techStack: ["HTML5", "Tailwind CSS", "ToyyibPay"],
    liveUrl: "https://bosta.com.my/bukupanduansihat/",
    image: "/work/buku_panduan_sihat.png?v=3",
  },
  {
    slug: "modul-formula-turun-10kg",
    title: "Modul Formula Turun 10KG",
    category: "Program Kecergasan",
    year: "2023",
    desc: "Portal jualan dan membership untuk program penurunan berat badan.",
    challenge:
      "Program berbayar perlu sistem akses yang jelas supaya peserta dapat content yang betul selepas pembayaran.",
    solution:
      "Kami bina ruang ahli dengan akses terkawal, susunan modul, dan pengalaman pengguna yang senang diikuti.",
    results: ["Ruang Ahli Tersusun", "Content Mudah Diakses", "Sesuai Untuk Program Berbayar"],
    techStack: ["WordPress", "LearnDash", "Billplz"],
    liveUrl: "https://bosta.com.my/formula-turun-10kg/",
    image: "/work/modul_formula_turun_10kg.png?v=3",
  },
  {
    slug: "rawat-hormon",
    title: "Rawat Hormon",
    category: "Acara Langsung",
    year: "2024",
    desc: "Landing page dan sistem pendaftaran untuk webinar kesihatan.",
    challenge:
      "Semasa kempen promosi, ramai pelawat masuk serentak. Page perlu laju dan proses daftar tak boleh menyusahkan.",
    solution:
      "Kami bina page kempen dengan pendaftaran yang jelas, elemen urgency, dan flow pembelian yang lebih lancar.",
    results: ["Page Tahan Trafik", "Pendaftaran Lebih Mudah", "Follow-Up Automatik"],
    techStack: ["Next.js", "Serverless Functions", "SendGrid"],
    liveUrl: "https://bosta.com.my/RawatHormon/",
    image: "/work/rawat_hormon.png?v=3",
  },
];

export const servicesData = [
  {
    title: "Website Bisnes & Landing Page",
    desc: "Untuk owner bisnes yang nak nampak profesional, explain servis dengan jelas, dan mudahkan pelanggan tekan WhatsApp atau buat tempahan.",
    tags: ["Website Syarikat", "Landing Page", "SEO Asas"],
  },
  {
    title: "Kedai Online & Sistem Bayaran",
    desc: "Sesuai kalau anda nak jual produk, ambil order, terima bayaran, dan urus pelanggan dari satu tempat.",
    tags: ["E-Commerce", "Payment Gateway", "Order Flow"],
  },
  {
    title: "Sistem Web Custom",
    desc: "Untuk bisnes yang perlukan sistem sendiri seperti booking, invoice, dashboard, membership atau automasi kerja harian.",
    tags: ["Dashboard", "Booking", "Membership"],
  },
  {
    title: "Setup Teknikal & Support",
    desc: "Kami bantu urus domain, hosting, email, analytics, performance dan perkara teknikal supaya website anda berjalan lancar.",
    tags: ["Domain", "Hosting", "Maintenance"],
  },
];

export const pricingPlansData = [
  {
    name: "Landing Page",
    price: "RM490",
    priceRange: "- RM890",
    desc: "Sesuai untuk jual satu produk, servis, kelas, webinar atau kempen promosi.",
    features: [
      "Design 1 halaman yang kemas",
      "Susunan ayat jualan yang jelas",
      "Butang WhatsApp / borang inquiry",
      "Setup domain & hosting asas",
      "Sesuai untuk mobile",
    ],
    highlight: false,
  },
  {
    name: "Laman Web Korporat",
    price: "RM990",
    priceRange: "+",
    desc: "Untuk bisnes yang nak website lengkap supaya pelanggan lebih yakin sebelum hubungi.",
    features: [
      "Halaman utama, servis, tentang & contact",
      "Struktur content yang mudah faham",
      "SEO asas untuk Google",
      "Borang inquiry / link WhatsApp",
      "Panduan selepas website siap",
    ],
    highlight: true,
  },
  {
    name: "Kedai Online (E-Commerce)",
    price: "RM1,890",
    priceRange: "+",
    desc: "Untuk bisnes yang nak jual produk online dengan sistem order dan pembayaran.",
    features: [
      "Produk, troli dan checkout",
      "Integrasi bayaran FPX / kad",
      "Dashboard urus order",
      "Setup penghantaran asas",
      "Training ringkas cara guna",
    ],
    highlight: false,
  },
];

export const faqsData = [
  {
    question: "Berapa lama biasanya website boleh siap?",
    answer:
      "Untuk landing page, biasanya 3 hingga 7 hari bekerja selepas content asas lengkap. Untuk website syarikat atau sistem yang lebih custom, anggaran biasa sekitar 2 hingga 4 minggu ikut skop.",
  },
  {
    question: "Kalau saya belum ada domain dan hosting, boleh bantu?",
    answer:
      "Boleh. Kami boleh bantu cadangkan dan setup domain, hosting, email asas, analytics dan perkara teknikal lain. Anda tak perlu settle semua benda seorang diri.",
  },
  {
    question: "Ada caj maintenance bulanan?",
    answer:
      "Bergantung pada jenis website. Untuk website statik yang simple, biasanya hanya perlu renew domain dan hosting. Kalau anda mahu kami jaga update, backup atau tambah content berkala, kami boleh cadangkan pakej maintenance berasingan.",
  },
  {
    question: "Boleh tak saya update content sendiri nanti?",
    answer:
      "Boleh, kalau projek anda perlukan CMS/admin panel. Kami akan bincang awal-awal. Untuk website simple, kami juga boleh bantu update content bila perlu.",
  },
  {
    question: "Saya tak pandai tulis ayat website. Macam mana?",
    answer:
      "Tak apa. Anda boleh beri point kasar tentang bisnes, produk, servis dan pelanggan sasaran. Kami bantu kemaskan ayat supaya lebih jelas dan sesuai untuk website.",
  },
];

export const testimonialsData = [
  {
    quote:
      "Sebelum ini proses kerja banyak manual. Lepas sistem siap, team kami lebih senang track kerja harian dan kurang tersilap data.",
    author: "Azman Zulkifli",
    role: "Pengurus Operasi, Logistik Maju",
    rating: 5,
  },
  {
    quote:
      "Website nampak jauh lebih kemas daripada yang kami bayangkan. Paling best, proses explain servis jadi lebih mudah bila customer tanya.",
    author: "Sarah Lee",
    role: "Pengasas, Glow Beauty",
    rating: 5,
  },
  {
    quote:
      "Saya tak begitu teknikal, tapi semuanya diterangkan dengan jelas. Lepas launch pun masih dibantu kalau ada benda yang saya tak pasti.",
    author: "David Khoo",
    role: "Pengarah, TechStart Solutions",
    rating: 5,
  },
];
