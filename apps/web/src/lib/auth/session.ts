import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@repo/auth/server";

export const getServerSession = cache(async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch (error) {
    console.error("[Auth] Error getting server session", error);
    return null;
  }
});
