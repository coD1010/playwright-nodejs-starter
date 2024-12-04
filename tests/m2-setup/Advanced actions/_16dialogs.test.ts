import {test, expect} from '@playwright/test';

const name = 'Salvador';

test('Dialog test - Default handling is to dismiss', async({page})=>{
    await page.goto('/');

    const input = page.getByLabel ('First name');
    await input.fill(name);
    await expect(input).toHaveValue(name);

    await page.getByRole('button', {name: 'clear'}).click;
    await expect(input).toHaveValue(name);

});


