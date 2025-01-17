import ProductPage from '../support/prodnav';

describe('Product Page Navigation Test', () => {
  it('Should navigate to the product page dynamically', () => {
    const productName = 'Sauce Labs Bolt T-Shirt'; 
    const productId = 1;

    const productPage = new ProductPage();
    productPage.visitAndLogin(); 
    productPage.clickOnProduct(productName); 
    productPage.assertProductPageUrl(productId); 
    productPage.assertProductName(productName); 
  });
});
