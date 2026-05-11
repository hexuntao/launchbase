import { i18nUI, isLocale } from "@/lib/i18n";
import { I18nProvider } from "fumadocs-ui/contexts/i18n";
import { notFound } from "next/navigation";

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return <I18nProvider {...i18nUI.provider(lang)}>{children}</I18nProvider>;
}
