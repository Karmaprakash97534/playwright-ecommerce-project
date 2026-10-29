
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { ProductPage } = require("../pages/ProductPage");

test("Add backpack using Page Object Model", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductPage(page);

  await login.open();
  await login.login("standard_user", "secret_sauce");

  await expect(products.title).toBeVisible();

  await products.addBackpackToCart();
  await expect(products.cartBadge).toHaveText("1");

  await products.openCart();
  await expect(
    page.getByText("Sauce Labs Backpack")
  ).toBeVisible();
});
