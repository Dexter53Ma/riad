"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const footerLinks = [
  { label: "Rooms", href: "/en/rooms" },
  { label: "The Riad", href: "/en/the-hotel" },
  { label: "Gallery", href: "/en/gallery" },
  { label: "Blog", href: "/en/blog" },
  { label: "CONTACT & HOW TO GET HERE", href: "/en/contact" },
  { label: "ABOUT US", href: "/en/about-us" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a3936] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
        <ScrollReveal className="flex flex-col items-center gap-8 md:gap-10">
          <a href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Les Trois Mages Riad & Spa"
              width={300}
              height={120}
              className="w-36 sm:w-44 md:w-56 lg:w-64 h-auto"
            />
          </a>

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 sm:gap-x-5 md:gap-x-6 lg:gap-x-7">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] md:text-[11px] lg:text-xs text-white/60 hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="w-full max-w-xs h-px bg-white/10" />

          <div className="text-center space-y-1.5 md:space-y-2">
            <p className="text-[10px] md:text-[11px] text-white/40 tracking-wider">
              © {new Date().getFullYear()} Riad Les Trois Mages. All rights reserved.
            </p>
            <div className="flex justify-center gap-3 md:gap-4">
              <a href="/en/legal-terms" className="text-[9px] md:text-[10px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-wider">
                Legal Terms
              </a>
              <a href="/en/cookies-policy" className="text-[9px] md:text-[10px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-wider">
                Cookies Policy
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
