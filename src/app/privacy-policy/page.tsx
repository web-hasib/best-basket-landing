import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — BestBasket",
  description: "Learn how BestBasket collects, uses, and protects your information when you use our grocery price comparison application.",
  alternates: {
    canonical: "https://bestbasket.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — BestBasket",
    description: "Learn how BestBasket protects your grocery lists and personal data.",
    url: "https://bestbasket.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-text mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-text-muted mb-8">
            Last Updated: October 2026
          </p>

          <div className="space-y-8 text-sm text-text-muted leading-relaxed">
            <p className="text-base text-text">
              Your privacy is fundamental to our mission. This Privacy Policy details how BestBasket collects, uses, and protects your information when you browse grocery prices, clip coupons, and build shopping lists.
            </p>

            {/* Section 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <h2 className="text-base font-bold text-text">
                  Information We Collect
                </h2>
              </div>
              <ul className="pl-8 space-y-1.5 text-text-muted">
                <li>• <strong>Account Details:</strong> Name, email address, and authentication credentials.</li>
                <li>• <strong>Location Data:</strong> Approximate postal code or GPS coordinates (with your permission) to locate nearby grocery stores and local weekly flyers.</li>
                <li>• <strong>Shopping Lists & Favorites:</strong> Items added to your basket, clipped coupons, and saved store preferences.</li>
                <li>• <strong>Technical & Device Data:</strong> Device model, operating system, app version, and diagnostic logs to ensure high performance.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <h2 className="text-base font-bold text-text">
                  How We Use Your Data
                </h2>
              </div>
              <ul className="pl-8 space-y-1.5 text-text-muted">
                <li>• To calculate real-time price comparisons across supermarkets in your neighborhood.</li>
                <li>• To surface relevant manufacturer discounts and digital coupons for items on your list.</li>
                <li>• To provide personalized monthly and yearly grocery savings analytics.</li>
                <li>• To improve store catalog accuracy and maintain platform security.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <h2 className="text-base font-bold text-text">
                  We Never Sell Your Personal Information
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                We believe your household grocery habits are private. BestBasket does not sell, lease, or broker your personal information, grocery shopping lists, or location data to data brokers or third-party marketing companies.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <h2 className="text-base font-bold text-text">
                  Data Security & Retention
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                We protect your information using modern TLS encryption in transit and AES-256 encryption at rest. We retain your account data only as long as necessary to provide service, or until you choose to delete your account.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <h2 className="text-base font-bold text-text">
                  Your Privacy Rights & Controls
                </h2>
              </div>
              <ul className="pl-8 space-y-1.5 text-text-muted">
                <li>• <strong>Access & Portability:</strong> Request an export of your saved shopping data anytime.</li>
                <li>• <strong>Account & Data Deletion:</strong> Permanently delete your account and associated records directly inside the app settings or by contacting our privacy team.</li>
                <li>• <strong>Location Permissions:</strong> Revoke precise GPS permissions anytime in device settings and use manual postal code lookup instead.</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="pt-6 border-t border-border pl-8 space-y-2">
              <h2 className="text-base font-semibold text-text">
                Privacy Officer Contact
              </h2>
              <p>
                If you have questions or requests concerning your personal privacy and data, please reach out to:
              </p>
              <p className="mt-1 text-text font-medium">
                Email: <a href="mailto:privacy@example.com" className="text-accent hover:underline">privacy@example.com</a>
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
