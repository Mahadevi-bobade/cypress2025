///<reference types='cypress' />

describe('verify login page',function(){

    it('verify login page with valid data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('madu')
        cy.get('[name="last_name"]').type('murud')
        cy.get('[name="email"]').type('madu23@gmail.com')
        cy.get('[name="message"]').type('I am Learning Cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('verify login page with invalid data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('madu')
        cy.get('[name="last_name"]').type('murud')
        cy.get('[name="email"]').type('madu')
        cy.get('[name="message"]').type('I am Learning Cypress')
        cy.get('[type="submit"]').click()
        cy.contains('Error: Invalid email address')
    })

    it("verify contact us page for incomplete data", () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('Mahadevi')
        cy.get('[name="last_name"]').type('Bobade')
        cy.get('[name="email"]').type()
        cy.get('[name="message"]').type('hi')
        cy.get('[type="reset"]').click()
})
})