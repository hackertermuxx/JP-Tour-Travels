import { VehicleCard } from "./VehicleCard";

interface Vehicle {
  name: string;
  type: string;
  capacity: number;
  price_per_km: number;
  image_url?: string;
  features?: string[];
}

interface VehicleGridProps {
  vehicles: Vehicle[];
}

export function VehicleGrid({ vehicles }: VehicleGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {vehicles.map((v) => (
        <VehicleCard key={v.name} {...v} />
      ))}
    </div>
  );
}
