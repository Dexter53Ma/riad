"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    setIsSubmitting(true);
    setMessage("");
    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setEmail("");
      setAccepted(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 border-t border-[#2a3936]/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#2a3936] mb-8 sm:mb-10 md:mb-12">
            Be the first to discover our latest news
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 md:px-5 py-3.5 md:py-3.5 border border-[#2a3936]/10 text-sm sm:text-sm focus:outline-none focus:border-[#4b6753] transition-colors bg-[#f6f4f2] rounded-md min-h-[44px]"
              />
              <button
                type="submit"
                disabled={isSubmitting || !accepted}
                className="px-6 md:px-8 py-3.5 md:py-3.5 bg-[#4b6753] text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-[#3d5645] active:scale-[0.97] transition-all duration-200 disabled:opacity-50 rounded-md min-h-[44px]"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            <label className="flex items-start gap-2.5 md:gap-3 cursor-pointer text-left">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 w-4 h-4 md:w-4 md:h-4 border-[#2a3936]/20 rounded text-[#4b6753] focus:ring-[#4b6753]"
              />
              <span className="text-[11px] md:text-[11px] text-[#2a3936]/50 leading-relaxed">
                I have read and accept the{" "}
                <a href="/en/legal-terms" className="underline hover:text-[#4b6753] transition-colors">
                  legal terms and conditions
                </a>{" "}
                and the{" "}
                <a href="/en/cookies-policy" className="underline hover:text-[#4b6753] transition-colors">
                  cookies policy
                </a>
              </span>
            </label>

            <p className="text-[9px] md:text-[10px] text-[#2a3936]/30">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#4b6753] transition-colors">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#4b6753] transition-colors">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </form>

          {message && (
            <p className="mt-4 md:mt-5 text-xs sm:text-sm text-[#4b6753]">{message}</p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
