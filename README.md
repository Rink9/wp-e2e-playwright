# End-To-End (E2E) Playwright test for WordPress site.

Used tool

1. Playwright https://playwright.dev/
2. WordPress E2E Playwright Utils https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils-playwright

## Install

`npm install`

`npm run build`

## Install Playwright

`npx playwright install`

`npm install`

## Run all available tests in headless mode.

`npm run test-e2e:playwright`

## Run all available tests in headed mode`

`npm run test-e2e:playwright -- --headed`

## Run single tests in headless mode

`npm run test-e2e:playwright -- verify-homepage.spec.js`

## Run single tests in headed mode

`npm run test-e2e:playwright -- verify-homepage.spec.js --headed`

## Debugging

`npm run test-e2e:playwright -- --debug`
