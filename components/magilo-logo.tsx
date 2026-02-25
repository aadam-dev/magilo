/**
 * MagiloLogo Component
 * 
 * A high-quality, SVG-based logo for Magilo Art College.
 * Features the signature 3D-styled typography and balanced service bars.
 * 
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes for styling
 * @param {number} [props.width=240] - Width of the logo in pixels
 * @param {number} [props.height] - Height of the logo in pixels (calculated if not provided)
 * @param {boolean} [props.isDark=false] - Whether to use the dark-background optimized version
 */

import { cn } from "@/lib/utils";

interface MagiloLogoProps {
    className?: string;
    width?: number;
    height?: number;
    isDark?: boolean;
}

export function MagiloLogo({
    className,
    width = 240,
    height,
    isDark = false
}: MagiloLogoProps) {
    // Aspect ratio is roughly 4:1
    const calculatedHeight = height || width / 4;

    return (
        <div
            className={cn("flex items-center justify-center", className)}
            style={{ width, height: calculatedHeight }}
            aria-label="Magilo Art College Logo"
        >
            <svg
                viewBox="0 0 400 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* MAGILO Text with 3D Effect / Gradients */}
                <defs>
                    <linearGradient id="magiloGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" /> {/* Cyan-400 */}
                        <stop offset="50%" stopColor="#0EA5E9" /> {/* Cyan-500 */}
                        <stop offset="100%" stopColor="#0369A1" /> {/* Cyan-700 */}
                    </linearGradient>

                    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                        <feOffset dx="1" dy="1" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="bevel" x="-10%" y="-10%" width="120%" height="120%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
                        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#ffffff" result="specOut">
                            <fePointLight x="-5000" y="-10000" z="20000" />
                        </feSpecularLighting>
                        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litGraphic" />
                    </filter>
                </defs>

                <g filter="url(#shadow)">
                    <text
                        x="50%"
                        y="55"
                        textAnchor="middle"
                        className="font-black"
                        style={{
                            fontSize: "64px",
                            fontFamily: "var(--font-heading), sans-serif",
                            fill: "url(#magiloGradient)",
                            filter: "url(#bevel)",
                            letterSpacing: "0.05em",
                            stroke: "#075985",
                            strokeWidth: "1.5"
                        }}
                    >
                        MAGILO
                    </text>
                </g>

                {/* Bottom Bar Container */}
                <g transform="translate(0, 65)">
                    {/* Blue Bar: ART COLLEGE */}
                    <rect
                        x="0"
                        y="0"
                        width="200"
                        height="25"
                        fill={isDark ? "white" : "#1E3A8A"} // White on dark bg
                        rx="2"
                    />
                    <text
                        x="100"
                        y="18"
                        textAnchor="middle"
                        fill={isDark ? "#1E3A8A" : "white"}
                        style={{
                            fontSize: "14px",
                            fontWeight: "900",
                            fontFamily: "var(--font-heading), sans-serif",
                            letterSpacing: "0.1em"
                        }}
                    >
                        ART COLLEGE
                    </text>

                    {/* Red Bar: Tagline */}
                    <rect
                        x="200"
                        y="0"
                        width="200"
                        height="25"
                        fill={isDark ? "white" : "#DC2626"} // White on dark bg
                        rx="2"
                    />
                    <text
                        x="300"
                        y="17"
                        textAnchor="middle"
                        fill={isDark ? "#DC2626" : "white"}
                        style={{
                            fontSize: "9px",
                            fontWeight: "500",
                            fontFamily: "var(--font-sans), sans-serif"
                        }}
                    >
                        where Creativity meets Technology
                    </text>
                </g>
            </svg>
        </div>
    );
}
