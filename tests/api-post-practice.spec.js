
const { test, expect } = require("@playwright/test");

test("API POST - Create a new user", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: {
        name: "Prakash Kumar",
        username: "prakash123",
        email: "prakash@example.com"
      }
    }
  );

  // Status code check karo
  expect(response.status()).toBe(201);

  // Response data check karo
  const user = await response.json();

  expect(user.name).toBe("Prakash Kumar");
  expect(user.username).toBe("prakash123");
  expect(user.email).toBe("prakash@example.com");

  console.log("Created user ID:", user.id);
});
