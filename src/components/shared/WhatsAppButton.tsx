"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  position?: "fixed" | "inline";
  message?: string;
  className?: string;
}

export function WhatsAppButton({ position = "fixed", message, className }: WhatsAppButtonProps) {
  const url = message
    ? `https://wa.me/${WHATSAPP_URL.split("?text=")[0].replace("https://wa.me/", "")}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        position === "fixed" &&
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/90 text-white shadow-lg backdrop-blur-lg transition-transform hover:scale-110 hover:bg-green-600",
        position === "inline" &&
          "inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600",
        className
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
