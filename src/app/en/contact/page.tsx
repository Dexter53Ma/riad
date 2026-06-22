import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Directions — Find Us in Marrakech Medina",
  description:
    "Find us in the heart of Marrakech Medina. Airport transfers, directions, FAQs & WhatsApp contact. We make your arrival easy.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/contact",
  },
  openGraph: {
    title: "Contact & Directions — Riad Les Trois Mages",
    description: "Airport transfers, directions, FAQs & WhatsApp contact.",
    url: "https://riadsestroismages.com/en/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
