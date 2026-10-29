
const { test, expect } = require("@playwright/test");

test("Login using locators", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Username enter karo
  await page.getByTestId("username").fill("standard_user");

  // Password enter karo
  await page.getByTestId("password").fill("secret_sauce");

  // Login button click karo
  await page.getByTestId("login-button").click();

  // Check karo ki Products page khula hai
  await expect(page).toHaveURL(/inventory.html/);
  await expect(
    page.getByText("Products", { exact: true })
  ).toBeVisible();
});
