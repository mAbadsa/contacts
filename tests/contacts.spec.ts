/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";

test("Contacts page has a title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/Contacts/);

  const exportAll = page.getByRole("button", { name: "Export All" });
  await expect(exportAll).toHaveText(/Export All/);
  await exportAll.click();
});

