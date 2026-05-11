import HomePage from "@/app/(home)/page";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return <HomePage locale={lang} />;
}

export function generateStaticParams() {
  return [{ lang: "zh" }];
}
