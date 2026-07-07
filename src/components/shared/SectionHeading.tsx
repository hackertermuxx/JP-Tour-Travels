import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
