/**
 * Homepage
 * 
 * The main landing page for Magilo Art College & Printing Hub.
 * Showcases the company's key services, art college, social proof,
 * and portfolio highlights.
 * 
 * Page Structure:
 * 1. Hero - Primary value proposition and CTAs
 * 2. ServiceGrid - Overview of service categories
 * 3. CollegePreview - Art college promotion
 * 4. TrustBar - Statistics and client logos
 * 5. PortfolioPreview - Featured work samples
 * 
 * @see {@link RootLayout} - Parent layout with nav/footer
 */

import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/components/service-grid";
import { CollegePreview } from "@/components/college-preview";
import { TrustBar } from "@/components/trust-bar";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { SITE_URL } from "@/lib/site-config";

/**
 * Page-specific metadata
 * Overrides defaults from root layout for homepage SEO
 */
export const metadata: Metadata = {
  title: "Magilo - 25+ Years Graphic Design, Printing & Web Development | Adenta, Accra Ghana",
  description: "Ghana's premier graphic design & printing company with 25+ years experience. Based in Adenta, Accra—serving clients across Ghana. Professional printing, web design, business plans, pitch decks, billboards, banners, logo design & business consulting.",
  keywords: [
    "graphic design Ghana",
    "graphic design Accra",
    "printing services Adenta",
    "web design Ghana",
    "website development Accra",
    "t-shirt printing Ghana",
    "billboard printing Accra",
    "business cards Ghana",
    "logo design Accra",
    "pitch deck design Ghana",
    "25 years graphic design Ghana",
  ],
  openGraph: {
    title: "Magilo - 25+ Years Graphic Design, Printing & Web Development | Adenta, Accra Ghana",
    description: "Ghana's trusted graphic design & printing company with 25+ years experience. Based in Adenta, serving clients across Ghana.",
    url: SITE_URL,
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * Homepage component
 * Renders the main landing page with all sections
 */
export default function Home() {
  return (
    <>
      {/* Hero section - Above the fold content */}
      <Hero />
      
      {/* Services overview */}
      <ServiceGrid />
      
      {/* Art college promotion */}
      <CollegePreview />
      
      {/* Social proof - Stats and client logos */}
      <TrustBar />
      
      {/* Portfolio samples */}
      <PortfolioPreview />
    </>
  );
}
