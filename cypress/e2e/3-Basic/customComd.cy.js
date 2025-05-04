///<reference types="cypress" />

describe('custom commands',function(){
    it('verify normal ohrm login page',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('.oxd-text--h6 ').should('have.text','Dashboard')
    })



    it('verify ohrm page using custom commands',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.OHRMLogin('Admin','admin123')
        cy.get('.oxd-text--h6 ').should('have.text','Dashboard')
    })

    it('verify ohrm page using custom commands',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.OHRMLogin('Admin','admin123')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Admin')
    })
})