import {test} from '@playwright/test';

test ('Fill test', async ({page})=>{
    await page.goto('/');

    await page.check('#heard-about'); //duplicate locator ID

    await page.fill('textarea','so I was thinking about the other day...'); //promise<void>

});