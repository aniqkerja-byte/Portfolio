import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "June 2026";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for JomBina Digital.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 pt-32 pb-24 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-[800px]">
        <FadeIn>
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-500 uppercase transition-colors hover:text-zinc-950"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Homepage
          </Link>

          <h1 className="mb-12 text-4xl font-bold tracking-tighter md:text-6xl">
            Privacy Policy<span className="text-orange-600">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-none space-y-6 text-lg leading-relaxed text-zinc-600">
            <p className="mb-12 text-xl font-light text-zinc-500 md:text-2xl">
              Last Updated: {LAST_UPDATED}
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              1. Introduction
            </h3>
            <p>
              JomBina (&quot;we&quot;) respects your privacy and is committed to protecting your
              personal data. This privacy policy explains how we handle your personal data when you
              visit our website, along with your privacy rights and how the law protects you.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              2. Data We Collect
            </h3>
            <p>
              We may collect, use, store and transfer several types of your personal data, as
              follows:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-zinc-900">Identity Data</strong> including
                first name, last name, username or similar identifiers.
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Contact Data</strong> including
                billing address, delivery address, email address and phone number.
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Technical Data</strong> including
                internet protocol (IP) address, your login data, browser type and version, time zone
                setting and location, and other technology on the devices you use to access this
                website.
              </li>
            </ul>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              3. How We Use Your Data
            </h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we use
              your data in the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                To perform a contract we are about to enter into or have entered into with you.
              </li>
              <li>
                For our legitimate interests (or those of a third party) provided your fundamental
                privacy rights are not overridden.
              </li>
              <li>To comply with a legal or regulatory obligation.</li>
            </ul>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              4. Data Security
            </h3>
            <p>
              We have put appropriate security measures in place to prevent your personal data from
              being accidentally lost, used, accessed without authorisation, altered or disclosed.
              In addition, we limit access to your data to employees or partners who have a business
              need to know it.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              5. Contact Us
            </h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please
              contact us at:{" "}
              <a href="mailto:jombina.site@gmail.com" className="text-orange-600 hover:underline">
                jombina.site@gmail.com
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
