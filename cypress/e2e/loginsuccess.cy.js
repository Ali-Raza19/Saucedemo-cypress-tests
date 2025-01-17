describe('Login Test', () => {
    it('Should log in successfully and verify the user is landed on the home page', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list').should('be.visible');
      cy.get('.title').should('have.text', 'Products');
    });
  });
  