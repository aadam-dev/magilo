/**
 * TrustBar Component
 * 
 * A social proof section displaying key statistics and client logos.
 * Builds credibility by showcasing experience, project count,
 * and notable client relationships.
 * 
 * @component
 * @example
 * // Usage on homepage
 * <TrustBar />
 * 
 * Features:
 * - Animated counter-style statistics
 * - Client logo showcase
 * - Responsive grid layout
 * - Hover effects for client logos
 * 
 * Note: Client logos are currently placeholders
 * Replace with actual client logo images in production
 */

/**
 * Key business statistics for social proof
 * Values should be updated to reflect current metrics
 */
const stats = [
  { value: "25+", label: "Years Experience", id: "experience" },
  { value: "1000+", label: "Projects Delivered", id: "projects" },
  { value: "500+", label: "Satisfied Clients", id: "clients" },
  { value: "100%", label: "Commitment", id: "commitment" },
] as const;

/**
 * Notable client list for logo showcase
 * TODO: Replace initials with actual client logo images
 */
const clients = [
  { name: "Divine International School", initials: "DIS" },
  { name: "Local Church", initials: "LC" },
  { name: "Adenta SME 1", initials: "SME" },
  { name: "Adenta SME 2", initials: "ASM" },
  { name: "Corporate Client", initials: "CC" },
] as const;

/**
 * Trust bar component for social proof display
 */
export function TrustBar() {
  return (
    <section 
      className="py-20 bg-navy relative overflow-hidden"
      aria-label="Company statistics and trusted clients"
    >
      {/* Decorative background elements */}
      <div className="geometric-pattern opacity-20" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative">
        {/* ---------------------------------------------------------------- */}
        {/*                     STATISTICS SECTION                           */}
        {/* ---------------------------------------------------------------- */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          role="list"
          aria-label="Company statistics"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="text-center group"
              role="listitem"
            >
              {/* Stat value with animated appearance */}
              <div 
                className="text-4xl md:text-5xl font-bold text-orange font-heading animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {stat.value}
              </div>
              
              {/* Stat label */}
              <div className="text-sm text-gray-300 mt-2 font-medium tracking-wide">
                {stat.label}
              </div>
              
              {/* Decorative underline */}
              <div 
                className="w-8 h-0.5 bg-orange/30 mx-auto mt-3 group-hover:w-16 group-hover:bg-orange/50 transition-all duration-300"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/*                     CLIENT LOGOS SECTION                          */}
        {/* ---------------------------------------------------------------- */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-gray-400 text-sm mb-10 font-medium">
            Trusted by institutions and businesses across Ghana—including SHS Visual Arts students who ace their exams.
          </p>
          
          <div 
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
            role="list"
            aria-label="Our clients"
          >
            {clients.map((client) => (
              <div 
                key={client.name}
                className="group flex items-center justify-center w-28 h-20 transition-all duration-300 opacity-40 hover:opacity-100"
                role="listitem"
                title={client.name}
              >
                {/* 
                  Client logo placeholder
                  TODO: Replace with actual client logo images
                  <Image 
                    src={`/clients/${client.slug}.png`} 
                    alt={client.name}
                    width={112}
                    height={80}
                    className="object-contain"
                  />
                */}
                <div className="w-full h-full bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/15 transition-colors border border-white/5 group-hover:border-white/10">
                  <span 
                    className="text-lg font-bold text-white/50 group-hover:text-white/80 transition-colors"
                    aria-label={client.name}
                  >
                    {client.initials}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
