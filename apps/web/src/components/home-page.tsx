import { getDictionary, getLocalizedPath, type Locale } from "@/lib/i18n";
import { buttonVariants } from "@repo/ui/button";
import { cn } from "@repo/ui/lib/utils";

const links = {
  docs: "https://launchbase-docs.vercel.app",
  github: "https://github.com/hexuntao/launchbase",
  deploy: "https://vercel.com/new/clone?repository-url=https://github.com/hexuntao/launchbase",
};

const navItems = [
  { href: "#docs" },
  { href: "#templates" },
  { href: "#packages" },
  { href: links.github },
] as const;

const fileTree = [
  ["apps", "web", "docs"],
  ["packages", "ui", "db", "auth", "rpc", "security"],
  ["workflow", "AGENTS.md", "DESIGN.md", "turbo.json"],
] as const;

type HomeDictionary = ReturnType<typeof getDictionary>["home"];

export function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <main className="bg-background text-foreground min-h-svh">
      <Header dictionary={dictionary.home} locale={locale} />
      <Hero dictionary={dictionary.home} locale={locale} />
      <FeatureSection dictionary={dictionary.home} />
      <ArchitectureSection dictionary={dictionary.home} />
      <WorkflowSection dictionary={dictionary.home} />
      <Footer dictionary={dictionary.home} locale={locale} />
    </main>
  );
}

function Header({ dictionary, locale }: { dictionary: HomeDictionary; locale: Locale }) {
  return (
    <header className="border-border/80 bg-background/90 sticky top-0 z-20 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href={getLocalizedPath(locale, "/")}
          className="flex min-w-0 items-center gap-3"
          aria-label="LaunchBase home"
        >
          <img src="/logo.svg" alt="LaunchBase" className="h-8 w-auto shrink-0" />
        </a>
        <nav
          className="text-muted-foreground hidden items-center gap-7 text-sm md:flex"
          aria-label="Primary navigation"
        >
          {dictionary.nav.map((item, index) => (
            <a
              key={item}
              href={navItems[index]?.href ?? links.github}
              className="hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={links.github}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "hidden rounded-full px-4 sm:inline-flex"
            )}
          >
            {dictionary.github}
          </a>
          <a href={links.deploy} className={cn(buttonVariants({ size: "lg" }), "rounded-full px-4")}>
            {dictionary.deploy}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ dictionary, locale }: { dictionary: HomeDictionary; locale: Locale }) {
  return (
    <section className="border-b border-[var(--border-subtle)]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-4xl text-5xl leading-[1.04] font-semibold tracking-[-0.02em] sm:text-6xl">
            <HeroTitle title={dictionary.title} locale={locale} />
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">{dictionary.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.docs}
              className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-5 text-sm")}
            >
              {dictionary.primaryCta}
            </a>
            <a
              href={links.github}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-full px-5 text-sm"
              )}
            >
              {dictionary.secondaryCta}
            </a>
          </div>
        </div>
        <ProductPreview dictionary={dictionary} />
      </div>
    </section>
  );
}

function HeroTitle({ title, locale }: { title: string; locale: Locale }) {
  if (locale !== "en") {
    return title;
  }

  return (
    <>
      Launch faster with a <span className="whitespace-nowrap">production-grade</span> TypeScript monorepo.
    </>
  );
}

function ProductPreview({ dictionary }: { dictionary: HomeDictionary }) {
  return (
    <div className="relative min-w-0">
      <div className="absolute inset-x-8 top-8 -z-10 h-28 rounded-full bg-neutral-200/40 blur-3xl" />
      <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-[var(--shadow-soft)]">
        <div className="border-border bg-muted flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-neutral-300" />
            <span className="size-2.5 rounded-full bg-neutral-300" />
            <span className="size-2.5 rounded-full bg-neutral-300" />
          </div>
          <span className="font-commitmono text-muted-foreground text-xs">launchbase/workspace</span>
        </div>
        <div className="bg-border grid gap-px lg:grid-cols-[0.88fr_1.12fr]">
          <FileTree title={dictionary.preview.treeTitle} />
          <div className="bg-border grid gap-px">
            <TerminalPanel dictionary={dictionary} />
            <DeployPanel dictionary={dictionary} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FileTree({ title }: { title: string }) {
  return (
    <div className="bg-card p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-medium">{title}</h2>
        <span className="font-commitmono bg-muted text-muted-foreground rounded-full px-2 py-1 text-[11px]">
          pnpm
        </span>
      </div>
      <div className="font-commitmono space-y-5 text-sm">
        {fileTree.map(([group, ...items]) => (
          <div key={group}>
            <div className="text-muted-foreground mb-2">{group}/</div>
            <div className="border-border space-y-2 border-l pl-4">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="bg-foreground size-1.5 rounded-full" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TerminalPanel({ dictionary }: { dictionary: HomeDictionary }) {
  return (
    <div className="bg-[var(--code-bg)] p-5 text-[var(--code-fg)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium">{dictionary.preview.terminalTitle}</h2>
        <span className="font-commitmono text-xs text-white/50">ci</span>
      </div>
      <div className="font-commitmono overflow-x-auto text-sm leading-7">
        <div>
          <span className="text-white/40">$</span> {dictionary.preview.command}
        </div>
        <div className="text-white/50">turbo 2.9.9</div>
        <div className="text-white/80">lint cache hit</div>
        <div className="text-white/80">typecheck cache hit</div>
        <div className="text-white/80">{dictionary.preview.output}</div>
      </div>
    </div>
  );
}

function DeployPanel({ dictionary }: { dictionary: HomeDictionary }) {
  return (
    <div className="bg-card p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-medium">{dictionary.preview.deployTitle}</h2>
        <span className="border-border bg-muted text-muted-foreground flex items-center gap-2 rounded-full border px-2 py-1 text-xs">
          <span className="bg-foreground size-1.5 rounded-full" aria-hidden="true" />
          ready
        </span>
      </div>
      <div className="space-y-3">
        {["install", "lint", "typecheck", "build"].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-lg border border-[var(--border-subtle)] px-3 py-2"
          >
            <span className="font-commitmono text-sm">{item}</span>
            <span className="text-muted-foreground text-sm">passed</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground mt-4 text-sm">{dictionary.preview.deployStatus}</p>
    </div>
  );
}

function FeatureSection({ dictionary }: { dictionary: HomeDictionary }) {
  return (
    <section id="templates" className="bg-muted">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionHeading title={dictionary.featuresTitle} description={dictionary.featuresDescription} />
        <div className="border-border bg-border mt-10 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2 lg:grid-cols-3">
          {dictionary.features.map(([title, description]) => (
            <article key={title} className="bg-card p-6">
              <div className="border-border bg-muted mb-7 flex size-9 items-center justify-center rounded-lg border">
                <span className="bg-foreground size-2 rounded-full" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-6">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection({ dictionary }: { dictionary: HomeDictionary }) {
  return (
    <section id="packages" className="bg-background border-y border-[var(--border-subtle)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionHeading
          title={dictionary.architectureTitle}
          description={dictionary.architectureDescription}
        />
        <div className="mt-10 grid gap-3 lg:grid-cols-7">
          {dictionary.architecture.map(([name, description], index) => (
            <article
              key={name}
              className={cn(
                "rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-subtle)]",
                index < 2 ? "lg:col-span-2" : "lg:col-span-1",
                index > 4 ? "lg:col-span-2" : ""
              )}
            >
              <h3 className="font-commitmono text-sm font-medium">{name}</h3>
              <p className="text-muted-foreground mt-4 text-sm leading-6">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection({ dictionary }: { dictionary: HomeDictionary }) {
  return (
    <section id="docs" className="bg-muted">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
        <SectionHeading title={dictionary.workflowTitle} description={dictionary.workflowDescription} />
        <div className="grid gap-4">
          {dictionary.workflow.map(([title, description], index) => (
            <article
              key={title}
              className="border-border bg-card flex gap-4 rounded-xl border p-5 shadow-[var(--shadow-subtle)]"
            >
              <div className="font-commitmono bg-foreground text-background flex size-9 shrink-0 items-center justify-center rounded-full text-xs">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-base font-medium">{title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl leading-tight font-semibold tracking-[-0.01em] sm:text-4xl">{title}</h2>
      <p className="text-muted-foreground mt-4 text-base leading-7">{description}</p>
    </div>
  );
}

function Footer({ dictionary, locale }: { dictionary: HomeDictionary; locale: Locale }) {
  return (
    <footer className="border-border bg-background border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{dictionary.footer}</p>
        <div className="flex items-center gap-4">
          <a href={links.github} className="hover:text-foreground">
            GitHub
          </a>
          <a href={links.docs} className="hover:text-foreground">
            Docs
          </a>
          <a href="/LICENSE" className="hover:text-foreground">
            License
          </a>
          <a href={getLocalizedPath(locale === "en" ? "zh" : "en", "/")} className="hover:text-foreground">
            {locale === "en" ? "中文" : "English"}
          </a>
        </div>
      </div>
    </footer>
  );
}
