"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/DataTable";
import { Plus } from "lucide-react";

const PACKAGES = [
  { id: "1", title: "Kashmir Paradise", slug: "kashmir-paradise", price: "₹14,999", duration: "5D/4N", status: "Published" },
  { id: "2", title: "Goa Beach Escape", slug: "goa-beach-escape", price: "₹12,999", duration: "4D/3N", status: "Published" },
  { id: "3", title: "Manali Adventure", slug: "manali-adventure", price: "₹8,999", duration: "4D/3N", status: "Draft" },
  { id: "4", title: "Rajasthan Royalty", slug: "rajasthan-royalty", price: "₹19,999", duration: "6D/5N", status: "Published" },
  { id: "5", title: "Kerala Backwaters", slug: "kerala-backwaters", price: "₹15,999", duration: "5D/4N", status: "Draft" },
  { id: "6", title: "Himachal Highlands", slug: "himachal-highlands", price: "₹10,999", duration: "5D/4N", status: "Draft" },
];

export default function AdminPackagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold">Packages</h1>
          <p className="text-muted-foreground">Manage your tour packages.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Package
        </Button>
      </div>

      <DataTable
        columns={[
          { key: "title", label: "Title" },
          { key: "slug", label: "Slug" },
          { key: "price", label: "Price" },
          { key: "duration", label: "Duration" },
          {
            key: "status",
            label: "Status",
            render: (value) => (
              <span className={`text-sm font-medium ${value === "Published" ? "text-green-500" : "text-amber-500"}`}>
                {value as string}
              </span>
            ),
          },
        ]}
        data={PACKAGES}
        onEdit={(id) => console.log("Edit:", id)}
        onDelete={(id) => console.log("Delete:", id)}
      />
    </div>
  );
}
