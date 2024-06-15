import { expect } from '@playwright/test';

import { describe, context, it } from './index.js';

describe('playwright 메인페이지에서', () => {
  context('처음 페이지에 접속하면', () => {
    it('get started link 페이지로 이동한다.', async ({ page }) => {
      await page.goto('https://playwright.dev/');
    
      await expect(page.getByRole('heading', { name: 'Playwright enables reliable' }).locator('span')).toBeVisible();
    });
  });
});
