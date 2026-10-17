"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up in seconds with just your email. Set up your user profile and immediately get access to daily earning opportunities.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="m16 11 2 2 4-4" />
      </svg>
    ),
    badge: "Quick Setup",
    color: "#7C3AED",
  },
  {
    number: "02",
    title: "Engage & unlock rewards",
    description:
      "Generate inspiring daily AI quotes and view sponsored brand cards to build your streaks and multiply your daily bonus earnings.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
      </svg>
    ),
    badge: "Daily Boost",
    color: "#A855F7",
  },
  {
    number: "03",
    title: "Instant cashout",
    description:
      "Watch your wallet balance stack up with transparent accounting. Withdraw anytime straight to your connected bank or card with zero delay.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
        <path d="M16 14h.01" />
        <path d="m19 2-3 3 3 3" />
      </svg>
    ),
    badge: "Zero Delay",
    color: "#8B5CF6",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Wavy curved SVG path drawing along with scroll (scrubbed)
      const path = document.querySelector<SVGPathElement>(".wavy-path-fill");
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "center 45%",
            scrub: 1.2,
          },
        });
      }

      // 2. Steps entrance pop-in
      gsap.from(".timeline-step", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-24 sm:py-32 bg-surface/30 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 sm:mb-24">
          <SectionHeading
            label="How it works"
            title="Three simple steps to start earning"
            description="Getting started with Wispry is fast and straightforward. No complicated setup."
          />
        </div>

        {/* Wavy Connected Horizontal Timeline */}
        <div className="relative">
          {/* Akabaka / Curving Organic Wavy SVG Line (Desktop) */}
          <div className="hidden md:block absolute -top-2 left-[14%] right-[14%] h-20 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 800 70"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="wavyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aedc7" />
                  <stop offset="50%" stopColor="#a855f7b5" />
                  <stop offset="100%" stopColor="#c084fcd9" />
                </linearGradient>
                <filter id="wavyGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Faint background track guide */}
              <path
                d="M 20 35 C 180 75, 240 -5, 400 35 C 560 75, 620 -5, 780 35"
                stroke="currentColor"
                className="text-border/40"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />

              {/* Animated Glowing Akabaka Wavy Curve that draws on scroll */}
              <path
                d="M 20 35 C 180 75, 240 -5, 400 35 C 560 75, 620 -5, 780 35"
                stroke="url(#wavyGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#wavyGlow)"
                className="wavy-path-fill"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="timeline-step flex flex-col items-center text-center group cursor-default"
              >
                {/* Numbered Node Pill */}
                <div className="relative mb-6">
                  {/* Subtle hover pulse aura */}
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-10 group-hover:opacity-25 transition-opacity duration-300"
                    style={{ backgroundColor: step.color }}
                  />

                  <div
                    className="relative w-14 h-14 rounded-2xl bg-bg border border-border flex items-center justify-center text-text font-bold shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      borderColor: `${step.color}66`,
                    }}
                  >
                    <span
                      className="text-lg font-black tracking-tight"
                      style={{ color: `${step.color}aa` }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="mb-3">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm text-text-muted transition-colors duration-300 group-hover:text-text"
                    style={{
                      background: `${step.color}10`,
                    }}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-3 transition-colors duration-200 group-hover:text-text"
                style={{
                  color: `${step.color}aa`,
                }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



