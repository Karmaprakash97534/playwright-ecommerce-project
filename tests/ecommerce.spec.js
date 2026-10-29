const { test, expect } = require("@playwright/test");

const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

test.describe("SauceDemo E-commerce UI tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("TC01 - Valid login opens Products page", async ({ page }) => {
    await page.getByTestId("username").fill(USERNAME);
    await page.getByTestId("password").fill(PASSWORD);
    await page.getByTestId("login-button").click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText("Products", { exact: true })).toBeVisible();
  });

  test("TC02 - Invalid login shows an error", async ({ page }) => {
    await page.getByTestId("username").fill("wrong_user");
    await page.getByTestId("password").fill("wrong_password");
    await page.getByTestId("login-button").click();

    await expect(page.getByTestId("error")).toBeVisible();
  });

  test("TC03 - Add backpack to cart", async ({ page }) => {
    await page.getByTestId("username").fill(USERNAME);
    await page.getByTestId("password").fill(PASSWORD);
    await page.getByTestId("login-button").click();

    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
    await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

    await page.locator(".shopping_cart_link").click();
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  });

  test("TC04 - Complete checkout successfully", async ({ page }) => {
    await page.getByTestId("username").fill(USERNAME);
    await page.getByTestId("password").fill(PASSWORD);
    await page.getByTestId("login-button").click();

    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
    await page.locator(".shopping_cart_link").click();
    await page.getByTestId("checkout").click();

    await page.getByTestId("firstName").fill("Prakash");
    await page.getByTestId("lastName").fill("Vishwakarma");
    await page.getByTestId("postalCode").fill("500001");
    await page.getByTestId("continue").click();

    await expect(page.getByText("Checkout: Overview")).toBeVisible();
    await page.getByTestId("finish").click();
    await expect(page.getByText("Thank you for your order!")).toBeVisible();
  });
});
