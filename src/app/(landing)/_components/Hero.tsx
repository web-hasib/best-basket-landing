"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Button from "@/components/Button";
import GradientText from "@/components/GradientText";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Badge pop in
      tl.from("[data-hero-label]", {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.7,
      });

      // 2. Heading characters / words cascade animation
      tl.from(
        "[data-hero-word]",
        {
          opacity: 0,
          y: 40,
          rotateX: -45,
          stagger: 0.08,
          duration: 0.9,
          ease: "back.out(1.6)",
        },
        "-=0.4"
      );

      // 3. Subtitle fade in with soft slide
      tl.from(
        "[data-hero-desc]",
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // 4. CTA Buttons bounce in
      tl.from(
        "[data-hero-btn]",
        {
          opacity: 0,
          y: 20,
          scale: 0.92,
          stagger: 0.12,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      // 5. High-end buttery-smooth 3D floating physics with realistic levitation
      // Object 1: Hyper-realistic 3D Violet Shopping Cart (Top Left)
      gsap.to(".hero-3d-cart", {
        y: -24,
        rotationZ: 3,
        rotationY: -6,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Object 2: Hyper-realistic 3D Royal Coupon Ticket (Top Right)
      gsap.to(".hero-3d-coupon", {
        y: 26,
        rotationZ: -4,
        rotationX: 6,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.4,
      });

      // Object 3: 3D Smart Grocery Receipt (Bottom Left Accent)
      gsap.to(".hero-3d-receipt", {
        y: 16,
        rotationZ: -3.5,
        rotationY: 4,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.8,
      });

      // Object 4: Mini 3D Price Tag (Bottom Right Accent)
      gsap.to(".hero-3d-tag", {
        y: -16,
        rotationZ: 3.5,
        duration: 5.0,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.2,
      });

      // Ambient slow background orbits
      gsap.to(".svg-rotate-slow", {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* ========================================================= */}
      {/* ANIMATED LUXURY 3D AMBIENCE & OBJECTS                     */}
      {/* ========================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,rgba(168,85,247,0.05)_50%,transparent_75%)] blur-[120px]" />
        <div className="absolute bottom-12 right-12 w-[420px] h-[420px] bg-[#8B5CF6]/8 rounded-full blur-[130px]" />
        <div className="absolute top-16 left-12 w-[380px] h-[380px] bg-[#7C3AED]/7 rounded-full blur-[110px]" />

        {/* Large Geometric Background Rings SVG */}
        <svg
          className="svg-rotate-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.14]"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="400"
            cy="400"
            r="380"
            stroke="url(#orbitGradient1)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
          <circle
            cx="400"
            cy="400"
            r="280"
            stroke="url(#orbitGradient2)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="orbitGradient1" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED" />
              <stop offset="0.5" stopColor="#A855F7" />
              <stop offset="1" stopColor="#6D28D9" />
            </linearGradient>
            <linearGradient id="orbitGradient2" x1="800" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#C084FC" />
            </linearGradient>
          </defs>
        </svg>

        {/* Realistic 3D Object 1: Hyper-Detailed Metallic Chrome Violet Shopping Cart (Top Left) - Moved Closer */}
        <div className="hero-3d-cart absolute top-[16%] left-[10%] sm:left-[14%] lg:left-[17%] w-[95px] sm:w-[120px] lg:w-[140px] pointer-events-none drop-shadow-[0_15px_25px_rgba(124,58,237,0.18)] will-change-transform z-0">
          <Image
            src="/hero-cart-groceries.png"
            alt="BestBasket 3D grocery cart"
            width={300}
            height={300}
            className="w-full h-auto object-contain select-none"
            priority
          />
        </div>

        {/* Realistic 3D Object 2: Sleek Minimal Violet Coupon Ticket (Top Right) - Moved Closer */}
        <div className="hero-3d-coupon absolute top-[18%] right-[10%] sm:right-[14%] lg:right-[17%] w-[85px] sm:w-[110px] lg:w-[130px] pointer-events-none drop-shadow-[0_15px_25px_rgba(168,85,247,0.20)] will-change-transform z-0">
          <Image
            src="/hero-coupon-clean.png"
            alt="BestBasket 3D grocery voucher coupon"
            width={300}
            height={300}
            className="w-full h-auto object-contain select-none"
            priority
          />
        </div>

        {/* Realistic 3D Object 3: 3D Luxury Sale Price Tag (Bottom Left) - Moved Closer */}
        <div className="hero-3d-tag hidden md:block absolute bottom-[14%] left-[12%] lg:left-[18%] w-[85px] lg:w-[105px] pointer-events-none drop-shadow-[0_15px_25px_rgba(168,85,247,0.18)] will-change-transform z-0">
          <Image
            src="/hero-left-tag-clean.png"
            alt="BestBasket 3D discount price tag"
            width={300}
            height={300}
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* Realistic 3D Object 4: 3D Smart Grocery Receipt (Bottom Right) - Moved Closer */}
        <div className="hero-3d-receipt hidden md:block absolute bottom-[14%] right-[12%] lg:right-[18%] w-[85px] lg:w-[110px] pointer-events-none drop-shadow-[0_15px_25px_rgba(15,23,42,0.14)] will-change-transform z-0">
          <Image
            src="/hero-receipt.png"
            alt="BestBasket 3D grocery savings receipt"
            width={300}
            height={300}
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* HERO TEXT CONTENT & CTAS                                 */}
      {/* ========================================================= */}
      <div className="relative max-w-4xl mx-auto px-6 py-12 text-center z-10">
        <div>
          {/* Top Badge */}
          <div className="mb-6">
            <span
              data-hero-label
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent bg-accent/5 px-4 py-1.5 rounded-full border border-accent/2 backdrop-blur-sm"
            >
              Smart Grocery Savings & Intelligence
            </span>
          </div>

          {/* Animated Headline with GSAP Word split & Elegant Serif Font */}
          <h1
            data-hero-title
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.12] mb-6 tracking-tight perspective-[1000px]"
          >
            <span className="block mb-1">
              {["Save", "More."].map((word, i) => (
                <span
                  key={i}
                  data-hero-word
                  className="inline-block mr-[0.28em] will-change-transform font-medium"
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block overflow-visible py-1">
              <span
                data-hero-word
                className="inline-block will-change-transform italic font-serif px-2 overflow-visible"
              >
                <GradientText className="font-serif italic font-medium inline-block pr-[0.15em] overflow-visible">
                  &ldquo;On Every Grocery Run&rdquo;
                </GradientText>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-hero-desc
            className="text-text-muted text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-normal"
          >
            Compare grocery prices across your favorite local stores, clip digital coupons with a tap, and optimize your monthly budget effortlessly with AI-powered insights.
          </p>

          {/* Action CTAs */}
          <div data-hero-cta className="flex flex-wrap items-center justify-center gap-4">
            <div data-hero-btn>
              <Button href="#app-screens" size="lg">
                Explore the App
              </Button>
            </div>
            <div data-hero-btn>
              <Button href="#features" variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
