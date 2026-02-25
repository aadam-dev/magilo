"use client";

import Link from "next/link";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROSPECTUS_PDF_PATH = "/magilo-prospectus.pdf";

/**
 * Sticky bar for the prospectus page: Download PDF + Print.
 * Shown at top of viewport on scroll; hidden when printing.
 */
export function ProspectusStickyBar() {
  return (
    <div
      className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80 print:hidden"
      role="banner"
      aria-label="Prospectus actions"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 px-4">
        <Button asChild size="sm" className="bg-orange hover:bg-orange-dark text-white">
          <a
            href={PROSPECTUS_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download prospectus as PDF"
          >
            <Download className="w-4 h-4 mr-2" aria-hidden="true" />
            Download PDF
          </a>
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-navy text-navy hover:bg-navy hover:text-white"
          onClick={() => window.print()}
          aria-label="Print or save as PDF"
        >
          <Printer className="w-4 h-4 mr-2" aria-hidden="true" />
          Print prospectus
        </Button>
        <Link
          href="/college"
          className="text-sm text-gray-600 hover:text-orange font-medium underline underline-offset-2"
        >
          Back to College
        </Link>
      </div>
    </div>
  );
}
