"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GradientText from "@/components/GradientText";

import FormInput from "@/components/FormInput";

export default function EarlyAccessPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    storePreference: "Walmart, Aldi, Target",
    platform: "ios",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save lead locally to localStorage as a demonstration/demo lead collector
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem("bestbasket_early_leads") || "[]");
        existing.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem("bestbasket_early_leads", JSON.stringify(existing));
      } catch {
        // ignore storage error
      }
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="relative min-h-screen bg-[#F8F9FD] text-[#0F172A] py-28 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      {/* Ambient gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,rgba(168,85,247,0.04)_50%,transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-violet-400/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating 3D Accent Objects */}
      <div className="hidden lg:block absolute top-[18%] left-[8%] w-[110px] pointer-events-none opacity-80 animate-floatSlow">
        <Image
          src="/hero-cart-groceries.png"
          alt="Grocery cart"
          width={240}
          height={240}
          className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(124,58,237,0.16)]"
        />
      </div>

      <div className="hidden lg:block absolute bottom-[18%] right-[8%] w-[90px] pointer-events-none opacity-80 animate-floatSlow">
        <Image
          src="/hero-coupon-clean.png"
          alt="Coupon"
          width={200}
          height={200}
          className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(168,85,247,0.18)]"
        />
      </div>

      <div className="relative w-full max-w-xl z-10">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-accent transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(124,58,237,0.12)]">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mb-5">
                  Be the First to <GradientText className="font-serif italic font-medium">Save Smart</GradientText>
                </h1>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Join our exclusive launch cohort. Get instant notifications, early beta builds, and unlocked premium grocery price intelligence.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <FormInput
                  id="name"
                  label="Full Name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                {/* Email Address */}
                <FormInput
                  id="email"
                  label="Email Address"
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                {/* Grid: Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />

                  <FormInput
                    id="location"
                    label="City / State / Zip"
                    required
                    placeholder="e.g. Austin, TX 78701"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                {/* Device Platform Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Primary Device Platform
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, platform: "ios" })}
                      className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                        formData.platform === "ios"
                          ? "bg-accent/10 border-accent text-accent shadow-sm"
                          : "border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Image
                        src="/apple-icon.png"
                        alt="Apple iOS"
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                      <span>iOS (iPhone)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, platform: "android" })}
                      className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                        formData.platform === "android"
                          ? "bg-accent/10 border-accent text-accent shadow-sm"
                          : "border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <svg width="20" height="20" viewBox="0 0 512 512">
                        <path d="M48.2 26.4C44.6 30.6 42.7 36.6 42.7 44.5v423c0 7.9 1.9 13.9 5.5 18.1l2.4 2.2L278.4 260v-8L50.6 24.2l-2.4 2.2z" fill="#00C1A6"/>
                        <path d="M356.9 338.4l-78.5-78.4v-8l78.5-78.4 1.8 1 93 52.8c26.5 15 26.5 39.7 0 54.8l-93 52.8-1.8 3.4z" fill="#FFD400"/>
                        <path d="M278.4 252L50.6 24.2C54.8 19.8 62.5 17 72.8 22.8l284.1 161.4-78.5 67.8z" fill="#00E676"/>
                        <path d="M278.4 260l78.5 78.4-284.1 161.4c-10.3 5.8-18 3-22.2-1.4L278.4 260z" fill="#FF334B"/>
                        <path d="M355.1 335l-76.7-76.7v-6.3l76.7-76.7 1.8 1 93 52.8c12.2 6.9 18.8 16.3 18.8 25.7s-6.6 18.8-18.8 25.7l-93 52.8-1.8-4.6z" fill="#FFC400"/>
                        <path d="M50.6 485.6c-4.2-4.4-6.3-10.7-6.3-18.1v-4c0 7.4 2.1 13.7 6.3 18.1l2.4-2.2-2.4 6.2z" fill="#1A237E" opacity=".2"/>
                        <path d="M449.9 282.8l-94.8 53.8 1.8 3.4 93-52.8c13.2-7.5 19.8-17.5 19.8-27.4-.6 9.4-7.2 18.2-19.8 23z" fill="#BF360C" opacity=".12"/>
                      </svg>
                      <span>Android</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-animated w-full py-4 px-6 rounded-xl text-base font-semibold text-white shadow-md cursor-pointer flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Reserving Your Spot...
                    </span>
                  ) : (
                    <span>Request Early Access Pass</span>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h2 className="font-serif text-3xl font-medium text-slate-900 mb-2">
                You&apos;re On the VIP List!
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. We&apos;ve reserved your early access spot for <strong className="text-slate-900">{formData.location}</strong>. Look out for an invitation at <strong className="text-slate-900">{formData.email}</strong> when rollout begins!
              </p>

              <div className="p-4 bg-accent/5 rounded-2xl border border-accent/15 mb-6 text-left">
                <p className="text-xs font-semibold text-accent mb-1">What to expect next:</p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                  <li>Priority TestFlight / Google Play Beta invite</li>
                  <li>Exclusive early bird store price alerts</li>
                  <li>Free lifetime early adopter tier privileges</li>
                </ul>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Return to BestBasket
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
