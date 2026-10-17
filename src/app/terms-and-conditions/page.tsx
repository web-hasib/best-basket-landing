import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — BestBasket",
  description: "Read the Terms & Conditions for using the BestBasket application and services.",
  alternates: {
    canonical: "https://bestbasket.app/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions — BestBasket",
    description: "Terms and conditions governing the use of BestBasket.",
    url: "https://bestbasket.app/terms-and-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-text mb-2">
            Terms & Condition
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
                  Introduction
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                Welcome to our app. By accessing or using this application, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use the app.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <h2 className="text-base font-bold text-text">
                  Use of the App
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                You agree to use the app only for lawful purposes. You must not misuse the app or attempt to disrupt its functionality.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <h2 className="text-base font-bold text-text">
                  User Account
                </h2>
              </div>
              <ul className="pl-8 space-y-2 text-text-muted">
                <li>• You are responsible for maintaining the confidentiality of your account.</li>
                <li>• You agree to provide accurate and complete information.</li>
                <li>• We are not responsible for any unauthorized access to your account.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <h2 className="text-base font-bold text-text">
                  Personalization & Recommendations
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                The app provides price comparison, smart grocery tools, coupons, and product recommendations based on your location and preferences. These suggestions are for guidance only and may not always reflect in-store stock or regional price differences.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <h2 className="text-base font-bold text-text">
                  Privacy
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                Your use of the app is also governed by our Privacy Policy. We are committed to protecting your data.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  6
                </span>
                <h2 className="text-base font-bold text-text">
                  Changes to Terms
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                We may update these Terms & Conditions at any time. Continued use of the app means you accept those changes.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-6 border-t border-border pl-8 space-y-2">
              <h2 className="text-base font-semibold text-text">
                Contact Us
              </h2>
              <p>
                If you have any questions regarding these Terms & Conditions, please contact us at:
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
