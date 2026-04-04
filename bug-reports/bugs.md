# Bug Reports - Library Management System

**Project:** Library System E2E Testing  
**Date Started:** 2026-04-04  
**Prepared by:** [Person 2 - Arm]

---

## Bug Report Template

```
Bug ID: BUG_[NUMBER]
Title: [Short description]
Severity: Critical | High | Medium | Low
Status: Open | In Progress | Fixed | Closed | Deferred
Reported by: [Name]
Date Found: [Date]
Environment: OS, Browser, Version
Steps to Reproduce:
  1. Step 1
  2. Step 2
  3. ...
Expected Behavior: [What should happen]
Actual Behavior: [What actually happens]
Attachments: [Screenshots/videos]
Root Cause: [If known]
Fix Priority: P0 | P1 | P2
Assigned To: [Developer]
Resolution: [How fixed, if applicable]
```

---

## Bug List

### BUG_001
| Field | Value |
|-------|-------|
| **ID** | BUG_001 |
| **Title** | Login page not displaying error message clearly |
| **Severity** | Medium |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | Chrome 120, Windows 11 |
| **Reproduce** | 1. Go to login<br>2. Enter wrong password<br>3. Submit |
| **Expected** | Clear error message in red, highlighted field |
| **Actual** | Error text appears in gray, hard to see |
| **Screenshot** | - |
| **Root Cause** | Color contrast issue in CSS |
| **Priority** | P1 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_002
| Field | Value |
|-------|-------|
| **ID** | BUG_002 |
| **Title** | Search returns incorrect results when special characters used |
| **Severity** | High |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | Firefox 124, Ubuntu 22.04 |
| **Reproduce** | 1. Search: "Café"<br>2. Click search |
| **Expected** | Books with "Cafe" returned |
| **Actual** | No results, system error |
| **Screenshot** | - |
| **Root Cause** | UTF-8 encoding issue in search engine |
| **Priority** | P1 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_003
| Field | Value |
|-------|-------|
| **ID** | BUG_003 |
| **Title** | Borrow button not disabled for unavailable books |
| **Severity** | Critical |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | Safari 17, macOS 14 |
| **Reproduce** | 1. Find unavailable book<br>2. Check if "Borrow" button clickable |
| **Expected** | Button disabled/grayed out |
| **Actual** | Button is active, clicking allows borrow (but fails with error) |
| **Screenshot** | - |
| **Root Cause** | Frontend validation missing |
| **Priority** | P0 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_004
| Field | Value |
|-------|-------|
| **ID** | BUG_004 |
| **Title** | Session timeout not working correctly |
| **Severity** | High |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | Chrome 120, Windows 11 |
| **Reproduce** | 1. Login<br>2. Leave idle for 20 mins<br>3. Try action |
| **Expected** | Redirect to login after 15 mins |
| **Actual** | Still logged in after 30 mins |
| **Screenshot** | - |
| **Root Cause** | Session timer not properly implemented |
| **Priority** | P1 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_005
| Field | Value |
|-------|-------|
| **ID** | BUG_005 |
| **Title** | Mobile responsive: Search bar overlaps with results |
| **Severity** | Medium |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | Chrome Mobile, iPhone 14 |
| **Reproduce** | 1. Open on mobile/tablet<br>2. Search for book |
| **Expected** | Results visible below search bar |
| **Actual** | Results hidden behind fixed search bar |
| **Screenshot** | - |
| **Root Cause** | CSS z-index issue on mobile |
| **Priority** | P1 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_006
| Field | Value |
|-------|-------|
| **ID** | BUG_006 |
| **Title** | Borrow history showing duplicate entries |
| **Severity** | Medium |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | All browsers |
| **Reproduce** | 1. Go to profile<br>2. View borrow history |
| **Expected** | Each transaction listed once |
| **Actual** | Some transactions appear 2-3 times |
| **Screenshot** | - |
| **Root Cause** | Database query duplicate results |
| **Priority** | P2 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_007
| Field | Value |
|-------|-------|
| **ID** | BUG_007 |
| **Title** | Book details page slow to load (3+ seconds) |
| **Severity** | Medium |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | Broadband connection, Chrome |
| **Reproduce** | 1. Click on any book title<br>2. Time to load |
| **Expected** | Page loads in < 1 second |
| **Actual** | Takes 3-4 seconds |
| **Screenshot** | - |
| **Root Cause** | Unoptimized image loading / N+1 queries |
| **Priority** | P2 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_008
| Field | Value |
|-------|-------|
| **ID** | BUG_008 |
| **Title** | Pagination not working on search results |
| **Severity** | High |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | All browsers |
| **Reproduce** | 1. Search with 100+ results<br>2. Click page 2 |
| **Expected** | Load next 20 results |
| **Actual** | Stays on page 1, no change |
| **Screenshot** | - |
| **Root Cause** | Pagination API call not implemented |
| **Priority** | P1 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_009
| Field | Value |
|-------|-------|
| **ID** | BUG_009 |
| **Title** | Wishlist button shows "Add" even for books already wishlisted |
| **Severity** | Low |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | Chrome 120 |
| **Reproduce** | 1. Add book to wishlist<br>2. Reload page<br>3. Check button text |
| **Expected** | Button shows "Remove from Wishlist" |
| **Actual** | Button still shows "Add to Wishlist" |
| **Screenshot** | - |
| **Root Cause** | Frontend state not synced with backend |
| **Priority** | P2 |
| **Assigned To** | - |
| **Resolution** | - |

### BUG_010
| Field | Value |
|-------|-------|
| **ID** | BUG_010 |
| **Title** | Error message doesn't show validation details |
| **Severity** | Medium |
| **Status** | [ ] Open [ ] In Progress [ ] Fixed [ ] Closed |
| **Reported by** | Arm |
| **Date** | 2026-04-04 |
| **Environment** | All browsers |
| **Reproduce** | 1. On profile edit<br>2. Enter invalid phone number<br>3. Save |
| **Expected** | Error: "Phone must be valid format: +1-XXX-XXX-XXXX" |
| **Actual** | Generic error: "Invalid input" |
| **Screenshot** | - |
| **Root Cause** | Error message not specific |
| **Priority** | P2 |
| **Assigned To** | - |
| **Resolution** | - |

---

## Bug Statistics

| Category | Count |
|----------|-------|
| **Critical** | 1 |
| **High** | 4 |
| **Medium** | 4 |
| **Low** | 1 |
| **Total** | 10 |

| Status | Count |
|--------|-------|
| Open | 10 |
| In Progress | 0 |
| Fixed | 0 |
| Closed | 0 |

---

## Action Items

- [ ] BUG_003, BUG_004, BUG_008 - Critical/High, must fix
- [ ] BUG_001, BUG_002, BUG_005 - Medium priority
- [ ] BUG_006, BUG_007, BUG_009, BUG_010 - Can defer or fix later

---

*Last Updated: 2026-04-04*  
*Status: Under Investigation*
