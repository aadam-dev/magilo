/**
 * PortfolioGrid Component
 * 
 * A filterable, interactive portfolio gallery with lightbox functionality.
 * Displays project work in a responsive grid with category filtering
 * and detailed view modal.
 * 
 * @component
 * @example
 * <PortfolioGrid 
 *   items={portfolioItems} 
 *   categories={["Print Work", "Apparel", "Fine Art"]} 
 * />
 * 
 * Features:
 * - Category filtering with smooth transitions
 * - Hover effects with project details overlay
 * - Lightbox modal for detailed viewing
 * - Keyboard accessible (Escape to close modal)
 * - Responsive grid layout
 * 
 * @see {@link PortfolioPage} - Parent page component
 */

"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";

/**
 * Portfolio item data structure
 */
interface PortfolioItem {
  /** Unique identifier */
  id: number;
  /** Project title */
  title: string;
  /** Category for filtering */
  category: string;
  /** Brief project description */
  description: string;
}

/**
 * Props for the PortfolioGrid component
 */
interface PortfolioGridProps {
  /** Array of portfolio items to display */
  items: PortfolioItem[];
  /** Available filter categories */
  categories: string[];
}

/**
 * Portfolio grid with filtering and lightbox functionality
 */
export function PortfolioGrid({ items, categories }: PortfolioGridProps) {
  /** Currently active filter category */
  const [activeCategory, setActiveCategory] = useState("All");
  
  /** Currently selected item for lightbox view */
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  /** Filter items based on active category */
  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  /**
   * Close the lightbox modal
   * Memoized for use in event listeners
   */
  const closeLightbox = useCallback(() => {
    setSelectedItem(null);
  }, []);

  /**
   * Handle keyboard events for accessibility
   * Close lightbox on Escape key press
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedItem) {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, closeLightbox]);

  /**
   * Prevent body scroll when lightbox is open
   */
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/*                        FILTER TABS                                   */}
      {/* -------------------------------------------------------------------- */}
      <div 
        className="flex flex-wrap justify-center gap-2 mb-12"
        role="tablist"
        aria-label="Filter portfolio by category"
      >
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls="portfolio-grid"
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-navy text-white shadow-md shadow-navy/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* -------------------------------------------------------------------- */}
      {/*                       PORTFOLIO GRID                                 */}
      {/* -------------------------------------------------------------------- */}
      <div 
        id="portfolio-grid"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="tabpanel"
      >
        {filteredItems.map((item, index) => (
          <article
            key={item.id}
            className="group relative aspect-square bg-gradient-to-br from-navy to-navy-light rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedItem(item)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title} project details`}
          >
            {/* Image placeholder - replace with actual images */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/30">
                <svg 
                  className="w-16 h-16 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>

            {/* Hover overlay with project details */}
            <div className="image-overlay opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-orange font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold font-heading mt-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Zoom icon indicator */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <ZoomIn className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            
            {/* Subtle border glow on hover */}
            <div 
              className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange/30 transition-colors duration-300"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>

      {/* -------------------------------------------------------------------- */}
      {/*                      LIGHTBOX MODAL                                  */}
      {/* -------------------------------------------------------------------- */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div 
            className="relative max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-14 right-0 w-10 h-10 flex items-center justify-center text-white/60 hover:text-orange rounded-full hover:bg-white/10 transition-all duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main image container */}
            <div className="aspect-video bg-gradient-to-br from-navy to-navy-light rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white/30">
                  <svg 
                    className="w-24 h-24 mx-auto mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                  <p className="text-sm">Image: {selectedItem.title}</p>
                </div>
              </div>
            </div>

            {/* Project details caption */}
            <div className="mt-6 text-white">
              <span className="text-xs text-orange font-semibold uppercase tracking-wider">
                {selectedItem.category}
              </span>
              <h3 
                id="lightbox-title"
                className="text-2xl font-bold font-heading mt-1"
              >
                {selectedItem.title}
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
