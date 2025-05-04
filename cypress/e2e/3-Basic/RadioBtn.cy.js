///<reference types="cypress" />

describe('verify radio btns in cypress',function(){
    it('verify radion btns from webdriver university',function(){

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.wait(2000)
        cy.get('[value="orange"]').should('not.be.checked')
        cy.wait(2000)
    })

    it('verify radio btns from letscodeit',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwradio').should('not.be.checked')
        cy.get('#hondaradio').check().should('be.checked')
    })


    it('verify radiobtns from amazon',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#icp-nav-flyout').click()
        cy.get('[value="en_IN"]').should('be.checked')
        cy.get('[value="hi_IN"]').check({force: true}).should('be.checked')
        cy.get('[value="en_IN"]').should('not.be.checked')
    })
})