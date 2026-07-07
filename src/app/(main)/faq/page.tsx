"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FAQ_CATEGORIES = ["All", "Booking", "Payment", "Cancellation", "Travel"];

const ALL_FAQS = [
  ...FAQS.map((faq) => ({ ...faq, category: "Booking" })),
  { question: "Do you offer group discounts?", answer: "Yes, we offer special discounts for groups of 5 or more people. Contact us for a customized quote.", category: "Booking" },
  { question: "How do I cancel my booking?", answer: "Contact us via WhatsApp or phone with your booking ID. Our team will guide you through the cancellation process.", category: "Cancellation" },
  { question: "Can I reschedule my trip?", answer: "Yes, you can reschedule your trip up to 5 days before departure without any charges.", category: "Booking" },
  { question: "Is travel insurance included?", answer: "Travel insurance is not included by default. You can add it as an optional extra.", category: "Travel" },
  { question: "What documents do I need for booking?", answer: "You'll need a valid government ID (Aadhaar, PAN, Passport, or Driver's License).", category: "Booking" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? ALL_FAQS
    : ALL_FAQS.filter((faq) => faq.category === activeCategory);

  return (
    <PageTransition>
      <div className="py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services."
            centered
          />

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <FAQAccordion items={filtered} />
        </div>
      </div>
    </PageTransition>
  );
}
