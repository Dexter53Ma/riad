"use client";

import Image from "next/image";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import { InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

const socialLinks = [
  { icon: FacebookIcon, href: "https://www.facebook.com/riadsestroismages", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/riadsestroismages/", label: "Instagram" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@riadsestroismages", label: "TikTok" },
  { icon: YouTubeIcon, href: "https://www.youtube.com/@riadsestroismages", label: "YouTube" },
];

export default function ContactSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-[#f6f4f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Map / Image */}
          <ScrollReveal animation="left" className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/DSC09167-HDR-scaled.jpg"
                alt="Riad Les Trois Mages Location"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="right" className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-2 lg:pt-8">
            <div className="space-y-3 md:space-y-4">
              <Image
                src="/images/logo.png"
                alt="Riad Les Trois Mages Logo"
                width={150}
                height={141}
                className="w-20 md:w-24 lg:w-28 h-auto mx-auto lg:mx-0"
              />
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#2a3936]">
                Riad Les Trois Mages
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-xs sm:text-sm text-[#2a3936]">
              <div className="flex items-start gap-2.5 md:gap-3 justify-center lg:justify-start">
                <MapPinIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#4b6753] mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  Derb Sidi Bouamar, Riad Zitoun Lakdim
                  <br />
                  Medina, Marrakech, Morocco
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Riad+Les+Trois+Mages+Marrakech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#4b6753] font-medium border-b border-[#4b6753] pb-0.5 hover:text-[#3d5645] hover:border-[#3d5645] transition-colors"
              >
                OPEN IT IN GOOGLE MAPS
              </a>

              <a
                href="mailto:info@riadsestroismages.com"
                className="flex items-center gap-2.5 md:gap-3 justify-center lg:justify-start hover:text-[#4b6753] transition-colors"
              >
                <MailIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#4b6753] shrink-0" />
                info@riadsestroismages.com
              </a>

              <a
                href="tel:+212524378091"
                className="flex items-center gap-2.5 md:gap-3 justify-center lg:justify-start hover:text-[#4b6753] transition-colors"
              >
                <PhoneIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#4b6753] shrink-0" />
                T. +212 524 378 091
              </a>

              <a
                href="https://wa.me/212524378091"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#4b6753] font-medium border-b border-[#4b6753] pb-0.5 hover:text-[#3d5645] hover:border-[#3d5645] transition-colors"
              >
                SEND US A WHATSAPP
              </a>
            </div>

            <div className="flex gap-2.5 md:gap-3 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-[#2a3936] hover:text-white hover:bg-[#4b6753] rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
