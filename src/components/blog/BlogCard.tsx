import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  image_url?: string;
  author?: string;
  date?: string;
  tags?: string[];
}

export function BlogCard({ title, slug, excerpt, image_url, author, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {image_url ? (
            <img
              src={image_url}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <Clock className="h-12 w-12" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>{author || "JP Tour Travels"}</span>
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {date}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
