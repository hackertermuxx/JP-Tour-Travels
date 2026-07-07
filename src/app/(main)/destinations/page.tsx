"use client";

import { PageTransition } from "@/components/shared/PageTransition";
import { DestinationGrid } from "@/components/destinations/DestinationGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const DESTINATIONS = [
  { name: "Kashmir", slug: "kashmir", description: "Paradise on Earth with snow-capped mountains and serene lakes.", region: "North India" },
  { name: "Goa", slug: "goa", description: "Sun-kissed beaches, vibrant nightlife, and Portuguese heritage.", region: "West India" },
  { name: "Manali", slug: "manali", description: "Himalayan adventure hub with snow activities and scenic valleys.", region: "North India" },
  { name: "Rajasthan", slug: "rajasthan", description: "Royal forts, palaces, and vibrant desert culture.", region: "North India" },
  { name: "Kerala", slug: "kerala", description: "God's Own Country with backwaters, tea gardens, and beaches.", region: "South India" },
  { name: "Himachal", slug: "himachal", description: "Hill stations, orchards, and majestic mountain landscapes.", region: "North India" },
  { name: "Darjeeling", slug: "darjeeling", description: "Tea gardens, toy trains, and panoramic Himalayan views.", region: "East India" },
  { name: "Andaman", slug: "andaman", description: "Tropical paradise with pristine beaches and coral reefs.", region: "Islands" },
  { name: "Varanasi", slug: "varanasi", description: "Spiritual capital with ancient temples and Ganga ghats.", region: "East India" },
];

export default function DestinationsPage() {
  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Destinations" }]} />
          <SectionHeading
            title="Destinations"
            subtitle="Explore our handpicked destinations across India."
          />
          <DestinationGrid destinations={DESTINATIONS} />
        </div>
      </div>
    </PageTransition>
  );
}
