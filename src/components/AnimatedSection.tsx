"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade";
  delay?: number;
  stagger?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  stagger = 0,
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const targets = stagger > 0 ? el.children : el;

      const fromVars: gsap.TweenVars = {
        opacity: 0,
      };
      const toVars: gsap.TweenVars = {
        opacity: 1,
        duration: 0.8,
        delay,
        stagger: stagger > 0 ? stagger : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          once: true,
        },
      };

      if (animation === "fade-up") {
        fromVars.y = 40;
        toVars.y = 0;
      } else if (animation === "fade-left") {
        fromVars.x = -40;
        toVars.x = 0;
      } else if (animation === "fade-right") {
        fromVars.x = 40;
        toVars.x = 0;
      }

      gsap.fromTo(targets, fromVars, toVars);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
