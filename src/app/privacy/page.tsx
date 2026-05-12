import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for JomBina Digital Solutions.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-[800px] mx-auto">
                <FadeIn>
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
                        Privacy Policy<span className="text-orange-600">.</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="prose prose-zinc prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-zinc-600">
                        <p className="lead text-xl md:text-2xl font-light text-zinc-500 mb-12">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </p>

                        <h3>1. Introduction</h3>
                        <p>
                            JomBina ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h3>2. Data We Collect</h3>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul>
                            <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        </ul>

                        <h3>3. How We Use Your Data</h3>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h3>4. Data Security</h3>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h3>5. Contact Us</h3>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@jombina.com" className="text-orange-600 hover:underline">hello@jombina.com</a>.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
