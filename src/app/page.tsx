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
  title: "Wispry — Earn rewards. Empower your everyday life.",
  description:
    "A rewards platform designed to help users monetize engagement, track real-time analytics, and build authentic communities.",
  alternates: {
    canonical: "https://wispry.com",
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
