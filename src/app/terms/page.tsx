import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "June 2026";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for JomBina Digital.",
};

export default function TermsPage() {
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
            Terms & Conditions<span className="text-orange-600">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-none space-y-6 text-lg leading-relaxed text-zinc-600">
            <p className="mb-12 text-xl font-light text-zinc-500 md:text-2xl">
              Last Updated: {LAST_UPDATED}
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              1. Agreement to Terms
            </h3>
            <p>
              These Terms &amp; Conditions form a legally binding agreement between you (personally
              or on behalf of a company) and JomBina (&quot;we&quot;), concerning your access to and
              use of this website as well as any related media channels (collectively referred to as
              the &quot;Website&quot;).
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              2. Intellectual Property Rights
            </h3>
            <p>
              Unless otherwise stated, this Website is our proprietary property. All source code,
              databases, software functionality, website design, audio, video, text, photographs and
              graphics (collectively referred to as the &quot;Content&quot;), along with the
              trademarks and logos contained within it, are owned or controlled by us and protected
              by copyright and intellectual property laws.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              3. User Responsibilities
            </h3>
            <p>
              By using this Website, you represent and warrant that: (1) all information you submit
              is true, accurate and complete; (2) you will keep that information accurate at all
              times; (3) you have the legal capacity and agree to comply with these Terms &amp;
              Conditions.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              4. Prohibited Activities
            </h3>
            <p>
              You may not access or use this Website for any purpose other than the one we make it
              available for. This Website may not be used for any other commercial purpose without
              our written permission.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              5. Modifications and Interruptions
            </h3>
            <p>
              We reserve the right to change, modify or remove the contents of the Website at any
              time, at our sole discretion and without notice. We also reserve the right to modify
              or discontinue all or part of the Website without notice at any time.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              6. Governing Law
            </h3>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws
              of Malaysia. JomBina and you agree that the courts of Malaysia shall have exclusive
              jurisdiction to resolve any dispute arising in connection with these terms.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
