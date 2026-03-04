# BOLT — Lean Project Management for Claude Code

BOLT is a lightweight project management framework for Claude Code. It keeps everything in-session (no subagents for building), uses 12 commands, and enforces mandatory loop closure.

## Install

```bash
chmod +x install.sh
./install.sh
```

This copies the 12 command files to `~/.claude/commands/bolt/`.

## Quick Start

```
/bolt:init          # Set up project
/bolt:discover      # Deep Q&A about your project
/bolt:roadmap       # Break into phases
/bolt:plan 1        # Plan first phase
/bolt:build 1       # Build it
/bolt:close         # UNIFY — close the loop (mandatory)
```

## Workflow

```
init → discover → roadmap → plan → build → close
                                ↑               |
                                └───────────────┘
                                  (next phase)
```

## Commands

| Command | Description |
|---------|-------------|
| `/bolt:init` | Initialize project — creates .bolt/ |
| `/bolt:discover` | Deep Q&A for project understanding |
| `/bolt:roadmap` | Break project into phases |
| `/bolt:plan <N>` | Plan phase N with tasks and criteria |
| `/bolt:build <N>` | Execute phase plan with inline verification |
| `/bolt:close` | UNIFY — reconcile plan vs actual |
| `/bolt:status` | Show progress, suggest next action |
| `/bolt:resume` | Reload context after returning |
| `/bolt:pause` | Full handoff before leaving |
| `/bolt:clear` | Quick context save when window is heavy |
| `/bolt:verify` | Optional UAT walkthrough |
| `/bolt:help` | Command reference |

## Design Principles

- **No subagents** — everything runs in-session (~3k tokens saved per avoided subagent)
- **12 commands** — not 27, not 26
- **Mandatory UNIFY** — `/bolt:close` after every `/bolt:build`
- **2-3 tasks per plan** — fits in ~50% context window
- **One next action** — every command suggests exactly one next step
- **Context brackets** — adapts behavior as context fills up

## Project Structure

After `/bolt:init`, your project gets:

```
.bolt/
├── PROJECT.md          # What, why, stack, decisions
├── STATE.md            # Current position (<100 lines)
├── ROADMAP.md          # Phases with requirements
└── phases/
    └── 01-name/
        ├── 01-01-PLAN.md
        └── 01-01-SUMMARY.md
```

## Session Management

| Situation | Command |
|-----------|---------|
| Leaving for hours/days | `/bolt:pause` → full handoff |
| Context getting heavy | `/bolt:clear` → quick save |
| Coming back | `/bolt:resume` → reload context |
| Lost or confused | `/bolt:status` → see where you are |
