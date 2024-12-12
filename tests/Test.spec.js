import { test, expect } from "@playwright/test";
import { loginpage } from "../pages/loginpage.js";
import { homepage } from "../pages/homepage.js";
import { cartpage } from "../pages/cartpage.js";
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

test.only("validate login functionality", async ({ page }) => {
  const login = new loginpage(page);
  const home = new homepage(page);

  await login.openURL(testdata.url);
  await login.login(testdata.username, testdata.password);

  //await expect(page).toHaveTitle("STORE");

  const username = await home.getUserName();

  await expect(username).toContain(testdata.username);
});

test("validate add to cart functionality", async ({ page }) => {
  // go to login page
  const login = new loginpage(page);

  await login.openURL(testdata.url);
  await login.login(testdata.username, testdata.password);

  //await expect(page).toHaveTitle("STORE");

  //  go to home page and select one product and add to cart

  const home = new homepage(page);
  await home.addProductToCart("Nexus 6");
  await home.gotocart();

  //   go to cart page and valide addtocart product

  const cart = new cartpage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Nexus 6");
  await expect(status).toBe(true);
});
