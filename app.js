var puppeteer = require('puppeteer');

var BASE_URL = "https://instagram.com/"

var instagram = {
    browser: null,
    page: null,

    initialize: async () => {
        instagram.browser = await puppeteer.launch({
            headless: false
        })

        instagram.page = await instagram.browser.newPage()

        await instagram.page.goto()
    }
}