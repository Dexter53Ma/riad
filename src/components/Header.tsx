"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from "@/components/icons";

const navLinks = [
  { label: "Rooms", href: "/en/rooms" },
  { label: "The Riad", href: "/en/the-hotel" },
  { label: "Gallery", href: "/en/gallery" },
  { label: "About Us", href: "/en/about-us" },
  { label: "Blog", href: "/en/blog" },
  { label: "Contact", href: "/en/contact" },
];

const bottomLinks = [
  { label: "ABOUT US", href: "/en/about-us" },
  { label: "CONTACT & HOW TO GET HERE", href: "/en/contact" },
  { label: "Blog", href: "/en/blog" },
];

const socialLinks = [
  { icon: FacebookIcon, href: "https://www.facebook.com/riadsestroismages", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/riadsestroismages/", label: "Instagram" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@riadsestroismages", label: "TikTok" },
  { icon: YouTubeIcon, href: "https://www.youtube.com/@riadsestroismages", label: "YouTube" },
];

const languages = ["ES", "EN", "EU", "FR", "JA"];

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.1 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#4b6753] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            : "bg-gradient-to-b from-black/40 to-transparent"
        )}
      >
        <div className="w-full px-4 sm:px-5 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 z-50 relative">
              {isScrolled ? (
                <Image
                  src="/images/logodark.png"
                  alt="Les Trois Mages Riad & Spa"
                  width={200}
                  height={80}
                  className="h-auto w-32 sm:w-36 md:w-44 transition-all duration-500"
                />
              ) : (
                <Image
                  src="/images/logo.png"
                  alt="Les Trois Mages Riad & Spa"
                  width={200}
                  height={80}
                  className="h-auto w-36 sm:w-44 md:w-56 transition-all duration-500"
                />
              )}
            </a>

            {/* Right side links */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-7 z-50">
              <a
                href="/en/contact"
                className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.12em] font-medium text-white/80 hover:text-white transition-colors hidden md:block"
              >
                Contact
              </a>

              {/* Language Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 text-[10px] md:text-[11px] uppercase tracking-[0.12em] font-medium text-white/80 hover:text-white transition-colors"
                >
                  EN
                  <motion.svg
                    animate={{ rotate: langOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-3 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-2 min-w-[60px]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setLangOpen(false)}
                          className={cn(
                            "block w-full text-center px-4 py-1.5 text-[11px] transition-colors",
                            lang === "EN" ? "text-[#4b6753] font-medium" : "text-[#2a3936]/50 hover:text-[#4b6753]"
                          )}
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-3.5 md:h-4 bg-white/20" />

              {/* Menu toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 sm:gap-2.5 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.12em] font-medium text-white hover:text-white/80 transition-colors"
              >
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <div className="flex flex-col gap-[4px] sm:gap-[5px] w-4 sm:w-5">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="block h-[1.5px] bg-white origin-center rounded-full w-4 sm:w-5"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -5.5, width: "100%" } : { rotate: 0, y: 0, width: "75%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="block h-[1.5px] bg-white origin-center rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto"
          >
            <div className="flex-1 flex flex-col items-center justify-center py-16 px-4">
              <motion.a
                href="/"
                variants={staggerItem}
                className="block mb-8 md:mb-10 lg:mb-14"
              >
                <Image
                  src="/images/logodark.png"
                  alt="Les Trois Mages Riad & Spa"
                  width={200}
                  height={80}
                  className="w-44 md:w-56 lg:w-64 h-auto"
                />
              </motion.a>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-1.5 sm:space-y-2 md:space-y-3"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.label} variants={staggerItem}>
                    <a
                      href={link.href}
                      className="group relative inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#2a3936] hover:text-[#4b6753] transition-colors"
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#4b6753] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 + navLinks.length * 0.06 + 0.1 }}
                className="pt-6 md:pt-8 lg:pt-10 flex flex-wrap justify-center gap-x-4 gap-y-1.5 md:gap-x-5 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider"
              >
                {bottomLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#2a3936]/50 hover:text-[#4b6753] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>

              <motion.div
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 + navLinks.length * 0.06 + 0.2 }}
                className="pt-6 md:pt-8 lg:pt-10 flex flex-col items-center gap-5 md:gap-6"
              >
                <div className="text-center text-[11px] md:text-xs sm:text-sm text-[#2a3936]/50 space-y-0.5 md:space-y-1">
                  <p>Derb Sidi Bouamar, Riad Zitoun Lakdim</p>
                  <p>Medina, Marrakech, Morocco</p>
                  <a href="mailto:info@riadsestroismages.com" className="block hover:text-[#4b6753] transition-colors">
                    info@riadsestroismages.com
                  </a>
                  <a href="tel:+212524378091" className="block hover:text-[#4b6753] transition-colors">
                    T. +212 524 378 091
                  </a>
                </div>

                <div className="flex gap-2.5 md:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-[#2a3936]/40 hover:text-white hover:bg-[#4b6753] rounded-full transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
