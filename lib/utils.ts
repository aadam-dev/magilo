/**
 * Utility Functions
 * 
 * Shared utility functions used throughout the Magilo application.
 * Provides className merging and other common operations.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names with Tailwind CSS class conflict resolution
 * 
 * Combines clsx for conditional class names with tailwind-merge
 * to properly handle Tailwind CSS class conflicts.
 * 
 * @param inputs - Class values to merge (strings, objects, arrays)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * // Basic usage
 * cn("px-4 py-2", "px-6") // => "py-2 px-6"
 * 
 * @example
 * // Conditional classes
 * cn("base-class", isActive && "active-class", { "hover-class": canHover })
 * 
 * @see https://github.com/lukeed/clsx
 * @see https://github.com/dcastil/tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
