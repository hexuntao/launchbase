import HomePage from "@/app/(home)/page";
import { isLocale } from "@/lib/i18n";
import { baseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return (
    <HomeLayout {...baseOptions(lang)}>
      <HomePage locale={lang} />
    </HomeLayout>
  );
}

export function generateStaticParams() {
  return [{ lang: "zh" }];
}
