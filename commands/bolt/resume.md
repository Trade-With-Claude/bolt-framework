# /bolt:resume — Reload Context

Restore context after returning to a project (new session, after /bolt:clear, etc.).

## Instructions

### Step 1: Read State

Check what exists:

**If `.bolt/` exists with `SCHEMA` file:**
1. Read `.bolt/SCHEMA` for schema version
2. Read `.bolt/STATE.md` (root) — get current version
3. Read `.bolt/PROJECT.md` — project context (skim)
4. Read `.bolt/{{version}}/STATE.md` — current version state
5. Read `.bolt/{{version}}/ROADMAP.md` — phase overview

**If `.bolt/` exists WITHOUT `SCHEMA` file (old structure):**
> Your project uses an older BOLT structure. Run `/bolt:upgrade` to migrate.

**If no `.bolt/` but `IDEA.md` exists in project root (legacy init):**
> Found IDEA.md but no .bolt/ directory. Run `/bolt:upgrade` to migrate.

**If neither `.bolt/` nor `IDEA.md` exists:**
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
VERSION: {{version}}
PHASE:   {{N}}/{{total}} — {{name}}
STATUS:  {{where we left off}}

NEXT: {{exactly one suggested action}}
```

### Rules

- **Fast.** Read files, show status, suggest action. Done.
- **One next action.** Don't list options.
- **No re-discovery.** Don't ask questions — read state and go.
- **If state is unclear**, default to `/bolt:status` for a fuller picture.
