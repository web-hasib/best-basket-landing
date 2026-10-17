import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "./(landing)/_components/Hero";
import Features from "./(landing)/_components/Features";
import AppShowcase from "./(landing)/_components/AppShowcase";
import HowItWorks from "./(landing)/_components/HowItWorks";
import Stats from "./(landing)/_components/Stats";
import FAQ from "./(landing)/_components/FAQ";
import CTA from "./(landing)/_components/CTA";
import Footer from "./(landing)/_components/Footer";

export const metadata: Metadata = {
  title: "BestBasket — Smart Grocery Savings & Price Comparison",
  description:
    "Compare grocery prices across nearby stores, clip verified digital coupons, and maximize your family savings with BestBasket.",
  alternates: {
    canonical: "https://bestbasket.app",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <Stats />
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
