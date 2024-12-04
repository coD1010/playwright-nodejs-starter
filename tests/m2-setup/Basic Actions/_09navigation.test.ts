import {test, expect} from '@playwright/test';

const homeTitle = 'Credit Association';
const savingsTitle = 'Save with us';

test ('Back, foward, reload (refresh) test', async ({page}) => { 
    await page.goto('/'); //accede a la ruta predeterminada del archivo config
    
    await page.goto('/savings.html'); //ir a una pagina especifica por url
    await expect(page).toHaveTitle(savingsTitle); //compara el titulo con la vairable guradada

    await page.goBack(); //dale para adelante

    await page.goForward(); // dale pa atras

    await page.reload(); //recarga la pagina

});

test('Navigation test', async ({page})=>{
    
    await page.goto('/', {waitUntil: 'load'}); // esperar hasta que el evento de carga pase
    await expect(page).toHaveTitle(homeTitle); //compara el titulo de pa pagina al que tenemos guardados en una variable

});

test ('Navigation test 2', async ({page})=>{

    await page.goto('/', {waitUntil: 'load', timeout: 10}); // esperamos a que la pagina carge y le damos un timepo d espera de 10 mili segundos
    await expect(page).toHaveTitle(homeTitle);

});

test.use ({ navigationTimeout:1000}); // esto es para setear el ttiempo de time out de todos los test de este archivo

test ('Load speed for navigation', async ({page})=>{

    await page.goto('/savings.html', {timeout: 1000}); // si no implelemtamos la linea de codigo de arriba podemos implementar diferentes diferentes tiempos de time out
    await expect(page).toHaveTitle(savingsTitle);

    await page.goto('/',{timeout:1000 });
    await expect(page).toHaveTitle(homeTitle);

    await page.goBack();
    await expect(page).toHaveTitle(savingsTitle);

    await page.reload();
    await expect(page).toHaveTitle(savingsTitle);

});