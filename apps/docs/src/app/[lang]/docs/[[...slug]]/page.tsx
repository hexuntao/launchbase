import { isLocale } from "@/lib/i18n";
import { getMDXComponents } from "@/mdx-components";
import { getPageImage, source } from "@/lib/source";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export default async function Page(props: PageProps<"/[lang]/docs/[[...slug]]">) {
  const params = await props.params;
  if (!isLocale(params.lang) || params.lang === "en") notFound();

  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.getPages("zh").map((page) => ({
    lang: "zh",
    slug: page.slugs,
  }));
}

export async function generateMetadata(props: PageProps<"/[lang]/docs/[[...slug]]">): Promise<Metadata> {
  const params = await props.params;
  if (!isLocale(params.lang) || params.lang === "en") notFound();

  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
      languages: {
        en: source.getPage(params.slug, "en")?.url ?? "/docs",
        "zh-CN": page.url,
      },
    },
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
