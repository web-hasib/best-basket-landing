import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    // Fancy Multi-layer Wallet & Digital Coin SVG with built-in gradient
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="walletGrad1" x1="2" y1="6" x2="30" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="coinGrad" x1="16" y1="2" x2="28" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C084FC" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        {/* Floating Currency Coin popping from top */}
        <circle cx="21" cy="7" r="5" stroke="url(#coinGrad)" strokeWidth="1.8" fill="rgba(124,58,237,0.15)" />
        <path d="M21 5.2V8.8M19.5 6.2H22.2C22.6 6.2 22.8 6.5 22.8 6.8C22.8 7.2 22.5 7.4 22 7.4H20C19.5 7.4 19.2 7.6 19.2 8C19.2 8.4 19.5 8.7 20 8.7H22.5" stroke="url(#coinGrad)" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Wallet Main Body */}
        <rect x="3" y="10" width="26" height="18" rx="4.5" stroke="url(#walletGrad1)" strokeWidth="1.8" fill="rgba(124,58,237,0.06)" />
        <path d="M3 15H29" stroke="url(#walletGrad1)" strokeWidth="1.4" strokeDasharray="2 2" />
        {/* Wallet Clasp / Biometric Sensor */}
        <rect x="20" y="17" width="9" height="6.5" rx="2" stroke="url(#walletGrad1)" strokeWidth="1.6" fill="#161622" />
        <circle cx="24.5" cy="20.2" r="1.2" fill="url(#walletGrad1)" />
      </svg>
    ),
    glowColor: "hover:border-[#7C3AED]/30 hover:shadow-[0_4px_20px_rgba(124,58,237,0.12)]",
    title: "Earnings & wallet",
    description:
      "Track your earnings in real time with a built-in digital wallet. Withdraw anytime with flexible payout options.",
  },
  {
    // Fancy Multi-layer Trophy Shield & Gamified Star Badge SVG with gradient
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="badgeGrad1" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="gemGrad" x1="10" y1="8" x2="22" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.6" stopColor="#C084FC" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        {/* Outer Laurel / Polygon Shield */}
        <path
          d="M16 3L27 7.5V15C27 21.5 22.3 26.8 16 29C9.7 26.8 5 21.5 5 15V7.5L16 3Z"
          stroke="url(#badgeGrad1)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="rgba(168,85,247,0.06)"
        />
        {/* Inner Faceted Gem / Diamond Star */}
        <path
          d="M16 8.5L19.5 13H23L19.8 16.5L21.2 21.5L16 18.2L10.8 21.5L12.2 16.5L9 13H12.5L16 8.5Z"
          stroke="url(#gemGrad)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="rgba(139,92,246,0.18)"
        />
        <circle cx="16" cy="15.2" r="1.5" fill="#FFFFFF" />
      </svg>
    ),
    glowColor: "hover:border-[#A855F7]/30 hover:shadow-[0_4px_20px_rgba(168,85,247,0.12)]",
    title: "Badges & achievements",
    description:
      "Unlock exclusive badges as you hit milestones. Show off your progress and build credibility in the community.",
  },
  {
    // Fancy Interconnected User Hub / Constellation Network SVG with gradient
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="communityGrad1" x1="3" y1="4" x2="29" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="orbitRays" x1="10" y1="10" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* Orbit Connection lines */}
        <path d="M16 7L7 18M16 7L25 18M7 18L25 18M16 7V26M7 18L16 26M25 18L16 26" stroke="url(#orbitRays)" strokeWidth="1.2" strokeDasharray="2 2" />
        
        {/* Top Primary Node */}
        <circle cx="16" cy="7" r="3.5" stroke="url(#communityGrad1)" strokeWidth="1.8" fill="rgba(6,182,212,0.2)" />
        <circle cx="16" cy="7" r="1.2" fill="#FFFFFF" />
        
        {/* Left User Node */}
        <circle cx="7" cy="18" r="3" stroke="url(#communityGrad1)" strokeWidth="1.8" fill="rgba(139,92,246,0.2)" />
        
        {/* Right User Node */}
        <circle cx="25" cy="18" r="3" stroke="url(#communityGrad1)" strokeWidth="1.8" fill="rgba(139,92,246,0.2)" />
        
        {/* Bottom Central Hub Node */}
        <circle cx="16" cy="26" r="3.5" stroke="url(#communityGrad1)" strokeWidth="1.8" fill="rgba(6,182,212,0.25)" />
        <circle cx="16" cy="26" r="1.2" fill="#06B6D4" />
      </svg>
    ),
    glowColor: "hover:border-[#06B6D4]/20 hover:shadow-[0_4px_20px_rgba(6,182,212,0.06)]",
    title: "Community support",
    description:
      "Connect with like-minded users. Share strategies, support each other, and grow your network together.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Features"
            title="Everything you need to succeed"
            description="Powerful tools designed to help users earn more and build stronger communities."
            className="mb-10 sm:mb-12"
          />
        </AnimatedSection>

        <AnimatedSection
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5"
          stagger={0.12}
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              glowColor={feature.glowColor}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
