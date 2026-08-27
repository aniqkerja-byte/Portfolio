import { contactInfo, faqsData, pricingPlansData, servicesData, siteUrl } from "@/constants/data";

// Derived from the plans so it cannot drift when prices change. The trailing
// "+" mirrors the top plan's open-ended suffix.
const prices = pricingPlansData.map((plan) => plan.price);
const priceRange = `RM${Math.min(...prices)}–RM${Math.max(...prices)}+`;

/**
 * JSON-LD for search engines.
 *
 * Every value here is derived from data that is already rendered on the site.
 * Do NOT add `aggregateRating` or `review` unless the underlying reviews are
 * real and published on the page — Google treats unbacked review markup as
 * spam and it risks a manual action.
 */

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "JomBina Digital",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  logo: `${siteUrl}/apple-touch-icon.png`,
  description:
    "We help business owners build websites, landing pages, online stores and web systems that look sharp, load fast, and earn customer trust.",
  email: contactInfo.email,
  telephone: contactInfo.phoneTel,
  priceRange,
  founder: {
    "@type": "Person",
    name: "Aniq",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
  },
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
  knowsLanguage: ["ms-MY", "en-MY"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website & Web System Services",
    itemListElement: servicesData.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
      },
    })),
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: faqsData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
