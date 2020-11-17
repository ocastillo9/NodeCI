const puppeteer = require('puppeteer');

class CustomPage {
    static async build() {
        const browser = await puppeteer.launch({
            headless: false
        });

        const page = await browser.newPage();
        const customPage = new CustomPage(page,browser);

        return new Proxy(customPage, {
            get: function (target, property) {
                return customPage[property] || browser[property] || page[property]
            }
        })
    }

    constructor(page, browser) {
        this.page = page
        this.browser = browser
    }

    close() {
        this.browser.close()
    }
}

module.exports = CustomPage;