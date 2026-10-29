
const { test, expect } = require("@playwright/test");

test("Complete checkout successfully", async ({ page }) => {
  // 1. Website open karo
  await page.goto("https://www.saucedemo.com/");

  // 2. Login
  await page.getByTestId("username").fill("standard_user");
  await page.getByTestId("password").fill("secret_sauce");
  await page.getByTestId("login-button").click();

  // 3. Product cart mein add karo
  await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

  // 4. Cart open karo
  await page.getByTestId("shopping-cart-link").click();
  await expect(
    page.getByText("Sauce Labs Backpack")
  ).toBeVisible();

  // 5. Checkout start karo
  await page.getByTestId("checkout").click();

  // 6. Customer details fill karo
  await page.getByTestId("firstName").fill("Prakash");
  await page.getByTestId("lastName").fill("Kumar");
  await page.getByTestId("postalCode").fill("500001");

  // 7. Continue
  await page.getByTestId("continue").click();

  // 8. Order summary verify karo
  await expect(
    page.getByText("Sauce Labs Backpack")
  ).toBeVisible();

  // 9. Finish order
  await page.getByTestId("finish").click();

  // 10. Success message check karo
  await expect(
    page.getByText("Thank you for your order!")
  ).toBeVisible();
});
