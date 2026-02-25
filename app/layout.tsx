/**
 * Root Layout
 * 
 * The root layout component that wraps all pages in the Magilo website.
 * Provides consistent structure including navigation, footer, and
 * floating contact elements.
 * 
 * This file also defines:
 * - Global metadata for SEO
 * - Font configuration (Inter + Montserrat)
 * - JSON-LD structured data for rich search results
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/layouts
 */

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFAB } from "@/components/whatsapp-fab";
import { MobileBottomBar } from "@/components/mobile-bottom-bar";
import { SITE_URL, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL } from "@/lib/site-config";

/* -------------------------------------------------------------------------- */
/*                            FONT CONFIGURATION                               */
/* -------------------------------------------------------------------------- */

/**
 * Inter font for body text
 * Clean, modern sans-serif with excellent readability
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Montserrat font for headings
 * Bold, geometric sans-serif that conveys professionalism
 */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/*                             SITE METADATA                                   */
/* -------------------------------------------------------------------------- */

/**
 * Global metadata configuration
 * Provides SEO-optimized meta tags for search engines and social sharing
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Magilo - 25+ Years Graphic Design, Printing & Web Development | Adenta, Accra Ghana",
    template: "%s | Magilo - Adenta, Accra Ghana",
  },
  description: "Ghana's trusted graphic design & printing company with 25+ years experience. Based in Adenta, Accra—serving clients across Ghana. Professional printing, web design, business plans, pitch decks, billboards, banners, business stationery & consulting services.",
  keywords: [
    // Primary Services
    "graphic design Ghana",
    "graphic design Accra",
    "graphic design Adenta",
    "printing services Ghana",
    "printing services Accra",
    "printing services Adenta",
    "web design Ghana",
    "web design Accra",
    "website development Ghana",
    "website development Accra",
    "web developer Adenta",
    // Specific Services
    "t-shirt printing Accra",
    "t-shirt printing Ghana",
    "billboard printing Ghana",
    "banner printing Accra",
    "business cards Ghana",
    "flyer printing Accra",
    "poster printing Ghana",
    "exam paper printing Ghana",
    "school printing services",
    // Business Services
    "business plan writing Ghana",
    "pitch deck design Accra",
    "investor pitch deck Ghana",
    "data room setup Ghana",
    "ESG assessment Ghana",
    "business research Ghana",
    // Branding
    "logo design Ghana",
    "logo design Accra",
    "brand identity Ghana",
    "corporate branding Accra",
    // Location-based
    "printing near me Adenta",
    "graphic designer near me Accra",
    "best printing company Ghana",
    "affordable printing Accra",
    // Art College
    "art college Ghana",
    "vocational training Accra",
    "graphic design school Ghana",
    // Long-tail
    "25 years graphic design experience Ghana",
    "professional printing hub Adenta",
  ],
  authors: [{ name: "Magilo Art College & Printing Hub" }],
  creator: "Magilo",
  publisher: "Magilo Art College & Printing Hub",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: "Magilo Art College & Printing Hub",
    title: "Magilo - 25+ Years Graphic Design, Printing & Web Development | Adenta, Accra Ghana",
    description: "Ghana's trusted graphic design & printing company with 25+ years experience. Based in Adenta, serving clients across Ghana.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magilo Art College & Printing Hub - 25+ Years of Excellence in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magilo - 25+ Years Graphic Design & Printing | Adenta, Accra Ghana",
    description: "Ghana's trusted graphic design & printing company. Based in Adenta, serving clients across Ghana.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Business Services",
  classification: "Graphic Design, Printing Services, Web Development, Business Consulting",
};

/* -------------------------------------------------------------------------- */
/*                         JSON-LD STRUCTURED DATA                             */
/* -------------------------------------------------------------------------- */

/**
 * JSON-LD structured data for local business
 * Provides rich information to search engines for enhanced search results
 * 
 * Schema types used:
 * - LocalBusiness: For local search visibility
 * - ProfessionalService: For service-based queries
 * - EducationalOrganization: For art college visibility
 * 
 * @see https://schema.org/LocalBusiness
 * @see https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "EducationalOrganization"],
  "@id": SITE_URL,
  name: "Magilo Art College & Printing Hub",
  alternateName: ["Magilo", "Magilo Ghana", "Magilo Adenta"],
  description: "Ghana's trusted graphic design and printing company with over 25 years of experience. Based in Adenta, Accra—offering professional printing, web design, business consulting, and vocational art training to clients across Ghana.",
  url: SITE_URL,
  telephone: [PHONE_PRIMARY, PHONE_SECONDARY],
  email: EMAIL,
  foundingDate: "2001",
  yearEstablished: "2001",
  slogan: "25+ Years of Creative Excellence",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  currenciesAccepted: "GHS",
  paymentAccepted: "Cash, Mobile Money, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Adenta",
    addressLocality: "Adenta",
    addressRegion: "Greater Accra",
    postalCode: "AF 50",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "5.7167",
    longitude: "-0.1667",
  },
  areaServed: { "@type": "Country", name: "Ghana" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Magilo Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Printing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "T-Shirt Printing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Billboard Printing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banner Printing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Cards" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flyer Printing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Poster Printing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exam Paper Printing" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Design Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Business Consulting",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Plan Writing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pitch Deck Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Room Creation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industry Research" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ESG Assessment" } },
        ],
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/magilo",
    "https://www.instagram.com/magilo",
    "https://twitter.com/magilo",
    "https://www.linkedin.com/company/magilo",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

/* -------------------------------------------------------------------------- */
/*                            ROOT LAYOUT COMPONENT                            */
/* -------------------------------------------------------------------------- */

/**
 * Root layout component
 * Wraps all pages with consistent structure and global elements
 * 
 * @param children - Page content to render
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Geo-location meta tags for local SEO */}
        <meta name="geo.region" content="GH-AA" />
        <meta name="geo.placename" content="Adenta, Accra, Ghana" />
        <meta name="geo.position" content="5.7167;-0.1667" />
        <meta name="ICBM" content="5.7167, -0.1667" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />
        
        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#1a365d" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {/* Global navigation */}
        <Navbar />
        
        {/* Main content area with mobile padding for bottom bar */}
        <main className="min-h-screen pb-16 md:pb-0">
          {children}
        </main>
        
        {/* Global footer */}
        <Footer />
        
        {/* Floating contact elements */}
        <WhatsAppFAB />        {/* Desktop only */}
        <MobileBottomBar />   {/* Mobile only */}
      </body>
    </html>
  );
}
