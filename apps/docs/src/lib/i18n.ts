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
      eyebrow: "LaunchBase Docs",
      title: "Build from a production-grade TypeScript monorepo.",
      description:
        "Read the contracts for setup, package boundaries, environment variables, AI coding workflow, and Vercel deployment.",
      demo: "Open Web App",
      docs: "Start Reading",
      command: "pnpm install && pnpm web:dev",
      sections: [
        {
          title: "Start",
          description: "Install, configure env, run local services, and validate the workspace.",
          href: "/docs/quick-start",
        },
        {
          title: "Architecture",
          description: "Understand apps, packages, boundaries, and the current monorepo contract.",
          href: "/docs/architecture/monorepo-architecture",
        },
        {
          title: "AI workflow",
          description: "Use AGENTS.md and DESIGN.md as explicit rules for coding agents.",
          href: "/docs/ai-coding/workflow",
        },
        {
          title: "Deploy",
          description: "Deploy the web app to Vercel with pnpm, Turborepo, and managed services.",
          href: "/docs/getting-started/deployment",
        },
      ],
    },
  },
  zh: {
    home: {
      eyebrow: "LaunchBase 文档",
      title: "从生产级 TypeScript monorepo 开始构建。",
      description: "阅读 setup、package 边界、环境变量、AI 编码工作流和 Vercel 部署契约。",
      demo: "打开 Web App",
      docs: "开始阅读",
      command: "pnpm install && pnpm web:dev",
      sections: [
        {
          title: "开始",
          description: "安装、配置 env、启动本地服务，并验证 workspace。",
          href: "/zh/docs/quick-start",
        },
        {
          title: "架构",
          description: "理解 apps、packages、边界和当前 monorepo 契约。",
          href: "/zh/docs/architecture/monorepo-architecture",
        },
        {
          title: "AI 工作流",
          description: "用 AGENTS.md 和 DESIGN.md 为 coding agents 提供明确规则。",
          href: "/zh/docs/ai-coding/workflow",
        },
        {
          title: "部署",
          description: "使用 pnpm、Turborepo 和托管服务将 web app 部署到 Vercel。",
          href: "/zh/docs/getting-started/deployment",
        },
      ],
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
