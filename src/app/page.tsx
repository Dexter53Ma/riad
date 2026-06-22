import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsTicker from "@/components/BenefitsTicker";
import WelcomeSection from "@/components/WelcomeSection";
import RoomsSection from "@/components/RoomsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Riad Les Trois Mages — Boutique Riad in Marrakech Medina",
  description:
    "Discover Riad Les Trois Mages, a boutique riad in Marrakech's Medina. 6 unique rooms, rooftop terraces, plunge pool & authentic Moroccan hospitality. Book direct.",
  alternates: {
    canonical: "https://riadsestroismages.com",
  },
  openGraph: {
    title: "Riad Les Trois Mages — Boutique Riad in Marrakech Medina",
    description:
      "6 unique rooms, rooftop terraces, plunge pool & authentic Moroccan hospitality in the heart of Marrakech Medina.",
    url: "https://riadsestroismages.com",
    images: ["/images/DSC09313-HDR-scaled.jpg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4f2] pb-24 md:pb-0 overflow-x-hidden">
      <Header />
      <HeroSection />
      <BenefitsTicker />
      <WelcomeSection />
      <RoomsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <InstagramSection />
      <BlogSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
      <BookingWidget />
    </main>
  );
}
