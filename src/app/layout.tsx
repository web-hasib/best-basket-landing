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
  metadataBase: new URL("https://wispry.com"),
  title: {
    default: "Wispry — Earn rewards. Build your community.",
    template: "%s | Wispry",
  },
  description:
    "A rewards platform designed to help users monetize engagement, track real-time analytics, and build authentic communities.",
  keywords: [
    "user rewards",
    "community building",
    "earn rewards",
    "monetization for users",
    "rewards platform",
    "Wispry",
    "iOS app",
    "App Store rewards app",
  ],
  authors: [{ name: "Wispry Team", url: "https://wispry.com" }],
  creator: "Wispry",
  publisher: "Wispry",
  category: "lifestyle",
  alternates: {
    canonical: "https://wispry.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wispry.com",
    title: "Wispry — Earn rewards. Build your community.",
    description:
      "A platform where users earn real rewards by engaging with their community. Track your earnings, unlock achievements, and grow together.",
    siteName: "Wispry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wispry — Earn rewards. Build your community.",
    description:
      "Earn real rewards by engaging with your community.",
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
  name: "Wispry",
  url: "https://wispry.com",
  description:
    "A rewards platform designed to help users monetize engagement and build authentic communities.",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wispry",
  url: "https://wispry.com",
  logo: "https://wispry.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "Dlovett2019@gmail.com",
    contactType: "customer service",
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Wispry",
  operatingSystem: "iOS, Android",
  applicationCategory: "LifestyleApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Turn daily inspiration into real earnings with AI quote generation, streak milestones, and sponsored rewards.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${fontDisplay.variable}`}>
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
        {children}
      </body>
    </html>
  );
}
