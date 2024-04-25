class LoginPage {
  get usernameInput() {
    return cy.get("input");
  }

  get loginButton() {
    return cy.get(".btn-fill");
  }

  login(username) {
    this.usernameInput.type(username);
    this.loginButton.click();
  }
}

export default new LoginPage();
