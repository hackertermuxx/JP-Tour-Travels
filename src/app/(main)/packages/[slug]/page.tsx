"use client";

import { useParams } from "next/navigation";
import { Check, X, Clock, MapPin, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageTransition } from "@/components/shared/PageTransition";
import { PackageTimeline } from "@/components/packages/PackageTimeline";
import { PackageGallery } from "@/components/packages/PackageGallery";
import { WHATSAPP_URL } from "@/lib/constants";

const PACKAGES_DATA: Record<string, {
  title: string;
  duration: string;
  price: number;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; description: string }[];
}> = {
  "kashmir-paradise": {
    title: "Kashmir Paradise",
    duration: "5 Days / 4 Nights",
    price: 14999,
    description: "Experience the breathtaking beauty of Kashmir — from the serene Dal Lake to the snow-capped peaks of Gulmarg. Stay in beautiful houseboats and explore Mughal gardens, meadows, and valleys.",
    highlights: ["Houseboat Stay on Dal Lake", "Gulmarg Gondola Ride", "Shikara Ride", "Mughal Gardens", "Pahalgam Valley", "Sonmarg"],
    inclusions: ["Hotel accommodation", "Daily breakfast & dinner", "All transfers", "Sightseeing as per itinerary", "Shikara ride", "Gondola ride (phase 1)"],
    exclusions: ["Flight tickets", "Personal expenses", "Gondola phase 2", "Travel insurance", "Tips & gratuities"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Arrive at Srinagar airport. Transfer to houseboat for check-in. Evening Shikara ride on Dal Lake. Overnight stay on houseboat." },
      { day: 2, title: "Srinagar Sightseeing", description: "Visit Mughal Gardens — Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Afternoon visit to Shankaracharya Temple and local market." },
      { day: 3, title: "Gulmarg Excursion", description: "Full day trip to Gulmarg. Enjoy Gondola ride, snow activities (seasonal), and meadow walks. Return to Srinagar." },
      { day: 4, title: "Pahalgam Excursion", description: "Drive to Pahalgam. Visit Betaab Valley, Aru Valley, and Chandanwari. Optional horse riding. Return to Srinagar." },
      { day: 5, title: "Departure", description: "Breakfast at hotel. Transfer to airport for departure with unforgettable memories." },
    ],
  },
  "goa-beach-escape": {
    title: "Goa Beach Escape",
    duration: "4 Days / 3 Nights",
    price: 12999,
    description: "Sun, sand, and sea — the perfect beach vacation. Enjoy water sports, beach parties, sunset cruises, and explore Portuguese heritage in Goa.",
    highlights: ["Beach Resort Stay", "Water Sports", "Sunset Cruise", "Night Market", "Old Goa Churches", "Dudhsagar Falls"],
    inclusions: ["3 nights hotel stay", "Daily breakfast", "Airport transfers", "Sunset cruise", "North Goa sightseeing", "South Goa sightseeing"],
    exclusions: ["Water sports charges", "Personal expenses", "Lunch & dinner", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Arrive at Goa airport. Transfer to hotel. Evening at leisure on the beach." },
      { day: 2, title: "North Goa Tour", description: "Visit Calangute, Baga, Anjuna beaches, Fort Aguada, and the famous Saturday Night Market." },
      { day: 3, title: "South Goa Tour", description: "Explore Colva, Palolem beaches, Basilica of Bom Jesus, and Se Cathedral. Evening sunset cruise." },
      { day: 4, title: "Departure", description: "Breakfast at hotel. Check out and transfer to airport." },
    ],
  },
  "manali-adventure": {
    title: "Manali Adventure",
    duration: "4 Days / 3 Nights",
    price: 8999,
    description: "Thrilling adventures in the Himalayas with river rafting, trekking, camping, and visits to Solang Valley and Rohtang Pass.",
    highlights: ["River Rafting in Kullu", "Solang Valley", "Rohtang Pass", "Camping", "Trekking", "Hadimba Temple"],
    inclusions: ["3 nights hotel stay", "Daily meals", "All transfers", "Manali sightseeing", "Solang Valley visit"],
    exclusions: ["River rafting charges", "Snow activities", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Manali", description: "Arrive and check in. Evening walk on Mall Road." },
      { day: 2, title: "Solang Valley", description: "Full day at Solang Valley for snow activities, paragliding, and zorbing." },
      { day: 3, title: "Local Sightseeing", description: "Visit Hadimba Temple, Vashisht Hot Springs, Tibetan Monastery, and Van Vihar." },
      { day: 4, title: "Departure", description: "Breakfast and check out." },
    ],
  },
};

export default function PackageDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const pkg = PACKAGES_DATA[slug];

  if (!pkg) {
    return (
      <PageTransition>
        <div className="py-20 text-center">
          <h1 className="font-heading text-2xl font-bold">Package Not Found</h1>
          <p className="mt-2 text-muted-foreground">The package you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </PageTransition>
    );
  }

  const whatsappMessage = `Hi! I'm interested in the ${pkg.title} package (₹${pkg.price.toLocaleString()}). Please share more details.`;

  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Packages", href: "/packages" }, { label: pkg.title }]} />

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PackageGallery />

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {pkg.duration}
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <MapPin className="h-3 w-3" />
                    India
                  </Badge>
                </div>

                <SectionHeading title={pkg.title} className="mb-0 mt-2" />
                <p className="text-base leading-relaxed text-muted-foreground">{pkg.description}</p>

                <Separator className="my-8" />

                <h3 className="mb-4 font-heading text-xl font-semibold">Highlights</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {pkg.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{h}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <h3 className="mb-4 font-heading text-xl font-semibold">Itinerary</h3>
                <PackageTimeline itinerary={pkg.itinerary} />

                <Separator className="my-8" />

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-heading text-lg font-semibold">Inclusions</h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-heading text-lg font-semibold">Exclusions</h4>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg">
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="font-heading text-3xl font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
                <p className="mt-1 text-sm text-muted-foreground">per person</p>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{pkg.duration}</span>
                  </div>
                </div>
                <a
                  href={`${WHATSAPP_URL}&text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-green-500 px-2.5 text-sm font-medium whitespace-nowrap text-white transition-all hover:bg-green-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
