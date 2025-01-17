describe('Product Page Navigation Test', () => {
    it('Should navigate to the product page after clicking on a product', () => {
      cy.login('standard_user', 'secret_sauce');
      cy.get('.inventory_item_name')
        .contains('Sauce Labs Backpack')
        .click();
      cy.url().should('include', '/inventory-item.html?id=4');
      cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack');
    });
  });
  