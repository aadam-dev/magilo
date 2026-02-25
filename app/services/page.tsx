/**
 * Services Page
 * 
 * Comprehensive listing of all Magilo services organized by category.
 * Features detailed service cards with descriptions and WhatsApp
 * contact links for each service.
 * 
 * Service Categories:
 * 1. Educational & Corporate Printing
 * 2. Branding & Large Format
 * 3. Apparel & Custom Merchandise
 * 4. Business Consulting & Strategy
 * 
 * @see {@link ServiceGrid} - Homepage services overview
 */

import { Metadata } from "next";
import { 
  FileText, 
  Printer, 
  ScanLine, 
  FileSpreadsheet,
  Palette,
  Shirt,
  Layers,
  Image,
  RectangleHorizontal,
  Flag,
  FileImage,
  MessageCircle,
  Briefcase,
  Globe,
  Presentation,
  FolderOpen,
  Search,
  Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FormEmbed } from "@/components/form-embed";
import { WHATSAPP_LINK_QUOTE } from "@/lib/site-config";

/**
 * Page-specific metadata for SEO
 * Optimized for printing and design service queries
 */
export const metadata: Metadata = {
  title: "Printing, Graphic Design, Web Development & Business Consulting Services | Adenta, Accra Ghana",
  description: "25+ years of professional printing & graphic design in Ghana. Based in Adenta, Accra—serving clients across Ghana. T-shirt printing, billboards, banners, web design, business plans, pitch decks, digital marketing. Professional printing company Ghana.",
  keywords: [
    "printing services Adenta",
    "printing services Accra",
    "printing services Ghana",
    "t-shirt printing Accra",
    "t-shirt printing Ghana",
    "billboard printing Ghana",
    "banner printing Accra",
    "poster printing Ghana",
    "flyer printing Accra",
    "business cards printing Ghana",
    "letterhead printing Accra",
    "exam paper printing Ghana",
    "school printing services Accra",
    "web design Ghana",
    "web design Accra",
    "website development Ghana",
    "website development Accra",
    "web developer Adenta",
    "business plan writing Ghana",
    "pitch deck design Accra",
    "pitch deck Ghana",
    "data room setup Ghana",
    "digital marketing consultancy Ghana",
    "business research Ghana",
    "graphic design services Accra",
    "logo design Ghana",
    "brand identity Accra",
    "silk screen printing Ghana",
    "heat transfer printing Accra",
    "large format printing Ghana",
    "affordable printing Adenta",
    "professional printing company Ghana",
    "professional printing Accra",
  ],
  openGraph: {
    title: "Printing, Design & Business Services | 25+ Years Experience | Magilo Ghana",
    description: "Professional printing, web design, and business consulting services. Based in Adenta, serving clients across Ghana. T-shirts, billboards, business plans, pitch decks and more.",
    url: "https://magilo.com/services",
  },
  alternates: {
    canonical: "https://magilo.com/services",
  },
};

const serviceCategories = [
  {
    title: "Educational & Corporate Printing",
    description: "Professional-grade printing for schools and businesses",
    icon: FileText,
    services: [
      {
        icon: FileSpreadsheet,
        name: "School Examination Papers",
        description: "Secure, confidential, and high-volume printing for basic and secondary schools. Trusted by institutions like Divine International School.",
      },
      {
        icon: FileText,
        name: "General Stationery",
        description: "Letterheads, business cards, envelopes, and customized notebooks for your professional needs.",
      },
      {
        icon: ScanLine,
        name: "Office Support",
        description: "Professional typing, document scanning, and high-speed photocopying services.",
      },
    ],
  },
  {
    title: "Branding & Large Format",
    description: "High-impact advertising and event materials",
    icon: RectangleHorizontal,
    services: [
      {
        icon: Image,
        name: "Outdoor Advertising",
        description: "Design and printing of high-visibility billboards and banners that capture attention.",
      },
      {
        icon: Flag,
        name: "Event Material",
        description: "Posters, flyers, brochures, and funeral program booklets for all occasions.",
      },
      {
        icon: FileImage,
        name: "Marketing Collateral",
        description: "Professional brochures, catalogs, and promotional materials for your business.",
      },
    ],
  },
  {
    title: "Apparel & Custom Merchandise",
    description: "Custom branding for any occasion",
    icon: Shirt,
    services: [
      {
        icon: Shirt,
        name: "T-Shirt Design",
        description: "Custom branding for schools, churches, corporate events, and personal celebrations.",
      },
      {
        icon: Layers,
        name: "Silk Screen Printing",
        description: "Expert silk screen printing for bulk orders with vibrant, long-lasting results.",
      },
      {
        icon: Printer,
        name: "Heat Transfer",
        description: "Precision heat transfer printing for detailed designs and photo-quality prints.",
      },
    ],
  },
  {
    title: "Business Consulting & Strategy",
    description: "Strategic services backed by 25+ years of industry experience",
    icon: Briefcase,
    services: [
      {
        icon: Globe,
        name: "Web Design & Development",
        description: "Modern, responsive websites that establish your digital presence and drive business growth.",
      },
      {
        icon: FileText,
        name: "Business Plan Documentation",
        description: "Comprehensive business plans crafted to secure funding, guide strategy, and attract investors.",
      },
      {
        icon: Presentation,
        name: "Pitch Decks",
        description: "Compelling investor pitch decks that tell your story and showcase your value proposition.",
      },
      {
        icon: FolderOpen,
        name: "Data Room Creation",
        description: "Organized, professional data rooms for due diligence, fundraising, and M&A transactions.",
      },
      {
        icon: Search,
        name: "Industry & Business Research",
        description: "In-depth market research, competitive analysis, and industry insights to inform strategic decisions.",
      },
      {
        icon: Megaphone,
        name: "Digital Marketing Consultancy",
        description: "Strategy and support to grow your brand online—social media, content, and campaigns tailored to your business.",
      },
    ],
  },
];

/**
 * Services page component
 * Displays all services organized by category with detailed descriptions
 */
export default function ServicesPage() {
  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/*                         HERO SECTION                                 */}
      {/* -------------------------------------------------------------------- */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block bg-orange/20 text-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
              25+ Years of Excellence
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Printing, Design & Business Services
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Backed by over over two decades in the graphic design industry, we offer 
              comprehensive solutions from professional printing to strategic business 
              consulting. Expert team, proven results.
            </p>
            <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white">
              <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get a Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          key={category.title}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center">
                <category.icon className="w-7 h-7 text-orange" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-navy">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <Card key={service.name} className="group hover:shadow-lg transition-all border-gray-200 hover:border-orange/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-colors">
                      <service.icon className="w-6 h-6 text-navy group-hover:text-orange transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-navy mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <a 
                      href={WHATSAPP_LINK_QUOTE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-orange hover:text-orange-dark font-medium transition-colors"
                    >
                      Get Quote
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-orange mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-white mb-6 font-medium">
              &ldquo;Magilo handled our school&apos;s end-of-term exams with total confidentiality 
              and perfect timing. Their attention to detail and reliability is unmatched.&rdquo;
            </blockquote>
            <div className="text-gray-300">
              <p className="font-semibold">School Administrator</p>
              <p className="text-sm">Divine International School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <FormEmbed
              title="Request a Quote"
              description="Tell us about your printing needs and we'll get back to you with a custom quote."
              formType="quote"
            />
          </div>
        </div>
      </section>

      {/* Web Project Brief Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <FormEmbed
              title="Web Project Brief"
              description="Planning a website? Fill out our web project brief so we can understand your needs and get back to you with a tailored proposal."
              formType="webProjectBrief"
            />
          </div>
        </div>
      </section>
    </>
  );
}
