import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_URL } from "@/lib/constants";

interface PackageCardProps {
  title: string;
  slug: string;
  description: string;
  price: number;
  duration: string;
  image_url?: string;
  highlights?: string[];
}

export function PackageCard({ title, slug, description, price, duration, image_url, highlights }: PackageCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/packages/${slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {image_url ? (
            <img
              src={image_url}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <MapPin className="h-12 w-12" />
            </div>
          )}
          <div className="absolute right-2 top-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              <Clock className="mr-1 h-3 w-3" />
              {duration}
            </Badge>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/packages/${slug}`}>
          <h3 className="font-heading text-lg font-semibold transition-colors hover:text-primary">
            {title}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>
        {highlights && highlights.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {highlights.slice(0, 3).map((h) => (
              <Badge key={h} variant="outline" className="text-xs">
                {h}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div>
          <span className="text-sm text-muted-foreground">Starting from</span>
          <p className="font-heading text-xl font-bold text-primary">₹{price.toLocaleString()}</p>
        </div>
        <a
          href={`${WHATSAPP_URL}&text=${encodeURIComponent(`Hi! I'm interested in the ${title} package.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-green-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-green-600"
        >
          Book via WhatsApp
        </a>
      </CardFooter>
    </Card>
  );
}
