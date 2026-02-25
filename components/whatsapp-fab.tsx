/**
 * WhatsAppFAB Component
 * 
 * A floating action button (FAB) for quick WhatsApp contact.
 * Positioned fixed at the bottom-right corner of the viewport,
 * visible only on desktop devices (hidden on mobile where
 * MobileBottomBar provides similar functionality).
 * 
 * @component
 * @example
 * // Usage in layout
 * <WhatsAppFAB />
 * 
 * Features:
 * - Fixed positioning with high z-index
 * - Smooth hover and focus animations
 * - Pre-filled WhatsApp message
 * - Accessible with proper ARIA label
 * - Hidden on mobile (uses MobileBottomBar instead)
 * 
 * @see {@link MobileBottomBar} - Mobile equivalent component
 */

"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_DEFAULT } from "@/lib/site-config";

/**
 * Floating WhatsApp contact button for desktop
 */
export function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_LINK_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] group no-print"
      aria-label="Chat with us on WhatsApp"
    >
      {/* WhatsApp icon with subtle animation */}
      <MessageCircle 
        className="w-7 h-7 transition-transform group-hover:scale-105" 
        aria-hidden="true"
      />
      
      {/* Pulse animation ring */}
      <span 
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
        style={{ animationDuration: "2s" }}
        aria-hidden="true"
      />
    </a>
  );
}
