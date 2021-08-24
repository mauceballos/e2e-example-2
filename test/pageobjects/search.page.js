const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchBarField() { return $("//div[@data-testid='d-search-bar']//input[@placeholder='¿Qué estás buscando?']") }
    get btnSubmit() { return $("//div[@data-testid='d-search-bar']//*[local-name()='svg']") }

    search(testData) {
        this.inputSearchBarField.isExisting(30000);
        this.inputSearchBarField.isDisplayed(30000);
        this.inputSearchBarField.setValue(testData.searchName);
        this.btnSubmit.click();
    }

    open() {
        return super.open();
    }
}

module.exports = new SearchPage();
