import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookies & Privacy Policy",
  description:
    "How Riad Les Trois Mages collects, uses, and protects your personal data.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/cookies-policy",
  },
};

export default function CookiesPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-14 md:pt-16 min-h-screen bg-white">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h1 className="text-2xl md:text-3xl font-light text-[#2a3936] mb-8">
            Cookies &amp; Privacy Policy
          </h1>
          <div className="space-y-6 text-sm md:text-[15px] text-[#2a3936]/70 leading-relaxed">
            <h2 className="text-lg font-light text-[#2a3936]">1. Data We Collect</h2>
            <p>
              When you visit our website, we may collect the following information: your name, email address, phone number, nationality, travel dates, and any other information you provide through our contact form, newsletter signup, or booking inquiries.
            </p>
            <p>
              We also collect standard web analytics data, including your IP address, browser type, operating system, referring URLs, and pages visited. This data is collected automatically and is used in aggregate form to improve our website.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">2. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your inquiries and booking requests</li>
              <li>To send you newsletters and promotional materials (only if you have opted in)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-lg font-light text-[#2a3936]">3. Cookies</h2>
            <p>
              Our website uses essential cookies to ensure proper functioning. We do not use tracking cookies or third-party analytics that store personal data. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal data to third parties. We may share your data with service providers who assist us in operating our website and providing our services, subject to confidentiality agreements.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">6. Your Rights</h2>
            <p>
              Under applicable data protection laws, you have the right to access, correct, delete, or restrict the processing of your personal data. You also have the right to object to processing and to data portability. To exercise these rights, please contact us at{" "}
              <a href="mailto:info@riadsestroismages.com" className="text-[#4b6753] hover:underline">
                info@riadsestroismages.com
              </a>.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. The current version is always available on our website. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">9. Contact</h2>
            <p>
              For any questions about this privacy policy or our data practices, please contact us at{" "}
              <a href="mailto:info@riadsestroismages.com" className="text-[#4b6753] hover:underline">
                info@riadsestroismages.com
              </a>{" "}
              or call us at +212 524 378 091.
            </p>
          </div>
          <p className="mt-8 text-xs text-[#2a3936]/40">
            Last updated: June 2026
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
