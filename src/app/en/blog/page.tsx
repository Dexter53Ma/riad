import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marrakech Travel Blog — Tips & Guides",
  description:
    "Tips, guides & stories from Marrakech. Discover the best day trips, cuisine, culture & experiences — from the team at Riad Les Trois Mages.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/blog",
  },
  openGraph: {
    title: "Marrakech Travel Blog — Riad Les Trois Mages",
    description:
      "Tips, guides & stories from Marrakech. Discover the best day trips, cuisine, culture & experiences.",
    url: "https://riadsestroismages.com/en/blog",
  },
};

const categories = [
  "All",
  "CUISINE",
  "DAY TOUR",
  "MARRAKECH",
  "MOROCCAN CULTURE",
  "EXPERIENCES",
  "RIAD LIFE",
];

const blogPosts = [
  {
    slug: "culinary-journey-marrakech-medina",
    category: "CUISINE",
    title: "The Flavors of Marrakech: A Culinary Journey Through the Medina",
    date: "22 September 2025",
    excerpt:
      "From the aromatic spices of the souks to the traditional tagines served in our courtyard, Marrakech offers a culinary experience like no other. Discover the best places to eat and the must-try dishes during your stay.",
    image: "/images/DSC08741-scaled.jpg",
  },
  {
    slug: "atlas-mountains-day-trip",
    category: "DAY TOUR",
    title: "Day Trip to the Atlas Mountains: Berber Villages and Mountain Views",
    date: "26 August 2025",
    excerpt:
      "Escape the bustling Medina and discover the stunning Atlas Mountains. Visit traditional Berber villages, enjoy panoramic views, and experience the warm hospitality of Morocco's mountain communities.",
    image: "/images/DSC08762-HDR-scaled.jpg",
  },
  {
    slug: "hidden-gardens-marrakech",
    category: "MARRAKECH",
    title: "The Hidden Gardens of Marrakech: A Peaceful Escape from the Medina",
    date: "19 August 2025",
    excerpt:
      "Beyond the vibrant souks and bustling squares, Marrakech hides some of the most beautiful gardens in the world. From the serene Majorelle Garden to the fragrant Menara Gardens, discover these green oases.",
    image: "/images/DSC08811-scaled.jpg",
  },
  {
    slug: "moroccan-cooking-classes",
    category: "CUISINE",
    title: "Traditional Moroccan Cooking: Classes and Experiences Near Our Riad",
    date: "21 July 2025",
    excerpt:
      "Learn the art of Moroccan cuisine during your stay. From tagine preparation to traditional pastry making, discover the best cooking classes and food experiences in Marrakech.",
    image: "/images/DSC08849-scaled.jpg",
  },
  {
    slug: "essaouira-coastal-day-trip",
    category: "DAY TOUR",
    title: "Essaouira: A Coastal Day Trip from Marrakech",
    date: "4 April 2025",
    excerpt:
      "Just a few hours from Marrakech, the coastal town of Essaouira offers a refreshing change of pace. With its blue-and-white medina, windswept beaches, and fresh seafood, it's the perfect day trip.",
    image: "/images/DSC08917-HDR-scaled.jpg",
  },
  {
    slug: "first-timers-guide-marrakech",
    category: "MARRAKECH",
    title: "First-Timer's Guide to Marrakech: What to Know Before You Go",
    date: "24 March 2025",
    excerpt:
      "Marrakech is a city of contrasts and surprises. From navigating the souks to understanding local customs, here's everything you need to know for your first visit to the Red City.",
    image: "/images/DSC08939-scaled.jpg",
  },
  {
    slug: "unique-experiences-marrakech",
    category: "EXPERIENCES",
    title: "Unique Experiences in Marrakech: From Hammam to Hot Air Balloon",
    date: "20 March 2025",
    excerpt:
      "Go beyond the ordinary with unforgettable experiences in Marrakech. Float above the desert in a hot air balloon, rejuvenate in a traditional hammam, or explore the Medina with a local guide.",
    image: "/images/DSC08983-HDR-scaled.jpg",
  },
  {
    slug: "moroccan-traditions-music-art-craft",
    category: "MOROCCAN CULTURE",
    title: "Moroccan Traditions: Music, Art and Craft in Marrakech",
    date: "9 March 2025",
    excerpt:
      "Immerse yourself in the rich cultural tapestry of Morocco. From Gnawa music to intricate zellige tilework, discover the traditions that make Marrakech a living museum of art and culture.",
    image: "/images/DSC08997-scaled.jpg",
  },
  {
    slug: "festivals-events-marrakech-2026",
    category: "EXPERIENCES",
    title: "Festivals and Events in Marrakech 2026: What's On During Your Stay",
    date: "25 February 2025",
    excerpt:
      "Marrakech comes alive with festivals and events throughout the year. From the famous Marrakech Popular Arts Festival to international film and music events, there's always something happening.",
    image: "/images/DSC09061-scaled.jpg",
  },
  {
    slug: "why-stay-in-a-riad",
    category: "RIAD LIFE",
    title: "Why Staying in a Riad is the Best Way to Experience Marrakech",
    date: "22 February 2025",
    excerpt:
      "A riad offers something no hotel can: an authentic glimpse into Moroccan life. With their traditional architecture, intimate courtyards, and personalized service, riads are the heart and soul of Marrakech.",
    image: "/images/DSC09103-HDR-scaled.jpg",
  },
];

const featuredPost = blogPosts[0];
const remainingPosts = blogPosts.slice(1);

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* Hero / Featured Post */}
      <section className="relative w-full bg-[#2a3936]">
        <Link href={`/en/blog/${featuredPost.slug}`} className="block group">
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/70 font-medium">
                {featuredPost.category}
              </span>
              <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-light text-white max-w-3xl leading-snug">
                {featuredPost.title}
              </h1>
              <p className="mt-2 text-xs md:text-sm text-white/50">{featuredPost.date}</p>
              <span className="inline-block mt-4 text-[11px] md:text-xs uppercase tracking-[0.15em] text-white border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                Read more
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Blog listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#4b6753] font-medium mb-3">
            Riad Les Trois Mages Blog
          </p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-light text-[#2a3936] max-w-2xl mx-auto leading-relaxed">
            Stories, places and moments that inspire a way of experiencing Marrakech with calm, beauty and authenticity.
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cn(
                "px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.12em] rounded-full border transition-all duration-300",
                cat === "All"
                  ? "bg-[#4b6753] text-white border-[#4b6753]"
                  : "bg-transparent text-[#2a3936]/60 border-[#2a3936]/20 hover:border-[#4b6753] hover:text-[#4b6753]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & search bar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-[#2a3936]/50">
            <button className="font-medium text-[#2a3936]">Most recent first</button>
            <span>/</span>
            <button className="hover:text-[#4b6753] transition-colors">Oldest first</button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-40 md:w-56 text-[11px] md:text-xs px-4 py-2 border border-[#2a3936]/15 rounded-full bg-transparent text-[#2a3936] placeholder:text-[#2a3936]/30 focus:outline-none focus:border-[#4b6753] transition-colors"
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#2a3936]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/en/blog/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#4b6753] font-medium">
                {post.category}
              </span>
              <h3 className="mt-1.5 text-sm md:text-base font-light text-[#2a3936] group-hover:text-[#4b6753] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-1 text-[10px] md:text-[11px] text-[#2a3936]/40">{post.date}</p>
              <p className="mt-2 text-xs md:text-sm text-[#2a3936]/50 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <span className="inline-block mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#2a3936]/60 border-b border-[#2a3936]/20 pb-0.5 group-hover:text-[#4b6753] group-hover:border-[#4b6753]/40 transition-colors">
                Read more
              </span>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 text-[10px] md:text-[11px] uppercase tracking-[0.15em] border border-[#2a3936]/20 rounded-full text-[#2a3936]/60 hover:border-[#4b6753] hover:text-[#4b6753] transition-all duration-300">
            Load more
          </button>
          <p className="mt-3 text-[10px] text-[#2a3936]/30">
            Showing {blogPosts.length} articles
          </p>
        </div>
      </section>

      {/* Rooms carousel */}
      <section className="bg-[#f6f4f2] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#4b6753] font-medium mb-2">
              OUR ROOMS &amp; SUITES
            </p>
            <h2 className="text-lg md:text-xl lg:text-2xl font-light text-[#2a3936]">
              Six individually styled rooms around a traditional courtyard
            </h2>
            <Link
              href="/en/rooms"
              className="inline-block mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#4b6753] border-b border-[#4b6753]/40 pb-0.5 hover:border-[#4b6753] transition-colors"
            >
              All rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#2a3936] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-2">
            Riad Les Trois Mages
          </p>
          <p className="text-xs md:text-sm text-white/50">
            Derb Sidi Bouamar, Riad Zitoun Lakdim \u2014 Medina, Marrakech
          </p>
          <a
            href="mailto:info@riadsestroismages.com"
            className="inline-block mt-2 text-xs md:text-sm text-white/50 hover:text-white transition-colors"
          >
            info@riadsestroismages.com
          </a>
          <a
            href="tel:+212524378091"
            className="inline-block mt-1 ml-4 text-xs md:text-sm text-white/50 hover:text-white transition-colors"
          >
            T. +212 524 378 091
          </a>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
