# /bolt:status — Where Are We

Show current project progress and suggest next action.

## Instructions

### Read State

Read these files (fail gracefully if missing):
1. `.bolt/STATE.md`
2. `.bolt/ROADMAP.md`
3. Latest SUMMARY.md if any phases complete

If `.bolt/` doesn't exist:
> No BOLT project found. Run `/bolt:init` to start.

### Display

Show status in this format:

```
PROJECT: {{name}}
PHASE:   {{current}}/{{total}} — {{phase_name}}
STATUS:  {{status description}}
CONTEXT: {{GREEN/YELLOW/RED}}

Progress:
Phase 1: {{name}} ✓ complete
Phase 2: {{name}} ░ in progress (2/3 tasks done)
Phase 3: {{name}} · pending
Phase 4: {{name}} · pending

NEXT: {{exactly one suggested action}}
```

### Next Action Logic

Determine the single best next action:
- No research and PROJECT.md Architecture is empty? → `/bolt:research`
- No roadmap? → `/bolt:roadmap`
- Roadmap but no plan for current phase? → `/bolt:plan N`
- Plan exists but not built? → `/bolt:build N`
- Built but not closed? → `/bolt:close`
- Phase complete? → `/bolt:plan N+1`
- All phases complete? → "Project complete! Consider `/bolt:verify` for final UAT."

### Rules

- **Lightweight.** Just read files and display. No computation.
- **One next action.** Never give multiple options.
- **Honest progress.** Show what's actually done, not what's planned.
