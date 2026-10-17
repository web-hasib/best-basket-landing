import TextReveal from "./TextReveal";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-16 ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold text-accent mb-3 bg-accent/5 px-3.5 py-1 rounded-full">
          {label}
        </span>
      )}
      <TextReveal
        as="h2"
        className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text mb-4"
      >
        {title}
      </TextReveal>
      {description && (
        <p className="text-text-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
