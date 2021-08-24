const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resultProducts() { return $$("//*[contains(concat(' ',@class,' '),' search-results-products-container ')]/div") }

    getProduct(testData) {
        const products = this.resultProducts;
        let productPrice = products[testData.pos].$("//*[contains(concat(' ',@class,' '),' desktop-price-cart-btn')]//*[contains(concat(' ',@class,' '),' product-price-and-logo ')]//span").getText();
        let product = products[testData.pos].$(`//*[@id='title-pdp-link']`);
        product.click();
        return productPrice;
    }


}

module.exports = new ResultPage();
