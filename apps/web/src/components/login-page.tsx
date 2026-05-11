"use client";

import { getDictionary, getLocalizedPath, type Locale } from "@/lib/i18n";
import { authClient } from "@repo/auth/client";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import type { Route } from "next";

function getCallbackUrl(nextPath: string | null, locale: Locale) {
  if (!nextPath || !nextPath.startsWith("/")) {
    return getLocalizedPath(locale, "/");
  }

  return nextPath;
}

function LoginContent({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");

  function signInWithGoogle() {
    setErrorMessage("");

    startTransition(async () => {
      const callbackURL = getCallbackUrl(searchParams.get("next"), locale);
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL,
      });

      if (result.error) {
        setErrorMessage(result.error.message ?? dictionary.login.startError);
      }
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <Link href={getLocalizedPath(locale, "/") as Route} className="font-asul text-3xl font-medium">
            LaunchBase
          </Link>
          <h1 className="text-lg font-medium">{dictionary.login.title}</h1>
          <p className="text-muted-foreground text-sm">{dictionary.login.description}</p>
        </div>

        <div className="space-y-3">
          <Button onClick={signInWithGoogle} disabled={isPending} className="w-full" size="lg">
            {isPending ? dictionary.login.redirecting : dictionary.login.continueWithGoogle}
          </Button>

          {errorMessage ? (
            <p className="text-destructive text-center text-sm" role="alert">
              {errorMessage}
            </p>
          ) : null}
        </div>

        <div className="text-muted-foreground flex items-center justify-center gap-2 text-xs">
          <a className="hover:text-foreground" href={getLocalizedPath("en", "/auth/login")}>
            English
          </a>
          <span>/</span>
          <a className="hover:text-foreground" href={getLocalizedPath("zh", "/auth/login")}>
            中文
          </a>
        </div>
      </div>
    </main>
  );
}

export function LoginPage({ locale }: { locale: Locale }) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center px-4">
          <div className="border-muted border-t-foreground size-5 animate-spin rounded-full border-2" />
        </main>
      }
    >
      <LoginContent locale={locale} />
    </Suspense>
  );
}
