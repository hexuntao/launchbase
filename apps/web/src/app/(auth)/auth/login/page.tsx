"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import Link from "next/link";
import { authClient } from "@repo/auth/client";
import { Button } from "@repo/ui/button";

function getCallbackUrl(nextPath: string | null) {
  if (!nextPath || !nextPath.startsWith("/")) {
    return "/";
  }

  return nextPath;
}

function LoginContent() {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");

  function signInWithGoogle() {
    setErrorMessage("");

    startTransition(async () => {
      const callbackURL = getCallbackUrl(searchParams.get("next"));
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL,
      });

      if (result.error) {
        setErrorMessage(result.error.message ?? "Unable to start Google sign in.");
      }
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <Link href="/" className="font-asul text-3xl font-medium">
            LaunchBase
          </Link>
          <h1 className="text-lg font-medium">Sign in</h1>
          <p className="text-muted-foreground text-sm">
            Continue with Google to access protected LaunchBase routes.
          </p>
        </div>

        <div className="space-y-3">
          <Button onClick={signInWithGoogle} disabled={isPending} className="w-full" size="lg">
            {isPending ? "Redirecting..." : "Continue with Google"}
          </Button>

          {errorMessage ? (
            <p className="text-destructive text-center text-sm" role="alert">
              {errorMessage}
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center px-4">
          <div className="border-muted border-t-foreground size-5 animate-spin rounded-full border-2" />
        </main>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
