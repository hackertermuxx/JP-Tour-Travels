"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterGroup {
  label: string;
  options: FilterOption[];
  value: string[];
  onChange: (value: string[]) => void;
}

interface FilterSidebarProps {
  groups: FilterGroup[];
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
  className?: string;
}

export function FilterSidebar({
  groups,
  isOpen,
  onClose,
  onReset,
  className,
}: FilterSidebarProps) {
  const toggleOption = (group: FilterGroup, value: string) => {
    const newValue = group.value.includes(value)
      ? group.value.filter((v) => v !== value)
      : [...group.value, value];
    group.onChange(newValue);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-80 border-l bg-card p-6 shadow-xl transition-transform duration-300 lg:static lg:inset-auto lg:z-auto lg:w-64 lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            <span className="font-heading font-semibold">Filters</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="xs" onClick={onReset}>
              Reset
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {groups.map((group) => (
            <div key={group.label}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </h4>
              <div className="space-y-2">
                {group.options.map((option) => {
                  const isSelected = group.value.includes(option.value);
                  return (
                    <label
                      key={option.value}
                      className="flex cursor-pointer items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleOption(group, option.value)}
                        className="rounded border-muted-foreground/30 text-primary focus:ring-primary"
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
