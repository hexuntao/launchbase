import { DocsSidebarToolbar } from "@/components/docs-sidebar-toolbar";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree("en")}
      sidebar={{ footer: <DocsSidebarToolbar /> }}
      {...baseOptions("en", { docsSidebarToolbar: true })}
    >
      {children}
    </DocsLayout>
  );
}
