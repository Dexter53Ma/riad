import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for staying at Riad Les Trois Mages in Marrakech, Morocco.",
  alternates: {
    canonical: "https://riadsestroismages.com/en/legal-terms",
  },
};

export default function LegalTermsPage() {
  return (
    <>
      <Header />
      <main className="pt-14 md:pt-16 min-h-screen bg-white">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h1 className="text-2xl md:text-3xl font-light text-[#2a3936] mb-8">
            Terms &amp; Conditions
          </h1>
          <div className="space-y-6 text-sm md:text-[15px] text-[#2a3936]/70 leading-relaxed">
            <h2 className="text-lg font-light text-[#2a3936]">1. General</h2>
            <p>
              These terms and conditions govern your stay at Riad Les Trois Mages, located at Derb Sidi Bouamar, Riad Zitoun Lakdim, Medina, Marrakech, Morocco. By making a reservation, you agree to be bound by these terms.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">2. Reservations</h2>
            <p>
              Reservations can be made via our website, by email, or through third-party platforms (Airbnb, Booking.com). A reservation is confirmed upon receipt of a confirmation email from us. We reserve the right to modify rates without prior notice, except for confirmed reservations.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">3. Check-in and Check-out</h2>
            <p>
              Check-in time is from 3:00 PM. Check-out time is by 11:00 AM. Early check-in and late check-out may be available upon request and are subject to availability. Please inform us of your estimated arrival time at least 24 hours in advance.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">4. Cancellation Policy</h2>
            <p>
              Free cancellation is available up to 48 hours before the scheduled check-in date. Cancellations made less than 48 hours before check-in will incur a charge equivalent to the first night's stay. No-shows will be charged the full amount of the reservation.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">5. Payment</h2>
            <p>
              We accept cash (USD, EUR, MAD), credit cards, and bank transfers. Payment is due upon check-out unless otherwise agreed. Prices are displayed in USD and may vary by season.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">6. Guest Responsibilities</h2>
            <p>
              Guests are expected to treat the property and its furnishings with respect. Any damage caused by guests or their visitors will be charged to the guest. The riad is a non-smoking property in all indoor areas. Quiet hours are observed between 10:00 PM and 8:00 AM.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">7. Liability</h2>
            <p>
              Riad Les Trois Mages is not liable for any loss, theft, or damage to personal property. Guests are responsible for their own safety and belongings. The riad is not responsible for any disruptions caused by circumstances beyond our control, including but not limited to natural disasters, power outages, or civil disturbances.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">8. Privacy</h2>
            <p>
              We respect your privacy and are committed to protecting your personal data. Please refer to our Cookies &amp; Privacy Policy for detailed information on how we collect, use, and protect your data.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. The current version is always available on our website. Continued use of our services constitutes acceptance of any changes.
            </p>

            <h2 className="text-lg font-light text-[#2a3936]">10. Contact</h2>
            <p>
              For any questions regarding these terms, please contact us at{" "}
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
