# UI & Formatting Standards

## Progress Display

Use simple text-based progress indicators:

```
Phase 2/5: Authentication ████████░░░░ 67%
Task 2/3: Create login endpoint [PASS]
```

## Status Display

```
PROJECT: MyApp
PHASE:   2/5 — Authentication
TASK:    Building (2/3 done)
CONTEXT: GREEN
NEXT:    Complete JWT middleware
```

## Task Result Format

```
Task 1: Create user model ✓ PASS
Task 2: Add migrations    ✓ PASS
Task 3: Seed data         ✗ FAIL — migration error
```

## Acceptance Criteria Results

```
AC-1: User can register    ✓ PASS
AC-2: User can login       ✓ PASS
AC-3: Token refresh works  ~ PARTIAL — works but no expiry check
```

## Rules

- Keep status displays under 10 lines
- Use ✓ ✗ ~ for PASS/FAIL/PARTIAL
- No emojis beyond checkmarks unless user requests
- Progress bars use █ and ░ characters
- Always show NEXT action — reduce decision fatigue
- One blank line between sections, no more
