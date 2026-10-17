"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 12400, suffix: "+", label: "Active users" },
  { value: 2.8, suffix: "M", label: "Total earned", prefix: "$", decimals: 1 },
  { value: 98, suffix: "%", label: "Satisfaction rate" },
  { value: 45, suffix: "+", label: "Countries" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const counters = sectionRef.current?.querySelectorAll("[data-counter]");
      if (!counters) return;

      counters.forEach((el) => {
        const target = parseFloat(el.getAttribute("data-counter") || "0");
        const decimals = parseInt(
          el.getAttribute("data-decimals") || "0",
          10
        );
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";

        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            const display =
              decimals > 0
                ? obj.val.toFixed(decimals)
                : Math.floor(obj.val).toLocaleString();
            el.textContent = `${prefix}${display}${suffix}`;
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p
                data-counter={stat.value}
                data-suffix={stat.suffix}
                data-prefix={stat.prefix || ""}
                data-decimals={stat.decimals || 0}
                className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(116deg,#7C3AED_16.06%,#A855F7_83.21%)] drop-shadow-[0_4px_12px_rgba(168,85,247,0.15)] mb-2"
              >
                0
              </p>
              <p className="text-text-muted text-sm font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
