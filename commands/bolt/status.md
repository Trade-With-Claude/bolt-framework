# /bolt:status — Where Are We

Show current project progress and suggest next action.

## Instructions

### Read State

Check what exists:

**If `.bolt/` exists with `SCHEMA` file:**
1. Read `.bolt/SCHEMA`
2. Read `.bolt/STATE.md` (root) — get current version
3. Read `.bolt/{{version}}/STATE.md`
4. Read `.bolt/{{version}}/ROADMAP.md`
5. Read latest SUMMARY.md if any phases complete

**If `.bolt/` exists WITHOUT `SCHEMA` file:**
> Your project uses an older BOLT structure. Run `/bolt:upgrade` to migrate.

**If no `.bolt/` but `IDEA.md` exists in project root (legacy init):**
> Found IDEA.md but no .bolt/ directory. Run `/bolt:upgrade` to migrate.

**If neither `.bolt/` nor `IDEA.md` exists:**
> No BOLT project found. Run `/bolt:init` to start.

### Display

Show status in this format:

```
PROJECT: {{name}}
VERSION: {{version}}
PHASE:   {{current}}/{{total}} — {{phase_name}}
STATUS:  {{status description}}
CONTEXT: {{GREEN/YELLOW/RED}}

Version History:
v1: complete (tagged)
v2: in progress

Progress ({{version}}):
Phase 1: {{name}} complete
Phase 2: {{name}} in progress (2/3 tasks done)
Phase 3: {{name}} pending
Phase 4: {{name}} pending

NEXT: {{exactly one suggested action}}
```

### Next Action Logic

Determine the single best next action:
- IDEA.md empty or not filled? → "Fill in `.bolt/{{version}}/IDEA.md`"
- No discovery done? → `/bolt:discover`
- No research and PROJECT.md Architecture is empty? → `/bolt:research`
- No roadmap? → `/bolt:roadmap`
- Roadmap but no plan for current phase? → `/bolt:plan N`
- Plan exists but not built? → `/bolt:build N`
- Built but not closed? → `/bolt:close`
- Phase complete? → `/bolt:plan N+1`
- All phases complete? → `/bolt:next` to start next version, or `/bolt:verify` for final UAT

### Rules

- **Lightweight.** Just read files and display. No computation.
- **One next action.** Never give multiple options.
- **Honest progress.** Show what's actually done, not what's planned.
