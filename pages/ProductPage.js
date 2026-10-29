
class ProductPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByText("Products", { exact: true });
    this.backpack = page.getByTestId(
      "add-to-cart-sauce-labs-backpack"
    );
    this.cart = page.getByTestId("shopping-cart-link");
    this.cartBadge = page.getByTestId("shopping-cart-badge");
  }

  async addBackpackToCart() {
    await this.backpack.click();
  }

  async openCart() {
    await this.cart.click();
  }
}

module.exports = { ProductPage };
