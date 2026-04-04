# Individual Setup Guide - Quick Start for Each Role

---

## 🎯 Person 1 (Pon) - Test Planning & Documentation

### Your Task
Create comprehensive test documentation and planning materials for the entire project.

### Quick Start (Estimated 5 hours)

**1. Create your Git branch:**
```bash
git checkout main
git pull origin main
git checkout -b feature/pon-test-plan
```

**2. Review existing structure:**
- Read [docs/test-plan.md](docs/test-plan.md) - Already started for you
- Read [test-cases/e2e-scenarios.md](test-cases/e2e-scenarios.md) - Reference for scope

**3. Fill in these sections (in docs/test-plan.md):**
- [ ] Complete "Test Objectives" section
- [ ] Refine "Scope" (in-scope/out-of-scope)
- [ ] Expand "Test Strategy" with techniques
- [ ] Update "Risk Assessment" with actual risks
- [ ] Complete "Test Schedule" with realistic timeline
- [ ] Create "Resource Plan" details
- [ ] Create "Requirements Traceability Matrix" (rtm.md)
- [ ] Add "Approval & Sign-off" section

**4. Create deliverable files:**
- docs/test-plan.md ✅ (already started)
- docs/rtm.md (create new)
- docs/final-report.md (template for later)

**5. Make commits (minimum 5):**
```bash
git add .
git commit -m "Add test plan objectives"
git add .
git commit -m "Add risk assessment"
git add .
git commit -m "Add test schedule"
git add .
git commit -m "Create RTM mapping"
git add .
git commit -m "Add approval section"
git push origin feature/pon-test-plan
```

**6. Open Pull Request** on GitHub and ask for review

---

## 🎯 Person 2 (Arm) - Test Cases & Exploratory Testing

### Your Task
Design manual test cases and conduct exploratory testing to uncover bugs.

### Quick Start (Estimated 10 hours)

**1. Create your Git branch:**
```bash
git checkout main
git pull origin main
git checkout -b feature/arm-e2e-test-cases
```

**2. Review existing structure:**
- Read [test-cases/e2e-scenarios.md](test-cases/e2e-scenarios.md) - 30+ template cases
- Read [bug-reports/bugs.md](bug-reports/bugs.md) - 10 bugs already documented

**3. Enhance test cases:**
- [ ] Complete all 30+ test case templates
- [ ] Add more edge case scenarios
- [ ] Verify all test steps are clear
- [ ] Check acceptance criteria

**4. Conduct exploratory testing:**
- [ ] Test each major feature manually
- [ ] Note any bugs or issues
- [ ] Take screenshots of problems
- [ ] Document findings

**5. Update bug reports:**
- Add 10+ bugs to [bug-reports/bugs.md](bug-reports/bugs.md)
- For each bug include:
  - Title and description
  - Steps to reproduce
  - Expected vs Actual
  - Severity level
  - Environment details

**6. Make commits (minimum 5):**
```bash
git add .
git commit -m "Add authentication test cases"
git add .
git commit -m "Add search filter test cases"
git add .
git commit -m "Add borrow return test cases"
git add .
git commit -m "Document exploratory findings"
git add .
git commit -m "Add bug reports with details"
git push origin feature/arm-e2e-test-cases
```

**7. Open Pull Request** on GitHub

---

## 🎯 Person 3 (Joe) - Playwright E2E Automation

### Your Task
Setup Playwright and create 30+ automated E2E tests.

### Quick Start (Estimated 12 hours)

**1. Create your Git branch:**
```bash
git checkout main
git pull origin main
git checkout -b feature/joe-playwright-automation
```

**2. Review existing setup:**
- package.json ✅ (already has Playwright)
- playwright.config.ts ✅ (already configured)
- src/tests/e2e/ ✅ (directory structure ready)

**3. Review Page Object Model:**
- Study [src/tests/e2e/pages/PageObjects.ts](src/tests/e2e/pages/PageObjects.ts)
- Understand the pattern for reusable selectors

**4. Create E2E tests:**

**Authentication Tests** (5+):
- src/tests/e2e/auth.spec.ts ✅ (2 tests started)
- [ ] Add 3 more auth tests
- [ ] Test valid login
- [ ] Test invalid credentials
- [ ] Test empty fields
- [ ] Test logout
- [ ] Test session timeout

**Search Tests** (5+):
- [ ] Create src/tests/e2e/search.spec.ts
- [ ] Test search by title
- [ ] Test search by author
- [ ] Test filter by category
- [ ] Test empty results
- [ ] Test special characters

**Book Detail Tests** (4+):
- [ ] Create src/tests/e2e/book-details.spec.ts
- [ ] View book details
- [ ] Check availability
- [ ] Add to wishlist
- [ ] View reviews

**Borrow/Return Tests** (6+):
- [ ] Create src/tests/e2e/borrow-return.spec.ts
- [ ] Borrow available book
- [ ] Borrow unavailable book
- [ ] Return on time
- [ ] Return overdue
- [ ] Check borrowing limits
- [ ] View borrowed books

**Error Handling Tests** (5+):
- [ ] Create src/tests/e2e/error-handling.spec.ts
- [ ] Network errors
- [ ] Session timeout
- [ ] Permission denied
- [ ] Invalid input
- [ ] 404 errors

**5. Test locally:**
```bash
npm install
npx playwright install
npm run e2e --headed     # See browser
npm run e2e:debug       # Debug mode
```

**6. Make commits (minimum 5):**
```bash
git add .
git commit -m "Add authentication E2E tests"
git add .
git commit -m "Add search and filter tests"
git add .
git commit -m "Add book detail tests"
git add .
git commit -m "Add borrow return workflow tests"
git add .
git commit -m "Add error handling tests"
git push origin feature/joe-playwright-automation
```

**7. Run tests before push:**
```bash
npm run e2e
```

**8. Open Pull Request** on GitHub

---

## 🎯 Person 4 (Nat) - Jest Unit Tests & CI/CD

### Your Task
Create Jest unit tests and setup GitHub Actions CI/CD pipeline.

### Quick Start (Estimated 12 hours)

**1. Create your Git branch:**
```bash
git checkout main
git pull origin main
git checkout -b feature/nat-unit-tests-ci
```

**2. Review existing setup:**
- src/library/Library.ts ✅ (core class ready)
- jest.config.js ✅ (configured)
- tsconfig.json ✅ (configured)
- src/tests/unit/Library.test.ts ✅ (20+ tests started)

**3. Install dependencies:**
```bash
npm install
```

**4. Add more unit tests:**

Already completed in Library.test.ts:
- Search tests (5+) ✅
- Borrow/Return tests ✅
- User management tests ✅

**Expand coverage:**
- [ ] Add edge case tests
- [ ] Add integration tests
- [ ] Test error scenarios
- [ ] Test validation

**5. Run tests locally:**
```bash
npm test                    # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Generate coverage report
```

**6. Check coverage:**
```bash
npm run test:coverage
```

Target: 80%+ coverage
- Lines: 80%+
- Branches: 80%+
- Functions: 80%+
- Statements: 80%+

**7. Setup CI/CD (GitHub Actions):**

Files needed:
- [ ] Create `.github/workflows/ci.yml`
- [ ] Copy content from [CI_CD_SETUP.md](CI_CD_SETUP.md)
- [ ] Configure coverage thresholds
- [ ] Test locally before push

**8. Make commits (minimum 5):**
```bash
git add .
git commit -m "Add Jest configuration"
git add .
git commit -m "Add unit tests for Library class"
git add .
git commit -m "Add edge case unit tests"
git add .
git commit -m "Setup GitHub Actions CI workflow"
git add .
git commit -m "Fix coverage threshold config"
git push origin feature/nat-unit-tests-ci
```

**9. Open Pull Request** on GitHub

---

## ✅ Checklist for Everyone

### Before Starting Work
- [ ] Read GIT_WORKFLOW.md
- [ ] Create your feature branch
- [ ] Read your role's section above
- [ ] Review existing files in your area

### During Work
- [ ] Work only on your branch
- [ ] Commit regularly (at least 5 times)
- [ ] Write clear commit messages
- [ ] Test your work locally
- [ ] Ask teammates for help if stuck

### Before Opening PR
- [ ] All tests pass locally
- [ ] No linting errors
- [ ] Code is well-documented
- [ ] At least 5 commits made
- [ ] Ready for review

### PR Review Process
- [ ] Title is clear
- [ ] Description explains changes
- [ ] Ask 1 teammate to review
- [ ] Address any feedback
- [ ] Get approval before merging

### After Merging
- [ ] Delete feature branch
- [ ] Pull latest main
- [ ] Update weekly status

---

## 📞 Common Issues & Solutions

### Git Issues

**Merge Conflict:**
```bash
git fetch origin
git rebase origin/main
# Fix conflicts in editor
git add .
git rebase --continue
git push -f origin feature/branch
```

**Need to undo a commit:**
```bash
git reset --soft HEAD~1
# Edit files
git commit -m "Fixed version"
git push -f origin feature/branch
```

### Test Issues

**Tests not running:**
```bash
npm install
npm test
```

**Coverage not reaching 80%:**
- Add more tests for uncovered lines
- Focus on critical functions
- Test edge cases and error scenarios

### Playwright Issues

**Selectors not finding elements:**
- Use `npm run e2e:debug` to see page
- Check if selector is correct
- Wait for element to be visible

---

## 🎯 Final Reminders

✅ **DO:**
- Commit frequently (5+ times)
- Write meaningful commit messages
- Ask for code reviews
- Help teammates
- Update weekly status
- Keep code clean and documented

❌ **DON'T:**
- Work directly on main branch
- Make huge commits with many changes
- Skip testing before pushing
- Ignore code review feedback
- Forget to update weekly status

---

## 📊 Success Metrics

| Metric | Target | Your Role |
|--------|--------|-----------|
| Commits | 5+ | All |
| Test Cases | 30+ | Arm |
| Tests Passing | 100% | Joe, Nat |
| Code Coverage | 80%+ | Nat |
| Bugs Found | 10+ | Arm |
| Documentation | Complete | Pon |

---

**You got this! 🚀**

Feel free to reach out to your teammates if you have questions.

*Last Updated: 2026-04-04*
