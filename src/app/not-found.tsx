import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center">
      <FadeIn>
        <h1 className="mb-4 text-9xl font-bold tracking-tighter text-white">404</h1>
        <h2 className="mb-12 text-2xl font-light text-zinc-400 md:text-3xl">Page not found.</h2>

        <p className="mx-auto mb-12 max-w-md leading-relaxed text-zinc-500">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back
          to building the future.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-orange-600 px-8 py-4 font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-700"
        >
          Return Home
        </Link>
      </FadeIn>
    </div>
  );
}
