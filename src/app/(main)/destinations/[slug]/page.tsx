"use client";

import { useParams } from "next/navigation";
import { MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageTransition } from "@/components/shared/PageTransition";
import { VehicleGrid } from "@/components/destinations/VehicleGrid";
import { Separator } from "@/components/ui/separator";

const DESTINATIONS_DATA: Record<string, { name: string; description: string; region: string; highlights: string[] }> = {
  kashmir: { name: "Kashmir", description: "Paradise on Earth — known for its snow-capped mountains, serene Dal Lake, Mughal gardens, and warm hospitality.", region: "North India", highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Sonmarg", "Mughal Gardens"] },
};

const VEHICLES = [
  { name: "Swift Dzire", type: "sedan", capacity: 4, price_per_km: 12, features: ["AC", "Music System"] },
  { name: "Toyota Innova", type: "suv", capacity: 7, price_per_km: 18, features: ["AC", "Pushback Seats", "Music System"] },
  { name: "Tempo Traveller", type: "tempo", capacity: 12, price_per_km: 25, features: ["AC", "Pushback Seats", "Charging Point"] },
  { name: "Honda City", type: "sedan", capacity: 4, price_per_km: 14, features: ["AC", "Music System", "Leather Seats"] },
];

export default function DestinationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const dest = DESTINATIONS_DATA[slug] || { name: "Destination", description: "Explore this beautiful destination.", region: "India", highlights: [] };

  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: dest.name }]} />

          <div className="aspect-[21/9] w-full rounded-xl bg-muted" />
          <div className="mt-6 max-w-3xl">
            <SectionHeading title={dest.name} className="mb-0" />
            <p className="text-lg text-muted-foreground">{dest.description}</p>

            {dest.highlights.length > 0 && (
              <>
                <Separator className="my-8" />
                <h3 className="mb-4 font-heading text-xl font-semibold">Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-sm">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {h}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <Separator className="my-12" />
          <SectionHeading
            title="Vehicle Rental"
            subtitle="Available vehicles for your travel in this region."
          />
          <VehicleGrid vehicles={VEHICLES} />
        </div>
      </div>
    </PageTransition>
  );
}
