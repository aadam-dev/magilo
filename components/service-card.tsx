/**
 * ServiceCard Component
 * 
 * Displays a single service category with icon, title, description, and list of offerings.
 * Features smooth hover animations and consistent branding.
 * 
 * @component
 * @example
 * <ServiceCard
 *   icon={Printer}
 *   title="Printing Services"
 *   description="Professional quality prints"
 *   items={["T-Shirts", "Banners", "Business Cards"]}
 * />
 * 
 * Design Notes:
 * - Card lift effect on hover for tactile feedback
 * - Icon color transition reinforces interactivity
 * - Bullet points use brand accent color
 */

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Props for the ServiceCard component
 */
interface ServiceCardProps {
  /** Lucide icon component to display */
  icon: LucideIcon;
  /** Service category title */
  title: string;
  /** Brief description of the service */
  description: string;
  /** List of specific services/items offered */
  items: readonly string[];
}

/**
 * Service card component for displaying service categories
 * Used in the service grid on the homepage and services page
 */
export function ServiceCard({ icon: Icon, title, description, items }: ServiceCardProps) {
  return (
    <Card className="group card-hover border-gray-200/80 hover:border-orange/30 bg-white">
      <CardContent className="p-6">
        {/* Icon container with hover color transition */}
        <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange/10 transition-all duration-300">
          <Icon 
            className="w-7 h-7 text-navy group-hover:text-orange transition-colors duration-300" 
            aria-hidden="true"
          />
        </div>
        
        {/* Card title */}
        <h3 className="text-xl font-bold font-heading text-navy mb-2 group-hover:text-navy-dark transition-colors">
          {title}
        </h3>
        
        {/* Service description */}
        <p className="text-gray-600 mb-5 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Service items list */}
        <ul className="space-y-2.5" role="list">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center text-sm text-gray-700"
            >
              {/* Animated bullet point */}
              <span 
                className="w-1.5 h-1.5 bg-orange rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
