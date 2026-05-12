import { RootProvider } from "fumadocs-ui/provider/next";
import "@/styles/global.css";
import { type Metadata, type Viewport } from "next";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { fontsVariable } from "@repo/ui/fonts";
import { i18nUI } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    template: "%s | LaunchBase Docs",
    default: "LaunchBase Docs",
  },
  description:
    "Developer documentation for LaunchBase, a production-grade TypeScript monorepo starter for modern full-stack products.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon.svg",
        href: "/images/icon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon.svg",
        href: "/images/icon.svg",
      },
    ],
  },
  metadataBase: new URL("https://launchbase.dev"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontsVariable} suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <m.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.23 }}
          className="bg-background text-foreground font-geist flex min-h-screen flex-col antialiased"
        >
          <RootProvider i18n={i18nUI.provider("en")}>{children}</RootProvider>
        </m.body>
      </LazyMotion>
    </html>
  );
}
