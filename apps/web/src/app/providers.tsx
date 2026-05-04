"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";

export function Providers(props: { children: React.ReactNode }) {
  return <NuqsAdapter>{props.children}</NuqsAdapter>;
}
