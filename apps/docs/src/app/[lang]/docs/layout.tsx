import { DocsSidebarToolbar } from "@/components/docs-sidebar-toolbar";
import { isLocale } from "@/lib/i18n";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { notFound } from "next/navigation";

export default async function Layout({ children, params }: LayoutProps<"/[lang]/docs">) {
  const { lang } = await params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      sidebar={{ footer: <DocsSidebarToolbar /> }}
      {...baseOptions(lang, { docsSidebarToolbar: true })}
    >
      {children}
    </DocsLayout>
  );
}
