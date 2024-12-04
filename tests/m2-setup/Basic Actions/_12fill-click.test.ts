import {test, expect} from '@playwright/test';

test ('Click test', async ({page})=>{
    await page.goto('/');

    const btn = page.getByRole('button', {name: 'Register'});
// estas son solo diferentes maneras de realizar multiplues clicks
    await btn.click();
    await btn.click();
    await btn.click();
    await btn.click();
    await btn.click();

    for (let i =0; i< 5; i++){
        await btn.click();
    }

    await btn.click({clickCount: 5});

    await btn.click({button: 'right'}); // funcion para acer click derecho

    await btn.dblclick(); // funcion dedicada para hacer doble click

});

