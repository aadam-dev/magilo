/**
 * Portfolio Page
 * 
 * Gallery showcasing Magilo's professional work and student artwork.
 * Features a filterable grid with lightbox viewing and category-based
 * organization.
 * 
 * Categories:
 * - Billboards: Large format outdoor advertising
 * - T-Shirts: Custom apparel and merchandise
 * - Print Work: Business stationery, exam papers, brochures
 * - Fine Art: Student artwork and paintings
 * 
 * @see {@link PortfolioGrid} - Gallery grid component
 * @see {@link PortfolioPreview} - Homepage portfolio section
 */

import { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK_PORTFOLIO } from "@/lib/site-config";

/**
 * Page-specific metadata for SEO
 * Optimized for portfolio and design work queries
 */
export const metadata: Metadata = {
  title: "Portfolio - Printing, Design & Web Development Projects | Magilo Ghana",
  description: "View 25+ years of graphic design excellence. Billboards, t-shirts, banners, business cards, websites & more. Quality work from our studio in Adenta—serving clients across Ghana.",
  keywords: [
    "graphic design portfolio Ghana",
    "printing portfolio Accra",
    "billboard designs Ghana",
    "t-shirt printing examples Accra",
    "banner design samples Ghana",
    "business card designs Accra",
    "web design portfolio Ghana",
    "logo design examples Accra",
    "brand identity portfolio Ghana",
    "best graphic design work Ghana",
    "printing samples Adenta",
    "creative portfolio Accra",
  ],
  openGraph: {
    title: "Portfolio - 25+ Years of Graphic Design & Printing Excellence | Magilo Ghana",
    description: "Explore our portfolio of billboards, t-shirts, banners, websites, and more. Quality design work—serving clients across Ghana.",
    url: "https://magilo.com/portfolio",
  },
  alternates: {
    canonical: "https://magilo.com/portfolio",
  },
};

const categories = ["Billboards", "T-Shirts", "Print Work", "Fine Art"];

const portfolioItems = [
  {
    id: 1,
    title: "Divine School Exam Papers",
    category: "Print Work",
    description: "High-volume exam paper printing with secure handling",
  },
  {
    id: 2,
    title: "Church Anniversary T-Shirts",
    category: "T-Shirts",
    description: "Custom silk screen printed apparel for 500+ members",
  },
  {
    id: 3,
    title: "Real Estate Billboard",
    category: "Billboards",
    description: "Large format outdoor advertising for property developer",
  },
  {
    id: 4,
    title: "Student Portrait Series",
    category: "Fine Art",
    description: "Oil on canvas portraits by graduating students",
  },
  {
    id: 5,
    title: "Corporate Event Banners",
    category: "Billboards",
    description: "Pull-up banners and stage backdrop for annual conference",
  },
  {
    id: 6,
    title: "School Sports Day Jerseys",
    category: "T-Shirts",
    description: "Full team kit with custom numbering and logos",
  },
  {
    id: 7,
    title: "Business Stationery Suite",
    category: "Print Work",
    description: "Complete brand identity package - cards, letterheads, envelopes",
  },
  {
    id: 8,
    title: "Abstract Landscape",
    category: "Fine Art",
    description: "Acrylic mixed media artwork exploring Ghanaian scenery",
  },
  {
    id: 9,
    title: "Product Launch Banner",
    category: "Billboards",
    description: "Eye-catching promotional material for retail store opening",
  },
  {
    id: 10,
    title: "Wedding Program Booklets",
    category: "Print Work",
    description: "Elegant custom-designed ceremony programs",
  },
  {
    id: 11,
    title: "Charity Run T-Shirts",
    category: "T-Shirts",
    description: "Breathable sports fabric with heat transfer printing",
  },
  {
    id: 12,
    title: "Cultural Heritage Painting",
    category: "Fine Art",
    description: "Traditional Ghanaian motifs in contemporary style",
  },
];

/**
 * Portfolio page component
 * Full gallery with filterable grid and lightbox
 */
export default function PortfolioPage() {
  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/*                         HERO SECTION                                 */}
      {/* -------------------------------------------------------------------- */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block bg-orange/20 text-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Portfolio Gallery
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore our collection of printing projects, branded merchandise, 
              and student artwork. Each piece represents our commitment to quality 
              and creativity.
            </p>
            <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white">
              <a href={WHATSAPP_LINK_PORTFOLIO} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Project
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <PortfolioGrid items={portfolioItems} categories={categories} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you need professional printing services or want to showcase your 
              creative work, we&apos;re here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white">
                <a href={WHATSAPP_LINK_PORTFOLIO} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get a Quote
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                <a href="/services">View Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
