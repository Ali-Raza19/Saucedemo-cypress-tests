
class Login {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
    typeUsername(username) {
      cy.get('[data-test="username"]').type(username);
    }
    typePassword(password) {
      cy.get('[data-test="password"]').type(password);
    }
    clickLoginButton() {
      cy.get('[data-test="login-button"]').click();
    }
    assertSuccessfulLogin() {
      cy.url().should('include', '/inventory.html');
    }
  }
  
  export default Login;
  