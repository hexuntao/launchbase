import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import { env } from "#env";

const sentryEnv = env();

const isSentryUploadEnabled = Boolean(
  sentryEnv.SENTRY_ORG && sentryEnv.SENTRY_PROJECT && sentryEnv.SENTRY_AUTH_TOKEN
);

/**
 * wraps the next.js config with sentry configuration.
 */
export const withSentry = (nextConfig: NextConfig): NextConfig => {
  if (!isSentryUploadEnabled) {
    return nextConfig;
  }

  const config = {
    ...nextConfig,
    transpilePackages: [...new Set([...(nextConfig.transpilePackages ?? []), "@sentry/nextjs"])],
  };

  return withSentryConfig(config, {
    org: sentryEnv.SENTRY_ORG,
    project: sentryEnv.SENTRY_PROJECT,
    authToken: sentryEnv.SENTRY_AUTH_TOKEN,
    telemetry: false,
    silent: !process.env.CI,
    widenClientFileUpload: true,
  }) as NextConfig;
};
