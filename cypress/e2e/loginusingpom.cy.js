
import Login from '../support/login';

describe('Login Test', () => {
  it('Should log in successfully', () => {
    const login = new Login();
    login.visit();
    login.typeUsername('standard_user');
    login.typePassword('secret_sauce');
    login.clickLoginButton();
    login.assertSuccessfulLogin();
  });
});
