import React from "react";
import LinearHero from "../components/home/LinearHero";
import LinearCapabilities from "../components/home/LinearCapabilities";
import RecentDeliveries from "../components/home/RecentDeliveries";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import FinalCta from "../components/home/FinalCta";

/**
 * Cookie Inc. Official Home Page
 * Linear.app Craft & Restraint · Dark Base (#08090A) · Accessible WCAG 2.2 AA
 * 100% Client-Facing · Zero Developer Monospace Motifs.
 */
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-x-clip">
      {/* 1. Flagship Hero: Expansive Headline, CTAs, Trust Metrics, Kinetic Brand Tickers & Live Drawer */}
      <LinearHero />

      {/* 2. Capabilities: Four Alternating Rows with TiltIn Framed Visuals */}
      <LinearCapabilities />

      {/* 3. Recent Deliveries: Pinned Scroll-Driven GSAP + ScrollTrigger Showcase */}
      <RecentDeliveries />

      {/* 4. Testimonials: Big Type Quote, Hairline Progress Indicator, 12px Rise, Touch Swipe */}
      <TestimonialsCarousel />

      {/* 5. Final CTA: Mirrored Amber Glow, Faint Grid, Gradient Headline & Cookie Logo Badge */}
      <FinalCta />
    </div>
  );
}
