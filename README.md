# Best basket — Landing Page & Legal Portal

A modern, high-performance, dark-mode landing page and documentation portal built for **Best basket** — a user rewards platform designed to help users monetize engagement, track real-time milestones, and build authentic communities.

---

## ✨ Features & Architecture

### 🚀 Landing Page Experience (`/`)   

- **Hero Section:** Elegant typography with animated word reveals, interactive floating SVG background particles, and liquid gradient CTA buttons.
- **Features Grid:** 6 high-impact feature cards showcasing earnings, digital wallet, streak milestones, and analytics with subtle hover lighting.
- **Interactive App Showcase:** 5-screen interactive carousel inside an iPhone 16 Pro frame:
  - Desktop: Pinned scroll showcase with auto-sliding timer and hover pause.
  - Mobile: Clean, responsive layout with manual button and tab navigation (auto-slide disabled for touch comfort).
- **How It Works:** 3-step animated timeline connected with smooth vector paths.
- **Live Stats Counter:** GSAP-powered numerical counters triggered on viewport entrance.
<!-- - **Community Testimonials:** Interactive 3D tilt cards responding to cursor coordinates without vertical jump. -->
- **FAQ Section:** 2-column responsive accordion with smooth expand/collapse and staggered entrance animation.
- **CTA Banner:** Final conversion section with animated primary gradient buttons.
- **Footer:** Full navigation links, legal documentation routes, social channels, and branding.

### 📜 Legal & Support Documentation

Completely minimal, clean, document-style pages formatted for readability and App Store compliance:

- **Privacy Policy:** [`/privacy-policy`](https://wispry.com/privacy-policy)
- **Terms of Use:** [`/terms-of-use`](https://wispry.com/terms-of-use)
- **Terms & Conditions:** [`/terms-and-conditions`](https://wispry.com/terms-and-conditions)
- **End User License Agreement (EULA):** [`/eula`](https://wispry.com/eula)
- **Support Center:** [`/support`](https://wispry.com/support)

### 🎨 Design System & Aesthetics

- **Dark Aesthetic:** Pure dark palette (`#0B0814` background, `#140F24` surface) with refined violet borders.
- **Brand Gradient:** Radiant royal purple to electric violet flow (`#7C3AED` to `#A855F7`).
- **Animated Primary Buttons:** Continuous fluid liquid gradient keyframe animation (`btn-primary-animated`).
- **Custom Global Scrollbar:** Sleek 7px scrollbar styled with subtle purple brand gradient accents.
- **Typography:** `Plus Jakarta Sans` for clean UI body text and `Outfit` for modern geometric headlines.

### 🔍 SEO & Web Vitals

- **100% Server Pre-rendered (SSR/SSG):** All pages and client components pre-render into clean, accessible HTML.
- **Structured Data (JSON-LD):** Rich Schema.org markup for `WebSite`, `Organization`, `MobileApplication`, and `FAQPage`.
- **Dynamic SEO Assets:** Auto-generated `sitemap.xml`, `robots.txt`, and PWA `manifest.webmanifest`.
- **Canonical URLs:** Strict canonical URLs configured across all routes.
- **Responsive Layout:** Zero horizontal overflow (`overflow-x: hidden`), fluid mobile grids with `min-w-0` safety.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Design System
- **Animation:** [GSAP 3](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/) via `@gsap/react`
- **Fonts:** [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Plus Jakarta Sans & Playfair Display)

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── (landing)/
│   │   │   └── _components/
│   │   │       ├── AppShowcase.tsx     # 5-screen interactive iPhone showcase
│   │   │       ├── CTA.tsx             # Call to action banner
│   │   │       ├── FAQ.tsx             # 2-column accordion with GSAP
│   │   │       ├── Features.tsx        # Features grid
│   │   │       ├── Footer.tsx          # Site footer
│   │   │       ├── Hero.tsx            # Hero with floating SVG animations
│   │   │       ├── HowItWorks.tsx      # Step-by-step connected timeline
│   │   │       ├── Stats.tsx           # Numerical counter section
│   │   │       └── Testimonials.tsx    # 3D tilt reviews
│   │   ├── eula/                       # EULA legal page
│   │   ├── privacy-policy/             # Privacy Policy page
│   │   ├── support/                    # Support & Help Center
│   │   ├── terms-and-conditions/       # Terms & Conditions
│   │   ├── terms-of-use/               # Terms of Use
│   │   ├── globals.css                 # Design system tokens & animations
│   │   ├── layout.tsx                  # Root layout, fonts & JSON-LD
│   │   ├── manifest.ts                 # Web App Manifest
│   │   ├── page.tsx                    # Landing page entry point
│   │   ├── robots.ts                   # Search bot rules
│   │   └── sitemap.ts                  # Static sitemap generator
│   └── components/
│       ├── AnimatedSection.tsx         # Scroll-triggered entrance wrapper
│       ├── Button.tsx                  # Animated primary & ghost button
│       ├── FeatureCard.tsx             # Clean flat card component
│       ├── GradientText.tsx            # Brand gradient text clip
│       ├── Navbar.tsx                  # Glassmorphism navbar with mobile drawer
│       ├── SectionHeading.tsx          # Reusable section header
│       └── TextReveal.tsx              # Split text reveal utility
├── public/                             # SVG logos, mockups, and static assets
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
   git clone https://github.com/your-username/tay_lovett_landing.git
   cd tay_lovett_landing
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

© 2026 Wispry. All rights reserved.
