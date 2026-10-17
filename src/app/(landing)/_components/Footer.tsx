import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      // { label: "Testimonials", href: "/#testimonials" },
      { label: "FAQ", href: "/#faq" },
      { label: "Rewards", href: "/#cta" },
    ],
  },
  {
    title: "Support & Help",
    links: [
      { label: "Support Center", href: "/support" },
      { label: "Contact Us", href: "/support" },
      { label: "App Store Help", href: "/support" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "EULA (End User License)", href: "/eula" },
    ],
  },
];

const socialIcons = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/search/top?q=Proceeds%20with%20positivity",
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/proceeds_with_positivity/",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo_full.png"
                alt="BestBasket logo"
                width={170}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
              Compare grocery prices, discover verified store coupons, and track your monthly savings with BestBasket.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-surface/50 text-text-muted hover:text-accent hover:border-accent hover:bg-surface transition-colors duration-200"
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
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-text mb-4">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} BestBasket. All rights reserved.
          </p>
          <p className="text-xs text-text-dim">
            Smart Grocery Savings & Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
