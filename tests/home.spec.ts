import test, { expect } from "@playwright/test";

test("Home page redirects to Item Details page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(page.url()).toBe("http://localhost:3000/items");
});
