import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery — Courtyards, Rooftops & Rooms",
  description:
    "Browse photos of Riad Les Trois Mages: courtyards, rooftop terraces, plunge pool, rooms & the Medina. A visual tour of our riad.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/gallery",
  },
  openGraph: {
    title: "Photo Gallery — Riad Les Trois Mages",
    description: "A visual tour of our riad: courtyards, rooftops & rooms.",
    url: "https://riadsestroismages.com/en/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
