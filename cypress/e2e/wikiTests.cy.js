describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#js-link-box-en').click();
    cy.get('#pt-createaccount-2').should('be.visible');
    cy.get('#pt-login-2').should('be.visible');
    cy.get('#vector-user-links-dropdown').should('be.visible');
  })
})