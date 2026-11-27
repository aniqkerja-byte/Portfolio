// Canonical origin — single source of truth for metadataBase, sitemap,
// robots and JSON-LD. No trailing slash.
export const siteUrl = "https://jombina.site";

// Contact info — single source of truth.
// Swap `whatsappNumber` to the real number (digits only, with country code,
// no '+', no spaces, no dashes — wa.me format).
export const contactInfo = {
  email: "jombina.site@gmail.com",
  phoneDisplay: "+60 11-2418 7824",
  phoneTel: "+601124187824", // tel: link format
  whatsappNumber: "601124187824", // wa.me format (no '+', no spaces)
  whatsappGreeting: "Hi JomBina, I'd like to ask about your website service for my business.",
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
    slug: "koperasi-pkns",
    title: "Koperasi PKNS",
    category: "Corporate & Service",
    year: "2026",
    desc: "Official corporate portal for Koperasi PKNS Berhad (established 1972), presenting its four core business pillars, governance, and member self-service links.",
    challenge:
      "With over five decades of history across real estate, services, financing and retail, the cooperative needed a structured, trustworthy web presence where members can quickly access forms, membership portals, and corporate governance updates.",
    solution:
      "We built a clean corporate website featuring quick-access member services (PDF form downloads, membership information links, and inquiries), dedicated sections for all four business pillars, leadership & compliance recognition, and a media news centre.",
    results: [
      "Quick-Access Member Services",
      "Structured 4-Pillar Showcase",
      "Verified Governance & Awards",
    ],
    techStack: ["WordPress", "Elementor", "Contact Form 7"],
    liveUrl: "https://koperasipkns.com/",
    image: "/work/koperasi_pkns.png",
  },
  {
    slug: "program-bangnaih",
    title: "Program Bangnaih (30 Hari Turun Lemak)",
    category: "Landing Page",
    year: "2026",
    desc: "A high-converting Malay-language sales landing page for Academy Kekingan's 30-day fat-loss ebook and workout program, complete with tiered packages and guided checkout.",
    challenge:
      "Fitness prospects needed to see real participant proof, clear program inclusions (ebooks, workout videos, meal plans, and group access), and an effortless way to pick a package and register from mobile.",
    solution:
      "We crafted a focused, mobile-first campaign landing page with package comparison (Standard and Advanced tiers), participant WhatsApp proof sliders, live order summary, and a step-by-step QR payment and registration flow.",
    results: [
      "Two-Tier Package Selection",
      "Interactive Participant Proof",
      "Guided QR Checkout Flow",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Meta Pixel"],
    liveUrl: "https://kekingan.com/perubahan30hari/",
    image: "/work/program_bangnaih.png",
  },
  {
    slug: "cekdoku",
    title: "CekDoku",
    category: "Web System",
    year: "2026",
    desc: "A privacy-first AI document checker that scans PDF files entirely in-memory for typos, grammar, and cross-page factual contradictions.",
    challenge:
      "Users need fast, reliable document error detection without exposing sensitive business contracts and proposals to permanent cloud storage.",
    solution:
      "We built a retro-themed, zero-storage web application with multi-LLM support (Groq/Llama, Gemini, DeepSeek) delivering instant error logs.",
    results: ["100% In-Memory Privacy", "Multi-LLM Integration", "Sub-Second Error Reports"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Groq AI"],
    liveUrl: "https://cekdoku.com/",
    image: "/work/cekdoku.png",
  },
  {
    slug: "perodua-budget-checker",
    title: "Perodua Budget Checker",
    category: "Web System",
    year: "2026",
    desc: "A Malay-language budget checker a Perodua sales advisor runs live on TikTok — enter a net monthly salary and it scores every model and variant as affordable or not.",
    challenge:
      'The advisor worked instalments out in an Excel sheet during live sessions. It was unreadable on a phone screen, viewers could not follow the maths, and every "boleh afford tak?" in the comments had to be answered by hand, one at a time.',
    solution:
      "We built a screen-first checker in Malay: it turns net salary into a safe monthly budget, then marks all six models Lulus or Belum sesuai down to the variant, with tenure and down payment adjustable mid-stream and the advisor's number on screen throughout.",
    results: [
      "Excel Sheet Retired",
      "All Six Models Scored At Once",
      "Advisor's Number On Every Result",
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://peroduacarloan.vercel.app/",
    image: "/work/perodua_budget_checker.png",
  },
  {
    slug: "kowa-gaming-studio",
    title: "Kowa Gaming Studio",
    category: "E-Commerce",
    year: "2024",
    desc: "An exclusive e-commerce storefront for custom mechanical keyboards, artisanal keycaps, and premium gaming peripherals.",
    challenge:
      "The brand required an aesthetic, playful storefront with international currency support, product bundles, and seamless checkout.",
    solution:
      "We created a custom pastel-themed e-commerce store with smooth product previews, instant currency conversion, and lightning-fast checkout.",
    results: ["Aesthetic Brand Identity", "Global Checkout Flow", "Mobile-Optimised Showcase"],
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://kowagaming.com/",
    image: "/work/kowa_gaming_studio.png",
  },
  {
    slug: "glow-mask-explorer",
    title: "Glow-Mask Explorer",
    category: "Web System",
    year: "2026",
    desc: "An interactive skin analysis and Telang flower formulation web app engineered for SK Tunku Mahmood (2) Kluang's 2026 Exhibition.",
    challenge:
      "Creating an interactive digital exhibit for visitors and judges to assess skin types in under 1 minute and receive personalized natural formulations.",
    solution:
      "We engineered a kiosk-ready interactive app featuring facial scanning simulation, a quick skin quiz, and automated recipe generation.",
    results: [
      "Interactive Exhibition Stand",
      "Instant 1-Minute Analysis",
      "Engaging Student Innovation",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://glowmask.jombina.site/",
    image: "/work/Glow_mask_explorer.png",
  },
  {
    slug: "house-of-misses",
    title: "House of Misses",
    category: "E-Commerce",
    year: "2024",
    desc: "A boutique cosmetics e-commerce store specializing in daily lip essentials with an editorial, high-fashion aesthetic.",
    challenge:
      "Building a luxury beauty shopping experience that highlights lip shades with high-resolution photography and fast mobile cart flows.",
    solution:
      "We designed a minimalist, photo-centric e-commerce website with instant cart drawers and frictionless mobile checkout.",
    results: ["High Conversion Design", "Ultra-fast Page Speed", "Seamless Cart Experience"],
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://houseofmisses.com/",
    image: "/work/houseofmisses.png",
  },
  {
    slug: "fatimah-khairunisa-aia",
    title: "Fatimah Khairunisa (AIA Takaful)",
    category: "Corporate & Service",
    year: "2026",
    desc: "High-converting personal branding landing page and consultation funnel for an accredited AIA Public Takaful Life Advisor.",
    challenge:
      "Establishing immediate trust and credibility while prompting potential clients to calculate coverage needs and book free consultations.",
    solution:
      "We crafted a bold, persuasive landing page with live inquiry notifications, social proof, and a direct WhatsApp appointment booking system.",
    results: ["High-Trust Personal Brand", "Direct Consultation Leads", "Mobile-Optimized Funnel"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://takafuladvisor.jombina.site/",
    image: "/work/aia takaful agent.png",
  },
  {
    slug: "bosta",
    title: "Bosta",
    category: "E-Commerce",
    year: "2024",
    desc: "Official e-commerce website and brand hub for Bosta Keto coffee and cocoa lifestyle dietary products.",
    challenge:
      "Directing ad traffic into an engaging online store that explains keto benefits clearly and drives multi-pack trial purchases.",
    solution:
      "We developed a structured product catalog with bundle pricing, subscription options, and clear nutritional breakdowns.",
    results: ["Increased Average Order Value", "Clear Dietary Benefits", "Fast Checkout Flow"],
    techStack: ["WordPress", "WooCommerce", "Elementor"],
    liveUrl: "https://bosta.com.my/",
    image: "/work/bosta.png",
  },
  {
    slug: "famyytech-mobile",
    title: "FamyyTech Mobile",
    category: "Corporate & Service",
    year: "2024",
    desc: "The official website for a phone repair centre, making it easy for customers to check prices and store details.",
    challenge:
      "The shop needed a simple way to show its repair price list and reassure new customers with reviews from past clients.",
    solution:
      "We delivered a modern design focused on getting information across fast, easy to read, and built for phone screens.",
    results: ["Modern Design", "Prices Easy To Check", "Fast On Mobile"],
    techStack: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://famyytech.vercel.app/",
    image: "/work/famyytech_mobile.png?v=1",
  },
  {
    slug: "fyebeauty-ecommerce",
    title: "FyeBeauty",
    category: "E-Commerce",
    year: "2024",
    desc: "The official online store for FyeBeauty, built so customers can buy cosmetics in just a few taps.",
    challenge:
      "The cosmetics brand needed an attractive platform to showcase its products while keeping the buying process effortless.",
    solution:
      "We built a clean e-commerce interface centred on strong product photography and a fast checkout flow.",
    results: ["Clear Product Layout", "Faster Checkout", "Mobile-Friendly Design"],
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://fyebeautyhq.com/",
    image: "/work/fyebeauty_ecommerce.png?v=3",
  },
  {
    slug: "jomenvois",
    title: "JomEnvois",
    category: "Web System",
    year: "2025",
    desc: "A simple, fast invoicing tool with instant PDF preview and none of the confusing setup.",
    challenge:
      "Freelancers and small businesses needed a quick way to create invoices without learning heavy software or paying a monthly fee.",
    solution:
      "We built a lightweight web app that runs straight in the browser, complete with PDF preview and invoice records stored locally.",
    results: ["Invoices Done Faster", "Data Stays In The Browser", "Multi-Currency Support"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://jom-envois.vercel.app/",
    image: "/work/jomenvois.png?v=3",
  },
  {
    slug: "probiozen",
    title: "Probiozen",
    category: "Landing Page",
    year: "2024",
    desc: "A sales landing page for a health product, structured so customers grasp the benefits quickly.",
    challenge:
      "Health products come with a lot of information. The challenge was arranging the copy so it reads clearly and convincingly without overwhelming anyone.",
    solution:
      "We laid out the landing page with a tight sales flow, supporting proof, testimonials, and a call to action that is impossible to miss.",
    results: ["Clearer Sales Copy", "Fast Loading", "Mobile-Friendly"],
    techStack: ["WordPress", "Elementor", "WooCommerce"],
    liveUrl: "https://bosta.com.my/probiozen/",
    image: "/work/probiozen.png?v=3",
  },
  {
    slug: "missgoldenhair",
    title: "MissGoldenHair",
    category: "Landing Page",
    year: "2024",
    desc: "An online store and sales landing for premium hair care products, with an exclusive look and an easy path to purchase.",
    challenge:
      "The brand had to feel premium, yet the shopping experience still needed to stay simple and never confuse customers.",
    solution:
      "We used black-and-gold visuals, a clear product layout, and a smoother buying flow to build customer confidence.",
    results: ["Premium Brand Feel", "Easier Cart", "Products Easy To Compare"],
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://missgoldenhair.vercel.app/",
    image: "/work/missgoldenhair.png?v=3",
  },
  {
    slug: "ellscafe",
    title: "Ells Cafe",
    category: "Corporate & Service",
    year: "2023",
    desc: "A website for a local cafe so customers can check the menu, the atmosphere and key details at a glance.",
    challenge:
      "The cafe needed a website that immediately conveys the feel of the place, not just a name and an address.",
    solution:
      "We arranged the photos, digital menu and location details in a mobile-friendly layout so customers can plan a visit easily.",
    results: ["Menu Easy To Browse", "Helps Google Search", "Stronger Cafe Visuals"],
    techStack: ["WordPress", "PHP", "MySQL"],
    liveUrl: "https://bosta.com.my/ellscafe/",
    image: "/work/ells_cafe.png?v=3",
  },
  {
    slug: "bukupanduansihat",
    title: "Buku Panduan Sihat",
    category: "Landing Page",
    year: "2023",
    desc: "A landing page for a digital health product, focused on explaining the value and keeping the purchase clear.",
    challenge:
      "Digital products need trust. Customers have to understand exactly what they get before they are willing to pay.",
    solution:
      "We built a sales-letter style landing page covering the benefits, proof, visuals and a simple payment system.",
    results: ["Automatic Delivery", "Stronger Trust", "Easier Payment"],
    techStack: ["HTML5", "Tailwind CSS", "ToyyibPay"],
    liveUrl: "https://bosta.com.my/bukupanduansihat/",
    image: "/work/buku_panduan_sihat.png?v=3",
  },
  {
    slug: "modul-formula-turun-10kg",
    title: "Modul Formula Turun 10KG",
    category: "Landing Page",
    year: "2023",
    desc: "A sales and membership portal for a weight-loss program.",
    challenge:
      "A paid program needs clear access control so participants get the right content right after payment.",
    solution:
      "We built a members area with controlled access, organised modules, and an experience that is easy to follow.",
    results: ["Organised Members Area", "Content Easy To Access", "Built For Paid Programs"],
    techStack: ["WordPress", "LearnDash", "Billplz"],
    liveUrl: "https://bosta.com.my/formula-turun-10kg/",
    image: "/work/modul_formula_turun_10kg.png?v=3",
  },
  {
    slug: "rawat-hormon",
    title: "Rawat Hormon",
    category: "Landing Page",
    year: "2024",
    desc: "A landing page and registration system for a health webinar.",
    challenge:
      "During the promo campaign, visitors arrive all at once. The page had to stay fast and registration could not get in the way.",
    solution:
      "We built a campaign page with clear registration, urgency elements, and a smoother purchase flow.",
    results: ["Handles Traffic Spikes", "Easier Registration", "Automated Follow-Up"],
    techStack: ["Next.js", "Serverless Functions", "SendGrid"],
    liveUrl: "https://bosta.com.my/RawatHormon/",
    image: "/work/rawat_hormon.png?v=3",
  },
];

export type Service = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  /**
   * Which `Project.category` values count as examples of this service, so
   * /services can show real work instead of marketing copy. An empty array
   * means the service is support work bundled into every project rather than
   * something with a portfolio of its own — render it without an examples block.
   */
  projectCategories: string[];
};

export const servicesData: Service[] = [
  {
    slug: "business-website",
    title: "Business Website & Landing Page",
    desc: "For business owners who want to look professional, explain their services clearly, and make it easy for customers to WhatsApp or book.",
    tags: ["Company Website", "Landing Page", "Basic SEO"],
    projectCategories: ["Landing Page", "Corporate & Service"],
  },
  {
    slug: "online-store",
    title: "Online Store & Payments",
    desc: "Ideal if you want to sell products, take orders, accept payments and manage customers from one place.",
    tags: ["E-Commerce", "Payment Gateway", "Order Flow"],
    projectCategories: ["E-Commerce"],
  },
  {
    slug: "web-systems",
    title: "Custom Web Systems",
    desc: "For businesses that need a system of their own — booking, invoicing, dashboards, memberships or day-to-day automation.",
    tags: ["Dashboard", "Booking", "Membership"],
    projectCategories: ["Web System"],
  },
  {
    slug: "technical-setup",
    title: "Technical Setup & Support",
    desc: "We handle the domain, hosting, email, analytics, performance and the technical details so your website keeps running smoothly.",
    tags: ["Domain", "Hosting", "Maintenance"],
    projectCategories: [],
  },
];

export type PricingPlan = {
  name: string;
  /** Basic package (no hosting). */
  price: number;
  /** Complete package (+ domain & hosting) — the toggled-on price. */
  completePrice: number;
  /** Upper bound of the range, rendered after the number. */
  priceSuffix: string;
  desc: string;
  features: string[];
  /** Exactly one plan should be true — it renders the MOST POPULAR badge. */
  highlight: boolean;
  buttonText: string;
  description: string;
};

// Single source of truth for pricing. `Pricing.tsx` renders this, `schema.ts`
// derives priceRange from it, and any future /pricing page must read it too —
// a second copy is how the homepage and a pricing page end up disagreeing on
// which package is "most popular". Order here is the display order.
export const pricingPlansData: PricingPlan[] = [
  {
    name: "Landing Page",
    price: 199,
    completePrice: 349,
    priceSuffix: "- RM499",
    desc: "Ideal for selling a single product, service, class, webinar or promo campaign.",
    features: [
      "Clean one-page design",
      "Clear sales copy structure",
      "WhatsApp button / inquiry form",
      "Basic domain & hosting setup",
      "Built for mobile",
    ],
    highlight: false,
    buttonText: "Ask About This",
    description: "Great for a quick product launch",
  },
  {
    name: "Online Store (E-Commerce)",
    price: 499,
    completePrice: 649,
    priceSuffix: "- RM999",
    desc: "For businesses that want to sell online. Pricing scales with the extra features you need.",
    features: [
      "Products, cart and checkout",
      "FPX / card payment integration",
      "Order management dashboard",
      "Basic shipping setup",
      "Short walkthrough on how to use it",
    ],
    highlight: true,
    buttonText: "Ask About This",
    description: "Great for starting an e-commerce business",
  },
  {
    name: "Corporate Website",
    price: 990,
    completePrice: 1140,
    priceSuffix: "+",
    desc: "For businesses that want a complete website so customers feel confident before getting in touch.",
    features: [
      "Home, services, about & contact pages",
      "Content structure that is easy to follow",
      "Basic SEO for Google",
      "Inquiry form / WhatsApp link",
      "Guidance once the website is live",
    ],
    highlight: false,
    buttonText: "Ask About This",
    description: "The most trusted complete package",
  },
];

export const faqsData = [
  {
    question: "How long does a website usually take?",
    answer:
      "For a landing page, usually 3 to 7 working days once the basic content is ready. For a company website or a more custom system, expect around 2 to 4 weeks depending on the scope.",
  },
  {
    question: "I don't have a domain or hosting yet. Can you help?",
    answer:
      "Yes. We can recommend and set up your domain, hosting, basic email, analytics and other technical pieces. You don't have to sort everything out on your own.",
  },
  {
    question: "Is there a monthly maintenance fee?",
    answer:
      "It depends on the type of website. For a simple static site, usually you only need to renew the domain and hosting. If you want us to handle updates, backups or regular content changes, we can propose a separate maintenance package.",
  },
  {
    question: "Can I update the content myself later?",
    answer:
      "Yes, if your project needs a CMS or admin panel. We will discuss that early on. For simpler websites, we can also help update the content whenever you need.",
  },
  {
    question: "I'm not good at writing website copy. What then?",
    answer:
      "That's fine. Just give us the rough points about your business, products, services and target customers. We will tidy up the wording so it reads clearly and works on a website.",
  },
];

export const testimonialsData = [
  {
    quote:
      "A lot of our work used to be manual. Once the system went live, our team could track daily work far more easily with fewer data mistakes.",
    author: "Azman Zulkifli",
    role: "Operations Manager, Logistik Maju",
    rating: 5,
  },
  {
    quote:
      "The website looks far cleaner than we imagined. Best of all, explaining our services became much easier whenever customers ask.",
    author: "Sarah Lee",
    role: "Founder, Glow Beauty",
    rating: 5,
  },
  {
    quote:
      "I'm not very technical, but everything was explained clearly. Even after launch, they still helped whenever I wasn't sure about something.",
    author: "David Khoo",
    role: "Director, TechStart Solutions",
    rating: 5,
  },
];
