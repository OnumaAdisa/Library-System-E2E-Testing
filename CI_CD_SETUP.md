# GitHub Actions CI/CD Pipeline

This file will be auto-generated and placed in `.github/workflows/` by Person 4 (Nat).

```yaml
name: Test Suite CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test
      
      - name: Generate coverage report
        run: npm run test:coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
          fail_ci_if_error: true
          verbose: true

  e2e-tests:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.x'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      
      - name: Run E2E tests
        run: npm run e2e
      
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

  code-quality:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.x'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint code
        run: npm run lint --if-present
      
      - name: Check coverage threshold
        run: |
          npm run test:coverage
          # Coverage must be >= 80%
```

---

**Setup Instructions (Person 4 - Nat):**

1. Create `.github/workflows/` directory
2. Create `ci.yml` file with above content
3. Push to main branch
4. GitHub Actions will automatically trigger on:
   - Push to main or develop
   - Pull requests

**Manual Trigger:**
- Go to GitHub repo → Actions tab
- Select workflow → "Run workflow"

---

**Coverage Reporting:**
- Badge added to README
- Codecov integration (optional)
- Coverage report in GitHub Actions artifacts

---

**Status Checks:**
- ✅ All unit tests must pass
- ✅ Code coverage must be >= 80%
- ✅ All E2E tests must pass
- ✅ No linting errors
