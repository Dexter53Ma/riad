import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms, getRoomBySlug } from "@/data/rooms";
import RoomDetail from "./RoomDetail";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};

  return {
    title: `${room.name} — From $${room.price}/night`,
    description: `${room.description.slice(0, 155)}...`,
    alternates: {
      canonical: `https://riadsestroismages.com/en/rooms/${room.slug}`,
    },
    openGraph: {
      title: `${room.name} — Riad Les Trois Mages Marrakech`,
      description: room.tagline,
      url: `https://riadsestroismages.com/en/rooms/${room.slug}`,
      images: [room.images[0].src],
    },
  };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const roomSchema = {
    "@context": "https://schema.org",
    "@type": "Room",
    name: room.name,
    description: room.description,
    url: `https://riadsestroismages.com/en/rooms/${room.slug}`,
    image: room.images.map((img) => `https://riadsestroismages.com${img.src}`),
    bed: room.bed,
    occupantRoomCapacity: parseInt(room.capacity) || 2,
    floorSize: {
      "@type": "QuantitativeValue",
      value: parseInt(room.size) || 30,
      unitCode: "MTK",
    },
    amenityFeature: room.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
    containedInPlace: {
      "@id": "https://riadsestroismages.com/#hotel",
    },
    offers: {
      "@type": "Offer",
      url: `https://riadsestroismages.com/en/rooms/${room.slug}`,
      price: room.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": "https://riadsestroismages.com/#organization",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://riadsestroismages.com" },
      { "@type": "ListItem", position: 2, name: "Rooms", item: "https://riadsestroismages.com/en/rooms" },
      { "@type": "ListItem", position: 3, name: room.name, item: `https://riadsestroismages.com/en/rooms/${room.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RoomDetail room={room} />
    </>
  );
}
