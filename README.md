# E2E Testing Lab (Playwright)
Simple demo app (login + todo) and 4 E2E tests using Playwright.

## Run
```bash
npm install
npx playwright install
npm start         # open http://localhost:3000
npx playwright test --headed
npx playwright show-report

Stack

HTML/CSS/JS (vanilla)

http-server

Playwright (@playwright/test)

Tests

Successful login

Wrong password error

Add todo

Delete todo
