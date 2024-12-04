import{test, expect} from '@playwright/test';

test ('Recommended built-in locators examples', async ({page})=> {
    await page.goto('http://localhost:3000/');

    const firstName = page.getByLabel('First name');
    await firstName.fill('james');
    await firstName.clear();

    await page.getByLabel('First name').fill('Salvador');

    await page.getByRole('button',{name: 'Register'}).click();
    await  page.getByRole('button', {name: 'Register', exact: true}).click;

    const warning = page.getByText('Valid last name is required');
    await expect (warning).toBeVisible();

})