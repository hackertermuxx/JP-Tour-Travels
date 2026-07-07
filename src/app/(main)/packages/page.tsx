"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/PageTransition";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SearchBar } from "@/components/shared/SearchBar";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FilterSidebar } from "@/components/shared/FilterSidebar";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const ALL_PACKAGES = [
  { id: "1", title: "Kashmir Paradise", slug: "kashmir-paradise", description: "Experience the breathtaking beauty of Kashmir with houseboat stays and Mughal gardens.", price: 14999, duration: "5 Days / 4 Nights", highlights: ["Houseboat Stay", "Gulmarg Gondola", "Shikara Ride"] },
  { id: "2", title: "Goa Beach Escape", slug: "goa-beach-escape", description: "Sun, sand, and sea — the perfect beach vacation with water sports and nightlife.", price: 12999, duration: "4 Days / 3 Nights", highlights: ["Beach Resort", "Water Sports", "Sunset Cruise"] },
  { id: "3", title: "Manali Adventure", slug: "manali-adventure", description: "Thrilling adventures in the Himalayas with trekking, river rafting, and camping.", price: 8999, duration: "4 Days / 3 Nights", highlights: ["River Rafting", "Trekking", "Camping"] },
  { id: "4", title: "Rajasthan Royalty", slug: "rajasthan-royalty", description: "Explore the royal heritage of Rajasthan with forts, palaces, and desert safaris.", price: 19999, duration: "6 Days / 5 Nights", highlights: ["Fort Visit", "Desert Safari", "Cultural Show"] },
  { id: "5", title: "Kerala Backwaters", slug: "kerala-backwaters", description: "Cruise through serene backwaters and explore lush green landscapes.", price: 15999, duration: "5 Days / 4 Nights", highlights: ["Houseboat Cruise", "Ayurveda Spa", "Tea Plantations"] },
  { id: "6", title: "Himachal Highlands", slug: "himachal-highlands", description: "Discover the scenic hill stations and majestic mountain landscapes.", price: 10999, duration: "5 Days / 4 Nights", highlights: ["Hill Stations", "Temple Tour", "Apple Orchards"] },
  { id: "7", title: "Darjeeling Delight", slug: "darjeeling-delight", description: "Tea gardens, toy trains, and panoramic Himalayan views.", price: 11999, duration: "4 Days / 3 Nights", highlights: ["Tea Gardens", "Toy Train", "Sunrise View"] },
  { id: "8", title: "Andaman Island", slug: "andaman-island", description: "Tropical paradise with pristine beaches and water activities.", price: 24999, duration: "6 Days / 5 Nights", highlights: ["Snorkeling", "Beach Resort", "Cellular Jail"] },
  { id: "9", title: "Varanasi Spiritual", slug: "varanasi-spiritual", description: "Sacred journey along the Ganges with temple visits and cultural immersion.", price: 7999, duration: "3 Days / 2 Nights", highlights: ["Ganga Aarti", "Temple Tour", "Boat Ride"] },
];

const FILTER_GROUPS = [
  {
    label: "Duration",
    options: [
      { label: "3 Days", value: "3" },
      { label: "4 Days", value: "4" },
      { label: "5 Days", value: "5" },
      { label: "6+ Days", value: "6" },
    ],
  },
  {
    label: "Price Range",
    options: [
      { label: "Under ₹10k", value: "budget" },
      { label: "₹10k - ₹15k", value: "mid" },
      { label: "₹15k+", value: "premium" },
    ],
  },
];

export default function PackagesPage() {
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [durationFilters, setDurationFilters] = useState<string[]>([]);
  const [priceFilters, setPriceFilters] = useState<string[]>([]);

  const filtered = ALL_PACKAGES.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Packages" }]} />
          <div className="flex items-start justify-between gap-4">
            <SectionHeading
              title="All Packages"
              subtitle="Choose from our wide range of curated travel packages."
            />
            <Button
              variant="outline"
              size="sm"
              className="mt-2 gap-2 lg:hidden"
              onClick={() => setFilterOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="flex gap-8">
            <FilterSidebar
              groups={[
                { ...FILTER_GROUPS[0], value: durationFilters, onChange: setDurationFilters },
                { ...FILTER_GROUPS[1], value: priceFilters, onChange: setPriceFilters },
              ]}
              isOpen={filterOpen}
              onClose={() => setFilterOpen(false)}
              onReset={() => {
                setDurationFilters([]);
                setPriceFilters([]);
              }}
              className="hidden lg:block"
            />

            <div className="flex-1">
              <SearchBar
                placeholder="Search packages..."
                value={search}
                onChange={setSearch}
                className="mb-8 max-w-md"
              />

              {filtered.length > 0 ? (
                <PackageGrid packages={filtered} />
              ) : (
                <p className="py-12 text-center text-muted-foreground">No packages found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
