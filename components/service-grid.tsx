/**
 * ServiceGrid Component
 * 
 * Displays the main service categories in a responsive grid layout.
 * This is a key section on the homepage showcasing Magilo's core offerings.
 * 
 * @component
 * @example
 * // Usage on homepage
 * <ServiceGrid />
 * 
 * Features:
 * - Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop
 * - Section heading with decorative accent
 * - Call-to-action button for full services page
 * 
 * @see {@link ServiceCard} - Individual service card component
 */

import Link from "next/link";
import { ServiceCard } from "./service-card";
import { Button } from "@/components/ui/button";
import { Building2, Palette, Expand, Briefcase, ArrowRight } from "lucide-react";

/**
 * Service category data
 * Each service includes icon, title, description, and specific offerings
 */
const services = [
  {
    icon: Building2,
    title: "Corporate & School",
    description: "Professional printing for educational and business needs.",
    items: ["Exam Paper Printing", "Typing & Scanning", "Business Stationery"],
  },
  {
    icon: Palette,
    title: "Branding & Apparel",
    description: "Custom designs for your brand identity.",
    items: ["Custom T-Shirts", "Screen Printing", "Logo Design"],
  },
  {
    icon: Expand,
    title: "Large Format",
    description: "High-impact outdoor advertising solutions.",
    items: ["Billboards", "Event Banners", "Posters"],
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic services for startups and enterprises.",
    items: ["Business Plans", "Pitch Decks", "Web Design"],
  },
] as const;

/**
 * Service grid section component
 * Renders service categories in a responsive grid with header and CTA
 */
export function ServiceGrid() {
  return (
    <section 
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* ---------------------------------------------------------------- */}
        {/*                       SECTION HEADER                             */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Section label */}
          <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-3">
            25+ Years of Excellence
          </span>
          
          {/* Section title */}
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4"
          >
            Printing, Design & Business Services
          </h2>
          
          {/* Section divider */}
          <div className="section-divider mb-6" aria-hidden="true" />
          
          {/* Section description */}
          <p className="text-gray-600 leading-relaxed">
            From business stationery to pitch decks, we bring over two decades of 
            design expertise to every project.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/*                      SERVICE CARDS GRID                          */}
        {/* ---------------------------------------------------------------- */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          role="list"
          aria-label="Service categories"
        >
          {services.map((service, index) => (
            <div 
              key={service.title}
              role="listitem"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/*                     CALL TO ACTION                               */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center">
          <Button 
            asChild 
            className="bg-navy hover:bg-navy-dark text-white font-medium px-8 py-6 btn-shimmer transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
