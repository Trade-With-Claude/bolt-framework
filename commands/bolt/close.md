# /bolt:close — UNIFY (Mandatory Loop Closure)

Reconcile plan vs actual results. This is MANDATORY after every `/bolt:build`.

## Instructions

### Prerequisites

Determine the current version from `.bolt/STATE.md` (root).

Read:
1. The plan: `.bolt/{{version}}/phases/{{NN}}-{{name}}/{{NN}}-01-PLAN.md`
2. `.bolt/{{version}}/STATE.md` for build results

If no build has been run, tell user:
> Nothing to close. Run `/bolt:build <N>` first.

### Step 1: Acceptance Criteria Check

For each acceptance criterion in the plan:
1. Run the verify step
2. Record: PASS / FAIL / PARTIAL
3. For non-PASS: note what's wrong

### Step 2: Task Reconciliation

Compare plan tasks vs what actually happened:
- Which tasks passed verification during build?
- Which were skipped?
- Were any extra changes made outside the plan?

### Step 3: Log Deviations

Document anything that differed from the plan:
- Unexpected dependencies discovered
- Files changed that weren't in the plan
- Approach changes during build
- Anything skipped or deferred

### Step 4: Create SUMMARY.md

Save to `.bolt/{{version}}/phases/{{NN}}-{{name}}/{{NN}}-01-SUMMARY.md` using the summary template.

Include:
- AC results table
- Task results table
- Deviations
- Phase completion assessment (YES / NO / PARTIAL)

### Step 5: Update STATE.md

Update `.bolt/{{version}}/STATE.md`:
- Mark phase as: complete / partial / failed
- Update progress section
- Log any new decisions
- Set next action

### Step 6: Determine Next

Based on results:

**All ACs PASS — Phase complete:**
```
Phase {{N}} complete
NEXT: Run /bolt:plan {{N+1}} to plan the next phase.
```

**Some ACs FAIL — Partial:**
```
Phase {{N}} partial — {{X}}/{{Y}} criteria passed.
Failed: {{list}}
NEXT: Fix failures and re-run /bolt:build {{N}}, or /bolt:plan {{N}} to re-plan.
```

**All ACs FAIL — Phase failed:**
```
Phase {{N}} failed
NEXT: Review plan and re-run /bolt:plan {{N}} with adjustments.
```

### Rules

- **This command is mandatory** after every /bolt:build. The loop is not closed without it.
- **Be honest about results.** Don't round PARTIAL up to PASS.
- **Suggest exactly ONE next action.** Reduce decision fatigue.
- **SUMMARY.md is the record.** It must capture the truth of what happened.
