"use client";

import { Separator } from "@/components/ui/separator";
import { SettingsPanel } from "@/components/admin/SettingsPanel";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your site configuration.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SettingsPanel
          title="General"
          description="Basic site information"
          fields={[
            { id: "site-name", label: "Site Name", type: "text", defaultValue: "JP Tour Travels" },
            { id: "site-email", label: "Email", type: "email", defaultValue: "info@jptourtravels.com" },
            { id: "site-phone", label: "Phone", type: "tel", defaultValue: "+91 XXXXXXXXXX" },
            { id: "site-address", label: "Address", type: "textarea", defaultValue: "Your City, State, India" },
          ]}
        />

        <SettingsPanel
          title="WhatsApp"
          description="WhatsApp integration settings"
          fields={[
            { id: "wa-number", label: "WhatsApp Number (with country code)", type: "tel", defaultValue: "+919XXXXXXXXX" },
            { id: "wa-message", label: "Default Message", type: "textarea", defaultValue: "Hi! I'm interested in booking a tour package." },
          ]}
        />
      </div>

      <Separator />

      <SettingsPanel
        title="Social Links"
        description="Your social media profiles"
        fields={[
          { id: "facebook", label: "Facebook URL", type: "url", defaultValue: "https://facebook.com/jptourtravels" },
          { id: "instagram", label: "Instagram URL", type: "url", defaultValue: "https://instagram.com/jptourtravels" },
          { id: "youtube", label: "YouTube URL", type: "url", defaultValue: "https://youtube.com/@jptourtravels" },
        ]}
      />
    </div>
  );
}
