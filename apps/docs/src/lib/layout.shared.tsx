import { getLocalizedPath, i18n, type Locale } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(locale: Locale = "en"): BaseLayoutProps {
  return {
    i18n,
    links: [
      {
        text: "English",
        url: getLocalizedPath("en", "/docs"),
        active: locale === "en" ? "url" : "none",
      },
      {
        text: "中文",
        url: getLocalizedPath("zh", "/docs"),
        active: locale === "zh" ? "url" : "none",
      },
    ],
    nav: {
      url: getLocalizedPath(locale, "/"),
      title: (
        <div className="flex items-center gap-2">
          <img src="/images/icon.svg" alt="LaunchBase" className="h-8 w-auto dark:invert" />
          <span className="font-asul text-2xl">LaunchBase</span>
        </div>
      ),
    },
    githubUrl: "https://github.com/hexuntao/launchbase",
  };
}
