import { Phone } from "lucide-react";
import { PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  className?: string;
  variant?: "fixed" | "inline";
}

export function CallButton({ className, variant = "inline" }: CallButtonProps) {
  return (
    <a
      href={`tel:${PHONE}`}
      className={cn(
        variant === "fixed" &&
          "fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110",
        variant === "inline" &&
          "inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90",
        className
      )}
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
