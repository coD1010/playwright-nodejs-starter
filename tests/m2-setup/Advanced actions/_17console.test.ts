import {test, expect} from  '@playwright/test';
import { error } from 'console';

test ('check console', async ({page}) => {
    page.on('console', msg => console.log(msg));

    page.on('pageerror', error => {
        console.log(`Found an error ${error.name}, ${error.message}` );

    });

    page.goto('/');

    await page.getByRole('button', {name: 'Register'}).click();
    
});

test ('check console 2', async ({page})=> {
    page.on('console', msg =>{
        console.log(msg)
        expect.soft(msg.type()).not.toEqual('error'); //los errores en consola van en minuscula
    });

    page.on('pageerror', error =>{
        console.log(`Found ab error: ${error.name}, ${error.message}`);
        expect.soft(error.name).not.toEqual('Error'); //Errores en ejecion van en mayusculas 
    });

    page.goto('/');

    await page.getByRole('button', {name: 'Register'}).click();

});