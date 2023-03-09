const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const {addAttach} = require("jest-html-reporters");

test.describe('Post', ({page}) => {

    const email = page.getByPlaceholder('Email')
    const password = page.getByPlaceholder('Password')

    test.beforeAll(async () => {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://react-redux.realworld.io/#/login');
    });

    test.afterAll(async () => {
        await browser.close()
    })

    test('Sign In' ,async ({page}) => {
        //await page.goto('')
        const title = await page.title()
        await expect(page).toHaveTitle('Conduit')
        await page.fill('input[type="email"]', data.email);
        await expect(email).toHaveValue('nerxtest@gmail.com');
        await page.fill('input[name="Password"]', data.password);
        await expect(password).toHaveValue('nerxtest');


        await Promise.all([
            page.waitForNavigation(),
            await page.click('form >> "Sign in"')
        ])
        await expect(page).toHaveURL('https://react-redux.realworld.io/#/?_k=uzxw2c');
    })
})
