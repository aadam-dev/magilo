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
 */

import { Metadata } from "next";
import { 
  Palette, 
  Brush, 
  Printer, 
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  MapPin,
  Download,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { FormEmbed } from "@/components/form-embed";

/**
 * Page-specific metadata for SEO
 * Optimized for art college and vocational training queries
 */
export const metadata: Metadata = {
  title: "Art College & Graphic Design School | Vocational Training | Adenta, Accra Ghana",
  description: "Best art college in Ghana. Learn graphic design, fine arts, printing & entrepreneurship at Magilo Art College, Adenta. Hands-on training with 30+ years industry experience. Enroll now!",
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
    "design training Adenta",
    "creative courses Ghana",
    "Adobe training Ghana",
    "Photoshop course Accra",
    "Illustrator training Ghana",
    "entrepreneurship training Ghana",
    "art education Accra",
    "best art school Ghana",
    "affordable art college Accra",
    "practical art training Ghana",
  ],
  openGraph: {
    title: "Magilo Art College - Best Graphic Design & Art School | Adenta, Accra Ghana",
    description: "Learn graphic design, fine arts & printing at Ghana's premier art college. Hands-on training, real client projects, 30+ years experience.",
    url: "https://magilo.com/college",
  },
  alternates: {
    canonical: "https://magilo.com/college",
  },
};

const courses = [
  {
    icon: Palette,
    title: "Graphic Design & Digital Art",
    description: "Master industry-standard design software, layout theory, and digital illustration techniques.",
    highlights: [
      "Adobe Creative Suite mastery",
      "UI/UX design principles",
      "Brand identity development",
      "Digital illustration",
    ],
    duration: "12 months",
  },
  {
    icon: Brush,
    title: "Fine Arts & Painting",
    description: "Develop traditional techniques in sketching, color theory, and canvas painting.",
    highlights: [
      "Drawing fundamentals",
      "Color theory & mixing",
      "Portrait & landscape",
      "Mixed media art",
    ],
    duration: "12 months",
  },
  {
    icon: Printer,
    title: "Industrial Printing (Vocational)",
    description: "Hands-on training in silk screen printing and large-format machine operation.",
    highlights: [
      "Screen printing techniques",
      "Large format printing",
      "Machine maintenance",
      "Quality control",
    ],
    duration: "6 months",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship in Art",
    description: "Learn how to manage a print shop and monetize your creative skills.",
    highlights: [
      "Business planning",
      "Marketing for creatives",
      "Client management",
      "Financial literacy",
    ],
    duration: "3 months",
  },
];

const advantages = [
  {
    icon: Award,
    title: "Live Studio Advantage",
    description: "Train in a functioning print shop, working on real client projects every day.",
  },
  {
    icon: Printer,
    title: "Industry-Standard Tools",
    description: "Access to professional scanning, printing, and design hardware.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from working professionals with years of industry experience.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Conveniently based in the heart of Adenta, easily accessible.",
  },
];

const faqItems = [
  {
    question: "What are the admission requirements?",
    answer: "We accept students with basic education (BECE) or higher. No prior art experience is required for most courses. A passion for creativity and willingness to learn are the most important qualities we look for.",
  },
  {
    question: "How long are the courses?",
    answer: "Course duration varies: Graphic Design and Fine Arts are 12-month programs, Industrial Printing is a 6-month vocational course, and Entrepreneurship is a 3-month add-on module. Flexible scheduling is available.",
  },
  {
    question: "What are the fees and payment options?",
    answer: "Tuition fees vary by program. We offer flexible payment plans including monthly installments. Contact our admissions office for current fee schedules and available scholarships.",
  },
  {
    question: "Do students get to work on real projects?",
    answer: "Yes! Our unique Live Studio model means students work on actual client projects as part of their training. This provides invaluable real-world experience and portfolio pieces.",
  },
  {
    question: "What certification do graduates receive?",
    answer: "Graduates receive a Magilo Art College certificate upon completion. Our programs also prepare students for industry-recognized certifications in relevant software and techniques.",
  },
  {
    question: "Is job placement assistance provided?",
    answer: "Yes, we provide career guidance and job placement support. Many graduates find employment in our partner businesses or start their own creative ventures with our entrepreneurship training.",
  },
];

/** WhatsApp contact link with admission-specific message */
const whatsappLink = "https://wa.me/233244693327?text=Hi%20Magilo,%20I'd%20like%20to%20inquire%20about%20admission%20to%20the%20college";

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
              The Magilo Art College
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Train in a live production environment where students don&apos;t just read 
              about design—they see it printed, pressed, and delivered to real clients 
              every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Apply Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                <Download className="w-5 h-5 mr-2" />
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mt-2 mb-4">
              Course Offerings
            </h2>
            <p className="text-gray-600">
              Comprehensive training programs designed to prepare you for a successful career in the creative industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
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
                  "Access state-of-the-art equipment",
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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
