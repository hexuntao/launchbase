import { toNextJsHandler } from "better-auth/next-js";

async function handleRequest(request: Request) {
  const { auth } = await import("@repo/auth/server");
  return toNextJsHandler(auth.handler).GET(request);
}

export const GET = handleRequest;
export const POST = handleRequest;
