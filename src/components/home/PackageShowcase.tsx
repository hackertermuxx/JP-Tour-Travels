import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PackageCard } from "@/components/packages/PackageCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

const FEATURED_PACKAGES = [
  {
    id: "1",
    title: "Kashmir Paradise",
    slug: "kashmir-paradise",
    description: "Experience the breathtaking beauty of Kashmir with houseboat stays and Mughal gardens.",
    price: 14999,
    duration: "5 Days / 4 Nights",
    image_url: "/packages/kashmir.jpg",
    highlights: ["Houseboat Stay", "Gulmarg Gondola", "Shikara Ride", "Mughal Gardens"],
  },
  {
    id: "2",
    title: "Goa Beach Escape",
    slug: "goa-beach-escape",
    description: "Sun, sand, and sea — the perfect beach vacation with water sports and nightlife.",
    price: 12999,
    duration: "4 Days / 3 Nights",
    image_url: "/packages/goa.jpg",
    highlights: ["Beach Resort", "Water Sports", "Sunset Cruise", "Night Market"],
  },
  {
    id: "3",
    title: "Manali Adventure",
    slug: "manali-adventure",
    description: "Thrilling adventures in the Himalayas with trekking, river rafting, and camping.",
    price: 8999,
    duration: "4 Days / 3 Nights",
    image_url: "/packages/manali.jpg",
    highlights: ["River Rafting", "Trekking", "Camping", "Solang Valley"],
  },
  {
    id: "4",
    title: "Rajasthan Royalty",
    slug: "rajasthan-royalty",
    description: "Explore the royal heritage of Rajasthan with forts, palaces, and desert safaris.",
    price: 19999,
    duration: "6 Days / 5 Nights",
    image_url: "/packages/rajasthan.jpg",
    highlights: ["Fort Visit", "Desert Safari", "Cultural Show", "Heritage Hotel"],
  },
  {
    id: "5",
    title: "Kerala Backwaters",
    slug: "kerala-backwaters",
    description: "Cruise through serene backwaters and explore lush green landscapes.",
    price: 15999,
    duration: "5 Days / 4 Nights",
    image_url: "/packages/kerala.jpg",
    highlights: ["Houseboat Cruise", "Ayurveda Spa", "Tea Plantations", "Beaches"],
  },
  {
    id: "6",
    title: "Himachal Highlands",
    slug: "himachal-highlands",
    description: "Discover the scenic hill stations and majestic mountain landscapes of Himachal.",
    price: 10999,
    duration: "5 Days / 4 Nights",
    image_url: "/packages/himachal.jpg",
    highlights: ["Hill Stations", "Temple Tour", "Apple Orchards", "River Crossing"],
  },
];

export function PackageShowcase() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Popular Packages"
          subtitle="Handpicked experiences designed to give you the best of every destination."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/packages"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            View All Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
