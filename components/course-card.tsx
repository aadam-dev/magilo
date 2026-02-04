/**
 * CourseCard Component
 * 
 * Displays a single course offering with icon, title, description,
 * duration, and curriculum highlights. Used on the college page
 * to showcase available programs.
 * 
 * @component
 * @example
 * <CourseCard
 *   icon={Palette}
 *   title="Graphic Design"
 *   description="Master design software and principles"
 *   highlights={["Adobe Suite", "UI/UX", "Branding"]}
 *   duration="12 months"
 * />
 * 
 * Features:
 * - Animated top border accent
 * - Duration badge (optional)
 * - Curriculum highlights list
 * - Hover lift effect
 * 
 * @see {@link CollegePage} - Parent page component
 */

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Props for the CourseCard component
 */
interface CourseCardProps {
  /** Lucide icon representing the course */
  icon: LucideIcon;
  /** Course title */
  title: string;
  /** Brief course description */
  description: string;
  /** Key curriculum topics */
  highlights: string[];
  /** Course duration (optional) */
  duration?: string;
}

/**
 * Course card component for displaying program offerings
 */
export function CourseCard({ 
  icon: Icon, 
  title, 
  description, 
  highlights, 
  duration 
}: CourseCardProps) {
  return (
    <Card className="group card-hover border-gray-200/80 hover:border-orange/30 overflow-hidden bg-white">
      {/* Animated gradient top border */}
      <div 
        className="h-1.5 bg-gradient-to-r from-navy to-navy-light group-hover:from-orange group-hover:to-orange-light transition-all duration-500"
        aria-hidden="true"
      />
      
      <CardContent className="p-7">
        {/* Header with icon and duration */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon container */}
          <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-orange/10 transition-all duration-300">
            <Icon 
              className="w-7 h-7 text-navy group-hover:text-orange transition-colors duration-300" 
              aria-hidden="true"
            />
          </div>
          
          {/* Duration badge */}
          {duration && (
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">
              {duration}
            </span>
          )}
        </div>
        
        {/* Course title */}
        <h3 className="text-xl font-bold font-heading text-navy mb-2 group-hover:text-navy-dark transition-colors">
          {title}
        </h3>
        
        {/* Course description */}
        <p className="text-gray-600 mb-5 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Curriculum highlights */}
        <div className="border-t border-gray-100 pt-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            What You&apos;ll Learn
          </p>
          <ul className="space-y-2" role="list">
            {highlights.map((highlight, index) => (
              <li 
                key={index} 
                className="flex items-center text-sm text-gray-700"
              >
                {/* Animated bullet point */}
                <span 
                  className="w-1.5 h-1.5 bg-orange rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
