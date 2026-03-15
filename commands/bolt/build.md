# /bolt:build — Execute Phase Plan

Execute the plan for a phase, task by task, with inline verification.

**Usage:** `/bolt:build <N>` where N is the phase number.

**Phase number:** $ARGUMENTS

## Instructions

### Prerequisites

Determine the current version from `.bolt/STATE.md` (root).

1. Read the plan: `.bolt/{{version}}/phases/{{NN}}-{{name}}/{{NN}}-01-PLAN.md`
2. Read `.bolt/{{version}}/STATE.md` for current position.
3. Read `.bolt/PROJECT.md` for project context.

If no plan exists for phase N, tell user to run `/bolt:plan N` first.

### Execution Loop

For each task in the plan:

#### 1. Announce
```
Task {{M}}/{{total}}: {{task_name}}
Files: {{file list}}
```

#### 2. Check Boundaries
Before touching any file, verify it's not in the DO NOT CHANGE list.
If a boundary would be violated:
> This task wants to modify {{file}} which is in DO NOT CHANGE.
> Should I proceed anyway? (yes/skip/stop)

#### 3. Execute
Implement the task as described in the `action` field.
- Write clean, working code
- Follow existing patterns in the codebase
- Don't over-engineer — do exactly what the task says

#### 4. Verify
Run the `verify` step exactly as written.

**On PASS:**
```
Task {{M}}: {{name}} PASS
```
Mark task as `done: true` in the plan file. Continue to next task.

**On FAIL:**
```
Task {{M}}: {{name}} FAIL
Error: {{what went wrong}}
```
Stop and offer options:
- **retry** — fix the issue and re-verify
- **skip** — mark as SKIPPED, continue to next task
- **stop** — halt build, save progress to STATE.md

#### 5. Context Check
After each task, self-assess context bracket:
- **GREEN**: Continue normally
- **YELLOW**: Mention it, continue but be concise
- **RED**: Complete current task verification, then suggest `/bolt:clear`

### After All Tasks

```
Build complete: {{passed}}/{{total}} tasks passed

{{Task 1}}: PASS
{{Task 2}}: PASS
{{Task 3}}: FAIL (skipped)

NEXT: Run /bolt:close to reconcile and close the loop.
```

Update `.bolt/{{version}}/STATE.md` with build results.

### Rules

- **Sequential execution only.** No parallel tasks, no subagents.
- **Never skip verification.** Every task gets verified.
- **Stop on FAIL by default.** User must explicitly choose to continue.
- **Respect boundaries.** Ask before touching protected files.
- **Commit after each task** if git is initialized (small, atomic commits).
- **Mandatory UNIFY**: Always remind user to run `/bolt:close` after build.
