/**
 * MobileBottomBar Component
 * 
 * A fixed bottom navigation bar for mobile devices providing
 * quick access to call and WhatsApp contact options.
 * Hidden on desktop where WhatsAppFAB is used instead.
 * 
 * @component
 * @example
 * // Usage in layout
 * <MobileBottomBar />
 * 
 * Features:
 * - Fixed bottom positioning
 * - Two-column split layout (Call | WhatsApp)
 * - Safe area inset for devices with home indicators
 * - Accessible with clear labels
 * - Hidden on desktop (md:hidden)
 * 
 * Important: Main content should have bottom padding (pb-16)
 * on mobile to prevent overlap with this bar.
 * 
 * @see {@link WhatsAppFAB} - Desktop equivalent component
 * @see {@link RootLayout} - Where padding is applied
 */

"use client";

import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_DEFAULT, PHONE_PRIMARY } from "@/lib/site-config";

/**
 * Fixed bottom contact bar for mobile devices
 */
export function MobileBottomBar() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/80 safe-area-inset-bottom no-print"
      role="navigation"
      aria-label="Quick contact options"
    >
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        {/* Call button */}
        <a
          href={`tel:${PHONE_PRIMARY}`}
          className="flex items-center justify-center gap-2 py-4 text-navy font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors"
          aria-label="Call Magilo"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        
        {/* WhatsApp button */}
        <a
          href={WHATSAPP_LINK_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-medium hover:bg-[#128C7E] active:bg-[#075E54] transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
