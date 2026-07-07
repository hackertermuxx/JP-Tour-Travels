import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  location?: string;
  image_url?: string;
}

export function ReviewCard({ name, rating, text, location, image_url }: ReviewCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="relative h-full">
      <CardContent className="p-6">
        <Quote className="mb-2 h-8 w-8 text-primary/20" />
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-golden text-golden" : "fill-muted text-muted"}`}
            />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{text}&rdquo;</p>
        <div className="mt-4 flex items-center gap-3">
          <Avatar className="h-10 w-10">
            {image_url ? (
              <img src={image_url} alt={name} />
            ) : (
              <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="text-sm font-medium">{name}</p>
            {location && <p className="text-xs text-muted-foreground">{location}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
