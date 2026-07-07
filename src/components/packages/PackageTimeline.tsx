interface Day {
  day: number;
  title: string;
  description: string;
}

interface PackageTimelineProps {
  itinerary: Day[];
}

export function PackageTimeline({ itinerary }: PackageTimelineProps) {
  return (
    <div className="space-y-6">
      {itinerary.map((day) => (
        <div
          key={day.day}
          className="relative pl-8 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-border last:before:hidden"
        >
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {day.day}
          </div>
          <h4 className="font-medium">{day.title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{day.description}</p>
        </div>
      ))}
    </div>
  );
}
