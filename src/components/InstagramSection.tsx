"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

const instagramImages = [
  { id: 1, image: "/images/DSC08594-HDR-scaled.jpg" },
  { id: 2, image: "/images/DSC08625-scaled.jpg" },
  { id: 3, image: "/images/DSC08638-scaled.jpg" },
  { id: 4, image: "/images/DSC08720-scaled.jpg" },
  { id: 5, image: "/images/DSC08726-scaled.jpg" },
  { id: 6, image: "/images/DSC08741-scaled.jpg" },
];

export default function InstagramSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-[#f6f4f2] border-t border-[#2a3936]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Text side */}
          <ScrollReveal animation="left" className="space-y-5 md:space-y-6 lg:sticky lg:top-32">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#2a3936] leading-relaxed">
              Traveling is a way of life. Discover the little moments that will
              become yours if you visit us
            </h2>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/riadsestroismages/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#4b6753] text-[#4b6753] text-[10px] sm:text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium"
              >
                MORE ON INSTAGRAM
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Instagram feed */}
          <ScrollReveal animation="right">
            <div ref={scrollRef} className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {instagramImages.map((item, i) => (
                <a
                  key={item.id}
                  href="https://www.instagram.com/riadsestroismages/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative overflow-hidden group",
                    i === 0 || i === 3 ? "row-span-2" : ""
                  )}
                >
                  <div className={cn("relative w-full", i === 0 || i === 3 ? "aspect-[1/2]" : "aspect-square")}>
                    <Image
                      src={item.image}
                      alt={`Instagram ${item.id}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
