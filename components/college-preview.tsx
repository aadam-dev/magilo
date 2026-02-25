/**
 * CollegePreview Component
 * 
 * A promotional section highlighting Magilo Art College's unique value proposition.
 * Features a two-column layout with content and visual elements,
 * emphasizing the "Live Studio" advantage.
 * 
 * @component
 * @example
 * // Usage on homepage
 * <CollegePreview />
 * 
 * Features:
 * - Responsive two-column layout (stacked on mobile)
 * - Animated floating decorative elements
 * - Benefits checklist with brand-colored icons
 * - Floating stats card with course count
 * - Dual CTA buttons
 * 
 * @see {@link CollegePage} - Full college page
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Download } from "lucide-react";

/**
 * Key benefits of studying at Magilo Art College
 * Displayed as a checklist to highlight unique selling points
 */
const benefits = [
  "Specialised Support for SHS Visual Arts — ace your project work and exams",
  "Hands-on Graphic Design Training",
  "Master Industrial Printing Machines",
  "Entrepreneurship Coaching for Artists",
  "Real Client Projects Experience",
] as const;

/**
 * College preview section component
 * Promotes the art college with compelling copy and visuals
 */
export function CollegePreview() {
  return (
    <section 
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="college-preview-heading"
    >
      {/* Subtle background decoration */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange/5 to-transparent rounded-bl-full"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ---------------------------------------------------------------- */}
          {/*                        TEXT CONTENT                              */}
          {/* ---------------------------------------------------------------- */}
          <div className="lg:pr-8">
            {/* Section label */}
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-3">
              The Magilo Advantage
            </span>
            
            {/* Section heading */}
            <h2 
              id="college-preview-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-6 leading-tight"
            >
              Learn Where the Industry Happens
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Why study elsewhere when you can train in a live production environment? 
              Our students don&apos;t just read about design—they see it printed, 
              pressed, and delivered to real clients every day.
            </p>
            
            {/* Benefits checklist */}
            <ul 
              className="space-y-4 mb-10"
              aria-label="Benefits of studying at Magilo"
            >
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 group"
                >
                  <span className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                    <CheckCircle 
                      className="w-4 h-4 text-orange" 
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-orange hover:bg-orange-dark text-white font-medium btn-shimmer transition-all duration-300 hover:shadow-lg hover:shadow-orange/20"
              >
                <Link href="/college">
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-navy text-navy hover:bg-navy hover:text-white font-medium transition-all duration-300"
              >
                <Link href="/college/prospectus">
                  <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                  View Prospectus
                </Link>
              </Button>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/*                      IMAGE SECTION                               */}
          {/* ---------------------------------------------------------------- */}
          <div className="relative lg:pl-8">
            {/* Main image container */}
            <div className="aspect-[4/3] bg-gradient-to-br from-navy via-navy to-navy-light rounded-2xl overflow-hidden relative shadow-2xl shadow-navy/20">
              
              {/* Geometric pattern overlay */}
              <div className="geometric-pattern opacity-50" aria-hidden="true" />
              
              {/* Animated decorative orbs */}
              <div 
                className="absolute top-6 right-6 w-24 h-24 bg-orange/40 rounded-full blur-2xl animate-float"
                style={{ animationDuration: "5s" }}
                aria-hidden="true"
              />
              <div 
                className="absolute bottom-12 left-8 w-36 h-36 bg-white/10 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "1.5s", animationDuration: "7s" }}
                aria-hidden="true"
              />
              
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <svg 
                      className="w-14 h-14 opacity-60" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-white/60 font-medium">Student in Live Studio</p>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div 
                className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-orange/40 rounded-tl-2xl"
                aria-hidden="true"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl p-5 hidden md:block card-hover border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange to-orange-light rounded-xl flex items-center justify-center shadow-lg shadow-orange/30">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Specialized</p>
                  <p className="font-bold text-navy text-lg">Courses</p>
                </div>
              </div>
            </div>
            
            {/* Additional floating element */}
            <div 
              className="absolute -top-4 -right-4 lg:-right-8 w-16 h-16 bg-navy rounded-xl flex items-center justify-center shadow-lg hidden lg:flex"
              aria-hidden="true"
            >
              <span className="text-3xl font-bold text-orange">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
