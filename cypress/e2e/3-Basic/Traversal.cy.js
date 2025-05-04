///<reference types="cypress" />

describe('verify traversal methods in cypress',function(){

    beforeEach(()=>{
        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    it('verify traversing methods in cypress',function(){
       
        cy.get('[class="traversal-drinks-list"]>li').should('have.length',5)
        cy.get('[class="traversal-drinks-list"]>li').first().should('have.text','Coffee')
        cy.get('[class="traversal-drinks-list"]>li').next().should('have.attr','id','tea')
        cy.get('[class="traversal-drinks-list"]>li').eq(4).should('have.text','Sugar')
        cy.get('[class="traversal-drinks-list"]>li').last().should('have.text','Sugar')

    })

    it('verify traversing test case2',function(){
        cy.get('#fruits').parent().should('have.class','traversal-food-list')
        cy.get('#espresso').parents().should('have.length',6)
        cy.get('#sugar').parentsUntil('body > div.container').should('have.length',3)
    })


    it('prev,prevAll,next,nextAll,prevUntil,nextUntil',function(){

        cy.get('#milk').prev().should('have.text','Tea')
        cy.get('#tea').next().should('have.text','Milk')
        cy.get('#sugar').prevAll().should('have.length',4)
        cy.get('#espresso').nextAll().should('have.length',1)

        cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
        cy.get('#tea').nextUntil('#sugar').should('have.length',2)

    })


    it('contains1',function(){
        cy.get('.traversal-buttons').contains('Link').click()

    })

    
    // it('contains2',function(){
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.wait(6000)
    //     cy.contains('CONTACT US').click()
     
        
    // })


    
    it('children,filter,not',function(){
        cy.get('.traversal-button-states').children().should('have.length',4)
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')

        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)

    })

    it('closest',function(){
        cy.get('.disabled').closest('div').should('have.attr', 'class', 'traversal-button-states')
        cy.get('[aria-label="Page navigation example"]').closest('nav').should('have.attr', 'aria-label', 'Page navigation example')
        cy.get('.traversal-button-states').closest('div').should('have.attr', 'class', 'traversal-button-states')
    })


})