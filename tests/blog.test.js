const Page = require('./helpers/page');

let page;

beforeEach(async () => {
    page = await Page.build();
    await page.goto('http://localhost:3000')
});

afterEach(async () => {
    await page.browser().close()
});

describe('When logged in and click on add new blog btn', async () => {
    beforeEach(async () => {
        await page.login();
        await page.click('a.btn-floating')
    });

    it('should see blog create from', async () => {
        const label = await page.getContentOf('form label');

        expect(label).toEqual('Blog Title')
    })
});

