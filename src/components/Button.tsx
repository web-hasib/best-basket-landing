import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer rounded-xl";

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-3.5 text-base rounded-xl",
  };

  const variants: Record<string, string> = {
    primary:
      "btn-primary-animated text-white hover:opacity-95 shadow-sm active:scale-[0.98]",
    ghost:
      "btn-ghost text-text-muted hover:text-text active:scale-[0.98]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
