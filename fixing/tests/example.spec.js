const {test,expect} = require('@playwright/test')

test.only('verify page title', async ({page}) => {

  await page.goto('https://react-redux.realworld.io/#/login')
  await expect(page).toHaveTitle('Conduit')
  await expect(email).toBeEmpty()
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('nerxtest@gmail.com');
  await expect(email).toHaveValue('nerxtest@gmail.com');
})

