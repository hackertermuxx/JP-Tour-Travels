"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save } from "lucide-react";

interface SettingsField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "url";
  defaultValue?: string;
}

interface SettingsPanelProps {
  title: string;
  description?: string;
  fields: SettingsField[];
}

export function SettingsPanel({ title, description, fields }: SettingsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-lg">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.id}
                rows={3}
                defaultValue={field.defaultValue}
              />
            ) : (
              <Input
                id={field.id}
                type={field.type}
                defaultValue={field.defaultValue}
              />
            )}
          </div>
        ))}
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save
        </Button>
      </CardContent>
    </Card>
  );
}
