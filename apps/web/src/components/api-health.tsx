"use client";

import { orpc } from "@/lib/orpc/client";
import { useQuery } from "@tanstack/react-query";

export default function APIHealth({
  label = "API Health :",
  errorMessage = "[API] Failed to fetch API Health!",
}: {
  label?: string;
  errorMessage?: string;
}) {
  const { data, isPending, isError } = useQuery(orpc.healthCheck.queryOptions());

  return (
    <div className="flex min-w-0 items-center gap-3">
      <p className="shrink-0">{label}</p>
      {isPending ? (
        <div className="h-4 w-16 animate-pulse rounded-sm bg-neutral-200" />
      ) : (
        <p className="font-commitmono truncate">{data}</p>
      )}
      {isError && <p className="text-destructive">{errorMessage}</p>}
    </div>
  );
}
