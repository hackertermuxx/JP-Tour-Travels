"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "@/lib/utils";

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 w-full border-b transition-colors",
          transparent
            ? "border-transparent bg-transparent"
            : "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-primary">{SITE_NAME}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <WhatsAppButton position="inline" />
            </div>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
