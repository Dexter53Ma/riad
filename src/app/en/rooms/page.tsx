import type { Metadata } from "next";
import RoomsClient from "./RoomsClient";

export const metadata: Metadata = {
  title: "Our Rooms & Suites — 6 Stylish Rooms from $120/night",
  description:
    "6 individually styled rooms & suites from $120/night. King beds, rooftop views, traditional décor. Book direct on WhatsApp for best rates.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/rooms",
  },
  openGraph: {
    title: "Our Rooms & Suites — Riad Les Trois Mages",
    description: "6 individually styled rooms from $120/night. Book direct.",
    url: "https://riadsestroismages.com/en/rooms",
  },
};

export default function RoomsPage() {
  return <RoomsClient />;
}
