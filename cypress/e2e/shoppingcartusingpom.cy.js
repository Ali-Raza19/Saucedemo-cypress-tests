import ShoppingCartPage from '../support/ShoppingCartPage';

describe('Shopping Cart Test', () => {
    it('Should navigate to the shopping cart page', () => {
        const shoppingCartPage = new ShoppingCartPage();
        shoppingCartPage.visitAndLogin();
        shoppingCartPage.navigateToCart();
        cy.url().should('include', '/cart.html');
      });
});
