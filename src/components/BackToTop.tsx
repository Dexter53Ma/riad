"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[88px] left-4 md:bottom-8 md:left-6 z-40 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-[#2a3936] text-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:bg-[#4b6753] transition-colors"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
