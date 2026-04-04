# Library System E2E Testing 📚

End-to-End testing, UI testing, and Unit testing for a **Library Management System v2** using Playwright, Jest, and TypeScript.

---

## 📋 Project Overview

This is a **team-based quality assurance project** with 4 distinct roles:

1. **Test Planning & Documentation** (Pon)
2. **Test Case Design & Exploratory Testing** (Arm)
3. **Playwright E2E Automation** (Joe)
4. **Jest Unit Tests & CI/CD** (Nat)

**Project Goals:**
- ✅ Create 30+ manual test cases
- ✅ Develop 30+ automated E2E tests using Playwright
- ✅ Write 20+ Jest unit tests with 80%+ coverage
- ✅ Document 10+ bug reports
- ✅ Setup CI/CD pipeline with GitHub Actions
- ✅ All team members commit at least 5 times each
- ✅ Use Git branches & Pull Requests for collaboration

**Timeline:** 4 weeks  
**Status:** [ ] In Progress

---

## 🎯 Quick Start Guide

### Prerequisites
```bash
Node.js 18.x or higher
npm 9.x or higher
Git
```

### Installation
```bash
# Clone repository
git clone <repo-url>
cd Library-System-E2E-Testing

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

**Run all tests:**
```bash
npm test
```

**Run unit tests only:**
```bash
npm run test:unit
npm run test:watch          # Watch mode
npm run test:coverage       # With coverage report
```

**Run E2E tests:**
```bash
npm run e2e
npm run e2e:headed          # Show browser
npm run e2e:debug           # Debug mode
npm run e2e:report          # View HTML report
```

---

## 📁 Project Structure

```
Library-System-E2E-Testing/
├── docs/
│   ├── test-plan.md             # Test plan (Person 1 - Pon)
│   ├── rtm.md                   # Requirements Traceability Matrix
│   ├── weekly-status.md         # Weekly status reports
│   └── final-report.md          # Final summary
│
├── test-cases/
│   ├── e2e-scenarios.md         # 30+ manual test cases (Person 2 - Arm)
│   └── edge-cases.md            # Edge case scenarios
│
├── bug-reports/
│   └── bugs.md                  # 10+ bugs with details (Person 2 - Arm)
│
├── src/
│   ├── library/
│   │   └── Library.ts           # Core Library class
│   │
│   └── tests/
│       ├── unit/
│       │   └── Library.test.ts  # Jest unit tests (Person 4 - Nat)
│       │
│       └── e2e/
│           ├── auth.spec.ts     # Authentication E2E tests (Person 3 - Joe)
│           ├── search.spec.ts   # Search E2E tests
│           ├── borrow.spec.ts   # Borrow/Return E2E tests
│           └── pages/
│               └── PageObjects.ts   # Page Object Model
│
├── .github/workflows/
│   └── ci.yml                   # GitHub Actions CI/CD (Person 4 - Nat)
│
├── package.json
├── playwright.config.ts         # Playwright configuration
├── jest.config.js              # Jest configuration
├── tsconfig.json               # TypeScript configuration
├── GIT_WORKFLOW.md             # Git workflow guide
├── CI_CD_SETUP.md              # CI/CD setup instructions
└── README.md                   # This file
```

---

## 👥 Role & Responsibilities

### Person 1 - Pon: Test Planning + Documentation
- [x] Create comprehensive test plan
- [x] Define scope, objectives, strategy
- [x] Perform risk assessment
- [x] Create test schedule
- [x] Build Requirements Traceability Matrix (RTM)
- [x] Prepare final test report

**Deliverables:** 
- docs/test-plan.md
- docs/rtm.md
- docs/final-report.md

**Minimum Commits:** 5  
**Branch:** `feature/pon-test-plan`

---

### Person 2 - Arm: Test Cases + Exploratory Testing
- [x] Design 30+ manual test cases
- [x] Use various testing techniques (Equivalence Partitioning, Boundary Value, etc.)
- [x] Conduct exploratory testing
- [x] Document 10+ bugs with severity
- [x] Create edge case scenarios

**Deliverables:**
- test-cases/e2e-scenarios.md
- bug-reports/bugs.md

**Minimum Commits:** 5  
**Branch:** `feature/arm-e2e-test-cases`

---

### Person 3 - Joe: Playwright E2E Automation
- [x] Setup Playwright project
- [x] Create 30+ E2E automated tests
- [x] Implement Page Object Model pattern
- [x] Cover: Login, Search, Book Details, Borrow/Return
- [x] Configure cross-browser testing
- [x] Handle error scenarios

**Deliverables:**
- src/tests/e2e/*.spec.ts
- src/tests/e2e/pages/PageObjects.ts
- Playwright HTML reports

**Minimum Commits:** 5  
**Branch:** `feature/joe-playwright-automation`

**Tests to Create:**
- Authentication (5+ tests)
- Search & Filter (5+ tests)
- Book Details (4+ tests)
- Borrow/Return workflow (6+ tests)
- Error handling (5+ tests)
- Edge cases (5+ tests)

---

### Person 4 - Nat: Jest Unit Tests + CI/CD
- [x] Create jest.config.js and setup
- [x] Write 20+ Jest unit tests
- [x] Achieve 80%+ code coverage
- [x] Setup GitHub Actions CI pipeline
- [x] Configure code quality checks
- [x] Generate coverage reports

**Deliverables:**
- src/tests/unit/*.test.ts
- .github/workflows/ci.yml
- Coverage reports

**Minimum Commits:** 5  
**Branch:** `feature/nat-unit-tests-ci`

**Coverage Targets:**
- Lines: 80%+
- Branches: 80%+
- Functions: 80%+
- Statements: 80%+

---

## 🌱 Git Workflow for Team

**See:** [GIT_WORKFLOW.md](GIT_WORKFLOW.md)

### Quick Reference

**Create your branch:**
```bash
git checkout main
git pull origin main
git checkout -b feature/your-name-your-task
```

**Commit regularly (5+ commits minimum):**
```bash
git add .
git commit -m "Descriptive commit message"
git push -u origin feature/your-name-your-task
```

**Create Pull Request:**
1. Push your branch to GitHub
2. Open Pull Request with clear title and description
3. Ask another team member to review
4. Address feedback and push new commits
5. Merge after approval

**Example Commit Messages:**
```
Add test plan structure and objectives
Add search and filter test cases
Implement Playwright login E2E tests
Add Jest unit tests for Library class
Complete CI/CD pipeline setup
```

---

## 📊 Weekly Status & Progress

See: [docs/weekly-status.md](docs/weekly-status.md)

**Week 1 Goals:**
- [ ] Test plan completed
- [ ] 30+ test cases designed
- [ ] 5+ E2E tests automated
- [ ] 20+ unit tests written
- [ ] GitHub Actions setup started
- [ ] 5+ commits per person
- [ ] 10+ bugs documented

---

## 🧪 Testing Coverage

### Test Case Categories

| Category | Manual Cases | E2E Tests | Unit Tests |
|----------|--------------|-----------|------------|
| Authentication | 5 | 5 | 3 |
| Search & Filter | 5 | 5 | 3 |
| Book Details | 4 | 4 | 2 |
| Borrow/Return | 6 | 6 | 4 |
| User Profile | 4 | 2 | 2 |
| Error Handling | 5 | 3 | 2 |
| Edge Cases | 5 | 5 | 2 |
| **TOTAL** | **30+** | **30+** | **20+** |

---

## 📝 Documentation Files

| File | Owner | Purpose |
|------|-------|---------|
| docs/test-plan.md | Pon | Overall test strategy and plan |
| test-cases/e2e-scenarios.md | Arm | Detailed 30+ manual test cases |
| bug-reports/bugs.md | Arm | Bug reports with severity |
| src/tests/e2e/*.spec.ts | Joe | Playwright E2E test scripts |
| src/tests/unit/*.test.ts | Nat | Jest unit test scripts |
| docs/weekly-status.md | All | Progress tracking (weekly) |
| GIT_WORKFLOW.md | All | Git & collaboration guide |
| CI_CD_SETUP.md | Nat | GitHub Actions setup |

---

## 🐛 Bug Tracking

**Status:** 10+ bugs documented in [bug-reports/bugs.md](bug-reports/bugs.md)

**Bug Priority:**
- 🔴 Critical (P0): 1 bug
- 🟠 High (P1): 4 bugs
- 🟡 Medium (P2): 4 bugs
- 🟢 Low (P3): 1 bug

**Sample Bugs:**
1. Login error message not visible
2. Search special characters cause error
3. Borrow button not disabled for unavailable books
4. Session timeout not working
5. Mobile responsive issues

---

## ✅ Success Criteria

**All Tasks Completion:**
- [ ] Test plan: 100% complete
- [ ] Manual test cases: 30+
- [ ] Bugs documented: 10+
- [ ] E2E tests: 30+
- [ ] Unit tests: 20+
- [ ] Code coverage: 80%+
- [ ] CI/CD: Fully automated

**Team Collaboration:**
- [ ] Each person: 5+ commits
- [ ] All Pull Requests reviewed
- [ ] Weekly status updated
- [ ] No merge conflicts
- [ ] All branches deleted after merge

**Quality Standards:**
- [ ] All tests pass
- [ ] No linting errors
- [ ] Code coverage 80%+
- [ ] Documentation complete
- [ ] Final report submitted

---

## 🚀 Deployment & CI/CD

**See:** [CI_CD_SETUP.md](CI_CD_SETUP.md)

**GitHub Actions Pipeline:**
- ✅ Unit tests (multiple Node versions)
- ✅ E2E tests (on PR)
- ✅ Code coverage report
- ✅ Artifact upload
- ✅ Coverage badge

**Trigger Events:**
- Push to main/develop
- Pull requests
- Manual trigger

---

## 📚 Resources & References

**Testing Frameworks:**
- [Playwright Documentation](https://playwright.dev)
- [Jest Documentation](https://jestjs.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

**Testing Techniques:**
- Equivalence Partitioning
- Boundary Value Analysis
- Decision Table Testing
- State Transition Testing
- Exploratory Testing

**Best Practices:**
- Page Object Model pattern
- Clean code principles
- Git workflow discipline
- Commit message standards

---

## 💡 Tips for Team Success

1. **Communicate:** Share blockers early
2. **Review Code:** Give constructive feedback
3. **Test Thoroughly:** Don't skip testing
4. **Document:** Write clear commit messages
5. **Collaborate:** Help teammates when stuck
6. **Track Progress:** Update weekly status
7. **Celebrate:** Celebrate milestones! 🎉

---

## 📞 Support & Issues

**Having issues?**

1. Check existing documentation
2. Review GIT_WORKFLOW.md for Git issues
3. See CI_CD_SETUP.md for CI/CD issues
4. Ask teammates for help
5. Create GitHub issue if needed

---

## 📄 License

MIT License - Use freely for educational purposes

---

## 👏 Contributors

- **Pon** - Test Planning & Documentation
- **Arm** - Test Cases & Exploratory Testing
- **Joe** - Playwright E2E Automation
- **Nat** - Jest Unit Tests & CI/CD

---

## 📅 Project Timeline

| Week | Tasks | Status |
|------|-------|--------|
| Week 1 | Setup, planning, initial tests | [ ] |
| Week 2 | Expand tests, explore more | [ ] |
| Week 3 | Automation complete, CI setup | [ ] |
| Week 4 | Final testing, reporting | [ ] |

---

**Last Updated:** 2026-04-04  
**Project Status:** 🟡 In Progress
