import { test, expect } from "@playwright/test";
import { loginpage } from "../pages/loginpage.js";
import { homepage } from "../pages/homepage.js";
const logindata = JSON.parse(JSON.stringify(require("../logindata.json")));

for (const data of logindata) {
  test(`validate login functionality ${data.id}`, async ({ page }) => {
    const login = new loginpage(page);
    const home = new homepage(page);
    console.log(data.username, data.password);
    await login.openURL(data.url);
    await login.login(data.username, data.password);

    //await expect(page).toHaveTitle("STORE");

    // const username = await home.getUserName();

    // await expect(username).toContain(testdata.username);
  });
}
