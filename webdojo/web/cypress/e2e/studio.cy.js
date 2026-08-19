describe('Studio', () => {
  it('Exemplo do Cypress Studio', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.container > p').should('be.visible');
    cy.get('h1').should('have.text', 'Kitchen Sink');
    /* ==== End Cypress Studio ==== */
  })
})