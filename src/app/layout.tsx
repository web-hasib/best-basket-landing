import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0B0814",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bestbasket.app"),
  title: {
    default: "BestBasket — Smart Grocery Savings & Price Comparison",
    template: "%s | BestBasket",
  },
  description:
    "Compare grocery prices across nearby stores, find and clip digital coupons instantly, and maximize your monthly grocery savings with BestBasket.",
  keywords: [
    "grocery savings",
    "price comparison",
    "grocery coupons",
    "supermarket deals",
    "Walmart vs Aldi",
    "BestBasket",
    "grocery app",
    "save money on groceries",
  ],
  authors: [{ name: "BestBasket Team", url: "https://bestbasket.app" }],
  creator: "BestBasket",
  publisher: "BestBasket",
  category: "lifestyle",
  alternates: {
    canonical: "https://bestbasket.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestbasket.app",
    title: "BestBasket — Smart Grocery Savings & Price Comparison",
    description:
      "Stop overpaying for groceries. Compare shopping lists across local stores, clip instant coupons, and track your monthly savings with BestBasket.",
    siteName: "BestBasket",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestBasket — Smart Grocery Savings & Price Comparison",
    description:
      "Compare grocery prices across local stores and clip instant digital coupons.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BestBasket",
  url: "https://bestbasket.app",
  description:
    "Smart grocery comparison platform helping shoppers compare prices, clip instant coupons, and track savings.",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BestBasket",
  url: "https://bestbasket.app",
  logo: "https://bestbasket.app/logo_full.png",
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "BestBasket",
  operatingSystem: "iOS, Android",
  applicationCategory: "ShoppingApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Compare prices across Walmart, Aldi, and Kroger, clip verified digital store coupons, and track your grocery savings.",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Wispry and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wispry is a rewards and wellness platform that helps you generate personalized AI quotes, build daily motivational streaks, and earn rewards through verified community engagement and user challenges.",
      },
    },
    {
      "@type": "Question",
      name: "How do I earn and withdraw rewards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You earn rewards by completing daily challenges, sharing inspirational content, and maintaining consistent streaks. Once your earnings reach the minimum payout threshold, you can seamlessly withdraw funds to your linked bank account or digital wallet.",
      },
    },
    {
      "@type": "Question",
      name: "Is the app completely free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Downloading and getting started on Wispry is 100% free. You can explore daily AI prompts, track your milestones, and participate in community challenges without any upfront cost or subscription requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI quote generator work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our built-in AI models analyze your chosen tone, focus topics, and aesthetic style to craft thoughtful, one-of-a-kind quotes with beautiful typography formatted ready to share across your socials.",
      },
    },
    {
      "@type": "Question",
      name: "Which devices and platforms are currently supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wispry is currently optimized for iOS on iPhone devices via the Apple App Store. An Android release is actively in development and will be available soon.",
      },
    },
    {
      "@type": "Question",
      name: "How are my data and transactions secured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We apply end-to-end data encryption, strict identity verification, and privacy-first protocols. We never sell your personal information or share payment credentials with unauthorized third parties.",
      },
    },
  ],
};

import { EarlyAccessProvider } from "@/components/EarlyAccessModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${sans.variable} ${fontDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="antialiased bg-bg text-text min-h-screen font-sans">
        <EarlyAccessProvider>
          {children}
        </EarlyAccessProvider>
      </body>
    </html>
  );
}
