"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function WelcomeSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden">
        <Image
          src="/images/DSC09125-HDR-scaled.jpg"
          alt="Riad Les Trois Mages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal className="text-center px-5 sm:px-6 md:px-8 max-w-5xl">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white mb-5 md:mb-8 leading-tight tracking-wide">
              A welcoming Moroccan home in the heart of Marrakech
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-white/85 leading-relaxed max-w-3xl mx-auto">
              Riad Les Trois Mages is a small and intimate riad designed to feel less
              like a hotel and more like a welcoming Moroccan home, where guests can
              relax, connect and experience the authentic spirit of Marrakech.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
