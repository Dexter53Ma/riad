"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import BenefitsTicker from "@/components/BenefitsTicker";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";

const contactCards = [
  {
    title: "Reservations and reception",
    phone: "+212 524 378 091",
    email: "info@riadsestroismages.com",
    hasWhatsApp: true,
  },
  {
    title: "Groups and events",
    phone: "+212 524 378 091",
    email: "info@riadsestroismages.com",
    hasWhatsApp: false,
  },
  {
    title: "Press and marketing",
    phone: "+212 524 378 091",
    email: "marketing@riadsestroismages.com",
    hasWhatsApp: false,
  },
];

const howToGetItems = [
  { id: 1, label: "Medina location", image: "/images/DSC08479-HDR-scaled.jpg" },
  { id: 2, label: "Airport transfer", image: "/images/DSC08514-scaled.jpg" },
  { id: 3, label: "Private transfer from/to the airport", image: "/images/DSC08594-HDR-scaled.jpg" },
];

const howToGetDetails = [
  {
    id: 1,
    title: "Medina location",
    text: "Our riad is located in the heart of the Medina, a UNESCO World Heritage site. The narrow, winding streets of the old city are best explored on foot, and our team will be happy to guide you.",
  },
  {
    id: 2,
    title: "Airport transfer",
    text: "Marrakech Menara Airport (RAK) is located just 15 minutes from the riad. We can arrange a private transfer to ensure a comfortable arrival.",
  },
  {
    id: 3,
    title: "Private transfer from/to the airport",
    text: "We take care of your transfer between the airport and the riad. Simply let us know your flight details and we'll handle the rest.",
  },
];

const faqs = [
  {
    id: 1,
    question: "How do I get to the riad from the airport?",
    answer: "Marrakech Menara Airport is about 15 minutes by car. We recommend arranging a private transfer through us, as the Medina's narrow streets can be challenging to navigate. Our team will meet you at a nearby landmark and guide you to the riad."
  },
  {
    id: 2,
    question: "Can I explore the Medina on foot?",
    answer: "Absolutely! The Medina is best explored on foot. Our riad is centrally located, within walking distance of Jemaa el-Fnaa square, the souks, and many of Marrakech's main attractions."
  },
  {
    id: 3,
    question: "Is the riad accessible by car?",
    answer: "Cars cannot enter the Medina directly. However, we can arrange for a taxi or private transfer to drop you at a nearby meeting point, where our team will welcome you and guide you to the riad."
  },
  {
    id: 4,
    question: "Do you offer airport pickup service?",
    answer: "Yes, we offer private airport transfer service. Please provide us with your flight details at least 24 hours before arrival and we'll have everything arranged for you."
  },
];

export default function ContactPage() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0">
          <Image src="/images/DSC08625-scaled.jpg" alt="How to get to Riad Les Trois Mages" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white text-center px-4">
            How to get to Riad Les Trois Mages
          </h1>
          <a href="https://maps.app.goo.gl/xEYuEhNQRigDSiQL7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 border border-white text-white text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-white hover:text-[#2a3936] transition-all duration-300 font-medium">
            SEE ON GOOGLE MAPS
          </a>
        </div>
      </section>

      <BenefitsTicker />

      {/* Intro */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base md:text-lg lg:text-xl font-light text-[#2a3936] leading-relaxed">
            Finding Riad Les Trois Mages means discovering the authentic heart of Marrakech: nestled in the Medina, between the vibrant souks and the tranquil courtyard. Our location is part of what makes us special... and that&apos;s why we take care of every detail to make your arrival easy and comfortable.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative w-full py-16 md:py-20 bg-[#f6f4f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center space-y-4">
                <h3 className="text-sm md:text-[15px] font-medium text-[#2a3936]">{card.title}</h3>
                <div className="space-y-2 text-sm text-[#2a3936]/60">
                  <a href={`tel:${card.phone.replace(/\s/g, "")}`} className="block hover:text-[#4b6753] transition-colors">{card.phone}</a>
                  <a href={`mailto:${card.email}`} className="block hover:text-[#4b6753] transition-colors">{card.email}</a>
                </div>
                {card.hasWhatsApp && (
                  <a href="https://wa.me/212524378091" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a3936]/20 text-[#2a3936] text-[10px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white hover:border-[#4b6753] transition-all duration-300 font-medium">
                    CONTACT US ON WHATSAPP
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get here */}
      <section className="relative w-full py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">WE MAKE IT EASY FOR YOU</p>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] leading-relaxed">How to get to the riad</h2>
              </div>
              <div className="space-y-0">
                {howToGetItems.map((item, index) => (
                  <div key={item.id} className="group cursor-pointer" onMouseEnter={() => setActiveService(index)}>
                    <div className={`flex items-center gap-4 py-4 border-t border-[#2a3936]/10 transition-colors ${activeService === index ? "text-[#4b6753]" : ""}`}>
                      <span className="text-sm md:text-[15px]">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-square w-full overflow-hidden hidden md:block">
                <Image src={howToGetItems[activeService].image} alt={howToGetItems[activeService].label} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-[#2a3936]">{howToGetDetails[activeService].title}</h3>
                <p className="text-sm text-[#2a3936]/60 leading-relaxed">{howToGetDetails[activeService].text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 border-t border-[#2a3936]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936]">FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-[#2a3936]/10 rounded-lg overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#f6f4f2] transition-colors">
                  <span className="text-sm md:text-[15px] text-[#2a3936] font-medium pr-4">{faq.question}</span>
                  <span className="text-[#4b6753] text-lg shrink-0">{openFaq === faq.id ? "−" : "+"}</span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === faq.id ? "200px" : "0" }}>
                  <p className="px-6 pb-4 text-sm text-[#2a3936]/60 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
      <BookingWidget />
    </>
  );
}
