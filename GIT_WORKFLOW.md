# Git Workflow - ชั่วโครงสร้าง 4 คน

## 📋 สรุปอย่างรวบรัด

- **ทุกคนใช้ branch ของตัวเอง** ไม่ทำงานบน `main`
- **Commit ให้บ่อย** (อย่างน้อย 5 ครั้งต่อคน)
- **เปิด Pull Request (PR)** เมื่อเสร็จแต่ละงาน
- **Review กันอพ** ก่อน merge
- **อัพเดท weekly status** ทุกสัปดาห์

---

## 🌳 ชื่อ Branch (Feature Branches)

```
feature/pon-test-plan                 # Person 1: test planning
feature/arm-e2e-test-cases            # Person 2: exploratory + e2e scenarios
feature/joe-playwright-automation     # Person 3: playwright automation
feature/nat-unit-tests-ci             # Person 4: unit tests + CI
```

**กฎ naming:**
- เริ่มด้วย `feature/` หรือ `bugfix/`
- ตามด้วยชื่อเล่นหรือชื่อจริง
- ตามด้วยหัวข้องาน
- ใช้ `-` แทน `_`

---

## 🚀 ขั้นตอนการทำงาน

### 1. Pull latest code
```bash
git checkout main
git pull origin main
```

### 2. สร้าง branch ของตัวเอง
```bash
git checkout -b feature/your-name-your-task
```

### 3. ทำงานและ commit เป็นขั้นตอน
```bash
# ทำงานเล็กน้อยแล้ว commit
git add .
git commit -m "Add test plan initial structure"

# ทำต่อ
git add .
git commit -m "Add scope and objectives to test plan"

# ทำต่อ
git add .
git commit -m "Add risk assessment section"
```

### 4. Push ขึ้น GitHub
```bash
git push -u origin feature/your-name-your-task
```

### 5. เปิด Pull Request (PR)
- ไปที่ GitHub
- เลือก "Create Pull Request"
- ตั้งชื่อ: `[Person Name] Task Description`
- อธิบายอย่างสั้น ๆ ว่าทำอะไร

**ตัวอย่าง PR Title:**
```
[Pon] Add test plan with scope, objectives, and risk assessment
[Arm] Add 30+ E2E test cases with exploratory findings
[Joe] Implement Playwright login/logout automation tests
[Nat] Add Jest unit tests for Library class with 85% coverage
```

### 6. Review กันอพ
- **Reviewer:** ดูว่างาน complete หรือไม่, มี bug ไหม
- **Author:** แก้ feedback, push commit ใหม่
- **Reviewer:** Approve และ Merge

### 7. Delete branch และ pull latest
```bash
git branch -d feature/your-name-your-task
git checkout main
git pull origin main
```

---

## ✅ Commit Message Examples

### Good commit messages

```
Add test plan document structure
Add scope and objectives sections
Add risk assessment matrix
Add test schedule timeline
Add requirements traceability matrix
```

```
Create Library class with book management methods
Add addBook method with validation
Add removeBook and searchByTitle methods
Add borrowBook and returnBook functionality
Add unit tests for Library class
```

```
Add Playwright project setup
Add login page test suite
Add search and filter test cases
Add error handling edge cases
Fix flaky test in logout scenario
```

### ❌ Bad commit messages
```
update file
fix stuff
working on tests
finished
```

---

## 📊 Weekly Status Report

**ไฟล์:** `docs/weekly-status.md`

ทุกสัปดาห์ (เช่น ทุกวันศุกร์) ให้แต่ละคนอัพเดท:

### Template
```markdown
## Week X - Status Report

### [Person Name] - [Task Name]

**Completed:**
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

**In Progress:**
- Task A (80% done)
- Task B (40% done)

**Blockers/Issues:**
- ปัญหา 1
- ปัญหา 2

**Commits:** 5+ commits this week
- Commit message 1
- Commit message 2
- etc.

**Next Steps:**
- ต้องทำต่อ อะไร
```

---

## 🔨 Workflow Diagram

```
┌─────────────────────────────────────────────────────────┐
│ main branch (protected - no direct commits)             │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┼────────────┬───────────┐
        │            │            │           │
        ▼            ▼            ▼           ▼
   [Pon branch]  [Arm branch] [Joe branch] [Nat branch]
        │            │            │           │
    commit 1     commit 1     commit 1    commit 1
    commit 2     commit 2     commit 2    commit 2
    commit 3     commit 3     commit 3    commit 3
    commit 4     commit 4     commit 4    commit 4
    commit 5     commit 5     commit 5    commit 5
        │            │            │           │
        └────────────┼────────────┴───────────┘
                     │
              ┌──────▼────────┐
              │ Pull Requests  │ (review + approve)
              │ (1 review per) │
              └──────┬────────┘
                     │
              ┌──────▼──────────┐
              │ Merge to main   │
              └─────────────────┘
```

---

## 💡 Tips

1. **Commit บ่อย ๆ** - ทำให้ tracking เปลี่ยนแปลง ง่ายกว่า
2. **Pull request ทีละส่วนเล็ก ๆ** - ทำให้ review ง่ายกว่า
3. **ให้คนอื่น review** - จับ bug ที่คุณมองข้าม
4. **Write clear commit messages** - ช่วยให้คนอื่นเข้าใจ
5. **Pull main ก่อนเริ่มงาน** - อย่างน้อย 1 ครั้งต่อวัน

---

## 🎯 ความพยายามขั้นต่ำต่อคน

- ✅ **5+ commits** ต่อคน
- ✅ **1 Pull Request** ที่สมบูรณ์ (หรือหลาย PR เล็ก ๆ)
- ✅ **100% task completion** ตามบทบาท
- ✅ **Weekly status** อัพเดทแต่ละสัปดาห์
- ✅ **Code review** ให้เพื่อนอย่างน้อย 1 คน

---

## 🆘 Common Issues

### Issue: Merge conflicts
```bash
# Fetch latest
git fetch origin

# Rebase or merge
git rebase origin/main
# แก้ conflicts ใน editor
# แล้ว push
git push -f origin feature/your-branch
```

### Issue: ต้องการแก้ commit ที่ผ่านมา
```bash
# แก้ code
git add .
git commit --amend
git push -f origin feature/your-branch
```

### Issue: ต้องการ pull latest main ขณะทำงาน
```bash
git fetch origin
git rebase origin/main
git push -f origin feature/your-branch
```

---

## ✨ Success Checklist

- [ ] ทุกคน checkout branch ของตัวเอง
- [ ] commit อย่างน้อย 5 ครั้ง
- [ ] เปิด PR และ review กัน
- [ ] merge ไป main
- [ ] อัพเดท weekly status
- [ ] ทดสอบว่า all tests pass

---

**Go team! 🚀**
