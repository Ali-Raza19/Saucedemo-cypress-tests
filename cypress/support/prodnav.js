

import Login from './login';  

class ProductPage {
  constructor() {
    this.login = new Login();  
  }

  visitAndLogin() {
    this.login.visit();  
    this.login.typeUsername('standard_user');  
    this.login.typePassword('secret_sauce');
    this.login.clickLoginButton();  
    this.login.assertSuccessfulLogin();
  }

  clickOnProduct(productName) {
    cy.get('[data-test="inventory-item-name"]')
      .contains(productName)
      .click();
  }

  assertProductPageUrl(productId) {
    cy.url().should('include', `/inventory-item.html?id=${productId}`);
  }

  assertProductName(productName) {
    cy.get('.inventory_details_name')
      .should('have.text', productName);
  }
}

export default ProductPage;
