# BestBasket — Smart Grocery Savings & Price Comparison

A modern, high-performance, light-mode landing page, VIP early-access lead portal, and legal documentation portal built for **BestBasket** — an AI-powered grocery shopping companion designed to compare prices across local stores, clip digital coupons, and maximize weekly savings.

---

## ✨ Features & Architecture

### 🚀 Landing Page Experience (`/`)

- **Hero Section:** Elegant typography with luxury 3D floating grocery objects (realistic purple shopping cart, digital coupon ticket, discount tag, and grocery receipt) with smooth GSAP ambient physics.
- **Features Grid:** High-impact feature cards highlighting automated store price comparison, digital coupons, grocery spending intelligence, and weekly budget optimization.
- **Interactive App Showcase (`#app-screens`):** 5-screen interactive carousel inside an iPhone 16 Pro mockup:
  - **Smart Dashboard:** Overview of monthly savings, AI-powered store recommendations, and quick meal planning.
  - **Price Comparison:** Side-by-side shopping list comparison across local stores like Walmart, Aldi, and Kroger.
  - **Best Prices:** Real-time item pricing across neighborhood grocers.
  - **Instant Coupons:** Single-tap digital store coupons and manufacturer discounts.
  - **Savings Intelligence:** Monthly spending analytics by food category.
  - **App Store & Google Play download buttons:** Integrated with official Apple and 4-color Google Play brand badges.
- **"Coming Soon" Early Access Modal:** Interactive popup on download buttons directing eager users to join the priority rollout.
- **How It Works:** 3-step visual workflow explaining how users save on every shopping run.
- **Community Testimonials:** Verified shopper reviews praising monthly grocery savings.
- **FAQ Section:** Comprehensive grocery shopping, coupon clipping, and platform privacy FAQ accordion.
- **CTA Banner:** High-converting bottom section with animated gradient buttons.
- **Footer:** Complete navigation, legal links, social channels, and branding.

### 🌟 VIP Early Access Lead Portal (`/early-access`)

A conversion-optimized early-access queue page:
- **Clean Form:** Collects Full Name, Email Address, Phone Number, Location (City/Zip), and Platform preference (iOS / Android).
- **Interactive Platform Selectors:** Custom buttons with authentic Apple and Google Play logos.
- **Delightful Celebration Flow:** Clean animated self-drawing checkmark SVG coupled with top-down colorful celebration confetti sprinkles (`canvas-confetti`).

### 📜 Legal & Support Documentation

Clean, document-style compliance pages:
- **Privacy Policy:** [`/privacy-policy`](/privacy-policy)
- **Terms of Use:** [`/terms-of-use`](/terms-of-use)
- **Terms & Conditions:** [`/terms-and-conditions`](/terms-and-conditions)
- **End User License Agreement (EULA):** [`/eula`](/eula)
- **Support Center:** [`/support`](/support)

### 🎨 Design System & Aesthetics

- **Crisp Light Theme:** Clean, modern canvas (`#F8F9FD` background, `#FFFFFF` cards, `#E2E8F0` borders, `#0F172A` text).
- **Brand Purple Gradient:** Radiant royal purple to violet gradient flow (`#7C3AED` to `#A855F7`).
- **Tactile 3D Animated Buttons:** Custom interactive buttons with top specular highlights, deep bottom borders, and soft brightness hover transitions (`.btn-primary-animated`).
- **Typography:** `Plus Jakarta Sans` for body text and `Outfit` for modern headlines.

### 🔍 SEO & Web Vitals

- **100% Server Pre-rendered (SSR/SSG):** All pages and client components pre-render into clean, accessible HTML.
- **Structured Data (JSON-LD):** Rich Schema.org markup for `WebSite`, `Organization`, `MobileApplication`, and `FAQPage`.
- **Dynamic SEO Assets:** Auto-generated `sitemap.xml`, `robots.txt`, and PWA `manifest.webmanifest`.
- **Responsive Layout:** Zero horizontal overflow (`overflow-x: hidden`), fluid mobile grids with `min-w-0` safety.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Design System
- **Animation:** [GSAP 3](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/) via `@gsap/react`
- **Celebration Effects:** [canvas-confetti](https://github.com/catdad/canvas-confetti)
- **Fonts:** [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (`Plus Jakarta Sans` & `Outfit`)

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── (landing)/
│   │   │   └── _components/
│   │   │       ├── AppShowcase.tsx     # 5-screen interactive iPhone showcase
│   │   │       ├── CTA.tsx             # Call to action banner
│   │   │       ├── FAQ.tsx             # 2-column grocery FAQ accordion
│   │   │       ├── Features.tsx        # Features grid
│   │   │       ├── Footer.tsx          # Site footer
│   │   │       ├── Hero.tsx            # Hero with floating 3D grocery assets
│   │   │       ├── HowItWorks.tsx      # Step-by-step savings timeline
│   │   │       ├── Stats.tsx           # Numerical counter section
│   │   │       └── Testimonials.tsx    # Shopper reviews
│   │   ├── early-access/               # VIP Early Access lead page & form
│   │   ├── eula/                       # EULA legal page
│   │   ├── privacy-policy/             # Privacy Policy page
│   │   ├── support/                    # Support & Help Center
│   │   ├── terms-and-conditions/       # Terms & Conditions
│   │   ├── terms-of-use/               # Terms of Use
│   │   ├── globals.css                 # Design system tokens, buttons & animations
│   │   ├── layout.tsx                  # Root layout, fonts & JSON-LD
│   │   ├── manifest.ts                 # Web App Manifest
│   │   ├── page.tsx                    # Landing page entry point
│   │   ├── robots.ts                   # Search bot rules
│   │   └── sitemap.ts                  # Static sitemap generator
│   └── components/
│       ├── AnimatedSection.tsx         # Scroll-triggered entrance wrapper
│       ├── Button.tsx                  # Animated primary & ghost button
│       ├── EarlyAccessModal.tsx        # Global 'Coming Soon' modal & provider
│       ├── FeatureCard.tsx             # Clean card component
│       ├── FormInput.tsx               # Reusable VIP waitlist input component
│       ├── GradientText.tsx            # Brand gradient text clip
│       ├── Navbar.tsx                  # Glassmorphism navbar with mobile drawer
│       ├── SectionHeading.tsx          # Reusable section header
│       └── TextReveal.tsx              # Split text reveal utility
├── public/                             # 3D assets, screens, logos, and icons
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bestbasket-landing.git
   cd bestbasket-landing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To build and validate the application for production:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## 📄 License

© 2026 BestBasket. All rights reserved.
