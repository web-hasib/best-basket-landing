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
      name: "What is BestBasket and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BestBasket is an intelligent grocery shopping assistant. It automatically compares prices for items on your shopping list across local grocery stores like Walmart, Aldi, and Kroger, helping you instantly find the biggest total savings.",
      },
    },
    {
      "@type": "Question",
      name: "How do store coupons and discounts work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BestBasket compiles verified store coupons and digital manufacturer discounts. You can clip them with a single tap in the app and easily redeem them during checkout at participating stores to maximize your savings.",
      },
    },
    {
      "@type": "Question",
      name: "Is BestBasket free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Downloading and using BestBasket to compare prices, browse daily deals, clip coupons, and track your grocery savings is 100% free with no hidden fees or subscriptions required.",
      },
    },
    {
      "@type": "Question",
      name: "Which grocery stores are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BestBasket supports major national and regional supermarket chains, including Walmart, Aldi, Kroger, Target, and more. We continuously add new regional stores and local grocers based on user demand.",
      },
    },
    {
      "@type": "Question",
      name: "Which devices and platforms are currently supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BestBasket is currently designed and optimized for mobile devices. Stay tuned for both iOS and Android app releases, along with web access.",
      },
    },
    {
      "@type": "Question",
      name: "How are my data and privacy protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We apply industry-standard security and strict privacy protocols. Your personal grocery lists and shopping habits are kept confidential and are never sold to unauthorized third parties.",
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
