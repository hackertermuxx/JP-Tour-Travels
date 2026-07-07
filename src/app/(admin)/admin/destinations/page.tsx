"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/DataTable";
import { Plus } from "lucide-react";

const DESTINATIONS = [
  { id: "1", name: "Kashmir", slug: "kashmir", region: "North India", status: "Published" },
  { id: "2", name: "Goa", slug: "goa", region: "West India", status: "Published" },
  { id: "3", name: "Manali", slug: "manali", region: "North India", status: "Published" },
  { id: "4", name: "Rajasthan", slug: "rajasthan", region: "North India", status: "Published" },
  { id: "5", name: "Kerala", slug: "kerala", region: "South India", status: "Draft" },
  { id: "6", name: "Darjeeling", slug: "darjeeling", region: "East India", status: "Draft" },
];

export default function AdminDestinationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold">Destinations</h1>
          <p className="text-muted-foreground">Manage destinations and regions.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Destination
        </Button>
      </div>

      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "slug", label: "Slug" },
          { key: "region", label: "Region" },
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
        data={DESTINATIONS}
        onEdit={(id) => console.log("Edit:", id)}
        onDelete={(id) => console.log("Delete:", id)}
      />
    </div>
  );
}
