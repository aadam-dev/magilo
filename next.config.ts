/**
 * Next.js Configuration
 * 
 * This configuration file sets up security headers, performance optimizations,
 * and other Next.js settings for the Magilo Art College & Printing Hub website.
 * 
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 */
import type { NextConfig } from "next";

/**
 * Security headers configuration
 * These headers protect against common web vulnerabilities including:
 * - XSS attacks (Content-Security-Policy)
 * - Clickjacking (X-Frame-Options)
 * - MIME type sniffing (X-Content-Type-Options)
 * - Information disclosure (X-Powered-By removal)
 */
const securityHeaders = [
  {
    // Prevents the browser from interpreting files as a different MIME type
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Controls DNS prefetching to improve privacy
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Prevents clickjacking by controlling iframe embedding
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Enables browser XSS filtering (legacy but still useful)
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // Controls referrer information sent with requests
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Permissions policy to control browser features
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    // Strict Transport Security - enforces HTTPS
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    // Content Security Policy - controls resource loading
    // Configured for production with inline styles (required by Tailwind)
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://wa.me",
      "frame-src 'self' https://www.google.com https://docs.google.com https://www.youtube.com https://tally.so",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self' https://tally.so https://formspree.io https://docs.google.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  /**
   * Allow ngrok and other tunnel hosts in development (e.g. for live preview)
   */
  allowedDevOrigins: ["*.ngrok-free.dev", "*.ngrok.io"],

  /**
   * Apply security headers to all routes
   * This ensures consistent security across the entire application
   */
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  /**
   * Remove X-Powered-By header to prevent information disclosure
   * This makes it harder for attackers to identify the technology stack
   */
  poweredByHeader: false,

  /**
   * Enable React Strict Mode for development
   * Helps identify potential problems in the application
   */
  reactStrictMode: true,

  /**
   * Image optimization configuration
   * Defines allowed external image domains for next/image
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
