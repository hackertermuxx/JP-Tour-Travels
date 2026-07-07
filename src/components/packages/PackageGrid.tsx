import { PackageCard } from "./PackageCard";

interface Package {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  duration: string;
  image_url?: string;
  highlights?: string[];
}

interface PackageGridProps {
  packages: Package[];
  columns?: 2 | 3 | 4;
}

export function PackageGrid({ packages, columns = 3 }: PackageGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} {...pkg} />
      ))}
    </div>
  );
}
