# Context Brackets — Adaptive Behavior Guide

BOLT adapts its behavior based on how much context window has been consumed.

## Brackets

### GREEN (0-40% context used)
- Full explanations when helpful
- Rich formatting and status displays
- Normal verification detail
- Research allowed if needed

### YELLOW (40-70% context used)
- Shorter explanations
- Essential formatting only
- Verification stays full (never skip)
- Suggest `/bolt:clear` if nearing 60%

### RED (70%+ context used)
- Minimal text output
- No formatting extras
- Complete current task only
- **Immediately suggest `/bolt:clear`** after current task

## How to Self-Assess

Before each major action, estimate context usage:
1. How many messages deep are we?
2. How much code has been read/written?
3. Have we done research or large file reads?

If unsure, assume YELLOW and stay concise.

## Rules

- **Never skip verification** regardless of bracket
- **Never start a new task in RED** — close current, then `/bolt:clear`
- **Always tell the user** which bracket you're in if YELLOW or RED
- Plans created in YELLOW should be shorter (2 tasks max)
