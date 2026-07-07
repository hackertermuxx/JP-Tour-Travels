import Link from "next/link";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS, EMAIL, PHONE, ADDRESS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold">{SITE_NAME}</h3>
            <p className="mt-2 text-sm text-secondary-foreground/80">
              Your trusted travel partner for unforgettable journeys and premium travel experiences.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-secondary-foreground/80 transition-colors hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider">Book Now</h4>
            <p className="mb-4 text-sm text-secondary-foreground/80">
              Ready to start your journey? Book directly via WhatsApp.
            </p>
            <WhatsAppButton position="inline" />
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/20 pt-6 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
