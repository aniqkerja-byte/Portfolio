import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  // No "| JomBina" — layout.tsx applies the "%s | JomBina Digital" template.
  title: "Contact",
  description:
    "Tell us what your business does and the kind of website you want. WhatsApp us for the fastest quote, or send the form and we reply within 24 business hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | JomBina",
    description:
      "Tell us about your business and we will suggest the website, landing page or system that fits your budget.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
