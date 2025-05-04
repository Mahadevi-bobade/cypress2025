///<reference types="cypress" />

describe('verify hooks methods in cypress',function(){

    before(function(){
        cy.log('I will run once before every test case')
    })
    
    beforeEach(function(){
        cy.log('I will run before every test case')
    })

    it('testcase1',function(){
        cy.log('I am test case1')
    })

    afterEach(function(){
        cy.log('I will run after each test case')
    })

    it('testcase2',function(){
        cy.log('I am testcase2')
    })

    after(function(){
        cy.log('I will run once after every test case')
    })

})