"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is BestBasket and how does it work?",
    answer:
      "BestBasket is an intelligent grocery shopping assistant. It automatically compares prices for items on your shopping list across local grocery stores like Walmart, Aldi, and Kroger, helping you instantly find the biggest total savings.",
  },
  {
    question: "How do store coupons and discounts work?",
    answer:
      "BestBasket compiles verified store coupons and digital manufacturer discounts. You can clip them with a single tap in the app and easily redeem them during checkout at participating stores to maximize your savings.",
  },
  {
    question: "Is BestBasket free to use?",
    answer:
      "Yes! Downloading and using BestBasket to compare prices, browse daily deals, clip coupons, and track your grocery savings is 100% free with no hidden fees or subscriptions required.",
  },
  {
    question: "Which grocery stores are supported?",
    answer:
      "BestBasket supports major national and regional supermarket chains, including Walmart, Aldi, Kroger, Target, and more. We continuously add new regional stores and local grocers based on user demand.",
  },
  {
    question: "Which devices and platforms are currently supported?",
    answer:
      "BestBasket is currently designed and optimized for mobile devices. Stay tuned for both iOS and Android app releases, along with web access.",
  },
  {
    question: "How are my data and privacy protected?",
    answer:
      "We apply industry-standard security and strict privacy protocols. Your personal grocery lists and shopping habits are kept confidential and are never sold to unauthorized third parties.",
  },
];

export default function FAQ() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true,
  });

  useGSAP(
    () => {
      // 1. Reveal header on scroll
      gsap.from(".faq-header", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // 2. Smooth staggered cards entrance on scroll
      gsap.from(".faq-item", {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.85,
        stagger: 0.1,
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

  // Smooth subtle mouse tilt on hover without lifting position
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
      rotationY: x * 0.025,
      rotationX: -y * 0.025,
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

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const midpoint = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, midpoint);
  const col2 = faqs.slice(midpoint);

  const renderCard = (faq: FAQItem, originalIndex: number) => {
    const isOpen = !!openItems[originalIndex];
    return (
      <div
        key={originalIndex}
        ref={(el) => {
          cardsRef.current[originalIndex] = el;
        }}
        onMouseMove={(e) => handleMouseMove(e, originalIndex)}
        onMouseLeave={() => handleMouseLeave(originalIndex)}
        className="faq-item will-change-transform"
      >
        <div
          className={`group relative card-flat rounded-2xl transition-all duration-300 overflow-hidden ${
            isOpen
              ? "border-[#7C3AED]/40 shadow-md shadow-[#7C3AED]/5 bg-white"
              : "hover:border-[#7C3AED]/30 bg-white"
          }`}
        >
          <button
            type="button"
            onClick={() => toggleItem(originalIndex)}
            className="w-full flex items-center justify-between p-6 text-left gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer"
            aria-expanded={isOpen}
          >
            <span className="text-base sm:text-lg font-semibold text-text group-hover:text-accent transition-colors duration-200 leading-snug">
              {faq.question}
            </span>
            <span
              className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-text-muted transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/5 ${
                isOpen ? "rotate-180 text-accent bg-accent/10 border-accent/30" : ""
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-sm sm:text-base text-text-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="faq-header mb-12 sm:mb-16">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find clear answers to common questions about using BestBasket to save money on groceries."
          />
        </div>

        {/* 2-column layout matching the max-w-7xl grid */}
        <div className="grid md:grid-cols-2 gap-5 items-start">
          <div className="space-y-4">
            {col1.map((faq, idx) => renderCard(faq, idx))}
          </div>
          <div className="space-y-4">
            {col2.map((faq, idx) => renderCard(faq, idx + midpoint))}
          </div>
        </div>
      </div>
    </section>
  );
}
