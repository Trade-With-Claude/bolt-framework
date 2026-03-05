# /bolt:roadmap — Create Project Phases

Break the project into sequential phases with clear requirements.

## Instructions

### Prerequisites

Read `.bolt/PROJECT.md`. It should have been filled by /bolt:discover and /bolt:research. If Architecture/Stack sections are mostly empty, suggest running `/bolt:research` first.

### Step 1: Analyze & Draft

Based on PROJECT.md, draft phases. Each phase should:
- Be **independently shippable** (something works after each phase)
- Build on previous phases
- Have 2-5 concrete requirements
- Have clear success criteria

### Step 2: Present to User

Show the roadmap in this format:

```
ROADMAP: {{project_name}}

Phase 1: {{name}}
  Goal: {{one sentence}}
  Requirements: R1, R2, R3
  Success: {{how to verify phase is done}}

Phase 2: {{name}}
  Goal: {{one sentence}}
  Requirements: R1, R2, R3
  Success: {{how to verify phase is done}}

...
```

Ask user: **"Does this look right? Want to add, remove, or reorder anything?"**

### Step 3: Commit

After user approves:
1. Write ROADMAP.md to `.bolt/ROADMAP.md`
2. Update STATE.md:
   - Phase: 1
   - Status: roadmap_complete
   - Next Action: `/bolt:plan 1`

### Guidelines

- **3-7 phases** is ideal. More than 7 means phases are too granular.
- **Phase 1 should be foundational** — project setup, core data model, basic structure.
- **Last phase should be polish** — docs, edge cases, deployment.
- Each phase name should be short (2-3 words max).
- Don't over-detail requirements — that's what /bolt:plan is for.

### Completion

```
Roadmap saved ({{N}} phases).
NEXT: Run /bolt:plan 1 to plan the first phase.
```
