import {test, expect} from '@playwright/test';

test('Generic locator example', async ({page})=>{
    await page.goto('/');

    await page.locator('.needs-validation label[for = "firstName"]').fill('Salvadorjs');
    await page.locator('//form//button[2]').click();

    await expect(page.getByText('valid last name is required')).toBeVisible();

});