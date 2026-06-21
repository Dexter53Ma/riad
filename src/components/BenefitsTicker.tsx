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
        <div className="flex animate-ticker whitespace-nowrap py-3 md:py-4 lg:py-5">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center shrink-0">
              {benefits.map((benefit, i) => (
                <div key={`${setIndex}-${i}`} className="flex items-center gap-2.5 md:gap-3 lg:gap-4 px-6 md:px-10 lg:px-12 shrink-0">
                  <div className="relative w-10 md:w-16 lg:w-20 h-7 md:h-10 lg:h-14 overflow-hidden rounded-md shrink-0">
                    <Image
                      src={benefit.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#2a3936] font-medium whitespace-nowrap">
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
