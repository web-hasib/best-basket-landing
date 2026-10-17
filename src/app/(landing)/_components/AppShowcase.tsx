"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "@/components/GradientText";

gsap.registerPlugin(ScrollTrigger);

const appTabs = [
  {
    id: "smart-dashboard",
    badge: "Smart Dashboard",
    title: "Everything You Need",
    highlight: "at a Glance",
    description:
      "Track your monthly grocery savings, access quick tools for meal planning and coupons, and get AI-powered smart insights on which local store will save you the most money this week.",
    image: "/screens/Home.png",
  },
  {
    id: "price-comparison",
    badge: "Price Comparison",
    title: "Compare Prices Across",
    highlight: "Local Stores",
    description:
      "Stop overpaying for groceries. Automatically compare your shopping list across up to 3 nearby stores like Walmart, Aldi, and Kroger side-by-side to instantly see which store gives you the highest total savings.",
    image: "/screens/Groceries.png",
  },
  {
    id: "best-prices",
    badge: "Best Prices",
    title: "Find the Lowest Prices",
    highlight: "Near You",
    description:
      "Search and browse daily essentials from milk and eggs to fresh meat. See the cheapest available prices at local stores near you and instantly add items to your cart to lock in the best deals.",
    image: "/screens/Grocery.png",
  },
  {
    id: "instant-coupons",
    badge: "Instant Coupons",
    title: "Find & Clip Store",
    highlight: "Coupons Instantly",
    description:
      "Browse verified deals and digital coupons from your favorite neighborhood stores. Clip them with a single tap and show them at checkout to stack extra savings on top of already low prices.",
    image: "/screens/Coupons.png",
  },
  {
    id: "savings-intelligence",
    badge: "Savings Intelligence",
    title: "Track Your Savings &",
    highlight: "Spending Habits",
    description:
      "Visualize your monthly and yearly savings, review past grocery runs, and analyze your average spending by food category and store so you can shop smarter every month.",
    image: "/screens/Savings.png",
  },
];

const TAB_DURATION_MS = 5000; // 5 seconds per tab slide

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const phoneSlotLeftRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const phoneInnerScrollRef = useRef<HTMLDivElement>(null);
  const sideContentRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile viewport (slides do not auto-change on mobile)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Transition handler with smooth fade in/out
  const changeTabWithTransition = useCallback((nextIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(nextIndex);
      setProgress(0);
      if (phoneInnerScrollRef.current) {
        phoneInnerScrollRef.current.scrollTop = 0;
      }
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 220);
  }, []);

  const goToNext = useCallback(() => {
    changeTabWithTransition((activeTab + 1) % appTabs.length);
  }, [activeTab, changeTabWithTransition]);

  const goToPrev = useCallback(() => {
    changeTabWithTransition((activeTab - 1 + appTabs.length) % appTabs.length);
  }, [activeTab, changeTabWithTransition]);

  const selectTab = useCallback((idx: number) => {
    if (idx === activeTab) return;
    changeTabWithTransition(idx);
  }, [activeTab, changeTabWithTransition]);

  // Auto-scroll active tab within the tabs container only (strictly prevents window/viewport horizontal scroll)
  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeBtn = tabButtonsRef.current[activeTab];
    if (container && activeBtn) {
      const scrollOffset =
        activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  // Carousel timer with continuous progress updates (DESKTOP ONLY — disabled on mobile)
  useEffect(() => {
    if (isPaused || isMobile) return;

    const intervalStep = 50; // update every 50ms
    const stepIncrement = (intervalStep / TAB_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, isMobile, goToNext]);

  // Smooth scroll pinned animation for Desktop only
  useGSAP(
    () => {
      const container = containerRef.current;
      const phone = phoneWrapperRef.current;
      const hero = heroContentRef.current;
      const slotLeft = phoneSlotLeftRef.current;
      const side = sideContentRef.current;

      if (!container || !phone || !hero || !slotLeft || !side) return;

      const mm = gsap.matchMedia();

      // DESKTOP PINNED TIMELINE
      mm.add("(min-width: 1024px)", () => {
        const calculateOffsets = () => {
          const phoneRect = phone.getBoundingClientRect();
          const slotRect = slotLeft.getBoundingClientRect();
          const deltaX = slotRect.left + slotRect.width / 2 - (phoneRect.left + phoneRect.width / 2);
          const deltaY = slotRect.top + slotRect.height / 2 - (phoneRect.top + phoneRect.height / 2);
          return { deltaX, deltaY };
        };

        gsap.set(phone, { x: 0, y: 0, scale: 1 });
        gsap.set(hero, { opacity: 1, y: 0 });
        gsap.set(side, { opacity: 0, x: 40, pointerEvents: "none" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=160%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Hero text & buttons fade out
        tl.to(
          hero,
          {
            opacity: 0,
            y: -50,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        );

        // 2. Phone glides smoothly into the left slot
        tl.to(
          phone,
          {
            x: () => calculateOffsets().deltaX,
            y: () => calculateOffsets().deltaY,
            duration: 1,
            ease: "power2.inOut",
          },
          0.1
        );

        // 3. Clean right side content reveals
        tl.to(
          side,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            pointerEvents: "auto",
          },
          0.45
        );
      });

      // MOBILE & TABLET: Reset transforms, natural flow, completely unpinned
      mm.add("(max-width: 1023px)", () => {
        gsap.set(phone, { clearProps: "all" });
        gsap.set(hero, { clearProps: "all" });
        gsap.set(side, { clearProps: "all", opacity: 1, x: 0, pointerEvents: "auto" });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const currentTab = appTabs[activeTab];

  return (
    <div
      ref={containerRef}
      id="app-screens"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0D0D12] via-[#101017] to-[#0D0D12]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(234,128,80,0.06)_0%,rgba(219,66,185,0.04)_45%,transparent_75%)] blur-[140px] pointer-events-none" />

      {/* FULL VIEWPORT ON DESKTOP, NATURAL FLOW ON MOBILE */}
      <div className="w-full relative lg:h-screen flex flex-col justify-center px-4 sm:px-6 max-w-7xl mx-auto z-10 select-none py-12 lg:py-0 overflow-hidden lg:overflow-visible">

        {/* ========================================================= */}
        {/* PHASE 1: DESKTOP PINNED INTRO HERO BANNER                */}
        {/* ========================================================= */}
        <div
          ref={heroContentRef}
          className="hidden lg:block absolute top-8 sm:top-12 left-0 right-0 text-center max-w-3xl mx-auto px-4 z-20 pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Smart Grocery Intelligence
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4 leading-tight">
            The All-new AI Powered{" "}
            <GradientText className="font-serif italic">BestBasket is Here</GradientText>
          </h2>

          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Experience a seamless, intelligent shopping companion built to compare prices,
            clip digital coupons, and maximize your weekly grocery savings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24" />
              </svg>
              <span>App Store</span>
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.61-.836c-.19-.44-.29-.915-.29-1.404V4.054c0-.49.1-1.01.29-1.45.16-.38.37-.62.61-.79zm11.233 11.234l2.585 2.585-11.8 6.772 9.215-9.357zm2.585-2.586l-2.585 2.586-9.215-9.358 11.8 6.772zm1.045 1.046l2.94 1.69a1.59 1.59 0 0 1 0 2.76l-2.94 1.69-2.096-2.07 2.096-2.07z" />
              </svg>
              <span>Google Play</span>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE SECTION HEADER (Shown on Mobile only)              */}
        {/* ========================================================= */}
        <div className="block lg:hidden text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-accent text-[11px] font-semibold uppercase tracking-wider mb-3">
            Smart Grocery Intelligence
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2 leading-snug">
            The All-new AI Powered{" "}
            <GradientText className="font-serif italic">BestBasket</GradientText>
          </h2>
          <p className="text-text-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Experience a seamless, intelligent shopping companion built to compare prices,
            clip digital coupons, and maximize your weekly grocery savings.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MAIN SHOWCASE GRID: Responsive column layout             */}
        {/* ========================================================= */}
        <div className="w-full min-w-0 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Target Left Slot for Phone on Desktop */}
          <div
            ref={phoneSlotLeftRef}
            className="hidden lg:flex lg:col-span-5 justify-center items-center pointer-events-none opacity-0"
          >
            <div className="w-[300px] sm:w-[320px] h-[610px]" />
          </div>

          {/* Clean Right Side Content */}
          <div
            ref={sideContentRef}
            className="w-full min-w-0 lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-6 z-30"
          >
            {/* ========================================================= */}
            {/* TABS: COMPACT TEXT & TIGHT GAP WITH HORIZONTAL SCROLL    */}
            {/* ========================================================= */}
            <div
              ref={tabsContainerRef}
              className="w-full min-w-0 flex items-center gap-3 sm:gap-4 mb-6 pb-2 overflow-x-auto no-scrollbar scroll-smooth"
            >
              {appTabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                const isPassed = activeTab > idx;

                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabButtonsRef.current[idx] = el;
                    }}
                    onClick={() => selectTab(idx)}
                    className="group relative pb-1 text-left cursor-pointer transition-all duration-300 bg-transparent border-0 p-0 focus:outline-none shrink-0"
                  >
                    {/* Plain Text Title */}
                    <span
                      className={`block text-[11px] sm:text-xs font-medium tracking-normal whitespace-nowrap transition-colors duration-300 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-text-muted/70 hover:text-white/80"
                      }`}
                    >
                      {tab.badge}
                    </span>

                    {/* Clean Progress Bar Under the Text */}
                    <div className="absolute -bottom-[2px] inset-x-0 h-[1.5px] rounded-full bg-white/10 overflow-hidden">
                      {isActive && (
                        <div
                          className={`h-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] rounded-full shadow-[0_0_8px_rgba(124,58,237,0.5)] ${
                            isMobile ? "w-full" : "transition-all duration-75 ease-linear"
                          }`}
                          style={isMobile ? undefined : { width: `${progress}%` }}
                        />
                      )}
                      {isPassed && !isMobile && (
                        <div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] opacity-40 rounded-full w-full" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Fade In/Out Container for Headline & Description */}
            <div
              className={`w-full min-w-0 transition-all duration-300 ease-out transform ${
                isAnimating
                  ? "opacity-0 translate-y-3 scale-[0.985]"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {/* Clean, Punchy Headline */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-medium text-white mb-3 leading-tight break-words">
                {currentTab.title}{" "}
                <GradientText className="font-serif italic inline">{currentTab.highlight}</GradientText>
              </h3>

              <p className="text-text-muted text-xs sm:text-sm lg:text-base leading-relaxed mb-6 max-w-lg min-h-[44px] break-words">
                {currentTab.description}
              </p>

              {/* MOBILE PHONE DISPLAY (Shown in-line between text and CTAs on small screens) */}
              <div className="block lg:hidden my-6 w-full flex justify-center overflow-hidden">
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="w-[260px] sm:w-[280px] max-w-full cursor-pointer mx-auto"
                >
                  <div className="relative w-full h-[520px] sm:h-[580px] bg-[#141419] rounded-[42px] p-[9px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.1)] border-[3px] border-[#2A2A34]">
                    {/* iPhone Screen Area */}
                    <div className="relative w-full h-full bg-[#0D0D12] rounded-[34px] overflow-hidden flex flex-col">
                      {/* Dynamic Island Pill */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                        <div className="w-[76px] h-[18px] bg-black rounded-full flex items-center justify-between px-2 shadow-sm border border-white/5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a20]" />
                          <div className="w-1 h-1 rounded-full bg-[#111119]" />
                        </div>
                      </div>

                      {/* Phone screen image */}
                      <div
                        className={`relative w-full h-full overflow-y-auto overscroll-contain phone-scrollbar select-none transition-all duration-300 ease-in-out ${
                          isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
                        }`}
                      >
                        <Image
                          key={`mobile-${currentTab.image}`}
                          src={currentTab.image}
                          alt={currentTab.title}
                          width={1170}
                          height={2532}
                          className="w-full h-auto block select-none pointer-events-none"
                          priority
                          unoptimized
                        />
                      </div>
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 w-24 h-1 bg-white/40 rounded-full pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA & PREV / NEXT NAVIGATION CONTROLS */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                {/* Previous and Next Carousel Arrows */}
                <div className="flex items-center gap-2 pr-3 border-r border-white/10">
                  <button
                    type="button"
                    onClick={goToPrev}
                    title="Previous screen"
                    aria-label="Previous screen"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-white/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={goToNext}
                    title="Next screen"
                    aria-label="Next screen"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-white/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm text-white btn-primary-animated hover:opacity-95 shadow-md shadow-[#7C3AED]/25 transition-all hover:scale-105"
                >
                  <span>Get Started Free</span>
                </a>

                <a
                  href="#features"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-text-muted hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform transition-transform group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP FLOATING/PINNED IPHONE MOCKUP (Visible on lg+)    */}
        {/* ========================================================= */}
        <div
          ref={phoneWrapperRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-[-200px] sm:bottom-[-230px] w-[290px] sm:w-[320px] z-30 pointer-events-auto will-change-transform cursor-pointer"
        >
          <div className="relative">
            {/* iPhone 16 Pro Frame */}
            <div className="relative w-full h-[580px] sm:h-[610px] bg-[#141419] rounded-[48px] p-[10px] sm:p-[11px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.1)] border-[3.5px] border-[#2A2A34]">
              {/* Physical buttons */}
              <div className="absolute -left-[6px] top-[105px] w-[3px] h-[24px] bg-[#353540] rounded-l-sm" />
              <div className="absolute -left-[6px] top-[145px] w-[3px] h-[44px] bg-[#353540] rounded-l-sm" />
              <div className="absolute -left-[6px] top-[200px] w-[3px] h-[44px] bg-[#353540] rounded-l-sm" />
              <div className="absolute -right-[6px] top-[160px] w-[3px] h-[66px] bg-[#353540] rounded-r-sm" />

              {/* iPhone Screen Area */}
              <div className="relative w-full h-full bg-[#0D0D12] rounded-[38px] overflow-hidden flex flex-col">
                {/* Dynamic Island Pill */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                  <div className="w-[88px] h-[22px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-[#1a1a20] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#000000]" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111119] border border-blue-900/40" />
                  </div>
                </div>

                {/* Scrollable Viewport Container: Long image scrolls smoothly with fade in/out */}
                <div
                  ref={phoneInnerScrollRef}
                  className={`relative w-full h-full overflow-y-auto overscroll-contain phone-scrollbar select-none transition-all duration-300 ease-in-out ${
                    isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
                  }`}
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <div className="relative w-full">
                    <Image
                      key={currentTab.image}
                      src={currentTab.image}
                      alt={currentTab.title}
                      width={1170}
                      height={2532}
                      className="w-full h-auto block select-none pointer-events-none"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                {/* iOS Home Indicator Bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 w-28 h-1 bg-white/40 rounded-full backdrop-blur-sm pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        {/* Search Engine Crawlable Content for All App Showcase Tabs */}
        <div className="sr-only">
          <h2>BestBasket Application Features & App Screens</h2>
          {appTabs.map((tab) => (
            <article key={tab.id}>
              <h3>
                {tab.title} {tab.highlight}
              </h3>
              <p>{tab.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
