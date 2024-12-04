import {test, expect} from '@playwright/test';

test ('Check test', async ({page})=>{
    await page.goto('/');
    await expect(page).toHaveTitle('Credit Association');

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('#textarea');
    const message = 'Recomended by a friend';

    await expect(textarea).toBeDisabled();
    await expect(textarea).toBeEmpty();

    await checkbox.check();
    await expect(textarea).toBeEnabled();

    await textarea.fill(message);
    await expect(textarea).toHaveValue(message);

    await page.getByRole('button', {name: 'Register'}).click();

    const feedback = page.locator('.invalid-feedback');
    await expect(feedback).toHaveCount(3);

    for (const message of await feedback.all()){
        await expect(message).toBeVisible();
    }

    await expect(feedback.first()).toContainText('Valid first name is required')

});

test ('Test with navigation matches', async({page})=>{
    await page.goto('/');

    await expect(page.getByTestId('location')).toContainText('New York');

    await expect(page.getByTestId('location')).not.toContainText('London'); // como se puede obserbar el not, sive para negar el assert

});

test ('Test with soft asseritons', async ({page})=>{
    await page.goto('/');

    const location = page.getByTestId('location');
    await location.waitFor({ state: 'visible' });

    await expect.soft(page.getByTestId('location')).toContainText('Mumbai');
    await expect(page.getByTestId('location')).toContainText('New York');
    await expect.soft(page.getByTestId('location')).toContainText('Tokyo');

});


test('Test with soft assertions2', async ({ page }) => {
  await page.goto('/');

  // Asegúrate de que el elemento esté visible antes de hacer las assertions
  const location = page.getByTestId('location');
  await location.waitFor({ state: 'visible' });

  // Primera soft assertion
  await expect.soft(location).toContainText('Mumbai', { timeout: 5000 });

  // Segunda soft assertion
  await expect.soft(location).toContainText('Tokyo', { timeout: 5000 });

  // Hard assertion
  await expect(location).toContainText('New York', { timeout: 5000 });
});
