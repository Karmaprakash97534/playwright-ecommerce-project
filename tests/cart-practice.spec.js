
const { test, expect } = require("@playwright/test");

test("Add product to cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByTestId("username").fill("standard_user");
  await page.getByTestId("password").fill("secret_sauce");
  await page.getByTestId("login-button").click();

  // Product cart mein add karo
  await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

  // Cart mein 1 item verify karo
  await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");

  // Cart open karo
  await page.getByTestId("shopping-cart-link").click();

  // Product visible hona chahiye
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});
