/**
 * Site Configuration
 *
 * Single source of truth for Magilo contact details, URLs, and shared constants.
 * Use this module anywhere phone numbers, WhatsApp links, or contact info are needed
 * so that updates only need to be made in one place.
 *
 * @module site-config
 * @see magiloprojectdetail.md - Contact details from project spec
 */

/* -------------------------------------------------------------------------- */
/*                              CONTACT DETAILS                                */
/* -------------------------------------------------------------------------- */

/** Primary WhatsApp number (Ghana), no spaces. Used for wa.me and tel: links. */
export const PHONE_PRIMARY = "+233244693327";

/** Secondary phone number (Ghana), no spaces. */
export const PHONE_SECONDARY = "+233273636222";

/** Primary phone formatted for display (e.g. footer, navbar). */
export const PHONE_PRIMARY_DISPLAY = "+233 24 469 3327";

/** Secondary phone formatted for display. */
export const PHONE_SECONDARY_DISPLAY = "+233 27 363 6222";

/** E-mail for general inquiries. */
export const EMAIL = "magiloart@gmail.com";

/** Physical address line 1. */
export const ADDRESS_LINE1 = "Adenta, Greater Accra";

/** Postal address. */
export const ADDRESS_POSTAL = "P.O. Box AF 50, Adenta, Ghana";

/** Full address for display (e.g. footer). */
export const ADDRESS_FULL = `${ADDRESS_LINE1}\n${ADDRESS_POSTAL}`;

/** Base URL for the site (used in metadata and canonical links). */
export const SITE_URL = "https://magilo.com";

/* -------------------------------------------------------------------------- */
/*                           WHATSAPP HELPERS                                 */
/* -------------------------------------------------------------------------- */

/**
 * WhatsApp link without a pre-filled message.
 * Use when you want the user to type their own message.
 */
export const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_PRIMARY.replace(/\D/g, "")}`;

/**
 * Build a WhatsApp URL with an optional pre-filled message.
 *
 * @param message - Optional pre-filled message (will be encoded).
 * @returns Full WhatsApp deep link.
 *
 * @example
 * getWhatsAppLink("Hi, I need a quote") // => "https://wa.me/233244693327?text=..."
 */
export function getWhatsAppLink(message?: string): string {
  if (!message) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

/** Default inquiry message for general "Get a Quote" / contact CTAs. */
export const WHATSAPP_MESSAGE_DEFAULT =
  "Hi Magilo, I'm interested in your services";

/** Message for printing/service quote requests. */
export const WHATSAPP_MESSAGE_QUOTE =
  "Hi Magilo, I'd like to get a quote for printing services";

/** Message for college admission inquiries. */
export const WHATSAPP_MESSAGE_ADMISSION =
  "Hi Magilo, I'd like to inquire about admission to the college";

/** Message for portfolio / project discussion. */
export const WHATSAPP_MESSAGE_PORTFOLIO =
  "Hi Magilo, I saw your portfolio and would like to discuss a project";

/** Message for general contact form. */
export const WHATSAPP_MESSAGE_CONTACT =
  "Hi Magilo, I have a question about your services";

/** Message for web project brief / website inquiries. */
export const WHATSAPP_MESSAGE_WEB_BRIEF =
  "Hi Magilo, I'd like to discuss a web design or development project";

/** Pre-built WhatsApp link for default inquiry (used in navbar, FAB, mobile bar). */
export const WHATSAPP_LINK_DEFAULT = getWhatsAppLink(WHATSAPP_MESSAGE_DEFAULT);

/** Pre-built WhatsApp link for quote requests. */
export const WHATSAPP_LINK_QUOTE = getWhatsAppLink(WHATSAPP_MESSAGE_QUOTE);

/** Pre-built WhatsApp link for admission. */
export const WHATSAPP_LINK_ADMISSION = getWhatsAppLink(WHATSAPP_MESSAGE_ADMISSION);

/** Pre-built WhatsApp link for portfolio. */
export const WHATSAPP_LINK_PORTFOLIO = getWhatsAppLink(WHATSAPP_MESSAGE_PORTFOLIO);

/** Pre-built WhatsApp link for general contact. */
export const WHATSAPP_LINK_CONTACT = getWhatsAppLink(WHATSAPP_MESSAGE_CONTACT);

/** Pre-built WhatsApp link for web project brief. */
export const WHATSAPP_LINK_WEB_BRIEF = getWhatsAppLink(WHATSAPP_MESSAGE_WEB_BRIEF);

/* -------------------------------------------------------------------------- */
/*                              ROUTES / ANCHORS                              */
/* -------------------------------------------------------------------------- */

/** Path to the college prospectus page. */
export const ROUTE_PROSPECTUS = "/college/prospectus";

/** Path to college page. */
export const ROUTE_COLLEGE = "/college";

/** Anchor id for FAQ section on college page (for deep links). */
export const ANCHOR_FAQ = "faq";

/** Full URL to college FAQ section. */
export const COLLEGE_FAQ_URL = `${ROUTE_COLLEGE}#${ANCHOR_FAQ}`;
