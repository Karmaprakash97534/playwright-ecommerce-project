const { test, expect } = require("@playwright/test");

test("API01 - GET user returns status 200 and expected ID", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/users/1");

  expect(response.status()).toBe(200);

  const user = await response.json();
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();
});
