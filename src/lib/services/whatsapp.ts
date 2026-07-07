import { WHATSAPP_NUMBER } from "@/lib/constants";

export interface BookingRequest {
  packageName?: string;
  destination?: string;
  travelDate?: string;
  travelers?: number;
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

function sanitizePhone(phone: string): string {
  return phone.replace(/[^0-9+]/g, "");
}

export function generateWhatsAppUrl(phone: string, message: string): string {
  const sanitized = sanitizePhone(phone);
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
}

export function generateBookingMessage(request: BookingRequest): string {
  const lines: string[] = ["*New Booking Request*", ""];

  if (request.packageName) {
    lines.push(`*Package:* ${request.packageName}`);
  }
  if (request.destination) {
    lines.push(`*Destination:* ${request.destination}`);
  }
  if (request.travelDate) {
    lines.push(`*Travel Date:* ${request.travelDate}`);
  }
  if (request.travelers) {
    lines.push(`*Travelers:* ${request.travelers}`);
  }

  lines.push("", "*Contact Details*");
  lines.push(`*Name:* ${request.name}`);
  lines.push(`*Phone:* ${request.phone}`);
  if (request.email) {
    lines.push(`*Email:* ${request.email}`);
  }
  if (request.message) {
    lines.push("", "*Message:*");
    lines.push(request.message);
  }

  return lines.join("\n");
}

export function generatePackageInquiryUrl(packageName: string): string {
  const message = `Hi! I'm interested in the *${packageName}* package. Please share more details including pricing, availability, and itinerary.`;
  return generateWhatsAppUrl(WHATSAPP_NUMBER, message);
}

export function generateQuickBookingUrl(destination?: string): string {
  const message = destination
    ? `Hi! I want to book a trip to ${destination}. Please share available packages and pricing.`
    : "Hi! I'm interested in booking a tour package. Please share available options and pricing.";
  return generateWhatsAppUrl(WHATSAPP_NUMBER, message);
}

export function generateSupportUrl(): string {
  return generateWhatsAppUrl(
    WHATSAPP_NUMBER,
    "Hi! I need assistance with my booking. Please help."
  );
}

export function generateContactFormUrl(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  const lines = [
        `*New Contact Inquiry*`,
        "",
        `*Name:* ${data.name}`,
        `*Email:* ${data.email}`,
      ];
  if (data.phone) {
    lines.push(`*Phone:* ${data.phone}`);
  }
  lines.push("", "*Message:*");
  lines.push(data.message);

  return generateWhatsAppUrl(WHATSAPP_NUMBER, lines.join("\n"));
}

export function sendBookingRequest(request: BookingRequest): string {
  const message = generateBookingMessage(request);
  return generateWhatsAppUrl(WHATSAPP_NUMBER, message);
}
