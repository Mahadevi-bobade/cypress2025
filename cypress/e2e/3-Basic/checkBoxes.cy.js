///<reference types="cypress" />
describe('verify checkboxes in cypress',function(){

    it('verify checkboxes from webdriver university',function(){
        // single single checkboxes check
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-1"]').uncheck().should('not.be.checked')
        cy.get('[value="option-4"]').should('not.be.checked')
        cy.get('[value="option-4"]').click().should('be.checked')
    })

    it.only('verify checkboxes from letscodeit',function(){
        // check boxes checks at a time from looping
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        
    })
})