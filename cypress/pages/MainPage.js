class MainPage {
  get postTitleInput() {
    return cy.get("input");
  }

  get postContentInput() {
    return cy.get("textarea");
  }

  get postSaveButton() {
    return cy.get(".btn-fill");
  }

  get postEditButton() {
    return cy.get(`[aria-label="Edit your post Title Test"]`);
  }

  get postDeleteButton() {
    return cy.get(`[aria-label="Delete your post Title Test"]`);
  }

  get postEditTitleInput() {
    return cy.get(`:nth-child(1) > input`);
  }

  get postEditContentInput() {
    return cy.get(":nth-child(2) > textarea");
  }

  get postConfirmEditButton() {
    return cy.get("form").find(".btn-fill");
  }

  savePost(postTitle, postContent) {
    this.postTitleInput.type(postTitle);
    this.postContentInput.type(postContent);
    this.postSaveButton.click();
    cy.request("https://dev.codeleap.co.uk/careers/").then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  editLastSavedPost(newTitle, newContent) {
    this.postEditButton.first().then((first) => {
      cy.wrap(first).click();
    });

    this.postEditTitleInput.clear();
    this.postEditTitleInput.type(newTitle);

    this.postEditContentInput.clear();
    this.postEditContentInput.type(newContent);

    this.postConfirmEditButton.last().then((last) => {
      cy.wrap(last).click();
    });
  }

  deleteLastSavedPost() {
    this.postDeleteButton.first().then((first) => {
      cy.wrap(first).click();
    });
  }
}

export default new MainPage();
