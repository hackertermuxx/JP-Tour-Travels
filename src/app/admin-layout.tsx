"use client";

import { PageTransition } from "@/components/shared/PageTransition";

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
