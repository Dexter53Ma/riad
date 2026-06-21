import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import AiSupport from "@/components/AiSupport";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Riad Les Trois Mages - Intimate Riad in the Heart of Marrakech",
  description: "A small and intimate riad in the Medina of Marrakech, designed to feel like a welcoming Moroccan home. Six individually styled rooms around a traditional courtyard with rooftop terraces and plunge pool.",
  icons: {
    icon: "/seo/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#4b6753",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <BackToTop />
        <AiSupport />
      </body>
    </html>
  );
}
