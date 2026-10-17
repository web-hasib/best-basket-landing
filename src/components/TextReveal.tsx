"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  type?: "words" | "chars";
  triggerOnScroll?: boolean;
};

export default function TextReveal({
  children,
  as: Component = "h2",
  className = "",
  delay = 0,
  type = "words",
  triggerOnScroll = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const items = el.querySelectorAll(".text-split-item");
      if (!items.length) return;

      const anim = gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: type === "chars" ? 0.02 : 0.04,
          ease: "power3.out",
          delay,
          scrollTrigger: triggerOnScroll
            ? {
                trigger: el,
                start: "top 88%",
                once: true,
              }
            : undefined,
        }
      );

      return () => {
        anim.kill();
      };
    },
    { scope: containerRef }
  );

  if (type === "chars") {
    return (
      // @ts-expect-error dynamic component tag
      <Component ref={containerRef} className={className}>
        {children.split("").map((char, index) => (
          <span
            key={index}
            className="text-split-item inline-block will-change-transform"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Component>
    );
  }

  const words = children.split(" ");

  return (
    // @ts-expect-error dynamic component tag
    <Component ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="text-split-item inline-block mr-[0.25em] will-change-transform"
        >
          {word}
        </span>
      ))}
    </Component>
  );
}
