"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const benefits = [
  { text: "BEST PRICE GUARANTEED", image: "/images/DSC08281-scaled.jpg" },
  { text: "FREE CANCELLATION 48H", image: "/images/DSC08320-HDR-scaled.jpg" },
  { text: "FREE LATE CHECK-OUT (SUBJECT TO AVAILABILITY)", image: "/images/DSC08346-HDR-scaled.jpg" },
];

export default function BenefitsTicker() {
  return (
    <ScrollReveal>
      <section className="w-full overflow-hidden bg-white border-y border-[#2a3936]/8">
        <div className="flex animate-ticker whitespace-nowrap py-3 sm:py-3.5 md:py-4 lg:py-5">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center shrink-0">
              {benefits.map((benefit, i) => (
                <div key={`${setIndex}-${i}`} className="flex items-center gap-3 sm:gap-3.5 md:gap-4 px-5 sm:px-8 md:px-10 lg:px-12 shrink-0">
                  <div className="relative w-12 sm:w-14 md:w-16 lg:w-20 h-8 sm:h-9 md:h-10 lg:h-14 overflow-hidden rounded-md shrink-0">
                    <Image
                      src={benefit.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] md:text-[11px] lg:text-[11px] uppercase tracking-[0.15em] text-[#2a3936] font-medium whitespace-nowrap">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
