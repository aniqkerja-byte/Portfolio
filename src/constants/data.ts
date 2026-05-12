// Contact info — single source of truth.
// Swap `whatsappNumber` to the real number (digits only, with country code,
// no '+', no spaces, no dashes — wa.me format).
export const contactInfo = {
  email: "jombina.site@gmail.com",
  phoneDisplay: "+60 12-345 6789",
  phoneTel: "+60123456789", // tel: link format
  whatsappNumber: "60123456789", // wa.me format (no '+', no spaces)
  whatsappGreeting: "Hi JomBina, I'd like to discuss a project.",
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
    slug: "probiozen",
    title: "Probiozen",
    category: "Health & Wellness",
    year: "2024",
    desc: "High-conversion landing page for Probiozen health supplements.",
    challenge:
      "To communicate complex health benefits in a simple, engaging way that drives immediate purchases.",
    solution:
      "We designed a clean, trust-focused landing page with clear scientific backing, testimonials, and a streamlined checkout flow.",
    results: ["High Conversion Rate", "Fast Load Speed", "Mobile Optimized Analysis"],
    techStack: ["WordPress", "Elementor", "WooCommerce"],
    liveUrl: "https://bosta.com.my/probiozen/",
    image: "/work/probiozen.webp",
  },
  {
    slug: "missgoldenhair",
    title: "MissGoldenHair",
    category: "Beauty & Cosmetics",
    year: "2024",
    desc: "Elegant e-commerce presence for premium hair care products.",
    challenge:
      "Creating a luxurious brand aesthetic while ensuring the site remains approachable and easy to shop on.",
    solution:
      "Implemented a 'Gold & Black' premium theme with smooth animations and high-quality imagery to elevate the brand perception.",
    results: ["Premium Brand Identity", "Seamless Shopping Cart", "Interactive Product Gallery"],
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://missgoldenhair.vercel.app/",
    image: "/work/missgoldenhair.webp",
  },
  {
    slug: "ellscafe",
    title: "Ells Cafe",
    category: "Food & Beverage",
    year: "2023",
    desc: "Digital storefront for a trendy local cafe.",
    challenge: "Capturing the cozy, inviting atmosphere of the physical cafe in a digital format.",
    solution:
      "Used warm photography and typography to create a welcoming vibe, integrated with a digital menu system.",
    results: ["Digital Menu Integration", "Local SEO Dominance", "Instagram Integration"],
    techStack: ["WordPress", "PHP", "MySQL"],
    liveUrl: "https://bosta.com.my/ellscafe/",
    image: "/work/ellscafe.webp",
  },
  {
    slug: "bukupanduansihat",
    title: "Buku Panduan Sihat",
    category: "Digital Education",
    year: "2023",
    desc: "Sales page for a comprehensive digital health guide.",
    challenge:
      "Selling a digital product requires building high trust and clearly demonstrating value upfront.",
    solution:
      "Constructed a long-form sales letter style page with persuasive copywriting and clear value-stacking visuals.",
    results: ["Automated Digital Delivery", "High Trust Signals", "Payment Gateway Integration"],
    techStack: ["HTML5", "Tailwind CSS", "ToyyibPay"],
    liveUrl: "https://bosta.com.my/bukupanduansihat/",
    image: "/work/bukupanduansihat.webp",
  },
  {
    slug: "modul-formula-turun-10kg",
    title: "Modul Formula Turun 10KG",
    category: "Fitness Program",
    year: "2023",
    desc: "Membership and sales portal for a weight loss program.",
    challenge: "Managing user access and content delivery for a paid course.",
    solution:
      "Built a secure membership area with drip-feed content capability and progress tracking.",
    results: ["Secure Member Area", "Recurring Revenue Model", "Community Features"],
    techStack: ["WordPress", "LearnDash", "Billplz"],
    liveUrl: "https://bosta.com.my/formula-turun-10kg/",
    image: "/work/formulaturun10kg.webp",
  },
  {
    slug: "rawat-hormon",
    title: "Rawat Hormon",
    category: "Live Events",
    year: "2024",
    desc: "Registration and ticketing platform for health webinars.",
    challenge: "Handling traffic spikes during launch and ensuring smooth ticketing process.",
    solution:
      "Deployed a scalable landing page with an integrated countdown timer and scarcity mechanisms.",
    results: ["Scalable Infrastructure", "Automated Email Sequences", "QR Ticket Generation"],
    techStack: ["Next.js", "Serverless Functions", "SendGrid"],
    liveUrl: "https://bosta.com.my/RawatHormon/",
    image: "/work/rawathotmon.webp",
  },
];

export const servicesData = [
  {
    title: "Web & Landing Pages",
    desc: "High-conversion landing pages and corporate websites designed for speed and aesthetics.",
    tags: ["Marketing Sites", "Portfolio", "SEO"],
  },
  {
    title: "Web Applications",
    desc: "Complex, scalable web apps and SaaS platforms built with Next.js and React.",
    tags: ["Dashboard", "SaaS", "Automation"],
  },
  {
    title: "Mobile Development",
    desc: "Native-quality mobile applications for iOS and Android ecosystems.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "Database & Backend",
    desc: "Secure data architecture, API development, and cloud infrastructure management.",
    tags: ["PostgreSQL", "Supabase", "API"],
  },
];

export const pricingPlansData = [
  {
    name: "Landing Page",
    price: "RM490",
    priceRange: "- RM890",
    desc: "For rapid marketing campaigns & high conversion.",
    features: [
      "Premium Design (Single Page)",
      "Domain & Hosting (1 Year)",
      "WhatsApp / Payment Integration",
      "Conversion Copywriting",
      "Ready in 3-5 Days",
    ],
    highlight: false,
  },
  {
    name: "Corporate Web",
    price: "RM990",
    priceRange: "+",
    desc: "Official digital presence for companies & brands.",
    features: [
      "Up to 10 Structured Pages",
      "Mobile-Friendly CMS (Admin)",
      "Basic SEO Optimization",
      "Contact / Quotation Forms",
      "Professional Corporate Email",
    ],
    highlight: true,
  },
  {
    name: "E-Commerce",
    price: "RM1,890",
    priceRange: "+",
    desc: "Complete online store with payment gateways.",
    features: [
      "Cart & Checkout (FPX/Card)",
      "Product & Inventory Management",
      "Full Sales Dashboard",
      "Shipping System Integration",
      "System Training & Handover",
    ],
    highlight: false,
  },
];

export const faqsData = [
  {
    question: "How long does it take to build a website?",
    answer:
      "For a standard 'Landing Page', we typically deliver within 3-7 business days after receiving all assets. For more complex Corporate Websites or Systems, the timeline is around 2-4 weeks depending on the scope.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes, all our development packages (unless stated otherwise) include complimentary premium high-speed hosting and a .com domain registration for the first year.",
  },
  {
    question: "Are there any maintenance fees?",
    answer:
      "The first year is free. Afterward, we offer optional maintenance packages to keep your site updated, secure, and backed up. Alternatively, you only need to pay the annual renewal fee for the domain and hosting.",
  },
  {
    question: "Can I update the website content myself?",
    answer:
      "Absolutely. We build our websites using user-friendly CMS (Content Management Systems). We also provide a comprehensive video tutorial guiding you on how to edit text, images, and posts.",
  },
];

export const testimonialsData = [
  {
    quote:
      "The system Aniq built completely transformed how we manage logistics. It is fast, reliable, and exactly what we needed to scale.",
    author: "Azman Zulkifli",
    role: "Operations Manager, Logistik Maju",
    rating: 5,
  },
  {
    quote:
      "Professional delivery and excellent communication. He understood our brand vision and provided a landing page that converts customers.",
    author: "Sarah Lee",
    role: "Founder, Glow Beauty",
    rating: 5,
  },
  {
    quote:
      "Top-tier technical maintenance. Whenever there is an issue, it is resolved within hours. A true technical partner.",
    author: "David Khoo",
    role: "Director, TechStart Solutions",
    rating: 5,
  },
];
