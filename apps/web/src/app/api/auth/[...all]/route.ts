import { toNextJsHandler } from "better-auth/next-js";

async function getAuthHandler() {
  const { auth } = await import("@repo/auth/server");
  return toNextJsHandler(auth.handler);
}

export async function GET(request: Request) {
  return (await getAuthHandler()).GET(request);
}

export async function POST(request: Request) {
  return (await getAuthHandler()).POST(request);
}
