"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "BestBasket completely changed how I plan our weekly grocery runs. Comparing Aldi and Walmart prices side-by-side saves my family over $120 every single month!",
    name: "Sarah Chen",
    role: "Savvy Shopper",
    tag: "Verified Saver",
  },
  {
    quote:
      "Clipping digital manufacturer coupons with a single tap and finding the lowest egg and milk prices near me is effortless. The user experience is buttery smooth.",
    name: "Marcus Johnson",
    role: "Weekly Shopper",
    tag: "Active User",
  },
  {
    quote:
      "The app interface is really clean and intuitive. The price comparison breakdowns are instant, store directions are accurate, and it actually saves real money at checkout.",
    name: "Amara Osei",
    role: "Budget Planner",
    tag: "Power User",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // 1. Reveal header
      gsap.from(".testimonial-header", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // 2. Smooth staggered card entrance with 3D depth
      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 60,
        scale: 0.94,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 82%",
          once: true,
        },
      });

      // 3. Floating ambient glowing orbs
      gsap.to(".testimonial-orb-1", {
        x: 40,
        y: -30,
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".testimonial-orb-2", {
        x: -45,
        y: 35,
        scale: 0.9,
        duration: 8.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // 4. Subtle continuous floating motion for quote icons
      gsap.to(".testimonial-quote-icon", {
        y: -4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  // Smooth interactive mouse tilt effect on cards
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotationY: x * 0.035,
      rotationX: -y * 0.035,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1000,
      transformStyle: "preserve-3d",
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-28 bg-surface/50 overflow-hidden"
    >
      {/* Ambient background glows animated with GSAP */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="testimonial-orb-1 absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-accent/4 blur-[120px]" />
        <div className="testimonial-orb-2 absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-purple/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="testimonial-header mb-16 text-center">
          <SectionHeading
            label="Testimonials"
            title="Loved by shoppers nationwide"
            description="Don't take our word for it. Here's what smart shoppers love about using BestBasket."
          />
        </div>

        <div className="testimonial-grid grid md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="testimonial-card group relative card-raised p-8 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/[0.14] flex flex-col justify-between will-change-transform"
            >
              {/* Subtle top border gradient glow on hover */}
              <div className="absolute inset-x-0 -top-px h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/25 transition-all duration-500 rounded-t-2xl pointer-events-none" />

              {/* Background watermark / quote mark shade */}
              <div className="testimonial-quote-icon absolute -top-4 -right-3 text-accent/[0.04] group-hover:text-accent/[0.07] transition-colors duration-500 pointer-events-none select-none">
                <svg
                  width="110"
                  height="110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header row: User Tag & 5-star rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-surface border border-border/80 text-text-muted group-hover:text-accent group-hover:border-accent/30 transition-colors">
                    {t.tag}
                  </span>

                  {/* 5-star rating visual */}
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed mb-6 group-hover:text-text transition-colors duration-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-border/60">
                {/* Avatar with gradient & glow */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-accent/15 via-purple/10 to-accent/5 border border-accent/15 flex items-center justify-center text-accent text-sm font-bold shadow-inner transition-transform duration-300 group-hover:scale-105">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-text group-hover:text-accent transition-colors">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

