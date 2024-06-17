# Playwright dci(describe-context-it) pattern

for playwright dci(describe-context-it) pattern

## 🚀 Installation

```sh
npm install -D playwright-dci-pattern
# or
pnpm install -D playwright-dci-pattern
```

## 🤝 How to use

```js
// import 'playwright-dci-pattern' package
import { describe, context, it } from 'playwright-dci-pattern';
// you need @playwright/test package
import { expect } from '@playwright/test';

// describe: target page
describe('playwright page', () => {
  // context: condition, parameter
  context('when you enter', () => {
    // it: show expect
    it('you can see "Playwright enables reliable"', async ({ page }) => {
      await page.goto('https://playwright.dev/');
    
      await expect(page.getByRole('heading', { name: 'Playwright enables reliable' }).locator('span')).toBeVisible();
    });
  });
});
```

## 🔖 Node Version in project

```sh
# .nvmrc
v20.14.0
```
If you want to manage nvm. recommend to use [fnm(Fast Node Manager)](https://github.com/Schniz/fnm)

```sh
# use Homebrew
brew install fnm
```

## 📝 License

```
MIT License

Copyright (c) 2024 David Yang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
