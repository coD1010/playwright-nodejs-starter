import {test, expect} from '@playwright/test';

test ('Multiple matches fail', async ({page}) =>{
    await page.goto('/');
    await page.getByRole('link').click();
});

test ('Multiple matches - fist, last, nth', async ({page})=>{
    await page.goto('/');

    const button = page.getByRole('button');

    console.log(await button.first().textContent());
    console.log(await button.last().textContent());
    console.log(await button.nth(1).textContent());

});

test('Multiple matches test - count or iterate', async ({page}) =>{
    await page.goto('/');
    await page.getByRole('button', {name: 'Register'}).click();

    const feedback = page.locator('.invalid-feedback');

    await expect(feedback).toHaveCount(3);

    for (const message of await feedback.all()){
        //click, other actions
        console.log(`${await message.textContent()}`);
    }

});