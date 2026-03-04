# /bolt:pause — Full Handoff

Save complete project state for when the user is leaving for hours or days.

## Instructions

### Step 1: Capture Current State

Gather:
- What phase/task are we in?
- What's been completed this session?
- What's the immediate next step?
- Any decisions made or pending?
- Any blockers or issues discovered?
- Mental context that would be lost (why we chose approach X, what we tried and failed, etc.)

### Step 2: Create Handoff File

Write `.bolt/.continue-here.md`:

```markdown
# Continue Here

## Session: {{date}}

## Where We Left Off
{{phase, task, what was happening}}

## What Got Done
- {{item 1}}
- {{item 2}}

## What's Remaining
- {{item 1}}
- {{item 2}}

## Key Decisions
- {{decision and rationale}}

## Mental Context
{{anything a fresh session needs to know that isn't in the formal docs}}

## Blockers
{{any issues preventing progress}}

## Next Action
{{exactly one thing to do when returning}}
```

### Step 3: Update STATE.md

- Set status to `paused`
- Update progress with what got done
- Set next action

### Step 4: Confirm

```
State saved to .bolt/.continue-here.md
STATE.md updated.

When you return, run /bolt:resume to pick up where we left off.
```

### Rules

- **Capture everything.** Assume the next session has zero context.
- **Be specific.** "Working on auth" is useless. "Implementing JWT refresh token, login endpoint works, need to add token rotation" is useful.
- **One next action.** The returning session should know exactly what to do first.
