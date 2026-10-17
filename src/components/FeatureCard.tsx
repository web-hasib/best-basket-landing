type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowColor?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="group relative card-flat card-hover p-5 sm:p-6 rounded-2xl"
    >
      {/* Top subtle rim highlight */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

      {/* Icon container */}
      <div className="w-12 h-12 rounded-xl card-inset flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}

