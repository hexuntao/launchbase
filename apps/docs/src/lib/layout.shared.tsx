import { LanguageSelect, LanguageSelectText } from "@/components/language-select";
import { getLocalizedPath, i18n, type Locale } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

type BaseOptions = {
  docsSidebarToolbar?: boolean;
};

export function baseOptions(locale: Locale = "en", options: BaseOptions = {}): BaseLayoutProps {
  const useDocsSidebarToolbar = options.docsSidebarToolbar === true;

  return {
    i18n: useDocsSidebarToolbar ? false : i18n,
    slots: useDocsSidebarToolbar
      ? undefined
      : {
          languageSelect: {
            root: LanguageSelect,
            text: LanguageSelectText,
          },
        },
    themeSwitch: useDocsSidebarToolbar ? { enabled: false } : undefined,
    nav: {
      url: getLocalizedPath(locale, "/"),
      title: (
        <div className="flex items-center gap-2">
          <img src="/images/icon.svg" alt="LaunchBase" className="h-8 w-auto dark:invert" />
          <span className="font-asul text-2xl">LaunchBase</span>
        </div>
      ),
    },
    githubUrl: useDocsSidebarToolbar ? undefined : "https://github.com/hexuntao/launchbase",
  };
}
