import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import GradientText from "@/components/GradientText";

export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative card-raised p-12 md:p-20 text-center overflow-hidden rounded-3xl">
            {/* 116deg gradient background overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(116deg,#7C3AED_16.06%,#A855F7_83.21%)] opacity-[0.06] pointer-events-none" />
            {/* glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#7C3AED]/15 blur-[140px] rounded-full pointer-events-none" />

            <h2 className="relative text-3xl md:text-5xl font-bold mb-6 text-text">
              Ready to <GradientText>start earning</GradientText>?
            </h2>
            <p className="relative text-text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Join thousands of users who are already building their
              community and earning rewards on Wispry.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Button href="#" size="lg">
                Create free account
              </Button>
              <Button href="#features" variant="ghost" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
