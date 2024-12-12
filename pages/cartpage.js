exports.cartpage = class cartpage {
  constructor(page) {
    this.page = page;
    this.addtocartProducts = "//tbody/tr/td[2]";
  }

  async checkProductInCart(productname) {
    const productlist = await this.page.locator(this.addtocartProducts).all();
    for (const product of productlist) {
      if (productname === (await product.textContent())) {
        return true;
        break;
      }
    }
  }
};
