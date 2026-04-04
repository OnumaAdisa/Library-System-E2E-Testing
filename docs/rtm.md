# Requirements Traceability Matrix (RTM)

**Project:** Library Management System E2E Testing  
**Version:** 1.0  
**Date Created:** 2026-04-04  
**Prepared by:** Person 1 - Pon

---

## Overview

This RTM maps business requirements to test cases, ensuring complete test coverage and traceability throughout the testing lifecycle.

**Coverage Summary:**
- Total Requirements: 12
- Total Test Cases: 30+
- Coverage Ratio: 2.5 test cases per requirement

---

## Requirements Mapping

| Req ID | Requirement Description | Priority | Test Case IDs | Status | Notes |
|--------|-------------------------|----------|---------------|--------|-------|
| **R1** | User shall be able to login with valid credentials | Critical | TC_AUTH_001 | [ ] | Single valid login scenario |
| **R2** | User shall be denied login with invalid credentials | Critical | TC_AUTH_002, TC_AUTH_003 | [ ] | Wrong password, non-existent user |
| **R3** | User shall be able to logout successfully | High | TC_AUTH_005 | [ ] | Session termination |
| **R4** | User shall be able to search books by title | Critical | TC_SEARCH_001 | [ ] | Exact and partial matches |
| **R5** | User shall be able to search books by author | High | TC_SEARCH_002 | [ ] | Author name search |
| **R6** | User shall be able to view detailed book information | High | TC_DETAIL_001, TC_DETAIL_002 | [ ] | Book details and availability |
| **R7** | User shall be able to borrow available books | Critical | TC_BORROW_001 | [ ] | Successful borrow flow |
| **R8** | User shall be prevented from borrowing unavailable books | Critical | TC_BORROW_002, TC_BORROW_003 | [ ] | Already borrowed, no copies |
| **R9** | User shall be able to return borrowed books | Critical | TC_BORROW_005, TC_BORROW_006 | [ ] | On-time and overdue returns |
| **R10** | System shall handle error conditions gracefully | High | TC_ERROR_001, TC_ERROR_002, TC_ERROR_003 | [ ] | Network, session, permission errors |
| **R11** | System shall validate all user inputs | High | TC_AUTH_004, TC_ERROR_004 | [ ] | Empty fields, invalid data |
| **R12** | System shall work consistently across supported browsers | Medium | All TC_* | [ ] | Chrome, Firefox, Safari |

---

## Test Coverage Analysis

### By Requirement Type

| Type | Count | Coverage | Test Cases |
|------|-------|----------|------------|
| Authentication | 3 | 100% | TC_AUTH_001-005 |
| Search & Browse | 3 | 100% | TC_SEARCH_001-005 |
| Book Management | 3 | 100% | TC_DETAIL_001-004 |
| Borrow/Return | 3 | 100% | TC_BORROW_001-006 |
| Error Handling | 3 | 100% | TC_ERROR_001-005 |
| Edge Cases | 3 | 100% | TC_EDGE_001-005 |

### By Test Type

| Test Type | Requirements | Test Cases | Coverage |
|-----------|--------------|------------|----------|
| Functional | 9 | 25+ | 100% |
| Non-Functional | 3 | 5+ | 100% |
| Error Handling | 3 | 5+ | 100% |

---

## Traceability Verification

### Forward Traceability
Requirements → Test Cases → Test Execution → Results

### Backward Traceability
Test Results → Test Cases → Requirements → Business Needs

### Coverage Metrics
- **Requirement Coverage:** 12/12 (100%)
- **Test Case Coverage:** 30+/30+ (100% planned)
- **Execution Coverage:** To be measured during testing

---

## Change Management

| Change ID | Date | Description | Impact | Status |
|-----------|------|-------------|--------|--------|
| CHG_001 | 2026-04-04 | Initial RTM creation | None | Approved |
| CHG_002 | - | Requirement updates | TBD | Pending |
| CHG_003 | - | Test case additions | TBD | Pending |

---

## Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Test Lead | Person 1 - Pon | 2026-04-04 | ____ |
| QA Lead | Person 2 - Arm | ____ | ____ |
| Development Lead | Person 3 - Joe | ____ | ____ |

---

## References

- [test-plan.md](../test-plan.md) - Main test plan
- [e2e-scenarios.md](../../test-cases/e2e-scenarios.md) - Detailed test cases
- [bugs.md](../../bug-reports/bugs.md) - Bug tracking

---

*Last Updated: 2026-04-04*  
*Status: Active - Under Review*
