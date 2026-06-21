"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  { id: 1, title: "Exploring the Souks of Marrakech", category: "MARRAKECH", image: "/images/DSC08397-HDR-scaled.jpg", link: "/en/blog/san-sebastian-gastronomika-2025" },
  { id: 2, title: "Day Trip to the Atlas Mountains", category: "DAY TOUR", image: "/images/DSC08411-scaled.jpg", link: "/en/blog/que-ver-en-saint-jean-de-luz" },
  { id: 3, title: "The Best Moroccan Recipes to Try", category: "CUISINE", image: "/images/DSC08453-HDR-scaled.jpg", link: "/en/blog/somebody-feed-phil-san-sebastian" },
  { id: 4, title: "A Guide to Jemaa el-Fnaa", category: "MARRAKECH", image: "/images/DSC08479-HDR-scaled.jpg", link: "/en/blog/que-ver-en-zumaia-pais-vasco" },
  { id: 5, title: "Hidden Gardens of the Medina", category: "DISCOVER", image: "/images/DSC08514-scaled.jpg", link: "/en/blog/que-ver-en-san-sebastian-donostia" },
];

export default function BlogSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#4b6753] font-medium">
            RIAD LES TROIS MAGES BLOG
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#2a3936]/60 max-w-xl mx-auto leading-relaxed">
            Our recommendations and plans so you can make the most of your stay in Marrakech
          </p>
        </ScrollReveal>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-6 mb-10 lg:mb-12">
          {blogPosts.slice(0, 3).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 80}>
              <a href={post.link} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#4b6753] font-medium">
                    {post.category}
                  </p>
                  <h3 className="text-xs md:text-sm text-[#2a3936] font-medium group-hover:text-[#4b6753] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-3 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {blogPosts.map((post) => (
            <a key={post.id} href={post.link} className="group block shrink-0 w-[65vw] min-w-[200px] sm:w-[260px] snap-start">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1.5">
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#4b6753] font-medium">
                  {post.category}
                </p>
                <h3 className="text-xs text-[#2a3936] font-medium group-hover:text-[#4b6753] transition-colors">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10 md:mt-12 lg:mt-16" delay={150}>
          <a
            href="/en/blog"
            className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 border border-[#4b6753] text-[#4b6753] text-[10px] md:text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-[#4b6753] hover:text-white transition-all duration-300 font-medium"
          >
            MORE IDEAS AND PLANS
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
