"use client";

import React, { createContext, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type EarlyAccessContextType = {
  isOpen: boolean;
  openModal: (source?: string) => void;
  closeModal: () => void;
};

const EarlyAccessContext = createContext<EarlyAccessContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useEarlyAccess = () => useContext(EarlyAccessContext);

export function EarlyAccessProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string>("App Store");

  const openModal = (src = "App Store") => {
    setSource(src);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <EarlyAccessContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {/* Coming Soon Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with smooth blur */}
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-md bg-white/80 rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(124,58,237,0.25)] z-10 text-center overflow-hidden animate-scaleUp">
            {/* Ambient inner gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.18)_0%,transparent_70%)] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* 3D floating icon in modal */}
            <div className="relative mx-auto mb-5 w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/15 rounded-2xl blur-md" />
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/logo_icon.png"
                  alt="BestBasket App Icon"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>


            {/* Title & Description */}
            <h3 className="font-serif text-3xl font-semibold text-slate-900 mb-4">
              Coming Soon!
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              BestBasket is putting final touches on intelligent grocery price comparisons and automated coupon clipping. 
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/early-access"
                onClick={closeModal}
                className="btn-primary-animated w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-md cursor-pointer block text-center"
              >
                <span>Get Early Access</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <button
                onClick={closeModal}
                className="w-full py-2.5 px-4 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </EarlyAccessContext.Provider>
  );
}
