"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "App", href: "/#app-screens" },
  { label: "How it works", href: "/#how-it-works" },
  // { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useGSAP(
    () => {
      const nav = navRef.current;
      if (!nav) return;

      gsap.fromTo(
        nav,
        { backgroundColor: "rgba(248,249,253,0)" },
        {
          backgroundColor: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(12px)",
          borderBottomColor: "rgba(226,232,240,0.8)",
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "80px top",
            scrub: true,
          },
        }
      );
    },
    { scope: navRef }
  );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_full.png"
            alt="BestBasket logo"
            width={160}
            height={38}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/#cta" size="sm">
            Get started
          </Button>
        </div>

        {/* mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-bg border-b border-border transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-text transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/#cta"
            size="sm"
            onClick={() => setMobileOpen(false)}
          >
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
}
