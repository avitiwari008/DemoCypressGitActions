describe('template spec', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:3000')
      })

    
    
    it('checks the heading on the page',()=>{
        cy.get('.Home_title__T09hD').should('be.visible')

    })

    it('Documentation section should be visible', () => {
        cy.get('[href="https://nextjs.org/docs"]').should('be.visible')
    })


  })