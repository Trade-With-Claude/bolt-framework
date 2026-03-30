# BOLT — Claude Code Project Management Framework

**From idea to production with Claude Code.** BOLT is a lightweight project management framework for Claude Code that keeps everything in-session (no subagents for building), uses 16 slash commands, and enforces mandatory plan-vs-actual reconciliation after every build.

## Install

### Option 1: npm (recommended)

```bash
npx claude-bolt
```

That's it. This clones the repo and installs 16 commands to `~/.claude/commands/bolt/`.

### Option 2: git clone

```bash
git clone https://github.com/Trade-With-Claude/bolt-framework.git
cd bolt-framework
./install.sh
```

This copies the 16 command files to `~/.claude/commands/bolt/`.

## Upgrade

```bash
cd bolt-framework
git pull
./install.sh
```

Then in your project, if the structure changed:
```
/bolt:upgrade
```

This updates the command files in `~/.claude/commands/bolt/` — your project files are never touched.

## Quick Start

```
/bolt:init Dimension    # Create project folder + IDEA.md
# Fill in .bolt/v1/IDEA.md with your vision
/bolt:discover          # Deep Q&A about your project
/bolt:research          # Deep technical research
/bolt:roadmap           # Break into phases
/bolt:plan 1            # Plan first phase
/bolt:build 1           # Build it
/bolt:close             # UNIFY — close the loop (mandatory)
```

## Workflow

```
init → discover → research → roadmap → plan → build → close
                                        ↑                  |
                                        └──────────────────┘
                                           (next phase)

All phases done? → /bolt:next → new version cycle
```

## Commands

| Command | Description |
|---------|-------------|
| `/bolt:init <name>` | Create project folder with .bolt/ structure |
| `/bolt:discover` | Deep Q&A for project understanding |
| `/bolt:research` | Parallel agent-driven technical research |
| `/bolt:roadmap` | Break project into phases |
| `/bolt:plan <N>` | Plan phase N with tasks and criteria |
| `/bolt:build <N>` | Execute phase plan with inline verification |
| `/bolt:close` | UNIFY — reconcile plan vs actual |
| `/bolt:next` | Tag version, start next iteration |
| `/bolt:push` | Quick save — git add, commit, push |
| `/bolt:upgrade` | Migrate older .bolt/ to latest schema |
| `/bolt:status` | Show progress, suggest next action |
| `/bolt:resume` | Reload context after returning |
| `/bolt:pause` | Full handoff before leaving |
| `/bolt:clear` | Quick context save when window is heavy |
| `/bolt:verify` | Optional UAT walkthrough |
| `/bolt:help` | Command reference |

## Design Principles

- **No subagents** — everything runs in-session (~3k tokens saved per avoided subagent)
- **16 commands** — lean but complete
- **Mandatory UNIFY** — `/bolt:close` after every `/bolt:build`
- **2-3 tasks per plan** — fits in ~50% context window
- **One next action** — every command suggests exactly one next step
- **Context brackets** — adapts behavior as context fills up
- **Versioned iterations** — v1, v2, v3... with git tags for easy rollback

## Project Structure

After `/bolt:init`, your project gets:

```
my-project/
├── .bolt/
│   ├── SCHEMA            # Schema version (for upgrades)
│   ├── PROJECT.md        # Living doc — persists across versions
│   ├── STATE.md          # Tracks current version
│   └── v1/
│       ├── IDEA.md       # Your vision for v1
│       ├── ROADMAP.md    # Phases with requirements
│       ├── STATE.md      # V1 progress
│       └── phases/
│           └── 01-name/
│               ├── 01-01-PLAN.md
│               └── 01-01-SUMMARY.md
```

## Version Management

```
/bolt:next              # Tag v1, create v2 folder
git checkout v1         # Go back to v1 anytime
/bolt:upgrade           # Migrate old projects to new structure
```

## Session Management

| Situation | Command |
|-----------|---------|
| Leaving for hours/days | `/bolt:pause` — full handoff |
| Context getting heavy | `/bolt:clear` — quick save |
| Coming back | `/bolt:resume` — reload context |
| Lost or confused | `/bolt:status` — see where you are |
| Save progress | `/bolt:push` — git commit + push |
