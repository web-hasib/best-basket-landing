import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA) — BestBasket",
  description: "End User License Agreement (EULA) governing the use of the BestBasket mobile applications.",
  alternates: {
    canonical: "https://bestbasket.app/eula",
  },
  openGraph: {
    title: "End User License Agreement (EULA) — BestBasket",
    description: "Standard End User License Agreement details for BestBasket.",
    url: "https://bestbasket.app/eula",
  },
};

export default function EulaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-text mb-2">
            End User License Agreement (EULA)
          </h1>
          <p className="text-xs text-text-muted mb-8">
            Last Updated: October 2026
          </p>

          <div className="space-y-8 text-sm text-text-muted leading-relaxed">
            <p className="text-base text-text">
              This End User License Agreement (&ldquo;EULA&rdquo;) is a binding legal agreement between you (&ldquo;User&rdquo; or &ldquo;You&rdquo;) and BestBasket (&ldquo;Licensor&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;), governing your use of the BestBasket mobile application available on iOS and Android platforms.
            </p>

            {/* Section 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <h2 className="text-base font-bold text-text">
                  Scope of License
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                Licensor grants you a revocable, non-transferable, non-exclusive license to download, install, and use BestBasket solely for your personal, non-commercial grocery shopping and price comparison purposes on compatible mobile devices.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <h2 className="text-base font-bold text-text">
                  Restrictions on Use
                </h2>
              </div>
              <ul className="pl-8 space-y-1.5 text-text-muted">
                <li>• You shall not reverse engineer, decompile, or extract the source code or proprietary pricing scrapers of BestBasket.</li>
                <li>• You shall not use automated scripts, bots, or crawlers to systematically harvest store prices or coupons.</li>
                <li>• You shall not sublicense, rent, lease, or commercially distribute the application without prior authorization.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <h2 className="text-base font-bold text-text">
                  Maintenance and Support
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                BestBasket is solely responsible for providing maintenance, updates, and customer support. App store providers (Apple or Google) bear no obligation to provide maintenance or support services for this application.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <h2 className="text-base font-bold text-text">
                  Warranty Disclaimer & Retailer Independence
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                The application is provided &ldquo;as is&rdquo; without warranties of uninterrupted availability or guaranteed in-store item stock. BestBasket operates independently and is not directly owned by or affiliated with the supermarket chains displayed within the application.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <h2 className="text-base font-bold text-text">
                  Termination
                </h2>
              </div>
              <p className="pl-8 text-text-muted">
                This agreement is effective until terminated by either party. You may terminate it by deleting the application and all associated copies. Licensor may terminate your license immediately upon failure to comply with any provision of this EULA.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-6 border-t border-border pl-8 space-y-2">
              <h2 className="text-base font-semibold text-text">
                Legal & Licensing Inquiries
              </h2>
              <p>
                For questions, claims, or licensing inquiries regarding this EULA, please reach out to:
              </p>
              <p className="mt-1 text-text font-medium">
                Email: <a href="mailto:legal@example.com" className="text-accent hover:underline">legal@example.com</a>
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
