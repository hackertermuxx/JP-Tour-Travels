"use client";

import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WHATSAPP_URL } from "@/lib/constants";

interface HeroBookingCardProps {
  destination?: string;
  onDestinationChange?: (value: string) => void;
}

export function HeroBookingCard({
  destination = "",
  onDestinationChange,
}: HeroBookingCardProps) {
  const handleBooking = () => {
    const message = destination
      ? `Hi! I'm interested in booking a trip to ${destination}.`
      : "Hi! I'm interested in booking a tour package.";
    window.open(
      `${WHATSAPP_URL}&text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          <Input
            type="text"
            placeholder="Where do you want to go?"
            value={destination}
            onChange={(e) => onDestinationChange?.(e.target.value)}
            className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/50"
          />
        </div>
        <Button
          onClick={handleBooking}
          size="lg"
          className="bg-golden text-secondary hover:bg-golden/90 gap-2 shrink-0"
        >
          <Calendar className="h-4 w-4" />
          Book Now
        </Button>
      </div>
    </div>
  );
}
