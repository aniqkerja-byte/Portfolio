import Link from 'next/link'
import { FadeIn } from "@/components/FadeIn";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-center px-6">
            <FadeIn>
                <h1 className="text-9xl font-bold text-white tracking-tighter mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl text-zinc-400 font-light mb-12">Page not found.</h2>

                <p className="text-zinc-500 max-w-md mx-auto mb-12 leading-relaxed">
                    The page you are looking for doesn't exist or has been moved.
                    Let's get you back to building the future.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold tracking-widest uppercase hover:bg-orange-700 transition-colors"
                >
                    Return Home
                </Link>
            </FadeIn>
        </div>
    )
}
