/**
 * FAQAccordion Component
 * 
 * An accessible accordion component for displaying frequently asked questions.
 * Built on top of Radix UI's accordion primitive via shadcn/ui.
 * 
 * @component
 * @example
 * const faqItems = [
 *   { question: "What are the fees?", answer: "Fees vary by program..." }
 * ];
 * <FAQAccordion items={faqItems} />
 * 
 * Features:
 * - Single item expansion (collapsible)
 * - Smooth open/close animations
 * - Keyboard accessible
 * - Brand-colored hover states
 * 
 * Accessibility:
 * - Uses proper ARIA attributes (via Radix)
 * - Keyboard navigation support
 * - Focus management
 * 
 * @see {@link CollegePage} - Used for college FAQs
 */

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ item data structure
 */
interface FAQItem {
  /** The question text */
  question: string;
  /** The answer text */
  answer: string;
}

/**
 * Props for the FAQAccordion component
 */
interface FAQAccordionProps {
  /** Array of FAQ items to display */
  items: FAQItem[];
}

/**
 * FAQ accordion component for displaying questions and answers
 */
export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full space-y-3"
    >
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-orange/30 data-[state=open]:shadow-sm transition-all duration-200"
        >
          <AccordionTrigger 
            className="text-left font-heading text-navy hover:text-orange py-5 text-base hover:no-underline [&[data-state=open]]:text-orange transition-colors"
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
