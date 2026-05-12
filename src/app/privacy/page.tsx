import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for JomBina Digital Solutions.",
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
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <h1 className="mb-12 text-4xl font-bold tracking-tighter md:text-6xl">
            Privacy Policy<span className="text-orange-600">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-none space-y-6 text-lg leading-relaxed text-zinc-600">
            <p className="mb-12 text-xl font-light text-zinc-500 md:text-2xl">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              1. Introduction
            </h3>
            <p>
              JomBina (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and
              is committed to protecting your personal data. This privacy policy will inform you as
              to how we look after your personal data when you visit our website (regardless of
              where you visit it from) and tell you about your privacy rights and how the law
              protects you.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              2. Data We Collect
            </h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you
              which we have grouped together follows:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-zinc-900">Identity Data</strong> includes
                first name, maiden name, last name, username or similar identifier.
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Contact Data</strong> includes
                billing address, delivery address, email address and telephone numbers.
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Technical Data</strong> includes
                internet protocol (IP) address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions, operating system and
                platform and other technology on the devices you use to access this website.
              </li>
            </ul>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              3. How We Use Your Data
            </h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will
              use your personal data in the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Where we need to perform the contract we are about to enter into or have entered
                into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and
                your interests and fundamental rights do not override those interests.
              </li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              4. Data Security
            </h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from
              being accidentally lost, used or accessed in an unauthorized way, altered or
              disclosed. In addition, we limit access to your personal data to those employees,
              agents, contractors and other third parties who have a business need to know.
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
