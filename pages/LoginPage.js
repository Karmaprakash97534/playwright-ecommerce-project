
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByTestId("username");
    this.password = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
  }

  async open() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
