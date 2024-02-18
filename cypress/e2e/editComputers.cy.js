describe('Edit Computer', () => {
  it('Positive Scenario', () => {
    cy.visit('/');

    cy.contains('a', 'ACE').click()
    cy.get('#name').should('be.visible').clear().type('ACE EDIT')
    cy.get('#introduced').should('be.visible').type('2024-02-18')
    cy.get('#discontinued').should('be.visible').type('2032-02-18')
    cy.get('#company').select('Sony')
    cy.contains('Save this computer').click()
    cy.get('.alert-message').should('have.text', 'Done !  Computer ACE EDIT has been updated')
  })
})