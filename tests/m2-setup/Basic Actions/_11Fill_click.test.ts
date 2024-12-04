import {test, expect} from '@playwright/test';

test ('Fill test', async ({page})=>{
    await page.goto('/');

    await page.getByLabel('first name').fill('Salvador');

    await page.getByLabel('Date of birth').fill('1995-10-10');

});