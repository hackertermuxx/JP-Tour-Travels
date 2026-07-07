import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DestinationCardProps {
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  region?: string;
}

export function DestinationCard({ name, slug, description, image_url, region }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${slug}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {image_url ? (
            <img
              src={image_url}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <MapPin className="h-12 w-12" />
            </div>
          )}
          {region && (
            <div className="absolute left-2 top-2 rounded-full bg-background/80 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
              {region}
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
