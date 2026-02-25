/**
 * About Page
 * 
 * Company information and contact details for Magilo Art College
 * & Printing Hub. Includes company story, mission/vision/values,
 * contact information, and inquiry form.
 * 
 * Sections:
 * 1. Hero - Page introduction
 * 2. Story - Company history and background
 * 3. Mission/Vision/Values - Core principles
 * 4. Contact - Details and inquiry form
 * 
 * @see {@link Footer} - Additional contact info
 */

import { Metadata } from "next";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Target,
  Eye,
  Heart,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FormEmbed } from "@/components/form-embed";
import {
  WHATSAPP_LINK_CONTACT,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_POSTAL,
} from "@/lib/site-config";

/**
 * Page-specific metadata for SEO
 * Optimized for "about" and contact-related queries
 */
export const metadata: Metadata = {
  title: "About Magilo - 25+ Years Graphic Design & Printing Excellence | Adenta, Accra Ghana",
  description: "Since 2001, Magilo has been Ghana's trusted graphic design & printing company. Based in Adenta, Accra—serving clients across Ghana with professional printing, web design, and business consulting. Visit us or call +233 24 469 3327.",
  keywords: [
    "about Magilo Ghana",
    "graphic design company Adenta",
    "printing company Accra",
    "25 years graphic design Ghana",
    "established printing company Ghana",
    "trusted printing services Adenta",
    "contact Magilo",
    "Magilo location Adenta",
    "printing company near me Accra",
    "graphic designer near me Adenta",
    "creative agency Ghana",
    "design studio Accra",
  ],
  openGraph: {
    title: "About Magilo - 25+ Years of Creative Excellence | Adenta, Accra Ghana",
    description: "Since 2001, Ghana's trusted graphic design & printing company. Based in Adenta, serving clients nationwide.",
    url: "https://magilo.com/about",
  },
  alternates: {
    canonical: "https://magilo.com/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide exceptional printing services while nurturing the next generation of creative professionals through hands-on vocational training.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading creative hub in Ghana, bridging the gap between professional printing services and quality art education.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Quality, integrity, and creativity guide everything we do. We believe in practical education that prepares students for real-world success.",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [ADDRESS_LINE1, ADDRESS_POSTAL],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [PHONE_PRIMARY_DISPLAY, PHONE_SECONDARY_DISPLAY],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [EMAIL],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 4pm"],
  },
];

/**
 * About page component
 * Company information and contact page
 */
export default function AboutPage() {
  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/*                         HERO SECTION                                 */}
      {/* -------------------------------------------------------------------- */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block bg-orange/20 text-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Magilo Art College & Printing Hub
            </h1>
            <p className="text-lg text-gray-200">
              A dual-purpose institution in Adenta providing professional-grade 
              printing and design services while training the next generation of 
              creative entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-6">
                Mastering the Craft, Delivering the Quality
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With <strong>over 25 years in the graphic design industry</strong>, Magilo Art College 
                  & Printing Hub was founded with a unique vision: to create a space where professional 
                  printing services, business consulting, and vocational education work hand in hand.
                </p>
                <p>
                  Located in the heart of Adenta, we&apos;ve grown from a dedicated design studio 
                  into a comprehensive creative and business hub that serves entrepreneurs, corporations, 
                  schools, and individuals across Ghana.
                </p>
                <p>
                  Our over two decades of experience have expanded our offerings to include strategic business 
                  services like web design, pitch deck creation, business plan documentation, and ESG assessments—
                  making us your one-stop partner for both creative and business growth needs.
                </p>
                <p>
                  We also help <strong>high school visual arts students</strong> fill a critical gap: 
                  unlike other programmes, visual arts students often have no extra or dedicated classes 
                  in school. Magilo offers specialised support for their project work, and our students 
                  go on to ace their exams.
                </p>
                <p>
                  What sets us apart is our &ldquo;Live Studio&rdquo; approach to education. Our 
                  students don&apos;t just learn in classrooms—they gain real-world experience 
                  by working on actual client projects, preparing them for successful 
                  careers in the creative industry.
                </p>
              </div>
            </div>
            
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy to-navy-light rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-sm">Magilo Facility</p>
                  </div>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-orange text-white rounded-xl p-6 shadow-xl hidden md:block">
                <div className="text-center">
                  <span className="text-4xl font-bold font-heading">25+</span>
                  <p className="text-sm text-white/80">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Have a question or ready to start a project? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Google Maps Embed</p>
                    <p className="text-xs text-gray-400">Adenta, Greater Accra, Ghana</p>
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-3">For immediate assistance:</p>
                <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <a href={WHATSAPP_LINK_CONTACT} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <FormEmbed
                title="Send Us a Message"
                description="Fill out the form below and we'll get back to you as soon as possible."
                formType="contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
