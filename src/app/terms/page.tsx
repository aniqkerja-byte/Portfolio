import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for JomBina Digital Solutions.",
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
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <h1 className="mb-12 text-4xl font-bold tracking-tighter md:text-6xl">
            Terms of Service<span className="text-orange-600">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-none space-y-6 text-lg leading-relaxed text-zinc-600">
            <p className="mb-12 text-xl font-light text-zinc-500 md:text-2xl">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              1. Agreement to Terms
            </h3>
            <p>
              These Terms of Service constitute a legally binding agreement made between you,
              whether personally or on behalf of an entity (&quot;you&quot;) and JomBina
              (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use
              of the website as well as any other media form, media channel, mobile website or
              mobile application related, linked, or otherwise connected thereto (collectively, the
              &quot;Site&quot;).
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              2. Intellectual Property Rights
            </h3>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code,
              databases, functionality, software, website designs, audio, video, text, photographs,
              and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks,
              service marks, and logos contained therein (the &quot;Marks&quot;) are owned or
              controlled by us or licensed to us, and are protected by copyright and trademark laws
              and various other intellectual property rights.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              3. User Representations
            </h3>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information
              you submit will be true, accurate, current, and complete; (2) you will maintain the
              accuracy of such information and promptly update such registration information as
              necessary; (3) you have the legal capacity and you agree to comply with these Terms of
              Service.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              4. Prohibited Activities
            </h3>
            <p>
              You may not access or use the Site for any purpose other than that for which we make
              the Site available. The Site may not be used in connection with any commercial
              endeavors except those that are specifically endorsed or approved by us.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              5. Modifications and Interruptions
            </h3>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time
              or for any reason at our sole discretion without notice. However, we have no
              obligation to update any information on our Site. We also reserve the right to modify
              or discontinue all or part of the Site without notice at any time.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              6. Governing Law
            </h3>
            <p>
              These Terms shall be governed by and defined following the laws of Malaysia. JomBina
              and yourself irrevocably consent that the courts of Malaysia shall have exclusive
              jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
