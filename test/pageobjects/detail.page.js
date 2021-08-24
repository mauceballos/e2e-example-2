const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailPage {
        /**
        * define selectors using getter methods
        */
        get priceDetailProduct() { return $("//*[contains(concat(' ',@class,' '),' product-details-wrapper ')]/*[contains(concat(' ',@class,' '),' product-info ')]//*[contains(concat(' ',@class,' '),' product-price-and-logo ')]//*[contains(concat(' ',@class,' '),' price ')]/span") }

        validateFirstProduct() {
                browser.pause(2000);
                let price = this.priceDetailProduct.getText();
                return price;
        }
}

module.exports = new DetailPage();