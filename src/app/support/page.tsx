import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "Support — BestBasket",
  description: "Get assistance, report issues, or contact the BestBasket support team.",
  alternates: {
    canonical: "https://bestbasket.app/support",
  },
  openGraph: {
    title: "Support — BestBasket",
    description: "Get help with your BestBasket account, grocery deals, and technical queries.",
    url: "https://bestbasket.app/support",
  },
};

const faqs = [
  {
    q: "How does price comparison work in BestBasket?",
    a: "BestBasket tracks daily grocery prices across local stores like Walmart, Aldi, and Kroger, letting you compare individual products or entire shopping carts to find maximum savings.",
  },
  {
    q: "How do I redeem clipped digital coupons?",
    a: "Browse verified coupons in the Coupons tab, tap 'Clip Coupon', and display the barcode or coupon code directly at store checkout.",
  },
  {
    q: "How do I report inaccurate store prices or product data?",
    a: "You can report any pricing discrepancies inside the app or email our data operations team at support@example.com.",
  },
  {
    q: "How can I request my data to be deleted?",
    a: "Under our Privacy Policy, you have full control over your data. Simply email privacy@example.com with the subject 'Account Deletion Request' or trigger it via the in-app profile settings.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-text mb-2">
            Support
          </h1>
          <p className="text-sm text-text-muted mb-8 leading-relaxed">
            Need help or have questions regarding BestBasket? Here is how you can reach our team and answers to common inquiries.
          </p>

          <div className="space-y-8 text-sm text-text-muted leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-text mb-3">
                Contact Information
              </h2>
              <div className="space-y-3">
                <p>
                  <span className="text-text font-medium">Customer Support Email: </span>
                  <a href="mailto:support@example.com" className="text-accent hover:underline">
                    support@example.com
                  </a>
                  <span className="text-text-muted"> (Response within 12–24 hours, Monday – Sunday)</span>
                </p>
                <p>
                  <span className="text-text font-medium">Support Hotline: </span>
                  <a href="tel:+18005550199" className="text-accent hover:underline">
                    +1 (800) 555-0199
                  </a>
                  <span className="text-text-muted"> (Mon – Fri, 9:00 AM – 6:00 PM EST)</span>
                </p>
                <p>
                  <span className="text-text font-medium">App & Technical Inquiries: </span>
                  <a href="mailto:contact@example.com" className="text-accent hover:underline">
                    contact@example.com
                  </a>
                </p>
              </div>
            </section>

            <section className="pt-4 border-t border-border">
              <h2 className="text-lg font-semibold text-text mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-semibold text-text mb-1">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
