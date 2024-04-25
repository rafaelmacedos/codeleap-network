import MainPage from "../pages/MainPage";
import LoginPage from "../pages/loginPage";

describe("Should validate login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test Case 01 - App core flow with success", () => {
    cy.visit("/");
    LoginPage.login("test");
    MainPage.savePost("Title Test", "Title content test, this is an simple test.");
    MainPage.editLastSavedPost("New Title Test", "New Title content test, this is an simple test.")
    MainPage.deleteLastSavedPost()
  });
});
