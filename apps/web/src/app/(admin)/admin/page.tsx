import { AdminPage } from "@/components/admin-page";
import { Suspense } from "react";

export default async function DashboardPage() {
  return (
    <>
      <Suspense>
        <AdminPage locale="en" />
      </Suspense>
    </>
  );
}
