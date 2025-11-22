# ✅ E2E Testing Lab — Playwright  
Simple demo web-app (Login + To-Do List) with full End-to-end testing using **Playwright**.

---

## 📌 Overview  
This project is a minimalistic training application for demonstrating **E2E testing principles**.  
It includes:

- Login form (with credentials validation)  
- To-Do list (add & delete tasks)  
- Full Playwright test suite (4 scenarios)  
- Auto-generated HTML report  

---

## 🚀 Run Locally

```bash
# Install dependencies
npm install
npx playwright install

# Start local dev server
npm start           # opens http://localhost:3000

# Run all tests in visible (headed) browser mode
npx playwright test --headed

# Generate HTML report
npx playwright test --reporter=html

# Open HTML report
npx playwright show-report
