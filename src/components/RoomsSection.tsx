"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

const rooms = [
  { id: 1, name: "Bahia Room", price: "From $120", image: "/images/DSC08762-HDR-scaled.jpg", link: "/en/rooms" },
  { id: 2, name: "Balthazar Room", price: "From $120", image: "/images/DSC08811-scaled.jpg", link: "/en/rooms" },
  { id: 3, name: "Signature Room", price: "From $130", image: "/images/DSC08849-scaled.jpg", link: "/en/rooms" },
  { id: 4, name: "Melchior Room", price: "From $399", image: "/images/DSC08917-HDR-scaled.jpg", link: "/en/rooms" },
  { id: 5, name: "Gaspard Room", price: "From $399", image: "/images/DSC08939-scaled.jpg", link: "/en/rooms" },
  { id: 6, name: "Arabesque Room", price: "From $399", image: "/images/DSC08983-HDR-scaled.jpg", link: "/en/rooms" },
];

export default function RoomsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-[#f6f4f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 md:mb-14 lg:mb-16">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] mb-3 md:mb-5 font-medium">
            OUR ROOMS &amp; SUITES
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#2a3936] max-w-2xl mx-auto leading-snug">
            Six individually styled rooms around a traditional courtyard
          </h2>
        </ScrollReveal>

        <ScrollReveal className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-14" delay={100}>
          <a
            href="/en/rooms"
            className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 border border-[#4b6753] text-[#4b6753] text-[10px] md:text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium"
          >
            ALL ROOMS
          </a>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 md:p-2.5 border border-[#2a3936]/15 rounded-full hover:bg-[#2a3936] hover:text-white hover:border-[#2a3936] transition-all duration-300"
            >
              <ChevronLeftIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 md:p-2.5 border border-[#2a3936]/15 rounded-full hover:bg-[#2a3936] hover:text-white hover:border-[#2a3936] transition-all duration-300"
            >
              <ChevronRightIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel - full width bleed */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto hide-scrollbar pl-4 sm:pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pr-4 sm:pr-6 pb-4 snap-x snap-mandatory"
      >
        {rooms.map((room) => (
          <div
            key={room.id}
            className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] snap-start group"
          >
            <a href={room.link} className="block">
              <div className="relative w-full aspect-[3/5] sm:aspect-[7/12] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </a>
            <div className="mt-3 md:mt-4 lg:mt-5 space-y-2 md:space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xs sm:text-sm md:text-[15px] font-medium text-[#2a3936]">
                  <a href={room.link} className="hover:text-[#4b6753] transition-colors">
                    {room.name}
                  </a>
                </h3>
                <span className="text-[10px] md:text-[11px] text-[#4b6753] font-medium shrink-0">
                  {room.price}
                </span>
              </div>
              <div className="flex items-center gap-2.5 md:gap-3">
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 md:px-4 py-1 md:py-1.5 border border-[#4b6753]/40 text-[#4b6753] text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.1em] rounded-full hover:bg-[#4b6753] hover:text-white hover:border-[#4b6753] transition-all duration-300 font-medium"
                >
                  Book now
                </a>
                <a
                  href={room.link}
                  className="text-[9px] md:text-[10px] lg:text-[11px] text-[#4b6753] underline underline-offset-4 decoration-[#4b6753]/30 hover:decoration-[#4b6753] hover:text-[#2a3936] transition-all"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
