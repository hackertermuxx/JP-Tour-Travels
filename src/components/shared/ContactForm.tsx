"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WHATSAPP_URL } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi! My name is ${formData.name}. Email: ${formData.email}. Phone: ${formData.phone}. Message: ${formData.message}`;
    window.open(`${WHATSAPP_URL}&text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          placeholder="Your full name"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="your@email.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Tell us about your travel plans..."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full gap-2 bg-green-500 hover:bg-green-600"
      >
        <MessageCircle className="h-5 w-5" />
        Send via WhatsApp
      </Button>
    </form>
  );
}
