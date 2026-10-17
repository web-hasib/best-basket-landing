import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "Support — Wispry",
  description: "Get assistance, report issues, or contact the Wispry support team.",
  alternates: {
    canonical: "https://wispry.com/support",
  },
  openGraph: {
    title: "Support — Wispry",
    description: "Get help with your Wispry account, rewards, and technical queries.",
    url: "https://wispry.com/support",
  },
};

const faqs = [
  {
    q: "How do I earn rewards on Wispry?",
    a: "You earn rewards by completing active community challenges, sharing eligible content, maintaining streaks, and unlocking achievement badges.",
  },
  {
    q: "How do withdrawals work?",
    a: "Once you reach the minimum payout balance, you can request a withdrawal directly to your connected bank account or digital wallet. Requests are processed within 24-48 business hours after verification.",
  },
  {
    q: "How do I report objectionable content or a user?",
    a: "You can report any post or user directly inside the app using the 'Report' button, or email our safety team at Dlovett2019@gmail.com. We investigate all reports promptly.",
  },
  {
    q: "How can I request my data to be deleted?",
    a: "Under our Privacy Policy, you have full control over your data. Simply email Dlovett2019@gmail.com with the subject 'Account Deletion Request' or trigger it via the in-app profile settings.",
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
            Need help or have questions regarding Wispry? Here is how you can reach our team and answers to common inquiries.
          </p>

          <div className="space-y-8 text-sm text-text-muted leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                Contact Information
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="text-text font-medium">General & Account Support: </span>
                  <a href="mailto:Dlovett2019@gmail.com" className="text-accent hover:underline">
                    Dlovett2019@gmail.com
                  </a>
                  <span className="text-text-muted"> (Response within 12–24 hours, Monday – Sunday)</span>
                </p>
                <p>
                  <span className="text-text font-medium">iOS / App Store Inquiries: </span>
                  <a href="mailto:Dlovett2019@gmail.com?subject=App%20Store%20Inquiry" className="text-accent hover:underline">
                    Dlovett2019@gmail.com
                  </a>
                  <span className="text-text-muted"> (Subject: App Store Inquiry)</span>
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
