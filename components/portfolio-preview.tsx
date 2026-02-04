/**
 * PortfolioPreview Component
 * 
 * A homepage section showcasing featured portfolio items.
 * Displays a grid of selected projects with hover effects
 * and links to the full portfolio page.
 * 
 * @component
 * @example
 * // Usage on homepage
 * <PortfolioPreview />
 * 
 * Features:
 * - Responsive 4-column grid (stacks on mobile)
 * - Hover-reveal project details
 * - Category labels with brand color
 * - Call-to-action to full portfolio
 * 
 * @see {@link PortfolioGrid} - Full portfolio grid component
 * @see {@link PortfolioPage} - Complete portfolio page
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Featured portfolio items for homepage preview
 * Curated selection representing different service categories
 */
const portfolioItems = [
  {
    id: "exam-papers",
    title: "Exam Papers",
    category: "Print Work",
    description: "Neatly printed examination papers",
  },
  {
    id: "event-tshirt",
    title: "Event T-Shirt",
    category: "Apparel",
    description: "Custom branded apparel",
  },
  {
    id: "billboard",
    title: "Billboard Design",
    category: "Large Format",
    description: "High-impact outdoor advertising",
  },
  {
    id: "fine-art",
    title: "Fine Art Painting",
    category: "Student Work",
    description: "Student creative artwork",
  },
] as const;

/**
 * Portfolio preview section for homepage
 */
export function PortfolioPreview() {
  return (
    <section 
      className="py-24 bg-white"
      aria-labelledby="portfolio-preview-heading"
    >
      <div className="container mx-auto px-4">
        {/* ---------------------------------------------------------------- */}
        {/*                       SECTION HEADER                             */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Our Work
          </span>
          <h2 
            id="portfolio-preview-heading"
            className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4"
          >
            Featured Portfolio
          </h2>
          <div className="section-divider mb-6" aria-hidden="true" />
          <p className="text-gray-600 leading-relaxed">
            A showcase of our professional printing projects and student artwork.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/*                      PORTFOLIO GRID                               */}
        {/* ---------------------------------------------------------------- */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          role="list"
          aria-label="Featured portfolio items"
        >
          {portfolioItems.map((item, index) => (
            <Link
              key={item.id}
              href="/portfolio"
              className="group relative aspect-square bg-gradient-to-br from-navy to-navy-light rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up block"
              style={{ animationDelay: `${index * 75}ms` }}
              role="listitem"
            >
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/25">
                  <svg 
                    className="w-14 h-14 mx-auto" 
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
              </div>

              {/* Hover overlay with project details */}
              <div className="image-overlay opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-orange font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Border highlight on hover */}
              <div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange/30 transition-colors duration-300"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/*                        CALL TO ACTION                             */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center">
          <Button 
            asChild 
            className="bg-navy hover:bg-navy-dark text-white font-medium px-8 py-6 btn-shimmer transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
          >
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
