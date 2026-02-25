/**
 * FormEmbed Component
 *
 * Embeds Google Forms by type (contact, admission, quote, webProjectBrief)
 * with WhatsApp fallback. Uses iframes for Google Forms.
 *
 * @see {@link ServicesPage} - Quote + Web project brief
 * @see {@link CollegePage} - Admission
 * @see {@link AboutPage} - General contact
 */

"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getWhatsAppLink,
  WHATSAPP_MESSAGE_QUOTE,
  WHATSAPP_MESSAGE_ADMISSION,
  WHATSAPP_MESSAGE_CONTACT,
  WHATSAPP_MESSAGE_WEB_BRIEF,
} from "@/lib/site-config";

/** Supported form types and their Google Form embed URLs + iframe height. */
const FORM_CONFIG = {
  contact: {
    src: "https://docs.google.com/forms/d/e/1FAIpQLSfFADkhH5EPlyFmH4-Vcm2HL1wOtO-xXLV93QX7A1OoTu3jKA/viewform?embedded=true",
    height: 800,
  },
  admission: {
    src: "https://docs.google.com/forms/d/e/1FAIpQLSdtKvmdmYD05xveRBMOPBelkgloc02HLevZuOm83HxOglvgYQ/viewform?embedded=true",
    height: 2395,
  },
  quote: {
    src: "https://docs.google.com/forms/d/e/1FAIpQLSfN2hy8CL4OeYC2sf-zCBwPnFbXnjVgN3-swe1gR2sHZ-auAA/viewform?embedded=true",
    height: 1778,
  },
  webProjectBrief: {
    src: "https://docs.google.com/forms/d/e/1FAIpQLSeAwkX1uUjUZ0btv1bRpZMsBthhYJUMTQv71c1ftgcj27M7jg/viewform?embedded=true",
    height: 1132,
  },
} as const;

export type FormEmbedType = keyof typeof FORM_CONFIG;

interface FormEmbedProps {
  title: string;
  description: string;
  formType: FormEmbedType;
}

const whatsappMessages: Record<FormEmbedType, string> = {
  quote: WHATSAPP_MESSAGE_QUOTE,
  admission: WHATSAPP_MESSAGE_ADMISSION,
  contact: WHATSAPP_MESSAGE_CONTACT,
  webProjectBrief: WHATSAPP_MESSAGE_WEB_BRIEF,
};

export function FormEmbed({ title, description, formType }: FormEmbedProps) {
  const whatsappLink = getWhatsAppLink(whatsappMessages[formType]);
  const { src, height } = FORM_CONFIG[formType];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
      <h3 className="text-2xl font-bold font-heading text-navy mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-6">
        <iframe
          src={src}
          width="100%"
          height={height}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title={title}
          className="min-h-[400px] w-full max-w-full"
        >
          Loading…
        </iframe>
      </div>

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
