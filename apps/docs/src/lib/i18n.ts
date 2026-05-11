import { defineI18n } from "fumadocs-core/i18n";
import { defineI18nUI } from "fumadocs-ui/i18n";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = "en" satisfies Locale;

export const i18n = defineI18n({
  languages: [...locales],
  defaultLanguage: defaultLocale,
  hideLocale: "default-locale",
  parser: "dir",
});

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: "English",
  },
  zh: {
    displayName: "中文",
    search: "搜索",
    searchNoResult: "没有找到结果",
    toc: "目录",
    tocNoHeadings: "没有标题",
    lastUpdate: "最后更新",
    chooseLanguage: "选择语言",
    nextPage: "下一页",
    previousPage: "上一页",
    chooseTheme: "选择主题",
    editOnGithub: "在 GitHub 上编辑",
  },
});

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, path: string) {
  if (locale === defaultLocale) {
    return path;
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export const dictionaries = {
  en: {
    home: {
      title: "LaunchBase is a production-ready monorepo starter for building modern TypeScript products",
      demo: "See Demo",
      docs: "Read Docs",
      stack: "Production-ready stack, optimized for scale",
    },
  },
  zh: {
    home: {
      title: "LaunchBase 是面向现代 TypeScript 产品的生产可用 monorepo 启动模板",
      demo: "查看演示",
      docs: "阅读文档",
      stack: "面向规模化交付优化的生产级技术栈",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
