# /bolt:verify — User Acceptance Testing

Walk the user through acceptance criteria testing for the current or specified phase.

## Instructions

### Prerequisites

Find the latest SUMMARY.md or PLAN.md for the phase.
If no phase has been built, tell user to build first.

### Step 1: List Criteria

Show all acceptance criteria:
```
UAT for Phase {{N}}: {{name}}

AC-1: {{criterion}}
AC-2: {{criterion}}
AC-3: {{criterion}}

Let's test them one at a time.
```

### Step 2: Test Each Criterion

For each AC, present:
```
Testing AC-{{N}}: {{criterion}}

Given: {{precondition}}
When:  {{action}}
Then:  {{expected}}

How to test: {{verify step}}
```

Then ask: **"Did it pass?"**

Record user's response:
- **PASS** — criterion met
- **FAIL** — describe what went wrong
- **PARTIAL** — works but with issues

For FAIL/PARTIAL, ask:
- What happened instead?
- Assign severity: P0 (blocker) / P1 (major) / P2 (minor) / P3 (nit)

### Step 3: Results

```
UAT Results — Phase {{N}}: {{name}}

AC-1: {{criterion}} ✓ PASS
AC-2: {{criterion}} ✗ FAIL (P1) — {{description}}
AC-3: {{criterion}} ~ PARTIAL (P2) — {{description}}

Score: {{passed}}/{{total}} ({{percent}}%)
```

### Step 4: Fix Plan (if issues found)

If any FAIL or PARTIAL:
- Group issues by severity
- Propose a fix plan (which tasks to add/redo)
- Ask user to approve
- Update STATE.md with findings

### Rules

- **One criterion at a time.** Don't rush.
- **User drives the testing.** They tell you pass/fail, you don't assume.
- **Severity matters.** P0 blocks release, P3 can be deferred.
- **This is optional** but recommended after /bolt:close for important phases.
