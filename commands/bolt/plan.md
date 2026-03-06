# /bolt:plan — Plan a Phase

Create a detailed execution plan for a specific phase.

**Usage:** `/bolt:plan <N>` where N is the phase number.

## Instructions

### Prerequisites

Determine the current version from `.bolt/STATE.md` (root).

1. Read `.bolt/{{version}}/ROADMAP.md` — get phase N details.
2. Read `.bolt/PROJECT.md` — get project context.
3. Read `.bolt/{{version}}/STATE.md` — verify we're ready to plan this phase.

If phase N doesn't exist, tell user and show available phases.

### Step 1: Smart Research Check

Self-assess: **Do I have enough knowledge to plan this phase?**

Consider:
- Am I familiar with the stack/libraries involved?
- Are there APIs I haven't used before?
- Is there existing code I need to understand first?

**If YES (research needed):**
Tell the user:
> I need to research {{topic}} because {{reason}}.
> This will involve {{what you'll do: read docs, explore codebase, etc.}}.
> OK to proceed?

Wait for confirmation, then research. Keep it focused — max 5-10 minutes of research.

**If NO (research not needed):**
Proceed directly to planning.

### Step 2: Explore Existing Code

If there's relevant existing code:
- Read key files that this phase will touch
- Note patterns, conventions, existing structure
- Identify boundaries (files NOT to change)

### Step 3: Create Plan

Create the plan with:

**Acceptance Criteria** (Given/When/Then format):
- 2-4 criteria per phase
- Each must be verifiable
- Include the verify step

**Tasks** (2-3 max):
Each task has exactly 4 fields:
- `files`: Which files to create/modify
- `action`: What to do (be specific)
- `verify`: How to verify it works
- `done`: false (set to true during build)

**Boundaries:**
- DO NOT CHANGE: files/patterns to protect
- OUT OF SCOPE: things explicitly not part of this phase

### Step 4: Present & Confirm

Show the plan to the user. Ask: **"Ready to build? Run `/bolt:build <N>`"**

### Step 5: Save

1. Create phase directory: `.bolt/{{version}}/phases/{{NN}}-{{name}}/`
2. Save plan as `{{NN}}-01-PLAN.md`
3. Update `.bolt/{{version}}/STATE.md`:
   - Phase: N
   - Plan: created
   - Next Action: `/bolt:build N`

### Guidelines

- **2-3 tasks maximum.** If you need more, the phase is too big — split it.
- **Tasks should take 5-15 minutes each** of Claude work.
- **Verify steps must be concrete** — a command to run, a file to check, a behavior to test.
- **Boundaries are sacred** — list files that must not change during this phase.
