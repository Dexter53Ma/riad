"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  { id: 1, label: "Rooftop Terraces", image: "/images/DSC08361-HDR-scaled.jpg" },
  { id: 2, label: "Music Lounge", image: "/images/DSC08365-scaled.jpg" },
  { id: 3, label: "Plunge Pool", image: "/images/DSC08379-HDR-scaled.jpg" },
];

export default function ExperienceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 md:mb-14 lg:mb-20 space-y-4 md:space-y-5 lg:space-y-6 max-w-3xl mx-auto">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
            THE JOURNEY TAKES ON MEANING HERE
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
            A moment of calm and views that demand a break from routine. A space
            where nothing is urgent, just feeling. Just enjoying.
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="scale">
          <div className="relative max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            <div className="relative aspect-[3/4] sm:aspect-[2/3] w-full overflow-hidden">
              <Image
                src={experiences[currentSlide].image}
                alt={experiences[currentSlide].label}
                fill
                className="object-cover"
                key={currentSlide}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6 md:p-8">
                <p className="text-white text-sm md:text-base font-light tracking-wide">
                  {experiences[currentSlide].label}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-2.5 md:gap-3 mt-6 md:mt-8 lg:mt-10">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "h-1.5 md:h-2 rounded-full transition-all duration-400",
                    currentSlide === index
                      ? "bg-[#4b6753] w-7 md:w-8"
                      : "bg-[#2a3936]/15 hover:bg-[#2a3936]/30 w-1.5 md:w-2"
                  )}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-10 md:mt-12 lg:mt-16" delay={150}>
          <a
            href="/en/the-hotel"
            className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 border border-[#4b6753] text-[#4b6753] text-[10px] md:text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium"
          >
            MORE ABOUT THE RIAD
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
