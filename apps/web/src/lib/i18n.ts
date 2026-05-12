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
      nav: ["Docs", "Templates", "Packages", "GitHub"],
      title: "Launch faster with a production-grade TypeScript monorepo.",
      description:
        "LaunchBase is a clean, AI-ready starter for building modern full-stack products with Turborepo, Next.js, Hono, PostgreSQL, and Vercel.",
      primaryCta: "Get Started",
      secondaryCta: "View on GitHub",
      github: "GitHub",
      deploy: "Deploy",
      docs: "Docs",
      preview: {
        treeTitle: "Monorepo",
        terminalTitle: "Terminal",
        deployTitle: "Deploy",
        deployStatus: "Production checks passed",
        command: "pnpm build",
        output: "web, docs, packages ready",
      },
      featuresTitle: "Everything needed to start from a clean baseline.",
      featuresDescription:
        "The starter keeps infrastructure decisions explicit so a team or coding agent can move without guessing.",
      features: [
        ["Monorepo Ready", "Turborepo, pnpm workspaces, shared tooling, and clear package boundaries."],
        ["Type-safe API", "oRPC and TanStack Query wiring for predictable full-stack contracts."],
        ["AI Coding Rules", "Root and package-local AGENTS.md files define safe editing behavior."],
        ["Vercel First", "App structure, env guidance, and build commands match Vercel deployment."],
        ["Database Ready", "PostgreSQL, Drizzle ORM, Redis, auth, and env validation are in place."],
        [
          "Production Workflow",
          "CI, dependency automation, telemetry, analytics, and security packages are included.",
        ],
      ],
      architectureTitle: "A starter with visible boundaries.",
      architectureDescription:
        "LaunchBase favors small packages and explicit ownership over hidden framework magic.",
      architecture: [
        ["apps/web", "Primary product surface, routes, auth mounts, and RPC entrypoints."],
        ["apps/api", "API boundary prepared for services that need an independent runtime."],
        ["packages/ui", "Shared primitives, fonts, styles, and low-level utilities."],
        ["packages/db", "Drizzle schema, database client, and migration configuration."],
        ["packages/config", "Shared configuration boundary for product-specific defaults."],
        ["AGENTS.md", "Coding rules, ownership constraints, and safety checks for AI agents."],
        ["DESIGN.md", "Visual system rules that keep implementation consistent over time."],
      ],
      workflowTitle: "Built for AI-assisted engineering.",
      workflowDescription:
        "LaunchBase gives coding agents the context they need: task contracts, package boundaries, review habits, and validation commands.",
      workflow: [
        ["Read", "Agents start from AGENTS.md, DESIGN.md, package rules, and existing code."],
        ["Edit", "Changes stay small, typed, scoped to package ownership, and aligned with local patterns."],
        ["Review", "Lint, typecheck, build, and visual QA make handoff evidence explicit."],
      ],
      footer: "Production-grade TypeScript starter. MIT licensed with upstream attribution preserved.",
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
      nav: ["文档", "模板", "包", "GitHub"],
      title: "用生产级 TypeScript monorepo 更快启动产品。",
      description:
        "LaunchBase 是一个整洁、AI-ready 的启动模板，用于基于 Turborepo、Next.js、Hono、PostgreSQL 和 Vercel 构建现代全栈产品。",
      primaryCta: "开始使用",
      secondaryCta: "查看 GitHub",
      github: "GitHub",
      deploy: "部署",
      docs: "文档",
      preview: {
        treeTitle: "Monorepo",
        terminalTitle: "Terminal",
        deployTitle: "Deploy",
        deployStatus: "生产检查已通过",
        command: "pnpm build",
        output: "web、docs、packages 已就绪",
      },
      featuresTitle: "从干净基线开始所需的一切。",
      featuresDescription: "LaunchBase 把基础设施决策显式化，让团队和 coding agent 都不需要猜测。",
      features: [
        ["Monorepo Ready", "Turborepo、pnpm workspaces、共享工具和清晰的包边界。"],
        ["Type-safe API", "oRPC 与 TanStack Query 串联出可预测的全栈契约。"],
        ["AI Coding Rules", "根目录与包级 AGENTS.md 定义安全编辑行为。"],
        ["Vercel First", "应用结构、环境变量说明和构建命令匹配 Vercel 部署。"],
        ["Database Ready", "PostgreSQL、Drizzle ORM、Redis、auth 和环境校验已就绪。"],
        ["Production Workflow", "包含 CI、依赖自动化、telemetry、analytics 和 security 包。"],
      ],
      architectureTitle: "边界清晰的 starter。",
      architectureDescription: "LaunchBase 优先使用小包和明确所有权，而不是隐藏在框架魔法里。",
      architecture: [
        ["apps/web", "主产品界面、路由、auth 挂载和 RPC 入口。"],
        ["apps/api", "为需要独立运行时的服务预留 API 边界。"],
        ["packages/ui", "共享 UI 原语、字体、样式和底层工具。"],
        ["packages/db", "Drizzle schema、数据库客户端和迁移配置。"],
        ["packages/config", "产品默认配置的共享边界。"],
        ["AGENTS.md", "AI agent 的编码规则、所有权约束和安全检查。"],
        ["DESIGN.md", "让后续实现保持一致的视觉系统规则。"],
      ],
      workflowTitle: "为 AI 辅助工程而建。",
      workflowDescription:
        "LaunchBase 为 coding agent 提供必要上下文：任务契约、包边界、审查习惯和验证命令。",
      workflow: [
        ["Read", "Agent 从 AGENTS.md、DESIGN.md、包规则和现有代码开始。"],
        ["Edit", "改动保持小、类型安全、范围清晰，并符合本地模式。"],
        ["Review", "通过 lint、typecheck、build 和视觉 QA 交付明确证据。"],
      ],
      footer: "生产级 TypeScript starter。MIT 许可，并保留上游署名。",
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
