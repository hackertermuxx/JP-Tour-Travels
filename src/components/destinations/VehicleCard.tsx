import { Users, Fuel } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_URL } from "@/lib/constants";

interface VehicleCardProps {
  name: string;
  type: string;
  capacity: number;
  price_per_km: number;
  image_url?: string;
  features?: string[];
}

export function VehicleCard({ name, type, capacity, price_per_km, image_url, features }: VehicleCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        {image_url ? (
          <img
            src={image_url}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <Fuel className="h-12 w-12" />
          </div>
        )}
        <div className="absolute right-2 top-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm capitalize">
            {type}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-heading text-lg font-semibold">{name}</h3>
        <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>Up to {capacity} passengers</span>
        </div>
        {features && features.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {features.map((f) => (
              <Badge key={f} variant="outline" className="text-xs">
                {f}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div>
          <span className="text-xs text-muted-foreground">Starting from</span>
          <p className="font-heading text-lg font-bold text-primary">₹{price_per_km}/km</p>
        </div>
        <a
          href={`${WHATSAPP_URL}&text=${encodeURIComponent(`Hi! I want to rent a ${name} (${type}).`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Rent Now
        </a>
      </CardFooter>
    </Card>
  );
}
