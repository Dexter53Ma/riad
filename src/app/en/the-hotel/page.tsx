import type { Metadata } from "next";
import TheHotelClient from "./TheHotelClient";

export const metadata: Metadata = {
  title: "The Riad — Traditional Courtyard, Rooftops & Plunge Pool",
  description:
    "Explore our intimate riad: traditional courtyard, rooftop terraces, music lounge, plunge pool & curated services. Your welcoming home in Marrakech.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/the-hotel",
  },
  openGraph: {
    title: "The Riad — Riad Les Trois Mages",
    description:
      "Traditional courtyard, rooftop terraces, music lounge, plunge pool & curated services.",
    url: "https://riadsestroismages.com/en/the-hotel",
  },
};

export default function TheHotelPage() {
  return <TheHotelClient />;
}
