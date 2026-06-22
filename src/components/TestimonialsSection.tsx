"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    id: 1,
    name: "Sophie & Marc",
    location: "Paris, France",
    date: "March 2026",
    rating: 5,
    text: "An absolute gem in the heart of the Medina. From the moment we arrived, we felt like we were staying with friends rather than at a hotel. The courtyard is stunning, the rooftop views are breathtaking, and the breakfast is the best we had in Morocco. We especially loved the music lounge — playing guitar after dinner with other guests was a highlight of our trip.",
    room: "Melchior Suite",
  },
  {
    id: 2,
    name: "James & Emily",
    location: "London, United Kingdom",
    date: "February 2026",
    rating: 5,
    text: "We chose Riad Les Trois Mages for our honeymoon and it exceeded every expectation. The attention to detail is remarkable — from the hand-carved plaster to the fresh mint tea waiting for us each afternoon. The team arranged a private cooking class and a day trip to the Atlas Mountains that were unforgettable. The plunge pool on the rooftop is pure magic at sunset.",
    room: "Arabesque Suite",
  },
  {
    id: 3,
    name: "Yuki & Kenji",
    location: "Tokyo, Japan",
    date: "January 2026",
    rating: 5,
    text: "This riad perfectly captures the spirit of Marrakech. The traditional architecture, the warm hospitality, and the location in the Medina made our stay unforgettable. The team went above and beyond to help us navigate the souks and find the best local restaurants. We will definitely return.",
    room: "Bahia Room",
  },
  {
    id: 4,
    name: "Carolina & Alejandro",
    location: "Barcelona, Spain",
    date: "December 2025",
    rating: 5,
    text: "We traveled with our two children and the riad was perfect for families. The courtyard is a safe and beautiful space for kids to play, and the staff were incredibly warm and accommodating. The rooms are beautifully designed and the rooftop terraces offer stunning views. A truly special place.",
    room: "Gaspard Suite",
  },
  {
    id: 5,
    name: "Michelle",
    location: "New York, United States",
    date: "November 2025",
    rating: 5,
    text: "I have stayed at many hotels around the world, and Riad Les Trois Mages stands out for its authenticity and warmth. The design is stunning — every detail tells a story of Moroccan craftsmanship. The location in the Medina is ideal for exploring on foot, and the team's recommendations were always spot-on. This is not just a place to sleep; it is an experience.",
    room: "Signature Room",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 bg-[#2a3936]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4b6753] font-medium">
              GUEST TESTIMONIALS
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
              What our guests say about their stay
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="relative min-h-[280px] md:min-h-[240px]">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`absolute inset-0 transition-all duration-700 ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : i < active
                    ? "opacity-0 -translate-y-4"
                    : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-center space-y-6 md:space-y-8">
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#4b6753]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm md:text-base lg:text-lg font-light text-white/80 leading-relaxed max-w-3xl mx-auto italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <p className="text-sm md:text-[15px] text-white font-medium">
                    {t.name}
                  </p>
                  <p className="text-[11px] md:text-xs text-white/40">
                    {t.location} &middot; {t.room}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-[#4b6753] w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
