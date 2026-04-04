# Test Cases - E2E Scenarios for Library System

**Prepared by:** [Person 2 - Arm]  
**Date Created:** 2026-04-04  
**Total Test Cases:** 30+

---

## Test Case Template

```
Test Case ID: TC_[CATEGORY]_[NUMBER]
Test Name: [Descriptive name]
Priority: P0/P1/P2 (Critical/High/Medium)
Precondition: [What needs to be setup]
Test Steps: 
  1. Step
  2. Step
Expected Result: [What should happen]
Actual Result: [To be filled during execution]
Status: [Pass/Fail/Blocked]
Bugs Found: [If any]
Notes: [Additional info]
```

---

## 1. Authentication Test Cases

### TC_AUTH_001
| Field | Value |
|-------|-------|
| **Name** | Valid Login - Correct credentials |
| **Priority** | P0 |
| **Precondition** | User has valid account, not logged in |
| **Steps** | 1. Navigate to login page<br>2. Enter username: "testuser"<br>3. Enter password: "password123"<br>4. Click "Login" |
| **Expected** | User redirected to dashboard, welcome message displayed |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_AUTH_002
| Field | Value |
|-------|-------|
| **Name** | Invalid Login - Wrong password |
| **Priority** | P0 |
| **Precondition** | User account exists |
| **Steps** | 1. Navigate to login page<br>2. Enter username: "testuser"<br>3. Enter password: "wrongpassword"<br>4. Click "Login" |
| **Expected** | Error message: "Invalid credentials" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_AUTH_003
| Field | Value |
|-------|-------|
| **Name** | Invalid Login - Non-existent user |
| **Priority** | P0 |
| **Precondition** | Test setup complete |
| **Steps** | 1. Navigate to login page<br>2. Enter username: "nonexistent@test.com"<br>3. Enter password: "anypassword"<br>4. Click "Login" |
| **Expected** | Error message: "User not found" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_AUTH_004
| Field | Value |
|-------|-------|
| **Name** | Empty Fields - No input |
| **Priority** | P1 |
| **Precondition** | On login page |
| **Steps** | 1. Leave username empty<br>2. Leave password empty<br>3. Click "Login" |
| **Expected** | Validation error: "Please fill all fields" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_AUTH_005
| Field | Value |
|-------|-------|
| **Name** | Logout - End session |
| **Priority** | P0 |
| **Precondition** | User logged in |
| **Steps** | 1. Click user menu<br>2. Click "Logout"<br>3. Confirm logout |
| **Expected** | User redirected to login page, session cleared |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

---

## 2. Search & Filter Test Cases

### TC_SEARCH_001
| Field | Value |
|-------|-------|
| **Name** | Search by Title - Exact match |
| **Priority** | P0 |
| **Precondition** | User logged in, books available |
| **Steps** | 1. Go to Search page<br>2. Enter: "The Great Gatsby"<br>3. Click "Search" |
| **Expected** | Book "The Great Gatsby" displayed in results |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_SEARCH_002
| Field | Value |
|-------|-------|
| **Name** | Search by Author - Multiple results |
| **Priority** | P1 |
| **Precondition** | User logged in |
| **Steps** | 1. Click Author filter<br>2. Enter: "Stephen King"<br>3. Click "Search" |
| **Expected** | All books by Stephen King displayed |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_SEARCH_003
| Field | Value |
|-------|-------|
| **Name** | Search - Empty Result |
| **Priority** | P1 |
| **Precondition** | User logged in |
| **Steps** | 1. Search for: "XYZ_NOT_EXISTS"<br>2. Click "Search" |
| **Expected** | Message: "No books found" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_SEARCH_004
| Field | Value |
|-------|-------|
| **Name** | Search with Special Characters |
| **Priority** | P2 |
| **Precondition** | User logged in |
| **Steps** | 1. Search for: "Café@#$%"<br>2. Click "Search" |
| **Expected** | Handled gracefully, no error |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_SEARCH_005
| Field | Value |
|-------|-------|
| **Name** | Filter by Category |
| **Priority** | P1 |
| **Precondition** | User logged in |
| **Steps** | 1. Click Category filter<br>2. Select: "Fiction"<br>3. Apply filter |
| **Expected** | Only fiction books displayed |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

---

## 3. Book Details Test Cases

### TC_DETAIL_001
| Field | Value |
|-------|-------|
| **Name** | View Book Details |
| **Priority** | P0 |
| **Precondition** | User on search results |
| **Steps** | 1. Click on book title<br>2. Wait for detail page to load |
| **Expected** | Book info displayed: title, author, ISBN, availability |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_DETAIL_002
| Field | Value |
|-------|-------|
| **Name** | Check Book Availability |
| **Priority** | P1 |
| **Precondition** | On book detail page |
| **Steps** | 1. Look at availability status |
| **Expected** | Status shows: "Available" or "Borrowed" with due date |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_DETAIL_003
| Field | Value |
|-------|-------|
| **Name** | Add to Wishlist |
| **Priority** | P2 |
| **Precondition** | On book detail page |
| **Steps** | 1. Click "Add to Wishlist"<br>2. Confirm |
| **Expected** | Book added to wishlist, success message shown |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_DETAIL_004
| Field | Value |
|-------|-------|
| **Name** | View Reviews/Ratings |
| **Priority** | P1 |
| **Precondition** | On book detail page |
| **Steps** | 1. Scroll down to reviews<br>2. View ratings and comments |
| **Expected** | Reviews and average rating displayed |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

---

## 4. Borrow/Return Test Cases

### TC_BORROW_001
| Field | Value |
|-------|-------|
| **Name** | Borrow Available Book |
| **Priority** | P0 |
| **Precondition** | User logged in, book available |
| **Steps** | 1. On book detail page<br>2. Click "Borrow"<br>3. Confirm borrow |
| **Expected** | Success message, book added to "My Books", due date shown |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_BORROW_002
| Field | Value |
|-------|-------|
| **Name** | Cannot Borrow - Already Borrowed by User |
| **Priority** | P1 |
| **Precondition** | User already borrowed this book |
| **Steps** | 1. Try to borrow same book again |
| **Expected** | Error: "You already have this book borrowed" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_BORROW_003
| Field | Value |
|-------|-------|
| **Name** | Cannot Borrow - No Copies Available |
| **Priority** | P1 |
| **Precondition** | All copies borrowed |
| **Steps** | 1. Try to borrow book with 0 available copies |
| **Expected** | Error: "No copies available. Join waitlist?" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_BORROW_004
| Field | Value |
|-------|-------|
| **Name** | List Max Borrow Limit Reached |
| **Priority** | P2 |
| **Precondition** | User borrowed maximum allowed books (e.g., 10) |
| **Steps** | 1. Try to borrow another book |
| **Expected** | Error: "Reached maximum borrow limit (10/10)" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_BORROW_005
| Field | Value |
|-------|-------|
| **Name** | Return Book - On Time |
| **Priority** | P0 |
| **Precondition** | Book borrowed, not overdue |
| **Steps** | 1. Go to "My Books"<br>2. Click "Return"<br>3. Confirm return |
| **Expected** | Book returned, success message, added to return history |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_BORROW_006
| Field | Value |
|-------|-------|
| **Name** | Return Book - Overdue |
| **Priority** | P1 |
| **Precondition** | Book past due date |
| **Steps** | 1. Return book past due date |
| **Expected** | Success but warn: "Book overdue, fine: $5.00"<br>Fine charged to account |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

---

## 5. User Profile Test Cases

### TC_PROFILE_001
| Field | Value |
|-------|-------|
| **Name** | View User Profile |
| **Priority** | P1 |
| **Precondition** | User logged in |
| **Steps** | 1. Click user menu<br>2. Select "My Profile" |
| **Expected** | Profile page shows: name, email, member ID, borrow history |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_PROFILE_002
| Field | Value |
|-------|-------|
| **Name** | Edit Profile Information |
| **Priority** | P1 |
| **Precondition** | On profile page |
| **Steps** | 1. Click "Edit Profile"<br>2. Change phone: "+1-555-0123"<br>3. Save |
| **Expected** | Success: "Profile updated", phone changed |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_PROFILE_003
| Field | Value |
|-------|-------|
| **Name** | View Borrow History |
| **Priority** | P1 |
| **Precondition** | User has borrowed books |
| **Steps** | 1. Go to profile<br>2. Click "History" tab |
| **Expected** | List of all past borrowings with dates |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_PROFILE_004
| Field | Value |
|-------|-------|
| **Name** | View Pending Fines |
| **Priority** | P2 |
| **Precondition** | User has overdue books |
| **Steps** | 1. Go to profile<br>2. Check "Fines" section |
| **Expected** | Display all pending fines with amounts |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

---

## 6. Error Handling Test Cases

### TC_ERROR_001
| Field | Value |
|-------|-------|
| **Name** | Network Error - Page Load |
| **Priority** | P2 |
| **Precondition** | Simulate network disconnection |
| **Steps** | 1. Disconnect network<br>2. Try to load page |
| **Expected** | Error message: "Network error. Retry?" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_ERROR_002
| Field | Value |
|-------|-------|
| **Name** | Session Timeout |
| **Priority** | P1 |
| **Precondition** | User logged in |
| **Steps** | 1. Wait for session timeout (15 mins)<br>2. Try to perform action |
| **Expected** | Redirect to login with msg: "Session expired" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_ERROR_003
| Field | Value |
|-------|-------|
| **Name** | Permission Denied - Unauthorized Access |
| **Priority** | P0 |
| **Precondition** | User tries to access another user's data |
| **Steps** | 1. Try to access: /profile/user123 (not own) |
| **Expected** | Error 403: "Access Denied" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_ERROR_004
| Field | Value |
|-------|-------|
| **Name** | Invalid Input - SQL Injection Attempt |
| **Priority** | P0 |
| **Precondition** | On search page |
| **Steps** | 1. Enter: `"; DROP TABLE books; --`<br>2. Search |
| **Expected** | No SQL error, treated as normal text search |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_ERROR_005
| Field | Value |
|-------|-------|
| **Name** | 404 Error - Non-existent Page |
| **Priority** | P2 |
| **Precondition** | Navigate to invalid URL |
| **Steps** | 1. Go to: /books/9999999 (invalid ID) |
| **Expected** | 404 Page: "Book not found" with link to home |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

---

## 7. Edge Cases & Boundary Tests

### TC_EDGE_001
| Field | Value |
|-------|-------|
| **Name** | Concurrent Borrow Request |
| **Priority** | P2 |
| **Precondition** | 1 copy available, 2 users trying to borrow |
| **Steps** | 1. User A: Borrow book<br>2. User B: Borrow same book (simultaneously) |
| **Expected** | Only one succeeds, other gets: "No copies available" |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_EDGE_002
| Field | Value |
|-------|-------|
| **Name** | Title with Very Long Text |
| **Priority** | P2 |
| **Precondition** | On book detail page |
| **Steps** | 1. View book with 200+ char title |
| **Expected** | Title displays properly, no overflow/truncation |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_EDGE_003
| Field | Value |
|-------|-------|
| **Name** | Search with Leading/Trailing Spaces |
| **Priority** | P2 |
| **Precondition** | On search page |
| **Steps** | 1. Enter: "   The Great Gatsby   "<br>2. Search |
| **Expected** | Trimmed and found correctly |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_EDGE_004
| Field | Value |
|-------|-------|
| **Name** | Case Insensitive Search |
| **Priority** | P1 |
| **Precondition** | On search page |
| **Steps** | 1. Search: "the great gatsby"<br>2. Search: "THE GREAT GATSBY" |
| **Expected** | Both return same results |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

### TC_EDGE_005
| Field | Value |
|-------|-------|
| **Name** | Unicode/International Characters |
| **Priority** | P2 |
| **Precondition** | Books with international titles exist |
| **Steps** | 1. Search: "노르웨이의숲" (Norwegian Wood in Korean)<br>2. Search: "Søren" |
| **Expected** | Results found correctly |
| **Actual** | [ ] TBD |
| **Status** | [ ] Pass [ ] Fail [ ] Blocked |

---

## Summary & Statistics

**Total Test Cases:** 30  
**By Category:**
- Authentication: 5
- Search & Filter: 5
- Book Details: 4
- Borrow/Return: 6
- User Profile: 4
- Error Handling: 5
- Edge Cases: 5

**Priority Distribution:**
- P0 (Critical): 10 cases
- P1 (High): 14 cases
- P2 (Medium): 6 cases

---

## Execution Notes

- [ ] All test cases executed
- [ ] Bugs logged in bug-reports/bugs.md
- [ ] Pass rate: ____ %
- [ ] Execution date: __________

*Last Updated: 2026-04-04*  
*Status: DRAFT - Under Review*
