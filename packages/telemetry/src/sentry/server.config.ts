import * as Sentry from "@sentry/nextjs";
import { env } from "#env";

/**
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/
 *
 * - This file configures the initialization of Sentry on the server.
 * - The config you add here will be used whenever the server handles a request.
 *
 */

export const initSentry = (): ReturnType<typeof Sentry.init> => {
  const sentryDsn = env().NEXT_PUBLIC_SENTRY_DSN;

  if (!sentryDsn) {
    return undefined;
  }

  return Sentry.init({
    dsn: sentryDsn,
    environment: process.env.NODE_ENV,
    enabled: process.env.NODE_ENV === "production",
    tracesSampleRate: 0.1,
    enableLogs: true,
    debug: false,
  });
};
