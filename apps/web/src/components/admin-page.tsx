import { getDictionary, getLocalizedPath, type Locale } from "@/lib/i18n";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { connection } from "next/server";
import Dashboard from "@/app/(admin)/admin/dashboard";
import type { Route } from "next";

export async function AdminPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  await connection();
  const { auth } = await import("@repo/auth/server");
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect(getLocalizedPath(locale, "/auth/login") as Route);
  if (session.user.role !== "admin") redirect(getLocalizedPath(locale, "/") as Route);

  return (
    <div>
      <h1>{dictionary.admin.title}</h1>
      <p>
        {dictionary.admin.welcome} {session.user.name}
      </p>
      <Dashboard session={session} />
    </div>
  );
}
