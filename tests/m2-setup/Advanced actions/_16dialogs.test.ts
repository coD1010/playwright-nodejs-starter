import {test, expect} from '@playwright/test';
import { Dialog } from 'puppeteer';

const name = 'Salvador';

test('Dialog test - Default handling is to dismiss', async({page})=>{
    await page.goto('/');

    const input = page.getByLabel ('First name');
    await input.fill(name);
    await expect(input).toHaveValue(name);

    await page.getByRole('button', {name: 'clear'}).click;
    await expect(input).toHaveValue(name);

});

test('Dialog test -ok or Dismiss', async ({page})=>{

    page.on('dialog', dialog => dialog.accept()); // listener para todo la pagina, para cuando salaga el dialogo, lo acepte de manera automatica
    page.once('dialog', dialog => dialog.accept());

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);

    await page.getByRole('button', {name: 'Clear'}).click
    await expect(input).toHaveValue('');


});