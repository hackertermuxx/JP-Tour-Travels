import { DestinationCard } from "./DestinationCard";

interface Destination {
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  region?: string;
}

interface DestinationGridProps {
  destinations: Destination[];
}

export function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((d) => (
        <DestinationCard key={d.slug} {...d} />
      ))}
    </div>
  );
}
