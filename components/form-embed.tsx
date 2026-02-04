/**
 * FormEmbed Component
 * 
 * A placeholder component for embedded contact forms with WhatsApp fallback.
 * Designed to integrate with external form services like Google Forms,
 * Tally, or Typeform.
 * 
 * @component
 * @example
 * <FormEmbed
 *   title="Request a Quote"
 *   description="Tell us about your project"
 *   formType="quote"
 * />
 * 
 * Features:
 * - Form placeholder for external embeds
 * - WhatsApp contact fallback
 * - Context-aware messaging per form type
 * - Responsive design
 * 
 * TODO: Replace placeholder with actual form embed
 * Options: Google Forms, Tally (recommended), Typeform
 * 
 * @see {@link ServicesPage} - Used for quote requests
 * @see {@link CollegePage} - Used for admission inquiries
 * @see {@link AboutPage} - Used for general contact
 */

"use client";

import { MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Props for the FormEmbed component
 */
interface FormEmbedProps {
  /** Form section title */
  title: string;
  /** Form section description */
  description: string;
  /** Type of form - determines WhatsApp message */
  formType: "quote" | "admission" | "contact";
}

/**
 * Pre-filled WhatsApp messages for each form type
 * Provides context-specific conversation starters
 */
const whatsappMessages: Record<FormEmbedProps["formType"], string> = {
  quote: "Hi Magilo, I'd like to get a quote for printing services",
  admission: "Hi Magilo, I'd like to inquire about admission to the college",
  contact: "Hi Magilo, I have a question about your services",
};

/**
 * Form embed component with WhatsApp fallback
 */
export function FormEmbed({ title, description, formType }: FormEmbedProps) {
  /** Generate WhatsApp link with encoded message */
  const whatsappLink = `https://wa.me/233244693327?text=${encodeURIComponent(whatsappMessages[formType])}`;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
      {/* Section header */}
      <h3 className="text-2xl font-bold font-heading text-navy mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* -------------------------------------------------------------------- */}
      {/*                      FORM PLACEHOLDER                                */}
      {/* -------------------------------------------------------------------- */}
      {/* 
        TODO: Replace this placeholder with actual form embed
        
        Recommended: Tally (https://tally.so)
        - Free tier available
        - Beautiful forms
        - Easy embed
        
        Example embed code:
        <iframe 
          data-tally-src="https://tally.so/embed/YOUR_FORM_ID?..." 
          width="100%" 
          height="400" 
          frameBorder="0"
          title="Contact Form"
        />
      */}
      <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-10 text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
          <FileText 
            className="w-8 h-8 text-gray-400" 
            aria-hidden="true"
          />
        </div>
        <p className="text-gray-500 text-sm font-medium">
          Embedded form will appear here
        </p>
        <p className="text-gray-400 text-xs mt-1">
          (Google Forms, Tally, or Typeform)
        </p>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/*                     WHATSAPP ALTERNATIVE                             */}
      {/* -------------------------------------------------------------------- */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>
        
        <p className="text-gray-500 text-sm mb-4">
          Contact us directly via WhatsApp for a faster response
        </p>
        
        <Button 
          asChild 
          className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
        >
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
