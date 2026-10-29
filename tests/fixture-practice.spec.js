
const { test: base, expect } = require("@playwright/test");

const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto("https://www.saucedemo.com/");

    await page.getByTestId("username").fill("standard_user");
    await page.getByTestId("password").fill("secret_sauce");
    await page.getByTestId("login-button").click();

    await use(page);
  },
});

test("Verify Products page using fixture", async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/inventory.html/);

  await expect(
    loggedInPage.getByText("Products", { exact: true })
  ).toBeVisible();
});

test("Add product using fixture", async ({ loggedInPage }) => {
  await loggedInPage
    .getByTestId("add-to-cart-sauce-labs-backpack")
    .click();

  await expect(
    loggedInPage.getByTestId("shopping-cart-badge")
  ).toHaveText("1");
});
