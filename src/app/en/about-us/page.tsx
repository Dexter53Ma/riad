import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us — Our Story & Values",
  description:
    "Learn about our passion for authentic Moroccan hospitality. Sustainable travel, local artisans & a riad that feels like home.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/about-us",
  },
  openGraph: {
    title: "About Us — Riad Les Trois Mages",
    description: "Our passion for authentic Moroccan hospitality.",
    url: "https://riadsestroismages.com/en/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
