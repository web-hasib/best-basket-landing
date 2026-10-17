"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

      // 5. GSAP Moving SVGs: Dynamic continuous multi-axis translation & rotation
      // Floating Sparkle 1 (Top-Left) moves along a curved path
      gsap.to(".svg-float-1", {
        x: 45,
        y: -35,
        rotation: 35,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating Diamond 2 (Top-Right) floats and wanders
      gsap.to(".svg-float-2", {
        x: -50,
        y: 40,
        rotation: -45,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.3,
      });

      // Floating Mini Sparkle 3 (Bottom-Left) wanders horizontally and vertically
      gsap.to(".svg-float-3", {
        x: 35,
        y: -40,
        rotation: 40,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6,
      });

      // Floating Ring 4 (Bottom-Right) moves in opposite direction
      gsap.to(".svg-float-4", {
        x: -40,
        y: -30,
        rotation: -30,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });

      // Floating Badge 5 (Top-Center) subtle drift
      gsap.to(".svg-float-5", {
        x: 25,
        y: 25,
        rotation: 25,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // Large Geometric Background Rings rotation using GSAP
      gsap.to(".svg-rotate-slow", {
        rotation: 360,
        duration: 45,
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
      {/* ANIMATED SVG BACKGROUND & GEOMETRIC PARTICLES            */}
      {/* ========================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.14)_0%,rgba(168,85,247,0.06)_50%,transparent_75%)] blur-[120px]" />
        <div className="absolute bottom-12 right-12 w-[420px] h-[420px] bg-purple/10 rounded-full blur-[130px]" />
        <div className="absolute top-16 left-12 w-[380px] h-[380px] bg-accent/8 rounded-full blur-[110px]" />

        {/* Large Geometric Background Rings SVG */}
        <svg
          className="svg-rotate-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.08]"
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

        {/* Floating Icon 1: 4-Point Sparkle Star (Top Left) */}
        <div className="svg-float-1 absolute top-[18%] left-[12%] sm:left-[18%] opacity-50">
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 0C24 13.2548 34.7452 24 48 24C34.7452 24 24 34.7452 24 48C24 34.7452 13.2548 24 0 24C13.2548 24 24 13.2548 24 0Z"
              fill="url(#sparkleGrad1)"
            />
            <defs>
              <linearGradient id="sparkleGrad1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7C3AED" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Icon 2: Modern App Diamond/Badge (Top Right) */}
        <div className="svg-float-2 absolute top-[22%] right-[10%] sm:right-[16%] opacity-45">
          <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
            <rect
              x="24"
              y="4"
              width="28"
              height="28"
              rx="8"
              transform="rotate(45 24 4)"
              stroke="url(#diamondGrad)"
              strokeWidth="2.5"
              fill="rgba(124,58,237,0.08)"
            />
            <circle cx="24" cy="24" r="4" fill="#A855F7" />
            <defs>
              <linearGradient id="diamondGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Icon 3: Glowing Mini Sparkle (Bottom Left) */}
        <div className="svg-float-3 absolute bottom-[22%] left-[10%] sm:left-[15%] opacity-40">
          <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
            <path
              d="M18 0C18 9.94113 26.0589 18 36 18C26.0589 18 18 26.0589 18 36C18 26.0589 9.94113 18 0 18C9.94113 18 18 9.94113 18 0Z"
              fill="url(#sparkleGrad2)"
            />
            <defs>
              <linearGradient id="sparkleGrad2" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7C3AED" />
                <stop offset="1" stopColor="#C084FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Icon 4: Ring Icon (Bottom Right) */}
        <div className="svg-float-4 absolute bottom-[20%] right-[12%] sm:right-[18%] opacity-35">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="url(#ringGrad)" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="20" cy="20" r="6" fill="#7C3AED" />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7C3AED" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Icon 5: Central Cross/Star (Top Middle) */}
        <div className="svg-float-5 absolute top-[14%] left-[48%] opacity-35">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 0L17.8 11.2L26 5L20.8 13.2L32 15L20.8 16.8L26 25L17.8 18.8L16 30L14.2 18.8L6 25L11.2 16.8L0 15L11.2 13.2L6 5L14.2 11.2L16 0Z"
              fill="url(#sparkleGrad5)"
            />
            <defs>
              <linearGradient id="sparkleGrad5" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7C3AED" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
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
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20 backdrop-blur-md"
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
            <span className="block">
              {[`"On Every`, `Grocery Run"`].map((word, i) => (
                <span
                  key={i}
                  data-hero-word
                  className="inline-block mr-[0.28em] will-change-transform italic font-serif"
                >
                  <GradientText className="font-serif italic font-medium">{word}</GradientText>
                </span>
              ))}
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
