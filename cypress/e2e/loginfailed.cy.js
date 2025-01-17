describe('SauceDemo Login Test', () => {
  it('Should display an error message for wrong login credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('aleezahussain');
    cy.get('[data-test="password"]').type('123456789');
    cy.get('[data-test="login-button"]').click();
    cy.get('.error-message-container')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });
});
