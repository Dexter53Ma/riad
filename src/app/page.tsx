import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsTicker from "@/components/BenefitsTicker";
import WelcomeSection from "@/components/WelcomeSection";
import RoomsSection from "@/components/RoomsSection";
import ExperienceSection from "@/components/ExperienceSection";
import InstagramSection from "@/components/InstagramSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4f2] pb-24 md:pb-0">
      <Header />
      <HeroSection />
      <BenefitsTicker />
      <WelcomeSection />
      <RoomsSection />
      <ExperienceSection />
      <InstagramSection />
      <BlogSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
      <BookingWidget />
    </main>
  );
}
