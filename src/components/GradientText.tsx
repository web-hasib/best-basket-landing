type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`bg-[linear-gradient(116deg,#7C3AED_16.06%,#A855F7_83.21%)] bg-clip-text text-transparent box-decoration-clone inline-block pr-[0.1em] ${className}`}
    >
      {children}
    </span>
  );
}
