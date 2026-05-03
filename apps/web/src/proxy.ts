import { NextResponse } from "next/server";
import { createNEMO } from "@rescale/nemo";
import { securityHeadersMiddleware, securityHeadersOptions } from "@repo/security/security-headers";
import type { MiddlewareConfig } from "@rescale/nemo";
const securityHeaders = securityHeadersMiddleware(securityHeadersOptions);

const middlewares = {
  "/:path*": [
    // Security headers
    async () => {
      const securityResponse = await securityHeaders();
      const response = NextResponse.next();

      securityResponse.headers.forEach((value, key) => {
        response.headers.set(key, value);
      });

      return response;
    },
  ],
} satisfies MiddlewareConfig;

export const proxy = createNEMO(middlewares);

export const config = {
  matcher: ["/((?!_next/|_static|[\\w-]+\\.\\w+).*)"],
};
