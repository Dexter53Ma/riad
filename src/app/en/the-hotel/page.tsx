"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import BenefitsTicker from "@/components/BenefitsTicker";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";

const hotelServices = [
  { id: 1, label: "Airport transfer", image: "/images/DSC09195-scaled.jpg" },
  { id: 2, label: "Hammam & spa recommendations", image: "/images/DSC09235-HDR.png" },
  { id: 3, label: "Private guided tours", image: "/images/DSC09256-HDR-scaled.jpg" },
  { id: 4, label: "Traditional Moroccan cooking classes", image: "/images/DSC09283-HDR-scaled.jpg" },
];

const faqs = [
  {
    id: 1,
    question: "Is the riad suitable for children?",
    answer: "Riad Les Trois Mages welcomes families with children. Our intimate atmosphere and traditional courtyard make it a safe and charming space for all ages. Please contact us for family room configurations."
  },
  {
    id: 2,
    question: "What type of breakfast is served?",
    answer: "Every morning, we serve a traditional Moroccan breakfast in our courtyard or on the rooftop terrace, featuring fresh mint tea, homemade msemen, seasonal fruits, and local delicacies."
  },
  {
    id: 3,
    question: "Can you help organize activities and excursions?",
    answer: "Absolutely! We can arrange guided tours of the Medina, day trips to the Atlas Mountains, desert excursions, cooking classes, hammam visits, and more. Just let us know what interests you."
  },
];

export default function TheHotelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/DSC09313-HDR-scaled.jpg"
            alt="The Riad - Riad Les Trois Mages"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white text-center px-4">
            The Riad
          </h1>
        </div>
      </section>

      <BenefitsTicker />

      {/* Intro */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 bg-[#4b6753]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="relative aspect-[7/12] w-64 mx-auto overflow-hidden">
            <Image
              src="/images/DSC09356-scaled.jpg"
              alt="Riad Les Trois Mages"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-base md:text-lg lg:text-xl font-light text-[#2a3936] leading-relaxed max-w-2xl mx-auto">
            Riad Les Trois Mages is a small and intimate riad designed to feel less
            like a hotel and more like a welcoming Moroccan home, where guests can
            relax, connect and experience the authentic spirit of Marrakech. With only
            six individually styled rooms arranged around a traditional courtyard, the
            riad offers a calm and friendly atmosphere away from the bustle of the Medina.
          </p>
        </div>
      </section>

      {/* Rooftop Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[7/12] w-full max-w-sm mx-auto overflow-hidden order-1">
              <Image
                src="/images/DSC09380-HDR-scaled.jpg"
                alt="Rooftop Terraces"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 text-center md:text-left order-2">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                ROOFTOP TERRACES
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
                On the rooftop terraces, guests can enjoy the sunshine of Marrakech, relax beside the plunge pool and admire the rooftops of the old city in complete tranquillity.
              </h2>
              <p className="text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed">
                Open to all guests throughout the year, with stunning views over the Medina.
              </p>
              <div className="pt-2">
                <a
                  href="/en/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-[#4b6753] text-[#4b6753] text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium"
                >
                  DISCOVER OUR TERRACE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                  OUR SERVICES
                </p>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
                  Every detail is designed to make your stay in Marrakech unforgettable.
                </h2>
              </div>

              {/* Service list */}
              <div className="space-y-0">
                {hotelServices.map((service) => (
                  <div key={service.id} className="group cursor-pointer">
                    <div className="flex items-center gap-4 py-4 border-t border-[#2a3936]/10">
                      <span className="text-sm md:text-[15px] text-[#2a3936] group-hover:text-[#4b6753] transition-colors">
                        {service.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden hidden md:block">
              {hotelServices.map((service, index) => (
                <div
                  key={service.id}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: index === 0 ? 1 : 0 }}
                >
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lobby Bar Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[7/12] w-full max-w-sm mx-auto overflow-hidden order-1">
              <Image
                src="/images/DSC09392-HDR-scaled.jpg"
                alt="Lobby Bar"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 text-center md:text-left order-2">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                MUSIC LOUNGE
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
                A space where music fills the air
              </h2>
              <div className="space-y-4 text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed">
                <p>
                  One of the unique features of the riad is its music lounge, where a piano, guitars and other musical instruments create a warm and artistic atmosphere.
                </p>
                <p>
                  Between the sounds of music, the scent of mint tea and the peaceful rhythm of the riad, guests are invited to slow down and enjoy moments of relaxation and sharing.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-[#4b6753] text-[#4b6753] text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium"
                >
                  DISCOVER MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experience */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 bg-[#4b6753]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="relative aspect-[7/12] w-64 mx-auto overflow-hidden">
            <Image
              src="/images/DSC09399-scaled.jpg"
              alt="Guest Experience"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
            GUEST EXPERIENCE
          </p>
          <p className="text-base md:text-lg lg:text-xl font-light text-[#2a3936] leading-relaxed max-w-2xl mx-auto">
            Personalized attention, curated recommendations and a warm, friendly atmosphere so you can experience the authentic spirit of Marrakech.
          </p>
        </div>
      </section>

      {/* Gym Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[7/12] w-full max-w-sm mx-auto overflow-hidden order-1">
              <Image
                src="/images/DSC09406-scaled.jpg"
                alt="Gym"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 text-center md:text-left order-2">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
                COURTYARD &amp; PLUNGE POOL
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
                A peaceful oasis in the heart of the Medina. Relax by the plunge pool surrounded by traditional Moroccan architecture.
              </h2>
              <div className="space-y-2 text-sm md:text-[15px] text-[#2a3936]/60 leading-relaxed">
                <p>The traditional courtyard is the heart of the riad, a cool and serene retreat from the vibrant streets of Marrakech.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 border-t border-[#2a3936]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
              FAQ &gt; THE RIAD
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">
              We&apos;ll help you prepare your stay at our riad
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-[#2a3936]/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#f6f4f2] transition-colors"
                >
                  <span className="text-sm md:text-[15px] text-[#2a3936] font-medium pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#4b6753] text-lg shrink-0">
                    {openFaq === faq.id ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-sm text-[#2a3936]/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
      <BookingWidget />
    </>
  );
}
