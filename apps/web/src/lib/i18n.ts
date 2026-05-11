export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = "en" satisfies Locale;

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
    metadata: {
      description: "A production-ready monorepo starter for modern TypeScript products",
    },
    home: {
      description: "A production-ready monorepo starter for shipping modern TypeScript products.",
      button: "Button",
      apiHealthLabel: "API Health :",
      apiHealthError: "[API] Failed to fetch API Health!",
    },
    login: {
      title: "Sign in",
      description: "Continue with Google to access protected LaunchBase routes.",
      continueWithGoogle: "Continue with Google",
      redirecting: "Redirecting...",
      startError: "Unable to start Google sign in.",
    },
    admin: {
      title: "Dashboard",
      welcome: "Welcome",
    },
  },
  zh: {
    metadata: {
      description: "面向现代 TypeScript 产品的生产可用 monorepo 启动模板",
    },
    home: {
      description: "面向现代 TypeScript 产品交付的生产可用 monorepo 启动模板。",
      button: "按钮",
      apiHealthLabel: "API 状态：",
      apiHealthError: "[API] 获取 API 状态失败！",
    },
    login: {
      title: "登录",
      description: "使用 Google 继续访问 LaunchBase 受保护路由。",
      continueWithGoogle: "使用 Google 继续",
      redirecting: "正在跳转...",
      startError: "无法启动 Google 登录。",
    },
    admin: {
      title: "控制台",
      welcome: "欢迎",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
