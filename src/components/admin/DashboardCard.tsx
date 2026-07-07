import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function DashboardCard({ title, value, description, icon, className }: DashboardCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-1 font-heading text-2xl font-bold">{value}</p>
            {description && (
              <p className="mt-1 text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          {icon && (
            <div className="rounded-lg bg-primary/10 p-3 text-primary">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
