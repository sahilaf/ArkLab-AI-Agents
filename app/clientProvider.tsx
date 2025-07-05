"use client";

import { SessionProvider } from "next-auth/react";
import { Providers } from "../store/providers";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Providers>{children}</Providers>
    </SessionProvider>
  );
}