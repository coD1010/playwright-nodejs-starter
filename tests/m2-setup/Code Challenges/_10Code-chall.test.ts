import {test, expect} from '@playwright/test';

test('Fisrt code challenge', async ({page})=>{
    //llegamos a la pagina
    await page.goto('/');
    //encontramos el boton de register
    const button1 = page.getByRole('button', {name: 'Register', exact: true});
    //clickeamos el botton de register
    button1.click();

    //Hubicamos cada elemento de error 
    const warning1 = page.getByText('Valid first name is required');
    const warning2 = page.getByText('Valid last name is required');
    const warning3 = page.getByText('Please enter a valid email address');

    //validamos que cada elemento se encuntre en la pagina
    await expect (warning1).toBeVisible();
    await expect (warning2).toBeVisible();
    await expect (warning3).toBeVisible();

    // recargamos la pagina
    await page.reload();

    //validamos que los mensajes de erros ya no se enceuntren visibles
    await expect (warning1).toBeHidden();
    await expect (warning2).toBeHidden();
    await expect (warning3).toBeHidden();

});