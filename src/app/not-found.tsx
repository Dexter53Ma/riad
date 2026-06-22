import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f6f4f2] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-lg">
        <div className="space-y-4">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
            PAGE NOT FOUND
          </p>
          <h1 className="text-6xl md:text-8xl font-light text-[#2a3936]">
            404
          </h1>
          <p className="text-lg md:text-xl font-light text-[#2a3936] leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#4b6753] text-white text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#3a5544] transition-colors font-medium"
          >
            Return to Homepage
          </Link>
          <div>
            <Link
              href="/en/rooms"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#4b6753] hover:underline underline-offset-4"
            >
              View our rooms
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2a3936]/10 space-y-2">
          <p className="text-xs text-[#2a3936]/50">
            Need help? Contact us:
          </p>
          <a
            href="https://wa.me/212524378091"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#4b6753] hover:underline"
          >
            WhatsApp: +212 524 378 091
          </a>
        </div>
      </div>
    </main>
  );
}
