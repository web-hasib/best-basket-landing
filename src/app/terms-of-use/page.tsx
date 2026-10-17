import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — BestBasket",
  description: "Terms of Use governing access and participation across the BestBasket platform.",
  alternates: {
    canonical: "https://bestbasket.app/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use — BestBasket",
    description: "Terms of Use for BestBasket grocery price comparison and savings app.",
    url: "https://bestbasket.app/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-text mb-2">
            Terms of Use
          </h1>
          <p className="text-xs text-text-muted mb-8">
            Last Updated: October 2026
          </p>

          <div className="space-y-8 text-sm text-text-muted leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <h2 className="text-base font-bold text-text">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                By downloading, accessing, or using BestBasket, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue using the service.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <h2 className="text-base font-bold text-text">
                  Grocery Pricing & Information Accuracy
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                BestBasket aggregates prices, discounts, and item availability from partner supermarkets and public retailer listings. While we strive to provide the most up-to-date pricing, store managers may change prices or inventory without notice. Final prices charged at retail checkout prevail.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <h2 className="text-base font-bold text-text">
                  Coupons & Promotional Offers
                </h2>
              </div>
              <ul className="pl-8 space-y-2 text-text-muted">
                <li>• Digital coupons displayed in the app are subject to retailer restrictions and expiration dates.</li>
                <li>• Coupons cannot be redeemed for cash or transferred between unauthorized accounts.</li>
                <li>• Retailers reserve the right to verify or reject any duplicate or expired coupon at checkout.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <h2 className="text-base font-bold text-text">
                  User Accounts & Responsibilities
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                You are responsible for safeguarding your login credentials and maintaining the accuracy of your account information. You agree not to scrape, reverse engineer, or programmatically extract grocery pricing data from our systems without explicit written consent.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <h2 className="text-base font-bold text-text">
                  Intellectual Property
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                All branding, interface designs, trademarks, algorithms, and software comprising BestBasket remain the exclusive intellectual property of BestBasket. Retailer logos and product trademarks are the property of their respective owners.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  6
                </span>
                <h2 className="text-base font-bold text-text">
                  Limitation of Liability
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                BestBasket is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We are not liable for any discrepancies between in-app grocery estimates and receipts issued by third-party grocery retailers.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-6 border-t border-border pl-8 space-y-2">
              <h2 className="text-base font-semibold text-text">
                Contact & Legal Inquiries
              </h2>
              <p>
                If you have questions regarding these Terms of Use, please reach out to:
              </p>
              <p className="mt-1 text-text font-medium">
                Email: <a href="mailto:contact@example.com" className="text-accent hover:underline">contact@example.com</a>
              </p>
              <p className="text-text font-medium">
                Phone: <a href="tel:+18005550199" className="text-accent hover:underline">+1 (800) 555-0199</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
