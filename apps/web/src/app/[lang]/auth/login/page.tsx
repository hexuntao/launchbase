import { LoginPage } from "@/components/login-page";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return <LoginPage locale={lang} />;
}

export function generateStaticParams() {
  return [{ lang: "zh" }];
}
