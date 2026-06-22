"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import BenefitsTicker from "@/components/BenefitsTicker";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";

export default function AboutUsClient() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#f6f4f2]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#2a3936] text-center px-4">
            About us
          </h1>
        </div>
      </section>

      <BenefitsTicker />

      {/* Intro */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 bg-white/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-base md:text-lg lg:text-xl font-light text-[#2a3936] leading-relaxed">
            Our passion is to turn every moment into a unique experience of warmth and authenticity. Riad Les Trois Mages is more than just a place to sleep; it is a welcoming Moroccan home where every corner and every moment becomes a precious memory.
          </p>
          <p className="text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed max-w-2xl mx-auto">
            The name &ldquo;Les Trois Mages&rdquo; — The Three Magi — reflects our belief in the magic of travel and discovery. Just as the Magi journeyed across deserts following a star, we believe that every journey to Marrakech is a pilgrimage of the senses. Our six rooms are named after these legendary travelers — Bahia, Balthazar, Signature, Melchior, Gaspard, and Arabesque — each offering a unique interpretation of Moroccan artistry and comfort.
          </p>
          <p className="text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed max-w-2xl mx-auto">
            Founded with a deep love for Moroccan culture, our riad was designed to bridge the gap between traditional craftsmanship and modern comfort. Every tile was hand-cut by local artisans, every plaster carving was shaped by master craftsmen, and every textile was sourced from the souks and workshops of Marrakech. The result is a space that feels both authentic and welcoming — a place where history and hospitality meet.
          </p>
        </div>
      </section>

      {/* Sustainable Travel */}
      <section className="relative w-full py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[7/12] w-full max-w-sm mx-auto overflow-hidden order-1">
              <Image src="/images/DSC08638-scaled.jpg" alt="Our Commitments" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="space-y-6 text-center md:text-left order-2">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                OUR COMMITMENT
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
                We strive to preserve the authentic spirit of Marrakech while offering a sustainable and respectful experience.
              </h2>
              <p className="text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed">
                We work with local artisans, prioritize Moroccan products, minimize waste and support the community that makes this city so special. From the beeswax candles that light our corridors to the argan oil in our bathroom amenities, every product tells a story of Moroccan craftsmanship and sustainability.
              </p>
              <p className="text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed">
                Our breakfast ingredients come from local producers in the surrounding region. The honey is from the Atlas Mountains, the olive oil from the fertile plains of Marrakech, and the seasonal fruits from the Souss Valley. By choosing local, we reduce our environmental impact while supporting the families and communities that produce these exceptional products.
              </p>
              <div className="pt-2">
                <a href="/en/the-hotel" className="inline-flex items-center gap-2 px-7 py-3 border border-[#4b6753] text-[#4b6753] text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium">
                  Discover our commitment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="relative w-full py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[7/12] w-full max-w-sm mx-auto overflow-hidden order-1">
              <Image src="/images/DSC08720-scaled.jpg" alt="Corporate Governance" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="space-y-6 text-center md:text-left order-2">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                OUR STORY
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
                Riad Les Trois Mages was born from a love for Moroccan culture and the desire to share its warmth with travelers from around the world.
              </h2>
              <p className="text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed">
                Every detail of the riad reflects our commitment to authenticity, from the traditional architecture to the locally sourced materials and the personal service that makes each guest feel at home. The building itself is a traditional Marrakech riad, with thick walls that keep the interior cool in summer and warm in winter, a central courtyard that serves as the heart of the home, and rooftop terraces that offer panoramic views of the Medina and the Atlas Mountains.
              </p>
              <p className="text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed">
                Our team is the soul of the riad. Many of our staff have been with us since the beginning, and their warmth, knowledge, and dedication to hospitality are what make a stay here truly special. They are not just employees — they are hosts, guides, and friends who share their love for Marrakech with every guest.
              </p>
              <div className="pt-2">
                <a href="/en/the-hotel#story" className="inline-flex items-center gap-2 px-7 py-3 border border-[#4b6753] text-[#4b6753] text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium">
                  + info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marrakech */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 bg-[#2a3936]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[7/12] w-full max-w-sm mx-auto overflow-hidden order-1">
              <Image src="/images/DSC08726-scaled.jpg" alt="Marrakech" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="space-y-6 text-center md:text-left order-2 text-white">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                MARRAKECH
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                The Red City awaits you with its vibrant souks, stunning palaces and enchanting gardens.
              </h2>
              <p className="text-sm md:text-[15px] text-white/60 leading-relaxed">
                Marrakech is a city of contrasts and discoveries. From the bustling Jemaa el-Fnaa square to the serene Majorelle Garden, every corner tells a story. Our riad is your perfect base to explore it all — located in the heart of the Medina, within walking distance of the souks, restaurants, and cultural attractions that make Marrakech one of the world&apos;s most fascinating cities.
              </p>
              <div className="flex gap-8 md:gap-12 pt-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-light">6</p>
                  <p className="text-xs text-white/50 mt-1">Rooms</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-light">2</p>
                  <p className="text-xs text-white/50 mt-1">Rooftops</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-light">1</p>
                  <p className="text-xs text-white/50 mt-1">Pool</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-light">15</p>
                  <p className="text-xs text-white/50 mt-1">min from airport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <NewsletterSection />
      <Footer />
      <BookingWidget />
    </>
  );
}
