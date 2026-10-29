# Playwright E-commerce Automation Project

Beginner-friendly project using JavaScript and Playwright Test. It includes:
- UI tests for valid login, invalid login, cart, and checkout
- API test using JSONPlaceholder
- A simple Page Object Model (POM) login example
- HTML report and trace-on-failure configuration

## Requirements
- Node.js LTS (npm included)
- VS Code or another editor
- Internet connection to access demo sites

## Install
Open a terminal in this folder and run:

```bash
npm install
npx playwright install
```

## Run tests
Run all tests:

```bash
npm test
```

Run tests with a visible browser:

```bash
npm run test:headed
```

Run only UI tests:

```bash
npx playwright test tests/ecommerce.spec.js
```

Run only API test:

```bash
npx playwright test tests/api.spec.js
```

Run the POM example:

```bash
npx playwright test tests/login-pom.spec.js
```

Open the HTML report after a test run:

```bash
npm run report
```

## Demo credentials
SauceDemo provides these public demo credentials:
- Username: `standard_user`
- Password: `secret_sauce`

This project uses public demo services. Tests require internet access and can need updates if a demo website or its selectors change. Test results are not guaranteed until you run them locally.

## Project structure
```text
playwright-ecommerce-project/
├── pages/
│   └── LoginPage.js
├── tests/
│   ├── ecommerce.spec.js
│   ├── api.spec.js
│   └── login-pom.spec.js
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```
