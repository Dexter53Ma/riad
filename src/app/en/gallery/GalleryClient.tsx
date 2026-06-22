"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import RoomsSection from "@/components/RoomsSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const galleryImages = [
  { id: 1, src: "/images/DSC08281-scaled.jpg", alt: "Riad Courtyard" },
  { id: 2, src: "/images/DSC08320-HDR-scaled.jpg", alt: "Rooftop Terrace" },
  { id: 3, src: "/images/DSC08346-HDR-scaled.jpg", alt: "Plunge Pool" },
  { id: 4, src: "/images/DSC08361-HDR-scaled.jpg", alt: "Traditional Interior" },
  { id: 5, src: "/images/DSC08365-scaled.jpg", alt: "Music Lounge" },
  { id: 6, src: "/images/DSC08379-HDR-scaled.jpg", alt: "Rooftop Views" },
  { id: 7, src: "/images/DSC08397-HDR-scaled.jpg", alt: "Room Detail" },
  { id: 8, src: "/images/DSC08411-scaled.jpg", alt: "Courtyard" },
  { id: 9, src: "/images/DSC08453-HDR-scaled.jpg", alt: "Traditional Decor" },
  { id: 10, src: "/images/DSC08479-HDR-scaled.jpg", alt: "Medina Streets" },
  { id: 11, src: "/images/DSC08514-scaled.jpg", alt: "Riad Entrance" },
  { id: 12, src: "/images/DSC08594-HDR-scaled.jpg", alt: "Terrace" },
  { id: 13, src: "/images/DSC08625-scaled.jpg", alt: "Courtyard Detail" },
  { id: 14, src: "/images/DSC08638-scaled.jpg", alt: "Rooftop" },
  { id: 15, src: "/images/DSC08720-scaled.jpg", alt: "Room" },
  { id: 16, src: "/images/DSC08726-scaled.jpg", alt: "Traditional Pattern" },
  { id: 17, src: "/images/DSC08741-scaled.jpg", alt: "Seating Area" },
  { id: 18, src: "/images/DSC08762-HDR-scaled.jpg", alt: "Interior" },
  { id: 19, src: "/images/DSC08811-scaled.jpg", alt: "Marrakech View" },
];

export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  return (
    <>
      <Header />

      {/* Gallery */}
      <section className="relative w-full bg-black py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
              PHOTO GALLERY
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
              A visual tour of our riad
            </h2>
            <p className="text-sm md:text-[15px] text-white/50 max-w-xl mx-auto leading-relaxed">
              Discover Riad Les Trois Mages through our image gallery: traditional courtyards, rooftop terraces, and the authentic spirit of Marrakech.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                className="break-inside-avoid cursor-pointer group overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                      ⤢
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-3 text-white/70 hover:text-white transition-colors"
          >
            <CloseIcon className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full"
              >
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      <RoomsSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
      <BookingWidget />
    </>
  );
}
