import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Wispry",
  description: "Learn how Wispry collects, uses, and protects your information when you use our application.",
  alternates: {
    canonical: "https://wispry.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Wispry",
    description: "Learn how Wispry collects, uses, and protects your information.",
    url: "https://wispry.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-text mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-text-muted mb-8">
            Last Updated: July 7, 2026
          </p>

          <div className="space-y-6 text-sm text-text-muted leading-relaxed">
            <p className="text-base text-text">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our application.
            </p>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                Information We Collect
              </h2>
              <p className="mb-2">We may collect the following information:</p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Name and email address</li>
                <li>Profile information</li>
                <li>Device information</li>
                <li>App usage and analytics</li>
                <li>Wallet and transaction history</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                How We Use Your Information
              </h2>
              <p className="mb-2">Your information may be used to:</p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Provide and improve our services</li>
                <li>Generate personalized AI content</li>
                <li>Process rewards and payments</li>
                <li>Send notifications and updates</li>
                <li>Enhance security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission or storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                Third-Party Services
              </h2>
              <p>
                Our application may use third-party services such as analytics providers, advertising platforms, and payment processors. These services have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                Cookies & Analytics
              </h2>
              <p>
                We may use cookies and similar technologies to improve your experience, analyze app performance, and deliver relevant content.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                Your Rights
              </h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Access your personal information</li>
                <li>Update or correct your data</li>
                <li>Request deletion of your account</li>
                <li>Manage notification preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted within the application.
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <h2 className="text-base font-semibold text-text mb-2">
                Contact Us
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy, please contact us at:
              </p>
              <p className="mt-1 text-text font-medium">
                Email: <a href="mailto:Dlovett2019@gmail.com" className="text-accent hover:underline">Dlovett2019@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
