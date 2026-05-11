import { expect, test } from "@playwright/test";

test.describe("web smoke", () => {
  test("renders the landing page", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/LaunchBase/);
    await expect(page.getByRole("heading", { name: "LaunchBase" })).toBeVisible();
    await expect(
      page.getByText("A production-ready monorepo starter for shipping modern TypeScript products.")
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Button" })).toBeVisible();
    await expect(page.getByText("API Health :")).toBeVisible();
  });

  test("renders the login page", async ({ page }) => {
    await page.goto("/auth/login");

    await expect(page).toHaveURL(/\/auth\/login$/);
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue with Google" })).toBeVisible();
  });
});
