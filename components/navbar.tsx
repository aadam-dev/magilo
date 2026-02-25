/**
 * Navbar Component
 * 
 * The primary navigation component for the Magilo website.
 * Features a sticky header with glass-morphism effect, responsive design,
 * and mobile-friendly slide-out menu.
 * 
 * @component
 * @example
 * // Usage in layout
 * <Navbar />
 * 
 * Features:
 * - Sticky positioning with backdrop blur
 * - Responsive navigation (desktop links + mobile sheet)
 * - WhatsApp CTA integration for quick contact
 * - Accessible navigation with proper ARIA labels
 * 
 * @see {@link Sheet} - Mobile menu component from shadcn/ui
 */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { MagiloLogo } from "@/components/magilo-logo";
import { WHATSAPP_LINK_DEFAULT, PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY } from "@/lib/site-config";

/**
 * Navigation link configuration
 * Each link includes href for routing and label for display
 */
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/college", label: "The College" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
] as const;

/**
 * Primary navigation component
 * Handles both desktop and mobile navigation patterns
 */
export function Navbar() {
  /** Controls mobile menu open/close state */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-100/50 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 transition-all duration-300 no-print"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between py-4">

          {/* ---------------------------------------------------------------- */}
          {/*                             LOGO                                 */}
          {/* ---------------------------------------------------------------- */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Magilo - Home"
          >
            <MagiloLogo width={180} className="transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* ---------------------------------------------------------------- */}
          {/*                     DESKTOP NAVIGATION                           */}
          {/* ---------------------------------------------------------------- */}
          <nav
            className="hidden md:flex items-center space-x-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy transition-colors duration-200 rounded-lg hover:bg-gray-50 group"
              >
                {link.label}
                {/* Animated underline on hover */}
                <span
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* ---------------------------------------------------------------- */}
          {/*                       DESKTOP CTA                                */}
          {/* ---------------------------------------------------------------- */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-orange hover:bg-orange-dark text-white font-medium btn-shimmer transition-all duration-300 hover:shadow-md hover:shadow-orange/20"
            >
              <a
                href={WHATSAPP_LINK_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a quote via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                Get a Quote
              </a>
            </Button>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/*                        MOBILE MENU                               */}
          {/* ---------------------------------------------------------------- */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6 text-navy" aria-hidden="true" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[380px] bg-white border-l border-gray-100"
            >
              {/* Accessible title for screen readers (visually hidden) */}
              <SheetTitle className="sr-only">
                Navigation menu
              </SheetTitle>
              {/* Mobile menu header */}
              <div className="flex items-center mb-8">
                <MagiloLogo width={160} />
              </div>

              {/* Mobile navigation links */}
              <nav
                className="flex flex-col space-y-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-navy hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-6 mt-4 border-t border-gray-100">
                  <Button
                    asChild
                    className="w-full bg-orange hover:bg-orange-dark text-white font-medium py-6"
                  >
                    <a
                      href={WHATSAPP_LINK_DEFAULT}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                      Get a Quote
                    </a>
                  </Button>

                  {/* Additional contact info */}
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Or call us at{" "}
                    <a
                      href={`tel:${PHONE_PRIMARY}`}
                      className="text-navy font-medium hover:text-orange transition-colors"
                    >
                      {PHONE_PRIMARY_DISPLAY}
                    </a>
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
