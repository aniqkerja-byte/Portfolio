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
    slug: "famyytech-mobile",
    title: "FamyyTech Mobile",
    category: "Repair & Service",
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
    category: "E-Commerce & Beauty",
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
    category: "Finance System",
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
    category: "Health & Wellness",
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
    category: "Beauty & Cosmetics",
    year: "2024",
    desc: "An online store for premium hair care products, with an exclusive look and an easy path to purchase.",
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
    category: "Food & Beverage",
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
    category: "Digital Education",
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
    category: "Fitness Program",
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
    category: "Live Events",
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

export const servicesData = [
  {
    title: "Business Website & Landing Page",
    desc: "For business owners who want to look professional, explain their services clearly, and make it easy for customers to WhatsApp or book.",
    tags: ["Company Website", "Landing Page", "Basic SEO"],
  },
  {
    title: "Online Store & Payments",
    desc: "Ideal if you want to sell products, take orders, accept payments and manage customers from one place.",
    tags: ["E-Commerce", "Payment Gateway", "Order Flow"],
  },
  {
    title: "Custom Web Systems",
    desc: "For businesses that need a system of their own — booking, invoicing, dashboards, memberships or day-to-day automation.",
    tags: ["Dashboard", "Booking", "Membership"],
  },
  {
    title: "Technical Setup & Support",
    desc: "We handle the domain, hosting, email, analytics, performance and the technical details so your website keeps running smoothly.",
    tags: ["Domain", "Hosting", "Maintenance"],
  },
];

export const pricingPlansData = [
  {
    name: "Landing Page",
    price: "RM199",
    priceRange: "- RM499",
    desc: "Ideal for selling a single product, service, class, webinar or promo campaign.",
    features: [
      "Clean one-page design",
      "Clear sales copy structure",
      "WhatsApp button / inquiry form",
      "Basic domain & hosting setup",
      "Built for mobile",
    ],
    highlight: false,
  },
  {
    name: "Corporate Website",
    price: "RM990",
    priceRange: "+",
    desc: "For businesses that want a complete website so customers feel confident before getting in touch.",
    features: [
      "Home, services, about & contact pages",
      "Content structure that is easy to follow",
      "Basic SEO for Google",
      "Inquiry form / WhatsApp link",
      "Guidance once the website is live",
    ],
    highlight: true,
  },
  {
    name: "Online Store (E-Commerce)",
    price: "RM499",
    priceRange: "- RM999",
    desc: "For businesses that want to sell online. Pricing scales with the extra features you need.",
    features: [
      "Products, cart and checkout",
      "FPX / card payment integration",
      "Order management dashboard",
      "Basic shipping setup",
      "Short walkthrough on how to use it",
    ],
    highlight: false,
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
