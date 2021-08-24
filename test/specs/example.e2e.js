const expect = require("chai").expect;
const SearchPage = require('../pageobjects/search.page');
const ResultPage = require('../pageobjects/result.page');
const DetailPage = require('../pageobjects/detail.page');
let testData = {
    searchName: 'pintura blanca',
    pos: 1
};

describe('Validate that the displayed price is the same that appears when viewing the product detail', () => {
   
    it('should show and exist the price of the first product', () => {
        SearchPage.open();
        SearchPage.search(testData);
        this.priceProductGeneral = ResultPage.getProduct(testData);
        expect(this.priceProductGeneral).to.exist;
        expect(this.priceProductGeneral).to.be.a('string');
    });
    
    it('should be the same product detail price ', () => {
        this.priceDetailProduct = DetailPage.validateFirstProduct();
        expect(this.priceDetailProduct).to.exist;
        expect(this.priceDetailProduct).to.be.a('string');
        expect(this.priceProductGeneral).to.be.equal(this.priceDetailProduct);
    });
});


