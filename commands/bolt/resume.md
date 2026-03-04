# /bolt:resume — Reload Context

Restore context after returning to a project (new session, after /bolt:clear, etc.).

## Instructions

### Step 1: Read State

Read in this order:
1. `.bolt/STATE.md` — current position
2. `.bolt/PROJECT.md` — project context (skim, don't re-read everything)
3. `.bolt/ROADMAP.md` — phase overview

If `.bolt/` doesn't exist:
> No BOLT project found. Run `/bolt:init` to start.

### Step 2: Check for Handoff

Check if `.bolt/.continue-here.md` exists (created by `/bolt:pause`).
If yes:
- Read it for full context
- Delete it after loading (it's been consumed)

### Step 3: Load Latest Work

If a phase is in progress:
- Read the current plan file
- Read the latest summary if exists
- Note what tasks are done/remaining

### Step 4: Orient the User

Show a brief status:

```
Welcome back.

PROJECT: {{name}}
PHASE:   {{N}}/{{total}} — {{name}}
STATUS:  {{where we left off}}

NEXT: {{exactly one suggested action}}
```

### Rules

- **Fast.** Read files, show status, suggest action. Done.
- **One next action.** Don't list options.
- **No re-discovery.** Don't ask questions — read state and go.
- **If state is unclear**, default to `/bolt:status` for a fuller picture.
