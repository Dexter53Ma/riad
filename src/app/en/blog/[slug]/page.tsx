import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  date: string;
  author: string;
  image: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  "culinary-journey-marrakech-medina": {
    slug: "culinary-journey-marrakech-medina",
    category: "CUISINE",
    title: "The Flavors of Marrakech: A Culinary Journey Through the Medina",
    date: "22 September 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08741-scaled.jpg",
    content: [
      "Marrakech is a city that speaks through its food. From the moment you step into the souks, the air is thick with the scent of cumin, saffron, and slow-cooked tagines. For us at Riad Les Trois Mages, food is not just sustenance — it is a way of connecting with the culture, the land, and the people of Morocco.",
      "Every morning, we serve a traditional Moroccan breakfast in our courtyard or on the rooftop terrace. It begins with fresh mint tea, poured from a height to create the perfect froth, accompanied by homemade msemen — flaky, buttery flatbreads — and amlou, a rich almond and argan oil spread that is uniquely Moroccan. Seasonal fruits, local honey, and freshly baked bread complete the experience.",
      "Beyond the riad, the Medina offers a culinary adventure at every turn. Jemaa el-Fnaa, the famous main square, transforms every evening into an open-air restaurant. Dozens of food stalls fire up their grills, and the sound of sizzling lamb mingled with the calls of vendors creates an atmosphere you will not find anywhere else in the world.",
      "For those seeking a deeper understanding of Moroccan cuisine, we recommend a cooking class at one of the many schools near the riad. Learn to prepare a traditional tagine — the slow-cooked stew that is the cornerstone of Moroccan cooking — or master the art of pastilla, the sweet and savory pie that originates from Fes. Our team can arrange private classes tailored to your interests and dietary needs.",
      "One of our favorite experiences to recommend is a visit to a local spice market. The vendors are incredibly knowledgeable and will guide you through the different blends — ras el hanout, a complex mix of up to thirty spices, is the most famous. Bring some home and recreate the flavors of Marrakech in your own kitchen.",
      "Back at the riad, our courtyard is the perfect setting to enjoy a leisurely lunch. We work with local producers to source the freshest ingredients — organic vegetables from the Ourika Valley, olive oil from the Atlas foothills, and herbs picked from our own garden. Every dish tells a story of the region.",
      "As the sun sets over the Medina, the rooftop terrace becomes the ideal spot for a pre-dinner drink. Watch the call to prayer echo across the rooftops, see the minaret of the Koutoubia Mosque glow in the fading light, and let the sounds of the city settle into a gentle hum. It is in these moments that you truly understand why Marrakech has inspired travelers, artists, and writers for centuries.",
    ],
  },
  "atlas-mountains-day-trip": {
    slug: "atlas-mountains-day-trip",
    category: "DAY TOUR",
    title: "Day Trip to the Atlas Mountains: Berber Villages and Mountain Views",
    date: "26 August 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08762-HDR-scaled.jpg",
    content: [
      "Just an hour's drive from the bustling Medina of Marrakech, the High Atlas Mountains rise dramatically from the plains, offering some of the most spectacular scenery in North Africa. A day trip to the mountains is one of our favorite excursions to recommend to guests, and it provides a fascinating contrast to the energy of the city.",
      "The journey itself is part of the experience. As you leave Marrakech behind, the landscape transforms from urban sprawl to fertile plains dotted with argan trees, and then to rugged mountain terrain with terraced hillsides and deep valleys. The road winds through the Tizi n'Tichka pass, one of the highest road passes in North Africa, offering breathtaking panoramic views at every turn.",
      "Along the way, you will pass through traditional Berber villages built from local stone and mud brick, blending seamlessly into the mountainside. The Berber people are the indigenous inhabitants of North Africa, and their culture, language, and traditions have endured for thousands of years. Many villages welcome visitors, and a cup of tea with a local family is an experience that will stay with you long after you return home.",
      "We recommend hiring a local guide who can introduce you to the communities and share stories of mountain life. Our team works with experienced guides who know the region intimately and can tailor the trip to your interests — whether that is hiking, photography, or simply soaking in the views.",
      "For those who want a more active experience, there are numerous hiking trails ranging from gentle walks through olive groves to challenging treks through remote valleys. The Imlil Valley, gateway to Mount Toubkal (North Africa's highest peak), is particularly popular and offers trails suitable for all fitness levels.",
      "Lunch in the mountains is a highlight. Many families open their homes to visitors and serve a traditional Berber meal — often a hearty couscous or a tagine cooked over an open fire. The simplicity and warmth of these meals, shared on the floor of a family home with views of the mountains through the window, is one of the most authentic cultural experiences you can have in Morocco.",
      "Back at the riad after your mountain adventure, we will have a pot of fresh mint tea waiting for you on the rooftop. As you watch the sunset paint the Medina in shades of gold and pink, you will carry with you the memory of a day that showed you a completely different side of Morocco.",
    ],
  },
  "hidden-gardens-marrakech": {
    slug: "hidden-gardens-marrakech",
    category: "MARRAKECH",
    title: "The Hidden Gardens of Marrakech: A Peaceful Escape from the Medina",
    date: "19 August 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08811-scaled.jpg",
    content: [
      "Marrakech is often called the Red City for the warm terracotta tones of its walls and buildings, but it is equally a city of green — a place where hidden gardens offer peaceful retreats from the vibrant energy of the Medina. These oases of calm are among Marrakech's greatest treasures, and we love sharing our favorites with guests.",
      "The Majorelle Garden is perhaps the most famous. Created by French painter Jacques Majorelle in the 1920s and later restored by fashion designer Yves Saint Laurent, this botanical garden is a masterpiece of color and design. The iconic cobalt blue structures, set against lush tropical plantings and the famous Berber Museum housed within, make it a must-visit. We recommend arriving early in the morning to enjoy the garden in relative peace.",
      "The Menara Gardens offer a completely different experience. Dating back to the 12th century, these vast olive groves surround a large reflecting pool with the Atlas Mountains as a backdrop. It is a popular spot for locals, especially in the late afternoon when families gather for picnics. The simplicity and scale of the garden are truly impressive.",
      "For a quieter alternative, the Le Jardin Secret in the heart of the Medina is a restored historic garden that few tourists discover. Divided into an Islamic garden and an exotic garden, it showcases traditional Moroccan irrigation systems and plant collections. The rooftop cafe offers wonderful views over the Medina rooftops.",
      "Our own courtyard garden at Riad Les Trois Mages is designed in the traditional riad style — a central space filled with citrus trees, jasmine, and bougainvillea, surrounding a plunge pool. We believe that a garden is the heart of any riad, and we have carefully curated ours to provide a tranquil sanctuary for our guests.",
      "Beyond the formal gardens, the Medina itself is full of unexpected green spaces. Hidden courtyards, rooftop terraces with potted plants, and small squares with ancient trees all contribute to the city's surprising botanical richness. Walking through the narrow alleys, you will catch glimpses of lush greenery spilling over walls and through doorways.",
      "We recommend setting aside at least one morning for garden exploration. Start with the Majorelle Garden, walk through the Menara Gardens, and end with a peaceful hour at Le Jardin Secret. Return to the riad for lunch in our courtyard, and you will have experienced the best of Marrakech's green spaces in a single, memorable day.",
    ],
  },
  "moroccan-cooking-classes": {
    slug: "moroccan-cooking-classes",
    category: "CUISINE",
    title: "Traditional Moroccan Cooking: Classes and Experiences Near Our Riad",
    date: "21 July 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08849-scaled.jpg",
    content: [
      "Moroccan cuisine is one of the most celebrated in the world, and there is no better way to understand it than by learning to cook it yourself. During your stay at Riad Les Trois Mages, we can arrange cooking classes that will give you hands-on experience with traditional Moroccan recipes and techniques.",
      "The foundation of Moroccan cooking is the tagine — the slow-cooked stew that takes its name from the conical clay pot in which it is prepared. Learning to balance the sweet and savory elements, to layer spices correctly, and to achieve the perfect tenderness is an art that takes years to master. In a cooking class, you will learn the basics and take home recipes you can recreate in your own kitchen.",
      "Couscous is another essential dish, traditionally served on Fridays after the midday prayer. The preparation of couscous — steaming the grains, preparing the accompanying vegetables and meat, and presenting it in the traditional communal style — is a social as well as culinary experience. Many cooking schools offer classes that focus specifically on couscous preparation.",
      "For those with a sweet tooth, Moroccan pastries are a delight. From the honey-drenched chebakia to the almond-filled fekkas, the variety is extraordinary. Some cooking classes specialize in pastry making, teaching you the intricate techniques behind these beautiful treats.",
      "We work with several cooking schools near the riad, each offering a slightly different experience. Some include a market visit where you will shop for fresh ingredients in the souks, learning to select the best produce and negotiate with vendors — an experience in itself. Others focus on the kitchen, with expert chefs guiding you through each step of the preparation.",
      "After your class, return to the riad and enjoy the fruits of your labor in our courtyard or on the rooftop terrace. There is something deeply satisfying about eating a meal you have prepared yourself, in a beautiful setting, with the flavors of Marrakech all around you.",
      "Our team is happy to recommend the best cooking class for your interests and schedule. Whether you are a complete beginner or an experienced cook looking to expand your repertoire, we will find the perfect match for you.",
    ],
  },
  "essaouira-coastal-day-trip": {
    slug: "essaouira-coastal-day-trip",
    category: "DAY TOUR",
    title: "Essaouira: A Coastal Day Trip from Marrakech",
    date: "4 April 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08917-HDR-scaled.jpg",
    content: [
      "After the heat and intensity of Marrakech, the coastal town of Essaouira offers a refreshing change of pace. Located about two and a half hours west of the city, this blue-and-white gem on the Atlantic coast is one of our favorite day trip destinations.",
      "The drive to Essaouira is an experience in itself. The landscape changes dramatically as you cross the Haouz plain, passing through argan forests where you may spot goats climbing the trees — a uniquely Moroccan sight. The air grows cooler and fresher as you approach the coast, and the first glimpse of the Atlantic is always a moment of delight.",
      "Essaouira's medina, a UNESCO World Heritage site, is a joy to explore. Unlike the winding maze of Marrakech, Essaouira's streets are laid out in a grid pattern, making it easy to navigate on foot. The blue-and-white buildings, the harbor filled with colorful fishing boats, and the constant presence of the ocean create an atmosphere that is both lively and relaxed.",
      "The fishing port is the heart of Essaouira. Every morning, boats return with the day's catch, and the fish market is a fascinating spectacle. For lunch, we recommend choosing your fish directly from the market and having it grilled at one of the nearby restaurants. The freshness and simplicity of the food — grilled sardines, sea bream, and prawns with just a squeeze of lemon — is unforgettable.",
      "For those interested in art and culture, Essaouira has a thriving creative scene. The town has attracted artists and musicians for decades, and its galleries, workshops, and annual Gnawa music festival give it a bohemian character that sets it apart from other Moroccan cities.",
      "The beach at Essaouira is one of the finest in Morocco. The wide expanse of sand, the consistent wind that makes it a world-class windsurfing destination, and the dramatic rocky headland of the Skala de la Ville fortification create a landscape of exceptional beauty. A walk along the ramparts at sunset is an experience not to be missed.",
      "We can arrange a private car and driver for your Essaouira day trip, allowing you to travel at your own pace and stop along the way. Return to the riad in the evening with the taste of salt air still on your lips and the memory of a day spent in one of Morocco's most enchanting towns.",
    ],
  },
  "first-timers-guide-marrakech": {
    slug: "first-timers-guide-marrakech",
    category: "MARRAKECH",
    title: "First-Timer's Guide to Marrakech: What to Know Before You Go",
    date: "24 March 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08939-scaled.jpg",
    content: [
      "Marrakech is a city that rewards the curious and the open-hearted. If you are visiting for the first time, here are some insights from our team to help you make the most of your stay.",
      "The Medina is the historic heart of Marrakech, and navigating it is part of the adventure. The narrow alleys can be disorienting at first, but that is part of the charm. Embrace the fact that you will get lost — it is the best way to discover hidden shops, secret courtyards, and local life that you would never find by following a map.",
      "Bargaining is a way of life in the souks. It is not aggressive or confrontational — it is a social ritual. Start by offering about a third of the asking price and work your way up. The process is often accompanied by tea and conversation, and the vendor will respect you for engaging rather than simply accepting the first price.",
      "Dress modestly when visiting the Medina, particularly when entering mosques or religious sites. Lightweight, loose-fitting clothing that covers the shoulders and knees is both respectful and practical in the Moroccan heat. Comfortable walking shoes are essential — the Medina streets are uneven and you will cover more ground than you expect.",
      "The best time to visit the souks is in the morning, when the light is beautiful and the shops are just opening. Afternoons are perfect for a long lunch or a visit to a hammam — the traditional Moroccan bathhouse that is an essential cultural experience. Evenings come alive in Jemaa el-Fnaa, where food stalls, musicians, and storytellers create an unforgettable atmosphere.",
      "Food is central to the Marrakech experience. Do not be afraid to eat at the food stalls in Jemaa el-Fnaa — they are some of the best and most authentic restaurants in the city. Look for the stalls that are full of locals, and do not miss the snail soup and the lamb kebabs.",
      "At Riad Les Trois Mages, we are here to help you navigate it all. Our team can arrange guided tours, restaurant reservations, cooking classes, and any other experience that will make your first visit to Marrakech truly unforgettable.",
    ],
  },
  "unique-experiences-marrakech": {
    slug: "unique-experiences-marrakech",
    category: "EXPERIENCES",
    title: "Unique Experiences in Marrakech: From Hammam to Hot Air Balloon",
    date: "20 March 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08983-HDR-scaled.jpg",
    content: [
      "Marrakech offers experiences that you will not find anywhere else in the world. Beyond the famous sights and sounds, there are moments of wonder waiting around every corner. Here are some of our favorite unique experiences to recommend to guests.",
      "A hot air balloon ride over the desert at sunrise is one of the most magical experiences Morocco has to offer. Floating silently above the desert landscape as the sun rises over the Atlas Mountains, watching the shadows of the balloon drift across the sand dunes, is a moment of pure magic. The experience typically includes a traditional Berber breakfast served in the desert after landing.",
      "The hammam is an essential Moroccan experience. This traditional bathhouse is not just about hygiene — it is a social institution, a place of relaxation, and a centuries-old ritual. The process involves steam, black soap, vigorous scrubbing with a kessa glove, and a ghassoul clay treatment. We recommend the traditional hammam experience for the most authentic immersion.",
      "A sunrise camel trek in the Agafay Desert offers a completely different perspective on Morocco's landscape. The rocky desert, just 40 minutes from Marrakech, provides a dramatic backdrop for a peaceful morning ride. Many tours include a traditional breakfast served in a Berber tent after the trek.",
      "For music lovers, an evening of Gnawa music is unmissable. Gnawa is a spiritual musical tradition with roots in sub-Saharan Africa, and Marrakech is one of the best places in the world to experience it. The Gnawa musicians create a hypnotic, trance-like sound using the guembri (a three-stringed bass lute) and metal castanets called qraqeb.",
      "A pottery workshop in the potters' quarter of the Medina allows you to try your hand at creating traditional Moroccan ceramics. The artisans who work here have inherited their craft through generations, and learning from them is both educational and deeply rewarding.",
      "We can arrange any of these experiences for you, tailored to your interests and schedule. Each one offers a different window into the rich culture and traditions of Morocco, and together they create a journey that goes far beyond the ordinary.",
    ],
  },
  "moroccan-traditions-music-art-craft": {
    slug: "moroccan-traditions-music-art-craft",
    category: "MOROCCAN CULTURE",
    title: "Moroccan Traditions: Music, Art and Craft in Marrakech",
    date: "9 March 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC08997-scaled.jpg",
    content: [
      "Morocco is a country where tradition is not a relic of the past but a living, breathing part of daily life. In Marrakech, you encounter this everywhere — in the music that fills the streets, the crafts that line the souks, and the architecture that defines the Medina.",
      "Moroccan music is extraordinarily diverse. Gnawa music, with its hypnotic rhythms and spiritual roots, is perhaps the most distinctive. But you will also hear Andalusian classical music, Berber folk songs, and modern Moroccan pop. The Jemaa el-Fnaa square is a living stage where musicians perform every evening, and attending a Gnawa ceremony or a traditional music performance is an unforgettable experience.",
      "The craft traditions of Marrakech are legendary. Zellige tilework — the intricate geometric mosaics that adorn fountains, walls, and floors throughout the Medina — is created by hand using techniques that have remained unchanged for centuries. Each tile is cut individually and assembled into complex patterns that can take months to complete.",
      "Leatherwork is another ancient craft. The tanneries of Marrakech, where animal hides are transformed into leather using traditional methods, are a fascinating (if pungent) sight. The leather produced here is used to make everything from bags and shoes to book covers and furniture.",
      "Woodcarving, particularly in cedar and thuya wood, is practiced throughout the Medina. The intricate geometric and floral patterns that adorn doors, screens, and furniture are created by hand using simple tools and extraordinary skill.",
      "At Riad Les Trois Mages, we celebrate these traditions in everything we do. Our riad is decorated with handcrafted elements — zellige tiles, carved plaster, painted wood ceilings — and we work with local artisans to maintain and restore these beautiful crafts. We are happy to arrange visits to workshops and studios where you can see these traditions being kept alive.",
    ],
  },
  "festivals-events-marrakech-2026": {
    slug: "festivals-events-marrakech-2026",
    category: "EXPERIENCES",
    title: "Festivals and Events in Marrakech 2026: What's On During Your Stay",
    date: "25 February 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC09061-scaled.jpg",
    content: [
      "Marrakech is a city that celebrates year-round, and 2026 promises an exciting calendar of festivals and events. Whether you are interested in music, film, art, or culture, there is always something happening in the Red City.",
      "The Marrakech International Film Festival, held annually in November, is one of the most prestigious film events in Africa and the Arab world. It attracts filmmakers, actors, and cinephiles from around the globe, and screenings take place in venues throughout the city, from modern cinemas to historic palaces.",
      "The Marrakech Popular Arts Festival, usually held in June or July, is a vibrant celebration of Moroccan folk arts. Traditional music, dance, and storytelling performances take place in the spectacular setting of the El Badi Palace, and the atmosphere is electric with color and energy.",
      "Gnawa World Music Festival, while based in Essaouira, draws many visitors from Marrakech. This three-day festival in June celebrates the Gnawa musical tradition with performances by masters of the genre from Morocco and around the world. It is one of the most important music festivals in North Africa.",
      "Ramadan is not a festival in the conventional sense, but experiencing Ramadan in Marrakech is a unique cultural experience. The city transforms during the holy month, with special foods, evening gatherings, and a communal spirit that is deeply moving. We can help you understand and respectfully participate in this important tradition.",
      "Throughout the year, Marrakech also hosts numerous art exhibitions, design fairs, and cultural events. The city has become an important hub for contemporary art in Africa, and its galleries and cultural spaces are constantly hosting new exhibitions and events.",
      "At Riad Les Trois Mages, we keep our guests informed about upcoming events and can help with tickets and arrangements. Staying with us during a festival or special event adds an extra dimension to your Marrakech experience.",
    ],
  },
  "why-stay-in-a-riad": {
    slug: "why-stay-in-a-riad",
    category: "RIAD LIFE",
    title: "Why Staying in a Riad is the Best Way to Experience Marrakech",
    date: "22 February 2025",
    author: "Riad Les Trois Mages Team",
    image: "/images/DSC09103-HDR-scaled.jpg",
    content: [
      "Marrakech offers accommodation of every kind — from international hotel chains to boutique guesthouses. But if you want to truly experience the soul of this ancient city, there is no better choice than a riad.",
      "The word 'riad' comes from the Arabic 'ryad,' meaning garden. A traditional riad is a large house or palace built around a central courtyard, which is typically filled with plants, flowers, and often a fountain or pool. This inward-facing design creates a private world within the bustling Medina — a sanctuary of calm that is the essence of Moroccan hospitality.",
      "Staying in a riad offers something that no hotel can: authenticity. A riad is not a reproduction of Moroccan style — it is the real thing. The architecture, the decorative arts, the layout, and the atmosphere are all deeply rooted in centuries of tradition. When you stay in a riad, you are living inside a piece of Moroccan culture.",
      "The intimacy of a riad is another major advantage. With typically between four and twelve rooms, a riad offers a personal experience that large hotels cannot match. The staff know your name, your preferences, and your schedule. They become not just hosts but friends, and many guests return year after year to the same riad.",
      "The location of most riads — in the heart of the Medina — is also a significant benefit. You are steps away from the souks, the restaurants, and the cultural attractions, yet removed from the noise and crowds. Waking up to the sound of birdsong in a courtyard garden, with the call to prayer echoing across the rooftops, is an experience that defines a Marrakech visit.",
      "At Riad Les Trois Mages, we have taken the traditional riad concept and refined it for the modern traveler. Our six rooms are individually designed with handcrafted Moroccan elements, our rooftop terraces offer stunning views over the Medina, and our courtyard garden provides the peaceful setting that is the hallmark of a great riad.",
      "We invite you to experience the magic of riad living for yourself. Whether it is your first visit to Marrakech or your fiftieth, staying in a riad will transform your understanding of this extraordinary city.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.content[0].slice(0, 155) + "...",
    alternates: {
      canonical: `https://riadsestroismages.com/en/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.content[0].slice(0, 155),
      url: `https://riadsestroismages.com/en/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.content[0],
    image: `https://riadsestroismages.com${post.image}`,
    url: `https://riadsestroismages.com/en/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://riadsestroismages.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Riad Les Trois Mages",
      logo: {
        "@type": "ImageObject",
        url: "https://riadsestroismages.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://riadsestroismages.com/en/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://riadsestroismages.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://riadsestroismages.com/en/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://riadsestroismages.com/en/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="pt-14 md:pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#2a3936]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16 max-w-4xl">
            <Link
              href="/en/blog"
              className="inline-flex items-center gap-2 text-white/60 text-[11px] uppercase tracking-[0.12em] mb-4 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Blog
            </Link>
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/70 font-medium mb-2">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white max-w-3xl leading-snug">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 mt-3 text-xs md:text-sm text-white/50">
              <span>{post.author}</span>
              <span>&middot;</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="space-y-6 text-sm md:text-[15px] text-[#2a3936]/70 leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-[#f6f4f2] rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4b6753] flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-medium">RM</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-[#2a3936]">Riad Les Trois Mages Team</p>
                <p className="text-xs text-[#2a3936]/50">
                  We are a small team passionate about sharing the authentic spirit of Marrakech with our guests.
                </p>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-[#2a3936]/10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2a3936]/40 font-medium mb-3">
              Share this article
            </p>
            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://riadsestroismages.com/en/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2a3936]/10 flex items-center justify-center text-[#2a3936]/40 hover:border-[#4b6753] hover:text-[#4b6753] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://riadsestroismages.com/en/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2a3936]/10 flex items-center justify-center text-[#2a3936]/40 hover:border-[#4b6753] hover:text-[#4b6753] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + " https://riadsestroismages.com/en/blog/" + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2a3936]/10 flex items-center justify-center text-[#2a3936]/40 hover:border-[#4b6753] hover:text-[#4b6753] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="bg-[#f6f4f2] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#4b6753] font-medium mb-2">
              BACK TO BLOG
            </p>
            <Link
              href="/en/blog"
              className="inline-block mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#4b6753] border-b border-[#4b6753]/40 pb-0.5 hover:border-[#4b6753] transition-colors"
            >
              View all articles
            </Link>
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
