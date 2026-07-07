interface AnnouncementBarProps {
  text: string;
}

export function AnnouncementBar({ text }: AnnouncementBarProps) {
  return (
    <div className="bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
      <p>{text}</p>
    </div>
  );
}
