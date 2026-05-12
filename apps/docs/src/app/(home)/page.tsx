import { CopyCodeBlock } from "@/components/ui/copy-code-block";
import { Icons } from "@/components/ui/icons";
import { getDictionary, getLocalizedPath, type Locale } from "@/lib/i18n";
import * as motion from "motion/react-client";

export default function HomePage({ locale = "en" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <main>
      <section className="border-border-subtle bg-background border-b px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-muted-foreground text-sm font-medium"
            >
              {dictionary.home.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-foreground max-w-3xl text-4xl leading-tight font-semibold text-balance md:text-6xl"
            >
              {dictionary.home.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-muted-foreground max-w-2xl text-base leading-7 md:text-lg"
            >
              {dictionary.home.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="max-w-xl"
            >
              <CopyCodeBlock value={dictionary.home.command} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.16,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href={getLocalizedPath(locale, "/docs")}
                className="bg-primary text-primary-foreground inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
              >
                {dictionary.home.docs}
                <Icons.LinkSquare />
              </a>
              <a
                href="https://launchbase-web.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="border-border text-foreground hover:bg-muted inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {dictionary.home.demo}
                <Icons.LinkSquare />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="border-border bg-card shadow-soft overflow-hidden rounded-2xl border"
          >
            <div className="border-border-subtle bg-card-subtle flex items-center justify-between border-b px-4 py-3">
              <span className="text-muted-foreground text-xs font-medium">launchbase/docs</span>
              <span className="border-border bg-background rounded-full border px-2.5 py-1 text-xs">
                ready
              </span>
            </div>
            <div className="grid gap-px bg-neutral-200 text-sm dark:bg-neutral-800">
              {[
                "content/docs/(introduction)/quick-start.mdx",
                "content/docs/getting-started/environment-variables.mdx",
                "content/docs/architecture/package-boundaries.mdx",
                "content/docs/ai-coding/workflow.mdx",
                "content/docs/reference/troubleshooting.mdx",
              ].map((item) => (
                <div key={item} className="bg-card flex min-w-0 items-center justify-between gap-4 px-4 py-3">
                  <code className="font-mono text-xs break-all text-neutral-700 dark:text-neutral-300">
                    {item}
                  </code>
                  <span className="text-muted-foreground shrink-0 text-xs">mdx</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.home.sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="border-border bg-card hover:border-foreground/25 group rounded-2xl border p-5 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-foreground text-base font-semibold">{section.title}</h2>
                <Icons.LinkSquare className="text-muted-foreground group-hover:text-foreground mt-0.5 size-4 transition-colors" />
              </div>
              <p className="text-muted-foreground mt-3 text-sm leading-6">{section.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
