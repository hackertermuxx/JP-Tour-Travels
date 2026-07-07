"use client";

import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { STATS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} />

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="About JP Tour Travels"
                subtitle="Your trusted travel partner since 2015."
                className="mb-0"
              />
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At JP Tour Travels, we believe every journey tells a story. Founded with a passion for exploration
                  and a commitment to exceptional service, we have grown into one of the most trusted travel agencies
                  in India.
                </p>
                <p>
                  Our team of experienced travel professionals works tirelessly to craft personalized itineraries that
                  cater to your unique preferences and budget. From the snow-capped peaks of Kashmir to the sun-kissed
                  beaches of Goa, we cover every corner of India.
                </p>
                <p>
                  We specialize in curated tour packages, vehicle rentals, hotel bookings, and corporate travel
                  management. Every trip is designed with attention to detail, ensuring a seamless and unforgettable
                  experience.
                </p>
                <p>
                  Book with confidence — we handle all the logistics so you can focus on making memories.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-muted shadow-sm" />
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
