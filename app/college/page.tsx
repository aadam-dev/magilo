/**
 * College Page (Student Prospectus)
 *
 * Comprehensive information about Magilo Art College including:
 * - Course offerings and curriculum
 * - College advantages (Live Studio model)
 * - Student life preview
 * - FAQs for prospective students
 * - Admission inquiry form
 *
 * Target Audience: Prospective students and parents
 * Goal: Drive admission inquiries
 *
 * @see {@link CollegePreview} - Homepage college section
 * @see {@link CourseCard} - Course display component
 * @see {@link ProspectusPage} - Viewable prospectus at /college/prospectus
 * @see lib/college-data.ts - Shared course and FAQ data
 */

import { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Brush,
  Printer,
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  MapPin,
  MessageCircle,
  Scissors,
  PenTool,
  Monitor,
  Keyboard,
  Shield,
  Baby,
  Paintbrush,
  Type,
  Globe,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { FormEmbed } from "@/components/form-embed";
import {
  artCourses as artCoursesData,
  adultITCourses as adultITCoursesData,
  kidsITCourses as kidsITCoursesData,
  advantages as advantagesData,
  faqItems,
} from "@/lib/college-data";
import { WHATSAPP_LINK_ADMISSION } from "@/lib/site-config";

/**
 * Page-specific metadata for SEO
 * Optimized for art college and vocational training queries
 */
export const metadata: Metadata = {
  title: "Art College, IT Training & Graphic Design School | Adenta, Accra Ghana",
  description: "Established art college & IT training centre in Ghana. Based in Adenta—welcoming students from across Ghana. Graphic design, fine arts, textiles, cartooning, computer literacy, cybersecurity & more. Kids IT classes. 25+ years experience. Enroll now!",
  keywords: [
    "art college Ghana",
    "art college Accra",
    "art school Adenta",
    "graphic design school Ghana",
    "graphic design course Accra",
    "learn graphic design Ghana",
    "vocational training Ghana",
    "vocational training Accra",
    "printing course Ghana",
    "fine arts school Accra",
    "painting classes Ghana",
    "textiles course Ghana",
    "textiles training Accra",
    "cartooning class Ghana",
    "computer literacy Ghana",
    "computer literacy course Accra",
    "IT training Ghana",
    "IT training Accra",
    "IT courses Adenta",
    "data entry course Ghana",
    "Excel training Accra",
    "cybersecurity course Ghana",
    "computer classes for kids Ghana",
    "kids IT training Accra",
    "children computer classes Adenta",
    "digital art for kids Ghana",
    "typing course Ghana",
    "design training Adenta",
    "creative courses Ghana",
    "Adobe training Ghana",
    "Photoshop course Accra",
    "Illustrator training Ghana",
    "entrepreneurship training Ghana",
    "art school Ghana",
    "affordable art college Accra",
    "practical art training Ghana",
    "online safety course kids Ghana",
  ],
  openGraph: {
    title: "Magilo Art College & IT Training - Creative & IT School | Adenta, Accra Ghana",
    description: "Learn graphic design, fine arts, textiles, IT & computer skills at an established art college in Ghana. Kids IT classes, hands-on training, 25+ years experience.",
    url: "https://magilo.com/college",
  },
  alternates: {
    canonical: "https://magilo.com/college",
  },
};

/* Icon arrays for course/advantage cards (order must match lib/college-data) */
const artIcons: LucideIcon[] = [Palette, Brush, Scissors, PenTool, Printer, TrendingUp];
const adultITIcons: LucideIcon[] = [Monitor, Keyboard, Shield];
const kidsITIcons: LucideIcon[] = [Baby, Paintbrush, Type, Globe];
const advantageIcons: LucideIcon[] = [Award, Printer, Users, MapPin];

const artCourses = artCoursesData.map((c, i) => ({ ...c, icon: artIcons[i] }));
const adultITCourses = adultITCoursesData.map((c, i) => ({ ...c, icon: adultITIcons[i] }));
const kidsITCourses = kidsITCoursesData.map((c, i) => ({ ...c, icon: kidsITIcons[i] }));
const advantages = advantagesData.map((a, i) => ({ ...a, icon: advantageIcons[i] }));

/**
 * College page component
 * Full prospectus for Magilo Art College
 */
export default function CollegePage() {
  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/*                         HERO SECTION                                 */}
      {/* -------------------------------------------------------------------- */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block bg-orange/20 text-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
              Student Prospectus
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Magilo Art College & IT Training Centre
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Art. Design. Technology. Train in a live production environment with 25+ years of 
              industry excellence. Courses for adults and kids—from graphic design and textiles 
              to computer literacy and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white font-medium">
                <a href={WHATSAPP_LINK_ADMISSION} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Apply Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-navy font-medium"
              >
                <Link href="/college/prospectus">
                  <FileText className="w-5 h-5 mr-2" />
                  View Prospectus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHS Visual Arts Support (key selling point) ─────────────── */}
      <section className="py-16 bg-orange/10 border-y border-orange/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-orange" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-navy mb-4">
              Specialised Support for High School Visual Arts Students
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Visual arts students often don&apos;t get extra or dedicated classes in school like their 
              colleagues in other programmes. Magilo fills that gap with specialised classes for your 
              project work—so you can ace your exams. Our students do.
            </p>
            <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white">
              <a href={WHATSAPP_LINK_ADMISSION} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Inquire about SHS Visual Arts support
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Art & Design Courses ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Art & Design Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-4">
              Art, Design & Creative Courses
            </h2>
            <p className="text-gray-600">
              Comprehensive training backed by 25+ years of industry experience. From graphic design 
              to textiles, develop the creative skills the market demands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Adult IT Courses ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">IT Training</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-4">
              IT & Computer Skills Courses
            </h2>
            <p className="text-gray-600">
              Practical, beginner-friendly IT courses for adults. Gain essential digital skills 
              for the modern workplace and protect yourself online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adultITCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Kids IT Courses ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">For Ages 6 - 14</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-4">
              IT Courses for Kids
            </h2>
            <p className="text-gray-600">
              Give your child a head start with fun, engaging technology classes. Small class sizes, 
              patient instructors, and a safe learning environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kidsITCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Study at Magilo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-4">
              Why Study at Magilo?
            </h2>
            <p className="text-gray-600">
              Experience education that bridges the gap between theory and practice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="text-center p-6">
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Preview */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">Student Life</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-6">
                More Than Just Classes
              </h2>
              <p className="text-gray-300 mb-6">
                At Magilo, education extends beyond the classroom. Our students are 
                immersed in a creative community that nurtures talent, encourages 
                collaboration, and prepares them for real-world success.
              </p>
              <ul className="space-y-3">
                {[
                  "Work on live client projects",
                  "Build a professional portfolio",
                  "Network with industry professionals",
                  "Access professional printing and design equipment",
                  "Flexible class schedules",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-light to-navy rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Student Activity Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - id for deep link from footer and elsewhere */}
      <section id="faq" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section id="admission" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <FormEmbed
              title="Admission Inquiry"
              description="Interested in joining Magilo Art College? Fill out this form and our admissions team will contact you."
              formType="admission"
            />
          </div>
        </div>
      </section>
    </>
  );
}
