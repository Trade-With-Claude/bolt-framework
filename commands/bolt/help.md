# /bolt:help — Command Reference

Display the BOLT framework command reference and workflow guide.

## Instructions

Print the following to the user:

---

**BOLT Framework — Lean Project Management for Claude Code**

## Commands

| Command | Description |
|---------|-------------|
| `/bolt:init` | Initialize project — creates .bolt/ directory |
| `/bolt:discover` | Deep Q&A to understand project scope and constraints |
| `/bolt:research` | Parallel agent-driven technical research |
| `/bolt:roadmap` | Break project into phases with requirements |
| `/bolt:plan <N>` | Plan phase N with tasks and acceptance criteria |
| `/bolt:build <N>` | Execute phase N plan sequentially |
| `/bolt:close` | UNIFY — reconcile plan vs actual (mandatory after build) |
| `/bolt:status` | Show progress and suggest next action |
| `/bolt:resume` | Reload context from STATE.md after returning |
| `/bolt:pause` | Full handoff — save complete state before leaving |
| `/bolt:clear` | Quick context save — for when context is heavy |
| `/bolt:verify` | Optional UAT — walk through acceptance criteria |
| `/bolt:help` | This command reference |

## Workflow

```
init → discover → research → roadmap → plan → build → close
                                        ↑                  |
                                        └──────────────────┘
                                           (next phase)
```

## Session Management

- `/bolt:pause` — Leaving for hours/days? Full handoff save
- `/bolt:clear` — Context heavy? Quick save, then resume
- `/bolt:resume` — Coming back? Reload context
- `/bolt:status` — Lost? See where you are

## Key Principles

1. **No subagents for building** — everything runs in-session
2. **Mandatory UNIFY** — always run `/bolt:close` after `/bolt:build`
3. **2-3 tasks per plan** — keeps context usage under 50%
4. **One next action** — every command suggests exactly one next step

## File Structure

```
.bolt/
├── PROJECT.md    # What, why, stack, decisions
├── STATE.md      # Current position (<100 lines)
├── ROADMAP.md    # Phases with requirements
└── phases/
    └── NN-name/
        ├── NN-MM-PLAN.md
        └── NN-MM-SUMMARY.md
```
