"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SEOEditorProps {
  defaultTitle?: string;
  defaultDescription?: string;
  page: string;
}

export function SEOEditor({
  defaultTitle = "",
  defaultDescription = "",
  page,
}: SEOEditorProps) {
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-lg capitalize">
          {page} — SEO Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`seo-title-${page}`}>Meta Title</Label>
          <Input
            id={`seo-title-${page}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            {title.length} characters (recommended: 50-60)
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`seo-desc-${page}`}>Meta Description</Label>
          <Textarea
            id={`seo-desc-${page}`}
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            {description.length} characters (recommended: 150-160)
          </p>
        </div>
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
}
