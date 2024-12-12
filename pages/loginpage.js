exports.loginpage = class loginpage {
  constructor(page) {
    this.page = page;
    this.loginlink = "#login2";
    this.usernameTab = "#loginusername";
    this.passwordTab = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
  }

  async openURL(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.click(this.loginlink);
    await this.page.fill(this.usernameTab, username);
    await this.page.fill(this.passwordTab, password);
    await this.page.click(this.loginButton);
  }
};
