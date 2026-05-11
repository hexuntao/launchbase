import { defaults } from "@nosecone/next";
import type { Options as NoseconeOptions } from "@nosecone/next";
import { env } from "../env";

const isDev = process.env.NODE_ENV === "development";
const securityEnv = env();
type CspHostSource =
  | `${string}://${string}.${string}`
  | `${string}://${string}.${string}:${number}`
  | `${string}://localhost`
  | `${string}://localhost:${number}`;
const assetOrigin = securityEnv.NEXT_PUBLIC_ASSET_ORIGIN
  ? (new URL(securityEnv.NEXT_PUBLIC_ASSET_ORIGIN).origin as CspHostSource)
  : undefined;
const assetSources = assetOrigin ? [assetOrigin] : [];
const sentryCspReportEndpoint = securityEnv.NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT;

export const securityHeadersOptions: NoseconeOptions = {
  ...defaults,
  contentSecurityPolicy: {
    ...defaults.contentSecurityPolicy,
    directives: {
      ...defaults.contentSecurityPolicy.directives,
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        ...(isDev ? (["'unsafe-eval'"] as const) : []),
        ...assetSources,
        "https://*.posthog.com",
        "https://static.cloudflareinsights.com",
      ],
      connectSrc: [
        ...defaults.contentSecurityPolicy.directives.connectSrc,
        ...assetSources,
        "https://*.posthog.com",
        "https://*.sentry.io",
      ],
      workerSrc: [...defaults.contentSecurityPolicy.directives.workerSrc, "blob:", "data:"],
      imgSrc: [...defaults.contentSecurityPolicy.directives.imgSrc, "https://*.posthog.com"],
      styleSrc: [...defaults.contentSecurityPolicy.directives.styleSrc, ...assetSources],
      fontSrc: [...defaults.contentSecurityPolicy.directives.fontSrc, "https://*.posthog.com"],
      mediaSrc: [...defaults.contentSecurityPolicy.directives.mediaSrc, "https://*.posthog.com"],
      frameAncestors: ["'self'", "https://*.posthog.com"],
      upgradeInsecureRequests: !isDev,
      ...(sentryCspReportEndpoint ? { reportUri: [sentryCspReportEndpoint] } : {}),
    },
  },
  crossOriginEmbedderPolicy: { policy: "credentialless" },
};

export { createMiddleware as securityHeadersMiddleware } from "@nosecone/next";
