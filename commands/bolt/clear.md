# /bolt:clear — Quick Context Reset

Quick-save state when context is getting heavy but you're still actively working.

## Instructions

### Step 1: Quick Save to STATE.md

Determine the current version from `.bolt/STATE.md` (root).

Update `.bolt/{{version}}/STATE.md` with:
- Current task (what we're in the middle of)
- What's done so far this session
- Immediate next step
- Any in-progress decisions

### Step 2: Instruct User

Tell the user:

```
Context saved to STATE.md.

To continue:
1. Clear this conversation (start a new one or use /clear)
2. Run /bolt:resume in the new session

This picks up exactly where we left off with a fresh context window.
```

### Rules

- **Lighter than /bolt:pause.** No handoff file, no mental context capture.
- **For active work.** User is still at the keyboard, just needs a fresh context.
- **STATE.md only.** Don't create extra files.
- **Fast.** This should take 10 seconds, not a minute.
