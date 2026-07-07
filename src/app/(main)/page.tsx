"use client";

import { PageTransition } from "@/components/shared/PageTransition";
import { HeroBanner } from "@/components/home/HeroBanner";
import { StatsSection } from "@/components/home/StatsSection";
import { PackageShowcase } from "@/components/home/PackageShowcase";
import { CTASection } from "@/components/home/CTASection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ReviewCarousel } from "@/components/home/ReviewCarousel";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroBanner />
      <StatsSection />
      <PackageShowcase />
      <CTASection />
      <GalleryPreview />
      <ReviewCarousel />
    </PageTransition>
  );
}
