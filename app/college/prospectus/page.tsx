/**
 * Prospectus Page — viewable student prospectus for Magilo Art College.
 * Document-style layout; content sourced from lib/college-data.
 * Sticky bar: Download PDF + Print. Print styles hide site chrome.
 *
 * @see lib/college-data.ts
 * @see app/college/page.tsx (main college page)
 */

import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import {
  artCourses,
  adultITCourses,
  kidsITCourses,
  advantages,
  faqItems,
  studentLifeBullets,
  prospectusCopy,
} from "@/lib/college-data";
import { FAQAccordion } from "@/components/faq-accordion";
import { ProspectusStickyBar } from "@/components/prospectus-sticky-bar";
import { Button } from "@/components/ui/button";
import {
  WHATSAPP_LINK_ADMISSION,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Student Prospectus | Magilo Art College & IT Training",
  description:
    "Official student prospectus for Magilo Art College & IT Training Centre, Adenta. Courses, programmes, FAQs, and how to apply.",
  openGraph: {
    title: "Student Prospectus | Magilo Art College - Adenta, Accra Ghana",
    description:
      "Download or read the Magilo Art College prospectus. Courses in graphic design, IT, and vocational arts.",
    url: "https://magilo.com/college/prospectus",
  },
  alternates: {
    canonical: "https://magilo.com/college/prospectus",
  },
};

const prospectusYear = new Date().getFullYear();

export default function ProspectusPage() {
  return (
    <div className="prospectus-document bg-white">
      <ProspectusStickyBar />

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Cover */}
        <header className="text-center mb-16 print:mb-12">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">
            Student Prospectus
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-2">
            Magilo Art College & IT Training Centre
          </h1>
          <p className="text-gray-500 text-sm">{prospectusYear}</p>
        </header>

        {/* About Magilo */}
        <section className="mb-14 print:break-inside-avoid" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-xl font-bold font-heading text-navy mb-4">
            About Magilo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {prospectusCopy.aboutMagilo}
          </p>
        </section>

        {/* Art & design programmes */}
        <section className="mb-14 print:break-inside-avoid" aria-labelledby="art-heading">
          <h2 id="art-heading" className="text-xl font-bold font-heading text-navy mb-6">
            Art & design programmes
          </h2>
          <ul className="space-y-8">
            {artCourses.map((course) => (
              <li key={course.title} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="text-lg font-semibold font-heading text-navy mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{course.duration}</p>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {course.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* IT courses (adults) */}
        <section className="mb-14 print:break-inside-avoid" aria-labelledby="it-adult-heading">
          <h2 id="it-adult-heading" className="text-xl font-bold font-heading text-navy mb-6">
            IT & computer skills (adults)
          </h2>
          <ul className="space-y-8">
            {adultITCourses.map((course) => (
              <li key={course.title} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="text-lg font-semibold font-heading text-navy mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{course.duration}</p>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {course.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* IT courses (kids) */}
        <section className="mb-14 print:break-inside-avoid" aria-labelledby="it-kids-heading">
          <h2 id="it-kids-heading" className="text-xl font-bold font-heading text-navy mb-6">
            IT courses for kids (ages 6–14)
          </h2>
          <ul className="space-y-8">
            {kidsITCourses.map((course) => (
              <li key={course.title} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="text-lg font-semibold font-heading text-navy mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{course.duration}</p>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {course.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Why Magilo */}
        <section className="mb-14 print:break-inside-avoid" aria-labelledby="why-heading">
          <h2 id="why-heading" className="text-xl font-bold font-heading text-navy mb-6">
            Why study at Magilo?
          </h2>
          <ul className="space-y-4">
            {advantages.map((a) => (
              <li key={a.title}>
                <h3 className="font-semibold font-heading text-navy">{a.title}</h3>
                <p className="text-gray-600 text-sm mt-0.5">{a.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Student life */}
        <section className="mb-14 print:break-inside-avoid" aria-labelledby="student-life-heading">
          <h2 id="student-life-heading" className="text-xl font-bold font-heading text-navy mb-4">
            Student life
          </h2>
          <p className="text-gray-600 text-sm mb-4">{prospectusCopy.studentLifeIntro}</p>
          <ul className="space-y-2">
            {studentLifeBullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14 print:break-inside-avoid" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-bold font-heading text-navy mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Contact & apply */}
        <footer className="pt-6 border-t border-gray-200 print:break-inside-avoid">
          <h2 id="contact-heading" className="text-xl font-bold font-heading text-navy mb-4">
            Contact & apply
          </h2>
          <p className="text-gray-600 text-sm mb-4">{prospectusCopy.contactApply}</p>
          <ul className="text-sm text-gray-600 space-y-1 mb-6">
            <li>
              <strong>Location:</strong> Adenta, Greater Accra, Ghana
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${PHONE_PRIMARY}`} className="text-orange hover:underline">
                {PHONE_PRIMARY_DISPLAY}
              </a>{" "}
              /{" "}
              <a href={`tel:${PHONE_SECONDARY}`} className="text-orange hover:underline">
                {PHONE_SECONDARY_DISPLAY}
              </a>
            </li>
            <li>
              <strong>P.O. Box:</strong> AF 50, Adenta, Ghana
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm" className="bg-orange hover:bg-orange-dark text-white">
              <Link href="/college#admission">Submit admission inquiry</Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a
                href={WHATSAPP_LINK_ADMISSION}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy"
              >
                Contact via WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-gray-500 text-xs mt-6 print:mt-4">
            You can download this prospectus as a PDF from the link at the top of this page, or
            use your browser’s Print function to save as PDF.
          </p>
        </footer>
      </article>
    </div>
  );
}
