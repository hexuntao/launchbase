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

  test("renders the localized landing page", async ({ page }) => {
    await page.goto("/zh");

    await expect(page.getByRole("heading", { name: "LaunchBase" })).toBeVisible();
    await expect(page.getByText("面向现代 TypeScript 产品交付的生产可用 monorepo 启动模板。")).toBeVisible();
    await expect(page.getByRole("button", { name: "按钮" })).toBeVisible();
    await expect(page.getByText("API 状态：")).toBeVisible();
  });

  test("renders the login page", async ({ page }) => {
    await page.goto("/auth/login");

    await expect(page).toHaveURL(/\/auth\/login$/);
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue with Google" })).toBeVisible();
  });

  test("renders the localized login page", async ({ page }) => {
    await page.goto("/zh/auth/login");

    await expect(page).toHaveURL(/\/zh\/auth\/login$/);
    await expect(page.getByRole("heading", { name: "登录" })).toBeVisible();
    await expect(page.getByRole("button", { name: "使用 Google 继续" })).toBeVisible();
  });
});
