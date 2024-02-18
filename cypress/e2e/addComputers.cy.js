describe('Add a new computer', () => {
  it('Positive Scenario', () => {
    cy.visit('/');
    
    cy.get('#add').should('be.visible').click()
    cy.get('#name').should('be.visible').type('Macbook Pro')
    cy.get('#introduced').should('be.visible').type('2024-02-18')
    cy.get('#discontinued').should('be.visible').type('2032-02-18')
    cy.get('#company').select('Apple Inc.')
    cy.contains('Create this computer').click()
  })
})