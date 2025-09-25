"use client";

import { usePathname } from "next/navigation";
import ClientProviders from "./provaider";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noLayoutPages = [
    "/forgot-password",
    "/reset-password",
    "/login",
    "/register",
  ];

  if (noLayoutPages.includes(pathname)) {
    return <ClientProviders>{children}</ClientProviders>;
  }

  return (
    <ClientProviders>
      <main className="flex-grow">{children}</main>
    </ClientProviders>
  );
}
