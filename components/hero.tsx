/**
 * Hero Component
 * 
 * The primary above-the-fold section showcasing Magilo's core value proposition.
 * Features a sophisticated gradient background with geometric decorations,
 * animated entrance effects, and dual call-to-action buttons.
 * 
 * @component
 * @example
 * // Usage in page
 * <Hero />
 * 
 * Design Notes:
 * - Uses custom hero-gradient for brand-aligned background
 * - Geometric patterns add visual interest without distraction
 * - Staggered animations create professional entrance effect
 * - Trust indicators reinforce credibility
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Printer, GraduationCap, CheckCircle2 } from "lucide-react";

/** Trust indicator items displayed below CTAs */
const trustIndicators = [
  { text: "25+ Years Experience", id: "experience" },
  { text: "Trusted by Businesses", id: "trust" },
  { text: "Full-Service Solutions", id: "solutions" },
] as const;

/**
 * Hero section component for the homepage
 * Displays the main headline, value proposition, and primary CTAs
 */
export function Hero() {
  return (
    <section 
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* -------------------------------------------------------------------- */}
      {/*                        BACKGROUND LAYERS                             */}
      {/* -------------------------------------------------------------------- */}
      
      {/* Primary gradient background */}
      <div 
        className="absolute inset-0 hero-gradient" 
        aria-hidden="true"
      />
      
      {/* Geometric pattern overlay for visual texture */}
      <div 
        className="geometric-pattern" 
        aria-hidden="true"
      />
      
      {/* Subtle noise texture for depth */}
      <div 
        className="noise-overlay" 
        aria-hidden="true"
      />
      
      {/* -------------------------------------------------------------------- */}
      {/*                      DECORATIVE ELEMENTS                             */}
      {/* -------------------------------------------------------------------- */}
      
      {/* Animated floating orb - top right */}
      <div 
        className="absolute top-16 right-[10%] w-64 h-64 rounded-full animate-float opacity-30"
        style={{ 
          background: "radial-gradient(circle, var(--color-orange) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "6s"
        }}
        aria-hidden="true"
      />
      
      {/* Animated floating orb - bottom left (positioned lower to avoid content) */}
      <div 
        className="absolute -bottom-20 left-[5%] w-80 h-80 rounded-full animate-float opacity-10"
        style={{ 
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "2s",
          animationDuration: "8s"
        }}
        aria-hidden="true"
      />
      
      {/* Subtle accent line decoration */}
      <div 
        className="absolute top-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-orange/40 to-transparent"
        aria-hidden="true"
      />

      {/* -------------------------------------------------------------------- */}
      {/*                         MAIN CONTENT                                 */}
      {/* -------------------------------------------------------------------- */}
      <div className="container mx-auto px-4 relative z-10 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge - Animated entrance */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm mb-8 border border-white/10 animate-fade-in-down"
          >
            <span 
              className="w-2 h-2 bg-orange rounded-full animate-pulse-subtle" 
              aria-hidden="true"
            />
            <span className="font-medium tracking-wide">
              25+ Years of Creative Excellence
            </span>
          </div>

          {/* Main Headline - Staggered animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 font-heading leading-[1.1] tracking-tight">
            <span className="block animate-fade-in-up">
              Teach. Design. Print. Consult.
            </span>
            <span 
              className="block text-gradient-accent animate-fade-in-up animation-delay-200"
              style={{ WebkitBackgroundClip: "text", color: "var(--color-orange)" }}
            >
              25+ Years of Excellence.
            </span>
          </h1>

          {/* Sub-headline - Delayed entrance */}
          <p className="text-lg md:text-xl text-gray-200/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            We started as an art school. Today we still teach—and we&apos;ve grown into your partner for 
            design, printing, and business consulting.
            <span className="text-white font-medium"> Your trusted partner from concept to completion.</span>
          </p>

          {/* ---------------------------------------------------------------- */}
          {/*                    CALL-TO-ACTION BUTTONS                        */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            {/* Primary CTA - Order Printing */}
            <Button 
              asChild 
              size="lg" 
              className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-lg font-semibold btn-shimmer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange/25"
            >
              <Link href="/services">
                <Printer className="w-5 h-5 mr-2" aria-hidden="true" />
                Order Printing
              </Link>
            </Button>
            
            {/* Secondary CTA - View Courses */}
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-navy px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            >
              <Link href="/college">
                <GraduationCap className="w-5 h-5 mr-2" aria-hidden="true" />
                View Courses
              </Link>
            </Button>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/*                      TRUST INDICATORS                            */}
          {/* ---------------------------------------------------------------- */}
          <div 
            className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white text-sm animate-fade-in-up animation-delay-500"
            aria-label="Trust indicators"
          >
            {trustIndicators.map((indicator) => (
              <div 
                key={indicator.id} 
                className="flex items-center gap-2 transition-colors hover:text-orange"
              >
                <CheckCircle2 
                  className="w-4 h-4 text-orange" 
                  aria-hidden="true"
                />
                <span className="font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom fade gradient for smooth section transition - minimal to avoid covering content */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
