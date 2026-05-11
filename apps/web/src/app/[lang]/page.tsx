import { HomePage } from "@/components/home-page";
import { getDictionary, isLocale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return <HomePage locale={lang} />;
}

export function generateStaticParams() {
  return [{ lang: "zh" }];
}

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang) || lang === "en") notFound();

  return {
    title: "LaunchBase",
    description: getDictionary(lang).metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/",
        "zh-CN": `/${lang}`,
      },
    },
  };
}
