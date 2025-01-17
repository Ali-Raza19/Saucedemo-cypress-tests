describe('Product Page Navigation Test', () => {
    it('Should navigate to the product page after clicking on a product', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('.inventory_item_name')
        .contains('Sauce Labs Backpack')
        .click();
      cy.url().should('include', '/inventory-item.html?id=4');
      cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack');
    });
  });
  