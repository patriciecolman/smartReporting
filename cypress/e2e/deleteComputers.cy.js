describe('Delete Computer', () => {
  it('Positive Scenario', () => {
    cy.visit('/');
    cy.contains('a', 'ACE').click()
    
    cy.get('#name').should('be.visible').should('have.value', 'ACE')
    cy.contains('Delete this computer').should('be.visible').click({force: true}) // Confirm the deletion of ACE
    // cy.get('#introduced').should('be.visible').type('2024-02-18')
    // cy.get('#discontinued').should('be.visible').type('2032-02-18')
    // cy.get('#company').select('Apple Inc.')
    // 
  })
})