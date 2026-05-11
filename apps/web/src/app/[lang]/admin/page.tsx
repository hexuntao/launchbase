import { AdminPage } from "@/components/admin-page";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function DashboardPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return (
    <Suspense>
      <AdminPage locale={lang} />
    </Suspense>
  );
}

export function generateStaticParams() {
  return [{ lang: "zh" }];
}
