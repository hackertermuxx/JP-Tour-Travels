"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl border bg-card overflow-hidden transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-4 text-left font-medium transition-colors hover:bg-muted/50"
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-200",
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="border-t p-4 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
