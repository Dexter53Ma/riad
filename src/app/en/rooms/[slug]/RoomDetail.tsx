"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import ScrollReveal from "@/components/ScrollReveal";
import { Room, rooms } from "@/data/rooms";

export default function RoomDetail({ room }: { room: Room }) {
  return (
    <>
      <Header />

      {/* Hero Gallery */}
      <section className="relative w-full">
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src={room.images[0].src}
            alt={room.images[0].alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-16 sm:top-20 left-4 sm:left-6 md:left-10 z-10">
            <Link
              href="/en/rooms"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.12em] font-medium text-[#2a3936] hover:bg-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              All rooms
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10">
            <ScrollReveal>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/70 font-medium mb-2">
                {room.recommendation}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white">
                {room.name}
              </h1>
            </ScrollReveal>
          </div>
        </div>

        <div className="hidden md:flex gap-2 p-4 bg-[#f6f4f2]">
          {room.images.map((img, i) => (
            <div key={i} className="relative w-24 h-16 lg:w-32 lg:h-20 overflow-hidden rounded-lg shrink-0">
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Room Info Bar */}
      <section className="bg-white border-b border-[#2a3936]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 py-4 md:py-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#4b6753]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 6v12m-3-2.818.879.659 1.171-1.091a3.375 3.375 0 1 1 4.773 0l.555.453c.76.612 1.693.977 2.672.977a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 0 0-3 3Z" />
              </svg>
              <span className="text-sm md:text-base font-medium text-[#2a3936]">{room.priceLabel}</span>
            </div>
            <div className="w-px h-5 bg-[#2a3936]/10 hidden sm:block" />
            <InfoPill icon={<BedIcon />} text={room.bed} />
            <InfoPill icon={<UsersIcon />} text={room.capacity} />
            <InfoPill icon={<SizeIcon />} text={room.size} />
            <InfoPill icon={<ViewIcon />} text={room.view} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                  ABOUT THIS ROOM
                </p>
                <h2 className="text-xl md:text-2xl font-light text-[#2a3936] leading-relaxed">
                  {room.tagline}
                </h2>
                <p className="text-sm md:text-[15px] text-[#2a3936]/70 leading-relaxed max-w-2xl">
                  {room.description}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                  HIGHLIGHTS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-[#2a3936]/5 last:border-0">
                      <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-sm text-[#2a3936]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                  ROOM AMENITIES
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {room.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-3 px-3 bg-[#f6f4f2] rounded-xl">
                      <AmenityIcon icon={a.icon} />
                      <span className="text-[11px] md:text-xs text-[#2a3936]">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Mobile gallery */}
            <div className="md:hidden space-y-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">GALLERY</p>
              <div className="grid grid-cols-2 gap-2">
                {room.images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={img.src} alt={img.alt} fill sizes="128px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <ScrollReveal animation="right">
                <div className="bg-white border border-[#2a3936]/10 rounded-2xl p-5 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] space-y-5">
                  <div className="text-center pb-4 border-b border-[#2a3936]/5">
                    <p className="text-2xl md:text-3xl font-light text-[#2a3936]">${room.price}</p>
                    <p className="text-[10px] md:text-[11px] text-[#2a3936]/50 mt-1">per night</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#2a3936]/50 font-medium text-center">
                      Book this room
                    </p>

                    <a
                      href={room.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-4 py-3.5 bg-[#FF5A5F] hover:bg-[#E04E52] text-white rounded-xl transition-colors group"
                    >
                      <AirbnbIcon />
                      <div className="flex-1 text-left">
                        <p className="text-sm font-medium">Book on Airbnb</p>
                        <p className="text-[10px] text-white/70">Check availability</p>
                      </div>
                      <ArrowIcon className="text-white/60" />
                    </a>

                    <a
                      href={room.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-4 py-3.5 bg-[#003580] hover:bg-[#002A66] text-white rounded-xl transition-colors group"
                    >
                      <BookingComIcon />
                      <div className="flex-1 text-left">
                        <p className="text-sm font-medium">Book on Booking.com</p>
                        <p className="text-[10px] text-white/70">Best price guaranteed</p>
                      </div>
                      <ArrowIcon className="text-white/60" />
                    </a>

                    <a
                      href="https://wa.me/212524378091"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-4 py-3.5 border-2 border-[#4b6753] text-[#4b6753] hover:bg-[#4b6753] hover:text-white rounded-xl transition-colors group"
                    >
                      <MailIcon />
                      <div className="flex-1 text-left">
                        <p className="text-sm font-medium">Book Direct</p>
                        <p className="text-[10px] opacity-70">WhatsApp or email us</p>
                      </div>
                      <ArrowIcon />
                    </a>
                  </div>

                  <div className="pt-3 border-t border-[#2a3936]/5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] md:text-xs">
                      <span className="text-[#2a3936]/50">Check-in</span>
                      <span className="text-[#2a3936] font-medium">3:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] md:text-xs">
                      <span className="text-[#2a3936]/50">Check-out</span>
                      <span className="text-[#2a3936] font-medium">11:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] md:text-xs">
                      <span className="text-[#2a3936]/50">Cancellation</span>
                      <span className="text-[#2a3936] font-medium">Free 48h</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Other rooms */}
      <section className="bg-[#f6f4f2] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8 md:mb-12">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium mb-2">
              EXPLORE
            </p>
            <h2 className="text-lg md:text-xl lg:text-2xl font-light text-[#2a3936]">
              Our other rooms &amp; suites
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {rooms
              .filter((r) => r.slug !== room.slug)
              .slice(0, 5)
              .map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 60}>
                  <Link href={`/en/rooms/${r.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                      <Image
                        src={r.images[0].src}
                        alt={r.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-xs md:text-sm text-white font-medium">{r.name}</p>
                        <p className="text-[10px] text-white/70 mt-0.5">{r.priceLabel}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <BookingWidget />
    </>
  );
}

/* ── Small helper components ── */

function InfoPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs md:text-sm text-[#2a3936]/70">
      {icon}
      {text}
    </div>
  );
}

function BedIcon() {
  return (
    <svg className="w-4 h-4 text-[#4b6753]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M2 12h20M2 12c0-4.418 4.03-8 9-8s9 3.582 9 8M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-4 h-4 text-[#4b6753]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function SizeIcon() {
  return (
    <svg className="w-4 h-4 text-[#4b6753]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  );
}

function ViewIcon() {
  return (
    <svg className="w-4 h-4 text-[#4b6753]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${className || ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function AirbnbIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.996 2C6.468 2 2 6.468 2 11.996S6.468 22 11.996 22 22 17.524 22 11.996 17.524 2 11.996 2zm3.893 11.155c-.042-.033-.915-.691-1.056-.773-.14-.082-.243-.124-.346.124-.103.247-.402.773-.493.93-.092.158-.183.177-.346.059-.162-.118-.684-.252-1.304-.799-.482-.423-.808-.946-.903-1.109-.095-.162-.01-.25.045-.332.046-.068.103-.177.154-.265.051-.088.068-.15.103-.253.033-.103.017-.193-.008-.265-.026-.073-.346-.833-.474-1.14-.124-.3-.25-.259-.346-.264-.092-.005-.195-.007-.298-.007-.103 0-.269.038-.41.193-.14.155-.538.525-.538 1.281 0 .756.553 1.487.629 1.59.076.103 1.09 1.666 2.64 2.336.369.159.657.253.882.325.37.118.708.101.974.061.296-.045.915-.374 1.044-.735.13-.361.13-.67.09-.735-.04-.066-.142-.107-.298-.172z"/>
    </svg>
  );
}

function BookingComIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.989 7.365h1.728v9.035H2.989zM7.2 7.365h1.62v9.035H7.2zm3.51 0h1.728v9.035H10.71zm3.51 0H16.08v9.035h-1.86zM18.12 7.365h1.728v9.035H18.12zM2.25 3.6l1.47-1.35L21.75 20.4l-1.47 1.35z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function AmenityIcon({ icon }: { icon: string }) {
  const cls = "w-4 h-4 text-[#4b6753] shrink-0";
  switch (icon) {
    case "bed": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 12h20M2 12c0-4.418 4.03-8 9-8s9 3.582 9 8M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6" /></svg>;
    case "bed2": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 12h20M2 12c0-4.418 4.03-8 9-8s9 3.582 9 8M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6M7 12v4M12 12v4" /></svg>;
    case "wifi": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>;
    case "ac": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>;
    case "coffee": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /></svg>;
    case "shower": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 6v12m-3-2.818.879.659 1.171-1.091a3.375 3.375 0 1 1 4.773 0l.555.453c.76.612 1.693.977 2.672.977a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 0 0-3 3Z" /></svg>;
    case "bathtub": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 6v12m-3-2.818.879.659 1.171-1.091a3.375 3.375 0 1 1 4.773 0l.555.453c.76.612 1.693.977 2.672.977a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 0 0-3 3Z" /></svg>;
    case "terrace": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>;
    case "tv": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M6 20.25h12m-7.5-3v6m3-6v6m-10.125-3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm3-6h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm3-6h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm3-6h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>;
    case "safe": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>;
    case "hairdryer": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>;
    default: return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
  }
}
