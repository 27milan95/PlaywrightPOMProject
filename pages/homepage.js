const { TIMEOUT } = require("dns");

exports.homepage = class homepage {
  constructor(page) {
    this.page = page;
    this.productlist = "//a[@class='hrefch']";
    this.addtocart = "//a[normalize-space()='Add to cart']";
    this.cart = "#cartur";
    this.username = "#nameofuser";
  }

  async addProductToCart(productname) {
    const products = await this.page.locator(this.productlist).all();
    //console.log(await products.textContent());
    for (const product of products) {
      // console.log(await product.textContent());
      if (productname === (await product.textContent())) {
        await product.click();
        break;
      }
    }

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });

    await this.page.click(this.addtocart);
  }

  async gotocart() {
    await this.page.click(this.cart);
  }

  async getUserName() {
    await this.page.waitForTimeout(2000);
    const username = await this.page.locator(this.username);
    return await username.textContent();
  }
};
