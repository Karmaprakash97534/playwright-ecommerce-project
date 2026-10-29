
const { test, expect } = require("@playwright/test");

test("API - Get user details", async ({ request }) => {
  // API request bhejo
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  // Status code 200 check karo
  expect(response.status()).toBe(200);

  // Response ko JSON mein convert karo
  const user = await response.json();

  // User details verify karo
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();
  expect(user.email).toContain("@");

  console.log("User name:", user.name);
  console.log("User email:", user.email);
});
