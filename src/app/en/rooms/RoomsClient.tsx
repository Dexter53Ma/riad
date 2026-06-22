"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import BenefitsTicker from "@/components/BenefitsTicker";
import BookingWidget from "@/components/BookingWidget";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { rooms } from "@/data/rooms";

const services = [
  { id: 1, label: "Room Service" },
  { id: 2, label: "Breakfast in the room" },
  { id: 3, label: "Laundry" },
];

const amenities = [
  "King-Size Bed",
  "Free Wi-Fi",
  "Air conditioning",
  "Nespresso coffee maker",
  "Rain shower",
  "Moroccan textiles",
  "Rooftop access",
];

export default function RoomsClient() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/DSC08453-HDR-scaled.jpg"
            alt="Rooms - Riad Les Trois Mages"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white text-center px-4">
              Rooms that invite you to stay
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <BenefitsTicker />

      {/* Room Grid */}
      <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
              OUR ROOMS &amp; SUITES
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed max-w-3xl mx-auto">
              Six individually styled rooms and suites arranged around a traditional courtyard
            </h2>
          </ScrollReveal>

          {/* Room cards */}
          <div className="space-y-8 md:space-y-12">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.slug} animation={i % 2 === 0 ? "left" : "right"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
                  {/* Image */}
                  <Link
                    href={`/en/rooms/${room.slug}`}
                    className={`group block relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden ${i % 2 !== 0 ? "md:order-2" : ""}`}
                  >
                    <Image
                      src={room.images[0].src}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </Link>

                  {/* Details */}
                  <div className={`space-y-5 md:space-y-6 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <Link href={`/en/rooms/${room.slug}`}>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#2a3936] hover:text-[#4b6753] transition-colors">
                            {room.name}
                          </h3>
                        </Link>
                        <span className="text-sm md:text-base text-[#4b6753] font-medium shrink-0 mt-1">
                          {room.priceLabel}
                        </span>
                      </div>
                      <div className="w-12 h-px bg-[#4b6753]/30" />
                    </div>

                    <p className="text-sm md:text-[15px] text-[#2a3936]/70 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-[#2a3936]">
                        <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M2 12h20M2 12c0-4.418 4.03-8 9-8s9 3.582 9 8M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6" />
                        </svg>
                        {room.bed}
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-[#2a3936]">
                        <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        {room.capacity}
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-[#2a3936]">
                        <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        {room.size}
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-[#2a3936]">
                        <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        {room.view}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4b6753]/5 rounded-full">
                      <svg className="w-3.5 h-3.5 text-[#4b6753]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-[10px] md:text-[11px] text-[#4b6753] font-medium uppercase tracking-wider">
                        {room.recommendation}
                      </span>
                    </div>

                    {/* Booking buttons */}
                    <div className="space-y-2.5">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#2a3936]/40 font-medium">
                        Book this room
                      </p>
                      <div className="flex flex-col gap-2">
                        {/* Airbnb */}
                        <a
                          href={room.airbnbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-[#FF5A5F] hover:bg-[#E04E52] text-white rounded-xl transition-colors group"
                        >
                          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.996 2C6.468 2 2 6.468 2 11.996S6.468 22 11.996 22 22 17.524 22 11.996 17.524 2 11.996 2zm3.893 11.155c-.042-.033-.915-.691-1.056-.773-.14-.082-.243-.124-.346.124-.103.247-.402.773-.493.93-.092.158-.183.177-.346.059-.162-.118-.684-.252-1.304-.799-.482-.423-.808-.946-.903-1.109-.095-.162-.01-.25.045-.332.046-.068.103-.177.154-.265.051-.088.068-.15.103-.253.033-.103.017-.193-.008-.265-.026-.073-.346-.833-.474-1.14-.124-.3-.25-.259-.346-.264-.092-.005-.195-.007-.298-.007-.103 0-.269.038-.41.193-.14.155-.538.525-.538 1.281 0 .756.553 1.487.629 1.59.076.103 1.09 1.666 2.64 2.336.369.159.657.253.882.325.37.118.708.101.974.061.296-.045.915-.374 1.044-.735.13-.361.13-.67.09-.735-.04-.066-.142-.107-.298-.172z"/>
                          </svg>
                          <div className="flex-1 text-left">
                            <p className="text-[11px] md:text-xs font-medium">Airbnb</p>
                          </div>
                          <svg className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </a>

                        {/* Booking.com */}
                        <a
                          href={room.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-[#003580] hover:bg-[#002A66] text-white rounded-xl transition-colors group"
                        >
                          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.989 7.365h1.728v9.035H2.989zM7.2 7.365h1.62v9.035H7.2zm3.51 0h1.728v9.035H10.71zm3.51 0H16.08v9.035h-1.86zM18.12 7.365h1.728v9.035H18.12zM2.25 3.6l1.47-1.35L21.75 20.4l-1.47 1.35z"/>
                          </svg>
                          <div className="flex-1 text-left">
                            <p className="text-[11px] md:text-xs font-medium">Booking.com</p>
                          </div>
                          <svg className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </a>

                        {/* Book Direct */}
                        <a
                          href="https://wa.me/212524378091"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 border border-[#4b6753] text-[#4b6753] hover:bg-[#4b6753] hover:text-white rounded-xl transition-colors group"
                        >
                          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                          </svg>
                          <div className="flex-1 text-left">
                            <p className="text-[11px] md:text-xs font-medium">Book Direct</p>
                          </div>
                          <svg className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      </div>

                      {/* See details link */}
                      <Link
                        href={`/en/rooms/${room.slug}`}
                        className="inline-flex items-center gap-1.5 text-[11px] md:text-xs text-[#4b6753] font-medium hover:underline underline-offset-4 decoration-[#4b6753]/30 hover:decoration-[#4b6753]"
                      >
                        View full details
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Common Services */}
      <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-[#f6f4f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 md:mb-14 space-y-4">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
              COMMON SERVICES
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed max-w-2xl mx-auto">
              Absolute comfort and tranquility in the heart of the medina
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <div className="text-center py-6 md:py-8 border border-[#2a3936]/10 rounded-2xl hover:border-[#4b6753]/30 transition-colors">
                  <p className="text-sm md:text-[15px] text-[#2a3936] font-medium">{service.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Ticker */}
      <section className="relative w-full py-6 md:py-8 border-t border-b border-[#2a3936]/5 overflow-hidden">
        <div className="flex animate-ticker">
          {[...amenities, ...amenities, ...amenities].map((amenity, index) => (
            <div key={index} className="flex items-center gap-3 shrink-0 px-6 md:px-8">
              <span className="w-1.5 h-1.5 bg-[#4b6753] rounded-full shrink-0" />
              <span className="text-[10px] md:text-xs text-[#2a3936] whitespace-nowrap">
                {amenity}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <NewsletterSection />
      <Footer />
      <BookingWidget />
    </>
  );
}
