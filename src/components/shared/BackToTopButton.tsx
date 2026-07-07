"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 left-1/2 z-50 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary/80 text-white shadow-lg backdrop-blur-lg transition-all hover:bg-primary",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
