"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { VehicleGrid } from "@/components/destinations/VehicleGrid";
import { PageTransition } from "@/components/shared/PageTransition";
import { CalendarCheck, Shield, Clock, IndianRupee } from "lucide-react";

const VEHICLES = [
  { name: "Toyota Etios", type: "Sedan", capacity: 4, price_per_km: 12, features: ["AC", "Music System"] },
  { name: "Honda City", type: "Sedan", capacity: 4, price_per_km: 14, features: ["AC", "Music System", "Push Back Seats"] },
  { name: "Toyota Innova", type: "SUV", capacity: 7, price_per_km: 16, features: ["AC", "Music System", "Push Back Seats", "Ample Luggage Space"] },
  { name: "Toyota Fortuner", type: "SUV", capacity: 7, price_per_km: 20, features: ["AC", "Music System", "4x4", "Premium Interior"] },
  { name: "Maruti Suzuki Swift", type: "Hatchback", capacity: 4, price_per_km: 10, features: ["AC", "Music System"] },
  { name: "Mercedes-Benz E-Class", type: "Luxury", capacity: 4, price_per_km: 28, features: ["AC", "Premium Sound", "Leather Seats", "Chauffeur"] },
  { name: "Force Tempo Traveller", type: "Tempo", capacity: 12, price_per_km: 22, features: ["AC", "Music System", "Push Back Seats", "Reading Lights"] },
  { name: "Ashok Leyland Bus", type: "Bus", capacity: 35, price_per_km: 50, features: ["AC", "Push Back Seats", "PA System", "Luggage Compartment"] },
];

const FEATURES = [
  { icon: Shield, title: "Well Maintained", desc: "All vehicles are regularly serviced and sanitized" },
  { icon: Clock, title: "On-Time Service", desc: "Punctual pickups and drop-offs guaranteed" },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges, pay only for what you use" },
  { icon: CalendarCheck, title: "Easy Booking", desc: "Book via WhatsApp and get instant confirmation" },
];

export default function VehiclesPage() {
  return (
    <PageTransition>
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Taxi & Vehicle <span className="text-amber-400">Rental</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-200">
            Choose from our fleet of well-maintained vehicles for local travel, outstation trips, and group tours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Why Book With Us?" subtitle="Reliable vehicles, professional drivers, and affordable rates" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border bg-white p-6 text-center shadow-soft transition-shadow hover:shadow-soft-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <f.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="mt-4 font-semibold text-blue-950">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Our Fleet"
            subtitle="Sedans, SUVs, Luxury, Tempo Travellers & Buses"
          />
          <div className="mt-10">
            <VehicleGrid vehicles={VEHICLES} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <SectionHeading
            title="Ready to Book a Vehicle?"
            subtitle="Contact us on WhatsApp with your pickup location, date, and vehicle preference"
          />
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi!%20I%20want%20to%20book%20a%20vehicle%20for%20travel."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3 text-white transition-colors hover:bg-green-700"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
