/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsla(187, 100%, 50%, 0.1), transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          <span className="text-foreground">Start tracking your </span>
          <span style={{ color: "hsl(187, 100%, 50%)" }}>job search</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join thousands who've landed their dream roles with organized tracking.
        </p>

        {/* CTA Button */}
        <Link 
          to="/add-job"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:gap-4"
          style={{
            background: "linear-gradient(135deg, hsl(187, 100%, 50%), hsl(200, 100%, 45%))",
            color: "white",
            boxShadow: "0 4px 20px hsla(187, 100%, 50%, 0.3)",
          }}
        >
          Get Started Free
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="text-sm text-muted-foreground mt-4">
          No credit card required
        </p>
      </div>
    </section>
  );
}


export default CTASection;