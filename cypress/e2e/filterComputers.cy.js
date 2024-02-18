describe('Filter Computer', () => {
  it('Positive Scenario', () => {
    cy.visit('/');

    cy.get('#searchbox').should('be.visible').type('ACE')
    cy.get('#searchsubmit').should('be.visible').click()
    cy.get('a').contains('ACE')
   
  })
})