import { test, expect } from '@playwright/test';

test('create buzz post', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Buzz' }).click();
  await expect(page.getByText('Buzz Newsfeed')).toBeVisible();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill('Heyy');
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  await expect(page.getByText('Buzz Newsfeed')).toBeVisible();
});