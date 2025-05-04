///<reference types='cypress' />

describe("verify login page", function () {

  beforeEach(function () {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
  })
  
    it("verify login page with valid data", function () {
      cy.get('[name="first_name"]').type("madu");
      cy.get('[name="last_name"]').type("murud");
      cy.get('[name="email"]').type("madu23@gmail.com");
      cy.get('[name="message"]').type("I am Learning Cypress");
      cy.get('[type="submit"]').click();
      cy.get("h1").should("have.text", "Thank You for your Message!");
    });

    it("verify login page with invalid data", function () {
      cy.get('[name="first_name"]').type("madu");
      cy.get('[name="last_name"]').type("murud");
      cy.get('[name="email"]').type("madu");
      cy.get('[name="message"]').type("I am Learning Cypress");
      cy.get('[type="submit"]').click();
      cy.contains("Error: Invalid email address");

  });
});
