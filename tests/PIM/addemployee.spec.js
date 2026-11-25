import { test, expect } from '@playwright/test';
import logindata from '../../testdata/logindata/logindata.json';
import { faker } from '@faker-js/faker';

test('Add Employee', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  //await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await expect(page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(faker.person.middleName());
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/496');
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 20000 });
});