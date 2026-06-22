import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import AiSupport from "@/components/AiSupport";
import ClientLayout from "@/components/ClientLayout";

const siteUrl = "https://riadsestroismages.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Riad Les Trois Mages — Boutique Riad in Marrakech Medina",
    template: "%s | Riad Les Trois Mages",
  },
  description:
    "A small and intimate riad in the Medina of Marrakech. Six individually styled rooms, rooftop terraces, plunge pool & authentic Moroccan hospitality. Book direct for best rates.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Riad Les Trois Mages",
    title: "Riad Les Trois Mages — Boutique Riad in Marrakech Medina",
    description:
      "Six individually styled rooms, rooftop terraces, plunge pool & authentic Moroccan hospitality in the heart of Marrakech Medina.",
    images: [
      {
        url: "/images/DSC09313-HDR-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Riad Les Trois Mages — Rooftop terrace with plunge pool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riad Les Trois Mages — Boutique Riad in Marrakech Medina",
    description:
      "Six individually styled rooms, rooftop terraces, plunge pool & authentic Moroccan hospitality.",
    images: ["/images/DSC09313-HDR-scaled.jpg"],
  },
  icons: {
    icon: "/seo/favicon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#4b6753",
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": `${siteUrl}/#hotel`,
      name: "Riad Les Trois Mages",
      alternateName: "Les Trois Mages Riad",
      description:
        "A small and intimate riad in the Medina of Marrakech, designed to feel like a welcoming Moroccan home. Six individually styled rooms around a traditional courtyard with rooftop terraces and plunge pool.",
      url: siteUrl,
      telephone: "+212524378091",
      email: "info@riadsestroismages.com",
      image: `${siteUrl}/images/DSC09313-HDR-scaled.jpg`,
      logo: `${siteUrl}/images/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Derb Sidi Bouamar, Riad Zitoun Lakdim",
        addressLocality: "Marrakech",
        addressRegion: "Marrakech-Safi",
        postalCode: "40000",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.6259,
        longitude: -7.9891,
      },
      hasMap: "https://maps.app.goo.gl/xEYuEhNQRigDSiQL7",
      maximumAttendeeCapacity: 12,
      numberOfRooms: 6,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Plunge Pool", value: true },
        { "@type": "LocationFeatureSpecification", name: "Rooftop Terrace", value: true },
        { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Music Lounge", value: true },
        { "@type": "LocationFeatureSpecification", name: "Airport Transfer", value: true },
      ],
      priceRange: "$120 - $399",
      currenciesAccepted: "USD, EUR, MAD",
      paymentAccepted: "Cash, Credit Card",
      checkinTime: "15:00",
      checkoutTime: "11:00",
      areaServed: {
        "@type": "City",
        name: "Marrakech",
        sameAs: "https://en.wikipedia.org/wiki/Marrakech",
      },
      availableLanguage: ["English", "French", "Arabic"],
      sameAs: [
        "https://www.facebook.com/riadsestroismages",
        "https://www.instagram.com/riadsestroismages/",
        "https://www.tiktok.com/@riadsestroismages",
        "https://www.youtube.com/@riadsestroismages",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+212524378091",
          contactType: "reservations",
          email: "info@riadsestroismages.com",
          availableLanguage: ["English", "French", "Arabic"],
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Riad Les Trois Mages",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
        width: 300,
        height: 120,
      },
      image: `${siteUrl}/images/DSC09313-HDR-scaled.jpg`,
      description:
        "A small and intimate riad in the Medina of Marrakech, designed to feel like a welcoming Moroccan home.",
      telephone: "+212524378091",
      email: "info@riadsestroismages.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Derb Sidi Bouamar, Riad Zitoun Lakdim",
        addressLocality: "Marrakech",
        addressRegion: "Marrakech-Safi",
        postalCode: "40000",
        addressCountry: "MA",
      },
      sameAs: [
        "https://www.facebook.com/riadsestroismages",
        "https://www.instagram.com/riadsestroismages/",
        "https://www.tiktok.com/@riadsestroismages",
        "https://www.youtube.com/@riadsestroismages",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Riad Les Trois Mages",
      url: siteUrl,
      description: "Boutique riad in the heart of Marrakech Medina",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <BackToTop />
        <AiSupport />
      </body>
    </html>
  );
}
