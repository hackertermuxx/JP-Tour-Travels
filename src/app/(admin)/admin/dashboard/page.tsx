"use client";

import { Package, MapPin, MessageCircle, Star } from "lucide-react";
import { DashboardCard } from "@/components/admin/DashboardCard";
import { DataTable } from "@/components/admin/DataTable";

const STATS = [
  { title: "Total Packages", value: "24", description: "12 published, 12 draft", icon: <Package className="h-6 w-6" /> },
  { title: "Destinations", value: "15", description: "Across India", icon: <MapPin className="h-6 w-6" /> },
  { title: "WhatsApp Bookings", value: "156", description: "This month", icon: <MessageCircle className="h-6 w-6" /> },
  { title: "Reviews", value: "48", description: "4.8 average rating", icon: <Star className="h-6 w-6" /> },
];

const RECENT_PACKAGES = [
  { id: "1", title: "Kashmir Paradise", status: "Published", price: "₹14,999", bookings: "24" },
  { id: "2", title: "Goa Beach Escape", status: "Published", price: "₹12,999", bookings: "18" },
  { id: "3", title: "Manali Adventure", status: "Draft", price: "₹8,999", bookings: "0" },
  { id: "4", title: "Rajasthan Royalty", status: "Published", price: "₹19,999", bookings: "12" },
];

const RECENT_BOOKINGS = [
  { id: "1", name: "Rahul Sharma", package: "Kashmir Paradise", date: "2025-01-15", amount: "₹14,999" },
  { id: "2", name: "Priya Patel", package: "Goa Beach Escape", date: "2025-01-14", amount: "₹12,999" },
  { id: "3", name: "Amit Singh", package: "Rajasthan Royalty", date: "2025-01-12", amount: "₹19,999" },
  { id: "4", name: "Sneha Verma", package: "Kerala Backwaters", date: "2025-01-10", amount: "₹15,999" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your business.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.title} className="rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg">
            <DashboardCard {...stat} className="border-0 bg-transparent p-0 shadow-none" />
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-heading text-lg font-semibold">Recent Packages</h2>
          <div className="rounded-xl border bg-card shadow-sm">
            <DataTable
              columns={[
                { key: "title", label: "Title" },
                { key: "status", label: "Status", render: (value) => (
                  <span className={`text-sm font-medium ${value === "Published" ? "text-green-500" : "text-amber-500"}`}>
                    {value as string}
                  </span>
                )},
                { key: "price", label: "Price" },
                { key: "bookings", label: "Bookings" },
              ]}
              data={RECENT_PACKAGES}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-heading text-lg font-semibold">Recent WhatsApp Bookings</h2>
          <div className="rounded-xl border bg-card shadow-sm">
            <DataTable
              columns={[
                { key: "name", label: "Name" },
                { key: "package", label: "Package" },
                { key: "date", label: "Date" },
                { key: "amount", label: "Amount" },
              ]}
              data={RECENT_BOOKINGS}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
