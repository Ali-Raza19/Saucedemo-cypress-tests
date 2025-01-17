import Login from './login';

class ShoppingCartPage {
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

  navigateToCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }

  assertCartBadge(count) {
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', count);
  }
}

export default ShoppingCartPage;
