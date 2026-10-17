import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA) — Wispry",
  description: "End User License Agreement (EULA) governing the use of the Wispry iOS and mobile applications.",
  alternates: {
    canonical: "https://wispry.com/eula",
  },
  openGraph: {
    title: "End User License Agreement (EULA) — Wispry",
    description: "Standard Apple End User License Agreement details for Wispry.",
    url: "https://wispry.com/eula",
  },
};

export default function EulaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-text mb-2">
            End User License Agreement (EULA)
          </h1>
          <p className="text-xs text-text-muted mb-8">
            Last Updated: July 7, 2026
          </p>

          <div className="space-y-6 text-sm text-text-muted leading-relaxed">
            <p className="text-base text-text">
              This End User License Agreement (&ldquo;EULA&rdquo;) is a binding legal agreement between you (&ldquo;User&rdquo; or &ldquo;You&rdquo;) and Wispry (&ldquo;Licensor&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;), governing your use of the Wispry mobile application available on the Apple App Store.
            </p>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                1. Scope of License
              </h2>
              <p>
                Licensor grants you a non-transferable, non-exclusive license to use the application on any Apple-branded products that you own or control, in accordance with the Usage Rules set forth in the Apple Media Services Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                2. User-Generated & AI-Generated Content
              </h2>
              <p>
                Our platform provides features for community engagement and AI-generated content. Users are strictly prohibited from submitting, sharing, or disseminating objectionable, abusive, defamatory, or unlawful content. We maintain a zero-tolerance policy for abusive behavior and objectionable content. Violators are subject to immediate account termination and permanent blocking.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                3. Maintenance and Support
              </h2>
              <p>
                Licensor is solely responsible for providing any maintenance and support services with respect to the licensed application as specified in this EULA or under applicable law. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the application.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                4. Warranty Disclaimer
              </h2>
              <p>
                To the maximum extent permitted by applicable law, the application is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, with all faults and without warranty of any kind. In the event of any failure of the application to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price (if any) to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                5. Product Claims & Legal Compliance
              </h2>
              <p>
                You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties. Licensor, not Apple, is responsible for addressing any claims relating to the application or your possession and use thereof.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-text mb-2">
                6. Apple Third-Party Beneficiary
              </h2>
              <p>
                You acknowledge and agree that Apple, and Apple&rsquo;s subsidiaries, are third-party beneficiaries of this EULA, and that upon your acceptance of the terms and conditions of this agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this EULA against you as a third-party beneficiary thereof.
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <h2 className="text-base font-semibold text-text mb-2">
                Contact & Support
              </h2>
              <p>
                For questions, complaints, or claims regarding this EULA or the application, please reach out to:
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
